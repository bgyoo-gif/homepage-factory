#!/usr/bin/env python3
"""
Homepage Factory — FastAPI Server (Multi-Brand)
파일 업로드 + 작업 상태 관리 + WebSocket 실시간 알림 + 정적 파일 서빙
브랜드별(cubig, llm-capsule) 경로 자동 분기
"""

import asyncio
import json
import os
import time
import uuid
from pathlib import Path
from typing import Dict, List, Set

from fastapi import FastAPI, UploadFile, File, WebSocket, WebSocketDisconnect, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

PROJECT_ROOT = Path(__file__).resolve().parent.parent
JOBS_DIR = PROJECT_ROOT / "server" / "jobs"
VALID_BRANDS = ("cubig", "llm-capsule")

JOBS_DIR.mkdir(exist_ok=True)


def brand_dirs(brand: str):
    """브랜드별 input/output 디렉토리 반환"""
    if brand not in VALID_BRANDS:
        raise ValueError(f"Invalid brand: {brand}. Must be one of {VALID_BRANDS}")
    input_dir = PROJECT_ROOT / brand / "input"
    output_dir = PROJECT_ROOT / brand / "output"
    input_dir.mkdir(parents=True, exist_ok=True)
    output_dir.mkdir(parents=True, exist_ok=True)
    return input_dir, output_dir


app = FastAPI(title="Homepage Factory Server")

# CORS — 모든 origin 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ══════════════════════════════════════
# WebSocket Connection Manager
# ══════════════════════════════════════

class ConnectionManager:
    """여러 클라이언트에게 동시 broadcast"""

    def __init__(self):
        self.active: Set[WebSocket] = set()

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.active.add(ws)

    def disconnect(self, ws: WebSocket):
        self.active.discard(ws)

    async def broadcast(self, message: dict):
        dead = set()
        for ws in self.active:
            try:
                await ws.send_json(message)
            except Exception:
                dead.add(ws)
        self.active -= dead


manager = ConnectionManager()


# ══════════════════════════════════════
# Job Management
# ══════════════════════════════════════

def create_job(filename: str, filepath: Path, brand: str) -> dict:
    job_id = str(uuid.uuid4())[:8]
    job = {
        "id": job_id,
        "filename": filename,
        "filepath": str(filepath),
        "brand": brand,
        "status": "pending",
        "logs": [{"time": time.strftime("%H:%M:%S"), "stage": "upload", "message": f"File received: {filename} (brand: {brand})"}],
        "result": None,
        "created_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }
    (JOBS_DIR / f"{job_id}.json").write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    return job


def load_job(job_id: str) -> dict | None:
    path = JOBS_DIR / f"{job_id}.json"
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def list_jobs(brand: str = None) -> list:
    jobs = []
    for p in sorted(JOBS_DIR.glob("*.json"), key=lambda x: x.stat().st_mtime, reverse=True):
        try:
            job = json.loads(p.read_text(encoding="utf-8"))
            if brand and job.get("brand") != brand:
                continue
            jobs.append(job)
        except Exception:
            pass
    return jobs


# ══════════════════════════════════════
# API Routes
# ══════════════════════════════════════

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...), brand: str = Query(default="cubig")):
    if brand not in VALID_BRANDS:
        return JSONResponse(status_code=400, content={"error": f"Invalid brand. Use: {', '.join(VALID_BRANDS)}"})

    input_dir, _ = brand_dirs(brand)
    content = await file.read()
    filepath = input_dir / file.filename
    filepath.write_bytes(content)
    job = create_job(file.filename, filepath, brand)

    # broadcast to all connected clients
    await manager.broadcast({
        "type": "job_created",
        "job": job,
    })

    # Auto-run pipeline in background
    import threading
    import importlib.util
    spec = importlib.util.spec_from_file_location("pipeline", Path(__file__).parent / "pipeline.py")
    pipeline_mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(pipeline_mod)
    run_pipeline = pipeline_mod.run_pipeline
    thread = threading.Thread(target=run_pipeline, args=(job["id"],), daemon=True)
    thread.start()

    return {"job_id": job["id"], "filename": file.filename, "brand": brand, "message": "Pipeline started automatically."}


