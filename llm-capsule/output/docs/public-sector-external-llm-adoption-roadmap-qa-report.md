# QA Report
- 검증일: 2026-05-12
- 대상 파일: llm-capsule/output/html/public-sector-external-llm-adoption-roadmap-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_05_roadmap.html
- 명세서: llm-capsule/output/docs/public-sector-external-llm-adoption-roadmap-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| F-01 | CAT-2 DS 준수 | Medium | L738–739, L761–762 | SVG `<text>` 요소 `fill="#fff"` 하드코딩 — CSS 변수 fallback 없음 | 배경 rect가 `var(--c-teal)`/`var(--c-amber)`이고 그 위 텍스트가 `#fff`로만 선언됨. Framer 환경 또는 CSS 변수 미지원 환경에서 `fill="var(--c-bg, #fff)"` 형태로 기술해야 spec 일관성 유지. 단, `#fff`는 흰색(배경 이미지 위 허용색)이므로 Severity는 Medium. |
| F-02 | CAT-1 내용 무결성 | Low | L1498, L1505, L1512 | Related Articles 링크 경로 불일치 — 원본 `/learn/…`, B타입 `/resources/learn/…` | 원본 A타입 HTML의 `<section class="related">` 링크가 `/learn/n2sf-model-2-explained` 형태인데 B타입은 `/resources/learn/…`으로 변환됨. Framer 상대경로 규칙 기준으로는 `/resources/learn/…`이 올바르므로 정책 위반은 아니지만, 원본 내부 링크 값과 다름. 이 경우 B타입이 Framer 경로 규칙을 따른 것이 맞음 → Low로 기록 |

---

## CAT-1 내용 무결성 체크리스트

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 (이 글이 다루는 범위, 오해 1~3, N²SF 5단계, 1~9장, FAQ, 참고자료, Related, CTA) | PASS |
| TL;DR 전문 (5단계, 시나리오 A/B, 4개월/6~8개월, 참고치 경고) | PASS |
| 원본 수치 일치 (2~3주, 5~7주, 3~4주, 7~10주, 4~6주, 4개월, 6~8개월, 6~10개월, 10~14개월, 4~12주, 8~16주, 4~8주, 1~3주) | PASS |
| 목록 항목 수 일치 (준비 6항목, 등급분류 3항목, 모델링 3항목, 시나리오 선택 4항목, 솔루션 평가 6항목, PoC 4항목, 운영체계 5항목, 보호레이어 5항목, 자체위험평가 4항목, 보호강도 4항목, 시나리오 B운영 3항목, 도입단축 5항목) | PASS |
| FAQ 5개 질문/답변 전문 | PASS |
| 참고자료 3건 | PASS |
| 저자/발행일 | PASS |
| 섹션 간 제목/설명 중복 없음 (Hero ↔ 다음 섹션 반복 없음) | PASS |
| section header description과 lead 중복 없음 | PASS |
| Related Articles 3건 존재 | PASS |

---

## CAT-2 DS 준수 체크리스트

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수 :root 선언 | PASS | L82–155 |
| 색상 하드코딩 없음 (본문 HTML) | PASS | |
| SVG CSS 변수 + hex fallback 적용 | **FAIL (F-01)** | L738, 739, 761, 762 `fill="#fff"` — fallback 누락 |
| `.ds-` 접두사 커스텀 클래스 | PASS | |
| `!important` 없음 | PASS | |
| 인라인 `style` 없음 | PASS | |
| `ds-text--brand` 강조 키워드 적용 | PASS | 분기 로드맵, 5단계 절차 등 14곳 |
| 주황/오렌지 계열 — llm-capsule amber 허용 | PASS | `--c-amber` 정상 사용 |
| background shorthand 없음 | PASS | |
| `ds-section--light` 사용 없음 | PASS | count=0 |
| eyebrow — llm-capsule에서 허용 | PASS (미사용) | 아티클형이므로 eyebrow 불필요 |
| letter-spacing 하드코딩 없음 | PASS | `var(--ds-tracking-tight)` 사용 |
| `ds-section-header--left` 없음 | PASS | |
| DS 정의 변수만 사용 | PASS | `--ds-*` 변수 전수 확인, 모두 :root 선언 |
| 균등 그리드 `minmax(0, 1fr)` 사용 | PASS | L444–445 |
| `ds-bullet--check` 아이콘 HTML 없음 | PASS | 모든 `ds-bullet__icon` 비어있음 |
| `overflow-x: auto` scrollbar 숨김 | PASS | L337–341, L394–398 scrollbar-width+webkit 처리 |
| section header description lead 중복 없음 | PASS | |
| 배경 이미지 중복 (`ds-bg--grad-deep`) | PASS | 1회만 사용 |
| 컬러 라인 꾸밈 없음 (border colored) | PASS | |
| 미정의 CSS 변수 참조 없음 | PASS | `--ds-bg-img-grad-deep` :root 선언 확인 |
| CTA band gradient 하드코딩 없음 | PASS | `var(--ds-bg-img-grad-deep)` + `var(--c-bg-dark)` 사용 |
| CTA band `<section>` + `<main>` 내부 | PASS | L1524, main 닫힘 L1538 |

