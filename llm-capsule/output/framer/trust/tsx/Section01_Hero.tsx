import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  title?: string
  titleHighlight?: string
  description?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtnText?: string
  secondaryBtnHref?: string
}

export default function Section01_Hero({
  title = "Enterprise-Grade",
  titleHighlight = "Security",
  description = "LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This security foundation is what enables enterprises to adopt AI confidently on their most sensitive data.",
  primaryBtnText = "Request a Demo",
  primaryBtnHref = "/request-a-demo",
  secondaryBtnText = "View Architecture",
  secondaryBtnHref = "/architecture",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding-top: 100px;
          padding-bottom: 0;
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
        @container s1 (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container s1 (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container s1 (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-hero {
          max-width: 1080px;
          box-sizing: border-box;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container s1 (min-width: 768px) {
          .s1-title { font-size: 40px; }
        }
        @container s1 (min-width: 1024px) {
          .s1-title { font-size: 48px; }
        }
        @container s1 (min-width: 1440px) {
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
          margin-bottom: 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container s1 (min-width: 1024px) {
          .s1-description { max-width: 720px; }
        }
        @container s1 (min-width: 1440px) {
          .s1-description { max-width: 1080px; }
        }

        .s1-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s1-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .s1-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          font-size: 16px;
          box-sizing: border-box;
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
      `}</style>
      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title">
                {title} <span className="s1-title-highlight">{titleHighlight}</span> and Compliance
              </h1>
              <p className="s1-description">
                <span className="s1-product">LLM Capsule</span> {description}
              </p>
              <div className="s1-actions">
                <a href={primaryBtnHref} className="s1-btn s1-btn--primary">{primaryBtnText}</a>
                <a href={secondaryBtnHref} className="s1-btn s1-btn--secondary">{secondaryBtnText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Trust", "item": "https://llmcapsule.ai/trust" }
        ]
      })}</script>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Enterprise-Grade" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Security" },
  description: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule is built for regulated enterprise environments. Certified, auditable, and designed for data sovereignty. This security foundation is what enables enterprises to adopt AI confidently on their most sensitive data." },
  primaryBtnText: { type: ControlType.String, title: "Primary Button", defaultValue: "Request a Demo" },
  primaryBtnHref: { type: ControlType.String, title: "Primary Button URL", defaultValue: "/request-a-demo" },
  secondaryBtnText: { type: ControlType.String, title: "Secondary Button", defaultValue: "View Architecture" },
  secondaryBtnHref: { type: ControlType.String, title: "Secondary Button URL", defaultValue: "/architecture" },
})
