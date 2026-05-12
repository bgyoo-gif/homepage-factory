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
<!-- 일반 HTML 태그 + .callout + .takeaways만 사용 (기존 learn 아티클과 동일 패턴) -->

<h2>이 글이 다루는 범위</h2>
<p>이 글은 공공기관이 <strong>외부 상용 LLM(ChatGPT, Claude, Gemini 등)을 업무에 안전하게 활용</strong>하기 위한 도입 절차를 안내하는 실무 가이드입니다. N²SF 모델 2에 부합하는 도입 경로이며, 정보화담당관·보안담당관이 사업 추진 시 단계별로 무엇을 다뤄야 하는지를 정리합니다.</p>
<p>다음 경우는 이 글의 범위 밖이며, 별도 글을 참고하시기 바랍니다.</p>
<ul>
  <li><strong>sLLM 자체구축 검토 중</strong>: 「sLLM 자체구축, 정말 답일까」 글에서 의사결정 기준을 먼저 정리하시기 바랍니다.</li>
  <li><strong>외부 AI 전면 차단 검토 중</strong>: 「공공기관 생성형 AI 도입의 세 가지 길」 글에서 차단 방식의 장단점을 다룹니다.</li>
</ul>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>일정 수치에 관한 사전 안내</strong>: 본문에 등장하는 단계별 일정(예: "X주 추정")은 일반적 IT 사업 추진 일정에 기반한 <strong>대략적 참고치</strong>이며, 실제 도입 기간은 기관의 의사결정 속도, 보안성 검토 절차, 조달 방식, 결재 라인, 예산 사이클에 따라 크게 달라집니다. 자세한 지연 요인은 본문 9장에서 별도로 다룹니다.</div>
</div>

<h2>1. 시작하기 전에 — 흔한 오해 3가지</h2>
<p>본격적인 단계로 들어가기 전, 외부 LLM 도입 사업에서 자주 발생하는 오해 세 가지를 짚고 가겠습니다.</p>

<h3>오해 1 — "솔루션부터 보면 된다"</h3>
<p>가장 흔한 실수가 시나리오 정의·정보 분류 없이 솔루션 비교부터 시작하는 것입니다. 그러나 어떤 솔루션이 맞는지는 우리 기관이 <strong>무엇을 누가 어떻게 활용할 것인가</strong>에 따라 결정됩니다. 시나리오 정의 없이 솔루션을 선택하면 도입 후 활용 범위가 솔루션 한계에 갇히게 됩니다.</p>

<h3>오해 2 — "모델 2만 따르면 자동으로 안전하다"</h3>
<p>모델 2는 보안 통제 항목을 제시하지만, 실제 적용은 기관 환경에 맞춰 조정해야 합니다. 모든 통제를 일률 적용하는 것이 아니라, 「위치-주체-객체」 모델링과 자체 위험평가를 거쳐 적절한 통제를 선택·적용하는 것이 핵심입니다.</p>

<h3>오해 3 — "한 번 도입하면 끝이다"</h3>
<p>AI 도입은 1회성 사업이 아닙니다. 사용자 교육, 활용 모니터링, 정책 업데이트, 솔루션 갱신이 지속적으로 필요합니다. 마지막 운영 단계가 단순 마무리가 아니라 가장 중요한 단계인 이유입니다.</p>

<h2>2. N²SF 가이드라인의 5단계 절차</h2>
<p>외부 LLM 활용 도입은 N²SF 가이드라인이 제시하는 5단계 절차를 그대로 따릅니다. 이 5단계는 N²SF 기반의 모든 정보서비스 도입에 공통 적용되는 표준 절차입니다.</p>
<ol>
  <li><strong>준비(Prepare)</strong>: 활용 시나리오 정의, 정보서비스 구성요소 식별</li>
  <li><strong>위협 식별(Identify)</strong>: 정보 등급 분류, 「위치-주체-객체」 모델링, 보안위협 도출</li>
  <li><strong>보안대책 수립(Select)</strong>: 보안 요구사항 정의, 도입 방식 결정, 솔루션 평가</li>
  <li><strong>구현(Implement)</strong>: PoC, 솔루션 도입, 보안 통제 적용</li>
  <li><strong>운영(Operate)</strong>: 사용자 교육, 모니터링, 감사, 정기 재평가</li>
