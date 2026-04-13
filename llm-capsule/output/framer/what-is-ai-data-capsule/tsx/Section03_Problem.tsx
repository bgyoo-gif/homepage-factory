import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  surfaceWhite:   "#ffffff",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
}

interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
  lang?: "en" | "ko"
}

const COPY = {
  en: {
    sectionLabel: "Problem",
    paragraph1: "Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.",
    paragraph2: "The result is a binary choice: expose data to use AI, or protect data and get unusable results.",
  },
  ko: {
    sectionLabel: "문제",
    paragraph1: "기업은 요약, 추출, 번역, 분석을 위해 민감한 문서를 대규모 언어 모델로 처리해야 합니다. 원시 데이터를 외부 AI 서비스에 전송하면 허용할 수 없는 노출이 발생합니다. 기존 방식 — 마스킹, 편집, 토큰화 — 은 AI 모델이 유용한 출력을 생성하는 데 필요한 컨텍스트를 파괴합니다.",
    paragraph2: "결과는 이분법적 선택입니다: AI를 사용하기 위해 데이터를 노출하거나, 데이터를 보호하고 사용 불가능한 결과를 얻거나.",
  },
}

export default function Section03_Problem({
  sectionLabel,
  paragraph1,
  paragraph2,
  lang = "en",
}: Props) {
  const copy = COPY[lang]
  const displayLabel = sectionLabel ?? copy.sectionLabel
  const displayP1 = paragraph1 ?? copy.paragraph1
  const displayP2 = paragraph2 ?? copy.paragraph2

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0 48px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }
        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${PALETTE.textPrimary};
          text-wrap: balance;
        }
        .s3-label-brand {
          color: ${PALETTE.brandSecondary};
        }
        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-paragraph:last-child { margin-bottom: 0; }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0; }
          .s3-section-header h2 { font-size: 28px; }
          .s3-section-header { text-align: center; }
        }
      `}</style>
      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2><span className="s3-label-brand">{displayLabel}</span></h2>
            </div>
            <p className="s3-paragraph">{displayP1}</p>
            <p className="s3-paragraph">{displayP2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Problem, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Problem",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "The result is a binary choice: expose data to use AI, or protect data and get unusable results.",
    displayTextArea: true,
  },
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
})
