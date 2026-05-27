# Tokenization for LLM Inputs — 한국어 번역 (literal)

## Section 01: Hero

← Learn
← Learn

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
LLM 입력을 위한 토큰화: AI가 보지 않고 읽는 방법

The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.
프로덕션에서 LLM 이전 토큰화가 작동하게 만드는 아키텍처 결정들 — 결정적 vs 무작위, 형식 보존, 매핑 저장, 그리고 팀이 배포 전에 해결해야 할 질문들.

AI Architecture
AI 아키텍처

~9 min read
약 9분 읽기

Updated May 2026
2026년 5월 업데이트

## Section 02: TL;DR

TL;DR
TL;DR

Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.
LLM 이전 토큰화는 엔터프라이즈 문서가 민감한 내용을 노출하지 않고 외부 모델로 경계를 넘을 수 있게 해주는 치환 단계입니다. 의미론적 공개 없이 LLM에 참조적 무결성을 제공하는 방식으로 작동합니다. 모델이 기저 신원을 복원하지 않고도 문서 전체에서 일관되게 추론할 수 있는 플레이스홀더를 제공합니다. 프로덕션 수준의 구현은 아키텍처 질문들을 명시적으로 해결해야 합니다. 결정적 vs 무작위(문서 간 연결 vs 재식별 표면), 형식 보존 vs 마커 방식(출력 품질 vs 단순성), 매핑의 위치(독점적 엔터프라이즈 통제는 협상 불가), 언급 간 엔티티 해소, 그리고 토큰화하지 않아야 할 것. 대부분의 워크플로우에는 토큰화만으로 충분합니다. 고카디날리티 데이터, 긴 시계열, 또는 심층 방어 태세의 경우 통계적 보호(차분 프라이버시, k-익명성)가 위에 추가됩니다. 민감한 것의 정의는 대부분의 팀이 초기에 충분히 투자하지 않는 레이어이며, 장기 운영 비용의 대부분이 이곳에 있습니다.

## Section 03: Article Body

