import { addPropertyControls, ControlType } from "framer"

// CMS: Industries — tag, title, lead, blocked, enabled, dataItems[], customerProof, colorVariant
interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  sectionDesc?: string
  ctaLabel?: string
  ctaHref?: string
  uc1Tag?: string
  uc1Title?: string
  uc1InputLabel?: string
  uc1Input?: string
  uc1FlowLabel?: string
  uc1Flow?: string
  uc1CustomerProof?: string
  uc1ColorVariant?: "primary" | "teal" | "amber" | "coral"
  uc2Tag?: string
  uc2Title?: string
  uc2InputLabel?: string
  uc2Input?: string
  uc2FlowLabel?: string
  uc2Flow?: string
  uc2CustomerProof?: string
  uc2ColorVariant?: "primary" | "teal" | "amber" | "coral"
  uc3Tag?: string
  uc3Title?: string
  uc3InputLabel?: string
  uc3Input?: string
  uc3FlowLabel?: string
  uc3Flow?: string
  uc3CustomerProof?: string
  uc3ColorVariant?: "primary" | "teal" | "amber" | "coral"
  uc4Tag?: string
  uc4Title?: string
  uc4InputLabel?: string
  uc4Input?: string
  uc4FlowLabel?: string
  uc4Flow?: string
  uc4CustomerProof?: string
  uc4ColorVariant?: "primary" | "teal" | "amber" | "coral"
}

function colorVar(variant: string): string {
  if (variant === "teal")   return "var(--c-teal, #0ea5a4)"
  if (variant === "amber")  return "var(--c-amber, #f59e0b)"
  if (variant === "coral")  return "var(--c-coral, #ef5350)"
  return "var(--c-primary, #5b4fe9)"
}

