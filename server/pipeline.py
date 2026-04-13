"""
Homepage Factory — Conversion Pipeline (Multi-Brand)
Anthropic API로 product-designer → frontend-dev → qa 자동 실행
브랜드별 DS 로드 + 경로 분기
"""

import json
import os
import time
import subprocess
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
JOBS_DIR = PROJECT_ROOT / "server" / "jobs"
SKILLS_DIR = PROJECT_ROOT / ".claude" / "skills"

GITHUB_BASES = {
    "cubig": "https://bgyoo-gif.github.io/homepage-factory/cubig",
    "llm-capsule": "https://bgyoo-gif.github.io/homepage-factory/llm-capsule",
}


def load_ds_excerpt(brand: str, max_chars=6000):
    """core DS + brand DS를 합쳐서 로드"""
    core_path = SKILLS_DIR / "design-system-core.md"
    brand_path = SKILLS_DIR / f"design-system-{brand}.md"

    text = ""
    if core_path.exists():
        text += core_path.read_text(encoding="utf-8")[:max_chars]
    if brand_path.exists():
        text += "\n\n---\n\n" + brand_path.read_text(encoding="utf-8")[:2000]
    return text


def update_job(job_id, stage, message, status=None, result=None):
    path = JOBS_DIR / f"{job_id}.json"
    job = json.loads(path.read_text(encoding="utf-8"))
    job["logs"].append({"time": time.strftime("%H:%M:%S"), "stage": stage, "message": message})
    if status:
        job["status"] = status
    if result:
        job["result"] = result
    path.write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    return job


