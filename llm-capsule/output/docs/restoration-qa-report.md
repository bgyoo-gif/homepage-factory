# QA Report

- 검증일: 2026-04-08 (Asia/Seoul)
- 대상 파일: llm-capsule/output/html/restoration-b-type.html
- 원본 파일: llm-capsule/input/LLM_Capsule_Website_Updated_v3/restoration.html
- 명세서: llm-capsule/output/docs/restoration-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| D-01 | CAT-2 DS 준수 | High | :root (L73~88) | `--ds-overlay-nav-bg`, `--ds-overlay-dark-medium`, `--ds-overlay-dark-light`, `--ds-overlay-white-85`, `--ds-overlay-white-70`, `--ds-overlay-white-55`, `--ds-overlay-white-45`, `--ds-overlay-cta-btn-bdr`, `--ds-overlay-error-tint`, `--ds-overlay-brand-tint`, `--ds-overlay-brand-tint-md`, `--ds-overlay-brand-tint-light`, `--ds-overlay-success-tint`, `--ds-overlay-success-bdr`, `--ds-shadow-gradient-card` 등 15개 커스텀 CSS 변수가 design-system-core.md 및 design-system-capsule.md 어디에도 정의되어 있지 않음 | frontend-dev가 DS 외 overlay/shadow 토큰을 임의로 :root에 추가. DS에서 실제 사용하는 rgba 리터럴(rgba(255,255,255,0.92) 등)을 변수로 감싼 것이나 DS 정의 외 토큰이므로 규칙 위반 |
| D-02 | CAT-3 코드 품질 | Medium | L406 | `.ds-cta-band__actions .ds-btn` 스타일이 DS core 정의(`background: rgba(255,255,255,0.92); border: 1px solid rgba(255,255,255,0.6);`)를 따르지 않고 변수(`var(--ds-overlay-nav-bg)`, `var(--ds-overlay-cta-btn-bdr)`)를 통해 우회 참조함 — D-01과 연동 결함 | D-01의 파생 문제. DS 미정의 변수를 사용해 렌더 값은 동일하더라도 DS 토큰 체계 밖에서 관리됨 |
| D-03 | CAT-3 코드 품질 | Low | L397~398 | `.ds-cta-band__title`의 기본 font-size가 `var(--ds-text-5xl)`(40px)로 DS spec과 일치하나, mobile 오버라이드에서 `var(--ds-text-4xl)`(36px)로 설정됨 — DS CTA band 규칙(mobile: 36px, default: 40px, desktop: 50px) 충족 확인. **이상 없음(기록 목적 메모)** | — |

---

## 통계

- 전체 결함 수: 2개 (D-03은 정상 확인 메모, 실결함 아님)
- Critical: 0개
- High: 1개 (D-01)
- Medium: 1개 (D-02)
- Low: 0개

---

## 카테고리별 검증 결과

### [CAT-1] 내용 무결성 — PASS

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 | PASS — Explanation, Example, Related Terms 모두 존재 |
| 모든 본문 텍스트 누락/변경 없음 | PASS — 정의 1단락, 설명 3단락, 예시 before/after 모두 원문 일치 |
| 수치/데이터 정확 일치 | PASS — $2.4M, March 15, 2026, ENTITY_A/B, AMOUNT_1, DATE_1 모두 일치 |
| 목록 항목 수 일치 | PASS — Related Terms 4개, Related Pages 4개 모두 일치 |

### [CAT-2] DS 준수 — FAIL

| 항목 | 결과 |
|------|------|
| CSS 변수가 :root에 선언 | PASS |
| 색상 하드코딩 없음 | PASS — :root 선언부의 hex/rgba는 변수 정의이며, 사용 시 var() 참조 |
| .ds- 접두사 모든 커스텀 클래스에 있음 | PASS |
| !important 없음 | PASS |
| 인라인 style 속성 없음 | PASS |
| ds-text--brand 강조 키워드 적용 | PASS — Explanation, Example, Terms 헤더에 적용됨 |
| 주황/오렌지 계열 색상 없음 | PASS |
| background shorthand 배경 이미지 요소에 없음 | PASS — gradient에만 사용, 이미지 요소는 background-image 사용 |
| ds-section--light 미사용 | PASS (0건) |
| eyebrow 전면 제거 | PASS (0건) |
| letter-spacing 하드코딩 없음 | PASS — 모두 var(--ds-tracking-*) 사용 |
| ds-section-header--left 미사용 | PASS (0건) |
| 모든 CSS 변수가 DS 정의 변수만 사용 | **FAIL** — D-01: --ds-overlay-*, --ds-shadow-gradient-card 등 15개 DS 미정의 변수 사용 (L73~88) |

