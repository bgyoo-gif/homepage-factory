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

const BODY_HTML = `<h2>Why two paths instead of one</h2>
<p>Enterprises rarely have one regulatory profile. A telecom carrier might run NOC analytics on Path A and mission-critical incident workflows on Path B. A hospital might use Path A for routine documentation and Path B for clinical decision support. A defense contractor might use Path B exclusively. Forcing a single path forces a single regulatory floor; offering two lets governance match the path to the workflow.</p>

<h2>Path A — external approved LLM with capsule data only</h2>
<p>The capsule (structure-preserving, differential-privacy-protected) is transmitted to an approved external LLM endpoint — ChatGPT, Claude, Gemini, Perplexity, or any LLM API. <strong>Raw operational data does not leave the enterprise environment.</strong> Only the capsule does. The LLM processes the capsule and returns a tokenized response. The state vault restores the response inside the enterprise.</p>
<ul>
  <li><strong>Best for:</strong> workflows with regulatory profiles that allow external transmission of differentially-private capsules</li>
  <li><strong>Strength:</strong> access to frontier model capability</li>
  <li><strong>Constraint:</strong> requires approved external LLM endpoint and policy alignment</li>
</ul>

<h2>Path B — on-prem local lightweight model</h2>
<p>A small private lightweight model runs entirely inside the enterprise environment. The capsule is processed locally. <strong>Zero external transmission.</strong> Used for air-gapped, classified, OT, and strictly regulated operations where any external endpoint is unacceptable.</p>
<ul>
  <li><strong>Best for:</strong> air-gapped networks, classified operations, OT environments, strict data sovereignty</li>
  <li><strong>Strength:</strong> zero external exposure, full data residency</li>
  <li><strong>Constraint:</strong> model capability is bounded by the local lightweight model footprint</li>
</ul>
<div class="callout"><strong>Internal naming.</strong> The internal team sometimes refers to "10G" — public documentation uses <em>lightweight on-prem model</em>, <em>small private model</em>, <em>local inference path</em>, or <em>on-prem/local execution path</em>. The exact size is a deployment decision based on hardware and workflow.</div>

<h2>Path selection: a decision framework</h2>
<table class="compare-table">
  <thead><tr><th>Factor</th><th>Path A</th><th class="us">Path B</th></tr></thead>
  <tbody>
    <tr><td>External transmission allowed</td><td>Yes (capsule only)</td><td class="us-cell">No</td></tr>
    <tr><td>Air-gapped network</td><td>Not applicable</td><td class="us-cell">Required</td></tr>
    <tr><td>Frontier model capability needed</td><td>Yes</td><td class="us-cell">Bounded by local model</td></tr>
    <tr><td>Latency profile</td><td>Variable (network)</td><td class="us-cell">Local, predictable</td></tr>
    <tr><td>Compliance posture</td><td>"No raw data exposure"</td><td class="us-cell">"Zero external exposure"</td></tr>
  </tbody>
</table>

<h2>Deployment topologies</h2>

<h3>On-premise</h3>
<p>Capsule Runtime + on-prem local lightweight model deployed inside the enterprise data center. Path B is the default. Path A is available only if a separate approved external endpoint is whitelisted by policy.</p>

<h3>Air-gapped</h3>
<p>Capsule Runtime + on-prem local lightweight model deployed in a fully isolated network. Path A is unavailable by design. Path B handles all workflows. Common for classified operations, defense, and high-regulation OT.</p>

<h3>Hybrid</h3>
<p>Capsule Runtime on-prem; both paths active. Policy routes individual workflows. Common for telecom and finance where some workflows tolerate external endpoints and others require local execution.</p>

<h3>In-region (data sovereignty)</h3>
<p>Capsule Runtime + lightweight model deployed in a specific region (e.g., EU for GDPR-bound workloads). Path A may also be allowed only to in-region external endpoints. Common for multinationals with regional data residency obligations.</p>

<h3>Cloud (AWS Marketplace)</h3>
<p>Capsule Runtime deployed via AWS Marketplace, with the customer's cloud account hosting both the runtime and the local lightweight model. Path A optional based on policy.</p>

<h3>Embedded integration</h3>
<p>Capsule SDK embedded into an existing application (NOC console, ticket system, hospital portal, mission system). Both paths supported; the embedded application chooses per workflow.</p>

<h3>Slack App</h3>
<p>Capsule plug-in for Slack workflows. Path A typical for general-purpose teams; Path B for regulated teams routing through Slack as a UI layer over an on-prem runtime.</p>

<h2>What happens technically inside Path B</h2>
<ol>
  <li>Connector lane delivers operational data into the Capsule Runtime (REST, webhook, log tap, SDK).</li>
  <li>Structure-preserving encapsulation tokenizes operational identifiers while preserving sequence and structure.</li>
  <li>Differential-privacy-based protection bounds inference risk on the capsule.</li>
  <li>The capsule is dispatched to the local lightweight model running inside the same network.</li>
  <li>The model produces a tokenized output.</li>
  <li>The state vault rehydrates original operational identifiers in the output.</li>
  <li>The result is inserted back into the originating workflow (ticket, runbook, EHR field, mission summary).</li>
  <li>Governance records the path applied, the policy invoked, and the audit trail.</li>
</ol>
<p><strong>No step in Path B reaches outside the enterprise boundary.</strong></p>

<h2>The Zero Exposure claim — scoped correctly</h2>
<p>"Zero Exposure" is a claim that needs a scope to be defensible. The scoped versions LLM Capsule uses:</p>
<ul>
  <li><strong>Path A:</strong> "No raw operational data exposure to external LLMs."</li>
  <li><strong>Path B:</strong> "Zero external exposure in the on-prem / local execution path."</li>
</ul>
<p>Avoid unbounded "Zero Exposure" as a top-level slogan. The technical guarantee is path-specific and policy-conditional.</p>

<h2>What buyers should evaluate</h2>
<ol>
  <li><strong>Path coverage.</strong> Are both paths supported, or only one?</li>
  <li><strong>Path policy granularity.</strong> Can different workflows use different paths under the same governance?</li>
  <li><strong>Local model footprint.</strong> What hardware does the on-prem lightweight model require?</li>
  <li><strong>Air-gap support.</strong> Is the runtime fully operable without external connectivity?</li>
  <li><strong>State vault locality.</strong> Does the state vault stay local in Path A as well?</li>
  <li><strong>Audit per path.</strong> Is the path applied recorded per request, per workflow, per policy?</li>
</ol>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>Two execution paths in one context-preserving data layer for AI: external approved LLM with capsule (Path A) or on-prem local lightweight model (Path B).</li>
    <li>Path B handles air-gapped, classified, OT, and strictly regulated operations with zero external transmission.</li>
    <li>Selection is policy-driven per workflow; governance records the path applied.</li>
    <li>Six deployment topologies: on-premise, air-gapped, hybrid, in-region, cloud, embedded, Slack App.</li>
    <li>The "Zero Exposure" claim is scoped to the path: "no raw data exposure to external LLMs" (Path A) or "zero external exposure" (Path B).</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is the on-prem LLM execution path?", "acceptedAnswer": { "@type": "Answer", "text": "The on-prem LLM execution path (Path B) runs a small private lightweight model entirely inside the enterprise environment. No raw operational data and no capsule data leaves the boundary. It is used for air-gapped, classified, or strictly regulated operations where any external transmission is unacceptable." } }, { "@type": "Question", "name": "When should I use Path A vs Path B?", "acceptedAnswer": { "@type": "Answer", "text": "Path A (external approved LLM with capsule data only) is appropriate when the workflow's regulatory profile allows transmission of differentially-private capsule data to an approved external endpoint. Path B (on-prem local lightweight model) is required when no external transmission is allowed — air-gapped networks, classified operations, OT environments, or strict regulated industries with data sovereignty constraints." } }, { "@type": "Question", "name": "Can I switch between paths per workflow?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Path selection is policy-driven. Different workflows in the same enterprise can route to different paths based on regulatory profile, data sensitivity, and customer commitments. Governance records the path applied per workflow." } } ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
    lead: "Two execution paths inside a single context-preserving data layer for AI. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.",
    category: "ARCHITECTURE · Execution Path",
    readTime: "11 min read",
    dateUpdated: "Updated May 2025",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "LLM Capsule supports two execution paths. Path A sends capsule data to an external approved LLM — no raw operational data exposure. Path B runs a small private lightweight model entirely inside your enterprise environment — zero external transmission. Selection is policy-driven per workflow.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
  ko: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "온프레미스 LLM 실행 경로: 규제 환경을 위한 망분리·하이브리드·지역 내 AI",
    lead: "단일 AI 데이터 레이어 안에 두 가지 실행 경로가 존재합니다. 외부 전송이 불가한 환경에서는 온프레미스 경량 모델이 경계 내부에서 워크플로를 처리합니다. 외부 노출 Zero Exposure, 완전한 복원.",
    category: "ARCHITECTURE · Execution Path",
    readTime: "11분 읽기",
    dateUpdated: "2025년 5월 업데이트",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "LLM Capsule은 두 가지 실행 경로를 지원합니다. Path A는 캡슐 데이터를 외부 승인 LLM으로 전송합니다. 원본 운영 데이터는 외부로 나가지 않습니다. Path B는 소형 경량 모델을 기업 환경 내부에서 완전히 실행합니다. 외부 전송이 없습니다. 경로 선택은 워크플로별 정책이 결정합니다.",
    bodyHtml: `<h2>하나가 아닌 두 가지 경로가 필요한 이유</h2>

