# Design Spec: resources (LLM Capsule Resources Hub)
생성일: 2026-04-08
분석한 원본: llm-capsule/input/LLM_Capsule_Website_Updated_v3/resources.html
출력 파일: llm-capsule/output/html/resources-b-type.html
브랜드: llm-capsule
DS: design-system-core.md + design-system-capsule.md

---

## 전체 구조 요약

- 섹션 수: 4개
- 문서 성격: 네비게이션 허브 (리소스 카테고리 안내 + 핵심 가이드 추천 + CTA)
- 브랜드 컬러: `--ds-color-brand-primary: #1821E8` (인디고), `--ds-color-brand-secondary: #5690D4` (블루), `--ds-color-brand-accent: #55B45D` (그린)
- design-system-capsule.md 토큰 그대로 사용
- 특이사항:
  - 페이지가 비교적 짧음 (Hero + 허브 카드 4개 + 핵심 가이드 카드 3개 + CTA)
  - 외부 링크 "AWS Marketplace" -> `ds-btn ds-btn--secondary` 버튼형
  - 모든 카드는 내부 페이지 링크 (href 유지)
  - "LLM Capsule" 제품명 -> `ds-text--product` 적용

---

## 페이지 레이아웃 흐름 (시각적 리듬)

| # | 섹션 | 배경 | 컴포넌트 패턴 | 리듬 |
|---|------|------|--------------|------|
| 1 | Hero | white | [A] Hero text-only | 텍스트 히어로 |
| 2 | Resource Hub | white | [G] Card grid 4col (gradient cards) | 카드 그리드 |
| 3 | Core Guides | bg-image | [G] Card grid 3col | 카드 그리드 (배경이미지로 리듬 변화) |
| 4 | Final CTA | -- (전폭) | [K] CTA band | 전폭 CTA |

**리듬 검증:** 4개 섹션으로 짧은 페이지. 섹션 1~2가 white 배경 연속이므로 섹션 3에 배경 이미지 삽입하여 시각적 리듬 확보. ds-grid--1 연속 없음.

---

## 배경 이미지 할당

| 섹션 | 배경 이미지 | 적용 위치 |
|------|------------|-----------|
| 1 Hero | 없음 (Hero text-only -- 배경 이미지 금지) | -- |
| 2 Resource Hub | 없음 | -- |
| 3 Core Guides | `ds-bg--paint-blue` | section 레벨 |
| 4 CTA | `var(--ds-gradient-brand)` fallback | CTA band 자체 |

**배경 이미지 중복 검증:** 페이지 내 동일 `ds-bg--*` 2번 사용 없음.

---

## 섹션별 설계

### 섹션 1: Hero (section-1)

- id: `section-1`
- 사용 컴포넌트: `ds-hero--text-only` ([A] Hero text-only)
- 배경: white (배경 이미지 금지)
- 배경 bg-image 적용 위치: 없음

**구조:**
- eyebrow: 없음 (A타입의 "Resources" eyebrow 삭제)
- 타이틀: `Enterprise AI Enablement Resources`
- 타이틀 강조 키워드: "Resources" -> `<span class="ds-text--brand">Resources</span>`
- 제품명: 없음 (타이틀에 제품명 미포함)
- description: "Technical documentation, learning resources, glossary, and downloads for enterprise AI enablement with <span class=\"ds-text--product\">LLM Capsule</span>."

**버튼 (ds-hero__actions):**
- 없음 (A타입에 Hero 버튼 없음)

**반응형:**
- mobile (375px): 텍스트 좌정렬, max-width 100%
- tablet (768px): 텍스트 center 정렬
- sm-desktop (1024px): description max-width 720px
- desktop (1440px): description max-width 860px

---

### 섹션 2: Resource Hub (section-2)

- id: `section-2`
- 사용 컴포넌트: `ds-card-grid--4col` + `ds-card--gradient` ([G] Card grid + [V-2] Gradient card)
- 배경: white
- 배경 bg-image 적용 위치: 없음

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음
- 타이틀: `Explore <span class="ds-text--brand">Resources</span>`
- 타이틀 강조 키워드: "Resources" -> `ds-text--brand`
- description: "Browse documentation, learning materials, key terms, and trust information."
- 정렬: center

**카드 4개 (ds-card-grid ds-card-grid--4col):**

