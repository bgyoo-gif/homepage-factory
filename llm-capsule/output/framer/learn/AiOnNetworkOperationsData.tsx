// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

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

const BODY_HTML = `<h2>The shape of network operations data</h2>
<p>A typical NOC environment generates and consumes several classes of operational data, each with its own confidentiality profile:</p>
<ul>
  <li><strong>Network topology</strong> — routers, switches, optical paths, cell sites, BSC/MSC layout, peering points.</li>
  <li><strong>Device and site identifiers</strong> — device IDs, cell site IDs, circuit IDs, port references.</li>
  <li><strong>Alarms and events</strong> — fault types, severity, sequence, root indicators.</li>
  <li><strong>Incident records</strong> — INC-IDs, ticket trails, escalation paths, customer-impact data, SLA risk.</li>
  <li><strong>Configuration trees</strong> — running config, candidate config, diff between revisions.</li>
  <li><strong>Performance counters</strong> — throughput, packet loss, latency baselines, anomaly thresholds.</li>
  <li><strong>Outage history</strong> — patterns and recurrence.</li>
</ul>
<p>None of this is generic PII. All of it is operationally sensitive. PII guardrails do not protect it adequately because the patterns themselves — sequence, structure, aggregation — leak.</p>

<h2>What AI can do here, when it can reach the data</h2>

<h3>Incident RCA drafting</h3>
<p>Given an incident with linked alarms, configuration history, and topology context, an LLM can draft a structured RCA: timeline, suspected root cause, contributing factors, recommended remediation. The NOC engineer reviews and finalizes. End-to-end RCA time drops from hours to minutes for routine incidents.</p>

<h3>Alarm correlation</h3>
<p>Correlate noisy alarm streams against known fault patterns. The LLM proposes a likely root fault and the chain of dependent alarms it explains, reducing alarm fatigue and accelerating triage.</p>

<h3>Configuration drift detection and explanation</h3>
<p>Compare configuration revisions across devices or sites. Surface drift that violates policy. Generate human-readable explanations of what changed and what the operational implication is.</p>

<h3>Runbook generation and update</h3>
<p>Draft new runbooks from incident response trails. Update existing runbooks when the resolution pattern shifts.</p>

<h3>Customer-impact summarization</h3>
<p>Summarize customer-impact data per incident with appropriate aggregation and audit trail — ready for SLA reporting and incident review.</p>

<h2>Why this is blocked today</h2>
<p>Most carriers face the same blockers when their network engineering teams ask for AI assistance:</p>
<ol>
  <li><strong>Data sovereignty.</strong> Network operational data cannot leave the regulated jurisdiction.</li>
  <li><strong>Customer-impact sensitivity.</strong> Even with names removed, customer-impact data identifies segments.</li>
  <li><strong>Topology disclosure.</strong> Network topology is itself a competitive and security asset.</li>
  <li><strong>Audit and compliance.</strong> Regulators want a defensible trail of what data was transformed, by what policy, and where it went.</li>
  <li><strong>PII guardrails fall short.</strong> Standard guardrails address customer names, not device or site or topology references.</li>
</ol>

<h2>The AI enablement data layer pattern</h2>
<p>LLM Capsule sits between the existing NOC environment and the LLM. The pattern, end to end:</p>
<ol>
  <li>The NOC console, ticket system, or log viewer raises an event (incident opened, alarm correlated, runbook update requested).</li>
  <li>The connector lane forwards the relevant data to the Capsule Runtime — REST API, webhook, log tap, or SDK call.</li>
  <li>The Capsule Runtime applies <strong>structure-preserving encapsulation</strong>: device IDs, site IDs, circuit IDs, customer references, alarm sequences are tokenized while preserving the relational structure the LLM needs to reason.</li>
  <li><strong>Differential-privacy-based protection</strong> is applied to bound inference risk on the capsule.</li>
  <li>The capsule is routed to <strong>Path A</strong> (external approved LLM, no raw operational data exposure) or <strong>Path B</strong> (on-prem local lightweight model, zero external exposure) per policy.</li>
  <li>The LLM produces a draft RCA, correlation, or summary.</li>
  <li>The state vault <strong>restores</strong> the original operational identifiers in the output.</li>
  <li>The result is inserted back into the ticket, runbook, or NOC view.</li>
  <li>Governance records the policy applied, the privacy budget consumed, and the audit trail.</li>
</ol>

<h2>What gets capsulized — and what stays raw</h2>
<table class="compare-table">
  <thead><tr><th>Field type</th><th>Treatment in capsule</th><th class="us">Restored on output?</th></tr></thead>
  <tbody>
    <tr><td>Device ID (e.g. R-472)</td><td>Tokenized with structure preserved</td><td class="us-cell">Yes — original ID returned</td></tr>
    <tr><td>Cell site ID (e.g. SEO-18)</td><td>Tokenized; geographic hint generalized</td><td class="us-cell">Yes</td></tr>
    <tr><td>Circuit ID</td><td>Tokenized</td><td class="us-cell">Yes</td></tr>
    <tr><td>Customer name</td><td>Field-level redaction</td><td class="us-cell">Yes (if policy allows)</td></tr>
    <tr><td>Alarm sequence</td><td>Sequence preserved; absolute timestamps fuzzed by DP</td><td class="us-cell">Yes — original sequence returned</td></tr>
    <tr><td>SLA impact value</td><td>Bucketed under DP for aggregate reasoning</td><td class="us-cell">Original value preserved separately</td></tr>
    <tr><td>Topology graph</td><td>Structurally preserved, identifiers tokenized</td><td class="us-cell">Yes</td></tr>
  </tbody>
</table>

<h2>Telecom-specific patterns to expect</h2>

<h3>Incident-driven workflow</h3>
<p>Most NOC AI workflows are incident-driven. The trigger is an alarm or ticket. The end state is an updated ticket or runbook. LLM Capsule's connector lane is designed to fit this loop without adding a separate UI.</p>

<h3>Multi-tenancy and segment confidentiality</h3>
<p>Carriers with multiple business units or wholesale customers need segment-level confidentiality even within their own AI workflows. Policy-driven marker control in the Capsule Runtime supports this: different policies per segment, audit per segment.</p>

<h3>On-prem-first deployments</h3>
<p>Telecom regulators and customer contracts often require on-prem or in-region execution. Path B (on-prem local lightweight model) with zero external exposure is the standard deployment for carriers in regulated markets.</p>

<h2>Validation: Deutsche Telekom T Challenge 2026</h2>
<p>LLM Capsule was validated at the <strong>Deutsche Telekom T Challenge 2026</strong>, finishing <strong>Top 12 in the Data Security &amp; Governance category</strong>. The challenge evaluated technologies for protecting and operationalizing sensitive enterprise data in AI workflows. The validation covered the operational data classes described above and the workflow integration pattern.</p>
<div class="callout"><strong>What the validation tested.</strong> Whether the technology preserved enough operational structure for the LLM to produce useful output, while reducing inference and re-identification risk to a level acceptable for a regulated carrier's data security and governance posture.</div>

<h2>What buying teams should evaluate</h2>
<ol>
  <li><strong>Connector lane coverage.</strong> Does it plug into your specific NOC, ticket, OSS/BSS, and log infrastructure?</li>
  <li><strong>Marker categories beyond PII.</strong> Are network identifiers, system operational logs, and OT references handled as first-class markers?</li>
  <li><strong>Two execution paths.</strong> Can the same workflow be re-routed from Path A to Path B without redesigning the integration?</li>
  <li><strong>Privacy budget governance.</strong> Is the DP budget per workflow auditable?</li>
  <li><strong>State vault restoration.</strong> Are restored outputs traceable to the originating capsule and policy?</li>
  <li><strong>On-prem deployment depth.</strong> Air-gapped, hybrid, regional — which apply to your environment?</li>
</ol>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>Network operations data is structurally sensitive. PII filtering alone does not protect it.</li>
    <li>The AI enablement data layer pattern: existing NOC → connector lane → capsule with structure-preserving DP-based protection → execution path → state vault restore → back to ticket / runbook.</li>
    <li>Carriers typically deploy on Path B (on-prem local lightweight model) for regulatory and sovereignty reasons.</li>
    <li>Validated at Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance.</li>
    <li>Buying-team checklist: connector coverage, marker breadth, two execution paths, privacy budget governance, state vault, on-prem depth.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Why can't I just send NOC logs to an external LLM?", "acceptedAnswer": { "@type": "Answer", "text": "NOC logs contain device IDs, site references, circuit IDs, alarm sequences, customer-impact data, and SLA risk indicators. Sending them to an external LLM exposes network topology and operational sensitivity. Even with PII removed, the structural patterns identify the segment. Carriers in regulated jurisdictions face data sovereignty, GDPR, and audit risk. The AI enablement data layer with structure-preserving differential-privacy-based encapsulation addresses this." } }, { "@type": "Question", "name": "What kinds of NOC workflows can AI assist?", "acceptedAnswer": { "@type": "Answer", "text": "Incident RCA drafting, alarm correlation, configuration drift detection, runbook generation, customer-impact summarization, and outage history pattern recognition. The AI generates the analysis or draft from capsuled data; results are restored with original device and site references and inserted back into the ticket or runbook system." } }, { "@type": "Question", "name": "Has this been validated in production?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule was validated at Deutsche Telekom T Challenge 2026, finishing in the Top 12 in the Data Security and Governance category. The validation covered network operational data and incident workflows." } }, { "@type": "Question", "name": "Does it work with existing NOC tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule plugs into existing NOC consoles, ticket systems, OSS/BSS platforms, log viewers, and runbooks via the connector lane (REST API, webhook, file watch, log tap, SDK, or Slack App). The NOC team continues using their existing tools; the Capsule layer handles the AI workflow inside that environment." } } ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
    lead: "The data NOC engineers need AI to read is the same data they cannot send to an external LLM. Here is how to close that gap with structure-preserving, differential-privacy-based encapsulation — validated at Deutsche Telekom T Challenge 2026.",
    category: "USE CASE · Telecom",
    readTime: "12 min read",
    dateUpdated: "Updated May 2025",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "Network operations data — NOC logs, alarm sequences, incident tickets, device and site IDs, configuration trees, customer-impact summaries — is highly structured and re-identifiable through context. AI can dramatically accelerate RCA, alarm correlation, and runbook generation, but only if the data is transformed into AI-ready context first. LLM Capsule provides this AI enablement data layer, validated at Deutsche Telekom T Challenge 2026, Top 12 in Data Security & Governance.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/ai-on-network-operations-data",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "네트워크 운영 데이터와 AI: NOC, 인시던트 RCA, 통신사 워크플로우 실행",
    lead: "NOC 엔지니어가 AI에게 분석시키고 싶은 데이터는 외부 LLM에 보낼 수 없는 바로 그 데이터입니다. 문서 구조 보존과 차등 프라이버시 기반 캡슐화로 이 간격을 좁히는 방법 — Deutsche Telekom T Challenge 2026에서 검증되었습니다.",
    category: "USE CASE · Telecom",
    readTime: "12분 읽기",
    dateUpdated: "2025년 5월 업데이트",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "네트워크 운영 데이터 — NOC 로그, 알람 시퀀스, 인시던트 티켓, 장비·사이트 ID, 설정 트리, 고객 영향 요약 — 는 고도로 구조화되어 있으며 문맥을 통해 재식별이 가능합니다. AI는 RCA, 알람 상관분석, 런북 생성을 획기적으로 가속할 수 있습니다. 단, 데이터를 AI가 처리할 수 있는 형태로 먼저 변환해야 합니다. LLM Capsule이 이 데이터 레이어를 제공합니다. Deutsche Telekom T Challenge 2026에서 검증, Data Security & Governance 부문 Top 12.",
    bodyHtml: `<!-- bodyHtml — HTML 태그를 유지하면서 텍스트만 번역 -->

