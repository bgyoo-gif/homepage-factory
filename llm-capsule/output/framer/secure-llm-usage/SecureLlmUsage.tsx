import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Image Base ───────────────────────────────────────────────────────────────
const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Brand Palette ────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
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
  borderDefault: "#e6e7e9",
  borderBrand:   "#5690D4",
  surfaceDark:   "#171719",
  surfaceLight:  "#f7f7f7",
  surfaceWhite:  "#ffffff",
  success:       "#0e824c",
  error:         "#ff3030",
  info:          "#155ea0",
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const JSON_LD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://llmcapsule.ai/resources/glossary" },
    { "@type": "ListItem", "position": 4, "name": "Secure LLM Usage", "item": "https://llmcapsule.ai/resources/glossary/secure-llm-usage" },
  ],
})

const JSON_LD_ARTICLE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Secure LLM Usage — Using Large Language Models Without Data Exposure",
  "description": "Secure LLM usage enables enterprises to process sensitive data through large language models without exposing original information to external AI services.",
  "url": "https://llmcapsule.ai/resources/glossary/secure-llm-usage",
  "publisher": { "@type": "Organization", "name": "LLM Capsule" },
})

// ─── Props Interface ──────────────────────────────────────────────────────────
interface Props {
  heroTitle?: string
  heroTitleHighlight?: string
  heroDescription?: string
  screenshotLabel?: string
  definitionLabel?: string
  definitionText?: string
  section4Title?: string
  section4Para1?: string
  section4Para2?: string
  section5Title?: string
  section5Example?: string
  section6Title?: string
  relatedTerm1?: string
  relatedTerm1Href?: string
  relatedTerm2?: string
  relatedTerm2Href?: string
  relatedTerm3?: string
  relatedTerm3Href?: string
  relatedPagesTitle?: string
  link1Title?: string
  link1Href?: string
  link2Title?: string
  link2Href?: string
  link3Title?: string
  link3Href?: string
  link4Title?: string
  link4Href?: string
  ctaTitle?: string
  ctaProductName?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaFootnote?: string
  breadcrumbHome?: string
  breadcrumbResources?: string
  breadcrumbGlossary?: string
  breadcrumbCurrent?: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SecureLlmUsage({
  heroTitle = "Secure",
  heroTitleHighlight = "LLM Usage",
  heroDescription = "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by LLM Capsule.",
  screenshotLabel = "Secure LLM Usage — Sensitive enterprise data encapsulated before reaching any LLM, results restored locally",
  definitionLabel = "DEFINITION",
  definitionText = "Secure LLM usage is the practice of using large language models for enterprise tasks — summarization, extraction, classification, translation — without exposing original sensitive data to the AI provider. LLM Capsule enables secure LLM usage through its AI enablement data layer: pre-processing encapsulation and post-processing restoration that work across any LLM.",
  section4Title = "Explanation",
  section4Para1 = "Secure LLM usage is distinct from model-level security measures like prompt filtering or output scanning. Those approaches monitor the interaction with the AI model but do not prevent the data itself from being transmitted. Secure LLM usage operates at the data layer — transforming what the AI receives so that sensitive information never reaches the model.",
  section4Para2 = "This approach is model-agnostic. Whether the enterprise uses ChatGPT, Claude, Gemini, Perplexity, or any other LLM API, the AI enablement data layer remains consistent because it operates before the data reaches any model — enabling cross-model execution from a single AI enablement layer.",
  section5Title = "Example",
  section5Example = "A legal team uses Claude to analyze contract clauses across 100 vendor agreements. Each agreement contains proprietary pricing, vendor names, and internal project codes. Secure LLM usage means Claude receives structurally intact contracts with protected values — it can perform clause analysis accurately, but never receives the original vendor names or pricing figures. Outputs are restored locally for the legal team.",
  section6Title = "Related Terms",
  relatedTerm1 = "Zero Exposure",
  relatedTerm1Href = "zero-exposure.html",
  relatedTerm2 = "Restoration",
  relatedTerm2Href = "restoration.html",
  relatedTerm3 = "Restorable Workflow",
  relatedTerm3Href = "restorable-workflow.html",
  relatedPagesTitle = "Related Pages",
  link1Title = "Product Overview",
  link1Href = "product.html",
  link2Title = "Architecture",
  link2Href = "architecture.html",
  link3Title = "Trust & Compliance",
  link3Href = "trust.html",
  link4Title = "Request a Demo",
  link4Href = "request-pov.html",
  ctaTitle = "Enable",
  ctaProductName = "Secure LLM Usage",
  ctaDescription = "Process sensitive data through any LLM without exposure. Experience the AI enablement data layer.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaBtn2Label = "View Product",
  ctaBtn2Href = "product.html",
  ctaFootnote = "Enterprise AI Enablement by CUBIG",
  breadcrumbHome = "Home",
  breadcrumbResources = "Resources",
  breadcrumbGlossary = "Glossary",
  breadcrumbCurrent = "Secure LLM Usage",
}: Props) {
  return (
    <>
      {/* ─── Fonts ─────────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .slu-root {
          font-family: "DM Sans", sans-serif;
          color: ${C.textPrimary};
          background-color: ${C.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
          width: 100%;
        }

        img { max-width: 100%; display: block; }
        a { text-decoration: none; color: inherit; }

        /* ── Wrapper (container query host) ── */
        .slu-inner {
          width: 100%;
          container-type: inline-size;
        }

        /* ── Article Container (1080px) ── */
        .slu-article-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .slu-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .slu-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .slu-article-container { padding: 0 120px; max-width: 1440px; } }

        /* ── CTA Full-width Container ── */
        .slu-cta-container {
          width: 100%;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .slu-cta-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .slu-cta-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .slu-cta-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Sections ── */
        .slu-section-hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
        }

        .slu-section-body {
          width: 100%;
          padding: 32px 0;
        }
        @container (min-width: 768px)  { .slu-section-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .slu-section-body { padding: 60px 0; } }

        /* ── CTA Band ── */
        .slu-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
        }
        @container (min-width: 768px)  { .slu-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .slu-cta-band { padding: 120px 120px; } }
        @container (max-width: 767px)  { .slu-cta-band { background-image: none; } }

        .slu-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .slu-cta-band > * { position: relative; z-index: 1; }

        .slu-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .slu-cta-inner { max-width: 720px; } }
        @container (min-width: 1440px) { .slu-cta-inner { max-width: 1080px; } }

