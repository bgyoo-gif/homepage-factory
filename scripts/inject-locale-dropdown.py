#!/usr/bin/env python3
"""
Inject the locale-dropdown pattern (single TSX + embedded TRANSLATIONS dict)
into an existing self-contained TSX.

Reads:
- TSX file (with English defaults in interface signature and addPropertyControls).
- ko + de translation md files. Two formats supported:
  - Line-based: propName / English / translation triplets.
  - Section-based: ## Section headers; en/translation text pairs in sequential order.
  In section-based mode, the en text is matched against TSX prop defaults to
  recover the propName.

Transforms the TSX to:
1. Add `locale?: "en" | "ko" | "de"` prop with ControlType.Enum dropdown.
2. Insert TRANSLATIONS<en/ko/de> dict at module level.
3. Empty individual prop defaultValue strings.
4. Add a resolver block at the top of the function body that resolves each
   prop via `userValue || T[propName] || EN[propName]`.
5. Reference resolved values (`_propName`) in the function body.

Usage:
    python3 scripts/inject-locale-dropdown.py <tsx_path> <ko_md> <de_md>

The script is idempotent: running it on an already-injected TSX leaves it
unchanged (locale prop already present is detected and the injection is
skipped).
"""

import re
import sys
from pathlib import Path


# ── Translation md parser ─────────────────────────────────────────────────

def parse_line_based(text: str) -> "list[tuple[str, str, str]]":
    """Returns [(propName, en, translation)]. Skips [TODO:*] entries."""
    out = []
    for block in re.split(r"\n\s*\n", text):
        lines = [ln.rstrip() for ln in block.split("\n") if ln.strip()]
        lines = [ln for ln in lines if not ln.startswith("#")]
        lines = [
            ln for ln in lines
            if not ln.startswith("각 항목") and not ln.startswith("순서대로")
            and not ln.startswith("Each entry") and not ln.startswith("Apply in order")
        ]
        if len(lines) >= 3:
            name = lines[0].strip()
            en = lines[1].strip()
            trans = lines[2].strip()
            if re.match(r"^[a-zA-Z][a-zA-Z0-9]*$", name) and not trans.startswith("[TODO:"):
                out.append((name, en, trans))
    return out


def parse_section_based(text: str) -> "list[tuple[str, str]]":
    """Returns [(en, translation)] pairs in sequential order."""
    pairs = []
    lines = text.split("\n")
    i = 0
    while i < len(lines) - 1:
        en = lines[i].strip()
        nxt = lines[i + 1].strip() if i + 1 < len(lines) else ""
        # Skip blank lines, headers, separators
        if not en or en.startswith("#") or en.startswith("---") or en.startswith("순서대로"):
            i += 1
            continue
        if not nxt or nxt.startswith("#") or nxt.startswith("---"):
            i += 1
            continue
        # Treat (en, nxt) as a pair; advance past both
        pairs.append((en, nxt))
        i += 2
        # Skip blank line after the pair
        while i < len(lines) and not lines[i].strip():
            i += 1
    return pairs


# ── TSX parser ────────────────────────────────────────────────────────────

PROP_DEFAULT_RE = re.compile(
    r'^  (\w+):\s*\{\s*type:\s*ControlType\.String,\s*title:\s*"([^"]+)",\s*'
    r'defaultValue:\s*"((?:[^"\\]|\\.)*)"',
    re.MULTILINE,
)


def parse_tsx_props(tsx: str) -> "list[tuple[str, str, str]]":
    """Returns [(propName, title, defaultValue_unescaped)] in declaration order."""
    out = []
    for m in PROP_DEFAULT_RE.finditer(tsx):
        name = m.group(1)
        title = m.group(2)
        default = m.group(3).replace('\\"', '"').replace("\\\\", "\\").replace("\\n", "\n")
        out.append((name, title, default))
    return out


def has_locale_prop(tsx: str) -> bool:
    return 'locale?: "en" | "ko" | "de"' in tsx or "TRANSLATIONS" in tsx


# ── Match section-based pairs to TSX props ────────────────────────────────

def fuzzy_match(a: str, b: str) -> bool:
    """Loose equality after collapsing whitespace."""
    norm_a = re.sub(r"\s+", " ", a).strip()
    norm_b = re.sub(r"\s+", " ", b).strip()
    return norm_a == norm_b or norm_a in norm_b or norm_b in norm_a


def map_section_to_props(
    tsx_props: "list[tuple[str, str, str]]",
    pairs: "list[tuple[str, str]]",
) -> "dict[str, str]":
    """For each tsx prop, find the matching pair by en text and return {prop: translation}."""
    out: "dict[str, str]" = {}
    used = set()
    for name, _, default in tsx_props:
        if not default.strip():
            continue
        for idx, (en, trans) in enumerate(pairs):
            if idx in used:
                continue
            if fuzzy_match(en, default):
                out[name] = trans
                used.add(idx)
                break
    return out


