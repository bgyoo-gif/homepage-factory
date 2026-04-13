import { addPropertyControls, ControlType } from "framer"

interface Props {
  bannerText?: string
  item1?: string
  item2?: string
  item3?: string
  item4?: string
}

export default function Section05_RegulatorySupport({
  bannerText = "LLM Capsule supports enterprise compliance by ensuring sensitive data never leaves the enterprise environment during AI processing. Organizations should evaluate specific compliance requirements with their legal counsel.",
  item1 = "GDPR",
  item2 = "HIPAA",
  item3 = "SOX",
  item4 = "Sector-specific data regulations",
}: Props) {
  const items = [item1, item2, item3, item4]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s5-section {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0;
          background-color: #ffffff;
        }
        .s5-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s5;
        }
        .s5-container {
          width: 100%;
          padding: 0 16px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        @container s5 (min-width: 768px) {
          .s5-container { padding: 0 32px; }
        }
        @container s5 (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
        }
        @container s5 (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }

        /* Banner */
        .s5-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(21, 94, 160, 0.06);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          color: #0f0f0f;
        }
        .s5-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Checklist */
        .s5-spaced-top { margin-top: 24px; }
        .s5-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s5-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-banner">
              <p>
                <span className="s5-product">LLM Capsule</span> {bannerText}
              </p>
            </div>

            <ul className="s5-bullet s5-spaced-top" role="list" aria-label="Supported compliance frameworks">
              {items.map((item, idx) => (
                <li className="s5-bullet__item" key={idx}>
                  <span className="s5-bullet__icon" aria-hidden="true">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_RegulatorySupport, {
  bannerText: { type: ControlType.String, title: "Banner Text", defaultValue: "LLM Capsule supports enterprise compliance by ensuring sensitive data never leaves the enterprise environment during AI processing. Organizations should evaluate specific compliance requirements with their legal counsel." },
  item1: { type: ControlType.String, title: "Item 1", defaultValue: "GDPR" },
  item2: { type: ControlType.String, title: "Item 2", defaultValue: "HIPAA" },
  item3: { type: ControlType.String, title: "Item 3", defaultValue: "SOX" },
  item4: { type: ControlType.String, title: "Item 4", defaultValue: "Sector-specific data regulations" },
})
