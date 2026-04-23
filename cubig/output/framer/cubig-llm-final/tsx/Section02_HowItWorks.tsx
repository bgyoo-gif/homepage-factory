import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const P = {
  brandPurple:    "#725bea",
  neutral900: "#0f0f0f",
  neutral100: "#ececec",
  neutral025: "#f7f7f7",
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
  tab1Label?: string
  tab2Label?: string
  tab3Label?: string
  panel1Title?: string
  panel1Description?: string
  panel2Title?: string
  panel2Description?: string
  panel3Title?: string
  panel3Description?: string
  panel1Image?: string
  panel2Image?: string
  panel3Image?: string
}

export default function Section02_HowItWorks({
  sectionTitle = "Encapsulate. Process.",
  sectionTitleHighlight = "Restore.",
  sectionDescription = "Sensitive data is encapsulated locally before it leaves your environment. AI processes the safe version. Outputs are restored with your original data — automatically, locally.",
  tab1Label = "Your Document",
  tab2Label = "Encapsulated",
  tab3Label = "Usable Output",
  panel1Title = "Original data",
  panel1Description = "Enterprise documents contain sensitive data — names, IDs, dates, regulated fields — that cannot be exposed to external AI services.",
  panel2Title = "Encapsulated",
  panel2Description = "Sensitive entities replaced with structure-preserving tokens. Document structure intact. Raw data never leaves your environment.",
  panel3Title = "Restored",
  panel3Description = "AI output restored with original names, figures, dates. Goes directly into reports, claims, legal reviews — no manual reconstruction.",
  panel1Image,
  panel2Image,
  panel3Image,
}: Props) {
  const [activeTab, setActiveTab] = useState(1)

  const resolvedP1 = panel1Image || ""
  const resolvedP2 = panel2Image || ""
  const resolvedP3 = panel3Image || ""

  const tabs = [
    { id: 1, label: tab1Label },
    { id: 2, label: tab2Label },
    { id: 3, label: tab3Label },
  ]

  const panels = [
    { id: 1, title: panel1Title, desc: panel1Description, img: resolvedP1, alt: "Step 1: Original document with sensitive PII" },
    { id: 2, title: panel2Title, desc: panel2Description, img: resolvedP2, alt: "Step 2: Encapsulated document with structure-preserving tokens" },
    { id: 3, title: panel3Title, desc: panel3Description, img: resolvedP3, alt: "Step 3: Restored output with original data mapped back" },
  ]

  const activePanel = panels.find(p => p.id === activeTab)!

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s2-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        .s2-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        .s2-section-title {
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
          .s2-section-title { font-size: 20px; }
          .s2-section-header { text-align: left; }
        }

        .s2-brand { color: ${P.brandPurple}; }

        .s2-section-description {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s2-section-description { font-size: 18px; }
        }

        @container (min-width: 1024px) {
          .s2-section-description { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s2-section-description { max-width: 860px; }
        }

        .s2-tabs-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        @container (max-width: 767px) {
          .s2-tabs-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
        }

        .s2-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${P.textSecondary};
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .s2-tab:hover {
          background-color: ${P.neutral900};
          border-color: ${P.neutral900};
          color: ${P.white};
        }

        .s2-tab:hover .s2-tab-num {
          background-color: ${P.white};
          border-color: ${P.white};
          color: ${P.neutral900};
        }

        .s2-tab-active {
          background-color: ${P.neutral900};
          border-color: ${P.neutral900};
          color: ${P.white};
          font-weight: 600;
        }

        .s2-tab-active .s2-tab-num {
          background-color: ${P.white};
          border-color: ${P.white};
          color: ${P.neutral900};
        }

        .s2-tab-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: ${P.neutral100};
          border: 1px solid ${P.borderDefault};
          font-size: 12px;
          font-weight: 700;
          color: ${P.textSecondary};
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .s2-panel {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }

        @container (min-width: 1024px) {
          .s2-panel { grid-template-columns: 5fr 7fr; gap: 64px; }
        }

        @container (min-width: 1440px) {
          .s2-panel { gap: 80px; }
        }

        .s2-panel-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .s2-panel-title {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          text-wrap: balance;
        }

        @container (min-width: 768px) {
          .s2-panel-title { font-size: 36px; }
        }

        @container (max-width: 767px) {
          .s2-panel-title { font-size: 20px; }
        }

        .s2-panel-description {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (max-width: 767px) {
          .s2-panel-description { font-size: 14px; }
        }

        .s2-image-frame {
          border-radius: 18px;
          overflow: hidden;
          background-color: ${P.neutral100};
          border: 1px solid ${P.borderDefault};
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @container (min-width: 1024px) {
          .s2-image-frame { min-height: 340px; }
        }

        .s2-image-frame img {
          width: 100%;
          display: block;
        }

        .s2-image-placeholder {
          width: 100%;
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P.textTertiary};
          font-size: 14px;
          font-family: "Fragment Mono", monospace;
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section" id="section-how-it-works">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 className="s2-section-title">
                {sectionTitle} <span className="s2-brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s2-section-description">{sectionDescription}</p>
            </div>

            <div className="s2-tabs-nav" role="tablist" aria-label="How LLM Capsule works">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`s2-tab${activeTab === tab.id ? " s2-tab-active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  <span className="s2-tab-num">{tab.id}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="s2-panel" role="tabpanel">
              <div className="s2-panel-content">
                <h3 className="s2-panel-title">{activePanel.title}</h3>
                <p className="s2-panel-description">{activePanel.desc}</p>
              </div>
              <div className="s2-image-frame">
                {activePanel.img ? (
                  <img src={activePanel.img} alt={activePanel.alt} width={700} height={340} />
                ) : (
                  <div className="s2-image-placeholder">Step {activePanel.id} image — add via Props</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_HowItWorks, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Encapsulate. Process." },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Restore." },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Sensitive data is encapsulated locally before it leaves your environment. AI processes the safe version. Outputs are restored with your original data — automatically, locally.",
  },
  tab1Label: { type: ControlType.String, title: "Tab 1 Label", defaultValue: "Your Document" },
  tab2Label: { type: ControlType.String, title: "Tab 2 Label", defaultValue: "Encapsulated" },
  tab3Label: { type: ControlType.String, title: "Tab 3 Label", defaultValue: "Usable Output" },
  panel1Title: { type: ControlType.String, title: "Panel 1 Title", defaultValue: "Original data" },
  panel1Description: {
    type: ControlType.String,
    title: "Panel 1 Description",
    defaultValue: "Enterprise documents contain sensitive data — names, IDs, dates, regulated fields — that cannot be exposed to external AI services.",
  },
  panel2Title: { type: ControlType.String, title: "Panel 2 Title", defaultValue: "Encapsulated" },
  panel2Description: {
    type: ControlType.String,
    title: "Panel 2 Description",
    defaultValue: "Sensitive entities replaced with structure-preserving tokens. Document structure intact. Raw data never leaves your environment.",
  },
  panel3Title: { type: ControlType.String, title: "Panel 3 Title", defaultValue: "Restored" },
  panel3Description: {
    type: ControlType.String,
    title: "Panel 3 Description",
    defaultValue: "AI output restored with original names, figures, dates. Goes directly into reports, claims, legal reviews — no manual reconstruction.",
  },
  panel1Image: { type: ControlType.Image, title: "Panel 1 Image" },
  panel2Image: { type: ControlType.Image, title: "Panel 2 Image" },
  panel3Image: { type: ControlType.Image, title: "Panel 3 Image" },
})
