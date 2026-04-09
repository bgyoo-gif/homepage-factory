# QA Report
- 검증일: 2026-04-08
- 대상 파일: llm-capsule/output/html/pricing-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/pricing.html
- 명세서: llm-capsule/output/docs/pricing-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | High | L395 | `.ds-cta-band:not([class*="ds-bg--"])` 에 `background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` 하드코딩 hex 사용 | DS 토큰 `var(--ds-gradient-brand)` 를 사용해야 하며, 각도도 130deg vs 135deg 불일치 존재. `background: var(--ds-gradient-brand);` 로 교체 필요 |

---

## 검사 세부 결과

### [CAT-1] 내용 무결성
- [x] 섹션 1(Hero): 제목 "Enterprise Pricing", 설명문 전체 일치
- [x] 섹션 2(Pricing Cards): 3개 플랜(Proof of Value / Enterprise / AWS Marketplace) 모두 존재
  - Proof of Value: 5개 항목 전체 일치
  - Enterprise: 7개 항목 전체 일치 (Unlimited document processing, Full 3+2 capability set, Enterprise context control, Custom deployment model, Admin console & audit, Dedicated architecture support, SLA & enterprise support)
  - AWS Marketplace: 5개 항목 전체 일치
- [x] 섹션 3(CTA): 제목 "See how LLM Capsule works with your data", 설명문, CTA 버튼 2개, footnote 링크 2개 일치
- [x] 수치/데이터 누락 없음 (모든 가격은 "Custom" / "Listed")
- **판정: PASS**

### [CAT-2] Design System 준수

**하드코딩 색상 검사:**
- [x] `:root` CSS 변수 선언부의 hex 값은 토큰 정의이므로 허용
- [FAIL] L395: `.ds-cta-band:not(...)` 선택자에서 `background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` — DS 토큰 미사용 하드코딩 (D-01)
- [x] 나머지 background shorthand(L282, L348~350, L358~359)는 모두 `var(--ds-*)` 참조

**!important 검사:**
- [x] 없음

**인라인 style 속성 검사 (CSS 변수 전달 제외):**
- [x] 없음

**ds-text--brand 적용:**
- [x] L489: h1 내 "Pricing" 키워드에 적용
- [x] L501: Section 2 헤더 "Pricing" 키워드에 적용

**주황/오렌지 색상:**
- [x] 없음

**background shorthand(white/fff):**
- [x] 없음

**ds-section--light 전면 금지:**
- [x] 0건

**eyebrow 전면 금지:**
- [x] 없음

**letter-spacing 하드코딩:**
- [x] 없음 — 모든 letter-spacing이 `var(--ds-tracking-*)` 토큰 사용

**ds-section-header--left 금지:**
- [x] 없음

**DS에 없는 커스텀 CSS 변수:**
- [x] 사용된 모든 `--ds-*` 변수가 design-system-core.md 및 design-system-capsule.md에 정의된 것과 일치
- **판정: FAIL (D-01)**

### [CAT-3] 코드 품질
- [x] 시맨틱 태그: `<nav>`, `<main>`, `<section>`, `<footer>` 사용
- [x] section id 존재: `section-1`, `section-2`, `section-3` 모두 있음
- [x] 이미지 alt: L462 로고 이미지에 `alt="LLM Capsule"` 존재
- [x] SVG 아이콘: `aria-hidden="true"` 처리
- [x] 폰트 로드: Google Fonts DM Sans + Oxanium 정상 로드
- [x] HTML 구조 유효성: 태그 중첩 이상 없음
- **판정: PASS**

### [CAT-4] 반응형 검증
- [x] 768px breakpoint: 존재 (L227, L261, L267, L307, L317, L329, L427 등)
- [x] 1024px breakpoint: 존재 (L228, L262, L268, L298, L318, L330, L405 등)
- [x] 1440px breakpoint: 존재 (L229, L246, L263, L269, L299, L308, L319, L325, L428, L435 등)
- [x] mobile padding 16px: `--ds-container-padding-mobile: 16px` (L198)
- [x] tablet padding 32px: `--ds-container-padding-tablet: 32px` (L199)
- [x] desktop padding 120px: `--ds-container-padding-desktop: 120px` (L201)
- [x] max-width 1440px: L269 container, L428 cta-band 모두 적용
- [x] ds-card-grid mobile 1열: L328 `grid-template-columns: 1fr`
- **판정: PASS**

---

## 통계
- 전체 결함 수: 1개
- Critical: 0개 / High: 1개 / Medium: 0개 / Low: 0개

---

## 최종 판정

**FAIL**

### 사유
D-01 (CAT-2 High): L395에서 `.ds-cta-band:not([class*="ds-bg--"])` 선택자의 배경에 하드코딩된 hex 색상이 포함된 gradient가 직접 선언되어 있음. DS 규칙상 하드코딩 색상은 FAIL 처리 대상.

### 수정 방법
```css
/* 수정 전 (L395) */
.ds-cta-band:not([class*="ds-bg--"]) { background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%); }

/* 수정 후 */
.ds-cta-band:not([class*="ds-bg--"]) { background: var(--ds-gradient-brand); }
```

---

## 다음 액션

**[FAIL]:** frontend-dev 에이전트에 `llm-capsule/output/docs/pricing-qa-report.md` 의 결함 목록을 전달하고 `llm-capsule/output/html/pricing-b-type.html` 수정 요청.

수정 완료 후 QA 재검증 필요.
