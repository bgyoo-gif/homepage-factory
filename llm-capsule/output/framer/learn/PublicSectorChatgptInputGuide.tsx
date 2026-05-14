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

<h2>1. 상황 — "ChatGPT 구독은 했는데 직원들이 잘 안 쓴다"</h2>

<p>2025년 이후 공공기관에서 외부 상용 LLM(ChatGPT·Claude·Gemini 등)을 정식 구독하는 사례가 빠르게 늘었습니다. 나라장터 입찰공고 211건 분석에서도 "외부 LLM 구독·임차" 패턴이 16건(약 8%) 확인됐고, 2025년 1~4월 대비 2026년 1~4월에 +300% 증가했습니다.</p>

<p>그런데 도입 6개월~1년 시점의 기관 담당자가 반복해서 마주치는 상황이 있습니다.</p>

<ul>
  <li>"ChatGPT는 깔아뒀는데 정작 직원들이 잘 안 쓰는 것 같다"</li>
  <li>"회의록 요약·정책 분석 같은 정작 쓰고 싶은 업무에는 못 쓴다고 한다"</li>
  <li>"정보보안 부서에서 '입력 가능한 정보는 O 등급뿐'이라고 안내했더니, 그러면 ChatGPT로 할 수 있는 게 거의 없다는 반응"</li>
  <li>"보도자료 초안만 만들 거면 그냥 검색해서 쓰지 굳이 ChatGPT 구독 비용을 왜 내냐는 말까지 나옴"</li>
</ul>

<p>도입은 했지만 활용 폭이 좁아 ROI가 안 보이는 상태입니다. 이 글에서 다루는 질문은 이 상황의 핵심에 있는 것입니다 — "<strong>정작 어떤 정보까지는 입력해도 되는가</strong>".</p>

<h2>2. N<sup>2</sup>SF 정보 등급 — 1분 복습</h2>

<p>국정원 N<sup>2</sup>SF(국가 네트워크 보안 프레임워크) 가이드라인은 정보를 등급에 따라 분류하고, 등급별로 활용 가능한 환경을 다르게 규정합니다.</p>

<table>
  <thead>
    <tr>
      <th>등급</th>
      <th>설명</th>
      <th>외부 상용 LLM 활용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>O (Open)</strong></td>
      <td>외부 공개 가능 정보. 보도자료·법령·공시 자료 등</td>
      <td>입력 가능</td>
    </tr>
    <tr>
      <td><strong>S (Sensitive)</strong></td>
      <td>외부 공개 시 업무·이해관계에 영향 있는 정보. 내부 검토·정책 초안·인사 자료 등</td>
      <td>원칙적 불가, 자체 위험평가 시 가능</td>
    </tr>
    <tr>
      <td><strong>C (Critical)</strong></td>
      <td>외부 유출 시 중대한 영향. 개인정보·국가 기밀 등</td>
      <td>불가</td>
    </tr>
  </tbody>
</table>

<p>모델 2(외부 LLM 활용 모델)에서 외부 상용 LLM에 입력 가능한 정보는 원칙적으로 <strong>O 등급</strong>으로 한정됩니다. S 등급 정보를 입력하려면 기관 자체의 위험평가 절차를 거쳐야 합니다.</p>

<p>자세한 설명은 별도 글로 정리되어 있습니다.</p>

<ul>
  <li><a href="/resources/learn/what-is-n2sf">N<sup>2</sup>SF란 무엇인가 — 공공기관 보안의 새 패러다임</a></li>
  <li><a href="/resources/learn/n2sf-model-2-explained">N<sup>2</sup>SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까</a></li>
</ul>

<h2>3. 5가지 실무 사례 — 등급 판단의 실제 모습</h2>

<p>정의는 위와 같지만, 실제 업무 현장에서 "이 자료가 O인지 S인지" 판단하는 일은 단순하지 않습니다. 5가지 흔한 사례로 살펴봅니다.</p>

