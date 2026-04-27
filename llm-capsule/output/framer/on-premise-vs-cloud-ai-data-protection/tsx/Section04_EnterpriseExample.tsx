import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral150:     "#e6e7e9",
  neutral200:     "#e0e0e0",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0,0,0,0.04)",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  sectionLabelHighlight?: string
  cardTitle?: string
  cardParagraph1?: string
  cardParagraph2?: string
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section04_EnterpriseExample({
  sectionLabel = "Enterprise ",
  sectionLabelHighlight = "Example",
  cardTitle = "Government Agency — Air-Gapped Deployment",
  cardParagraph1 = "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.",
  cardParagraph2 = "LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s4 (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container s4 (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container s4 (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        .s4-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s4-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        @container s4 (min-width: 768px)  { .s4-header h2 { font-size: 22px; } }
        @container s4 (min-width: 1024px) { .s4-header h2 { font-size: 24px; } }
        @container s4 (min-width: 1440px) { .s4-header h2 { font-size: 28px; } }
        @container s4 (max-width: 767px)  { .s4-header { text-align: left; } }

        .s4-brand { color: ${C.brandSecondary}; }

        .s4-card {
          background-color: ${C.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${C.neutral150};
          padding: 24px;
          box-shadow: ${C.shadowCard};
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @container s4 (min-width: 1440px) { .s4-card { padding: 32px; } }

        .s4-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
          text-wrap: pretty;
        }
        .s4-card p {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${C.textSecondary};
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionLabel}<span className="s4-brand">{sectionLabelHighlight}</span>
              </h2>
            </div>
            <div className="s4-card">
              <h4 className="s4-card__title">{cardTitle}</h4>
              <p>{cardParagraph1}</p>
              <p>{cardParagraph2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_EnterpriseExample, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Enterprise ",
  },
  sectionLabelHighlight: {
    type: ControlType.String,
    title: "Section Label Highlight",
    defaultValue: "Example",
  },
  cardTitle: {
    type: ControlType.String,
    title: "Card Title",
    defaultValue: "Government Agency — Air-Gapped Deployment",
  },
  cardParagraph1: {
    type: ControlType.String,
    title: "Card Paragraph 1",
    defaultValue: "A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.",
    displayTextArea: true,
  },
  cardParagraph2: {
    type: ControlType.String,
    title: "Card Paragraph 2",
    defaultValue: "LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.",
    displayTextArea: true,
  },
})
