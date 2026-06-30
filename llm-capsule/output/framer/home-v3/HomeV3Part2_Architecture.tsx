import { useState, useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"
import { useLocaleInfo } from "framer"

const RT2_OP: Record<string, string[]> = {
  en: ["circuit_id=", "CKT-77-AB12", " on node ", "edge-04", " is flapping. Why, and how do I fix it?"],
  ko: ["circuit_id=", "CKT-77-AB12", " — node ", "edge-04", "에서 플래핑. 원인과 조치 방법은?"],
  de: ["circuit_id=", "CKT-77-AB12", " auf Node ", "edge-04", " flattert. Warum, und wie behebe ich das?"],
}
const RT2_AS: Record<string, string[]> = {
  en: ["", " is flapping; link errors on ", "", ". Reset the interface and check the optics."],
  ko: ["", "이 플래핑됩니다; ", "", "에서 링크 오류. 인터페이스를 리셋하고 광학 모듈을 확인하세요."],
  de: ["", " flattert; Linkfehler auf ", "", ". Setzen Sie das Interface zurück und prüfen Sie die Optik."],
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    sectionEyebrow: "How it works",
    sectionTitle: "Raw values stay inside.\nA protected version does the round trip.",
    sectionDesc: "The model can be external. The raw values are not. LLM Capsule is the context-preserving data layer between your operational data and AI execution — approved models, agents and MCP tools — so only a protected working version ever crosses, and the real values are reconstructed inside your workflow.",
    rt2Eyebrow: "Try the round trip",
    envLabel: "Your environment — on-prem / VPC / air-gapped",
    frontTag: "Front · what the operator sees",
    chatTitle: "NOC Assistant",
    chatStatus: "online",
    backTitle: "LLM Capsule",
    stepSub: "substitute",
    stepRecon: "reconstruct",
    stepHold: "hold mapping",
    mapThTok: "protected stand-in",
    mapThOrig: "original (stays local)",
    stateSub: "Sent to the model: stand-ins only. Originals are held in this local mapping — they never cross the boundary.",
    stateRecon: "Reconstruct: resolved the ⟨capsule:…⟩ stand-ins back to real values using the local mapping. Nothing crossed the boundary.",
    arrowUpLbl: "protected working version",
    arrowDnLbl: "model output · still protected",
    modelTitle: "Approved model",
    modelOr: "or your in-house model",
    modelFoot: "external · VPC · on-prem",
    caption: "Only the ⟨capsule:…⟩ form crosses the boundary — real values are reconstructed inside your environment.",
    capLabel: "Capsulated",
    uncLabel: "Uncapsulated",
    note: "The reveal does not fetch anything from the model. It is a local mapping lookup inside your environment — the original values and the mapping never left.",
    tsFront: "on the protected version",
    tsRevealed: "reconstructed locally",
    inputPh: "Message NOC Assistant…",
    vUpLbl: "⟨capsule:…⟩ out",
    vDnLbl: "model output",
  },
  ko: {
    sectionEyebrow: "작동 방식",
    sectionTitle: "원본 값은 내부에 유지됩니다.\n보호된 버전이 왕복합니다.",
    sectionDesc: "모델은 외부에 있을 수 있습니다. 원본 값은 아닙니다. LLM Capsule은 운영 데이터와 AI 실행 — 승인된 모델, 에이전트, MCP 도구 — 사이의 컨텍스트 보존 데이터 레이어입니다. 보호된 작업용 버전만 경계를 넘고, 실제 값은 워크플로우 내부에서 복원됩니다.",
    rt2Eyebrow: "라운드 트립 체험",
    envLabel: "고객 환경 — 온프레미스 / VPC / 에어갭",
    frontTag: "프론트 · 운영자가 보는 화면",
    chatTitle: "NOC 어시스턴트",
    chatStatus: "온라인",
    backTitle: "LLM Capsule",
    stepSub: "치환",
    stepRecon: "복원",
    stepHold: "매핑 유지",
    mapThTok: "보호된 대체값",
    mapThOrig: "원본 (로컬 유지)",
    stateSub: "모델에 전송: 대체값만. 원본은 이 로컬 매핑에 보관 — 경계를 넘지 않습니다.",
    stateRecon: "복원: 로컬 매핑으로 ⟨capsule:…⟩ 대체값을 실제 값으로 복원. 경계를 넘은 것은 없습니다.",
    arrowUpLbl: "보호된 작업용 버전",
    arrowDnLbl: "모델 출력 · 보호 유지",
    modelTitle: "승인된 모델",
    modelOr: "또는 자체 모델",
    modelFoot: "외부 · VPC · 온프레미스",
    caption: "⟨capsule:…⟩ 형태만 경계를 넘습니다 — 실제 값은 고객 환경 내부에서 복원됩니다.",
    capLabel: "캡슐화",
    uncLabel: "역캡슐화",
    note: "공개 기능은 모델에서 아무것도 가져오지 않습니다. 고객 환경 내부의 로컬 매핑 조회입니다 — 원본 값과 매핑은 밖으로 나간 적이 없습니다.",
    tsFront: "보호된 버전으로",
    tsRevealed: "로컬에서 복원됨",
    inputPh: "NOC 어시스턴트에게 메시지…",
    vUpLbl: "⟨capsule:…⟩ 전송",
    vDnLbl: "모델 출력",
  },
  de: {
    sectionEyebrow: "So funktioniert es",
    sectionTitle: "Rohwerte bleiben intern.\nEine geschützte Version macht den Rundlauf.",
    sectionDesc: "Das Modell kann extern sein. Die Rohwerte sind es nicht. LLM Capsule ist die kontexterhaltende Datenschicht zwischen Ihren Betriebsdaten und der KI-Ausführung — genehmigte Modelle, Agenten und MCP-Tools — sodass nur eine geschützte Arbeitsversion die Grenze überquert und die echten Werte in Ihrem Workflow rekonstruiert werden.",
    rt2Eyebrow: "Den Rundlauf ausprobieren",
    envLabel: "Ihre Umgebung — On-Premises / VPC / Air-Gapped",
    frontTag: "Front · was der Operator sieht",
    chatTitle: "NOC-Assistent",
    chatStatus: "online",
    backTitle: "LLM Capsule",
    stepSub: "ersetzen",
    stepRecon: "rekonstruieren",
    stepHold: "Mapping halten",
    mapThTok: "geschützter Platzhalter",
    mapThOrig: "Original (bleibt lokal)",
    stateSub: "An das Modell gesendet: nur Platzhalter. Originale werden in diesem lokalen Mapping gehalten — sie überqueren nie die Grenze.",
    stateRecon: "Rekonstruktion: ⟨capsule:…⟩-Platzhalter wurden mittels lokalem Mapping in echte Werte aufgelöst. Nichts hat die Grenze überquert.",
    arrowUpLbl: "geschützte Arbeitsversion",
    arrowDnLbl: "Modellausgabe · noch geschützt",
    modelTitle: "Genehmigtes Modell",
    modelOr: "oder Ihr internes Modell",
    modelFoot: "extern · VPC · On-Premises",
    caption: "Nur die ⟨capsule:…⟩-Form überquert die Grenze — echte Werte werden in Ihrer Umgebung rekonstruiert.",
    capLabel: "Verkapselt",
    uncLabel: "Entverkapselt",
    note: "Die Offenlegung ruft nichts vom Modell ab. Es ist ein lokaler Mapping-Lookup in Ihrer Umgebung — die Originalwerte und das Mapping haben sie nie verlassen.",
    tsFront: "auf der geschützten Version",
    tsRevealed: "lokal rekonstruiert",
    inputPh: "Nachricht an NOC-Assistent…",
    vUpLbl: "⟨capsule:…⟩ raus",
    vDnLbl: "Modellausgabe",
  },
}

