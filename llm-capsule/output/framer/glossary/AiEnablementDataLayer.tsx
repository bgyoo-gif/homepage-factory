// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-glossary-tsx.py
// To regenerate: python3 scripts/build-glossary-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Embedded TRANSLATIONS dict drives default text per locale; individual Props
// remain for per-instance overrides. Set `locale` in Framer Properties panel
// to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  backLabel?: string
  backHref?: string
  term?: string
  lead?: string
  category?: string
  definitionLabel?: string
  definitionBody?: string
  bodyHtml?: string
  related1Label?: string
  related1Href?: string
  related2Label?: string
  related2Href?: string
  related3Label?: string
  related3Href?: string
  related4Label?: string
  related4Href?: string
  related5Label?: string
  related5Href?: string
}

const BODY_HTML = `<h2>What it does (in three lines)</h2>
<p>1. <strong>Reads</strong> operational data from existing enterprise systems via REST/gRPC/JDBC connectors.<br>
2. <strong>Encapsulates</strong> sensitive elements locally with structure-preserving + DP-based protection.<br>
3. <strong>Restores</strong> AI outputs back into the originating workflow inside the enterprise environment.</p>

<h2>What it is NOT</h2>
<ul>
<li><strong>Not a PII guardrail</strong>. PII guardrails detect individual identifiers at the API boundary. The data layer transforms structured operational data — ticket sequences, network configs, OT manifests, clinical workflows.</li>
<li><strong>Not an AI / LLM security gateway</strong>. Security gateways focus on prompt injection, runtime threats, and API-level filtering. The data layer operates one layer deeper, on the data itself.</li>
<li><strong>Not a synthetic data platform</strong>. Synthetic data generates artificial records for training and testing. The data layer runs on real production documents in live workflows.</li>
<li><strong>Not a CISO / SOC tool</strong>. The buyer is the AI team, the CDO/CAIO, or the business unit that needs AI in production. Security is necessary infrastructure, not the product purpose.</li>
</ul>

<h2>The five components</h2>
<ol>
<li><strong>Encapsulation Engine</strong> — local detection + replacement, mapping stays inside.</li>
<li><strong>Policy Control</strong> — versioned, scoped, RBAC'd policy.</li>
<li><strong>Capsule Transmission</strong> — only protected capsules cross the trust boundary.</li>
<li><strong>Restoration Engine</strong> — local token vault, output validation, context re-binding.</li>
<li><strong>Audit &amp; Compliance</strong> — every event logged for GDPR/HIPAA/SOX governance.</li>
</ol>

<h2>The four-zone architecture (diagram_v8 reference)</h2>
<p>The architecture maps to four zones: <strong>Corporate Internal Network</strong> (where existing source systems — ERP / CRM / Ticketing / DMS — live, read in place via REST / gRPC / JDBC / Graph API) → <strong>DMZ — Demilitarized Zone</strong> (where the Enhanced Encapsulation Layer applies structure-preserving, differential-privacy-based protection) → <strong>In-House Team</strong> (where governance, policy, and routing decide Path A or Path B) → <strong>Local — Auto Reconstruction</strong> (where the AI response is restored to original values inside the organization, delivering Business-Ready output back to the originating workflow). Raw operational data never crosses the trust boundary; only the protected capsule does.</p>

<h2>Six architectural pillars</h2>
<ol>
  <li><strong>Beyond simple PII guardrails</strong> — free-text fields like CS ticket Details columns can't be safely processed by simple PII guardrails alone</li>
  <li><strong>No modification of existing systems</strong> — connection is a single API-call addition (REST / gRPC), legacy systems are not refactored</li>
  <li><strong>Beyond simple encapsulation — differential privacy</strong> — DP applied on top of tokenization to reduce re-identification risk</li>
  <li><strong>No raw exposure to external AI</strong> — only the capsule crosses the trust boundary; DP processing means a leak doesn't yield reconstructable original values</li>
  <li><strong>In-environment auto-restoration</strong> — restoration happens only inside the organization; data that left the boundary cannot be reconstructed externally</li>
  <li><strong>Governance, policy &amp; domain context retained</strong> — organizational policy drives encapsulation, routing, and audit end-to-end</li>
</ol>

<h2>The two execution paths</h2>
<ul>
<li><strong>Path A</strong> — external approved LLM (ChatGPT, Claude, Gemini, in-region EU LLMs) with capsule data only. No raw operational data exposure.</li>
<li><strong>Path B</strong> — on-prem local lightweight model. Zero external transmission. For air-gapped, classified, OT, and strictly regulated workflows.</li>
</ul>

<h2>When to use it</h2>
<p>Whenever a regulated enterprise wants to use AI on real production data — not synthetic, not anonymized snippets — without exposing the raw data to external LLMs and without rebuilding the existing legacy systems. Telecom NOC, hospital clinical workflows, finance claims, defense mission, OT operations, legal matter management.</p>

<h2>Validated deployments</h2>
<p>SK Telecom (telecom NOC), Deutsche Telekom T Challenge 2026 Top 12 in Data Security &amp; Governance, Claroty (industrial cybersecurity), EUMC (hospital clinical), Kyobo / DB Insurance / IBK (finance), Shin&amp;Kim (legal), Ministry of National Defense Korea (mission workflows). Recognized as Gartner Vendor.</p>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "AI enablement data layer",
    lead: "The architectural component that makes regulated enterprise AI workflows actually work — between operational systems and large language models.",
    category: "P0 · Category definition",
    definitionLabel: "Definition",
    definitionBody: "An AI enablement data layer is the architectural component that sits between regulated enterprise systems (NOC consoles, EHR, claim platforms, mission systems, legacy DBs) and large language models. It turns operational data into AI-ready capsules using structure-preserving, differential-privacy-based encapsulation, executes AI workflows on the protected capsule, and restores outputs back into the originating system. It supports two execution paths — external approved LLM with capsule data only, or on-prem local lightweight model — under a single governance framework.",
    bodyHtml: BODY_HTML,
    related1Label: "AI-ready operational layer",
    related1Href: "/glossary/ai-ready-operational-layer",
    related2Label: "Structure-preserving encapsulation",
    related2Href: "/glossary/structure-preserving-encapsulation",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "Two execution paths",
    related4Href: "/glossary/two-execution-paths",
    related5Label: "Operational data",
    related5Href: "/glossary/operational-data",
  },
  ko: {
    backLabel: "← 용어 사전",
    backHref: "/resources/glossary",
    term: "데이터 레이어",
    lead: "규제 환경의 기업 AI 워크플로우를 실제로 작동하게 만드는 아키텍처 구성 요소입니다 — 운영 시스템과 대규모 언어 모델 사이에 위치합니다.",
    category: "P0 · 카테고리 정의",
    definitionLabel: "정의",
    definitionBody: "데이터 레이어는 규제 환경의 기업 시스템(NOC 콘솔, EHR, 청구 플랫폼, 미션 시스템, 레거시 DB)과 대규모 언어 모델 사이에 위치하는 아키텍처 구성 요소입니다. 운영 데이터를 문서 구조 보존·차등 프라이버시 기반 캡슐화로 AI 준비 캡슐로 변환하고, 보호된 캡슐에서 AI 워크플로우를 실행한 뒤 출력 결과를 원래 시스템으로 복원합니다. 단일 거버넌스 프레임워크 하에 두 가지 실행 경로를 지원합니다 — 캡슐 데이터만 사용하는 외부 승인 LLM, 또는 온프레미스 경량 로컬 모델.",
    bodyHtml: `<h2>3줄로 요약하는 핵심 동작</h2>

