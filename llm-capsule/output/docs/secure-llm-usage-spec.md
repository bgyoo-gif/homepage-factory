# Secure LLM Usage -- B-Type Design Spec

> Brand: llm-capsule
> DS: design-system-core.md + design-system-capsule.md
> Template: restoration-b-type.html (glossary article)
> Source: llm-capsule/input/LLM_Capsule_Website_Updated_v3/secure-llm-usage.html

---

## Page Meta

| Key | Value |
|-----|-------|
| title | Secure LLM Usage -- Using Large Language Models Without Data Exposure \| LLM Capsule Glossary |
| description | Secure LLM usage enables enterprises to process sensitive data through large language models without exposing original information to external AI services. |
| canonical | https://llmcapsule.ai/resources/glossary/secure-llm-usage |
| og:type | article |
| keywords | enterprise AI enablement, AI-ready data layer, AI adoption enabler, LLM plugin, cross-model execution |
| JSON-LD | BreadcrumbList (Home > Resources > Glossary > Secure LLM Usage) -- 원본 그대로 사용 |

---

## Global Rules

- 아티클형 본문 max-width: 860px (`ds-article-container`)
- body `word-break: keep-all; overflow-wrap: break-word;`
- "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
- eyebrow 사용 금지 (원본의 `<div class="eyebrow">Glossary</div>` 삭제)
- ds-section--light 사용 금지 -- 모든 섹션 배경 white
- 외부 링크(AWS Marketplace) -> `ds-btn ds-btn--secondary ds-btn--sm`
- section id 필수
- 배경 이미지: 이 페이지는 아티클형이므로 screenshot-frame에만 적용 가능 (hero/일반 섹션 배경 이미지 없음)

---

## Section Map

| # | Section | Layout Pattern | 배경 |
|---|---------|---------------|------|
| 1 | Hero | [A] Hero text-only (article variant) | white |
| 2 | Screenshot Frame | ds-article-screenshot-frame | ds-bg--paint-blue |
| 3 | Definition | [Q] Banner (ds-banner--brand) | white |
| 4 | Explanation | Article body paragraphs | white |
| 5 | Example | ds-card (example box) | white |
| 6 | Related Terms + Related Pages | ds-btn links + ds-card--dark grid | white |
| 7 | CTA Band | [K] ds-cta-band | var(--ds-gradient-brand) |
| 8 | Footer | ds-footer | white |

---

## Section 1: Hero (article variant)

**id:** `section-hero`
**class:** `ds-section ds-section--hero`
**container:** `ds-article-container`

### Structure
1. **Breadcrumb** -- `ds-breadcrumb`
   - Home `/` Resources `/` Glossary `/` Secure LLM Usage (current)
   - 링크: `ds-breadcrumb__link`, 구분자: `ds-breadcrumb__sep`, 현재: `ds-breadcrumb__current`

2. **Title** -- `ds-article-hero__title`
   - 텍스트: "Secure LLM Usage"
   - 강조 키워드: "Secure" -> `ds-text--brand`

3. **Description** -- `ds-article-hero__description`
   - 텍스트: "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by <span class="ds-text--product">LLM Capsule</span>."
   - (원본 meta description 기반, hero 요약문으로 활용)

### Notes
- eyebrow 삭제 (원본 "Glossary" eyebrow 제거)
- 배경 이미지 없음 (Hero text-only)
- padding-top: 100px 고정

---

## Section 2: Screenshot Frame

**id:** `section-2`
**class:** `ds-section--article-body`
**container:** `ds-article-container`

### Structure
- `ds-article-screenshot-frame ds-bg--paint-blue`
  - `ds-article-screenshot` (inner white box)
    - `ds-article-screenshot__label`: "Secure LLM Usage -- Sensitive enterprise data encapsulated before reaching any LLM, results restored locally"