<h2>1. 이 맥락에서 토큰화가 실제로 하는 일</h2>
<p>엔터프라이즈 문서와 외부 LLM 사이에 위치한 변환 단계는 개념적으로 단순합니다. 경계를 넘을 수 없는 요소를 식별하고, 구조적 역할을 보존하는 플레이스홀더로 교체하고, 결과를 모델에 전송합니다. 실제로는 이 단순함 뒤에 접근 방식이 프로덕션 규모에서 작동할지 부하 하에서 깨질지를 결정하는 아키텍처 결정들이 숨어 있습니다.</p>
<p>이 아티클은 그 결정들을 하나씩 살펴봅니다. 특정 라이브러리나 제품에 대한 튜토리얼이 아닙니다. LLM 이전 토큰화를 도입하는 모든 팀이 명시적으로 해야 하는 선택들과 각 선택이 수반하는 트레이드오프입니다.</p>
<p>여기서 <em>토큰화</em>라는 용어는 데이터 보호 의미로 사용됩니다. 민감한 값을 다시 매핑할 수 있는 비민감 플레이스홀더로 교체하는 것을 의미하며, 모델 입력을 위해 텍스트를 서브워드 단위로 분할하는 NLP 의미가 아닙니다. <strong>두 용어는 단어를 공유하지만 거의 아무것도 공유하지 않습니다.</strong></p>
<p>용어에 관한 관련 메모: CUBIG의 아키텍처에서 토큰화는 감지, 형식 보존, 선택적 통계적 보호도 포함하는 더 넓은 <strong>캡슐화 레이어</strong> 내의 핵심 치환 메커니즘입니다. 이 아티클은 토큰화 메커니즘에 특별히 집중합니다. 구현이 스스로를 토큰화, 캡슐화, 또는 해당 분야에서 사용되는 다른 이름으로 부르든 설계 결정은 대체로 동일합니다.</p>
<p>엔터프라이즈 문서가 외부 LLM을 위해 준비될 때, 목표는 모델이 작업에 필요한 모든 것을 유지하고 경계가 내부에 두도록 설정된 모든 것을 제거한 문서 버전을 보는 것입니다. 토큰화는 두 번째 절반을 달성하는 메커니즘입니다. 민감한 요소를 식별하고 플레이스홀더로 치환합니다.</p>
<p>유용한 프레임: LLM은 고객의 이름이 <em>Marlene Schmidt</em>라는 것을 알 필요가 없습니다. 고객이 있다는 것, 고객이 문서의 세 곳에서 참조된다는 것, 모든 참조가 동일한 엔티티를 가리킨다는 것을 알아야 합니다. <code>CUST-7F2A</code> 같은 토큰은 신원을 담지 않고 동일한 정보를 전달합니다. 여러 곳에 일관되게 나타나는 참조 가능한 엔티티입니다.</p>
<p>이것이 토큰화가 제공하는 핵심 속성입니다. <strong>의미론적 공개 없는 참조적 무결성</strong>. 토큰이 문서 전체에 일관되게 이어지기 때문에 모델은 문서 전반에 걸쳐 <em>"고객"</em>에 대해 추론할 수 있습니다. 토큰이 신원을 인코딩하지 않기 때문에 모델은 신원을 복원할 수 없습니다.</p>
<p>이 아티클의 나머지 모든 내용은 그 속성이 구현되는 방식의 변형과, 그 위에 어떤 추가 속성이 쌓이는지에 관한 것입니다.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" role="img" aria-labelledby="referential-integrity-title referential-integrity-desc">
      <title id="referential-integrity-title">의미론적 공개 없는 참조적 무결성</title>
      <desc id="referential-integrity-desc">동일한 고객이 세 가지 다른 방식으로 참조된 소스 문서를 보여주는 다이어그램. LLM이 보는 버전에서는 모두 하나의 일관된 토큰으로 해소되며, 매핑 테이블은 엔터프라이즈 내부에 보관됩니다.</desc>

      <defs>
        <marker id="arrow-primary-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>


      <g>
        <rect x="20" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">소스 문서</text>
        <line x1="40" y1="74" x2="340" y2="74" stroke="#e5e7eb" stroke-width="1"/>

        <text x="40" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">헤더: 고객 <tspan font-weight="700" fill="#c73e3a">Marlene Schmidt</tspan></text>
        <text x="40" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">가 계정 이탈에 관해 연락했습니다.</text>

        <text x="40" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">상담원 메모: &ldquo;<tspan font-weight="700" fill="#c73e3a">Schmidt 씨</tspan>가 지난</text>
        <text x="40" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">화요일부터 문제가 시작되었다고 보고했습니다.&rdquo;</text>

        <text x="40" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">해결: &ldquo;<tspan font-weight="700" fill="#c73e3a">Marlene</tspan>이 펌웨어</text>
        <text x="40" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">롤백 후 서비스 복원을 확인했습니다.&rdquo;</text>
      </g>


      <g>
        <line x1="370" y1="140" x2="490" y2="140" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary-tk)"/>
        <rect x="380" y="98" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="118" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">엔티티 해소</text>
        <rect x="380" y="150" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">토큰화</text>
      </g>


      <g>
        <rect x="500" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="520" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">LLM이 보는 것</text>
        <line x1="520" y1="74" x2="820" y2="74" stroke="#eeebfe" stroke-width="1"/>

        <text x="520" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">헤더: 고객 <tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan></text>
        <text x="520" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">가 계정 이탈에 관해 연락했습니다.</text>

        <text x="520" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">상담원 메모: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan>가 지난</text>
        <text x="520" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">화요일부터 문제가 시작되었다고 보고했습니다.&rdquo;</text>

        <text x="520" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">해결: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan>가 펌웨어</text>
        <text x="520" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">롤백 후 서비스 복원을 확인했습니다.&rdquo;</text>
      </g>


      <g>
        <rect x="280" y="280" width="400" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="300" y="304" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">토큰 ↔ 값 매핑 · 엔터프라이즈 전용</text>
        <line x1="300" y1="314" x2="660" y2="314" stroke="#a7e0df" stroke-width="1"/>
        <text x="300" y="334" font-family="Inter, sans-serif" font-size="12" fill="#0f1130"><tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> &nbsp;&rarr;&nbsp; Marlene Schmidt &nbsp;<tspan font-style="italic" fill="#6b7280">(또한 &ldquo;Schmidt 씨&rdquo;, &ldquo;Marlene&rdquo;)</tspan></text>
        <text x="300" y="352" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" font-style="italic">매핑은 절대 엔터프라이즈 경계를 벗어나지 않습니다</text>
      </g>


      <line x1="190" y1="240" x2="380" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="670" y1="240" x2="580" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">그림 1 &middot; <strong>동일한 고객의 세 가지 다른 언급이 모두 하나의 일관된 토큰으로 해소됩니다. LLM은 문서 전체에서 &ldquo;고객&rdquo;에 대해 추론할 수 있습니다. 실제 신원으로의 매핑은 엔터프라이즈 내부에 유지됩니다.</strong></figcaption>