<h2>네트워크 운영 데이터의 구조</h2>

<p>일반적인 NOC 환경에서는 여러 유형의 운영 데이터가 생성되고 소비됩니다. 각 유형마다 고유한 기밀성 프로파일이 있습니다.</p>

<li><strong>네트워크 토폴로지</strong> — 라우터, 스위치, 광경로, 셀 사이트, BSC/MSC 구성, 피어링 포인트.</li>

<li><strong>장비 및 사이트 식별자</strong> — 장비 ID, 셀 사이트 ID, 회선 ID, 포트 참조.</li>

<li><strong>알람 및 이벤트</strong> — 장애 유형, 심각도, 시퀀스, 근본 지표.</li>

<li><strong>인시던트 기록</strong> — INC ID, 티켓 이력, 에스컬레이션 경로, 고객 영향 데이터, SLA 위험.</li>

<li><strong>설정 트리</strong> — 실행 중 설정, 후보 설정, 버전 간 차이.</li>

<li><strong>성능 카운터</strong> — 처리량, 패킷 손실, 지연 기준값, 이상 임계값.</li>

<li><strong>장애 이력</strong> — 패턴과 재발 빈도.</li>

<p>이 중 어느 것도 일반적인 개인정보(PII)가 아닙니다. 그러나 모두 운영상 민감 데이터입니다. PII 보호 장치만으로는 충분히 보호되지 않습니다. 시퀀스·구조·집계 등 패턴 자체가 정보를 누출하기 때문입니다.</p>

