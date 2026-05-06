import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  brandAccent:    "#0ea5a4",
  neutral900:     "#0f1130",
  neutral800:     "#0f1130",
  neutral700:     "#1b1d4a",
  neutral500:     "#3a3d5e",
  neutral400:     "#6b7280",
  neutral350:     "#6b7280",
  neutral200:     "#e5e7eb",
  neutral150:     "#e5e7eb",
  neutral100:     "#f7f8fb",
  neutral050:     "#f7f8fb",
  neutral025:     "#f7f8fb",
  white:          "#ffffff",
  black:          "#0f1130",
  textPrimary:    "#0f1130",
  textSecondary:  "#3a3d5e",
  textTertiary:   "#6b7280",
  borderDefault:  "#e5e7eb",
  surfaceWhite:   "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  description?: string
  breadcrumbHome?: string
  breadcrumbLearn?: string
  breadcrumbCurrent?: string
}

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "On-Premise vs Cloud AI Data Protection", "item": "https://llmcapsule.ai/resources/learn/on-premise-vs-cloud-ai-data-protection" },
  ],
})

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section01_Hero({
  title = "On-Premise vs Cloud AI Data Protection",
  description = "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",
  breadcrumbHome = "Home",
  breadcrumbLearn = "Learn",
  breadcrumbCurrent = "On-Premise vs Cloud AI Data Protection",
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s1;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s1 (min-width: 768px)  { .s1-container { padding: 0 32px; } }
        @container s1 (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container s1 (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }

        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 14px;
          color: ${C.brandSecondary};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${C.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-size: 14px;
          color: ${C.textTertiary};
        }
        .s1-breadcrumb__current {
          font-size: 14px;
          color: ${C.textTertiary};
        }
        .s1-title {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container s1 (min-width: 768px)  { .s1-title { font-size: 40px; } }
        @container s1 (min-width: 1024px) { .s1-title { font-size: 48px; } }
        @container s1 (min-width: 1440px) { .s1-title { font-size: 64px; } }

        .s1-description {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container s1 (min-width: 1024px) { .s1-description { max-width: 720px; } }
        @container s1 (min-width: 1440px) { .s1-description { max-width: 1080px; } }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="breadcrumb">
              <a href="https://llmcapsule.ai/" className="s1-breadcrumb__link">{breadcrumbHome}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources/learn" className="s1-breadcrumb__link">{breadcrumbLearn}</a>
              <span className="s1-breadcrumb__sep">/</span>
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
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "On-Premise vs Cloud AI Data Protection",
    displayTextArea: true,
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",
    displayTextArea: true,
  },
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
    defaultValue: "On-Premise vs Cloud AI Data Protection",
  },
})
