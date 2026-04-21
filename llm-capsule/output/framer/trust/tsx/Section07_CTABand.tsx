import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleProduct?: string
  titleSuffix?: string
  description?: string
  btn1Text?: string
  btn1Href?: string
  footnote2Text?: string
  footnote2Href?: string
}

export default function Section07_CTABand({
  title = "See how",
  titleProduct = "LLM Capsule",
  titleSuffix = "works with your data",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Text = "Request a Demo",
  btn1Href = "/request-a-demo",
  footnote2Text = "Available on AWS Marketplace",
  footnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s7-cta-band {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
        }
        .s7-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s7-cta-band > * { position: relative; z-index: 1; }

        .s7-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s7;
          position: relative;
          z-index: 1;
        }
        .s7-band-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          box-sizing: border-box;
          padding: 0 16px;
        }
        @container s7 (min-width: 768px) {
          .s7-cta-band { padding: 100px 32px; }
          .s7-band-inner { padding: 0 32px; }
          .s7-title { font-size: 40px !important; }
        }
        @container s7 (min-width: 1024px) {
          .s7-band-inner { max-width: 720px; padding: 0; }
        }
        @container s7 (min-width: 1440px) {
          .s7-cta-band { padding: 120px 120px; }
          .s7-band-inner { max-width: 1080px; }
          .s7-title { font-size: 50px !important; }
        }

        .s7-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
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
          cursor: pointer;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          font-size: 16px;
          box-sizing: border-box;
          background-color: rgba(255, 255, 255, 0.92);
          color: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .s7-btn:hover { background-color: #ffffff; }

        .s7-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          align-items: center;
        }
        .s7-footnote a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.2s;
        }
        .s7-footnote a:hover { color: #ffffff; }
        .s7-footnote span { color: rgba(255, 255, 255, 0.55); }
      `}</style>
      <div className="s7-cta-band">
        <div className="s7-inner">
          <div className="s7-band-inner">
            <h2 className="s7-title" style={{ wordBreak: "keep-all" }}>
              {title} <span className="s7-product">{titleProduct}</span> {titleSuffix}
            </h2>
            <p className="s7-description">{description}</p>
            <div className="s7-actions">
              <a href={btn1Href} className="s7-btn">{btn1Text}</a>
            </div>
            <div className="s7-footnote">
              <a href={footnote2Href} target="_blank" rel="noopener">{footnote2Text}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section07_CTABand, {
  title: { type: ControlType.String, title: "Title Prefix", defaultValue: "See how" },
  titleProduct: { type: ControlType.String, title: "Title Product", defaultValue: "LLM Capsule" },
  titleSuffix: { type: ControlType.String, title: "Title Suffix", defaultValue: "works with your data" },
  description: { type: ControlType.String, title: "Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  btn1Text: { type: ControlType.String, title: "Button 1 Text", defaultValue: "Request a Demo" },
  btn1Href: { type: ControlType.String, title: "Button 1 URL", defaultValue: "/request-a-demo" },
  footnote2Text: { type: ControlType.String, title: "Footnote 2 Text", defaultValue: "Available on AWS Marketplace" },
  footnote2Href: { type: ControlType.String, title: "Footnote 2 URL", defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
})
