import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  description?: string
  // Zone 1
  z1Label?: string
  z1Name?: string
  z1Desc?: string
  z1Item1?: string
  z1Item2?: string
  z1Item3?: string
  z1Item4?: string
  z1Item5?: string
  z1Item6?: string
  // Zone 2
  z2Label?: string
  z2Name?: string
  z2Desc?: string
  z2Item1?: string
  z2Item2?: string
  z2Item3?: string
  z2Item4?: string
  z2Item5?: string
  z2Badge?: string
  // Zone 3
  z3Label?: string
  z3Name?: string
  z3Desc?: string
  z3Item1?: string
  z3Item2?: string
  z3Item3?: string
  z3Item4?: string
  z3Item5?: string
  // Zone 4
  z4Label?: string
  z4Name?: string
  z4Desc?: string
  z4Item1?: string
  z4Item2?: string
  z4Item3?: string
  z4Item4?: string
  z4Item5?: string
}

export default function Section02_ZoneOverview({
  eyebrow = "Zone overview",
  title = "One layer between your existing systems and AI",
  description = "LLM Capsule sits inside your environment, reads from existing systems, preserves operational structure, and restores AI output back into the originating workflow. The architecture maps to four zones — Corporate Internal Network, DMZ, In-House Team, and Local Auto Reconstruction — and the trust boundary holds: raw operational data stays inside the corporate environment; only the protected capsule traverses zones; restored output is reconstructed locally inside the in-house team's environment.",
  z1Label = "Zone 1",
  z1Name = "Corporate Internal Network",
  z1Desc = "Where the operational systems and the data they hold already live. LLM Capsule reads from these systems where they already are — without modification, with a single API-call addition.",
  z1Item1 = "ERP System (SAP / Oracle) — REST API",
  z1Item2 = "CRM (Salesforce) — REST API",
  z1Item3 = "Ticketing (Jira / ServiceNow) — REST API",
  z1Item4 = "DMS / ECM (SharePoint) — Graph API",
  z1Item5 = "Legacy DB (Oracle / MSSQL) — JDBC → API",
  z1Item6 = "RAG Pipeline (Vector DB) — gRPC / REST",
  z2Label = "Zone 2",
  z2Name = "DMZ — Demilitarized Zone",
  z2Desc = "Where the Enhanced Encapsulation Layer operates. Detection identifies sensitive elements, encapsulation replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and only the capsule leaves this zone toward an external AI.",
  z2Item1 = "Detection — PII + customer-defined markers",
  z2Item2 = "Enhanced Encapsulation Layer — DP-based, structure-preserving",
  z2Item3 = "Capsule transmission — capsule only, never raw data",
  z2Item4 = "Token map stays local",
  z2Item5 = "Audit trail of every encapsulation event",
  z2Badge = "↑ Trust boundary — original operational data never crosses",
  z3Label = "Zone 3",
  z3Name = "In-House Team",
  z3Desc = "Where governance, policy, and the AI workflow itself are operated. Organizational policy, permissions, and domain context drive how the encapsulated request is routed — to an approved external LLM or to an on-prem local model — with full audit retained inside the organization.",
  z3Item1 = "Organizational policy & permissions",
  z3Item2 = "Domain context applied to AI processing",
  z3Item3 = "Routing — external approved LLM (Path A) or on-prem local (Path B)",
  z3Item4 = "Approved external LLMs: ChatGPT · Claude · Gemini · Perplexity · any LLM API",
  z3Item5 = "Governance fully retained",
  z4Label = "Zone 4",
  z4Name = "Local — Auto Reconstruction",
  z4Desc = "Where the AI response is automatically reconstructed back into Business-Ready output. Tokens are restored to original values inside the organization only — data that left the boundary cannot be reconstructed externally.",
  z4Item1 = "Token-by-token restoration from local token vault",
  z4Item2 = "Restoration happens only inside the organization",
  z4Item3 = "Externally-leaked data is not restorable outside",
  z4Item4 = "Business-Ready output delivered to the originating workflow",
  z4Item5 = "Restoration audit alongside encapsulation audit",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s2-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s2-section { padding: var(--s-section, clamp(64px, 8vw, 128px)) 0; background-color: var(--c-bg, #ffffff); }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s2-header { text-align: center; margin-bottom: 48px; }

        .s2-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s2-header h2 {
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s2-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .s2-zone {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
        }

        .s2-zone__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--c-muted, #6b7280);
          margin-bottom: 8px;
          text-transform: uppercase;
          display: block;
        }

        .s2-zone--corp .s2-zone__label { color: var(--c-coral-dark, #c73e3a); }
        .s2-zone--cap .s2-zone__label { color: var(--c-primary, #5b4fe9); }
        .s2-zone--ai .s2-zone__label { color: var(--c-teal, #0ea5a4); }
        .s2-zone--local .s2-zone__label { color: var(--c-amber, #f59e0b); }

        .s2-zone__h {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .s2-zone__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .s2-zone__list { list-style: none; padding: 0; margin: 0; }

        .s2-zone__list li {
          font-size: 12px;
          padding: 4px 0 4px 16px;
          position: relative;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.4;
        }

        .s2-zone__list li::before {
          content: '·';
          position: absolute;
          left: 4px;
          font-weight: 700;
          color: var(--c-primary, #5b4fe9);
        }

        .s2-zone__badge {
          display: inline-block;
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          padding: 4px 10px;
          border: 1px dashed var(--c-coral, #ef5350);
          color: var(--c-coral-dark, #c73e3a);
          border-radius: var(--r-sm, 6px);
          letter-spacing: 0.05em;
        }

        @container (min-width: 768px) {
          .s2-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s2-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <header className="s2-header">
              <div className="s2-eyebrow">{eyebrow}</div>
              <h2>{title}</h2>
              <p>{description}</p>
            </header>

            <div className="s2-grid">
              <article className="s2-zone s2-zone--corp">
                <span className="s2-zone__label">{z1Label}</span>
                <h3 className="s2-zone__h">{z1Name}</h3>
                <p className="s2-zone__d">{z1Desc}</p>
                <ul className="s2-zone__list">
                  <li>{z1Item1}</li>
                  <li>{z1Item2}</li>
                  <li>{z1Item3}</li>
                  <li>{z1Item4}</li>
                  <li>{z1Item5}</li>
                  <li>{z1Item6}</li>
                </ul>
              </article>

              <article className="s2-zone s2-zone--cap">
                <span className="s2-zone__label">{z2Label}</span>
                <h3 className="s2-zone__h">{z2Name}</h3>
                <p className="s2-zone__d">{z2Desc}</p>
                <ul className="s2-zone__list">
                  <li>{z2Item1}</li>
                  <li>{z2Item2}</li>
                  <li>{z2Item3}</li>
                  <li>{z2Item4}</li>
                  <li>{z2Item5}</li>
                </ul>
                <div className="s2-zone__badge">{z2Badge}</div>
              </article>

              <article className="s2-zone s2-zone--ai">
                <span className="s2-zone__label">{z3Label}</span>
                <h3 className="s2-zone__h">{z3Name}</h3>
                <p className="s2-zone__d">{z3Desc}</p>
                <ul className="s2-zone__list">
                  <li>{z3Item1}</li>
                  <li>{z3Item2}</li>
                  <li>{z3Item3}</li>
                  <li>{z3Item4}</li>
                  <li>{z3Item5}</li>
                </ul>
              </article>

              <article className="s2-zone s2-zone--local">
                <span className="s2-zone__label">{z4Label}</span>
                <h3 className="s2-zone__h">{z4Name}</h3>
                <p className="s2-zone__d">{z4Desc}</p>
                <ul className="s2-zone__list">
                  <li>{z4Item1}</li>
                  <li>{z4Item2}</li>
                  <li>{z4Item3}</li>
                  <li>{z4Item4}</li>
                  <li>{z4Item5}</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_ZoneOverview, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Zone overview" },
  title: { type: ControlType.String, title: "Title", defaultValue: "One layer between your existing systems and AI" },
  description: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule sits inside your environment, reads from existing systems, preserves operational structure, and restores AI output back into the originating workflow. The architecture maps to four zones — Corporate Internal Network, DMZ, In-House Team, and Local Auto Reconstruction — and the trust boundary holds: raw operational data stays inside the corporate environment; only the protected capsule traverses zones; restored output is reconstructed locally inside the in-house team's environment." },
  z1Label: { type: ControlType.String, title: "Zone 1 Label", defaultValue: "Zone 1" },
  z1Name: { type: ControlType.String, title: "Zone 1 Name", defaultValue: "Corporate Internal Network" },
  z1Desc: { type: ControlType.String, title: "Zone 1 Desc", defaultValue: "Where the operational systems and the data they hold already live. LLM Capsule reads from these systems where they already are — without modification, with a single API-call addition." },
  z1Item1: { type: ControlType.String, title: "Zone 1 Item 1", defaultValue: "ERP System (SAP / Oracle) — REST API" },
  z1Item2: { type: ControlType.String, title: "Zone 1 Item 2", defaultValue: "CRM (Salesforce) — REST API" },
  z1Item3: { type: ControlType.String, title: "Zone 1 Item 3", defaultValue: "Ticketing (Jira / ServiceNow) — REST API" },
  z1Item4: { type: ControlType.String, title: "Zone 1 Item 4", defaultValue: "DMS / ECM (SharePoint) — Graph API" },
  z1Item5: { type: ControlType.String, title: "Zone 1 Item 5", defaultValue: "Legacy DB (Oracle / MSSQL) — JDBC → API" },
  z1Item6: { type: ControlType.String, title: "Zone 1 Item 6", defaultValue: "RAG Pipeline (Vector DB) — gRPC / REST" },
  z2Label: { type: ControlType.String, title: "Zone 2 Label", defaultValue: "Zone 2" },
  z2Name: { type: ControlType.String, title: "Zone 2 Name", defaultValue: "DMZ — Demilitarized Zone" },
  z2Desc: { type: ControlType.String, title: "Zone 2 Desc", defaultValue: "Where the Enhanced Encapsulation Layer operates. Detection identifies sensitive elements, encapsulation replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and only the capsule leaves this zone toward an external AI." },
  z2Item1: { type: ControlType.String, title: "Zone 2 Item 1", defaultValue: "Detection — PII + customer-defined markers" },
  z2Item2: { type: ControlType.String, title: "Zone 2 Item 2", defaultValue: "Enhanced Encapsulation Layer — DP-based, structure-preserving" },
  z2Item3: { type: ControlType.String, title: "Zone 2 Item 3", defaultValue: "Capsule transmission — capsule only, never raw data" },
  z2Item4: { type: ControlType.String, title: "Zone 2 Item 4", defaultValue: "Token map stays local" },
  z2Item5: { type: ControlType.String, title: "Zone 2 Item 5", defaultValue: "Audit trail of every encapsulation event" },
  z2Badge: { type: ControlType.String, title: "Zone 2 Badge", defaultValue: "↑ Trust boundary — original operational data never crosses" },
  z3Label: { type: ControlType.String, title: "Zone 3 Label", defaultValue: "Zone 3" },
  z3Name: { type: ControlType.String, title: "Zone 3 Name", defaultValue: "In-House Team" },
  z3Desc: { type: ControlType.String, title: "Zone 3 Desc", defaultValue: "Where governance, policy, and the AI workflow itself are operated. Organizational policy, permissions, and domain context drive how the encapsulated request is routed — to an approved external LLM or to an on-prem local model — with full audit retained inside the organization." },
  z3Item1: { type: ControlType.String, title: "Zone 3 Item 1", defaultValue: "Organizational policy & permissions" },
  z3Item2: { type: ControlType.String, title: "Zone 3 Item 2", defaultValue: "Domain context applied to AI processing" },
  z3Item3: { type: ControlType.String, title: "Zone 3 Item 3", defaultValue: "Routing — external approved LLM (Path A) or on-prem local (Path B)" },
  z3Item4: { type: ControlType.String, title: "Zone 3 Item 4", defaultValue: "Approved external LLMs: ChatGPT · Claude · Gemini · Perplexity · any LLM API" },
  z3Item5: { type: ControlType.String, title: "Zone 3 Item 5", defaultValue: "Governance fully retained" },
  z4Label: { type: ControlType.String, title: "Zone 4 Label", defaultValue: "Zone 4" },
  z4Name: { type: ControlType.String, title: "Zone 4 Name", defaultValue: "Local — Auto Reconstruction" },
  z4Desc: { type: ControlType.String, title: "Zone 4 Desc", defaultValue: "Where the AI response is automatically reconstructed back into Business-Ready output. Tokens are restored to original values inside the organization only — data that left the boundary cannot be reconstructed externally." },
  z4Item1: { type: ControlType.String, title: "Zone 4 Item 1", defaultValue: "Token-by-token restoration from local token vault" },
  z4Item2: { type: ControlType.String, title: "Zone 4 Item 2", defaultValue: "Restoration happens only inside the organization" },
  z4Item3: { type: ControlType.String, title: "Zone 4 Item 3", defaultValue: "Externally-leaked data is not restorable outside" },
  z4Item4: { type: ControlType.String, title: "Zone 4 Item 4", defaultValue: "Business-Ready output delivered to the originating workflow" },
  z4Item5: { type: ControlType.String, title: "Zone 4 Item 5", defaultValue: "Restoration audit alongside encapsulation audit" },
})
