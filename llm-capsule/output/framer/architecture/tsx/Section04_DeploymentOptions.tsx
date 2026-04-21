import { addPropertyControls, ControlType } from "framer"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  borderDefault: "#e6e7e9",
  surfaceWhite: "#ffffff",
}

interface Props {
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  productName?: string
  card1Title?: string
  card1Description?: string
  card2Title?: string
  card2Description?: string
  card3Title?: string
  card3Description?: string
  card3ButtonLabel?: string
  card3ButtonHref?: string
  card4Title?: string
  card4Description?: string
  card5Title?: string
  card5Description?: string
  card6Title?: string
  card6Description?: string
}

export default function Section04_DeploymentOptions({
  sectionTitle = "Deployment",
  sectionTitleHighlight = "Options",
  sectionDescription = "LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.",
  productName = "LLM Capsule",
  card1Title = "On-Premise",
  card1Description = "Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.",
  card2Title = "Air-Gapped",
  card2Description = "For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.",
  card3Title = "Cloud (AWS Marketplace)",
  card3Description = "Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.",
  card3ButtonLabel = "View on AWS Marketplace",
  card3ButtonHref = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  card4Title = "Hybrid",
  card4Description = "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.",
  card5Title = "Embedded Integration",
  card5Description = "LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.",
  card6Title = "Slack App",
  card6Description = "Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s4-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Section Header */
        .s4-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        .s4-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s4-section-header__description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (min-width: 1024px) {
          .s4-section-header__description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s4-section-header__description { max-width: 1080px; }
        }
        .s4-text--brand { color: ${PALETTE.brandSecondary}; }
        .s4-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Card Grid */
        .s4-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px) {
          .s4-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s4-card-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Gradient Cards */
        .s4-card {
          padding: 2px;
          border-radius: 18px;
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
          border: none;
          display: flex;
          flex-direction: column;
        }
        .s4-card--indigo {
          background-image: linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%);
        }
        .s4-card--blue {
          background-image: linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%);
        }
        .s4-card--green {
          background-image: linear-gradient(109deg, #55B45D 0%, #F0FFF2 17%, #9AE6AD 43%, #C9FFE1 65%, #55B45D 84%, #55B45D 100%);
        }
        .s4-card--silver {
          background-image: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);
        }
        .s4-card__inner {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .s4-card--indigo .s4-card__inner {
          background-image: linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%);
        }
        .s4-card--blue .s4-card__inner {
          background-image: linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%);
        }
        .s4-card--green .s4-card__inner {
          background-image: linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);
        }

        .s4-card__icon {
          font-size: 28px;
          margin-bottom: 12px;
          display: block;
          color: ${PALETTE.textPrimary};
        }
        .s4-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .s4-card__description {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s4-card__button {
          margin-top: auto;
          padding-top: 24px;
        }
        .s4-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 8px 16px;
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s4-btn:hover {
          background-color: ${PALETTE.neutral025};
        }
      `}</style>

      <section className="s4-section" id="section-4">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2 className="s4-section-header__title" style={{ wordBreak: "keep-all" }}>
                {sectionTitle}{" "}
                <span className="s4-text--brand">{sectionTitleHighlight}</span>
              </h2>
              <p className="s4-section-header__description">{sectionDescription}</p>
            </div>

            <div className="s4-card-grid">
              {/* Card 1: On-Premise */}
              <div className="s4-card s4-card--indigo">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M15 14h.01"/><path d="M9 6h6"/><path d="M9 10h6"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card1Title}</h3>
                  <p className="s4-card__description">{card1Description}</p>
                </div>
              </div>

              {/* Card 2: Air-Gapped */}
              <div className="s4-card s4-card--blue">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card2Title}</h3>
                  <p className="s4-card__description">{card2Description}</p>
                </div>
              </div>

              {/* Card 3: Cloud (AWS Marketplace) */}
              <div className="s4-card s4-card--blue">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card3Title}</h3>
                  <p className="s4-card__description">{card3Description}</p>
                  <div className="s4-card__button">
                    <a href={card3ButtonHref} target="_blank" rel="noopener" className="s4-btn">
                      {card3ButtonLabel}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Hybrid */}
              <div className="s4-card s4-card--green">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card4Title}</h3>
                  <p className="s4-card__description">{card4Description}</p>
                </div>
              </div>

              {/* Card 5: Embedded Integration */}
              <div className="s4-card s4-card--silver">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card5Title}</h3>
                  <p className="s4-card__description">{card5Description}</p>
                </div>
              </div>

              {/* Card 6: Slack App */}
              <div className="s4-card s4-card--green">
                <div className="s4-card__inner">
                  <span className="s4-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
                  </span>
                  <h3 className="s4-card__title">{card6Title}</h3>
                  <p className="s4-card__description">{card6Description}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_DeploymentOptions, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Deployment" },
  sectionTitleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Options" },
  sectionDescription: { type: ControlType.String, title: "Description", defaultValue: "LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.", displayTextArea: true },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "On-Premise" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.", displayTextArea: true },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Air-Gapped" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.", displayTextArea: true },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Cloud (AWS Marketplace)" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.", displayTextArea: true },
  card3ButtonLabel: { type: ControlType.String, title: "Card 3 Button", defaultValue: "View on AWS Marketplace" },
  card3ButtonHref: { type: ControlType.String, title: "Card 3 Button URL", defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "Hybrid" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.", displayTextArea: true },
  card5Title: { type: ControlType.String, title: "Card 5 Title", defaultValue: "Embedded Integration" },
  card5Description: { type: ControlType.String, title: "Card 5 Description", defaultValue: "LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.", displayTextArea: true },
  card6Title: { type: ControlType.String, title: "Card 6 Title", defaultValue: "Slack App" },
  card6Description: { type: ControlType.String, title: "Card 6 Description", defaultValue: "Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.", displayTextArea: true },
})
