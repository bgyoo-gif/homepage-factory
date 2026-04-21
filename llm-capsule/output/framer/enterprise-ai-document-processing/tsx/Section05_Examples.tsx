import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionLabel?: string
  cardTitle?: string
  cardText?: string
  productName?: string
}

export default function Section05_Examples({
  sectionLabel = "Examples",
  cardTitle = "Legal: Clause Extraction from Vendor Contracts",
  cardText = "A procurement team needs AI to extract liability clauses, payment terms, and termination conditions from 300 vendor contracts. Each contract contains vendor names, proprietary pricing, and internal project references.",
  productName = "LLM Capsule",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
          overflow: hidden;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s5-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s5-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s5-brand { color: #5690D4; }
        .s5-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s5-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          text-wrap: balance;
        }
        .s5-card__description {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #636363;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 22px; }
          .s5-card { padding: 32px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s5-section" id="section-6">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-section-header">
              <h2 style={{ wordBreak: "keep-all" }}>Enterprise <span className="s5-brand">{sectionLabel}</span></h2>
            </div>
            <div className="s5-card">
              <h4 className="s5-card__title">{cardTitle}</h4>
              <p className="s5-card__description">
                {cardText} <span className="s5-product">{productName}</span> encapsulates all sensitive elements, AI performs structured extraction, and restoration produces a vendor-by-vendor comparison ready for procurement review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_Examples, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Examples" },
  cardTitle: { type: ControlType.String, title: "Card Title", defaultValue: "Legal: Clause Extraction from Vendor Contracts" },
  cardText: { type: ControlType.String, title: "Card Text", defaultValue: "A procurement team needs AI to extract liability clauses, payment terms, and termination conditions from 300 vendor contracts. Each contract contains vendor names, proprietary pricing, and internal project references." },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
})
