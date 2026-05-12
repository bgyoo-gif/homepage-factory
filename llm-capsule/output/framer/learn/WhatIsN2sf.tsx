// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py
//
// Self-contained Framer Code Component.
// No external imports — all LearnArticle logic inlined for Framer cross-folder compatibility.

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그 + .callout + .takeaways만 사용 (기존 learn 아티클과 동일 패턴) -->

<h2>1. 왜 지금 N²SF인가 — 망분리의 한계</h2>
<p>N²SF를 이해하려면 먼저 기존 체계가 왜 한계에 부딪혔는지부터 살펴봐야 합니다.</p>
<p>한국 공공부문의 보안 체계는 오랫동안 <strong>물리적 망분리</strong>를 기본 원칙으로 삼아왔습니다. 인터넷에 연결된 외부망과 업무용 내부망을 물리적으로 분리하고, 두 망 사이의 정보 이동을 엄격히 통제하는 방식입니다. 「전자정부법」, 「국가정보보안기본지침」 등이 이 원칙을 뒷받침했고, 공공기관 정보화 사업의 거의 모든 RFP가 망분리를 전제로 작성되어 왔습니다.</p>
<p>이 체계는 단순하지만 강력했습니다. 두 망 사이에 물리적 경계가 있으므로, 보안 통제가 단순하고 위반 여부 판단도 명확했습니다. 사이버 위협의 절대 다수가 외부 인터넷을 경유한다는 점에서, 이 경계를 차단하는 것만으로도 상당한 보안 효과를 얻을 수 있었습니다.</p>
<p>그러나 시대가 변했습니다. <strong>두 가지 흐름</strong>이 망분리의 효용을 약화시켰습니다.</p>
<ul>
  <li><strong>첫째 — 업무 환경의 클라우드·SaaS 전환:</strong> 행정 업무는 점점 더 외부 서비스에 의존하고 있습니다. 클라우드 협업 도구, SaaS 행정 시스템, 외부 데이터 연계 — 이 모든 것이 망분리 원칙과 충돌합니다. 망분리를 엄격히 유지하면 클라우드를 쓸 수 없고, 클라우드를 쓰려면 망분리를 우회해야 합니다.</li>
  <li><strong>둘째 — 생성형 AI의 등장:</strong> ChatGPT, Claude, Gemini 같은 외부 AI 서비스가 업무 효율성에 결정적 영향을 미치기 시작했고, 직원들은 이를 활용하고 싶어합니다. 그러나 망분리 체계에서는 이 모든 AI 서비스가 "사용 불가" 영역이었습니다. 결과적으로 직원들이 개인 단말에서 비공식적으로 AI를 사용하는 <strong>섀도우 AI</strong> 현상이 광범위하게 발생했습니다. 기관은 보안을 지켰다고 믿지만, 실제로는 통제 바깥에서 AI 사용이 이루어지고 있는 상황입니다.</li>
</ul>
<p>국가정보원과 국가보안기술연구소(NSR)는 이런 시대적 변화를 인식하고, 망분리를 대체할 새로운 보안 체계를 설계했습니다. 그 결과물이 N²SF입니다.</p>

<h2>2. N²SF의 정의와 핵심 개념</h2>
<p>N²SF는 <strong>National Network Security Framework</strong>의 약자로, 한국어로는 <strong>국가 망 보안체계</strong>로 번역됩니다. 한 줄로 정의하면 다음과 같습니다.</p>

<blockquote>정보의 중요도와 시스템의 역할에 따라 보안 통제를 차등 적용하여, 신기술 활용과 보안을 동시에 달성하는 공공부문 보안 프레임워크.</blockquote>

<p>이 정의에서 핵심은 <strong>"차등 적용"</strong>입니다. 모든 정보와 시스템에 동일한 통제를 적용하던 망분리 시대와 달리, N²SF는 정보의 성격에 따라 통제의 강도를 다르게 가져갑니다. 가장 민감한 정보에는 가장 강한 통제를, 덜 민감한 정보에는 그에 맞는 적정 수준의 통제를 적용합니다.</p>
<p>이런 사고 방식을 보안 업계에서는 <strong>다중계층보안(MLS, Multi-Layered Security)</strong>이라고 부릅니다. 단일한 경계로 모든 것을 차단하는 대신, 정보 자산의 가치와 위협 모델에 따라 여러 층의 보호를 차등적으로 적용하는 접근입니다. 미국 국방부의 정보 분류 체계, NATO의 보안 등급 체계, EU의 EU Restricted/Confidential/Secret 분류 등이 모두 비슷한 사고에 기반하고 있습니다. N²SF는 이런 국제적 흐름을 한국 공공부문 환경에 맞게 구체화한 결과물입니다.</p>

