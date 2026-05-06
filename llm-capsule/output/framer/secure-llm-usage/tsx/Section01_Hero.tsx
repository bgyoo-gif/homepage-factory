import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
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
  surfaceWhite: "#ffffff",
}

interface Props {
  titlePrefix?: string
  titleMain?: string
  descriptionText?: string
  productName?: string
}

export default function Section01_Hero({
  titlePrefix = "Secure",
  titleMain = " LLM Usage",
  descriptionText = "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
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
        @container (min-width: 768px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }

        .s1-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-size: 14px; color: ${PALETTE.brandSecondary};
          font-weight: 500; transition: color 0.15s; text-decoration: none;
        }
        .s1-breadcrumb__link:hover { color: ${PALETTE.brandPrimary}; }
        .s1-breadcrumb__sep { font-size: 14px; color: ${PALETTE.textTertiary}; }
        .s1-breadcrumb__current { font-size: 14px; color: ${PALETTE.textTertiary}; }

        .s1-title {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px 0;
          text-wrap: pretty;
        }
        .s1-title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s1-description {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://llmcapsule.ai/learn" },
            { "@type": "ListItem", "position": 3, "name": "Secure LLM Usage", "item": "https://llmcapsule.ai/learn/secure-llm-usage" }
          ]
        })}}
      />
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
              <span className="s1-breadcrumb__current">Secure LLM Usage</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
              <span className="s1-title-brand">{titlePrefix}</span>
              {titleMain}
            </h1>
            <p className="s1-description">
              {descriptionText} <span className="s1-product-name">{productName}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  titlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Secure",
  },
  titleMain: {
    type: ControlType.String,
    title: "Title Main",
    defaultValue: " LLM Usage",
  },
  descriptionText: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
