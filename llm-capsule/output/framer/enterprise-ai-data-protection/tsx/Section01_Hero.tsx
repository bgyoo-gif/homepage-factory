import { addPropertyControls, ControlType } from "framer"

// LLM Capsule brand palette
const PALETTE = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
  brandLight:     "#eeebfe",
  neutral900: "#0f1130",
  neutral800: "#0f1130",
  neutral700: "#1b1d4a",
  neutral500: "#3a3d5e",
  neutral400: "#6b7280",
  neutral200: "#e5e7eb",
  neutral150: "#e5e7eb",
  neutral100: "#f7f8fb",
  neutral050: "#f7f8fb",
  neutral025: "#f7f8fb",
  white:      "#ffffff",
  black:      "#0f1130",
  textPrimary:   "#0f1130",
  textSecondary: "#3a3d5e",
  textTertiary:  "#6b7280",
  borderDefault: "#e5e7eb",
  surfaceWhite: "#ffffff",
}

interface Props {
  heroTitle?: string
  heroDescription?: string
  productName?: string
}

export default function Section01_Hero({
  heroTitle = "Enterprise AI Enablement",
  heroDescription = "LLM Capsule's AI enablement data layer uses encapsulation, zero exposure, and local restoration to enable enterprises to adopt AI without data risk.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 60px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-title {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s1-description {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s1-product-name {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>
      <section className="s1-section" id="section-1">
        <div className="s1-inner">
          <div className="s1-container">
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{heroTitle}</h1>
            <p className="s1-description">{heroDescription}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Enterprise AI Enablement",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "LLM Capsule's AI enablement data layer uses encapsulation, zero exposure, and local restoration to enable enterprises to adopt AI without data risk.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
