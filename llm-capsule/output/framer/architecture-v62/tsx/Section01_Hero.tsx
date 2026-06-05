import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  title?: string
  subtitle?: string
}

export default function Section01_Hero({
  eyebrow = "Architecture",
  title = "How LLM Capsule plugs AI into the systems you already run",
  subtitle = "Three zones. Four steps. Five components. Two execution paths. One governance framework. The context-preserving data layer for AI for regulated operations — at the architectural level.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s1-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter', sans-serif); }

        .s1-hero {
          background-color: #fafbff;
          background-image: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
          padding-top: clamp(80px, 10vw, 140px);
          padding-bottom: clamp(64px, 8vw, 96px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          -webkit-font-smoothing: antialiased;
        }

        .s1-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s1-inner { max-width: 920px; }

        .s1-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }

        .s1-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 20px;
          word-break: keep-all;
        }

        .s1-subtitle {
          font-size: 19px;
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 760px;
          line-height: 1.6;
        }
      `}</style>

      <div className="s1-root">
        <header className="s1-hero">
          <div className="s1-container">
            <div className="s1-inner">
              <div className="s1-eyebrow">{eyebrow}</div>
              <h1 className="s1-title">{title}</h1>
              <p className="s1-subtitle">{subtitle}</p>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Architecture" },
  title: { type: ControlType.String, title: "Title", defaultValue: "How LLM Capsule plugs AI into the systems you already run" },
  subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: "Three zones. Four steps. Five components. Two execution paths. One governance framework. The context-preserving data layer for AI for regulated operations — at the architectural level." },
})
