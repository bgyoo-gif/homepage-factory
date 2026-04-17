import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Asset Base ────────────────────────────────────────────────────────────────
const IMG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"
const GFX = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics"

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
  gradientArchHeader: "linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%)",
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_ORG = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LLM Capsule",
  "url": "https://llmcapsule.ai",
  "description": "Enterprise AI enablement data layer and plugin by CUBIG. Enable any organization to adopt AI on sensitive enterprise data without exposing original information.",
  "parentOrganization": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
})

const JSONLD_PRODUCT = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LLM Capsule",
  "description": "Enterprise AI enablement data layer and plugin. Enable AI. Protect data. Restore results.",
  "brand": { "@type": "Brand", "name": "CUBIG" },
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does LLM Capsule protect enterprise data during AI processing?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services." },
    },
    {
      "@type": "Question",
      "name": "How is LLM Capsule different from data masking and redaction tools?",
      "acceptedAnswer": { "@type": "Answer", "text": "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically." },
    },
    {
      "@type": "Question",
      "name": "What is the difference between LLM Capsule and prompt security gateways?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prompt security gateways filter at the API level. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward." },
    },
    {
      "@type": "Question",
      "name": "Where can LLM Capsule be deployed?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models." },
    },
    {
      "@type": "Question",
      "name": "What is enterprise AI data protection?",
      "acceptedAnswer": { "@type": "Answer", "text": "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration." },
    },
    {
      "@type": "Question",
      "name": "What certifications does LLM Capsule hold?",
      "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements." },
    },
  ],
})

// ─── Cert card data ────────────────────────────────────────────────────────────
const CERTS = [
  { group: "KISA",        text: "Information Security Fast Track", org: "KISA",                    logo: `${GFX}/cert-kisa.png` },
  { group: "GS",          text: "GS Certification",               org: "TTA",                     logo: `${GFX}/cert-gs.png` },
  { group: "ISO",         text: "ISO/IEC 27001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "ISO",         text: "ISO/IEC 42001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "Award",       text: "Security Innovation Award",       org: "Ministry of Science & ICT", logo: `${GFX}/awards-ministry-of-science-and-ict.jpg` },
  { group: "Award",       text: "Startup World Cup",               org: "Startup World Cup",       logo: `${GFX}/cert-startupworldcup.png` },
  { group: "Award",       text: "Next Rise Global Innovator",      org: "Next Rise",               logo: `${GFX}/awards-NextRise.png` },
  { group: "Award",       text: "T Challenge 2026",                org: "Deutsche Telekom",        logo: `${IMG}/partner-deutsche-telekom.avif` },
  { group: "Award",       text: "AI Medical Innovation",           org: "AI EXPO KOREA",           logo: `${GFX}/awards-koreaia.png` },
  { group: "Recognition", text: "Emerging AI+X Top 100",           org: "Emerging AI+X",           logo: "" },
  { group: "Recognition", text: "Gartner Vendor",                  org: "Gartner",                 logo: `${GFX}/cert-gartner.svg.png` },
]

