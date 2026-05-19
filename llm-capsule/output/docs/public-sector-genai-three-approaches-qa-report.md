# QA Report

- 검증일: 2026-05-08
- 대상 파일: llm-capsule/output/html/public-sector-genai-three-approaches-b-type.html
- 원본 파일: llm-capsule/input/llmcapsule_260506/learn/learn_post_01_public-sector-genai-three-approches-in-korea.html
- 명세서: llm-capsule/output/docs/public-sector-genai-three-approaches-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| F-01 | CAT-2 DS 준수 | High | line 173 | `.ds-container` max-width가 `1440px`으로 설정. llm-capsule 브랜드 규칙은 `1280px` | CLAUDE.md 및 design-system-capsule.md `--container-max: 1280px` 규칙 미적용. `@media (min-width: 1440px) { .ds-container { max-width: 1440px; } }` |
| F-02 | CAT-2 DS 준수 | High | line 463 | `.ds-cta-band` max-width도 `1440px`으로 설정. llm-capsule 브랜드는 `1280px` | 동일 원인. `@media (min-width: 1440px) { .ds-cta-band { max-width: 1440px; ... } }` |
| F-03 | CAT-2 DS 준수 | Medium | line 1114 | `ds-bullet--number` 리스트에 `style="--ds-space-sm: 12px;"` 인라인 스타일 사용. 단, CSS 변수 전달 목적이므로 예외 허용 범위이나 `:root`에 이미 `--ds-space-sm: 12px`가 정의되어 있으므로 불필요한 오버라이드 | 이미 `:root`에 동일 값이 정의되어 있으므로 인라인 style 제거 가능 |
| F-04 | CAT-2 DS 준수 | Medium | line 1275 | CTA 배경(`ds-bg--grad-deep`, 다크 딥 색상) 위에 `ds-text--brand`(`--c-primary: #5b4fe9` 보라색) 적용. 다크 배경 위 보라색은 대비 부족으로 가시성 저하 위험 | CLAUDE.md: "배경 이미지 위 텍스트: black 또는 white만 사용" 규칙 위반. CTA 타이틀 강조는 white로 유지해야 함 |
| F-05 | CAT-3 코드 품질 | Medium | line 525~529 | `section-lead`에 연속 `<p>` 3개 — CLAUDE.md "연속 본문 3단락 이상 금지 → ds-bullet--dot 분리" 규칙 위반 | 아티클 리드 섹션으로 원본 흐름을 그대로 유지했으나 DS 규칙 적용 누락 |
| F-06 | CAT-3 코드 품질 | Medium | line 538~543 | `section-1`(N2SF 섹션) 첫 `ds-article-body`에 연속 `<p>` 3개 — 동일 규칙 위반 | 동일 원인 |
| F-07 | CAT-3 코드 품질 | Medium | line 706~710 | `section-3` sLLM 장점 섹션 `ds-article-body`에 연속 `<p>` 3개 — 동일 규칙 위반 | 동일 원인 |
| F-08 | CAT-3 코드 품질 | Medium | line 740~745 | `section-3` sLLM 단점 섹션 `ds-article-body`에 연속 `<p>` 4개 — 동일 규칙 위반 (4개로 더 심각) | 동일 원인 |
| F-09 | CAT-3 코드 품질 | Medium | line 908~913 | `section-4` 게이트웨이 장점 섹션 `ds-article-body`에 연속 `<p>` 4개 — 동일 규칙 위반 (4개) | 동일 원인 |
| F-10 | CAT-3 코드 품질 | Medium | line 953~957 | `section-4` 차등정보보호 섹션 `ds-article-body`에 연속 `<p>` 3개 — 동일 규칙 위반 | 동일 원인 |
| F-11 | CAT-3 코드 품질 | Low | line 1246, 1253, 1260 | "함께 읽으면 좋은 글" 관련 글 카드 href가 `"#"` 플레이스홀더. CLAUDE.md 규칙 33: 내부 링크는 Framer 상대경로 필수 | 아직 실제 아티클 URL이 없어 `#`으로 처리했으나, 미발행 문서의 예고 링크라도 `/resources/learn/` 경로 형태로 지정해야 함 |

---

## PASS 항목 요약

### CAT-1 내용 무결성 — PASS

- html lang="ko" 확인
- 모든 섹션 제목 일치: h1, h2(1~6), h3(2.1~4.5) 전부 존재
- TL;DR 수치 일치: "7~13억 원", "8억 원", "3억~5억 원", "32B", "10~20%", "1~3억", "100억+" 모두 정확
- N2SF 가이드라인 "21개 보안위협", "50개 이상 보안통제" 수치 정확
- 비교표 7행(초기 도입 비용/AI 성능/데이터 보안/모델 최신화/N2SF 정합성/운영 인력 부담/적합 규모) 모두 존재하고 내용 일치
- FAQ 5개 항목 전부 존재하고 내용 일치
- 참고 자료 4건 누락 없음
- 게이트웨이 솔루션 평가 질문 5개 누락 없음
- 도식 3(세 접근법 비교 SVG) 삭제 확인 — spec 지시에 따라 비교표(ds-table)로 대체, 정보 손실 없음

### CAT-2 DS 준수 — 부분 PASS (F-01, F-02, F-03, F-04 제외)

