# Pricing Page -- Design Spec (B-type)

> Brand: **llm-capsule**
> Source: `llm-capsule/input/LLM_Capsule_Website_Updated_v3/pricing.html`
> Output: `llm-capsule/output/html/pricing-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> CSS Reference: `llm-capsule/output/html/index-b-type.html` (동일 브랜드 CSS 구조 복사)

---

## A-type Analysis

### Section Inventory

| # | Section | Content Type | Key Message |
|---|---------|-------------|-------------|
| 1 | Hero | Text-only hero | Enterprise Pricing -- contact for volume-based pricing |
| 2 | Pricing Cards | Comparison cards (3 plans) | PoV / Enterprise / AWS Marketplace |
| 3 | CTA | CTA band | "See how LLM Capsule works with your data" |

### Tone & Manner
- Sales/conversion focused
- Concise, enterprise-oriented
- 3 pricing tiers with feature lists

---

## Section-by-Section Design

### Section 1: Hero (text-only)

**ID:** `id="section-1"`
**Pattern:** [A] Hero text-only -- `ds-hero--text-only`
**Background:** White (no background image -- text-only hero rule)

**Structure:**
```
section#section-1.ds-section.ds-section--hero
  div.ds-container
    div.ds-hero.ds-hero--text-only
      h1.ds-hero__title
        "Enterprise <span class="ds-text--brand">Pricing</span>"
      p.ds-hero__description
        "<span class="ds-text--product">LLM Capsule</span> is priced for enterprise deployment. Contact us for volume-based pricing tailored to your document processing workload and deployment requirements."
```

**Title emphasis keyword:** "Pricing" -> `ds-text--brand`
**Product name:** "LLM Capsule" in description -> `ds-text--product` (Oxanium font)
**eyebrow:** NONE (eyebrow banned -- A-type "Pricing" eyebrow removed)
**Breadcrumb:** NONE (not a DS component)

---

### Section 2: Pricing Plans

**ID:** `id="section-2"`
**Pattern:** [V-2] Gradient Card -- `ds-card--gradient` in `ds-card-grid--3col`
**Background:** White

**Section Header:**
```
div.ds-section-header.ds-section-header--underline
  h2.ds-section-header__title
    "Enterprise <span class="ds-text--brand">Pricing</span>"
  p.ds-section-header__description
    "LLM Capsule is priced for enterprise deployment. Contact us for volume-based pricing tailored to your document processing workload and deployment requirements."
```

**Title emphasis keyword:** "Pricing" -> `ds-text--brand`
**Note:** A-type has no explicit section header for the pricing cards area. Per DS rules, all sections must have `ds-section-header--underline`. The title and description are taken from the hero text of the A-type original (same page context) -- no new content created. Since this is the main content section, re-using the hero copy as section header provides continuity.

**Card Grid:**
```
div.ds-card-grid.ds-card-grid--3col

  [Card 1: PoV]
  div.ds-card--gradient.ds-card--gradient-blue
    div.ds-card--gradient__inner
      span.ds-card__badge.ds-card__badge--brand  "PROOF OF VALUE"
      p.ds-card__title--lg  "Custom"
      p.ds-card__subtitle  "Evaluation period"
      hr.ds-card__divider
      ul.ds-bullet.ds-bullet--check
        li  "Test with your own documents"
        li  "Full encapsulation + restoration"
        li  "Any LLM provider"
        li  "On-premise or cloud deployment"
        li  "Dedicated technical support"
      div.ds-card__actions
        a.ds-btn.ds-btn--primary.ds-btn--md  href="request-pov.html"  "Request PoV"

  [Card 2: Enterprise -- FEATURED]
  div.ds-card--gradient.ds-card--gradient-indigo
    div.ds-card--gradient__inner
      span.ds-card__badge.ds-card__badge--brand  "ENTERPRISE"
      p.ds-card__title--lg  "Custom"
      p.ds-card__subtitle  "Annual license"
      hr.ds-card__divider
      ul.ds-bullet.ds-bullet--check
        li  "Unlimited document processing"
        li  "Full 3+2 capability set"
        li  "Enterprise context control"
        li  "Custom deployment model"
        li  "Admin console & audit"
        li  "Dedicated architecture support"
        li  "SLA & enterprise support"
      div.ds-card__actions
        a.ds-btn.ds-btn--primary.ds-btn--md  href="request-pov.html"  "Contact Sales"

  [Card 3: AWS Marketplace]
  div.ds-card--gradient.ds-card--gradient-silver
    div.ds-card--gradient__inner
      span.ds-card__badge.ds-card__badge--gray  "AWS MARKETPLACE"
      p.ds-card__title--lg  "Listed"
      p.ds-card__subtitle  "Pay through AWS"
      hr.ds-card__divider
      ul.ds-bullet.ds-bullet--check
        li  "Streamlined procurement"
        li  "AWS billing integration"
        li  "VPC deployment"
        li  "Standard feature set"
        li  "AWS support channels"
      div.ds-card__actions
        a.ds-btn.ds-btn--secondary.ds-btn--md  href="https://aws.amazon.com/marketplace"  target="_blank" rel="noopener"  "View on AWS Marketplace"
