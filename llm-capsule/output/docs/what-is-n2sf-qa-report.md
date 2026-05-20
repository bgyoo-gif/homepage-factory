# QA Report
- 검증일: 2026-05-11
- 대상 파일: llm-capsule/output/html/what-is-n2sf-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_02_n2sf.html
- 명세서: llm-capsule/output/docs/what-is-n2sf-spec.md
- QA 엔지니어: qa-agent

---

## 검증 범위

4개 카테고리 전체 (CAT-1 ~ CAT-4) + 특별 검증 항목:
- 원본 한국어 텍스트/수치 누락 여부
- SVG 도식 CSS 변수 hex fallback 포함 여부
- 비교표/FAQ 5개 아코디언
- 1280px max-width
- 내부 링크 Framer 상대경로(.html 0건)
- ds-bullet--check 아이콘 HTML 없음

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | Low | 452번 라인 `.ds-cta-band__description { color: var(--ds-overlay-white-85); }` | `--ds-overlay-white-85` 변수(overlay/배경 레이어 용도)를 텍스트 `color` 속성에 사용. 렌더링 값(`rgba(255,255,255,0.85)`)은 DS core 기준과 동일하나, 변수 명칭이 overlay(배경 반투명 레이어) 목적으로 정의된 것으로 용도 불일치. | DS에 `--ds-overlay-white-85: rgba(255,255,255,0.85)`로 정의되어 있고, DS core의 `.ds-cta-band__description { color: rgba(255,255,255,0.85); }` 와 동일 렌더링이므로 기능 결함은 없음. 변수 명칭 의미론적 misuse. |

---

## 카테고리별 검증 결과

### [CAT-1] 내용 무결성 — PASS

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — 1.왜지금N2SF인가/2.정의와핵심개념/3.C/S/O등급/4.위치-주체-객체모델링/5.보안원칙/6.적용단계/7.가능성과새질문들/FAQ/참고자료/관련글 전부 포함 |
| 모든 본문 텍스트 누락·변경 없음 | PASS — 원본 대비 텍스트 전문 보존 확인. TL;DR·본문 2단락·7개 챕터·callout·takeaways 5항목·FAQ 5개·참고자료 5개·Related 3개·CTA 전부 포함 |
| 수치/데이터 정확성 | PASS — 21개 보안위협, 50여 개 보안통제 항목, 5단계(Prepare/Identify/Select/Implement/Operate), C/S/O 3등급 모두 원본과 일치 |
| 목록 항목 수 일치 | PASS — 3대 구성요소 3개, 5단계 목록 5개, 취할 수 있는 3가지 실무 시작점 3개, 새로운 가능성 3개, 새로운 질문 5개, takeaways 5개, FAQ 5개, 참고자료 5개 |
| 섹션 간 제목/설명 중복 없음 | PASS — Hero h1 제목이 섹션 1~7 헤더와 동일 텍스트 반복 없음 |
| Hero description vs lead 중복 없음 | PASS — Hero desc: "국가 망 보안체계(N2SF)는 망분리에서..." / Lead 첫 문장: "2024년부터 한국 공공부문 보안 정책은..." — 상이함 |

### [CAT-2] Design System 준수 — CONDITIONAL PASS (Low 결함 D-01 1건)

| 항목 | 결과 |
|------|------|
| CSS 변수 :root 선언 | PASS — 모든 브랜드 색상 변수, DS 토큰, 배경 이미지 변수가 :root에 정의됨(81~155번 라인) |
| 색상 하드코딩 없음 | PASS — hex/rgb/rgba 사용은 :root 변수 정의부(83~102번, 153~154번) 및 SVG CSS 변수 fallback(`var(--c-coral, #ef5350)` 형태)에만 사용. body/layout/component CSS에 하드코딩 없음. SVG 내 `fill="#fff"`는 어두운 배경 위 텍스트 필수값으로 CSS 변수 적용 불가한 SVG attribute임 |
| SVG 도식 hex fallback 포함 | PASS — 도식 1·2 모든 fill/stroke 속성에 `var(--c-coral, #ef5350)`, `var(--c-amber, #f59e0b)`, `var(--c-teal, #0ea5a4)`, `var(--c-primary, #5b4fe9)` 등 CSS 변수+hex fallback 형태로 작성 |
| .ds- 접두사 사용 | PASS — 모든 DS 컴포넌트 클래스에 .ds- 접두사 있음 |
| !important 없음 | PASS |
| 인라인 style 없음 | PASS |
| ds-text--brand 강조 적용 | PASS — h1 내 N2SF, 모든 섹션 h2 키워드, CTA band 제목에 적용됨(503·533·563·614·757·886·941·1005·1090·1220번 라인) |
| 주황/오렌지 색상 | PASS — amber(`#f59e0b`) 사용은 llm-capsule 브랜드에서 허용(v6.2). DS capsule에 `--c-amber: #f59e0b` 정의됨. SVG 도식에서 S등급 표현에만 사용 |
| background shorthand 없음 | PASS |
| ds-section--light 없음 | PASS (0건) |
| eyebrow | PASS — llm-capsule 브랜드에서 eyebrow 허용(v6.2). 단, 이 파일에서는 eyebrow 사용 자체가 없음 |
| letter-spacing 하드코딩 없음 | PASS — 모든 letter-spacing은 var(--ds-tracking-tight), var(--ds-tracking-wide) 변수 사용 |
| ds-section-header--left 없음 | PASS |
| 모든 CSS 변수 DS 정의 범위 내 사용 | PASS — --ds-* 변수 41종 모두 :root에 정의됨. 미정의 변수 참조 없음 |
| 균등 그리드 minmax(0, 1fr) 사용 | PASS — ds-card-grid: `minmax(0, 1fr)` 사용(392번 라인) |
| ds-bullet--check 아이콘 HTML 없음 | PASS — 모든 ds-bullet__icon이 비어있음(`<span class="ds-bullet__icon"></span>`) |
| overflow-x: auto scrollbar 숨김 | 해당 없음(overflow-x: auto 미사용) |
| section header description lead 중복 없음 | PASS |
| 동일 ds-bg--* 중복 사용 없음 | PASS — ds-bg--grad-deep 1회만 사용(CTA band) |
| ds-overlay-white-85 텍스트 color 사용 | Low D-01 — 변수 명칭 misuse, 렌더링 값은 DS core와 동일 |