# ── Build TRANSLATIONS dict & resolver block ──────────────────────────────

def js_string_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    return re.sub(r"\s+", " ", s).strip()


def build_translations_block(
    tsx_props: "list[tuple[str, str, str]]",
    ko_translations: "dict[str, str]",
    de_translations: "dict[str, str]",
) -> str:
    def dict_for(d: "dict[str, str]", fallback_to_default: bool) -> str:
        lines = []
        for name, _, default in tsx_props:
            val = d.get(name)
            if val is None and fallback_to_default:
                val = default
            elif val is None:
                val = ""
            lines.append(f'    {name}: "{js_string_escape(val)}",')
        return "\n".join(lines)

    en_dict = dict_for({n: d for n, _, d in tsx_props}, fallback_to_default=True)
    ko_dict = dict_for(ko_translations, fallback_to_default=True)
    de_dict = dict_for(de_translations, fallback_to_default=True)

    return (
        'const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {\n'
        "  en: {\n" + en_dict + "\n  },\n"
        "  ko: {\n" + ko_dict + "\n  },\n"
        "  de: {\n" + de_dict + "\n  },\n"
        "}\n"
    )


# ── Mutate TSX ────────────────────────────────────────────────────────────

def add_locale_to_interface(tsx: str) -> str:
    return re.sub(
        r"(interface Props \{\n)",
        r'\1  locale?: "en" | "ko" | "de"\n',
        tsx,
        count=1,
    )


def insert_translations_dict(tsx: str, dict_block: str) -> str:
    """Insert the dict between the BODY_HTML/CSS constants and the function declaration."""
    return re.sub(
        r"(\nexport default function )",
        f"\n{dict_block}\n\\1",
        tsx,
        count=1,
    )


def add_locale_default_and_resolver(
    tsx: str, tsx_props: "list[tuple[str, str, str]]"
) -> str:
    """Add `locale = "en",` to function signature defaults and insert resolver lines.

    Resolver priority: dict[locale] is source of truth.
      - _propName = T["propName"] || TRANSLATIONS.en["propName"] || propName
      - This eliminates all stored-prop interference from Framer caching.
    """
    tsx = re.sub(
        r"(export default function \w+\(\{\n)",
        r'\1  locale = "en",\n',
        tsx,
        count=1,
    )

    resolver_lines = ['  const T = TRANSLATIONS[locale] || TRANSLATIONS.en']
    for name, _, _ in tsx_props:
        resolver_lines.append(
            f'  const _{name} = T["{name}"] || TRANSLATIONS.en["{name}"] || {name}'
        )
    resolver_block = "\n".join(resolver_lines)

    tsx = re.sub(
        r"(\}:\s*Props\)\s*\{\n)",
        r"\1" + resolver_block + "\n\n",
        tsx,
        count=1,
    )
    return tsx


def empty_default_values(tsx: str) -> str:
    """Set both the signature defaults and addPropertyControls defaults to empty string.

    Tolerates aligned whitespace (e.g. `tag:              { ... }`)."""
    # Signature defaults: `  propName = "anything"` (multiline, in function args)
    # Match only inside function arg list. Locale stays "en".
    tsx = re.sub(
        r'^  (\w+) = "(?:[^"\\]|\\.)*",$',
        lambda m: f'  {m.group(1)} = "",' if m.group(1) != "locale" else m.group(0),
        tsx,
        flags=re.MULTILINE,
    )

    # addPropertyControls defaults — tolerate aligned spacing between `:` and `{`
    # and inside the brace. Preserve all other fields (title, displayTextArea, etc.).
    # Re-emit fields with proper comma separation.
    def repl(m):
        name = m.group(1)
        if name == "locale":
            return m.group(0)
        indent = "  "
        sep_after_name = m.group(2)  # spaces between `:` and `{`
        prefix = m.group(3).strip().rstrip(",").strip()  # fields before defaultValue
        suffix = m.group(4).strip().lstrip(",").strip()  # fields after defaultValue
        parts = []
        if prefix:
            parts.append(prefix)
        parts.append('defaultValue: ""')
        if suffix:
            parts.append(suffix)
        return f"{indent}{name}:{sep_after_name}{{ " + ", ".join(parts) + " },"

    tsx = re.sub(
        r'^  (\w+):(\s*)\{\s*(.*?)defaultValue:\s*"(?:[^"\\]|\\.)*"\s*,?\s*(.*?)\s*\},?\s*$',
        repl,
        tsx,
        flags=re.MULTILINE,
    )
    return tsx


