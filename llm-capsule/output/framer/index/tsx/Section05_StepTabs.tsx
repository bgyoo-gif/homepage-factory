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
}

export default function Section05_StepTabs({
  tabsHeading = "Enterprise AI enablement through a 3+2 architecture",
  tabsSubheading = "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.",
  tabCore1Image = "",
  tabCore2Image = "",
  tabCore3Image = "",
  tabPlus1Image = "",
  tabPlus2Image = "",
}: Props) {
  const [activeTab, setActiveTab] = useState("core1")

  const tabs = [
    { id: "core1", label: "Core 1 — Zero Exposure" },
    { id: "core2", label: "Core 2 — Restoration" },
    { id: "core3", label: "Core 3 — Enterprise Context" },
    { id: "plus1", label: "+1 Structure-Preserving" },
    { id: "plus2", label: "+2 Cross-Model" },
  ]

  const tabPanels: Record<string, { title: string; p1: string; p2: string; image: string }> = {
    core1: {
      title: "Zero Exposure",
      image: tabCore1Image,
      p1: "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services.",
      p2: "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service — provider logs are safe, raw data never leaves.",
    },
    core2: {
      title: "Restoration",
      image: tabCore2Image,
      p1: "AI outputs are automatically restored locally — not abstracted, not anonymized, but fully restored with real business data for immediate use.",
      p2: "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows — regulatory reports, legal documents, claim analysis, and internal communications — without any post-processing step. This eliminates the \"manual review loop\" that kills AI ROI.",
    },
    core3: {
      title: "Enterprise Context",
      image: tabCore3Image,
      p1: "Define and control sensitive entities beyond standard PII — project codes, internal IDs, contract terms, and strategic data specific to your organization.",
      p2: "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context — tailored protection for your specific business logic and secrets.",
    },
    plus1: {
      title: "Structure-Preserving",
      image: tabPlus1Image,
      p1: "Tables, diagrams, cross-references, and document hierarchy remain intact — your document layout stays readable to AI throughout the process.",
      p2: "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained.",
    },
    plus2: {
      title: "Cross-Model Execution",
      image: tabPlus2Image,
      p1: "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly — no re-engineering, no vendor lock-in.",
      p2: "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime — zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform.",
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
  tabCore1Image:  { type: ControlType.Image,  title: "Tab Core1 Image (Zero Exposure)" },
  tabCore2Image:  { type: ControlType.Image,  title: "Tab Core2 Image (Restoration)" },
  tabCore3Image:  { type: ControlType.Image,  title: "Tab Core3 Image (Enterprise Context)" },
  tabPlus1Image:  { type: ControlType.Image,  title: "Tab +1 Image (Structure-Preserving)" },
  tabPlus2Image:  { type: ControlType.Image,  title: "Tab +2 Image (Cross-Model)" },
})
