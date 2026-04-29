import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface Props {
  heading?: string
  bullet1Strong?: string
  bullet1Text?: string
  bullet2Strong?: string
  bullet2Text?: string
  bullet3Strong?: string
  bullet3Text?: string
  bullet4Strong?: string
  bullet4Text?: string
}

export default function Section05_MaskingLimits({
  heading = "Limitations of Masking for AI",
  bullet1Strong = "Context destruction.",
  bullet1Text = ' AI models lose entity relationships when all names become "[NAME]." Multi-party documents become indistinguishable.',
  bullet2Strong = "Output unusability.",
  bullet2Text = ' AI outputs inherit the masking. Summaries contain "[REDACTED]" placeholders instead of real data, requiring manual reconstruction.',
  bullet3Strong = "Structural damage.",
  bullet3Text = " Flat masking breaks table schemas, cross-references, and nested document structures.",
  bullet4Strong = "No automation path.",
  bullet4Text = " Every masked AI output requires human intervention to restore context, eliminating efficiency gains.",
}: Props) {
  const bullets = [
    { strong: bullet1Strong, text: bullet1Text },
    { strong: bullet2Strong, text: bullet2Text },
    { strong: bullet3Strong, text: bullet3Text },
    { strong: bullet4Strong, text: bullet4Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s5-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s5-container { padding: 0 120px; max-width: 1440px; } }
        .s5-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s5-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .s5-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s5-bullet {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s5-bullet::before {
          content: "•";
          color: ${PALETTE.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0; max-width: 1080px; }
          .s5-header h2 { font-size: 28px; }
          .s5-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s5-section" id="section-5">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{heading}</h2>
            </div>
            <ul className="s5-list">
              {bullets.map((item, i) => (
                <li key={i} className="s5-item">
                  <span className="s5-bullet" aria-hidden="true"></span>
                  <span>
                    <strong>{item.strong}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_MaskingLimits, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Limitations of Masking for AI",
  },
  bullet1Strong: {
    type: ControlType.String,
    title: "Bullet 1 Label",
    defaultValue: "Context destruction.",
  },
  bullet1Text: {
    type: ControlType.String,
    title: "Bullet 1 Text",
    defaultValue: ' AI models lose entity relationships when all names become "[NAME]." Multi-party documents become indistinguishable.',
    displayTextArea: true,
  },
  bullet2Strong: {
    type: ControlType.String,
    title: "Bullet 2 Label",
    defaultValue: "Output unusability.",
  },
  bullet2Text: {
    type: ControlType.String,
    title: "Bullet 2 Text",
    defaultValue: ' AI outputs inherit the masking. Summaries contain "[REDACTED]" placeholders instead of real data, requiring manual reconstruction.',
    displayTextArea: true,
  },
  bullet3Strong: {
    type: ControlType.String,
    title: "Bullet 3 Label",
    defaultValue: "Structural damage.",
  },
  bullet3Text: {
    type: ControlType.String,
    title: "Bullet 3 Text",
    defaultValue: " Flat masking breaks table schemas, cross-references, and nested document structures.",
    displayTextArea: true,
  },
  bullet4Strong: {
    type: ControlType.String,
    title: "Bullet 4 Label",
    defaultValue: "No automation path.",
  },
  bullet4Text: {
    type: ControlType.String,
    title: "Bullet 4 Text",
    defaultValue: " Every masked AI output requires human intervention to restore context, eliminating efficiency gains.",
    displayTextArea: true,
  },
})
