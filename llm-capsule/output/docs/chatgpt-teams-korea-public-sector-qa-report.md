# chatgpt-teams-korea-public-sector — QA Report

> Brand: llm-capsule
> Output: `llm-capsule/output/html/chatgpt-teams-korea-public-sector-b-type.html`
> TSX: `llm-capsule/output/framer/learn/ChatgptTeamsKoreaPublicSector.tsx`
> Result: **PASS**

---

## CAT-1 내용 무결성 — PASS

| 항목 | 결과 |
|------|------|
| 원본 `<p>` 단락 24개 모두 보존 | OK (B-type에 28개 — section 분리에 따른 자연 증가) |
| 원본 3개 비교 테이블 모두 보존 | OK |
| key strings 보존 | CSAP(16), N²SF(13), 개인정보보호법(11), 국외이전(11), 하이퍼클로바X(2), 솔라(2), 온프레미스(6), 마스킹(4) |
| `<strong>` 강조 보존 | OK |
| 결론 단락 보존 | OK |

## CAT-2 DS 준수 — PASS

| 항목 | 결과 |
|------|------|
| `!important` 사용 | 0 |
| 인라인 `style="..."` | 0 (초기 1건 → `.ds-table__td-sub` 클래스로 교체) |
| `ds-section--light` 사용 | 0 |
| Oxanium 폰트 | 0 (v6.2 폐기 준수) |
| Orange/Amber hex | `#f59e0b` (capsule v6.2 허용 — `:root` 변수 정의용) |
| 모든 색상 `var(--c-*)` / `var(--ds-*)` | OK |

## CAT-3 코드 품질 — PASS

| 항목 | 결과 |
|------|------|
| Section IDs | section-hero, section-tldr, section-lead, section-1, section-2, section-3, section-4, section-5, section-related, section-cta |
| `<main>` 시맨틱 태그 | OK |
| `<section>` 태그 | OK (모든 섹션) |
| BreadcrumbList JSON-LD | OK |
| Article JSON-LD | OK (headline, datePublished, inLanguage, author, publisher) |
| HTML 유효성 | OK |

## CAT-4 반응형 — PASS

| 항목 | 결과 |
|------|------|
| 4단계 breakpoint (375/768/1024/1440) | 768 5건, 1024 6건, 1440 5건 |
| Container max-width 1280px (capsule v6.2) | OK (2건 — ds-container, ds-cta-band) |
| Article container max-width 1080px | OK |
| Hero `padding: 100px 0` 고정 | OK |
| Mobile (`max-width: 767px`) bg image: none | OK |

## 링크 검증 — PASS

| 항목 | 결과 |
|------|------|
| `.html` 확장자 in `href` | 0 |
| Framer 상대경로 | `/request-a-demo`, `/resources`, `/resources/learn`, `/resources/learn/...` |
| 절대 URL | fonts.googleapis (외부 OK), canonical (메타 OK) |

## TSX 검증 — PASS

| 항목 | 결과 |
|------|------|
| 자동 생성 (build-learn-tsx.py) | OK (34.8 KB) |
| Title Props 한국어 보존 | OK |
| BODY_HTML 단일 backtick 블록 | OK |
| FAQ_JSON_LD | (FAQ 부재로 빈 문자열) |
| inLanguage = "ko-KR" | OK |
| canonicalUrl | OK |
| relatedN Title/Href (4건) | OK |
| footer/GNB 잔여 | 0 (LearnArticle은 본문만 렌더) |

## 결론

**PASS** — 변환 파이프라인 정상 완료. 모든 CAT 통과. 인라인 style 1건은 클래스 추출로 해결.
