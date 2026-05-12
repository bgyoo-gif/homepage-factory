// AUTO-GENERATED. Do not edit by hand.
// Source: llm-capsule/output/html/n2sf-model-2-explained-bodyhtml.html
// Generator: scripts/build-learn-tsx.py
// To regenerate: python3 scripts/build-learn-tsx.py

import LearnArticle from "../shared/LearnArticle"

const BODY_HTML = `<!-- bodyHtml — LearnArticle.tsx의 bodyHtml Props에 그대로 붙여넣기 -->
<!-- 일반 HTML 태그 + .callout + .takeaways만 사용 (기존 learn 아티클과 동일 패턴) -->

<h2>1. 모델 2가 왜 중요한가</h2>
<p>모델 2의 의미를 한 줄로 정리하면 다음과 같습니다.</p>

<blockquote>공공기관이 외부 상용 생성형 AI를 업무에 활용할 수 있는 <strong>최초의 공식 길잡이</strong>.</blockquote>

<p>이 문장이 갖는 무게를 이해하려면 그 이전 상태를 떠올려야 합니다. 모델 2 발간 이전에는 공공기관이 ChatGPT나 Claude 같은 외부 AI를 업무에 쓸 수 있는 근거가 사실상 없었습니다. 망분리 원칙은 외부 인터넷 서비스 사용을 금지했고, N²SF는 2024년에 발표되었지만 "외부 AI는 어떻게 다뤄야 한다"는 구체적 가이드는 없었습니다. 직원들은 사용하고 싶어했고, 보안 부서는 막아야 했고, 정보화담당관은 답을 줄 근거가 없었습니다.</p>
<p>모델 2는 이 공백을 메웠습니다. 외부 AI 활용이라는 시나리오를 N²SF 체계 안에서 어떻게 분석하고, 어떤 보안 통제를 적용해야 하는지를 구체적으로 제시합니다. 모든 답을 주지는 않지만, <strong>"이렇게 하면 도입할 수 있다"는 길</strong>을 처음으로 보여준 문서입니다.</p>
<p>그리고 동시에, 모델 2는 그 길의 <strong>한계와 폭</strong>도 함께 정의합니다. 모든 정보를 외부 AI에 보낼 수 있는 것이 아니며, 모든 시나리오에 적용되는 것도 아닙니다. 이 글에서는 모델 2가 그어놓은 선이 어디인지를 명확히 보여드리겠습니다.</p>

<h2>2. 모델 2가 다루는 시나리오 — 정확히 무엇인가</h2>
<p>모델 2 문서의 부제는 "업무환경에서 생성형 AI 활용"입니다. 이 짧은 부제가 다루는 범위를 정확히 풀어보면 다음과 같습니다.</p>
<ul>
  <li><strong>업무환경:</strong> 공무원·기관 직원이 일상 업무를 수행하는 기관 내부 환경 (사무실 PC, 온북 등)</li>
  <li><strong>생성형 AI:</strong> ChatGPT, Claude, Gemini 등 인터넷에 위치한 상용 AI 서비스</li>
  <li><strong>활용:</strong> 문서 작성 보조, 요약, 번역, 정보 검색 등 일반 업무 효율화</li>
</ul>
<p>더 명확히 말하면, 모델 2가 다루는 시나리오는 다음 한 문장입니다.</p>

<blockquote><strong>"기관 전산망(S 등급) 내부에 있는 공무원이, 자신의 업무 단말(S 등급)을 통해, 인터넷에 있는 상용 생성형 AI 서비스(O 등급)를 활용하는 시나리오."</strong></blockquote>

<p>이 시나리오는 모델 2 문서의 [그림 2-1]에서 도식화되어 있으며, N²SF 체계의 「위치-주체-객체」 모델로 정확히 매핑됩니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg">
    <title>N²SF 모델 2 시나리오 개요</title>
    <desc>모델 2가 다루는 업무환경에서 생성형 AI 활용 시나리오의 구성요소와 등급 평가</desc>
    <defs>
      <marker id="m2arrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">모델 2 시나리오 구성</text>

    <!-- O zone (teal) -->
    <rect x="40" y="56" width="600" height="120" rx="12" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5" stroke-dasharray="4 4" fill-opacity="0.5"/>
    <text x="56" y="78" font-family="Inter, sans-serif" font-size="12" fill="#0b7f7e">인터넷 영역 (O 등급)</text>

    <rect x="270" y="98" width="140" height="56" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="340" y="122" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0b7f7e" text-anchor="middle">상용 생성형 AI</text>
    <text x="340" y="140" font-family="Inter, sans-serif" font-size="12" fill="#0ea5a4" text-anchor="middle">ChatGPT / Claude 등</text>

    <!-- S zone (amber) -->
    <rect x="40" y="196" width="600" height="200" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5" stroke-dasharray="4 4" fill-opacity="0.5"/>
    <text x="56" y="218" font-family="Inter, sans-serif" font-size="12" fill="#b27408">기관 전산망 (S 등급)</text>

    <rect x="60" y="240" width="160" height="56" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="140" y="264" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#b27408" text-anchor="middle">업무 시스템</text>
    <text x="140" y="282" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b" text-anchor="middle">S 등급</text>

    <rect x="260" y="240" width="160" height="56" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="340" y="264" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#b27408" text-anchor="middle">이용자 단말</text>
    <text x="340" y="282" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b" text-anchor="middle">업무 단말 · 온북</text>

    <!-- AI 연계체계 (primary highlight) -->
    <rect x="460" y="240" width="160" height="56" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
    <text x="540" y="264" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#3b2fbf" text-anchor="middle">AI 연계체계</text>
    <text x="540" y="282" font-family="Inter, sans-serif" font-size="12" fill="#5b4fe9" text-anchor="middle">인증 · 콘텐츠 통제</text>

    <!-- Arrows -->
    <line x1="220" y1="268" x2="258" y2="268" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#m2arrowA)"/>
    <line x1="420" y1="268" x2="458" y2="268" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#m2arrowA)"/>

    <line x1="540" y1="240" x2="540" y2="160" stroke="#5b4fe9" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#m2arrowA)"/>
    <text x="552" y="200" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">O 정보만</text>
    <text x="552" y="216" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">전송 허용</text>

    <!-- Evaluation strip -->
    <rect x="60" y="330" width="560" height="46" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5" fill-opacity="0.7"/>
    <text x="80" y="352" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b27408">「위치-주체-객체」 평가</text>
    <text x="80" y="370" font-family="Inter, sans-serif" font-size="12" fill="#f59e0b">위치: 기관 전산망 (S)  ·  주체: 이용자 단말 (S)  ·  객체: 상용 AI (O)</text>

    <line x1="40" y1="406" x2="640" y2="406" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="40" y="434" font-family="Inter, sans-serif" font-size="13" fill="#3a3d5e">핵심 제약: S→O 정보 이동이 발생하므로 활용 가능 정보는 O 등급으로 한정</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 1. 모델 2 시나리오 구성과 등급 평가</figcaption>
</figure>

<p>도식에서 보이는 것처럼, 시나리오는 세 개의 핵심 구성요소를 가집니다.</p>
<ul>
  <li><strong>업무 시스템:</strong> 기관이 운영하는 내부 업무 시스템 (S 등급)</li>
  <li><strong>이용자 단말:</strong> 공무원이 사용하는 업무 단말 또는 온북 (S 등급)</li>
  <li><strong>상용 생성형 AI:</strong> 인터넷에 위치한 외부 AI 서비스 (O 등급)</li>
</ul>
<p>그리고 이 셋을 연결하는 보호 장치가 <strong>AI 연계체계</strong>입니다. 이 부분이 모델 2의 핵심이며, 별도 섹션에서 자세히 다루겠습니다.</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>모델 2가 다루지 않는 시나리오</strong> 기관 내부에 자체 구축한 sLLM(S 등급 객체) 시나리오, 폐쇄망 내 C 등급 AI 활용 시나리오, 외부 시스템에서 내부 시스템으로의 역방향 데이터 흐름 시나리오 등은 모델 2의 범위 밖입니다. 다른 모델 해설서 또는 별도 검토가 필요합니다.</div>
</div>

<h2>3. 두 보안원칙의 적용 — 무엇이 위배되고 무엇이 허용되는가</h2>
<p>모델 2의 분석은 N²SF의 두 가지 보안원칙을 시나리오에 적용하는 작업에서 시작됩니다. 두 원칙은 모델 2 문서의 p.13에 명시되어 있으며, 각각 무엇을 의미하는지 정확히 짚어보겠습니다.</p>

<h3>3.1 「정보 생산·저장」 보안원칙 적용</h3>
<p>이 원칙은 "어느 등급의 시스템에서 어느 등급의 정보를 만들거나 저장할 수 있는가"를 다룹니다. 모델 2 시나리오에 적용한 결과는 다음과 같습니다.</p>
<ul>
  <li><strong>이용자 단말(S 등급)에서 S·O 등급 정보 생산·저장:</strong> 원칙 위배 없음. 같거나 더 낮은 등급의 정보는 상위 등급 시스템에서 자유롭게 다룰 수 있습니다.</li>
  <li><strong>O 등급 상용 AI에서 S 등급 이상 정보 생산:</strong> <strong>원칙 위배</strong>. 낮은 등급(O) 시스템이 더 높은 등급(S)의 정보를 만들어내는 것은 허용되지 않습니다.</li>
</ul>
<p>두 번째 항목의 실무적 의미가 중요합니다. 예를 들어 공무원이 ChatGPT에게 "이번 분기 부서 인사 평가를 정리해줘"라고 요청하면, ChatGPT가 출력하는 결과물은 S 등급 정보(인사 평가)에 해당할 수 있습니다. 이 시점에서 <strong>O 등급 시스템(ChatGPT)이 S 등급 정보를 생산</strong>한 셈이 되며, 이는 보안원칙에 위배됩니다.</p>
<p>따라서 모델 2는 "상용 AI는 O 등급 정보만 다루도록 통제한다"는 결론에 도달합니다. 외부 AI에 입력할 수 있는 것도, 외부 AI가 출력할 수 있는 것도 모두 O 등급 범위로 한정됩니다.</p>

<h3>3.2 「정보 이동」 보안원칙 적용</h3>
<p>두 번째 원칙은 "정보가 등급이 다른 시스템 간에 이동할 때 어떤 조건이 필요한가"를 다룹니다. 모델 2 시나리오에서 발생하는 이동은 다음과 같습니다.</p>
<ul>
  <li><strong>이용자 단말(S) → 상용 AI(O) 방향의 O 등급 정보 전송:</strong> 원칙 위배 없음. O 등급 정보를 O 등급 시스템으로 보내는 것은 자유롭게 가능합니다.</li>
  <li><strong>이용자 단말(S) → 상용 AI(O) 방향의 S 등급 정보 전송:</strong> <strong>원칙 위배</strong>. 높은 등급(S) 정보를 낮은 등급(O) 시스템으로 그대로 보내는 것은 정보 노출 위험을 의미합니다.</li>
  <li><strong>상용 AI(O) → 이용자 단말(S) 방향의 O 등급 정보 수신:</strong> 원칙 위배 없음. 낮은 등급 정보를 높은 등급 시스템으로 가져오는 것은 일반적으로 허용됩니다.</li>
</ul>
<p>두 번째 항목, 즉 S 등급 정보의 외부 AI 전송이 모델 2 시나리오의 가장 큰 제약입니다. 이 제약을 어떻게 통제할 것인가가 모델 2 전체의 핵심 과제이며, 21개 보안위협의 상당수가 이 한 줄에서 파생됩니다.</p>

<div class="takeaways">
  <div class="takeaways__label">두 원칙이 만들어내는 결론</div>
  <ul>
    <li>모델 2는 외부 상용 AI를 활용할 수 있는 정보를 <strong>O 등급으로 명시적으로 한정</strong>합니다. 이것이 모델 2의 가장 중요한 제약이며, 동시에 모델 2가 다루는 영역의 경계선입니다.</li>
  </ul>
</div>

<h2>4. 21개 보안위협 — 무엇을 막아야 하는가</h2>
<p>모델 2는 시나리오에서 발생할 수 있는 보안위협을 21개로 식별합니다. TH-M2-1부터 TH-M2-21까지 번호가 매겨져 있으며, 세 개의 영역으로 묶입니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 580" xmlns="http://www.w3.org/2000/svg">
    <title>모델 2의 21개 보안위협 분류</title>
    <desc>이용자 단말, AI 연계체계, 생성형 AI 서비스 세 영역별 보안위협 분류</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">21개 보안위협 — 영역별 분류</text>

    <!-- Zone 1: 이용자 단말 (amber) -->
    <rect x="40" y="56" width="600" height="180" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="60" y="82" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#b27408">이용자 단말 (업무 단말 · 온북)</text>
    <rect x="540" y="64" width="80" height="22" rx="11" fill="#f59e0b"/>
    <text x="580" y="79" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff" text-anchor="middle">8개 위협</text>

    <rect x="60" y="100" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="72" y="116" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-1  단말 OS·SW 취약점 노출</text>

    <rect x="350" y="100" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="362" y="116" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-2  비인가 SW 설치·실행</text>

    <rect x="60" y="128" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="72" y="144" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-3  단말 비인가 사용</text>

    <rect x="350" y="128" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="362" y="144" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-4  비인가 네트워크 연결</text>

    <rect x="60" y="156" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="72" y="172" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-5  업무정보 비인가 유출</text>

    <rect x="350" y="156" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="362" y="172" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-6  AI 계정 정보 노출</text>

    <rect x="60" y="184" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="72" y="200" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-7  비인가 단말의 AI 접근</text>

    <rect x="350" y="184" width="280" height="22" rx="4" fill="#fff" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="362" y="200" font-family="Inter, sans-serif" font-size="11" fill="#b27408">TH-M2-8  악성코드 유입·감염</text>

    <!-- Zone 2: AI 연계체계 (primary, highlighted) -->
    <rect x="40" y="252" width="600" height="222" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="60" y="278" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#3b2fbf">AI 연계체계</text>
    <rect x="540" y="260" width="80" height="22" rx="11" fill="#5b4fe9"/>
    <text x="580" y="275" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff" text-anchor="middle">11개 위협</text>

    <rect x="60" y="296" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="312" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-9   AI 연계체계 비인가 접근</text>

    <rect x="350" y="296" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="362" y="312" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-10  연계체계 우회 시도</text>

    <rect x="60" y="324" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="340" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-11  미승인 AI 서비스 접근</text>

    <rect x="350" y="324" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="362" y="340" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-12  O 등급 외 정보 AI 활용</text>

    <rect x="60" y="352" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="368" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-13  송수신 데이터 유출</text>

    <rect x="350" y="352" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="362" y="368" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-14  외부 비인가 접근</text>

    <rect x="60" y="380" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="396" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-15  외부 악성 콘텐츠 유입</text>

    <rect x="350" y="380" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="362" y="396" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-16  관리자 계정 비인가 접근</text>

    <rect x="60" y="408" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="424" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-17  연계체계 취약점 노출</text>

    <rect x="350" y="408" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="362" y="424" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-18  AI 서비스 접속 실패</text>

    <rect x="60" y="436" width="280" height="22" rx="4" fill="#fff" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="72" y="452" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf">TH-M2-19  연계체계 운용 장애</text>

    <!-- Zone 3: 생성형 AI 서비스 (teal) -->
    <rect x="40" y="490" width="600" height="78" rx="12" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="60" y="516" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0b7f7e">생성형 AI 서비스</text>
    <rect x="540" y="498" width="80" height="22" rx="11" fill="#0ea5a4"/>
    <text x="580" y="513" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff" text-anchor="middle">2개 위협</text>

    <rect x="60" y="534" width="280" height="22" rx="4" fill="#fff" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="72" y="550" font-family="Inter, sans-serif" font-size="11" fill="#0b7f7e">TH-M2-20  AI 서비스 계정 도용</text>

    <rect x="350" y="534" width="280" height="22" rx="4" fill="#fff" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="362" y="550" font-family="Inter, sans-serif" font-size="11" fill="#0b7f7e">TH-M2-21  AI 서비스 통한 정보 유출</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 2. 21개 보안위협 — 영역별 분류</figcaption>
</figure>

<h3>4.1 이용자 단말 영역 (8개 위협)</h3>
<p>공무원의 업무 단말에서 발생할 수 있는 위협들입니다. 단말 자체의 보안성 유지(OS·SW 취약점, 악성코드), 단말 사용 통제(비인가 사용, 비인가 SW 설치), 정보 유출 방지(업무정보 비인가 유출, AI 계정 정보 노출), 네트워크 통제(비인가 네트워크 연결, 비인가 단말의 AI 접근) 등이 포함됩니다.</p>
<p>이 영역의 위협은 대부분 일반적인 단말 보안 관리 영역에 속합니다. 다만 TH-M2-6(AI 계정 정보 노출)과 TH-M2-7(비인가 단말의 AI 접근)은 AI 활용 시나리오 특유의 위협으로, 단말 인증과 AI 계정 분리 관리가 필요합니다.</p>

<h3>4.2 AI 연계체계 영역 (11개 위협)</h3>
<p>21개 중 절반 이상이 이 영역에 집중되어 있습니다. 이는 AI 연계체계가 모델 2 시나리오의 <strong>핵심 통제 지점</strong>임을 보여줍니다. 다음과 같이 세부 분류됩니다.</p>
<ul>
  <li><strong>인증·접근 통제:</strong> TH-M2-9 (비인가 접근), TH-M2-10 (우회 시도), TH-M2-11 (미승인 AI 접근)</li>
  <li><strong>데이터 보호:</strong> TH-M2-12 (O 등급 외 정보 AI 활용), TH-M2-13 (송수신 데이터 유출)</li>
  <li><strong>외부 위협 차단:</strong> TH-M2-14 (외부 비인가 접근), TH-M2-15 (외부 악성 콘텐츠 유입)</li>
  <li><strong>연계체계 자체 보안:</strong> TH-M2-16 (관리자 계정 비인가 접근), TH-M2-17 (취약점 노출)</li>
  <li><strong>가용성·운용:</strong> TH-M2-18 (AI 서비스 접속 실패), TH-M2-19 (연계체계 운용 장애)</li>
</ul>
<p>특히 <strong>TH-M2-12 "공개(O) 등급 외 업무정보의 생성형 AI 서비스 활용"</strong>이 가장 중요한 위협입니다. 앞서 다룬 보안원칙 위배의 직접적 표현이며, 이를 막기 위한 통제가 모델 2의 핵심 설계 요건이 됩니다.</p>

<h3>4.3 생성형 AI 서비스 영역 (2개 위협)</h3>
<p>외부 상용 AI 서비스 자체와 관련된 위협으로, 계정 도용(TH-M2-20)과 AI 서비스를 통한 정보 유출(TH-M2-21)이 식별되어 있습니다. 이 영역은 외부 서비스이므로 기관이 직접 통제하기 어렵고, 계정 관리·데이터 사용 정책 수립으로 대응합니다.</p>

<h2>5. AI 연계체계 — 모델 2의 핵심 구조</h2>
<p>21개 위협 중 11개가 집중된 영역이자, 모델 2 전체 설계의 중심이 <strong>AI 연계체계</strong>입니다. 모델 2 문서 [그림 2-8]에 도식화되어 있는 이 구조는 다음 네 가지 컴포넌트로 구성됩니다.</p>
<ul>
  <li><strong>인증 서버:</strong> 이용자·단말 인증, 비인가 접근 차단</li>
  <li><strong>콘텐츠 통제:</strong> 비인가 자료유형 통제, 프롬프트·콘텐츠 필터링, 보안등급 식별</li>
  <li><strong>악성코드 검사:</strong> 외부로부터의 악성 콘텐츠 유입 차단</li>
  <li><strong>보안 경계:</strong> 방화벽, Proxy 강제화, 일방향 정보흐름 통제</li>
</ul>
<p>이 네 컴포넌트가 함께 작동하여, 이용자 단말과 외부 AI 사이의 정보 흐름을 통제합니다. 단말이 직접 외부 AI에 접근하는 것이 아니라, 반드시 AI 연계체계를 경유하도록 강제하는 것이 핵심 설계입니다.</p>
<p>이 구조에서 가장 까다로운 통제가 <strong>"O 등급 외 정보의 외부 AI 전송 차단"</strong>(TH-M2-12 대응)입니다. 이는 단순한 도메인 차단으로는 해결되지 않습니다. 단말에서 외부 AI로 전송되는 텍스트 안에 S 등급 정보가 포함되어 있는지를 실시간으로 식별하고 차단해야 하기 때문입니다.</p>
<p>이 통제를 어떻게 구현하느냐가 모델 2 시나리오의 실제 보안 수준을 결정합니다. 단순 정규식·키워드 기반 마스킹은 패턴에 없는 정보를 놓치고, 재식별 공격에 취약합니다. 더 정교한 보호 기법이 필요하다는 점이 이 지점에서 명확해지며, 이 주제는 별도의 글에서 깊게 다룹니다.</p>

<h2>6. 50+ 보안통제 항목 — 무엇을 갖춰야 하는가</h2>
<p>21개 위협에 대응하기 위해 모델 2는 50여 개의 구체적 보안통제 항목을 제시합니다. 각 통제는 N2SF-XX-N 형식의 코드로 식별되며, 카테고리별로 정리됩니다. 일일이 나열하는 것은 의미가 적으므로, 카테고리 중심으로 정리해드리겠습니다.</p>

<table>
  <thead>
    <tr>
      <th>카테고리</th>
      <th>주요 통제 내용</th>
      <th>대응 위협</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>이용자 단말 보안성 유지</td>
      <td>OS·SW 취약점 관리, 비인가 SW 차단, 악성코드 차단, 형상 관리</td>
      <td>TH-M2-1, 2, 8</td>
    </tr>
    <tr>
      <td>이용자 단말 사용 보안</td>
      <td>단말 인증, 자동 잠금, 저장장치 통제</td>
      <td>TH-M2-3</td>
    </tr>
    <tr>
      <td>이용자 단말 네트워크 보안</td>
      <td>IP 체계 분리, 비인가 무선망 차단, 블루투스 통제, 세션 관리</td>
      <td>TH-M2-4</td>
    </tr>
    <tr>
      <td>이용자 단말 데이터 보호</td>
      <td>데이터 암호화 저장, 정보 유출 방지</td>
      <td>TH-M2-5</td>
    </tr>
    <tr>
      <td>이용자 계정 정보 보호</td>
      <td>AI 계정과 업무 계정 분리, 공개 식별자 사용 금지</td>
      <td>TH-M2-6</td>
    </tr>
    <tr>
      <td>AI 활용 이용자·단말 관리</td>
      <td>사전 승인 절차, 데이터 사용 정책 수립</td>
      <td>TH-M2-7</td>
    </tr>
    <tr>
      <td>AI 서비스 이용자·단말 인증</td>
      <td>계정 관리 자동화, 다단계 인증, 의심 활동 모니터링</td>
      <td>TH-M2-9</td>
    </tr>
    <tr>
      <td>비인가 네트워크 연결 차단</td>
      <td>네트워크 격리, 화이트리스트 통신, Proxy 강제화, 우회 통신 차단</td>
      <td>TH-M2-10, 11</td>
    </tr>
    <tr>
      <td>생성형 AI 서비스 활용 시 데이터 보호</td>
      <td><strong>프롬프트·콘텐츠 필터링, 보안등급 식별, 인가되지 않은 정보 전송 차단</strong></td>
      <td>TH-M2-12, 13</td>
    </tr>
    <tr>
      <td>외부 비인가 접근·악성 콘텐츠 차단</td>
      <td>일방향 정보흐름, 임베디드 데이터 삽입 차단</td>
      <td>TH-M2-14, 15</td>
    </tr>
    <tr>
      <td>연계체계 보안성 유지</td>
      <td>관리자 권한 분리, 원격 접속 제한, 취약점 관리</td>
      <td>TH-M2-16, 17</td>
    </tr>
    <tr>
      <td>연계체계 운용 관리</td>
      <td>감사 로그, 모니터링, 장애 대응 체계</td>
      <td>TH-M2-18, 19</td>
    </tr>
    <tr>
      <td>AI 서비스 계정·데이터 관리</td>
      <td>외부 인증 수단 관리, 데이터 사용 정책</td>
      <td>TH-M2-20, 21</td>
    </tr>
  </tbody>
</table>

<p>이 표에서 강조된 행 "생성형 AI 서비스 활용 시 데이터 보호"가 모델 2 통제의 <strong>가장 까다로운 영역</strong>입니다. 다른 통제는 일반적 IT 보안 영역의 확장이지만, 이 영역은 AI 활용 시나리오 특유의 새로운 통제이며, 솔루션마다 구현 수준의 차이가 가장 크게 드러나는 부분입니다.</p>

<h2>7. 모델 2의 범위와 한계</h2>
<p>모델 2는 공공기관 AI 활용의 첫 공식 길잡이지만, 모든 시나리오를 다루지는 않습니다. 모델 2 적용을 검토할 때는 그 경계를 정확히 인식해야 합니다.</p>

<h3>7.1 모델 2가 다루지 않는 것</h3>
<ul>
  <li><strong>S 등급 정보의 외부 AI 활용:</strong> 모델 2는 활용 가능 정보를 O 등급으로 한정합니다. S 등급 정보를 외부 AI로 안전하게 활용하려는 시나리오는 모델 2의 범위 밖이며, 별도의 보호 기법(예: 차등정보보호 기반 비식별화)이 적용된 보호 레이어 아키텍처가 필요합니다.</li>
  <li><strong>기관 내부 자체 구축 AI(sLLM) 시나리오:</strong> 객체가 외부 상용 AI(O 등급)가 아니라 기관 내부 sLLM(S 등급)인 경우는 다른 모델에서 다룹니다. 향후 별도의 모델 해설서가 발간될 가능성이 있습니다.</li>
  <li><strong>C 등급 환경에서의 AI 활용:</strong> 폐쇄망·기밀 처리 환경에서의 AI 활용은 별도 검토가 필요합니다.</li>
  <li><strong>AI Agent 시나리오:</strong> 단순 질의응답을 넘어 AI가 자율적으로 도구를 호출하고 행동하는 Agent 시나리오는 모델 2에서 다루지 않습니다.</li>
</ul>

<h3>7.2 모델 2 적용 시 흔히 부딪히는 문제들</h3>
<p>모델 2를 실제 기관에 적용할 때 정보화담당관이 자주 마주치는 문제들이 있습니다.</p>
<ul>
  <li><strong>O 등급 한정의 실무적 비효율:</strong> 직원들이 활용하고 싶어하는 업무 시나리오의 상당수가 S 등급 정보를 포함합니다. 예를 들어 부서 내부 회의록 정리, 정책 검토 보고서 작성 보조, 민원 응답 초안 작성 등은 모두 S 등급 정보를 다룹니다. 이런 시나리오를 모델 2 범위 내에서 어떻게 다룰지가 큰 과제입니다.</li>
  <li><strong>AI 연계체계 구현의 복잡성:</strong> 50여 개의 통제 항목을 모두 충족하는 AI 연계체계를 자체 구축하는 것은 사실상 불가능에 가깝습니다. 외부 솔루션 도입이 현실적이며, 솔루션 평가 기준이 명확해야 합니다.</li>
  <li><strong>섀도우 AI 문제:</strong> 모델 2를 준수하기 위해 통제를 강화할수록 직원들이 우회 사용을 시도할 가능성이 커집니다. 통제와 활용성의 균형 설계가 필요합니다.</li>
</ul>

<h2>8. 우리 기관이 해야 할 일</h2>
<p>모델 2를 실제 적용하기 위해 정보화담당관이 단계적으로 수행해야 할 작업은 다음과 같습니다.</p>
<ol>
  <li><strong>활용 시나리오 정의:</strong> 직원들이 외부 AI를 어떤 업무에 어떻게 활용할 것인지 구체적으로 정의합니다. 단순히 "ChatGPT를 도입하겠다"가 아니라, "어떤 부서가 어떤 업무에 어떤 정보로 어떻게 활용하는가"를 명확히 합니다.</li>
  <li><strong>정보 등급 분류:</strong> 활용 시나리오에서 다루어질 정보들의 C/S/O 등급을 평가합니다. O 등급으로 한정되는 활용 범위가 어디까지인지가 이 단계에서 명확해집니다.</li>
  <li><strong>「위치-주체-객체」 모델링:</strong> 시나리오를 모델 2와 같은 방식으로 모델링하고 보안원칙을 적용합니다. 모델 2 문서의 분석 구조를 그대로 따르면 됩니다.</li>
  <li><strong>보안위협 식별 및 추가 위협 검토:</strong> 모델 2의 21개 위협을 기본으로, 우리 기관 특성에 따른 추가 위협이 있는지 검토합니다.</li>
  <li><strong>보안통제 항목 선택:</strong> 50여 개 통제 항목 중 우리 기관 환경에 적용해야 할 항목을 선택합니다. 모든 항목을 일률 적용할 필요는 없으며, 기관 특성에 맞춰 조정합니다.</li>
  <li><strong>AI 연계체계 솔루션 평가·도입:</strong> 통제 항목을 충족할 수 있는 AI 연계체계 솔루션을 선정합니다. 자체 구축은 현실적으로 어려우며, 외부 솔루션 평가가 일반적입니다.</li>
  <li><strong>운영 체계 구축:</strong> 사용자 교육, 모니터링, 감사 로그, 사고 대응 절차를 마련합니다.</li>
</ol>

<div class="takeaways">
  <div class="takeaways__label">이 글의 핵심 요약</div>
  <ul>
    <li>모델 2는 공공기관의 외부 상용 AI 활용을 위한 첫 공식 가이드입니다</li>
    <li>「위치(S)-주체(S)-객체(O)」 시나리오로 모델링되며, 활용 정보는 O 등급으로 한정됩니다</li>
    <li>21개의 보안위협이 식별되며, 그 중 11개가 AI 연계체계 영역에 집중되어 있습니다</li>
    <li>50여 개의 보안통제 항목 중 "데이터 보호 영역"이 가장 까다롭고 솔루션별 차이가 큽니다</li>
    <li>모델 2는 S 등급 정보 활용·자체 구축 AI·AI Agent 시나리오는 다루지 않습니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>모델 2를 따르면 우리 기관 직원들이 ChatGPT를 자유롭게 쓸 수 있나요?</h3>
<p>"자유롭게"라는 표현은 적절하지 않습니다. 모델 2 준수 환경에서도 활용 가능 정보는 O 등급으로 한정되며, AI 연계체계를 경유한 통제된 접근만 가능합니다. 직원이 ChatGPT 사이트에 직접 접속해서 자유롭게 쓰는 형태가 아니라, 기관이 운영하는 AI 연계체계 인터페이스를 통해 사전 승인된 범위에서 사용하게 됩니다.</p>

<h3>S 등급 정보로 외부 AI를 활용하려면 어떻게 해야 하나요?</h3>
<p>모델 2 범위 내에서는 불가능합니다. S 등급 정보의 외부 AI 활용을 검토하려면, 보호 처리(예: 비식별화·차등정보보호) 후 전송하는 별도의 아키텍처가 필요하며, 그 아키텍처의 N²SF 정합성에 대한 자체 위험 평가가 요구됩니다. 이 영역은 「공공기관 생성형 AI 도입의 세 가지 길」에서 자세히 다룹니다.</p>

<h3>모델 2의 21개 위협과 50개 통제를 모두 충족해야 하나요?</h3>
<p>문서의 "활용 방안" 절(p.9)에 명시되어 있듯이, 보안통제 항목은 절대적 기준이 아닌 검토 사항입니다. 기관 특성에 맞게 유연하게 적용할 수 있으며, 제시되지 않은 항목을 추가하거나 제시된 항목을 조정·삭제하는 것도 가능합니다. 다만 정당화 논리를 문서화해두는 것이 감사 대응에 필수입니다.</p>

<h3>AI 연계체계는 자체 구축이 가능한가요?</h3>
<p>이론상 가능하지만 현실적으로 매우 어렵습니다. 50여 개의 보안통제 항목을 충족하는 시스템을 자체 개발·운영하려면 상당한 인력·예산이 필요하며, 보안 검증의 부담도 큽니다. 대부분의 기관은 외부 솔루션 도입을 선택하며, 조달청 혁신제품 지정·각종 인증을 받은 솔루션이 선택지가 됩니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024</li>
  <li>「전자정부법」, 「국가정보보안기본지침」, 「개인정보 보호법」</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"모델 2를 따르면 우리 기관 직원들이 ChatGPT를 자유롭게 쓸 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"\\"자유롭게\\"라는 표현은 적절하지 않습니다. 모델 2 준수 환경에서도 활용 가능 정보는 O 등급으로 한정되며, AI 연계체계를 경유한 통제된 접근만 가능합니다. 직원이 ChatGPT 사이트에 직접 접속해서 자유롭게 쓰는 형태가 아니라, 기관이 운영하는 AI 연계체계 인터페이스를 통해 사전 승인된 범위에서 사용하게 됩니다."}}, {"@type":"Question","name":"S 등급 정보로 외부 AI를 활용하려면 어떻게 해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"모델 2 범위 내에서는 불가능합니다. S 등급 정보의 외부 AI 활용을 검토하려면, 보호 처리(예: 비식별화·차등정보보호) 후 전송하는 별도의 아키텍처가 필요하며, 그 아키텍처의 N²SF 정합성에 대한 자체 위험 평가가 요구됩니다. 이 영역은 「공공기관 생성형 AI 도입의 세 가지 길」에서 자세히 다룹니다."}}, {"@type":"Question","name":"모델 2의 21개 위협과 50개 통제를 모두 충족해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"문서의 \\"활용 방안\\" 절(p.9)에 명시되어 있듯이, 보안통제 항목은 절대적 기준이 아닌 검토 사항입니다. 기관 특성에 맞게 유연하게 적용할 수 있으며, 제시되지 않은 항목을 추가하거나 제시된 항목을 조정·삭제하는 것도 가능합니다. 다만 정당화 논리를 문서화해두는 것이 감사 대응에 필수입니다."}}, {"@type":"Question","name":"AI 연계체계는 자체 구축이 가능한가요?","acceptedAnswer":{"@type":"Answer","text":"이론상 가능하지만 현실적으로 매우 어렵습니다. 50여 개의 보안통제 항목을 충족하는 시스템을 자체 개발·운영하려면 상당한 인력·예산이 필요하며, 보안 검증의 부담도 큽니다. 대부분의 기관은 외부 솔루션 도입을 선택하며, 조달청 혁신제품 지정·각종 인증을 받은 솔루션이 선택지가 됩니다."}} ] }`

