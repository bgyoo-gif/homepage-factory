import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/"

const DEFAULT_LOGOS: Array<{ src: string; alt: string }> = [
  { src: IMAGE_BASE + "images/partner-gartner.png",          alt: "Gartner Vendor" },
  { src: IMAGE_BASE + "images/partner-deutsche-telekom.avif",alt: "Deutsche Telekom" },
  { src: IMAGE_BASE + "images/partner-sktelecom.avif",       alt: "SK Telecom" },
  { src: IMAGE_BASE + "images/partner-claroty.png",          alt: "Claroty" },
  { src: IMAGE_BASE + "images/partner-eumc.avif",            alt: "EUMC" },
  { src: IMAGE_BASE + "images/partner-kyobo.avif",           alt: "Kyobo" },
  { src: "",                                                   alt: "DB Insurance" },
  { src: "",                                                   alt: "IBK" },
  { src: IMAGE_BASE + "images/partner-navercloud.avif",       alt: "NAVER Cloud" },
  { src: "",                                                   alt: "Shin&Kim" },
  { src: IMAGE_BASE + "images/partner-korea army.avif",       alt: "Ministry of National Defense" },
  { src: IMAGE_BASE + "graphics/cert-iso.png",                alt: "ISO/IEC 27001" },
  { src: IMAGE_BASE + "graphics/cert-iso.png",                alt: "ISO/IEC 42001" },
  { src: IMAGE_BASE + "graphics/cert-kisa.png",               alt: "KISA Fast Track" },
  { src: "",                                                   alt: "AWS Marketplace" },
]

interface Props {
  leadStrong?: string
  leadSuffix?: string
  logo01?: string
  logo01Alt?: string
  logo02?: string
  logo02Alt?: string
  logo03?: string
  logo03Alt?: string
  logo04?: string
  logo04Alt?: string
  logo05?: string
  logo05Alt?: string
  logo06?: string
  logo06Alt?: string
  logo07?: string
  logo07Alt?: string
  logo08?: string
  logo08Alt?: string
  logo09?: string
  logo09Alt?: string
  logo10?: string
  logo10Alt?: string
  logo11?: string
  logo11Alt?: string
  logo12?: string
  logo12Alt?: string
  logo13?: string
  logo13Alt?: string
  logo14?: string
  logo14Alt?: string
  logo15?: string
  logo15Alt?: string
}

