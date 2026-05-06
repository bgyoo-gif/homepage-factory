# Trust Page (06) — B-Type Design Spec v6.2

> Brand: llm-capsule
> Source: llm-capsule/input/llmcapsule_260506/06_trust.html
> Output: llm-capsule/output/html/06-trust-b-type.html
> DS: design-system-capsule.md (v6.2) + tokens.json
> Tokens CSS: https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css
> Reference B-type: llm-capsule/output/html/01-home-b-type.html

---

## Page Meta

- title: "Trust & Compliance | LLM Capsule — Enterprise-Grade Security"
- description: "LLM Capsule trust center. ISO 27001, ISO 42001, KISA Fast Track, GS Cert. GDPR / HIPAA / SOX / EU AI Act compliance mapping. DPA template, vendor security questionnaire, audit framework. Built for regulated enterprise environments."
- canonical: https://llmcapsule.ai/trust
- keywords: LLM Capsule trust, AI compliance, GDPR AI, HIPAA AI, SOX AI, EU AI Act, ISO 27001 AI, ISO 42001 AI, AI governance
- JSON-LD: BreadcrumbList (Home > Trust & Compliance)
- Fonts: Inter 400/600/700/800 + JetBrains Mono 400/700

---

## v6.2 Global Rules

- All CSS: `var(--c-*, hex)` with fallback. Link tokens.css absolute URL.
- Font: Inter + JetBrains Mono (Oxanium폐기)
- Container: max-width 1280px, padding `var(--s-page)`
- Buttons: solid ink → hover primary. Gradient 금지.
- Eyebrow: **ALLOWED** in LLM Capsule brand
- NO colored border-top/left on cards, NO box-shadow
- Radius: 6/10/16px (`--r-sm`/`--r-md`/`--r-lg`)
- Internal links: `/request-a-demo`, `/architecture`, `/resources` (no .html)
- All var() must have hex fallback
- Responsive: 4 breakpoints (mobile 375 / tablet 768 / sm-desktop 1024 / desktop 1280+)
- `table-layout: fixed` on compliance matrix
- scrollbar-width: none + ::-webkit-scrollbar: none on table wrapper
- Mobile grids: 1col

---

## Section Map (7 sections)

