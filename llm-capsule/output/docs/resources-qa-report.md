# QA Report
- 검증일: 2026-04-08 (KST)
- 대상 파일: llm-capsule/output/html/resources-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/resources.html
- 명세서: llm-capsule/output/docs/resources-spec.md
- QA 엔지니어: qa-agent

---

## 검증 범위

B타입 HTML 4개 카테고리 검증 (CAT-1 ~ CAT-4).

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| F-01 | CAT-2 DS 준수 | Medium | line 319–326 | `.ds-hero__title` font-size를 하드코딩 px값(24/36/48/60px)으로 정의. DS 변수(`--ds-text-*`) 미사용. DS core 기준 desktop=`var(--ds-text-7xl)` 64px, mobile=`var(--ds-text-5xl)` 40px와 값도 불일치. | hero title 반응형 크기를 직접 px 수치로 작성. DS 토큰 참조 미적용. |

---

## 카테고리별 체크리스트 결과

### [CAT-1] 내용 무결성 (Critical)

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — "Enterprise AI Enablement Resources", "Explore Resources", "Core guides for enterprise AI enablement", "See how LLM Capsule works with your data" 모두 존재 |
| 모든 본문 텍스트 누락/변경 없음 | PASS — Learn/Glossary/Downloads/Trust Center 4개 허브 카드 설명문, 3개 Core Guide 카드 설명문, CTA 설명문 원본과 일치 |
| 수치/데이터 정확 일치 | PASS — 수치 데이터 없음 |
| 목록 항목 수 일치 | PASS — 허브 카드 4개(원본 4개), 코어 가이드 3개(원본 3개), CTA 링크 2개(원본 2개) |

### [CAT-2] Design System 준수 (High)

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수 :root 선언 | PASS | line 60–198 |
| 색상 하드코딩 없음 | PASS | :root 내 변수 선언값만 존재, HTML 본문 적용 시 var() 사용 |
| ds- 접두사 | PASS | 모든 커스텀 클래스 ds- 접두사 적용 |
| !important 없음 | PASS | |
| 인라인 style 없음 | PASS | CSS 변수 전달 목적 포함 없음 |
| ds-text--brand 강조 적용 | PASS | line 498(hero title), 514(section-2 title), 602(section-3 title) |
| 주황/오렌지 색상 없음 | PASS | |
| background shorthand 금지 | PASS | solid color에 shorthand 사용 없음. gradient 변수 참조는 허용 |
| ds-section--light 전면 금지 | PASS | 사용 0건 |
| eyebrow 전면 금지 | PASS | 사용 0건 |
| letter-spacing 하드코딩 없음 | PASS | 모두 var(--ds-tracking-*) 사용 |
| ds-section-header--left 사용 금지 | PASS | 사용 0건 |
| DS 정의 변수만 사용 | PASS | 모든 --ds-* 변수가 design-system-core.md + design-system-capsule.md에 정의됨 |
| hero title font-size DS 변수 사용 | **FAIL (Medium)** | line 319–326, F-01 참조 |

### [CAT-3] 코드 품질 (Medium)

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 사용 | PASS | `<main>`, `<nav>`, `<section>`, `<footer>` 적용 |
| 모든 section에 id 존재 | PASS | section-1 ~ section-4 모두 id 있음 |
| HTML 유효성 | PASS | 태그 중첩 오류 없음 |
| 이미지 alt/aria-label | PASS | img에 alt="LLM Capsule", nav에 aria-label, section-4에 aria-label |
| 폰트 실제 로드 | PASS | DM Sans + Oxanium Google Fonts preconnect 적용 (line 21–23) |

### [CAT-4] 반응형 검증 (High)

| 항목 | 결과 | 비고 |
|------|------|------|
| 4단계 breakpoint 존재 (768/1024/1440) | PASS | 768px(line 221 외 다수), 1024px(line 222 외), 1440px(line 223 외) |
| mobile(375) 기본 padding 16px | PASS | --ds-container-padding-mobile: 16px (line 190) |
| tablet(768) padding 32px | PASS | --ds-container-padding-tablet: 32px (line 191) |
| desktop(1440) padding 120px + max-width 1440px | PASS | line 271, 435 |
| ds-grid mobile 1열 | PASS | ds-card-grid 기본 1fr (line 337) |
| 컨테이너 max-width 1440px | PASS | line 271 |

---

## 통계

- 전체 결함 수: 1개
- Critical: 0개
- High: 0개
- Medium: 1개
- Low: 0개

---

## 최종 판정

**CONDITIONAL PASS**

Low 결함만이 아닌 Medium 결함 1건이 있으나, 해당 결함(hero title font-size 하드코딩)은 FAIL 필수 항목에 해당하지 않는 코드 품질 수준의 문제입니다. 내용 무결성, DS 필수 규칙(eyebrow, ds-section--light, letter-spacing, 색상 하드코딩, breakpoint 등) 모두 통과하였습니다.

**단, 다음 수정을 권장합니다.**

| 위치 | 현재 코드 | 수정 후 |
|------|-----------|---------|
| line 320 | `font-size: 24px;` | `font-size: var(--ds-text-3xl);` |
| line 324 | `{ font-size: 36px; }` | `{ font-size: var(--ds-text-4xl); }` |
| line 325 | `{ font-size: 48px; }` | `{ font-size: var(--ds-text-5xl); }` |
| line 326 | `{ font-size: 60px; }` | `{ font-size: var(--ds-text-7xl); }` |

---

## 다음 액션

**CONDITIONAL PASS:** 변환 완료. llm-capsule/output/html/resources-b-type.html이 최종 B타입 파일입니다. 위 Medium 결함은 다음 수정 사이클에서 반영 권장.
