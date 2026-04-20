import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

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
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",       "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources",  "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Comparison", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "Structure-Preserving Processing vs Flat Masking", "item": "https://llmcapsule.ai/resources/learn/structure-preserving-processing-vs-flat-masking" },
  ],
})

const JSONLD_ARTICLE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "name": "Structure-Preserving Processing vs Flat Masking",
  "description": "Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.",
  "url": "https://llmcapsule.ai/resources/learn/structure-preserving-processing-vs-flat-masking",
  "publisher": {
    "@type": "Organization",
    "name": "LLM Capsule",
    "url": "https://llmcapsule.ai/",
  },
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 3 — Overview
  overviewBody?: string

  // Section 4 — How Flat Masking Works
  flatMaskingBody?: string

  // Section 5 — Limitations (bullets)
  limitBullet1?: string
  limitBullet2?: string
  limitBullet3?: string
  limitBullet4?: string

  // Section 6 — How LLM Capsule Differs
  capsuleDifferBody?: string
  capsuleDifferBanner?: string

  // Section 8 — Enterprise Workflow Example
  exampleCardTitle?: string
  exampleCardBody1?: string
  exampleCardBody2?: string

  // Section 9 — FAQ
  faqQ1?: string
  faqA1?: string

  // CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function StructurePreservingProcessingVsFlatMasking({
  heroTitle = "Structure-Preserving Processing vs Flat Masking",
  heroDescription = "Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.",

  overviewBody = "Flat masking and structure-preserving processing both aim to protect sensitive data before AI processing. They differ fundamentally in how they handle document structure, entity relationships, and semantic context — and this difference determines whether AI outputs are usable.",

  flatMaskingBody = "Flat masking scans documents for sensitive patterns and replaces each match with a generic token. The replacement is uniform — every name becomes [NAME], every number becomes [NUMBER], every date becomes [DATE]. The masking engine treats each sensitive value independently, without considering its role in the document's structure.",

  limitBullet1 = "Entity collapse. In a multi-party contract, all party names become [NAME]. AI cannot distinguish acquirer from target, lender from borrower, plaintiff from defendant.",
  limitBullet2 = "Table destruction. Column headers masked as [FIELD] and cell values masked as [VALUE] eliminate the schema information AI needs for accurate extraction.",
  limitBullet3 = "Cross-reference breakage. When a document references \"see Section 3.2 regarding [NAME]'s obligations,\" flat masking removes the entity link that gives the reference meaning.",
  limitBullet4 = "Inconsistent replacement. The same entity may receive different tokens in different document locations, breaking AI's ability to track entities across sections.",

  capsuleDifferBody = "Structure-preserving processing maintains document integrity during data protection. Entity consistency is enforced across the entire document. Table structures, cross-references, and semantic relationships are preserved. AI receives a structurally complete document that supports accurate processing.",
  capsuleDifferBanner = "AI results are automatically restored locally with original enterprise data. LLM Capsule's AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.",

  exampleCardTitle = "Multi-Party Financial Analysis",
  exampleCardBody1 = "An investment bank analyzes term sheets involving three parties — lead investor, co-investor, and target company. Each term sheet contains overlapping entity names in different roles.",
  exampleCardBody2 = "Flat masking turns all three parties into [NAME], making it impossible for AI to attribute terms to the correct party. Structure-preserving processing assigns consistent, distinct representations to each party, enabling accurate extraction of party-specific terms. Restoration restores real party names in the analysis output.",

  faqQ1 = "What is the main difference between flat masking and structure-preserving processing?",
  faqA1 = "Flat masking treats every sensitive value independently, collapsing entity relationships and document structure. Structure-preserving processing maintains entity consistency, table schemas, and semantic relationships throughout the document.",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {

  const [faqOpen, setFaqOpen] = useState(true)

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
        .spp-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .spp-root a { text-decoration: none; color: inherit; }
        .spp-root img { max-width: 100%; display: block; }
        .spp-root p, .spp-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .spp-root h1, .spp-root h2, .spp-root h3 { text-wrap: balance; }

        /* ── Container Query wrapper ─────────────────────────────── */
        .spp-inner { width: 100%; container-type: inline-size; }

        /* ── Article Container (1080px) ───────────────────────────── */
        .spp-article-container {
          width: 100%; max-width: 1080px; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .spp-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .spp-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .spp-article-container { padding: 0 120px; max-width: 1440px; } }
        

        /* ── Full-width container ────────────────────────────────── */
        .spp-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .spp-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .spp-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .spp-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Buttons ─────────────────────────────────────────────── */
        .spp-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .spp-btn--sm { padding: 8px 16px; font-size: 14px; }
        .spp-btn--lg { padding: 16px 48px; font-size: 18px; }
        .spp-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .spp-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Breadcrumb ──────────────────────────────────────────── */
        .spp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .spp-breadcrumb__link {
          font-size: 14px; color: ${P.brandSecondary};
          font-weight: 500; transition: color 0.15s;
        }
        .spp-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .spp-breadcrumb__sep { font-size: 14px; color: ${P.textTertiary}; }
        .spp-breadcrumb__current { font-size: 14px; color: ${P.textTertiary}; }

        /* ── Section: Hero ───────────────────────────────────────── */
        .spp-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .spp-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .spp-article-hero__title { font-size: 36px; } }
        @container (min-width: 1024px) { .spp-article-hero__title { font-size: 44px; } }
        @container (min-width: 1440px) { .spp-article-hero__title { font-size: 52px; } }
        .spp-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }

        /* ── Text utilities ──────────────────────────────────────── */
        .spp-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .spp-text--brand   { color: ${P.brandSecondary}; }

        /* ── Section: Article Body ───────────────────────────────── */
        .spp-section--article-body {
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .spp-section--article-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .spp-section--article-body { padding: 60px 0; } }

        /* ── Article Section Header ──────────────────────────────── */
        .spp-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .spp-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .spp-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .spp-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .spp-article-section-header h2 { font-size: 28px; } }

        /* ── Body Paragraph ──────────────────────────────────────── */
        .spp-body-paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .spp-body-paragraph:last-child { margin-bottom: 0; }
        .spp-body-paragraph--strong { font-weight: 500; }

        /* ── Bullet List ─────────────────────────────────────────── */
        .spp-bullet {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .spp-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .spp-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px; display: flex; align-items: center; justify-content: center;
        }
        .spp-bullet--dot .spp-bullet__icon::before {
          content: "•"; color: ${P.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Banner ──────────────────────────────────────────────── */
        .spp-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px; line-height: 1.7;
          word-break: keep-all; overflow-wrap: break-word;
          margin-top: 16px;
        }
        .spp-banner p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }

        /* ── Table ───────────────────────────────────────────────── */
        .spp-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          margin: 16px 0;
        }
        .spp-table {
          width: 100%; border-collapse: collapse;
          font-size: 14px;
        }
        .spp-table thead { background-color: ${P.neutral025}; }
        .spp-table th {
          padding: 14px 16px; text-align: left;
          font-weight: 600; font-size: 12px;
          color: ${P.textPrimary};
          border-bottom: 2px solid ${P.borderDefault};
        }
        .spp-table th.spp-table__th--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
        }
        .spp-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textSecondary}; vertical-align: top;
        }
        .spp-table td.spp-table__td--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
          font-weight: 500;
        }
        .spp-table__check { color: ${P.success}; font-weight: 600; }
        .spp-table__cross { color: ${P.error};   font-weight: 600; }

        /* ── Card ────────────────────────────────────────────────── */
        .spp-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column; gap: 12px;
        }
        @container (min-width: 1440px) { .spp-card { padding: 32px; } }
        .spp-card__title {
          font-size: 16px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }
        .spp-card p {
          font-size: 16px; color: ${P.textSecondary}; line-height: 1.7;
        }

        /* ── Accordion ───────────────────────────────────────────── */
        .spp-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .spp-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden; transition: background-color 0.2s;
        }
        .spp-ac-card:hover { background-color: ${P.neutral025}; }
        .spp-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .spp-ac-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px; font-weight: 500;
          line-height: 1.2; color: ${P.textPrimary};
        }
        .spp-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; cursor: pointer;
        }
        .spp-ac-card__toggle-icon {
          width: 12px; height: 12px; position: relative; flex-shrink: 0;
        }
        .spp-ac-card__toggle-icon::before,
        .spp-ac-card__toggle-icon::after {
          content: ''; position: absolute;
          background-color: ${P.textTertiary}; border-radius: 1px;
        }
        .spp-ac-card__toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .spp-ac-card__toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1; transition: opacity 0.2s;
        }
        .spp-ac-card__toggle-icon--open::after { opacity: 0; }
        .spp-ac-card__body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7;
        }
        .spp-ac-card__body p + p { margin-top: 12px; }

        /* ── Dark Card ───────────────────────────────────────────── */
        .spp-card--dark {
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
        .spp-card--dark:hover { background-color: ${P.neutral800}; }
        .spp-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .spp-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }

        /* ── Card Grid ───────────────────────────────────────────── */
        .spp-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .spp-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        /* ── Section Title Icon ──────────────────────────────────── */
        .spp-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .spp-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .spp-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Icon ────────────────────────────────────────────────── */
        .spp-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── CTA Band ────────────────────────────────────────────── */
        .spp-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover; background-position: center;
        }
        @container (min-width: 768px)  { .spp-cta-band { padding: 100px 32px; } }
        @container (max-width: 767px)  { .spp-cta-band { background-image: none; } }
        @container (min-width: 1440px) { .spp-cta-band { padding: 120px 120px; } }
        .spp-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .spp-cta-band > * { position: relative; z-index: 1; }
        .spp-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .spp-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) { .spp-cta-band__inner { max-width: 1080px; } }
        .spp-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .spp-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .spp-cta-band__title { font-size: 50px; } }
        .spp-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .spp-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        .spp-cta-band__actions .spp-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .spp-cta-band__actions .spp-btn:hover { background-color: ${P.white}; }
        .spp-cta-band__footnote {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;
          margin-top: 8px;
        }
        .spp-cta-band__footnote a {
          font-size: 14px; color: rgba(255,255,255,0.7); transition: color 0.2s;
        }
        .spp-cta-band__footnote a:hover { color: ${P.white}; }
      `}</style>

      <div className="spp-root">
        <div className="spp-inner">
          <main>

            {/* ── Section 1: Hero ──────────────────────────────────────── */}
            <section id="section-hero" className="spp-section--hero">
              <div className="spp-article-container">
                <nav className="spp-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="spp-breadcrumb__link">Home</a>
                  <span className="spp-breadcrumb__sep">/</span>
                  <a href="/resources" className="spp-breadcrumb__link">Resources</a>
                  <span className="spp-breadcrumb__sep">/</span>
                  <a href="/resources/learn" className="spp-breadcrumb__link">Learn</a>
                  <span className="spp-breadcrumb__sep">/</span>
                  <span className="spp-breadcrumb__current">Structure-Preserving Processing vs Flat Masking</span>
                </nav>
                <h1 className="spp-article-hero__title">{heroTitle}</h1>
                <p className="spp-article-hero__description">{heroDescription}</p>
              </div>
            </section>

            {/* ── Section 3: Overview ──────────────────────────────────── */}
            <section id="section-3" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>Overview</h2>
                </div>
                <p className="spp-body-paragraph">{overviewBody}</p>
              </div>
            </section>

            {/* ── Section 4: How Flat Masking Works ───────────────────── */}
            <section id="section-4" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>How Flat Masking Works</h2>
                </div>
                <p className="spp-body-paragraph">{flatMaskingBody}</p>
              </div>
            </section>

            {/* ── Section 5: Limitations ───────────────────────────────── */}
            <section id="section-5" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>Limitations</h2>
                </div>
                <ul className="spp-bullet spp-bullet--dot">
                  <li className="spp-bullet__item">
                    <span className="spp-bullet__icon" />
                    <span>{limitBullet1}</span>
                  </li>
                  <li className="spp-bullet__item">
                    <span className="spp-bullet__icon" />
                    <span>{limitBullet2}</span>
                  </li>
                  <li className="spp-bullet__item">
                    <span className="spp-bullet__icon" />
                    <span>{limitBullet3}</span>
                  </li>
                  <li className="spp-bullet__item">
                    <span className="spp-bullet__icon" />
                    <span>{limitBullet4}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ── Section 6: How LLM Capsule Differs ──────────────────── */}
            <section id="section-6" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>How <span className="spp-text--product">LLM Capsule</span> Differs</h2>
                </div>
                <p className="spp-body-paragraph">{capsuleDifferBody}</p>
                <div className="spp-banner">
                  <p>
                    <strong>AI results are automatically restored locally with original enterprise data.</strong>{" "}
                    <span className="spp-text--product">LLM Capsule</span>'s AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 7: Comparison Table ──────────────────────────── */}
            <section id="section-7" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>Comparison</h2>
                </div>
                <div className="spp-table-wrap">
                  <table className="spp-table">
                    <thead>
                      <tr>
                        <th>Capability</th>
                        <th>Flat Masking</th>
                        <th className="spp-table__th--highlight">
                          <span className="spp-text--product">LLM Capsule</span> (AI Enablement Data Layer)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Entity handling</td>
                        <td>All entities → same token</td>
                        <td className="spp-table__td--highlight">Consistent per-entity mapping</td>
                      </tr>
                      <tr>
                        <td>Table structures</td>
                        <td>Destroyed</td>
                        <td className="spp-table__td--highlight">Preserved</td>
                      </tr>
                      <tr>
                        <td>Cross-references</td>
                        <td>Broken</td>
                        <td className="spp-table__td--highlight">Maintained</td>
                      </tr>
                      <tr>
                        <td>Multi-document consistency</td>
                        <td><span className="spp-table__cross">✗</span></td>
                        <td className="spp-table__td--highlight"><span className="spp-table__check">✓</span></td>
                      </tr>
                      <tr>
                        <td>AI output accuracy</td>
                        <td>Degraded</td>
                        <td className="spp-table__td--highlight">High fidelity</td>
                      </tr>
                      <tr>
                        <td>Restoration support</td>
                        <td><span className="spp-table__cross">✗</span></td>
                        <td className="spp-table__td--highlight"><span className="spp-table__check">✓</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Section 8: Enterprise Workflow Example ───────────────── */}
            <section id="section-8" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>Enterprise Workflow Example</h2>
                </div>
                <div className="spp-card">
                  <h4 className="spp-card__title">{exampleCardTitle}</h4>
                  <p>{exampleCardBody1}</p>
                  <p>{exampleCardBody2}</p>
                </div>
              </div>
            </section>

            {/* ── Section 9: FAQ ───────────────────────────────────────── */}
            <section id="section-9" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-article-section-header">
                  <h2>FAQ</h2>
                </div>
                <div className="spp-ac-list">
                  <div className="spp-ac-card">
                    <div
                      className="spp-ac-card__header"
                      onClick={() => setFaqOpen(!faqOpen)}
                    >
                      <span className="spp-ac-card__title">{faqQ1}</span>
                      <span className="spp-ac-card__toggle">
                        <span className={`spp-ac-card__toggle-icon${faqOpen ? " spp-ac-card__toggle-icon--open" : ""}`} />
                      </span>
                    </div>
                    {faqOpen && (
                      <div className="spp-ac-card__body">
                        <p>{faqA1}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 10: Related Pages ────────────────────────────── */}
            <section id="section-10" className="spp-section--article-body">
              <div className="spp-article-container">
                <div className="spp-section-title-icon">
                  <span className="spp-section-title-icon__icon">
                    <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="spp-section-title-icon__text">Related</span>
                </div>
                <div className="spp-card-grid spp-card-grid--2col">
                  <a href="/product" className="spp-card--dark">
                    <span className="spp-card--dark__icon">
                      <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="spp-card--dark__title">Product Overview</span>
                  </a>
                  <a href="/architecture" className="spp-card--dark">
                    <span className="spp-card--dark__icon">
                      <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="spp-card--dark__title">Architecture</span>
                  </a>
                  <a href="/trust" className="spp-card--dark">
                    <span className="spp-card--dark__icon">
                      <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="spp-card--dark__title">Trust &amp; Compliance</span>
                  </a>
                  <a href="/request-a-demo" className="spp-card--dark">
                    <span className="spp-card--dark__icon">
                      <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="spp-card--dark__title">Request a Demo</span>
                  </a>
                  <a href="/resources/learn" className="spp-card--dark">
                    <span className="spp-card--dark__icon">
                      <svg className="spp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </span>
                    <span className="spp-card--dark__title">Learn Hub</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 11: CTA Band ──────────────────────────────────── */}
            <section id="section-cta" className="spp-cta-band">
              <div className="spp-cta-band__inner">
                <h2 className="spp-cta-band__title">
                  See how <span className="spp-text--product">LLM Capsule</span> works with your data
                </h2>
                <p className="spp-cta-band__description">{ctaDescription}</p>
                <div className="spp-cta-band__actions">
                  <a href={ctaBtn1Href} className="spp-btn spp-btn--lg">{ctaBtn1Label}</a>
                </div>
                <div className="spp-cta-band__footnote">
                  <a href={ctaFootnote2Href} target="_blank" rel="noopener">{ctaFootnote2Label}</a>
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
addPropertyControls(StructurePreservingProcessingVsFlatMasking, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Structure-Preserving Processing vs Flat Masking",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.",
    displayTextArea: true,
  },
  overviewBody: {
    type: ControlType.String,
    title: "Overview Body",
    defaultValue: "Flat masking and structure-preserving processing both aim to protect sensitive data before AI processing. They differ fundamentally in how they handle document structure, entity relationships, and semantic context — and this difference determines whether AI outputs are usable.",
    displayTextArea: true,
  },
  flatMaskingBody: {
    type: ControlType.String,
    title: "Flat Masking Body",
    defaultValue: "Flat masking scans documents for sensitive patterns and replaces each match with a generic token. The replacement is uniform — every name becomes [NAME], every number becomes [NUMBER], every date becomes [DATE]. The masking engine treats each sensitive value independently, without considering its role in the document's structure.",
    displayTextArea: true,
  },
  limitBullet1: {
    type: ControlType.String,
    title: "Limitation 1",
    defaultValue: "Entity collapse. In a multi-party contract, all party names become [NAME]. AI cannot distinguish acquirer from target, lender from borrower, plaintiff from defendant.",
    displayTextArea: true,
  },
  limitBullet2: {
    type: ControlType.String,
    title: "Limitation 2",
    defaultValue: "Table destruction. Column headers masked as [FIELD] and cell values masked as [VALUE] eliminate the schema information AI needs for accurate extraction.",
    displayTextArea: true,
  },
  limitBullet3: {
    type: ControlType.String,
    title: "Limitation 3",
    defaultValue: "Cross-reference breakage. When a document references \"see Section 3.2 regarding [NAME]'s obligations,\" flat masking removes the entity link that gives the reference meaning.",
    displayTextArea: true,
  },
  limitBullet4: {
    type: ControlType.String,
    title: "Limitation 4",
    defaultValue: "Inconsistent replacement. The same entity may receive different tokens in different document locations, breaking AI's ability to track entities across sections.",
    displayTextArea: true,
  },
  capsuleDifferBody: {
    type: ControlType.String,
    title: "LLM Capsule Differs Body",
    defaultValue: "Structure-preserving processing maintains document integrity during data protection. Entity consistency is enforced across the entire document. Table structures, cross-references, and semantic relationships are preserved. AI receives a structurally complete document that supports accurate processing.",
    displayTextArea: true,
  },
  capsuleDifferBanner: {
    type: ControlType.String,
    title: "LLM Capsule Differs Banner",
    defaultValue: "AI results are automatically restored locally with original enterprise data. LLM Capsule's AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.",
    displayTextArea: true,
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "Multi-Party Financial Analysis",
  },
  exampleCardBody1: {
    type: ControlType.String,
    title: "Example Card Body 1",
    defaultValue: "An investment bank analyzes term sheets involving three parties — lead investor, co-investor, and target company. Each term sheet contains overlapping entity names in different roles.",
    displayTextArea: true,
  },
  exampleCardBody2: {
    type: ControlType.String,
    title: "Example Card Body 2",
    defaultValue: "Flat masking turns all three parties into [NAME], making it impossible for AI to attribute terms to the correct party. Structure-preserving processing assigns consistent, distinct representations to each party, enabling accurate extraction of party-specific terms. Restoration restores real party names in the analysis output.",
    displayTextArea: true,
  },
  faqQ1: {
    type: ControlType.String,
    title: "FAQ Q1",
    defaultValue: "What is the main difference between flat masking and structure-preserving processing?",
    displayTextArea: true,
  },
  faqA1: {
    type: ControlType.String,
    title: "FAQ A1",
    defaultValue: "Flat masking treats every sensitive value independently, collapsing entity relationships and document structure. Structure-preserving processing maintains entity consistency, table schemas, and semantic relationships throughout the document.",
    displayTextArea: true,
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
  ctaFootnote2Label: {
    type: ControlType.String,
    title: "CTA Footnote 2 Label",
    defaultValue: "AWS Marketplace",
  },
  ctaFootnote2Href: {
    type: ControlType.String,
    title: "CTA Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
})
