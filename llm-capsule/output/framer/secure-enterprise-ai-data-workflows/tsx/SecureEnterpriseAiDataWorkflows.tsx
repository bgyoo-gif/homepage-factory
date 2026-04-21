import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Palette ────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
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

// ─── JSON-LD ────────────────────────────────────────────────────────────────
const JSONLD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn",     "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "Secure Enterprise AI Data Workflows", "item": "https://llmcapsule.ai/resources/learn/secure-enterprise-ai-data-workflows" },
  ],
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you build a secure enterprise AI data workflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A secure enterprise AI data workflow encapsulates sensitive data locally before AI processing, preserves document structure for AI accuracy, and restores outputs through local restoration. This requires a data-layer protection approach, not just API-level filtering.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a restorable workflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A restorable workflow is an AI data processing pattern where sensitive data is replaced with reversible representations before AI processing. After processing, outputs are restored (restored) with original data locally, producing enterprise-ready results.",
      },
    },
  ],
})

// ─── Props ──────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Problem
  problemPara1?: string
  problemPara2?: string

  // Definition
  definitionTitle?: string
  definitionBody?: string

  // Explanation intro
  explanationIntro?: string
  explanationSub1Title?: string
  explanationSub1Body?: string
  explanationSub2Title?: string
  explanationSub2Body?: string
  explanationSub3Title?: string
  explanationSub3Body?: string
  explanationBannerText?: string

  // Enterprise Examples
  example1Title?: string
  example1Body?: string
  example2Title?: string
  example2Body?: string
  example3Title?: string
  example3Body?: string

  // FAQ
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string

  // CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── Accordion Item ─────────────────────────────────────────────────────────
