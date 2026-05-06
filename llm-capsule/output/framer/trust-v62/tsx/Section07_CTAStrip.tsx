import { addPropertyControls, ControlType } from "framer"

interface Props {
  heading?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  tertiaryCtaText?: string
  tertiaryCtaHref?: string
}

export default function Section07_CTAStrip({
  heading = "Compliance, security, and procurement teams welcome.",
  description = "Bring your regulatory profile, your standard vendor security questionnaire, and your DPA template. We respond inside one business day.",
  primaryCtaText = "Request a Live Demo",
  primaryCtaHref = "/request-a-demo",
  secondaryCtaText = "View Architecture",
  secondaryCtaHref = "/architecture",
  tertiaryCtaText = "Browse Resources",
  tertiaryCtaHref = "/resources",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s7-root { width: 100%; container-type: inline-size; }

        .s7-section {
          background-color: var(--c-bg-dark, #0f1130);
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) var(--s-page, clamp(20px, 4cqi, 80px));
          text-align: center;
        }

        .s7-inner {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
        }

        .s7-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--c-bg, #ffffff);
          margin-bottom: 20px;
          line-height: 1.15;
        }

        .s7-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          color: #c8c4f7;
          max-width: 640px;
          margin: 0 auto 32px;
          font-size: clamp(16px, 1.4cqi, 17px);
          line-height: 1.6;
        }

        .s7-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .s7-btn {
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
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
        }

        .s7-btn--invert {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }
        .s7-btn--invert:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s7-btn--ghost {
          background-color: transparent;
          color: var(--c-bg, #ffffff);
          border: 1.5px solid #9d95f5;
        }
        .s7-btn--ghost:hover {
          border-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>

      <div className="s7-root">
        <section className="s7-section">
          <div className="s7-inner">
            <h2 className="s7-h2">{heading}</h2>
            <p className="s7-desc">{description}</p>
            <div className="s7-btns">
              <a className="s7-btn s7-btn--invert" href={primaryCtaHref}>{primaryCtaText}</a>
              <a className="s7-btn s7-btn--ghost" href={secondaryCtaHref}>{secondaryCtaText}</a>
              <a className="s7-btn s7-btn--ghost" href={tertiaryCtaHref}>{tertiaryCtaText}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_CTAStrip, {
  heading: { type: ControlType.String, title: "Heading", defaultValue: "Compliance, security, and procurement teams welcome.", displayTextArea: true },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your regulatory profile, your standard vendor security questionnaire, and your DPA template. We respond inside one business day.", displayTextArea: true },
  primaryCtaText: { type: ControlType.String, title: "Primary CTA Text", defaultValue: "Request a Live Demo" },
  primaryCtaHref: { type: ControlType.String, title: "Primary CTA Link", defaultValue: "/request-a-demo" },
  secondaryCtaText: { type: ControlType.String, title: "Secondary CTA Text", defaultValue: "View Architecture" },
  secondaryCtaHref: { type: ControlType.String, title: "Secondary CTA Link", defaultValue: "/architecture" },
  tertiaryCtaText: { type: ControlType.String, title: "Tertiary CTA Text", defaultValue: "Browse Resources" },
  tertiaryCtaHref: { type: ControlType.String, title: "Tertiary CTA Link", defaultValue: "/resources" },
})
