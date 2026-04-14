import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

// LLM Capsule Brand Palette
const PALETTE = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  neutral900: "#0f0f0f",
  neutral800: "#171719",
  white:      "#ffffff",
  textPrimary:   "#0f0f0f",
  overlayNavBg:     "rgba(255,255,255,0.92)",
  overlayDarkLight: "rgba(0,0,0,0.15)",
  overlayWhite85:   "rgba(255,255,255,0.85)",
  overlayWhite70:   "rgba(255,255,255,0.70)",
  overlayCtnBtnBdr: "rgba(255,255,255,0.6)",
}

const BG_IMAGE = "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-lavender-gold.png')"

interface Props {
  titlePre?: string
  productName?: string
  titlePost?: string
  description?: string
  button1Label?: string
  button1Href?: string
  button2Label?: string
  button2Href?: string
  footnote?: string
}

export default function Section06_CTA({
  titlePre = "See",
  productName = "LLM Capsule",
  titlePost = "Restorable Workflow in Action",
  description = "Experience how enterprise AI outputs are automatically restored with real business data — no manual post-processing required.",
  button1Label = "Request a Demo",
  button1Href = "/request-a-demo",
  button2Label = "View Product",
  button2Href = "/product",
  footnote = "Enterprise AI Enablement by CUBIG",
}: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-color: ${PALETTE.neutral800};
          background-size: cover;
          background-position: center;
        }

        .s6-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: ${PALETTE.overlayDarkLight};
          z-index: 0;
        }

        .s6-section > * {
          position: relative;
          z-index: 1;
        }

        .s6-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          container-type: inline-size;
        }

        .s6-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${PALETTE.white};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }

        .s6-product-name {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-description {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          color: ${PALETTE.overlayWhite85};
          line-height: 1.7;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s6-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          flex-direction: column;
          align-items: center;
        }

        .s6-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid ${PALETTE.overlayCtnBtnBdr};
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 16px 48px;
          font-size: 18px;
          background-color: ${PALETTE.overlayNavBg};
          color: ${PALETTE.textPrimary};
          backdrop-filter: blur(8px);
          width: 100%;
          max-width: 320px;
        }

        .s6-btn:hover {
          background-color: ${PALETTE.white};
        }

        .s6-footnote {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: ${PALETTE.overlayWhite70};
          margin-top: 8px;
        }

        @container (min-width: 768px) {
          .s6-actions { flex-direction: row; }
          .s6-btn { width: auto; max-width: none; }
          .s6-title { font-size: 40px; }
        }

        @container (min-width: 1024px) {
          .s6-inner { max-width: 720px; }
        }

        @container (min-width: 1440px) {
          .s6-inner { max-width: 1080px; }
          .s6-title { font-size: 50px; }
        }

      `}</style>

      <section
        className="s6-section"
        id="section-cta"
        style={{ backgroundImage: isMobile ? "none" : BG_IMAGE }}
      >
        <div className="s6-inner">
          <h2 className="s6-title">
            {titlePre} <span className="s6-product-name">{productName}</span> {titlePost}
          </h2>
          <p className="s6-description">{description}</p>
          <div className="s6-actions">
            <a href={button1Href} className="s6-btn">{button1Label}</a>
            <a href={button2Href} className="s6-btn">{button2Label}</a>
          </div>
          <p className="s6-footnote">{footnote}</p>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_CTA, {
  titlePre: {
    type: ControlType.String,
    title: "Title (Pre)",
    defaultValue: "See",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "LLM Capsule",
  },
  titlePost: {
    type: ControlType.String,
    title: "Title (Post)",
    defaultValue: "Restorable Workflow in Action",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Experience how enterprise AI outputs are automatically restored with real business data — no manual post-processing required.",
    displayTextArea: true,
  },
  button1Label: {
    type: ControlType.String,
    title: "Button 1 Label",
    defaultValue: "Request a Demo",
  },
  button1Href: {
    type: ControlType.String,
    title: "Button 1 Href",
    defaultValue: "/request-a-demo",
  },
  button2Label: {
    type: ControlType.String,
    title: "Button 2 Label",
    defaultValue: "View Product",
  },
  button2Href: {
    type: ControlType.String,
    title: "Button 2 Href",
    defaultValue: "/product",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "Enterprise AI Enablement by CUBIG",
  },
})
