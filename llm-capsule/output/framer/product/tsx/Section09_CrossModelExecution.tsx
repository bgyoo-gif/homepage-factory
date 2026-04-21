import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary:  "#5690D4",
  textPrimary:     "#0f0f0f",
  textSecondary:   "#636363",
  white:           "#ffffff",
  borderDefault:   "#e6e7e9",
  surfaceLight:    "#f7f7f7",
  infoTint:        "rgba(21, 94, 160, 0.06)",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  body1?: string
  body2?: string
  bannerText?: string
}

export default function Section09_CrossModelExecution({
  sectionTitle = "Runs inside your existing",
  sectionTitleBrand = "infrastructure",
  sectionDescription = "Runs inside your existing infrastructure. Air-gapped networks, on-premise servers, custom data systems — no architectural changes required.",
  body1 = "Most AI solutions demand standardized environments. LLM Capsule deploys within your enterprise as-is — air-gapped networks, telecom-grade platforms, custom data pipelines, and restricted environments. Your existing workflows, security policies, and system configurations stay intact.",
  body2 = "",
  bannerText = "Air-gapped networks, on-premise servers, custom data systems — no architectural changes required.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s9-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s9-inner { width: 100%; container-type: inline-size; }
        .s9-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s9-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s9-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s9-container { padding: 0 120px; max-width: 1440px; } }

        .s9-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s9-header { text-align: left; } }
        .s9-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s9-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s9-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s9-header__title { font-size: 28px; } }
        .s9-header__brand { color: ${PALETTE.brandSecondary}; }
        .s9-header__desc {
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
        @container (min-width: 1024px) { .s9-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s9-header__desc { max-width: 1080px; } }

        .s9-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 16px;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s9-body--spaced { margin-bottom: 32px; }
        @container (min-width: 1024px) { .s9-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s9-body { max-width: 1080px; } }

        .s9-banner {
          padding: 16px 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.infoTint};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: ${PALETTE.textSecondary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s9-section" id="section-8">
        <div className="s9-inner">
          <div className="s9-container">
            <div className="s9-header">
              <h2 className="s9-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitle} <span className="s9-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s9-header__desc">{sectionDescription}</p>
            </div>

            <p className="s9-body">{body1}</p>
            <p className="s9-body s9-body--spaced">{body2}</p>

            <div className="s9-banner">{bannerText}</div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_CrossModelExecution, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Runs inside your existing" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "infrastructure" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "Runs inside your existing infrastructure. Air-gapped networks, on-premise servers, custom data systems — no architectural changes required.", displayTextArea: true },
  body1:              { type: ControlType.String, title: "Body 1",        defaultValue: "Most AI solutions demand standardized environments. LLM Capsule deploys within your enterprise as-is — air-gapped networks, telecom-grade platforms, custom data pipelines, and restricted environments. Your existing workflows, security policies, and system configurations stay intact.", displayTextArea: true },
  body2:              { type: ControlType.String, title: "Body 2",        defaultValue: "" },
  bannerText:         { type: ControlType.String, title: "Banner",        defaultValue: "Air-gapped networks, on-premise servers, custom data systems — no architectural changes required.", displayTextArea: true },
})
