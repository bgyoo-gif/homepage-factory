# QA Report

- 검증일: 2026-04-08 (오전)
- 대상 파일: llm-capsule/output/html/request-pov-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/request-pov.html
- 명세서: llm-capsule/output/docs/request-pov-spec.md
- DS: .claude/skills/design-system-core.md + .claude/skills/design-system-capsule.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q-01 | CAT-2 DS 준수 | Low | Line 267 | `.ds-btn--primary { background: var(--ds-gradient-brand); }` — background shorthand 사용 | gradient 값은 background-color로 설정 불가. design-system-capsule.md 자체가 동일 패턴(`.ds-btn--primary { background: var(--ds-gradient-brand); }`)으로 정의하여 DS 정의 준수. 실질 위반 없음. |
| Q-02 | CAT-2 DS 준수 | Low | Line 417 | `.ds-cta-band:not([class*="ds-bg--"]) { background: var(--ds-gradient-brand); }` — background shorthand 사용 | design-system-capsule.md 자체 정의와 동일 패턴. gradient 특성상 background-color 대체 불가. DS 정의 준수 상태. |
| Q-03 | CAT-2 DS 준수 | Low | Line 397 | select 드롭다운 chevron SVG data URI 내 `%23636363` (= #636363) 하드코딩 | data URI 내부에서는 CSS 변수 참조 불가. 값은 DS `--ds-color-neutral-500` (#636363)과 동일하여 의미상 일치. 시각적 영향 없음. |

---

## 검증 상세

### [CAT-1] 내용 무결성

| 항목 | 결과 | 비고 |
|------|------|------|
| Hero h1 "Request a Proof of Value" | PASS | ds-text--brand "Value" 적용 (Line 560) |
| Hero description 전문 | PASS | ds-text--product "LLM Capsule" 적용 (Line 563) |
| eyebrow "Get Started" 제거 | PASS | Hero, CTA 양쪽 모두 미포함 |
| 브레드크럼프 제거 | PASS | Spec 지시에 따라 B타입에서 제거됨 |
| Section header 제목 "What to Expect" | PASS | ds-text--brand "Expect" 적용 (Line 576) |
| Section header description | PASS | "A structured 4-step process from discovery to results..." (Line 577) |
| Step 1 Discovery Call — 제목 + 본문 | PASS | (Lines 588-590) |
| Step 2 Technical Setup — 제목 + 본문 | PASS | ds-text--product "LLM Capsule" 적용 (Lines 594-597) |
| Step 3 Document Testing — 제목 + 본문 | PASS | (Lines 601-604) |
| Step 4 Results Review — 제목 + 본문 | PASS | (Lines 607-611) |
| Callout "Typical PoV duration: 2–4 weeks..." | PASS | (Line 616) |
| 폼 필드 6개 (Name / Work Email / Company / Job Title / Industry / Primary Use Case) | PASS | 레이블, 플레이스홀더 모두 일치 (Lines 624-655) |
| Industry 드롭다운 옵션 7개 | PASS | Financial Services / Public Sector / Healthcare / Legal / Telecom / Insurance / Enterprise / Other 전체 포함 |
| Industry select — disabled selected default | PASS | `<option value="" disabled selected>Select industry</option>` (Line 643) |
| Submit 버튼 "Submit Request" | PASS | (Line 657) |
| 폼 각주 "We respond to all PoV requests within 1 business day." | PASS | (Line 658) |
| CTA 제목 "See how LLM Capsule works with your data" | PASS | ds-text--product 적용 (Line 674) |
| CTA description 전문 | PASS | (Line 675) |
| CTA 버튼 "Request PoV" | PASS | (Line 677) |
| CTA 버튼 "Talk to an Architect" | PASS | (Line 678) |
| CTA 보조 링크 "Download Architecture Brief" | PASS | emoji 제거됨 (Line 681) |
| CTA 보조 링크 "Available on AWS Marketplace" | PASS | emoji 제거됨, external 처리 (Line 682) |

### [CAT-2] Design System 준수

| 항목 | 결과 | 비고 |
|------|------|------|
| 색상 하드코딩 (CSS 규칙 내) | PASS | :root 외부 규칙에 hex 하드코딩 없음 |
| !important | PASS | 0건 |
| 인라인 style 속성 | PASS | 0건 |
| ds-text--brand 적용 (강조 키워드) | PASS | "Value" (Hero h1), "Expect" (Section header) |
| 주황/오렌지 계열 색상 | PASS | 0건 |
| background shorthand (white/solid) | PASS | 화이트/솔리드 색상 shorthand 없음 |
| background shorthand (gradient via var) | Low | Lines 267, 417 — DS 정의와 동일 패턴, gradient 특성상 background-color 불가 |
| ds-section--light | PASS | 0건 |
| eyebrow | PASS | 0건 |
| letter-spacing 하드코딩 | PASS | 모두 var(--ds-tracking-*) 토큰 사용 |
| ds-section-header--left | PASS | 0건 |
| CSS 변수 DS 정의 범위 | PASS | 사용된 모든 --ds-* 변수가 :root에 선언됨 |
| select chevron SVG data URI 색상 | Low | Line 397, %23636363 = DS neutral-500과 동일값, 기술적 한계 |
| ds-text--brand 클래스 정의 | PASS | Line 217: `color: var(--ds-color-brand-secondary)` |
| ds-text--product 클래스 정의 | PASS | Line 218: `font-family: var(--ds-font-brand); font-weight: var(--ds-weight-bold)` |

### [CAT-3] 코드 품질

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 | PASS | nav, main, section, footer, form, ul/li 사용 |
| 모든 section에 id | PASS | section-hero, section-2, section-cta (Lines 556, 572, 671) |
| HTML 유효성 | PASS | 태그 미닫힘, 중첩 오류 없음 |
| 이미지 alt | PASS | 로고 img `alt="LLM Capsule"` (Line 533) |
| aria-label | PASS | nav `role="navigation" aria-label="Main navigation"` (Line 529) |
| aria-hidden on decorative icons | PASS | ds-bullet__icon `aria-hidden="true"` (Lines 586, 593, 600, 607) |
| 폰트 로드 | PASS | Google Fonts: DM Sans (300-700) + Oxanium (700) (Lines 20-22) |
| word-break: keep-all 전역 적용 | PASS | body 및 텍스트 요소 (Lines 34, 43-52) |
| form label-input 연결 (for/id) | PASS | 모든 폼 필드 for/id 쌍 완비 |
| select disabled selected default | PASS | Line 643 |

### [CAT-4] 반응형 검증

| 항목 | 결과 | 비고 |
|------|------|------|
| 768px breakpoint 존재 | PASS | 다수 규칙 (Lines 213, 246, 252, 293, 303, 316, 449, 490) |
| 1024px breakpoint 존재 | PASS | 다수 규칙 (Lines 214, 247, 253, 284, 304, 310) |
| 1440px breakpoint 존재 | PASS | 다수 규칙 (Lines 215, 232, 248, 254, 285, 294, 305, 311, 450, 457) |
| mobile(375) 기본 padding 16px | PASS | --ds-container-padding-mobile: 16px (Line 184) |
| tablet(768) padding 32px | PASS | --ds-container-padding-tablet: 32px (Line 185) |
| desktop(1440) padding 120px | PASS | --ds-container-padding-desktop: 120px (Line 187) |
| max-width 1440px | PASS | `.ds-container` @ 1440px: `max-width: 1440px` (Line 254) |
| ds-grid--2 mobile 1열 | PASS | 기본 grid-template-columns: 1fr, 768px에서 repeat(2, 1fr) (Lines 315-316) |
| ds-pov-grid mobile 1열 | PASS | 기본 1fr, 768px에서 1fr 1fr (Lines 484-492) |
| 모바일 배경 이미지 제거 | PASS | `.ds-cta-band` @ max-width:767px: background-image: none (Line 452) |
| CTA band 타이포 반응형 | PASS | 기본 40px(5xl), mobile 36px(4xl), desktop 50px(6xl) |

---

## 통계

- 전체 결함 수: 3개
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 3개

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함 3건만 존재. 모두 gradient background shorthand(DS 자체 정의와 동일 패턴) 또는 data URI 기술 한계로 인한 것으로, 실질적 시각/기능 영향 없음.

---

## 다음 액션

CONDITIONAL PASS: 변환 완료.

`llm-capsule/output/html/request-pov-b-type.html`이 최종 B타입 파일입니다.
