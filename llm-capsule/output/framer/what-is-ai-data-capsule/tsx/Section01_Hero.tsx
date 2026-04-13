import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral150: "#e6e7e9",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
}

interface Props {
  title?: string
  description?: string
  lang?: "en" | "ko"
}

const COPY = {
  en: {
    title: "What Is an AI Data Capsule?",
    description: "Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.",
  },
  ko: {
    title: "AI 데이터 캡슐이란 무엇인가요?",
    description: "안전한 LLM 사용을 위한 엔터프라이즈 데이터 캡슐화 — AI 처리 전에 민감한 데이터를 보호하고 사용 가능한 출력물을 복원하는 방법.",
  },
}

export default function Section01_Hero({
  title,
  description,
  lang = "en",
}: Props) {
  const copy = COPY[lang]
  const displayTitle = title ?? copy.title
  const displayDesc = description ?? copy.description

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: ${PALETTE.white};
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
        @container (min-width: 768px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 44px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 52px; }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://llmcapsule.ai/learn" },
            { "@type": "ListItem", "position": 3, "name": "What Is an AI Data Capsule?", "item": "https://llmcapsule.ai/learn/what-is-ai-data-capsule" }
          ]
        })}}
      />
      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <h1 className="s1-title">{displayTitle}</h1>
            <p className="s1-description">{displayDesc}</p>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "What Is an AI Data Capsule?",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.",
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
