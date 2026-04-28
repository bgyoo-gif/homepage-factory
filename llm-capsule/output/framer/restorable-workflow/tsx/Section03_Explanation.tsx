import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral900: "#0f0f0f",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
}

interface Props {
  sectionHeading?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section03_Explanation({
  sectionHeading = "Explanation",
  paragraph1 = "Traditional data protection workflows are one-directional: protect data, process it, and accept that outputs lack original context. A restorable workflow closes the loop — outputs are automatically restored with real enterprise data. This is what makes LLM Capsule an AI enabler rather than just a data protector.",
  paragraph2 = "The key properties of a restorable workflow are: reversible encapsulation (not permanent masking), locally stored mappings (never transmitted), structure-preserving protection (AI accuracy maintained), and deterministic restoration (outputs exactly match original data).",
}: Props) {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.neutral150};
          text-align: center;
        }

        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }

        .s3-brand {
          color: ${PALETTE.brandSecondary};
        }

        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s3-paragraph:last-child {
          margin-bottom: 0;
        }

        .s3-paragraph--strong {
          font-weight: 500;
        }

        .s3-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
        }

        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
        }

        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-section-header h2 { font-size: 28px; }
          .s3-section-header { text-align: center; }
        }
      `}</style>

      <section className="s3-section" id="section-4">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s3-brand">{sectionHeading}</span></h2>
            </div>
            <p className="s3-paragraph">{paragraph1}</p>
            <p className="s3-paragraph s3-paragraph--strong">
              {paragraph2}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Explanation, {
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Explanation",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Traditional data protection workflows are one-directional: protect data, process it, and accept that outputs lack original context. A restorable workflow closes the loop — outputs are automatically restored with real enterprise data. This is what makes LLM Capsule an AI enabler rather than just a data protector.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "The key properties of a restorable workflow are: reversible encapsulation (not permanent masking), locally stored mappings (never transmitted), structure-preserving protection (AI accuracy maintained), and deterministic restoration (outputs exactly match original data).",
    displayTextArea: true,
  },
})
