# chatgpt-teams-korea-public-sector-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/article_public_sector (1).html`
> Output: `llm-capsule/output/html/chatgpt-teams-korea-public-sector-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md`
> Language: **ko** (Korean) — 원문이 한국어이므로 `<html lang="ko">` 적용

---

## Framer Page Metadata

| Field | Value |
|-------|-------|
| URL Slug | chatgpt-teams-korea-public-sector |
| SEO Title | ChatGPT Teams, 한국 공공기관에서 사용해도 괜찮을까 — CSAP·N²SF 적용성 분석 |
| Meta Description | ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 작동하지 않는 이유. CSAP·개인정보보호법·N²SF·감사 체계와의 구조적 불일치를 분석하고, 공공기관이 실제로 선택 가능한 대안 세 가지를 비교합니다. |
| OG Title | 공공기관의 ChatGPT Teams 사용, 감사에서 살아남을 수 있을까 |
| OG Description | 학습에 안 쓴다는 약속만으로 충분할까. 한국 공공 영역에서 ChatGPT Teams가 부딪히는 4가지 법적 빈틈을 분석합니다. |

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 9 (Hero + TL;DR + Lead + 4 body sections + Alternative analysis + CTA) |
| Tone | 정책 분석, 규제 환경 진단, 의사결정 지원 |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 14분 |
| Category chip | 정책 분석 |

---

## Global Rules

- Pattern: 기존 learn article (public-sector-genai-three-approaches 등) 동일 구조
- All CSS via `var(--ds-*)` / capsule `--c-*` tokens (no hardcoded colors)
- No `!important`, no inline `style`
- Container max-width: **1280px** (llm-capsule v6.2)
- Article body max-width: **1080px**
- `<html lang="ko">` — 한국어 원문
- Font: Inter — Oxanium 폐기
- Background images: absolute URL `https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/`
- Mobile (`max-width: 767px`): `background-image: none`
- Section IDs: `id="section-N"`
- Internal links: Framer 상대경로 (`/request-a-demo`, `/resources/learn/...`)

---

## Section-by-Section Specification

### Section 1: Hero — `id="section-hero"`

| Element | Value |
|---------|-------|
| Breadcrumb | 홈 / 리소스 / Learn / 공공기관의 ChatGPT Teams 사용, 감사에서 살아남을 수 있을까 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 14분" |
| Date | "2026년 5월" |
| Title | `안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까` (brand 강조: "한국 공공 영역") |
| Description | "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 작동하지 않는 이유. CSAP·개인정보보호법·N²SF·감사 체계와의 구조적 불일치를 분석합니다." |

---

### Section 2: TL;DR — `id="section-tldr"`

| Element | Value |
|---------|-------|
| Pattern | `ds-banner ds-banner--brand` |
| Label | "TL;DR" |
| Body | ChatGPT Teams의 보안 마케팅("학습에 안 씀, SOC 2 인증")은 글로벌에서는 유효하지만 한국 공공 영역에서는 작동하지 않습니다. CSAP 미인증, 개인정보보호법상 국외이전 해당, N²SF 등급 체계 충돌, 감사 관점의 역설 — 네 가지 구조적 빈틈이 존재합니다. 대안은 CSAP 국내 LLM, 온프레미스 배포, 그리고 온프레미스 + 사전 마스킹 결합이며 셋 중 사용자 실수까지 방어하는 마지막 방식만이 한국 공공 영역의 요구사항을 정면으로 겨냥합니다. |

---

### Section 3: Lead — `id="section-lead"`

원본 첫 3개 단락을 그대로. 단, "이 글의 결론을 먼저 밝히면…"의 강조 부분은 `<strong>` 유지.

---

### Section 4: 첫 번째 빈틈 — CSAP 인증의 부재 (`id="section-1"`)

| Element | Value |
|---------|-------|
| Section header | `1. <span class="ds-text--brand">첫 번째 빈틈</span> — CSAP 인증의 부재` |
| Body | 원본 4개 단락 그대로 (`<strong>` 유지) |

---

### Section 5: 두 번째 빈틈 — 데이터 국외이전과 개정 개인정보보호법 (`id="section-2"`)

| Element | Value |
|---------|-------|
| Section header | `2. <span class="ds-text--brand">두 번째 빈틈</span> — 데이터 국외이전과 개정 개인정보보호법` |
| Body | 원본 3개 단락 + 비교 테이블 + 마무리 2개 단락 |
| Table | "학습 미사용 vs 국외이전" 5행 비교 — `ds-table--3col` 패턴, 헤더 2번째 컬럼 highlight 처리 |

---

### Section 6: 세 번째 빈틈 — N²SF 등급 체계와의 충돌 (`id="section-3"`)

| Element | Value |
|---------|-------|
| Section header | `3. <span class="ds-text--brand">세 번째 빈틈</span> — N²SF 등급 체계와의 충돌` |
| Body | 원본 2개 단락 + 등급 매핑 테이블 + 마무리 2개 단락 |
| Table | C/S/TS 등급 × 처리 환경/적합성/비고 4컬럼 |

---

### Section 7: 네 번째 빈틈 — 경영평가와 감사 관점의 역설 (`id="section-4"`)

| Element | Value |
|---------|-------|
| Section header | `4. <span class="ds-text--brand">네 번째 빈틈</span> — 경영평가와 감사 관점의 역설` |
| Body | 원본 3개 단락 |

---

### Section 8: 그렇다면 무엇이 가능할까 — 대안 분석 (`id="section-5"`)

| Element | Value |
|---------|-------|
| Section header | `5. <span class="ds-text--brand">그렇다면</span> 무엇이 가능할까` |
| Body | 도입 단락 + 대안 비교 테이블 + 3가지 대안 단락 + 결론 단락 |
| Table | ChatGPT Teams (참조) + 3가지 대안 × 4가지 기준 매핑 |

---

### Section 9: CTA — Framer 상대경로 `/request-a-demo`

기존 learn article 패턴 동일. `ds-cta-band ds-bg--grad-deep` 사용.

---

## JSON-LD

- BreadcrumbList
- Article schema (headline = h1, datePublished = 2026-05-01, inLanguage = ko-KR)
- FAQPage 없음 (이 아티클은 FAQ 섹션 부재)

## Related Articles (4)

1. 공공기관 생성형 AI 도입의 세 가지 길 — `/resources/learn/public-sector-genai-three-approaches`
2. N²SF 모델 2 완벽 해설 — `/resources/learn/n2sf-model-2-explained`
3. ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까 — `/resources/learn/public-sector-chatgpt-input-guide`
4. 공공기관 외부 LLM 활용 도입 가이드 — `/resources/learn/public-sector-external-llm-adoption-roadmap`
