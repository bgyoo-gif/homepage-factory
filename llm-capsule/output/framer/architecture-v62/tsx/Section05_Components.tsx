import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  c1Num?: string; c1Title?: string; c1Desc?: string
  c2Num?: string; c2Title?: string; c2Desc?: string
  c3Num?: string; c3Title?: string; c3Desc?: string
  c4Num?: string; c4Title?: string; c4Desc?: string
  c5Num?: string; c5Title?: string; c5Desc?: string
}

export default function Section05_Components({
  eyebrow = "Five components",
  title = "What's inside the LLM Capsule",
  description = "The five architectural components that implement the data layer. Each is independently configurable and audit-loggable.",
  c1Num = "Component 01",
  c1Title = "Detection Engine",
  c1Desc = "Detects PII + customer-defined markers across structured fields and free text. Beyond regex — semantic + context-aware. 98.1% detection accuracy.",
  c2Num = "Component 02",
  c2Title = "Encapsulation Engine",
  c2Desc = "Differential-privacy-based replacement (epsilon-DP, Laplace noise, k-anonymity, NER masking). Structure-preserving — tables, hierarchies, references survive.",
  c3Num = "Component 03",
  c3Title = "Policy Control",
  c3Desc = "Versioned, scoped, RBAC'd policies. Time-shifting markers — yesterday's policy archived, today's enforced. Per-team, per-workflow scope.",
  c4Num = "Component 04",
  c4Title = "Restoration Engine",
  c4Desc = "Local token vault lookup + context re-binding + output validation. 100% restoration rate. AI output comes back business-ready, in the originating tool.",
  c5Num = "Component 05",
  c5Title = "Audit & Compliance",
  c5Desc = "Every detection, encapsulation, processing, and restoration logged with policy version, model, latency, and outcome. GDPR / HIPAA / SOX-aligned.",
}: Props) {
  const components = [
    { num: c1Num, title: c1Title, desc: c1Desc, mod: "1" },
    { num: c2Num, title: c2Title, desc: c2Desc, mod: "2" },
    { num: c3Num, title: c3Title, desc: c3Desc, mod: "3" },
    { num: c4Num, title: c4Title, desc: c4Desc, mod: "4" },
    { num: c5Num, title: c5Title, desc: c5Desc, mod: "5" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s5-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s5-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg, #ffffff); }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s5-header { text-align: center; margin-bottom: 48px; }

        .s5-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s5-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s5-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s5-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .s5-comp {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
        }

        .s5-comp__num {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
        }

        .s5-comp--1 .s5-comp__num { color: var(--c-primary, #5b4fe9); }
        .s5-comp--2 .s5-comp__num { color: var(--c-teal, #0ea5a4); }
        .s5-comp--3 .s5-comp__num { color: var(--c-amber, #f59e0b); }
        .s5-comp--4 .s5-comp__num { color: var(--c-coral, #ef5350); }
        .s5-comp--5 .s5-comp__num { color: var(--c-bg-dark, #0f1130); }

        .s5-comp__h {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .s5-comp__d {
          font-size: 12px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        @container (min-width: 768px) {
          .s5-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s5-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @container (min-width: 1280px) {
          .s5-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section">
          <div className="s5-container">
            <header className="s5-header">
              <div className="s5-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s5-grid">
              {components.map((c, i) => (
                <article key={i} className={`s5-comp s5-comp--${c.mod}`}>
                  <span className="s5-comp__num">{c.num}</span>
                  <h3 className="s5-comp__h">{c.title}</h3>
                  <p className="s5-comp__d">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_Components, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Five components" },
  title: { type: ControlType.String, title: "Title", defaultValue: "What's inside the LLM Capsule" },
  description: { type: ControlType.String, title: "Description", defaultValue: "The five architectural components that implement the data layer. Each is independently configurable and audit-loggable." },
  c1Num: { type: ControlType.String, title: "C1 Number", defaultValue: "Component 01" },
  c1Title: { type: ControlType.String, title: "C1 Title", defaultValue: "Detection Engine" },
  c1Desc: { type: ControlType.String, title: "C1 Desc", defaultValue: "Detects PII + customer-defined markers across structured fields and free text. Beyond regex — semantic + context-aware. 98.1% detection accuracy." },
  c2Num: { type: ControlType.String, title: "C2 Number", defaultValue: "Component 02" },
  c2Title: { type: ControlType.String, title: "C2 Title", defaultValue: "Encapsulation Engine" },
  c2Desc: { type: ControlType.String, title: "C2 Desc", defaultValue: "Differential-privacy-based replacement (epsilon-DP, Laplace noise, k-anonymity, NER masking). Structure-preserving — tables, hierarchies, references survive." },
  c3Num: { type: ControlType.String, title: "C3 Number", defaultValue: "Component 03" },
  c3Title: { type: ControlType.String, title: "C3 Title", defaultValue: "Policy Control" },
  c3Desc: { type: ControlType.String, title: "C3 Desc", defaultValue: "Versioned, scoped, RBAC'd policies. Time-shifting markers — yesterday's policy archived, today's enforced. Per-team, per-workflow scope." },
  c4Num: { type: ControlType.String, title: "C4 Number", defaultValue: "Component 04" },
  c4Title: { type: ControlType.String, title: "C4 Title", defaultValue: "Restoration Engine" },
  c4Desc: { type: ControlType.String, title: "C4 Desc", defaultValue: "Local token vault lookup + context re-binding + output validation. 100% restoration rate. AI output comes back business-ready, in the originating tool." },
  c5Num: { type: ControlType.String, title: "C5 Number", defaultValue: "Component 05" },
  c5Title: { type: ControlType.String, title: "C5 Title", defaultValue: "Audit & Compliance" },
  c5Desc: { type: ControlType.String, title: "C5 Desc", defaultValue: "Every detection, encapsulation, processing, and restoration logged with policy version, model, latency, and outcome. GDPR / HIPAA / SOX-aligned." },
})
