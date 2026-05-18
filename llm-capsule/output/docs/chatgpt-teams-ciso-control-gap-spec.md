# 설계 명세서 — chatgpt-teams-ciso-control-gap (revised)

## 메타데이터
- **브랜드**: llm-capsule (v6.2)
- **타입**: Learn article (한국어, literal 한국어 원문)
- **컨테이너**: 1080px max-width (article 패턴)
- **URL Slug**: chatgpt-teams-ciso-control-gap
- **카테고리**: 보안 분석
- **예상 읽기 시간**: 14분
- **발행일**: 2026년 5월

## 변경 요약 (revised 반영)
- 단정적 헤드라인 표현 제거 — 톤다운된 헤드라인/메타로 교체
- 본문 어조: 단정적 → 분석적·중립적 (예: "제공하지 않습니다" → "다른 영역입니다", "CISO" → "보안팀" 등 일부 완화)
- 본문 길이 183줄 → 196줄, 단락 일부 보강
- 마지막 외부 솔루션 소개 단락(hr 아래) 추가: 큐빅 인증(조달청 혁신제품, GS 1등급, ISO 27001, ISO 42001, KISA 보안기능확인서)

## SEO 메타 (갱신)
- **SEO Title**: ChatGPT Teams가 CISO에게 주지 못하는 통제권 — 사후 가시성과 사전 통제의 차이
- **Meta Description**: ChatGPT Teams의 관리자 콘솔은 사후 가시성을 제공하지만 사전 통제는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 보안팀이 마주하는 통제 공백을 분석합니다.
- **OG Title**: ChatGPT Teams의 관리자 콘솔, CISO에게 충분한가
- **OG Description**: 사후 가시성과 사전 통제의 차이가 보안팀의 책임 구조를 어떻게 가르는지 정리합니다.
- **Canonical**: https://llmcapsule.ai/resources/learn/chatgpt-teams-ciso-control-gap

## H1
- **현재**: ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것

## 섹션 구조 (revised 본문 기준)

1. **Hero** (`ds-section--hero`) — 카테고리 배지 + 읽기 시간 + 발행일 + 타이틀(브랜드 컬러 강조) + 디스크립션
2. **TL;DR** (`ds-banner ds-banner--brand`) — 핵심 요약 (revised 톤다운)
3. **Lead** (`ds-article-body`) — 도입부 3개 단락 (삼성 사례 → 자연스러운 질문 → 글의 범위)
4. **Section 1: 입력 단계 통제 — 콘솔이 다루지 않는 영역** (텍스트 4단락 + 5행 비교 테이블 + 마무리 1단락)
5. **Section 2: 사후 감사 — 외부 로그의 한계** (텍스트 4단락)
6. **Section 3: 다중 모델 환경에서의 통제 일관성** (텍스트 2단락 + 6행 비교 테이블 + 마무리 1단락)
7. **Section 4: 위탁과 책임의 구분** (텍스트 3단락 + 3개 불릿 + 마무리 1단락)
8. **Section 5: 사전 통제 모델이 필요한 이유** (텍스트 2단락 + 5행 비교 테이블 + 텍스트 2단락 + 참고 자료 ul + 저자 정보)
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
- BreadcrumbList — 홈 > 리소스 > Learn > 본 글 (갱신: "ChatGPT Teams의 관리자 콘솔, CISO에게 충분한가")
- Article schema — headline, description, datePublished(2026-05-01), dateModified(2026-05-18), author(큐빅 정책 분석팀), publisher(LLM Capsule)
- headline: "ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것"

## 강조 처리 원칙
- `<strong>`은 원문 그대로 보존
- 제품명 `LLM Capsule`은 `<span class="ds-text--product">LLM Capsule</span>`
- 섹션 헤더 키워드는 `<span class="ds-text--brand">`로 강조
- 테이블의 핵심 컬럼은 `ds-table__th--highlight` 처리

## 테이블 처리

### 테이블 1 (Section 1) — 채널별 사전 통제 방식
- 2 columns: 유출 채널, 일반적 사전 통제 방식
- 5 rows (외부 LLM 인터페이스는 highlight 없이 마지막 행으로)
- 비교 강조를 위해 ChatGPT Teams 대응 컬럼 추가하여 3컬럼화 (기존 B-type 패턴 재사용, 톤다운 본문 의도와 일치)

### 테이블 2 (Section 3) — 외부 LLM별 통제 가능 여부
- 2 columns: 외부 LLM 서비스, ChatGPT Teams 콘솔로 통제 가능
- 6 rows
- highlight: 2번째 컬럼

### 테이블 3 (Section 5) — 사후 가시성 vs 사전 통제 결합 모델
- 3 columns: 통제 시점, 사후 가시성 중심 모델, 사전 통제 결합 모델
- 5 rows (입력 전, 전송, 응답 수신, 로그, 사고 발생 시)
- highlight: 3번째 컬럼

## 참고 자료 ul (신규)
- 개인정보보호위원회, 「개인정보보호법」 및 시행령
- 부정경쟁방지 및 영업비밀보호에 관한 법률
- OpenAI, "ChatGPT Enterprise & Teams" 보안 관련 공개 자료

## CTA Band
- Title: CISO가 입증할 수 있는 통제 구조, 자사 시스템 내부에서 시작하세요
- Description: 큐빅 LLM Capsule은 외부 LLM(ChatGPT·Claude·Gemini 등) 앞단에 배치되는 차등정보보호 기반의 자동 가명화 보호 레이어입니다. 입력 정보를 가명 처리한 뒤 외부 LLM에 전송하고 응답을 내부망에서 복원합니다.
- Button: 데모 신청하기 → /request-a-demo

## 톤 가이드 (revised)
- 단정형 → 분석형 변환: "~합니다" 유지하되 결론 단정은 "검토 지점입니다" / "추가 검토가 필요한 영역입니다"로 완화
- "CISO" 단독 사용 → 일부는 "보안팀"으로 자연스럽게 교체
- "막을 수 없었습니다" 같은 단정 결론 제거 → "사후 가시성에 치우쳐 있다는 점이 핵심입니다"