def replace_prop_refs_with_resolved(
    tsx: str, tsx_props: "list[tuple[str, str, str]]"
) -> str:
    """Within the function body only (between `}: Props) {` and `addPropertyControls(`),
    replace bare prop references with their resolved underscored versions.
    Avoids replacing inside string literals or property keys."""
    m_start = re.search(r"\}:\s*Props\)\s*\{\n", tsx)
    m_end = re.search(r"\naddPropertyControls\(", tsx)
    if not m_start or not m_end:
        return tsx
    body_start = m_start.end()
    body_end = m_end.start()
    body = tsx[body_start:body_end]

    # Replace `propName` as identifier with `_propName`. Use word boundaries
    # but skip if preceded by `.`, `"`, `_`, or `-` (CSS class hyphens) — and
    # skip occurrences inside `className="..."` / `class="..."` string literals.
    def replace_prop_in_body(text: str, name: str) -> str:
        out = []
        i = 0
        n = len(text)
        # Find string literals (double quotes) to skip
        # Compile pattern once
        pattern = re.compile(rf'(?<![\w."_\-]){re.escape(name)}(?![\w])')
        # We iterate through text, skipping string literal content
        in_string = False
        in_template = False
        last_idx = 0
        result = []
        i = 0
        while i < n:
            ch = text[i]
            if not in_template and ch == '"' and (i == 0 or text[i - 1] != "\\"):
                in_string = not in_string
                result.append(ch)
                i += 1
                continue
            if not in_string and ch == "`":
                in_template = not in_template
                result.append(ch)
                i += 1
                continue
            if in_string or in_template:
                result.append(ch)
                i += 1
                continue
            # Outside strings: try to match the prop name at this position
            m = pattern.match(text, i)
            if m:
                result.append(f"_{name}")
                i = m.end()
            else:
                result.append(ch)
                i += 1
        return "".join(result)

    for name, _, _ in tsx_props:
        body = replace_prop_in_body(body, name)
        # Repair: don't replace the resolver line itself: `const _name = name || ...`
        body = body.replace(f"const __{name}", f"const _{name}")
        body = body.replace(f"_{name} || T", f"{name} || T")  # restore RHS in resolver line

    return tsx[:body_start] + body + tsx[body_end:]


def insert_locale_control(tsx: str) -> str:
    locale_line = (
        '  locale: { type: ControlType.Enum, title: "Locale", '
        'options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], '
        'defaultValue: "en" },'
    )
    return re.sub(
        r"(addPropertyControls\(\w+,\s*\{\n)",
        r"\1" + locale_line + "\n",
        tsx,
        count=1,
    )


# ── Main injection ────────────────────────────────────────────────────────

def inject(tsx_path: Path, ko_md: Path, de_md: Path) -> bool:
    tsx = tsx_path.read_text(encoding="utf-8")

    if has_locale_prop(tsx):
        print(f"  - {tsx_path.name}: already injected, skipping")
        return False

    tsx_props = parse_tsx_props(tsx)
    if not tsx_props:
        print(f"  ⚠️  {tsx_path.name}: no props found, skipping", file=sys.stderr)
        return False

    # Translations
    def load_translations(md_path: Path) -> "dict[str, str]":
        if not md_path or not md_path.exists():
            return {}
        text = md_path.read_text(encoding="utf-8")
        # Try line-based first
        line_based = parse_line_based(text)
        if line_based:
            return {name: trans for name, _, trans in line_based}
        # Fall back to section-based
        pairs = parse_section_based(text)
        return map_section_to_props(tsx_props, pairs)

    ko_trans = load_translations(ko_md)
    de_trans = load_translations(de_md)
    if not ko_trans and not de_trans:
        print(
            f"  ⚠️  {tsx_path.name}: no translations matched, skipping",
            file=sys.stderr,
        )
        return False

    print(
        f"  ✓ {tsx_path.name}: {len(tsx_props)} props, "
        f"ko {len(ko_trans)}, de {len(de_trans)}"
    )

    dict_block = build_translations_block(tsx_props, ko_trans, de_trans)

    tsx = add_locale_to_interface(tsx)
    tsx = insert_translations_dict(tsx, dict_block)
    # IMPORTANT: replace prop refs BEFORE adding resolver. Otherwise the resolver
    # lines' RHS (`name || T["name"] || ...`) would get their `name` replaced
    # with `_name`, creating self-referencing constants.
    tsx = replace_prop_refs_with_resolved(tsx, tsx_props)
    tsx = add_locale_default_and_resolver(tsx, tsx_props)
    tsx = empty_default_values(tsx)
    tsx = insert_locale_control(tsx)

    tsx_path.write_text(tsx, encoding="utf-8")
    return True


def main():
    if len(sys.argv) < 4:
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    tsx_path = Path(sys.argv[1]).resolve()
    ko_md = Path(sys.argv[2]).resolve() if sys.argv[2] != "-" else None
    de_md = Path(sys.argv[3]).resolve() if sys.argv[3] != "-" else None

    if not tsx_path.exists():
        print(f"TSX not found: {tsx_path}", file=sys.stderr)
        sys.exit(1)

    ok = inject(tsx_path, ko_md, de_md)
    sys.exit(0 if ok else 2)


if __name__ == "__main__":
    main()
