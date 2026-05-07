# differential-privacy-for-enterprise-llm — 한국어 번역

## Section 01: Hero

← Learn
← Learn

/learn
/learn

Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data
엔터프라이즈 AI를 위한 차등 프라이버시: 개념, 중요성, 운영 데이터 적용 방식

PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the AI enablement data layer.
PII 필터링은 이름을 찾아냅니다. 차등 프라이버시는 패턴까지 막습니다. 차등 프라이버시 기반 캡슐화가 AI 데이터 레이어의 기술적 토대인 이유입니다.

PILLAR · Differential Privacy
PILLAR · Differential Privacy

12 min read
12분 읽기

Updated May 2025
2025년 5월 업데이트

## Section 02: TL;DR

Definition · TL;DR
Definition · TL;DR

Differential-privacy-based encapsulation is the technical foundation of the AI enablement data layer. It transforms regulated operational data into AI-ready context while preserving structure (table layout, log sequence, document hierarchy) and applying differential-privacy-based protection to reduce re-identification, inference, and sensitive context exposure risks. It is a technical protection layer with a defined risk-reduction scope — not a legal guarantee.
차등 프라이버시 기반 캡슐화는 AI 데이터 레이어의 기술적 토대입니다. 규제 대상 운영 데이터를 AI 처리 가능한 컨텍스트로 변환하면서 구조(테이블 레이아웃, 로그 시퀀스, 문서 계층)를 보존하고, 재식별·추론·민감 컨텍스트 노출 위험을 줄이기 위한 차등 프라이버시 기반 보호를 적용합니다. 정의된 위험 감소 범위를 가진 기술적 보호 레이어입니다. 법적 보증이 아닙니다.

## Section 03: Body HTML

<!-- 아래는 bodyHtml Props 번역입니다. HTML 태그 구조를 그대로 유지합니다. -->

<h2>The problem PII filtering doesn't solve</h2>
<h2>PII 필터링이 해결하지 못하는 문제</h2>

Most enterprise teams hit the same wall when they try to use external LLMs on real internal data: the data passes the PII filter, but the workflow still breaks. The names are gone. The phone numbers are gone. But the network configuration is still recognizable. The sequence of incidents still identifies the customer segment. The OT alert pattern still betrays the plant.
실제 내부 데이터에 외부 LLM을 적용하려 할 때 대부분의 기업 팀이 같은 벽에 부딪힙니다. 데이터는 PII 필터를 통과했지만, 워크플로는 여전히 작동하지 않습니다. 이름은 사라졌습니다. 전화번호도 사라졌습니다. 그러나 네트워크 구성은 여전히 식별 가능합니다. 인시던트 시퀀스는 여전히 고객 세그먼트를 드러냅니다. OT 알림 패턴은 여전히 현장을 노출시킵니다.

This is the gap differential privacy was designed to address. PII filtering is a field-level defense — find the pattern that looks like a name, replace it. Differential privacy is a distributional defense — bound how much any single record can influence what comes out. When the data is operational, structured, and re-identifiable through context, you need both.
이것이 바로 차등 프라이버시가 해결하도록 설계된 격차입니다. PII 필터링은 필드 수준의 방어입니다. 이름처럼 보이는 패턴을 찾아 교체합니다. 차등 프라이버시는 분포 수준의 방어입니다. 단일 레코드가 출력에 미치는 영향을 제한합니다. 데이터가 운영용이고 구조화되어 있으며 컨텍스트를 통해 재식별 가능하다면, 두 가지 모두 필요합니다.

<strong>Operational data is not a list of PII fields.</strong> Network logs, incident records, configuration trees, OT manifests, clinical workflows, and mission logs leak information through structure, sequence, and aggregate pattern — not just through identifiable fields.
<strong>운영 데이터는 PII 필드의 목록이 아닙니다.</strong> 네트워크 로그, 인시던트 기록, 구성 트리, OT 매니페스트, 임상 워크플로, 미션 로그는 식별 가능한 필드뿐 아니라 구조·시퀀스·집계 패턴을 통해 정보를 노출합니다.

<h2>What differential privacy actually is</h2>
<h2>차등 프라이버시란 무엇인가</h2>

Differential privacy (DP) is a mathematical framework introduced by Cynthia Dwork and colleagues in 2006. The intuition is simple: a computation is differentially private if the outcome would be almost the same whether or not any single record had been included. The "almost" is parameterized by epsilon (ε) — smaller epsilon, stronger privacy, lower utility.
차등 프라이버시(DP)는 2006년 Cynthia Dwork과 동료들이 도입한 수학적 프레임워크입니다. 직관은 단순합니다. 특정 레코드가 포함되든 그렇지 않든 결과가 거의 동일하다면, 그 연산은 차등 프라이버시를 만족합니다. "거의"는 엡실론(ε)으로 파라미터화됩니다. 엡실론이 작을수록 프라이버시는 강해지고, 유용성은 낮아집니다.

