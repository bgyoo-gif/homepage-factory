import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  textPrimary:    "#0f0f0f",
  white:          "#ffffff",
  neutral800:     "#171719",
  surfaceWhite:   "#ffffff",
}

interface Props {
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn4Label?: string
  ctaBtn4Href?: string
  ctaBgImage?: string
}

export default function Section11_CTA({
  ctaTitle = "See how LLM Capsule enables AI on your enterprise documents",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaBtn4Label = "Available on AWS Marketplace",
  ctaBtn4Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  ctaBgImage = "",
}: Props) {
  const DEFAULT_CTA_BG = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/bg-index-cta.webp"
  const resolvedCtaBg = ctaBgImage || DEFAULT_CTA_BG
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root p { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h2 { text-wrap: balance; }

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--md  { padding: 12px 32px; font-size: 16px; }

        .idx-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-image: url('${resolvedCtaBg}');
          background-color: ${P.neutral800};
          background-size: cover; background-position: center;
        }
        .idx-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .idx-cta-band > * { position: relative; z-index: 1; }
        .idx-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        .idx-cta-band__title {
          font-family: "DM Sans", sans-serif; font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2; letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .idx-cta-band__title { font-size: 36px; } }
        @container (min-width: 768px) { .idx-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .idx-cta-band__title { font-size: 50px; } }
        .idx-cta-band__desc { font-size: 18px; color: rgba(255,255,255,0.85); line-height: 1.7; margin: 0; }
        .idx-cta-band__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .idx-cta-band__actions .idx-btn {
          background-color: rgba(255,255,255,0.92); color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6); backdrop-filter: blur(8px);
        }
        .idx-cta-band__actions .idx-btn:hover { background-color: ${P.white}; }
        @container (max-width: 767px) {
          .idx-cta-band__actions { flex-direction: column; align-items: center; }
          .idx-cta-band__actions .idx-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <div id="section-11" className="idx-cta-band">
            <div className="idx-cta-band__inner">
              <h2 className="idx-cta-band__title">{ctaTitle}</h2>
              <p className="idx-cta-band__desc">{ctaDescription}</p>
              <div className="idx-cta-band__actions">
                <a href={ctaBtn1Href} className="idx-btn idx-btn--md">{ctaBtn1Label}</a>
                <a href={ctaBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--md">{ctaBtn4Label}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section11_CTA, {
  ctaTitle:        { type: ControlType.String, title: "CTA Title",        defaultValue: "See how LLM Capsule enables AI on your enterprise documents", displayTextArea: true },
  ctaDescription:  { type: ControlType.String, title: "CTA Description",  defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements.", displayTextArea: true },
  ctaBtn1Label:    { type: ControlType.String, title: "CTA Btn 1",        defaultValue: "Request a Demo" },
  ctaBtn1Href:     { type: ControlType.String, title: "CTA Btn 1 URL",    defaultValue: "/request-a-demo" },
  ctaBtn4Label:    { type: ControlType.String, title: "CTA Btn 4",        defaultValue: "Available on AWS Marketplace" },
  ctaBtn4Href:     { type: ControlType.String, title: "CTA Btn 4 URL",    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
  ctaBgImage:      { type: ControlType.Image,  title: "CTA BG Image" },
})
