import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  // Path A
  paLabel?: string
  paTitle?: string
  paDesc?: string
  paItem1?: string
  paItem2?: string
  paItem3?: string
  paItem4?: string
  // Path B
  pbLabel?: string
  pbTitle?: string
  pbDesc?: string
  pbItem1?: string
  pbItem2?: string
  pbItem3?: string
  pbItem4?: string
}

export default function Section06_ExecutionPaths({
  eyebrow = "Two execution paths",
  title = "One architecture. Two paths. Policy-driven per workflow.",
  description = "The same LLM Capsule instance can route different workflows through different paths — under one governance framework.",
  paLabel = "PATH A · External",
  paTitle = "Approved external LLM, capsule data only",
  paDesc = "For workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs).",
  paItem1 = "Routes to ChatGPT, Claude, Gemini, Perplexity, or any LLM API",
  paItem2 = "Capsule travels — original data never does",
  paItem3 = "In-region endpoints supported (EU-hosted for sovereign AI)",
  paItem4 = "Best for: NOC RCA, claims classification, summarization",
  pbLabel = "PATH B · On-prem",
  pbTitle = "On-prem local lightweight model",
  pbDesc = "For workflows where any external endpoint is unacceptable — classified data, lawful intercept segments, OT operations, regulated mental health / pediatric data.",
  pbItem1 = "Quantized model on internal GPU (vLLM-served)",
  pbItem2 = "Zero external transmission — fully air-gapped option",
  pbItem3 = "Same Capsule instance, same audit, same policy framework",
  pbItem4 = "Best for: defense, classified workflows, strict sovereign AI",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s6-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s6-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg-soft, #f7f8fb); }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s6-header { text-align: center; margin-bottom: 48px; }

        .s6-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s6-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s6-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s6-paths {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .s6-path {
          background-color: var(--c-bg, #ffffff);
          border-radius: var(--r-lg, 16px);
          padding: 32px;
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s6-path__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          letter-spacing: 0.15em;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--r-sm, 6px);
          display: inline-block;
          margin-bottom: 12px;
        }

        .s6-path--a .s6-path__label {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s6-path--b .s6-path__label {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
        }

        .s6-path__h {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .s6-path__d {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .s6-path__list { list-style: none; padding: 0; margin: 0; }

        .s6-path__list li {
          font-size: 13px;
          padding: 8px 0 8px 22px;
          position: relative;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s6-path__list li:last-child { border-bottom: 0; }

        .s6-path__list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--c-primary, #5b4fe9);
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s6-paths { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section">
          <div className="s6-container">
            <header className="s6-header">
              <div className="s6-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s6-paths">
              <article className="s6-path s6-path--a">
                <div className="s6-path__label">{paLabel}</div>
                <h3 className="s6-path__h">{paTitle}</h3>
                <p className="s6-path__d">{paDesc}</p>
                <ul className="s6-path__list">
                  <li>{paItem1}</li>
                  <li>{paItem2}</li>
                  <li>{paItem3}</li>
                  <li>{paItem4}</li>
                </ul>
              </article>

              <article className="s6-path s6-path--b">
                <div className="s6-path__label">{pbLabel}</div>
                <h3 className="s6-path__h">{pbTitle}</h3>
                <p className="s6-path__d">{pbDesc}</p>
                <ul className="s6-path__list">
                  <li>{pbItem1}</li>
                  <li>{pbItem2}</li>
                  <li>{pbItem3}</li>
                  <li>{pbItem4}</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_ExecutionPaths, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Two execution paths" },
  title: { type: ControlType.String, title: "Title", defaultValue: "One architecture. Two paths. Policy-driven per workflow." },
  description: { type: ControlType.String, title: "Description", defaultValue: "The same LLM Capsule instance can route different workflows through different paths — under one governance framework." },
  paLabel: { type: ControlType.String, title: "Path A Label", defaultValue: "PATH A · External" },
  paTitle: { type: ControlType.String, title: "Path A Title", defaultValue: "Approved external LLM, capsule data only" },
  paDesc: { type: ControlType.String, title: "Path A Desc", defaultValue: "For workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs)." },
  paItem1: { type: ControlType.String, title: "Path A Item 1", defaultValue: "Routes to ChatGPT, Claude, Gemini, Perplexity, or any LLM API" },
  paItem2: { type: ControlType.String, title: "Path A Item 2", defaultValue: "Capsule travels — original data never does" },
  paItem3: { type: ControlType.String, title: "Path A Item 3", defaultValue: "In-region endpoints supported (EU-hosted for sovereign AI)" },
  paItem4: { type: ControlType.String, title: "Path A Item 4", defaultValue: "Best for: NOC RCA, claims classification, summarization" },
  pbLabel: { type: ControlType.String, title: "Path B Label", defaultValue: "PATH B · On-prem" },
  pbTitle: { type: ControlType.String, title: "Path B Title", defaultValue: "On-prem local lightweight model" },
  pbDesc: { type: ControlType.String, title: "Path B Desc", defaultValue: "For workflows where any external endpoint is unacceptable — classified data, lawful intercept segments, OT operations, regulated mental health / pediatric data." },
  pbItem1: { type: ControlType.String, title: "Path B Item 1", defaultValue: "Quantized model on internal GPU (vLLM-served)" },
  pbItem2: { type: ControlType.String, title: "Path B Item 2", defaultValue: "Zero external transmission — fully air-gapped option" },
  pbItem3: { type: ControlType.String, title: "Path B Item 3", defaultValue: "Same Capsule instance, same audit, same policy framework" },
  pbItem4: { type: ControlType.String, title: "Path B Item 4", defaultValue: "Best for: defense, classified workflows, strict sovereign AI" },
})
