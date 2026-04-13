import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
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
  neutral250: "#c4c4c4",
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
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",

  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientViolet: `url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.png')`,

  overlayDarkLight:  "rgba(0,0,0,0.15)",
  overlayWhite85:    "rgba(255,255,255,0.85)",
  overlayWhite70:    "rgba(255,255,255,0.70)",
  overlayNavBg:      "rgba(255,255,255,0.92)",
  overlayCtaBdr:     "rgba(255,255,255,0.6)",
  overlayBrandTint:  "rgba(24,33,232,0.06)",
  overlayShadow:     "0px 24px 40px rgba(0,0,0,0.04)",
}

// ─── Props ──────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 2 — Problem
  problemHeading?: string
  problemPara1?: string
  problemPara2?: string

  // Section 3 — Definition
  definitionHeading?: string
  definitionTerm?: string
  definitionBody?: string

  // Section 4 — Explanation
  explanationHeading?: string
  explanationIntro?: string
  explanationBullet1Label?: string
  explanationBullet1?: string
  explanationBullet2Label?: string
  explanationBullet2?: string
  explanationBullet3Label?: string
  explanationBullet3?: string

  // Section 5 — Example
  exampleHeading?: string
  exampleCardTitle?: string
  exampleCardPara1?: string
  exampleCardPara2?: string

  // Section 6 — FAQ
  faqHeading?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string

  // Section 7 — Related
  relatedHeading?: string
  related1Title?: string
  related2Title?: string
  related3Title?: string
  related4Title?: string
  related1Href?: string
  related2Href?: string
  related3Href?: string
  related4Href?: string

  // Section 8 — CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaFootnote1Label?: string
  ctaFootnote1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string

  // JSON-LD
  canonicalUrl?: string
  pageTitle?: string
  pageDescription?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function PiiProtectionVsEnterpriseConfidentialityControl({
  heroTitle = "PII Protection vs Enterprise Confidentiality Control",
  heroDescription = "Why protecting only personal data is insufficient for enterprise AI enablement. Business-critical information requires enterprise confidentiality control to truly enable AI adoption.",

  problemHeading = "Problem",
  problemPara1 = "Most AI data protection solutions focus on personally identifiable information (PII) — names, social security numbers, email addresses. But true enterprise AI enablement requires protecting far more than PII. Enterprise documents contain trade secrets, acquisition targets, pricing models, internal performance metrics, strategic plans, and client relationship details — all enterprise-sensitive but not classified as PII.",
  problemPara2 = "A legal memo about a pending acquisition contains no PII. It contains deal structure, valuation ranges, and strategic rationale — all of which would be damaging if exposed to an AI provider's training pipeline or logging system.",

  definitionHeading = "Definition",
  definitionTerm = "Enterprise Confidentiality Control",
  definitionBody = "Enterprise confidentiality control is a data protection approach for AI workflows that extends beyond PII to cover all categories of business-sensitive information. It enables policy-based classification and encapsulation of trade secrets, financial terms, strategic data, and operational details alongside personal data protection.",

  explanationHeading = "Explanation",
  explanationIntro = "Enterprise confidentiality control differs from PII protection in scope and configurability:",
  explanationBullet1Label = "Scope.",
  explanationBullet1 = "PII protection covers regulatory-defined categories — names, identification numbers, health records. Enterprise confidentiality control covers organization-defined categories — deal terms, pricing, internal metrics, competitive analysis, and strategic plans.",
  explanationBullet2Label = "Policy-driven classification.",
  explanationBullet2 = "What counts as sensitive varies by department, document type, and workflow. A revenue figure is sensitive in a board presentation but routine in a published annual report. Context-aware data control enables policy-driven sensitivity classification, not just regex pattern matching.",
  explanationBullet3Label = "Workflow integration.",
  explanationBullet3 = "Enterprise confidentiality control integrates with governance frameworks, audit systems, and compliance workflows — providing visibility into what data is protected, how, and by whom.",

  exampleHeading = "Enterprise Example",
  exampleCardTitle = "M&A Due Diligence",
  exampleCardPara1 = "An investment bank uses AI to analyze target company documents during due diligence. Documents contain no customer PII but are filled with sensitive deal terms, valuation models, and strategic assessments.",
  exampleCardPara2 = "LLM Capsule's enterprise confidentiality control encapsulates deal-specific terminology, financial figures, and company identifiers. AI performs analysis on the protected documents. Local restoration restores deal context into the analysis outputs for the advisory team.",

  faqHeading = "FAQ",
  faq1Q = "What is enterprise confidentiality control?",
  faq1A = "Enterprise confidentiality control is a data protection approach that goes beyond PII to cover all business-sensitive information — trade secrets, deal terms, pricing strategies, internal metrics, and competitive intelligence — during AI processing.",
  faq2Q = "Why is PII protection insufficient for enterprise AI?",
  faq2A = "Enterprise documents contain sensitive business data that is not PII. Protecting only names and IDs while exposing deal terms, financial models, and strategic plans still creates unacceptable data exposure risk.",

  relatedHeading = "Related",
  related1Title = "Product Overview",
  related2Title = "Architecture",
  related3Title = "Trust & Compliance",
  related4Title = "Request a Demo",
  related1Href = "product.html",
  related2Href = "architecture.html",
  related3Href = "trust.html",
  related4Href = "request-pov.html",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "request-pov.html",
  ctaBtn2Label = "Talk to an Architect",
  ctaBtn2Href = "architecture.html",
  ctaFootnote1Label = "Download Architecture Brief",
  ctaFootnote1Href = "downloads.html",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace",

  canonicalUrl = "https://llmcapsule.ai/resources/learn/pii-protection-vs-enterprise-confidentiality-control",
  pageTitle = "PII Protection vs Enterprise Confidentiality Control — Beyond Personal Data in AI Workflows | LLM Capsule",
  pageDescription = "PII protection covers personal data only. Enterprise confidentiality control protects trade secrets, deal terms, and strategic data for AI.",
}: Props) {

  // FAQ open state
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: true, 1: false })
  const toggleFaq = (idx: number) =>
    setFaqOpen(prev => ({ ...prev, [idx]: !prev[idx] }))

  const jsonLdBreadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
      { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
      { "@type": "ListItem", "position": 4, "name": "PII Protection vs Enterprise Confidentiality Control", "item": canonicalUrl },
    ]
  })

  const jsonLdFaq = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": faq1Q,
        "acceptedAnswer": { "@type": "Answer", "text": faq1A },
      },
      {
        "@type": "Question",
        "name": faq2Q,
        "acceptedAnswer": { "@type": "Answer", "text": faq2A },
      },
    ]
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ppec-root {
          font-family: "DM Sans", sans-serif;
          color: ${C.textPrimary};
          background-color: ${C.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
          width: 100%;
          overflow-x: hidden;
        }

        /* ── Inner wrapper for container queries ── */
        .ppec-inner {
          width: 100%;
          container-type: inline-size;
        }

        /* ── Article container ── */
        .ppec-article-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .ppec-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .ppec-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .ppec-article-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Sections ── */
        .ppec-section-hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
        }
        .ppec-section-body {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
        }
        @container (min-width: 768px)  { .ppec-section-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .ppec-section-body { padding: 60px 0; } }

        /* ── Hero typography ── */
        .ppec-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .ppec-hero-title { font-size: 40px; } }
        @container (min-width: 1024px) { .ppec-hero-title { font-size: 48px; } }
        @container (min-width: 1440px) { .ppec-hero-title { font-size: 64px; } }

        .ppec-hero-desc {
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Section header ── */
        .ppec-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .ppec-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .ppec-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .ppec-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .ppec-section-header h2 { font-size: 28px; } }

        /* ── Brand text ── */
        .ppec-brand-text { color: ${C.brandSecondary}; }
        .ppec-product-text { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ── Article body paragraphs ── */
        .ppec-para {
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .ppec-para:last-child { margin-bottom: 0; }

        /* ── Banner ── */
        .ppec-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: ${C.overlayBrandTint};
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .ppec-banner p {
          font-size: 16px;
          color: ${C.textPrimary};
          line-height: 1.7;
          margin: 0;
        }
        .ppec-banner p + p { margin-top: 12px; }

        /* ── Bullet list ── */
        .ppec-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ppec-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
        }
        .ppec-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ppec-bullet__icon::before {
          content: "•";
          color: ${C.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Card ── */
        .ppec-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ppec-card__title {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }
        .ppec-card p {
          font-size: 16px;
          line-height: 1.7;
          color: ${C.textSecondary};
          margin: 0;
        }
        .ppec-card p + p { margin-top: 12px; }

        /* ── FAQ / Accordion ── */
        .ppec-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ppec-ac-card {
          border: 1px solid ${C.borderDefault};
          border-radius: 8px;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .ppec-ac-card:hover { background-color: ${C.neutral025}; }
        .ppec-ac-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .ppec-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${C.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .ppec-ac-card__toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
        }
        .ppec-ac-card__toggle::before,
        .ppec-ac-card__toggle::after {
          content: '';
          position: absolute;
          background-color: ${C.textTertiary};
          border-radius: 1px;
        }
        .ppec-ac-card__toggle::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .ppec-ac-card__toggle--closed::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .ppec-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          font-size: 14px;
          color: ${C.textSecondary};
          line-height: 1.7;
        }
        .ppec-ac-card__body p + p { margin-top: 12px; }

        /* ── Section title icon ── */
        .ppec-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .ppec-section-title-icon__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .ppec-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }

        /* ── Card grid ── */
        .ppec-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) { .ppec-card-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark card ── */
        .ppec-card-dark {
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
          text-decoration: none;
        }
        .ppec-card-dark:hover { background-color: ${C.neutral800}; }
        .ppec-card-dark__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .ppec-card-dark__title {
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }

        /* ── DS Icon ── */
        .ppec-icon {
          width: 24px; height: 24px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── CTA Band ── */
        .ppec-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: ${C.gradientViolet};
          background-size: cover;
          background-position: center;
        }
        @container (min-width: 768px)  { .ppec-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .ppec-cta-band { padding: 120px 120px; } }

        .ppec-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${C.overlayDarkLight};
          z-index: 0;
        }
        .ppec-cta-band > * { position: relative; z-index: 1; }

        .ppec-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container (min-width: 1024px) { .ppec-cta-inner { max-width: 720px; } }
        @container (min-width: 1440px) { .ppec-cta-inner { max-width: 1080px; } }

        .ppec-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .ppec-cta-title { font-size: 40px; } }
        @container (min-width: 1440px) { .ppec-cta-title { font-size: 50px; } }

        .ppec-cta-desc {
          font-size: 18px;
          color: ${C.overlayWhite85};
          line-height: 1.7;
          margin: 0;
        }

        .ppec-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .ppec-btn {
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
          padding: 16px 48px;
          font-size: 18px;
          background-color: ${C.overlayNavBg};
          color: ${C.textPrimary};
          border: 1px solid ${C.overlayCtaBdr};
          backdrop-filter: blur(8px);
        }
        .ppec-btn:hover { background-color: ${C.white}; }

        .ppec-cta-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .ppec-cta-footnote a {
          font-size: 14px;
          color: ${C.overlayWhite70};
          text-decoration: none;
          transition: color 0.2s;
        }
        .ppec-cta-footnote a:hover { color: ${C.white}; }

        /* ── Spacing util ── */
        .ppec-spaced-top { margin-top: 24px; }

        /* ── Mobile: no CTA bg image ── */
        @container (max-width: 767px) {
          .ppec-cta-band { background-image: none; }
          .ppec-cta-actions { flex-direction: column; align-items: center; }
          .ppec-cta-actions .ppec-btn { width: 100%; max-width: 320px; }
          .ppec-cta-title { font-size: 36px; }
        }
      `}</style>

      <div className="ppec-root">
        <div className="ppec-inner">

          {/* ── Section 1: Hero ─────────────────────────────────────── */}
          <section id="section-hero" style={{ width: "100%", padding: "100px 0 0", backgroundColor: C.surfaceWhite }}>
            <div className="ppec-article-container">
              <h1 className="ppec-hero-title">{heroTitle}</h1>
              <p className="ppec-hero-desc">{heroDescription}</p>
            </div>
          </section>

          {/* ── Section 2: Problem ──────────────────────────────────── */}
          <section id="section-2" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-header">
                <h2><span className="ppec-brand-text">{problemHeading}</span></h2>
              </div>
              <p className="ppec-para">{problemPara1}</p>
              <p className="ppec-para">{problemPara2}</p>
            </div>
          </section>

          {/* ── Section 3: Definition ───────────────────────────────── */}
          <section id="section-3" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-header">
                <h2><span className="ppec-brand-text">{definitionHeading}</span></h2>
              </div>
              <div className="ppec-banner">
                <p><strong>{definitionTerm}</strong></p>
                <p>{definitionBody}</p>
              </div>
            </div>
          </section>

          {/* ── Section 4: Explanation ──────────────────────────────── */}
          <section id="section-4" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-header">
                <h2><span className="ppec-brand-text">{explanationHeading}</span></h2>
              </div>
              <p className="ppec-para">{explanationIntro}</p>
              <ul className="ppec-bullet ppec-spaced-top">
                <li className="ppec-bullet__item">
                  <span className="ppec-bullet__icon" />
                  <span><strong>{explanationBullet1Label}</strong> {explanationBullet1}</span>
                </li>
                <li className="ppec-bullet__item">
                  <span className="ppec-bullet__icon" />
                  <span><strong>{explanationBullet2Label}</strong> {explanationBullet2}</span>
                </li>
                <li className="ppec-bullet__item">
                  <span className="ppec-bullet__icon" />
                  <span><strong>{explanationBullet3Label}</strong> {explanationBullet3}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 5: Enterprise Example ──────────────────────── */}
          <section id="section-5" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-header">
                <h2>Enterprise <span className="ppec-brand-text">{exampleHeading.replace("Enterprise ", "")}</span></h2>
              </div>
              <div className="ppec-card">
                <h4 className="ppec-card__title">{exampleCardTitle}</h4>
                <p>{exampleCardPara1}</p>
                <p>
                  <span className="ppec-product-text">LLM Capsule</span>
                  {exampleCardPara2.replace("LLM Capsule", "")}
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 6: FAQ ──────────────────────────────────────── */}
          <section id="section-6" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-header">
                <h2><span className="ppec-brand-text">{faqHeading}</span></h2>
              </div>
              <div className="ppec-ac-list">
                {[{ q: faq1Q, a: faq1A }, { q: faq2Q, a: faq2A }].map((item, idx) => (
                  <div
                    key={idx}
                    className="ppec-ac-card"
                    onClick={() => toggleFaq(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="ppec-ac-card__header">
                      <span className="ppec-ac-card__title">{item.q}</span>
                      <span className={`ppec-ac-card__toggle ${faqOpen[idx] ? "" : "ppec-ac-card__toggle--closed"}`} />
                    </div>
                    {faqOpen[idx] && (
                      <div className="ppec-ac-card__body">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 7: Related ──────────────────────────────────── */}
          <section id="section-7" className="ppec-section-body">
            <div className="ppec-article-container">
              <div className="ppec-section-title-icon">
                <span className="ppec-section-title-icon__icon">
                  <svg className="ppec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </span>
                <span className="ppec-section-title-icon__text">{relatedHeading}</span>
              </div>
              <div className="ppec-card-grid">
                <a href={related1Href} className="ppec-card-dark">
                  <span className="ppec-card-dark__icon">
                    <svg className="ppec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                  </span>
                  <span className="ppec-card-dark__title">{related1Title}</span>
                </a>
                <a href={related2Href} className="ppec-card-dark">
                  <span className="ppec-card-dark__icon">
                    <svg className="ppec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </span>
                  <span className="ppec-card-dark__title">{related2Title}</span>
                </a>
                <a href={related3Href} className="ppec-card-dark">
                  <span className="ppec-card-dark__icon">
                    <svg className="ppec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </span>
                  <span className="ppec-card-dark__title">{related3Title}</span>
                </a>
                <a href={related4Href} className="ppec-card-dark">
                  <span className="ppec-card-dark__icon">
                    <svg className="ppec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                  <span className="ppec-card-dark__title">{related4Title}</span>
                </a>
              </div>
            </div>
          </section>

          {/* ── Section 8: CTA Band ─────────────────────────────────── */}
          <section id="section-cta" className="ppec-cta-band">
            <div className="ppec-cta-inner">
              <h2 className="ppec-cta-title">
                {ctaTitle.split("LLM Capsule").map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="ppec-product-text">LLM Capsule</span></span>
                    : <span key={i}>{part}</span>
                )}
              </h2>
              <p className="ppec-cta-desc">{ctaDescription}</p>
              <div className="ppec-cta-actions">
                <a href={ctaBtn1Href} className="ppec-btn">{ctaBtn1Label}</a>
                <a href={ctaBtn2Href} className="ppec-btn">{ctaBtn2Label}</a>
              </div>
              <div className="ppec-cta-footnote">
                <a href={ctaFootnote1Href}>{ctaFootnote1Label}</a>
                <a href={ctaFootnote2Href} target="_blank" rel="noopener">{ctaFootnote2Label}</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ───────────────────────────────────────────────────────
addPropertyControls(PiiProtectionVsEnterpriseConfidentialityControl, {
  // Hero
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "PII Protection vs Enterprise Confidentiality Control",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Why protecting only personal data is insufficient for enterprise AI enablement.",
    displayTextArea: true,
  },

  // Problem
  problemHeading: { type: ControlType.String, title: "Problem Heading", defaultValue: "Problem" },
  problemPara1: {
    type: ControlType.String,
    title: "Problem Para 1",
    defaultValue: "Most AI data protection solutions focus on PII...",
    displayTextArea: true,
  },
  problemPara2: {
    type: ControlType.String,
    title: "Problem Para 2",
    defaultValue: "A legal memo about a pending acquisition...",
    displayTextArea: true,
  },

  // Definition
  definitionHeading: { type: ControlType.String, title: "Definition Heading", defaultValue: "Definition" },
  definitionTerm: { type: ControlType.String, title: "Definition Term", defaultValue: "Enterprise Confidentiality Control" },
  definitionBody: {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "Enterprise confidentiality control is a data protection approach...",
    displayTextArea: true,
  },

  // Explanation
  explanationHeading: { type: ControlType.String, title: "Explanation Heading", defaultValue: "Explanation" },
  explanationIntro: {
    type: ControlType.String,
    title: "Explanation Intro",
    defaultValue: "Enterprise confidentiality control differs from PII protection in scope and configurability:",
    displayTextArea: true,
  },
  explanationBullet1Label: { type: ControlType.String, title: "Bullet 1 Label", defaultValue: "Scope." },
  explanationBullet1: { type: ControlType.String, title: "Bullet 1 Body", displayTextArea: true, defaultValue: "PII protection covers regulatory-defined categories..." },
  explanationBullet2Label: { type: ControlType.String, title: "Bullet 2 Label", defaultValue: "Policy-driven classification." },
  explanationBullet2: { type: ControlType.String, title: "Bullet 2 Body", displayTextArea: true, defaultValue: "What counts as sensitive varies by department..." },
  explanationBullet3Label: { type: ControlType.String, title: "Bullet 3 Label", defaultValue: "Workflow integration." },
  explanationBullet3: { type: ControlType.String, title: "Bullet 3 Body", displayTextArea: true, defaultValue: "Enterprise confidentiality control integrates with governance frameworks..." },

  // Example
  exampleHeading: { type: ControlType.String, title: "Example Heading", defaultValue: "Enterprise Example" },
  exampleCardTitle: { type: ControlType.String, title: "Example Card Title", defaultValue: "M&A Due Diligence" },
  exampleCardPara1: { type: ControlType.String, title: "Example Card Para 1", displayTextArea: true, defaultValue: "An investment bank uses AI to analyze target company documents..." },
  exampleCardPara2: { type: ControlType.String, title: "Example Card Para 2", displayTextArea: true, defaultValue: "LLM Capsule's enterprise confidentiality control encapsulates deal-specific terminology..." },

  // FAQ
  faqHeading: { type: ControlType.String, title: "FAQ Heading", defaultValue: "FAQ" },
  faq1Q: { type: ControlType.String, title: "FAQ 1 Question", defaultValue: "What is enterprise confidentiality control?" },
  faq1A: { type: ControlType.String, title: "FAQ 1 Answer", displayTextArea: true, defaultValue: "Enterprise confidentiality control is a data protection approach that goes beyond PII..." },
  faq2Q: { type: ControlType.String, title: "FAQ 2 Question", defaultValue: "Why is PII protection insufficient for enterprise AI?" },
  faq2A: { type: ControlType.String, title: "FAQ 2 Answer", displayTextArea: true, defaultValue: "Enterprise documents contain sensitive business data that is not PII..." },

  // Related
  relatedHeading: { type: ControlType.String, title: "Related Heading", defaultValue: "Related" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "Product Overview" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "Architecture" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "Trust & Compliance" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "Request a Demo" },
  related1Href: { type: ControlType.String, title: "Related 1 Href", defaultValue: "product.html" },
  related2Href: { type: ControlType.String, title: "Related 2 Href", defaultValue: "architecture.html" },
  related3Href: { type: ControlType.String, title: "Related 3 Href", defaultValue: "trust.html" },
  related4Href: { type: ControlType.String, title: "Related 4 Href", defaultValue: "request-pov.html" },

  // CTA
  ctaTitle: { type: ControlType.String, title: "CTA Title", defaultValue: "See how LLM Capsule works with your data" },
  ctaDescription: { type: ControlType.String, title: "CTA Description", displayTextArea: true, defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  ctaBtn1Label: { type: ControlType.String, title: "CTA Btn 1 Label", defaultValue: "Request a Demo" },
  ctaBtn1Href: { type: ControlType.String, title: "CTA Btn 1 Href", defaultValue: "request-pov.html" },
  ctaBtn2Label: { type: ControlType.String, title: "CTA Btn 2 Label", defaultValue: "Talk to an Architect" },
  ctaBtn2Href: { type: ControlType.String, title: "CTA Btn 2 Href", defaultValue: "architecture.html" },
  ctaFootnote1Label: { type: ControlType.String, title: "CTA Footnote 1 Label", defaultValue: "Download Architecture Brief" },
  ctaFootnote1Href: { type: ControlType.String, title: "CTA Footnote 1 Href", defaultValue: "downloads.html" },
  ctaFootnote2Label: { type: ControlType.String, title: "CTA Footnote 2 Label", defaultValue: "AWS Marketplace" },
  ctaFootnote2Href: { type: ControlType.String, title: "CTA Footnote 2 Href", defaultValue: "https://aws.amazon.com/marketplace" },

  // Meta
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/pii-protection-vs-enterprise-confidentiality-control" },
  pageTitle: { type: ControlType.String, title: "Page Title", defaultValue: "PII Protection vs Enterprise Confidentiality Control | LLM Capsule" },
  pageDescription: { type: ControlType.String, title: "Page Description", displayTextArea: true, defaultValue: "PII protection covers personal data only. Enterprise confidentiality control protects trade secrets, deal terms, and strategic data for AI." },
})