<h3>N²SF의 3대 구성 요소</h3>
<p>N²SF를 실무에 적용할 때는 다음 세 가지를 차례로 다루게 됩니다.</p>
<ol>
  <li><strong>정보 등급 분류 (C/S/O):</strong> 우리 기관이 다루는 정보가 어느 등급에 해당하는지 식별</li>
  <li><strong>「위치-주체-객체」 모델링:</strong> 정보서비스가 어떻게 구성되는지 분석</li>
  <li><strong>보안원칙과 통제 적용:</strong> 모델링 결과에 따라 적합한 보안 통제를 선택·적용</li>
</ol>
<p>세 요소를 하나씩 자세히 살펴보겠습니다.</p>

<h2>3. C/S/O 등급 — N²SF의 기본 분류 체계</h2>
<p>N²SF의 출발점은 정보 등급 분류입니다. 모든 업무 정보는 다음 세 등급 중 하나에 해당합니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg">
    <title>C/S/O 정보 등급 분류 체계</title>
    <desc>N²SF의 C, S, O 세 등급의 정의, 정보 예시, 외부 연계 허용 수준 비교</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">C/S/O 정보 등급 분류 체계</text>

    <!-- C Card -->
    <rect x="40" y="56" width="200" height="380" rx="12" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="40" y="56" width="200" height="40" rx="12" fill="#ef5350" stroke="#ef5350" stroke-width="0.5"/>
    <text x="140" y="83" font-family="Inter, sans-serif" font-size="16" font-weight="500" fill="#fff" text-anchor="middle">C — Classified</text>

    <text x="60" y="120" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">기밀 정보</text>
    <text x="60" y="142" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">유출 시 국가 안전에</text>
    <text x="60" y="160" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">중대한 영향</text>

    <line x1="60" y1="180" x2="220" y2="180" stroke="#ef5350" stroke-width="0.5" opacity="0.4"/>

    <text x="60" y="202" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#c73e3a">예시</text>
    <text x="60" y="224" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">· 국가 기밀</text>
    <text x="60" y="244" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">· 외교 협상 자료</text>
    <text x="60" y="264" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">· 군사 작전 정보</text>

    <line x1="60" y1="284" x2="220" y2="284" stroke="#ef5350" stroke-width="0.5" opacity="0.4"/>

    <text x="60" y="306" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#c73e3a">외부 연계</text>
    <text x="60" y="328" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">원칙적 차단</text>
    <text x="60" y="346" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">최고 등급 통제</text>

    <line x1="60" y1="366" x2="220" y2="366" stroke="#ef5350" stroke-width="0.5" opacity="0.4"/>

    <text x="60" y="388" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#c73e3a">외부 AI 활용</text>
    <text x="60" y="410" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">불가</text>

    <!-- S Card -->
    <rect x="250" y="56" width="200" height="380" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <rect x="250" y="56" width="200" height="40" rx="12" fill="#f59e0b" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="350" y="83" font-family="Inter, sans-serif" font-size="16" font-weight="500" fill="#fff" text-anchor="middle">S — Sensitive</text>

    <text x="270" y="120" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#b27408">민감 정보</text>
    <text x="270" y="142" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">유출 시 업무 수행에</text>
    <text x="270" y="160" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">영향, 제한적 공개</text>

    <line x1="270" y1="180" x2="430" y2="180" stroke="#f59e0b" stroke-width="0.5" opacity="0.4"/>

    <text x="270" y="202" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">예시</text>
    <text x="270" y="224" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">· 개인정보</text>
    <text x="270" y="244" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">· 내부 행정문서</text>
    <text x="270" y="264" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">· 정책 검토 자료</text>

    <line x1="270" y1="284" x2="430" y2="284" stroke="#f59e0b" stroke-width="0.5" opacity="0.4"/>

    <text x="270" y="306" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">외부 연계</text>
    <text x="270" y="328" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">조건부 허용</text>
    <text x="270" y="346" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">보안 통제 적용 시</text>

    <line x1="270" y1="366" x2="430" y2="366" stroke="#f59e0b" stroke-width="0.5" opacity="0.4"/>

    <text x="270" y="388" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">외부 AI 활용</text>
    <text x="270" y="410" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">보호 조치 후 가능</text>

    <!-- O Card -->
    <rect x="460" y="56" width="200" height="380" rx="12" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <rect x="460" y="56" width="200" height="40" rx="12" fill="#0ea5a4" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="560" y="83" font-family="Inter, sans-serif" font-size="16" font-weight="500" fill="#fff" text-anchor="middle">O — Open</text>

    <text x="480" y="120" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#0b7f7e">공개 정보</text>
    <text x="480" y="142" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">일반에 공개 가능,</text>
    <text x="480" y="160" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">유출 영향 미미</text>

    <line x1="480" y1="180" x2="640" y2="180" stroke="#0ea5a4" stroke-width="0.5" opacity="0.4"/>

    <text x="480" y="202" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">예시</text>
    <text x="480" y="224" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">· 보도 자료</text>
    <text x="480" y="244" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">· 공개 통계</text>
    <text x="480" y="264" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">· 일반 공지사항</text>

    <line x1="480" y1="284" x2="640" y2="284" stroke="#0ea5a4" stroke-width="0.5" opacity="0.4"/>

    <text x="480" y="306" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">외부 연계</text>
    <text x="480" y="328" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">자유롭게 허용</text>
    <text x="480" y="346" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">최소 통제만 적용</text>

    <line x1="480" y1="366" x2="640" y2="366" stroke="#0ea5a4" stroke-width="0.5" opacity="0.4"/>

    <text x="480" y="388" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">외부 AI 활용</text>
    <text x="480" y="410" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">자유롭게 가능</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 1. C/S/O 정보 등급 분류 체계</figcaption>
