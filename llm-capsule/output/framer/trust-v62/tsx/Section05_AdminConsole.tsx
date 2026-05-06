import { addPropertyControls, ControlType } from "framer"

const DEFAULT_SCREENSHOT = ""

interface Props {
  eyebrow?: string
  heading?: string
  description?: string
  screenshot?: string
  placeholderLine1?: string
  placeholderLine2?: string
  placeholderLine3?: string
}

export default function Section05_AdminConsole({
  eyebrow = "Admin console",
  heading = "The control surface for security and compliance teams",
  description = "One console for policies, audit, detection accuracy, and deployment health.",
  screenshot = DEFAULT_SCREENSHOT,
  placeholderLine1 = "Admin Console screenshot · same asset as 02_product page",
  placeholderLine2 = "Tabs: Audit · Policies · Tokens · Detection · Models",
  placeholderLine3 = "Live event stream + policy version diff + detection accuracy chart",
}: Props) {

  const resolvedScreenshot = screenshot || DEFAULT_SCREENSHOT

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s5-root { width: 100%; container-type: inline-size; }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s5-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .s5-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s5-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(24px, 2.8cqi, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s5-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(15px, 1.2cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s5-shot {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 40px;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c8c4f7;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          line-height: 1.7;
          text-align: center;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .s5-shot img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--r-md, 10px);
        }

        .s5-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        @container (min-width: 900px) {
          .s5-desc { max-width: 860px; }
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section">
          <div className="s5-container">
            <div className="s5-head">
              <div className="s5-eyebrow">{eyebrow}</div>
              <h2 className="s5-h2">{heading}</h2>
              <p className="s5-desc">{description}</p>
            </div>

            <div className="s5-shot" data-replace="admin-console">
              {resolvedScreenshot ? (
                <img src={resolvedScreenshot} alt="Admin console — audit, policies, tokens, detection, models" />
              ) : (
                <div className="s5-placeholder">
                  <span>{placeholderLine1}</span>
                  <span>{placeholderLine2}</span>
                  <span>{placeholderLine3}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_AdminConsole, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Admin console" },
  heading: { type: ControlType.String, title: "Heading", defaultValue: "The control surface for security and compliance teams" },
  description: { type: ControlType.String, title: "Description", defaultValue: "One console for policies, audit, detection accuracy, and deployment health." },
  screenshot: { type: ControlType.Image, title: "Screenshot" },
  placeholderLine1: { type: ControlType.String, title: "Placeholder Line 1", defaultValue: "Admin Console screenshot · same asset as 02_product page" },
  placeholderLine2: { type: ControlType.String, title: "Placeholder Line 2", defaultValue: "Tabs: Audit · Policies · Tokens · Detection · Models" },
  placeholderLine3: { type: ControlType.String, title: "Placeholder Line 3", defaultValue: "Live event stream + policy version diff + detection accuracy chart" },
})
