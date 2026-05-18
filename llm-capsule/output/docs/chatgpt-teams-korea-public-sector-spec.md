# chatgpt-teams-korea-public-sector-spec.md

> Brand: **llm-capsule**
> Source: `llm-capsule/input/llmcapsule_260506/learn/article_public_sector_revised.html`
> Output: `llm-capsule/output/html/chatgpt-teams-korea-public-sector-b-type.html`
> DS: `design-system-core.md` + `design-system-capsule.md` (v6.2)
> Language: **ko** (Korean) — 원문이 한국어이므로 `<html lang="ko">` 적용
> Revision: 2026-05-18 — 톤다운된 revised 본문 기준으로 재작성

---

## Framer Page Metadata

| Field | Value |
|-------|-------|
| URL Slug | chatgpt-teams-korea-public-sector |
| SEO Title | ChatGPT Teams, 한국 공공기관에서 사용해도 괜찮을까 — CSAP·N²SF 적합성 검토 |
| Meta Description | ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N²SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다. |
| OG Title | 공공기관의 ChatGPT Teams 사용 — 한국 규제 환경 적합성 분석 |
| OG Description | 학습 미사용 약속과 국외이전은 다른 개념입니다. 한국 공공 영역에서 ChatGPT Teams를 검토할 때 짚어야 할 4가지 적합성 질문을 정리합니다. |

---

## Page Overview

| Item | Value |
|------|-------|
| Page type | Learn Article (Single Post) |
| Total sections | 10 (Hero + TL;DR + Lead + 4 body sections + 대안 분석 + 참고 자료 + CTA) |
| Tone | 정책 분석, 적합성 검토 (revised: 톤다운된 중립 톤) |
| Primary action | 데모 신청하기 |
| Secondary action | 관련 글 탐색 |
| Article author | 큐빅 정책 분석팀 |
| Published | 2026년 5월 |
| Reading time | 12분 (revised: 본문 단축) |
| Category chip | 정책 분석 |

---

## Global Rules

- Pattern: 기존 learn article 동일 구조
- All CSS via `var(--ds-*)` / capsule `--c-*` tokens (no hardcoded colors)
- No `!important`, no inline `style` (CSS 변수 전달 제외)
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
| Breadcrumb | 홈 / 리소스 / Learn / 공공기관의 ChatGPT Teams 사용 |
| Category chip | `ds-badge--primary` "정책 분석" |
| Reading time | "예상 읽기 시간 12분" |
| Date | "2026년 5월" |
| Title | `안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까` (brand 강조: "한국 공공 영역") |
| Description | "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N²SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다." |

---

### Section 2: TL;DR — `id="section-tldr"`

| Element | Value |
|---------|-------|
| Pattern | `ds-banner ds-banner--brand` |
| Label | "TL;DR" |
| Body | ChatGPT Teams는 글로벌 기준으로는 진일보한 보안 옵션을 제공합니다. 다만 한국 공공 영역에서는 별도의 적합성 검토가 필요합니다. CSAP 인증의 적용성, 개인정보보호법상 국외이전, N²SF 모델 2 등급 체계, 경영평가·감사 관점 — 네 가지 적합성 지점을 짚습니다. 검토 가능한 대안 방향은 (A) CSAP 인증 국내 LLM, (B) 자체 sLLM 구축(모델 1), (C) 외부 LLM + 보호 레이어 결합 세 가지이며, 기관의 활용 우선순위·운영 역량에 따라 적합성이 달라집니다. |

---

### Section 3: Lead — `id="section-lead"`

원본 도입 3개 단락을 그대로 사용. revised에서 톤다운된 표현(예: "구조적 불일치" → "어떤 접점을 갖는지", "결함 지적이 아니라"의 명시 포함) 유지.

- 단락 1: ChatGPT Teams가 제공하는 보안 옵션 소개, "보안 기술 수준 자체는 분명히 진일보한 형태"
- 단락 2: 별도의 질문 필요 — "보안 기술이 우수한가" vs "한국 공공 영역에서 운용 가능한가"
- 단락 3: 네 가지 적합성 검토 지점 안내 — "결함 지적이 아니라 접점 짚기"

---

### Section 4: CSAP 인증의 적용성 (`id="section-1"`)

| Element | Value |
|---------|-------|
| Section header | `1. <span class="ds-text--brand">CSAP 인증</span>의 적용성` |
| Body | 원본 3개 단락 |
| 핵심 변화 | "받지 않았습니다" → "받지 않은 것으로 보입니다" (톤다운). "감사 시점의 판단이 다를 가능성"으로 표현 완화 |

---

### Section 5: 데이터 국외이전과 개인정보보호법 (`id="section-2"`)

