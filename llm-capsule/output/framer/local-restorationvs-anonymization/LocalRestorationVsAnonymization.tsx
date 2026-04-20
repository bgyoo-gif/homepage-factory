import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

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
    { "@type": "ListItem", "position": 4, "name": "Local Restoration vs Anonymization", "item": "https://llmcapsule.ai/resources/learn/local-restoration-vs-anonymization" },
  ],
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between anonymization and restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.",
      },
    },
    {
      "@type": "Question",
      "name": "When should I use anonymization vs local restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.",
      },
    },
  ],
})

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 2 – Overview
  overviewText?: string

  // Section 3 – How Anonymization Works
  anonWorksText?: string

  // Section 4 – Limitations
  limitBullet1?: string
  limitBullet2?: string
  limitBullet3?: string

  // Section 5 – How LLM Capsule Differs
  differsText?: string
  differsBannerText?: string

  // Section 6 – Comparison Table (row cells, pipe-separated: label|anon|capsule)
  tableRow1?: string
  tableRow2?: string
  tableRow3?: string
  tableRow4?: string
  tableRow5?: string
  tableRow6?: string

  // Section 7 – Enterprise Workflow Example
  exampleCardTitle?: string
  exampleCardP1?: string
  exampleCardP2?: string

  // Section 8 – FAQ
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string

  // CTA Band
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaFootnote2Label?: string
  ctaFootnote2Href?: string
}

