# Zero Exposure — B-type Design Spec

> brand: llm-capsule
> DS: design-system-core.md + design-system-capsule.md
> template: glossary article (restoration-b-type.html 동일 패턴)
> source: llm-capsule/input/LLM_Capsule_Website_Updated_v3/zero-exposure.html
> output: llm-capsule/output/html/zero-exposure-b-type.html

---

## Page Meta

| 항목 | 값 |
|------|-----|
| title | Zero Exposure — Preventing Data Leakage to External AI Services \| LLM Capsule Glossary |
| description | Zero exposure: original sensitive data never leaves your environment during AI processing. Only encapsulated data crosses the trust boundary. |
| canonical | https://llmcapsule.ai/resources/glossary/zero-exposure |
| og:type | article |
| keywords | enterprise AI enablement, AI-ready data layer, AI adoption enabler, LLM plugin, cross-model execution |
| JSON-LD | BreadcrumbList — Home > Resources > Glossary > Zero Exposure (원본 그대로) |

---

## Global Rules

- eyebrow 전면 금지 (A타입의 `<div class="eyebrow">Glossary</div>` 삭제)
- ds-section--light 사용 금지 — 모든 섹션 배경 white
- 아티클형 본문 max-width: 860px (`ds-article-container`)
- "LLM Capsule" 텍스트 → `<span class="ds-text--product">LLM Capsule</span>`
- 강조 키워드 → `<span class="ds-text--brand">키워드</span>`
- 외부 링크(AWS Marketplace) → `ds-btn ds-btn--secondary ds-btn--sm` 버튼형
- section id 필수 (section-hero, section-2, section-3, ...)
- CSS 변수만 사용 (하드코딩 금지)
- 배경 이미지: hero screenshot frame에만 `ds-bg--paint-blue` 1회 사용

---

## Section Map

| # | Section ID | 컴포넌트 | 원본 섹션 |
|---|-----------|----------|-----------|
| 1 | section-hero | [A] Hero text-only (article variant) | article-hero (breadcrumb + h1) |
| 2 | section-2 | Screenshot placeholder (article frame) | screenshot-placeholder |
| 3 | section-3 | [Q] Banner (ds-banner--brand) | definition-box |
| 4 | section-4 | Article body (section-header + paragraphs) | Explanation h2 |
| 5 | section-5 | Article body (section-header + ds-card) | Example h2 |
| 6 | section-6 | Related Terms + Related Links | Related Terms + internal-links |
| 7 | section-cta | [K] CTA Band | article-cta |

---

## Section 1: Hero (Article Variant)

- **Section ID:** `section-hero`
- **Class:** `ds-section ds-section--hero`
- **Container:** `ds-article-container` (860px)
- **배경:** white (배경 이미지 금지 — Hero text-only)

### 구조

1. **Breadcrumb** (`ds-breadcrumb`)
   - Home `/` Resources `/` Glossary `/` Zero Exposure (current)
   - 링크: `ds-breadcrumb__link` / 구분자: `ds-breadcrumb__sep` / 현재: `ds-breadcrumb__current`

2. **Title** (`ds-article-hero__title`)
   - 텍스트: "Zero Exposure"
   - 강조 키워드: 없음 (단어 자체가 고유 용어)
   - 반응형: 28px → 36px → 44px → 52px

3. **Description** (`ds-article-hero__description`)
   - 텍스트: "Zero exposure means original sensitive enterprise data never leaves the enterprise environment during AI processing. Only encapsulated representations cross the trust boundary to external AI services. A core principle of <span class="ds-text--product">LLM Capsule</span>."
   - 출처: og:description + definition-box에서 핵심 요약

---

## Section 2: Screenshot Placeholder

- **Section ID:** `section-2`
- **Class:** `ds-section--article-body`
- **Container:** `ds-article-container` (860px)

### 구조

1. **Screenshot Frame** (`ds-article-screenshot-frame ds-bg--paint-blue`)
   - 배경: `var(--ds-bg-img-paint-blue)` — frame 레벨에 적용
   - fallback 배경색: `var(--ds-color-neutral-050)`
   - 모바일: `background-image: none`
   - border-radius: `var(--ds-radius-xl) var(--ds-radius-xl) 0 0`

2. **Screenshot Inner** (`ds-article-screenshot`)
   - 배경색: white
   - border-radius: `var(--ds-radius-sm) var(--ds-radius-sm) 0 0`
   - Label (`ds-article-screenshot__label`):
     "Zero Exposure Architecture — Data flow showing original values never leaving the enterprise boundary"

