# QA Report — Tokenization for LLM Inputs

**Brand:** llm-capsule (v6.2)
**Slug:** tokenization-for-llm-inputs
**Status:** PASS

## CAT-1 Content integrity
- TL;DR, all 8 sections, Takeaways (8 bullets), 6-question FAQ, author/published/last-updated, related articles (3), CTA — all match original.
- Inline SVG diagram in section 1 preserved (referential integrity / mapping table).
- Compare table (Deterministic / Randomised / Hybrid) preserved with 4 columns.
- 3-item numbered bullet list (mapping properties) preserved.

## CAT-2 DS compliance
- No `!important`. No inline `style` except minimal CTA dark-theme color overrides + image URLs as is convention in other learn articles.
- Hero follows guide pattern: back-link → title → description → meta (no breadcrumb).
- Meta uses badge + `ds-article-hero__meta-sep` dot + reading time + dot + Updated May 2026.
- Related Articles uses guide pattern: small mono uppercase label + minimal cards (title + arrow, no badge, no "Read" text), gray background.
- Compare table: thead all-ink, last column primary-tint highlight; tbody primary-tint last cell.
- FAQ uses `ds-ac-card` accordion with one card open by default.
- Banner brand for TL;DR + Takeaways.
- CTA band uses `ds-bg--grad-deep` (allowed background image once).
- All internal links use Framer-relative paths (no `.html`, no absolute llmcapsule.ai URLs in markup).
- No Oxanium / orange / amber misuse.

## CAT-3 Code quality
- All sections have `id="section-*"`.
- Semantic tags: `<main>`, `<section>`, `<article>` not used at top-level (article body is `.ds-article-body` `<div>`).
- BreadcrumbList + FAQPage JSON-LD present.
- Inline SVG figure uses `viewBox`, `role="img"`, `aria-labelledby` → accessible.
- `overflow-x: auto` on `.ds-table-wrap` and `.ds-figure__svg-wrap` paired with `scrollbar-width: none` + webkit hide.
- No CSS variables referenced that are not defined in `:root`.
- Compare table grid uses `repeat(N, minmax(0, 1fr))` via .ds-card-grid (1fr is fine for table columns).

## CAT-4 Responsive
- 4-step breakpoints: 375 / 768 / 1024 / 1440 declared via @media queries.
- `.ds-article-container` responsive: 100% (mobile) → 720 → 860 → 1080.
- `.ds-cta-band` responsive padding + image fallback at mobile.
- Hero description max-width 860px, font-size scales 18 → 20 at 1024+.

## Internal link audit
- `/resources/learn` (back)
- `/resources/learn/reconstructing-ai-output`
- `/resources/learn/external-llm-on-sensitive-enterprise-data`
- `/resources/learn/why-ai-stalls-on-operational-data`
- `/architecture`
- `/request-a-demo`

All Framer-relative. No `.html` extension. No absolute llmcapsule.ai URLs in body.

## bodyhtml.html
- All section text preserved.
- Figure block in section 1 included.
- All HTML comments removed from inside the SVG block (Framer compiler safety).

## Status
PASS.
