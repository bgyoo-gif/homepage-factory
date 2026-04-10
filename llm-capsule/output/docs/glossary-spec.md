# Design Spec: glossary (LLM Capsule Glossary)
생성일: 2026-04-08
분석한 원본: llm-capsule/input/LLM_Capsule_Website_Updated_v3/glossary.html
출력 파일: llm-capsule/output/html/glossary-b-type.html
브랜드: llm-capsule
DS: design-system-core.md + design-system-capsule.md

---

## 전체 구조 요약

- 섹션 수: 3개
- 문서 성격: 정보 전달형 (용어 사전 허브 -- 개별 정의 페이지로 링크)
- 브랜드 컬러: `--ds-color-brand-primary: #1821E8` (인디고), `--ds-color-brand-secondary: #5690D4` (블루), `--ds-color-brand-accent: #55B45D` (그린)
- design-system-capsule.md 사용: CSS 변수 별도 `:root` 오버라이드 불필요 -- DS 파일 토큰 그대로 사용
- 특이사항:
  - 페이지 구조가 매우 단순 (Hero + 카드 그리드 + CTA)
  - 6개 용어 카드: 각각 개별 정의 페이지로 링크 (hub-card 형태)
  - 카드에 설명 텍스트 없이 타이틀 + "Read definition" 링크만 존재
  - "LLM Capsule" 제품명 언급 시 `ds-text--product` 적용
  - "Available on AWS Marketplace" -> 외부 링크 버튼형(ds-btn--secondary) 필수

---

## 페이지 레이아웃 흐름 (시각적 리듬)

| # | 섹션 | 배경 | 컴포넌트 패턴 | 리듬 |
|---|------|------|--------------|------|
| 1 | Hero | white | [A] Hero text-only | 텍스트 중심 |
| 2 | Term Cards | white | [G] Card grid 3col | 카드 그리드 |
| 3 | Final CTA | gradient (전폭) | [K] CTA band | 전폭 CTA |

**리듬 검증:** 섹션이 3개뿐이고 흰색 배경 연속 2개(Hero + Cards)이므로 3개 연속 규칙에 해당하지 않음. 배경 이미지 별도 삽입 불필요.

---

## 섹션별 설계

### 섹션 1: Hero

- section id: `section-1`
- 사용 컴포넌트: `ds-hero--text-only` ([A] Hero text-only)
- section 클래스: `ds-section ds-section--hero`
- 배경: white (Hero text-only이므로 배경 이미지 금지)
- 배경 bg-image 적용 위치: 없음

**헤더 구조:**
- eyebrow: 없음 (A타입에 "Glossary" eyebrow 있으나 B타입에서 삭제)
- 타이틀: `Enterprise AI Enablement Glossary`
- 타이틀 강조 키워드: "Enablement" -> `<span class="ds-text--brand">Enablement</span>`
- description: "Key terms and definitions for enterprise AI enablement, LLM data privacy, and secure enterprise AI workflows."
- 제품명: 텍스트 내 "LLM" 단독 키워드가 아닌 일반 용어이므로 `ds-text--product` 적용하지 않음
- 정렬: center

**Breadcrumb:**
- 히어로 상단에 breadcrumb 배치: Home > Resources > Glossary
- 스타일: `ds-body-s`, `ds-color-text-tertiary`, separator "/"
- 링크 색상: `ds-color-brand-secondary`

**반응형:**
- mobile (375px): 타이틀 font-size 24px, description 100%
- tablet (768px): 타이틀 28px
- sm-desktop (1024px): description max-width 720px
- desktop (1440px): 타이틀 36px, description max-width 860px

---

### 섹션 2: Glossary Terms

- section id: `section-2`
- 사용 컴포넌트: `ds-section-header--underline` + `ds-card-grid ds-card-grid--3col`
- section 클래스: `ds-section`
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더:**
- eyebrow: 없음
- 타이틀: 없음 (별도 섹션 헤더 불필요 -- Hero에서 이미 페이지 목적을 설명했으므로 카드 그리드 직접 시작)

**카드 그리드 (ds-card-grid ds-card-grid--3col):**
- 6개 카드, 3열 그리드
- 각 카드: `ds-card` (클릭 가능한 링크 카드)
- 카드 구조:
  - 아이콘: Lucide 인라인 SVG (각 용어에 적합한 아이콘 선택)
  - 타이틀: `ds-card__title ds-card__title--sm`
  - 링크 텍스트: `ds-btn ds-btn--ghost ds-btn--sm` ("Read definition ->")
  - 전체 카드가 `<a>` 태그로 감싸여 클릭 가능

**카드 목록 (원문 순서 유지):**

| # | 용어 | 링크 | 아이콘 (Lucide) |
|---|------|------|----------------|
| 1 | Restoration | restoration.html | refresh-cw |
| 2 | Zero Exposure | zero-exposure.html | eye-off |
| 3 | Enterprise Context Control | enterprise-context-control.html | settings |
| 4 | Structure-Preserving Processing | structure-preserving-processing.html | layers |
| 5 | Restorable Workflow | restorable-workflow.html | workflow |
| 6 | Secure LLM Usage | secure-llm-usage.html | shield-check |

