import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800:     "#171719",
  neutral050:     "#f2f2f2",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  title_en?: string
  title_ko?: string
  description_en?: string
  description_ko?: string
  locale?: "en" | "ko"
  breadcrumb_home_en?: string
  breadcrumb_home_ko?: string
  breadcrumb_resources_en?: string
  breadcrumb_resources_ko?: string
  breadcrumb_learn_en?: string
  breadcrumb_learn_ko?: string
}

export default function Section01_Hero({
  title_en = "How to Use AI on Sensitive Enterprise Data",
  title_ko = "민감한 기업 데이터에서 AI를 활용하는 방법",
  description_en = "Learn how to use large language models on sensitive enterprise data without exposing original documents. Encapsulate locally, process safely, restore usable outputs.",
  description_ko = "원본 문서를 노출하지 않고 민감한 기업 데이터에 대규모 언어 모델을 활용하는 방법을 알아보세요. 로컬에서 캡슐화하고, 안전하게 처리하고, 사용 가능한 출력을 복원하세요.",
  locale = "en",
  breadcrumb_home_en = "Home",
  breadcrumb_home_ko = "홈",
  breadcrumb_resources_en = "Resources",
  breadcrumb_resources_ko = "리소스",
  breadcrumb_learn_en = "Learn",
  breadcrumb_learn_ko = "학습",
}: Props) {
  const t = locale === "ko"
    ? {
        title: title_ko,
        description: description_ko,
        home: breadcrumb_home_ko,
        resources: breadcrumb_resources_ko,
        learn: breadcrumb_learn_ko,
      }
    : {
        title: title_en,
        description: description_en,
        home: breadcrumb_home_en,
        resources: breadcrumb_resources_en,
        learn: breadcrumb_learn_en,
      }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
      { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
      { "@type": "ListItem", position: 4, name: "How to Use AI on Sensitive Enterprise Data", item: "https://llmcapsule.ai/resources/learn/how-to-use-ai-on-sensitive-enterprise-data" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${P.white};
          box-sizing: border-box;
          overflow: hidden;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }
        

        .s1-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s1-breadcrumb__link {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${P.brandSecondary};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
          cursor: pointer;
        }
        .s1-breadcrumb__link:hover { color: ${P.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #9c9c9c;
        }
        .s1-breadcrumb__current {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #9c9c9c;
        }

        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: balance;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${P.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-title { font-size: 52px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="breadcrumb">
              <a href="https://llmcapsule.ai/" className="s1-breadcrumb__link">{t.home}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources" className="s1-breadcrumb__link">{t.resources}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources/learn" className="s1-breadcrumb__link">{t.learn}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">{t.title}</span>
            </nav>
            <h1 className="s1-title" style={{ wordBreak: "keep-all" }}>{t.title}</h1>
            <p className="s1-description">{t.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  title_en: {
    type: ControlType.String,
    title: "Title (EN)",
    defaultValue: "How to Use AI on Sensitive Enterprise Data",
    displayTextArea: false,
  },
  title_ko: {
    type: ControlType.String,
    title: "Title (KO)",
    defaultValue: "민감한 기업 데이터에서 AI를 활용하는 방법",
    displayTextArea: false,
  },
  description_en: {
    type: ControlType.String,
    title: "Description (EN)",
    defaultValue: "Learn how to use large language models on sensitive enterprise data without exposing original documents. Encapsulate locally, process safely, restore usable outputs.",
    displayTextArea: true,
  },
  description_ko: {
    type: ControlType.String,
    title: "Description (KO)",
    defaultValue: "원본 문서를 노출하지 않고 민감한 기업 데이터에 대규모 언어 모델을 활용하는 방법을 알아보세요.",
    displayTextArea: true,
  },
  breadcrumb_home_en: {
    type: ControlType.String,
    title: "Breadcrumb Home (EN)",
    defaultValue: "Home",
  },
  breadcrumb_home_ko: {
    type: ControlType.String,
    title: "Breadcrumb Home (KO)",
    defaultValue: "홈",
  },
  breadcrumb_resources_en: {
    type: ControlType.String,
    title: "Breadcrumb Resources (EN)",
    defaultValue: "Resources",
  },
  breadcrumb_resources_ko: {
    type: ControlType.String,
    title: "Breadcrumb Resources (KO)",
    defaultValue: "리소스",
  },
  breadcrumb_learn_en: {
    type: ControlType.String,
    title: "Breadcrumb Learn (EN)",
    defaultValue: "Learn",
  },
  breadcrumb_learn_ko: {
    type: ControlType.String,
    title: "Breadcrumb Learn (KO)",
    defaultValue: "학습",
  },
})
