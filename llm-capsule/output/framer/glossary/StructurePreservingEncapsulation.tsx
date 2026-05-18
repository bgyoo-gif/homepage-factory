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
<p><strong>Structure-preserving encapsulation</strong> is the transformation step in an AI enablement data layer that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.</p>

<h2>Why structure preservation matters</h2>
<p>An LLM asked to draft an RCA from an alarm sequence cannot reason if the sequence is destroyed. An LLM asked to compare two configuration trees cannot compare if the tree relationships are flattened. Structure preservation is what makes the capsule <em>useful</em> to the model, not just <em>safe</em>.</p>

<h2>What gets tokenized</h2>
<ul>
  <li>Operational identifiers: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF</li>
  <li>Customer references and segments</li>
  <li>Free-text fields with mixed identifiers (NER masking)</li>
  <li>Sensitive attribute values (under DP budget)</li>
</ul>

<h2>What gets preserved</h2>
<ul>
  <li>Time order of events</li>
  <li>Cause-effect relationships in incident sequences</li>
  <li>Document structure (sections, lists, tables)</li>
  <li>Configuration tree (parent-child, dependencies)</li>
  <li>Topology graph (nodes, edges, paths)</li>
</ul>

<h2>Used together with</h2>
<ul>
  <li><a href="/resources/glossary/differential-privacy">Differential privacy</a> — bounds inference risk on the capsule</li>
  <li><a href="/resources/glossary/state-vault-for-restoration">State vault for restoration</a> — restores tokens to original values inside the enterprise</li>
  <li><a href="/resources/glossary/two-execution-paths">Two execution paths</a> — Path A or Path B per workflow policy</li>
</ul>

<h2>Reference statement</h2>
<blockquote>Structure-preserving encapsulation makes the capsule useful. Differential-privacy-based protection makes it defensible. State vault makes it restorable. Together, they constitute the AI enablement data layer.</blockquote>`

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    backLabel: "← Glossary",
    backHref: "/resources/glossary",
    term: "Structure-Preserving Encapsulation",
    lead: "Tokenize the identifiers. Preserve the structure. So the AI can still reason — and the result can still be restored.",
    category: "GLOSSARY",
    definitionLabel: "Definition",
    definitionBody: "Structure-preserving encapsulation is the transformation step in an AI enablement data layer that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.",
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
    term: "문서 구조 보존 캡슐화",
    lead: "식별자를 토큰화합니다. 구조는 그대로 보존합니다. AI가 여전히 추론할 수 있도록 — 그리고 결과물은 반드시 복원됩니다.",
    category: "GLOSSARY",
    definitionLabel: "정의",
    definitionBody: "문서 구조 보존 캡슐화는 데이터 레이어에서 운영 데이터를 AI가 바로 사용할 수 있는 컨텍스트로 변환하는 단계입니다. 운영 식별자(장치 ID, 사이트 ID, 자산 참조, 고객 세그먼트)를 토큰화하면서, LLM이 추론에 필요한 관계형 구조 — 테이블 레이아웃, 로그 순서, 문서 계층, 구성 트리, 토폴로지 그래프 — 를 그대로 보존합니다.",
    bodyHtml: `<h2>정의</h2>

<p><strong>문서 구조 보존 캡슐화</strong>는 데이터 레이어에서 운영 데이터를 AI가 바로 사용할 수 있는 컨텍스트로 변환하는 단계입니다. 운영 식별자(장치 ID, 사이트 ID, 자산 참조, 고객 세그먼트)를 토큰화하면서, LLM이 추론에 필요한 관계형 구조 — 테이블 레이아웃, 로그 순서, 문서 계층, 구성 트리, 토폴로지 그래프 — 를 그대로 보존합니다.</p>

<h2>구조 보존이 중요한 이유</h2>

<p>알람 시퀀스를 토대로 RCA를 작성하도록 요청받은 LLM은 시퀀스가 파괴되면 추론할 수 없습니다. 두 구성 트리를 비교하도록 요청받은 LLM은 트리 관계가 평탄화되면 비교할 수 없습니다. 구조 보존이야말로 캡슐을 모델에게 단순히 <em>안전한</em> 것이 아니라 <em>유용한</em> 것으로 만드는 핵심입니다.</p>

<h2>토큰화 대상</h2>

<ul>
<li>운영 식별자: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF</li>
<li>고객 참조 및 세그먼트</li>
<li>복합 식별자가 포함된 자유 텍스트 필드 (NER 마스킹)</li>
<li>민감 속성 값 (DP 예산 범위 내)</li>
</ul>