---

## Section 3: Definition

- **Section ID:** `section-3`
- **Class:** `ds-section--article-body`
- **Container:** `ds-article-container` (860px)

### 구조

1. **Banner** (`ds-banner ds-banner--brand`)
   - Label (`ds-banner__label`): "DEFINITION"
   - 본문 (`<p>`):
     "Zero exposure is a core capability of <span class="ds-text--product">LLM Capsule</span>'s AI enablement data layer in which original sensitive enterprise data never leaves the enterprise environment during AI processing. Only encapsulated representations — with sensitive values replaced by structure-preserving tokens — cross the trust boundary to external AI services. Zero exposure is what enables enterprises to adopt AI confidently on their most sensitive data."
   - 강조 키워드: 없음 (원문 그대로 유지)

---

## Section 4: Explanation

- **Section ID:** `section-4`
- **Class:** `ds-section--article-body`
- **Container:** `ds-article-container` (860px)

### 구조

1. **Article Section Header** (`ds-article-section-header`)
   - h2: `<span class="ds-text--brand">Explanation</span>`
   - border-bottom 구분선 포함
   - 정렬: center (mobile: left)

2. **Paragraph 1** (`ds-article-body__paragraph`)
   - "Zero exposure is not the same as encryption or access control. Encrypted data cannot be processed by AI models. Access control restricts who can see data but does not prevent the data itself from leaving the environment."

3. **Paragraph 2** (`ds-article-body__paragraph`)
   - "Zero exposure means the AI provider receives data that is structurally useful but contains no original sensitive values. Even if the AI provider logged, stored, or trained on the received data, no original enterprise information would be exposed."

4. **Paragraph 3** (`ds-article-body__paragraph ds-article-body__paragraph--strong`)
   - "This is achieved through local encapsulation — sensitive values are detected and replaced before data leaves the enterprise boundary. The replacement is structure-preserving, so AI can process the data effectively."
   - strong variant 적용 (font-weight: medium) — 핵심 메시지 강조

---

## Section 5: Example

- **Section ID:** `section-5`
- **Class:** `ds-section--article-body`
- **Container:** `ds-article-container` (860px)

### 구조

1. **Article Section Header** (`ds-article-section-header`)
   - h2: `<span class="ds-text--brand">Example</span>`
   - border-bottom 구분선 포함

2. **Card** (`ds-card`)
   - Paragraph (`ds-article-body__paragraph`):
     "A healthcare organization sends patient records to AI for diagnostic summarization. With zero exposure, the AI provider receives records where patient names are replaced with consistent tokens, medical record numbers are replaced with synthetic identifiers, and dates are shifted — but all clinical relationships remain intact for accurate summarization."
   - 원본 example-box 내용 전문 유지
   - divider 없음 (restoration과 달리 before/after 구조가 아님 — 단일 설명)

---

## Section 6: Related Terms + Related Links

- **Section ID:** `section-6`
- **Class:** `ds-section--article-body`
- **Container:** `ds-article-container` (860px)

### 구조

1. **Article Section Header** (`ds-article-section-header`)
   - h2: "Related <span class="ds-text--brand">Terms</span>"
   - border-bottom 구분선 포함

2. **Related Terms** (`ds-related-terms`)
   - 버튼형 링크 (`ds-btn ds-btn--secondary ds-btn--sm`):
     - "Restoration" → `restoration.html`
     - "Enterprise Context Control" → `enterprise-context-control.html`
     - "Secure LLM Usage" → `secure-llm-usage.html`

3. **Sub-header** (`ds-section-title-icon`)
   - Icon: link icon (Lucide link SVG)
   - Text: "Related Pages"

4. **Related Links Grid** (`ds-card-grid ds-card-grid--2col`)
   - 4개 `ds-card--dark` 카드:

   | 카드 | 아이콘 | 텍스트 | 링크 |
   |------|--------|--------|------|
   | 1 | package (hexagon) | Product Overview | product.html |
   | 2 | layers | Architecture | architecture.html |
   | 3 | shield-check | Trust & Compliance | trust.html |
   | 4 | arrow-right | Request PoV | request-pov.html |

   - 아이콘: Lucide SVG, `ds-icon` class, color: `var(--ds-color-brand-secondary)`

---

## Section 7: CTA Band

- **Section ID:** `section-cta`
- **Class:** `ds-cta-band`
- **배경:** `var(--ds-gradient-brand)` — container 밖 전폭 배치
- **Overlay:** `::before` with `var(--ds-overlay-dark-light)`

