import { addPropertyControls, ControlType } from "framer"

const BG_IMAGE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png"

interface Props {
  title?: string
  productName?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
}

export default function Section08_CTA({
  title = "See how",
  productName = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  cta1Label = "Request a Demo",
  cta1Href = "/request-a-demo",
  footnoteLink2Label = "AWS Marketplace",
  footnoteLink2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('${BG_IMAGE}');
          background-size: cover;
          background-position: center;
        }
        .s8-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s8-section > * { position: relative; z-index: 1; }

        .s8-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s8-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s8-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s8-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s8-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s8-btn {
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
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255, 255, 255, 0.92);
          color: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .s8-btn:hover { background-color: #ffffff; }
        .s8-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          margin-top: 8px;
        }
        .s8-footnote a {
          color: inherit;
          text-decoration: none;
        }
        .s8-footnote a:hover { text-decoration: underline; }

        /* Container query for responsive */
        .s8-outer {
          width: 100%;
          container-type: inline-size;
        }

        @container (min-width: 768px) {
          .s8-section { padding: 100px 32px; }
          .s8-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s8-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s8-section { padding: 120px 120px; background-image: url('${BG_IMAGE}'); }
          .s8-inner { max-width: 1080px; }
          .s8-title { font-size: 50px; }
        }
        @container (max-width: 767px) {
          .s8-section { background-image: none; }
          .s8-title { font-size: 36px; }
          .s8-actions { flex-direction: column; align-items: center; }
          .s8-btn { width: 100%; max-width: 320px; }
        }
      `}</style>
      <div className="s8-outer">
        <section className="s8-section" id="section-cta">
          <div className="s8-inner">
            <h2 className="s8-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h2>
            <p className="s8-description">{description}</p>
            <div className="s8-actions">
              <a href={cta1Href} className="s8-btn">{cta1Label}</a>
            </div>
            <p className="s8-footnote">
              <a href={footnoteLink2Href} target="_blank" rel="noopener">{footnoteLink2Label}</a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_CTA, {
  title: { type: ControlType.String, title: "Title (before product name)", defaultValue: "See how" },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  cta1Label: { type: ControlType.String, title: "CTA 1 Label", defaultValue: "Request a Demo" },
  cta1Href: { type: ControlType.String, title: "CTA 1 URL", defaultValue: "/request-a-demo" },
  footnoteLink2Label: { type: ControlType.String, title: "Footnote Link 2 Label", defaultValue: "AWS Marketplace" },
  footnoteLink2Href: { type: ControlType.String, title: "Footnote Link 2 URL", defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
})
