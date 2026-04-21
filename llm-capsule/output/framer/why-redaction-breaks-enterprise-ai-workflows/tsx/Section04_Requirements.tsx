import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
  borderDefault:  "#e6e7e9",
  success:        "#0e824c",
  trackingTight:  "-0.5px",
  bannerTint:     "rgba(24,33,232,0.06)",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionHeadingPre?: string
  sectionHeadingHighlight?: string
  intro?: string
  check1Strong?: string
  check1Rest?: string
  check2Strong?: string
  check2Rest?: string
  check3Strong?: string
  check3Rest?: string
  bannerBold?: string
  bannerProductName?: string
  bannerRest?: string
}

export default function Section04_Requirements({
  sectionHeadingPre = "What Enterprise AI Workflows Actually",
  sectionHeadingHighlight = "Require",
  intro = "Achieving AI document security and secure LLM usage in regulated environments demands more than pattern-based redaction. Enterprise AI data pipelines need a protection mechanism that satisfies three requirements simultaneously:",
  check1Strong = "Structure-preserving processing.",
  check1Rest = " Document structure, entity relationships, and semantic context must remain intact for AI comprehension.",
  check2Strong = "Zero exposure.",
  check2Rest = " Original sensitive data must never leave the enterprise environment.",
  check3Strong = "Restorable workflow.",
  check3Rest = " AI results are automatically restored locally with original enterprise data. Outputs contain real names, real amounts, real dates — ready for direct use in business processes.",
  bannerBold = "AI results are automatically restored locally with original enterprise data.",
  bannerProductName = "LLM Capsule",
  bannerRest = " as an AI enablement data layer from static redaction tools.",
}: Props) {
  const checks = [
    { strong: check1Strong, rest: check1Rest },
    { strong: check2Strong, rest: check2Rest },
    { strong: check3Strong, rest: check3Rest },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.borderDefault};
          text-align: center;
        }
        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: ${C.trackingTight};
          text-wrap: balance;
        }
        .s4-brand { color: ${C.brandSecondary}; }
        .s4-product {
          font-family: "${C.brandFont}", sans-serif;
          font-weight: 700;
        }
        .s4-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
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
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${C.success};
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
        .s4-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${C.borderDefault};
          border-bottom: 1px solid ${C.borderDefault};
          background-color: ${C.bannerTint};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          color: ${C.textPrimary};
        }

        @container s4 (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 22px; }
          .s4-section { padding: 40px 0; }
        }
        @container s4 (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
          .s4-section { padding: 60px 0; }
        }
        @container s4 (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-header h2 { font-size: 28px; }
          .s4-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {sectionHeadingPre}{" "}
                <span className="s4-brand">{sectionHeadingHighlight}</span>
              </h2>
            </div>
            <p className="s4-paragraph">{intro}</p>
            <ul className="s4-bullet">
              {checks.map((c, i) => (
                <li key={i} className="s4-bullet__item">
                  <span className="s4-bullet__icon" aria-hidden="true">&#10003;</span>
                  <span><strong>{c.strong}</strong>{c.rest}</span>
                </li>
              ))}
            </ul>
            <div className="s4-banner">
              <strong>{bannerBold}</strong>{" "}
              This is the fundamental capability that separates{" "}
              <span className="s4-product">{bannerProductName}</span>
              {bannerRest}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Requirements, {
  sectionHeadingPre: {
    type: ControlType.String,
    title: "Heading (Pre)",
    defaultValue: "What Enterprise AI Workflows Actually",
  },
  sectionHeadingHighlight: {
    type: ControlType.String,
    title: "Heading (Highlight)",
    defaultValue: "Require",
  },
  intro: {
    type: ControlType.String,
    title: "Intro Paragraph",
    defaultValue:
      "Achieving AI document security and secure LLM usage in regulated environments demands more than pattern-based redaction. Enterprise AI data pipelines need a protection mechanism that satisfies three requirements simultaneously:",
    displayTextArea: true,
  },
  check1Strong: {
    type: ControlType.String,
    title: "Check 1 (Bold)",
    defaultValue: "Structure-preserving processing.",
  },
  check1Rest: {
    type: ControlType.String,
    title: "Check 1 (Rest)",
    defaultValue:
      " Document structure, entity relationships, and semantic context must remain intact for AI comprehension.",
    displayTextArea: true,
  },
  check2Strong: {
    type: ControlType.String,
    title: "Check 2 (Bold)",
    defaultValue: "Zero exposure.",
  },
  check2Rest: {
    type: ControlType.String,
    title: "Check 2 (Rest)",
    defaultValue: " Original sensitive data must never leave the enterprise environment.",
    displayTextArea: true,
  },
  check3Strong: {
    type: ControlType.String,
    title: "Check 3 (Bold)",
    defaultValue: "Restorable workflow.",
  },
  check3Rest: {
    type: ControlType.String,
    title: "Check 3 (Rest)",
    defaultValue:
      " AI results are automatically restored locally with original enterprise data. Outputs contain real names, real amounts, real dates — ready for direct use in business processes.",
    displayTextArea: true,
  },
  bannerBold: {
    type: ControlType.String,
    title: "Banner (Bold)",
    defaultValue: "AI results are automatically restored locally with original enterprise data.",
    displayTextArea: true,
  },
  bannerProductName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  bannerRest: {
    type: ControlType.String,
    title: "Banner (Rest)",
    defaultValue: " as an AI enablement data layer from static redaction tools.",
  },
})
