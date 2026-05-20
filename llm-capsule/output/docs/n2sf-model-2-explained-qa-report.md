# QA Report
- 검증일: 2026-05-11 (Korea Standard Time)
- 대상 파일: llm-capsule/output/html/n2sf-model-2-explained-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_03_model2.html
- 명세서: llm-capsule/output/docs/n2sf-model-2-explained-spec.md
- QA 엔지니어: qa-agent (claude-sonnet-4-6)

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 | Low | L.152–153 | `--ds-overlay-dark-light`, `--ds-overlay-white-85` 변수가 DS(design-system-core.md / design-system-capsule.md)에 정의되지 않은 로컬 커스텀 변수 | B타입 내 `:root`에 직접 정의하여 실제 참조는 정상 동작하나, DS 미정의 변수이므로 Low 결함으로 기록. rgba 값을 직접 인라인 표기하거나 DS에 등재 요청 필요 |
| D-02 | CAT-3 | Low | L.727, 753, 891, 902, 939, 1093, 1119 | `ds-section-title-icon__icon` 내 장식용 SVG에 `aria-hidden="true"` 미부착 | 장식 아이콘이므로 스크린리더에 노출 불필요. 접근성 권장 수준이므로 Low |
| D-03 | CAT-2 | Low | L.462–463 | `btn--invert` 클래스가 `ds-` 접두사 없이 사용됨 | DS capsule.md에서도 동일하게 `btn--invert` (ds- 미적용) 패턴으로 정의되어 있어 규칙 위반은 아니지만, DS 일관성 측면에서 Low 수준 |

---

## 검증 통과 항목

### [CAT-1] 내용 무결성
- h1 제목: 원본과 일치 — "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까"
- h2 섹션 8개 모두 존재 (1~8 + FAQ + 참고 자료 + 관련 글 + CTA)
- TL;DR 원문 전문 포함 — 변경 없음
- 21개 보안위협 모두 포함 (TH-M2-1 ~ TH-M2-21, SVG 도식으로 표현)
- 보안통제 표 13행 완전 일치 (원본 thead 1 + tbody 13 = 14 tr, B타입 동일)
- 7단계 실행 절차 전부 포함 (ol 7개 항목)
- FAQ 4개 질의응답 전부 아코디언으로 구현
- 참고 자료 3건 모두 포함
- 도식 1 (시나리오), 도식 2 (보안위협) 모두 포함
- Hero ↔ 다음 섹션 제목 중복 없음 (Hero는 h1 + description, 섹션 2는 별도 h2)
- section header description과 lead 중복 없음