<p>1. <strong>읽기</strong> — REST/gRPC/JDBC 커넥터로 기존 기업 시스템에서 운영 데이터를 읽습니다.<br>
2. <strong>캡슐화</strong> — 민감한 요소를 문서 구조 보존 + 차등 프라이버시 기반 보호로 로컬에서 캡슐화합니다.<br>
3. <strong>복원</strong> — AI 출력 결과를 기업 환경 내부의 원래 워크플로우로 복원합니다.</p>

<h2>이것이 아닌 것</h2>

<ul>
<li><strong>PII 가드레일이 아닙니다</strong>. PII 가드레일은 API 경계에서 개인 식별자를 탐지합니다. 데이터 레이어는 구조화된 운영 데이터 — 티켓 시퀀스, 네트워크 설정, OT 매니페스트, 임상 워크플로우 — 를 변환합니다.</li>
<li><strong>AI/LLM 보안 게이트웨이가 아닙니다</strong>. 보안 게이트웨이는 프롬프트 인젝션, 런타임 위협, API 수준 필터링에 집중합니다. 데이터 레이어는 한 단계 더 깊은 곳, 데이터 자체에서 작동합니다.</li>
<li><strong>합성 데이터 플랫폼이 아닙니다</strong>. 합성 데이터는 학습·테스트용 인공 레코드를 생성합니다. 데이터 레이어는 실제 운영 환경의 실제 문서 위에서 작동합니다.</li>
<li><strong>CISO/SOC 도구가 아닙니다</strong>. 구매 주체는 AI 팀, CDO/CAIO, 또는 프로덕션에서 AI가 필요한 비즈니스 부서입니다. 보안은 필수 인프라이지 제품의 목적이 아닙니다.</li>
</ul>