</ol>
<p>이 5단계 중 첫 두 단계(준비, 위협 식별)는 <strong>모든 도입 시나리오에서 공통</strong>으로 수행됩니다. 세 번째 단계(보안대책 수립)에서 활용 범위에 따라 <strong>시나리오 A(O 등급만 활용)와 시나리오 B(S 등급 포함 활용)로 분기</strong>됩니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg">
    <title>공공기관 외부 LLM 활용 도입 로드맵 — 분기 구조</title>
    <desc>공통 단계와 시나리오 A·B로 분기되는 도입 로드맵 흐름도</desc>
    <defs>
      <marker id="brArrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">N²SF 5단계 절차 + 시나리오 분기 구조</text>

    <rect x="40" y="60" width="640" height="170" rx="12" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5" stroke-dasharray="4 4" fill-opacity="0.5"/>
    <text x="56" y="82" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf">공통 단계 — N²SF 5단계 중 1~2단계</text>

    <rect x="120" y="100" width="200" height="100" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="220" y="124" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#5b4fe9" text-anchor="middle">N²SF 1단계 — 준비</text>
    <text x="220" y="146" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#3b2fbf" text-anchor="middle">활용 시나리오 정의</text>
    <text x="220" y="164" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9" text-anchor="middle">부서·업무·정보·기대효과</text>
    <text x="220" y="186" font-family="Inter, sans-serif" font-size="10" fill="#6b7280" text-anchor="middle">참고치: 2~3주</text>

    <text x="340" y="156" font-family="Inter, sans-serif" font-size="16" fill="#5b4fe9" text-anchor="middle">→</text>

    <rect x="360" y="100" width="240" height="100" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="480" y="124" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#5b4fe9" text-anchor="middle">N²SF 2단계 — 위협 식별</text>
    <text x="480" y="146" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#3b2fbf" text-anchor="middle">정보 등급 분류 + 모델링</text>
    <text x="480" y="164" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9" text-anchor="middle">C/S/O 평가, 「위치-주체-객체」</text>
    <text x="480" y="186" font-family="Inter, sans-serif" font-size="10" fill="#6b7280" text-anchor="middle">참고치: 5~7주</text>

    <rect x="240" y="260" width="240" height="60" rx="30" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="360" y="286" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b97606" text-anchor="middle">분기점 — 활용 범위 결정</text>
    <text x="360" y="306" font-family="Inter, sans-serif" font-size="11" fill="#b97606" text-anchor="middle">어느 등급의 정보를 외부 LLM에 활용할 것인가?</text>

    <line x1="480" y1="200" x2="480" y2="240" stroke="#5b4fe9" stroke-width="1.5"/>
    <line x1="480" y1="240" x2="360" y2="240" stroke="#5b4fe9" stroke-width="1.5"/>
    <line x1="360" y1="240" x2="360" y2="258" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#brArrow1)"/>

    <line x1="240" y1="320" x2="160" y2="350" stroke="#0ea5a4" stroke-width="1.5" marker-end="url(#brArrow1)"/>
    <line x1="480" y1="320" x2="560" y2="350" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#brArrow1)"/>

    <rect x="40" y="350" width="320" height="340" rx="12" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5" stroke-dasharray="4 4" fill-opacity="0.5"/>
    <text x="56" y="372" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">시나리오 A — O 등급만 활용</text>
    <text x="56" y="390" font-family="Inter, sans-serif" font-size="11" fill="#0ea5a4">모델 2 표준 절차</text>

    <rect x="60" y="404" width="280" height="56" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="76" y="422" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#0ea5a4">N²SF 3단계 — 보안대책 수립</text>
    <text x="76" y="440" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">모델 2 준수 솔루션 평가·선정</text>
    <text x="76" y="454" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 3~4주</text>

    <rect x="60" y="470" width="280" height="56" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="76" y="488" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#0ea5a4">N²SF 4단계 — 구현</text>
    <text x="76" y="506" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">PoC 및 도입</text>
    <text x="76" y="520" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 3~4주</text>

    <rect x="60" y="536" width="280" height="56" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="76" y="554" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#0ea5a4">N²SF 5단계 — 운영</text>
    <text x="76" y="572" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#0b7f7e">운영 체계 구축</text>
    <text x="76" y="586" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 3~4주</text>

    <rect x="60" y="610" width="280" height="46" rx="8" fill="#0ea5a4" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="200" y="628" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#fff" text-anchor="middle">작업 시간 추정: 약 4개월</text>
    <text x="200" y="644" font-family="Inter, sans-serif" font-size="10" fill="#fff" text-anchor="middle">행정 절차 별도 (보안성 검토·조달 등)</text>

    <rect x="360" y="350" width="320" height="340" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5" stroke-dasharray="4 4" fill-opacity="0.5"/>
    <text x="376" y="372" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b97606">시나리오 B — S 등급도 활용</text>
    <text x="376" y="390" font-family="Inter, sans-serif" font-size="11" fill="#b97606">보호 레이어 + 자체 위험평가</text>

    <rect x="380" y="404" width="280" height="56" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="396" y="422" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606">N²SF 3단계 — 보안대책 수립</text>
    <text x="396" y="440" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b97606">보호 레이어 평가 + 자체 위험평가</text>
    <text x="396" y="454" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 7~10주</text>

    <rect x="380" y="470" width="280" height="56" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="396" y="488" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606">N²SF 4단계 — 구현</text>
    <text x="396" y="506" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b97606">PoC + 보호 강도 검증</text>
    <text x="396" y="520" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 4~6주</text>

    <rect x="380" y="536" width="280" height="56" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="396" y="554" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606">N²SF 5단계 — 운영</text>
    <text x="396" y="572" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#b97606">운영 체계 + 위험 재평가 체계</text>
    <text x="396" y="586" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">참고치: 3~4주</text>

    <rect x="380" y="610" width="280" height="46" rx="8" fill="#f59e0b" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="520" y="628" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#fff" text-anchor="middle">작업 시간 추정: 약 6~8개월</text>
    <text x="520" y="644" font-family="Inter, sans-serif" font-size="10" fill="#fff" text-anchor="middle">행정 절차 별도 (법무 자문·보안성 검토 등)</text>

    <text x="360" y="700" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">※ 본 일정 수치는 일반적 IT 사업 추진 일정 기반의 참고치. 실제 일정은 기관 환경에 따라 크게 변동 가능.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 1. N²SF 5단계 절차에 매핑된 외부 LLM 활용 도입 로드맵</figcaption>
