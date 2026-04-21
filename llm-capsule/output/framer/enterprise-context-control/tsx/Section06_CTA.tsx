import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────
const PALETTE = {
  white:         "#ffffff",
  neutral800:    "#171719",
  overlayLight:  "rgba(0,0,0,0.15)",
  overlayWhite85:"rgba(255,255,255,0.85)",
  overlayWhite70:"rgba(255,255,255,0.70)",
  overlayNavBg:  "rgba(255,255,255,0.92)",
  overlayBtnBdr: "rgba(255,255,255,0.6)",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  titlePre?: string
  titleProduct?: string
  titlePost?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  footnote?: string
}

export default function Section06_CTA({
  titlePre = "See",
  titleProduct = "LLM Capsule",
  titlePost = "Enterprise Context Control in Action",
  description = "Experience how policy-based sensitivity classification protects enterprise data across every document type and workflow.",
  cta1Label = "Request a Demo",
  cta1Href = "/request-a-demo",
  cta2Label = "View Product",
  cta2Href = "/product",
  footnote = "Enterprise AI Enablement by CUBIG",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
          padding: 80px 16px;
          container-type: inline-size;
        }

        .s6-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayLight};
          z-index: 0;
        }

        .s6-inner {
          position: relative;
          z-index: 1;
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        @container (min-width: 1024px) {
          .s6-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s6-section { padding: 120px 120px; }
          .s6-inner { max-width: 1080px; }
        }

        .s6-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }

        @container (min-width: 768px) {
          .s6-section { padding: 100px 32px; }
          .s6-title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s6-title { font-size: 50px; }
        }

        .s6-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s6-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
          white-space: nowrap;
          padding: 16px 48px;
          font-size: 18px;
          background-color: ${PALETTE.overlayNavBg};
          color: #0f0f0f;
          border: 1px solid ${PALETTE.overlayBtnBdr};
          backdrop-filter: blur(8px);
        }

        .s6-btn:hover { background-color: ${PALETTE.white}; }

        .s6-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: ${PALETTE.overlayWhite70};
          margin-top: 8px;
        }

        @container (max-width: 767px) {
          .s6-title { font-size: 36px; }
          .s6-actions { flex-direction: column; align-items: center; }
          .s6-btn { width: 100%; max-width: 320px; }
          .s6-section { background-image: none; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <h2 className="s6-title" style={{ wordBreak: "keep-all" }}>
            {titlePre}{" "}
            <span className="s6-product">{titleProduct}</span>{" "}
            {titlePost}
          </h2>
          <p className="s6-description">{description}</p>
          <div className="s6-actions">
            <a href={cta1Href} className="s6-btn">{cta1Label}</a>
            <a href={cta2Href} className="s6-btn">{cta2Label}</a>
          </div>
          <p className="s6-footnote">{footnote}</p>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_CTA, {
  titlePre: {
    type: ControlType.String,
    title: "Title (Pre)",
    defaultValue: "See",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Title (Product Name)",
    defaultValue: "LLM Capsule",
  },
  titlePost: {
    type: ControlType.String,
    title: "Title (Post)",
    defaultValue: "Enterprise Context Control in Action",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Experience how policy-based sensitivity classification protects enterprise data across every document type and workflow.",
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
    defaultValue: "View Product",
  },
  cta2Href: {
    type: ControlType.String,
    title: "CTA 2 URL",
    defaultValue: "/product",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "Enterprise AI Enablement by CUBIG",
  },
})