        .slu-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container (max-width: 767px) { .slu-cta-title { font-size: 36px; } }
        @container (min-width: 1440px) { .slu-cta-title { font-size: 50px; } }

        .slu-cta-desc {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin: 0;
        }

        .slu-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        @container (max-width: 767px) {
          .slu-cta-actions { flex-direction: column; align-items: center; }
          .slu-cta-actions .slu-btn { width: 100%; max-width: 320px; }
        }

        .slu-cta-footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          margin-top: 8px;
        }

        /* ── Breadcrumb ── */
        .slu-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .slu-breadcrumb__link {
          font-size: 14px;
          color: ${C.brandSecondary};
          font-weight: 500;
          transition: color 0.15s;
          cursor: pointer;
        }
        .slu-breadcrumb__sep { font-size: 14px; color: ${C.textTertiary}; }
        .slu-breadcrumb__current { font-size: 14px; color: ${C.textTertiary}; }

        /* ── Hero Title ── */
        .slu-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .slu-hero-title { font-size: 40px; } }
        @container (min-width: 1024px) { .slu-hero-title { font-size: 48px; } }
        @container (min-width: 1440px) { .slu-hero-title { font-size: 64px; } }

        .slu-hero-desc {
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
        }

        /* ── Screenshot Frame ── */
        .slu-screenshot-frame {
          margin-top: 48px;
          border-radius: 40px 40px 0 0;
          padding: 32px 32px 0;
          background-color: ${C.neutral050};
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .slu-screenshot-frame {
            border-radius: 24px 24px 0 0;
            background-image: none;
          }
        }

        .slu-screenshot-inner {
          background-color: ${C.surfaceWhite};
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }

        .slu-screenshot-label {
          font-size: 14px;
          color: ${C.textTertiary};
          text-align: center;
          line-height: 1.7;
        }

        /* ── Banner ── */
        .slu-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .slu-banner-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${C.textTertiary};
          margin-bottom: 8px;
          display: block;
        }

        .slu-banner p {
          font-size: 16px;
          color: ${C.textPrimary};
          line-height: 1.7;
          margin: 0;
        }

        /* ── Article Section Header ── */
        .slu-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        @container (max-width: 767px) { .slu-section-header { text-align: left; } }

        .slu-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .slu-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .slu-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .slu-section-header h2 { font-size: 28px; } }

        /* ── Article Body Paragraphs ── */
        .slu-para {
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .slu-para:last-child { margin-bottom: 0; }

        /* ── Card ── */
        .slu-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container (min-width: 1440px) { .slu-card { padding: 32px; } }

        /* ── Related Terms ── */
        .slu-related-terms {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        /* ── Section Title Icon ── */
        .slu-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .slu-title-icon__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .slu-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }

        /* ── Card Grid ── */
        .slu-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) { .slu-card-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark Card ── */
        .slu-card-dark {
          background-color: ${C.neutral850};
          border: 1px solid ${C.neutral700};
          color: ${C.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          cursor: pointer;
        }
        .slu-card-dark:hover { background-color: ${C.neutral800}; }
        .slu-card-dark__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .slu-card-dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }

        /* ── Button ── */
        .slu-btn {
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
        }
        .slu-btn--sm {
          padding: 8px 16px;
          font-size: 14px;
          background-color: transparent;
          color: ${C.textPrimary};
          border: 1px solid ${C.borderDefault};
        }
        .slu-btn--sm:hover { background-color: ${C.surfaceLight}; }

        .slu-btn--lg {
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${C.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .slu-btn--lg:hover { background-color: ${C.white}; }

        /* ── Brand text ── */
        .slu-text-brand { color: ${C.brandSecondary}; }
        .slu-text-product { font-family: "Oxanium", sans-serif; font-weight: 700; }
      `}</style>

      {/* ─── JSON-LD ────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_ARTICLE }}
      />

      <div className="slu-root">
        <div className="slu-inner">

          {/* ────────────────────────────────────────────────────────────────
               Section 1: Hero
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-hero" className="slu-section-hero">
            <div className="slu-article-container">
              {/* Breadcrumb */}
              <nav className="slu-breadcrumb" aria-label="Breadcrumb">
                <a href="https://llmcapsule.ai/" className="slu-breadcrumb__link">{breadcrumbHome}</a>
                <span className="slu-breadcrumb__sep">/</span>
                <a href="https://llmcapsule.ai/resources" className="slu-breadcrumb__link">{breadcrumbResources}</a>
                <span className="slu-breadcrumb__sep">/</span>
                <a href="https://llmcapsule.ai/resources/glossary" className="slu-breadcrumb__link">{breadcrumbGlossary}</a>
                <span className="slu-breadcrumb__sep">/</span>
                <span className="slu-breadcrumb__current">{breadcrumbCurrent}</span>
              </nav>

              <h1 className="slu-hero-title">
                <span className="slu-text-brand">{heroTitle}</span>{" "}
                {heroTitleHighlight}
              </h1>
              <p className="slu-hero-desc">
                Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by{" "}
                <span className="slu-text-product">LLM Capsule</span>.
              </p>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 2: Screenshot Frame
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-2" className="slu-section-body">
            <div className="slu-article-container">
              <div className="slu-screenshot-frame">
                <div className="slu-screenshot-inner">
                  <p className="slu-screenshot-label">{screenshotLabel}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 3: Definition
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-3" className="slu-section-body">
            <div className="slu-article-container">
              <div className="slu-banner">
                <span className="slu-banner-label">{definitionLabel}</span>
                <p>
                  Secure LLM usage is the practice of using large language models for enterprise tasks — summarization, extraction, classification, translation — without exposing original sensitive data to the AI provider.{" "}
                  <span className="slu-text-product">LLM Capsule</span> enables secure LLM usage through its AI enablement data layer: pre-processing encapsulation and post-processing restoration that work across any LLM.
                </p>
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 4: Explanation
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-4" className="slu-section-body">
            <div className="slu-article-container">
              <div className="slu-section-header">
                <h2><span className="slu-text-brand">{section4Title}</span></h2>
              </div>
              <p className="slu-para">{section4Para1}</p>
              <p className="slu-para">{section4Para2}</p>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 5: Example
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-5" className="slu-section-body">
            <div className="slu-article-container">
              <div className="slu-section-header">
                <h2><span className="slu-text-brand">{section5Title}</span></h2>
              </div>
              <div className="slu-card">
                <p className="slu-para">{section5Example}</p>
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 6: Related Terms + Related Links
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-6" className="slu-section-body">
            <div className="slu-article-container">
              <div className="slu-section-header">
                <h2>Related <span className="slu-text-brand">Terms</span></h2>
              </div>

              {/* Related Terms */}
              <div className="slu-related-terms">
                <a href={relatedTerm1Href} className="slu-btn slu-btn--sm">{relatedTerm1}</a>
                <a href={relatedTerm2Href} className="slu-btn slu-btn--sm">{relatedTerm2}</a>
                <a href={relatedTerm3Href} className="slu-btn slu-btn--sm">{relatedTerm3}</a>
              </div>

              {/* Related Pages sub-header */}
              <div className="slu-title-icon">
                <span className="slu-title-icon__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </span>
                <span className="slu-title-icon__text">{relatedPagesTitle}</span>
              </div>

              {/* Related Link Cards */}
              <div className="slu-card-grid">
                <a href={link1Href} className="slu-card-dark">
                  <span className="slu-card-dark__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                  </span>
                  <span className="slu-card-dark__title">{link1Title}</span>
                </a>
                <a href={link2Href} className="slu-card-dark">
                  <span className="slu-card-dark__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </span>
                  <span className="slu-card-dark__title">{link2Title}</span>
                </a>
                <a href={link3Href} className="slu-card-dark">
                  <span className="slu-card-dark__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </span>
                  <span className="slu-card-dark__title">{link3Title}</span>
                </a>
                <a href={link4Href} className="slu-card-dark">
                  <span className="slu-card-dark__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                  <span className="slu-card-dark__title">{link4Title}</span>
                </a>
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
               Section 7: CTA Band (full-width)
          ──────────────────────────────────────────────────────────────── */}
          <section id="section-cta" className="slu-cta-band">
            <div className="slu-cta-inner">
              <h2 className="slu-cta-title">
                {ctaTitle} <span className="slu-text-product">{ctaProductName}</span> for Your Enterprise
              </h2>
              <p className="slu-cta-desc">{ctaDescription}</p>
              <div className="slu-cta-actions">
                <a href={ctaBtn1Href} className="slu-btn slu-btn--lg">{ctaBtn1Label}</a>
                <a href={ctaBtn2Href} className="slu-btn slu-btn--lg">{ctaBtn2Label}</a>
              </div>
              <p className="slu-cta-footnote">{ctaFootnote}</p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(SecureLlmUsage, {
  // Hero
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title (highlight)",
    defaultValue: "Secure",
  },
  heroTitleHighlight: {
    type: ControlType.String,
    title: "Hero Title (rest)",
    defaultValue: "LLM Usage",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by LLM Capsule.",
  },
  // Screenshot
  screenshotLabel: {
    type: ControlType.String,
    title: "Screenshot Label",
    defaultValue: "Secure LLM Usage — Sensitive enterprise data encapsulated before reaching any LLM, results restored locally",
  },
  // Definition
  definitionLabel: {
    type: ControlType.String,
    title: "Definition Label",
    defaultValue: "DEFINITION",
  },
  definitionText: {
    type: ControlType.String,
    title: "Definition Text",
    defaultValue: "Secure LLM usage is the practice of...",
  },
  // Explanation
  section4Title: {
    type: ControlType.String,
    title: "Explanation Title",
    defaultValue: "Explanation",
  },
  section4Para1: {
    type: ControlType.String,
    title: "Explanation Para 1",
    defaultValue: "Secure LLM usage is distinct from model-level security...",
  },
  section4Para2: {
    type: ControlType.String,
    title: "Explanation Para 2",
    defaultValue: "This approach is model-agnostic...",
  },
  // Example
  section5Title: {
    type: ControlType.String,
    title: "Example Title",
    defaultValue: "Example",
  },
  section5Example: {
    type: ControlType.String,
    title: "Example Text",
    defaultValue: "A legal team uses Claude to analyze contract clauses...",
  },
  // Related Terms
  section6Title: {
    type: ControlType.String,
    title: "Related Terms Title",
    defaultValue: "Related Terms",
  },
  relatedTerm1: { type: ControlType.String, title: "Term 1", defaultValue: "Zero Exposure" },
  relatedTerm1Href: { type: ControlType.String, title: "Term 1 Href", defaultValue: "zero-exposure.html" },
  relatedTerm2: { type: ControlType.String, title: "Term 2", defaultValue: "Restoration" },
  relatedTerm2Href: { type: ControlType.String, title: "Term 2 Href", defaultValue: "restoration.html" },
  relatedTerm3: { type: ControlType.String, title: "Term 3", defaultValue: "Restorable Workflow" },
  relatedTerm3Href: { type: ControlType.String, title: "Term 3 Href", defaultValue: "restorable-workflow.html" },
  // Related Pages
  relatedPagesTitle: { type: ControlType.String, title: "Related Pages Title", defaultValue: "Related Pages" },
  link1Title: { type: ControlType.String, title: "Link 1 Title", defaultValue: "Product Overview" },
  link1Href: { type: ControlType.String, title: "Link 1 Href", defaultValue: "product.html" },
  link2Title: { type: ControlType.String, title: "Link 2 Title", defaultValue: "Architecture" },
  link2Href: { type: ControlType.String, title: "Link 2 Href", defaultValue: "architecture.html" },
  link3Title: { type: ControlType.String, title: "Link 3 Title", defaultValue: "Trust & Compliance" },
  link3Href: { type: ControlType.String, title: "Link 3 Href", defaultValue: "trust.html" },
  link4Title: { type: ControlType.String, title: "Link 4 Title", defaultValue: "Request a Demo" },
  link4Href: { type: ControlType.String, title: "Link 4 Href", defaultValue: "request-pov.html" },
  // CTA Band
  ctaTitle: { type: ControlType.String, title: "CTA Title", defaultValue: "Enable" },
  ctaProductName: { type: ControlType.String, title: "CTA Product Name", defaultValue: "Secure LLM Usage" },
  ctaDescription: {
    type: ControlType.String,
    title: "CTA Description",
    defaultValue: "Process sensitive data through any LLM without exposure. Experience the AI enablement data layer.",
  },
  ctaBtn1Label: { type: ControlType.String, title: "CTA Btn 1 Label", defaultValue: "Request a Demo" },
  ctaBtn1Href: { type: ControlType.String, title: "CTA Btn 1 Href", defaultValue: "request-pov.html" },
  ctaBtn2Label: { type: ControlType.String, title: "CTA Btn 2 Label", defaultValue: "View Product" },
  ctaBtn2Href: { type: ControlType.String, title: "CTA Btn 2 Href", defaultValue: "product.html" },
  ctaFootnote: { type: ControlType.String, title: "CTA Footnote", defaultValue: "Enterprise AI Enablement by CUBIG" },
  // Breadcrumb
  breadcrumbHome: { type: ControlType.String, title: "Breadcrumb Home", defaultValue: "Home" },
  breadcrumbResources: { type: ControlType.String, title: "Breadcrumb Resources", defaultValue: "Resources" },
  breadcrumbGlossary: { type: ControlType.String, title: "Breadcrumb Glossary", defaultValue: "Glossary" },
  breadcrumbCurrent: { type: ControlType.String, title: "Breadcrumb Current", defaultValue: "Secure LLM Usage" },
})
