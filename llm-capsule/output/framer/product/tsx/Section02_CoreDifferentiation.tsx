import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandPrimary:    "#1821E8",
  brandSecondary:  "#5690D4",
  textPrimary:     "#0f0f0f",
  textSecondary:   "#636363",
  textTertiary:    "#9c9c9c",
  white:           "#ffffff",
  borderDefault:   "#e6e7e9",
  surfaceWhite:    "#ffffff",
  brandTintLight:  "rgba(24, 33, 232, 0.06)",
  shadowCard:      "0px 24px 40px rgba(0, 0, 0, 0.04)",
}

const CARD_ICONS = [
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></>,
  <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></>,
  <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  <><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></>,
]

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  bannerText?: string
  card1Category?: string
  card1Title?: string
  card1Desc?: string
  card2Category?: string
  card2Title?: string
  card2Desc?: string
  card3Category?: string
  card3Title?: string
  card3Desc?: string
  card4Category?: string
  card4Title?: string
  card4Desc?: string
  card5Category?: string
  card5Title?: string
  card5Desc?: string
}

export default function Section02_CoreDifferentiation({
  sectionTitle = "Enterprise AI enablement through five core",
  sectionTitleBrand = "capabilities",
  sectionDescription = "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 architecture — three core enablement capabilities plus structure-preserving processing and cross-model execution.",
  bannerText = "These capabilities let enterprises adopt AI without sacrificing data protection or workflow usability. This is what separates enterprise AI enablement from traditional masking tools.",
  card1Category = "Core 1",
  card1Title = "Zero Exposure",
  card1Desc = "Sensitive data is encapsulated locally before leaving the environment. Raw data never reaches external AI services. Even if the provider logged or stored the data, no enterprise information would be exposed.",
  card2Category = "Core 2",
  card2Title = "Restoration",
  card2Desc = "AI outputs are auto-restored locally with real data into usable enterprise documents after processing. Restored outputs work directly in reports, claims documents, legal reviews, and internal analysis — no manual reconstruction required.",
  card3Category = "Core 3",
  card3Title = "Enterprise Context",
  card3Desc = "Organizations can define sensitive entities beyond standard PII — project names, internal identifiers, customer-specific confidential markers, and contract references. Context-aware data control adapts to your business.",
  card4Category = "+1",
  card4Title = "Structure-Preserving",
  card4Desc = "Tables, diagrams, cross-references, and document layouts remain intact during encapsulation. AI receives structurally complete documents that enable accurate extraction and analysis.",
  card5Category = "+2",
  card5Title = "Cross-Model Execution",
  card5Desc = "Model-agnostic by design. Use any LLM — ChatGPT, Claude, Gemini, Perplexity, or any API — without vendor lock-in. Protection stays consistent regardless of which model you choose.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s2-inner { width: 100%; container-type: inline-size; }
        .s2-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        .s2-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s2-header { text-align: left; } }
        .s2-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px;
          margin: 0 0 16px; text-wrap: balance;
        }
        @container (min-width: 768px)  { .s2-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s2-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s2-header__title { font-size: 28px; } }
        .s2-header__brand { color: ${PALETTE.brandSecondary}; }
        .s2-header__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px; color: ${PALETTE.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
          word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s2-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s2-header__desc { max-width: 1080px; } }

        /* Case Study Card Grid */
        .s2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) {
          .s2-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Case Study Card */
        .s2-cs-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          box-shadow: ${PALETTE.shadowCard};
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 0;
          padding: 0;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .s2-cs-card { grid-template-columns: 1fr; }
          .s2-cs-card__left {
            border-right: none !important;
            border-bottom: 1px solid ${PALETTE.borderDefault};
            flex-direction: row !important;
            justify-content: flex-start !important;
            padding: 16px !important;
          }
        }
        .s2-cs-card__left {
          background: transparent;
          border-right: 1px solid ${PALETTE.borderDefault};
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 8px;
        }
        .s2-cs-card__left svg {
          width: 32px; height: 32px;
          stroke: ${PALETTE.textPrimary}; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s2-cs-card__left-category {
          font-family: "DM Sans", sans-serif;
          font-size: 10px; color: ${PALETTE.textSecondary};
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .s2-cs-card__left-title {
          font-family: "DM Sans", sans-serif;
          font-size: 12px; font-weight: 700;
          color: ${PALETTE.textPrimary}; line-height: 1.2;
        }
        .s2-cs-card__right {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s2-cs-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px; font-weight: 700;
          color: ${PALETTE.textPrimary}; line-height: 1.2;
          margin: 0;
        }
        .s2-cs-card__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px; color: ${PALETTE.textSecondary};
          line-height: 1.7; margin: 0;
          word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty;
        }

        /* Banner */
        .s2-banner {
          margin-top: 48px;
          padding: 16px 24px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.brandTintLight};
          font-family: "DM Sans", sans-serif;
          font-size: 14px; line-height: 1.7;
          text-align: center; color: ${PALETTE.textSecondary};
          word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty;
        }
      `}</style>
      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2 className="s2-header__title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle} <span className="s2-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s2-header__desc">{sectionDescription}</p>
            </div>

            <div className="s2-grid">
              {[
                { category: card1Category, title: card1Title, desc: card1Desc, icon: CARD_ICONS[0] },
                { category: card2Category, title: card2Title, desc: card2Desc, icon: CARD_ICONS[1] },
                { category: card3Category, title: card3Title, desc: card3Desc, icon: CARD_ICONS[2] },
                { category: card4Category, title: card4Title, desc: card4Desc, icon: CARD_ICONS[3] },
                { category: card5Category, title: card5Title, desc: card5Desc, icon: CARD_ICONS[4] },
              ].map((card, i) => (
                <article key={i} className="s2-cs-card">
                  <div className="s2-cs-card__left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                    <span className="s2-cs-card__left-category">{card.category}</span>
                    <span className="s2-cs-card__left-title">{card.title}</span>
                  </div>
                  <div className="s2-cs-card__right">
                    <h3 className="s2-cs-card__title">{card.title}</h3>
                    <p className="s2-cs-card__desc">{card.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="s2-banner">{bannerText}</div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_CoreDifferentiation, {
  sectionTitle:       { type: ControlType.String, title: "Title",         defaultValue: "Enterprise AI enablement through five core" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)", defaultValue: "capabilities" },
  sectionDescription: { type: ControlType.String, title: "Description",   defaultValue: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 architecture — three core enablement capabilities plus structure-preserving processing and cross-model execution.", displayTextArea: true },
  bannerText:         { type: ControlType.String, title: "Banner",        defaultValue: "These capabilities let enterprises adopt AI without sacrificing data protection or workflow usability. This is what separates enterprise AI enablement from traditional masking tools.", displayTextArea: true },
  card1Category: { type: ControlType.String, title: "Card 1 Category", defaultValue: "Core 1" },
  card1Title:    { type: ControlType.String, title: "Card 1 Title",    defaultValue: "Zero Exposure" },
  card1Desc:     { type: ControlType.String, title: "Card 1 Desc",     defaultValue: "Sensitive data is encapsulated locally before leaving the environment. Raw data never reaches external AI services. Even if the provider logged or stored the data, no enterprise information would be exposed.", displayTextArea: true },
  card2Category: { type: ControlType.String, title: "Card 2 Category", defaultValue: "Core 2" },
  card2Title:    { type: ControlType.String, title: "Card 2 Title",    defaultValue: "Restoration" },
  card2Desc:     { type: ControlType.String, title: "Card 2 Desc",     defaultValue: "AI outputs are auto-restored locally with real data into usable enterprise documents after processing. Restored outputs work directly in reports, claims documents, legal reviews, and internal analysis — no manual reconstruction required.", displayTextArea: true },
  card3Category: { type: ControlType.String, title: "Card 3 Category", defaultValue: "Core 3" },
  card3Title:    { type: ControlType.String, title: "Card 3 Title",    defaultValue: "Enterprise Context" },
  card3Desc:     { type: ControlType.String, title: "Card 3 Desc",     defaultValue: "Organizations can define sensitive entities beyond standard PII — project names, internal identifiers, customer-specific confidential markers, and contract references. Context-aware data control adapts to your business.", displayTextArea: true },
  card4Category: { type: ControlType.String, title: "Card 4 Category", defaultValue: "+1" },
  card4Title:    { type: ControlType.String, title: "Card 4 Title",    defaultValue: "Structure-Preserving" },
  card4Desc:     { type: ControlType.String, title: "Card 4 Desc",     defaultValue: "Tables, diagrams, cross-references, and document layouts remain intact during encapsulation. AI receives structurally complete documents that enable accurate extraction and analysis.", displayTextArea: true },
  card5Category: { type: ControlType.String, title: "Card 5 Category", defaultValue: "+2" },
  card5Title:    { type: ControlType.String, title: "Card 5 Title",    defaultValue: "Cross-Model Execution" },
  card5Desc:     { type: ControlType.String, title: "Card 5 Desc",     defaultValue: "Model-agnostic by design. Use any LLM — ChatGPT, Claude, Gemini, Perplexity, or any API — without vendor lock-in. Protection stays consistent regardless of which model you choose.", displayTextArea: true },
})