In practice, DP is implemented by adding calibrated noise to outputs, queries, or transformations, with the noise scale determined by the sensitivity of the function and the chosen privacy budget. Done correctly, it gives you a quantitative bound on what an attacker could learn about any individual record from the output, even with arbitrary background knowledge.
실제로 DP는 출력·쿼리·변환에 보정된 노이즈를 추가하는 방식으로 구현됩니다. 노이즈 규모는 함수의 민감도와 선택한 프라이버시 예산으로 결정됩니다. 올바르게 적용하면, 임의의 배경 지식을 가진 공격자가 출력에서 개별 레코드에 대해 학습할 수 있는 내용을 정량적으로 제한할 수 있습니다.

<h3>What DP is not</h3>
<h3>DP가 아닌 것</h3>

It is not a yes/no guarantee. It is a tunable parameter that trades utility for privacy risk.
예/아니오로 단정되는 보증이 아닙니다. 유용성과 프라이버시 위험을 조율하는 조정 가능한 파라미터입니다.

It does not, on its own, guarantee compliance with GDPR, HIPAA, or any specific regulation.
단독으로는 GDPR, HIPAA 또는 특정 규정 준수를 보장하지 않습니다.

It does not eliminate risk. It bounds and characterizes risk so engineers and compliance teams can reason about it.
위험을 제거하지 않습니다. 위험을 제한하고 특성화하여 엔지니어와 컴플라이언스 팀이 합리적으로 판단할 수 있도록 합니다.

<h2>Why DP belongs in the AI enablement data layer</h2>
<h2>DP가 AI 데이터 레이어에 속하는 이유</h2>

The AI enablement data layer is where regulated operational data crosses from "private" to "usable by an LLM." In a typical PII-only pipeline, the layer detects identifiable fields, replaces them with tokens, forwards the result to the LLM, and restores the tokens after. This works for a customer service chat or a contract review workflow where the sensitive content is mostly individual identifiers.
AI 데이터 레이어는 규제 대상 운영 데이터가 "비공개"에서 "LLM이 사용 가능"으로 전환되는 지점입니다. 일반적인 PII 전용 파이프라인에서는 식별 가능한 필드를 감지하고, 토큰으로 교체한 후 LLM에 전달하고, 이후 토큰을 복원합니다. 민감 콘텐츠가 주로 개인 식별자인 고객 서비스 채팅이나 계약 검토 워크플로에는 이것으로 충분합니다.

It does not work when the sensitive information is the network topology of a national carrier, the alarm sequence preceding an outage, the configuration drift between two PLCs, or the operational rhythm of a hospital ward. In those cases, the field-level masks pass, but the underlying patterns are still legible to anyone who reconstructs context.
민감 정보가 국가 통신사의 네트워크 토폴로지, 장애 직전의 알림 시퀀스, 두 PLC 간 구성 드리프트, 또는 병동의 운영 리듬인 경우에는 작동하지 않습니다. 그 경우 필드 수준 마스킹은 통과하지만, 컨텍스트를 재구성하면 기저 패턴은 여전히 읽힙니다.

Differential-privacy-based encapsulation adds a distributional protection layer to the field-level mask. It is applied during the encapsulation step — before the data reaches the LLM — and is calibrated against the operational data's sensitivity profile.
차등 프라이버시 기반 캡슐화는 필드 수준 마스킹에 분포 수준 보호 레이어를 추가합니다. 데이터가 LLM에 도달하기 전, 캡슐화 단계에서 적용되며 운영 데이터의 민감도 프로파일에 맞게 보정됩니다.

<h2>How LLM Capsule applies differential privacy</h2>
<h2>LLM Capsule의 차등 프라이버시 적용 방식</h2>

LLM Capsule applies differential-privacy-based protection within a broader transformation called <strong>structure-preserving encapsulation</strong>. The full pipeline:
LLM Capsule은 <strong>문서 구조 보존 캡슐화</strong>라는 더 넓은 변환 프레임 안에서 차등 프라이버시 기반 보호를 적용합니다. 전체 파이프라인은 다음과 같습니다.

