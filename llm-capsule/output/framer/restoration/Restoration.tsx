import { addPropertyControls, ControlType } from "framer"

// ─── Asset Base ────────────────────────────────────────────────────────────────
const LOGO_BASE =
  "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images"

// ─── Palette ───────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  brandLight:     "#B8D4EE",
  neutral900: "#0f0f0f",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral350: "#adadad",
  neutral300: "#bababa",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",
  success: "#0e824c",
  error:   "#ff3030",
  borderDefault: "#e6e7e9",
  borderStrong:  "#171719",
  surfaceDark:  "#171719",
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Glossary",  "item": "https://llmcapsule.ai/resources/glossary" },
    { "@type": "ListItem", "position": 4, "name": "Restoration", "item": "https://llmcapsule.ai/resources/glossary/restoration" },
  ],
})

const JSONLD_ARTICLE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Restoration",
  "description": "Restoration is the process of restoring AI-generated outputs to their original enterprise context by applying locally stored mappings after AI processing.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "LLM Capsule Glossary",
    "url": "https://llmcapsule.ai/resources/glossary",
  },
  "url": "https://llmcapsule.ai/resources/glossary/restoration",
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Definition
  definitionText?: string

  // Explanation bullets
  explanationBullet1?: string
  explanationBullet2?: string
  explanationBullet3?: string

  // Example
  exampleBefore?: string
  exampleAfter?: string

  // CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaFootnote?: string

  // Footer
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Restoration({
  heroTitle = "Restoration",
  heroDescription = "Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of LLM Capsule.",

  definitionText = "Restoration (also known as local restoration) is the process of restoring AI-generated outputs to their original enterprise context. After AI processes encapsulated data, the locally stored mapping between original and protected values is applied to the AI output, replacing encapsulated representations with real enterprise data. AI results are restored locally through this automated process.",

  explanationBullet1 = "When LLM Capsule encapsulates a document, it creates a local mapping table. The table records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment.",
  explanationBullet2 = "After AI processing completes, the restoration engine applies this mapping in reverse. Encapsulated tokens are replaced with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use.",
  explanationBullet3 = "Restoration is deterministic. Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required.",

  exampleBefore = 'AI processes an encapsulated contract and generates a summary: "The agreement between ENTITY_A and ENTITY_B provides for a payment of AMOUNT_1 due on DATE_1."',
  exampleAfter = 'Local restoration applies the mapping and produces: "The agreement between Acme Corp and GlobalTech provides for a payment of $2.4M due on March 15, 2026."',

  ctaTitle = "See LLM Capsule Restoration in Action",
  ctaDescription = "Experience how enterprise AI outputs are restored to their original context with real data.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaBtn2Label = "View Product",
  ctaBtn2Href = "product.html",
  ctaFootnote = "Enterprise AI Enablement by CUBIG",

}: Props) {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_ARTICLE }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ───────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .rst-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .rst-root a { text-decoration: none; color: inherit; }
        .rst-root img { max-width: 100%; display: block; }
        .rst-root p, .rst-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .rst-root h1, .rst-root h2, .rst-root h3 { text-wrap: balance; }

        /* ── Container Query wrapper ─────────────────────────────── */
        .rst-inner { width: 100%; container-type: inline-size; }

        /* ── Buttons ─────────────────────────────────────────────── */
        .rst-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .rst-btn--sm { padding: 8px 16px; font-size: 14px; }
        .rst-btn--lg { padding: 16px 48px; font-size: 18px; }
        .rst-btn--primary {
          background: ${P.gradientBrand};
          color: ${P.white};
        }
        .rst-btn--primary:hover { opacity: 0.88; }
        .rst-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .rst-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Article Container (860px) ───────────────────────────── */
        .rst-article-container {
          width: 100%; max-width: 860px; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .rst-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .rst-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .rst-article-container { padding: 0; } }

        /* ── Breadcrumb ──────────────────────────────────────────── */
        .rst-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .rst-breadcrumb__link {
          font-size: 14px; color: ${P.brandSecondary};
          font-weight: 500; transition: color 0.15s;
        }
        .rst-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .rst-breadcrumb__sep { font-size: 14px; color: ${P.textTertiary}; }
        .rst-breadcrumb__current { font-size: 14px; color: ${P.textTertiary}; }

        /* ── Hero Section ────────────────────────────────────────── */
        .rst-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .rst-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .rst-article-hero__title { font-size: 36px; } }
        @container (min-width: 1024px) { .rst-article-hero__title { font-size: 44px; } }
        @container (min-width: 1440px) { .rst-article-hero__title { font-size: 52px; } }
        .rst-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }
        .rst-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ── Article Body Section ────────────────────────────────── */
        .rst-section--article-body { padding: 32px 0; }
        @container (min-width: 768px)  { .rst-section--article-body { padding: 48px 0; } }
        @container (min-width: 1440px) { .rst-section--article-body { padding: 64px 0; } }

        /* ── Article Section Header ──────────────────────────────── */
        .rst-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .rst-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .rst-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .rst-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .rst-article-section-header h2 { font-size: 28px; } }
        .rst-text--brand { color: ${P.brandSecondary}; }

        /* ── Banner ──────────────────────────────────────────────── */
        .rst-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px; line-height: 1.7;
          text-align: center;
          word-break: keep-all; overflow-wrap: break-word;
        }
        .rst-banner__label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px; text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${P.textTertiary};
          margin-bottom: 8px; display: block;
        }
        .rst-banner p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }

        /* ── Bullet List ─────────────────────────────────────────── */
        .rst-bullet {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .rst-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .rst-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px; display: flex; align-items: center; justify-content: center;
        }
        .rst-bullet--dot .rst-bullet__icon::before {
          content: "•"; color: ${P.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Card ────────────────────────────────────────────────── */
        .rst-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .rst-card { padding: 32px; } }
        .rst-card__divider {
          border: none; border-top: 1px solid ${P.borderDefault};
          margin: 16px 0;
        }
        .rst-body-paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .rst-body-paragraph:last-child { margin-bottom: 0; }
        .rst-body-paragraph--strong { font-weight: 500; }
        .rst-code-inline {
          font-family: "Fragment Mono", monospace;
          font-size: 0.875em; font-weight: 400;
          background-color: ${P.neutral100};
          border-radius: 3px; padding: 0 4px;
          color: inherit;
        }
        .rst-example-restored {
          font-weight: 600; color: ${P.success};
        }

        /* ── Related Terms ───────────────────────────────────────── */
        .rst-related-terms {
          display: flex; flex-wrap: wrap; gap: 12px;
          margin-bottom: 32px;
        }

        /* ── Section Title Icon ──────────────────────────────────── */
        .rst-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .rst-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .rst-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Card Grid ───────────────────────────────────────────── */
        .rst-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .rst-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark Card ───────────────────────────────────────────── */
        .rst-card--dark {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; align-items: center; gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .rst-card--dark:hover { background-color: ${P.neutral800}; }
        .rst-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .rst-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }
        .rst-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── CTA Band ────────────────────────────────────────────── */
        .rst-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background: ${P.gradientBrand};
        }
        .rst-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .rst-cta-band > * { position: relative; z-index: 1; }
        .rst-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .rst-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) {
          .rst-cta-band { padding: 120px 120px; max-width: 1440px; margin: 0 auto; }
          .rst-cta-band__inner { max-width: 860px; }
        }
        @container (min-width: 768px) { .rst-cta-band { padding: 100px 32px; } }
        .rst-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        .rst-cta-band__title .rst-text--product { font-family: "Oxanium", sans-serif; }
        @container (max-width: 767px) { .rst-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .rst-cta-band__title { font-size: 50px; } }
        .rst-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .rst-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        .rst-cta-band__actions .rst-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .rst-cta-band__actions .rst-btn:hover { background-color: ${P.white}; }
        .rst-cta-band__footnote {
          font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 8px;
        }

        /* ── Footer ──────────────────────────────────────────────── */
        .rst-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .rst-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .rst-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .rst-container { padding: 0 120px; max-width: 1440px; } }
      `}</style>

      <div className="rst-root">
        <div className="rst-inner">

          <main>

            {/* ── Section 1: Hero ────────────────────────────────────────── */}
            <section id="section-hero" className="rst-section--hero">
              <div className="rst-article-container">
                <nav className="rst-breadcrumb" aria-label="Breadcrumb">
                  <a href="index.html" className="rst-breadcrumb__link">Home</a>
                  <span className="rst-breadcrumb__sep">/</span>
                  <a href="resources.html" className="rst-breadcrumb__link">Resources</a>
                  <span className="rst-breadcrumb__sep">/</span>
                  <a href="glossary.html" className="rst-breadcrumb__link">Glossary</a>
                  <span className="rst-breadcrumb__sep">/</span>
                  <span className="rst-breadcrumb__current">Restoration</span>
                </nav>
                <h1 className="rst-article-hero__title">{heroTitle}</h1>
                <p className="rst-article-hero__description">
                  Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of{" "}
                  <span className="rst-text--product">LLM Capsule</span>.
                </p>
              </div>
            </section>

            {/* ── Section 3: Definition ──────────────────────────────────── */}
            <section id="section-3" className="rst-section--article-body">
              <div className="rst-article-container">
                <div className="rst-banner">
                  <span className="rst-banner__label">DEFINITION</span>
                  <p>{definitionText}</p>
                </div>
              </div>
            </section>

            {/* ── Section 4: Explanation ─────────────────────────────────── */}
            <section id="section-4" className="rst-section--article-body">
              <div className="rst-article-container">
                <div className="rst-article-section-header">
                  <h2><span className="rst-text--brand">Explanation</span></h2>
                </div>
                <ul className="rst-bullet rst-bullet--dot">
                  <li className="rst-bullet__item">
                    <span className="rst-bullet__icon" />
                    <span>
                      <strong>When <span className="rst-text--product">LLM Capsule</span> encapsulates a document, it creates a local mapping table.</strong>{" "}
                      The table records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment.
                    </span>
                  </li>
                  <li className="rst-bullet__item">
                    <span className="rst-bullet__icon" />
                    <span>
                      <strong>After AI processing completes, the restoration engine applies this mapping in reverse.</strong>{" "}
                      Encapsulated tokens are replaced with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use.
                    </span>
                  </li>
                  <li className="rst-bullet__item">
                    <span className="rst-bullet__icon" />
                    <span>
                      <strong>Restoration is deterministic.</strong>{" "}
                      Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ── Section 5: Example ─────────────────────────────────────── */}
            <section id="section-5" className="rst-section--article-body">
              <div className="rst-article-container">
                <div className="rst-article-section-header">
                  <h2><span className="rst-text--brand">Example</span></h2>
                </div>
                <div className="rst-card">
                  <p className="rst-body-paragraph">
                    AI processes an encapsulated contract and generates a summary: "The agreement between{" "}
                    <code className="rst-code-inline">ENTITY_A</code> and{" "}
                    <code className="rst-code-inline">ENTITY_B</code> provides for a payment of{" "}
                    <code className="rst-code-inline">AMOUNT_1</code> due on{" "}
                    <code className="rst-code-inline">DATE_1</code>."
                  </p>
                  <hr className="rst-card__divider" />
                  <p className="rst-body-paragraph rst-body-paragraph--strong">
                    Local restoration applies the mapping and produces: "The agreement between{" "}
                    <span className="rst-example-restored">Acme Corp</span> and{" "}
                    <span className="rst-example-restored">GlobalTech</span> provides for a payment of{" "}
                    <span className="rst-example-restored">$2.4M</span> due on{" "}
                    <span className="rst-example-restored">March 15, 2026</span>."
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 6: Related Terms + Links ──────────────────────── */}
            <section id="section-6" className="rst-section--article-body">
              <div className="rst-article-container">
                <div className="rst-article-section-header">
                  <h2>Related <span className="rst-text--brand">Terms</span></h2>
                </div>

                <div className="rst-related-terms">
                  <a href="zero-exposure.html" className="rst-btn rst-btn--secondary rst-btn--sm">Zero Exposure</a>
                  <a href="restorable-workflow.html" className="rst-btn rst-btn--secondary rst-btn--sm">Restorable Workflow</a>
                  <a href="structure-preserving-processing.html" className="rst-btn rst-btn--secondary rst-btn--sm">Structure-Preserving Processing</a>
                  <a href="enterprise-context-control.html" className="rst-btn rst-btn--secondary rst-btn--sm">Enterprise Context Control</a>
                </div>

                <div className="rst-section-title-icon">
                  <span className="rst-section-title-icon__icon">
                    <svg className="rst-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="rst-section-title-icon__text">Related Pages</span>
                </div>

                <div className="rst-card-grid rst-card-grid--2col">
                  <a href="product.html" className="rst-card--dark">
                    <span className="rst-card--dark__icon">
                      <svg className="rst-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="rst-card--dark__title">Product Overview</span>
                  </a>
                  <a href="architecture.html" className="rst-card--dark">
                    <span className="rst-card--dark__icon">
                      <svg className="rst-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="rst-card--dark__title">Architecture</span>
                  </a>
                  <a href="trust.html" className="rst-card--dark">
                    <span className="rst-card--dark__icon">
                      <svg className="rst-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="rst-card--dark__title">Trust &amp; Compliance</span>
                  </a>
                  <a href="request-pov.html" className="rst-card--dark">
                    <span className="rst-card--dark__icon">
                      <svg className="rst-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="rst-card--dark__title">Request a Demo</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 7: CTA Band ────────────────────────────────────── */}
            <section id="section-cta" className="rst-cta-band">
              <div className="rst-cta-band__inner">
                <h2 className="rst-cta-band__title">
                  {ctaTitle.replace("LLM Capsule", "").trim() ? (
                    <>
                      See <span className="rst-text--product">LLM Capsule</span> Restoration in Action
                    </>
                  ) : (
                    <>See <span className="rst-text--product">LLM Capsule</span> Restoration in Action</>
                  )}
                </h2>
                <p className="rst-cta-band__description">{ctaDescription}</p>
                <div className="rst-cta-band__actions">
                  <a href={ctaBtn1Href} className="rst-btn rst-btn--lg">{ctaBtn1Label}</a>
                  <a href={ctaBtn2Href} className="rst-btn rst-btn--lg">{ctaBtn2Label}</a>
                </div>
                <p className="rst-cta-band__footnote">{ctaFootnote}</p>
              </div>
            </section>

          </main>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(Restoration, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Restoration",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of LLM Capsule.",
    displayTextArea: true,
  },
  definitionText: {
    type: ControlType.String,
    title: "Definition",
    defaultValue: "Restoration (also known as local restoration) is the process of restoring AI-generated outputs to their original enterprise context. After AI processes encapsulated data, the locally stored mapping between original and protected values is applied to the AI output, replacing encapsulated representations with real enterprise data. AI results are restored locally through this automated process.",
    displayTextArea: true,
  },
  explanationBullet1: {
    type: ControlType.String,
    title: "Explanation Bullet 1",
    defaultValue: "When LLM Capsule encapsulates a document, it creates a local mapping table. The table records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment.",
    displayTextArea: true,
  },
  explanationBullet2: {
    type: ControlType.String,
    title: "Explanation Bullet 2",
    defaultValue: "After AI processing completes, the restoration engine applies this mapping in reverse. Encapsulated tokens are replaced with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use.",
    displayTextArea: true,
  },
  explanationBullet3: {
    type: ControlType.String,
    title: "Explanation Bullet 3",
    defaultValue: "Restoration is deterministic. Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required.",
    displayTextArea: true,
  },
  exampleBefore: {
    type: ControlType.String,
    title: "Example (Before)",
    defaultValue: "AI processes an encapsulated contract and generates a summary.",
    displayTextArea: true,
  },
  exampleAfter: {
    type: ControlType.String,
    title: "Example (After)",
    defaultValue: "Local restoration applies the mapping and produces the original context.",
    displayTextArea: true,
  },
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "See LLM Capsule Restoration in Action",
  },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Experience how enterprise AI outputs are restored to their original context with real data.",
    displayTextArea: true,
  },
  ctaBtn1Label: {
    type: ControlType.String,
    title: "CTA Button 1 Label",
    defaultValue: "Request a Demo",
  },
  ctaBtn1Href: {
    type: ControlType.String,
    title: "CTA Button 1 URL",
    defaultValue: "request-pov.html",
  },
  ctaBtn2Label: {
    type: ControlType.String,
    title: "CTA Button 2 Label",
    defaultValue: "View Product",
  },
  ctaBtn2Href: {
    type: ControlType.String,
    title: "CTA Button 2 URL",
    defaultValue: "product.html",
  },
  ctaFootnote: {
    type: ControlType.String,
    title: "CTA Footnote",
    defaultValue: "Enterprise AI Enablement by CUBIG",
  },
})
