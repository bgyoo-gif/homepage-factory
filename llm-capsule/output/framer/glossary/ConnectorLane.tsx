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

const BODY_HTML = `<h2>Definition</h2>
<p>The <strong>connector lane</strong> describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is <strong>not</strong> a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.</p>

<h2>What it is — and what it isn't</h2>
<p>The connector lane is the in-environment reading surface. Capsule sits next to existing systems on the customer's network, reads the document or record where it already is, encapsulates it locally, and returns the restored output to the originating workflow. Raw operational data does not traverse a public network or an external SaaS endpoint to reach Capsule.</p>
<p>This is the opposite of how a typical "integration platform" works. Capsule is not an external service that pulls data out of customer systems — it is a layer running inside the environment those systems already trust.</p>

<h2>What it reads</h2>
<ul>
  <li><strong>Document and record systems</strong> — SharePoint, internal DMS, S3 / blob storage in the customer's VPC, file repositories</li>
  <li><strong>Ticket and ITSM systems</strong> — ServiceNow, Jira, Remedy, in-house ticketing</li>
  <li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, in-house systems</li>
  <li><strong>Healthcare records</strong> — hospital information systems, clinical record stores, imaging metadata, all read inside the hospital network</li>
  <li><strong>Operational systems</strong> — NOC consoles, OSS / BSS, OT historians, log platforms read in DMZ and processed in environment</li>
  <li><strong>Custom and legacy systems</strong> — internal databases, file drops, queues, in-house tooling — Capsule adapts to what the customer already runs</li>
</ul>

<h2>Why this distinction matters</h2>
<p>For regulated buyers — defense, healthcare, finance, telecom — "integration" usually means "data leaves my environment to reach a vendor." That is exactly the failure mode that blocks AI adoption on operational data. The connector lane is the opposite contract: Capsule comes to the data, the data does not go to Capsule.</p>

<h2>Integration interfaces — how existing systems invoke Capsule</h2>
<p>Once Capsule is deployed inside the environment, existing systems invoke it through whichever interface fits their stack:</p>
<ul>
  <li><strong>REST / gRPC</strong> — for modern operations tools, RAG pipelines, and custom orchestrators inside the environment</li>
  <li><strong>JDBC / ODBC</strong> — for legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step</li>
  <li><strong>Graph API</strong> — for DMS / ECM systems (SharePoint, etc.) where document events trigger Capsule processing</li>
  <li><strong>Webhook / log tap</strong> — for incident- and event-driven workflows from NOC, ticket, OT, and SIEM-adjacent systems</li>
  <li><strong>On-prem API</strong> — Capsule's own on-prem callable surface; same contract whether you're air-gapped, hybrid, or VPC</li>
  <li><strong>Embedded SDK</strong> — library-level integration for ISVs and platform vendors who ship Capsule inside their own product</li>
  <li><strong>Slack App</strong> — for teams using Slack as the operations UI; the runtime stays in the customer environment, the Slack App is the invocation surface</li>
</ul>
<p>All of these interfaces stay inside the customer network. None of them route raw operational data through an external SaaS endpoint to reach Capsule.</p>

<h2>Reference statement</h2>
<blockquote>The connector lane is what makes regulated AI deployment an integration instead of a data egress decision. Capsule reads existing systems where they already are. Raw operational data does not leave the environment.</blockquote>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Connector Lane",
    lead: "How LLM Capsule reads the document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.",
    category: "GLOSSARY",
    definitionLabel: "Definition",
    definitionBody: "The connector lane describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is not a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.",
    bodyHtml: BODY_HTML,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  ko: {
    backLabel: "← 용어 사전",
    backHref: "/resources/glossary",
    term: "커넥터 레인",
    lead: "LLM Capsule이 고객 환경 내에 이미 존재하는 문서, 티켓, 운영 소스를 읽는 방식 — 원본 데이터는 절대 해당 환경 밖으로 나가지 않습니다.",
    category: "GLOSSARY",
    definitionLabel: "정의",
    definitionBody: "커넥터 레인은 고객 환경(온프레미스, 망분리, 또는 VPC) 내부에서 실행되는 LLM Capsule이 해당 환경에 이미 존재하는 문서, 티켓, 운영 시스템을 읽는 방식을 설명합니다. 외부에서 고객 시스템을 호출하는 SaaS 통합 플랫폼이 아닙니다. API 마켓플레이스도 아닙니다.",
    bodyHtml: `<h2>커넥터 레인이란 — 그리고 아닌 것</h2>

<p>커넥터 레인은 환경 내부의 읽기 접점입니다. Capsule은 고객 네트워크 위에서 기존 시스템 옆에 위치하여, 문서나 레코드가 있는 그 자리에서 직접 읽고, 로컬에서 캡슐화한 뒤, 복원된 결과물을 원래 워크플로우로 반환합니다. 원본 운영 데이터는 Capsule에 도달하기 위해 공용 네트워크나 외부 SaaS 엔드포인트를 통과하지 않습니다.</p>

