# 설계 명세서 — chatgpt-teams-ciso-control-gap

## 메타데이터
- **브랜드**: llm-capsule (v6.2)
- **타입**: Learn article (한국어, literal 한국어 원문)
- **컨테이너**: 1080px max-width (article 패턴)
- **URL Slug**: chatgpt-teams-ciso-control-gap
- **카테고리**: 보안 분석
- **예상 읽기 시간**: 14분
- **발행일**: 2026년 5월

## SEO 메타
- **SEO Title**: 삼성도 막지 못한 것 — ChatGPT Teams가 CISO에게 주지 못하는 통제권
- **Meta Description**: ChatGPT Teams의 관리자 콘솔은 사후 가시성은 제공하지만 사전 통제는 제공하지 않습니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 CISO가 직면하는 통제 공백을 분석합니다.
- **OG Title**: 삼성도 막지 못한 ChatGPT 유출, Teams 플랜이라면 막을 수 있었을까
- **OG Description**: 보안팀이 ChatGPT Teams를 도입한 뒤 마주하는 4가지 통제 공백. 사후 가시성과 사전 통제의 차이가 CISO의 책임 구조를 어떻게 가르는지 분석합니다.
- **Canonical**: https://llmcapsule.ai/resources/learn/chatgpt-teams-ciso-control-gap

## 섹션 구조

1. **Hero** (`ds-section--hero`) — 카테고리 배지 + 읽기 시간 + 발행일 + 타이틀(브랜드 컬러 강조) + 디스크립션
2. **TL;DR** (`ds-banner ds-banner--brand`) — 핵심 요약
3. **Lead** (`ds-article-body`) — 도입부 3개 단락
4. **Section 1: 첫 번째 공백 — 입력 단계 통제의 부재** (텍스트 3단락 + 5행 비교 테이블)
5. **Section 2: 두 번째 공백 — 사후 감사의 한계** (텍스트 4단락)
6. **Section 3: 세 번째 공백 — 다중 모델 환경에서의 통제 단편화** (텍스트 1단락 + 6행 비교 테이블 + 1단락)
7. **Section 4: 네 번째 공백 — 책임의 위탁 vs 책임의 이전** (텍스트 4단락)
8. **Section 5: 그렇다면 무엇이 필요한가 — 사전 통제로의 회귀** (텍스트 1단락 + 5행 비교 테이블 + 텍스트 3단락 + 저자 정보)
9. **Related Articles** — 3개 카드(chatgpt-teams-korea-public-sector, public-sector-genai-three-approaches, public-sector-chatgpt-input-guide)
10. **CTA Band** — LLM Capsule 데모 신청 CTA

## 디자인 시스템 매핑

| 요소 | 컴포넌트 |
|------|----------|
| Hero | `ds-section--hero` + `ds-article-hero__*` |
| TL;DR | `ds-banner ds-banner--brand` |
| Article body | `ds-article-body` + `<p>` |
| Section header | `ds-article-section-header` + h2 with `ds-text--brand` highlight |
| Table | `ds-table-wrap` + `ds-table` with highlight column |
| Related cards | `ds-card-grid--3col` + `ds-card ds-card--link` |
| CTA | `ds-cta-band ds-bg--grad-deep` |

## JSON-LD
- BreadcrumbList — 홈 > 리소스 > Learn > 본 글
- Article schema — headline, description, datePublished, dateModified, author(큐빅 보안팀), publisher(LLM Capsule)

## 강조 처리 원칙
- `<strong>`은 원문 그대로 보존
- 제품명 `LLM Capsule`은 `<span class="ds-text--product">LLM Capsule</span>`
- 섹션 헤더 키워드는 `<span class="ds-text--brand">`로 강조
- 테이블의 핵심 컬럼은 `ds-table__th--highlight` 처리 (3번째/마지막 컬럼)

## 테이블 처리

### 테이블 1 (Section 1) — 채널별 통제 방식 비교
- 3 columns: 유출 채널, 일반 기업의 사전 통제 방식, ChatGPT Teams에서의 대응
- highlight: 3번째 컬럼 (ChatGPT Teams 대응)
- 5 rows

### 테이블 2 (Section 3) — 외부 LLM별 통제 가능 여부
- 3 columns: 외부 LLM 서비스, ChatGPT Teams 콘솔 통제 가능 여부, CISO가 별도로 마련해야 하는 통제
- highlight: 2번째 컬럼 (콘솔 통제 가능 여부)
- 6 rows

### 테이블 3 (Section 5) — 사후 vs 사전 통제 비교
- 3 columns: 통제 시점, 사후 가시성 모델, 사전 통제 모델
- highlight: 3번째 컬럼 (사전 통제 모델)
- 5 rows

## CTA Band
- Title: CISO가 입증 가능한 통제 구조, 자사 시스템 내부에서 시작하세요
- Description: 큐빅 LLM Capsule은 온프레미스 배포와 입력 단계 마스킹을 결합한 게이트웨이 솔루션입니다. CISO 관점에서 입증 가능한 통제 지점을 자사 시스템 내부에 두는 구조를 제공합니다.
- Button: 데모 신청하기 → /request-a-demo

## 직전 파일 대비 차이점
- 직전(chatgpt-teams-korea-public-sector)은 5개 섹션 + 5개 테이블
- 본 파일은 5개 섹션 + 3개 테이블 (중간 섹션 2·4는 텍스트 위주)
- 컴포넌트/스타일은 동일 패턴 재사용