</figure>

<h2>2. 결정적 토큰화 vs 무작위 토큰화</h2>
<p>첫 번째 아키텍처 결정은 주어진 민감한 값이 항상 동일한 토큰을 생성하는지, 아니면 매번 다른 토큰을 생성하는지입니다.</p>

<h3>2.1 결정적 토큰화</h3>
<p><strong>결정적 토큰화</strong>는 <em>Marlene Schmidt</em>가 모든 문서에서, 모든 워크플로우에서 항상 <code>CUST-7F2A</code>가 된다는 것을 의미합니다. 토큰은 값(그리고 보통 비밀 키)의 함수입니다.</p>
<p>이점은 문서 간 일관성입니다. 두 티켓이 동일한 고객을 참조하면 LLM은 두 곳에서 동일한 토큰을 보고, 문서 간 연결에 의존하는 분석이 계속 작동합니다. 문서 전체를 집계하거나 비교하는 워크플로우, 즉 사기 감지 패턴, 고객 이력 요약, 코호트 분석에서는 결정적 방식이 보통 유일하게 실행 가능한 선택입니다.</p>
<p>비용은 결정론이 <strong>재식별 표면</strong>을 만든다는 것입니다. 충분한 토큰화된 문서를 관찰하고 어떤 고객이 어디에 나타나는지에 대한 부가 정보를 가진 공격자는 토큰을 신원과 연관지을 수 있습니다. 위험은 대용량 워크플로우 또는 동일한 엔티티가 시간이 지남에 따라 많은 토큰화된 출력에 나타나는 경우에 실재합니다.</p>

<h3>2.2 무작위 토큰화</h3>
<p><strong>무작위 토큰화</strong>는 동일한 값이라도 발생할 때마다 다른 토큰을 생성합니다. <em>Marlene Schmidt</em>는 한 문서에서 <code>CUST-7F2A</code>가 되고 다른 문서에서 <code>CUST-3B91</code>이 될 수 있습니다.</p>
<p>이점은 문서 간 연결이 노출되지 않는다는 것입니다. 토큰화된 각 문서는 독립된 시스템입니다.</p>
<p>비용은 문서 간 분석이 깨진다는 것입니다. LLM은 두 토큰이 동일한 고객을 참조한다고 알 수 없습니다. 구조적 수준에서 그렇지 않기 때문입니다. 문서 간 연결이 필요하지 않은 워크플로우, 즉 단일 문서 요약, 단일 계약에서 조항 추출의 경우 무작위화가 적합합니다. 필요한 워크플로우에서는 무작위화로 인해 LLM이 응답한 후 연결을 복원해야 하며, 이는 복잡성을 추가합니다.</p>

<h3>2.3 대부분의 프로덕션 배포가 사용하는 하이브리드 패턴</h3>
<p>대부분의 프로덕션 배포는 하이브리드로 귀결됩니다. <strong>워크플로우 범위 내에서는 결정적</strong>(고객에 대한 멀티턴 대화가 일관성을 유지하도록), <strong>워크플로우 범위 간에는 무작위</strong>(한 워크플로우의 분석이 다른 워크플로우와 상호 참조될 수 없도록). 범위의 경계 자체가 설계 결정입니다. 세션별, 사용자별, 문서별, 테넌트별로 정의되며, 아키텍처가 라이브되기 전에 팀이 해결해야 하는 사항 중 하나입니다.</p>

<table>
  <thead>
    <tr>
      <th>선택</th>
      <th>이점</th>
      <th>비용</th>
      <th>최적 용도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>결정적</td>
      <td>문서 간 연결 보존; 워크플로우 전반에서 분석 가능</td>
      <td>대용량 워크플로우에서 재식별 표면 생성</td>
      <td>사기 감지, 고객 이력, 코호트 분석</td>
    </tr>
    <tr>
      <td>무작위</td>
      <td>토큰화된 각 문서가 독립 시스템; 문서 간 연결 미노출</td>
      <td>문서 간 분석 불가; LLM 이후 연결 복원 필요</td>
      <td>단일 문서 요약, 단일 계약 추출</td>
    </tr>
    <tr>
      <td>하이브리드 (범위 내 결정적, 범위 간 무작위)</td>
      <td>세션/사용자/테넌트 경계 내에서 일관성 유지; 범위 간 격리</td>
      <td>범위 경계 자체가 설계 결정이 됨</td>
      <td>대부분의 프로덕션 배포</td>
    </tr>
  </tbody>
