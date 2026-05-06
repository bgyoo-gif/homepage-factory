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

export default function Section05_Finance({
  tag = "Finance / Insurance",
  title = "AI on real claim, policy, and customer data — under bank-grade governance",
  lead = "Insurance and banking workflows are document-heavy and customer-data-heavy: claim narratives, policy details, KYC records, transaction patterns. Sector regulators (FSC, FSS, BaFin, ACPR) increasingly require demonstrable data governance for AI workflows. LLM Capsule keeps customer data inside while AI processes safe capsules.",
  blockedLabel = "Without Capsule",
  blockedH = "Claims AI never reaches production",
  blocked = "Customer name, policy ID, claim narrative cannot reach external LLM. AI drafts on synthetic data; production deployment fails risk review.",
  enabledLabel = "With Capsule",
  enabledH = "AI processes claims at production volume",
  enabled = "Capsule + restoration enables real-volume claim classification, fraud signal generation, and underwriting drafts inside the insurer's existing systems.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Claim classification & triage",
  wf1Desc = "AI-powered intake, severity scoring, fraud signaling",
  wf2Title = "Damage assessment",
  wf2Desc = "Multi-document assessment with vehicle/property data restored",
  wf3Title = "Underwriting draft",
  wf3Desc = "Risk evaluation and premium recommendation drafts",
  wf4Title = "Regulatory submission",
  wf4Desc = "Filing draft and compliance review assist",
  customerLabel = "Customer Proof",
  customerName = "Kyobo · DB Insurance · IBK",
  customerDetail = "AI-powered claim and policy workflows on real customer data. No customer data leaves the institution's environment in raw form. Aligned with sector regulator expectations and SOX where applicable.",
  screenshotImg = "",
  screenshotAlt = "Finance Industry Visual",
  readLabel = "Read: Pilot to production for regulated AI →",
  readHref = "/learn/pilot-to-production-enterprise-ai",
  altBg = false,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s5-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s5-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-amber, #f59e0b);
          background-color: var(--c-amber-soft, #fef3c7);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s5-header { margin-bottom: 32px; }

        .s5-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s5-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s5-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s5-state--enabled { background-color: var(--c-amber-soft, #fef3c7); border-color: transparent; }

        .s5-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s5-state--blocked .s5-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s5-state--enabled .s5-state__label { color: var(--c-amber-dark, #b7790c); }

        .s5-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s5-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-workflows { margin-bottom: 28px; }

        .s5-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-amber, #f59e0b); margin-bottom: 14px;
        }

        .s5-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s5-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-workflows__list li:last-child { border-bottom: none; }

        .s5-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-amber, #f59e0b); font-size: 12px; font-weight: 700;
        }

        .s5-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s5-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s5-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s5-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s5-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s5-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s5-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s5-placeholder { text-align: center; padding: 32px; }
        .s5-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s5-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s5-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s5-footer { margin-top: 20px; }

        .s5-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-amber, #f59e0b);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s5-read-link:hover { border-bottom-color: var(--c-amber, #f59e0b); }

        @container (max-width: 599px) {
          .s5-states { grid-template-columns: 1fr; }
          .s5-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s5-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s5-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s5-root">
        <section className={`s5-section${altBg ? " s5-section--alt" : ""}`}>
          <div className="s5-container">
            <div className="s5-header">
              <span className="s5-tag">{tag}</span>
              <h2 className="s5-h2">{title}</h2>
              <p className="s5-lead">{lead}</p>
            </div>

            <div className="s5-states">
              <div className="s5-state s5-state--blocked">
                <div className="s5-state__label">{blockedLabel}</div>
                <div className="s5-state__h">{blockedH}</div>
                <div className="s5-state__d">{blocked}</div>
              </div>
              <div className="s5-state s5-state--enabled">
                <div className="s5-state__label">{enabledLabel}</div>
                <div className="s5-state__h">{enabledH}</div>
                <div className="s5-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s5-workflows">
              <div className="s5-workflows__h">{workflowsHeading}</div>
              <ul className="s5-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s5-customer">
              <div className="s5-customer__label">{customerLabel}</div>
              <div className="s5-customer__name">{customerName}</div>
              <div className="s5-customer__detail">{customerDetail}</div>
            </div>

            <div className="s5-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s5-placeholder">
                  <div className="s5-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#fef3c7"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s5-placeholder__label">{screenshotAlt}</div>
                  <div className="s5-placeholder__spec">Claim form · capsule → restored · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s5-footer">
              <a className="s5-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_Finance, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "Finance / Insurance" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI on real claim, policy, and customer data — under bank-grade governance", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "Insurance and banking workflows are document-heavy and customer-data-heavy: claim narratives, policy details, KYC records, transaction patterns. Sector regulators (FSC, FSS, BaFin, ACPR) increasingly require demonstrable data governance for AI workflows. LLM Capsule keeps customer data inside while AI processes safe capsules.", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "Claims AI never reaches production" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "Customer name, policy ID, claim narrative cannot reach external LLM. AI drafts on synthetic data; production deployment fails risk review.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "AI processes claims at production volume" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "Capsule + restoration enables real-volume claim classification, fraud signal generation, and underwriting drafts inside the insurer's existing systems.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Claim classification & triage" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "AI-powered intake, severity scoring, fraud signaling" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Damage assessment" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "Multi-document assessment with vehicle/property data restored" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Underwriting draft" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "Risk evaluation and premium recommendation drafts" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "Regulatory submission" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Filing draft and compliance review assist" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "Kyobo · DB Insurance · IBK" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "AI-powered claim and policy workflows on real customer data. No customer data leaves the institution's environment in raw form. Aligned with sector regulator expectations and SOX where applicable.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "Finance Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: Pilot to production for regulated AI →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/learn/pilot-to-production-enterprise-ai" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: false },
})
