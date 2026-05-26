# Spec — Running External LLMs on Data Your Company Can't Send Externally

- **Type**: Learn article (en-GB)
- **Slug**: `external-llm-on-sensitive-enterprise-data`
- **Canonical**: `https://llmcapsule.ai/resources/learn/external-llm-on-sensitive-enterprise-data`
- **Source file**: `llm-capsule/input/llmcapsule_260506/learn/running-external-llms-on-sensitive-data.html` (file name ≠ slug)
- **B-type output**: `llm-capsule/output/html/external-llm-on-sensitive-enterprise-data-b-type.html`
- **bodyhtml output**: `llm-capsule/output/html/external-llm-on-sensitive-enterprise-data-bodyhtml.html`
- **TSX target**: `llm-capsule/output/framer/learn/ExternalLlmOnSensitiveEnterpriseData.tsx`
- **Container**: `ds-article-container` (1080px desktop, article pattern)

## Hero (Section 1)
- Breadcrumb: Home / Resources / Learn / Running External LLMs on Data Your Company Can't Send Externally
- Badge: `AI Architecture` (primary)
- Reading time: `~10 min read`
- Date: `May 2026`
- H1: "Running External LLMs on Data Your Company Can't Send Externally" with brand span on "External LLMs"
- Lead: "Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries."

## Sections
1. Hero
2. TL;DR — banner (brand soft bg) describing the contradiction + the four design properties
3. Section 1 — "The Quiet Contradiction at the Centre of Enterprise AI" (article-section-header + 5 paras)
4. Section 2 — "Why This Problem Is Harder Than It Looks" (4 paras)
5. Section 3 — "The Three Standard Approaches — and Where Each One Breaks" with 4 sub-cards (3.1~3.4) + ds-table summary
6. Section 4 — "A Different Approach — Change What Crosses the Boundary" (6 paras + SVG ds-figure diagram showing enterprise boundary)
7. Section 5 — "How the Approach Works in Practice" (5.1 Detection / 5.2 Transformation / 5.3 External Processing / 5.4 Reconstruction)
8. Section 6 — "Which Workflows This Approach Actually Solves" (ds-bullet--check list of 6 example workflows)
9. Section 7 — "What You Have to Decide Before Deploying" (7.1~7.5)
10. Section 8 — "The Limits of This Approach, Honestly" (ds-bullet--dot list of 5 limitations)
11. Section 9 — "Where This Leaves the AI Strategy" (3 paras + ds-bullet--number 4 properties + closing 2 paras)
12. Section Takeaways — banner (brand soft bg) ds-bullet--dot with 8 key takeaways
13. FAQ — 6 questions in ds-ac-card accordion (first open)
14. Author info (CUBIG Policy & Architecture Team, May 2026)
15. Related — 3 cards (text-only placeholders — Why AI Stalls, Tokenization for LLM Inputs, Reconstructing AI Output)
16. CTA Band — `ds-bg--grad-deep`, "Evaluating this architecture for your own environment?" + "Request a Demo →"

## DS Tokens (v6.2)
- Container: `ds-container` max 1280px
- Article: `ds-article-container` (max 1080px desktop)
- Hero: `ds-section--hero` (padding-top 100px)
- Body sections: `ds-section--article-body` (padding 2xl 0)
- Banner: `ds-banner ds-banner--brand` (primary-soft bg, border-top/bottom only)
- Table: `ds-table` with primary header column on "Core trade-off"
- Accordion: `ds-ac-card` with `.ds-ac--open` on first
- Bullets: `ds-bullet--check` for workflow examples; `ds-bullet--dot` for limits + takeaways; `ds-bullet--number` for the 4 properties

## JSON-LD
- BreadcrumbList (Home → Resources → Learn → article)
- FAQPage (6 Q/A — matches body FAQ section)
- (Article schema injected by LearnArticle.tsx TSX wrapper)

## Build-script entry (bodyhtml pattern)
Pattern A (manually-curated metadata), `source_type: "bodyhtml"`. The input already follows v6.2 DS structure, but it uses `ds-banner--brand`/`ds-article-hero__` classes, which the `input` (Pattern B) parser does NOT recognise. Bodyhtml pattern is the correct fit.

Per-slug fields:
- title, lead, category="AI Architecture", readTime="~10 min read", dateUpdated="May 2026"
- tldrLabel="TL;DR", tldrBody=stripped TL;DR sentence
- canonicalUrl, datePublished="2026-05-01", dateModified="2026-05-01", inLanguage="en-GB"
- breadcrumbLabel="Running External LLMs on Sensitive Enterprise Data"
- related: 4 architecture-onprem peers (architecture-dp, sovereign-ai-european, on-prem-llm-execution-path, ai-on-network-operations-data) — closest learn peers

## ARTICLE_INDEX_META
- category: `architecture-onprem` (closest existing tab; the article focuses on tokenisation + on-prem layer)
- skipInIndex: False

## Notes / Risks
- Input file name ≠ slug. Build script uses slug for path lookups; bodyhtml file written under slug filename.
- LearnArticle bodyHtml renders plain HTML — converted ds-bullet/ds-figure/ds-banner/ds-section-title-icon structures into plain h2/h3/p/ul/ol/table + `.callout` + `.takeaways` patterns LearnArticle supports.
- ds-figure SVG diagram from the B-type HTML is NOT carried into bodyHtml (LearnArticle has no svg-figure CSS). It remains in the standalone B-type HTML only.
- Future ko/de translations will be added via `llm-capsule/output/translations/external-llm-on-sensitive-enterprise-data-{ko,de}-lines.md`; build script will auto-promote the TSX to a locale-dropdown variant when present.