### [CAT-3] 코드 품질 — CONDITIONAL PASS

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 | PASS — nav, main, section, footer 사용 |
| 모든 section에 id 있음 | PASS — section-hero, section-2~6, section-cta 모두 존재 |
| HTML 유효성 | PASS — 태그 중첩 오류 없음 |
| 이미지/아이콘 alt/aria-label | PASS — 로고 img에 alt="LLM Capsule", nav에 aria-label 있음 |
| 폰트 실제 로드 | PASS — DM Sans + Oxanium Google Fonts 로드 |
| CTA band 버튼 스타일 | Medium 결함 D-02: DS 정의 rgba 리터럴 대신 미정의 변수 경유 |

### [CAT-4] 반응형 — PASS

| 항목 | 결과 |
|------|------|
| 4단계 breakpoint 존재 | PASS — 768px(10건), 1024px(9건), 1440px(14건) |
| mobile 기본 padding 16px | PASS — var(--ds-container-padding-mobile) = 16px |
| tablet(768) padding 32px | PASS — var(--ds-container-padding-tablet) = 32px |
| desktop(1440) padding 120px + max-width 1440px | PASS — L272: max-width: 1440px, padding: 120px |
| 모든 ds-grid가 mobile에서 1열 | PASS — ds-card-grid 기본값 1fr |
| 컨테이너 max-width 1440px | PASS |

---

## 수정 지침 (frontend-dev 대상)

### D-01 수정 방법 (High — 필수)

`:root`에서 DS 미정의 `--ds-overlay-*` 및 `--ds-shadow-gradient-card` 변수 선언을 모두 제거하고, 해당 변수를 참조하는 모든 속성을 DS에 정의된 리터럴 또는 기존 DS 변수로 교체한다.

주요 교체 매핑:
```
--ds-overlay-nav-bg          → rgba(255,255,255,0.92)   [또는 별도 선언 없이 직접 사용]
--ds-overlay-dark-light       → rgba(0,0,0,0.15)
--ds-overlay-white-85         → rgba(255,255,255,0.85)
--ds-overlay-white-70         → rgba(255,255,255,0.70)
--ds-overlay-cta-btn-bdr      → rgba(255,255,255,0.6)
--ds-overlay-brand-tint-light → rgba(24,33,232,0.06)   [DS에서는 .ds-banner--brand에 직접 정의]
--ds-shadow-gradient-card     → var(--ds-shadow-card)  [또는 제거]
```

사용 빈도가 낮은 변수(`--ds-overlay-dark-medium`, `--ds-overlay-white-55/45`, `--ds-overlay-error-tint`, `--ds-overlay-brand-tint`, `--ds-overlay-brand-tint-md`, `--ds-overlay-success-tint`, `--ds-overlay-success-bdr`)는 실제 HTML 요소에서 참조되지 않으므로 단순 삭제.

### D-02 수정 방법 (Medium — D-01 수정 시 자동 해결)

D-01에서 변수를 제거하고 리터럴로 교체하면 `.ds-cta-band__actions .ds-btn` 스타일도 DS 정의값으로 자동 정렬됨.

---

## 최종 판정

**FAIL**

High 심각도 결함(D-01)이 존재함. DS에 정의되지 않은 CSS 변수 15개가 `:root`에 선언되어 있으며 이는 필수 수정 항목이다.

## 다음 액션

**FAIL**: frontend-dev 에이전트에 `llm-capsule/output/docs/restoration-qa-report.md` 전달 및 수정 요청.
수정 완료 후 qa-agent 재호출하여 재검증 필요.
