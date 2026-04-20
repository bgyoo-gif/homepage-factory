import { addPropertyControls, ControlType } from "framer"

interface LinkItem {
  label: string
  href: string
}

interface Props {
  sectionTitle?: string
  link1Label?: string
  link1Href?: string
  link2Label?: string
  link2Href?: string
  link3Label?: string
  link3Href?: string
  link4Label?: string
  link4Href?: string
  link5Label?: string
  link5Href?: string
  link6Label?: string
  link6Href?: string
  link7Label?: string
  link7Href?: string
  link8Label?: string
  link8Href?: string
  link9Label?: string
  link9Href?: string
  link10Label?: string
  link10Href?: string
  link11Label?: string
  link11Href?: string
  link12Label?: string
  link12Href?: string
}

export default function Section07_LearnMore({
  sectionTitle = "Learn More",
  link1Label = "Product Overview",
  link1Href = "/product",
  link2Label = "Architecture",
  link2Href = "/architecture",
  link3Label = "Trust & Compliance",
  link3Href = "/trust",
  link4Label = "Request a Demo",
  link4Href = "/request-a-demo",
  link5Label = "What Is an AI Data Capsule",
  link5Href = "/resources/learn/what-is-ai-data-capsule",
  link6Label = "AI on Sensitive Data",
  link6Href = "/resources/learn/how-to-use-ai-on-sensitive-enterprise-data",
  link7Label = "Why Redaction Breaks AI",
  link7Href = "/resources/learn/why-redaction-breaks-enterprise-ai-workflows",
  link8Label = "Secure AI Workflows",
  link8Href = "/resources/learn/secure-enterprise-ai-workflows",
  link9Label = "Structure-Preserving Processing",
  link9Href = "/resources/learn/structure-preserving-document-processing",
  link10Label = "PII vs Confidentiality Control",
  link10Href = "/resources/learn/pii-protection-vs-enterprise-confidentiality-control",
  link11Label = "On-Premise vs Cloud",
  link11Href = "/resources/learn/on-premise-vs-cloud-ai-data-protection",
  link12Label = "AI Pipeline Protection",
  link12Href = "/resources/learn/ai-data-pipeline-protection",
}: Props) {
  const links: LinkItem[] = [
    { label: link1Label, href: link1Href },
    { label: link2Label, href: link2Href },
    { label: link3Label, href: link3Href },
    { label: link4Label, href: link4Href },
    { label: link5Label, href: link5Href },
    { label: link6Label, href: link6Href },
    { label: link7Label, href: link7Href },
    { label: link8Label, href: link8Href },
    { label: link9Label, href: link9Href },
    { label: link10Label, href: link10Href },
    { label: link11Label, href: link11Href },
    { label: link12Label, href: link12Href },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
          overflow: hidden;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s7-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s7-title-icon__icon {
          color: #5690D4;
          flex-shrink: 0;
        }
        .s7-title-icon__icon svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s7-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }

        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .s7-card-dark {
          background-color: #141414;
          border: 1px solid #303135;
          color: #ffffff;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s7-card-dark:hover { background-color: #171719; }
        .s7-card-dark__label {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>
      <section className="s7-section" id="section-8">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-title-icon">
              <span className="s7-title-icon__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="s7-title-icon__text">{sectionTitle}</span>
            </div>
            <div className="s7-card-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s7-card-dark">
                  <span className="s7-card-dark__label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_LearnMore, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Learn More" },
  link1Label: { type: ControlType.String, title: "Link 1 Label", defaultValue: "Product Overview" },
  link1Href: { type: ControlType.String, title: "Link 1 URL", defaultValue: "/product" },
  link2Label: { type: ControlType.String, title: "Link 2 Label", defaultValue: "Architecture" },
  link2Href: { type: ControlType.String, title: "Link 2 URL", defaultValue: "/architecture" },
  link3Label: { type: ControlType.String, title: "Link 3 Label", defaultValue: "Trust & Compliance" },
  link3Href: { type: ControlType.String, title: "Link 3 URL", defaultValue: "/trust" },
  link4Label: { type: ControlType.String, title: "Link 4 Label", defaultValue: "Request a Demo" },
  link4Href: { type: ControlType.String, title: "Link 4 URL", defaultValue: "/request-a-demo" },
  link5Label: { type: ControlType.String, title: "Link 5 Label", defaultValue: "What Is an AI Data Capsule" },
  link5Href: { type: ControlType.String, title: "Link 5 URL", defaultValue: "/resources/learn/what-is-ai-data-capsule" },
  link6Label: { type: ControlType.String, title: "Link 6 Label", defaultValue: "AI on Sensitive Data" },
  link6Href: { type: ControlType.String, title: "Link 6 URL", defaultValue: "/resources/learn/how-to-use-ai-on-sensitive-enterprise-data" },
  link7Label: { type: ControlType.String, title: "Link 7 Label", defaultValue: "Why Redaction Breaks AI" },
  link7Href: { type: ControlType.String, title: "Link 7 URL", defaultValue: "/resources/learn/why-redaction-breaks-enterprise-ai-workflows" },
  link8Label: { type: ControlType.String, title: "Link 8 Label", defaultValue: "Secure AI Workflows" },
  link8Href: { type: ControlType.String, title: "Link 8 URL", defaultValue: "/resources/learn/secure-enterprise-ai-workflows" },
  link9Label: { type: ControlType.String, title: "Link 9 Label", defaultValue: "Structure-Preserving Processing" },
  link9Href: { type: ControlType.String, title: "Link 9 URL", defaultValue: "/resources/learn/structure-preserving-document-processing" },
  link10Label: { type: ControlType.String, title: "Link 10 Label", defaultValue: "PII vs Confidentiality Control" },
  link10Href: { type: ControlType.String, title: "Link 10 URL", defaultValue: "/resources/learn/pii-protection-vs-enterprise-confidentiality-control" },
  link11Label: { type: ControlType.String, title: "Link 11 Label", defaultValue: "On-Premise vs Cloud" },
  link11Href: { type: ControlType.String, title: "Link 11 URL", defaultValue: "/resources/learn/on-premise-vs-cloud-ai-data-protection" },
  link12Label: { type: ControlType.String, title: "Link 12 Label", defaultValue: "AI Pipeline Protection" },
  link12Href: { type: ControlType.String, title: "Link 12 URL", defaultValue: "/resources/learn/ai-data-pipeline-protection" },
})