<p>한 가지 미리 말해둘 것: 아래 사례에서 "이건 O다"·"이건 S다"라는 단정적 판단은 하지 않습니다. 같은 종류의 문서라도 내용·맥락·기관에 따라 등급이 달라지기 때문입니다. 사례의 목적은 <strong>판단 자체가 얼마나 어려운 일인지</strong>를 보여주는 데 있습니다.</p>

<h3>사례 1 — 부서 회의록 요약 요청</h3>

<p>직원이 어제 진행한 부서 회의록을 ChatGPT에 입력하면서 "이 내용을 3줄로 요약해줘"라고 요청합니다. 가장 흔한 활용 시나리오입니다.</p>

<p>판단 포인트:</p>

<ul>
  <li>회의록에 외부 비공개 사업 계획이 포함되어 있는가</li>
  <li>특정 외부 기관·인물에 대한 평가가 포함되어 있는가</li>
  <li>아직 결재 전인 의사결정 사항이 포함되어 있는가</li>
  <li>회의 참석자의 이름·직위가 식별 가능한 형태로 포함되어 있는가</li>
</ul>

<p>일반적으로 부서 내부 회의록은 외부 공개를 전제로 만들어지지 않습니다. 즉 O 등급보다는 S 등급에 가깝게 분류되는 경향이 있습니다. 다만 회의 주제가 외부 공개된 정책 설명회 같은 것이면 다를 수 있습니다.</p>

<h3>사례 2 — 보도자료 초안 작성 요청</h3>

<p>홍보 담당자가 다음 주 발표할 신규 정책의 보도자료 초안을 작성해달라고 ChatGPT에 요청합니다. 정책 내용을 입력합니다.</p>

<p>판단 포인트:</p>

<ul>
  <li>발표 전까지 정책 내용 자체가 외부 비공개인가</li>
  <li>정책 결정 배경·내부 검토 결과가 포함되어 있는가</li>
  <li>보도자료에 포함될 최종 문구만 있는가, 그 외 내부 자료도 함께 있는가</li>
</ul>

<p>발표 후의 보도자료는 O 등급으로 볼 여지가 있지만, 발표 전 단계의 초안에는 아직 외부에 공개되지 않은 정책 내용이 포함되어 있을 가능성이 있습니다. 같은 "보도자료"라는 이름이 붙어도 시점에 따라 등급이 다를 수 있다는 점이 이 사례의 핵심입니다.</p>

<h3>사례 3 — 정책 분석 자료 작성 지원</h3>

<p>기획 담당자가 특정 사회 이슈에 대한 정책 대안을 검토하면서, 내부에서 정리한 분석 자료를 ChatGPT에 입력하고 "다른 시각의 분석도 추가해줘"라고 요청합니다.</p>

<p>판단 포인트:</p>

<ul>
  <li>분석 자료 안에 다른 기관·이해관계자에 대한 평가가 포함되어 있는가</li>
  <li>아직 결정되지 않은 정책 대안이 포함되어 있는가</li>
  <li>외부 공개된 통계·자료만 인용한 것인가, 내부 분석이 포함된 것인가</li>
</ul>

<p>내부에서 작성한 정책 분석은 일반적으로 O 등급으로 보기 어려운 경우가 많습니다. 외부에 공개된 통계만 인용해 작성한 경우에도, 그 통계의 조합·해석·결론 도출이 내부 분석이라면 등급 판단이 모호해집니다.</p>

<h3>사례 4 — 인사 평가 자료 검토</h3>

<p>인사 담당자가 직원 평가 결과를 ChatGPT에 입력하고 "평가 코멘트의 일관성을 점검해줘"라고 요청합니다.</p>

<p>판단 포인트:</p>

<ul>
  <li>직원 이름·소속이 식별 가능한 형태로 포함되어 있는가</li>
  <li>평가 결과 자체가 개인정보에 해당하는가</li>
  <li>이름·소속을 제거하면 식별 불가능해지는가, 다른 정보로 결합 식별이 가능한가</li>
