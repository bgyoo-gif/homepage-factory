import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/"

interface Props {
  label?: string
  logo1Img?: string
  logo1Alt?: string
  logo2Img?: string
  logo2Alt?: string
  logo3Img?: string
  logo3Alt?: string
  logo4Img?: string
  logo4Alt?: string
  logo5Img?: string
  logo5Alt?: string
  logo6Text?: string
  logo7Text?: string
  logo8Text?: string
  logo9Img?: string
  logo9Alt?: string
  logo10Img?: string
  logo10Alt?: string
}

export default function Section02_ProofBand({
  label = "Real production deployments — across telecom, healthcare, finance, defense, OT, and legal",
  logo1Img = "",
  logo1Alt = "SK Telecom",
  logo2Img = "",
  logo2Alt = "Deutsche Telekom",
  logo3Img = "",
  logo3Alt = "Claroty",
  logo4Img = "",
  logo4Alt = "EUMC",
  logo5Img = "",
  logo5Alt = "Kyobo",
  logo6Text = "DB Insurance",
  logo7Text = "IBK",
  logo8Text = "Shin&Kim",
  logo9Img = "",
  logo9Alt = "Ministry of National Defense (KR)",
  logo10Img = "",
  logo10Alt = "NAVER Cloud",
}: Props) {
  const r1 = logo1Img || `${IMAGE_BASE}partner-sktelecom.avif`
  const r2 = logo2Img || `${IMAGE_BASE}partner-deutsche-telekom.avif`
  const r3 = logo3Img || `${IMAGE_BASE}partner-claroty.png`
  const r4 = logo4Img || `${IMAGE_BASE}partner-eumc.avif`
  const r5 = logo5Img || `${IMAGE_BASE}partner-kyobo.avif`
  const r9 = logo9Img || `${IMAGE_BASE}partner-korea army.avif`
  const r10 = logo10Img || `${IMAGE_BASE}partner-navercloud.avif`

  const renderLogo = (src: string, alt: string, text?: never) => (
    <div className="s2-logo">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )

  const renderTextLogo = (text: string) => (
    <div className="s2-logo">
      <span className="s2-logo-text">{text}</span>
    </div>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          padding: 32px 0;
          background-color: var(--c-bg-soft, #f7f8fb);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          overflow: hidden;
        }

        .s2-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-muted, #6b7280);
          text-align: center;
          margin-bottom: 20px;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s2-track-wrap {
          overflow: hidden;
          scrollbar-width: none;
        }

        .s2-track-wrap::-webkit-scrollbar { display: none; }

        .s2-track {
          display: flex;
          gap: 24px;
          animation: s2-marquee 32s linear infinite;
          width: max-content;
        }

        .s2-track:hover {
          animation-play-state: paused;
        }

        @keyframes s2-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .s2-logo {
          flex-shrink: 0;
          width: 120px;
          height: 64px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 12px 16px;
        }

        .s2-logo img {
          max-width: 100%;
          max-height: 36px;
          object-fit: contain;
          filter: grayscale(1) opacity(0.65);
          transition: filter 0.2s;
        }

        .s2-logo:hover img {
          filter: grayscale(0) opacity(1);
        }

        .s2-logo-text {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 700;
          color: var(--c-ink-soft, #3a3d5e);
          letter-spacing: 0.05em;
          text-align: center;
          opacity: 0.65;
        }

        @container (max-width: 599px) {
          .s2-logo {
            width: 100px;
            height: 56px;
          }
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-label">{label}</div>
          <div className="s2-track-wrap">
            <div className="s2-track">
              {/* Set 1 */}
              <div className="s2-logo"><img src={r1} alt={logo1Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r2} alt={logo2Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r3} alt={logo3Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r4} alt={logo4Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r5} alt={logo5Alt} loading="lazy" /></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo6Text}</span></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo7Text}</span></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo8Text}</span></div>
              <div className="s2-logo"><img src={r9} alt={logo9Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r10} alt={logo10Alt} loading="lazy" /></div>
              {/* Set 2 — duplicate for seamless loop */}
              <div className="s2-logo"><img src={r1} alt={logo1Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r2} alt={logo2Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r3} alt={logo3Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r4} alt={logo4Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r5} alt={logo5Alt} loading="lazy" /></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo6Text}</span></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo7Text}</span></div>
              <div className="s2-logo"><span className="s2-logo-text">{logo8Text}</span></div>
              <div className="s2-logo"><img src={r9} alt={logo9Alt} loading="lazy" /></div>
              <div className="s2-logo"><img src={r10} alt={logo10Alt} loading="lazy" /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_ProofBand, {
  label:      { type: ControlType.String, title: "Label",          defaultValue: "Real production deployments — across telecom, healthcare, finance, defense, OT, and legal" },
  logo1Img:   { type: ControlType.Image,  title: "Logo 1 (SK Telecom)" },
  logo1Alt:   { type: ControlType.String, title: "Logo 1 Alt",     defaultValue: "SK Telecom" },
  logo2Img:   { type: ControlType.Image,  title: "Logo 2 (Deutsche Telekom)" },
  logo2Alt:   { type: ControlType.String, title: "Logo 2 Alt",     defaultValue: "Deutsche Telekom" },
  logo3Img:   { type: ControlType.Image,  title: "Logo 3 (Claroty)" },
  logo3Alt:   { type: ControlType.String, title: "Logo 3 Alt",     defaultValue: "Claroty" },
  logo4Img:   { type: ControlType.Image,  title: "Logo 4 (EUMC)" },
  logo4Alt:   { type: ControlType.String, title: "Logo 4 Alt",     defaultValue: "EUMC" },
  logo5Img:   { type: ControlType.Image,  title: "Logo 5 (Kyobo)" },
  logo5Alt:   { type: ControlType.String, title: "Logo 5 Alt",     defaultValue: "Kyobo" },
  logo6Text:  { type: ControlType.String, title: "Logo 6 Text",    defaultValue: "DB Insurance" },
  logo7Text:  { type: ControlType.String, title: "Logo 7 Text",    defaultValue: "IBK" },
  logo8Text:  { type: ControlType.String, title: "Logo 8 Text",    defaultValue: "Shin&Kim" },
  logo9Img:   { type: ControlType.Image,  title: "Logo 9 (Defense)" },
  logo9Alt:   { type: ControlType.String, title: "Logo 9 Alt",     defaultValue: "Ministry of National Defense (KR)" },
  logo10Img:  { type: ControlType.Image,  title: "Logo 10 (NAVER Cloud)" },
  logo10Alt:  { type: ControlType.String, title: "Logo 10 Alt",    defaultValue: "NAVER Cloud" },
})
