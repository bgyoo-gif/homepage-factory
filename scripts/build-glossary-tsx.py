#!/usr/bin/env python3
"""
Build per-page TSX for each glossary entry.

Auto-parses llm-capsule/input/llmcapsule_260506/glossary/{slug}.html and produces
self-contained Framer Code Components — no external imports.

Each output TSX inlines the GlossaryDetail body (CSS + JSX + JSON-LD logic) so
Framer can use them across folders without cross-import issues.

Outputs:
  llm-capsule/output/framer/glossary/{PascalCase}.tsx
"""

import re
import sys
from pathlib import Path

# ── Paths ──
ROOT = Path(__file__).resolve().parent.parent
INPUT_DIR = ROOT / "llm-capsule" / "input" / "llmcapsule_260506" / "glossary"
OUT_DIR = ROOT / "llm-capsule" / "output" / "framer" / "glossary"
GLOSSARY_DETAIL_TSX = ROOT / "llm-capsule" / "output" / "framer" / "shared" / "GlossaryDetail.tsx"


# ── Glossary entries (all 11 v6.2 terms) ──
GLOSSARY_ENTRIES = [
    {"slug": "ai-enablement-data-layer", "component": "AiEnablementDataLayer"},
    {"slug": "ai-ready-operational-layer", "component": "AiReadyOperationalLayer"},
    {"slug": "blocked-ai-workflow", "component": "BlockedAiWorkflow"},
    {"slug": "connector-lane", "component": "ConnectorLane"},
    {"slug": "differential-privacy", "component": "DifferentialPrivacy"},
    {"slug": "operational-data", "component": "OperationalData"},
    {"slug": "shadow-ai", "component": "ShadowAi"},
    {"slug": "sovereign-ai", "component": "SovereignAi"},
    {"slug": "state-vault-for-restoration", "component": "StateVaultForRestoration"},
    {"slug": "structure-preserving-encapsulation", "component": "StructurePreservingEncapsulation"},
    {"slug": "two-execution-paths", "component": "TwoExecutionPaths"},
]

# Slug → display label for related links
RELATED_LABELS = {
    "ai-enablement-data-layer": "AI enablement data layer",
    "ai-ready-operational-layer": "AI-ready operational layer",
    "blocked-ai-workflow": "Blocked AI workflow",
    "connector-lane": "Connector lane",
    "differential-privacy": "Differential privacy",
    "operational-data": "Operational data",
    "shadow-ai": "Shadow AI",
    "sovereign-ai": "Sovereign AI",
    "state-vault-for-restoration": "State vault for restoration",
    "structure-preserving-encapsulation": "Structure-preserving encapsulation",
    "two-execution-paths": "Two execution paths",
}


# ── Inline GlossaryDetail body (loaded from shared/GlossaryDetail.tsx) ──
def load_glossary_detail_body() -> str:
    """Extract the function body of GlossaryDetail (line 106 to before line 506)."""
    text = GLOSSARY_DETAIL_TSX.read_text(encoding="utf-8")
    lines = text.split("\n")
    # 1-indexed: 106..505 inclusive. Python list is 0-indexed → 105..504
    body_lines = lines[105:505]
    return "\n".join(body_lines)


GLOSSARY_DETAIL_BODY = load_glossary_detail_body()


# ── Props specification (mirrors GlossaryDetail.tsx interface + addPropertyControls) ──
PROPS_SPEC = [
    {"name": "backLabel",       "title": "Back Label",       "textarea": False},
    {"name": "backHref",        "title": "Back URL",         "textarea": False},
    {"name": "term",            "title": "Term",             "textarea": False},
    {"name": "lead",            "title": "Lead",             "textarea": True},
    {"name": "category",        "title": "Category",         "textarea": False},
    {"name": "definitionLabel", "title": "Definition Label", "textarea": False},
    {"name": "definitionBody",  "title": "Definition Body",  "textarea": True},
    {"name": "bodyHtml",        "title": "Body HTML",        "textarea": True},
    {"name": "related1Label",   "title": "Related 1 Label",  "textarea": False},
    {"name": "related1Href",    "title": "Related 1 URL",    "textarea": False},
    {"name": "related2Label",   "title": "Related 2 Label",  "textarea": False},
    {"name": "related2Href",    "title": "Related 2 URL",    "textarea": False},
    {"name": "related3Label",   "title": "Related 3 Label",  "textarea": False},
    {"name": "related3Href",    "title": "Related 3 URL",    "textarea": False},
    {"name": "related4Label",   "title": "Related 4 Label",  "textarea": False},
    {"name": "related4Href",    "title": "Related 4 URL",    "textarea": False},
    {"name": "related5Label",   "title": "Related 5 Label",  "textarea": False},
    {"name": "related5Href",    "title": "Related 5 URL",    "textarea": False},
]


