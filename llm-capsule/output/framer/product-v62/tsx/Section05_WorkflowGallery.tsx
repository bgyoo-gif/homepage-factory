import { addPropertyControls, ControlType } from "framer"

// ─── Image fallbacks ───────────────────────────────────────────────
const DEFAULT_IMG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png"

interface GalleryCardProps {
  industryTag?: string
  title?: string
  description?: string
  customerName?: string
  screenshot?: string
}

interface Props {
  eyebrow?: string
  heading?: string
  subheading?: string

  card1IndustryTag?: string
  card1Title?: string
  card1Description?: string
  card1CustomerName?: string
  card1Screenshot?: string

  card2IndustryTag?: string
  card2Title?: string
  card2Description?: string
  card2CustomerName?: string
  card2Screenshot?: string

  card3IndustryTag?: string
  card3Title?: string
  card3Description?: string
  card3CustomerName?: string
  card3Screenshot?: string

  card4IndustryTag?: string
  card4Title?: string
  card4Description?: string
  card4CustomerName?: string
  card4Screenshot?: string
}

function GalleryCard({
  industryTag,
  title,
  description,
  customerName,
  screenshot,
}: GalleryCardProps) {
  const resolvedImg = screenshot || DEFAULT_IMG
  return (
    <article className="s5-card">
      <div
        className="s5-card__image"
        style={{ backgroundImage: `url('${resolvedImg}')` }}
        aria-hidden="true"
      />
      <div className="s5-card__body">
        <div className="s5-card__industry">{industryTag}</div>
        <h3 className="s5-card__h">{title}</h3>
        <p className="s5-card__d">{description}</p>
        <div className="s5-card__customer">{customerName}</div>
      </div>
    </article>
  )
}

