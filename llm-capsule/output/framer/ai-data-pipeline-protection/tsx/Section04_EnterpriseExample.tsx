import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface Props {
  sectionLabel?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2?: string
  productName?: string
}

export default function Section04_EnterpriseExample({
  sectionLabel = "Enterprise Example",
  sectionLabelHighlight = "Example",
  cardTitle = "Telecom Customer Service Automation",
  cardParagraph1 = "A telecom company routes 50,000 customer support tickets per month through AI for automated categorization, priority scoring, and response drafting. Tickets contain customer account numbers, addresses, service plan details, and payment history.",
  cardParagraph2 = "LLM Capsule enables the entire pipeline: tickets are encapsulated at ingestion, AI processes protected tickets, responses are restored with real customer data, and formatted outputs route directly to the support platform.",
  productName = "LLM Capsule",
}: Props & { sectionLabelHighlight?: string }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          overflow: hidden;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .s4-section { padding: 48px 0; } }
        @container (min-width: 1024px) { .s4-section { padding: 48px 0; } }
        @container (min-width: 1440px) { .s4-section { padding: 64px 0; } }

        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0; } }

        .s4-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s4-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .s4-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s4-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s4-header h2 { font-size: 28px; } }

        .s4-brand { color: ${P.brandSecondary}; }

        .s4-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container (min-width: 1440px) { .s4-card { padding: 32px; } }

        .s4-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
          text-wrap: balance;
        }

        .s4-card__description {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
          color: ${P.textPrimary};
        }
      `}</style>

      <section className="s4-section" id="section-5">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2>
                Enterprise <span className="s4-brand">{sectionLabelHighlight}</span>
              </h2>
            </div>

            <div className="s4-card">
              <h4 className="s4-card__title">{cardTitle}</h4>
              <p className="s4-card__description">{cardParagraph1}</p>
              <p className="s4-card__description">
                <span className="s4-product">{productName}</span> enables the entire pipeline: tickets are encapsulated at ingestion, AI processes protected tickets, responses are restored with real customer data, and formatted outputs route directly to the support platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_EnterpriseExample, {
  sectionLabelHighlight: {
    type: ControlType.String,
    title: "Section Highlight",
    defaultValue: "Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Telecom Customer Service Automation",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "A telecom company routes 50,000 customer support tickets per month through AI for automated categorization, priority scoring, and response drafting. Tickets contain customer account numbers, addresses, service plan details, and payment history.",
  },
  cardParagraph2: {
    type: ControlType.String,
    title: "Card Paragraph 2 (after product name)",
    defaultValue: "enables the entire pipeline: tickets are encapsulated at ingestion, AI processes protected tickets, responses are restored with real customer data, and formatted outputs route directly to the support platform.",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
