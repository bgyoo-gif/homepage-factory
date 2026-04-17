import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  tabsHeading?: string
  tabsSubheading?: string
  tabCore1Image?: string
  tabCore2Image?: string
  tabCore3Image?: string
  tabPlus1Image?: string
  tabPlus2Image?: string
  tab1Label?: string
  tab2Label?: string
  tab3Label?: string
  tab4Label?: string
  tab5Label?: string
  tab1Title?: string
  tab1P1?: string
  tab1P2?: string
  tab2Title?: string
  tab2P1?: string
  tab2P2?: string
  tab3Title?: string
  tab3P1?: string
  tab3P2?: string
  tab4Title?: string
  tab4P1?: string
  tab4P2?: string
  tab5Title?: string
  tab5P1?: string
  tab5P2?: string
}

export default function Section05_StepTabs({
  tabsHeading = "Enterprise AI enablement through a 3+2 architecture",
  tabsSubheading = "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.",
  tabCore1Image = "",
  tabCore2Image = "",
  tabCore3Image = "",
  tabPlus1Image = "",
  tabPlus2Image = "",
  tab1Label = "Core 1 — Zero Exposure",
  tab2Label = "Core 2 — Restoration",
  tab3Label = "Core 3 — Enterprise Context",
  tab4Label = "+1 Structure-Preserving",
  tab5Label = "+2 Cross-Model",
  tab1Title = "Zero Exposure",
  tab1P1 = "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services.",
  tab1P2 = "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service — provider logs are safe, raw data never leaves.",
  tab2Title = "Restoration",
  tab2P1 = "AI outputs are automatically restored locally — not abstracted, not anonymized, but fully restored with real business data for immediate use.",
  tab2P2 = "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows — regulatory reports, legal documents, claim analysis, and internal communications — without any post-processing step. This eliminates the \"manual review loop\" that kills AI ROI.",
  tab3Title = "Enterprise Context",
  tab3P1 = "Define and control sensitive entities beyond standard PII — project codes, internal IDs, contract terms, and strategic data specific to your organization.",
  tab3P2 = "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context — tailored protection for your specific business logic and secrets.",
  tab4Title = "Structure-Preserving",
  tab4P1 = "Tables, diagrams, cross-references, and document hierarchy remain intact — your document layout stays readable to AI throughout the process.",
  tab4P2 = "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained.",
  tab5Title = "Cross-Model Execution",
  tab5P1 = "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly — no re-engineering, no vendor lock-in.",
  tab5P2 = "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime — zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform.",
}: Props) {
  const [activeTab, setActiveTab] = useState("core1")

  const tabs = [
    { id: "core1", label: tab1Label },
    { id: "core2", label: tab2Label },
    { id: "core3", label: tab3Label },
    { id: "plus1", label: tab4Label },
    { id: "plus2", label: tab5Label },
  ]

  const tabPanels: Record<string, { title: string; p1: string; p2: string; image: string }> = {
    core1: {
      title: tab1Title,
      image: tabCore1Image,
      p1: tab1P1,
      p2: tab1P2,
    },
    core2: {
      title: tab2Title,
      image: tabCore2Image,
      p1: tab2P1,
      p2: tab2P2,
    },
    core3: {
      title: tab3Title,
      image: tabCore3Image,
      p1: tab3P1,
      p2: tab3P2,
    },
    plus1: {
      title: tab4Title,
      image: tabPlus1Image,
      p1: tab4P1,
      p2: tab4P2,
    },
    plus2: {
      title: tab5Title,
      image: tabPlus2Image,
      p1: tab5P1,
      p2: tab5P2,
    },
  }

  const panel = tabPanels[activeTab]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root img { max-width: 100%; display: block; }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        .idx-inner { width: 100%; container-type: inline-size; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }
        .idx-section-header__desc {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .idx-section-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-header__desc { max-width: 1080px; } }

        .idx-step-tabs__nav {
          display: flex; gap: 0; border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px; overflow-x: auto;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .idx-step-tabs__nav::-webkit-scrollbar { display: none; }
        .idx-step-tabs__tab {
          padding: 12px 24px; font-size: 14px; font-weight: 500;
          color: ${P.textSecondary}; cursor: pointer;
          border-bottom: 2px solid transparent; white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .idx-step-tabs__tab--active {
          color: ${P.brandPrimary}; border-bottom-color: ${P.brandPrimary};
          font-weight: 600;
        }
        .idx-step-tabs__panel {
          display: grid; grid-template-columns: 1fr; gap: 32px;
        }
        @container (min-width: 1024px) { .idx-step-tabs__panel { grid-template-columns: 5fr 7fr; } }
        .idx-step-tabs__panel h3 { margin-bottom: 12px; font-size: 20px; font-weight: 600; }
        .idx-step-tabs__panel p { font-size: 16px; color: ${P.textSecondary}; line-height: 1.7; margin-bottom: 16px; }
        .idx-step-tabs__screenshot {
          background-color: ${P.surfaceLight}; border-radius: 24px;
          border: 1px solid ${P.borderDefault};
          display: flex; align-items: center; justify-content: center; min-height: 280px;
          font-size: 14px; color: ${P.textTertiary};
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-5" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{tabsHeading}</h2>
                <p className="idx-section-header__desc">{tabsSubheading}</p>
              </div>

              <div className="idx-step-tabs__nav">
                {tabs.map(t => (
                  <div
                    key={t.id}
                    className={`idx-step-tabs__tab${activeTab === t.id ? " idx-step-tabs__tab--active" : ""}`}
                    onClick={() => setActiveTab(t.id)}
                  >
                    {t.label}
                  </div>
                ))}
              </div>

              <div className="idx-step-tabs__panel">
                <div>
                  <h3>{panel.title}</h3>
                  <p>{panel.p1}</p>
                  <p>{panel.p2}</p>
                </div>
                <div className="idx-step-tabs__screenshot">
                  {panel.image ? <img src={panel.image} alt={panel.title} style={{ width: "100%", display: "block" }} /> : panel.title}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section05_StepTabs, {
  tabsHeading:    { type: ControlType.String, title: "Tabs Heading",    defaultValue: "Enterprise AI enablement through a 3+2 architecture", displayTextArea: true },
  tabsSubheading: { type: ControlType.String, title: "Tabs Subheading", defaultValue: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.", displayTextArea: true },
  tab1Label:      { type: ControlType.String, title: "Tab 1 Label",     defaultValue: "Core 1 — Zero Exposure" },
  tab1Title:      { type: ControlType.String, title: "Tab 1 Title",     defaultValue: "Zero Exposure" },
  tab1P1:         { type: ControlType.String, title: "Tab 1 Para 1",    defaultValue: "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services.", displayTextArea: true },
  tab1P2:         { type: ControlType.String, title: "Tab 1 Para 2",    defaultValue: "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service — provider logs are safe, raw data never leaves.", displayTextArea: true },
  tabCore1Image:  { type: ControlType.Image,  title: "Tab Core1 Image (Zero Exposure)" },
  tab2Label:      { type: ControlType.String, title: "Tab 2 Label",     defaultValue: "Core 2 — Restoration" },
  tab2Title:      { type: ControlType.String, title: "Tab 2 Title",     defaultValue: "Restoration" },
  tab2P1:         { type: ControlType.String, title: "Tab 2 Para 1",    defaultValue: "AI outputs are automatically restored locally — not abstracted, not anonymized, but fully restored with real business data for immediate use.", displayTextArea: true },
  tab2P2:         { type: ControlType.String, title: "Tab 2 Para 2",    defaultValue: "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows — regulatory reports, legal documents, claim analysis, and internal communications — without any post-processing step. This eliminates the \"manual review loop\" that kills AI ROI.", displayTextArea: true },
  tabCore2Image:  { type: ControlType.Image,  title: "Tab Core2 Image (Restoration)" },
  tab3Label:      { type: ControlType.String, title: "Tab 3 Label",     defaultValue: "Core 3 — Enterprise Context" },
  tab3Title:      { type: ControlType.String, title: "Tab 3 Title",     defaultValue: "Enterprise Context" },
  tab3P1:         { type: ControlType.String, title: "Tab 3 Para 1",    defaultValue: "Define and control sensitive entities beyond standard PII — project codes, internal IDs, contract terms, and strategic data specific to your organization.", displayTextArea: true },
  tab3P2:         { type: ControlType.String, title: "Tab 3 Para 2",    defaultValue: "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context — tailored protection for your specific business logic and secrets.", displayTextArea: true },
  tabCore3Image:  { type: ControlType.Image,  title: "Tab Core3 Image (Enterprise Context)" },
  tab4Label:      { type: ControlType.String, title: "Tab 4 Label",     defaultValue: "+1 Structure-Preserving" },
  tab4Title:      { type: ControlType.String, title: "Tab 4 Title",     defaultValue: "Structure-Preserving" },
  tab4P1:         { type: ControlType.String, title: "Tab 4 Para 1",    defaultValue: "Tables, diagrams, cross-references, and document hierarchy remain intact — your document layout stays readable to AI throughout the process.", displayTextArea: true },
  tab4P2:         { type: ControlType.String, title: "Tab 4 Para 2",    defaultValue: "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained.", displayTextArea: true },
  tabPlus1Image:  { type: ControlType.Image,  title: "Tab +1 Image (Structure-Preserving)" },
  tab5Label:      { type: ControlType.String, title: "Tab 5 Label",     defaultValue: "+2 Cross-Model" },
  tab5Title:      { type: ControlType.String, title: "Tab 5 Title",     defaultValue: "Cross-Model Execution" },
  tab5P1:         { type: ControlType.String, title: "Tab 5 Para 1",    defaultValue: "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly — no re-engineering, no vendor lock-in.", displayTextArea: true },
  tab5P2:         { type: ControlType.String, title: "Tab 5 Para 2",    defaultValue: "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime — zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform.", displayTextArea: true },
  tabPlus2Image:  { type: ControlType.Image,  title: "Tab +2 Image (Cross-Model)" },
})
