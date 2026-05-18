#!/usr/bin/env python3
"""
Regenerate architecture-4zone-technical-{ko,de}-lines.md to match the new
ArchitectureFourZoneTechnical.tsx Props (134 fields).

Preserves existing ko/de translations from the previous files (those covered
the 15 original Props). New props receive a [TODO:KO] / [TODO:DE] marker.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TSX = ROOT / "llm-capsule" / "output" / "framer" / "architecture" / "ArchitectureFourZoneTechnical.tsx"
KO = ROOT / "llm-capsule" / "output" / "translations" / "architecture-4zone-technical-ko-lines.md"
DE = ROOT / "llm-capsule" / "output" / "translations" / "architecture-4zone-technical-de-lines.md"


def parse_props(tsx_text: str) -> list[tuple[str, str, str]]:
    """Return list of (prop_name, title, default_value)."""
    pattern = re.compile(
        r'(\w+):\s*\{\s*type:\s*ControlType\.String,\s*title:\s*"([^"]+)",\s*defaultValue:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL,
    )
    props = []
    for m in pattern.finditer(tsx_text):
        name = m.group(1)
        title = m.group(2)
        default = m.group(3).replace('\\"', '"').replace("\\\\", "\\")
        props.append((name, title, default))
    return props


def parse_existing(md_text: str) -> dict[str, str]:
    """Parse existing translation file: returns {prop_name: translated_text}."""
    out: dict[str, str] = {}
    blocks = re.split(r"\n---+\n", md_text)
    for block in blocks:
        # Each section may contain multiple prop entries
        # Pattern: <propName>\n<english>\n<translation>
        # blank line separates entries
        entries = re.split(r"\n\s*\n", block.strip())
        for ent in entries:
            lines = [ln.rstrip() for ln in ent.split("\n") if ln.strip()]
            # Skip headers and meta
            lines = [ln for ln in lines if not ln.startswith("#") and not ln.startswith("각 항목") and not ln.startswith("순서대로") and not ln.startswith("Each entry") and not ln.startswith("Apply in order")]
            if len(lines) >= 3:
                name = lines[0].strip()
                trans = lines[2].strip()
                # Treat [TODO:*] as "not yet translated"
                if re.match(r"^[a-zA-Z][a-zA-Z0-9]*$", name) and not trans.startswith("[TODO:"):
                    out[name] = trans
    return out


def write_translation_file(
    path: Path,
    props: list[tuple[str, str, str]],
    existing: dict[str, str],
    lang_label: str,
    lang_marker: str,
    header_title: str,
) -> int:
    lines = [
        f"# architecture_4zone_technical-develop — {lang_label} 번역 (literal)" if lang_marker == "[TODO:KO]"
        else f"# architecture_4zone_technical-develop — {lang_label} translation (literal)",
        "",
        "각 항목 = Framer Properties 패널의 Props 1개에 해당." if lang_marker == "[TODO:KO]"
        else "Each entry = one Prop in the Framer Properties panel.",
        "순서대로 입력하면 그대로 적용됨." if lang_marker == "[TODO:KO]"
        else "Apply in order; values map 1:1 to Props.",
        "",
    ]

    # Group props by first segment of title, preserve insertion order within groups.
    GROUP_ORDER = ["Section", "Card 1", "Card 2", "Card 3", "Card 4",
                   "Connector",
                   "Z1", "Z2", "Z3", "Z4",
                   "Core", "Core 01", "Core 02", "Core 03", "Core 04", "Core 05", "Core 06"]
    grouped: dict[str, list[tuple[str, str, str]]] = {}
    for p in props:
        name, title, default = p
        group = title.split(" · ")[0] if " · " in title else title
        grouped.setdefault(group, []).append(p)

    new_count = 0
    # Sort: known groups first in GROUP_ORDER, then any unknown groups alphabetically
    ordered_groups = [g for g in GROUP_ORDER if g in grouped] + \
                     sorted(g for g in grouped if g not in GROUP_ORDER)

    for group in ordered_groups:
        lines.append("---")
        lines.append("")
        lines.append(f"## {group}")
        lines.append("")
        for name, title, default in grouped[group]:
            translation = existing.get(name)
            if translation is None:
                translation = lang_marker
                new_count += 1
            lines.append(f"### {title}")
            lines.append(name)
            lines.append(default)
            lines.append(translation)
            lines.append("")

    path.write_text("\n".join(lines), encoding="utf-8")
    return new_count


def main():
    tsx_text = TSX.read_text(encoding="utf-8")
    props = parse_props(tsx_text)
    print(f"Parsed {len(props)} props from TSX")

    ko_existing = parse_existing(KO.read_text(encoding="utf-8")) if KO.exists() else {}
    de_existing = parse_existing(DE.read_text(encoding="utf-8")) if DE.exists() else {}
    print(f"Existing ko translations: {len(ko_existing)}")
    print(f"Existing de translations: {len(de_existing)}")

    ko_new = write_translation_file(KO, props, ko_existing, "한국어", "[TODO:KO]", "한국어 번역")
    de_new = write_translation_file(DE, props, de_existing, "Deutsch", "[TODO:DE]", "Deutsch translation")

    print(f"✓ {KO.name}: {len(props) - ko_new} preserved, {ko_new} new TODO")
    print(f"✓ {DE.name}: {len(props) - de_new} preserved, {de_new} new TODO")


if __name__ == "__main__":
    main()
