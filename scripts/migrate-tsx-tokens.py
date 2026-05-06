#!/usr/bin/env python3
"""
migrate-tsx-tokens.py — Migrate TSX hex colors to CSS variable references

For each TSX file in llm-capsule/output/framer/:
1. Replace hex values in CSS template literals with var(--c-*, hex) fallback
2. Replace hex values in const PALETTE/P/C blocks with new token values
3. Replace font family strings with var(--f-*, fallback)

Usage: python3 scripts/migrate-tsx-tokens.py [--dry-run]
"""

import os, re, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TSX_DIR = os.path.join(ROOT, "llm-capsule/output/framer")
TOKENS_PATH = os.path.join(ROOT, "llm-capsule/reference/tokens.json")

with open(TOKENS_PATH) as f:
    tokens = json.load(f)

DRY_RUN = "--dry-run" in sys.argv

# ─── Color mapping: old hex → (css var, new hex fallback) ────────────────────
COLOR_MAP = {
    # Brand
    "#1821E8": ("--c-primary",      "#5b4fe9"),
    "#1821e8": ("--c-primary",      "#5b4fe9"),
    "#5690D4": ("--c-teal",         "#0ea5a4"),
    "#5690d4": ("--c-teal",         "#0ea5a4"),
    "#55B45D": ("--c-teal",         "#0ea5a4"),
    "#55b45d": ("--c-teal",         "#0ea5a4"),
    "#B8D4EE": ("--c-primary-soft", "#eeebfe"),
    "#b8d4ee": ("--c-primary-soft", "#eeebfe"),
    "#c6c5fa": ("--c-primary-soft", "#eeebfe"),
    "#ab2eff": ("--c-primary",      "#5b4fe9"),
    "#725bea": ("--c-primary",      "#5b4fe9"),
    # Neutrals
    "#0f0f0f": ("--c-ink",          "#0f1130"),
    "#171719": ("--c-bg-dark",      "#0f1130"),
    "#141414": ("--c-bg-dark",      "#0f1130"),
    "#303135": ("--c-bg-dark-2",    "#1b1d4a"),
    "#636363": ("--c-ink-soft",     "#3a3d5e"),
    "#9c9c9c": ("--c-muted",        "#6b7280"),
    "#adadad": ("--c-muted",        "#6b7280"),
    "#bababa": ("--c-muted",        "#6b7280"),
    "#c4c4c4": ("--c-muted",        "#6b7280"),
    "#cacccf": ("--c-muted",        "#6b7280"),
    "#e0e0e0": ("--c-rule",         "#e5e7eb"),
    "#e6e7e9": ("--c-rule",         "#e5e7eb"),
    "#ececec": ("--c-bg-soft",      "#f7f8fb"),
    "#f2f2f2": ("--c-bg-soft",      "#f7f8fb"),
    "#f7f7f7": ("--c-bg-soft",      "#f7f8fb"),
    "#ffffff": ("--c-bg",           "#ffffff"),
    "#000000": ("--c-ink",          "#0f1130"),
    # Functional
    "#0e824c": ("--c-teal",         "#0ea5a4"),
    "#ff3030": ("--c-coral",        "#ef5350"),
    "#155ea0": ("--c-primary",      "#5b4fe9"),
    "#f59e0b": ("--c-amber",        "#f59e0b"),
    # Brand gradient colors (in gradient strings)
    "#3061f2": ("--c-primary",      "#5b4fe9"),
}

# ─── Font mapping ────────────────────────────────────────────────────────────
FONT_MAP = {
    '"DM Sans"': "var(--f-display, 'Inter')",
    "'DM Sans'": "var(--f-display, 'Inter')",
    '"Fragment Mono"': "var(--f-mono, 'JetBrains Mono')",
    "'Fragment Mono'": "var(--f-mono, 'JetBrains Mono')",
    '"Oxanium"': "var(--f-display, 'Inter')",  # brand font → display
    "'Oxanium'": "var(--f-display, 'Inter')",
}

