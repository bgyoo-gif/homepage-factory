import { addPropertyControls, ControlType } from "framer"

const BRAND = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  neutral150:    "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface BulletItem {
  strong: string
  text: string
}

interface Props {
  heading?: string
  headingHighlight?: string
  bullet1Strong?: string
  bullet1Text?: string
  bullet2Strong?: string
  bullet2Text?: string
  bullet3Strong?: string
  bullet3Text?: string
}

export default function Section03_Explanation({
  heading = "Explanation",
  headingHighlight = "Explanation",
  bullet1Strong = "Zero exposure is not the same as encryption or access control.",
  bullet1Text = " Encrypted data cannot be processed by AI models. Access control restricts who can see data but does not prevent the data itself from leaving the environment.",
  bullet2Strong = "Zero exposure means the AI provider receives structurally useful data with no original sensitive values.",
  bullet2Text = " Even if the AI provider logged, stored, or trained on the received data, no original enterprise information would be exposed.",
  bullet3Strong = "This is achieved through local encapsulation.",
  bullet3Text = " Sensitive values are detected and replaced before data leaves the enterprise boundary. The replacement is structure-preserving, so AI can process the data effectively.",
}: Props) {
  const bullets = [
    { strong: bullet1Strong, text: bullet1Text },
    { strong: bullet2Strong, text: bullet2Text },
    { strong: bullet3Strong, text: bullet3Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${BRAND.surfaceWhite};
          overflow: hidden;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
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
          border-bottom: 1px solid ${BRAND.neutral150};
          text-align: center;
        }
        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${BRAND.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: pretty;
        }
        .s3-brand-color {
          color: ${BRAND.brandSecondary};
        }
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
          color: ${BRAND.textPrimary};
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
          color: ${BRAND.brandSecondary};
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
          .s3-section-header { text-align: center; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0; max-width: 1080px; }
          .s3-section-header h2 { font-size: 28px; }
        }
        @container (max-width: 767px) {
          .s3-section-header { text-align: left; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                <span className="s3-brand-color">{heading}</span>
              </h2>
            </div>
            <ul className="s3-bullet">
              {bullets.map((item, i) => (
                <li key={i} className="s3-bullet__item">
                  <span className="s3-bullet__icon" />
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

addPropertyControls(Section03_Explanation, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Explanation",
  },
  bullet1Strong: {
    type: ControlType.String,
    title: "Bullet 1 — Bold",
    defaultValue: "Zero exposure is not the same as encryption or access control.",
    displayTextArea: true,
  },
  bullet1Text: {
    type: ControlType.String,
    title: "Bullet 1 — Text",
    defaultValue:
      " Encrypted data cannot be processed by AI models. Access control restricts who can see data but does not prevent the data itself from leaving the environment.",
    displayTextArea: true,
  },
  bullet2Strong: {
    type: ControlType.String,
    title: "Bullet 2 — Bold",
    defaultValue:
      "Zero exposure means the AI provider receives structurally useful data with no original sensitive values.",
    displayTextArea: true,
  },
  bullet2Text: {
    type: ControlType.String,
    title: "Bullet 2 — Text",
    defaultValue:
      " Even if the AI provider logged, stored, or trained on the received data, no original enterprise information would be exposed.",
    displayTextArea: true,
  },
  bullet3Strong: {
    type: ControlType.String,
    title: "Bullet 3 — Bold",
    defaultValue: "This is achieved through local encapsulation.",
    displayTextArea: true,
  },
  bullet3Text: {
    type: ControlType.String,
    title: "Bullet 3 — Text",
    defaultValue:
      " Sensitive values are detected and replaced before data leaves the enterprise boundary. The replacement is structure-preserving, so AI can process the data effectively.",
    displayTextArea: true,
  },
})
