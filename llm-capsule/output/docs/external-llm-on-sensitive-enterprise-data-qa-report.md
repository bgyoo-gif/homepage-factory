# QA Report — external-llm-on-sensitive-enterprise-data

**Verdict**: PASS

| Category | Severity max | Status |
|----------|--------------|--------|
| CAT-1 Content integrity | — | PASS |
| CAT-2 DS compliance     | — | PASS |
| CAT-3 Code quality      | — | PASS |
| CAT-4 Responsive        | — | PASS |

## CAT-1 — Content integrity
- All 16 sections from input preserved 1:1 (hero, TL;DR, sections 1–9, takeaways, FAQ, author, related, CTA).
- All paragraph counts identical, all numeric/quote tokens retained (e.g. "twelve to eighteen months", "forty percent", "sixty percent").
- TL;DR strong-emphasised phrases retained.
- 5 limit bullets (section 8) and 6 workflow examples (section 6) retained.
- 6 FAQ Q/A retained verbatim; matches FAQPage JSON-LD.

## CAT-2 — DS compliance (v6.2)
- Container max-width: 1280px (llm-capsule v6.2). ✓
- Article container ramps: 720 / 860 / 1080px. ✓
- Inter (font-family display) + JetBrains Mono (mono). No Oxanium. ✓
- Buttons: solid invert (white bg) on dark CTA band — no gradient buttons (v6.2). ✓
- Banner: `ds-banner--brand` uses `--c-primary-soft` (no overlay-brand-tint-light). ✓
- No orange/coral on CTA/buttons. Amber/coral tokens defined but unused for caution. ✓
- Background images: only `--ds-bg-img-grad-deep` on CTA band. No duplicate `ds-bg--*`. ✓
- Mobile: `@media (max-width: 767px) .ds-bg--grad-deep { background-image: none; }`. ✓
- No `!important`. No inline `style` except 2 CSS-variable refs on CTA inline link (allowed exception).
- No hardcoded hex outside :root or SVG (SVG fills are exempt — declarative diagram).
- `overflow-x: auto` paired with scrollbar hide on `.ds-table-wrap` + `.ds-figure__svg-wrap`. ✓
- `repeat(N, minmax(0, 1fr))` used for grids. ✓
- `ds-bullet--check`/`--number`/`--dot` icon `<span>` empty — icon from CSS `::before`. ✓
- Hero section padding-top 100px (`ds-section--hero`). ✓
- No `ds-section--light` (white bg only). ✓
- Section header descriptions: article-section-header is `<h2>` only — no header description duplication. ✓
- CTA Band title responsive: 36 (mobile) / 40 (base) / 50 (1440+). ✓

## CAT-3 — Code quality
- All sections have `id="section-*"`. ✓
- `<main>` wraps content; `<section>` tags used (CTA also `<section>`). ✓
- JSON-LD: BreadcrumbList + FAQPage. (Article schema injected by TSX wrapper). ✓
- Lang attribute: `<html lang="en-GB">`. ✓
- Canonical/OG URLs use canonical slug-based URL. ✓
- Image references: only absolute URL to `cubig/reference/images/` via CSS variable. ✓
- Internal links: all Framer-style relative (`/architecture`, `/request-a-demo`, `/resources/learn/...`). No `.html` extensions, no absolute `https://llmcapsule.ai/...`. ✓

## CAT-4 — Responsive
- 4 breakpoints: 375 default / 768 / 1024 / 1440. ✓
- Hero title scales 32 → 40 → 48 → 64. ✓
- H2 scales 20 → 22 → 24 → 28. ✓
- CTA title scales 36 → 40 → 50. ✓
- Container padding: 16 / 32 / 32 / 120 (with 120 in 1440+). ✓
- Article container ramps with 1080px cap at 1280+. ✓
- Mobile bg image disabled. ✓
- Table `min-width: 560px` + horizontal overflow-x auto on wrap with scrollbar hidden. ✓
- Figure SVG `min-width: 640px` + overflow wrap. ✓

## Notes
- 1 inline `style=` on CTA inline link (`/architecture`) uses CSS variables only (`color: var(--c-bg)`, text-decoration). This is an allowed exception for the CTA band's white-on-dark inline link.
- bodyhtml.html is the LearnArticle-renderable variant (plain h2/h3/p/ul/ol/table/.callout/.takeaways). SVG figure remains in B-type only.