| # | Section ID | Layout | Background |
|---|-----------|--------|------------|
| 1 | s1 | Hero text-only | white + subtle gradient |
| 2 | s2 | Credential Grid 12-card | white |
| 3 | s3 | Compliance Mapping Matrix (table) | soft (#f7f8fb) |
| 4 | s4 | Audit Feature Cards 5-col | white |
| 5 | s5 | Admin Console screenshot | soft (#f7f8fb) |
| 6 | s6 | Downloads 2-col cards | white |
| 7 | s7 | CTA Strip | dark (#0f1130) |

---

## Section 1: Hero — `id="s1"`

**Pattern**: Hero text-only
**Background**: `linear-gradient(180deg, #fafbff 0%, #ffffff 100%)` + border-bottom

### Content
```
eyebrow: "Trust & Compliance"
h1: Enterprise-grade <strong>architecture</strong> for security and compliance review
p.sub: LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This page is for security, compliance, and procurement teams evaluating how the architecture maps to your review framework.
buttons:
  a.btn--primary → "Request a Demo" → /request-a-demo
  a.btn--ghost   → "View Architecture" → /architecture
```

### Notes
- eyebrow: allowed in LLM Capsule brand (v6.2 rule)
- `<strong>architecture</strong>` in h1 → color: var(--c-primary)
- sub max-width: 760px
- CTA buttons inline-flex, gap 12px, flex-wrap wrap
- Hero padding-top: clamp(80px, 10vw, 140px)

---

## Section 2: Credential Grid — `id="s2"`

**Pattern**: 12-card grid (6col desktop → 4col tablet → 2col mobile)
**Background**: white

### Section Header
```
eyebrow: "Certifications & recognition"
h2: 12 certifications, awards, and global recognitions
p: From international standards (ISO/IEC) to national certifications (KISA, GS) and category recognition (Gartner, Deutsche Telekom, AWS).
```

### 12 Credential Cards

Each card structure:
```
article.cred-card
  span.cred-card__type  ← mono uppercase label
  div.cred-card__name   ← bold title
  div.cred-card__detail ← soft detail text
```

| # | type | name | detail |
|---|------|------|--------|
| 1 | ISO | ISO/IEC 27001 | Information Security Management |
| 2 | ISO | ISO/IEC 42001 | AI Management System |
| 3 | KISA | KISA Fast Track | Korea Information Security |
| 4 | GS | GS Certification | Good Software (Korea) |
| 5 | AWARD | Security Innovation Award | MSIT (Korea) |
| 6 | RECOGNITION | T Challenge 2026 — Top 12 | Deutsche Telekom · Data Security & Governance |
| 7 | AWARD | AI Medical Innovation | Healthcare AI category |
| 8 | RECOGNITION | Startup World Cup | Global recognition |
| 9 | RECOGNITION | Next Rise Global Innovator | Korea-Global innovation showcase |
| 10 | VENDOR | Gartner Vendor | AI / data category recognition |
| 11 | RECOGNITION | Emerging AI+X Top 100 | Korea AI excellence |
| 12 | MARKETPLACE | AWS Marketplace | Listed and procurable |

### Card Style Rules
- Background: white, border: 1px solid var(--c-rule)
- Radius: var(--r-md, 10px)
- Padding: 24px 18px
- min-height: 160px, flex-column, center-aligned
- type label: JetBrains Mono, 10px, uppercase, letter-spacing 0.1em, color: var(--c-muted)
- name: 13px, 700 weight
- detail: 11px, color: var(--c-ink-soft)
- NO colored border-top, NO box-shadow (v6.2)

### Grid Columns
- Desktop (1024+): repeat(6, minmax(0, 1fr))
- Tablet (768+): repeat(4, minmax(0, 1fr))
- Mobile: repeat(2, minmax(0, 1fr))

---

## Section 3: Compliance Mapping Matrix — `id="s3"`

**Pattern**: Responsive table with sticky first column
**Background**: var(--c-bg-soft, #f7f8fb)

### Section Header
```
eyebrow: "Compliance frameworks"
h2: How LLM Capsule capabilities map to GDPR / HIPAA / SOX / EU AI Act review workflows
p: LLM Capsule provides architectural controls that support GDPR, HIPAA, SOX, and EU AI Act review workflows. The matrix below maps each capability to the relevant article or section so compliance, security, and procurement teams have a starting reference. This is not a compliance certification — final compliance determination is the customer's, in their own deployment context.
```

### Table Structure
```
div.matrix-wrap (overflow-x: auto, scrollbar-width: none)
  table.comp-matrix (table-layout: fixed, border-collapse: collapse)
    thead: LLM Capsule capability | GDPR | HIPAA | SOX | EU AI Act
    tbody: 7 rows
```

### Column Widths (table-layout: fixed)
- Col 1 (Capability): 22%
- Cols 2-5 (Frameworks): equal remaining

### 7 Table Rows (verbatim)

| Capability | GDPR | HIPAA | SOX | EU AI Act |
|-----------|------|-------|-----|-----------|
| Local encapsulation (data never leaves) | Art. 5 (lawfulness), Art. 32 (security of processing) — Pseudonymization before transmission | 164.502(d), 164.514(b) — De-identification methodology | Section 404 — Internal control over data flow | Art. 10 (data governance), Art. 15 (cybersecurity) — Data quality and protection requirements |
| Local restoration (token vault) | Art. 32 — Pseudonymization is reversible only inside controlled environment | 164.514(c) — Re-identification key separation | Section 404 — Authorized re-identification only | Art. 10 — Reversibility for legitimate use only |
| Audit logs (every event) | Art. 30 — Records of processing activities | 164.312(b) — Audit controls | Section 404, 802 — Internal control + record retention | Art. 12, 13, 19 — Logging, transparency, conformity |
| Policy versioning + time-shifting | Art. 5(2), 24 — Accountability principle | 164.316 — Policies and procedures | Section 302, 404 — Internal control over policy changes | Art. 17, 18 — Quality and risk management system |
| RBAC + scope | Art. 32 — Access control | 164.308(a)(4), 164.312(a) — Workforce security + access control | Section 404 — Segregation of duties | Art. 14 — Human oversight |
| On-prem / Path B execution | Art. 44, Chapter V — International transfer restriction (avoidance) | 164.308(a)(8) — Contingency plan, environment control | Section 404 — Environment control | Art. 25 — Conformity assessment when high-risk |
| DPA, SCCs, Vendor Security | Art. 28 — Processor obligations | BAA equivalent — Business associate framework | Auditor reliance — Vendor management | Art. 28 — Provider obligations |

### Cell Note Pattern
Main reference text on one line, sub-note in `<small>` on next line.

### Table Style Rules
- Table bg: white, radius: var(--r-md) on wrapper border
- th: bg var(--c-bg-soft), font mono 11px, muted color, uppercase, letter-spacing 0.05em
- td first-child: font-weight 700, color ink, width 22%, bg #fafbff
- td small: color var(--c-muted), display block, margin-top 4px, font-size 11px
- Borders: 1px solid var(--c-rule) between rows

---

## Section 4: Audit Features — `id="s4"`

**Pattern**: 5-col feature card grid
**Background**: white

### Section Header
```
eyebrow: "Audit framework"
h2: What the audit log captures
p: Every event in the LLM Capsule lifecycle is logged with structured metadata — ready for review by privacy, security, and compliance teams.
```

### 5 Feature Cards

Each card:
```
article.audit-card
  span.audit-card__accent  ← colored dot/indicator (icon color only, no border-top)
  h3.audit-card__title
  p.audit-card__desc
```

| # | Color Accent | Title | Description |
|---|-------------|-------|-------------|
| 1 | primary (#5b4fe9) | Detection events | Every detection: which marker, which document, which version, confidence, timestamp. Reproducible across policy versions. |
| 2 | teal (#0ea5a4) | Policy versions | Yesterday's policy archived, today's enforced. Diff visible. Time-shifting markers — query historical decisions under historical policy. |
| 3 | amber (#f59e0b) | Token mappings | Local token vault never leaves. Token issuance + retrieval logged with workflow ID and user identity. Vault encrypted at rest. |
| 4 | coral (#ef5350) | Detection accuracy | 98.1% baseline detection rate measured on industry benchmarks. Per-deployment evaluation against your own document corpus. |
| 5 | ink (#0f1130) | Model + path routing | Which workflow routed to which model on which path (A external / B on-prem). Full per-event traceability for regulator review. |

### Card Style Rules
- Background: white, border: 1px solid var(--c-rule)
- Radius: var(--r-md, 10px), padding: 22px
- NO border-top colored line (v6.2 rule)
- Accent: small colored dot/icon (4px circle or inline SVG) using color variant
- Grid: 5col desktop → 2col tablet → 1col mobile

---

## Section 5: Admin Console — `id="s5"`

**Pattern**: Screenshot section with placeholder
**Background**: var(--c-bg-soft, #f7f8fb)

### Section Header
```
eyebrow: "Admin console"
h2: The control surface for security and compliance teams
p: One console for policies, audit, detection accuracy, and deployment health.
```

### Screenshot Area
```
div.admin-shot (data-replace="admin-console")
  [Dark placeholder with monospace text]
  "Admin Console screenshot · same asset as 02_product page"
  "Tabs: Audit · Policies · Tokens · Detection · Models"
  "Live event stream + policy version diff + detection accuracy chart"
```

### Screenshot Style
- Background: var(--c-bg-dark, #0f1130)
- Border-radius: var(--r-lg, 16px)
- Padding: 40px, min-height: 360px
- Color: #c8c4f7 (light purple on dark)
- Font: JetBrains Mono 12px
- Border: 1px dashed rgba(255,255,255,0.1)
- ControlType.Image via Props in TSX with fallback

---

## Section 6: Downloads — `id="s6"`

**Pattern**: 2-col card grid (gated)
**Background**: white

### Section Header
```
eyebrow: "Compliance downloads"
h2: Documentation for procurement and compliance
p: The documents your legal, security, and procurement teams need to move forward. Form-gated to coordinate with Sales / Customer Success on questions.
```

### 2 Download Cards

#### Card 1: DPA Template
```
article.dl-card
  span.dl-icon: 📄
  span.dl-chip: "FORM-GATED · 1 BUSINESS DAY"
  h3: Data Processing Agreement (DPA) Template
  p: CUBIG's standard DPA template aligned with GDPR Article 28 obligations. Includes Standard Contractual Clauses (SCCs) for international transfers. Customizable for sector-specific requirements.
  a.btn--primary → "Request DPA →" → /request-dpa
```

#### Card 2: Vendor Security Questionnaire
```
article.dl-card
  span.dl-icon: 📋
  span.dl-chip: "FORM-GATED · 1 BUSINESS DAY"
  h3: Vendor Security Questionnaire
  p: Pre-filled CUBIG responses to standard SIG, CAIQ, and SOC2 vendor security questionnaires. For procurement and security review teams. Includes architectural diagrams and audit framework details.
  a.btn--primary → "Request Questionnaire →" → /request-vendor-questionnaire
```

### Card Style Rules
- Background: white, border: 1px solid var(--c-rule)
- Radius: var(--r-md), padding: 28px
- flex-column, gap: 12px
- chip: JetBrains Mono, 10px, amber-soft bg, amber-dark text, pill shape (radius: 999px)
- button: solid ink style (NOT gradient)
- Grid: 2col desktop → 1col mobile

---

## Section 7: CTA Strip — `id="s7"`

**Pattern**: Dark CTA section
**Background**: var(--c-bg-dark, #0f1130)

### Content
```
h2: Compliance, security, and procurement teams welcome.
p: Bring your regulatory profile, your standard vendor security questionnaire, and your DPA template. We respond inside one business day.
buttons:
  a.btn--invert       → "Request a Live Demo" → /request-a-demo
  a.btn--invert-ghost → "View Architecture"   → /architecture
  a.btn--invert-ghost → "Browse Resources"    → /resources
```

### Style Rules
- Full-width dark section
- h2: white, 700
- p: #c8c4f7 (light purple), max-width 640px, margin: 0 auto
- Buttons: flex, gap 12px, justify-center, flex-wrap wrap
- Padding: var(--s-section) 0

---

## Background / Visual Notes

- No background images on this page (trust page is content-heavy, stays clean)
- Section alternation via white vs. soft (#f7f8fb): S2 white, S3 soft, S4 white, S5 soft, S6 white, S7 dark
- This creates natural visual rhythm without bg images

---

## TSX Component Map

| File | Component | Reusable? |
|------|-----------|-----------|
| Section01_Hero.tsx | Hero text + eyebrow + CTAs | No (page-specific) |
| Section02_CredentialGrid.tsx | 12 cred cards | No (uses CredentialCard data) |
| Section03_ComplianceMatrix.tsx | Table with 7 rows × 5 cols | No (all cells as Props) |
| Section04_AuditFeatures.tsx | 5 audit cards | No |
| Section05_AdminConsole.tsx | Screenshot placeholder | No |
| Section06_Downloads.tsx | 2 DL cards | No |
| Section07_CTAStrip.tsx | Dark CTA | → reuse _shared/CTAStrip.tsx pattern |

All TSX: v6.2 rules — @container only, all text as Props, CSS var with fallback, class prefix s1–s7.

---

## Content Integrity Checklist

- [x] Hero h1: exact match "Enterprise-grade architecture for security and compliance review"
- [x] Hero sub: full paragraph verbatim
- [x] All 12 credential cards: type/name/detail verbatim
- [x] Compliance matrix: 7 rows × 4 framework cols, all citations verbatim
- [x] All <small> sub-notes preserved
- [x] 5 audit card titles+descriptions verbatim
- [x] Admin console placeholder text verbatim
- [x] Both DL card titles+descriptions verbatim
- [x] DL chips: "FORM-GATED · 1 BUSINESS DAY" verbatim
- [x] DL button text: "Request DPA →" and "Request Questionnaire →" verbatim
- [x] CTA h2 verbatim
- [x] CTA p verbatim
- [x] CTA 3 buttons verbatim