```

**Rules applied:**
- AWS Marketplace external link -> `ds-btn--secondary` button (not inline link)
- Featured Enterprise card uses indigo gradient (brand primary) -- visually distinguished without fabricated "RECOMMENDED" badge (A-type has no such text)
- Badge uses `ds-card__badge` with monospace uppercase
- All feature lists use `ds-bullet--check`
- silver variant inner background defaults to white (no `ds-gradient-inner-silver` defined -- uses `.ds-card--gradient__inner` default)

---

### Section 3: CTA Band

**ID:** `id="section-3"`
**Pattern:** [K] CTA band -- `ds-cta-band`
**Background:** Brand gradient fallback (`.ds-cta-band:not([class*="ds-bg--"])` triggers `var(--ds-gradient-brand)`)
**Placement:** Full-width, outside ds-container

**Why no bg image class:** This is a 3-section page. Using the brand gradient fallback (indigo -> blue -> green) is more appropriate and avoids the need to add a bg image CSS variable that may not be defined in the capsule CSS. The gradient fallback is already defined in `design-system-capsule.md`.

**Structure:**
```
div#section-3.ds-cta-band
  div.ds-cta-band__inner
    h2.ds-cta-band__title
      "See how <span class="ds-text--product">LLM Capsule</span> works with your data"
    p.ds-cta-band__description
      "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
    div.ds-cta-band__actions
      a.ds-btn.ds-btn--md  href="request-pov.html"  "Request PoV"
      a.ds-btn.ds-btn--md  href="architecture.html"  "Talk to an Architect"
    p.ds-cta-band__footnote
      a  href="downloads.html"  "Download Architecture Brief"
      span  " | "
      a  href="https://aws.amazon.com/marketplace"  target="_blank" rel="noopener"  "Available on AWS Marketplace"
