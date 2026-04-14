import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  bannerText?: string
}

export default function Section05_RegulatorySupport({
  sectionTitle = "Regulatory",
  sectionTitleBrand = "Support",
  bannerText = "supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations by ensuring sensitive data never leaves the enterprise environment during AI processing. Organizations should evaluate specific compliance requirements with their legal counsel.",
}: Props) {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s5;
        }
        .s5-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s5 (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }
        @container s5 (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
        }
        @container s5 (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s5-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        @container s5 (max-width: 767px) { .s5-header { text-align: left; } }
        .s5-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 700;
          color: #0f0f0f; line-height: 1.2;
          letter-spacing: -0.5px; margin: 0;
        }
        @container s5 (min-width: 768px)  { .s5-header__title { font-size: 22px; } }
        @container s5 (min-width: 1024px) { .s5-header__title { font-size: 24px; } }
        @container s5 (min-width: 1440px) { .s5-header__title { font-size: 28px; } }
        .s5-header__brand { color: #5690D4; }

        /* Body */
        .s5-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container s5 (min-width: 1024px) { .s5-body { max-width: 720px; } }
        @container s5 (min-width: 1440px) { .s5-body { max-width: 1080px; } }
        .s5-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 className="s5-header__title">
                {sectionTitle} <span className="s5-header__brand">{sectionTitleBrand}</span>
              </h2>
            </div>

            <p className="s5-body">
              <span className="s5-product">LLM Capsule</span> {bannerText}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_RegulatorySupport, {
  sectionTitle:      { type: ControlType.String, title: "Title",          defaultValue: "Regulatory" },
  sectionTitleBrand: { type: ControlType.String, title: "Title (brand)",  defaultValue: "Support" },
  bannerText: { type: ControlType.String, title: "Body Text", defaultValue: "supports enterprise compliance with GDPR, HIPAA, SOX, and sector-specific data regulations by ensuring sensitive data never leaves the enterprise environment during AI processing. Organizations should evaluate specific compliance requirements with their legal counsel.", displayTextArea: true },
})
