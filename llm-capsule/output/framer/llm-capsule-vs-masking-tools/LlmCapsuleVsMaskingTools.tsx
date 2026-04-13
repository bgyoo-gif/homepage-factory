import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Brand Colors (LLM Capsule) ───────────────────────────────────────────────
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
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",

  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientDark:  "linear-gradient(180deg, #0f0f0f 0%, #171719 100%)",

  overlayNavBg:       "rgba(255,255,255,0.92)",
  overlayDarkLight:   "rgba(0,0,0,0.15)",
  overlayWhite85:     "rgba(255,255,255,0.85)",
  overlayWhite70:     "rgba(255,255,255,0.70)",
  overlayCtaBtnBdr:   "rgba(255,255,255,0.6)",
  overlayBrandTint:   "rgba(24,33,232,0.04)",
  overlayBrandTintMd: "rgba(24,33,232,0.08)",
  overlayBrandTintLt: "rgba(24,33,232,0.06)",

  bgPaintBlue: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png')",
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  heroTitle?: string
  heroDescription?: string

  sec3Title?: string
  sec3Body?: string

  sec4Title?: string
  sec4Body?: string

  sec5Title?: string
  sec5Item1?: string
  sec5Item2?: string
  sec5Item3?: string
  sec5Item4?: string

  sec6Title?: string
  sec6Body?: string
  sec6BannerStrong?: string
  sec6BannerBody?: string

  sec7Title?: string

  sec8Title?: string
  sec8CardTitle?: string
  sec8CardMasking?: string
  sec8CardCapsule?: string

  sec9Title?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string

  sec10Title?: string
  link1Label?: string
  link1Href?: string
  link2Label?: string
  link2Href?: string
  link3Label?: string
  link3Href?: string
  link4Label?: string
  link4Href?: string
  link5Label?: string
  link5Href?: string
  link6Label?: string
  link6Href?: string

  ctaTitle?: string
  ctaDescription?: string
  ctaBtn1Label?: string
  ctaBtn1Href?: string
  ctaBtn2Label?: string
  ctaBtn2Href?: string
  ctaNote1Label?: string
  ctaNote1Href?: string
  ctaNote2Label?: string
  ctaNote2Href?: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function LlmCapsuleVsMaskingTools({
  heroTitle       = "LLM Capsule vs Masking Tools",
  heroDescription = "How LLM Capsule's structure-preserving encapsulation compares to traditional masking and redaction tools for enterprise AI workflows.",

  sec3Title = "Overview",
  sec3Body  = "Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. LLM Capsule takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs.",

  sec4Title = "How Traditional Masking Works",
  sec4Body  = "Masking tools scan documents for sensitive patterns — names, numbers, dates — and replace them with generic tokens ([REDACTED], [NAME], ****) or remove them entirely. The replacement is permanent. There is no mechanism to restore original values after processing.",

  sec5Title = "Limitations of Masking for AI",
  sec5Item1 = "Context destruction. AI models lose entity relationships when all names become \"[NAME].\" Multi-party documents become indistinguishable.",
  sec5Item2 = "Output unusability. AI outputs inherit the masking. Summaries contain \"[REDACTED]\" placeholders instead of real data, requiring manual reconstruction.",
  sec5Item3 = "Structural damage. Flat masking breaks table schemas, cross-references, and nested document structures.",
  sec5Item4 = "No automation path. Every masked AI output requires human intervention to restore context, eliminating efficiency gains.",

  sec6Title       = "How LLM Capsule Differs",
  sec6Body        = "LLM Capsule replaces masking with encapsulation — a reversible, structure-preserving protection that maintains document integrity for AI processing and enables automated output restoration.",
  sec6BannerStrong = "AI results are automatically restored locally with original enterprise data.",
  sec6BannerBody  = "LLM Capsule is an AI enablement data layer that protects sensitive data while enabling usable enterprise AI outputs.",

  sec7Title = "Comparison",

  sec8Title     = "Enterprise Workflow Example",
  sec8CardTitle = "Contract Analysis Pipeline",
  sec8CardMasking  = "With masking: 200 contracts masked → AI produces generic summaries with \"[REDACTED]\" throughout → Legal team manually restores ~40 hours of context rebuilding.",
  sec8CardCapsule  = "With LLM Capsule: 200 contracts encapsulated → AI produces structured summaries → Local restoration restores all parties, amounts, and dates → Output feeds directly into contract management system.",

  sec9Title = "FAQ",
  faq1Q = "How does LLM Capsule differ from masking tools?",
  faq1A = "Masking tools permanently remove sensitive data, destroying context AI models need. LLM Capsule encapsulates data with structure-preserving processing and enables local restoration of AI outputs, producing enterprise-ready results automatically.",
  faq2Q = "Can masking tools be used for AI workflows?",
  faq2A = "Traditional masking tools were not designed for AI workflows. They produce unusable AI outputs that require manual reconstruction. LLM Capsule's restorable workflow produces enterprise-ready outputs automatically.",
  faq3Q = "Does LLM Capsule replace existing masking tools?",
  faq3A = "LLM Capsule can complement existing masking infrastructure for non-AI use cases. For AI workflows specifically, it replaces masking with encapsulation-based protection designed for restorable workflows.",

  sec10Title = "Related",
  link1Label = "Product Overview",
  link1Href  = "product.html",
  link2Label = "Architecture",
  link2Href  = "architecture.html",
  link3Label = "Trust & Compliance",
  link3Href  = "trust.html",
  link4Label = "Request a Demo",
  link4Href  = "request-pov.html",
  link5Label = "Learn Hub",
  link5Href  = "learn.html",
  link6Label = "Why Redaction Breaks AI",
  link6Href  = "why-redaction-breaks-enterprise-ai-workflows.html",

  ctaTitle       = "See how LLM Capsule works with your data",
  ctaDescription = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  ctaBtn1Label   = "Request a Demo",
  ctaBtn1Href    = "request-pov.html",
  ctaBtn2Label   = "Talk to an Architect",
  ctaBtn2Href    = "architecture.html",
  ctaNote1Label  = "Download Architecture Brief",
  ctaNote1Href   = "downloads.html",
  ctaNote2Label  = "AWS Marketplace",
  ctaNote2Href   = "https://aws.amazon.com/marketplace",
}: Props) {

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx)
  }

  // ─── Bullet item helper ────────────────────────────────────────────────────
  const splitBullet = (text: string) => {
    const colonIdx = text.indexOf(".")
    if (colonIdx > -1 && colonIdx < 30) {
      return { strong: text.slice(0, colonIdx + 1), rest: text.slice(colonIdx + 1) }
    }
    return { strong: "", rest: text }
  }

  const bullets = [sec5Item1, sec5Item2, sec5Item3, sec5Item4]

  const tableRows: [string, string, string][] = [
    ["Protection method",       "Permanent removal / replacement", "Reversible encapsulation"],
    ["Document structure",      "Destroyed",                       "Preserved"],
    ["Entity relationships",    "Collapsed",                       "Maintained"],
    ["AI output quality",       "Degraded",                        "Full quality"],
    ["Output restoration",      "✗ Manual",                        "✓ Automatic restoration"],
    ["Enterprise context control", "✗",                            "✓"],
    ["Audit trail",             "Limited",                         "Complete"],
    ["Designed for AI workflows", "✗",                             "✓"],
  ]

  const relatedLinks = [
    { label: link1Label, href: link1Href, icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /> },
    { label: link2Label, href: link2Href, icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
    { label: link3Label, href: link3Href, icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></> },
    { label: link4Label, href: link4Href, icon: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></> },
    { label: link5Label, href: link5Href, icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></> },
    { label: link6Label, href: link6Href, icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></> },
  ]

  const faqItems = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .vsmt-root {
          font-family: "DM Sans", sans-serif;
          color: ${C.textPrimary};
          background-color: ${C.surfaceWhite};
          word-break: keep-all;
          overflow-wrap: break-word;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          width: 100%;
        }

        .vsmt-root p, .vsmt-root li { word-break: keep-all; overflow-wrap: break-word; }
        .vsmt-root h1, .vsmt-root h2, .vsmt-root h3, .vsmt-root h4 { text-wrap: balance; }
        .vsmt-root a { text-decoration: none; color: inherit; }
        .vsmt-root img { max-width: 100%; display: block; }

        /* ── Container Query wrapper ── */
        .vsmt-cq-wrap { width: 100%; container-type: inline-size; }

        /* ── Outer container (full-width, responsive padding) ── */
        .vsmt-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .vsmt-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .vsmt-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .vsmt-container { padding: 0 120px; max-width: 1440px; margin: 0 auto; } }

        /* ── Article container (1080px) ── */
        .vsmt-article-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .vsmt-article-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .vsmt-article-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .vsmt-article-container { padding: 0 120px; max-width: 1440px; } }

        /* ── Section spacing ── */
        .vsmt-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${C.surfaceWhite};
        }
        .vsmt-section--hero {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
        }
        .vsmt-section--body {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
        }
        @container (min-width: 768px)  { .vsmt-section--body { padding: 60px 0; } }
        @container (min-width: 1024px) { .vsmt-section--body { padding: 60px 0; } }
        @container (min-width: 1440px) { .vsmt-section--body { padding: 60px 0; } }

        /* ── Hero typography ── */
        .vsmt-hero-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .vsmt-hero-title { font-size: 40px; } }
        @container (min-width: 1024px) { .vsmt-hero-title { font-size: 48px; } }
        @container (min-width: 1440px) { .vsmt-hero-title { font-size: 64px; } }

        .vsmt-hero-desc {
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
        }

        /* ── Product brand text ── */
        .vsmt-brand-text {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .vsmt-brand-color { color: ${C.brandSecondary}; }

        /* ── Section header ── */
        .vsmt-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .vsmt-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .vsmt-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .vsmt-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .vsmt-section-header h2 { font-size: 28px; } }

        /* ── Body paragraph ── */
        .vsmt-paragraph {
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .vsmt-paragraph:last-child { margin-bottom: 0; }

        /* ── Bullet list ── */
        .vsmt-bullet {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .vsmt-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${C.textPrimary};
        }
        .vsmt-bullet__icon {
          width: 20px; height: 20px; flex-shrink: 0;
          margin-top: 2px;
          display: flex; align-items: center; justify-content: center;
          color: ${C.brandSecondary};
          font-weight: 700; font-size: 18px; line-height: 1;
        }

        /* ── Banner ── */
        .vsmt-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: rgba(24,33,232,0.06);
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 16px;
        }

        /* ── Card ── */
        .vsmt-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column; gap: 12px;
        }
        @container (min-width: 1440px) { .vsmt-card { padding: 32px; } }
        .vsmt-card h4 {
          font-size: 16px; font-weight: 600;
          color: ${C.textPrimary}; line-height: 1.2;
        }
        .vsmt-card p {
          font-size: 16px; line-height: 1.7;
          color: ${C.textSecondary}; margin: 0;
        }
        .vsmt-card p + p { margin-top: 12px; }

        /* ── Table ── */
        .vsmt-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 24px 0;
        }
        .vsmt-table {
          width: 100%; border-collapse: collapse; font-size: 14px;
        }
        .vsmt-table thead { background-color: ${C.neutral025}; }
        .vsmt-table th {
          padding: 14px 16px; text-align: left;
          font-weight: 600; font-size: 12px;
          color: ${C.textPrimary};
          border-bottom: 2px solid ${C.borderDefault};
        }
        .vsmt-table th.vsmt-th-highlight {
          background-color: rgba(24,33,232,0.04);
          color: ${C.brandPrimary};
        }
        .vsmt-table td {
          padding: 12px 16px;
          border-bottom: 1px solid ${C.borderDefault};
          color: ${C.textSecondary}; vertical-align: top;
        }
        .vsmt-table td.vsmt-td-highlight {
          background-color: rgba(24,33,232,0.04);
          color: ${C.brandPrimary};
          font-weight: 500;
        }
        .vsmt-table-check { color: ${C.success}; font-weight: 600; }
        .vsmt-table-cross { color: ${C.error};   font-weight: 600; }

        /* ── Accordion ── */
        .vsmt-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .vsmt-ac-card {
          border: 1px solid ${C.borderDefault};
          border-radius: 8px;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .vsmt-ac-card:hover { background-color: ${C.neutral025}; }
        .vsmt-ac-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 24px; cursor: pointer; user-select: none;
        }
        .vsmt-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px; font-weight: 500; line-height: 1.2;
          color: ${C.textPrimary};
        }
        .vsmt-ac-toggle {
          width: 28px; height: 28px; border-radius: 6px;
          border: 0.5px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; cursor: pointer;
        }
        .vsmt-ac-toggle-icon {
          width: 12px; height: 12px; position: relative; flex-shrink: 0;
        }
        .vsmt-ac-toggle-icon::before {
          content: ''; position: absolute;
          background-color: ${C.textTertiary}; border-radius: 1px;
          width: 10px; height: 1.5px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .vsmt-ac-toggle-icon::after {
          content: ''; position: absolute;
          background-color: ${C.textTertiary}; border-radius: 1px;
          width: 1.5px; height: 10px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          transition: opacity 0.2s;
        }
        .vsmt-ac-toggle-icon--open::after { opacity: 0; }
        .vsmt-ac-body {
          padding: 24px;
          border-top: 1px solid ${C.borderDefault};
          background-color: ${C.surfaceLight};
          font-size: 14px; color: ${C.textSecondary};
          line-height: 1.7;
        }
        .vsmt-ac-body p + p { margin-top: 12px; }

        /* ── Section title icon ── */
        .vsmt-section-title-icon {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
        }
        .vsmt-section-title-icon__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .vsmt-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 600;
          color: ${C.textPrimary}; line-height: 1.2;
        }

        /* ── Card grid ── */
        .vsmt-card-grid {
          display: grid; grid-template-columns: 1fr; gap: 12px;
        }
        @container (min-width: 768px) { .vsmt-card-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── Dark card ── */
        .vsmt-card-dark {
          background-color: ${C.neutral850};
          border: 1px solid ${C.neutral700};
          color: ${C.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; align-items: center; gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .vsmt-card-dark:hover { background-color: ${C.neutral800}; }
        .vsmt-card-dark__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .vsmt-card-dark__title {
          font-size: 16px; font-weight: 600;
          color: ${C.textInverse};
        }

        /* ── SVG icon ── */
        .vsmt-icon {
          width: 24px; height: 24px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── CTA Band ── */
        .vsmt-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png');
          background-size: cover; background-position: center;
        }
        @container (min-width: 768px)  { .vsmt-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .vsmt-cta-band { padding: 120px 120px; } }
        .vsmt-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .vsmt-cta-band > * { position: relative; z-index: 1; }
        .vsmt-cta-inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        @container (min-width: 1024px) { .vsmt-cta-inner { max-width: 720px; } }
        @container (min-width: 1440px) { .vsmt-cta-inner { max-width: 1080px; } }
        .vsmt-cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px; font-weight: 700;
          color: ${C.white}; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container (min-width: 768px)  { .vsmt-cta-title { font-size: 40px; } }
        @container (min-width: 1440px) { .vsmt-cta-title { font-size: 50px; } }
        .vsmt-cta-desc {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .vsmt-cta-actions {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 16px;
        }
        .vsmt-cta-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif; font-weight: 500;
          cursor: pointer; border: none; text-decoration: none;
          white-space: nowrap;
          padding: 16px 48px; font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${C.textPrimary};
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          transition: background-color 0.2s;
        }
        .vsmt-cta-btn:hover { background-color: ${C.white}; }
        .vsmt-cta-footnote {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 24px;
          margin-top: 8px;
        }
        .vsmt-cta-footnote a {
          font-size: 14px;
          color: rgba(255,255,255,0.70);
          transition: color 0.2s; text-decoration: none;
        }
        .vsmt-cta-footnote a:hover { color: ${C.white}; }

        /* Mobile overrides */
        @container (max-width: 767px) {
          .vsmt-cta-title { font-size: 36px; }
          .vsmt-cta-actions { flex-direction: column; align-items: center; }
          .vsmt-cta-btn { width: 100%; max-width: 320px; }
          .vsmt-section-header { text-align: left; }
          .vsmt-cta-band { background-image: none; }
        }
      `}</style>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}}
      />

      <div className="vsmt-root">
        <div className="vsmt-cq-wrap">

          {/* ── Section 1: Hero ─────────────────────────────────────────── */}
          <section id="section-hero" className="vsmt-section--hero">
            <div className="vsmt-article-container">
              <h1 className="vsmt-hero-title">
                <span className="vsmt-brand-text">LLM Capsule</span>{heroTitle.replace("LLM Capsule", "")}
              </h1>
              <p className="vsmt-hero-desc">
                How <span className="vsmt-brand-text">LLM Capsule</span>{heroDescription.replace(/^How LLM Capsule/, "")}
              </p>
            </div>
          </section>

          {/* ── Section 2: Screenshot placeholder ──────────────────────── */}
          <section id="section-2" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div style={{
                marginTop: 48,
                borderRadius: "40px 40px 0 0",
                padding: "32px 32px 0",
                backgroundColor: C.neutral050,
                backgroundImage: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: "8px 8px 0 0",
                  overflow: "hidden",
                  minHeight: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "48px 24px",
                }}>
                  <p style={{ fontSize: 14, color: C.textTertiary, textAlign: "center", lineHeight: 1.7 }}>
                    Masking vs. Encapsulation — Side-by-side output comparison showing restored vs. redacted results
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Overview ─────────────────────────────────────── */}
          <section id="section-3" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2><span className="vsmt-brand-color">{sec3Title}</span></h2>
              </div>
              <p className="vsmt-paragraph">
                Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. <span className="vsmt-brand-text">LLM Capsule</span> takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs.
              </p>
            </div>
          </section>

          {/* ── Section 4: How Traditional Masking Works ───────────────── */}
          <section id="section-4" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2>How Traditional Masking <span className="vsmt-brand-color">Works</span></h2>
              </div>
              <p className="vsmt-paragraph">{sec4Body}</p>
            </div>
          </section>

          {/* ── Section 5: Limitations of Masking for AI ───────────────── */}
          <section id="section-5" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2>Limitations of Masking for <span className="vsmt-brand-color">AI</span></h2>
              </div>
              <ul className="vsmt-bullet">
                {bullets.map((item, i) => {
                  const { strong, rest } = splitBullet(item)
                  return (
                    <li key={i} className="vsmt-bullet__item">
                      <span className="vsmt-bullet__icon">•</span>
                      <span>
                        {strong && <strong>{strong}</strong>}
                        {rest}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>

          {/* ── Section 6: How LLM Capsule Differs ─────────────────────── */}
          <section id="section-6" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2>How <span className="vsmt-brand-text">LLM Capsule</span> Differs</h2>
              </div>
              <p className="vsmt-paragraph">
                <span className="vsmt-brand-text">LLM Capsule</span>{sec6Body.replace(/^LLM Capsule/, "")}
              </p>
              <div className="vsmt-banner">
                <strong>{sec6BannerStrong}</strong>{" "}<span className="vsmt-brand-text">LLM Capsule</span>{sec6BannerBody.replace(/^LLM Capsule/, "")}
              </div>
            </div>
          </section>

          {/* ── Section 7: Comparison Table ─────────────────────────────── */}
          <section id="section-7" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2><span className="vsmt-brand-color">{sec7Title}</span></h2>
              </div>
              <div className="vsmt-table-wrap">
                <table className="vsmt-table">
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>Masking Tools</th>
                      <th className="vsmt-th-highlight">
                        <span className="vsmt-brand-text">LLM Capsule</span> (AI Enablement Data Layer)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map(([cap, mask, capsule], i) => {
                      const hasCross = mask.startsWith("✗")
                      const hasCheck = capsule.startsWith("✓")
                      const maskText = hasCross ? mask.slice(2) : mask
                      const capsuleText = hasCheck ? capsule.slice(2) : capsule
                      return (
                        <tr key={i}>
                          <td>{cap}</td>
                          <td>
                            {hasCross && <span className="vsmt-table-cross">✗</span>}
                            {hasCross && maskText ? " " + maskText : !hasCross ? mask : ""}
                          </td>
                          <td className="vsmt-td-highlight">
                            {hasCheck && <span className="vsmt-table-check">✓</span>}
                            {hasCheck && capsuleText ? " " + capsuleText : !hasCheck ? capsule : ""}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── Section 8: Enterprise Workflow Example ──────────────────── */}
          <section id="section-8" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2>Enterprise Workflow <span className="vsmt-brand-color">Example</span></h2>
              </div>
              <div className="vsmt-card">
                <h4>{sec8CardTitle}</h4>
                <p><strong>With masking:</strong> {sec8CardMasking.replace(/^With masking:\s*/, "")}</p>
                <p><strong>With <span className="vsmt-brand-text">LLM Capsule</span>:</strong> {sec8CardCapsule.replace(/^With LLM Capsule:\s*/, "")}</p>
              </div>
            </div>
          </section>

          {/* ── Section 9: FAQ ───────────────────────────────────────────── */}
          <section id="section-9" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-header">
                <h2><span className="vsmt-brand-color">{sec9Title}</span></h2>
              </div>
              <div className="vsmt-ac-list">
                {faqItems.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className="vsmt-ac-card"
                      onClick={() => toggleFaq(idx)}
                    >
                      <div className="vsmt-ac-header">
                        <span className="vsmt-ac-title">
                          {faq.q.includes("LLM Capsule")
                            ? <>
                                {faq.q.split("LLM Capsule").map((part, pi, arr) => (
                                  <span key={pi}>
                                    {part}
                                    {pi < arr.length - 1 && <span className="vsmt-brand-text">LLM Capsule</span>}
                                  </span>
                                ))}
                              </>
                            : faq.q
                          }
                        </span>
                        <span className="vsmt-ac-toggle">
                          <span className={`vsmt-ac-toggle-icon${isOpen ? " vsmt-ac-toggle-icon--open" : ""}`} />
                        </span>
                      </div>
                      {isOpen && (
                        <div className="vsmt-ac-body">
                          <p>
                            {faq.a.includes("LLM Capsule")
                              ? faq.a.split("LLM Capsule").map((part, pi, arr) => (
                                  <span key={pi}>
                                    {part}
                                    {pi < arr.length - 1 && <span className="vsmt-brand-text">LLM Capsule</span>}
                                  </span>
                                ))
                              : faq.a
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ── Section 10: Related Pages ────────────────────────────────── */}
          <section id="section-10" className="vsmt-section--body">
            <div className="vsmt-article-container">
              <div className="vsmt-section-title-icon">
                <span className="vsmt-section-title-icon__icon">
                  <svg className="vsmt-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </span>
                <span className="vsmt-section-title-icon__text">{sec10Title}</span>
              </div>
              <div className="vsmt-card-grid">
                {relatedLinks.map((link, i) => (
                  <a key={i} href={link.href} className="vsmt-card-dark">
                    <span className="vsmt-card-dark__icon">
                      <svg className="vsmt-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        {link.icon}
                      </svg>
                    </span>
                    <span className="vsmt-card-dark__title">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 11: CTA Band ─────────────────────────────────────── */}
          <section id="section-cta" className="vsmt-cta-band">
            <div className="vsmt-cta-inner">
              <h2 className="vsmt-cta-title">
                See how <span className="vsmt-brand-text">LLM Capsule</span>{ctaTitle.replace(/^See how LLM Capsule/, "")}
              </h2>
              <p className="vsmt-cta-desc">{ctaDescription}</p>
              <div className="vsmt-cta-actions">
                <a href={ctaBtn1Href} className="vsmt-cta-btn">{ctaBtn1Label}</a>
                <a href={ctaBtn2Href} className="vsmt-cta-btn">{ctaBtn2Label}</a>
              </div>
              <div className="vsmt-cta-footnote">
                <a href={ctaNote1Href}>{ctaNote1Label}</a>
                <a href={ctaNote2Href} target="_blank" rel="noopener">{ctaNote2Label}</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(LlmCapsuleVsMaskingTools, {
  heroTitle:       { type: ControlType.String, title: "Hero Title",        defaultValue: "LLM Capsule vs Masking Tools" },
  heroDescription: { type: ControlType.String, title: "Hero Description",  defaultValue: "How LLM Capsule's structure-preserving encapsulation compares to traditional masking and redaction tools for enterprise AI workflows." },

  sec3Title: { type: ControlType.String, title: "S3 Title",   defaultValue: "Overview" },
  sec3Body:  { type: ControlType.String, title: "S3 Body",    defaultValue: "Masking tools (redaction engines, tokenization utilities, PII strippers) were designed for compliance reporting and static data anonymization. They protect data by permanently removing or replacing sensitive values. LLM Capsule takes a fundamentally different approach as an AI enablement data layer and plugin — it enables AI adoption by protecting data through encapsulation and local restoration, preserving usable enterprise AI outputs." },

  sec4Title: { type: ControlType.String, title: "S4 Title",   defaultValue: "How Traditional Masking Works" },
  sec4Body:  { type: ControlType.String, title: "S4 Body",    defaultValue: "Masking tools scan documents for sensitive patterns — names, numbers, dates — and replace them with generic tokens ([REDACTED], [NAME], ****) or remove them entirely. The replacement is permanent. There is no mechanism to restore original values after processing." },

  sec5Title: { type: ControlType.String, title: "S5 Title",   defaultValue: "Limitations of Masking for AI" },
  sec5Item1: { type: ControlType.String, title: "S5 Item 1",  defaultValue: "Context destruction. AI models lose entity relationships when all names become \"[NAME].\" Multi-party documents become indistinguishable." },
  sec5Item2: { type: ControlType.String, title: "S5 Item 2",  defaultValue: "Output unusability. AI outputs inherit the masking. Summaries contain \"[REDACTED]\" placeholders instead of real data, requiring manual reconstruction." },
  sec5Item3: { type: ControlType.String, title: "S5 Item 3",  defaultValue: "Structural damage. Flat masking breaks table schemas, cross-references, and nested document structures." },
  sec5Item4: { type: ControlType.String, title: "S5 Item 4",  defaultValue: "No automation path. Every masked AI output requires human intervention to restore context, eliminating efficiency gains." },

  sec6Title:       { type: ControlType.String, title: "S6 Title",         defaultValue: "How LLM Capsule Differs" },
  sec6Body:        { type: ControlType.String, title: "S6 Body",          defaultValue: "LLM Capsule replaces masking with encapsulation — a reversible, structure-preserving protection that maintains document integrity for AI processing and enables automated output restoration." },
  sec6BannerStrong:{ type: ControlType.String, title: "S6 Banner Bold",   defaultValue: "AI results are automatically restored locally with original enterprise data." },
  sec6BannerBody:  { type: ControlType.String, title: "S6 Banner Body",   defaultValue: "LLM Capsule is an AI enablement data layer that protects sensitive data while enabling usable enterprise AI outputs." },

  sec7Title: { type: ControlType.String, title: "S7 Title",   defaultValue: "Comparison" },

  sec8Title:      { type: ControlType.String, title: "S8 Title",          defaultValue: "Enterprise Workflow Example" },
  sec8CardTitle:  { type: ControlType.String, title: "S8 Card Title",     defaultValue: "Contract Analysis Pipeline" },
  sec8CardMasking:{ type: ControlType.String, title: "S8 Masking Row",    defaultValue: "With masking: 200 contracts masked → AI produces generic summaries with \"[REDACTED]\" throughout → Legal team manually restores ~40 hours of context rebuilding." },
  sec8CardCapsule:{ type: ControlType.String, title: "S8 Capsule Row",    defaultValue: "With LLM Capsule: 200 contracts encapsulated → AI produces structured summaries → Local restoration restores all parties, amounts, and dates → Output feeds directly into contract management system." },

  sec9Title: { type: ControlType.String, title: "S9 Title",   defaultValue: "FAQ" },
  faq1Q:     { type: ControlType.String, title: "FAQ 1 Q",    defaultValue: "How does LLM Capsule differ from masking tools?" },
  faq1A:     { type: ControlType.String, title: "FAQ 1 A",    defaultValue: "Masking tools permanently remove sensitive data, destroying context AI models need. LLM Capsule encapsulates data with structure-preserving processing and enables local restoration of AI outputs, producing enterprise-ready results automatically." },
  faq2Q:     { type: ControlType.String, title: "FAQ 2 Q",    defaultValue: "Can masking tools be used for AI workflows?" },
  faq2A:     { type: ControlType.String, title: "FAQ 2 A",    defaultValue: "Traditional masking tools were not designed for AI workflows. They produce unusable AI outputs that require manual reconstruction. LLM Capsule's restorable workflow produces enterprise-ready outputs automatically." },
  faq3Q:     { type: ControlType.String, title: "FAQ 3 Q",    defaultValue: "Does LLM Capsule replace existing masking tools?" },
  faq3A:     { type: ControlType.String, title: "FAQ 3 A",    defaultValue: "LLM Capsule can complement existing masking infrastructure for non-AI use cases. For AI workflows specifically, it replaces masking with encapsulation-based protection designed for restorable workflows." },

  sec10Title: { type: ControlType.String, title: "S10 Title",  defaultValue: "Related" },
  link1Label: { type: ControlType.String, title: "Link 1",     defaultValue: "Product Overview" },
  link1Href:  { type: ControlType.String, title: "Link 1 Href",defaultValue: "product.html" },
  link2Label: { type: ControlType.String, title: "Link 2",     defaultValue: "Architecture" },
  link2Href:  { type: ControlType.String, title: "Link 2 Href",defaultValue: "architecture.html" },
  link3Label: { type: ControlType.String, title: "Link 3",     defaultValue: "Trust & Compliance" },
  link3Href:  { type: ControlType.String, title: "Link 3 Href",defaultValue: "trust.html" },
  link4Label: { type: ControlType.String, title: "Link 4",     defaultValue: "Request a Demo" },
  link4Href:  { type: ControlType.String, title: "Link 4 Href",defaultValue: "request-pov.html" },
  link5Label: { type: ControlType.String, title: "Link 5",     defaultValue: "Learn Hub" },
  link5Href:  { type: ControlType.String, title: "Link 5 Href",defaultValue: "learn.html" },
  link6Label: { type: ControlType.String, title: "Link 6",     defaultValue: "Why Redaction Breaks AI" },
  link6Href:  { type: ControlType.String, title: "Link 6 Href",defaultValue: "why-redaction-breaks-enterprise-ai-workflows.html" },

  ctaTitle:      { type: ControlType.String, title: "CTA Title",       defaultValue: "See how LLM Capsule works with your data" },
  ctaDescription:{ type: ControlType.String, title: "CTA Description", defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows." },
  ctaBtn1Label:  { type: ControlType.String, title: "CTA Btn 1",       defaultValue: "Request a Demo" },
  ctaBtn1Href:   { type: ControlType.String, title: "CTA Btn 1 Href",  defaultValue: "request-pov.html" },
  ctaBtn2Label:  { type: ControlType.String, title: "CTA Btn 2",       defaultValue: "Talk to an Architect" },
  ctaBtn2Href:   { type: ControlType.String, title: "CTA Btn 2 Href",  defaultValue: "architecture.html" },
  ctaNote1Label: { type: ControlType.String, title: "CTA Note 1",      defaultValue: "Download Architecture Brief" },
  ctaNote1Href:  { type: ControlType.String, title: "CTA Note 1 Href", defaultValue: "downloads.html" },
  ctaNote2Label: { type: ControlType.String, title: "CTA Note 2",      defaultValue: "AWS Marketplace" },
  ctaNote2Href:  { type: ControlType.String, title: "CTA Note 2 Href", defaultValue: "https://aws.amazon.com/marketplace" },
})