<p>기업은 대부분 단일 규제 프로파일을 갖지 않습니다. 통신사는 Path A로 NOC 분석을 실행하고, Path B로 미션 크리티컬 인시던트 워크플로를 처리할 수 있습니다. 병원은 일상적인 문서화에 Path A를, 임상 의사결정 지원에 Path B를 사용할 수 있습니다. 방산 업체는 Path B만 사용할 수도 있습니다. 단일 경로를 강제하면 단일 규제 기준도 강제됩니다. 두 경로를 제공하면 거버넌스가 워크플로에 맞는 경로를 선택할 수 있습니다.</p>

<h2>Path A — 캡슐 데이터만 사용하는 외부 승인 LLM</h2>

<p>캡슐(문서 구조 보존, 차등 프라이버시 적용)이 승인된 외부 LLM 엔드포인트 — ChatGPT, Claude, Gemini, Perplexity, 또는 임의의 LLM API — 로 전송됩니다. <strong>원본 운영 데이터는 기업 환경을 떠나지 않습니다.</strong> 캡슐만 전송됩니다. LLM은 캡슐을 처리하고 토큰화된 응답을 반환합니다. 상태 볼트가 기업 내부에서 응답을 복원합니다.</p>

<ul>
<li><strong>적합한 경우:</strong> 차등 프라이버시가 적용된 캡슐의 외부 전송을 허용하는 규제 프로파일을 가진 워크플로</li>
<li><strong>강점:</strong> 최신 프런티어 모델 기능 활용 가능</li>
<li><strong>제약:</strong> 승인된 외부 LLM 엔드포인트와 정책 정합이 필요합니다</li>
</ul>

