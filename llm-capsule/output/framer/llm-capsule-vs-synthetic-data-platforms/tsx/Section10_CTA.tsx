import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800: "#171719",
  white:      "#ffffff",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  overlayNavBg: "rgba(255,255,255,0.92)",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayWhite70: "rgba(255,255,255,0.70)",
  overlayCtaBtnBdr: "rgba(255,255,255,0.6)",
}

interface Props {
  title?: string
  titleBrand?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnote2Label?: string
  footnote2Href?: string
}

export default function Section10_CTA({
  title = "See how",
  titleBrand = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnote2Label = "AWS Marketplace",
  footnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s10-section {
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
        .s10-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkLight};
          z-index: 0;
        }
        .s10-section > * { position: relative; z-index: 1; }

        .s10-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          container-type: inline-size;
        }

        @container (min-width: 1024px) {
          .s10-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s10-inner { max-width: 1080px; }
        }

        .s10-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
        }
        .s10-brand-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s10-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s10-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s10-btn {
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
          background-color: ${PALETTE.overlayNavBg};
          color: #0f0f0f;
          border: 1px solid ${PALETTE.overlayCtaBtnBdr};
          backdrop-filter: blur(8px);
        }
        .s10-btn:hover { background-color: ${PALETTE.white}; }

        .s10-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s10-footnote a {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.overlayWhite70};
          transition: color 0.2s;
          text-decoration: none;
        }
        .s10-footnote a:hover { color: ${PALETTE.white}; }

        @container (min-width: 768px) {
          .s10-section { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .s10-section { padding: 120px 120px; }
          .s10-title { font-size: 50px; }
        }
      `}</style>

      <section className="s10-section">
        <div className="s10-inner">
          <h2 className="s10-title" style={{ wordBreak: "keep-all" }}>
            {title}
          </h2>
          <p className="s10-description">{description}</p>
          <div className="s10-actions">
            <a href={btn1Href} className="s10-btn">{btn1Label}</a>
          </div>
          <div className="s10-footnote">
            <a href={footnote2Href} target="_blank" rel="noopener">{footnote2Label}</a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_CTA, {
  title: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "See how",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Brand Name",
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
    title: "Button 1 Label",
    defaultValue: "Request a Demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 URL",
    defaultValue: "/request-a-demo",
  },
  footnote2Label: {
    type: ControlType.String,
    title: "Footnote 2 Label",
    defaultValue: "AWS Marketplace",
  },
  footnote2Href: {
    type: ControlType.String,
    title: "Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