</figure>

<h2>3. N²SF 1단계 — 준비: 활용 시나리오 정의</h2>
<p>가장 먼저 해야 할 일은 <strong>"우리 기관이 외부 LLM을 어떤 업무에 어떻게 활용할 것인가"</strong>를 구체적으로 정의하는 것입니다. 추상적인 "AI 도입"이 아니라, 부서·업무·기대효과를 분명히 합니다.</p>
<p>활용 시나리오 정의서에 포함될 내용입니다.</p>
<ul>
  <li><strong>대상 부서·업무</strong>: 어느 부서가 어느 업무에 활용할 것인가</li>
  <li><strong>활용 유형</strong>: 문서 작성 보조, 요약, 번역, 분석, 검색 등</li>
  <li><strong>입력 정보 예시</strong>: 어떤 정보를 LLM에 입력하는가 (3~5개 구체적 사례)</li>
  <li><strong>출력 활용 방식</strong>: LLM 응답을 어떻게 사용하는가</li>
  <li><strong>기대 효과</strong>: 정성·정량적 목표 (예: 보고서 초안 작성 시간 30% 단축)</li>
  <li><strong>예상 사용자 규모</strong>: 도입 1차 시 사용자 수, 확대 계획</li>
</ul>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body">시나리오 정의는 정보화담당관실 혼자 하기 어렵습니다. 활용 부서의 실무자 1~2명을 워크숍에 초대해서 함께 작성하시기 바랍니다. 실무자가 참여하지 않은 시나리오는 도입 후 실제 활용으로 이어지지 않습니다.</div>
</div>

<p>이 단계의 작업 시간은 워크숍을 집중적으로 진행할 경우 약 2~3주 정도가 일반적이지만, 부서 간 합의나 결재 절차가 추가되면 더 길어질 수 있습니다.</p>

<h2>4. N²SF 2단계 — 위협 식별: 등급 분류와 모델링</h2>
<p>N²SF의 두 번째 단계는 정보 등급 분류와 「위치-주체-객체」 모델링을 통해 보안위협을 식별하는 것입니다. 모델 2 문서는 이 단계의 분석 절차를 구체적으로 제시하고 있으므로, 그대로 따라가시면 됩니다.</p>

<h3>4.1 정보 등급 분류</h3>
<p>1단계에서 정의한 입력 정보 예시들을 하나씩 <strong>C/S/O 등급</strong>으로 평가합니다. 분류 기준은 N²SF 가이드라인의 등급 정의를 따르되, 기관 내부 정보보안 정책과 정렬해야 합니다.</p>
<p>산출물은 다음과 같습니다.</p>
<ul>
  <li><strong>정보자산 등급 분류표</strong>: 각 정보 항목별 C/S/O 분류</li>
  <li><strong>분류 근거</strong>: 왜 그 등급으로 분류했는가의 논거</li>
  <li><strong>경계 사례 정리</strong>: 등급이 모호한 정보들에 대한 판단 기록</li>
</ul>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body">등급 분류는 보수적으로 시작해서 점진적으로 조정하는 것이 안전합니다. 처음에는 의심스러운 정보를 모두 S로 분류하고, 운영하면서 명확히 O로 재분류 가능한 정보를 식별하는 방식이 일반적입니다.</div>
</div>

<h3>4.2 「위치-주체-객체」 모델링</h3>
<p>등급 분류 결과를 바탕으로 활용 시나리오를 N²SF의 「위치-주체-객체」 모델로 분석합니다. 이 작업은 모델 2 문서의 분석 절차를 그대로 따라가시면 됩니다.</p>
<ul>
  <li><strong>위치(Domain)</strong>: 정보가 처리·저장되는 영역의 등급 (대부분 기관 전산망 S)</li>
  <li><strong>주체(Subject)</strong>: 사용자 단말의 등급 (대부분 업무 단말 S)</li>
  <li><strong>객체(Object)</strong>: 외부 LLM 서비스의 등급 (O)</li>
</ul>
<p>이 모델링과 등급 분류 결과를 종합한 <strong>보안 분석 보고서</strong>가 이 단계의 핵심 산출물이며, 「정보 생산·저장」 및 「정보 이동」 보안원칙에 비추어 어떤 보안 통제가 필요한지를 도출합니다.</p>
<p>두 작업(등급 분류 + 모델링)의 작업 시간은 합쳐서 약 5~7주 정도가 일반적입니다. 다만 정보 자산의 양이 많거나 부서 간 합의가 필요한 경우 더 길어질 수 있습니다.</p>

