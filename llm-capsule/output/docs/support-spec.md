# Support Page -- Design Specification

- **Route:** `/resources/support`
- **Brand:** llm-capsule
- **Source language:** ko (Korean)
- **Output language:** en (English)
- **DS files:** design-system-core.md + design-system-capsule.md
- **Token CSS:** `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css`
- **Source file:** `llm-capsule/input/llmcapsule_260630/support.html`
- **Output file:** `llm-capsule/output/html/support-b-type.html`
- **TSX:** Single file (no part split needed)
- **GNB/Footer:** Excluded (Framer global components)

---

## Global Settings

```
Container max-width: 1280px (var(--container-max))
Container padding: var(--s-page) = clamp(20px, 4vw, 80px)
Font: var(--f-display) = 'Inter', -apple-system, system-ui, sans-serif
Code font: var(--f-mono) = 'JetBrains Mono', 'SF Mono', monospace
Color system: capsule tokens (--c-primary: #5b4fe9, --c-teal: #0ea5a4, --c-ink: #0f1130)
word-break: keep-all; overflow-wrap: break-word (body global)
```

### Responsive Breakpoints (4-stage)

| Stage | Breakpoint | Container padding |
|-------|-----------|-------------------|
| Mobile | 375px base | 20px |
| Tablet | 768px+ | clamp value |
| SM Desktop | 1024px+ | clamp value |
| Desktop | 1440px+ | 80px |

---

## Page Structure (3 sections)

