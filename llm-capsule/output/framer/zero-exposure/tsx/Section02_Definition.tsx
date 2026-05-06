import { addPropertyControls, ControlType } from "framer"

const BRAND = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  textPrimary:   "#0f1130",
  textSecondary: "#3a3d5e",
  textTertiary:  "#6b7280",
  neutral400: "#6b7280",
  neutral025: "#f7f8fb",
  borderDefault: "#e5e7eb",
  surfaceWhite:  "#ffffff",
}

interface Props {
  label?: string
  definitionText?: string
  productName?: string
}

export default function Section02_Definition({
  label = "DEFINITION",
  definitionText = "Zero exposure is a core capability of",
  productName = "LLM Capsule",
}: Props) {
  const definitionSuffix =
    "'s AI enablement data layer in which original sensitive enterprise data never leaves the enterprise environment during AI processing. Only encapsulated representations — with sensitive values replaced by structure-preserving tokens — cross the trust boundary to external AI services. Zero exposure is what enables enterprises to adopt AI confidently on their most sensitive data."

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${BRAND.surfaceWhite};
          overflow: hidden;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s2-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${BRAND.borderDefault};
          border-bottom: 1px solid ${BRAND.borderDefault};
          background-color: rgba(24, 33, 232, 0.06);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2-banner__label {
          font-family: var(--f-mono, 'JetBrains Mono'), "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${BRAND.textTertiary};
          margin-bottom: 8px;
          display: block;
        }
        .s2-banner__text {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 16px;
          color: ${BRAND.textPrimary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-product-name {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0; max-width: 1080px; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-banner">
              <span className="s2-banner__label">{label}</span>
              <p className="s2-banner__text">
                {definitionText}{" "}
                <span className="s2-product-name">{productName}</span>
                {definitionSuffix}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Definition, {
  label: {
    type: ControlType.String,
    title: "Label",
    defaultValue: "DEFINITION",
  },
  definitionText: {
    type: ControlType.String,
    title: "Definition Text (before product name)",
    defaultValue: "Zero exposure is a core capability of",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