</figure>

<h3>3.1 C 등급 — 기밀 정보 (Classified)</h3>
<p>유출 시 국가 안전·외교 관계·국방에 중대한 영향을 미칠 수 있는 정보입니다. 「보안업무규정」상의 비밀 정보와 상당 부분 겹치며, 가장 엄격한 보안 통제가 적용됩니다.</p>
<p>구체적 예시는 국가 기밀, 외교 협상 진행 자료, 군사 작전 관련 정보, 정보기관의 수집 정보 등입니다. C 등급 정보는 원칙적으로 외부 시스템과의 연계가 차단되며, 외부 생성형 AI 활용은 불가합니다.</p>

<h3>3.2 S 등급 — 민감 정보 (Sensitive)</h3>
<p>유출 시 업무 수행이나 공공 이익에 영향을 미칠 수 있지만, C 등급만큼 치명적이지는 않은 정보입니다. <strong>공공기관 업무 정보의 대부분이 이 등급에 해당합니다.</strong></p>
<p>구체적 예시는 개인정보, 내부 행정문서, 정책 검토 자료, 인사 정보, 예산 집행 내역, 민원 처리 내용 등입니다. S 등급 정보는 <strong>조건부 외부 연계</strong>가 가능합니다. 적절한 보안 통제를 적용하면 클라우드 활용이나 외부 시스템 연동이 가능하지만, 그 통제가 무엇인지가 핵심입니다.</p>
<p>외부 AI 활용도 마찬가지로 조건부 가능합니다. 다만 모델 2 가이드라인은 일반적인 상용 AI 활용 시나리오에서는 S 등급 정보의 직접 전송을 제한하고 있습니다. 이 부분은 별도 글에서 자세히 다룹니다.</p>

<h3>3.3 O 등급 — 공개 정보 (Open)</h3>
<p>일반에 공개되어 있거나 공개 가능한 정보입니다. 보도자료, 공개 통계, 일반 공지사항 등이 해당합니다. O 등급 정보는 외부 시스템·서비스와 자유롭게 연계할 수 있으며, 최소한의 통제만 적용됩니다.</p>
<p>외부 생성형 AI 활용도 별도 제약 없이 가능합니다. 다만 실무에서는 "이 정보가 정말 O 등급인가"를 신중히 판단해야 합니다. 보도자료 초안 단계에서는 S 등급일 수 있고, 공식 발표 후에야 O 등급이 됩니다. 등급은 정보의 시점·상태에 따라 변할 수 있습니다.</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>실무 팁 — 등급 분류는 절대적이지 않습니다</strong> 같은 종류의 정보라도 맥락에 따라 등급이 달라질 수 있습니다. 예를 들어 인사 정보 중 부서장 명단은 O 등급일 수 있지만, 인사 평가 결과는 S 등급입니다. 각 기관은 자체 정보자산 목록을 작성하고 등급을 분류하는 작업을 거쳐야 합니다.</div>
</div>

