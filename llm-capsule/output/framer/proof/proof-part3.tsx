// Proof Page — Part 3: Certifications + Patents + Research
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType, useLocaleInfo } from "framer"
import { useState } from "react"

const BG_PATENTS = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-violet-teal.webp"

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Certifications
    certsHeading: "Security and compliance",
    certsHeadingAccent: "standards",
    certsDesc: "Independently audited certifications behind LLM Capsule.",
    // Patents
    patentsHeading: "Patents and",
    patentsHeadingAccent: "applications",
    patentsDesc: "Registered patents and pending applications behind LLM Capsule — the documented foundation for using AI without exposing private information.",
    // Research
    researchHeading: "The research behind the",
    researchHeadingAccent: "protection",
    researchDesc: "LLM Capsule draws on privacy and security research the founding team published in peer-reviewed venues — on de-identification, membership-inference defense, and security in distributed machine learning. Each result below states what the work did, then how the same principle shows up in the data layer today.",
    researchGroup1Title: "De-identification & sensitive-data protection",
    researchGroup2Title: "Membership & inference-attack defense",
    researchExpandClosed: "Show 4 more publications — distributed-learning security & foundations",
    researchExpandOpen: "Show fewer",
    researchGroup3Title: "Federated & distributed-learning security",
    researchGroup4Title: "Foundations & survey",
    researchNote: "Selected publications by the CUBIG founding team and collaborators. Full publication list and citation counts available on request.",
  },
  ko: {},
  de: {},
}

interface CardItem {
  badge: string
  badgeVariant: string
  title: string
  meta: string
  body: string
}

const DEFAULT_CERT_CARDS: CardItem[] = [
  {
    badge: "Certification",
    badgeVariant: "primary",
    title: "ISO 27001 — Information Security Management",
    meta: "International Standard · Certified by Korea Foundation for Quality (KFQ)",
    body: "International standard for information security management. Demonstrates a systematic approach to protecting sensitive information.",
  },
  {
    badge: "Certification",
    badgeVariant: "primary",
    title: "ISO 42001 — AI Management System",
    meta: "International Standard · Certified by Korea Foundation for Quality (KFQ)",
    body: "International standard for AI management systems. Demonstrates responsible AI governance and risk management.",
  },
  {
    badge: "Certification · GS Grade 1",
    badgeVariant: "primary",
    title: "GS Certification (Grade 1) — LLM Capsule",
    meta: "Korean SW Quality Certification, Grade 1 · LLM Capsule 2024 · listed on the public Innovation Procurement Marketplace",
    body: "Top-grade (Grade 1) Korean government software-quality certification, supporting public-sector procurement via the Innovation Marketplace.",
  },
  {
    badge: "Government Track",
    badgeVariant: "gray",
    title: "KISA Fast Track (2024)",
    meta: "Korea Internet & Security Agency (KISA) · 2024",
    body: "Selected for the KISA information-security industry Fast Track program.",
  },
]

