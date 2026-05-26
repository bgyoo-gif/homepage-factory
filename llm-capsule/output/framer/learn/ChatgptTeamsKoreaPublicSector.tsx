// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component with full Props for translation/CMS.
// No external imports — LearnArticle logic inlined for Framer cross-folder compatibility.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  backLabel?: string
  backHref?: string
  title?: string
  lead?: string
  category?: string
  readTime?: string
  dateUpdated?: string
  tldrLabel?: string
  tldrBody?: string
  bodyHtml?: string
  canonicalUrl?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  breadcrumbLabel?: string
  faqJsonLd?: string
  relatedSectionLabel?: string
  related1Title?: string
  related1Href?: string
  related2Title?: string
  related2Href?: string
  related3Title?: string
  related3Href?: string
  related4Title?: string
  related4Href?: string
}

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그(h2, p, strong, table, ul)만 사용 — LearnArticle의 dangerouslySetInnerHTML에 그대로 들어감 -->

<h2>1. CSAP 인증의 적용성</h2>
<p>「클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률」과 관련 정책에 따라, 공공기관은 민간 클라우드 서비스를 이용할 때 <strong>클라우드 보안인증(CSAP)</strong>을 받은 서비스를 우선 사용하도록 안내됩니다. CSAP는 한국인터넷진흥원(KISA)이 운영하는 인증 체계로, 데이터 저장 위치·접근 통제·암호화·인력 관리 등 한국 공공 영역의 요구사항을 반영합니다.</p>
<p>현재까지 공개된 정보 기준으로 ChatGPT Teams는 CSAP 인증을 받지 않은 것으로 보입니다. OpenAI가 SOC 2와 ISO 27001 같은 국제 표준 인증을 보유하고 있지만, 이들은 한국 공공 영역의 인증 체계와는 별개입니다.</p>
<p>CSAP 미인증 서비스를 공공기관에서 활용하려면 자체 보안성 검토 절차가 필요할 수 있으며, 그 검토 결과에 대한 책임 소재가 도입 기관에 남게 됩니다. 도입 시점의 보안성 판단과 사후 감사 시점의 판단이 다를 가능성도 함께 고려해야 하는 영역입니다.</p>

<h2>2. 데이터 국외이전과 개인정보보호법</h2>
<p>개정 「개인정보보호법」은 개인정보의 국외이전 규제를 강화했습니다. 정보주체 동의, 국외이전 사실의 명시적 고지, 이전 받는 자의 안전성 확보 조치 등이 요구됩니다.</p>
<p>여기서 자주 혼동되는 지점이 있습니다. OpenAI의 "Teams 플랜은 학습에 사용하지 않는다"는 약속과 "데이터가 국외로 이전되지 않는다"는 명제는 <strong>서로 다른 차원</strong>입니다. 학습 미사용은 모델 파라미터 업데이트에 쓰지 않는다는 의미이며, 데이터의 전송·저장·처리는 여전히 OpenAI 인프라(주로 미국)에서 이루어집니다. 즉 ChatGPT Teams에 입력되는 모든 데이터는 정의상 <strong>국외이전된 데이터</strong>입니다.</p>
<p>두 개념의 차이를 정리하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>학습 미사용 (OpenAI의 약속)</th>
      <th>국외이전 (개인정보보호법상 정의)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>적용 범위</strong></td>
      <td>모델 파라미터 업데이트 단계</td>
      <td>전송·저장·처리 전 과정</td>
    </tr>
    <tr>
      <td><strong>데이터 위치</strong></td>
      <td>OpenAI 인프라(국외)</td>
      <td>OpenAI 인프라(국외)</td>
    </tr>
    <tr>
      <td><strong>법적 함의</strong></td>
      <td>학습 데이터로의 재사용 방지</td>
      <td>정보주체 동의·고지 등 의무 발생</td>
    </tr>
  </tbody>
</table>

