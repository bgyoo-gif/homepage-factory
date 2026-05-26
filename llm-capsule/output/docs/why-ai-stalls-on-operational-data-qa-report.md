# QA Report — Why AI Workflows Stall at Tables, Tickets, and Operational Documents

**Status**: PASS

## CAT-1 Content integrity
- All original sections preserved (TL;DR + 7 numbered sections + Takeaways + 6-FAQ + author + related + CTA).
- Figure 1 (SVG diagram) preserved with 53 inline `fill="#..."` attributes intact.
- All numeric and identifier values (account/device/ticket IDs in figure) match the source.

## CAT-2 DS compliance (v6.2 capsule)
- `--c-primary` etc. tokens only; no hex literals outside the figure SVG (intentional — inline SVG must keep inline color).
- No `!important`, no inline styles except for CTA `style="color: var(--c-bg)"` on hero links (allowed pattern from reference).
- No Oxanium, no eyebrow on heading sections, no gradient button. CTA uses `.btn--invert` invert button + grad-deep background.
- Hero uses guide pattern: back link `← Learn`, then title, description, meta (badge + dot sep + read time + dot sep + Updated May 2026). No breadcrumb.
- Related section uses guide pattern: `ds-related-section` with small mono uppercase label + minimal cards.

## CAT-3 Code quality
- All sections have `id="section-..."`.
- Semantic tags: `main`, `section`, `figure`, `figcaption`, `ul`, `ol`, `aside-equivalent` (accordion).
- FAQPage JSON-LD + BreadcrumbList JSON-LD present in head.

## CAT-4 Responsive
- 4 breakpoints (375 / 768 / 1024 / 1440) covered via container padding + h1/h2/h3 size jumps + container max-width.
- Article container 1080px at desktop.
- CTA band typography: 40px default → 36px mobile → 50px desktop.
- Mobile bg-image disabled on grad-deep.
- `.ds-figure__svg-wrap` uses `overflow-x: auto` with scrollbar hidden (mobile-safe).

## Bodyhtml + TSX
- `why-ai-stalls-on-operational-data-bodyhtml.html`: 1 figure, 53 fills, 0 HTML comments — verification passed.
- `WhyAiStallsOnOperationalData.tsx`: braces 165/165, parens 127/127, brackets 9/9 balanced.
- ARTICLES + ARTICLE_INDEX_META updated; Learn.tsx index regenerated with new entry.

## Internal links
- `/resources/learn`, `/resources/learn/external-llm-on-sensitive-enterprise-data`, `/resources/learn/tokenization-for-llm-inputs`, `/resources/learn/reconstructing-ai-output`, `/architecture`, `/request-a-demo` — all Framer-relative, no `.html`, no absolute URLs.
