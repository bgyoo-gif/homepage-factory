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

const BODY_HTML = `<h2>Why it matters now</h2>
<p>Regulator pressure has tightened: GDPR fines have crossed €4 billion cumulative, the EU AI Act entered into force August 2024, and national regulators (BaFin, ACPR, MAS, FSA, KISA) are increasingly explicit that financial and healthcare AI workflows must demonstrate data sovereignty. Defense and public sector workflows have always required it.</p>

<h2>What sovereign AI actually requires</h2>
<ul>
<li><strong>Data residency</strong> — sensitive data does not leave the defined geographic / regulatory boundary in raw form.</li>
<li><strong>Processing boundary</strong> — AI inference happens on infrastructure inside (or contractually equivalent to) the boundary.</li>
<li><strong>Audit chain of custody</strong> — every data event is recorded with policy, model, and outcome.</li>
<li><strong>Policy versioning</strong> — what counts as sensitive, and what's permitted to leave, must be explicitly versioned and auditable.</li>
</ul>

<h2>The two-path architecture</h2>
<p>The pragmatic implementation: a context-preserving data layer for AI with two execution paths under one governance framework. Path A (in-region external LLM with capsule data only) for workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards. Path B (on-prem local lightweight model) for workflows where any external endpoint is unacceptable. Path is policy-driven per workflow.</p>

<h2>Common confusions</h2>
<ul>
<li><strong>Data residency ≠ sovereignty.</strong> An EU-hosted LLM endpoint is necessary but not sufficient. Raw data inside an EU-hosted LLM is still raw data.</li>
<li><strong>Sovereign AI ≠ no LLM.</strong> Avoiding LLMs entirely is not a sovereign AI strategy; it's an avoidance strategy. Sovereign AI architecture lets you use AI under sovereignty constraints.</li>
<li><strong>Sovereign AI ≠ binary.</strong> A single enterprise can support multiple paths. Some workflows external (with capsule), some on-prem.</li>
</ul>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Sovereign AI",
    lead: "AI workflows that keep data, processing, and audit inside a defined regulatory and geographic boundary.",
    category: "Concept",
    definitionLabel: "Definition",
    definitionBody: "Sovereign AI means enterprise AI workflows where the underlying data, the AI processing path, and the audit trail all remain inside a defined regulatory and geographic boundary. For European enterprises this typically means GDPR-compliant data handling, in-region LLM endpoints, and full audit for regulator review. For defense and public sector workflows it typically means fully on-prem execution with no external transmission. The practical architecture pattern uses a context-preserving data layer for AI with two execution paths.",
    bodyHtml: BODY_HTML,
    related1Label: "Two execution paths",
    related1Href: "/glossary/two-execution-paths",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  ko: {
    backLabel: "← 용어 사전",
    backHref: "/resources/glossary",
    term: "Sovereign AI",
    lead: "데이터, 처리, 감사 이력 모두를 규정된 규제·지리적 경계 안에 유지하는 AI 워크플로우입니다.",
    category: "개념",
    definitionLabel: "정의",
    definitionBody: "Sovereign AI란 기반 데이터, AI 처리 경로, 감사 이력이 모두 규정된 규제·지리적 경계 안에 유지되는 기업 AI 워크플로우를 의미합니다. 유럽 기업의 경우 일반적으로 GDPR 준수 데이터 처리, 역내 LLM 엔드포인트, 규제 기관 검토를 위한 완전한 감사 이력을 갖춰야 합니다. 국방·공공 부문 워크플로우의 경우 외부 전송 없이 완전한 온프레미스 실행이 기본입니다. 실용적인 아키텍처 패턴은 두 가지 실행 경로를 갖춘 데이터 레이어를 사용합니다.",
    bodyHtml: `<!-- bodyHtml — HTML 태그 유지, 텍스트만 번역 -->

<h2>지금 중요한 이유</h2>

<p>규제 압박이 강화되고 있습니다. GDPR 누적 과징금은 €40억을 넘어섰고, EU AI Act는 2024년 8월 발효됐습니다. BaFin, ACPR, MAS, FSA, KISA 등 각국 규제 당국은 금융·의료 AI 워크플로우에서 데이터 주권 준수를 명시적으로 요구하고 있습니다. 국방·공공 부문 워크플로우는 처음부터 이를 요구해왔습니다.</p>

<h2>Sovereign AI가 실제로 요구하는 것</h2>

<ul>
<li><strong>데이터 레지던시</strong> — 민감 데이터는 원시 형태로 정의된 지리적·규제적 경계를 벗어나지 않습니다.</li>
<li><strong>처리 경계</strong> — AI 추론은 경계 내부(또는 계약상 동등한) 인프라에서 실행됩니다.</li>
<li><strong>감사 이력 연속성</strong> — 모든 데이터 이벤트는 정책, 모델, 결과와 함께 기록됩니다.</li>
<li><strong>정책 버전 관리</strong> — 무엇이 민감 데이터이며 외부 전송이 허용되는지를 명시적으로 버전화하고 감사 가능하게 관리해야 합니다.</li>
</ul>

<h2>두 가지 실행 경로 아키텍처</h2>

<p>실용적인 구현 방식은 하나의 거버넌스 프레임워크 아래 두 가지 실행 경로를 갖춘 데이터 레이어입니다. Path A(역내 외부 LLM + 캡슐 데이터 전용)는 차등 프라이버시 캡슐 전송이 적절한 계약적 보호 장치와 함께 규제 프로필상 허용되는 워크플로우에 사용합니다. Path B(온프레미스 경량 로컬 모델)는 외부 엔드포인트가 일절 허용되지 않는 워크플로우에 사용합니다. 경로는 워크플로우별로 정책에 따라 결정됩니다.</p>

