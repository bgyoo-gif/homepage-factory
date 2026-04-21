import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  success:        "#0e824c",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  intro?: string
  bullet1Label?: string
  bullet1Body?: string
  bullet2Label?: string
  bullet2Body?: string
  bullet3Label?: string
  bullet3Body?: string
  locale?: "en" | "ko"
}

export default function Section04_Explanation({
  sectionLabel = "Explanation",
  intro        = "Enterprise confidentiality control differs from PII protection in scope and configurability:",
  bullet1Label = "Scope.",
  bullet1Body  = "PII protection covers regulatory-defined categories — names, identification numbers, health records. Enterprise confidentiality control covers organization-defined categories — deal terms, pricing, internal metrics, competitive analysis, and strategic plans.",
  bullet2Label = "Policy-driven classification.",
  bullet2Body  = "What counts as sensitive varies by department, document type, and workflow. A revenue figure is sensitive in a board presentation but routine in a published annual report. Context-aware data control enables policy-driven sensitivity classification, not just regex pattern matching.",
  bullet3Label = "Workflow integration.",
  bullet3Body  = "Enterprise confidentiality control integrates with governance frameworks, audit systems, and compliance workflows — providing visibility into what data is protected, how, and by whom.",
  locale       = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
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
        @container (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px)  { .s4-section { padding: 60px 0; } }
        @container (min-width: 1024px) { .s4-section { padding: 60px 0; } }
        @container (min-width: 1440px) { .s4-section { padding: 60px 0; } }

        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s4-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          font-family: "DM Sans", sans-serif;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s4-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s4-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s4-section-header h2 { font-size: 28px; } }

        .s4-text--brand { color: ${PALETTE.brandSecondary}; }

        .s4-paragraph {
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet__icon::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .s4-bullet__item strong {
          font-weight: 700;
          color: ${PALETTE.textPrimary};
        }
      `}</style>

      <section className="s4-section" id="section-4" lang={locale}>
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s4-text--brand">{sectionLabel}</span></h2>
            </div>
            <p className="s4-paragraph">{intro}</p>
            <ul className="s4-bullet">
              <li className="s4-bullet__item">
                <span className="s4-bullet__icon" aria-hidden="true"></span>
                <span><strong>{bullet1Label}</strong> {bullet1Body}</span>
              </li>
              <li className="s4-bullet__item">
                <span className="s4-bullet__icon" aria-hidden="true"></span>
                <span><strong>{bullet2Label}</strong> {bullet2Body}</span>
              </li>
              <li className="s4-bullet__item">
                <span className="s4-bullet__icon" aria-hidden="true"></span>
                <span><strong>{bullet3Label}</strong> {bullet3Body}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Explanation, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Explanation",
  },
  intro: {
    type: ControlType.String,
    title: "Intro",
    defaultValue: "Enterprise confidentiality control differs from PII protection in scope and configurability:",
    displayTextArea: true,
  },
  bullet1Label: {
    type: ControlType.String,
    title: "Bullet 1 Label",
    defaultValue: "Scope.",
  },
  bullet1Body: {
    type: ControlType.String,
    title: "Bullet 1 Body",
    defaultValue: "PII protection covers regulatory-defined categories — names, identification numbers, health records. Enterprise confidentiality control covers organization-defined categories — deal terms, pricing, internal metrics, competitive analysis, and strategic plans.",
    displayTextArea: true,
  },
  bullet2Label: {
    type: ControlType.String,
    title: "Bullet 2 Label",
    defaultValue: "Policy-driven classification.",
  },
  bullet2Body: {
    type: ControlType.String,
    title: "Bullet 2 Body",
    defaultValue: "What counts as sensitive varies by department, document type, and workflow. A revenue figure is sensitive in a board presentation but routine in a published annual report. Context-aware data control enables policy-driven sensitivity classification, not just regex pattern matching.",
    displayTextArea: true,
  },
  bullet3Label: {
    type: ControlType.String,
    title: "Bullet 3 Label",
    defaultValue: "Workflow integration.",
  },
  bullet3Body: {
    type: ControlType.String,
    title: "Bullet 3 Body",
    defaultValue: "Enterprise confidentiality control integrates with governance frameworks, audit systems, and compliance workflows — providing visibility into what data is protected, how, and by whom.",
    displayTextArea: true,
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
