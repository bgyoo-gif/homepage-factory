#!/usr/bin/env python3
"""
Fix glossary-*-de-lines.md files that have Body HTML section in Markdown format.
Convert Markdown → HTML to match the ko-lines.md format pattern.

Conversion rules (only inside "## Section 03: Body HTML" block):
  - `### h2: 텍스트` → `<h2>텍스트</h2>`
  - `**텍스트**` → `<strong>텍스트</strong>` (only at the start of bullet items / inline emphasis)
  - `^---$` → remove
  - Consecutive numbered items "1. ... 2. ... 3. ..." → wrap in <ol><li>...</li></ol>
  - Standalone paragraph → wrap in <p>...</p>
  - Bulleted **Bold.** sentences → wrap as <ul><li><strong>Bold</strong>. ...</li></ul>
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRANS_DIR = ROOT / "llm-capsule" / "output" / "translations"

TARGETS = [
    "glossary-blocked-ai-workflow-de-lines.md",
    "glossary-connector-lane-de-lines.md",
    "glossary-differential-privacy-de-lines.md",
    "glossary-shadow-ai-de-lines.md",
    "glossary-sovereign-ai-de-lines.md",
    "glossary-state-vault-for-restoration-de-lines.md",
    "glossary-structure-preserving-encapsulation-de-lines.md",
    "glossary-two-execution-paths-de-lines.md",
]


def md_inline_to_html(text: str) -> str:
    """Convert inline markdown (**bold**) to HTML, leaving other text intact."""
    # **bold** → <strong>bold</strong>
    return re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)


def convert_body_section(body: str) -> str:
    """Convert the Body HTML markdown block to HTML."""
    lines = body.split("\n")
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip horizontal rule
        if stripped == "---":
            i += 1
            continue

        # Heading: ### h2: 텍스트  → <h2>텍스트</h2>
        m_h2 = re.match(r"^###\s+h2:\s*(.+)$", stripped)
        if m_h2:
            out.append(f"<h2>{md_inline_to_html(m_h2.group(1).strip())}</h2>")
            out.append("")
            i += 1
            continue

        # Numbered list item: "1. ..."
        m_num = re.match(r"^(\d+)\.\s+(.+)$", stripped)
        if m_num:
            items: list[str] = []
            while i < len(lines):
                cur = lines[i].strip()
                if cur == "":
                    i += 1
                    continue
                if cur == "---":
                    break
                if re.match(r"^###\s+h2:", cur):
                    break
                if re.match(r"^\*\*", cur) and not re.match(r"^\d+\.", cur):
                    # bullet-style emphasis block (not a numbered item)
                    break
                m_item = re.match(r"^(\d+)\.\s+(.+)$", cur)
                if m_item:
                    items.append(md_inline_to_html(m_item.group(2).strip()))
                    i += 1
                else:
                    # paragraph continuation — append to last item
                    if items:
                        items[-1] = items[-1] + " " + md_inline_to_html(cur)
                    i += 1
            if items:
                out.append("<ol>")
                for it in items:
                    out.append(f"<li>{it}</li>")
                out.append("</ol>")
                out.append("")
            continue

        # Bulleted bold-style block: "**Bold.** rest..."
        if re.match(r"^\*\*", stripped):
            items: list[str] = []
            while i < len(lines):
                cur = lines[i].strip()
                if cur == "":
                    i += 1
                    continue
                if cur == "---":
                    break
                if re.match(r"^###\s+h2:", cur):
                    break
                if re.match(r"^\d+\.", cur):
                    break
                if re.match(r"^\*\*", cur):
                    items.append(md_inline_to_html(cur))
                    i += 1
                else:
                    # paragraph continuation
                    if items:
                        items[-1] = items[-1] + " " + md_inline_to_html(cur)
                    i += 1
            if items:
                out.append("<ul>")
                for it in items:
                    out.append(f"<li>{it}</li>")
                out.append("</ul>")
                out.append("")
            continue

        # Empty line
        if stripped == "":
            out.append("")
            i += 1
            continue

        # Plain paragraph
        para_lines: list[str] = [stripped]
        i += 1
        while i < len(lines):
            cur = lines[i].strip()
            if cur == "" or cur == "---":
                break
            if re.match(r"^###\s+h2:", cur):
                break
            if re.match(r"^(\d+\.\s+|\*\*)", cur):
                break
            para_lines.append(cur)
            i += 1
        para = " ".join(para_lines)
        out.append(f"<p>{md_inline_to_html(para)}</p>")
        out.append("")

    # Collapse multiple blank lines
    cleaned = re.sub(r"\n{3,}", "\n\n", "\n".join(out))
    return cleaned.strip() + "\n"


def fix_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")

    # Find Body HTML section
    m = re.search(
        r"(## Section 03: Body HTML\s*\n)(.*?)(\n## Section 04:|\n## Section [0-9]+:|\Z)",
        text,
        re.DOTALL,
    )
    if not m:
        print(f"  ✗ {path.name} — Section 03 not found")
        return False

    header = m.group(1)
    body = m.group(2)
    tail = m.group(3)

    # Only convert if it looks like markdown (### h2: present)
    if "### h2:" not in body and "---" not in body:
        print(f"  - {path.name} — already HTML, skipping")
        return False

    new_body = convert_body_section(body)

    new_text = text[:m.start()] + header + "\n" + new_body + "\n" + tail.lstrip() + text[m.end():]
    path.write_text(new_text, encoding="utf-8")
    return True


def main():
    for fname in TARGETS:
        path = TRANS_DIR / fname
        if not path.exists():
            print(f"  ✗ {fname} — not found")
            continue
        if fix_file(path):
            print(f"  ✓ {fname}")


if __name__ == "__main__":
    main()