# ── Escape helpers ──
def js_template_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace("`", "\\`")
    s = s.replace("${", "\\${")
    return s


def js_string_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def strip_html_tags(s: str) -> str:
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'")
    return re.sub(r"\s+", " ", s).strip()


# ── Per-page parser ──
def parse_glossary(entry: dict) -> dict:
    slug = entry["slug"]
    path = INPUT_DIR / f"{slug}.html"
    if not path.exists():
        raise FileNotFoundError(f"Missing input: {path}")
    html = path.read_text(encoding="utf-8")

    # html lang
    m = re.search(r'<html[^>]*lang="([^"]+)"', html)
    lang = m.group(1) if m else "en"

    # canonical
    m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    canonical = m.group(1) if m else f"https://llmcapsule.ai/glossary/{slug}"
    # normalize to /glossary/ (Framer routing)
    canonical = canonical.replace("/glossary/glossary/", "/glossary/")

    # description (for SEO fallback only; not used directly)
    # title (h1)
    m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.DOTALL)
    term = strip_html_tags(m.group(1)) if m else slug.replace("-", " ").title()

    # lead (article-hero__lead)
    m = re.search(r'<p[^>]*class="article-hero__lead"[^>]*>(.*?)</p>', html, re.DOTALL)
    lead = strip_html_tags(m.group(1)) if m else ""

    # category (article-meta__chip)
    m = re.search(r'<span[^>]*class="article-meta__chip"[^>]*>(.*?)</span>', html, re.DOTALL)
    category = strip_html_tags(m.group(1)) if m else "Definition"

    # Definition / TL;DR (tldr__label + tldr__body)
    definition_label = "Definition"
    definition_body = ""
    tldr_match = re.search(
        r'<div class="tldr"[^>]*>.*?<div class="tldr__label">(.*?)</div>\s*<p class="tldr__body">(.*?)</p>',
        html,
        re.DOTALL,
    )
    if tldr_match:
        definition_label = strip_html_tags(tldr_match.group(1))
        definition_body = strip_html_tags(tldr_match.group(2))

    # Body content: <article class="article-body">...</article>
    body_match = re.search(r'<article class="article-body"[^>]*>(.*?)</article>', html, re.DOTALL)
    body_html = body_match.group(1).strip() if body_match else ""

    # Fallback for definition_body when there's no tldr box:
    # use the first <p> in article-body (skipping callout/note boxes) as the definition.
    # If still empty, fall back to the hero lead.
    if not definition_body and body_html:
        # Try the first <p> that's not inside a callout/note div
        # Strip leading <div class="callout">...</div> blocks first
        cleaned = re.sub(r'^\s*<div[^>]*class="(?:callout|note)[^"]*"[^>]*>.*?</div>\s*', '', body_html, flags=re.DOTALL)
        first_p = re.search(r'<p>(.*?)</p>', cleaned, re.DOTALL)
        if first_p:
            definition_body = strip_html_tags(first_p.group(1))
    if not definition_body:
        definition_body = lead

    # Extract Related terms section BEFORE stripping it from body
    related = []
    related_terms_match = re.search(
        r'<h2>\s*Related\s*terms?\s*</h2>\s*<ul[^>]*>(.*?)</ul>',
        body_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    if related_terms_match:
        related_ul = related_terms_match.group(1)
        for ahref in re.findall(r'<a[^>]+href="([^"]+)"', related_ul):
            href = ahref
            # Normalize: keep /glossary/* as-is (Framer routing)
            slug_match = re.search(r'/glossary/([^/?#]+)', href)
            if not slug_match:
                continue
            ref_slug = slug_match.group(1)
            if ref_slug == slug:
                continue
            label = RELATED_LABELS.get(ref_slug, ref_slug.replace("-", " ").title())
            if any(r[1] == href for r in related):
                continue
            related.append((label, href))
            if len(related) >= 5:
                break
    while len(related) < 5:
        related.append(("", ""))

    # Strip "Related terms" + its <ul> from body (handled by GlossaryDetail's related section)
    body_html = re.sub(
        r'<h2>\s*Related\s*terms?\s*</h2>\s*<ul[^>]*>.*?</ul>',
        "",
        body_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    # Strip any leftover "Related" h2 + section/div structures
    body_html = re.sub(
        r'<h2>\s*Related[^<]*</h2>\s*<(div|section)[^>]*>.*?</\1>',
        "",
        body_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    body_html = re.sub(r'<section class="cta[-_]strip[^"]*"[^>]*>.*?</section>', "", body_html, flags=re.DOTALL)
    body_html = body_html.strip()

    return {
        "term": term,
        "lead": lead,
        "category": category,
        "definitionLabel": definition_label,
        "definitionBody": definition_body,
        "bodyHtml": body_html,
        "canonicalUrl": canonical,
        "inLanguage": lang,
        "related": related,
    }


# ── TSX builder ──
def build_tsx(entry: dict) -> str:
    slug = entry["slug"]
    component = entry["component"]
    meta = parse_glossary(entry)

    back_label = "← Glossary"
    back_href = "/resources/glossary"

    prop_values: dict[str, str] = {
        "backLabel": back_label,
        "backHref": back_href,
        "term": meta["term"],
        "lead": meta["lead"],
        "category": meta["category"],
        "definitionLabel": meta["definitionLabel"],
        "definitionBody": meta["definitionBody"],
        "bodyHtml": "__BODY_HTML__",
    }
    for i, (label, href) in enumerate(meta["related"], start=1):
        prop_values[f"related{i}Label"] = label
        prop_values[f"related{i}Href"] = href

    iface_block = "\n".join(f"  {p['name']}?: string" for p in PROPS_SPEC)

    default_lines = []
    for p in PROPS_SPEC:
        name = p["name"]
        v = prop_values.get(name, "")
        if v == "__BODY_HTML__":
            default_lines.append(f"  {name} = BODY_HTML,")
        else:
            default_lines.append(f'  {name} = "{js_string_escape(v)}",')
    defaults_block = "\n".join(default_lines)

    control_lines = []
    for p in PROPS_SPEC:
        name = p["name"]
        title_attr = p["title"]
        textarea = ", displayTextArea: true" if p["textarea"] else ""
        v = prop_values.get(name, "")
        if v == "__BODY_HTML__":
            line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: BODY_HTML{textarea} }},'
        else:
            line = f'  {name}: {{ type: ControlType.String, title: "{title_attr}", defaultValue: "{js_string_escape(v)}"{textarea} }},'
        control_lines.append(line)
    controls_block = "\n".join(control_lines)

    tsx = f"""// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-glossary-tsx.py
// To regenerate: python3 scripts/build-glossary-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — GlossaryDetail logic inlined for Framer cross-folder compatibility.

import {{ addPropertyControls, ControlType }} from "framer"

interface Props {{
{iface_block}
}}

const BODY_HTML = `{js_template_escape(meta["bodyHtml"])}`

export default function {component}({{
{defaults_block}
}}: Props) {{
{GLOSSARY_DETAIL_BODY}
}}

addPropertyControls({component}, {{
{controls_block}
}})
"""
    return tsx


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Output: {OUT_DIR}")

    for entry in GLOSSARY_ENTRIES:
        out_path = OUT_DIR / f"{entry['component']}.tsx"
        try:
            tsx = build_tsx(entry)
            out_path.write_text(tsx, encoding="utf-8")
            size_kb = out_path.stat().st_size / 1024
            print(f"  ✓ {out_path.name}  ({size_kb:.1f} KB)")
        except FileNotFoundError as e:
            print(f"  ✗ {entry['component']}.tsx  SKIP: {e}", file=sys.stderr)
            continue

    print(f"\nDone. {len(GLOSSARY_ENTRIES)} glossary entries generated.")


if __name__ == "__main__":
    main()
