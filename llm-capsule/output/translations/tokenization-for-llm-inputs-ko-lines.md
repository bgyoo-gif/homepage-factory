# Tokenization for LLM Inputs — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
LLM 입력을 위한 토큰화: AI가 보지 않고 읽는 방법

The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.
프로덕션에서 LLM 이전 토큰화가 작동하게 만드는 아키텍처 결정들 — 결정적 vs 무작위, 형식 보존, 매핑 저장, 그리고 팀이 배포 전에 해결해야 할 질문들.

AI Architecture
AI 아키텍처

~9 min read
약 9분 읽기

Updated May 2026
2026년 5월 업데이트

## Section 02: TL;DR

TL;DR
TL;DR

Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.
LLM 이전 토큰화는 엔터프라이즈 문서가 민감한 내용을 노출하지 않고 외부 모델로 경계를 넘을 수 있게 해주는 치환 단계입니다. 의미론적 공개 없이 LLM에 참조적 무결성을 제공하는 방식으로 작동합니다. 모델이 기저 신원을 복원하지 않고도 문서 전체에서 일관되게 추론할 수 있는 플레이스홀더를 제공합니다. 프로덕션 수준의 구현은 아키텍처 질문들을 명시적으로 해결해야 합니다. 결정적 vs 무작위(문서 간 연결 vs 재식별 표면), 형식 보존 vs 마커 방식(출력 품질 vs 단순성), 매핑의 위치(독점적 엔터프라이즈 통제는 협상 불가), 언급 간 엔티티 해소, 그리고 토큰화하지 않아야 할 것. 대부분의 워크플로우에는 토큰화만으로 충분합니다. 고카디날리티 데이터, 긴 시계열, 또는 심층 방어 태세의 경우 통계적 보호(차분 프라이버시, k-익명성)가 위에 추가됩니다. 민감한 것의 정의는 대부분의 팀이 초기에 충분히 투자하지 않는 레이어이며, 장기 운영 비용의 대부분이 이곳에 있습니다.

## Section 03: Article Body

### 1. What Tokenisation Actually Does in This Context

1. 이 맥락에서 토큰화가 실제로 하는 일

The transformation step that sits between an enterprise document and an external LLM is, conceptually, simple: identify the elements that can't cross the boundary, replace them with placeholders that preserve their structural role, send the result to the model. In practice, the simplicity hides a set of architectural decisions that determine whether the approach works at production scale or breaks under load.
엔터프라이즈 문서와 외부 LLM 사이에 위치한 변환 단계는 개념적으로 단순합니다. 경계를 넘을 수 없는 요소를 식별하고, 구조적 역할을 보존하는 플레이스홀더로 교체하고, 결과를 모델에 전송합니다. 실제로는 이 단순함 뒤에 접근 방식이 프로덕션 규모에서 작동할지 부하 하에서 깨질지를 결정하는 아키텍처 결정들이 숨어 있습니다.

This article walks through those decisions. It is not a tutorial on a specific library or product. It is the set of choices any team adopting pre-LLM tokenisation has to make explicit, with the trade-offs each choice carries.
이 아티클은 그 결정들을 하나씩 살펴봅니다. 특정 라이브러리나 제품에 대한 튜토리얼이 아닙니다. LLM 이전 토큰화를 도입하는 모든 팀이 명시적으로 해야 하는 선택들과 각 선택이 수반하는 트레이드오프입니다.

The term tokenisation is used here in the data-protection sense — replacing sensitive values with non-sensitive placeholders that can be mapped back — not in the NLP sense, where it means splitting text into subword units for model input. The two share a word and almost nothing else.
여기서 토큰화라는 용어는 데이터 보호 의미로 사용됩니다. 민감한 값을 다시 매핑할 수 있는 비민감 플레이스홀더로 교체하는 것을 의미하며, 모델 입력을 위해 텍스트를 서브워드 단위로 분할하는 NLP 의미가 아닙니다. 두 용어는 단어를 공유하지만 거의 아무것도 공유하지 않습니다.