export default function Section02_ProofStrip({
  leadStrong = "Trusted by enterprises moving regulated AI from pilot to production",
  leadSuffix = "Telecom · Industrial cybersecurity · Healthcare · Finance · Public sector · Legal",
  logo01 = "",
  logo01Alt = "Gartner Vendor",
  logo02 = "",
  logo02Alt = "Deutsche Telekom",
  logo03 = "",
  logo03Alt = "SK Telecom",
  logo04 = "",
  logo04Alt = "Claroty",
  logo05 = "",
  logo05Alt = "EUMC",
  logo06 = "",
  logo06Alt = "Kyobo",
  logo07 = "",
  logo07Alt = "DB Insurance",
  logo08 = "",
  logo08Alt = "IBK",
  logo09 = "",
  logo09Alt = "NAVER Cloud",
  logo10 = "",
  logo10Alt = "Shin&Kim",
  logo11 = "",
  logo11Alt = "Ministry of National Defense",
  logo12 = "",
  logo12Alt = "ISO/IEC 27001",
  logo13 = "",
  logo13Alt = "ISO/IEC 42001",
  logo14 = "",
  logo14Alt = "KISA Fast Track",
  logo15 = "",
  logo15Alt = "AWS Marketplace",
}: Props) {

  const logoProps = [
    { src: logo01, alt: logo01Alt },
    { src: logo02, alt: logo02Alt },
    { src: logo03, alt: logo03Alt },
    { src: logo04, alt: logo04Alt },
    { src: logo05, alt: logo05Alt },
    { src: logo06, alt: logo06Alt },
    { src: logo07, alt: logo07Alt },
    { src: logo08, alt: logo08Alt },
    { src: logo09, alt: logo09Alt },
    { src: logo10, alt: logo10Alt },
    { src: logo11, alt: logo11Alt },
    { src: logo12, alt: logo12Alt },
    { src: logo13, alt: logo13Alt },
    { src: logo14, alt: logo14Alt },
    { src: logo15, alt: logo15Alt },
  ]

  const logos = logoProps.map((l, i) => ({
    src: l.src || DEFAULT_LOGOS[i]?.src || "",
    alt: l.alt || DEFAULT_LOGOS[i]?.alt || "",
  }))

  const LogoItem = ({ item, keyPrefix }: { item: { src: string; alt: string }; keyPrefix: string }) => (
    <div key={keyPrefix} className="s2-logo">
      {item.src ? (
        <img src={item.src} alt={item.alt} loading="lazy" className="s2-logo-img" />
      ) : (
        <span className="s2-logo-text">{item.alt}</span>
      )}
    </div>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          padding: 40px 0;
          background-color: var(--c-bg-soft, #f7f8fb);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4cqi, 80px));
        }

        .s2-lead {
          text-align: center;
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          margin-bottom: 24px;
        }

        .s2-lead strong {
          color: var(--c-ink, #0f1130);
        }

        .s2-track-wrap {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
          scrollbar-width: none;
        }

        .s2-track-wrap::-webkit-scrollbar {
          display: none;
        }

        .s2-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: s2-marquee 30s linear infinite;
        }

        .s2-track:hover {
          animation-play-state: paused;
        }

        @keyframes s2-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .s2-logo {
          flex-shrink: 0;
          padding: 8px 16px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          background-color: var(--c-bg, #ffffff);
          filter: grayscale(1);
          opacity: 0.7;
          transition: filter 0.2s, opacity 0.2s;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          min-width: 80px;
        }

        .s2-logo:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        .s2-logo-img {
          max-height: 28px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .s2-logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--c-muted, #6b7280);
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <p className="s2-lead">
              <strong>{leadStrong}</strong> &nbsp;&middot;&nbsp; {leadSuffix}
            </p>
          </div>
          <div className="s2-track-wrap">
            <div className="s2-track">
              {/* Set 1 */}
              {logos.map((logo, i) => (
                <div key={`a-${i}`} className="s2-logo">
                  {logo.src ? (
                    <img src={logo.src} alt={logo.alt} loading="lazy" className="s2-logo-img" />
                  ) : (
                    <span className="s2-logo-text">{logo.alt}</span>
                  )}
                </div>
              ))}
              {/* Set 2 (duplicate for seamless loop) */}
              {logos.map((logo, i) => (
                <div key={`b-${i}`} className="s2-logo">
                  {logo.src ? (
                    <img src={logo.src} alt={logo.alt} loading="lazy" className="s2-logo-img" />
                  ) : (
                    <span className="s2-logo-text">{logo.alt}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_ProofStrip, {
  leadStrong: { type: ControlType.String, title: "Lead Bold",   defaultValue: "Trusted by enterprises moving regulated AI from pilot to production" },
  leadSuffix: { type: ControlType.String, title: "Lead Suffix", defaultValue: "Telecom · Industrial cybersecurity · Healthcare · Finance · Public sector · Legal" },
  logo01:     { type: ControlType.Image,  title: "Logo 01 (Gartner)" },
  logo01Alt:  { type: ControlType.String, title: "Logo 01 Alt", defaultValue: "Gartner Vendor" },
  logo02:     { type: ControlType.Image,  title: "Logo 02 (Deutsche Telekom)" },
  logo02Alt:  { type: ControlType.String, title: "Logo 02 Alt", defaultValue: "Deutsche Telekom" },
  logo03:     { type: ControlType.Image,  title: "Logo 03 (SK Telecom)" },
  logo03Alt:  { type: ControlType.String, title: "Logo 03 Alt", defaultValue: "SK Telecom" },
  logo04:     { type: ControlType.Image,  title: "Logo 04 (Claroty)" },
  logo04Alt:  { type: ControlType.String, title: "Logo 04 Alt", defaultValue: "Claroty" },
  logo05:     { type: ControlType.Image,  title: "Logo 05 (EUMC)" },
  logo05Alt:  { type: ControlType.String, title: "Logo 05 Alt", defaultValue: "EUMC" },
  logo06:     { type: ControlType.Image,  title: "Logo 06 (Kyobo)" },
  logo06Alt:  { type: ControlType.String, title: "Logo 06 Alt", defaultValue: "Kyobo" },
  logo07:     { type: ControlType.Image,  title: "Logo 07 (DB Insurance)" },
  logo07Alt:  { type: ControlType.String, title: "Logo 07 Alt", defaultValue: "DB Insurance" },
  logo08:     { type: ControlType.Image,  title: "Logo 08 (IBK)" },
  logo08Alt:  { type: ControlType.String, title: "Logo 08 Alt", defaultValue: "IBK" },
  logo09:     { type: ControlType.Image,  title: "Logo 09 (NAVER Cloud)" },
  logo09Alt:  { type: ControlType.String, title: "Logo 09 Alt", defaultValue: "NAVER Cloud" },
  logo10:     { type: ControlType.Image,  title: "Logo 10 (Shin&Kim)" },
  logo10Alt:  { type: ControlType.String, title: "Logo 10 Alt", defaultValue: "Shin&Kim" },
  logo11:     { type: ControlType.Image,  title: "Logo 11 (Ministry of Defense)" },
  logo11Alt:  { type: ControlType.String, title: "Logo 11 Alt", defaultValue: "Ministry of National Defense" },
  logo12:     { type: ControlType.Image,  title: "Logo 12 (ISO 27001)" },
  logo12Alt:  { type: ControlType.String, title: "Logo 12 Alt", defaultValue: "ISO/IEC 27001" },
  logo13:     { type: ControlType.Image,  title: "Logo 13 (ISO 42001)" },
  logo13Alt:  { type: ControlType.String, title: "Logo 13 Alt", defaultValue: "ISO/IEC 42001" },
  logo14:     { type: ControlType.Image,  title: "Logo 14 (KISA)" },
  logo14Alt:  { type: ControlType.String, title: "Logo 14 Alt", defaultValue: "KISA Fast Track" },
  logo15:     { type: ControlType.Image,  title: "Logo 15 (AWS Marketplace)" },
  logo15Alt:  { type: ControlType.String, title: "Logo 15 Alt", defaultValue: "AWS Marketplace" },
})
