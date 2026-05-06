import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string
}

export default function Section09_CTAStrip({
  title = "See the architecture run on your environment.",
  description = "Bring your deployment constraints, regulatory profile, and one real workflow. We demonstrate the data layer in your environment within 30 minutes.",
  cta1Label = "Request a Live Demo",
  cta1Href = "/request-a-demo",
  cta2Label = "View Product",
  cta2Href = "/product",
  cta3Label = "View Trust & Compliance",
  cta3Href = "/trust",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s9-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); -webkit-font-smoothing: antialiased; }

        .s9-section {
          background-color: var(--c-bg-dark, #0f1130);
          padding: var(--s-section, clamp(64px, 8vw, 128px)) var(--s-page, clamp(20px, 4vw, 80px));
          text-align: center;
        }

        .s9-inner {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
        }

        .s9-title {
          color: var(--c-bg, #ffffff);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .s9-desc {
          color: #c8c4f7;
          max-width: 640px;
          margin: 0 auto 32px;
          font-size: 17px;
          line-height: 1.6;
        }

        .s9-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .s9-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          text-decoration: none;
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }

        .s9-btn--invert {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }

        .s9-btn--invert:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s9-btn--ghost {
          background: transparent;
          color: var(--c-bg, #ffffff);
          border: 1.5px solid #9d95f5;
        }

        .s9-btn--ghost:hover {
          border-color: var(--c-bg, #ffffff);
        }
      `}</style>

      <div className="s9-root">
        <section className="s9-section">
          <div className="s9-inner">
            <h2 className="s9-title">{title}</h2>
            <p className="s9-desc">{description}</p>
            <div className="s9-btns">
              <a className="s9-btn s9-btn--invert" href={cta1Href}>{cta1Label}</a>
              <a className="s9-btn s9-btn--ghost" href={cta2Href}>{cta2Label}</a>
              <a className="s9-btn s9-btn--ghost" href={cta3Href}>{cta3Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section09_CTAStrip, {
  title: { type: ControlType.String, title: "Title", defaultValue: "See the architecture run on your environment." },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your deployment constraints, regulatory profile, and one real workflow. We demonstrate the data layer in your environment within 30 minutes." },
  cta1Label: { type: ControlType.String, title: "CTA 1 Label", defaultValue: "Request a Live Demo" },
  cta1Href: { type: ControlType.String, title: "CTA 1 Href", defaultValue: "/request-a-demo" },
  cta2Label: { type: ControlType.String, title: "CTA 2 Label", defaultValue: "View Product" },
  cta2Href: { type: ControlType.String, title: "CTA 2 Href", defaultValue: "/product" },
  cta3Label: { type: ControlType.String, title: "CTA 3 Label", defaultValue: "View Trust & Compliance" },
  cta3Href: { type: ControlType.String, title: "CTA 3 Href", defaultValue: "/trust" },
})
