import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does raw data ever leave the environment?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment. Raw original data never crosses the trust boundary." }
    },
    {
      "@type": "Question",
      "name": "Where does restoration happen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Restoration happens entirely inside the customer-controlled environment after AI processing. The locally stored mapping restores original names, figures, and references into AI outputs." }
    },
    {
      "@type": "Question",
      "name": "Can we define our own sensitive entities?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule supports enterprise context control so teams can define business-specific confidential markers beyond standard PII categories." }
    },
    {
      "@type": "Question",
      "name": "Does it support document-heavy workflows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule supports structure-preserving processing across PDFs, Word documents, spreadsheets, tables, presentations, and mixed-format business content." }
    },
    {
      "@type": "Question",
      "name": "Can it fit existing enterprise systems?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule supports API and SDK-based integration into existing enterprise portals, partner backends, and workflow platforms." }
    },
    {
      "@type": "Question",
      "name": "Is AWS Marketplace deployment available?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and VPC deployment." }
    },
    {
      "@type": "Question",
      "name": "Can it run in air-gapped or on-premise environments?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models." }
    },
    {
      "@type": "Question",
      "name": "What AI models does LLM Capsule support?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule is model-agnostic. Because it operates at the data layer — not the model layer — it works with any external AI service including ChatGPT, Claude, Gemini, Perplexity, or any LLM API." }
    }
  ]
})

const PALETTE = {
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceLight:   "#f7f7f7",
  neutral025:     "#f7f7f7",
  neutral400:     "#9c9c9c",
  neutral850:     "#141414",
  neutral700:     "#303135",
  neutral800:     "#171719",
  neutral350:     "#adadad",
}

const EXPLORE_ICONS = [
  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>,
  <polyline points="20 6 9 17 4 12"/>,
  <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
  <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
  <><line x1="3" y1="12" x2="21" y2="12"/><polyline points="12 3 3 12 12 21"/></>,
  <><line x1="3" y1="12" x2="21" y2="12"/><polyline points="12 3 3 12 12 21"/></>,
  <><line x1="3" y1="12" x2="21" y2="12"/><polyline points="12 3 3 12 12 21"/></>,
  <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
]

const EXPLORE_HREFS = [
  "/architecture",
  "/trust",
  "/pricing",
  "/request-a-demo",
  "/resources/learn",
  "/resources/glossary",
  "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  "/resources/learn/llm-capsule-vs-masking-tools",
  "/resources/learn/llm-capsule-vs-prompt-security-gateways",
  "/resources/learn/llm-capsule-vs-synthetic-data-platforms",
  "/resources/glossary/restoration",
]

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  exploreHeader?: string
  link1Title?: string
  link2Title?: string
  link3Title?: string
  link4Title?: string
  link5Title?: string
  link6Title?: string
  link7Title?: string
  link8Title?: string
  link9Title?: string
  link10Title?: string
  link11Title?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string
  faq5Q?: string
  faq5A?: string
  faq6Q?: string
  faq6A?: string
  faq7Q?: string
  faq7A?: string
  faq8Q?: string
  faq8A?: string
}