<h2>Path B — 온프레미스 로컬 경량 모델</h2>

<p>소형 경량 모델이 기업 환경 내부에서 완전히 실행됩니다. 캡슐은 로컬에서 처리됩니다. <strong>외부 전송이 없습니다.</strong> 외부 엔드포인트가 전혀 허용되지 않는 망분리·기밀·OT·엄격한 규제 환경에서 사용됩니다.</p>

<ul>
<li><strong>적합한 경우:</strong> 망분리 네트워크, 기밀 작전, OT 환경, 엄격한 데이터 주권 요구사항</li>
<li><strong>강점:</strong> Zero Exposure, 완전한 데이터 레지던시</li>
<li><strong>제약:</strong> 모델 성능이 로컬 경량 모델 범위 내로 제한됩니다</li>
</ul>

<div class="callout"><strong>내부 명칭.</strong> 내부 팀에서 "10G"라고 부르는 경우가 있습니다. 공개 문서에서는 <em>경량 온프레미스 모델</em>, <em>소형 프라이빗 모델</em>, <em>로컬 추론 경로</em>, 또는 <em>온프레미스/로컬 실행 경로</em>를 사용합니다. 정확한 크기는 하드웨어와 워크플로에 따른 배포 결정 사항입니다.</div>

<h2>경로 선택: 의사결정 프레임워크</h2>

