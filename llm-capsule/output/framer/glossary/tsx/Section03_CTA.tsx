import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleProduct?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
}

export default function Section03_CTA({
  title = "See how ",
  titleProduct = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnoteLink2Label = "Available on AWS Marketplace",
  footnoteLink2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          overflow: hidden;
        }

        .s3-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
        }

        .s3-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }

        .s3-cta-band > * {
          position: relative;
          z-index: 1;
        }

        .s3-inner-wrap {
          width: 100%;
          container-type: inline-size;
        }

        .s3-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        @container (min-width: 1024px) {
          .s3-inner { max-width: 720px; }
          .s3-cta-band { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .s3-inner { max-width: 1080px; }
          .s3-cta-band { padding: 120px 120px; }
        }

        .s3-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }

        @container (min-width: 768px) {
          .s3-title { font-size: 40px; }
          .s3-cta-band { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .s3-title { font-size: 50px; }
        }

        .s3-title__product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s3-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .s3-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 32px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-color: rgba(255, 255, 255, 0.92);
          color: #0f0f0f;
          text-decoration: none;
          white-space: nowrap;
          backdrop-filter: blur(8px);
          transition: background-color 0.2s;
        }

        .s3-btn:hover {
          background-color: #ffffff;
        }

        .s3-footnote {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 12px;
        }

        .s3-btn--ghost {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.85);
          padding: 8px 0;
          font-size: 14px;
          backdrop-filter: none;
          transition: color 0.15s;
        }

        .s3-btn--ghost:hover {
          background: none;
          color: #ffffff;
        }

        .s3-btn--secondary {
          background-color: transparent;
          border: 1px solid #e6e7e9;
          color: #0f0f0f;
          font-size: 14px;
          padding: 8px 16px;
          backdrop-filter: none;
        }

        .s3-btn--secondary:hover {
          background-color: #f7f7f7;
        }
      `}</style>

      <section className="s3-section" id="section-3">
        <div className="s3-inner-wrap">
          <div className="s3-cta-band" role="region" aria-label="Call to action">
            <div className="s3-inner">
              <h2 className="s3-title">
                {title}<span className="s3-title__product">{titleProduct}</span> works with your data
              </h2>
              <p className="s3-description">
                {description}
              </p>
              <div className="s3-actions">
                <a href={btn1Href} className="s3-btn">{btn1Label}</a>
              </div>
              <div className="s3-footnote">
                <a href={footnoteLink2Href} target="_blank" rel="noopener" className="s3-btn s3-btn--secondary">{footnoteLink2Label}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_CTA, {
  title: {
    type: ControlType.String,
    title: "Title (before product name)",
    defaultValue: "See how ",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  btn1Label: {
    type: ControlType.String,
    title: "Button 1: Label",
    defaultValue: "Request a Demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1: URL",
    defaultValue: "/request-a-demo",
  },
  footnoteLink2Label: {
    type: ControlType.String,
    title: "Footnote Link 2: Label",
    defaultValue: "Available on AWS Marketplace",
  },
  footnoteLink2Href: {
    type: ControlType.String,
    title: "Footnote Link 2: URL",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