```

**Title emphasis keyword:** None (CTA band title is white on gradient background -- `ds-text--brand` not used on colored backgrounds)
**Product name:** "LLM Capsule" in title -> `ds-text--product` applied
**CTA band button styling:** Per DS, `.ds-cta-band__actions .ds-btn` uses white translucent background with dark text -- no additional class needed.
**Footnote:** Two links separated by divider -- "Download Architecture Brief" (internal) + "Available on AWS Marketplace" (external). Both from A-type original.

---

## Layout Flow Summary

| # | Section | Pattern | Background | Layout Variation |
|---|---------|---------|-----------|-----------------|
| 1 | Hero | [A] text-only | White | Text hero |
| 2 | Pricing Plans | [V-2] Gradient cards 3-col | White | 3 gradient cards |
| 3 | CTA | [K] CTA band | Brand gradient (fallback) | Full-width band |

**Background check:** Only 2 white sections before CTA (which has gradient background). Under the 3-consecutive-white rule threshold. OK.

**Background image dedup check:** No background images used. OK.

**ds-grid--1 check:** No ds-grid--1 used. OK.

**ds-section--light check:** Not used. OK.

---

## Content Integrity Checklist

- [x] All 3 pricing tiers preserved (PoV, Enterprise, AWS Marketplace)
- [x] All feature lists preserved verbatim (5 / 7 / 5 items)
- [x] Plan names preserved: "Proof of Value", "Enterprise", "AWS Marketplace"
- [x] Price labels preserved: "Custom", "Custom", "Listed"
- [x] Period labels preserved: "Evaluation period", "Annual license", "Pay through AWS"
- [x] All CTAs preserved: "Request PoV", "Contact Sales", "View on AWS Marketplace"
- [x] CTA band title preserved: "See how LLM Capsule works with your data"
- [x] CTA band description preserved verbatim
- [x] CTA band buttons preserved: "Request PoV" + "Talk to an Architect"
- [x] Footnote links preserved: "Download Architecture Brief" + "Available on AWS Marketplace"
- [x] External links use ds-btn--secondary button style (AWS Marketplace card)
- [x] No "RECOMMENDED" badge fabricated (not in original)
- [x] No content trimmed or reworded
- [x] Hero description text preserved verbatim

---

## Component Inventory

All components used are present in design-system-core.md + design-system-capsule.md:

| Component | DS Source | Notes |
|-----------|----------|-------|
| ds-hero--text-only | core | Hero pattern [A] |
| ds-section-header--underline | core | Required for all sections |
| ds-card--gradient | core 17. | Gradient card wrapper |
| ds-card--gradient-indigo | capsule | Enterprise featured card |
| ds-card--gradient-blue | capsule | PoV card |
| ds-card--gradient-silver | capsule | AWS Marketplace card |
| ds-card__badge | core | Plan name badge |
| ds-card__badge--brand | capsule override | Brand-colored badge |
| ds-card__badge--gray | core | Neutral badge |
| ds-bullet--check | core | Feature list checkmarks |
| ds-btn--primary | capsule override | Gradient brand button |
| ds-btn--secondary | core | Outline/secondary button |
| ds-cta-band | core | CTA section |
| ds-cta-band__footnote | core | Sub-CTA links |
| ds-text--brand | capsule | Title keyword emphasis |
| ds-text--product | core | Oxanium product name |

**No missing components.**

---

## Technical Notes

1. **Page structure:** 3 sections only -- this is expected for a pricing page.
2. **Nav/footer:** Copy from existing `index-b-type.html` (same brand CSS structure). Update active nav link to "Pricing".
3. **JSON-LD BreadcrumbList:** Preserve from A-type:
   ```json
   {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
     {"@type":"ListItem","position":1,"name":"Home","item":"https://llmcapsule.ai/"},
     {"@type":"ListItem","position":2,"name":"Pricing","item":"https://llmcapsule.ai/pricing"}
   ]}
   ```
4. **Meta tags:** Preserve all from A-type (title, description, keywords, OG, Twitter, canonical, robots).
5. **Image URLs:** All images must use absolute GitHub Pages path: `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
6. **LLM Capsule logo:** `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif`
7. **CSS:** Copy full CSS block from `index-b-type.html`. Add `ds-card--gradient-silver` and `ds-gradient-card-silver` tokens if not already present (defined in `design-system-capsule.md`).
8. **Section IDs:** `section-1`, `section-2`, `section-3` -- all mandatory.
9. **Responsive:** 4-stage breakpoints (375/768/1024/1440). Pricing cards stack to 1-col on mobile.
10. **CTA band gradient:** Uses capsule fallback gradient `linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` via `.ds-cta-band:not([class*="ds-bg--"])` rule -- no explicit bg class needed.
