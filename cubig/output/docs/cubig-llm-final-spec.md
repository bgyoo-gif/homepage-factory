# cubig-llm-final B-Type Conversion Spec

> Source: `cubig/input/cubig-llm-final (1).html`
> Output: `cubig/output/html/cubig-llm-final-b-type.html`
> Brand: **cubig** (design-system-core.md + design-system-cubig.md)
> Page type: Product landing page (LLM Capsule on CUBIG corporate site)

---

## Document Overview

- **Page Title:** LLM Capsule -- AI Enablement Data Layer for Enterprise Sensitive Data | CUBIG
- **Tone:** Persuasive product marketing, B2B enterprise
- **Total Sections:** 8 (Hero + 6 body sections + CTA)
- **JSON-LD:** Preserve all structured data (Organization, SoftwareApplication, WebPage, FAQPage)
- **OG/Meta:** Preserve all meta tags as-is

---

## Section-by-Section Specification

---

### Section 1: Hero -- Text-only
**Layout Pattern:** [A] ds-hero--text-only
**Section class:** `ds-section ds-section--hero`
**Background:** White (no background image -- text-only hero rule)
**Section id:** `section-hero`

**Content mapping:**

| Element | Source | DS Component |
|---------|--------|--------------|
| Title | "Use any AI on sensitive enterprise data. Get usable results back." | `ds-hero__title` -- `h1` |
| Title emphasis | "usable results back" | `<span class="ds-text--brand">usable results back.</span>` |
| Product name | "LLM Capsule" (in description) | `<span class="ds-text--product">LLM Capsule</span>` |
| Description | "LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive data locally before AI processing, works with any model, and restores outputs with your original data -- so AI results go straight into enterprise workflows." | `ds-hero__description` |
| Sub-description | "Part of CUBIG's AI-Ready Data Infrastructure. Solves the restricted data blocker -- one of three blockers that prevent enterprise AI adoption." | `ds-banner ds-banner--brand` (below hero description, center aligned, links as separate block-level `<a>`) |
| CTA Primary | "Request a demo" -> mailto:contact@cubig.ai | `ds-btn ds-btn--primary ds-btn--md` |
| CTA Secondary | "Full product at llmcapsule.ai" -> https://llmcapsule.ai (external) | `ds-btn ds-btn--secondary ds-btn--md` (external link = button rule) |
| Cert badges | GS Certified, ISO 27001, ISO 42001, GDPR/HIPAA, AWS Marketplace | `ds-badge--success` (GS/ISO) + `ds-badge--purple` (AWS Marketplace) -- row below CTAs |

**Notes:**
- eyebrow ("CUBIG Capability . AI Enablement Data Layer") -- DELETE per eyebrow ban
- hero-tag -- DELETE (eyebrow variant)
- hero-bg decorative text -- DELETE
- hero-grid background pattern -- DELETE (DS does not support)
- hero-def border-left callout -- convert to `ds-banner--brand`

---

### Section 2: How It Works -- Step Tabs
**Layout Pattern:** [U] ds-step-tabs
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-how-it-works`

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Encapsulate. Process. <span class="ds-text--brand">Restore.</span>"
- Title emphasis keyword: "Restore."
- Description: "Sensitive data is encapsulated locally before it leaves your environment. AI processes the safe version. Outputs are restored with your original data -- automatically, locally."

**Step Tabs Content:**

| Tab | Tab Label | Panel Title | Panel Description | Code Example |
|-----|-----------|-------------|-------------------|--------------|
| 1 | Your Document | Original data | "Enterprise documents contain sensitive data -- names, IDs, dates, regulated fields -- that cannot be exposed to external AI services." | `Summarize the claim by <span style="color:var(--ds-color-error)">John Martinez</span> (ID: <span style="color:var(--ds-color-error)">P-8847211</span>) on <span style="color:var(--ds-color-error)">March 3, 2025</span>.` |
| 2 | Encapsulated | Encapsulated | "Sensitive entities replaced with structure-preserving tokens. Document structure intact. Raw data never leaves your environment." | `Summarize the claim by <span class="ds-text--brand">[PERSON_01]</span> (ID: <span class="ds-text--brand">[ID_01]</span>) on <span class="ds-text--brand">[DATE_01]</span>.` |
| 3 | Usable Output | Restored | "AI output restored with original names, figures, dates. Goes directly into reports, claims, legal reviews -- no manual reconstruction." | `The claim by <span style="color:var(--ds-color-success)">John Martinez</span> on <span style="color:var(--ds-color-success)">March 3, 2025</span> relates to a respiratory condition. Pending review.` |

**Panel layout:** Each panel = left text content + right code block (`ds-code-block` dark theme)
**Notes:**
- eyebrow "How it works" -- DELETE
- Original flow-row 3-column with arrows -> converted to step tabs per "단계별 프로세스는 Step Tabs" rule
- Code examples use `<pre><code>` in dark code block with inline color spans for PII/masked/restored highlighting

---

### Section 3: Why This Is Different -- Card Grid 3col
**Layout Pattern:** [G] ds-card-grid ds-card-grid--3col
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-why-different`

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Not masking. Not a gateway. A data layer that produces <span class="ds-text--brand">usable AI output.</span>"
- Title emphasis keyword: "usable AI output."
- Description: "Enterprise teams evaluate three approaches to using AI on sensitive data. Only one produces outputs that go directly into workflows."