### 구조

1. **Inner** (`ds-cta-band__inner`, max-width: 860px at 1440px)

2. **Title** (`ds-cta-band__title`)
   - "See <span class="ds-text--product">LLM Capsule</span> Zero Exposure in Action"
   - 반응형: 36px (mobile) → 40px (tablet) → 50px (desktop)

3. **Description** (`ds-cta-band__description`)
   - "Protect your most sensitive data while enabling full AI capabilities. Zero exposure means zero risk."
   - color: `var(--ds-overlay-white-85)`

4. **Actions** (`ds-cta-band__actions`)
   - Button 1: "Request PoV" → `request-pov.html` (`ds-btn ds-btn--lg`)
   - Button 2: "View Product" → `product.html` (`ds-btn ds-btn--lg`)
   - CTA 버튼 스타일: white 반투명 배경 (restoration-b-type.html과 동일)

5. **Footnote** (`ds-cta-band__footnote`)
   - "Enterprise AI Enablement by CUBIG"
   - color: `var(--ds-overlay-white-70)`

---

## Navigation

restoration-b-type.html과 동일한 Nav 구조 복사:

- Logo: `ds-nav__logo` + `ds-text--product` "LLM Capsule" + logo image
- Links: Product, Architecture, Solutions, Trust, Pricing, Resources
- Actions:
  - "AWS Marketplace" → `ds-btn ds-btn--secondary ds-btn--sm` (외부 링크 버튼형)
  - "Request PoV" → `ds-btn ds-btn--primary ds-btn--sm`

---

## Footer

restoration-b-type.html과 동일한 Footer 구조 복사:

- Brand: "LLM Capsule" (`ds-footer__brand`, Oxanium)
- Desc: "Enterprise AI enablement by CUBIG. Enable AI. Protect data. Restore results."
- 4열: Product / Solutions / Resources / Company
- Bottom: "(c) 2025 LLM Capsule by CUBIG. All rights reserved." | "Enterprise AI Enablement"

---

## CSS Rules Summary

| 규칙 | 적용 |
|------|------|
| 배경 이미지 | `ds-bg--paint-blue` — section-2 screenshot frame에만 1회 |
| 배경 이미지 중복 | 없음 (1회만 사용) |
| eyebrow | 삭제 (원본의 "Glossary" eyebrow 제거) |
| ds-section--light | 사용 안 함 |
| 인라인 style | 사용 안 함 |
| !important | 사용 안 함 |
| 하드코딩 색상 | 사용 안 함 — 모두 CSS 변수 |
| font-brand (Oxanium) | "LLM Capsule" 텍스트에만 `ds-text--product` |
| 본문 max-width | 860px (`ds-article-container`) |
| 모바일 배경 이미지 | `@media (max-width: 767px) { background-image: none }` |
| CTA band gradient | `var(--ds-gradient-brand)` fallback |
| 반응형 breakpoints | 375 / 768 / 1024 / 1440 |
| container padding | 16 / 32 / 32 / 120px |
| content max-width | 1440px |

---

## Implementation Notes

1. **restoration-b-type.html을 기반으로 복사 후 수정** — 동일한 glossary article 템플릿
2. **CSS 전체 복사** — restoration-b-type.html의 `<style>` 블록 그대로 사용 (동일 DS 토큰, 동일 컴포넌트)
3. **변경 포인트만 수정:**
   - meta 태그 (title, description, canonical, og, twitter, JSON-LD)
   - Hero title: "Restoration" → "Zero Exposure"
   - Hero description: zero-exposure 내용으로 교체
   - Breadcrumb current: "Restoration" → "Zero Exposure"
   - Section 3 (Definition): zero-exposure definition 내용
   - Section 4 (Explanation): zero-exposure 설명 3개 paragraph
   - Section 5 (Example): zero-exposure example (단일 paragraph, divider 없음)
   - Section 6 Related Terms: Restoration / Enterprise Context Control / Secure LLM Usage
   - CTA title: "See LLM Capsule Zero Exposure in Action"
   - CTA description: "Protect your most sensitive data while enabling full AI capabilities. Zero exposure means zero risk."
4. **원본에 없는 콘텐츠 창작 금지** — CTA description만 원본 meta description 기반 재구성 허용
5. **원본에 FAQ 없음** — FAQ 섹션 생성하지 않음
6. **원본에 비교 테이블 없음** — 테이블 생성하지 않음
