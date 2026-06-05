import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
}

export default function Section01_Hero({
  eyebrow = "Resources",
  title = "Context-preserving data layer for AI",
  titleHighlight = "resources",
  subtitle = "Technical documentation, learning articles, glossary, and trust resources — for architects, CDOs, CISOs, privacy officers, and industry buyers building regulated AI workflows.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s1-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s1-hero {
          padding-top: clamp(80px, 10vw, 140px);
          padding-bottom: clamp(64px, 8vw, 96px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          text-align: center;
          background-color: var(--c-bg, #ffffff);
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s1-inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s1-h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s1-h1-highlight {
          color: var(--c-primary, #5b4fe9);
        }

        .s1-sub {
          font-size: clamp(16px, 1.4vw, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          max-width: 760px;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s1-root">
        <section className="s1-hero">
          <div className="s1-container">
            <div className="s1-inner">
              <span className="s1-eyebrow">{eyebrow}</span>
              <h1 className="s1-h1">
                {title} <strong className="s1-h1-highlight">{titleHighlight}</strong>
              </h1>
              <p className="s1-sub">{subtitle}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow:        { type: ControlType.String, title: "Eyebrow",         defaultValue: "Resources" },
  title:          { type: ControlType.String, title: "Title",           defaultValue: "Context-preserving data layer for AI" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "resources" },
  subtitle:       { type: ControlType.String, title: "Subtitle",        defaultValue: "Technical documentation, learning articles, glossary, and trust resources — for architects, CDOs, CISOs, privacy officers, and industry buyers building regulated AI workflows.", displayTextArea: true },
})
