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

<h2>1. 차등정보보호란 — 한 줄로</h2>

<p><strong>차등정보보호(Differential Privacy, DP)</strong>는 개인정보를 통계적으로 보호하는 수학적 프레임워크입니다. 데이터에 일정한 노이즈를 추가해, 결과만 보고는 특정 개인의 정보가 데이터에 포함되어 있는지 알아낼 수 없도록 만드는 기술입니다.</p>

<p>핵심 아이디어는 다음과 같습니다. "어떤 개인의 데이터가 포함되든 안 되든, 결과는 거의 동일하게 보인다"는 것입니다. 그러면 결과를 받은 사람은 특정 개인이 그 데이터에 있었는지 추론할 수 없습니다.</p>

<h2>2. 직관적 이해 — 평균 연봉 공개 사례</h2>

<p>차등정보보호를 가장 직관적으로 이해할 수 있는 사례를 들어보겠습니다. 시청에서 "우리 시 공무원 평균 연봉"을 외부에 공개하는 상황입니다.</p>

<h3>2.1 진짜 평균을 그대로 공개하면 생기는 문제</h3>

<p>시청이 진짜 평균을 정확하게 공개한다고 합시다. 예를 들어 "공무원 100명 평균 연봉 5,000만 원" 같은 형태입니다. 정직하고 정확한 통계입니다.</p>

<p>그런데 누군가가 다음과 같은 정보를 추가로 가지고 있다고 합시다.</p>

<ul>
  <li>같은 부서 직원 99명의 연봉을 어떻게든 알게 됨 (자체 조사, 비공식 채널 등)</li>
  <li>전체 직원 수는 공시 자료에서 확인 가능 (100명)</li>
  <li>전체 평균은 시청이 공개한 5,000만 원</li>
</ul>

<p>이 정보들을 결합하면 마지막 한 사람의 연봉을 역산할 수 있습니다. 100명 × 5,000만 원 = 50억 원에서 알려진 99명 연봉 총합을 빼면 됩니다. 평균이라는 통계가 결합 식별 위험을 만든 셈입니다.</p>

<h3>2.2 해결책 — 노이즈를 더해 공개</h3>

<p>이 위험을 줄이는 방법은 진짜 평균에 약간의 노이즈를 더해 공개하는 것입니다. 진짜 평균이 5,000만 원이어도 4,983만 원으로 공개하거나 5,021만 원으로 공개하는 식입니다. 노이즈가 충분하면 역산 결과가 부정확해져, 특정 개인의 연봉을 정확히 알아내기 어려워집니다.</p>

<p>여기서 핵심은 <strong>"그냥 아무 노이즈가 아니다"</strong>라는 점입니다. 만약 노이즈를 무작위로 ±100만 원 정도 더하면, 외부 관찰자가 같은 통계를 여러 번 관찰하거나 다른 통계와 결합할 때 노이즈가 평균적으로 상쇄되어 진짜 값에 가까워집니다. 즉 단순 노이즈로는 안정적인 보호가 안 됩니다. 노이즈 분포·크기·적용 방식을 어떻게 설계했느냐가 보호 보장의 핵심입니다.</p>

<h3>2.3 차등정보보호의 본질 — 수학적 보장이 따라오는 노이즈</h3>

<p>차등정보보호의 핵심은 <strong>"이 데이터의 어느 한 사람이 포함되든 안 되든 결과가 거의 동일하게 보이도록"</strong> 노이즈를 설계한다는 데 있습니다. 이를 수학적으로 보장하기 위해 다음이 함께 결정됩니다.</p>

<ul>
  <li><strong>노이즈 분포</strong>: 라플라스 분포 또는 가우시안 분포 등 정해진 형태</li>
  <li><strong>노이즈 크기</strong>: 데이터의 민감도(sensitivity)와 원하는 보호 강도(엡실론)에 따라 정확히 계산</li>
  <li><strong>적용 방식</strong>: 어떤 쿼리에 어떻게 노이즈를 더할 것인지 메커니즘 선택</li>
</ul>

<p>즉 차등정보보호는 "노이즈를 더한다"는 행위 자체가 아니라, <strong>"수학적으로 계산된 노이즈를 정해진 방식으로 더해, 증명 가능한 보호 보장을 만들어낸다"</strong>는 점이 본질입니다. 노이즈 분포·크기·적용 방식이 잘못되면 결과적으로 보호가 깨질 수 있습니다.</p>

<p>이게 마스킹과 가장 큰 차이입니다. 마스킹은 "어느 정도 보호되는지" 정량적으로 말하기 어렵지만, 차등정보보호는 엡실론 값으로 "이 수준의 보호"라고 명확히 표시할 수 있습니다.</p>

<h2>3. 마스킹과 무엇이 다른가</h2>

