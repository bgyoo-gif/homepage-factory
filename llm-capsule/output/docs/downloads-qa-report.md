# QA Report
- 검증일: 2026-04-08 (Asia/Seoul)
- 대상 파일: llm-capsule/output/html/downloads-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/downloads.html
- 명세서: llm-capsule/output/docs/downloads-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| QA-01 | CAT-2 DS 준수 | Medium | L89 `:root` | `--ds-shadow-gradient-card: rgba(113,141,176,0.25) 0px 1px 20px 0px` 선언 — DS에 없는 커스텀 변수 | core DS에는 `--ds-shadow-card`, `--ds-shadow-modal`만 정의. `.ds-card--gradient`의 그림자는 인라인 값으로 정의되어 있으며 named token은 없음. 변수명 신설보다 인라인 사용 또는 `--ds-shadow-card` 대체 권고 |
| QA-02 | CAT-2 DS 준수 | Medium | L83–88 `:root` | `--ds-overlay-nav-bg`, `--ds-overlay-dark-medium`, `--ds-overlay-dark-light`, `--ds-overlay-white-85`, `--ds-overlay-white-55`, `--ds-overlay-cta-btn-bdr` 총 6개 overlay 변수 선언 — core DS 및 capsule DS에 미정의 변수 | overlay 값들은 컴포넌트 내에서 `rgba()` 직접 사용 또는 DS에 등재 후 사용해야 함. B타입 내 선언 후 참조 방식이므로 심각도는 낮지만 DS 일관성 위반 |
| QA-03 | CAT-2 DS 준수 | Low | L70 `:root` | `--ds-gradient-dark` 선언됨 (core DS에 정의된 값과 동일 `linear-gradient(180deg, #0f0f0f 0%, #171719 100%)`) — 실제 사용되지 않음 | 미사용 변수 선언. 제거 권고 |
| QA-04 | CAT-3 코드 품질 | Low | L6 `<title>` | `Downloads -- LLM Capsule Documentation` — 원본 A타입의 `—` (em dash) 대신 `--` (double hyphen) 사용 | HTML 변환 과정에서 em dash가 double hyphen으로 변환됨. `&mdash;` 또는 `—` 사용 권고 |
| QA-05 | CAT-3 코드 품질 | Low | L507, L547 카드 description | `--` (double hyphen) 동일 문제. `"encapsulation, trust boundary, restoration, and deployment models."`, `"API reference, configuration, and deployment instructions."` | 원본 A타입 텍스트의 em dash가 이중 하이픈으로 표시됨 |

---

## 상세 검증 결과

### [CAT-1] 내용 무결성

- [x] Hero 제목 "Documentation & Downloads" 존재
- [x] Hero 설명문 정확히 일치
- [x] 3개 카드 (Architecture Brief, Product Overview, Integration Guide) 모두 존재
- [x] 각 카드 설명 텍스트 내용 일치 (em dash 처리 방식 차이는 CAT-3에서 별도 처리)
- [x] "Download PDF (coming soon)" 버튼 레이블 3개 모두 존재
- [x] CTA 섹션 제목 "See how LLM Capsule works with your data" 존재
- [x] CTA 설명 "Bring your documents, deployment constraints, and evaluation criteria..." 존재
- [x] CTA 버튼 "Request PoV", "Talk to an Architect", "Available on AWS Marketplace" 존재
- [x] Footer 콘텐츠 (Product, Solutions, Resources, Company 4개 컬럼) 완전 존재

**CAT-1 판정: PASS**

---

### [CAT-2] Design System 준수

**하드코딩 색상 검사:**
- 모든 색상값은 `:root`의 CSS 변수 선언부에만 존재. 선언부 이외의 property value로 직접 사용 없음.
- [x] 하드코딩 색상 없음

**!important 검사:**
- [x] `!important` 사용 없음

**인라인 style 속성 검사:**
- [x] CSS 변수 전달 목적 외 인라인 style 없음

**ds-text--brand 적용:**
- [x] L467: h1 내 "Downloads" 강조에 `ds-text--brand` 적용
- [x] L484: Section 2 헤더 "Resources" 강조에 `ds-text--brand` 적용

**주황/오렌지 색상:**
- [x] 주황/오렌지 계열 색상 없음

**background shorthand (배경 이미지 요소):**
- `background: var(--ds-gradient-*)` 패턴은 그라디언트 적용을 위한 허용 패턴 (core DS `.ds-cta-band:not([class*="ds-bg--"])` 동일 패턴 사용)
- `background: white`, `background: #fff` 형태 없음
- [x] 위반 없음

**ds-section--light:**
- [x] `ds-section--light` 사용 없음 (grep count: 0)

