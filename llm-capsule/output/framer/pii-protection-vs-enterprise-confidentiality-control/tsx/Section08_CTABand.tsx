import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  neutral800: "#171719",
  white:      "#ffffff",
  // rgba(255,255,255,0.85)
  white85:    "rgba(255,255,255,0.85)",
  // rgba(255,255,255,0.70)
  white70:    "rgba(255,255,255,0.70)",
  // rgba(255,255,255,0.92)
  white92:    "rgba(255,255,255,0.92)",
  // rgba(255,255,255,0.6)
  white60:    "rgba(255,255,255,0.6)",
  // rgba(0,0,0,0.15)
  dark15:     "rgba(0,0,0,0.15)",
  textPrimary: "#0f0f0f",
  bgImage:    "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.png')",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  productName?: string
  titleSuffix?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  footnote2Label?: string
  footnote2Href?: string
  locale?: "en" | "ko"
}

export default function Section08_CTABand({
  title        = "See how",
  productName  = "LLM Capsule",
  titleSuffix  = "works with your data",
  description  = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  cta1Label    = "Request a Demo",
  cta1Href     = "request-pov.html",
  footnote2Label = "AWS Marketplace",
  footnote2Href  = "https://aws.amazon.com/marketplace",
  locale         = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: ${PALETTE.bgImage};
          background-size: cover;
          background-position: center;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s8-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.dark15};
          z-index: 0;
        }
        .s8-cta-band > * { position: relative; z-index: 1; }

        @container (max-width: 767px) {
          .s8-cta-band { background-image: none; }
        }

        .s8-cta-band__inner {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s8-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s8-cta-band { padding: 100px 32px; } }
        @container (min-width: 1024px) { .s8-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) {
          .s8-cta-band { padding: 120px 120px; }
          .s8-cta-band__inner { max-width: 1080px; }
          .s8-cta-band__title { font-size: 50px; }
        }
        @container (max-width: 767px) { .s8-cta-band__title { font-size: 36px; } }

        .s8-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s8-cta-band__description {
          font-size: 18px;
          color: ${PALETTE.white85};
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s8-cta-band__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .s8-cta-band__actions { flex-direction: column; align-items: center; }
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
          background-color: ${PALETTE.white92};
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.white60};
          backdrop-filter: blur(8px);
        }
        .s8-btn:hover { background-color: ${PALETTE.white}; }
        @container (max-width: 767px) {
          .s8-btn { width: 100%; max-width: 320px; }
        }

        .s8-cta-band__footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s8-cta-band__footnote a {
          font-size: 14px;
          color: ${PALETTE.white70};
          transition: color 0.2s;
          text-decoration: none;
        }
        .s8-cta-band__footnote a:hover { color: ${PALETTE.white}; }
      `}</style>

      <section className="s8-cta-band" id="section-cta" lang={locale}>
        <div className="s8-cta-band__inner">
          <h2 className="s8-cta-band__title">
            {title} <span className="s8-product-name">{productName}</span> {titleSuffix}
          </h2>
          <p className="s8-cta-band__description">{description}</p>
          <div className="s8-cta-band__actions">
            <a href={cta1Href} className="s8-btn">{cta1Label}</a>
          </div>
          <div className="s8-cta-band__footnote">
            <a href={footnote2Href} target="_blank" rel="noopener">{footnote2Label}</a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_CTABand, {
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
  titleSuffix: {
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
  cta1Label: {
    type: ControlType.String,
    title: "CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  cta1Href: {
    type: ControlType.String,
    title: "CTA 1 URL",
    defaultValue: "request-pov.html",
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
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
