import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
}

interface Props {
  title?: string
  description?: string
  productName?: string
}

export default function Section01_Hero({
  title = "Restorable Workflow",
  description = "An AI enablement pattern in which sensitive enterprise data is replaced with reversible, structure-preserving representations before AI processing — enabling",
  productName = "LLM Capsule",
}: Props) {
  const descriptionSuffix = " to automatically restore original enterprise data into AI outputs."

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
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
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }

        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
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
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>

      <section className="s1-section" id="section-hero">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="s1-breadcrumb__link">Home</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources" className="s1-breadcrumb__link">Resources</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources/glossary" className="s1-breadcrumb__link">Glossary</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">Restorable Workflow</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h1>
            <p className="s1-description">
              {description}{" "}
              <span className="s1-product-name">{productName}</span>
              {descriptionSuffix}
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
              { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary" },
              { "@type": "ListItem", "position": 4, "name": "Restorable Workflow", "item": "https://llmcapsule.ai/resources/glossary/restorable-workflow" }
            ]
          })
        }}
      />
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Restorable Workflow",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "An AI enablement pattern in which sensitive enterprise data is replaced with reversible, structure-preserving representations before AI processing — enabling",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
