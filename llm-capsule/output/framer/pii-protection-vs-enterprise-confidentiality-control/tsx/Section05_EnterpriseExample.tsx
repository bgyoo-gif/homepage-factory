import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0,0,0,0.04)",
  radiusMd:       "18px",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2?: string
  productName?: string
  locale?: "en" | "ko"
}

export default function Section05_EnterpriseExample({
  sectionLabel   = "Enterprise Example",
  cardTitle      = "M&A Due Diligence",
  cardParagraph1 = "An investment bank uses AI to analyze target company documents during due diligence. Documents contain no customer PII but are filled with sensitive deal terms, valuation models, and strategic assessments.",
  cardParagraph2 = "'s enterprise confidentiality control encapsulates deal-specific terminology, financial figures, and company identifiers. AI performs analysis on the protected documents. Local restoration restores deal context into the analysis outputs for the advisory team.",
  productName    = "LLM Capsule",
  locale         = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px)  { .s5-section { padding: 60px 0; } }
        @container (min-width: 1024px) { .s5-section { padding: 60px 0; } }
        @container (min-width: 1440px) { .s5-section { padding: 60px 0; } }

        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s5-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          font-family: "DM Sans", sans-serif;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s5-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s5-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s5-section-header h2 { font-size: 28px; } }

        .s5-text--brand { color: ${PALETTE.brandSecondary}; }

        .s5-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: ${PALETTE.radiusMd};
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-card__title {
          font-size: 18px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          text-wrap: balance;
        }
        .s5-card p {
          font-size: 16px;
          line-height: 1.7;
          color: ${PALETTE.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-card p + p { margin-top: 12px; }

        .s5-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>

      <section className="s5-section" id="section-5" lang={locale}>
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2>Enterprise <span className="s5-text--brand">Example</span></h2>
            </div>
            <div className="s5-card">
              <h4 className="s5-card__title">{cardTitle}</h4>
              <p>{cardParagraph1}</p>
              <p>
                <span className="s5-product-name">{productName}</span>
                {cardParagraph2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_EnterpriseExample, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Enterprise Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "M&A Due Diligence",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "An investment bank uses AI to analyze target company documents during due diligence. Documents contain no customer PII but are filled with sensitive deal terms, valuation models, and strategic assessments.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  cardParagraph2: {
    type: ControlType.String,
    title: "Card Paragraph 2",
    defaultValue: "'s enterprise confidentiality control encapsulates deal-specific terminology, financial figures, and company identifiers. AI performs analysis on the protected documents. Local restoration restores deal context into the analysis outputs for the advisory team.",
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
