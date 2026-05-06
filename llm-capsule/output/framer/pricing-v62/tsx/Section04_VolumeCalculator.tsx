import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// Section 04 — Volume Calculator
// Interactive range slider → recommended tier
// Uses useState for slider value + dynamic recommendation text

interface Props {
  sectionEyebrow?:    string
  sectionTitle?:      string
  sectionDesc?:       string
  calcTitle?:         string
  calcDesc?:          string
  sliderMin?:         number
  sliderMax?:         number
  sliderDefault?:     number
  rangeLabel?:        string
  recLabel?:          string

  // Threshold 1 (< 5000): Proof of Value
  tier1Name?:    string
  tier1Desc?:    string

  // Threshold 2 (5000–99999): Enterprise
  tier2Name?:    string
  tier2Desc?:    string

  // Threshold 3 (≥ 100000): Enterprise + AWS
  tier3Name?:    string
  tier3Desc?:    string

  // Thresholds (editable)
  threshold1?: number
  threshold2?: number
}

export default function Section04_VolumeCalculator({
  sectionEyebrow  = "Quick estimate",
  sectionTitle    = "Find your tier",
  sectionDesc     = "Estimate your monthly document processing volume to find the right tier.",
  calcTitle       = "Monthly document processing volume",
  calcDesc        = "Drag the slider to your expected volume. We'll suggest the most common tier match.",
  sliderMin       = 100,
  sliderMax       = 1000000,
  sliderDefault   = 5000,
  rangeLabel      = "100 ↔ 1,000,000+",
  recLabel        = "RECOMMENDED TIER",

  tier1Name  = "Workflow Proof of Value",
  tier1Desc  = "Evaluation scope — best for first 4-8 weeks, one production workflow",

  tier2Name  = "Enterprise",
  tier2Desc  = "Production-grade with full SLA, custom markers, both execution paths",

  tier3Name  = "Enterprise + AWS Marketplace",
  tier3Desc  = "High-volume production. AWS Marketplace eligible for streamlined procurement",

  threshold1 = 5000,
  threshold2 = 100000,
}: Props) {
  const [volume, setVolume] = useState<number>(sliderDefault)

  function getRecommendation(v: number): { name: string; desc: string } {
    if (v < threshold1) return { name: tier1Name ?? "", desc: tier1Desc ?? "" }
    if (v < threshold2) return { name: tier2Name ?? "", desc: tier2Desc ?? "" }
    return { name: tier3Name ?? "", desc: tier3Desc ?? "" }
  }

  const rec = getRecommendation(volume)
  const displayVolume = volume.toLocaleString()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
        }

        .s4-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s4-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s4-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .s4-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 16px;
        }

        .s4-h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .s4-section-desc {
          font-size: clamp(16px, 1.4vw, 18px);
          color: var(--c-ink-soft, #3a3d5e);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .s4-calc {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: clamp(28px, 4vw, 48px);
        }

        .s4-calc-title {
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 700;
          color: var(--c-bg, #ffffff);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 8px;
        }

        .s4-calc-desc {
          font-size: 14px;
          color: #c8c4f7;
          margin-bottom: 32px;
          line-height: 1.6;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-slider-wrap {
          margin-bottom: 28px;
        }

        .s4-slider-label {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: #c8c4f7;
          margin-bottom: 10px;
        }

        .s4-slider-value {
          color: var(--c-bg, #ffffff);
          font-weight: 700;
          font-size: 20px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          min-width: 80px;
        }

        .s4-slider-range {
          font-size: 11px;
          color: var(--c-muted, #6b7280);
        }

        .s4-slider {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          height: 6px;
          background-color: var(--c-bg-dark-2, #1b1d4a);
          border-radius: 999px;
          outline: none;
          cursor: pointer;
          display: block;
        }

        .s4-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          background-color: var(--c-primary, #5b4fe9);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(91,79,233,0.3);
        }

        .s4-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background-color: var(--c-primary, #5b4fe9);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .s4-result {
          background-color: rgba(255,255,255,0.05);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .s4-rec-label {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          color: #9d95f5;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .s4-rec-tier {
          font-size: 22px;
          color: var(--c-bg, #ffffff);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .s4-rec-desc {
          font-size: 13px;
          color: #c8c4f7;
          line-height: 1.6;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="s4-root">
        <section className="s4-section" id="section-4">
          <div className="s4-container">
            <div className="s4-header">
              <span className="s4-eyebrow">{sectionEyebrow}</span>
              <h2 className="s4-h2">{sectionTitle}</h2>
              <p className="s4-section-desc">{sectionDesc}</p>
            </div>

            <div className="s4-calc">
              <h3 className="s4-calc-title">{calcTitle}</h3>
              <p className="s4-calc-desc">{calcDesc}</p>

              <div className="s4-slider-wrap">
                <div className="s4-slider-label">
                  <span className="s4-slider-value">{displayVolume}</span>
                  <span className="s4-slider-range">{rangeLabel}</span>
                </div>
                <input
                  type="range"
                  className="s4-slider"
                  min={sliderMin}
                  max={sliderMax}
                  step={100}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  aria-label="Monthly document processing volume"
                  aria-valuemin={sliderMin}
                  aria-valuemax={sliderMax}
                  aria-valuenow={volume}
                  aria-valuetext={`${displayVolume} documents`}
                />
              </div>

              <div className="s4-result" role="status" aria-live="polite">
                <div className="s4-rec-label">{recLabel}</div>
                <div className="s4-rec-tier">{rec.name}</div>
                <p className="s4-rec-desc">{rec.desc}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section04_VolumeCalculator, {
  sectionEyebrow:  { type: ControlType.String, title: "Eyebrow",          defaultValue: "Quick estimate" },
  sectionTitle:    { type: ControlType.String, title: "Section Title",    defaultValue: "Find your tier" },
  sectionDesc:     { type: ControlType.String, title: "Section Desc",     defaultValue: "Estimate your monthly document processing volume to find the right tier.", displayTextArea: true },
  calcTitle:       { type: ControlType.String, title: "Calc Title",       defaultValue: "Monthly document processing volume" },
  calcDesc:        { type: ControlType.String, title: "Calc Desc",        defaultValue: "Drag the slider to your expected volume. We'll suggest the most common tier match.", displayTextArea: true },
  sliderMin:       { type: ControlType.Number, title: "Slider Min",       defaultValue: 100 },
  sliderMax:       { type: ControlType.Number, title: "Slider Max",       defaultValue: 1000000 },
  sliderDefault:   { type: ControlType.Number, title: "Slider Default",   defaultValue: 5000 },
  rangeLabel:      { type: ControlType.String, title: "Range Label",      defaultValue: "100 ↔ 1,000,000+" },
  recLabel:        { type: ControlType.String, title: "Rec Label",        defaultValue: "RECOMMENDED TIER" },
  tier1Name:       { type: ControlType.String, title: "Tier 1 Name",      defaultValue: "Workflow Proof of Value" },
  tier1Desc:       { type: ControlType.String, title: "Tier 1 Desc",      defaultValue: "Evaluation scope — best for first 4-8 weeks, one production workflow", displayTextArea: true },
  tier2Name:       { type: ControlType.String, title: "Tier 2 Name",      defaultValue: "Enterprise" },
  tier2Desc:       { type: ControlType.String, title: "Tier 2 Desc",      defaultValue: "Production-grade with full SLA, custom markers, both execution paths", displayTextArea: true },
  tier3Name:       { type: ControlType.String, title: "Tier 3 Name",      defaultValue: "Enterprise + AWS Marketplace" },
  tier3Desc:       { type: ControlType.String, title: "Tier 3 Desc",      defaultValue: "High-volume production. AWS Marketplace eligible for streamlined procurement", displayTextArea: true },
  threshold1:      { type: ControlType.Number, title: "Threshold 1 (<)",  defaultValue: 5000 },
  threshold2:      { type: ControlType.Number, title: "Threshold 2 (<)",  defaultValue: 100000 },
})