</ul>

<p>개인정보가 포함된 인사 자료는 C 등급에 해당할 가능성이 큽니다. 이름·소속을 제거해도, 평가 코멘트의 구체적 내용으로 인해 결합 식별이 가능한 경우가 있습니다. 즉 단순 마스킹만으로는 충분하지 않은 영역입니다.</p>

<h3>사례 5 — 외부 공개 통계 분석</h3>

<p>연구 담당자가 통계청·국토부 등에서 공개한 데이터를 다운로드하여 ChatGPT에 입력하고 "이 데이터에서 의미 있는 트렌드를 찾아줘"라고 요청합니다.</p>

<p>판단 포인트:</p>

<ul>
  <li>데이터 자체가 외부 공개 상태인가</li>
  <li>입력하면서 추가한 가공·조합·맥락이 내부 분석에 해당하는가</li>
  <li>요청 자체(어떤 트렌드를 찾으려고 하는지)가 내부 의도를 드러내는가</li>
</ul>

<p>원본 데이터는 O 등급에 해당할 가능성이 큽니다. 다만 입력하는 과정에서 추가하는 맥락이나 요청 자체가 내부 의도를 드러내는 경우, 등급 판단이 다시 모호해질 수 있습니다.</p>

<h2>4. 사례에서 드러나는 세 가지 어려움</h2>

<p>위 5가지 사례를 보면 등급 판단이 어려운 이유 세 가지가 드러납니다.</p>

<h3>4.1 같은 종류의 문서라도 내용에 따라 등급이 다름</h3>

<p>"회의록"이라는 이름이 붙어도 회의 주제와 내용에 따라 O와 S를 오갈 수 있습니다. "보도자료"도 발표 전인지 후인지에 따라 다릅니다. 결국 <strong>문서 이름이 아니라 내용 단위로 매번 판단해야 한다</strong>는 의미입니다.</p>

<h3>4.2 결합 식별 가능성을 일일이 따지기 어려움</h3>

<p>이름·소속을 제거해도, 다른 정보와 결합하면 식별 가능한 경우가 있습니다. 인사 평가의 평가 코멘트, 회의 발언자의 직위·말투 등이 그 예입니다. <strong>단순 키워드 마스킹만으로는 충분하지 않은 경우가 많습니다.</strong></p>

<h3>4.3 매번 판단할 시간이 없음</h3>

<p>가장 현실적인 문제입니다. 직원 한 명이 하루에 ChatGPT에 몇 번이나 정보를 입력하는지를 생각하면, 매번 정보보안 담당자에게 등급 확인을 받는 것은 불가능합니다. 결과적으로 다음 둘 중 하나가 됩니다.</p>

<ul>
  <li>직원이 자체 판단으로 입력 → 부정확한 판단으로 보안 사고 위험</li>
  <li>직원이 안전하게 가려고 거의 입력 안 함 → 활용도 저하, ChatGPT 구독이 사실상 사장됨</li>
</ul>

<h2>5. 수기 마스킹 — 현재 다수 기관의 대응 방식</h2>

<p>위 어려움을 우회하기 위해 다수 기관에서 사용하는 방식이 <strong>수기 마스킹</strong>입니다. 직원이 ChatGPT에 입력하기 전에 민감 정보(이름·기관명·금액·수치 등)를 직접 가명 처리하는 방식입니다. 수도권 한 자치구의 사례가 이 접근의 대표적 예로 알려져 있습니다.</p>

<p>수기 마스킹의 작동 방식:</p>

<ol>
  <li>직원이 입력 전 문서를 살펴보고 민감 부분을 [A], [B] 같은 익명 표기로 바꿈</li>
  <li>예: "김민수 과장의 6월 평가 결과" → "[A]의 [B] 평가 결과"</li>
  <li>ChatGPT 응답을 받은 후, 익명 표기를 원본으로 복원해서 활용</li>
