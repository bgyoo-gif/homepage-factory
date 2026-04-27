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

// Icons are kept as a const array — they don't need to be editable Props
const ICONS = [
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-7l2 2 4-4",
  "M5 12h14M12 5l7 7-7 7",
  "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H9H8",
]

interface Props {
  relatedLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
  related5Title?: string
  related5Href?: string
}

export default function Section08_Related({
  relatedLabel = "Related",
  related1Title = "Product Overview",
  related1Href = "/product",
  related2Title = "Architecture",
  related2Href = "/architecture",
  related3Title = "Trust & Compliance",
  related3Href = "/trust",
  related4Title = "Request a Demo",
  related4Href = "/request-a-demo",
  related5Title = "Why Redaction Breaks AI",
  related5Href = "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
}: Props) {
  const items = [
    { title: related1Title, href: related1Href, iconPath: ICONS[0] },
    { title: related2Title, href: related2Href, iconPath: ICONS[1] },
    { title: related3Title, href: related3Href, iconPath: ICONS[2] },
    { title: related4Title, href: related4Href, iconPath: ICONS[3] },
    { title: related5Title, href: related5Href, iconPath: ICONS[4] },
  ]

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
          max-width: 1080px;
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
          .s8-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) { .s8-container { padding: 0 120px; max-width: 1440px; } }

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
              <span className="s8-title-text">{relatedLabel}</span>
            </div>
            <div className="s8-grid">
              {items.map((item, i) => (
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
  relatedLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Related",
  },
  related1Title: {
    type: ControlType.String,
    title: "Link 1 Title",
    defaultValue: "Product Overview",
  },
  related1Href: {
    type: ControlType.String,
    title: "Link 1 URL",
    defaultValue: "/product",
  },
  related2Title: {
    type: ControlType.String,
    title: "Link 2 Title",
    defaultValue: "Architecture",
  },
  related2Href: {
    type: ControlType.String,
    title: "Link 2 URL",
    defaultValue: "/architecture",
  },
  related3Title: {
    type: ControlType.String,
    title: "Link 3 Title",
    defaultValue: "Trust & Compliance",
  },
  related3Href: {
    type: ControlType.String,
    title: "Link 3 URL",
    defaultValue: "/trust",
  },
  related4Title: {
    type: ControlType.String,
    title: "Link 4 Title",
    defaultValue: "Request a Demo",
  },
  related4Href: {
    type: ControlType.String,
    title: "Link 4 URL",
    defaultValue: "/request-a-demo",
  },
  related5Title: {
    type: ControlType.String,
    title: "Link 5 Title",
    defaultValue: "Why Redaction Breaks AI",
  },
  related5Href: {
    type: ControlType.String,
    title: "Link 5 URL",
    defaultValue: "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  },
})
