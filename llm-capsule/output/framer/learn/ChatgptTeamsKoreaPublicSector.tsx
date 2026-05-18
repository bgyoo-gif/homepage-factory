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
<!-- 일반 HTML 태그(h2, p, strong, table)만 사용 — LearnArticle의 dangerouslySetInnerHTML에 그대로 들어감 -->

<h2>1. 첫 번째 빈틈 — CSAP 인증의 부재</h2>
<p>「클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률」(이하 클라우드컴퓨팅법)과 「전자정부법」은 공공기관이 민간 클라우드 서비스를 이용할 때 <strong>클라우드 보안인증(CSAP)</strong>을 받은 서비스를 사용하도록 규정합니다. CSAP는 한국인터넷진흥원(KISA)이 운영하는 인증 체계로, 데이터 저장 위치·접근 통제·암호화·인력 검증 등 한국 공공 영역의 요구사항을 반영합니다.</p>
<p>ChatGPT Teams는 CSAP 인증을 받지 않았습니다. OpenAI가 SOC 2와 ISO 27001을 보유하고 있다 해도 이는 미국·국제 표준이지 한국 공공 영역의 인증이 아닙니다. 따라서 원칙적으로 공공기관은 ChatGPT Teams를 업무에 도입하기 어렵습니다.</p>
<p>예외 조항이 존재하기는 합니다. 비민감 정보·단순 업무 보조에 한해 자체 보안성 검토 후 사용하는 우회로입니다. 그러나 2024년 이후 공공부문 디지털 주권 강조 흐름에서 이 예외는 점점 좁아지고 있습니다. 감사원이 "비민감 정보의 범위"를 사후 판단할 수 있고, 그 판단이 도입 시점의 판단과 다를 때 책임은 도입 결정자에게 돌아옵니다.</p>

<h2>2. 두 번째 빈틈 — 데이터 국외이전과 개정 개인정보보호법</h2>
<p>2024년 시행된 개정 「개인정보보호법」은 개인정보의 국외이전 규제를 한층 강화했습니다. 정보주체 동의, 국외이전 사실의 명시적 고지, 이전 받는 자의 안전성 확보 조치 등이 요구됩니다.</p>
<p>여기서 자주 혼동되는 지점이 있습니다. OpenAI의 "Teams 플랜은 학습에 사용하지 않는다"는 약속과 "데이터가 국외로 이전되지 않는다"는 명제는 <strong>전혀 다른 차원</strong>입니다. 학습 미사용은 모델 파라미터 업데이트에 쓰지 않는다는 뜻일 뿐, 데이터 전송·저장·처리는 여전히 OpenAI 인프라(주로 미국)에서 이루어집니다. 즉 ChatGPT Teams에 입력되는 모든 데이터는 정의상 <strong>국외이전된 데이터</strong>입니다.</p>
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
      <td>미국 OpenAI 인프라</td>
      <td>미국 OpenAI 인프라</td>
    </tr>
    <tr>
      <td><strong>차단되는 행위</strong></td>
      <td>학습 데이터로의 재사용</td>
      <td>(해당 없음 — 이전 자체는 발생)</td>
    </tr>
    <tr>
      <td><strong>법적 함의</strong></td>
      <td>영업비밀 노출 위험 일부 완화</td>
      <td>정보주체 동의·고지 의무 발생</td>
    </tr>
    <tr>
      <td><strong>공공기관 입장에서의 의미</strong></td>
      <td>마케팅 약속</td>
      <td>법령 위반 소지</td>
    </tr>
  </tbody>
</table>

<p>공공기관이 민원인 정보·내부 인사 정보·정책 검토 자료를 ChatGPT Teams에 입력한다면, 이는 개인정보보호법상 국외이전에 해당합니다. 정보주체별 동의를 받지 않은 상태에서의 입력은 법 위반 소지가 있습니다. 일괄 동의로 갈음하려 해도 "구체적이고 분리된 동의"라는 요건을 충족하기 어렵습니다.</p>
<p>이 지점은 SaaS 형태의 글로벌 LLM이 한국 공공 영역에서 갖는 가장 근본적인 제약입니다.</p>