### Notes
- 배경 이미지: `var(--ds-bg-img-paint-blue)` -- screenshot-frame 컴포넌트에만 적용
- fallback 배경색: `var(--ds-color-neutral-050)`
- 모바일: `@media (max-width: 767px) { background-image: none; }`
- restoration-b-type.html과 동일 구조 그대로 적용

---

## Section 3: Definition

**id:** `section-3`
**class:** `ds-section--article-body`
**container:** `ds-article-container`

### Structure
- `ds-banner ds-banner--brand`
  - `ds-banner__label`: "DEFINITION"
  - `<p>`: 원문 그대로 --
    "Secure LLM usage is the practice of using large language models for enterprise tasks -- summarization, extraction, classification, translation -- without exposing original sensitive data to the AI provider. <span class="ds-text--product">LLM Capsule</span> enables secure LLM usage through its AI enablement data layer: pre-processing encapsulation and post-processing restoration that work across any LLM."

### Notes
- banner 텍스트 가운데 정렬
- "LLM Capsule" -> ds-text--product

---

## Section 4: Explanation

**id:** `section-4`
**class:** `ds-section--article-body`
**container:** `ds-article-container`

### Structure

1. **Section Header** -- `ds-article-section-header`
   - `<h2>`: "<span class="ds-text--brand">Explanation</span>"
   - 강조 키워드: "Explanation" -> `ds-text--brand`
   - center 정렬, border-bottom 구분선

2. **Body Paragraphs** -- `ds-article-body__paragraph`

   **Paragraph 1:**
   "Secure LLM usage is distinct from model-level security measures like prompt filtering or output scanning. Those approaches monitor the interaction with the AI model but do not prevent the data itself from being transmitted. Secure LLM usage operates at the data layer -- transforming what the AI receives so that sensitive information never reaches the model."

   **Paragraph 2:**
   "This approach is model-agnostic. Whether the enterprise uses ChatGPT, Claude, Gemini, Perplexity, or any other LLM API, the AI enablement data layer remains consistent because it operates before the data reaches any model -- enabling cross-model execution from a single AI enablement layer."

### Notes
- 원문 2개 단락 모두 유지
- "LLM Capsule" 미출현이므로 ds-text--product 불필요

---

## Section 5: Example

**id:** `section-5`
**class:** `ds-section--article-body`
**container:** `ds-article-container`

### Structure

1. **Section Header** -- `ds-article-section-header`
   - `<h2>`: "<span class="ds-text--brand">Example</span>"
   - 강조 키워드: "Example" -> `ds-text--brand`

2. **Card** -- `ds-card`
   - `ds-article-body__paragraph`:
     "A legal team uses Claude to analyze contract clauses across 100 vendor agreements. Each agreement contains proprietary pricing, vendor names, and internal project codes. Secure LLM usage means Claude receives structurally intact contracts with protected values -- it can perform clause analysis accurately, but never receives the original vendor names or pricing figures. Outputs are restored locally for the legal team."

### Notes
- 원본 example-box를 ds-card로 변환
- 단일 단락이므로 divider 불필요

---

## Section 6: Related Terms + Related Pages

**id:** `section-6`
**class:** `ds-section--article-body`
**container:** `ds-article-container`

### Structure

1. **Section Header** -- `ds-article-section-header`
   - `<h2>`: "Related <span class="ds-text--brand">Terms</span>"
   - 강조 키워드: "Terms" -> `ds-text--brand`

2. **Related Terms** -- `ds-related-terms` (flex row)
   - `<a href="zero-exposure.html" class="ds-btn ds-btn--secondary ds-btn--sm">Zero Exposure</a>`
   - `<a href="restoration.html" class="ds-btn ds-btn--secondary ds-btn--sm">Restoration</a>`
   - `<a href="restorable-workflow.html" class="ds-btn ds-btn--secondary ds-btn--sm">Restorable Workflow</a>`

3. **Sub-header** -- `ds-section-title-icon`
   - 아이콘: link (Lucide)
   - 텍스트: "Related Pages"

