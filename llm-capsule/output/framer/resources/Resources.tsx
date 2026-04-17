import { addPropertyControls, ControlType } from "framer"

// ─── Asset Base ────────────────────────────────────────────────────────────────
const IMAGE_BASE =
  "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

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
  gradientDark:  "linear-gradient(180deg, #0f0f0f 0%, #171719 100%)",
  gradientCardIndigo: "linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%)",
  gradientCardBlue:   "linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%)",
  gradientCardGreen:  "linear-gradient(109deg, #55B45D 0%, #F0FFF2 17%, #9AE6AD 43%, #C9FFE1 65%, #55B45D 84%, #55B45D 100%)",
  gradientCardSilver: "linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%)",
  gradientInnerIndigo: "linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%)",
  gradientInnerBlue:   "linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%)",
  gradientInnerGreen:  "linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%)",
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
  ],
})

const JSONLD_WEBPAGE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Resources — LLM Capsule Enterprise AI Enablement",
  "description": "Technical resources for enterprise AI enablement. Learn articles, glossary, downloads, and trust center.",
  "url": "https://llmcapsule.ai/resources",
  "isPartOf": {
    "@type": "WebSite",
    "name": "LLM Capsule",
    "url": "https://llmcapsule.ai/",
  },
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Section 1 — Hero
  heroTitle?: string
  heroTitleBrand?: string
  heroDescription?: string

  // Section 2 — Resource Hub
  s2SectionTitle?: string
  s2SectionTitleBrand?: string
  s2SectionDescription?: string

  s2Card1Title?: string
  s2Card1Description?: string
  s2Card1BtnLabel?: string
  s2Card1Href?: string

  s2Card2Title?: string
  s2Card2Description?: string
  s2Card2BtnLabel?: string
  s2Card2Href?: string

  s2Card3Title?: string
  s2Card3Description?: string
  s2Card3BtnLabel?: string
  s2Card3Href?: string

  // Section 3 — Core Guides
  s3SectionTitle?: string
  s3SectionTitleBrand?: string
  s3SectionDescription?: string

  s3Guide1Title?: string
  s3Guide1Description?: string
  s3Guide1BtnLabel?: string
  s3Guide1Href?: string

  s3Guide2Title?: string
  s3Guide2Description?: string
  s3Guide2BtnLabel?: string
  s3Guide2Href?: string

  s3Guide3Title?: string
  s3Guide3Description?: string
  s3Guide3BtnLabel?: string
  s3Guide3Href?: string

  // Section 4 — CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaSecBtn2Label?: string
  ctaSecBtn2Href?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Resources({
  // Section 1 — Hero
  heroTitle = "Enterprise AI Enablement",
  heroTitleBrand = "Resources",
  heroDescription = "Technical documentation, learning resources, glossary, and trust information for enterprise AI enablement with LLM Capsule.",

  // Section 2 — Resource Hub
  s2SectionTitle = "Explore",
  s2SectionTitleBrand = "Resources",
  s2SectionDescription = "Browse documentation, learning materials, key terms, and trust information.",

  s2Card1Title = "Learn",
  s2Card1Description = "In-depth articles on enterprise AI enablement, secure LLM usage, structure-preserving processing, and restorable workflows.",
  s2Card1BtnLabel = "Browse Learn →",
  s2Card1Href = "learn.html",

  s2Card2Title = "Glossary",
  s2Card2Description = "Definitions of key concepts — restoration, zero exposure, enterprise context control, and structure-preserving processing.",
  s2Card2BtnLabel = "Browse Glossary →",
  s2Card2Href = "glossary.html",

  s2Card3Title = "Trust Center",
  s2Card3Description = "Security certifications, compliance documentation, and audit information.",
  s2Card3BtnLabel = "Browse Trust Center →",
  s2Card3Href = "trust-center.html",

  // Section 3 — Core Guides
  s3SectionTitle = "Core guides for enterprise AI",
  s3SectionTitleBrand = "enablement",
  s3SectionDescription = "Start with the documents that explain the operating model, the failure of redaction-based approaches, and the architecture behind usable AI outputs.",

  s3Guide1Title = "Secure Enterprise AI Data Workflows",
  s3Guide1Description = "The end-to-end operating model for protecting sensitive data across AI workflows while restoring usable outputs locally.",
  s3Guide1BtnLabel = "Read guide →",
  s3Guide1Href = "secure-enterprise-ai-data-workflows.html",

  s3Guide2Title = "What Is an AI Data Capsule?",
  s3Guide2Description = "The core concept behind local encapsulation, protected AI processing, and local restoration.",
  s3Guide2BtnLabel = "Read guide →",
  s3Guide2Href = "what-is-ai-data-capsule.html",

  s3Guide3Title = "Why Redaction Breaks Enterprise AI Workflows",
  s3Guide3Description = "Why masking and redaction tools fail in AI workflows, and what replaces them in enterprise production settings.",
  s3Guide3BtnLabel = "Read guide →",
  s3Guide3Href = "why-redaction-breaks-enterprise-ai-workflows.html",

  // Section 4 — CTA Band
  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaSecBtn2Label = "Available on AWS Marketplace",
  ctaSecBtn2Href = "https://aws.amazon.com/marketplace",
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
        dangerouslySetInnerHTML={{ __html: JSONLD_WEBPAGE }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ───────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .res-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .res-root a { text-decoration: none; color: inherit; }
        .res-root img { max-width: 100%; display: block; }
        .res-root p, .res-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .res-root h1, .res-root h2, .res-root h3 { text-wrap: balance; }

        /* ── Container Query wrapper ─────────────────────────────── */
        .res-inner { width: 100%; container-type: inline-size; }

        /* ── Container ───────────────────────────────────────────── */
        .res-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .res-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .res-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .res-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Buttons ─────────────────────────────────────────────── */
        .res-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .res-btn--sm { padding: 8px 16px; font-size: 14px; }
        .res-btn--md { padding: 12px 32px; font-size: 16px; }
        .res-btn--ghost {
          background: transparent; color: ${P.brandSecondary};
          font-size: 14px; font-weight: 600;
          padding: 0; border: none;
        }
        .res-btn--ghost:hover { opacity: 0.75; }
        .res-btn--cta {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .res-btn--cta:hover { background-color: ${P.white}; }
        .res-btn--cta-sec {
          background-color: transparent;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.3);
          font-size: 14px;
        }
        .res-btn--cta-sec:hover { opacity: 0.75; }

        /* ── Text helpers ────────────────────────────────────────── */
        .res-text--brand   { color: ${P.brandSecondary}; }
        .res-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ── Section ─────────────────────────────────────────────── */
        .res-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }
        .res-section--hero { padding: 100px 0 0; background-color: ${P.surfaceWhite}; }

        /* ── BG Image section ────────────────────────────────────── */
        .res-section--bg {
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover; background-position: center;
          position: relative; background-color: ${P.surfaceWhite};
        }
        .res-section--bg::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .res-section--bg > * { position: relative; z-index: 1; }
        @container (max-width: 767px) { .res-section--bg { background-image: none; } }

        /* ── Hero ────────────────────────────────────────────────── */
        .res-hero { }
        @container (min-width: 768px)  { .res-hero { text-align: center; } }
        .res-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .res-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .res-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .res-hero__title { font-size: 64px; } }
        .res-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }
        @container (min-width: 768px)  { .res-hero__description { margin-left: auto; margin-right: auto; max-width: 720px; } }
        @container (min-width: 1440px) { .res-hero__description { max-width: 1080px; } }

        /* ── Section Header ──────────────────────────────────────── */
        .res-section-header {
          margin-bottom: 48px; text-align: center;
        }
        @container (max-width: 767px) { .res-section-header { text-align: left; } }
        .res-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .res-section-header__title {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .res-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .res-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .res-section-header__title { font-size: 28px; } }
        .res-section-header__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .res-section-header__description { max-width: 720px; } }
        @container (min-width: 1440px) { .res-section-header__description { max-width: 1080px; } }

        /* ── Icon ────────────────────────────────────────────────── */
        .res-icon { width: 24px; height: 24px; stroke: currentColor; fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
        .res-icon--lg { width: 32px; height: 32px; }

        /* ── Card Grid ───────────────────────────────────────────── */
        .res-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px)  { .res-card-grid--4col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .res-card-grid--4col { grid-template-columns: repeat(4, 1fr); } }
        @container (min-width: 768px)  { .res-card-grid--3col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .res-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }

        /* ── Standard Card ───────────────────────────────────────── */
        .res-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
          text-decoration: none; color: inherit;
        }
        @container (min-width: 1440px) { .res-card { padding: 32px; } }
        .res-card__icon-wrap { margin-bottom: 12px; color: ${P.brandSecondary}; }
        .res-card__title {
          font-size: 18px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
          margin-bottom: 12px;
        }
        .res-card__description {
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7; flex: 1;
        }
        .res-card__button { margin-top: 24px; }

        /* ── Gradient Card ───────────────────────────────────────── */
        .res-card--gradient {
          padding: 2px; border-radius: 18px;
          box-shadow: rgba(113,141,176,0.25) 0px 1px 20px 0px;
          display: flex; flex-direction: column;
          text-decoration: none; color: inherit;
        }
        .res-card--gradient-indigo { background: ${P.gradientCardIndigo}; }
        .res-card--gradient-blue   { background: ${P.gradientCardBlue}; }
        .res-card--gradient-green  { background: ${P.gradientCardGreen}; }
        .res-card--gradient-silver { background: ${P.gradientCardSilver}; }
        .res-card--gradient__inner {
          border-radius: 16px;
          padding: 32px;
          flex: 1;
          display: flex; flex-direction: column; gap: 12px;
          background-color: ${P.surfaceWhite};
        }
        .res-card--gradient-indigo .res-card--gradient__inner { background: ${P.gradientInnerIndigo}; }
        .res-card--gradient-blue   .res-card--gradient__inner { background: ${P.gradientInnerBlue}; }
        .res-card--gradient-green  .res-card--gradient__inner { background: ${P.gradientInnerGreen}; }
        .res-card--gradient-silver .res-card--gradient__inner { background: ${P.surfaceWhite}; }
        .res-card--gradient__icon { margin-bottom: 8px; color: ${P.textPrimary}; }
        .res-card--gradient__title {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
        }
        .res-card--gradient__description {
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7; flex: 1;
        }
        .res-card--gradient__button { margin-top: auto; padding-top: 24px; }

        /* ── CTA Band ────────────────────────────────────────────── */
        .res-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-color: #1a1a2e;
          background-image: url('${IMAGE_BASE}/bg-paint-sand-sky.png');
          background-size: cover; background-position: center;
        }
        @container (max-width: 767px) { .res-cta-band { background-image: none; } }
        .res-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .res-cta-band > * { position: relative; z-index: 1; }
        .res-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .res-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .res-cta-band__inner { max-width: 1080px; } }
        @container (min-width: 768px)  { .res-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .res-cta-band { padding: 120px 120px; } }
        .res-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .res-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .res-cta-band__title { font-size: 50px; } }
        .res-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .res-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        @container (max-width: 767px) {
          .res-cta-band__actions { flex-direction: column; align-items: center; }
          .res-cta-band__actions .res-btn--cta { width: 100%; max-width: 320px; }
        }
        .res-cta-band__secondary {
          display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
          margin-top: 16px;
        }
        @container (max-width: 767px) {
          .res-cta-band__secondary { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="res-root">
        <div className="res-inner">
          <main>

            {/* ── Section 1: Hero ─────────────────────────────────────── */}
            <section id="section-1" className="res-section res-section--hero">
              <div className="res-container">
                <div className="res-hero">
                  <h1 className="res-hero__title">
                    {heroTitle} <span className="res-text--brand">{heroTitleBrand}</span>
                  </h1>
                  <p className="res-hero__description">
                    Technical documentation, learning resources, glossary, and downloads for enterprise AI enablement with{" "}
                    <span className="res-text--product">LLM Capsule</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 2: Resource Hub ──────────────────────────────── */}
            <section id="section-2" className="res-section">
              <div className="res-container">

                <div className="res-section-header res-section-header--underline">
                  <h2 className="res-section-header__title">
                    {s2SectionTitle} <span className="res-text--brand">{s2SectionTitleBrand}</span>
                  </h2>
                  <p className="res-section-header__description">{s2SectionDescription}</p>
                </div>

                <div className="res-card-grid res-card-grid--3col">

                  {/* Card 1: Learn */}
                  <a href={s2Card1Href} className="res-card--gradient res-card--gradient-indigo">
                    <div className="res-card--gradient__inner">
                      <div className="res-card--gradient__icon">
                        <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="res-card--gradient__title">{s2Card1Title}</h3>
                      <p className="res-card--gradient__description">{s2Card1Description}</p>
                      <div className="res-card--gradient__button">
                        <span className="res-btn res-btn--ghost">{s2Card1BtnLabel}</span>
                      </div>
                    </div>
                  </a>

                  {/* Card 2: Glossary */}
                  <a href={s2Card2Href} className="res-card--gradient res-card--gradient-blue">
                    <div className="res-card--gradient__inner">
                      <div className="res-card--gradient__icon">
                        <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          <line x1="8" y1="7" x2="15" y2="7" />
                          <line x1="8" y1="11" x2="15" y2="11" />
                        </svg>
                      </div>
                      <h3 className="res-card--gradient__title">{s2Card2Title}</h3>
                      <p className="res-card--gradient__description">{s2Card2Description}</p>
                      <div className="res-card--gradient__button">
                        <span className="res-btn res-btn--ghost">{s2Card2BtnLabel}</span>
                      </div>
                    </div>
                  </a>

                  {/* Card 3: Trust Center */}
                  <a href={s2Card3Href} className="res-card--gradient res-card--gradient-silver">
                    <div className="res-card--gradient__inner">
                      <div className="res-card--gradient__icon">
                        <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="res-card--gradient__title">{s2Card3Title}</h3>
                      <p className="res-card--gradient__description">{s2Card3Description}</p>
                      <div className="res-card--gradient__button">
                        <span className="res-btn res-btn--ghost">{s2Card3BtnLabel}</span>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </section>

            {/* ── Section 3: Core Guides ───────────────────────────────── */}
            <section id="section-3" className="res-section">
              <div className="res-container">

                <div className="res-section-header res-section-header--underline">
                  <h2 className="res-section-header__title">
                    {s3SectionTitle} <span className="res-text--brand">{s3SectionTitleBrand}</span>
                  </h2>
                  <p className="res-section-header__description">{s3SectionDescription}</p>
                </div>

                <div className="res-card-grid res-card-grid--3col">

                  {/* Guide 1 */}
                  <a href={s3Guide1Href} className="res-card">
                    <div className="res-card__icon-wrap">
                      <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                      </svg>
                    </div>
                    <h3 className="res-card__title">{s3Guide1Title}</h3>
                    <p className="res-card__description">{s3Guide1Description}</p>
                    <div className="res-card__button">
                      <span className="res-btn res-btn--ghost">{s3Guide1BtnLabel}</span>
                    </div>
                  </a>

                  {/* Guide 2 */}
                  <a href={s3Guide2Href} className="res-card">
                    <div className="res-card__icon-wrap">
                      <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <h3 className="res-card__title">{s3Guide2Title}</h3>
                    <p className="res-card__description">{s3Guide2Description}</p>
                    <div className="res-card__button">
                      <span className="res-btn res-btn--ghost">{s3Guide2BtnLabel}</span>
                    </div>
                  </a>

                  {/* Guide 3 */}
                  <a href={s3Guide3Href} className="res-card">
                    <div className="res-card__icon-wrap">
                      <svg className="res-icon res-icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="18" cy="18" r="3" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                      </svg>
                    </div>
                    <h3 className="res-card__title">{s3Guide3Title}</h3>
                    <p className="res-card__description">{s3Guide3Description}</p>
                    <div className="res-card__button">
                      <span className="res-btn res-btn--ghost">{s3Guide3BtnLabel}</span>
                    </div>
                  </a>

                </div>
              </div>
            </section>

            {/* ── Section 4: CTA Band ──────────────────────────────────── */}
            <section id="section-4" className="res-cta-band" aria-label="Call to action">
              <div className="res-cta-band__inner">
                <h2 className="res-cta-band__title">
                  See how <span className="res-text--product">LLM Capsule</span> works with your data
                </h2>
                <p className="res-cta-band__description">{ctaDescription}</p>
                <div className="res-cta-band__actions">
                  <a href={ctaBtn1Href} className="res-btn res-btn--md res-btn--cta">{ctaBtn1Label}</a>
                </div>
                <div className="res-cta-band__secondary">
                  <a href={ctaSecBtn2Href} className="res-btn res-btn--sm res-btn--cta-sec" target="_blank" rel="noopener">{ctaSecBtn2Label}</a>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(Resources, {
  // Section 1 — Hero
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Enterprise AI Enablement",
  },
  heroTitleBrand: {
    type: ControlType.String,
    title: "Hero Title (Brand)",
    defaultValue: "Resources",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Technical documentation, learning resources, glossary, and downloads for enterprise AI enablement with LLM Capsule.",
    displayTextArea: true,
  },

  // Section 2 — Resource Hub
  s2SectionTitle: {
    type: ControlType.String,
    title: "S2 Section Title",
    defaultValue: "Explore",
  },
  s2SectionTitleBrand: {
    type: ControlType.String,
    title: "S2 Section Title (Brand)",
    defaultValue: "Resources",
  },
  s2SectionDescription: {
    type: ControlType.String,
    title: "S2 Section Description",
    defaultValue: "Browse documentation, learning materials, key terms, and trust information.",
    displayTextArea: true,
  },
  s2Card1Title: {
    type: ControlType.String,
    title: "S2 Card 1 Title",
    defaultValue: "Learn",
  },
  s2Card1Description: {
    type: ControlType.String,
    title: "S2 Card 1 Description",
    defaultValue: "In-depth articles on enterprise AI enablement, secure LLM usage, structure-preserving processing, and restorable workflows.",
    displayTextArea: true,
  },
  s2Card1BtnLabel: {
    type: ControlType.String,
    title: "S2 Card 1 Button",
    defaultValue: "Browse Learn →",
  },
  s2Card1Href: {
    type: ControlType.String,
    title: "S2 Card 1 URL",
    defaultValue: "learn.html",
  },
  s2Card2Title: {
    type: ControlType.String,
    title: "S2 Card 2 Title",
    defaultValue: "Glossary",
  },
  s2Card2Description: {
    type: ControlType.String,
    title: "S2 Card 2 Description",
    defaultValue: "Definitions of key concepts — restoration, zero exposure, enterprise context control, and structure-preserving processing.",
    displayTextArea: true,
  },
  s2Card2BtnLabel: {
    type: ControlType.String,
    title: "S2 Card 2 Button",
    defaultValue: "Browse Glossary →",
  },
  s2Card2Href: {
    type: ControlType.String,
    title: "S2 Card 2 URL",
    defaultValue: "glossary.html",
  },
  s2Card3Title: {
    type: ControlType.String,
    title: "S2 Card 3 Title",
    defaultValue: "Trust Center",
  },
  s2Card3Description: {
    type: ControlType.String,
    title: "S2 Card 3 Description",
    defaultValue: "Security certifications, compliance documentation, and audit information.",
    displayTextArea: true,
  },
  s2Card3BtnLabel: {
    type: ControlType.String,
    title: "S2 Card 3 Button",
    defaultValue: "Browse Trust Center →",
  },
  s2Card3Href: {
    type: ControlType.String,
    title: "S2 Card 3 URL",
    defaultValue: "trust-center.html",
  },

  // Section 3 — Core Guides
  s3SectionTitle: {
    type: ControlType.String,
    title: "S3 Section Title",
    defaultValue: "Core guides for enterprise AI",
  },
  s3SectionTitleBrand: {
    type: ControlType.String,
    title: "S3 Section Title (Brand)",
    defaultValue: "enablement",
  },
  s3SectionDescription: {
    type: ControlType.String,
    title: "S3 Section Description",
    defaultValue: "Start with the documents that explain the operating model, the failure of redaction-based approaches, and the architecture behind usable AI outputs.",
    displayTextArea: true,
  },
  s3Guide1Title: {
    type: ControlType.String,
    title: "S3 Guide 1 Title",
    defaultValue: "Secure Enterprise AI Data Workflows",
  },
  s3Guide1Description: {
    type: ControlType.String,
    title: "S3 Guide 1 Description",
    defaultValue: "The end-to-end operating model for protecting sensitive data across AI workflows while restoring usable outputs locally.",
    displayTextArea: true,
  },
  s3Guide1BtnLabel: {
    type: ControlType.String,
    title: "S3 Guide 1 Button",
    defaultValue: "Read guide →",
  },
  s3Guide1Href: {
    type: ControlType.String,
    title: "S3 Guide 1 URL",
    defaultValue: "secure-enterprise-ai-data-workflows.html",
  },
  s3Guide2Title: {
    type: ControlType.String,
    title: "S3 Guide 2 Title",
    defaultValue: "What Is an AI Data Capsule?",
  },
  s3Guide2Description: {
    type: ControlType.String,
    title: "S3 Guide 2 Description",
    defaultValue: "The core concept behind local encapsulation, protected AI processing, and local restoration.",
    displayTextArea: true,
  },
  s3Guide2BtnLabel: {
    type: ControlType.String,
    title: "S3 Guide 2 Button",
    defaultValue: "Read guide →",
  },
  s3Guide2Href: {
    type: ControlType.String,
    title: "S3 Guide 2 URL",
    defaultValue: "what-is-ai-data-capsule.html",
  },
  s3Guide3Title: {
    type: ControlType.String,
    title: "S3 Guide 3 Title",
    defaultValue: "Why Redaction Breaks Enterprise AI Workflows",
  },
  s3Guide3Description: {
    type: ControlType.String,
    title: "S3 Guide 3 Description",
    defaultValue: "Why masking and redaction tools fail in AI workflows, and what replaces them in enterprise production settings.",
    displayTextArea: true,
  },
  s3Guide3BtnLabel: {
    type: ControlType.String,
    title: "S3 Guide 3 Button",
    defaultValue: "Read guide →",
  },
  s3Guide3Href: {
    type: ControlType.String,
    title: "S3 Guide 3 URL",
    defaultValue: "why-redaction-breaks-enterprise-ai-workflows.html",
  },

  // Section 4 — CTA Band
  ctaTitle: {
    type: ControlType.String,
    title: "CTA Title",
    defaultValue: "See how LLM Capsule works with your data",
  },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
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
  ctaSecBtn2Label: {
    type: ControlType.String,
    title: "CTA Secondary Button 2 Label",
    defaultValue: "Available on AWS Marketplace",
  },
  ctaSecBtn2Href: {
    type: ControlType.String,
    title: "CTA Secondary Button 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