const DEFAULT_PATENT_CARDS: CardItem[] = [
  {
    badge: "Patent · KR Registered · US Pending",
    badgeVariant: "primary",
    title: "AI-Based Service Providing Method Without Leaking Private Information and Client Apparatus",
    meta: "KR Reg. No. 10-2757651 (App. 10-2023-0133086, Registered 2025-01-16) · US App. No. 18/908,054 (Filed 2024-10-07)",
    body: "Core LLM Capsule patent. Method and client apparatus for AI services without exposing private information — registered in Korea, pending in the US.",
  },
  {
    badge: "Patent · Pending · KR + US",
    badgeVariant: "gray",
    title: "Method for Providing Security for On-Device Artificial Intelligence Models",
    meta: "KR App. No. 10-2025-0003223 (Filed 2025-01-09) / 10-2026-0000037 (priority, Filed 2026-01-02) · US App. (Ref. PO25-025-US)",
    body: "Security provisioning method for AI models running on-device — supports the on-prem / air-gapped execution path. Korean priority applications with a corresponding US filing.",
  },
  {
    badge: "Patent · Pending · KR · Expedited",
    badgeVariant: "gray",
    title: "Data Management Method and System for AI Execution Control",
    meta: "KR App. No. 10-2026-0053050 · Filed 2026-03-24 · Expedited examination granted 2026-04-08",
    body: "Method and system for controlling and managing data state within AI execution environments. Expedited examination granted.",
  },
  {
    badge: "Patent · Pending · KR",
    badgeVariant: "gray",
    title: "Method and Inference Apparatus for Building Deep Learning Models Robust to Private Information Exposure",
    meta: "KR App. No. 10-2023-0074745 · Filed 2023-06-12",
    body: "Deep-learning model construction robust to private-information exposure. Applicant: Ewha Womans University (co-research).",
  },
  {
    badge: "Patent · Pending · KR",
    badgeVariant: "gray",
    title: "Method and Analysis Apparatus for Building AI Models that Process Heterogeneous Datasets",
    meta: "KR App. No. 10-2023-0013029 · Filed 2023-01-31 · Under examination",
    body: "AI model construction method for heterogeneous datasets. Applicant: Ewha Womans University (co-research).",
  },
]

const DEFAULT_RESEARCH_GROUP1: CardItem[] = [
  {
    badge: "IEEE BIBM 2023",
    badgeVariant: "teal",
    title: "Privacy-Preserving Publishing of Individual-Level Medical Data for Cloud Services",
    meta: "Ho Bae, Heonseok Ha, Siwon Kim · IEEE BIBM · Istanbul, Dec 2023",
    body: "Formalizes how individual-level medical records can be released to cloud services under strict privacy constraints while staying useful. It frames the exact problem LLM Capsule addresses: letting an organization use sensitive data with an external service without handing over the raw records.",
  },
  {
    badge: "IEEE/ACM TCBB 2022",
    badgeVariant: "teal",
    title: "DNA Privacy: Analyzing Malicious DNA Sequences Using Deep Neural Networks",
    meta: "Ho Bae, Seonwoo Min, Hyun-Soo Choi, Sungroh Yoon · IEEE/ACM Transactions on Computational Biology and Bioinformatics · 2022",
    body: "A deep-learning approach to security and privacy on genomic sequences — among the most tightly regulated data classes there is. It shows how far the founding team's privacy research reaches, well beyond the document and tabular data an AI data layer handles day to day.",
  },
  {
    badge: "PSB 2020",
    badgeVariant: "teal",
    title: "AnomiGAN: Generative Adversarial Networks for Anonymizing Private Medical Data",
    meta: "Ho Bae, Dahuin Jung, Hyun-Soo Choi, Sungroh Yoon · Pacific Symposium on Biocomputing · 2020",
    body: "Anonymizes sensitive medical records with a GAN while preserving the statistical structure downstream models rely on. LLM Capsule works from the same structure-preserving principle: it de-identifies fields before they reach an external LLM and restores them afterward, so the data stays usable without being exposed.",
  },
]

const DEFAULT_RESEARCH_GROUP2: CardItem[] = [
  {
    badge: "BMVC 2022",
    badgeVariant: "primary",
    title: "MPGAN: Membership Privacy-Preserving GAN",
    meta: "Heonseok Ha, Uiwon Hwang, Jaehee Jang, Ho Bae, Sungroh Yoon · BMVC · London, Nov 2022",
    body: "Trains generative models that resist membership-inference attacks, so an adversary can't tell whether a given record was in the training data. The same concern drives how LLM Capsule keeps individual records from being re-identifiable in what a model returns.",
  },
  {
    badge: "ACM AsiaCCS 2022",
    badgeVariant: "primary",
    title: "Membership Feature Disentanglement Network",
    meta: "Heonseok Ha, J. Jang, Y. Jeong, S. Yoon · ACM Asia Conference on Computer and Communications Security · 2022",
    body: "Disentangles membership-revealing features from model representations, lowering exposure to inference attacks. It is the kind of privacy guarantee enterprise buyers ask about before sensitive data ever touches a model.",
  },
]