<h2>4. 「위치-주체-객체」 모델링 — N²SF의 사고 방식</h2>
<p>정보를 등급으로 분류했다면, 다음 단계는 <strong>"이 정보를 어떻게 사용할 것인가"</strong>를 분석하는 것입니다. N²SF는 이를 위해 「위치-주체-객체」라는 분석 모델을 제시합니다.</p>
<p>모든 정보서비스는 세 가지 축으로 분해할 수 있습니다.</p>
<ul>
  <li><strong>위치(Domain):</strong> 정보가 처리·저장되는 물리적·논리적 영역. "어디서?"</li>
  <li><strong>주체(Subject):</strong> 정보에 접근하거나 활용하는 사용자·장치. "누가?"</li>
  <li><strong>객체(Object):</strong> 처리되거나 조회되는 정보 자원·서비스. "무엇을?"</li>
</ul>
<p>이 세 축 각각에 C/S/O 등급을 부여하면, 해당 정보서비스의 보안 요구사항이 도출됩니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg">
    <title>「위치-주체-객체」 모델링 — N²SF의 보안 분석 사고 방식</title>
    <desc>N²SF가 정보서비스를 분석할 때 사용하는 위치, 주체, 객체 세 축의 의미와 평가 예시</desc>
    <defs>
      <marker id="dsoArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">「위치-주체-객체」 모델링</text>

    <!-- Top 3 axes (primary) -->
    <rect x="40" y="56" width="180" height="120" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="130" y="84" font-family="Inter, sans-serif" font-size="15" font-weight="500" fill="#3b2fbf" text-anchor="middle">위치 (Domain)</text>
    <line x1="60" y1="100" x2="200" y2="100" stroke="#5b4fe9" stroke-width="0.5" opacity="0.4"/>
    <text x="130" y="124" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">정보가 처리·저장되는</text>
    <text x="130" y="142" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">물리적·논리적 영역</text>
    <text x="130" y="164" font-family="Inter, sans-serif" font-size="12" fill="#3b2fbf" text-anchor="middle" font-weight="500">"어디서?"</text>

    <rect x="250" y="56" width="180" height="120" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="340" y="84" font-family="Inter, sans-serif" font-size="15" font-weight="500" fill="#3b2fbf" text-anchor="middle">주체 (Subject)</text>
    <line x1="270" y1="100" x2="410" y2="100" stroke="#5b4fe9" stroke-width="0.5" opacity="0.4"/>
    <text x="340" y="124" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">정보에 접근하거나</text>
    <text x="340" y="142" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">활용하는 사용자·장치</text>
    <text x="340" y="164" font-family="Inter, sans-serif" font-size="12" fill="#3b2fbf" text-anchor="middle" font-weight="500">"누가?"</text>

    <rect x="460" y="56" width="180" height="120" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="550" y="84" font-family="Inter, sans-serif" font-size="15" font-weight="500" fill="#3b2fbf" text-anchor="middle">객체 (Object)</text>
    <line x1="480" y1="100" x2="620" y2="100" stroke="#5b4fe9" stroke-width="0.5" opacity="0.4"/>
    <text x="550" y="124" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">처리·조회되는</text>
    <text x="550" y="142" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">정보 자원·서비스</text>
    <text x="550" y="164" font-family="Inter, sans-serif" font-size="12" fill="#3b2fbf" text-anchor="middle" font-weight="500">"무엇을?"</text>

    <!-- Divider -->
    <line x1="40" y1="200" x2="640" y2="200" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="40" y="226" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#0f1130">평가 예시 — 공무원이 ChatGPT로 보도자료 초안을 작성하는 경우</text>

    <!-- Box 1: S (amber) -->
    <rect x="40" y="244" width="180" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="60" y="266" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">기관 전산망</text>
    <text x="60" y="284" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">내부 업무 환경</text>
    <rect x="170" y="296" width="40" height="22" rx="4" fill="#f59e0b" stroke="#f59e0b"/>
    <text x="190" y="311" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#fff" text-anchor="middle">S 등급</text>

    <!-- Box 2: S (amber) -->
    <rect x="250" y="244" width="180" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="270" y="266" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">업무 단말</text>
    <text x="270" y="284" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">공무원 PC</text>
    <rect x="380" y="296" width="40" height="22" rx="4" fill="#f59e0b" stroke="#f59e0b"/>
    <text x="400" y="311" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#fff" text-anchor="middle">S 등급</text>

    <!-- Box 3: O (teal) -->
    <rect x="460" y="244" width="180" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="480" y="266" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">외부 상용 AI</text>
    <text x="480" y="284" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4">ChatGPT 등</text>
    <rect x="590" y="296" width="40" height="22" rx="4" fill="#0ea5a4" stroke="#0ea5a4"/>
    <text x="610" y="311" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#fff" text-anchor="middle">O 등급</text>

    <!-- Arrows -->
    <line x1="220" y1="284" x2="248" y2="284" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#dsoArrow)"/>
    <line x1="430" y1="284" x2="458" y2="284" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#dsoArrow)"/>

    <line x1="40" y1="354" x2="640" y2="354" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="40" y="382" font-family="Inter, sans-serif" font-size="13" fill="#3a3d5e">결론: S→O 정보 이동이 발생하므로, 보안원칙에 따라 S등급 정보의</text>
    <text x="40" y="404" font-family="Inter, sans-serif" font-size="13" fill="#3a3d5e">외부 AI 전송을 차단하는 보안 통제가 필요합니다.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 2. 「위치-주체-객체」 모델링과 평가 예시</figcaption>