<h2>3. 세 번째 빈틈 — N²SF 등급 체계와의 충돌</h2>
<p>국가정보원이 운영하는 <strong>N²SF(National Network Security Framework)</strong>는 공공 정보를 C(Confidential)·S(Secret)·TS(Top Secret) 등급으로 분류하고, 각 등급에 따라 처리 가능한 시스템 환경을 차등 규정합니다. S 등급 이상 정보는 인터넷 망과 분리된 환경에서 처리되어야 하며, 외부 클라우드 서비스 사용은 원칙적으로 금지됩니다.</p>
<p>등급별 처리 환경 요건과 ChatGPT Teams의 적합성을 매핑하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>등급</th>
      <th>허용 처리 환경</th>
      <th>ChatGPT Teams 적합성</th>
      <th>비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>C (Confidential)</strong></td>
      <td>일반 업무망 + 보안성 검토 통과 시 외부 클라우드</td>
      <td>△ 조건부</td>
      <td>CSAP 미인증 이슈 잔존</td>
    </tr>
    <tr>
      <td><strong>S (Secret)</strong></td>
      <td>인터넷 망 분리 환경</td>
      <td>✗ 부적합</td>
      <td>외부 클라우드 원칙적 금지</td>
    </tr>
    <tr>
      <td><strong>TS (Top Secret)</strong></td>
      <td>폐쇄망·전용 인프라</td>
      <td>✗ 부적합</td>
      <td>외부 서비스 사용 불가</td>
    </tr>
  </tbody>
</table>

<p>문제는 <strong>실무자가 자신이 입력하는 정보의 등급을 항상 정확히 인식하지는 못한다</strong>는 점입니다. 보고서 초안을 정리하다가 회의 메모를 붙여넣고, 그 안에 S 등급에 해당하는 정책 검토 내용이 포함되어 있는 경우는 흔합니다. ChatGPT Teams의 관리자 콘솔은 이 입력을 사전에 식별하지 못합니다. 사용자가 의식하지 못한 사이 S 등급 정보가 외부 클라우드로 이전되는 사고가 발생할 수 있고, 책임 소재 규명은 사후적으로만 가능합니다.</p>
<p>이는 단순한 사용자 교육으로 해결되지 않는 구조적 문제입니다. 등급 분류는 정보 자체의 속성이지 사용자의 인식 여부에 좌우되지 않기 때문입니다.</p>

<h2>4. 네 번째 빈틈 — 경영평가와 감사 관점의 역설</h2>
<p>2026년부터 공공기관 경영평가에 디지털 혁신·생성형 AI 활용도 항목이 가점으로 반영될 가능성이 높아지고 있습니다. 표면적으로는 "생성형 AI를 적극 도입하라"는 신호입니다. 그러나 같은 시기 감사원·국가정보원의 보안 감사는 외부 클라우드 LLM 사용에 대한 통제를 강화하고 있습니다.</p>
<p>이 두 흐름은 모순적으로 보이지만 같은 방향을 가리킵니다. <strong>"사용 안 함"보다 "통제된 사용"이 평가에서 더 높은 점수를 받는다</strong>는 점입니다. 즉 생성형 AI를 도입하되, 그 도입이 한국의 법령·인증·등급 체계 안에서 이루어졌음을 입증할 수 있어야 합니다.</p>
<p>ChatGPT Teams의 경우 도입 자체가 위 1~3번 항목에서 입증 어려움에 부딪힙니다. 따라서 경영평가 가점을 노린 도입이 오히려 감사 리스크로 전환되는 역설이 발생합니다. "AI를 도입했다"는 사실보다 <strong>"적합한 방식으로 도입했다"</strong>는 입증 가능성이 더 중요하다는 점이 점점 분명해지고 있습니다.</p>

<h2>5. 그렇다면 무엇이 가능할까</h2>
<p>이상의 네 가지 빈틈은 ChatGPT Teams의 결함을 지적하기 위한 것이 아닙니다. OpenAI는 글로벌 SaaS 모델로 설계된 제품이며, 그 자체로는 잘 작동합니다. 다만 그 설계가 한국 공공 영역의 규제 환경과 본질적으로 맞지 않을 뿐입니다.</p>
<p>대안의 방향은 세 가지로 정리됩니다. 각각이 앞서 분석한 네 가지 빈틈을 어떻게 해결하는지 정리하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>대안</th>
      <th>CSAP 인증</th>
      <th>국외이전 회피</th>
      <th>N²SF S 등급 처리</th>
      <th>사용자 실수 방어</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ChatGPT Teams (참조)</strong></td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><strong>① CSAP 인증 국내 LLM</strong> (예: 하이퍼클로바X, 솔라)</td>
      <td>○</td>
      <td>○</td>
      <td>△</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><strong>② 온프레미스·프라이빗 배포</strong></td>
      <td>○</td>
      <td>○</td>
      <td>○</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><strong>③ 온프레미스 + 사전 마스킹</strong></td>
      <td>○</td>
      <td>○</td>
      <td>○</td>
      <td>○</td>
    </tr>
  </tbody>
</table>