interface Props {
  sectionEyebrow?: string
  sectionTitle?: string
  sectionDesc?: string
  rt2Caption?: string
  rt2Note?: string
  locale?: string
}

export default function HomeV3Part2_Architecture({
  sectionEyebrow = TRANSLATIONS.en.sectionEyebrow,
  sectionTitle = TRANSLATIONS.en.sectionTitle,
  sectionDesc = TRANSLATIONS.en.sectionDesc,
  rt2Caption = TRANSLATIONS.en.caption,
  rt2Note = TRANSLATIONS.en.note,
  locale = "en",
}: Props) {
  const { activeLocale } = useLocaleInfo()
  const framerLocale = (activeLocale as any)?.slug
  const eff = framerLocale || locale || "en"
  const isNonEn = eff !== "en"
  const T = TRANSLATIONS[eff] || TRANSLATIONS.en
  const r = (prop: string | undefined, key: string) =>
    isNonEn ? (T[key] || prop || TRANSLATIONS.en[key]) : (prop || T[key] || TRANSLATIONS.en[key])

  const _eye = r(sectionEyebrow, "sectionEyebrow")
  const _title = r(sectionTitle, "sectionTitle")
  const _desc = r(sectionDesc, "sectionDesc")
  const _cap = r(rt2Caption, "caption")
  const _note = r(rt2Note, "note")
  const t = (k: string) => T[k] || TRANSLATIONS.en[k]

  const [step, setStep] = useState(0)
  const [play, setPlay] = useState<"idle"|"playing"|"paused"|"done">("idle")
  const [seg, setSeg] = useState<null|"cap"|"unc">(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (play !== "playing") return
    if (step >= 6) { setPlay("done"); setSeg("unc"); return }
    const delay = step === 0 ? 350 : step === 1 ? 700 : 1700
    const timer = window.setTimeout(() => setStep(s => s + 1), delay)
    return () => clearTimeout(timer)
  }, [play, step])

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduced) { setStep(6); setPlay("done"); setSeg("unc"); return }
    const el = containerRef.current
    if (!el || !("IntersectionObserver" in window)) return
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting && !startedRef.current) { startedRef.current = true; setPlay("playing") } })
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const handlePlay = () => {
    if (play === "playing") { setPlay("paused"); return }
    if (play === "done" || step >= 6) { setStep(0); setSeg(null) }
    setPlay("playing")
  }
  const endState = (revealed: boolean) => { setStep(6); setPlay("done"); setSeg(revealed ? "unc" : "cap") }

  const showOp = step >= 1
  const showMap = step >= 2
  const upOn = step >= 3
  const mdlOn = step >= 3
  const dnOn = step >= 4
  const showTyping = step >= 4 && step <= 5
  const showAs = step >= 6
  const recon = seg === "unc" || (seg === null && step >= 5)
  const revealed = seg === "unc" || (seg === null && step >= 6)
  const icon = play === "playing" ? "pause" : play === "done" ? "replay" : "play"

  const titleLines = _title.split("\n")
  const opParts = RT2_OP[eff] || RT2_OP.en
  const asParts = RT2_AS[eff] || RT2_AS.en
  const cx = ["p2-rt2", recon && "p2-recon", revealed && "p2-revealed"].filter(Boolean).join(" ")

  const botAvatar = <div className="p2-ava p2-bot"><svg viewBox="0 0 24 24"><rect x="4.5" y="8" width="15" height="11" rx="3"/><circle cx="9.5" cy="13.5" r="1.4"/><circle cx="14.5" cy="13.5" r="1.4"/><path d="M12 4.5V8"/><circle cx="12" cy="4" r="1"/></svg></div>

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .p2-root{container-type:inline-size;container-name:p2;width:100%;word-break:keep-all;overflow-wrap:break-word}
        .p2-root *{box-sizing:border-box;margin:0;padding:0}
        .p2-root a{color:inherit;text-decoration:none}
        .p2-section{padding:92px 0;color:#fff;background:radial-gradient(900px 440px at 26% -4%,rgba(14,165,164,.10),transparent 60%),radial-gradient(1000px 560px at 82% 16%,rgba(91,79,233,.24),transparent 60%),linear-gradient(180deg,#0f1130,#0f1130)}
        .p2-wrap{max-width:1280px;margin:0 auto;padding:0 28px}
        .p2-eye{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.16);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:'Inter',sans-serif}
        .p2-eye::before{content:"";width:6px;height:6px;border-radius:50%;background:#0ea5a4;flex:0 0 auto}
        .p2-sec-head{max-width:720px}
        .p2-h2{font-size:clamp(28px,3.9vw,46px);line-height:1.12;font-weight:700;letter-spacing:-.03em;color:#fff;max-width:800px;margin-top:10px;font-family:'Inter',sans-serif}
        .p2-sub{margin-top:14px;font-size:17px;color:rgba(255,255,255,.70);max-width:720px;font-family:'Inter',sans-serif;line-height:1.62}
        @container p2 (max-width:640px){.p2-bk{display:none}}

        .p2-rt2{margin:14px 0 0}
        .p2-rt2-stage{display:flex;align-items:center;gap:16px}
        .p2-rt2-env{flex:1;min-width:0;border:1.5px dashed rgba(91,79,233,.55);border-radius:16px;background:rgba(255,255,255,.045);padding:14px}
        .p2-envlab{font-size:10.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#9d95f5;margin-bottom:12px;font-family:'Inter',sans-serif}
        .p2-cols{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch}
        @container p2 (max-width:680px){.p2-cols{grid-template-columns:1fr}}
        .p2-cross-h{flex:0 0 154px;width:154px}
        .p2-cross-v{display:none}
        .p2-cross-h .p2-g,.p2-cross-v .p2-g{opacity:.62;transition:opacity .35s ease}
        .p2-cross-h .p2-g.p2-on,.p2-cross-v .p2-g.p2-on{opacity:1}
        .p2-cross-h .p2-ar,.p2-cross-v .p2-ar{stroke:currentColor;stroke-width:3.2;fill:none}
        .p2-cross-h .p2-ah,.p2-cross-v .p2-ah{fill:currentColor}
        .p2-cross-h .p2-up,.p2-cross-v .p2-up{color:#5b6273;transition:color .35s ease}
        .p2-cross-h .p2-dn,.p2-cross-v .p2-dn{color:#5b6273;transition:color .35s ease}
        .p2-cross-h .p2-up.p2-on,.p2-cross-v .p2-up.p2-on{color:#9d95f5}
        .p2-cross-h .p2-dn.p2-on,.p2-cross-v .p2-dn.p2-on{color:#5ee0b0}
        .p2-up.p2-on .p2-ar,.p2-up.p2-on .p2-ah,.p2-dn.p2-on .p2-ar,.p2-dn.p2-on .p2-ah{filter:drop-shadow(0 0 5px currentColor)}
        .p2-model{flex:0 0 198px;width:198px;background:#0f1130;color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:13px;padding:16px 15px;display:flex;flex-direction:column;gap:9px;align-items:center;text-align:center;transition:box-shadow .35s ease}
        .p2-model.p2-on{box-shadow:0 0 0 3px rgba(94,224,176,.55)}
        .p2-mt{font-size:13px;font-weight:700;font-family:'Inter',sans-serif}
        .p2-mchips{display:flex;flex-direction:column;gap:6px;width:100%}
        .p2-mchips span{font-family:'JetBrains Mono',monospace;font-size:11px;color:#c8c0f5;background:#1b1d4a;border:1px solid #3a3d5e;border-radius:7px;padding:5px 0}
        .p2-mor{font-size:10.5px;color:#6b7280;font-family:'Inter',sans-serif}
        .p2-mfoot{font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#5ee0b0}
        .p2-rt2-cap{max-width:640px;margin:14px auto 0;text-align:center;font-size:11.5px;color:rgba(255,255,255,.62);line-height:1.5;font-family:'Inter',sans-serif}
        @container p2 (max-width:900px){.p2-rt2-stage{flex-direction:column;align-items:stretch;gap:6px}.p2-cross-h{display:none}.p2-cross-v{display:block;width:290px;max-width:100%;margin:0 auto}.p2-model{flex:auto;width:auto}}

        .p2-front{background:#fff;border:1px solid #e5e7eb;border-radius:13px;display:flex;flex-direction:column;overflow:hidden}
        .p2-fc-tag{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#6b7280;padding:12px 13px 0;font-family:'Inter',sans-serif}
        .p2-chathead{display:flex;align-items:center;gap:9px;padding:10px 13px;border-bottom:1px solid #e5e7eb}
        .p2-ava{width:27px;height:27px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:0 0 auto}
        .p2-ava svg{width:15px;height:15px;fill:none;stroke-width:1.7;display:block}
        .p2-ava.p2-bot{background:#5b4fe9}.p2-ava.p2-bot svg{stroke:#fff}
        .p2-ava.p2-me{background:#e5e7eb}.p2-ava.p2-me svg{stroke:#3a3d5e}
        .p2-cht{font-size:12.5px;font-weight:700;color:#0f1130;font-family:'Inter',sans-serif}
        .p2-chs{font-size:10.5px;color:#6b7280;display:flex;align-items:center;gap:5px;font-family:'Inter',sans-serif}
        .p2-chs .p2-dot{width:6px;height:6px;border-radius:50%;background:#0ea5a4;display:inline-block}
        .p2-msgs{padding:13px;display:flex;flex-direction:column;gap:2px;flex:1;min-height:188px}
        .p2-row{display:none;align-items:flex-end;gap:7px}
        .p2-row.p2-show{display:flex;animation:p2In .45s ease}
        .p2-row.p2-op{justify-content:flex-end}.p2-row.p2-as{justify-content:flex-start}
        @keyframes p2In{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .p2-bubble{max-width:80%;padding:9px 12px;font-size:12.5px;line-height:1.5;font-family:'Inter',sans-serif}
        .p2-bubble.p2-op{background:#5b4fe9;color:#fff;border-radius:14px 14px 4px 14px}
        .p2-bubble.p2-op .p2-s{text-decoration:underline dotted rgba(255,255,255,.6);text-underline-offset:2px}
        .p2-bubble.p2-as{background:#0f1130;color:#e5e0f0;font-family:'JetBrains Mono',monospace;border-radius:14px 14px 14px 4px;font-size:11.5px;transition:background .4s ease,color .4s ease}
        .p2-bubble.p2-as .p2-tok{color:#9d95f5;font-weight:700}
        .p2-bubble.p2-as .p2-real{display:none;color:#0b7f7e;font-weight:700}
        .p2-rt2.p2-revealed .p2-bubble.p2-as{background:#e6f7f6;color:#0b7f7e;font-family:'Inter',sans-serif;font-size:12.5px}
        .p2-rt2.p2-revealed .p2-bubble.p2-as .p2-tok{display:none}
        .p2-rt2.p2-revealed .p2-bubble.p2-as .p2-real{display:inline}
        .p2-bubble.p2-as.p2-typing{display:flex;gap:5px;align-items:center;padding:13px 14px}
        .p2-bubble.p2-as.p2-typing .p2-d{width:6px;height:6px;border-radius:50%;background:#9d95f5;animation:p2Blink 1.1s infinite}
        .p2-bubble.p2-as.p2-typing .p2-d:nth-child(2){animation-delay:.18s}
        .p2-bubble.p2-as.p2-typing .p2-d:nth-child(3){animation-delay:.36s}
        @keyframes p2Blink{0%,60%,100%{opacity:.25}30%{opacity:1}}
        @media(prefers-reduced-motion:reduce){.p2-bubble.p2-as.p2-typing .p2-d{animation:none}}
        .p2-ts{display:none;font-size:9.5px;color:#6b7280;padding:2px 2px 7px;font-family:'Inter',sans-serif}
        .p2-ts.p2-show{display:block}
        .p2-ts.p2-op{text-align:right}.p2-ts.p2-as{text-align:left;padding-left:34px}
        .p2-fp{display:inline}.p2-fr{display:none}
        .p2-rt2.p2-revealed .p2-fp{display:none}.p2-rt2.p2-revealed .p2-fr{display:inline}
        .p2-input{display:flex;align-items:center;gap:8px;padding:10px 12px;border-top:1px solid #e5e7eb}
        .p2-inbox{flex:1;background:#eeebfe;border-radius:18px;padding:8px 13px;font-size:11.5px;color:#6b7280;font-family:'Inter',sans-serif}
        .p2-send{width:30px;height:30px;border-radius:50%;background:#5b4fe9;display:flex;align-items:center;justify-content:center;flex:0 0 auto;opacity:.55}
        .p2-send svg{width:14px;height:14px;fill:#fff;display:block}

        .p2-back{background:#1b1d4a;border:1px solid #1b1d4a;border-radius:13px;padding:14px}
        .p2-bc-tag{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#6b7280;margin-bottom:12px;font-family:'Inter',sans-serif}
        .p2-bkt{font-size:11.5px;font-weight:700;color:#9d95f5;font-family:'Inter',sans-serif}
        .p2-bksteps{font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b7280;margin:4px 0 11px}
        .p2-bksteps b{color:#c8c0f5}
        .p2-map{width:100%;border-collapse:separate;border-spacing:0 5px;font-family:'JetBrains Mono',monospace;font-size:10.5px;display:none}
        .p2-map.p2-show{display:table;animation:p2In .45s ease}
        .p2-map th{font-family:'Inter',sans-serif;font-size:9px;letter-spacing:.03em;text-transform:uppercase;color:#6b7280;text-align:left;font-weight:700;padding:0 8px 2px}
        .p2-map td{padding:6px 8px;background:#1b1d4a;border:1px solid #2a2d5a;transition:background .4s ease,border-color .4s ease,color .4s ease}
        .p2-map td:first-child{border-radius:6px 0 0 6px;color:#9d95f5;font-weight:700;border-right:0}
        .p2-map td:last-child{border-radius:0 6px 6px 0;color:#ff8a80;font-weight:700;border-left:0}
        .p2-state{margin-top:12px;font-size:11.5px;line-height:1.5;padding:9px 11px;border-radius:9px;background:#1b1d4a;color:#9d95f5;border:1px solid #2a2d5a;transition:.4s;min-height:40px;font-family:'Inter',sans-serif}
        .p2-bp{display:inline}.p2-br{display:none}
        .p2-rt2.p2-recon .p2-map td,.p2-rt2.p2-revealed .p2-map td{background:#0b7f7e;border-color:#0b7f7e;color:#7fe0c0}
        .p2-rt2.p2-recon .p2-map td:first-child,.p2-rt2.p2-revealed .p2-map td:first-child{color:#7fe0c0}
        .p2-rt2.p2-recon .p2-state,.p2-rt2.p2-revealed .p2-state{background:#0b7f7e;color:#9bebcd;border-color:#0b7f7e}
        .p2-rt2.p2-recon .p2-bp,.p2-rt2.p2-revealed .p2-bp{display:none}
        .p2-rt2.p2-recon .p2-br,.p2-rt2.p2-revealed .p2-br{display:inline}

        .p2-ctrlrow{display:flex;justify-content:center;align-items:center;gap:14px;margin-top:18px;flex-wrap:wrap}
        .p2-play{width:42px;height:42px;border-radius:50%;border:0;background:#5b4fe9;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 auto;box-shadow:0 8px 20px -8px rgba(91,79,233,.7);transition:transform .15s,background .15s}
        .p2-play:hover{transform:scale(1.06)}
        .p2-play svg{width:20px;height:20px}
        .p2-toggle{display:inline-flex;border:1px solid #e5e7eb;border-radius:999px;overflow:hidden;background:#fff}
        .p2-seg{border:0;background:transparent;color:#3a3d5e;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:600;padding:9px 16px;cursor:pointer;transition:.15s;white-space:nowrap}
        .p2-seg+.p2-seg{border-left:1px solid #e5e7eb}
        .p2-seg[aria-pressed="true"]{background:#5b4fe9;color:#fff}
        .p2-seg[aria-pressed="false"]:hover{color:#5b4fe9}
        .p2-rt2-note{max-width:600px;margin:13px auto 0;text-align:center;font-size:12px;color:rgba(255,255,255,.62);line-height:1.5;font-family:'Inter',sans-serif}
        :focus-visible{outline:2px solid #5b4fe9;outline-offset:2px}
      `}</style>
      <div className="p2-root">
        <section className="p2-section" id="architecture">
          <div className="p2-wrap">
            <div className="p2-sec-head">
              <span className="p2-eye">{_eye}</span>
              <h2 className="p2-h2">
                {titleLines.length > 1
                  ? <>{titleLines[0]}<br className="p2-bk" /> {titleLines[1]}</>
                  : _title}
              </h2>
              <p className="p2-sub">{_desc}</p>
            </div>

            <div style={{ marginTop: "24px" }}><span className="p2-eye">{t("rt2Eyebrow")}</span></div>

            <div className={cx} ref={containerRef}>
              <div className="p2-rt2-stage">
                <div className="p2-rt2-env">
                  <div className="p2-envlab">{t("envLabel")}</div>
                  <div className="p2-cols">
                    <div className="p2-front">
                      <div className="p2-fc-tag">{t("frontTag")}</div>
                      <div className="p2-chathead">
                        {botAvatar}
                        <div>
                          <div className="p2-cht">{t("chatTitle")}</div>
                          <div className="p2-chs"><span className="p2-dot"></span>{t("chatStatus")}</div>
                        </div>
                      </div>
                      <div className="p2-msgs">
                        <div className={`p2-row p2-op ${showOp ? "p2-show" : ""}`}>
                          <div className="p2-bubble p2-op">
                            {opParts[0]}<span className="p2-s">{opParts[1]}</span>{opParts[2]}<span className="p2-s">{opParts[3]}</span>{opParts[4]}
                          </div>
                          <div className="p2-ava p2-me"><svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 19.5c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5"/></svg></div>
                        </div>
                        <div className={`p2-ts p2-op ${showOp ? "p2-show" : ""}`}>09:42</div>
                        <div className={`p2-row p2-as ${showTyping ? "p2-show" : ""}`}>
                          {botAvatar}
                          <div className="p2-bubble p2-as p2-typing"><span className="p2-d"></span><span className="p2-d"></span><span className="p2-d"></span></div>
                        </div>
                        <div className={`p2-row p2-as ${showAs ? "p2-show" : ""}`}>
                          {botAvatar}
                          <div className="p2-bubble p2-as">
                            <span className="p2-tok">{"⟨capsule:circuit_1⟩"}</span><span className="p2-real">CKT-77-AB12</span>
                            {asParts[1]}
                            <span className="p2-tok">{"⟨capsule:node_1⟩"}</span><span className="p2-real">edge-04</span>
                            {asParts[3]}
                          </div>
                        </div>
                        <div className={`p2-ts p2-as ${showAs ? "p2-show" : ""}`}>
                          09:42 {"·"} <span className="p2-fp">{t("tsFront")}</span><span className="p2-fr">{t("tsRevealed")}</span>
                        </div>
                      </div>
                      <div className="p2-input">
                        <div className="p2-inbox">{t("inputPh")}</div>
                        <div className="p2-send"><svg viewBox="0 0 24 24"><path d="M3 11l17-8-8 17-2.5-6.5L3 11z"/></svg></div>
                      </div>
                    </div>

                    <div className="p2-back">
                      <div className="p2-bkt">{t("backTitle")}</div>
                      <div className="p2-bksteps"><b className="p2-bp">{t("stepSub")}</b><b className="p2-br">{t("stepRecon")}</b> {"·"} {t("stepHold")}</div>
                      <table className={`p2-map ${showMap ? "p2-show" : ""}`}>
                        <thead><tr><th>{t("mapThTok")}</th><th>{t("mapThOrig")}</th></tr></thead>
                        <tbody>
                          <tr><td>{"⟨capsule:circuit_1⟩"}</td><td>CKT-77-AB12</td></tr>
                          <tr><td>{"⟨capsule:node_1⟩"}</td><td>edge-04</td></tr>
                        </tbody>
                      </table>
                      <div className="p2-state">
                        <span className="p2-bp">{t("stateSub")}</span>
                        <span className="p2-br">{t("stateRecon")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <svg className="p2-cross-h" viewBox="0 0 160 240" role="img" aria-label="Only the capsule stand-in form crosses to the approved model on the right; the model output comes back still in capsule form.">
                  <g className={`p2-g p2-up ${upOn ? "p2-on" : ""}`}>
                    <rect x="3" y="12" width="154" height="42" rx="11" fill="#eeebfe" stroke="#d4d0f5"/>
                    <text x="80" y="31" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10.5" fontWeight="700" fill="#5b4fe9">{"⟨capsule:circuit_1⟩"}</text>
                    <text x="80" y="46" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600" fill="#5b4fe9">{t("arrowUpLbl")}</text>
                    <line className="p2-ar" x1="14" y1="92" x2="120" y2="92"/>
                    <polygon className="p2-ah" points="120,83 139,92 120,101"/>
                  </g>
                  <g className={`p2-g p2-dn ${dnOn ? "p2-on" : ""}`}>
                    <line className="p2-ar" x1="134" y1="150" x2="34" y2="150"/>
                    <polygon className="p2-ah" points="34,141 15,150 34,159"/>
                    <rect x="3" y="186" width="154" height="42" rx="11" fill="#e6f7f6" stroke="#c4e6da"/>
                    <text x="80" y="205" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10.5" fontWeight="700" fill="#0ea5a4">{"⟨capsule:circuit_1⟩"}</text>
                    <text x="80" y="220" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600" fill="#0ea5a4">{t("arrowDnLbl")}</text>
                  </g>
                </svg>
                <svg className="p2-cross-v" viewBox="0 0 290 112" role="img" aria-label="Only the capsule stand-in form goes down to the approved model; the model output comes back up, still in capsule form.">
                  <g className={`p2-g p2-up ${upOn ? "p2-on" : ""}`}>
                    <line className="p2-ar" x1="92" y1="12" x2="92" y2="74"/>
                    <polygon className="p2-ah" points="83,74 92,90 101,74"/>
                    <text x="92" y="106" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fontWeight="700" fill="#5b4fe9">{t("vUpLbl")}</text>
                  </g>
                  <g className={`p2-g p2-dn ${dnOn ? "p2-on" : ""}`}>
                    <line className="p2-ar" x1="200" y1="78" x2="200" y2="26"/>
                    <polygon className="p2-ah" points="191,26 200,10 209,26"/>
                    <text x="200" y="106" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#0ea5a4">{t("vDnLbl")}</text>
                  </g>
                </svg>

                <div className={`p2-model ${mdlOn ? "p2-on" : ""}`}>
                  <div className="p2-mt">{t("modelTitle")}</div>
                  <div className="p2-mchips"><span>GPT-4</span><span>Claude</span><span>Llama</span></div>
                  <div className="p2-mor">{t("modelOr")}</div>
                  <div className="p2-mfoot">{t("modelFoot")}</div>
                </div>
              </div>
              <div className="p2-rt2-cap">{_cap}</div>
              <div className="p2-ctrlrow">
                <button className="p2-play" type="button" onClick={handlePlay} aria-label={icon === "pause" ? "Pause" : icon === "replay" ? "Replay" : "Play"}>
                  <svg viewBox="0 0 24 24" style={{ display: icon === "play" ? "block" : "none" }}><polygon points="8,5 19,12 8,19" fill="currentColor"/></svg>
                  <svg viewBox="0 0 24 24" style={{ display: icon === "pause" ? "block" : "none" }}><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>
                  <svg viewBox="0 0 24 24" style={{ display: icon === "replay" ? "block" : "none", marginLeft: "1px", fill: "none", stroke: "currentColor", strokeWidth: 2.1, strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><polyline points="3,3.5 3,8.5 8,8.5"/></svg>
                </button>
                <div className="p2-toggle" role="group" aria-label="View mode">
                  <button type="button" className="p2-seg" aria-pressed={seg === "cap" ? "true" : "false"} onClick={() => endState(false)}>{t("capLabel")}</button>
                  <button type="button" className="p2-seg" aria-pressed={seg === "unc" ? "true" : "false"} onClick={() => endState(true)}>{t("uncLabel")}</button>
                </div>
              </div>
              <div className="p2-rt2-note">{_note}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

addPropertyControls(HomeV3Part2_Architecture, {
  sectionEyebrow: { type: ControlType.String, title: "Eyebrow",     defaultValue: "How it works" },
  sectionTitle:   { type: ControlType.String, title: "Title",        defaultValue: "Raw values stay inside.\nA protected version does the round trip.", displayTextArea: true },
  sectionDesc:    { type: ControlType.String, title: "Description",  defaultValue: "The model can be external. The raw values are not. LLM Capsule is the context-preserving data layer between your operational data and AI execution — approved models, agents and MCP tools — so only a protected working version ever crosses, and the real values are reconstructed inside your workflow.", displayTextArea: true },
  rt2Caption:     { type: ControlType.String, title: "RT2 Caption",  defaultValue: "Only the ⟨capsule:…⟩ form crosses the boundary — real values are reconstructed inside your environment.", displayTextArea: true },
  rt2Note:        { type: ControlType.String, title: "RT2 Note",     defaultValue: "The reveal does not fetch anything from the model. It is a local mapping lookup inside your environment — the original values and the mapping never left.", displayTextArea: true },
  locale:         { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
})
