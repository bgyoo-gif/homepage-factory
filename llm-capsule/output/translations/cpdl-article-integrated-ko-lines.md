# cpdl-article-integrated — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

What Is a Context-Preserving Data Layer for AI?
AI를 위한 Context-Preserving Data Layer란 무엇인가?

A context-preserving data layer is a software layer that transforms sensitive enterprise data into a protected but semantically usable form before it reaches an AI model, then restores the original values locally after inference. Unlike masking or DLP, which protect data by removing it — and so leave the model's output unusable — a context-preserving data layer protects the data while keeping the relationships the model needs to reason.
Context-preserving data layer는 민감한 엔터프라이즈 데이터가 AI 모델에 도달하기 전에 보호되지만 의미적으로 사용 가능한 형태로 변환하고, 추론 후 로컬에서 원래 값을 복원하는 소프트웨어 레이어입니다. 데이터를 제거하는 방식으로 보호하여 모델의 출력을 사용 불가능하게 만드는 masking 또는 DLP와 달리, context-preserving data layer는 데이터를 보호하면서 모델이 추론에 필요한 관계를 유지합니다.

Glossary
Glossary

~8 min read
~8분 읽기

Updated May 2026
2026년 5월 업데이트

## Section 02: TL;DR

TL;DR
TL;DR

A context-preserving data layer sits at the boundary between an organization's sensitive data and an AI model. It transforms the data into a protected but still-usable form before inference, then restores the original values locally afterward. Masking and DLP protect a value by removing it — but the moment a value is part of a relationship (Asset ID ↔ Asset Name, Host ↔ IP ↔ VLAN, Contract Clause ↔ Counterparty, Patient ↔ Diagnosis), removing the value destroys the relationship the model needs to reason. The data is safe; the output is useless. A context-preserving data layer breaks that trade-off: the model never needs to see the real data to be effective. It is not DLP or masking (they delete context), not RAG or a vector DB (they add context into the model), and not an AI gateway or MCP layer (they route and broker calls). It is embedded inside the stack at the model boundary — not a console end users log into. The goal is not to hide data from the model. The goal is to make the model effective without ever requiring access to the original data.
Context-preserving data layer는 조직의 민감한 데이터와 AI 모델 사이의 경계에 위치합니다. 추론 전에 데이터를 보호되지만 여전히 사용 가능한 형태로 변환하고, 이후 로컬에서 원래 값을 복원합니다. Masking과 DLP는 값을 제거하는 방식으로 보호합니다. 그러나 값이 관계의 일부인 순간—Asset ID ↔ Asset Name, Host ↔ IP ↔ VLAN, Contract Clause ↔ Counterparty, Patient ↔ Diagnosis—값을 제거하면 모델이 추론하는 데 필요한 관계가 파괴됩니다. 데이터는 안전합니다. 하지만 출력은 쓸모가 없습니다. Context-preserving data layer는 이 트레이드오프를 해소합니다. 모델은 효과적으로 동작하기 위해 실제 데이터를 볼 필요가 없습니다. DLP나 masking이 아니며(맥락을 삭제합니다), RAG나 vector DB도 아니며(모델에 맥락을 추가합니다), AI gateway나 MCP layer도 아닙니다(호출을 라우팅하고 중개합니다). 모델 경계의 스택 내부에 임베드됩니다—최종 사용자가 로그인하는 콘솔이 아닙니다. 목표는 모델로부터 데이터를 숨기는 것이 아닙니다. 목표는 원본 데이터에 대한 접근 없이도 모델이 효과적으로 동작하도록 만드는 것입니다.

## Section 03: Article Body

