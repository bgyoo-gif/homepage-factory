import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// LLM Capsule Brand Palette
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
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  borderDefault: "#e6e7e9",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
}

interface TabItem {
  number: string
  label: string
  title: string
  description: string
  placeholderLabel: string
  image: string
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  tab1Label?: string
  tab1Title?: string
  tab1Description?: string
  tab1Image?: string
  tab2Label?: string
  tab2Title?: string
  tab2Description?: string
  tab2Image?: string
  tab3Label?: string
  tab3Title?: string
  tab3Description?: string
  tab3Image?: string
  tab4Label?: string
  tab4Title?: string
  tab4Description?: string
  tab4Image?: string
  tab5Label?: string
  tab5Title?: string
  tab5Description?: string
  tab5Image?: string
}

export default function Section03_ArchitectureComponents({
  sectionTitle = "Architecture",
  sectionTitleHighlight = "Components",
  tab1Label = "Encapsulation Engine",
  tab1Title = "Local Encapsulation Engine",
  tab1Description = "The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.",
  tab1Image = "",
  tab2Label = "Policy Control",
  tab2Title = "Policy Control Layer",
  tab2Description = "Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.",
  tab2Image = "",
  tab3Label = "Capsule Transmission",
  tab3Title = "Outbound Capsule Transmission",
  tab3Description = "Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.",
  tab3Image = "",
  tab4Label = "Restoration Engine",
  tab4Title = "Local Restoration Engine",
  tab4Description = "After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.",
  tab4Image = "",
  tab5Label = "Audit & Compliance",
  tab5Title = "Audit & Compliance Layer",
  tab5Description = "Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.",
  tab5Image = "",
}: Props) {
  const [activeTab, setActiveTab] = useState(1)

  const tabs: TabItem[] = [
    { number: "1", label: tab1Label, title: tab1Title, description: tab1Description, placeholderLabel: "Encapsulation Engine Interface", image: tab1Image },
    { number: "2", label: tab2Label, title: tab2Title, description: tab2Description, placeholderLabel: "Policy Control Interface", image: tab2Image },
    { number: "3", label: tab3Label, title: tab3Title, description: tab3Description, placeholderLabel: "Capsule Transmission Flow", image: tab3Image },
    { number: "4", label: tab4Label, title: tab4Title, description: tab4Description, placeholderLabel: "Restoration Engine Interface", image: tab4Image },
    { number: "5", label: tab5Label, title: tab5Title, description: tab5Description, placeholderLabel: "Audit & Compliance Dashboard", image: tab5Image },
  ]

  const tabIcons = [
    // Lock icon — Encapsulation Engine
    <svg key="1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    // Shield icon — Policy Control
    <svg key="2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>,
    // Transfer icon — Capsule Transmission
    <svg key="3" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>,
    // Refresh icon — Restoration Engine
    <svg key="4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>,
    // Clipboard icon — Audit
    <svg key="5" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>,
  ]

  const activeTabData = tabs[activeTab - 1]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s3-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        .s3-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        .s3-text--brand { color: ${PALETTE.brandSecondary}; }

        /* Step Tabs Nav */
        .s3-tabs-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .s3-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .s3-tab-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: ${PALETTE.neutral100};
          border: 1px solid ${PALETTE.borderDefault};
          font-size: 12px;
          font-weight: 700;
          color: ${PALETTE.textSecondary};
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .s3-tab:hover {
          background-color: ${PALETTE.neutral900};
          border-color: ${PALETTE.neutral900};
          color: ${PALETTE.white};
        }
        .s3-tab:hover .s3-tab-number {
          background-color: ${PALETTE.white};
          border-color: ${PALETTE.white};
          color: ${PALETTE.neutral900};
        }
        .s3-tab--active {
          background-color: ${PALETTE.neutral900};
          border-color: ${PALETTE.neutral900};
          color: ${PALETTE.white};
          font-weight: 600;
        }
        .s3-tab--active .s3-tab-number {
          background-color: ${PALETTE.white};
          border-color: ${PALETTE.white};
          color: ${PALETTE.neutral900};
        }

        /* Panel */
        .s3-panel {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @container (min-width: 1024px) {
          .s3-panel { grid-template-columns: 5fr 7fr; gap: 64px; }
        }
        @container (min-width: 1440px) {
          .s3-panel { gap: 80px; }
        }

        .s3-panel-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .s3-panel-title {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        @container (min-width: 768px) {
          .s3-panel-title { font-size: 36px; }
        }
        .s3-panel-description {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
        }

        /* Screenshot Placeholder */
        .s3-screenshot {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid ${PALETTE.borderDefault};
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          background-color: ${PALETTE.surfaceLight};
          max-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
        }
        .s3-screenshot-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 48px;
          color: ${PALETTE.textTertiary};
        }
        .s3-screenshot-placeholder svg { color: ${PALETTE.neutral400}; }
        .s3-screenshot-placeholder span {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        @container (max-width: 767px) {
          .s3-tabs-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
          .s3-tabs-nav::-webkit-scrollbar { display: none; }
          .s3-screenshot { max-height: 280px; }
        }
      `}</style>

      <section className="s3-section" id="section-3">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 className="s3-section-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitle}{" "}
                <span className="s3-text--brand">{sectionTitleHighlight}</span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="s3-tabs-nav" role="tablist">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.number}
                  className={`s3-tab${activeTab === idx + 1 ? " s3-tab--active" : ""}`}
                  onClick={() => setActiveTab(idx + 1)}
                  role="tab"
                  aria-selected={activeTab === idx + 1}
                >
                  <span className="s3-tab-number">{tab.number}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Panel */}
            <div className="s3-panel" role="tabpanel">
              <div className="s3-panel-content">
                <h3 className="s3-panel-title">{activeTabData.title}</h3>
                <p className="s3-panel-description">{activeTabData.description}</p>
              </div>
              <div className="s3-screenshot">
                {activeTabData.image ? (
                  <img src={activeTabData.image} alt={activeTabData.placeholderLabel} style={{ width: "100%", display: "block", borderRadius: "8px" }} />
                ) : (
                  <div className="s3-screenshot-placeholder">
                    {tabIcons[activeTab - 1]}
                    <span>{activeTabData.placeholderLabel}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_ArchitectureComponents, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Architecture",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Components",
  },
  tab1Label: { type: ControlType.String, title: "Tab 1 Label", defaultValue: "Encapsulation Engine" },
  tab1Title: { type: ControlType.String, title: "Tab 1 Title", defaultValue: "Local Encapsulation Engine" },
  tab1Description: { type: ControlType.String, title: "Tab 1 Description", defaultValue: "The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.", displayTextArea: true },
  tab2Label: { type: ControlType.String, title: "Tab 2 Label", defaultValue: "Policy Control" },
  tab2Title: { type: ControlType.String, title: "Tab 2 Title", defaultValue: "Policy Control Layer" },
  tab2Description: { type: ControlType.String, title: "Tab 2 Description", defaultValue: "Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.", displayTextArea: true },
  tab3Label: { type: ControlType.String, title: "Tab 3 Label", defaultValue: "Capsule Transmission" },
  tab3Title: { type: ControlType.String, title: "Tab 3 Title", defaultValue: "Outbound Capsule Transmission" },
  tab3Description: { type: ControlType.String, title: "Tab 3 Description", defaultValue: "Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.", displayTextArea: true },
  tab4Label: { type: ControlType.String, title: "Tab 4 Label", defaultValue: "Restoration Engine" },
  tab4Title: { type: ControlType.String, title: "Tab 4 Title", defaultValue: "Local Restoration Engine" },
  tab4Description: { type: ControlType.String, title: "Tab 4 Description", defaultValue: "After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.", displayTextArea: true },
  tab5Label: { type: ControlType.String, title: "Tab 5 Label", defaultValue: "Audit & Compliance" },
  tab5Title: { type: ControlType.String, title: "Tab 5 Title", defaultValue: "Audit & Compliance Layer" },
  tab5Description: { type: ControlType.String, title: "Tab 5 Description", defaultValue: "Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.", displayTextArea: true },
  tab1Image: { type: ControlType.Image, title: "Tab 1 Image (Encapsulation)" },
  tab2Image: { type: ControlType.Image, title: "Tab 2 Image (Policy Control)" },
  tab3Image: { type: ControlType.Image, title: "Tab 3 Image (Capsule Transmission)" },
  tab4Image: { type: ControlType.Image, title: "Tab 4 Image (Restoration)" },
  tab5Image: { type: ControlType.Image, title: "Tab 5 Image (Audit)" },
})
