import { addPropertyControls, ControlType } from "framer"

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  brandSecondary: "#5690D4",
  brandFont:      "Oxanium",
  textPrimary:    "#0f0f0f",
  textInverse:    "#ffffff",
  neutral850:     "#141414",
  neutral800:     "#171719",
  neutral700:     "#303135",
  borderDefault:  "#e6e7e9",
  trackingTight:  "-0.5px",
}

// ─── Icons ──────────────────────────────────────────────────────────────────
const ICONS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
]

interface Props {
  sectionLabel?: string
  link1Title?: string; link1Href?: string
  link2Title?: string; link2Href?: string
  link3Title?: string; link3Href?: string
  link4Title?: string; link4Href?: string
  link5Title?: string; link5Href?: string
  link6Title?: string; link6Href?: string
  link7Title?: string; link7Href?: string
}

export default function Section08_Related({
  sectionLabel = "Related",
  link1Title = "Product Overview", link1Href = "/product",
  link2Title = "Architecture", link2Href = "/architecture",
  link3Title = "Trust & Compliance", link3Href = "/trust",
  link4Title = "Request a Demo", link4Href = "/request-a-demo",
  link5Title = "LLM Capsule vs Masking Tools", link5Href = "/resources/learn/llm-capsule-vs-masking-tools",
  link6Title = "Structure-Preserving Processing", link6Href = "/resources/learn/structure-preserving-document-processing",
  link7Title = "PII Protection vs Confidentiality Control", link7Href = "/resources/learn/pii-protection-vs-enterprise-confidentiality-control",
}: Props) {
  const links = [
    { title: link1Title, href: link1Href, icon: ICONS[0] },
    { title: link2Title, href: link2Href, icon: ICONS[1] },
    { title: link3Title, href: link3Href, icon: ICONS[2] },
    { title: link4Title, href: link4Href, icon: ICONS[3] },
    { title: link5Title, href: link5Href, icon: ICONS[4] },
    { title: link6Title, href: link6Href, icon: ICONS[5] },
    { title: link7Title, href: link7Href, icon: ICONS[6] },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&display=swap');

        .s8-section {
          width: 100%;
          padding: 32px 0;
          background-color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
          container-name: s8;
        }
        .s8-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s8-title-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s8-title-icon__icon { color: ${C.brandSecondary}; flex-shrink: 0; }
        .s8-title-icon__text {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: ${C.textPrimary};
          line-height: 1.2;
        }
        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s8-card {
          background-color: ${C.neutral850};
          border: 1px solid ${C.neutral700};
          color: ${C.textInverse};
          border-radius: 18px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s8-card:hover { background-color: ${C.neutral800}; }
        .s8-card__icon { flex-shrink: 0; color: ${C.brandSecondary}; }
        .s8-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: ${C.textInverse};
        }

        @container s8 (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .s8-section { padding: 40px 0; }
        }
        @container s8 (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-section { padding: 60px 0; }
        }
        @container s8 (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
          .s8-section { padding: 60px 0; }
        }
      `}</style>

      <section className="s8-section">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-title-icon">
              <span className="s8-title-icon__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </span>
              <span className="s8-title-icon__text">{sectionLabel}</span>
            </div>
            <div className="s8-grid">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="s8-card">
                  <span className="s8-card__icon">{link.icon}</span>
                  <span className="s8-card__title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_Related, {
  sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Related" },
  link1Title: { type: ControlType.String, title: "Link 1 Title", defaultValue: "Product Overview" },
  link1Href: { type: ControlType.String, title: "Link 1 URL", defaultValue: "/product" },
  link2Title: { type: ControlType.String, title: "Link 2 Title", defaultValue: "Architecture" },
  link2Href: { type: ControlType.String, title: "Link 2 URL", defaultValue: "/architecture" },
  link3Title: { type: ControlType.String, title: "Link 3 Title", defaultValue: "Trust & Compliance" },
  link3Href: { type: ControlType.String, title: "Link 3 URL", defaultValue: "/trust" },
  link4Title: { type: ControlType.String, title: "Link 4 Title", defaultValue: "Request a Demo" },
  link4Href: { type: ControlType.String, title: "Link 4 URL", defaultValue: "/request-a-demo" },
  link5Title: { type: ControlType.String, title: "Link 5 Title", defaultValue: "LLM Capsule vs Masking Tools" },
  link5Href: { type: ControlType.String, title: "Link 5 URL", defaultValue: "/resources/learn/llm-capsule-vs-masking-tools" },
  link6Title: { type: ControlType.String, title: "Link 6 Title", defaultValue: "Structure-Preserving Processing" },
  link6Href: { type: ControlType.String, title: "Link 6 URL", defaultValue: "/resources/learn/structure-preserving-document-processing" },
  link7Title: { type: ControlType.String, title: "Link 7 Title", defaultValue: "PII Protection vs Confidentiality Control" },
  link7Href: { type: ControlType.String, title: "Link 7 URL", defaultValue: "/resources/learn/pii-protection-vs-enterprise-confidentiality-control" },
})
