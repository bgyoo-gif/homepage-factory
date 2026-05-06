import { addPropertyControls, ControlType } from "framer"

// Reusable CTA Strip — used on every page as final section
// Props match common CTA pattern: title, subtitle, primaryCta, secondaryCta

interface Props {
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  bgImage?: string
}

export default function CTAStrip({
  title = "See how LLM Capsule works with your data",
  subtitle = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  primaryCtaLabel = "Request a Demo",
  primaryCtaHref = "/request-a-demo",
  secondaryCtaLabel = "Available on AWS Marketplace",
  secondaryCtaHref = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw",
  bgImage = "",
}: Props) {
  const resolvedBg = bgImage || ""

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .cta-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter'), sans-serif; }

        .cta-section {
          width: 100%; position: relative; overflow: hidden;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) var(--s-page, clamp(20px, 4vw, 80px));
          text-align: center;
          background-color: var(--c-bg-dark, #0f1130);
          ${resolvedBg ? `background-image: url('${resolvedBg}'); background-size: cover; background-position: center;` : ""}
        }
        .cta-section::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.25); z-index: 0;
        }
        .cta-section > * { position: relative; z-index: 1; }

        @container (max-width: 767px) {
          .cta-section { background-image: none; }
          .cta-section::before { display: none; }
        }

        .cta-inner {
          max-width: 780px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }

        .cta-title {
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 700;
          color: #fff; line-height: 1.15; letter-spacing: -0.02em; margin: 0;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .cta-subtitle {
          font-size: 17px; color: rgba(255,255,255,0.8);
          line-height: 1.6; margin: 0;
          word-break: keep-all; overflow-wrap: break-word;
        }

        .cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }

        @container (max-width: 767px) {
          .cta-actions { flex-direction: column; align-items: center; }
          .cta-btn { width: 100%; max-width: 320px; }
        }

        .cta-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 24px; border-radius: var(--r-md, 10px);
          font-weight: 600; font-size: 15px; cursor: pointer;
          text-decoration: none; transition: all 0.2s; border: 1px solid transparent;
          font-family: inherit;
        }
        .cta-btn--primary { background: #fff; color: var(--c-ink, #0f1130); }
        .cta-btn--primary:hover { background: var(--c-primary-soft, #eeebfe); }
        .cta-btn--ghost { background: transparent; color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.3); font-size: 14px; }
        .cta-btn--ghost:hover { color: #fff; border-color: rgba(255,255,255,0.6); }
      `}</style>

      <div className="cta-root">
        <section className="cta-section">
          <div className="cta-inner">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>
            <div className="cta-actions">
              <a href={primaryCtaHref} className="cta-btn cta-btn--primary">{primaryCtaLabel}</a>
              {secondaryCtaLabel && (
                <a href={secondaryCtaHref} className="cta-btn cta-btn--ghost" target="_blank" rel="noopener noreferrer">{secondaryCtaLabel}</a>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(CTAStrip, {
  title:             { type: ControlType.String, title: "Title",             defaultValue: "See how LLM Capsule works with your data" },
  subtitle:          { type: ControlType.String, title: "Subtitle",          defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.", displayTextArea: true },
  primaryCtaLabel:   { type: ControlType.String, title: "Primary CTA Label", defaultValue: "Request a Demo" },
  primaryCtaHref:    { type: ControlType.String, title: "Primary CTA URL",   defaultValue: "/request-a-demo" },
  secondaryCtaLabel: { type: ControlType.String, title: "Secondary Label",   defaultValue: "Available on AWS Marketplace" },
  secondaryCtaHref:  { type: ControlType.String, title: "Secondary URL",     defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw" },
  bgImage:           { type: ControlType.Image,  title: "Background Image" },
})
