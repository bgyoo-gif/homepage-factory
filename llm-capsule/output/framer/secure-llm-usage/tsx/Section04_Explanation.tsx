import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  neutral150: "#e6e7e9",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
}

interface Props {
  sectionTitlePrefix?: string
  sectionTitleMain?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section04_Explanation({
  sectionTitlePrefix = "Explanation",
  sectionTitleMain = "",
  paragraph1 = "Secure LLM usage is distinct from model-level security measures like prompt filtering or output scanning. Those approaches monitor the interaction with the AI model but do not prevent the data itself from being transmitted. Secure LLM usage operates at the data layer — transforming what the AI receives so that sensitive information never reaches the model.",
  paragraph2 = "This approach is model-agnostic. Whether the enterprise uses ChatGPT, Claude, Gemini, Perplexity, or any other LLM API, the AI enablement data layer remains consistent because it operates before the data reaches any model — enabling cross-model execution from a single AI enablement layer.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
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
        @container (min-width: 768px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }
        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }
        .s4-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
        }
        .s4-title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s4-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-paragraph:last-child { margin-bottom: 0; }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-title { font-size: 22px; }
          .s4-section-header { text-align: center; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-title { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-title { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s4-section-header { text-align: left; }
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 className="s4-section-title" style={{ wordBreak: "keep-all" }}>
                <span className="s4-title-brand">{sectionTitlePrefix}</span>
                {sectionTitleMain}
              </h2>
            </div>
            <p className="s4-paragraph">{paragraph1}</p>
            <p className="s4-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Explanation, {
  sectionTitlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Explanation",
  },
  sectionTitleMain: {
    type: ControlType.String,
    title: "Title Main",
    defaultValue: "",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Secure LLM usage is distinct from model-level security measures like prompt filtering or output scanning. Those approaches monitor the interaction with the AI model but do not prevent the data itself from being transmitted. Secure LLM usage operates at the data layer — transforming what the AI receives so that sensitive information never reaches the model.",
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "This approach is model-agnostic. Whether the enterprise uses ChatGPT, Claude, Gemini, Perplexity, or any other LLM API, the AI enablement data layer remains consistent because it operates before the data reaches any model — enabling cross-model execution from a single AI enablement layer.",
  },
})
