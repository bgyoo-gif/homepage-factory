import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  sectionDesc?: string
  withoutLabel?: string
  withoutHeading?: string
  withoutItem1?: string
  withoutItem2?: string
  withoutItem3?: string
  withoutItem4?: string
  withoutItem5?: string
  withoutItem6?: string
  withLabel?: string
  withHeading?: string
  withItem1?: string
  withItem2?: string
  withItem3?: string
  withItem4?: string
  withItem5?: string
  withItem6?: string
}

export default function Section06_WithoutWith({
  eyebrow = "PILOT TO PRODUCTION",
  heading = "Without LLM Capsule. With ",
  headingHighlight = "LLM Capsule",
  sectionDesc = "What changes when the data layer can finally handle the work.",
  withoutLabel = "WITHOUT LLM CAPSULE",
  withoutHeading = "Enterprise AI projects stall at pilot",
  withoutItem1 = "Manual review workflows persist — humans process documents AI can't be trusted with",
  withoutItem2 = "Document structure destroyed — flat masking breaks tables and cross-references",
  withoutItem3 = "Low-quality AI output — even when AI is permitted, results need extensive manual reconstruction",
  withoutItem4 = "Security teams block AI adoption — projects never demonstrate value before being cancelled",
  withoutItem5 = "Shadow AI emerges — employees route around the controls because the controls block real work",
  withoutItem6 = "Regulated workflows excluded — telecom, healthcare, defense, finance left out of the AI gains",
  withLabel = "WITH LLM CAPSULE",
  withHeading = "Enterprise AI ships on real data",
  withItem1 = "AI runs on sensitive documents — the data layer handles protection, teams focus on outcomes",
  withItem2 = "Real documents processed with any LLM — ChatGPT, Claude, Gemini, Perplexity, or on-prem local",
  withItem3 = "Compliance satisfied — zero raw exposure architecture meets GDPR, HIPAA, SOX governance",
  withItem4 = "Restored outputs retain business context — real names, real figures, real references",
  withItem5 = "Tables, layouts, cross-references preserved through structure-preserving encapsulation",
  withItem6 = "Regulated industries adopt AI on production data — pilots become production",
}: Props) {
  const withoutItems = [withoutItem1, withoutItem2, withoutItem3, withoutItem4, withoutItem5, withoutItem6]
  const withItems = [withItem1, withItem2, withItem3, withItem4, withItem5, withItem6]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s6-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s6-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s6-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s6-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s6-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s6-h2 {
          font-size: clamp(28px, 3.5cqi, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .s6-h2 span {
          color: var(--c-primary, #5b4fe9);
        }

        .s6-desc {
          font-size: clamp(16px, 1.4cqi, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s6-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @container (min-width: 700px) {
          .s6-cols {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .s6-col {
          padding: 32px;
          border-radius: var(--r-md, 10px);
        }

        .s6-col--without {
          background-color: var(--c-coral-soft, #fce9e8);
          border: 1px solid var(--c-coral, #ef5350);
        }

        .s6-col--with {
          background-color: var(--c-primary-soft, #eeebfe);
          border: 1px solid var(--c-primary, #5b4fe9);
        }

        .s6-col__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .s6-col--without .s6-col__label { color: var(--c-coral-dark, #c73e3a); }
        .s6-col--with .s6-col__label    { color: var(--c-primary-dark, #3b2fbf); }

        .s6-col__heading {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 18px;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
        }

        .s6-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .s6-list li {
          font-size: 14px;
          line-height: 1.55;
          padding: 10px 0 10px 26px;
          position: relative;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          color: var(--c-ink-soft, #3a3d5e);
        }

        .s6-list li:last-child { border-bottom: none; }

        .s6-list li::before {
          position: absolute;
          left: 0;
          top: 10px;
          font-weight: 700;
          font-size: 14px;
        }

        .s6-col--without .s6-list li::before {
          content: '\u2717';
          color: var(--c-coral-dark, #c73e3a);
        }

        .s6-col--with .s6-list li::before {
          content: '\u2713';
          color: var(--c-primary-dark, #3b2fbf);
        }
      `}</style>

      <div className="s6-root">
        <section className="s6-section">
          <div className="s6-container">
            <header className="s6-header">
              <span className="s6-eyebrow">{eyebrow}</span>
              <h2 className="s6-h2">
                {heading}<span>{headingHighlight}</span>.
              </h2>
              <p className="s6-desc">{sectionDesc}</p>
            </header>

            <div className="s6-cols">
              <div className="s6-col s6-col--without">
                <div className="s6-col__label">{withoutLabel}</div>
                <h3 className="s6-col__heading">{withoutHeading}</h3>
                <ul className="s6-list">
                  {withoutItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="s6-col s6-col--with">
                <div className="s6-col__label">{withLabel}</div>
                <h3 className="s6-col__heading">{withHeading}</h3>
                <ul className="s6-list">
                  {withItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section06_WithoutWith, {
  eyebrow:          { type: ControlType.String, title: "Eyebrow",         defaultValue: "PILOT TO PRODUCTION" },
  heading:          { type: ControlType.String, title: "H2 Text",         defaultValue: "Without LLM Capsule. With " },
  headingHighlight: { type: ControlType.String, title: "H2 Highlight",    defaultValue: "LLM Capsule" },
  sectionDesc:      { type: ControlType.String, title: "Description",     defaultValue: "What changes when the data layer can finally handle the work." },
  withoutLabel:     { type: ControlType.String, title: "Without Label",   defaultValue: "WITHOUT LLM CAPSULE" },
  withoutHeading:   { type: ControlType.String, title: "Without Heading", defaultValue: "Enterprise AI projects stall at pilot" },
  withoutItem1:     { type: ControlType.String, title: "Without Item 1",  defaultValue: "Manual review workflows persist — humans process documents AI can't be trusted with" },
  withoutItem2:     { type: ControlType.String, title: "Without Item 2",  defaultValue: "Document structure destroyed — flat masking breaks tables and cross-references" },
  withoutItem3:     { type: ControlType.String, title: "Without Item 3",  defaultValue: "Low-quality AI output — even when AI is permitted, results need extensive manual reconstruction" },
  withoutItem4:     { type: ControlType.String, title: "Without Item 4",  defaultValue: "Security teams block AI adoption — projects never demonstrate value before being cancelled" },
  withoutItem5:     { type: ControlType.String, title: "Without Item 5",  defaultValue: "Shadow AI emerges — employees route around the controls because the controls block real work" },
  withoutItem6:     { type: ControlType.String, title: "Without Item 6",  defaultValue: "Regulated workflows excluded — telecom, healthcare, defense, finance left out of the AI gains" },
  withLabel:        { type: ControlType.String, title: "With Label",      defaultValue: "WITH LLM CAPSULE" },
  withHeading:      { type: ControlType.String, title: "With Heading",    defaultValue: "Enterprise AI ships on real data" },
  withItem1:        { type: ControlType.String, title: "With Item 1",     defaultValue: "AI runs on sensitive documents — the data layer handles protection, teams focus on outcomes" },
  withItem2:        { type: ControlType.String, title: "With Item 2",     defaultValue: "Real documents processed with any LLM — ChatGPT, Claude, Gemini, Perplexity, or on-prem local" },
  withItem3:        { type: ControlType.String, title: "With Item 3",     defaultValue: "Compliance satisfied — zero raw exposure architecture meets GDPR, HIPAA, SOX governance" },
  withItem4:        { type: ControlType.String, title: "With Item 4",     defaultValue: "Restored outputs retain business context — real names, real figures, real references" },
  withItem5:        { type: ControlType.String, title: "With Item 5",     defaultValue: "Tables, layouts, cross-references preserved through structure-preserving encapsulation" },
  withItem6:        { type: ControlType.String, title: "With Item 6",     defaultValue: "Regulated industries adopt AI on production data — pilots become production" },
})
