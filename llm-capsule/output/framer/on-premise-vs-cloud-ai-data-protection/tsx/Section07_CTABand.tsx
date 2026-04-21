import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral800:     "#171719",
  textPrimary:    "#0f0f0f",
  white:          "#ffffff",
  overlayNavBg:   "rgba(255,255,255,0.92)",
  overlayDark:    "rgba(0,0,0,0.15)",
  overlayWhite85: "rgba(255,255,255,0.85)",
  overlayWhite70: "rgba(255,255,255,0.70)",
  overlayCTABdr:  "rgba(255,255,255,0.6)",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  footnote2Label?: string
  footnote2Href?: string
  lang?: "en" | "ko"
}

const LABELS: Record<"en" | "ko", {
  title: string
  description: string
  btn1Label: string
  footnote2Label: string
}> = {
  en: {
    title: "See how LLM Capsule works with your data",
    description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    btn1Label: "Request a Demo",
    footnote2Label: "AWS Marketplace",
  },
  ko: {
    title: "LLM Capsule이 귀하의 데이터와 어떻게 작동하는지 확인하세요",
    description: "문서, 배포 제약, 평가 기준을 가져오세요. 실제 워크플로우에서 시연해 드립니다.",
    btn1Label: "데모 신청",
    footnote2Label: "AWS Marketplace",
  },
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section07_CTABand({
  title,
  description,
  btn1Label, btn1Href = "/request-a-demo",
  footnote2Label, footnote2Href = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  lang = "en",
}: Props) {
  const L = LABELS[lang]
  const t = {
    title: title ?? L.title,
    description: description ?? L.description,
    btn1Label: btn1Label ?? L.btn1Label,
    footnote2Label: footnote2Label ?? L.footnote2Label,
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s7-cta {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${C.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-blue-violet.png');
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
        }
        .s7-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${C.overlayDark};
          z-index: 0;
        }
        .s7-cta > * { position: relative; z-index: 1; }

        /* No max-width on CTA itself — inner only */
        .s7-cta__inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .s7-cta__title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7-cta__title .s7-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s7-cta__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${C.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s7-cta__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s7-cta__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 18px;
          padding: 16px 48px;
          cursor: pointer;
          border: 1px solid ${C.overlayCTABdr};
          text-decoration: none;
          white-space: nowrap;
          background-color: ${C.overlayNavBg};
          color: ${C.textPrimary};
          backdrop-filter: blur(8px);
          transition: background-color 0.2s;
        }
        .s7-cta__btn:hover { background-color: ${C.white}; }

        .s7-cta__footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s7-cta__footnote a {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${C.overlayWhite70};
          text-decoration: none;
          transition: color 0.2s;
        }
        .s7-cta__footnote a:hover { color: ${C.white}; }

        /* Container queries for inner width */
        .s7-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s7;
        }
        @container s7 (min-width: 768px) {
          .s7-cta { padding: 100px 32px; }
        }
        @container s7 (min-width: 1024px) {
          .s7-cta__inner { max-width: 720px; }
        }
        @container s7 (min-width: 1440px) {
          .s7-cta { padding: 120px 120px; }
          .s7-cta__title { font-size: 50px; }
          .s7-cta__inner { max-width: 1080px; }
        }

        /* Mobile override — no bg image, stacked buttons */
        @container s7 (max-width: 767px) {
          .s7-cta { background-image: none; }
          .s7-cta__title { font-size: 36px; }
          .s7-cta__actions { flex-direction: column; align-items: center; }
          .s7-cta__btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="s7-inner">
        <section className="s7-cta">
          <div className="s7-cta__inner">
            <h2 className="s7-cta__title" style={{ wordBreak: "keep-all" }}>
              {title}
            </h2>
            <p className="s7-cta__description">{t.description}</p>
            <div className="s7-cta__actions">
              <a href={btn1Href} className="s7-cta__btn">{t.btn1Label}</a>
            </div>
            <div className="s7-cta__footnote">
              <a href={footnote2Href} target="_blank" rel="noopener noreferrer">{t.footnote2Label}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section07_CTABand, {
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
    defaultValue: "See how LLM Capsule works with your data",
    displayTextArea: true,
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  btn1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Request a Demo" },
  btn1Href:  { type: ControlType.String, title: "Button 1 URL",   defaultValue: "/request-a-demo" },
  footnote2Label: { type: ControlType.String, title: "Footnote 2 Label", defaultValue: "AWS Marketplace" },
  footnote2Href:  { type: ControlType.String, title: "Footnote 2 URL",   defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
})
