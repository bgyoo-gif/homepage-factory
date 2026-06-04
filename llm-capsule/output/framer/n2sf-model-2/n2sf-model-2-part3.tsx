// N2SF Model 2 — Part 3: Before/After + Trust & Proof + Cert Grid + Resources + Form + Footer + Floating CTA
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any

import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

const GFX = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics/"

const DEFAULT_BA = [
  { caseNum: "CASE 01", task: "민원 답변서 작성", beforeLabel: "BEFORE · 지금", before: "직원이 손으로 작성\n1건당 30~60분 소요", afterLabel: "AFTER · 도입 후", after: "AI 초안 생성 후 검토만\n1건당 5~10분", impactValue: "83", impactUnit: "%↑", impactLabel: "업무 생산성 향상" },
  { caseNum: "CASE 02", task: "타 기관 공문 요약", beforeLabel: "BEFORE · 지금", before: "대외비 포함으로\nAI 사용 자체가 불가", afterLabel: "AFTER · 도입 후", after: "캡슐화 처리 후\n외부 AI 활용 가능", impactValue: "불가 → 가능", impactUnit: "", impactLabel: "활용 영역 확장" },
  { caseNum: "CASE 03", task: "위원회 회의록 정리", beforeLabel: "BEFORE · 지금", before: "녹취 후 수동 정리\n1시간 회의 = 2시간 정리", afterLabel: "AFTER · 도입 후", after: "자동 요약 + 비공개 발언\n자동 캡슐화", impactValue: "75", impactUnit: "%↑", impactLabel: "업무 생산성 향상" },
  { caseNum: "CASE 04", task: "AI 도입 실적 보고", beforeLabel: "BEFORE · 지금", before: "활용 사실을 입증할\n보고할 사례 없음", afterLabel: "AFTER · 도입 후", after: "감사 로그 자동 누적\n그대로 평가 실적이 됨", impactValue: "0건 → 자동 누적", impactUnit: "", impactLabel: "평가 자산화" },
]

const DEFAULT_REASONS = [
  { num: "1", title: "정부 인증 보유", body: "GS 인증 (한국정보통신기술협회), ISO/IEC 27001 (정보보안), ISO/IEC 42001 (AI 경영시스템), 공공 조달 적격 요건을 충족합니다" },
  { num: "2", title: "혁신제품 지정", body: "조달청 혁신제품 지정, 정보보호제품 혁신대상 과기부 장관상 수상, 수의계약·우선구매 적용 대상입니다" },
  { num: "3", title: "기술 검증·실증 완료", body: "공공·금융·의료·국방 등 다양한 산업에서 실증을 거친 안정적 운영을 이어가고 있습니다" },
]

const DEFAULT_CERTS = [
  { group: "CERTIFICATION", wreathText: "정보보안 패스트트랙", org: "KISA", logo: `${GFX}cert-kisa.png` },
  { group: "CERTIFICATION", wreathText: "GS Certification", org: "TTA", logo: `${GFX}cert-gs.png` },
  { group: "CERTIFICATION", wreathText: "ISO/IEC 27001", org: "ISO", logo: `${GFX}cert-iso.png` },
  { group: "CERTIFICATION", wreathText: "ISO/IEC 42001", org: "ISO", logo: `${GFX}cert-iso.png` },
  { group: "AWARD", wreathText: "과기부 장관상", org: "정보보호제품 혁신대상", logo: `${GFX}awards-ministry-of-science-and-ict.jpg` },
  { group: "AWARD", wreathText: "준우승", org: "Startup World Cup", logo: `${GFX}cert-startupworldcup.png` },
  { group: "AWARD", wreathText: "글로벌 이노베이터", org: "Next Rise 2024", logo: `${GFX}awards-NextRise.png` },
  { group: "AWARD", wreathText: "AI 의료 혁신상", org: "AI EXPO KOREA", logo: `${GFX}awards-koreaia.png` },
  { group: "RECOGNITION", wreathText: "Cool Vendor", org: "Gartner", logo: `${GFX}cert-gartner.svg.png` },
]

const DEFAULT_RESOURCES = [
  { num: "01", category: "정책 분석", title: "N2SF란 무엇인가", summary: "국가정보원이 발간한 국가·공공기관 망 보안 프레임워크의 개념과 등급 분류 기준", link: "https://llmcapsule.ai/ko/resources/learn/what-is-n2sf" },
  { num: "02", category: "정책 분석", title: "N2SF 모델 2, 한 번에 정리", summary: "업무환경에서 외부 생성형 AI를 활용할 때 적용해야 하는 표준 시나리오", link: "https://llmcapsule.ai/ko/resources/learn/n2sf-model-2-explained" },
  { num: "03", category: "현장 분석", title: "공공기관 생성형 AI, 막히는 5가지 지점", summary: "도입을 고민하는 정보화담당관이 가장 자주 마주치는 5가지 장벽", link: "https://llmcapsule.ai/ko/resources/learn/public-sector-genai-five-stuck-points" },
  { num: "04", category: "평가 대응", title: "2026 공공기관 경영평가, AI 가점의 핵심", summary: "보안·윤리·데이터 거버넌스를 갖춘 안전한 도입이 평가의 핵심", link: "https://llmcapsule.ai/ko/resources/learn/public-sector-2026-management-evaluation-ai-incentive" },
  { num: "05", category: "기술 비교", title: "자체 sLLM 구축, 현실은 어떨까", summary: "사내 GPT·프라이빗 LLM 구축의 실제 비용·운영 부담 점검", link: "https://llmcapsule.ai/ko/resources/learn/sllm-self-hosted-reality-check" },
]

