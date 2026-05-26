# reconstructing-ai-output — B-type Spec

## Meta
- Brand: llm-capsule (v6.2)
- Slug: reconstructing-ai-output
- Locale: en-GB
- Canonical: https://llmcapsule.ai/resources/learn/reconstructing-ai-output
- Title: Reconstructing AI Output — The Last Mile Between Model Response and Business Reality
- Description: The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.
- Category badge: AI Architecture
- Reading time: ~9 min read
- Date: Updated May 2026

## Hero (guide pattern — back → title → description → meta)
- back: `← Learn` (primary color)
- title with `<span class="ds-text--brand">Reconstructing AI Output</span> — The Last Mile Between Model Response and Business Reality`
- description: original meta description (one paragraph, max-width 860px)
- meta: badge + dot + reading time + dot + "Updated May 2026"

## Section layout
1. Hero
2. TL;DR — `ds-banner--brand`
3. Section 1: Why Reconstruction Is More Than a Swap-Back — intro p×4 + `ds-bullet--dot` (4 items) + closing p
4. Section 2: Where Reconstruction Has to Happen — intro p×5 + Figure 1 SVG diagram (correct vs wrong location)
5. Section 3: How Reconstruction Integrates With the Workflow — intro p + 3 sub-sections with `ds-section-title-icon` (3.1 Inline, 3.2 Streaming, 3.3 Event-Driven) + alignment note
6. Section 4: When the Model Produces Tokens That Don't Exist — intro p×3 + `ds-bullet--number` (3 options) + closing p
7. Section 5: Audit and Traceability — paragraphs only
8. Section 6: The Operational Mistakes Most Teams Make — intro p + `ds-bullet--cross` (5 items)
9. Section 7: What Good Reconstruction Looks Like — intro p + `ds-bullet--check` (7 items) + closing 2p
10. Section 8: Where This Fits in the Broader Pattern — paragraphs only
11. Key Takeaways — `ds-banner--brand` with `ds-bullet--dot` (8 items)
12. FAQ — `ds-ac-card` accordion (6 questions, first open)
13. Author info — name/dates
14. Related Articles (guide pattern: `ds-related-section`, small label, minimal cards)
    - external-llm-on-sensitive-enterprise-data
    - tokenization-for-llm-inputs (placeholder until built)
    - why-ai-stalls-on-operational-data (placeholder until built)
15. CTA Band — gradient deep, primary highlight word + product name, single button

## Figure 1 (SVG — inline reconstruction location)
- 960×440 viewBox
- Left half: wrong (external middleware) — coral
- Right half: correct (inside enterprise) — primary
- Includes Tokenisation, Mapping, Reconstruction boxes + Audit log box on right + small EXTERNAL LLM black box

## JSON-LD
- BreadcrumbList (Home / Resources / Learn / Reconstructing AI Output)
- FAQPage with the 6 FAQ entries

## CSS reuse
- Same stylesheet as external-llm-on-sensitive-enterprise-data-b-type.html (guide pattern back link + meta-sep + related section + dot bullet)

## Files
- HTML: llm-capsule/output/html/reconstructing-ai-output-b-type.html
- bodyhtml: llm-capsule/output/html/reconstructing-ai-output-bodyhtml.html
- TSX: llm-capsule/output/framer/learn/ReconstructingAiOutput.tsx (auto-generated via build-learn-tsx.py)