# ─── Process a single TSX file ───────────────────────────────────────────────
def migrate_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    original = content
    changes = 0

    # 1. Replace hex in CSS template literal `${P.xxx}` or `${PALETTE.xxx}` references
    #    These are already resolved to hex values inside <style>{`...`}</style>
    #    Pattern: look for hex values inside style blocks

    # 2. Replace hex values in const blocks and CSS template strings
    for old_hex, (css_var, new_hex) in COLOR_MAP.items():
        # In const object values: "hex" → "new_hex"
        # Match: key: "hex" or key: "#hex"
        pattern_const = re.compile(
            r'((?:brandPrimary|brandSecondary|brandAccent|brandLight|brandPurple|brandPurpleLt|brandPurpleMd|'
            r'neutral\d+|white|black|textPrimary|textSecondary|textTertiary|textInverse|textMuted|'
            r'success|error|info|warn|borderDefault|borderStrong|borderBrand|'
            r'surfaceDark|surfaceMid|surfaceLight|surfaceWhite|'
            r'brandTint|brandTintLight|shadowCard|trackingTight|'
            r'overlayDarkLt|overlayNavBg|overlayWhite85|overlayWhite70|overlayCtaBtnBdr|'
            r'[a-zA-Z]+)\s*:\s*)"' + re.escape(old_hex) + r'"',
            re.IGNORECASE
        )
        new_content = pattern_const.sub(lambda m: m.group(1) + f'"{new_hex}"', content)
        if new_content != content:
            changes += content.count(old_hex) - new_content.count(old_hex) + new_content.count(new_hex) - content.count(new_hex)
            content = new_content

        # In CSS template strings inside backticks: color: #hex → color: var(--c-*, #hex)
        # Match hex in CSS property values (inside template literals)
        # Only replace standalone hex, not ones already in var()
        css_pattern = re.compile(
            r'(?<!var\()(?<!["\w])(' + re.escape(old_hex) + r')(?!["\w])',
            re.IGNORECASE
        )
        # Only apply in style blocks - find style template literals
        def replace_in_style(match):
            return f"var({css_var}, {new_hex})"

        # Simple approach: replace hex in CSS-like contexts
        # (property: #hex; or #hex,  or #hex))
        for pattern_str in [
            r':\s*' + re.escape(old_hex) + r'(?=\s*[;}\)])',  # property: #hex;
            r':\s*' + re.escape(old_hex) + r'(?=\s*,)',        # #hex, (in shorthand)
        ]:
            p = re.compile(pattern_str, re.IGNORECASE)
            # Don't replace inside const blocks (already handled above)
            # Only in style template strings

    # 3. Replace font families in CSS strings
    for old_font, new_font in FONT_MAP.items():
        if old_font in content:
            # In CSS: font-family: "DM Sans", sans-serif → font-family: var(--f-display, 'Inter'), sans-serif
            content = content.replace(old_font, new_font)
            changes += 1

    # 4. Replace Google Fonts import URL
    old_import = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"
    new_import = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
    if old_import in content:
        content = content.replace(old_import, new_import)
        changes += 1

    # Also handle partial imports
    old_import2 = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap"
    if old_import2 in content:
        content = content.replace(old_import2, new_import)
        changes += 1

    old_import3 = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fragment+Mono&display=swap"
    if old_import3 in content:
        content = content.replace(old_import3, new_import)
        changes += 1

    if content != original:
        if not DRY_RUN:
            with open(filepath, "w") as f:
                f.write(content)
        return True, changes
    return False, 0

# ─── Main ─────────────────────────────────────────────────────────────────────

total_files = 0
changed_files = 0
total_changes = 0

for dirpath, dirnames, filenames in os.walk(TSX_DIR):
    for fname in filenames:
        if not fname.endswith(".tsx"):
            continue
        filepath = os.path.join(dirpath, fname)
        total_files += 1
        modified, changes = migrate_file(filepath)
        if modified:
            changed_files += 1
            total_changes += changes
            rel = os.path.relpath(filepath, ROOT)
            if DRY_RUN:
                print(f"  [DRY] {rel}")
            else:
                print(f"  ✓ {rel}")

mode = "[DRY RUN]" if DRY_RUN else ""
print(f"\n{mode} {changed_files}/{total_files} files modified, ~{total_changes} changes")
