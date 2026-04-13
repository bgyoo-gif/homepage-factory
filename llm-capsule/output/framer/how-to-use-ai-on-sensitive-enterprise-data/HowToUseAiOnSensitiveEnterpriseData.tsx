import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ============================================================
// Palette Constants — never hardcode colors outside this object
// ============================================================
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
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",

  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientViolet: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.png')",
}

// ============================================================
// Props Interface
// ============================================================
interface Props {
  // Hero
  heroTitle?: string
  heroDescription?: string

  // Section 3 — The Challenge
  challengeTitle?: string
  challengeParagraph1?: string
  challengeParagraph2?: string

  // Section 4 — Requirements
  requirementsTitle?: string
  requirementsIntro?: string
  requirement1?: string
  requirement2?: string
  requirement3?: string

  // Section 5 — How LLM Capsule Enables This
  howTitle?: string
  howIntro?: string
  howStep1?: string
  howStep2?: string
  howStep3?: string
  howStep4?: string
  howBannerText?: string

  // Section 6 — Use Cases
  useCasesTitle?: string
  useCase1Title?: string
  useCase1Description?: string
  useCase2Title?: string
  useCase2Description?: string
  useCase3Title?: string
  useCase3Description?: string
  useCase4Title?: string
  useCase4Description?: string

  // Section 7 — FAQ
  faqTitle?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  faq3Question?: string
  faq3Answer?: string
  faq4Question?: string
  faq4Answer?: string

  // Section 8 — Related
  relatedTitle?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string

  // Section 9 — CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaButton1Label?: string
  ctaButton1Href?: string
  ctaButton2Label?: string
  ctaButton2Href?: string
  ctaFootnote?: string
}

// ============================================================
// JSON-LD structured data
// ============================================================
const JSON_LD_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "How to Use AI on Sensitive Enterprise Data", "item": "https://llmcapsule.ai/resources/learn/how-to-use-ai-on-sensitive-enterprise-data" },
  ],
})

const JSON_LD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can enterprises use AI on sensitive data safely?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data." },
    },
    {
      "@type": "Question",
      "name": "What types of enterprise data can LLM Capsule handle?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications." },
    },
  ],
})

