import { addPropertyControls, ControlType } from "framer"

interface Props {
  brandLabel?: string
  title?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  btn2Label?: string
  btn2Href?: string
}

export default function RequestReceived({
  brandLabel = "LLM Capsule",
  title = "Thank you for your request",
  description = "We've received your demo request and will be in touch within 1 business day. In the meantime, explore our product or architecture.",
  btn1Label = "Explore Product",
  btn1Href = "/product",
  btn2Label = "View Architecture",
  btn2Href = "/architecture",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .rr-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          font-family: 'Inter', sans-serif;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          container-type: inline-size;
        }
        .rr-container {
          width: 100%;
          max-width: var(--container-max, 1280px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rr-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          text-align: center;
          max-width: 560px;
        }
        .rr-brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .rr-brand__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--c-primary, #5b4fe9);
        }
        .rr-brand__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
        }
        .rr-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rr-icon svg {
          width: 32px;
          height: 32px;
          color: var(--c-primary, #5b4fe9);
        }
        .rr-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rr-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.25;
          letter-spacing: -0.5px;
          text-wrap: pretty;
          margin: 0;
        }
        @container (min-width: 768px) { .rr-title { font-size: 36px; } }
        .rr-desc {
          font-size: 16px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.7;
          text-wrap: pretty;
          margin: 0;
        }
        @container (min-width: 768px) { .rr-desc { font-size: 18px; } }
        .rr-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .rr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s, transform 0.2s;
          white-space: nowrap;
          border: none;
        }
        .rr-btn--primary {
          padding: 12px 28px;
          background-color: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
        }
        .rr-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          transform: translateY(-1px);
        }
        .rr-btn--secondary {
          padding: 12px 28px;
          background-color: transparent;
          color: var(--c-ink, #0f1130);
          border: 1px solid var(--c-rule, #e5e7eb);
        }
        .rr-btn--secondary:hover {
          background-color: var(--c-bg-soft, #f7f8fb);
        }
        .rr-note {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          font-family: 'JetBrains Mono', monospace;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 14px 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
        }
      `}</style>

      <div className="rr-root">
        <div className="rr-container">
          <div className="rr-wrap">
            <div className="rr-brand">
              <span className="rr-brand__dot" />
              <span className="rr-brand__label">{brandLabel}</span>
            </div>

            <div className="rr-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className="rr-content">
              <h1 className="rr-title">{title}</h1>
              <p className="rr-desc">{description}</p>
            </div>

            <div className="rr-actions">
              <a href={btn1Href} className="rr-btn rr-btn--primary">{btn1Label}</a>
              <a href={btn2Href} className="rr-btn rr-btn--secondary">{btn2Label}</a>
            </div>

            <p className="rr-note">response_time: &lt; 1 business day</p>
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(RequestReceived, {
  brandLabel:  { type: ControlType.String, title: "Brand Label",   defaultValue: "LLM Capsule" },
  title:       { type: ControlType.String, title: "Title",         defaultValue: "Thank you for your request" },
  description: { type: ControlType.String, title: "Description",   defaultValue: "We've received your demo request and will be in touch within 1 business day. In the meantime, explore our product or architecture.", displayTextArea: true },
  btn1Label:   { type: ControlType.String, title: "Button 1 Label",defaultValue: "Explore Product" },
  btn1Href:    { type: ControlType.String, title: "Button 1 URL",  defaultValue: "/product" },
  btn2Label:   { type: ControlType.String, title: "Button 2 Label",defaultValue: "View Architecture" },
  btn2Href:    { type: ControlType.String, title: "Button 2 URL",  defaultValue: "/architecture" },
})
