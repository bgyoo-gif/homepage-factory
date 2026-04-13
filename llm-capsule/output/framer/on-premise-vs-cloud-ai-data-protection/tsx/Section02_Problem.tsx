import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral150:     "#e6e7e9",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  paragraph1?: string
  paragraph2?: string
  lang?: "en" | "ko"
}

const LABELS: Record<"en" | "ko", {
  sectionLabel: string
  paragraph1: string
  paragraph2: string
}> = {
  en: {
    sectionLabel: "Problem",
    paragraph1: "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
    paragraph2: "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",
  },
  ko: {
    sectionLabel: "문제",
    paragraph1: "기업은 다양한 인프라 환경에서 운영됩니다. 국방 및 정보기관은 에어갭 배포를 요구합니다. 금융 기관은 온프레미스 데이터 처리를 의무화할 수 있습니다. 클라우드 네이티브 조직은 SaaS 기반 솔루션을 원합니다. 많은 기업이 서로 다른 데이터 유형에 다른 배포 모델이 필요한 하이브리드 환경에서 운영합니다.",
    paragraph2: "AI 데이터 보호는 인프라 변경을 강요하지 않고 기업의 인프라 요구사항에 적응해야 합니다.",
  },
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section02_Problem({
  sectionLabel,
  paragraph1,
  paragraph2,
  lang = "en",
}: Props) {
  const L = LABELS[lang]
  const t = {
    sectionLabel: sectionLabel ?? L.sectionLabel,
    paragraph1: paragraph1 ?? L.paragraph1,
    paragraph2: paragraph2 ?? L.paragraph2,
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s2-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }
        .s2-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s2 (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container s2 (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container s2 (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        .s2-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${C.neutral150};
          text-align: center;
        }
        .s2-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        @container s2 (min-width: 768px)  { .s2-header h2 { font-size: 22px; } }
        @container s2 (min-width: 1024px) { .s2-header h2 { font-size: 24px; } }
        @container s2 (min-width: 1440px) { .s2-header h2 { font-size: 28px; } }
        @container s2 (max-width: 767px)  { .s2-header { text-align: left; } }

        .s2-brand { color: ${C.brandSecondary}; }

        .s2-paragraph {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${C.textSecondary};
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s2-paragraph:last-child { margin-bottom: 0; }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2><span className="s2-brand">{t.sectionLabel}</span></h2>
            </div>
            <p className="s2-paragraph">{t.paragraph1}</p>
            <p className="s2-paragraph">{t.paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_Problem, {
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Problem",
  },
  paragraph1: {
    type: ControlType.String,
    title: "Paragraph 1",
    defaultValue: "Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.",
    displayTextArea: true,
  },
  paragraph2: {
    type: ControlType.String,
    title: "Paragraph 2",
    defaultValue: "AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.",
    displayTextArea: true,
  },
})
