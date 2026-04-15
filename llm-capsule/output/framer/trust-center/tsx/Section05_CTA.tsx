import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  title?: string
  productName?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnote2Label?: string
  footnote2Href?: string
}

export default function Section05_CTA({
  title = "See how",
  productName = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnote2Label = "Available on AWS Marketplace",
  footnote2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 0;
          background-color: #ffffff;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s5-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
        }
        @container (min-width: 768px) {
          .s5-cta-band { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .s5-cta-band { padding: 120px 120px; }
        }
        .s5-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .s5-cta-band > * { position: relative; z-index: 1; }

        .s5-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .s5-cta-inner { max-width: 720px; } }
        @container (min-width: 1440px) { .s5-cta-inner { max-width: 1080px; } }

        .s5-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        @container (max-width: 767px) { .s5-cta-title { font-size: 36px; } }
        @container (min-width: 1440px) { .s5-cta-title { font-size: 50px; } }

        .s5-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s5-cta-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .s5-cta-actions { flex-direction: column; align-items: center; }
          .s5-cta-actions .s5-btn { width: 100%; max-width: 320px; }
        }
        .s5-cta-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        @container (max-width: 767px) {
          .s5-cta-footnote { flex-direction: column; align-items: center; }
          .s5-cta-footnote .s5-btn { width: 100%; max-width: 320px; }
        }

        .s5-btn {
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
        }
        .s5-btn-md {
          padding: 12px 32px;
          font-size: 16px;
        }
        .s5-btn-sm {
          padding: 8px 16px;
          font-size: 14px;
        }
        .s5-btn-action {
          background-color: rgba(255,255,255,0.85);
          color: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .s5-btn-action:hover { background-color: #ffffff; }
        .s5-btn-footnote {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.6);
        }
        .s5-btn-footnote:hover { background-color: rgba(255,255,255,0.6); }
      `}</style>
      <section className="s5-section" aria-labelledby="s5-cta-title">
        <div className="s5-inner">
          <div className="s5-cta-band">
            <div className="s5-cta-inner">
              <h2 className="s5-cta-title" id="s5-cta-title">
                {title} <span className="s5-product-name">{productName}</span> works with your data
              </h2>
              <p className="s5-cta-desc">{description}</p>
              <div className="s5-cta-actions">
                <a href={btn1Href} className="s5-btn s5-btn-md s5-btn-action">{btn1Label}</a>
              </div>
              <div className="s5-cta-footnote">
                <a href={footnote2Href} className="s5-btn s5-btn-sm s5-btn-footnote" target="_blank" rel="noopener">{footnote2Label}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_CTA, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "See how",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  },
  btn1Label: {
    type: ControlType.String,
    title: "Button 1 Label",
    defaultValue: "Request a Demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 Href",
    defaultValue: "/request-a-demo",
  },
  footnote2Label: {
    type: ControlType.String,
    title: "Footnote 2 Label",
    defaultValue: "Available on AWS Marketplace",
  },
  footnote2Href: {
    type: ControlType.String,
    title: "Footnote 2 Href",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
