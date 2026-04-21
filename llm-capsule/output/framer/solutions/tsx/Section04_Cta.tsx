import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Solutions — AI, Now Safe for Every Industry | LLM Capsule",
  description:
    "LLM Capsule enables AI across public sector, finance, healthcare, legal, and telecom. Turn blocked data into enabled AI.",
  url: "https://llmcapsule.ai/solutions",
}

interface Props {
  title?: string
  description?: string
  primaryBtn1Label?: string
  primaryBtn1Href?: string
  primaryBtn2Label?: string
  primaryBtn2Href?: string
  primaryBtn3Label?: string
  primaryBtn3Href?: string
  footnoteBtn2Label?: string
  footnoteBtn2Href?: string
}

export default function Section04_Cta({
  title = "See how your industry uses LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation questions. We will show how LLM Capsule fits your environment.",
  primaryBtn1Label = "Request a Demo",
  primaryBtn1Href = "/request-a-demo",
  primaryBtn2Label = "See Product",
  primaryBtn2Href = "/product",
  primaryBtn3Label = "View Architecture",
  primaryBtn3Href = "/architecture",
  footnoteBtn2Label = "Available on AWS Marketplace",
  footnoteBtn2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s4-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 0;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
        }
        .s4-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.webp');
          background-size: cover;
          background-position: center;
        }
        .s4-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .s4-cta-band > * { position: relative; z-index: 1; }
        .s4-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s4-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s4-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s4-cta-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s4-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s4-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .s4-btn--md {
          padding: 12px 32px;
          font-size: 16px;
          background-color: rgba(255,255,255,0.92);
          color: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .s4-btn--md:hover { background-color: #ffffff; }
        .s4-btn--sm {
          padding: 8px 16px;
          font-size: 14px;
          background-color: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.4);
        }
        .s4-btn--sm:hover { background-color: rgba(255,255,255,0.1); }
        .s4-cta-footnote {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        @container s4 (min-width: 768px) {
          .s4-cta-band { padding: 100px 32px; }
          .s4-cta-title { font-size: 40px; }
        }
        @container s4 (min-width: 1024px) {
          .s4-cta-band { padding: 100px 32px; }
          .s4-cta-inner { max-width: 720px; }
        }
        @container s4 (min-width: 1440px) {
          .s4-cta-band { padding: 120px 120px; }
          .s4-cta-inner { max-width: 1080px; }
          .s4-cta-title { font-size: 50px; }
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-cta-band">
            <div className="s4-cta-inner">
              <h2 className="s4-cta-title">{title}</h2>
              <p className="s4-cta-desc">{description}</p>
              <div className="s4-cta-actions">
                <a href={primaryBtn1Href} className="s4-btn s4-btn--md">
                  {primaryBtn1Label}
                </a>
                <a href={primaryBtn2Href} className="s4-btn s4-btn--md">
                  {primaryBtn2Label}
                </a>
                <a href={primaryBtn3Href} className="s4-btn s4-btn--md">
                  {primaryBtn3Label}
                </a>
              </div>
              <div className="s4-cta-footnote">
                <a
                  href={footnoteBtn2Href}
                  target="_blank"
                  rel="noopener"
                  className="s4-btn s4-btn--sm"
                >
                  {footnoteBtn2Label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Cta, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "See how your industry uses LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Bring your documents, deployment constraints, and evaluation questions. We will show how LLM Capsule fits your environment.",
    displayTextArea: true,
  },
  primaryBtn1Label: { type: ControlType.String, title: "CTA 1 Label", defaultValue: "Request a Demo" },
  primaryBtn1Href: { type: ControlType.String, title: "CTA 1 URL", defaultValue: "/request-a-demo" },
  primaryBtn2Label: { type: ControlType.String, title: "CTA 2 Label", defaultValue: "See Product" },
  primaryBtn2Href: { type: ControlType.String, title: "CTA 2 URL", defaultValue: "/product" },
  primaryBtn3Label: { type: ControlType.String, title: "CTA 3 Label", defaultValue: "View Architecture" },
  primaryBtn3Href: { type: ControlType.String, title: "CTA 3 URL", defaultValue: "/architecture" },
  footnoteBtn2Label: {
    type: ControlType.String,
    title: "Footnote 2 Label",
    defaultValue: "Available on AWS Marketplace",
  },
  footnoteBtn2Href: {
    type: ControlType.String,
    title: "Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
