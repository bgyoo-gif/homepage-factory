import { addPropertyControls, ControlType } from "framer"

interface Props {
  errorCode?: string
  title?: string
  description?: string
  demoEncLabel?: string
  demoEncText?: string
  demoResLabel?: string
  demoResText?: string
  btn1Label?: string
  btn1Href?: string
  btn2Label?: string
  btn2Href?: string
  footerLink1Label?: string
  footerLink1Href?: string
  footerLink2Label?: string
  footerLink2Href?: string
  footerLink3Label?: string
  footerLink3Href?: string
}

export default function NotFound({
  errorCode = "404",
  title = "This page has been encapsulated",
  description = "The page you're looking for doesn't exist, has been moved, or was never transmitted outside the environment.",
  demoEncLabel = "Encapsulated",
  demoEncText = "[PAGE_01] was requested at [URL_02] on [DATE_03].",
  demoResLabel = "Restored",
  demoResText = "The page you wanted was not found at this URL just now.",
  btn1Label = "Go to Homepage",
  btn1Href = "/",
  btn2Label = "See Product",
  btn2Href = "/product",
  footerLink1Label = "Resources",
  footerLink1Href = "/resources",
  footerLink2Label = "Architecture",
  footerLink2Href = "/architecture",
  footerLink3Label = "Pricing",
  footerLink3Href = "/pricing",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .nf-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          container-type: inline-size;
        }
        .nf-wrap {
          max-width: 560px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .nf-pulse {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--c-primary, #5b4fe9);
          opacity: 0.12;
          animation: nf-pulse 3s ease-in-out infinite;
        }
        @keyframes nf-pulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        .nf-code {
          font-family: 'Inter', sans-serif;
          font-size: 120px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -4px;
          color: var(--c-primary, #5b4fe9);
        }
        @container (min-width: 768px) { .nf-code { font-size: 160px; } }
        .nf-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .nf-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.3;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        @container (min-width: 768px) { .nf-title { font-size: 28px; } }
        .nf-desc {
          font-size: 16px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.7;
          text-wrap: pretty;
        }
        .nf-demo {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          border-radius: 12px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          text-align: left;
        }
        .nf-demo__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 4px;
        }
        .nf-demo__label--restored { color: var(--c-primary, #5b4fe9); }
        .nf-demo__line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.8;
          color: var(--c-ink-soft, #3a3d5e);
        }
        .nf-demo__line--restored {
          color: var(--c-primary, #5b4fe9);
          font-weight: 500;
        }
        .nf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .nf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: opacity 0.2s, background-color 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .nf-btn--primary {
          padding: 12px 28px;
          background-color: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
        }
        .nf-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          transform: translateY(-1px);
        }
        .nf-btn--secondary {
          padding: 12px 28px;
          background-color: transparent;
          color: var(--c-ink, #0f1130);
          border: 1px solid var(--c-rule, #e5e7eb);
        }
        .nf-btn--secondary:hover { background-color: var(--c-bg-soft, #f7f8fb); }
        .nf-footer {
          margin-top: 16px;
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
        }
        .nf-footer a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
        }
        .nf-footer a:hover { text-decoration: underline; }
      `}</style>

      <div className="nf-root">
        <div className="nf-wrap">
          <div className="nf-pulse" />
          <div className="nf-code">{errorCode}</div>
          <div className="nf-content">
            <h1 className="nf-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h1>
            <p className="nf-desc">{description}</p>
          </div>
          <div className="nf-demo">
            <span className="nf-demo__label">{demoEncLabel}</span>
            <span className="nf-demo__line">{demoEncText}</span>
            <span className="nf-demo__label nf-demo__label--restored">{demoResLabel}</span>
            <span className="nf-demo__line nf-demo__line--restored">{demoResText}</span>
          </div>
          <div className="nf-actions">
            <a href={btn1Href} className="nf-btn nf-btn--primary">{btn1Label}</a>
            <a href={btn2Href} className="nf-btn nf-btn--secondary">{btn2Label}</a>
          </div>
          <p className="nf-footer">
            Or explore: <a href={footerLink1Href}>{footerLink1Label}</a> · <a href={footerLink2Href}>{footerLink2Label}</a> · <a href={footerLink3Href}>{footerLink3Label}</a>
          </p>
        </div>
      </div>
    </>
  )
}

addPropertyControls(NotFound, {
  errorCode:        { type: ControlType.String, title: "Error Code",        defaultValue: "404" },
  title:            { type: ControlType.String, title: "Title",             defaultValue: "This page has been encapsulated" },
  description:      { type: ControlType.String, title: "Description",       defaultValue: "The page you're looking for doesn't exist, has been moved, or was never transmitted outside the environment.", displayTextArea: true },
  demoEncLabel:     { type: ControlType.String, title: "Demo Enc Label",    defaultValue: "Encapsulated" },
  demoEncText:      { type: ControlType.String, title: "Demo Enc Text",     defaultValue: "[PAGE_01] was requested at [URL_02] on [DATE_03]." },
  demoResLabel:     { type: ControlType.String, title: "Demo Res Label",    defaultValue: "Restored" },
  demoResText:      { type: ControlType.String, title: "Demo Res Text",     defaultValue: "The page you wanted was not found at this URL just now." },
  btn1Label:        { type: ControlType.String, title: "Button 1 Label",    defaultValue: "Go to Homepage" },
  btn1Href:         { type: ControlType.String, title: "Button 1 URL",      defaultValue: "/" },
  btn2Label:        { type: ControlType.String, title: "Button 2 Label",    defaultValue: "See Product" },
  btn2Href:         { type: ControlType.String, title: "Button 2 URL",      defaultValue: "/product" },
  footerLink1Label: { type: ControlType.String, title: "Footer Link 1",     defaultValue: "Resources" },
  footerLink1Href:  { type: ControlType.String, title: "Footer Link 1 URL", defaultValue: "/resources" },
  footerLink2Label: { type: ControlType.String, title: "Footer Link 2",     defaultValue: "Architecture" },
  footerLink2Href:  { type: ControlType.String, title: "Footer Link 2 URL", defaultValue: "/architecture" },
  footerLink3Label: { type: ControlType.String, title: "Footer Link 3",     defaultValue: "Pricing" },
  footerLink3Href:  { type: ControlType.String, title: "Footer Link 3 URL", defaultValue: "/pricing" },
})
