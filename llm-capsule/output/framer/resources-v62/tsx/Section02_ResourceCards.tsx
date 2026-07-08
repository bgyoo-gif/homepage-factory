import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"
import { useEffect, useState } from "react"

const TRANSLATIONS = {
  en: {
    card1Count: "8 articles · GEO-optimized",
    card1Title: "Learn",
    card1Desc: "In-depth articles on enterprise context-preserving data layer for AI — architecture patterns, industry deployment guides (telecom, healthcare, finance, defense), pilot-to-production playbooks, sovereign AI under GDPR / EU AI Act.",
    card1LinkLabel: "Browse Learn articles →",
    card1LinkHref: "#articles",
    card2Count: "11 terms · Schema.org",
    card2Title: "Glossary",
    card2Desc: "Definitions of category and architectural concepts — context-preserving data layer for AI, structure-preserving encapsulation, two execution paths, sovereign AI, shadow AI, differential privacy. Each term with definition and cross-links.",
    card2LinkLabel: "Browse Glossary terms →",
    card2LinkHref: "#glossary",
    card3Count: "12 certifications · Compliance",
    card3Title: "Trust Center",
    card3Desc: "Security certifications, compliance frameworks (GDPR / HIPAA / SOX / EU AI Act), audit documentation, DPA template, vendor security questionnaire. Everything compliance and security teams need for evaluation.",
    card3LinkLabel: "Visit Trust Center →",
    card3LinkHref: "/trust",
    card4Count: "FAQ · Contact · Trial support",
    card4Title: "Support",
    card4Desc: "Find answers about free trials, product usage, sensitive data handling, source uploads, account access, and enterprise adoption.",
    card4LinkLabel: "Get support →",
    card4LinkHref: "/resources/support",
  },
  ko: {
    card1Count: "아티클 8편 · GEO 최적화",
    card1Title: "학습 자료",
    card1Desc: "엔터프라이즈 AI 도입에 관한 심층 아티클 — 아키텍처 패턴, 산업별 배포 가이드(통신·의료·금융·국방), 파일럿-투-프로덕션 플레이북, GDPR/EU AI Act 기반 Sovereign AI.",
    card1LinkLabel: "학습 아티클 둘러보기 →",
    card1LinkHref: "#articles",
    card2Count: "용어 11개 · Schema.org",
    card2Title: "용어집",
    card2Desc: "카테고리 및 아키텍처 개념 정의 — 데이터 레이어, 문서 구조 보존 캡슐화, 두 가지 실행 경로, Sovereign AI, Shadow AI, 차등 프라이버시. 각 용어에 정의와 연관 링크 포함.",
    card2LinkLabel: "용어집 둘러보기 →",
    card2LinkHref: "#glossary",
    card3Count: "인증 12개 · 컴플라이언스",
    card3Title: "트러스트 센터",
    card3Desc: "보안 인증, 컴플라이언스 프레임워크(GDPR / HIPAA / SOX / EU AI Act), 감사 문서, DPA 템플릿, 벤더 보안 질문지. 컴플라이언스·보안 팀의 평가에 필요한 모든 자료를 제공합니다.",
    card3LinkLabel: "트러스트 센터 방문하기 →",
    card3LinkHref: "/trust",
    card4Count: "FAQ · 문의 · 데모 지원",
    card4Title: "지원",
    card4Desc: "무료 데모, 제품 사용법, 민감 데이터 처리, 소스 업로드, 계정 접근, 기업 도입에 관한 답변을 확인하세요.",
    card4LinkLabel: "지원 받기 →",
    card4LinkHref: "/resources/support",
  },
  de: {
    card1Count: "8 Artikel · GEO-optimiert",
    card1Title: "Wissen",
    card1Desc: "Technische Fachartikel zum KI-Einsatz im Unternehmen: Architekturmuster, branchenspezifische Deployment-Leitfäden (Telekommunikation, Gesundheitswesen, Finanzwesen, Verteidigung), Pilot-to-Production-Playbooks sowie Sovereign-AI-Strategien unter DSGVO (GDPR) und EU AI Act.",
    card1LinkLabel: "Alle Artikel ansehen →",
    card1LinkHref: "#articles",
    card2Count: "11 Begriffe · Schema.org",
    card2Title: "Glossar",
    card2Desc: "Definitionen zentraler Kategorie- und Architekturkonzepte: Context-Preserving Data Layer for AI, strukturerhaltende Kapsulierung, zwei Ausführungspfade, Sovereign AI, Shadow AI, Differential Privacy. Jeder Begriff mit Erläuterung und Querverweisen.",
    card2LinkLabel: "Alle Glossareinträge ansehen →",
    card2LinkHref: "#glossary",
    card3Count: "12 Zertifizierungen · Compliance",
    card3Title: "Trust Center",
    card3Desc: "Sicherheitszertifizierungen, regulatorische Konformitätsnachweise (DSGVO (GDPR) / HIPAA / SOX / EU AI Act), Prüfdokumentation, DPA-Vorlage sowie ein Fragebogen zur Lieferantensicherheit. Alle Unterlagen, die Compliance- und Sicherheitsteams für die Evaluierung benötigen.",
    card3LinkLabel: "Trust Center aufrufen →",
    card3LinkHref: "/trust",
    card4Count: "FAQ · Kontakt · Demo-Support",
    card4Title: "Support",
    card4Desc: "Antworten zu kostenlosen Demos, Produktnutzung, Umgang mit sensiblen Daten, Quell-Uploads, Kontozugang und Unternehmenseinführung.",
    card4LinkLabel: "Support aufrufen →",
    card4LinkHref: "/resources/support",
  },
} as const

