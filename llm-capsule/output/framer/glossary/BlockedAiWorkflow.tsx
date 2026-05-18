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
<p>A <strong>blocked AI workflow</strong> is a business process that would benefit from AI but cannot be deployed because the operational data involved cannot be sent to an LLM under the regulatory or sovereignty profile of the workflow. The blocking is operational and regulatory, not capability.</p>

<h2>Why it matters as a buying frame</h2>
<p>Most enterprise AI conversations start with capability ("can the model do X?"). For regulated operations, the binding constraint is rarely capability — it is the inability to bring the relevant operational data into the model. That is the blocked AI workflow. Naming it cleanly turns the buying conversation toward the layer that actually unblocks it.</p>

<h2>Common patterns</h2>
<ul>
  <li>NOC RCA workflows blocked because network logs cannot leave the regulated jurisdiction</li>
  <li>OT vulnerability triage blocked because asset references and plant zones cannot reach an external endpoint</li>
  <li>Clinical workflow assistance blocked because PHI plus operational pattern is not safely handled by PII filtering</li>
  <li>Mission summary drafting blocked because air-gapped environments forbid any external transmission</li>
  <li>Regulated finance review blocked because compliance posture forbids transmission of audit-trail content</li>
</ul>

<h2>From blocked workflow to operational AI</h2>
<p>The unblock pattern is consistent across industries:</p>
<ol>
  <li>Identify the operational data category that is blocking the workflow.</li>
  <li>Apply <a href="/resources/glossary/structure-preserving-encapsulation">structure-preserving encapsulation</a> with <a href="/resources/glossary/differential-privacy">differential-privacy-based protection</a>.</li>
  <li>Route through one of <a href="/resources/glossary/two-execution-paths">two execution paths</a> per policy.</li>
  <li>Restore via state vault back into the originating workflow.</li>
</ol>

<h2>Reference statement</h2>
<blockquote>Most enterprise AI projects do not fail at the model. They fail at the data the model cannot reach. Naming that as a blocked AI workflow — and unblocking it through an AI enablement data layer — is the entry point for regulated operations.</blockquote>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Blocked AI Workflow",
    lead: "The workflow exists. The data exists. The model exists. The integration is blocked because the data cannot leave.",
    category: "GLOSSARY",
    definitionLabel: "Definition",
    definitionBody: "A blocked AI workflow is a business process that would benefit from AI but cannot be deployed because the operational data involved cannot be sent to an LLM under the regulatory or sovereignty profile of the workflow. The blocking is operational and regulatory, not capability.",
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
    term: "차단된 AI 워크플로우",
    lead: "워크플로우도 있습니다. 데이터도 있습니다. 모델도 있습니다. 데이터가 외부로 나갈 수 없기 때문에 통합이 차단됩니다.",
    category: "GLOSSARY",
    definitionLabel: "정의",
    definitionBody: "차단된 AI 워크플로우란 AI를 활용하면 효과를 얻을 수 있지만, 관련 운영 데이터가 해당 워크플로우의 규제 또는 데이터 주권 프로파일상 LLM으로 전송될 수 없어 배포가 불가능한 비즈니스 프로세스입니다. 차단의 원인은 기능 부족이 아니라 운영·규제 제약입니다.",
    bodyHtml: `<h2>구매 프레임으로서의 중요성</h2>

<p>대부분의 기업 AI 대화는 기능 중심("모델이 X를 할 수 있는가?")으로 시작됩니다. 규제 환경의 운영에서 결정적 제약은 기능이 아닙니다 — 관련 운영 데이터를 모델에 투입할 수 없다는 것입니다. 그것이 바로 차단된 AI 워크플로우입니다. 이를 명확히 정의하면 구매 대화의 초점이 실제로 차단을 해제하는 레이어로 이동합니다.</p>

<h2>공통 패턴</h2>

<ul>
<li>네트워크 로그가 규제 관할권 밖으로 나갈 수 없어 차단된 NOC RCA 워크플로우</li>
<li>자산 참조 및 플랜트 구역 정보가 외부 엔드포인트에 도달할 수 없어 차단된 OT 취약점 분류</li>
<li>PHI와 운영 패턴이 PII 필터링으로 안전하게 처리되지 않아 차단된 임상 워크플로우 지원</li>
<li>망분리 환경이 모든 외부 전송을 금지하여 차단된 미션 요약 작성</li>
<li>컴플라이언스 정책상 감사 이력 콘텐츠 전송이 금지되어 차단된 규제 금융 검토</li>
</ul>

<h2>차단된 워크플로우에서 운영 AI로</h2>

<p>차단 해제 패턴은 산업 전반에 걸쳐 일관됩니다.</p>

<ul>
<li>워크플로우를 차단하는 운영 데이터 카테고리를 식별합니다.</li>
<li>문서 구조 보존 캡슐화와 차등 프라이버시 기반 보호를 적용합니다.</li>
<li>정책에 따라 두 가지 실행 경로 중 하나로 라우팅합니다.</li>
<li>state vault를 통해 원래 워크플로우로 복원합니다.</li>
</ul>

<h2>참조 문장</h2>

<blockquote><p>대부분의 기업 AI 프로젝트는 모델에서 실패하지 않습니다. 모델이 접근할 수 없는 데이터에서 실패합니다. 이를 차단된 AI 워크플로우로 정의하고 — 데이터 레이어를 통해 차단을 해제하는 것 — 이것이 규제 운영 환경의 진입점입니다.</p></blockquote>

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
    term: "Blockierter KI-Workflow",
    lead: "Der Prozess ist vorhanden, die Daten sind vorhanden, das Modell ist vorhanden. Die Integration scheitert daran, dass die operativen Daten die regulierte Umgebung nicht verlassen dürfen.",
    category: "GLOSSAR",
    definitionLabel: "Definition",
    definitionBody: "Ein blockierter KI-Workflow ist ein Geschäftsprozess, der vom KI-Einsatz profitieren würde, jedoch nicht produktiv betrieben werden kann, weil die betreffenden operativen Daten unter den regulatorischen Anforderungen oder Datensouveränitätsvorgaben des Workflows nicht an ein LLM übermittelt werden dürfen. Die Blockierung ist operativer und regulatorischer Natur — nicht technologischer.",
    bodyHtml: `<h2>Relevanz als Entscheidungsrahmen</h2>

