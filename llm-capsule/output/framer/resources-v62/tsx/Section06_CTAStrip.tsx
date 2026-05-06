import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Section06_CTAStrip({
  title = "Have a deployment question?",
  subtitle = "Bring your industry, your regulatory profile, and your data. We respond within one business day.",
  ctaLabel = "Request a Live Demo",
  ctaHref = "/request-a-demo",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
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

        .s6-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-bg, #ffffff);
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-subtitle {
          font-size: 16px;
          color: var(--c-primary-soft, #eeebfe);
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.85;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: background 0.18s, color 0.18s;
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }

        .s6-btn:hover {
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section">
          <div className="s6-inner">
            <h2 className="s6-title">{title}</h2>
            <p className="s6-subtitle">{subtitle}</p>
            <a className="s6-btn" href={ctaHref}>{ctaLabel}</a>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_CTAStrip, {
  title:    { type: ControlType.String, title: "Title",     defaultValue: "Have a deployment question?" },
  subtitle: { type: ControlType.String, title: "Subtitle",  defaultValue: "Bring your industry, your regulatory profile, and your data. We respond within one business day.", displayTextArea: true },
  ctaLabel: { type: ControlType.String, title: "CTA Label", defaultValue: "Request a Live Demo" },
  ctaHref:  { type: ControlType.String, title: "CTA Href",  defaultValue: "/request-a-demo" },
})
