# 07-Resources Page — Design Spec
**Brand:** llm-capsule | **Version:** v6.2 | **Date:** 2026-04-23

---

## Source
- A-type: `llm-capsule/input/llmcapsule_260506/07_resources.html`
- Output: `llm-capsule/output/html/07-resources-b-type.html`
- TSX: `llm-capsule/output/framer/resources-v62/tsx/`

---

## Meta / SEO

| Field | Value |
|-------|-------|
| title | Resources \| LLM Capsule — Learn, Glossary, Trust Center |
| description | Technical documentation, learning articles, glossary, and trust resources for enterprise context-preserving data layer for AI with LLM Capsule. Industry deployment guides for telecom, healthcare, finance, defense. |
| keywords | LLM Capsule resources, enterprise AI documentation, context-preserving data layer for AI learning, AI glossary |
| canonical | https://llmcapsule.ai/resources |
| JSON-LD | CollectionPage + BreadcrumbList |

---

## Token Reference

All CSS via `var(--c-*, hex)` with fallback. Link tokens.css absolute URL:
`https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css`

Fonts: Inter + JetBrains Mono (Google Fonts)
Container: max-width 1280px, padding `var(--s-page, clamp(20px, 4vw, 80px))`
Section padding: `var(--s-section, clamp(64px, 8vw, 128px))`

---

## Section Map

### Section 1 — Hero (text-only)
**Layout:** centered, no background image
**Content:**
- Eyebrow: "Resources" (purple, uppercase, mono)
- h1: "Context-preserving data layer for AI **resources**" (bold in `<strong>`)
- Subtitle: "Technical documentation, learning articles, glossary, and trust resources — for architects, CDOs, CISOs, privacy officers, and industry buyers building regulated AI workflows."
- Background: soft gradient `#fafbff → #ffffff`, border-bottom 1px rule

### Section 2 — Resource Cards (3-column)
**Layout:** 3-col grid, 1-col mobile
**Cards:**
1. **Learn** — icon 📖, count chip "8 articles · GEO-optimized", description: "In-depth articles on enterprise context-preserving data layer for AI — architecture patterns, industry deployment guides (telecom, healthcare, finance, defense), pilot-to-production playbooks, sovereign AI under GDPR / EU AI Act.", CTA link "Browse Learn articles →" → `#articles`
2. **Glossary** — icon 📚, count chip "11 terms · Schema.org", description: "Definitions of category and architectural concepts — context-preserving data layer for AI, structure-preserving encapsulation, two execution paths, sovereign AI, shadow AI, differential privacy. Each term with definition and cross-links.", CTA link "Browse Glossary terms →" → `#glossary`
3. **Trust Center** — icon 🛡️, count chip "12 certifications · Compliance", description: "Security certifications, compliance frameworks (GDPR / HIPAA / SOX / EU AI Act), audit documentation, DPA template, vendor security questionnaire. Everything compliance and security teams need for evaluation.", CTA link "Visit Trust Center →" → `/trust`

**Card style:** white bg, 1px rule border, radius `--r-lg (16px)`, NO colored border-top/left, NO box-shadow
**Count chip style:** mono font, bg `--c-bg-soft`, radius 999px, color differentiation via icon badge only
- Learn: icon badge bg `--c-primary`
- Glossary: icon badge bg `--c-teal`
- Trust: count chip color `--c-muted`

### Section 3 — Featured Article (dark card)
**Layout:** 2-column grid (text + visual), dark bg card (`--c-bg-dark`)
**Content:**
- Label: "FEATURED · MOST READ" (mono, light purple `#c8c4f7`)
- h2: "Why enterprise AI pilots stall — and how they get to production"
- Description: "80% of enterprise AI pilots never ship to production. The reasons are predictable: data exposure barriers, broken document context, residual compliance risk, shadow AI emergence. Here's the diagnostic and the architectural pattern that gets pilots to production."
- CTA button: "Read the article →" → `/learn/pilot-to-production-enterprise-ai` (btn--invert style)
- Visual slot (right): dark panel with mono text:
  ```
  TL;DR · 4-stage diagnosis · architectural pattern

  ↓

  Most pilots fail not at AI, but at the data layer.

  — 10 min read
  ```
**Style:** border-radius `--r-lg`, padding 48px (32px mobile), dark bg, 2-col → 1-col mobile, NO border-top/left colored, NO box-shadow

### Section 4 — Articles by Category (id="articles")
**Layout:** section header + filter tabs + 2-column article card grid
**Section header:**
- Eyebrow: "Learn articles"
- h2: "By category"
- Description: "Industry deployment guides, architecture deep-dives, comparison frameworks, and strategy playbooks."

**Filter tabs:** All (active) | Industry | Architecture | Strategy | Comparison
- Tab style: mono font 12px, pill shape (radius 999px), bg `--c-bg-soft`, border `--c-rule`
- Active: bg `--c-primary-dark`, color white

