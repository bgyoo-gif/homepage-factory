import { addPropertyControls, ControlType } from "framer"

interface IndustryCard {
  icon: string
  title: string
  description: string
  blockedText: string
  enabledText: string
  tags: string[]
}

interface Props {
  sectionTitle?: string
  sectionDescription?: string
  blockedLabel?: string
  enabledLabel?: string
  card1Title?: string
  card1Description?: string
  card1Blocked?: string
  card1Enabled?: string
  card1Tags?: string
  card2Title?: string
  card2Description?: string
  card2Blocked?: string
  card2Enabled?: string
  card2Tags?: string
  card3Title?: string
  card3Description?: string
  card3Blocked?: string
  card3Enabled?: string
  card3Tags?: string
  card4Title?: string
  card4Description?: string
  card4Blocked?: string
  card4Enabled?: string
  card4Tags?: string
  card5Title?: string
  card5Description?: string
  card5Blocked?: string
  card5Enabled?: string
  card5Tags?: string
  card6Title?: string
  card6Description?: string
  card6Blocked?: string
  card6Enabled?: string
  card6Tags?: string
}

export default function Section02_IndustryUseCases({
  sectionTitle = "How Each Industry Uses LLM Capsule",
  blockedLabel = "Blocked",
  enabledLabel = "Enabled",
  sectionDescription = "Regulated industries can now adopt AI on real enterprise data. See how each industry uses LLM Capsule to enable AI while protecting sensitive information.",
  card1Title = "Public Sector",
  card1Description = "Uses AI to draft operational briefings, no classified info ever reaches external servers.",
  card1Blocked = "Military personnel data, classified operation details & security-grade documents",
  card1Enabled = "AI-assisted intelligence reports & briefing summaries — with full audit trail",
  card1Tags = "Ministry of National Defense (South Korea)",
  card2Title = "Finance / Insurance",
  card2Description = "Uses AI to streamline claim reviews, policyholder data stays fully protected.",
  card2Blocked = "Policyholder names, claim records & credit information in prompts",
  card2Enabled = "AI-powered insurance claim analysis & underwriting reports — no customer data leaves",
  card2Tags = "Kyobo|DB Insurance",
  card3Title = "Healthcare",
  card3Description = "Uses AI to summarize patient records, PHI never touches an external server.",
  card3Blocked = "Patient names, diagnoses & medical record IDs",
  card3Enabled = "AI-generated clinical summaries & radiology reports — PHI stays local",
  card3Tags = "Ewha Womans University Medical Center",
  card4Title = "Legal",
  card4Description = "Drafts court documents with AI, no case info leaves the firm.",
  card4Blocked = "Client names, case details & privileged information",
  card4Enabled = "AI-drafted memos, briefs & contract reviews — fully contained",
  card4Tags = "Shin&Kim",
  card5Title = "Telecom",
  card5Description = "Leverage AI across operations, customer and network data fully de-identified.",
  card5Blocked = "Subscriber identities, call records, IP addresses & network configs",
  card5Enabled = "AI-driven customer analysis & network operations — all data de-identified before use",
  card5Tags = "SK Telecom|Deutsche Telekom|T Challenge 2026 Top 12",
  card6Title = "Network Security",
  card6Description = "Enables industrial clients to use public AI with all sensitive operational data protected.",
  card6Blocked = "Internal system data, vulnerability reports & infrastructure details in prompts",
  card6Enabled = "Regulated industries can safely adopt public LLMs — sensitive info de-identified at the gate",
  card6Tags = "Claroty",
}: Props) {
  const cards = [
    {
      title: card1Title,
      description: card1Description,
      blocked: card1Blocked,
      enabled: card1Enabled,
      tags: card1Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="M2 20h20"/>
          <path d="M5 20v-8h4v8"/>
          <path d="M15 20v-8h4v8"/>
          <path d="M12 4l-8 8h16l-8-8z"/>
        </>
      ),
    },
    {
      title: card2Title,
      description: card2Description,
      blocked: card2Blocked,
      enabled: card2Enabled,
      tags: card2Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
        </>
      ),
    },
    {
      title: card3Title,
      description: card3Description,
      blocked: card3Blocked,
      enabled: card3Enabled,
      tags: card3Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
        </>
      ),
    },
    {
      title: card4Title,
      description: card4Description,
      blocked: card4Blocked,
      enabled: card4Enabled,
      tags: card4Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
          <path d="M7 21h10"/><path d="M12 3v18"/>
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
        </>
      ),
    },
    {
      title: card5Title,
      description: card5Description,
      blocked: card5Blocked,
      enabled: card5Enabled,
      tags: card5Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="M2 12 7 2"/><path d="m7 12 5-10"/>
          <path d="m12 12 5-10"/><path d="m17 12 5-10"/>
          <path d="M4.5 7h15"/><path d="M12 16v6"/>
        </>
      ),
    },
    {
      title: card6Title,
      description: card6Description,
      blocked: card6Blocked,
      enabled: card6Enabled,
      tags: card6Tags.split("|").filter(Boolean),
      svgPath: (
        <>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
          <path d="m9 12 2 2 4-4"/>
        </>
      ),
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s2-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s2;
        }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }
        .s2-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s2-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        .s2-title-brand {
          color: #5690D4;
        }
        .s2-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s2-section-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s2-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .s2-card-icon-wrap {
          margin-bottom: 12px;
          color: #5690D4;
        }
        .s2-card-icon {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s2-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .s2-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2-divider {
          border: none;
          border-top: 1px solid #e6e7e9;
          margin: 16px 0;
        }
        .s2-states {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s2-state {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 12px;
          border-radius: 5px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.5;
        }
        .s2-state--blocked {
          background-color: #f2f2f2;
          color: #636363;
        }
        .s2-state--enabled {
          background-color: rgba(14,130,76,0.06);
          color: #0f0f0f;
        }
        .s2-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 10px;
          padding: 2px 6px;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .s2-badge--error {
          background-color: rgba(255,48,48,0.12);
          color: #ff3030;
        }
        .s2-badge--success {
          background-color: rgba(14,130,76,0.12);
          color: #0e824c;
        }
        .s2-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .s2-tag {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #9c9c9c;
          background-color: #f2f2f2;
          padding: 2px 10px;
          border-radius: 9999px;
        }

        @container s2 (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s2-section-title { font-size: 22px; }
        }
        @container s2 (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-card-grid { grid-template-columns: repeat(3, 1fr); }
          .s2-section-title { font-size: 24px; }
          .s2-section-desc { max-width: 720px; }
          .s2-card { padding: 32px; }
        }
        @container s2 (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-section-title { font-size: 28px; }
          .s2-section-desc { max-width: 1080px; }
        }
      `}</style>
      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-section-header">
              <h2 className="s2-section-title" style={{ wordBreak: "keep-all" }}>{sectionTitle}</h2>
              <p className="s2-section-desc">{sectionDescription}</p>
            </div>

            <div className="s2-card-grid">
              {cards.map((card, i) => (
                <div key={i} className="s2-card">
                  <div className="s2-card-icon-wrap">
                    <svg className="s2-card-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.svgPath}
                    </svg>
                  </div>
                  <h3 className="s2-card-title">{card.title}</h3>
                  <p className="s2-card-desc">{card.description}</p>
                  <hr className="s2-divider" />
                  <div className="s2-states">
                    <div className="s2-state s2-state--blocked">
                      <span className="s2-badge s2-badge--error">{blockedLabel}</span>
                      <span>{card.blocked}</span>
                    </div>
                    <div className="s2-state s2-state--enabled">
                      <span className="s2-badge s2-badge--success">{enabledLabel}</span>
                      <span>{card.enabled}</span>
                    </div>
                  </div>
                  <div className="s2-tags">
                    {card.tags.map((tag, j) => (
                      <span key={j} className="s2-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_IndustryUseCases, {
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "How Each Industry Uses LLM Capsule",
  },
  blockedLabel: {
    type: ControlType.String,
    title: "Blocked Label",
    defaultValue: "Blocked",
  },
  enabledLabel: {
    type: ControlType.String,
    title: "Enabled Label",
    defaultValue: "Enabled",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue:
      "Regulated industries can now adopt AI on real enterprise data. See how each industry uses LLM Capsule to enable AI while protecting sensitive information.",
    displayTextArea: true,
  },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Public Sector" },
  card1Description: { type: ControlType.String, title: "Card 1 Desc", defaultValue: "Uses AI to draft operational briefings, no classified info ever reaches external servers.", displayTextArea: true },
  card1Blocked: { type: ControlType.String, title: "Card 1 Blocked", defaultValue: "Military personnel data, classified operation details & security-grade documents", displayTextArea: true },
  card1Enabled: { type: ControlType.String, title: "Card 1 Enabled", defaultValue: "AI-assisted intelligence reports & briefing summaries — with full audit trail", displayTextArea: true },
  card1Tags: { type: ControlType.String, title: "Card 1 Tags (pipe separated)", defaultValue: "Ministry of National Defense (South Korea)" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Finance / Insurance" },
  card2Description: { type: ControlType.String, title: "Card 2 Desc", defaultValue: "Uses AI to streamline claim reviews, policyholder data stays fully protected.", displayTextArea: true },
  card2Blocked: { type: ControlType.String, title: "Card 2 Blocked", defaultValue: "Policyholder names, claim records & credit information in prompts", displayTextArea: true },
  card2Enabled: { type: ControlType.String, title: "Card 2 Enabled", defaultValue: "AI-powered insurance claim analysis & underwriting reports — no customer data leaves", displayTextArea: true },
  card2Tags: { type: ControlType.String, title: "Card 2 Tags", defaultValue: "Kyobo|DB Insurance" },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Healthcare" },
  card3Description: { type: ControlType.String, title: "Card 3 Desc", defaultValue: "Uses AI to summarize patient records, PHI never touches an external server.", displayTextArea: true },
  card3Blocked: { type: ControlType.String, title: "Card 3 Blocked", defaultValue: "Patient names, diagnoses & medical record IDs", displayTextArea: true },
  card3Enabled: { type: ControlType.String, title: "Card 3 Enabled", defaultValue: "AI-generated clinical summaries & radiology reports — PHI stays local", displayTextArea: true },
  card3Tags: { type: ControlType.String, title: "Card 3 Tags", defaultValue: "Ewha Womans University Medical Center" },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "Legal" },
  card4Description: { type: ControlType.String, title: "Card 4 Desc", defaultValue: "Drafts court documents with AI, no case info leaves the firm.", displayTextArea: true },
  card4Blocked: { type: ControlType.String, title: "Card 4 Blocked", defaultValue: "Client names, case details & privileged information", displayTextArea: true },
  card4Enabled: { type: ControlType.String, title: "Card 4 Enabled", defaultValue: "AI-drafted memos, briefs & contract reviews — fully contained", displayTextArea: true },
  card4Tags: { type: ControlType.String, title: "Card 4 Tags", defaultValue: "Shin&Kim" },
  card5Title: { type: ControlType.String, title: "Card 5 Title", defaultValue: "Telecom" },
  card5Description: { type: ControlType.String, title: "Card 5 Desc", defaultValue: "Leverage AI across operations, customer and network data fully de-identified.", displayTextArea: true },
  card5Blocked: { type: ControlType.String, title: "Card 5 Blocked", defaultValue: "Subscriber identities, call records, IP addresses & network configs", displayTextArea: true },
  card5Enabled: { type: ControlType.String, title: "Card 5 Enabled", defaultValue: "AI-driven customer analysis & network operations — all data de-identified before use", displayTextArea: true },
  card5Tags: { type: ControlType.String, title: "Card 5 Tags", defaultValue: "SK Telecom|Deutsche Telekom|T Challenge 2026 Top 12" },
  card6Title: { type: ControlType.String, title: "Card 6 Title", defaultValue: "Network Security" },
  card6Description: { type: ControlType.String, title: "Card 6 Desc", defaultValue: "Enables industrial clients to use public AI with all sensitive operational data protected.", displayTextArea: true },
  card6Blocked: { type: ControlType.String, title: "Card 6 Blocked", defaultValue: "Internal system data, vulnerability reports & infrastructure details in prompts", displayTextArea: true },
  card6Enabled: { type: ControlType.String, title: "Card 6 Enabled", defaultValue: "Regulated industries can safely adopt public LLMs — sensitive info de-identified at the gate", displayTextArea: true },
  card6Tags: { type: ControlType.String, title: "Card 6 Tags", defaultValue: "Claroty" },
})
