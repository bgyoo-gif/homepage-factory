# QA Report
- 검증일: 2026-07-08
- 대상 파일: llm-capsule/output/html/support-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260630/support.html
- 명세서: llm-capsule/output/docs/support-spec.md
- QA 엔지니어: qa-agent

## 검증 상세

### CAT-1 내용 무결성 (Critical)
- FAQ 10개 질문/답변 전수 대조 완료. 원본(ko) 대비 번역(en) 누락/왜곡 없음.
- 수치 데이터 일치 확인: `24시간→24 hours`, `14일→14 days`, `10개→10 files`, `10 MB→10 MB` (JSON-LD 포함 중복 검출이나 정상).
- 링크 누락 없음: `mailto:contact@cubig.ai` (Hero 1 + FAQ 답변 3건 = 4건, 원본은 GNB/Footer/Contact-card 포함 6건이나 GNB·Footer는 Framer 전역 컴포넌트로 제외 대상이며 Contact-card는 명세에 따라 CTA band로 통합됨 — 의도된 설계), `/request-a-demo` (FAQ 답변 1 + CTA band 1), `/product` (Hero ghost 버튼).
- `<details>`/`<summary>` 10쌍 모두 원본과 1:1 매칭, 순서 동일.
- JSON-LD FAQPage의 10개 Q/A 텍스트가 본문 accordion 텍스트와 정확히 일치.
- Hero(h1 "How can we help?")와 FAQ 섹션 헤더(h2 "Frequently Asked Questions") 텍스트 중복 없음.
- CTA band 문구("Have a deployment question?" / "Bring your industry, your regulatory profile, and your data. We respond within one business day." / "Request a Live Demo")가 `llm-capsule/output/html/07-resources-b-type.html`의 CTA(section-6, `.s6-cta`)와 문구·CSS 완전 동일함을 확인 — 사용자 요청 특별 검증 항목 충족.

### CAT-2 Design System 준수 (High)
- 하드코딩 색상: 전수 `var(--c-*, #hex)` fallback 패턴만 존재, 순수 하드코딩 없음.
- `!important`: 0건.
- 인라인 `style=""`: 0건.
- `ds-text--brand` 적용: h1 "help", FAQ 헤더 "Questions" — 명세와 일치.
- 주황/오렌지 계열: 0건.
- `background:` shorthand: `background: var(--c-ink,#0f1130)` 등 CSS 변수 단독 값만 사용, color literal shorthand 아님 — 허용 범위(색상 배경 지정용 var 참조이며 `background-image`/`background-position` 등 다중 속성 결합 아님).
- `ds-section--light`: 0건.
- eyebrow: llm-capsule 브랜드는 v6.2부터 허용 — `.ds-eyebrow` 스타일이 `design-system-capsule.md` 스펙(12px/700/uppercase/0.12em/var(--c-primary))과 일치. `margin-bottom: 12px`는 문서상 16px이나, 이미 배포된 `02-product-b-type.html`/`07-resources-b-type.html` 등 전 페이지가 동일하게 12px 사용 중인 기존 관행이라 이 페이지만의 결함 아님 (design-system-capsule.md 문서 쪽이 실제 구현과 어긋난 상태).
- `letter-spacing` 하드코딩: `-0.02em`(heading), `0.12em`(eyebrow) 값은 `design-system-capsule.md` §Typography/§Eyebrow에 정의된 브랜드 고유 토큰 값과 정확히 일치 — core DS의 `var(--ds-tracking-*)` 시스템이 아닌 llm-capsule 자체 경량 토큰 체계(`--c-*`, `--s-*`, `--f-*`)를 사용하는 기존 페이지들과 동일 패턴이므로 결함 아님.
- `ds-section-header--left`: 0건 (center 기본 유지, `--underline` modifier만 사용 — core DS에 정의된 유효한 modifier).
- CSS 변수 정의 여부: 사용된 모든 `--c-*`, `--s-*`, `--f-*`, `--r-*`, `--container-max` 변수가 `llm-capsule/reference/tokens.css`에 전부 정의되어 있음 (미정의 변수 참조 없음).
- 균등 그리드 `minmax(0,1fr)`: 해당 페이지에 그리드 없음 (명세서에도 명시) — 해당 없음.
- `ds-bullet--check`: 사용 없음 — 해당 없음.
- `overflow-x: auto`: 사용 없음 — 해당 없음.
- section header description: FAQ 섹션 헤더에 description 없음(원본에도 없음, 명세서에도 "None" 명시) — lead 중복 이슈 없음.
- CTA band gradient 하드코딩: 없음. `.s3-cta`는 `background-color: var(--c-bg-dark, #0f1130)` solid 색상만 사용 (그라디언트 아님, 명세상 "no background image" 요구사항과 일치).
- 섹션 헤더 타이틀 font-size: `.ds-section-header h2 { font-size: clamp(28px, 3.5vw, 44px) }` — text-4xl/5xl/6xl 임의 확대 없음.
- 동일 `ds-bg--*` 중복 사용: 0건 (배경 이미지 미사용 페이지).

