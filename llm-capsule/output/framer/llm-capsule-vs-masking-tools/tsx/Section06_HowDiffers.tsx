import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  textPrimary:    "#0f1130",
  textSecondary:  "#3a3d5e",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f8fb",
  borderDefault:  "#e5e7eb",
}

interface Props {
  heading?: string
  headingProduct?: string
  headingSuffix?: string
  paragraph?: string
  paragraphProduct?: string
  bannerStrong?: string
  bannerProduct?: string
  bannerText?: string
}

export default function Section06_HowDiffers({
  heading = "How",
  headingProduct = "LLM Capsule",
  headingSuffix = "Differs",
  paragraph = "replaces masking with encapsulation — a reversible, structure-preserving protection that maintains document integrity for AI processing and enables automated output restoration.",
  paragraphProduct = "LLM Capsule",
  bannerStrong = "AI results are automatically restored locally with original enterprise data.",
  bannerProduct = "LLM Capsule",
  bannerText = " is an AI enablement data layer that protects sensitive data while enabling usable enterprise AI outputs.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s6-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }
        .s6-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s6-header h2 {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s6-paragraph {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0 0 16px 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6-product {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-weight: 700;
        }
        .s6-banner {
          margin-top: 32px;
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0; max-width: 1080px; }
          .s6-header h2 { font-size: 28px; }
          .s6-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s6-section" id="section-6">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {heading} <span className="s6-product">{headingProduct}</span>{headingSuffix ? ` ${headingSuffix}` : ""}
              </h2>
            </div>
            <p className="s6-paragraph">
              <span className="s6-product">{paragraphProduct}</span> {paragraph}
            </p>
            <div className="s6-banner">
              <strong>{bannerStrong}</strong> <span className="s6-product">{bannerProduct}</span>{bannerText}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_HowDiffers, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "How",
  },
  headingProduct: {
    type: ControlType.String,
    title: "Heading Product",
    defaultValue: "LLM Capsule",
  },
  headingSuffix: {
    type: ControlType.String,
    title: "Heading Suffix",
    defaultValue: "Differs",
  },
  paragraph: {
    type: ControlType.String,
    title: "Paragraph",
    defaultValue: "replaces masking with encapsulation — a reversible, structure-preserving protection that maintains document integrity for AI processing and enables automated output restoration.",
    displayTextArea: true,
  },
  paragraphProduct: {
    type: ControlType.String,
    title: "Paragraph Product",
    defaultValue: "LLM Capsule",
  },
  bannerStrong: {
    type: ControlType.String,
    title: "Banner Strong",
    defaultValue: "AI results are automatically restored locally with original enterprise data.",
    displayTextArea: true,
  },
  bannerProduct: {
    type: ControlType.String,
    title: "Banner Product",
    defaultValue: "LLM Capsule",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: " is an AI enablement data layer that protects sensitive data while enabling usable enterprise AI outputs.",
    displayTextArea: true,
  },
})
