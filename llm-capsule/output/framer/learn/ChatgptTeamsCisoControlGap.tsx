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
<!-- 일반 HTML 태그(h2, p, strong, ul, table)만 사용 — LearnArticle의 dangerouslySetInnerHTML에 그대로 들어감 -->

<h2>1. 입력 단계 통제 — 콘솔이 다루지 않는 영역</h2>
<p>ChatGPT Teams의 관리자 콘솔이 일반 ChatGPT 대비 추가로 제공하는 기능을 정리하면 다음과 같습니다. 사용자 관리, 도메인 검증, SSO 연동, 사용 로그, 데이터 보관 기간 설정, 학습 미사용 약속 등입니다. 일반 ChatGPT에서는 제공되지 않던 기능들로, 기업 환경의 일부 요구사항을 다룹니다.</p>
<p>한편 관리자 콘솔이 제공하지 않는 기능도 있습니다. <strong>입력 내용에 대한 사전 필터링·마스킹</strong>입니다. 사용자가 무엇을 입력하든, 그 입력은 그대로 OpenAI 인프라로 전송됩니다. 관리자 콘솔은 사후에 사용 사실은 기록하지만, 입력 내용 자체를 사전에 차단하는 기능은 제공하지 않습니다.</p>
<p>이 점은 ChatGPT Teams의 결함이 아니라 제품의 설계 범위 문제로 보는 것이 정확합니다. OpenAI는 LLM 서비스 제공자이지 보안 솔루션 제공자가 아니며, 입력 단계 콘텐츠 필터링은 통상 별도 보안 솔루션의 영역입니다.</p>
<p>다만 보안팀 관점에서는 다른 유출 채널과의 통제 비대칭이 발생합니다. 다른 채널들에 대해 보안팀이 통상 운영하는 사전 통제 도구를 정리하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>유출 채널</th>
      <th>일반적 사전 통제 방식</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>이메일</strong></td>
      <td>메일 DLP (키워드·정규식·첨부파일 검사)</td>
    </tr>
    <tr>
      <td><strong>USB·외부 저장장치</strong></td>
      <td>매체 제어 솔루션 (쓰기 차단·암호화)</td>
    </tr>
    <tr>
      <td><strong>웹 업로드</strong></td>
      <td>웹 DLP·SWG (도메인·콘텐츠 검사)</td>
    </tr>
    <tr>
      <td><strong>클라우드 협업 도구</strong></td>
      <td>CASB (API 기반 콘텐츠 스캐닝)</td>
    </tr>
    <tr>
      <td><strong>외부 LLM 인터페이스</strong></td>
      <td>표준화된 사전 통제 도구가 자리 잡지 못함</td>
    </tr>
  </tbody>
</table>

<p>이메일·USB·웹 업로드 같은 전통적 유출 채널에는 사전 통제 도구 시장이 성숙해 있는 반면, 외부 LLM 인터페이스는 비교적 새로운 채널이라 사전 통제 도구가 아직 표준화되지 않은 상태입니다. 이 비대칭이 보안팀 관점에서 검토 지점이 됩니다.</p>

<h2>2. 사후 감사 — 외부 로그의 한계</h2>
<p>ChatGPT Teams가 제공하는 사용 로그는 사후 감사에 활용할 수 있는 자료입니다. 그러나 보안 운영 관점에서 다음 한계를 고려할 필요가 있습니다.</p>
<p>첫째, <strong>로그의 저장 위치가 OpenAI 인프라</strong>라는 점입니다. 사내 SIEM이나 SOAR 플랫폼과의 실시간 연동은 별도 통합 작업이 필요하며, 통합 보안 운영 화면에서 다른 채널의 이벤트와 함께 상관 분석하기에 제약이 있을 수 있습니다.</p>
<p>둘째, <strong>로그의 입자도</strong>입니다. 사용 시점·사용자·세션 정보는 로그에 포함되지만, "어떤 정보가 어떤 형태로 입력되었는가"의 구체적 내용을 보안팀이 자유롭게 확인하는 데는 정책적·기술적 제약이 따를 수 있습니다.</p>
<p>법적 분쟁이나 규제 당국 조사 상황에서 이 한계는 더 부각될 수 있습니다. "어떤 정보가, 언제, 누구에 의해, 어디로 이전되었는가"를 자사 시스템 로그로 입증할 필요가 있을 때, 외부 SaaS의 로그만으로는 증거 능력·무결성 측면에서 추가 검토가 필요한 영역입니다.</p>