</figure>

<p>위 도식에서 볼 수 있듯이, 공무원이 자신의 업무 단말에서 ChatGPT로 보도자료 초안을 작성하려는 시나리오를 분석하면 다음과 같이 평가됩니다.</p>
<ul>
  <li><strong>위치:</strong> 기관 전산망 → S 등급 영역</li>
  <li><strong>주체:</strong> 업무 단말 → S 등급</li>
  <li><strong>객체:</strong> 외부 상용 AI(ChatGPT) → O 등급</li>
</ul>
<p>이 모델링이 보여주는 것은 단순히 "외부 AI를 쓸 수 있느냐 없느냐"가 아니라, <strong>"어떤 등급의 정보가 어떤 등급의 시스템으로 이동하는가"</strong>입니다. S 등급 영역의 정보가 O 등급 시스템으로 이동하는 시나리오이므로, 이 이동에 대한 보안 통제가 필요하다는 결론이 자연스럽게 도출됩니다.</p>
<p>바로 이 분석 프레임워크가 N²SF의 가장 중요한 사고 도구입니다. 새로운 시스템이나 서비스를 도입할 때, 「위치-주체-객체」를 그려보고 등급을 부여하면, 어떤 보안 통제가 필요한지 체계적으로 도출할 수 있습니다.</p>

<h2>5. 보안원칙 — 정보 생산·저장과 정보 이동</h2>
<p>「위치-주체-객체」 모델링이 분석 도구라면, 보안원칙은 그 분석 결과에 적용되는 판단 기준입니다. N²SF는 두 가지 핵심 보안원칙을 제시합니다.</p>

<h3>5.1 「정보 생산·저장」 보안원칙</h3>
<p>이 원칙은 <strong>"특정 등급의 정보는 어느 등급의 시스템에서 생산·저장될 수 있는가"</strong>를 다룹니다. 핵심 규칙은 단순합니다.</p>

<blockquote>특정 등급의 정보는 <strong>같거나 더 높은 등급</strong>의 시스템에서만 생산·저장될 수 있다.</blockquote>

<p>예를 들어 S 등급 정보는 S 등급 시스템 또는 C 등급 시스템에서 생산·저장할 수 있지만, O 등급 시스템에서는 생산·저장할 수 없습니다. O 등급 시스템에서 S 등급 정보를 만든다면 이는 원칙 위반입니다.</p>
<p>이 원칙의 실무적 의미는 명확합니다. 외부 클라우드(O 등급)에서 내부 행정문서(S 등급)를 새로 작성하거나 저장해서는 안 됩니다. 또 외부 생성형 AI 서비스(O 등급)가 S 등급 업무문서를 출력하는 것도 원칙 위반이 됩니다.</p>

<h3>5.2 「정보 이동」 보안원칙</h3>
<p>두 번째 원칙은 <strong>"정보가 등급이 다른 시스템 간에 이동할 때 어떤 통제가 필요한가"</strong>를 다룹니다.</p>

<blockquote>높은 등급에서 낮은 등급으로의 정보 이동은 <strong>적절한 보안 통제를 거쳐야</strong> 한다. 반대 방향(낮은 등급에서 높은 등급)은 일반적으로 허용된다.</blockquote>