<h2>이 카테고리가 지금 존재하는 이유</h2>
<p>기업과 공공 부문 조직은 가장 가치 있는 데이터에 생성형 AI를 활용하고자 합니다. 운영 기록, 계약서, 소스 코드, 자산 인벤토리, 네트워크 구성, 임상 노트가 그 대상입니다. 그러나 바로 그 데이터가 외부 모델로 전송이 허용되지 않는 데이터입니다.</p>
  <p>이로 인해 도입 격차가 생깁니다. AI로부터 가장 큰 혜택을 받을 수 있는 업무가 AI에 노출하기 가장 어려운 업무입니다. 규제가 강화되고 GenAI가 파일럿에서 프로덕션 시스템으로 이동함에 따라, 이 격차는 더 이상 예외적인 사례가 아니라 엔터프라이즈 AI의 핵심 장벽이 됩니다.</p>
  <p>직관적인 해결책은 데이터가 모델에 도달하기 전에 민감한 부분을 제거하는 것입니다. 그것이 바로 진짜 문제가 시작되는 지점입니다.</p>

<h2>문제는 데이터가 아닙니다. 관계입니다.</h2>
<p>Masking, 편집, DLP는 하나의 목적을 위해 만들어졌습니다. 민감한 값이 네트워크를 벗어나지 못하도록 막는 것입니다. 이 목적에서는 훌륭합니다. 그러나 모델이 남겨진 것을 읽을 수 있도록 설계된 적은 없습니다.</p>
  <p>전통적인 masking 시스템은 데이터 보호를 최적화합니다. AI 시스템은 추론을 최적화합니다. 마스킹된 값이 관계에 참여하는 순간, 값을 보호하는 것이 관계 자체를 파괴하는 경우가 많습니다.</p>
  <p>대부분의 팀이 놓치는 부분이 바로 이것입니다. AI 유용성에 대한 위험은 단일 값이 숨겨진다는 것이 아닙니다—값을 숨기는 것이 모델이 생각하는 데 필요한 연결을 끊는다는 것입니다. 마스킹하는 순간 사라지는 것을 생각해 보십시오.</p>
<ul>
  <li><strong>Asset ID &harr; Asset Name</strong>&mdash;ID를 편집하면 모델은 더 이상 취약점을 해당 머신과 연결할 수 없습니다.</li>
  <li><strong>Host &harr; IP &harr; VLAN</strong>&mdash;이를 평탄화하면 모델은 경보가 실제로 어떤 세그먼트에서 왔는지 추론할 수 없습니다.</li>
  <li><strong>Contract clause &harr; Counterparty</strong>&mdash;당사자를 삭제하면 갱신 위험이나 의무 관련 질문에 답할 수 없게 됩니다.</li>
  <li><strong>Patient &harr; Treatment &harr; Diagnosis</strong>&mdash;식별자를 제거하면 모델이 요약하도록 요청받은 임상 체인이 사라집니다.</li>
