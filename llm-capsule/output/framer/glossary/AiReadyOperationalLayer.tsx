// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-glossary-tsx.py
// To regenerate: python3 scripts/build-glossary-tsx.py
//
// Self-contained Framer Code Component with locale dropdown (en/ko/de).
// Embedded TRANSLATIONS dict drives default text per locale; individual Props
// remain for per-instance overrides. Set `locale` in Framer Properties panel
// to switch all text simultaneously.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
  backLabel?: string
  backHref?: string
  term?: string
  lead?: string
  category?: string
  definitionLabel?: string
  definitionBody?: string
  bodyHtml?: string
  related1Label?: string
  related1Href?: string
  related2Label?: string
  related2Href?: string
  related3Label?: string
  related3Href?: string
  related4Label?: string
  related4Href?: string
  related5Label?: string
  related5Href?: string
}

const BODY_HTML = `<div class="callout" style="border-left: 4px solid #4f46e5; background: #eef2ff; padding: 16px 20px; margin: 0 0 28px 0; border-radius: 6px;">
<strong>Note on terminology.</strong> "AI-ready operational layer" and "AI enablement data layer" describe the same product category. The site's locked category as of v6.1 is <strong>AI enablement data layer for regulated operations</strong>. Both terms are retained because they appear in earlier collateral, partner conversations, and external references; readers arriving via the older term land here and are routed to the canonical definition.
</div>

<h2>Definition (synonym)</h2>
<p>An <strong>AI enablement data layer</strong> (historically called an <strong>AI-ready operational layer</strong>) is a runtime layer between the existing regulated enterprise environment (NOC, ticket, OT consoles, EHR, mission systems) and large language models. It turns operational data — network logs, incident records, configurations, clinical workflows, mission context — into AI-ready context using structure-preserving, differential-privacy-based encapsulation; executes the AI workflow inside the enterprise environment via two execution paths (external approved LLM with capsule data, or on-prem local lightweight model); and restores results back to the originating workflow via state vault. Distinct from PII guardrails and AI security suites in scope, layer, and execution model.</p>

<h2>Why two terms exist</h2>
<p>"AI-ready operational layer" was used in earlier strategy decks, partner pitches, and Deutsche Telekom T Challenge 2026 materials, with the emphasis on <em>operational data readiness</em>. "AI enablement data layer for regulated operations" was adopted in v6.1 of the customer-facing site, with the emphasis on <em>AI enablement</em> at the data layer for the <em>regulated operations</em> buyer. The product is the same — the marketing language shifted to be more buyer-anchored.</p>

<h2>Canonical category page</h2>
<p>For the full v6.1 definition, customer proof, the four-zone architecture (Corporate Internal Network · DMZ — Demilitarized Zone · In-House Team · Local — Auto Reconstruction), and the six architectural pillars, see <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> and the <a href="/architecture">Architecture</a> page.</p>

<h2>Related</h2>
<ul>
  <li><a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> — canonical category page</li>
  <li><a href="/glossary/operational-data">Operational data</a></li>
  <li><a href="/glossary/two-execution-paths">Two execution paths</a></li>
  <li><a href="/glossary/structure-preserving-encapsulation">Structure-preserving encapsulation</a></li>
  <li><a href="/glossary/differential-privacy">Differential privacy</a></li>
  <li><a href="/glossary/state-vault-for-restoration">State vault for restoration</a></li>
</ul>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "AI-Ready Operational Layer",
    lead: "An earlier name for the same category. The current locked category is AI enablement data layer for regulated operations. This page is retained as a synonym definition for readers arriving via earlier collateral.",
    category: "GLOSSARY · ALIAS / SYNONYM",
    definitionLabel: "Definition",
    definitionBody: "An AI enablement data layer (historically called an AI-ready operational layer) is a runtime layer between the existing regulated enterprise environment (NOC, ticket, OT consoles, EHR, mission systems) and large language models. It turns operational data — network logs, incident records, configurations, clinical workflows, mission context — into AI-ready context using structure-preserving, differential-privacy-based encapsulation; executes the AI workflow inside the enterprise environment via two execution paths (external approved LLM with capsule data, or on-prem local lightweight model); and restores results back to the originating workflow via state vault. Distinct from PII guardrails and AI security suites in scope, layer, and execution model.",
    bodyHtml: BODY_HTML,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  ko: {
    backLabel: "← 용어 사전",
    backHref: "/resources/glossary",
    term: "AI-Ready Operational Layer",
    lead: "동일한 카테고리의 이전 명칭입니다. 현재 공식 카테고리는 AI enablement data layer for regulated operations입니다. 이 페이지는 기존 자료를 통해 유입되는 독자를 위한 동의어 정의로 유지됩니다.",
    category: "GLOSSARY · 별칭 / 동의어",
    definitionLabel: "정의",
    definitionBody: "AI-ready operational layer는 데이터 레이어의 동의어입니다. 규제 환경의 기업(NOC, 티켓, OT 콘솔, EHR, 미션 시스템)과 대규모 언어 모델 사이에 위치하는 런타임 레이어입니다. 문서 구조 보존·차등 프라이버시 기반 캡슐화로 운영 데이터를 AI 준비 컨텍스트로 변환하고, 두 가지 실행 경로를 통해 기업 환경 내부에서 AI 워크플로우를 실행한 뒤 state vault를 통해 원래 워크플로우로 결과를 복원합니다. LLM Capsule 사이트의 현재 공식 카테고리는 'AI enablement data layer for regulated operations'입니다.",
    bodyHtml: `<div class="callout"><strong>용어 안내.</strong> "AI-ready operational layer"와 "AI enablement data layer"는 동일한 제품 카테고리를 가리킵니다. v6.1 기준 사이트의 공식 카테고리는 <strong>AI enablement data layer for regulated operations</strong>입니다. 두 용어 모두 기존 자료, 파트너 대화, 외부 참조에 등장하기 때문에 유지됩니다. 이전 용어로 유입된 독자는 이 페이지를 통해 공식 정의로 안내됩니다.</div>