<p>예를 들어 S 등급 정보를 O 등급 시스템으로 이동하려면, 그 과정에서 정보 보호 조치(예: 민감정보 식별·차단, 비식별화, 콘텐츠 필터링 등)가 적용되어야 합니다. 단순히 정보를 그대로 보내는 것은 원칙 위반입니다.</p>
<p>반대로 O 등급 정보를 S 등급 시스템으로 가져오는 것은 자유롭게 허용됩니다. 외부의 공개 정보를 내부에서 활용하는 것은 보안상 위험이 적기 때문입니다(악성코드 검사 등 일반적 통제는 별도로 필요).</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>두 원칙이 함께 작동하는 방식</strong> 「위치-주체-객체」로 시나리오를 모델링한 뒤, 두 보안원칙에 비추어 어떤 부분이 원칙에 부합하고 어떤 부분에 추가 통제가 필요한지 판단합니다. 이것이 N²SF 보안 설계의 기본 흐름입니다.</div>
</div>

<h2>6. 적용 단계 — 우리 기관은 무엇부터 해야 하나</h2>
<p>N²SF는 추상적 정책 프레임워크지만, 실무 적용 시에는 구체적인 단계가 있습니다. 「N²SF 보안 가이드라인」은 정보서비스 도입·운영 과정을 다음 5단계로 정리합니다.</p>
<ol>
  <li><strong>준비(Prepare):</strong> 정보서비스 구성요소 분석, 사용 시나리오 정의</li>
  <li><strong>위협 식별(Identify):</strong> 「위치-주체-객체」 모델링, C/S/O 평가, 보안원칙 적용, 보안위협 식별</li>
  <li><strong>보안대책 수립(Select):</strong> 보안 요구사항 도출, 보안통제 항목 선택</li>
  <li><strong>구현(Implement):</strong> 선택된 보안통제 적용 및 시스템 구축</li>
  <li><strong>운영(Operate):</strong> 지속적 모니터링, 감사, 통제 유효성 검증</li>
</ol>
<p>각 단계에서 산출물이 만들어지며, 이 산출물들이 모여 기관의 보안 설계 근거가 됩니다. 특히 1~3단계는 <strong>도입 전 사전 검토</strong> 성격이 강하므로, 새로운 시스템을 도입하기 전에 반드시 거쳐야 할 절차입니다.</p>

<h3>실무자가 가장 먼저 해야 할 일</h3>
<p>이 모든 단계를 한꺼번에 적용하기는 어렵습니다. 실무적으로는 다음 세 가지부터 시작하는 것을 권장합니다.</p>
<ul>
  <li><strong>정보자산 등급 분류 작업:</strong> 우리 기관이 다루는 주요 정보들을 식별하고 C/S/O 등급을 부여합니다. 모든 정보를 분류할 필요는 없으며, 주요 정보자산부터 시작하면 됩니다.</li>
  <li><strong>주요 정보서비스 모델링:</strong> 새로 도입하거나 변경하려는 시스템에 대해 「위치-주체-객체」 모델링을 적용해봅니다. 이 작업만으로도 보안 요구사항이 상당 부분 드러납니다.</li>
  <li><strong>모델 해설서 활용:</strong> 국가정보원·NSR이 발간한 「정보서비스 모델 해설서」 시리즈는 대표적 시나리오에 대한 분석 예시를 제공합니다. 우리 기관 상황과 유사한 모델을 찾아 참고하는 것이 효율적입니다.</li>
</ul>

<h2>7. N²SF가 열어준 가능성과 새로운 질문들</h2>
<p>N²SF의 도입은 공공기관에게 <strong>새로운 가능성</strong>을 열어주었습니다. 그동안 망분리 원칙 때문에 불가능했던 시도들이 이제 가능해졌습니다.</p>
<ul>
  <li><strong>외부 생성형 AI의 합법적 활용:</strong> O 등급 정보에 대해 외부 AI를 자유롭게 활용할 수 있으며, S 등급 정보도 적절한 보안 통제를 적용하면 외부 AI와 연계할 수 있습니다.</li>
  <li><strong>클라우드 서비스 도입 확대:</strong> 등급별로 적합한 클라우드 환경을 선택할 수 있게 되었습니다.</li>
  <li><strong>외부 API·데이터 연계:</strong> 행정 효율화를 위한 외부 시스템 연동이 등급 분석을 거쳐 가능해졌습니다.</li>
</ul>
<p>그러나 이런 가능성은 <strong>새로운 질문들</strong>을 함께 가져옵니다.</p>
<ul>
  <li>우리 기관의 정보를 어떻게 C/S/O로 분류할 것인가?</li>
  <li>S 등급 정보를 외부 AI와 연계하려면 어떤 보안 통제가 필요한가?</li>
  <li>그 통제의 충족 여부는 누가, 어떻게 검증하는가?</li>
  <li>특정 정보서비스에 어떤 모델 해설서를 적용해야 하는가?</li>
  <li>「위치-주체-객체」 모델링은 우리 기관이 직접 해야 하는가, 외부 컨설팅을 받아야 하는가?</li>
