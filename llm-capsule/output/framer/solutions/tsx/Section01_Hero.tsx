import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://llmcapsule.ai/solutions" },
  ],
}

interface Props {
  titleLine1?: string
  titleHighlight?: string
  description?: string
  primaryBtnLabel?: string
  primaryBtnHref?: string
  secondaryBtnLabel?: string
  secondaryBtnHref?: string
}

export default function Section01_Hero({
  titleLine1 = "AI, Now Safe for",
  titleHighlight = "Every Industry",
  description = "Regulated and document-heavy industries can now adopt AI on real enterprise data. LLM Capsule is an AI enablement data layer and plugin that removes the data exposure barrier blocking enterprise AI adoption — enabling AI first, protecting data at the data layer.",
  primaryBtnLabel = "Request a Demo",
  primaryBtnHref = "request-pov.html",
  secondaryBtnLabel = "See Product",
  secondaryBtnHref = "product.html",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s1-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 100px 0 0;
          background-color: #ffffff;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s1;
        }
        .s1-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }
        .s1-hero {
          text-align: center;
          margin: 0 auto;
        }
        .s1-hero .s1-description { margin-left: auto; margin-right: auto; }
        .s1-screenshot-frame {
          margin-top: 32px;
          padding: 24px 0 0;
          overflow: hidden;
        }
        .s1-screenshot { overflow: hidden; background: #ffffff; }
        .s1-screenshot img { width: 100%; display: block; }
        .s1-actions-below {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
          margin-top: 20px; padding-bottom: 48px;
        }
        @container s1 (max-width: 767px) {
          .s1-screenshot-frame { border-radius: 12px 12px 0 0; background-image: none; }
          .s1-actions-below { flex-direction: column; align-items: center; }
          .s1-actions-below .s1-btn { width: 100%; max-width: 320px; }
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #0f0f0f;
          margin-bottom: 12px;
          text-wrap: balance;
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
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s1-actions { display: none; }
        .s1-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 32px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .s1-btn--primary {
          background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
          color: #ffffff;
        }
        .s1-btn--primary:hover { opacity: 0.88; }
        .s1-btn--secondary {
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s1-btn--secondary:hover { background-color: #f7f7f7; }

        @container s1 (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 40px; }
        }
        @container s1 (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 48px; }
          .s1-description { max-width: 720px; }
        }
        @container s1 (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 64px; }
          .s1-description { max-width: 1080px; }
        }
      `}</style>
      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title">
                {titleLine1}{" "}
                <span className="s1-title-highlight">{titleHighlight}</span>
              </h1>
              <p className="s1-description">
                Regulated and document-heavy industries can now adopt AI on real enterprise data.{" "}
                <span className="s1-product">LLM Capsule</span> is an AI enablement data layer and plugin
                that removes the data exposure barrier blocking enterprise AI adoption &mdash; enabling AI
                first, protecting data at the data layer.
              </p>
            </div>
            <div className="s1-screenshot-frame">
              <div className="s1-screenshot">
                <img src="https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/solution-hero.png" alt="LLM Capsule — AI-powered document processing across regulated industries" loading="eager" />
              </div>
            </div>
            <div className="s1-actions-below">
              <a href={primaryBtnHref} className="s1-btn s1-btn--primary">
                {primaryBtnLabel}
              </a>
              <a href={secondaryBtnHref} className="s1-btn s1-btn--secondary">
                {secondaryBtnLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  titleLine1: {
    type: ControlType.String,
    title: "Title Line 1",
    defaultValue: "AI, Now Safe for",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Every Industry",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Regulated and document-heavy industries can now adopt AI on real enterprise data. LLM Capsule is an AI enablement data layer and plugin that removes the data exposure barrier blocking enterprise AI adoption — enabling AI first, protecting data at the data layer.",
    displayTextArea: true,
  },
  primaryBtnLabel: {
    type: ControlType.String,
    title: "Primary CTA",
    defaultValue: "Request a Demo",
  },
  primaryBtnHref: {
    type: ControlType.String,
    title: "Primary CTA URL",
    defaultValue: "request-pov.html",
  },
  secondaryBtnLabel: {
    type: ControlType.String,
    title: "Secondary CTA",
    defaultValue: "See Product",
  },
  secondaryBtnHref: {
    type: ControlType.String,
    title: "Secondary CTA URL",
    defaultValue: "product.html",
  },
})