const DEFAULT_AI_STATUS = ["미도입", "일부 팀만 자체 사용", "전사 Team/Enterprise 지원", "sLLM 자체 구축", "기타"]
const DEFAULT_N2SF_STATUS = ["구체적 검토 중 (아키텍처, C/S/O 문서 분류 등)", "가이드라인 학습 중", "검토한 적 없음", "기타"]
const DEFAULT_TIMELINES = ["1개월 이내", "3개월 이내", "6개월 이내", "정보 수집 단계"]

const fallbackImg = (prop: string | undefined, fallback: string) =>
  prop && prop.length > 0 ? prop : fallback
const fallbackArr = <T,>(arr: T[] | undefined, def: T[]): T[] =>
  arr && arr.length > 0 ? arr : def

export default function N2sfPart3({
  // Before/After
  baKicker = "BEFORE & AFTER",
  baHeadline = "도입 전과 도입 후,\n무엇이 달라질까요?",
  baItems = DEFAULT_BA,
  baClosing1 = "기존에 수작업으로 직접 정보들을 마스킹하고, 복원했던 불필요한 행정 업무 시간은 이제 없습니다.",
  baClosing2 = "외부 LLM 활용이 제한됐던 업무에 AI가 닿는 순간, 행정 효율이 곧 평가 실적으로 환산됩니다.",
  // Trust & Proof
  trustKicker = "TRUST & PROOF",
  trustHeadline = "인증·조달·실증까지\n이미 검증된 제품입니다.",
  reasonCards = DEFAULT_REASONS,
  // Cert Grid
  certCards = DEFAULT_CERTS,
  // Resources
  resKicker = "RESOURCES",
  resHeadline = "더 알아보기 —\n정책 분석·실무 가이드",
  resourceCards = DEFAULT_RESOURCES,
  // Form
  formHeadline = "우리 기관은\n어디부터 시작하면 좋을까요?",
  formSub = "5분 진단으로 기관 환경에 맞는 적용 시나리오, 예상 도입 일정, 조달 옵션을 정리해서 회신드립니다.",
  formCtaLabel = "기관 AI 도입 상담 신청",
  formNote = "영업일 기준 1일 이내 회신 · 진단은 무료입니다.",
  formAiStatus = DEFAULT_AI_STATUS,
  formN2sfStatus = DEFAULT_N2SF_STATUS,
  formTimelines = DEFAULT_TIMELINES,
  // Footer
  footerBrand = "LLM Capsule by CUBIG",
  footerCopy = "© 2025 CUBIG Inc. All rights reserved.",
  // Floating CTA
  floatMsg = "우리 기관 환경에 맞게 어떻게 도입할 수 있을지 진단해 보세요.",
  floatCtaLabel = "기관 AI 도입 상담 신청",
  floatCtaLink = "#p3-form",
}: Props) {
  const _baItems = fallbackArr(baItems, DEFAULT_BA)
  const _reasonCards = fallbackArr(reasonCards, DEFAULT_REASONS)
  const _certCards = fallbackArr(certCards, DEFAULT_CERTS)
  const _resourceCards = fallbackArr(resourceCards, DEFAULT_RESOURCES)
  const _formAiStatus = fallbackArr(formAiStatus, DEFAULT_AI_STATUS)
  const _formN2sfStatus = fallbackArr(formN2sfStatus, DEFAULT_N2SF_STATUS)
  const _formTimelines = fallbackArr(formTimelines, DEFAULT_TIMELINES)

  const [showFloat, setShowFloat] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [privacyExpanded, setPrivacyExpanded] = useState(false)
  const [marketingExpanded, setMarketingExpanded] = useState(false)
  const allConsent = privacyConsent && marketingConsent
  const toggleAllConsent = () => {
    const next = !allConsent
    setPrivacyConsent(next)
    setMarketingConsent(next)
  }

  useEffect(() => {
    let dismissed = false
    const update = () => {
      if (dismissed) return
      const scrollY = window.scrollY || window.pageYOffset
      const winH = window.innerHeight
      const formEl = document.getElementById("p3-form")
      let beforeForm = true
      if (formEl) {
        beforeForm = formEl.getBoundingClientRect().top > winH * 0.9
      }
      setShowFloat(scrollY > winH * 0.5 && beforeForm)
    }
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    update()
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const nl = (s: string) =>
    s.split("\n").map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ))

  const accentNl = (s: string) => {
    const parts = s.split("\n")
    return parts.map((line, i) => (
      <span key={i}>
        {i > 0 ? <span className="p3-accent">{line}</span> : line}
        {i < parts.length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="p3-root">
      <style>{CSS}</style>

      {/* BEFORE / AFTER */}
      <section className="p3-s p3-s-alt">
        <div className="p3-container">
          <div className="p3-sh-wrap-center">
            <span className="p3-sh-kicker">{baKicker}</span>
            <h2 className="p3-sh-big p3-center">{accentNl(baHeadline)}</h2>
          </div>
          <div className="p3-ba-grid">
            {_baItems.map((b, i) => {
              const isQual = !b.impactUnit
              return (
                <div className="p3-ba-item" key={i}>
                  <div className="p3-ba-task-cell">
                    <div className="p3-ba-task-num">{b.caseNum}</div>
                    <div className="p3-ba-task-name">{b.task}</div>
                  </div>
                  <div className="p3-ba-cell p3-ba-before">
                    <div className="p3-ba-cell-label">{b.beforeLabel}</div>
                    <div className="p3-ba-cell-text" dangerouslySetInnerHTML={{ __html: b.before.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                  </div>
                  <div className="p3-ba-cell p3-ba-after">
                    <div className="p3-ba-cell-label">{b.afterLabel}</div>
                    <div className="p3-ba-cell-text" dangerouslySetInnerHTML={{ __html: b.after.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                  </div>
                  <div className={`p3-ba-impact${isQual ? " p3-ba-qual" : ""}`}>
                    <div className="p3-ba-impact-value">
                      {b.impactValue}
                      {b.impactUnit && <span className="p3-ba-unit">{b.impactUnit}</span>}
                    </div>
                    <div className="p3-ba-impact-label">{b.impactLabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="p3-closing-line">
            <p>{baClosing1}</p>
            <p>{baClosing2}</p>
          </div>
        </div>
      </section>

      {/* TRUST & PROOF */}
      <section className="p3-s">
        <div className="p3-container">
          <div className="p3-sh-wrap-center">
            <span className="p3-sh-kicker">{trustKicker}</span>
            <h2 className="p3-sh-big p3-center">{accentNl(trustHeadline)}</h2>
          </div>
          <div className="p3-reason-grid">
            {_reasonCards.map((r, i) => (
              <div className="p3-reason-card" key={i}>
                <div className="p3-reason-num">{r.num}</div>
                <div className="p3-reason-title">{r.title}</div>
                <p className="p3-reason-body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERT GRID MARQUEE */}
      <section className="p3-cert-band" aria-label="인증 및 수상">
        <div className="p3-cert-track">
          {[..._certCards, ..._certCards].map((c, i) => (
            <div className="p3-cert-card" key={i}>
              <div className="p3-cert-group">{c.group}</div>
              <div className="p3-cert-wreath">
                <img className="p3-cert-wreath-left" src={`${GFX}cert-left.png`} alt="" />
                <span className="p3-cert-wreath-text">{c.wreathText}</span>
                <img className="p3-cert-wreath-right" src={`${GFX}cert-right.png`} alt="" />
              </div>
              <span className="p3-cert-org">{c.org}</span>
              <img className="p3-cert-logo" src={fallbackImg(c.logo, DEFAULT_CERTS[i % _certCards.length]?.logo || "")} alt={c.org} />
            </div>
          ))}
        </div>
      </section>


      {/* FORM */}
      <section className="p3-form-section" id="p3-form">
        <div className="p3-container">
          <div className="p3-form-card">
            <h2 className="p3-form-h">{nl(formHeadline)}</h2>
            <p className="p3-form-sub">{formSub}</p>
            <form
              noValidate
              onSubmit={async (e) => {
                e.preventDefault()
                setFormStatus("submitting")
                const form = e.currentTarget
                const data = new FormData(form)
                const radio = (name: string) => {
                  const el = form.querySelector(`input[name='${name}']:checked`) as HTMLInputElement | null
                  return el?.value ?? ""
                }
                const fields = [
                  { name: "company", value: String(data.get("company") ?? "") },
                  { name: "firstname", value: String(data.get("firstname") ?? "") },
                  { name: "jobtitle", value: String(data.get("jobtitle") ?? "") },
                  { name: "phone", value: String(data.get("phone") ?? "") },
                  { name: "email", value: String(data.get("email") ?? "") },
                  { name: "ai_adoption_status", value: radio("ai_adoption_status") },
                  { name: "n2sf_review_status", value: radio("n2sf_review_status") },
                  { name: "n2sf_timeline", value: radio("n2sf_timeline") },
                  { name: "message", value: String(data.get("message") ?? "") },
                  { name: "privacy_consent", value: privacyConsent ? "동의" : "미동의" },
                  { name: "marketing_consent", value: marketingConsent ? "동의" : "미동의" },
                ]
                const hutk = typeof document !== "undefined"
                  ? document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/, "$1")
                  : ""
                const context: Record<string, string> = {
                  pageUri: typeof window !== "undefined" ? window.location.href : "",
                  pageName: "N2SF 모델 2 — 기관 AI 도입 상담",
                }
                if (hutk) context.hutk = hutk
                try {
                  const res = await fetch(
                    "https://api-na2.hsforms.com/submissions/v3/integration/submit/244718287/8aaf14a5-100c-4466-bb93-117fe012c90f",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ submittedAt: Date.now(), fields, context }),
                    }
                  )
                  if (res.ok) {
                    form.reset()
                    if (typeof window !== "undefined") {
                      window.location.href = "/request-received"
                    }
                  } else {
                    console.error("HubSpot error:", res.status, await res.text())
                    setFormStatus("error")
                  }
                } catch {
                  setFormStatus("error")
                }
              }}
            >
              <div className="p3-field">
                <label>소속 기관명<span className="p3-req">*</span></label>
                <input type="text" name="company" placeholder="예) 한국OO공단" required />
              </div>
              <div className="p3-field-row">
                <div className="p3-field">
                  <label>성함<span className="p3-req">*</span></label>
                  <input type="text" name="firstname" placeholder="홍길동" required />
                </div>
                <div className="p3-field">
                  <label>직책<span className="p3-req">*</span></label>
                  <input type="text" name="jobtitle" placeholder="정보화담당관" required />
                </div>
              </div>
              <div className="p3-field-row">
                <div className="p3-field">
                  <label>연락처<span className="p3-req">*</span></label>
                  <input type="tel" name="phone" placeholder="010-0000-0000" required />
                </div>
                <div className="p3-field">
                  <label>이메일 주소<span className="p3-req">*</span></label>
                  <input type="email" name="email" placeholder="name@agency.go.kr" required />
                </div>
              </div>
              <div className="p3-field">
                <label>생성형 AI 도입 현황</label>
                <div className="p3-radio-group">
                  {_formAiStatus.map((opt, i) => (
                    <label className="p3-radio-item" key={i}>
                      <input type="radio" name="ai_adoption_status" value={opt} /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="p3-field">
                <label>N2SF 검토 여부</label>
                <div className="p3-radio-group">
                  {_formN2sfStatus.map((opt, i) => (
                    <label className="p3-radio-item" key={i}>
                      <input type="radio" name="n2sf_review_status" value={opt} /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="p3-field">
                <label>도입 예상 시점</label>
                <div className="p3-radio-group">
                  {_formTimelines.map((t, i) => (
                    <label className="p3-radio-item" key={i}>
                      <input type="radio" name="n2sf_timeline" value={t} /> {t}
                    </label>
                  ))}
                </div>
              </div>
              <div className="p3-field">
                <label>추가 문의 사항</label>
                <textarea name="message" placeholder="기관 환경, 검토 중인 업무, 보안 정책 등 자유롭게 작성해주세요." />
              </div>

              {/* CONSENT */}
              <div className="p3-consent">
                <label className="p3-consent-row p3-consent-all">
                  <input type="checkbox" checked={allConsent} onChange={toggleAllConsent} />
                  <span>모두 선택</span>
                </label>
                <div className="p3-consent-divider" />
                <div className="p3-consent-item">
                  <label className="p3-consent-row">
                    <input type="checkbox" checked={privacyConsent} onChange={() => setPrivacyConsent(!privacyConsent)} />
                    <span><span className="p3-consent-badge p3-consent-badge--req">필수</span> 개인정보 수집 및 이용 동의</span>
                    <button type="button" className="p3-consent-toggle" onClick={() => setPrivacyExpanded(!privacyExpanded)}>{privacyExpanded ? "접기" : "전문 보기"}</button>
                  </label>
                  {privacyExpanded && (
                    <div className="p3-consent-detail">
                      <table className="p3-consent-table">
                        <thead><tr><th>항목</th><th>내용</th></tr></thead>
                        <tbody>
                          <tr><td>수집 항목</td><td>소속 기관명, 성함, 직책, 연락처, 이메일 주소, 생성형 AI 도입 현황, N2SF 검토 여부, 도입 예상 시점, 추가 문의 사항</td></tr>
                          <tr><td>수집·이용 목적</td><td>기관 AI 도입 상담 신청 접수 및 회신, 맞춤형 적용 시나리오·도입 일정·조달 옵션 안내</td></tr>
                          <tr><td>보유 기간</td><td>수집일로부터 1년 (목적 달성 후 지체 없이 파기). 별도 동의 시 마케팅 목적 보유 기간은 아래 참조</td></tr>
                          <tr><td>국외 이전</td><td>본 양식은 HubSpot Inc. (미국) 서버를 통해 처리됩니다. 이전 항목·목적·보유 기간은 위와 동일하며, HubSpot의 보안 인증(SOC 2 Type II, ISO 27001)에 따라 보호됩니다</td></tr>
                          <tr><td>거부 권리</td><td>동의를 거부할 수 있으나, 거부 시 상담 신청이 접수되지 않습니다</td></tr>
                        </tbody>
                      </table>
                      <p className="p3-consent-link">전체 개인정보 처리방침은 <a href="/privacy" target="_blank" rel="noopener noreferrer">여기</a>에서 확인하실 수 있습니다.</p>
                    </div>
                  )}
                </div>
                <div className="p3-consent-item">
                  <label className="p3-consent-row">
                    <input type="checkbox" checked={marketingConsent} onChange={() => setMarketingConsent(!marketingConsent)} />
                    <span><span className="p3-consent-badge p3-consent-badge--opt">선택</span> 홍보 및 마케팅 정보 수신 동의</span>
                    <button type="button" className="p3-consent-toggle" onClick={() => setMarketingExpanded(!marketingExpanded)}>{marketingExpanded ? "접기" : "전문 보기"}</button>
                  </label>
                  {marketingExpanded && (
                    <div className="p3-consent-detail">
                      <table className="p3-consent-table">
                        <thead><tr><th>항목</th><th>내용</th></tr></thead>
                        <tbody>
                          <tr><td>수집 목적</td><td>LLM Capsule 제품 업데이트, 공공 AI 도입 사례·정책 변경 안내, 세미나·웨비나 초대 등 홍보·마케팅 정보 제공</td></tr>
                          <tr><td>수집 항목</td><td>이메일 주소, 소속 기관명, 성함</td></tr>
                          <tr><td>보유 기간</td><td>동의 철회 시까지 (수신 거부 링크를 통해 언제든 철회 가능)</td></tr>
                        </tbody>
                      </table>
                      <p className="p3-consent-link">동의하지 않아도 상담 신청은 정상적으로 접수됩니다.</p>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="p3-cta-submit" disabled={formStatus === "submitting" || !privacyConsent}>
                {formStatus === "submitting" ? "제출 중..." : formCtaLabel}
              </button>
              {formStatus === "success" && (
                <p className="p3-form-status p3-form-status--ok">상담 신청이 접수되었습니다. 영업일 기준 1일 이내 회신드리겠습니다.</p>
              )}
              {formStatus === "error" && (
                <p className="p3-form-status p3-form-status--err">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
              )}
              {formStatus === "idle" && (
                <p className="p3-form-note">{formNote}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="p3-s">
        <div className="p3-container">
          <div className="p3-sh-wrap-center">
            <span className="p3-sh-kicker">{resKicker}</span>
            <h2 className="p3-sh-big p3-center">{accentNl(resHeadline)}</h2>
          </div>
          <div className="p3-resource-grid">
            {_resourceCards.map((r, i) => (
              <a href={r.link} target="_blank" rel="noopener noreferrer" className="p3-resource-card" key={i}>
                <div className="p3-resource-num">{r.num}</div>
                <div className="p3-resource-category">{r.category}</div>
                <div className="p3-resource-body">
                  <div className="p3-resource-title">{r.title}</div>
                  <p className="p3-resource-summary">{r.summary}</p>
                </div>
                <div className="p3-resource-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* FLOATING CTA */}
      <div className={`p3-float-cta${showFloat ? " p3-float-show" : ""}`}>
        <div className="p3-float-inner">
          <div className="p3-float-msg" dangerouslySetInnerHTML={{ __html: floatMsg.replace(/(진단해 보세요\.)/, "<strong>$1</strong>") }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <a href={floatCtaLink} className="p3-float-btn">{floatCtaLabel}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BaItem { caseNum: string; task: string; beforeLabel: string; before: string; afterLabel: string; after: string; impactValue: string; impactUnit: string; impactLabel: string }
interface ReasonCard { num: string; title: string; body: string }
interface CertCard { group: string; wreathText: string; org: string; logo: string }
interface ResourceCard { num: string; category: string; title: string; summary: string; link: string }

interface Props {
  baKicker?: string; baHeadline?: string; baItems?: BaItem[]; baClosing1?: string; baClosing2?: string
  trustKicker?: string; trustHeadline?: string; reasonCards?: ReasonCard[]
  certCards?: CertCard[]
  resKicker?: string; resHeadline?: string; resourceCards?: ResourceCard[]
  formHeadline?: string; formSub?: string; formCtaLabel?: string; formNote?: string
  formAiStatus?: string[]; formN2sfStatus?: string[]; formTimelines?: string[]
  footerBrand?: string; footerCopy?: string
  floatMsg?: string; floatCtaLabel?: string; floatCtaLink?: string
}

addPropertyControls(N2sfPart3, {
  baKicker: { type: ControlType.String, title: "BA Kicker", defaultValue: "BEFORE & AFTER" },
  baHeadline: { type: ControlType.String, title: "BA Headline", displayTextArea: true, defaultValue: "도입 전과 도입 후,\n무엇이 달라질까요?" },
  baItems: { type: ControlType.Array, title: "BA Items", control: { type: ControlType.Object, controls: {
    caseNum: { type: ControlType.String, title: "Case #" },
    task: { type: ControlType.String, title: "Task" },
    beforeLabel: { type: ControlType.String, title: "Before Label" },
    before: { type: ControlType.String, title: "Before", displayTextArea: true },
    afterLabel: { type: ControlType.String, title: "After Label" },
    after: { type: ControlType.String, title: "After", displayTextArea: true },
    impactValue: { type: ControlType.String, title: "Impact Value" },
    impactUnit: { type: ControlType.String, title: "Impact Unit" },
    impactLabel: { type: ControlType.String, title: "Impact Label" },
  } } },
  baClosing1: { type: ControlType.String, title: "BA Closing 1", displayTextArea: true, defaultValue: "기존에 수작업으로 직접 정보들을 마스킹하고, 복원했던 불필요한 행정 업무 시간은 이제 없습니다." },
  baClosing2: { type: ControlType.String, title: "BA Closing 2", displayTextArea: true, defaultValue: "외부 LLM 활용이 제한됐던 업무에 AI가 닿는 순간, 행정 효율이 곧 평가 실적으로 환산됩니다." },
  trustKicker: { type: ControlType.String, title: "Trust Kicker", defaultValue: "TRUST & PROOF" },
  trustHeadline: { type: ControlType.String, title: "Trust Headline", displayTextArea: true, defaultValue: "인증·조달·실증까지\n이미 검증된 제품입니다." },
  reasonCards: { type: ControlType.Array, title: "Reason Cards", control: { type: ControlType.Object, controls: {
    num: { type: ControlType.String, title: "Num" },
    title: { type: ControlType.String, title: "Title" },
    body: { type: ControlType.String, title: "Body", displayTextArea: true },
  } } },
  certCards: { type: ControlType.Array, title: "Cert Cards", control: { type: ControlType.Object, controls: {
    group: { type: ControlType.String, title: "Group" },
    wreathText: { type: ControlType.String, title: "Wreath Text" },
    org: { type: ControlType.String, title: "Org" },
    logo: { type: ControlType.Image, title: "Logo" },
  } } },
  resKicker: { type: ControlType.String, title: "Res Kicker", defaultValue: "RESOURCES" },
  resHeadline: { type: ControlType.String, title: "Res Headline", displayTextArea: true, defaultValue: "더 알아보기 —\n정책 분석·실무 가이드" },
  resourceCards: { type: ControlType.Array, title: "Resource Cards", control: { type: ControlType.Object, controls: {
    num: { type: ControlType.String, title: "Num" },
    category: { type: ControlType.String, title: "Category" },
    title: { type: ControlType.String, title: "Title" },
    summary: { type: ControlType.String, title: "Summary" },
    link: { type: ControlType.Link, title: "Link" },
  } } },
  formHeadline: { type: ControlType.String, title: "Form Headline", displayTextArea: true, defaultValue: "우리 기관은\n어디부터 시작하면 좋을까요?" },
  formSub: { type: ControlType.String, title: "Form Sub", displayTextArea: true, defaultValue: "5분 진단으로 기관 환경에 맞는 적용 시나리오, 예상 도입 일정, 조달 옵션을 정리해서 회신드립니다." },
  formCtaLabel: { type: ControlType.String, title: "Form CTA", defaultValue: "기관 AI 도입 상담 신청" },
  formNote: { type: ControlType.String, title: "Form Note", defaultValue: "영업일 기준 1일 이내 회신 · 진단은 무료입니다." },
  formAiStatus: { type: ControlType.Array, title: "AI Status Options", control: { type: ControlType.String } },
  formN2sfStatus: { type: ControlType.Array, title: "N2SF Status Options", control: { type: ControlType.String } },
  formTimelines: { type: ControlType.Array, title: "Timelines", control: { type: ControlType.String } },
  footerBrand: { type: ControlType.String, title: "Footer Brand", defaultValue: "LLM Capsule by CUBIG" },
  footerCopy: { type: ControlType.String, title: "Footer Copy", defaultValue: "© 2025 CUBIG Inc. All rights reserved." },
  floatMsg: { type: ControlType.String, title: "Float Msg", defaultValue: "우리 기관 환경에 맞게 어떻게 도입할 수 있을지 진단해 보세요." },
  floatCtaLabel: { type: ControlType.String, title: "Float CTA", defaultValue: "기관 AI 도입 상담 신청" },
  floatCtaLink: { type: ControlType.Link, title: "Float Link" },
})

const CSS = `
:root{
  --p3-primary:#2B155B;--p3-primary-soft:#3D2378;--p3-primary-deep:#0E0B1A;
  --p3-cyan:#00D9F5;--p3-ink:#0E0B1A;--p3-ink-2:#444151;--p3-ink-3:#6B6878;
  --p3-bg:#FFFFFF;--p3-bg-soft:#F8F7FA;--p3-bg-tint:#F0EBFB;
  --p3-line:#E8E6EE;--p3-radius-md:12px;--p3-radius-lg:16px;--p3-radius-sm:8px;
  --p3-shadow-md:0 4px 6px rgba(14,11,26,.04),0 12px 32px rgba(14,11,26,.08);
  --p3-accent-red:#E53E3E;
  --p3-fs-body:16px;--p3-fs-lead:18px;--p3-fs-card:15px;--p3-fs-meta:13px;--p3-fs-micro:11px;
}
.p3-root{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,system-ui,sans-serif;background:var(--p3-bg);color:var(--p3-ink);line-height:1.6;-webkit-font-smoothing:antialiased;word-break:keep-all;overflow-wrap:break-word}
.p3-root *{box-sizing:border-box;margin:0;padding:0}
.p3-container{max-width:1160px;margin:0 auto;padding:0 24px}
.p3-accent{color:var(--p3-primary)}
.p3-center{text-align:center;margin-left:auto;margin-right:auto}
.p3-sh-wrap-center{text-align:center}

.p3-s{padding:120px 0}
.p3-s-alt{background:var(--p3-bg-soft)}
.p3-sh-kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:var(--p3-ink);color:#fff;font-size:12px;font-weight:600;letter-spacing:.04em;margin-bottom:28px;text-transform:uppercase}
.p3-sh-kicker::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--p3-cyan)}
.p3-sh-big{font-size:clamp(32px,4.4vw,52px);font-weight:700;letter-spacing:-.03em;line-height:1.12;color:var(--p3-ink);margin-bottom:28px;max-width:920px}

/* BA */
.p3-ba-grid{display:flex;flex-direction:column;gap:0;margin-top:48px}
.p3-ba-item{display:grid;grid-template-columns:200px 1fr 1fr 160px;align-items:stretch;border:1px solid var(--p3-line);border-radius:var(--p3-radius-lg);overflow:hidden;background:#fff;margin-bottom:16px}
.p3-ba-task-cell{padding:24px;display:flex;flex-direction:column;justify-content:center;border-right:1px solid var(--p3-line);background:var(--p3-bg-soft)}
.p3-ba-task-num{font-size:var(--p3-fs-micro);font-weight:700;color:var(--p3-primary);letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px}
.p3-ba-task-name{font-size:17px;font-weight:700;color:var(--p3-ink);line-height:1.4}
.p3-ba-cell{padding:24px;display:flex;flex-direction:column;gap:8px;justify-content:center}
.p3-ba-before{border-right:1px dashed var(--p3-line)}
.p3-ba-cell-label{font-size:var(--p3-fs-micro);font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px}
.p3-ba-before .p3-ba-cell-label{color:var(--p3-ink-3)}
.p3-ba-after .p3-ba-cell-label{color:var(--p3-primary)}
.p3-ba-cell-text{font-size:var(--p3-fs-card);color:var(--p3-ink-2);line-height:1.6}
.p3-ba-cell-text strong{color:var(--p3-ink);font-weight:700}
.p3-ba-impact{padding:24px 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:var(--p3-primary-deep);color:#fff;gap:6px}
.p3-ba-impact-value{font-size:36px;font-weight:800;line-height:1;letter-spacing:-.03em}
.p3-ba-unit{font-size:22px;font-weight:800;margin-left:2px;color:var(--p3-cyan)}
.p3-ba-impact-label{font-size:var(--p3-fs-micro);font-weight:600;color:rgba(255,255,255,.7);letter-spacing:.04em;margin-top:4px}
.p3-ba-qual .p3-ba-impact-value{font-size:22px;letter-spacing:-.02em}
.p3-closing-line{margin-top:48px;text-align:center}
.p3-closing-line p{margin-bottom:10px;font-size:var(--p3-fs-body);color:var(--p3-ink-2);line-height:1.8}
.p3-closing-line p:last-child{margin-bottom:0}
.p3-closing-line strong{color:var(--p3-primary)}

/* REASON */
.p3-reason-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:48px}
.p3-reason-card{padding:32px 28px;border-radius:14px;background:var(--p3-bg);border:1px solid var(--p3-line);box-shadow:0 1px 2px rgba(14,11,26,.04),0 8px 24px rgba(14,11,26,.06);transition:transform .25s,box-shadow .25s}
.p3-reason-card:hover{transform:translateY(-4px);box-shadow:var(--p3-shadow-md)}
.p3-reason-num{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:#F0EBFB;color:var(--p3-primary);font-weight:700;margin-bottom:16px}
.p3-reason-title{font-size:18px;font-weight:700;color:var(--p3-ink);margin-bottom:12px;line-height:1.4}
.p3-reason-body{font-size:var(--p3-fs-card);color:var(--p3-ink-2);line-height:1.7}

/* CERT MARQUEE */
.p3-cert-band{padding:80px 0;background:linear-gradient(180deg,#F3F3F3 0%,#fff 50%,#F0F0F0 100%);overflow:hidden}
.p3-cert-track{list-style:none;display:flex;gap:20px;align-items:stretch;width:max-content;margin:0;padding:0 24px;animation:p3CertMarq 40s linear infinite}
.p3-cert-track:hover{animation-play-state:paused}
@keyframes p3CertMarq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.p3-cert-card{background:#fff;border:1px solid var(--p3-line);border-radius:var(--p3-radius-lg);padding:24px 28px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;flex-shrink:0;width:200px}
.p3-cert-group{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;color:var(--p3-primary);margin-bottom:4px}
.p3-cert-wreath{position:relative;width:160px;height:120px;display:flex;align-items:center;justify-content:center}
.p3-cert-wreath-left,.p3-cert-wreath-right{position:absolute;top:0;height:100%;width:34%;object-fit:contain}
.p3-cert-wreath-left{left:-6px;object-position:right}
.p3-cert-wreath-right{right:-6px;object-position:left}
.p3-cert-wreath-text{position:relative;z-index:1;font-size:14px;font-weight:700;color:var(--p3-ink);text-align:center;line-height:1.3;max-width:90px}
.p3-cert-org{font-size:12px;color:var(--p3-ink-3)}
.p3-cert-logo{width:60px;height:60px;object-fit:contain;margin-top:auto;margin-bottom:-10px}

/* RESOURCES */
.p3-resource-grid{display:flex;flex-direction:column;gap:0;margin-top:48px;border-top:1px solid var(--p3-line)}
.p3-resource-card{position:relative;display:grid;grid-template-columns:80px 140px 1fr auto;align-items:center;gap:32px;padding:28px 8px;border-bottom:1px solid var(--p3-line);background:transparent;text-decoration:none;color:inherit;transition:background .2s,padding .2s;cursor:pointer}
.p3-resource-card:hover{background:var(--p3-bg-soft);padding-left:16px;padding-right:16px}
.p3-resource-num{font-size:24px;font-weight:800;color:var(--p3-ink-3);letter-spacing:-.02em;font-family:'JetBrains Mono',ui-monospace,monospace;transition:color .2s}
.p3-resource-card:hover .p3-resource-num{color:var(--p3-primary)}
.p3-resource-category{font-size:var(--p3-fs-micro);font-weight:700;color:var(--p3-primary);letter-spacing:.08em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.p3-resource-category::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--p3-primary)}
.p3-resource-body{display:flex;flex-direction:column;gap:6px;min-width:0}
.p3-resource-title{font-size:17px;font-weight:700;color:var(--p3-ink);letter-spacing:-.01em;line-height:1.4}
.p3-resource-summary{font-size:var(--p3-fs-card);color:var(--p3-ink-3);line-height:1.6;margin:0}
.p3-resource-arrow{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:transparent;color:var(--p3-ink-3);font-size:18px;transition:all .2s;flex-shrink:0}
.p3-resource-card:hover .p3-resource-arrow{background:var(--p3-primary);color:#fff;transform:translateX(4px)}

/* FORM */
.p3-form-section{padding:120px 0;background:linear-gradient(180deg,#FBFAFE 0%,#F3F1F8 100%)}
.p3-form-card{max-width:720px;margin:0 auto;background:#fff;border-radius:var(--p3-radius-lg);padding:56px 48px;box-shadow:var(--p3-shadow-md)}
.p3-form-h{font-size:32px;font-weight:700;color:var(--p3-ink);letter-spacing:-.02em;line-height:1.3;margin-bottom:16px;text-align:center}
.p3-form-sub{font-size:16px;color:var(--p3-ink-2);line-height:1.7;text-align:center;margin-bottom:40px}
.p3-field{margin-bottom:24px}
.p3-field-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.p3-field-row .p3-field{margin-bottom:24px}
.p3-field label{display:block;font-size:14px;font-weight:600;color:var(--p3-ink);margin-bottom:8px}
.p3-req{color:var(--p3-accent-red);margin-left:4px}
.p3-field input,.p3-field select,.p3-field textarea{width:100%;padding:14px 16px;border:1px solid var(--p3-line);border-radius:var(--p3-radius-sm);font-family:inherit;font-size:15px;color:var(--p3-ink);background:#fff;transition:border-color .2s,box-shadow .2s}
.p3-field input::placeholder,.p3-field textarea::placeholder{color:var(--p3-ink-3)}
.p3-field select{color:var(--p3-ink-2)}
.p3-field input:focus,.p3-field select:focus,.p3-field textarea:focus{outline:none;border-color:var(--p3-primary);box-shadow:0 0 0 3px rgba(0,217,245,.12)}
.p3-field textarea{min-height:96px;resize:vertical}
.p3-radio-group{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.p3-radio-item{display:flex;align-items:center;gap:10px;padding:11px 16px;border:1px solid var(--p3-line);border-radius:var(--p3-radius-sm);cursor:pointer;background:var(--p3-bg-soft);font-size:14px;color:var(--p3-ink-2);transition:border-color .2s,background .2s}
.p3-radio-item:hover{border-color:var(--p3-primary);background:#FBFAFE}
.p3-radio-item input{width:auto;margin:0;accent-color:var(--p3-primary);cursor:pointer}
.p3-cta-submit{width:100%;padding:18px;border:0;border-radius:999px;background:var(--p3-primary);color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:background .2s,transform .2s}
.p3-cta-submit:hover{background:var(--p3-primary-soft);transform:translateY(-1px)}
.p3-form-note{text-align:center;font-size:13px;color:var(--p3-ink-3);margin-top:16px}
.p3-form-status{text-align:center;font-size:14px;font-weight:600;margin-top:16px;padding:12px 16px;border-radius:var(--p3-radius-sm)}
.p3-form-status--ok{color:#0ea5a4;background:#E8FAF9}
.p3-form-status--err{color:#E53E3E;background:#FFF0F0}
.p3-cta-submit:disabled{opacity:.6;cursor:not-allowed;transform:none}

/* CONSENT */
.p3-consent{margin-bottom:28px;border:1px solid var(--p3-line);border-radius:var(--p3-radius-md);overflow:hidden}
.p3-consent-row{display:flex;align-items:center;gap:10px;padding:14px 18px;cursor:pointer;font-size:14px;color:var(--p3-ink);line-height:1.4;margin:0}
.p3-consent-row input[type="checkbox"]{width:18px;height:18px;flex-shrink:0;accent-color:var(--p3-primary);margin:0;cursor:pointer}
.p3-consent-all{background:var(--p3-bg-soft);font-weight:700}
.p3-consent-divider{height:1px;background:var(--p3-line)}
.p3-consent-item{border-top:1px solid var(--p3-line)}
.p3-consent-item:first-of-type{border-top:0}
.p3-consent-badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;margin-right:4px;vertical-align:middle}
.p3-consent-badge--req{background:#FFF0F0;color:var(--p3-accent-red)}
.p3-consent-badge--opt{background:var(--p3-bg-tint);color:var(--p3-primary)}
.p3-consent-toggle{margin-left:auto;flex-shrink:0;background:none;border:none;color:var(--p3-ink-3);font-size:13px;font-weight:500;cursor:pointer;padding:4px 0;font-family:inherit;text-decoration:underline;text-underline-offset:2px}
.p3-consent-toggle:hover{color:var(--p3-primary)}
.p3-consent-detail{padding:0 18px 18px;font-size:13px;color:var(--p3-ink-2);line-height:1.7}
.p3-consent-table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:13px}
.p3-consent-table th{text-align:left;padding:10px 12px;background:var(--p3-bg-soft);border:1px solid var(--p3-line);font-weight:600;color:var(--p3-ink);font-size:12px;white-space:nowrap}
.p3-consent-table td{padding:10px 12px;border:1px solid var(--p3-line);vertical-align:top;color:var(--p3-ink-2)}
.p3-consent-table td:first-child{white-space:nowrap;font-weight:600;color:var(--p3-ink);width:120px}
.p3-consent-link{font-size:12px;color:var(--p3-ink-3)}
.p3-consent-link a{color:var(--p3-primary);text-decoration:underline}

/* FOOTER */
.p3-footer{padding:48px 0;background:#0E0B1A;color:rgba(255,255,255,.6);text-align:center;font-size:13px;line-height:1.7}
.p3-brand-foot{color:#fff;font-weight:700;font-size:16px;margin-bottom:12px;display:block}

/* FLOATING CTA */
.p3-float-cta{position:fixed;left:0;right:0;bottom:0;z-index:90;background:var(--p3-ink);color:#fff;padding:14px 24px;box-shadow:0 -8px 24px rgba(14,11,26,.18);transform:translateY(100%);transition:transform .35s ease;opacity:0;pointer-events:none}
.p3-float-show{transform:translateY(0);opacity:1;pointer-events:auto}
.p3-float-inner{max-width:1160px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
.p3-float-msg{font-size:15px;line-height:1.4;font-weight:500;color:#fff}
.p3-float-msg strong{color:var(--p3-cyan);font-weight:700}
.p3-float-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:999px;background:var(--p3-cyan);color:var(--p3-ink);font-weight:700;font-size:14px;text-decoration:none;transition:transform .2s,box-shadow .2s;white-space:nowrap;flex-shrink:0;box-shadow:0 4px 12px rgba(0,217,245,.3)}
.p3-float-btn::after{content:"→";font-weight:400}
.p3-float-btn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,217,245,.4)}

/* RESPONSIVE */
@media(max-width:900px){
  .p3-s{padding:80px 0}
  .p3-ba-item{grid-template-columns:1fr}
  .p3-ba-task-cell{border-right:0;border-bottom:1px solid var(--p3-line);padding:18px 22px}
  .p3-ba-before{border-right:0;border-bottom:1px dashed var(--p3-line)}
  .p3-ba-impact{padding:18px}
  .p3-reason-grid{grid-template-columns:1fr}
  .p3-resource-card{grid-template-columns:60px 1fr auto;gap:20px;padding:20px 8px}
  .p3-resource-category{display:none}
  .p3-form-card{padding:40px 24px}
  .p3-field-row{grid-template-columns:1fr;gap:0}
  .p3-radio-group{grid-template-columns:1fr}
  .p3-consent-row{padding:12px 14px;font-size:13px}
  .p3-consent-table td:first-child{white-space:normal;width:80px}
}
@media(max-width:768px){
  .p3-sh-big{font-size:clamp(28px,7vw,38px);letter-spacing:-.025em}
  .p3-sh-kicker{font-size:11px;padding:6px 12px;margin-bottom:20px}
  .p3-cert-band{padding:48px 0}
  .p3-cert-card{width:170px;padding:16px}
  .p3-cert-wreath{width:130px;height:96px}
  .p3-cert-wreath-text{font-size:12px;max-width:72px}
  .p3-cert-logo{width:48px;height:48px}
  .p3-cert-track{gap:14px;animation-duration:25s}
  .p3-float-cta{padding:12px 16px}
  .p3-float-msg{font-size:13px;flex:1;min-width:0}
  .p3-float-btn{padding:10px 16px;font-size:13px}
}
@media(max-width:600px){
  .p3-container{padding:0 16px}
  .p3-form-section{padding:80px 0}
  .p3-form-h{font-size:24px}
  .p3-form-sub{font-size:14px;margin-bottom:28px}
  .p3-resource-card{grid-template-columns:1fr auto;gap:12px}
  .p3-resource-num{display:none}
}
@media(prefers-reduced-motion:reduce){.p3-cert-track{animation:none}}
`
