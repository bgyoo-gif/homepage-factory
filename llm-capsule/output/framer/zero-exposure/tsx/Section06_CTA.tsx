import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

const BRAND = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800:    "#171719",
  textInverse:   "#ffffff",
  white:         "#ffffff",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
}

interface Props {
  title?: string
  titleProductName?: string
  titleSuffix?: string
  description?: string
  ctaLabel1?: string
  ctaHref1?: string
  ctaLabel2?: string
  ctaHref2?: string
  footnote?: string
}

export default function Section06_CTA({
  title = "See",
  titleProductName = "LLM Capsule",
  titleSuffix = "Zero Exposure in Action",
  description = "Protect your most sensitive data while enabling full AI capabilities. Zero exposure means zero risk.",
  ctaLabel1 = "Request a Demo",
  ctaHref1 = "/request-a-demo",
  ctaLabel2 = "View Product",
  ctaHref2 = "/product",
  footnote = "Enterprise AI Enablement by CUBIG",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${BRAND.neutral800};
          background-image: url('${IMAGE_BASE}/images/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
        }
        .s6-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s6-cta-band > * { position: relative; z-index: 1; }
        .s6-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s6-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${BRAND.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s6-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s6-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
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
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255, 255, 255, 0.92);
          color: ${BRAND.brandPrimary};
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .s6-btn:hover { background-color: ${BRAND.white}; }
        .s6-footnote {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          margin-top: 8px;
        }

        /* Container query for CTA responsiveness */
        .s6-outer {
          width: 100%;
          container-type: inline-size;
        }

        @container (min-width: 768px) {
          .s6-cta-band { padding: 100px 32px; }
          .s6-title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s6-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s6-cta-band { padding: 120px 120px; }
          .s6-title { font-size: 50px; }
          .s6-inner { max-width: 1080px; }
        }
        @container (max-width: 767px) {
          .s6-title { font-size: 36px; }
          .s6-actions { flex-direction: column; align-items: center; }
          .s6-btn { width: 100%; max-width: 320px; }
          .s6-cta-band { background-image: none; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
              { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
              { "@type": "ListItem", position: 3, name: "Glossary", item: "https://llmcapsule.ai/resources/glossary" },
              { "@type": "ListItem", position: 4, name: "Zero Exposure", item: "https://llmcapsule.ai/resources/glossary/zero-exposure" },
            ],
          }),
        }}
      />

      <div className="s6-outer">
        <section className="s6-cta-band" id="section-cta">
          <div className="s6-inner">
            <h2 className="s6-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
              {title}{" "}
              <span className="s6-product-name">{titleProductName}</span>{" "}
              {titleSuffix}
            </h2>
            <p className="s6-description">{description}</p>
            <div className="s6-actions">
              <a href={ctaHref1} className="s6-btn">{ctaLabel1}</a>
              <a href={ctaHref2} className="s6-btn">{ctaLabel2}</a>
            </div>
            <p className="s6-footnote">{footnote}</p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_CTA, {
  title: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "See",
  },
  titleProductName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  titleSuffix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "Zero Exposure in Action",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Protect your most sensitive data while enabling full AI capabilities. Zero exposure means zero risk.",
    displayTextArea: true,
  },
  ctaLabel1: {
    type: ControlType.String,
    title: "CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  ctaHref1: {
    type: ControlType.String,
    title: "CTA 1 URL",
    defaultValue: "/request-a-demo",
  },
  ctaLabel2: {
    type: ControlType.String,
    title: "CTA 2 Label",
    defaultValue: "View Product",
  },
  ctaHref2: {
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
