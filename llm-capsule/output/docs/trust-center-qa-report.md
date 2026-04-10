# QA Report
- 검증일: 2026-04-08
- 대상 파일: llm-capsule/output/html/trust-center-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/trust-center.html
- 명세서: llm-capsule/output/docs/trust-center-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | High | L386 | `.ds-cta-band:not([class*="ds-bg--"])` 규칙에서 `background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` 를 하드코딩 hex로 직접 사용 | `var(--ds-gradient-brand)` 를 사용해야 하며, background shorthand에 하드코딩 색상이 포함됨. :root에 정의된 `--ds-gradient-brand`가 `linear-gradient(130deg, ...)` 임에도 별도로 135도 방향의 동일 색상값을 인라인으로 중복 정의 |
| D-02 | CAT-3 코드 품질 | Medium | L732 | `<section id="section-5">` 에 `ds-section` 클래스가 없음 | CTA band 섹션은 `ds-cta-band`가 패딩을 담당하지만, 나머지 4개 섹션과 달리 `ds-section` 클래스가 없어 구조 불일치. 섹션 클래스 통일성 결여 |

---

## CAT-1 내용 무결성 검증 결과

| 항목 | A타입 원본 | B타입 | 결과 |
|------|-----------|-------|------|
| Hero 제목 | "Security & Compliance Trust Center" | 동일 | PASS |
| Hero 설명 | "Certifications, compliance documentation, and security information..." | 동일 | PASS |
| Cert 항목 4개 | ISO 27001 / ISO 42001 / GS Certification (Grade 1) / AWS Marketplace | 동일 | PASS |
| ISO 27001 설명 | "Information security management system certification..." | 동일 | PASS |
| ISO 42001 설명 | "AI management system certification..." | 동일 | PASS |
| GS Certification 설명 | "Korean government software quality certification. Listed on 조달청 혁신장터..." | 동일 | PASS |
| AWS Marketplace 설명 | "Available on AWS Marketplace for streamlined enterprise procurement..." | 동일 | PASS |
| Data Handling Principles 4개 원칙 | Zero exposure / Local-only mapping / Complete audit trails / Model-agnostic protection | 동일 | PASS |
| For Security Review 섹션 제목 | "Documents and review items for enterprise evaluation" | B타입: "Documents & Review Items for Enterprise Evaluation" (표현 동일, 대소문자 차이만) | PASS |
| Hub 항목 4개 | Architecture Brief / Security Review Package / Deployment Options / Talk to an Architect | 동일 | PASS |
| 각 Hub 항목 설명 | 원본 텍스트 4개 전부 | 동일 | PASS |
| CTA 제목 | "See how LLM Capsule works with your data" | 동일 | PASS |
| CTA 설명 | "Bring your documents, deployment constraints, and evaluation criteria..." | 동일 | PASS |
| CTA 버튼 | "Request PoV" / "Talk to an Architect" / "Download Architecture Brief" / "Available on AWS Marketplace" | 동일 | PASS |
| Footer | Enterprise AI enablement by CUBIG. Enable AI. Protect data. Restore results. | 동일 | PASS |

**CAT-1 판정: PASS** (원본 누락/변경 없음)

---

## CAT-2 DS 준수 검증 결과

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수 :root 선언 | PASS | 모든 토큰 :root에 선언됨 |
| 색상 하드코딩 (style 속성) | PASS | :root 토큰 정의 내부만 사용 |
| CTA band gradient 하드코딩 | FAIL (D-01) | L386: `background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` — `var(--ds-gradient-brand)` 미사용 |
| .ds- 접두사 | PASS | 모든 커스텀 클래스에 적용 |
| !important | PASS | 없음 |
| 인라인 style 속성 | PASS | 없음 |
| ds-text--brand 강조 적용 | PASS | Hero, 섹션 헤더 4곳 모두 적용 |
| 주황/오렌지 계열 색상 | PASS | 없음 |
| background shorthand (이미지 요소) | PASS | 배경 이미지 요소는 background-image 사용 |
| ds-section--light | PASS | 사용 없음 (count=0) |
| eyebrow | PASS | 없음 |
| letter-spacing 하드코딩 | PASS | 없음 (모두 DS 토큰 사용) |
| ds-section-header--left | PASS | 없음 |
| DS에 없는 커스텀 CSS 변수 | PASS | 전부 design-system 정의 변수만 사용 |

