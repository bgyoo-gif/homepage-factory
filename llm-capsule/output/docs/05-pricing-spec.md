# 05 Pricing — Layout & Component Spec
**Brand:** llm-capsule | **DS version:** v6.2 | **Source:** `llm-capsule/input/llmcapsule_260506/05_pricing.html`

---

## Meta & SEO (preserve verbatim)
- **Title:** `Pricing | LLM Capsule — Context-Preserving Data Layer for AI Pricing`
- **Description:** `Pricing for secure AI workflow deployment. Workflow Proof of Value, Enterprise (annual license), AWS Marketplace. Volume-based, tailored to document processing workload, deployment, and regulatory profile.`
- **Canonical:** `https://llmcapsule.ai/pricing`
- **JSON-LD:** BreadcrumbList (Home → Pricing) + FAQPage schema for 6 FAQ items

---

## Design System Rules (v6.2)

| Rule | Value |
|------|-------|
| Container max-width | `1280px` (`--container-max`) |
| Font | Inter + JetBrains Mono |
| Spacing | `var(--s-page)` / `var(--s-section)` |
| Eyebrow | Allowed (LLM Capsule brand) |
| Buttons | Solid ink (NOT gradient) |
| Card borders | NO colored border-top/left |
| Box-shadow | None on cards |
| Radius | `--r-sm` 6px / `--r-md` 10px / `--r-lg` 16px |
| Dark section bg | `var(--c-bg-dark, #0f1130)` |
| Tokens CSS | `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css` |

---

## Section Map

| # | Component | Pattern | Notes |
|---|-----------|---------|-------|
| S1 | Hero | Text-only, centered | Eyebrow + h1 + description |
| S2 | Pricing Tiers | 3-col card grid | POC / Enterprise (featured) / AWS |
| S3 | Feature Matrix | Full-width table | 12 data rows + header |
| S4 | Volume Calculator | Dark card + range slider | useState interactivity in TSX |
| S5 | FAQ | Accordion | 6 items |
| S6 | CTA Strip | Dark full-width band | 2 CTAs |

---

## Section 1 — Hero

**Layout:** Centered text, `padding-top: clamp(80px, 10vw, 140px)`

| Element | Value |
|---------|-------|
| Eyebrow | `Pricing` |
| h1 | `Pricing for secure AI workflow deployment` — strong on `secure AI workflow deployment` |
| Description | `Volume-based pricing tailored to your document processing workload, deployment requirements, and regulatory profile.` |
| Bottom border | `1px solid var(--c-rule)` |

---

## Section 2 — Pricing Tiers

**Layout:** 3-column card grid (1-col on mobile). Cards use flat style, `border: 1px solid var(--c-rule)`, `border-radius: var(--r-lg)`. No box-shadow. No colored borders.

### Card 1 — Proof of Value
| Field | Value |
|-------|-------|
| label (eyebrow badge) | `Workflow Proof of Value` |
| tierName | `Proof of Value` |
| price | `Custom` |
| period | `Evaluation period · 4-8 weeks` |
| features | Test with your own documents / Full encapsulation + restoration / Path A or Path B execution / 11 starter markers + custom / Audit dashboard / Evaluation report on detection / restoration / workflow |
| ctaText | `Start a Workflow Proof of Value →` |
| ctaLink | `/request-a-demo` |
| featured | false |

### Card 2 — Enterprise (featured)
| Field | Value |
|-------|-------|
| label | `Enterprise` |
| tierName | `Custom` |
| price | `Custom` |
| period | `Annual license · production-grade` |
| features | Unlimited document processing / Full 6 capability set including time-shifting policy / Both execution paths (A + B) under one governance / Custom marker definition + policy versioning / RBAC + per-team scope / SLA-backed support, dedicated CSM / GDPR / HIPAA / SOX-aligned audit / On-prem, hybrid, VPC, embedded SDK, Slack App |
| ctaText | `Talk to Sales →` |
| ctaLink | `/request-a-demo` |
| featured | true — badge pill "MOST COMMON", subtle primary-soft top tint |

### Card 3 — AWS Marketplace
| Field | Value |
|-------|-------|
| label | `AWS Marketplace` |
| tierName | `Listed` |
| price | `Pay through AWS` |
| period | `Streamlined procurement` |
| features | Streamlined AWS procurement / AWS billing integration / VPC deployment / Same capability set as Enterprise / EDP / private offer eligible |
| ctaText | `View on AWS →` |
| ctaLink | `https://aws.amazon.com/marketplace` |
| featured | false |

---

## Section 3 — Feature Comparison Matrix

**Layout:** Full-width table inside container. `border-collapse: collapse`. Header row uses `var(--c-bg-soft)`. Featured column (Enterprise) uses `var(--c-primary-soft)` background. No box-shadow.

