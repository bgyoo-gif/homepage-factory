import { addPropertyControls, ControlType } from "framer"

const P = {
  brandPurple:    "#725bea",
  neutral100: "#ececec",
  white: "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  product1Badge?: string
  product1Name?: string
  product1Lead?: string
  product1Body?: string
  product1Image?: string
  product2Badge?: string
  product2Name?: string
  product2Lead?: string
  product2Body?: string
  product2Image?: string
  product2LinkLabel?: string
  product2LinkHref?: string
  product3Badge?: string
  product3Name?: string
  product3Lead?: string
  product3Body?: string
  product3Image?: string
  product3LinkLabel?: string
  product3LinkHref?: string
}

export default function Section05_Stack({
  sectionTitle = "Three products. Three blockers to",
  sectionTitleHighlight = "enterprise AI.",
  sectionDescription = "Enterprise AI fails for three distinct reasons. CUBIG built a product for each one. LLM Capsule works standalone or together with DTS and SynTitan.",
  product1Badge = "AI ENABLEMENT DATA LAYER",
  product1Name = "LLM Capsule",
  product1Lead = "Restricted Data → AI-Ready Data",
  product1Body = "Sensitive enterprise data that can't be exposed to external AI. PII, regulated fields, internal identifiers, confidential content. LLM Capsule encapsulates it locally, enables AI processing, and restores outputs. Works standalone or within SynTitan workflows with full Release State traceability.",
  product1Image,
  product2Badge = "SYNTHETIC DATA ENGINE",
  product2Name = "DTS",
  product2Lead = "Unusable Data → Privacy-Safe Datasets",
  product2Body = "Insufficient, biased, or privacy-locked training data. DTS generates privacy-safe synthetic datasets at the dataset layer for AI training and validation.",
  product2Image,
  product2LinkLabel = "Explore DTS",
  product2LinkHref = "/dts",
  product3Badge = "AI-READY DATA OS",
  product3Name = "SynTitan",
  product3Lead = "Unstable Execution → Production Stability",
  product3Body = "Production AI pipelines that break when data changes. SynTitan binds every run to a Release State — reproducible, auditable, compliant.",
  product3Image,
  product3LinkLabel = "Explore SynTitan",
  product3LinkHref = "/syntitan",
}: Props) {
  const resolvedImg1 = product1Image || ""
  const resolvedImg2 = product2Image || ""
  const resolvedImg3 = product3Image || ""

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s5-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s5-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }

        .s5-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        @container (max-width: 767px) {
          .s5-section-header { text-align: left; }
        }

        .s5-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s5-section-title { font-size: 20px; }
        }

        .s5-brand { color: ${P.brandPurple}; }

        .s5-section-description {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s5-section-description { font-size: 18px; }
        }

        @container (min-width: 1024px) {
          .s5-section-description { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s5-section-description { max-width: 860px; }
        }

        .s5-product-split {
          display: grid;
          grid-template-columns: 4fr 6fr;
          gap: 64px;
          align-items: stretch;
          margin-top: 64px;
        }

        .s5-product-split:first-of-type { margin-top: 0; }

        .s5-product-split-reverse {
          direction: rtl;
        }

        .s5-product-split-reverse > * {
          direction: ltr;
        }

        @container (max-width: 1023px) {
          .s5-product-split {
            grid-template-columns: 1fr;
            gap: 32px;
            direction: ltr;
          }
          .s5-product-split > * { direction: ltr; }
        }

        .s5-visual {
          border-radius: 40px;
          overflow: hidden;
          background-color: ${P.neutral100};
          border: 1px solid ${P.borderDefault};
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @container (max-width: 1023px) {
          .s5-visual { min-height: 200px; border-radius: 24px; }
        }

        .s5-visual img { width: 100%; height: auto; display: block; }

        .s5-visual-placeholder {
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P.textTertiary};
          font-size: 14px;
          font-family: "Fragment Mono", monospace;
          padding: 24px;
          text-align: center;
        }

        @container (max-width: 1023px) {
          .s5-visual-placeholder { min-height: 200px; }
        }

        .s5-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
        }

        .s5-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
        }

        .s5-badge-brand { color: ${P.brandPurple}; border-color: ${P.brandPurple}; }
        .s5-badge-gray  { color: ${P.textTertiary}; border-color: ${P.borderDefault}; }

        .s5-product-name {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
        }

        .s5-name-font {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s5-lead {
          font-size: 16px;
          color: ${P.textPrimary};
          line-height: 1.7;
          font-weight: 500;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s5-body {
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s5-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .s5-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid ${P.borderDefault};
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: ${P.textPrimary};
        }

        .s5-btn-secondary:hover { background-color: ${P.surfaceLight}; }
      `}</style>

      <div className="s5-root">
        <section className="s5-section" id="section-stack">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 className="s5-section-title">
                {sectionTitle} <span className="s5-brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s5-section-description">{sectionDescription}</p>
            </div>

            <div className="s5-product-split">
              <div className="s5-visual">
                {resolvedImg1 ? (
                  <img src={resolvedImg1} alt="LLM Capsule product visual" width={480} height={340} />
                ) : (
                  <div className="s5-visual-placeholder">LLM Capsule image — add via Props</div>
                )}
              </div>
              <div className="s5-content">
                <span className="s5-badge s5-badge-brand">{product1Badge}</span>
                <h3 className="s5-product-name"><span className="s5-name-font">{product1Name}</span></h3>
                <p className="s5-lead">{product1Lead}</p>
                <p className="s5-body">{product1Body}</p>
              </div>
            </div>

            <div className="s5-product-split s5-product-split-reverse">
              <div className="s5-visual">
                {resolvedImg2 ? (
                  <img src={resolvedImg2} alt="DTS product visual" width={480} height={340} />
                ) : (
                  <div className="s5-visual-placeholder">DTS image — add via Props</div>
                )}
              </div>
              <div className="s5-content">
                <span className="s5-badge s5-badge-gray">{product2Badge}</span>
                <h3 className="s5-product-name"><span className="s5-name-font">{product2Name}</span></h3>
                <p className="s5-lead">{product2Lead}</p>
                <p className="s5-body">{product2Body}</p>
                <div className="s5-actions">
                  <a href={product2LinkHref} className="s5-btn-secondary">{product2LinkLabel}</a>
                </div>
              </div>
            </div>

            <div className="s5-product-split">
              <div className="s5-visual">
                {resolvedImg3 ? (
                  <img src={resolvedImg3} alt="SynTitan product visual" width={480} height={340} />
                ) : (
                  <div className="s5-visual-placeholder">SynTitan image — add via Props</div>
                )}
              </div>
              <div className="s5-content">
                <span className="s5-badge s5-badge-gray">{product3Badge}</span>
                <h3 className="s5-product-name"><span className="s5-name-font">{product3Name}</span></h3>
                <p className="s5-lead">{product3Lead}</p>
                <p className="s5-body">{product3Body}</p>
                <div className="s5-actions">
                  <a href={product3LinkHref} className="s5-btn-secondary">{product3LinkLabel}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_Stack, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Three products. Three blockers to" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "enterprise AI." },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "Enterprise AI fails for three distinct reasons. CUBIG built a product for each one. LLM Capsule works standalone or together with DTS and SynTitan." },
  product1Badge: { type: ControlType.String, title: "Product 1 Badge", defaultValue: "AI ENABLEMENT DATA LAYER" },
  product1Name: { type: ControlType.String, title: "Product 1 Name", defaultValue: "LLM Capsule" },
  product1Lead: { type: ControlType.String, title: "Product 1 Lead", defaultValue: "Restricted Data → AI-Ready Data" },
  product1Body: { type: ControlType.String, title: "Product 1 Body", defaultValue: "Sensitive enterprise data that can't be exposed to external AI. PII, regulated fields, internal identifiers, confidential content. LLM Capsule encapsulates it locally, enables AI processing, and restores outputs. Works standalone or within SynTitan workflows with full Release State traceability." },
  product1Image: { type: ControlType.Image, title: "Product 1 Image" },
  product2Badge: { type: ControlType.String, title: "Product 2 Badge", defaultValue: "SYNTHETIC DATA ENGINE" },
  product2Name: { type: ControlType.String, title: "Product 2 Name", defaultValue: "DTS" },
  product2Lead: { type: ControlType.String, title: "Product 2 Lead", defaultValue: "Unusable Data → Privacy-Safe Datasets" },
  product2Body: { type: ControlType.String, title: "Product 2 Body", defaultValue: "Insufficient, biased, or privacy-locked training data. DTS generates privacy-safe synthetic datasets at the dataset layer for AI training and validation." },
  product2Image: { type: ControlType.Image, title: "Product 2 Image" },
  product2LinkLabel: { type: ControlType.String, title: "Product 2 Link Label", defaultValue: "Explore DTS" },
  product2LinkHref: { type: ControlType.String, title: "Product 2 Link Href", defaultValue: "/dts" },
  product3Badge: { type: ControlType.String, title: "Product 3 Badge", defaultValue: "AI-READY DATA OS" },
  product3Name: { type: ControlType.String, title: "Product 3 Name", defaultValue: "SynTitan" },
  product3Lead: { type: ControlType.String, title: "Product 3 Lead", defaultValue: "Unstable Execution → Production Stability" },
  product3Body: { type: ControlType.String, title: "Product 3 Body", defaultValue: "Production AI pipelines that break when data changes. SynTitan binds every run to a Release State — reproducible, auditable, compliant." },
  product3Image: { type: ControlType.Image, title: "Product 3 Image" },
  product3LinkLabel: { type: ControlType.String, title: "Product 3 Link Label", defaultValue: "Explore SynTitan" },
  product3LinkHref: { type: ControlType.String, title: "Product 3 Link Href", defaultValue: "/syntitan" },
})
