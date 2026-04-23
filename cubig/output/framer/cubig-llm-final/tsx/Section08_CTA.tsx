import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

const P = {
  white: "#ffffff",
  textPrimary: "#0f0f0f",
  borderDefault: "#e6e7e9",
  surfaceLight: "#f7f7f7",
  bgImgGradBlue: `url('${IMAGE_BASE}/images/bg-gradient-blue-violet.png')`,
}

interface Props {
  ctaTitle?: string
  ctaDescription?: string
  btn1Label?: string
  btn1Href?: string
  btn2Label?: string
  btn2Href?: string
  btn3Label?: string
  btn3Href?: string
}

export default function Section08_CTA({
  ctaTitle = "Encapsulate. Process. Restore.",
  ctaDescription = "Use any AI on sensitive enterprise data and get usable results back. On-premise, air-gapped, or AWS Marketplace.",
  btn1Label = "Request a demo",
  btn1Href = "mailto:contact@cubig.ai",
  btn2Label = "Full product at llmcapsule.ai",
  btn2Href = "https://llmcapsule.ai",
  btn3Label = "Production cases",
  btn3Href = "/proof",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s8-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s8-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-size: cover;
          background-position: center;
          background-image: ${P.bgImgGradBlue};
          box-sizing: border-box;
        }

        .s8-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.25);
          z-index: 0;
        }

        .s8-cta-band > * { position: relative; z-index: 1; }

        @container (min-width: 768px) {
          .s8-cta-band { padding: 100px 32px; }
        }

        @container (min-width: 1440px) {
          .s8-cta-band { padding: 120px 120px; }
        }

        @container (max-width: 767px) {
          .s8-cta-band {
            background-image: none;
            background-color: #1a6fe8;
          }
          .s8-cta-band::before { display: none; }
        }

        .s8-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        @container (min-width: 1024px) {
          .s8-inner { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s8-inner { max-width: 860px; }
        }

        .s8-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s8-title { font-size: 36px; }
        }

        @container (min-width: 1440px) {
          .s8-title { font-size: 50px; }
        }

        .s8-description {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s8-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        @container (max-width: 767px) {
          .s8-actions {
            flex-direction: column;
            align-items: center;
          }
          .s8-btn {
            width: 100%;
            max-width: 320px;
          }
        }

        .s8-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.6);
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          backdrop-filter: blur(8px);
        }

        .s8-btn:hover { background-color: ${P.white}; }
      `}</style>

      <div className="s8-root">
        <section id="section-cta">
          <div className="s8-cta-band" aria-label="Call to action">
            <div className="s8-inner">
              <h2 className="s8-title">{ctaTitle}</h2>
              <p className="s8-description">{ctaDescription}</p>
              <div className="s8-actions">
                <a href={btn1Href} className="s8-btn">{btn1Label}</a>
                <a href={btn2Href} className="s8-btn" target="_blank" rel="noopener noreferrer">{btn2Label}</a>
                <a href={btn3Href} className="s8-btn">{btn3Label}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section08_CTA, {
  ctaTitle: { type: ControlType.String, title: "CTA Title", defaultValue: "Encapsulate. Process. Restore." },
  ctaDescription: { type: ControlType.String, title: "CTA Description", defaultValue: "Use any AI on sensitive enterprise data and get usable results back. On-premise, air-gapped, or AWS Marketplace." },
  btn1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Request a demo" },
  btn1Href: { type: ControlType.String, title: "Button 1 Href", defaultValue: "mailto:contact@cubig.ai" },
  btn2Label: { type: ControlType.String, title: "Button 2 Label", defaultValue: "Full product at llmcapsule.ai" },
  btn2Href: { type: ControlType.String, title: "Button 2 Href", defaultValue: "https://llmcapsule.ai" },
  btn3Label: { type: ControlType.String, title: "Button 3 Label", defaultValue: "Production cases" },
  btn3Href: { type: ControlType.String, title: "Button 3 Href", defaultValue: "/proof" },
})