def call_claude(system_prompt, user_prompt, max_tokens=8000):
    """Call Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key:
        return None, "ANTHROPIC_API_KEY not set"

    try:
        import anthropic
    except ImportError:
        import sys
        venv_path = PROJECT_ROOT / ".venv" / "lib"
        for p in venv_path.glob("python*/site-packages"):
            if str(p) not in sys.path:
                sys.path.insert(0, str(p))
        import anthropic

    client = anthropic.Anthropic(api_key=api_key)
    try:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=max_tokens,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
        )
        return response.content[0].text, None
    except Exception as e:
        return None, str(e)


def run_pipeline(job_id):
    """Run full conversion pipeline for a job."""
    path = JOBS_DIR / f"{job_id}.json"
    job = json.loads(path.read_text(encoding="utf-8"))
    filename = job["filename"]
    filepath = Path(job["filepath"])
    basename = filepath.stem
    brand = job.get("brand", "cubig")

    # 브랜드별 경로
    input_dir = PROJECT_ROOT / brand / "input"
    output_dir = PROJECT_ROOT / brand / "output"
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "html").mkdir(exist_ok=True)
    (output_dir / "docs").mkdir(exist_ok=True)

    github_base = GITHUB_BASES.get(brand, GITHUB_BASES["cubig"])

    update_job(job_id, "orchestrator", f"Pipeline started (brand: {brand})", "running")

    # Read input
    try:
        input_html = filepath.read_text(encoding="utf-8")
    except Exception as e:
        update_job(job_id, "error", f"Cannot read input: {e}", "error")
        return

    update_job(job_id, "upload", f"File loaded: {len(input_html):,} chars")
    ds_excerpt = load_ds_excerpt(brand)

    # ── Step 1: Product Designer ──
    update_job(job_id, "product-designer", "Analyzing A-type HTML...")

    pd_system = (
        f"You are a product designer for {brand} homepage. Analyze HTML and create a layout specification. "
        "Output ONLY the spec in markdown, no explanation. Follow these rules strictly: "
        "No eyebrow in any section. FAQ must use accordion. Steps must use step-tabs. "
        "Cert/partner must use official DS components. Section headers center-aligned by default."
    )
    pd_prompt = f"Create a B-type conversion spec for this A-type HTML.\n\nBrand: {brand}\n\nHTML:\n{input_html[:12000]}\n\nDesign System:\n{ds_excerpt[:4000]}"

    spec_result, err = call_claude(pd_system, pd_prompt, max_tokens=6000)
    if err:
        update_job(job_id, "product-designer", f"API error: {err}", "error")
        return

    spec_path = output_dir / "docs" / f"{basename}-spec.md"
    spec_path.write_text(spec_result, encoding="utf-8")
    update_job(job_id, "product-designer", f"Spec saved ({len(spec_result):,} chars)")

    # ── Step 2: Frontend Dev ──
    update_job(job_id, "frontend-dev", "Generating B-type HTML...")

    fe_system = (
        "You are a senior frontend developer. Generate a complete B-type HTML file following the design system. "
        "Output ONLY the HTML file, no explanation. Rules: "
        "No eyebrow. text-wrap: balance (headings) / pretty (body). "
        "description max-width responsive (100% → 720px → 860px). "
        f"Image paths: {github_base}/reference/images/ "
        "FAQ: ds-ac-card accordion. KPI overlay: rgba(0,0,0,0.35). banner-full padding: space-xl."
    )
    fe_prompt = (
        f"Convert this spec into B-type HTML.\n\n"
        f"Brand: {brand}\n\n"
        f"SPEC:\n{spec_result[:6000]}\n\n"
        f"ORIGINAL HTML (for text):\n{input_html[:8000]}\n\n"
        f"DESIGN SYSTEM:\n{ds_excerpt[:4000]}"
    )

    html_result, err = call_claude(fe_system, fe_prompt, max_tokens=16000)
    if err:
        update_job(job_id, "frontend-dev", f"API error: {err}", "error")
        return

    html_path = output_dir / "html" / f"{basename}-b-type.html"
    html_path.write_text(html_result, encoding="utf-8")
    update_job(job_id, "frontend-dev", f"B-type HTML saved ({len(html_result):,} chars)")

    # ── Step 3: QA ──
    update_job(job_id, "qa", "Running validation...")

    qa_system = (
        "You are a QA engineer. Validate this B-type HTML against design system rules. "
        "Check: content integrity, DS compliance, code quality, responsiveness. "
        "Output a brief QA report with PASS/CONDITIONAL PASS/FAIL verdict."
    )
    qa_prompt = f"Validate this B-type HTML.\nBrand: {brand}\n\nHTML:\n{html_result[:10000]}"

    qa_result, err = call_claude(qa_system, qa_prompt, max_tokens=4000)
    if not err and qa_result:
        qa_path = output_dir / "docs" / f"{basename}-qa-report.md"
        qa_path.write_text(qa_result, encoding="utf-8")

        if "FAIL" in qa_result.upper() and "CONDITIONAL" not in qa_result.upper().split("FAIL")[0][-30:]:
            update_job(job_id, "qa", "FAIL — defects found")
        else:
            update_job(job_id, "qa", "PASS")
    else:
        update_job(job_id, "qa", f"QA skipped: {err or 'no result'}")

    # ── Step 4: Deploy ──
    update_job(job_id, "deploy", "Pushing to GitHub Pages...")
    try:
        subprocess.run(
            ["git", "add", "-A"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=30
        )
        subprocess.run(
            ["git", "commit", "-m", f"Auto-deploy: {brand}/{basename} pipeline complete"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=30
        )
        push_result = subprocess.run(
            ["git", "push", "origin", "gh-pages"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=60
        )
        if push_result.returncode == 0:
            update_job(job_id, "deploy", "GitHub Pages updated")
        else:
            update_job(job_id, "deploy", f"Push failed: {push_result.stderr.decode()[:200]}")
    except Exception as e:
        update_job(job_id, "deploy", f"Deploy error: {str(e)}")

    # ── Complete ──
    update_job(job_id, "complete", "Pipeline complete", "done", {
        "spec": f"{brand}/output/docs/{basename}-spec.md",
        "html": f"{brand}/output/html/{basename}-b-type.html",
        "qa": f"{brand}/output/docs/{basename}-qa-report.md",
    })


def run_tsx_conversion(job_id):
    """Convert a B-type HTML to Framer TSX + preview."""
    path = JOBS_DIR / f"{job_id}.json"
    job = json.loads(path.read_text(encoding="utf-8"))
    html_filename = job["filename"]  # e.g. "restoration-b-type.html"
    brand = job.get("brand", "llm-capsule")

    basename = html_filename.replace("-b-type.html", "")
    component_name = "".join(w.capitalize() for w in basename.split("-"))

    output_dir = PROJECT_ROOT / brand / "output"
    html_path = output_dir / "html" / html_filename
    framer_dir = output_dir / "framer" / basename
    framer_dir.mkdir(parents=True, exist_ok=True)

    update_job(job_id, "framer-dev", f"Converting {html_filename} to TSX...", "running")

    if not html_path.exists():
        update_job(job_id, "framer-dev", f"File not found: {html_path}", "error")
        return

    b_type_html = html_path.read_text(encoding="utf-8")
    ds_excerpt = load_ds_excerpt(brand, max_chars=3000)

    system_prompt = (
        "You are a Framer Code Component developer. Convert this B-type HTML into a single TSX file. "
        "Rules: "
        "1. No nav/footer — already removed. "
        "2. CSS Container Queries only (no @media). "
        "3. All visible text as props + addPropertyControls. "
        "4. JSON-LD (BreadcrumbList + page-specific schema). "
        "5. Container max-width: 1440px, padding: 16/32/32/120px. "
        "6. Palette constant object (no hardcoded colors in markup). "
        f"7. Class prefix: unique short prefix based on '{basename}'. "
        "8. FAQ/accordion: useState hook. "
        "9. Images: WebP preferred, absolute URLs. "
        "Output ONLY the TSX code, no explanation."
    )
    user_prompt = (
        f"Convert this B-type HTML to Framer TSX.\n\n"
        f"Brand: {brand}\n"
        f"Component name: {component_name}\n\n"
        f"HTML:\n{b_type_html[:14000]}\n\n"
        f"Design System:\n{ds_excerpt}"
    )

    tsx_result, err = call_claude(system_prompt, user_prompt, max_tokens=16000)
    if err:
        update_job(job_id, "framer-dev", f"API error: {err}", "error")
        return

    # Save TSX
    tsx_path = framer_dir / f"{component_name}.tsx"
    tsx_result_clean = tsx_result.strip()
    if tsx_result_clean.startswith("```"):
        tsx_result_clean = "\n".join(tsx_result_clean.split("\n")[1:])
    if tsx_result_clean.endswith("```"):
        tsx_result_clean = "\n".join(tsx_result_clean.split("\n")[:-1])
    tsx_path.write_text(tsx_result_clean, encoding="utf-8")
    update_job(job_id, "framer-dev", f"TSX saved: {tsx_path.name} ({len(tsx_result_clean):,} chars)")

    # Generate preview HTML
    preview_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{component_name} — Preview</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap" rel="stylesheet">
<style>body {{ margin: 0; font-family: "DM Sans", sans-serif; }}</style>
</head>
<body>
<p style="padding:40px;text-align:center;color:#9c9c9c;">
TSX preview — open {component_name}.tsx in Framer to render.
</p>
</body>
</html>"""
    (framer_dir / "preview.html").write_text(preview_html, encoding="utf-8")

    # Deploy
    update_job(job_id, "deploy", "Pushing TSX to GitHub...")
    try:
        subprocess.run(["git", "add", "-A"], cwd=str(PROJECT_ROOT), capture_output=True, timeout=30)
        subprocess.run(
            ["git", "commit", "-m", f"Auto-deploy: {brand}/{basename} TSX conversion"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=30
        )
        subprocess.run(
            ["git", "push", "origin", "main"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=60
        )
    except Exception as e:
        update_job(job_id, "deploy", f"Deploy error: {str(e)}")

    update_job(job_id, "complete", "TSX conversion complete", "done", {
        "tsx": f"{brand}/output/framer/{basename}/{component_name}.tsx",
        "preview": f"{brand}/output/framer/{basename}/preview.html",
    })