| Element | Value |
|---------|-------|
| Section header | `2. <span class="ds-text--brand">데이터 국외이전</span>과 개인정보보호법` |
| Body | 원본 3개 단락 + 비교 테이블 (3행) + 마무리 1개 단락 |
| Table | "학습 미사용 vs 국외이전" 3행 비교 (revised: 5행 → 3행 축소) — 적용 범위 / 데이터 위치 / 법적 함의. 2번째 컬럼 highlight |
| 핵심 변화 | "법령 위반 소지" → "정보주체 동의·고지 등 의무 발생" (톤다운). "일괄 동의로 갈음 가능한지에 대한 사전 정리가 필요" 추가 |

---

### Section 6: N²SF 등급 체계와의 정합성 (`id="section-3"`)

| Element | Value |
|---------|-------|
| Section header | `3. <span class="ds-text--brand">N²SF 등급 체계</span>와의 정합성` |
| Body | N²SF 소개 단락 + C/S/O 등급 불릿 + 모델 1/2/3 설명 + 모델 2 가이드라인 단락 + 활용 매핑 테이블 (3행) + 실무자 인식 단락 + 관련 글 링크 |
| Bullets | `ds-bullet--dot` — C/S/O 3개 등급 정의 (revised: TS 등급 제거, O 등급 추가) |
| Table | 등급 × 모델 2 활용 가능성 × ChatGPT Teams 검토 사항 — 3행 (C/S/O) |
| 핵심 변화 | revised에서 N²SF 등급 체계가 C/S/TS에서 C/S/O로 변경됨. 모델 1/2/3 개념 도입. ChatGPT Teams = 모델 2 |
| Related links | `/resources/learn/n2sf-explained`, `/resources/learn/n2sf-model-2-explained` |

---

### Section 7: 경영평가 가점과 감사 관점 (`id="section-4"`)

| Element | Value |
|---------|-------|
| Section header | `4. <span class="ds-text--brand">경영평가 가점</span>과 감사 관점` |
| Body | 원본 3개 단락 (2026 경영평가 가점 + AI 윤리·보안 가이드라인 평가 + 도입 방식의 정합성) |
| Related link | `/resources/learn/2026-management-evaluation-ai-incentive` |
| 핵심 변화 | "감사 관점의 역설"(공격적) → "경영평가 가점과 감사 관점" (중립). "감사 리스크로 전환" 표현 제거 |

---

### Section 8: 그렇다면 어떤 대안이 있을까 (`id="section-5"`)

| Element | Value |
|---------|-------|
| Section header | `<span class="ds-text--brand">그렇다면</span> 어떤 대안이 있을까` |
| Body | 도입 1단락 + 옵션 A/B/C 3단락 + 트레이드오프 1단락 + 결론 1단락 |
| 핵심 변화 | revised: 옵션 명명을 A/B/C로 명확화. 옵션 A=CSAP 국내 LLM, 옵션 B=자체 sLLM(모델 1), 옵션 C=외부 LLM + 보호 레이어. 비교 테이블 제거됨 (revised 본문에 없음) |
| Related links | `/resources/learn/sllm-self-build-tradeoff`, `/resources/learn/public-sector-ai-three-paths` |

---

### Section 9: 참고 자료 (`id="section-references"`)

| Element | Value |
|---------|-------|
| Section header | `참고 자료` |
| Body | 5개 참고 자료 불릿 |
| References | 국정원 N²SF 보안 가이드라인, 기재부 2026 경영평가편람, 행안부 2026 지방공기업 경영평가편람, KISA CSAP 안내, OpenAI ChatGPT Enterprise & Teams 공개 자료 |

---

### Section 10: CTA — `id="section-cta"` — Framer 상대경로 `/request-a-demo`

기존 learn article 패턴 동일. `ds-cta-band ds-bg--grad-deep` 사용.

| Element | Value |
|---------|-------|
| Title | 한국 공공 영역에 맞는 LLM 도입을 검토하시나요? |
| Description | 큐빅 LLM Capsule은 차등정보보호 기반의 자동 가명화 보호 레이어로, 옵션 C(외부 LLM + 보호 레이어) 형태의 솔루션입니다. 조달청 혁신제품 지정, GS 1등급, ISO 27001, ISO 42001, KISA 보안기능확인서 등을 보유하고 있습니다. |
| Button | 데모 신청하기 → |

---

## JSON-LD

- BreadcrumbList (4 items: 홈 / 리소스 / Learn / 페이지 제목)
- Article schema:
  - headline = "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까"
  - description = revised meta description
  - datePublished = 2026-05-01
  - dateModified = 2026-05-18 (revised 갱신일)
  - inLanguage = ko-KR
  - author = 큐빅 정책 분석팀
  - publisher = LLM Capsule
- FAQPage 없음

---

## Related Articles (4)

1. 공공기관 생성형 AI 도입의 세 가지 길 — `/resources/learn/public-sector-genai-three-approaches`
2. N²SF 모델 2 완벽 해설 — `/resources/learn/n2sf-model-2-explained`
3. ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까 — `/resources/learn/public-sector-chatgpt-input-guide`
4. 공공기관 외부 LLM 활용 도입 가이드 — `/resources/learn/public-sector-external-llm-adoption-roadmap`