**8 Article cards (2-col grid, 1-col mobile):**
1. Category: "INDUSTRY · TELECOM" | Title: "How to deploy AI in a telecom NOC without exposing network data" | Desc: "Step-by-step deployment guide. Validated at SK Telecom and Deutsche Telekom T Challenge 2026 Top 12." | href: `/learn/telecom-noc-ai-deployment`
2. Category: "INDUSTRY · HEALTHCARE" | Title: "How to deploy AI in a hospital without exposing PHI" | Desc: "HIPAA-aligned playbook for hospital CIOs and clinical informatics. Deployed at EUMC." | href: `/learn/hospital-ai-deployment-phi-protection`
3. Category: "ARCHITECTURE · SOVEREIGN AI" | Title: "Sovereign AI for European enterprises — practical architecture" | Desc: "GDPR + EU AI Act + national data residency. Two execution paths under one governance framework." | href: `/learn/sovereign-ai-european-enterprises`
4. Category: "STRATEGY · PILOT TO PRODUCTION" | Title: "Why enterprise AI pilots stall — and how they get to production" | Desc: "Diagnostic for executives running an AI program. The pattern that ships to production." | href: `/learn/pilot-to-production-enterprise-ai`
5. Category: "ARCHITECTURE · ON-PREM" | Title: "On-premise LLM execution path" | Desc: "Path B architecture deep-dive: quantized model, internal GPU, vLLM, full air-gap." | href: `/learn/on-prem-llm-execution-path`
6. Category: "ARCHITECTURE · DIFFERENTIAL PRIVACY" | Title: "Differential privacy for enterprise LLM" | Desc: "Epsilon-DP, Laplace noise, k-anonymity, NER masking — what each adds and why combination matters." | href: `/learn/differential-privacy-for-enterprise-llm`
7. Category: "COMPARISON · GUARDRAILS" | Title: "PII guardrails vs. operational data protection" | Desc: "Why PII detection alone leaves operational data exposed. Where guardrails end and the data layer begins." | href: `/learn/pii-guardrails-vs-operational-data-protection`
8. Category: "INDUSTRY · NETWORK / OT" | Title: "AI on network operations data" | Desc: "Network configurations, topology, alarm sequences — how the data layer protects operational identifiers." | href: `/learn/ai-on-network-operations-data`

**Card style:** white bg, 1px rule border, radius `--r-md (10px)`, NO shadow, NO colored border-top/left

### Section 5 — Glossary Grid (id="glossary")
**Layout:** 3-column grid → 2-col tablet → 1-col mobile, soft bg
**Section header:**
- Eyebrow: "Glossary"
- h2: "Category and architectural terms"
- Description: "11 definitions for buyers, architects, and security teams. Each term with Schema.org DefinedTerm markup."

**11 Glossary term cards:**
1. term: "context-preserving data layer for AI" | definition: "The category. Architectural component between regulated systems and LLMs." | href: `/glossary/context-preserving-data-layer`
2. term: "AI-ready operational layer" | definition: "Operational data made AI-consumable while sensitive elements are protected." | href: `/glossary/ai-ready-operational-layer`
3. term: "Structure-preserving encapsulation" | definition: "Replacing sensitive elements while keeping document structure intact." | href: `/glossary/structure-preserving-encapsulation`
4. term: "Differential privacy" | definition: "Mathematical framework for privacy-preserving data transformation with bounded risk." | href: `/glossary/differential-privacy`
5. term: "Two execution paths" | definition: "Path A (external LLM with capsule) and Path B (on-prem local model) under one governance." | href: `/glossary/two-execution-paths`
6. term: "Operational data" | definition: "Workflow data — tickets, configs, clinical notes, claims — that real AI work runs on." | href: `/glossary/operational-data`
7. term: "Sovereign AI" | definition: "AI workflows where data, processing, and audit stay inside a defined boundary." | href: `/glossary/sovereign-ai`
8. term: "Shadow AI" | definition: "Unsanctioned external LLM use; symptom of missing context-preserving data layer for AI." | href: `/glossary/shadow-ai`
9. term: "Blocked AI workflow" | definition: "A workflow where AI value is real but data exposure rules block deployment." | href: `/glossary/blocked-ai-workflow`
10. term: "Connector lane" | definition: "How Capsule reads document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment." | href: `/glossary/connector-lane`
11. term: "State vault for restoration" | definition: "Local key-value store mapping capsule tokens back to original values for restoration." | href: `/glossary/state-vault-for-restoration`

**Card style:** white bg, 1px rule border, radius `--r-md`, NO shadow, NO colored border-top/left

### Section 6 — CTA Strip
**Layout:** full-width, dark bg, centered text
**Content:**
- h2: "Have a deployment question?"
- p: "Bring your industry, your regulatory profile, and your data. We respond within one business day."
- CTA button: "Request a Live Demo" → `/request-a-demo` (btn--invert)
**Style:** `--c-bg-dark` background, white text, `#c8c4f7` para color

---

## Filter Tab Interactivity
- Section 4 filter tabs: static display in HTML (no JS required for B-type)
- TSX: useState for active tab, filter cards by category prefix

---

## Design Rules Summary (v6.2)
- NO colored border-top/left on any card (AI cliché forbidden)
- NO box-shadow on cards
- Radius: 6/10/16px via CSS variables
- Buttons: solid ink (`--c-ink`), NOT gradient
- Eyebrow: allowed (LLM Capsule brand)
- Count chips: mono font, soft bg, muted or brand color
- Internal links: Framer relative paths (no .html extension)
- All text preserved exactly from A-type
