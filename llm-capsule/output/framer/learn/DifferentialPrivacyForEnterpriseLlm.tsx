// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel or rely on Framer Localization for auto-switch.

import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<h2>The problem PII filtering doesn't solve</h2>
<p>Most enterprise teams hit the same wall when they try to use external LLMs on real internal data: the data passes the PII filter, but the workflow still breaks. The names are gone. The phone numbers are gone. But the network configuration is still recognizable. The sequence of incidents still identifies the customer segment. The OT alert pattern still betrays the plant.</p>
<p>This is the gap differential privacy was designed to address. PII filtering is a <em>field-level</em> defense — find the pattern that looks like a name, replace it. Differential privacy is a <em>distributional</em> defense — bound how much any single record can influence what comes out. When the data is operational, structured, and re-identifiable through context, you need both.</p>
<div class="callout"><strong>Operational data is not a list of PII fields.</strong> Network logs, incident records, configuration trees, OT manifests, clinical workflows, and mission logs leak information through structure, sequence, and aggregate pattern — not just through identifiable fields.</div>

<h2>What differential privacy actually is</h2>
<p>Differential privacy (DP) is a mathematical framework introduced by Cynthia Dwork and colleagues in 2006. The intuition is simple: a computation is differentially private if the outcome would be almost the same whether or not any single record had been included. The "almost" is parameterized by epsilon (ε) — smaller epsilon, stronger privacy, lower utility.</p>
<p>In practice, DP is implemented by adding calibrated noise to outputs, queries, or transformations, with the noise scale determined by the sensitivity of the function and the chosen privacy budget. Done correctly, it gives you a quantitative bound on what an attacker could learn about any individual record from the output, even with arbitrary background knowledge.</p>
<h3>What DP is not</h3>
<ul>
  <li>It is not a yes/no guarantee. It is a tunable parameter that trades utility for privacy risk.</li>
  <li>It does not, on its own, guarantee compliance with GDPR, HIPAA, or any specific regulation.</li>
  <li>It does not eliminate risk. It bounds and characterizes risk so engineers and compliance teams can reason about it.</li>
</ul>

<h2>Why DP belongs in the context-preserving data layer for AI</h2>
<p>The context-preserving data layer for AI is where regulated operational data crosses from "private" to "usable by an LLM." In a typical PII-only pipeline, the layer detects identifiable fields, replaces them with tokens, forwards the result to the LLM, and restores the tokens after. This works for a customer service chat or a contract review workflow where the sensitive content is mostly individual identifiers.</p>
<p>It does not work when the sensitive information is the network topology of a national carrier, the alarm sequence preceding an outage, the configuration drift between two PLCs, or the operational rhythm of a hospital ward. In those cases, the field-level masks pass, but the underlying patterns are still legible to anyone who reconstructs context.</p>
<p>Differential-privacy-based encapsulation adds a distributional protection layer to the field-level mask. It is applied during the encapsulation step — before the data reaches the LLM — and is calibrated against the operational data's sensitivity profile.</p>

<h2>How LLM Capsule applies differential privacy</h2>
<p>LLM Capsule applies differential-privacy-based protection within a broader transformation called <strong>structure-preserving encapsulation</strong>. The full pipeline:</p>
<ol>
  <li><strong>Ingest</strong> — operational data enters the Capsule Runtime via the connector lane (NOC plug-in, ticket webhook, OT log tap, or file watch).</li>
  <li><strong>Identify confidentiality markers</strong> — beyond generic PII: network identifiers, system operational logs, OT/asset references, mission and clinical context.</li>
  <li><strong>Apply structure-preserving transformation</strong> — table layout, log sequence, document hierarchy, and configuration tree are preserved so the LLM can still reason over them.</li>
  <li><strong>Apply differential-privacy-based protection</strong> — calibrated against the policy's privacy budget for that workflow. epsilon-DP active, Laplace noise injection, k-anonymity enforcement, semantic tokenization, free-text NER masking.</li>
  <li><strong>Route to execution path</strong> — Path A (external approved LLM, capsule data only) or Path B (on-prem local lightweight model, zero external transmission).</li>
  <li><strong>Restore via state vault</strong> — the LLM output is rehydrated with the original operational identifiers and inserted back into the workflow (RCA, ticket update, runbook, response draft).</li>
</ol>
<p>The key claim is bounded: <em>differential-privacy-based encapsulation reduces re-identification, inference, and sensitive context exposure risk for the operational dataset</em>. It is not a promise of zero risk. It is a defined technical protection layer with a privacy budget visible to governance.</p>

