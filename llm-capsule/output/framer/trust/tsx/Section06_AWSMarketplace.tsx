import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

interface Props {
  bannerText?: string
  btnText?: string
  btnHref?: string
}

export default function Section06_AWSMarketplace({
  bannerText = "LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments.",
  btnText = "View on AWS Marketplace",
  btnHref = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s6-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s6;
        }
        .s6-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s6 (min-width: 768px) {
          .s6-container { padding: 0 32px; }
        }
        @container s6 (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
        }
        @container s6 (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Banner Full */
        .s6-banner--full {
          padding: 48px 24px;
          text-align: center;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-wave-teal.png');
          background-size: cover;
          background-position: center;
          background-color: #f7f7f7;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        .s6-banner--full::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.45);
          z-index: 0;
        }
        .s6-banner--full > * { position: relative; z-index: 1; }
        .s6-banner--full p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          max-width: 1080px;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s6-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s6-banner__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
          position: relative;
          z-index: 1;
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
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          font-size: 14px;
          box-sizing: border-box;
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s6-btn:hover { background-color: #f7f7f7; }
      `}</style>
      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-banner--full">
              <p>
                <span className="s6-product">LLM Capsule</span> {bannerText}
              </p>
              <div className="s6-banner__actions">
                <a href={btnHref} target="_blank" rel="noopener" className="s6-btn">
                  {btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_AWSMarketplace, {
  bannerText: { type: ControlType.String, title: "Banner Text", defaultValue: "LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and deployment within AWS environments." },
  btnText: { type: ControlType.String, title: "Button Text", defaultValue: "View on AWS Marketplace" },
  btnHref: { type: ControlType.String, title: "Button URL", defaultValue: "https://aws.amazon.com/marketplace" },
})
