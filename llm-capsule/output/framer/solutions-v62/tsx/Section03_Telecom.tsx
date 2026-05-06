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

export default function Section03_Telecom({
  tag = "Telecom",
  title = "AI in the NOC, OSS/BSS, and customer ops — without exposing subscribers",
  lead = "Network operations carry subscriber identities, device IDs, circuit IDs, IP ranges, and configurations. PII guardrails miss this; sovereign data rules block raw transmission. LLM Capsule encapsulates locally and routes capsules to approved external LLMs (Path A) or on-prem models (Path B for stricter workflows).",
  blockedLabel = "Without Capsule",
  blockedH = "NOC AI pilot stalls",
  blocked = "Subscriber IDs, device configs, alarm sequences cannot reach external LLM. Pilot demos on synthetic data, then dies in security review.",
  enabledLabel = "With Capsule",
  enabledH = "RCA + recommendation auto-inserted",
  enabled = "Capsule travels; AI generates RCA on protected data; output restored into the original ticket with real subscriber/device/circuit IDs.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Incident RCA generation",
  wf1Desc = "Real-time root cause analysis on production NOC tickets",
  wf2Title = "Customer impact analysis",
  wf2Desc = "SLA risk and enterprise customer impact summarization",
  wf3Title = "Configuration change drafting",
  wf3Desc = "Network config diff explanation and approval drafts",
  wf4Title = "Runbook generation",
  wf4Desc = "Auto-drafting incident-specific runbooks from history",
  customerLabel = "Customer Proof",
  customerName = "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12",
  customerDetail = "Recognized in Data Security & Governance category. NOC RCA generation and customer-impact analysis on real subscriber, network, and configuration data — all encapsulated locally before any LLM call.",
  screenshotImg = "",
  screenshotAlt = "Telecom Industry Visual",
  readLabel = "Read: How to deploy AI in a telecom NOC →",
  readHref = "/learn/telecom-noc-ai-deployment",
  altBg = false,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s3-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s3-section--alt {
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Tag */
        .s3-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        /* Header */
        .s3-header { margin-bottom: 32px; }

        .s3-h2 {
          font-size: clamp(22px, 2.8cqi, 36px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 14px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 800px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Without / With cards */
        .s3-states {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 28px;
        }

        .s3-state {
          padding: 18px 20px;
          border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s3-state--blocked {
          background-color: var(--c-coral-soft, #fce9e8);
          border-color: transparent;
        }

        .s3-state--enabled {
          background-color: var(--c-primary-soft, #eeebfe);
          border-color: transparent;
        }

        .s3-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .s3-state--blocked .s3-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s3-state--enabled .s3-state__label { color: var(--c-primary-dark, #3b2fbf); }

        .s3-state__h {
          font-size: 14px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s3-state__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Workflows */
        .s3-workflows { margin-bottom: 28px; }

        .s3-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .s3-workflows__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .s3-workflows__list li {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          padding: 10px 0 10px 24px;
          position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-workflows__list li:last-child { border-bottom: none; }

        .s3-workflows__list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 10px;
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
        }

        .s3-workflows__list li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
        }

        /* Customer proof */
        .s3-customer {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px);
          padding: 20px 24px;
          margin-bottom: 20px;
        }

        .s3-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c8c4f7;
          margin-bottom: 6px;
        }

        .s3-customer__name {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .s3-customer__detail {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.55;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Screenshot */
        .s3-screenshot {
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

        .s3-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .s3-placeholder {
          text-align: center;
          padding: 32px;
        }

        .s3-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }

        .s3-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 4px;
        }

        .s3-placeholder__spec {
          font-size: 12px;
          color: var(--c-muted, #6b7280);
          opacity: 0.8;
        }

        /* Footer / read link */
        .s3-footer { margin-top: 20px; }

        .s3-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s;
        }

        .s3-read-link:hover {
          border-bottom-color: var(--c-primary, #5b4fe9);
        }

        @container (max-width: 599px) {
          .s3-states {
            grid-template-columns: 1fr;
          }
          .s3-screenshot {
            min-height: 200px;
          }
        }

        @container (min-width: 768px) {
          .s3-screenshot {
            min-height: 300px;
          }
        }

        @container (min-width: 1024px) {
          .s3-screenshot {
            min-height: 360px;
          }
        }
      `}</style>

      <div className="s3-root">
        <section className={`s3-section${altBg ? " s3-section--alt" : ""}`}>
          <div className="s3-container">
            <div className="s3-header">
              <span className="s3-tag">{tag}</span>
              <h2 className="s3-h2">{title}</h2>
              <p className="s3-lead">{lead}</p>
            </div>

            <div className="s3-states">
              <div className="s3-state s3-state--blocked">
                <div className="s3-state__label">{blockedLabel}</div>
                <div className="s3-state__h">{blockedH}</div>
                <div className="s3-state__d">{blocked}</div>
              </div>
              <div className="s3-state s3-state--enabled">
                <div className="s3-state__label">{enabledLabel}</div>
                <div className="s3-state__h">{enabledH}</div>
                <div className="s3-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s3-workflows">
              <div className="s3-workflows__h">{workflowsHeading}</div>
              <ul className="s3-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s3-customer">
              <div className="s3-customer__label">{customerLabel}</div>
              <div className="s3-customer__name">{customerName}</div>
              <div className="s3-customer__detail">{customerDetail}</div>
            </div>

            <div className="s3-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s3-placeholder">
                  <div className="s3-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#e5e7eb"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s3-placeholder__label">{screenshotAlt}</div>
                  <div className="s3-placeholder__spec">NOC ticket · capsule → restored states · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s3-footer">
              <a className="s3-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_Telecom, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "Telecom" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI in the NOC, OSS/BSS, and customer ops — without exposing subscribers", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "Network operations carry subscriber identities, device IDs, circuit IDs, IP ranges, and configurations. PII guardrails miss this; sovereign data rules block raw transmission. LLM Capsule encapsulates locally and routes capsules to approved external LLMs (Path A) or on-prem models (Path B for stricter workflows).", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "NOC AI pilot stalls" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "Subscriber IDs, device configs, alarm sequences cannot reach external LLM. Pilot demos on synthetic data, then dies in security review.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "RCA + recommendation auto-inserted" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "Capsule travels; AI generates RCA on protected data; output restored into the original ticket with real subscriber/device/circuit IDs.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Incident RCA generation" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "Real-time root cause analysis on production NOC tickets" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Customer impact analysis" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "SLA risk and enterprise customer impact summarization" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Configuration change drafting" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "Network config diff explanation and approval drafts" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "Runbook generation" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Auto-drafting incident-specific runbooks from history" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "Recognized in Data Security & Governance category. NOC RCA generation and customer-impact analysis on real subscriber, network, and configuration data — all encapsulated locally before any LLM call.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "Telecom Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: How to deploy AI in a telecom NOC →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/learn/telecom-noc-ai-deployment" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: false },
})
