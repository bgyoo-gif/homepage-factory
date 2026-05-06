# Architecture Page — B-Type Layout Spec
**Brand:** llm-capsule · **Source:** `llm-capsule/input/llmcapsule_260506/03_architecture.html`  
**Output:** `llm-capsule/output/html/03-architecture-b-type.html`  
**DS version:** v6.2

---

## Page Meta

```
title: Architecture | LLM Capsule — AI Enablement Data Layer for Regulated Operations
canonical: https://llmcapsule.ai/architecture
description: The architecture of LLM Capsule — four zones (Corporate Internal Network → DMZ → In-House Team → Local Auto Reconstruction) connected through the Enhanced Encapsulation Layer with structure-preserving, differential-privacy-based protection, governance-driven routing, and in-environment auto-restoration. Two execution paths under one governance framework. Runs inside the customer environment, integrating with existing systems (ERP, CRM, Ticketing, DMS, Legacy DB, RAG Pipeline) without moving raw data outside that environment.
og:title: LLM Capsule Architecture
og:description: 3 zones · 4 steps · 5 components · 2 execution paths.
JSON-LD: TechArticle (headline, description, author, publisher)
```

---

## Global Setup

- **Fonts:** Inter (300–800) + JetBrains Mono (400–700) via Google Fonts
- **Tokens CSS:** `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css`
- **Container:** `max-width: 1280px` (`--container-max`), horizontal padding `var(--s-page)`
- **Section vertical padding:** `var(--s-section)` = `clamp(64px, 8vw, 128px)`
- **Eyebrow:** allowed (LLM Capsule brand rule v6.2), class `ds-eyebrow`
- **Colored border-top/left on cards:** FORBIDDEN
- **box-shadow on cards:** FORBIDDEN
- **Radius:** sm=6px / md=10px / lg=16px

---

## Section 1 — Hero

**Layout:** [A] Hero text-only  
**Background:** `linear-gradient(180deg, #fafbff 0%, #ffffff 100%)` + bottom border `1px solid var(--c-rule)`  
**Padding top:** `clamp(80px, 10vw, 140px)`

| Element | Content |
|---------|---------|
| Eyebrow | Architecture |
| h1 | How LLM Capsule plugs AI into the systems you already run |
| h1 strong | (none — no inline color highlights needed) |
| Sub | Three zones. Four steps. Five components. Two execution paths. One governance framework. The AI enablement data layer for regulated operations — at the architectural level. |

**Notes:**
- h1 `font-size: clamp(36px, 5vw, 64px)`, weight 700, line-height 1.15
- Sub `font-size: 19px`, color `var(--c-ink-soft)`, max-width 760px
- No CTA buttons in hero (informational page)

---

## Section 2 — Zone Overview (4 Zones)

**Layout:** [G] Card grid (4-col → 2-col tablet → 1-col mobile)  
**Background:** `var(--c-bg, #ffffff)`  
**Section id:** `section-2`

**Section header:**
- Eyebrow: Zone overview
- h2: One layer between your existing systems and AI
- Description: LLM Capsule sits inside your environment, reads from existing systems, preserves operational structure, and restores AI output back into the originating workflow. The architecture maps to four zones — Corporate Internal Network, DMZ, In-House Team, and Local Auto Reconstruction — and the trust boundary holds: raw operational data stays inside the corporate environment; only the protected capsule traverses zones; restored output is reconstructed locally inside the in-house team's environment.

**Grid:** 4 zone cards, responsive: 4-col (1024px+) → 2-col (768px) → 1-col (mobile)

**Zone card structure (flat, no colored border-top/left):**
- Zone label (mono, uppercase, muted) — e.g., "Zone 1"
- Zone name (h3, 16px, bold)
- Description (13px, ink-soft)
- Bullet list of items
- Trust boundary badge (Zone 2 only) — dashed border, coral color

| Zone | Label | Name | Color accent (badge/icon only) |
|------|-------|------|------|
| 1 | Zone 1 | Corporate Internal Network | coral (problem/risk zone) |
| 2 | Zone 2 | DMZ — Demilitarized Zone | primary (capsule zone) |
| 3 | Zone 3 | In-House Team | teal (governance zone) |
| 4 | Zone 4 | Local — Auto Reconstruction | amber (reconstruction zone) |

