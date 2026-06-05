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
<p>The context-preserving data layer for AI supports <strong>two execution paths</strong> for the model step inside the workflow:</p>
<ul>
  <li><strong>Path A — external approved LLM with capsule data only.</strong> The capsule is transmitted to an approved external endpoint (ChatGPT, Claude, Gemini, Perplexity, or any LLM API). Raw operational data does not leave the enterprise.</li>
  <li><strong>Path B — on-prem local lightweight model.</strong> A small private model runs entirely inside the enterprise environment. Zero external transmission.</li>
</ul>

<h2>When to use each</h2>
<table class="compare-table">
  <thead><tr><th>Factor</th><th>Path A</th><th class="us">Path B</th></tr></thead>
  <tbody>
    <tr><td>External transmission allowed</td><td>Yes (capsule only)</td><td class="us-cell">No</td></tr>
    <tr><td>Air-gapped network</td><td>—</td><td class="us-cell">Required</td></tr>
    <tr><td>Frontier model capability</td><td>Yes</td><td class="us-cell">Bounded by local model</td></tr>
    <tr><td>Compliance posture</td><td>"No raw data exposure"</td><td class="us-cell">"Zero external exposure"</td></tr>
  </tbody>
</table>

<h2>Path selection</h2>
<p>Policy-driven per workflow. Different workflows in the same enterprise can use different paths. Governance records the path applied per request, per workflow, per policy.</p>

<h2>Why two and not one</h2>
<p>A single path forces a single regulatory floor. Carriers, hospitals, OT operators, and defense contractors typically run multiple regulatory profiles within the same organization. Two paths let governance match the path to the workflow.</p>

<h2>Reference statement</h2>
<blockquote>The model is not a single decision; it is two paths under a single governance. That is what makes the context-preserving data layer for AI fit regulated organizations without forcing them to one regulatory floor.</blockquote>

<h2>Related</h2>
<ul>
  <li><a href="/resources/learn/on-prem-llm-execution-path">Pillar guide: On-prem LLM execution path</a></li>
  <li><a href="/resources/glossary/state-vault-for-restoration">State vault for restoration</a></li>
  <li><a href="/resources/glossary/ai-ready-operational-layer">context-preserving data layer for AI</a></li>
