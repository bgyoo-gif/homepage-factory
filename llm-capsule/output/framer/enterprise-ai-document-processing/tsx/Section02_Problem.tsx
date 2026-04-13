import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
}

export default function Section02_Problem({
  sectionLabel = "Problem",
  paragraph1 = "Enterprises sit on enormous volumes of unstructured and semi-structured documents — contracts, reports, correspondence, filings, medical records, and technical documentation. AI document processing promises to unlock value through automated summarization, extraction, classification, and translation. But these documents contain the most sensitive enterprise information.",
  paragraph2 = "Current AI document security approaches either restrict AI to non-sensitive documents (limiting value) or apply destructive masking that produces unusable outputs (limiting usefulness). Neither scales for enterprise document intelligence.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
          overflow: hidden;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s2-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s2-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s2-brand { color: #5690D4; }

        .s2-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-section-header h2 { font-size: 28px; }
          .s2-section-header { text-align: center; }
        }
      `}</style>
      <section className="s2-section" id="section-3">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2><span className="s2-brand">{sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">{paragraph1}</p>
            <p className="s2-paragraph">{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Problem" },
  paragraph1: { type: ControlType.String, title: "Paragraph 1", defaultValue: "Enterprises sit on enormous volumes of unstructured and semi-structured documents — contracts, reports, correspondence, filings, medical records, and technical documentation. AI document processing promises to unlock value through automated summarization, extraction, classification, and translation. But these documents contain the most sensitive enterprise information." },
  paragraph2: { type: ControlType.String, title: "Paragraph 2", defaultValue: "Current AI document security approaches either restrict AI to non-sensitive documents (limiting value) or apply destructive masking that produces unusable outputs (limiting usefulness). Neither scales for enterprise document intelligence." },
})