<h2>정의 (동의어)</h2>

<p>데이터 레이어(이전에는 <strong>AI-ready operational layer</strong>로 불린)는 규제 환경의 기업(NOC, 티켓, OT 콘솔, EHR, 미션 시스템)과 대규모 언어 모델 사이에 위치하는 런타임 레이어입니다. 운영 데이터 — 네트워크 로그, 인시던트 기록, 설정, 임상 워크플로우, 미션 컨텍스트 — 를 문서 구조 보존·차등 프라이버시 기반 캡슐화로 AI 준비 컨텍스트로 변환합니다. 두 가지 실행 경로(캡슐 데이터만 사용하는 외부 승인 LLM, 또는 온프레미스 경량 로컬 모델)를 통해 기업 환경 내부에서 AI 워크플로우를 실행하고, state vault를 통해 원래 워크플로우로 결과를 복원합니다. 범위, 레이어, 실행 모델 측면에서 PII 가드레일 및 AI 보안 제품군과는 명확히 다릅니다.</p>

<h2>두 용어가 공존하는 이유</h2>

<p>"AI-ready operational layer"는 초기 전략 자료, 파트너 피칭, Deutsche Telekom T Challenge 2026 자료에서 사용되었으며 <em>운영 데이터 준비성</em>을 강조한 표현입니다. "AI enablement data layer for regulated operations"는 v6.1 고객 대면 사이트에서 채택된 명칭으로, <em>규제 운영</em> 구매자를 위한 데이터 레이어의 <em>AI 활성화</em>를 강조합니다. 제품은 동일합니다 — 마케팅 언어가 구매자 중심으로 전환된 것입니다.</p>

<h2>공식 카테고리 페이지</h2>

<p>v6.1 전체 정의, 고객 실증 사례, 4구역 아키텍처(기업 내부 네트워크 · DMZ — 비무장 지대 · 내부 팀 · 로컬 — 자동 복원), 6가지 아키텍처 기반 원칙은 <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> 및 <a href="/architecture">아키텍처</a> 페이지를 참조하십시오.</p>

<h2>관련 항목</h2>

<ul>
<li><a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> — 공식 카테고리 페이지</li>
<li><a href="/glossary/operational-data">운영 데이터</a></li>
<li><a href="/glossary/two-execution-paths">두 가지 실행 경로</a></li>
<li><a href="/glossary/structure-preserving-encapsulation">문서 구조 보존 캡슐화</a></li>
<li><a href="/glossary/differential-privacy">차등 프라이버시</a></li>
<li><a href="/glossary/state-vault-for-restoration">복원용 state vault</a></li>
</ul>