<p>마스킹과 차등정보보호는 둘 다 "개인정보 보호"라는 같은 목적을 가집니다. 마스킹도 단순 식별자 제거만이 아니라 일반화(예: 정확한 연봉 대신 "4,000~6,000만 원" 구간으로 공개)를 통해 결합 식별을 차단할 수 있습니다. 두 기법의 진짜 차이는 다른 곳에 있습니다.</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>마스킹</th>
      <th>차등정보보호</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>접근 방식</td>
      <td>식별자 제거 또는 데이터 일반화(범위·구간화)</td>
      <td>데이터에 수학적으로 계산된 노이즈 추가</td>
    </tr>
    <tr>
      <td>예시 (평균 연봉 5,000만 원)</td>
      <td>"4,000~6,000만 원" 같은 구간으로 공개</td>
      <td>"5,021만 원" 같이 미세 노이즈 더해 공개</td>
    </tr>
    <tr>
      <td>유용성 (정확도) 유지</td>
      <td>일반화 폭이 클수록 정확도 손실 큼</td>
      <td>적은 노이즈로도 통계 패턴 유지 가능</td>
    </tr>
    <tr>
      <td>개별 레코드 추론 제한</td>
      <td>정성적 (얼마나 일반화했느냐에 따라 다름)</td>
      <td>수학적으로 정량 보장 (ε 값으로 측정)</td>
    </tr>
    <tr>
      <td>Privacy leakage 관리</td>
      <td>정량적 관리 어려움</td>
      <td>반복 쿼리·다중 분석에 대한 누적 leakage 정량 추적 가능</td>
    </tr>
    <tr>
      <td>구현 복잡도</td>
      <td>비교적 단순</td>
      <td>알고리즘 설계와 ε budget 관리 필요</td>
    </tr>
  </tbody>
</table>

<p>가장 중요한 차이는 <strong>유용성을 유지하면서 정량적으로 관리 가능하다는 점</strong>입니다. 마스킹으로 결합 식별을 막으려면 일반화 폭을 크게 가져가야 하는데, 그러면 통계의 유용성이 떨어집니다. 예를 들어 평균 연봉을 "1,000~10,000만 원"이라고 공개하면 결합 식별은 어려워지지만 그 통계는 거의 무의미해집니다.</p>

<p>차등정보보호는 작은 노이즈로도 개별 레코드 추론을 제한할 수 있고, 그 보호 강도를 ε 값으로 수치로 표현·관리할 수 있습니다. 또한 같은 데이터에 여러 번 다른 쿼리를 던질 때 누적되는 정보 누출(cumulative leakage)을 정량적으로 추적·제한할 수 있다는 점도 마스킹이 갖지 못한 특성입니다. 이 누적 관리에 대해서는 5절에서 더 다룹니다.</p>

<h2>4. 수학적 원리 — 한 번만 봐도 됩니다</h2>

<p>이 섹션은 수학적 배경이 궁금한 분을 위한 것입니다. 영업·기획 측면만 필요하시면 건너뛰셔도 됩니다.</p>

<h3>4.1 엡실론(ε) — 보호 강도의 측정 단위</h3>

<p>차등정보보호의 강도는 <strong>엡실론(ε, epsilon)</strong>이라는 값으로 측정됩니다. 이 값은 다음을 의미합니다.</p>

<ul>
  <li><strong>엡실론이 작을수록</strong>: 노이즈가 크고, 개인 정보 보호가 강함. 다만 데이터 정확도는 낮아짐</li>
  <li><strong>엡실론이 클수록</strong>: 노이즈가 작고, 데이터 정확도가 높음. 다만 개인 정보 보호는 약해짐</li>
</ul>

<p>엡실론은 "어떤 한 사람의 데이터가 포함되든 안 되든, 결과의 확률 분포가 얼마나 가까운가"를 측정합니다. 두 분포가 거의 같으면 엡실론이 작고, 차이가 크면 엡실론이 크다고 볼 수 있습니다.</p>

<h3>4.2 보호와 정확도의 Trade-off</h3>

<p>차등정보보호의 핵심 특징은 <strong>보호 강도와 데이터 정확도 사이의 명시적 균형</strong>입니다. 보호를 강하게 하려면 노이즈를 크게 해야 하고, 그러면 통계 결과의 정확도가 떨어집니다. 반대로 정확도를 높이려면 노이즈를 줄여야 하고, 그러면 보호 강도가 약해집니다.</p>

<p>이 trade-off가 명시적으로 측정 가능하다는 점이 차등정보보호의 강점입니다. 마스킹은 "어느 정도 보호되는지" 정량적으로 말하기 어렵지만, 차등정보보호는 엡실론 값으로 "이 수준의 보호"라고 명확히 표시할 수 있습니다.</p>

<h3>4.3 노이즈 추가 방식</h3>

<p>차등정보보호 알고리즘에서 노이즈는 보통 다음 두 가지 분포 중 하나에서 추출됩니다.</p>

<ul>
  <li><strong>라플라스 분포(Laplace mechanism)</strong>: 수치형 데이터에 흔히 사용</li>
  <li><strong>가우시안 분포(Gaussian mechanism)</strong>: 연속 데이터에 사용. 약간 다른 형태의 보장 제공</li>
</ul>

