import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  title?: string
  description?: string
}

export default function Section01_Hero({
  title = "Enterprise Context Control",
  description = "Policy-based sensitivity classification that determines what data to protect based on document type, department, and workflow context during AI processing.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-size: 14px; color: ${PALETTE.brandSecondary};
          font-weight: 500; transition: color 0.15s; text-decoration: none;
        }
        .s1-breadcrumb__link:hover { color: ${PALETTE.brandPrimary}; }
        .s1-breadcrumb__sep { font-size: 14px; color: ${PALETTE.textSecondary}; }
        .s1-breadcrumb__current { font-size: 14px; color: ${PALETTE.textSecondary}; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }

        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-title { font-size: 52px; }
        }

        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="s1-breadcrumb__link">Home</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources" className="s1-breadcrumb__link">Resources</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="/resources/glossary" className="s1-breadcrumb__link">Glossary</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">Enterprise Context Control</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>{title}</h1>
            <p className="s1-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Enterprise Context Control",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Policy-based sensitivity classification that determines what data to protect based on document type, department, and workflow context during AI processing.",
    displayTextArea: true,
  },
})
