import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  textInverse:   "#ffffff",
}

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
  link5Title?: string
  link5Href?: string
}

export default function Section09_RelatedPages({
  sectionLabel = "Related",
  link1Title = "Product Overview",
  link1Href = "/product",
  link2Title = "Architecture",
  link2Href = "/architecture",
  link3Title = "Trust & Compliance",
  link3Href = "/trust",
  link4Title = "Request a Demo",
  link4Href = "/request-a-demo",
  link5Title = "Learn Hub",
  link5Href = "/resources/learn",
}: Props) {
  const links = [
    {
      title: link1Title,
      href: link1Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
    },
    {
      title: link2Title,
      href: link2Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: link3Title,
      href: link3Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: link4Title,
      href: link4Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      ),
    },
    {
      title: link5Title,
      href: link5Href,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s9-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s9-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s9-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s9-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s9-container { padding: 0 120px; max-width: 1440px; }
        }

        .s9-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s9-title-icon__icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }
        .s9-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }

        .s9-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s9-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .s9-card-dark {
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
        }
        .s9-card-dark:hover { background-color: ${PALETTE.neutral800}; }
        .s9-card-dark__icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
          width: 24px;
          height: 24px;
        }
        .s9-card-dark__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }
      `}</style>

      <section className="s9-section">
        <div className="s9-inner">
          <div className="s9-container">
            <div className="s9-title-icon">
              <span className="s9-title-icon__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <span className="s9-title-icon__text">{sectionLabel}</span>
            </div>
            <div className="s9-card-grid">
              {links.map((link, idx) => (
                <a key={idx} href={link.href} className="s9-card-dark">
                  <span className="s9-card-dark__icon">{link.icon}</span>
                  <span className="s9-card-dark__title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_RelatedPages, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
  link1Title: {
    type: ControlType.String,
    title: "Link 1 Title",
    defaultValue: "Product Overview",
  },
  link1Href: {
    type: ControlType.String,
    title: "Link 1 URL",
    defaultValue: "/product",
  },
  link2Title: {
    type: ControlType.String,
    title: "Link 2 Title",
    defaultValue: "Architecture",
  },
  link2Href: {
    type: ControlType.String,
    title: "Link 2 URL",
    defaultValue: "/architecture",
  },
  link3Title: {
    type: ControlType.String,
    title: "Link 3 Title",
    defaultValue: "Trust & Compliance",
  },
  link3Href: {
    type: ControlType.String,
    title: "Link 3 URL",
    defaultValue: "/trust",
  },
  link4Title: {
    type: ControlType.String,
    title: "Link 4 Title",
    defaultValue: "Request a Demo",
  },
  link4Href: {
    type: ControlType.String,
    title: "Link 4 URL",
    defaultValue: "/request-a-demo",
  },
  link5Title: {
    type: ControlType.String,
    title: "Link 5 Title",
    defaultValue: "Learn Hub",
  },
  link5Href: {
    type: ControlType.String,
    title: "Link 5 URL",
    defaultValue: "/resources/learn",
  },
})