</ul>
<p>이런 질문들은 N²SF가 완성된 답안이 아니라 <strong>새로운 사고 프레임워크</strong>이기 때문에 발생합니다. 프레임워크는 길을 보여주지만, 그 길을 어떻게 걸을지는 각 기관이 결정해야 합니다. 그리고 이 결정은 단순히 보안 부서만의 일이 아니라, 정보화 정책, 업무 프로세스, 외부 솔루션 선정까지 연결되는 통합적 의사결정입니다.</p>
<p>특히 생성형 AI 도입은 N²SF 적용에서 가장 활발히 논의되는 영역입니다. 국가정보원과 NSR은 이 영역을 위해 별도의 「업무환경에서 생성형 AI 활용 모델 해설서(모델 2)」를 발간했으며, 21개의 보안위협과 50여 개의 보안통제 항목을 구체적으로 제시하고 있습니다. 다음 글에서는 이 모델 2를 심층 해설하겠습니다.</p>

<div class="takeaways">
  <div class="takeaways__label">이 글의 핵심 요약</div>
  <ul>
    <li>N²SF는 망분리에서 다중계층보안(MLS)으로의 패러다임 전환입니다</li>
    <li>정보를 C(기밀)·S(민감)·O(공개)의 세 등급으로 분류하여 차등 보호합니다</li>
    <li>「위치-주체-객체」 모델로 정보서비스를 분석합니다</li>
    <li>「정보 생산·저장」과 「정보 이동」 두 보안원칙이 판단 기준이 됩니다</li>
    <li>실무 시작점은 정보자산 등급 분류 + 주요 정보서비스 모델링입니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>N²SF는 의무 적용인가요?</h3>
<p>국가정보원이 발간한 「국가 망 보안체계 보안 가이드라인」은 공공기관의 정보서비스 구축·운영 시 적용 기준을 제시합니다. 모든 기관이 즉시 전면 적용해야 하는 강행 규정의 형식은 아니지만, 신규 정보화 사업의 보안성 검토에서 사실상의 표준으로 작동하고 있습니다. 기관별 적용 시기와 범위는 정보보안 책임관과 협의해서 결정하게 됩니다.</p>

<h3>망분리는 완전히 폐지되나요?</h3>
<p>아닙니다. C 등급 정보를 다루는 시스템에는 망분리 수준의 강한 통제가 여전히 적용됩니다. N²SF가 폐지한 것은 "모든 정보에 일률적으로 망분리를 적용"하는 방식이며, 정보 등급에 따라 적절한 수준의 통제를 차등 적용하는 방식으로 진화한 것입니다. 즉, 강한 보안이 필요한 곳에는 여전히 강한 보안이, 그렇지 않은 곳에는 적정 수준의 보안이 적용됩니다.</p>

<h3>C/S/O 분류는 누가 정하나요?</h3>
<p>각 기관이 자체적으로 정보자산을 식별하고 등급을 분류합니다. 다만 일부 영역은 외부 기준이 적용됩니다. 예를 들어 C 등급에 해당하는 비밀 정보는 「보안업무규정」에 따라 분류되며, 개인정보는 「개인정보 보호법」 기준이 영향을 미칩니다. 일반적인 행정 정보의 등급 분류는 기관의 정보보안 책임관이 주관하여 결정합니다.</p>

<h3>모델 해설서는 무엇인가요?</h3>
<p>국가정보원과 국가보안기술연구소(NSR)가 발간하는 「정보서비스 모델 해설서」 시리즈는 대표적인 정보서비스 시나리오에 N²SF를 적용한 분석 예시입니다. 모델 1은 일반 정보서비스, 모델 2는 업무환경에서 생성형 AI 활용을 다루고 있으며, 향후 더 많은 모델이 추가될 예정입니다. 각 기관은 자신의 시나리오와 유사한 모델을 참고하여 적용 절차를 설계할 수 있습니다.</p>

