import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral050:   "#f2f2f2",
  surfaceWhite: "#ffffff",
  textTertiary: "#9c9c9c",
}

interface Props {
  label?: string
}

export default function Section02_Screenshot({
  label = "Masking vs. Encapsulation — Side-by-side output comparison showing restored vs. redacted results",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
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
          margin-top: 0;
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
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-frame { border-radius: 40px 40px 0 0; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0; max-width: 1080px; }
        }
      `}</style>
      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-frame">
              <div className="s2-screenshot">
                <p className="s2-label">{label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Screenshot, {
  label: {
    type: ControlType.String,
    title: "Label",
    defaultValue: "Masking vs. Encapsulation — Side-by-side output comparison showing restored vs. redacted results",
    displayTextArea: true,
  },
})
