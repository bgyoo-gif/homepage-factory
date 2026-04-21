import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
  shadowCard:     "0px 24px 40px rgba(0,0,0,0.04)",
  trackingTight:  "-0.5px",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionHeadingPre?: string
  sectionHeadingHighlight?: string
  cardTitle?: string
  productName?: string
}

const BULLETS = [
  {
    strong: "A law firm needs AI to review 200 acquisition agreements.",
    rest: " Extract key terms — parties, obligations, termination clauses, governing law. Each agreement contains names of real companies, executives, and financial figures.",
    product: null,
  },
  {
    strong: "With redaction:",
    rest: ' Party names become "[REDACTED]," making it impossible to distinguish acquirer from target. Financial terms become "[AMOUNT]," preventing comparison across agreements. The AI produces generic extraction that requires 200 rounds of manual restoration.',
    product: null,
  },
  {
    strong: null,
    rest: " Sensitive elements are encapsulated locally with structure-preserving processing. AI processes the protected documents and produces structured extractions. Local restoration restores all real party names, amounts, and clause references. The extraction output is directly usable in the firm's deal management system.",
    product: "LLM Capsule",
    withLabel: "With",
  },
]

export default function Section06_EnterpriseExample({
  sectionHeadingPre = "Enterprise",
  sectionHeadingHighlight = "Example",
  cardTitle = "Legal Contract Review",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s6;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s6-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s6-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: pretty;
        }
        .s6-brand { color: ${C.brandSecondary}; }
        .s6-product {
          font-family: "${C.brandFont}", sans-serif;
          font-weight: 700;
        }
        .s6-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.borderDefault};
          padding: 24px;
          box-shadow: ${C.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s6-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }
        .s6-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s6-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s6-bullet__icon::before {
          content: "•";
          color: ${C.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container s6 (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 22px; }
          .s6-section { padding: 40px 0; }
          .s6-card { padding: 32px; }
        }
        @container s6 (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section-header h2 { font-size: 24px; }
          .s6-section { padding: 60px 0; }
        }
        @container s6 (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section-header h2 { font-size: 28px; }
          .s6-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionHeadingPre}{" "}
                <span className="s6-brand">{sectionHeadingHighlight}</span>
              </h2>
            </div>
            <div className="s6-card">
              <h4 className="s6-card__title">{cardTitle}</h4>
              <ul className="s6-bullet">
                <li className="s6-bullet__item">
                  <span className="s6-bullet__icon" aria-hidden="true"></span>
                  <span>
                    <strong>A law firm needs AI to review 200 acquisition agreements.</strong>{" "}
                    Extract key terms — parties, obligations, termination clauses, governing law. Each agreement contains names of real companies, executives, and financial figures.
                  </span>
                </li>
                <li className="s6-bullet__item">
                  <span className="s6-bullet__icon" aria-hidden="true"></span>
                  <span>
                    <strong>With redaction:</strong>{" "}
                    Party names become "[REDACTED]," making it impossible to distinguish acquirer from target. Financial terms become "[AMOUNT]," preventing comparison across agreements. The AI produces generic extraction that requires 200 rounds of manual restoration.
                  </span>
                </li>
                <li className="s6-bullet__item">
                  <span className="s6-bullet__icon" aria-hidden="true"></span>
                  <span>
                    <strong>With <span className="s6-product">{productName}</span>:</strong>{" "}
                    Sensitive elements are encapsulated locally with structure-preserving processing. AI processes the protected documents and produces structured extractions. Local restoration restores all real party names, amounts, and clause references. The extraction output is directly usable in the firm's deal management system.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_EnterpriseExample, {
  sectionHeadingPre: {
    type: ControlType.String,
    title: "Heading (Pre)",
    defaultValue: "Enterprise",
  },
  sectionHeadingHighlight: {
    type: ControlType.String,
    title: "Heading (Highlight)",
    defaultValue: "Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Legal Contract Review",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
