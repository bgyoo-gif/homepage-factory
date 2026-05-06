#!/usr/bin/env python3
"""
build-tokens.py — Generate all token outputs from tokens.json

Usage: python3 scripts/build-tokens.py

Reads:  llm-capsule/reference/tokens.json
Writes:
  - llm-capsule/reference/tokens.css
  - llm-capsule/reference/viewer-tokens.css
  - llm-capsule/reference/TokenProvider.tsx
  - llm-capsule/reference/tsx-palette-block.txt
  - llm-capsule/reference/migration-map.md
"""

import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOKENS_PATH = os.path.join(ROOT, "llm-capsule/reference/tokens.json")
OUT_DIR = os.path.join(ROOT, "llm-capsule/reference")

with open(TOKENS_PATH) as f:
    tokens = json.load(f)

# ─── 1. tokens.css ───────────────────────────────────────────────────────────

def build_css():
    lines = [
        f"/* Auto-generated from tokens.json — DO NOT EDIT */",
        f"/* Brand: {tokens['brand']} v{tokens['version']} */",
        "",
        ":root {",
    ]
    for section, label in [("color", "Colors"), ("font", "Fonts"), ("spacing", "Spacing"), ("radius", "Radius"), ("container", "Container")]:
        lines.append(f"  /* {label} */")
        for key, val in tokens[section].items():
            lines.append(f"  {val['css']}: {val['value']};")
        lines.append("")
    lines.append("}")
    lines.append("")
    return "\n".join(lines)


# ─── 2. TokenProvider.tsx ────────────────────────────────────────────────────

def build_token_provider():
    css_vars = []
    for section in ["color", "font", "spacing", "radius", "container"]:
        for key, val in tokens[section].items():
            css_vars.append(f"        {val['css']}: {val['value']};")

    return f"""// Auto-generated from tokens.json — DO NOT EDIT
// Brand: {tokens['brand']} v{tokens['version']}

export default function TokenProvider() {{
  return (
    <style>{{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

      :root {{
{chr(10).join(css_vars)}
      }}
    `}}</style>
  )
}}

TokenProvider.displayName = "Design Tokens"
"""


# ─── 3. TSX palette block ────────────────────────────────────────────────────

def to_camel(s):
    parts = s.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])

def build_tsx_palette():
    lines = [
        "// ── Auto-generated from tokens.json — DO NOT EDIT ──",
        "const C = {",
    ]
    for key, val in tokens["color"].items():
        lines.append(f'  {to_camel(key)}: "{val["value"]}",')
    lines.append("} as const")
    lines.append("")
    lines.append("const Font = {")
    for key, val in tokens["font"].items():
        lines.append(f'  {key}: "{val["value"]}",')
    lines.append("} as const")
    lines.append("")
    lines.append("const Radius = {")
    for key, val in tokens["radius"].items():
        lines.append(f'  {key}: "{val["value"]}",')
    lines.append("} as const")
    lines.append("// ── End auto-generated ──")
    return "\n".join(lines)


# ─── 4. Migration map ────────────────────────────────────────────────────────

def build_migration_map():
    m = {
        "#1821E8": ("var(--c-primary, #5b4fe9)", "brand-primary"),
        "#5690D4": ("var(--c-teal, #0ea5a4)", "brand-secondary → teal"),
        "#55B45D": ("var(--c-teal, #0ea5a4)", "brand-accent green → teal"),
        "#B8D4EE": ("var(--c-primary-soft, #eeebfe)", "brand-light"),
        "#0f0f0f": ("var(--c-ink, #0f1130)", "text-primary"),
        "#171719": ("var(--c-bg-dark, #0f1130)", "surface-dark"),
        "#141414": ("var(--c-bg-dark, #0f1130)", "neutral-850"),
        "#303135": ("var(--c-bg-dark-2, #1b1d4a)", "neutral-700"),
        "#636363": ("var(--c-ink-soft, #3a3d5e)", "text-secondary"),
        "#9c9c9c": ("var(--c-muted, #6b7280)", "text-tertiary"),
        "#e6e7e9": ("var(--c-rule, #e5e7eb)", "border-default"),
        "#f7f7f7": ("var(--c-bg-soft, #f7f8fb)", "surface-light"),
        "#f2f2f2": ("var(--c-bg-soft, #f7f8fb)", "surface-mid"),
        "#ececec": ("var(--c-bg-soft, #f7f8fb)", "neutral-100"),
        "#0e824c": ("var(--c-teal, #0ea5a4)", "success → teal"),
        "#ff3030": ("var(--c-coral, #ef5350)", "error → coral"),
    }
    lines = ["# Color Migration Map (old hex → new CSS var)", ""]
    lines.append("| Old Hex | New CSS Variable | Note |")
    lines.append("|---------|-----------------|------|")
    for hex_val, (new_var, note) in m.items():
        lines.append(f"| `{hex_val}` | `{new_var}` | {note} |")
    return "\n".join(lines)


# ─── Execute ──────────────────────────────────────────────────────────────────

css = build_css()
token_provider = build_token_provider()
tsx_palette = build_tsx_palette()
migration_map = build_migration_map()

with open(os.path.join(OUT_DIR, "tokens.css"), "w") as f:
    f.write(css)
with open(os.path.join(OUT_DIR, "viewer-tokens.css"), "w") as f:
    f.write(css)
with open(os.path.join(OUT_DIR, "TokenProvider.tsx"), "w") as f:
    f.write(token_provider)
with open(os.path.join(OUT_DIR, "tsx-palette-block.txt"), "w") as f:
    f.write(tsx_palette)
with open(os.path.join(OUT_DIR, "migration-map.md"), "w") as f:
    f.write(migration_map)

color_count = len(tokens["color"])
font_count = len(tokens["font"])
radius_count = len(tokens["radius"])
spacing_count = len(tokens["spacing"])

print(f"✓ tokens.css")
print(f"✓ viewer-tokens.css")
print(f"✓ TokenProvider.tsx")
print(f"✓ tsx-palette-block.txt")
print(f"✓ migration-map.md")
print(f"")
print(f"Token count: {color_count} colors, {font_count} fonts, {radius_count} radius, {spacing_count} spacing")
