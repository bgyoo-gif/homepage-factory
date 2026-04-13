import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  textInverse:    "#ffffff",
  borderDefault:  "#e6e7e9",
  white:          "#ffffff",
}

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const IconProduct = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
)

const IconArchitecture = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const IconTrust = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

const IconArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  locale?: "en" | "ko"
  section_label_en?: string
  section_label_ko?: string
  link1_title_en?: string
  link1_title_ko?: string
  link1_href?: string
  link2_title_en?: string
  link2_title_ko?: string
  link2_href?: string
  link3_title_en?: string
  link3_title_ko?: string
  link3_href?: string
  link4_title_en?: string
  link4_title_ko?: string
  link4_href?: string
}

export default function Section08_RelatedPages({
  locale = "en",
  section_label_en = "Related",
  section_label_ko = "관련 페이지",
  link1_title_en = "Product Overview",
  link1_title_ko = "제품 개요",
  link1_href = "product.html",
  link2_title_en = "Architecture",
  link2_title_ko = "아키텍처",
  link2_href = "architecture.html",
  link3_title_en = "Trust & Compliance",
  link3_title_ko = "신뢰 및 컴플라이언스",
  link3_href = "trust.html",
  link4_title_en = "Request a Demo",
  link4_title_ko = "데모 요청",
  link4_href = "request-pov.html",
}: Props) {
  const t = locale === "ko"
    ? {
        label: section_label_ko,
        links: [
          { title: link1_title_ko, href: link1_href, Icon: IconProduct },
          { title: link2_title_ko, href: link2_href, Icon: IconArchitecture },
          { title: link3_title_ko, href: link3_href, Icon: IconTrust },
          { title: link4_title_ko, href: link4_href, Icon: IconArrow },
        ],
      }
    : {
        label: section_label_en,
        links: [
          { title: link1_title_en, href: link1_href, Icon: IconProduct },
          { title: link2_title_en, href: link2_href, Icon: IconArchitecture },
          { title: link3_title_en, href: link3_href, Icon: IconTrust },
          { title: link4_title_en, href: link4_href, Icon: IconArrow },
        ],
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s8-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${P.white};
          box-sizing: border-box;
          overflow: hidden;
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0; }
          .s8-section { padding: 64px 0; }
        }

        .s8-section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s8-section-title__icon { color: ${P.brandSecondary}; flex-shrink: 0; }
        .s8-section-title__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }

        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s8-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s8-dark-card {
          background-color: ${P.neutral850};
          border: 1px solid ${P.neutral700};
          color: ${P.textInverse};
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
        .s8-dark-card:hover { background-color: ${P.neutral800}; }
        .s8-dark-card__icon {
          flex-shrink: 0;
          color: ${P.brandSecondary};
        }
        .s8-dark-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${P.textInverse};
        }
      `}</style>

      <section className="s8-section">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-section-title">
              <span className="s8-section-title__icon">
                <IconLink />
              </span>
              <span className="s8-section-title__text">{t.label}</span>
            </div>
            <div className="s8-grid">
              {t.links.map((link, i) => (
                <a key={i} href={link.href} className="s8-dark-card">
                  <span className="s8-dark-card__icon">
                    <link.Icon />
                  </span>
                  <span className="s8-dark-card__title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_RelatedPages, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
  section_label_en: { type: ControlType.String, title: "Section Label (EN)", defaultValue: "Related" },
  section_label_ko: { type: ControlType.String, title: "Section Label (KO)", defaultValue: "관련 페이지" },
  link1_title_en: { type: ControlType.String, title: "Link 1 Title (EN)", defaultValue: "Product Overview" },
  link1_title_ko: { type: ControlType.String, title: "Link 1 Title (KO)", defaultValue: "제품 개요" },
  link1_href: { type: ControlType.String, title: "Link 1 URL", defaultValue: "product.html" },
  link2_title_en: { type: ControlType.String, title: "Link 2 Title (EN)", defaultValue: "Architecture" },
  link2_title_ko: { type: ControlType.String, title: "Link 2 Title (KO)", defaultValue: "아키텍처" },
  link2_href: { type: ControlType.String, title: "Link 2 URL", defaultValue: "architecture.html" },
  link3_title_en: { type: ControlType.String, title: "Link 3 Title (EN)", defaultValue: "Trust & Compliance" },
  link3_title_ko: { type: ControlType.String, title: "Link 3 Title (KO)", defaultValue: "신뢰 및 컴플라이언스" },
  link3_href: { type: ControlType.String, title: "Link 3 URL", defaultValue: "trust.html" },
  link4_title_en: { type: ControlType.String, title: "Link 4 Title (EN)", defaultValue: "Request a Demo" },
  link4_title_ko: { type: ControlType.String, title: "Link 4 Title (KO)", defaultValue: "데모 요청" },
  link4_href: { type: ControlType.String, title: "Link 4 URL", defaultValue: "request-pov.html" },
})