export default function Section13_FAQ({
  sectionTitle = "Common",
  sectionTitleBrand = "Questions",
  exploreHeader = "Explore further",
  link1Title = "Architecture",
  link2Title = "Trust & Compliance",
  link3Title = "Request a Demo",
  link4Title = "Why Redaction Breaks AI",
  link5Title = "vs Masking Tools",
  link6Title = "vs Prompt Gateways",
  link7Title = "vs Synthetic Data",
  link8Title = "Restoration",
  link9Title = "Pricing",
  link10Title = "Learn Hub",
  link11Title = "Glossary",
  faq1Q = "Does raw data ever leave the environment?",
  faq1A = "No. LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment. The external AI model processes only the protected capsule — raw original data never crosses the trust boundary. The mapping between original and encapsulated values is stored entirely within your environment and never transmitted externally.",
  faq2Q = "Where does restoration happen?",
  faq2A = "Restoration happens entirely inside the customer-controlled environment after AI processing completes. The locally stored mapping is applied to AI outputs automatically, restoring original names, figures, dates, and references into the results. This produces enterprise-ready outputs that are directly usable in business workflows — no manual reconstruction required.",
  faq3Q = "Can we define our own sensitive entities?",
  faq3A = "Yes. LLM Capsule supports enterprise context control so teams can define business-specific confidential markers beyond standard PII categories. This includes internal identifiers, project names, customer-specific terms, contract references, financial figures, vulnerability labels, and any organization-specific sensitivity category.",
  faq4Q = "Does it support document-heavy workflows?",
  faq4A = "Yes. LLM Capsule supports structure-preserving processing across enterprise document types including PDFs, Word documents, spreadsheets, tables, presentations, reports, and mixed-format business content. Document structure, entity relationships, and cross-references are maintained during encapsulation.",
  faq5Q = "Can it fit existing enterprise systems?",
  faq5A = "Yes. LLM Capsule is built as a deployable component and supports API and SDK-based integration into existing enterprise portals, partner backends, customer-facing applications, and internal workflow platforms. It wraps existing AI integrations with encapsulation and restoration at the data layer.",
  faq6Q = "Is AWS Marketplace deployment available?",
  faq6A = "Yes. LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and VPC deployment. This enables rapid deployment within existing AWS environments with standard enterprise procurement workflows.",
  faq7Q = "Can it run in air-gapped or on-premise environments?",
  faq7A = "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. For air-gapped environments, documents are encapsulated on the isolated network, transferred through controlled channels for AI processing, and results are transferred back for local restoration.",
  faq8Q = "What AI models does LLM Capsule support?",
  faq8A = "LLM Capsule is model-agnostic. Because it operates at the data layer — not the model layer — it works with any external AI service including ChatGPT, Claude, Gemini, Perplexity, or any LLM API. Protection remains stable even when model vendors change.",
}: Props) {
  const faqData = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
    { q: faq4Q, a: faq4A },
    { q: faq5Q, a: faq5A },
    { q: faq6Q, a: faq6A },
    { q: faq7Q, a: faq7A },
    { q: faq8Q, a: faq8A },
  ]

  const exploreLinks = [
    { href: EXPLORE_HREFS[0],  icon: EXPLORE_ICONS[0],  title: link1Title },
    { href: EXPLORE_HREFS[1],  icon: EXPLORE_ICONS[1],  title: link2Title },
    { href: EXPLORE_HREFS[2],  icon: EXPLORE_ICONS[2],  title: link9Title },
    { href: EXPLORE_HREFS[3],  icon: EXPLORE_ICONS[3],  title: link3Title },
    { href: EXPLORE_HREFS[4],  icon: EXPLORE_ICONS[4],  title: link10Title },
    { href: EXPLORE_HREFS[5],  icon: EXPLORE_ICONS[5],  title: link11Title },
    { href: EXPLORE_HREFS[6],  icon: EXPLORE_ICONS[6],  title: link4Title },
    { href: EXPLORE_HREFS[7],  icon: EXPLORE_ICONS[7],  title: link5Title },
    { href: EXPLORE_HREFS[8],  icon: EXPLORE_ICONS[8],  title: link6Title },
    { href: EXPLORE_HREFS[9],  icon: EXPLORE_ICONS[9],  title: link7Title },
    { href: EXPLORE_HREFS[10], icon: EXPLORE_ICONS[10], title: link8Title },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD_FAQ }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s13-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s13-inner { width: 100%; container-type: inline-size; }
        .s13-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s13-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s13-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s13-container { padding: 0 120px; max-width: 1440px; } }

        .s13-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s13-header { text-align: left; } }
        .s13-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s13-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s13-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s13-header__title { font-size: 28px; } }
        .s13-header__brand   { color: ${PALETTE.brandSecondary}; }
        .s13-header__product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* Accordion */
        .s13-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s13-ac-card {
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 8px;
          background-color: ${PALETTE.white};
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s13-ac-card:hover { background-color: ${PALETTE.neutral025}; }
        .s13-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }
        .s13-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s13-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
        }
        .s13-ac-toggle::before,
        .s13-ac-toggle::after {
          content: '';
          position: absolute;
          background-color: ${PALETTE.textTertiary};
          border-radius: 1px;
        }
        .s13-ac-toggle::before { width: 10px; height: 1.5px; }
        .s13-ac-toggle::after  { width: 1.5px; height: 10px; transition: opacity 0.2s; }
        .s13-ac-toggle--open::after { opacity: 0; }

        .s13-ac-body {
          padding: 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Explore Further */
        .s13-explore-header {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          margin: 64px 0 24px;
        }

        .s13-explore-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .s13-explore-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .s13-explore-grid { grid-template-columns: repeat(3, 1fr); } }

        .s13-dark-card {
          background-color: ${PALETTE.neutral850};
          border-color: ${PALETTE.neutral700};
          color: ${PALETTE.white};
          border-radius: 18px;
          border: 1px solid ${PALETTE.neutral700};
          padding: 24px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .s13-dark-card:hover { opacity: 0.88; }
        .s13-dark-card__header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .s13-dark-card__header svg {
          width: 16px; height: 16px;
          stroke: ${PALETTE.neutral400}; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
          flex-shrink: 0;
        }
        .s13-dark-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.white};
          margin: 0;
        }
        .s13-dark-card__arrow {
          flex-shrink: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.neutral400};
          transition: color 0.15s;
        }
        .s13-dark-card:hover .s13-dark-card__arrow { color: ${PALETTE.neutral350}; }
      `}</style>
      <section className="s13-section" id="section-12">
        <div className="s13-inner">
          <div className="s13-container">
            <div className="s13-header">
              <h2 className="s13-header__title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle} <span className="s13-header__brand">{sectionTitleBrand}</span> about <span className="s13-header__product">LLM Capsule</span>
              </h2>
            </div>

            <div className="s13-ac-list" role="list">
              {faqData.map((item, i) => (
                <div key={i} className="s13-ac-card" role="listitem">
                  <button
                    className="s13-ac-header"
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="s13-ac-title">{item.q}</span>
                    <span className={`s13-ac-toggle${openIndex === i ? " s13-ac-toggle--open" : ""}`} aria-hidden="true" />
                  </button>
                  {openIndex === i && (
                    <div className="s13-ac-body">{item.a}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Explore Further */}
            <h3 className="s13-explore-header">{exploreHeader}</h3>
            <div className="s13-explore-grid">
              {exploreLinks.map((link, i) => (
                <a key={i} href={link.href} className="s13-dark-card">
                  <div className="s13-dark-card__header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{link.icon}</svg>
                    <h3 className="s13-dark-card__title">{link.title}</h3>
                  </div>
                  <div className="s13-dark-card__arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section13_FAQ, {
  sectionTitle:      { type: ControlType.String, title: "Title",           defaultValue: "Common" },
  sectionTitleBrand: { type: ControlType.String, title: "Title (brand)",  defaultValue: "Questions" },
  exploreHeader:     { type: ControlType.String, title: "Explore Header",  defaultValue: "Explore further" },
  link1Title:        { type: ControlType.String, title: "Link 1 Title",    defaultValue: "Architecture" },
  link2Title:        { type: ControlType.String, title: "Link 2 Title",    defaultValue: "Trust & Compliance" },
  link3Title:        { type: ControlType.String, title: "Link 3 Title",    defaultValue: "Request a Demo" },
  link4Title:        { type: ControlType.String, title: "Link 4 Title",    defaultValue: "Why Redaction Breaks AI" },
  link5Title:        { type: ControlType.String, title: "Link 5 Title",    defaultValue: "vs Masking Tools" },
  link6Title:        { type: ControlType.String, title: "Link 6 Title",    defaultValue: "vs Prompt Gateways" },
  link7Title:        { type: ControlType.String, title: "Link 7 Title",    defaultValue: "vs Synthetic Data" },
  link8Title:        { type: ControlType.String, title: "Link 8 Title",    defaultValue: "Restoration" },
  link9Title:        { type: ControlType.String, title: "Link 9 Title",    defaultValue: "Pricing" },
  link10Title:       { type: ControlType.String, title: "Link 10 Title",   defaultValue: "Learn Hub" },
  link11Title:       { type: ControlType.String, title: "Link 11 Title",   defaultValue: "Glossary" },
  faq1Q:             { type: ControlType.String, title: "FAQ 1 Question",  defaultValue: "Does raw data ever leave the environment?" },
  faq1A:             { type: ControlType.String, title: "FAQ 1 Answer",    defaultValue: "No. LLM Capsule encapsulates sensitive entities locally before any data leaves the enterprise environment. The external AI model processes only the protected capsule — raw original data never crosses the trust boundary. The mapping between original and encapsulated values is stored entirely within your environment and never transmitted externally.", displayTextArea: true },
  faq2Q:             { type: ControlType.String, title: "FAQ 2 Question",  defaultValue: "Where does restoration happen?" },
  faq2A:             { type: ControlType.String, title: "FAQ 2 Answer",    defaultValue: "Restoration happens entirely inside the customer-controlled environment after AI processing completes. The locally stored mapping is applied to AI outputs automatically, restoring original names, figures, dates, and references into the results. This produces enterprise-ready outputs that are directly usable in business workflows — no manual reconstruction required.", displayTextArea: true },
  faq3Q:             { type: ControlType.String, title: "FAQ 3 Question",  defaultValue: "Can we define our own sensitive entities?" },
  faq3A:             { type: ControlType.String, title: "FAQ 3 Answer",    defaultValue: "Yes. LLM Capsule supports enterprise context control so teams can define business-specific confidential markers beyond standard PII categories. This includes internal identifiers, project names, customer-specific terms, contract references, financial figures, vulnerability labels, and any organization-specific sensitivity category.", displayTextArea: true },
  faq4Q:             { type: ControlType.String, title: "FAQ 4 Question",  defaultValue: "Does it support document-heavy workflows?" },
  faq4A:             { type: ControlType.String, title: "FAQ 4 Answer",    defaultValue: "Yes. LLM Capsule supports structure-preserving processing across enterprise document types including PDFs, Word documents, spreadsheets, tables, presentations, reports, and mixed-format business content. Document structure, entity relationships, and cross-references are maintained during encapsulation.", displayTextArea: true },
  faq5Q:             { type: ControlType.String, title: "FAQ 5 Question",  defaultValue: "Can it fit existing enterprise systems?" },
  faq5A:             { type: ControlType.String, title: "FAQ 5 Answer",    defaultValue: "Yes. LLM Capsule is built as a deployable component and supports API and SDK-based integration into existing enterprise portals, partner backends, customer-facing applications, and internal workflow platforms. It wraps existing AI integrations with encapsulation and restoration at the data layer.", displayTextArea: true },
  faq6Q:             { type: ControlType.String, title: "FAQ 6 Question",  defaultValue: "Is AWS Marketplace deployment available?" },
  faq6A:             { type: ControlType.String, title: "FAQ 6 Answer",    defaultValue: "Yes. LLM Capsule is available on AWS Marketplace for streamlined enterprise procurement, billing, and VPC deployment. This enables rapid deployment within existing AWS environments with standard enterprise procurement workflows.", displayTextArea: true },
  faq7Q:             { type: ControlType.String, title: "FAQ 7 Question",  defaultValue: "Can it run in air-gapped or on-premise environments?" },
  faq7A:             { type: ControlType.String, title: "FAQ 7 Answer",    defaultValue: "Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. For air-gapped environments, documents are encapsulated on the isolated network, transferred through controlled channels for AI processing, and results are transferred back for local restoration.", displayTextArea: true },
  faq8Q:             { type: ControlType.String, title: "FAQ 8 Question",  defaultValue: "What AI models does LLM Capsule support?" },
  faq8A:             { type: ControlType.String, title: "FAQ 8 Answer",    defaultValue: "LLM Capsule is model-agnostic. Because it operates at the data layer — not the model layer — it works with any external AI service including ChatGPT, Claude, Gemini, Perplexity, or any LLM API. Protection remains stable even when model vendors change.", displayTextArea: true },
})