@app.post("/api/convert-tsx")
async def convert_tsx(brand: str = Query(default="llm-capsule"), filename: str = Query(...)):
    """B-type HTML → Framer TSX 변환 시작"""
    if brand not in VALID_BRANDS:
        return JSONResponse(status_code=400, content={"error": f"Invalid brand. Use: {', '.join(VALID_BRANDS)}"})

    _, output_dir = brand_dirs(brand)
    html_path = output_dir / "html" / filename
    if not html_path.exists():
        return JSONResponse(status_code=404, content={"error": f"File not found: {filename}"})

    job = create_job(filename, html_path, brand)

    await manager.broadcast({"type": "tsx_job_created", "job": job})

    import threading
    import importlib.util
    spec = importlib.util.spec_from_file_location("pipeline", Path(__file__).parent / "pipeline.py")
    pipeline_mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(pipeline_mod)
    run_tsx = pipeline_mod.run_tsx_conversion
    thread = threading.Thread(target=run_tsx, args=(job["id"],), daemon=True)
    thread.start()

    return {"job_id": job["id"], "filename": filename, "brand": brand, "message": "TSX conversion started."}


@app.get("/api/jobs")
async def get_jobs(brand: str = Query(default=None)):
    return list_jobs(brand)


@app.get("/api/job/{job_id}")
async def get_job(job_id: str):
    job = load_job(job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "Job not found"})
    return job


@app.get("/api/brands")
async def get_brands():
    """사용 가능한 브랜드 목록 반환"""
    result = []
    for b in VALID_BRANDS:
        input_dir, output_dir = brand_dirs(b)
        input_count = len(list(input_dir.glob("*.html")))
        output_count = len(list(output_dir.rglob("*")))
        result.append({"name": b, "inputs": input_count, "outputs": output_count})
    return result


@app.get("/api/files")
async def list_files(brand: str = Query(default="cubig")):
    """브랜드별 output 디렉토리 실시간 스캔"""
    if brand not in VALID_BRANDS:
        return JSONResponse(status_code=400, content={"error": f"Invalid brand"})

    _, output_dir = brand_dirs(brand)
    files = []
    for p in sorted(output_dir.rglob("*")):
        if p.is_file() and not p.name.startswith("."):
            rel = p.relative_to(PROJECT_ROOT)
            files.append({
                "path": str(rel),
                "name": p.name,
                "dir": str(rel.parent),
                "ext": p.suffix,
                "size": p.stat().st_size,
                "modified": time.strftime("%Y-%m-%d %H:%M", time.localtime(p.stat().st_mtime)),
            })
    return files


@app.get("/api/tree")
async def file_tree(brand: str = Query(default="cubig")):
    """브랜드별 Input → Output 매핑 트리 반환"""
    if brand not in VALID_BRANDS:
        return JSONResponse(status_code=400, content={"error": f"Invalid brand"})

    input_dir, output_dir = brand_dirs(brand)

    def scan(directory):
        result = []
        if not directory.exists():
            return result
        for p in sorted(directory.rglob("*")):
            if p.is_file() and not p.name.startswith("."):
                rel = p.relative_to(PROJECT_ROOT)
                result.append({
                    "path": str(rel),
                    "name": p.name,
                    "ext": p.suffix,
                    "modified": time.strftime("%Y-%m-%d %H:%M", time.localtime(p.stat().st_mtime)),
                })
        return result

    inputs = scan(input_dir)
    outputs = scan(output_dir)

    # input 파일별로 output 매핑
    tree = []
    for inp in inputs:
        base = inp["name"].replace(".html", "")
        related = {"html": [], "tsx": [], "md": [], "preview": []}
        for out in outputs:
            oname = out["name"]
            opath = out["path"]
            # 파일명에 base가 포함되면 연결
            clean_base = base.replace("A-", "").replace("cubig-", "").replace("llm-capsule-", "")
            if base in oname or clean_base in opath:
                if out["ext"] in (".html",) and "preview" in oname:
                    related["preview"].append(out)
                elif out["ext"] in (".html",) and "framer" not in opath:
                    related["html"].append(out)
                elif out["ext"] in (".tsx",):
                    related["tsx"].append(out)
                elif out["ext"] in (".md",):
                    related["md"].append(out)
        if any(related[k] for k in related):
            tree.append({"input": inp, "output": related})

    # 매핑 안 된 output
    mapped_paths = set()
    for t in tree:
        for k in t["output"]:
            for f in t["output"][k]:
                mapped_paths.add(f["path"])
    orphans = {"html": [], "tsx": [], "md": [], "preview": []}
    for out in outputs:
        if out["path"] not in mapped_paths:
            if out["ext"] == ".tsx":
                orphans["tsx"].append(out)
            elif out["ext"] == ".md":
                orphans["md"].append(out)
            elif "preview" in out["name"]:
                orphans["preview"].append(out)
            elif out["ext"] == ".html":
                orphans["html"].append(out)
    has_orphans = any(orphans[k] for k in orphans)

    return {"brand": brand, "tree": tree, "orphans": orphans if has_orphans else None}