<h2>5. 분기점 — 시나리오 A vs B 결정</h2>
<p>위협 식별 단계가 끝나면 결정의 순간이 옵니다. <strong>"어느 등급의 정보까지 외부 LLM 활용에 포함할 것인가"</strong>에 따라 두 갈래로 갈라집니다.</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>시나리오 A — O 등급만</th>
      <th>시나리오 B — S 등급도 포함</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">활용 가능 정보</th>
      <td>공개·일반 정보 한정</td>
      <td>보호 처리 후 민감 정보도 가능</td>
    </tr>
    <tr>
      <th scope="row">활용 시나리오 폭</th>
      <td>좁음 (보도자료, 일반 자료 검색 등)</td>
      <td>넓음 (내부 문서 분석, 정책 검토 등)</td>
    </tr>
    <tr>
      <th scope="row">보안 솔루션</th>
      <td>모델 2 준수 AI 연계체계</td>
      <td>모델 2 + 차등정보보호 보호 레이어</td>
    </tr>
    <tr>
      <th scope="row">자체 위험평가</th>
      <td>표준 절차</td>
      <td>추가 위험평가 필수</td>
    </tr>
    <tr>
      <th scope="row">작업 시간 추정</th>
      <td>약 4개월</td>
      <td>약 6~8개월</td>
    </tr>
    <tr>
      <th scope="row">적합 기관</th>
      <td>외부 활용 우선 시작, 빠른 도입</td>
      <td>업무 효율 극대화, 시간 여유</td>
    </tr>
  </tbody>
</table>

<p>어느 시나리오가 우리 기관에 맞는지는 다음 질문으로 판단할 수 있습니다.</p>
<ul>
  <li>활용하고 싶은 업무 중 O 등급 정보로만 가능한 비중이 어느 정도인가?</li>
  <li>S 등급 활용이 가능해질 때 추가 가치가 도입 비용·기간을 정당화하는가?</li>
  <li>자체 위험평가를 수행할 조직 역량(또는 외부 자문 예산)이 있는가?</li>
  <li>도입까지 가용 시간이 얼마나 되는가?</li>
</ul>
<p>두 시나리오를 <strong>단계적으로 채택</strong>하는 것도 가능합니다. 먼저 시나리오 A로 빠르게 시작해서 운영 노하우를 쌓고, 6~12개월 후 시나리오 B로 확장하는 경로입니다. 보수적이지만 안전한 접근법입니다.</p>

<h2>6. 시나리오 A 트랙 — O 등급만 활용</h2>

<h3>6.1 N²SF 3단계 — 보안대책 수립: 모델 2 준수 솔루션 평가</h3>
<p>시나리오 A에서 필요한 솔루션은 <strong>모델 2의 AI 연계체계 요건을 충족하는 솔루션</strong>입니다. 평가 기준은 다음과 같습니다.</p>
<ul>
  <li><strong>인증 및 자격</strong>: 조달청 혁신제품 지정, GS 인증, KISA 신속확인 등</li>
  <li><strong>모델 2 통제 항목 충족도</strong>: 21개 보안위협 대응, 50여 개 보안통제 항목 매핑</li>
  <li><strong>이용자·단말 인증</strong>: SSO 연동, 다단계 인증, 비인가 접근 차단</li>
  <li><strong>콘텐츠 통제</strong>: 보안등급 식별, 비인가 자료유형 차단</li>
  <li><strong>운영 관리</strong>: 감사 로그, 사용 모니터링, 이상 행동 탐지</li>
  <li><strong>외부 LLM 지원</strong>: 어떤 LLM과 연동 가능한지, 모델 교체 용이성</li>
</ul>
<p>RFP에는 위 기준이 모두 명시되어야 하며, 후보 솔루션은 2~3개로 좁혀 비교하는 것이 효율적입니다. 작업 시간은 약 3~4주 정도가 일반적입니다.</p>

<h3>6.2 N²SF 4단계 — 구현: PoC 및 도입</h3>
<p>서면 평가만으로는 솔루션의 실제 적합성을 판단하기 어렵습니다. 2~3개 후보 솔루션에 대해 <strong>제한적 환경에서의 PoC(Proof of Concept)</strong>를 수행합니다.</p>
<p>PoC 검증 항목:</p>
<ul>
  <li><strong>기능 검증</strong>: 정의한 활용 시나리오에서 실제 작동 여부</li>
  <li><strong>보안 검증</strong>: 보안 통제 항목들이 실제로 적용되는지 테스트</li>
  <li><strong>성능 검증</strong>: 응답 속도, 동시 사용자 처리 등</li>
  <li><strong>운영 편의성</strong>: 관리자 UI, 사용자 UI의 직관성</li>
</ul>
<p>PoC 작업 시간은 약 3~4주 정도지만, 솔루션 환경 설정과 데이터 준비에 추가 시간이 필요할 수 있습니다.</p>