**eyebrow:**
- [x] `eyebrow` 클래스 없음

**letter-spacing 하드코딩:**
- [x] `letter-spacing: var(--ds-tracking-*)` 토큰만 사용, 하드코딩 없음

**ds-section-header--left:**
- [x] `ds-section-header--left` 없음. 섹션 헤더 center 정렬 유지.

**DS에 없는 커스텀 CSS 변수:**
- `--ds-shadow-gradient-card` (L89): DS 미정의 → **QA-01 결함**
- `--ds-overlay-nav-bg`, `--ds-overlay-dark-medium`, `--ds-overlay-dark-light`, `--ds-overlay-white-85`, `--ds-overlay-white-55`, `--ds-overlay-cta-btn-bdr` (L83–88): DS 미정의 → **QA-02 결함**
- `--ds-gradient-dark` (L70): DS core에 동일 값 정의되어 있으나 B타입에서 재선언, 미사용 → **QA-03 결함**
- 그 외 모든 변수 (`--ds-color-*`, `--ds-gradient-*`, `--ds-space-*`, `--ds-radius-*`, `--ds-font-*` 등): DS 정의 범위 내

**CAT-2 판정: CONDITIONAL PASS** (Medium 2건, Low 1건 — Critical/High 결함 없음)

---

### [CAT-3] 코드 품질

- [x] 시맨틱 태그 사용: `<nav>`, `<main>`, `<section>`, `<header>`, `<article>`, `<footer>` 정상 사용
- [x] 모든 section에 id 존재: section-1, section-2, section-3 (CTA band) 확인
- [x] SVG 아이콘에 `aria-hidden="true"` 적용 (L498, L519, L541)
- [x] nav 이미지에 `alt="LLM Capsule"` 존재
- [x] Google Fonts (DM Sans, Oxanium) 정상 로드
- [x] JSON-LD BreadcrumbList 구조화 데이터 존재 (L18)
- [x] 태그 중첩 오류 없음
- [x] `word-break: keep-all` 전역 적용 (L35–36)
- [ ] `<title>`, 카드 description 내 em dash 처리: `--`(double hyphen) 대신 `—` 사용 필요 → **QA-04, QA-05**
- [x] `<html lang="ko">` 속성 설정

**CAT-3 판정: CONDITIONAL PASS** (Low 결함 2건)

---

### [CAT-4] 반응형 검증

**Breakpoint 존재 여부:**
- [x] `min-width: 768px` 존재 (L218, L252, L258, L310, L320 등 다수)
- [x] `min-width: 1024px` 존재 (L219, L253, L259, L301, L321 등 다수)
- [x] `min-width: 1440px` 존재 (L220, L237, L254, L260, L302 등 다수)

**Container padding:**
- [x] mobile: `var(--ds-container-padding-mobile)` = 16px (L257)
- [x] tablet: `var(--ds-container-padding-tablet)` = 32px (L258)
- [x] desktop: `var(--ds-container-padding-desktop)` = 120px (L260)

**max-width:**
- [x] `max-width: 1440px` at desktop breakpoint (L260)

**Grid 반응형:**
- [x] `ds-card-grid` 기본 1열 (L331)
- [x] 768px: 2열, 1024px: 3열 순차 적용 (L332–333)

**CTA Band:**
- [x] mobile 배경 이미지 none 적용 (L410)
- [x] CTA band 패딩 80px(mobile) → 100px(768px) → 120px(1440px) 정상 (L407–408)

**CAT-4 판정: PASS**

---

## 통계

- 전체 결함 수: 5개
- Critical: 0개
- High: 0개
- Medium: 2개 (QA-01, QA-02)
- Low: 3개 (QA-03, QA-04, QA-05)

---

## 최종 판정

**CONDITIONAL PASS**

Critical/High 결함 없음. Medium 결함 2건 (DS 미정의 커스텀 변수 — 기능상 문제 없으나 DS 일관성 위반), Low 결함 3건 (미사용 변수 1건, em dash 처리 2건).

---

## 다음 액션

**CONDITIONAL PASS**: 변환 완료. `llm-capsule/output/html/downloads-b-type.html`이 최종 B타입 파일입니다.

선택적 개선 사항 (다음 피드백 반영 시):
- QA-01: `--ds-shadow-gradient-card` → `box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px` 인라인 값으로 교체 또는 DS에 공식 토큰 등재
- QA-02: `--ds-overlay-*` 6개 변수 → DS 파일에 공식 등재하거나, 사용 위치에서 DS 기존 토큰으로 교체
- QA-03: 미사용 `--ds-gradient-dark` 변수 선언 제거
- QA-04, QA-05: `--`(double hyphen) → `&mdash;` 또는 `—` 교체