<h3>N²SF 적용에 비용이 많이 드나요?</h3>
<p>적용 자체에는 직접 비용이 들지 않지만, 정보자산 분류, 시스템 모델링, 보안 통제 도입 등의 작업에는 시간과 자원이 필요합니다. 기존 망분리 시스템을 유지하는 것보다 N²SF 기반으로 재설계하는 것이 단기적으로는 더 큰 작업이 될 수 있습니다. 다만 장기적으로는 클라우드·AI 활용을 통한 효율성 향상이 가능해지므로, 적용 비용을 상쇄하고 남는 가치가 있습니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024</li>
  <li>국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>「전자정부법」, 「국가정보보안기본지침」</li>
  <li>「보안업무규정」, 「개인정보 보호법」</li>
  <li>디지털플랫폼정부위원회, 「디지털플랫폼정부 추진계획」</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"N²SF는 의무 적용인가요?","acceptedAnswer":{"@type":"Answer","text":"국가정보원이 발간한 「국가 망 보안체계 보안 가이드라인」은 공공기관의 정보서비스 구축·운영 시 적용 기준을 제시합니다. 모든 기관이 즉시 전면 적용해야 하는 강행 규정의 형식은 아니지만, 신규 정보화 사업의 보안성 검토에서 사실상의 표준으로 작동하고 있습니다."}}, {"@type":"Question","name":"망분리는 완전히 폐지되나요?","acceptedAnswer":{"@type":"Answer","text":"아닙니다. C 등급 정보를 다루는 시스템에는 망분리 수준의 강한 통제가 여전히 적용됩니다. N²SF가 폐지한 것은 모든 정보에 일률적으로 망분리를 적용하는 방식입니다."}}, {"@type":"Question","name":"C/S/O 분류는 누가 정하나요?","acceptedAnswer":{"@type":"Answer","text":"각 기관이 자체적으로 정보자산을 식별하고 등급을 분류합니다. 다만 일부 영역은 외부 기준이 적용됩니다."}}, {"@type":"Question","name":"모델 해설서는 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"국가정보원과 국가보안기술연구소(NSR)가 발간하는 「정보서비스 모델 해설서」 시리즈는 대표적인 정보서비스 시나리오에 N²SF를 적용한 분석 예시입니다."}}, {"@type":"Question","name":"N²SF 적용에 비용이 많이 드나요?","acceptedAnswer":{"@type":"Answer","text":"적용 자체에는 직접 비용이 들지 않지만, 정보자산 분류, 시스템 모델링, 보안 통제 도입 등의 작업에는 시간과 자원이 필요합니다."}} ] }`

export default function WhatIsN2sf() {
  // ── Page-specific values (replaces LearnArticle Props) ──
  const backLabel = "← Learn"
  const backHref = "/resources/learn"
  const title = "N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리"
  const lead = "국가 망 보안체계(N²SF)는 망분리에서 다중계층보안(MLS)으로의 전환입니다. C/S/O 등급 체계, 「위치-주체-객체」 모델링, 보안원칙을 처음부터 끝까지 정리합니다."
  const category = "정책 분석"
  const readTime = "20분 읽기"
  const dateUpdated = "2026년 5월 업데이트"
  const tldrLabel = "TL;DR"
  const tldrBody = "N²SF는 공공부문 보안의 패러다임 전환입니다. 모든 외부 자원을 일률 차단하던 망분리에서, 정보를 C(기밀)·S(민감)·O(공개) 세 등급으로 분류하고 등급별로 다른 통제를 적용하는 다중계층보안으로 전환했습니다. 이 전환은 외부 생성형 AI 활용의 길을 열되, 「위치-주체-객체」 모델링·정보 이동 보안원칙·21개 보안위협 식별·50여 개 보안통제 항목이라는 구체적인 프레임워크 안에서만 가능합니다."
  const bodyHtml = BODY_HTML
  const canonicalUrl = "https://llmcapsule.ai/resources/learn/what-is-n2sf"
  const datePublished = "2026-05-01"
  const dateModified = "2026-05-01"
  const inLanguage = "ko-KR"
  const breadcrumbLabel = "N²SF란 무엇인가"
  const faqJsonLd = FAQ_JSON_LD
  const relatedSectionLabel = "함께 읽으면 좋은 글"
  const related1Title = "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까"
  const related1Href = "/resources/learn/n2sf-model-2-explained"
  const related2Title = "공공기관 생성형 AI 도입의 세 가지 길"
  const related2Href = "/resources/learn/public-sector-genai-three-approaches"
  const related3Title = "기업 AI를 위한 차등 프라이버시"
  const related3Href = "/resources/learn/differential-privacy-for-enterprise-llm"
  const related4Title = ""
  const related4Href = ""

  // ── BEGIN inlined LearnArticle body ──
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
  // ── END inlined LearnArticle body ──
}