<h3>6.3 N²SF 5단계 — 운영 체계 구축</h3>
<p>솔루션 도입과 함께 운영 체계를 마련합니다.</p>
<ul>
  <li><strong>사용자 교육</strong>: 활용 가능 범위, 금지 사항, 사고 시 대응 절차</li>
  <li><strong>모니터링 체계</strong>: 사용량 추이, 이상 행동 탐지 기준</li>
  <li><strong>감사 절차</strong>: 정기 감사 일정, 감사 항목 정의</li>
  <li><strong>거버넌스</strong>: 의사결정 체계, 사고 대응 위원회 구성</li>
  <li><strong>피드백 채널</strong>: 사용자 피드백 수집, 개선 반영 절차</li>
</ul>
<p>작업 시간은 약 3~4주 정도가 일반적이지만, 사용자 교육 범위와 거버넌스 합의 정도에 따라 달라집니다.</p>

<h2>7. 시나리오 B 트랙 — S 등급도 활용</h2>

<h3>7.1 N²SF 3단계 — 보안대책 수립: 보호 레이어 평가 + 자체 위험평가</h3>
<p>시나리오 B의 3단계는 시나리오 A보다 복잡합니다. 두 가지 작업이 함께 진행됩니다.</p>
<p><strong>(1) 보호 레이어 솔루션 평가</strong>: 시나리오 A의 모델 2 준수 요건에 더해 <strong>S 등급 정보를 보호 처리할 수 있는 기술</strong>을 평가합니다.</p>
<ul>
  <li><strong>보호 기법의 종류</strong>: 단순 마스킹인가, K-익명성인가, 차등정보보호(DP)인가</li>
  <li><strong>보호 기법의 학술적 근거</strong>: 수학적·실험적 검증 자료</li>
  <li><strong>재식별 공격 검증</strong>: 보호 처리된 데이터의 재식별 공격 방어 검증</li>
  <li><strong>데이터 유용성 유지</strong>: 보호 처리 후 AI 활용 품질(utility) 측정 결과</li>
  <li><strong>품질 인증</strong>: 개인정보보호위원회 품질 기준 등 외부 검증</li>
</ul>
<p>이 기준이 충족되지 않는 솔루션은 시나리오 B에 부적합합니다. 단순 마스킹 기반 솔루션은 N²SF 정합성 논증이 약하므로, S 등급 활용에 권장되지 않습니다.</p>
<p><strong>(2) 자체 위험평가 수행</strong>: 모델 2가 다루지 않는 S 등급 활용 시나리오에 대해 기관이 자체적으로 다음을 정리합니다.</p>
<ul>
  <li><strong>위험 식별</strong>: S 정보 보호 처리·외부 전송 과정의 위험 요인</li>
  <li><strong>보호 기법의 적정성 논거</strong>: 왜 이 보호 기법이 충분한가</li>
  <li><strong>잔여 위험</strong>: 보호 후에도 남는 위험과 그 수용 근거</li>
  <li><strong>거버넌스</strong>: 위험 모니터링·재평가 체계</li>
</ul>

<div class="callout">
  <div class="callout__icon">⚠️</div>
  <div class="callout__body"><strong>법무·보안 자문 권장</strong>: 자체 위험평가는 감사 대응에 직접 사용되는 문서이므로, 외부 법무 자문 또는 정보보호 전문가의 감수를 받는 것을 강하게 권장합니다. 감수자 명단이 명시된 평가서는 신뢰도가 결정적으로 달라집니다.</div>
</div>

<p>두 작업을 합친 작업 시간은 약 7~10주 정도가 일반적이지만, 외부 자문 일정 확보가 큰 변수입니다.</p>

<h3>7.2 N²SF 4단계 — 구현: PoC + 보호 강도 검증</h3>
<p>시나리오 B의 PoC는 시나리오 A의 기능·보안·성능 검증에 더해 <strong>보호 강도 검증</strong>이 추가됩니다.</p>
<ul>
  <li><strong>보호 처리 정확도</strong>: 민감정보 식별·보호의 정확도</li>
  <li><strong>재식별 공격 시뮬레이션</strong>: 보호된 데이터로부터 원본 추론 가능성 시험</li>
  <li><strong>AI 활용 품질</strong>: 보호 처리 후 LLM 응답 품질 측정</li>
  <li><strong>예외 상황 처리</strong>: 보호 실패 시 차단·알림 정상 작동 확인</li>
</ul>
<p>작업 시간은 약 4~6주 정도가 일반적이지만, 보호 강도 검증의 깊이에 따라 더 길어질 수 있습니다.</p>

<h3>7.3 N²SF 5단계 — 운영 + 위험 재평가 체계</h3>
<p>시나리오 A의 운영 체계 구축 항목에 더해 다음을 추가합니다.</p>
<ul>
  <li><strong>보호 정책 정기 검토</strong>: 보호 기법·키워드·임계값의 주기적 갱신</li>
  <li><strong>위험 모니터링</strong>: 보호 우회 시도, 비정상 사용 패턴 탐지</li>
  <li><strong>위험 재평가 절차</strong>: 6~12개월 주기 자체 위험평가 갱신</li>
</ul>
<p>작업 시간은 약 3~4주 정도지만, 위험 재평가 체계 설계에 추가 시간이 필요할 수 있습니다.</p>

