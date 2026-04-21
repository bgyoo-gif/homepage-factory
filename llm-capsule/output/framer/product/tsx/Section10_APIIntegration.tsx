import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
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
}

export default function Section10_APIIntegration({
  sectionTitle = "Built to fit existing enterprise",
  sectionTitleBrand = "systems",
  sectionDescription = "LLM Capsule works as a deployable component through API and SDK integration patterns, making it practical to embed into existing products, portals, and internal workflows.",
  body = "The API provides LLM API enablement at the data layer — wrap any existing AI integration with encapsulation and restoration without rebuilding the application.",
  card1Title = "Internal enterprise portals",
  card1Desc = "Embed protection into existing employee-facing AI tools and knowledge systems.",
  card2Title = "Partner backends",
  card2Desc = "Integrate into partner platforms and B2B workflows with API-based encapsulation.",
  card3Title = "Secure document workflows",
  card3Desc = "Add protection to existing document processing, review, and approval pipelines.",
  card4Title = "AI-assisted analysis tools",
  card4Desc = "Wrap analysis and extraction tools with data protection at the API layer.",
  card5Title = "Customer-facing AI features",
  card5Desc = "Enable customer-facing AI capabilities without exposing internal data to external models.",
}: Props) {
  const cards = [
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
      title: card1Title,
      desc: card1Desc,
    },
    {
      icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
      title: card2Title,
      desc: card2Desc,
    },
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></>,
      title: card3Title,
      desc: card3Desc,
    },
    {
      icon: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2"/></>,
      title: card4Title,
      desc: card4Desc,
    },
    {
      icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
      title: card5Title,
      desc: card5Desc,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s10-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s10-inner { width: 100%; container-type: inline-size; }
        .s10-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s10-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s10-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s10-container { padding: 0 120px; max-width: 1440px; } }

        .s10-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s10-header { text-align: left; } }
        .s10-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s10-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s10-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s10-header__title { font-size: 28px; } }
        .s10-header__brand { color: ${PALETTE.brandSecondary}; }
        .s10-header__desc {
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
        @container (min-width: 1024px) { .s10-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s10-header__desc { max-width: 1080px; } }

        .s10-body {
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
        @container (min-width: 1024px) { .s10-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s10-body { max-width: 1080px; } }

        .s10-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .s10-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .s10-grid { grid-template-columns: repeat(3, 1fr); } }

        .s10-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
        }
        @container (min-width: 1440px) { .s10-card { padding: 32px; } }

        .s10-card-icon { margin-bottom: 12px; color: ${PALETTE.brandSecondary}; }
        .s10-card-icon svg {
          width: 32px; height: 32px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s10-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0 0 12px;
          text-wrap: balance;
        }
        .s10-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          flex: 1;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s10-section" id="section-9">
        <div className="s10-inner">
          <div className="s10-container">
            <div className="s10-header">
              <h2 className="s10-header__title">
                {sectionTitle} <span className="s10-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s10-header__desc">{sectionDescription}</p>
            </div>

            <p className="s10-body">{body}</p>

            <div className="s10-grid">
              {cards.map((c, i) => (
                <article key={i} className="s10-card">
                  <div className="s10-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{c.icon}</svg>
                  </div>
                  <h3 className="s10-card-title">{c.title}</h3>
                  <p className="s10-card-desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_APIIntegration, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Built to fit existing enterprise" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "systems" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "LLM Capsule works as a deployable component through API and SDK integration patterns, making it practical to embed into existing products, portals, and internal workflows.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",          defaultValue: "The API provides LLM API enablement at the data layer — wrap any existing AI integration with encapsulation and restoration without rebuilding the application.", displayTextArea: true },
  card1Title:         { type: ControlType.String, title: "Card 1 Title",  defaultValue: "Internal enterprise portals" },
  card1Desc:          { type: ControlType.String, title: "Card 1 Desc",   defaultValue: "Embed protection into existing employee-facing AI tools and knowledge systems.", displayTextArea: true },
  card2Title:         { type: ControlType.String, title: "Card 2 Title",  defaultValue: "Partner backends" },
  card2Desc:          { type: ControlType.String, title: "Card 2 Desc",   defaultValue: "Integrate into partner platforms and B2B workflows with API-based encapsulation.", displayTextArea: true },
  card3Title:         { type: ControlType.String, title: "Card 3 Title",  defaultValue: "Secure document workflows" },
  card3Desc:          { type: ControlType.String, title: "Card 3 Desc",   defaultValue: "Add protection to existing document processing, review, and approval pipelines.", displayTextArea: true },
  card4Title:         { type: ControlType.String, title: "Card 4 Title",  defaultValue: "AI-assisted analysis tools" },
  card4Desc:          { type: ControlType.String, title: "Card 4 Desc",   defaultValue: "Wrap analysis and extraction tools with data protection at the API layer.", displayTextArea: true },
  card5Title:         { type: ControlType.String, title: "Card 5 Title",  defaultValue: "Customer-facing AI features" },
  card5Desc:          { type: ControlType.String, title: "Card 5 Desc",   defaultValue: "Enable customer-facing AI capabilities without exposing internal data to external models.", displayTextArea: true },
})