**Columns:** Feature | Proof of Value | Enterprise | AWS Marketplace

**12 rows (preserve exact text):**
1. Document volume — Evaluation scope / **Unlimited** / Per AWS contract
2. Execution paths (A external + B on-prem) — Both / Both / Both
3. 6 capability set including time-shifting policy — Full / Full / Full
4. Custom marker definition — Up to 25 / **Unlimited** / **Unlimited**
5. Policy versioning + audit — 90-day retention / **7-year retention** / 7-year retention
6. RBAC + per-team scope — Standard / **Advanced (LDAP / SAML / SCIM)** / Advanced
7. Deployment modes — On-prem / VPC / **All 6 modes** / VPC (AWS)
8. Connector library — Standard 12 / **Standard + custom** / Standard 12
9. Compliance frameworks — GDPR / HIPAA / **GDPR / HIPAA / SOX / EU AI Act** / GDPR / HIPAA / SOX
10. SLA — Best-effort / **99.9% uptime, defined response time** / Per AWS contract
11. Support — Email / Slack / **Dedicated CSM, 24/7 P1 channel** / Email / Slack + AWS
12. DPA + Vendor Security Questionnaire — Provided / **Provided + executed** / AWS standard

---

## Section 4 — Volume Calculator

**Layout:** Dark card (`var(--c-bg-dark)`) full container width. Range slider + recommendation output.

| Element | Value |
|---------|-------|
| h3 | `Monthly document processing volume` |
| Description | `Drag the slider to your expected volume. We'll suggest the most common tier match.` |
| Slider min | 100 |
| Slider max | 1,000,000 |
| Slider step | 100 |
| Slider default | 5,000 |
| Range label | `100 ↔ 1,000,000+` |
| Rec label | `RECOMMENDED TIER` |
| Default rec tier | `Enterprise` |
| Default rec desc | `Production-grade with full SLA, custom markers, both execution paths` |

**Logic:**
- `< 5,000` → `Workflow Proof of Value` / `Evaluation scope — best for first 4-8 weeks, one production workflow`
- `5,000–99,999` → `Enterprise` / `Production-grade with full SLA, custom markers, both execution paths`
- `≥ 100,000` → `Enterprise + AWS Marketplace` / `High-volume production. AWS Marketplace eligible for streamlined procurement`

---

## Section 5 — FAQ

**Layout:** Max-width 880px, centered. `<details>/<summary>` in HTML; `useState` accordion in TSX.

**6 items (preserve exact text verbatim):**
1. Q: `How is pricing calculated?`
2. Q: `Can we start with a Workflow Proof of Value and convert to Enterprise?`
3. Q: `Do you support custom on-prem deployments?`
4. Q: `What about EU sovereign data and GDPR?`
5. Q: `Where can LLM Capsule be deployed?`
6. Q: `What certifications does LLM Capsule hold?`

Internal links in answers: `/architecture` and `/trust` (relative Framer paths in TSX).

---

## Section 6 — CTA Strip

**Layout:** Full-width dark band, centered text.

| Element | Value |
|---------|-------|
| h2 | `Ready to start?` |
| Subtitle | `Bring your industry, your workload estimate, and your deployment constraints. We'll propose a deployment fit and pricing within one business day.` |
| CTA 1 | `Request a Quote` → `/request-a-demo` (btn--invert) |
| CTA 2 | `View on AWS Marketplace` → `https://aws.amazon.com/marketplace` (btn--invert-ghost) |

---

## TSX Component Plan

| File | Location | Props Count |
|------|----------|-------------|
| `Section01_Hero.tsx` | `pricing-v62/tsx/` | 3 (eyebrow, title, description) |
| `Section02_PricingTiers.tsx` | `pricing-v62/tsx/` | ~30 (3 tiers × label/name/price/period/features/cta) |
| `Section03_FeatureMatrix.tsx` | `pricing-v62/tsx/` | ~52 (sectionTitle + 12 rows × 4 cols) |
| `Section04_VolumeCalculator.tsx` | `pricing-v62/tsx/` | 8 (h3, desc, labels, default values) + useState |
| `Section05_FAQ.tsx` | `pricing-v62/tsx/` | 12 (6× question+answer) |
| `Section06_CTAStrip.tsx` | `pricing-v62/tsx/` | 6 (title, subtitle, 2 CTAs) |

---

## Responsive Breakpoints (Container Queries for TSX)

| Width | Behavior |
|-------|----------|
| < 768px (mobile) | 1-col card grid, table horizontal scroll |
| 768px+ (tablet) | 2-col or scroll |
| 1024px+ (sm-desktop) | 3-col card grid |
| 1280px+ (desktop) | max-width container capped |