const PARTNERS = [
  { src: `${IMG}/partner-deutsche-telekom.avif`, alt: "Deutsche Telekom" },
  { src: `${IMG}/partner-kyobo.avif`,            alt: "Kyobo" },
  { src: `${IMG}/partner-claroty.png`,           alt: "Claroty" },
  { src: `${IMG}/partner-eumc.avif`,             alt: "EUMC" },
  { src: `${IMG}/partner-navercloud.avif`,       alt: "Naver Cloud" },
]

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  // Section 1 — Hero
  heroTitle?: string
  heroDescription?: string
  heroBtn1Label?: string
  heroBtn1Href?: string
  heroBtn4Label?: string
  heroBtn4Href?: string
  heroBgImage?: string
  heroScreenshot?: string

  // Section 2 — Trust
  trustHeading?: string
  trustSubheading?: string
  kpi1Number?: string
  kpi1Label?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi3Number?: string
  kpi3Label?: string

  // Section 3 — Five Capabilities
  capHeading?: string
  capSubheading?: string

  // Section 4 — Industry Proof
  industryHeading?: string
  industrySubheading?: string

  // Section 5 — Step Tabs
  tabsHeading?: string
  tabsSubheading?: string
  tabsBgImage?: string
  tabCore1Image?: string
  tabCore2Image?: string
  tabCore3Image?: string
  tabPlus1Image?: string
  tabPlus2Image?: string

  // Section 6 — Case Study
  csHeading?: string
  csSubheading?: string

  // Section 7 — Problem
  probHeading?: string
  probSubheading?: string
  probBannerBgImage?: string

  // Section 8 — Before/After
  baHeading?: string
  baBgImage?: string

  // Section 9 — Diagram
  diagHeading?: string
  diagSubheading?: string
  diagBgImage?: string
  diagImage?: string

  // Section 10 — Performance
  perfHeading?: string
  perfBannerBgImage?: string
  perfKpiBgImage?: string
  perfSubheading?: string
  perf1Number?: string
  perf1Label?: string
  perf2Number?: string
  perf2Label?: string
  perf3Number?: string
  perf3Label?: string
  perf4Number?: string
  perf4Label?: string

  // Section 11 — CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn4Label?: string
  ctaBtn4Href?: string
  ctaBgImage?: string

  // Section 12 — FAQ
  faqHeading?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Index({
  heroTitle = "Use any AI on your real documents — without exposing a single line",
  heroDescription = "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally — AI processes the safe version — then results are restored with your original data. Each organization defines what counts as sensitive.",
  heroBtn1Label = "Request a Demo",
  heroBtn1Href = "/request-a-demo",
  heroBtn4Label = "Available on AWS Marketplace",
  heroBtn4Href = "https://aws.amazon.com/marketplace",
  heroBgImage = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/bg-index-hero.webp",
  heroScreenshot = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/screenshot-index-hero.webp",

  trustHeading = "Trusted by enterprises processing sensitive documents",
  trustSubheading = "across finance, insurance, legal, healthcare, and telecom",
  kpi1Number = "0.12s",
  kpi1Label = "Per Page Processing",
  kpi2Number = "100%",
  kpi2Label = "Restoration Rate",
  kpi3Number = "98%",
  kpi3Label = "Output Similarity",

  capHeading = "Five capabilities that remove every barrier to enterprise AI",
  capSubheading = "Other tools either block AI usage or destroy document context. LLM Capsule solves both — here's how.",

  industryHeading = "Enabling AI adoption across regulated industries where sensitive data was the blocker",
  industrySubheading = "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows — turning blocked projects into production deployments.",

  tabsHeading = "Enterprise AI enablement through a 3+2 architecture",
  tabsSubheading = "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.",
  tabsBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png",
  tabCore1Image = "",
  tabCore2Image = "",
  tabCore3Image = "",
  tabPlus1Image = "",
  tabPlus2Image = "",

  csHeading = "AI-Enabled Enterprise Workflows",
  csSubheading = "LLM Capsule plugs into the most common enterprise AI workflows — from document intake to output delivery, one data layer enables AI adoption on real documents.",

  probHeading = "Enterprise data is never AI-ready by default",
  probSubheading = "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.",
  probBannerBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-sky-lavender.png",

  baHeading = "From blocked AI projects to enabled enterprise AI with usable outputs",
  baBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-smoke-pink.png",

  diagHeading = "A data layer between your enterprise and any LLM",
  diagSubheading = "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.",
  diagBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-wave-teal.png",
  diagImage = "",

  perfHeading = "Measured performance on real enterprise document processing workloads",
  perfBannerBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-lavender.png",
  perfKpiBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png",
  perfSubheading = "These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments.",
  perf1Number = "98.1%",
  perf1Label = "Detection Accuracy",
  perf2Number = "99.14%",
  perf2Label = "Workflow Accuracy",
  perf3Number = "100%",
  perf3Label = "Structured PII",
  perf4Number = "98%",
  perf4Label = "Response Similarity",

  ctaTitle = "See how LLM Capsule enables AI on your enterprise documents",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements.",
  ctaBtn1Label = "Request a Demo",
  ctaBtn1Href = "/request-a-demo",
  ctaBtn4Label = "Available on AWS Marketplace",
  ctaBtn4Href = "https://aws.amazon.com/marketplace",
  ctaBgImage = "https://bgyoo-gif.github.io/homepage-factory/llm-capsule/reference/images/bg-index-cta.webp",

  faqHeading = "Frequently Asked Questions",
}: Props) {
  const [activeTab, setActiveTab] = useState("core1")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const tabs = [
    { id: "core1", label: "Core 1 — Zero Exposure" },
    { id: "core2", label: "Core 2 — Restoration" },
    { id: "core3", label: "Core 3 — Enterprise Context" },
    { id: "plus1", label: "+1 Structure-Preserving" },
    { id: "plus2", label: "+2 Cross-Model" },
  ]

  const tabPanels: Record<string, { title: string; p1: string; p2: string; image: string }> = {
    core1: {
      title: "Zero Exposure",
      image: tabCore1Image,
      p1: "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services.",
      p2: "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service — provider logs are safe, raw data never leaves.",
    },
    core2: {
      title: "Restoration",
      image: tabCore2Image,
      p1: "AI outputs are automatically restored locally — not abstracted, not anonymized, but fully restored with real business data for immediate use.",
      p2: "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows — regulatory reports, legal documents, claim analysis, and internal communications — without any post-processing step. This eliminates the \"manual review loop\" that kills AI ROI.",
    },
    core3: {
      title: "Enterprise Context",
      image: tabCore3Image,
      p1: "Define and control sensitive entities beyond standard PII — project codes, internal IDs, contract terms, and strategic data specific to your organization.",
      p2: "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context — tailored protection for your specific business logic and secrets.",
    },
    plus1: {
      title: "Structure-Preserving",
      image: tabPlus1Image,
      p1: "Tables, diagrams, cross-references, and document hierarchy remain intact — your document layout stays readable to AI throughout the process.",
      p2: "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained.",
    },
    plus2: {
      title: "Cross-Model Execution",
      image: tabPlus2Image,
      p1: "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly — no re-engineering, no vendor lock-in.",
      p2: "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime — zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform.",
    },
  }

  const faqs = [
    {
      q: "How does LLM Capsule protect enterprise data during AI processing?",
      a: "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services — this is what makes it an AI enablement plugin rather than a monitoring or filtering tool.",
    },
    {
      q: "How is LLM Capsule different from data masking and redaction tools?",
      a: "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. AI results from masked documents contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically. This is the fundamental difference between static data anonymization tools and a restorable workflow designed for AI.",
    },
    {
      q: "What is the difference between LLM Capsule and prompt security gateways?",
      a: "Prompt security gateways filter at the API level — they scan prompts for sensitive patterns and block or strip flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward. The two approaches can be complementary, but only a data-layer approach provides end-to-end AI enablement on enterprise data.",
    },
    {
      q: "Where can LLM Capsule be deployed?",
      a: "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type. This flexibility is critical for enterprise AI governance — different data types and regulatory requirements may demand different deployment architectures within a single organization.",
    },
    {
      q: "What is enterprise AI data protection?",
      a: "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration — ensuring zero exposure of original data while enabling full AI workflow adoption. Unlike model-level approaches that block or filter, the data layer plugin transforms data itself to make enterprise AI possible.",
    },
    {
      q: "What certifications does LLM Capsule hold?",
      a: "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements.",
    },
  ]

  const panel = tabPanels[activeTab]

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_ORG }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_PRODUCT }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root img { max-width: 100%; display: block; }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        /* Container Query wrapper */
        .idx-inner { width: 100%; container-type: inline-size; }

        /* Container */
        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        /* Section base */
        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        /* Buttons */
        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
        .idx-btn--md  { padding: 12px 32px; font-size: 16px; }
        .idx-btn--lg  { padding: 16px 48px; font-size: 18px; }
        .idx-btn--primary { background: ${P.gradientBrand}; color: ${P.white}; }
        .idx-btn--primary:hover { opacity: 0.88; }
        .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* Text brand / product */
        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* Section Header */
        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }
        .idx-section-header__desc {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .idx-section-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-header__desc { max-width: 1080px; } }

        /* ── Section 1: Hero ──────────────────────────────────────── */
        .idx-hero-section { padding: 100px 0 0; background-color: ${P.surfaceWhite}; width: 100%; }
        .idx-hero { text-align: center; margin: 0 auto; }
        .idx-hero__title {
          font-family: "DM Sans", sans-serif; font-size: 32px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 12px;
        }
        @container (min-width: 768px)  { .idx-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .idx-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .idx-hero__title { font-size: 64px; } }
        .idx-hero__desc {
          font-size: 18px; color: ${P.textSecondary}; line-height: 1.7;
          max-width: 100%; margin: 0 auto 16px;
        }
        @container (min-width: 1024px) { .idx-hero__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-hero__desc { max-width: 1080px; } }
        .idx-hero__frame {
          margin-top: 32px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${P.neutral100};
          background-image: url('${heroBgImage}');
          background-size: cover; background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .idx-hero__frame { border-radius: 24px 24px 0 0; background-image: none; }
        }
        .idx-hero__screenshot { overflow: hidden; background: ${P.surfaceWhite}; }
        .idx-hero__screenshot img { width: 100%; display: block; }
        .idx-hero__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
          margin-top: 20px; padding-bottom: 64px;
        }
        @container (max-width: 767px) {
          .idx-hero__actions { flex-direction: column; align-items: center; }
          .idx-hero__actions .idx-btn { width: 100%; max-width: 320px; }
        }

        /* ── Section 2: Partner Marquee ───────────────────────────── */
        .idx-partner-grid { overflow: hidden; width: 100%; position: relative; }
        .idx-partner-grid:hover .idx-partner-track { animation-play-state: paused; }
        .idx-partner-track {
          display: flex; align-items: center; gap: 64px;
          animation: idx-marquee 40s linear infinite;
          width: max-content;
        }
        .idx-partner-item { flex-shrink: 0; height: 100px; display: flex; align-items: center; justify-content: center; }
        .idx-partner-item img {
          height: 100%; width: auto; max-width: 160px; object-fit: contain;
          filter: grayscale(1); opacity: 0.65; transition: filter 0.2s, opacity 0.2s;
        }
        .idx-partner-item img:hover { filter: grayscale(0); opacity: 1; }
        @keyframes idx-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @container (max-width: 767px) {
          .idx-partner-item { height: 75px; }
          .idx-partner-item img { max-width: 120px; }
          .idx-partner-track { gap: 48px; animation-duration: 25s; }
        }

        /* KPI Band */
        .idx-kpi-band {
          border-radius: 40px; padding: 48px 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
          justify-items: center; margin: 32px 0;
          background: ${P.gradientBrand};
          background-image: url('${tabsBgImage}');
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-kpi-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.35); z-index: 0;
        }
        .idx-kpi-band > * { position: relative; z-index: 1; }
        .idx-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
        .idx-kpi-band__number {
          font-family: "DM Sans", sans-serif; font-size: 50px;
          font-weight: 700; line-height: 1; color: ${P.white};
        }
        .idx-kpi-band__label { font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.5; }
        @container (max-width: 767px) {
          .idx-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; background-image: none; }
        }

        /* KPI 4col */
        .idx-kpi-band--4col { grid-template-columns: repeat(4, 1fr); }
        @container (max-width: 1023px) { .idx-kpi-band--4col { grid-template-columns: repeat(2, 1fr); } }
        @container (max-width: 767px)  { .idx-kpi-band--4col { grid-template-columns: 1fr; } }

        /* Cert Grid Marquee */
        .idx-cert-grid { width: 100%; overflow: hidden; padding: 32px 0; }
        .idx-cert-track {
          display: flex; gap: 24px; align-items: stretch;
          width: max-content; animation: idx-marquee 40s linear infinite;
        }
        .idx-cert-track:hover { animation-play-state: paused; }
        .idx-cert-card {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 24px; padding: 24px 32px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 8px; flex-shrink: 0; width: 200px;
        }
        .idx-cert-card__group {
          font-family: "Fragment Mono", monospace; font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.08em; color: ${P.brandSecondary};
          margin-bottom: 4px;
        }
        .idx-cert-card__wreath {
          position: relative; width: 160px; height: 120px;
          display: flex; align-items: center; justify-content: center;
        }
        .idx-cert-card__wl, .idx-cert-card__wr {
          position: absolute; top: 0; height: 100%; width: 34%; object-fit: contain;
        }
        .idx-cert-card__wl { left: -6px; object-position: right; }
        .idx-cert-card__wr { right: -6px; object-position: left; }
        .idx-cert-card__text {
          position: relative; z-index: 1; font-size: 14px; font-weight: 700;
          color: ${P.textPrimary}; text-align: center; line-height: 1.2; max-width: 90px;
        }
        .idx-cert-card__org { font-size: 12px; color: ${P.textSecondary}; }
        .idx-cert-card__logo { width: 60px; height: 60px; object-fit: contain; margin-top: auto; margin-bottom: -10px; }
        @container (max-width: 767px) {
          .idx-cert-card { width: 170px; padding: 16px; }
          .idx-cert-card__wreath { width: 130px; height: 96px; }
          .idx-cert-card__text { font-size: 12px; max-width: 72px; }
          .idx-cert-card__logo { width: 48px; height: 48px; }
          .idx-cert-track { gap: 16px; animation-duration: 25s; }
        }

        /* ── Card Grid ────────────────────────────────────────────── */
        .idx-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px)  { .idx-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 768px)  { .idx-card-grid--3col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .idx-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }
        .idx-spaced-top { margin-top: 24px; }

        /* Card */
        .idx-card {
          background-color: ${P.surfaceWhite}; border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .idx-card { padding: 32px; } }
        .idx-card__icon { margin-bottom: 12px; color: ${P.brandSecondary}; }
        .idx-card__badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-radius: 9999px;
          font-size: 12px; font-weight: 600; line-height: 1;
          margin-bottom: 12px; width: fit-content;
        }
        .idx-card__badge--brand { color: ${P.brandSecondary}; border: 1px solid ${P.brandSecondary}; }
        .idx-card__badge--gray  { color: ${P.textSecondary}; border: 1px solid ${P.neutral200}; background-color: ${P.neutral025}; }
        .idx-card__badge--red   { color: ${P.error}; border: 1px solid ${P.error}; }
        .idx-card__title {
          font-size: 24px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; margin-bottom: 12px;
        }
        .idx-card__title--sm { font-size: 18px; }
        .idx-card__desc { font-size: 14px; color: ${P.textSecondary}; line-height: 1.7; flex: 1; }

        /* Bullet */
        .idx-bullet { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 12px; }
        .idx-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .idx-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .idx-bullet--dot  .idx-bullet__icon::before { content: "•"; color: ${P.brandSecondary}; font-weight: 700; font-size: 18px; line-height: 1; }
        .idx-bullet--check .idx-bullet__icon::before { content: "✓"; color: ${P.success}; font-weight: 700; font-size: 16px; line-height: 1; }

        /* Feature Grid */
        .idx-feature-grid {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 40px; padding: 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 48px;
        }
        .idx-feature-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          text-align: center; cursor: pointer; transition: opacity 0.2s; text-decoration: none;
        }
        .idx-feature-item:hover { opacity: 0.7; }
        .idx-feature-item__icon { margin-bottom: 4px; color: ${P.brandSecondary}; }
        .idx-feature-item__title { font-size: 18px; font-weight: 600; color: ${P.textPrimary}; }
        @container (max-width: 767px) { .idx-feature-grid { grid-template-columns: repeat(2, 1fr); padding: 24px; gap: 24px; } }

        /* Center CTA */
        .idx-center-cta { text-align: center; margin-top: 32px; }

        /* Banner Full */
        .idx-banner-full {
          padding: 48px 24px; text-align: center; border-radius: 40px;
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-banner-full::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-banner-full > * { position: relative; z-index: 1; }
        .idx-banner-full p {
          font-size: 16px; color: ${P.textPrimary}; line-height: 1.7;
          max-width: 1080px; margin: 0 auto;
        }
        .idx-banner-full__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px;
        }
        @container (max-width: 767px) { .idx-banner-full { background-image: none !important; } }

        /* Step Tabs */
        .idx-step-tabs__nav {
          display: flex; gap: 0; border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px; overflow-x: auto;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .idx-step-tabs__nav::-webkit-scrollbar { display: none; }
        .idx-step-tabs__tab {
          padding: 12px 24px; font-size: 14px; font-weight: 500;
          color: ${P.textSecondary}; cursor: pointer;
          border-bottom: 2px solid transparent; white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .idx-step-tabs__tab--active {
          color: ${P.brandPrimary}; border-bottom-color: ${P.brandPrimary};
          font-weight: 600;
        }
        .idx-step-tabs__panel {
          display: grid; grid-template-columns: 1fr; gap: 32px;
        }
        @container (min-width: 1024px) { .idx-step-tabs__panel { grid-template-columns: 5fr 7fr; } }
        .idx-step-tabs__panel h3 { margin-bottom: 12px; font-size: 20px; font-weight: 600; }
        .idx-step-tabs__panel p { font-size: 16px; color: ${P.textSecondary}; line-height: 1.7; margin-bottom: 16px; }
        .idx-step-tabs__screenshot {
          background-color: ${P.surfaceLight}; border-radius: 24px;
          border: 1px solid ${P.borderDefault};
          display: flex; align-items: center; justify-content: center; min-height: 280px;
          font-size: 14px; color: ${P.textTertiary};
        }

        /* Section body text */
        .idx-section-body {
          color: ${P.textSecondary}; font-size: 16px; font-weight: 500;
          line-height: 1.7; max-width: 100%; margin-bottom: 24px;
        }
        @container (min-width: 1024px) { .idx-section-body { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-body { max-width: 1080px; } }
        .idx-section-body--center { margin-left: auto; margin-right: auto; text-align: center; }

        /* Table */
        .idx-table-wrap { overflow-x: auto; border-radius: 24px; border: 1px solid ${P.borderDefault}; }
        .idx-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .idx-table thead th {
          font-family: "Fragment Mono", monospace; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${P.textPrimary}; font-weight: 600;
          padding: 12px 16px; border-bottom: 2px solid ${P.borderDefault};
          text-align: left; background-color: ${P.surfaceLight};
        }
        .idx-table tbody td {
          padding: 14px 16px; border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textPrimary}; vertical-align: top; line-height: 1.5;
        }
        .idx-table tbody tr:last-child td { border-bottom: none; }
        .idx-table tbody td:first-child { font-weight: 600; }

        /* Section 8 — bg-img overlay */
        .idx-section--bg-img {
          background-image: url('${baBgImage}');
          background-size: cover; background-position: center;
          position: relative;
        }
        .idx-section--bg-img::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-section--bg-img > * { position: relative; z-index: 1; }
        @container (max-width: 767px) { .idx-section--bg-img { background-image: none; } }

        /* Diagram */
        .idx-diagram__window {
          border: 1px solid ${P.borderDefault}; border-radius: 24px;
          overflow: hidden; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
        }
        .idx-diagram__header {
          background: ${P.gradientArchHeader}; padding: 12px 24px;
          display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__dot { width: 8px; height: 8px; border-radius: 50%; background-color: rgba(255,255,255,0.55); }
        .idx-diagram__header-title { font-size: 14px; font-weight: 600; color: ${P.white}; margin-left: 8px; }
        .idx-diagram__body { padding: 32px; background-color: ${P.surfaceWhite}; overflow-x: auto; }
        .idx-diagram__cols { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 24px; min-width: 700px; }
        .idx-diagram__col-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__col-dot { width: 8px; height: 8px; border-radius: 2px; }
        .idx-diagram__item {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 5px; font-size: 14px; margin-bottom: 8px;
        }
        .idx-diagram__item--internal { background-color: rgba(85,180,93,0.06); color: ${P.textPrimary}; border: 1px solid rgba(85,180,93,0.15); }
        .idx-diagram__item--capsule {
          background-color: ${P.brandPrimary}; color: ${P.white}; font-weight: 600;
          padding: 12px; border-radius: 8px; margin-top: 16px;
        }
        .idx-diagram__item--external { background-color: ${P.neutral025}; color: ${P.textPrimary}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__item--dashed { border-style: dashed; }
        .idx-diagram__flow-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${P.textTertiary}; margin-bottom: 4px; }
        .idx-diagram__flow-step { padding: 12px; border-radius: 8px; margin-bottom: 8px; font-size: 14px; }
        .idx-diagram__flow-step--local { background-color: ${P.surfaceLight}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__flow-step--external { background-color: rgba(86,144,212,0.06); border: 1px solid rgba(86,144,212,0.15); }
        .idx-diagram__flow-step--output { background-color: rgba(14,130,76,0.08); border: 1px solid rgba(14,130,76,0.2); color: ${P.success}; font-weight: 600; }
        .idx-diagram__arrow { text-align: center; color: ${P.textTertiary}; font-size: 14px; padding: 4px 0; }
        .idx-diagram__hl--red   { color: ${P.error}; font-weight: 600; }
        .idx-diagram__hl--brand { color: ${P.brandSecondary}; font-weight: 600; }
        .idx-diagram__hl--green { color: ${P.success}; font-weight: 600; }
        .idx-diagram__boundary-col { display: flex; gap: 16px; }
        .idx-diagram__trust-boundary {
          position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .idx-diagram__trust-boundary::before {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%;
          border-left: 2px dashed ${P.error}; opacity: 0.4;
        }
        .idx-diagram__trust-label {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.error};
          border-radius: 5px; padding: 8px 12px;
          font-size: 9px; font-weight: 700; color: ${P.error};
          text-transform: uppercase; letter-spacing: 0.08em;
          writing-mode: vertical-lr; white-space: nowrap; position: relative; z-index: 1;
        }
        .idx-diagram__ext-inner {
          background-color: ${P.neutral800}; border-radius: 8px; padding: 16px; flex: 1;
        }
        .idx-diagram__ext-inner .idx-diagram__col-title { color: ${P.neutral400}; }
        .idx-diagram__ext-inner .idx-diagram__item--external {
          background-color: ${P.neutral700}; color: ${P.textInverse}; border-color: ${P.neutral500};
        }

        /* Banner perf */
        .idx-perf-banner {
          margin-top: 32px; padding: 32px 24px; text-align: center;
          border-radius: 40px;
          background-image: url('${diagBgImage}');
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-perf-banner::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-perf-banner > * { position: relative; z-index: 1; }
        .idx-perf-banner p { font-size: 16px; color: ${P.textPrimary}; line-height: 1.7; max-width: 1080px; margin: 0 auto; }
        .idx-perf-banner .idx-caption { font-size: 12px; color: ${P.textSecondary}; margin-top: 8px; display: block; }
        @container (max-width: 767px) { .idx-perf-banner { background-image: none; } }

        /* ── CTA Band ─────────────────────────────────────────────── */
        .idx-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-image: url('${ctaBgImage}');
          background-color: ${P.neutral800};
          background-size: cover; background-position: center;
        }
        .idx-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .idx-cta-band > * { position: relative; z-index: 1; }
        .idx-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        .idx-cta-band__title {
          font-family: "DM Sans", sans-serif; font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2; letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .idx-cta-band__title { font-size: 36px; } .idx-cta-band { background-image: none; } }
        @container (min-width: 768px) { .idx-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .idx-cta-band__title { font-size: 50px; } }
        .idx-cta-band__desc { font-size: 18px; color: rgba(255,255,255,0.85); line-height: 1.7; margin: 0; }
        .idx-cta-band__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .idx-cta-band__actions .idx-btn {
          background-color: rgba(255,255,255,0.92); color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6); backdrop-filter: blur(8px);
        }
        .idx-cta-band__actions .idx-btn:hover { background-color: ${P.white}; }
        @container (max-width: 767px) {
          .idx-cta-band__actions { flex-direction: column; align-items: center; }
          .idx-cta-band__actions .idx-btn { width: 100%; max-width: 320px; }
        }

        /* FAQ Accordion */
        .idx-faq-wrap { margin: 0 auto; }
        .idx-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .idx-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden; transition: background-color 0.2s;
        }
        .idx-ac-card:hover { background-color: ${P.neutral025}; }
        .idx-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .idx-ac-card__title { font-size: 18px; font-weight: 500; line-height: 1.2; color: ${P.textPrimary}; }
        .idx-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px; flex-shrink: 0;
          border: 0.5px solid ${P.borderDefault}; background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .idx-ac-card__body {
          padding: 24px; border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary}; line-height: 1.7;
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">

          {/* ── Section 1: Hero ─────────────────────────────────────── */}
          <section id="section-1" className="idx-hero-section">
            <div className="idx-container">
              <div className="idx-hero">
                <h1 className="idx-hero__title">
                  Use any AI on your real documents — <span className="idx-brand">without exposing</span> a single line
                </h1>
                <p className="idx-hero__desc">
                  Your sensitive documents go through <span className="idx-product">LLM Capsule</span> before reaching AI. Confidential names, figures, and terms are replaced locally — AI processes the safe version — then results are restored with your original data. Each organization defines what counts as sensitive.
                </p>
              </div>
              <div className="idx-hero__frame">
                <div className="idx-hero__screenshot">
                  <img
                    src={heroScreenshot}
                    alt="LLM Capsule Dashboard"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="idx-hero__actions">
                <a href={heroBtn1Href} className="idx-btn idx-btn--primary idx-btn--md">{heroBtn1Label}</a>
                <a href={heroBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">{heroBtn4Label}</a>
              </div>
            </div>
          </section>

          {/* ── Section 2: Trust ────────────────────────────────────── */}
          <section id="section-2" className="idx-section">
            <div className="idx-container">

              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  <span className="idx-brand">Trusted</span> by enterprises processing sensitive documents
                </h2>
                <p className="idx-section-header__desc">across finance, insurance, legal, healthcare, and telecom</p>
              </div>

              {/* Partner Marquee */}
              <div className="idx-partner-grid" aria-label="Partners and customers">
                <div className="idx-partner-track">
                  {[...PARTNERS, ...PARTNERS].map((p, i) => (
                    <div key={i} className="idx-partner-item">
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Band 3col */}
              <div className="idx-kpi-band" aria-label="Trust metrics">
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi1Number}</span>
                  <span className="idx-kpi-band__label">{kpi1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi2Number}</span>
                  <span className="idx-kpi-band__label">{kpi2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi3Number}</span>
                  <span className="idx-kpi-band__label">{kpi3Label}</span>
                </div>
              </div>

              {/* Cert Grid Marquee */}
              <div className="idx-cert-grid" aria-label="Certifications and awards">
                <div className="idx-cert-track">
                  {[...CERTS, ...CERTS].map((c, i) => (
                    <div key={i} className="idx-cert-card">
                      <span className="idx-cert-card__group">{c.group}</span>
                      <div className="idx-cert-card__wreath">
                        <img className="idx-cert-card__wl" src={`${GFX}/cert-left.png`} alt="" />
                        <span className="idx-cert-card__text">{c.text}</span>
                        <img className="idx-cert-card__wr" src={`${GFX}/cert-right.png`} alt="" />
                      </div>
                      <span className="idx-cert-card__org">{c.org}</span>
                      {c.logo && <img className="idx-cert-card__logo" src={c.logo} alt={c.org} loading="lazy" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── Section 3: Five Capabilities ────────────────────────── */}
          <section id="section-3" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Five capabilities that remove <span className="idx-brand">every barrier</span> to enterprise AI
                </h2>
                <p className="idx-section-header__desc">
                  Other tools either block AI usage or destroy document context. <span className="idx-product">LLM Capsule</span> solves both — here's how.
                </p>
              </div>

              <div className="idx-card-grid idx-card-grid--3col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="idx-card__title">Your data never leaves</h3>
                  <p className="idx-card__desc">Security team blocking AI adoption? With zero exposure, AI only sees safe placeholders. Even if the LLM provider logs everything, zero enterprise data is exposed.</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                  </div>
                  <h3 className="idx-card__title">Get real results back</h3>
                  <p className="idx-card__desc">AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, and client deliverables. No manual reconstruction.</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  </div>
                  <h3 className="idx-card__title">You define what's sensitive</h3>
                  <p className="idx-card__desc">Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, and any business-specific confidential markers — tailored to your organization.</p>
                </div>
              </div>

              <div className="idx-card-grid idx-card-grid--2col idx-spaced-top">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">+1</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h3 className="idx-card__title">Documents stay readable to AI</h3>
                  <p className="idx-card__desc">Tables, cross-references, and layouts survive the process intact. AI understands full document context — not broken fragments that produce useless outputs.</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">+2</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                  </div>
                  <h3 className="idx-card__title">Use any AI model, anytime</h3>
                  <p className="idx-card__desc">ChatGPT today, Claude tomorrow, on-premise LLM next month. Switch freely — no re-engineering, no vendor lock-in. Protection stays consistent across every model.</p>
                </div>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: `url('${probBannerBgImage}')` }}>
                <p><span className="idx-product">LLM Capsule</span> is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI — making enterprise AI adoption possible without compromise.</p>
                <div className="idx-banner-full__actions">
                  <a href="/product" className="idx-btn idx-btn--secondary idx-btn--md">See Product</a>
                  <a href="/architecture" className="idx-btn idx-btn--secondary idx-btn--md">View Architecture</a>
                  <a href="/resources/learn/what-is-ai-data-capsule" className="idx-btn idx-btn--secondary idx-btn--sm">Read the capsule model</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Industry Proof ────────────────────────────── */}
          <section id="section-4" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Enabling AI adoption across <span className="idx-brand">regulated industries</span> where sensitive data was the blocker
                </h2>
                <p className="idx-section-header__desc">
                  <span className="idx-product">LLM Capsule</span> unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows — turning blocked projects into production deployments.
                </p>
              </div>

              <div className="idx-feature-grid">
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg></div>
                  <span className="idx-feature-item__title">Public Sector</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
                  <span className="idx-feature-item__title">Finance &amp; Insurance</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 0 1 12 6.006a5 5 0 0 1 7.5 6.572"/><path d="M12 6V2"/><path d="M8 2h8"/></svg></div>
                  <span className="idx-feature-item__title">Healthcare</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <span className="idx-feature-item__title">Legal</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg></div>
                  <span className="idx-feature-item__title">Telecom</span>
                </a>
                <a href="/solutions" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="idx-feature-item__title">Network Security</span>
                </a>
              </div>

              <div className="idx-center-cta">
                <a href="/solutions" className="idx-btn idx-btn--secondary idx-btn--md">See industry solutions</a>
              </div>
            </div>
          </section>

          {/* ── Section 5: Step Tabs ─────────────────────────────────── */}
          <section id="section-5" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Enterprise AI enablement through a <span className="idx-brand">3+2 architecture</span>
                </h2>
                <p className="idx-section-header__desc">
                  <span className="idx-product">LLM Capsule</span> enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.
                </p>
              </div>

              <div className="idx-step-tabs__nav">
                {tabs.map(t => (
                  <div
                    key={t.id}
                    className={`idx-step-tabs__tab${activeTab === t.id ? " idx-step-tabs__tab--active" : ""}`}
                    onClick={() => setActiveTab(t.id)}
                  >
                    {t.label}
                  </div>
                ))}
              </div>

              <div className="idx-step-tabs__panel">
                <div>
                  <h3>{panel.title}</h3>
                  <p>{panel.p1}</p>
                  <p>{panel.p2.replace("LLM Capsule", "").includes("LLM Capsule") ? panel.p2 : panel.p2}</p>
                </div>
                <div className="idx-step-tabs__screenshot">
                  {panel.image ? <img src={panel.image} alt={panel.title} style={{ width: "100%", display: "block" }} /> : panel.title}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Case Study Cards ──────────────────────────── */}
          <section id="section-6" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  AI-Enabled <span className="idx-brand">Enterprise Workflows</span>
                </h2>
                <p className="idx-section-header__desc">
                  <span className="idx-product">LLM Capsule</span> plugs into the most common enterprise AI workflows — from document intake to output delivery, one data layer enables AI adoption on real documents.
                </p>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                  <h3 className="idx-card__title">Secure Document Summarization</h3>
                  <p className="idx-card__desc">AI generates executive summaries of sensitive documents — contracts, reports, filings — while all confidential elements are replaced with safe placeholders. Restored summaries contain real names, dates, and figures ready for business use.</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Contracts, reports, and filings protected</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Real names, dates, and figures restored in output</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg></div>
                  <h3 className="idx-card__title">AI Claims Processing</h3>
                  <p className="idx-card__desc">Insurance and financial claims go through <span className="idx-product">LLM Capsule</span> before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems with real policyholder data.</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Classification, damage assessment, fraud detection enabled</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Restored outputs feed directly into claims systems</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <h3 className="idx-card__title">Confidential Contract Review</h3>
                  <p className="idx-card__desc">AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for direct integration into deal management systems.</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Key terms, obligations, and risk clauses extracted</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Real party names, amounts, and references restored</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg></div>
                  <h3 className="idx-card__title">Internal Report Generation</h3>
                  <p className="idx-card__desc">AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports contain real employee names, department data, and metric values.</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Performance reviews, audit findings, compliance summaries</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Real employee names, department data, and metrics restored</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Problem ───────────────────────────────────── */}
          <section id="section-7" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Enterprise data is <span className="idx-brand">never AI-ready</span> by default
                </h2>
                <p className="idx-section-header__desc">Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.</p>
              </div>

              <div className="idx-section-body idx-section-body--center">
                <p>Organizations cannot leverage AI capabilities without first making their data AI-ready.</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>Traditional approaches — masking, redaction, tokenization, and prompt security gateways — were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end. The result is either blocked AI projects or degraded outputs that require extensive manual reconstruction.</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value.</p>
              </div>

              <div className="idx-table-wrap">
                <table className="idx-table">
                  <thead>
                    <tr>
                      <th>Approach</th>
                      <th>Method</th>
                      <th>Limitation</th>
                      <th>AI Workflow Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Masking &amp; Redaction</td>
                      <td>Permanently removes data</td>
                      <td>Destroys context AI needs</td>
                      <td>Unusable [REDACTED] outputs requiring manual reconstruction</td>
                    </tr>
                    <tr>
                      <td>Prompt Security Gateways</td>
                      <td>API-level prompt filtering</td>
                      <td>No document-level protection</td>
                      <td>No output restoration capability</td>
                    </tr>
                    <tr>
                      <td>Synthetic Data Platforms</td>
                      <td>Artificial data generation</td>
                      <td>Training/testing only</td>
                      <td>Cannot replace real documents in live AI workflows</td>
                    </tr>
                    <tr>
                      <td>Security Team Blocks AI</td>
                      <td>Manual approval gate</td>
                      <td>Blocks all AI projects</td>
                      <td>Projects never demonstrate value before being cancelled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: `url('${perfBannerBgImage}')` }}>
                <p><span className="idx-product">LLM Capsule</span> sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs — not at the model layer, not at the prompt layer, but at the data layer where it matters.</p>
                <div className="idx-banner-full__actions">
                  <a href="/architecture" className="idx-btn idx-btn--secondary idx-btn--sm">See how it works</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: Before / After ────────────────────────────── */}
          <section id="section-8" className="idx-section idx-section--bg-img">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  From blocked AI projects to <span className="idx-brand">enabled enterprise AI</span> with usable outputs
                </h2>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--red">WITHOUT LLM CAPSULE</span>
                  <h3 className="idx-card__title idx-card__title--sm">Enterprise AI is blocked or broken</h3>
                  <ul className="idx-bullet idx-bullet--dot">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>AI blocked entirely — security teams reject proposals due to data exposure risk</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Masking and redaction strip context — AI outputs are abstracted and unusable for enterprise workflows</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Manual review workflows persist — documents require human processing because AI cannot be trusted with real data</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Document structure destroyed — flat masking breaks tables, entity relationships, and cross-references</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Low-quality AI output — even when AI is permitted, outputs require extensive manual reconstruction to be usable</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Enterprise AI projects stall in pilot — no path from proof of concept to production deployment</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">WITH LLM CAPSULE</span>
                  <h3 className="idx-card__title idx-card__title--sm">AI adoption enabled on real enterprise data</h3>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>AI enabled on sensitive documents — the data layer handles protection so teams can focus on AI outcomes</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Real documents processed with best-in-class LLMs — ChatGPT, Claude, Gemini, Perplexity, or any LLM API</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Compliance satisfied — zero exposure architecture meets enterprise AI governance requirements automatically</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Restored outputs retain original business context — real names, real figures, real references restored locally</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Tables, layouts, cross-references, and document hierarchy fully preserved through structure-preserving processing</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>98% output similarity with zero data exposure — measured on real enterprise document processing workloads</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Architecture Diagram ─────────────────────── */}
          <section id="section-9" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  A <span className="idx-brand">data layer</span> between your enterprise and any LLM
                </h2>
                <p className="idx-section-header__desc">
                  <span className="idx-product">LLM Capsule</span> sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.
                </p>
              </div>

              {diagImage ? (
                <img src={diagImage} alt="LLM Capsule Architecture Diagram" style={{ width: "100%", display: "block", borderRadius: "16px" }} />
              ) : (
              <div className="idx-diagram__window">
                <div className="idx-diagram__header">
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__header-title">LLM Capsule Architecture</span>
                </div>
                <div className="idx-diagram__body">
                  <div className="idx-diagram__cols">
                    {/* Col 1: Internal */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandAccent }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandAccent }}></span>
                        INTERNAL ENVIRONMENT
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Customer Documents
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        Internal Databases
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                        RAG Pipelines
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        Admin Console
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        Policy Engine
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--capsule" style={{ marginTop: 16 }}>
                        <span className="idx-product">LLM Capsule</span> — Encapsulation &amp; Restoration
                      </div>
                    </div>

                    {/* Col 2: Data Flow */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandSecondary }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandSecondary }}></span>
                        HOW DATA FLOWS THROUGH LLM CAPSULE
                      </div>
                      <div className="idx-diagram__flow-label">STEP 1 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Detection — <span className="idx-diagram__hl--red">"Contract with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-label">STEP 2 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Encapsulation — <span className="idx-diagram__hl--brand">"Contract with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">- - - → External - - - →</div>
                      <div className="idx-diagram__flow-label">STEP 3 — EXTERNAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--external">
                        LLM Processing — <span className="idx-diagram__hl--brand">"The deal with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">← - - - Local - - - ←</div>
                      <div className="idx-diagram__flow-label">STEP 4 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Restoration — <span className="idx-diagram__hl--green">"The deal with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--output">Business-Ready Output</div>
                    </div>

                    {/* Col 3: Trust Boundary + External */}
                    <div className="idx-diagram__boundary-col">
                      <div className="idx-diagram__trust-boundary">
                        <span className="idx-diagram__trust-label">TRUST BOUNDARY</span>
                      </div>
                      <div className="idx-diagram__ext-inner">
                        <div className="idx-diagram__col-title" style={{ color: P.neutral400 }}>
                          <span className="idx-diagram__col-dot" style={{ backgroundColor: P.neutral400 }}></span>
                          EXTERNAL AI SERVICES
                        </div>
                        <div className="idx-diagram__item idx-diagram__item--external">ChatGPT / OpenAI</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Claude / Anthropic</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Gemini / Google</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Perplexity</div>
                        <div className="idx-diagram__item idx-diagram__item--external idx-diagram__item--dashed">Any LLM API</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}

              <div className="idx-center-cta">
                <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">View on AWS Marketplace</a>
              </div>
            </div>
          </section>

          {/* ── Section 10: Performance Metrics ─────────────────────── */}
          <section id="section-10" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  <span className="idx-brand">Measured performance</span> on real enterprise document processing workloads
                </h2>
                <p className="idx-section-header__desc">These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments.</p>
              </div>

              <div
                className="idx-kpi-band idx-kpi-band--4col"
                style={{
                  backgroundImage: `url('${perfKpiBgImage}')`,
                }}
                aria-label="Performance metrics"
              >
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf1Number}</span>
                  <span className="idx-kpi-band__label">{perf1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf2Number}</span>
                  <span className="idx-kpi-band__label">{perf2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf3Number}</span>
                  <span className="idx-kpi-band__label">{perf3Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf4Number}</span>
                  <span className="idx-kpi-band__label">{perf4Label}</span>
                </div>
              </div>

              <div className="idx-perf-banner">
                <p>Enable AI. Protect data. Restore results. Track everything.</p>
                <span className="idx-caption">0.12s processing per 2,200-character document. Tested across finance, healthcare, legal, and public sector workflows</span>
              </div>
            </div>
          </section>

          {/* ── Section 11: CTA Band ─────────────────────────────────── */}
          <div id="section-11" className="idx-cta-band">
            <div className="idx-cta-band__inner">
              <h2 className="idx-cta-band__title">
                See how <span className="idx-product">LLM Capsule</span> enables AI on your enterprise documents
              </h2>
              <p className="idx-cta-band__desc">{ctaDescription}</p>
              <div className="idx-cta-band__actions">
                <a href={ctaBtn1Href} className="idx-btn idx-btn--md">{ctaBtn1Label}</a>
                <a href={ctaBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--md">{ctaBtn4Label}</a>
              </div>
            </div>
          </div>

          {/* ── Section 12: FAQ ──────────────────────────────────────── */}
          <section id="section-12" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  Frequently Asked <span className="idx-brand">Questions</span>
                </h2>
              </div>

              <div className="idx-faq-wrap">
                <div className="idx-ac-list">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="idx-ac-card"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <div className="idx-ac-card__header">
                        <span className="idx-ac-card__title">{faq.q}</span>
                        <span className="idx-ac-card__toggle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <line x1="1" y1="6" x2="11" y2="6" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>
                            {openFaq !== i && <line x1="6" y1="1" x2="6" y2="11" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>}
                          </svg>
                        </span>
                      </div>
                      {openFaq === i && (
                        <div className="idx-ac-card__body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(Index, {
  // Section 1
  heroTitle:       { type: ControlType.String, title: "Hero Title",       defaultValue: "Use any AI on your real documents — without exposing a single line", displayTextArea: true },
  heroDescription: { type: ControlType.String, title: "Hero Description", defaultValue: "Your sensitive documents go through LLM Capsule before reaching AI.", displayTextArea: true },
  heroBtn1Label:   { type: ControlType.String, title: "Hero Btn 1",       defaultValue: "Request a Demo" },
  heroBtn1Href:    { type: ControlType.String, title: "Hero Btn 1 URL",   defaultValue: "/request-a-demo" },
  heroBtn4Label:   { type: ControlType.String, title: "Hero Btn 4",       defaultValue: "Available on AWS Marketplace" },
  heroBtn4Href:    { type: ControlType.String, title: "Hero Btn 4 URL",   defaultValue: "https://aws.amazon.com/marketplace" },
  heroBgImage:     { type: ControlType.Image,  title: "Hero Background Image" },
  heroScreenshot:  { type: ControlType.Image,  title: "Hero Screenshot Image" },

  // Section 2
  trustHeading:    { type: ControlType.String, title: "Trust Heading",    defaultValue: "Trusted by enterprises processing sensitive documents" },
  trustSubheading: { type: ControlType.String, title: "Trust Subheading", defaultValue: "across finance, insurance, legal, healthcare, and telecom" },
  kpi1Number:      { type: ControlType.String, title: "KPI 1 Number",     defaultValue: "0.12s" },
  kpi1Label:       { type: ControlType.String, title: "KPI 1 Label",      defaultValue: "Per Page Processing" },
  kpi2Number:      { type: ControlType.String, title: "KPI 2 Number",     defaultValue: "100%" },
  kpi2Label:       { type: ControlType.String, title: "KPI 2 Label",      defaultValue: "Restoration Rate" },
  kpi3Number:      { type: ControlType.String, title: "KPI 3 Number",     defaultValue: "98%" },
  kpi3Label:       { type: ControlType.String, title: "KPI 3 Label",      defaultValue: "Output Similarity" },

  // Section 10 Performance
  perf1Number:     { type: ControlType.String, title: "Perf 1 Number",    defaultValue: "98.1%" },
  perf1Label:      { type: ControlType.String, title: "Perf 1 Label",     defaultValue: "Detection Accuracy" },
  perf2Number:     { type: ControlType.String, title: "Perf 2 Number",    defaultValue: "99.14%" },
  perf2Label:      { type: ControlType.String, title: "Perf 2 Label",     defaultValue: "Workflow Accuracy" },
  perf3Number:     { type: ControlType.String, title: "Perf 3 Number",    defaultValue: "100%" },
  perf3Label:      { type: ControlType.String, title: "Perf 3 Label",     defaultValue: "Structured PII" },
  perf4Number:     { type: ControlType.String, title: "Perf 4 Number",    defaultValue: "98%" },
  perf4Label:      { type: ControlType.String, title: "Perf 4 Label",     defaultValue: "Response Similarity" },

  // Background Images
  tabsBgImage:        { type: ControlType.Image, title: "Step Tabs BG Image" },
  tabCore1Image:      { type: ControlType.Image, title: "Tab Core1 Image (Zero Exposure)" },
  tabCore2Image:      { type: ControlType.Image, title: "Tab Core2 Image (Restoration)" },
  tabCore3Image:      { type: ControlType.Image, title: "Tab Core3 Image (Enterprise Context)" },
  tabPlus1Image:      { type: ControlType.Image, title: "Tab +1 Image (Structure-Preserving)" },
  tabPlus2Image:      { type: ControlType.Image, title: "Tab +2 Image (Cross-Model)" },
  probBannerBgImage:  { type: ControlType.Image, title: "Problem Banner BG Image" },
  baBgImage:          { type: ControlType.Image, title: "Before/After BG Image" },
  diagBgImage:        { type: ControlType.Image, title: "Diagram BG Image" },
  diagImage:          { type: ControlType.Image, title: "Diagram Image (replaces HTML diagram)" },
  perfBannerBgImage:  { type: ControlType.Image, title: "Performance Banner BG Image" },
  perfKpiBgImage:     { type: ControlType.Image, title: "Performance KPI BG Image" },
  ctaBgImage:         { type: ControlType.Image, title: "CTA BG Image" },

  // Section 11 CTA
  ctaTitle:        { type: ControlType.String, title: "CTA Title",        defaultValue: "See how LLM Capsule enables AI on your enterprise documents", displayTextArea: true },
  ctaDescription:  { type: ControlType.String, title: "CTA Description",  defaultValue: "Bring your documents, deployment constraints, and evaluation criteria.", displayTextArea: true },
  ctaBtn1Label:    { type: ControlType.String, title: "CTA Btn 1",        defaultValue: "Request a Demo" },
  ctaBtn1Href:     { type: ControlType.String, title: "CTA Btn 1 URL",    defaultValue: "/request-a-demo" },
  ctaBtn4Label:    { type: ControlType.String, title: "CTA Btn 4",        defaultValue: "Available on AWS Marketplace" },
  ctaBtn4Href:     { type: ControlType.String, title: "CTA Btn 4 URL",    defaultValue: "https://aws.amazon.com/marketplace" },

  // Section 12
  faqHeading:      { type: ControlType.String, title: "FAQ Heading",      defaultValue: "Frequently Asked Questions" },
})