</ul>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 410" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig1-title fig1-desc">
      <title id="fig1-title">Masking vs Context-Preserving Data Layer</title>
      <desc id="fig1-desc">동일한 네트워크 레코드를 보여주는 두 패널. 왼쪽 패널(Masking / DLP): 값이 편집되고 관계가 끊어집니다. 오른쪽 패널(Context-Preserving Data Layer): 값이 토큰으로 변환되지만 관계는 유지됩니다.</desc>
      <defs>
        <marker id="f1-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L7,4 L0,8 Z" fill="#6b7280"/>
        </marker>
      </defs>
      <text x="410" y="26" text-anchor="middle" font-size="13.5" fill="#6b7280">동일한 레코드. 동일한 값 보호. 모델에 필요한 관계를 유지하는 것은 하나뿐입니다.</text>
      <rect x="20" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="40" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#ef5350">MASKING / DLP</text>
      <line x1="40" y1="92" x2="360" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="40"  y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="80"  y="143" text-anchor="middle">web-07</text>
        <rect x="160" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="200" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="280" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="320" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="120" y1="139" x2="160" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="240" y1="139" x2="280" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="200" y1="166" x2="200" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="214" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">편집</text>
      <g>
        <rect x="40"  y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="160" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <rect x="280" y="218" width="80" height="30" rx="6" fill="#e5e7eb" stroke="#d1d5db"/>
        <g stroke="#b0b7c3" stroke-width="2">
          <line x1="58"  y1="233" x2="102" y2="233"/>
          <line x1="178" y1="233" x2="222" y2="233"/>
          <line x1="298" y1="233" x2="342" y2="233"/>
        </g>
      </g>
      <g stroke="#ef5350" stroke-width="1.6">
        <line x1="120" y1="233" x2="135" y2="233"/>
        <line x1="145" y1="233" x2="160" y2="233"/>
        <line x1="240" y1="233" x2="255" y2="233"/>
        <line x1="265" y1="233" x2="280" y2="233"/>
        <line x1="136" y1="227" x2="144" y2="239"/>
        <line x1="144" y1="227" x2="136" y2="239"/>
        <line x1="256" y1="227" x2="264" y2="239"/>
        <line x1="264" y1="227" x2="256" y2="239"/>
      </g>
      <text x="200" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">값이 보호됩니다.</tspan> <tspan fill="#ef5350" font-weight="600">관계가 끊어집니다.</tspan></text>
      <text x="200" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="200" dy="0">모델은 더 이상 경보가</tspan><tspan x="200" dy="15">어떤 host에서 왔는지 알 수 없습니다.</tspan></text>
      <rect x="440" y="48" width="360" height="312" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="460" y="80" font-size="12" font-weight="700" letter-spacing="1.2" fill="#5b4fe9">CONTEXT-PRESERVING DATA LAYER</text>
      <line x1="460" y1="92" x2="780" y2="92" stroke="#e5e7eb"/>
      <g font-size="13" fill="#0f1130">
        <rect x="460" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="500" y="143" text-anchor="middle">web-07</text>
        <rect x="580" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="620" y="143" text-anchor="middle">10.2.4.11</text>
        <rect x="700" y="124" width="80" height="30" rx="6" fill="#f7f8fb" stroke="#e5e7eb"/><text x="740" y="143" text-anchor="middle">vlan-220</text>
      </g>
      <line x1="540" y1="139" x2="580" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="660" y1="139" x2="700" y2="139" stroke="#0f1130" stroke-width="1.5"/>
      <line x1="620" y1="166" x2="620" y2="202" stroke="#9ca3af" stroke-width="1.3" marker-end="url(#f1-a)"/>
      <text x="634" y="188" font-size="11.5" fill="#9ca3af" font-style="italic">변환</text>
      <g font-family="'JetBrains Mono','SF Mono',monospace" font-size="12.5" fill="#3b2fbf">
        <rect x="460" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="500" y="237" text-anchor="middle">tok_H7</text>
        <rect x="580" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="620" y="237" text-anchor="middle">tok_A4</text>
        <rect x="700" y="218" width="80" height="30" rx="6" fill="#eeebfe" stroke="#c9c3fb"/><text x="740" y="237" text-anchor="middle">tok_V2</text>
      </g>
      <g stroke="#5b4fe9" stroke-width="2">
        <line x1="540" y1="233" x2="580" y2="233"/>
        <line x1="660" y1="233" x2="700" y2="233"/>
      </g>
      <text x="620" y="298" text-anchor="middle" font-size="12.5" fill="#0f1130"><tspan font-weight="600">값이 보호됩니다.</tspan> <tspan fill="#5b4fe9" font-weight="600">관계가 유지됩니다.</tspan></text>
      <text x="620" y="320" text-anchor="middle" font-size="11.5" fill="#9ca3af"><tspan x="620" dy="0">모델은 여전히 host &#8594; IP &#8594; VLAN을 추론하고,</tspan><tspan x="620" dy="15">값은 로컬에서 복원됩니다.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 1.</strong> Masking은 host&ndash;IP&ndash;VLAN 관계를 끊습니다. Context-preserving data layer는 값을 토큰화하지만 관계를 그대로 유지합니다.</p>
</figure>

<p>입력은 안전합니다. 출력은 쓸모가 없습니다. 대부분의 팀은 이를 AI를 안전하게 사용하기 위한 비용으로 받아들입니다&mdash;<em>데이터를 보호하거나 모델과 함께 사용하거나, 둘 다는 불가능합니다.</em> Context-preserving data layer는 바로 이 트레이드오프를 해소하기 위해 존재합니다.</p>

