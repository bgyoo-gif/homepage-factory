import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  textInverse:    "#ffffff",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  overlayNavBg:   "rgba(255,255,255,0.92)",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayWhite70: "rgba(255,255,255,0.70)",
  overlayWhite55: "rgba(255,255,255,0.55)",
  overlayCtaBdr:  "rgba(255,255,255,0.6)",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  titleProductName?: string
  titleSuffix?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
  ctaBgImage?: string
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://llmcapsule.ai/pricing" },
  ],
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section03_CTABand({
  title              = "See how",
  titleProductName   = "LLM Capsule",
  titleSuffix        = "works with your data",
  description        = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  btn1Label          = "Request a Demo",
  btn1Href           = "/request-a-demo",
  footnoteLink2Label = "Available on AWS Marketplace",
  footnoteLink2Href  = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  ctaBgImage         = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('${ctaBgImage}');
          background-size: cover;
          background-position: center;
        }
        .s3-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.35);
          z-index: 0;
        }
        .s3-band > * { position: relative; z-index: 1; }

        .s3-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s3-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.textInverse};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s3-title__product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s3-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .s3-btn {
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
          padding: 12px 32px;
          font-size: 16px;
          background-color: ${PALETTE.overlayNavBg};
          color: #0f0f0f;
          border: 1px solid ${PALETTE.overlayCtaBdr};
          backdrop-filter: blur(8px);
        }
        .s3-btn:hover { background-color: #ffffff; }

        .s3-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.overlayWhite70};
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .s3-footnote a {
          color: ${PALETTE.overlayWhite85};
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .s3-footnote a:hover { color: #ffffff; }
        .s3-footnote span { color: ${PALETTE.overlayWhite55}; }

        /* Container query wrapper */
        .s3-outer {
          width: 100%;
          container-type: inline-size;
        }

        @container (min-width: 768px) {
          .s3-band { padding: 100px 32px; }
        }
        @container (min-width: 1024px) {
          .s3-inner { max-width: 720px; }
          .s3-title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s3-band { padding: 120px 120px; }
          .s3-inner { max-width: 1080px; }
          .s3-title { font-size: 50px; }
        }

        /* Mobile overrides */
        @container (max-width: 767px) {
          .s3-title { font-size: 36px; }
          .s3-actions { flex-direction: column; align-items: center; }
          .s3-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="s3-outer">
        <section className="s3-band" id="section-3" aria-label="Get started">
          <div className="s3-inner">
            <h2 className="s3-title" style={{ wordBreak: "keep-all" }}>
              {title}{" "}
              <span className="s3-title__product">{titleProductName}</span>{" "}
              {titleSuffix}
            </h2>
            <p className="s3-description">{description}</p>
            <div className="s3-actions">
              <a href={btn1Href} className="s3-btn">{btn1Label}</a>
            </div>
            <p className="s3-footnote">
              <a href={footnoteLink2Href} target="_blank" rel="noopener noreferrer">
                {footnoteLink2Label}
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_CTABand, {
  title:              { type: ControlType.String, title: "Title",             defaultValue: "See how" },
  titleProductName:   { type: ControlType.String, title: "Product Name",      defaultValue: "LLM Capsule" },
  titleSuffix:        { type: ControlType.String, title: "Title Suffix",      defaultValue: "works with your data" },
  description:        {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  btn1Label:          { type: ControlType.String, title: "Button 1 Label",    defaultValue: "Request a Demo" },
  btn1Href:           { type: ControlType.String, title: "Button 1 URL",      defaultValue: "/request-a-demo" },
  footnoteLink2Label: { type: ControlType.String, title: "Footnote Link 2",   defaultValue: "Available on AWS Marketplace" },
  footnoteLink2Href:  { type: ControlType.String, title: "Footnote URL 2",    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
  ctaBgImage:         { type: ControlType.Image,  title: "CTA BG Image" },
})