각 카드는 `ds-card--gradient` 변형 사용. 링크 카드(`<a>` 래핑).

| # | 타이틀 | 설명 (원문 그대로) | Gradient 변형 | Lucide 아이콘 | href |
|---|--------|-------------------|---------------|---------------|------|
| 1 | Learn | In-depth articles on enterprise AI enablement, secure LLM usage, structure-preserving processing, and restorable workflows. | `ds-card--gradient-indigo` | `book-open` | learn.html |
| 2 | Glossary | Definitions of key concepts -- restoration, zero exposure, enterprise context control, and structure-preserving processing. | `ds-card--gradient-blue` | `book-text` | glossary.html |
| 3 | Downloads | Architecture briefs, technical documentation, and deployment guides for enterprise evaluation. | `ds-card--gradient-green` | `download` | downloads.html |
| 4 | Trust Center | Security certifications, compliance documentation, and audit information. | `ds-card--gradient-silver` | `shield-check` | trust-center.html |

**카드 내부 구조 (각 카드):**
```
ds-card ds-card--gradient ds-card--gradient-{variant}
  ds-card--gradient__inner
    ds-card__icon (Lucide SVG 인라인, ds-icon--lg, 28px)
    ds-card__title--sm (카드 타이틀)
    ds-card__description (설명 텍스트)
    ds-card__button
      ds-btn ds-btn--ghost ds-btn--sm ("Browse [카테고리] ->" 텍스트)
```

**반응형:**
- mobile (375px): 1col 스택
- tablet (768px): 2col
- sm-desktop (1024px): 4col
- desktop (1440px): 4col

---

### 섹션 3: Core Guides -- Start Here (section-3)

- id: `section-3`
- 사용 컴포넌트: `ds-card-grid--3col` + `ds-card` ([G] Card grid 3col)
- 배경: 배경 이미지 `ds-bg--paint-blue` (section 레벨)
- 배경 bg-image 적용 위치: section 요소에 클래스로 적용

**배경 이미지 위 오버레이:**
- `ds-section` 에 `ds-bg--paint-blue` 클래스 적용
- 섹션 내부 텍스트: 배경 이미지 위이므로 흰색/검은색만 사용
- 섹션 헤더 타이틀/description: `color: #000` (검은색)

**섹션 헤더 (ds-section-header ds-section-header--underline):**
- eyebrow: 없음 (A타입의 "Start Here" eyebrow 삭제)
- 타이틀: `Core guides for enterprise AI <span class="ds-text--brand">enablement</span>`
- 타이틀 강조 키워드: "enablement" -> `ds-text--brand`
- description: "Start with the documents that explain the operating model, the failure of redaction-based approaches, and the architecture behind usable AI outputs."
- 정렬: center
- 구분선 border-bottom 색상: 배경 이미지 위이므로 `border-color: rgba(0,0,0,0.15)` 적용 (CSS 변수 오버라이드)

**카드 3개 (ds-card-grid ds-card-grid--3col):**

각 카드는 기본 `ds-card` (흰색 배경, 보더). 배경 이미지 위에 놓이므로 카드 자체는 white surface.

| # | Lucide 아이콘 | 타이틀 | 설명 (원문 그대로) | href |
|---|---------------|--------|-------------------|------|
| 1 | `compass` | Secure Enterprise AI Data Workflows | The end-to-end operating model for protecting sensitive data across AI workflows while restoring usable outputs locally. | secure-enterprise-ai-data-workflows.html |
| 2 | `hexagon` | What Is an AI Data Capsule? | The core concept behind local encapsulation, protected AI processing, and local restoration. | what-is-ai-data-capsule.html |
| 3 | `scissors` | Why Redaction Breaks Enterprise AI Workflows | Why masking and redaction tools fail in AI workflows, and what replaces them in enterprise production settings. | why-redaction-breaks-enterprise-ai-workflows.html |

**카드 내부 구조 (각 카드):**
```
a.ds-card (href 래핑, 클릭 시 이동)
  ds-card__icon (Lucide SVG 인라인)
  ds-card__title--sm (카드 타이틀)
  ds-card__description (설명 텍스트)
  ds-card__button
    span.ds-btn.ds-btn--ghost.ds-btn--sm ("Read guide ->")
```

**반응형:**
- mobile (375px): 1col 스택
- tablet (768px): 2col (3번째 카드 full-width)
- sm-desktop (1024px): 3col
- desktop (1440px): 3col

