import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// Reusable FAQ Accordion — CMS Collection: FAQs
// Props match CMS fields: question, answer
// Place on any page: home, pricing, learn articles

interface Props {
  question1?: string; answer1?: string
  question2?: string; answer2?: string
  question3?: string; answer3?: string
  question4?: string; answer4?: string
  question5?: string; answer5?: string
  question6?: string; answer6?: string
  question7?: string; answer7?: string
  question8?: string; answer8?: string
}

export default function FAQAccordion({
  question1 = "", answer1 = "",
  question2 = "", answer2 = "",
  question3 = "", answer3 = "",
  question4 = "", answer4 = "",
  question5 = "", answer5 = "",
  question6 = "", answer6 = "",
  question7 = "", answer7 = "",
  question8 = "", answer8 = "",
}: Props) {
  const [openIdx, setOpenIdx] = useState<number>(0)

  const items = [
    { question: question1, answer: answer1 },
    { question: question2, answer: answer2 },
    { question: question3, answer: answer3 },
    { question: question4, answer: answer4 },
    { question: question5, answer: answer5 },
    { question: question6, answer: answer6 },
    { question: question7, answer: answer7 },
    { question: question8, answer: answer8 },
  ].filter(item => item.question && item.answer)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .faq-root { width: 100%; container-type: inline-size; font-family: var(--f-display, 'Inter'), sans-serif; }
        .faq-list { display: flex; flex-direction: column; gap: 2px; }
        .faq-item {
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          background: var(--c-bg, #fff);
          overflow: hidden;
        }
        .faq-header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 20px 24px; cursor: pointer; user-select: none;
          width: 100%; background: none; border: none; text-align: left;
          font-family: inherit;
        }
        .faq-question {
          font-size: 17px; font-weight: 600; line-height: 1.3;
          color: var(--c-ink, #0f1130);
          word-break: keep-all; overflow-wrap: break-word;
        }
        .faq-toggle {
          width: 28px; height: 28px; border-radius: var(--r-sm, 6px);
          border: 0.5px solid var(--c-rule, #e5e7eb);
          background: var(--c-bg-soft, #f7f8fb);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 18px; color: var(--c-muted, #6b7280); line-height: 1;
        }
        .faq-body {
          padding: 0 24px 20px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          background: var(--c-bg-soft, #f7f8fb);
        }
        .faq-answer {
          font-size: 15px; color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65; padding-top: 16px;
          word-break: keep-all; overflow-wrap: break-word;
        }
      `}</style>

      <div className="faq-root">
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-header"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
              >
                <span className="faq-question">{item.question}</span>
                <span className="faq-toggle">{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && (
                <div className="faq-body">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

addPropertyControls(FAQAccordion, {
  question1: { type: ControlType.String, title: "Q1" },
  answer1:   { type: ControlType.String, title: "A1", displayTextArea: true },
  question2: { type: ControlType.String, title: "Q2" },
  answer2:   { type: ControlType.String, title: "A2", displayTextArea: true },
  question3: { type: ControlType.String, title: "Q3" },
  answer3:   { type: ControlType.String, title: "A3", displayTextArea: true },
  question4: { type: ControlType.String, title: "Q4" },
  answer4:   { type: ControlType.String, title: "A4", displayTextArea: true },
  question5: { type: ControlType.String, title: "Q5" },
  answer5:   { type: ControlType.String, title: "A5", displayTextArea: true },
  question6: { type: ControlType.String, title: "Q6" },
  answer6:   { type: ControlType.String, title: "A6", displayTextArea: true },
  question7: { type: ControlType.String, title: "Q7" },
  answer7:   { type: ControlType.String, title: "A7", displayTextArea: true },
  question8: { type: ControlType.String, title: "Q8" },
  answer8:   { type: ControlType.String, title: "A8", displayTextArea: true },
})
