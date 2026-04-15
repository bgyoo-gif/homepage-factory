import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
}

interface Props {
  title?: string
  productName?: string
  description?: string
  button1Label?: string
  button1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
}

export default function Section05_CTA({
  title = "See how",
  productName = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  button1Label = "Request a Demo",
  button1Href = "/request-a-demo",
  footnoteLink2Label = "Available on AWS Marketplace",
  footnoteLink2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-size: cover;
          background-position: center;
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.png');
          box-sizing: border-box;
        }
        .s5-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .s5-section > * { position: relative; z-index: 1; }

        .s5-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) {
          .s5-section { padding: 100px 32px; }
          .s5-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s5-section { padding: 120px 120px; }
          .s5-inner { max-width: 1080px; }
        }

        /* Because CTA is full-width, we use a wrapper with container-type */
        .s5-wrap {
          width: 100%;
          container-type: inline-size;
        }

        .s5-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container (min-width: 1440px) {
          .s5-title { font-size: 50px; }
        }
        @container (max-width: 767px) {
          .s5-title { font-size: 36px; }
          .s5-section { background-image: none; background-color: #1821E8; }
        }

        .s5-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s5-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s5-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .s5-actions { flex-direction: column; align-items: center; }
        }

        .s5-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          padding: 12px 32px;
          text-decoration: none;
          transition: background-color 0.2s;
          background-color: rgba(255,255,255,0.92);
          color: ${PALETTE.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          background-image: none;
          white-space: nowrap;
        }
        .s5-btn:hover {
          background-color: #ffffff;
        }
        @container (max-width: 767px) {
          .s5-btn { width: 100%; max-width: 320px; }
        }

        .s5-footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          font-family: "Fragment Mono", monospace;
          letter-spacing: 0.08em;
        }
        .s5-footnote a {
          color: rgba(255,255,255,0.8);
          text-decoration: underline;
        }
        .s5-footnote a:hover { color: #ffffff; }
      `}</style>

      <div className="s5-wrap">
        <section className="s5-section" id="section-5">
          <div className="s5-inner">
            <h2 className="s5-title">
              {title}{" "}
              <span className="s5-product-name">{productName}</span>
              {" "}works with your data
            </h2>
            <p className="s5-description">{description}</p>
            <div className="s5-actions">
              <a href={button1Href} className="s5-btn">{button1Label}</a>
            </div>
            <div className="s5-footnote">
              <a href={footnoteLink2Href} target="_blank" rel="noopener">{footnoteLink2Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_CTA, {
  title: { type: ControlType.String, title: "Title (before product)", defaultValue: "See how" },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.", displayTextArea: true },
  button1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Request a Demo" },
  button1Href: { type: ControlType.String, title: "Button 1 URL", defaultValue: "/request-a-demo" },
  footnoteLink2Label: { type: ControlType.String, title: "Footnote Link 2", defaultValue: "Available on AWS Marketplace" },
  footnoteLink2Href: { type: ControlType.String, title: "Footnote Link 2 URL", defaultValue: "https://aws.amazon.com/marketplace" },
})
