#!/usr/bin/env python3
"""
output/manifest.json 생성기 (Multi-Brand)
브랜드별 output/ 디렉토리를 스캔하여 input → output 매핑 JSON 생성
파이프라인 완료 후, deploy 전에 실행
"""

import json
import sys
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
VALID_BRANDS = ("cubig", "llm-capsule")
GITHUB_BASE = "https://bgyoo-gif.github.io/homepage-factory"


def scan(brand: str):
    input_dir = PROJECT_ROOT / brand / "input"
    output_dir = PROJECT_ROOT / brand / "output"
    manifest_path = output_dir / "manifest.json"

    inputs = {}
    orphans = {"html": [], "docs": [], "tsx": [], "preview": []}

    # Scan input files
    if input_dir.exists():
        for p in sorted(input_dir.glob("*.html")):
            base = p.stem
            inputs[base] = {
                "input": {
                    "name": p.name,
                    "path": f"{GITHUB_BASE}/{brand}/input/{p.name}",
                    "modified": time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime)),
                },
                "html": [],
                "docs": [],
                "tsx": [],
                "preview": [],
            }

    # Scan output files
    if output_dir.exists():
        for p in sorted(output_dir.rglob("*")):
            if not p.is_file() or p.name.startswith(".") or p.name == "manifest.json":
                continue

            rel = str(p.relative_to(PROJECT_ROOT))
            url = f"{GITHUB_BASE}/{rel}"
            modified = time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime))
            entry = {"name": p.name, "path": url, "modified": modified}

            # Match to input
            matched = False
            for base, group in inputs.items():
                clean_base = base.replace("A-", "").replace("cubig-", "").replace("llm-capsule-", "")
                path_match = (
                    f"/{base}" in rel or f"/{base}." in rel or f"/{base}-" in rel or
                    f"/{clean_base}" in rel or f"/{clean_base}." in rel or
                    base in rel.split("/")[-1] or clean_base in rel.split("/")[-1]
                )
                framer_match = "framer" in rel and (
                    f"framer/{base}/" in rel or f"framer/{clean_base}/" in rel
                )
                if path_match or framer_match:
                    if p.suffix == ".tsx":
                        group["tsx"].append(entry)
                    elif p.suffix == ".md":
                        group["docs"].append(entry)
                    elif "preview" in p.name or ("framer" in rel and p.suffix == ".html"):
                        group["preview"].append(entry)
                    elif p.suffix == ".html":
                        group["html"].append(entry)
                    matched = True
                    break

            if not matched:
                if p.suffix == ".tsx":
                    orphans["tsx"].append(entry)
                elif p.suffix == ".md":
                    orphans["docs"].append(entry)
                elif p.suffix == ".html":
                    orphans["html"].append(entry)

    # Build result
    groups = []
    for base, group in inputs.items():
        total = len(group["html"]) + len(group["docs"]) + len(group["tsx"]) + len(group["preview"])
        if total > 0:
            groups.append(group)

    orphan_total = sum(len(v) for v in orphans.values())
    if orphan_total > 0:
        groups.append({
            "input": {"name": "(standalone)", "path": "", "modified": ""},
            **orphans,
        })

    manifest = {
        "brand": brand,
        "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
        "github_base": f"{GITHUB_BASE}/{brand}",
        "groups": groups,
    }

    output_dir.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    file_count = sum(len(g.get("tsx", [])) + len(g.get("html", [])) + len(g.get("docs", [])) for g in groups)
    print(f"[{brand}] manifest.json: {len(groups)} groups, {file_count} files")
    return manifest


def scan_all():
    """모든 브랜드의 manifest 생성"""
    for brand in VALID_BRANDS:
        scan(brand)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] in VALID_BRANDS:
        scan(sys.argv[1])
    else:
        scan_all()
