import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  surfaceWhite: "#ffffff",
}

interface Props {
  titlePrefix?: string
  titleMain?: string
  descriptionText?: string
  productName?: string
}

export default function Section01_Hero({
  titlePrefix = "Secure",
  titleMain = " LLM Usage",
  descriptionText = "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 860px;
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
        }
        .s1-title-brand {
          color: ${PALETTE.brandSecondary};
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
        .s1-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
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
          .s1-container { padding: 0; }
          .s1-title { font-size: 52px; }
        }
      `}</style>
      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <h1 className="s1-title">
              <span className="s1-title-brand">{titlePrefix}</span>
              {titleMain}
            </h1>
            <p className="s1-description">
              {descriptionText} <span className="s1-product-name">{productName}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  titlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Secure",
  },
  titleMain: {
    type: ControlType.String,
    title: "Title Main",
    defaultValue: " LLM Usage",
  },
  descriptionText: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Using large language models for enterprise tasks without exposing original sensitive data to external AI services. Enabled by",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
})
