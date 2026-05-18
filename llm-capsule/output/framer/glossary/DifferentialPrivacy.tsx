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

const BODY_HTML = `<h2>Definition</h2>
<p><strong>Differential privacy (DP)</strong> is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The "almost" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.</p>

<h2>Mechanism</h2>
<p>Implemented by adding calibrated noise (commonly Laplace or Gaussian) to outputs, queries, or transformations. Noise scale is determined by the sensitivity of the function and the privacy budget. The result is a quantitative bound on what an attacker could learn about any individual record from the output.</p>

<h2>Application in the AI enablement data layer</h2>
<p>In LLM Capsule, differential-privacy-based protection is applied during the structure-preserving encapsulation step. The capsule (AI-ready context) carries the differential-privacy guarantee on top of field-level tokenization. This addresses inference risks that field-level masking alone cannot bound — particularly for operational data where structure, sequence, and aggregate patterns themselves carry sensitive information.</p>

<h2>What it is not</h2>
<ul>
  <li>Not a legal or compliance guarantee. It is a technical framework with a tunable parameter.</li>
  <li>Not a yes/no guarantee. Privacy and utility trade off via the privacy budget.</li>
  <li>Not a substitute for governance, audit, or policy.</li>
</ul>

<h2>Why it matters here</h2>
<p>Operational data — network logs, configurations, OT manifests, clinical workflows — leaks through patterns, not just identifiers. Differential privacy is the framework that lets enterprise governance reason quantitatively about that leakage risk and enforce a budget per workflow.</p>

<h2>Acceptable claims</h2>
<ul>
  <li>"Privacy-preserving with a defined risk-reduction scope"</li>
  <li>"Bounded inference risk under the policy's privacy budget"</li>
  <li>"Differential-privacy-based encapsulation"</li>
</ul>

<h2>Claims to avoid</h2>
<ul>
  <li>"Mathematically impossible to reconstruct"</li>
  <li>"100% safe"</li>
  <li>"GDPR guaranteed"</li>
  <li>"Zero risk"</li>
</ul>

<h2>Related</h2>
<ul>
  <li><a href="/resources/learn/differential-privacy-for-enterprise-llm">Pillar guide: Differential privacy for enterprise AI</a></li>
  <li><a href="/resources/glossary/structure-preserving-encapsulation">Structure-preserving encapsulation</a></li>
  <li><a href="/resources/glossary/ai-ready-operational-layer">AI enablement data layer</a></li>
</ul>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Differential Privacy",
    lead: "A mathematical framework that bounds the contribution of any single record to a derived output.",
    category: "GLOSSARY",
    definitionLabel: "Definition",
    definitionBody: "Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The \"almost\" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.",
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
    term: "차등 프라이버시",
    lead: "단일 레코드가 파생 출력에 기여하는 범위를 수학적으로 제한하는 프레임워크입니다.",
    category: "GLOSSARY",
    definitionLabel: "정의",
    definitionBody: "차등 프라이버시(DP)는 데이터셋을 연산할 때 개별 레코드를 보호하는 수학적 프레임워크입니다. 2006년 Cynthia Dwork과 동료들이 제안한 이 개념은, 특정 레코드의 포함 여부와 관계없이 분석 결과가 거의 동일하다면 해당 분석은 프라이버시를 보장한다는 직관을 수식으로 정의합니다. \"거의\"의 정도는 엡실론(epsilon)으로 수치화되며 — 엡실론이 작을수록 프라이버시는 강해지고 유용성은 낮아집니다.",
    bodyHtml: `<h2>메커니즘</h2>

<p>출력값, 쿼리, 또는 변환 결과에 보정된 노이즈(주로 라플라스 또는 가우시안)를 추가하는 방식으로 구현됩니다. 노이즈의 크기는 함수의 민감도와 프라이버시 예산에 따라 결정됩니다. 그 결과, 공격자가 출력으로부터 개별 레코드에 대해 알아낼 수 있는 범위를 수치로 제한합니다.</p>

<h2>데이터 레이어 내 적용</h2>

<p>LLM Capsule에서 차등 프라이버시 기반 보호는 문서 구조 보존 캡슐화 단계에서 적용됩니다. 캡슐(AI 활용 컨텍스트)은 필드 수준 토큰화 위에 차등 프라이버시 보장을 추가로 탑재합니다. 이를 통해 필드 수준 마스킹만으로는 제한할 수 없는 추론 위험을 차단합니다 — 특히 구조, 순서, 집계 패턴 자체가 민감 정보를 담고 있는 운영 데이터에서 중요합니다.</p>

<h2>이것이 아닌 것</h2>

<ul>
<li>법적·규제적 보장이 아닙니다. 조정 가능한 파라미터를 가진 기술적 프레임워크입니다.</li>
<li>이분법적 보장이 아닙니다. 프라이버시와 유용성은 프라이버시 예산을 통해 상충됩니다.</li>
<li>거버넌스, 감사, 정책의 대체재가 아닙니다.</li>
</ul>