</table>

<h2>3. 형식 보존 토큰화 — 플레이스홀더 문자열이 충분하지 않은 이유</h2>
<p>단순한 구현은 민감한 값을 일반 플레이스홀더로 교체합니다. <code>[CUSTOMER]</code>, <code>[ACCOUNT_NUMBER]</code>, <code>[DATE]</code>. LLM은 이런 마커들로 가득 찬 문서를 보고 추론을 시도합니다.</p>
<p>이것은 실제로 특정 이유로 잘 작동하지 않습니다. LLM의 추론은 입력의 표면 형태에 의해 형성됩니다. <em>"고객 Marlene Schmidt가 2026-03-15에 계정 4471-9028에 관해 연락했습니다"</em>라고 읽히는 문서는 모델에게 일관된 운영 기록입니다. 플레이스홀더가 있는 동일한 문서, 즉 <em>"고객 [CUSTOMER]가 [DATE]에 계정 [ACCOUNT_NUMBER]에 관해 연락했습니다"</em>는 템플릿이나 검열 통지처럼 읽힙니다. <strong>모델은 그 신호에 민감하고, 그에 따라 출력이 저하됩니다.</strong> 요약이 더 추상적이 되고, 추출이 덜 정확해지며, 모델이 가끔 검열 자체에 대한 코멘트로 빠집니다.</p>
<p><strong>형식 보존 토큰화</strong>는 교체하는 값처럼 보이는 토큰을 생성합니다. 이름은 그럴듯하게 보이는 이름 토큰이 됩니다. <code>Lyra Vesper</code>. 날짜는 그럴듯한 범위의 실제 날짜가 됩니다. 계정 번호는 실제 계정 번호가 아닌 동일한 길이, 동일한 형식의 숫자가 됩니다.</p>
<p>LLM이 보는 문서는 익명이지만 현실적인 대역이 있는 일관된 운영 문서로 읽힙니다. 모델의 출력은 템플릿에 대해 추론하도록 요청받는다는 인식으로 저하되지 않고 모델이 실제로 생성할 수 있는 품질로 반환됩니다.</p>
<p>형식 보존에는 자체적인 설계 선택이 있습니다. 토큰을 얼마나 그럴듯하게 만들지, 고정된 가짜 이름 풀에서 가져올지 즉석에서 생성할지, <em>값</em> 자체가 분석적 의미를 가지는 날짜와 숫자를 어떻게 처리할지(정확한 날짜가 민감하더라도 2019년 날짜 vs 2024년 날짜는 분석에 중요할 수 있습니다). <strong>일반 규칙은 토큰이 원래 값이 가진 분석적 속성을 그 이상도 이하도 아닌 정확히 보존해야 한다는 것입니다.</strong></p>

<h2>4. 매핑의 위치</h2>
<p>토큰화는 매핑, 즉 토큰을 원래 값에 연결하는 테이블이 엔터프라이즈 환경 내부에 유지될 때만 데이터를 보호합니다. <strong>이것은 접근 방식이 실제로 보호를 제공하는지 가장 일관되게 결정하는 아키텍처 부분입니다.</strong></p>
<p>매핑의 세 가지 속성이 유지되어야 합니다.</p>
<ol>
  <li><strong>엔터프라이즈의 독점적 통제 하에 유지됩니다.</strong> 매핑은 사실상 데이터를 재식별하는 키입니다. 환경을 벗어나면 보호는 새 위치가 제공하는 보호 수준으로 무너집니다. 데이터가 EU 리전이나 다른 정의된 경계에 있어야 하는 워크플로우에서 매핑은 동일한 경계 내, AI 엔드포인트가 아닌 소스 시스템과 함께 위치해야 합니다.</li>
  <li><strong>무결성이 보호됩니다.</strong> 매핑을 변조하면 LLM의 응답이 돌아왔을 때 복원되는 내용이 변경됩니다. 매핑을 수정할 수 있는 공격자는 출력에서 신원을 교체할 수 있습니다. 표준 관행은 매핑 자체에 무결성 검사를 적용하는 것입니다. 서명된 항목, 접근 감사 로그. 이를 통해 변조를 감지할 수 있습니다.</li>
  <li><strong>LLM 워크플로우와 별도로 접근이 제어됩니다.</strong> LLM 연동을 운영하는 팀은 매핑에 대한 읽기 접근 권한이 필요하지 않습니다. 복원 단계는 프로그래밍 방식으로 매핑에서 가져옵니다. 사람이 원래 값을 볼 필요가 없습니다. 두 접근 경로를 분리하면 매핑을 LLM 워크플로우 자체보다 더 엄격한 통제 하에 관리할 수 있습니다.</li>
