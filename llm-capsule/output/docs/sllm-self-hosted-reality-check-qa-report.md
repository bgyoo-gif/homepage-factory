# QA Report

- 검증일: 2026-05-11 (오늘)
- 대상 파일: llm-capsule/output/html/sllm-self-hosted-reality-check-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_04_sllm.html
- 명세서: llm-capsule/output/docs/sllm-self-hosted-reality-check-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q-01 | CAT-2 DS 준수 | Low | L589~613, L836 | SVG 도식 내 흰 텍스트 `fill="#fff"` 하드코딩 (CSS var() fallback 없음) | 어두운 배경(coral/amber 사각형) 위 흰 글자를 리터럴 `#fff`로 지정. CLAUDE.md `"배경 위 텍스트는 black 또는 white만 사용"` 규칙 내에서 허용되는 패턴이나, DS 원칙(`var()` 사용)에는 미달. SVG fallback 패턴으로 `fill="var(--c-bg, #fff)"` 권장 |

---

## 상세 검증 결과

### [CAT-1] 내용 무결성 — PASS

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — 7개 본문 섹션 + FAQ + 참고자료 + Related 모두 존재 |
| 본문 텍스트 누락/변경 없음 | PASS — 도입부 3단락, 각 소절(1.1~6.5), 클로징 단락 전문 일치 |
| 수치/데이터 정확 일치 | PASS — 8억/4억/28~38억/5년 TCO/MMLU-Pro 수치(68→76→85~88/32→47점 등) 일치 |
| 목록 항목 수 일치 | PASS — 초기 구축비 4항목, 운영비 3항목, 베이스 교체 4항목, 정답 조건 5항목, 체크리스트 7항목, 참고자료 6항목 모두 일치 |
| Hero ↔ 다음 섹션 제목/설명 중복 없음 | PASS — Hero h1은 기사 제목, TL;DR 섹션은 별도 내용. 중복 없음 |
| Section header description ↔ lead 중복 | PASS — 섹션 헤더에 description 없음(아티클 구조). Lead 단락은 독립 내용 |

### [CAT-2] Design System 준수 — CONDITIONAL PASS

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수 :root 선언 | PASS | 모든 `--c-*`, `--ds-*`, `--f-*` 변수 L79~154에 정의 |
| 색상 하드코딩 없음 | CONDITIONAL — Low | SVG 도식 텍스트 `fill="#fff"` 13건 (L589~613, L836) — 어두운 배경 위 흰 글자로 시각적으로 문제없으나 `var(--c-bg, #fff)` 패턴 미사용 |
| `.ds-` 접두사 모든 커스텀 클래스 | PASS | 전체 클래스에 `ds-` 접두사 사용 |
| `!important` 없음 | PASS | 0건 |
| 인라인 style 없음 | PASS | 0건 |
| ds-text--brand 강조 적용 | PASS — 11건 | 각 섹션 h2 키워드 및 Hero h1, CTA 제목에 적용 |
| 주황/오렌지 색상 | PASS | llm-capsule 브랜드에서 amber 허용. `var(--c-amber, #f59e0b)` fallback 포함 정상 사용 |
| background shorthand 없음 | PASS | 0건 |
| ds-section--light 사용 안 함 | PASS | 0건 |
| eyebrow 없음 | N/A (llm-capsule 허용) | eyebrow 미사용. 허용 브랜드에서 사용 안 함 — PASS |
| letter-spacing 하드코딩 없음 | PASS | 모두 `var(--ds-tracking-tight)`, `var(--ds-tracking-wide)` 사용 |
| ds-section-header--left 없음 | PASS | 0건 |
| 모든 CSS 변수 DS 정의 내 | PASS | `--ds-overlay-dark-light`, `--ds-overlay-white-85`, `--ds-bg-img-grad-deep` 모두 :root에 정의됨 |
| 균등 그리드 `minmax(0, 1fr)` 사용 | PASS | L385~386에서 `repeat(2, minmax(0, 1fr))`, `repeat(3, minmax(0, 1fr))` 사용 |
| ds-bullet--check 아이콘 HTML 없음 | PASS | 0건. 모든 `ds-bullet__icon`이 비어있음 |
| overflow-x: auto 시 scrollbar 숨김 | PASS | L336~339: `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }` 함께 존재 |
| CTA band gradient 하드코딩 없음 | PASS | `var(--ds-bg-img-grad-deep)` 사용, hex 직접 지정 없음 |
| 섹션 헤더 타이틀 font-size | PASS | h2 기본 반응형(20/22/24/28px) 사용 |
| ds-bg--* 중복 없음 | PASS | `ds-bg--grad-deep` HTML에서 1회만 사용 (L1232) |