<h2>Context-preserving data layer가 하는 일</h2>
<p>민감한 값을 삭제하는 대신 <strong>변환</strong>합니다&mdash;그리고 그 주변의 구조와 관계를 보존하여 모델이 여전히 실제 데이터처럼 동작하는 무언가를 받도록 합니다. 모델은 보호된 데이터로 작동합니다. 돌아오는 과정에서 레이어는 신뢰 경계 내부 로컬에서 원래 값을 <strong>복원</strong>하여, 모델이 실제 데이터를 본 것처럼 출력이 워크플로우에 전달됩니다.</p>
  <p>모델은 실제 데이터를 보지 않습니다. 더 정확하게는, 모델은 실제 데이터를 볼 <em>필요가</em> 없습니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,system-ui,sans-serif" role="img" aria-labelledby="fig2-title fig2-desc">
      <title id="fig2-title">Context-Preserving Data Layer 흐름</title>
      <desc id="fig2-desc">민감한 엔터프라이즈 데이터가 context-preserving data layer(변환)에 진입하고, 보호된 토큰이 AI 모델로 전달된 후, 레이어가 신뢰 경계 내부에서 로컬로 값을 복원하여 사용 가능한 출력을 생성하는 흐름 다이어그램.</desc>
      <defs>
        <marker id="f2-a" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#6b7280"/>
        </marker>
        <marker id="f2-t" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M0,0 L8,4.5 L0,9 Z" fill="#5b4fe9"/>
        </marker>
      </defs>
      <line x1="524" y1="62" x2="524" y2="300" stroke="#ef5350" stroke-width="1.3" stroke-dasharray="5 5"/>
      <text x="300" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#6b7280">귀사 환경 내부</text>
      <text x="672" y="50" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="1" fill="#ef5350">외부 AI 모델</text>
      <rect x="36" y="120" width="150" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="111" y="145" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">민감한</text><text x="111" y="162" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">엔터프라이즈 데이터</text>
      <rect x="36" y="220" width="150" height="56" rx="10" fill="#ffffff" stroke="#c9c3fb"/><text x="111" y="245" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">워크플로우에서</text><text x="111" y="262" text-anchor="middle" font-size="12.5" font-weight="600" fill="#3b2fbf">사용 가능한 출력</text>
      <rect x="300" y="96" width="160" height="204" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.4"/>
      <text x="380" y="124" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">Context-preserving</text><text x="380" y="141" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3b2fbf">data layer</text>
      <line x1="320" y1="158" x2="440" y2="158" stroke="#c9c3fb"/>
      <text x="380" y="186" text-anchor="middle" font-size="12" fill="#3b2fbf"><tspan font-weight="600">변환</tspan> &#8594;</text>
      <text x="380" y="252" text-anchor="middle" font-size="12" fill="#3b2fbf">&#8592; <tspan font-weight="600">복원</tspan></text>
      <rect x="600" y="148" width="170" height="56" rx="10" fill="#ffffff" stroke="#e5e7eb"/><text x="685" y="173" text-anchor="middle" font-size="12.5" font-weight="600" fill="#0f1130">AI 모델</text><text x="685" y="190" text-anchor="middle" font-size="11" fill="#9ca3af">보호된 데이터만 봅니다</text>
      <line x1="186" y1="148" x2="300" y2="148" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <line x1="460" y1="148" x2="600" y2="160" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <text x="524" y="128" text-anchor="middle" font-size="11" fill="#3b2fbf">보호된 토큰 &#8594;</text>
      <line x1="600" y1="196" x2="460" y2="244" stroke="#5b4fe9" stroke-width="1.6" marker-end="url(#f2-t)"/>
      <line x1="300" y1="248" x2="186" y2="248" stroke="#6b7280" stroke-width="1.4" marker-end="url(#f2-a)"/>
      <text x="524" y="270" text-anchor="middle" font-size="11" fill="#3b2fbf">&#8592; 보호된 출력</text>
      <text x="410" y="340" text-anchor="middle" font-size="14" fill="#0f1130"><tspan font-weight="600">모델은 실제 데이터를 보지 않습니다.</tspan> <tspan fill="#5b4fe9" font-weight="600">볼 필요가 없습니다.</tspan></text>
    </svg>
  </div>
  <p class="ds-figure__caption"><strong>Figure 2.</strong> 레이어는 AI 모델 이전에 데이터를 변환하고, 신뢰 경계 내부에서 로컬로 값을 복원합니다.</p>
