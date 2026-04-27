import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral050:    "#f2f2f2",
  surfaceWhite:  "#ffffff",
  textTertiary:  "#9c9c9c",
}

interface Props {
  screenshotLabel?: string
}

export default function Section02_Screenshot({
  screenshotLabel = "Data Capsule Concept — Original document vs. encapsulated version with structure preserved",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 32px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
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
        .s2-frame {
          border-radius: 40px 40px 0 0;
          padding: 32px 32px 0;
          background-color: ${PALETTE.neutral050};
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .s2-screenshot {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }
        .s2-label {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textTertiary};
          text-align: center;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-frame { border-radius: 40px 40px 0 0; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

      `}</style>
      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-frame">
              <div className="s2-screenshot">
                <p className="s2-label">{screenshotLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Screenshot, {
  screenshotLabel: {
    type: ControlType.String,
    title: "Screenshot Label",
    defaultValue: "Data Capsule Concept — Original document vs. encapsulated version with structure preserved",
    displayTextArea: true,
  },
})
