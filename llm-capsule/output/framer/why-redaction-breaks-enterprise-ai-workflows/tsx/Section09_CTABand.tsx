import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandFont:      "Oxanium",
  textInverse:    "#ffffff",
  neutral800:     "#171719",
  white:          "#ffffff",
  overlayDarkLt:  "rgba(0,0,0,0.15)",
  overlayNavBg:   "rgba(255,255,255,0.92)",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayWhite70: "rgba(255,255,255,0.70)",
  overlayBtnBdr:  "rgba(255,255,255,0.6)",
  textPrimary:    "#0f0f0f",
  trackingTight:  "-0.5px",
  bgImgNavy:      "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png')",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  titlePre?: string
  productName?: string
  titlePost?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  footnote1Label?: string
  footnote1Href?: string
  footnote2Label?: string
  footnote2Href?: string
}

export default function Section09_CTABand({
  titlePre = "See how",
  productName = "LLM Capsule",
  titlePost = "works with your data",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  cta1Label = "Request a Demo",
  cta1Href = "/request-a-demo",
  cta2Label = "Talk to an Architect",
  cta2Href = "/architecture",
  footnote1Label = "Download Architecture Brief",
  footnote1Href = "/downloads",
  footnote2Label = "AWS Marketplace",
  footnote2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s9-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: ${C.bgImgNavy};
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s9-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${C.overlayDarkLt};
          z-index: 0;
        }
        .s9-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s9;
          position: relative;
          z-index: 1;
        }
        .s9-band-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s9-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          margin: 0;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9-product {
          font-family: "${C.brandFont}", sans-serif;
          font-weight: 700;
        }
        .s9-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${C.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s9-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          flex-direction: column;
          align-items: center;
        }
        .s9-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: ${C.overlayNavBg};
          color: ${C.textPrimary};
          border: 1px solid ${C.overlayBtnBdr};
          backdrop-filter: blur(8px);
          width: 100%;
          max-width: 320px;
          transition: background-color 0.2s;
          box-sizing: border-box;
        }
        .s9-btn:hover { background-color: ${C.white}; }
        .s9-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s9-footnote a {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${C.overlayWhite70};
          text-decoration: none;
          transition: color 0.2s;
        }
        .s9-footnote a:hover { color: ${C.white}; }

        @container s9 (min-width: 768px) {
          .s9-section { padding: 100px 32px; }
          .s9-title { font-size: 40px; }
          .s9-actions { flex-direction: row; }
          .s9-btn { width: auto; max-width: none; }
        }
        @container s9 (min-width: 1024px) {
          .s9-band-inner { max-width: 720px; }
        }
        @container s9 (min-width: 1440px) {
          .s9-section { padding: 120px 120px; background-image: ${C.bgImgNavy}; }
          .s9-band-inner { max-width: 1080px; }
          .s9-title { font-size: 50px; }
        }
      `}</style>

      <section className="s9-section">
        <div className="s9-inner">
          <div className="s9-band-inner">
            <h2 className="s9-title">
              {titlePre}{" "}
              <span className="s9-product">{productName}</span>{" "}
              {titlePost}
            </h2>
            <p className="s9-description">{description}</p>
            <div className="s9-actions">
              <a href={cta1Href} className="s9-btn">{cta1Label}</a>
              <a href={cta2Href} className="s9-btn">{cta2Label}</a>
            </div>
            <div className="s9-footnote">
              <a href={footnote1Href}>{footnote1Label}</a>
              <a href={footnote2Href} target="_blank" rel="noopener noreferrer">{footnote2Label}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_CTABand, {
  titlePre: {
    type: ControlType.String,
    title: "Title (Pre)",
    defaultValue: "See how",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  titlePost: {
    type: ControlType.String,
    title: "Title (Post)",
    defaultValue: "works with your data",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  cta1Label: {
    type: ControlType.String,
    title: "CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  cta1Href: {
    type: ControlType.String,
    title: "CTA 1 URL",
    defaultValue: "/request-a-demo",
  },
  cta2Label: {
    type: ControlType.String,
    title: "CTA 2 Label",
    defaultValue: "Talk to an Architect",
  },
  cta2Href: {
    type: ControlType.String,
    title: "CTA 2 URL",
    defaultValue: "/architecture",
  },
  footnote1Label: {
    type: ControlType.String,
    title: "Footnote 1 Label",
    defaultValue: "Download Architecture Brief",
  },
  footnote1Href: {
    type: ControlType.String,
    title: "Footnote 1 URL",
    defaultValue: "/downloads",
  },
  footnote2Label: {
    type: ControlType.String,
    title: "Footnote 2 Label",
    defaultValue: "AWS Marketplace",
  },
  footnote2Href: {
    type: ControlType.String,
    title: "Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
