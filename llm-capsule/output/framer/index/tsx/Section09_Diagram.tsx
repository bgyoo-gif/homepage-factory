import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  gradientArchHeader: "linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%)",
  success:        "#0e824c",
  error:          "#ff3030",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  textInverse:    "#ffffff",
  white:          "#ffffff",
  neutral025:     "#f7f7f7",
  neutral400:     "#9c9c9c",
  neutral500:     "#636363",
  neutral700:     "#303135",
  neutral800:     "#171719",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  diagHeading?: string
  diagSubheading?: string
  diagImage?: string
}

export default function Section09_Diagram({
  diagHeading = "A data layer between your enterprise and any LLM",
  diagSubheading = "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.",
  diagImage = "",
}: Props) {
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
        .idx-root a { text-decoration: none; color: inherit; }
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

        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
        .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

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

        .idx-center-cta { text-align: center; margin-top: 32px; }

        .idx-diagram__window {
          border: 1px solid ${P.borderDefault}; border-radius: 24px;
          overflow: hidden; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
        }
        .idx-diagram__header {
          background: ${P.gradientArchHeader}; padding: 12px 24px;
          display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__dot { width: 8px; height: 8px; border-radius: 50%; background-color: rgba(255,255,255,0.55); }
        .idx-diagram__header-title { font-size: 14px; font-weight: 600; color: ${P.white}; margin-left: 8px; }
        .idx-diagram__body { padding: 32px; background-color: ${P.surfaceWhite}; overflow-x: auto; }
        .idx-diagram__cols { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 24px; min-width: 700px; }
        .idx-diagram__col-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__col-dot { width: 8px; height: 8px; border-radius: 2px; }
        .idx-diagram__item {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 5px; font-size: 14px; margin-bottom: 8px;
        }
        .idx-diagram__item--internal { background-color: rgba(85,180,93,0.06); color: ${P.textPrimary}; border: 1px solid rgba(85,180,93,0.15); }
        .idx-diagram__item--capsule {
          background-color: ${P.brandPrimary}; color: ${P.white}; font-weight: 600;
          padding: 12px; border-radius: 8px; margin-top: 16px;
        }
        .idx-diagram__item--external { background-color: ${P.neutral025}; color: ${P.textPrimary}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__item--dashed { border-style: dashed; }
        .idx-diagram__flow-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${P.textTertiary}; margin-bottom: 4px; }
        .idx-diagram__flow-step { padding: 12px; border-radius: 8px; margin-bottom: 8px; font-size: 14px; }
        .idx-diagram__flow-step--local { background-color: ${P.surfaceLight}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__flow-step--external { background-color: rgba(86,144,212,0.06); border: 1px solid rgba(86,144,212,0.15); }
        .idx-diagram__flow-step--output { background-color: rgba(14,130,76,0.08); border: 1px solid rgba(14,130,76,0.2); color: ${P.success}; font-weight: 600; }
        .idx-diagram__arrow { text-align: center; color: ${P.textTertiary}; font-size: 14px; padding: 4px 0; }
        .idx-diagram__hl--red   { color: ${P.error}; font-weight: 600; }
        .idx-diagram__hl--brand { color: ${P.brandSecondary}; font-weight: 600; }
        .idx-diagram__hl--green { color: ${P.success}; font-weight: 600; }
        .idx-diagram__boundary-col { display: flex; gap: 16px; }
        .idx-diagram__trust-boundary {
          position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .idx-diagram__trust-boundary::before {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%;
          border-left: 2px dashed ${P.error}; opacity: 0.4;
        }
        .idx-diagram__trust-label {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.error};
          border-radius: 5px; padding: 8px 12px;
          font-size: 9px; font-weight: 700; color: ${P.error};
          text-transform: uppercase; letter-spacing: 0.08em;
          writing-mode: vertical-lr; white-space: nowrap; position: relative; z-index: 1;
        }
        .idx-diagram__ext-inner {
          background-color: ${P.neutral800}; border-radius: 8px; padding: 16px; flex: 1;
        }
        .idx-diagram__ext-inner .idx-diagram__col-title { color: ${P.neutral400}; }
        .idx-diagram__ext-inner .idx-diagram__item--external {
          background-color: ${P.neutral700}; color: ${P.textInverse}; border-color: ${P.neutral500};
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-9" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">
                  A <span className="idx-brand">data layer</span> between your enterprise and any LLM
                </h2>
                <p className="idx-section-header__desc">
                  <span className="idx-product">LLM Capsule</span> sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.
                </p>
              </div>

              {diagImage ? (
                <img src={diagImage} alt="LLM Capsule Architecture Diagram" style={{ width: "100%", display: "block", borderRadius: "16px" }} />
              ) : (
              <div className="idx-diagram__window">
                <div className="idx-diagram__header">
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__header-title">LLM Capsule Architecture</span>
                </div>
                <div className="idx-diagram__body">
                  <div className="idx-diagram__cols">
                    {/* Col 1: Internal */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandAccent }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandAccent }}></span>
                        INTERNAL ENVIRONMENT
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Customer Documents
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        Internal Databases
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                        RAG Pipelines
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        Admin Console
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        Policy Engine
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--capsule" style={{ marginTop: 16 }}>
                        <span className="idx-product">LLM Capsule</span> — Encapsulation &amp; Restoration
                      </div>
                    </div>

                    {/* Col 2: Data Flow */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandSecondary }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandSecondary }}></span>
                        HOW DATA FLOWS THROUGH LLM CAPSULE
                      </div>
                      <div className="idx-diagram__flow-label">STEP 1 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Detection — <span className="idx-diagram__hl--red">"Contract with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-label">STEP 2 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Encapsulation — <span className="idx-diagram__hl--brand">"Contract with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">- - - → External - - - →</div>
                      <div className="idx-diagram__flow-label">STEP 3 — EXTERNAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--external">
                        LLM Processing — <span className="idx-diagram__hl--brand">"The deal with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">← - - - Local - - - ←</div>
                      <div className="idx-diagram__flow-label">STEP 4 — LOCAL</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        Restoration — <span className="idx-diagram__hl--green">"The deal with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--output">Business-Ready Output</div>
                    </div>

                    {/* Col 3: Trust Boundary + External */}
                    <div className="idx-diagram__boundary-col">
                      <div className="idx-diagram__trust-boundary">
                        <span className="idx-diagram__trust-label">TRUST BOUNDARY</span>
                      </div>
                      <div className="idx-diagram__ext-inner">
                        <div className="idx-diagram__col-title" style={{ color: P.neutral400 }}>
                          <span className="idx-diagram__col-dot" style={{ backgroundColor: P.neutral400 }}></span>
                          EXTERNAL AI SERVICES
                        </div>
                        <div className="idx-diagram__item idx-diagram__item--external">ChatGPT / OpenAI</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Claude / Anthropic</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Gemini / Google</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Perplexity</div>
                        <div className="idx-diagram__item idx-diagram__item--external idx-diagram__item--dashed">Any LLM API</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}

              <div className="idx-center-cta">
                <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">View on AWS Marketplace</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section09_Diagram, {
  diagHeading:    { type: ControlType.String, title: "Diagram Heading",    defaultValue: "A data layer between your enterprise and any LLM", displayTextArea: true },
  diagSubheading: { type: ControlType.String, title: "Diagram Subheading", defaultValue: "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.", displayTextArea: true },
  diagImage:      { type: ControlType.Image,  title: "Diagram Image (replaces HTML diagram)" },
})
