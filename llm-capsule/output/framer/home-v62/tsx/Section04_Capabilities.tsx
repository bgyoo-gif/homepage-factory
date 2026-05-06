import { addPropertyControls, ControlType } from "framer"

// CMS: Capabilities — number, externalTitle, description, internalName, colorVariant
interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  sectionDesc?: string
  cap1Number?: string
  cap1ExternalTitle?: string
  cap1Description?: string
  cap1InternalName?: string
  cap1ColorVariant?: string
  cap2Number?: string
  cap2ExternalTitle?: string
  cap2Description?: string
  cap2InternalName?: string
  cap2ColorVariant?: string
  cap3Number?: string
  cap3ExternalTitle?: string
  cap3Description?: string
  cap3InternalName?: string
  cap3ColorVariant?: string
  cap4Number?: string
  cap4ExternalTitle?: string
  cap4Description?: string
  cap4InternalName?: string
  cap4ColorVariant?: string
  cap5Number?: string
  cap5ExternalTitle?: string
  cap5Description?: string
  cap5InternalName?: string
  cap5ColorVariant?: string
  cap6Number?: string
  cap6ExternalTitle?: string
  cap6Description?: string
  cap6InternalName?: string
  cap6ColorVariant?: string
}

const COLOR_MAP: Record<string, string> = {
  primary:        "var(--c-primary, #5b4fe9)",
  teal:           "var(--c-teal, #0ea5a4)",
  amber:          "var(--c-amber, #f59e0b)",
  coral:          "var(--c-coral, #ef5350)",
  dark:           "var(--c-bg-dark, #0f1130)",
  "primary-dark": "var(--c-primary-dark, #3b2fbf)",
}

