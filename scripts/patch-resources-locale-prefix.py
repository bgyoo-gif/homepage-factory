#!/usr/bin/env python3
"""
Patch the 4 resources-v62 section components to support Framer locale prefix.

Adds:
  - useEffect import (or merges with existing useState import)
  - localePrefix state + useEffect that reads window.location.pathname
  - href={...} → href={`${localePrefix}${...}`} on internal <a> tags

Targets:
  Section02_ResourceCards.tsx   (card.linkHref)
  Section03_FeaturedArticle.tsx (ctaHref)
  Section04_ArticlesByCategory.tsx (article.slug)
  Section05_GlossaryGrid.tsx    (t.slug)
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / "llm-capsule" / "output" / "framer" / "resources-v62" / "tsx"

LOCALE_BLOCK = """  // Auto-detect Framer locale prefix from current URL (/de/, /ja/, /ko/, etc.)
  // SSG-safe: starts empty, populated after hydration.
  const [localePrefix, setLocalePrefix] = useState<string>("")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\\/([a-z]{2}(?:-[A-Z]{2})?)(?:\\/|$)/)
    if (m) setLocalePrefix(`/${m[1]}`)
  }, [])

"""


# (filename, original href expression, replacement)
TARGETS = [
    (
        "Section02_ResourceCards.tsx",
        '<a href={card.linkHref} className="s2-card-link">',
        '<a href={`${localePrefix}${card.linkHref}`} className="s2-card-link">',
    ),
    (
        "Section03_FeaturedArticle.tsx",
        '<a className="s3-btn" href={ctaHref}>',
        '<a className="s3-btn" href={`${localePrefix}${ctaHref}`}>',
    ),
    (
        "Section04_ArticlesByCategory.tsx",
        '<a href={article.slug} className="s4-card-link">',
        '<a href={`${localePrefix}${article.slug}`} className="s4-card-link">',
    ),
    (
        "Section05_GlossaryGrid.tsx",
        '<a href={t.slug} className="s5-term-link">',
        '<a href={`${localePrefix}${t.slug}`} className="s5-term-link">',
    ),
]


def ensure_react_imports(text: str) -> str:
    """Make sure useState and useEffect are imported from react."""
    # Case 1: already has both
    if re.search(r'^import\s*{[^}]*\buseEffect\b[^}]*\buseState\b[^}]*}\s*from\s*"react"', text, re.MULTILINE):
        return text
    if re.search(r'^import\s*{[^}]*\buseState\b[^}]*\buseEffect\b[^}]*}\s*from\s*"react"', text, re.MULTILINE):
        return text

    # Case 2: has useState only — add useEffect
    m = re.search(r'^import\s*{\s*useState\s*}\s*from\s*"react"', text, re.MULTILINE)
    if m:
        return text[:m.start()] + 'import { useEffect, useState } from "react"' + text[m.end():]

    # Case 3: no react import — add after the framer import line
    framer_m = re.search(r'^import\s*{[^}]*}\s*from\s*"framer"\s*$', text, re.MULTILINE)
    if framer_m:
        insert_pos = framer_m.end()
        return text[:insert_pos] + '\nimport { useEffect, useState } from "react"' + text[insert_pos:]

    # Fallback: prepend
    return 'import { useEffect, useState } from "react"\n' + text


def inject_locale_block(text: str) -> str:
    """Insert the localePrefix useState+useEffect block right after the function signature opening."""
    # Find `}: Props) {` followed by the next non-blank line; insert block right after
    pattern = re.compile(r'(}:\s*Props\)\s*\{\n)')
    m = pattern.search(text)
    if not m:
        return text
    # Don't add twice
    if "const [localePrefix, setLocalePrefix]" in text:
        return text
    insert_pos = m.end()
    return text[:insert_pos] + LOCALE_BLOCK + text[insert_pos:]


def patch_file(fname: str, old_href: str, new_href: str) -> bool:
    path = DIR / fname
    if not path.exists():
        print(f"  ✗ {fname}: not found", file=sys.stderr)
        return False
    original = path.read_text(encoding="utf-8")
    text = original

    text = ensure_react_imports(text)
    text = inject_locale_block(text)

    if old_href in text:
        text = text.replace(old_href, new_href, 1)
    elif new_href in text:
        pass  # already patched
    else:
        print(f"  ⚠️  {fname}: href pattern not found")

    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main():
    for fname, old, new in TARGETS:
        if patch_file(fname, old, new):
            print(f"  ✓ {fname}")
        else:
            print(f"  - {fname} (no change)")


if __name__ == "__main__":
    main()