---

### 섹션 4: Final CTA (section-4)

- id: `section-4`
- 사용 컴포넌트: `ds-cta-band` ([K] CTA band)
- 배경: `var(--ds-gradient-brand)` fallback (배경 이미지 클래스 없으므로 gradient fallback 적용)
- 배경 bg-image 적용 위치: CTA band 컴포넌트 자체
- container 밖 전폭 배치

**CTA 내용:**
- eyebrow: 없음 (A타입의 "Get Started" eyebrow 삭제)
- 타이틀: `See how <span class="ds-text--product">LLM Capsule</span> works with your data`
- 타이틀 색상: white (#ffffff)
- description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows."
- description 색상: `rgba(255,255,255,0.85)`

**버튼 (ds-cta-band__actions):**
- "Request PoV" -> `ds-btn ds-btn--md` (CTA band 내부 스타일: white bg, dark text) (href: request-pov.html)
- "Talk to an Architect" -> `ds-btn ds-btn--md` (href: architecture.html)

**보조 링크 (ds-cta-band__footnote 영역 아래):**
- "Download Architecture Brief" -> `ds-btn ds-btn--secondary ds-btn--sm` (href: downloads.html, 흰색 테두리/투명 배경 변형 -- CTA band 내부이므로 `color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.3)`)
- "Available on AWS Marketplace" -> `ds-btn ds-btn--secondary ds-btn--sm` (외부 링크 버튼형, href: https://aws.amazon.com/marketplace, target: _blank, 동일 스타일)

**보조 링크 구현 방식:**
CTA band actions 아래에 별도 flex row 추가:
```html
<div class="ds-cta-band__secondary" style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin-top:var(--ds-space-md)">
  <a href="downloads.html" class="ds-btn ds-btn--sm" style="color:rgba(255,255,255,0.85);border:1px solid rgba(255,255,255,0.3);background:transparent">Download Architecture Brief</a>
  <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" class="ds-btn ds-btn--sm" style="color:rgba(255,255,255,0.85);border:1px solid rgba(255,255,255,0.3);background:transparent">Available on AWS Marketplace</a>
</div>
```

> 참고: 인라인 style은 CTA band 내부 보조 링크에 한해 허용 (DS에 ds-cta-band__secondary 컴포넌트가 없으므로, 추후 DS 추가 고려). 대안으로 `<style>` 블록에 `.ds-cta-band__secondary .ds-btn` 규칙 정의 권장.

**반응형:**
- mobile (375px): 버튼 세로 스택, 타이틀 36px
- tablet (768px): 버튼 가로 배치, padding 100px
- desktop (1440px): 타이틀 50px, max-width 1440px 중앙 정렬

---

## 글로벌 규칙 체크리스트

- [x] 모든 섹션에 `id="section-N"` 부여
- [x] eyebrow 전면 삭제 (A타입에 있던 "Resources", "Start Here", "Get Started" 모두 제거)
- [x] ds-section--light 사용 없음 (A타입의 section--light -> white 배경으로 변환)
- [x] 배경 이미지 중복 없음 (ds-bg--paint-blue 1회만 사용)
- [x] 외부 링크(AWS Marketplace) 버튼형 처리
- [x] "LLM Capsule" -> `ds-text--product` (Oxanium 폰트)
- [x] 섹션 헤더 center 정렬 기본 (--left 미사용)
- [x] 강조 키워드 `ds-text--brand` 명시
- [x] CTA band gradient fallback: `var(--ds-gradient-brand)`
- [x] 폰트 색상 최소 명도: neutral-400 이상만 사용
- [x] CSS 변수는 DS 정의된 것만 사용
- [x] 원문 내용 임의 수정/축약 없음

---

## 누락 컴포넌트

- `ds-cta-band__secondary`: CTA band 내 보조 링크 row 컴포넌트. 현재 DS에 정의 없음. 인라인 스타일로 임시 구현 후 DS 추가 검토 필요. (섹션 4에서 사용)

---

## 참고: Navigation & Footer

Nav와 Footer는 DS 표준 컴포넌트 사용:
- Nav: `ds-nav` (기존 B타입과 동일 구조)
- Footer: 기존 B타입 footer 구조 재사용
- Nav/Footer의 "AWS Marketplace" 링크도 DS 스타일 적용
