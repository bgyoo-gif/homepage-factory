import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral800:   "#171719",
  white:        "#ffffff",
  textInverse:  "#ffffff",
}

interface Props {
  title?: string
  titlePrefix?: string
  productName?: string
  description?: string
  primaryBtnLabel?: string
  primaryBtnHref?: string
  footnote2Label?: string
  footnote2Href?: string
}

export default function Section07_CTABand({
  title = "See how",
  titlePrefix = "works with your data",
  productName = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  primaryBtnLabel = "Request a Demo",
  primaryBtnHref = "/request-a-demo",
  footnote2Label = "AWS Marketplace",
  footnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s7-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-navy-teal.png');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s7-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s7-cta-band > * {
          position: relative;
          z-index: 1;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-inner-wrap {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s7-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7-product-text {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
          color: ${PALETTE.white};
        }
        .s7-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s7-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s7-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 18px;
          padding: 16px 48px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.92);
          color: ${PALETTE.neutral800};
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          box-sizing: border-box;
        }
        .s7-btn:hover {
          background-color: ${PALETTE.white};
        }
        .s7-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s7-footnote a {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.70);
          text-decoration: none;
          transition: color 0.2s;
        }
        .s7-footnote a:hover {
          color: ${PALETTE.white};
        }

        @container (min-width: 768px) {
          .s7-cta-band { padding: 100px 32px; }
          .s7-inner-wrap { max-width: 720px; }
        }
        @container (min-width: 1024px) {
          .s7-inner-wrap { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s7-cta-band { padding: 120px 120px; background-image: url('${IMAGE_BASE}/bg-gradient-navy-teal.png'); }
          .s7-inner-wrap { max-width: 1080px; }
          .s7-title { font-size: 50px; }
          .s7-actions { flex-direction: row; }
        }
        @container (max-width: 767px) {
          .s7-cta-band { background-image: none; }
          .s7-title { font-size: 36px; }
          .s7-actions { flex-direction: column; align-items: center; }
          .s7-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <section className="s7-cta-band">
        <div className="s7-inner">
          <div className="s7-inner-wrap">
            <h2 className="s7-title">
              {title} <span className="s7-product-text">{productName}</span> {titlePrefix}
            </h2>
            <p className="s7-description">{description}</p>
            <div className="s7-actions">
              <a href={primaryBtnHref} className="s7-btn">{primaryBtnLabel}</a>
            </div>
            <div className="s7-footnote">
              <a href={footnote2Href} target="_blank" rel="noopener">{footnote2Label}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_CTABand, {
  title: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "See how",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  titlePrefix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "works with your data",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  primaryBtnLabel: {
    type: ControlType.String,
    title: "Primary Btn",
    defaultValue: "Request a Demo",
  },
  primaryBtnHref: {
    type: ControlType.String,
    title: "Primary Btn Href",
    defaultValue: "/request-a-demo",
  },
  footnote2Label: {
    type: ControlType.String,
    title: "Footnote 2",
    defaultValue: "AWS Marketplace",
  },
  footnote2Href: {
    type: ControlType.String,
    title: "Footnote 2 Href",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
