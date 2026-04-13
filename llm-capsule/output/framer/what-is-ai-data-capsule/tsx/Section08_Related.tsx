import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  surfaceWhite:   "#ffffff",
  textPrimary:    "#0f0f0f",
  textInverse:    "#ffffff",
  borderDefault:  "#e6e7e9",
}

interface RelatedItem {
  title: string
  href: string
  iconPath: string
}

interface Props {
  sectionLabel?: string
  relatedItems?: RelatedItem[]
  lang?: "en" | "ko"
}

const DEFAULT_ITEMS_EN: RelatedItem[] = [
  {
    title: "Product Overview",
    href: "product.html",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    title: "Architecture",
    href: "architecture.html",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Trust & Compliance",
    href: "trust.html",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-7l2 2 4-4",
  },
  {
    title: "Request a Demo",
    href: "request-pov.html",
    iconPath: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "Why Redaction Breaks AI",
    href: "why-redaction-breaks-enterprise-ai-workflows.html",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H9H8",
  },
]

const DEFAULT_ITEMS_KO: RelatedItem[] = [
  {
    title: "제품 개요",
    href: "product.html",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    title: "아키텍처",
    href: "architecture.html",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "신뢰 & 컴플라이언스",
    href: "trust.html",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-7l2 2 4-4",
  },
  {
    title: "데모 요청",
    href: "request-pov.html",
    iconPath: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "왜 편집이 AI를 망치는가",
    href: "why-redaction-breaks-enterprise-ai-workflows.html",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H9H8",
  },
]

const COPY = {
  en: {
    sectionLabel: "Related",
    items: DEFAULT_ITEMS_EN,
  },
  ko: {
    sectionLabel: "관련 콘텐츠",
    items: DEFAULT_ITEMS_KO,
  },
}

export default function Section08_Related({
  sectionLabel,
  relatedItems,
  lang = "en",
}: Props) {
  const copy = COPY[lang]
  const displayLabel = sectionLabel ?? copy.sectionLabel
  const displayItems = relatedItems ?? copy.items

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-section {
          width: 100%;
          padding: 32px 0 64px;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8-container {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s8-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          margin-top: 24px;
        }
        .s8-title-icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
        }
        .s8-title-text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s8-card {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
          cursor: pointer;
        }
        .s8-card:hover {
          background-color: ${PALETTE.neutral800};
        }
        .s8-card-icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
        }
        .s8-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0; }
        }
      `}</style>
      <section className="s8-section">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-title-row">
              <span className="s8-title-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="s8-title-text">{displayLabel}</span>
            </div>
            <div className="s8-grid">
              {displayItems.map((item, i) => (
                <a key={i} href={item.href} className="s8-card">
                  <span className="s8-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.iconPath} />
                    </svg>
                  </span>
                  <span className="s8-card-title">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_Related, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko"],
    optionTitles: ["English", "Korean"],
    defaultValue: "en",
  },
})
