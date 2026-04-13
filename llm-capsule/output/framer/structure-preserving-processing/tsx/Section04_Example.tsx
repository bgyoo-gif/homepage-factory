import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionHeading?: string
  cardText?: string
  codeInline?: string
}

export default function Section04_Example({
  sectionHeading = "Example",
  cardText = "A contract references \"Acme Corp\" 47 times across 30 pages — as a party in the preamble, a signatory in the execution block, and a reference in 12 obligation clauses. Structure-preserving processing replaces all 47 instances with",
  codeInline = "ENTITY_A",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 32px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s4-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s4;
        }

        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container s4 (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }

        @container s4 (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }

        @container s4 (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }

        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }

        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }

        @container s4 (min-width: 768px) {
          .s4-section-header h2 { font-size: 22px; }
        }

        @container s4 (min-width: 1024px) {
          .s4-section-header h2 { font-size: 24px; }
        }

        @container s4 (min-width: 1440px) {
          .s4-section-header h2 { font-size: 28px; }
        }

        .s4-text--brand {
          color: #5690D4;
        }

        .s4-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @container s4 (min-width: 1440px) {
          .s4-card { padding: 32px; }
        }

        .s4-card-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-code-inline {
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 0.875em;
          font-weight: 400;
          background-color: #ececec;
          border-radius: 3px;
          padding: 0 4px;
          color: inherit;
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2><span className="s4-text--brand">{sectionHeading}</span></h2>
            </div>
            <div className="s4-card">
              <p className="s4-card-paragraph">
                {cardText}{" "}
                <code className="s4-code-inline">{codeInline}</code>,
                {" "}maintaining the ability for AI to track Acme Corp's obligations throughout the document.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Example, {
  sectionHeading: {
    type: ControlType.String,
    title: "Section Heading",
    defaultValue: "Example",
  },
  cardText: {
    type: ControlType.String,
    title: "Card Text",
    defaultValue:
      "A contract references \"Acme Corp\" 47 times across 30 pages — as a party in the preamble, a signatory in the execution block, and a reference in 12 obligation clauses. Structure-preserving processing replaces all 47 instances with",
  },
  codeInline: {
    type: ControlType.String,
    title: "Code Inline",
    defaultValue: "ENTITY_A",
  },
})
