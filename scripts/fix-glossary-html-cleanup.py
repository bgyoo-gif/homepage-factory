#!/usr/bin/env python3
"""
Fix HTML cleanup issues in glossary translation files (ko & de):
  1. Lone <li> tags not wrapped in <ul> or <ol>
  2. Stray </ul> tags after individual <li> items (operational-data ko pattern)
  3. Weird class names like 'garol-callout' → 'callout'
  4. <div class="callout"> without proper inner structure (no __body) — leave as-is

Strategy:
  - For each Body HTML section:
    a) Remove stray </ul> that come right after a single <li>...</li> with
       no matching <ul> opening before it.
    b) Group consecutive <li> lines (with blank lines allowed) into <ul>...</ul>
       blocks if not already wrapped.
    c) Replace weird-prefix class names with canonical ones.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRANS_DIR = ROOT / "llm-capsule" / "output" / "translations"


def fix_weird_class_names(text: str) -> str:
    # garol-callout / grog-callout 같은 prefix 오타 → callout
    return re.sub(r'class="(?:garol|grog|grain|gruel|gor)-callout"', 'class="callout"', text)


def remove_stray_ul_close_after_lone_li(text: str) -> str:
    """
    Pattern: <li>...</li>\n</ul>\n\n<li>...</li>\n</ul>
    Where there's NO matching <ul> opening. We strip the </ul> lines.
    Strategy: walk line by line, track open/close balance.
    """
    lines = text.split("\n")
    out: list[str] = []
    open_count = 0
    for line in lines:
        stripped = line.strip()
        if stripped == "<ul>":
            open_count += 1
            out.append(line)
            continue
        if stripped == "</ul>":
            if open_count > 0:
                open_count -= 1
                out.append(line)
            else:
                # stray </ul> — drop it
                continue
        else:
            out.append(line)
    return "\n".join(out)


def wrap_lone_li_groups(text: str) -> str:
    """
    Find consecutive <li>...</li> blocks not inside <ul>/<ol>,
    wrap them in <ul>...</ul>.
    Walk line-by-line; track in_list flag.
    """
    lines = text.split("\n")
    out: list[str] = []
    i = 0
    in_list = False
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("<ul>") or stripped.startswith("<ol>"):
            in_list = True
            out.append(line)
            i += 1
            continue
        if stripped.startswith("</ul>") or stripped.startswith("</ol>"):
            in_list = False
            out.append(line)
            i += 1
            continue

        # Detect lone <li>... block (start of group not inside any list)
        if not in_list and re.match(r'^\s*<li[\s>]', line):
            # Collect contiguous <li> lines (with optional blank lines between)
            group: list[str] = []
            j = i
            while j < len(lines):
                lj = lines[j]
                sj = lj.strip()
                if re.match(r'^\s*<li[\s>]', lj):
                    group.append(lj)
                    j += 1
                    continue
                if sj == "":
                    # peek next non-blank line
                    k = j + 1
                    while k < len(lines) and lines[k].strip() == "":
                        k += 1
                    if k < len(lines) and re.match(r'^\s*<li[\s>]', lines[k]):
                        # blank between <li> — include blank, continue
                        group.append(lj)
                        j += 1
                        continue
                    else:
                        break
                else:
                    break
            # If we collected a group, wrap it
            if group:
                # Preserve indentation of first item
                indent = re.match(r'^(\s*)', group[0]).group(1)
                out.append(f"{indent}<ul>")
                for g in group:
                    if g.strip():
                        out.append(g)
                out.append(f"{indent}</ul>")
                i = j
                continue

        out.append(line)
        i += 1

    return "\n".join(out)


def fix_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")

    text = original

    # 1. weird class names
    text = fix_weird_class_names(text)

    # 2. stray </ul> first (so wrap_lone_li doesn't get confused)
    text = remove_stray_ul_close_after_lone_li(text)

    # 3. wrap lone <li> groups
    text = wrap_lone_li_groups(text)

    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main():
    targets = sorted(TRANS_DIR.glob("glossary-*-{ko,de}-lines.md"))
    # glob doesn't expand braces; do manually
    targets = sorted(
        list(TRANS_DIR.glob("glossary-*-ko-lines.md")) +
        list(TRANS_DIR.glob("glossary-*-de-lines.md"))
    )
    for p in targets:
        try:
            if fix_file(p):
                print(f"  ✓ {p.name}")
            else:
                print(f"  - {p.name} (no changes)")
        except Exception as e:
            print(f"  ✗ {p.name}: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