<h2>DP vs PII filtering: side by side</h2>
<table class="compare-table">
  <thead><tr><th></th><th>PII filtering / guardrails</th><th class="us">Differential-privacy-based encapsulation</th></tr></thead>
  <tbody>
    <tr><td>Defense level</td><td>Field-level (find / replace identifiable fields)</td><td class="us-cell">Field-level + distributional (bound any single record's influence)</td></tr>
    <tr><td>Scope</td><td>Names, IDs, financial fields, addresses</td><td class="us-cell">+ network logs, configs, OT alerts, clinical &amp; mission context</td></tr>
    <tr><td>Failure mode</td><td>Pattern slips through (structure, sequence, aggregate)</td><td class="us-cell">Risk is bounded and visible via privacy budget</td></tr>
    <tr><td>Typical claim</td><td>"PII removed"</td><td class="us-cell">"Privacy-preserving with defined risk-reduction scope"</td></tr>
    <tr><td>Audit posture</td><td>Detection logs</td><td class="us-cell">Privacy budget, audit trail, governance evidence</td></tr>
  </tbody>
</table>

<h2>What enterprises should ask before deploying DP at the AI layer</h2>
<ol>
  <li><strong>What is the privacy budget per workflow?</strong> Different workflows can carry different epsilon values. NOC analytics may tolerate higher utility. Mission summaries may demand stronger protection.</li>
  <li><strong>Where is the budget consumed?</strong> Each query against the same dataset consumes part of the budget. The execution layer should track this and surface it to governance.</li>
  <li><strong>What is the structure-preservation requirement?</strong> If the LLM needs to reason over the topology, you cannot destroy it with naive noise injection. Structure-preserving encapsulation addresses this.</li>
  <li><strong>How is the protection auditable?</strong> Differential privacy is meaningful only if the parameters and budgets are documented, traceable, and tied to policy.</li>
</ol>

<h2>External LLM use vs on-prem execution</h2>
<p>Differential-privacy-based encapsulation underwrites both execution paths in LLM Capsule, but the operational meaning differs:</p>
<blockquote><strong>Path A · External approved LLM</strong> — Capsule data is transmitted to an approved external LLM endpoint. Raw operational data does not leave the enterprise environment. The DP layer reduces inference risk on the capsule itself.</blockquote>
<blockquote><strong>Path B · On-prem local lightweight model</strong> — Capsule execution happens entirely inside the enterprise environment. No external transmission. Used for air-gapped, classified, or strictly regulated operations.</blockquote>
<p>The choice is a policy decision driven by the workflow's regulatory profile, data sovereignty constraints, and customer commitments. The execution layer enables both; governance enforces which one applies where.</p>

<h2>What about absolute claims like "100% safe" or "GDPR guaranteed"?</h2>
<p>Avoid them. Differential privacy is a strong, well-studied framework, but it is not magic. A vendor claim of "mathematically impossible to reconstruct" oversimplifies the framework and invites verification attack. The honest framing is:</p>
<ul>
  <li>"Privacy-preserving with a defined risk-reduction scope"</li>
  <li>"Bounded inference risk under the policy's privacy budget"</li>
  <li>"No raw operational data exposure to external LLMs (Path A)"</li>
  <li>"Zero external exposure in local execution path (Path B)"</li>
</ul>
<p>These are claims the security and legal teams of regulated buyers can engage with. Absolute claims are claims that get challenged.</p>

<h2>Where this fits in the broader context-preserving data layer for AI</h2>
<p>Differential-privacy-based encapsulation is one capability inside the LLM Capsule runtime. The runtime also includes structure-preserving transformation, policy-based marker control, state vault for restoration, and an audit trail. The differential-privacy component makes the capsule defensible against pattern-level inference attacks; the structure-preserving component makes it useful to the LLM; the state vault makes the result restorable to the workflow.</p>
<p>All three together — and the connector lane that plugs them into existing NOC, ticket, OT, EHR, and mission systems — are why LLM Capsule is positioned as an <strong>context-preserving data layer for AI</strong> rather than as a privacy product or PII tool.</p>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>PII filtering is field-level. Differential privacy is distributional. Operational data needs both.</li>
    <li>Differential-privacy-based encapsulation is the technical foundation of LLM Capsule, applied during structure-preserving transformation.</li>
    <li>It reduces re-identification, inference, and sensitive context exposure risk — with a defined, auditable scope. It is not an absolute guarantee.</li>
    <li>Privacy budget is workflow-specific and consumed per query. Governance must track it.</li>
    <li>External LLM (Path A) and on-prem local model (Path B) are both supported. Policy decides which workflow uses which.</li>
    <li>Avoid claims like "100% safe", "GDPR guaranteed", "zero risk", "mathematically impossible." Use bounded technical language.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is differential privacy in enterprise AI?", "acceptedAnswer": { "@type": "Answer", "text": "Differential privacy is a mathematical framework that bounds the influence any single record can have on a derived output. In enterprise AI, it is applied during the encapsulation step of a context-preserving data layer for AI to reduce re-identification, inference, and sensitive context exposure risks when operational data — network logs, configurations, OT manifests, clinical workflows — is transformed into AI-ready context." } }, { "@type": "Question", "name": "How is differential-privacy-based encapsulation different from PII masking?", "acceptedAnswer": { "@type": "Answer", "text": "PII masking detects and replaces personal identifiers — names, IDs, financial fields. Differential-privacy-based encapsulation additionally protects against inference and re-identification across complex operational data such as network logs, incident records, and OT configurations, where structure and aggregate patterns themselves can leak sensitive information. It is a technical protection layer with a defined risk-reduction scope, not a substitute for compliance frameworks." } }, { "@type": "Question", "name": "Does differential privacy guarantee zero risk?", "acceptedAnswer": { "@type": "Answer", "text": "No. Differential privacy is not a legal guarantee or absolute claim. It is a mathematical framework for bounding the contribution of any single record to a derived output, with a tunable parameter that trades utility against privacy. LLM Capsule presents differential-privacy-based encapsulation as a technical protection layer with a defined risk-reduction scope, not as 100 percent safety, GDPR guarantee, or zero risk." } }, { "@type": "Question", "name": "When should an enterprise use differential-privacy-based protection?", "acceptedAnswer": { "@type": "Answer", "text": "When the data going into an LLM is operational, structured, and re-identifiable through context — such as network topology with device IDs, incident sequences with site references, OT manifests with asset and zone references, clinical workflows with patient journeys, or mission logs with unit and location references. PII filtering alone cannot adequately protect these classes of data." } } ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data",
    lead: "PII filtering reaches the names. Differential privacy reaches the patterns. Why differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI.",
    category: "PILLAR · Differential Privacy",
    readTime: "12 min read",
    dateUpdated: "Updated May 2025",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "Differential-privacy-based encapsulation is the technical foundation of the context-preserving data layer for AI. It transforms regulated operational data into AI-ready context while preserving structure (table layout, log sequence, document hierarchy) and applying differential-privacy-based protection to reduce re-identification, inference, and sensitive context exposure risks. It is a technical protection layer with a defined risk-reduction scope — not a legal guarantee.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "엔터프라이즈 AI를 위한 차등 프라이버시: 개념, 중요성, 운영 데이터 적용 방식",
    lead: "PII 필터링은 이름을 찾아냅니다. 차등 프라이버시는 패턴까지 막습니다. 차등 프라이버시 기반 캡슐화가 AI 데이터 레이어의 기술적 토대인 이유입니다.",
    category: "PILLAR · Differential Privacy",
    readTime: "12분 읽기",
    dateUpdated: "2025년 5월 업데이트",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "차등 프라이버시 기반 캡슐화는 AI 데이터 레이어의 기술적 토대입니다. 규제 대상 운영 데이터를 AI 처리 가능한 컨텍스트로 변환하면서 구조(테이블 레이아웃, 로그 시퀀스, 문서 계층)를 보존하고, 재식별·추론·민감 컨텍스트 노출 위험을 줄이기 위한 차등 프라이버시 기반 보호를 적용합니다. 정의된 위험 감소 범위를 가진 기술적 보호 레이어입니다. 법적 보증이 아닙니다.",
    bodyHtml: `<h2>PII 필터링이 해결하지 못하는 문제</h2>

<p>실제 내부 데이터에 외부 LLM을 적용하려 할 때 대부분의 기업 팀이 같은 벽에 부딪힙니다. 데이터는 PII 필터를 통과했지만, 워크플로는 여전히 작동하지 않습니다. 이름은 사라졌습니다. 전화번호도 사라졌습니다. 그러나 네트워크 구성은 여전히 식별 가능합니다. 인시던트 시퀀스는 여전히 고객 세그먼트를 드러냅니다. OT 알림 패턴은 여전히 현장을 노출시킵니다.</p>

<p>이것이 바로 차등 프라이버시가 해결하도록 설계된 격차입니다. PII 필터링은 <em>필드 수준</em>의 방어입니다. 이름처럼 보이는 패턴을 찾아 교체합니다. 차등 프라이버시는 <em>분포 수준</em>의 방어입니다. 단일 레코드가 출력에 미치는 영향을 제한합니다. 데이터가 운영용이고 구조화되어 있으며 컨텍스트를 통해 재식별 가능하다면, 두 가지 모두 필요합니다.</p>

<div class="callout"><strong>운영 데이터는 PII 필드의 목록이 아닙니다.</strong> 네트워크 로그, 인시던트 기록, 구성 트리, OT 매니페스트, 임상 워크플로, 미션 로그는 식별 가능한 필드뿐 아니라 구조·시퀀스·집계 패턴을 통해 정보를 노출합니다.</div>

<h2>차등 프라이버시란 무엇인가</h2>

<p>차등 프라이버시(DP)는 2006년 Cynthia Dwork과 동료들이 도입한 수학적 프레임워크입니다. 직관은 단순합니다. 특정 레코드가 포함되든 그렇지 않든 결과가 거의 동일하다면, 그 연산은 차등 프라이버시를 만족합니다. "거의"는 엡실론(ε)으로 파라미터화됩니다. 엡실론이 작을수록 프라이버시는 강해지고, 유용성은 낮아집니다.</p>

<p>실제로 DP는 출력·쿼리·변환에 보정된 노이즈를 추가하는 방식으로 구현됩니다. 노이즈 규모는 함수의 민감도와 선택한 프라이버시 예산으로 결정됩니다. 올바르게 적용하면, 임의의 배경 지식을 가진 공격자가 출력에서 개별 레코드에 대해 학습할 수 있는 내용을 정량적으로 제한할 수 있습니다.</p>

<h3>DP가 아닌 것</h3>

<ul>
<li>예/아니오로 단정되는 보증이 아닙니다. 유용성과 프라이버시 위험을 조율하는 조정 가능한 파라미터입니다.</li>
<li>단독으로는 GDPR, HIPAA 또는 특정 규정 준수를 보장하지 않습니다.</li>
<li>위험을 제거하지 않습니다. 위험을 제한하고 특성화하여 엔지니어와 컴플라이언스 팀이 합리적으로 판단할 수 있도록 합니다.</li>
</ul>

<h2>DP가 AI 데이터 레이어에 속하는 이유</h2>

<p>AI 데이터 레이어는 규제 대상 운영 데이터가 "비공개"에서 "LLM이 사용 가능"으로 전환되는 지점입니다. 일반적인 PII 전용 파이프라인에서는 식별 가능한 필드를 감지하고, 토큰으로 교체한 후 LLM에 전달하고, 이후 토큰을 복원합니다. 민감 콘텐츠가 주로 개인 식별자인 고객 서비스 채팅이나 계약 검토 워크플로에는 이것으로 충분합니다.</p>

<p>민감 정보가 국가 통신사의 네트워크 토폴로지, 장애 직전의 알림 시퀀스, 두 PLC 간 구성 드리프트, 또는 병동의 운영 리듬인 경우에는 작동하지 않습니다. 그 경우 필드 수준 마스킹은 통과하지만, 컨텍스트를 재구성하면 기저 패턴은 여전히 읽힙니다.</p>

<p>차등 프라이버시 기반 캡슐화는 필드 수준 마스킹에 분포 수준 보호 레이어를 추가합니다. 데이터가 LLM에 도달하기 전, 캡슐화 단계에서 적용되며 운영 데이터의 민감도 프로파일에 맞게 보정됩니다.</p>

<h2>LLM Capsule의 차등 프라이버시 적용 방식</h2>

<p>LLM Capsule은 <strong>문서 구조 보존 캡슐화</strong>라는 더 넓은 변환 프레임 안에서 차등 프라이버시 기반 보호를 적용합니다. 전체 파이프라인은 다음과 같습니다.</p>

<ol>
<li><strong>수집</strong> — 운영 데이터가 커넥터 레인(NOC 플러그인, 티켓 웹훅, OT 로그 탭, 파일 감시)을 통해 Capsule Runtime으로 진입합니다.</li>
<li><strong>기밀성 마커 식별</strong> — 일반 PII를 넘어 네트워크 식별자, 시스템 운영 로그, OT/자산 참조, 미션 및 임상 컨텍스트를 식별합니다.</li>
<li><strong>문서 구조 보존 변환 적용</strong> — 테이블 레이아웃, 로그 시퀀스, 문서 계층 구조, 구성 트리가 보존되어 LLM이 계속 추론할 수 있습니다.</li>
<li><strong>차등 프라이버시 기반 보호 적용</strong> — 해당 워크플로의 정책 프라이버시 예산에 맞게 보정됩니다. epsilon-DP 활성화, 라플라스 노이즈 주입, k-익명성 적용, 시맨틱 토큰화, 자유 텍스트 NER 마스킹을 수행합니다.</li>
<li><strong>실행 경로 라우팅</strong> — Path A(외부 승인 LLM, 캡슐 데이터만 전송) 또는 Path B(온프레미스 경량 모델, 외부 전송 없음)로 라우팅합니다.</li>
<li><strong>상태 볼트를 통한 복원</strong> — LLM 출력이 원본 운영 식별자로 자동 복원되어 워크플로(RCA, 티켓 업데이트, 런북, 응답 초안)에 다시 삽입됩니다.</li>
</ol>

<p>핵심 주장은 제한적입니다. <em>차등 프라이버시 기반 캡슐화는 운영 데이터셋의 재식별·추론·민감 컨텍스트 노출 위험을 감소시킵니다.</em> 제로 리스크를 약속하는 것이 아닙니다. 거버넌스에서 확인 가능한 프라이버시 예산을 갖춘 정의된 기술적 보호 레이어입니다.</p>

<h2>DP vs PII 필터링: 비교</h2>

<table>
<thead><tr><th></th><th>PII 필터링 / 가드레일</th><th>차등 프라이버시 기반 캡슐화</th></tr></thead>
<tbody>
<tr><td>방어 수준</td><td>필드 수준 (식별 가능한 필드 탐지 및 교체)</td><td>필드 수준 + 분포 수준 (단일 레코드의 영향 제한)</td></tr>
<tr><td>범위</td><td>이름, ID, 금융 필드, 주소</td><td>+ 네트워크 로그, 구성, OT 알림, 임상 및 미션 컨텍스트</td></tr>
<tr><td>실패 유형</td><td>패턴이 통과됨 (구조, 시퀀스, 집계)</td><td>위험이 프라이버시 예산으로 제한되고 가시화됨</td></tr>
<tr><td>일반적 주장</td><td>"PII 제거됨"</td><td>"정의된 위험 감소 범위를 갖춘 프라이버시 보호"</td></tr>
<tr><td>감사 태세</td><td>감지 로그</td><td>프라이버시 예산, 감사 이력, 거버넌스 증거</td></tr>
</tbody>
</table>

<h2>AI 레이어에 DP 도입 전 기업이 확인해야 할 사항</h2>

<ol>
<li><strong>워크플로별 프라이버시 예산은 얼마인가?</strong> 워크플로마다 다른 엡실론 값을 가질 수 있습니다. NOC 분석은 더 높은 유용성을 허용할 수 있습니다. 미션 요약은 더 강한 보호를 요구할 수 있습니다.</li>
<li><strong>예산은 어디서 소비되는가?</strong> 동일 데이터셋에 대한 각 쿼리는 예산의 일부를 소비합니다. 실행 레이어는 이를 추적하고 거버넌스에 노출해야 합니다.</li>
<li><strong>구조 보존 요건은 무엇인가?</strong> LLM이 토폴로지를 추론해야 한다면, 단순한 노이즈 주입으로 구조를 파괴해서는 안 됩니다. 문서 구조 보존 캡슐화가 이 문제를 해결합니다.</li>
<li><strong>보호 조치는 어떻게 감사 가능한가?</strong> 차등 프라이버시는 파라미터와 예산이 문서화되고, 추적 가능하며, 정책에 연결된 경우에만 의미가 있습니다.</li>
</ol>

<h2>외부 LLM 사용 vs 온프레미스 실행</h2>

<p>차등 프라이버시 기반 캡슐화는 LLM Capsule의 두 실행 경로를 모두 지원하지만, 운영상 의미는 다릅니다.</p>

<blockquote><strong>Path A · 외부 승인 LLM</strong> — 캡슐 데이터가 승인된 외부 LLM 엔드포인트로 전송됩니다. 원본 운영 데이터는 기업 환경 밖으로 나가지 않습니다. DP 레이어가 캡슐 자체에 대한 추론 위험을 줄입니다.</blockquote>

<blockquote><strong>Path B · 온프레미스 경량 모델</strong> — 캡슐 실행이 기업 환경 내부에서 완전히 처리됩니다. 외부 전송이 없습니다. 망분리, 기밀, 또는 엄격한 규제 운영에 사용됩니다.</blockquote>

<p>선택은 워크플로의 규제 프로파일, 데이터 주권 제약, 고객 약정에 따른 정책 결정입니다. 실행 레이어는 두 경로 모두를 지원하며, 거버넌스가 어디에 어떤 경로를 적용할지 결정합니다.</p>

<h2>"100% 안전" 또는 "GDPR 보장" 같은 절대적 주장에 대하여</h2>

<p>피하십시오. 차등 프라이버시는 견고하고 충분히 연구된 프레임워크이지만, 마법이 아닙니다. "수학적으로 재구성이 불가능하다"는 벤더 주장은 프레임워크를 지나치게 단순화하고 검증 공격을 초래합니다. 정직한 표현은 다음과 같습니다.</p>

<ul>
<li>"정의된 위험 감소 범위를 갖춘 프라이버시 보호"</li>
<li>"정책 프라이버시 예산 내에서 제한된 추론 위험"</li>
<li>"외부 LLM에 원본 운영 데이터 노출 없음 (Path A)"</li>
<li>"로컬 실행 경로에서 외부 노출 Zero Exposure (Path B)"</li>
</ul>

<p>이것이 규제 대상 구매자의 보안 및 법무 팀이 수용할 수 있는 주장입니다. 절대적 주장은 검증의 대상이 됩니다.</p>

<h2>AI 데이터 레이어 전체에서의 위치</h2>

<p>차등 프라이버시 기반 캡슐화는 LLM Capsule 런타임의 기능 중 하나입니다. 런타임에는 문서 구조 보존 변환, 정책 기반 마커 제어, 복원용 상태 볼트, 감사 이력이 함께 포함됩니다. 차등 프라이버시 컴포넌트는 캡슐을 패턴 수준 추론 공격으로부터 방어합니다. 문서 구조 보존 컴포넌트는 LLM이 유용하게 활용할 수 있게 합니다. 상태 볼트는 결과를 워크플로에 그대로 복원합니다.</p>

<p>이 세 가지 모두, 그리고 기존 NOC·티켓·OT·EHR·미션 시스템에 연결하는 커넥터 레인이 있기 때문에 LLM Capsule은 프라이버시 제품이나 PII 툴이 아닌 <strong>AI 데이터 레이어</strong>로 자리매김합니다.</p>

<div class="takeaways">
<div class="takeaways__h">핵심 요약</div>
<ul>
<li>PII 필터링은 필드 수준입니다. 차등 프라이버시는 분포 수준입니다. 운영 데이터에는 두 가지 모두 필요합니다.</li>
<li>차등 프라이버시 기반 캡슐화는 LLM Capsule의 기술적 토대이며, 문서 구조 보존 변환 과정에서 적용됩니다.</li>
<li>재식별·추론·민감 컨텍스트 노출 위험을 정의된, 감사 가능한 범위 내에서 감소시킵니다. 절대적 보증이 아닙니다.</li>
<li>프라이버시 예산은 워크플로별로 다르며 쿼리마다 소비됩니다. 거버넌스가 반드시 추적해야 합니다.</li>
<li>외부 LLM(Path A)과 온프레미스 로컬 모델(Path B) 모두 지원됩니다. 어떤 워크플로에 어떤 경로를 사용할지는 정책이 결정합니다.</li>
<li>"100% 안전", "GDPR 보장", "제로 리스크", "수학적으로 불가능" 같은 표현을 피하십시오. 제한적인 기술 언어를 사용하십시오.</li>
</ul>
</div>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Differential Privacy für den KI-Einsatz im Unternehmen: Grundlagen, Relevanz und Anwendung auf operative Daten",
    lead: "PII-Filterung erfasst personenbezogene Felder. Differential Privacy schützt vor Rückschlüssen auf Musterebene. Warum strukturerhaltende Kapsulierung auf Basis von Differential Privacy die technische Grundlage der KI-Datenschicht bildet.",
    category: "GRUNDLAGE · Differential Privacy",
    readTime: "12 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2025",
    tldrLabel: "Definition · Kurzfassung",
    tldrBody: "Differential-Privacy-basierte Kapsulierung ist die technische Grundlage der KI-Datenschicht. Sie überführt regulierte operative Daten in einen KI-geeigneten Kontext. Dabei bleibt die Struktur (Tabellenlayout, Log-Sequenz, Dokumenthierarchie) erhalten. Differential-Privacy-basierter Schutz reduziert Re-Identifikations-, Inferenz- und Kontextoffenlegungsrisiken. Es handelt sich um eine technische Schutzschicht mit definiertem Risikoreduktionsumfang — nicht um eine rechtliche Garantie.",
    bodyHtml: `<h2>Die Grenzen der PII-Filterung</h2>

<p>Unternehmensteams stoßen regelmäßig auf dasselbe Problem: Die Daten bestehen die PII-Prüfung, der Workflow schlägt dennoch fehl. Namen und Telefonnummern sind entfernt. Die Netzwerkkonfiguration bleibt jedoch erkennbar. Die Incident-Sequenz identifiziert das Kundensegment. Das OT-Alarmmuster verrät die Anlage.</p>

<p>Genau diese Lücke adressiert Differential Privacy. PII-Filterung ist eine Schutzmaßnahme auf <em>Feldebene</em>: Sie erkennt und ersetzt Muster, die wie Namen aussehen. Differential Privacy ist ein <em>verteilungsbasierter</em> Schutz: Sie begrenzt, wie stark ein einzelner Datensatz das Ergebnis beeinflussen kann. Bei operativen, strukturierten und kontextuell re-identifizierbaren Daten sind beide Ansätze erforderlich.</p>

<div class="callout"><strong>Operative Daten sind keine Liste personenbezogener Felder.</strong> Netzwerklogs, Incident-Datensätze, Konfigurationsbäume, OT-Manifeste, klinische Workflows und Einsatzprotokolle geben Informationen durch Struktur, Sequenz und Aggregationsmuster preis — nicht nur durch identifizierbare Felder.</div>

<h2>Was Differential Privacy ist</h2>

<p>Differential Privacy (DP) ist ein mathematisches Rahmenwerk, das 2006 von Cynthia Dwork und Kollegen eingeführt wurde. Das Grundprinzip: Eine Berechnung gilt als differentiell privat, wenn das Ergebnis nahezu identisch bleibt, unabhängig davon, ob ein bestimmter Datensatz einbezogen wurde oder nicht. Das „nahezu" wird durch den Parameter Epsilon (ε) quantifiziert — ein kleineres Epsilon bedeutet stärkeren Schutz bei geringerer Nutzbarkeit.</p>

<p>In der Praxis wird DP durch das Hinzufügen kalibrierten Rauschens zu Ausgaben, Abfragen oder Transformationen umgesetzt. Das Ausmaß des Rauschens wird durch die Sensitivität der Funktion und das gewählte Privacy-Budget bestimmt. Korrekt angewendet liefert DP eine quantifizierbare Schranke dafür, was ein Angreifer über einen einzelnen Datensatz aus der Ausgabe ableiten kann — selbst bei beliebigem Hintergrundwissen.</p>

<h3>Was DP nicht ist</h3>

<ul>
<li>DP ist keine binäre Garantie. Es ist ein einstellbarer Parameter, der Nutzbarkeit gegen Datenschutzrisiko abwägt.</li>
<li>DP allein garantiert keine Konformität mit der DSGVO (GDPR), HIPAA oder anderen spezifischen Vorschriften.</li>
<li>DP eliminiert Risiken nicht. Es begrenzt und charakterisiert Risiken, sodass Entwicklungsteams und Compliance-Verantwortliche fundiert damit arbeiten können.</li>
</ul>

<h2>Warum DP zur KI-Datenschicht gehört</h2>

<p>Die KI-Datenschicht ist der Punkt, an dem regulierte operative Daten von „vertraulich" zu „LLM-nutzbar" werden. In einer reinen PII-Pipeline werden identifizierbare Felder erkannt, durch Token ersetzt, an das LLM weitergeleitet und anschließend wiederhergestellt. Dieser Ansatz funktioniert bei Kundenservice-Chats oder Vertragsüberprüfungs-Workflows, bei denen der sensible Inhalt überwiegend aus individuellen Kennungen besteht.</p>

<p>Er versagt, wenn die sensible Information die Netzwerktopologie eines nationalen Carriers ist, die Alarmsequenz vor einem Ausfall, die Konfigurationsabweichung zwischen zwei PLCs oder der Betriebsrhythmus einer Krankenhausstation. In diesen Fällen passieren die Felder die Maskierung, die zugrundeliegenden Muster bleiben jedoch für jeden lesbar, der den Kontext rekonstruiert.</p>

<p>Differential-Privacy-basierte Kapsulierung ergänzt die Feldmaskierung um eine verteilungsbasierte Schutzschicht. Sie wird während des Kapsulierungsschritts angewendet — bevor die Daten das LLM erreichen — und wird gegen das Sensitivitätsprofil der operativen Daten kalibriert.</p>

<h2>Anwendung von Differential Privacy in LLM Capsule</h2>

<p>LLM Capsule wendet Differential-Privacy-basierten Schutz innerhalb einer umfassenderen Transformation an, die als <strong>strukturerhaltende Kapsulierung</strong> bezeichnet wird. Der vollständige Prozessablauf:</p>

<ol>
<li><strong>Einspeisung</strong> — Operative Daten gelangen über den Connector Lane in die Capsule Runtime (NOC-Plug-in, Ticket-Webhook, OT-Log-Tap oder Dateiüberwachung).</li>
<li><strong>Vertraulichkeitsmarker identifizieren</strong> — über generische PII hinaus: Netzwerkkennungen, System-Betriebslogs, OT/Asset-Referenzen sowie Missions- und klinischer Kontext.</li>
<li><strong>Strukturerhaltende Transformation anwenden</strong> — Tabellenlayout, Log-Sequenz, Dokumenthierarchie und Konfigurationsbaum bleiben erhalten, damit das LLM weiterhin darüber schlussfolgern kann.</li>
<li><strong>Differential-Privacy-basierten Schutz anwenden</strong> — kalibriert gegen das Privacy-Budget der Richtlinie für den jeweiligen Workflow. Epsilon-DP aktiv, Laplace-Rauschen, k-Anonymitätsdurchsetzung, semantische Tokenisierung, Freitext-NER-Maskierung.</li>
<li><strong>Ausführungspfad zuweisen</strong> — Pfad A (externes zugelassenes LLM, nur Kapseldaten) oder Pfad B (On-Premise-Leichtgewichtmodell, keine externe Übertragung).</li>
<li><strong>Wiederherstellung über State Vault</strong> — Die LLM-Ausgabe wird mit den originalen operativen Kennungen angereichert und in den Workflow zurückgeführt (RCA, Ticket-Aktualisierung, Runbook, Antwortentwurf).</li>
</ol>

<p>Die technische Schutzaussage ist klar begrenzt: <em>Differential-Privacy-basierte Kapsulierung reduziert Re-Identifikations-, Inferenz- und Kontextoffenlegungsrisiken für den operativen Datensatz.</em> Es handelt sich nicht um eine Nullrisikoversprechen, sondern um eine definierte technische Schutzschicht mit einem für die Governance sichtbaren Privacy-Budget.</p>

<h2>DP vs. PII-Filterung: Gegenüberstellung</h2>

<table>
<thead><tr><th></th><th>PII-Filterung / Schutzmaßnahmen</th><th>Differential-Privacy-basierte Kapsulierung</th></tr></thead>
<tbody>
<tr><td>Schutzebene</td><td>Feldebene (identifizierbare Felder erkennen und ersetzen)</td><td>Feldebene + verteilungsbasiert (Einfluss einzelner Datensätze begrenzen)</td></tr>
<tr><td>Abdeckung</td><td>Namen, IDs, Finanzfelder, Adressen</td><td>+ Netzwerklogs, Konfigurationen, OT-Alarme, klinischer und Missionskontext</td></tr>
<tr><td>Fehlermuster</td><td>Muster passieren die Filterung (Struktur, Sequenz, Aggregation)</td><td>Risiko ist begrenzt und über das Privacy-Budget sichtbar</td></tr>
<tr><td>Typische Aussage</td><td>„PII entfernt"</td><td>„Datenschutzwahrend mit definiertem Risikoreduktionsumfang"</td></tr>
<tr><td>Prüfbarkeit</td><td>Erkennungsprotokolle</td><td>Privacy-Budget, Prüfpfad, Governance-Nachweise</td></tr>
</tbody>
</table>

<h2>Fragen für Unternehmen vor dem DP-Einsatz auf KI-Ebene</h2>

<ol>
<li><strong>Wie hoch ist das Privacy-Budget je Workflow?</strong> Unterschiedliche Workflows können unterschiedliche Epsilon-Werte tragen. NOC-Analysen können höhere Nutzbarkeit tolerieren. Missionsübersichten erfordern möglicherweise stärkeren Schutz.</li>
<li><strong>Wo wird das Budget verbraucht?</strong> Jede Abfrage gegen denselben Datensatz verbraucht einen Teil des Budgets. Die Ausführungsschicht sollte dies nachverfolgen und der Governance sichtbar machen.</li>
<li><strong>Welche Anforderungen bestehen an die Strukturerhaltung?</strong> Wenn das LLM über die Topologie schlussfolgern muss, darf diese nicht durch naives Rauschen zerstört werden. Strukturerhaltende Kapsulierung löst dieses Problem.</li>
<li><strong>Wie ist der Schutz prüfbar?</strong> Differential Privacy ist nur dann aussagekräftig, wenn Parameter und Budgets dokumentiert, nachvollziehbar und an Richtlinien geknüpft sind.</li>
</ol>

<h2>Externes LLM vs. On-Premise-Ausführung</h2>

<p>Differential-Privacy-basierte Kapsulierung unterstützt beide Ausführungspfade in LLM Capsule. Die operative Bedeutung unterscheidet sich jedoch:</p>

<blockquote><strong>Pfad A · Externes zugelassenes LLM</strong> — Kapseldaten werden an einen zugelassenen externen LLM-Endpunkt übertragen. Operative Rohdaten verlassen die Unternehmensumgebung nicht. Die DP-Schicht reduziert das Inferenzrisiko auf der Kapsel selbst.</blockquote>

<blockquote><strong>Pfad B · On-Premise-Leichtgewichtmodell</strong> — Die Kapselausführung findet vollständig innerhalb der Unternehmensumgebung statt. Keine externe Übertragung. Einsatz bei Air-Gapped-, klassifizierten oder streng regulierten Betriebsumgebungen.</blockquote>

<p>Die Wahl ist eine richtliniengesteuerte Entscheidung, die durch das regulatorische Profil des Workflows, Datensouveränitätsvorgaben und Kundenverpflichtungen bestimmt wird. Die Ausführungsschicht ermöglicht beide Varianten; die Governance legt fest, welche Variante wo gilt.</p>

<h2>Zu absoluten Aussagen wie „100 % sicher" oder „DSGVO-garantiert"</h2>

<p>Solche Aussagen sollten vermieden werden. Differential Privacy ist ein robustes, gut erforschtes Rahmenwerk — aber kein Allheilmittel. Die Herstelleraussage „mathematisch unmöglich zu rekonstruieren" vereinfacht das Rahmenwerk unzulässig und lädt zu Verifikationsangriffen ein. Die sachlich korrekte Formulierung lautet:</p>

<ul>
<li>„Datenschutzwahrend mit definiertem Risikoreduktionsumfang"</li>
<li>„Begrenztes Inferenzrisiko im Rahmen des Privacy-Budgets der Richtlinie"</li>
<li>„Keine Offenlegung operativer Rohdaten gegenüber externen LLMs (Pfad A)"</li>
<li>„Keine externe Datenübertragung beim lokalen Ausführungspfad (Pfad B)"</li>
</ul>

<p>Diese Formulierungen sind für Sicherheits- und Rechtsabteilungen regulierter Einkäufer nachvollziehbar und prüfbar. Absolute Aussagen hingegen werden hinterfragt.</p>

<h2>Einordnung in die KI-Datenschicht</h2>

<p>Differential-Privacy-basierte Kapsulierung ist eine Funktion innerhalb der LLM Capsule Runtime. Die Runtime umfasst darüber hinaus strukturerhaltende Transformation, richtlinienbasierte Markerkontrolle, State Vault für die Wiederherstellung sowie einen Prüfpfad. Die Differential-Privacy-Komponente schützt die Kapsel vor Inferenzangriffen auf Musterebene; die strukturerhaltende Komponente stellt die Nutzbarkeit für das LLM sicher; der State Vault ermöglicht die Rückführung der Ergebnisse in den Workflow.</p>

<p>Alle drei Komponenten zusammen — ergänzt durch den Connector Lane, der sie in bestehende NOC-, Ticket-, OT-, EHR- und Einsatzsysteme integriert — begründen die Positionierung von LLM Capsule als <strong>KI-Datenschicht</strong> und nicht als reines Datenschutz- oder PII-Werkzeug.</p>

<div class="takeaways">
<div class="takeaways__h">Kernaussagen</div>
<ul>
<li>PII-Filterung wirkt auf Feldebene. Differential Privacy wirkt auf Verteilungsebene. Operative Daten erfordern beide Ansätze.</li>
<li>Differential-Privacy-basierte Kapsulierung ist die technische Grundlage von LLM Capsule und wird während der strukturerhaltenden Transformation angewendet.</li>
<li>Sie reduziert Re-Identifikations-, Inferenz- und Kontextoffenlegungsrisiken — mit definiertem, prüfbarem Umfang. Es handelt sich nicht um eine absolute Garantie.</li>
<li>Das Privacy-Budget ist workflowspezifisch und wird pro Abfrage verbraucht. Die Governance muss es nachverfolgen.</li>
<li>Externes LLM (Pfad A) und On-Premise-Modell (Pfad B) werden beide unterstützt. Die Richtlinie bestimmt, welcher Workflow welchen Pfad nutzt.</li>
<li>Aussagen wie „100 % sicher", „DSGVO-garantiert", „Nullrisiko" oder „mathematisch unmöglich" sind zu vermeiden. Sachgerechte, technisch begrenzte Formulierungen sind zu bevorzugen.</li>
</ul>
</div>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/differential-privacy-for-enterprise-llm",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Differential Privacy for Enterprise AI: What It Is, Why It Matters, How It Applies to Operational Data",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "PII guardrails vs operational data protection",
    related1Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "",
    related4Href: "",
  },
}