<table>
<thead><tr><th>요소</th><th>Path A</th><th>Path B</th></tr></thead>
<tbody>
<tr><td>외부 전송 허용 여부</td><td>예 (캡슐만)</td><td>아니오</td></tr>
<tr><td>망분리 네트워크</td><td>해당 없음</td><td>필수</td></tr>
<tr><td>프런티어 모델 성능 필요 여부</td><td>예</td><td>로컬 모델 범위 내</td></tr>
<tr><td>지연 시간 프로파일</td><td>가변 (네트워크 의존)</td><td>로컬, 예측 가능</td></tr>
<tr><td>컴플라이언스 태세</td><td>"원본 데이터 노출 없음"</td><td>"외부 노출 Zero Exposure"</td></tr>
</tbody>
</table>

<h2>배포 토폴로지</h2>

<h3>온프레미스</h3>
<p>Capsule Runtime과 온프레미스 로컬 경량 모델을 기업 데이터센터 내부에 배포합니다. Path B가 기본값입니다. Path A는 정책에 의해 별도의 승인된 외부 엔드포인트가 허용 목록에 등록된 경우에만 사용 가능합니다.</p>

<h3>망분리</h3>
<p>Capsule Runtime과 온프레미스 로컬 경량 모델을 완전히 격리된 네트워크에 배포합니다. Path A는 설계상 사용 불가입니다. Path B가 모든 워크플로를 처리합니다. 기밀 작전·방위·고규제 OT 환경에서 일반적입니다.</p>

<h3>하이브리드</h3>
<p>Capsule Runtime은 온프레미스에 두고, 두 경로를 모두 활성화합니다. 정책이 개별 워크플로를 라우팅합니다. 일부 워크플로는 외부 엔드포인트를 허용하고 다른 워크플로는 로컬 실행이 필요한 통신사·금융권에서 일반적입니다.</p>

<h3>지역 내 배포 (데이터 주권)</h3>
<p>특정 지역(예: GDPR 적용 워크플로를 위한 EU)에 Capsule Runtime과 경량 모델을 배포합니다. Path A도 지역 내 외부 엔드포인트로만 허용될 수 있습니다. 지역별 데이터 레지던시 의무가 있는 다국적 기업에서 일반적입니다.</p>

<h3>클라우드 (AWS Marketplace)</h3>
<p>AWS Marketplace를 통해 Capsule Runtime을 배포하며, 고객의 클라우드 계정에서 런타임과 로컬 경량 모델을 모두 호스팅합니다. Path A는 정책에 따라 선택 사항입니다.</p>

<h3>임베디드 통합</h3>
<p>기존 애플리케이션(NOC 콘솔, 티켓 시스템, 병원 포털, 미션 시스템)에 Capsule SDK를 임베딩합니다. 두 경로 모두 지원되며, 임베딩된 애플리케이션이 워크플로별로 선택합니다.</p>