---

## CAT-3 코드 품질 체크리스트

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 사용 | PASS | `<main>`, `<section>`, `<nav>`, `<figure>` |
| 모든 section에 id 존재 | PASS | 16개 section 전체 id 확인 |
| HTML 유효성 | PASS | 태그 중첩 오류 없음 |
| 이미지/SVG에 aria-label 또는 title/desc | PASS | `role="img" aria-label` + `<title>` + `<desc>` |
| 폰트 실제 로드 | PASS | Google Fonts Inter + JetBrains Mono L59–60 |
| FAQ 아코디언 작동 | PASS | JS toggleAcCard + CSS ds-ac-card 구현 |

---

## CAT-4 반응형 검증 체크리스트

| 항목 | 결과 | 비고 |
|------|------|------|
| 768px breakpoint 존재 | PASS | L161, 184, 195, 444, 510, 529 |
| 1024px breakpoint 존재 | PASS | L162, 185, 196, 445, 494, 532 |
| 1440px breakpoint 존재 | PASS | L163, 186, 495, 511, 518 |
| mobile padding 16px | PASS | `var(--ds-container-padding-mobile)` = 16px |
| tablet padding 32px | PASS | `var(--ds-container-padding-tablet)` = 32px |
| desktop padding 120px + max-width 1280px | PASS | L186 |
| article body max-width 1080px | PASS | L197 `@media (min-width: 1280px)` |
| mobile ds-card-grid 1열 | PASS | L443 기본 `grid-template-columns: 1fr` |
| 컨테이너 max-width 1280px (llm-capsule) | PASS | L186, L511 |
| 모바일 배경 이미지 none | PASS | L516 `@media (max-width: 767px) .ds-bg--grad-deep { background-image: none; }` |

---

## 특별 검증: 특수 요청 항목

| 항목 | 결과 | 비고 |
|------|------|------|
| SVG 도식 색상 `var(--c-*, #hex)` fallback | **부분 FAIL** | 거의 모든 SVG 요소에 fallback 적용됨. 예외: L738, 739, 761, 762 `fill="#fff"` (fallback 없음, F-01) |
| FAQ 아코디언 구현 | PASS | 5개 질문 모두 ds-ac-card 컴포넌트로 구현, 첫 항목 ds-ac--open |
| 1280px max-width, 1080px article body | PASS | 정상 |
| 내부 링크 Framer 상대경로 | PASS | `/`, `/resources`, `/resources/learn`, `/request-a-demo`, `/resources/learn/[slug]` — .html 없음, 절대 URL 없음 |
| `ds-bullet--check` 아이콘 HTML 없음 | PASS | 전수 확인. 모든 `ds-bullet__icon` span 비어있음 |
| Framer TSX 존재 여부 | 미존재 | `llm-capsule/output/framer/learn/` 내 roadmap TSX 없음 — 동기화 불필요 |

---

## 통계

- 전체 결함 수: 2개
- Critical: 0개
- High: 0개
- Medium: 1개 (F-01)
- Low: 1개 (F-02)

---

## 최종 판정

**CONDITIONAL PASS**

Medium 결함 F-01(SVG text fill="#fff" fallback 누락)은 흰색 텍스트가 컬러 배경 rect 위에 위치하는 정상 용례이며, CSS 변수 미지원 환경에서도 `#fff`가 그대로 렌더링되어 시각적 문제는 없음. 단, spec의 "SVG 내 `var(--c-*, #hex)` fallback" 원칙 미준수이므로 Medium으로 기록.

F-02(Related 링크 경로 차이)는 B타입이 Framer 상대경로 규칙(`/resources/learn/…`)을 따른 결과로, 원본 A타입(`/learn/…`)과 경로 형식이 다르지만 운영 경로 기준으로는 B타입이 올바름 — Low.

FAIL 트리거 항목(하드코딩 색상, DS 미준수 변수, breakpoint 누락, eyebrow, ds-section--light 등) 모두 해당 없음.

---

## 다음 액션

**CONDITIONAL PASS**: 변환 완료.

선택적 개선 사항 (FAIL 트리거 아님):
- F-01: SVG L738, 739, 761, 762의 `fill="#fff"` → `fill="var(--c-bg, #fff)"` 로 수정하면 완전한 PASS 가능