<h2>데이터에 접근할 수 있을 때 AI가 할 수 있는 일</h2>

<h3>인시던트 RCA 초안 작성</h3>

<p>연계된 알람·설정 이력·토폴로지 컨텍스트가 있는 인시던트를 입력하면, LLM이 구조화된 RCA 초안을 작성합니다. 타임라인, 추정 근본 원인, 기여 요인, 권고 조치가 포함됩니다. NOC 엔지니어가 검토하고 최종 확정합니다. 일상적 인시던트의 RCA 소요 시간이 몇 시간에서 몇 분으로 줄어듭니다.</p>

<h3>알람 상관분석</h3>

<p>대량의 알람 스트림을 알려진 장애 패턴과 비교·분석합니다. LLM이 가능성 높은 근본 장애와 이를 설명하는 종속 알람 체인을 제안합니다. 알람 피로를 줄이고 트리아지를 가속합니다.</p>

<h3>설정 드리프트 감지 및 설명</h3>

<p>장비 또는 사이트 간 설정 버전을 비교합니다. 정책을 위반하는 드리프트를 탐지합니다. 무엇이 변경됐는지, 운영상 의미가 무엇인지 사람이 읽을 수 있는 설명을 생성합니다.</p>

<h3>런북 생성 및 업데이트</h3>