<h2>3. 다중 모델 환경에서의 통제 일관성</h2>
<p>현실의 임직원은 ChatGPT 하나만 사용하지 않습니다. Claude, Gemini, Copilot, 국내 LLM 서비스, LLM 기반 SaaS 도구들이 동시다발적으로 사용됩니다. CISO 입장에서 보안 정책은 ChatGPT Teams 한 곳에만 적용해서 끝나지 않습니다.</p>
<p>ChatGPT Teams의 관리자 콘솔은 정의상 OpenAI 생태계 내부의 사용만 통제합니다. 다른 LLM 서비스에는 각 서비스의 별도 콘솔이나 별도 솔루션이 필요합니다. 이는 ChatGPT Teams의 한계라기보다 SaaS 모델 전반의 특성이지만, 통제의 일관성 관점에서는 추가 검토 사항이 됩니다.</p>

<table>
  <thead>
    <tr>
      <th>외부 LLM 서비스</th>
      <th>ChatGPT Teams 콘솔로 통제 가능</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ChatGPT (OpenAI)</td>
      <td>○</td>
    </tr>
    <tr>
      <td>Claude (Anthropic)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Gemini (Google)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Copilot (Microsoft)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>국내 LLM 서비스</td>
      <td>—</td>
    </tr>
    <tr>
      <td>LLM 임베디드 SaaS</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

<p>여기에 추가로, 임직원이 회사 공식 계정이 아닌 개인 계정으로 외부 LLM을 사용하는 경우(섀도우 AI)는 회사 보안팀의 가시성 자체가 닿지 않는 영역입니다. ChatGPT Teams 도입이 이 영역까지 통제하지는 않습니다.</p>

<h2>4. 위탁과 책임의 구분</h2>
<p>법적 관점에서 자주 짚어지는 지점입니다. OpenAI의 SOC 2, ISO 27001 등 보안 인증은 서비스 제공자 측의 보안 수준을 입증하는 자료입니다. 다만 이 인증들이 <strong>고객사의 법적 책임을 면제하지는 않습니다</strong>.</p>
<p>「개인정보보호법」상 개인정보처리자는 위탁 처리 시에도 관리·감독 책임을 일정 부분 집니다(법 제26조 등). 위탁받은 자의 인증 보유 여부와 별개로, 위탁자 본인의 안전성 확보 조치 의무는 그대로 적용될 수 있습니다. 「부정경쟁방지 및 영업비밀보호에 관한 법률」상 영업비밀의 비밀 관리성도 회사가 입증해야 하는 사항으로, 외부 SaaS의 보안 약관이 이를 자동으로 대신해주지 않습니다.</p>
<p>사고 발생 시 입증 가능성도 함께 검토 사항이 됩니다. "ChatGPT Teams를 사용했고 OpenAI는 인증을 받았다"는 사실만으로는 합리적 보안 조치를 다했다는 입증으로 충분하지 않을 수 있습니다. 실무상 추가로 묻게 되는 질문은 다음과 같습니다.</p>

<ul>
  <li>입력 단계에서 어떤 통제가 적용되었는가</li>
  <li>입력된 내용을 어떻게 식별·차단했는가</li>
  <li>사후에 무엇이 유출되었는지를 자사 시스템으로 재구성 가능한가</li>
</ul>

<p>이 질문들에 대한 답이 "외부 SaaS 제공자에게 의존하고 있다"라면, 책임의 일부는 위탁자 본인에게 잠재적으로 남아 있는 상태로 볼 수 있습니다.</p>

<h2>사전 통제 모델이 필요한 이유</h2>
<p>네 가지 검토 지점을 관통하는 공통점은 ChatGPT Teams의 통제 모델이 <strong>사후 가시성에 가까운 형태</strong>라는 것입니다. 보안팀이 익숙한 다른 채널들(이메일·USB·웹 업로드)에서는 사전 통제 도구가 일반화되어 있는데, 외부 LLM 인터페이스에는 그에 대응하는 사전 통제 도구가 아직 표준화 단계입니다.</p>
<p>사전 통제 모델은 새로운 개념이 아닙니다. 이메일에는 DLP가, 외부 매체에는 매체 제어가, 웹 트래픽에는 SWG와 CASB가 적용되어 왔습니다. 외부 LLM 인터페이스도 같은 원리를 적용할 수 있는 채널입니다. 입력 단계에서 민감 정보를 식별·처리하고, 처리된 데이터만 외부로 전송하며, 모든 과정을 자사 통제하에 있는 시스템에 기록하는 형태입니다.</p>