<h2>8. 시나리오별 작업 시간 비교</h2>
<p>두 시나리오의 단계별 작업 시간을 간트차트로 비교하면 다음과 같습니다. 다시 강조하지만, 이는 <strong>작업 시간만의 추정치</strong>이며 행정 절차는 포함되어 있지 않습니다.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg">
    <title>시나리오 A vs B 작업 시간 비교</title>
    <desc>시나리오 A(O 등급만)와 시나리오 B(S 등급 포함)의 단계별 작업 시간 비교 간트차트</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">시나리오별 작업 시간 비교 (행정 절차 제외)</text>

    <rect x="180" y="60" width="60" height="20" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="210" y="74" font-family="Inter, sans-serif" font-size="11" fill="#3b2fbf" text-anchor="middle">공통</text>
    <rect x="250" y="60" width="60" height="20" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>
    <text x="280" y="74" font-family="Inter, sans-serif" font-size="11" fill="#0b7f7e" text-anchor="middle">시나리오 A</text>
    <rect x="320" y="60" width="60" height="20" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="350" y="74" font-family="Inter, sans-serif" font-size="11" fill="#b97606" text-anchor="middle">시나리오 B</text>

    <line x1="160" y1="110" x2="160" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="225" y1="110" x2="225" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="290" y1="110" x2="290" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="355" y1="110" x2="355" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="420" y1="110" x2="420" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="485" y1="110" x2="485" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="550" y1="110" x2="550" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="615" y1="110" x2="615" y2="470" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>

    <text x="160" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M1</text>
    <text x="225" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M2</text>
    <text x="290" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M3</text>
    <text x="355" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M4</text>
    <text x="420" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M5</text>
    <text x="485" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M6</text>
    <text x="550" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M7</text>
    <text x="615" y="104" font-family="Inter, sans-serif" font-size="10" fill="#3a3d5e" text-anchor="middle">M8</text>

    <text x="30" y="138" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">1단계 — 준비</text>
    <rect x="130" y="124" width="30" height="20" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>

    <text x="30" y="176" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">2단계 — 위협 식별</text>
    <rect x="148" y="162" width="72" height="20" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>

    <line x1="40" y1="200" x2="700" y2="200" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="30" y="222" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#0b7f7e">시나리오 A (O 등급)</text>

    <text x="30" y="248" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">3단계 — 솔루션 평가</text>
    <rect x="220" y="234" width="50" height="20" rx="4" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>

    <text x="30" y="276" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">4단계 — PoC</text>
    <rect x="270" y="262" width="50" height="20" rx="4" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>

    <text x="30" y="304" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">5단계 — 운영 구축</text>
    <rect x="320" y="290" width="50" height="20" rx="4" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="0.5"/>

    <line x1="370" y1="320" x2="370" y2="327" stroke="#0ea5a4" stroke-width="2"/>
    <text x="372" y="322" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#0b7f7e">작업 시간 4개월 추정</text>

    <line x1="40" y1="340" x2="700" y2="340" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="30" y="362" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#b97606">시나리오 B (S 등급 포함)</text>

    <text x="30" y="388" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">3단계 — 평가+위험평가</text>
    <rect x="220" y="374" width="100" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>

    <text x="30" y="416" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">4단계 — PoC+보호 검증</text>
    <rect x="320" y="402" width="65" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>

    <text x="30" y="444" font-family="Inter, sans-serif" font-size="11" fill="#0f1130">5단계 — 운영 구축</text>
    <rect x="385" y="430" width="50" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>

    <line x1="435" y1="460" x2="435" y2="467" stroke="#f59e0b" stroke-width="2"/>
    <text x="437" y="462" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#b97606">작업 시간 6개월 추정</text>

    <text x="40" y="498" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">※ 위 차트는 작업 시간만 표시한 참고치입니다. 실제 도입 일정은 보안성 검토·조달·결재 등 행정 절차를</text>
    <text x="40" y="514" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">포함하면 1.5~2배 가까이 늘어날 수 있습니다. 다음 9장을 참고하시기 바랍니다.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">도식 2. 시나리오 A vs B 작업 시간 비교 (행정 절차 제외)</figcaption>
</figure>

<h2>9. 실제 도입 기간을 늘리는 행정 절차</h2>
<p>앞서 제시한 4개월·6~8개월 추정은 <strong>순수 작업 시간만</strong>을 가정한 수치입니다. 실제 공공기관 도입에서는 다음 행정 절차가 추가되며, 이 절차들이 전체 일정의 절반 이상을 차지하는 경우도 흔합니다.</p>

<h3>9.1 예산 사이클</h3>
<p>공공기관 예산은 통상 7~8월에 다음 연도 예산이 편성됩니다. 만약 다음 연도부터 본격 도입을 원한다면, 6월 이전에 N²SF 1~2단계(준비, 위협 식별)를 완료해두는 것이 권장됩니다. 이렇게 하면 정확한 예산 산정이 가능하고, 예산 통과 즉시 3단계부터 진행할 수 있습니다. 예산 편성 시점과 도입 시점의 간극으로 인해 사업이 1년 미뤄지는 경우가 흔합니다.</p>