<h2>5가지 구성 요소</h2>

<ul>
<li><strong>캡슐화 엔진</strong> — 로컬 탐지·치환, 매핑은 내부에 유지됩니다.</li>
<li><strong>정책 제어</strong> — 버전 관리, 범위 지정, RBAC 적용 정책.</li>
<li><strong>캡슐 전송</strong> — 보호된 캡슐만 신뢰 경계를 넘습니다.</li>
<li><strong>복원 엔진</strong> — 로컬 토큰 보관소, 출력 검증, 컨텍스트 재바인딩.</li>
<li><strong>감사 및 컴플라이언스</strong> — GDPR/HIPAA/SOX 거버넌스를 위해 모든 이벤트를 기록합니다.</li>
</ul>

<h2>4구역 아키텍처(diagram_v8 참조)</h2>

<p>아키텍처는 4개 구역으로 구성됩니다. <strong>기업 내부 네트워크</strong>(ERP / CRM / 티켓팅 / DMS 등 기존 소스 시스템이 위치하며 REST / gRPC / JDBC / Graph API로 직접 읽음) → <strong>DMZ — 비무장 지대</strong>(강화된 캡슐화 레이어가 문서 구조 보존·차등 프라이버시 기반 보호를 적용) → <strong>내부 팀</strong>(거버넌스, 정책, 라우팅이 경로 A 또는 경로 B를 결정) → <strong>로컬 — 자동 복원</strong>(기업 내부에서 AI 응답을 원본 값으로 복원하여 원래 워크플로우로 비즈니스 준비 완료 출력 전달). 원시 운영 데이터는 절대 신뢰 경계를 넘지 않습니다. 보호된 캡슐만 경계를 통과합니다.</p>

<h2>6가지 아키텍처 기반 원칙</h2>

