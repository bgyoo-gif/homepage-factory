import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionLabel?: string
  introText?: string
  item1Title?: string
  item1Text?: string
  item2Title?: string
  item2Text?: string
  item3Title?: string
  item3Text?: string
  item4Title?: string
  item4Text?: string
  item5Title?: string
  item5Text?: string
  bannerText?: string
  productName?: string
}

export default function Section04_Explanation({
  sectionLabel = "Explanation",
  introText = "Enterprise AI document processing addresses five core document intelligence use cases:",
  item1Title = "Summarization.",
  item1Text = "AI generates executive summaries of long documents — contracts, reports, filings. Encapsulation protects sensitive details while preserving the structural context AI needs for accurate summarization. Restored summaries contain real names and figures.",
  item2Title = "Extraction.",
  item2Text = "AI extracts structured data from unstructured documents — key terms from contracts, diagnosis codes from medical records, entity information from legal filings. Structure-preserving processing ensures extraction accuracy by maintaining table layouts and field relationships.",
  item3Title = "Classification.",
  item3Text = "AI categorizes documents by type, risk level, priority, or topic. Encapsulation protects content while preserving the semantic signals AI uses for accurate classification.",
  item4Title = "Translation.",
  item4Text = "AI translates enterprise documents across languages. Encapsulation protects names, numbers, and proprietary terms while allowing AI to translate surrounding content accurately. Restoration restores protected elements in the translated output.",
  item5Title = "Q&A and RAG.",
  item5Text = "AI answers questions about enterprise document collections. Documents are encapsulated before indexing in RAG pipelines. Retrieved context is protected during generation, and responses are restored before delivery to users.",
  bannerText = "enables AI document processing by protecting data at the data layer. Structure-preserving processing with local restoration delivers both AI enablement and data protection simultaneously.",
  productName = "LLM Capsule",
}: Props) {
  const items = [
    { title: item1Title, text: item1Text },
    { title: item2Title, text: item2Text },
    { title: item3Title, text: item3Text },
    { title: item4Title, text: item4Text },
    { title: item5Title, text: item5Text },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 60px 0;
          background-color: #ffffff;
          overflow: hidden;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s4-section-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s4-section-header h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s4-brand { color: #5690D4; }
        .s4-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s4-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet__icon::before {
          content: "•";
          color: #5690D4;
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        .s4-banner {
          padding: 24px 32px;
          border-radius: 18px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(24, 33, 232, 0.06);
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-header h2 { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-section-header h2 { font-size: 28px; }
        }
      `}</style>
      <section className="s4-section" id="section-5">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-section-header">
              <h2><span className="s4-brand">{sectionLabel}</span></h2>
            </div>
            <p className="s4-intro">{introText}</p>
            <ul className="s4-bullet">
              {items.map((item, i) => (
                <li key={i} className="s4-bullet__item">
                  <span className="s4-bullet__icon" aria-hidden="true"></span>
                  <span><strong>{item.title}</strong> {item.text}</span>
                </li>
              ))}
            </ul>
            <div className="s4-banner">
              <strong><span className="s4-product">{productName}</span> {bannerText}</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Explanation, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Explanation" },
  introText: { type: ControlType.String, title: "Intro Text", defaultValue: "Enterprise AI document processing addresses five core document intelligence use cases:" },
  item1Title: { type: ControlType.String, title: "Item 1 Title", defaultValue: "Summarization." },
  item1Text: { type: ControlType.String, title: "Item 1 Text", defaultValue: "AI generates executive summaries of long documents — contracts, reports, filings. Encapsulation protects sensitive details while preserving the structural context AI needs for accurate summarization. Restored summaries contain real names and figures." },
  item2Title: { type: ControlType.String, title: "Item 2 Title", defaultValue: "Extraction." },
  item2Text: { type: ControlType.String, title: "Item 2 Text", defaultValue: "AI extracts structured data from unstructured documents — key terms from contracts, diagnosis codes from medical records, entity information from legal filings. Structure-preserving processing ensures extraction accuracy by maintaining table layouts and field relationships." },
  item3Title: { type: ControlType.String, title: "Item 3 Title", defaultValue: "Classification." },
  item3Text: { type: ControlType.String, title: "Item 3 Text", defaultValue: "AI categorizes documents by type, risk level, priority, or topic. Encapsulation protects content while preserving the semantic signals AI uses for accurate classification." },
  item4Title: { type: ControlType.String, title: "Item 4 Title", defaultValue: "Translation." },
  item4Text: { type: ControlType.String, title: "Item 4 Text", defaultValue: "AI translates enterprise documents across languages. Encapsulation protects names, numbers, and proprietary terms while allowing AI to translate surrounding content accurately. Restoration restores protected elements in the translated output." },
  item5Title: { type: ControlType.String, title: "Item 5 Title", defaultValue: "Q&A and RAG." },
  item5Text: { type: ControlType.String, title: "Item 5 Text", defaultValue: "AI answers questions about enterprise document collections. Documents are encapsulated before indexing in RAG pipelines. Retrieved context is protected during generation, and responses are restored before delivery to users." },
  productName: { type: ControlType.String, title: "Product Name", defaultValue: "LLM Capsule" },
  bannerText: { type: ControlType.String, title: "Banner Text", defaultValue: "enables AI document processing by protecting data at the data layer. Structure-preserving processing with local restoration delivers both AI enablement and data protection simultaneously." },
})