**카드 hover 효과:**
- `border-color: var(--ds-color-border-brand)` (hover 시)
- `box-shadow: var(--ds-shadow-card)` (hover 시)
- `transform: translateY(-2px)` (hover 시)

**반응형:**
- mobile (375px): 1col 스택
- tablet (768px): 2col 그리드
- sm-desktop (1024px): 3col 그리드
- desktop (1440px): 3col 그리드

---

### 섹션 3: Final CTA

- section id: `section-3`
- 사용 컴포넌트: `ds-cta-band` ([K] CTA band)
- section 클래스: 없음 (CTA band는 container 밖 전폭 배치)
- 배경: `var(--ds-gradient-brand)` fallback gradient (배경 이미지 없음 -- 페이지에 배경 이미지 사용 섹션이 없으므로 gradient 사용)
- 배경 bg-image 적용 위치: 컴포넌트 자체 (ds-cta-band 기본 gradient fallback)

**콘텐츠:**
- 타이틀: "See how LLM Capsule works with your data"
  - 타이틀 강조 키워드: 없음 (CTA band 타이틀은 white 텍스트이므로 ds-text--brand 불필요)
  - 제품명: "LLM Capsule" -> `<span class="ds-text--product">LLM Capsule</span>`
- description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
- description 색상: `rgba(255,255,255,0.85)` (ds-cta-band__description 기본값)

**버튼 (ds-cta-band__actions):**
- "Request PoV" -> `ds-btn ds-btn--md` (CTA band 내부 버튼 스타일: white bg, dark text), href: request-pov.html
- "Talk to an Architect" -> `ds-btn ds-btn--md`, href: architecture.html

**하단 보조 링크 (ds-cta-band 하단 footnote 영역):**
- "Download Architecture Brief" -> `ds-btn ds-btn--ghost ds-btn--sm` (white 텍스트), href: downloads.html
- "Available on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` (외부 링크 버튼형, href: https://aws.amazon.com/marketplace, target: _blank)

**타이포 반응형:**
- mobile: 36px
- tablet/sm-desktop: 40px
- desktop (1440px): 50px

**반응형:**
- mobile (375px): 버튼 세로 스택, max-width 320px, padding 80px 16px
- tablet (768px): 버튼 가로 배치, padding 100px 32px
- desktop (1440px): padding 120px 120px, max-width 1440px

---

## 네비게이션

- `ds-nav` 고정 상단 네비게이션
- 로고: `<span class="ds-text--product">LLM Capsule</span>` (Oxanium bold)
- 로고 이미지: `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif`
- 링크 목록: Product, Architecture, Solutions, Trust, Pricing, Resources
- "AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` (외부 링크 버튼형)
- "Request PoV" -> `ds-btn ds-btn--primary ds-btn--sm`
- 모바일: 햄버거 메뉴 (links 숨김)

---

## 푸터

- 원문 footer 구조 그대로 유지
- 5열 그리드: Brand | Product | Solutions | Resources | Company
- Brand 텍스트: `<span class="ds-text--product">LLM Capsule</span>`
- "Enterprise AI enablement by CUBIG. Enable AI. Protect data. Restore results."
- 하단: copyright + "Enterprise AI Enablement"
- 반응형: mobile 1col, tablet 2col

---

## 전역 CSS 규칙

1. 모든 색상: `var(--ds-*)` CSS 변수 사용 (하드코딩 금지)
2. 클래스명: `.ds-` 접두사 + BEM
3. `!important` 금지, 인라인 `style` 금지
4. 반응형 4단계: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
5. 컨테이너: `ds-container` + 반응형 padding (16/32/32/120px) + max-width 1440px
6. body: `word-break: keep-all; overflow-wrap: break-word;`
7. Brand 폰트(Oxanium): "LLM Capsule" 제품명에만 `ds-text--product`
8. 일반 텍스트: `var(--ds-font-base)` (DM Sans)
9. 텍스트 최소 명도: neutral-400 (#9c9c9c) 이상
10. 배경 이미지 중복 금지 (이 페이지에서는 배경 이미지 미사용)
11. ds-section--light 사용 금지
12. eyebrow 사용 금지
13. 주황/오렌지 색상 금지
14. background shorthand 금지 (background-color만 사용, CTA gradient 제외)
15. letter-spacing 하드코딩 금지

---

## 필요 JavaScript

1. **Accordion toggle** -- 이 페이지에서는 불필요
2. **Step tabs** -- 이 페이지에서는 불필요
3. **Scroll reveal** -- `IntersectionObserver` 기반 `.reveal` -> `.visible` 애니메이션 (카드 등장 효과)

---

## JSON-LD (구조화 데이터)

원문의 BreadcrumbList JSON-LD 유지:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/"},
    {"@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources"},
    {"@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary"}
  ]
}
```

---

## 누락 컴포넌트

없음. 기존 DS 컴포넌트로 모두 구현 가능.

---

## 이미지 자원

이 페이지에서 사용하는 외부 이미지:
- 로고: `https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/logo-llmcapsule.avif`
- 배경 이미지: 없음
- 스크린샷: 없음
- 아이콘: Lucide 인라인 SVG (6개)
