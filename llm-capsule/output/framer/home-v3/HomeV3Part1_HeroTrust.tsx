import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"

const LOGOS = [
  "Deutsche Telekom", "SK Telecom", "Claroty", "IBK",
  "DB Insurance", "Shin & Kim", "EUMC",
  "Ministry of National Defense", "AWS Marketplace",
]

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    heroEyebrow: "Your AI pilot is stalled on one thing: the data can't leave",
    heroTitle: "Your AI stops at the data it can't touch.",
    heroTitleAccent: "Capsule gets it through.",
    heroLead: "The log that would close the ticket can’t leave the building, so your model never sees it. Mask it and node=████ tells the AI nothing. Capsule sends a protected working version through your approved model, and the real answer comes back in the workflow.",
    ctaPrimaryLabel: "Request a Demo",
    ctaGhostLabel: "See how it works",
    trustIndicator: "Proven on operational data that can’t leave, in",
    trustIndustries: "telecom, industrial / OT, healthcare, finance and public sector",
    animMasking: "Masking",
    animRejects: "model rejects it",
    animCapsule: "LLM Capsule",
    animRuns: "model runs",
    navData: "What it handles",
    navProduct: "Product",
    navArch: "Architecture",
    navSolutions: "Solutions",
    navFaq: "FAQ",
    navMkt: "AWS Marketplace",
    navDemo: "Request a Demo",
  },
  ko: {
    heroEyebrow: "AI 파일럿이 멈춤 이유는 딱 하나입니다: 데이터가 나갈 수 없습니다",
    heroTitle: "AI가 건드릴 수 없는 데이터 앞에서 멈춤니다.",
    heroTitleAccent: "Capsule이 통과시킵니다.",
    heroLead: "티켓을 마무리할 로그는 건물 밖으로 나갈 수 없어 모델은 그 데이터를 볼 수 없습니다. 마스킹하면 node=████는 AI에게 아무 의미가 없습니다. Capsule은 보호된 작업용 버전을 승인된 모델로 보내고, 실제 답변이 워크플로우로 돌아옵니다.",
    ctaPrimaryLabel: "데모 요청하기",
    ctaGhostLabel: "작동 방식 보기",
    trustIndicator: "외부로 나갈 수 없는 운영 데이터로 검증됨:",
    trustIndustries: "통신, 산업/OT, 의료, 금융, 공공 부문",
    animMasking: "마스킹",
    animRejects: "모델이 거부함",
    animCapsule: "LLM Capsule",
    animRuns: "모델이 실행됨",
    navData: "처리 데이터",
    navProduct: "제품",
    navArch: "아키텍처",
    navSolutions: "솔루션",
    navFaq: "FAQ",
    navMkt: "AWS Marketplace",
    navDemo: "데모 요청",
  },
  de: {
    heroEyebrow: "Ihr KI-Pilotprojekt steckt fest — aus einem Grund: Die Daten dürfen nicht raus",
    heroTitle: "Ihre KI stoppt an den Daten, die sie nicht berühren darf.",
    heroTitleAccent: "Capsule bringt sie durch.",
    heroLead: "Das Log, das das Ticket schließen würde, darf das Gebäude nicht verlassen — also sieht Ihr Modell es nie. Maskieren Sie es, und node=████ sagt der KI nichts. Capsule sendet eine geschützte Arbeitsversion über Ihr genehmigtes Modell, und die echte Antwort kommt im Workflow zurück.",
    ctaPrimaryLabel: "Demo anfordern",
    ctaGhostLabel: "So funktioniert es",
    trustIndicator: "Bewährt mit Betriebsdaten, die nicht raus dürfen, in",
    trustIndustries: "Telekommunikation, Industrie/OT, Gesundheitswesen, Finanzen und öffentlichem Sektor",
    animMasking: "Maskierung",
    animRejects: "Modell lehnt ab",
    animCapsule: "LLM Capsule",
    animRuns: "Modell läuft",
    navData: "Datentypen",
    navProduct: "Produkt",
    navArch: "Architektur",
    navSolutions: "Lösungen",
    navFaq: "FAQ",
    navMkt: "AWS Marketplace",
    navDemo: "Demo anfordern",
  },
}

interface Props {
  heroEyebrow?: string
  heroTitle?: string
  heroTitleAccent?: string
  heroLead?: string
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaGhostLabel?: string
  ctaGhostHref?: string
  trustIndicator?: string
  trustIndustries?: string
  locale?: string
}

