import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"
import { useState } from "react"

// Support Page — Hero (text-only) + FAQ Accordion (10) + CTA Band
// Route: /resources/support
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Set `locale` in Framer Properties panel or rely on Framer Localization for auto-switch.

interface Props {
  locale?: "en" | "ko" | "de"

  heroEyebrow?: string
  heroTitlePre?: string
  heroTitleHighlight?: string
  heroTitleSuffix?: string
  heroSub?: string
  heroBtnEmailLabel?: string
  heroBtnEmailHref?: string
  heroBtnProductLabel?: string
  heroBtnProductHref?: string

  faqTitlePre?: string
  faqTitleHighlight?: string

  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string
  faq5Q?: string
  faq5A?: string
  faq6Q?: string
  faq6A?: string
  faq7Q?: string
  faq7A?: string
  faq8Q?: string
  faq8A?: string
  faq9Q?: string
  faq9A?: string
  faq10Q?: string
  faq10A?: string

  ctaTitle?: string
  ctaSub?: string
  ctaBtnLabel?: string
  ctaBtnHref?: string
}

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    heroEyebrow: "Support",
    heroTitlePre: "How can we",
    heroTitleHighlight: "help",
    heroTitleSuffix: "?",
    heroSub: "Considering LLM Capsule for your organization? From free trials to how we handle sensitive data, we have compiled the most frequently asked questions before deployment. For anything else, reach out by email anytime.",
    heroBtnEmailLabel: "Email Us",
    heroBtnEmailHref: "mailto:contact@cubig.ai",
    heroBtnProductLabel: "Request a Demo",
    heroBtnProductHref: "/request-a-demo",

    faqTitlePre: "Frequently Asked",
    faqTitleHighlight: "Questions",

    faq1Q: "What is LLM Capsule?",
    faq1A: "LLM Capsule is a context-preserving data layer that lets you use LLMs without losing the context of sensitive data. Sensitive information in your sources and messages is de-identified before being sent to the LLM, while preserving structure and context to maintain response quality. De-identified data in responses can be restored to the original values for review.",

    faq2Q: "Can I try it for free before deploying?",
    faq2A: "Yes. We offer a free trial. You can apply on the <a href=\"/request-a-demo\">demo request page</a>. After review, our team will send you account credentials and onboarding instructions within <strong>24 hours</strong>.",

    faq3Q: "How long is the trial period?",
    faq3A: "<strong>14 days</strong> from the date your account is issued. The countdown starts from the issue date regardless of when you first log in, so we recommend getting started as soon as you receive the onboarding email.",

    faq4Q: "How is sensitive data protected?",
    faq4A: "Sensitive information in your uploaded sources and messages is de-identified before being sent to the LLM. As a result, no sensitive data ever leaves your environment.",

    faq5Q: "How do I restore de-identified data?",
    faq5A: "Click the <strong>Restore View</strong> button at the bottom of the response message to see the original data.",

    faq6Q: "What source files can I upload?",
    faq6A: "We support TXT, DOCX, CSV, XLSX, HWPX, and text-based PDF files. You can upload up to 10 files at a time, with a maximum of 10 MB per source. Image-based PDFs without a text layer can be uploaded after OCR processing.",

    faq7Q: "Can I access admin features with a trial account?",
    faq7A: "Trial accounts have access to app features only. Admin features are available through a separate guided demo session. Contact us at <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a> to request one.",

    faq8Q: "What happens to my data when the trial ends?",
    faq8A: "Your account and all data are <strong>permanently deleted</strong> at the moment the trial expires and cannot be recovered. Please back up any results you need before your trial ends.",

    faq9Q: "How does the full deployment process work?",
    faq9A: "Deployment requirements, environment setup, and timelines are coordinated with our sales team. Please contact us at <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a> to get started.",

    faq10Q: "I encountered an error during the free trial.",
    faq10A: "Please contact us at <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>. Including the time the error occurred and what you were doing will help us resolve it faster.",

    ctaTitle: "Have a deployment question?",
    ctaSub: "Bring your industry, your regulatory profile, and your data. We respond within one business day.",
    ctaBtnLabel: "Request a Live Demo",
    ctaBtnHref: "/request-a-demo",
  },
  ko: {
    heroEyebrow: "Support",
    heroTitlePre: "무엇을",
    heroTitleHighlight: "도와드릴까요",
    heroTitleSuffix: "?",
    heroSub: "LLM Capsule 도입을 검토 중이신가요? 무료 체험부터 민감 정보 처리 방식까지, 도입 전에 가장 많이 묻는 질문을 정리했습니다. 더 궁금한 점이 있으면 언제든 이메일로 문의해 주세요.",
    heroBtnEmailLabel: "이메일 문의",
    heroBtnEmailHref: "mailto:contact@cubig.ai",
    heroBtnProductLabel: "데모 요청",
    heroBtnProductHref: "/request-a-demo",

    faqTitlePre: "자주 묻는",
    faqTitleHighlight: "질문",

    faq1Q: "LLM Capsule이 무엇인가요?",
    faq1A: "LLM Capsule은 민감 데이터의 맥락을 잃지 않고 LLM을 활용하도록 하는 <strong>맥락 보존 데이터 레이어</strong>입니다. 소스와 메시지에 포함된 민감 정보는 LLM으로 전송하기 전에 비식별 처리하되, 구조와 맥락은 유지해서 응답 품질을 지킵니다. 응답에 포함된 비식별 데이터는 원본 데이터로 복원해 확인할 수 있습니다.",

    faq2Q: "도입 전에 무료로 체험해 볼 수 있나요?",
    faq2A: "네. 무료 체험을 제공합니다. <a href=\"/request-a-demo\">데모 요청 페이지</a>에서 신청할 수 있습니다. 담당자가 검토 후 <strong>24시간 이내</strong>에 계정 및 사용 안내를 포함한 메일을 보내드립니다.",

    faq3Q: "체험 기간은 얼마나 되나요?",
    faq3A: "계정 발급 시점부터 <strong>14일</strong>입니다. 최초 로그인 시점과 무관하게 발급일부터 카운트되므로, 안내 메일을 받으시면 되도록 빨리 시작하시길 권장합니다.",

    faq4Q: "민감 정보는 어떻게 보호되나요?",
    faq4A: "업로드한 소스와 전송하는 메시지에 포함된 민감 정보는 LLM으로 전송하기 전에 비식별 처리합니다. 따라서 민감 정보는 외부로 나가지 않습니다.",

    faq5Q: "비식별 데이터는 어떻게 복원하나요?",
    faq5A: "응답 메시지 하단에서 <strong>복원 보기</strong> 버튼을 클릭해서 원본 데이터를 확인할 수 있습니다.",

    faq6Q: "어떤 소스를 업로드할 수 있나요?",
    faq6A: "TXT, DOCX, CSV, XLSX, HWPX와 텍스트형 PDF를 지원합니다. 한 번에 최대 10개, 소스당 최대 10 MB까지 추가할 수 있습니다. 텍스트 레이어가 없는 이미지형 PDF는 OCR 처리 후 추가할 수 있습니다.",

    faq7Q: "체험 계정으로 관리자 기능도 볼 수 있나요?",
    faq7A: "체험 계정은 앱 기능만 사용할 수 있습니다. 관리자 기능은 별도 시연 세션으로 안내해 드립니다. <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>로 요청해 주세요.",

    faq8Q: "체험이 끝나면 데이터는 어떻게 되나요?",
    faq8A: "체험 만료 시점에 계정과 데이터가 <strong>즉시 삭제</strong>되어 복원할 수 없습니다. 보관이 필요한 결과물은 만료 전에 직접 백업해 주세요.",

    faq9Q: "정식 도입은 어떻게 진행되나요?",
    faq9A: "도입 요건·환경·일정은 영업 담당자와 협의해 진행합니다. <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>를 통해 문의해 주세요.",

    faq10Q: "무료 체험 중 오류가 발생했습니다.",
    faq10A: "<a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>로 문의해 주세요. 오류가 발생한 경우 발생 시각과 수행한 작업을 함께 알려주시면 더 빠르게 도와드릴 수 있습니다.",

    ctaTitle: "도입 관련 문의가 있으신가요?",
    ctaSub: "귀사의 산업, 규제 환경, 데이터를 알려주세요. 영업일 기준 1일 이내에 답변드립니다.",
    ctaBtnLabel: "라이브 데모 요청하기",
    ctaBtnHref: "/request-a-demo",
  },
  de: {
    heroEyebrow: "Support",
    heroTitlePre: "Wie können wir",
    heroTitleHighlight: "helfen",
    heroTitleSuffix: "?",
    heroSub: "Erwägen Sie LLM Capsule für Ihr Unternehmen? Von der kostenlosen Testversion bis zum Umgang mit sensiblen Daten haben wir die häufigsten Fragen vor der Einführung zusammengestellt. Bei weiteren Fragen erreichen Sie uns jederzeit per E-Mail.",
    heroBtnEmailLabel: "E-Mail senden",
    heroBtnEmailHref: "mailto:contact@cubig.ai",
    heroBtnProductLabel: "Demo anfragen",
    heroBtnProductHref: "/request-a-demo",

    faqTitlePre: "Häufig gestellte",
    faqTitleHighlight: "Fragen",

    faq1Q: "Was ist LLM Capsule?",
    faq1A: "LLM Capsule ist eine kontexterhaltende Datenschicht, mit der Sie LLMs nutzen können, ohne den Kontext sensibler Daten zu verlieren. Sensible Informationen in Ihren Quellen und Nachrichten werden vor der Übermittlung an das LLM de-identifiziert, wobei Struktur und Kontext erhalten bleiben, um die Antwortqualität zu sichern. De-identifizierte Daten in Antworten können zur Überprüfung auf die Originalwerte zurückgesetzt werden.",

    faq2Q: "Kann ich es vor der Einführung kostenlos testen?",
    faq2A: "Ja. Wir bieten eine kostenlose Testversion an. Sie können sich auf der <a href=\"/request-a-demo\">Demo-Anfrageseite</a> bewerben. Nach der Prüfung sendet Ihnen unser Team innerhalb von <strong>24 Stunden</strong> Zugangsdaten und Onboarding-Anweisungen.",

    faq3Q: "Wie lange dauert die Testphase?",
    faq3A: "<strong>14 Tage</strong> ab dem Ausstellungsdatum Ihres Kontos. Der Countdown beginnt ab dem Ausstellungsdatum, unabhängig davon, wann Sie sich zum ersten Mal anmelden. Wir empfehlen daher, so bald wie möglich nach Erhalt der Onboarding-E-Mail zu beginnen.",

    faq4Q: "Wie werden sensible Daten geschützt?",
    faq4A: "Sensible Informationen in Ihren hochgeladenen Quellen und Nachrichten werden de-identifiziert, bevor sie an das LLM gesendet werden. Dadurch verlassen keine sensiblen Daten Ihre Umgebung.",

    faq5Q: "Wie stelle ich de-identifizierte Daten wieder her?",
    faq5A: "Klicken Sie unten in der Antwortnachricht auf die Schaltfläche <strong>Restore View</strong>, um die Originaldaten anzuzeigen.",

    faq6Q: "Welche Quelldateien kann ich hochladen?",
    faq6A: "Wir unterstützen TXT-, DOCX-, CSV-, XLSX-, HWPX- und textbasierte PDF-Dateien. Sie können bis zu 10 Dateien gleichzeitig hochladen, mit maximal 10 MB pro Quelle. Bildbasierte PDFs ohne Textebene können nach der OCR-Verarbeitung hochgeladen werden.",

    faq7Q: "Kann ich mit einem Testkonto auf Admin-Funktionen zugreifen?",
    faq7A: "Testkonten haben nur Zugriff auf App-Funktionen. Admin-Funktionen sind über eine separate geführte Demositzung verfügbar. Kontaktieren Sie uns unter <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>, um eine Sitzung anzufordern.",

    faq8Q: "Was passiert mit meinen Daten nach Ablauf der Testphase?",
    faq8A: "Ihr Konto und alle Daten werden zum Zeitpunkt des Ablaufs der Testphase <strong>dauerhaft gelöscht</strong> und können nicht wiederhergestellt werden. Bitte sichern Sie alle benötigten Ergebnisse, bevor Ihre Testphase endet.",

    faq9Q: "Wie funktioniert der vollständige Einführungsprozess?",
    faq9A: "Einführungsanforderungen, Umgebungseinrichtung und Zeitpläne werden mit unserem Vertriebsteam abgestimmt. Bitte kontaktieren Sie uns unter <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>, um zu beginnen.",

    faq10Q: "Ich hatte während der kostenlosen Testversion einen Fehler.",
    faq10A: "Bitte kontaktieren Sie uns unter <a href=\"mailto:contact@cubig.ai\">contact@cubig.ai</a>. Die Angabe des Zeitpunkts des Fehlers und der ausgeführten Aktion hilft uns, das Problem schneller zu lösen.",

    ctaTitle: "Haben Sie eine Frage zur Einführung?",
    ctaSub: "Teilen Sie uns Ihre Branche, Ihr regulatorisches Profil und Ihre Daten mit. Wir antworten innerhalb eines Werktages.",
    ctaBtnLabel: "Live-Demo anfordern",
    ctaBtnHref: "/request-a-demo",
  },
}