<p>공공기관이 민원인 정보·내부 인사 정보·정책 검토 자료를 ChatGPT Teams에 입력한다면, 이는 개인정보보호법상 국외이전에 해당하는 행위로 검토될 가능성이 있습니다. 정보주체별 동의 절차가 어떻게 마련되어 있는지, 일괄 동의로 갈음 가능한지(법은 "구체적이고 분리된 동의"를 요구합니다)에 대한 사전 정리가 필요한 영역입니다.</p>

<h2>3. N2SF 등급 체계와의 정합성</h2>
<p>국가정보원이 운영하는 <strong>N2SF(National Network Security Framework)</strong>는 공공 정보를 다음 세 등급으로 분류하고, 등급별로 처리 가능한 환경을 규정합니다.</p>

<ul>
  <li><strong>C (Classified)</strong> — 외부 유출 시 중대한 영향. 개인정보·국가 기밀 등</li>
  <li><strong>S (Sensitive)</strong> — 외부 공개 시 업무·이해관계에 영향 있는 정보. 내부 검토·정책 초안·인사 자료 등</li>
  <li><strong>O (Open)</strong> — 외부 공개 가능 정보. 보도자료·법령·공시 자료 등</li>
</ul>

<p>N2SF는 활용 환경을 세 가지 모델로 정의합니다. 모델 1은 내부망 폐쇄형(자체 sLLM 등), 모델 2는 외부 상용 LLM 활용, 모델 3은 하이브리드 환경입니다. ChatGPT Teams는 모델 2에 해당합니다.</p>
<p>모델 2 가이드라인에 따르면 <strong>C 등급 정보는 외부 LLM 활용 대상에서 제외</strong>되며, <strong>S 등급 정보는 기관의 자체 위험평가 절차를 거친 후에 활용 가능</strong>합니다. <strong>O 등급 정보는 원칙적으로 활용 가능</strong>합니다.</p>
<p>이를 ChatGPT Teams 활용 관점에서 정리하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>N2SF 등급</th>
      <th>모델 2 활용 가능성</th>
      <th>ChatGPT Teams 활용 시 검토 사항</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>C (Classified)</strong></td>
      <td>활용 대상 외</td>
      <td>입력 자체가 정합성 문제</td>
    </tr>
    <tr>
      <td><strong>S (Sensitive)</strong></td>
      <td>자체 위험평가 후 가능</td>
      <td>위험평가 절차 정비 + CSAP·국외이전 동시 검토</td>
    </tr>
    <tr>
      <td><strong>O (Open)</strong></td>
      <td>원칙적 가능</td>
      <td>CSAP·국외이전 이슈는 별도 검토 필요</td>
    </tr>
  </tbody>
</table>

<p>실무상 더 어려운 지점은 <strong>실무자가 자신이 입력하는 정보의 등급을 항상 정확히 인식하기 어렵다</strong>는 점입니다. 보고서 초안을 정리하다가 회의 메모를 붙여넣고, 그 안에 C 등급 또는 S 등급에 해당하는 내용이 포함되는 경우가 있을 수 있습니다. ChatGPT Teams의 관리자 콘솔은 입력 내용의 등급을 사전에 식별하는 기능을 제공하지는 않습니다. 등급 분류는 정보 자체의 속성이며, 사용자 인식 여부와 별개로 작동하는 영역입니다.</p>
<p>N2SF와 모델 2에 대한 자세한 내용은 별도 글에 정리되어 있습니다: <a href="/resources/learn/what-is-n2sf">N2SF란 무엇인가</a>, <a href="/resources/learn/n2sf-model-2-explained">N2SF 모델 2 완벽 해설</a>.</p>

<h2>4. 경영평가 가점과 감사 관점</h2>
<p>2026년 공공기관·지방공기업 경영평가편람은 "전략 및 혁신" 분야의 "경영혁신 추진 활동"에서 AI 활용 등 디지털 기반 경영 혁신을 평가합니다. 자세한 내용은 별도 글에 정리되어 있습니다: <a href="/resources/learn/public-sector-2026-management-evaluation-ai-incentive">2026 경영평가 'AI 활용 등 혁신' 가점 분석</a>.</p>
<p>이는 표면적으로 "생성형 AI를 적극 도입하라"는 신호로 읽히지만, 평가 기준 안에 "AI 윤리·정보보안 가이드라인을 고려한 기획 수준"과 "관련 법·제도 준수요건 반영 여부"가 포함되어 있다는 점을 함께 보아야 합니다. 즉 단순 도입 사실보다 <strong>도입의 정합성</strong>이 평가 대상입니다.</p>
<p>ChatGPT Teams 도입의 경우 앞서 짚은 CSAP·국외이전·N2SF 정합성 검토 결과가 평가 자료의 일부가 됩니다. 도입 자체가 가점으로 직결되기보다, 도입 방식의 정합성이 어떻게 입증되는지가 가점 인정의 기준이 될 가능성이 큽니다.</p>