export default function Section04_Capabilities({
  eyebrow = "CORE CAPABILITIES",
  heading = "Six reasons Capsule works inside real enterprise ",
  headingHighlight = "workflows",
  sectionDesc = "Other tools either block AI usage or destroy document context. LLM Capsule solves both — and adapts to whatever your business protects next.",
  cap1Number = "01",
  cap1ExternalTitle = "Plug into legacy systems without changing the workflow",
  cap1Description = "Air-gapped networks, on-premise servers, telecom-grade platforms, custom data pipelines, ServiceNow / SharePoint / Jira / OT historians — LLM Capsule deploys inside your enterprise as-is. Single API-call addition. No system migration. Your existing workflows, security policies, and configurations stay intact.",
  cap1InternalName = "Enterprise Env Execution",
  cap1ColorVariant = "primary",
  cap2Number = "02",
  cap2ExternalTitle = "Tables, tickets, logs, and runbooks stay readable to AI",
  cap2Description = "Tables, cross-references, configurations, topology graphs, ticket fields, runbook steps, and document hierarchies survive the process intact. AI receives the full operational structure — not broken fragments that produce useless outputs.",
  cap2InternalName = "Structure-Preserving",
  cap2ColorVariant = "teal",
  cap3Number = "03",
  cap3ExternalTitle = "Get real results back",
  cap3Description = "AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, claims documents, and client deliverables. No manual reconstruction. Token maps live only locally.",
  cap3InternalName = "Restoration",
  cap3ColorVariant = "amber",
  cap4Number = "04",
  cap4ExternalTitle = "You define what's sensitive",
  cap4Description = "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, network identifiers, asset references, mission references — any business-specific marker. Context-aware data control adapts to document type, department, and workflow.",
  cap4InternalName = "Enterprise Context",
  cap4ColorVariant = "coral",
  cap5Number = "05",
  cap5ExternalTitle = "Your workflow runs where your data already lives",
  cap5Description = "Sensitive data stays inside your environment. External AI sees only safe placeholders; tokenization plus differential-privacy-based protection make original values practically non-recoverable from outside your boundary. Restoration happens only inside the organization.",
  cap5InternalName = "Zero Exposure",
  cap5ColorVariant = "dark",
  cap6Number = "06",
  cap6ExternalTitle = "You can change the policy tomorrow",
  cap6Description = "Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Define, version, and time-shift confidentiality markers as your business and regulatory landscape evolve — with full audit trail of which marker was protected when.",
  cap6InternalName = "Time-Shifting Policy",
  cap6ColorVariant = "primary-dark",
}: Props) {
  const caps = [
    { number: cap1Number, externalTitle: cap1ExternalTitle, description: cap1Description, internalName: cap1InternalName, colorVariant: cap1ColorVariant },
    { number: cap2Number, externalTitle: cap2ExternalTitle, description: cap2Description, internalName: cap2InternalName, colorVariant: cap2ColorVariant },
    { number: cap3Number, externalTitle: cap3ExternalTitle, description: cap3Description, internalName: cap3InternalName, colorVariant: cap3ColorVariant },
    { number: cap4Number, externalTitle: cap4ExternalTitle, description: cap4Description, internalName: cap4InternalName, colorVariant: cap4ColorVariant },
    { number: cap5Number, externalTitle: cap5ExternalTitle, description: cap5Description, internalName: cap5InternalName, colorVariant: cap5ColorVariant },
    { number: cap6Number, externalTitle: cap6ExternalTitle, description: cap6Description, internalName: cap6InternalName, colorVariant: cap6ColorVariant },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s4-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s4-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s4-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .s4-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s4-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s4-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @container (min-width: 500px) {
          .s4-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @container (min-width: 900px) {
          .s4-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .s4-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .s4-card--highlight {
          background-color: var(--c-primary-soft, #eeebfe);
          border-color: var(--c-primary, #5b4fe9);
        }

        .s4-card__icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--s4-cap-color, var(--c-primary, #5b4fe9));
          color: var(--c-bg, #ffffff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
          flex-shrink: 0;
        }

        .s4-card__title {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
        }

        .s4-card__desc {
          font-size: 12px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        .s4-card__ref {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--c-muted, #6b7280);
          border-top: 1px dashed var(--c-rule, #e5e7eb);
          padding-top: 10px;
          margin-top: auto;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section">
          <div className="s4-container">
            <header className="s4-header">
              <span className="s4-eyebrow">{eyebrow}</span>
              <h2 className="s4-h2">
                {heading}<span>{headingHighlight}</span>
              </h2>
              <p className="s4-desc">{sectionDesc}</p>
            </header>

            <div className="s4-grid">
              {caps.map((cap, i) => {
                const color = COLOR_MAP[cap.colorVariant] || COLOR_MAP["primary"]
                const isHighlight = cap.colorVariant === "primary-dark"
                return (
                  <article
                    key={i}
                    className={`s4-card${isHighlight ? " s4-card--highlight" : ""}`}
                    style={{ "--s4-cap-color": color } as React.CSSProperties}
                  >
                    <div className="s4-card__icon">{cap.number}</div>
                    <h3 className="s4-card__title">{cap.externalTitle}</h3>
                    <p className="s4-card__desc">{cap.description}</p>
                    <div className="s4-card__ref">Internal: {cap.internalName}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_Capabilities, {
  eyebrow:           { type: ControlType.String, title: "Eyebrow",        defaultValue: "CORE CAPABILITIES" },
  heading:           { type: ControlType.String, title: "H2 Text",        defaultValue: "Six reasons Capsule works inside real enterprise " },
  headingHighlight:  { type: ControlType.String, title: "H2 Highlight",   defaultValue: "workflows" },
  sectionDesc:       { type: ControlType.String, title: "Description",    defaultValue: "Other tools either block AI usage or destroy document context. LLM Capsule solves both — and adapts to whatever your business protects next.", multiLine: true },
  cap1Number:        { type: ControlType.String, title: "Cap 1 Number",   defaultValue: "01" },
  cap1ExternalTitle: { type: ControlType.String, title: "Cap 1 Title",    defaultValue: "Plug into legacy systems without changing the workflow" },
  cap1Description:   { type: ControlType.String, title: "Cap 1 Desc",     defaultValue: "Air-gapped networks, on-premise servers, telecom-grade platforms, custom data pipelines, ServiceNow / SharePoint / Jira / OT historians — LLM Capsule deploys inside your enterprise as-is. Single API-call addition. No system migration. Your existing workflows, security policies, and configurations stay intact.", multiLine: true },
  cap1InternalName:  { type: ControlType.String, title: "Cap 1 Internal", defaultValue: "Enterprise Env Execution" },
  cap1ColorVariant:  { type: ControlType.Enum,   title: "Cap 1 Color",    defaultValue: "primary", options: ["primary","teal","amber","coral","dark","primary-dark"] },
  cap2Number:        { type: ControlType.String, title: "Cap 2 Number",   defaultValue: "02" },
  cap2ExternalTitle: { type: ControlType.String, title: "Cap 2 Title",    defaultValue: "Tables, tickets, logs, and runbooks stay readable to AI" },
  cap2Description:   { type: ControlType.String, title: "Cap 2 Desc",     defaultValue: "Tables, cross-references, configurations, topology graphs, ticket fields, runbook steps, and document hierarchies survive the process intact. AI receives the full operational structure — not broken fragments that produce useless outputs.", multiLine: true },
  cap2InternalName:  { type: ControlType.String, title: "Cap 2 Internal", defaultValue: "Structure-Preserving" },
  cap2ColorVariant:  { type: ControlType.Enum,   title: "Cap 2 Color",    defaultValue: "teal", options: ["primary","teal","amber","coral","dark","primary-dark"] },
  cap3Number:        { type: ControlType.String, title: "Cap 3 Number",   defaultValue: "03" },
  cap3ExternalTitle: { type: ControlType.String, title: "Cap 3 Title",    defaultValue: "Get real results back" },
  cap3Description:   { type: ControlType.String, title: "Cap 3 Desc",     defaultValue: "AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, claims documents, and client deliverables. No manual reconstruction. Token maps live only locally.", multiLine: true },
  cap3InternalName:  { type: ControlType.String, title: "Cap 3 Internal", defaultValue: "Restoration" },
  cap3ColorVariant:  { type: ControlType.Enum,   title: "Cap 3 Color",    defaultValue: "amber", options: ["primary","teal","amber","coral","dark","primary-dark"] },
  cap4Number:        { type: ControlType.String, title: "Cap 4 Number",   defaultValue: "04" },
  cap4ExternalTitle: { type: ControlType.String, title: "Cap 4 Title",    defaultValue: "You define what's sensitive" },
  cap4Description:   { type: ControlType.String, title: "Cap 4 Desc",     defaultValue: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, network identifiers, asset references, mission references — any business-specific marker. Context-aware data control adapts to document type, department, and workflow.", multiLine: true },
  cap4InternalName:  { type: ControlType.String, title: "Cap 4 Internal", defaultValue: "Enterprise Context" },
  cap4ColorVariant:  { type: ControlType.Enum,   title: "Cap 4 Color",    defaultValue: "coral", options: ["primary","teal","amber","coral","dark","primary-dark"] },
  cap5Number:        { type: ControlType.String, title: "Cap 5 Number",   defaultValue: "05" },
  cap5ExternalTitle: { type: ControlType.String, title: "Cap 5 Title",    defaultValue: "Your workflow runs where your data already lives" },
  cap5Description:   { type: ControlType.String, title: "Cap 5 Desc",     defaultValue: "Sensitive data stays inside your environment. External AI sees only safe placeholders; tokenization plus differential-privacy-based protection make original values practically non-recoverable from outside your boundary. Restoration happens only inside the organization.", multiLine: true },
  cap5InternalName:  { type: ControlType.String, title: "Cap 5 Internal", defaultValue: "Zero Exposure" },
  cap5ColorVariant:  { type: ControlType.Enum,   title: "Cap 5 Color",    defaultValue: "dark", options: ["primary","teal","amber","coral","dark","primary-dark"] },
  cap6Number:        { type: ControlType.String, title: "Cap 6 Number",   defaultValue: "06" },
  cap6ExternalTitle: { type: ControlType.String, title: "Cap 6 Title",    defaultValue: "You can change the policy tomorrow" },
  cap6Description:   { type: ControlType.String, title: "Cap 6 Desc",     defaultValue: "Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Define, version, and time-shift confidentiality markers as your business and regulatory landscape evolve — with full audit trail of which marker was protected when.", multiLine: true },
  cap6InternalName:  { type: ControlType.String, title: "Cap 6 Internal", defaultValue: "Time-Shifting Policy" },
  cap6ColorVariant:  { type: ControlType.Enum,   title: "Cap 6 Color",    defaultValue: "primary-dark", options: ["primary","teal","amber","coral","dark","primary-dark"] },
})