export default function DifferentialPrivacyForEnterpriseLlm({
  locale = "en",
  backLabel = "",
  backHref = "",
  title = "",
  lead = "",
  category = "",
  readTime = "",
  dateUpdated = "",
  tldrLabel = "",
  tldrBody = "",
  bodyHtml = "",
  canonicalUrl = "",
  datePublished = "",
  dateModified = "",
  inLanguage = "",
  breadcrumbLabel = "",
  faqJsonLd = "",
  relatedSectionLabel = "",
  related1Title = "",
  related1Href = "",
  related2Title = "",
  related2Href = "",
  related3Title = "",
  related3Href = "",
  related4Title = "",
  related4Href = "",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug as ("en" | "ko" | "de" | undefined)
  const effectiveLocale: "en" | "ko" | "de" = framerLocale || locale || "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const _isNonEn = effectiveLocale !== "en"
  const _backLabel = _isNonEn ? (T["backLabel"] || TRANSLATIONS.en["backLabel"] || backLabel) : (backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"])
  const _backHref = _isNonEn ? (T["backHref"] || TRANSLATIONS.en["backHref"] || backHref) : (backHref || T["backHref"] || TRANSLATIONS.en["backHref"])
  const _title = _isNonEn ? (T["title"] || TRANSLATIONS.en["title"] || title) : (title || T["title"] || TRANSLATIONS.en["title"])
  const _lead = _isNonEn ? (T["lead"] || TRANSLATIONS.en["lead"] || lead) : (lead || T["lead"] || TRANSLATIONS.en["lead"])
  const _category = _isNonEn ? (T["category"] || TRANSLATIONS.en["category"] || category) : (category || T["category"] || TRANSLATIONS.en["category"])
  const _readTime = _isNonEn ? (T["readTime"] || TRANSLATIONS.en["readTime"] || readTime) : (readTime || T["readTime"] || TRANSLATIONS.en["readTime"])
  const _dateUpdated = _isNonEn ? (T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"] || dateUpdated) : (dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"])
  const _tldrLabel = _isNonEn ? (T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"] || tldrLabel) : (tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"])
  const _tldrBody = _isNonEn ? (T["tldrBody"] || TRANSLATIONS.en["tldrBody"] || tldrBody) : (tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"])
  const _bodyHtml = _isNonEn ? (T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"] || bodyHtml) : (bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"])
  const _canonicalUrl = _isNonEn ? (T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"] || canonicalUrl) : (canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"])
  const _datePublished = _isNonEn ? (T["datePublished"] || TRANSLATIONS.en["datePublished"] || datePublished) : (datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"])
  const _dateModified = _isNonEn ? (T["dateModified"] || TRANSLATIONS.en["dateModified"] || dateModified) : (dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"])
  const _inLanguage = _isNonEn ? (T["inLanguage"] || TRANSLATIONS.en["inLanguage"] || inLanguage) : (inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"])
  const _breadcrumbLabel = _isNonEn ? (T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"] || breadcrumbLabel) : (breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"])
  const _faqJsonLd = _isNonEn ? (T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"] || faqJsonLd) : (faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"])
  const _relatedSectionLabel = _isNonEn ? (T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"] || relatedSectionLabel) : (relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"])
  const _related1Title = _isNonEn ? (T["related1Title"] || TRANSLATIONS.en["related1Title"] || related1Title) : (related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"])
  const _related1Href = _isNonEn ? (T["related1Href"] || TRANSLATIONS.en["related1Href"] || related1Href) : (related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"])
  const _related2Title = _isNonEn ? (T["related2Title"] || TRANSLATIONS.en["related2Title"] || related2Title) : (related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"])
  const _related2Href = _isNonEn ? (T["related2Href"] || TRANSLATIONS.en["related2Href"] || related2Href) : (related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"])
  const _related3Title = _isNonEn ? (T["related3Title"] || TRANSLATIONS.en["related3Title"] || related3Title) : (related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"])
  const _related3Href = _isNonEn ? (T["related3Href"] || TRANSLATIONS.en["related3Href"] || related3Href) : (related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"])
  const _related4Title = _isNonEn ? (T["related4Title"] || TRANSLATIONS.en["related4Title"] || related4Title) : (related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"])
  const _related4Href = _isNonEn ? (T["related4Href"] || TRANSLATIONS.en["related4Href"] || related4Href) : (related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"])

  const relatedItems = [
    { _title: _related1Title, href: _related1Href },
    { _title: _related2Title, href: _related2Href },
    { _title: _related3Title, href: _related3Href },
    { _title: _related4Title, href: _related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": _title,
    "description": _lead,
    "inLanguage": _inLanguage,
    "datePublished": _datePublished,
    "dateModified": _dateModified || _datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": _canonicalUrl },
  })

  const breadcrumbJsonLd = _breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": _breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {_faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: _faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside _bodyHtml */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Figure (inline diagram with SVG) */
        .la-body .ds-figure {
          margin: 28px 0;
          padding: 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
        }
        .la-body .ds-figure__svg-wrap {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .la-body .ds-figure__svg-wrap::-webkit-scrollbar { display: none; }
        .la-body .ds-figure__svg {
          display: block;
          width: 100%;
          height: auto;
          min-width: 640px;
          max-width: 100%;
        }
        .la-body .ds-figure__caption {
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--c-muted, #6b7280);
          text-align: center;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body (e.g. CTA link) */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-_title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={_backHref} className="la-hero__back">{_backLabel}</a>
              <h1 className="la-hero__title">{_title}</h1>
              <p className="la-hero__lead">{_lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{_category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{_readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{_dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{_tldrLabel}</div>
              <p className="la-tldr__body">{_tldrBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{_relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-_title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(DifferentialPrivacyForEnterpriseLlm, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "" },
  title: { type: ControlType.String, title: "Title", defaultValue: "" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: "", displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