<table>
  <thead>
    <tr>
      <th>통제 시점</th>
      <th>사후 가시성 중심 모델</th>
      <th>사전 통제 결합 모델</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>입력 전</strong></td>
      <td>—</td>
      <td>민감정보 식별·가명화·차단</td>
    </tr>
    <tr>
      <td><strong>전송</strong></td>
      <td>원문 그대로 전송</td>
      <td>처리된 데이터 전송</td>
    </tr>
    <tr>
      <td><strong>응답 수신</strong></td>
      <td>그대로 전달</td>
      <td>내부망 복원 시 통제 적용</td>
    </tr>
    <tr>
      <td><strong>로그</strong></td>
      <td>외부 SaaS 로그</td>
      <td>자사 SIEM 통합 로그</td>
    </tr>
    <tr>
      <td><strong>사고 발생 시</strong></td>
      <td>외부 SaaS 로그 의존</td>
      <td>자사 시스템 기반 재구성</td>
    </tr>
  </tbody>
</table>

<p>구체적인 구현 형태는 다양합니다. 자체 DLP 솔루션 확장, CASB의 LLM 채널 지원, 또는 외부 LLM 앞단에 가명화 보호 레이어를 두는 솔루션 등입니다. 어느 형태가 적합한지는 기업의 보안 운영 모델·기존 솔루션 자산·예산에 따라 달라집니다.</p>
<p>중요한 것은 ChatGPT Teams 도입 검토와 별개로, 외부 LLM 채널 전반에 대한 사전 통제 모델을 어떻게 구성할지에 대한 자체 정책 수립이 함께 진행되는 것입니다. ChatGPT Teams의 관리자 콘솔이 채우는 부분과 채우지 못하는 부분을 구분해서 보면, 추가로 마련할 통제의 범위가 더 명확해집니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>개인정보보호위원회, 「개인정보보호법」 및 시행령</li>
  <li>부정경쟁방지 및 영업비밀보호에 관한 법률</li>
  <li>OpenAI, "ChatGPT Enterprise &amp; Teams" 보안 관련 공개 자료</li>
</ul>
`

const FAQ_JSON_LD = ``

export default function ChatgptTeamsCisoControlGap({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것",
  lead = "ChatGPT Teams의 관리자 콘솔은 사후 가시성을 제공하지만 사전 통제는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 보안팀이 마주하는 통제 공백을 분석합니다.",
  category = "보안 분석",
  readTime = "14분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "ChatGPT Teams의 관리자 콘솔은 사용자 관리·도메인 검증·SSO 연동·사용 로그·데이터 보관 기간 설정 같은 기능을 추가해 일반 ChatGPT보다 진일보했습니다. 다만 그 방향이 사후 가시성(visibility)에 치우쳐 있고, 사전 통제(control)는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 검토 지점이 보안팀의 책임 구조에 영향을 줍니다. 사전 통제 모델이 왜 필요한지, 그리고 입력 단계 가명화가 결합된 보호 레이어가 이 공백을 어떻게 메우는지 정리합니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/chatgpt-teams-ciso-control-gap",
  datePublished = "2026-05-01",
  dateModified = "2026-05-18",
  inLanguage = "ko-KR",
  breadcrumbLabel = "ChatGPT Teams의 관리자 콘솔, CISO에게 충분한가",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까",
  related1Href = "/resources/learn/chatgpt-teams-korea-public-sector",
  related2Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related2Href = "/resources/learn/public-sector-genai-three-approaches",
  related3Title = "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까",
  related3Href = "/resources/learn/public-sector-chatgpt-input-guide",
  related4Title = "",
  related4Href = "",
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

addPropertyControls(ChatgptTeamsCisoControlGap, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "ChatGPT Teams의 관리자 콘솔이 보안팀에게 주는 것, 주지 못하는 것" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "ChatGPT Teams의 관리자 콘솔은 사후 가시성을 제공하지만 사전 통제는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 관점에서 보안팀이 마주하는 통제 공백을 분석합니다.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "보안 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "14분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "ChatGPT Teams의 관리자 콘솔은 사용자 관리·도메인 검증·SSO 연동·사용 로그·데이터 보관 기간 설정 같은 기능을 추가해 일반 ChatGPT보다 진일보했습니다. 다만 그 방향이 사후 가시성(visibility)에 치우쳐 있고, 사전 통제(control)는 다른 영역입니다. 입력 단계 통제·감사 추적·다중 모델 환경·책임 구조 네 가지 검토 지점이 보안팀의 책임 구조에 영향을 줍니다. 사전 통제 모델이 왜 필요한지, 그리고 입력 단계 가명화가 결합된 보호 레이어가 이 공백을 어떻게 메우는지 정리합니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/chatgpt-teams-ciso-control-gap" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-18" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "ChatGPT Teams의 관리자 콘솔, CISO에게 충분한가" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "안전하다는 ChatGPT Teams, 한국 공공 영역에서 사용해도 괜찮을까" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/chatgpt-teams-korea-public-sector" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/public-sector-chatgpt-input-guide" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
