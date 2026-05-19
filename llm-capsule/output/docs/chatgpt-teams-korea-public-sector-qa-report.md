# chatgpt-teams-korea-public-sector — QA Report (revised)

> Date: 2026-05-18
> Brand: llm-capsule
> DS: design-system-core.md + design-system-capsule.md (v6.2)
> Source: `llm-capsule/input/llmcapsule_260506/learn/article_public_sector_revised.html`
> Output: `llm-capsule/output/html/chatgpt-teams-korea-public-sector-b-type.html`

---

## Result: **PASS**

| 카테고리 | 결과 | 비고 |
|---------|------|------|
| CAT-1 내용 무결성 | PASS | revised 본문 모든 핵심 문구·표·옵션 A/B/C 보존 |
| CAT-2 DS 준수 | PASS | 색상 하드코딩 0건, !important 0건, 인라인 style 0건 |
| CAT-3 코드 품질 | PASS | section id 11개 모두 부여, 시맨틱 태그 사용, HTML 유효 |
| CAT-4 반응형 | PASS | mobile/tablet/sm-desktop/desktop 4단계 모두 정의, 1280px max-width, 1080px article container |

---

## CAT-1 내용 무결성 (Critical)

### 메타데이터 — revised 반영 확인

| Field | 결과 |
|-------|------|
| SEO Title — "...적합성 검토" (이전 "적용성 분석" 변경) | OK |
| Meta Description — "어떤 빈틈을 가지는지" + "적합성을 짚고" | OK |
| OG Title — "한국 규제 환경 적합성 분석" (이전 "감사에서 살아남을 수 있을까" 변경) | OK |
| OG Description — "학습 미사용 약속과 국외이전은 다른 개념" (톤다운) | OK |
| JSON-LD Article description — revised 메타와 일치 | OK |
| dateModified — 2026-05-18 (revised 갱신일) | OK |

### 본문 핵심 문구 — revised 반영 확인 (grep)

| 문구 | 결과 |
|------|------|
| "보안 기술 수준 자체는 분명히 진일보" | 1건 |
| "한국 공공 영역의 규제·평가 환경에서 운용 가능한가" | 1건 |
| "받지 않은 것으로 보입니다" (톤다운: 단정 → 신중) | 1건 |
| "서로 다른 차원" (revised: 기존 "전혀 다른 차원" → "서로 다른") | 1건 |
| "구체적이고 분리된 동의" | 1건 |
| "C (Classified)" + "S (Sensitive)" + "O (Open)" — N2SF 등급 체계 갱신 (TS→O) | 각 2건 |
| "모델 1은 내부망 폐쇄형" + "모델 2에 해당합니다" — 모델 1/2/3 개념 도입 | 각 1건 |
| "옵션 A — CSAP" + "옵션 B — 자체 sLLM" + "옵션 C — 외부 LLM" | 각 1건 |
| "그 정리 결과 자체가 경영평가 가점" — 결론 단락 | 1건 |

### 구조적 변화 (revised에 맞춰 갱신)

1. **N2SF 등급 체계**: C/S/TS → **C/S/O** (Open 등급 추가, TS 삭제)
2. **N2SF 모델 도입**: 모델 1(내부망 폐쇄)/모델 2(외부 상용)/모델 3(하이브리드) 개념 추가
3. **국외이전 표 축소**: 5행 → **3행** (적용 범위 / 데이터 위치 / 법적 함의)
4. **N2SF 표 갱신**: 등급 × 모델 2 활용 가능성 × ChatGPT Teams 활용 시 검토 사항 (3행)
5. **섹션 7 제목**: "감사 관점의 역설"(공격적) → **"경영평가 가점과 감사 관점"**(중립)
6. **섹션 8 제목**: "그렇다면 무엇이 가능할까" → **"그렇다면 어떤 대안이 있을까"**
7. **대안 분석 표 제거**: revised 본문에 표가 없어짐 — 옵션 A/B/C를 단락으로만 서술
8. **참고 자료 섹션 신설**: 5개 출처 불릿
9. **본문 길이**: 179줄 → 155줄 (revised 기준 톤다운/단축)
10. **읽기 시간**: 14분 → **12분**

