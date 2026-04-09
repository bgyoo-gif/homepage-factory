# QA Report

- 검증일: 2026-04-08 (오늘)
- 대상 파일: llm-capsule/output/html/index-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/index.html
- 명세서: llm-capsule/output/docs/index-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| F-01 | CAT-2 DS 준수 | High | Line 1061, 1076 | `style="background-color: #0e9f8e;"` — 하드코딩 색상이 인라인 스타일로 사용됨 (ds-ac-card__dot, 3+2 아키텍처 +1/+2 항목) | `#0e9f8e`는 DS에 CSS 변수로 등록된 토큰이 없음. `--ds-color-brand-accent (#55B45D)` 또는 `--ds-color-success (#0e824c)`로 교체해야 함. 인라인 스타일 자체도 금지 규칙 위반 |
| F-02 | CAT-2 DS 준수 | Medium | Line 1314, 1318 | `style="display: flex; gap: var(--ds-space-md);"` 및 `style="flex: 1;"` — 레이아웃용 인라인 스타일 | CSS 변수 전달 목적이 아닌 레이아웃 스타일이 인라인 속성으로 사용됨. DS 규칙에 따라 인라인 style은 CSS 변수 전달 목적 외 금지 |
| F-03 | CAT-2 DS 준수 | Medium | Line 1356 | `style="margin-top: var(--ds-space-xs); color: var(--ds-color-text-secondary);"` — ds-caption 요소에 인라인 스타일 | CSS 변수 전달이더라도 레이아웃/색상 스타일은 클래스로 처리해야 함. 규칙상 CSS 변수 전달 목적 외 인라인 스타일 금지 |
| F-04 | CAT-2 DS 준수 | Low | Line 529, 531 | `.ds-badge--error { background-color: rgba(255,48,48,0.08) }`, `.ds-badge--purple { background-color: rgba(86,144,212,0.08) }` — :root 변수 미선언 rgba 직접 사용 | DS core에 정의된 `.ds-badge--error`는 `rgba(255,48,48,0.12)` 사용. B타입은 0.08 값을 로컬 사용. 이 값은 `:root`에 별도 토큰으로 등록되어 있지 않으므로 `--ds-overlay-*` 토큰 또는 DS와 동일한 값으로 통일 필요 |
| F-05 | CAT-3 코드 품질 | Low | Line 965 | `.ds-banner--full`에 `style="--ds-banner-bg: transparent;"` 인라인 적용 — 목적은 CSS 변수 전달이나 `.ds-banner--grad-sky` 같은 전용 수식어 클래스 사용이 더 적합 | `ds-banner--brand` 패턴처럼 CSS 클래스 내 `--ds-banner-bg` 재정의로 처리 권장 |

---

## 통계

- 전체 결함 수: 5개
- Critical: 0개 / High: 1개 / Medium: 2개 / Low: 2개

---

## 검증 결과 상세

### CAT-1 내용 무결성 (Critical)

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — Section 1~12 모두 확인됨 |
| Hero 본문 텍스트 ("Use any AI on your real documents — without exposing a single line") | PASS |
| Hero 설명 텍스트 (LLM Capsule 작동 원리) | PASS |
| Hero tagline "Encapsulate. Process. Restore." | PASS |
| Trust 섹션 (Deutsche Telekom, IBK, DB 손해보험, Kyobo, Shin&Kim, Claroty, EUMC, Naver Cloud) | PASS |
| KPI 수치 (0.12s / 100% / 98%) | PASS |
| 인증 (ISO 27001 / ISO 42001 / GS Certification) | PASS |
| Section 3 ("Five capabilities that remove every barrier") | PASS |
| Section 4 ("Enabling AI adoption across regulated industries") | PASS |
| Section 5 3+2 Architecture (Zero Exposure / Restoration / Enterprise Context / Structure-Preserving / Cross-Model Execution) 5개 항목 | PASS |
| Section 6 Use Cases (4개 탭: Document Summarization / Claims Processing / Contract Review / Report Generation) | PASS |
| Section 7 Problem 텍스트 및 비교 테이블 (4개 항목) | PASS |
| Section 8 Before/After (6개 항목 each) | PASS |
| Section 9 Architecture Diagram (3컬럼 구조, 4단계 데이터 흐름) | PASS |
| Section 10 성능 지표 (98.1% / 99.14% / 100% / 98%) | PASS |
| Section 11 CTA (Request PoV / Talk to Architect / Download Architecture Brief / AWS Marketplace) | PASS |
| Section 12 FAQ (6개 질문) | PASS |
| AWS Marketplace 버튼형 링크 | PASS — Nav(L773), Hero(L804), Diagram CTA(L1332), CTA band(L1374) 모두 `ds-btn` 클래스 버튼으로 처리됨 |

### CAT-2 Design System 준수 (High)

