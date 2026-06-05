import { addPropertyControls, ControlType } from "framer"

import { useEffect, useState } from "react"
// GlossaryTermCard — CMS schema: Glossary { term, slug, definition }
interface Props {
  eyebrow?: string
  heading?: string
  subheading?: string
  // 11 glossary terms (CMS schema aligned)
  t1Term?: string
  t1Definition?: string
  t1Slug?: string
  t2Term?: string
  t2Definition?: string
  t2Slug?: string
  t3Term?: string
  t3Definition?: string
  t3Slug?: string
  t4Term?: string
  t4Definition?: string
  t4Slug?: string
  t5Term?: string
  t5Definition?: string
  t5Slug?: string
  t6Term?: string
  t6Definition?: string
  t6Slug?: string
  t7Term?: string
  t7Definition?: string
  t7Slug?: string
  t8Term?: string
  t8Definition?: string
  t8Slug?: string
  t9Term?: string
  t9Definition?: string
  t9Slug?: string
  t10Term?: string
  t10Definition?: string
  t10Slug?: string
  t11Term?: string
  t11Definition?: string
  t11Slug?: string
}

export default function Section05_GlossaryGrid({
  eyebrow = "Glossary",
  heading = "Category and architectural terms",
  subheading = "11 definitions for buyers, architects, and security teams. Each term with Schema.org DefinedTerm markup.",
  t1Term = "context-preserving data layer for AI",
  t1Definition = "The category. Architectural component between regulated systems and LLMs.",
  t1Slug = "/glossary/context-preserving-data-layer",
  t2Term = "AI-ready operational layer",
  t2Definition = "Operational data made AI-consumable while sensitive elements are protected.",
  t2Slug = "/glossary/ai-ready-operational-layer",
  t3Term = "Structure-preserving encapsulation",
  t3Definition = "Replacing sensitive elements while keeping document structure intact.",
  t3Slug = "/glossary/structure-preserving-encapsulation",
  t4Term = "Differential privacy",
  t4Definition = "Mathematical framework for privacy-preserving data transformation with bounded risk.",
  t4Slug = "/glossary/differential-privacy",
  t5Term = "Two execution paths",
  t5Definition = "Path A (external LLM with capsule) and Path B (on-prem local model) under one governance.",
  t5Slug = "/glossary/two-execution-paths",
  t6Term = "Operational data",
  t6Definition = "Workflow data — tickets, configs, clinical notes, claims — that real AI work runs on.",
  t6Slug = "/glossary/operational-data",
  t7Term = "Sovereign AI",
  t7Definition = "AI workflows where data, processing, and audit stay inside a defined boundary.",
  t7Slug = "/glossary/sovereign-ai",
  t8Term = "Shadow AI",
  t8Definition = "Unsanctioned external LLM use; symptom of missing context-preserving data layer for AI.",
  t8Slug = "/glossary/shadow-ai",
  t9Term = "Blocked AI workflow",
  t9Definition = "A workflow where AI value is real but data exposure rules block deployment.",
  t9Slug = "/glossary/blocked-ai-workflow",
  t10Term = "Connector lane",
  t10Definition = "How Capsule reads document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.",
  t10Slug = "/glossary/connector-lane",
  t11Term = "State vault for restoration",
  t11Definition = "Local key-value store mapping capsule tokens back to original values for restoration.",
  t11Slug = "/glossary/state-vault-for-restoration",
}: Props) {
  // Auto-detect Framer locale prefix from current URL (/de/, /ja/, /ko/, etc.)
  // SSG-safe: starts empty, populated after hydration.
  const [localePrefix, setLocalePrefix] = useState<string>("")
  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.location.pathname.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/|$)/)
    if (m) setLocalePrefix(`/${m[1]}`)
  }, [])

  const terms = [
    { term: t1Term, definition: t1Definition, slug: t1Slug },
    { term: t2Term, definition: t2Definition, slug: t2Slug },
    { term: t3Term, definition: t3Definition, slug: t3Slug },
    { term: t4Term, definition: t4Definition, slug: t4Slug },
    { term: t5Term, definition: t5Definition, slug: t5Slug },
    { term: t6Term, definition: t6Definition, slug: t6Slug },
    { term: t7Term, definition: t7Definition, slug: t7Slug },
    { term: t8Term, definition: t8Definition, slug: t8Slug },
    { term: t9Term, definition: t9Definition, slug: t9Slug },
    { term: t10Term, definition: t10Definition, slug: t10Slug },
    { term: t11Term, definition: t11Definition, slug: t11Slug },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s5-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s5-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s5-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          word-break: keep-all;
        }

        .s5-subheading {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
          word-break: keep-all;
        }

        .s5-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        @container (max-width: 900px) {
          .s5-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (max-width: 560px) {
          .s5-grid { grid-template-columns: 1fr; }
        }

        .s5-term {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 18px 20px;
          transition: border-color 0.18s;
        }

        .s5-term:hover {
          border-color: var(--c-primary, #5b4fe9);
        }

        .s5-term-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .s5-term-link {
          color: var(--c-ink, #0f1130);
          text-decoration: none;
          transition: color 0.15s;
        }

        .s5-term-link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .s5-term-def {
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section">
          <div className="s5-container" id="glossary">
            <div className="s5-header">
              <span className="s5-eyebrow">{eyebrow}</span>
              <h2 className="s5-heading">{heading}</h2>
              <p className="s5-subheading">{subheading}</p>
            </div>

            <div className="s5-grid">
              {terms.map((t, i) => (
                <article key={i} className="s5-term">
                  <h3 className="s5-term-title">
                    <a href={`${localePrefix}${t.slug}`} className="s5-term-link">{t.term}</a>
                  </h3>
                  <p className="s5-term-def">{t.definition}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_GlossaryGrid, {
  eyebrow:      { type: ControlType.String, title: "Eyebrow",     defaultValue: "Glossary" },
  heading:      { type: ControlType.String, title: "Heading",     defaultValue: "Category and architectural terms" },
  subheading:   { type: ControlType.String, title: "Subheading",  defaultValue: "11 definitions for buyers, architects, and security teams. Each term with Schema.org DefinedTerm markup.", displayTextArea: true },
  t1Term:       { type: ControlType.String, title: "T1 Term",     defaultValue: "context-preserving data layer for AI" },
  t1Definition: { type: ControlType.String, title: "T1 Def",      defaultValue: "The category. Architectural component between regulated systems and LLMs.", displayTextArea: true },
  t1Slug:       { type: ControlType.String, title: "T1 Slug",     defaultValue: "/glossary/context-preserving-data-layer" },
  t2Term:       { type: ControlType.String, title: "T2 Term",     defaultValue: "AI-ready operational layer" },
  t2Definition: { type: ControlType.String, title: "T2 Def",      defaultValue: "Operational data made AI-consumable while sensitive elements are protected.", displayTextArea: true },
  t2Slug:       { type: ControlType.String, title: "T2 Slug",     defaultValue: "/glossary/ai-ready-operational-layer" },
  t3Term:       { type: ControlType.String, title: "T3 Term",     defaultValue: "Structure-preserving encapsulation" },
  t3Definition: { type: ControlType.String, title: "T3 Def",      defaultValue: "Replacing sensitive elements while keeping document structure intact.", displayTextArea: true },
  t3Slug:       { type: ControlType.String, title: "T3 Slug",     defaultValue: "/glossary/structure-preserving-encapsulation" },
  t4Term:       { type: ControlType.String, title: "T4 Term",     defaultValue: "Differential privacy" },
  t4Definition: { type: ControlType.String, title: "T4 Def",      defaultValue: "Mathematical framework for privacy-preserving data transformation with bounded risk.", displayTextArea: true },
  t4Slug:       { type: ControlType.String, title: "T4 Slug",     defaultValue: "/glossary/differential-privacy" },
  t5Term:       { type: ControlType.String, title: "T5 Term",     defaultValue: "Two execution paths" },
  t5Definition: { type: ControlType.String, title: "T5 Def",      defaultValue: "Path A (external LLM with capsule) and Path B (on-prem local model) under one governance.", displayTextArea: true },
  t5Slug:       { type: ControlType.String, title: "T5 Slug",     defaultValue: "/glossary/two-execution-paths" },
  t6Term:       { type: ControlType.String, title: "T6 Term",     defaultValue: "Operational data" },
  t6Definition: { type: ControlType.String, title: "T6 Def",      defaultValue: "Workflow data — tickets, configs, clinical notes, claims — that real AI work runs on.", displayTextArea: true },
  t6Slug:       { type: ControlType.String, title: "T6 Slug",     defaultValue: "/glossary/operational-data" },
  t7Term:       { type: ControlType.String, title: "T7 Term",     defaultValue: "Sovereign AI" },
  t7Definition: { type: ControlType.String, title: "T7 Def",      defaultValue: "AI workflows where data, processing, and audit stay inside a defined boundary.", displayTextArea: true },
  t7Slug:       { type: ControlType.String, title: "T7 Slug",     defaultValue: "/glossary/sovereign-ai" },
  t8Term:       { type: ControlType.String, title: "T8 Term",     defaultValue: "Shadow AI" },
  t8Definition: { type: ControlType.String, title: "T8 Def",      defaultValue: "Unsanctioned external LLM use; symptom of missing context-preserving data layer for AI.", displayTextArea: true },
  t8Slug:       { type: ControlType.String, title: "T8 Slug",     defaultValue: "/glossary/shadow-ai" },
  t9Term:       { type: ControlType.String, title: "T9 Term",     defaultValue: "Blocked AI workflow" },
  t9Definition: { type: ControlType.String, title: "T9 Def",      defaultValue: "A workflow where AI value is real but data exposure rules block deployment.", displayTextArea: true },
  t9Slug:       { type: ControlType.String, title: "T9 Slug",     defaultValue: "/glossary/blocked-ai-workflow" },
  t10Term:      { type: ControlType.String, title: "T10 Term",    defaultValue: "Connector lane" },
  t10Definition:{ type: ControlType.String, title: "T10 Def",     defaultValue: "How Capsule reads document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.", displayTextArea: true },
  t10Slug:      { type: ControlType.String, title: "T10 Slug",    defaultValue: "/glossary/connector-lane" },
  t11Term:      { type: ControlType.String, title: "T11 Term",    defaultValue: "State vault for restoration" },
  t11Definition:{ type: ControlType.String, title: "T11 Def",     defaultValue: "Local key-value store mapping capsule tokens back to original values for restoration.", displayTextArea: true },
  t11Slug:      { type: ControlType.String, title: "T11 Slug",    defaultValue: "/glossary/state-vault-for-restoration" },
})
