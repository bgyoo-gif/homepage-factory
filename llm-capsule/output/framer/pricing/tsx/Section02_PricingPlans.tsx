import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  textInverse:    "#ffffff",
  neutral200:     "#e0e0e0",
  neutral025:     "#f7f7f7",
  neutral150:     "#e6e7e9",
  surfaceWhite:   "#ffffff",
  success:        "#0e824c",
  gradientBrand:  "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientCardIndigo: "linear-gradient(109deg, #C5CCFF 0%, #fff 17%, #E8F0FF 38%, #6B7BF0 51%, #E0E8F8 73%, #C5CCFF 100%)",
  gradientCardBlue:   "linear-gradient(109deg, #BFD8F4 0%, #fff 17%, #E8F0FF 38%, #5690D4 51%, #E2EBF5 73%, #BFD8F4 100%)",
  gradientCardSilver: "linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%)",
  gradientInnerIndigo: "linear-gradient(99deg, #ECEEFF 0%, #FCFCFE 58%, #fff 100%)",
  gradientInnerBlue:   "linear-gradient(99deg, #EAF0F9 0%, #FCFCFE 58%, #fff 100%)",
  shadowGradientCard: "rgba(113,141,176,0.25) 0px 1px 20px 0px",
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface Props {
  // Card 1 — Proof of Value
  card1Badge?: string
  card1Price?: string
  card1Subtitle?: string
  card1Feature1?: string
  card1Feature2?: string
  card1Feature3?: string
  card1Feature4?: string
  card1Feature5?: string
  card1ButtonLabel?: string
  card1ButtonHref?: string

  // Card 2 — Enterprise
  card2Badge?: string
  card2Price?: string
  card2Subtitle?: string
  card2Feature1?: string
  card2Feature2?: string
  card2Feature3?: string
  card2Feature4?: string
  card2Feature5?: string
  card2Feature6?: string
  card2Feature7?: string
  card2ButtonLabel?: string
  card2ButtonHref?: string

  // Card 3 — AWS Marketplace
  card3Badge?: string
  card3Price?: string
  card3Subtitle?: string
  card3Feature1?: string
  card3Feature2?: string
  card3Feature3?: string
  card3Feature4?: string
  card3Feature5?: string
  card3ButtonLabel?: string
  card3ButtonHref?: string
}

// ─── CheckIcon ───────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <span
      style={{
        width: 20,
        height: 20,
        flexShrink: 0,
        marginTop: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: PALETTE.success,
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      ✓
    </span>
  )
}

// ─── ExternalLinkIcon ────────────────────────────────────────────────────────
function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section02_PricingPlans({
  card1Badge       = "PROOF OF VALUE",
  card1Price       = "Custom",
  card1Subtitle    = "Evaluation period",
  card1Feature1    = "Test with your own documents",
  card1Feature2    = "Full encapsulation + restoration",
  card1Feature3    = "Any LLM provider",
  card1Feature4    = "On-premise or cloud deployment",
  card1Feature5    = "Dedicated technical support",
  card1ButtonLabel = "Request a Demo",
  card1ButtonHref  = "/request-a-demo",

  card2Badge       = "ENTERPRISE",
  card2Price       = "Custom",
  card2Subtitle    = "Annual license",
  card2Feature1    = "Unlimited document processing",
  card2Feature2    = "Full 3+2 capability set",
  card2Feature3    = "Enterprise context control",
  card2Feature4    = "Custom deployment model",
  card2Feature5    = "Admin console & audit",
  card2Feature6    = "Dedicated architecture support",
  card2Feature7    = "SLA & enterprise support",
  card2ButtonLabel = "Contact Sales",
  card2ButtonHref  = "/request-a-demo",

  card3Badge       = "AWS MARKETPLACE",
  card3Price       = "Listed",
  card3Subtitle    = "Pay through AWS",
  card3Feature1    = "Streamlined procurement",
  card3Feature2    = "AWS billing integration",
  card3Feature3    = "VPC deployment",
  card3Feature4    = "Standard feature set",
  card3Feature5    = "AWS support channels",
  card3ButtonLabel = "View on AWS Marketplace",
  card3ButtonHref  = "https://aws.amazon.com/marketplace",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 60px 0;
          background-color: ${PALETTE.surfaceWhite};
          overflow: hidden;
        }
        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Card Grid */
        .s2-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }
        @container (min-width: 768px) {
          .s2-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s2-card-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Gradient Card Wrapper */
        .s2-card {
          padding: 2px;
          border-radius: 18px;
          box-shadow: ${PALETTE.shadowGradientCard};
        }
        .s2-card--indigo { background: ${PALETTE.gradientCardIndigo}; }
        .s2-card--blue   { background: ${PALETTE.gradientCardBlue}; }
        .s2-card--silver { background: ${PALETTE.gradientCardSilver}; }

        /* Card Inner */
        .s2-card__inner {
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: ${PALETTE.surfaceWhite};
        }
        .s2-card--indigo .s2-card__inner {
          background: ${PALETTE.gradientInnerIndigo};
        }
        .s2-card--blue .s2-card__inner {
          background: ${PALETTE.gradientInnerBlue};
        }

        /* Badge */
        .s2-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 12px;
          width: fit-content;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .s2-badge--brand {
          color: ${PALETTE.brandSecondary};
          border: 1px solid ${PALETTE.brandSecondary};
          background-color: transparent;
        }
        .s2-badge--gray {
          color: ${PALETTE.textSecondary};
          border: 1px solid ${PALETTE.neutral200};
          background-color: ${PALETTE.neutral025};
        }

        /* Price Title */
        .s2-price {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: ${PALETTE.textPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        /* Subtitle */
        .s2-subtitle {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: ${PALETTE.textSecondary};
          margin-bottom: 16px;
        }

        /* Divider */
        .s2-divider {
          border: none;
          border-top: 1px solid ${PALETTE.neutral150};
          margin-bottom: 16px;
        }

        /* Feature List */
        .s2-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .s2-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: ${PALETTE.textPrimary};
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Card Actions */
        .s2-card__actions {
          margin-top: auto;
          padding-top: 32px;
        }

        /* Buttons */
        .s2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          font-size: 16px;
          width: 100%;
        }
        .s2-btn--primary {
          background: ${PALETTE.gradientBrand};
          color: ${PALETTE.textInverse};
        }
        .s2-btn--primary:hover { opacity: 0.88; }
        .s2-btn--secondary {
          background-color: transparent;
          color: ${PALETTE.textPrimary};
          border: 1px solid ${PALETTE.neutral150};
        }
        .s2-btn--secondary:hover {
          background-color: ${PALETTE.neutral025};
        }
      `}</style>

      <section className="s2-section" id="section-2">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-card-grid">

              {/* Card 1: Proof of Value */}
              <div className="s2-card s2-card--blue">
                <div className="s2-card__inner">
                  <span className="s2-badge s2-badge--brand">{card1Badge}</span>
                  <p className="s2-price">{card1Price}</p>
                  <p className="s2-subtitle">{card1Subtitle}</p>
                  <hr className="s2-divider" />
                  <ul className="s2-features" role="list">
                    {[card1Feature1, card1Feature2, card1Feature3, card1Feature4, card1Feature5].map((f, i) => (
                      <li key={i} className="s2-feature-item">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="s2-card__actions">
                    <a href={card1ButtonHref} className="s2-btn s2-btn--secondary">
                      {card1ButtonLabel}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Enterprise */}
              <div className="s2-card s2-card--indigo">
                <div className="s2-card__inner">
                  <span className="s2-badge s2-badge--brand">{card2Badge}</span>
                  <p className="s2-price">{card2Price}</p>
                  <p className="s2-subtitle">{card2Subtitle}</p>
                  <hr className="s2-divider" />
                  <ul className="s2-features" role="list">
                    {[card2Feature1, card2Feature2, card2Feature3, card2Feature4, card2Feature5, card2Feature6, card2Feature7].map((f, i) => (
                      <li key={i} className="s2-feature-item">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="s2-card__actions">
                    <a href={card2ButtonHref} className="s2-btn s2-btn--secondary">
                      {card2ButtonLabel}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: AWS Marketplace */}
              <div className="s2-card s2-card--silver">
                <div className="s2-card__inner">
                  <span className="s2-badge s2-badge--gray">{card3Badge}</span>
                  <p className="s2-price">{card3Price}</p>
                  <p className="s2-subtitle">{card3Subtitle}</p>
                  <hr className="s2-divider" />
                  <ul className="s2-features" role="list">
                    {[card3Feature1, card3Feature2, card3Feature3, card3Feature4, card3Feature5].map((f, i) => (
                      <li key={i} className="s2-feature-item">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="s2-card__actions">
                    <a
                      href={card3ButtonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="s2-btn s2-btn--secondary"
                    >
                      {card3ButtonLabel}
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_PricingPlans, {
  card1Badge:       { type: ControlType.String, title: "Card1 Badge",      defaultValue: "PROOF OF VALUE" },
  card1Price:       { type: ControlType.String, title: "Card1 Price",      defaultValue: "Custom" },
  card1Subtitle:    { type: ControlType.String, title: "Card1 Subtitle",   defaultValue: "Evaluation period" },
  card1Feature1:    { type: ControlType.String, title: "Card1 Feature 1",  defaultValue: "Test with your own documents" },
  card1Feature2:    { type: ControlType.String, title: "Card1 Feature 2",  defaultValue: "Full encapsulation + restoration" },
  card1Feature3:    { type: ControlType.String, title: "Card1 Feature 3",  defaultValue: "Any LLM provider" },
  card1Feature4:    { type: ControlType.String, title: "Card1 Feature 4",  defaultValue: "On-premise or cloud deployment" },
  card1Feature5:    { type: ControlType.String, title: "Card1 Feature 5",  defaultValue: "Dedicated technical support" },
  card1ButtonLabel: { type: ControlType.String, title: "Card1 Button",     defaultValue: "Request a Demo" },
  card1ButtonHref:  { type: ControlType.String, title: "Card1 Button URL", defaultValue: "/request-a-demo" },

  card2Badge:       { type: ControlType.String, title: "Card2 Badge",      defaultValue: "ENTERPRISE" },
  card2Price:       { type: ControlType.String, title: "Card2 Price",      defaultValue: "Custom" },
  card2Subtitle:    { type: ControlType.String, title: "Card2 Subtitle",   defaultValue: "Annual license" },
  card2Feature1:    { type: ControlType.String, title: "Card2 Feature 1",  defaultValue: "Unlimited document processing" },
  card2Feature2:    { type: ControlType.String, title: "Card2 Feature 2",  defaultValue: "Full 3+2 capability set" },
  card2Feature3:    { type: ControlType.String, title: "Card2 Feature 3",  defaultValue: "Enterprise context control" },
  card2Feature4:    { type: ControlType.String, title: "Card2 Feature 4",  defaultValue: "Custom deployment model" },
  card2Feature5:    { type: ControlType.String, title: "Card2 Feature 5",  defaultValue: "Admin console & audit" },
  card2Feature6:    { type: ControlType.String, title: "Card2 Feature 6",  defaultValue: "Dedicated architecture support" },
  card2Feature7:    { type: ControlType.String, title: "Card2 Feature 7",  defaultValue: "SLA & enterprise support" },
  card2ButtonLabel: { type: ControlType.String, title: "Card2 Button",     defaultValue: "Contact Sales" },
  card2ButtonHref:  { type: ControlType.String, title: "Card2 Button URL", defaultValue: "/request-a-demo" },

  card3Badge:       { type: ControlType.String, title: "Card3 Badge",      defaultValue: "AWS MARKETPLACE" },
  card3Price:       { type: ControlType.String, title: "Card3 Price",      defaultValue: "Listed" },
  card3Subtitle:    { type: ControlType.String, title: "Card3 Subtitle",   defaultValue: "Pay through AWS" },
  card3Feature1:    { type: ControlType.String, title: "Card3 Feature 1",  defaultValue: "Streamlined procurement" },
  card3Feature2:    { type: ControlType.String, title: "Card3 Feature 2",  defaultValue: "AWS billing integration" },
  card3Feature3:    { type: ControlType.String, title: "Card3 Feature 3",  defaultValue: "VPC deployment" },
  card3Feature4:    { type: ControlType.String, title: "Card3 Feature 4",  defaultValue: "Standard feature set" },
  card3Feature5:    { type: ControlType.String, title: "Card3 Feature 5",  defaultValue: "AWS support channels" },
  card3ButtonLabel: { type: ControlType.String, title: "Card3 Button",     defaultValue: "View on AWS Marketplace" },
  card3ButtonHref:  { type: ControlType.String, title: "Card3 Button URL", defaultValue: "https://aws.amazon.com/marketplace" },
})
