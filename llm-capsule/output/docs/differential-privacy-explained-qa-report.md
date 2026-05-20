# QA Report — differential-privacy-explained

**Date**: 2026-05-20
**Source**: `llm-capsule/input/llmcapsule_260506/learn/learn_post_09_differential_privacy (2).html`
**B-type**: `llm-capsule/output/html/differential-privacy-explained-b-type.html`
**bodyHtml**: `llm-capsule/output/html/differential-privacy-explained-bodyhtml.html`
**TSX**: `llm-capsule/output/framer/learn/DifferentialPrivacyExplained.tsx`
**Result**: **PASS**

---

## CAT-1 내용 무결성 (Critical)

| 검사 항목 | 결과 | 비고 |
|----------|------|------|
| 원문 8개 본문 섹션 모두 반영 (1~8절) | PASS | section-1 ~ section-8 모두 포함 |
| 8개 하위 절(2.1/2.2/2.3, 4.1/4.2/4.3, 5.1/5.2/5.3, 6.1~6.5, 7.1~7.4) 모두 포함 | PASS | ds-section-title-icon h3로 모두 표기 |
| 마스킹 vs DP 비교표 6행 모두 포함 | PASS | section-3 ds-table 6 rows |
| TL;DR 전문 포함 | PASS | section-tldr, N2SF 모델 2 인용까지 |
| Takeaways 9개 항목 모두 포함 | PASS | section-takeaways |
| FAQ 6개 (암호화/품질/엡실론/K-익명성/자체개발/검토 4요소) | PASS | section-faq + FAQPage JSON-LD |
| 미국 인구조사국/Apple/Google/Dwork+Roth 책 모두 포함 | PASS | section-6 5개 subsection |
| 인증 5개 (국정원/GS/ISO 27001/42001/조달청) 모두 포함 | PASS | section-8 ds-bullet--check |
| 참고자료 3개 (Dwork+Roth/US Census/N2SF 1.0) 포함 | PASS | section-references |
| 저자/발행일/수정일 메타 표시 | PASS | ds-author-info |
| N²SF 표기 일관성 | PASS | 본문 12회 모두 N<sup>2</sup>SF 사용 |
| 내부 링크 매핑 | PASS | 원본 sllm-self-build-tradeoff → 우리 사이트 sllm-self-hosted-reality-check |

## CAT-2 DS 준수 (High)

| 검사 항목 | 결과 | 비고 |
|----------|------|------|
| 색상 하드코딩 (hex/rgb 직접 사용) | PASS | :root 토큰 정의 + var(--c-*) / var(--ds-*) 65회 참조 |
| `!important` 사용 | PASS | 0건 |
| 인라인 style="..." (CSS 변수 전달 외) | PASS | 인라인 style 없음 |
| 브랜드 폰트 — Oxanium 폐기, Inter 통일 | PASS | --f-display: Inter |
| 컨테이너 max-width — 1280px (article 1080px) | PASS | ds-container 1280px / ds-article-container 1080px@1280+ |
| 좌우 padding — 16/32/32/120 | PASS | DS 변수 사용 |
| gradient 버튼 폐기 — solid ink 사용 | PASS | btn--invert만 사용 (CTA 1개) |
| 주황/오렌지 amber caution 한정 | PASS | amber 사용 없음 |
| eyebrow 허용 (12px uppercase primary) | PASS | ds-banner__label에 적용 |
| ds-bullet--check 아이콘 비워둠 | PASS | 모두 `<span class="ds-bullet__icon"></span>` 빈 상태 |
| repeat(N, minmax(0, 1fr)) | PASS | ds-card-grid--3col 적용 |
| 배경 이미지 중복 사용 | PASS | ds-bg--grad-deep 1회만 (CTA) |
| Hero 페이지 최상단 padding 100px | PASS | ds-section--hero 100px |
| 미색 배경 (ds-section--light) 금지 | PASS | 모든 섹션 white 또는 brand-soft (banner) |
| CSS 변수 미정의 참조 | PASS | --c-* 및 --ds-* 모두 :root 정의됨 |

## CAT-3 코드 품질 (Medium)

| 검사 항목 | 결과 | 비고 |
|----------|------|------|
| `<section id="section-N">` 부여 | PASS | section-hero/tldr/1~8/takeaways/faq/references/related/cta — 15개 |
| 시맨틱 태그 — main/section/article/h1~h3 | PASS | main 1개 + section 15개 + h1 1 + h2 12 + h3 19 |
| HTML 유효성 — 미닫힘 태그 | PASS | 모든 section/div/ul/li 닫힘 확인 |
| BreadcrumbList JSON-LD | PASS | 4 items, position 1~4 |
| FAQPage JSON-LD | PASS | 6 Question + acceptedAnswer 모두 포함 |
| canonical / og 메타 | PASS | https://llmcapsule.ai/resources/learn/differential-privacy-explained |
| 외부 폰트 preconnect | PASS | googleapis + gstatic crossorigin |
| sup 텍스트 (N²SF) | PASS | h1/h2/h3/p 모두 sup 정렬 CSS 적용 |

## CAT-4 반응형 (High)

| 검사 항목 | 결과 | 비고 |
|----------|------|------|
| 4단계 breakpoint — mobile/768/1024/1440 | PASS | h1/h2/h3 모두 4단계, ds-container 1440 max-width |
| ds-article-container 1080px @1280+ | PASS | 720 → 860 → 1080 단계 적용 |
| Hero description max-width 860px | PASS | ds-article-hero__description |
| CTA band 모바일 36px → 768+ 40px → 1440+ 50px | PASS | --ds-text-4xl/5xl/6xl 토큰 사용 |
| 모바일 배경 이미지 차단 | PASS | @media (max-width: 767px) .ds-bg--grad-deep { background-image: none } |
| Table overflow-x scroll + scrollbar hidden | PASS | .ds-table-wrap에 overflow-x:auto + scrollbar-width:none + ::-webkit-scrollbar hide |
| ds-card-grid--3col 768 2col / 1024 3col | PASS | minmax(0, 1fr) 사용 |

## TSX 검증

| 검사 항목 | 결과 | 비고 |
|----------|------|------|
| build-learn-tsx.py 실행 성공 | PASS | DifferentialPrivacyExplained.tsx 53.8KB 생성 |
| Props 완전성 — backLabel/backHref/title/lead/category/readTime/dateUpdated/tldrLabel/tldrBody/bodyHtml/canonicalUrl/datePublished/dateModified/inLanguage/breadcrumbLabel/faqJsonLd/relatedSectionLabel/related1~4Title+Href | PASS | LearnArticle.tsx 표준 Props 26개 모두 포함 |
| addPropertyControls defaultValue 전문 | PASS | bodyHtml 17KB + 전체 메타 모두 전달 |
| 내부 링크 .html 확장자 | PASS | 0건 |
| `/resources/learn/` 상대경로 | PASS | n2sf-model-2-explained / what-is-n2sf / sllm-self-hosted-reality-check |

## 결론

**PASS** — 변환 완료. 후속 결함 없음. 모든 카테고리 검증 통과.
- 원본 텍스트/표/리스트/메타데이터 무손실 반영
- DS v6.2 토큰 사용 일관
- N²SF 표기 12회 모두 sup 적용
- LearnArticle 표준 Props 패턴 적용
- viewer STATIC_DATA 항목 추가 완료

배포 진행.