<ul>
<li><strong>단순 PII 가드레일을 넘어서</strong> — CS 티켓 상세 열처럼 자유 텍스트 필드는 단순 PII 가드레일만으로는 안전하게 처리할 수 없습니다.</li>
<li><strong>기존 시스템 수정 없음</strong> — 단일 API 호출 추가(REST / gRPC)만으로 연결합니다. 레거시 시스템을 재구성하지 않습니다.</li>
<li><strong>단순 캡슐화를 넘어 — 차등 프라이버시</strong> — 토큰화 위에 차등 프라이버시를 적용하여 재식별 위험을 줄입니다.</li>
<li><strong>외부 AI에 원본 노출 없음</strong> — 캡슐만 신뢰 경계를 넘습니다. 차등 프라이버시 처리 덕분에 유출이 발생해도 원본 값은 복원되지 않습니다.</li>
<li><strong>환경 내부 자동 복원</strong> — 복원은 기업 내부에서만 수행됩니다. 경계를 벗어난 데이터는 외부에서 복원할 수 없습니다.</li>
<li><strong>거버넌스·정책·도메인 컨텍스트 유지</strong> — 조직 정책이 캡슐화, 라우팅, 감사를 엔드투엔드로 제어합니다.</li>
</ul>

<h2>두 가지 실행 경로</h2>

<ul>
<li><strong>경로 A</strong> — 외부 승인 LLM(ChatGPT, Claude, Gemini, EU 역내 LLM)에 캡슐 데이터만 전달합니다. 원시 운영 데이터는 절대 노출되지 않습니다.</li>
<li><strong>경로 B</strong> — 온프레미스 로컬 경량 모델. 외부 전송 Zero Exposure. 망분리, 기밀, OT, 엄격한 규제 워크플로우에 적합합니다.</li>
</ul>

<h2>사용 시점</h2>

<p>규제 환경의 기업이 합성 데이터나 익명화 단편이 아닌 실제 프로덕션 데이터로 AI를 활용하고자 할 때 — 원시 데이터를 외부 LLM에 노출하지 않고, 기존 레거시 시스템을 재구축하지 않아도 됩니다. 통신 NOC, 병원 임상 워크플로우, 금융 청구, 국방 미션, OT 운영, 법무 사건 관리에 적합합니다.</p>

<h2>실증 배포 사례</h2>

<p>SK텔레콤(통신 NOC), Deutsche Telekom T Challenge 2026 데이터 보안·거버넌스 부문 Top 12, Claroty(산업 사이버보안), 서울대병원(병원 임상), 교보·DB손해보험·IBK(금융), 법무법인 광장(법률), 대한민국 국방부(미션 워크플로우). Gartner Vendor로 인정됩니다.</p>

---`,
    related1Label: "AI-ready operational layer",
    related1Href: "/glossary/ai-ready-operational-layer",
    related2Label: "Structure-preserving encapsulation",
    related2Href: "/glossary/structure-preserving-encapsulation",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "Two execution paths",
    related4Href: "/glossary/two-execution-paths",
    related5Label: "Operational data",
    related5Href: "/glossary/operational-data",
  },
  de: {
    backLabel: "← Glossar",
    backHref: "/resources/glossary",
    term: "AI enablement data layer",
    lead: "Die Architekturkomponente, die regulierte KI-Workflows im Unternehmen praxistauglich macht — zwischen operativen Systemen und großen Sprachmodellen.",
    category: "P0 · Kategoriebeschreibung",
    definitionLabel: "Definition",
    definitionBody: "Der AI enablement data layer ist die Architekturkomponente, die zwischen regulierten Unternehmenssystemen (NOC-Konsolen, EHR, Schadenplattformen, Missionssysteme, Legacy-Datenbanken) und großen Sprachmodellen angesiedelt ist. Er überführt operative Daten mittels strukturerhaltender, Differential-Privacy-basierter Kapsulierung in KI-geeignete Kapseln, führt KI-Workflows auf der geschützten Kapsel aus und stellt die Ergebnisse in das ursprüngliche System zurück. Das System unterstützt zwei Ausführungspfade — ein externes zugelassenes LLM mit ausschließlich Kapseldaten oder ein lokales On-Premise-Leichtgewichtmodell — unter einem einheitlichen Governance-Rahmen.",
    bodyHtml: `<h2>Funktionsweise (in drei Schritten)</h2>

