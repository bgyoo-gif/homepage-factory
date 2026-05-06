import { addPropertyControls, ControlType } from "framer"

interface CredCard {
  type: string
  title: string
  org: string
}

interface Props {
  eyebrow?: string
  heading?: string
  description?: string
  card01Type?: string; card01Title?: string; card01Org?: string
  card02Type?: string; card02Title?: string; card02Org?: string
  card03Type?: string; card03Title?: string; card03Org?: string
  card04Type?: string; card04Title?: string; card04Org?: string
  card05Type?: string; card05Title?: string; card05Org?: string
  card06Type?: string; card06Title?: string; card06Org?: string
  card07Type?: string; card07Title?: string; card07Org?: string
  card08Type?: string; card08Title?: string; card08Org?: string
  card09Type?: string; card09Title?: string; card09Org?: string
  card10Type?: string; card10Title?: string; card10Org?: string
  card11Type?: string; card11Title?: string; card11Org?: string
  card12Type?: string; card12Title?: string; card12Org?: string
}

const CERT_TYPES = new Set(["ISO", "KISA", "GS"])
const AWARD_TYPES = new Set(["AWARD"])

function CredIcon({ type }: { type: string }) {
  const t = type.toUpperCase()

  // Shield-check: certifications (ISO, KISA, GS)
  if (CERT_TYPES.has(t)) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  }

  // Trophy: awards
  if (AWARD_TYPES.has(t)) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
        <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <rect x="6" y="2" width="12" height="13" rx="2" />
      </svg>
    )
  }

  // Star: recognition / vendor / marketplace / fallback
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default function Section02_CredentialGrid({
  eyebrow = "Certifications & recognition",
  heading = "12 certifications, awards, and global recognitions",
  description = "From international standards (ISO/IEC) to national certifications (KISA, GS) and category recognition (Gartner, Deutsche Telekom, AWS).",
  card01Type = "ISO",     card01Title = "ISO/IEC 27001",                   card01Org = "Information Security Management",
  card02Type = "ISO",     card02Title = "ISO/IEC 42001",                   card02Org = "AI Management System",
  card03Type = "KISA",    card03Title = "KISA Fast Track",                  card03Org = "Korea Information Security",
  card04Type = "GS",      card04Title = "GS Certification",                 card04Org = "Good Software (Korea)",
  card05Type = "AWARD",   card05Title = "Security Innovation Award",        card05Org = "MSIT (Korea)",
  card06Type = "RECOGNITION", card06Title = "T Challenge 2026 — Top 12",   card06Org = "Deutsche Telekom · Data Security & Governance",
  card07Type = "AWARD",   card07Title = "AI Medical Innovation",            card07Org = "Healthcare AI category",
  card08Type = "RECOGNITION", card08Title = "Startup World Cup",            card08Org = "Global recognition",
  card09Type = "RECOGNITION", card09Title = "Next Rise Global Innovator",   card09Org = "Korea-Global innovation showcase",
  card10Type = "VENDOR",  card10Title = "Gartner Vendor",                   card10Org = "AI / data category recognition",
  card11Type = "RECOGNITION", card11Title = "Emerging AI+X Top 100",        card11Org = "Korea AI excellence",
  card12Type = "MARKETPLACE", card12Title = "AWS Marketplace",              card12Org = "Listed and procurable",
}: Props) {

  const cards: CredCard[] = [
    { type: card01Type, title: card01Title, org: card01Org },
    { type: card02Type, title: card02Title, org: card02Org },
    { type: card03Type, title: card03Title, org: card03Org },
    { type: card04Type, title: card04Title, org: card04Org },
    { type: card05Type, title: card05Title, org: card05Org },
    { type: card06Type, title: card06Title, org: card06Org },
    { type: card07Type, title: card07Title, org: card07Org },
    { type: card08Type, title: card08Title, org: card08Org },
    { type: card09Type, title: card09Title, org: card09Org },
    { type: card10Type, title: card10Title, org: card10Org },
    { type: card11Type, title: card11Title, org: card11Org },
    { type: card12Type, title: card12Title, org: card12Org },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .s2-root { width: 100%; container-type: inline-size; }

        .s2-section {
          padding: var(--s-section, clamp(64px, 8cqi, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s2-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .s2-eyebrow {
          display: inline-block;
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .s2-h2 {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(24px, 2.8cqi, 38px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .s2-desc {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: clamp(15px, 1.2cqi, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s2-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        @container (min-width: 600px) {
          .s2-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        @container (min-width: 900px) {
          .s2-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .s2-desc { max-width: 860px; }
        }

        .s2-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 18px;
          text-align: center;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .s2-card__icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--r-sm, 6px);
          background: var(--c-bg-soft, #f7f8fb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .s2-card__type {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          color: var(--c-muted, #6b7280);
          letter-spacing: 0.1em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .s2-card__name {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
          color: var(--c-ink, #0f1130);
        }

        .s2-card__detail {
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 11px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.4;
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <div className="s2-head">
              <div className="s2-eyebrow">{eyebrow}</div>
              <h2 className="s2-h2">{heading}</h2>
              <p className="s2-desc">{description}</p>
            </div>

            <div className="s2-grid">
              {cards.map((card, i) => (
                <article key={i} className="s2-card">
                  <div className="s2-card__icon-wrap">
                    <CredIcon type={card.type} />
                  </div>
                  <span className="s2-card__type">{card.type}</span>
                  <div className="s2-card__name">{card.title}</div>
                  <div className="s2-card__detail">{card.org}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_CredentialGrid, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Certifications & recognition" },
  heading: { type: ControlType.String, title: "Heading", defaultValue: "12 certifications, awards, and global recognitions" },
  description: { type: ControlType.String, title: "Description", defaultValue: "From international standards (ISO/IEC) to national certifications (KISA, GS) and category recognition (Gartner, Deutsche Telekom, AWS).", displayTextArea: true },
  card01Type: { type: ControlType.String, title: "Card 01 Type", defaultValue: "ISO" },
  card01Title: { type: ControlType.String, title: "Card 01 Title", defaultValue: "ISO/IEC 27001" },
  card01Org: { type: ControlType.String, title: "Card 01 Org", defaultValue: "Information Security Management" },
  card02Type: { type: ControlType.String, title: "Card 02 Type", defaultValue: "ISO" },
  card02Title: { type: ControlType.String, title: "Card 02 Title", defaultValue: "ISO/IEC 42001" },
  card02Org: { type: ControlType.String, title: "Card 02 Org", defaultValue: "AI Management System" },
  card03Type: { type: ControlType.String, title: "Card 03 Type", defaultValue: "KISA" },
  card03Title: { type: ControlType.String, title: "Card 03 Title", defaultValue: "KISA Fast Track" },
  card03Org: { type: ControlType.String, title: "Card 03 Org", defaultValue: "Korea Information Security" },
  card04Type: { type: ControlType.String, title: "Card 04 Type", defaultValue: "GS" },
  card04Title: { type: ControlType.String, title: "Card 04 Title", defaultValue: "GS Certification" },
  card04Org: { type: ControlType.String, title: "Card 04 Org", defaultValue: "Good Software (Korea)" },
  card05Type: { type: ControlType.String, title: "Card 05 Type", defaultValue: "AWARD" },
  card05Title: { type: ControlType.String, title: "Card 05 Title", defaultValue: "Security Innovation Award" },
  card05Org: { type: ControlType.String, title: "Card 05 Org", defaultValue: "MSIT (Korea)" },
  card06Type: { type: ControlType.String, title: "Card 06 Type", defaultValue: "RECOGNITION" },
  card06Title: { type: ControlType.String, title: "Card 06 Title", defaultValue: "T Challenge 2026 — Top 12" },
  card06Org: { type: ControlType.String, title: "Card 06 Org", defaultValue: "Deutsche Telekom · Data Security & Governance" },
  card07Type: { type: ControlType.String, title: "Card 07 Type", defaultValue: "AWARD" },
  card07Title: { type: ControlType.String, title: "Card 07 Title", defaultValue: "AI Medical Innovation" },
  card07Org: { type: ControlType.String, title: "Card 07 Org", defaultValue: "Healthcare AI category" },
  card08Type: { type: ControlType.String, title: "Card 08 Type", defaultValue: "RECOGNITION" },
  card08Title: { type: ControlType.String, title: "Card 08 Title", defaultValue: "Startup World Cup" },
  card08Org: { type: ControlType.String, title: "Card 08 Org", defaultValue: "Global recognition" },
  card09Type: { type: ControlType.String, title: "Card 09 Type", defaultValue: "RECOGNITION" },
  card09Title: { type: ControlType.String, title: "Card 09 Title", defaultValue: "Next Rise Global Innovator" },
  card09Org: { type: ControlType.String, title: "Card 09 Org", defaultValue: "Korea-Global innovation showcase" },
  card10Type: { type: ControlType.String, title: "Card 10 Type", defaultValue: "VENDOR" },
  card10Title: { type: ControlType.String, title: "Card 10 Title", defaultValue: "Gartner Vendor" },
  card10Org: { type: ControlType.String, title: "Card 10 Org", defaultValue: "AI / data category recognition" },
  card11Type: { type: ControlType.String, title: "Card 11 Type", defaultValue: "RECOGNITION" },
  card11Title: { type: ControlType.String, title: "Card 11 Title", defaultValue: "Emerging AI+X Top 100" },
  card11Org: { type: ControlType.String, title: "Card 11 Org", defaultValue: "Korea AI excellence" },
  card12Type: { type: ControlType.String, title: "Card 12 Type", defaultValue: "MARKETPLACE" },
  card12Title: { type: ControlType.String, title: "Card 12 Title", defaultValue: "AWS Marketplace" },
  card12Org: { type: ControlType.String, title: "Card 12 Org", defaultValue: "Listed and procurable" },
})
