# Spec — What Is a Context-Preserving Data Layer for AI?

## Meta
- **Brand**: llm-capsule (v6.2)
- **Slug**: `what-is-context-preserving-data-layer-for-ai` (keep as-is from input filename — used as Framer route and TSX target)
- **Canonical URL**: `https://llmcapsule.ai/resources/learn/what-is-context-preserving-data-layer-for-ai`
- **Source file**: `llm-capsule/input/llmcapsule_260506/learn/what-is-context-preserving-data-layer-for-ai.html`
- **B-type output**: `llm-capsule/output/html/what-is-context-preserving-data-layer-for-ai-b-type.html`
- **bodyhtml output**: `llm-capsule/output/html/what-is-context-preserving-data-layer-for-ai-bodyhtml.html`
- **TSX target**: `llm-capsule/output/framer/learn/WhatIsContextPreservingDataLayerForAi.tsx`
- **Locale**: `en-GB` (og:locale `en_GB`)
- **Title**: What Is a Context-Preserving Data Layer for AI?
- **Description (meta)**: A context-preserving data layer transforms sensitive enterprise data into a protected but semantically usable form before it reaches an AI model, then restores the original values locally after inference — protecting data without severing the relationships AI needs to reason.
- **Category badge**: `Glossary` (Capsule v6.2 allows eyebrow; small primary uppercase)
- **Reading time**: `~8 min read` (body ~1,700 words including TL;DR + FAQ)
- **Date**: `Updated May 2026` (datePublished `2026-05-01`, dateModified `2026-05-01`)

## Layout pattern

Article-page layout (Learn pattern) — reading column 720 → 860 → 1080px responsive, `.ds-article-container`. CSS reuses the stylesheet already established by `reconstructing-ai-output-b-type.html` / `external-llm-on-sensitive-enterprise-data-b-type.html` / `tokenization-for-llm-inputs-b-type.html`. New CPDL article is the canonical *category definition* page — keep voice authoritative, no marketing CTAs inside the body.

## Hero (la-hero — guide pattern)