type LKey = keyof typeof TRANSLATIONS.en

interface Props {
  locale?: string
  card1Count?: string
  card1Title?: string
  card1Desc?: string
  card1LinkLabel?: string
  card1LinkHref?: string
  card2Count?: string
  card2Title?: string
  card2Desc?: string
  card2LinkLabel?: string
  card2LinkHref?: string
  card3Count?: string
  card3Title?: string
  card3Desc?: string
  card3LinkLabel?: string
  card3LinkHref?: string
  card4Count?: string
  card4Title?: string
  card4Desc?: string
  card4LinkLabel?: string
  card4LinkHref?: string
}

const CARD_SVGS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
]

export default function Section02_ResourceCards({
  locale = "en",
  card1Count = "",
  card1Title = "",
  card1Desc = "",
  card1LinkLabel = "",
  card1LinkHref = "",
  card2Count = "",
  card2Title = "",
  card2Desc = "",
  card2LinkLabel = "",
  card2LinkHref = "",
  card3Count = "",
  card3Title = "",
  card3Desc = "",
  card3LinkLabel = "",
  card3LinkHref = "",
  card4Count = "",
  card4Title = "",
  card4Desc = "",
  card4LinkLabel = "",
  card4LinkHref = "",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const effectiveLocale = framerLocale || locale || "en"
  const isNonEn = effectiveLocale !== "en"
  const T = TRANSLATIONS[effectiveLocale as keyof typeof TRANSLATIONS] || TRANSLATIONS.en

  const r = (prop: string, key: LKey) =>
    isNonEn ? (T[key] || prop || TRANSLATIONS.en[key]) : (prop || T[key] || TRANSLATIONS.en[key])

  const cards = [
    {
      icon: CARD_SVGS[0],
      count: r(card1Count, "card1Count"),
      title: r(card1Title, "card1Title"),
      desc: r(card1Desc, "card1Desc"),
      linkLabel: r(card1LinkLabel, "card1LinkLabel"),
      linkHref: r(card1LinkHref, "card1LinkHref"),
      iconVariant: "primary",
      highlight: false,
    },
    {
      icon: CARD_SVGS[1],
      count: r(card2Count, "card2Count"),
      title: r(card2Title, "card2Title"),
      desc: r(card2Desc, "card2Desc"),
      linkLabel: r(card2LinkLabel, "card2LinkLabel"),
      linkHref: r(card2LinkHref, "card2LinkHref"),
      iconVariant: "teal",
      highlight: false,
    },
    {
      icon: CARD_SVGS[2],
      count: r(card3Count, "card3Count"),
      title: r(card3Title, "card3Title"),
      desc: r(card3Desc, "card3Desc"),
      linkLabel: r(card3LinkLabel, "card3LinkLabel"),
      linkHref: r(card3LinkHref, "card3LinkHref"),
      iconVariant: "muted",
      highlight: false,
    },
    {
      icon: CARD_SVGS[3],
      count: r(card4Count, "card4Count"),
      title: r(card4Title, "card4Title"),
      desc: r(card4Desc, "card4Desc"),
      linkLabel: r(card4LinkLabel, "card4LinkLabel"),
      linkHref: r(card4LinkHref, "card4LinkHref"),
      iconVariant: "teal",
      highlight: true,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .s2-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          -webkit-font-smoothing: antialiased;
        }

        .s2-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
          background-color: var(--c-bg, #ffffff);
        }

        .s2-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .s2-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        @container (max-width: 599px) {
          .s2-grid { grid-template-columns: 1fr; }
        }

        .s2-card {
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-lg, 16px);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .s2-card--highlight {
          background: radial-gradient(500px 220px at 100% 0%, rgba(91,79,233,.06), transparent 60%), var(--c-bg, #ffffff);
        }

        @container (max-width: 599px) {
          .s2-card { padding: 28px 24px; }
        }

        .s2-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--r-sm, 6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .s2-icon-wrap--primary { background-color: var(--c-primary-soft, #eeebfe); color: var(--c-primary, #5b4fe9); }
        .s2-icon-wrap--teal    { background-color: var(--c-teal-soft, #e6f7f6); color: var(--c-teal, #0ea5a4); }
        .s2-icon-wrap--muted   { background-color: var(--c-bg-soft, #f7f8fb); color: var(--c-muted, #6b7280); }

        .s2-count {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          font-weight: 600;
          color: var(--c-muted, #6b7280);
          letter-spacing: 0.08em;
          padding: 5px 10px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border-radius: 999px;
          align-self: flex-start;
        }

        .s2-card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.2;
          margin: 0;
        }

        .s2-card-desc {
          font-size: 14px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s2-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          padding-top: 12px;
          border-top: 1px solid var(--c-rule, #e5e7eb);
          text-decoration: none;
          transition: color 0.18s;
        }

        .s2-card-link:hover {
          color: var(--c-primary-dark, #3b2fbf);
        }
      `}</style>

      <div className="s2-root">
        <section className="s2-section">
          <div className="s2-container">
            <div className="s2-grid">
              {cards.map((card, i) => (
                <article key={i} className={`s2-card${card.highlight ? " s2-card--highlight" : ""}`}>
                  <div className={`s2-icon-wrap s2-icon-wrap--${card.iconVariant}`}>{card.icon}</div>
                  <span className="s2-count">{card.count}</span>
                  <h2 className="s2-card-title">{card.title}</h2>
                  <p className="s2-card-desc">{card.desc}</p>
                  <a href={card.linkHref} className="s2-card-link">{card.linkLabel}</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(Section02_ResourceCards, {
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    defaultValue: "en",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "한국어", "Deutsch"],
  },
  card1Count:      { type: ControlType.String, title: "Card 1 Count",     defaultValue: "8 articles · GEO-optimized" },
  card1Title:      { type: ControlType.String, title: "Card 1 Title",     defaultValue: "Learn" },
  card1Desc:       { type: ControlType.String, title: "Card 1 Desc",      defaultValue: "In-depth articles on enterprise context-preserving data layer for AI — architecture patterns, industry deployment guides (telecom, healthcare, finance, defense), pilot-to-production playbooks, sovereign AI under GDPR / EU AI Act.", displayTextArea: true },
  card1LinkLabel:  { type: ControlType.String, title: "Card 1 Link",      defaultValue: "Browse Learn articles →" },
  card1LinkHref:   { type: ControlType.String, title: "Card 1 Href",      defaultValue: "#articles" },
  card2Count:      { type: ControlType.String, title: "Card 2 Count",     defaultValue: "11 terms · Schema.org" },
  card2Title:      { type: ControlType.String, title: "Card 2 Title",     defaultValue: "Glossary" },
  card2Desc:       { type: ControlType.String, title: "Card 2 Desc",      defaultValue: "Definitions of category and architectural concepts — context-preserving data layer for AI, structure-preserving encapsulation, two execution paths, sovereign AI, shadow AI, differential privacy. Each term with definition and cross-links.", displayTextArea: true },
  card2LinkLabel:  { type: ControlType.String, title: "Card 2 Link",      defaultValue: "Browse Glossary terms →" },
  card2LinkHref:   { type: ControlType.String, title: "Card 2 Href",      defaultValue: "#glossary" },
  card3Count:      { type: ControlType.String, title: "Card 3 Count",     defaultValue: "12 certifications · Compliance" },
  card3Title:      { type: ControlType.String, title: "Card 3 Title",     defaultValue: "Trust Center" },
  card3Desc:       { type: ControlType.String, title: "Card 3 Desc",      defaultValue: "Security certifications, compliance frameworks (GDPR / HIPAA / SOX / EU AI Act), audit documentation, DPA template, vendor security questionnaire. Everything compliance and security teams need for evaluation.", displayTextArea: true },
  card3LinkLabel:  { type: ControlType.String, title: "Card 3 Link",      defaultValue: "Visit Trust Center →" },
  card3LinkHref:   { type: ControlType.String, title: "Card 3 Href",      defaultValue: "/trust" },
  card4Count:      { type: ControlType.String, title: "Card 4 Count",     defaultValue: "FAQ · Contact · Trial support" },
  card4Title:      { type: ControlType.String, title: "Card 4 Title",     defaultValue: "Support" },
  card4Desc:       { type: ControlType.String, title: "Card 4 Desc",      defaultValue: "Find answers about free trials, product usage, sensitive data handling, source uploads, account access, and enterprise adoption.", displayTextArea: true },
  card4LinkLabel:  { type: ControlType.String, title: "Card 4 Link",      defaultValue: "Get support →" },
  card4LinkHref:   { type: ControlType.String, title: "Card 4 Href",      defaultValue: "/resources/support" },
})