A related note on terminology: in CUBIG's architecture, tokenisation is the core substitution mechanism inside a broader encapsulation layer that also includes detection, format preservation, and optional statistical protections. This article focuses on the tokenisation mechanism specifically — the design decisions are largely the same whether the implementation calls itself tokenisation, encapsulation, or any of the other names used in the field.
용어에 관한 관련 메모: CUBIG의 아키텍처에서 토큰화는 감지, 형식 보존, 선택적 통계적 보호도 포함하는 더 넓은 캡슐화 레이어 내의 핵심 치환 메커니즘입니다. 이 아티클은 토큰화 메커니즘에 특별히 집중합니다. 구현이 스스로를 토큰화, 캡슐화, 또는 해당 분야에서 사용되는 다른 이름으로 부르든 설계 결정은 대체로 동일합니다.

When an enterprise document is prepared for an external LLM, the goal is that the model sees a version of the document that retains everything it needs for the task and removes everything the boundary was set up to keep in. Tokenisation is the mechanism that achieves the second half: identifying sensitive elements and substituting placeholders.
엔터프라이즈 문서가 외부 LLM을 위해 준비될 때, 목표는 모델이 작업에 필요한 모든 것을 유지하고 경계가 내부에 두도록 설정된 모든 것을 제거한 문서 버전을 보는 것입니다. 토큰화는 두 번째 절반을 달성하는 메커니즘입니다. 민감한 요소를 식별하고 플레이스홀더로 치환합니다.

A useful frame: the LLM doesn't need to know that the customer is named Marlene Schmidt. It needs to know that there is a customer, that the customer is referenced in three different places in the document, and that the references all point to the same entity. A token like CUST-7F2A carries the same information — a referenceable entity that appears in multiple places consistently — without carrying the identity.
유용한 프레임: LLM은 고객의 이름이 Marlene Schmidt라는 것을 알 필요가 없습니다. 고객이 있다는 것, 고객이 문서의 세 곳에서 참조된다는 것, 모든 참조가 동일한 엔티티를 가리킨다는 것을 알아야 합니다. CUST-7F2A 같은 토큰은 신원을 담지 않고 동일한 정보를 전달합니다. 여러 곳에 일관되게 나타나는 참조 가능한 엔티티.

That is the core property tokenisation provides: referential integrity without semantic disclosure. The model can reason about "the customer" across a document because the token threads through the document consistently. The model cannot recover the identity because the token doesn't encode it.
이것이 토큰화가 제공하는 핵심 속성입니다. 의미론적 공개 없는 참조적 무결성. 토큰이 문서 전체에 일관되게 이어지기 때문에 모델은 문서 전반에 걸쳐 "고객"에 대해 추론할 수 있습니다. 토큰이 신원을 인코딩하지 않기 때문에 모델은 신원을 복원할 수 없습니다.

Everything else in this article is variations on how that property is implemented, and what additional properties layer on top of it.
이 아티클의 나머지 모든 내용은 그 속성이 구현되는 방식의 변형과, 그 위에 어떤 추가 속성이 쌓이는지에 관한 것입니다.

[SVG Figure 1 텍스트 번역]

Title: Referential integrity without semantic disclosure
제목: 의미론적 공개 없는 참조적 무결성

Description: A diagram showing a source document where the same customer is referenced three different ways, all resolved to a single consistent token in the version the LLM sees, with the mapping table held inside the enterprise.
설명: 동일한 고객이 세 가지 다른 방식으로 참조된 소스 문서를 보여주는 다이어그램. LLM이 보는 버전에서는 모두 하나의 일관된 토큰으로 해소되며, 매핑 테이블은 엔터프라이즈 내부에 보관됩니다.

SOURCE DOCUMENT
소스 문서

Header: Customer Marlene Schmidt called regarding account dropouts.
헤더: 고객 Marlene Schmidt가 계정 이탈에 관해 연락했습니다.

Agent note: "Mr Schmidt reports the issue started last Tuesday."
상담원 메모: "Schmidt 씨가 지난 화요일부터 문제가 시작되었다고 보고했습니다."

Resolution: "Marlene confirmed service restored after firmware roll-back."
해결: "Marlene이 펌웨어 롤백 후 서비스 복원을 확인했습니다."

Entity resolution
엔티티 해소

Tokenisation
토큰화

WHAT THE LLM SEES
LLM이 보는 것

Header: Customer CUST-7F2A called regarding account dropouts.
헤더: 고객 CUST-7F2A가 계정 이탈에 관해 연락했습니다.

Agent note: "CUST-7F2A reports the issue started last Tuesday."
상담원 메모: "CUST-7F2A가 지난 화요일부터 문제가 시작되었다고 보고했습니다."

