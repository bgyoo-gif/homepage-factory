import { addPropertyControls, ControlType } from "framer"

const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  neutral800:     "#171719",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
}

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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono:wght@400&display=swap');

        .nf-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.white};
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
          background: ${P.gradientBrand};
          opacity: 0.12;
          animation: nf-pulse 3s ease-in-out infinite;
        }
        @keyframes nf-pulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        .nf-code {
          font-family: "Oxanium", sans-serif;
          font-size: 120px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -4px;
          background: ${P.gradientBrand};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
          color: ${P.textPrimary};
          line-height: 1.3;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        @container (min-width: 768px) { .nf-title { font-size: 28px; } }
        .nf-desc {
          font-size: 16px;
          color: ${P.textSecondary};
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
          background-color: ${P.surfaceLight};
          border: 1px solid ${P.borderDefault};
          text-align: left;
        }
        .nf-demo__label {
          font-family: "Fragment Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${P.textTertiary};
          margin-bottom: 4px;
        }
        .nf-demo__label--restored { color: ${P.brandAccent}; }
        .nf-demo__line {
          font-family: "Fragment Mono", monospace;
          font-size: 13px;
          line-height: 1.8;
          color: ${P.textTertiary};
        }
        .nf-demo__line--restored {
          color: ${P.brandSecondary};
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
          font-family: "DM Sans", sans-serif;
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
          background: ${P.gradientBrand};
          color: #ffffff;
        }
        .nf-btn--primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .nf-btn--secondary {
          padding: 12px 28px;
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .nf-btn--secondary:hover { background-color: ${P.surfaceLight}; }
        .nf-footer {
          margin-top: 16px;
          font-size: 13px;
          color: ${P.textTertiary};
        }
        .nf-footer a {
          color: ${P.brandSecondary};
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
  errorCode:       { type: ControlType.String, title: "Error Code",       defaultValue: "404" },
  title:           { type: ControlType.String, title: "Title",            defaultValue: "This page has been encapsulated" },
  description:     { type: ControlType.String, title: "Description",      defaultValue: "The page you're looking for doesn't exist, has been moved, or was never transmitted outside the environment.", displayTextArea: true },
  demoEncLabel:    { type: ControlType.String, title: "Demo Enc Label",   defaultValue: "Encapsulated" },
  demoEncText:     { type: ControlType.String, title: "Demo Enc Text",    defaultValue: "[PAGE_01] was requested at [URL_02] on [DATE_03]." },
  demoResLabel:    { type: ControlType.String, title: "Demo Res Label",   defaultValue: "Restored" },
  demoResText:     { type: ControlType.String, title: "Demo Res Text",    defaultValue: "The page you wanted was not found at this URL just now." },
  btn1Label:       { type: ControlType.String, title: "Button 1 Label",   defaultValue: "Go to Homepage" },
  btn1Href:        { type: ControlType.String, title: "Button 1 URL",     defaultValue: "/" },
  btn2Label:       { type: ControlType.String, title: "Button 2 Label",   defaultValue: "See Product" },
  btn2Href:        { type: ControlType.String, title: "Button 2 URL",     defaultValue: "/product" },
  footerLink1Label:{ type: ControlType.String, title: "Footer Link 1",    defaultValue: "Resources" },
  footerLink1Href: { type: ControlType.String, title: "Footer Link 1 URL",defaultValue: "/resources" },
  footerLink2Label:{ type: ControlType.String, title: "Footer Link 2",    defaultValue: "Architecture" },
  footerLink2Href: { type: ControlType.String, title: "Footer Link 2 URL",defaultValue: "/architecture" },
  footerLink3Label:{ type: ControlType.String, title: "Footer Link 3",    defaultValue: "Pricing" },
  footerLink3Href: { type: ControlType.String, title: "Footer Link 3 URL",defaultValue: "/pricing" },
})