- 하드코딩 색상 없음 (`:root` 변수 외 hex/rgb 없음)
- `!important` 없음
- 인라인 style 1건(F-03, CSS 변수 전달) 외 없음
- ds-text--brand 강조 키워드 9곳 적용 확인
- 주황/오렌지 색상 없음 (amber `--c-amber` 허용값만 사용)
- background shorthand 없음
- ds-section--light 0건
- eyebrow 클래스 없음 (llm-capsule은 허용이지만 아티클 타입에서 사용 안 함 — 문제 없음)
- letter-spacing 하드코딩 없음 (모두 `var(--ds-tracking-*)` 사용)
- ds-section-header--left 없음
- DS에 없는 커스텀 CSS 변수 없음 (모두 `:root`에 선언된 변수만 사용)
- SVG 도식 색상 모두 `var(--c-*)` CSS 변수로 처리됨
- CTA 배경 이미지(`ds-bg--grad-deep`) 적용 및 `@media (max-width: 767px) { background-image: none; }` 모바일 제거 처리 확인

### CAT-3 코드 품질 — 부분 PASS (F-05~F-10, F-11 제외)

- 시맨틱 태그: `<main>`, `<section>`, `<nav>`, `<figure>`, `<figcaption>` 사용 확인
- 모든 section에 id 존재: section-hero, section-tldr, section-lead, section-1~6, section-faq, section-references, section-related, section-cta
- SVG에 `<title>` + `<desc>` 존재, `<figure>` role="img" aria-label 적용
- `<nav>` aria-label="Breadcrumb" 적용
- ds-bullet--check 아이콘 HTML 없음 — `<span class="ds-bullet__icon"></span>` 전부 비어있음 확인 (CSS ::before 자동)
- JSON-LD BreadcrumbList + FAQPage 구조화 데이터 모두 존재
- Inter + JetBrains Mono 폰트 Google Fonts로 정상 로드
- `overflow-x: auto` 사용 시 `scrollbar-width: none` + `::-webkit-scrollbar { display: none; }` 동반 확인 (line 327~329)
- ds-table-wrap에 `min-width: 600px` 처리로 모바일 가로 스크롤 지원

### CAT-4 반응형 — PASS

- 4단계 breakpoint 모두 존재: 768px, 1024px, 1440px (+ 모바일 base)
- mobile(375) padding 16px (`var(--ds-container-padding-mobile): 16px`)
- tablet(768) padding 32px (`var(--ds-container-padding-tablet): 32px`)
- desktop 120px padding (`var(--ds-container-padding-desktop): 120px`)
- CTA band 모바일 `background-image: none` 처리
- ds-card-grid--3col 반응형: mobile 1열 → 768px 2열 → 1024px 3열 (`repeat(N, minmax(0, 1fr))` 사용)
- ds-article-container 반응형: mobile 100% → 768px 720px → 1024px 860px → 1280px 1080px

---

## 통계

- 전체 결함 수: 11개
- Critical: 0개 / High: 2개 / Medium: 8개 / Low: 1개

---

## 최종 판정

**FAIL**

High 결함 2건(F-01, F-02)이 존재하며, F-04(다크 배경 위 brand 색상 가시성)도 High에 준하는 Medium으로 즉시 수정 필요. 연속 단락 규칙 위반(Medium)이 6개 구간에 걸쳐 있어 품질 기준 미충족.

---

## 다음 액션

FAIL 판정. llm-capsule/output/docs/public-sector-genai-three-approaches-qa-report.md의 결함 목록을 확인하고
llm-capsule/output/html/public-sector-genai-three-approaches-b-type.html을 수정해줘.

### 수정 우선순위

**즉시 수정 필수 (High):**
1. **F-01**: `@media (min-width: 1440px) { .ds-container { max-width: 1440px; } }` → `max-width: 1280px`으로 변경
2. **F-02**: `@media (min-width: 1440px) { .ds-cta-band { max-width: 1440px; ... } }` → `max-width: 1280px`으로 변경

**수정 필요 (Medium):**
3. **F-04**: `ds-cta-band__title` 내 `<span class="ds-text--brand">시작</span>` 제거 — 다크 배경이므로 white 텍스트 전체를 유지. 강조는 별도 처리 불필요하거나 white tint 계열 span 사용
4. **F-05~F-10**: 연속 3단락 이상 구간 6곳 — 각 단락의 첫 문장 `<strong>` 처리 후 `ds-bullet--dot` 리스트로 변환
   - section-lead (line 525~529): 3p
   - section-1 첫 article-body (line 538~543): 3p
   - section-3 장점 (line 706~710): 3p
   - section-3 단점 (line 740~745): 4p
   - section-4 장점 (line 908~913): 4p
   - section-4 차등정보보호 (line 953~957): 3p (마지막 p는 "다음을 보장합니다" → 리스트 인트로이므로 유지 가능)
5. **F-03**: line 1114 인라인 `style="--ds-space-sm: 12px;"` 제거 (`:root` 기본값과 동일)

**수정 권장 (Low):**
6. **F-11**: line 1246, 1253, 1260 관련 글 카드 href=`#` → 예상 경로 기재 (예: `/resources/learn/n2sf-guide`, `/resources/learn/n2sf-model-2`, `/resources/learn/differential-privacy`)