Resolution: "CUST-7F2A confirmed service restored after firmware roll-back."
해결: "CUST-7F2A가 펌웨어 롤백 후 서비스 복원을 확인했습니다."

TOKEN ↔ VALUE MAPPING · enterprise only
토큰 ↔ 값 매핑 · 엔터프라이즈 전용

CUST-7F2A → Marlene Schmidt (also "Mr Schmidt", "Marlene")
CUST-7F2A → Marlene Schmidt (또한 "Schmidt 씨", "Marlene")

mapping never leaves the enterprise boundary
매핑은 절대 엔터프라이즈 경계를 벗어나지 않습니다

Figure 1 · Three different mentions of the same customer all resolve to one consistent token. The LLM can reason about "the customer" throughout the document; the mapping back to the real identity stays inside the enterprise.
그림 1 · 동일한 고객의 세 가지 다른 언급이 모두 하나의 일관된 토큰으로 해소됩니다. LLM은 문서 전체에서 "고객"에 대해 추론할 수 있습니다. 실제 신원으로의 매핑은 엔터프라이즈 내부에 유지됩니다.

### 2. Deterministic vs Randomised Tokenisation

2. 결정적 토큰화 vs 무작위 토큰화

The first architectural decision is whether a given sensitive value always produces the same token, or whether it produces a different token each time.
첫 번째 아키텍처 결정은 주어진 민감한 값이 항상 동일한 토큰을 생성하는지, 아니면 매번 다른 토큰을 생성하는지입니다.

2.1 Deterministic Tokenisation
2.1 결정적 토큰화

Deterministic tokenisation means Marlene Schmidt always becomes CUST-7F2A, in every document, in every workflow. The token is a function of the value (and usually a secret key).
결정적 토큰화는 Marlene Schmidt가 모든 문서에서, 모든 워크플로우에서 항상 CUST-7F2A가 된다는 것을 의미합니다. 토큰은 값(그리고 보통 비밀 키)의 함수입니다.

The benefit is consistency across documents. If two tickets reference the same customer, the LLM sees the same token in both, and analytics that depend on cross-document linkage continue to work. For workflows that aggregate or compare across documents — fraud detection patterns, customer history summaries, cohort analysis — deterministic is usually the only viable choice.
이점은 문서 간 일관성입니다. 두 티켓이 동일한 고객을 참조하면 LLM은 두 곳에서 동일한 토큰을 보고, 문서 간 연결에 의존하는 분석이 계속 작동합니다. 문서 전체를 집계하거나 비교하는 워크플로우, 즉 사기 감지 패턴, 고객 이력 요약, 코호트 분석에서는 결정적 방식이 보통 유일하게 실행 가능한 선택입니다.

The cost is that determinism creates a re-identification surface. An attacker who observes enough tokenised documents and has side information about which customers appear where can correlate tokens to identities. The risk is real for high-volume workflows or for cases where the same entity appears in many tokenised outputs over time.
비용은 결정론이 재식별 표면을 만든다는 것입니다. 충분한 토큰화된 문서를 관찰하고 어떤 고객이 어디에 나타나는지에 대한 부가 정보를 가진 공격자는 토큰을 신원과 연관지을 수 있습니다. 위험은 대용량 워크플로우 또는 동일한 엔티티가 시간이 지남에 따라 많은 토큰화된 출력에 나타나는 경우에 실재합니다.

2.2 Randomised Tokenisation
2.2 무작위 토큰화

Randomised tokenisation generates a different token for each occurrence, even of the same value. Marlene Schmidt might become CUST-7F2A in one document and CUST-3B91 in another.
무작위 토큰화는 동일한 값이라도 발생할 때마다 다른 토큰을 생성합니다. Marlene Schmidt는 한 문서에서 CUST-7F2A가 되고 다른 문서에서 CUST-3B91이 될 수 있습니다.

The benefit is that no cross-document linkage is exposed. Each tokenised document is a closed system.
이점은 문서 간 연결이 노출되지 않는다는 것입니다. 토큰화된 각 문서는 독립된 시스템입니다.

