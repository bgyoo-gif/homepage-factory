import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  success:        "#0e824c",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceLight:   "#f7f7f7",
}

interface Props {
  csHeading?: string
  csSubheading?: string
  card1Title?: string
  card1Description?: string
  card1Bullet1?: string
  card1Bullet2?: string
  card2Title?: string
  card2Description?: string
  card2Bullet1?: string
  card2Bullet2?: string
  card3Title?: string
  card3Description?: string
  card3Bullet1?: string
  card3Bullet2?: string
  card4Title?: string
  card4Description?: string
  card4Bullet1?: string
  card4Bullet2?: string
}

export default function Section06_CaseStudy({
  csHeading = "AI-Enabled Enterprise Workflows",
  csSubheading = "LLM Capsule plugs into the most common enterprise AI workflows — from document intake to output delivery, one data layer enables AI adoption on real documents.",
  card1Title = "Secure Document Summarization",
  card1Description = "AI generates executive summaries of sensitive documents — contracts, reports, filings — while all confidential elements are replaced with safe placeholders. Restored summaries contain real names, dates, and figures ready for business use.",
  card1Bullet1 = "Contracts, reports, and filings protected",
  card1Bullet2 = "Real names, dates, and figures restored in output",
  card2Title = "AI Claims Processing",
  card2Description = "Insurance and financial claims go through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems with real policyholder data.",
  card2Bullet1 = "Classification, damage assessment, fraud detection enabled",
  card2Bullet2 = "Restored outputs feed directly into claims systems",
  card3Title = "Confidential Contract Review",
  card3Description = "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for direct integration into deal management systems.",
  card3Bullet1 = "Key terms, obligations, and risk clauses extracted",
  card3Bullet2 = "Real party names, amounts, and references restored",
  card4Title = "Internal Report Generation",
  card4Description = "AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports contain real employee names, department data, and metric values.",
  card4Bullet1 = "Performance reviews, audit findings, compliance summaries",
  card4Bullet2 = "Real employee names, department data, and metrics restored",
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
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: pretty; }

        .idx-root { width: 100%; container-type: inline-size; }
        .idx-inner { width: 100%; }

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

        .idx-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .idx-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        .idx-card {
          background-color: ${P.surfaceWhite}; border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .idx-card { padding: 32px; } }
        .idx-card__icon { margin-bottom: 12px; color: ${P.brandSecondary}; }
        .idx-card__title {
          font-size: 24px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; margin-bottom: 12px;
        }
        .idx-card__desc { font-size: 14px; color: ${P.textSecondary}; line-height: 1.7; flex: 1; }

        .idx-bullet { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 12px; }
        .idx-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .idx-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .idx-bullet--check .idx-bullet__icon::before { content: "\\2713"; color: ${P.success}; font-weight: 700; font-size: 16px; line-height: 1; }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-6" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>{csHeading}</h2>
                <p className="idx-section-header__desc">{csSubheading}</p>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                  <h3 className="idx-card__title">{card1Title}</h3>
                  <p className="idx-card__desc">{card1Description}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card1Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card1Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg></div>
                  <h3 className="idx-card__title">{card2Title}</h3>
                  <p className="idx-card__desc">{card2Description}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card2Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card2Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <h3 className="idx-card__title">{card3Title}</h3>
                  <p className="idx-card__desc">{card3Description}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card3Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card3Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg></div>
                  <h3 className="idx-card__title">{card4Title}</h3>
                  <p className="idx-card__desc">{card4Description}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card4Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{card4Bullet2}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section06_CaseStudy, {
  csHeading:        { type: ControlType.String, title: "Case Study Heading",    defaultValue: "AI-Enabled Enterprise Workflows" },
  csSubheading:     { type: ControlType.String, title: "Case Study Subheading", defaultValue: "LLM Capsule plugs into the most common enterprise AI workflows — from document intake to output delivery, one data layer enables AI adoption on real documents.", displayTextArea: true },
  card1Title:       { type: ControlType.String, title: "Card 1 Title",       defaultValue: "Secure Document Summarization" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "AI generates executive summaries of sensitive documents — contracts, reports, filings — while all confidential elements are replaced with safe placeholders. Restored summaries contain real names, dates, and figures ready for business use.", displayTextArea: true },
  card1Bullet1:     { type: ControlType.String, title: "Card 1 Bullet 1",    defaultValue: "Contracts, reports, and filings protected" },
  card1Bullet2:     { type: ControlType.String, title: "Card 1 Bullet 2",    defaultValue: "Real names, dates, and figures restored in output" },
  card2Title:       { type: ControlType.String, title: "Card 2 Title",       defaultValue: "AI Claims Processing" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "Insurance and financial claims go through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems with real policyholder data.", displayTextArea: true },
  card2Bullet1:     { type: ControlType.String, title: "Card 2 Bullet 1",    defaultValue: "Classification, damage assessment, fraud detection enabled" },
  card2Bullet2:     { type: ControlType.String, title: "Card 2 Bullet 2",    defaultValue: "Restored outputs feed directly into claims systems" },
  card3Title:       { type: ControlType.String, title: "Card 3 Title",       defaultValue: "Confidential Contract Review" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for direct integration into deal management systems.", displayTextArea: true },
  card3Bullet1:     { type: ControlType.String, title: "Card 3 Bullet 1",    defaultValue: "Key terms, obligations, and risk clauses extracted" },
  card3Bullet2:     { type: ControlType.String, title: "Card 3 Bullet 2",    defaultValue: "Real party names, amounts, and references restored" },
  card4Title:       { type: ControlType.String, title: "Card 4 Title",       defaultValue: "Internal Report Generation" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports contain real employee names, department data, and metric values.", displayTextArea: true },
  card4Bullet1:     { type: ControlType.String, title: "Card 4 Bullet 1",    defaultValue: "Performance reviews, audit findings, compliance summaries" },
  card4Bullet2:     { type: ControlType.String, title: "Card 4 Bullet 2",    defaultValue: "Real employee names, department data, and metrics restored" },
})