<p>어떤 분포를 사용할지, 노이즈의 크기를 어떻게 결정할지는 데이터 유형과 활용 목적에 따라 달라집니다. 이 부분은 알고리즘 설계자가 결정합니다.</p>

<h2>5. 운영상 고려사항 — ε budget과 적용 한계</h2>

<p>차등정보보호를 실제 운영 환경에 적용할 때 반드시 함께 고려해야 하는 사항들이 있습니다. 학술 개념과 운영 환경 사이의 간극이 만들어내는 부분입니다.</p>

<h3>5.1 반복 쿼리에 의한 누적 leakage</h3>

<p>같은 데이터에 대해 차등정보보호가 적용된 쿼리를 여러 번 던지면, 매 쿼리마다 ε 만큼의 정보 누출 가능성이 누적됩니다. 예를 들어 ε = 0.5로 보호되는 통계를 같은 데이터에 10번 묻는다면, 누적 leakage는 약 ε × 10 = 5에 가까워질 수 있습니다(메커니즘 종류에 따라 정확한 합성 방식은 다름). 이 누적이 커지면 개별 레코드 추론 가능성이 다시 높아집니다.</p>

<p>이를 관리하기 위한 개념이 <strong>ε budget (또는 privacy budget)</strong>입니다. 데이터에 대한 전체 ε 한도를 미리 정해두고, 쿼리마다 사용된 ε를 누적 추적하며, 한도에 도달하면 추가 쿼리를 거부하거나 더 큰 노이즈를 추가하는 방식으로 운영됩니다. 마스킹에는 없는 운영 관리 개념입니다.</p>

<h3>5.2 수치형 데이터와 비수치형 데이터의 차이</h3>

<p>차등정보보호의 표준 메커니즘(라플라스·가우시안)은 <strong>수치형 데이터의 통계</strong>에 가장 잘 맞습니다. 평균·합계·분포·카운트 같은 집계 통계가 대표적 적용 영역입니다.</p>

<p>반면 텍스트·자유 형식 데이터·복잡한 구조의 데이터에는 표준 노이즈 메커니즘을 그대로 적용하기 어렵습니다. 이 영역에는 별도의 메커니즘이 필요합니다.</p>

<ul>
  <li><strong>지수 메커니즘(Exponential mechanism)</strong>: 범주형 데이터·선택 문제에 사용</li>
  <li><strong>로컬 DP(Local Differential Privacy)</strong>: Apple·Google이 사용자 단말에서 데이터 수집 전 노이즈를 추가하는 방식. 텍스트형 데이터에도 일부 적용</li>
  <li><strong>DP-SGD</strong>: 머신러닝 모델 학습 시 그래디언트에 노이즈 추가하는 방식</li>
</ul>

<p>LLM에 입력되는 자유 형식 텍스트(회의록·정책 분석 자료 등)는 단순한 수치형 통계와 다른 형태의 데이터입니다. 텍스트에 대한 차등정보보호 적용은 활발히 연구되고 있는 영역이며, 단일한 표준이 정립된 상태는 아닙니다.</p>

<h3>5.3 LLM 활용 환경에서의 적용 방식</h3>

<p>LLM 환경에서 차등정보보호를 적용하는 일반적인 방향은 두 가지로 정리됩니다.</p>

<ul>
  <li><strong>가명화·캡슐화와 결합한 하이브리드 방식</strong>: 텍스트 내 민감 부분(이름·기관명·금액·고유 식별자 등)을 가명으로 치환하고, 통계적 변환·노이즈 추가를 함께 적용. 이 방식은 자유 형식 텍스트의 전체 의미를 유지하면서 민감 부분의 추론 가능성을 제한</li>
  <li><strong>응답 처리 단계의 보호</strong>: LLM이 생성한 응답을 내부망에서 후처리하면서 ε budget 관리·민감 정보 노출 통제</li>
</ul>

<p>이 하이브리드 접근은 학술 개념의 차등정보보호를 LLM 운영 환경에 맞춰 변형한 형태이며, 실제 보호 강도는 적용된 메커니즘·ε 설정·운영 관리에 따라 달라집니다. 솔루션 검토 시 이 세 가지를 함께 확인해야 합니다.</p>

<h2>6. 누가 실제로 사용하고 있는가</h2>

<p>차등정보보호는 학술 개념을 넘어 실제 산업·정부에서 적용되고 있는 기술입니다.</p>

<h3>6.1 미국 인구조사국 (US Census Bureau)</h3>

<p>가장 큰 규모의 차등정보보호 적용 사례입니다. 미국 인구조사국은 <strong>2020년 인구조사 결과 공개에 차등정보보호를 공식 적용</strong>했습니다. 전통적으로 인구 통계를 공개할 때 셀 억제(cell suppression)·일반화(generalization) 같은 방법을 썼는데, 2020 인구조사부터는 차등정보보호 기반 알고리즘으로 처리한 결과를 공개합니다.</p>