const DEFAULT_RESEARCH_GROUP3: CardItem[] = [
  {
    badge: "ESORICS 2024",
    badgeVariant: "gray",
    title: "VFLIP: A Backdoor Defense for Vertical Federated Learning via Identification and Purification",
    meta: "Yungi Cho, Woorim Han, Miseon Yu, Younghan Lee, Ho Bae, Yunheung Paek · ESORICS · 2024",
    body: "The first backdoor defense built for vertical federated learning, where several parties train together without sharing their raw features. That constraint — getting value from data across organizational boundaries without exposing it — is the same one LLM Capsule resolves for external LLMs.",
  },
  {
    badge: "RAID 2023",
    badgeVariant: "gray",
    title: "Exploring Clustered Federated Learning's Vulnerability against Property Inference Attack",
    meta: "Hyunjun Kim, Yungi Cho, Younghan Lee, Ho Bae, Yunheung Paek · RAID · 2023",
    body: "Shows how a model can leak collective properties of its training data through inference in clustered federated settings. It is the class of inference exposure LLM Capsule reduces at the source — by de-identifying data on-premise before it ever reaches a model.",
  },
  {
    badge: "ESORICS 2023",
    badgeVariant: "gray",
    title: "FLGuard: Byzantine-Robust Federated Learning via Ensemble of Contrastive Models",
    meta: "Younghan Lee, Yungi Cho, Woorim Han, Ho Bae, Yunheung Paek · ESORICS · 2023",
    body: "Keeps federated training reliable when some participants can't be trusted, detecting malicious clients under non-IID data. It is part of the founding team's broader work on security in distributed, multi-party machine learning — the setting regulated enterprises actually operate in.",
  },
]

const DEFAULT_RESEARCH_GROUP4: CardItem[] = [
  {
    badge: "Survey · 2018",
    badgeVariant: "gray",
    title: "Security and Privacy Issues in Deep Learning",
    meta: "Ho Bae, Jaehee Jang, Dahuin Jung, Hyemi Jang, Heonseok Ha, Sungroh Yoon · arXiv:1807.11655 · 2018",
    body: "A widely-cited survey mapping the attack surface of deep learning — adversarial examples, model extraction, data poisoning, and more. It is the threat taxonomy that frames what an AI data layer has to defend against, written by the team years before the product existed.",
  },
]

const fallbackArr = <T,>(arr: T[] | undefined, def: T[]): T[] =>
  arr && arr.length > 0 ? arr : def

interface Props {
  // Certifications
  certsHeading?: string
  certsHeadingAccent?: string
  certsDesc?: string
  certCards?: CardItem[]
  // Patents
  patentsHeading?: string
  patentsHeadingAccent?: string
  patentsDesc?: string
  patentCards?: CardItem[]
  // Research
  researchHeading?: string
  researchHeadingAccent?: string
  researchDesc?: string
  researchGroup1Title?: string
  researchGroup1Cards?: CardItem[]
  researchGroup2Title?: string
  researchGroup2Cards?: CardItem[]
  researchExpandClosed?: string
  researchExpandOpen?: string
  researchGroup3Title?: string
  researchGroup3Cards?: CardItem[]
  researchGroup4Title?: string
  researchGroup4Cards?: CardItem[]
  researchNote?: string
  locale?: "en" | "ko" | "de"
}

