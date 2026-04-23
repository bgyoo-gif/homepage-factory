import { addPropertyControls, ControlType } from "framer"

const P = {
  brandPrimary:   "#3061f2",
  brandPurple:    "#725bea",
  brandPurpleLt:  "#c6c5fa",
  neutral025: "#f7f7f7",
  white: "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  success: "#0e824c",
  error:   "#ff3030",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
  surfaceLight: "#f7f7f7",
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  card1Badge?: string
  card1Title?: string
  card1Description?: string
  card1Tag?: string
  card2Badge?: string
  card2Title?: string
  card2Description?: string
  card2Tag?: string
  card3Badge?: string
  card3Title?: string
  card3Description?: string
  card3Tag?: string
  bannerBoldLabel?: string
  bannerBodyText?: string
  bannerLinkLabel?: string
  bannerLinkHref?: string
}

export default function Section03_WhyDifferent({
  sectionTitle = "Not masking. Not a gateway. A data layer that produces",
  sectionTitleHighlight = "usable AI output.",
  sectionDescription = "Enterprise teams evaluate three approaches to using AI on sensitive data. Only one produces outputs that go directly into workflows.",
  card1Badge = "DATA MASKING",
  card1Title = "Permanently removes data",
  card1Description = "Masking strips sensitive fields. AI receives incomplete input and returns outputs with [REDACTED] gaps. Manual reconstruction required. Structure broken. Usable output: no.",
  card1Tag = "Protects data · Destroys output",
  card2Badge = "PROMPT GATEWAY",
  card2Title = "Filters at the API level",
  card2Description = "Gateways scan prompts and block or strip flagged content. No document-level protection, no RAG/batch coverage, no output restoration. A filter, not a data layer.",
  card2Tag = "Filters prompts · No restoration",
  card3Badge = "LLM CAPSULE",
  card3Title = "Encapsulates, processes, restores",
  card3Description = "Operates at the data layer. Encapsulates sensitive entities with structure-preserving tokens. AI receives complete documents. Outputs restored with original data automatically. Enterprise-ready results.",
  card3Tag = "Protects data · Produces usable output",
  bannerBoldLabel = "Why restoration matters:",
  bannerBodyText = "Without it, an AI summary that says '[PERSON_01] filed [ID_04] on [DATE_02]' cannot go into a report, a claim, or a legal review. Restoration maps original names, figures, and references back into AI output — making it enterprise-ready without manual work.",
  bannerLinkLabel = "Learn more about restoration",
  bannerLinkHref = "https://llmcapsule.ai/product",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-root {
          width: 100%;
          container-type: inline-size;
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          -webkit-font-smoothing: antialiased;
        }

        .s3-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${P.surfaceWhite};
          overflow: hidden;
          box-sizing: border-box;
        }

        .s3-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }

        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }

        .s3-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
        }

        @container (max-width: 767px) {
          .s3-section-header { text-align: left; }
        }

        .s3-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        @container (max-width: 767px) {
          .s3-section-title { font-size: 20px; }
        }

        .s3-brand { color: ${P.brandPurple}; }

        .s3-section-description {
          font-size: 16px;
          color: ${P.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s3-section-description { font-size: 18px; }
        }

        @container (min-width: 1024px) {
          .s3-section-description { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s3-section-description { max-width: 860px; }
        }

        .s3-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @container (min-width: 768px) {
          .s3-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @container (min-width: 1024px) {
          .s3-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        .s3-card {
          background-color: ${P.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .s3-card-highlight {
          border: 1px solid ${P.brandPurple};
        }

        .s3-card-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }

        .s3-badge-red   { color: ${P.error}; border-color: ${P.error}; }
        .s3-badge-gray  { color: ${P.textTertiary}; border-color: ${P.borderDefault}; }
        .s3-badge-brand { color: ${P.brandPurple}; border-color: ${P.brandPurple}; }

        .s3-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${P.textPrimary};
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }

        .s3-card-description {
          font-size: 14px;
          color: ${P.textSecondary};
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s3-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .s3-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }

        .s3-tag-error   { background-color: rgba(255,48,48,0.12); color: ${P.error}; }
        .s3-tag-neutral { background-color: #e6e7e9; color: ${P.textSecondary}; }
        .s3-tag-success { background-color: rgba(14,130,76,0.12); color: #0e824c; }

        .s3-banner {
          padding: 16px 24px;
          border: none;
          border-top: 1px solid ${P.borderDefault};
          border-bottom: 1px solid ${P.borderDefault};
          background-color: rgba(166,23,255,0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 48px;
        }

        .s3-banner-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid ${P.borderDefault};
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: ${P.textPrimary};
          margin-top: 12px;
        }

        .s3-banner-link:hover { background-color: ${P.surfaceLight}; }
      `}</style>

      <div className="s3-root">
        <section className="s3-section" id="section-why-different">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 className="s3-section-title">
                {sectionTitle} <span className="s3-brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s3-section-description">{sectionDescription}</p>
            </div>

            <div className="s3-card-grid">
              <article className="s3-card">
                <span className="s3-card-badge s3-badge-red">{card1Badge}</span>
                <h3 className="s3-card-title">{card1Title}</h3>
                <p className="s3-card-description">{card1Description}</p>
                <div className="s3-card-tags">
                  <span className="s3-tag s3-tag-error">{card1Tag}</span>
                </div>
              </article>

              <article className="s3-card">
                <span className="s3-card-badge s3-badge-gray">{card2Badge}</span>
                <h3 className="s3-card-title">{card2Title}</h3>
                <p className="s3-card-description">{card2Description}</p>
                <div className="s3-card-tags">
                  <span className="s3-tag s3-tag-neutral">{card2Tag}</span>
                </div>
              </article>

              <article className="s3-card s3-card-highlight">
                <span className="s3-card-badge s3-badge-brand">{card3Badge}</span>
                <h3 className="s3-card-title">{card3Title}</h3>
                <p className="s3-card-description">{card3Description}</p>
                <div className="s3-card-tags">
                  <span className="s3-tag s3-tag-success">{card3Tag}</span>
                </div>
              </article>
            </div>

            <div className="s3-banner">
              <strong>{bannerBoldLabel}</strong> {bannerBodyText}
              <br />
              <a href={bannerLinkHref} className="s3-banner-link" target="_blank" rel="noopener noreferrer">
                {bannerLinkLabel}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section03_WhyDifferent, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Not masking. Not a gateway. A data layer that produces" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "usable AI output." },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "Enterprise teams evaluate three approaches to using AI on sensitive data. Only one produces outputs that go directly into workflows." },
  card1Badge: { type: ControlType.String, title: "Card 1 Badge", defaultValue: "DATA MASKING" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Permanently removes data" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Masking strips sensitive fields. AI receives incomplete input and returns outputs with [REDACTED] gaps. Manual reconstruction required. Structure broken. Usable output: no." },
  card1Tag: { type: ControlType.String, title: "Card 1 Tag", defaultValue: "Protects data · Destroys output" },
  card2Badge: { type: ControlType.String, title: "Card 2 Badge", defaultValue: "PROMPT GATEWAY" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Filters at the API level" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "Gateways scan prompts and block or strip flagged content. No document-level protection, no RAG/batch coverage, no output restoration. A filter, not a data layer." },
  card2Tag: { type: ControlType.String, title: "Card 2 Tag", defaultValue: "Filters prompts · No restoration" },
  card3Badge: { type: ControlType.String, title: "Card 3 Badge", defaultValue: "LLM CAPSULE" },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Encapsulates, processes, restores" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Operates at the data layer. Encapsulates sensitive entities with structure-preserving tokens. AI receives complete documents. Outputs restored with original data automatically. Enterprise-ready results." },
  card3Tag: { type: ControlType.String, title: "Card 3 Tag", defaultValue: "Protects data · Produces usable output" },
  bannerBoldLabel: { type: ControlType.String, title: "Banner Bold Label", defaultValue: "Why restoration matters:" },
  bannerBodyText: { type: ControlType.String, title: "Banner Body Text", defaultValue: "Without it, an AI summary that says '[PERSON_01] filed [ID_04] on [DATE_02]' cannot go into a report, a claim, or a legal review. Restoration maps original names, figures, and references back into AI output — making it enterprise-ready without manual work." },
  bannerLinkLabel: { type: ControlType.String, title: "Banner Link Label", defaultValue: "Learn more about restoration" },
  bannerLinkHref: { type: ControlType.String, title: "Banner Link Href", defaultValue: "https://llmcapsule.ai/product" },
})
