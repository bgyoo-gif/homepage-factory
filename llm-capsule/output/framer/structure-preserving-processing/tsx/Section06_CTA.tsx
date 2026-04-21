import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  titlePrefix?: string
  productName?: string
  titleSuffix?: string
  description?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  footnote?: string
  jsonLd?: string
}

export default function Section06_CTA({
  titlePrefix = "See",
  productName = "LLM Capsule",
  titleSuffix = "Structure-Preserving Processing in Action",
  description = "Experience how enterprise documents retain full structural integrity throughout the encapsulation and AI processing pipeline.",
  primaryButtonLabel = "Request a Demo",
  primaryButtonHref = "/request-a-demo",
  secondaryButtonLabel = "View Product",
  secondaryButtonHref = "/product",
  footnote = "Enterprise AI Enablement by CUBIG",
  jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
      { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary" },
      { "@type": "ListItem", "position": 4, "name": "Structure-Preserving Processing", "item": "https://llmcapsule.ai/resources/glossary/structure-preserving-processing" },
    ],
  }),
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
        }

        .s6-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }

        .s6-section > * {
          position: relative;
          z-index: 1;
        }

        .s6-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s6-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s6-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s6-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255, 255, 255, 0.92);
          color: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }

        .s6-btn:hover {
          background-color: #ffffff;
        }

        .s6-footnote {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          margin-top: 8px;
        }

        .s6-inner-container {
          width: 100%;
          container-type: inline-size;
          container-name: s6;
        }

        @container s6 (min-width: 768px) {
          .s6-section { padding: 100px 32px; }
          .s6-title { font-size: 40px; }
        }

        @container s6 (min-width: 1024px) {
          .s6-inner { max-width: 720px; }
        }

        @container s6 (min-width: 1440px) {
          .s6-section { padding: 120px 120px; }
          .s6-inner { max-width: 1080px; }
          .s6-title { font-size: 50px; }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <section className="s6-section">
        <div className="s6-inner-container">
          <div className="s6-inner">
            <h2 className="s6-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
              {titlePrefix} <span className="s6-product-name">{productName}</span> {titleSuffix}
            </h2>
            <p className="s6-description">{description}</p>
            <div className="s6-actions">
              <a href={primaryButtonHref} className="s6-btn">{primaryButtonLabel}</a>
              <a href={secondaryButtonHref} className="s6-btn">{secondaryButtonLabel}</a>
            </div>
            <p className="s6-footnote">{footnote}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_CTA, {
  titlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "See",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  titleSuffix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "Structure-Preserving Processing in Action",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Experience how enterprise documents retain full structural integrity throughout the encapsulation and AI processing pipeline.",
  },
  primaryButtonLabel: {
    type: ControlType.String,
    title: "Primary Button Label",
    defaultValue: "Request a Demo",
  },
  primaryButtonHref: {
    type: ControlType.String,
    title: "Primary Button Href",
    defaultValue: "/request-a-demo",
  },
  secondaryButtonLabel: {
    type: ControlType.String,
    title: "Secondary Button Label",
    defaultValue: "View Product",
  },
  secondaryButtonHref: {
    type: ControlType.String,
    title: "Secondary Button Href",
    defaultValue: "/product",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "Enterprise AI Enablement by CUBIG",
  },
})