export default function ProofPart3({
  certsHeading = "Security and compliance",
  certsHeadingAccent = "standards",
  certsDesc = "Independently audited certifications behind LLM Capsule.",
  certCards = DEFAULT_CERT_CARDS,
  patentsHeading = "Patents and",
  patentsHeadingAccent = "applications",
  patentsDesc = "Registered patents and pending applications behind LLM Capsule — the documented foundation for using AI without exposing private information.",
  patentCards = DEFAULT_PATENT_CARDS,
  researchHeading = "The research behind the",
  researchHeadingAccent = "protection",
  researchDesc = "LLM Capsule draws on privacy and security research the founding team published in peer-reviewed venues — on de-identification, membership-inference defense, and security in distributed machine learning. Each result below states what the work did, then how the same principle shows up in the data layer today.",
  researchGroup1Title = "De-identification & sensitive-data protection",
  researchGroup1Cards = DEFAULT_RESEARCH_GROUP1,
  researchGroup2Title = "Membership & inference-attack defense",
  researchGroup2Cards = DEFAULT_RESEARCH_GROUP2,
  researchExpandClosed = "Show 4 more publications — distributed-learning security & foundations",
  researchExpandOpen = "Show fewer",
  researchGroup3Title = "Federated & distributed-learning security",
  researchGroup3Cards = DEFAULT_RESEARCH_GROUP3,
  researchGroup4Title = "Foundations & survey",
  researchGroup4Cards = DEFAULT_RESEARCH_GROUP4,
  researchNote = "Selected publications by the CUBIG founding team and collaborators. Full publication list and citation counts available on request.",
  locale = "en",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const effectiveLocale: string = framerLocale || locale || "en"
  const isNonEn = effectiveLocale !== "en"
  const T = TRANSLATIONS[effectiveLocale] || TRANSLATIONS.en

  const r = (prop: string, key: string): string =>
    isNonEn
      ? T[key] || prop || TRANSLATIONS.en[key]
      : prop || T[key] || TRANSLATIONS.en[key]

  const [expandOpen, setExpandOpen] = useState(false)

  const _certCards = fallbackArr(certCards, DEFAULT_CERT_CARDS)
  const _patentCards = fallbackArr(patentCards, DEFAULT_PATENT_CARDS)
  const _researchGroup1Cards = fallbackArr(researchGroup1Cards, DEFAULT_RESEARCH_GROUP1)
  const _researchGroup2Cards = fallbackArr(researchGroup2Cards, DEFAULT_RESEARCH_GROUP2)
  const _researchGroup3Cards = fallbackArr(researchGroup3Cards, DEFAULT_RESEARCH_GROUP3)
  const _researchGroup4Cards = fallbackArr(researchGroup4Cards, DEFAULT_RESEARCH_GROUP4)

  const rCertsHeading = r(certsHeading, "certsHeading")
  const rCertsHeadingAccent = r(certsHeadingAccent, "certsHeadingAccent")
  const rCertsDesc = r(certsDesc, "certsDesc")
  const rPatentsHeading = r(patentsHeading, "patentsHeading")
  const rPatentsHeadingAccent = r(patentsHeadingAccent, "patentsHeadingAccent")
  const rPatentsDesc = r(patentsDesc, "patentsDesc")
  const rResearchHeading = r(researchHeading, "researchHeading")
  const rResearchHeadingAccent = r(researchHeadingAccent, "researchHeadingAccent")
  const rResearchDesc = r(researchDesc, "researchDesc")
  const rResearchGroup1Title = r(researchGroup1Title, "researchGroup1Title")
  const rResearchGroup2Title = r(researchGroup2Title, "researchGroup2Title")
  const rResearchExpandClosed = r(researchExpandClosed, "researchExpandClosed")
  const rResearchExpandOpen = r(researchExpandOpen, "researchExpandOpen")
  const rResearchGroup3Title = r(researchGroup3Title, "researchGroup3Title")
  const rResearchGroup4Title = r(researchGroup4Title, "researchGroup4Title")
  const rResearchNote = r(researchNote, "researchNote")

  const badgeClass = (variant: string) => {
    if (variant === "teal") return "pf3-badge pf3-badge--teal"
    if (variant === "gray") return "pf3-badge pf3-badge--gray"
    return "pf3-badge"
  }

  const renderCard = (card: CardItem, i: number) => (
    <div className="pf3-card" key={i}>
      <div className={badgeClass(card.badgeVariant)}>{card.badge}</div>
      <div className="pf3-card-title">{card.title}</div>
      <div className="pf3-card-meta">{card.meta}</div>
      <p className="pf3-card-body">{card.body}</p>
    </div>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .pf3-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #fff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.55;
        }
        .pf3-root *, .pf3-root *::before, .pf3-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ── SHARED LAYOUT ── */
        .pf3-section {
          padding: var(--s-section, clamp(64px, 8vw, 128px)) 0;
        }
        .pf3-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 16px;
        }
        .pf3-section-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .pf3-section-head h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .pf3-section-head p {
          font-size: clamp(15px, 1.2vw, 17px);
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.65;
          max-width: 720px;
          margin: 0 auto;
        }
        .pf3-accent {
          color: var(--c-primary, #5b4fe9);
        }

        /* ── CARD ── */
        .pf3-card {
          background-color: var(--c-bg, #fff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          transition: border-color 0.2s;
        }
        .pf3-card:hover {
          border-color: color-mix(in srgb, var(--c-rule, #e5e7eb) 85%, var(--c-ink, #0f1130));
        }
        .pf3-badge {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
        }
        .pf3-badge--gray {
          color: var(--c-muted, #6b7280);
        }
        .pf3-badge--teal {
          color: var(--c-teal, #0ea5a4);
        }
        .pf3-card-title {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          line-height: 1.35;
        }
        .pf3-card-meta {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10.5px;
          color: var(--c-muted, #6b7280);
          line-height: 1.5;
        }
        .pf3-card-body {
          font-size: 13px;
          color: var(--c-ink-soft, #3a3d5e);
          line-height: 1.55;
        }

        /* ── CARD GRID ── */
        .pf3-grid {
          display: grid;
          gap: 14px;
        }
        .pf3-grid--2col {
          grid-template-columns: 1fr;
        }
        .pf3-grid--3col {
          grid-template-columns: 1fr;
        }
        .pf3-grid--mb {
          margin-bottom: 32px;
        }

        /* ── SECTION: CERTIFICATIONS ── */
        .pf3-certs {
          background-color: var(--c-bg, #fff);
        }

        /* ── SECTION: PATENTS (BG IMAGE) ── */
        .pf3-patents {
          position: relative;
          background-image: url('${BG_PATENTS}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .pf3-patents::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.88);
          pointer-events: none;
        }
        .pf3-patents > .pf3-container {
          position: relative;
          z-index: 1;
        }

        /* ── SECTION: RESEARCH ── */
        .pf3-research {
          background-color: var(--c-bg, #fff);
        }

        /* ── SUB-TITLE ── */
        .pf3-sub-title {
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          margin: 8px 0 14px;
        }
        .pf3-sub-title--teal {
          color: var(--c-teal-dark, #0b7f7e);
        }
        .pf3-sub-title--purple {
          color: var(--c-primary, #5b4fe9);
        }
        .pf3-sub-title--amber {
          color: var(--c-amber, #f59e0b);
        }
        .pf3-sub-title--gray {
          color: var(--c-muted, #6b7280);
        }

        /* ── EXPAND TOGGLE ── */
        .pf3-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          color: var(--c-primary, #5b4fe9);
          padding: 10px 16px;
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: 999px;
          background: none;
          cursor: pointer;
          transition: border-color 0.2s;
          margin-top: 8px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
        }
        .pf3-expand-btn:hover {
          border-color: var(--c-primary, #5b4fe9);
        }
        .pf3-expand-icon {
          font-size: 14px;
          line-height: 1;
          transition: transform 0.2s;
          display: inline-block;
        }
        .pf3-expand-icon--open {
          transform: rotate(45deg);
        }
        .pf3-expand-body {
          margin-top: 28px;
        }

        /* ── RESEARCH NOTE ── */
        .pf3-research-note {
          margin-top: 26px;
          font-family: var(--f-mono, 'JetBrains Mono', monospace);
          font-size: 10.5px;
          color: var(--c-muted, #6b7280);
          line-height: 1.5;
        }

        /* ── CONTAINER QUERIES ── */
        @container (min-width: 600px) {
          .pf3-grid--2col {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .pf3-grid--3col {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .pf3-container {
            padding: 0 32px;
          }
          .pf3-section-head p {
            max-width: 720px;
          }
        }
        @container (min-width: 980px) {
          .pf3-grid--3col {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @container (min-width: 1440px) {
          .pf3-container {
            padding: 0 120px;
          }
          .pf3-section-head p {
            max-width: 860px;
          }
        }
        @container (max-width: 599px) {
          .pf3-patents {
            background-image: none;
          }
        }
      `}</style>

      <div className="pf3-root">

        {/* ── SECTION 02: CERTIFICATIONS ── */}
        <section className="pf3-section pf3-certs" id="certs">
          <div className="pf3-container">
            <div className="pf3-section-head">
              <h2>
                {rCertsHeading}{" "}
                <span className="pf3-accent">{rCertsHeadingAccent}</span>
              </h2>
              <p>{rCertsDesc}</p>
            </div>
            <div className="pf3-grid pf3-grid--2col">
              {_certCards.map((card, i) => renderCard(card, i))}
            </div>
          </div>
        </section>

        {/* ── SECTION 03: PATENTS ── */}
        <section className="pf3-section pf3-patents" id="patents">
          <div className="pf3-container">
            <div className="pf3-section-head">
              <h2>
                {rPatentsHeading}{" "}
                <span className="pf3-accent">{rPatentsHeadingAccent}</span>
              </h2>
              <p>{rPatentsDesc}</p>
            </div>
            <div className="pf3-grid pf3-grid--3col">
              {_patentCards.map((card, i) => renderCard(card, i))}
            </div>
          </div>
        </section>

        {/* ── SECTION 04: RESEARCH ── */}
        <section className="pf3-section pf3-research" id="research">
          <div className="pf3-container">
            <div className="pf3-section-head">
              <h2>
                {rResearchHeading}{" "}
                <span className="pf3-accent">{rResearchHeadingAccent}</span>
              </h2>
              <p>{rResearchDesc}</p>
            </div>

            {/* Group 1: De-identification */}
            <h3 className="pf3-sub-title pf3-sub-title--teal">{rResearchGroup1Title}</h3>
            <div className="pf3-grid pf3-grid--3col pf3-grid--mb">
              {_researchGroup1Cards.map((card, i) => renderCard(card, i))}
            </div>

            {/* Group 2: Membership inference */}
            <h3 className="pf3-sub-title pf3-sub-title--purple">{rResearchGroup2Title}</h3>
            <div className="pf3-grid pf3-grid--3col pf3-grid--mb">
              {_researchGroup2Cards.map((card, i) => renderCard(card, i))}
            </div>

            {/* Expandable: Groups 3 + 4 */}
            <button
              className="pf3-expand-btn"
              onClick={() => setExpandOpen(!expandOpen)}
              aria-expanded={expandOpen}
            >
              <span className={`pf3-expand-icon${expandOpen ? " pf3-expand-icon--open" : ""}`}>+</span>
              {expandOpen ? rResearchExpandOpen : rResearchExpandClosed}
            </button>

            {expandOpen && (
              <div className="pf3-expand-body">
                <h3 className="pf3-sub-title pf3-sub-title--amber">{rResearchGroup3Title}</h3>
                <div className="pf3-grid pf3-grid--3col pf3-grid--mb">
                  {_researchGroup3Cards.map((card, i) => renderCard(card, i))}
                </div>

                <h3 className="pf3-sub-title pf3-sub-title--gray">{rResearchGroup4Title}</h3>
                <div className="pf3-grid pf3-grid--3col">
                  {_researchGroup4Cards.map((card, i) => renderCard(card, i))}
                </div>
              </div>
            )}

            <p className="pf3-research-note">{rResearchNote}</p>
          </div>
        </section>

      </div>
    </>
  )
}

addPropertyControls(ProofPart3, {
  // ── CERTIFICATIONS ──
  certsHeading: {
    type: ControlType.String,
    title: "Certs Heading",
    defaultValue: "Security and compliance",
  },
  certsHeadingAccent: {
    type: ControlType.String,
    title: "Certs Heading Accent",
    defaultValue: "standards",
  },
  certsDesc: {
    type: ControlType.String,
    title: "Certs Description",
    displayTextArea: true,
    defaultValue: "Independently audited certifications behind LLM Capsule.",
  },
  certCards: {
    type: ControlType.Array,
    title: "Cert Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "primary",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  // ── PATENTS ──
  patentsHeading: {
    type: ControlType.String,
    title: "Patents Heading",
    defaultValue: "Patents and",
  },
  patentsHeadingAccent: {
    type: ControlType.String,
    title: "Patents Heading Accent",
    defaultValue: "applications",
  },
  patentsDesc: {
    type: ControlType.String,
    title: "Patents Description",
    displayTextArea: true,
    defaultValue: "Registered patents and pending applications behind LLM Capsule — the documented foundation for using AI without exposing private information.",
  },
  patentCards: {
    type: ControlType.Array,
    title: "Patent Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "primary",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  // ── RESEARCH ──
  researchHeading: {
    type: ControlType.String,
    title: "Research Heading",
    defaultValue: "The research behind the",
  },
  researchHeadingAccent: {
    type: ControlType.String,
    title: "Research Heading Accent",
    defaultValue: "protection",
  },
  researchDesc: {
    type: ControlType.String,
    title: "Research Description",
    displayTextArea: true,
    defaultValue: "LLM Capsule draws on privacy and security research the founding team published in peer-reviewed venues — on de-identification, membership-inference defense, and security in distributed machine learning. Each result below states what the work did, then how the same principle shows up in the data layer today.",
  },
  researchGroup1Title: {
    type: ControlType.String,
    title: "Research Group 1 Title",
    defaultValue: "De-identification & sensitive-data protection",
  },
  researchGroup1Cards: {
    type: ControlType.Array,
    title: "Research Group 1 Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "teal",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  researchGroup2Title: {
    type: ControlType.String,
    title: "Research Group 2 Title",
    defaultValue: "Membership & inference-attack defense",
  },
  researchGroup2Cards: {
    type: ControlType.Array,
    title: "Research Group 2 Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "primary",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  researchExpandClosed: {
    type: ControlType.String,
    title: "Expand Closed Label",
    defaultValue: "Show 4 more publications — distributed-learning security & foundations",
  },
  researchExpandOpen: {
    type: ControlType.String,
    title: "Expand Open Label",
    defaultValue: "Show fewer",
  },
  researchGroup3Title: {
    type: ControlType.String,
    title: "Research Group 3 Title",
    defaultValue: "Federated & distributed-learning security",
  },
  researchGroup3Cards: {
    type: ControlType.Array,
    title: "Research Group 3 Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "gray",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  researchGroup4Title: {
    type: ControlType.String,
    title: "Research Group 4 Title",
    defaultValue: "Foundations & survey",
  },
  researchGroup4Cards: {
    type: ControlType.Array,
    title: "Research Group 4 Cards",
    control: {
      type: ControlType.Object,
      controls: {
        badge: { type: ControlType.String, title: "Badge" },
        badgeVariant: {
          type: ControlType.Enum,
          title: "Badge Variant",
          options: ["primary", "gray", "teal"],
          optionTitles: ["Primary (purple)", "Gray", "Teal"],
          defaultValue: "gray",
        },
        title: { type: ControlType.String, title: "Title" },
        meta: { type: ControlType.String, title: "Meta" },
        body: { type: ControlType.String, title: "Body", displayTextArea: true },
      },
    },
  },
  researchNote: {
    type: ControlType.String,
    title: "Research Note",
    displayTextArea: true,
    defaultValue: "Selected publications by the CUBIG founding team and collaborators. Full publication list and citation counts available on request.",
  },
  locale: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "Korean", "Deutsch"],
    defaultValue: "en",
  },
})
