import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  diagramUrl?: string
  diagramLabel?: string
  // Annotation cards
  a1Num?: string
  a1Title?: string
  a1Desc?: string
  a2Num?: string
  a2Title?: string
  a2Desc?: string
  a3Num?: string
  a3Title?: string
  a3Desc?: string
  a4Num?: string
  a4Title?: string
  a4Desc?: string
}

export default function Section03_TechnicalDiagram({
  eyebrow = "Technical view · zone-based architecture",
  title = "The same architecture, in technical detail",
  description = "For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and external AI interact.",
  diagramUrl = "architecture-diagram-v8.html",
  diagramLabel = "TECHNICAL VIEW · ZONE-BASED ARCHITECTURE",
  a1Num = "Zone 1 · Corporate Internal Network",
  a1Title = "Where the operational systems already live",
  a1Desc = "Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.",
  a2Num = "Zone 2 · DMZ — Demilitarized Zone",
  a2Title = "Where encapsulation happens",
  a2Desc = "The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.",
  a3Num = "Zone 3 · In-House Team",
  a3Title = "Where governance and routing happen",
  a3Desc = "Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.",
  a4Num = "Zone 4 · Local — Auto Reconstruction",
  a4Title = "Where the AI response becomes Business-Ready output",
  a4Desc = "The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.",
}: Props) {
  const resolvedDiagramUrl = diagramUrl || "architecture-diagram-v8.html"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s3-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s3-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg-soft, #f7f8fb); }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s3-header { text-align: center; margin-bottom: 48px; }

        .s3-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s3-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s3-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s3-diagram-wrap {
          background-color: #0d1117;
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          position: relative;
        }

        .s3-diagram-wrap__label {
          position: absolute;
          top: 16px;
          left: 24px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          color: #8b949e;
          letter-spacing: 0.15em;
          font-weight: 700;
          z-index: 2;
          pointer-events: none;
        }

        .s3-diagram-wrap iframe {
          width: 100%;
          min-height: 1800px;
          border: 0;
          display: block;
        }

        .s3-annotations {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 32px;
        }

        .s3-annotation {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
        }

        .s3-annotation__num {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          color: var(--c-primary, #5b4fe9);
          letter-spacing: 0.1em;
          margin-bottom: 6px;
          display: block;
        }

        .s3-annotation__h {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .s3-annotation__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        @container (min-width: 768px) {
          .s3-diagram-wrap iframe { min-height: 1400px; }
          .s3-annotations { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s3-root">
        <section className="s3-section">
          <div className="s3-container">
            <header className="s3-header">
              <div className="s3-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s3-diagram-wrap">
              <div className="s3-diagram-wrap__label">{diagramLabel}</div>
              <iframe
                src={resolvedDiagramUrl}
                title="LLM Capsule technical architecture diagram"
                loading="lazy"
              />
            </div>

            <div className="s3-annotations">
              <article className="s3-annotation">
                <span className="s3-annotation__num">{a1Num}</span>
                <h3 className="s3-annotation__h">{a1Title}</h3>
                <p className="s3-annotation__d">{a1Desc}</p>
              </article>
              <article className="s3-annotation">
                <span className="s3-annotation__num">{a2Num}</span>
                <h3 className="s3-annotation__h">{a2Title}</h3>
                <p className="s3-annotation__d">{a2Desc}</p>
              </article>
              <article className="s3-annotation">
                <span className="s3-annotation__num">{a3Num}</span>
                <h3 className="s3-annotation__h">{a3Title}</h3>
                <p className="s3-annotation__d">{a3Desc}</p>
              </article>
              <article className="s3-annotation">
                <span className="s3-annotation__num">{a4Num}</span>
                <h3 className="s3-annotation__h">{a4Title}</h3>
                <p className="s3-annotation__d">{a4Desc}</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_TechnicalDiagram, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Technical view · zone-based architecture" },
  title: { type: ControlType.String, title: "Title", defaultValue: "The same architecture, in technical detail" },
  description: { type: ControlType.String, title: "Description", defaultValue: "For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and external AI interact." },
  diagramUrl: { type: ControlType.String, title: "Diagram URL", defaultValue: "architecture-diagram-v8.html" },
  diagramLabel: { type: ControlType.String, title: "Diagram Label", defaultValue: "TECHNICAL VIEW · ZONE-BASED ARCHITECTURE" },
  a1Num: { type: ControlType.String, title: "A1 Zone", defaultValue: "Zone 1 · Corporate Internal Network" },
  a1Title: { type: ControlType.String, title: "A1 Title", defaultValue: "Where the operational systems already live" },
  a1Desc: { type: ControlType.String, title: "A1 Desc", defaultValue: "Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source." },
  a2Num: { type: ControlType.String, title: "A2 Zone", defaultValue: "Zone 2 · DMZ — Demilitarized Zone" },
  a2Title: { type: ControlType.String, title: "A2 Title", defaultValue: "Where encapsulation happens" },
  a2Desc: { type: ControlType.String, title: "A2 Desc", defaultValue: "The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map." },
  a3Num: { type: ControlType.String, title: "A3 Zone", defaultValue: "Zone 3 · In-House Team" },
  a3Title: { type: ControlType.String, title: "A3 Title", defaultValue: "Where governance and routing happen" },
  a3Desc: { type: ControlType.String, title: "A3 Desc", defaultValue: "Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization." },
  a4Num: { type: ControlType.String, title: "A4 Zone", defaultValue: "Zone 4 · Local — Auto Reconstruction" },
  a4Title: { type: ControlType.String, title: "A4 Title", defaultValue: "Where the AI response becomes Business-Ready output" },
  a4Desc: { type: ControlType.String, title: "A4 Desc", defaultValue: "The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow." },
})
