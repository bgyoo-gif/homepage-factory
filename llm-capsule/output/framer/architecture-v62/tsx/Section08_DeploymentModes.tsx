import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  d1Title?: string; d1Desc?: string
  d2Title?: string; d2Desc?: string
  d3Title?: string; d3Desc?: string
  d4Title?: string; d4Desc?: string
  d5Title?: string; d5Desc?: string
  d6Title?: string; d6Desc?: string
  footnote?: string
}

export default function Section08_DeploymentModes({
  eyebrow = "Deployment modes",
  title = "Six deployment modes — match your environment exactly",
  description = "Capsule runs inside the customer environment in every mode. Path A and Path B execution choices apply across all six.",
  d1Title = "Air-gapped on-prem",
  d1Desc = "Fully internal. No external network. Path B only. Defense, classified, OT.",
  d2Title = "On-prem hybrid",
  d2Desc = "Internal Capsule + approved external LLM. Path A for most workflows, Path B for sensitive subset.",
  d3Title = "VPC / private cloud",
  d3Desc = "Customer's cloud VPC. Capsule + token vault stay in tenant; LLM call to in-region endpoint.",
  d4Title = "AWS Marketplace",
  d4Desc = "Listed and procurable through AWS Marketplace. VPC deployment, AWS billing integration.",
  d5Title = "Embedded SDK",
  d5Desc = "For ISVs and platform vendors building Capsule into their own product. Library-level integration that ships inside the host application.",
  d6Title = "Slack App",
  d6Desc = "For teams using Slack as the operations UI. Capsule runtime stays in the customer environment; the Slack App is the surface that invokes it.",
  footnote = `Note: a separate "Telecom-grade" topology (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure — validated at SK Telecom, recognized at Deutsche Telekom T Challenge 2026. It composes with the modes above rather than replacing them.`,
}: Props) {
  const modes = [
    { title: d1Title, desc: d1Desc },
    { title: d2Title, desc: d2Desc },
    { title: d3Title, desc: d3Desc },
    { title: d4Title, desc: d4Desc },
    { title: d5Title, desc: d5Desc },
    { title: d6Title, desc: d6Desc },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s8-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s8-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg-soft, #f7f8fb); }

        .s8-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s8-header { text-align: center; margin-bottom: 48px; }

        .s8-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s8-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s8-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .s8-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 20px;
        }

        .s8-card__h {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .s8-card__d {
          font-size: 12px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.5;
        }

        .s8-note {
          margin-top: 24px;
          font-size: 14px;
          color: var(--c-muted, #6b7280);
          text-align: center;
          line-height: 1.6;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }

        @container (min-width: 768px) {
          .s8-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s8-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s8-root">
        <section className="s8-section">
          <div className="s8-container">
            <header className="s8-header">
              <div className="s8-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s8-grid">
              {modes.map((m, i) => (
                <article key={i} className="s8-card">
                  <h3 className="s8-card__h">{m.title}</h3>
                  <p className="s8-card__d">{m.desc}</p>
                </article>
              ))}
            </div>

            <p className="s8-note">{footnote}</p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_DeploymentModes, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Deployment modes" },
  title: { type: ControlType.String, title: "Title", defaultValue: "Six deployment modes — match your environment exactly" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Capsule runs inside the customer environment in every mode. Path A and Path B execution choices apply across all six." },
  d1Title: { type: ControlType.String, title: "Mode 1 Title", defaultValue: "Air-gapped on-prem" },
  d1Desc: { type: ControlType.String, title: "Mode 1 Desc", defaultValue: "Fully internal. No external network. Path B only. Defense, classified, OT." },
  d2Title: { type: ControlType.String, title: "Mode 2 Title", defaultValue: "On-prem hybrid" },
  d2Desc: { type: ControlType.String, title: "Mode 2 Desc", defaultValue: "Internal Capsule + approved external LLM. Path A for most workflows, Path B for sensitive subset." },
  d3Title: { type: ControlType.String, title: "Mode 3 Title", defaultValue: "VPC / private cloud" },
  d3Desc: { type: ControlType.String, title: "Mode 3 Desc", defaultValue: "Customer's cloud VPC. Capsule + token vault stay in tenant; LLM call to in-region endpoint." },
  d4Title: { type: ControlType.String, title: "Mode 4 Title", defaultValue: "AWS Marketplace" },
  d4Desc: { type: ControlType.String, title: "Mode 4 Desc", defaultValue: "Listed and procurable through AWS Marketplace. VPC deployment, AWS billing integration." },
  d5Title: { type: ControlType.String, title: "Mode 5 Title", defaultValue: "Embedded SDK" },
  d5Desc: { type: ControlType.String, title: "Mode 5 Desc", defaultValue: "For ISVs and platform vendors building Capsule into their own product. Library-level integration that ships inside the host application." },
  d6Title: { type: ControlType.String, title: "Mode 6 Title", defaultValue: "Slack App" },
  d6Desc: { type: ControlType.String, title: "Mode 6 Desc", defaultValue: "For teams using Slack as the operations UI. Capsule runtime stays in the customer environment; the Slack App is the surface that invokes it." },
  footnote: { type: ControlType.String, title: "Footnote", defaultValue: `Note: a separate "Telecom-grade" topology (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure — validated at SK Telecom, recognized at Deutsche Telekom T Challenge 2026. It composes with the modes above rather than replacing them.` },
})