<p>인시던트 대응 이력에서 새 런북 초안을 작성합니다. 해결 패턴이 바뀌면 기존 런북을 업데이트합니다.</p>

<h3>고객 영향 요약</h3>

<p>인시던트별 고객 영향 데이터를 적절한 집계와 감사 이력과 함께 요약합니다. SLA 보고 및 인시던트 검토에 바로 활용할 수 있습니다.</p>

<h2>오늘날 AI 도입이 막히는 이유</h2>

<p>대부분의 통신사는 네트워크 엔지니어링 팀이 AI 지원을 요청할 때 동일한 장벽에 부딪힙니다.</p>

<li><strong>데이터 주권.</strong> 네트워크 운영 데이터는 규제 관할권 밖으로 나갈 수 없습니다.</li>

<li><strong>고객 영향 데이터의 민감성.</strong> 이름을 제거해도 고객 영향 데이터는 세그먼트를 식별합니다.</li>

<li><strong>토폴로지 노출.</strong> 네트워크 토폴로지는 그 자체로 경쟁·보안 자산입니다.</li>

<li><strong>감사 및 규제 대응.</strong> 규제 기관은 어떤 데이터가 어떤 정책에 따라 변환됐고 어디로 갔는지 방어 가능한 이력을 요구합니다.</li>

<li><strong>PII 보호 장치의 한계.</strong> 표준 보호 장치는 고객 이름에만 대응하며 장비·사이트·토폴로지 참조는 다루지 않습니다.</li>

<h2>데이터 레이어 패턴</h2>

<p>LLM Capsule은 기존 NOC 환경과 LLM 사이에 위치합니다. 전체 패턴은 다음과 같습니다.</p>

<li>NOC 콘솔, 티켓 시스템, 로그 뷰어에서 이벤트가 발생합니다(인시던트 개시, 알람 상관, 런북 업데이트 요청).</li>

<li>커넥터 레인이 관련 데이터를 Capsule Runtime으로 전달합니다 — REST API, 웹훅, 로그 탭, SDK 호출.</li>

<li>Capsule Runtime이 <strong>문서 구조 보존 캡슐화</strong>를 적용합니다. 장비 ID·사이트 ID·회선 ID·고객 참조·알람 시퀀스를 토크나이즈하면서 LLM이 추론에 필요한 관계 구조를 그대로 보존합니다.</li>

<li>캡슐에 대한 추론 위험을 제한하기 위해 <strong>차등 프라이버시 기반 보호</strong>가 적용됩니다.</li>

<li>캡슐은 정책에 따라 <strong>Path A</strong>(승인된 외부 LLM, 원시 운영 데이터 노출 없음) 또는 <strong>Path B</strong>(온프레미스 경량 로컬 모델, Zero Exposure)로 라우팅됩니다.</li>

<li>LLM이 RCA 초안, 상관분석, 또는 요약을 생성합니다.</li>

<li>State Vault가 출력 결과에서 원본 운영 식별자를 <strong>복원</strong>합니다.</li>

<li>결과가 티켓, 런북, 또는 NOC 뷰에 다시 삽입됩니다.</li>

<li>거버넌스가 적용된 정책, 소비된 프라이버시 예산, 감사 이력을 기록합니다.</li>

<h2>캡슐화되는 항목 — 그리고 원본으로 유지되는 항목</h2>

<table class="compare-table">
  <thead><tr><th>필드 유형</th><th>캡슐 내 처리</th><th>출력 시 복원 여부</th></tr></thead>
  <tbody>
    <tr><td>장비 ID (예: R-472)</td><td>구조 보존 토크나이즈</td><td>예 — 원본 ID 복원</td></tr>
    <tr><td>셀 사이트 ID (예: SEO-18)</td><td>토크나이즈, 지리 힌트 일반화</td><td>예</td></tr>
    <tr><td>회선 ID</td><td>토크나이즈</td><td>예</td></tr>
    <tr><td>고객명</td><td>필드 수준 삭제</td><td>예 (정책 허용 시)</td></tr>
    <tr><td>알람 시퀀스</td><td>시퀀스 보존, 절대 타임스탬프 DP 퍼징</td><td>예 — 원본 시퀀스 복원</td></tr>
    <tr><td>SLA 영향 값</td><td>집계 추론을 위해 DP 버킷 처리</td><td>원본 값 별도 보존</td></tr>
    <tr><td>토폴로지 그래프</td><td>구조 보존, 식별자 토크나이즈</td><td>예</td></tr>
  </tbody>
</table>

<h2>통신사 환경에서 예상되는 패턴</h2>

<h3>인시던트 중심 워크플로우</h3>