<h3>9.2 보안성 검토</h3>
<p>기관 내부 정보보안 책임관의 보안성 검토는 단계별로 여러 번 발생할 수 있습니다. 특히 시나리오 B의 자체 위험평가 결과에 대한 검토는 신중히 이루어지며, 검토에만 4~12주가 소요되는 경우가 있습니다.</p>

<h3>9.3 조달 절차</h3>
<p>솔루션 도입은 공공조달 절차를 거쳐야 합니다. 조달청 혁신제품 지정 솔루션을 활용하면 절차가 간소화되지만, 일반 조달의 경우 RFP 공고·평가·계약 체결까지 8~16주가 일반적입니다.</p>

<h3>9.4 결재 라인</h3>
<p>주요 단계마다 기관장 또는 부기관장 결재가 필요합니다. 단순 절차로 보이지만, 결재 라인의 일정과 추가 보완 요청이 발생하면 각 단계마다 1~3주가 추가될 수 있습니다.</p>

<h3>9.5 외부 자문 일정</h3>
<p>시나리오 B에서 권장하는 법무·정보보호 외부 자문은 자문기관의 일정에 따라 조정해야 하며, 자문 결과 받기까지 4~8주가 필요한 경우가 있습니다.</p>

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>현실적 도입 일정 추정</strong>: 작업 시간(시나리오 A 4개월 / 시나리오 B 6~8개월)에 행정 절차를 합산하면, 실제 도입 완료까지는 <strong>시나리오 A는 6~10개월, 시나리오 B는 10~14개월</strong> 정도가 보다 현실적인 추정입니다. 사업 계획 수립 시 이 점을 반드시 고려하시기 바랍니다.</div>
</div>

<div class="takeaways">
  <div class="takeaways__label">도입 일정을 단축하는 방법</div>
  <ul>
    <li>N²SF 1~2단계(준비, 위협 식별)를 예산 편성 전에 미리 완료해둡니다</li>
    <li>조달청 혁신제품 지정 솔루션을 우선 검토합니다 (조달 절차 간소화)</li>
    <li>외부 자문 일정은 사업 시작 시점에 미리 확보해둡니다</li>
    <li>1단계 워크숍에 결재 라인의 의사결정자를 함께 참여시킵니다</li>
    <li>시나리오 A로 빠르게 도입 후 시나리오 B로 확장하는 단계적 접근을 검토합니다</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>꼭 시나리오 A부터 시작해야 하나요?</h3>
<p>반드시 그렇지는 않습니다. 시나리오 B에서 처음부터 시작하는 것도 가능합니다. 다만 시나리오 B는 자체 위험평가와 보호 강도 검증이 추가되어 도입 기간이 길고, 운영 거버넌스의 부담도 큽니다. 조직 역량이 검증되지 않은 첫 도입 사업에서는 시나리오 A로 시작해 운영 노하우를 쌓은 후 확장하는 것이 안전합니다.</p>

<h3>자체 위험평가는 누가 작성해야 하나요?</h3>
<p>기관 정보보안 책임관이 주관하고, 솔루션 벤더·외부 법무·정보보호 전문가가 자문하는 형태가 일반적입니다. 감사 대응에 직접 사용되는 문서이므로, 외부 감수자 명단을 명시하면 신뢰도가 크게 향상됩니다.</p>

<h3>예산 편성 시점과 도입 일정을 어떻게 맞춰야 하나요?</h3>
<p>공공기관 예산은 통상 7~8월에 다음 연도 예산이 편성됩니다. 만약 다음 연도부터 본격 도입을 원한다면, 6월 이전에 N²SF 1~2단계(준비, 위협 식별)를 완료해두는 것이 권장됩니다. 이렇게 하면 정확한 예산 산정이 가능하고, 예산 통과 즉시 3단계부터 진행할 수 있습니다.</p>

<h3>활용 시나리오를 어떻게 구체화해야 하나요?</h3>
<p>"AI로 업무 효율화"라는 추상적 표현이 아니라, 다음과 같이 구체적으로 작성합니다. 예: "기획팀에서 정책 보도자료 초안 작성 시 기존 보도자료 데이터베이스를 참고해 초안 1차 안을 생성하는 데 활용. 월 30건 처리 예상. 활용 정보는 모두 외부 공개된 보도자료(O 등급)." 이 정도의 구체성이 있어야 등급 분류와 솔루션 평가 기준이 명확해집니다.</p>

