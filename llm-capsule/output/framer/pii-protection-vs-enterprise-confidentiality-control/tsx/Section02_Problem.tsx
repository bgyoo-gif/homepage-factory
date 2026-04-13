import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  neutral025: "#f7f7f7",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
  locale?: "en" | "ko"
}

export default function Section02_Problem({
  sectionLabel = "Problem",
  paragraph1   = "Most AI data protection solutions focus on personally identifiable information (PII) — names, social security numbers, email addresses. But true enterprise AI enablement requires protecting far more than PII. Enterprise documents contain trade secrets, acquisition targets, pricing models, internal performance metrics, strategic plans, and client relationship details — all enterprise-sensitive but not classified as PII.",
  paragraph2   = "A legal memo about a pending acquisition contains no PII. It contains deal structure, valuation ranges, and strategic rationale — all of which would be damaging if exposed to an AI provider's training pipeline or logging system.",
  locale       = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
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
        @container (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px) {
          .s2-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s2-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s2-section { padding: 60px 0; }
        }

        .s2-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s2-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          font-family: "DM Sans", sans-serif;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s2-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s2-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s2-section-header h2 { font-size: 28px; } }

        .s2-text--brand { color: ${PALETTE.brandSecondary}; }

        .s2-paragraph {
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }
      `}</style>

      <section className="s2-section" id="section-2" lang={locale}>
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2><span className="s2-text--brand">{sectionLabel}</span></h2>
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
    defaultValue: "Most AI data protection solutions focus on personally identifiable information (PII) — names, social security numbers, email addresses. But true enterprise AI enablement requires protecting far more than PII. Enterprise documents contain trade secrets, acquisition targets, pricing models, internal performance metrics, strategic plans, and client relationship details — all enterprise-sensitive but not classified as PII.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "A legal memo about a pending acquisition contains no PII. It contains deal structure, valuation ranges, and strategic rationale — all of which would be damaging if exposed to an AI provider's training pipeline or logging system.",
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