| 항목 | 결과 |
|------|------|
| 색상 하드코딩 (`:root` 외부) | FAIL — Line 1061, 1076: `#0e9f8e` 인라인 하드코딩 (F-01) |
| `!important` 사용 | PASS — 없음 |
| 인라인 style (CSS 변수 전달 외) | FAIL — Line 1314, 1318, 1356 레이아웃/색상 스타일 인라인 사용 (F-02, F-03) |
| ds-text--brand 강조 키워드 적용 | PASS — 12개 섹션 헤더 전체에 적용됨 |
| 주황/오렌지 계열 색상 | PASS — 없음 |
| background shorthand | PASS — Line 297은 gradient 값이므로 허용 범위. 단순 white/색상 background 없음 |
| ds-section--light | PASS — 0개 |
| eyebrow | PASS — 없음 |
| letter-spacing 하드코딩 | PASS — 없음 (모두 var(--ds-tracking-*) 사용) |
| ds-section-header--left | PASS — 없음 |
| DS에 없는 커스텀 CSS 변수 | PASS — `--ds-banner-bg`는 DS core에 컴포넌트 로컬 변수로 정의됨. 기타 모든 변수 DS 정의 범위 내 |

### CAT-3 코드 품질 (Medium)

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 (`main`, `nav`, `section`, `footer`) | PASS — 모두 사용됨 |
| 모든 section에 id | PASS — section-1 ~ section-12 존재. CTA band는 div#section-11로 main 밖에 위치 (DS 규격 준수) |
| HTML 유효성 | PASS — 구조적 오류 없음 |
| 이미지/아이콘 alt 또는 aria-label | PASS — 이미지 alt 존재. KPI band에 aria-label 적용됨 |
| 폰트 로드 | PASS — DM Sans + Oxanium Google Fonts preconnect 포함 |

### CAT-4 반응형 검증 (High)

| 항목 | 결과 |
|------|------|
| Breakpoint 768px | PASS — Line 237, 276, 282 등 다수 |
| Breakpoint 1024px | PASS — Line 238, 277, 283 등 다수 |
| Breakpoint 1440px | PASS — Line 239, 278, 284 등 다수 |
| mobile(375) 기본 padding 16px | PASS — `--ds-container-padding-mobile: 16px` |
| tablet(768) padding 32px | PASS — `--ds-container-padding-tablet: 32px` |
| desktop(1440) padding 120px + max-width 1440px | PASS — Line 284 |
| 모든 ds-grid mobile 1열 | PASS — `ds-card-grid { grid-template-columns: 1fr }` |
| 모바일 배경 이미지 none | PASS — Line 615~619 `@media (max-width: 767px)` 처리 |
| 컨테이너 max-width 1440px | PASS — Line 284 |

---

## 결함 분류 요약

- **F-01 (High)**: `#0e9f8e` 하드코딩 색상 + 인라인 style — FAIL 기준 항목
- **F-02 (Medium)**: 레이아웃 인라인 스타일 (display/flex/gap)
- **F-03 (Medium)**: ds-caption에 margin-top + color 인라인 스타일
- **F-04 (Low)**: ds-badge rgba 값 DS core 정의와 불일치
- **F-05 (Low)**: ds-banner-bg 클래스 방식 권장

---

## 최종 판정

**FAIL**

F-01이 하드코딩 색상 + 인라인 style 규칙 동시 위반으로 FAIL 기준에 해당합니다.

---

## 다음 액션

[FAIL]: frontend-dev 에이전트에 `llm-capsule/output/docs/index-qa-report.md`의 결함 목록을 전달하고 `llm-capsule/output/html/index-b-type.html`을 수정 요청합니다.

### 수정 요청 사항 (우선순위 순)

**[필수 수정]**
1. **F-01**: Line 1061, 1076의 `style="background-color: #0e9f8e;"` 제거.  
   - `#0e9f8e`는 DS에 토큰이 없으므로 `--ds-color-brand-accent (#55B45D)` 또는 3+2 구분 색상으로 별도 토큰 추가.  
   - 인라인 style 제거 후 `.ds-ac-card__dot--plus { background-color: var(--ds-color-brand-accent); }` 형태의 CSS 클래스 처리.

**[권장 수정]**
2. **F-02**: Line 1314의 `style="display: flex; gap: var(--ds-space-md);"` 및 Line 1318의 `style="flex: 1;"` → `.ds-diagram__trust-row { display: flex; gap: var(--ds-space-md); }` + `.ds-diagram__default-inner--flex { flex: 1; }` 클래스로 분리.
3. **F-03**: Line 1356의 `ds-caption` 인라인 스타일 → `.ds-diagram__caption` 클래스 추가 처리.

**[저우선 수정]**
4. **F-04**: `.ds-badge--error` rgba값 `0.12` 통일, `.ds-badge--purple` background를 `var(--ds-color-brand-light)` 토큰으로 교체.
5. **F-05**: Line 965의 `style="--ds-banner-bg: transparent;"` → `.ds-banner--transparent { --ds-banner-bg: transparent; }` 클래스화.
