# QA Report — Trust Page

- 검증일: 2026-04-08
- 대상 파일: llm-capsule/output/html/trust-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/trust.html
- 명세서: llm-capsule/output/docs/trust-spec.md
- DS: .claude/skills/design-system-core.md + .claude/skills/design-system-capsule.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-3 | Medium | Line 418 | `.ds-banner--info { --ds-banner-bg: rgba(21, 94, 160, 0.06); }` — `:root` 내 CSS 변수 선언 시 직접 rgba 값을 사용. DS에 info 색상 overlay 토큰(예: `--ds-overlay-info-tint`)이 미정의된 상태에서 리터럴 rgba 값 사용. | DS에 info overlay tint 전용 토큰이 없어 rgba를 직접 사용. 변수 선언 내부 값이므로 실사용은 `var(--ds-banner-bg)`를 통해 이루어지지만, DS 원칙에서 모든 색상 값은 `:root` 내에서도 DS 토큰으로 참조해야 함 |
| D-02 | CAT-3 | Low | Line 885 | `<div id="section-7" class="ds-cta-band">` — CTA Band가 `<section>` 태그가 아닌 `<div>` 태그로 구현됨. `<main>` 외부에 위치하는 CTA band 특성상 `<section>` 사용이 더 시맨틱하게 적절. | CTA Band는 `<main>` 외부 full-width 블록으로 구성됨. `<section>`으로 교체 또는 현 `<div>` 유지 가능하나, 시맨틱 HTML 관점에서는 `<section>` 사용 권장 |

---

## 검증 상세

### [CAT-1] 내용 무결성

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — Hero, Certifications, Data Sovereignty, Audit & Compliance, Regulatory, AWS Marketplace, CTA 모두 존재 |
| 본문 텍스트 누락/변경 | PASS — 원본 모든 단락 텍스트 B타입에 보존됨 (gradient card, feature grid, banner로 구조화) |
| 수치/데이터 정확성 | PASS — ISO 27001, ISO 42001, GS Cert Grade 1, 2024 연도 데이터 일치 |
| 목록 항목 수 | PASS — 인증 4개, 기능 카드 4개, 준수 프레임워크 4개(GDPR/HIPAA/SOX/Sector-specific) 일치 |
| 한국어 텍스트 | PASS — "조달청 혁신장터" 원문 그대로 보존 (Line 708) |
| CTA 보조 링크 2개 | PASS — "Download Architecture Brief" + "Available on AWS Marketplace" 모두 보존 (Line 894-896) |

### [CAT-2] Design System 준수

| 항목 | 결과 |
|------|------|
| 색상 하드코딩 | PASS — 모든 hex/rgba 값은 `:root` CSS 변수 정의 내에만 존재. 실제 CSS 프로퍼티에서는 `var(--ds-*)` 참조만 사용 |
| !important | PASS — 0건 |
| 인라인 style 속성 | PASS — 0건 |
| ds-text--brand 적용 | PASS — Section 1(Security), S2(Trust), S3(Sovereignty), S4(Compliance) 4개 모두 적용 (Line 561, 580, 731, 772) |
| 주황/오렌지 색상 | PASS — 0건 |
| background shorthand | PASS — `background: var(--ds-gradient-*)` 사용은 그라디언트 변수 참조로 허용 패턴. `background: white/#fff` 형태 0건 |
| ds-section--light | PASS — 0건 |
| eyebrow | PASS — 0건 |
| letter-spacing 하드코딩 | PASS — 모두 `var(--ds-tracking-*)` 사용 |
| ds-section-header--left | PASS — 0건 |
| DS 미정의 CSS 변수 | CONDITIONAL — `--ds-banner-bg`는 컴포넌트 내부 커스텀 속성으로 DS 토큰이 아닌 로컬 변수. 값 정의 시 rgba 리터럴 사용 (D-01) |
| ds-text--product 적용 | PASS — "LLM Capsule" 인스턴스에 정확히 적용됨 (Line 535, 564, 732, 841, 872, 887) |

### [CAT-3] 코드 품질

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 | CONDITIONAL — `<main>`, `<nav>`, `<footer>`, `<section>` 정상 사용. Section 7 CTA Band가 `<div>` 사용 (D-02) |
| 모든 section에 id | PASS — section-1 ~ section-6 (section 태그), section-7 (div) 모두 id 존재 |
| HTML 유효성 | PASS — 태그 미닫힘, 중첩 오류 없음 |
| 이미지 alt/aria-label | PASS — 장식용 이미지는 `aria-hidden="true"` 처리, cert wreath 이미지 `alt=""` 적용 |
| 폰트 로드 | PASS — DM Sans + Oxanium Google Fonts preconnect + stylesheet 로드 확인 (Line 20-22) |
| word-break 전역 적용 | PASS — body에 `word-break: keep-all; overflow-wrap: break-word;` 적용 (Line 33-35) |

### [CAT-4] 반응형 검증

| 항목 | 결과 |
|------|------|
| 768px breakpoint | PASS — 다수 컴포넌트에 `@media (min-width: 768px)` 적용 |
| 1024px breakpoint | PASS — `@media (min-width: 1024px)` 적용 |
| 1440px breakpoint | PASS — `@media (min-width: 1440px)` 적용 |
| mobile padding 16px | PASS — `--ds-container-padding-mobile: 16px`, ds-container에 적용 (Line 192, 270) |
| tablet padding 32px | PASS — `--ds-container-padding-tablet: 32px` (Line 193, 271) |
| desktop padding 120px | PASS — `--ds-container-padding-desktop: 120px` (Line 194, 273) |
| container max-width 1440px | PASS — `@media (min-width: 1440px) { .ds-container { max-width: 1440px; } }` (Line 273) |
| mobile bg-image none | PASS — `.ds-section--bg-img` 및 `.ds-banner--full[class*="ds-bg--"]` 모두 mobile에서 background-image: none (Line 451-454) |
| CTA band title 반응형 | PASS — 36px(mobile) / 40px(base) / 40px(768) / 50px(1440) — `var(--ds-text-4xl/5xl/6xl)` 사용 |
| 모든 ds-card-grid mobile 1열 | PASS — `.ds-card-grid { grid-template-columns: 1fr; }` 기본값, tablet 이상 다열 전환 (Line 359) |

---

## 통계

- 전체 결함 수: 2개
- Critical: 0개
- High: 0개
- Medium: 1개 (D-01)
- Low: 1개 (D-02)

---

## 최종 판정

**CONDITIONAL PASS**

Low + Medium 결함만 존재. Medium 결함(D-01)은 `:root` 내 `--ds-banner-bg` 변수 정의에서 rgba 리터럴 사용으로, 실제 렌더링에 구조적 문제는 없으나 DS 원칙 준수 관점에서 개선 권장. Low 결함(D-02)은 CTA Band `<div>` 시맨틱 이슈.

## 다음 액션

CONDITIONAL PASS: 변환 완료. `llm-capsule/output/html/trust-b-type.html`이 최종 B타입 파일입니다.

개선 권장 사항 (다음 반복 시 적용):
- D-01: `--ds-banner-bg: rgba(21, 94, 160, 0.06)` → DS에 `--ds-overlay-info-tint` 토큰 추가 후 참조
- D-02: `<div id="section-7" class="ds-cta-band">` → `<section id="section-7" class="ds-cta-band">` 변경 검토