<p>이는 일반적인 "통합 플랫폼"과 정반대입니다. Capsule은 고객 시스템에서 데이터를 꺼내는 외부 서비스가 아닙니다 — 해당 시스템들이 이미 신뢰하는 환경 내부에서 실행되는 레이어입니다.</p>

<h2>읽는 대상</h2>

<ul>
<li><strong>문서 및 레코드 시스템</strong> — SharePoint, 내부 DMS, 고객 VPC의 S3 / blob 스토리지, 파일 저장소</li>
<li><strong>티켓 및 ITSM 시스템</strong> — ServiceNow, Jira, Remedy, 사내 티켓 시스템</li>
<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, 사내 시스템</li>
<li><strong>의료 기록</strong> — 병원 정보 시스템, 임상 기록 저장소, 영상 메타데이터 — 모두 병원 네트워크 내부에서 읽습니다</li>
<li><strong>운영 시스템</strong> — NOC 콘솔, OSS / BSS, OT 히스토리안, DMZ에서 읽고 환경 내에서 처리하는 로그 플랫폼</li>
<li><strong>커스텀 및 레거시 시스템</strong> — 내부 데이터베이스, 파일 드롭, 큐, 사내 도구 — Capsule은 고객이 이미 운영 중인 환경에 맞게 적응합니다</li>
</ul>

<h2>이 구분이 중요한 이유</h2>

<p>규제 산업의 구매자 — 국방, 의료, 금융, 통신 — 에게 "통합"은 보통 "데이터가 벤더에 도달하기 위해 내 환경을 벗어난다"는 의미입니다. 그것이 바로 운영 데이터에 대한 AI 도입을 막는 실패 패턴입니다. 커넥터 레인은 정반대의 계약입니다. Capsule이 데이터가 있는 곳으로 갑니다. 데이터는 Capsule을 향해 이동하지 않습니다.</p>

<h2>통합 인터페이스 — 기존 시스템이 Capsule을 호출하는 방법</h2>

<p>Capsule이 환경 내부에 배포되면, 기존 시스템은 각자의 스택에 맞는 인터페이스를 통해 호출합니다.</p>

<ul>
<li><strong>REST / gRPC</strong> — 환경 내부의 최신 운영 도구, RAG 파이프라인, 커스텀 오케스트레이터용</li>
<li><strong>JDBC / ODBC</strong> — Capsule 호출을 저장 프로시저나 작업 단계로 필요로 하는 레거시 데이터베이스(Oracle, MSSQL, DB2)용</li>
<li><strong>Graph API</strong> — 문서 이벤트가 Capsule 처리를 트리거하는 DMS / ECM 시스템(SharePoint 등)용</li>
<li><strong>Webhook / log tap</strong> — NOC, 티켓, OT, SIEM 인접 시스템의 인시던트 및 이벤트 기반 워크플로우용</li>
<li><strong>On-prem API</strong> — Capsule의 자체 온프레미스 호출 접점 — 망분리, 하이브리드, VPC 구성 모두 동일한 계약</li>
<li><strong>Embedded SDK</strong> — 자사 제품 내에 Capsule을 내장하는 ISV 및 플랫폼 벤더를 위한 라이브러리 수준 통합</li>
<li><strong>Slack App</strong> — Slack을 운영 UI로 사용하는 팀용 — 런타임은 고객 환경에 그대로 유지되며, Slack App이 호출 접점이 됩니다</li>
</ul>

<p>이 모든 인터페이스는 고객 네트워크 내부에 머무릅니다. 원본 운영 데이터를 외부 SaaS 엔드포인트를 통해 Capsule로 라우팅하는 인터페이스는 하나도 없습니다.</p>

<h2>참조 문장</h2>

<blockquote><p>커넥터 레인은 규제 환경의 AI 배포를 데이터 유출 결정이 아닌 통합 결정으로 만드는 요소입니다. Capsule은 기존 시스템이 있는 그 자리에서 읽습니다. 원본 운영 데이터는 절대 환경 밖으로 나가지 않습니다.</p></blockquote>

---`,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  de: {
    backLabel: "← Glossar",
    backHref: "/resources/glossary",
    term: "Connector Lane",
    lead: "LLM Capsule liest Dokumente, Tickets und operative Datenquellen direkt in der Kundenumgebung — On-Premise, Air-Gapped oder in der VPC. Rohdaten verlassen die Umgebung zu keinem Zeitpunkt.",
    category: "GLOSSAR",
    definitionLabel: "Definition",
    definitionBody: "Der Connector Lane beschreibt, wie LLM Capsule — betrieben innerhalb der Kundenumgebung (On-Premise, Air-Gapped oder VPC) — auf die dort bereits vorhandenen Dokument-, Ticket- und operativen Systeme zugreift. LLM Capsule ist keine externe SaaS-Integrationsplattform und kein API-Marktplatz, der von außen auf Kundensysteme zugreift.",
    bodyHtml: `<h2>Was der Connector Lane ist — und was er nicht ist</h2>