<p>적용 이유는 다음과 같습니다. 인구조사 데이터는 다양한 외부 데이터셋과 결합·재구성 공격(database reconstruction attack)으로 개인 식별 가능성이 점점 커지고 있었습니다. 기존 보호 기법들로는 이 위험을 정량적으로 관리하기 어려웠고, ε 값으로 정량 관리가 가능한 차등정보보호가 그 답으로 채택됐습니다.</p>

<h3>6.2 Apple</h3>

<p>Apple은 2016년 WWDC에서 차등정보보호 적용을 공식 발표했습니다. iOS의 키보드 사용 패턴, 이모지 사용, 검색 트렌드 같은 익명 통계를 수집할 때 로컬 차등정보보호(Local DP) 방식을 적용합니다. 데이터가 단말을 떠나기 전에 노이즈가 추가되는 방식입니다.</p>

<h3>6.3 Google</h3>

<p>Google도 여러 제품에서 차등정보보호를 적용해왔습니다. 크롬 브라우저의 사용 통계, 머신러닝 모델 학습(DP-SGD 등) 등 사용자 데이터 통계를 다루는 영역에 적용됩니다.</p>

<h3>6.4 학술적 기반</h3>

<p>차등정보보호는 2006년 <strong>Cynthia Dwork(마이크로소프트 리서치, 이후 하버드 대학)</strong>가 제안한 개념입니다. 그가 Aaron Roth와 함께 저술한 "<em>The Algorithmic Foundations of Differential Privacy</em>"(2014)는 이 분야의 표준 교과서로 자리 잡았습니다. 즉 학계에서 충분한 기간 동안 검증된 기술입니다.</p>

<h3>6.5 국내 적용 현황</h3>

<p>국내에서도 차등정보보호 적용 사례가 점차 늘고 있지만, 미국·해외 대비 정착 단계입니다. 통계청·연구기관 등 일부 영역에서 검토·적용되고 있으며, 공공 LLM 활용 영역에서는 본격 도입 시작 단계입니다.</p>

<h2>7. 공공기관 LLM 활용에 어떻게 연결되는가</h2>

<p>차등정보보호가 공공기관 LLM 활용 관점에서 의미를 갖는 이유는 N<sup>2</sup>SF 가이드라인이 다루는 핵심 우려와 직접 연결되기 때문입니다.</p>

<h3>7.1 N<sup>2</sup>SF 모델 2의 핵심 우려</h3>

<p>N<sup>2</sup>SF 모델 2는 외부 상용 LLM(ChatGPT·Claude·Gemini 등) 활용 시의 보안 요건을 규정합니다. 핵심 우려는 "<strong>민감 정보가 원문 형태로 외부 서버를 거치는 것</strong>"입니다. 자세한 내용은 별도 글에 정리되어 있습니다: <a href="/resources/learn/n2sf-model-2-explained">N<sup>2</sup>SF 모델 2 완벽 해설</a>.</p>

<h3>7.2 차등정보보호의 역할</h3>

<p>차등정보보호 기반 보호 레이어는 다음 흐름으로 작동합니다.</p>

<ol>
  <li>직원이 외부 LLM에 정보를 입력</li>
  <li>보호 레이어가 그 정보를 차등정보보호 기법으로 변환 (민감 정보 부분에 노이즈 추가 등)</li>
  <li>변환된 형태가 외부 LLM에 전송됨 (원문은 외부로 나가지 않음)</li>
  <li>외부 LLM이 응답</li>
  <li>응답을 내부망에서 원본 맥락으로 복원해 직원에게 제공</li>
</ol>

<p>이 흐름에서 외부로 나가는 데이터는 원문이 아닌 통계적으로 보호된 형태입니다. N<sup>2</sup>SF 모델 2의 "원문 외부 전송 회피" 원칙과 직접 부합합니다.</p>

<h3>7.3 마스킹 접근과의 차이</h3>

<p>LLM 활용 환경에서 마스킹과 차등정보보호를 비교하면 다음이 두 기법의 핵심 차이입니다. 자세한 일반 비교는 본 글 3절에서 정리했습니다.</p>

<ul>
  <li><strong>마스킹</strong>: 입력 직전에 식별자(이름·기관명·금액 등)를 가리거나 일반화함. 결합 식별을 막을 수 있지만, 일반화 폭이 커지면 텍스트의 유용성이 떨어지고, 운영 중 누출 정도를 정량 관리하기 어려움</li>
  <li><strong>차등정보보호 기반</strong>: 보호 강도(ε)와 운영 한도(ε budget)를 수치로 정의·관리. 같은 데이터에 반복 접근이 발생할 때 누적되는 정보 누출을 정량 추적 가능</li>
</ul>

<p>어느 접근이 더 적합한지는 활용 시나리오·데이터 유형·보호 요건에 따라 다릅니다. 자유 형식 텍스트가 많은 환경에서는 두 기법을 결합한 하이브리드 형태가 자주 사용됩니다 (5.3에서 다룸).</p>

<h3>7.4 한계 — 자체 위험평가는 여전히 필요</h3>

