import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
  neutral150:     "#e6e7e9",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  body?: string
  card1Title?: string
  card1Desc?: string
  card2Title?: string
  card2Desc?: string
  card3Title?: string
  card3Desc?: string
}

export default function Section06_StructurePreserving({
  sectionTitle = "Beyond text — keep document structure",
  sectionTitleBrand = "intact",
  sectionDescription = "Enterprise workflows do not run on plain text alone. They rely on reports, PDFs, spreadsheets, diagrams, presentations, tables, and mixed-format documents.",
  body = "Flat masking treats every sensitive value identically, collapsing entity relationships and breaking table schemas. Structure-preserving processing maintains entity consistency across entire documents, preserves table column relationships for accurate extraction, and keeps cross-reference links intact. This is document-aware protection — not flat text anonymization.",
  card1Title = "PDF & Word Documents",
  card1Desc = "Protected processing with layout, formatting, and section structure preserved. AI receives structurally complete documents.",
  card2Title = "Spreadsheets & Tables",
  card2Desc = "Tabular data structure maintained through encapsulation and restoration. Column headers, row relationships, and cell references preserved.",
  card3Title = "Presentations & Reports",
  card3Desc = "Visual and mixed-format documents handled as structured content. Cross-references and entity relationships remain trackable.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s6-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s6-inner { width: 100%; container-type: inline-size; }
        .s6-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s6-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }

        .s6-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s6-header { text-align: left; } }
        .s6-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s6-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s6-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s6-header__title { font-size: 28px; } }
        .s6-header__brand { color: ${PALETTE.brandSecondary}; }
        .s6-header__desc {
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
        @container (min-width: 1024px) { .s6-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s6-header__desc { max-width: 1080px; } }

        .s6-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 32px;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s6-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s6-body { max-width: 1080px; } }

        /* Card Grid */
        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .s6-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .s6-grid { grid-template-columns: repeat(3, 1fr); } }

        .s6-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
        }
        @container (min-width: 1440px) { .s6-card { padding: 32px; } }

        .s6-card-icon {
          margin-bottom: 12px;
          color: ${PALETTE.brandSecondary};
        }
        .s6-card-icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s6-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0 0 12px;
          text-wrap: balance;
        }
        .s6-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          flex: 1;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
      `}</style>
      <section className="s6-section" id="section-6">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-header">
              <h2 className="s6-header__title">
                {sectionTitle} <span className="s6-header__brand">{sectionTitleBrand}</span> for AI
              </h2>
              <p className="s6-header__desc">{sectionDescription}</p>
            </div>

            <p className="s6-body">{body}</p>

            <div className="s6-grid">
              <article className="s6-card">
                <div className="s6-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className="s6-card-title">{card1Title}</h3>
                <p className="s6-card-desc">{card1Desc}</p>
              </article>

              <article className="s6-card">
                <div className="s6-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>
                  </svg>
                </div>
                <h3 className="s6-card-title">{card2Title}</h3>
                <p className="s6-card-desc">{card2Desc}</p>
              </article>

              <article className="s6-card">
                <div className="s6-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
                  </svg>
                </div>
                <h3 className="s6-card-title">{card3Title}</h3>
                <p className="s6-card-desc">{card3Desc}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_StructurePreserving, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Beyond text — keep document structure" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "intact" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "Enterprise workflows do not run on plain text alone. They rely on reports, PDFs, spreadsheets, diagrams, presentations, tables, and mixed-format documents.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",          defaultValue: "Flat masking treats every sensitive value identically, collapsing entity relationships and breaking table schemas. Structure-preserving processing maintains entity consistency across entire documents, preserves table column relationships for accurate extraction, and keeps cross-reference links intact. This is document-aware protection — not flat text anonymization.", displayTextArea: true },
  card1Title:         { type: ControlType.String, title: "Card 1 Title",  defaultValue: "PDF & Word Documents" },
  card1Desc:          { type: ControlType.String, title: "Card 1 Desc",   defaultValue: "Protected processing with layout, formatting, and section structure preserved. AI receives structurally complete documents.", displayTextArea: true },
  card2Title:         { type: ControlType.String, title: "Card 2 Title",  defaultValue: "Spreadsheets & Tables" },
  card2Desc:          { type: ControlType.String, title: "Card 2 Desc",   defaultValue: "Tabular data structure maintained through encapsulation and restoration. Column headers, row relationships, and cell references preserved.", displayTextArea: true },
  card3Title:         { type: ControlType.String, title: "Card 3 Title",  defaultValue: "Presentations & Reports" },
  card3Desc:          { type: ControlType.String, title: "Card 3 Desc",   defaultValue: "Visual and mixed-format documents handled as structured content. Cross-references and entity relationships remain trackable.", displayTextArea: true },
})
