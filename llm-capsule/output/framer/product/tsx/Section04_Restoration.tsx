import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary:   "#5690D4",
  textPrimary:      "#0f0f0f",
  textSecondary:    "#636363",
  white:            "#ffffff",
  borderDefault:    "#e6e7e9",
  surfaceLight:     "#f7f7f7",
  neutral900:       "#0f0f0f",
  neutral300:       "#bababa",
  neutral400:       "#9c9c9c",
  success:          "#0e824c",
  successTint:      "rgba(14,130,76,0.08)",
  successBdr:       "rgba(20,130,76,0.2)",
}

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference"

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  lead?: string
  body?: string
  encapsulatedLabel?: string
  encapsulatedText?: string
  restoredLabel?: string
  restoredText?: string
  visualBgImage?: string
  visualImage?: string
}

export default function Section04_Restoration({
  sectionTitle = "Enable AI without breaking enterprise",
  sectionTitleBrand = "workflows",
  sectionDescription = "LLM Capsule does more than hide data. It auto-restores usable output inside the environment after AI processing so enterprise teams can actually use the result in real workflows. This is a restorable workflow — not just protection, but AI enablement with usable output.",
  lead = "Traditional masking protects data by removing meaning. That may reduce risk, but it also reduces output quality and business usability. Restored outputs from LLM Capsule are directly usable in: claims documents with real policyholder data, legal reviews with real party names and clause references, regulatory reports with real customer and account data, and internal analysis with real business metrics.",
  body = "This is the capability that makes enterprise AI operationally viable. Secure document summarization, AI claims processing, and confidential contract review with AI all depend on the ability to restore results. Without restoration, every AI output requires manual reconstruction — eliminating the efficiency gains AI is supposed to deliver.",
  encapsulatedLabel = "Encapsulated",
  encapsulatedText = "[PERSON_01] submitted claim #[ID_04] on [DATE_02] for property at [ADDR_03]. Total assessed damage: [AMOUNT_01].",
  restoredLabel = "Restored",
  restoredText = "James Mitchell submitted claim #INS-2024-0847 on March 5, 2025 for property at 42 Lincoln Ave, Chicago. Total assessed damage: $247,000.",
  visualBgImage = `${IMAGE_BASE}/images/bg-wave-teal-blue.png`,
  visualImage = "",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s4-inner { width: 100%; container-type: inline-size; }
        .s4-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        .s4-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s4-header { text-align: left; } }
        .s4-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s4-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s4-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s4-header__title { font-size: 28px; } }
        .s4-header__brand { color: ${PALETTE.brandSecondary}; }
        .s4-header__desc {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s4-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s4-header__desc { max-width: 1080px; } }

        /* Product Split — reverse layout */
        .s4-split {
          display: grid;
          grid-template-columns: 4fr 6fr;
          gap: 64px;
          align-items: stretch;
          direction: rtl;
        }
        .s4-split > * { direction: ltr; }
        @container (max-width: 1023px) {
          .s4-split { grid-template-columns: 1fr; gap: 32px; direction: ltr; }
        }

        .s4-visual {
          border-radius: 40px;
          overflow: hidden;
          background-color: ${PALETTE.surfaceLight};
          background-image: url('${visualBgImage}');
          background-size: cover;
          background-position: center;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          min-height: 320px;
        }
        @container (max-width: 767px) { .s4-visual { background-image: none; } }

        .s4-code-panels {
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          padding-bottom: 24px;
        }

        .s4-code-block {
          background-color: ${PALETTE.neutral900};
          border: none;
          border-radius: 8px;
          padding: 16px;
          font-family: "Fragment Mono", monospace;
          font-size: 14px;
          line-height: 1.9;
          color: ${PALETTE.neutral300};
          overflow-x: auto;
        }
        .s4-code-block--restored {
          background-color: ${PALETTE.successTint};
          border: 1px solid ${PALETTE.successBdr};
          color: ${PALETTE.textPrimary};
        }
        .s4-code-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          display: block;
        }
        .s4-code-block .s4-code-label { color: ${PALETTE.neutral400}; }
        .s4-code-block--restored .s4-code-label { color: ${PALETTE.success}; }

        .s4-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .s4-lead {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: ${PALETTE.textPrimary};
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-body {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-body strong {
          font-weight: 600;
          color: ${PALETTE.textPrimary};
        }
      `}</style>
      <section className="s4-section" id="section-4">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2 className="s4-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitle} <span className="s4-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s4-header__desc">{sectionDescription}</p>
            </div>

            <div className="s4-split">
              {/* Content (visually left due to reverse) */}
              <div className="s4-content">
                <p className="s4-lead" dangerouslySetInnerHTML={{
                  __html: lead.replace(
                    /(claims documents|legal reviews|regulatory reports|internal analysis)/g,
                    '<strong>$1</strong>'
                  )
                }} />
                <p className="s4-body">{body}</p>
              </div>

              {/* Visual (visually right due to reverse) */}
              <div className="s4-visual" style={visualImage ? { backgroundImage: "none", backgroundColor: "transparent", padding: 0, minHeight: "auto", display: "block" } : undefined}>
                {visualImage ? (
                  <img src={visualImage} alt="Restoration visual" style={{ width: "100%", display: "block" }} />
                ) : (
                  <div className="s4-code-panels">
                    <div className="s4-code-block">
                      <span className="s4-code-label">{encapsulatedLabel}</span>
                      <span>{encapsulatedText}</span>
                    </div>
                    <div className="s4-code-block s4-code-block--restored">
                      <span className="s4-code-label">{restoredLabel}</span>
                      <span>{restoredText}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Restoration, {
  sectionTitle:       { type: ControlType.String, title: "Title",              defaultValue: "Enable AI without breaking enterprise" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)",      defaultValue: "workflows" },
  sectionDescription: { type: ControlType.String, title: "Description",        defaultValue: "LLM Capsule does more than hide data. It auto-restores usable output inside the environment after AI processing so enterprise teams can actually use the result in real workflows. This is a restorable workflow — not just protection, but AI enablement with usable output.", displayTextArea: true },
  lead:               { type: ControlType.String, title: "Lead",               defaultValue: "Traditional masking protects data by removing meaning. That may reduce risk, but it also reduces output quality and business usability. Restored outputs from LLM Capsule are directly usable in: claims documents with real policyholder data, legal reviews with real party names and clause references, regulatory reports with real customer and account data, and internal analysis with real business metrics.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",               defaultValue: "This is the capability that makes enterprise AI operationally viable. Secure document summarization, AI claims processing, and confidential contract review with AI all depend on the ability to restore results. Without restoration, every AI output requires manual reconstruction — eliminating the efficiency gains AI is supposed to deliver.", displayTextArea: true },
  encapsulatedLabel:  { type: ControlType.String, title: "Encapsulated Label", defaultValue: "Encapsulated" },
  encapsulatedText:   { type: ControlType.String, title: "Encapsulated Text",  defaultValue: "[PERSON_01] submitted claim #[ID_04] on [DATE_02] for property at [ADDR_03]. Total assessed damage: [AMOUNT_01].", displayTextArea: true },
  restoredLabel:      { type: ControlType.String, title: "Restored Label",     defaultValue: "Restored" },
  restoredText:       { type: ControlType.String, title: "Restored Text",      defaultValue: "James Mitchell submitted claim #INS-2024-0847 on March 5, 2025 for property at 42 Lincoln Ave, Chicago. Total assessed damage: $247,000.", displayTextArea: true },
  visualBgImage:      { type: ControlType.Image, title: "Visual Background" },
  visualImage:        { type: ControlType.Image, title: "Visual Image (replaces code panels)" },
})