<p>차등정보보호가 적용되었다고 해서 자동으로 N<sup>2</sup>SF 모델 2 정합성이 100% 보장되는 것은 아닙니다. 다음이 함께 검증되어야 합니다.</p>

<ul>
  <li>적용된 엡실론 값이 기관의 보호 요건에 적합한 수준인가</li>
  <li>변환된 데이터를 받는 외부 LLM의 데이터 처리 정책은 어떠한가</li>
  <li>응답을 내부망에서 복원하는 과정의 안전성은 어떠한가</li>
  <li>전체 흐름에 대한 기관 정보보안 책임자의 자체 위험평가가 완료되었는가</li>
</ul>

<p>차등정보보호는 강력한 보호 기법이지만 "단독 정답"이 아닙니다. 기관의 정보보안 정책·N<sup>2</sup>SF 자체 위험평가 절차와 결합되어 운영되어야 합니다.</p>

<h2>8. 큐빅 LLM Capsule의 차등정보보호 적용</h2>

<p>큐빅 LLM Capsule은 차등정보보호 기반 보호 레이어로 설계됐습니다. 외부 LLM(ChatGPT·Claude·Gemini 등) 앞단에 배치되어, 입력 정보를 차등정보보호 기법으로 변환한 뒤 외부로 전송합니다. 응답은 내부망에서 원본 맥락으로 복원되어 직원에게 제공됩니다.</p>

<p>적용된 보호 수준은 다음 형태로 검증되어 왔습니다.</p>

<ul>
  <li>국정원 보안기능확인서 획득 (2024)</li>
  <li>GS 인증 1등급 (2025)</li>
  <li>ISO 27001 (정보보안 경영시스템) 인증 (2026)</li>
  <li>ISO 42001 (AI 경영시스템) 인증 (2026)</li>
  <li>조달청 혁신제품 지정</li>
</ul>

<p>다만 위 7.4에서 짚었듯이, 이 솔루션을 도입한다고 자동으로 N<sup>2</sup>SF 모델 2 정합성이 보장되는 것은 아닙니다. 도입 기관의 자체 위험평가가 함께 진행되어야 하며, 큐빅은 그 과정에서 필요한 기술 자료·인증 자료를 제공합니다.</p>

<div class="takeaways">
  <div class="takeaways__h">핵심 정리</div>
  <ul>
    <li>차등정보보호는 데이터에 수학적으로 계산된 노이즈를 더해 개별 레코드 추론을 제한하는 기술</li>
    <li>핵심 가치 — 유용성 유지 + 추론 가능성 제한 + 보호 강도의 정량 관리(ε 값)</li>
    <li>엡실론(ε) 값으로 보호 강도를 수치로 측정 — 보호와 정확도 사이의 명시적 균형</li>
    <li>반복 쿼리 시 누적 leakage 발생 — 실제 운영에서는 ε budget·쿼리 제한 관리 필요</li>
    <li>평균·합계·분포 같은 수치형 통계에 가장 잘 맞음, 텍스트·자유형식 데이터에는 별도 메커니즘 필요</li>
    <li>미국 인구조사국 2020년 인구조사, Apple iOS 통계, Google 등에서 실제 적용 중</li>
    <li>2006년 Cynthia Dwork가 제안한 이후 학계·산업 표준으로 정립</li>
    <li>N<sup>2</sup>SF 모델 2의 "원문 외부 전송 회피" 원칙과 직접 연결</li>
    <li>도입 시 기관의 자체 위험평가는 여전히 필요 — 단독 정답 아닌 보완 기술</li>
  </ul>
</div>

<h2>자주 묻는 질문</h2>

<h3>차등정보보호는 암호화와 어떻게 다른가요?</h3>

<p>목적과 작동 방식이 다릅니다. 암호화는 "데이터를 보낼 때 중간에서 못 보게 한다"는 목적이고, 받는 쪽이 키를 가지면 완전히 복원됩니다. 차등정보보호는 "결과만 보고는 원본을 역추적할 수 없게 한다"는 목적이고, 노이즈가 더해진 데이터는 완전 복원되지 않습니다. 두 기술은 함께 사용 가능하며, 실제로 보안 시스템에서 결합되어 운영되는 경우가 많습니다.</p>

<h3>차등정보보호가 적용되면 LLM 응답의 품질이 떨어지지 않나요?</h3>

<p>이는 알고리즘 설계와 엡실론 값에 따라 다릅니다. 노이즈를 너무 크게 설정하면 LLM이 의미 있는 응답을 만들기 어려워질 수 있고, 너무 작게 설정하면 보호 효과가 약해집니다. 실제 보호 레이어 솔루션들은 이 균형을 다양한 방식으로 최적화하며, 활용 시나리오에 따라 적정 수준을 선택합니다. 도입 전 PoC 단계에서 응답 품질을 확인하는 것이 일반적입니다.</p>

<h3>엡실론 값은 어떻게 정해지나요?</h3>

