import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
  neutral900: "#0f1130",
  neutral800: "#0f1130",
  neutral700: "#1b1d4a",
  neutral500: "#3a3d5e",
  neutral400: "#6b7280",
  neutral200: "#e5e7eb",
  neutral150: "#e5e7eb",
  neutral050: "#f7f8fb",
  neutral025: "#f7f8fb",
  white:      "#ffffff",
  black:      "#0f1130",
  textPrimary:   "#0f1130",
  textSecondary: "#3a3d5e",
  textTertiary:  "#6b7280",
  surfaceWhite:  "#ffffff",
  borderDefault: "#e5e7eb",
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const BREADCRUMB_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 3, "name": "PII Protection vs Enterprise Confidentiality Control", "item": "https://llmcapsule.ai/resources/learn/pii-protection-vs-enterprise-confidentiality-control" },
  ],
})

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  breadcrumbHome?: string
  breadcrumbLearn?: string
  breadcrumbCurrent?: string
  title?: string
  description?: string
  locale?: "en" | "ko"
}

export default function Section01_Hero({
  breadcrumbHome    = "Home",
  breadcrumbLearn   = "Learn",
  breadcrumbCurrent = "PII Protection vs Enterprise Confidentiality Control",
  title       = "PII Protection vs Enterprise Confidentiality Control",
  description = "Why protecting only personal data is insufficient for enterprise context-preserving data layer for AI. Business-critical information requires enterprise confidentiality control to truly enable AI adoption.",
  locale      = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          font-family: var(--f-display, 'Inter'), sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }

        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-size: 14px;
          font-weight: 500;
          color: ${PALETTE.brandSecondary};
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${PALETTE.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-size: 14px;
          color: ${PALETTE.textTertiary};
        }
        .s1-breadcrumb__current {
          font-size: 14px;
          color: ${PALETTE.textTertiary};
        }

        .s1-title {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s1-title { font-size: 40px; } }
        @container (min-width: 1024px) { .s1-title { font-size: 48px; } }
        @container (min-width: 1440px) { .s1-title { font-size: 64px; } }

        .s1-description {
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s1-description { max-width: 720px; } }
        @container (min-width: 1440px) { .s1-description { max-width: 1080px; } }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: BREADCRUMB_JSON_LD }}
      />

      <section className="s1-section" id="section-hero" lang={locale}>
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="breadcrumb">
              <a href="https://llmcapsule.ai/" className="s1-breadcrumb__link">{breadcrumbHome}</a>
              <span className="s1-breadcrumb__sep" aria-hidden="true">/</span>
              <a href="https://llmcapsule.ai/resources/learn" className="s1-breadcrumb__link">{breadcrumbLearn}</a>
              <span className="s1-breadcrumb__sep" aria-hidden="true">/</span>
              <span className="s1-breadcrumb__current">{breadcrumbCurrent}</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{title}</h1>
            <p className="s1-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  breadcrumbHome: {
    type: ControlType.String,
    title: "Breadcrumb: Home",
    defaultValue: "Home",
  },
  breadcrumbLearn: {
    type: ControlType.String,
    title: "Breadcrumb: Learn",
    defaultValue: "Learn",
  },
  breadcrumbCurrent: {
    type: ControlType.String,
    title: "Breadcrumb: Current",
    defaultValue: "PII Protection vs Enterprise Confidentiality Control",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "PII Protection vs Enterprise Confidentiality Control",
    displayTextArea: true,
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Why protecting only personal data is insufficient for enterprise context-preserving data layer for AI. Business-critical information requires enterprise confidentiality control to truly enable AI adoption.",
    displayTextArea: true,
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
