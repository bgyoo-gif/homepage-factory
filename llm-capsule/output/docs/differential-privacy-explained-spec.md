# Spec — differential-privacy-explained (LLM Capsule Learn Article)

**Source**: `llm-capsule/input/llmcapsule_260506/learn/learn_post_09_differential_privacy (2).html`
**Slug**: `differential-privacy-explained`
**Title**: 차등정보보호란 무엇인가 — 1분 요약부터 수학적 원리까지
**Path**: `/resources/learn/differential-privacy-explained`
**Author**: 큐빅 정책 분석팀
**Published**: 2026년 5월
**Read Time**: 11분 읽기
**Category**: 기술 해설
**inLanguage**: ko-KR

## 페이지 타입
Learn article. 1080px max-width 컨테이너. v6.2 토큰. 별도 LearnArticle TSX 컴포넌트로도 변환 예정.

## DS 토큰
- **컨테이너 max-width**: `.ds-article-container` — 1280px 이상에서 1080px
- **폰트**: Inter (`--f-display`) + JetBrains Mono (`--f-mono`) — Capsule v6.2 (Oxanium 폐기)
- **컬러**: `--c-primary: #5b4fe9`, `--c-ink: #0f1130`, `--c-ink-soft: #3a3d5e`, `--c-muted: #6b7280`, `--c-rule: #e5e7eb`
- **악센트**: `--c-teal`(차등정보보호 brand), `--c-amber`(caution), `--c-coral`(critical)
- **N2SF 표기**: `N<sup>2</sup>SF` 모든 본문/heading/FAQ 적용 — body 텍스트와 시각적 일관성

## 섹션 구조
| # | 섹션 | ID | DS 컴포넌트 |
|---|------|-----|------------|
| 1 | Hero (breadcrumb + meta + h1 + lead) | section-hero | ds-section--hero / ds-article-hero |
| 2 | TL;DR | section-tldr | ds-banner ds-banner--brand |
| 3 | 1. 차등정보보호란 — 한 줄로 | section-1 | ds-article-section-header + body |
| 4 | 2. 직관적 이해 — 평균 연봉 공개 사례 | section-2 | header + 3 subsections (2.1 / 2.2 / 2.3) + ds-bullet--dot |
| 5 | 3. 마스킹과 무엇이 다른가 | section-3 | header + ds-table (6 rows) |
| 6 | 4. 수학적 원리 | section-4 | header + 3 subsections (4.1 / 4.2 / 4.3) + ds-bullet--dot |
| 7 | 5. 운영상 고려사항 — ε budget과 적용 한계 | section-5 | header + 3 subsections (5.1 / 5.2 / 5.3) + ds-bullet--dot |
| 8 | 6. 누가 실제로 사용하고 있는가 | section-6 | header + 5 subsections (6.1~6.5) |
| 9 | 7. 공공기관 LLM 활용에 어떻게 연결되는가 | section-7 | header + 4 subsections (7.1~7.4) + ds-bullet--number(steps) |
| 10 | 8. 큐빅 LLM Capsule의 차등정보보호 적용 | section-8 | header + body + ds-bullet--check (인증 5개) |
| 11 | 핵심 정리 (Takeaways) | section-takeaways | ds-banner--brand + ds-bullet--dot (9 items) |
| 12 | 자주 묻는 질문 (FAQ) | section-faq | ds-ac-list — 6 ds-ac-card |
| 13 | 참고 자료 (References) | section-references | header + ds-bullet--dot + ds-author-info |
| 14 | 함께 읽으면 좋은 글 | section-related | ds-card-grid--3col (3 cards) |
| 15 | CTA Band | section-cta | ds-cta-band ds-bg--grad-deep |

## 핵심 디자인 결정
1. **N²SF 표기**: 모든 본문에 `N<sup>2</sup>SF` 사용 (Unicode N² 대신). 검색 일관성·접근성·sup 시각 정렬을 위함.
2. **표(Compare Table)**: 마스킹 vs 차등정보보호 6행 비교 — 차등정보보호 컬럼은 `ds-table__td--primary`로 강조 (primary-soft 배경 + ink 텍스트).
3. **N2SF 모델 2 적용 흐름**: 7.2의 5단계 흐름은 `ds-bullet--number`로 시각화.
4. **수학 기호**: 엡실론(ε) 본문 내 inline 표기. mono 폰트는 없음 (산문체 유지).
5. **인증 5개**: 8절의 인증 목록은 `ds-bullet--check`로 처리 (teal `\2713`).
6. **FAQ 6개**: 모두 ds-ac-card로. 첫 번째만 `ds-ac--open` 디폴트 오픈.
7. **Related 3개**: n2sf-model-2-explained / what-is-n2sf / sllm-self-hosted-reality-check (서로 dependency 있는 글).

