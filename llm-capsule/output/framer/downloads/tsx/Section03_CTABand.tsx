import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// LLM Capsule Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800: "#171719",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  overlayNavBg: "rgba(255,255,255,0.92)",
  overlayCtaBtnBdr: "rgba(255,255,255,0.6)",
  overlayWhite85: "rgba(255,255,255,0.85)",
}

interface Props {
  title?: string
  titleProduct?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta3Label?: string
  cta3Href?: string
}

export default function Section03_CTABand({
  title = "See how",
  titleProduct = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  cta1Label = "Request a Demo",
  cta1Href = "/request-a-demo",
  cta3Label = "Available on AWS Marketplace",
  cta3Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": `${title} ${titleProduct} works with your data`,
    "description": description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s3-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s3-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkLight};
          z-index: 0;
        }
        .s3-inner {
          position: relative;
          z-index: 1;
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
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-title-product {
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
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          background-color: ${PALETTE.overlayNavBg};
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.overlayCtaBtnBdr};
          backdrop-filter: blur(8px);
        }
        .s3-btn:hover {
          background-color: ${PALETTE.white};
        }
        .s3-btn--md {
          padding: 12px 32px;
          font-size: 16px;
        }
        .s3-btn--sm {
          padding: 8px 16px;
          font-size: 14px;
        }

        /* Container query for responsive layout */
        .s3-wrap {
          width: 100%;
          container-type: inline-size;
        }

        @container (min-width: 768px) {
          .s3-section { padding: 100px 32px; }
        }
        @container (min-width: 1024px) {
          .s3-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s3-section { padding: 120px 120px; }
          .s3-inner { max-width: 1080px; }
          .s3-title { font-size: 50px; }
        }

        /* Mobile: no background image */
        @container (max-width: 767px) {
          .s3-section {
            background-image: none;
          }
          .s3-title { font-size: 36px; }
          .s3-actions {
            flex-direction: column;
            align-items: center;
          }
          .s3-actions .s3-btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
      <div className="s3-wrap">
        <section className="s3-section" id="section-3" aria-labelledby="s3-cta-title">
          <div className="s3-inner">
            <h2 className="s3-title" id="s3-cta-title" style={{ wordBreak: "keep-all" }}>
              {title}
            </h2>
            <p className="s3-description">{description}</p>
            <div className="s3-actions">
              <a href={cta1Href} className="s3-btn s3-btn--md">{cta1Label}</a>
              <a href={cta3Href} target="_blank" rel="noopener" className="s3-btn s3-btn--sm">{cta3Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_CTABand, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "See how",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
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
    defaultValue: "/request-a-demo",
  },
  cta3Label: {
    type: ControlType.String,
    title: "CTA 3 Label",
    defaultValue: "Available on AWS Marketplace",
  },
  cta3Href: {
    type: ControlType.String,
    title: "CTA 3 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