<h3>Slack App</h3>
<p>Slack 워크플로용 캡슐 플러그인입니다. 범용 팀은 Path A를 주로 사용하고, 온프레미스 런타임 위에서 Slack을 UI 레이어로 사용하는 규제 대상 팀은 Path B를 사용합니다.</p>

<h2>Path B의 기술적 처리 과정</h2>

<ol>
<li>커넥터 레인이 운영 데이터를 Capsule Runtime으로 전달합니다 (REST, 웹훅, 로그 탭, SDK).</li>
<li>문서 구조 보존 캡슐화가 시퀀스와 구조를 유지하면서 운영 식별자를 토큰화합니다.</li>
<li>차등 프라이버시 기반 보호가 캡슐의 추론 위험을 제한합니다.</li>
<li>캡슐이 동일 네트워크 내에서 실행 중인 로컬 경량 모델로 전달됩니다.</li>
<li>모델이 토큰화된 출력을 생성합니다.</li>
<li>상태 볼트가 출력 내 원본 운영 식별자를 복원합니다.</li>
<li>결과가 원래 워크플로(티켓, 런북, EHR 필드, 미션 요약)에 다시 삽입됩니다.</li>
<li>거버넌스가 적용된 경로, 호출된 정책, 감사 이력을 기록합니다.</li>
</ol>

<p><strong>Path B의 어떤 단계도 기업 경계 밖으로 나가지 않습니다.</strong></p>

<h2>Zero Exposure 주장 — 올바른 범위 정의</h2>

<p>"Zero Exposure"는 방어 가능하려면 범위가 정의되어야 하는 주장입니다. LLM Capsule이 사용하는 범위 한정 표현은 다음과 같습니다.</p>

<ul>
<li><strong>Path A:</strong> "외부 LLM에 원본 운영 데이터 노출 없음."</li>
<li><strong>Path B:</strong> "온프레미스/로컬 실행 경로에서 Zero Exposure."</li>
</ul>

<p>범위가 없는 "Zero Exposure"를 최상위 슬로건으로 사용하지 마십시오. 기술적 보증은 경로별로 다르며 정책 조건에 따릅니다.</p>

<h2>구매 담당자가 평가해야 할 항목</h2>

<ol>
<li><strong>경로 지원 범위.</strong> 두 경로 모두 지원되는가, 하나만 지원되는가?</li>
<li><strong>경로 정책 세분화.</strong> 동일 거버넌스 하에서 워크플로마다 다른 경로를 사용할 수 있는가?</li>
<li><strong>로컬 모델 사양.</strong> 온프레미스 경량 모델에 어떤 하드웨어가 필요한가?</li>
<li><strong>망분리 지원 여부.</strong> 외부 연결 없이 런타임이 완전히 작동하는가?</li>
<li><strong>상태 볼트 로컬 유지 여부.</strong> Path A에서도 상태 볼트가 로컬에 유지되는가?</li>
<li><strong>경로별 감사.</strong> 요청별·워크플로별·정책별로 적용된 경로가 기록되는가?</li>
</ol>

<div class="takeaways">
<div class="takeaways__h">핵심 요약</div>
<ul>
<li>하나의 AI 데이터 레이어 안에 두 가지 실행 경로: 캡슐을 사용하는 외부 승인 LLM(Path A) 또는 온프레미스 로컬 경량 모델(Path B).</li>
<li>Path B는 외부 전송 없이 망분리·기밀·OT·엄격한 규제 환경을 처리합니다.</li>
<li>경로 선택은 워크플로별 정책이 결정하며, 거버넌스가 적용된 경로를 기록합니다.</li>
<li>6가지 배포 토폴로지: 온프레미스, 망분리, 하이브리드, 지역 내 배포, 클라우드, 임베디드, Slack App.</li>
<li>"Zero Exposure" 주장은 경로에 따라 범위가 정해집니다. "외부 LLM에 원본 데이터 노출 없음"(Path A) 또는 "Zero Exposure"(Path B).</li>
</ul>
</div>

