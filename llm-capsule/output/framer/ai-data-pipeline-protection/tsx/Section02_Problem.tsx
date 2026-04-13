import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section02_Problem({
  sectionLabel = "Problem",
  paragraph1 = "Enterprise AI pipelines move data through multiple stages and systems. Documents are ingested from internal sources, pre-processed for AI consumption, sent to language models, processed, and outputs are routed back to business systems. Each stage represents a potential exposure point.",
  paragraph2 = "Point solutions — API gateways that filter prompts, output scanners that check responses — address individual stages but leave gaps between them. AI data pipeline protection requires a continuous data-layer approach.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          overflow: hidden;
          padding: 32px 0;
          background-color: ${P.surfaceWhite};
        }
        @container (min-width: 768px)  { .s2-section { padding: 48px 0; } }
        @container (min-width: 1024px) { .s2-section { padding: 48px 0; } }
        @container (min-width: 1440px) { .s2-section { padding: 64px 0; } }

        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0; } }

        .s2-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s2-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        @container (min-width: 768px)  { .s2-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s2-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s2-header h2 { font-size: 28px; } }

        .s2-brand { color: ${P.brandSecondary}; }

        .s2-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }
      `}</style>

      <section className="s2-section" id="section-3">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2><span className="s2-brand">{sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">{paragraph1}</p>
            <p className="s2-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Problem",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Enterprise AI pipelines move data through multiple stages and systems. Documents are ingested from internal sources, pre-processed for AI consumption, sent to language models, processed, and outputs are routed back to business systems. Each stage represents a potential exposure point.",
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "Point solutions — API gateways that filter prompts, output scanners that check responses — address individual stages but leave gaps between them. AI data pipeline protection requires a continuous data-layer approach.",
  },
})