export default function N2sfModel2Explained() {
  return (
    <LearnArticle
      backLabel="← Learn"
      backHref="/resources/learn"
      title={"N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까"}
      lead={"국가정보원·NSR이 2025년 9월 발간한 「업무환경에서 생성형 AI 활용 모델 해설서」를 정보화담당관 관점에서 정리합니다. 21개 보안위협, 50여 개 보안통제 항목, AI 연계체계까지 처음부터 끝까지."}
      category={"정책 분석"}
      readTime={"20분 읽기"}
      dateUpdated={"2026년 5월 업데이트"}
      tldrLabel={"TL;DR"}
      tldrBody={"N²SF 모델 2는 공공기관이 외부 생성형 AI를 활용할 때 따라야 할 구체적 보안 프레임워크입니다. 「위치(기관 전산망 S) - 주체(이용자 단말 S) - 객체(외부 생성형 AI O)」라는 흐름을 21개 보안위협으로 식별하고, 50여 개 보안통제 항목으로 대응책을 제시합니다. 핵심은 두 보안원칙(정보 생산·저장, 정보 이동)과 AI 연계체계입니다."}
      bodyHtml={BODY_HTML}
      canonicalUrl={"https://llmcapsule.ai/resources/learn/n2sf-model-2-explained"}
      datePublished={"2026-05-01"}
      dateModified={"2026-05-01"}
      inLanguage={"ko-KR"}
      breadcrumbLabel={"N²SF 모델 2 완벽 해설"}
      faqJsonLd={FAQ_JSON_LD}
      relatedSectionLabel="함께 읽으면 좋은 글"
      related1Title={"N²SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리"}
      related1Href={"/resources/learn/what-is-n2sf"}
      related2Title={"공공기관 생성형 AI 도입의 세 가지 길"}
      related2Href={"/resources/learn/public-sector-genai-three-approaches"}
      related3Title={"sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프"}
      related3Href={"/resources/learn/sllm-self-hosted-reality-check"}
      related4Title={""}
      related4Href={""}
    />
  )
}