<h3>PoC는 몇 개 솔루션을 대상으로 해야 하나요?</h3>
<p>서면 평가로 2~3개로 좁힌 뒤 모두 PoC를 진행하는 것이 가장 효과적입니다. 1개만 PoC하면 비교가 불가능하고, 4개 이상은 시간·자원 부담이 큽니다. 단, 시나리오 B의 경우 보호 레이어 솔루션 시장이 좁아서 후보가 2개에 그칠 수 있습니다.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「국가 망 보안체계(N²SF) 보안 가이드라인」, 2024</li>
  <li>국가정보원, 국가보안기술연구소(NSR), 「국가 망 보안체계 보안 가이드라인 — 정보서비스 모델 해설서: 모델 2. 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>「전자정부법」, 「국가정보보안기본지침」</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"꼭 시나리오 A부터 시작해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"반드시 그렇지는 않습니다. 시나리오 B에서 처음부터 시작하는 것도 가능합니다. 다만 시나리오 B는 자체 위험평가와 보호 강도 검증이 추가되어 도입 기간이 길고, 운영 거버넌스의 부담도 큽니다. 조직 역량이 검증되지 않은 첫 도입 사업에서는 시나리오 A로 시작해 운영 노하우를 쌓은 후 확장하는 것이 안전합니다."}}, {"@type":"Question","name":"자체 위험평가는 누가 작성해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"기관 정보보안 책임관이 주관하고, 솔루션 벤더·외부 법무·정보보호 전문가가 자문하는 형태가 일반적입니다. 감사 대응에 직접 사용되는 문서이므로, 외부 감수자 명단을 명시하면 신뢰도가 크게 향상됩니다."}}, {"@type":"Question","name":"예산 편성 시점과 도입 일정을 어떻게 맞춰야 하나요?","acceptedAnswer":{"@type":"Answer","text":"공공기관 예산은 통상 7~8월에 다음 연도 예산이 편성됩니다. 만약 다음 연도부터 본격 도입을 원한다면, 6월 이전에 N²SF 1~2단계(준비, 위협 식별)를 완료해두는 것이 권장됩니다. 이렇게 하면 정확한 예산 산정이 가능하고, 예산 통과 즉시 3단계부터 진행할 수 있습니다."}}, {"@type":"Question","name":"활용 시나리오를 어떻게 구체화해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"AI로 업무 효율화라는 추상적 표현이 아니라, 다음과 같이 구체적으로 작성합니다. 예: 기획팀에서 정책 보도자료 초안 작성 시 기존 보도자료 데이터베이스를 참고해 초안 1차 안을 생성하는 데 활용. 월 30건 처리 예상. 활용 정보는 모두 외부 공개된 보도자료(O 등급). 이 정도의 구체성이 있어야 등급 분류와 솔루션 평가 기준이 명확해집니다."}}, {"@type":"Question","name":"PoC는 몇 개 솔루션을 대상으로 해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"서면 평가로 2~3개로 좁힌 뒤 모두 PoC를 진행하는 것이 가장 효과적입니다. 1개만 PoC하면 비교가 불가능하고, 4개 이상은 시간·자원 부담이 큽니다. 단, 시나리오 B의 경우 보호 레이어 솔루션 시장이 좁아서 후보가 2개에 그칠 수 있습니다."}} ] }`

export default function PublicSectorExternalLlmAdoptionRoadmap({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 분기 로드맵",
  lead = "정보화담당관 관점에서 외부 LLM 도입을 분기별 5단계로 정리합니다. 시나리오 A(공개 활용) 4개월 vs 시나리오 B(민감 업무) 6~8개월 로드맵 비교.",
  category = "정책 분석",
  readTime = "20분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "공공기관의 외부 LLM 도입은 「위치-주체-객체」를 보안등급별로 평가하는 N²SF 정합성에서 출발합니다. 정보화담당관은 5단계(준비·위협 식별·연계체계 설계·통제 적용·검증)를 분기별로 운영하면서, 시나리오 A(O 등급 공개 활용)는 4개월, 시나리오 B(S 등급 민감 업무)는 6~8개월의 로드맵으로 분기하는 것이 일반적입니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/public-sector-external-llm-adoption-roadmap",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "ko-KR",
  breadcrumbLabel = "공공기관 외부 LLM 활용 도입 가이드",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
  related1Href = "/resources/learn/n2sf-model-2-explained",
  related2Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related2Href = "/resources/learn/public-sector-genai-three-approaches",
  related3Title = "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지",
  related3Href = "/resources/learn/public-sector-genai-five-stuck-points",
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

addPropertyControls(PublicSectorExternalLlmAdoptionRoadmap, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "공공기관 외부 LLM 활용 도입 가이드 — 정보화담당관을 위한 분기 로드맵" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "정보화담당관 관점에서 외부 LLM 도입을 분기별 5단계로 정리합니다. 시나리오 A(공개 활용) 4개월 vs 시나리오 B(민감 업무) 6~8개월 로드맵 비교.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "정책 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "20분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "공공기관의 외부 LLM 도입은 「위치-주체-객체」를 보안등급별로 평가하는 N²SF 정합성에서 출발합니다. 정보화담당관은 5단계(준비·위협 식별·연계체계 설계·통제 적용·검증)를 분기별로 운영하면서, 시나리오 A(O 등급 공개 활용)는 4개월, 시나리오 B(S 등급 민감 업무)는 6~8개월의 로드맵으로 분기하는 것이 일반적입니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/public-sector-external-llm-adoption-roadmap" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "공공기관 외부 LLM 활용 도입 가이드" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/n2sf-model-2-explained" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "공공기관 생성형 AI 도입 시 가장 많이 막히는 5가지" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/public-sector-genai-five-stuck-points" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