<h2>보존 대상</h2>

<ul>
<li>이벤트의 시간 순서</li>
<li>인시던트 시퀀스 내 인과 관계</li>
<li>문서 구조 (섹션·목록·테이블)</li>
<li>구성 트리 (부모-자식 관계, 의존성)</li>
<li>토폴로지 그래프 (노드·엣지·경로)</li>
</ul>

<h2>함께 사용되는 기능</h2>

<ul>
<li><a href="/resources/glossary/differential-privacy">차등 프라이버시</a> — 캡슐의 추론 위험을 수치로 제한합니다</li>
<li><a href="/resources/glossary/state-vault-for-restoration">복원용 상태 저장소</a> — 기업 내부에서 토큰을 원본 값으로 복원합니다</li>
<li><a href="/resources/glossary/two-execution-paths">두 가지 실행 경로</a> — 워크플로우 정책에 따라 Path A 또는 Path B를 선택합니다</li>
</ul>

<h2>참조 문장</h2>

<blockquote>문서 구조 보존 캡슐화는 캡슐을 유용하게 만듭니다. 차등 프라이버시 기반 보호는 캡슐을 방어 가능하게 만듭니다. 복원용 상태 저장소는 캡슐을 복원 가능하게 만듭니다. 세 가지가 함께 데이터 레이어를 구성합니다.</blockquote>`,
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
    term: "Strukturerhaltende Kapsulierung",
    lead: "Operative Kennzeichner werden tokenisiert, die relationale Struktur bleibt vollständig erhalten. Das KI-Modell kann weiterhin schlussfolgern — und die Ausgabe lässt sich im Unternehmen vollständig wiederherstellen.",
    category: "GLOSSAR",
    definitionLabel: "Definition",
    definitionBody: "Die strukturerhaltende Kapsulierung ist der Transformationsschritt innerhalb eines AI enablement data layer, der operative Daten in KI-gerechten Kontext überführt. Operative Kennzeichner — Geräte-IDs, Standort-IDs, Asset-Referenzen, Kundensegmente — werden tokenisiert. Die relationale Struktur, die das LLM zur Inferenz benötigt, bleibt dabei unverändert erhalten: Tabellenlayout, Log-Sequenz, Dokumenthierarchie, Konfigurationsbaum und Topologiegraph.",
    bodyHtml: `<h2>Warum die Strukturerhaltung entscheidend ist</h2>

<p>Ein LLM, das eine RCA aus einer Alarmmeldungssequenz erstellen soll, kann keine Schlussfolgerungen ziehen, wenn die Sequenz zerstört wurde. Ein LLM, das zwei Konfigurationsbäume vergleichen soll, kann keinen Vergleich durchführen, wenn die Baumbeziehungen eingeebnet wurden. Die Strukturerhaltung macht die Kapsel für das Modell nutzbar — nicht nur sicher.</p>

<h2>Was tokenisiert wird</h2>

<ul>
<li>Operative Kennzeichner: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF</li>
<li>Kundenreferenzen und -segmente</li>
<li>Freitextfelder mit gemischten Kennzeichnern (NER-Maskierung)</li>
<li>Sensible Attributwerte (im Rahmen des DP-Budgets)</li>
</ul>

<h2>Was erhalten bleibt</h2>

<ul>
<li>Zeitliche Reihenfolge von Ereignissen</li>
<li>Ursache-Wirkungs-Beziehungen in Vorfallssequenzen</li>
<li>Dokumentstruktur (Abschnitte, Listen, Tabellen)</li>
<li>Konfigurationsbaum (Eltern-Kind-Beziehungen, Abhängigkeiten)</li>
<li>Topologiegraph (Knoten, Kanten, Pfade)</li>
</ul>

<h2>Zusammenwirken mit weiteren Komponenten</h2>

<ul>
<li>Differential Privacy — begrenzt das Inferenzrisiko der Kapsel</li>
<li>State Vault for Restoration — führt die Token unternehmensintern auf ihre Originalwerte zurück</li>
<li>Two execution paths — Pfad A oder Pfad B gemäß Workflow-Richtlinie</li>
</ul>

<h2>Leitsatz</h2>

<p>Die strukturerhaltende Kapsulierung macht die Kapsel nutzbar. Der auf Differential Privacy basierende Schutz macht sie verteidigbar. Der State Vault macht sie wiederherstellbar. Zusammen bilden sie den AI enablement data layer.</p>`,
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

export default function StructurePreservingEncapsulation({
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

addPropertyControls(StructurePreservingEncapsulation, {
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
