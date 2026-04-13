import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#1821E8",
  textPrimary:    "#0f0f0f",
  textTertiary:   "#9c9c9c",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  brandTint:      "rgba(24, 33, 232, 0.06)",
}

interface Props {
  label?: string
  body?: string
}

export default function Section02_Definition({
  label = "DEFINITION",
  body = "Enterprise context control is a policy-based approach to sensitivity classification in AI workflows. Rather than applying uniform rules to all data, it determines what to protect based on document type, department origin, workflow stage, and enterprise-specific sensitivity policies. It is a core component of context-aware data control.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        @container (min-width: 768px) {
          .s2-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s2-section { padding: 60px 0; }
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

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        .s2-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.brandTint};
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s2-banner__label {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${PALETTE.textTertiary};
          margin-bottom: 8px;
          display: block;
        }

        .s2-banner__body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-banner">
              <span className="s2-banner__label">{label}</span>
              <p className="s2-banner__body">{body}</p>
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
  body: {
    type: ControlType.String,
    title: "Body",
    defaultValue:
      "Enterprise context control is a policy-based approach to sensitivity classification in AI workflows. Rather than applying uniform rules to all data, it determines what to protect based on document type, department origin, workflow stage, and enterprise-specific sensitivity policies. It is a core component of context-aware data control.",
    displayTextArea: true,
  },
})