**Zone 1 items:**
- ERP System (SAP / Oracle) — REST API
- CRM (Salesforce) — REST API
- Ticketing (Jira / ServiceNow) — REST API
- DMS / ECM (SharePoint) — Graph API
- Legacy DB (Oracle / MSSQL) — JDBC → API
- RAG Pipeline (Vector DB) — gRPC / REST

**Zone 2 items:**
- Detection — PII + customer-defined markers
- Enhanced Encapsulation Layer — DP-based, structure-preserving
- Capsule transmission — capsule only, never raw data
- Token map stays local
- Audit trail of every encapsulation event
- Trust boundary badge: "↑ Trust boundary — original operational data never crosses"

**Zone 3 items:**
- Organizational policy & permissions
- Domain context applied to AI processing
- Routing — external approved LLM (Path A) or on-prem local (Path B)
- Approved external LLMs: ChatGPT · Claude · Gemini · Perplexity · any LLM API
- Governance fully retained

**Zone 4 items:**
- Token-by-token restoration from local token vault
- Restoration happens only inside the organization
- Externally-leaked data is not restorable outside
- Business-Ready output delivered to the originating workflow
- Restoration audit alongside encapsulation audit

---

## Section 3 — Technical Diagram (iframe embed)

**Layout:** [W] Diagram (iframe embed)  
**Background:** `var(--c-bg-soft, #f7f8fb)`  
**Section id:** `section-3`

**Section header:**
- Eyebrow: Technical view · zone-based architecture
- h2: The same architecture, in technical detail
- Description: For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and external AI interact.

**Diagram wrapper:**
- Dark background: `#0d1117`
- Border-radius: `var(--r-lg)`
- No box-shadow (DS rule)
- Caption label (pseudo): "TECHNICAL VIEW · ZONE-BASED ARCHITECTURE" (mono, small, muted)
- iframe: `src` controlled by URL prop (default: `architecture-diagram-v8.html`), `min-height: 1400px` desktop / `1800px` mobile

**4 annotation cards** (2-col grid → 1-col mobile), flat style, no colored border:
1. Zone 1 · Corporate Internal Network — "Where the operational systems already live" — Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
2. Zone 2 · DMZ — Demilitarized Zone — "Where encapsulation happens" — The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
3. Zone 3 · In-House Team — "Where governance and routing happen" — Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
4. Zone 4 · Local — Auto Reconstruction — "Where the AI response becomes Business-Ready output" — The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.

---

## Section 4 — 6 Architectural Pillars

**Layout:** [G] Card grid (3-col → 2-col → 1-col)  
**Background:** `var(--c-bg, #ffffff)`  
**Section id:** `section-4`

**Section header:**
- Eyebrow: Six architectural pillars
- h2: What this architecture protects against — and how
- Description: The pillars below are the technical commitments encoded into the four-zone architecture above. Each maps to a specific failure mode of conventional approaches.

**Cards:** 6 pillar cards, flat (no colored border-top/left, no shadow)
- Number label: mono, 11px, primary color, uppercase — "Pillar 01" … "Pillar 06"
- Title: h3, 17px bold
- Description: 14px, ink-soft

| # | Title | Description |
|---|-------|-------------|
| 01 | Beyond simple PII guardrails | Even inside the same enterprise, free-text fields like a CS ticket Details column mix customer names, contact information, and claim narrative in unstructured form. Simple PII guardrails cannot safely process this. Detection in Capsule operates on free-text and structured fields together — semantic and context-aware, not pattern-matching alone. |
| 02 | No modification of existing systems | Existing enterprise systems are not refactored. Connection is a single API-call addition (REST / gRPC) — the operations team continues using their existing tools, the Capsule layer handles encapsulation and restoration alongside. |
| 03 | Beyond simple encapsulation — differential privacy | The Enhanced Encapsulation Layer goes beyond simple tokenization. Differential privacy (epsilon-DP, Laplace noise, k-anonymity, NER masking) is applied to minimize re-identification risk on the capsule itself, providing stronger protection than tokenization alone. |
| 04 | No raw exposure to external AI | External AI services see only the capsule. Original operational data does not cross the trust boundary. Tokenization combined with DP processing means a leak from the external AI side does not yield reconstructable original values. |
| 05 | In-environment auto-restoration | AI response tokens are automatically restored to their original values inside the organization only. Data that left the trust boundary cannot be reconstructed externally — only the in-house token vault can perform restoration. |
| 06 | Governance, policy & domain context retained | Organizational policy, permissions, and domain context drive the entire AI processing path — what gets encapsulated, where it is routed (Path A external or Path B on-prem), and how restoration is audited. Governance stays inside the organization end-to-end. |

