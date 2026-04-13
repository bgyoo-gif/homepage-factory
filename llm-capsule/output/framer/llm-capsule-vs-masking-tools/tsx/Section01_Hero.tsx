import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800:     "#171719",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
}

interface Props {
  title?: string
  titleProduct?: string
  description?: string
  descriptionProduct?: string
}

export default function Section01_Hero({
  title = "vs Masking Tools",
  titleProduct = "LLM Capsule",
  description = "How {product}'s structure-preserving encapsulation compares to traditional masking and redaction tools for enterprise AI workflows.",
  descriptionProduct = "LLM Capsule",
}: Props) {
  const descriptionText = description.replace("{product}", descriptionProduct)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
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
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          margin: 0 0 16px 0;
          text-wrap: balance;
        }
        .s1-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s1-description {
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://llmcapsule.ai/learn" },
            { "@type": "ListItem", "position": 3, "name": "LLM Capsule vs Masking Tools", "item": "https://llmcapsule.ai/learn/llm-capsule-vs-masking-tools" }
          ]
        })}}
      />
      <section className="s1-section" id="section-hero">
        <div className="s1-inner">
          <div className="s1-container">
            <h1 className="s1-title">
              <span className="s1-product">{titleProduct}</span> {title}
            </h1>
            <p className="s1-description">
              How <span className="s1-product">{descriptionProduct}</span>'s structure-preserving encapsulation compares to traditional masking and redaction tools for enterprise AI workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  titleProduct: {
    type: ControlType.String,
    title: "Title Product",
    defaultValue: "LLM Capsule",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "vs Masking Tools",
  },
  descriptionProduct: {
    type: ControlType.String,
    title: "Desc Product",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "How {product}'s structure-preserving encapsulation compares to traditional masking and redaction tools for enterprise AI workflows.",
    displayTextArea: true,
  },
})
