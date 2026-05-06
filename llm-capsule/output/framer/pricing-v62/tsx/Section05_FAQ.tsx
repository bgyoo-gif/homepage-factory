import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// Section 05 — FAQ Accordion
// CMS Collection: FAQs (page: pricing)
// Props: sectionEyebrow, sectionTitle + 6 × question/answer

interface Props {
  sectionEyebrow?: string
  sectionTitle?:   string

  question1?: string
  answer1?:   string

  question2?: string
  answer2?:   string

  question3?: string
  answer3?:   string

  question4?: string
  answer4?:   string

  question5?: string
  answer5?:   string

  question6?: string
  answer6?:   string
}

export default function Section05_FAQ({
  sectionEyebrow = "Pricing FAQ",
  sectionTitle   = "Common questions",

  question1 = "How is pricing calculated?",
  answer1   = "Volume-based on monthly document processing throughput, with adjustments for deployment mode (air-gapped on-prem typically has different cost structure than cloud), regulatory profile (additional compliance audit hours), and connector library scope. Workflow Proof of Value is a fixed-fee, one-workflow evaluation; Enterprise is annual license; AWS Marketplace is listed pay-as-you-go with EDP / private offer eligibility for committed volume.",

  question2 = "Can we start with a Workflow Proof of Value and convert to Enterprise?",
  answer2   = "Yes. Workflow Proof of Value is designed as a 4-8 week evaluation on one real production workflow that produces a deployment fit report. PoV contracts include a conversion path to Enterprise with credit applied; most customers convert in 6-12 weeks after PoV kickoff.",

  question3 = "Do you support custom on-prem deployments?",
  answer3   = "Yes. Air-gapped on-prem and on-prem hybrid (Capsule on-prem + approved external LLM) are first-class deployment modes. Telecom-grade and OT-grade environments are supported. Validated at SK Telecom (telecom NOC), EUMC (hospital), and Ministry of National Defense (mission workflows).",

  question4 = "What about EU sovereign data and GDPR?",
  answer4   = "Path A supports in-region EU LLM endpoints (EU-hosted Anthropic, OpenAI EU, Mistral EU). Path B supports fully on-prem inside the EU. Both paths feed audit logs that align with GDPR Articles 5, 17, 30, 32. Standard DPA + SCC are provided as part of Enterprise contract. Recognized at Deutsche Telekom T Challenge 2026 — Top 12 in Data Security & Governance.",

  question5 = "Where can LLM Capsule be deployed?",
  answer5   = "Six deployment modes: on-premise, air-gapped, hybrid, VPC / private cloud, AWS Marketplace, embedded SDK, and Slack App. Telecom-grade (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure. See the Architecture page for details.",

  question6 = "What certifications does LLM Capsule hold?",
  answer6   = "ISO/IEC 27001, ISO/IEC 42001, KISA Fast Track, GS Certification, plus awards and recognition from MSIT Security Innovation, Deutsche Telekom T Challenge, AI Medical Innovation, Startup World Cup, Next Rise, Gartner, and Emerging AI+X. See the Trust Center for full list.",
}: Props) {
  const [openIdx, setOpenIdx] = useState<number>(-1)

  const items = [
    { question: question1, answer: answer1 },
    { question: question2, answer: answer2 },
    { question: question3, answer: answer3 },
    { question: question4, answer: answer4 },
    { question: question5, answer: answer5 },
    { question: question6, answer: answer6 },
  ].filter(item => item.question && item.answer)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s5-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s5-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s5-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s5-h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .s5-faq-wrap {
          max-width: 880px;
          margin: 0 auto;
        }

        .s5-faq-item {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s5-faq-item:first-child {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .s5-faq-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
          cursor: pointer;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
        }

        .s5-question {
          font-size: 17px;
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          line-height: 1.3;
          word-break: keep-all;
          overflow-wrap: break-word;
          flex: 1;
        }

        .s5-toggle {
          width: 28px;
          height: 28px;
          border-radius: var(--r-sm, 6px);
          border: 0.5px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg, #ffffff);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 20px;
          color: var(--c-muted, #6b7280);
          line-height: 1;
          transition: transform 0.2s;
        }

        .s5-toggle--open {
          transform: rotate(45deg);
        }

        .s5-answer-wrap {
          border-top: 1px solid var(--c-rule, #e5e7eb);
          background-color: var(--c-bg-soft, #f7f8fb);
          padding: 16px 0 20px;
        }

        .s5-answer {
          font-size: 15px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section" id="section-5">
          <div className="s5-container">
            <div className="s5-header">
              <span className="s5-eyebrow">{sectionEyebrow}</span>
              <h2 className="s5-h2">{sectionTitle}</h2>
            </div>

            <div className="s5-faq-wrap">
              {items.map((item, i) => (
                <div key={i} className="s5-faq-item">
                  <button
                    className="s5-faq-btn"
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    aria-expanded={openIdx === i}
                  >
                    <span className="s5-question">{item.question}</span>
                    <span className={`s5-toggle${openIdx === i ? " s5-toggle--open" : ""}`} aria-hidden="true">+</span>
                  </button>
                  {openIdx === i && (
                    <div className="s5-answer-wrap">
                      <p className="s5-answer">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_FAQ, {
  sectionEyebrow: { type: ControlType.String, title: "Eyebrow",    defaultValue: "Pricing FAQ" },
  sectionTitle:   { type: ControlType.String, title: "Title",      defaultValue: "Common questions" },

  question1: { type: ControlType.String, title: "Q1", defaultValue: "How is pricing calculated?" },
  answer1:   { type: ControlType.String, title: "A1", defaultValue: "Volume-based on monthly document processing throughput, with adjustments for deployment mode (air-gapped on-prem typically has different cost structure than cloud), regulatory profile (additional compliance audit hours), and connector library scope. Workflow Proof of Value is a fixed-fee, one-workflow evaluation; Enterprise is annual license; AWS Marketplace is listed pay-as-you-go with EDP / private offer eligibility for committed volume.", displayTextArea: true },

  question2: { type: ControlType.String, title: "Q2", defaultValue: "Can we start with a Workflow Proof of Value and convert to Enterprise?" },
  answer2:   { type: ControlType.String, title: "A2", defaultValue: "Yes. Workflow Proof of Value is designed as a 4-8 week evaluation on one real production workflow that produces a deployment fit report. PoV contracts include a conversion path to Enterprise with credit applied; most customers convert in 6-12 weeks after PoV kickoff.", displayTextArea: true },

  question3: { type: ControlType.String, title: "Q3", defaultValue: "Do you support custom on-prem deployments?" },
  answer3:   { type: ControlType.String, title: "A3", defaultValue: "Yes. Air-gapped on-prem and on-prem hybrid (Capsule on-prem + approved external LLM) are first-class deployment modes. Telecom-grade and OT-grade environments are supported. Validated at SK Telecom (telecom NOC), EUMC (hospital), and Ministry of National Defense (mission workflows).", displayTextArea: true },

  question4: { type: ControlType.String, title: "Q4", defaultValue: "What about EU sovereign data and GDPR?" },
  answer4:   { type: ControlType.String, title: "A4", defaultValue: "Path A supports in-region EU LLM endpoints (EU-hosted Anthropic, OpenAI EU, Mistral EU). Path B supports fully on-prem inside the EU. Both paths feed audit logs that align with GDPR Articles 5, 17, 30, 32. Standard DPA + SCC are provided as part of Enterprise contract. Recognized at Deutsche Telekom T Challenge 2026 — Top 12 in Data Security & Governance.", displayTextArea: true },

  question5: { type: ControlType.String, title: "Q5", defaultValue: "Where can LLM Capsule be deployed?" },
  answer5:   { type: ControlType.String, title: "A5", defaultValue: "Six deployment modes: on-premise, air-gapped, hybrid, VPC / private cloud, AWS Marketplace, embedded SDK, and Slack App. Telecom-grade (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure. See the Architecture page for details.", displayTextArea: true },

  question6: { type: ControlType.String, title: "Q6", defaultValue: "What certifications does LLM Capsule hold?" },
  answer6:   { type: ControlType.String, title: "A6", defaultValue: "ISO/IEC 27001, ISO/IEC 42001, KISA Fast Track, GS Certification, plus awards and recognition from MSIT Security Innovation, Deutsche Telekom T Challenge, AI Medical Innovation, Startup World Cup, Next Rise, Gartner, and Emerging AI+X. See the Trust Center for full list.", displayTextArea: true },
})
