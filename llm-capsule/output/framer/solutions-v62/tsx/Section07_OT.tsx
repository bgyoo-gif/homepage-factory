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

export default function Section07_OT({
  tag = "OT / Industrial Cyber",
  title = "AI in OT environments — without exposing asset identifiers or process data",
  lead = "OT (operational technology) workflows protect mission-critical industrial assets — power, manufacturing, oil & gas, water. PLCs, SCADA tags, asset IDs, and process variables can't leak. LLM Capsule encapsulates OT identifiers locally; AI assists with anomaly explanation, runbook drafting, and incident response.",
  blockedLabel = "Without Capsule",
  blockedH = "OT teams blocked from AI",
  blocked = "Asset IDs, process variables, vendor configurations cannot reach external LLM. OT operators have no AI support for incident analysis.",
  enabledLabel = "With Capsule",
  enabledH = "AI assist for OT incident response",
  enabled = "OT identifiers encapsulated. AI drafts incident analysis, anomaly explanation, and recommended runbook on protected capsule; restored locally for OT operators.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Anomaly explanation",
  wf1Desc = "AI-generated explanation of detected OT anomalies",
  wf2Title = "Asset documentation",
  wf2Desc = "Auto-drafting asset and process documentation",
  wf3Title = "Vulnerability triage",
  wf3Desc = "Vulnerability impact analysis on protected asset data",
  wf4Title = "Vendor advisory parsing",
  wf4Desc = "Vendor security advisory parsing and impact mapping",
  customerLabel = "Customer Proof",
  customerName = "Claroty",
  customerDetail = "Industrial cybersecurity workflows with OT asset identifiers and process variables encapsulated locally. AI assists analysts without exposing customer infrastructure data.",
  screenshotImg = "",
  screenshotAlt = "OT Industry Visual",
  readLabel = "Read: AI on network & operations data →",
  readHref = "/learn/ai-on-network-operations-data",
  altBg = false,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s7-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s7-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s7-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s7-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s7-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-coral, #ef5350);
          background-color: var(--c-coral-soft, #fce9e8);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s7-header { margin-bottom: 32px; }

        .s7-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s7-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s7-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s7-state--enabled { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }

        .s7-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s7-state--blocked .s7-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s7-state--enabled .s7-state__label { color: var(--c-coral, #ef5350); }

        .s7-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s7-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-workflows { margin-bottom: 28px; }

        .s7-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-coral, #ef5350); margin-bottom: 14px;
        }

        .s7-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s7-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-workflows__list li:last-child { border-bottom: none; }

        .s7-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-coral, #ef5350); font-size: 12px; font-weight: 700;
        }

        .s7-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s7-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s7-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s7-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s7-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s7-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s7-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s7-placeholder { text-align: center; padding: 32px; }
        .s7-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s7-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s7-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s7-footer { margin-top: 20px; }

        .s7-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-coral, #ef5350);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s7-read-link:hover { border-bottom-color: var(--c-coral, #ef5350); }

        @container (max-width: 599px) {
          .s7-states { grid-template-columns: 1fr; }
          .s7-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s7-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s7-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s7-root">
        <section className={`s7-section${altBg ? " s7-section--alt" : ""}`}>
          <div className="s7-container">
            <div className="s7-header">
              <span className="s7-tag">{tag}</span>
              <h2 className="s7-h2">{title}</h2>
              <p className="s7-lead">{lead}</p>
            </div>

            <div className="s7-states">
              <div className="s7-state s7-state--blocked">
                <div className="s7-state__label">{blockedLabel}</div>
                <div className="s7-state__h">{blockedH}</div>
                <div className="s7-state__d">{blocked}</div>
              </div>
              <div className="s7-state s7-state--enabled">
                <div className="s7-state__label">{enabledLabel}</div>
                <div className="s7-state__h">{enabledH}</div>
                <div className="s7-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s7-workflows">
              <div className="s7-workflows__h">{workflowsHeading}</div>
              <ul className="s7-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s7-customer">
              <div className="s7-customer__label">{customerLabel}</div>
              <div className="s7-customer__name">{customerName}</div>
              <div className="s7-customer__detail">{customerDetail}</div>
            </div>

            <div className="s7-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s7-placeholder">
                  <div className="s7-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#fce9e8"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#ef5350" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#ef5350" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#ef5350" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s7-placeholder__label">{screenshotAlt}</div>
                  <div className="s7-placeholder__spec">Industrial monitoring console · anomaly + AI explanation · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s7-footer">
              <a className="s7-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_OT, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "OT / Industrial Cyber" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI in OT environments — without exposing asset identifiers or process data", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "OT (operational technology) workflows protect mission-critical industrial assets — power, manufacturing, oil & gas, water. PLCs, SCADA tags, asset IDs, and process variables can't leak. LLM Capsule encapsulates OT identifiers locally; AI assists with anomaly explanation, runbook drafting, and incident response.", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "OT teams blocked from AI" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "Asset IDs, process variables, vendor configurations cannot reach external LLM. OT operators have no AI support for incident analysis.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "AI assist for OT incident response" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "OT identifiers encapsulated. AI drafts incident analysis, anomaly explanation, and recommended runbook on protected capsule; restored locally for OT operators.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Anomaly explanation" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "AI-generated explanation of detected OT anomalies" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Asset documentation" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "Auto-drafting asset and process documentation" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Vulnerability triage" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "Vulnerability impact analysis on protected asset data" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "Vendor advisory parsing" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Vendor security advisory parsing and impact mapping" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "Claroty" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "Industrial cybersecurity workflows with OT asset identifiers and process variables encapsulated locally. AI assists analysts without exposing customer infrastructure data.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "OT Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: AI on network & operations data →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/learn/ai-on-network-operations-data" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: false },
})
