#!/usr/bin/env python3
"""
Generate locale-variant TSX files (*Ko.tsx, *De.tsx) from a source TSX +
translation md file. Replaces default values in the Props block and
addPropertyControls block; renames the component to avoid Framer collisions.

Usage:
    python3 scripts/generate-locale-variant-tsx.py <tsx_path> <ko_md> <de_md>

Example:
    python3 scripts/generate-locale-variant-tsx.py \\
      llm-capsule/output/framer/architecture/ArchitectureFourZoneTechnical.tsx \\
      llm-capsule/output/translations/architecture-4zone-technical-ko-lines.md \\
      llm-capsule/output/translations/architecture-4zone-technical-de-lines.md
"""

import re
import sys
from pathlib import Path


def parse_translations(md_path: Path, lang_marker: str) -> dict[str, str]:
    """Return {prop_name: translated_text}. Skips entries still marked TODO."""
    text = md_path.read_text(encoding="utf-8")
    out: dict[str, str] = {}
    # Match: optional ### header, then propName line, English line, translation line
    # Split by blank lines into entries
    for block in re.split(r"\n\s*\n", text):
        lines = [ln.rstrip() for ln in block.split("\n") if ln.strip()]
        # Strip ## / ### headers
        lines = [ln for ln in lines if not ln.startswith("#")]
        # Skip meta lines
        lines = [
            ln for ln in lines
            if not ln.startswith("각 항목")
            and not ln.startswith("순서대로")
            and not ln.startswith("Each entry")
            and not ln.startswith("Apply in order")
        ]
        if len(lines) >= 3:
            name = lines[0].strip()
            trans = lines[2].strip()
            if re.match(r"^[a-zA-Z][a-zA-Z0-9]*$", name) and not trans.startswith("[TODO:"):
                out[name] = trans
    return out


def js_string_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    return re.sub(r"\s+", " ", s).strip()


def replace_defaults(tsx: str, translations: dict[str, str]) -> tuple[str, int]:
    """Replace defaults in:
       1.  `  propName = "old default",`   (function signature defaults)
       2.  `  propName: { type: ControlType.String, ..., defaultValue: "old" }`
    Returns (new_tsx, count_replaced).
    """
    count = 0

    # Pattern 1: function signature defaults
    def repl1(m: re.Match) -> str:
        nonlocal count
        name = m.group(1)
        if name in translations:
            count += 1
            new_val = js_string_escape(translations[name])
            return f'  {name} = "{new_val}",'
        return m.group(0)

    tsx = re.sub(
        r'^  (\w+) = "(?:[^"\\]|\\.)*",$',
        repl1,
        tsx,
        flags=re.MULTILINE,
    )

    # Pattern 2: addPropertyControls defaultValue
    def repl2(m: re.Match) -> str:
        nonlocal count
        name = m.group(1)
        prefix = m.group(2)  # everything before defaultValue
        suffix = m.group(3)  # everything after the default value string (e.g., , displayTextArea: true)
        if name in translations:
            count += 1
            new_val = js_string_escape(translations[name])
            return f'  {name}: {{ {prefix}defaultValue: "{new_val}"{suffix} }},'
        return m.group(0)

    tsx = re.sub(
        r'^  (\w+): \{ (.*?)defaultValue: "(?:[^"\\]|\\.)*"(.*?) \},$',
        repl2,
        tsx,
        flags=re.MULTILINE,
    )

    return tsx, count


def rename_component(tsx: str, old_name: str, new_name: str) -> str:
    """Rename component function, default export, addPropertyControls registration,
    and update header comments."""
    # 1. `export default function Old(` → `export default function New(`
    tsx = re.sub(
        rf'\bexport default function {re.escape(old_name)}\b',
        f'export default function {new_name}',
        tsx,
    )
    # 2. `addPropertyControls(Old, {` → `addPropertyControls(New, {`
    tsx = re.sub(
        rf'\baddPropertyControls\({re.escape(old_name)},',
        f'addPropertyControls({new_name},',
        tsx,
    )
    return tsx


def generate_variant(
    tsx_path: Path,
    md_path,
    suffix: str,
    lang_marker: str,
    lang_label: str,
):
    if md_path is None or not md_path.exists():
        print(f"  - {suffix}: translation file not found, skipping", file=sys.stderr)
        return None

    source_tsx = tsx_path.read_text(encoding="utf-8")
    translations = parse_translations(md_path, lang_marker)

    if not translations:
        print(f"  - {suffix}: no usable translations in {md_path.name}", file=sys.stderr)
        return None

    # Extract original component name from filename
    original_name = tsx_path.stem  # e.g. "ArchitectureFourZoneTechnical"
    new_name = f"{original_name}{suffix}"
    new_filename = f"{new_name}.tsx"
    out_path = tsx_path.with_name(new_filename)

    # Apply transformations
    variant = source_tsx
    variant, n_replaced = replace_defaults(variant, translations)
    variant = rename_component(variant, original_name, new_name)

    # Replace generator header note to reflect locale variant
    header_note = f"// Locale variant: {lang_label} defaults pre-filled from {md_path.name}.\n// Generator: scripts/generate-locale-variant-tsx.py\n"
    variant = re.sub(
        r'^// AUTO-GENERATED\..*?\n(?://.*?\n)*',
        header_note + "//\n",
        variant,
        count=1,
        flags=re.DOTALL,
    )

    out_path.write_text(variant, encoding="utf-8")
    size_kb = out_path.stat().st_size / 1024
    print(f"  ✓ {out_path.name}  ({size_kb:.1f} KB, {n_replaced} defaults updated)")
    return out_path


def main():
    if len(sys.argv) < 2:
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    tsx_path = Path(sys.argv[1]).resolve()
    if not tsx_path.exists():
        print(f"TSX not found: {tsx_path}", file=sys.stderr)
        sys.exit(1)

    # Optional explicit paths; otherwise infer from a sibling translations folder
    ko_md = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else None
    de_md = Path(sys.argv[3]).resolve() if len(sys.argv) > 3 else None

    print(f"Source: {tsx_path}")
    generate_variant(tsx_path, ko_md, "Ko", "[TODO:KO]", "Korean")
    generate_variant(tsx_path, de_md, "De", "[TODO:DE]", "German")


if __name__ == "__main__":
    main()
