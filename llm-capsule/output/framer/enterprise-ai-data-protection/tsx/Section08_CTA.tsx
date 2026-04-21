import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  neutral800:  "#171719",
  white:       "#ffffff",
  textPrimary: "#0f0f0f",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  ctaTitle?: string
  ctaTitleBefore?: string
  ctaTitleAfter?: string
  productName?: string
  ctaDescription?: string
  btn1Label?: string
  btn1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
}

export default function Section08_CTA({
  ctaTitle = "See how",
  ctaTitleAfter = "works with your data",
  productName = "LLM Capsule",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnoteLink2Label = "AWS Marketplace",
  footnoteLink2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-cta {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
        }
        .s8-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .s8-cta > * { position: relative; z-index: 1; }
        .s8-cta__inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s8-cta__title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s8-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s8-cta__description {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s8-cta__actions {
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
          border: 1px solid rgba(255,255,255,0.6);
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${PALETTE.textPrimary};
          backdrop-filter: blur(8px);
        }
        .s8-btn:hover { background-color: ${PALETTE.white}; }
        .s8-cta__footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          margin-top: 8px;
        }
        .s8-cta__footnote a {
          color: inherit;
          text-decoration: none;
        }
        .s8-cta__footnote a:hover { text-decoration: underline; }

        /* Mobile bg-image removal — @container required for background-image */
        @container (max-width: 767px) {
          .s8-cta { background-image: none; }
          .s8-cta__actions { flex-direction: column; align-items: center; }
          .s8-cta__actions .s8-btn { width: 100%; max-width: 320px; }
        }

        .s8-cta-wrap { width: 100%; container-type: inline-size; }

        @container (min-width: 768px) {
          .s8-cta { padding: 100px 32px; }
        }
        @container (min-width: 1024px) {
          .s8-cta__inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s8-cta { padding: 120px 120px; }
          .s8-cta__title { font-size: 50px; }
          .s8-cta__inner { max-width: 1080px; }
        }
      `}</style>
      <div className="s8-cta-wrap">
      <section className="s8-cta" id="section-cta">
        <div className="s8-cta__inner">
          <h2 className="s8-cta__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
            {ctaTitle} <span className="s8-product-name">{productName}</span> {ctaTitleAfter}
          </h2>
          <p className="s8-cta__description">{ctaDescription}</p>
          <div className="s8-cta__actions">
            <a href={btn1Href} className="s8-btn">{btn1Label}</a>
          </div>
          <p className="s8-cta__footnote">
            <a href={footnoteLink2Href} target="_blank" rel="noopener">{footnoteLink2Label}</a>
          </p>
        </div>
      </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_CTA, {
  ctaTitle: { type: ControlType.String, title: "CTA Title (before product name)", defaultValue: "See how" },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  ctaTitleAfter: { type: ControlType.String, title: "CTA Title (after product name)", defaultValue: "works with your data" },
  ctaDescription: {
    type: ControlType.String, title: "CTA Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  btn1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Request a Demo" },
  btn1Href: { type: ControlType.String, title: "Button 1 URL", defaultValue: "/request-a-demo" },
  footnoteLink2Label: { type: ControlType.String, title: "Footnote Link 2", defaultValue: "AWS Marketplace" },
  footnoteLink2Href: { type: ControlType.String, title: "Footnote Link 2 URL", defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
})