### [CAT-3] 코드 품질 — PASS

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 | PASS — `<main>`, `<section>`, `<nav>`, `<figure>`, `<figcaption>`, `<h1>~<h3>` 적절히 사용 |
| 모든 section에 id | PASS — 14개 section 전부 id="section-*" 있음 |
| HTML 유효성 | PASS — `<section>` 14/14, `<div>` 91/91, `<li>` 37/37 정상. `<li` 패턴 grep 57건은 SVG 내 `<line` 태그 16건이 포함된 것으로 실제 불일치 없음 |
| 이미지/SVG에 alt/aria-label | PASS — `<figure role="img" aria-label="...">`, SVG 내 `<title>`, `<desc>` 포함. `<img>` 태그 없음 |
| 폰트 로드 | PASS — Google Fonts Inter + JetBrains Mono preconnect 및 stylesheet 링크 정상(58~60번 라인) |
| JSON-LD 구조화 데이터 | PASS — BreadcrumbList, FAQPage(5개), Article 3종 JSON-LD 포함(19~55번 라인) |

### [CAT-4] 반응형 검증 — PASS

| 항목 | 결과 |
|------|------|
| 4단계 breakpoint 768/1024/1440 | PASS — 768px: 8건, 1024px: 6건, 1440px: 6건 확인 |
| mobile(375) 기본 padding 16px | PASS — `--ds-container-padding-mobile: 16px`, `.ds-container { padding: 0 var(--ds-container-padding-mobile); }` |
| tablet(768) padding 32px | PASS — `--ds-container-padding-tablet: 32px` |
| desktop(1440) padding 120px + max-width 1280px | PASS — 1440px breakpoint에서 `padding: 0 var(--ds-container-padding-desktop); max-width: 1280px` (186번 라인) |
| mobile에서 ds-grid 1열 | PASS — ds-card-grid 기본 `grid-template-columns: minmax(0, 1fr)` |
| 컨테이너 max-width 1280px | PASS — llm-capsule 브랜드 기준 1280px 적용 |

---

## 특별 검증 항목

| 항목 | 결과 |
|------|------|
| 내부 링크 .html 확장자 0건 | PASS |
| 내부 링크 절대 URL(https://llmcapsule.ai) 0건 | PASS (canonical 메타 제외) |
| 내부 링크 Framer 상대경로 | PASS — `/resources/learn/n2sf-model-2-explained`, `/resources/learn/public-sector-genai-three-approaches-in-korea`, `/request-a-demo` 형태. 원본 A타입의 `/learn/` 경로는 Framer 표준 `/resources/learn/`으로 올바르게 변환됨 |
| SVG 도식 CSS 변수 hex fallback | PASS — 도식 1(C/S/O 등급), 도식 2(위치-주체-객체) 모든 color 속성에 fallback 포함 |
| FAQ 5개 아코디언 | PASS — 5개 ds-ac-card 확인(의무적용/망분리폐지/분류주체/모델해설서/비용) |
| 비교표(table) | 해당 없음 — 원본 A타입에 비교표 없음 |
| 1280px max-width | PASS |
| ds-bullet--check 아이콘 HTML 없음 | PASS |
| TSX 동기화 | 해당 없음 — llm-capsule/output/framer/what-is-n2sf 폴더 없음 |
| CTA 버튼 방식 | PASS — dark section(--c-bg-dark 배경)에서 btn--invert 사용. DS capsule v6.2 "Invert: dark section용" 명시와 일치 |

---

## 통계

- 전체 결함 수: 1개
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 1개

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함(D-01) 1건만 존재. CONDITIONAL PASS 기준 충족.

---

## 다음 액션

CONDITIONAL PASS: 변환 완료.

`llm-capsule/output/html/what-is-n2sf-b-type.html`이 최종 B타입 파일입니다.

### D-01 권고 수정 사항 (Low — 선택적)

452번 라인:
```css
/* 현재 */
.ds-cta-band__description {
  font-size: var(--ds-text-md); color: var(--ds-overlay-white-85);
  ...
}

/* 권고 — DS core 기준값 직접 사용 또는 별도 변수 정의 */
.ds-cta-band__description {
  font-size: var(--ds-text-md); color: rgba(255,255,255,0.85);
  ...
}
```

렌더링 결과는 동일하므로 즉시 수정 필수는 아님.