</ol>
<p>저장 기술은 이러한 속성에 부차적입니다. 매핑은 전용 데이터베이스, 키-값 저장소, 암호화된 파일, 또는 하드웨어 기반 볼트에 있을 수 있습니다. 아키텍처 선택은 볼륨, 지연 요구 사항, 기존 인프라에 따라 달라집니다. <strong>중요한 것은 위의 세 가지 속성이 구성 가능한 옵션이 아닌 협상 불가의 설계 제약이라는 것입니다.</strong></p>

<h2>5. 토큰 일관성 — 동일 엔티티, 동일 토큰</h2>
<p>더 미묘한 설계 문제: 엔티티가 문서 전체에서 다른 방식으로 참조되더라도 동일한 엔티티가 일관되게 동일한 토큰을 받도록 보장하는 것입니다.</p>
<p>서비스 티켓은 <em>"고객"</em>, 그다음 <em>"Schmidt 씨"</em>, 그다음 <em>"Marlene"</em>, 그다음 <em>"가입자"</em>를 언급할 수 있습니다. 모두 동일한 사람을 참조합니다. 단순한 토크나이저는 네 가지 다른 언급을 보고 네 가지 다른 토큰을 생성하여, LLM이 이 모두가 하나의 엔티티를 참조한다는 것을 추적하는 능력을 방해합니다. <strong>돌아오는 요약이 그들을 네 사람으로 처리할 수 있습니다.</strong></p>
<p>이를 해결하려면 토큰화 이전에 <strong>엔티티 해소</strong>가 필요합니다. 문서에서 어떤 언급이 동일한 기저 엔티티를 참조하는지 식별하고, 모두 동일한 토큰으로 매핑되도록 보장합니다. 이것은 일반적으로 비사소한 문제입니다. 엔티티 해소는 그 자체로 연구 분야입니다. 하지만 실제로는 처리 가능합니다. 엔터프라이즈 문서에는 구조적 단서가 있기 때문입니다(자유 텍스트 언급을 연결하는 헤더의 고객 ID, 운영 로그의 공식 명명 규칙, 구조화된 레코드의 스키마 정의 관계).</p>
<p>일관성의 다른 절반은 워크플로우 범위 내의 문서 간에 있습니다. 두 티켓이 동일한 고객을 참조하고 워크플로우가 그들을 관련된 것으로 처리해야 한다면, 토큰화는 두 곳에서 고객에 대해 동일한 토큰을 생성해야 합니다. 이것이 앞서의 결정적-vs-무작위 선택이 상호작용하는 지점입니다. <strong>범위 내 결정적 방식이 LLM이 고객이 누구인지 알지 못하면서도 <em>"동일한 고객이 세 티켓에 나타난다"</em>를 볼 수 있게 하는 것입니다.</strong></p>
<p>잘 설계된 토큰화 레이어는 두 가지 일관성, 즉 문서 내와 범위 내를 변환의 일부로 처리합니다. 부차적인 것이 아닙니다. 언급별 토크나이저에 일관성을 소급 적용하는 팀은 일반적으로 모델 품질 문제처럼 보이지만 실제로는 데이터 준비 문제인 방식으로 워크플로우가 저하되는 것을 발견합니다.</p>

<h2>6. 추가 보호 레이어 — 토큰화만으로 충분하지 않을 때</h2>
<p>토큰화는 치환 문제를 처리합니다. 대부분의 워크플로우에서 엔터프라이즈의 독점적 통제 하에 매핑을 두고 잘 구현된 토큰화로 충분합니다. 일부 워크플로우에서는 위에 추가 보호 레이어를 추가할 가치가 있습니다.</p>
<p>추가 보호의 필요성은 잔여 위험이 토큰 자체가 아닌 <strong>토큰이 형성하는 패턴</strong>에 있을 때 발생합니다. 토큰화된 문서에는 충분한 구조적 정보, 즉 빈도, 공동 발생, 시퀀스, 비율이 포함되어 있어 정교한 상관 관계 분석기가 원시 값 없이도 엔티티를 재식별할 수 있습니다. 위험은 고카디날리티 데이터, 긴 시계열, 많은 토큰화된 출력이 시간이 지남에 따라 누적되는 워크플로우에 특히 관련이 있습니다.</p>
<p>표준 대응은 토큰화된 데이터에 적용되는 차분 프라이버시, k-익명성, 그리고 유사한 통계적 보호입니다. 각각은 일부 분석 정밀도를 희생하고 공격자가 토큰화된 출력에서 학습할 수 있는 양을 제한하는 제어된 방식으로 노이즈나 집계를 추가합니다. 트레이드오프가 가치 있는지는 위협 모델과 워크플로우의 노이즈 허용 범위에 따라 달라집니다.</p>
<p>대부분의 엔터프라이즈 AI 워크플로우에서 이 레이어는 선택 사항입니다. 데이터가 매우 민감하거나 볼륨이 높거나 데이터 태세가 심층 방어를 요구하는 워크플로우의 경우 복잡성을 감수할 가치가 있습니다. <strong>결정은 글로벌 설정이 아닌 워크플로우별로 내리는 것이 가장 좋습니다.</strong></p>

