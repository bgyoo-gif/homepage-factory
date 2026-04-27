import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

const P = {
  brandPrimary:   "#3061f2",
  brandPurple:    "#725bea",
  brandPurpleLt:  "#c6c5fa",
  brandPurpleMd:  "#ab2eff",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white: "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",
  success: "#0e824c",
  borderDefault: "#e6e7e9",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
  gradientBrand: "linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)",
}

interface Props {
  heroTitle?: string
  heroTitleHighlight?: string
  heroDescription?: string
  screenshotImage?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  bannerText?: string
  badge1?: string
  badge2?: string
  badge3?: string
  badge4?: string
  badge5?: string
}

export default function Section01_Hero({
  heroTitle = "Use any AI on sensitive enterprise data. Get",
  heroTitleHighlight = "usable results back.",
  heroDescription = "LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive data locally before AI processing, works with any model, and restores outputs with your original data — so AI results go straight into enterprise workflows.",
  screenshotImage,
  ctaPrimaryLabel = "Request a demo",
  ctaPrimaryHref = "mailto:contact@cubig.ai",
  ctaSecondaryLabel = "Full product at llmcapsule.ai",
  ctaSecondaryHref = "https://llmcapsule.ai",
  bannerText = "Part of CUBIG's AI-Ready Data Infrastructure. Solves the restricted data blocker — one of three blockers that prevent enterprise AI adoption.",
  badge1 = "GS Certified",
  badge2 = "ISO 27001",
  badge3 = "ISO 42001",
  badge4 = "GDPR / HIPAA",
  badge5 = "AWS Marketplace",
}: Props) {
  const resolvedScreenshot = screenshotImage || ""

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s1-section {
          width: 100%;
          padding: 100px 0 80px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s1-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-hero {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
          text-align: center;
          margin: 0 auto;
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          text-wrap: balance;
        }

        @container (min-width: 768px) {
          .s1-title { font-size: 50px; }
        }

        @container (min-width: 1024px) {
          .s1-title { font-size: 64px; }
        }

        @container (max-width: 767px) {
          .s1-title { font-size: 24px; }
        }

        .s1-title-highlight {
          color: ${P.brandPurple};
        }

        .s1-description {
          font-size: 18px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 1024px) {
          .s1-description { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s1-description { max-width: 860px; }
        }

        .s1-screenshot-frame {
          margin-top: 48px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${P.neutral100};
          overflow: hidden;
        }

        @container (max-width: 767px) {
          .s1-screenshot-frame {
            border-radius: 24px 24px 0 0;
            padding: 24px 24px 0;
          }
        }

        .s1-screenshot {
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          background-color: ${P.surfaceWhite};
        }

        .s1-screenshot img {
          width: 100%;
          height: auto;
          display: block;
        }

        .s1-screenshot-placeholder {
          width: 100%;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P.textTertiary};
          font-size: 14px;
          font-family: "Fragment Mono", monospace;
        }

        @container (min-width: 1024px) {
          .s1-screenshot-placeholder { min-height: 420px; }
        }

        .s1-actions-below {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 32px;
          padding-bottom: 24px;
        }

        @container (max-width: 767px) {
          .s1-actions-below {
            flex-direction: column;
            align-items: center;
          }
          .s1-btn {
            width: 100%;
            max-width: 320px;
          }
        }

        .s1-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
        }

        .s1-btn-primary {
          background: ${P.gradientBrand};
          color: ${P.white};
        }

        .s1-btn-primary:hover { opacity: 0.88; }

        .s1-btn-secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }

        .s1-btn-secondary:hover {
          background-color: ${P.surfaceLight};
        }

        .s1-banner {
          padding: 16px 24px;
          border: none;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(166, 23, 255, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 32px;
        }

        .s1-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 12px;
        }

        .s1-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }

        .s1-badge-success {
          background-color: rgba(14, 130, 76, 0.12);
          color: #0e824c;
        }

        .s1-badge-purple {
          background-color: ${P.brandPurpleLt};
          color: ${P.brandPurple};
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CUBIG", item: "https://cubig.ai" },
              { "@type": "ListItem", position: 2, name: "LLM Capsule", item: "https://cubig.ai/llm-capsule" },
            ],
          }),
        }}
      />

      <div className="s1-root">
        <section className="s1-section" id="section-hero">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title">
                {heroTitle} <span className="s1-title-highlight">{heroTitleHighlight}</span>
              </h1>
              <p className="s1-description">
                {heroDescription}
              </p>
            </div>

            <div className="s1-screenshot-frame">
              <div className="s1-screenshot">
                {resolvedScreenshot ? (
                  <img src={resolvedScreenshot} alt="LLM Capsule product screenshot" width={1200} height={700} />
                ) : (
                  <div className="s1-screenshot-placeholder">
                    Product screenshot — add image via Props
                  </div>
                )}
              </div>
            </div>

            <div className="s1-actions-below">
              <a href={ctaPrimaryHref} className="s1-btn s1-btn-primary">
                {ctaPrimaryLabel}
              </a>
              <a href={ctaSecondaryHref} className="s1-btn s1-btn-secondary" target="_blank" rel="noopener noreferrer">
                {ctaSecondaryLabel}
              </a>
            </div>

            <div className="s1-banner">
              {bannerText}
              <div className="s1-badges">
                <span className="s1-badge s1-badge-success">{badge1}</span>
                <span className="s1-badge s1-badge-success">{badge2}</span>
                <span className="s1-badge s1-badge-success">{badge3}</span>
                <span className="s1-badge s1-badge-success">{badge4}</span>
                <span className="s1-badge s1-badge-purple">{badge5}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Use any AI on sensitive enterprise data. Get",
  },
  heroTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "usable results back.",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "LLM Capsule is CUBIG's AI enablement data layer. It encapsulates sensitive data locally before AI processing, works with any model, and restores outputs with your original data — so AI results go straight into enterprise workflows.",
  },
  screenshotImage: {
    type: ControlType.Image,
    title: "Screenshot Image",
  },
  ctaPrimaryLabel: {
    type: ControlType.String,
    title: "CTA Primary Label",
    defaultValue: "Request a demo",
  },
  ctaPrimaryHref: {
    type: ControlType.String,
    title: "CTA Primary Href",
    defaultValue: "mailto:contact@cubig.ai",
  },
  ctaSecondaryLabel: {
    type: ControlType.String,
    title: "CTA Secondary Label",
    defaultValue: "Full product at llmcapsule.ai",
  },
  ctaSecondaryHref: {
    type: ControlType.String,
    title: "CTA Secondary Href",
    defaultValue: "https://llmcapsule.ai",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Part of CUBIG's AI-Ready Data Infrastructure. Solves the restricted data blocker — one of three blockers that prevent enterprise AI adoption.",
  },
  badge1: { type: ControlType.String, title: "Badge 1", defaultValue: "GS Certified" },
  badge2: { type: ControlType.String, title: "Badge 2", defaultValue: "ISO 27001" },
  badge3: { type: ControlType.String, title: "Badge 3", defaultValue: "ISO 42001" },
  badge4: { type: ControlType.String, title: "Badge 4", defaultValue: "GDPR / HIPAA" },
  badge5: { type: ControlType.String, title: "Badge 5", defaultValue: "AWS Marketplace" },
})
