import { useState } from "react"
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
  gradientViolet: `url('${IMAGE_BASE}/bg-gradient-violet-teal.png')`,
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn",     "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "Structure-Preserving Document Processing for Enterprise AI | LLM Capsule", "item": "https://llmcapsule.ai/resources/learn/structure-preserving-document-processing" },
  ],
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is structure-preserving processing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining document layout, entity relationships, table structures, and semantic context so AI models can process the document accurately.",
      },
    },
  ],
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Breadcrumb
  breadcrumbHome?: string
  breadcrumbResources?: string
  breadcrumbLearn?: string

  // Problem
  problemParagraph1?: string
  problemParagraph2?: string

  // Definition
  definitionLabel?: string
  definitionText?: string

  // Explanation
  explanationIntro?: string
  explanationBullet1?: string
  explanationBullet2?: string
  explanationBullet3?: string
  explanationBullet4?: string

  // Enterprise Example
  exampleCardTitle?: string
  exampleCardParagraph1?: string
  exampleCardParagraph2?: string

  // FAQ
  faqTitle?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string

  // Related Links
  relatedCard1Label?: string
  relatedCard1Href?: string
  relatedCard2Label?: string
  relatedCard2Href?: string
  relatedCard3Label?: string
  relatedCard3Href?: string
  relatedCard4Label?: string
  relatedCard4Href?: string
  relatedCard5Label?: string
  relatedCard5Href?: string

  // CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaFootnoteLink2Label?: string
  ctaFootnoteLink2Href?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function StructurePreservingDocumentProcessing({
  heroTitle = "Structure-Preserving Document Processing",
  heroDescription = "Why maintaining document structure during data protection is critical for accurate AI outputs in enterprise workflows.",

  breadcrumbHome = "Home",
  breadcrumbResources = "Resources",
  breadcrumbLearn = "Learn",

  problemParagraph1 = "Enterprise documents are not flat text. They contain tables, nested sections, cross-references, entity relationships, and formatting that carries semantic meaning. When flat masking tools process these documents, they treat every sensitive value identically — replacing it with a generic token regardless of its structural role.",
  problemParagraph2 = "A customer name in a table header serves a different function than the same name in a paragraph. A date in a contract preamble has different significance than a date in a payment schedule. Flat masking collapses these distinctions, degrading AI output quality.",

  definitionLabel = "DEFINITION — Structure-Preserving Processing",
  definitionText = "Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining the document's layout, entity relationships, table structures, and semantic context. It ensures AI models receive structurally intact documents that support accurate summarization, extraction, and analysis.",

  explanationIntro = "Structure-preserving processing operates at multiple document layers:",
  explanationBullet1 = "Layout preservation. Table structures, column headers, row relationships, and nested sections are maintained. AI models can accurately extract tabular data because the schema remains intact.",
  explanationBullet2 = "Entity consistency. When the same entity appears multiple times in a document, all instances are mapped to the same replacement. AI models can track entity references across sections — \"the Borrower\" in clause 1 refers to the same encapsulated entity in clause 7.",
  explanationBullet3 = "Semantic context. Context-aware data control distinguishes between sensitive data that must be protected and contextual information that AI needs for comprehension. Job titles, section headers, and document type indicators remain readable.",
  explanationBullet4 = "Cross-document consistency. When processing document sets — such as a contract and its amendments — entity mappings remain consistent across files, enabling AI to perform accurate cross-document analysis.",

  exampleCardTitle = "Financial Statement Analysis",
  exampleCardParagraph1 = "An audit firm needs AI to compare quarterly financial statements across 15 portfolio companies. Each statement contains tabular data with company names, executive names, account numbers, and financial figures.",
  exampleCardParagraph2 = "Structure-preserving processing maintains all table structures and entity relationships. AI performs comparative analysis across the protected statements. Local restoration restores the real company data, producing analyst-ready comparison reports.",

  faqTitle = "FAQ",
  faq1Question = "What is structure-preserving processing?",
  faq1Answer = "Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining document layout, entity relationships, table structures, and semantic context so AI models can process the document accurately.",
  faq2Question = "How does it differ from flat masking?",
  faq2Answer = "Flat masking treats every sensitive value identically, replacing it with a generic token regardless of context. Structure-preserving processing maintains semantic relationships, entity consistency, and document layout during protection.",

  relatedCard1Label = "Product Overview",
  relatedCard1Href = "/product",
  relatedCard2Label = "Architecture",
  relatedCard2Href = "/architecture",
  relatedCard3Label = "Trust & Compliance",
  relatedCard3Href = "/trust",
  relatedCard4Label = "Request a Demo",
  relatedCard4Href = "/request-a-demo",
  relatedCard5Label = "Structure-Preserving vs Flat Masking",
  relatedCard5Href = "/resources/comparison/structure-preserving-processing-vs-flat-masking",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaFootnoteLink2Label = "AWS Marketplace",
  ctaFootnoteLink2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  // ── FAQ accordion state ──────────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index))
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ───────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .spdp-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .spdp-root a { text-decoration: none; color: inherit; }
        .spdp-root img { max-width: 100%; display: block; }
        .spdp-root p, .spdp-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .spdp-root h1, .spdp-root h2, .spdp-root h3 { text-wrap: balance; }

        /* ── Container Query wrapper ─────────────────────────────── */
        .spdp-inner { width: 100%; container-type: inline-size; }

        /* ── Buttons ─────────────────────────────────────────────── */
        .spdp-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .spdp-btn--sm { padding: 8px 16px; font-size: 14px; }
        .spdp-btn--lg { padding: 16px 48px; font-size: 18px; }
        .spdp-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .spdp-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Article Container (1080px max-width) ─────────────────── */
        .spdp-article-container {
          width: 100%; max-width: 1080px; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .spdp-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .spdp-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .spdp-article-container { padding: 0 120px; max-width: 1440px; } }
        

        /* ── Breadcrumb ──────────────────────────────────────────── */
        .spdp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .spdp-breadcrumb__link {
          font-size: 14px; color: ${P.brandSecondary};
          font-weight: 500; transition: color 0.15s;
        }
        .spdp-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .spdp-breadcrumb__sep { font-size: 14px; color: ${P.textTertiary}; }
        .spdp-breadcrumb__current { font-size: 14px; color: ${P.textTertiary}; }

        /* ── Hero Section ────────────────────────────────────────── */
        .spdp-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .spdp-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .spdp-article-hero__title { font-size: 36px; } }
        @container (min-width: 1024px) { .spdp-article-hero__title { font-size: 44px; } }
        @container (min-width: 1440px) { .spdp-article-hero__title { font-size: 52px; } }
        .spdp-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }
        .spdp-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .spdp-text--brand { color: ${P.brandSecondary}; }

        /* ── Article Body Section ────────────────────────────────── */
        .spdp-section--article-body {
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .spdp-section--article-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .spdp-section--article-body { padding: 60px 0; } }

        /* ── Article Section Header ──────────────────────────────── */
        .spdp-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .spdp-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .spdp-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .spdp-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .spdp-article-section-header h2 { font-size: 28px; } }

        /* ── Article Body Paragraphs ─────────────────────────────── */
        .spdp-body-paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .spdp-body-paragraph:last-child { margin-bottom: 0; }
        .spdp-body-paragraph--strong { font-weight: 500; }

        /* ── Banner ──────────────────────────────────────────────── */
        .spdp-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px; line-height: 1.7;
          text-align: center;
          word-break: keep-all; overflow-wrap: break-word;
        }
        .spdp-banner__label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px; text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${P.textTertiary};
          margin-bottom: 8px; display: block;
        }
        .spdp-banner p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }

        /* ── Bullet List ─────────────────────────────────────────── */
        .spdp-bullet {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .spdp-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .spdp-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px; display: flex; align-items: center; justify-content: center;
        }
        .spdp-bullet--dot .spdp-bullet__icon::before {
          content: "•"; color: ${P.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Card ────────────────────────────────────────────────── */
        .spdp-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .spdp-card { padding: 32px; } }
        .spdp-card__divider {
          border: none; border-top: 1px solid ${P.borderDefault};
          margin: 16px 0;
        }
        .spdp-article-card__title {
          font-size: 18px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
          margin-bottom: 12px;
        }

        /* ── Accordion (FAQ) ─────────────────────────────────────── */
        .spdp-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .spdp-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden;
          transition: background-color 0.2s;
        }
        .spdp-ac-card:hover { background-color: ${P.neutral025}; }
        .spdp-ac-card__header {
          display: grid; grid-template-columns: 1fr auto;
          align-items: center; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .spdp-ac-card__title {
          font-family: "DM Sans", sans-serif; font-size: 18px;
          font-weight: 500; line-height: 1.2;
          color: ${P.textPrimary};
          word-break: keep-all; overflow-wrap: break-word;
        }
        .spdp-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; cursor: pointer;
          transition: border-color 0.15s, background-color 0.15s;
        }
        .spdp-ac-card__toggle:hover {
          border-color: ${P.borderStrong};
          background-color: ${P.surfaceMid};
        }
        .spdp-ac-card__toggle-icon {
          width: 12px; height: 12px; position: relative; flex-shrink: 0;
        }
        .spdp-ac-card__toggle-icon::before,
        .spdp-ac-card__toggle-icon::after {
          content: ''; position: absolute;
          background-color: ${P.textTertiary};
          border-radius: 1px; transition: opacity 0.2s;
        }
        .spdp-ac-card__toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .spdp-ac-card__toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          opacity: 1;
        }
        .spdp-ac-card--open .spdp-ac-card__toggle-icon::after { opacity: 0; }
        .spdp-ac-card--open .spdp-ac-card__toggle-icon::before { background-color: ${P.textSecondary}; }
        .spdp-ac-card__body {
          padding: 24px; border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
        }
        .spdp-ac-card__body-text {
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7;
        }

        /* ── Section Title Icon ──────────────────────────────────── */
        .spdp-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .spdp-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .spdp-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Card Grid ───────────────────────────────────────────── */
        .spdp-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .spdp-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark Card ───────────────────────────────────────────── */
        .spdp-card--dark {
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
        .spdp-card--dark:hover { background-color: ${P.neutral800}; }
        .spdp-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .spdp-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }
        .spdp-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── CTA Band (full-width, no max-width on section) ──────── */
        .spdp-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-violet-teal.png');
          background-size: cover; background-position: center;
        }
        @container (min-width: 768px)  { .spdp-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .spdp-cta-band { padding: 120px 120px; } }
        .spdp-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .spdp-cta-band > * { position: relative; z-index: 1; }
        .spdp-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .spdp-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .spdp-cta-band__inner { max-width: 1080px; } }
        .spdp-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .spdp-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .spdp-cta-band__title { font-size: 50px; } }
        .spdp-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .spdp-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        .spdp-cta-band__actions .spdp-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .spdp-cta-band__actions .spdp-btn:hover { background-color: ${P.white}; }
        .spdp-cta-band__footnote {
          font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 8px;
        }
        .spdp-cta-band__footnote-link {
          color: rgba(255,255,255,0.7); transition: color 0.15s;
        }
        .spdp-cta-band__footnote-link:hover { color: ${P.white}; }
      `}</style>

      <div className="spdp-root">
        <div className="spdp-inner">
          <main>

            {/* ── Section 1: Hero ──────────────────────────────────────── */}
            <section id="section-hero" className="spdp-section--hero">
              <div className="spdp-article-container">
                <nav className="spdp-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="spdp-breadcrumb__link">{breadcrumbHome}</a>
                  <span className="spdp-breadcrumb__sep">/</span>
                  <a href="/resources" className="spdp-breadcrumb__link">{breadcrumbResources}</a>
                  <span className="spdp-breadcrumb__sep">/</span>
                  <a href="/resources/learn" className="spdp-breadcrumb__link">{breadcrumbLearn}</a>
                  <span className="spdp-breadcrumb__sep">/</span>
                  <span className="spdp-breadcrumb__current">{heroTitle}</span>
                </nav>
                <h1 className="spdp-article-hero__title">{heroTitle}</h1>
                <p className="spdp-article-hero__description">{heroDescription}</p>
              </div>
            </section>

            {/* ── Section 3: Problem ───────────────────────────────────── */}
            <section id="section-3" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-article-section-header">
                  <h2><span className="spdp-text--brand">Problem</span></h2>
                </div>
                <p className="spdp-body-paragraph">{problemParagraph1}</p>
                <p className="spdp-body-paragraph">{problemParagraph2}</p>
              </div>
            </section>

            {/* ── Section 4: Definition ────────────────────────────────── */}
            <section id="section-4" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-banner">
                  <span className="spdp-banner__label">{definitionLabel}</span>
                  <p>{definitionText}</p>
                </div>
              </div>
            </section>

            {/* ── Section 5: Explanation ───────────────────────────────── */}
            <section id="section-5" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-article-section-header">
                  <h2><span className="spdp-text--brand">Explanation</span></h2>
                </div>
                <p className="spdp-body-paragraph">{explanationIntro}</p>
                <ul className="spdp-bullet spdp-bullet--dot">
                  <li className="spdp-bullet__item">
                    <span className="spdp-bullet__icon" />
                    <span>
                      <strong>Layout preservation.</strong>{" "}
                      {explanationBullet1.replace("Layout preservation. ", "")}
                    </span>
                  </li>
                  <li className="spdp-bullet__item">
                    <span className="spdp-bullet__icon" />
                    <span>
                      <strong>Entity consistency.</strong>{" "}
                      {explanationBullet2.replace("Entity consistency. ", "")}
                    </span>
                  </li>
                  <li className="spdp-bullet__item">
                    <span className="spdp-bullet__icon" />
                    <span>
                      <strong>Semantic context.</strong>{" "}
                      {explanationBullet3.replace("Semantic context. ", "")}
                    </span>
                  </li>
                  <li className="spdp-bullet__item">
                    <span className="spdp-bullet__icon" />
                    <span>
                      <strong>Cross-document consistency.</strong>{" "}
                      {explanationBullet4.replace("Cross-document consistency. ", "")}
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ── Section 6: Enterprise Example ───────────────────────── */}
            <section id="section-6" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-article-section-header">
                  <h2><span className="spdp-text--brand">Enterprise Example</span></h2>
                </div>
                <div className="spdp-card">
                  <h3 className="spdp-article-card__title">{exampleCardTitle}</h3>
                  <p className="spdp-body-paragraph">{exampleCardParagraph1}</p>
                  <hr className="spdp-card__divider" />
                  <p className="spdp-body-paragraph spdp-body-paragraph--strong">{exampleCardParagraph2}</p>
                </div>
              </div>
            </section>

            {/* ── Section 7: FAQ ───────────────────────────────────────── */}
            <section id="section-7" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-article-section-header">
                  <h2>{faqTitle}</h2>
                </div>
                <div className="spdp-ac-list" role="list">

                  {/* FAQ Item 1 */}
                  <article
                    className={`spdp-ac-card${openFaq === 0 ? " spdp-ac-card--open" : ""}`}
                    role="listitem"
                  >
                    <div
                      className="spdp-ac-card__header"
                      onClick={() => toggleFaq(0)}
                      aria-expanded={openFaq === 0}
                      tabIndex={0}
                      role="button"
                      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFaq(0); } }}
                    >
                      <span className="spdp-ac-card__title">{faq1Question}</span>
                      <span className="spdp-ac-card__toggle" aria-hidden="true">
                        <span className="spdp-ac-card__toggle-icon" />
                      </span>
                    </div>
                    {openFaq === 0 && (
                      <div className="spdp-ac-card__body" role="region">
                        <p className="spdp-ac-card__body-text">{faq1Answer}</p>
                      </div>
                    )}
                  </article>

                  {/* FAQ Item 2 */}
                  <article
                    className={`spdp-ac-card${openFaq === 1 ? " spdp-ac-card--open" : ""}`}
                    role="listitem"
                  >
                    <div
                      className="spdp-ac-card__header"
                      onClick={() => toggleFaq(1)}
                      aria-expanded={openFaq === 1}
                      tabIndex={0}
                      role="button"
                      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFaq(1); } }}
                    >
                      <span className="spdp-ac-card__title">{faq2Question}</span>
                      <span className="spdp-ac-card__toggle" aria-hidden="true">
                        <span className="spdp-ac-card__toggle-icon" />
                      </span>
                    </div>
                    {openFaq === 1 && (
                      <div className="spdp-ac-card__body" role="region">
                        <p className="spdp-ac-card__body-text">{faq2Answer}</p>
                      </div>
                    )}
                  </article>

                </div>
              </div>
            </section>

            {/* ── Section 8: Related Links ─────────────────────────────── */}
            <section id="section-8" className="spdp-section--article-body">
              <div className="spdp-article-container">
                <div className="spdp-section-title-icon">
                  <span className="spdp-section-title-icon__icon">
                    <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="spdp-section-title-icon__text">Related</span>
                </div>

                <div className="spdp-card-grid spdp-card-grid--2col">
                  <a href={relatedCard1Href} className="spdp-card--dark">
                    <span className="spdp-card--dark__icon">
                      <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="spdp-card--dark__title">{relatedCard1Label}</span>
                  </a>

                  <a href={relatedCard2Href} className="spdp-card--dark">
                    <span className="spdp-card--dark__icon">
                      <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="spdp-card--dark__title">{relatedCard2Label}</span>
                  </a>

                  <a href={relatedCard3Href} className="spdp-card--dark">
                    <span className="spdp-card--dark__icon">
                      <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="spdp-card--dark__title">{relatedCard3Label}</span>
                  </a>

                  <a href={relatedCard4Href} className="spdp-card--dark">
                    <span className="spdp-card--dark__icon">
                      <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="spdp-card--dark__title">{relatedCard4Label}</span>
                  </a>

                  <a href={relatedCard5Href} className="spdp-card--dark">
                    <span className="spdp-card--dark__icon">
                      <svg className="spdp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                      </svg>
                    </span>
                    <span className="spdp-card--dark__title">{relatedCard5Label}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section CTA: CTA Band ────────────────────────────────── */}
            <section id="section-cta" className="spdp-cta-band">
              <div className="spdp-cta-band__inner">
                <h2 className="spdp-cta-band__title">
                  See how <span className="spdp-text--product">LLM Capsule</span> works with your data
                </h2>
                <p className="spdp-cta-band__description">{ctaDescription}</p>
                <div className="spdp-cta-band__actions">
                  <a href={ctaBtn1Href} className="spdp-btn spdp-btn--lg">{ctaBtn1Label}</a>
                </div>
                <p className="spdp-cta-band__footnote">
                  <a href={ctaFootnoteLink2Href} target="_blank" rel="noopener" className="spdp-cta-band__footnote-link">{ctaFootnoteLink2Label}</a>
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(StructurePreservingDocumentProcessing, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Structure-Preserving Document Processing",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Why maintaining document structure during data protection is critical for accurate AI outputs in enterprise workflows.",
    displayTextArea: true,
  },
  breadcrumbHome: {
    type: ControlType.String,
    title: "Breadcrumb: Home",
    defaultValue: "Home",
  },
  breadcrumbResources: {
    type: ControlType.String,
    title: "Breadcrumb: Resources",
    defaultValue: "Resources",
  },
  breadcrumbLearn: {
    type: ControlType.String,
    title: "Breadcrumb: Learn",
    defaultValue: "Learn",
  },
  problemParagraph1: {
    type: ControlType.String,
    title: "Problem Para 1",
    defaultValue: "Enterprise documents are not flat text. They contain tables, nested sections, cross-references, entity relationships, and formatting that carries semantic meaning. When flat masking tools process these documents, they treat every sensitive value identically — replacing it with a generic token regardless of its structural role.",
    displayTextArea: true,
  },
  problemParagraph2: {
    type: ControlType.String,
    title: "Problem Para 2",
    defaultValue: "A customer name in a table header serves a different function than the same name in a paragraph. A date in a contract preamble has different significance than a date in a payment schedule. Flat masking collapses these distinctions, degrading AI output quality.",
    displayTextArea: true,
  },
  definitionLabel: {
    type: ControlType.String,
    title: "Definition Label",
    defaultValue: "DEFINITION — Structure-Preserving Processing",
  },
  definitionText: {
    type: ControlType.String,
    title: "Definition Text",
    defaultValue: "Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining the document's layout, entity relationships, table structures, and semantic context. It ensures AI models receive structurally intact documents that support accurate summarization, extraction, and analysis.",
    displayTextArea: true,
  },
  explanationIntro: {
    type: ControlType.String,
    title: "Explanation Intro",
    defaultValue: "Structure-preserving processing operates at multiple document layers:",
  },
  explanationBullet1: {
    type: ControlType.String,
    title: "Explanation Bullet 1",
    defaultValue: "Layout preservation. Table structures, column headers, row relationships, and nested sections are maintained. AI models can accurately extract tabular data because the schema remains intact.",
    displayTextArea: true,
  },
  explanationBullet2: {
    type: ControlType.String,
    title: "Explanation Bullet 2",
    defaultValue: "Entity consistency. When the same entity appears multiple times in a document, all instances are mapped to the same replacement. AI models can track entity references across sections — \"the Borrower\" in clause 1 refers to the same encapsulated entity in clause 7.",
    displayTextArea: true,
  },
  explanationBullet3: {
    type: ControlType.String,
    title: "Explanation Bullet 3",
    defaultValue: "Semantic context. Context-aware data control distinguishes between sensitive data that must be protected and contextual information that AI needs for comprehension. Job titles, section headers, and document type indicators remain readable.",
    displayTextArea: true,
  },
  explanationBullet4: {
    type: ControlType.String,
    title: "Explanation Bullet 4",
    defaultValue: "Cross-document consistency. When processing document sets — such as a contract and its amendments — entity mappings remain consistent across files, enabling AI to perform accurate cross-document analysis.",
    displayTextArea: true,
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "Financial Statement Analysis",
  },
  exampleCardParagraph1: {
    type: ControlType.String,
    title: "Example Card Para 1",
    defaultValue: "An audit firm needs AI to compare quarterly financial statements across 15 portfolio companies. Each statement contains tabular data with company names, executive names, account numbers, and financial figures.",
    displayTextArea: true,
  },
  exampleCardParagraph2: {
    type: ControlType.String,
    title: "Example Card Para 2",
    defaultValue: "Structure-preserving processing maintains all table structures and entity relationships. AI performs comparative analysis across the protected statements. Local restoration restores the real company data, producing analyst-ready comparison reports.",
    displayTextArea: true,
  },
  faqTitle: {
    type: ControlType.String,
    title: "FAQ Title",
    defaultValue: "FAQ",
  },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is structure-preserving processing?",
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining document layout, entity relationships, table structures, and semantic context so AI models can process the document accurately.",
    displayTextArea: true,
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "How does it differ from flat masking?",
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Flat masking treats every sensitive value identically, replacing it with a generic token regardless of context. Structure-preserving processing maintains semantic relationships, entity consistency, and document layout during protection.",
    displayTextArea: true,
  },
  relatedCard1Label: {
    type: ControlType.String,
    title: "Related Card 1 Label",
    defaultValue: "Product Overview",
  },
  relatedCard1Href: {
    type: ControlType.String,
    title: "Related Card 1 URL",
    defaultValue: "/product",
  },
  relatedCard2Label: {
    type: ControlType.String,
    title: "Related Card 2 Label",
    defaultValue: "Architecture",
  },
  relatedCard2Href: {
    type: ControlType.String,
    title: "Related Card 2 URL",
    defaultValue: "/architecture",
  },
  relatedCard3Label: {
    type: ControlType.String,
    title: "Related Card 3 Label",
    defaultValue: "Trust & Compliance",
  },
  relatedCard3Href: {
    type: ControlType.String,
    title: "Related Card 3 URL",
    defaultValue: "/trust",
  },
  relatedCard4Label: {
    type: ControlType.String,
    title: "Related Card 4 Label",
    defaultValue: "Request a Demo",
  },
  relatedCard4Href: {
    type: ControlType.String,
    title: "Related Card 4 URL",
    defaultValue: "/request-a-demo",
  },
  relatedCard5Label: {
    type: ControlType.String,
    title: "Related Card 5 Label",
    defaultValue: "Structure-Preserving vs Flat Masking",
  },
  relatedCard5Href: {
    type: ControlType.String,
    title: "Related Card 5 URL",
    defaultValue: "/resources/comparison/structure-preserving-processing-vs-flat-masking",
  },
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
    defaultValue: "/request-a-demo",
  },
  ctaFootnoteLink2Label: {
    type: ControlType.String,
    title: "CTA Footnote Link 2 Label",
    defaultValue: "AWS Marketplace",
  },
  ctaFootnoteLink2Href: {
    type: ControlType.String,
    title: "CTA Footnote Link 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