</ol>

<p>이 방식의 한계도 분명합니다.</p>

<ul>
  <li><strong>직원 부담</strong>: 입력할 때마다 직접 마스킹하는 데 시간이 듦. 활용 빈도가 낮아짐</li>
  <li><strong>일관성 부족</strong>: 직원마다 마스킹 기준이 달라 누락·오류 발생</li>
  <li><strong>결합 식별 위험</strong>: 이름만 가렸을 뿐 다른 정보로 식별 가능한 경우가 남음</li>
  <li><strong>관리 어려움</strong>: 어떤 직원이 어떤 정보를 어떻게 마스킹해서 입력했는지 추적 불가</li>
</ul>

<p>수기 마스킹은 "지금 당장 어떻게든 외부 LLM을 쓰기 위한" 단기 대응책에 가깝습니다. 장기 운영을 전제하면 다른 접근이 필요합니다.</p>

<h2>6. 또 다른 접근 — 분류 부담을 줄이는 방향</h2>

<p>앞서 살펴본 어려움의 공통점은 <strong>"입력하기 전에 매번 등급을 판단해야 한다"</strong>는 전제에 있습니다. 이 전제를 다르게 두는 접근도 있습니다.</p>

<p>즉 등급 분류 자체를 직원에게 맡기지 않고, <strong>입력되는 정보를 자동으로 가명 처리한 뒤 외부 LLM에 보내는 보호 레이어</strong>를 두는 방식입니다. 응답은 내부망에서 원본으로 복원됩니다. 이 접근의 특징은 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>수기 마스킹</th>
      <th>자동 가명화 보호 레이어</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>가명 처리 주체</td>
      <td>직원이 매번 직접</td>
      <td>시스템이 자동 처리</td>
    </tr>
    <tr>
      <td>일관성</td>
      <td>직원마다 다름</td>
      <td>일관된 규칙 적용</td>
    </tr>
    <tr>
      <td>결합 식별 대응</td>
      <td>키워드 마스킹 수준</td>
      <td>차등정보보호(DP) 등 수학적 기법 적용 가능</td>
    </tr>
    <tr>
      <td>외부로 나가는 데이터</td>
      <td>일부 익명 처리된 원문</td>
      <td>가명 처리된 형태로만 전송, 원문 미전송</td>
    </tr>
    <tr>
      <td>응답 복원</td>
      <td>직원이 수기로</td>
      <td>내부망에서 자동 복원</td>
    </tr>
  </tbody>
</table>

<p>이 접근이 N<sup>2</sup>SF 모델 2 관점에서 의미 있는 이유는 "외부로 나가는 정보가 원문이 아니다"라는 점에 있습니다. N<sup>2</sup>SF 가이드라인이 다루는 핵심 우려가 "원문·민감 정보의 외부 전송"이라면, 가명화된 형태로만 외부에 나가는 구조는 이 우려를 직접적으로 줄입니다.</p>

<p>다만 이 접근에도 전제는 있습니다. 자동 가명화의 정확도, 결합 식별 가능성에 대한 대응 수준, 내부망 복원의 안전성 등이 기관 자체 위험평가 과정에서 검증되어야 합니다. "자동이니까 안전하다"는 단정이 아니라, "어떤 방식으로 처리되는지" 자체가 평가 대상입니다.</p>

<h2>7. 기관이 선택할 수 있는 세 가지 옵션</h2>

<p>외부 LLM 구독 후 활용 폭 문제에 대한 현실적인 선택지는 세 가지로 정리됩니다.</p>

<h3>옵션 A — 가이드라인·교육 운영</h3>

<p>등급별 입력 가능 정보 가이드라인을 만들고 직원 교육을 통해 자체 판단력을 높이는 방식입니다. 현재 다수 기관이 채택하는 접근입니다.</p>

