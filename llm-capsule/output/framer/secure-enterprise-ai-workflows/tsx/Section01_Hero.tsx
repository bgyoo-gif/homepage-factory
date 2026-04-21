import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800:     "#171719",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  surfaceWhite:   "#ffffff",
}

interface Props {
  title?: string
  description?: string
}

export default function Section01_Hero({
  title = "Secure Enterprise AI Workflows",
  description = "How to build AI data pipeline protection that secures sensitive enterprise data at every stage — from document intake to restored output.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          background-color: ${PALETTE.surfaceWhite};
          padding: 100px 0 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px 0;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0; max-width: 1080px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>{title}</h1>
            <p className="s1-description">{description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Secure Enterprise AI Workflows",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "How to build AI data pipeline protection that secures sensitive enterprise data at every stage — from document intake to restored output.",
    displayTextArea: true,
  },
})
