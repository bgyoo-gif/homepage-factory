import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  surfaceWhite:   "#ffffff",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  textInverse:    "#ffffff",
  borderDefault:  "#e6e7e9",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

interface RelatedLink {
  href: string
  title: string
  iconType: "package" | "layers" | "shield" | "arrow"
}

interface Props {
  sectionLabel?: string
  links?: RelatedLink[]
}

const defaultLinks: RelatedLink[] = [
  { href: "/product", title: "Product Overview", iconType: "package" },
  { href: "/architecture", title: "Architecture", iconType: "layers" },
  { href: "/trust", title: "Trust & Compliance", iconType: "shield" },
  { href: "/request-a-demo", title: "Request a Demo", iconType: "arrow" },
]

function IconPackage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  )
}

function getIcon(type: RelatedLink["iconType"]) {
  switch (type) {
    case "package": return <IconPackage />
    case "layers":  return <IconLayers />
    case "shield":  return <IconShield />
    case "arrow":   return <IconArrow />
  }
}

export default function Section06_Related({
  sectionLabel = "Related",
  links = defaultLinks,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s6-section {
          width: 100%;
          background-color: ${PALETTE.surfaceWhite};
          padding: 32px 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s6-section-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s6-section-title-icon__icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
        }
        .s6-section-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s6-card {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .s6-card:hover {
          background-color: ${PALETTE.neutral800};
        }
        .s6-card__icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
        }
        .s6-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-grid { grid-template-columns: repeat(2, 1fr); }
          .s6-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-section { padding: 60px 0; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0; max-width: 1080px; }
          .s6-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-section-title-icon">
              <span className="s6-section-title-icon__icon">
                <LinkIcon />
              </span>
              <span className="s6-section-title-icon__text">{sectionLabel}</span>
            </div>
            <div className="s6-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s6-card">
                  <span className="s6-card__icon">
                    {getIcon(link.iconType)}
                  </span>
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

addPropertyControls(Section06_Related, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
})
