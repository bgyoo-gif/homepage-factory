# Spec — Tokenization for LLM Inputs: How AI Reads What It Doesn't See

**Brand:** llm-capsule (v6.2)
**Slug:** tokenization-for-llm-inputs
**Language:** en-GB
**Article type:** Learn / AI Architecture
**Reading time:** ~9 min

## Layout pattern

Article-page layout (1080px reading column on desktop, 720→860→1080px responsive). Sections:

1. **Hero** — guide pattern: back-link `← Learn` → title (with `.ds-text--brand` accent on "Tokenization") → description → meta (badge + dot + reading time + dot + "Updated May 2026"). No breadcrumb.
2. **TL;DR** — `ds-banner--brand` summary.
3. **1. What Tokenisation Actually Does in This Context** — article body + Figure 1 (referential integrity diagram).
4. **2. Deterministic vs Randomised Tokenisation** — 3 sub-sections (2.1 / 2.2 / 2.3) + compare table.
5. **3. Format-Preserving Tokenisation** — body.
6. **4. Where the Mapping Lives** — body + 3-item numbered bullet list.
7. **5. Token Consistency** — body.
8. **6. Additional Protection Layers** — body.
9. **7. What Not to Tokenise** — body.
10. **8. The Next Step in the Workflow** — body.
11. **Takeaways** — `ds-banner--brand` with 8-item dot bullet list.
12. **FAQ** — 6-item accordion (first open).
13. **Author info** — author / published / last updated.
14. **Related Articles** — guide pattern: small mono label `Where to Read Next` + 3 minimal cards (no badge, no Read text, arrow only).
15. **CTA Band** — `ds-cta-band ds-bg--grad-deep`, single primary action `Request a Demo`.

## SEO

- canonical: `https://llmcapsule.ai/resources/learn/tokenization-for-llm-inputs`
- og:locale `en_GB`
- BreadcrumbList JSON-LD (Home → Resources → Learn → Tokenization for LLM Inputs)
- FAQPage JSON-LD with 6 questions

## Components used

- `.ds-article-container` (1080px reading column)
- `.ds-article-hero__back` (back link — replaces breadcrumb)
- `.ds-article-hero__meta` with `.ds-article-hero__meta-sep` dots
- `.ds-banner--brand` for TL;DR + Takeaways
- `.ds-article-section-header` for numbered section h2s
- `.ds-section-title-icon` for 3 sub-headings under section 2
- `.ds-bullet--number` for 3 mapping properties
- `.ds-bullet--dot` for Takeaways
- `.ds-table` + `.ds-table-wrap` for deterministic vs randomised matrix
- `.ds-ac-card` accordion for FAQ
- `.ds-figure` + inline SVG for the referential-integrity diagram
- `.ds-related-section` (small label + minimal cards) for Related
- `.ds-cta-band` + `.ds-bg--grad-deep` for CTA

## Internal linking (Framer relative)

- `/resources/learn` (back link, Learn index)
- `/resources/learn/reconstructing-ai-output`
- `/resources/learn/external-llm-on-sensitive-enterprise-data`
- `/resources/learn/why-ai-stalls-on-operational-data`
- `/architecture` (CTA mention)
- `/request-a-demo` (CTA button)

All internal links are Framer-relative — no `.html` extension, no absolute `llmcapsule.ai` URLs except in canonical/JSON-LD metadata.

## Figure asset

Inline SVG (viewBox 0 0 960 380): three references of one customer (Marlene Schmidt / Mr Schmidt / Marlene) resolved to one consistent token `CUST-7F2A`, with the token↔value mapping table held inside the enterprise boundary.

## TSX

- File: `llm-capsule/output/framer/learn/TokenizationForLlmInputs.tsx`
- Source: `bodyhtml`
- Index category: `architecture-onprem` (production tokenisation architecture)
- `skipInIndex`: False
