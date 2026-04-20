import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  textPrimary:   "#0f0f0f",
  textInverse:   "#ffffff",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
}

interface LinkCard {
  href: string
  title: string
}

interface Props {
  sectionLabel?: string
  cards?: LinkCard[]
}

const defaultCards: LinkCard[] = [
  { href: "/product", title: "Product Overview" },
  { href: "/architecture", title: "Architecture" },
  { href: "/trust", title: "Trust & Compliance" },
  { href: "/request-a-demo", title: "Request a Demo" },
  { href: "/resources/learn/what-is-ai-data-capsule", title: "What Is an AI Data Capsule" },
  { href: "/resources/learn/how-to-use-ai-on-sensitive-enterprise-data", title: "AI on Sensitive Data" },
  { href: "/resources/learn/why-redaction-breaks-enterprise-ai-workflows", title: "Why Redaction Breaks AI" },
  { href: "/resources/learn/secure-enterprise-ai-workflows", title: "Secure AI Workflows" },
  { href: "/resources/learn/structure-preserving-document-processing", title: "Structure-Preserving Processing" },
  { href: "/resources/learn/pii-protection-vs-enterprise-confidentiality-control", title: "PII vs Confidentiality Control" },
  { href: "/resources/learn/on-premise-vs-cloud-ai-data-protection", title: "On-Premise vs Cloud" },
  { href: "/resources/learn/ai-data-pipeline-protection", title: "AI Pipeline Protection" },
]

function DocIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  )
}

const iconMap: Record<string, JSX.Element> = {
  "/product": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    </svg>
  ),
  "/architecture": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  "/trust": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  "/request-a-demo": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
}

export default function Section07_LearnMore({
  sectionLabel = "Learn More",
  cards = defaultCards,
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s7-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s7-title-icon__icon { color: ${PALETTE.brandSecondary}; flex-shrink: 0; }
        .s7-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
        }
        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s7-card-dark {
          background-color: ${PALETTE.neutral850};
          border: 1px solid ${PALETTE.neutral700};
          color: ${PALETTE.textInverse};
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .s7-card-dark:hover { background-color: ${PALETTE.neutral800}; }
        .s7-card-dark__icon { flex-shrink: 0; color: ${PALETTE.brandSecondary}; }
        .s7-card-dark__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${PALETTE.textInverse};
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s7-section { padding: 60px 0; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-section { padding: 60px 0; }
        }
      `}</style>
      <section className="s7-section" id="section-8">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-title-icon">
              <span className="s7-title-icon__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <span className="s7-title-icon__text">{sectionLabel}</span>
            </div>
            <div className="s7-card-grid">
              {cards.map((card, i) => (
                <a key={i} href={card.href} className="s7-card-dark">
                  <span className="s7-card-dark__icon">
                    {iconMap[card.href] || <DocIcon />}
                  </span>
                  <span className="s7-card-dark__title">{card.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_LearnMore, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Learn More",
  },
})
