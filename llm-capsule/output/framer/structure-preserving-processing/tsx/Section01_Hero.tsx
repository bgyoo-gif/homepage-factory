import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://cubig.ai/assets"

interface Props {
  title?: string
  description?: string
  productName?: string
}

export default function Section01_Hero({
  title = "Structure-Preserving Processing",
  description = "Replacing sensitive elements while maintaining document layout, entity relationships, and semantic context for accurate AI processing — a core capability of",
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
          font-size: 14px; color: #5690D4;
          font-weight: 500; transition: color 0.15s; text-decoration: none;
        }
        .s1-breadcrumb__link:hover { color: #1821E8; }
        .s1-breadcrumb__sep { font-size: 14px; color: #9c9c9c; }
        .s1-breadcrumb__current { font-size: 14px; color: #9c9c9c; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s1-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s1;
        }

        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container s1 (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }

        @container s1 (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }

        @container s1 (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container s1 (min-width: 768px) {
          .s1-title { font-size: 36px; }
        }

        @container s1 (min-width: 1024px) {
          .s1-title { font-size: 44px; }
        }

        @container s1 (min-width: 1440px) {
          .s1-title { font-size: 52px; }
        }

        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s1-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
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
              <span className="s1-breadcrumb__current">Structure-Preserving Processing</span>
            </nav>
            <h1 className="s1-title">{title}</h1>
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
    defaultValue: "Structure-Preserving Processing",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Replacing sensitive elements while maintaining document layout, entity relationships, and semantic context for accurate AI processing — a core capability of",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