</figure>

<p>이 카테고리를 정의하는 몇 가지 속성이 있습니다.</p>
<ul>
  <li><strong>일반적인 PII가 아닌 맞춤형 보호.</strong> 모델 경계를 명확한 형태로 절대 넘어서서는 안 되는 것은 업무 자체가 결정합니다&mdash;프로젝트 코드, 자산 및 장비 ID, 계약 조건, 네트워크 식별자, 임상 표현, 소스 코드, 내부 식별자. 일반적인 PII는 보호하는 대상의 일부일 뿐, 핵심이 아닙니다.</li>
  <li><strong>평탄화되지 않고 보존되는 관계.</strong> 자산-이름, host-IP-VLAN, 조항-Counterparty, Patient-Diagnosis&mdash;연결이 변환 후에도 살아남습니다. 모델이 추론하는 대상이 바로 그 연결이기 때문입니다.</li>
  <li><strong>신뢰 경계 내부에서의 복원.</strong> 토큰은 추론 후 로컬에서 원래 값으로 다시 매핑되므로 결과를 워크플로우에서 사용할 수 있습니다&mdash;그리고 원본 데이터는 출력을 완성하기 위해 외부로 나갈 필요가 없습니다.</li>
</ul>

<h2>기존에 보유한 것과의 차이점</h2>
<p>모델 근처에 위치하기 때문에 context-preserving data layer는 실제로 그렇지 않은 것들과 비교됩니다.</p>
<ul>
  <li><strong>DLP나 masking이 아닙니다.</strong> 그것들은 입력을 제거하여 보호합니다. 이것은 입력을 변환하여 보호하므로 맥락이 살아남습니다.</li>
  <li><strong>RAG나 vector database가 아닙니다.</strong> RAG는 <em>추가적인</em> 맥락을 모델 <em>안으로</em> 가져옵니다. Context-preserving data layer는 조직에서 <em>이미 나가고 있는</em> <em>민감한</em> 맥락을 관리합니다. 하나는 지식을 추가하고, 다른 하나는 나가는 것을 지킵니다.</li>
  <li><strong>AI gateway나 MCP layer가 아닙니다.</strong> 그것들은 모델 호출을 라우팅, 중개, 오케스트레이션합니다. Context-preserving data layer는 경계를 넘는 <em>내용</em>을 변환합니다&mdash;그리고 일반적으로 최종 사용자가 로그인하는 콘솔이 아닌 스택 내부에 임베드됩니다.</li>
</ul>

<h2>엔터프라이즈 스택의 새로운 레이어</h2>
<p>AI는 전통적인 보안 스택이 해결하도록 설계된 적 없는 새로운 아키텍처 요구사항을 도입했습니다. 조직은 AI가 의존하는 맥락을 제거하지 않고도 민감한 데이터를 보호하는 레이어가 필요합니다. 그 레이어는 이전에 엔터프라이즈 아키텍처에 존재하지 않았습니다. 우리는 이를 context-preserving data layer라고 부릅니다.</p>
  <p>모든 플랫폼 전환은 그것을 작동시키는 레이어에 이름을 붙입니다&mdash;Databricks는 레이크하우스, Snowflake는 데이터 클라우드, Palantir는 온톨로지를 명명했습니다. 민감한 데이터에서 엔터프라이즈 AI를 실행하는 전환에도 자체적인 것이 필요합니다. 데이터가 보호되고 여전히 사용 가능하며, 모델을 만나는 정확한 지점에 있는 레이어입니다.</p>
  <p>이것은 오래된 가정&mdash;<em>데이터를 보호하거나 사용하거나, 둘 다는 불가능합니다</em>&mdash;을 동시에 둘 다를 하는 레이어로 대체합니다.</p>

<h2>자주 묻는 질문</h2>
  <h3>AI를 위한 context-preserving data layer란 무엇입니까?</h3>
