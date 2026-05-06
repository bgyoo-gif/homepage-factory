import { addPropertyControls, ControlType } from "framer"

// Section 01 — Pricing Hero
// CMS: page-level metadata
// Props: eyebrow, title, titleStrong, description

interface Props {
  eyebrow?: string
  title?: string
  titleStrong?: string
  description?: string
}

export default function Section01_Hero({
  eyebrow      = "Pricing",
  title        = "Pricing for",
  titleStrong  = "secure AI workflow deployment",
  description  = "Volume-based pricing tailored to your document processing workload, deployment requirements, and regulatory profile.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s1-hero {
          padding-top: clamp(80px, 10vw, 140px);
          padding-bottom: clamp(48px, 6vw, 80px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg-soft, #f7f8fb);
          text-align: center;
          padding-left: var(--s-page, clamp(20px, 4vw, 80px));
          padding-right: var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s1-container {
          max-width: 880px;
          margin: 0 auto;
        }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s1-h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-h1-strong {
          color: var(--c-primary, #5b4fe9);
          font-weight: 700;
        }

        .s1-description {
          font-size: clamp(17px, 1.5vw, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.6;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-hero" aria-labelledby="pricing-hero-h1">
          <div className="s1-container">
            <span className="s1-eyebrow">{eyebrow}</span>
            <h1 className="s1-h1" id="pricing-hero-h1">
              {title} <strong className="s1-h1-strong">{titleStrong}</strong>
            </h1>
            <p className="s1-description">{description}</p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow:     { type: ControlType.String, title: "Eyebrow",         defaultValue: "Pricing" },
  title:       { type: ControlType.String, title: "Title",           defaultValue: "Pricing for" },
  titleStrong: { type: ControlType.String, title: "Title (strong)",  defaultValue: "secure AI workflow deployment" },
  description: { type: ControlType.String, title: "Description",     defaultValue: "Volume-based pricing tailored to your document processing workload, deployment requirements, and regulatory profile.", displayTextArea: true },
})