<p>대부분의 NOC AI 워크플로우는 인시던트 중심입니다. 트리거는 알람 또는 티켓이며, 최종 상태는 업데이트된 티켓 또는 런북입니다. LLM Capsule의 커넥터 레인은 별도의 UI 없이 이 루프에 맞게 설계되었습니다.</p>

<h3>멀티 테넌시 및 세그먼트 기밀성</h3>

<p>여러 사업 부문이나 도매 고객을 보유한 통신사는 자체 AI 워크플로우 내에서도 세그먼트 수준의 기밀성이 필요합니다. Capsule Runtime의 정책 기반 마커 제어가 이를 지원합니다. 세그먼트별 다른 정책, 세그먼트별 감사가 가능합니다.</p>

<h3>온프레미스 우선 배포</h3>

<p>통신 규제 기관과 고객 계약은 온프레미스 또는 지역 내 실행을 요구하는 경우가 많습니다. Path B(온프레미스 경량 로컬 모델, Zero Exposure)가 규제 시장 통신사의 표준 배포 방식입니다.</p>

<h2>검증: Deutsche Telekom T Challenge 2026</h2>

<p>LLM Capsule은 <strong>Deutsche Telekom T Challenge 2026</strong>에서 검증을 받아 <strong>Data Security &amp; Governance 부문 Top 12</strong>에 올랐습니다. 이 챌린지는 AI 워크플로우에서 기업 민감 데이터를 보호하고 운영화하는 기술을 평가합니다. 검증은 위에서 설명한 운영 데이터 유형과 워크플로우 통합 패턴을 대상으로 진행되었습니다.</p>

<p class="callout__body"><strong>검증 내용.</strong> 해당 기술이 LLM이 유용한 출력을 생성할 수 있을 만큼 충분한 운영 구조를 보존하면서, 규제 통신사의 데이터 보안 및 거버넌스 수준에서 허용 가능한 수준으로 추론 및 재식별 위험을 줄이는지 여부.</p>

<h2>구매 팀이 평가해야 할 항목</h2>

<li><strong>커넥터 레인 적용 범위.</strong> 귀사의 NOC·티켓·OSS/BSS·로그 인프라에 연결됩니까?</li>

<li><strong>PII 이외의 마커 범주.</strong> 네트워크 식별자, 시스템 운영 로그, OT 참조가 최우선 마커로 처리됩니까?</li>

<li><strong>두 가지 실행 경로.</strong> 통합 재설계 없이 동일 워크플로우를 Path A에서 Path B로 전환할 수 있습니까?</li>

<li><strong>프라이버시 예산 거버넌스.</strong> 워크플로우별 DP 예산을 감사할 수 있습니까?</li>

<li><strong>State Vault 복원.</strong> 복원된 출력이 원래 캡슐과 정책으로 추적 가능합니까?</li>

<li><strong>온프레미스 배포 심도.</strong> 망분리, 하이브리드, 지역 내 — 귀사 환경에 해당되는 것은 무엇입니까?</li>

<div class="takeaways__label">핵심 요약</div>

<li>네트워크 운영 데이터는 구조적으로 민감합니다. PII 필터링만으로는 보호되지 않습니다.</li>

<li>데이터 레이어 패턴: 기존 NOC → 커넥터 레인 → 문서 구조 보존 DP 기반 보호 캡슐 → 실행 경로 → State Vault 복원 → 티켓/런북으로 반환.</li>

<li>통신사는 규제 및 데이터 주권 이유로 주로 Path B(온프레미스 경량 로컬 모델)로 배포합니다.</li>

<li>Deutsche Telekom T Challenge 2026 검증, Data Security &amp; Governance 부문 Top 12.</li>