---`,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
  de: {
    backLabel: "← Glossar",
    backHref: "/resources/glossary",
    term: "AI-Ready Operational Layer",
    lead: "Diese Bezeichnung wurde in früheren Strategiepräsentationen und Partnerunterlagen verwendet. Die aktuelle Kategorie lautet AI enablement data layer for regulated operations. Diese Seite dient als Synonymdefinition für Leser, die über ältere Materialien auf diese URL gelangen.",
    category: "GLOSSAR · ALIAS / SYNONYM",
    definitionLabel: "Definition",
    definitionBody: "AI-Ready Operational Layer ist ein Synonym für AI enablement data layer. Die Laufzeitschicht positioniert sich zwischen der regulierten Unternehmensumgebung — NOC-Konsolen, Ticket-Systeme, OT-Konsolen, EHR, Missionssysteme — und großen Sprachmodellen. Operative Daten werden mittels strukturerhaltender, Differential-Privacy-basierter Kapsulierung in KI-geeigneten Kontext überführt. KI-Workflows werden über zwei Ausführungspfade innerhalb der Unternehmensumgebung ausgeführt. Die Ergebnisse werden über den State Vault in den ursprünglichen Workflow zurückgeführt. Die aktuelle Kategoriebezeichnung auf der LLM Capsule-Website lautet: AI enablement data layer for regulated operations.",
    bodyHtml: `<div class="callout"><strong>Hinweis zur Terminologie.</strong> „AI-ready operational layer" und „AI enablement data layer" bezeichnen dieselbe Produktkategorie. Die aktuelle Kategoriebezeichnung ab v6.1 lautet <strong>AI enablement data layer for regulated operations</strong>. Beide Begriffe sind auffindbar, da sie in früheren Unterlagen, Partnergesprächen und externen Referenzen verwendet wurden. Leser, die über den älteren Begriff auf diese Seite gelangen, werden zur kanonischen Definition weitergeleitet.</div>

<h2>Definition (Synonym)</h2>

<p>Der <strong>AI enablement data layer</strong> (früher als <strong>AI-ready operational layer</strong> bezeichnet) ist eine Laufzeitschicht zwischen der regulierten Unternehmensumgebung — NOC-Konsolen, Ticket-Systeme, OT-Konsolen, EHR, Missionssysteme — und großen Sprachmodellen. Operative Daten — Netzwerkprotokolle, Incident-Datensätze, Konfigurationen, klinische Workflows, Missionskontext — werden mittels strukturerhaltender, Differential-Privacy-basierter Kapsulierung in KI-geeigneten Kontext überführt. KI-Workflows werden innerhalb der Unternehmensumgebung über zwei Ausführungspfade ausgeführt: ein externes freigegebenes LLM mit ausschließlich Kapseldaten oder ein lokales On-Premise-Leichtgewichtmodell. Ergebnisse werden über den State Vault in den ursprünglichen Workflow zurückgeführt. Der AI enablement data layer unterscheidet sich von PII-Schutzmaßnahmen und KI-Sicherheitslösungen in Umfang, Schicht und Ausführungsmodell.</p>

<h2>Warum zwei Bezeichnungen existieren</h2>

<p>„AI-ready operational layer" wurde in früheren Strategiepräsentationen, Partnerpräsentationen und Materialien des Deutsche Telekom T Challenge 2026 verwendet — mit dem Schwerpunkt auf <em>operativer Datenbereitschaft</em>. „AI enablement data layer for regulated operations" wurde mit v6.1 der kundenseitigen Website eingeführt, mit dem Schwerpunkt auf <em>KI-Aktivierung</em> auf Datenebene für Käufer aus <em>regulierten Branchen</em>. Das Produkt ist identisch — die Marketingsprache wurde stärker am Käufer ausgerichtet.</p>

<h2>Kanonische Kategorieseite</h2>

<p>Die vollständige v6.1-Definition, Kundenreferenzen, die Vier-Zonen-Architektur (Corporate Internal Network · DMZ — Demilitarisierte Zone · In-House Team · Local — Auto Reconstruction) sowie die sechs Architekturpfeiler finden Sie unter <a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> und auf der Seite <a href="/architecture">Architecture</a>.</p>

