import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  neutral800:  "#171719",
  white:       "#ffffff",
  whiteAlpha85: "rgba(255,255,255,0.85)",
  whiteAlpha70: "rgba(255,255,255,0.70)",
  whiteAlpha92: "rgba(255,255,255,0.92)",
  whiteAlpha60: "rgba(255,255,255,0.6)",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  textPrimary: "#0f0f0f",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  title_pre_en?: string
  title_pre_ko?: string
  title_brand_en?: string
  title_brand_ko?: string
  description_en?: string
  description_ko?: string
  btn1_label_en?: string
  btn1_label_ko?: string
  btn1_href?: string
  btn2_label_en?: string
  btn2_label_ko?: string
  btn2_href?: string
  footnote_en?: string
  footnote_ko?: string
}

export default function Section09_CTABand({
  locale = "en",
  title_pre_en = "Use AI on Your Sensitive Data with",
  title_pre_ko = "민감한 데이터에서 AI를 사용하세요",
  title_brand_en = "LLM Capsule",
  title_brand_ko = "LLM Capsule",
  description_en = "Enable enterprise AI on real documents without exposing sensitive data. Encapsulate locally, process safely, restore completely.",
  description_ko = "민감한 데이터를 노출하지 않고 실제 문서에서 기업 AI를 활성화하세요. 로컬에서 캡슐화하고, 안전하게 처리하고, 완전히 복원하세요.",
  btn1_label_en = "Request a Demo",
  btn1_label_ko = "데모 요청",
  btn1_href = "/request-a-demo",
  btn2_label_en = "View Product",
  btn2_label_ko = "제품 보기",
  btn2_href = "/product",
  footnote_en = "Enterprise AI Enablement by CUBIG",
  footnote_ko = "CUBIG의 엔터프라이즈 AI 활성화",
}: Props) {
  const t = locale === "ko"
    ? {
        titlePre: title_pre_ko,
        titleBrand: title_brand_ko,
        description: description_ko,
        btn1: btn1_label_ko,
        btn2: btn2_label_ko,
        footnote: footnote_ko,
      }
    : {
        titlePre: title_pre_en,
        titleBrand: title_brand_en,
        description: description_en,
        btn1: btn1_label_en,
        btn2: btn2_label_en,
        footnote: footnote_en,
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s9-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${P.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-violet-teal.png');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s9-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${P.overlayDarkLight};
          z-index: 0;
        }
        .s9-section > * { position: relative; z-index: 1; }

        .s9-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s9-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9-brand {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s9-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${P.whiteAlpha85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s9-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s9-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid ${P.whiteAlpha60};
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: ${P.whiteAlpha92};
          color: ${P.textPrimary};
          backdrop-filter: blur(8px);
        }
        .s9-btn:hover { background-color: ${P.white}; }
        .s9-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: ${P.whiteAlpha70};
          margin-top: 8px;
        }

        /* Container-based responsive */
        .s9-wrap {
          width: 100%;
          container-type: inline-size;
        }

        @container (max-width: 767px) {
          .s9-title { font-size: 36px; }
          .s9-actions { flex-direction: column; align-items: center; }
          .s9-btn { width: 100%; max-width: 320px; }
          .s9-section { background-image: none; }
        }
        @container (min-width: 768px) {
          .s9-section { padding: 100px 32px; }
          .s9-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s9-section { padding: 120px 120px; }
          .s9-title { font-size: 50px; }
          .s9-inner { max-width: 1080px; }
        }
      `}</style>

      <div className="s9-wrap">
        <section className="s9-section">
          <div className="s9-inner">
            <h2 className="s9-title" style={{ wordBreak: "keep-all" }}>
              {t.titlePre} <span className="s9-brand">{t.titleBrand}</span>
            </h2>
            <p className="s9-description">{t.description}</p>
            <div className="s9-actions">
              <a href={btn1_href} className="s9-btn">{t.btn1}</a>
              <a href={btn2_href} className="s9-btn">{t.btn2}</a>
            </div>
            <p className="s9-footnote">{t.footnote}</p>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section09_CTABand, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  title_pre_en: { type: ControlType.String, title: "Title Pre (EN)", defaultValue: "Use AI on Your Sensitive Data with" },
  title_pre_ko: { type: ControlType.String, title: "Title Pre (KO)", defaultValue: "민감한 데이터에서 AI를 사용하세요" },
  title_brand_en: { type: ControlType.String, title: "Brand Name (EN)", defaultValue: "LLM Capsule" },
  title_brand_ko: { type: ControlType.String, title: "Brand Name (KO)", defaultValue: "LLM Capsule" },
  description_en: { type: ControlType.String, title: "Description (EN)", defaultValue: "Enable enterprise AI on real documents without exposing sensitive data. Encapsulate locally, process safely, restore completely.", displayTextArea: true },
  description_ko: { type: ControlType.String, title: "Description (KO)", defaultValue: "민감한 데이터를 노출하지 않고 실제 문서에서 기업 AI를 활성화하세요.", displayTextArea: true },
  btn1_label_en: { type: ControlType.String, title: "Button 1 (EN)", defaultValue: "Request a Demo" },
  btn1_label_ko: { type: ControlType.String, title: "Button 1 (KO)", defaultValue: "데모 요청" },
  btn1_href: { type: ControlType.String, title: "Button 1 URL", defaultValue: "/request-a-demo" },
  btn2_label_en: { type: ControlType.String, title: "Button 2 (EN)", defaultValue: "View Product" },
  btn2_label_ko: { type: ControlType.String, title: "Button 2 (KO)", defaultValue: "제품 보기" },
  btn2_href: { type: ControlType.String, title: "Button 2 URL", defaultValue: "/product" },
  footnote_en: { type: ControlType.String, title: "Footnote (EN)", defaultValue: "Enterprise AI Enablement by CUBIG" },
  footnote_ko: { type: ControlType.String, title: "Footnote (KO)", defaultValue: "CUBIG의 엔터프라이즈 AI 활성화" },
})