<strong>Ingest</strong> — operational data enters the Capsule Runtime via the connector lane (NOC plug-in, ticket webhook, OT log tap, or file watch).
<strong>수집</strong> — 운영 데이터가 커넥터 레인(NOC 플러그인, 티켓 웹훅, OT 로그 탭, 파일 감시)을 통해 Capsule Runtime으로 진입합니다.

<strong>Identify confidentiality markers</strong> — beyond generic PII: network identifiers, system operational logs, OT/asset references, mission and clinical context.
<strong>기밀성 마커 식별</strong> — 일반 PII를 넘어 네트워크 식별자, 시스템 운영 로그, OT/자산 참조, 미션 및 임상 컨텍스트를 식별합니다.

<strong>Apply structure-preserving transformation</strong> — table layout, log sequence, document hierarchy, and configuration tree are preserved so the LLM can still reason over them.
<strong>문서 구조 보존 변환 적용</strong> — 테이블 레이아웃, 로그 시퀀스, 문서 계층 구조, 구성 트리가 보존되어 LLM이 계속 추론할 수 있습니다.

<strong>Apply differential-privacy-based protection</strong> — calibrated against the policy's privacy budget for that workflow. epsilon-DP active, Laplace noise injection, k-anonymity enforcement, semantic tokenization, free-text NER masking.
<strong>차등 프라이버시 기반 보호 적용</strong> — 해당 워크플로의 정책 프라이버시 예산에 맞게 보정됩니다. epsilon-DP 활성화, 라플라스 노이즈 주입, k-익명성 적용, 시맨틱 토큰화, 자유 텍스트 NER 마스킹을 수행합니다.

<strong>Route to execution path</strong> — Path A (external approved LLM, capsule data only) or Path B (on-prem local lightweight model, zero external transmission).
<strong>실행 경로 라우팅</strong> — Path A(외부 승인 LLM, 캡슐 데이터만 전송) 또는 Path B(온프레미스 경량 모델, 외부 전송 없음)로 라우팅합니다.

<strong>Restore via state vault</strong> — the LLM output is rehydrated with the original operational identifiers and inserted back into the workflow (RCA, ticket update, runbook, response draft).
<strong>상태 볼트를 통한 복원</strong> — LLM 출력이 원본 운영 식별자로 자동 복원되어 워크플로(RCA, 티켓 업데이트, 런북, 응답 초안)에 다시 삽입됩니다.

The key claim is bounded: <em>differential-privacy-based encapsulation reduces re-identification, inference, and sensitive context exposure risk for the operational dataset</em>. It is not a promise of zero risk. It is a defined technical protection layer with a privacy budget visible to governance.
핵심 주장은 제한적입니다. <em>차등 프라이버시 기반 캡슐화는 운영 데이터셋의 재식별·추론·민감 컨텍스트 노출 위험을 감소시킵니다.</em> 제로 리스크를 약속하는 것이 아닙니다. 거버넌스에서 확인 가능한 프라이버시 예산을 갖춘 정의된 기술적 보호 레이어입니다.

<h2>DP vs PII filtering: side by side</h2>
<h2>DP vs PII 필터링: 비교</h2>

(table header row 1 — empty cell)
(빈 셀)

PII filtering / guardrails
PII 필터링 / 가드레일

Differential-privacy-based encapsulation
차등 프라이버시 기반 캡슐화

Defense level
방어 수준

Field-level (find / replace identifiable fields)
필드 수준 (식별 가능한 필드 탐지 및 교체)