**Footer note** (below grid, centered, muted, 14px, max-width 720px):
"These pillars are derived from the diagram_v8 architecture reference. Each pillar maps to a specific failure mode of conventional approaches — masking and redaction, prompt security gateways, and synthetic data platforms — that the four-zone architecture is designed to address."

---

## Section 5 — 5 Components

**Layout:** [G] Card grid (5-col → 2-col → 1-col)  
**Background:** `var(--c-bg, #ffffff)`  
**Section id:** `section-5`

**Section header:**
- Eyebrow: Five components
- h2: What's inside the LLM Capsule
- Description: The five architectural components that implement the data layer. Each is independently configurable and audit-loggable.

**Cards:** 5 component cards. Color differentiation via number label color only (no colored border-top).

| # | Color (label only) | Title | Description |
|---|---|---|---|
| 01 | primary | Detection Engine | Detects PII + customer-defined markers across structured fields and free text. Beyond regex — semantic + context-aware. 98.1% detection accuracy. |
| 02 | teal | Encapsulation Engine | Differential-privacy-based replacement (epsilon-DP, Laplace noise, k-anonymity, NER masking). Structure-preserving — tables, hierarchies, references survive. |
| 03 | amber | Policy Control | Versioned, scoped, RBAC'd policies. Time-shifting markers — yesterday's policy archived, today's enforced. Per-team, per-workflow scope. |
| 04 | coral | Restoration Engine | Local token vault lookup + context re-binding + output validation. 100% restoration rate. AI output comes back business-ready, in the originating tool. |
| 05 | ink (dark) | Audit & Compliance | Every detection, encapsulation, processing, and restoration logged with policy version, model, latency, and outcome. GDPR / HIPAA / SOX-aligned. |

**Responsive grid:** `repeat(5, minmax(0, 1fr))` → at 1024px `repeat(3, minmax(0, 1fr))` → at 768px `repeat(2, minmax(0, 1fr))` → mobile 1-col

---

## Section 6 — Two Execution Paths

**Layout:** [G] 2-col grid  
**Background:** `var(--c-bg-soft, #f7f8fb)`  
**Section id:** `section-6`

**Section header:**
- Eyebrow: Two execution paths
- h2: One architecture. Two paths. Policy-driven per workflow.
- Description: The same LLM Capsule instance can route different workflows through different paths — under one governance framework.

**Path cards (2-col → 1-col mobile):**

**Path A — External:**
- Label badge: "PATH A · External" — background `var(--c-primary-soft)`, color `var(--c-primary-dark)`
- Title: Approved external LLM, capsule data only
- Description: For workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs).
- Checklist items:
  - Routes to ChatGPT, Claude, Gemini, Perplexity, or any LLM API
  - Capsule travels — original data never does
  - In-region endpoints supported (EU-hosted for sovereign AI)
  - Best for: NOC RCA, claims classification, summarization

**Path B — On-prem:**
- Label badge: "PATH B · On-prem" — background `var(--c-bg-dark)`, color white
- Title: On-prem local lightweight model
- Description: For workflows where any external endpoint is unacceptable — classified data, lawful intercept segments, OT operations, regulated mental health / pediatric data.
- Checklist items:
  - Quantized model on internal GPU (vLLM-served)
  - Zero external transmission — fully air-gapped option
  - Same Capsule instance, same audit, same policy framework
  - Best for: defense, classified workflows, strict sovereign AI

---

## Section 7 — In-Environment Integration

**Layout:** Split (connectors grid + sub-section for integration interfaces)  
**Background:** `var(--c-bg, #ffffff)`  
**Section id:** `section-7`

**Section header:**
- Eyebrow: In-environment integration
- h2: Reads the systems you already run — without modifying them
- Description: LLM Capsule is not a SaaS API you call from outside. It runs inside your environment and reads from the operational systems already in place. Existing systems are not modified — a single API-call addition is what connects them to the encapsulation layer.

**Source systems grid (2-col, 6 cards):**

| System | Connection |
|--------|-----------|
| ERP System | SAP / Oracle — REST API |
| CRM | Salesforce — REST API |
| Ticketing | Jira / ServiceNow — REST API |
| DMS / ECM | SharePoint — Graph API |
| Legacy DB | Oracle / MSSQL — JDBC → API |
| RAG Pipeline | Vector DB — gRPC / REST |

