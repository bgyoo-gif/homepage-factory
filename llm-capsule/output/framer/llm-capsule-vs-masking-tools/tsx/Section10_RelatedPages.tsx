import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textInverse:    "#ffffff",
  neutral700:     "#303135",
  neutral800:     "#171719",
  neutral850:     "#141414",
  surfaceWhite:   "#ffffff",
  borderDefault:  "#e6e7e9",
}

type IconType = "product" | "architecture" | "trust" | "arrow" | "book" | "file"

interface Props {
  sectionLabel?: string
  link1Title?: string
  link1Href?: string
  link1Icon?: IconType
  link2Title?: string
  link2Href?: string
  link2Icon?: IconType
  link3Title?: string
  link3Href?: string
  link3Icon?: IconType
  link4Title?: string
  link4Href?: string
  link4Icon?: IconType
  link5Title?: string
  link5Href?: string
  link5Icon?: IconType
  link6Title?: string
  link6Href?: string
  link6Icon?: IconType
}

function IconSVG({ type }: { type: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 24,
    height: 24,
    "aria-hidden": true,
  }
  if (type === "product") return <svg {...common}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
  if (type === "architecture") return <svg {...common}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
  if (type === "trust") return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
  if (type === "arrow") return <svg {...common}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  if (type === "book") return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
  if (type === "file") return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  return null
}

export default function Section10_RelatedPages({
  sectionLabel = "Related",
  link1Title = "Product Overview",
  link1Href = "/product",
  link1Icon = "product",
  link2Title = "Architecture",
  link2Href = "/architecture",
  link2Icon = "architecture",
  link3Title = "Trust & Compliance",
  link3Href = "/trust",
  link3Icon = "trust",
  link4Title = "Request a Demo",
  link4Href = "/request-a-demo",
  link4Icon = "arrow",
  link5Title = "Learn Hub",
  link5Href = "/resources/learn",
  link5Icon = "book",
  link6Title = "Why Redaction Breaks AI",
  link6Href = "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  link6Icon = "file",
}: Props) {
  const links = [
    { title: link1Title, href: link1Href, iconType: link1Icon },
    { title: link2Title, href: link2Href, iconType: link2Icon },
    { title: link3Title, href: link3Href, iconType: link3Icon },
    { title: link4Title, href: link4Href, iconType: link4Icon },
    { title: link5Title, href: link5Href, iconType: link5Icon },
    { title: link6Title, href: link6Href, iconType: link6Icon },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s10-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 32px 0 64px;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s10-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s10-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s10-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s10-title-icon__icon {
          color: ${PALETTE.brandSecondary};
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .s10-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s10-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s10-card {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s10-card:hover {
          background-color: ${PALETTE.neutral800};
        }
        .s10-card-icon {
          flex-shrink: 0;
          color: ${PALETTE.brandSecondary};
        }
        .s10-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s10-container { padding: 0 32px; }
          .s10-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @container (min-width: 1024px) {
          .s10-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s10-container { padding: 0; max-width: 1080px; }
          .s10-section { padding: 32px 0 80px; }
        }
      `}</style>
      <section className="s10-section" id="section-10">
        <div className="s10-inner">
          <div className="s10-container">
            <div className="s10-title-icon">
              <span className="s10-title-icon__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="s10-title-icon__text">{sectionLabel}</span>
            </div>
            <div className="s10-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s10-card">
                  <span className="s10-card-icon">
                    <IconSVG type={link.iconType} />
                  </span>
                  <span className="s10-card-title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_RelatedPages, {
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
  link6Title: {
    type: ControlType.String,
    title: "Link 6 Title",
    defaultValue: "Why Redaction Breaks AI",
  },
  link6Href: {
    type: ControlType.String,
    title: "Link 6 URL",
    defaultValue: "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  },
})
