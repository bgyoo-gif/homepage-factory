import { addPropertyControls, ControlType } from "framer"

// Section 06 — CTA Strip (Pricing page)
// Full-width dark band, centered text, 2 CTAs
// Props: title, subtitle, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref

interface Props {
  title?:               string
  subtitle?:            string
  primaryCtaLabel?:     string
  primaryCtaHref?:      string
  secondaryCtaLabel?:   string
  secondaryCtaHref?:    string
}

export default function Section06_CTAStrip({
  title             = "Ready to start?",
  subtitle          = "Bring your industry, your workload estimate, and your deployment constraints. We'll propose a deployment fit and pricing within one business day.",
  primaryCtaLabel   = "Request a Quote",
  primaryCtaHref    = "/request-a-demo",
  secondaryCtaLabel = "View on AWS Marketplace",
  secondaryCtaHref  = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s6-section {
          background-color: var(--c-bg-dark, #0f1130);
          padding: var(--s-section, clamp(64px, 8vw, 128px)) var(--s-page, clamp(20px, 4vw, 80px));
          text-align: center;
        }

        .s6-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .s6-h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-subtitle {
          font-size: 17px;
          color: #c8c4f7;
          line-height: 1.6;
          margin-bottom: 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
          border: none;
        }

        .s6-btn--invert {
          background: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }
        .s6-btn--invert:hover {
          background: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s6-btn--invert-ghost {
          background: transparent;
          color: var(--c-bg, #ffffff);
          border: 1.5px solid rgba(255,255,255,0.35);
        }
        .s6-btn--invert-ghost:hover {
          border-color: rgba(255,255,255,0.7);
        }

        @container (max-width: 599px) {
          .s6-actions {
            flex-direction: column;
            align-items: center;
          }
          .s6-btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section" id="section-6">
          <div className="s6-inner">
            <h2 className="s6-h2">{title}</h2>
            <p className="s6-subtitle">{subtitle}</p>
            <div className="s6-actions">
              <a href={primaryCtaHref} className="s6-btn s6-btn--invert">
                {primaryCtaLabel}
              </a>
              {secondaryCtaLabel && (
                <a
                  href={secondaryCtaHref}
                  className="s6-btn s6-btn--invert-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_CTAStrip, {
  title:             { type: ControlType.String, title: "Title",          defaultValue: "Ready to start?" },
  subtitle:          { type: ControlType.String, title: "Subtitle",       defaultValue: "Bring your industry, your workload estimate, and your deployment constraints. We'll propose a deployment fit and pricing within one business day.", displayTextArea: true },
  primaryCtaLabel:   { type: ControlType.String, title: "CTA 1 Label",   defaultValue: "Request a Quote" },
  primaryCtaHref:    { type: ControlType.String, title: "CTA 1 URL",     defaultValue: "/request-a-demo" },
  secondaryCtaLabel: { type: ControlType.String, title: "CTA 2 Label",   defaultValue: "View on AWS Marketplace" },
  secondaryCtaHref:  { type: ControlType.String, title: "CTA 2 URL",     defaultValue: "https://aws.amazon.com/marketplace" },
})