<h2>Verwandte Begriffe</h2>

<ul>
<li><a href="/glossary/ai-enablement-data-layer">AI enablement data layer</a> — kanonische Kategorieseite</li>
<li><a href="/glossary/operational-data">Operative Daten</a></li>
<li><a href="/glossary/two-execution-paths">Zwei Ausführungspfade</a></li>
<li><a href="/glossary/structure-preserving-encapsulation">Strukturerhaltende Kapsulierung</a></li>
<li><a href="/glossary/differential-privacy">Differential Privacy</a></li>
<li><a href="/glossary/state-vault-for-restoration">State Vault für die Wiederherstellung</a></li>
</ul>

---`,
    related1Label: "",
    related1Href: "",
    related2Label: "",
    related2Href: "",
    related3Label: "",
    related3Href: "",
    related4Label: "",
    related4Href: "",
    related5Label: "",
    related5Href: "",
  },
}

export default function AiReadyOperationalLayer({
  locale = "en",
  backLabel = "",
  backHref = "",
  term = "",
  lead = "",
  category = "",
  definitionLabel = "",
  definitionBody = "",
  bodyHtml = "",
  related1Label = "",
  related1Href = "",
  related2Label = "",
  related2Href = "",
  related3Label = "",
  related3Href = "",
  related4Label = "",
  related4Href = "",
  related5Label = "",
  related5Href = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en
  const _backLabel = backLabel || T["backLabel"] || TRANSLATIONS.en["backLabel"]
  const _backHref = backHref || T["backHref"] || TRANSLATIONS.en["backHref"]
  const _term = term || T["term"] || TRANSLATIONS.en["term"]
  const _lead = lead || T["lead"] || TRANSLATIONS.en["lead"]
  const _category = category || T["category"] || TRANSLATIONS.en["category"]
  const _definitionLabel = definitionLabel || T["definitionLabel"] || TRANSLATIONS.en["definitionLabel"]
  const _definitionBody = definitionBody || T["definitionBody"] || TRANSLATIONS.en["definitionBody"]
  const _bodyHtml = bodyHtml || T["bodyHtml"] || TRANSLATIONS.en["bodyHtml"]
  const _related1Label = related1Label || T["related1Label"] || TRANSLATIONS.en["related1Label"]
  const _related1Href = related1Href || T["related1Href"] || TRANSLATIONS.en["related1Href"]
  const _related2Label = related2Label || T["related2Label"] || TRANSLATIONS.en["related2Label"]
  const _related2Href = related2Href || T["related2Href"] || TRANSLATIONS.en["related2Href"]
  const _related3Label = related3Label || T["related3Label"] || TRANSLATIONS.en["related3Label"]
  const _related3Href = related3Href || T["related3Href"] || TRANSLATIONS.en["related3Href"]
  const _related4Label = related4Label || T["related4Label"] || TRANSLATIONS.en["related4Label"]
  const _related4Href = related4Href || T["related4Href"] || TRANSLATIONS.en["related4Href"]
  const _related5Label = related5Label || T["related5Label"] || TRANSLATIONS.en["related5Label"]
  const _related5Href = related5Href || T["related5Href"] || TRANSLATIONS.en["related5Href"]

  const relatedItems = [
    { label: _related1Label, href: _related1Href },
    { label: _related2Label, href: _related2Href },
    { label: _related3Label, href: _related3Href },
    { label: _related4Label, href: _related4Href },
    { label: _related5Label, href: _related5Href },
  ].filter((r) => r.label && r.href)

  // JSON-LD: DefinedTerm schema built from Props
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": _term,
    "description": _definitionBody,
    "inDefinedTermSet": "https://llmcapsule.ai/glossary",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .gd-root {
          width: 100%;
          container-type: inline-size;
          font-family: var(--f-display, 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif);
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg, #ffffff);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ── Container ────────────────────────────────────── */
        .gd-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .gd-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .gd-hero__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .gd-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .gd-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
          max-width: 860px;
        }

        .gd-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .gd-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .gd-meta__chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: var(--c-primary-soft, #eeebfe);
          color: var(--c-primary, #5b4fe9);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── 2. Definition block ──────────────────────────── */
        .gd-def-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-def {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .gd-def__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .gd-def__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .gd-def__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .gd-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .gd-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .gd-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .gd-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .gd-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .gd-body p:last-child { margin-bottom: 0; }

        .gd-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .gd-body ul,
        .gd-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .gd-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .gd-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .gd-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .gd-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .gd-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .gd-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .gd-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gd-body pre::-webkit-scrollbar { display: none; }

        .gd-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .gd-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .gd-body th,
        .gd-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .gd-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gd-body tr:last-child td { border-bottom: none; }

        /* Callout box (for <div class="callout"> inside _bodyHtml) */
        .gd-body .callout {
          padding: 20px 24px;
          background-color: var(--c-primary-soft, #eeebfe);
          border-left: 3px solid var(--c-primary, #5b4fe9);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
        }

        .gd-body .callout strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Takeaways box */
        .gd-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .gd-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .gd-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .gd-body .takeaways li {
          font-size: 15px;
        }

        /* Inline links inside body */
        .gd-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .gd-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* ── 4. Related Terms ─────────────────────────────── */
        .gd-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .gd-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .gd-related__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gd-related__item {
          border-top: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__item:last-child {
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .gd-related__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 4px;
          font-size: 15px;
          font-weight: 500;
          color: var(--c-ink, #0f1130);
          text-decoration: none;
          transition: color 0.15s;
        }

        .gd-related__link:hover {
          color: var(--c-primary, #5b4fe9);
        }

        .gd-related__link-arrow {
          font-size: 16px;
          color: var(--c-primary, #5b4fe9);
          flex-shrink: 0;
          transition: transform 0.15s;
        }

        .gd-related__link:hover .gd-related__link-arrow {
          transform: translateX(3px);
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .gd-hero { padding-top: 48px; }
          .gd-hero__title { font-size: 28px; }
          .gd-hero__lead { font-size: 16px; }
          .gd-def { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .gd-body p,
          .gd-body li { font-size: 16px; }
          .gd-body h2 { padding-top: 28px; }
        }
      `}</style>

      {/* JSON-LD: DefinedTerm schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="gd-root">

        {/* ── 1. Hero ── */}
        <section className="gd-hero">
          <div className="gd-container">
            <div className="gd-hero__inner">
              <a href={_backHref} className="gd-hero__back">{_backLabel}</a>
              <h1 className="gd-hero__title">{_term}</h1>
              <p className="gd-hero__lead">{_lead}</p>
              <div className="gd-hero__meta">
                <span className="gd-meta__chip">{_category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Definition block ── */}
        <div className="gd-def-wrap">
          <div className="gd-container">
            <div className="gd-def">
              <div className="gd-def__label">{_definitionLabel}</div>
              <p className="gd-def__body">{_definitionBody}</p>
            </div>
          </div>
        </div>

        {/* ── 3. Article Body ── */}
        <div className="gd-body-wrap">
          <div className="gd-container">
            <article
              className="gd-body"
              dangerouslySetInnerHTML={{ __html: _bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Terms ── */}
        {relatedItems.length > 0 && (
          <div className="gd-related">
            <div className="gd-container">
              <div className="gd-related__label">Related terms</div>
              <ul className="gd-related__list">
                {relatedItems.map((item, i) => (
                  <li key={i} className="gd-related__item">
                    <a href={item.href} className="gd-related__link">
                      <span>{item.label}</span>
                      <span className="gd-related__link-arrow" aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(AiReadyOperationalLayer, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "" },
  term: { type: ControlType.String, title: "Term", defaultValue: "" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "" },
  definitionLabel: { type: ControlType.String, title: "Definition Label", defaultValue: "" },
  definitionBody: { type: ControlType.String, title: "Definition Body", defaultValue: "", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: "", displayTextArea: true },
  related1Label: { type: ControlType.String, title: "Related 1 Label", defaultValue: "" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "" },
  related2Label: { type: ControlType.String, title: "Related 2 Label", defaultValue: "" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "" },
  related3Label: { type: ControlType.String, title: "Related 3 Label", defaultValue: "" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "" },
  related4Label: { type: ControlType.String, title: "Related 4 Label", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
  related5Label: { type: ControlType.String, title: "Related 5 Label", defaultValue: "" },
  related5Href: { type: ControlType.String, title: "Related 5 URL", defaultValue: "" },
})