- Pattern: `la-hero` (← Learn back link → eyebrow `Glossary` → h1 → lead → meta chips). **NOT** `ds-article-hero` (which is the Korean breadcrumb pattern — see CLAUDE.md rule #39).
- Back link: `← Learn` (primary color) → `/resources/learn`
- Eyebrow: `Glossary` (12px uppercase primary — Capsule allows eyebrow per v6.2)
- H1: `What Is a <span class="ds-text--brand">Context-Preserving Data Layer</span> for AI?`
  - Brand accent keyword: **"Context-Preserving Data Layer"**
- Lead (max 860px): the original `<p class="lead">` first paragraph (the full sentence — keep both clauses).
- Meta chips: `Glossary · Category` badge + dot + `~8 min read` + dot + `Updated May 2026`
- Hero section: white background, no background image (text-only hero)

## Section layout

1. **Hero** (la-hero)
2. **Goal callout** — short emphasis sentence from original `<p class="goal">`. Render as `ds-banner` (subtle, not `--brand`) OR inline lead-secondary `<p>` with `font-weight:600` and muted color. Decision: render inline as italicised secondary lead beneath the hero meta (no separate banner — keep TL;DR as the only banner above the fold).
3. **TL;DR** — `ds-banner--brand` with `ds-bullet--dot` (5 items, each first phrase wrapped in `<strong>`):
   - What it is.
   - The problem it solves.
   - The shift.
   - What it is not.
   - Where it sits.
4. **Section 1: Why this category exists now** — `ds-article-section-header` + 3 paragraphs (the third paragraph "The instinctive answer..." stays as its own paragraph for emphasis).
5. **Section 2: The problem isn't the data. It's the relationships.** — `ds-article-section-header` + 3 paragraphs + `ds-bullet--dot` (4 relationship pairs, each first term wrapped in `<strong>`) + Figure 1.
6. **Figure 1** — `ds-figure` inline SVG. Side-by-side: MASKING/DLP (left, coral) vs CONTEXT-PRESERVING DATA LAYER (right, primary). viewBox `0 0 820 410`. Light variant only — convert hardcoded hex to DS tokens (see *Figure colour mapping* below). Caption: "Figure 1. Masking severs the host–IP–VLAN relationship; a context-preserving data layer tokenises the values but keeps the relationship intact."
7. **Transition paragraph** — "The input is safe. The output is useless..." (single `<p>` after Figure 1, before next h2).
8. **Section 3: What a context-preserving data layer does** — `ds-article-section-header` + 2 paragraphs + Figure 2 + intro line "A few properties define the category:" + `ds-bullet--dot` (3 properties).
9. **Figure 2** — `ds-figure` inline SVG. Flow diagram: Sensitive enterprise data → CPDL (transform) → AI model → CPDL (restore) → Usable output. Dashed trust-boundary line. viewBox `0 0 820 380`. Caption: "Figure 2. The layer transforms data before the AI model and restores values locally, inside the trust boundary."
10. **Section 4: How it differs from what you already have** — `ds-article-section-header` + intro paragraph + `ds-bullet--dot` (3 items: not DLP/masking, not RAG/vector DB, not AI gateway/MCP — each first phrase `<strong>`).
11. **Section 5: A new layer in the enterprise stack** — `ds-article-section-header` + 3 paragraphs. The Databricks / Snowflake / Palantir reference paragraph stays intact (no list conversion — the prose rhythm carries the argument).
12. **Tagline** — render the closing line "LLM Capsule is a context-preserving data layer for AI." as `ds-tagline` (italic, top-bordered, before FAQ). One sentence only.
13. **FAQ** — `ds-faq-wrap` (no max-width restriction — full article-container width per CLAUDE.md). 7 questions in `ds-ac-card` accordion (first open):
    1. What is a context-preserving data layer for AI?
    2. How is it different from data masking or DLP?
    3. Is a context-preserving data layer the same as RAG?
    4. How is it different from an AI gateway or an MCP layer?
    5. Does the AI model ever see the real data?
    6. Is this just PII protection?
    7. Where does it sit in the enterprise architecture?
14. **Author info** — `CUBIG Policy & Architecture Team` · `Published 1 May 2026` · `Last updated 1 May 2026`
15. **Related Articles** — guide pattern `ds-related-section`. Small mono label `Where to Read Next` + 3 minimal cards (no badge, no Read text, arrow only):
    - `external-llm-on-sensitive-enterprise-data` — *Running External LLMs on Data Your Company Can't Send Externally*
    - `tokenization-for-llm-inputs` — *Tokenization for LLM Inputs: How AI Reads What It Doesn't See*
    - `reconstructing-ai-output` — *Reconstructing AI Output: The Last Mile Between Model Response and Business Reality*
16. **CTA Band** — `ds-cta-band ds-bg--grad-deep` (full-width, outside `.ds-container`). Single primary action `Request a Demo` → `/request-a-demo`. Headline: "See a context-preserving data layer in your stack." Sub: "LLM Capsule is the layer where enterprise data is protected and still usable — at the exact point it meets the model."

## Figure colour mapping (hardcoded hex → DS tokens)

| Original | DS token | Notes |
|---|---|---|
| `#0E9C92` (accent) | `var(--c-primary)` `#5b4fe9` | Capsule primary (replaces teal accent — Capsule brand is primary purple) |
| `#0B6F68` (accentText) | `var(--c-primary-dark)` `#3b2fbf` | |
| `#E9F6F4` (primary-soft fill) | `var(--c-primary-soft)` `#eeebfe` | |
| `#9FD8D1` (accent border) | `#c9c3fb` (lighter primary-soft border) | |
| `#23C2B4` / `#6FE6DA` (dark accents) | not needed — single-theme article | drop the `.svg-dark` variants entirely |
| `#C7493C` (coral) | `var(--c-coral)` `#ef5350` | masking/wrong-side branding |
| `#5B6675` (muted text) | `var(--c-muted)` `#6b7280` | |
| `#14202E` (ink) | `var(--c-ink)` `#0f1130` | |
| `#FFFFFF` (card bg) | `var(--c-bg)` `#ffffff` | |
| `#CED4DD` / `#DFE3E9` (rule) | `var(--c-rule)` `#e5e7eb` | |
| `#F7F8FA` (card chip) | `var(--c-bg-soft)` `#f7f8fb` | |
| `#E3E6EB` (redacted block) | `#e5e7eb` | redacted bar tone |

**Dark-mode SVG variants are dropped** — Learn articles are light-theme only. Keep `.svg-light` only and remove the `.svg-dark` element + `body.dark` toggle.

## Body markup notes

- `<p class="goal">` rendered as `<p class="ds-article-lead-secondary">` (muted color, italic, 18px, 8px margin-bottom). Define inline in `<style>` if class is not in DS — uses existing tokens only.
- `<em>` inside paragraphs preserved as `<em>` (rendered italic by browser default + DS reset compatibility).
- All em-dashes (`—`) preserved as `&mdash;` entities or `—` unicode.
- All right single quotes (`'`) normalised to `&rsquo;` / `'` as in input.
- `&harr;` (↔) preserved in TL;DR + bullet pairs.

## DS Tokens (v6.2 — reuse)

- Container: `ds-container` max 1280px
- Article: `ds-article-container` (max 1080px desktop, 860px tablet, 720px mobile)
- Hero: `ds-section--hero` (padding-top 100px)
- Body sections: `ds-section--article-body` (padding 2xl 0)
- Banner: `ds-banner ds-banner--brand` (primary-soft bg, border-top/bottom only) — TL;DR
- Accordion: `ds-ac-card` with `.ds-ac--open` on first
- Bullets: `ds-bullet--dot` everywhere (no `--check`, no `--cross`, no `--number` needed in this article)
- CTA: `ds-cta-band ds-bg--grad-deep`
- Tagline: `ds-tagline` (italic, top-bordered, 56px top margin, 28px top padding) — define inline if not in DS

## SEO / JSON-LD

- `<title>`: `What Is a Context-Preserving Data Layer for AI? — LLM Capsule`
- `<meta name="description">`: as above (160 chars)
- `<meta name="keywords">`: context-preserving data layer, CPDL, AI data protection, tokenisation for LLMs, enterprise AI architecture, data masking limitations, AI gateway, MCP layer, RAG vs CPDL, LLM Capsule
- `<link rel="canonical">`: as above
- `<meta property="og:type">`: `article`
- `<meta property="og:locale">`: `en_GB`
- BreadcrumbList JSON-LD (Home → Resources → Learn → What Is a Context-Preserving Data Layer for AI?)
- FAQPage JSON-LD with 7 questions matching FAQ body

## Build-script entry (bodyhtml pattern A)

Per-slug metadata (manually-curated):
- `slug`: `what-is-context-preserving-data-layer-for-ai`
- `source_type`: `bodyhtml`
- `title`: What Is a Context-Preserving Data Layer for AI?
- `lead`: (full lead paragraph — see Hero section)
- `category`: `Glossary`
- `readTime`: `~8 min read`
- `dateUpdated`: `May 2026`
- `datePublished`: `2026-05-01`
- `dateModified`: `2026-05-01`
- `inLanguage`: `en-GB`
- `tldrLabel`: `TL;DR`
- `tldrBody`: short single-sentence stripped summary — "A software layer that transforms sensitive enterprise data into a protected but semantically usable form before it reaches an AI model, then restores the original values locally afterward — protecting data without severing the relationships AI needs to reason."
- `canonicalUrl`: as above
- `breadcrumbLabel`: `What Is a Context-Preserving Data Layer for AI?`
- `related`: `["external-llm-on-sensitive-enterprise-data", "tokenization-for-llm-inputs", "reconstructing-ai-output"]`

## ARTICLE_INDEX_META

- `category`: `architecture-onprem` (closest existing Learn-index tab — this article defines the architectural layer that on-prem patterns assume)
- `skipInIndex`: False
- This article should appear as the **lead / pinned** entry on the Glossary tab once that tab exists. Until then, surface it under `architecture-onprem`.

## Internal linking (Framer-relative — no `.html`, no absolute URLs)

- Back link: `/resources/learn`
- Related card 1: `/resources/learn/external-llm-on-sensitive-enterprise-data`
- Related card 2: `/resources/learn/tokenization-for-llm-inputs`
- Related card 3: `/resources/learn/reconstructing-ai-output`
- CTA: `/request-a-demo`
- (Optional inline link from Section 5 "A new layer in the enterprise stack" closing paragraph): `/architecture` — keep it as a plain inline link, primary color, no underline at rest. Decision: **omit** for now; CTA band already drives action.

## Notes / risks / deviations

1. **No dark-mode SVG.** Original A-type ships paired `.svg-light` + `.svg-dark` variants with a theme toggle button. Drop the toggle and all `.svg-dark` markup — Learn articles are light-theme only (matches all existing Learn B-types).
2. **Colour palette swap.** Original uses teal `#0E9C92` as the "good side" accent. Capsule brand is purple `#5b4fe9` — swap teal→primary throughout both SVG figures. Coral stays coral (warning/wrong side) — Capsule allows coral as accent.
3. **Slug stays `what-is-context-preserving-data-layer-for-ai`.** It's descriptive enough and matches input filename. Could be `what-is-a-context-preserving-data-layer-for-ai` for SEO, but build script uses slug for path lookups and rename adds risk. **Recommendation: keep as-is.**
4. **No `<table>` in this article.** Differs from reference articles (tokenisation, external-llm) which use ds-table. Section 4 "How it differs" stays as `ds-bullet--dot` — the 3 distinctions don't need columns.
5. **No `ds-bullet--check` / `--cross` / `--number`.** This article is conceptual, not procedural. All lists are `ds-bullet--dot`.
6. **CLAUDE.md figure rules respected.** All `<figure>` blocks use `class="ds-figure"`. bodyhtml extraction must include both figures (`grep -c '<figure'` should return 2). SVG comments stripped from bodyhtml (Annex B compat).
7. **N2SF terminology.** Not used in this article — no risk.
8. **bodyhtml HTML-only constraint.** When generating `*-bodyhtml.html`, strip the `<svg-dark>` SVGs (already deleted in step 1), strip `<script>`, strip `.toggle` button. Keep all `<figure>` + light SVG inline.

## Files to produce

- `llm-capsule/output/html/what-is-context-preserving-data-layer-for-ai-b-type.html` (standalone, head + body + figures + script-free)
- `llm-capsule/output/html/what-is-context-preserving-data-layer-for-ai-bodyhtml.html` (body article fragment only, for TSX template literal)
- `llm-capsule/output/framer/learn/WhatIsContextPreservingDataLayerForAi.tsx` (built via `build-learn-tsx.py` after bodyhtml ready)