<p>Die meisten KI-Gespräche in Unternehmen beginnen mit der Frage nach Fähigkeiten: Kann das Modell X? In regulierten Betrieben ist die eigentliche Einschränkung selten die Modellkompetenz — sie liegt darin, dass die relevanten operativen Daten das Modell nicht erreichen dürfen. Das ist der blockierte KI-Workflow. Wer dieses Problem präzise benennt, lenkt die Beschaffungsdiskussion auf die Schicht, die die Blockierung tatsächlich aufhebt.</p>

<h2>Typische Muster</h2>

<ul>
<li>NOC-RCA-Workflows blockiert, weil Netzwerkprotokolle die regulierte Jurisdiction nicht verlassen dürfen</li>
<li>OT-Schwachstellentriage blockiert, weil Asset-Referenzen und Anlagenbereiche keinen externen Endpunkt erreichen dürfen</li>
<li>Klinische Workflow-Unterstützung blockiert, weil PHI kombiniert mit operativen Mustern durch PII-Filterung allein nicht sicher verarbeitet werden kann</li>
<li>Erstellung von Missionszusammenfassungen blockiert, weil Air-Gapped-Umgebungen jede externe Übertragung untersagen</li>
<li>Regulierte Finanzprüfungen blockiert, weil die Compliance-Anforderungen die Übermittlung von Audit-Trail-Inhalten verbieten</li>
</ul>

<h2>Vom blockierten Workflow zum produktiven KI-Einsatz</h2>

<p>Das Muster zur Aufhebung der Blockierung ist branchenübergreifend konsistent:</p>

<ol>
<li>Die operative Datenkategorie identifizieren, die den Workflow blockiert.</li>
<li>Strukturerhaltende Kapsulierung mit Differential-Privacy-basiertem Schutz anwenden.</li>
<li>Entsprechend der Richtlinie über einen der zwei Ausführungspfade weiterleiten.</li>
<li>Über den State Vault in den ursprünglichen Workflow zurückführen.</li>
</ol>

<h2>Kernaussage</h2>

<p>Die meisten KI-Projekte in Unternehmen scheitern nicht am Modell. Sie scheitern an den Daten, die das Modell nicht erreichen kann. Dieses Problem als blockierten KI-Workflow zu benennen — und die Blockierung über einen AI enablement data layer aufzuheben — ist der Einstiegspunkt für regulierte Betriebe.</p>`,
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

export default function BlockedAiWorkflow({
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

addPropertyControls(BlockedAiWorkflow, {
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
