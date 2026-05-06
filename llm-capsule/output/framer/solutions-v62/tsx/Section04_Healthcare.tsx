import { addPropertyControls, ControlType } from "framer"

interface Props {
  tag?: string
  title?: string
  lead?: string
  blockedLabel?: string
  blockedH?: string
  blocked?: string
  enabledLabel?: string
  enabledH?: string
  enabled?: string
  workflowsHeading?: string
  wf1Title?: string
  wf1Desc?: string
  wf2Title?: string
  wf2Desc?: string
  wf3Title?: string
  wf3Desc?: string
  wf4Title?: string
  wf4Desc?: string
  customerLabel?: string
  customerName?: string
  customerDetail?: string
  screenshotImg?: string
  screenshotAlt?: string
  readLabel?: string
  readHref?: string
  altBg?: boolean
}

export default function Section04_Healthcare({
  tag = "Healthcare",
  title = "AI for clinical workflows — PHI never leaves the hospital network",
  lead = "Clinical AI promises 30-50% reduction in documentation burden. But PHI cannot leave the hospital under HIPAA, GDPR, or K-PIPA. PII guardrails miss workflow context, lab sequences, and free-text clinical notes. LLM Capsule encapsulates patient identifiers, MRN, diagnoses, and clinical context locally; restoration happens inside the EHR.",
  blockedLabel = "Without Capsule",
  blockedH = "Documentation pilot blocked",
  blocked = "Privacy officer blocks deployment. Physicians use shadow AI on personal devices; productivity tasted in pilot disappears.",
  enabledLabel = "With Capsule",
  enabledH = "AI drafts inside Epic / Cerner / HIS",
  enabled = "PHI encapsulated; AI drafts radiology summaries and discharge notes; outputs auto-restore in the EHR. Audit feeds the privacy office.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Radiology report drafting",
  wf1Desc = "AI-drafted impressions from imaging studies + clinical history",
  wf2Title = "Discharge summary drafting",
  wf2Desc = "Multi-source summarization across admission, treatment, and follow-up",
  wf3Title = "Clinical coding assist",
  wf3Desc = "ICD-10 / CPT code suggestion with audit trail",
  wf4Title = "Care coordination notes",
  wf4Desc = "Multi-disciplinary handoff drafts with PHI protected",
  customerLabel = "Customer Proof",
  customerName = "Ewha Womans University Medical Center (EUMC)",
  customerDetail = "Clinical workflow summarization with PHI never traversing the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. HIPAA-aligned compliance reporting.",
  screenshotImg = "",
  screenshotAlt = "Healthcare Industry Visual",
  readLabel = "Read: How to deploy AI in a hospital →",
  readHref = "/learn/hospital-ai-deployment-phi-protection",
  altBg = true,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s4-section--alt {
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s4-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c-teal, #0ea5a4);
          background-color: var(--c-teal-soft, #e6f7f6);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .s4-header { margin-bottom: 32px; }

        .s4-h2 {
          font-size: clamp(22px, 2.8cqi, 36px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 14px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 800px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-states {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 28px;
        }

        .s4-state {
          padding: 18px 20px;
          border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s4-state--blocked {
          background-color: var(--c-coral-soft, #fce9e8);
          border-color: transparent;
        }

        .s4-state--enabled {
          background-color: var(--c-teal-soft, #e6f7f6);
          border-color: transparent;
        }

        .s4-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .s4-state--blocked .s4-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s4-state--enabled .s4-state__label { color: var(--c-teal-dark, #0b7f7e); }

        .s4-state__h {
          font-size: 14px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s4-state__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-workflows { margin-bottom: 28px; }

        .s4-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-teal, #0ea5a4);
          margin-bottom: 14px;
        }

        .s4-workflows__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .s4-workflows__list li {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          padding: 10px 0 10px 24px;
          position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-workflows__list li:last-child { border-bottom: none; }

        .s4-workflows__list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 10px;
          color: var(--c-teal, #0ea5a4);
          font-size: 12px;
          font-weight: 700;
        }

        .s4-workflows__list li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
        }

        .s4-customer {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          padding: 20px 24px;
          margin-bottom: 20px;
        }

        .s4-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c8c4f7;
          margin-bottom: 6px;
        }

        .s4-customer__name {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s4-customer__detail {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-screenshot {
          margin-top: 28px;
          border-radius: var(--r-lg, 16px);
          overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s4-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .s4-placeholder { text-align: center; padding: 32px; }
        .s4-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s4-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s4-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s4-footer { margin-top: 20px; }

        .s4-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-teal, #0ea5a4);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s;
        }

        .s4-read-link:hover { border-bottom-color: var(--c-teal, #0ea5a4); }

        @container (max-width: 599px) {
          .s4-states { grid-template-columns: 1fr; }
          .s4-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s4-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s4-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s4-root">
        <section className={`s4-section${altBg ? " s4-section--alt" : ""}`}>
          <div className="s4-container">
            <div className="s4-header">
              <span className="s4-tag">{tag}</span>
              <h2 className="s4-h2">{title}</h2>
              <p className="s4-lead">{lead}</p>
            </div>

            <div className="s4-states">
              <div className="s4-state s4-state--blocked">
                <div className="s4-state__label">{blockedLabel}</div>
                <div className="s4-state__h">{blockedH}</div>
                <div className="s4-state__d">{blocked}</div>
              </div>
              <div className="s4-state s4-state--enabled">
                <div className="s4-state__label">{enabledLabel}</div>
                <div className="s4-state__h">{enabledH}</div>
                <div className="s4-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s4-workflows">
              <div className="s4-workflows__h">{workflowsHeading}</div>
              <ul className="s4-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s4-customer">
              <div className="s4-customer__label">{customerLabel}</div>
              <div className="s4-customer__name">{customerName}</div>
              <div className="s4-customer__detail">{customerDetail}</div>
            </div>

            <div className="s4-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s4-placeholder">
                  <div className="s4-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#e6f7f6"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#0ea5a4" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s4-placeholder__label">{screenshotAlt}</div>
                  <div className="s4-placeholder__spec">EHR radiology report drafting · light theme · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s4-footer">
              <a className="s4-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_Healthcare, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "Healthcare" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI for clinical workflows — PHI never leaves the hospital network", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "Clinical AI promises 30-50% reduction in documentation burden. But PHI cannot leave the hospital under HIPAA, GDPR, or K-PIPA. PII guardrails miss workflow context, lab sequences, and free-text clinical notes. LLM Capsule encapsulates patient identifiers, MRN, diagnoses, and clinical context locally; restoration happens inside the EHR.", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "Documentation pilot blocked" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "Privacy officer blocks deployment. Physicians use shadow AI on personal devices; productivity tasted in pilot disappears.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "AI drafts inside Epic / Cerner / HIS" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "PHI encapsulated; AI drafts radiology summaries and discharge notes; outputs auto-restore in the EHR. Audit feeds the privacy office.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Radiology report drafting" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "AI-drafted impressions from imaging studies + clinical history" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Discharge summary drafting" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "Multi-source summarization across admission, treatment, and follow-up" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Clinical coding assist" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "ICD-10 / CPT code suggestion with audit trail" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "Care coordination notes" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Multi-disciplinary handoff drafts with PHI protected" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "Ewha Womans University Medical Center (EUMC)" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "Clinical workflow summarization with PHI never traversing the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. HIPAA-aligned compliance reporting.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "Healthcare Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: How to deploy AI in a hospital →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/learn/hospital-ai-deployment-phi-protection" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: true },
})