<h2>흔한 오해</h2>

<ul>
<li><strong>데이터 레지던시 ≠ 데이터 주권.</strong> EU 내 LLM 엔드포인트는 필요 조건이지만 충분 조건이 아닙니다. EU 내 LLM에 들어간 원시 데이터는 여전히 원시 데이터입니다.</li>
<li><strong>Sovereign AI ≠ LLM 사용 금지.</strong> LLM 자체를 회피하는 것은 Sovereign AI 전략이 아니라 회피 전략입니다. Sovereign AI 아키텍처는 주권 제약 안에서 AI를 사용할 수 있도록 합니다.</li>
<li><strong>Sovereign AI ≠ 이분법.</strong> 하나의 기업이 여러 경로를 지원할 수 있습니다. 일부 워크플로우는 외부 경로(캡슐 사용), 일부는 온프레미스로 운영합니다.</li>
</ul>`,
    related1Label: "Two execution paths",
    related1Href: "/glossary/two-execution-paths",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  de: {
    backLabel: "← Glossar",
    backHref: "/resources/glossary",
    term: "Sovereign AI",
    lead: "KI-Workflows, die Daten, Verarbeitung und Auditpfad innerhalb einer definierten regulatorischen und geografischen Grenze halten.",
    category: "Konzept",
    definitionLabel: "Definition",
    definitionBody: "Sovereign AI bezeichnet KI-Workflows im Unternehmenseinsatz, bei denen die zugrundeliegenden Daten, der KI-Verarbeitungspfad und die Audit-Kette innerhalb einer definierten regulatorischen und geografischen Grenze verbleiben. Für europäische Unternehmen bedeutet dies in der Regel DSGVO (GDPR)-konforme Datenverarbeitung, LLM-Endpunkte in der jeweiligen Region sowie eine vollständige Auditierung für Aufsichtsbehörden. Im Verteidigungs- und öffentlichen Sektor erfordert dies typischerweise eine vollständig On-Premise-Ausführung ohne externe Datenübertragung. Das praktische Architekturmuster setzt einen context-preserving data layer for AI mit zwei Ausführungspfaden ein.",
    bodyHtml: `<h2>Aktuelle Relevanz</h2>

<p>Der regulatorische Druck hat zugenommen: DSGVO-Bußgelder haben die Marke von 4 Milliarden Euro kumulativ überschritten, der EU AI Act ist im August 2024 in Kraft getreten, und nationale Aufsichtsbehörden (BaFin, ACPR, MAS, FSA, KISA) verlangen zunehmend explizit, dass KI-Workflows im Finanz- und Gesundheitswesen Datensouveränität nachweisen. Im Verteidigungs- und öffentlichen Sektor war dies stets eine Grundvoraussetzung.</p>

<h2>Anforderungen an Sovereign AI</h2>

<ul>
<li><strong>Datenhaltung (Data Residency)</strong> — Sensible Daten verlassen die definierte geografische und regulatorische Grenze nicht in ungeschützter Form.</li>
<li><strong>Verarbeitungsgrenze</strong> — KI-Inferenz findet auf Infrastruktur innerhalb der Grenze statt (oder einer vertraglich gleichwertigen Umgebung).</li>
<li><strong>Lückenlose Audit-Kette</strong> — Jedes Datenereignis wird mit zugehöriger Richtlinie, Modell und Ergebnis protokolliert.</li>
<li><strong>Richtlinien-Versionierung</strong> — Was als sensibel gilt und was die Grenze verlassen darf, muss explizit versioniert und auditierbar sein.</li>
</ul>

<h2>Die Zwei-Pfad-Architektur</h2>

<p>Der praktische Implementierungsansatz: ein context-preserving data layer for AI mit zwei Ausführungspfaden unter einem gemeinsamen Governance-Rahmen. Path A (externer LLM in der jeweiligen Region, ausschließlich mit Capsule-Daten) für Workflows, bei denen das regulatorische Profil die Übertragung differentiell-privater Kapseln mit angemessenen Vertragsschutzmaßnahmen erlaubt. Path B (lokales Lightweight-Modell On-Premise) für Workflows, bei denen jeder externe Endpunkt ausgeschlossen ist. Die Pfadwahl erfolgt richtliniengesteuert pro Workflow.</p>

<h2>Häufige Missverständnisse</h2>

<ul>
<li><strong>Data Residency ≠ Souveränität.</strong> Ein in der EU gehosteter LLM-Endpunkt ist notwendig, aber nicht hinreichend. Rohdaten innerhalb eines EU-gehosteten LLM bleiben Rohdaten.</li>
<li><strong>Sovereign AI ≠ kein LLM.</strong> LLMs vollständig zu meiden ist keine Sovereign-AI-Strategie, sondern eine Ausweichstrategie. Eine Sovereign-AI-Architektur ermöglicht den KI-Einsatz innerhalb der Souveränitätsgrenzen.</li>
<li><strong>Sovereign AI ≠ binäre Entscheidung.</strong> Ein einzelnes Unternehmen kann mehrere Pfade unterstützen. Manche Workflows extern (mit Kapsel), andere On-Premise.</li>
</ul>`,
    related1Label: "Two execution paths",
    related1Href: "/glossary/two-execution-paths",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
    related3Label: "Differential privacy",
    related3Href: "/glossary/differential-privacy",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
}

export default function SovereignAi({
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

addPropertyControls(SovereignAi, {
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
