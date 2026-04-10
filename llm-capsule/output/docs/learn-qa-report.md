# QA Report
- 검증일: 2026-04-08 (Asia/Seoul)
- 대상 파일: llm-capsule/output/html/learn-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/learn.html
- 명세서: llm-capsule/output/docs/learn-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | High | line 334 | `ds-badge--purple` 배경색이 DS spec 불일치. B타입: `var(--ds-overlay-brand-tint-light)`, DS spec(design-system-capsule.md line 71): `var(--ds-color-brand-light)` | design-system-capsule.md의 badge 오버라이드 토큰 미적용. overlay 토큰을 임의 사용 |
| D-02 | CAT-3 코드 품질 | Medium | line 654 | Section 3 CTA Band가 `<section>` 대신 `<div id="section-3">`로 구현. `<main>` 블록 외부에 위치 | 시맨틱 마크업 미준수. CTA band도 페이지 콘텐츠의 일부이므로 `<section>` 태그 사용 권장 |

---

## 검사 항목별 결과

### [CAT-1] 내용 무결성

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — Hero 제목 "Enterprise AI Enablement — Learn", Article Grid 섹션 모두 존재 |
| 본문 텍스트 누락/변경 없음 | PASS — Hero description 일치. A타입 텍스트 완전 보존 |
| 수치/데이터 일치 | PASS — 수치 없음 |
| 목록 항목 수 일치 | PASS — A타입 12개 아티클 카드 모두 존재 (Card 1~12 확인) |

### [CAT-2] Design System 준수

| 항목 | 결과 |
|------|------|
| 하드코딩 색상 없음 | PASS — `:root` 변수 선언부 내 hex 값은 토큰 정의이므로 허용. 본문 CSS에 하드코딩 없음 |
| `!important` 없음 | PASS |
| 인라인 style 속성 없음 | PASS |
| ds-text--brand 강조 적용 | PASS — line 468 (Hero 제목 "Learn"), line 480 (섹션 헤더 "Articles"), line 657 (CTA "works") |
| 주황/오렌지 계열 색상 없음 | PASS |
| background shorthand (흰색 배경) 없음 | PASS — gradient 문맥 `background: var(--ds-gradient-brand)` 사용은 DS core 패턴과 일치, 허용 |
| ds-section--light 없음 | PASS — 사용 없음 (count: 0) |
| eyebrow 없음 | PASS — 사용 없음 |
| letter-spacing 하드코딩 없음 | PASS — 전부 `var(--ds-tracking-*)` 토큰 사용 |
| ds-section-header--left 없음 | PASS |
| ds-badge--purple 배경색 | FAIL — D-01 참조. `var(--ds-overlay-brand-tint-light)` 대신 `var(--ds-color-brand-light)` 사용해야 함 |
| 모든 CSS 변수 DS 정의 내 사용 | PASS — 전체 변수 목록 대조 완료. `--ds-overlay-brand-tint-light`는 Capsule B타입 `:root`에 직접 선언되어 있으므로 정의 외 변수 사용은 아님. 단, DS spec과 값/의도가 다름 |

### [CAT-3] 코드 품질

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 | CONDITIONAL PASS — `<nav>`, `<main>`, `<section>`, `<footer>` 사용됨. Section 3 CTA band가 `<div>` 사용 (D-02) |
| 모든 section에 id 있음 | PASS — id="section-1", id="section-2", id="section-3" 모두 존재 |
| HTML 유효성 | PASS — 태그 중첩 오류, 미닫힘 없음 확인 |
| 이미지/아이콘 alt/aria-label | PASS — 로고 img에 `alt="LLM Capsule"` 적용. nav에 `aria-label="Main navigation"`, breadcrumb에 `aria-label="Breadcrumb"`. SVG 아이콘은 데코레이션 용도 |
| 폰트 로드 | PASS — Google Fonts `DM Sans`, `Oxanium` 올바르게 로드 |

### [CAT-4] 반응형 검증

| 항목 | 결과 |
|------|------|
| 4단계 breakpoint 존재 (768/1024/1440) | PASS — 모든 3개 min-width breakpoint 존재 |
| mobile 기본 padding 16px | PASS — `--ds-container-padding-mobile: 16px` 적용 |
| tablet padding 32px | PASS — `--ds-container-padding-tablet: 32px` 적용 |
| desktop padding 120px | PASS — `--ds-container-padding-desktop: 120px` 적용 |
| max-width 1440px | PASS — line 241: `max-width: 1440px` 적용 |
| ds-card-grid mobile 1열 | PASS — `.ds-card-grid { grid-template-columns: 1fr; }` 기본값 1열 |
| 컨테이너 max-width 1440px | PASS |

---

## 통계
- 전체 결함 수: 2개
- Critical: 0개 / High: 1개 / Medium: 1개 / Low: 0개

---

## 최종 판정

**FAIL**

High 결함 1건(D-01: ds-badge--purple 배경색 DS spec 불일치) 존재로 FAIL 판정.

---

## 결함 수정 가이드

### D-01 수정 (line 334)
```css
/* 현재 (오류) */
.ds-badge--purple { background-color: var(--ds-overlay-brand-tint-light); color: var(--ds-color-brand-secondary); }

/* 수정 후 */
.ds-badge--purple { background-color: var(--ds-color-brand-light); color: var(--ds-color-brand-secondary); }
```

### D-02 수정 (line 654)
```html
<!-- 현재 (오류) -->
<div id="section-3" class="ds-cta-band">

<!-- 수정 후 -->
<section id="section-3" class="ds-cta-band">
```
(닫는 태그도 `</section>`으로 수정, line 669)

---

## 다음 액션

[FAIL]: frontend-dev 에이전트에 learn-qa-report.md 전달 및 수정 요청.