// ─── Helper: parse pipe-separated row string ───────────────────────────────────
function parseRow(raw: string): [string, string, string] {
  const parts = raw.split("|")
  return [parts[0] ?? "", parts[1] ?? "", parts[2] ?? ""]
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function LocalRestorationVsAnonymization({
  heroTitle = "Local Restoration vs Anonymization",
  heroDescription = "Compare local restoration (restoration) with anonymization for enterprise AI. Anonymization is permanent; local restoration restores real enterprise data in AI outputs automatically.",

  overviewText = "Anonymization and local restoration represent opposite approaches to data protection in AI workflows. Anonymization permanently removes identifying information. Local restoration temporarily protects data and restores it after AI processing — producing enterprise-ready outputs with real data.",

  anonWorksText = "Anonymization techniques — k-anonymity, differential privacy, generalization, suppression — transform data so that individual records cannot be re-identified. The transformation is designed to be irreversible. Anonymized data is considered non-personal under most regulatory frameworks.",

  limitBullet1 = "Irreversibility. Anonymization is permanent by design. Once data is anonymized, there is no automated path to recover original values. AI outputs based on anonymized data remain anonymous — they cannot reference real individuals, real accounts, or real events.",
  limitBullet2 = "Information loss. Generalization replaces specific values with ranges (\"age 35\" → \"30-40\"). Suppression removes values entirely. Both reduce AI's ability to produce precise, actionable outputs.",
  limitBullet3 = "Not designed for document intelligence. Anonymization techniques were developed for structured databases, not unstructured enterprise documents. Applying anonymization to contracts, reports, and correspondence produces severely degraded content.",

  differsText = "Local restoration (restoration) is the process of restoring AI outputs to their full enterprise context using locally stored mappings. Data is encapsulated (not anonymized) before AI processing — sensitive values are replaced with reversible, structure-preserving representations. After AI processing, the original values are restored automatically.",
  differsBannerText = "AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.",

  tableRow1 = "Reversibility|Irreversible|Fully reversible",
  tableRow2 = "Output usability|Anonymous, non-actionable|Enterprise-ready, actionable",
  tableRow3 = "Information loss|Significant|None (structure preserved)",
  tableRow4 = "Document support|Structured data only|All document types",
  tableRow5 = "Post-processing required|Extensive manual work|Automatic restoration",
  tableRow6 = "Enterprise workflow fit|Analytics / research only|Full production workflows",

  exampleCardTitle = "Patient Discharge Summaries",
  exampleCardP1 = "A hospital needs AI to generate discharge summaries from patient records. Anonymized records remove patient identifiers — but discharge summaries must reference real patient names, medications, and attending physicians to be clinically useful.",
  exampleCardP2 = "LLM Capsule encapsulates patient records, AI generates structured summaries, and local restoration restores all patient identifiers into the discharge documents. The summaries are clinically ready without any manual re-identification.",

  faq1Question = "What is the difference between anonymization and restoration?",
  faq1Answer = "Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.",
  faq2Question = "When should I use anonymization vs local restoration?",
  faq2Answer = "Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.",

  ctaTitle = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaFootnote2Label = "AWS Marketplace",
  ctaFootnote2Href = "https://aws.amazon.com/marketplace",
}: Props) {
  const [faq1Open, setFaq1Open] = useState(true)
  const [faq2Open, setFaq2Open] = useState(false)

  const rows = [tableRow1, tableRow2, tableRow3, tableRow4, tableRow5, tableRow6].map(parseRow)

  // Parse bullet labels (bold prefix before first period)
  function splitBullet(text: string): { bold: string; rest: string } {
    const dotIdx = text.indexOf(".")
    if (dotIdx === -1) return { bold: "", rest: text }
    return { bold: text.slice(0, dotIdx + 1), rest: text.slice(dotIdx + 1) }
  }

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        /* ── Reset ─────────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .lrva-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .lrva-root a { text-decoration: none; color: inherit; }
        .lrva-root img { max-width: 100%; display: block; }
        .lrva-root p, .lrva-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .lrva-root h1, .lrva-root h2, .lrva-root h3, .lrva-root h4 { text-wrap: balance; }

        /* ── Container Query wrapper ────────────────────────────────── */
        .lrva-inner { width: 100%; container-type: inline-size; }

        /* ── Article container (1080px) ──────────────────────────────── */
        .lrva-article-container {
          width: 100%; max-width: 1080px; margin: 0 auto;
          padding: 0 16px;
        }
        @container (min-width: 768px)  { .lrva-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .lrva-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .lrva-article-container { padding: 0 120px; max-width: 1440px; } }
        

        /* ── Full-width container (1440px) ──────────────────────────── */
        .lrva-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .lrva-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .lrva-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .lrva-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Breadcrumb ─────────────────────────────────────────────── */
        .lrva-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .lrva-breadcrumb__link {
          font-size: 14px; color: ${P.brandSecondary};
          font-weight: 500; transition: color 0.15s;
        }
        .lrva-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .lrva-breadcrumb__sep { font-size: 14px; color: ${P.textTertiary}; }
        .lrva-breadcrumb__current { font-size: 14px; color: ${P.textTertiary}; }

        /* ── Hero Section ───────────────────────────────────────────── */
        .lrva-section--hero {
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }

        .lrva-article-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px; font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .lrva-article-hero__title { font-size: 36px; } }
        @container (min-width: 1024px) { .lrva-article-hero__title { font-size: 44px; } }
        @container (min-width: 1440px) { .lrva-article-hero__title { font-size: 52px; } }

        .lrva-article-hero__description {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%;
        }

        /* ── Text utilities ─────────────────────────────────────────── */
        .lrva-text--product { font-family: "Oxanium", sans-serif; font-weight: 700; }
        .lrva-text--brand   { color: ${P.brandSecondary}; }

        /* ── Article Body Section ───────────────────────────────────── */
        .lrva-section--article-body {
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .lrva-section--article-body { padding: 60px 0; } }
        @container (min-width: 1440px) { .lrva-section--article-body { padding: 60px 0; } }

        /* ── Article Section Header ─────────────────────────────────── */
        .lrva-article-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        @container (max-width: 767px) { .lrva-article-section-header { text-align: left; } }
        .lrva-article-section-header h2 {
          font-size: 20px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .lrva-article-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .lrva-article-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .lrva-article-section-header h2 { font-size: 28px; } }

        /* ── Article Body Paragraph ─────────────────────────────────── */
        .lrva-body-paragraph {
          font-size: 16px; color: ${P.textSecondary};
          line-height: 1.7; margin-bottom: 16px;
        }
        .lrva-body-paragraph:last-child { margin-bottom: 0; }
        .lrva-body-paragraph--strong { font-weight: 500; }

        /* ── Banner ─────────────────────────────────────────────────── */
        .lrva-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px; line-height: 1.7;
          word-break: keep-all; overflow-wrap: break-word;
          margin-top: 24px;
        }
        .lrva-banner p {
          font-size: 16px; color: ${P.textPrimary};
          line-height: 1.7; margin: 0;
        }

        /* ── Bullet List ────────────────────────────────────────────── */
        .lrva-bullet {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .lrva-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .lrva-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px; display: flex; align-items: center; justify-content: center;
        }
        .lrva-bullet--dot .lrva-bullet__icon::before {
          content: "•"; color: ${P.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Table ──────────────────────────────────────────────────── */
        .lrva-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 24px 0;
        }
        .lrva-table {
          width: 100%; border-collapse: collapse; font-size: 14px;
        }
        .lrva-table thead { background-color: ${P.neutral025}; }
        .lrva-table th {
          padding: 14px 16px; text-align: left;
          font-weight: 600; font-size: 12px;
          color: ${P.textPrimary};
          border-bottom: 2px solid ${P.borderDefault};
        }
        .lrva-table th.lrva-table__th--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
        }
        .lrva-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textSecondary}; vertical-align: top;
        }
        .lrva-table td.lrva-table__td--highlight {
          background-color: rgba(24, 33, 232, 0.04);
          color: ${P.brandPrimary};
          font-weight: 500;
        }
        @container (max-width: 767px) {
          .lrva-table th, .lrva-table td { padding: 10px 12px; font-size: 12px; }
        }

        /* ── Card ───────────────────────────────────────────────────── */
        .lrva-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px; border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column; gap: 12px;
        }
        @container (min-width: 1440px) { .lrva-card { padding: 32px; } }
        .lrva-card h4 {
          font-size: 16px; font-weight: 600; color: ${P.textPrimary};
          line-height: 1.2;
        }
        .lrva-card p {
          font-size: 16px; color: ${P.textSecondary}; line-height: 1.7;
        }

        /* ── Accordion ──────────────────────────────────────────────── */
        .lrva-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .lrva-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden; transition: background-color 0.2s;
        }
        .lrva-ac-card:hover { background-color: ${P.neutral025}; }
        .lrva-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .lrva-ac-card__title {
          font-family: "DM Sans", sans-serif; font-size: 18px;
          font-weight: 500; line-height: 1.2;
          color: ${P.textPrimary};
        }
        .lrva-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .lrva-ac-toggle-icon { width: 12px; height: 12px; position: relative; flex-shrink: 0; }
        .lrva-ac-toggle-icon::before, .lrva-ac-toggle-icon::after {
          content: ''; position: absolute; background-color: ${P.textTertiary}; border-radius: 1px;
        }
        .lrva-ac-toggle-icon::before { width: 10px; height: 1.5px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .lrva-ac-toggle-icon::after  { width: 1.5px; height: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); transition: opacity 0.2s; }
        .lrva-ac-toggle-icon--open::after { opacity: 0; }
        .lrva-ac-card__body {
          padding: 0 24px 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary};
          line-height: 1.7;
        }
        .lrva-ac-card__body p { padding-top: 16px; }
        .lrva-ac-card__body p + p { margin-top: 12px; }

        /* ── Dark Card ──────────────────────────────────────────────── */
        .lrva-card--dark {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
          border-radius: 18px; padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; align-items: center; gap: 16px;
          transition: background-color 0.2s; text-decoration: none;
        }
        .lrva-card--dark:hover { background-color: ${P.neutral800}; }
        .lrva-card--dark__icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .lrva-card--dark__title {
          font-size: 16px; font-weight: 600; color: ${P.textInverse};
        }

        /* ── Card Grid ──────────────────────────────────────────────── */
        .lrva-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .lrva-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        /* ── Icon ───────────────────────────────────────────────────── */
        .lrva-icon {
          width: 24px; height: 24px; stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Section Title Icon ─────────────────────────────────────── */
        .lrva-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .lrva-section-title-icon__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .lrva-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${P.textPrimary}; line-height: 1.2;
        }

        /* ── Inline code ────────────────────────────────────────────── */
        .lrva-code-inline {
          font-family: "Fragment Mono", monospace;
          font-size: 0.875em; font-weight: 400;
          background-color: ${P.neutral100};
          border-radius: 3px; padding: 0 4px;
          color: inherit;
        }

        /* ── Btn ────────────────────────────────────────────────────── */
        .lrva-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .lrva-btn--sm { padding: 8px 16px; font-size: 14px; }
        .lrva-btn--lg { padding: 16px 48px; font-size: 18px; }
        .lrva-btn--secondary {
          background-color: transparent;
          color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .lrva-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* ── CTA Band ───────────────────────────────────────────────── */
        .lrva-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background: ${P.gradientBrand};
        }
        .lrva-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .lrva-cta-band > * { position: relative; z-index: 1; }
        .lrva-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 768px)  { .lrva-cta-band { padding: 100px 32px; } }
        @container (min-width: 1024px) { .lrva-cta-band__inner { max-width: 720px; } }
        @container (min-width: 1440px) {
          .lrva-cta-band { padding: 120px 120px; }
          .lrva-cta-band__inner { max-width: 1080px; }
        }
        .lrva-cta-band__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .lrva-cta-band__title { font-size: 36px; } }
        @container (min-width: 1440px) { .lrva-cta-band__title { font-size: 50px; } }
        .lrva-cta-band__description {
          font-size: 18px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .lrva-cta-band__actions {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;
        }
        .lrva-cta-band__actions .lrva-btn {
          background-color: rgba(255,255,255,0.92);
          color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
        }
        .lrva-cta-band__actions .lrva-btn:hover { background-color: ${P.white}; }
        .lrva-cta-band__footnote {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;
          margin-top: 8px;
        }
        .lrva-cta-band__footnote a {
          font-size: 14px; color: rgba(255,255,255,0.7); transition: color 0.2s;
        }
        .lrva-cta-band__footnote a:hover { color: ${P.white}; }

        /* ── Spacing helper ─────────────────────────────────────────── */
        .lrva-spaced-top { margin-top: 24px; }
      `}</style>

      <div className="lrva-root">
        <div className="lrva-inner">
          <main>

            {/* ── Section 1: Hero ──────────────────────────────────────── */}
            <section id="section-hero" className="lrva-section--hero">
              <div className="lrva-article-container">
                <nav className="lrva-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="lrva-breadcrumb__link">Home</a>
                  <span className="lrva-breadcrumb__sep">/</span>
                  <a href="/resources" className="lrva-breadcrumb__link">Resources</a>
                  <span className="lrva-breadcrumb__sep">/</span>
                  <a href="/resources/learn" className="lrva-breadcrumb__link">Learn</a>
                  <span className="lrva-breadcrumb__sep">/</span>
                  <span className="lrva-breadcrumb__current">Local Restoration vs Anonymization</span>
                </nav>
                <h1 className="lrva-article-hero__title">{heroTitle}</h1>
                <p className="lrva-article-hero__description">{heroDescription}</p>
              </div>
            </section>

            {/* ── Section 2: Overview ──────────────────────────────────── */}
            <section id="section-2" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>Overview</h2>
                </div>
                <p className="lrva-body-paragraph">{overviewText}</p>
              </div>
            </section>

            {/* ── Section 3: How Anonymization Works ──────────────────── */}
            <section id="section-3" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>How Anonymization Works</h2>
                </div>
                <p className="lrva-body-paragraph">{anonWorksText}</p>
              </div>
            </section>

            {/* ── Section 4: Limitations ──────────────────────────────── */}
            <section id="section-4" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>Limitations</h2>
                </div>
                <ul className="lrva-bullet lrva-bullet--dot">
                  {[limitBullet1, limitBullet2, limitBullet3].map((raw, i) => {
                    const { bold, rest } = splitBullet(raw)
                    return (
                      <li key={i} className="lrva-bullet__item">
                        <span className="lrva-bullet__icon" />
                        <span>
                          {bold && <strong>{bold}</strong>}
                          {rest}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </section>

            {/* ── Section 5: How LLM Capsule Differs ─────────────────── */}
            <section id="section-5" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>
                    How <span className="lrva-text--product">LLM Capsule</span> Differs
                  </h2>
                </div>
                <p className="lrva-body-paragraph">{differsText}</p>
                <div className="lrva-banner">
                  <p>
                    <strong>AI results are restored locally.</strong>{" "}
                    <span className="lrva-text--product">LLM Capsule</span> enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 6: Comparison Table ─────────────────────────── */}
            <section id="section-6" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>Comparison</h2>
                </div>
                <div className="lrva-table-wrap">
                  <table className="lrva-table">
                    <thead>
                      <tr>
                        <th>Capability</th>
                        <th>Anonymization</th>
                        <th className="lrva-table__th--highlight">
                          <span className="lrva-text--product">LLM Capsule</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(([label, anon, capsule], i) => (
                        <tr key={i}>
                          <td>{label}</td>
                          <td>{anon}</td>
                          <td className="lrva-table__td--highlight">{capsule}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Section 7: Enterprise Workflow Example ──────────────── */}
            <section id="section-7" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>Enterprise Workflow Example</h2>
                </div>
                <div className="lrva-card">
                  <h4>{exampleCardTitle}</h4>
                  <p>{exampleCardP1}</p>
                  <p>
                    <span className="lrva-text--product">LLM Capsule</span>{" "}
                    {exampleCardP2.replace(/^LLM Capsule\s*/i, "")}
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 8: FAQ ───────────────────────────────────────── */}
            <section id="section-8" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-article-section-header">
                  <h2>FAQ</h2>
                </div>
                <div className="lrva-ac-list">
                  {/* FAQ 1 */}
                  <div className="lrva-ac-card">
                    <div
                      className="lrva-ac-card__header"
                      onClick={() => setFaq1Open(v => !v)}
                    >
                      <span className="lrva-ac-card__title">{faq1Question}</span>
                      <span className="lrva-ac-card__toggle">
                        <span className={`lrva-ac-toggle-icon${faq1Open ? " lrva-ac-toggle-icon--open" : ""}`} />
                      </span>
                    </div>
                    {faq1Open && (
                      <div className="lrva-ac-card__body">
                        <p>{faq1Answer}</p>
                      </div>
                    )}
                  </div>
                  {/* FAQ 2 */}
                  <div className="lrva-ac-card">
                    <div
                      className="lrva-ac-card__header"
                      onClick={() => setFaq2Open(v => !v)}
                    >
                      <span className="lrva-ac-card__title">{faq2Question}</span>
                      <span className="lrva-ac-card__toggle">
                        <span className={`lrva-ac-toggle-icon${faq2Open ? " lrva-ac-toggle-icon--open" : ""}`} />
                      </span>
                    </div>
                    {faq2Open && (
                      <div className="lrva-ac-card__body">
                        <p>
                          Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (
                          <span className="lrva-text--product">LLM Capsule</span>) for production AI workflows where outputs must reference real enterprise data.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 9: Related Pages ─────────────────────────────── */}
            <section id="section-9" className="lrva-section--article-body">
              <div className="lrva-article-container">
                <div className="lrva-section-title-icon">
                  <span className="lrva-section-title-icon__icon">
                    <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <span className="lrva-section-title-icon__text">Related</span>
                </div>
                <div className="lrva-card-grid lrva-card-grid--2col">
                  <a href="/product" className="lrva-card--dark">
                    <span className="lrva-card--dark__icon">
                      <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <span className="lrva-card--dark__title">Product Overview</span>
                  </a>
                  <a href="/architecture" className="lrva-card--dark">
                    <span className="lrva-card--dark__icon">
                      <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <span className="lrva-card--dark__title">Architecture</span>
                  </a>
                  <a href="/trust" className="lrva-card--dark">
                    <span className="lrva-card--dark__icon">
                      <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="lrva-card--dark__title">Trust &amp; Compliance</span>
                  </a>
                  <a href="/request-a-demo" className="lrva-card--dark">
                    <span className="lrva-card--dark__icon">
                      <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="lrva-card--dark__title">Request a Demo</span>
                  </a>
                  <a href="/resources/learn" className="lrva-card--dark">
                    <span className="lrva-card--dark__icon">
                      <svg className="lrva-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </span>
                    <span className="lrva-card--dark__title">Learn Hub</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 10: CTA Band ──────────────────────────────────── */}
            <section id="section-cta" className="lrva-cta-band">
              <div className="lrva-cta-band__inner">
                <h2 className="lrva-cta-band__title">
                  See how <span className="lrva-text--product">LLM Capsule</span> works with your data
                </h2>
                <p className="lrva-cta-band__description">{ctaDescription}</p>
                <div className="lrva-cta-band__actions">
                  <a href={ctaBtn1Href} className="lrva-btn lrva-btn--lg">{ctaBtn1Label}</a>
                </div>
                <div className="lrva-cta-band__footnote">
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

// ─── Property Controls ──────────────────────────────────────────────────────────
addPropertyControls(LocalRestorationVsAnonymization, {
  heroTitle: {
    type: ControlType.String,
    title: "Hero Title",
    defaultValue: "Local Restoration vs Anonymization",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Hero Description",
    defaultValue: "Compare local restoration (restoration) with anonymization for enterprise AI. Anonymization is permanent; local restoration restores real enterprise data in AI outputs automatically.",
    displayTextArea: true,
  },
  overviewText: {
    type: ControlType.String,
    title: "Overview",
    defaultValue: "Anonymization and local restoration represent opposite approaches to data protection in AI workflows. Anonymization permanently removes identifying information. Local restoration temporarily protects data and restores it after AI processing — producing enterprise-ready outputs with real data.",
    displayTextArea: true,
  },
  anonWorksText: {
    type: ControlType.String,
    title: "How Anonymization Works",
    defaultValue: "Anonymization techniques — k-anonymity, differential privacy, generalization, suppression — transform data so that individual records cannot be re-identified. The transformation is designed to be irreversible. Anonymized data is considered non-personal under most regulatory frameworks.",
    displayTextArea: true,
  },
  limitBullet1: {
    type: ControlType.String,
    title: "Limitation 1",
    defaultValue: "Irreversibility. Anonymization is permanent by design. Once data is anonymized, there is no automated path to recover original values. AI outputs based on anonymized data remain anonymous — they cannot reference real individuals, real accounts, or real events.",
    displayTextArea: true,
  },
  limitBullet2: {
    type: ControlType.String,
    title: "Limitation 2",
    defaultValue: "Information loss. Generalization replaces specific values with ranges (\"age 35\" → \"30-40\"). Suppression removes values entirely. Both reduce AI's ability to produce precise, actionable outputs.",
    displayTextArea: true,
  },
  limitBullet3: {
    type: ControlType.String,
    title: "Limitation 3",
    defaultValue: "Not designed for document intelligence. Anonymization techniques were developed for structured databases, not unstructured enterprise documents. Applying anonymization to contracts, reports, and correspondence produces severely degraded content.",
    displayTextArea: true,
  },
  differsText: {
    type: ControlType.String,
    title: "How LLM Capsule Differs",
    defaultValue: "Local restoration (restoration) is the process of restoring AI outputs to their full enterprise context using locally stored mappings. Data is encapsulated (not anonymized) before AI processing — sensitive values are replaced with reversible, structure-preserving representations. After AI processing, the original values are restored automatically.",
    displayTextArea: true,
  },
  tableRow1: {
    type: ControlType.String,
    title: "Table Row 1 (label|anon|capsule)",
    defaultValue: "Reversibility|Irreversible|Fully reversible",
  },
  tableRow2: {
    type: ControlType.String,
    title: "Table Row 2",
    defaultValue: "Output usability|Anonymous, non-actionable|Enterprise-ready, actionable",
  },
  tableRow3: {
    type: ControlType.String,
    title: "Table Row 3",
    defaultValue: "Information loss|Significant|None (structure preserved)",
  },
  tableRow4: {
    type: ControlType.String,
    title: "Table Row 4",
    defaultValue: "Document support|Structured data only|All document types",
  },
  tableRow5: {
    type: ControlType.String,
    title: "Table Row 5",
    defaultValue: "Post-processing required|Extensive manual work|Automatic restoration",
  },
  tableRow6: {
    type: ControlType.String,
    title: "Table Row 6",
    defaultValue: "Enterprise workflow fit|Analytics / research only|Full production workflows",
  },
  exampleCardTitle: {
    type: ControlType.String,
    title: "Example Card Title",
    defaultValue: "Patient Discharge Summaries",
  },
  exampleCardP1: {
    type: ControlType.String,
    title: "Example Card Para 1",
    defaultValue: "A hospital needs AI to generate discharge summaries from patient records. Anonymized records remove patient identifiers — but discharge summaries must reference real patient names, medications, and attending physicians to be clinically useful.",
    displayTextArea: true,
  },
  exampleCardP2: {
    type: ControlType.String,
    title: "Example Card Para 2",
    defaultValue: "LLM Capsule encapsulates patient records, AI generates structured summaries, and local restoration restores all patient identifiers into the discharge documents. The summaries are clinically ready without any manual re-identification.",
    displayTextArea: true,
  },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is the difference between anonymization and restoration?",
  },
  faq1Answer: {
    type: ControlType.String,
    title: "FAQ 1 Answer",
    defaultValue: "Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.",
    displayTextArea: true,
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "When should I use anonymization vs local restoration?",
  },
  faq2Answer: {
    type: ControlType.String,
    title: "FAQ 2 Answer",
    defaultValue: "Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.",
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
    title: "Footnote 2 Label",
    defaultValue: "AWS Marketplace",
  },
  ctaFootnote2Href: {
    type: ControlType.String,
    title: "Footnote 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
})