const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, "")

export default function Support({
  locale = "en",

  heroEyebrow = "",
  heroTitlePre = "",
  heroTitleHighlight = "",
  heroTitleSuffix = "",
  heroSub = "",
  heroBtnEmailLabel = "",
  heroBtnEmailHref = "",
  heroBtnProductLabel = "",
  heroBtnProductHref = "",

  faqTitlePre = "",
  faqTitleHighlight = "",

  faq1Q = "",
  faq1A = "",
  faq2Q = "",
  faq2A = "",
  faq3Q = "",
  faq3A = "",
  faq4Q = "",
  faq4A = "",
  faq5Q = "",
  faq5A = "",
  faq6Q = "",
  faq6A = "",
  faq7Q = "",
  faq7A = "",
  faq8Q = "",
  faq8A = "",
  faq9Q = "",
  faq9A = "",
  faq10Q = "",
  faq10A = "",

  ctaTitle = "",
  ctaSub = "",
  ctaBtnLabel = "",
  ctaBtnHref = "",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug as ("en" | "ko" | "de" | undefined)
  const effectiveLocale: "en" | "ko" | "de" = framerLocale || locale || "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en
  const isNonEn = effectiveLocale !== "en"

  const r = (prop: string, key: string): string =>
    isNonEn ? (T[key] || TRANSLATIONS.en[key] || prop) : (prop || T[key] || TRANSLATIONS.en[key])

  const _heroEyebrow = r(heroEyebrow, "heroEyebrow")
  const _heroTitlePre = r(heroTitlePre, "heroTitlePre")
  const _heroTitleHighlight = r(heroTitleHighlight, "heroTitleHighlight")
  const _heroTitleSuffix = r(heroTitleSuffix, "heroTitleSuffix")
  const _heroSub = r(heroSub, "heroSub")
  const _heroBtnEmailLabel = r(heroBtnEmailLabel, "heroBtnEmailLabel")
  const _heroBtnEmailHref = r(heroBtnEmailHref, "heroBtnEmailHref")
  const _heroBtnProductLabel = r(heroBtnProductLabel, "heroBtnProductLabel")
  const _heroBtnProductHref = r(heroBtnProductHref, "heroBtnProductHref")

  const _faqTitlePre = r(faqTitlePre, "faqTitlePre")
  const _faqTitleHighlight = r(faqTitleHighlight, "faqTitleHighlight")

  const _faq1Q = r(faq1Q, "faq1Q")
  const _faq1A = r(faq1A, "faq1A")
  const _faq2Q = r(faq2Q, "faq2Q")
  const _faq2A = r(faq2A, "faq2A")
  const _faq3Q = r(faq3Q, "faq3Q")
  const _faq3A = r(faq3A, "faq3A")
  const _faq4Q = r(faq4Q, "faq4Q")
  const _faq4A = r(faq4A, "faq4A")
  const _faq5Q = r(faq5Q, "faq5Q")
  const _faq5A = r(faq5A, "faq5A")
  const _faq6Q = r(faq6Q, "faq6Q")
  const _faq6A = r(faq6A, "faq6A")
  const _faq7Q = r(faq7Q, "faq7Q")
  const _faq7A = r(faq7A, "faq7A")
  const _faq8Q = r(faq8Q, "faq8Q")
  const _faq8A = r(faq8A, "faq8A")
  const _faq9Q = r(faq9Q, "faq9Q")
  const _faq9A = r(faq9A, "faq9A")
  const _faq10Q = r(faq10Q, "faq10Q")
  const _faq10A = r(faq10A, "faq10A")

  const _ctaTitle = r(ctaTitle, "ctaTitle")
  const _ctaSub = r(ctaSub, "ctaSub")
  const _ctaBtnLabel = r(ctaBtnLabel, "ctaBtnLabel")
  const _ctaBtnHref = r(ctaBtnHref, "ctaBtnHref")

  const faqItems = [
    { q: _faq1Q, a: _faq1A },
    { q: _faq2Q, a: _faq2A },
    { q: _faq3Q, a: _faq3A },
    { q: _faq4Q, a: _faq4A },
    { q: _faq5Q, a: _faq5A },
    { q: _faq6Q, a: _faq6A },
    { q: _faq7Q, a: _faq7A },
    { q: _faq8Q, a: _faq8A },
    { q: _faq9Q, a: _faq9A },
    { q: _faq10Q, a: _faq10A },
  ].filter((item) => item.q && item.a)

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": stripHtml(item.q),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtml(item.a),
      },
    })),
  })

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
      { "@type": "ListItem", "position": 3, "name": "Support", "item": "https://llmcapsule.ai/resources/support" },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }

        .sp-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        .sp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--r-md, 10px);
          font-family: var(--f-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          border: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-decoration: none;
        }

        .sp-btn--primary {
          background: var(--c-ink, #0f1130);
          color: var(--c-bg, #ffffff);
        }
        .sp-btn--primary:hover {
          background: var(--c-primary, #5b4fe9);
        }

        .sp-btn--ghost {
          background: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border: 1px solid var(--c-rule, #e5e7eb);
        }
        .sp-btn--ghost:hover {
          border-color: var(--c-ink, #0f1130);
        }

        .sp-btn--invert {
          background: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
        }
        .sp-btn--invert:hover {
          background: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary-dark, #3b2fbf);
        }

        .sp-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 12px;
        }

        .sp-text--brand { color: var(--c-primary, #5b4fe9); }

        .sp-section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .sp-section-header h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }

        .sp-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .sp-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }

        /* ── Section 1: Hero ─────────────────────────────── */
        .sp-hero {
          padding-top: 100px;
          padding-bottom: clamp(64px, 8vw, 96px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          text-align: center;
          background-color: var(--c-bg, #ffffff);
        }

        .sp-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .sp-hero h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin-bottom: 20px;
        }

        .sp-hero__sub {
          font-size: clamp(16px, 1.4vw, 19px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto 32px;
        }

        .sp-hero__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        /* ── Section 2: FAQ ──────────────────────────────── */
        .sp-faq-wrap {
          max-width: 820px;
          margin: 0 auto;
        }

        .sp-faq-item {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .sp-faq-item:first-child {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .sp-faq-btn {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 4px;
          font-size: clamp(15px, 1.2vw, 17px);
          font-weight: 600;
          color: var(--c-ink, #0f1130);
          transition: color 0.15s;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
        }

        .sp-faq-btn:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .sp-faq-item__icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          position: relative;
          color: var(--c-muted, #6b7280);
          transition: color 0.2s;
        }

        .sp-faq-item__icon::before,
        .sp-faq-item__icon::after {
          content: '';
          position: absolute;
          background-color: currentColor;
          border-radius: 1px;
        }

        .sp-faq-item__icon::before {
          top: 10px;
          left: 3px;
          width: 16px;
          height: 2px;
        }

        .sp-faq-item__icon::after {
          top: 3px;
          left: 10px;
          width: 2px;
          height: 16px;
          transition: opacity 0.2s;
        }

        .sp-faq-item__icon--open {
          color: var(--c-primary, #5b4fe9);
        }

        .sp-faq-item__icon--open::after {
          opacity: 0;
        }

        .sp-faq-item__a {
          padding: 0 4px 24px;
          color: var(--c-ink-soft, #3a3d5e);
          font-size: 15px;
          line-height: 1.75;
          max-width: 680px;
        }

        .sp-faq-item__a p { margin: 0 0 10px; }
        .sp-faq-item__a p:last-child { margin-bottom: 0; }

        .sp-faq-item__a a {
          color: var(--c-primary, #5b4fe9);
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .sp-faq-item__a a:hover {
          color: var(--c-primary-dark, #3b2fbf);
        }

        .sp-faq-item__a strong,
        .sp-faq-item__a b {
          color: var(--c-ink, #0f1130);
          font-weight: 600;
        }

        /* ── Section 3: CTA Band ─────────────────────────── */
        .sp-cta {
          background-color: var(--c-bg-dark, #0f1130);
          padding: var(--s-section, clamp(64px, 8vw, 128px)) var(--s-page, clamp(20px, 4vw, 80px));
          text-align: center;
        }

        .sp-cta__inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .sp-cta h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--c-bg, #ffffff);
          margin-bottom: 16px;
        }

        .sp-cta p {
          font-size: 16px;
          color: var(--c-primary-soft, #eeebfe);
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.85;
        }

        /* ── Container Query: Mobile ─────────────────────── */
        @container (max-width: 767px) {
          .sp-hero__actions {
            flex-direction: column;
            align-items: center;
          }
          .sp-hero__actions .sp-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          .sp-faq-btn {
            padding: 18px 0;
            font-size: 15px;
          }
          .sp-faq-item__a {
            padding: 0 0 20px;
            font-size: 14px;
          }
          .sp-cta {
            padding: clamp(48px, 8vw, 80px) var(--s-page, 20px);
          }
        }
      `}</style>

      <div className="sp-root">
        <main>

          {/* ── Section 1: Hero — Text-Only ── */}
          <section id="section-1" className="sp-hero">
            <div className="sp-container">
              <div className="sp-hero__inner">
                <span className="sp-eyebrow">{_heroEyebrow}</span>
                <h1>{_heroTitlePre} <span className="sp-text--brand">{_heroTitleHighlight}</span>{_heroTitleSuffix}</h1>
                <p className="sp-hero__sub">{_heroSub}</p>
                <div className="sp-hero__actions">
                  <a className="sp-btn sp-btn--primary" href={_heroBtnEmailHref}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    {_heroBtnEmailLabel}
                  </a>
                  <a className="sp-btn sp-btn--ghost" href={_heroBtnProductHref}>{_heroBtnProductLabel}</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: FAQ — Accordion ── */}
          <section id="section-2" className="sp-section">
            <div className="sp-container">
              <div className="sp-section-header sp-section-header--underline">
                <h2>{_faqTitlePre} <span className="sp-text--brand">{_faqTitleHighlight}</span></h2>
              </div>

              <div className="sp-faq-wrap">
                {faqItems.map((item, i) => (
                  <SupportFaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 3: CTA Band ── */}
          <section id="section-3" className="sp-cta">
            <div className="sp-cta__inner">
              <h2>{_ctaTitle}</h2>
              <p>{_ctaSub}</p>
              <a className="sp-btn sp-btn--invert" href={_ctaBtnHref}>{_ctaBtnLabel}</a>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}

function SupportFaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sp-faq-item">
      <button
        className="sp-faq-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`sp-faq-item__icon${open ? " sp-faq-item__icon--open" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="sp-faq-item__a">
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  )
}

addPropertyControls(Support, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },

  heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow", defaultValue: "" },
  heroTitlePre: { type: ControlType.String, title: "Hero Title (pre)", defaultValue: "" },
  heroTitleHighlight: { type: ControlType.String, title: "Hero Title (highlight)", defaultValue: "" },
  heroTitleSuffix: { type: ControlType.String, title: "Hero Title (suffix)", defaultValue: "" },
  heroSub: { type: ControlType.String, title: "Hero Subtitle", defaultValue: "", displayTextArea: true },
  heroBtnEmailLabel: { type: ControlType.String, title: "Hero Email Btn Label", defaultValue: "" },
  heroBtnEmailHref: { type: ControlType.String, title: "Hero Email Btn URL", defaultValue: "" },
  heroBtnProductLabel: { type: ControlType.String, title: "Hero Product Btn Label", defaultValue: "" },
  heroBtnProductHref: { type: ControlType.String, title: "Hero Product Btn URL", defaultValue: "" },

  faqTitlePre: { type: ControlType.String, title: "FAQ Title (pre)", defaultValue: "" },
  faqTitleHighlight: { type: ControlType.String, title: "FAQ Title (highlight)", defaultValue: "" },

  faq1Q: { type: ControlType.String, title: "FAQ 1 — Q", defaultValue: "" },
  faq1A: { type: ControlType.String, title: "FAQ 1 — A", defaultValue: "", displayTextArea: true },
  faq2Q: { type: ControlType.String, title: "FAQ 2 — Q", defaultValue: "" },
  faq2A: { type: ControlType.String, title: "FAQ 2 — A", defaultValue: "", displayTextArea: true },
  faq3Q: { type: ControlType.String, title: "FAQ 3 — Q", defaultValue: "" },
  faq3A: { type: ControlType.String, title: "FAQ 3 — A", defaultValue: "", displayTextArea: true },
  faq4Q: { type: ControlType.String, title: "FAQ 4 — Q", defaultValue: "" },
  faq4A: { type: ControlType.String, title: "FAQ 4 — A", defaultValue: "", displayTextArea: true },
  faq5Q: { type: ControlType.String, title: "FAQ 5 — Q", defaultValue: "" },
  faq5A: { type: ControlType.String, title: "FAQ 5 — A", defaultValue: "", displayTextArea: true },
  faq6Q: { type: ControlType.String, title: "FAQ 6 — Q", defaultValue: "" },
  faq6A: { type: ControlType.String, title: "FAQ 6 — A", defaultValue: "", displayTextArea: true },
  faq7Q: { type: ControlType.String, title: "FAQ 7 — Q", defaultValue: "" },
  faq7A: { type: ControlType.String, title: "FAQ 7 — A", defaultValue: "", displayTextArea: true },
  faq8Q: { type: ControlType.String, title: "FAQ 8 — Q", defaultValue: "" },
  faq8A: { type: ControlType.String, title: "FAQ 8 — A", defaultValue: "", displayTextArea: true },
  faq9Q: { type: ControlType.String, title: "FAQ 9 — Q", defaultValue: "" },
  faq9A: { type: ControlType.String, title: "FAQ 9 — A", defaultValue: "", displayTextArea: true },
  faq10Q: { type: ControlType.String, title: "FAQ 10 — Q", defaultValue: "" },
  faq10A: { type: ControlType.String, title: "FAQ 10 — A", defaultValue: "", displayTextArea: true },

  ctaTitle: { type: ControlType.String, title: "CTA Title", defaultValue: "" },
  ctaSub: { type: ControlType.String, title: "CTA Subtitle", defaultValue: "", displayTextArea: true },
  ctaBtnLabel: { type: ControlType.String, title: "CTA Btn Label", defaultValue: "" },
  ctaBtnHref: { type: ControlType.String, title: "CTA Btn URL", defaultValue: "" },
})
