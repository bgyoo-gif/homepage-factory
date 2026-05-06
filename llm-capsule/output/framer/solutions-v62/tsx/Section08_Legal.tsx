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

export default function Section08_Legal({
  tag = "Legal",
  title = "AI for matter management — privilege preserved, deal terms protected",
  lead = "Legal workflows process privileged material — contracts, deal terms, M&A code names, litigation strategy, regulatory filings. Privilege preservation is non-negotiable. LLM Capsule encapsulates parties, deal terms, and privileged content locally; AI summarizes and analyzes the protected capsule; restoration happens inside the firm's matter management system.",
  blockedLabel = "Without Capsule",
  blockedH = "Outside-counsel AI blocked",
  blocked = "Deal terms, party names, code names cannot reach external LLM. Associates fall back to manual review; AI value never materializes.",
  enabledLabel = "With Capsule",
  enabledH = "AI assist inside privileged workflow",
  enabled = "Parties + terms encapsulated; AI drafts summaries, risk analyses, and clause comparisons; outputs restored in matter management with privilege preserved.",
  workflowsHeading = "Production Workflows",
  wf1Title = "Confidential contract review",
  wf1Desc = "AI-drafted risk summary across long-form contracts",
  wf2Title = "Due diligence summarization",
  wf2Desc = "Multi-document M&A diligence with deal data protected",
  wf3Title = "Regulatory filing draft",
  wf3Desc = "Filing draft and compliance check with sensitive content masked",
  wf4Title = "Matter triage",
  wf4Desc = "Initial matter intake and routing with privileged data inside",
  customerLabel = "Customer Proof",
  customerName = "Shin&Kim",
  customerDetail = "One of Korea's largest law firms. AI assist on privileged matter workflows with parties, deal terms, and code names encapsulated. Privilege preservation under firm governance.",
  screenshotImg = "",
  screenshotAlt = "Legal Industry Visual",
  readLabel = "Read: AI enablement data layer (definition) →",
  readHref = "/glossary/ai-enablement-data-layer",
  altBg = true,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s8-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s8-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
        }

        .s8-section--alt { background-color: var(--c-bg-soft, #f7f8fb); }

        .s8-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        /* Legal: primary-dark tag */
        .s8-tag {
          display: inline-block;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--c-primary-dark, #3b2fbf);
          background-color: var(--c-primary-soft, #eeebfe);
          padding: 4px 12px; border-radius: 999px; margin-bottom: 16px;
        }

        .s8-header { margin-bottom: 32px; }

        .s8-h2 {
          font-size: clamp(22px, 2.8cqi, 36px); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130); margin-bottom: 14px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-lead {
          font-size: clamp(15px, 1.3cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e); line-height: 1.65; max-width: 800px;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-states {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px; margin-bottom: 28px;
        }

        .s8-state {
          padding: 18px 20px; border-radius: var(--r-md, 10px);
          background-color: var(--c-bg, #ffffff); border: 1px solid var(--c-rule, #e5e7eb);
        }

        .s8-state--blocked { background-color: var(--c-coral-soft, #fce9e8); border-color: transparent; }
        .s8-state--enabled { background-color: var(--c-primary-soft, #eeebfe); border-color: transparent; }

        .s8-state__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 8px;
        }

        .s8-state--blocked .s8-state__label { color: var(--c-coral-dark, #c73e3a); }
        .s8-state--enabled .s8-state__label { color: var(--c-primary-dark, #3b2fbf); }

        .s8-state__h {
          font-size: 14px; font-weight: 700;
          color: var(--c-ink, #0f1130); margin-bottom: 6px; line-height: 1.3;
        }

        .s8-state__d {
          font-size: 13px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-workflows { margin-bottom: 28px; }

        .s8-workflows__h {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-primary-dark, #3b2fbf); margin-bottom: 14px;
        }

        .s8-workflows__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }

        .s8-workflows__list li {
          font-size: 14px; color: var(--c-ink-soft, #3a3d5e); line-height: 1.55;
          padding: 10px 0 10px 24px; position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-workflows__list li:last-child { border-bottom: none; }

        .s8-workflows__list li::before {
          content: '▸'; position: absolute; left: 0; top: 10px;
          color: var(--c-primary-dark, #3b2fbf); font-size: 12px; font-weight: 700;
        }

        .s8-workflows__list li strong {
          color: var(--c-ink, #0f1130); font-weight: 700; display: block; margin-bottom: 2px;
        }

        .s8-customer {
          background-color: var(--c-bg-dark, #0f1130); color: var(--c-bg, #ffffff);
          border-radius: var(--r-md, 10px); padding: 20px 24px; margin-bottom: 20px;
        }

        .s8-customer__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8c4f7; margin-bottom: 6px;
        }

        .s8-customer__name {
          font-size: 16px; font-weight: 700; color: var(--c-bg, #ffffff);
          margin-bottom: 6px; line-height: 1.3;
        }

        .s8-customer__detail {
          font-size: 13px; color: #c8c4f7; line-height: 1.55;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .s8-screenshot {
          margin-top: 28px; border-radius: var(--r-lg, 16px); overflow: hidden;
          background-color: var(--c-bg-soft, #f7f8fb); border: 1px solid var(--c-rule, #e5e7eb);
          min-height: 240px; display: flex; align-items: center; justify-content: center;
        }

        .s8-screenshot img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .s8-placeholder { text-align: center; padding: 32px; }
        .s8-placeholder__icon { font-size: 32px; margin-bottom: 12px; opacity: 0.3; }
        .s8-placeholder__label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--c-muted, #6b7280); margin-bottom: 4px;
        }
        .s8-placeholder__spec { font-size: 12px; color: var(--c-muted, #6b7280); opacity: 0.8; }

        .s8-footer { margin-top: 20px; }

        .s8-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--c-primary-dark, #3b2fbf);
          text-decoration: none; padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: border-color 0.15s;
        }

        .s8-read-link:hover { border-bottom-color: var(--c-primary-dark, #3b2fbf); }

        @container (max-width: 599px) {
          .s8-states { grid-template-columns: 1fr; }
          .s8-screenshot { min-height: 200px; }
        }

        @container (min-width: 768px) { .s8-screenshot { min-height: 300px; } }
        @container (min-width: 1024px) { .s8-screenshot { min-height: 360px; } }
      `}</style>

      <div className="s8-root">
        <section className={`s8-section${altBg ? " s8-section--alt" : ""}`}>
          <div className="s8-container">
            <div className="s8-header">
              <span className="s8-tag">{tag}</span>
              <h2 className="s8-h2">{title}</h2>
              <p className="s8-lead">{lead}</p>
            </div>

            <div className="s8-states">
              <div className="s8-state s8-state--blocked">
                <div className="s8-state__label">{blockedLabel}</div>
                <div className="s8-state__h">{blockedH}</div>
                <div className="s8-state__d">{blocked}</div>
              </div>
              <div className="s8-state s8-state--enabled">
                <div className="s8-state__label">{enabledLabel}</div>
                <div className="s8-state__h">{enabledH}</div>
                <div className="s8-state__d">{enabled}</div>
              </div>
            </div>

            <div className="s8-workflows">
              <div className="s8-workflows__h">{workflowsHeading}</div>
              <ul className="s8-workflows__list">
                <li><strong>{wf1Title}</strong>{wf1Desc}</li>
                <li><strong>{wf2Title}</strong>{wf2Desc}</li>
                <li><strong>{wf3Title}</strong>{wf3Desc}</li>
                <li><strong>{wf4Title}</strong>{wf4Desc}</li>
              </ul>
            </div>

            <div className="s8-customer">
              <div className="s8-customer__label">{customerLabel}</div>
              <div className="s8-customer__name">{customerName}</div>
              <div className="s8-customer__detail">{customerDetail}</div>
            </div>

            <div className="s8-screenshot">
              {screenshotImg ? (
                <img src={screenshotImg} alt={screenshotAlt} />
              ) : (
                <div className="s8-placeholder">
                  <div className="s8-placeholder__icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="8" fill="#eeebfe"/>
                      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#3b2fbf" strokeWidth="1.5"/>
                      <path d="M14 30h12" stroke="#3b2fbf" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 26v4" stroke="#3b2fbf" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="s8-placeholder__label">{screenshotAlt}</div>
                  <div className="s8-placeholder__spec">Contract review · privilege preserved badge · 16:10 · ~640×400px</div>
                </div>
              )}
            </div>

            <div className="s8-footer">
              <a className="s8-read-link" href={readHref}>{readLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_Legal, {
  tag:              { type: ControlType.String,  title: "Tag",               defaultValue: "Legal" },
  title:            { type: ControlType.String,  title: "Title",             defaultValue: "AI for matter management — privilege preserved, deal terms protected", displayTextArea: true },
  lead:             { type: ControlType.String,  title: "Lead",              defaultValue: "Legal workflows process privileged material — contracts, deal terms, M&A code names, litigation strategy, regulatory filings. Privilege preservation is non-negotiable. LLM Capsule encapsulates parties, deal terms, and privileged content locally; AI summarizes and analyzes the protected capsule; restoration happens inside the firm's matter management system.", displayTextArea: true },
  blockedLabel:     { type: ControlType.String,  title: "Blocked Label",     defaultValue: "Without Capsule" },
  blockedH:         { type: ControlType.String,  title: "Blocked Heading",   defaultValue: "Outside-counsel AI blocked" },
  blocked:          { type: ControlType.String,  title: "Blocked Text",      defaultValue: "Deal terms, party names, code names cannot reach external LLM. Associates fall back to manual review; AI value never materializes.", displayTextArea: true },
  enabledLabel:     { type: ControlType.String,  title: "Enabled Label",     defaultValue: "With Capsule" },
  enabledH:         { type: ControlType.String,  title: "Enabled Heading",   defaultValue: "AI assist inside privileged workflow" },
  enabled:          { type: ControlType.String,  title: "Enabled Text",      defaultValue: "Parties + terms encapsulated; AI drafts summaries, risk analyses, and clause comparisons; outputs restored in matter management with privilege preserved.", displayTextArea: true },
  workflowsHeading: { type: ControlType.String,  title: "Workflows Heading", defaultValue: "Production Workflows" },
  wf1Title:         { type: ControlType.String,  title: "WF 1 Title",        defaultValue: "Confidential contract review" },
  wf1Desc:          { type: ControlType.String,  title: "WF 1 Desc",         defaultValue: "AI-drafted risk summary across long-form contracts" },
  wf2Title:         { type: ControlType.String,  title: "WF 2 Title",        defaultValue: "Due diligence summarization" },
  wf2Desc:          { type: ControlType.String,  title: "WF 2 Desc",         defaultValue: "Multi-document M&A diligence with deal data protected" },
  wf3Title:         { type: ControlType.String,  title: "WF 3 Title",        defaultValue: "Regulatory filing draft" },
  wf3Desc:          { type: ControlType.String,  title: "WF 3 Desc",         defaultValue: "Filing draft and compliance check with sensitive content masked" },
  wf4Title:         { type: ControlType.String,  title: "WF 4 Title",        defaultValue: "Matter triage" },
  wf4Desc:          { type: ControlType.String,  title: "WF 4 Desc",         defaultValue: "Initial matter intake and routing with privileged data inside" },
  customerLabel:    { type: ControlType.String,  title: "Customer Label",    defaultValue: "Customer Proof" },
  customerName:     { type: ControlType.String,  title: "Customer Name",     defaultValue: "Shin&Kim" },
  customerDetail:   { type: ControlType.String,  title: "Customer Detail",   defaultValue: "One of Korea's largest law firms. AI assist on privileged matter workflows with parties, deal terms, and code names encapsulated. Privilege preservation under firm governance.", displayTextArea: true },
  screenshotImg:    { type: ControlType.Image,   title: "Screenshot" },
  screenshotAlt:    { type: ControlType.String,  title: "Screenshot Alt",    defaultValue: "Legal Industry Visual" },
  readLabel:        { type: ControlType.String,  title: "Read Link Label",   defaultValue: "Read: AI enablement data layer (definition) →" },
  readHref:         { type: ControlType.String,  title: "Read Link URL",     defaultValue: "/glossary/ai-enablement-data-layer" },
  altBg:            { type: ControlType.Boolean, title: "Alt Background",    defaultValue: true },
})
