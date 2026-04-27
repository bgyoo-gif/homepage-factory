import { addPropertyControls, ControlType } from "framer"

// ─── Palette ───────────────────────────────────────────────────────────────
const C = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  neutral150:     "#e6e7e9",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textInverse:    "#ffffff",
  surfaceWhite:   "#ffffff",
}

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  link1Title?: string
  link1Href?: string
  link2Title?: string
  link2Href?: string
  link3Title?: string
  link3Href?: string
  link4Title?: string
  link4Href?: string
}

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const IconProduct = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
)
const IconArch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)
const IconTrust = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)
const IconArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

// ─── Component ─────────────────────────────────────────────────────────────
export default function Section06_RelatedPages({
  sectionLabel = "Related",
  link1Title = "Product Overview",
  link1Href = "/product",
  link2Title = "Architecture",
  link2Href = "/architecture",
  link3Title = "Trust & Compliance",
  link3Href = "/trust",
  link4Title = "Request a Demo",
  link4Href = "/request-a-demo",
}: Props) {
  const links = [
    { title: link1Title, href: link1Href, icon: <IconProduct /> },
    { title: link2Title, href: link2Href, icon: <IconArch /> },
    { title: link3Title, href: link3Href, icon: <IconTrust /> },
    { title: link4Title, href: link4Href, icon: <IconArrow /> },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .s6-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${C.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s6;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container s6 (min-width: 768px)  { .s6-container { padding: 0 32px; } }
        @container s6 (min-width: 1024px) { .s6-container { padding: 0 32px; } }
        @container s6 (min-width: 1440px) { .s6-container { padding: 0 120px; max-width: 1440px; } }

        .s6-section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s6-section-title__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .s6-section-title__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }

        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container s6 (min-width: 768px) { .s6-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

        .s6-card {
          background-color: ${C.neutral850};
          border: 1px solid ${C.neutral700};
          color: ${C.textInverse};
          border-radius: 18px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s6-card:hover { background-color: ${C.neutral800}; }
        .s6-card__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .s6-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-title">
              <span className="s6-section-title__icon">
                <IconLink />
              </span>
              <span className="s6-section-title__text">{sectionLabel}</span>
            </div>
            <div className="s6-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s6-card">
                  <span className="s6-card__icon">{link.icon}</span>
                  <span className="s6-card__title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_RelatedPages, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
  link1Title: { type: ControlType.String, title: "Link 1 Title", defaultValue: "Product Overview" },
  link1Href:  { type: ControlType.String, title: "Link 1 URL",   defaultValue: "/product" },
  link2Title: { type: ControlType.String, title: "Link 2 Title", defaultValue: "Architecture" },
  link2Href:  { type: ControlType.String, title: "Link 2 URL",   defaultValue: "/architecture" },
  link3Title: { type: ControlType.String, title: "Link 3 Title", defaultValue: "Trust & Compliance" },
  link3Href:  { type: ControlType.String, title: "Link 3 URL",   defaultValue: "/trust" },
  link4Title: { type: ControlType.String, title: "Link 4 Title", defaultValue: "Request a Demo" },
  link4Href:  { type: ControlType.String, title: "Link 4 URL",   defaultValue: "/request-a-demo" },
})