<p>국제적으로 통용되는 단일 기준은 없습니다. 활용 시나리오·데이터 민감도·법적 요건에 따라 달라집니다. 예를 들어 미국 인구조사국은 2020년 인구조사에서 데이터 유형별로 다른 엡실론 값을 적용했습니다. 일반적으로 매우 민감한 정보는 엡실론을 작게(보호 강하게), 덜 민감한 통계는 엡실론을 크게(정확도 높게) 설정합니다. 보호 레이어 솔루션을 검토할 때 이 값과 설정 근거를 함께 확인하는 것이 권장됩니다.</p>

<h3>차등정보보호와 K-익명성은 어떻게 다른가요?</h3>

<p>K-익명성(K-Anonymity)은 "데이터에 같은 속성 조합을 갖는 사람이 최소 K명 이상 있도록 만든다"는 보호 기법입니다. 예: K=3이면 "30대·남성·서울 거주"라는 조합이 데이터에 최소 3명 이상 있도록 일반화합니다. 차등정보보호와 K-익명성은 둘 다 개인정보 보호 기법이지만 접근 방식이 다릅니다. K-익명성은 데이터 자체를 일반화하는 방식이고, 차등정보보호는 데이터에 수학적 노이즈를 더하는 방식입니다. K-익명성은 데이터 일반화로 정성적 보호를 제공하는 반면, 차등정보보호는 보호 강도를 ε 값으로 정량 관리할 수 있고 반복 쿼리에 의한 누적 정보 누출도 추적 가능하다는 점이 차이입니다. 두 기법은 결합해서 사용되는 경우도 있습니다.</p>

<h3>공공기관에서 차등정보보호를 도입하려면 자체 개발해야 하나요?</h3>

<p>반드시 그렇지는 않습니다. 차등정보보호는 학술 알고리즘이 공개되어 있어 자체 구현 가능하지만, 실제 운영 환경에서의 안정성·성능·보안 통제를 갖춰 구현하려면 상당한 전문성이 필요합니다. 일반적으로 검증된 보호 레이어 솔루션을 도입하는 것이 더 효율적입니다. 자체 개발과 솔루션 도입 사이의 트레이드오프는 별도 글에서 다뤘습니다: <a href="/resources/learn/sllm-self-hosted-reality-check">sLLM 자체구축, 정말 답일까</a>.</p>

<h3>차등정보보호 적용 솔루션을 검토할 때 무엇을 확인해야 하나요?</h3>

<p>네 가지 정도가 핵심입니다. 첫째, 적용 알고리즘이 학계에서 검증된 표준 메커니즘인가(라플라스·가우시안 등). 둘째, 사용되는 엡실론 값이 무엇이고 그 근거가 명확한가. 셋째, 국제 인증(ISO 27001·42001 등)·국내 인증(GS·KISA·조달청 혁신제품 등)이 있는가. 넷째, 학술적 근거를 제시할 수 있는가(논문·기술백서). 이 네 가지를 확인하면 솔루션의 신뢰성을 판단할 수 있습니다.</p>

<h2>참고 자료</h2>

<ul>
  <li>Cynthia Dwork, Aaron Roth, "<em>The Algorithmic Foundations of Differential Privacy</em>", 2014</li>
  <li>US Census Bureau, "Disclosure Avoidance and the 2020 Census", 2020</li>
  <li>국가정보원, 「N<sup>2</sup>SF 보안 가이드라인 1.0」, 2025.9</li>
