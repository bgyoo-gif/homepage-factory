#!/usr/bin/env python3
"""
Build self-contained Framer Code Component for architecture_4zone_technical-develop.html.

Strategy:
  - CSS block (lines 11-1597) → inlined <style>
  - body content (lines 1599-2114) → split into:
    * Section header (eyebrow, h2, description) → Props
    * 4 annotation cards (num, h3, description) → Props (12 fields)
    * Main diagram body → BODY_HTML constant (default value)
  - Output: self-contained TSX with full Props for translation

Output: llm-capsule/output/framer/architecture/ArchitectureFourZoneTechnical.tsx
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INPUT_FILE = ROOT / "llm-capsule" / "input" / "llmcapsule_260506" / "architecture_4zone_technical-develop.html"
OUT_DIR = ROOT / "llm-capsule" / "output" / "framer" / "architecture"
COMPONENT_NAME = "ArchitectureFourZoneTechnical"


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


def main():
    html = INPUT_FILE.read_text(encoding="utf-8")

    # 1. Extract CSS
    css_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
    if not css_match:
        print("No <style> block found", file=sys.stderr)
        sys.exit(1)
    css = css_match.group(1).strip()

    # 2. Extract body content
    body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
    if not body_match:
        print("No <body> found", file=sys.stderr)
        sys.exit(1)
    body = body_match.group(1).strip()
    # Strip HTML comments at top
    body = re.sub(r'^<!--.*?-->\s*', '', body, flags=re.DOTALL)

    # 3. Extract section header (eyebrow + h2 + p)
    section_head_match = re.search(
        r'<div class="section-head">\s*<div class="eyebrow">(.*?)</div>\s*<h2>(.*?)</h2>\s*<p>(.*?)</p>\s*</div>',
        body,
        re.DOTALL,
    )
    if section_head_match:
        eyebrow = strip_html_tags(section_head_match.group(1))
        section_title = strip_html_tags(section_head_match.group(2))
        section_description = strip_html_tags(section_head_match.group(3))
        # Replace section-head with placeholders we can swap in JSX
        body = body.replace(section_head_match.group(0), "<!-- SECTION_HEAD_PLACEHOLDER -->")
    else:
        eyebrow = "Technical view · zone-based architecture"
        section_title = "The same architecture, in technical view"
        section_description = "For architects and security reviewers..."

    # 4. Extract 4 annotation cards
    cards = []
    annotation_section = re.search(
        r'<div class="tech-diagram-annotation">(.*?)</div>\s*</div>',
        body,
        re.DOTALL,
    )
    if annotation_section:
        cards_html = annotation_section.group(1)
        for m in re.finditer(
            r'<article class="annotation-card">\s*<div class="annotation-card__num">(.*?)</div>\s*<h3 class="annotation-card__h">(.*?)</h3>\s*<p class="annotation-card__d">(.*?)</p>\s*</article>',
            cards_html,
            re.DOTALL,
        ):
            cards.append({
                "num": strip_html_tags(m.group(1)),
                "h": strip_html_tags(m.group(2)),
                "d": strip_html_tags(m.group(3)),
            })
        # Replace the entire tech-diagram-annotation block in body with placeholder
        body = re.sub(
            r'<div class="tech-diagram-annotation">.*?</div>\s*</div>\s*</div>',
            '<!-- ANNOTATION_CARDS_PLACEHOLDER -->\n  </div>\n</div>',
            body,
            count=1,
            flags=re.DOTALL,
        )

    # Pad cards to 4
    while len(cards) < 4:
        cards.append({"num": "", "h": "", "d": ""})

    # 5. Build Props spec
    props = [
        ("eyebrow", "Eyebrow", False),
        ("sectionTitle", "Section Title", False),
        ("sectionDescription", "Section Description", True),
    ]
    for i in range(1, 5):
        props.append((f"card{i}Num", f"Card {i} Num", False))
        props.append((f"card{i}Title", f"Card {i} Title", False))
        props.append((f"card{i}Description", f"Card {i} Description", True))

    prop_values = {
        "eyebrow": eyebrow,
        "sectionTitle": section_title,
        "sectionDescription": section_description,
    }
    for i, c in enumerate(cards, start=1):
        prop_values[f"card{i}Num"] = c["num"]
        prop_values[f"card{i}Title"] = c["h"]
        prop_values[f"card{i}Description"] = c["d"]

    # 6. Generate TSX
    iface_block = "\n".join(f"  {name}?: string" for name, _, _ in props)
    defaults_block = "\n".join(
        f'  {name} = "{js_string_escape(prop_values[name])}",' for name, _, _ in props
    )
    controls_block = "\n".join(
        f'  {name}: {{ type: ControlType.String, title: "{title}", defaultValue: "{js_string_escape(prop_values[name])}"{", displayTextArea: true" if textarea else ""} }},'
        for name, title, textarea in props
    )

    tsx = f"""// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-architecture-4zone-tsx.py
// To regenerate: python3 scripts/build-architecture-4zone-tsx.py
//
// Self-contained Framer Code Component for the 4-zone technical architecture page.
// Section header + 4 annotation cards exposed as Props (for translation).
// Main diagram preserved as inline HTML in BODY_HTML.

import {{ addPropertyControls, ControlType }} from "framer"

interface Props {{
{iface_block}
}}

const BODY_HTML = `{js_template_escape(body)}`

const CSS = `{js_template_escape(css)}`

export default function {COMPONENT_NAME}({{
{defaults_block}
}}: Props) {{
  // Render: replace placeholders in BODY_HTML with current Props values
  let html = BODY_HTML

  const sectionHead = `
    <div class="section-head">
      <div class="eyebrow">${{eyebrow}}</div>
      <h2>${{sectionTitle}}</h2>
      <p>${{sectionDescription}}</p>
    </div>
  `
  html = html.replace("<!-- SECTION_HEAD_PLACEHOLDER -->", sectionHead)

  const annotationCards = `
    <div class="tech-diagram-annotation">
      <article class="annotation-card">
        <div class="annotation-card__num">${{card1Num}}</div>
        <h3 class="annotation-card__h">${{card1Title}}</h3>
        <p class="annotation-card__d">${{card1Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card2Num}}</div>
        <h3 class="annotation-card__h">${{card2Title}}</h3>
        <p class="annotation-card__d">${{card2Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card3Num}}</div>
        <h3 class="annotation-card__h">${{card3Title}}</h3>
        <p class="annotation-card__d">${{card3Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card4Num}}</div>
        <h3 class="annotation-card__h">${{card4Title}}</h3>
        <p class="annotation-card__d">${{card4Description}}</p>
      </article>
    </div>
  `
  html = html.replace("<!-- ANNOTATION_CARDS_PLACEHOLDER -->", annotationCards)

  return (
    <>
      <style dangerouslySetInnerHTML={{ {{ __html: CSS }} }} />
      <div dangerouslySetInnerHTML={{ {{ __html: html }} }} />
    </>
  )
}}

addPropertyControls({COMPONENT_NAME}, {{
{controls_block}
}})
"""

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{COMPONENT_NAME}.tsx"
    out_path.write_text(tsx, encoding="utf-8")
    size_kb = out_path.stat().st_size / 1024
    print(f"✓ {out_path.name}  ({size_kb:.1f} KB)")
    print(f"  Props: {len(props)} ({len(cards)} cards + 3 header fields)")


if __name__ == "__main__":
    main()
