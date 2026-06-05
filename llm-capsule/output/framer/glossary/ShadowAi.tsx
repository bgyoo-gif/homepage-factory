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

const BODY_HTML = `<h2>Why it emerges</h2>
<p>Shadow AI is a symptom, not a cause. The underlying pattern:</p>
<ol>
<li>An enterprise pilots AI on synthetic data. Employees see significant productivity gains.</li>
<li>The pilot stalls in security review because real production data cannot be sent to external LLMs.</li>
<li>The pilot is rescoped to an unusable subset. Productivity gains evaporate.</li>
<li>Employees who tasted the productivity find workarounds — copy/paste anonymized snippets into ChatGPT on personal devices, screenshot redacted documents, use unapproved AI plugins.</li>
<li>The enterprise now has the worst of both worlds: AI productivity outside governance, and no production AI inside governance.</li>
</ol>

<h2>The structural fix</h2>
<p>Shadow AI does not get solved by policy enforcement alone — that is treating the symptom. The structural fix is an <strong>context-preserving data layer for AI</strong> that lets official tooling handle real production data: encapsulate locally, process via approved external LLM (Path A) or on-prem local model (Path B), restore in-place. Once official tooling gives employees what they were tasting in pilots, shadow usage falls.</p>

<h2>Where it shows up</h2>
<ul>
<li><strong>Telecom NOC analysts</strong> pasting anonymized ticket excerpts into ChatGPT for RCA help.</li>
<li><strong>Hospital clinicians</strong> using AI tools on personal devices for documentation drafts.</li>
<li><strong>Insurance underwriters</strong> testing AI outputs on de-identified claim summaries.</li>
<li><strong>Legal associates</strong> summarizing redacted contracts with consumer AI tools.</li>
<li><strong>Engineers</strong> using consumer AI tools on internal docs that contain sensitive identifiers.</li>
</ul>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Shadow AI",
    lead: "Employees using ChatGPT (or any external LLM) on personal devices or unapproved channels — because the official tooling can't handle the data the work depends on.",
    category: "Risk concept",
    definitionLabel: "Definition",
    definitionBody: "Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing context-preserving data layer for AI. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.",
    bodyHtml: BODY_HTML,
    related1Label: "Blocked AI workflow",
    related1Href: "/glossary/blocked-ai-workflow",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
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
    term: "Shadow AI",
    lead: "공식 도구가 업무에 필요한 데이터를 처리할 수 없기 때문에 — 직원들이 개인 기기나 비승인 채널에서 ChatGPT(또는 외부 LLM)를 사용합니다.",
    category: "리스크 개념",
    definitionLabel: "정의",
    definitionBody: "Shadow AI는 기업 직원이 승인된 채널 외부에서 외부 LLM을 무단으로 사용하는 행위입니다 — 주로 공식 AI 도구가 업무에 실제로 필요한 규제 데이터를 처리할 수 없기 때문입니다. 근본 원인은 직원의 일탈이 아닙니다. 데이터 레이어의 부재입니다. 직원들은 파일럿과 초기 데모에서 생산성을 경험하고, 운영 도구가 이를 제공하지 못하면 통제를 우회합니다.",
    bodyHtml: `<h2>발생 원인</h2>

<p>Shadow AI는 원인이 아니라 증상입니다. 근본적인 패턴은 다음과 같습니다.</p>

<ol>
<li>기업이 합성 데이터로 AI 파일럿을 진행합니다. 직원들은 상당한 생산성 향상을 경험합니다.</li>
<li>실제 운영 데이터를 외부 LLM으로 전송할 수 없어 보안 검토 단계에서 파일럿이 중단됩니다.</li>
<li>파일럿 범위가 사용 불가능한 수준으로 축소됩니다. 생산성 향상은 사라집니다.</li>
<li>생산성을 경험한 직원들이 우회책을 찾습니다 — 개인 기기에서 ChatGPT에 익명화된 스니펫을 복사·붙여넣기하거나, 삭제 처리된 문서를 캡처하거나, 비승인 AI 플러그인을 사용합니다.</li>
<li>기업은 최악의 상황에 놓입니다. AI 생산성은 거버넌스 밖에서 이루어지고, 거버넌스 안에서는 운영 AI가 전혀 없습니다.</li>
</ol>

<h2>구조적 해결책</h2>

<p>Shadow AI는 정책 강화만으로는 해결되지 않습니다 — 그것은 증상을 치료하는 것입니다. 구조적 해결책은 공식 도구가 실제 운영 데이터를 처리할 수 있도록 하는 <strong>데이터 레이어</strong>입니다. 로컬에서 캡슐화하고, 승인된 외부 LLM(Path A) 또는 온프레미스 로컬 모델(Path B)을 통해 처리한 뒤, 원위치에 복원합니다. 공식 도구가 파일럿에서 경험한 것을 제공하면 Shadow AI 사용은 줄어듭니다.</p>

<h2>발생 사례</h2>

<ul>
<li><strong>통신사 NOC 분석가</strong>가 RCA 지원을 위해 익명화된 티켓 내용을 ChatGPT에 붙여넣습니다.</li>
<li><strong>병원 임상의</strong>가 개인 기기에서 AI 도구를 이용해 문서 초안을 작성합니다.</li>
<li><strong>보험 언더라이터</strong>가 비식별화된 청구 요약본으로 AI 출력을 테스트합니다.</li>
<li><strong>법률 어소시에이트</strong>가 컨슈머 AI 도구로 삭제 처리된 계약서를 요약합니다.</li>
<li><strong>엔지니어</strong>가 민감한 식별자가 포함된 내부 문서에 컨슈머 AI 도구를 사용합니다.</li>
</ul>