### [CAT-3] 코드 품질 — PASS

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 | PASS — `<main>`, `<section>`, `<header>`, `<nav>`, `<h1>`~`<h3>`, `<figure>`, `<figcaption>` 사용 |
| 모든 section에 id 있음 | PASS — 14개 섹션 모두 id 존재 (section-hero, section-tldr, section-lead, section-1~7, section-faq, section-references, section-related, section-cta) |
| HTML 유효성 (태그 미닫힘, 중첩 오류) | PASS — 구조 점검상 이상 없음 |
| SVG/figure에 aria-label/title 있음 | PASS — L577, L747에 `role="img"` + `aria-label` + `<title>` + `<desc>` |
| 폰트 실제 로드 | PASS — Google Fonts Inter + JetBrains Mono preconnect 포함 정상 로드 |
| CTA section 태그 + main 내부 | PASS — `<section id="section-cta">` L1232, `</main>` L1246 |
| FAQ 아코디언 | PASS — 4개 질문 모두 `ds-ac-card` 구조, toggleAcCard JS 정상 |
| JSON-LD 구조화 데이터 | PASS — Article + BreadcrumbList + FAQPage 3개 스키마 정의됨 |
| 내부 링크 Framer 상대경로 | PASS — `/`, `/resources`, `/resources/learn`, `/resources/learn/public-sector-genai-three-approaches-in-korea`, `/resources/learn/n2sf-model-2-explained`, `/request-a-demo` 모두 상대경로. `.html` 확장자 없음 |
| 절대 URL 사용 (잘못된) | PASS — canonical, og:url, breadcrumb JSON-LD의 llmcapsule.ai URL은 SEO 메타 용도로 적합 |
| TSX 동기화 | N/A — `llm-capsule/output/framer/learn/` 폴더에 sllm-self-hosted-reality-check 미존재. 동기화 불필요 |

### [CAT-4] 반응형 검증 — PASS

| 항목 | 결과 |
|------|------|
| 768px breakpoint | PASS — L160, L183, L194, L385, L451, L470에 존재 |
| 1024px breakpoint | PASS — L161, L184, L195, L386, L435, L473에 존재 |
| 1440px breakpoint | PASS — L162, L185, L436, L452, L459에 존재 |
| 1280px breakpoint (article 전용) | PASS — L196: `@media (min-width: 1280px) { .ds-article-container { max-width: 1080px; } }` |
| mobile(375) padding 16px | PASS — `--ds-container-padding-mobile: 16px` (L142) |
| tablet(768) padding 32px | PASS — `--ds-container-padding-tablet: 32px` (L143) |
| desktop(1440) padding 120px | PASS — `--ds-container-padding-desktop: 120px` (L144) |
| max-width 1280px (llm-capsule) | PASS — L185: `@media (min-width: 1440px) { .ds-container { max-width: 1280px; } }` |
| article body 1080px | PASS — L196: `max-width: 1080px` at 1280px+ |
| mobile ds-grid 1열 | PASS — `.ds-card-grid` 기본 `grid-template-columns: 1fr` (L384) |
| 모바일 배경 이미지 제거 | PASS — L457: `@media (max-width: 767px) { .ds-bg--grad-deep { background-image: none; } }` |

---

## 통계

- 전체 결함 수: 1개
- Critical: 0개
- High: 0개
- Medium: 0개
- Low: 1개 (Q-01: SVG 내 `fill="#fff"` fallback 미사용)

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함 1건만 존재. CAT-1/CAT-2(High)/CAT-3/CAT-4 전 항목 통과.

### Q-01 상세
SVG 도식 두 개(TCO 구조, MMLU-Pro 격차) 내 어두운 색상 사각형 위 흰 텍스트 레이블에 `fill="#fff"` 리터럴 사용. 시각적 렌더링은 정상이며 CLAUDE.md "배경 위 텍스트는 black 또는 white만 사용" 규칙에 부합하는 패턴. 다만 DS 원칙(`var()` 우선) 관점에서 `fill="var(--c-bg, #fff)"` 패턴으로 개선 권장 (Low).

---

## 다음 액션

CONDITIONAL PASS: 변환 완료.
`llm-capsule/output/html/sllm-self-hosted-reality-check-b-type.html`이 최종 B타입 파일입니다.
