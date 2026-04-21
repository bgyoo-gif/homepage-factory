import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  neutral150: "#e6e7e9",
  neutral050: "#f2f2f2",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
  shadowCard: "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface Props {
  sectionTitlePrefix?: string
  sectionTitleMain?: string
  exampleText?: string
}

export default function Section05_Example({
  sectionTitlePrefix = "Example",
  sectionTitleMain = "",
  exampleText = "A legal team uses Claude to analyze contract clauses across 100 vendor agreements. Each agreement contains proprietary pricing, vendor names, and internal project codes. Secure LLM usage means Claude receives structurally intact contracts with protected values — it can perform clause analysis accurately, but never receives the original vendor names or pricing figures. Outputs are restored locally for the legal team.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s5-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
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
        @container (min-width: 768px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }
        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }
        .s5-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s5-title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s5-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.neutral150};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
        }
        .s5-card-text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-title { font-size: 24px; }
          .s5-card { padding: 32px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-title { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s5-section-header { text-align: left; }
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 className="s5-section-title" style={{ wordBreak: "keep-all" }}>
                <span className="s5-title-brand">{sectionTitlePrefix}</span>
                {sectionTitleMain}
              </h2>
            </div>
            <div className="s5-card">
              <p className="s5-card-text">{exampleText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_Example, {
  sectionTitlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Example",
  },
  sectionTitleMain: {
    type: ControlType.String,
    title: "Title Main",
    defaultValue: "",
  },
  exampleText: {
    type: ControlType.String,
    title: "Example Text",
    defaultValue: "A legal team uses Claude to analyze contract clauses across 100 vendor agreements. Each agreement contains proprietary pricing, vendor names, and internal project codes. Secure LLM usage means Claude receives structurally intact contracts with protected values — it can perform clause analysis accurately, but never receives the original vendor names or pricing figures. Outputs are restored locally for the legal team.",
  },
})
