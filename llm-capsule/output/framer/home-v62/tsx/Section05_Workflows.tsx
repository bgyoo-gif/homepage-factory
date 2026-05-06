import { addPropertyControls, ControlType } from "framer"

// CMS: Workflows — icon (SVG path string), title, description, restoreBenefit

interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  sectionDesc?: string
  wf1Icon?: string
  wf1Title?: string
  wf1Description?: string
  wf1RestoreBenefit?: string
  wf2Icon?: string
  wf2Title?: string
  wf2Description?: string
  wf2RestoreBenefit?: string
  wf3Icon?: string
  wf3Title?: string
  wf3Description?: string
  wf3RestoreBenefit?: string
  wf4Icon?: string
  wf4Title?: string
  wf4Description?: string
  wf4RestoreBenefit?: string
}

// SVG path data per icon (Lucide icons matching B-type HTML)
const ICON_FILE_TEXT   = `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`
const ICON_CLIPBOARD   = `<rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>`
const ICON_SHIELD      = `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>`
const ICON_BAR_CHART   = `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`

export default function Section05_Workflows({
  eyebrow = "AI-ENABLED ENTERPRISE WORKFLOWS",
  heading = "The workflows that move from pilot to ",
  headingHighlight = "production",
  sectionDesc = "LLM Capsule plugs into the most common enterprise AI workflows — protected before AI processing, restored to be directly usable in business.",
  wf1Icon = ICON_FILE_TEXT,
  wf1Title = "Secure Document Summarization",
  wf1Description = "Contracts, reports, regulatory filings — protected before AI processing. AI generates summaries with real names, dates, and figures ready for business use.",
  wf1RestoreBenefit = "Real names, dates, figures restored in output",
  wf2Icon = ICON_CLIPBOARD,
  wf2Title = "AI Claims Processing",
  wf2Description = "Insurance and financial claims through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems.",
  wf2RestoreBenefit = "Direct integration with claims systems",
  wf3Icon = ICON_SHIELD,
  wf3Title = "Confidential Contract Review",
  wf3Description = "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for deal management systems.",
  wf3RestoreBenefit = "Real party names, amounts, references restored",
  wf4Icon = ICON_BAR_CHART,
  wf4Title = "Internal Report Generation",
  wf4Description = "AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports flow directly into governance workflows.",
  wf4RestoreBenefit = "Restored reports flow into governance",
}: Props) {

  const workflows = [
    { icon: wf1Icon, title: wf1Title, description: wf1Description, restoreBenefit: wf1RestoreBenefit },
    { icon: wf2Icon, title: wf2Title, description: wf2Description, restoreBenefit: wf2RestoreBenefit },
    { icon: wf3Icon, title: wf3Title, description: wf3Description, restoreBenefit: wf3RestoreBenefit },
    { icon: wf4Icon, title: wf4Title, description: wf4Description, restoreBenefit: wf4RestoreBenefit },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s5-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s5-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s5-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .s5-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s5-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s5-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @container (min-width: 600px) {
          .s5-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @container (min-width: 960px) {
          .s5-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .s5-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .s5-card__icon {
          width: 40px;
          height: 40px;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .s5-card__title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
        }

        .s5-card__desc {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          margin-bottom: 12px;
          flex: 1;
        }

        .s5-card__footer {
          font-size: 12px;
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 600;
          padding-top: 12px;
          border-top: 1px dashed var(--c-rule, #e5e7eb);
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section">
          <div className="s5-container">
            <header className="s5-header">
              <span className="s5-eyebrow">{eyebrow}</span>
              <h2 className="s5-h2">
                {heading}<span>{headingHighlight}</span>
              </h2>
              <p className="s5-desc">{sectionDesc}</p>
            </header>

            <div className="s5-grid">
              {workflows.map((wf, i) => (
                <article key={i} className="s5-card">
                  <svg
                    className="s5-card__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: wf.icon }}
                  />
                  <h3 className="s5-card__title">{wf.title}</h3>
                  <p className="s5-card__desc">{wf.description}</p>
                  <div className="s5-card__footer">{wf.restoreBenefit}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_Workflows, {
  eyebrow:          { type: ControlType.String, title: "Eyebrow",       defaultValue: "AI-ENABLED ENTERPRISE WORKFLOWS" },
  heading:          { type: ControlType.String, title: "H2 Text",       defaultValue: "The workflows that move from pilot to " },
  headingHighlight: { type: ControlType.String, title: "H2 Highlight",  defaultValue: "production" },
  sectionDesc:      { type: ControlType.String, title: "Description",   defaultValue: "LLM Capsule plugs into the most common enterprise AI workflows — protected before AI processing, restored to be directly usable in business.", multiLine: true },
  wf1Icon:          { type: ControlType.String, title: "WF 1 Icon SVG", defaultValue: ICON_FILE_TEXT, multiLine: true },
  wf1Title:         { type: ControlType.String, title: "WF 1 Title",    defaultValue: "Secure Document Summarization" },
  wf1Description:   { type: ControlType.String, title: "WF 1 Desc",     defaultValue: "Contracts, reports, regulatory filings — protected before AI processing. AI generates summaries with real names, dates, and figures ready for business use.", multiLine: true },
  wf1RestoreBenefit:{ type: ControlType.String, title: "WF 1 Benefit",  defaultValue: "Real names, dates, figures restored in output" },
  wf2Icon:          { type: ControlType.String, title: "WF 2 Icon SVG", defaultValue: ICON_CLIPBOARD, multiLine: true },
  wf2Title:         { type: ControlType.String, title: "WF 2 Title",    defaultValue: "AI Claims Processing" },
  wf2Description:   { type: ControlType.String, title: "WF 2 Desc",     defaultValue: "Insurance and financial claims through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems.", multiLine: true },
  wf2RestoreBenefit:{ type: ControlType.String, title: "WF 2 Benefit",  defaultValue: "Direct integration with claims systems" },
  wf3Icon:          { type: ControlType.String, title: "WF 3 Icon SVG", defaultValue: ICON_SHIELD, multiLine: true },
  wf3Title:         { type: ControlType.String, title: "WF 3 Title",    defaultValue: "Confidential Contract Review" },
  wf3Description:   { type: ControlType.String, title: "WF 3 Desc",     defaultValue: "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for deal management systems.", multiLine: true },
  wf3RestoreBenefit:{ type: ControlType.String, title: "WF 3 Benefit",  defaultValue: "Real party names, amounts, references restored" },
  wf4Icon:          { type: ControlType.String, title: "WF 4 Icon SVG", defaultValue: ICON_BAR_CHART, multiLine: true },
  wf4Title:         { type: ControlType.String, title: "WF 4 Title",    defaultValue: "Internal Report Generation" },
  wf4Description:   { type: ControlType.String, title: "WF 4 Desc",     defaultValue: "AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports flow directly into governance workflows.", multiLine: true },
  wf4RestoreBenefit:{ type: ControlType.String, title: "WF 4 Benefit",  defaultValue: "Restored reports flow into governance" },
})