<p>1. <strong>Liest</strong> operative Daten aus bestehenden Unternehmenssystemen über REST/gRPC/JDBC-Konnektoren.<br>
2. <strong>Kapsuliert</strong> sensible Inhalte lokal mit strukturerhaltender und Differential-Privacy-basierter Schutzschicht.<br>
3. <strong>Stellt</strong> KI-Ausgaben innerhalb der Unternehmensumgebung in den ursprünglichen Workflow zurück.</p>

<h2>Was er nicht ist</h2>

<ul>
<li><strong>Keine PII-Schutzmaßnahme</strong>. PII-Schutzmaßnahmen erkennen individuelle Kennungen an der API-Grenze. Der AI enablement data layer verarbeitet strukturierte operative Daten — Ticket-Sequenzen, Netzwerkkonfigurationen, OT-Manifeste, klinische Workflows.</li>
<li><strong>Kein KI/LLM-Sicherheits-Gateway</strong>. Sicherheits-Gateways konzentrieren sich auf Prompt-Injection, Laufzeitbedrohungen und Filterung auf API-Ebene. Der AI enablement data layer operiert eine Schicht tiefer — auf den Daten selbst.</li>
<li><strong>Keine Plattform für synthetische Daten</strong>. Synthetische Daten erzeugen künstliche Datensätze für Training und Tests. Der AI enablement data layer arbeitet mit echten Produktionsdokumenten in Live-Workflows.</li>
<li><strong>Kein CISO/SOC-Werkzeug</strong>. Zielgruppe sind KI-Teams, CDO/CAIO oder Geschäftsbereiche, die KI produktiv einsetzen möchten. Sicherheit ist notwendige Infrastruktur — nicht der primäre Produktzweck.</li>
</ul>

<h2>Die fünf Komponenten</h2>

<ol>
<li><strong>Encapsulation Engine</strong> — lokale Erkennung und Ersetzung, das Mapping verbleibt intern.</li>
<li><strong>Policy Control</strong> — versionierte, bereichsbezogene, rollenbasiert gesteuerte Richtlinien.</li>
<li><strong>Capsule Transmission</strong> — ausschließlich geschützte Kapseln überschreiten die Vertrauensgrenze.</li>
<li><strong>Restoration Engine</strong> — lokaler Token Vault, Ausgabevalidierung, Kontext-Rückbindung.</li>
<li><strong>Audit &amp; Compliance</strong> — jedes Ereignis wird für die DSGVO (GDPR) / HIPAA / SOX-Governance protokolliert.</li>
</ol>

<h2>Die Vier-Zonen-Architektur (Referenz: diagram_v8)</h2>

<p>Die Architektur gliedert sich in vier Zonen: <strong>Corporate Internal Network</strong> (bestehende Quellsysteme — ERP / CRM / Ticketing / DMS — werden vor Ort über REST / gRPC / JDBC / Graph API eingelesen) → <strong>DMZ — Demilitarisierte Zone</strong> (die Enhanced Encapsulation Layer wendet strukturerhaltenden, Differential-Privacy-basierten Schutz an) → <strong>In-House Team</strong> (Governance, Richtlinien und Routing entscheiden über Pfad A oder Pfad B) → <strong>Local — Auto Reconstruction</strong> (die KI-Antwort wird innerhalb der Organisation mit Originalwerten angereichert und als praxistaugliches Ergebnis in den ursprünglichen Workflow zurückgeführt). Operative Rohdaten überschreiten die Vertrauensgrenze nie — ausschließlich die geschützte Kapsel tut dies.</p>

<h2>Sechs Architekturpfeiler</h2>