The cost is that cross-document analytics break. The LLM can't tell that two tokens refer to the same customer, because at the structural level they don't. For workflows that don't need cross-document linkage — summarising a single document, extracting clauses from a single contract — randomisation is fine. For workflows that do, randomisation forces the linkage to be reconstructed after the LLM responds, which adds complexity.
비용은 문서 간 분석이 깨진다는 것입니다. LLM은 두 토큰이 동일한 고객을 참조한다고 알 수 없습니다. 구조적 수준에서 그렇지 않기 때문입니다. 문서 간 연결이 필요하지 않은 워크플로우, 즉 단일 문서 요약, 단일 계약에서 조항 추출의 경우 무작위화가 적합합니다. 필요한 워크플로우에서는 무작위화로 인해 LLM이 응답한 후 연결을 복원해야 하며, 이는 복잡성을 추가합니다.

2.3 The Hybrid Pattern Most Production Deployments Use
2.3 대부분의 프로덕션 배포가 사용하는 하이브리드 패턴

Most production deployments end up with a hybrid: deterministic within a workflow scope (so a multi-turn conversation about a customer stays coherent), randomised across workflow scopes (so analytics from one workflow can't be cross-referenced with another). The boundary of the scope is itself a design decision — by session, by user, by document, by tenant — and is one of the things a team has to settle before the architecture goes live.
대부분의 프로덕션 배포는 하이브리드로 귀결됩니다. 워크플로우 범위 내에서는 결정적(고객에 대한 멀티턴 대화가 일관성을 유지하도록), 워크플로우 범위 간에는 무작위(한 워크플로우의 분석이 다른 워크플로우와 상호 참조될 수 없도록). 범위의 경계 자체가 설계 결정입니다. 세션별, 사용자별, 문서별, 테넌트별로 정의되며, 아키텍처가 라이브되기 전에 팀이 해결해야 하는 사항 중 하나입니다.

Choice / Benefit / Cost / Best fit
선택 / 이점 / 비용 / 최적 용도

Deterministic / Cross-document linkage preserved; analytics work across workflows / Creates re-identification surface over high-volume workflows / Fraud detection, customer history, cohort analysis
결정적 / 문서 간 연결 보존; 워크플로우 전반에서 분석 가능 / 대용량 워크플로우에서 재식별 표면 생성 / 사기 감지, 고객 이력, 코호트 분석

Randomised / Each tokenised document is a closed system; no cross-document linkage exposed / Cross-document analytics break; linkage must be reconstructed post-LLM / Single-document summarisation, single-contract extraction
무작위 / 토큰화된 각 문서가 독립 시스템; 문서 간 연결 미노출 / 문서 간 분석 불가; LLM 이후 연결 복원 필요 / 단일 문서 요약, 단일 계약 추출

Hybrid (deterministic within scope, randomised across) / Coherent within a session/user/tenant boundary; isolated across / The scope boundary itself becomes a design decision / Most production deployments
하이브리드(범위 내 결정적, 범위 간 무작위) / 세션/사용자/테넌트 경계 내에서 일관성 유지; 범위 간 격리 / 범위 경계 자체가 설계 결정이 됨 / 대부분의 프로덕션 배포

### 3. Format-Preserving Tokenisation — Why Placeholder Strings Aren't Enough

3. 형식 보존 토큰화 — 플레이스홀더 문자열이 충분하지 않은 이유

A naive implementation replaces sensitive values with generic placeholders: [CUSTOMER], [ACCOUNT_NUMBER], [DATE]. The LLM sees a document littered with these markers and tries to reason about it.
단순한 구현은 민감한 값을 일반 플레이스홀더로 교체합니다. [CUSTOMER], [ACCOUNT_NUMBER], [DATE]. LLM은 이런 마커들로 가득 찬 문서를 보고 추론을 시도합니다.

This works poorly in practice for a specific reason: the LLM's reasoning is shaped by the surface form of the input. A document that reads "Customer Marlene Schmidt called on 2026-03-15 about account 4471-9028" is, to the model, a coherent operational record. The same document with placeholders — "Customer [CUSTOMER] called on [DATE] about account [ACCOUNT_NUMBER]" — reads as a template or a redaction notice. Models are sensitive to that signal, and their outputs degrade accordingly: summaries become more abstract, extraction becomes less precise, and the model occasionally lapses into commentary about the redaction itself.
이것은 실제로 특정 이유로 잘 작동하지 않습니다. LLM의 추론은 입력의 표면 형태에 의해 형성됩니다. "고객 Marlene Schmidt가 2026-03-15에 계정 4471-9028에 관해 연락했습니다"라고 읽히는 문서는 모델에게 일관된 운영 기록입니다. 플레이스홀더가 있는 동일한 문서, 즉 "고객 [CUSTOMER]가 [DATE]에 계정 [ACCOUNT_NUMBER]에 관해 연락했습니다"는 템플릿이나 검열 통지처럼 읽힙니다. 모델은 그 신호에 민감하고, 그에 따라 출력이 저하됩니다. 요약이 더 추상적이 되고, 추출이 덜 정확해지며, 모델이 가끔 검열 자체에 대한 코멘트로 빠집니다.

Format-preserving tokenisation generates tokens that look like the values they replace. A name becomes a plausible-looking name token: Lyra Vesper. A date becomes a real date in a plausible range. An account number becomes a number of the same length, in the same format, that isn't a real account number.
형식 보존 토큰화는 교체하는 값처럼 보이는 토큰을 생성합니다. 이름은 그럴듯하게 보이는 이름 토큰이 됩니다. Lyra Vesper. 날짜는 그럴듯한 범위의 실제 날짜가 됩니다. 계정 번호는 실제 계정 번호가 아닌 동일한 길이, 동일한 형식의 숫자가 됩니다.

The document the LLM sees reads as a coherent operational document with anonymous-but-realistic stand-ins. The model's outputs come back at the quality the model can actually produce, rather than degraded by the perception that it's being asked to reason about a template.
LLM이 보는 문서는 익명이지만 현실적인 대역이 있는 일관된 운영 문서로 읽힙니다. 모델의 출력은 템플릿에 대해 추론하도록 요청받는다는 인식으로 저하되지 않고 모델이 실제로 생성할 수 있는 품질로 반환됩니다.

Format preservation has its own design choices: how plausible to make the tokens, whether to draw from a fixed pool of fake names or generate them on the fly, how to handle dates and numerics where the value itself has analytical meaning (a date in 2019 vs a date in 2024 may matter to the analysis even if the exact date is sensitive). The general rule is that the token has to preserve whatever analytical property the original value carried, no more and no less.
형식 보존에는 자체적인 설계 선택이 있습니다. 토큰을 얼마나 그럴듯하게 만들지, 고정된 가짜 이름 풀에서 가져올지 즉석에서 생성할지, 값 자체가 분석적 의미를 가지는 날짜와 숫자를 어떻게 처리할지(정확한 날짜가 민감하더라도 2019년 날짜 vs 2024년 날짜는 분석에 중요할 수 있습니다). 일반 규칙은 토큰이 원래 값이 가진 분석적 속성을 그 이상도 이하도 아닌 정확히 보존해야 한다는 것입니다.

### 4. Where the Mapping Lives

4. 매핑의 위치

Tokenisation only protects the data if the mapping — the table that connects tokens to original values — stays inside the enterprise environment. This is the part of the architecture that most consistently determines whether the approach actually delivers its protection.
토큰화는 매핑, 즉 토큰을 원래 값에 연결하는 테이블이 엔터프라이즈 환경 내부에 유지될 때만 데이터를 보호합니다. 이것은 접근 방식이 실제로 보호를 제공하는지 가장 일관되게 결정하는 아키텍처 부분입니다.

Three properties of the mapping have to hold:
매핑의 세 가지 속성이 유지되어야 합니다.

It stays in the enterprise's exclusive control. The mapping is, in effect, the key that re-identifies the data. If it leaves the environment, the protection collapses to whatever protection the new location provides. For workflows where data must stay in the EU region or other defined boundaries, the mapping has to live within that same boundary — colocated with the source systems, not with the AI endpoint.
엔터프라이즈의 독점적 통제 하에 유지됩니다. 매핑은 사실상 데이터를 재식별하는 키입니다. 환경을 벗어나면 보호는 새 위치가 제공하는 보호 수준으로 무너집니다. 데이터가 EU 리전이나 다른 정의된 경계에 있어야 하는 워크플로우에서 매핑은 동일한 경계 내, AI 엔드포인트가 아닌 소스 시스템과 함께 위치해야 합니다.

It is integrity-protected. Tampering with the mapping changes what gets reconstructed when the LLM's response comes back. An attacker who can modify the mapping can substitute identities in the output. Standard practice is to apply integrity checks to the mapping itself — signed entries, audit logs of access — so that any tampering is detectable.
무결성이 보호됩니다. 매핑을 변조하면 LLM의 응답이 돌아왔을 때 복원되는 내용이 변경됩니다. 매핑을 수정할 수 있는 공격자는 출력에서 신원을 교체할 수 있습니다. 표준 관행은 매핑 자체에 무결성 검사를 적용하는 것입니다. 서명된 항목, 접근 감사 로그. 이를 통해 변조를 감지할 수 있습니다.

It is access-controlled separately from the LLM workflow. The team that operates the LLM integration doesn't need read access to the mapping. The reconstruction step pulls from the mapping programmatically; it doesn't require humans to see the original values. Separating those two access paths means the mapping can be governed under stricter controls than the LLM workflow itself.
LLM 워크플로우와 별도로 접근이 제어됩니다. LLM 연동을 운영하는 팀은 매핑에 대한 읽기 접근 권한이 필요하지 않습니다. 복원 단계는 프로그래밍 방식으로 매핑에서 가져옵니다. 사람이 원래 값을 볼 필요가 없습니다. 두 접근 경로를 분리하면 매핑을 LLM 워크플로우 자체보다 더 엄격한 통제 하에 관리할 수 있습니다.

Storage technology is secondary to these properties. The mapping can live in a dedicated database, a key-value store, an encrypted file, or a hardware-backed vault — the architectural choice depends on volume, latency requirements, and existing infrastructure. What matters is that the three properties above are non-negotiable design constraints, not configurable options.
저장 기술은 이러한 속성에 부차적입니다. 매핑은 전용 데이터베이스, 키-값 저장소, 암호화된 파일, 또는 하드웨어 기반 볼트에 있을 수 있습니다. 아키텍처 선택은 볼륨, 지연 요구 사항, 기존 인프라에 따라 달라집니다. 중요한 것은 위의 세 가지 속성이 구성 가능한 옵션이 아닌 협상 불가의 설계 제약이라는 것입니다.

### 5. Token Consistency — Same Entity, Same Token

5. 토큰 일관성 — 동일 엔티티, 동일 토큰

A subtler design problem: ensuring that the same entity gets the same token, consistently, even when the entity is referenced in different ways across a document.
더 미묘한 설계 문제: 엔티티가 문서 전체에서 다른 방식으로 참조되더라도 동일한 엔티티가 일관되게 동일한 토큰을 받도록 보장하는 것.

A service ticket might mention "the customer," then "Mr Schmidt," then "Marlene," then "the subscriber" — all referring to the same person. A naive tokeniser sees four different mentions and produces four different tokens, breaking the LLM's ability to track that these all refer to one entity. The summary that comes back may treat them as four people.
서비스 티켓은 "고객", 그다음 "Schmidt 씨", 그다음 "Marlene", 그다음 "가입자"를 언급할 수 있습니다. 모두 동일한 사람을 참조합니다. 단순한 토크나이저는 네 가지 다른 언급을 보고 네 가지 다른 토큰을 생성하여, LLM이 이 모두가 하나의 엔티티를 참조한다는 것을 추적하는 능력을 방해합니다. 돌아오는 요약이 그들을 네 사람으로 처리할 수 있습니다.

Resolving this requires entity resolution before tokenisation: identifying which mentions in a document refer to the same underlying entity, and ensuring they all map to the same token. This is a non-trivial problem in general — entity resolution is a research field of its own — but in practice it's tractable because enterprise documents have structural cues (a customer ID in the header tying together free-text mentions, formal naming conventions in operational logs, schema-defined relationships in structured records).
이를 해결하려면 토큰화 이전에 엔티티 해소가 필요합니다. 문서에서 어떤 언급이 동일한 기저 엔티티를 참조하는지 식별하고, 모두 동일한 토큰으로 매핑되도록 보장합니다. 이것은 일반적으로 비사소한 문제입니다. 엔티티 해소는 그 자체로 연구 분야입니다. 하지만 실제로는 처리 가능합니다. 엔터프라이즈 문서에는 구조적 단서가 있기 때문입니다(자유 텍스트 언급을 연결하는 헤더의 고객 ID, 운영 로그의 공식 명명 규칙, 구조화된 레코드의 스키마 정의 관계).

The other half of consistency is across documents within a workflow scope. If two tickets reference the same customer, and the workflow needs to treat them as related, the tokenisation has to produce the same token for the customer in both. This is where the deterministic-vs-randomised choice from earlier interacts: deterministic-within-scope is what enables the LLM to see "the same customer appears in three tickets" without learning who the customer is.
일관성의 다른 절반은 워크플로우 범위 내의 문서 간에 있습니다. 두 티켓이 동일한 고객을 참조하고 워크플로우가 그들을 관련된 것으로 처리해야 한다면, 토큰화는 두 곳에서 고객에 대해 동일한 토큰을 생성해야 합니다. 이것이 앞서의 결정적-vs-무작위 선택이 상호작용하는 지점입니다. 범위 내 결정적 방식이 LLM이 고객이 누구인지 알지 못하면서도 "동일한 고객이 세 티켓에 나타난다"를 볼 수 있게 하는 것입니다.

A well-designed tokenisation layer handles both kinds of consistency — within-document and within-scope — as part of the transformation, not as an afterthought. Teams that retrofit consistency onto a per-mention tokeniser usually find the workflow degrades in ways that look like model quality problems but are actually data preparation problems.
잘 설계된 토큰화 레이어는 두 가지 일관성, 즉 문서 내와 범위 내를 변환의 일부로 처리합니다. 부차적인 것이 아닙니다. 언급별 토크나이저에 일관성을 소급 적용하는 팀은 일반적으로 모델 품질 문제처럼 보이지만 실제로는 데이터 준비 문제인 방식으로 워크플로우가 저하되는 것을 발견합니다.

### 6. Additional Protection Layers — When Tokenisation Alone Isn't Enough

6. 추가 보호 레이어 — 토큰화만으로 충분하지 않을 때

Tokenisation handles the substitution problem. For most workflows, well-implemented tokenisation with the mapping under the enterprise's exclusive control is sufficient. For some workflows, an additional layer of protection is worth adding on top.
토큰화는 치환 문제를 처리합니다. 대부분의 워크플로우에서 엔터프라이즈의 독점적 통제 하에 매핑을 두고 잘 구현된 토큰화로 충분합니다. 일부 워크플로우에서는 위에 추가 보호 레이어를 추가할 가치가 있습니다.

The case for additional protection arises when the residual risk is not in the tokens themselves but in the patterns the tokens form. A tokenised document may contain enough structural information — frequencies, co-occurrences, sequences, ratios — that a sophisticated correlator could re-identify entities even without the raw values. The risk is particularly relevant for high-cardinality data, long time series, and workflows where many tokenised outputs accumulate over time.
추가 보호의 필요성은 잔여 위험이 토큰 자체가 아닌 토큰이 형성하는 패턴에 있을 때 발생합니다. 토큰화된 문서에는 충분한 구조적 정보, 즉 빈도, 공동 발생, 시퀀스, 비율이 포함되어 있어 정교한 상관 관계 분석기가 원시 값 없이도 엔티티를 재식별할 수 있습니다. 위험은 고카디날리티 데이터, 긴 시계열, 많은 토큰화된 출력이 시간이 지남에 따라 누적되는 워크플로우에 특히 관련이 있습니다.

The standard responses are differential privacy, k-anonymity, and similar statistical protections applied to the tokenised data. Each adds noise or aggregation in a controlled way that limits how much an attacker can learn from the tokenised output, at the cost of some analytical precision. Whether the trade-off is worth it depends on the threat model and the workflow's tolerance for noise.
표준 대응은 토큰화된 데이터에 적용되는 차분 프라이버시, k-익명성, 그리고 유사한 통계적 보호입니다. 각각은 일부 분석 정밀도를 희생하고 공격자가 토큰화된 출력에서 학습할 수 있는 양을 제한하는 제어된 방식으로 노이즈나 집계를 추가합니다. 트레이드오프가 가치 있는지는 위협 모델과 워크플로우의 노이즈 허용 범위에 따라 달라집니다.

For most enterprise AI workflows this layer is optional. For workflows where the data is highly sensitive, the volume is high, or the data posture demands defence in depth, it is worth the complexity. The decision is best made workflow by workflow, not as a global setting.
대부분의 엔터프라이즈 AI 워크플로우에서 이 레이어는 선택 사항입니다. 데이터가 매우 민감하거나 볼륨이 높거나 데이터 태세가 심층 방어를 요구하는 워크플로우의 경우 복잡성을 감수할 가치가 있습니다. 결정은 글로벌 설정이 아닌 워크플로우별로 내리는 것이 가장 좋습니다.

### 7. What Not to Tokenise

7. 토큰화하지 않아야 할 것

A final design question that often gets answered by accident: what not to tokenise.
종종 우연히 답해지는 최종 설계 질문: 무엇을 토큰화하지 않아야 하는가.

Tokenising the wrong things degrades the AI's output without improving protection. A tokeniser that replaces every proper noun produces unreadable documents. A tokeniser that replaces every numeric field destroys analytical signal. The temptation is to be aggressive — "tokenise everything that could conceivably be sensitive" — but the cost shows up immediately in output quality.
잘못된 것을 토큰화하면 보호를 개선하지 않고 AI 출력이 저하됩니다. 모든 고유 명사를 교체하는 토크나이저는 읽을 수 없는 문서를 생성합니다. 모든 숫자 필드를 교체하는 토크나이저는 분석 신호를 파괴합니다. 유혹은 공격적으로 접근하는 것입니다. "개념적으로 민감할 수 있는 모든 것을 토큰화하라." 하지만 비용은 즉시 출력 품질에 나타납니다.

The disciplined approach is to define sensitivity explicitly, in the enterprise's own terms, and tokenise only those elements. Generic PII categories are a starting point, not a complete list. Internal project codes, customer-segment identifiers, sector-specific references — whatever the enterprise's data posture treats as protected — go on the list. Everything else stays.
규율 잡힌 접근 방식은 엔터프라이즈 자체 용어로 민감도를 명시적으로 정의하고 해당 요소만 토큰화하는 것입니다. 일반 PII 카테고리는 시작점이지 완전한 목록이 아닙니다. 내부 프로젝트 코드, 고객 세그먼트 식별자, 섹터별 참조, 즉 엔터프라이즈의 데이터 태세가 보호 대상으로 다루는 모든 것이 목록에 포함됩니다. 나머지는 그대로 유지됩니다.

The list has to be versioned, because what counts as sensitive changes over time. It also has to be auditable, because an audit review of the workflow will want to know what was tokenised, when, under which definition. The definition layer is where most of the long-term operational cost of this architecture lives, and where most teams under-invest at the start.
목록은 버전 관리되어야 합니다. 민감한 것으로 간주되는 것이 시간이 지남에 따라 변하기 때문입니다. 또한 감사 가능해야 합니다. 워크플로우의 감사 검토는 무엇이 언제 어떤 정의 하에 토큰화되었는지 알고 싶어하기 때문입니다. 정의 레이어는 이 아키텍처의 장기 운영 비용의 대부분이 있는 곳이며, 대부분의 팀이 초기에 충분히 투자하지 않는 곳입니다.

### 8. The Next Step in the Workflow

8. 워크플로우의 다음 단계

Tokenisation prepares the document for the external model. The model processes the tokenised document and returns a tokenised response. The response, on its own, is not yet useful to the workflow — the tokens have to be mapped back to original values inside the enterprise environment before the output reaches the user.
토큰화는 외부 모델을 위해 문서를 준비합니다. 모델은 토큰화된 문서를 처리하고 토큰화된 응답을 반환합니다. 응답 자체는 아직 워크플로우에 유용하지 않습니다. 출력이 사용자에게 도달하기 전에 토큰이 엔터프라이즈 환경 내부에서 원래 값으로 다시 매핑되어야 합니다.

That reconstruction step is the subject of the next article in this series. For the broader pattern this article is part of, see the pillar overview on running external LLMs on sensitive enterprise data. For why masking and redaction don't substitute for tokenisation in operational workflows, see the article on why AI workflows stall on operational data.
그 복원 단계는 이 시리즈의 다음 아티클의 주제입니다. 이 아티클이 속한 더 넓은 패턴에 대해서는 민감한 엔터프라이즈 데이터에서 외부 LLM을 실행하는 것에 관한 필러 개요를 참조하십시오. 운영 워크플로우에서 마스킹과 삭제가 토큰화를 대체하지 못하는 이유는 AI 워크플로우가 운영 데이터에서 막히는 이유에 관한 아티클을 참조하십시오.

## Section 04: Related Articles

Related articles
관련 아티클

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
AI 출력 복원: 모델 응답과 비즈니스 현실 사이의 마지막 구간

Running External LLMs on Data Your Company Can't Send Externally
외부로 전송할 수 없는 데이터에서 외부 LLM 실행하기

Why AI Workflows Stall at Tables, Tickets, and Operational Documents
AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유

Breadcrumb: Tokenization for LLM Inputs
브레드크럼: LLM 입력을 위한 토큰화
