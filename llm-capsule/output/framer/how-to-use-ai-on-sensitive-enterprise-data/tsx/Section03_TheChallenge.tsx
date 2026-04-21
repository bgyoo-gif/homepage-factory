import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  white:          "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  heading_pre_en?: string
  heading_pre_ko?: string
  heading_highlight_en?: string
  heading_highlight_ko?: string
  para1_en?: string
  para1_ko?: string
  para2_en?: string
  para2_ko?: string
}

export default function Section03_TheChallenge({
  locale = "en",
  heading_pre_en = "The",
  heading_pre_ko = "도전",
  heading_highlight_en = "Challenge",
  heading_highlight_ko = "과제",
  para1_en = "Enterprises generate massive volumes of sensitive documents — contracts, financial reports, medical records, legal filings, HR communications, and internal strategy memos. These documents contain exactly the information that AI could transform: extracting key clauses, summarizing quarterly results, classifying patient records, or translating technical specifications.",
  para1_ko = "기업들은 계약서, 재무 보고서, 의료 기록, 법적 서류, HR 커뮤니케이션, 내부 전략 메모 등 방대한 양의 민감한 문서를 생성합니다. 이러한 문서들은 AI가 변환할 수 있는 정보를 정확히 담고 있습니다: 핵심 조항 추출, 분기 실적 요약, 환자 기록 분류, 또는 기술 사양 번역.",
  para2_en = "But sending this data to external AI services means exposing it. Every prompt, every document, every query transmitted to an LLM API becomes visible to the AI provider's infrastructure. For regulated industries and security-conscious organizations, this creates a fundamental conflict: the data that benefits most from AI is the data that cannot be exposed.",
  para2_ko = "하지만 이 데이터를 외부 AI 서비스에 전송하면 노출됩니다. LLM API에 전송되는 모든 프롬프트, 모든 문서, 모든 쿼리가 AI 제공업체의 인프라에 노출됩니다. 규제 산업과 보안을 중시하는 조직들에게 이는 근본적인 갈등을 만듭니다: AI로부터 가장 많은 혜택을 받을 수 있는 데이터가 바로 노출될 수 없는 데이터입니다.",
}: Props) {
  const t = locale === "ko"
    ? {
        headingPre: heading_pre_ko,
        headingHighlight: heading_highlight_ko,
        para1: para1_ko,
        para2: para2_ko,
      }
    : {
        headingPre: heading_pre_en,
        headingHighlight: heading_highlight_en,
        para1: para1_en,
        para2: para2_en,
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
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

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }
        

        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s3-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: balance;
        }
        .s3-highlight {
          color: ${P.brandSecondary};
        }
        .s3-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-paragraph:last-child { margin-bottom: 0; }

        @container (max-width: 767px) {
          .s3-section-header { text-align: left; }
        }
        @container (min-width: 768px) {
          .s3-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s3-section-header h2 { font-size: 28px; }
          .s3-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {t.headingPre} <span className="s3-highlight">{t.headingHighlight}</span>
              </h2>
            </div>
            <p className="s3-paragraph">{t.para1}</p>
            <p className="s3-paragraph">{t.para2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_TheChallenge, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  heading_pre_en: {
    type: ControlType.String,
    title: "Heading Pre (EN)",
    defaultValue: "The",
  },
  heading_pre_ko: {
    type: ControlType.String,
    title: "Heading Pre (KO)",
    defaultValue: "도전",
  },
  heading_highlight_en: {
    type: ControlType.String,
    title: "Heading Highlight (EN)",
    defaultValue: "Challenge",
  },
  heading_highlight_ko: {
    type: ControlType.String,
    title: "Heading Highlight (KO)",
    defaultValue: "과제",
  },
  para1_en: {
    type: ControlType.String,
    title: "Paragraph 1 (EN)",
    defaultValue: "Enterprises generate massive volumes of sensitive documents...",
    displayTextArea: true,
  },
  para1_ko: {
    type: ControlType.String,
    title: "Paragraph 1 (KO)",
    defaultValue: "기업들은 계약서, 재무 보고서...",
    displayTextArea: true,
  },
  para2_en: {
    type: ControlType.String,
    title: "Paragraph 2 (EN)",
    defaultValue: "But sending this data to external AI services means exposing it...",
    displayTextArea: true,
  },
  para2_ko: {
    type: ControlType.String,
    title: "Paragraph 2 (KO)",
    defaultValue: "하지만 이 데이터를 외부 AI 서비스에 전송하면 노출됩니다...",
    displayTextArea: true,
  },
})
