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

const BODY_HTML = `<h2>Why this comparison matters</h2>
<p>Buyers evaluating enterprise AI routinely encounter four kinds of products in the same shortlist: PII guardrails, prompt security gateways, AI security suites, and the context-preserving data layer for AI. They are not equivalent. Treating them as interchangeable leads to deployments that pass the PII filter but still expose the sensitive part of the workflow.</p>
<p>This article puts them on the same page. It defines what each category does, where it fits in the pipeline, what it covers, and what it leaves uncovered.</p>

<h2>The four categories</h2>

<h3>1. PII guardrails (API-level field detection)</h3>
<p>Developer-facing toolkits that wrap LLM API calls with detection and replacement of personal identifiers, content moderation, and safety filters. They are fast, easy to integrate, and well-suited to consumer or low-regulation enterprise workflows.</p>
<p><strong>Layer:</strong> API call wrapper. <strong>Scope:</strong> field-level. <strong>Strength:</strong> speed of integration. <strong>Limitation:</strong> blind to structural and aggregate patterns in operational data.</p>

<h3>2. AI security and prompt-level products (PII guardrails, prompt security gateways, AI security suites)</h3>
<p>Focused on prompt injection, jailbreak resistance, output policy enforcement, and runtime threat detection. Often include PII detection as a secondary feature. Sit at the prompt or API gateway.</p>
<p><strong>Layer:</strong> prompt / API gateway. <strong>Scope:</strong> prompt-level threats + PII. <strong>Strength:</strong> prompt injection defense. <strong>Limitation:</strong> not designed for transforming structured operational data before it reaches the model.</p>

<h3>3. Synthetic data platforms</h3>
<p>Generate synthetic versions of training or evaluation datasets that approximate the statistical properties of the original. Used for AI training pipelines and analytics, not for runtime protection of live operational data.</p>
<p><strong>Layer:</strong> data pipeline (offline). <strong>Scope:</strong> dataset generation. <strong>Strength:</strong> training data for ML. <strong>Limitation:</strong> does not run in the live workflow.</p>

<h3>4. Context-Preserving Data Layer for AI (LLM Capsule)</h3>
<p>Sits between the existing enterprise environment (NOC, ticket, OT, EHR, mission systems) and the LLM. Transforms regulated operational data into AI-ready context using structure-preserving, differential-privacy-based encapsulation. Routes through one of two execution paths (external approved LLM or on-prem local model). Restores results back to the workflow via state vault.</p>
<p><strong>Layer:</strong> context-preserving data layer for AI. <strong>Scope:</strong> operational data + governance. <strong>Strength:</strong> structured operational data, two execution paths, plug-in to legacy systems. <strong>Limitation:</strong> is not a prompt injection defense or a synthetic data generator.</p>

<h2>Direct comparison table</h2>
<table class="compare-table">
  <thead><tr><th></th><th>PII guardrails</th><th>AI security / prompt</th><th class="us">LLM Capsule</th></tr></thead>
  <tbody>
    <tr><td>Layer</td><td>API wrapper</td><td>Prompt / gateway</td><td class="us-cell">context-preserving data layer for AI</td></tr>
    <tr><td>Scope</td><td>Names, IDs, fields</td><td>Prompt threats + PII</td><td class="us-cell">Operational data + governance</td></tr>
    <tr><td>Method</td><td>Detect &amp; mask</td><td>Filter / sanitize prompts</td><td class="us-cell">Structure-preserving + DP-based encapsulation</td></tr>
    <tr><td>Plug into legacy systems</td><td>No</td><td>No</td><td class="us-cell">Yes (NOC, Ticket, OT, EHR, Mission)</td></tr>
    <tr><td>On-prem local execution</td><td>No</td><td>Limited</td><td class="us-cell">Yes (Path B)</td></tr>
    <tr><td>Restoration</td><td>One-way</td><td>One-way</td><td class="us-cell">Two-way via state vault</td></tr>
    <tr><td>Governance</td><td>Detection logs</td><td>Threat logs</td><td class="us-cell">Policy · audit · access · compliance</td></tr>
  </tbody>
</table>

<h2>What each is best at</h2>
<p><strong>PII guardrails</strong> are the right starting point for developers building AI features on top of an LLM API where the sensitive content is mostly individual identifiers.</p>
<p><strong>AI security / prompt-level products</strong> are the right addition when the threat model includes prompt injection, jailbreak attempts, or behavioral abuse.</p>
<p><strong>Synthetic data platforms</strong> are the right tool when the goal is to train models or enable analytics on representative-but-non-original datasets. They do not run live workflows.</p>
<p><strong>LLM Capsule</strong> is the right layer when the data going to the LLM is regulated operational data — and the workflow runs inside a legacy enterprise environment that the AI must plug into rather than replace.</p>

<h2>Two failure cases that illustrate the gap</h2>

<h3>Case 1 · Telecom incident analysis</h3>
<p>A carrier wants to use an external LLM to draft RCAs from NOC logs. A PII guardrail removes customer names from incident descriptions. The remaining log still contains device IDs, site references, alarm sequences, and topology paths that uniquely identify the impacted segment of the network. PII guardrail passes. Operational confidentiality is breached.</p>
<p><strong>What LLM Capsule does differently:</strong> structure-preserving encapsulation tokenizes device IDs, site references, and topology paths while preserving sequence relationships so the LLM can still reason. Differential-privacy-based protection bounds inference risk on the aggregate. The capsule is routed to Path A (external approved LLM) with no raw operational data exposure, or to Path B (on-prem local model) for stricter regulatory profiles.</p>

<h3>Case 2 · OT vulnerability review</h3>
<p>An industrial operator wants AI-assisted vulnerability triage across PLC alerts. A PII guardrail has nothing to remove — there are no customer names. The data passes untouched to the external LLM. Plant zones, asset references, and patch constraints are visible to a third-party model.</p>
<p><strong>What LLM Capsule does differently:</strong> the OT/asset reference markers (PLC tag, plant zone, asset inventory ref) are detected and encapsulated. The execution path is policy-driven — for OT, Path B (on-prem local) is typical, providing zero external transmission.</p>

<h2>How they compose in practice</h2>
<p>PII guardrails, prompt security, synthetic data platforms, and the context-preserving data layer for AI are not mutually exclusive. A mature enterprise stack often runs all four in different parts of the AI pipeline:</p>
<ul>
  <li>PII guardrails — at the API call layer for low-regulation features</li>
  <li>AI security / prompt protection — at the gateway for prompt threat defense</li>
  <li>Synthetic data — in the offline training pipeline</li>
  <li>LLM Capsule — at the context-preserving data layer for AI for regulated operational data</li>
</ul>
<p>The mistake is treating the first as if it were the fourth. Field-level masking is not a substitute for distributional protection on operational data.</p>

<div class="callout"><strong>Buyer test.</strong> When the AI pipeline involves NOC logs, incident records, OT manifests, configuration trees, clinical workflows, or mission context — the context-preserving data layer for AI is the right place to evaluate. PII guardrails are necessary but not sufficient.</div>

<h2>Where to verify</h2>
<p>LLM Capsule is validated in regulated operational settings:</p>
<ul>
  <li><strong>Telecom</strong> — Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance</li>
  <li><strong>Industrial cybersecurity / OT</strong> — partnership with Claroty</li>
  <li><strong>Healthcare</strong> — deployed at EUMC (Ewha Womans University Medical Center)</li>
  <li><strong>Finance &amp; insurance</strong> — deployed at IBK, Kyobo, DB Insurance</li>
  <li><strong>Certifications</strong> — ISO/IEC 27001, ISO/IEC 42001</li>
</ul>

<div class="takeaways">
  <div class="takeaways__h">Key takeaways</div>
  <ul>
    <li>PII guardrails and the context-preserving data layer for AI address different layers of the enterprise AI pipeline.</li>
    <li>PII guardrails, AI security suites, and prompt security gateways — each is strong in its own scope (risk control, policy enforcement, prompt-level protection). None of them transforms structured operational data with differential-privacy-based encapsulation.</li>
    <li>The buyer test: if the sensitive content is structural (logs, configs, OT, clinical, mission), you need a context-preserving data layer for AI, not just a guardrail.</li>
    <li>The categories compose. The mistake is treating PII guardrails as if they covered operational data.</li>
    <li>LLM Capsule provides plug-in to legacy systems, two execution paths, two-way restoration, and full governance — alongside, not instead of, PII guardrails where they are needed.</li>
  </ul>
</div>`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Are PII guardrails the same as the context-preserving data layer for AI?", "acceptedAnswer": { "@type": "Answer", "text": "No. PII guardrails detect and mask personal identifiers — names, IDs, financial fields. The context-preserving data layer for AI covers complex enterprise data such as network logs, incident records, configurations, OT manifests, and clinical or mission context. Operational data leaks information through structure, sequence, and aggregate pattern, not just through identifiable fields. Field-level masking alone does not protect it." } }, { "@type": "Question", "name": "How does LLM Capsule compare with PII guardrail and AI security suite products?", "acceptedAnswer": { "@type": "Answer", "text": "PII guardrail and AI security suite products are optimized for risk control and policy enforcement at the API or prompt level — prompt injection defense, jailbreak resistance, and PII detection. LLM Capsule operates at a different layer: it transforms operational data into AI-ready capsules with differential-privacy-based protection, plugs into existing enterprise systems beyond the API gateway, preserves operational structure for AI to consume, and restores outputs back into the originating workflow. The two categories are adjacent and often complementary — they address different stages of the enterprise AI pipeline." } }, { "@type": "Question", "name": "When is a PII guardrail enough?", "acceptedAnswer": { "@type": "Answer", "text": "When the workflow's sensitive content is mostly identifiable individual fields — customer names, phone numbers, financial identifiers — and the surrounding context is not itself sensitive. Customer chat, contract review, and document summarization are common cases. When the context (network topology, incident sequence, OT alarms, mission rhythm) is the sensitive part, PII guardrails alone are not sufficient." } } ] }`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Learn",
    backHref: "/resources/learn",
    title: "Why PII Guardrails Don't Make Enterprise AI Work",
    lead: "PII guardrails, AI security suites, prompt security gateways — they all do something important. They do not all do the same thing. Here is a direct comparison and a clear answer to where each fits in enterprise AI adoption.",
    category: "COMPARISON · Categories",
    readTime: "11 min read",
    dateUpdated: "Updated May 2025",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "PII guardrails protect identifiable fields at the API or prompt layer. The context-preserving data layer for AI protects structured enterprise data — network logs, configurations, incident records, OT and mission context — using structure-preserving, differential-privacy-based encapsulation. They address adjacent but different layers of the enterprise AI pipeline.",
    bodyHtml: BODY_HTML,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Why PII Guardrails Don't Make Enterprise AI Work",
    faqJsonLd: FAQ_JSON_LD,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
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
    title: "PII 가드레일만으로 기업 AI가 작동하지 않는 이유",
    lead: "PII 가드레일, AI 보안 스위트, 프롬프트 보안 게이트웨이 — 각각 중요한 역할을 합니다. 그러나 모두 같은 일을 하지는 않습니다. 각 카테고리가 기업 AI 도입에서 어디에 맞는지, 직접 비교와 명확한 답변을 제공합니다.",
    category: "COMPARISON · Categories",
    readTime: "11분 읽기",
    dateUpdated: "2025년 5월 업데이트",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "PII 가드레일은 API 또는 프롬프트 레이어에서 식별 가능한 필드를 보호합니다. 데이터 레이어는 구조화된 기업 데이터 — 네트워크 로그, 설정 파일, 인시던트 레코드, OT 및 미션 컨텍스트 — 를 문서 구조 보존 방식의 차등 프라이버시 기반 캡슐화로 보호합니다. 두 카테고리는 기업 AI 파이프라인에서 인접하지만 서로 다른 레이어를 담당합니다.",
    bodyHtml: `(아래는 bodyHtml Props의 HTML 태그를 유지하며 텍스트만 번역한 전체 본문입니다.)

<h2>이 비교가 중요한 이유</h2>

<p>기업 AI를 평가하는 구매 담당자는 같은 후보 목록에서 네 가지 유형의 제품을 자주 마주칩니다. PII 가드레일, 프롬프트 보안 게이트웨이, AI 보안 스위트, 그리고 데이터 레이어입니다. 이들은 동등하지 않습니다. 서로 교환 가능한 것으로 취급하면, PII 필터는 통과하지만 워크플로우의 민감한 부분은 여전히 노출되는 배포 결과를 낳습니다.</p>

<p>이 아티클은 네 카테고리를 한 곳에 놓고 비교합니다. 각 카테고리가 무엇을 하는지, 파이프라인 어디에 위치하는지, 무엇을 커버하고 무엇을 커버하지 않는지 정의합니다.</p>

<h2>네 가지 카테고리</h2>

<h3>1. PII 가드레일 (API 레벨 필드 탐지)</h3>

<p>LLM API 호출을 개인 식별자 탐지·대체, 콘텐츠 모더레이션, 안전 필터로 감싸는 개발자용 툴킷입니다. 빠르고 통합이 쉬우며, 소비자용 또는 규제 수준이 낮은 기업 워크플로우에 적합합니다.</p>

<p><strong>레이어:</strong> API 호출 래퍼. <strong>범위:</strong> 필드 레벨. <strong>강점:</strong> 빠른 통합. <strong>제약:</strong> 운영 데이터의 구조적·집합적 패턴을 탐지하지 못합니다.</p>

<h3>2. AI 보안 및 프롬프트 레벨 제품 (PII 가드레일, 프롬프트 보안 게이트웨이, AI 보안 스위트)</h3>

<p>프롬프트 인젝션, 탈옥 저항, 출력 정책 적용, 런타임 위협 탐지에 집중합니다. PII 탐지는 보조 기능으로 포함되는 경우가 많습니다. 프롬프트 또는 API 게이트웨이에 위치합니다.</p>

<p><strong>레이어:</strong> 프롬프트 / API 게이트웨이. <strong>범위:</strong> 프롬프트 레벨 위협 + PII. <strong>강점:</strong> 프롬프트 인젝션 방어. <strong>제약:</strong> 구조화된 운영 데이터를 모델에 도달하기 전에 변환하는 용도로 설계되지 않았습니다.</p>

<h3>3. 합성 데이터 플랫폼</h3>

<p>원본의 통계적 특성을 근사한 학습용 또는 평가용 데이터셋의 합성 버전을 생성합니다. AI 학습 파이프라인과 분석에 사용되며, 실시간 운영 데이터의 런타임 보호 용도가 아닙니다.</p>

<p><strong>레이어:</strong> 데이터 파이프라인 (오프라인). <strong>범위:</strong> 데이터셋 생성. <strong>강점:</strong> ML 학습 데이터. <strong>제약:</strong> 실시간 워크플로우에서 동작하지 않습니다.</p>

<h3>4. Context-Preserving Data Layer for AI (LLM Capsule)</h3>

<p>기존 기업 환경(NOC, 티켓, OT, EHR, 미션 시스템)과 LLM 사이에 위치합니다. 문서 구조 보존 방식의 차등 프라이버시 기반 캡슐화로 규제 대상 운영 데이터를 AI 처리 가능한 컨텍스트로 변환합니다. 두 가지 실행 경로(외부 승인 LLM 또는 온프레미스 로컬 모델) 중 하나로 라우팅합니다. 결과물은 State Vault를 통해 워크플로우로 복원됩니다.</p>

<p><strong>레이어:</strong> context-preserving data layer for AI. <strong>범위:</strong> 운영 데이터 + 거버넌스. <strong>강점:</strong> 구조화된 운영 데이터, 두 가지 실행 경로, 레거시 시스템 연동. <strong>제약:</strong> 프롬프트 인젝션 방어 또는 합성 데이터 생성기가 아닙니다.</p>

<h2>직접 비교표</h2>

<table class="compare-table">
  <thead><tr><th></th><th>PII 가드레일</th><th>AI 보안 / 프롬프트</th><th class="us">LLM Capsule</th></tr></thead>
  <tbody>
    <tr><td>레이어</td><td>API 래퍼</td><td>프롬프트 / 게이트웨이</td><td class="us-cell">context-preserving data layer for AI</td></tr>
    <tr><td>범위</td><td>이름, ID, 필드</td><td>프롬프트 위협 + PII</td><td class="us-cell">운영 데이터 + 거버넌스</td></tr>
    <tr><td>방법</td><td>탐지 &amp; 마스킹</td><td>필터 / 프롬프트 정제</td><td class="us-cell">문서 구조 보존 + 차등 프라이버시 기반 캡슐화</td></tr>
    <tr><td>레거시 시스템 연동</td><td>아니요</td><td>아니요</td><td class="us-cell">예 (NOC, 티켓, OT, EHR, 미션)</td></tr>
    <tr><td>온프레미스 로컬 실행</td><td>아니요</td><td>제한적</td><td class="us-cell">예 (Path B)</td></tr>
    <tr><td>복원</td><td>단방향</td><td>단방향</td><td class="us-cell">State Vault를 통한 양방향</td></tr>
    <tr><td>거버넌스</td><td>탐지 로그</td><td>위협 로그</td><td class="us-cell">정책 · 감사 이력 · 접근 제어 · 컴플라이언스</td></tr>
  </tbody>
</table>

<h2>각 카테고리가 가장 잘하는 것</h2>

<p><strong>PII 가드레일</strong>은 민감 콘텐츠가 주로 개인 식별자인 LLM API 기반 AI 기능을 개발하는 개발자에게 적합한 출발점입니다.</p>

<p><strong>AI 보안 / 프롬프트 레벨 제품</strong>은 위협 모델에 프롬프트 인젝션, 탈옥 시도, 행동적 남용이 포함될 때 추가해야 할 솔루션입니다.</p>

<p><strong>합성 데이터 플랫폼</strong>은 원본이 아닌 대표성 있는 데이터셋으로 모델을 학습시키거나 분석을 활성화하는 것이 목표일 때 적합한 도구입니다. 실시간 워크플로우에서는 동작하지 않습니다.</p>

<p><strong>LLM Capsule</strong>은 LLM으로 전달되는 데이터가 규제 대상 운영 데이터이고, 워크플로우가 AI가 대체가 아닌 연동해야 하는 레거시 기업 환경 안에서 동작할 때 필요한 레이어입니다.</p>

<h2>격차를 보여주는 두 가지 실패 사례</h2>

<h3>사례 1 · 통신사 인시던트 분석</h3>

<p>한 통신사가 NOC 로그에서 RCA를 작성하기 위해 외부 LLM을 사용하고자 합니다. PII 가드레일이 인시던트 설명에서 고객 이름을 제거합니다. 남은 로그에는 여전히 네트워크의 영향받은 구간을 고유하게 식별하는 장치 ID, 사이트 참조, 알람 시퀀스, 토폴로지 경로가 포함되어 있습니다. PII 가드레일은 통과합니다. 운영 기밀은 침해됩니다.</p>

<p><strong>LLM Capsule의 차별점:</strong> 문서 구조 보존 캡슐화가 장치 ID, 사이트 참조, 토폴로지 경로를 토큰화하면서도 LLM이 추론할 수 있도록 시퀀스 관계를 보존합니다. 차등 프라이버시 기반 보호가 집합적 추론 위험을 제한합니다. 캡슐은 원시 운영 데이터 노출 없이 Path A(외부 승인 LLM)로 라우팅되거나, 더 엄격한 규제 프로파일에는 Path B(온프레미스 로컬 모델)로 라우팅됩니다.</p>

<h3>사례 2 · OT 취약점 검토</h3>

<p>한 산업 운영자가 PLC 알람 전반에 걸쳐 AI 지원 취약점 분류를 원합니다. PII 가드레일은 제거할 것이 없습니다 — 고객 이름이 없습니다. 데이터는 그대로 외부 LLM으로 전달됩니다. 플랜트 구역, 자산 참조, 패치 제약 사항이 서드파티 모델에 노출됩니다.</p>

<p><strong>LLM Capsule의 차별점:</strong> OT/자산 참조 마커(PLC 태그, 플랜트 구역, 자산 인벤토리 참조)가 탐지되어 캡슐화됩니다. 실행 경로는 정책 기반입니다 — OT의 경우 Path B(온프레미스 로컬)가 일반적이며, 외부 전송이 전혀 없습니다.</p>

<h2>실제 구성 방식</h2>

<p>PII 가드레일, 프롬프트 보안, 합성 데이터 플랫폼, 데이터 레이어는 상호 배타적이지 않습니다. 성숙한 기업 스택은 AI 파이프라인의 서로 다른 부분에서 네 가지 모두를 운영하는 경우가 많습니다.</p>

PII guardrails — at the API call layer for low-regulation features
PII 가드레일 — 규제 수준이 낮은 기능의 API 호출 레이어

AI 보안 / 프롬프트 보호 — 프롬프트 위협 방어를 위한 게이트웨이

합성 데이터 — 오프라인 학습 파이프라인

LLM Capsule — 규제 대상 운영 데이터를 위한 context-preserving data layer for AI

<p>실수는 첫 번째를 네 번째인 것처럼 취급하는 것입니다. 필드 레벨 마스킹은 운영 데이터에 대한 분산적 보호의 대안이 아닙니다.</p>

<strong>Buyer test.</strong> When the AI pipeline involves NOC logs, incident records, OT manifests, configuration trees, clinical workflows, or mission context — the context-preserving data layer for AI is the right place to evaluate. PII guardrails are necessary but not sufficient.
<strong>구매 판단 기준.</strong> AI 파이프라인에 NOC 로그, 인시던트 레코드, OT 매니페스트, 설정 트리, 임상 워크플로우, 또는 미션 컨텍스트가 포함된다면 — 데이터 레이어를 평가해야 합니다. PII 가드레일은 필요하지만 충분하지 않습니다.

<h2>검증 사례</h2>

<p>LLM Capsule은 규제 운영 환경에서 검증되었습니다.</p>

<strong>Telecom</strong> — Deutsche Telekom T Challenge 2026, Top 12 in Data Security & Governance
<strong>통신</strong> — Deutsche Telekom T Challenge 2026, 데이터 보안·거버넌스 부문 Top 12

<strong>산업 사이버보안 / OT</strong> — Claroty와 파트너십

<strong>의료</strong> — 이화여자대학교 의료원(EUMC) 도입

<strong>금융·보험</strong> — IBK, 교보, DB손해보험 도입

<strong>인증</strong> — ISO/IEC 27001, ISO/IEC 42001

Key takeaways
주요 시사점

PII 가드레일과 데이터 레이어는 기업 AI 파이프라인의 서로 다른 레이어를 담당합니다.

PII 가드레일, AI 보안 스위트, 프롬프트 보안 게이트웨이 — 각자의 범위(리스크 제어, 정책 적용, 프롬프트 레벨 보호)에서 강점을 가집니다. 그 중 어느 것도 차등 프라이버시 기반 캡슐화로 구조화된 운영 데이터를 변환하지는 않습니다.

구매 판단 기준: 민감 콘텐츠가 구조적인 것(로그, 설정, OT, 임상, 미션)이라면, 가드레일만이 아닌 데이터 레이어가 필요합니다.

각 카테고리는 함께 구성됩니다. 실수는 PII 가드레일이 운영 데이터를 커버하는 것처럼 취급하는 것입니다.

LLM Capsule은 레거시 시스템 연동, 두 가지 실행 경로, 양방향 복원, 완전한 거버넌스를 제공합니다 — PII 가드레일이 필요한 곳에서는 대체가 아닌 함께 사용합니다.`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Why PII Guardrails Don't Make Enterprise AI Work",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
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
    title: "Warum PII-Guardrails allein den KI-Einsatz im Unternehmen nicht ermöglichen",
    lead: "PII-Guardrails, KI-Sicherheitssuiten, Prompt-Security-Gateways — sie alle erfüllen spezifische Aufgaben. Keine davon ist mit den anderen austauschbar. Dieser Artikel vergleicht die Kategorien direkt und zeigt, wo jede im KI-Einsatz des Unternehmens ihren Platz hat.",
    category: "VERGLEICH · Kategorien",
    readTime: "11 Min. Lesezeit",
    dateUpdated: "Aktualisiert Mai 2025",
    tldrLabel: "Definition · TL;DR",
    tldrBody: "PII-Guardrails schützen identifizierbare Felder auf API- oder Prompt-Ebene. Die KI-Datenschicht schützt strukturierte Unternehmensdaten — Netzwerkprotokolle, Konfigurationen, Incident-Records, OT- und Missionskontext — durch strukturerhaltende Kapsulierung auf Basis von Differential Privacy. Beide decken unterschiedliche Ebenen der KI-Pipeline im Unternehmen ab.",
    bodyHtml: `<h2>Warum dieser Vergleich relevant ist</h2>

<p>Bei der Evaluierung von KI-Lösungen für Unternehmen begegnen Entscheider regelmäßig vier Produktkategorien auf derselben Shortlist: PII-Guardrails, Prompt-Security-Gateways, KI-Sicherheitssuiten und die KI-Datenschicht. Diese Kategorien sind nicht gleichwertig. Wer sie als austauschbar behandelt, riskiert Deployments, die den PII-Filter passieren, aber die sensiblen Teile des Workflows weiterhin exponieren.</p>

<p>Dieser Artikel stellt alle vier Kategorien nebeneinander: mit Definition, Einordnung in die Pipeline, Abdeckungsbereich und Grenzen.</p>

<h2>Die vier Kategorien</h2>

<h3>1. PII-Guardrails (Felderkennung auf API-Ebene)</h3>
<p>Entwicklerorientierte Toolkits, die LLM-API-Aufrufe mit Erkennung und Ersetzung personenbezogener Identifikatoren, Inhaltsmoderation und Sicherheitsfiltern umhüllen. Sie sind schnell integriert und eignen sich für Workflows mit geringen Regulierungsanforderungen.</p>
<p><strong>Ebene:</strong> API-Wrapper. <strong>Umfang:</strong> Feldebene. <strong>Stärke:</strong> schnelle Integration. <strong>Einschränkung:</strong> keine Erkennung struktureller und aggregierter Muster in operativen Daten.</p>

<h3>2. KI-Sicherheits- und Prompt-Level-Produkte</h3>
<p>Diese Produkte behandeln Prompt-Injection, Jailbreak-Resistenz, Output-Richtliniendurchsetzung und Bedrohungserkennung zur Laufzeit. PII-Erkennung ist häufig eine sekundäre Funktion. Sie sind auf Prompt- oder API-Gateway-Ebene positioniert.</p>
<p><strong>Ebene:</strong> Prompt- / API-Gateway. <strong>Umfang:</strong> Prompt-Bedrohungen und PII. <strong>Stärke:</strong> Schutz vor Prompt-Injection. <strong>Einschränkung:</strong> nicht für die Transformation strukturierter operativer Daten vor der Modellverarbeitung konzipiert.</p>

<h3>3. Synthetische Datenplattformen</h3>
<p>Diese Plattformen erzeugen synthetische Versionen von Trainings- oder Evaluierungsdatensätzen, die die statistischen Eigenschaften der Originaldaten annähern. Sie werden in KI-Trainingspipelines und für Analysen eingesetzt, nicht zum Laufzeitschutz produktiver operativer Daten.</p>
<p><strong>Ebene:</strong> Datenpipeline (offline). <strong>Umfang:</strong> Datensatzgenerierung. <strong>Stärke:</strong> Trainingsdaten für ML. <strong>Einschränkung:</strong> kein Einsatz im Live-Workflow.</p>

<h3>4. KI-Datenschicht — Context-Preserving Data Layer for AI (LLM Capsule)</h3>
<p>Die KI-Datenschicht ist zwischen der bestehenden Unternehmensumgebung (NOC, Ticketsysteme, OT, EHR, Missionssysteme) und dem LLM positioniert. Sie transformiert regulierte operative Daten in KI-verarbeitbaren Kontext durch strukturerhaltende Kapsulierung auf Basis von Differential Privacy. Die Ausführung erfolgt über einen von zwei Pfaden — externer zugelassener LLM oder On-Premise-Modell. Ergebnisse werden über den State Vault in den Workflow zurückgeführt.</p>
<p><strong>Ebene:</strong> KI-Datenschicht. <strong>Umfang:</strong> operative Daten und Governance. <strong>Stärke:</strong> strukturierte operative Daten, zwei Ausführungspfade, Integration in bestehende Systeme. <strong>Einschränkung:</strong> kein Schutz vor Prompt-Injection, keine Generierung synthetischer Daten.</p>

<h2>Direkter Vergleich</h2>

<table>
<thead><tr><th></th><th>PII-Guardrails</th><th>KI-Sicherheit / Prompt</th><th>LLM Capsule</th></tr></thead>
<tbody>
<tr><td>Ebene</td><td>API-Wrapper</td><td>Prompt- / Gateway-Ebene</td><td>KI-Datenschicht</td></tr>
<tr><td>Umfang</td><td>Namen, IDs, Felder</td><td>Prompt-Bedrohungen und PII</td><td>Operative Daten und Governance</td></tr>
<tr><td>Methode</td><td>Erkennen und maskieren</td><td>Prompts filtern und bereinigen</td><td>Strukturerhaltende Kapsulierung auf Basis von Differential Privacy</td></tr>
<tr><td>Integration in Bestandssysteme</td><td>Nein</td><td>Nein</td><td>Ja (NOC, Ticket, OT, EHR, Mission)</td></tr>
<tr><td>On-Premise-Ausführung</td><td>Nein</td><td>Eingeschränkt</td><td>Ja (Pfad B)</td></tr>
<tr><td>Wiederherstellung</td><td>Einseitig</td><td>Einseitig</td><td>Bidirektional über State Vault</td></tr>
<tr><td>Governance</td><td>Erkennungsprotokolle</td><td>Bedrohungsprotokolle</td><td>Richtlinien · Audit · Zugriff · Compliance</td></tr>
</tbody>
</table>

<h2>Einsatzbereiche der einzelnen Kategorien</h2>

<p><strong>PII-Guardrails</strong> sind der richtige Ausgangspunkt für Entwickler, die KI-Funktionen auf Basis einer LLM-API erstellen, bei denen der sensible Inhalt überwiegend aus individuellen Identifikatoren besteht.</p>

<p><strong>KI-Sicherheits- und Prompt-Level-Produkte</strong> sind die richtige Ergänzung, wenn das Bedrohungsmodell Prompt-Injection, Jailbreak-Versuche oder verhaltensbasierte Angriffe umfasst.</p>

<p><strong>Synthetische Datenplattformen</strong> sind das richtige Werkzeug, wenn das Ziel das Modelltraining oder Analysen auf repräsentativen, aber nicht originalen Datensätzen ist. Sie laufen nicht in Live-Workflows.</p>

<p><strong>LLM Capsule</strong> ist die richtige Schicht, wenn die Daten, die an das LLM übermittelt werden, regulierte operative Daten sind — und der Workflow in einer bestehenden Unternehmensumgebung läuft, in die sich die KI integrieren muss, anstatt sie zu ersetzen.</p>

<h2>Zwei Szenarien, die die Lücke verdeutlichen</h2>

<h3>Szenario 1 · Telekommunikation: Incident-Analyse</h3>
<p>Ein Telekommunikationsanbieter möchte ein externes LLM einsetzen, um Root-Cause-Analysen aus NOC-Protokollen zu erstellen. Ein PII-Guardrail entfernt Kundennamen aus den Incident-Beschreibungen. Das verbleibende Protokoll enthält jedoch weiterhin Geräte-IDs, Standortverweise, Alarmsequenzen und Topologiepfade, die das betroffene Netzsegment eindeutig identifizieren. Der PII-Filter meldet keine Verletzung. Die operative Vertraulichkeit ist dennoch gefährdet.</p>
<p><strong>Was LLM Capsule anders macht:</strong> Die strukturerhaltende Kapsulierung tokenisiert Geräte-IDs, Standortverweise und Topologiepfade und bewahrt dabei die Sequenzbeziehungen, damit das LLM weiterhin schlussfolgern kann. Der Differential-Privacy-basierte Schutz begrenzt das Inferenzrisiko auf aggregierter Ebene. Die Kapsel wird über Pfad A (externer zugelassener LLM) ohne Offenlegung operativer Rohdaten geleitet — oder über Pfad B (On-Premise-Modell) bei strengeren regulatorischen Anforderungen.</p>

<h3>Szenario 2 · OT: Schwachstellenanalyse</h3>
<p>Ein Industriebetreiber möchte KI-gestützte Schwachstellentriage für SPS-Alarmmeldungen einsetzen. Ein PII-Guardrail hat nichts zu entfernen — es gibt keine Kundennamen. Die Daten werden unverändert an das externe LLM übermittelt. Anlagenzonen, Asset-Referenzen und Patch-Beschränkungen sind für ein Drittanbietermodell sichtbar.</p>
<p><strong>Was LLM Capsule anders macht:</strong> Die OT/Asset-Referenzmarker (SPS-Tag, Anlagenzone, Asset-Inventarreferenz) werden erkannt und kapsuliert. Der Ausführungspfad ist richtliniengesteuert — für OT ist Pfad B (On-Premise-lokal) typisch, bei dem keine Daten extern übertragen werden.</p>

<h2>Zusammenspiel in der Praxis</h2>

<p>PII-Guardrails, Prompt-Security, synthetische Datenplattformen und die KI-Datenschicht schließen sich nicht gegenseitig aus. Ein ausgereifter Unternehmens-Stack betreibt häufig alle vier in unterschiedlichen Teilen der KI-Pipeline:</p>

<ul>
<li>PII-Guardrails — auf der API-Aufrufebene für Funktionen mit geringen Regulierungsanforderungen</li>
<li>KI-Sicherheit / Prompt-Schutz — am Gateway für den Schutz vor Prompt-Bedrohungen</li>
<li>Synthetische Daten — in der Offline-Trainingspipeline</li>
<li>LLM Capsule — auf der KI-Datenschicht für regulierte operative Daten</li>
</ul>

<p>Der Fehler liegt darin, die erste Kategorie so zu behandeln, als wäre sie die vierte. Feldebenenmaskierung ist kein Ersatz für aggregierten Schutz auf Verteilungsebene bei operativen Daten.</p>

<div class="callout"><strong>Praxistest.</strong> Wenn die KI-Pipeline NOC-Protokolle, Incident-Records, OT-Manifeste, Konfigurationsbäume, klinische Workflows oder Missionskontext verarbeitet, ist die KI-Datenschicht der richtige Evaluierungspunkt. PII-Guardrails sind notwendig, aber nicht hinreichend.</div>

<h2>Referenzen und Validierung</h2>

<p>LLM Capsule ist in regulierten operativen Umgebungen validiert:</p>

<ul>
<li><strong>Telekommunikation</strong> — Deutsche Telekom T Challenge 2026, Top 12 in Data Security &amp; Governance</li>
<li><strong>Industrielle Cybersicherheit / OT</strong> — Partnerschaft mit Claroty</li>
<li><strong>Gesundheitswesen</strong> — im Einsatz am EUMC (Ewha Womans University Medical Center)</li>
<li><strong>Finanz- und Versicherungsbranche</strong> — im Einsatz bei IBK, Kyobo, DB Insurance</li>
<li><strong>Zertifizierungen</strong> — ISO/IEC 27001, ISO/IEC 42001</li>
</ul>

<div class="takeaways">
<div class="takeaways__h">Kernaussagen</div>
<ul>
<li>PII-Guardrails und die KI-Datenschicht decken unterschiedliche Ebenen der KI-Pipeline im Unternehmen ab.</li>
<li>PII-Guardrails, KI-Sicherheitssuiten und Prompt-Security-Gateways — jede Kategorie ist in ihrem eigenen Bereich leistungsstark (Risikokontrolle, Richtliniendurchsetzung, Prompt-Schutz). Keine davon transformiert strukturierte operative Daten mit Differential-Privacy-basierter Kapsulierung.</li>
<li>Zur Orientierung: Wenn der sensible Inhalt struktureller Natur ist — Protokolle, Konfigurationen, OT, klinische Daten, Missionskontext — wird eine KI-Datenschicht benötigt, nicht nur ein Guardrail.</li>
<li>Die Kategorien ergänzen sich. Der Fehler liegt darin, PII-Guardrails so zu behandeln, als deckten sie operative Daten ab.</li>
<li>LLM Capsule bietet Integration in Bestandssysteme, zwei Ausführungspfade, bidirektionale Wiederherstellung und vollständige Governance — ergänzend zu PII-Guardrails, nicht als Ersatz, wo diese benötigt werden.</li>
</ul>
</div>`,
    canonicalUrl: "https://llmcapsule.ai/resources/learn/pii-guardrails-vs-operational-data-protection",
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    inLanguage: "en",
    breadcrumbLabel: "Why PII Guardrails Don't Make Enterprise AI Work",
    faqJsonLd: ``,
    relatedSectionLabel: "Related articles",
    related1Title: "Differential privacy for enterprise LLM",
    related1Href: "/resources/learn/differential-privacy-for-enterprise-llm",
    related2Title: "AI on network operations data",
    related2Href: "/resources/learn/ai-on-network-operations-data",
    related3Title: "On-prem LLM execution path",
    related3Href: "/resources/learn/on-prem-llm-execution-path",
    related4Title: "",
    related4Href: "",
  },
}

export default function PiiGuardrailsVsOperationalDataProtection({
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

addPropertyControls(PiiGuardrailsVsOperationalDataProtection, {
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
