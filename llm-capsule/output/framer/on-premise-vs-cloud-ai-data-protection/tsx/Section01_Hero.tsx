import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900:     "#0f0f0f",
  neutral800:     "#171719",
  neutral700:     "#303135",
  neutral500:     "#636363",
  neutral400:     "#9c9c9c",
  neutral350:     "#adadad",
  neutral200:     "#e0e0e0",
  neutral150:     "#e6e7e9",
  neutral100:     "#ececec",
  neutral050:     "#f2f2f2",
  neutral025:     "#f7f7f7",
  white:          "#ffffff",
  black:          "#000000",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  description?: string
  breadcrumbHome?: string
  breadcrumbLearn?: string
  breadcrumbCurrent?: string
  lang?: "en" | "ko"
}

const LABELS: Record<"en" | "ko", {
  breadcrumbHome: string
  breadcrumbLearn: string
  breadcrumbCurrent: string
  title: string
  description: string
}> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbLearn: "Learn",
    breadcrumbCurrent: "On-Premise vs Cloud AI Data Protection",
    title: "On-Premise vs Cloud AI Data Protection",
    description: "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",
  },
  ko: {
    breadcrumbHome: "홈",
    breadcrumbLearn: "학습",
    breadcrumbCurrent: "온프레미스 vs 클라우드 AI 데이터 보호",
    title: "온프레미스 vs 클라우드 AI 데이터 보호",
    description: "온프레미스, 에어갭, 클라우드, 하이브리드, 임베디드 등 엔터프라이즈 AI 데이터 보호 배포 모델 비교.",
  },
}

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", "position": 4, "name": "On-Premise vs Cloud AI Data Protection", "item": "https://llmcapsule.ai/resources/learn/on-premise-vs-cloud-ai-data-protection" },
  ],
})

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section01_Hero({
  title,
  description,
  breadcrumbHome,
  breadcrumbLearn,
  breadcrumbCurrent,
  lang = "en",
}: Props) {
  const L = LABELS[lang]
  const t = {
    home: breadcrumbHome ?? L.breadcrumbHome,
    learn: breadcrumbLearn ?? L.breadcrumbLearn,
    current: breadcrumbCurrent ?? L.breadcrumbCurrent,
    title: title ?? L.title,
    description: description ?? L.description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s1;
        }
        .s1-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s1 (min-width: 768px)  { .s1-container { padding: 0 32px; } }
        @container s1 (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container s1 (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }

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
          color: ${C.brandSecondary};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .s1-breadcrumb__link:hover { color: ${C.brandPrimary}; }
        .s1-breadcrumb__sep {
          font-size: 14px;
          color: ${C.textTertiary};
        }
        .s1-breadcrumb__current {
          font-size: 14px;
          color: ${C.textTertiary};
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: ${C.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container s1 (min-width: 768px)  { .s1-title { font-size: 40px; } }
        @container s1 (min-width: 1024px) { .s1-title { font-size: 48px; } }
        @container s1 (min-width: 1440px) { .s1-title { font-size: 64px; } }

        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${C.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container s1 (min-width: 1024px) { .s1-description { max-width: 720px; } }
        @container s1 (min-width: 1440px) { .s1-description { max-width: 1080px; } }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <nav className="s1-breadcrumb" aria-label="breadcrumb">
              <a href="https://llmcapsule.ai/" className="s1-breadcrumb__link">{t.home}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <a href="https://llmcapsule.ai/resources/learn" className="s1-breadcrumb__link">{t.learn}</a>
              <span className="s1-breadcrumb__sep">/</span>
              <span className="s1-breadcrumb__current">{t.current}</span>
            </nav>
            <h1 className="s1-title">{t.title}</h1>
            <p className="s1-description">{t.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "On-Premise vs Cloud AI Data Protection",
    displayTextArea: true,
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.",
    displayTextArea: true,
  },
  breadcrumbHome: {
    type: ControlType.String,
    title: "Breadcrumb: Home",
    defaultValue: "Home",
  },
  breadcrumbLearn: {
    type: ControlType.String,
    title: "Breadcrumb: Learn",
    defaultValue: "Learn",
  },
  breadcrumbCurrent: {
    type: ControlType.String,
    title: "Breadcrumb: Current",
    defaultValue: "On-Premise vs Cloud AI Data Protection",
  },
})