// ============================================================
// SVG Icons
// ============================================================
const IconMonitor = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/><path d="M12 17v4"/>
  </svg>
)
const IconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
  </svg>
)
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16"/><path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8"/><path d="M4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8"/>
  </svg>
)
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)
const IconBox = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
)
const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
)
const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
)
const IconArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ============================================================
// Component
// ============================================================
export default function HowToUseAiOnSensitiveEnterpriseData({
  // Hero
  heroTitle = "How to Use AI on Sensitive Enterprise Data",
  heroDescription = "Learn how to use large language models on sensitive enterprise data without exposing original documents. Encapsulate locally, process safely, restore usable outputs.",

  // Challenge
  challengeTitle = "The Challenge",
  challengeParagraph1 = "Enterprises generate massive volumes of sensitive documents — contracts, financial reports, medical records, legal filings, HR communications, and internal strategy memos. These documents contain exactly the information that AI could transform: extracting key clauses, summarizing quarterly results, classifying patient records, or translating technical specifications.",
  challengeParagraph2 = "But sending this data to external AI services means exposing it. Every prompt, every document, every query transmitted to an LLM API becomes visible to the AI provider's infrastructure. For regulated industries and security-conscious organizations, this creates a fundamental conflict: the data that benefits most from AI is the data that cannot be exposed.",

  // Requirements
  requirementsTitle = "The Requirements for Secure Enterprise AI",
  requirementsIntro = "Secure LLM usage on sensitive enterprise data requires three capabilities working together:",
  requirement1 = "1. Pre-processing protection. Sensitive data must be identified and replaced before it leaves the enterprise. This is not simple keyword matching — enterprise documents contain context-dependent sensitivity. A name in a contract carries different risk than the same name in a public directory. Structure-preserving processing ensures the document's semantic relationships remain intact for AI comprehension.",
  requirement2 = "2. Model-agnostic processing. The AI enablement layer must work with any LLM — not just one provider's API. Enterprises use multiple AI models for different tasks. The AI enablement data layer must operate independently of the model layer.",
  requirement3 = "3. Output Restoration (Restoration). AI results are restored locally. Without this, AI outputs are abstracted and unusable. Enterprise AI enablement requires that outputs contain real names, real account numbers, and real references — restored locally after AI processing completes.",

  // How LLM Capsule Enables This
  howTitle = "How LLM Capsule Enables This",
  howIntro = "LLM Capsule operates as an AI enablement data layer between enterprise data systems and external AI services. The process follows four steps:",
  howStep1 = "Step 1: Sensitive Detection. LLM Capsule automatically identifies sensitive elements within enterprise documents — names, account numbers, dates, financial figures, project codes, and organization-defined entities beyond standard PII.",
  howStep2 = "Step 2: Local Encapsulation. Detected sensitive elements are replaced with structure-preserving tokens locally. The document retains its full semantic structure — tables, references, hierarchies — so AI models can process it accurately. The mapping between original values and tokens is stored locally and never transmitted.",
  howStep3 = "Step 3: AI Processing. Only the encapsulated document crosses the trust boundary. The AI provider receives a structurally complete document with protected values. It can summarize, extract, classify, and analyze — but never sees the original sensitive data.",
  howStep4 = "Step 4: Local Restoration. AI outputs are restored locally using the stored mapping. Real names, figures, dates, and references return automatically. The result is a business-ready document that can be used directly in enterprise workflows without manual post-processing.",
  howBannerText = "Key principle: Your data stays on-premise. Only capsules travel. Outputs come back complete.",

  // Use Cases
  useCasesTitle = "Enterprise Use Cases",
  useCase1Title = "Financial Services",
  useCase1Description = "Banks and insurance companies process loan applications, claims documents, and regulatory filings through AI — with all customer PII, account numbers, and financial figures encapsulated before transmission.",
  useCase2Title = "Healthcare & Legal",
  useCase2Description = "Hospitals and law firms use AI for medical record summarization, contract analysis, and case research — with patient identifiers, client names, and privileged information protected throughout.",
  useCase3Title = "Defense & Public Sector",
  useCase3Description = "Government agencies and defense organizations draft confidential documents using AI — with classified terms, operation names, and tactical data encapsulated in air-gapped environments.",
  useCase4Title = "Telecom & Security",
  useCase4Description = "Infrastructure companies analyze vulnerability logs and network data with AI — with sensitive IP addresses, topology details, and security findings protected from external exposure.",

  // FAQ
  faqTitle = "FAQ",
  faq1Question = "Can enterprises use AI on sensitive data safely?",
  faq1Answer = "Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data.",
  faq2Question = "What types of enterprise data can LLM Capsule handle?",
  faq2Answer = "LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications.",
  faq3Question = "Does LLM Capsule work with any AI model?",
  faq3Answer = "Yes. LLM Capsule is model-agnostic. It works with ChatGPT, Claude, Gemini, Perplexity, or any LLM API because it operates at the data layer before transmission.",
  faq4Question = "What happens to AI outputs after processing?",
  faq4Answer = "AI outputs are automatically restored locally. Original names, figures, dates, and references are mapped back into the AI results, producing business-ready documents without manual post-processing.",

  // Related
  relatedTitle = "Related",
  related1Title = "Product Overview",
  related1Href = "product.html",
  related2Title = "Architecture",
  related2Href = "architecture.html",
  related3Title = "Trust & Compliance",
  related3Href = "trust.html",
  related4Title = "Request a Demo",
  related4Href = "request-pov.html",

  // CTA
  ctaTitle = "Use AI on Your Sensitive Data with LLM Capsule",
  ctaDescription = "Enable enterprise AI on real documents without exposing sensitive data. Encapsulate locally, process safely, restore completely.",
  ctaButton1Label = "Request a Demo",
  ctaButton1Href = "request-pov.html",
  ctaButton2Label = "View Product",
  ctaButton2Href = "product.html",
  ctaFootnote = "Enterprise AI Enablement by CUBIG",
}: Props) {

  // FAQ accordion state — track which items are open
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({ 0: true })

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
    { question: faq4Question, answer: faq4Answer },
  ]

  const useCases = [
    { icon: <IconMonitor />, title: useCase1Title, description: useCase1Description },
    { icon: <IconCheck />,   title: useCase2Title, description: useCase2Description },
    { icon: <IconShield />,  title: useCase3Title, description: useCase3Description },
    { icon: <IconGlobe />,   title: useCase4Title, description: useCase4Description },
  ]

  const relatedLinks = [
    { icon: <IconBox />,        title: related1Title, href: related1Href },
    { icon: <IconLayers />,     title: related2Title, href: related2Href },
    { icon: <IconShieldCheck />,title: related3Title, href: related3Href },
    { icon: <IconArrow />,      title: related4Title, href: related4Href },
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_BREADCRUMB }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_FAQ }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .htua-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
          width: 100%;
          overflow-x: hidden;
        }

        /* ---- Wrapper with container-type ---- */
        .htua-wrap {
          width: 100%;
          container-type: inline-size;
          container-name: page;
        }

        /* ---- Article container: max-width 1080px ---- */
        .htua-article {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @container page (min-width: 768px)  { .htua-article { padding: 0 32px; } }
        @container page (min-width: 1024px) { .htua-article { padding: 0 32px; } }
        @container page (min-width: 1440px) { .htua-article { padding: 0 120px; max-width: 1440px; } }

        /* ---- Full-width container: max-width 1440px ---- */
        .htua-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
        }
        @container page (min-width: 768px)  { .htua-container { padding: 0 32px; } }
        @container page (min-width: 1024px) { .htua-container { padding: 0 32px; } }
        @container page (min-width: 1440px) { .htua-container { padding: 0 120px; max-width: 1440px; } }

        /* ---- Sections ---- */
        .htua-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${P.surfaceWhite};
        }
        .htua-section--hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${P.surfaceWhite};
        }
        .htua-section--body {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container page (min-width: 768px)  { .htua-section--body { padding: 60px 0; } }
        @container page (min-width: 1440px) { .htua-section--body { padding: 60px 0; } }

        /* ---- Hero Typography ---- */
        .htua-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container page (min-width: 768px)  { .htua-hero-title { font-size: 40px; } }
        @container page (min-width: 1024px) { .htua-hero-title { font-size: 48px; } }
        @container page (min-width: 1440px) { .htua-hero-title { font-size: 64px; } }

        .htua-hero-desc {
          font-size: 18px;
          color: ${P.textSecondary};
          line-height: 1.7;
        }

        /* ---- Article Section Header ---- */
        .htua-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .htua-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container page (min-width: 768px)  { .htua-section-header h2 { font-size: 22px; } }
        @container page (min-width: 1024px) { .htua-section-header h2 { font-size: 24px; } }
        @container page (min-width: 1440px) { .htua-section-header h2 { font-size: 28px; } }

        /* ---- Text Brand / Product ---- */
        .htua-brand { color: ${P.brandSecondary}; }
        .htua-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* ---- Body Paragraphs ---- */
        .htua-para {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .htua-para:last-child { margin-bottom: 0; }

        /* ---- Bullet List ---- */
        .htua-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .htua-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: ${P.textPrimary};
        }
        .htua-bullet-dot {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .htua-bullet-dot::before { content: "•"; }

        /* ---- Banner ---- */
        .htua-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          margin-top: 24px;
          color: ${P.textPrimary};
        }

        /* ---- Card Grid ---- */
        .htua-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container page (min-width: 768px) { .htua-card-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ---- Card ---- */
        .htua-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container page (min-width: 1440px) { .htua-card { padding: 32px; } }

        .htua-card-para {
          font-size: 16px;
          line-height: 1.7;
          color: ${P.textSecondary};
          margin: 0;
        }

        /* ---- Card Icon Row ---- */
        .htua-card-icon-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 0;
        }
        .htua-card-icon-color { color: ${P.brandSecondary}; flex-shrink: 0; }
        .htua-card-icon-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }

        /* ---- Dark Card ---- */
        .htua-dark-card {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          color: ${P.textInverse};
          text-decoration: none;
          transition: background-color 0.2s;
          cursor: pointer;
        }
        .htua-dark-card:hover { background-color: ${P.neutral800}; }
        .htua-dark-card-icon { flex-shrink: 0; color: ${P.brandSecondary}; }
        .htua-dark-card-title {
          font-size: 16px;
          font-weight: 600;
          color: ${P.textInverse};
        }

        /* ---- Section Title Icon Row ---- */
        .htua-title-icon-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .htua-title-icon-color { color: ${P.brandSecondary}; flex-shrink: 0; }
        .htua-title-icon-text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }

        /* ---- FAQ Accordion ---- */
        .htua-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .htua-ac-card {
          border: 1px solid ${P.borderDefault};
          border-radius: 8px;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .htua-ac-card:hover { background-color: ${P.neutral025}; }
        .htua-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .htua-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${P.textPrimary};
        }
        .htua-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
        }
        .htua-ac-toggle-bar {
          position: absolute;
          background-color: ${P.textTertiary};
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .htua-ac-toggle-h { width: 10px; height: 1.5px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .htua-ac-toggle-v { width: 1.5px; height: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .htua-ac-body {
          padding: 24px;
          border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
        }

        /* ---- CTA Band — full width, no max-width ---- */
        .htua-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${P.neutral800};
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.png');
          background-size: cover;
          background-position: center;
        }
        @container page (min-width: 768px)  { .htua-cta-band { padding: 100px 32px; } }
        @container page (min-width: 1440px) { .htua-cta-band { padding: 120px 120px; background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.png'); } }
        .htua-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .htua-cta-band > * { position: relative; z-index: 1; }
        .htua-cta-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        @container page (min-width: 1024px) { .htua-cta-inner { max-width: 720px; } }
        @container page (min-width: 1440px) { .htua-cta-inner { max-width: 1080px; } }
        .htua-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        @container page (max-width: 767px) { .htua-cta-title { font-size: 36px; } }
        @container page (min-width: 1440px) { .htua-cta-title { font-size: 50px; } }
        .htua-cta-desc {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
        }
        .htua-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .htua-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          padding: 16px 48px;
          font-size: 18px;
          font-weight: 500;
          font-family: "DM Sans", sans-serif;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-color: rgba(255, 255, 255, 0.92);
          color: ${P.textPrimary};
          backdrop-filter: blur(8px);
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s;
        }
        .htua-cta-btn:hover { background-color: ${P.white}; }
        .htua-cta-footnote {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.70);
          margin-top: 8px;
        }

        /* ---- Spacing utility ---- */
        .htua-mt { margin-top: 24px; }
      `}</style>

      <main className="htua-root">
        <div className="htua-wrap">

          {/* ===================================================
              Section 1: Hero
          =================================================== */}
          <section id="section-hero" className="htua-section--hero">
            <div className="htua-article">
              <h1 className="htua-hero-title">{heroTitle}</h1>
              <p className="htua-hero-desc">{heroDescription}</p>
            </div>
          </section>

          {/* ===================================================
              Section 2: Screenshot Frame placeholder (no image per spec)
              Rendered as a styled visual divider area
          =================================================== */}
          <section id="section-2" className="htua-section--body">
            <div className="htua-article">
              <div style={{
                borderRadius: "40px 40px 0 0",
                padding: "32px 32px 0",
                backgroundColor: P.neutral050,
                backgroundImage: `url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  backgroundColor: P.surfaceWhite,
                  borderRadius: "8px 8px 0 0",
                  overflow: "hidden",
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "48px 24px",
                }}>
                  <p style={{ fontSize: "14px", color: P.textTertiary, textAlign: "center", lineHeight: 1.7 }}>
                    Secure Enterprise AI — Sensitive documents encapsulated locally, processed by AI, outputs restored with original data
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================
              Section 3: The Challenge
          =================================================== */}
          <section id="section-3" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-section-header">
                <h2>The <span className="htua-brand">{challengeTitle.replace("The ", "")}</span></h2>
              </div>
              <p className="htua-para">{challengeParagraph1}</p>
              <p className="htua-para">{challengeParagraph2}</p>
            </div>
          </section>

          {/* ===================================================
              Section 4: The Requirements for Secure Enterprise AI
          =================================================== */}
          <section id="section-4" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-section-header">
                <h2>The Requirements for <span className="htua-brand">Secure Enterprise AI</span></h2>
              </div>
              <p className="htua-para">{requirementsIntro}</p>
              <ul className="htua-bullet-list">
                <li className="htua-bullet-item">
                  <span className="htua-bullet-dot" aria-hidden="true"></span>
                  <span><strong>1. Pre-processing protection.</strong> {requirement1.replace(/^1\. Pre-processing protection\. /, "")}</span>
                </li>
                <li className="htua-bullet-item">
                  <span className="htua-bullet-dot" aria-hidden="true"></span>
                  <span><strong>2. Model-agnostic processing.</strong> {requirement2.replace(/^2\. Model-agnostic processing\. /, "")}</span>
                </li>
                <li className="htua-bullet-item">
                  <span className="htua-bullet-dot" aria-hidden="true"></span>
                  <span><strong>3. Output Restoration (Restoration).</strong> {requirement3.replace(/^3\. Output Restoration \(Restoration\)\. /, "")}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ===================================================
              Section 5: How LLM Capsule Enables This
          =================================================== */}
          <section id="section-5" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-section-header">
                <h2>How <span className="htua-product">LLM Capsule</span> Enables This</h2>
              </div>
              <p className="htua-para">
                <span className="htua-product">LLM Capsule</span> {howIntro.replace(/^LLM Capsule /, "")}
              </p>
              <p className="htua-para"><strong>Step 1: Sensitive Detection.</strong> {howStep1.replace(/^Step 1: Sensitive Detection\. /, "").replace(/^LLM Capsule /, "")}</p>
              <p className="htua-para"><strong>Step 2: Local Encapsulation.</strong> {howStep2.replace(/^Step 2: Local Encapsulation\. /, "")}</p>
              <p className="htua-para"><strong>Step 3: AI Processing.</strong> {howStep3.replace(/^Step 3: AI Processing\. /, "")}</p>
              <p className="htua-para"><strong>Step 4: Local Restoration.</strong> {howStep4.replace(/^Step 4: Local Restoration\. /, "")}</p>
              <div className="htua-banner">
                <strong>Key principle:</strong> {howBannerText.replace(/^Key principle: /, "")}
              </div>
            </div>
          </section>

          {/* ===================================================
              Section 6: Enterprise Use Cases
          =================================================== */}
          <section id="section-6" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-section-header">
                <h2>Enterprise <span className="htua-brand">Use Cases</span></h2>
              </div>
              <div className="htua-card-grid">
                {useCases.map((uc, i) => (
                  <div className="htua-card" key={i}>
                    <div className="htua-card-icon-row">
                      <span className="htua-card-icon-color">{uc.icon}</span>
                      <span className="htua-card-icon-title">{uc.title}</span>
                    </div>
                    <p className="htua-card-para">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================
              Section 7: FAQ
          =================================================== */}
          <section id="section-7" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-section-header">
                <h2><span className="htua-brand">{faqTitle}</span></h2>
              </div>
              <div className="htua-ac-list">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="htua-ac-card"
                    onClick={() => toggleFaq(i)}
                  >
                    <div className="htua-ac-header">
                      <span className="htua-ac-title">{faq.question}</span>
                      <span className="htua-ac-toggle">
                        <span
                          className="htua-ac-toggle-bar htua-ac-toggle-h"
                          style={{ position: "absolute", backgroundColor: P.textTertiary, borderRadius: "1px", width: "10px", height: "1.5px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                        />
                        <span
                          className="htua-ac-toggle-bar htua-ac-toggle-v"
                          style={{ position: "absolute", backgroundColor: P.textTertiary, borderRadius: "1px", width: "1.5px", height: "10px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: openFaq[i] ? 0 : 1, transition: "opacity 0.2s" }}
                        />
                      </span>
                    </div>
                    {openFaq[i] && (
                      <div className="htua-ac-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================
              Section 8: Related Pages
          =================================================== */}
          <section id="section-8" className="htua-section--body">
            <div className="htua-article">
              <div className="htua-title-icon-row">
                <span className="htua-title-icon-color"><IconLink /></span>
                <span className="htua-title-icon-text">{relatedTitle}</span>
              </div>
              <div className="htua-card-grid">
                {relatedLinks.map((link, i) => (
                  <a key={i} href={link.href} className="htua-dark-card">
                    <span className="htua-dark-card-icon">{link.icon}</span>
                    <span className="htua-dark-card-title">{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================
              Section 9: CTA Band — full-width, no container max-width
          =================================================== */}
          <section id="section-cta" className="htua-cta-band">
            <div className="htua-cta-inner">
              <h2 className="htua-cta-title">
                {ctaTitle.replace("LLM Capsule", "")}
                <span className="htua-product">LLM Capsule</span>
              </h2>
              <p className="htua-cta-desc">{ctaDescription}</p>
              <div className="htua-cta-actions">
                <a href={ctaButton1Href} className="htua-cta-btn">{ctaButton1Label}</a>
                <a href={ctaButton2Href} className="htua-cta-btn">{ctaButton2Label}</a>
              </div>
              <p className="htua-cta-footnote">{ctaFootnote}</p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}

// ============================================================
// Property Controls
// ============================================================
addPropertyControls(HowToUseAiOnSensitiveEnterpriseData, {
  // Hero
  heroTitle: { type: ControlType.String, title: "Hero Title", defaultValue: "How to Use AI on Sensitive Enterprise Data" },
  heroDescription: { type: ControlType.String, title: "Hero Description", defaultValue: "Learn how to use large language models on sensitive enterprise data without exposing original documents. Encapsulate locally, process safely, restore usable outputs." },

  // Challenge
  challengeTitle: { type: ControlType.String, title: "Challenge — Title", defaultValue: "The Challenge" },
  challengeParagraph1: { type: ControlType.String, title: "Challenge — Para 1", defaultValue: "Enterprises generate massive volumes of sensitive documents — contracts, financial reports, medical records, legal filings, HR communications, and internal strategy memos. These documents contain exactly the information that AI could transform: extracting key clauses, summarizing quarterly results, classifying patient records, or translating technical specifications." },
  challengeParagraph2: { type: ControlType.String, title: "Challenge — Para 2", defaultValue: "But sending this data to external AI services means exposing it. Every prompt, every document, every query transmitted to an LLM API becomes visible to the AI provider's infrastructure. For regulated industries and security-conscious organizations, this creates a fundamental conflict: the data that benefits most from AI is the data that cannot be exposed." },

  // Requirements
  requirementsTitle: { type: ControlType.String, title: "Requirements — Title", defaultValue: "The Requirements for Secure Enterprise AI" },
  requirementsIntro: { type: ControlType.String, title: "Requirements — Intro", defaultValue: "Secure LLM usage on sensitive enterprise data requires three capabilities working together:" },
  requirement1: { type: ControlType.String, title: "Requirement 1", defaultValue: "1. Pre-processing protection. Sensitive data must be identified and replaced before it leaves the enterprise. This is not simple keyword matching — enterprise documents contain context-dependent sensitivity. A name in a contract carries different risk than the same name in a public directory. Structure-preserving processing ensures the document's semantic relationships remain intact for AI comprehension." },
  requirement2: { type: ControlType.String, title: "Requirement 2", defaultValue: "2. Model-agnostic processing. The AI enablement layer must work with any LLM — not just one provider's API. Enterprises use multiple AI models for different tasks. The AI enablement data layer must operate independently of the model layer." },
  requirement3: { type: ControlType.String, title: "Requirement 3", defaultValue: "3. Output Restoration (Restoration). AI results are restored locally. Without this, AI outputs are abstracted and unusable. Enterprise AI enablement requires that outputs contain real names, real account numbers, and real references — restored locally after AI processing completes." },

  // How
  howTitle: { type: ControlType.String, title: "How — Title", defaultValue: "How LLM Capsule Enables This" },
  howIntro: { type: ControlType.String, title: "How — Intro", defaultValue: "LLM Capsule operates as an AI enablement data layer between enterprise data systems and external AI services. The process follows four steps:" },
  howStep1: { type: ControlType.String, title: "How — Step 1", defaultValue: "Step 1: Sensitive Detection. LLM Capsule automatically identifies sensitive elements within enterprise documents — names, account numbers, dates, financial figures, project codes, and organization-defined entities beyond standard PII." },
  howStep2: { type: ControlType.String, title: "How — Step 2", defaultValue: "Step 2: Local Encapsulation. Detected sensitive elements are replaced with structure-preserving tokens locally. The document retains its full semantic structure — tables, references, hierarchies — so AI models can process it accurately. The mapping between original values and tokens is stored locally and never transmitted." },
  howStep3: { type: ControlType.String, title: "How — Step 3", defaultValue: "Step 3: AI Processing. Only the encapsulated document crosses the trust boundary. The AI provider receives a structurally complete document with protected values. It can summarize, extract, classify, and analyze — but never sees the original sensitive data." },
  howStep4: { type: ControlType.String, title: "How — Step 4", defaultValue: "Step 4: Local Restoration. AI outputs are restored locally using the stored mapping. Real names, figures, dates, and references return automatically. The result is a business-ready document that can be used directly in enterprise workflows without manual post-processing." },
  howBannerText: { type: ControlType.String, title: "How — Banner", defaultValue: "Key principle: Your data stays on-premise. Only capsules travel. Outputs come back complete." },

  // Use Cases
  useCasesTitle: { type: ControlType.String, title: "Use Cases — Title", defaultValue: "Enterprise Use Cases" },
  useCase1Title: { type: ControlType.String, title: "Use Case 1 — Title", defaultValue: "Financial Services" },
  useCase1Description: { type: ControlType.String, title: "Use Case 1 — Description", defaultValue: "Banks and insurance companies process loan applications, claims documents, and regulatory filings through AI — with all customer PII, account numbers, and financial figures encapsulated before transmission." },
  useCase2Title: { type: ControlType.String, title: "Use Case 2 — Title", defaultValue: "Healthcare & Legal" },
  useCase2Description: { type: ControlType.String, title: "Use Case 2 — Description", defaultValue: "Hospitals and law firms use AI for medical record summarization, contract analysis, and case research — with patient identifiers, client names, and privileged information protected throughout." },
  useCase3Title: { type: ControlType.String, title: "Use Case 3 — Title", defaultValue: "Defense & Public Sector" },
  useCase3Description: { type: ControlType.String, title: "Use Case 3 — Description", defaultValue: "Government agencies and defense organizations draft confidential documents using AI — with classified terms, operation names, and tactical data encapsulated in air-gapped environments." },
  useCase4Title: { type: ControlType.String, title: "Use Case 4 — Title", defaultValue: "Telecom & Security" },
  useCase4Description: { type: ControlType.String, title: "Use Case 4 — Description", defaultValue: "Infrastructure companies analyze vulnerability logs and network data with AI — with sensitive IP addresses, topology details, and security findings protected from external exposure." },

  // FAQ
  faqTitle: { type: ControlType.String, title: "FAQ — Title", defaultValue: "FAQ" },
  faq1Question: { type: ControlType.String, title: "FAQ 1 — Question", defaultValue: "Can enterprises use AI on sensitive data safely?" },
  faq1Answer: { type: ControlType.String, title: "FAQ 1 — Answer", defaultValue: "Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data." },
  faq2Question: { type: ControlType.String, title: "FAQ 2 — Question", defaultValue: "What types of enterprise data can LLM Capsule handle?" },
  faq2Answer: { type: ControlType.String, title: "FAQ 2 — Answer", defaultValue: "LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications." },
  faq3Question: { type: ControlType.String, title: "FAQ 3 — Question", defaultValue: "Does LLM Capsule work with any AI model?" },
  faq3Answer: { type: ControlType.String, title: "FAQ 3 — Answer", defaultValue: "Yes. LLM Capsule is model-agnostic. It works with ChatGPT, Claude, Gemini, Perplexity, or any LLM API because it operates at the data layer before transmission." },
  faq4Question: { type: ControlType.String, title: "FAQ 4 — Question", defaultValue: "What happens to AI outputs after processing?" },
  faq4Answer: { type: ControlType.String, title: "FAQ 4 — Answer", defaultValue: "AI outputs are automatically restored locally. Original names, figures, dates, and references are mapped back into the AI results, producing business-ready documents without manual post-processing." },

  // Related
  relatedTitle: { type: ControlType.String, title: "Related — Title", defaultValue: "Related" },
  related1Title: { type: ControlType.String, title: "Related 1 — Title", defaultValue: "Product Overview" },
  related1Href: { type: ControlType.String, title: "Related 1 — Href", defaultValue: "product.html" },
  related2Title: { type: ControlType.String, title: "Related 2 — Title", defaultValue: "Architecture" },
  related2Href: { type: ControlType.String, title: "Related 2 — Href", defaultValue: "architecture.html" },
  related3Title: { type: ControlType.String, title: "Related 3 — Title", defaultValue: "Trust & Compliance" },
  related3Href: { type: ControlType.String, title: "Related 3 — Href", defaultValue: "trust.html" },
  related4Title: { type: ControlType.String, title: "Related 4 — Title", defaultValue: "Request a Demo" },
  related4Href: { type: ControlType.String, title: "Related 4 — Href", defaultValue: "request-pov.html" },

  // CTA
  ctaTitle: { type: ControlType.String, title: "CTA — Title", defaultValue: "Use AI on Your Sensitive Data with LLM Capsule" },
  ctaDescription: { type: ControlType.String, title: "CTA — Description", defaultValue: "Enable enterprise AI on real documents without exposing sensitive data. Encapsulate locally, process safely, restore completely." },
  ctaButton1Label: { type: ControlType.String, title: "CTA — Button 1 Label", defaultValue: "Request a Demo" },
  ctaButton1Href: { type: ControlType.String, title: "CTA — Button 1 Href", defaultValue: "request-pov.html" },
  ctaButton2Label: { type: ControlType.String, title: "CTA — Button 2 Label", defaultValue: "View Product" },
  ctaButton2Href: { type: ControlType.String, title: "CTA — Button 2 Href", defaultValue: "product.html" },
  ctaFootnote: { type: ControlType.String, title: "CTA — Footnote", defaultValue: "Enterprise AI Enablement by CUBIG" },
})
