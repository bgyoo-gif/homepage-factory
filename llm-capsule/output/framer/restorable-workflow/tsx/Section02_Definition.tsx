import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#5b4fe9",
  brandSecondary: "#0ea5a4",
  neutral900: "#0f1130",
  neutral500: "#3a3d5e",
  neutral400: "#6b7280",
  neutral150: "#e5e7eb",
  neutral100: "#f7f8fb",
  neutral025: "#f7f8fb",
  white:      "#ffffff",
  textPrimary:   "#0f1130",
  textSecondary: "#3a3d5e",
  textTertiary:  "#6b7280",
  surfaceWhite: "#ffffff",
  brandTintBg: "rgba(24, 33, 232, 0.06)",
}

interface Props {
  label?: string
  bodyText?: string
}

export default function Section02_Definition({
  label = "DEFINITION",
  bodyText = "A restorable workflow is a context-preserving data layer for AI pattern in which sensitive enterprise data is replaced with reversible, structure-preserving representations before AI processing. After the AI model generates outputs, local restoration automatically restores original enterprise data into the results, producing enterprise-ready outputs without manual post-processing. This is the core mechanism by which LLM Capsule enables AI adoption on sensitive data.",
}: Props) {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
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
          border-top: 1px solid ${PALETTE.neutral150};
          border-bottom: 1px solid ${PALETTE.neutral150};
          background-color: ${PALETTE.brandTintBg};
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
          color: ${PALETTE.textTertiary};
          margin-bottom: 8px;
          display: block;
        }

        .s2-banner__text {
          font-family: var(--f-display, 'Inter'), sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
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
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s2-section" id="section-3">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-banner">
              <span className="s2-banner__label">{label}</span>
              <p className="s2-banner__text">{bodyText}</p>
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
  bodyText: {
    type: ControlType.String,
    title: "Body Text",
    defaultValue: "A restorable workflow is a context-preserving data layer for AI pattern in which sensitive enterprise data is replaced with reversible, structure-preserving representations before AI processing. After the AI model generates outputs, local restoration automatically restores original enterprise data into the results, producing enterprise-ready outputs without manual post-processing. This is the core mechanism by which LLM Capsule enables AI adoption on sensitive data.",
    displayTextArea: true,
  },
})