**Card Grid (3 cards):**

| Card | Badge | Title | Body | Verdict |
|------|-------|-------|------|---------|
| 1 | `ds-card__badge--red` "DATA MASKING" | Permanently removes data | "Masking strips sensitive fields. AI receives incomplete input and returns outputs with [REDACTED] gaps. Manual reconstruction required. Structure broken. Usable output: no." | `ds-badge--error` "Protects data . Destroys output" |
| 2 | `ds-card__badge--gray` "PROMPT GATEWAY" | Filters at the API level | "Gateways scan prompts and block or strip flagged content. No document-level protection, no RAG/batch coverage, no output restoration. A filter, not a data layer." | `ds-badge--neutral` "Filters prompts . No restoration" |
| 3 | `ds-card__badge--brand` "LLM CAPSULE" | Encapsulates, processes, restores | "Operates at the data layer. Encapsulates sensitive entities with structure-preserving tokens. AI receives complete documents. Outputs restored with original data automatically. Enterprise-ready results." | `ds-badge--success` "Protects data . Produces usable output" |

**Card 3 special:** Use `ds-card--highlight` (subtle brand border) to visually distinguish the LLM Capsule card. Apply `border: 1px solid var(--ds-color-border-brand)`.

**Banner below cards:** `ds-banner ds-banner--brand`
- Content: "**Why restoration matters:** Without it, an AI summary that says '[PERSON_01] filed [ID_04] on [DATE_02]' cannot go into a report, a claim, or a legal review. Restoration maps original names, figures, and references back into AI output -- making it enterprise-ready without manual work."
- Link: "Learn more about restoration" -> https://llmcapsule.ai/product (separate `<a>` line per banner rule, `ds-btn ds-btn--secondary ds-btn--sm` -- external link = button)

---

### Section 4: Core Capabilities -- Card Grid 3col + 2col
**Layout Pattern:** [G] ds-card-grid (3col row + 2col row)
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-capabilities`
**Background image:** `ds-bg--gradient-cream-jade` on section (3+ white sections consecutive -- insert bg image here)

Wait -- per rules, background image on general sections is not allowed (always white). But we have sections 1-3 all white, so we need a bg image break. Per the rule "3+ white/grey consecutive -> insert bg image 1", this section gets a background image.

**REVISED:** Apply background image `ds-bg--gradient-cream-jade` on this section. Text color on bg image: use black (light bg image).

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Five capabilities for <span class="ds-text--brand">enterprise AI enablement.</span>"
- Title emphasis keyword: "enterprise AI enablement."
- Description: "Three core enablement capabilities, plus structure-preserving processing and cross-model execution."

**Row 1 -- 3col card grid** (icon-title cards):

| Card | Icon (Lucide) | Badge | Title | Body |
|------|--------------|-------|-------|------|
| 1 | `shield-check` | `ds-card__badge--brand` "CORE 1" | Zero Exposure | "Sensitive data encapsulated locally before leaving the environment. Raw data never reaches external AI services. Mapping stored entirely within the enterprise boundary." |
| 2 | `refresh-cw` | `ds-card__badge--brand` "CORE 2" | Restoration | "AI outputs restored locally with original data. Reports, claims, legal reviews, clinical summaries work directly -- no [REDACTED] placeholders, no manual reconstruction." |
| 3 | `settings` | `ds-card__badge--brand` "CORE 3" | Enterprise Context Control | "Organizations define what counts as sensitive -- beyond standard PII. Project names, internal identifiers, customer-specific markers, contract references. Your rules, your control." |

**Row 2 -- 2col card grid:**

| Card | Icon (Lucide) | Badge | Title | Body |
|------|--------------|-------|-------|------|
| 4 | `layers` | `ds-card__badge--gray` "+1" | Structure-Preserving Processing | "Tables, cross-references, document layouts stay intact through encapsulation. AI receives structurally complete input across PDFs, Word documents, spreadsheets, and mixed formats." |
| 5 | `shuffle` | `ds-card__badge--gray` "+2" | Cross-Model Execution | "Model-agnostic. ChatGPT, Claude, Gemini, Perplexity, or any API. Protection stays consistent regardless of which model or provider you choose. No vendor lock-in." |

---

### Section 5: CUBIG Stack Positioning -- Gradient Cards
**Layout Pattern:** [V-2] ds-card--gradient (3 gradient cards in 1col stack)
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-stack`

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Three products. Three blockers to <span class="ds-text--brand">enterprise AI.</span>"
- Title emphasis keyword: "enterprise AI."
- Description: "Enterprise AI fails for three distinct reasons. CUBIG built a product for each one. LLM Capsule works standalone or together with DTS and SynTitan."