---`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
  de: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "On-Premise-Ausführungspfad für LLMs: Air-Gapped-, Hybrid- und regionsspezifische KI für regulierte Betriebsumgebungen",
    lead: "LLM Capsule bietet zwei Ausführungspfade innerhalb einer einzigen KI-Datenschicht. Wenn externe Übertragung regulatorisch ausgeschlossen ist, übernimmt das lokale On-Premise-Modell den gesamten Workflow innerhalb Ihrer Infrastruktur — ohne externe Datenübertragung, mit vollständiger Wiederherstellung.",
    category: "ARCHITEKTUR · Ausführungspfad",
    readTime: "11 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2025",
    tldrLabel: "Definition · Kurzfassung",
    tldrBody: "LLM Capsule unterstützt zwei Ausführungspfade. Pfad A überträgt Kapseldaten an ein zugelassenes externes LLM — operative Rohdaten verlassen die Unternehmensumgebung nicht. Pfad B führt ein kleines lokales Modell vollständig innerhalb Ihrer Infrastruktur aus — ohne jede externe Datenübertragung. Die Pfadauswahl erfolgt richtliniengesteuert, je nach Workflow.",
    bodyHtml: `<h2>Warum zwei Ausführungspfade notwendig sind</h2>

<p>Unternehmen verfügen selten über ein einheitliches regulatorisches Profil. Ein Telekommunikationsanbieter kann NOC-Analysen über Pfad A und sicherheitskritische Incident-Workflows über Pfad B abwickeln. Ein Krankenhaus kann Pfad A für Routinedokumentation und Pfad B für die klinische Entscheidungsunterstützung nutzen. Ein Rüstungsunternehmen kann ausschließlich Pfad B einsetzen. Ein einziger Ausführungspfad erzwingt einen einzigen regulatorischen Mindeststandard. Zwei Pfade ermöglichen es der Governance, den Pfad dem Workflow anzupassen.</p>

<h2>Pfad A — externes zugelassenes LLM, ausschließlich mit Kapseldaten</h2>

<p>Die Kapsel (strukturerhaltend, Differential-Privacy-geschützt) wird an einen zugelassenen externen LLM-Endpunkt übertragen — ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM API. <strong>Operative Rohdaten verlassen die Unternehmensumgebung nicht.</strong> Nur die Kapsel wird übertragen. Das LLM verarbeitet die Kapsel und liefert eine tokenisierte Antwort zurück. Der State Vault stellt die Antwort innerhalb der Unternehmensumgebung wieder her.</p>

<ul>
<li><strong>Stärke:</strong> Zugang zu leistungsfähigen Frontier-Modellen</li>
<li><strong>Einschränkung:</strong> Erfordert einen zugelassenen externen LLM-Endpunkt und richtlinienkonforme Freigabe</li>
</ul>

<h2>Pfad B — lokales On-Premise-Leichtgewichtmodell</h2>

<p>Ein kleines, privates Leichtgewichtmodell läuft vollständig innerhalb der Unternehmensumgebung. Die Kapsel wird lokal verarbeitet. <strong>Keine externe Datenübertragung.</strong> Einsatz bei Air-Gapped-Netzwerken, klassifizierten Betriebsumgebungen, OT-Umgebungen und streng regulierten Bereichen, in denen jeder externe Endpunkt ausgeschlossen ist.</p>

<ul>
<li><strong>Stärke:</strong> Keine externe Datenübertragung, vollständige Datenresidenz</li>
<li><strong>Einschränkung:</strong> Modellleistung ist durch den lokalen Modell-Footprint begrenzt</li>
</ul>

