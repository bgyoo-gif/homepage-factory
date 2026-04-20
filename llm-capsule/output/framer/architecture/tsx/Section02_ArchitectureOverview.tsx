import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

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
  neutral350: "#adadad",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  success: "#0e824c",
  info:    "#155ea0",
  borderDefault: "#e6e7e9",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  productName?: string
  sectionBgImage?: string
  diagramImage?: string
}

export default function Section02_ArchitectureOverview({
  sectionTitle = "Architecture",
  sectionTitleHighlight = "Overview",
  sectionDescription = "LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.",
  productName = "LLM Capsule",
  sectionBgImage = `${IMAGE_BASE}/bg-gradient-blue-violet.png`,
  diagramImage = "",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          position: relative;
          background-size: cover;
          background-position: center;
          background-image: url('${sectionBgImage}');
        }
        .s2-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255,255,255,0.45);
          z-index: 0;
        }
        .s2-section > * { position: relative; z-index: 1; }

        .s2-inner {
          width: 100%;
          container-type: inline-size;
          position: relative;
          z-index: 1;
        }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s2-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        .s2-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px) {
          .s2-section-header__title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s2-section-header__title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s2-section-header__title { font-size: 40px; }
        }
        .s2-section-header__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (min-width: 1024px) {
          .s2-section-header__description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s2-section-header__description { max-width: 1080px; }
        }
        .s2-text--brand { color: ${PALETTE.brandSecondary}; }
        .s2-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Diagram Window */
        .s2-diagram-window {
          background-color: #f8f8f8;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
        }
        .s2-diagram-titlebar {
          background-image: linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%);
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          border-bottom: 1px solid #c0c0c0;
        }
        .s2-titlebar-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .s2-titlebar-dot--close { background-color: #ff5f57; }
        .s2-titlebar-dot--min   { background-color: #ffbd2e; }
        .s2-titlebar-dot--max   { background-color: #28ca41; }

        .s2-diagram-content {
          background-image: linear-gradient(135deg, #dff0ea 0%, #eef3ff 40%, #f3eeff 70%, #fdeef8 100%);
          padding: 32px;
        }

        .s2-diagram-arch {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }
        @container (min-width: 768px) {
          .s2-diagram-arch { grid-template-columns: 1fr 2fr 1fr; gap: 16px; }
        }

        .s2-zone {
          background-color: ${PALETTE.surfaceWhite};
          border: 1px solid #d0d0d0;
          border-radius: 8px;
          overflow: hidden;
        }
        .s2-zone-header {
          padding: 12px 16px;
          font-family: "Fragment Mono", monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: center;
        }
        .s2-zone-header--internal {
          background-image: linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%);
          color: ${PALETTE.white};
        }
        .s2-zone-header--flow {
          background-color: ${PALETTE.neutral050};
          color: ${PALETTE.brandPrimary};
        }
        .s2-zone-header--external {
          background-color: ${PALETTE.neutral800};
          color: ${PALETTE.white};
        }
        .s2-zone-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .s2-zone-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          font-size: 14px;
          color: #2a2a2a;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s2-zone-item--capsule {
          background-image: linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%);
          color: ${PALETTE.white};
          font-weight: 700;
          border: none;
          padding: 12px 16px;
          border-radius: 8px;
        }
        .s2-zone-item--dark {
          background-color: ${PALETTE.neutral800};
          color: ${PALETTE.white};
          border-color: ${PALETTE.neutral700};
        }
        .s2-zone-item--muted {
          background-color: ${PALETTE.neutral800};
          color: ${PALETTE.neutral400};
          border-color: ${PALETTE.neutral700};
          border-style: dashed;
        }

        /* Step Card */
        .s2-step-card {
          background-color: ${PALETTE.surfaceWhite};
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 16px;
        }
        .s2-step-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .s2-step-badge--local    { background-color: ${PALETTE.brandPrimary}; color: ${PALETTE.white}; }
        .s2-step-badge--external { background-color: ${PALETTE.info};         color: ${PALETTE.white}; }
        .s2-step-title { font-size: 14px; font-weight: 700; color: #2a2a2a; margin-bottom: 4px; }
        .s2-step-desc  { font-size: 12px; color: #666666; line-height: 1.5; }

        .s2-arrow-down {
          width: 1.5px;
          height: 14px;
          background-color: #444444;
          margin: 6px auto;
          position: relative;
        }
        .s2-arrow-down::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #444444;
        }

        .s2-result-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          background-color: ${PALETTE.success};
          color: ${PALETTE.white};
          font-size: 12px;
          font-weight: 700;
        }

        /* Legend */
        .s2-legend {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid #e0e0e0;
          margin-top: 16px;
        }
        .s2-legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #666666;
        }
        .s2-legend-line {
          width: 24px;
          height: 2px;
          border-radius: 1px;
        }
        .s2-legend-line--encap    { background-color: ${PALETTE.brandPrimary}; }
        .s2-legend-line--restore  { background-color: ${PALETTE.success}; }
        .s2-legend-line--boundary {
          background-color: transparent;
          height: 0;
          border-top: 2px dashed #ff3030;
        }

        @container (max-width: 767px) {
          .s2-section { background-image: none; }
        }
      `}</style>

      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 className="s2-section-header__title">
                {sectionTitle}{" "}
                <span className="s2-text--brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s2-section-header__description">{sectionDescription}</p>
            </div>

            {/* Architecture Diagram */}
            {diagramImage ? (
              <img src={diagramImage} alt="Architecture Overview Diagram" style={{ width: "100%", display: "block", borderRadius: "16px" }} />
            ) : (
            <div className="s2-diagram-window">
              <div className="s2-diagram-titlebar">
                <div className="s2-titlebar-dot s2-titlebar-dot--close"></div>
                <div className="s2-titlebar-dot s2-titlebar-dot--min"></div>
                <div className="s2-titlebar-dot s2-titlebar-dot--max"></div>
              </div>
              <div className="s2-diagram-content">
                <div className="s2-diagram-arch">

                  {/* Zone 1: Internal Environment */}
                  <div className="s2-zone">
                    <div className="s2-zone-header s2-zone-header--internal">Internal Environment</div>
                    <div className="s2-zone-body">
                      <div className="s2-zone-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                        Customer Documents
                      </div>
                      <div className="s2-zone-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                        Internal Databases
                      </div>
                      <div className="s2-zone-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        RAG Pipelines
                      </div>
                      <div className="s2-zone-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                        Admin Console
                      </div>
                      <div className="s2-zone-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                        Policy Engine
                      </div>
                      <div className="s2-zone-item s2-zone-item--capsule">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="4"/></svg>
                        <span className="s2-product-name">{productName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Zone 2: Data Flow */}
                  <div className="s2-zone">
                    <div className="s2-zone-header s2-zone-header--flow">
                      How Data Flows Through <span className="s2-product-name">{productName}</span>
                    </div>
                    <div className="s2-zone-body">
                      <div className="s2-step-card">
                        <div className="s2-step-badge s2-step-badge--local">Step 1 — Local</div>
                        <div className="s2-step-title">Detection</div>
                        <div className="s2-step-desc">Auto-detects PII and org-defined entities</div>
                      </div>
                      <div className="s2-arrow-down"></div>
                      <div className="s2-step-card">
                        <div className="s2-step-badge s2-step-badge--local">Step 2 — Local</div>
                        <div className="s2-step-title">Encapsulation</div>
                        <div className="s2-step-desc">Replaces sensitive data with safe tokens locally</div>
                      </div>
                      <div className="s2-arrow-down"></div>
                      <div className="s2-step-card">
                        <div className="s2-step-badge s2-step-badge--external">Step 3 — External</div>
                        <div className="s2-step-title">LLM Processing</div>
                        <div className="s2-step-desc">AI processes capsule. No real data exposed.</div>
                      </div>
                      <div className="s2-arrow-down"></div>
                      <div className="s2-step-card">
                        <div className="s2-step-badge s2-step-badge--local">Step 4 — Local</div>
                        <div className="s2-step-title">Restoration</div>
                        <div className="s2-step-desc">Auto-restores original values locally</div>
                      </div>
                      <div className="s2-arrow-down"></div>
                      <div className="s2-result-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Business-Ready Output
                      </div>
                    </div>
                  </div>

                  {/* Zone 3: External AI Services */}
                  <div className="s2-zone">
                    <div className="s2-zone-header s2-zone-header--external">External AI Services</div>
                    <div className="s2-zone-body">
                      <div className="s2-zone-item s2-zone-item--dark">ChatGPT / OpenAI</div>
                      <div className="s2-zone-item s2-zone-item--dark">Claude / Anthropic</div>
                      <div className="s2-zone-item s2-zone-item--dark">Gemini / Google</div>
                      <div className="s2-zone-item s2-zone-item--dark">Perplexity</div>
                      <div className="s2-zone-item s2-zone-item--muted">Any LLM API</div>
                    </div>
                  </div>

                </div>

                {/* Legend */}
                <div className="s2-legend">
                  <div className="s2-legend-item">
                    <div className="s2-legend-line s2-legend-line--encap"></div>
                    Encapsulated data
                  </div>
                  <div className="s2-legend-item">
                    <div className="s2-legend-line s2-legend-line--restore"></div>
                    Restored response
                  </div>
                  <div className="s2-legend-item">
                    <div className="s2-legend-line s2-legend-line--boundary"></div>
                    Trust boundary
                  </div>
                </div>
              </div>
            </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_ArchitectureOverview, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Architecture",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Overview",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.",
    displayTextArea: true,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  sectionBgImage: {
    type: ControlType.Image,
    title: "Section Background",
  },
  diagramImage: {
    type: ControlType.Image,
    title: "Diagram Image (replaces HTML diagram)",
  },
})
