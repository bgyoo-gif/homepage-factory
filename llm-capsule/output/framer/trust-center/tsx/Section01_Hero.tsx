import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  title?: string
  titleHighlight?: string
  description?: string
  productName?: string
}

export default function Section01_Hero({
  title = "Security & Compliance",
  titleHighlight = "Trust Center",
  description = "Certifications, compliance documentation, and security information for",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          background-color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-section { padding-bottom: 100px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-section { padding-bottom: 100px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-section { padding-bottom: 120px; }
        }

        .s1-hero {
          max-width: 1080px;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        @container (min-width: 768px) {
          .s1-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s1-title { font-size: 48px; }
        }
        @container (min-width: 1440px) {
          .s1-title { font-size: 64px; }
        }
        .s1-title-highlight {
          color: #5690D4;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) {
          .s1-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-description { max-width: 1080px; }
        }
        .s1-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>
      <section className="s1-section" aria-labelledby="s1-hero-title">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title" id="s1-hero-title" style={{ wordBreak: "keep-all" }}>
                {title} <span className="s1-title-highlight">{titleHighlight}</span>
              </h1>
              <p className="s1-description">
                {description} <span className="s1-product-name">{productName}</span> enterprise AI enablement.
              </p>
            </div>
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
    defaultValue: "Security & Compliance",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Trust Center",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Certifications, compliance documentation, and security information for",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