</ul>
`

const FAQ_JSON_LD = `{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"차등정보보호는 암호화와 어떻게 다른가요?","acceptedAnswer":{"@type":"Answer","text":"목적과 작동 방식이 다릅니다. 암호화는 데이터를 보낼 때 중간에서 못 보게 한다는 목적이고, 받는 쪽이 키를 가지면 완전히 복원됩니다. 차등정보보호는 결과만 보고는 원본을 역추적할 수 없게 한다는 목적이고, 노이즈가 더해진 데이터는 완전 복원되지 않습니다. 두 기술은 함께 사용 가능하며, 실제로 보안 시스템에서 결합되어 운영되는 경우가 많습니다."}}, {"@type":"Question","name":"차등정보보호가 적용되면 LLM 응답의 품질이 떨어지지 않나요?","acceptedAnswer":{"@type":"Answer","text":"알고리즘 설계와 엡실론 값에 따라 다릅니다. 노이즈를 너무 크게 설정하면 LLM이 의미 있는 응답을 만들기 어려워질 수 있고, 너무 작게 설정하면 보호 효과가 약해집니다. 실제 보호 레이어 솔루션들은 이 균형을 다양한 방식으로 최적화하며, 활용 시나리오에 따라 적정 수준을 선택합니다. 도입 전 PoC 단계에서 응답 품질을 확인하는 것이 일반적입니다."}}, {"@type":"Question","name":"엡실론 값은 어떻게 정해지나요?","acceptedAnswer":{"@type":"Answer","text":"국제적으로 통용되는 단일 기준은 없습니다. 활용 시나리오·데이터 민감도·법적 요건에 따라 달라집니다. 예를 들어 미국 인구조사국은 2020년 인구조사에서 데이터 유형별로 다른 엡실론 값을 적용했습니다. 일반적으로 매우 민감한 정보는 엡실론을 작게(보호 강하게), 덜 민감한 통계는 엡실론을 크게(정확도 높게) 설정합니다. 보호 레이어 솔루션을 검토할 때 이 값과 설정 근거를 함께 확인하는 것이 권장됩니다."}}, {"@type":"Question","name":"차등정보보호와 K-익명성은 어떻게 다른가요?","acceptedAnswer":{"@type":"Answer","text":"K-익명성(K-Anonymity)은 데이터에 같은 속성 조합을 갖는 사람이 최소 K명 이상 있도록 만든다는 보호 기법입니다. 예: K=3이면 30대·남성·서울 거주라는 조합이 데이터에 최소 3명 이상 있도록 일반화합니다. 차등정보보호와 K-익명성은 둘 다 개인정보 보호 기법이지만 접근 방식이 다릅니다. K-익명성은 데이터 자체를 일반화하는 방식이고, 차등정보보호는 데이터에 수학적 노이즈를 더하는 방식입니다. K-익명성은 데이터 일반화로 정성적 보호를 제공하는 반면, 차등정보보호는 보호 강도를 ε 값으로 정량 관리할 수 있고 반복 쿼리에 의한 누적 정보 누출도 추적 가능하다는 점이 차이입니다. 두 기법은 결합해서 사용되는 경우도 있습니다."}}, {"@type":"Question","name":"공공기관에서 차등정보보호를 도입하려면 자체 개발해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"반드시 그렇지는 않습니다. 차등정보보호는 학술 알고리즘이 공개되어 있어 자체 구현 가능하지만, 실제 운영 환경에서의 안정성·성능·보안 통제를 갖춰 구현하려면 상당한 전문성이 필요합니다. 일반적으로 검증된 보호 레이어 솔루션을 도입하는 것이 더 효율적입니다. 자체 개발과 솔루션 도입 사이의 트레이드오프는 별도 글에서 다뤘습니다."}}, {"@type":"Question","name":"차등정보보호 적용 솔루션을 검토할 때 무엇을 확인해야 하나요?","acceptedAnswer":{"@type":"Answer","text":"네 가지 정도가 핵심입니다. 첫째, 적용 알고리즘이 학계에서 검증된 표준 메커니즘인가(라플라스·가우시안 등). 둘째, 사용되는 엡실론 값이 무엇이고 그 근거가 명확한가. 셋째, 국제 인증(ISO 27001·42001 등)·국내 인증(GS·KISA·조달청 혁신제품 등)이 있는가. 넷째, 학술적 근거를 제시할 수 있는가(논문·기술백서). 이 네 가지를 확인하면 솔루션의 신뢰성을 판단할 수 있습니다."}} ] }`

export default function DifferentialPrivacyExplained({
  backLabel = "← Learn",
  backHref = "/resources/learn",
  title = "차등정보보호란 무엇인가 — 1분 요약부터 수학적 원리까지",
  lead = "차등정보보호(Differential Privacy)는 개인정보를 통계적으로 보호하는 수학적 프레임워크입니다. 단순 마스킹과 무엇이 다른지, 왜 미국 인구조사국·Apple·Google이 사용하는지, 공공기관 LLM 활용에 어떻게 연결되는지 정리했습니다.",
  category = "기술 해설",
  readTime = "11분 읽기",
  dateUpdated = "2026년 5월 업데이트",
  tldrLabel = "1분 요약",
  tldrBody = "차등정보보호(Differential Privacy)는 데이터에 수학적으로 계산된 노이즈를 더해 개인 정보를 보호하는 기술입니다. 핵심 가치는 세 가지입니다 — 유용성을 유지하면서도, 개별 레코드 추론 가능성을 제한하고, 보호 강도를 정량적으로 측정·관리할 수 있다는 점입니다. 2006년 Cynthia Dwork가 제안한 이후 학계 표준이 됐고, 미국 인구조사국 2020년 인구조사, Apple iOS 사용자 통계, Google 등에서 실제 적용되고 있습니다. 노이즈 크기는 엡실론(ε) 값으로 조절되며, 보호 강도와 데이터 정확도 사이의 균형을 결정합니다. 다만 차등정보보호는 평균·합계·분포 같은 수치형 통계에 가장 잘 맞고, 텍스트·자유 형식 데이터에는 별도 메커니즘이 필요합니다. 공공기관 관점에서는 외부 LLM 활용 시 민감 정보를 통계적으로 보호된 형태로 변환해 전송할 수 있다는 의미이며 — N2SF 모델 2의 \"원문 외부 전송 회피\" 원칙과 직접 연결됩니다.",
  bodyHtml = BODY_HTML,
  canonicalUrl = "https://llmcapsule.ai/resources/learn/differential-privacy-explained",
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
  inLanguage = "ko-KR",
  breadcrumbLabel = "차등정보보호란 무엇인가",
  faqJsonLd = FAQ_JSON_LD,
  relatedSectionLabel = "함께 읽으면 좋은 글",
  related1Title = "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까",
  related1Href = "/resources/learn/n2sf-model-2-explained",
  related2Title = "N2SF란 무엇인가 — 공공기관 보안의 새 패러다임",
  related2Href = "/resources/learn/what-is-n2sf",
  related3Title = "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프",
  related3Href = "/resources/learn/sllm-self-hosted-reality-check",
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

addPropertyControls(DifferentialPrivacyExplained, {
  backLabel: { type: ControlType.String, title: "Back Label", defaultValue: "← Learn" },
  backHref: { type: ControlType.String, title: "Back URL", defaultValue: "/resources/learn" },
  title: { type: ControlType.String, title: "Title", defaultValue: "차등정보보호란 무엇인가 — 1분 요약부터 수학적 원리까지" },
  lead: { type: ControlType.String, title: "Lead", defaultValue: "차등정보보호(Differential Privacy)는 개인정보를 통계적으로 보호하는 수학적 프레임워크입니다. 단순 마스킹과 무엇이 다른지, 왜 미국 인구조사국·Apple·Google이 사용하는지, 공공기관 LLM 활용에 어떻게 연결되는지 정리했습니다.", displayTextArea: true },
  category: { type: ControlType.String, title: "Category", defaultValue: "기술 해설" },
  readTime: { type: ControlType.String, title: "Read Time", defaultValue: "11분 읽기" },
  dateUpdated: { type: ControlType.String, title: "Date Updated", defaultValue: "2026년 5월 업데이트" },
  tldrLabel: { type: ControlType.String, title: "TL;DR Label", defaultValue: "1분 요약" },
  tldrBody: { type: ControlType.String, title: "TL;DR Body", defaultValue: "차등정보보호(Differential Privacy)는 데이터에 수학적으로 계산된 노이즈를 더해 개인 정보를 보호하는 기술입니다. 핵심 가치는 세 가지입니다 — 유용성을 유지하면서도, 개별 레코드 추론 가능성을 제한하고, 보호 강도를 정량적으로 측정·관리할 수 있다는 점입니다. 2006년 Cynthia Dwork가 제안한 이후 학계 표준이 됐고, 미국 인구조사국 2020년 인구조사, Apple iOS 사용자 통계, Google 등에서 실제 적용되고 있습니다. 노이즈 크기는 엡실론(ε) 값으로 조절되며, 보호 강도와 데이터 정확도 사이의 균형을 결정합니다. 다만 차등정보보호는 평균·합계·분포 같은 수치형 통계에 가장 잘 맞고, 텍스트·자유 형식 데이터에는 별도 메커니즘이 필요합니다. 공공기관 관점에서는 외부 LLM 활용 시 민감 정보를 통계적으로 보호된 형태로 변환해 전송할 수 있다는 의미이며 — N2SF 모델 2의 \"원문 외부 전송 회피\" 원칙과 직접 연결됩니다.", displayTextArea: true },
  bodyHtml: { type: ControlType.String, title: "Body HTML", defaultValue: BODY_HTML, displayTextArea: true },
  canonicalUrl: { type: ControlType.String, title: "Canonical URL", defaultValue: "https://llmcapsule.ai/resources/learn/differential-privacy-explained" },
  datePublished: { type: ControlType.String, title: "Date Published", defaultValue: "2026-05-01" },
  dateModified: { type: ControlType.String, title: "Date Modified", defaultValue: "2026-05-01" },
  inLanguage: { type: ControlType.String, title: "Language", defaultValue: "ko-KR" },
  breadcrumbLabel: { type: ControlType.String, title: "Breadcrumb Label", defaultValue: "차등정보보호란 무엇인가" },
  faqJsonLd: { type: ControlType.String, title: "FAQ JSON-LD (raw JSON)", defaultValue: FAQ_JSON_LD, displayTextArea: true },
  relatedSectionLabel: { type: ControlType.String, title: "Related Section Label", defaultValue: "함께 읽으면 좋은 글" },
  related1Title: { type: ControlType.String, title: "Related 1 Title", defaultValue: "N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까" },
  related1Href: { type: ControlType.String, title: "Related 1 URL", defaultValue: "/resources/learn/n2sf-model-2-explained" },
  related2Title: { type: ControlType.String, title: "Related 2 Title", defaultValue: "N2SF란 무엇인가 — 공공기관 보안의 새 패러다임" },
  related2Href: { type: ControlType.String, title: "Related 2 URL", defaultValue: "/resources/learn/what-is-n2sf" },
  related3Title: { type: ControlType.String, title: "Related 3 Title", defaultValue: "sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프" },
  related3Href: { type: ControlType.String, title: "Related 3 URL", defaultValue: "/resources/learn/sllm-self-hosted-reality-check" },
  related4Title: { type: ControlType.String, title: "Related 4 Title", defaultValue: "" },
  related4Href: { type: ControlType.String, title: "Related 4 URL", defaultValue: "" },
})