<ol>
<li><strong>Über einfache PII-Schutzmaßnahmen hinaus</strong> — Freitextfelder wie Detailspalten in CS-Tickets lassen sich mit einfachen PII-Schutzmaßnahmen allein nicht sicher verarbeiten.</li>
<li><strong>Keine Änderung bestehender Systeme</strong> — die Anbindung erfolgt durch einen einzigen API-Aufruf (REST / gRPC), Legacy-Systeme werden nicht umgebaut.</li>
<li><strong>Über einfache Kapsulierung hinaus — Differential Privacy</strong> — DP wird zusätzlich zur Tokenisierung angewendet, um das Re-Identifikationsrisiko zu reduzieren.</li>
<li><strong>Keine Offenlegung von Rohdaten gegenüber externen KI-Systemen</strong> — nur die Kapsel überschreitet die Vertrauensgrenze; durch DP-Verarbeitung lassen sich bei einem Datenaustritt keine Originalwerte rekonstruieren.</li>
<li><strong>Automatische Wiederherstellung innerhalb der Unternehmensumgebung</strong> — die Wiederherstellung erfolgt ausschließlich intern; Daten, die die Grenze verlassen haben, lassen sich extern nicht rekonstruieren.</li>
<li><strong>Governance, Richtlinien und fachlicher Kontext bleiben erhalten</strong> — die Unternehmensrichtlinie steuert Kapsulierung, Routing und Audit durchgehend.</li>
</ol>

<h2>Die zwei Ausführungspfade</h2>

<ul>
<li><strong>Pfad A</strong> — externes zugelassenes LLM (ChatGPT, Claude, Gemini, EU-regionale LLMs) — ausschließlich mit Kapseldaten. Keine Offenlegung operativer Rohdaten.</li>
<li><strong>Pfad B</strong> — lokales On-Premise-Leichtgewichtmodell. Keine externe Datenübertragung. Für Air-Gapped-, klassifizierte, OT- und streng regulierte Workflows.</li>
</ul>

<h2>Anwendungsszenarien</h2>

<p>Immer wenn ein reguliertes Unternehmen KI auf echten Produktionsdaten einsetzen möchte — nicht auf synthetischen oder anonymisierten Datenauszügen — ohne Rohdaten an externe LLMs zu übermitteln und ohne bestehende Legacy-Systeme umzubauen. Anwendungsbereiche: Telekommunikations-NOC, klinische Workflows im Krankenhaus, Schadenbearbeitung in der Finanzbranche, Verteidigungsmissionen, OT-Betrieb, rechtliches Fallmanagement.</p>

<h2>Bestätigte Deployments</h2>

<p>SK Telecom (Telekommunikations-NOC), Deutsche Telekom T Challenge 2026 — Top 12 in Data Security &amp; Governance, Claroty (industrielle Cybersicherheit), EUMC (klinischer Krankenhausbetrieb), Kyobo / DB Insurance / IBK (Finanzwesen), Shin&amp;Kim (Rechtsberatung), Südkoreanisches Verteidigungsministerium (Missions-Workflows). Als Gartner Vendor anerkannt.</p>