<h2>그렇다면 어떤 대안이 있을까</h2>
<p>위 네 가지 검토 지점은 ChatGPT Teams를 부정하기 위한 것이 아닙니다. OpenAI의 제품은 글로벌 SaaS 모델로 설계되었고, 그 설계 자체로는 잘 작동합니다. 다만 그 설계가 한국 공공 영역의 규제 환경과 본질적 차이를 가집니다.</p>
<p>한국 공공 영역에서 검토 가능한 대안의 방향은 크게 세 가지입니다.</p>
<p><strong>옵션 A — CSAP 인증을 받은 국내 LLM 서비스 활용</strong>. 국내 클라우드 환경에서 제공되는 LLM 서비스를 활용하는 방식입니다. CSAP·국외이전 이슈는 일정 수준 해결되지만, S 등급 자체 위험평가 절차와 사용자 부주의 입력에 대한 사전 방어는 별도 장치가 필요합니다.</p>
<p><strong>옵션 B — 자체 sLLM 구축(모델 1)</strong>. 모델 가중치를 기관 내부 인프라에 두고 운영하는 방식입니다. CSAP·국외이전·N2SF 등급 처리 이슈가 동시에 해결됩니다. 다만 모델 학습·운영·고도화에 상당한 자체 역량과 비용이 필요하며, 모델 성능이 외부 상용 LLM에 비해 제한적일 수 있습니다. 자세한 트레이드오프는 별도 글에서 다뤘습니다: <a href="/resources/learn/sllm-self-hosted-reality-check">sLLM 자체구축, 정말 답일까</a>.</p>
<p><strong>옵션 C — 외부 LLM + 보호 레이어 결합</strong>. 외부 상용 LLM 앞단에 입력 정보의 가명화·보호 처리를 수행하는 레이어를 배치하는 방식입니다. 외부로 전송되는 데이터의 형태가 원문이 아닌 가명 처리된 상태가 되며, 응답은 내부망에서 원본 맥락으로 복원됩니다. N2SF 모델 2의 "원문 외부 전송 회피" 원칙과 부합하는 구조입니다.</p>
<p>세 옵션 모두 각자의 트레이드오프가 있습니다. 자세한 비교는 별도 글에 정리되어 있습니다: <a href="/resources/learn/public-sector-genai-three-approaches-in-korea">공공기관 AI 도입의 세 가지 길</a>.</p>
<p>도입 검토 시 중요한 것은 "어느 옵션이 절대적으로 우수한가"가 아니라, 기관의 활용 우선순위·예산·운영 역량에 비추어 어느 옵션이 적합한지를 자체 위험평가 과정에서 정리하는 것입니다. 그 정리 결과 자체가 경영평가 가점 인정의 기반 자료가 됩니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「N2SF 보안 가이드라인 1.0」 및 부록 2, 2025.9</li>
  <li>기획재정부, 「2026년도 공공기관 경영평가편람」, 2026.1</li>
  <li>행정안전부, 「2026년도 지방공기업 경영평가편람」, 2026.1</li>
  <li>한국인터넷진흥원(KISA), 「클라우드 보안인증제(CSAP) 안내」</li>
  <li>OpenAI, "ChatGPT Enterprise &amp; Teams" 제품 공개 자료</li>