## 내부 링크 (Framer 상대경로 필수, .html 확장자 금지)
- `/resources/learn/n2sf-model-2-explained` (본문 7.1 + Related)
- `/resources/learn/what-is-n2sf` (Related)
- `/resources/learn/sllm-self-hosted-reality-check` (본문 미참조, Related 포함; 원본의 sllm-self-build-tradeoff slug 매핑 — 우리 사이트 슬러그는 sllm-self-hosted-reality-check)
- `/resources/learn/public-sector-chatgpt-input-guide` (원본의 public-sector-chatgpt-input-guide 그대로)
- `/request-a-demo` (CTA)

원문에 있던 `/learn/sllm-self-build-tradeoff` 슬러그는 우리 사이트의 `sllm-self-hosted-reality-check`로 매핑. FAQ "공공기관에서 차등정보보호를 도입하려면 자체 개발해야 하나요?" 답변 내 링크도 동일하게 변경.

## 변환 시 주의
- 원본 `class="article-meta__chip"` "기술 해설" → `ds-badge ds-badge--primary`
- 원본 `class="article-hero__lead"` → `ds-article-hero__description`
- 원본 `class="tldr"` → `ds-banner ds-banner--brand` (TL;DR 라벨은 ds-banner__label)
- 원본 `class="compare-table"` → `ds-table` + 차등정보보호 컬럼에 `ds-table__td--primary`
- 원본 `class="takeaways"` → `ds-banner ds-banner--brand` + 라벨 "핵심 정리"
- 원본 `class="related"` → `ds-card-grid ds-card-grid--3col` + ds-card--link
- 원본 `class="cta-strip"` → `ds-cta-band ds-bg--grad-deep` + ds-btn btn--invert
- 원본 `class="article-meta__date"` "2026년 5월" → `ds-article-hero__date`
- 원본 `class="article-meta__time"` "예상 읽기 시간 11분" → `ds-article-hero__reading-time`
- 4.3 "노이즈 분포(라플라스/가우시안)" 본문 ul → `ds-bullet--dot`
- 5.2 "별도 메커니즘 (Exponential / Local DP / DP-SGD)" 본문 ul → `ds-bullet--dot`
- 5.3 "LLM 환경 적용 방향 2가지" 본문 ul → `ds-bullet--dot`
- 7.2 "5단계 흐름" 본문 ol → `ds-bullet--number`
- 7.4 "함께 검증할 4가지" 본문 ul → `ds-bullet--check`
- 8. 인증 5개 ul → `ds-bullet--check`
- 2.1 "결합 식별 위험을 만드는 3가지 정보" ul → `ds-bullet--dot`
- 2.3 "노이즈 설계 3요소" ul → `ds-bullet--dot`
- 4.1 "엡실론 의미 2가지" ul → `ds-bullet--dot`
- 7.3 "마스킹 vs 차등정보보호" 2-item ul → `ds-bullet--dot`

## 메타 / JSON-LD
- canonical: `https://llmcapsule.ai/resources/learn/differential-privacy-explained`
- og:locale: ko_KR
- BreadcrumbList: 홈 → 리소스 → Learn → 차등정보보호란 무엇인가
- FAQPage: 6 QA pairs (5.1.1 ε budget 등)

## bodyHtml (TSX Props용)
별도 `differential-privacy-explained-bodyhtml.html` 파일 생성 — section 3~13까지를 plain HTML(`h2/h3/p/ul/ol/table/strong/em/sup/a`)로 추출. Hero / TL;DR / Related / CTA는 LearnArticle.tsx가 별도 Props로 받음.

## QA Check
- 인증 항목 누락 없음 (5개)
- 마스킹 vs DP 비교표 6행 모두 포함
- 미국 인구조사국 / Apple / Google / Dwork 1편의 책 모두 포함
- FAQ 6개 모두 포함 (질문 + 답변 풀텍스트)
- 인용된 자료 3개 (Dwork+Roth 책 / US Census 2020 / N2SF 1.0) 참고자료 섹션에 포함
- N²SF 모든 표기에 sup 적용
