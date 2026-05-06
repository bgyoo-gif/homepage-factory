import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

// Brand colors (LLM Capsule)
const BRAND = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
  brandLight:     "#eeebfe",
  neutral900: "#0f1130",
  neutral850: "#0f1130",
  neutral800: "#0f1130",
  neutral700: "#1b1d4a",
  neutral500: "#3a3d5e",
  neutral400: "#6b7280",
  neutral350: "#6b7280",
  neutral300: "#6b7280",
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
  textInverse:   "#ffffff",
  borderDefault: "#e5e7eb",
  surfaceWhite:  "#ffffff",
}

interface Props {
  title?: string
  description?: string
  productName?: string
}

export default function Section01_Hero({
  title = "Zero Exposure",
  description = "Zero exposure means original sensitive enterprise data never leaves the enterprise environment during AI processing. Only encapsulated representations cross the trust boundary to external AI services. A core principle of",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-size: 14px; color: ${BRAND.brandSecondary};
          font-weight: 500; transition: color 0.15s; text-decoration: none;
        }
        .s1-breadcrumb__link:hover { color: ${BRAND.brandPrimary}; }
        .s1-breadcrumb__sep { font-size: 14px; color: ${BRAND.textTertiary}; }
        .s1-breadcrumb__current { font-size: 14px; color: ${BRAND.textTertiary}; }

        .s1-section {
          width: 100%;
          padding: 100px 0 40px;
          background-color: ${BRAND.surfaceWhite};
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
          color: ${BRAND.textPrimary};
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
          color: ${BRAND.textSecondary};
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
          .s1-container { padding: 0; max-width: 1080px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="s1-breadcrumb__link">Home</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources" className="s1-breadcrumb__link">Resources</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources/glossary" className="s1-breadcrumb__link">Glossary</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">Zero Exposure</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h1>
            <p className="s1-description">
              {description}{" "}
              <span className="s1-product-name">{productName}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Zero Exposure",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Zero exposure means original sensitive enterprise data never leaves the enterprise environment during AI processing. Only encapsulated representations cross the trust boundary to external AI services. A core principle of",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