Field-level + distributional (bound any single record's influence)
필드 수준 + 분포 수준 (단일 레코드의 영향 제한)

Scope
범위

Names, IDs, financial fields, addresses
이름, ID, 금융 필드, 주소

+ network logs, configs, OT alerts, clinical & mission context
+ 네트워크 로그, 구성, OT 알림, 임상 및 미션 컨텍스트

Failure mode
실패 유형

Pattern slips through (structure, sequence, aggregate)
패턴이 통과됨 (구조, 시퀀스, 집계)

Risk is bounded and visible via privacy budget
위험이 프라이버시 예산으로 제한되고 가시화됨

Typical claim
일반적 주장

"PII removed"
"PII 제거됨"

"Privacy-preserving with defined risk-reduction scope"
"정의된 위험 감소 범위를 갖춘 프라이버시 보호"

Audit posture
감사 태세

Detection logs
감지 로그

Privacy budget, audit trail, governance evidence
프라이버시 예산, 감사 이력, 거버넌스 증거

<h2>What enterprises should ask before deploying DP at the AI layer</h2>
<h2>AI 레이어에 DP 도입 전 기업이 확인해야 할 사항</h2>

<strong>What is the privacy budget per workflow?</strong> Different workflows can carry different epsilon values. NOC analytics may tolerate higher utility. Mission summaries may demand stronger protection.
<strong>워크플로별 프라이버시 예산은 얼마인가?</strong> 워크플로마다 다른 엡실론 값을 가질 수 있습니다. NOC 분석은 더 높은 유용성을 허용할 수 있습니다. 미션 요약은 더 강한 보호를 요구할 수 있습니다.

<strong>Where is the budget consumed?</strong> Each query against the same dataset consumes part of the budget. The execution layer should track this and surface it to governance.
<strong>예산은 어디서 소비되는가?</strong> 동일 데이터셋에 대한 각 쿼리는 예산의 일부를 소비합니다. 실행 레이어는 이를 추적하고 거버넌스에 노출해야 합니다.

<strong>What is the structure-preservation requirement?</strong> If the LLM needs to reason over the topology, you cannot destroy it with naive noise injection. Structure-preserving encapsulation addresses this.
<strong>구조 보존 요건은 무엇인가?</strong> LLM이 토폴로지를 추론해야 한다면, 단순한 노이즈 주입으로 구조를 파괴해서는 안 됩니다. 문서 구조 보존 캡슐화가 이 문제를 해결합니다.

<strong>How is the protection auditable?</strong> Differential privacy is meaningful only if the parameters and budgets are documented, traceable, and tied to policy.
<strong>보호 조치는 어떻게 감사 가능한가?</strong> 차등 프라이버시는 파라미터와 예산이 문서화되고, 추적 가능하며, 정책에 연결된 경우에만 의미가 있습니다.

<h2>External LLM use vs on-prem execution</h2>
<h2>외부 LLM 사용 vs 온프레미스 실행</h2>

Differential-privacy-based encapsulation underwrites both execution paths in LLM Capsule, but the operational meaning differs:
차등 프라이버시 기반 캡슐화는 LLM Capsule의 두 실행 경로를 모두 지원하지만, 운영상 의미는 다릅니다.

<strong>Path A · External approved LLM</strong> — Capsule data is transmitted to an approved external LLM endpoint. Raw operational data does not leave the enterprise environment. The DP layer reduces inference risk on the capsule itself.
<strong>Path A · 외부 승인 LLM</strong> — 캡슐 데이터가 승인된 외부 LLM 엔드포인트로 전송됩니다. 원본 운영 데이터는 기업 환경 밖으로 나가지 않습니다. DP 레이어가 캡슐 자체에 대한 추론 위험을 줄입니다.

<strong>Path B · On-prem local lightweight model</strong> — Capsule execution happens entirely inside the enterprise environment. No external transmission. Used for air-gapped, classified, or strictly regulated operations.
<strong>Path B · 온프레미스 경량 모델</strong> — 캡슐 실행이 기업 환경 내부에서 완전히 처리됩니다. 외부 전송이 없습니다. 망분리, 기밀, 또는 엄격한 규제 운영에 사용됩니다.

The choice is a policy decision driven by the workflow's regulatory profile, data sovereignty constraints, and customer commitments. The execution layer enables both; governance enforces which one applies where.
선택은 워크플로의 규제 프로파일, 데이터 주권 제약, 고객 약정에 따른 정책 결정입니다. 실행 레이어는 두 경로 모두를 지원하며, 거버넌스가 어디에 어떤 경로를 적용할지 결정합니다.

<h2>What about absolute claims like "100% safe" or "GDPR guaranteed"?</h2>
<h2>"100% 안전" 또는 "GDPR 보장" 같은 절대적 주장에 대하여</h2>

Avoid them. Differential privacy is a strong, well-studied framework, but it is not magic. A vendor claim of "mathematically impossible to reconstruct" oversimplifies the framework and invites verification attack. The honest framing is:
피하십시오. 차등 프라이버시는 견고하고 충분히 연구된 프레임워크이지만, 마법이 아닙니다. "수학적으로 재구성이 불가능하다"는 벤더 주장은 프레임워크를 지나치게 단순화하고 검증 공격을 초래합니다. 정직한 표현은 다음과 같습니다.

"Privacy-preserving with a defined risk-reduction scope"
"정의된 위험 감소 범위를 갖춘 프라이버시 보호"

"Bounded inference risk under the policy's privacy budget"
"정책 프라이버시 예산 내에서 제한된 추론 위험"

"No raw operational data exposure to external LLMs (Path A)"
"외부 LLM에 원본 운영 데이터 노출 없음 (Path A)"

"Zero external exposure in local execution path (Path B)"
"로컬 실행 경로에서 외부 노출 Zero Exposure (Path B)"

These are claims the security and legal teams of regulated buyers can engage with. Absolute claims are claims that get challenged.
이것이 규제 대상 구매자의 보안 및 법무 팀이 수용할 수 있는 주장입니다. 절대적 주장은 검증의 대상이 됩니다.

<h2>Where this fits in the broader AI enablement data layer</h2>
<h2>AI 데이터 레이어 전체에서의 위치</h2>

Differential-privacy-based encapsulation is one capability inside the LLM Capsule runtime. The runtime also includes structure-preserving transformation, policy-based marker control, state vault for restoration, and an audit trail. The differential-privacy component makes the capsule defensible against pattern-level inference attacks; the structure-preserving component makes it useful to the LLM; the state vault makes the result restorable to the workflow.
차등 프라이버시 기반 캡슐화는 LLM Capsule 런타임의 기능 중 하나입니다. 런타임에는 문서 구조 보존 변환, 정책 기반 마커 제어, 복원용 상태 볼트, 감사 이력이 함께 포함됩니다. 차등 프라이버시 컴포넌트는 캡슐을 패턴 수준 추론 공격으로부터 방어합니다. 문서 구조 보존 컴포넌트는 LLM이 유용하게 활용할 수 있게 합니다. 상태 볼트는 결과를 워크플로에 그대로 복원합니다.

All three together — and the connector lane that plugs them into existing NOC, ticket, OT, EHR, and mission systems — are why LLM Capsule is positioned as an <strong>AI enablement data layer</strong> rather than as a privacy product or PII tool.
이 세 가지 모두, 그리고 기존 NOC·티켓·OT·EHR·미션 시스템에 연결하는 커넥터 레인이 있기 때문에 LLM Capsule은 프라이버시 제품이나 PII 툴이 아닌 <strong>AI 데이터 레이어</strong>로 자리매김합니다.

Key takeaways
핵심 요약

PII filtering is field-level. Differential privacy is distributional. Operational data needs both.
PII 필터링은 필드 수준입니다. 차등 프라이버시는 분포 수준입니다. 운영 데이터에는 두 가지 모두 필요합니다.

Differential-privacy-based encapsulation is the technical foundation of LLM Capsule, applied during structure-preserving transformation.
차등 프라이버시 기반 캡슐화는 LLM Capsule의 기술적 토대이며, 문서 구조 보존 변환 과정에서 적용됩니다.

It reduces re-identification, inference, and sensitive context exposure risk — with a defined, auditable scope. It is not an absolute guarantee.
재식별·추론·민감 컨텍스트 노출 위험을 정의된, 감사 가능한 범위 내에서 감소시킵니다. 절대적 보증이 아닙니다.

Privacy budget is workflow-specific and consumed per query. Governance must track it.
프라이버시 예산은 워크플로별로 다르며 쿼리마다 소비됩니다. 거버넌스가 반드시 추적해야 합니다.

External LLM (Path A) and on-prem local model (Path B) are both supported. Policy decides which workflow uses which.
외부 LLM(Path A)과 온프레미스 로컬 모델(Path B) 모두 지원됩니다. 어떤 워크플로에 어떤 경로를 사용할지는 정책이 결정합니다.

Avoid claims like "100% safe", "GDPR guaranteed", "zero risk", "mathematically impossible." Use bounded technical language.
"100% 안전", "GDPR 보장", "제로 리스크", "수학적으로 불가능" 같은 표현을 피하십시오. 제한적인 기술 언어를 사용하십시오.

## Section 04: Related Links

Continue reading
계속 읽기

PII guardrails vs operational data protection
PII 가드레일 vs 운영 데이터 보호

/resources/learn/pii-guardrails-vs-operational-data-protection
/resources/learn/pii-guardrails-vs-operational-data-protection

Comparison
비교

AI on network operations data
네트워크 운영 데이터에서의 AI

/resources/learn/ai-on-network-operations-data
/resources/learn/ai-on-network-operations-data

Use case
활용 사례

On-prem LLM execution path
온프레미스 LLM 실행 경로

/resources/learn/on-prem-llm-execution-path
/resources/learn/on-prem-llm-execution-path

Architecture
아키텍처

## Section 05: CTA Strip

Ready to apply DP to your AI workflow?
AI 워크플로에 DP를 적용할 준비가 되셨습니까?

30-minute review. We map your operational dataset, privacy budget, and execution path policy.
30분 리뷰. 운영 데이터셋, 프라이버시 예산, 실행 경로 정책을 직접 점검합니다.

Request a Demo
데모 요청

/request-a-demo
/request-a-demo