<li>구매 팀 체크리스트: 커넥터 적용 범위, 마커 폭, 두 가지 실행 경로, 프라이버시 예산 거버넌스, State Vault, 온프레미스 배포 심도.</li>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/ai-on-network-operations-data",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "KI für Netzwerkbetriebsdaten: NOC, Incident-RCA und Telekommunikations-Workflows",
    lead: "Die Daten, die NOC-Ingenieure für den KI-Einsatz benötigen, dürfen nicht an externe Sprachmodelle übertragen werden. Dieser Artikel beschreibt, wie strukturerhaltende Kapsulierung auf Basis von Differential Privacy diese Lücke schließt — validiert beim Deutsche Telekom T Challenge 2026.",
    category: "ANWENDUNGSFALL · Telekommunikation",
    readTime: "12 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2025",
    tldrLabel: "Definition · Kurzfassung",
    tldrBody: "Netzwerkbetriebsdaten — NOC-Logs, Alarmsequenzen, Incident-Tickets, Geräte- und Standort-IDs, Konfigurationsbäume, Kundenauswirkungen — sind hochstrukturiert und über den Kontext re-identifizierbar. KI kann RCA, Alarmkorrelation und Runbook-Erstellung erheblich beschleunigen. Voraussetzung ist jedoch, dass die Daten zuvor in einen KI-geeigneten Kontext überführt werden. LLM Capsule stellt diese Datenschicht bereit — validiert beim Deutsche Telekom T Challenge 2026, Top 12 in der Kategorie Data Security & Governance.",
    bodyHtml: `<h2>Struktur der Netzwerkbetriebsdaten</h2>

<p>Eine typische NOC-Umgebung erzeugt und verarbeitet mehrere Klassen operativer Daten, die jeweils ein eigenes Vertraulichkeitsprofil aufweisen:</p>

<ul>
<li><strong>Netzwerktopologie</strong> — Router, Switches, optische Pfade, Mobilfunkstandorte, BSC/MSC-Layout, Peering-Punkte.</li>
<li><strong>Geräte- und Standortkenner</strong> — Geräte-IDs, Zellstandort-IDs, Leitungs-IDs, Port-Referenzen.</li>
<li><strong>Alarme und Ereignisse</strong> — Fehlertypen, Schweregrad, Sequenz, Ursachenkennzeichen.</li>
<li><strong>Incident-Datensätze</strong> — INC-IDs, Ticket-Verläufe, Eskalationspfade, Kundenauswirkungen, SLA-Risiko.</li>
<li><strong>Konfigurationsbäume</strong> — aktive Konfiguration, Kandidatenkonfiguration, Diff zwischen Revisionen.</li>
<li><strong>Leistungskennzahlen</strong> — Durchsatz, Paketverlust, Latenz-Baselines, Anomalie-Schwellenwerte.</li>
<li><strong>Ausfallhistorie</strong> — Muster und Wiederholungen.</li>
</ul>

<p>Keiner dieser Datenpunkte ist personenbezogen im klassischen Sinne. Alle sind betrieblich vertraulich. Klassische PII-Schutzmaßnahmen reichen nicht aus, da die Muster selbst — Sequenz, Struktur, Aggregation — Rückschlüsse ermöglichen.</p>

<h2>Einsatzmöglichkeiten von KI, wenn Datenzugriff besteht</h2>

<h3>Incident-RCA-Erstellung</h3>
<p>Anhand eines Incidents mit verknüpften Alarmen, Konfigurationshistorie und Topologiekontext kann ein LLM eine strukturierte RCA erstellen: Zeitverlauf, wahrscheinliche Ursache, beitragende Faktoren, Empfehlungen zur Behebung. Der NOC-Ingenieur prüft und finalisiert das Dokument. Die RCA-Bearbeitungszeit sinkt bei Routineincidents von Stunden auf Minuten.</p>

<h3>Alarmkorrelation</h3>
<p>Das LLM gleicht verrauschte Alarmströme mit bekannten Fehlermustern ab und schlägt den wahrscheinlichen Grundfehler sowie die Kette abhängiger Alarme vor — Alarmmüdigkeit sinkt, Triage wird beschleunigt.</p>

<h3>Erkennung und Erläuterung von Konfigurationsabweichungen</h3>
<p>Konfigurationsrevisionen werden geräte- oder standortübergreifend verglichen. Abweichungen, die gegen Richtlinien verstoßen, werden hervorgehoben. Das LLM erstellt eine verständliche Erläuterung der Änderungen und ihrer betrieblichen Auswirkungen.</p>

<h3>Runbook-Erstellung und -Aktualisierung</h3>
<p>Neue Runbooks werden aus Incident-Response-Verläufen erstellt. Bestehende Runbooks werden aktualisiert, wenn sich das Lösungsmuster verändert.</p>

<h3>Zusammenfassung von Kundenauswirkungen</h3>
<p>Kundenauswirkungen werden je Incident mit geeigneter Aggregation und Prüfpfad zusammengefasst — direkt einsetzbar für SLA-Berichte und Incident-Reviews.</p>

<h2>Aktuelle Hindernisse für den KI-Einsatz</h2>

<p>Netzbetreiber stoßen bei KI-Anfragen ihrer Netzwerkteams regelmäßig auf dieselben Hürden:</p>

<ol>
<li><strong>Datensouveränität.</strong> Netzwerkbetriebsdaten dürfen den regulierten Rechtsraum nicht verlassen.</li>
<li><strong>Vertraulichkeit der Kundenauswirkungen.</strong> Auch ohne Namen lassen sich Kundensegmente identifizieren.</li>
<li><strong>Topologieoffenlegung.</strong> Die Netzwerktopologie ist ein Wettbewerbs- und Sicherheitsgut.</li>
<li><strong>Prüfbarkeit und Compliance.</strong> Regulatoren verlangen einen nachvollziehbaren Nachweis, welche Daten wie transformiert wurden und wohin sie übertragen wurden.</li>
<li><strong>Unzureichende PII-Schutzmaßnahmen.</strong> Standardlösungen adressieren Kundennamen, nicht aber Geräte-, Standort- oder Topologiereferenzen.</li>
</ol>

<h2>Das Muster der KI-Datenschicht</h2>

<p>LLM Capsule wird zwischen die bestehende NOC-Umgebung und das LLM geschaltet. Der vollständige Prozessablauf:</p>

<ol>
<li>Die NOC-Konsole, das Ticketsystem oder der Log-Viewer löst ein Ereignis aus (Incident geöffnet, Alarm korreliert, Runbook-Aktualisierung angefordert).</li>
<li>Der Connector Lane leitet die relevanten Daten an die Capsule Runtime weiter — per REST API, Webhook, Log Tap oder SDK-Aufruf.</li>
<li>Die Capsule Runtime wendet <strong>strukturerhaltende Kapsulierung</strong> an: Geräte-IDs, Standort-IDs, Leitungs-IDs, Kundenreferenzen und Alarmsequenzen werden tokenisiert, während die relationale Struktur für das LLM erhalten bleibt.</li>
<li><strong>Differential-Privacy-basierter Schutz</strong> wird angewendet, um das Inferenzrisiko auf der Kapsel zu begrenzen.</li>
<li>Die Kapsel wird gemäß Richtlinie an <strong>Pfad A</strong> (externes zugelassenes LLM, keine Offenlegung operativer Rohdaten) oder <strong>Pfad B</strong> (On-Premise-Leichtgewichtmodell, Zero Exposure) weitergeleitet.</li>
<li>Das LLM erstellt einen RCA-Entwurf, eine Korrelation oder eine Zusammenfassung.</li>
<li>Der State Vault <strong>stellt</strong> die originalen operativen Kenner im Ergebnis wieder her.</li>
<li>Das Ergebnis wird in das Ticket, das Runbook oder die NOC-Ansicht zurückgeschrieben.</li>
<li>Das Governance-Modul protokolliert die angewendete Richtlinie, das verbrauchte Privacy-Budget und den Prüfpfad.</li>
</ol>

<h2>Was kapsuliert wird — und was unverändert bleibt</h2>

<table>
<thead><tr><th>Feldtyp</th><th>Behandlung in der Kapsel</th><th>Nach Ausgabe wiederhergestellt?</th></tr></thead>
<tbody>
<tr><td>Geräte-ID (z. B. R-472)</td><td>Tokenisiert, Struktur erhalten</td><td>Ja — Original-ID wird zurückgegeben</td></tr>
<tr><td>Zellstandort-ID (z. B. SEO-18)</td><td>Tokenisiert; geografischer Hinweis verallgemeinert</td><td>Ja</td></tr>
<tr><td>Leitungs-ID</td><td>Tokenisiert</td><td>Ja</td></tr>
<tr><td>Kundenname</td><td>Schwärzung auf Feldebene</td><td>Ja (sofern Richtlinie erlaubt)</td></tr>
<tr><td>Alarmsequenz</td><td>Sequenz erhalten; absolute Zeitstempel per DP verrauscht</td><td>Ja — Originalsequenz wird zurückgegeben</td></tr>
<tr><td>SLA-Auswirkungswert</td><td>Per DP für aggregierte Auswertung gebündelt</td><td>Originalwert separat erhalten</td></tr>
<tr><td>Topologiegraph</td><td>Strukturell erhalten, Kenner tokenisiert</td><td>Ja</td></tr>
</tbody>
</table>

<h2>Telekommunikationsspezifische Einsatzmuster</h2>

<h3>Incident-getriebene Workflows</h3>
<p>Die meisten KI-Workflows im NOC werden durch Incidents ausgelöst. Auslöser ist ein Alarm oder ein Ticket; Endzustand ist ein aktualisiertes Ticket oder Runbook. Der Connector Lane von LLM Capsule ist darauf ausgelegt, sich in diesen Kreislauf einzufügen, ohne eine separate Benutzeroberfläche hinzuzufügen.</p>

<h3>Mandantenfähigkeit und Segmentvertraulichkeit</h3>
<p>Netzbetreiber mit mehreren Geschäftsbereichen oder Wholesale-Kunden benötigen Vertraulichkeit auf Segmentebene — auch innerhalb eigener KI-Workflows. Die richtliniengesteuerte Marker-Kontrolle in der Capsule Runtime unterstützt dies: unterschiedliche Richtlinien je Segment, Prüfpfad je Segment.</p>

<h3>On-Premise-first-Deployments</h3>
<p>Telekommunikationsregulierung und Kundenverträge erfordern häufig On-Premise- oder In-Region-Ausführung. Pfad B (On-Premise-Leichtgewichtmodell, Zero Exposure) ist die Standardbereitstellung für Netzbetreiber in regulierten Märkten.</p>

<h2>Validierung: Deutsche Telekom T Challenge 2026</h2>

<p>LLM Capsule wurde beim <strong>Deutsche Telekom T Challenge 2026</strong> validiert und erreichte <strong>Top 12 in der Kategorie Data Security &amp; Governance</strong>. Der Wettbewerb evaluierte Technologien zum Schutz und zur Operationalisierung sensibler Unternehmensdaten in KI-Workflows. Die Validierung umfasste die oben beschriebenen operativen Datenklassen sowie das Workflow-Integrationsmuster.</p>

<div class="callout"><strong>Prüfkriterium der Validierung.</strong> Die Technologie musste ausreichend operative Struktur erhalten, damit das LLM verwertbare Ergebnisse liefert — bei gleichzeitiger Reduzierung von Inferenz- und Re-Identifikationsrisiko auf ein für regulierte Netzbetreiber akzeptables Niveau in Bezug auf Datensicherheit und Governance.</div>

<h2>Evaluierungskriterien für Einkaufsteams</h2>

<ol>
<li><strong>Connector Lane Abdeckung.</strong> Lässt sich die Lösung in Ihre spezifische NOC-, Ticket-, OSS/BSS- und Log-Infrastruktur einbinden?</li>
<li><strong>Marker-Kategorien jenseits von PII.</strong> Werden Netzwerkkenner, System-Betriebslogs und OT-Referenzen als erstklassige Marker behandelt?</li>
<li><strong>Zwei Ausführungspfade.</strong> Kann derselbe Workflow ohne Neuentwurf der Integration von Pfad A auf Pfad B umgeleitet werden?</li>
<li><strong>Privacy-Budget-Governance.</strong> Ist das DP-Budget je Workflow prüfbar?</li>
<li><strong>State Vault Wiederherstellung.</strong> Sind wiederhergestellte Ausgaben auf die ursprüngliche Kapsel und Richtlinie rückverfolgbar?</li>
<li><strong>On-Premise-Bereitstellungstiefe.</strong> Air-Gapped, Hybrid, Regional — welche Varianten sind in Ihrer Umgebung umsetzbar?</li>
</ol>

<div class="takeaways">
<div class="takeaways__h">Wichtigste Erkenntnisse</div>
<ul>
<li>Netzwerkbetriebsdaten sind strukturell vertraulich. PII-Filterung allein schützt sie nicht ausreichend.</li>
<li>Das KI-Datenschicht-Muster: bestehendes NOC → Connector Lane → Kapsel mit strukturerhaltender, DP-basierter Absicherung → Ausführungspfad → State Vault Wiederherstellung → zurück in Ticket/Runbook.</li>
<li>Netzbetreiber setzen aus regulatorischen Gründen und zur Wahrung der Datensouveränität in der Regel Pfad B (On-Premise-Leichtgewichtmodell) ein.</li>
<li>Validiert beim Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance.</li>
<li>Prüfliste für Einkaufsteams: Connector-Abdeckung, Marker-Breite, zwei Ausführungspfade, Privacy-Budget-Governance, State Vault, On-Premise-Tiefe.</li>
</ul>
</div>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/ai-on-network-operations-data",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "AI on Network Operations Data: NOC, Incident RCA, and Telecom Workflow Execution",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "On-prem LLM execution path",
    related1Href: "/resources/learn/on-prem-llm-execution-path",
    related2Title: "Differential privacy for enterprise LLM",
    related2Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
}

export default function AiOnNetworkOperationsData({
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
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _title = title || T["title"] || TRANSLATIONS.en["title"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _readTime = readTime || T["readTime"] || TRANSLATIONS.en["readTime"]
  const _dateUpdated = dateUpdated || T["dateUpdated"] || TRANSLATIONS.en["dateUpdated"]
  const _tldrLabel = tldrLabel || T["tldrLabel"] || TRANSLATIONS.en["tldrLabel"]
  const _tldrBody = tldrBody || T["tldrBody"] || TRANSLATIONS.en["tldrBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _canonicalUrl = canonicalUrl || T["canonicalUrl"] || TRANSLATIONS.en["canonicalUrl"]
  const _datePublished = datePublished || T["datePublished"] || TRANSLATIONS.en["datePublished"]
  const _dateModified = dateModified || T["dateModified"] || TRANSLATIONS.en["dateModified"]
  const _inLanguage = inLanguage || T["inLanguage"] || TRANSLATIONS.en["inLanguage"]
  const _breadcrumbLabel = breadcrumbLabel || T["breadcrumbLabel"] || TRANSLATIONS.en["breadcrumbLabel"]
  const _faqJsonLd = faqJsonLd || T["faqJsonLd"] || TRANSLATIONS.en["faqJsonLd"]
  const _relatedSectionLabel = relatedSectionLabel || T["relatedSectionLabel"] || TRANSLATIONS.en["relatedSectionLabel"]
  const _related1Title = related1Title || T["related1Title"] || TRANSLATIONS.en["related1Title"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Title = related2Title || T["related2Title"] || TRANSLATIONS.en["related2Title"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Title = related3Title || T["related3Title"] || TRANSLATIONS.en["related3Title"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Title = related4Title || T["related4Title"] || TRANSLATIONS.en["related4Title"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]

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

addPropertyControls(AiOnNetworkOperationsData, {
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