<ul>
  <li><strong>장점</strong>: 별도 솔루션 도입 비용 없음. 정보보안 부서의 통제 영역 안에 있음.</li>
  <li><strong>한계</strong>: 매번 직원 판단에 의존하므로 사고 위험 잔존. 교육·갱신 부담 지속. 활용도가 직원 개인의 적극성에 따라 크게 갈림.</li>
</ul>

<h3>옵션 B — 외부 LLM 제한적 사용</h3>

<p>외부 LLM은 보도자료 작성·간단한 검색 보조 같은 명백히 O 등급인 업무로만 한정하고, 그 외 업무는 외부 LLM을 사용하지 않는 방식입니다.</p>

<ul>
  <li><strong>장점</strong>: 보안 위험 최소화. 명확한 정책으로 직원 혼란 적음.</li>
  <li><strong>한계</strong>: 구독 ROI가 낮음. 정작 활용 폭이 좁다는 도입 후 평가가 나올 가능성. 직원의 비공식 우회 사용(개인 ChatGPT 사용 등) 위험.</li>
</ul>

<h3>옵션 C — 자동 가명화 보호 레이어 도입</h3>

<p>구독 중인 외부 LLM 앞단에 자동 가명화 보호 레이어를 두어, 직원이 입력하는 정보를 자동으로 처리해 외부에 보내는 방식입니다.</p>

<ul>
  <li><strong>장점</strong>: 직원 판단 부담 감소. 활용 폭 확장 가능. 외부로 나가는 데이터의 위험 수준 통제.</li>
  <li><strong>한계</strong>: 추가 도입 비용 발생. 보호 레이어 자체의 정확도·안전성에 대한 자체 위험평가 필요. 기관의 보안 정책과 통합 운영을 위한 설계·검토 시간 필요.</li>
</ul>

<p>어느 옵션을 선택할지는 기관의 활용 우선순위·보안 정책·예산에 따라 달라집니다. 한 가지만 단정적으로 권장할 수는 없지만, 다음 질문은 도움이 됩니다.</p>

<h2>8. 기관 점검을 위한 질문</h2>

<p>외부 LLM 구독 후 활용 상황을 점검하는 데 도움이 되는 질문들입니다.</p>

<ul>
  <li>도입 후 6개월~1년 동안 직원의 실제 활용 빈도는 어떻게 변했는가</li>
  <li>활용 빈도가 낮다면, 그 이유가 "기능이 부족해서"인지 "입력 가능한 정보가 좁아서"인지 어느 쪽인가</li>
  <li>직원이 외부 LLM을 우회 사용(개인 계정 사용 등)하는 사례가 있는가</li>
  <li>정보보안 부서가 직원의 입력 행위를 추적·관리할 수 있는 체계가 있는가</li>
  <li>2026 경영평가에서 "AI 윤리·정보보안 가이드라인을 고려한 기획 수준" 평가에 우리 도입 사례를 어떻게 설명할 것인가</li>
  <li>지금 도입 방식이 1~2년 뒤 운영 단계에서 보안 사고나 평가 미달 위험이 있는가</li>
</ul>

<p>이 질문들의 답이 명확하지 않다면 현재 도입 방식의 재검토가 필요할 수 있습니다.</p>

<div class="takeaways">
  <div class="takeaways__label">핵심 정리</div>
  <ul>
    <li>외부 LLM 구독 후 가장 자주 마주치는 질문은 "어떤 정보까지 입력해도 되는가"</li>
    <li>N<sup>2</sup>SF 모델 2는 원칙적으로 O 등급으로 한정하고, S 등급은 자체 위험평가 후 가능</li>
    <li>실제 업무 정보는 회의록·정책 분석·인사 자료 등 S 등급에 가까운 경우가 많음</li>
    <li>"문서 종류"가 아닌 "내용 단위"로 매번 판단해야 하므로 직원 자체 판단에 한계</li>
    <li>수기 마스킹은 단기 대응책으로 가능하나 일관성·결합 식별·관리 측면에서 한계</li>
    <li>자동 가명화 보호 레이어는 또 다른 접근이며, 기관 자체 위험평가 필요</li>
    <li>현실적 선택지는 가이드라인 운영 / 제한적 사용 / 보호 레이어 도입의 세 가지</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>O 등급·S 등급·C 등급은 누가 분류하나요?</h3>
