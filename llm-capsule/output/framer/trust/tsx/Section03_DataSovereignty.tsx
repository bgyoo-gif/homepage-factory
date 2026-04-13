import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  card1Title?: string
  card1Description?: string
  card2Title?: string
  card2Description?: string
}

export default function Section03_DataSovereignty({
  sectionTitle = "Data",
  sectionTitleHighlight = "Sovereignty",
  sectionDescription = "LLM Capsule enforces data sovereignty by design, and this enforcement is what enables AI adoption in regulated environments.",
  card1Title = "Local Encapsulation",
  card1Description = "The encapsulation engine runs entirely within the enterprise environment. Original sensitive data never leaves the controlled boundary. Only encapsulated representations — with sensitive values replaced by structure-preserving tokens — cross to external AI services.",
  card2Title = "Zero Exposure Guarantee",
  card2Description = "The mapping between original and encapsulated values is stored locally and never transmitted. Even in the event of a breach at the AI provider, no original enterprise data would be exposed because it was never transmitted.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s3-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s3;
        }
        .s3-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s3 (min-width: 768px) {
          .s3-container { padding: 0 32px; }
        }
        @container s3 (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
        }
        @container s3 (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s3-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s3-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        @container s3 (min-width: 768px) {
          .s3-section-header__title { font-size: 22px; }
        }
        @container s3 (min-width: 1024px) {
          .s3-section-header__title { font-size: 24px; }
        }
        @container s3 (min-width: 1440px) {
          .s3-section-header__title { font-size: 28px; }
        }
        .s3-section-header__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container s3 (min-width: 1024px) {
          .s3-section-header__description { max-width: 720px; }
        }
        @container s3 (min-width: 1440px) {
          .s3-section-header__description { max-width: 1080px; }
        }
        .s3-title-highlight { color: #5690D4; }
        .s3-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Gradient Card Grid */
        .s3-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container s3 (min-width: 768px) {
          .s3-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Gradient Cards */
        .s3-card--gradient {
          padding: 2px;
          border-radius: 18px;
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
          box-sizing: border-box;
        }
        .s3-card--gradient-indigo {
          background: linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%);
        }
        .s3-card--gradient-blue {
          background: linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%);
        }
        .s3-card--gradient__inner {
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          box-sizing: border-box;
        }
        .s3-card--gradient-indigo .s3-card--gradient__inner {
          background: linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%);
        }
        .s3-card--gradient-blue .s3-card--gradient__inner {
          background: linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%);
        }
        .s3-card--gradient__icon {
          color: #5690D4;
          margin-bottom: 4px;
        }
        .s3-card--gradient__icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s3-card--gradient__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }
        .s3-card--gradient__description {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>
      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-section-header">
              <h2 className="s3-section-header__title">
                {sectionTitle} <span className="s3-title-highlight">{sectionTitleHighlight}</span>
              </h2>
              <p className="s3-section-header__description">
                <span className="s3-product">LLM Capsule</span> {sectionDescription}
              </p>
            </div>

            <div className="s3-card-grid">

              <div className="s3-card--gradient s3-card--gradient-indigo">
                <div className="s3-card--gradient__inner">
                  <div className="s3-card--gradient__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <h3 className="s3-card--gradient__title">{card1Title}</h3>
                  <p className="s3-card--gradient__description">{card1Description}</p>
                </div>
              </div>

              <div className="s3-card--gradient s3-card--gradient-blue">
                <div className="s3-card--gradient__inner">
                  <div className="s3-card--gradient__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h3 className="s3-card--gradient__title">{card2Title}</h3>
                  <p className="s3-card--gradient__description">{card2Description}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_DataSovereignty, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Data" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Sovereignty" },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "LLM Capsule enforces data sovereignty by design, and this enforcement is what enables AI adoption in regulated environments." },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Local Encapsulation" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "The encapsulation engine runs entirely within the enterprise environment. Original sensitive data never leaves the controlled boundary. Only encapsulated representations — with sensitive values replaced by structure-preserving tokens — cross to external AI services." },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Zero Exposure Guarantee" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "The mapping between original and encapsulated values is stored locally and never transmitted. Even in the event of a breach at the AI provider, no original enterprise data would be exposed because it was never transmitted." },
})
