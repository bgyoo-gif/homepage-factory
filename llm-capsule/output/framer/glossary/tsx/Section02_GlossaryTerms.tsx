import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

interface GlossaryCard {
  title: string
  href: string
  linkLabel: string
  iconType: "restoration" | "zero-exposure" | "enterprise-context" | "structure-preserving" | "restorable-workflow" | "secure-llm"
}

interface Props {
  card1Title?: string
  card1Href?: string
  card1LinkLabel?: string
  card2Title?: string
  card2Href?: string
  card2LinkLabel?: string
  card3Title?: string
  card3Href?: string
  card3LinkLabel?: string
  card4Title?: string
  card4Href?: string
  card4LinkLabel?: string
  card5Title?: string
  card5Href?: string
  card5LinkLabel?: string
  card6Title?: string
  card6Href?: string
  card6LinkLabel?: string
}

const IconRestoration = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
)

const IconZeroExposure = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

const IconEnterpriseContext = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

const IconStructurePreserving = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const IconRestorableWorkflow = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
)

const IconSecureLLM = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

type IconKey = "restoration" | "zero-exposure" | "enterprise-context" | "structure-preserving" | "restorable-workflow" | "secure-llm"

const ICONS: Record<IconKey, React.FC> = {
  "restoration": IconRestoration,
  "zero-exposure": IconZeroExposure,
  "enterprise-context": IconEnterpriseContext,
  "structure-preserving": IconStructurePreserving,
  "restorable-workflow": IconRestorableWorkflow,
  "secure-llm": IconSecureLLM,
}

interface CardProps {
  title: string
  href: string
  linkLabel: string
  iconKey: IconKey
}

function GlossaryCard({ title, href, linkLabel, iconKey }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const Icon = ICONS[iconKey]

  return (
    <a
      href={href}
      className="s2-card"
      style={{
        borderColor: hovered ? "#5690D4" : "#e6e7e9",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="s2-card__icon-wrap">
        <Icon />
      </div>
      <h2 className="s2-card__title" style={{ wordBreak: "keep-all" }}>{title}</h2>
      <div className="s2-card__footer">
        <span className="s2-card__link">{linkLabel} &rarr;</span>
      </div>
    </a>
  )
}

export default function Section02_GlossaryTerms({
  card1Title = "Restoration",
  card1Href = "/resources/glossary/restoration",
  card1LinkLabel = "Read definition",
  card2Title = "Zero Exposure",
  card2Href = "/resources/glossary/zero-exposure",
  card2LinkLabel = "Read definition",
  card3Title = "Enterprise Context Control",
  card3Href = "/resources/glossary/enterprise-context-control",
  card3LinkLabel = "Read definition",
  card4Title = "Structure-Preserving Processing",
  card4Href = "/resources/glossary/structure-preserving-processing",
  card4LinkLabel = "Read definition",
  card5Title = "Restorable Workflow",
  card5Href = "/resources/glossary/restorable-workflow",
  card5LinkLabel = "Read definition",
  card6Title = "Secure LLM Usage",
  card6Href = "/resources/glossary/secure-llm-usage",
  card6LinkLabel = "Read definition",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        .s2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s2-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s2-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .s2-card {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }

        @container (min-width: 1440px) {
          .s2-card { padding: 32px; }
        }

        .s2-card__icon-wrap {
          margin-bottom: 12px;
          color: #5690D4;
        }

        .s2-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }

        .s2-card__footer {
          margin-top: auto;
          padding-top: 16px;
        }

        .s2-card__link {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #636363;
          background: none;
          border: none;
          padding: 8px 0;
          cursor: pointer;
          transition: color 0.15s;
        }

        .s2-card:hover .s2-card__link {
          color: #0f0f0f;
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-grid">
              <GlossaryCard
                title={card1Title}
                href={card1Href}
                linkLabel={card1LinkLabel}
                iconKey="restoration"
              />
              <GlossaryCard
                title={card2Title}
                href={card2Href}
                linkLabel={card2LinkLabel}
                iconKey="zero-exposure"
              />
              <GlossaryCard
                title={card3Title}
                href={card3Href}
                linkLabel={card3LinkLabel}
                iconKey="enterprise-context"
              />
              <GlossaryCard
                title={card4Title}
                href={card4Href}
                linkLabel={card4LinkLabel}
                iconKey="structure-preserving"
              />
              <GlossaryCard
                title={card5Title}
                href={card5Href}
                linkLabel={card5LinkLabel}
                iconKey="restorable-workflow"
              />
              <GlossaryCard
                title={card6Title}
                href={card6Href}
                linkLabel={card6LinkLabel}
                iconKey="secure-llm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_GlossaryTerms, {
  card1Title: {
    type: ControlType.String,
    title: "Card 1: Title",
    defaultValue: "Restoration",
  },
  card1Href: {
    type: ControlType.String,
    title: "Card 1: URL",
    defaultValue: "/resources/glossary/restoration",
  },
  card1LinkLabel: {
    type: ControlType.String,
    title: "Card 1: Link Label",
    defaultValue: "Read definition",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2: Title",
    defaultValue: "Zero Exposure",
  },
  card2Href: {
    type: ControlType.String,
    title: "Card 2: URL",
    defaultValue: "/resources/glossary/zero-exposure",
  },
  card2LinkLabel: {
    type: ControlType.String,
    title: "Card 2: Link Label",
    defaultValue: "Read definition",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3: Title",
    defaultValue: "Enterprise Context Control",
  },
  card3Href: {
    type: ControlType.String,
    title: "Card 3: URL",
    defaultValue: "/resources/glossary/enterprise-context-control",
  },
  card3LinkLabel: {
    type: ControlType.String,
    title: "Card 3: Link Label",
    defaultValue: "Read definition",
  },
  card4Title: {
    type: ControlType.String,
    title: "Card 4: Title",
    defaultValue: "Structure-Preserving Processing",
  },
  card4Href: {
    type: ControlType.String,
    title: "Card 4: URL",
    defaultValue: "/resources/glossary/structure-preserving-processing",
  },
  card4LinkLabel: {
    type: ControlType.String,
    title: "Card 4: Link Label",
    defaultValue: "Read definition",
  },
  card5Title: {
    type: ControlType.String,
    title: "Card 5: Title",
    defaultValue: "Restorable Workflow",
  },
  card5Href: {
    type: ControlType.String,
    title: "Card 5: URL",
    defaultValue: "/resources/glossary/restorable-workflow",
  },
  card5LinkLabel: {
    type: ControlType.String,
    title: "Card 5: Link Label",
    defaultValue: "Read definition",
  },
  card6Title: {
    type: ControlType.String,
    title: "Card 6: Title",
    defaultValue: "Secure LLM Usage",
  },
  card6Href: {
    type: ControlType.String,
    title: "Card 6: URL",
    defaultValue: "/resources/glossary/secure-llm-usage",
  },
  card6LinkLabel: {
    type: ControlType.String,
    title: "Card 6: Link Label",
    defaultValue: "Read definition",
  },
})
