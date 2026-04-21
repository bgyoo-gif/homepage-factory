import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  body?: string
  card1Title?: string
  card1Desc?: string
  card2Title?: string
  card2Desc?: string
  card3Title?: string
  card3Desc?: string
  card4Title?: string
  card4Desc?: string
  card5Title?: string
  card5Desc?: string
  card6Title?: string
  card6Desc?: string
  card7Title?: string
  card7Desc?: string
}

export default function Section05_EnterpriseContext({
  sectionTitle = "Control what matters to your business — beyond generic",
  sectionTitleBrand = "PII",
  sectionDescription = "LLM Capsule lets teams define sensitive entities beyond standard PII categories, including internal identifiers, project names, customer-specific markers, and organization-specific confidential terms.",
  body = "Enterprise data protection is not limited to names, phone numbers, or IDs. Real workflows often depend on internal project names, contract references, operational code names, and confidential business terms. Context-aware data control enables policy-based sensitivity classification that adapts to document type, department origin, and workflow context — providing enterprise AI governance controls that go far beyond standard PII regex matching.",
  card1Title = "Internal code names",
  card1Desc = "Project names and operational identifiers",
  card2Title = "Customer identifiers",
  card2Desc = "Customer-specific account codes and references",
  card3Title = "Contract references",
  card3Desc = "Deal terms, agreement numbers, clause identifiers",
  card4Title = "Financial terms",
  card4Desc = "Pricing models, valuation ranges, internal metrics",
  card5Title = "Vulnerability labels",
  card5Desc = "Security findings, CVE references, risk assessments",
  card6Title = "Strategic data",
  card6Desc = "M&A targets, competitive intelligence, board-level data",
  card7Title = "Custom markers",
  card7Desc = "Business-specific confidential markers defined by your team",
}: Props) {
  const features = [
    {
      icon: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>,
      title: card1Title,
      desc: card1Desc,
    },
    {
      icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
      title: card2Title,
      desc: card2Desc,
    },
    {
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>,
      title: card3Title,
      desc: card3Desc,
    },
    {
      icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
      title: card4Title,
      desc: card4Desc,
    },
    {
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
      title: card5Title,
      desc: card5Desc,
    },
    {
      icon: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2"/></>,
      title: card6Title,
      desc: card6Desc,
    },
    {
      icon: <><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></>,
      title: card7Title,
      desc: card7Desc,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s5-inner { width: 100%; container-type: inline-size; }
        .s5-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }

        .s5-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s5-header { text-align: left; } }
        .s5-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s5-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s5-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s5-header__title { font-size: 28px; } }
        .s5-header__brand { color: ${PALETTE.brandSecondary}; }
        .s5-header__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s5-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s5-header__desc { max-width: 1080px; } }

        .s5-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 32px;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s5-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s5-body { max-width: 1080px; } }

        /* Feature Grid */
        .s5-feature-grid {
          background-color: ${PALETTE.white};
          border: 1px solid ${PALETTE.borderDefault};
          border-radius: 40px;
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 48px;
        }
        @container (max-width: 767px) {
          .s5-feature-grid { grid-template-columns: 1fr; padding: 24px; }
        }
        .s5-feature-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s5-feature-item--hidden { visibility: hidden; }
        .s5-feature-icon {
          margin-bottom: 4px;
          color: ${PALETTE.brandSecondary};
        }
        .s5-feature-icon svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s5-feature-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          margin: 0;
        }
        .s5-feature-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
      <section className="s5-section" id="section-5">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 className="s5-header__title">
                {sectionTitle} <span className="s5-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s5-header__desc">{sectionDescription}</p>
            </div>

            <p className="s5-body">{body}</p>

            <div className="s5-feature-grid">
              {features.map((f, i) => (
                <div key={i} className="s5-feature-item">
                  <div className="s5-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <h3 className="s5-feature-title">{f.title}</h3>
                  <p className="s5-feature-desc">{f.desc}</p>
                </div>
              ))}
              {/* Placeholder for 2-col alignment */}
              <div className="s5-feature-item s5-feature-item--hidden" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_EnterpriseContext, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Control what matters to your business — beyond generic" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "PII" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "LLM Capsule lets teams define sensitive entities beyond standard PII categories, including internal identifiers, project names, customer-specific markers, and organization-specific confidential terms.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",          defaultValue: "Enterprise data protection is not limited to names, phone numbers, or IDs. Real workflows often depend on internal project names, contract references, operational code names, and confidential business terms. Context-aware data control enables policy-based sensitivity classification that adapts to document type, department origin, and workflow context — providing enterprise AI governance controls that go far beyond standard PII regex matching.", displayTextArea: true },
  card1Title:         { type: ControlType.String, title: "Card 1 Title",  defaultValue: "Internal code names" },
  card1Desc:          { type: ControlType.String, title: "Card 1 Desc",   defaultValue: "Project names and operational identifiers", displayTextArea: true },
  card2Title:         { type: ControlType.String, title: "Card 2 Title",  defaultValue: "Customer identifiers" },
  card2Desc:          { type: ControlType.String, title: "Card 2 Desc",   defaultValue: "Customer-specific account codes and references", displayTextArea: true },
  card3Title:         { type: ControlType.String, title: "Card 3 Title",  defaultValue: "Contract references" },
  card3Desc:          { type: ControlType.String, title: "Card 3 Desc",   defaultValue: "Deal terms, agreement numbers, clause identifiers", displayTextArea: true },
  card4Title:         { type: ControlType.String, title: "Card 4 Title",  defaultValue: "Financial terms" },
  card4Desc:          { type: ControlType.String, title: "Card 4 Desc",   defaultValue: "Pricing models, valuation ranges, internal metrics", displayTextArea: true },
  card5Title:         { type: ControlType.String, title: "Card 5 Title",  defaultValue: "Vulnerability labels" },
  card5Desc:          { type: ControlType.String, title: "Card 5 Desc",   defaultValue: "Security findings, CVE references, risk assessments", displayTextArea: true },
  card6Title:         { type: ControlType.String, title: "Card 6 Title",  defaultValue: "Strategic data" },
  card6Desc:          { type: ControlType.String, title: "Card 6 Desc",   defaultValue: "M&A targets, competitive intelligence, board-level data", displayTextArea: true },
  card7Title:         { type: ControlType.String, title: "Card 7 Title",  defaultValue: "Custom markers" },
  card7Desc:          { type: ControlType.String, title: "Card 7 Desc",   defaultValue: "Business-specific confidential markers defined by your team", displayTextArea: true },
})
