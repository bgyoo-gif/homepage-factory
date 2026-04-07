# QA Report
- 검증일: 2026-04-07 (Asia/Seoul)
- 대상 파일: output/html/llm-capsule-home-b-type.html
- 원본 파일: input/llm-capsule-home.html
- 명세서: output/docs/llm-capsule-home-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 1471, 1493 | `--ds-color-teal-accent` 변수가 `:root`에 정의되지 않은 커스텀 CSS 변수 | `ds-ac-card__industry-dot`의 teal 색상을 `--ds-color-teal-accent`로 인라인 style에서 참조하고 있으나 `:root`에 선언 없음. 브라우저에서 `transparent`로 렌더링. `var(--ds-color-brand-accent)` (#55B45D) 또는 `#0e9f8e`(하드코딩 → 변수 교체) 사용 필요 |
| Q02 | CAT-2 | High | line 447 | `.ds-card__badge--teal`에 하드코딩 색상 `#0e9f8e` 사용 | `color: #0e9f8e; border-color: #0e9f8e;` — DS 팔레트에 없는 색상. `:root`에 `--ds-color-teal: #0e9f8e;` 추가 후 `var()` 참조로 교체 필요 |
| Q03 | CAT-2 | High | line 77~88 | `:root` gradient 변수 내 비팔레트 hex 색상 다수 | `#C5CCFF`, `#E8F0FF`, `#6B7BF0`, `#E0E8F8`, `#BFD8F4`, `#E2EBF5`, `#F0FFF2`, `#9AE6AD`, `#C9FFE1`, `#D5D5D5`, `#F6F5F6`, `#ECEEFF`, `#FCFCFE`, `#EAF0F9`, `#F0FDF5`, `#5670E8` 등이 DS 팔레트에 없는 임의 색상. `:root` 변수값 내부에 정의된 것이므로 허용 가능 범위이나, capsule 브랜드 토큰으로 정의가 필요한 값들 포함. Q01, Q02와 달리 `:root` 선언 내부이므로 Low 처리 |
| Q04 | CAT-3 | High | line 전체 (CSS `<style>` 블록) | `ds-cta-band` CSS 블록 누락 — CTA 섹션이 스타일 없이 렌더링됨 | b-type.html에 `.ds-cta-band { ... }` 스타일 정의가 없음. part2.html(line 532~545)에만 있음. CTA 배경, padding, 텍스트 색상, 레이아웃 등 모든 시각 처리가 깨짐 |
| Q05 | CAT-3 | High | line 전체 (CSS `<style>` 블록) | `ds-step-tabs` CSS 블록 누락 — Use Cases 탭 컴포넌트가 스타일 없이 렌더링됨 | b-type.html에 `.ds-step-tabs { ... }` 스타일 정의가 없음. part2.html(line 425~450)에만 있음. 탭 nav, 패널 grid, 스크린샷 영역 레이아웃이 모두 미적용 |
| Q06 | CAT-3 | High | line 전체 (CSS `<style>` 블록) | `ds-table` CSS 블록 누락 — 섹션 7 비교표가 스타일 없이 렌더링됨 | b-type.html에 `.ds-table { ... }` 스타일 정의가 없음. 테이블 헤더, 셀 패딩, 반응형 스크롤 처리 모두 미적용 |
| Q07 | CAT-3 | High | line 전체 (CSS `<style>` 블록) | `ds-footer` CSS 블록 누락 | b-type.html에 `.ds-footer { ... }` 스타일 정의가 없음. 푸터 레이아웃과 타이포그래피 미적용 |
| Q08 | CAT-2 | High | line 1245, 1268, 1291, 1314, 1337, 1360 | 이미지 경로 상대경로 `../../cubig/reference/` 사용 | 6개 illustration 이미지 경로가 `../../cubig/reference/graphics/illustration-*.png` 상대경로. 절대경로 `/cubig-homepage-design-system/reference/` 또는 배포 서버 기준 절대경로 필수 |
| Q09 | CAT-2 | High | line 829, 861, 865, 869, 875, 907, 911, 915, 952~994 | 이미지 포맷이 .png/.jpg 사용 — WebP 우선 원칙 위반 | `partner-gartner.png`, `partner-claroty.png`, `partner-korea-heritage-service.jpg`, `partner-ministry-of-data-and-statistics.png`, `cert-left.png`, `cert-right.png`, `cert-iso.png`, `cert-gs.png`, `cert-kisa.png` 및 illustration 6개 모두 .png/.jpg — .webp 파일이 없으면 변환 후 교체 필요 |
| Q10 | CAT-2 | High | line 1897~1898 | 섹션 11 CTA 타이틀에 `ds-text--brand` 미적용 — spec 강조 키워드 "enables AI" 누락 | spec 섹션 11: `"enables AI" → ds-text--brand` 명시. 현재 `<span class="ds-text--product">LLM Capsule</span> enables AI` — "enables AI"에 `<span class="ds-text--brand">` 미적용 |
| Q11 | CAT-3 | Medium | line 전체 (CSS `<style>` 블록) | `ds-arch-placeholder`, `ds-flow-step`, `ds-banner--spaced` 커스텀 컴포넌트 CSS 미정의 | 이 세 클래스가 HTML에서 사용되고 있으나 CSS 스타일 블록에 정의 없음. 시각 처리 미적용 |
| Q12 | CAT-2 | Medium | line 1200 내외 (섹션 3 배너) | `ds-banner--full` 의 `::before` 오버레이가 `rgba(255,255,255,0.72)` — 밝은 배경 이미지 위 텍스트 가독성 주의 | `.ds-banner--full::before { background-color: rgba(255,255,255,0.72); }` — grad-sky 등 밝은 배경 이미지에서는 흰색 오버레이가 적합하지만 텍스트 color가 `text-primary`(dark)인지 확인 필요. 현재 `color: var(--ds-color-text-primary)` — 흰색 오버레이 + 검정 텍스트이므로 가독성 OK. 단, wave-teal이나 paint-lavender에서 오버레이가 동일하게 적용되는지 확인 필요 |
| Q13 | CAT-1 | Medium | line 1898 | 섹션 11 CTA 타이틀 내용 변경 — A타입에서 "See how LLM Capsule enables AI on your enterprise documents" 정확히 일치하지만 title 내 강조 누락 | spec에서 `<span class="ds-text--brand">enables AI</span>`를 요구하는데 미적용 (Q10과 동일 원인) |
| Q14 | CAT-4 | Low | line 725~739 | `@media (min-width: 768px)` 블록이 빈 상태로 존재 | `@media (min-width: 768px) { /* Section header title 반응형은 위 포함 */ }` — 빈 블록이 코드 품질 오염. 실제 breakpoint는 개별 컴포넌트에 분산 적용되어 있어 기능적 문제는 없음 |

---

## grep 검증 결과 요약

| 항목 | 결과 |
|------|------|
| 하드코딩 색상 (비변수 hex) | `#0e9f8e` (line 447) — 결함 |
| `!important` | 없음 — 통과 |
| 인라인 스타일 (`style=`) | CSS 변수 전달 목적만 (background-color: var(--ds-*)) — 허용 범위 |
| `ds-text--brand` 섹션별 적용 | 11개 섹션 모두 확인. 섹션 11 CTA "enables AI" 미적용 — 결함 |
| `ds-banner` 좌측 border | 없음 — 통과 |
| KPI 수치 색상 | `var(--ds-color-white)` — 통과 |
| `ds-card` 기본 배경 | `var(--ds-color-surface-white)` — 통과 |
| CTA 배치 (container 밖) | section id="section-11"이 `<main>` 직속, container 없음 — 통과 |
| `word-break: keep-all` (body) | line 38 — 통과 |
| 긴 문장 불릿 분리 | Before/After 카드 → ds-bullet--dot/check 사용 — 통과 |
| eyebrow | 없음 — 통과 |
| `ds-section--light` | 없음 — 통과 |
| `ds-section-header--left` | 없음 — 통과 |
| letter-spacing 하드코딩 | 없음 (모두 `var(--ds-tracking-*)`) — 통과 |
| 오렌지/주황 색상 | 없음 — 통과 |
| `background` shorthand | `background: var(--ds-gradient-brand)` (line 397, 버튼용) — 배경 이미지 요소 아님, 통과 |
| 4단계 breakpoint | 768: 9개, 1024: 10개, 1440: 11개 — 통과 |
| `padding-top: 58px` (body) | line 37 — 통과 |
| `ds-section--hero` padding-top 100px | line 291 — 통과 |
| `max-width: 1440px` | line 287, 707 — 통과 |
| KPI band 오버레이 | `rgba(0,0,0,0.35)` line 559 — 통과 |
| 아코디언 header grid `1fr auto auto` | line 641 — 통과 |
| Partner grid (ds-partner-grid) | line 824 — 통과 |
| Cert grid (ds-cert-grid) | line 951 영역 — 통과 |
| Step Tabs (ds-step-tabs) 컴포넌트 | HTML 구조 존재 (line 1528~) — 통과 |
| FAQ 아코디언 | ds-ac-card 사용 — 통과 |
| Case Study (ds-card--case-study) | 섹션 4에 사용 — 통과 |
| 외부 서비스 링크 버튼화 | AWS Marketplace → ds-btn--secondary (line 796, 1907) — 통과 |
| JSON-LD | Organization + Product + FAQPage 3개 포함 — 통과 |
| Google Fonts 로드 | line 26 — 통과 |
| `--ds-color-teal-accent` 미정의 | line 1471, 1493 — 결함 (Q01) |
| 이미지 상대경로 `../../` | line 1245, 1268, 1291, 1314, 1337, 1360 — 결함 (Q08) |
| 이미지 WebP 미사용 | PNG/JPG 52건 — 결함 (Q09) |
| CSS 블록 누락 | ds-cta-band, ds-step-tabs, ds-table, ds-footer, ds-arch-placeholder, ds-flow-step | 결함 (Q04~Q07, Q11) |

---

## 통계
- 전체 결함 수: 14개
- Critical: 0개
- High: 10개 (Q01~Q10)
- Medium: 3개 (Q11~Q13)
- Low: 1개 (Q14)

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 결함 10개 포함으로 FAIL 판정.

주요 결함 3그룹:

**그룹 A — CSS 블록 누락 (Q04~Q07, Q11):**
b-type.html 파일이 part1.html + part2.html로 분할 생성된 후 병합 과정에서 CSS 블록이 누락됨.
- `ds-cta-band` CSS 없음 → CTA 섹션 시각 처리 전무
- `ds-step-tabs` CSS 없음 → Use Cases 탭 시각 처리 전무
- `ds-table` CSS 없음 → 섹션 7 비교표 시각 처리 전무
- `ds-footer` CSS 없음 → 푸터 시각 처리 전무

**그룹 B — DS 규칙 위반 (Q01, Q02, Q08, Q09, Q10):**
- `--ds-color-teal-accent` 미정의 커스텀 변수 사용 → 투명 렌더링
- `#0e9f8e` 하드코딩 색상
- 이미지 상대경로 6건
- PNG/JPG 52건 (WebP 미변환)
- CTA 타이틀 "enables AI" ds-text--brand 미적용

**그룹 C — 내용 (Q13):**
CTA 타이틀 강조 키워드 누락 (Q10과 동일 원인)

---

## 수정 지시 사항 (frontend-dev)

### 필수 수정 항목

1. **CSS 블록 병합 (Q04~Q07, Q11):** part2.html의 `ds-cta-band`, `ds-step-tabs`, `ds-table`, `ds-footer` CSS를 b-type.html의 `<style>` 블록 끝(line 740 이전)에 추가. `ds-arch-placeholder`, `ds-flow-step`, `ds-banner--spaced` CSS도 추가.

2. **커스텀 변수 정의 (Q01):** `:root`에 `--ds-color-teal-accent: #0e9f8e;` 추가. line 1471, 1493의 인라인 style은 CSS 변수 전달 목적이므로 변수 추가 후 유지.

3. **하드코딩 색상 교체 (Q02):** line 447 `.ds-card__badge--teal { color: #0e9f8e; border-color: #0e9f8e; }` → `color: var(--ds-color-teal-accent); border-color: var(--ds-color-teal-accent);`

4. **이미지 절대경로 교체 (Q08):** line 1245, 1268, 1291, 1314, 1337, 1360의 `../../cubig/reference/graphics/` → `/cubig-homepage-design-system/reference/graphics/` (또는 프로젝트 루트 기준 절대경로)

5. **이미지 WebP 변환 (Q09):** PNG/JPG 이미지를 WebP로 변환 후 경로 교체. partner-gartner.webp, partner-claroty.webp, partner-korea-heritage-service.webp, partner-ministry-of-data-and-statistics.webp, illustration-*.webp 등. WebP 변환 불가 시 `<picture>` 태그로 WebP 우선 fallback 구현.

6. **CTA 타이틀 강조 (Q10):** line 1898
   변경 전: `See how <span class="ds-text--product">LLM Capsule</span> enables AI on your enterprise documents`
   변경 후: `See how <span class="ds-text--product">LLM Capsule</span> <span class="ds-text--brand">enables AI</span> on your enterprise documents`

---

## 다음 액션

[FAIL] frontend-dev 에이전트에 `output/docs/llm-capsule-home-qa-report.md` 전달 및 수정 요청.
수정 완료 후 qa 에이전트 재호출.