function AcCard({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      style={{
        border: `1px solid ${P.borderDefault}`,
        borderRadius: 8,
        backgroundColor: P.surfaceWhite,
        overflow: "hidden",
        transition: "background-color 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: 24,
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 18, fontWeight: 500, lineHeight: 1.2, color: P.textPrimary }}>
          {question}
        </span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            border: `0.5px solid ${P.borderDefault}`,
            backgroundColor: P.surfaceLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              position: "relative",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            {/* horizontal bar */}
            <span style={{ position: "absolute", width: 10, height: 1.5, top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: P.textTertiary, borderRadius: 1 }} />
            {/* vertical bar (hidden when open) */}
            {!open && (
              <span style={{ position: "absolute", width: 1.5, height: 10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: P.textTertiary, borderRadius: 1 }} />
            )}
          </span>
        </span>
      </div>
      {open && (
        <div
          style={{
            padding: 24,
            borderTop: `1px solid ${P.borderDefault}`,
            backgroundColor: P.surfaceLight,
            fontSize: 14,
            color: P.textSecondary,
            lineHeight: 1.7,
          }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  )
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function SecureEnterpriseAiDataWorkflows({
  heroTitle = "Secure Enterprise AI Data Workflows",
  heroDescription = "Complete guide to enterprise AI data privacy — how to protect sensitive data throughout AI processing while producing usable, restorable enterprise outputs.",

  problemPara1 = "Enterprise AI adoption is blocked by a fundamental tension: AI delivers value by processing real data, but enterprise data governance prohibits sending sensitive information to external AI services. This creates a stalemate that affects every regulated industry — finance, healthcare, legal, government, and telecom.",
  problemPara2 = "The consequence is either AI projects using only sanitized, non-sensitive data (limiting value), or data teams building complex workarounds that introduce risk and compliance gaps. Neither approach scales.",

  definitionTitle = "Secure Enterprise AI Data Workflow",
  definitionBody = "A secure enterprise AI data workflow is an end-to-end data processing pattern that protects sensitive information at the data layer before AI processing, preserves document structure for AI accuracy, and restores enterprise context in outputs through local restoration. It enables enterprise AI adoption without sacrificing data privacy or AI output quality.",

  explanationIntro = "Building secure enterprise AI data workflows requires addressing protection at three distinct layers:",
  explanationSub1Title = "Data Layer Protection",
  explanationSub1Body = "Enterprise AI data privacy starts before data reaches any AI model. LLM Capsule applies context-aware data control at the document level — identifying and encapsulating sensitive elements based on configurable enterprise policies. This is fundamentally different from API gateway filtering, which only sees prompts, not the underlying data structures.",
  explanationSub2Title = "Processing Layer Integrity",
  explanationSub2Body = "Protected documents must retain enough structure for AI models to produce meaningful results. Structure-preserving processing ensures that tables, entity relationships, cross-references, and document hierarchies remain intact in the encapsulated representation. AI models process structurally complete documents, not fragmented masked text.",
  explanationSub3Title = "Output Layer Restoration",
  explanationSub3Body = "AI results are restored through local restoration. The locally stored mapping between original and encapsulated values is applied to AI outputs automatically. This produces enterprise-ready outputs — with real names, real amounts, real references — that integrate directly into business systems without manual post-processing.",
  explanationBannerText = "Enable AI. Protect data. Restore results. This is the operating principle of every enterprise AI data workflow built on LLM Capsule.",

  example1Title = "Finance: Regulatory Reporting Automation",
  example1Body = "A bank automates quarterly regulatory report generation using AI. Source documents contain customer account data, transaction histories, and internal risk assessments. LLM Capsule encapsulates all sensitive data, AI generates structured reports from protected sources, and restoration produces regulator-ready output.",
  example2Title = "Healthcare: Clinical Trial Document Processing",
  example2Body = "A pharmaceutical company uses AI to extract adverse event data from clinical trial reports. Documents contain patient identifiers, investigator names, and proprietary compound information. The secure workflow encapsulates all protected elements, AI extracts structured data, and restoration links extracted events to real patient identifiers in the internal safety database.",
  example3Title = "Legal: Multi-Jurisdictional Contract Review",
  example3Body = "A multinational corporation reviews employment contracts across 12 jurisdictions using AI for clause extraction and compliance checking. Each jurisdiction's contracts contain locally sensitive employee data. Enterprise confidentiality control applies jurisdiction-appropriate encapsulation policies, and restored outputs map to the appropriate HR systems.",

  faq1Q = "How do you build a secure enterprise AI data workflow?",
  faq1A = "A secure enterprise AI data workflow encapsulates sensitive data locally before AI processing, preserves document structure for AI accuracy, and restores outputs through local restoration. This requires a data-layer protection approach, not just API-level filtering.",
  faq2Q = "What is a restorable workflow?",
  faq2A = "A restorable workflow is an AI data processing pattern where sensitive data is replaced with reversible representations before AI processing. After processing, outputs are restored with original data locally, producing enterprise-ready results.",
  faq3Q = "Can secure AI workflows work with RAG pipelines?",
  faq3A = "Yes. LLM Capsule integrates with RAG (Retrieval-Augmented Generation) pipelines by encapsulating retrieved documents before they are included in AI prompts. Retrieved context remains protected throughout the generation process.",
  faq4Q = "What industries need secure enterprise AI data workflows?",
  faq4A = "Any industry handling sensitive data — financial services, healthcare, legal, government, defense, telecom, and insurance. Any organization subject to GDPR, HIPAA, SOX, or industry-specific data regulations benefits from secure AI data workflows.",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
}: Props) {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ─────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .seadw-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .seadw-root a { text-decoration: none; color: inherit; }
        .seadw-root img { max-width: 100%; display: block; }
        .seadw-root p, .seadw-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .seadw-root h1, .seadw-root h2, .seadw-root h3, .seadw-root h4 { text-wrap: balance; }

        /* ── Container Query wrapper ────────────────────────────── */
        .seadw-inner { width: 100%; container-type: inline-size; }

        /* ── Main container ─────────────────────────────────────── */
        .seadw-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .seadw-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .seadw-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .seadw-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Article container — 1080px ──────────────────────────── */
        .seadw-article-container {
          width: 100%; max-width: 1080px; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .seadw-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .seadw-article-container { padding: 0 32px; } }
        

        /* ── Buttons ────────────────────────────────────────────── */
        .seadw-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .seadw-btn--sm { padding: 8px 16px; font-size: 14px; }
        .seadw-btn--lg { padding: 16px 48px; font-size: 18px; }
        .seadw-btn--primary { background: ${P.gradientBrand}; color: ${P.white}; }
        .seadw-btn--primary:hover { opacity: 0.88; }
        .seadw-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .seadw-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .seadw-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .seadw-breadcrumb__link {
          font-size: 14px; color: ${P.brandSecondary};
          font-weight: 500; transition: color 0.15s;
        }
        .seadw-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .seadw-breadcrumb__sep { font-size: 14px; color: ${P.textTertiary}; }
        .seadw-breadcrumb__current { font-size: 14px; color: ${P.textTertiary}; }

        /* ── Hero Section ───────────────────────────────────────── */
        .seadw-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .seadw-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .seadw-article-hero__title { font-size: 36px; } }
        @container (min-width: 1024px) { .seadw-article-hero__title { font-size: 44px; } }
        @container (min-width: 1440px) { .seadw-article-hero__title { font-size: 52px; } }
        .seadw-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }

        /* ── Article Body Section ───────────────────────────────── */
        .seadw-section--article-body {
          padding: 32px 0; background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .seadw-section--article-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .seadw-section--article-body { padding: 60px 0; } }

        /* ── Article Section Header ─────────────────────────────── */
        .seadw-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .seadw-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .seadw-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .seadw-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .seadw-article-section-header h2 { font-size: 28px; } }

        /* ── Body Paragraphs ────────────────────────────────────── */
        .seadw-body-paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .seadw-body-paragraph:last-child { margin-bottom: 0; }

        /* ── Subsection Title ───────────────────────────────────── */
        .seadw-subsection-title {
          font-size: 17px; font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
          margin-top: 32px;
          margin-bottom: 12px;
        }
        @container (min-width: 768px)  { .seadw-subsection-title { font-size: 18px; } }
        @container (min-width: 1024px) { .seadw-subsection-title { font-size: 19px; } }
        @container (min-width: 1440px) { .seadw-subsection-title { font-size: 20px; } }

        /* ── Banner ─────────────────────────────────────────────── */
        .seadw-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px; line-height: 1.7;
          word-break: keep-all; overflow-wrap: break-word;
        }
        .seadw-banner p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }
        .seadw-banner p + p { margin-top: 8px; }

        /* ── Card ───────────────────────────────────────────────── */
        .seadw-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column; margin-bottom: 16px;
        }
        .seadw-card:last-child { margin-bottom: 0; }
        @container (min-width: 1440px) { .seadw-card { padding: 32px; } }
        .seadw-card__title {
          font-size: 16px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.3;
          margin-bottom: 12px;
        }
        .seadw-card p {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin: 0;
        }

        /* ── Accordion ──────────────────────────────────────────── */
        .seadw-ac-list { display: flex; flex-direction: column; gap: 2px; }

        /* ── Section Title Icon ─────────────────────────────────── */
        .seadw-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .seadw-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .seadw-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Card Grid ──────────────────────────────────────────── */
        .seadw-card-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @container (min-width: 768px) { .seadw-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .seadw-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }

        /* ── Dark Card ──────────────────────────────────────────── */
        .seadw-card--dark {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; align-items: center; gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .seadw-card--dark:hover { background-color: ${P.neutral800}; }
        .seadw-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .seadw-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }
        .seadw-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Text utilities ─────────────────────────────────────── */
        .seadw-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .seadw-text--brand   { color: ${P.brandSecondary}; }

        /* ── CTA Band ───────────────────────────────────────────── */
        .seadw-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background: ${P.gradientBrand};
        }
        .seadw-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .seadw-cta-band > * { position: relative; z-index: 1; }
        .seadw-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 768px)  { .seadw-cta-band { padding: 100px 32px; } }
        @container (min-width: 1024px) { .seadw-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) {
          .seadw-cta-band { padding: 120px 120px; }
          .seadw-cta-band__inner { max-width: 1080px; }
        }
        .seadw-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .seadw-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .seadw-cta-band__title { font-size: 50px; } }
        .seadw-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .seadw-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        .seadw-cta-band__actions .seadw-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .seadw-cta-band__actions .seadw-btn:hover { background-color: ${P.white}; }
        .seadw-cta-band__footnote {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;
          margin-top: 8px;
        }
        .seadw-cta-band__footnote a {
          font-size: 12px; color: rgba(255,255,255,0.7); transition: color 0.2s;
        }
        .seadw-cta-band__footnote a:hover { color: ${P.white}; }
      `}</style>

      <div className="seadw-root">
        <div className="seadw-inner">
          <main>

            {/* ── Section 1: Hero ──────────────────────────────────────── */}
            <section id="section-hero" className="seadw-section--hero">
              <div className="seadw-article-container">
                <nav className="seadw-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="seadw-breadcrumb__link">Home</a>
                  <span className="seadw-breadcrumb__sep">/</span>
                  <a href="/resources" className="seadw-breadcrumb__link">Resources</a>
                  <span className="seadw-breadcrumb__sep">/</span>
                  <a href="/resources/learn" className="seadw-breadcrumb__link">Learn</a>
                  <span className="seadw-breadcrumb__sep">/</span>
                  <span className="seadw-breadcrumb__current">Secure Enterprise AI Data Workflows</span>
                </nav>
                <h1 className="seadw-article-hero__title">{heroTitle}</h1>
                <p className="seadw-article-hero__description">{heroDescription}</p>
              </div>
            </section>

            {/* ── Section 2: Problem ───────────────────────────────────── */}
            <section id="section-2" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-article-section-header">
                  <h2>Problem</h2>
                </div>
                <p className="seadw-body-paragraph">{problemPara1}</p>
                <p className="seadw-body-paragraph">{problemPara2}</p>
              </div>
            </section>

            {/* ── Section 3: Definition ────────────────────────────────── */}
            <section id="section-3" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-article-section-header">
                  <h2>Definition</h2>
                </div>
                <div className="seadw-banner">
                  <p><strong>{definitionTitle}</strong></p>
                  <p>{definitionBody}</p>
                </div>
              </div>
            </section>

            {/* ── Section 4: Explanation ───────────────────────────────── */}
            <section id="section-4" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-article-section-header">
                  <h2>Explanation</h2>
                </div>
                <p className="seadw-body-paragraph">{explanationIntro}</p>

                <h3 className="seadw-subsection-title">{explanationSub1Title}</h3>
                <p className="seadw-body-paragraph">{explanationSub1Body}</p>

                <h3 className="seadw-subsection-title">{explanationSub2Title}</h3>
                <p className="seadw-body-paragraph">{explanationSub2Body}</p>

                <h3 className="seadw-subsection-title">{explanationSub3Title}</h3>
                <p className="seadw-body-paragraph">{explanationSub3Body}</p>

                <div className="seadw-banner" style={{ marginTop: 32 }}>
                  <strong>Enable AI. Protect data. Restore results.</strong>{" "}
                  This is the operating principle of every enterprise AI data workflow built on{" "}
                  <span className="seadw-text--product">LLM Capsule</span>.
                </div>
              </div>
            </section>

            {/* ── Section 5: Enterprise Examples ───────────────────────── */}
            <section id="section-5" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-article-section-header">
                  <h2>Enterprise Examples</h2>
                </div>
                <div className="seadw-card">
                  <h4 className="seadw-card__title">{example1Title}</h4>
                  <p>{example1Body}</p>
                </div>
                <div className="seadw-card">
                  <h4 className="seadw-card__title">{example2Title}</h4>
                  <p>{example2Body}</p>
                </div>
                <div className="seadw-card">
                  <h4 className="seadw-card__title">{example3Title}</h4>
                  <p>{example3Body}</p>
                </div>
              </div>
            </section>

            {/* ── Section 6: FAQ ───────────────────────────────────────── */}
            <section id="section-6" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-article-section-header">
                  <h2>FAQ</h2>
                </div>
                <div className="seadw-ac-list">
                  <AcCard question={faq1Q} answer={faq1A} defaultOpen={true} />
                  <AcCard question={faq2Q} answer={faq2A} />
                  <AcCard question={faq3Q} answer={faq3A} />
                  <AcCard question={faq4Q} answer={faq4A} />
                </div>
              </div>
            </section>

            {/* ── Section 7: Learn More ────────────────────────────────── */}
            <section id="section-7" className="seadw-section--article-body">
              <div className="seadw-article-container">
                <div className="seadw-section-title-icon">
                  <span className="seadw-section-title-icon__icon">
                    <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="seadw-section-title-icon__text">Learn More</span>
                </div>

                <div className="seadw-card-grid seadw-card-grid--2col">
                  <a href="/product" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Product Overview</span>
                  </a>
                  <a href="/architecture" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Architecture</span>
                  </a>
                  <a href="/trust" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Trust &amp; Compliance</span>
                  </a>
                  <a href="/request-a-demo" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Request a Demo</span>
                  </a>
                  <a href="/resources/learn/what-is-ai-data-capsule" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">What Is an AI Data Capsule</span>
                  </a>
                  <a href="/resources/learn/how-to-use-ai-on-sensitive-enterprise-data" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">AI on Sensitive Data</span>
                  </a>
                  <a href="/resources/learn/why-redaction-breaks-enterprise-ai-workflows" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Why Redaction Breaks AI</span>
                  </a>
                  <a href="/resources/learn/secure-enterprise-ai-workflows" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Secure AI Workflows</span>
                  </a>
                  <a href="/resources/learn/structure-preserving-document-processing" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="3" y1="15" x2="21" y2="15" />
                        <line x1="9" y1="3" x2="9" y2="21" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">Structure-Preserving Processing</span>
                  </a>
                  <a href="/resources/learn/pii-protection-vs-enterprise-confidentiality-control" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">PII vs Confidentiality Control</span>
                  </a>
                  <a href="/resources/learn/on-premise-vs-cloud-ai-data-protection" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="17 1 21 5 17 9" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <polyline points="7 23 3 19 7 15" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">On-Premise vs Cloud</span>
                  </a>
                  <a href="/resources/learn/ai-data-pipeline-protection" className="seadw-card--dark">
                    <span className="seadw-card--dark__icon">
                      <svg className="seadw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </span>
                    <span className="seadw-card--dark__title">AI Pipeline Protection</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section CTA ──────────────────────────────────────────── */}
            <section id="section-cta" className="seadw-cta-band">
              <div className="seadw-cta-band__inner">
                <h2 className="seadw-cta-band__title">
                  {ctaTitle}
                </h2>
                <p className="seadw-cta-band__description">{ctaDescription}</p>
                <div className="seadw-cta-band__actions">
                  <a href={ctaBtn1Href} className="seadw-btn seadw-btn--lg">{ctaBtn1Label}</a>
                </div>
                <div className="seadw-cta-band__footnote">
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

// ─── Property Controls ─────────────────────────────────────────────────────
addPropertyControls(SecureEnterpriseAiDataWorkflows, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Secure Enterprise AI Data Workflows",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Complete guide to enterprise AI data privacy — how to protect sensitive data throughout AI processing while producing usable, restorable enterprise outputs.",
    displayTextArea: true,
  },
  problemPara1: {
    type: ControlType.String,
    title: "Problem Para 1",
    defaultValue: "Enterprise AI adoption is blocked by a fundamental tension: AI delivers value by processing real data, but enterprise data governance prohibits sending sensitive information to external AI services. This creates a stalemate that affects every regulated industry — finance, healthcare, legal, government, and telecom.",
    displayTextArea: true,
  },
  problemPara2: {
    type: ControlType.String,
    title: "Problem Para 2",
    defaultValue: "The consequence is either AI projects using only sanitized, non-sensitive data (limiting value), or data teams building complex workarounds that introduce risk and compliance gaps. Neither approach scales.",
    displayTextArea: true,
  },
  definitionTitle: {
    type: ControlType.String,
    title: "Definition Title",
    defaultValue: "Secure Enterprise AI Data Workflow",
  },
  definitionBody: {
    type: ControlType.String,
    title: "Definition Body",
    defaultValue: "A secure enterprise AI data workflow is an end-to-end data processing pattern that protects sensitive information at the data layer before AI processing, preserves document structure for AI accuracy, and restores enterprise context in outputs through local restoration. It enables enterprise AI adoption without sacrificing data privacy or AI output quality.",
    displayTextArea: true,
  },
  explanationIntro: {
    type: ControlType.String,
    title: "Explanation Intro",
    defaultValue: "Building secure enterprise AI data workflows requires addressing protection at three distinct layers:",
  },
  explanationSub1Title: {
    type: ControlType.String,
    title: "Explanation Sub 1 Title",
    defaultValue: "Data Layer Protection",
  },
  explanationSub1Body: {
    type: ControlType.String,
    title: "Explanation Sub 1 Body",
    defaultValue: "Enterprise AI data privacy starts before data reaches any AI model. LLM Capsule applies context-aware data control at the document level — identifying and encapsulating sensitive elements based on configurable enterprise policies. This is fundamentally different from API gateway filtering, which only sees prompts, not the underlying data structures.",
    displayTextArea: true,
  },
  explanationSub2Title: {
    type: ControlType.String,
    title: "Explanation Sub 2 Title",
    defaultValue: "Processing Layer Integrity",
  },
  explanationSub2Body: {
    type: ControlType.String,
    title: "Explanation Sub 2 Body",
    defaultValue: "Protected documents must retain enough structure for AI models to produce meaningful results. Structure-preserving processing ensures that tables, entity relationships, cross-references, and document hierarchies remain intact in the encapsulated representation. AI models process structurally complete documents, not fragmented masked text.",
    displayTextArea: true,
  },
  explanationSub3Title: {
    type: ControlType.String,
    title: "Explanation Sub 3 Title",
    defaultValue: "Output Layer Restoration",
  },
  explanationSub3Body: {
    type: ControlType.String,
    title: "Explanation Sub 3 Body",
    defaultValue: "AI results are restored through local restoration. The locally stored mapping between original and encapsulated values is applied to AI outputs automatically. This produces enterprise-ready outputs — with real names, real amounts, real references — that integrate directly into business systems without manual post-processing.",
    displayTextArea: true,
  },
  example1Title: {
    type: ControlType.String,
    title: "Example 1 Title",
    defaultValue: "Finance: Regulatory Reporting Automation",
  },
  example1Body: {
    type: ControlType.String,
    title: "Example 1 Body",
    defaultValue: "A bank automates quarterly regulatory report generation using AI. Source documents contain customer account data, transaction histories, and internal risk assessments. LLM Capsule encapsulates all sensitive data, AI generates structured reports from protected sources, and restoration produces regulator-ready output.",
    displayTextArea: true,
  },
  example2Title: {
    type: ControlType.String,
    title: "Example 2 Title",
    defaultValue: "Healthcare: Clinical Trial Document Processing",
  },
  example2Body: {
    type: ControlType.String,
    title: "Example 2 Body",
    defaultValue: "A pharmaceutical company uses AI to extract adverse event data from clinical trial reports. Documents contain patient identifiers, investigator names, and proprietary compound information. The secure workflow encapsulates all protected elements, AI extracts structured data, and restoration links extracted events to real patient identifiers in the internal safety database.",
    displayTextArea: true,
  },
  example3Title: {
    type: ControlType.String,
    title: "Example 3 Title",
    defaultValue: "Legal: Multi-Jurisdictional Contract Review",
  },
  example3Body: {
    type: ControlType.String,
    title: "Example 3 Body",
    defaultValue: "A multinational corporation reviews employment contracts across 12 jurisdictions using AI for clause extraction and compliance checking. Each jurisdiction's contracts contain locally sensitive employee data. Enterprise confidentiality control applies jurisdiction-appropriate encapsulation policies, and restored outputs map to the appropriate HR systems.",
    displayTextArea: true,
  },
  faq1Q: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "How do you build a secure enterprise AI data workflow?",
  },
  faq1A: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "A secure enterprise AI data workflow encapsulates sensitive data locally before AI processing, preserves document structure for AI accuracy, and restores outputs through local restoration. This requires a data-layer protection approach, not just API-level filtering.",
    displayTextArea: true,
  },
  faq2Q: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "What is a restorable workflow?",
  },
  faq2A: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "A restorable workflow is an AI data processing pattern where sensitive data is replaced with reversible representations before AI processing. After processing, outputs are restored with original data locally, producing enterprise-ready results.",
    displayTextArea: true,
  },
  faq3Q: {
    type: ControlType.String,
    title: "FAQ 3 Question",
    defaultValue: "Can secure AI workflows work with RAG pipelines?",
  },
  faq3A: {
    type: ControlType.String,
    title: "FAQ 3 Answer",
    defaultValue: "Yes. LLM Capsule integrates with RAG (Retrieval-Augmented Generation) pipelines by encapsulating retrieved documents before they are included in AI prompts. Retrieved context remains protected throughout the generation process.",
    displayTextArea: true,
  },
  faq4Q: {
    type: ControlType.String,
    title: "FAQ 4 Question",
    defaultValue: "What industries need secure enterprise AI data workflows?",
  },
  faq4A: {
    type: ControlType.String,
    title: "FAQ 4 Answer",
    defaultValue: "Any industry handling sensitive data — financial services, healthcare, legal, government, defense, telecom, and insurance. Any organization subject to GDPR, HIPAA, SOX, or industry-specific data regulations benefits from secure AI data workflows.",
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
