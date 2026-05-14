# QA Report
- 검증일: 2026-05-14 (Asia/Seoul)
- 대상 파일: llm-capsule/output/html/public-sector-chatgpt-input-guide-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_10_chatgpt_input_guide.html
- 명세서: llm-capsule/output/docs/public-sector-chatgpt-input-guide-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| F-001 | CAT-2 DS 준수 | Low | L253, L395 | `gap: 12px`, `gap: 24px` 하드코딩 사용 (`.ds-section-title-icon`, `.ds-card-grid`) | DS 스페이싱 토큰(`--ds-space-sm: 12px`, `--ds-space-lg: 24px`)이 존재하나 `var()` 없이 직접 값 기재 |

---

## 통계
- 전체 결함 수: 1개
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 1개

---

## 카테고리별 검증 결과

### [CAT-1] 내용 무결성
- [x] 모든 섹션 제목(1~8번 + TL;DR + 핵심 정리 + FAQ + 참고 자료 + 함께 읽으면 좋은 글 + CTA) 존재 확인
- [x] 원본 본문 텍스트 — 5가지 실무 사례, 3가지 어려움, 수기 마스킹 설명, 자동 가명화 비교 표, 세 가지 옵션 A/B/C, 기관 점검 질문 6개, 핵심 정리 7항목, FAQ 6문답, 참고 자료 3건 — 모두 누락 없이 일치
- [x] 수치/데이터: 나라장터 211건, 16건(약 8%), +300% — 정확히 일치
- [x] 목록 항목 수: 원본 `ul` 구조와 일치 (사례별 체크포인트, 핵심 정리 7개, 점검 질문 6개 등)
- [x] Hero description과 section-1 첫 단락이 다른 내용 — 중복 없음
- [x] TL;DR, 핵심 정리 전문 일치
- [x] CTA 텍스트(차등정보보호 기반 자동 가명화, GS 1등급·ISO 27001·ISO 42001 등) 누락 없음

### [CAT-2] Design System 준수
- [x] CSS 변수가 `:root`에 선언됨 (L70)
- [x] 색상 하드코딩 없음 — `:root` 내 토큰 정의 외 style 블록 전체에서 hex/rgb 직접 사용 없음
- [x] `.ds-` 접두사 사용 일관성 확인
- [x] `!important` 없음
- [x] 인라인 `style` 속성 없음
- [x] `ds-text--brand` 적용 — Hero 제목, 각 섹션 h2 키워드에 적용됨
- [x] 주황/오렌지 색상 — `--c-amber: #f59e0b`가 `:root`에 정의되어 있으나, 실제 사용은 `ds-table__td--grade-s`(S등급 경고 표시)에 한정. llm-capsule 브랜드에서 caution 용도 amber 허용 규칙 준수
- [x] background shorthand 없음
- [x] `ds-section--light` 사용 없음
- [x] eyebrow 없음 (llm-capsule 브랜드에서는 eyebrow 허용이나, 본 아티클 페이지에서는 미사용 — 정상)
- [x] `letter-spacing` 모두 `var(--ds-tracking-tight)` / `var(--ds-tracking-wide)` 토큰 사용
- [x] `ds-section-header--left` 없음
- [x] CSS 변수 — `--ds-*` 사용된 변수 전수 확인: 모두 `:root`에 정의된 것만 사용
- [x] `--ds-bg-img-grad-deep` — `:root`에 절대 URL로 정의됨 (L141)
- [x] 균등 그리드 — `repeat(2, minmax(0, 1fr))`, `repeat(3, minmax(0, 1fr))` 정상 사용
- [x] `ds-bullet--check` 아이콘 — `<span class="ds-bullet__icon"></span>` 비워둠 (CSS `::before` 자동 생성)
- [x] `overflow-x: auto` 사용 시 `scrollbar-width: none` (L302) + `::-webkit-scrollbar { display: none; }` (L305) 동반
- [x] CTA band — `var(--ds-bg-img-grad-deep)` 변수 사용, hex gradient 하드코딩 없음
- [x] `.ds-cta-band__title` font-size — mobile 36px(--ds-text-4xl), 기본 40px(--ds-text-5xl), desktop 50px(--ds-text-6xl) 정확히 적용
- [ ] **F-001**: `gap: 12px`(L253), `gap: 24px`(L395) 하드코딩 — DS 토큰 미사용 (Low)

### [CAT-3] 코드 품질
- [x] 시맨틱 태그: `<main>`, `<section>`, `<nav>` 사용
- [x] 모든 section에 id 있음 (15개 section 모두 확인)
- [x] HTML 유효성: `<!DOCTYPE html>` 선언, `<html lang="ko">`, `</html>` 정상 닫힘
- [x] 이미지 없음 — alt 이슈 해당 없음; SVG 아이콘은 decorative 용도로 aria-hidden 불필요 수준
- [x] 폰트 로드: Google Fonts(Inter, JetBrains Mono) 정상 로드 (L47~49)
- [x] CTA section이 `<section>` 태그이며 `</main>` 내부에 위치함 (section-cta: L1236, </main>: L1250)
- [x] JSON-LD 구조화 데이터 — BreadcrumbList + FAQPage 2개 삽입 (L19~43)

### [CAT-4] 반응형 검증
- [x] 4단계 breakpoint 모두 존재: 768px(L150,164,175,396,462), 1024px(L151,165,176,397,446,484), 1440px(L152,166,447,463,470)
- [x] mobile(375) 기본 padding 16px — `--ds-container-padding-mobile: 16px` (L132)
- [x] tablet(768) padding 32px — `--ds-container-padding-tablet: 32px` (L133)
- [x] desktop(1440) padding 120px — `--ds-container-padding-desktop: 120px` (L134)
- [x] max-width: 1280px — llm-capsule 브랜드 규칙 정상 적용 (L166)
- [x] 모든 ds-card-grid 모바일에서 `minmax(0, 1fr)` 단일 열 (L395)
- [x] 아티클 컨테이너 반응형: 768px→720px, 1024px→860px, 1280px→1080px(아티클 본문 1080px 통일 규칙 준수)
- [x] 모바일 배경 이미지 숨김: `@media (max-width: 767px) { .ds-bg--grad-deep { background-image: none; } }` (L464,468)

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함 1건(gap 하드코딩)만 남은 상태입니다.

---

## 다음 액션

CONDITIONAL PASS: 변환 완료.

`llm-capsule/output/html/public-sector-chatgpt-input-guide-b-type.html`이 최종 B타입 파일입니다.

### 참고 (수정 선택 사항 — Low)
- L253: `gap: 12px` → `gap: var(--ds-space-sm)` 권장
- L395: `gap: 24px` → `gap: var(--ds-space-lg)` 권장