**Gradient Card Stack (3 cards, vertical, full-width):**

| Card | Gradient variant | Product | Badge | Subtitle | Body | Link |
|------|-----------------|---------|-------|----------|------|------|
| 1 | `ds-card--gradient-purple` | <span class="ds-text--product">LLM Capsule</span> | `ds-card__badge--brand` "AI ENABLEMENT DATA LAYER" | Restricted Data -> AI-Ready Data | "Sensitive enterprise data that can't be exposed to external AI. PII, regulated fields, internal identifiers, confidential content. LLM Capsule encapsulates it locally, enables AI processing, and restores outputs. Works standalone or within SynTitan workflows with full Release State traceability." | (current page -- no link) |
| 2 | `ds-card--gradient-green` | <span class="ds-text--product">DTS</span> | `ds-card__badge--gray` "SYNTHETIC DATA ENGINE" | Unusable Data -> Privacy-Safe Datasets | "Insufficient, biased, or privacy-locked training data. DTS generates privacy-safe synthetic datasets at the dataset layer for AI training and validation." | `ds-btn ds-btn--secondary ds-btn--sm` "Explore DTS" -> /dts |
| 3 | `ds-card--gradient-blue` | <span class="ds-text--product">SynTitan</span> | `ds-card__badge--gray` "AI-READY DATA OS" | Unstable Execution -> Production Stability | "Production AI pipelines that break when data changes. SynTitan binds every run to a Release State -- reproducible, auditable, compliant." | `ds-btn ds-btn--secondary ds-btn--sm` "Explore SynTitan" -> /syntitan |

**Notes:**
- Original stack diagram (visual left + text right) replaced with gradient cards for stronger visual hierarchy
- Product names use `ds-text--product` (Oxanium)
- Each gradient card uses the inner gradient background per brand file

---