export default function Section05_WorkflowGallery({
  eyebrow = "Workflow gallery",
  heading = "Same product. Six industries. Real customers.",
  subheading = "Each card below is a real workflow LLM Capsule runs in production. Click for the full case story.",

  card1IndustryTag = "Telecom",
  card1Title = "NOC incident analysis on production traffic",
  card1Description = "RCA generation on live ticket data with device IDs, circuit IDs, site references, alarm sequences, SLA-impact references, and subscriber identifiers encapsulated locally. No raw operational data exposure to external LLMs.",
  card1CustomerName = "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12",
  card1Screenshot = "",

  card2IndustryTag = "Healthcare",
  card2Title = "Radiology report drafting with PHI never leaving",
  card2Description = "AI drafts radiology summaries from real clinical workflows. PHI encapsulated locally; restoration happens inside the hospital network. HIPAA-aligned.",
  card2CustomerName = "Ewha Womans University Medical Center (EUMC)",
  card2Screenshot = "",

  card3IndustryTag = "Finance / Insurance",
  card3Title = "AI claims processing with real customer data",
  card3Description = "AI-powered claim classification, damage assessment, and fraud detection on real policyholder data. No customer data leaves the insurer's environment.",
  card3CustomerName = "Kyobo · DB Insurance · IBK",
  card3Screenshot = "",

  card4IndustryTag = "Public Sector / Defense",
  card4Title = "Mission brief drafting on classified workflows",
  card4Description = "AI drafts intelligence briefs and operational summaries on classified data. On-prem local execution path — zero external transmission. Full audit trail under command control.",
  card4CustomerName = "Ministry of National Defense (South Korea)",
  card4Screenshot = "",
}: Props) {
  const cards: GalleryCardProps[] = [
    {
      industryTag: card1IndustryTag,
      title: card1Title,
      description: card1Description,
      customerName: card1CustomerName,
      screenshot: card1Screenshot,
    },
    {
      industryTag: card2IndustryTag,
      title: card2Title,
      description: card2Description,
      customerName: card2CustomerName,
      screenshot: card2Screenshot,
    },
    {
      industryTag: card3IndustryTag,
      title: card3Title,
      description: card3Description,
      customerName: card3CustomerName,
      screenshot: card3Screenshot,
    },
    {
      industryTag: card4IndustryTag,
      title: card4Title,
      description: card4Description,
      customerName: card4CustomerName,
      screenshot: card4Screenshot,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s5-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .s5-section {
          width: 100%;
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }

        .s5-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── Section Header ── */
        .s5-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s5-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s5-header h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s5-header p {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Grid ── */
        .s5-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @container (min-width: 640px) {
          .s5-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* ── Card ── */
        .s5-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .s5-card__image {
          aspect-ratio: 16 / 10;
          background-color: var(--c-bg-soft, #f7f8fb);
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .s5-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .s5-card__industry {
          font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          color: var(--c-primary-dark, #3b2fbf);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .s5-card__h {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.01em;
        }

        .s5-card__d {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
          margin-bottom: 12px;
          flex: 1;
        }

        .s5-card__customer {
          font-size: 12px;
          padding-top: 12px;
          border-top: 1px dashed var(--c-rule, #e5e7eb);
          color: var(--c-ink, #0f1130);
          font-weight: 600;
        }
      `}</style>

      <div className="s5-root">
        <section className="s5-section">
          <div className="s5-container">
            <div className="s5-header">
              <span className="s5-eyebrow">{eyebrow}</span>
              <h2>{heading}</h2>
              <p>{subheading}</p>
            </div>

            <div className="s5-grid">
              {cards.map((card, i) => (
                <GalleryCard key={i} {...card} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section05_WorkflowGallery, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Workflow gallery",
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Same product. Six industries. Real customers.",
  },
  subheading: {
    type: ControlType.String,
    title: "Subheading",
    defaultValue:
      "Each card below is a real workflow LLM Capsule runs in production. Click for the full case story.",
  },

  // Card 1
  card1IndustryTag: {
    type: ControlType.String,
    title: "Card 1 — Industry",
    defaultValue: "Telecom",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 — Title",
    defaultValue: "NOC incident analysis on production traffic",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 — Description",
    defaultValue:
      "RCA generation on live ticket data with device IDs, circuit IDs, site references, alarm sequences, SLA-impact references, and subscriber identifiers encapsulated locally. No raw operational data exposure to external LLMs.",
  },
  card1CustomerName: {
    type: ControlType.String,
    title: "Card 1 — Customer",
    defaultValue:
      "SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12",
  },
  card1Screenshot: {
    type: ControlType.Image,
    title: "Card 1 — Screenshot",
  },

  // Card 2
  card2IndustryTag: {
    type: ControlType.String,
    title: "Card 2 — Industry",
    defaultValue: "Healthcare",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 — Title",
    defaultValue: "Radiology report drafting with PHI never leaving",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 — Description",
    defaultValue:
      "AI drafts radiology summaries from real clinical workflows. PHI encapsulated locally; restoration happens inside the hospital network. HIPAA-aligned.",
  },
  card2CustomerName: {
    type: ControlType.String,
    title: "Card 2 — Customer",
    defaultValue: "Ewha Womans University Medical Center (EUMC)",
  },
  card2Screenshot: {
    type: ControlType.Image,
    title: "Card 2 — Screenshot",
  },

  // Card 3
  card3IndustryTag: {
    type: ControlType.String,
    title: "Card 3 — Industry",
    defaultValue: "Finance / Insurance",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 — Title",
    defaultValue: "AI claims processing with real customer data",
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 — Description",
    defaultValue:
      "AI-powered claim classification, damage assessment, and fraud detection on real policyholder data. No customer data leaves the insurer's environment.",
  },
  card3CustomerName: {
    type: ControlType.String,
    title: "Card 3 — Customer",
    defaultValue: "Kyobo · DB Insurance · IBK",
  },
  card3Screenshot: {
    type: ControlType.Image,
    title: "Card 3 — Screenshot",
  },

  // Card 4
  card4IndustryTag: {
    type: ControlType.String,
    title: "Card 4 — Industry",
    defaultValue: "Public Sector / Defense",
  },
  card4Title: {
    type: ControlType.String,
    title: "Card 4 — Title",
    defaultValue: "Mission brief drafting on classified workflows",
  },
  card4Description: {
    type: ControlType.String,
    title: "Card 4 — Description",
    defaultValue:
      "AI drafts intelligence briefs and operational summaries on classified data. On-prem local execution path — zero external transmission. Full audit trail under command control.",
  },
  card4CustomerName: {
    type: ControlType.String,
    title: "Card 4 — Customer",
    defaultValue: "Ministry of National Defense (South Korea)",
  },
  card4Screenshot: {
    type: ControlType.Image,
    title: "Card 4 — Screenshot",
  },
})