export default function HomeV3Part1_HeroTrust({
  heroEyebrow = TRANSLATIONS.en.heroEyebrow,
  heroTitle = TRANSLATIONS.en.heroTitle,
  heroTitleAccent = TRANSLATIONS.en.heroTitleAccent,
  heroLead = TRANSLATIONS.en.heroLead,
  ctaPrimaryLabel = TRANSLATIONS.en.ctaPrimaryLabel,
  ctaPrimaryHref = "/request-a-demo",
  ctaGhostLabel = TRANSLATIONS.en.ctaGhostLabel,
  ctaGhostHref = "#architecture",
  trustIndicator = TRANSLATIONS.en.trustIndicator,
  trustIndustries = TRANSLATIONS.en.trustIndustries,
  locale = "en",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const effectiveLocale = framerLocale || locale || "en"
  const isNonEn = effectiveLocale !== "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const r = (prop: string | undefined, key: string) =>
    isNonEn ? (T[key] || prop || TRANSLATIONS.en[key]) : (prop || T[key] || TRANSLATIONS.en[key])

  const _eyebrow = r(heroEyebrow, "heroEyebrow")
  const _title = r(heroTitle, "heroTitle")
  const _accent = r(heroTitleAccent, "heroTitleAccent")
  const _lead = r(heroLead, "heroLead")
  const _ctaPri = r(ctaPrimaryLabel, "ctaPrimaryLabel")
  const _ctaGhost = r(ctaGhostLabel, "ctaGhostLabel")
  const _trustInd = r(trustIndicator, "trustIndicator")
  const _trustBold = r(trustIndustries, "trustIndustries")

  const _animMask = T.animMasking || TRANSLATIONS.en.animMasking
  const _animRejects = T.animRejects || TRANSLATIONS.en.animRejects
  const _animCapsule = T.animCapsule || TRANSLATIONS.en.animCapsule
  const _animRuns = T.animRuns || TRANSLATIONS.en.animRuns
  const _navData = T.navData || TRANSLATIONS.en.navData
  const _navProd = T.navProduct || TRANSLATIONS.en.navProduct
  const _navArch = T.navArch || TRANSLATIONS.en.navArch
  const _navSol = T.navSolutions || TRANSLATIONS.en.navSolutions
  const _navFaq = T.navFaq || TRANSLATIONS.en.navFaq
  const _navMkt = T.navMkt || TRANSLATIONS.en.navMkt
  const _navDemo = T.navDemo || TRANSLATIONS.en.navDemo

  const renderLead = (text: string) => {
    const code = "node=████"
    const idx = text.indexOf(code)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <code className="p1-code">{code}</code>
        {text.slice(idx + code.length)}
      </>
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .p1-root{container-type:inline-size;container-name:p1;width:100%;word-break:keep-all;overflow-wrap:break-word}
        .p1-root *{box-sizing:border-box;margin:0;padding:0}
        .p1-root a{color:inherit;text-decoration:none}
        .p1-wrap{max-width:1280px;margin:0 auto;padding:0 28px}

        .p1-nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(12px);border-bottom:1px solid #e5e7eb}
        .p1-nav-in{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1280px;margin:0 auto;padding:0 28px}
        .p1-logo{font-weight:800;font-size:18px;font-family:'Inter',sans-serif;color:#0f1130}
        .p1-logo b{color:#5b4fe9}
        .p1-nav-links{display:flex;gap:24px;font-size:14.5px;color:#3a3d5e;font-weight:500;font-family:'Inter',sans-serif}
        .p1-nav-links a:hover{color:#0f1130}
        .p1-nav-cta{display:flex;gap:10px;align-items:center}
        .p1-nav-cta .p1-btn{padding:9px 16px;font-size:14px}
        @container p1 (max-width:880px){.p1-nav-links{display:none}.p1-nav-cta .p1-btn-ghost{display:none}}

        .p1-btn{display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:600;padding:14px 26px;border-radius:999px;transition:transform .2s,background .2s,border-color .2s,color .2s;font-family:'Inter',sans-serif;text-decoration:none;color:inherit}
        .p1-btn-primary{background:#5b4fe9;color:#fff;box-shadow:0 4px 6px rgba(15,17,48,.04),0 12px 32px rgba(15,17,48,.10)}
        .p1-btn-primary:hover{background:#3b2fbf;transform:translateY(-2px)}
        .p1-btn-primary::after{content:"\\2192";font-weight:400}
        .p1-btn-ghost{background:#fff;color:#0f1130;border:1px solid #e5e7eb}
        .p1-btn-ghost:hover{border-color:#5b4fe9;color:#5b4fe9}

        .p1-eye{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;background:#0f1130;color:#fff;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:'Inter',sans-serif}
        .p1-eye::before{content:"";width:6px;height:6px;border-radius:50%;background:#0ea5a4;flex:0 0 auto}

        .p1-hero{padding:96px 0 72px;background:linear-gradient(180deg,#f7f8fb 0%,#fff 100%)}
        .p1-hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:46px;align-items:center}
        .p1-hero h1{font-size:clamp(34px,4.8vw,56px);line-height:1.07;font-weight:700;letter-spacing:-.03em;margin-top:18px;font-family:'Inter',sans-serif;color:#0f1130}
        .p1-hero h1 em{font-style:normal;color:#5b4fe9}
        .p1-lead{margin-top:20px;font-size:18px;color:#3a3d5e;max-width:560px;font-family:'Inter',sans-serif;line-height:1.62}
        .p1-hero-cta{margin-top:28px;display:flex;gap:12px;flex-wrap:wrap}
        .p1-code{font-family:ui-monospace,monospace;background:#FBEEE8;color:#c73e3a;padding:1px 5px;border-radius:4px}
        @container p1 (max-width:880px){.p1-hero-grid{grid-template-columns:1fr;gap:34px}}

        .p1-hero-media{position:relative;border-radius:16px;overflow:hidden;min-height:380px;border:1px solid rgba(255,255,255,.06);box-shadow:0 34px 70px -34px rgba(15,17,48,.6);background:radial-gradient(640px 300px at 26% 8%,rgba(14,165,164,.10),transparent 60%),radial-gradient(720px 420px at 82% 24%,rgba(91,79,233,.30),transparent 60%),linear-gradient(180deg,#0f1130,#0f1130)}
        .p1-hm-stage{position:absolute;inset:0;font-family:'JetBrains Mono',monospace;overflow:hidden}
        .p1-hm-bound{position:absolute;left:50%;top:12%;bottom:12%;width:0;border-left:1.5px dashed rgba(14,165,164,.55);animation:p1HmB 8s ease-in-out infinite}
        .p1-hm-div{position:absolute;left:6%;right:6%;top:50%;height:1px;background:rgba(255,255,255,.08)}
        .p1-hm-lab{position:absolute;left:24px;font-family:'Inter',sans-serif;font-weight:700}
        .p1-hm-lab b{font-size:12px;letter-spacing:-.01em}
        .p1-hm-lab small{display:block;font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.42);margin-top:3px}
        .p1-hm-lab.p1-t{top:15%}.p1-hm-lab.p1-t b{color:#ff8a80}
        .p1-hm-lab.p1-b{top:53%}.p1-hm-lab.p1-b b{color:#9d95f5}
        .p1-hm-model{position:absolute;right:6%;width:78px;height:78px;border-radius:14px;background:#1b1d4a;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
        .p1-hm-model.p1-t{top:24%;animation:p1HmFail 8s ease-in-out infinite}
        .p1-hm-model.p1-b{top:60%;animation:p1HmOk 8s ease-in-out infinite}
        .p1-hm-model span{position:relative;font-family:'Inter',sans-serif;font-size:11.5px;font-weight:700;color:#fff;animation:p1HmDim 8s ease-in-out infinite}
        .p1-hm-spin{position:absolute;width:22px;height:22px;border-radius:50%;border:2px solid rgba(157,149,245,.25);border-top-color:#9d95f5;opacity:0;animation:p1Spin .8s linear infinite,p1HmShow 8s ease-in-out infinite}
        .p1-hm-x{position:absolute;font-family:'Inter',sans-serif;font-size:20px;font-weight:800;color:#ef5350;opacity:0;animation:p1HmShow 8s ease-in-out infinite}
        .p1-hm-chip{position:absolute;border-radius:999px;padding:6px 11px;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;white-space:nowrap;opacity:0}
        .p1-ln-t{top:34%}.p1-ln-b{top:70%}
        .p1-c-id{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:#fff}
        .p1-c-mask{background:rgba(239,83,80,.18);border:1px solid rgba(255,138,128,.65);color:#ff8a80}
        .p1-c-bad{background:rgba(239,83,80,.16);border:1px solid rgba(239,83,80,.6);color:#ff8a80}
        .p1-c-cap{background:rgba(91,79,233,.24);border:1px solid rgba(157,149,245,.75);color:#c8c0f5}
        .p1-c-done{background:rgba(94,224,176,.14);border:1px solid rgba(94,224,176,.6);color:#9bebcd}
        .p1-a-id{animation:p1HmId 8s ease-in-out infinite}
        .p1-a-cross{animation:p1HmCross 8s ease-in-out infinite}
        .p1-a-end{animation:p1HmEnd 8s ease-in-out infinite}
        @keyframes p1HmId{0%,3%{left:24px;opacity:0}9%{left:24px;opacity:1}22%{left:32%;opacity:1}27%{left:34%;opacity:0}100%{left:34%;opacity:0}}
        @keyframes p1HmCross{0%,24%{left:32%;opacity:0;transform:scale(.9)}29%{left:32%;opacity:1;transform:scale(1)}46%{left:62%;opacity:1}56%{left:62%;opacity:1}70%{left:32%;opacity:1}75%{left:32%;opacity:0;transform:scale(.9)}100%{left:32%;opacity:0;transform:scale(.9)}}
        @keyframes p1HmEnd{0%,74%{left:24px;opacity:0}80%{left:24px;opacity:1}95%{left:24px;opacity:1}100%{left:24px;opacity:0}}
        @keyframes p1HmFail{0%,46%{box-shadow:0 0 0 0 rgba(239,83,80,0);transform:translateX(0)}49%{transform:translateX(-3px)}51%{box-shadow:0 0 0 8px rgba(239,83,80,.3);transform:translateX(3px)}54%{transform:translateX(-2px)}57%{transform:translateX(0)}60%{box-shadow:0 0 0 0 rgba(239,83,80,0)}100%{box-shadow:0 0 0 0 rgba(239,83,80,0)}}
        @keyframes p1HmOk{0%,46%{box-shadow:0 0 0 0 rgba(157,149,245,0)}53%{box-shadow:0 0 0 9px rgba(91,79,233,.34)}60%{box-shadow:0 0 0 0 rgba(94,224,176,0)}100%{box-shadow:0 0 0 0 rgba(157,149,245,0)}}
        @keyframes p1HmDim{0%,46%{opacity:1}51%{opacity:.12}59%{opacity:.12}64%{opacity:1}100%{opacity:1}}
        @keyframes p1HmShow{0%,46%{opacity:0}51%{opacity:1}59%{opacity:1}64%{opacity:0}100%{opacity:0}}
        @keyframes p1Spin{to{transform:rotate(360deg)}}
        @keyframes p1HmB{0%,30%{opacity:.45}36%,42%{opacity:1}66%,72%{opacity:1}100%{opacity:.45}}
        @container p1 (max-width:900px){.p1-hero-media{min-height:300px}}
        @media(prefers-reduced-motion:reduce){
          .p1-hm-bound,.p1-hm-model,.p1-hm-model span,.p1-hm-spin,.p1-hm-x,.p1-hm-chip{animation:none}
          .p1-c-mask.p1-a-cross,.p1-c-cap.p1-a-cross{opacity:1;left:48%}
          .p1-c-id,.p1-c-bad,.p1-c-done{opacity:0}
          .p1-hm-x{opacity:1}
        }

        .p1-trust{padding:24px 0;border-top:1px solid #e5e7eb;background:#f7f8fb}
        .p1-ind{font-size:13px;color:#6b7280;text-align:center;margin-bottom:14px;font-family:'Inter',sans-serif}
        .p1-ind b{color:#5b4fe9;font-weight:600}
        .p1-marquee-wrap{margin-top:18px;overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(to right,transparent,#000 7%,#000 93%,transparent)}
        .p1-marquee{display:flex;gap:16px;width:max-content;animation:p1LogoScroll 42s linear infinite}
        .p1-marquee:hover{animation-play-state:paused}
        @keyframes p1LogoScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .p1-tile{flex:0 0 auto;width:132px;height:132px;border:1px solid #e5e7eb;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;text-align:center;padding:14px;font-weight:700;color:#6b7280;font-size:13px;line-height:1.35;box-shadow:0 1px 2px rgba(15,17,48,.04);font-family:'Inter',sans-serif}
        @media(prefers-reduced-motion:reduce){.p1-marquee{animation:none;flex-wrap:wrap;width:auto;justify-content:center}}
        :focus-visible{outline:2px solid #5b4fe9;outline-offset:2px}
      `}</style>
      <div className="p1-root">
        <nav className="p1-nav">
          <div className="p1-nav-in">
            <div className="p1-logo">LLM <b>Capsule</b></div>
            <div className="p1-nav-links">
              <a href="#data">{_navData}</a>
              <a href="#capabilities">{_navProd}</a>
              <a href="#architecture">{_navArch}</a>
              <a href="#usecase">{_navSol}</a>
              <a href="#faq">{_navFaq}</a>
            </div>
            <div className="p1-nav-cta">
              <a className="p1-btn p1-btn-ghost" href="#">{_navMkt}</a>
              <a className="p1-btn p1-btn-primary" href={ctaPrimaryHref}>{_navDemo}</a>
            </div>
          </div>
        </nav>

        <header className="p1-hero">
          <div className="p1-wrap p1-hero-grid">
            <div>
              <span className="p1-eye">{_eyebrow}</span>
              <h1>{_title} <em>{_accent}</em></h1>
              <p className="p1-lead">{renderLead(_lead)}</p>
              <div className="p1-hero-cta">
                <a className="p1-btn p1-btn-primary" href={ctaPrimaryHref}>{_ctaPri}</a>
                <a className="p1-btn p1-btn-ghost" href={ctaGhostHref}>{_ctaGhost}</a>
              </div>
            </div>
            <div className="p1-hero-media">
              <div className="p1-hm-stage" role="img" aria-label="The same operational value, two outcomes. Masked, it reaches the model but the model cannot use it and rejects it. As a protected capsule, it reaches the model, the model runs, and the real value is reconstructed inside your environment.">
                <div className="p1-hm-bound"></div>
                <div className="p1-hm-div"></div>
                <div className="p1-hm-lab p1-t"><b>{_animMask}</b><small>{_animRejects}</small></div>
                <div className="p1-hm-lab p1-b"><b>{_animCapsule}</b><small>{_animRuns}</small></div>
                <div className="p1-hm-model p1-t"><span>model</span><i className="p1-hm-x">{"✗"}</i></div>
                <div className="p1-hm-model p1-b"><span>model</span><i className="p1-hm-spin"></i></div>
                <div className="p1-hm-chip p1-c-id p1-ln-t p1-a-id">circuit_id=CKT-77</div>
                <div className="p1-hm-chip p1-c-mask p1-ln-t p1-a-cross">{"████"}</div>
                <div className="p1-hm-chip p1-c-bad p1-ln-t p1-a-end">unusable {"✗"}</div>
                <div className="p1-hm-chip p1-c-id p1-ln-b p1-a-id">circuit_id=CKT-77</div>
                <div className="p1-hm-chip p1-c-cap p1-ln-b p1-a-cross">{"⟨"}capsule:circuit_1{"⟩"}</div>
                <div className="p1-hm-chip p1-c-done p1-ln-b p1-a-end">circuit_id=CKT-77 {"✓"}</div>
              </div>
            </div>
          </div>
        </header>

        <div className="p1-trust">
          <div className="p1-wrap">
            <div className="p1-ind">{_trustInd} <b>{_trustBold}</b></div>
            <div className="p1-marquee-wrap">
              <div className="p1-marquee">
                {[...LOGOS, ...LOGOS].map((name, i) => (
                  <div key={i} className="p1-tile">{name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(HomeV3Part1_HeroTrust, {
  heroEyebrow:     { type: ControlType.String, title: "Eyebrow",        defaultValue: "Your AI pilot is stalled on one thing: the data can’t leave" },
  heroTitle:       { type: ControlType.String, title: "Title",           defaultValue: "Your AI stops at the data it can’t touch." },
  heroTitleAccent: { type: ControlType.String, title: "Title (accent)",  defaultValue: "Capsule gets it through." },
  heroLead:        { type: ControlType.String, title: "Lead",            defaultValue: "The log that would close the ticket can’t leave the building, so your model never sees it. Mask it and node=████ tells the AI nothing. Capsule sends a protected working version through your approved model, and the real answer comes back in the workflow.", displayTextArea: true },
  ctaPrimaryLabel: { type: ControlType.String, title: "CTA Primary",    defaultValue: "Request a Demo" },
  ctaPrimaryHref:  { type: ControlType.String, title: "CTA Primary URL", defaultValue: "/request-a-demo" },
  ctaGhostLabel:   { type: ControlType.String, title: "CTA Ghost",      defaultValue: "See how it works" },
  ctaGhostHref:    { type: ControlType.String, title: "CTA Ghost URL",  defaultValue: "#architecture" },
  trustIndicator:  { type: ControlType.String, title: "Trust text",      defaultValue: "Proven on operational data that can’t leave, in" },
  trustIndustries: { type: ControlType.String, title: "Trust bold",      defaultValue: "telecom, industrial / OT, healthcare, finance and public sector" },
  locale:          { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
})
