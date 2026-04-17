import { addPropertyControls, ControlType } from "framer"

// ─── Palette ─────────────────────────────────────────────────────────────────
const P = {
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  success:        "#0e824c",
  error:          "#ff3030",
  textPrimary:    "#0f0f0f",
  textSecondary:  "#636363",
  white:          "#ffffff",
  borderDefault:  "#e6e7e9",
  surfaceWhite:   "#ffffff",
}

interface Props {
  baHeading?: string
  baBgImage?: string
}

export default function Section08_BeforeAfter({
  baHeading = "From blocked AI projects to enabled enterprise AI with usable outputs",
  baBgImage = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-smoke-pink.png",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        .idx-inner { width: 100%; container-type: inline-size; }

        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        .idx-brand { color: ${P.brandSecondary}; }

        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }

        .idx-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px) { .idx-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

        .idx-card {
          background-color: ${P.surfaceWhite}; border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .idx-card { padding: 32px; } }
        .idx-card__badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-radius: 9999px;
          font-size: 12px; font-weight: 600; line-height: 1;
          margin-bottom: 12px; width: fit-content;
        }
        .idx-card__badge--brand { color: ${P.brandSecondary}; border: 1px solid ${P.brandSecondary}; }
        .idx-card__badge--red   { color: ${P.error}; border: 1px solid ${P.error}; }
        .idx-card__title { font-size: 24px; font-weight: 700; color: ${P.textPrimary}; line-height: 1.2; margin-bottom: 12px; }
        .idx-card__title--sm { font-size: 18px; }

        .idx-bullet { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 12px; }
        .idx-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .idx-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .idx-bullet--dot  .idx-bullet__icon::before { content: "\\2022"; color: ${P.brandSecondary}; font-weight: 700; font-size: 18px; line-height: 1; }
        .idx-bullet--check .idx-bullet__icon::before { content: "\\2713"; color: ${P.success}; font-weight: 700; font-size: 16px; line-height: 1; }

        .idx-section--bg-img {
          background-image: url('${baBgImage}');
          background-size: cover; background-position: center;
          position: relative;
        }
        .idx-section--bg-img::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-section--bg-img > * { position: relative; z-index: 1; }
        @container (max-width: 767px) { .idx-section--bg-img { background-image: none; } }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">
          <section id="section-8" className="idx-section idx-section--bg-img">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{baHeading}</h2>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--red">WITHOUT LLM CAPSULE</span>
                  <h3 className="idx-card__title idx-card__title--sm">Enterprise AI is blocked or broken</h3>
                  <ul className="idx-bullet idx-bullet--dot">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>AI blocked entirely — security teams reject proposals due to data exposure risk</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Masking and redaction strip context — AI outputs are abstracted and unusable for enterprise workflows</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Manual review workflows persist — documents require human processing because AI cannot be trusted with real data</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Document structure destroyed — flat masking breaks tables, entity relationships, and cross-references</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Low-quality AI output — even when AI is permitted, outputs require extensive manual reconstruction to be usable</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Enterprise AI projects stall in pilot — no path from proof of concept to production deployment</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">WITH LLM CAPSULE</span>
                  <h3 className="idx-card__title idx-card__title--sm">AI adoption enabled on real enterprise data</h3>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>AI enabled on sensitive documents — the data layer handles protection so teams can focus on AI outcomes</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Real documents processed with best-in-class LLMs — ChatGPT, Claude, Gemini, Perplexity, or any LLM API</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Compliance satisfied — zero exposure architecture meets enterprise AI governance requirements automatically</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Restored outputs retain original business context — real names, real figures, real references restored locally</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>Tables, layouts, cross-references, and document hierarchy fully preserved through structure-preserving processing</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>98% output similarity with zero data exposure — measured on real enterprise document processing workloads</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Section08_BeforeAfter, {
  baHeading: { type: ControlType.String, title: "Before/After Heading", defaultValue: "From blocked AI projects to enabled enterprise AI with usable outputs", displayTextArea: true },
  baBgImage: { type: ControlType.Image,  title: "Before/After BG Image" },
})