### Section 6: Production Deployments -- Case Study + KPI Band + Cert Grid
**Layout Pattern:** [H-3] Case Study 3col + [F] KPI Band + [I-2] Cert Grid
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-proof`

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Deployed across <span class="ds-text--brand">regulated industries.</span>"
- Title emphasis keyword: "regulated industries."
- Description: (none -- original has no description paragraph for this section)

**6a. Case Study Cards -- ds-card-grid ds-card-grid--3col**

| Card | Image | Category | Client | Bullet Points | Tags |
|------|-------|----------|--------|---------------|------|
| 1 | `graphic-telecom.png` | GLOBAL TELCO | Deutsche Telekom | "Top 12 finalist in T Challenge 2026. Evaluated for enterprise AI data protection across customer care, network ops, and billing workflows at telco scale." | `ds-badge--success` "T Challenge 2026 -- Top 12" |
| 2 | `illustration-security.png` | GLOBAL OT SECURITY | Claroty | "OT infrastructure AI with sensitive operational data encapsulated at the data layer. AI processes tasks without exposure of raw OT identifiers." | `ds-badge--purple` "OT Infrastructure AI" |
| 3 | `illustration-insurance.png` | FINANCE . HEALTH . LEGAL | DB Insurance . EUMC . Shin&Kim | "Claim, clinical, and contract data encapsulated and restored during AI-assisted document workflows across Korean financial services, medical research, and legal practice." | `ds-badge--success` "Finance . Health . Legal" |

**6b. KPI Band -- ds-kpi-band**
Background: Use fallback gradient (no ds-bg-- class; brand file provides `linear-gradient(135deg, #1a6fe8, #0ea5a0)`)

| KPI | Value | Label |
|-----|-------|-------|
| 1 | 98.1% | Detection Accuracy |
| 2 | 99.14% | Restoration Accuracy |
| 3 | <0.12s | Per Page |
| 4 | Any | LLM / Model |

**6c. Actions below KPI Band:**
- `ds-btn ds-btn--secondary ds-btn--md` "See all production cases" -> /proof
- `ds-btn ds-btn--secondary ds-btn--sm` "Solutions by industry at llmcapsule.ai" -> https://llmcapsule.ai/solutions (external link = button)

**6d. Cert Grid -- ds-cert-grid (marquee)**
Show the certifications mentioned in hero badges:
- GS Certification (TTA, 2025) -- cert-gs.png
- ISO/IEC 27001 (ISO, 2026) -- cert-iso.png
- ISO/IEC 42001 (ISO, 2026) -- cert-iso.png
- Information Security Fast Track (KISA, 2024) -- cert-kisa.png

Wreath images: `cert-left.png`, `cert-right.png`
Logo path: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/`

---

### Section 7: FAQ -- Accordion
**Layout Pattern:** [P] ds-ac-card (accordion)
**Section class:** `ds-section`
**Background:** White
**Section id:** `section-faq`

**Section Header:** `ds-section-header ds-section-header--underline`
- Title: "Common <span class="ds-text--brand">questions</span>"
- Title emphasis keyword: "questions"
- Description: (none)

**Accordion Items (ds-ac-list):**

| # | Question | Answer | Open by default |
|---|----------|--------|-----------------|
| 1 | What is CUBIG LLM Capsule? | LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive enterprise data locally before any AI processing, enables any LLM to work on real documents without exposure, and restores AI outputs with original data automatically. It addresses the restricted data blocker -- one of three blockers in CUBIG's AI-Ready Data Infrastructure framework. | Yes (`ds-ac--open`) |
| 2 | How is LLM Capsule different from data masking and redaction? | Masking and redaction permanently remove sensitive data, destroying the context AI models need. AI outputs from masked input contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule creates a restorable workflow: data is encapsulated with structure-preserving processing, AI produces complete outputs, and restoration maps original values back automatically. The result is usable enterprise documents, not broken fragments. | No |
| 3 | How is LLM Capsule different from prompt security gateways? | Prompt security gateways filter at the API level -- scanning prompts and blocking or stripping flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates at the data layer, encapsulating sensitive elements before any AI processing and restoring outputs afterward. It is an enablement layer, not a filter. [Link: "See full comparison" -> https://llmcapsule.ai/product -- render as `ds-btn ds-btn--secondary ds-btn--sm`] | No |
| 4 | Why does restoration matter for enterprise AI? | Without restoration, AI outputs are unusable for real enterprise work. A summary that says "[PERSON_01] filed [ID_04] on [DATE_02]" cannot go into a report. Restoration automatically maps original names, figures, dates, and references back into AI outputs -- making them directly usable in claims processing, legal review, clinical reports, and business operations without manual intervention. | No |
| 5 | How does LLM Capsule fit into CUBIG's AI-Ready Data Infrastructure? | CUBIG's AI-Ready Data Infrastructure solves three blockers to enterprise AI. **LLM Capsule** solves restricted data -- sensitive information that cannot be exposed to external AI. **DTS** solves unusable data -- insufficient or privacy-locked training datasets. **SynTitan** solves unstable execution -- production AI pipelines that break when data changes. LLM Capsule works standalone or within SynTitan workflows. | No |
| 6 | How is LLM Capsule different from DTS? | They operate at different layers. LLM Capsule protects data during AI usage at the interaction layer -- encapsulating and restoring in real time. DTS generates privacy-safe synthetic datasets for AI training and validation at the dataset layer. Both are part of CUBIG's AI-Ready Data Infrastructure. Both are necessary for complete enterprise AI data protection. | No |
| 7 | What deployment modes does LLM Capsule support? | On-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment. The encapsulation engine runs entirely within the enterprise environment regardless of deployment type. [Link: "See architecture details" -> https://llmcapsule.ai/architecture -- render as `ds-btn ds-btn--secondary ds-btn--sm`] | No |
| 8 | Why should an enterprise choose CUBIG? | CUBIG is the only vendor offering a complete AI-Ready Data Infrastructure -- from data-layer protection (LLM Capsule) to synthetic data generation (DTS) to production execution orchestration (SynTitan). LLM Capsule is GS Certified, ISO 27001/42001 certified, deployed at Deutsche Telekom, Claroty, DB Insurance, EUMC, and Shin&Kim, and available on AWS Marketplace. | No |

**Notes:**
- Product names in answers: apply `ds-text--product` to standalone LLM Capsule, DTS, SynTitan
- Internal links (/dts, /syntitan, /learn/*) preserve as inline `<a>` with `color: var(--ds-color-brand-secondary)`
- External links (llmcapsule.ai/*) -> `ds-btn ds-btn--secondary ds-btn--sm` per external link = button rule

---

### Section 8: CTA Band
**Layout Pattern:** [K] ds-cta-band
**Section class:** (no ds-section wrapper -- CTA band is full-width standalone)
**Background image:** `ds-bg--gradient-blue-violet` (container-outside full-width)
**Section id:** `section-cta`

**Content:**

| Element | Value | DS Class |
|---------|-------|----------|
| Title | "Encapsulate. Process. Restore." | `ds-cta-band__title` |
| Description | "Use any AI on sensitive enterprise data and get usable results back. On-premise, air-gapped, or AWS Marketplace." | `ds-cta-band__description` |
| CTA 1 | "Request a demo" -> mailto:contact@cubig.ai | `ds-btn ds-btn--md` (CTA band button style) |
| CTA 2 | "Full product at llmcapsule.ai" -> https://llmcapsule.ai | `ds-btn ds-btn--md` (CTA band button style) |
| CTA 3 | "Production cases" -> /proof | `ds-btn ds-btn--md` (CTA band button style) |

**Notes:**
- eyebrow "AI Enablement Data Layer by CUBIG" -- DELETE
- final-bg decorative text -- DELETE
- CTA title size: 40px default, 36px mobile, 50px desktop (standard)

---

## Background Image Usage Summary

| Section | Background |
|---------|-----------|
| 1. Hero | White (text-only hero -- no bg image) |
| 2. How It Works | White |
| 3. Why Different | White |
| 4. Capabilities | `ds-bg--gradient-cream-jade` (break 3+ white streak) -- text color: black |
| 5. Stack | White |
| 6. Proof | White |
| 7. FAQ | White |
| 8. CTA | `ds-bg--gradient-blue-violet` (CTA band -- required) |

No duplicate background images used.

---

## Layout Variety Check

| Section | Layout Pattern | Grid Type |
|---------|---------------|-----------|
| 1 | Hero text-only | -- |
| 2 | Step Tabs [U] | tabbed 2-col panels |
| 3 | Card Grid 3col [G] + Banner [Q] | 3col |
| 4 | Card Grid 3col + 2col [G] | 3col + 2col |
| 5 | Gradient Cards [V-2] | 1col stack |
| 6 | Case Study [H-3] + KPI [F] + Cert [I-2] | 3col + 4col band + marquee |
| 7 | Accordion [P] | 1col |
| 8 | CTA Band [K] | full-width |

No `ds-grid--1` streak of 3+. Sufficient layout variety achieved.

---

## Global Implementation Notes

1. **Image paths:** All images use absolute URL: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/`
2. **Fonts:** DM Sans (base), Oxanium (product names only), Fragment Mono (code blocks)
3. **No inline styles** except CSS variable pass-through
4. **No `!important`**
5. **All colors via `var(--ds-*)`** -- no hex/rgba hardcoding
6. **Responsive:** 4 breakpoints (375 / 768 / 1024 / 1440)
7. **Container:** `ds-container` with responsive padding, max-width 1440px
8. **Section padding:** `ds-section` = 80px top/bottom
9. **Hero padding-top:** 100px fixed
10. **Navigation:** CUBIG shared nav (same structure as A-type, converted to DS classes)
11. **Footer:** CUBIG shared footer (converted to DS classes)
12. **word-break: keep-all** on body
13. **No eyebrow** anywhere
14. **No ds-section--light** (all sections white)
15. **No orange/amber colors** -- the original "amber" verdict in prompt gateway card is replaced with `ds-badge--neutral`
16. **Product names with Oxanium:** LLM Capsule, DTS, SynTitan (when standalone keyword)
17. **External links as buttons:** llmcapsule.ai, AWS Marketplace links always rendered as `ds-btn ds-btn--secondary`
