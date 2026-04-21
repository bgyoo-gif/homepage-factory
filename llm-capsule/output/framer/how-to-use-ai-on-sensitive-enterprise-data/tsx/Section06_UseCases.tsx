import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
  white:          "#ffffff",
}

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const IconFinancial = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
  </svg>
)

const IconHealthcare = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
  </svg>
)

const IconDefense = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const IconTelecom = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16"/>
    <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8"/>
    <path d="M4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8"/>
  </svg>
)

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  heading_en?: string
  heading_ko?: string
  heading_highlight_en?: string
  heading_highlight_ko?: string
  card1_title_en?: string
  card1_title_ko?: string
  card1_desc_en?: string
  card1_desc_ko?: string
  card2_title_en?: string
  card2_title_ko?: string
  card2_desc_en?: string
  card2_desc_ko?: string
  card3_title_en?: string
  card3_title_ko?: string
  card3_desc_en?: string
  card3_desc_ko?: string
  card4_title_en?: string
  card4_title_ko?: string
  card4_desc_en?: string
  card4_desc_ko?: string
}

export default function Section06_UseCases({
  locale = "en",
  heading_en = "Enterprise",
  heading_ko = "기업",
  heading_highlight_en = "Use Cases",
  heading_highlight_ko = "활용 사례",
  card1_title_en = "Financial Services",
  card1_title_ko = "금융 서비스",
  card1_desc_en = "Banks and insurance companies process loan applications, claims documents, and regulatory filings through AI — with all customer PII, account numbers, and financial figures encapsulated before transmission.",
  card1_desc_ko = "은행과 보험사들은 대출 신청서, 청구 문서, 규제 서류를 AI를 통해 처리합니다 — 모든 고객 PII, 계좌 번호, 재무 수치를 전송 전에 캡슐화합니다.",
  card2_title_en = "Healthcare & Legal",
  card2_title_ko = "의료 및 법률",
  card2_desc_en = "Hospitals and law firms use AI for medical record summarization, contract analysis, and case research — with patient identifiers, client names, and privileged information protected throughout.",
  card2_desc_ko = "병원과 법무법인들은 의료 기록 요약, 계약서 분석, 사례 연구에 AI를 사용합니다 — 환자 식별자, 고객 이름, 기밀 정보를 전반적으로 보호합니다.",
  card3_title_en = "Defense & Public Sector",
  card3_title_ko = "국방 및 공공 부문",
  card3_desc_en = "Government agencies and defense organizations draft confidential documents using AI — with classified terms, operation names, and tactical data encapsulated in air-gapped environments.",
  card3_desc_ko = "정부 기관과 국방 조직들은 AI를 사용하여 기밀 문서를 작성합니다 — 비밀 용어, 작전명, 전술 데이터를 에어갭 환경에서 캡슐화합니다.",
  card4_title_en = "Telecom & Security",
  card4_title_ko = "통신 및 보안",
  card4_desc_en = "Infrastructure companies analyze vulnerability logs and network data with AI — with sensitive IP addresses, topology details, and security findings protected from external exposure.",
  card4_desc_ko = "인프라 기업들은 AI로 취약점 로그와 네트워크 데이터를 분석합니다 — 민감한 IP 주소, 토폴로지 세부 정보, 보안 발견사항을 외부 노출로부터 보호합니다.",
}: Props) {
  const t = locale === "ko"
    ? {
        heading: heading_ko,
        highlight: heading_highlight_ko,
        cards: [
          { title: card1_title_ko, desc: card1_desc_ko, Icon: IconFinancial },
          { title: card2_title_ko, desc: card2_desc_ko, Icon: IconHealthcare },
          { title: card3_title_ko, desc: card3_desc_ko, Icon: IconDefense },
          { title: card4_title_ko, desc: card4_desc_ko, Icon: IconTelecom },
        ],
      }
    : {
        heading: heading_en,
        highlight: heading_highlight_en,
        cards: [
          { title: card1_title_en, desc: card1_desc_en, Icon: IconFinancial },
          { title: card2_title_en, desc: card2_desc_en, Icon: IconHealthcare },
          { title: card3_title_en, desc: card3_desc_en, Icon: IconDefense },
          { title: card4_title_en, desc: card4_desc_en, Icon: IconTelecom },
        ],
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
          overflow: hidden;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-section { padding: 60px 0; }
        }

        .s6-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${P.borderDefault};
          text-align: center;
        }
        .s6-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s6-highlight { color: ${P.brandSecondary}; }

        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s6-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s6-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: ${P.shadowCard};
          display: flex;
          flex-direction: column;
        }
        @container (min-width: 1440px) {
          .s6-card { padding: 32px; }
        }

        .s6-card-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .s6-card-icon {
          color: ${P.brandSecondary};
          flex-shrink: 0;
        }
        .s6-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${P.textPrimary};
          line-height: 1.2;
        }
        .s6-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (max-width: 767px) {
          .s6-header { text-align: left; }
        }
        @container (min-width: 768px) {
          .s6-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s6-header h2 { font-size: 28px; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-header">
              <h2 style={{ wordBreak: "keep-all" }}>
                {t.heading} <span className="s6-highlight">{t.highlight}</span>
              </h2>
            </div>
            <div className="s6-grid">
              {t.cards.map((card, i) => (
                <div key={i} className="s6-card">
                  <div className="s6-card-title-row">
                    <span className="s6-card-icon">
                      <card.Icon />
                    </span>
                    <span className="s6-card-title">{card.title}</span>
                  </div>
                  <p className="s6-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_UseCases, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  heading_en: { type: ControlType.String, title: "Heading (EN)", defaultValue: "Enterprise" },
  heading_ko: { type: ControlType.String, title: "Heading (KO)", defaultValue: "기업" },
  heading_highlight_en: { type: ControlType.String, title: "Highlight (EN)", defaultValue: "Use Cases" },
  heading_highlight_ko: { type: ControlType.String, title: "Highlight (KO)", defaultValue: "활용 사례" },
  card1_title_en: { type: ControlType.String, title: "Card 1 Title (EN)", defaultValue: "Financial Services" },
  card1_title_ko: { type: ControlType.String, title: "Card 1 Title (KO)", defaultValue: "금융 서비스" },
  card1_desc_en: { type: ControlType.String, title: "Card 1 Desc (EN)", defaultValue: "Banks and insurance companies process loan applications...", displayTextArea: true },
  card1_desc_ko: { type: ControlType.String, title: "Card 1 Desc (KO)", defaultValue: "은행과 보험사들은 대출 신청서...", displayTextArea: true },
  card2_title_en: { type: ControlType.String, title: "Card 2 Title (EN)", defaultValue: "Healthcare & Legal" },
  card2_title_ko: { type: ControlType.String, title: "Card 2 Title (KO)", defaultValue: "의료 및 법률" },
  card2_desc_en: { type: ControlType.String, title: "Card 2 Desc (EN)", defaultValue: "Hospitals and law firms use AI for medical record summarization...", displayTextArea: true },
  card2_desc_ko: { type: ControlType.String, title: "Card 2 Desc (KO)", defaultValue: "병원과 법무법인들은...", displayTextArea: true },
  card3_title_en: { type: ControlType.String, title: "Card 3 Title (EN)", defaultValue: "Defense & Public Sector" },
  card3_title_ko: { type: ControlType.String, title: "Card 3 Title (KO)", defaultValue: "국방 및 공공 부문" },
  card3_desc_en: { type: ControlType.String, title: "Card 3 Desc (EN)", defaultValue: "Government agencies and defense organizations...", displayTextArea: true },
  card3_desc_ko: { type: ControlType.String, title: "Card 3 Desc (KO)", defaultValue: "정부 기관과 국방 조직들은...", displayTextArea: true },
  card4_title_en: { type: ControlType.String, title: "Card 4 Title (EN)", defaultValue: "Telecom & Security" },
  card4_title_ko: { type: ControlType.String, title: "Card 4 Title (KO)", defaultValue: "통신 및 보안" },
  card4_desc_en: { type: ControlType.String, title: "Card 4 Desc (EN)", defaultValue: "Infrastructure companies analyze vulnerability logs...", displayTextArea: true },
  card4_desc_ko: { type: ControlType.String, title: "Card 4 Desc (KO)", defaultValue: "인프라 기업들은...", displayTextArea: true },
})
