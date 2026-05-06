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

export default function Section06_Defense({
  tag = "Public Sector / Defense",
  title = "AI on classified mission workflows — fully on-prem, zero external transmission",
  lead = "Defense, intelligence, and public-sector workflows demand zero external transmission. No external LLM endpoint is acceptable. LLM Capsule's Path B (on-prem local lightweight model) runs entirely inside the command's network — same Capsule instance, same audit framework, no external reach.",
  blockedLabel = "Without Capsule",
  blockedH = "AI categorically excluded",
  blocked = "External LLM use is not permitted. Mission workflows continue without AI support; productivity gap persists.",
  enabledLabel = "With Capsule",
  enabledH = "AI inside command boundary",
  enabled = "Quantized on-prem model + Capsule encapsulation + local audit. AI drafts mission briefs, intelligence summaries, and operational reports — entirely within the command.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Mission brief drafting",
  wf1Desc = "AI-drafted operational briefs from multi-source intelligence",
  wf2Title = "Operational report summarization",
  wf2Desc = "Multi-format report consolidation and impact synthesis",
  wf3Title = "Doctrine reference assist",
  wf3Desc = "Doctrine and procedure lookup with classification protection",
  wf4Title = "After-action review draft",
  wf4Desc = "Post-operation review with mission identifiers protected",
  customerLabel = "Customer Proof",
  customerName = "Ministry of National Defense (Korea)",
  customerDetail = "Mission-grade workflows on Path B (on-prem local) with full audit feed to command-level governance. Mission references, geographic identifiers, and unit data encapsulated; restoration tightly scoped under RBAC.",
  screenshotImg = "",
  screenshotAlt = "Defense Industry Visual",
  readLabel = "Read: Sovereign AI architecture →",
  readHref = "/learn/sovereign-ai-european-enterprises",
  altBg = true,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s6-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s6-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Defense: ink tag */
        .s6-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s6-header { margin-bottom: 32px; }

        .s6-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s6-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s6-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s6-state--enabled { background-color: var(--c-bg-soft, #f7f8fb); border-color: var(--c-rule, #e5e7eb); }

        .s6-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s6-state--blocked .s6-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s6-state--enabled .s6-state__label { color: var(--c-ink-soft, #3a3d5e); }

        .s6-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s6-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-workflows { margin-bottom: 28px; }

        .s6-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-ink, #0f1130); margin-bottom: 14px;
        }

        .s6-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s6-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s6-workflows__list li:last-child { border-bottom: none; }

        .s6-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-ink, #0f1130); font-size: 12px; font-weight: 700;
        }

        .s6-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s6-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s6-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s6-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s6-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        /* Defense screenshot: dark */
        .s6-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-dark, #0f1130);
          border: 1px solid var(--c-bg-dark-2, #1b1d4a);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s6-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s6-placeholder { text-align: center; padding: 32px; }
        .s6-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s6-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 4px; opacity: 0.6;
        }
        .s6-placeholder__spec { font-size: 12px; color: #c8c4f7; opacity: 0.4; }

        .s6-footer { margin-top: 20px; }

        .s6-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-ink, #0f1130);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s6-read-link:hover { border-bottom-color: var(--c-ink, #0f1130); }

        @container (max-width: 599px) {
          .s6-states { grid-template-columns: 1fr; }
          .s6-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s6-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s6-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s6-root">
        <section className={`s6-section${altBg ? " s6-section--alt" : ""}`}>
          <div className="s6-container">
            <div className="s6-header">
              <span className="s6-tag">{tag}</span>
              <h2 className="s6-h2">{title}</h2>
              <p className="s6-lead">{lead}</p>
            </div>

            <div className="s6-states">
              <div className="s6-state s6-state--blocked">
                <div className="s6-state__label">{blockedLabel}</div>
                <div className="s6-state__h">{blockedH}</div>
                <div className="s6-state__d">{blocked}</div>
              </div>
              <div className="s6-state s6-state--enabled">
                <div className="s6-state__label">{enabledLabel}</div>
                <div className="s6-state__h">{enabledH}</div>
                <div className="s6-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s6-workflows">
              <div className="s6-workflows__h">{workflowsHeading}</div>
              <ul className="s6-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s6-customer">
              <div className="s6-customer__label">{customerLabel}</div>
              <div className="s6-customer__name">{customerName}</div>
              <div className="s6-customer__detail">{customerDetail}</div>
            </div>

            <div className="s6-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s6-placeholder">
                  <div className="s6-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#1b1d4a"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#c8c4f7" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#c8c4f7" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#c8c4f7" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s6-placeholder__label">{screenshotAlt}</div>
                  <div className="s6-placeholder__spec">Mission brief · dark theme · Path B + audit badges · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s6-footer">
              <a className="s6-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_Defense, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "Public Sector / Defense" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI on classified mission workflows — fully on-prem, zero external transmission", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "Defense, intelligence, and public-sector workflows demand zero external transmission. No external LLM endpoint is acceptable. LLM Capsule's Path B (on-prem local lightweight model) runs entirely inside the command's network — same Capsule instance, same audit framework, no external reach.", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "AI categorically excluded" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "External LLM use is not permitted. Mission workflows continue without AI support; productivity gap persists.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "AI inside command boundary" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "Quantized on-prem model + Capsule encapsulation + local audit. AI drafts mission briefs, intelligence summaries, and operational reports — entirely within the command.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Mission brief drafting" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "AI-drafted operational briefs from multi-source intelligence" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Operational report summarization" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "Multi-format report consolidation and impact synthesis" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Doctrine reference assist" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "Doctrine and procedure lookup with classification protection" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "After-action review draft" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Post-operation review with mission identifiers protected" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "Ministry of National Defense (Korea)" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "Mission-grade workflows on Path B (on-prem local) with full audit feed to command-level governance. Mission references, geographic identifiers, and unit data encapsulated; restoration tightly scoped under RBAC.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "Defense Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: Sovereign AI architecture →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/learn/sovereign-ai-european-enterprises" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: true },
})
