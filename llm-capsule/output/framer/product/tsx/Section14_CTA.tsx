import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  white:           "#ffffff",
  textPrimary:     "#0f0f0f",
  overlayWhite85:  "rgba(255,255,255,0.85)",
  overlayNavBg:    "rgba(255,255,255,0.92)",
  overlayCtaBdr:   "rgba(255,255,255,0.6)",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  borderDefault:   "#e6e7e9",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  title?: string
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

export default function Section14_CTA({
  title       = "See how LLM Capsule fits your environment, documents, and controls",
  description = "Bring your documents, deployment constraints, and evaluation questions. We demonstrate enterprise AI enablement on your actual data, in your environment, against your compliance requirements.",
  cta1Label   = "Request a Demo",
  cta1Href    = "/request-a-demo",
  cta2Label   = "Talk to an Architect",
  cta2Href    = "/architecture",
  footnote1Label = "Download Architecture Brief",
  footnote1Href  = "/downloads",
  footnote2Label = "View on AWS Marketplace",
  footnote2Href  = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s14-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        .s14-inner { width: 100%; container-type: inline-size; }

        .s14-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/images/bg-gradient-violet-teal.png');
          background-size: cover;
          background-position: center;
        }
        @container (max-width: 767px) {
          .s14-cta-band { background-image: none; }
        }
        @container (min-width: 768px) {
          .s14-cta-band { padding: 100px 32px; }
        }
        @container (min-width: 1440px) {
          .s14-cta-band { padding: 120px 120px; }
        }
        .s14-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkLight};
          z-index: 0;
        }
        .s14-cta-band > * { position: relative; z-index: 1; }

        .s14-inner-content {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .s14-inner-content { max-width: 720px; } }
        @container (min-width: 1440px) { .s14-inner-content { max-width: 1080px; } }

        .s14-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        @container (max-width: 767px) { .s14-title { font-size: 36px; } }
        @container (min-width: 1440px) { .s14-title { font-size: 50px; } }

        .s14-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s14-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .s14-actions { flex-direction: column; align-items: center; }
          .s14-actions .s14-btn { width: 100%; max-width: 320px; }
        }

        .s14-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s, opacity 0.2s;
          box-sizing: border-box;
          padding: 12px 32px;
          font-size: 16px;
          background-color: ${PALETTE.overlayNavBg};
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.overlayCtaBdr};
          backdrop-filter: blur(8px);
        }
        .s14-btn:hover { background-color: ${PALETTE.white}; }

        .s14-footnote {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .s14-btn-sm {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          padding: 8px 16px;
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.borderDefault};
          backdrop-filter: blur(8px);
          background-color: ${PALETTE.overlayNavBg};
          transition: background-color 0.2s;
          box-sizing: border-box;
        }
        .s14-btn-sm:hover { background-color: ${PALETTE.white}; }
      `}</style>
      <section className="s14-section" id="section-cta">
        <div className="s14-inner">
          <div className="s14-cta-band">
            <div className="s14-inner-content">
              <h2 className="s14-title">{title}</h2>
              <p className="s14-description">{description}</p>
              <div className="s14-actions">
                <a href={cta1Href} className="s14-btn">{cta1Label}</a>
                <a href={cta2Href} className="s14-btn">{cta2Label}</a>
              </div>
              <div className="s14-footnote">
                <a href={footnote1Href} className="s14-btn-sm">{footnote1Label}</a>
                <a href={footnote2Href} target="_blank" rel="noopener" className="s14-btn-sm">{footnote2Label}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section14_CTA, {
  title:          { type: ControlType.String, title: "Title",          defaultValue: "See how LLM Capsule fits your environment, documents, and controls" },
  description:    { type: ControlType.String, title: "Description",    defaultValue: "Bring your documents, deployment constraints, and evaluation questions…" },
  cta1Label:      { type: ControlType.String, title: "CTA 1 Label",    defaultValue: "Request a Demo" },
  cta1Href:       { type: ControlType.String, title: "CTA 1 URL",      defaultValue: "/request-a-demo" },
  cta2Label:      { type: ControlType.String, title: "CTA 2 Label",    defaultValue: "Talk to an Architect" },
  cta2Href:       { type: ControlType.String, title: "CTA 2 URL",      defaultValue: "/architecture" },
  footnote1Label: { type: ControlType.String, title: "Footnote 1",     defaultValue: "Download Architecture Brief" },
  footnote1Href:  { type: ControlType.String, title: "Footnote 1 URL", defaultValue: "/downloads" },
  footnote2Label: { type: ControlType.String, title: "Footnote 2",     defaultValue: "View on AWS Marketplace" },
  footnote2Href:  { type: ControlType.String, title: "Footnote 2 URL", defaultValue: "https://aws.amazon.com/marketplace" },
})