</ul>
`

const FAQ_JSON_LD = ``

export default function ChatgptTeamsKoreaPublicSector({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까",
  lead = "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N2SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다.",
  category = "정책 분석",
  readTime = "12분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "ChatGPT Teams는 글로벌 기준으로는 진일보한 보안 옵션을 제공합니다. 다만 한국 공공 영역에서는 별도의 적합성 검토가 필요합니다. CSAP 인증의 적용성, 개인정보보호법상 국외이전, N2SF 모델 2 등급 체계, 경영평가·감사 관점 — 네 가지 적합성 지점을 짚습니다. 검토 가능한 대안 방향은 (A) CSAP 인증 국내 LLM, (B) 자체 sLLM 구축(모델 1), (C) 외부 LLM + 보호 레이어 결합 세 가지이며, 기관의 활용 우선순위·운영 역량에 따라 적합성이 달라집니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/chatgpt-teams-korea-public-sector",
  datePublished = "2026-05-01",
  dateModified = "2026-05-18",
  inLanguage = "ko-KR",
  breadcrumbLabel = "공공기관의 ChatGPT Teams 사용 — 한국 규제 환경 적합성 분석",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related1Href = "/resources/learn/public-sector-genai-three-approaches-in-korea",
  related2Title = "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
  related2Href = "/resources/learn/n2sf-model-2-explained",
  related3Title = "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까",
  related3Href = "/resources/learn/public-sector-chatgpt-input-guide",
  related4Title = "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵",
  related4Href = "/resources/learn/public-sector-external-llm-adoption-roadmap",
}: Props) {
  const relatedItems = [
    { title: related1Title, href: related1Href },
    { title: related2Title, href: related2Href },
    { title: related3Title, href: related3Href },
    { title: related4Title, href: related4Href },
  ].filter((r) => r.title && r.href)

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": lead,
    "inLanguage": inLanguage,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": { "@type": "Organization", "name": "CUBIG" },
    "publisher": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
  })

  const breadcrumbJsonLd = breadcrumbLabel
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://llmcapsule.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://llmcapsule.ai/resources" },
          { "@type": "ListItem", "position": 3, "name": "Learn", "item": "https://llmcapsule.ai/resources/learn" },
          { "@type": "ListItem", "position": 4, "name": breadcrumbLabel },
        ],
      })
    : ""

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {breadcrumbJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Root ─────────────────────────────────────────── */
        .la-root {
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
        .la-container {
          max-width: var(--container-max, 1280px);
          margin: 0 auto;
          padding: 0 var(--s-page, clamp(20px, 4vw, 80px));
        }

        /* ── 1. Article Hero ──────────────────────────────── */
        .la-hero {
          padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-hero__inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .la-hero__back {
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
        .la-hero__back:hover { color: var(--c-primary-dark, #3b2fbf); }

        .la-hero__title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 20px;
        }

        .la-hero__lead {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.65;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 28px;
          max-width: 760px;
        }

        .la-hero__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .la-meta__chip {
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

        .la-meta__sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-rule, #e5e7eb);
          flex-shrink: 0;
        }

        .la-meta__time,
        .la-meta__date {
          font-size: 13px;
          color: var(--c-muted, #6b7280);
          font-weight: 500;
        }

        /* ── 2. TL;DR block ───────────────────────────────── */
        .la-tldr-wrap {
          padding: clamp(40px, 5vw, 72px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-tldr {
          max-width: 880px;
          margin: 0 auto;
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-lg, 16px);
          padding: 32px 36px;
        }

        .la-tldr__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-primary, #5b4fe9);
          margin-bottom: 14px;
        }

        .la-tldr__body {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
        }

        .la-tldr__body strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* ── 3. Article Body ──────────────────────────────── */
        .la-body-wrap {
          padding: clamp(48px, 6vw, 96px) 0;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
        }

        .la-body {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Headings inside body */
        .la-body h2 {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--c-ink, #0f1130);
          margin: 0 0 18px;
          padding-top: 40px;
          border-top: 2px solid var(--c-rule, #e5e7eb);
        }

        .la-body h2:first-child {
          padding-top: 0;
          border-top: none;
        }

        .la-body h3 {
          font-size: clamp(17px, 1.5vw, 20px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--c-ink, #0f1130);
          margin: 32px 0 10px;
        }

        /* Paragraphs */
        .la-body p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--c-ink-soft, #3a3d5e);
          margin: 0 0 18px;
        }

        .la-body p:last-child { margin-bottom: 0; }

        .la-body p strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        /* Lists */
        .la-body ul,
        .la-body ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }

        .la-body li {
          font-size: 17px;
          line-height: 1.7;
          color: var(--c-ink-soft, #3a3d5e);
          margin-bottom: 10px;
        }

        .la-body li strong {
          color: var(--c-ink, #0f1130);
          font-weight: 700;
        }

        .la-body li:last-child { margin-bottom: 0; }

        /* Blockquote */
        .la-body blockquote {
          margin: 28px 0;
          padding: 20px 24px;
          border-left: 3px solid var(--c-primary, #5b4fe9);
          background-color: var(--c-primary-soft, #eeebfe);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
        }

        .la-body blockquote p {
          margin: 0;
          color: var(--c-ink, #0f1130);
          font-style: italic;
        }

        /* Inline code */
        .la-body code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
          padding: 2px 7px;
          color: var(--c-ink, #0f1130);
        }

        /* Code block (pre) */
        .la-body pre {
          background-color: var(--c-bg-dark, #0f1130);
          border-radius: var(--r-md, 10px);
          padding: 24px;
          margin: 24px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .la-body pre::-webkit-scrollbar { display: none; }

        .la-body pre code {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
        }

        /* Table */
        .la-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 15px;
        }

        .la-body th,
        .la-body td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--c-rule, #e5e7eb);
          line-height: 1.5;
          color: var(--c-ink-soft, #3a3d5e);
        }

        .la-body th {
          font-weight: 700;
          color: var(--c-ink, #0f1130);
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-body tr:last-child td { border-bottom: none; }

        /* Callout (amber) — for <div class="callout"> inside bodyHtml */
        .la-body .callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          background-color: var(--c-amber-soft, #fef3c7);
          border-left: 3px solid var(--c-amber, #f59e0b);
          border-radius: 0 var(--r-sm, 6px) var(--r-sm, 6px) 0;
          margin: 28px 0;
        }

        .la-body .callout__icon {
          font-size: 18px;
          flex-shrink: 0;
          line-height: 1.5;
        }

        .la-body .callout__body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--c-ink, #0f1130);
          margin: 0;
        }

        /* Takeaways box */
        .la-body .takeaways {
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          padding: 24px 28px;
          margin: 28px 0;
        }

        .la-body .takeaways__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 12px;
        }

        .la-body .takeaways ul {
          margin: 0;
          padding-left: 20px;
        }

        .la-body .takeaways li {
          font-size: 15px;
        }

        /* Figure (inline diagram with SVG) */
        .la-body .ds-figure {
          margin: 28px 0;
          padding: 20px;
          background-color: var(--c-bg-soft, #f7f8fb);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-sm, 6px);
        }
        .la-body .ds-figure__svg-wrap {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .la-body .ds-figure__svg-wrap::-webkit-scrollbar { display: none; }
        .la-body .ds-figure__svg {
          display: block;
          width: 100%;
          height: auto;
          min-width: 640px;
          max-width: 100%;
        }
        .la-body .ds-figure__caption {
          margin-top: 12px;
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--c-muted, #6b7280);
          text-align: center;
        }

        /* Inline links inside body */
        .la-body a {
          color: var(--c-primary, #5b4fe9);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s, color 0.15s;
        }
        .la-body a:hover {
          color: var(--c-primary-dark, #3b2fbf);
          border-bottom-color: var(--c-primary-dark, #3b2fbf);
        }

        /* Button inside body (e.g. CTA link) */
        .la-body .la-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--r-md, 10px);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s, color 0.2s;
          border-bottom: none;
        }
        .la-body .la-btn:hover { border-bottom: none; }

        .la-body .la-btn--primary {
          background-color: var(--c-ink, #0f1130);
          color: #ffffff;
        }
        .la-body .la-btn--primary:hover {
          background-color: var(--c-primary, #5b4fe9);
          color: #ffffff;
        }

        .la-body .la-btn--ghost {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-ink, #0f1130);
          border-color: var(--c-rule, #e5e7eb);
        }
        .la-body .la-btn--ghost:hover { border-color: var(--c-ink, #0f1130); }

        /* ── 4. Related Links ─────────────────────────────── */
        .la-related {
          padding: clamp(48px, 6vw, 80px) 0;
          background-color: var(--c-bg-soft, #f7f8fb);
        }

        .la-related__label {
          font-family: var(--f-mono, 'JetBrains Mono', 'SF Mono', Consolas, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted, #6b7280);
          margin-bottom: 20px;
        }

        .la-related__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @container (max-width: 767px) {
          .la-related__grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .la-related__grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .la-related__card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          background-color: var(--c-bg, #ffffff);
          border: 1px solid var(--c-rule, #e5e7eb);
          border-radius: var(--r-md, 10px);
          text-decoration: none;
          color: var(--c-ink, #0f1130);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .la-related__card:hover {
          border-color: var(--c-primary, #5b4fe9);
          box-shadow: 0 4px 16px rgba(91, 79, 233, 0.08);
        }

        .la-related__card-title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--c-ink, #0f1130);
        }

        .la-related__card-arrow {
          font-size: 18px;
          color: var(--c-primary, #5b4fe9);
          line-height: 1;
          align-self: flex-end;
        }

        /* ── Container query: mobile adjustments ─────────── */
        @container (max-width: 767px) {
          .la-hero { padding-top: 48px; }
          .la-hero__title { font-size: 28px; }
          .la-hero__lead { font-size: 16px; }
          .la-tldr { padding: 24px 20px; border-radius: var(--r-md, 10px); }
          .la-body p,
          .la-body li { font-size: 16px; }
          .la-body h2 { padding-top: 28px; }
          .la-body table { font-size: 14px; display: block; overflow-x: auto; scrollbar-width: none; }
          .la-body table::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="la-root">

        {/* ── 1. Article Hero ── */}
        <section className="la-hero">
          <div className="la-container">
            <div className="la-hero__inner">
              <a href={backHref} className="la-hero__back">{backLabel}</a>
              <h1 className="la-hero__title">{title}</h1>
              <p className="la-hero__lead">{lead}</p>
              <div className="la-hero__meta">
                <span className="la-meta__chip">{category}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__time">{readTime}</span>
                <span className="la-meta__sep" aria-hidden="true" />
                <span className="la-meta__date">{dateUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TL;DR ── */}
        <div className="la-tldr-wrap">
          <div className="la-container">
            <div className="la-tldr">
              <div className="la-tldr__label">{tldrLabel}</div>
              <p className="la-tldr__body">{tldrBody}</p>
            </div>
          </div>
}

addPropertyControls(ChatgptTeamsKoreaPublicSector, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 어떤 빈틈을 가지는지 분석합니다. CSAP·개인정보보호법·N2SF 모델 2·경영평가 체계와의 적합성을 짚고, 공공기관이 검토 가능한 대안 방향을 정리합니다.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "정책 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "12분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "ChatGPT Teams는 글로벌 기준으로는 진일보한 보안 옵션을 제공합니다. 다만 한국 공공 영역에서는 별도의 적합성 검토가 필요합니다. CSAP 인증의 적용성, 개인정보보호법상 국외이전, N2SF 모델 2 등급 체계, 경영평가·감사 관점 — 네 가지 적합성 지점을 짚습니다. 검토 가능한 대안 방향은 (A) CSAP 인증 국내 LLM, (B) 자체 sLLM 구축(모델 1), (C) 외부 LLM + 보호 레이어 결합 세 가지이며, 기관의 활용 우선순위·운영 역량에 따라 적합성이 달라집니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/chatgpt-teams-korea-public-sector" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-18" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "공공기관의 ChatGPT Teams 사용 — 한국 규제 환경 적합성 분석" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches-in-korea" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/n2sf-model-2-explained" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/public-sector-chatgpt-input-guide" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "/resources/learn/public-sector-external-llm-adoption-roadmap" },
})