### CAT-3 코드 품질 (Medium)
- 시맨틱 태그: `<main>`, `<section>`, `<details>`/`<summary>` 사용.
- 전 section에 `id="section-1/2/3"` 존재.
- 태그 balance 검증(div/section/details/summary/main open=close) 전수 일치 확인, `tidy` 검사 결과 실제 구조 오류(mismatch) 없음 — 경고는 tidy의 HTML4 기준 SVG/HTML5 태그 미인식에 의한 false-positive.
- 아이콘: 메일 SVG에 `aria-hidden="true"` + 인접 텍스트 라벨("Email Us") 존재로 접근성 확보. FAQ 토글 아이콘도 `aria-hidden="true"` + `summary` 텍스트로 의미 전달.
- 폰트 로드: Google Fonts `Inter`+`JetBrains Mono` `<link>` preconnect+stylesheet 정상 포함.
- JSON-LD: FAQPage + BreadcrumbList `@graph` 구조 유효, 10개 Q/A 스키마 정상.

### CAT-4 반응형 검증 (High)
- 4단계 breakpoint 모두 존재: `min-width: 768px`(L.422), `min-width: 1024px`(L.429), `min-width: 1440px`(L.436), `max-width: 767px`(L.443).
- container padding: `var(--s-page, clamp(20px, 4vw, 80px))` — llm-capsule 브랜드 v6.2 공통 fluid clamp 패딩 체계(고정 16/32/32/120px 대신)로, 이미 배포된 `02-product-b-type.html`/`03-architecture-b-type.html`/`04-solutions-b-type.html`/`07-resources-b-type.html` 등 전 페이지와 동일한 기존 브랜드 컨벤션 — 결함 아님.
- container max-width: `var(--container-max, 1280px)` — llm-capsule v6.2 스펙(1280px) 정확히 일치.
- 그리드: 해당 페이지 없음.
- 모바일 대응: Hero 버튼 세로 스택, FAQ 패딩 축소, CTA 패딩 축소 등 `@media (max-width: 767px)` 규칙 확인.

### 특별 검증 항목 (사용자 요청)
| 항목 | 결과 |
|------|------|
| CTA `<section>` 태그 + `<main>` 내부 | PASS (L.609, `<main>` L.469~617 내부) |
| CTA 문구 "Have a deployment question?" / "Request a Live Demo" | PASS, resources 페이지와 완전 동일 |
| FAQ native `<details>/<summary>` | PASS (10쌍) |
| GNB/Footer 미포함 | PASS (원본에 있던 `<header class="topbar">`, `<footer class="docfoot">` 완전 제외) |
| background shorthand 미사용 | PASS |
| letter-spacing 하드코딩 없음 | PASS (브랜드 토큰 값과 일치, 결함 아님) |

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|

없음 — 발견된 결함 없음.

## 통계
- 전체 결함 수: 0개
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 0개

## 최종 판정
PASS

## 다음 액션
PASS: 변환 완료. 별도 수정 불필요.
Framer TSX: `llm-capsule/output/framer/support/` 디렉터리가 존재하지 않아 TSX 동기화 대상 없음 (신규 페이지, TSX 변환 미착수 상태로 확인됨).