**CAT-2 판정: FAIL** (D-01: CTA band background gradient 하드코딩)

---

## CAT-3 코드 품질 검증 결과

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 | PASS | `<main>`, `<nav>`, `<footer>`, `<section>` 사용 |
| 모든 section에 id | CONDITIONAL | section-1~5 모두 id 있음. section-5는 `ds-section` 클래스 누락 (D-02) |
| HTML 유효성 | PASS | 태그 중첩/미닫힘 오류 없음 |
| 이미지 alt/aria-label | PASS | 로고 img에 alt="LLM Capsule", cert wreath 장식 이미지는 `alt=""` (장식성), SVG에 `aria-hidden="true"` |
| 폰트 로드 | PASS | DM Sans, Oxanium Google Fonts 로드 |

**CAT-3 판정: CONDITIONAL PASS** (D-02: section-5 ds-section 클래스 누락, Medium)

---

## CAT-4 반응형 검증 결과

| 항목 | 결과 | 비고 |
|------|------|------|
| 768px breakpoint | PASS | L209, L250, L256, L296, L306 등 다수 |
| 1024px breakpoint | PASS | L210, L251, L257, L287, L307 등 다수 |
| 1440px breakpoint | PASS | L211, L228, L252, L258, L288, L297, L308 등 다수 |
| mobile padding 16px | PASS | `--ds-container-padding-mobile: 16px` |
| tablet padding 32px | PASS | `--ds-container-padding-tablet: 32px` |
| desktop padding 120px | PASS | `--ds-container-padding-desktop: 120px` |
| max-width 1440px | PASS | `.ds-container` 1440px에서 max-width: 1440px |
| ds-grid mobile 1열 | PASS | `.ds-card-grid`: 1fr 기본, `.ds-feature-grid` mobile 1열 |
| Hero padding-top 100px | PASS | `ds-section--hero { padding: 100px 0 ... }` |
| mobile 배경 이미지 제거 | PASS | `@media (max-width: 767px) { .ds-section--bg-img { background-image: none; } }` |

**CAT-4 판정: PASS**

---

## 통계
- 전체 결함 수: 2개
- Critical: 0개
- High: 1개 (D-01)
- Medium: 1개 (D-02)
- Low: 0개

---

## 최종 판정
**FAIL**

D-01 (High): CTA band에서 `background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)` 하드코딩 색상 사용. `var(--ds-gradient-brand)` 로 교체 필요. 또한 shorthand background에 색상값 직접 사용은 DS 규칙 위반.

---

## 수정 지시 사항

### D-01 수정 (L386)
```css
/* 현재 (잘못됨) */
.ds-cta-band:not([class*="ds-bg--"]) { background: linear-gradient(135deg, #1821E8 0%, #5690D4 50%, #55B45D 100%); }

/* 수정 후 */
.ds-cta-band:not([class*="ds-bg--"]) { background: var(--ds-gradient-brand); }
```

### D-02 수정 (L732)
```html
<!-- 현재 (잘못됨) -->
<section id="section-5">

<!-- 수정 후 -->
<section id="section-5" class="ds-section">
```

---

## 다음 액션
[FAIL]: frontend-dev 에이전트에 `llm-capsule/output/docs/trust-center-qa-report.md` 전달 및 수정 요청.
- D-01: L386 CTA band gradient 하드코딩 → `var(--ds-gradient-brand)` 교체
- D-02: L732 section-5에 `ds-section` 클래스 추가