<p>기관의 정보보안 담당 부서가 정합니다. N<sup>2</sup>SF 가이드라인은 기본 원칙을 제시하지만, 구체적인 분류 기준은 각 기관의 정보보안 정책으로 정해집니다. 같은 종류의 문서라도 기관에 따라 등급이 다를 수 있습니다.</p>

<h3>"자체 위험평가"라는 건 구체적으로 어떻게 하는 건가요?</h3>
<p>N<sup>2</sup>SF 가이드라인은 S 등급 정보를 외부 상용 LLM에 입력할 경우 기관 자체의 위험평가 절차를 거치도록 규정합니다. 일반적으로 다음 항목을 평가합니다: 외부 전송되는 정보의 실제 형태, 결합 식별 가능성, 외부 LLM 제공자의 데이터 처리 정책, 사고 발생 시 대응 체계. 평가 결과를 문서화하여 정보보안 책임자가 승인하는 형태로 운영됩니다.</p>

<h3>ChatGPT의 "데이터 학습 거부 설정"을 켜면 안전한가요?</h3>
<p>ChatGPT의 학습 거부 설정은 OpenAI가 입력 데이터를 자사 모델 학습에 사용하지 않도록 하는 기능입니다. 데이터가 OpenAI 서버를 통과한다는 사실 자체는 동일합니다. 학습 거부 설정은 활용 범위를 일부 줄이는 효과는 있지만, 원문이 외부 서버를 거친다는 사실을 해소하지는 못합니다. 기관 정보보안 담당자가 검토할 때 이 점을 함께 고려해야 합니다.</p>

<h3>수기 마스킹과 자동 가명화의 가장 큰 차이가 무엇인가요?</h3>
<p>처리 주체와 결합 식별 대응 수준이 다릅니다. 수기 마스킹은 직원이 자기 판단으로 이름·기관명 등을 가립니다. 자동 가명화는 시스템이 일관된 규칙으로 처리하며, 차등정보보호 같은 수학적 기법을 적용하면 단순 키워드 마스킹으로 잡히지 않는 결합 식별 가능성에도 대응 가능합니다. 다만 자동 가명화 솔루션도 그 처리 방식·정확도가 기관 자체 위험평가 대상이 됩니다.</p>

<h3>차등정보보호(Differential Privacy)는 어떤 기법인가요?</h3>
<p>개인 정보를 통계적으로 보호하는 수학적 프레임워크입니다. 데이터에 일정한 노이즈를 더해, 결과만 보고는 원본을 역추적할 수 없게 만드는 방식입니다. 단순 키워드 마스킹이 "이름을 가린다" 수준이라면, 차등정보보호는 "결합 식별 가능성 자체를 수학적으로 차단한다" 수준입니다. 공공 통계·의료 데이터 분야에서 국제적으로 사용되는 기법입니다.</p>

<h3>2026 경영평가 가점과 이 문제는 어떻게 연결되나요?</h3>
<p>2026년 경영평가 편람은 "AI 윤리 및 정보보안 가이드라인을 고려한 기획 수준", "개인정보보호 등 관련 법·제도 준수요건의 반영 여부"를 평가 기준으로 명시합니다. 외부 LLM을 도입했더라도, 그 도입 방식이 N<sup>2</sup>SF 가이드라인·개인정보보호법 요건을 어떻게 충족하는지 설명할 수 없다면 가점 인정이 어렵습니다. 자세한 내용은 별도 글로 정리되어 있습니다: <a href="/resources/learn/public-sector-2026-management-evaluation-ai-incentive">2026 경영평가 'AI 활용 등 혁신' 가점</a>.</p>