<div class="callout"><strong>Interne Bezeichnung.</strong> Das interne Team verwendet gelegentlich den Begriff „10G" — in der öffentlichen Dokumentation werden die Begriffe <em>lokales On-Premise-Modell</em>, <em>kleines privates Modell</em>, <em>lokaler Inferenzpfad</em> oder <em>On-Premise-/lokaler Ausführungspfad</em> verwendet. Die genaue Modellgröße ist eine Deployment-Entscheidung, die von Hardware und Workflow abhängt.</div>

<h2>Pfadauswahl: ein Entscheidungsrahmen</h2>

<table>
<thead><tr><th>Faktor</th><th>Pfad A</th><th>Pfad B</th></tr></thead>
<tbody>
<tr><td>Externe Übertragung zulässig</td><td>Ja (nur Kapsel)</td><td>Nein</td></tr>
<tr><td>Air-Gapped-Netzwerk</td><td>Nicht anwendbar</td><td>Erforderlich</td></tr>
<tr><td>Frontier-Modell-Leistung</td><td>Ja</td><td>Durch lokales Modell begrenzt</td></tr>
<tr><td>Latenzprofil</td><td>Variabel (netzwerkabhängig)</td><td>Lokal, vorhersehbar</td></tr>
<tr><td>Compliance-Posture</td><td>„Keine Offenlegung von Rohdaten"</td><td>„Keine externe Datenübertragung"</td></tr>
</tbody>
</table>

<h2>Deployment-Topologien</h2>

<h3>On-Premise</h3>
<p>Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden innerhalb des unternehmenseigenen Rechenzentrums bereitgestellt. Pfad B ist der Standard. Pfad A ist nur verfügbar, wenn ein zugelassener externer Endpunkt durch Richtlinie freigegeben wurde.</p>

<h3>Air-Gapped</h3>
<p>Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden in einem vollständig isolierten Netzwerk betrieben. Pfad A ist konstruktionsbedingt nicht verfügbar. Pfad B übernimmt alle Workflows. Typisch für klassifizierte Operationen, Verteidigung und streng regulierte OT-Umgebungen.</p>

<h3>Hybrid</h3>
<p>Capsule Runtime On-Premise; beide Pfade aktiv. Richtlinien steuern die Zuordnung einzelner Workflows. Typisch für Telekommunikation und Finanzwesen, wo einige Workflows externe Endpunkte tolerieren und andere lokale Ausführung erfordern.</p>

<h3>In-Region (Datensouveränität)</h3>
<p>Capsule Runtime und Leichtgewichtmodell werden in einer bestimmten Region bereitgestellt (z. B. EU für DSGVO (GDPR)-pflichtige Workloads). Pfad A kann ebenfalls auf in-regionsspezifische externe Endpunkte beschränkt werden. Typisch für multinationale Unternehmen mit regionalen Datenhaltungspflichten.</p>

<h3>Cloud (AWS Marketplace)</h3>
<p>Capsule Runtime wird über den AWS Marketplace bereitgestellt. Das Cloud-Konto des Kunden hostet sowohl die Runtime als auch das lokale Leichtgewichtmodell. Pfad A optional, abhängig von der Richtlinie.</p>

<h3>Embedded Integration</h3>
<p>Capsule SDK wird in eine bestehende Anwendung eingebettet (NOC-Konsole, Ticket-System, Krankenhausportal, Missionssystem). Beide Pfade werden unterstützt; die eingebettete Anwendung wählt den Pfad je Workflow.</p>

<h3>Slack App</h3>
<p>Capsule-Plug-in für Slack-Workflows. Pfad A typisch für allgemeine Teams; Pfad B für regulierte Teams, die Slack als UI-Schicht über einer On-Premise-Runtime nutzen.</p>

<h2>Technischer Ablauf innerhalb von Pfad B</h2>

