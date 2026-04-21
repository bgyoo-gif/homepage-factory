import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

// Brand colors (LLM Capsule)
const BRAND = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  brandLight:     "#B8D4EE",
  neutral900: "#0f0f0f",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral350: "#adadad",
  neutral300: "#bababa",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",
  borderDefault: "#e6e7e9",
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

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
          font-family: "DM Sans", sans-serif;
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
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${BRAND.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s1-product-name {
          font-family: "Oxanium", sans-serif;
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