---

## CAT-2 DS 준수 (High)

| 항목 | 결과 |
|------|------|
| 색상 하드코딩 (hex/rgb를 `:root` 외에서 직접 사용) | 0건 |
| `!important` | 0건 |
| `<body>` 내 인라인 `style` | 0건 |
| 모든 색상 `var(--c-*)` / `var(--ds-*)` 토큰 사용 | OK |
| Oxanium 폰트 미사용 (v6.2 폐기) | OK Inter + JetBrains Mono만 |
| Container max-width 1280px (llm-capsule v6.2) | OK |
| 배경 이미지 절대 URL (cubig/reference/) | OK |
| 모바일 배경 이미지 none | OK `@media (max-width: 767px)` 적용 |

---

## CAT-3 코드 품질 (Medium)

| 항목 | 결과 |
|------|------|
| Section id 부여 (11개 섹션 모두) | OK |
| 시맨틱 태그 (`<main>`, `<section>`, `<nav>`, `<h1>`, `<h2>`, `<table>`, `<thead>`, `<tbody>`) | OK |
| 내부 링크 — `.html` 확장자 0건 | OK |
| 내부 링크 — `/resources/learn/...` 형식 (Framer 상대경로) | OK 6개 모두 |
| JSON-LD BreadcrumbList + Article | OK |
| FAQPage JSON-LD 없음 (이 아티클은 FAQ 부재) | OK |

### 내부 링크 인벤토리

```
/resources/learn/n2sf-model-2-explained
/resources/learn/public-sector-2026-management-evaluation-ai-incentive
/resources/learn/public-sector-chatgpt-input-guide
/resources/learn/public-sector-genai-three-approaches
/resources/learn/sllm-self-hosted-reality-check
/resources/learn/what-is-n2sf
/request-a-demo
```

---

## CAT-4 반응형 (High)

| Breakpoint | 결과 |
|-----------|------|
| Mobile (≤767px) | 16px container padding, 36px CTA title, 배경 이미지 none |
| Tablet (768px+) | 32px container padding, 720px article max-width |
| sm-Desktop (1024px+) | 32px container padding, 860px article max-width |
| Desktop (1440px+) | 120px container padding, 1280px container max-width, 50px CTA title |
| Article container 1280px+ | 1080px max-width (아티클형 페이지 규칙 준수) |

---

## Section Structure

| Section | id | 패턴 |
|---------|----|----|
| Hero | section-hero | ds-section--hero |
| TL;DR | section-tldr | ds-banner--brand |
| Lead | section-lead | ds-article-body |
| 1. CSAP 인증의 적용성 | section-1 | ds-article-section-header |
| 2. 데이터 국외이전과 개인정보보호법 | section-2 | + ds-table (3행) |
| 3. N2SF 등급 체계와의 정합성 | section-3 | + ds-bullet--dot + ds-table (3행) |
| 4. 경영평가 가점과 감사 관점 | section-4 | ds-article-section-header |
| 5. 그렇다면 어떤 대안이 있을까 | section-5 | 옵션 A/B/C 단락 |
| 참고 자료 | section-references | ds-bullet--dot + ds-author-info |
| Related Articles | section-related | ds-card-grid--3col |
| CTA | section-cta | ds-cta-band ds-bg--grad-deep |

---

## Final Verdict

**PASS** — Critical/High 결함 0건. revised 본문 톤다운·구조 변경(N2SF 등급 C/S/O, 모델 1/2/3, 옵션 A/B/C) 모두 반영. 다음 단계: bodyhtml 재추출 + build-learn-tsx.py 엔트리 갱신 + TSX 재빌드.