<h2>7. 토큰화하지 않아야 할 것</h2>
<p>종종 우연히 답해지는 최종 설계 질문: 무엇을 <em>토큰화하지 않아야</em> 하는가.</p>
<p>잘못된 것을 토큰화하면 보호를 개선하지 않고 AI 출력이 저하됩니다. 모든 고유 명사를 교체하는 토크나이저는 읽을 수 없는 문서를 생성합니다. 모든 숫자 필드를 교체하는 토크나이저는 분석 신호를 파괴합니다. 유혹은 공격적으로 접근하는 것입니다. <em>"개념적으로 민감할 수 있는 모든 것을 토큰화하라"</em>. 하지만 비용은 즉시 출력 품질에 나타납니다.</p>
<p>규율 잡힌 접근 방식은 엔터프라이즈 자체 용어로 민감도를 명시적으로 정의하고 해당 요소만 토큰화하는 것입니다. <strong>일반 PII 카테고리는 시작점이지 완전한 목록이 아닙니다.</strong> 내부 프로젝트 코드, 고객 세그먼트 식별자, 섹터별 참조, 즉 엔터프라이즈의 데이터 태세가 보호 대상으로 다루는 모든 것이 목록에 포함됩니다. 나머지는 그대로 유지됩니다.</p>
<p>목록은 버전 관리되어야 합니다. 민감한 것으로 간주되는 것이 시간이 지남에 따라 변하기 때문입니다. 또한 감사 가능해야 합니다. 워크플로우의 감사 검토는 무엇이 언제 어떤 정의 하에 토큰화되었는지 알고 싶어하기 때문입니다. <strong>정의 레이어는 이 아키텍처의 장기 운영 비용의 대부분이 있는 곳이며, 대부분의 팀이 초기에 충분히 투자하지 않는 곳입니다.</strong></p>

<h2>8. 워크플로우의 다음 단계</h2>
<p>토큰화는 외부 모델을 위해 문서를 준비합니다. 모델은 토큰화된 문서를 처리하고 토큰화된 응답을 반환합니다. <strong>응답 자체는 아직 워크플로우에 유용하지 않습니다.</strong> 출력이 사용자에게 도달하기 전에 토큰이 엔터프라이즈 환경 내부에서 원래 값으로 다시 매핑되어야 합니다.</p>
<p>그 복원 단계는 이 시리즈의 다음 아티클의 주제입니다. 이 아티클이 속한 더 넓은 패턴에 대해서는 <a href="/resources/learn/external-llm-on-sensitive-enterprise-data">민감한 엔터프라이즈 데이터에서 외부 LLM 실행하기</a>에 관한 필러 개요를 참조하십시오. 운영 워크플로우에서 마스킹과 삭제가 토큰화를 대체하지 못하는 이유는 <a href="/resources/learn/why-ai-stalls-on-operational-data">AI 워크플로우가 운영 데이터에서 막히는 이유</a>에 관한 아티클을 참조하십시오.</p>

## Section 04: Related Articles

Related articles
관련 아티클

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
AI 출력 복원: 모델 응답과 비즈니스 현실 사이의 마지막 구간

Running External LLMs on Data Your Company Can't Send Externally
외부로 전송할 수 없는 데이터에서 외부 LLM 실행하기

Why AI Workflows Stall at Tables, Tickets, and Operational Documents
AI 워크플로우가 테이블, 티켓, 운영 문서에서 막히는 이유

Breadcrumb: Tokenization for LLM Inputs
브레드크럼: LLM 입력을 위한 토큰화
