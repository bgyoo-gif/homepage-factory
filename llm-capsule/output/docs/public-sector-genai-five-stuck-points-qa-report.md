# QA Report

- 검증일: 2026-05-12
- 대상 파일: llm-capsule/output/html/public-sector-genai-five-stuck-points-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_06_five_stuck_points.html
- 명세서: llm-capsule/output/docs/public-sector-genai-five-stuck-points-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q-01 | CAT-3 코드 품질 | Medium | L644~L1009 (15개 위치) | 장식용 아이콘 SVG (ds-section-title-icon__icon 내부) 15개에 `aria-hidden="true"` 누락. 스크린리더가 내용 없는 SVG를 읽어 접근성 노이즈 발생. | 각 지점(1~5)의 실제/원인/방향 소제목 아이콘 SVG에 aria-hidden 미적용. |

---

## 통계

- 전체 결함 수: 1개
- Critical: 0개 / High: 0개 / Medium: 1개 / Low: 0개

---

## 카테고리별 검증 결과

### [CAT-1] 내용 무결성 — PASS

- 모든 섹션 제목(지점 1~5, 결론, FAQ, 참고 자료, 관련 글, CTA) 존재 확인
- TL;DR 전문 누락 없음 (L532)
- 인트로 3단락 모두 존재 (L540~L548)
- 지점 1~5 각 소절(실제/원인/방향) 텍스트 완전 일치
- 지점 2 활용 시나리오 목록 4항목 일치
- 지점 3 3가지 대안 항목 일치
- 지점 4 4가지 풀이 방향 일치
- 지점 5 형태 1·2 + 4가지 풀이 일치
- 결론 3단락 일치
- 5가지 막힘 요약 배너 내용 일치
- FAQ 5개 질문·답변 모두 존재 (L1085~L1130)
- 참고 자료 3항목 일치
- 관련 글 3건 제목 일치
- CTA 텍스트 일치
- 수치(8년, 100만 건, 6~12개월, 3개월·6개월 등) 원본 대비 누락/변경 없음
- Hero와 다음 섹션 제목 중복 없음
- section header description — lead 중복 없음

### [CAT-2] Design System 준수 — PASS

- 하드코딩 색상: `:root` 토큰 정의값만 존재. SVG 내 `fill="#fff"` 5건(L598, L606, L613, L620, L627)은 다크(coral) 배경 위 숫자 텍스트 흰색으로, 배경 이미지 위 black/white 규칙 충족 — 허용
- `!important`: 0건
- 인라인 style: 0건
- `ds-text--brand`: 모든 h2 핵심 키워드에 적용 (L519, L640, L752, L845, L901, L973, L1039, L1079, L1201)
- 주황/오렌지: `--c-amber: #f59e0b` (L80) — llm-capsule 브랜드 토큰 정의에 한정, 실제 사용 없음. 허용
- background shorthand: 0건
- ds-section--light: 0건
- eyebrow: 0건 (llm-capsule에서 허용이나 없어도 무방)
- letter-spacing 하드코딩: 0건 (var(--ds-tracking-tight) 사용)
- ds-section-header--left: 0건
- 균등 그리드: `repeat(2, minmax(0, 1fr))`, `repeat(3, minmax(0, 1fr))` 사용 — 정상 (L410~L411)
- ds-bullet--check 아이콘: `<span class="ds-bullet__icon"></span>` 비어있음 — 정상
- overflow-x: auto 없음 — scrollbar 이슈 미해당
- DS 정의 CSS 변수만 사용: 모든 `var(--ds-*)`, `var(--c-*)`, `var(--f-*)` 변수 `:root` 내 선언 확인
- 배경 이미지 변수: `--ds-bg-img-grad-deep` `:root` 정의 후 사용 (L139, L473) — 정상
- ds-bg--grad-deep HTML 실사용: 1회 (CTA band, L1198) — 중복 없음
- CTA band: `var(--ds-bg-img-grad-deep)` CSS 변수 경유 — hex 하드코딩 없음

### [CAT-3] 코드 품질 — CONDITIONAL PASS (Medium 1건)

- 시맨틱 태그: `<main>`, `<section>`, `<nav>`, `<figure>`, `<figcaption>`, `<blockquote>` 올바르게 사용
- 모든 section에 id 존재: `section-hero`~`section-cta` 14개 확인 (L508~L1198)
- HTML 유효성: 태그 미닫힘·중첩 오류 없음
- 도식 SVG: `<title>`, `<desc>`, `role="img"`, `aria-label` 적용 (L555~L558) — 정상
- 폰트 로드: Google Fonts Inter + JetBrains Mono (L46~L48) — 정상
- word-break keep-all body 설정 (L58) — 정상
- **Q-01**: 장식용 아이콘 SVG 15개에 aria-hidden="true" 누락 (Medium)
- FAQ 5개 질문·답변 모두 존재 (accordion 5개 확인, L1083~L1131)

### [CAT-4] 반응형 검증 — PASS

- 4단계 breakpoint: 768px, 1024px, 1440px 모두 존재
- mobile(375) 기본 padding: `var(--ds-container-padding-mobile)` = 16px (L130, L169)
- tablet(768) padding: `var(--ds-container-padding-tablet)` = 32px (L131, L171)
- desktop(1440) padding: `var(--ds-container-padding-desktop)` = 120px + max-width 1280px (L132, L173)
- ds-card-grid mobile 1열: `grid-template-columns: minmax(0, 1fr)` (L409) — 정상
- ds-article-container 반응형: mobile 100% → 768px 720px → 1024px 860px → 1280px 1080px (L182~L184) — 아티클 본문 1080px 기준 충족
- CTA band title 반응형: mobile 36px(text-4xl, L479) → 기본 40px(text-5xl, L463) → desktop 50px(text-6xl, L484) — DS 기준(36/40/50px) 정확히 준수
- CTA band section `<main>` 내부: L1198(CTA 시작) < L1212(`</main>`) — 정상

---

## 최종 판정

**CONDITIONAL PASS**

Medium 결함 1건(장식 SVG aria-hidden 누락)만 존재. 콘텐츠 무결성, DS 준수, 반응형 모두 PASS. CLAUDE.md FAIL 필수 항목 해당 사항 없음.

---

## 다음 액션

CONDITIONAL PASS: 변환 완료. llm-capsule/output/html/public-sector-genai-five-stuck-points-b-type.html이 최종 B타입 파일입니다.

권장 수정(Medium): 15개 장식 SVG(`ds-section-title-icon__icon` 내부)에 `aria-hidden="true"` 추가.
