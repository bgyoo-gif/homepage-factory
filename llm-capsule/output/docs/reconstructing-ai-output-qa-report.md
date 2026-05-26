# reconstructing-ai-output — QA Report

Status: **PASS**
Brand: llm-capsule (v6.2)
Date: 2026-05-26

## CAT-1 내용 무결성 (Critical)
- [PASS] 원본 9개 본문 섹션 (1 ~ 8 + intro) 전부 변환
- [PASS] TL;DR 원문 전문 보존
- [PASS] 8개 Key Takeaways 모두 보존
- [PASS] 6개 FAQ Q&A 모두 보존 (JSON-LD + accordion 양쪽)
- [PASS] 메타 (title/description/keywords/canonical) 원문 일치
- [PASS] BreadcrumbList + FAQPage JSON-LD 보존

## CAT-2 DS 준수 (High)
- [PASS] 색상 하드코딩 없음 — `var(--c-*)` / `var(--ds-*)` 사용
- [PASS] !important 없음
- [PASS] 인라인 style: CTA 다크 배경의 CSS-var 색상 전달 목적으로만 사용 (`color: var(--c-bg)`)
- [PASS] Hero — 가이드 패턴 적용 (back → title → description → meta)
- [PASS] meta-sep (4px dot) 사용
- [PASS] "Updated May 2026" 접두사 적용
- [PASS] Related — `ds-related-section` 가이드 패턴 (label + minimal cards, no badge, no Read text)
- [PASS] Capsule v6.2: Inter + JetBrains Mono, Oxanium 미사용, max-width 1280px
- [PASS] ds-bullet--check 아이콘 비어있음 (CSS ::before 자동 생성)
- [PASS] grid `minmax(0, 1fr)` 사용 (3col)
- [PASS] overflow-x: auto 동반 scrollbar-width: none (figure SVG, accordion 등)
- [PASS] background-image 모바일 비활성화 (.ds-bg--grad-deep)

## CAT-3 코드 품질 (Medium)
- [PASS] section id="section-N" 15개 모두 존재 (hero, tldr, 1~8, takeaways, faq, author, related, cta)
- [PASS] 시맨틱 태그 (main / section / article 구조 적절)
- [PASS] aria-labelledby, role="img" (SVG figure)
- [PASS] aria-hidden="true" (meta-sep, card-arrow)

## CAT-4 반응형 (High)
- [PASS] 4단계 breakpoint: 375 / 768 / 1024 / 1440
- [PASS] container padding 16 / 32 / 32 / 120
- [PASS] article-container max-width: 720 / 860 / 1080
- [PASS] ds-cta-band max-width 1280 + center align
- [PASS] mobile (max-width: 767px) — CTA actions stack, btn full width, bg-image none

## 내부 링크 감사
- 모든 내부 링크 절대 path (`/`로 시작), `.html` 확장자 없음
- 외부 링크: fonts.googleapis.com (preload), canonical URL only

## 결함
- 없음

## TSX
- `python3 scripts/build-learn-tsx.py` 통해 자동 생성: `ReconstructingAiOutput.tsx` (51.1 KB)
- LearnArticle 패턴 사용 — Props 완전성 가이드 자동 적용
- Learn index에 자동 동기화됨 (ARTICLE_INDEX_META 추가)