### [CAT-2] Design System 준수
- CSS 변수 전부 `:root`에 선언됨
- 하드코딩 색상 없음 (SVG fill/stroke 속성 내 `var(--c-*, #hex_fallback)` 패턴 전체 적용)
- SVG 내 `fill="#fff"` (흰색 텍스트) 및 `fill="#fff"` (카드 배경) — SVG 속성에서는 CSS 변수 적용이 제한적이어서 허용 범위
- `!important` 없음
- 인라인 `style` 없음 (CSS 변수 전달 목적 인라인 제거 완료)
- `ds-text--brand` 모든 섹션 헤더 키워드에 적용 완료 (12개소)
- 주황/오렌지 계열 — llm-capsule 브랜드에서 amber(`--c-amber`) 허용, DS 변수만 사용
- `ds-section--light` 사용 없음 (0건)
- eyebrow 없음 (llm-capsule은 허용 브랜드이나 이 아티클 특성상 미사용 — 정상)
- letter-spacing 하드코딩 없음 (DS 변수 `--ds-tracking-tight/wide` 사용)
- `ds-section-header--left` 없음
- 균등 그리드: `repeat(2, minmax(0, 1fr))`, `repeat(3, minmax(0, 1fr))` 올바르게 사용
- `ds-bullet--check` 아이콘 내 HTML 텍스트 삽입 없음 (`<span class="ds-bullet__icon"></span>` 비워짐)
- `overflow-x: auto` 사용 시 `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }` 완비 (L.353–357)
- 원본 SVG 임의 색상(#7ab564, #4a7a3a 등)이 DS 변수(--c-teal-soft, --c-teal 등)로 전환됨
- 배경 이미지 변수 `--ds-bg-img-grad-deep`가 `:root`에 정의되고 참조됨
- `ds-bg--grad-deep` 1회만 사용 (중복 없음)
- CTA band gradient 하드코딩 없음 (var(--ds-bg-img-grad-deep) 사용)
- 섹션 헤더 타이틀 font-size 올바름 (h2 기본 반응형 20/22/24/28px)
- 모바일 배경 이미지 `background-image: none` 처리됨 (`@media (max-width: 767px)` L.505)
- `--ds-overlay-dark-light`, `--ds-overlay-white-85` — DS 미정의이나 로컬 `:root`에 정의 후 사용. 실제 렌더링에는 문제 없으나 D-01로 기록

### [CAT-3] 코드 품질
- 시맨틱 태그: `main`, `section`, `nav`, `figure`, `figcaption`, `h1~h3`, `ol`, `ul`, `table` 적절히 사용
- 모든 `section`에 고유 id 부여 (section-hero, section-tldr, section-lead, section-1 ~ section-8, section-faq, section-references, section-related, section-cta — 15개 섹션)
- HTML 태그 미닫힘/중첩 오류 없음
- 주요 SVG figure에 `role="img"` + `aria-label` 부착 (L.628, L.798)
- `<title>`, `<desc>` 태그 SVG 내 포함
- breadcrumb에 `aria-label="Breadcrumb"` 부착
- 폰트: Inter + JetBrains Mono Google Fonts 로드 (`display=swap` 적용)
- JSON-LD 3종 (BreadcrumbList, FAQPage, Article) 완비
- 장식 아이콘 SVG에 `aria-hidden="true"` 미부착 — D-02로 기록

### [CAT-4] 반응형 검증
- 4단계 breakpoint 모두 존재: 768px, 1024px, 1280px, 1440px
  - 768/1024/1440 필수 3개 + 1280 추가(아티클 1080px 적용)
- mobile 기본 padding: `--ds-container-padding-mobile: 16px` (L.142)
- tablet padding: `--ds-container-padding-tablet: 32px` (L.143)
- desktop padding: `--ds-container-padding-desktop: 120px` (L.144), max-width 1280px (L.185)
- 아티클 본문: `@media (min-width: 1280px) { max-width: 1080px }` (L.196) — 규격 충족
- 모든 ds-card-grid mobile 1열, tablet 2열, desktop 3열
- CTA band 반응형 완비 (80/100/120px padding, 제목 36/40/50px)
- 컨테이너 max-width 1280px (llm-capsule v6.2 규격) 올바름

### 추가 검증 항목
- CTA section이 `<section>` 태그이고 `<main>` 내부에 있음 (L.1326, main 종료 L.1340)
- 내부 링크 Framer 상대경로 형식 준수: `/`, `/resources`, `/resources/learn`, `/resources/learn/what-is-n2sf`, `/resources/learn/public-sector-genai-three-approaches-in-korea`, `/request-a-demo` — `.html` 확장자 없음, 절대 URL 없음
- Framer TSX: `llm-capsule/output/framer/learn/` 폴더는 존재하나 `n2sf-model-2-explained` 전용 TSX 없음 — 동기화 불필요
- `ds-bg--grad-deep` 1페이지 1회 사용 (중복 없음)
- 원본 임의 초록 (#7ab564, #e6f5e1 등) 잔존 0건 — DS teal 계열로 전환 완료
- 원본 임의 amber (#fdf2d8, #d4a850 등) 잔존 0건 — DS amber 계열로 전환 완료
- 섹션 간 배경 섹션이 흰색 유지되고 ds-section--light 미사용

---

## 통계
- 전체 결함 수: 3개
- Critical: 0개
- High: 0개
- Medium: 0개
- Low: 3개

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함 3건만 존재. 모든 Critical/High/Medium 결함 없음.

---

## 다음 액션

CONDITIONAL PASS: 변환 완료.

`llm-capsule/output/html/n2sf-model-2-explained-b-type.html`이 최종 B타입 파일입니다.

### 선택적 개선 권고 (Low 결함)
- **D-01**: `--ds-overlay-dark-light`와 `--ds-overlay-white-85`를 design-system-capsule.md에 공식 등재하거나, 해당 값을 인라인 rgba로 대체
- **D-02**: 장식 아이콘 SVG에 `aria-hidden="true"` 추가 (`ds-section-title-icon__icon` 내 svg 7개)
- **D-03**: `btn--invert` → `ds-btn--invert`로 클래스명 변경 및 DS에 등재 (단, DS capsule.md 동기 변경 필요)