| # | Section | Layout Pattern | Background |
|---|---------|---------------|------------|
| 1 | Hero | [A] ds-hero--text-only | White (no bg image) |
| 2 | FAQ | [P] ds-ac-card (details/summary) | White |
| 3 | CTA Band | [K] ds-cta-band | Dark (--c-bg-dark: #0f1130) |

---

## Section 1: Hero -- Text-Only [A]

**Pattern:** `ds-hero--text-only`
**Background:** White (`var(--c-bg)`) -- NO background image (text-only hero rule)
**Border-bottom:** `1px solid var(--c-rule)`
**Padding-top:** 100px fixed (ds-section--hero rule)
**Padding-bottom:** `clamp(64px, 8vw, 96px)`
**Text-align:** center

### Content

| Element | Value |
|---------|-------|
| Eyebrow | `Support` |
| h1 | `How can we <span class="ds-text--brand">help</span>?` |
| h1 brand keyword | `help` -- `ds-text--brand` (color: var(--c-primary)) |
| Description | `Considering LLM Capsule for your organization? From free trials to how we handle sensitive data, we have compiled the most frequently asked questions before deployment. For anything else, reach out by email anytime.` |
| CTA 1 (primary) | `Email Us` -- `mailto:contact@cubig.ai` -- `ds-btn ds-btn--primary` |
| CTA 1 icon | Lucide `mail` icon (inline SVG, 16x16, stroke-width 1.5) before label |
| CTA 2 (ghost) | `Visit Product` -- `/product` -- `ds-btn ds-btn--ghost` |

### Eyebrow Styling

```css
.ds-eyebrow {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--c-primary);
  margin-bottom: 12px;
  display: inline-block;
}
```

### Hero Structure

```html
<section id="section-1" class="s1-hero">
  <div class="ds-container">
    <div class="s1-hero__inner">
      <span class="ds-eyebrow">Support</span>
      <h1>How can we <span class="ds-text--brand">help</span>?</h1>
      <p class="s1-hero__sub">...</p>
      <div class="s1-hero__actions">
        <a class="ds-btn ds-btn--primary" href="mailto:contact@cubig.ai">
          <!-- Lucide mail SVG 16x16 -->
          Email Us
        </a>
        <a class="ds-btn ds-btn--ghost" href="/product">Visit Product</a>
      </div>
    </div>
  </div>
</section>
```

### Hero CSS

```css
.s1-hero {
  padding-top: 100px;
  padding-bottom: clamp(64px, 8vw, 96px);
  border-bottom: 1px solid var(--c-rule);
  text-align: center;
  background-color: var(--c-bg);
}

.s1-hero__inner {
  max-width: 860px;
  margin: 0 auto;
}

.s1-hero h1 {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--c-ink);
  margin-bottom: 20px;
}

.s1-hero__sub {
  font-size: clamp(16px, 1.4vw, 19px);
  color: var(--c-ink-soft);
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto 32px;
}

.s1-hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
```

### Hero Responsive

```css
@media (max-width: 767px) {
  .s1-hero__actions {
    flex-direction: column;
    align-items: center;
  }
  .s1-hero__actions .ds-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
```

---

## Section 2: FAQ -- Accordion [P]

**Pattern:** `ds-ac-card` simplified for FAQ (no industry dot, no meta badges, no metrics)
**Interaction:** Native `<details>` / `<summary>` HTML elements for progressive enhancement
**Background:** White (`var(--c-bg)`)
**Padding:** `var(--s-section)` top and bottom

### Section Header

| Element | Value |
|---------|-------|
| h2 | `Frequently Asked <span class="ds-text--brand">Questions</span>` |
| Brand keyword | `Questions` -- `ds-text--brand` |
| Description | None (Hero already introduces the page context; no original description in this section) |
| Alignment | Center |
| Border-bottom | `1px solid var(--c-rule)` (ds-section-header--underline) |

### FAQ Content Area

**Max-width:** 820px (centered) -- dedicated FAQ page readability optimization
**Wrapper class:** `s2-faq-wrap` with `max-width: 820px; margin: 0 auto;`

### Accordion Items (10 total)

Each FAQ item uses native `<details>` + `<summary>` with DS-consistent styling. No JavaScript required.

#### FAQ 1
- **Q:** What is LLM Capsule?
- **A:** LLM Capsule is a context-preserving data layer that lets you use LLMs without losing the context of sensitive data. Sensitive information in your sources and messages is de-identified before being sent to the LLM, while preserving structure and context to maintain response quality. De-identified data in responses can be restored to the original values for review.

#### FAQ 2
- **Q:** Can I try it for free before deploying?
- **A:** Yes. We offer a free trial. You can apply on the [demo request page](/request-a-demo). After review, our team will send you account credentials and onboarding instructions within **24 hours**.
- **Link:** "demo request page" -> `<a href="/request-a-demo">demo request page</a>` (inline text link acceptable since it is an internal page reference within the answer body, not an external service link)

#### FAQ 3
- **Q:** How long is the trial period?
- **A:** **14 days** from the date your account is issued. The countdown starts from the issue date regardless of when you first log in, so we recommend getting started as soon as you receive the onboarding email.

#### FAQ 4
- **Q:** How is sensitive data protected?
- **A:** Sensitive information in your uploaded sources and messages is de-identified before being sent to the LLM. As a result, no sensitive data ever leaves your environment.

#### FAQ 5
- **Q:** How do I restore de-identified data?
- **A:** Click the **Restore View** button at the bottom of the response message to see the original data.

#### FAQ 6
- **Q:** What source files can I upload?
- **A:** We support TXT, DOCX, CSV, XLSX, HWPX, and text-based PDF files. You can upload up to 10 files at a time, with a maximum of 10 MB per source. Image-based PDFs without a text layer can be uploaded after OCR processing.

#### FAQ 7
- **Q:** Can I access admin features with a trial account?
- **A:** Trial accounts have access to app features only. Admin features are available through a separate guided demo session. Contact us at [contact@cubig.ai](mailto:contact@cubig.ai) to request one.
- **Link:** "contact@cubig.ai" -> `<a href="mailto:contact@cubig.ai">contact@cubig.ai</a>`

#### FAQ 8
- **Q:** What happens to my data when the trial ends?
- **A:** Your account and all data are **permanently deleted** at the moment the trial expires and cannot be recovered. Please back up any results you need before your trial ends.

#### FAQ 9
- **Q:** How does the full deployment process work?
- **A:** Deployment requirements, environment setup, and timelines are coordinated with our sales team. Please contact us at [contact@cubig.ai](mailto:contact@cubig.ai) to get started.
- **Link:** "contact@cubig.ai" -> `<a href="mailto:contact@cubig.ai">contact@cubig.ai</a>`

#### FAQ 10
- **Q:** I encountered an error during the free trial.
- **A:** Please contact us at [contact@cubig.ai](mailto:contact@cubig.ai). Including the time the error occurred and what you were doing will help us resolve it faster.
- **Link:** "contact@cubig.ai" -> `<a href="mailto:contact@cubig.ai">contact@cubig.ai</a>`

### FAQ HTML Structure

```html
<section id="section-2" class="ds-section">
  <div class="ds-container">
    <!-- Section Header -->
    <div class="ds-section-header ds-section-header--underline">
      <h2>Frequently Asked <span class="ds-text--brand">Questions</span></h2>
    </div>

    <!-- FAQ wrapper with 820px max-width -->
    <div class="s2-faq-wrap">
      <details class="s2-faq-item">
        <summary class="s2-faq-item__q">
          <span class="s2-faq-item__text">What is LLM Capsule?</span>
          <span class="s2-faq-item__icon" aria-hidden="true"></span>
        </summary>
        <div class="s2-faq-item__a">
          <p>LLM Capsule is a context-preserving data layer...</p>
        </div>
      </details>
      <!-- repeat for all 10 items -->
    </div>
  </div>
</section>
```

### FAQ CSS

```css
.s2-faq-wrap {
  max-width: 820px;
  margin: 0 auto;
}

.s2-faq-item {
  border-bottom: 1px solid var(--c-rule);
}

.s2-faq-item:first-child {
  border-top: 1px solid var(--c-rule);
}

.s2-faq-item summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 4px;
  font-size: clamp(15px, 1.2vw, 17px);
  font-weight: 600;
  color: var(--c-ink);
  transition: color 0.15s;
}

.s2-faq-item summary::-webkit-details-marker {
  display: none;
}

.s2-faq-item summary:hover {
  color: var(--c-primary);
}

/* +/- toggle icon */
.s2-faq-item__icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  position: relative;
  color: var(--c-muted);
  transition: color 0.2s;
}

.s2-faq-item__icon::before,
.s2-faq-item__icon::after {
  content: '';
  position: absolute;
  background-color: currentColor;
  border-radius: 1px;
}

/* Horizontal bar (always visible) */
.s2-faq-item__icon::before {
  top: 10px;
  left: 3px;
  width: 16px;
  height: 2px;
}

/* Vertical bar (hidden on open) */
.s2-faq-item__icon::after {
  top: 3px;
  left: 10px;
  width: 2px;
  height: 16px;
  transition: opacity 0.2s;
}

.s2-faq-item[open] summary .s2-faq-item__icon {
  color: var(--c-primary);
}

.s2-faq-item[open] summary .s2-faq-item__icon::after {
  opacity: 0;
}

/* Answer body */
.s2-faq-item__a {
  padding: 0 4px 24px;
  color: var(--c-ink-soft);
  font-size: 15px;
  line-height: 1.75;
  max-width: 680px;
}

.s2-faq-item__a p {
  margin: 0 0 10px;
}

.s2-faq-item__a p:last-child {
  margin-bottom: 0;
}

.s2-faq-item__a a {
  color: var(--c-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.s2-faq-item__a a:hover {
  color: var(--c-primary-dark);
}

.s2-faq-item__a strong,
.s2-faq-item__a b {
  color: var(--c-ink);
  font-weight: 600;
}
```

### FAQ Responsive

```css
@media (max-width: 767px) {
  .s2-faq-item summary {
    padding: 18px 0;
    font-size: 15px;
  }
  .s2-faq-item__a {
    padding: 0 0 20px;
    font-size: 14px;
  }
}
```

---

## Section 3: CTA Band [K]

**Pattern:** `ds-cta-band` -- matches the existing resources page CTA strip
**Background:** `var(--c-bg-dark)` (#0f1130) -- solid dark, no background image
**Padding:** `var(--s-section)` vertical + `var(--s-page)` horizontal
**Text-align:** center
**Tag:** `<section>` (not `<div>`) -- must be inside `<main>`

### Content

| Element | Value |
|---------|-------|
| h2 | `Have a deployment <span class="ds-text--brand-light">question</span>?` |
| h2 color | `var(--c-bg)` (#ffffff) |
| Brand keyword | `question` -- use white or primary-soft for dark bg visibility. Use class on the word for subtle emphasis but keep readable. |
| Subtitle | `Bring your industry, your regulatory profile, and your data. We respond within one business day.` |
| Subtitle color | `var(--c-primary-soft)` with `opacity: 0.85` |
| CTA button | `Request a Live Demo` -- `/request-a-demo` -- `ds-btn ds-btn--invert` |

### CTA HTML Structure

```html
<section id="section-3" class="s3-cta">
  <div class="s3-cta__inner">
    <h2>Have a deployment question?</h2>
    <p>Bring your industry, your regulatory profile, and your data. We respond within one business day.</p>
    <a class="ds-btn ds-btn--invert" href="/request-a-demo">Request a Live Demo</a>
  </div>
</section>
```

### CTA CSS

```css
.s3-cta {
  background-color: var(--c-bg-dark);
  padding: var(--s-section) var(--s-page);
  text-align: center;
}

.s3-cta__inner {
  max-width: 640px;
  margin: 0 auto;
}

.s3-cta h2 {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--c-bg);
  margin-bottom: 16px;
}

.s3-cta p {
  font-size: 16px;
  color: var(--c-primary-soft);
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.85;
}
```

### CTA Responsive

```css
@media (max-width: 767px) {
  .s3-cta {
    padding: clamp(48px, 8vw, 80px) var(--s-page);
  }
}
```

---

## Background Image Usage

| Section | Background |
|---------|-----------|
| Hero (s1) | White -- no bg image (text-only hero rule) |
| FAQ (s2) | White -- no bg image |
| CTA (s3) | Solid dark (`--c-bg-dark`) -- no bg image |

No background images used on this page. All 3 sections have distinct visual separation (white / white with border / dark).

---

## Link Handling Rules

| Link target | Treatment |
|-------------|-----------|
| `mailto:contact@cubig.ai` | Hero: `ds-btn ds-btn--primary` button. FAQ answers: inline `<a>` (acceptable within answer body text) |
| `/product` | Hero: `ds-btn ds-btn--ghost` button |
| `/request-a-demo` | FAQ answer: inline `<a>`. CTA band: `ds-btn ds-btn--invert` button |

---

## Accessibility

- All `<details>` elements are natively accessible (keyboard operable, screen-reader compatible)
- `summary::-webkit-details-marker { display: none }` to hide default browser marker in favor of custom +/- icon
- `aria-hidden="true"` on the custom toggle icon span
- Semantic landmark: `<main>` wraps sections 1-3
- Each section has `id="section-N"` for navigation

---

## JSON-LD Structured Data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is LLM Capsule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LLM Capsule is a context-preserving data layer that lets you use LLMs without losing the context of sensitive data. Sensitive information in your sources and messages is de-identified before being sent to the LLM, while preserving structure and context to maintain response quality. De-identified data in responses can be restored to the original values for review."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try it for free before deploying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer a free trial. You can apply on the demo request page. After review, our team will send you account credentials and onboarding instructions within 24 hours."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the trial period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "14 days from the date your account is issued. The countdown starts from the issue date regardless of when you first log in, so we recommend getting started as soon as you receive the onboarding email."
          }
        },
        {
          "@type": "Question",
          "name": "How is sensitive data protected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sensitive information in your uploaded sources and messages is de-identified before being sent to the LLM. As a result, no sensitive data ever leaves your environment."
          }
        },
        {
          "@type": "Question",
          "name": "How do I restore de-identified data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click the Restore View button at the bottom of the response message to see the original data."
          }
        },
        {
          "@type": "Question",
          "name": "What source files can I upload?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support TXT, DOCX, CSV, XLSX, HWPX, and text-based PDF files. You can upload up to 10 files at a time, with a maximum of 10 MB per source. Image-based PDFs without a text layer can be uploaded after OCR processing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I access admin features with a trial account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trial accounts have access to app features only. Admin features are available through a separate guided demo session. Contact us at contact@cubig.ai to request one."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my data when the trial ends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your account and all data are permanently deleted at the moment the trial expires and cannot be recovered. Please back up any results you need before your trial ends."
          }
        },
        {
          "@type": "Question",
          "name": "How does the full deployment process work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deployment requirements, environment setup, and timelines are coordinated with our sales team. Please contact us at contact@cubig.ai to get started."
          }
        },
        {
          "@type": "Question",
          "name": "I encountered an error during the free trial.",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please contact us at contact@cubig.ai. Including the time the error occurred and what you were doing will help us resolve it faster."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
        { "@type": "ListItem", "position": 3, "name": "Support", "item": "https://llmcapsule.ai/resources/support" }
      ]
    }
  ]
}
```

---

## HTML Meta

```html
<html lang="en">
<title>Support | LLM Capsule</title>
<meta name="description" content="Get answers to frequently asked questions about LLM Capsule. Learn about free trials, sensitive data handling, supported file types, and the deployment process.">
<meta name="keywords" content="LLM Capsule support, FAQ, free trial, sensitive data protection, de-identification, enterprise AI">
<link rel="canonical" href="https://llmcapsule.ai/resources/support">
```

---

## Implementation Notes for frontend-dev

1. **Token CSS import:** Link to `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/tokens.css` for all CSS variables.
2. **No JavaScript required:** FAQ uses native `<details>` / `<summary>`. No accordion toggle JS needed.
3. **Section class prefix:** Use `s1-`, `s2-`, `s3-` prefixes to avoid class name collisions.
4. **DS shared classes:** `ds-container`, `ds-btn`, `ds-btn--primary`, `ds-btn--ghost`, `ds-btn--invert`, `ds-eyebrow`, `ds-section-header`, `ds-section-header--underline`, `ds-text--brand` are defined in the CSS within the file (not imported from external DS stylesheet).
5. **Button styles follow capsule v6.2:** Primary = solid ink bg, hover = primary. Ghost = white bg + border. Invert = white bg for dark sections.
6. **No Oxanium font:** llm-capsule brand uses Inter exclusively. No `ds-text--product` usage.
7. **Internal links:** Use Framer relative paths (`/product`, `/request-a-demo`). No absolute URLs, no `.html` extension.
8. **CTA section must be `<section>` inside `<main>`.**
9. **Grid uniformity:** Not applicable (no grids on this page), but if any grid is added, use `repeat(N, minmax(0, 1fr))`.
10. **Scrollbar:** Not applicable (no `overflow-x: auto` areas on this page).
