import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
  trackingTight:  "-0.5px",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface BulletItem {
  text: string
}

interface Props {
  sectionLabel?: string
  sectionLabelColor?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
}

export default function Section02_Problem({
  sectionLabel = "Problem",
  sectionLabelColor = C.brandSecondary,
  bullet1 = "Enterprise teams adopt PII protection tools. Redaction engines, masking utilities, tokenization layers — to protect sensitive data before AI processing. These tools were designed for compliance reporting and static data anonymization. They were never designed for AI workflows.",
  bullet2 = 'When a redaction tool removes a customer name from a contract, the AI model receives "[REDACTED]" in its place. The model cannot determine who the contract party is, which clauses reference that party, or how to structure outputs around the original entity relationships. The result is abstracted, generic AI output that requires extensive manual reconstruction before it can be used in any enterprise process.',
  bullet3 = "Redaction protects data by destroying it. Enterprise AI requires data that is protected and preserved simultaneously. Any approach to enterprise AI data privacy and AI data pipeline protection must solve this without sacrificing AI output quality.",
}: Props) {
  const bullets = [bullet1, bullet2, bullet3]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s2-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s2-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: pretty;
        }
        .s2-brand { color: ${C.brandSecondary}; }
        .s2-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s2-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${C.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s2-bullet__icon::before {
          content: "•";
          color: ${C.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container s2 (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 22px; }
          .s2-section { padding: 40px 0; }
        }
        @container s2 (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 24px; }
          .s2-section { padding: 60px 0; }
        }
        @container s2 (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-section-header h2 { font-size: 28px; }
          .s2-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}><span className="s2-brand">{sectionLabel}</span></h2>
            </div>
            <ul className="s2-bullet">
              {bullets.map((b, i) => (
                <li key={i} className="s2-bullet__item">
                  <span className="s2-bullet__icon" aria-hidden="true"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Problem" },
  bullet1: { type: ControlType.String, title: "Bullet 1", defaultValue: "Enterprise teams adopt PII protection tools. Redaction engines, masking utilities, tokenization layers — to protect sensitive data before AI processing. These tools were designed for compliance reporting and static data anonymization. They were never designed for AI workflows." },
  bullet2: { type: ControlType.String, title: "Bullet 2", defaultValue: 'When a redaction tool removes a customer name from a contract, the AI model receives "[REDACTED]" in its place. The model cannot determine who the contract party is, which clauses reference that party, or how to structure outputs around the original entity relationships. The result is abstracted, generic AI output that requires extensive manual reconstruction before it can be used in any enterprise process.' },
  bullet3: { type: ControlType.String, title: "Bullet 3", defaultValue: "Redaction protects data by destroying it. Enterprise AI requires data that is protected and preserved simultaneously. Any approach to enterprise AI data privacy and AI data pipeline protection must solve this without sacrificing AI output quality." },
})
