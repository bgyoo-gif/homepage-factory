import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  neutral800:  "#171719",
  white:       "#ffffff",
  textInverse: "#ffffff",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  title?: string
  titleProduct?: string
  titleSuffix?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
}

export default function Section07_CTABand({
  title = "See how",
  titleProduct = "LLM Capsule",
  titleSuffix = "works with your data",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnoteLink2Label = "AWS Marketplace",
  footnoteLink2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.png');
          background-size: cover;
          background-position: center;
        }
        .s7-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s7-section > * { position: relative; z-index: 1; }

        .s7-inner {
          width: 100%;
          container-type: inline-size;
          position: relative;
          z-index: 1;
        }

        .s7-content {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .s7-content { max-width: 720px; } }
        @container (min-width: 1440px) { .s7-content { max-width: 1080px; } }

        @container (min-width: 768px)  { .s7-section { padding: 100px 32px; } }
        @container (min-width: 1440px) { .s7-section { padding: 120px 120px; } }

        .s7-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textInverse};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: balance;
        }
        @container (max-width: 767px) { .s7-title { font-size: 36px; } }
        @container (min-width: 1440px) { .s7-title { font-size: 50px; } }

        .s7-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
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
          text-decoration: none;
          white-space: nowrap;
          background-color: rgba(255, 255, 255, 0.92);
          color: ${P.neutral800};
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          transition: background-color 0.2s;
        }
        .s7-btn:hover { background-color: ${P.white}; }

        .s7-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          margin-top: 8px;
        }
        .s7-footnote a {
          color: rgba(255, 255, 255, 0.70);
          text-decoration: none;
          transition: color 0.15s;
        }
        .s7-footnote a:hover { color: ${P.white}; }

        @container (max-width: 767px) {
          .s7-actions { flex-direction: column; align-items: center; }
          .s7-btn { width: 100%; max-width: 320px; }
          .s7-section { background-image: none; }
        }
      `}</style>

      <section className="s7-section" id="section-cta">
        <div className="s7-inner">
          <div className="s7-content">
            <h2 className="s7-title" style={{ wordBreak: "keep-all" }}>
              {title} <span className="s7-product">{titleProduct}</span> {titleSuffix}
            </h2>
            <p className="s7-description">{description}</p>
            <div className="s7-actions">
              <a href={btn1Href} className="s7-btn">{btn1Label}</a>
            </div>
            <p className="s7-footnote">
              <a href={footnoteLink2Href} target="_blank" rel="noopener">{footnoteLink2Label}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_CTABand, {
  title: { type: ControlType.String, title: "Title Prefix", defaultValue: "See how" },
  titleProduct: { type: ControlType.String, title: "Title Product", defaultValue: "LLM Capsule" },
  titleSuffix: { type: ControlType.String, title: "Title Suffix", defaultValue: "works with your data" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  btn1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Request a Demo" },
  btn1Href:  { type: ControlType.String, title: "Button 1 URL",   defaultValue: "/request-a-demo" },
  footnoteLink2Label: { type: ControlType.String, title: "Footnote Link 2 Label", defaultValue: "AWS Marketplace" },
  footnoteLink2Href:  { type: ControlType.String, title: "Footnote Link 2 URL",   defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
})
