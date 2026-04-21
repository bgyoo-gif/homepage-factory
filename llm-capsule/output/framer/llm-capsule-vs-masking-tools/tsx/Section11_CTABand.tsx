import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"

const PALETTE = {
  neutral800:  "#171719",
  white:       "#ffffff",
  textPrimary: "#0f0f0f",
}

interface CTALink {
  label: string
  href: string
}

interface Props {
  title?: string
  titleProduct?: string
  description?: string
  primaryCTALabel?: string
  primaryCTAHref?: string
  footnoteLinks?: CTALink[]
}

export default function Section11_CTABand({
  title = "See how",
  titleProduct = "LLM Capsule",
  description = "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
  primaryCTALabel = "Request a Demo",
  primaryCTAHref = "/request-a-demo",
  footnoteLinks = [
    { label: "AWS Marketplace", href: "https://aws.amazon.com/marketplace/pp/prodview-k4uxlhvsxm5rw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa" },
  ],
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s11-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
        }
        .s11-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .s11-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          container-type: inline-size;
        }
        .s11-container {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s11-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s11-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s11-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s11-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          flex-direction: column;
          align-items: center;
        }
        .s11-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.6);
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: rgba(255, 255, 255, 0.92);
          color: ${PALETTE.textPrimary};
          backdrop-filter: blur(8px);
          width: 100%;
          max-width: 320px;
        }
        .s11-btn:hover {
          background-color: ${PALETTE.white};
        }
        .s11-footnote {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 8px;
        }
        .s11-footnote a {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .s11-footnote a:hover {
          color: ${PALETTE.white};
        }

        @container (min-width: 768px) {
          .s11-section { padding: 100px 32px; }
          .s11-title { font-size: 40px; }
          .s11-actions { flex-direction: row; }
          .s11-btn { width: auto; max-width: none; }
        }
        @container (min-width: 1024px) {
          .s11-container { max-width: 720px; }
        }
        @container (min-width: 1440px) { .s11-container { padding: 0 120px; max-width: 1440px; } }
        @container (min-width: 1440px) {
          .s11-section { padding: 120px 120px; }
          .s11-container { max-width: 1080px; }
          .s11-title { font-size: 50px; }
        }
      `}</style>
      <section className="s11-section" id="section-cta">
        <div className="s11-inner">
          <div className="s11-container">
            <h2 className="s11-title">
              {title}
            </h2>
            <p className="s11-description">{description}</p>
            <div className="s11-actions">
              <a href={primaryCTAHref} className="s11-btn">{primaryCTALabel}</a>
            </div>
            <div className="s11-footnote">
              {footnoteLinks.map((link, i) => (
                <a key={i} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section11_CTABand, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "See how",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Title Product",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.",
    displayTextArea: true,
  },
  primaryCTALabel: {
    type: ControlType.String,
    title: "Primary CTA",
    defaultValue: "Request a Demo",
  },
  primaryCTAHref: {
    type: ControlType.String,
    title: "Primary CTA URL",
    defaultValue: "/request-a-demo",
  },
})