@app.get("/api/file-content")
async def get_file_content(path: str):
    """파일 내용을 텍스트로 반환 (보안: PROJECT_ROOT 내부만 허용)"""
    target = (PROJECT_ROOT / path).resolve()
    if not str(target).startswith(str(PROJECT_ROOT)):
        return JSONResponse(status_code=403, content={"error": "Access denied"})
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    try:
        text = target.read_text(encoding="utf-8")
        return {"path": path, "content": text}
    except UnicodeDecodeError:
        return JSONResponse(status_code=415, content={"error": "Binary file"})


# ══════════════════════════════════════
# WebSocket — 실시간 알림
# ══════════════════════════════════════

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await manager.connect(ws)
    try:
        while True:
            data = await ws.receive_text()
            if data == "ping":
                await ws.send_json({"type": "pong"})
    except WebSocketDisconnect:
        manager.disconnect(ws)


# ══════════════════════════════════════
# File Watcher — 모든 브랜드 output 변경 감지
# ══════════════════════════════════════

async def watch_output_dirs():
    """모든 브랜드의 output 디렉토리를 주기적으로 스캔, 변경 시 broadcast"""
    known: Dict[str, float] = {}

    # 초기 스캔 — 모든 브랜드
    for brand in VALID_BRANDS:
        _, output_dir = brand_dirs(brand)
        for p in output_dir.rglob("*"):
            if p.is_file() and not p.name.startswith("."):
                known[str(p)] = p.stat().st_mtime

    while True:
        await asyncio.sleep(3)
        current: Dict[str, float] = {}
        for brand in VALID_BRANDS:
            _, output_dir = brand_dirs(brand)
            for p in output_dir.rglob("*"):
                if p.is_file() and not p.name.startswith("."):
                    current[str(p)] = p.stat().st_mtime

        new_files = set(current) - set(known)
        modified_files = {k for k in set(current) & set(known) if current[k] != known[k]}
        deleted_files = set(known) - set(current)

        if new_files or modified_files or deleted_files:
            changes = []
            for f in new_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                # 브랜드 감지
                detected_brand = next((b for b in VALID_BRANDS if rel.startswith(b + "/")), None)
                changes.append({"action": "created", "path": rel, "name": Path(f).name, "brand": detected_brand})
            for f in modified_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                detected_brand = next((b for b in VALID_BRANDS if rel.startswith(b + "/")), None)
                changes.append({"action": "modified", "path": rel, "name": Path(f).name, "brand": detected_brand})
            for f in deleted_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                detected_brand = next((b for b in VALID_BRANDS if rel.startswith(b + "/")), None)
                changes.append({"action": "deleted", "path": rel, "name": Path(f).name, "brand": detected_brand})

            await manager.broadcast({
                "type": "files_changed",
                "changes": changes,
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            })

        known = current


@app.on_event("startup")
async def startup():
    asyncio.create_task(watch_output_dirs())


# ══════════════════════════════════════
# 정적 파일 서빙 (맨 마지막에 마운트)
# ══════════════════════════════════════

app.mount("/", StaticFiles(directory=str(PROJECT_ROOT), html=True), name="static")


if __name__ == "__main__":
    import uvicorn
    import sys

    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3333
    cert_dir = Path(__file__).parent / "certs"
    ssl_cert = cert_dir / "localhost+1.pem"
    ssl_key = cert_dir / "localhost+1-key.pem"
    use_ssl = ssl_cert.exists() and ssl_key.exists()

    proto = "https" if use_ssl else "http"
    ws_proto = "wss" if use_ssl else "ws"
    print(f"\n  Homepage Factory Server @ {proto}://localhost:{port}")
    print(f"  Brands: {', '.join(VALID_BRANDS)}")
    print(f"  Viewer: {proto}://localhost:{port}/cubig/reference/design-system-viewer.html")
    print(f"  API:    {proto}://localhost:{port}/api/brands")
    print(f"  WS:     {ws_proto}://localhost:{port}/ws")
    print(f"  SSL:    {'ON' if use_ssl else 'OFF (run: mkcert -install && mkcert localhost 127.0.0.1)'}")
    print(f"  Ctrl+C to stop\n")

    kwargs = {"host": "0.0.0.0", "port": port, "log_level": "info"}
    if use_ssl:
        kwargs["ssl_certfile"] = str(ssl_cert)
        kwargs["ssl_keyfile"] = str(ssl_key)
    uvicorn.run(app, **kwargs)
