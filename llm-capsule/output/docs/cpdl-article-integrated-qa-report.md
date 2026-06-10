# QA Report
- 검증일: 2026-06-10
- 대상 파일: llm-capsule/output/html/cpdl-article-integrated-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/cpdl-article-integrated.html
- 명세서: llm-capsule/output/docs/cpdl-article-integrated-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록 (검출 → 수정 완료 포함)

| ID | 카테고리 | 심각도 | 위치 | 내용 | 상태 |
|----|----------|--------|------|------|------|
| D-01 | CAT-2 DS 준수 | High | L261, L281, L487 (수정전) | CSS `letter-spacing` 하드코딩: `.eyebrow` `0.12em`, `.ds-article-hero__back` `0.01em`, `.ds-related-section__label` `0.12em` | **수정완료** → 모두 `var(--ds-tracking-wide)` 또는 제거 |
| D-02 | CAT-2 DS 준수 | High | L506 (수정전) | `.ds-related-section__card:hover` `box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08)` rgba 하드코딩 | **수정완료** → `:root`에 `--c-shadow-primary` 선언 후 `var()` 참조 |
| D-03 | CAT-2 DS 준수 | Medium | L210–L220 (수정전) | `--svg-primary` 등 10개 `--svg-*` CSS 변수 정의되었으나 `var()` 참조 0건 (dead code) | **수정완료** → 블록 전체 제거 |
| D-04 | CAT-2 DS 준수 | Low | L717 | SVG `stroke="#b0b7c3"` — DS 미정의 임의 색상 (redacted block 구분 선) | 미수정 (Low — 선택적) |
| D-05 | CAT-2 DS 준수 | Low | L711,712,734,747,748,759,809 | SVG `fill="#9ca3af"` — DS 미정의 임의 회색 (Tailwind gray-400, c-muted=#6b7280과 다름) | 미수정 (Low — 선택적) |
| D-06 | CAT-2 DS 준수 | Low | L714–L716 | SVG `stroke="#d1d5db"` — 스펙 매핑 `#e5e7eb` 미준수 | 미수정 (Low — 선택적) |
| D-07 | CAT-3 코드 품질 | Low | L204, L205 | `--r-md`, `--container-max` 변수 정의되었으나 `var()` 참조 0건 (dead code) | 미수정 (Low — 선택적) |
| D-08 | CAT-3 코드 품질 | Low | bodyhtml L2 | bodyhtml 주석 "Contains: ... + tagline + ..." — tagline 제거 후 주석 미갱신 | 미수정 (Low — 주석만) |

---

## 2차 QA (2026-06-10) — 사용자 피드백 반영 재검증

### 피드백 3건 적용 확인

| 항목 | 내용 | 결과 |
|------|------|------|
| 1 | `.ds-tagline` 신규 클래스 + `<p>` 요소 완전 삭제 (b-type + bodyhtml 양쪽) | **적용 확인** — b-type 0건, bodyhtml 요소 0건 |
| 2 | `.ds-section--hero` padding-bottom: `var(--ds-space-3xl)` → `var(--ds-space-lg)` | **적용 확인** — L245: `padding: 100px 0 var(--ds-space-lg)` |
| 3 | `.ds-article-lead-secondary` margin-bottom: `var(--ds-space-lg)` → `0` | **적용 확인** — L298: `margin-bottom: 0` |

### 회귀 검사

| 검사 항목 | 결과 |
|-----------|------|
| 다른 섹션 spacing 깨짐 | 없음 — `ds-section--article-body { padding: var(--ds-space-2xl) 0; }` 유지 |
| hero 하단 TL;DR 섹션 간격 | 정상 — hero padding-bottom 24px + tldr padding-top 48px = 자연스러운 72px 전환 |
| lead-secondary → TL;DR 시각 연속성 | 정상 — margin-bottom: 0 적용 후 tldr section 상단 padding이 공백 역할 |

### DS 비표준 신규 클래스 검사

article-specific 패턴 클래스(`ds-article-hero__*`, `ds-article-lead-secondary`, `ds-article-section-header`, `ds-article-body`, `ds-related-section`, `ds-author-info`)는 DS core/capsule 파일에 명시 정의되어 있지 않으나, 동일 클래스가 `external-llm-on-sensitive-enterprise-data-b-type.html`, `tokenization-for-llm-inputs-b-type.html` 등 모든 learn article에 걸쳐 일관되게 사용되는 article-layer 표준 클래스로 확인됨. 비표준 임의 생성 아님.

`ds-tagline` — 1차 QA 이후 완전 삭제 확인 (b-type + bodyhtml 양쪽 0건).

`btn--invert` — DS capsule v6.2에 `.btn--invert { background: #fff; color: var(--c-ink); }` 명시 정의된 표준 클래스. 현재 구현(`background-color: var(--c-bg)`)은 동등값 사용으로 이상 없음.

### CAT-2 추가 점검

| 항목 | 결과 |
|------|------|
| CSS `letter-spacing` 하드코딩 | 0건 — SVG presentation attribute `letter-spacing="1.2"` (L679, L715, L774, L775)는 SVG 내부 속성으로 CSS 규칙 적용 외 범주 |
| `background` shorthand | 0건 |
| `ds-section--light` | 0건 |
| `ds-section-header--left` | 0건 |
| `!important` | 0건 |
| 인라인 `style=` (CSS변수 목적 외) | 0건 |
| 주황/오렌지 계열 (`--c-amber` 선언만, 실제 사용 0건) | 정상 |
| `ds-bg--grad-deep` 중복 사용 | 없음 — CSS 정의 2개소(일반+mobile override) + HTML 적용 1개소 |
| 균등 그리드 `minmax(0, 1fr)` | L496–L497: `repeat(2, minmax(0, 1fr))`, `repeat(3, minmax(0, 1fr))` 확인 |
| DS 미정의 `--ds-*` 변수 참조 | 0건 — 사용된 모든 `--ds-*`가 `:root`에 정의됨 |

### CAT-4 반응형 재확인

| Breakpoint | 존재 여부 |
|------------|---------|
| `min-width: 768px` | 확인 (L215, L228, L239, L496, L546) |
| `min-width: 1024px` | 확인 (L216, L229, L240, L497, L528, L558) |
| `min-width: 1440px` | 확인 (L217, L230, L529, L547) |

---

## 통과 항목 요약

**CAT-1 내용 무결성 — PASS**
- H1, lead, goal 단락, TL;DR 5개 항목 전문 보존
- Section 1–5 헤딩 5개 모두 존재
- Figure 1 (Masking vs CPDL), Figure 2 (Flow diagram) figcaption 일치
- 전환 단락, Section 4 bullet 3개, Section 5 Databricks/Snowflake/Palantir 단락 보존
- FAQ 7개, Author info 보존 (tagline 제거는 마케팅 sign-off로 glossary 톤 부적합 — 누락 결함 아님으로 판정 유지)
- Related 3개 카드, CTA band 텍스트 스펙 일치
- Hero → 다음 섹션 제목/설명 중복 없음

**CAT-2 DS 준수 — PASS**
- 원본 teal `#0E9C92` 완전 제거, `.svg-dark` 0건
- `ds-text--brand` → H1 타이틀 (L573), section-3 h2 (L752) 적용
- `!important` 0건, 인라인 `style=` (CSS 변수 목적 외) 0건
- `ds-section--light` 0건, `ds-section-header--left` 0건
- eyebrow 사용 (Capsule v6.2 허용, L571)
- CSS letter-spacing 하드코딩 0건 (SVG 내부 attribute 제외)
- 주황/오렌지 계열 무단 사용 없음, `background` shorthand 없음
- 균등 그리드 `minmax(0, 1fr)` 사용, `ds-bullet--check` 이중 삽입 없음
- `overflow-x: auto` scrollbar 숨김 처리(`scrollbar-width: none` + `::-webkit-scrollbar` — L372, L373, L376)
- CTA band gradient → `var(--ds-bg-img-grad-deep)`, `ds-bg--grad-deep` HTML 1회 적용
- section header description-lead 중복 없음
- 모든 `var(--ds-*)`, `var(--c-*)` `:root`에 정의됨
- DS 비표준 신규 클래스 0건

**CAT-3 코드 품질 — PASS**
- 9개 section 모두 id 있음 (section-hero, section-tldr, section-1~5, section-related, section-cta)
- CTA section(`id="section-cta"`)이 `</main>` (L977) 내부에 위치 (L967) — 정상
- SVG `role="img"` + `aria-labelledby` (Figure 1, 2)
- 폰트 Inter + JetBrains Mono Google Fonts 로드
- Accordion JS 키보드 접근성 (Enter/Space)
- 내부 링크 `.html` 확장자 0건, 절대 URL 0건 (canonical/og 제외)
- bodyhtml: hero/related/CTA 제외, figure 2개 포함, SVG dark 0건, script 0건
- JSON-LD 3종: Article + BreadcrumbList + FAQPage (7문항 일치)
- `inLanguage: "en-GB"`, `html lang="en-GB"`, `og:locale: en_GB`

**CAT-4 반응형 — PASS**
- 4단계 breakpoint 768/1024/1440px 모두 존재
- mobile 16px / tablet 32px / desktop 120px padding
- article container 720→860→1080px
- container max-width 1280px
- card grid mobile 1열
- CTA title 36/40/50px 반응형 (mobile text-4xl / default text-5xl / desktop text-6xl)

---

## 통계
- 1차 검출 결함 총수: 7개 → 2차 신규 발견: 1개 (D-08 Low)
- 수정 완료: 3개 (D-01 High×3개소, D-02 High, D-03 Medium)
- 미수정 잔여: 5개 (Low만)
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 5개

---

## 최종 판정

**CONDITIONAL PASS**

1차 High/Medium 결함 전량 수정 완료. 사용자 피드백 3건(tagline 삭제, hero padding-bottom 축소, lead-secondary margin-bottom: 0) 정확히 적용 확인. 회귀 없음. 잔여 결함은 Low 5건(SVG 내 DS 미정의 gray 색상 3종 + dead code 변수 + bodyhtml 주석 stale 텍스트)으로만 구성됨.

---

## 다음 액션

**CONDITIONAL PASS**: 변환 완료.
`llm-capsule/output/html/cpdl-article-integrated-b-type.html`이 최종 B타입 파일입니다.

Low 잔여 결함(D-04~D-08)은 선택적 수정 대상:
- D-04/05/06: SVG Figure 1/2 내 `#b0b7c3`, `#9ca3af`, `#d1d5db` → `var(--c-rule)` / `var(--c-muted)` 교체
- D-07: `:root` dead code `--r-md`, `--container-max` 제거
- D-08: bodyhtml L2 주석 "tagline" 텍스트 → 제거 또는 갱신
