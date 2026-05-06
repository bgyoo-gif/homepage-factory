import { addPropertyControls, ControlType } from "framer"

interface Props {
  heading?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  btn2Label?: string
  btn2Href?: string
  btn3Label?: string
  btn3Href?: string
  bgImage?: string
}

const DEFAULT_BG = ""

export default function Section10_CTAStrip({
  heading = "From blocked AI workflows to operational AI.",
  description = "See how LLM Capsule plugs into your existing enterprise environment in 30 minutes. Bring your documents, deployment constraints, and evaluation questions.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  btn2Label = "See the Architecture",
  btn2Href = "/architecture",
  btn3Label = "View Pricing",
  btn3Href = "/pricing",
  bgImage,
}: Props) {
  const resolvedBg = bgImage || DEFAULT_BG

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s10-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s10-section {
          background-color: var(--c-bg-dark, #0f1130);
          color: var(--c-bg, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .s10-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.18;
          pointer-events: none;
        }

        .s10-inner {
          position: relative;
          z-index: 1;
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) var(--s-page, clamp(20px, 4cqi, 80px));
          text-align: center;
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
        }

        .s10-h2 {
          font-size: clamp(28px, 3cqi, 40px);
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .s10-desc {
          color: var(--c-primary-tint, #c8c4f7);
          max-width: 640px;
          margin: 0 auto 32px;
          font-size: 17px;
          line-height: 1.6;
        }

        .s10-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .s10-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
        }

        .s10-btn--invert {
          background: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }

        .s10-btn--invert:hover {
          background: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .s10-btn--invert-ghost {
          background: transparent;
          color: var(--c-bg, #ffffff);
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .s10-btn--invert-ghost:hover {
          border-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>

      <div className="s10-root">
        <section className="s10-section">
          {resolvedBg && (
            <div
              className="s10-bg"
              style={{ backgroundImage: `url('${resolvedBg}')` } as React.CSSProperties}
              aria-hidden="true"
            />
          )}
          <div className="s10-inner">
            <h2 className="s10-h2">{heading}</h2>
            <p className="s10-desc">{description}</p>
            <div className="s10-buttons">
              <a className="s10-btn s10-btn--invert" href={btn1Href}>{btn1Label}</a>
              <a className="s10-btn s10-btn--invert-ghost" href={btn2Href}>{btn2Label}</a>
              <a className="s10-btn s10-btn--invert-ghost" href={btn3Href}>{btn3Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section10_CTAStrip, {
  heading:     { type: ControlType.String, title: "Heading",      defaultValue: "From blocked AI workflows to operational AI." },
  description: { type: ControlType.String, title: "Description",  defaultValue: "See how LLM Capsule plugs into your existing enterprise environment in 30 minutes. Bring your documents, deployment constraints, and evaluation questions.", multiLine: true },
  btn1Label:   { type: ControlType.String, title: "Btn 1 Label",  defaultValue: "Request a Demo" },
  btn1Href:    { type: ControlType.String, title: "Btn 1 URL",    defaultValue: "/request-a-demo" },
  btn2Label:   { type: ControlType.String, title: "Btn 2 Label",  defaultValue: "See the Architecture" },
  btn2Href:    { type: ControlType.String, title: "Btn 2 URL",    defaultValue: "/architecture" },
  btn3Label:   { type: ControlType.String, title: "Btn 3 Label",  defaultValue: "View Pricing" },
  btn3Href:    { type: ControlType.String, title: "Btn 3 URL",    defaultValue: "/pricing" },
  bgImage:     { type: ControlType.Image,  title: "Bg Image" },
})