</ul>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Two Execution Paths",
    lead: "External approved LLM — or on-prem local lightweight model. Policy decides per workflow.",
    category: "GLOSSARY",
    definitionLabel: "Definition",
    definitionBody: "The context-preserving data layer for AI supports two execution paths for the model step inside the workflow:",
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
    term: "두 가지 실행 경로",
    lead: "외부 승인 LLM — 또는 온프레미스 로컬 경량 모델. 워크플로우별로 정책이 결정합니다.",
    category: "GLOSSARY",
    definitionLabel: "정의",
    definitionBody: "데이터 레이어가 지원하는 두 가지 실행 경로입니다. Path A는 원본 운영 데이터 노출 없이 캡슐 데이터를 외부 승인 LLM으로 전송합니다. Path B는 소규모 전용 경량 모델을 기업 환경 내부에서 완전히 실행하며 외부 전송이 전혀 없습니다. 경로 선택은 워크플로우별 정책으로 결정됩니다.",
    bodyHtml: `<h2>정의</h2>

<p>데이터 레이어는 워크플로우 내 모델 단계에서 <strong>두 가지 실행 경로</strong>를 지원합니다:</p>

<ul>
<li><strong>Path A — 캡슐 데이터만으로 외부 승인 LLM 사용.</strong> 캡슐이 승인된 외부 엔드포인트(ChatGPT, Claude, Gemini, Perplexity 또는 임의의 LLM API)로 전송됩니다. 원본 운영 데이터는 기업 외부로 나가지 않습니다.</li>
<li><strong>Path B — 온프레미스 로컬 경량 모델.</strong> 소규모 전용 모델이 기업 환경 내부에서 완전히 실행됩니다. 외부 전송은 전혀 없습니다.</li>
</ul>

<h2>경로별 사용 기준</h2>

<table>
<thead><tr><th>항목</th><th>Path A</th><th>Path B</th></tr></thead>
<tbody>
<tr><td>외부 전송 허용</td><td>예 (캡슐만)</td><td>아니오</td></tr>
<tr><td>망분리 네트워크</td><td>—</td><td>필수</td></tr>
<tr><td>최신 모델 성능</td><td>예</td><td>로컬 모델 성능에 한정</td></tr>
<tr><td>규제 대응 수준</td><td>"원본 데이터 노출 없음"</td><td>"Zero external exposure"</td></tr>
</tbody>
</table>

<h2>경로 선택</h2>

<p>워크플로우별 정책으로 결정됩니다. 동일 기업 내 서로 다른 워크플로우가 각각 다른 경로를 사용할 수 있습니다. 거버넌스는 요청별·워크플로우별·정책별로 적용된 경로를 기록합니다.</p>

<h2>왜 하나가 아닌 두 가지인가</h2>

<p>단일 경로는 단일 규제 기준을 강제합니다. 통신사·병원·OT 운영사·방산 업체는 동일 조직 내에서 여러 규제 프로파일을 동시에 운용하는 경우가 많습니다. 두 가지 경로가 있어야 거버넌스가 워크플로우에 맞는 경로를 적용할 수 있습니다.</p>

<h2>참조 문장</h2>

<blockquote>모델은 단일 결정이 아닙니다. 단일 거버넌스 아래 놓인 두 가지 경로입니다. 규제 대상 조직이 하나의 규제 기준에 묶이지 않고 데이터 레이어를 도입할 수 있는 이유가 바로 이것입니다.</blockquote>`,
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
    term: "Zwei Ausführungspfade",
    lead: "Externes zugelassenes LLM oder lokales On-Premise-Leichtgewichtsmodell. Welcher Pfad zum Einsatz kommt, legt die Richtlinie je Workflow fest.",
    category: "GLOSSAR",
    definitionLabel: "Definition",
    definitionBody: "Die context-preserving data layer for AI unterstützt zwei Ausführungspfade. Pfad A übermittelt ausschließlich Capsule-Daten an ein externes, zugelassenes LLM — operative Rohdaten verlassen das Unternehmen nicht. Pfad B führt ein kompaktes privates Modell vollständig innerhalb der eigenen Unternehmensumgebung aus, ohne jegliche externe Datenübertragung. Die Pfadauswahl erfolgt richtliniengesteuert je Workflow.",
    bodyHtml: `<h2>Definition</h2>

<p>Die context-preserving data layer for AI unterstützt <strong>zwei Ausführungspfade</strong> für den Modellschritt im Workflow:</p>

<ul>
<li><strong>Pfad A — externes zugelassenes LLM, ausschließlich mit Capsule-Daten.</strong> Die Kapsel wird an einen zugelassenen externen Endpunkt übermittelt (ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM API). Operative Rohdaten verlassen das Unternehmen nicht.</li>
<li><strong>Pfad B — lokales On-Premise-Leichtgewichtsmodell.</strong> Ein kompaktes privates Modell wird vollständig innerhalb der Unternehmensumgebung ausgeführt. Keine externe Datenübertragung.</li>
</ul>

<h2>Einsatzkriterien</h2>

<table>
<thead><tr><th>Kriterium</th><th>Pfad A</th><th>Pfad B</th></tr></thead>
<tbody>
<tr><td>Externe Übertragung zulässig</td><td>Ja (nur Kapsel)</td><td>Nein</td></tr>
<tr><td>Air-Gapped-Netzwerk</td><td>—</td><td>Erforderlich</td></tr>
<tr><td>Frontier-Modell-Kapazität</td><td>Ja</td><td>Durch lokales Modell begrenzt</td></tr>
<tr><td>Compliance-Profil</td><td>„Keine Rohdaten-Offenlegung"</td><td>„Zero Exposure"</td></tr>
</tbody>
</table>

<h2>Pfadauswahl</h2>

<p>Die Auswahl erfolgt richtliniengesteuert je Workflow. Verschiedene Workflows desselben Unternehmens können unterschiedliche Pfade verwenden. Das Governance-System protokolliert den angewendeten Pfad je Anfrage, je Workflow und je Richtlinie.</p>

<h2>Warum zwei Pfade notwendig sind</h2>

<p>Ein einzelner Pfad erzwingt eine einheitliche regulatorische Mindestanforderung. Versicherungsträger, Krankenhäuser, OT-Betreiber und Rüstungsunternehmen verwalten innerhalb derselben Organisation typischerweise mehrere regulatorische Profile. Zwei Pfade ermöglichen es dem Governance-System, den jeweils passenden Pfad dem entsprechenden Workflow zuzuweisen.</p>

<h2>Leitsatz</h2>

<p>Das Modell ist keine einheitliche Entscheidung — es sind zwei Pfade unter einer gemeinsamen Governance. Das ist es, was die context-preserving data layer for AI für regulierte Organisationen geeignet macht, ohne sie auf eine einzige regulatorische Ebene festzulegen.</p>`,
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

export default function TwoExecutionPaths({
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

addPropertyControls(TwoExecutionPaths, {
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