<h2>관련 용어</h2>

<ul>
<li><a href="/glossary/blocked-ai-workflow">차단된 AI 워크플로우</a></li>
<li><a href="/glossary/context-preserving-data-layer">데이터 레이어</a></li>
<li><a href="/learn/pilot-to-production-enterprise-ai">Learn: 기업 AI 파일럿이 중단되는 이유</a></li>
</ul>`,
    related1Label: "Blocked AI workflow",
    related1Href: "/glossary/blocked-ai-workflow",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
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
    term: "Shadow AI",
    lead: "Mitarbeitende nutzen ChatGPT oder andere externe LLMs auf Privatgeräten und nicht genehmigten Kanälen. Der Grund: Die offiziellen KI-Werkzeuge können die für die Arbeit notwendigen Daten nicht verarbeiten.",
    category: "Risikokonzept",
    definitionLabel: "Definition",
    definitionBody: "Shadow AI bezeichnet die nicht autorisierte Nutzung externer LLMs durch Unternehmensmitarbeitende außerhalb genehmigter Kanäle. Die eigentliche Ursache liegt nicht im Fehlverhalten der Mitarbeitenden, sondern im Fehlen eines context-preserving data layer for AI: Offizielle KI-Werkzeuge können die regulierten Daten, auf die Arbeitsprozesse tatsächlich angewiesen sind, nicht verarbeiten. Mitarbeitende, die in Pilotprojekten Produktivitätsgewinne erlebt haben, suchen nach Wegen, die Einschränkungen zu umgehen, sobald die Produktivsysteme diese Gewinne nicht einlösen.",
    bodyHtml: `<h2>Entstehungsursachen</h2>

<p>Shadow AI ist ein Symptom, keine Ursache. Das typische Muster:</p>

<ol>
<li>Ein Unternehmen pilotiert KI mit synthetischen Daten. Mitarbeitende erleben messbare Produktivitätssteigerungen.</li>
<li>Der Pilotbetrieb gerät in der Sicherheitsprüfung ins Stocken, weil echte Produktionsdaten nicht an externe LLMs übermittelt werden dürfen.</li>
<li>Der Pilotbetrieb wird auf eine kaum verwendbare Datenteilmenge beschränkt. Die Produktivitätsgewinne entfallen.</li>
<li>Mitarbeitende, die die Produktivitätssteigerung bereits erlebt haben, suchen nach Alternativen: Sie verarbeiten anonymisierte Ausschnitte via ChatGPT auf Privatgeräten, fotografieren geschwärzte Dokumente ab oder setzen nicht genehmigte KI-Plugins ein.</li>
<li>Das Unternehmen vereint das Schlechteste beider Welten: KI-Produktivität außerhalb der Governance und kein produktiver KI-Einsatz innerhalb der Governance.</li>
</ol>

<h2>Die strukturelle Lösung</h2>

<p>Shadow AI lässt sich nicht allein durch Richtliniendurchsetzung beheben — das behandelt nur das Symptom. Die strukturelle Lösung ist ein <strong>context-preserving data layer for AI</strong>, der offizielle Werkzeuge befähigt, mit echten Produktionsdaten zu arbeiten: lokale Kapsulierung, Verarbeitung über ein zugelassenes externes LLM (Pfad A) oder ein lokales On-Premise-Modell (Pfad B), anschließend Wiederherstellung am ursprünglichen Ort. Sobald offizielle Werkzeuge das liefern, was Mitarbeitende in Pilotprojekten erlebt haben, sinkt die Shadow-Nutzung.</p>

<h2>Typische Auftrittsbereiche</h2>

<ul>
<li><strong>Telekommunikations-NOC-Analysten</strong> fügen anonymisierte Ticket-Ausschnitte zur RCA-Unterstützung in ChatGPT ein.</li>
<li><strong>Klinisches Personal in Krankenhäusern</strong> nutzt KI-Werkzeuge auf Privatgeräten zur Dokumentationserstellung.</li>
<li><strong>Underwriter</strong> testen KI-Ausgaben auf de-identifizierten Schadenmeldungen.</li>
<li><strong>Angestellte Rechtsanwälte</strong> fassen geschwärzte Verträge mit öffentlich zugänglichen KI-Diensten zusammen.</li>
<li><strong>Ingenieure</strong> verwenden frei verfügbare KI-Werkzeuge auf internen Dokumenten mit sensiblen Kennzeichnern.</li>
</ul>

<h2>Verwandte Begriffe</h2>

<ul>
<li>Blockierter KI-Workflow</li>
<li>context-preserving data layer for AI</li>
<li>Learn: Warum KI-Pilotprojekte in Unternehmen ins Stocken geraten</li>
</ul>`,
    related1Label: "Blocked AI workflow",
    related1Href: "/glossary/blocked-ai-workflow",
    related2Label: "context-preserving data layer for AI",
    related2Href: "/glossary/context-preserving-data-layer",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
}

export default function ShadowAi({
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

addPropertyControls(ShadowAi, {
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