<p>첫째, <strong>CSAP 인증을 받은 국내 LLM 서비스</strong>를 활용하는 방식입니다. 네이버 하이퍼클로바X, 업스테이지 솔라 등이 공공 영역 적합성을 갖춰가고 있습니다. CSAP·국외이전 문제는 해결되지만, S 등급 이상 정보 처리와 사용자의 부주의한 입력은 여전히 과제로 남습니다.</p>
<p>둘째, <strong>온프레미스 또는 프라이빗 클라우드 배포</strong>입니다. 모델 가중치를 기관 내부 인프라에 두고, 데이터를 외부로 내보내지 않는 구조입니다. 국외이전·CSAP·N²SF S 등급 문제까지 동시에 해결할 수 있습니다. 다만 사용자가 의식하지 못한 채 입력하는 등급 정보·개인정보에 대한 사전 방어는 별도 장치가 없으면 작동하지 않습니다.</p>
<p>셋째, 두 번째 방식에 <strong>입력 단계 마스킹</strong>을 결합하는 접근입니다. 사용자가 의식하지 못한 채 등급 정보·개인정보를 입력하더라도 시스템이 사전에 식별·치환합니다. 예컨대 큐빅의 LLM Capsule처럼 온프레미스 배포와 사전 마스킹을 결합한 솔루션은, N²SF S 등급 정보의 처리 가능성과 사용자 실수에 대한 구조적 방어를 동시에 제공한다는 점에서 한국 공공 영역의 요구사항을 정면으로 겨냥한 설계입니다.</p>
<p>ChatGPT Teams가 "기업용 안전 옵션"이라는 마케팅은 글로벌 시장에서는 유효합니다. 그러나 한국 공공 영역의 의사결정자에게 더 중요한 질문은 <strong>"안전한가"가 아니라 "한국에서 합법적으로 운용 가능한가"</strong>입니다. 이 질문에 답하기 위해서는 보안 기술의 수준이 아니라 규제 환경과의 적합성을 따져야 합니다. 두 질문은 다른 질문입니다.</p>
`

const FAQ_JSON_LD = ``

export default function ChatgptTeamsKoreaPublicSector({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까",
  lead = "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 작동하지 않는 이유. CSAP·개인정보보호법·N²SF·감사 체계와의 구조적 불일치를 분석합니다.",
  category = "정책 분석",
  readTime = "14분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "ChatGPT Teams의 보안 마케팅(학습에 안 씀, SOC 2 인증)은 글로벌 시장에서는 유효하지만 한국 공공 영역에서는 작동하지 않습니다. CSAP 미인증, 개인정보보호법상 국외이전 해당, N²SF 등급 체계 충돌, 감사 관점의 역설 — 네 가지 구조적 빈틈이 존재합니다. 대안은 CSAP 인증 국내 LLM, 온프레미스 배포, 그리고 온프레미스 + 사전 마스킹 결합이며, 셋 중 사용자 실수까지 방어하는 마지막 방식만이 한국 공공 영역의 요구사항을 정면으로 겨냥합니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/chatgpt-teams-korea-public-sector",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "ko-KR",
  breadcrumbLabel = "공공기관의 ChatGPT Teams 사용, 감사에서 살아남을 수 있을까",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related1Href = "/resources/learn/public-sector-genai-three-approaches",
  related2Title = "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
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
        </div>

        {/* ── 3. Article Body ── */}
        <div className="la-body-wrap">
          <div className="la-container">
            <article
              className="la-body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>

        {/* ── 4. Related Links ── */}
        {relatedItems.length > 0 && (
          <div className="la-related">
            <div className="la-container">
              <div className="la-related__label">{relatedSectionLabel}</div>
              <div className="la-related__grid">
                {relatedItems.map((item, i) => (
                  <a key={i} href={item.href} className="la-related__card">
                    <span className="la-related__card-title">{item.title}</span>
                    <span className="la-related__card-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

addPropertyControls(ChatgptTeamsKoreaPublicSector, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "ChatGPT Teams의 보안 마케팅이 한국 공공 영역에서 작동하지 않는 이유. CSAP·개인정보보호법·N²SF·감사 체계와의 구조적 불일치를 분석합니다.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "정책 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "14분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "ChatGPT Teams의 보안 마케팅(학습에 안 씀, SOC 2 인증)은 글로벌 시장에서는 유효하지만 한국 공공 영역에서는 작동하지 않습니다. CSAP 미인증, 개인정보보호법상 국외이전 해당, N²SF 등급 체계 충돌, 감사 관점의 역설 — 네 가지 구조적 빈틈이 존재합니다. 대안은 CSAP 인증 국내 LLM, 온프레미스 배포, 그리고 온프레미스 + 사전 마스킹 결합이며, 셋 중 사용자 실수까지 방어하는 마지막 방식만이 한국 공공 영역의 요구사항을 정면으로 겨냥합니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/chatgpt-teams-korea-public-sector" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "공공기관의 ChatGPT Teams 사용, 감사에서 살아남을 수 있을까" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/n2sf-model-2-explained" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/public-sector-chatgpt-input-guide" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "/resources/learn/public-sector-external-llm-adoption-roadmap" },
})
