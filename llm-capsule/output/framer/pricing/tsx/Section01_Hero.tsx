import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  neutral800:     "#171719",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  titlePrefix?: string
  titleBrand?: string
  description?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section01_Hero({
  titlePrefix  = "Enterprise",
  titleBrand   = "Pricing",
  description  = "LLM Capsule is priced for enterprise deployment. Contact us for volume-based pricing tailored to your document processing workload and deployment requirements.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        .s1-hero {
          text-align: center;
          padding-bottom: 60px;
        }
        .s1-hero__title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          text-wrap: pretty;
        }
        .s1-hero__title-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s1-hero__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s1-hero__description-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s1-hero__title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s1-hero__title { font-size: 48px; }
          .s1-hero__description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-hero__title { font-size: 64px; }
          .s1-hero__description { max-width: 1080px; }
        }
      `}</style>

      <section className="s1-section" aria-label="Hero">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-hero__title" style={{ wordBreak: "keep-all" }}>
                {titlePrefix}{" "}
                <span className="s1-hero__title-brand">{titleBrand}</span>
              </h1>
              <p className="s1-hero__description">
                <span className="s1-hero__description-product">LLM Capsule</span>{" "}
                {description}
              </p>
            </div>
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
    defaultValue: "Enterprise",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title Brand",
    defaultValue: "Pricing",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "LLM Capsule is priced for enterprise deployment. Contact us for volume-based pricing tailored to your document processing workload and deployment requirements.",
    displayTextArea: true,
  },
})
