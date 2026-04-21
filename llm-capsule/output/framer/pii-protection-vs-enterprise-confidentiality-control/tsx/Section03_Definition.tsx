import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  neutral025: "#f7f7f7",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite:  "#ffffff",
  surfaceLight:  "#f7f7f7",
  // rgba(24,33,232,0.06)
  brandTintLight: "rgba(24,33,232,0.06)",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  sectionLabel?: string
  bannerTitle?: string
  bannerBody?: string
  locale?: "en" | "ko"
}

export default function Section03_Definition({
  sectionLabel = "Definition",
  bannerTitle  = "Enterprise Confidentiality Control",
  bannerBody   = "Enterprise confidentiality control is a data protection approach for AI workflows that extends beyond PII to cover all categories of business-sensitive information. It enables policy-based classification and encapsulation of trade secrets, financial terms, strategic data, and operational details alongside personal data protection.",
  locale       = "en",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s3-section {
          width: 100%;
          padding: 32px 0;
          background-color: ${PALETTE.surfaceWhite};
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }

        @container (min-width: 768px)  { TEMP_FIX { padding: 60px 0; } }
        @container (min-width: 1024px) { TEMP_FIX { padding: 60px 0; } }
        @container (min-width: 1440px) { TEMP_FIX { padding: 60px 0; } }

        .s3-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
          text-align: center;
        }
        .s3-section-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          font-family: "DM Sans", sans-serif;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s3-section-header h2 { font-size: 22px; } }
        @container (min-width: 1024px) { .s3-section-header h2 { font-size: 24px; } }
        @container (min-width: 1440px) { .s3-section-header h2 { font-size: 28px; } }

        .s3-text--brand { color: ${PALETTE.brandSecondary}; }

        .s3-banner {
          margin-top: 32px;
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid ${PALETTE.borderDefault};
          border-bottom: 1px solid ${PALETTE.borderDefault};
          background-color: ${PALETTE.brandTintLight};
          font-size: 16px;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-banner p {
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
        }
        .s3-banner p + p {
          margin-top: 12px;
        }
        .s3-banner strong {
          font-weight: 700;
          color: ${PALETTE.textPrimary};
        }
      `}</style>

      <section className="s3-section" id="section-3" lang={locale}>
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 style={{ wordBreak: "keep-all" }}><span className="s3-text--brand">{sectionLabel}</span></h2>
            </div>
            <div className="s3-banner">
              <p><strong>{bannerTitle}</strong></p>
              <p>{bannerBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_Definition, {
  sectionLabel: {
    type: ControlType.String,
    title: "Section Label",
    defaultValue: "Definition",
  },
  bannerTitle: {
    type: ControlType.String,
    title: "Banner Title",
    defaultValue: "Enterprise Confidentiality Control",
  },
  bannerBody: {
    type: ControlType.String,
    title: "Banner Body",
    defaultValue: "Enterprise confidentiality control is a data protection approach for AI workflows that extends beyond PII to cover all categories of business-sensitive information. It enables policy-based classification and encapsulation of trade secrets, financial terms, strategic data, and operational details alongside personal data protection.",
    displayTextArea: true,
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko"],
    optionTitles: ["English", "한국어"],
    defaultValue: "en",
  },
})