<h2>이것이 중요한 이유</h2>

<p>운영 데이터 — 네트워크 로그, 설정 파일, OT 매니페스트, 임상 워크플로우 — 는 식별자만이 아니라 패턴을 통해 유출됩니다. 차등 프라이버시는 기업 거버넌스가 해당 유출 위험을 수치적으로 판단하고, 워크플로우별 예산을 집행할 수 있게 하는 프레임워크입니다.</p>

<h2>사용 가능한 표현</h2>

<ul>
<li>"정의된 위험 감소 범위 내에서 프라이버시를 보존합니다"</li>
<li>"정책의 프라이버시 예산 내에서 추론 위험이 제한됩니다"</li>
<li>"차등 프라이버시 기반 캡슐화"</li>
</ul>

<h2>사용을 피해야 할 표현</h2>

<ul>
<li>"수학적으로 복원이 불가능합니다"</li>
<li>"100% 안전합니다"</li>
<li>"GDPR이 보장됩니다"</li>
<li>"위험이 전혀 없습니다"</li>
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
    term: "Differential Privacy",
    lead: "Ein mathematisches Rahmenwerk, das den Einfluss einzelner Datensätze auf abgeleitete Ausgaben quantitativ begrenzt.",
    category: "GLOSSAR",
    definitionLabel: "Definition",
    definitionBody: "Differential Privacy (DP) ist ein mathematisches Rahmenwerk zum Schutz einzelner Datensätze bei der Auswertung von Datensätzen. Das Konzept wurde 2006 von Cynthia Dwork und Kollegen eingeführt und formalisiert die Anforderung, dass eine Analyse als privat gilt, wenn ihr Ergebnis nahezu unabhängig davon ist, ob ein bestimmter Datensatz enthalten ist oder nicht. Das \"nahezu\" wird durch den Parameter Epsilon gesteuert — ein kleinerer Epsilon-Wert bedeutet stärkeren Datenschutz bei geringerer Datennutzbarkeit.",
    bodyHtml: `<h2>Funktionsweise</h2>

<p>Die Methode fügt kalibriertes Rauschen (typischerweise nach Laplace- oder Gaußverteilung) zu Ausgaben, Abfragen oder Transformationen hinzu. Die Rauschstärke ergibt sich aus der Sensitivität der Funktion und dem festgelegten Privacy-Budget. Das Ergebnis ist eine quantitative Schranke dafür, was ein Angreifer aus der Ausgabe über einzelne Datensätze ableiten kann.</p>

<h2>Einsatz im AI enablement data layer</h2>

<p>In LLM Capsule wird Differential-Privacy-basierter Schutz während des strukturerhaltenden Kapsulierungsschritts angewendet. Die Kapsel (KI-geeigneter Kontext) trägt die Differential-Privacy-Garantie zusätzlich zur feldbasierten Tokenisierung. Damit werden Inferenzrisiken adressiert, die durch feldbasiertes Masking allein nicht gebunden werden können — insbesondere bei operativen Daten, deren Struktur, Sequenz und Aggregatmuster selbst sensible Informationen enthalten.</p>

<h2>Was es nicht ist</h2>

<ul>
<li>Keine rechtliche oder regulatorische Garantie. Es handelt sich um ein technisches Rahmenwerk mit einem einstellbaren Parameter.</li>
<li>Keine Ja/Nein-Aussage. Datenschutz und Datennutzbarkeit sind über das Privacy-Budget gegeneinander abzuwägen.</li>
<li>Kein Ersatz für Governance, Auditierung oder Richtlinien.</li>
</ul>

<h2>Relevanz im Unternehmenseinsatz</h2>

<p>Operative Daten — Netzwerkprotokolle, Konfigurationen, OT-Manifeste, klinische Workflows — lassen sich über Muster rekonstruieren, nicht nur über direkte Identifikatoren. Differential Privacy bietet den Rahmen, mit dem Unternehmens-Governance das Datenabfluss-Risiko quantitativ bewerten und ein Budget pro Workflow durchsetzen kann.</p>

<h2>Zulässige Aussagen</h2>

<ul>
<li>„Datenschutzerhaltend mit definiertem Risikominderungsumfang"</li>
<li>„Begrenztes Inferenzrisiko innerhalb des Policy-Privacy-Budgets"</li>
<li>„Differential-Privacy-basierte Kapsulierung"</li>
</ul>

<h2>Zu vermeidende Aussagen</h2>

<ul>
<li>„Mathematisch unmöglich zu rekonstruieren"</li>
<li>„100 % sicher"</li>
<li>„DSGVO-konformität garantiert"</li>
<li>„Null-Risiko"</li>
</ul>`,
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

export default function DifferentialPrivacy({
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

addPropertyControls(DifferentialPrivacy, {
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