<ol>
<li>Der Connector Lane leitet operative Daten an die Capsule Runtime weiter (REST, Webhook, Log Tap, SDK).</li>
<li>Strukturerhaltende Kapsulierung — Operative Kennungen werden tokenisiert, Sequenz und Struktur bleiben erhalten.</li>
<li>Differential-Privacy-basierter Schutz begrenzt das Inferenzrisiko auf der Kapsel.</li>
<li>Die Kapsel wird an das lokale Leichtgewichtmodell im selben Netzwerk übermittelt.</li>
<li>Das Modell erzeugt eine tokenisierte Ausgabe.</li>
<li>Der State Vault stellt die originalen operativen Kennungen in der Ausgabe wieder her.</li>
<li>Das Ergebnis wird in den ursprünglichen Workflow zurückgeführt (Ticket, Runbook, EHR, Missionszusammenfassung).</li>
<li>Governance-Protokollierung — Pfad, angewandte Richtlinie und Prüfpfad werden aufgezeichnet.</li>
</ol>

<p><strong>Kein Schritt in Pfad B verlässt die Unternehmensgrenze.</strong></p>

<h2>Die Zero Exposure-Aussage — korrekt abgegrenzt</h2>

<p>"Zero Exposure" ist eine Aussage, die eines definierten Geltungsbereichs bedarf, um belastbar zu sein. Die von LLM Capsule verwendeten abgegrenzten Formulierungen:</p>

<ul>
<li><strong>Pfad A:</strong> „Keine Offenlegung operativer Rohdaten gegenüber externen LLMs."</li>
<li><strong>Pfad B:</strong> „Keine externe Datenübertragung beim On-Premise-/lokalen Ausführungspfad."</li>
</ul>

<p>Die Verwendung von „Zero Exposure" als übergeordnetem Slogan ohne Geltungsbereich ist zu vermeiden. Die technische Garantie ist pfadspezifisch und richtlinienabhängig.</p>

<h2>Bewertungskriterien für Einkäufer</h2>

<ol>
<li><strong>Pfadabdeckung.</strong> Werden beide Pfade unterstützt oder nur einer?</li>
<li><strong>Granularität der Pfadzuweisung.</strong> Können verschiedene Workflows unter derselben Governance unterschiedliche Pfade nutzen?</li>
<li><strong>Lokaler Modell-Footprint.</strong> Welche Hardware wird für das On-Premise-Leichtgewichtmodell benötigt?</li>
<li><strong>Air-Gapped-Unterstützung.</strong> Ist die Runtime ohne externe Konnektivität vollständig betriebsfähig?</li>
<li><strong>State Vault lokal.</strong> Bleibt der State Vault auch bei Pfad A lokal?</li>
<li><strong>Pfad-Audit.</strong> Wird der angewandte Pfad je Anfrage, je Workflow und je Richtlinie protokolliert?</li>
</ol>

<div class="takeaways">
<div class="takeaways__h">Kernaussagen</div>
<ul>
<li>Zwei Ausführungspfade in einer KI-Datenschicht: externes zugelassenes LLM mit Kapsel (Pfad A) oder lokales On-Premise-Leichtgewichtmodell (Pfad B).</li>
<li>Pfad B bewältigt Air-Gapped-, klassifizierte, OT- und streng regulierte Betriebsumgebungen ohne externe Datenübertragung.</li>
<li>Die Pfadauswahl erfolgt richtliniengesteuert je Workflow; die Governance protokolliert den angewandten Pfad.</li>
<li>Sechs Deployment-Topologien: On-Premise, Air-Gapped, Hybrid, In-Region, Cloud, Embedded Integration, Slack App.</li>
<li>Die Zero Exposure-Aussage ist pfadgebunden: „Keine Offenlegung von Rohdaten gegenüber externen LLMs" (Pfad A) oder „Keine externe Datenübertragung" (Pfad B).</li>
</ul>
</div>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/on-prem-llm-execution-path",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "PII guardrails vs operational data protection",
    related3Href: "/resources/learn/pii-guardrails-vs-operational-data-protection",
    related4Title: "",
    related4Href: "",
  },
}

export default function OnPremLlmExecutionPath({
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

addPropertyControls(OnPremLlmExecutionPath, {
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