<p>Der Connector Lane ist die lesende Schicht innerhalb der Kundenumgebung. LLM Capsule wird neben den bestehenden Systemen im Kundennetzwerk betrieben, liest Dokumente und Datensätze an ihrem vorhandenen Speicherort, kapsuliert sie lokal und gibt die wiederhergestellte Ausgabe an den ursprünglichen Workflow zurück. Operative Rohdaten durchqueren zu keinem Zeitpunkt ein öffentliches Netzwerk oder einen externen SaaS-Endpunkt.</p>

<p>Das ist das Gegenteil einer typischen Integrationsplattform. LLM Capsule ist kein externer Dienst, der Daten aus Kundensystemen herauszieht — sondern eine Schicht, die innerhalb der Umgebung läuft, der diese Systeme bereits vertrauen.</p>

<h2>Welche Systeme der Connector Lane liest</h2>

<ul>
<li><strong>Dokument- und Datensatzsysteme</strong> — SharePoint, internes DMS, S3 / Blob-Speicher in der VPC des Kunden, Dateiablagen</li>
<li><strong>Ticket- und ITSM-Systeme</strong> — ServiceNow, Jira, Remedy, interne Ticketlösungen</li>
<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, interne Systeme</li>
<li><strong>Patientendaten im Gesundheitswesen</strong> — Krankenhausinformationssysteme, klinische Datenspeicher, Bildgebungsmetadaten — alles innerhalb des Krankenhausnetzwerks verarbeitet</li>
<li><strong>Operative Systeme</strong> — NOC-Konsolen, OSS / BSS, OT-Prozessdatenarchive, Protokollplattformen in der DMZ, Verarbeitung in der Umgebung</li>
<li><strong>Individual- und Altsysteme</strong> — interne Datenbanken, Dateiablagen, Warteschlangen, eigenentwickelte Werkzeuge — LLM Capsule passt sich der bestehenden Systemlandschaft des Kunden an</li>
</ul>

<h2>Warum diese Unterscheidung entscheidend ist</h2>

<p>Für regulierte Abnehmer — Verteidigung, Gesundheitswesen, Finanzwesen, Telekommunikation — bedeutet „Integration" häufig: Daten verlassen die eigene Umgebung, um einen Anbieter zu erreichen. Genau das blockiert den KI-Einsatz auf operativen Daten. Der Connector Lane kehrt dieses Verhältnis um: LLM Capsule kommt zu den Daten — die Daten gehen nicht zu LLM Capsule.</p>

<h2>Integrationsschnittstellen — wie bestehende Systeme LLM Capsule aufrufen</h2>

<p>Nach der Bereitstellung in der Umgebung rufen bestehende Systeme LLM Capsule über die jeweils passende Schnittstelle auf:</p>

<ul>
<li><strong>REST / gRPC</strong> — für moderne Betriebswerkzeuge, RAG-Pipelines und individuelle Orchestratoren innerhalb der Umgebung</li>
<li><strong>JDBC / ODBC</strong> — für Legacy-Datenbanksysteme (Oracle, MSSQL, DB2), die LLM Capsule als Stored Procedure oder Job-Schritt einbinden</li>
<li><strong>Graph API</strong> — für DMS- / ECM-Systeme (SharePoint u. a.), bei denen Dokumentereignisse die Verarbeitung durch LLM Capsule auslösen</li>
<li><strong>Webhook / Log Tap</strong> — für ereignisgesteuerte Workflows aus NOC-, Ticket-, OT- und SIEM-nahen Systemen</li>
<li><strong>On-Prem API</strong> — die eigene aufrufbare Oberfläche von LLM Capsule; einheitliches Vertragsmodell für Air-Gapped-, Hybrid- und VPC-Umgebungen</li>
<li><strong>Embedded SDK</strong> — Bibliotheksintegration für ISVs und Plattformanbieter, die LLM Capsule in ihr eigenes Produkt einbetten</li>
<li><strong>Slack App</strong> — für Teams, die Slack als Betriebsoberfläche nutzen; die Laufzeit verbleibt in der Kundenumgebung, die Slack App dient als Aufrufoberfläche</li>
</ul>

<p>Alle diese Schnittstellen verbleiben im Kundennetzwerk. Keine von ihnen leitet operative Rohdaten über einen externen SaaS-Endpunkt weiter.</p>

<h2>Kernaussage</h2>

<p>Der Connector Lane macht den regulierten KI-Einsatz zu einer Integrationsentscheidung — nicht zu einer Frage des Datenabflusses. LLM Capsule liest bestehende Systeme dort, wo sie sich befinden. Operative Rohdaten verlassen die Umgebung nicht.</p>`,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
}

export default function ConnectorLane({
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

addPropertyControls(ConnectorLane, {
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
