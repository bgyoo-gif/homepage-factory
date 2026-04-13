import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral800: "#171719",
  white:      "#ffffff",
  textInverse: "#ffffff",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  overlayNavBg: "rgba(255,255,255,0.92)",
  overlayCtaBtnBdr: "rgba(255,255,255,0.6)",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayWhite70: "rgba(255,255,255,0.70)",
}

interface Props {
  titlePrefix?: string
  productName?: string
  titleSuffix?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  footnote?: string
  jsonLd?: string
}

const DEFAULT_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary" },
    { "@type": "ListItem", "position": 4, "name": "Secure LLM Usage", "item": "https://llmcapsule.ai/resources/glossary/secure-llm-usage" }
  ]
})

export default function Section07_CTA({
  titlePrefix = "Enable ",
  productName = "Secure LLM Usage",
  titleSuffix = " for Your Enterprise",
  description = "Process sensitive data through any LLM without exposure. Experience the AI enablement data layer.",
  cta1Label = "Request a Demo",
  cta1Href = "request-pov.html",
  cta2Label = "View Product",
  cta2Href = "product.html",
  footnote = "Enterprise AI Enablement by CUBIG",
  jsonLd = DEFAULT_JSON_LD,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s7-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-blue-violet.webp');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s7-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkLight};
          z-index: 0;
        }
        .s7-inner {
          position: relative;
          z-index: 1;
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          container-type: inline-size;
        }
        .s7-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.textInverse};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s7-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s7-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s7-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s7-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 48px;
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          background-color: ${PALETTE.overlayNavBg};
          color: #0f0f0f;
          border: 1px solid ${PALETTE.overlayCtaBtnBdr};
          border-radius: 9999px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.2s;
          backdrop-filter: blur(8px);
        }
        .s7-btn:hover {
          background-color: ${PALETTE.white};
        }
        .s7-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: ${PALETTE.overlayWhite70};
          margin-top: 8px;
        }

        @container (min-width: 768px) {
          .s7-inner { max-width: 720px; }
        }
        @container (min-width: 1024px) {
          .s7-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s7-inner { max-width: 1080px; }
          .s7-title { font-size: 50px; }
        }
        @container (max-width: 767px) {
          .s7-title { font-size: 36px; }
          .s7-actions { flex-direction: column; align-items: center; }
          .s7-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}

      <section className="s7-section">
        <div className="s7-inner">
          <h2 className="s7-title">
            {titlePrefix}
            <span className="s7-product-name">{productName}</span>
            {titleSuffix}
          </h2>
          <p className="s7-description">{description}</p>
          <div className="s7-actions">
            <a href={cta1Href} className="s7-btn">{cta1Label}</a>
            <a href={cta2Href} className="s7-btn">{cta2Label}</a>
          </div>
          <p className="s7-footnote">{footnote}</p>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_CTA, {
  titlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Enable ",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "Secure LLM Usage",
  },
  titleSuffix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: " for Your Enterprise",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Process sensitive data through any LLM without exposure. Experience the AI enablement data layer.",
  },
  cta1Label: {
    type: ControlType.String,
    title: "CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  cta1Href: {
    type: ControlType.String,
    title: "CTA 1 URL",
    defaultValue: "request-pov.html",
  },
  cta2Label: {
    type: ControlType.String,
    title: "CTA 2 Label",
    defaultValue: "View Product",
  },
  cta2Href: {
    type: ControlType.String,
    title: "CTA 2 URL",
    defaultValue: "product.html",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "Enterprise AI Enablement by CUBIG",
  },
})
