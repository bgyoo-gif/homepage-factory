import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  neutral050:     "#f2f2f2",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  label_en?: string
  label_ko?: string
  locale?: "en" | "ko"
}

export default function Section02_ScreenshotFrame({
  label_en = "Secure Enterprise AI — Sensitive documents encapsulated locally, processed by AI, outputs restored with original data",
  label_ko = "보안 엔터프라이즈 AI — 민감한 문서를 로컬에서 캡슐화하고, AI로 처리하며, 원본 데이터로 출력을 복원합니다",
  locale = "en",
}: Props) {
  const label = locale === "ko" ? label_ko : label_en

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
          overflow: hidden;
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

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0; }
        }

        .s2-frame {
          border-radius: 40px 40px 0 0;
          padding: 32px 32px 0;
          background-color: ${P.neutral050};
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .s2-screenshot {
          background-color: ${P.white};
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }
        .s2-screenshot__label {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${P.textTertiary};
          text-align: center;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (max-width: 767px) {
          .s2-frame {
            border-radius: 24px 24px 0 0;
            background-image: none;
          }
        }
        @container (min-width: 768px) {
          .s2-frame { border-radius: 40px 40px 0 0; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-frame">
              <div className="s2-screenshot">
                <p className="s2-screenshot__label">{label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_ScreenshotFrame, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  label_en: {
    type: ControlType.String,
    title: "Label (EN)",
    defaultValue: "Secure Enterprise AI — Sensitive documents encapsulated locally, processed by AI, outputs restored with original data",
    displayTextArea: true,
  },
  label_ko: {
    type: ControlType.String,
    title: "Label (KO)",
    defaultValue: "보안 엔터프라이즈 AI — 민감한 문서를 로컬에서 캡슐화하고, AI로 처리하며, 원본 데이터로 출력을 복원합니다",
    displayTextArea: true,
  },
})
