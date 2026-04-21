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
interface Props {
  sectionHeadingPre?: string
  sectionHeadingHighlight?: string
  sectionHeadingPost?: string
}

const BULLETS = [
  {
    strong: "Context Destruction",
    rest: " Masking tools replace sensitive values with generic tokens — [NAME], [ACCOUNT], [DATE]. AI models lose the ability to distinguish between entities. In a multi-party contract, all parties become \"[NAME],\" collapsing the semantic relationships the AI needs to produce meaningful analysis.",
  },
  {
    strong: "Output Unusability",
    rest: " When AI processes a redacted document, its outputs inherit the redaction. A summary of a masked contract produces statements like \"The agreement between [NAME] and [NAME] covers [AMOUNT].\" This output cannot be filed, forwarded, or used in any business workflow without manual restoration.",
  },
  {
    strong: "Structural Damage",
    rest: " Enterprise documents contain structured data — tables, nested references, cross-document citations. Flat masking breaks these structures. A table column header masked as \"[FIELD]\" destroys the schema information AI needs for accurate extraction.",
  },
  {
    strong: "No Restoration Path",
    rest: " Redaction is a one-way operation. Once data is removed, there is no automated mechanism to restore AI outputs to their original context. Every document processed through a redaction-then-AI pipeline requires manual post-processing, eliminating the efficiency gains AI is supposed to deliver.",
  },
]

export default function Section03_HowRedactionFails({
  sectionHeadingPre = "How Redaction and Masking Tools",
  sectionHeadingHighlight = "Fail",
  sectionHeadingPost = "in AI Workflows",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s3;
        }
        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: pretty;
        }
        .s3-brand { color: ${C.brandSecondary}; }
        .s3-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s3-bullet__item {
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
        .s3-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s3-bullet__icon::before {
          content: "•";
          color: ${C.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container s3 (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
          .s3-section { padding: 40px 0; }
        }
        @container s3 (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
          .s3-section { padding: 60px 0; }
        }
        @container s3 (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-section-header h2 { font-size: 28px; }
          .s3-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {sectionHeadingPre}{" "}
                <span className="s3-brand">{sectionHeadingHighlight}</span>{" "}
                {sectionHeadingPost}
              </h2>
            </div>
            <ul className="s3-bullet">
              {BULLETS.map((b, i) => (
                <li key={i} className="s3-bullet__item">
                  <span className="s3-bullet__icon" aria-hidden="true"></span>
                  <span><strong>{b.strong}</strong>{b.rest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_HowRedactionFails, {
  sectionHeadingPre: {
    type: ControlType.String,
    title: "Heading (Pre)",
    defaultValue: "How Redaction and Masking Tools",
  },
  sectionHeadingHighlight: {
    type: ControlType.String,
    title: "Heading (Highlight)",
    defaultValue: "Fail",
  },
  sectionHeadingPost: {
    type: ControlType.String,
    title: "Heading (Post)",
    defaultValue: "in AI Workflows",
  },
})