4. **Related Links Grid** -- `ds-card-grid ds-card-grid--2col`
   - 4 x `ds-card--dark` (원본과 동일):
     | 링크 | 아이콘 (Lucide) | 텍스트 |
     |------|-----------------|--------|
     | product.html | package (box) | Product Overview |
     | architecture.html | layers | Architecture |
     | trust.html | shield-check | Trust & Compliance |
     | request-pov.html | arrow-right | Request PoV |

### Notes
- 원본 Related Terms 3개 유지 (Zero Exposure, Restoration, Restorable Workflow)
- Related Links 원본 4개 유지
- restoration-b-type.html과 동일 패턴 적용

---

## Section 7: CTA Band

**id:** `section-cta`
**class:** `ds-cta-band`
**위치:** main 내부, full-width (container 밖)

### Structure
- `ds-cta-band__inner`
  - **Title** -- `ds-cta-band__title`:
    "Enable <span class="ds-text--product">Secure LLM Usage</span> for Your Enterprise"
    - 강조 키워드: 없음 (ds-text--product으로 제품 강조 충분)
  - **Description** -- `ds-cta-band__description`:
    "Process sensitive data through any LLM without exposure. Experience the AI enablement data layer."
  - **Actions** -- `ds-cta-band__actions`:
    - `<a href="request-pov.html" class="ds-btn ds-btn--lg">Request PoV</a>`
    - `<a href="product.html" class="ds-btn ds-btn--lg">View Product</a>`
  - **Footnote** -- `ds-cta-band__footnote`:
    "Enterprise AI Enablement by CUBIG"

### Notes
- 배경: `var(--ds-gradient-brand)` (CTA band fallback gradient)
- 오버레이: `::before` with `var(--ds-overlay-dark-light)`
- CTA title 반응형: mobile 36px / tablet 40px / desktop 50px
- 버튼 스타일: CTA band 내 버튼은 흰색 반투명 배경 (ds-cta-band__actions .ds-btn 참조)

---

## Section 8: Footer

**class:** `ds-footer`

### Structure
- restoration-b-type.html과 동일 구조 복사
- 5열 그리드: Brand / Product / Solutions / Resources / Company
- copyright: "(c) 2025 LLM Capsule by CUBIG. All rights reserved."

---

## CSS Requirements

### Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap" rel="stylesheet">
```

### CSS Structure (restoration-b-type.html 동일)
1. CSS Reset + Global
2. :root -- CSS Variables (Core + Capsule Brand Tokens)
3. Base Typography + Responsive
4. Components (Nav, Section, Container, Button, Section Header, Card, Banner, Icon, CTA Band, Footer)
5. Page-specific (ds-article-container, ds-breadcrumb, ds-article-hero, ds-article-screenshot-frame, ds-article-section-header, ds-article-body__paragraph, ds-related-terms)

### Restoration-specific Styles NOT Needed
- `.ds-example-restored` (success color for restored values) -- 이 페이지에는 해당 없음

### Page-specific Additions
- 없음 -- restoration-b-type.html CSS 그대로 재사용 가능

---

## Checklist

- [ ] eyebrow 삭제 확인 (원본 "Glossary" eyebrow 제거됨)
- [ ] ds-section--light 미사용 확인
- [ ] 모든 섹션 id 부여 확인
- [ ] "LLM Capsule" 모두 ds-text--product 적용 확인
- [ ] 배경 이미지: screenshot-frame에만 ds-bg--paint-blue
- [ ] 모바일 배경 이미지 none 처리 확인
- [ ] CTA gradient: var(--ds-gradient-brand) 확인
- [ ] 원문 콘텐츠 누락 없음 (Definition, Explanation 2단락, Example 1단락, Related Terms 3개, Related Links 4개)
- [ ] 아티클 본문 860px max-width 확인
- [ ] 외부 링크(AWS Marketplace) 버튼형 확인
- [ ] 인라인 style 미사용 확인
- [ ] !important 미사용 확인
- [ ] 하드코딩 색상 미사용 -- 모든 색상 var(--ds-*) 확인