---`,
    related1Label: "AI-ready operational layer",
    related1Href: "/glossary/ai-ready-operational-layer",
    related2Label: "Structure-preserving encapsulation",
    related2Href: "/glossary/structure-preserving-encapsulation",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "Two execution paths",
    related4Href: "/glossary/two-execution-paths",
    related5Label: "Operational data",
    related5Href: "/glossary/operational-data",
  },
}

export default function AiEnablementDataLayer({
  locale = "en",
  backLabel = "",
  backHref = "",
  term = "",
  lead = "",
  category = "",
  definitionLabel = "",
  definitionBody = "",
  bodyHtml = "",
  related1Label = "",
  related1Href = "",
  related2Label = "",
  related2Href = "",
  related3Label = "",
  related3Href = "",
  related4Label = "",
  related4Href = "",
  related5Label = "",
  related5Href = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _term = term || T["term"] || TRANSLATIONS.en["term"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _definitionLabel = definitionLabel || T["definitionLabel"] || TRANSLATIONS.en["definitionLabel"]
  const _definitionBody = definitionBody || T["definitionBody"] || TRANSLATIONS.en["definitionBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _related1Label = related1Label || T["related1Label"] || TRANSLATIONS.en["related1Label"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Label = related2Label || T["related2Label"] || TRANSLATIONS.en["related2Label"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Label = related3Label || T["related3Label"] || TRANSLATIONS.en["related3Label"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Label = related4Label || T["related4Label"] || TRANSLATIONS.en["related4Label"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]
  const _related5Label = related5Label || T["related5Label"] || TRANSLATIONS.en["related5Label"]
  const _related5Href = related5Href || T["related5Href"] || TRANSLATIONS.en["related5Href"]

  const relatedItems = [
    { label: _related1Label, href: _related1Href },
    { label: _related2Label, href: _related2Href },
    { label: _related3Label, href: _related3Href },
    { label: _related4Label, href: _related4Href },
    { label: _related5Label, href: _related5Href },
  ].filter((r) => r.label && r.href)

  // JSON-LD: DefinedTerm schema built from Props
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": _term,
    "description": _definitionBody,
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gd-root {
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
        .gd-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .gd-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .gd-hero__back {
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
        .gd-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gd-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gd-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gd-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gd-meta__chip {
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

        /* ── 2. Definition block ──────────────────────────── */
        .gd-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-def {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gd-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gd-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gd-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gd-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .gd-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gd-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gd-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .gd-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gd-body p:last-child { margin-bottom: 0; }

        .gd-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .gd-body ul,
        .gd-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gd-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gd-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gd-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .gd-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gd-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .gd-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .gd-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gd-body pre::-webkit-scrollbar { display: none; }

        .gd-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .gd-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .gd-body th,
        .gd-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .gd-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gd-body tr:last-child td { border-bottom: none; }

        /* Callout box (for <div class="callout"> inside _bodyHtml) */
        .gd-body .callout {
          padding: 20px 24px;
          background-color: var(--c-primary-soft, #eeebfe);
          border-left: 3px solid var(--c-primary, #5b4fe9);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
        }

        .gd-body .callout strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Takeaways box */
        .gd-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .gd-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .gd-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .gd-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .gd-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gd-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gd-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gd-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gd-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gd-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 4px;
          font-size: 15px;
          font-weight: 500;
          color: var(--c-ink, #0f1130);
          text-decoration: none;
          transition: color 0.15s;
        }

        .gd-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gd-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gd-related__link:hover .gd-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .gd-hero { padding-top: 48px; }
          .gd-hero__title { font-size: 28px; }
          .gd-hero__lead { font-size: 16px; }
          .gd-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gd-body p,
          .gd-body li { font-size: 16px; }
          .gd-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gd-root">

        {/* ── 1. Hero ── */}
        <section className="gd-hero">
          <div className="gd-container">
            <div className="gd-hero__inner">
              <a href={_backHref} className="gd-hero__back">{_backLabel}</a>
              <h1 className="gd-hero__title">{_term}</h1>
              <p className="gd-hero__lead">{_lead}</p>
              <div className="gd-hero__meta">
                <span className="gd-meta__chip">{_category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gd-def-wrap">
          <div className="gd-container">
            <div className="gd-def">
              <div className="gd-def__label">{_definitionLabel}</div>
              <p className="gd-def__body">{_definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gd-body-wrap">
          <div className="gd-container">
            <article
              className="gd-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gd-related">
            <div className="gd-container">
              <div className="gd-related__label">Related terms</div>
              <ul className="gd-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gd-related__item">
                    <a href={item.href} className="gd-related__link">
                      <span>{item.label}</span>
                      <span className="gd-related__link-arrow" aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(AiEnablementDataLayer, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "" },
  term: { type: ControlType.String, title: "Term", defaultValue: "" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "" },
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "" },
  definitionBody: { type: ControlType.String, title: "Definition Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href: { type: ControlType.String, title: "Related 5 URL", defaultValue: "" },
})