export default function Section08_UseCases({
  eyebrow = "BUILT FOR REGULATED OPERATIONS",
  heading = "From telecom NOC to ",
  headingHighlight = "mission operations",
  sectionDesc = "Each industry below shows the operational data LLM Capsule transforms — not just PII — and where it's already deployed.",
  ctaLabel = "See all six industries \u2192",
  ctaHref = "/solutions",
  uc1Tag = "01",
  uc1Title = "Network Operations & Incident Analysis",
  uc1InputLabel = "Input",
  uc1Input = "NOC logs \u00b7 alarm sequences \u00b7 device / site / circuit IDs \u00b7 SLA risk \u00b7 NOC response history \u00b7 subscriber identities \u00b7 network configs",
  uc1FlowLabel = "Flow",
  uc1Flow = "Capsule \u2192 AI generates RCA + customer-impact analysis \u2192 restored into ticket / runbook",
  uc1CustomerProof = "SK Telecom \u00b7 Deutsche Telekom T Challenge 2026 \u2014 Top 12, Data Security & Governance.",
  uc1ColorVariant = "primary",
  uc2Tag = "02",
  uc2Title = "OT / Industrial Asset & Vulnerability Operations",
  uc2InputLabel = "Input",
  uc2Input = "asset ID \u00b7 PLC / ICS alerts \u00b7 vulnerability records \u00b7 plant operation \u00b7 patch constraint \u00b7 vendor / device info \u00b7 infrastructure details",
  uc2FlowLabel = "Flow",
  uc2Flow = "Capsule \u2192 AI reviews + recommends remediation \u2192 security ops workflow",
  uc2CustomerProof = "Partner: Claroty (industrial cybersecurity).",
  uc2ColorVariant = "teal",
  uc3Tag = "03",
  uc3Title = "Healthcare Clinical & Hospital Operational Workflow",
  uc3InputLabel = "Input",
  uc3Input = "clinical workflow \u00b7 lab results \u00b7 prescription flow \u00b7 patient names \u00b7 diagnoses \u00b7 medical record IDs \u00b7 hospital operation \u00b7 claim review context",
  uc3FlowLabel = "Flow",
  uc3Flow = "Capsule \u2192 AI summarizes + drafts clinical notes / radiology reports \u2192 restored into EHR workflow",
  uc3CustomerProof = "Deployed at Ewha Womans University Medical Center (EUMC).",
  uc3ColorVariant = "amber",
  uc4Tag = "04",
  uc4Title = "Public Sector / Defense \u2014 Mission & Classified Workflow",
  uc4InputLabel = "Input",
  uc4Input = "military personnel data \u00b7 classified operation details \u00b7 security-grade documents \u00b7 mission log \u00b7 operation brief \u00b7 access-controlled context \u00b7 command workflow",
  uc4FlowLabel = "Flow",
  uc4Flow = "Capsule (local execution) \u2192 AI drafts intelligence reports + briefing summaries \u2192 restored under command control with full audit trail",
  uc4CustomerProof = "Deployed at Ministry of National Defense (South Korea). On-prem / local execution path required.",
  uc4ColorVariant = "coral",
}: Props) {
  const cases = [
    { tag: uc1Tag, title: uc1Title, inputLabel: uc1InputLabel, input: uc1Input, flowLabel: uc1FlowLabel, flow: uc1Flow, customerProof: uc1CustomerProof, colorVariant: uc1ColorVariant },
    { tag: uc2Tag, title: uc2Title, inputLabel: uc2InputLabel, input: uc2Input, flowLabel: uc2FlowLabel, flow: uc2Flow, customerProof: uc2CustomerProof, colorVariant: uc2ColorVariant },
    { tag: uc3Tag, title: uc3Title, inputLabel: uc3InputLabel, input: uc3Input, flowLabel: uc3FlowLabel, flow: uc3Flow, customerProof: uc3CustomerProof, colorVariant: uc3ColorVariant },
    { tag: uc4Tag, title: uc4Title, inputLabel: uc4InputLabel, input: uc4Input, flowLabel: uc4FlowLabel, flow: uc4Flow, customerProof: uc4CustomerProof, colorVariant: uc4ColorVariant },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s8-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s8-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s8-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s8-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s8-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s8-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .s8-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s8-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @container (min-width: 700px) {
          .s8-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .s8-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 28px;
        }

        .s8-card__num {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .s8-card__title {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 14px;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
        }

        .s8-card__row {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 12px;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .s8-card__label {
          font-weight: 700;
          color: var(--c-muted, #6b7280);
        }

        .s8-card__val {
          color: var(--c-ink, #0f1130);
        }

        .s8-card__proof {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          font-size: 12px;
          font-style: italic;
          font-weight: 600;
        }

        .s8-cta {
          text-align: center;
          margin-top: 32px;
        }

        .s8-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          background: transparent;
          color: var(--c-ink, #0f1130);
          border: 1.5px solid var(--c-rule, #e5e7eb);
          transition: border-color 0.18s, color 0.18s;
          text-decoration: none;
        }

        .s8-btn-ghost:hover {
          border-color: var(--c-primary, #5b4fe9);
          color: var(--c-primary, #5b4fe9);
        }
      `}</style>

      <div className="s8-root">
        <section className="s8-section">
          <div className="s8-container">
            <header className="s8-header">
              <span className="s8-eyebrow">{eyebrow}</span>
              <h2 className="s8-h2">
                {heading}<span>{headingHighlight}</span>
              </h2>
              <p className="s8-desc">{sectionDesc}</p>
            </header>

            <div className="s8-grid">
              {cases.map((uc, i) => {
                const ucColor = colorVar(uc.colorVariant || "primary")
                return (
                  <article key={i} className="s8-card">
                    <div
                      className="s8-card__num"
                      style={{ color: ucColor } as React.CSSProperties}
                    >
                      {uc.tag}
                    </div>
                    <h3 className="s8-card__title">{uc.title}</h3>
                    <div className="s8-card__row">
                      <span className="s8-card__label">{uc.inputLabel}</span>
                      <span className="s8-card__val">{uc.input}</span>
                    </div>
                    <div className="s8-card__row">
                      <span className="s8-card__label">{uc.flowLabel}</span>
                      <span className="s8-card__val">{uc.flow}</span>
                    </div>
                    <div
                      className="s8-card__proof"
                      style={{ color: ucColor } as React.CSSProperties}
                    >
                      {uc.customerProof}
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="s8-cta">
              <a className="s8-btn-ghost" href={ctaHref}>{ctaLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_UseCases, {
  eyebrow:          { type: ControlType.String, title: "Eyebrow",          defaultValue: "BUILT FOR REGULATED OPERATIONS" },
  heading:          { type: ControlType.String, title: "H2 Text",          defaultValue: "From telecom NOC to " },
  headingHighlight: { type: ControlType.String, title: "H2 Highlight",     defaultValue: "mission operations" },
  sectionDesc:      { type: ControlType.String, title: "Description",      defaultValue: "Each industry below shows the operational data LLM Capsule transforms — not just PII — and where it's already deployed.", multiLine: true },
  ctaLabel:         { type: ControlType.String, title: "CTA Label",        defaultValue: "See all six industries \u2192" },
  ctaHref:          { type: ControlType.String, title: "CTA URL",          defaultValue: "/solutions" },
  uc1Tag:           { type: ControlType.String, title: "UC 1 Tag",         defaultValue: "01" },
  uc1Title:         { type: ControlType.String, title: "UC 1 Title",       defaultValue: "Network Operations & Incident Analysis" },
  uc1InputLabel:    { type: ControlType.String, title: "UC 1 Input Label", defaultValue: "Input" },
  uc1Input:         { type: ControlType.String, title: "UC 1 Input",       defaultValue: "NOC logs \u00b7 alarm sequences \u00b7 device / site / circuit IDs \u00b7 SLA risk \u00b7 NOC response history \u00b7 subscriber identities \u00b7 network configs", multiLine: true },
  uc1FlowLabel:     { type: ControlType.String, title: "UC 1 Flow Label",  defaultValue: "Flow" },
  uc1Flow:          { type: ControlType.String, title: "UC 1 Flow",        defaultValue: "Capsule \u2192 AI generates RCA + customer-impact analysis \u2192 restored into ticket / runbook" },
  uc1CustomerProof: { type: ControlType.String, title: "UC 1 Proof",       defaultValue: "SK Telecom \u00b7 Deutsche Telekom T Challenge 2026 \u2014 Top 12, Data Security & Governance." },
  uc1ColorVariant:  { type: ControlType.Enum,   title: "UC 1 Color",       defaultValue: "primary", options: ["primary", "teal", "amber", "coral"] },
  uc2Tag:           { type: ControlType.String, title: "UC 2 Tag",         defaultValue: "02" },
  uc2Title:         { type: ControlType.String, title: "UC 2 Title",       defaultValue: "OT / Industrial Asset & Vulnerability Operations" },
  uc2InputLabel:    { type: ControlType.String, title: "UC 2 Input Label", defaultValue: "Input" },
  uc2Input:         { type: ControlType.String, title: "UC 2 Input",       defaultValue: "asset ID \u00b7 PLC / ICS alerts \u00b7 vulnerability records \u00b7 plant operation \u00b7 patch constraint \u00b7 vendor / device info \u00b7 infrastructure details", multiLine: true },
  uc2FlowLabel:     { type: ControlType.String, title: "UC 2 Flow Label",  defaultValue: "Flow" },
  uc2Flow:          { type: ControlType.String, title: "UC 2 Flow",        defaultValue: "Capsule \u2192 AI reviews + recommends remediation \u2192 security ops workflow" },
  uc2CustomerProof: { type: ControlType.String, title: "UC 2 Proof",       defaultValue: "Partner: Claroty (industrial cybersecurity)." },
  uc2ColorVariant:  { type: ControlType.Enum,   title: "UC 2 Color",       defaultValue: "teal", options: ["primary", "teal", "amber", "coral"] },
  uc3Tag:           { type: ControlType.String, title: "UC 3 Tag",         defaultValue: "03" },
  uc3Title:         { type: ControlType.String, title: "UC 3 Title",       defaultValue: "Healthcare Clinical & Hospital Operational Workflow" },
  uc3InputLabel:    { type: ControlType.String, title: "UC 3 Input Label", defaultValue: "Input" },
  uc3Input:         { type: ControlType.String, title: "UC 3 Input",       defaultValue: "clinical workflow \u00b7 lab results \u00b7 prescription flow \u00b7 patient names \u00b7 diagnoses \u00b7 medical record IDs \u00b7 hospital operation \u00b7 claim review context", multiLine: true },
  uc3FlowLabel:     { type: ControlType.String, title: "UC 3 Flow Label",  defaultValue: "Flow" },
  uc3Flow:          { type: ControlType.String, title: "UC 3 Flow",        defaultValue: "Capsule \u2192 AI summarizes + drafts clinical notes / radiology reports \u2192 restored into EHR workflow" },
  uc3CustomerProof: { type: ControlType.String, title: "UC 3 Proof",       defaultValue: "Deployed at Ewha Womans University Medical Center (EUMC)." },
  uc3ColorVariant:  { type: ControlType.Enum,   title: "UC 3 Color",       defaultValue: "amber", options: ["primary", "teal", "amber", "coral"] },
  uc4Tag:           { type: ControlType.String, title: "UC 4 Tag",         defaultValue: "04" },
  uc4Title:         { type: ControlType.String, title: "UC 4 Title",       defaultValue: "Public Sector / Defense \u2014 Mission & Classified Workflow" },
  uc4InputLabel:    { type: ControlType.String, title: "UC 4 Input Label", defaultValue: "Input" },
  uc4Input:         { type: ControlType.String, title: "UC 4 Input",       defaultValue: "military personnel data \u00b7 classified operation details \u00b7 security-grade documents \u00b7 mission log \u00b7 operation brief \u00b7 access-controlled context \u00b7 command workflow", multiLine: true },
  uc4FlowLabel:     { type: ControlType.String, title: "UC 4 Flow Label",  defaultValue: "Flow" },
  uc4Flow:          { type: ControlType.String, title: "UC 4 Flow",        defaultValue: "Capsule (local execution) \u2192 AI drafts intelligence reports + briefing summaries \u2192 restored under command control with full audit trail" },
  uc4CustomerProof: { type: ControlType.String, title: "UC 4 Proof",       defaultValue: "Deployed at Ministry of National Defense (South Korea). On-prem / local execution path required." },
  uc4ColorVariant:  { type: ControlType.Enum,   title: "UC 4 Color",       defaultValue: "coral", options: ["primary", "teal", "amber", "coral"] },
})