<h2>참고 자료</h2>
<ul>
  <li>국가정보원, 「N<sup>2</sup>SF 보안 가이드라인 1.0 부록2: 모델 2 업무환경에서 생성형 AI 활용」, 2025.9</li>
  <li>기획재정부, 「2026년도 공공기관 경영평가편람」, 2026.1</li>
  <li>나라장터(국가종합전자조달시스템), 입찰공고 검색 결과 (2025.01~2026.05)</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"O 등급·S 등급·C 등급은 누가 분류하나요?","acceptedAnswer":{"@type":"Answer","text":"기관의 정보보안 담당 부서가 정합니다. N²SF 가이드라인은 기본 원칙을 제시하지만, 구체적인 분류 기준은 각 기관의 정보보안 정책으로 정해집니다. 같은 종류의 문서라도 기관에 따라 등급이 다를 수 있습니다."}}, {"@type":"Question","name":"자체 위험평가라는 건 구체적으로 어떻게 하는 건가요?","acceptedAnswer":{"@type":"Answer","text":"N²SF 가이드라인은 S 등급 정보를 외부 상용 LLM에 입력할 경우 기관 자체의 위험평가 절차를 거치도록 규정합니다. 일반적으로 다음 항목을 평가합니다: 외부 전송되는 정보의 실제 형태, 결합 식별 가능성, 외부 LLM 제공자의 데이터 처리 정책, 사고 발생 시 대응 체계. 평가 결과를 문서화하여 정보보안 책임자가 승인하는 형태로 운영됩니다."}}, {"@type":"Question","name":"ChatGPT의 데이터 학습 거부 설정을 켜면 안전한가요?","acceptedAnswer":{"@type":"Answer","text":"ChatGPT의 학습 거부 설정은 OpenAI가 입력 데이터를 자사 모델 학습에 사용하지 않도록 하는 기능입니다. 데이터가 OpenAI 서버를 통과한다는 사실 자체는 동일합니다. 학습 거부 설정은 활용 범위를 일부 줄이는 효과는 있지만, 원문이 외부 서버를 거친다는 사실을 해소하지는 못합니다. 기관 정보보안 담당자가 검토할 때 이 점을 함께 고려해야 합니다."}}, {"@type":"Question","name":"수기 마스킹과 자동 가명화의 가장 큰 차이가 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"처리 주체와 결합 식별 대응 수준이 다릅니다. 수기 마스킹은 직원이 자기 판단으로 이름·기관명 등을 가립니다. 자동 가명화는 시스템이 일관된 규칙으로 처리하며, 차등정보보호 같은 수학적 기법을 적용하면 단순 키워드 마스킹으로 잡히지 않는 결합 식별 가능성에도 대응 가능합니다. 다만 자동 가명화 솔루션도 그 처리 방식·정확도가 기관 자체 위험평가 대상이 됩니다."}}, {"@type":"Question","name":"차등정보보호(Differential Privacy)는 어떤 기법인가요?","acceptedAnswer":{"@type":"Answer","text":"개인 정보를 통계적으로 보호하는 수학적 프레임워크입니다. 데이터에 일정한 노이즈를 더해, 결과만 보고는 원본을 역추적할 수 없게 만드는 방식입니다. 단순 키워드 마스킹이 이름을 가린다 수준이라면, 차등정보보호는 결합 식별 가능성 자체를 수학적으로 차단한다 수준입니다. 공공 통계·의료 데이터 분야에서 국제적으로 사용되는 기법입니다."}}, {"@type":"Question","name":"2026 경영평가 가점과 이 문제는 어떻게 연결되나요?","acceptedAnswer":{"@type":"Answer","text":"2026년 경영평가 편람은 AI 윤리 및 정보보안 가이드라인을 고려한 기획 수준, 개인정보보호 등 관련 법·제도 준수요건의 반영 여부를 평가 기준으로 명시합니다. 외부 LLM을 도입했더라도, 그 도입 방식이 N²SF 가이드라인·개인정보보호법 요건을 어떻게 충족하는지 설명할 수 없다면 가점 인정이 어렵습니다."}} ] }`

export default function PublicSectorChatgptInputGuide({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까",
  lead = "외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다.",
  category = "정책 분석",
  readTime = "16분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "TL;DR",
  tldrBody = "ChatGPT·Claude·Gemini 같은 외부 상용 LLM을 구독한 공공기관이 가장 자주 마주치는 질문은 \"정작 어떤 업무 정보까지 입력해도 되는가\"입니다. N²SF 모델 2는 외부 상용 LLM에 입력 가능한 정보를 O 등급(공개)으로 한정하거나, 자체 위험평가 절차를 거치도록 규정합니다. 그러나 실제 직원이 쓰고 싶은 업무 정보 — 회의록, 정책 분석, 인사 자료 — 대부분은 O 등급이 아닙니다. 결과적으로 \"구독은 했는데 정작 쓸 수 있는 범위가 좁다\"는 상황이 생깁니다. 이 글은 5가지 실무 사례로 등급 판단의 실제 모습을 보여주고, 기관이 선택할 수 있는 세 가지 접근 방식(가이드라인 운영 / 외부 LLM 제한 / 보호 레이어 도입)을 정리합니다. 본문에서 단정적 등급 판단은 하지 않습니다. 최종 판단은 기관의 정보보안 담당자 영역입니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/public-sector-chatgpt-input-guide",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "ko-KR",
  breadcrumbLabel = "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵",
  related1Href = "/resources/learn/public-sector-external-llm-adoption-roadmap",
  related2Title = "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
  related2Href = "/resources/learn/n2sf-model-2-explained",
  related3Title = "공공기관 생성형 AI 도입의 세 가지 길",
  related3Href = "/resources/learn/public-sector-genai-three-approaches",
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

addPropertyControls(PublicSectorChatgptInputGuide, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "ChatGPT 구독하는 공공기관, 정작 어떤 정보까지 입력해도 될까" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "외부 상용 LLM 구독 후 가장 자주 마주치는 질문입니다. 답은 단순하지 않습니다. 5가지 실무 사례로 판단의 어려움을 짚고, 그 어려움을 다루는 세 가지 접근 방식을 정리했습니다.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "정책 분석" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "16분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "TL;DR" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "ChatGPT·Claude·Gemini 같은 외부 상용 LLM을 구독한 공공기관이 가장 자주 마주치는 질문은 \"정작 어떤 업무 정보까지 입력해도 되는가\"입니다. N²SF 모델 2는 외부 상용 LLM에 입력 가능한 정보를 O 등급(공개)으로 한정하거나, 자체 위험평가 절차를 거치도록 규정합니다. 그러나 실제 직원이 쓰고 싶은 업무 정보 — 회의록, 정책 분석, 인사 자료 — 대부분은 O 등급이 아닙니다. 결과적으로 \"구독은 했는데 정작 쓸 수 있는 범위가 좁다\"는 상황이 생깁니다. 이 글은 5가지 실무 사례로 등급 판단의 실제 모습을 보여주고, 기관이 선택할 수 있는 세 가지 접근 방식(가이드라인 운영 / 외부 LLM 제한 / 보호 레이어 도입)을 정리합니다. 본문에서 단정적 등급 판단은 하지 않습니다. 최종 판단은 기관의 정보보안 담당자 영역입니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/public-sector-chatgpt-input-guide" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "ChatGPT 구독하는 공공기관, 어떤 정보까지 입력해도 될까" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "공공기관 외부 LLM 활용 도입 가이드 — 분기 로드맵" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/public-sector-external-llm-adoption-roadmap" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "N²SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/n2sf-model-2-explained" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "공공기관 생성형 AI 도입의 세 가지 길" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/public-sector-genai-three-approaches" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
