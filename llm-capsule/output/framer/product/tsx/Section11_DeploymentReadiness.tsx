import { addPropertyControls, ControlType } from "framer"

const PALETTE = {
  brandSecondary: "#5690D4",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textTertiary:   "#9c9c9c",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
  surfaceMid:     "#f2f2f2",
  shadowCard:     "0px 24px 40px rgba(0, 0, 0, 0.04)",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  neutral800:     "#171719",
  neutral700:     "#303135",
}

interface Props {
  sectionTitle?: string
  sectionTitleBrand?: string
  sectionDescription?: string
  body?: string
  screenshotDesc?: string
  screenshotImage?: string
  awsLabel?: string
  awsHref?: string
  deploy1Title?: string
  deploy1Desc?: string
  deploy2Title?: string
  deploy2Desc?: string
  deploy3Title?: string
  deploy3Desc?: string
  deploy4Title?: string
  deploy4Desc?: string
}

export default function Section11_DeploymentReadiness({
  sectionTitle = "Enterprise AI deployment — ready for any controlled",
  sectionTitleBrand = "environment",
  sectionDescription = "Enterprise teams need deployment flexibility without giving up control.",
  body = "Enterprise teams need deployment flexibility without giving up control. LLM Capsule supports on-premise deployment, air-gapped environments, cloud deployment including AWS Marketplace, hybrid configurations, and embedded integration. The same product logic runs across all deployment models while keeping local protection and local restoration at the center.",
  screenshotDesc = "LLM Capsule API Console — SDK integration with enterprise document management systems",
  screenshotImage = "",
  awsLabel = "View on AWS Marketplace",
  awsHref = "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
  deploy1Title = "On-premise",
  deploy1Desc = "Fully inside customer-controlled infrastructure. The encapsulation engine runs within the enterprise data center.",
  deploy2Title = "Air-gapped environments",
  deploy2Desc = "Restricted and isolated environments. Encapsulation on the isolated network, controlled transfer for AI processing.",
  deploy3Title = "Cloud & AWS Marketplace",
  deploy3Desc = "AWS Marketplace deployment for streamlined procurement. Runs within the enterprise's cloud account or VPC.",
  deploy4Title = "Hybrid & Embedded",
  deploy4Desc = "Different sensitivity levels route through different deployment modes. Embeddable into existing applications and partner products.",
}: Props) {
  const cards = [
    {
      icon: <><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></>,
      title: deploy1Title,
      desc: deploy1Desc,
    },
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: deploy2Title,
      desc: deploy2Desc,
    },
    {
      icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>,
      title: deploy3Title,
      desc: deploy3Desc,
    },
    {
      icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
      title: deploy4Title,
      desc: deploy4Desc,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s11-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.white};
          overflow: hidden;
          box-sizing: border-box;
        }
        .s11-inner { width: 100%; container-type: inline-size; }
        .s11-container {
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s11-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s11-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s11-container { padding: 0 120px; max-width: 1440px; } }

        .s11-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${PALETTE.borderDefault};
        }
        @container (max-width: 767px) { .s11-header { text-align: left; } }
        .s11-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: pretty;
        }
        @container (min-width: 768px)  { .s11-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .s11-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .s11-header__title { font-size: 28px; } }
        .s11-header__brand { color: ${PALETTE.brandSecondary}; }
        .s11-header__desc {
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
        @container (min-width: 1024px) { .s11-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .s11-header__desc { max-width: 1080px; } }

        .s11-body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 16px;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1024px) { .s11-body { max-width: 720px; } }
        @container (min-width: 1440px) { .s11-body { max-width: 1080px; } }

        /* Deployment Screenshot */
        .s11-screenshot {
          background-color: ${PALETTE.surfaceMid};
          border: 2px dashed ${PALETTE.borderDefault};
          border-radius: 24px;
          padding: 80px 24px;
          text-align: center;
          margin: 32px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .s11-screenshot svg {
          width: 32px; height: 32px;
          stroke: ${PALETTE.textTertiary}; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s11-screenshot-label {
          font-family: "Fragment Mono", monospace;
          font-size: 12px;
          color: ${PALETTE.textTertiary};
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .s11-screenshot-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textTertiary};
        }

        /* Card Grid */
        .s11-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .s11-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .s11-grid { grid-template-columns: repeat(4, 1fr); } }

        .s11-card {
          background-color: ${PALETTE.surfaceWhite};
          border-radius: 18px;
          border: 1px solid ${PALETTE.borderDefault};
          padding: 24px;
          box-shadow: ${PALETTE.shadowCard};
          display: flex;
          flex-direction: column;
        }
        @container (min-width: 1440px) { .s11-card { padding: 32px; } }

        .s11-card-icon { margin-bottom: 12px; color: ${PALETTE.brandSecondary}; }
        .s11-card-icon svg {
          width: 32px; height: 32px;
          stroke: currentColor; fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        .s11-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          margin: 0 0 12px;
          text-wrap: pretty;
        }
        .s11-card-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          line-height: 1.7;
          flex: 1;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* CTA */
        .s11-cta {
          text-align: center;
          margin-top: 32px;
        }
        .s11-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          padding: 12px 32px;
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.borderDefault};
          transition: background-color 0.2s;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .s11-btn:hover { background-color: #f7f7f7; }
      `}</style>
      <section className="s11-section" id="section-10">
        <div className="s11-inner">
          <div className="s11-container">
            <div className="s11-header">
              <h2 className="s11-header__title" style={{ wordBreak: "keep-all", whiteSpace: "pre-line" }}>
                {sectionTitle} <span className="s11-header__brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s11-header__desc">{sectionDescription}</p>
            </div>

            <p className="s11-body">{body}</p>

            <div className="s11-screenshot" style={screenshotImage ? { background: "none", border: "none", padding: 0 } : undefined}>
              {screenshotImage && (
                <img src={screenshotImage} alt={screenshotDesc} style={{ width: "100%", display: "block", borderRadius: "16px" }} />
              )}
            </div>

            <div className="s11-grid">
              {cards.map((c, i) => (
                <article key={i} className="s11-card">
                  <div className="s11-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{c.icon}</svg>
                  </div>
                  <h3 className="s11-card-title">{c.title}</h3>
                  <p className="s11-card-desc">{c.desc}</p>
                </article>
              ))}
            </div>

            <div className="s11-cta">
              <a href={awsHref} target="_blank" rel="noopener" className="s11-btn">{awsLabel}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section11_DeploymentReadiness, {
  sectionTitle:       { type: ControlType.String, title: "Title",           defaultValue: "Enterprise AI deployment — ready for any controlled" },
  sectionTitleBrand:  { type: ControlType.String, title: "Title (brand)",   defaultValue: "environment" },
  sectionDescription: { type: ControlType.String, title: "Description",     defaultValue: "Enterprise teams need deployment flexibility without giving up control.", displayTextArea: true },
  body:               { type: ControlType.String, title: "Body",            defaultValue: "Enterprise teams need deployment flexibility without giving up control. LLM Capsule supports on-premise deployment, air-gapped environments, cloud deployment including AWS Marketplace, hybrid configurations, and embedded integration. The same product logic runs across all deployment models while keeping local protection and local restoration at the center.", displayTextArea: true },
  screenshotDesc:     { type: ControlType.String, title: "Screenshot desc", defaultValue: "LLM Capsule API Console — SDK integration with enterprise document management systems", displayTextArea: true },
  screenshotImage:    { type: ControlType.Image,  title: "Screenshot Image" },
  awsLabel:           { type: ControlType.String, title: "AWS Button",      defaultValue: "View on AWS Marketplace" },
  awsHref:            { type: ControlType.String, title: "AWS URL",         defaultValue: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
  deploy1Title:       { type: ControlType.String, title: "Deploy 1 Title",  defaultValue: "On-premise" },
  deploy1Desc:        { type: ControlType.String, title: "Deploy 1 Desc",   defaultValue: "Fully inside customer-controlled infrastructure. The encapsulation engine runs within the enterprise data center.", displayTextArea: true },
  deploy2Title:       { type: ControlType.String, title: "Deploy 2 Title",  defaultValue: "Air-gapped environments" },
  deploy2Desc:        { type: ControlType.String, title: "Deploy 2 Desc",   defaultValue: "Restricted and isolated environments. Encapsulation on the isolated network, controlled transfer for AI processing.", displayTextArea: true },
  deploy3Title:       { type: ControlType.String, title: "Deploy 3 Title",  defaultValue: "Cloud & AWS Marketplace" },
  deploy3Desc:        { type: ControlType.String, title: "Deploy 3 Desc",   defaultValue: "AWS Marketplace deployment for streamlined procurement. Runs within the enterprise's cloud account or VPC.", displayTextArea: true },
  deploy4Title:       { type: ControlType.String, title: "Deploy 4 Title",  defaultValue: "Hybrid & Embedded" },
  deploy4Desc:        { type: ControlType.String, title: "Deploy 4 Desc",   defaultValue: "Different sensitivity levels route through different deployment modes. Embeddable into existing applications and partner products.", displayTextArea: true },
})