**Source systems note** (below grid, muted, 14px):
"These six are the source-system identities mapped in the diagram_v8 reference. Existing enterprise systems are not modified — connection is a single API-call addition. Raw operational data does not leave the environment to reach Capsule; the Capsule sits next to these systems, on-prem or in your VPC."

**Integration interfaces sub-section:**
- Eyebrow: Integration interfaces
- h3: How existing systems invoke Capsule from inside the environment
- Description: Once Capsule is deployed inside the environment, existing enterprise systems invoke it through whichever interface fits their stack. All interfaces stay inside the customer network — none of them route raw operational data through an external SaaS endpoint.
- Interface cards (3-col → 2-col → 1-col):

| Interface | Description |
|-----------|------------|
| REST / gRPC | For modern operations tools, RAG pipelines, and custom orchestrators inside the environment. |
| JDBC / ODBC | For legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step. |
| Graph API | For DMS / ECM systems (e.g. SharePoint) where document events trigger Capsule processing. |
| On-prem API | Capsule's own on-prem callable surface. Same contract whether you're air-gapped, hybrid, or VPC. |
| Embedded SDK | Library-level integration for ISVs and platform vendors who ship Capsule inside their own product. |
| Slack App | For teams using Slack as the operations UI. The runtime still lives in the customer environment; the Slack App is the invocation surface. |

---

## Section 8 — 6 Deployment Modes

**Layout:** [G] Card grid (3-col → 2-col → 1-col)  
**Background:** `var(--c-bg-soft, #f7f8fb)`  
**Section id:** `section-8`

**Section header:**
- Eyebrow: Deployment modes
- h2: Six deployment modes — match your environment exactly
- Description: Capsule runs inside the customer environment in every mode. Path A and Path B execution choices apply across all six.

**Cards (6 deployment mode cards, flat):**

| Title | Description |
|-------|-------------|
| Air-gapped on-prem | Fully internal. No external network. Path B only. Defense, classified, OT. |
| On-prem hybrid | Internal Capsule + approved external LLM. Path A for most workflows, Path B for sensitive subset. |
| VPC / private cloud | Customer's cloud VPC. Capsule + token vault stay in tenant; LLM call to in-region endpoint. |
| AWS Marketplace | Listed and procurable through AWS Marketplace. VPC deployment, AWS billing integration. |
| Embedded SDK | For ISVs and platform vendors building Capsule into their own product. Library-level integration that ships inside the host application. |
| Slack App | For teams using Slack as the operations UI. Capsule runtime stays in the customer environment; the Slack App is the surface that invokes it. |

**Footer note** (below grid, muted, 14px, center):
"Note: a separate "Telecom-grade" topology (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure — validated at SK Telecom, recognized at Deutsche Telekom T Challenge 2026. It composes with the modes above rather than replacing them."

---

## Section 9 — CTA Strip

**Layout:** [K] CTA band  
**Background:** `var(--c-bg-dark, #0f1130)`  
**Section id:** `section-9`

| Element | Content |
|---------|---------|
| h2 (white) | See the architecture run on your environment. |
| p (c8c4f7) | Bring your deployment constraints, regulatory profile, and one real workflow. We demonstrate the data layer in your environment within 30 minutes. |
| Button 1 | Request a Live Demo → `/request-a-demo` (btn--invert) |
| Button 2 | View Product → `/product` (btn--invert-ghost) |
| Button 3 | View Trust & Compliance → `/trust` (btn--invert-ghost) |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|---------|
| mobile (default) | 1-col grids, full-width cards |
| 768px+ | 2-col grids (zones, paths, annotation) |
| 1024px+ | 3-col pillar grid, 5-col comp grid starts at 3-col |
| 1440px+ | max-width locks at 1280px, container padding 80px |

---

## DS Rules Checklist

- [x] No `const PALETTE` — `var(--c-*, hex)` only
- [x] No colored border-top/border-left on cards
- [x] No box-shadow on cards
- [x] Eyebrow allowed (LLM Capsule brand)
- [x] Inter + JetBrains Mono fonts
- [x] 1280px container max-width
- [x] Solid ink buttons (no gradient)
- [x] All section ids: section-1 through section-9
- [x] `repeat(N, minmax(0, 1fr))` grids
- [x] Tokens CSS absolute URL
