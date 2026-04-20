import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral800:  "#171719",
  white:       "#ffffff",
  textInverse: "#ffffff",
  // overlay white 85%: rgba(255,255,255,0.85)
  // overlay white 70%: rgba(255,255,255,0.70)
  // overlay nav bg: rgba(255,255,255,0.92)
  // overlay cta btn bdr: rgba(255,255,255,0.6)
}

interface Props {
  title?: string
  titleProductName?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  footnoteLink2Label?: string
  footnoteLink2Href?: string
  lang?: "en" | "ko"
}

const COPY = {
  en: {
    title: "See how",
    titleProductName: "LLM Capsule",
    titleSuffix: "works with your data",
    description: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    cta1Label: "Request a Demo",
    cta1Href: "/request-a-demo",
    footnoteLink2Label: "AWS Marketplace",
    footnoteLink2Href: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
  ko: {
    title: "",
    titleProductName: "LLM Capsule",
    titleSuffix: "이 귀사의 데이터와 어떻게 동작하는지 확인하세요",
    description: "문서, 배포 제약 조건, 평가 기준을 가져오세요. 실제 워크플로우에서 시연합니다.",
    cta1Label: "데모 요청",
    cta1Href: "/request-a-demo",
    footnoteLink2Label: "AWS Marketplace",
    footnoteLink2Href: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
}

export default function Section09_CTA({
  title,
  titleProductName,
  description,
  cta1Label,
  cta1Href,
  footnoteLink2Label,
  footnoteLink2Href,
  lang = "en",
}: Props) {
  const copy = COPY[lang]

  const displayProductName = titleProductName ?? copy.titleProductName
  const displayDesc = description ?? copy.description
  const displayCta1 = cta1Label ?? copy.cta1Label
  const displayCta1Href = cta1Href ?? copy.cta1Href
  const displayFn2Label = footnoteLink2Label ?? copy.footnoteLink2Label
  const displayFn2Href = footnoteLink2Href ?? copy.footnoteLink2Href

  const titleText = lang === "en"
    ? `See how ${displayProductName} works with your data`
    : `${displayProductName}${copy.titleSuffix}`

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s9-cta {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
        }
        .s9-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.15);
          z-index: 0;
        }
        .s9-cta > * { position: relative; z-index: 1; }
        .s9-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          container-type: inline-size;
        }
        .s9-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
          word-break: keep-all;
        }
        .s9-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s9-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.85);
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
          border: 1px solid rgba(255,255,255,0.6);
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255,255,255,0.92);
          color: ${PALETTE.neutral800};
          backdrop-filter: blur(8px);
        }
        .s9-btn:hover {
          background-color: ${PALETTE.white};
        }
        .s9-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          margin-top: 8px;
        }
        .s9-footnote a {
          color: rgba(255,255,255,0.70);
          text-decoration: none;
        }
        .s9-footnote a:hover {
          color: ${PALETTE.white};
        }

        @container (min-width: 768px) {
          .s9-cta { padding: 100px 32px; }
        }
        @container (min-width: 1024px) {
          .s9-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s9-cta { padding: 120px 120px; }
          .s9-inner { max-width: 1080px; }
          .s9-title { font-size: 50px; }
        }
      `}</style>
      <section className="s9-cta">
        <div className="s9-inner">
          <h2 className="s9-title">
            {lang === "en" ? (
              <>
                See how <span className="s9-product-name">{displayProductName}</span> works with your data
              </>
            ) : (
              <>
                <span className="s9-product-name">{displayProductName}</span>{copy.titleSuffix}
              </>
            )}
          </h2>
          <p className="s9-description">{displayDesc}</p>
          <div className="s9-actions">
            <a href={displayCta1Href} className="s9-btn">{displayCta1}</a>
          </div>
          <div className="s9-footnote">
            <a href={displayFn2Href} target="_blank" rel="noopener">{displayFn2Label}</a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_CTA, {
  titleProductName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  cta1Label: {
    type: ControlType.String,
    title: "CTA 1 Label",
    defaultValue: "Request a Demo",
  },
  cta1Href: {
    type: ControlType.String,
    title: "CTA 1 URL",
    defaultValue: "/request-a-demo",
  },
  footnoteLink2Label: {
    type: ControlType.String,
    title: "Footnote Link 2",
    defaultValue: "AWS Marketplace",
  },
  footnoteLink2Href: {
    type: ControlType.String,
    title: "Footnote Link 2 URL",
    defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  },
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
})