<p>Context-preserving data layer는 조직의 민감한 데이터와 AI 모델 사이에 위치하는 소프트웨어 레이어입니다. 추론 전에 민감한 데이터를 보호되지만 의미적으로 사용 가능한 형태로 변환하고, 이후 로컬에서 원래 값을 복원합니다&mdash;이를 통해 모델은 원본 데이터를 전혀 수신하지 않고도 실제 세계의 구조에 대해 추론할 수 있습니다.</p>

    <h3>데이터 masking이나 DLP와 어떻게 다릅니까?</h3>
<p>Masking과 DLP는 값을 삭제하거나 편집하여 보호합니다. 이것은 데이터 유출을 막는 데는 효과적이지만, 값 주변의 관계도 파괴합니다&mdash;그리고 그 관계가 바로 AI 모델이 추론하는 데 필요한 것입니다. Context-preserving data layer는 관계를 그대로 유지하면서 값을 보호하므로 모델의 출력이 사용 가능한 상태로 유지됩니다.</p>

    <h3>Context-preserving data layer는 RAG와 같습니까?</h3>
<p>아닙니다. RAG(retrieval-augmented generation)는 모델의 답변을 개선하기 위해 <em>추가적인</em> 맥락을 모델 <em>안으로</em> 가져옵니다. Context-preserving data layer는 반대 역할을 합니다. 모델로 가는 도중 조직에서 <em>이미 나가고 있는</em> <em>민감한</em> 맥락을 관리합니다. RAG는 지식을 추가하고, 이것은 나가는 것을 지킵니다. 함께 사용할 수 있습니다.</p>

    <h3>AI gateway나 MCP layer와 어떻게 다릅니까?</h3>
<p>AI gateway와 MCP layer는 모델 호출을 라우팅, 중개, 오케스트레이션합니다&mdash;<em>어떤</em> 모델이 호출되고 <em>어떻게</em> 호출되는지를 관리합니다. Context-preserving data layer는 경계를 넘는 데이터의 <em>내용</em>을 변환합니다. 트래픽 라우팅이 아니라 모델이 보고 보지 못하는 것과 관련이 있으며, 일반적으로 콘솔로 실행되지 않고 스택 내부에 임베드됩니다.</p>

    <h3>AI 모델이 실제 데이터를 보는 경우가 있습니까?</h3>
<p>아닙니다. 모델은 항상 변환된 보호 형태만 수신합니다. 원래 값은 추론 후 조직의 신뢰 경계 내부에서 로컬로 복원됩니다. 이 카테고리의 핵심은 모델이 효과적으로 동작하기 위해 실제 데이터를 <em>필요로 하지 않는다</em>는 것입니다.</p>

    <h3>이것은 단순히 PII 보호입니까?</h3>
<p>아닙니다. 일반적인 PII는 context-preserving data layer가 보호하는 대상의 일부일 뿐, 핵심이 아닙니다. 보호되어야 하는 것은 업무 자체가 정의합니다&mdash;프로젝트 코드, 자산 및 장비 ID, 계약 조건, 네트워크 식별자, 임상 표현, 소스 코드, 내부 식별자&mdash;그 중 상당 부분은 표준 PII 목록에 해당하지 않습니다.</p>

    <h3>엔터프라이즈 아키텍처에서 어디에 위치합니까?</h3>
<p>민감한 데이터가 AI 모델을 만나는 경계에, 최종 사용자 제품으로 노출되지 않고 스택 내부에 임베드됩니다. 보호와 유용성 중 하나를 선택하도록 강요하지 않고 보호된 엔터프라이즈 데이터에서 AI를 실행할 수 있게 하는 레이어입니다.</p>


## Section 04: Related

Related articles
관련 아티클

Running External LLMs on Data Your Company Can't Send Externally
회사가 외부로 보낼 수 없는 데이터에서 외부 LLM 실행하기

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
LLM 입력을 위한 토큰화: AI가 보지 않는 것을 읽는 방법

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
AI 출력 재구성: 모델 응답과 비즈니스 현실 사이의 마지막 구간
