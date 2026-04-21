import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
}

interface BulletItem {
  bold: string
  text: string
}

const DEFAULT_ITEMS: BulletItem[] = [
  {
    bold: "Not suitable for document processing.",
    text: " Synthetic data platforms generate tabular data, not documents. They cannot create synthetic versions of contracts, medical records, or legal filings that retain their specific content and meaning.",
  },
  {
    bold: "Loss of specificity.",
    text: " Synthetic data preserves statistical patterns but not specific enterprise content. You cannot summarize a synthetic contract — it does not contain real terms, real parties, or real obligations.",
  },
  {
    bold: "No real-world output.",
    text: " AI outputs based on synthetic data describe synthetic scenarios, not real enterprise situations. There is no mechanism to map synthetic outputs back to real enterprise context.",
  },
]

interface Props {
  sectionLabel?: string
  item1Bold?: string
  item1Text?: string
  item2Bold?: string
  item2Text?: string
  item3Bold?: string
  item3Text?: string
}

export default function Section04_Limitations({
  sectionLabel = "Limitations",
  item1Bold = "Not suitable for document processing.",
  item1Text = " Synthetic data platforms generate tabular data, not documents. They cannot create synthetic versions of contracts, medical records, or legal filings that retain their specific content and meaning.",
  item2Bold = "Loss of specificity.",
  item2Text = " Synthetic data preserves statistical patterns but not specific enterprise content. You cannot summarize a synthetic contract — it does not contain real terms, real parties, or real obligations.",
  item3Bold = "No real-world output.",
  item3Text = " AI outputs based on synthetic data describe synthetic scenarios, not real enterprise situations. There is no mechanism to map synthetic outputs back to real enterprise context.",
}: Props) {
  const items = [
    { bold: item1Bold, text: item1Text },
    { bold: item2Bold, text: item2Text },
    { bold: item3Bold, text: item3Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
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

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }

        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s4-brand-text {
          color: ${PALETTE.brandSecondary};
        }

        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet__icon::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s4-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-section-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s4-brand-text">{sectionLabel}</span></h2>
            </div>
            <ul className="s4-bullet">
              {items.map((item, idx) => (
                <li key={idx} className="s4-bullet__item">
                  <span className="s4-bullet__icon"></span>
                  <span><strong>{item.bold}</strong>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Limitations, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Limitations",
  },
  item1Bold: {
    type: ControlType.String,
    title: "Item 1 Bold",
    defaultValue: "Not suitable for document processing.",
  },
  item1Text: {
    type: ControlType.String,
    title: "Item 1 Text",
    defaultValue: " Synthetic data platforms generate tabular data, not documents. They cannot create synthetic versions of contracts, medical records, or legal filings that retain their specific content and meaning.",
    displayTextArea: true,
  },
  item2Bold: {
    type: ControlType.String,
    title: "Item 2 Bold",
    defaultValue: "Loss of specificity.",
  },
  item2Text: {
    type: ControlType.String,
    title: "Item 2 Text",
    defaultValue: " Synthetic data preserves statistical patterns but not specific enterprise content. You cannot summarize a synthetic contract — it does not contain real terms, real parties, or real obligations.",
    displayTextArea: true,
  },
  item3Bold: {
    type: ControlType.String,
    title: "Item 3 Bold",
    defaultValue: "No real-world output.",
  },
  item3Text: {
    type: ControlType.String,
    title: "Item 3 Text",
    defaultValue: " AI outputs based on synthetic data describe synthetic scenarios, not real enterprise situations. There is no mechanism to map synthetic outputs back to real enterprise context.",
    displayTextArea: true,
  },
})
