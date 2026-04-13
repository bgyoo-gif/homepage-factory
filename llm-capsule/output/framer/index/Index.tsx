import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Asset Base ────────────────────────────────────────────────────────────────
const IMG = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images"
const GFX = "https://bgyoo-gif.github.io/homepage-factory/cubig/reference/graphics"

// ─── Palette ───────────────────────────────────────────────────────────────────
const P = {
  brandPrimary:   "#1821E8",
  brandSecondary: "#5690D4",
  brandAccent:    "#55B45D",
  brandLight:     "#B8D4EE",
  neutral900: "#0f0f0f",
  neutral850: "#141414",
  neutral800: "#171719",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral300: "#bababa",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral100: "#ececec",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white:      "#ffffff",
  black:      "#000000",
  textPrimary:   "#0f0f0f",
  textSecondary: "#636363",
  textTertiary:  "#9c9c9c",
  textInverse:   "#ffffff",
  success: "#0e824c",
  error:   "#ff3030",
  borderDefault: "#e6e7e9",
  borderStrong:  "#171719",
  surfaceDark:  "#171719",
  surfaceMid:   "#f2f2f2",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
  gradientBrand: "linear-gradient(130deg, #1821E8 0%, #5690D4 50%, #55B45D 100%)",
  gradientArchHeader: "linear-gradient(115deg, #5670E8 0%, #5690D4 50%, #55B45D 100%)",
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const JSONLD_ORG = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LLM Capsule",
  "url": "https://llmcapsule.ai",
  "description": "Enterprise AI enablement data layer and plugin by CUBIG. Enable any organization to adopt AI on sensitive enterprise data without exposing original information.",
  "parentOrganization": { "@type": "Organization", "name": "CUBIG", "url": "https://cubig.ai" },
})

const JSONLD_PRODUCT = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LLM Capsule",
  "description": "Enterprise AI enablement data layer and plugin. Enable AI. Protect data. Restore results.",
  "brand": { "@type": "Brand", "name": "CUBIG" },
})

const JSONLD_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does LLM Capsule protect enterprise data during AI processing?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services." },
    },
    {
      "@type": "Question",
      "name": "How is LLM Capsule different from data masking and redaction tools?",
      "acceptedAnswer": { "@type": "Answer", "text": "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically." },
    },
    {
      "@type": "Question",
      "name": "What is the difference between LLM Capsule and prompt security gateways?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prompt security gateways filter at the API level. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward." },
    },
    {
      "@type": "Question",
      "name": "Where can LLM Capsule be deployed?",
      "acceptedAnswer": { "@type": "Answer", "text": "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models." },
    },
    {
      "@type": "Question",
      "name": "What is enterprise AI data protection?",
      "acceptedAnswer": { "@type": "Answer", "text": "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration." },
    },
    {
      "@type": "Question",
      "name": "What certifications does LLM Capsule hold?",
      "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements." },
    },
  ],
})

// ─── Localization ─────────────────────────────────────────────────────────────
type Lang = "en" | "ko" | "ja" | "de"

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    // Section 1 — Hero
    heroTitle: "Use any AI on your real documents — without exposing a single line",
    heroTitleHighlight: "without exposing",
    heroDescription: "Your sensitive documents go through LLM Capsule before reaching AI. Confidential names, figures, and terms are replaced locally — AI processes the safe version — then results are restored with your original data. Each organization defines what counts as sensitive.",
    heroBtn1Label: "Request a Demo",
    heroBtn2Label: "Download Architecture Brief",
    heroBtn3Label: "Talk to an Architect",
    heroBtn4Label: "Available on AWS Marketplace",
    heroScreenshotAlt: "LLM Capsule Dashboard",

    // Section 2 — Trust
    trustHeading: "Trusted by enterprises processing sensitive documents",
    trustHeadingHighlight: "Trusted",
    trustSubheading: "across finance, insurance, legal, healthcare, and telecom",
    kpi1Label: "Per Page Processing",
    kpi2Label: "Restoration Rate",
    kpi3Label: "Output Similarity",

    // Section 3 — Five Capabilities
    capHeading: "Five capabilities that remove every barrier to enterprise AI",
    capHeadingHighlight: "every barrier",
    capSubheading: "Other tools either block AI usage or destroy document context. LLM Capsule solves both — here's how.",
    cap1Title: "Your data never leaves",
    cap1Desc: "Security team blocking AI adoption? With zero exposure, AI only sees safe placeholders. Even if the LLM provider logs everything, zero enterprise data is exposed.",
    cap2Title: "Get real results back",
    cap2Desc: "AI outputs auto-restore with your original names, figures, and references — ready for reports, legal reviews, and client deliverables. No manual reconstruction.",
    cap3Title: "You define what's sensitive",
    cap3Desc: "Standard PII categories aren't enough. Define project codes, deal terms, internal IDs, and any business-specific confidential markers — tailored to your organization.",
    capPlus1Title: "Documents stay readable to AI",
    capPlus1Desc: "Tables, cross-references, and layouts survive the process intact. AI understands full document context — not broken fragments that produce useless outputs.",
    capPlus2Title: "Use any AI model, anytime",
    capPlus2Desc: "ChatGPT today, Claude tomorrow, on-premise LLM next month. Switch freely — no re-engineering, no vendor lock-in. Protection stays consistent across every model.",
    capBannerText: "LLM Capsule is not a masking tool, not a prompt filter, and not a redaction layer. It is the data layer that sits between your documents and any AI — making enterprise AI adoption possible without compromise.",
    capBannerBtn1: "See Product",
    capBannerBtn2: "View Architecture",
    capBannerBtn3: "Read the capsule model",

    // Section 4 — Industry Proof
    industryHeading: "Enabling AI adoption across regulated industries where sensitive data was the blocker",
    industryHeadingHighlight: "regulated industries",
    industrySubheading: "LLM Capsule unlocks AI usage on real enterprise documents across financial services, government, healthcare, and legal workflows — turning blocked projects into production deployments.",
    industryPublicSector: "Public Sector",
    industryFinance: "Finance & Insurance",
    industryHealthcare: "Healthcare",
    industryLegal: "Legal",
    industryTelecom: "Telecom",
    industrySecurity: "Network Security",
    industryBtn: "See industry solutions",

    // Section 5 — Step Tabs
    tabsHeading: "Enterprise AI enablement through a 3+2 architecture",
    tabsHeadingHighlight: "3+2 architecture",
    tabsSubheading: "LLM Capsule enables enterprise AI adoption on sensitive data through a 3+2 data layer architecture: three core enablement pillars plus two additional value capabilities that ensure output quality and model flexibility.",
    tabCore1Label: "Core 1 — Zero Exposure",
    tabCore2Label: "Core 2 — Restoration",
    tabCore3Label: "Core 3 — Enterprise Context",
    tabPlus1Label: "+1 Structure-Preserving",
    tabPlus2Label: "+2 Cross-Model",
    tabCore1Title: "Zero Exposure",
    tabCore1P1: "Sensitive data is replaced with safe placeholders (encapsulation) inside your environment before anything leaves. Original values never reach external AI services.",
    tabCore1P2: "Zero exposure means the AI provider processes useful data but cannot reconstruct original sensitive values. Even if the provider logged, stored, or trained on the received data, no original enterprise information would be exposed. Encapsulation creates a data representation that is both processable by AI and opaque to the receiving service — provider logs are safe, raw data never leaves.",
    tabCore2Title: "Restoration",
    tabCore2P1: "AI outputs are automatically restored locally — not abstracted, not anonymized, but fully restored with real business data for immediate use.",
    tabCore2P2: "Unlike masking tools that produce generic AI outputs requiring manual reconstruction, LLM Capsule automatically restores AI results with original names, account numbers, dates, and references. Restored outputs are directly usable in enterprise workflows — regulatory reports, legal documents, claim analysis, and internal communications — without any post-processing step. This eliminates the \"manual review loop\" that kills AI ROI.",
    tabCore3Title: "Enterprise Context",
    tabCore3P1: "Define and control sensitive entities beyond standard PII — project codes, internal IDs, contract terms, and strategic data specific to your organization.",
    tabCore3P2: "Enterprise documents contain far more sensitivity than personally identifiable information alone. A legal memo about a pending acquisition contains no PII but is filled with deal structure, valuation ranges, and strategic rationale. Enterprise context enables policy-based sensitivity classification through context-aware data control that adapts to document type, department, and workflow context — tailored protection for your specific business logic and secrets.",
    tabPlus1Title: "Structure-Preserving",
    tabPlus1P1: "Tables, diagrams, cross-references, and document hierarchy remain intact — your document layout stays readable to AI throughout the process.",
    tabPlus1P2: "Masking tools destroy document context. LLM Capsule keeps tables, diagrams, and entity relationships intact so AI understands the full context while sensitive values are replaced. Reference consistency, diagram preservation, and document hierarchy are all maintained.",
    tabPlus2Title: "Cross-Model Execution",
    tabPlus2P1: "Works with any AI model. Switch between ChatGPT, Claude, Gemini, or any LLM API instantly — no re-engineering, no vendor lock-in.",
    tabPlus2P2: "LLM Capsule acts as a model-agnostic AI enablement layer for all AI models. Swap or mix models anytime — zero re-engineering, no vendor lock-in, consistent protection across every provider. Connect to any model simultaneously, including CUBIG's own SynTitan platform.",

    // Section 6 — Case Study
    csHeading: "AI-Enabled Enterprise Workflows",
    csHeadingHighlight: "Enterprise Workflows",
    csSubheading: "LLM Capsule plugs into the most common enterprise AI workflows — from document intake to output delivery, one data layer enables AI adoption on real documents.",
    cs1Title: "Secure Document Summarization",
    cs1Desc: "AI generates executive summaries of sensitive documents — contracts, reports, filings — while all confidential elements are replaced with safe placeholders. Restored summaries contain real names, dates, and figures ready for business use.",
    cs1Bullet1: "Contracts, reports, and filings protected",
    cs1Bullet2: "Real names, dates, and figures restored in output",
    cs2Title: "AI Claims Processing",
    cs2Desc: "Insurance and financial claims go through LLM Capsule before AI-powered classification, damage assessment, and fraud detection. Restored outputs feed directly into claims management systems with real policyholder data.",
    cs2Bullet1: "Classification, damage assessment, fraud detection enabled",
    cs2Bullet2: "Restored outputs feed directly into claims systems",
    cs3Title: "Confidential Contract Review",
    cs3Desc: "AI extracts key terms, obligations, and risk clauses from protected contracts. Restored outputs include real party names, amounts, and clause references — ready for direct integration into deal management systems.",
    cs3Bullet1: "Key terms, obligations, and risk clauses extracted",
    cs3Bullet2: "Real party names, amounts, and references restored",
    cs4Title: "Internal Report Generation",
    cs4Desc: "AI drafts internal reports from protected data sources — performance reviews, audit findings, compliance summaries. Restored reports contain real employee names, department data, and metric values.",
    cs4Bullet1: "Performance reviews, audit findings, compliance summaries",
    cs4Bullet2: "Real employee names, department data, and metrics restored",

    // Section 7 — Problem
    probHeading: "Enterprise data is never AI-ready by default",
    probHeadingHighlight: "never AI-ready",
    probSubheading: "Every enterprise document contains sensitive information that cannot be sent to external AI models. But without real data, AI outputs are generic and unusable. This is the core barrier to enterprise AI adoption.",
    probBody1: "Organizations cannot leverage AI capabilities without first making their data AI-ready.",
    probBody2: "Traditional approaches — masking, redaction, tokenization, and prompt security gateways — were not designed for AI workflows. Masking and redaction permanently remove the data context that AI models need. Prompt gateways filter at the API level but cannot handle enterprise documents end to end. The result is either blocked AI projects or degraded outputs that require extensive manual reconstruction.",
    probBody3: "These tools create a fundamental adoption barrier: without a data layer that makes sensitive data AI-ready while keeping it protected, enterprise AI projects stall before they can demonstrate value.",
    probTableApproach: "Approach",
    probTableMethod: "Method",
    probTableLimitation: "Limitation",
    probTableImpact: "AI Workflow Impact",
    probRow1Approach: "Masking & Redaction",
    probRow1Method: "Permanently removes data",
    probRow1Limitation: "Destroys context AI needs",
    probRow1Impact: "Unusable [REDACTED] outputs requiring manual reconstruction",
    probRow2Approach: "Prompt Security Gateways",
    probRow2Method: "API-level prompt filtering",
    probRow2Limitation: "No document-level protection",
    probRow2Impact: "No output restoration capability",
    probRow3Approach: "Synthetic Data Platforms",
    probRow3Method: "Artificial data generation",
    probRow3Limitation: "Training/testing only",
    probRow3Impact: "Cannot replace real documents in live AI workflows",
    probRow4Approach: "Security Team Blocks AI",
    probRow4Method: "Manual approval gate",
    probRow4Limitation: "Blocks all AI projects",
    probRow4Impact: "Projects never demonstrate value before being cancelled",
    probBannerText: "LLM Capsule sits between your documents and any AI model. It replaces sensitive data with safe placeholders inside your environment, lets AI process the protected version, then restores real data back into AI outputs — not at the model layer, not at the prompt layer, but at the data layer where it matters.",
    probBannerBtn: "See how it works",

    // Section 8 — Before/After
    baHeading: "From blocked AI projects to enabled enterprise AI with usable outputs",
    baHeadingHighlight: "enabled enterprise AI",
    baWithoutBadge: "WITHOUT LLM CAPSULE",
    baWithoutTitle: "Enterprise AI is blocked or broken",
    baWithout1: "AI blocked entirely — security teams reject proposals due to data exposure risk",
    baWithout2: "Masking and redaction strip context — AI outputs are abstracted and unusable for enterprise workflows",
    baWithout3: "Manual review workflows persist — documents require human processing because AI cannot be trusted with real data",
    baWithout4: "Document structure destroyed — flat masking breaks tables, entity relationships, and cross-references",
    baWithout5: "Low-quality AI output — even when AI is permitted, outputs require extensive manual reconstruction to be usable",
    baWithout6: "Enterprise AI projects stall in pilot — no path from proof of concept to production deployment",
    baWithBadge: "WITH LLM CAPSULE",
    baWithTitle: "AI adoption enabled on real enterprise data",
    baWith1: "AI enabled on sensitive documents — the data layer handles protection so teams can focus on AI outcomes",
    baWith2: "Real documents processed with best-in-class LLMs — ChatGPT, Claude, Gemini, Perplexity, or any LLM API",
    baWith3: "Compliance satisfied — zero exposure architecture meets enterprise AI governance requirements automatically",
    baWith4: "Restored outputs retain original business context — real names, real figures, real references restored locally",
    baWith5: "Tables, layouts, cross-references, and document hierarchy fully preserved through structure-preserving processing",
    baWith6: "98% output similarity with zero data exposure — measured on real enterprise document processing workloads",

    // Section 9 — Diagram
    diagHeading: "A data layer between your enterprise and any LLM",
    diagHeadingHighlight: "data layer",
    diagSubheading: "LLM Capsule sits between your internal systems and external AI models. Raw data stays inside your environment — the trust boundary is never crossed by original data. AI only processes the protected version.",
    diagWindowTitle: "LLM Capsule Architecture",
    diagColInternal: "INTERNAL ENVIRONMENT",
    diagCustomerDocs: "Customer Documents",
    diagInternalDBs: "Internal Databases",
    diagRAGPipelines: "RAG Pipelines",
    diagAdminConsole: "Admin Console",
    diagPolicyEngine: "Policy Engine",
    diagCapsuleLabel: "Encapsulation & Restoration",
    diagColFlow: "HOW DATA FLOWS THROUGH LLM CAPSULE",
    diagStep1Label: "STEP 1 — LOCAL",
    diagStep1Text: "Detection",
    diagStep2Label: "STEP 2 — LOCAL",
    diagStep2Text: "Encapsulation",
    diagStep3Label: "STEP 3 — EXTERNAL",
    diagStep3Text: "LLM Processing",
    diagStep4Label: "STEP 4 — LOCAL",
    diagStep4Text: "Restoration",
    diagExternalArrow: "External",
    diagLocalArrow: "Local",
    diagOutputLabel: "Business-Ready Output",
    diagTrustBoundary: "TRUST BOUNDARY",
    diagColExternal: "EXTERNAL AI SERVICES",
    diagMarketplaceBtn: "View on AWS Marketplace",

    // Section 10 — Performance
    perfHeading: "Measured performance on real enterprise document processing workloads",
    perfHeadingHighlight: "Measured performance",
    perfSubheading: "These metrics are measured on enterprise documents with 2,200+ character average length across regulated industry workflows including finance, healthcare, legal, and public sector environments.",
    perf1Label: "Detection Accuracy",
    perf2Label: "Workflow Accuracy",
    perf3Label: "Structured PII",
    perf4Label: "Response Similarity",
    perfBannerText: "Enable AI. Protect data. Restore results. Track everything.",
    perfBannerCaption: "0.12s processing per 2,200-character document. Tested across finance, healthcare, legal, and public sector workflows",

    // Section 11 — CTA
    ctaTitle: "See how LLM Capsule enables AI on your enterprise documents",
    ctaDescription: "Bring your documents, deployment constraints, and evaluation criteria. We demonstrate how the AI enablement data layer works on your actual data, in your environment, against your compliance requirements.",
    ctaBtn1Label: "Request a Demo",
    ctaBtn2Label: "Talk to an Architect",
    ctaBtn3Label: "Download Architecture Brief",
    ctaBtn4Label: "Available on AWS Marketplace",

    // Section 12 — FAQ
    faqHeading: "Frequently Asked Questions",
    faqHeadingHighlight: "Questions",
    faq1Q: "How does LLM Capsule protect enterprise data during AI processing?",
    faq1A: "LLM Capsule acts as an AI enablement data layer that encapsulates sensitive data locally before it leaves the enterprise environment. Only protected representations are sent to AI models. After processing, outputs are restored locally so they remain usable for real enterprise workflows. The original data never reaches external AI services — this is what makes it an AI enablement plugin rather than a monitoring or filtering tool.",
    faq2Q: "How is LLM Capsule different from data masking and redaction tools?",
    faq2A: "Masking and redaction permanently remove data, destroying the context AI models need to produce useful outputs. AI results from masked documents contain [REDACTED] placeholders that require manual reconstruction. LLM Capsule encapsulates data with structure-preserving processing and restores outputs after AI processing, producing enterprise-ready results automatically. This is the fundamental difference between static data anonymization tools and a restorable workflow designed for AI.",
    faq3Q: "What is the difference between LLM Capsule and prompt security gateways?",
    faq3A: "Prompt security gateways filter at the API level — they scan prompts for sensitive patterns and block or strip flagged content. They cannot protect enterprise documents processed through RAG pipelines or batch workflows, and they provide no output restoration. LLM Capsule operates as a data layer plugin, encapsulating sensitive elements before any AI processing occurs and restoring outputs afterward. The two approaches can be complementary, but only a data-layer approach provides end-to-end AI enablement on enterprise data.",
    faq4Q: "Where can LLM Capsule be deployed?",
    faq4A: "LLM Capsule supports on-premise, air-gapped, cloud (including AWS Marketplace), hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type. This flexibility is critical for enterprise AI governance — different data types and regulatory requirements may demand different deployment architectures within a single organization.",
    faq5Q: "What is enterprise AI data protection?",
    faq5A: "Enterprise AI enablement is the practice of making sensitive enterprise data AI-ready so organizations can adopt LLMs without exposing original information. LLM Capsule achieves this at the data layer through local encapsulation, structure-preserving processing, and local restoration — ensuring zero exposure of original data while enabling full AI workflow adoption. Unlike model-level approaches that block or filter, the data layer plugin transforms data itself to make enterprise AI possible.",
    faq6Q: "What certifications does LLM Capsule hold?",
    faq6A: "ISO 27001, ISO 42001, GS Certification. LLM Capsule is available on AWS Marketplace and supports deployment within enterprise compliance frameworks including GDPR, HIPAA, and sector-specific regulatory requirements.",
  },

  ko: {
    heroTitle: "실제 문서에 어떤 AI든 사용하세요 — 단 한 줄도 노출하지 않고",
    heroTitleHighlight: "노출하지 않고",
    heroDescription: "민감 문서는 AI에 도달하기 전에 LLM Capsule을 거칩니다. 기밀 이름, 수치, 용어가 로컬에서 대체되고 — AI는 안전한 버전을 처리한 뒤 — 결과가 원본 데이터로 복원됩니다. 각 조직이 민감 항목을 직접 정의합니다.",
    heroBtn1Label: "Request a Demo",
    heroBtn2Label: "아키텍처 브리프 다운로드",
    heroBtn3Label: "Talk to an Architect",
    heroBtn4Label: "Available on AWS Marketplace",
    heroScreenshotAlt: "LLM Capsule 대시보드",

    trustHeading: "민감 문서를 처리하는 기업들이 신뢰합니다",
    trustHeadingHighlight: "신뢰합니다",
    trustSubheading: "금융, 보험, 법률, 헬스케어, 통신 분야",
    kpi1Label: "페이지당 처리 시간",
    kpi2Label: "Restoration 비율",
    kpi3Label: "출력 유사도",

    capHeading: "기업 AI의 모든 장벽을 제거하는 다섯 가지 역량",
    capHeadingHighlight: "모든 장벽",
    capSubheading: "다른 도구는 AI 사용을 차단하거나 문서 맥락을 파괴합니다. LLM Capsule은 두 가지를 모두 해결합니다.",
    cap1Title: "데이터는 절대 외부로 나가지 않습니다",
    cap1Desc: "보안팀이 AI 도입을 막고 있습니까? 제로 노출 방식으로 AI는 안전한 플레이스홀더만 봅니다. LLM 제공업체가 모든 것을 로깅하더라도 기업 데이터 노출은 제로입니다.",
    cap2Title: "실제 결과를 돌려받으세요",
    cap2Desc: "AI 출력은 원래 이름, 수치, 참조와 함께 자동 복원됩니다 — 보고서, 법률 검토, 고객 납품물에 바로 사용할 수 있습니다. 수동 재구성이 필요 없습니다.",
    cap3Title: "민감 항목을 직접 정의하세요",
    cap3Desc: "표준 PII 범주만으로는 부족합니다. 프로젝트 코드, 거래 조건, 내부 ID 및 비즈니스별 기밀 마커를 정의하세요 — 조직에 맞게 맞춤 설정합니다.",
    capPlus1Title: "문서가 AI에 읽기 좋은 상태를 유지합니다",
    capPlus1Desc: "테이블, 교차 참조, 레이아웃이 프로세스를 거쳐도 온전하게 유지됩니다. AI는 쓸모없는 출력을 만드는 깨진 조각이 아닌 전체 문서 맥락을 이해합니다.",
    capPlus2Title: "어떤 AI 모델이든, 언제든지",
    capPlus2Desc: "오늘은 ChatGPT, 내일은 Claude, 다음 달에는 온프레미스 LLM. 자유롭게 전환하세요 — 재설계 불필요, 벤더 종속 없음. 모든 모델에서 보호가 일관되게 유지됩니다.",
    capBannerText: "LLM Capsule은 마스킹 도구도, 프롬프트 필터도, 삭제 레이어도 아닙니다. 문서와 모든 AI 사이에 위치하는 데이터 레이어로서, 타협 없이 기업 AI 도입을 가능하게 합니다.",
    capBannerBtn1: "제품 보기",
    capBannerBtn2: "아키텍처 보기",
    capBannerBtn3: "캡슐 모델 읽기",

    industryHeading: "민감 데이터가 장벽이었던 규제 산업 전반에서 AI 도입을 지원합니다",
    industryHeadingHighlight: "규제 산업",
    industrySubheading: "LLM Capsule은 금융, 정부, 헬스케어, 법률 워크플로우에서 실제 기업 문서에 대한 AI 사용을 가능하게 합니다 — 차단된 프로젝트를 프로덕션 배포로 전환합니다.",
    industryPublicSector: "공공 부문",
    industryFinance: "금융 및 보험",
    industryHealthcare: "헬스케어",
    industryLegal: "법률",
    industryTelecom: "통신",
    industrySecurity: "네트워크 보안",
    industryBtn: "산업별 솔루션 보기",

    tabsHeading: "3+2 아키텍처를 통한 기업 AI 활성화",
    tabsHeadingHighlight: "3+2 아키텍처",
    tabsSubheading: "LLM Capsule은 3+2 데이터 레이어 아키텍처를 통해 민감 데이터에 대한 기업 AI 도입을 지원합니다: 세 가지 핵심 활성화 기둥과 출력 품질 및 모델 유연성을 보장하는 두 가지 추가 가치 역량입니다.",
    tabCore1Label: "Core 1 — Zero Exposure",
    tabCore2Label: "Core 2 — Restoration",
    tabCore3Label: "Core 3 — Enterprise Context",
    tabPlus1Label: "+1 구조 보존",
    tabPlus2Label: "+2 Cross-Model",
    tabCore1Title: "Zero Exposure",
    tabCore1P1: "민감 데이터는 환경 내부에서 안전한 플레이스홀더(Encapsulation)로 대체된 후 외부로 전송됩니다. 원본 값은 절대 외부 AI 서비스에 도달하지 않습니다.",
    tabCore1P2: "Zero Exposure는 AI 제공업체가 유용한 데이터를 처리하되 원본 민감 값을 재구성할 수 없음을 의미합니다. 제공업체가 수신 데이터를 로깅, 저장 또는 학습에 사용하더라도 원본 기업 정보는 노출되지 않습니다. Encapsulation은 AI가 처리 가능하면서도 수신 서비스에 불투명한 데이터 표현을 생성합니다 — 제공업체 로그는 안전하고, 원시 데이터는 절대 외부로 나가지 않습니다.",
    tabCore2Title: "Restoration",
    tabCore2P1: "AI 출력은 로컬에서 자동으로 복원됩니다 — 추상화도, 익명화도 아닌, 즉시 사용 가능한 실제 비즈니스 데이터로 완전히 복원됩니다.",
    tabCore2P2: "수동 재구성이 필요한 일반적인 AI 출력을 생성하는 마스킹 도구와 달리, LLM Capsule은 원래 이름, 계좌 번호, 날짜, 참조로 AI 결과를 자동 복원합니다. 복원된 출력은 규제 보고서, 법률 문서, 청구 분석, 내부 커뮤니케이션 등 기업 워크플로우에서 후처리 단계 없이 바로 사용할 수 있습니다. 이는 AI ROI를 저해하는 \"수동 검토 루프\"를 제거합니다.",
    tabCore3Title: "Enterprise Context",
    tabCore3P1: "표준 PII를 넘어 민감 엔터티를 정의하고 제어하세요 — 프로젝트 코드, 내부 ID, 계약 조건 및 조직 고유의 전략적 데이터까지.",
    tabCore3P2: "기업 문서는 개인식별정보만으로는 설명할 수 없는 훨씬 더 많은 민감성을 포함합니다. 인수 진행 중인 법률 메모에는 PII가 없지만 거래 구조, 밸류에이션 범위, 전략적 근거로 가득합니다. Enterprise Context는 문서 유형, 부서, 워크플로우 맥락에 적응하는 맥락 인식 데이터 제어를 통해 정책 기반 민감도 분류를 가능하게 합니다 — 특정 비즈니스 로직과 비밀에 맞춘 보호입니다.",
    tabPlus1Title: "구조 보존",
    tabPlus1P1: "테이블, 다이어그램, 교차 참조, 문서 계층 구조가 그대로 유지됩니다 — 프로세스 전반에 걸쳐 문서 레이아웃이 AI에 읽기 좋은 상태를 유지합니다.",
    tabPlus1P2: "마스킹 도구는 문서 맥락을 파괴합니다. LLM Capsule은 민감 값이 대체되는 동안 테이블, 다이어그램, 엔터티 관계를 유지하여 AI가 전체 맥락을 이해할 수 있게 합니다. 참조 일관성, 다이어그램 보존, 문서 계층 구조가 모두 유지됩니다.",
    tabPlus2Title: "Cross-Model Execution",
    tabPlus2P1: "어떤 AI 모델과도 호환됩니다. ChatGPT, Claude, Gemini 또는 모든 LLM API 간에 즉시 전환 — 재설계 불필요, 벤더 종속 없음.",
    tabPlus2P2: "LLM Capsule은 모든 AI 모델을 위한 모델 비종속 AI 활성화 레이어 역할을 합니다. 언제든 모델을 교체하거나 조합하세요 — 재설계 제로, 벤더 종속 없음, 모든 제공업체에서 일관된 보호. CUBIG의 자체 SynTitan 플랫폼을 포함한 모든 모델에 동시 연결이 가능합니다.",

    csHeading: "AI 기반 기업 워크플로우",
    csHeadingHighlight: "기업 워크플로우",
    csSubheading: "LLM Capsule은 가장 일반적인 기업 AI 워크플로우에 연결됩니다 — 문서 수집부터 출력 전달까지, 하나의 데이터 레이어로 실제 문서에 대한 AI 도입을 지원합니다.",
    cs1Title: "안전한 문서 요약",
    cs1Desc: "AI가 민감 문서 — 계약서, 보고서, 신고서 — 의 경영진 요약을 생성하며, 모든 기밀 요소가 안전한 플레이스홀더로 대체됩니다. 복원된 요약에는 실제 이름, 날짜, 수치가 포함되어 비즈니스에 바로 사용할 수 있습니다.",
    cs1Bullet1: "계약서, 보고서, 신고서 보호",
    cs1Bullet2: "실제 이름, 날짜, 수치가 출력에 복원",
    cs2Title: "AI 청구 처리",
    cs2Desc: "보험 및 금융 청구가 AI 기반 분류, 손해 평가, 사기 탐지 전에 LLM Capsule을 거칩니다. 복원된 출력은 실제 보험계약자 데이터와 함께 청구 관리 시스템에 직접 반영됩니다.",
    cs2Bullet1: "분류, 손해 평가, 사기 탐지 지원",
    cs2Bullet2: "복원된 출력이 청구 시스템에 직접 반영",
    cs3Title: "기밀 계약서 검토",
    cs3Desc: "AI가 보호된 계약서에서 핵심 조건, 의무, 리스크 조항을 추출합니다. 복원된 출력에는 실제 당사자명, 금액, 조항 참조가 포함되어 — 딜 관리 시스템에 직접 통합할 수 있습니다.",
    cs3Bullet1: "핵심 조건, 의무, 리스크 조항 추출",
    cs3Bullet2: "실제 당사자명, 금액, 참조 복원",
    cs4Title: "내부 보고서 생성",
    cs4Desc: "AI가 보호된 데이터 소스에서 내부 보고서를 작성합니다 — 성과 평가, 감사 결과, 컴플라이언스 요약. 복원된 보고서에는 실제 직원명, 부서 데이터, 지표 값이 포함됩니다.",
    cs4Bullet1: "성과 평가, 감사 결과, 컴플라이언스 요약",
    cs4Bullet2: "실제 직원명, 부서 데이터, 지표 복원",

    probHeading: "기업 데이터는 기본적으로 AI 사용에 준비되어 있지 않습니다",
    probHeadingHighlight: "AI 사용에 준비되어 있지 않습니다",
    probSubheading: "모든 기업 문서에는 외부 AI 모델에 전송할 수 없는 민감 정보가 포함되어 있습니다. 그러나 실제 데이터 없이는 AI 출력이 일반적이고 사용할 수 없습니다. 이것이 기업 AI 도입의 핵심 장벽입니다.",
    probBody1: "데이터를 먼저 AI 사용에 준비시키지 않으면 조직은 AI 역량을 활용할 수 없습니다.",
    probBody2: "기존 접근 방식 — 마스킹, 삭제, 토큰화, 프롬프트 보안 게이트웨이 — 은 AI 워크플로우를 위해 설계되지 않았습니다. 마스킹과 삭제는 AI 모델이 필요로 하는 데이터 맥락을 영구적으로 제거합니다. 프롬프트 게이트웨이는 API 수준에서 필터링하지만 기업 문서를 end-to-end로 처리할 수 없습니다. 결과는 차단된 AI 프로젝트 또는 대규모 수동 재구성이 필요한 저하된 출력입니다.",
    probBody3: "이러한 도구는 근본적인 도입 장벽을 만듭니다: 민감 데이터를 보호하면서 AI 사용에 준비시키는 데이터 레이어 없이는 기업 AI 프로젝트가 가치를 증명하기 전에 중단됩니다.",
    probTableApproach: "접근 방식",
    probTableMethod: "방법",
    probTableLimitation: "한계",
    probTableImpact: "AI 워크플로우 영향",
    probRow1Approach: "마스킹 및 삭제",
    probRow1Method: "데이터를 영구적으로 제거",
    probRow1Limitation: "AI가 필요한 맥락을 파괴",
    probRow1Impact: "수동 재구성이 필요한 사용 불가능한 [REDACTED] 출력",
    probRow2Approach: "프롬프트 보안 게이트웨이",
    probRow2Method: "API 수준 프롬프트 필터링",
    probRow2Limitation: "문서 수준 보호 불가",
    probRow2Impact: "출력 복원 기능 없음",
    probRow3Approach: "합성 데이터 플랫폼",
    probRow3Method: "인공 데이터 생성",
    probRow3Limitation: "학습/테스트 전용",
    probRow3Impact: "라이브 AI 워크플로우에서 실제 문서를 대체할 수 없음",
    probRow4Approach: "보안팀 AI 차단",
    probRow4Method: "수동 승인 게이트",
    probRow4Limitation: "모든 AI 프로젝트 차단",
    probRow4Impact: "프로젝트가 취소되기 전에 가치를 증명하지 못함",
    probBannerText: "LLM Capsule은 문서와 모든 AI 모델 사이에 위치합니다. 환경 내부에서 민감 데이터를 안전한 플레이스홀더로 대체하고, AI가 보호된 버전을 처리하게 한 후, AI 출력에 실제 데이터를 복원합니다 — 모델 레이어도, 프롬프트 레이어도 아닌, 중요한 데이터 레이어에서.",
    probBannerBtn: "작동 방식 보기",

    baHeading: "차단된 AI 프로젝트에서 사용 가능한 출력을 가진 기업 AI 활성화로",
    baHeadingHighlight: "기업 AI 활성화",
    baWithoutBadge: "LLM CAPSULE 없이",
    baWithoutTitle: "기업 AI가 차단되거나 고장 상태",
    baWithout1: "AI 완전 차단 — 보안팀이 데이터 노출 위험으로 제안을 거부",
    baWithout2: "마스킹과 삭제가 맥락을 제거 — AI 출력이 추상화되어 기업 워크플로우에 사용 불가",
    baWithout3: "수동 검토 워크플로우 지속 — AI를 실제 데이터에 신뢰할 수 없어 문서에 인력 투입 필요",
    baWithout4: "문서 구조 파괴 — 평면 마스킹이 테이블, 엔터티 관계, 교차 참조를 깨뜨림",
    baWithout5: "저품질 AI 출력 — AI가 허용되더라도 출력을 사용하려면 대규모 수동 재구성 필요",
    baWithout6: "기업 AI 프로젝트가 파일럿에서 중단 — 개념 증명에서 프로덕션 배포로 가는 경로 없음",
    baWithBadge: "LLM CAPSULE 사용",
    baWithTitle: "실제 기업 데이터에서 AI 도입 활성화",
    baWith1: "민감 문서에서 AI 활성화 — 데이터 레이어가 보호를 처리하여 팀은 AI 성과에 집중 가능",
    baWith2: "최고의 LLM으로 실제 문서 처리 — ChatGPT, Claude, Gemini, Perplexity 또는 모든 LLM API",
    baWith3: "컴플라이언스 충족 — 제로 노출 아키텍처가 기업 AI 거버넌스 요구사항을 자동으로 충족",
    baWith4: "복원된 출력이 원본 비즈니스 맥락 유지 — 실제 이름, 실제 수치, 실제 참조가 로컬에서 복원",
    baWith5: "구조 보존 처리를 통해 테이블, 레이아웃, 교차 참조, 문서 계층 구조가 완전히 보존",
    baWith6: "제로 데이터 노출로 98% 출력 유사도 — 실제 기업 문서 처리 워크로드에서 측정",

    diagHeading: "기업과 모든 LLM 사이의 데이터 레이어",
    diagHeadingHighlight: "데이터 레이어",
    diagSubheading: "LLM Capsule은 내부 시스템과 외부 AI 모델 사이에 위치합니다. 원시 데이터는 환경 내부에 유지되며 — 신뢰 경계를 원본 데이터가 넘지 않습니다. AI는 보호된 버전만 처리합니다.",
    diagWindowTitle: "LLM Capsule 아키텍처",
    diagColInternal: "내부 환경",
    diagCustomerDocs: "고객 문서",
    diagInternalDBs: "내부 데이터베이스",
    diagRAGPipelines: "RAG 파이프라인",
    diagAdminConsole: "관리 콘솔",
    diagPolicyEngine: "정책 엔진",
    diagCapsuleLabel: "Encapsulation & Restoration",
    diagColFlow: "LLM CAPSULE을 통한 데이터 흐름",
    diagStep1Label: "단계 1 — 로컬",
    diagStep1Text: "탐지",
    diagStep2Label: "단계 2 — 로컬",
    diagStep2Text: "Encapsulation",
    diagStep3Label: "단계 3 — 외부",
    diagStep3Text: "LLM 처리",
    diagStep4Label: "단계 4 — 로컬",
    diagStep4Text: "Restoration",
    diagExternalArrow: "외부",
    diagLocalArrow: "로컬",
    diagOutputLabel: "비즈니스 활용 가능 출력",
    diagTrustBoundary: "신뢰 경계",
    diagColExternal: "외부 AI 서비스",
    diagMarketplaceBtn: "AWS Marketplace에서 보기",

    perfHeading: "실제 기업 문서 처리 워크로드에서 측정된 성능",
    perfHeadingHighlight: "측정된 성능",
    perfSubheading: "이 지표들은 금융, 헬스케어, 법률, 공공 부문 환경을 포함한 규제 산업 워크플로우에서 평균 2,200자 이상 길이의 기업 문서를 대상으로 측정되었습니다.",
    perf1Label: "탐지 정확도",
    perf2Label: "워크플로우 정확도",
    perf3Label: "구조화된 PII",
    perf4Label: "응답 유사도",
    perfBannerText: "AI를 활성화하세요. 데이터를 보호하세요. 결과를 복원하세요. 모든 것을 추적하세요.",
    perfBannerCaption: "2,200자 문서당 0.12초 처리. 금융, 헬스케어, 법률, 공공 부문 워크플로우에서 테스트",

    ctaTitle: "LLM Capsule이 기업 문서에서 AI를 어떻게 활성화하는지 확인하세요",
    ctaDescription: "문서, 배포 제약, 평가 기준을 가져오세요. AI 활성화 데이터 레이어가 실제 데이터에서, 실제 환경에서, 컴플라이언스 요구사항에 맞춰 어떻게 작동하는지 시연합니다.",
    ctaBtn1Label: "Request a Demo",
    ctaBtn2Label: "Talk to an Architect",
    ctaBtn3Label: "아키텍처 브리프 다운로드",
    ctaBtn4Label: "Available on AWS Marketplace",

    faqHeading: "자주 묻는 질문",
    faqHeadingHighlight: "질문",
    faq1Q: "LLM Capsule은 AI 처리 중 기업 데이터를 어떻게 보호합니까?",
    faq1A: "LLM Capsule은 AI 활성화 데이터 레이어로서 기업 환경을 떠나기 전에 민감 데이터를 로컬에서 캡슐화합니다. 보호된 표현만 AI 모델에 전송됩니다. 처리 후 출력은 로컬에서 복원되어 실제 기업 워크플로우에 사용할 수 있습니다. 원본 데이터는 절대 외부 AI 서비스에 도달하지 않습니다 — 이것이 모니터링 또는 필터링 도구가 아닌 AI 활성화 플러그인인 이유입니다.",
    faq2Q: "LLM Capsule은 데이터 마스킹 및 삭제 도구와 어떻게 다릅니까?",
    faq2A: "마스킹과 삭제는 데이터를 영구적으로 제거하여 AI 모델이 유용한 출력을 생성하는 데 필요한 맥락을 파괴합니다. 마스킹된 문서의 AI 결과에는 수동 재구성이 필요한 [REDACTED] 플레이스홀더가 포함됩니다. LLM Capsule은 구조 보존 처리로 데이터를 캡슐화하고 AI 처리 후 출력을 복원하여 기업에 바로 사용할 수 있는 결과를 자동으로 생성합니다. 이것이 정적 데이터 익명화 도구와 AI를 위해 설계된 복원 가능한 워크플로우 간의 근본적인 차이입니다.",
    faq3Q: "LLM Capsule과 프롬프트 보안 게이트웨이의 차이점은 무엇입니까?",
    faq3A: "프롬프트 보안 게이트웨이는 API 수준에서 필터링합니다 — 프롬프트에서 민감 패턴을 스캔하고 플래그된 콘텐츠를 차단하거나 제거합니다. RAG 파이프라인이나 배치 워크플로우를 통해 처리되는 기업 문서를 보호할 수 없으며, 출력 복원 기능을 제공하지 않습니다. LLM Capsule은 데이터 레이어 플러그인으로 작동하여 AI 처리가 발생하기 전에 민감 요소를 캡슐화하고 이후 출력을 복원합니다. 두 접근 방식은 상호 보완적일 수 있지만, 데이터 레이어 접근 방식만이 기업 데이터에 대한 end-to-end AI 활성화를 제공합니다.",
    faq4Q: "LLM Capsule은 어디에 배포할 수 있습니까?",
    faq4A: "LLM Capsule은 온프레미스, 망분리, 클라우드(AWS Marketplace 포함), 하이브리드, 임베디드 배포 모델을 지원합니다. Encapsulation 엔진은 배포 유형에 관계없이 전적으로 사용자 환경 내에서 실행됩니다. 이 유연성은 기업 AI 거버넌스에 매우 중요합니다 — 서로 다른 데이터 유형과 규제 요구사항이 단일 조직 내에서 서로 다른 배포 아키텍처를 요구할 수 있습니다.",
    faq5Q: "기업 AI 데이터 보호란 무엇입니까?",
    faq5A: "기업 AI 활성화는 민감 기업 데이터를 AI 사용에 준비시켜 조직이 원본 정보를 노출하지 않고 LLM을 도입할 수 있게 하는 실천입니다. LLM Capsule은 로컬 Encapsulation, 구조 보존 처리, 로컬 Restoration을 통해 데이터 레이어에서 이를 달성합니다 — 원본 데이터의 제로 노출을 보장하면서 전체 AI 워크플로우 도입을 가능하게 합니다. 차단하거나 필터링하는 모델 수준 접근 방식과 달리, 데이터 레이어 플러그인은 데이터 자체를 변환하여 기업 AI를 가능하게 합니다.",
    faq6Q: "LLM Capsule은 어떤 인증을 보유하고 있습니까?",
    faq6A: "ISO 27001, ISO 42001, GS Certification. LLM Capsule은 AWS Marketplace에서 이용할 수 있으며 GDPR, HIPAA 및 산업별 규제 요구사항을 포함한 기업 컴플라이언스 프레임워크 내 배포를 지원합니다.",
  },

  ja: {
    heroTitle: "実際の文書にどのAIでも使用 — 1行も公開せずに",
    heroTitleHighlight: "公開せずに",
    heroDescription: "機密文書はAIに届く前にLLM Capsuleを通過します。機密の名前、数値、用語がローカルで置換され — AIは安全なバージョンを処理し — 結果が元のデータで復元されます。各組織が機密項目を独自に定義します。",
    heroBtn1Label: "Request a Demo",
    heroBtn2Label: "アーキテクチャブリーフをダウンロード",
    heroBtn3Label: "Talk to an Architect",
    heroBtn4Label: "Available on AWS Marketplace",
    heroScreenshotAlt: "LLM Capsule ダッシュボード",

    trustHeading: "機密文書を処理する企業から信頼されています",
    trustHeadingHighlight: "信頼",
    trustSubheading: "金融、保険、法務、ヘルスケア、通信分野",
    kpi1Label: "ページあたり処理時間",
    kpi2Label: "Restoration率",
    kpi3Label: "出力類似度",

    capHeading: "企業AIのあらゆる障壁を取り除く5つの機能",
    capHeadingHighlight: "あらゆる障壁",
    capSubheading: "他のツールはAI利用をブロックするか、文書のコンテキストを破壊します。LLM Capsuleはその両方を解決します。",
    cap1Title: "データは絶対に外部に出ません",
    cap1Desc: "セキュリティチームがAI導入をブロックしていますか？ゼロエクスポージャーにより、AIは安全なプレースホルダーのみを参照します。LLMプロバイダーがすべてをログに記録しても、企業データの漏洩はゼロです。",
    cap2Title: "実際の結果を取り戻せます",
    cap2Desc: "AI出力は元の名前、数値、参照とともに自動復元されます — レポート、法務レビュー、クライアント納品物にすぐ使用可能。手動での再構築は不要です。",
    cap3Title: "機密項目を独自に定義できます",
    cap3Desc: "標準のPIIカテゴリでは不十分です。プロジェクトコード、取引条件、内部ID、ビジネス固有の機密マーカーを定義してください — 組織に合わせてカスタマイズできます。",
    capPlus1Title: "文書がAIにとって読みやすい状態を維持",
    capPlus1Desc: "テーブル、相互参照、レイアウトがプロセスを通じてそのまま維持されます。AIは使い物にならない断片ではなく、文書全体のコンテキストを理解します。",
    capPlus2Title: "どのAIモデルでも、いつでも",
    capPlus2Desc: "今日はChatGPT、明日はClaude、来月はオンプレミスLLM。自由に切り替え可能 — 再設計不要、ベンダーロックインなし。すべてのモデルで一貫した保護を維持します。",
    capBannerText: "LLM Capsuleはマスキングツールでも、プロンプトフィルターでも、削除レイヤーでもありません。文書とあらゆるAIの間に位置するデータレイヤーとして、妥協なく企業AIの導入を可能にします。",
    capBannerBtn1: "製品を見る",
    capBannerBtn2: "アーキテクチャを見る",
    capBannerBtn3: "カプセルモデルを読む",

    industryHeading: "機密データが障壁だった規制産業全体でAI導入を支援",
    industryHeadingHighlight: "規制産業",
    industrySubheading: "LLM Capsuleは金融、政府、ヘルスケア、法務ワークフローで実際の企業文書に対するAI利用を可能にします — ブロックされたプロジェクトを本番デプロイメントに転換します。",
    industryPublicSector: "公共セクター",
    industryFinance: "金融・保険",
    industryHealthcare: "ヘルスケア",
    industryLegal: "法務",
    industryTelecom: "通信",
    industrySecurity: "ネットワークセキュリティ",
    industryBtn: "業界別ソリューションを見る",

    tabsHeading: "3+2アーキテクチャによる企業AI活用",
    tabsHeadingHighlight: "3+2アーキテクチャ",
    tabsSubheading: "LLM Capsuleは3+2データレイヤーアーキテクチャにより機密データに対する企業AIの導入を支援します：3つのコア活用の柱と、出力品質とモデルの柔軟性を確保する2つの追加価値機能です。",
    tabCore1Label: "Core 1 — Zero Exposure",
    tabCore2Label: "Core 2 — Restoration",
    tabCore3Label: "Core 3 — Enterprise Context",
    tabPlus1Label: "+1 構造保持",
    tabPlus2Label: "+2 Cross-Model",
    tabCore1Title: "Zero Exposure",
    tabCore1P1: "機密データは環境内部で安全なプレースホルダー（Encapsulation）に置換されてから外部に送信されます。元の値は外部AIサービスに到達しません。",
    tabCore1P2: "Zero Exposureとは、AIプロバイダーが有用なデータを処理しつつも、元の機密値を再構築できないことを意味します。プロバイダーが受信データをログ記録、保存、学習に使用しても、元の企業情報は公開されません。Encapsulationは、AIが処理可能でありながら受信サービスに対して不透明なデータ表現を作成します — プロバイダーログは安全で、生データは絶対に外部に出ません。",
    tabCore2Title: "Restoration",
    tabCore2P1: "AI出力はローカルで自動復元されます — 抽象化でも匿名化でもなく、即座に使用可能な実際のビジネスデータで完全に復元されます。",
    tabCore2P2: "手動再構築が必要な汎用AI出力を生成するマスキングツールとは異なり、LLM Capsuleは元の名前、口座番号、日付、参照でAI結果を自動復元します。復元された出力は、規制レポート、法律文書、請求分析、社内コミュニケーションなど、後処理ステップなしで企業ワークフローで直接使用できます。これにより、AI ROIを低下させる「手動レビューループ」が排除されます。",
    tabCore3Title: "Enterprise Context",
    tabCore3P1: "標準PIIを超えた機密エンティティを定義・制御します — プロジェクトコード、内部ID、契約条件、組織固有の戦略データまで。",
    tabCore3P2: "企業文書は個人識別情報だけでは説明できないはるかに多くの機密性を含んでいます。進行中の買収に関する法務メモにはPIIがありませんが、取引構造、バリュエーション範囲、戦略的根拠で満たされています。Enterprise Contextは、文書タイプ、部門、ワークフローコンテキストに適応するコンテキスト対応データ制御を通じた、ポリシーベースの機密性分類を可能にします — 特定のビジネスロジックと秘密に合わせた保護です。",
    tabPlus1Title: "構造保持",
    tabPlus1P1: "テーブル、ダイアグラム、相互参照、文書階層がそのまま維持されます — プロセス全体を通じて文書レイアウトがAIにとって読みやすい状態を保ちます。",
    tabPlus1P2: "マスキングツールは文書コンテキストを破壊します。LLM Capsuleは機密値が置換される間もテーブル、ダイアグラム、エンティティ関係を維持し、AIが完全なコンテキストを理解できるようにします。参照の一貫性、ダイアグラムの保持、文書階層がすべて維持されます。",
    tabPlus2Title: "Cross-Model Execution",
    tabPlus2P1: "どのAIモデルでも動作します。ChatGPT、Claude、Gemini、または任意のLLM API間で即座に切り替え — 再設計不要、ベンダーロックインなし。",
    tabPlus2P2: "LLM Capsuleはすべてのモデルに対するモデル非依存のAIイネーブルメントレイヤーとして機能します。いつでもモデルを入れ替えたり組み合わせたりできます — 再設計ゼロ、ベンダーロックインなし、すべてのプロバイダーで一貫した保護。CUBIGの自社SynTitanプラットフォームを含むあらゆるモデルに同時接続が可能です。",

    csHeading: "AI対応の企業ワークフロー",
    csHeadingHighlight: "企業ワークフロー",
    csSubheading: "LLM Capsuleは最も一般的な企業AIワークフローに接続します — 文書の取り込みから出力の配信まで、1つのデータレイヤーで実際の文書へのAI導入を支援します。",
    cs1Title: "安全な文書要約",
    cs1Desc: "AIが機密文書 — 契約書、レポート、申告書 — のエグゼクティブサマリーを生成し、すべての機密要素が安全なプレースホルダーに置換されます。復元されたサマリーには実際の名前、日付、数値が含まれ、ビジネスでの利用に対応しています。",
    cs1Bullet1: "契約書、レポート、申告書を保護",
    cs1Bullet2: "実際の名前、日付、数値を出力に復元",
    cs2Title: "AI請求処理",
    cs2Desc: "保険・金融の請求がAIによる分類、損害評価、不正検出の前にLLM Capsuleを通過します。復元された出力は実際の保険契約者データとともに請求管理システムに直接反映されます。",
    cs2Bullet1: "分類、損害評価、不正検出を実現",
    cs2Bullet2: "復元された出力が請求システムに直接反映",
    cs3Title: "機密契約書レビュー",
    cs3Desc: "AIが保護された契約書から主要条件、義務、リスク条項を抽出します。復元された出力には実際の当事者名、金額、条項参照が含まれ — ディール管理システムへの直接統合に対応しています。",
    cs3Bullet1: "主要条件、義務、リスク条項を抽出",
    cs3Bullet2: "実際の当事者名、金額、参照を復元",
    cs4Title: "社内レポート生成",
    cs4Desc: "AIが保護されたデータソースから社内レポートを作成します — 業績評価、監査結果、コンプライアンスサマリー。復元されたレポートには実際の従業員名、部門データ、指標値が含まれます。",
    cs4Bullet1: "業績評価、監査結果、コンプライアンスサマリー",
    cs4Bullet2: "実際の従業員名、部門データ、指標を復元",

    probHeading: "企業データはデフォルトでAI対応にはなっていません",
    probHeadingHighlight: "AI対応にはなっていません",
    probSubheading: "すべての企業文書には外部AIモデルに送信できない機密情報が含まれています。しかし実際のデータなしでは、AI出力は汎用的で使い物になりません。これが企業AIの導入における核心的な障壁です。",
    probBody1: "データをまずAI対応にしなければ、組織はAI機能を活用できません。",
    probBody2: "従来のアプローチ — マスキング、削除、トークン化、プロンプトセキュリティゲートウェイ — はAIワークフロー向けに設計されていません。マスキングと削除はAIモデルが必要とするデータコンテキストを永久に除去します。プロンプトゲートウェイはAPIレベルでフィルタリングしますが、企業文書をエンドツーエンドで処理できません。結果はブロックされたAIプロジェクトか、大規模な手動再構築が必要な劣化した出力です。",
    probBody3: "これらのツールは根本的な導入障壁を生み出します：機密データを保護しながらAI対応にするデータレイヤーなしでは、企業AIプロジェクトは価値を実証する前に停滞します。",
    probTableApproach: "アプローチ",
    probTableMethod: "方法",
    probTableLimitation: "制限",
    probTableImpact: "AIワークフローへの影響",
    probRow1Approach: "マスキング・削除",
    probRow1Method: "データを永久に除去",
    probRow1Limitation: "AIが必要とするコンテキストを破壊",
    probRow1Impact: "手動再構築が必要な使用不能な[REDACTED]出力",
    probRow2Approach: "プロンプトセキュリティゲートウェイ",
    probRow2Method: "APIレベルのプロンプトフィルタリング",
    probRow2Limitation: "文書レベルの保護不可",
    probRow2Impact: "出力復元機能なし",
    probRow3Approach: "合成データプラットフォーム",
    probRow3Method: "人工データ生成",
    probRow3Limitation: "学習・テスト専用",
    probRow3Impact: "ライブAIワークフローで実際の文書を代替不可",
    probRow4Approach: "セキュリティチームによるAIブロック",
    probRow4Method: "手動承認ゲート",
    probRow4Limitation: "すべてのAIプロジェクトをブロック",
    probRow4Impact: "キャンセル前にプロジェクトが価値を実証できない",
    probBannerText: "LLM Capsuleは文書とあらゆるAIモデルの間に位置します。環境内部で機密データを安全なプレースホルダーに置換し、AIが保護されたバージョンを処理した後、AI出力に実際のデータを復元します — モデルレイヤーでもプロンプトレイヤーでもなく、重要なデータレイヤーで。",
    probBannerBtn: "仕組みを見る",

    baHeading: "ブロックされたAIプロジェクトから、使用可能な出力を持つ企業AI活用へ",
    baHeadingHighlight: "企業AI活用",
    baWithoutBadge: "LLM CAPSULEなし",
    baWithoutTitle: "企業AIがブロックまたは機能不全",
    baWithout1: "AI完全ブロック — セキュリティチームがデータ漏洩リスクにより提案を却下",
    baWithout2: "マスキングと削除がコンテキストを除去 — AI出力が抽象化され企業ワークフローで使用不能",
    baWithout3: "手動レビューワークフローが継続 — AIを実データで信頼できないため文書に人的リソースが必要",
    baWithout4: "文書構造が破壊 — フラットマスキングがテーブル、エンティティ関係、相互参照を壊す",
    baWithout5: "低品質AI出力 — AIが許可されても、出力を使用するために大規模な手動再構築が必要",
    baWithout6: "企業AIプロジェクトがパイロットで停滞 — コンセプト実証から本番デプロイメントへの道筋なし",
    baWithBadge: "LLM CAPSULE使用",
    baWithTitle: "実際の企業データでAI導入を実現",
    baWith1: "機密文書でAIを実現 — データレイヤーが保護を担当し、チームはAI成果に集中可能",
    baWith2: "最高のLLMで実際の文書を処理 — ChatGPT、Claude、Gemini、Perplexity、または任意のLLM API",
    baWith3: "コンプライアンス充足 — ゼロエクスポージャーアーキテクチャが企業AIガバナンス要件を自動的に満たす",
    baWith4: "復元された出力が元のビジネスコンテキストを維持 — 実際の名前、実際の数値、実際の参照をローカルで復元",
    baWith5: "構造保持処理により、テーブル、レイアウト、相互参照、文書階層を完全に保持",
    baWith6: "ゼロデータ漏洩で98%の出力類似度 — 実際の企業文書処理ワークロードで測定",

    diagHeading: "企業とあらゆるLLMの間のデータレイヤー",
    diagHeadingHighlight: "データレイヤー",
    diagSubheading: "LLM Capsuleは内部システムと外部AIモデルの間に位置します。生データは環境内部に留まり — 信頼境界を元データが越えることはありません。AIは保護されたバージョンのみを処理します。",
    diagWindowTitle: "LLM Capsule アーキテクチャ",
    diagColInternal: "内部環境",
    diagCustomerDocs: "顧客文書",
    diagInternalDBs: "内部データベース",
    diagRAGPipelines: "RAGパイプライン",
    diagAdminConsole: "管理コンソール",
    diagPolicyEngine: "ポリシーエンジン",
    diagCapsuleLabel: "Encapsulation & Restoration",
    diagColFlow: "LLM CAPSULEを通じたデータフロー",
    diagStep1Label: "ステップ 1 — ローカル",
    diagStep1Text: "検出",
    diagStep2Label: "ステップ 2 — ローカル",
    diagStep2Text: "Encapsulation",
    diagStep3Label: "ステップ 3 — 外部",
    diagStep3Text: "LLM処理",
    diagStep4Label: "ステップ 4 — ローカル",
    diagStep4Text: "Restoration",
    diagExternalArrow: "外部",
    diagLocalArrow: "ローカル",
    diagOutputLabel: "ビジネス対応出力",
    diagTrustBoundary: "信頼境界",
    diagColExternal: "外部AIサービス",
    diagMarketplaceBtn: "AWS Marketplaceで見る",

    perfHeading: "実際の企業文書処理ワークロードで測定されたパフォーマンス",
    perfHeadingHighlight: "測定されたパフォーマンス",
    perfSubheading: "これらの指標は、金融、ヘルスケア、法務、公共セクター環境を含む規制産業ワークフローで、平均2,200文字以上の企業文書を対象に測定されました。",
    perf1Label: "検出精度",
    perf2Label: "ワークフロー精度",
    perf3Label: "構造化PII",
    perf4Label: "応答類似度",
    perfBannerText: "AIを有効化。データを保護。結果を復元。すべてを追跡。",
    perfBannerCaption: "2,200文字の文書あたり0.12秒処理。金融、ヘルスケア、法務、公共セクターワークフローでテスト済み",

    ctaTitle: "LLM Capsuleが企業文書でAIをどのように実現するかご確認ください",
    ctaDescription: "文書、デプロイメント制約、評価基準をお持ちください。AIイネーブルメント・データレイヤーが実際のデータで、お客様の環境で、コンプライアンス要件に対してどのように機能するかをデモンストレーションします。",
    ctaBtn1Label: "Request a Demo",
    ctaBtn2Label: "Talk to an Architect",
    ctaBtn3Label: "アーキテクチャブリーフをダウンロード",
    ctaBtn4Label: "Available on AWS Marketplace",

    faqHeading: "よくあるご質問",
    faqHeadingHighlight: "ご質問",
    faq1Q: "LLM Capsuleは AI処理中に企業データをどのように保護しますか？",
    faq1A: "LLM CapsuleはAIイネーブルメント・データレイヤーとして、企業環境を離れる前に機密データをローカルでカプセル化します。保護された表現のみがAIモデルに送信されます。処理後、出力はローカルで復元され、実際の企業ワークフローで使用可能になります。元データは外部AIサービスに到達しません — これがモニタリングやフィルタリングツールではなく、AI活用プラグインである理由です。",
    faq2Q: "LLM Capsuleはデータマスキングや削除ツールとどう違いますか？",
    faq2A: "マスキングと削除はデータを永久に除去し、AIモデルが有用な出力を生成するために必要なコンテキストを破壊します。マスキングされた文書のAI結果には手動再構築が必要な[REDACTED]プレースホルダーが含まれます。LLM Capsuleは構造保持処理でデータをカプセル化し、AI処理後に出力を復元して、企業対応の結果を自動生成します。これが静的データ匿名化ツールとAI向けに設計された復元可能なワークフローの根本的な違いです。",
    faq3Q: "LLM Capsuleとプロンプトセキュリティゲートウェイの違いは何ですか？",
    faq3A: "プロンプトセキュリティゲートウェイはAPIレベルでフィルタリングします — プロンプト内の機密パターンをスキャンし、フラグされたコンテンツをブロックまたは削除します。RAGパイプラインやバッチワークフローで処理される企業文書を保護できず、出力復元機能も提供しません。LLM Capsuleはデータレイヤープラグインとして動作し、AI処理が発生する前に機密要素をカプセル化し、その後出力を復元します。2つのアプローチは補完的に使用できますが、エンドツーエンドの企業データAI活用を提供するのはデータレイヤーアプローチのみです。",
    faq4Q: "LLM Capsuleはどこにデプロイできますか？",
    faq4A: "LLM Capsuleはオンプレミス、エアギャップ、クラウド（AWS Marketplace含む）、ハイブリッド、組み込みデプロイメントモデルをサポートします。Encapsulationエンジンはデプロイメントタイプに関係なく、完全にお客様の環境内で実行されます。この柔軟性は企業AIガバナンスにとって重要です — 異なるデータタイプや規制要件が、単一組織内で異なるデプロイメントアーキテクチャを必要とする場合があります。",
    faq5Q: "企業AIデータ保護とは何ですか？",
    faq5A: "企業AI活用とは、機密な企業データをAI対応にし、組織が元の情報を公開せずにLLMを導入できるようにする実践です。LLM Capsuleはローカルでの Encapsulation、構造保持処理、ローカルでのRestorationを通じてデータレイヤーでこれを実現します — 元データのゼロエクスポージャーを確保しながら、完全なAIワークフローの導入を可能にします。ブロックやフィルタリングを行うモデルレベルのアプローチとは異なり、データレイヤープラグインはデータ自体を変換して企業AIを可能にします。",
    faq6Q: "LLM Capsuleはどのような認証を取得していますか？",
    faq6A: "ISO 27001、ISO 42001、GS Certification。LLM CapsuleはAWS Marketplaceで利用可能であり、GDPR、HIPAA、および業界固有の規制要件を含む企業コンプライアンスフレームワーク内でのデプロイメントをサポートします。",
  },

  de: {
    heroTitle: "Verwenden Sie jede KI mit Ihren echten Dokumenten — ohne eine einzige Zeile preiszugeben",
    heroTitleHighlight: "ohne preiszugeben",
    heroDescription: "Ihre sensiblen Dokumente durchlaufen LLM Capsule, bevor sie die KI erreichen. Vertrauliche Namen, Zahlen und Begriffe werden lokal ersetzt — die KI verarbeitet die sichere Version — dann werden die Ergebnisse mit Ihren Originaldaten wiederhergestellt. Jede Organisation definiert, was als sensibel gilt.",
    heroBtn1Label: "Request a Demo",
    heroBtn2Label: "Architektur-Brief herunterladen",
    heroBtn3Label: "Talk to an Architect",
    heroBtn4Label: "Available on AWS Marketplace",
    heroScreenshotAlt: "LLM Capsule Dashboard",

    trustHeading: "Vertraut von Unternehmen, die sensible Dokumente verarbeiten",
    trustHeadingHighlight: "Vertraut",
    trustSubheading: "in Finanzwesen, Versicherung, Recht, Gesundheitswesen und Telekommunikation",
    kpi1Label: "Verarbeitung pro Seite",
    kpi2Label: "Restoration-Rate",
    kpi3Label: "Ausgabe-Similarität",

    capHeading: "Fünf Fähigkeiten, die jede Barriere für Unternehmens-KI beseitigen",
    capHeadingHighlight: "jede Barriere",
    capSubheading: "Andere Tools blockieren entweder die KI-Nutzung oder zerstören den Dokumentkontext. LLM Capsule löst beides.",
    cap1Title: "Ihre Daten verlassen nie die Umgebung",
    cap1Desc: "Blockiert das Sicherheitsteam die KI-Einführung? Mit Zero Exposure sieht die KI nur sichere Platzhalter. Selbst wenn der LLM-Anbieter alles protokolliert, werden null Unternehmensdaten exponiert.",
    cap2Title: "Erhalten Sie echte Ergebnisse zurück",
    cap2Desc: "KI-Ausgaben werden automatisch mit Ihren originalen Namen, Zahlen und Referenzen wiederhergestellt — bereit für Berichte, Rechtsüberprüfungen und Kundendokumente. Keine manuelle Rekonstruktion.",
    cap3Title: "Sie definieren, was sensibel ist",
    cap3Desc: "Standard-PII-Kategorien reichen nicht aus. Definieren Sie Projektcodes, Vertragsbedingungen, interne IDs und geschäftsspezifische vertrauliche Marker — maßgeschneidert für Ihre Organisation.",
    capPlus1Title: "Dokumente bleiben für die KI lesbar",
    capPlus1Desc: "Tabellen, Querverweise und Layouts überstehen den Prozess intakt. Die KI versteht den vollständigen Dokumentkontext — keine gebrochenen Fragmente, die nutzlose Ausgaben erzeugen.",
    capPlus2Title: "Jedes KI-Modell, jederzeit",
    capPlus2Desc: "Heute ChatGPT, morgen Claude, nächsten Monat On-Premise-LLM. Wechseln Sie frei — kein Re-Engineering, kein Vendor Lock-in. Der Schutz bleibt über alle Modelle hinweg konsistent.",
    capBannerText: "LLM Capsule ist kein Maskierungstool, kein Prompt-Filter und keine Löschungsschicht. Es ist die Datenschicht zwischen Ihren Dokumenten und jeder KI — die KI-Einführung im Unternehmen ohne Kompromisse ermöglicht.",
    capBannerBtn1: "Produkt ansehen",
    capBannerBtn2: "Architektur ansehen",
    capBannerBtn3: "Capsule-Modell lesen",

    industryHeading: "KI-Einführung in regulierten Industrien, in denen sensible Daten die Barriere waren",
    industryHeadingHighlight: "regulierten Industrien",
    industrySubheading: "LLM Capsule ermöglicht KI-Nutzung auf echten Unternehmensdokumenten in Finanzdienstleistungen, Behörden, Gesundheitswesen und Rechtsworkflows — und verwandelt blockierte Projekte in Produktionsdeployments.",
    industryPublicSector: "Öffentlicher Sektor",
    industryFinance: "Finanzwesen & Versicherung",
    industryHealthcare: "Gesundheitswesen",
    industryLegal: "Recht",
    industryTelecom: "Telekommunikation",
    industrySecurity: "Netzwerksicherheit",
    industryBtn: "Branchenlösungen ansehen",

    tabsHeading: "KI-Einführung im Unternehmen durch eine 3+2-Architektur",
    tabsHeadingHighlight: "3+2-Architektur",
    tabsSubheading: "LLM Capsule ermöglicht die KI-Einführung im Unternehmen auf sensiblen Daten durch eine 3+2-Datenschicht-Architektur: drei zentrale Enablement-Säulen plus zwei zusätzliche Wertfähigkeiten, die Ausgabequalität und Modellflexibilität sicherstellen.",
    tabCore1Label: "Core 1 — Zero Exposure",
    tabCore2Label: "Core 2 — Restoration",
    tabCore3Label: "Core 3 — Enterprise Context",
    tabPlus1Label: "+1 Strukturerhaltend",
    tabPlus2Label: "+2 Cross-Model",
    tabCore1Title: "Zero Exposure",
    tabCore1P1: "Sensible Daten werden innerhalb Ihrer Umgebung durch sichere Platzhalter (Encapsulation) ersetzt, bevor sie nach außen gesendet werden. Originalwerte erreichen nie externe KI-Dienste.",
    tabCore1P2: "Zero Exposure bedeutet, dass der KI-Anbieter nützliche Daten verarbeitet, aber die originalen sensiblen Werte nicht rekonstruieren kann. Selbst wenn der Anbieter die empfangenen Daten protokolliert, gespeichert oder zum Training verwendet hat, werden keine originalen Unternehmensinformationen exponiert. Encapsulation erzeugt eine Datendarstellung, die sowohl von der KI verarbeitbar als auch für den empfangenden Dienst undurchsichtig ist — Anbieter-Logs sind sicher, Rohdaten verlassen nie die Umgebung.",
    tabCore2Title: "Restoration",
    tabCore2P1: "KI-Ausgaben werden lokal automatisch wiederhergestellt — nicht abstrahiert, nicht anonymisiert, sondern vollständig mit echten Geschäftsdaten für sofortige Nutzung wiederhergestellt.",
    tabCore2P2: "Im Gegensatz zu Maskierungstools, die generische KI-Ausgaben erzeugen, die eine manuelle Rekonstruktion erfordern, stellt LLM Capsule KI-Ergebnisse automatisch mit originalen Namen, Kontonummern, Daten und Referenzen wieder her. Wiederhergestellte Ausgaben sind direkt in Unternehmensworkflows nutzbar — regulatorische Berichte, Rechtsdokumente, Schadensanalysen und interne Kommunikation — ohne Nachbearbeitungsschritt. Dies eliminiert die \"manuelle Überprüfungsschleife\", die den KI-ROI zerstört.",
    tabCore3Title: "Enterprise Context",
    tabCore3P1: "Definieren und kontrollieren Sie sensible Entitäten über Standard-PII hinaus — Projektcodes, interne IDs, Vertragsbedingungen und strategische Daten, die spezifisch für Ihre Organisation sind.",
    tabCore3P2: "Unternehmensdokumente enthalten weit mehr Sensibilität als personenbezogene Informationen allein. Ein Rechtsmemo über eine laufende Akquisition enthält keine PII, ist aber mit Deal-Strukturen, Bewertungsspannen und strategischen Begründungen gefüllt. Enterprise Context ermöglicht eine richtlinienbasierte Sensibilitätsklassifizierung durch kontextbewusste Datenkontrolle, die sich an Dokumenttyp, Abteilung und Workflow-Kontext anpasst — maßgeschneiderter Schutz für Ihre spezifische Geschäftslogik und Geheimnisse.",
    tabPlus1Title: "Strukturerhaltend",
    tabPlus1P1: "Tabellen, Diagramme, Querverweise und Dokumenthierarchie bleiben intakt — Ihr Dokumentlayout bleibt während des gesamten Prozesses für die KI lesbar.",
    tabPlus1P2: "Maskierungstools zerstören den Dokumentkontext. LLM Capsule bewahrt Tabellen, Diagramme und Entitätsbeziehungen, während sensible Werte ersetzt werden, damit die KI den vollständigen Kontext versteht. Referenzkonsistenz, Diagrammerhaltung und Dokumenthierarchie werden alle beibehalten.",
    tabPlus2Title: "Cross-Model Execution",
    tabPlus2P1: "Funktioniert mit jedem KI-Modell. Wechseln Sie sofort zwischen ChatGPT, Claude, Gemini oder jeder LLM-API — kein Re-Engineering, kein Vendor Lock-in.",
    tabPlus2P2: "LLM Capsule fungiert als modellunabhängige AI-Enablement-Datenschicht für alle KI-Modelle. Tauschen oder kombinieren Sie Modelle jederzeit — null Re-Engineering, kein Vendor Lock-in, konsistenter Schutz über alle Anbieter. Verbinden Sie sich gleichzeitig mit jedem Modell, einschließlich CUBIGs eigener SynTitan-Plattform.",

    csHeading: "KI-fähige Unternehmensworkflows",
    csHeadingHighlight: "Unternehmensworkflows",
    csSubheading: "LLM Capsule integriert sich in die gängigsten KI-Workflows im Unternehmen — von der Dokumentenaufnahme bis zur Ausgabelieferung ermöglicht eine Datenschicht die KI-Einführung auf echten Dokumenten.",
    cs1Title: "Sichere Dokumentenzusammenfassung",
    cs1Desc: "KI erstellt Executive Summarys sensibler Dokumente — Verträge, Berichte, Einreichungen — während alle vertraulichen Elemente durch sichere Platzhalter ersetzt werden. Wiederhergestellte Zusammenfassungen enthalten echte Namen, Daten und Zahlen, die für geschäftliche Zwecke bereit sind.",
    cs1Bullet1: "Verträge, Berichte und Einreichungen geschützt",
    cs1Bullet2: "Echte Namen, Daten und Zahlen in der Ausgabe wiederhergestellt",
    cs2Title: "KI-Schadensbearbeitung",
    cs2Desc: "Versicherungs- und Finanzansprüche durchlaufen LLM Capsule vor KI-gestützter Klassifizierung, Schadensbewertung und Betrugserkennung. Wiederhergestellte Ausgaben fließen direkt mit echten Versicherungsnehmerdaten in Schadenmanagementsysteme ein.",
    cs2Bullet1: "Klassifizierung, Schadensbewertung, Betrugserkennung ermöglicht",
    cs2Bullet2: "Wiederhergestellte Ausgaben fließen direkt in Schadensysteme",
    cs3Title: "Vertrauliche Vertragsprüfung",
    cs3Desc: "KI extrahiert Schlüsselbedingungen, Verpflichtungen und Risikoklauseln aus geschützten Verträgen. Wiederhergestellte Ausgaben enthalten echte Parteinamen, Beträge und Klauselreferenzen — bereit für die direkte Integration in Deal-Management-Systeme.",
    cs3Bullet1: "Schlüsselbedingungen, Verpflichtungen und Risikoklauseln extrahiert",
    cs3Bullet2: "Echte Parteinamen, Beträge und Referenzen wiederhergestellt",
    cs4Title: "Interne Berichtsgenerierung",
    cs4Desc: "KI erstellt interne Berichte aus geschützten Datenquellen — Leistungsbeurteilungen, Prüfungsergebnisse, Compliance-Zusammenfassungen. Wiederhergestellte Berichte enthalten echte Mitarbeiternamen, Abteilungsdaten und Kennzahlenwerte.",
    cs4Bullet1: "Leistungsbeurteilungen, Prüfungsergebnisse, Compliance-Zusammenfassungen",
    cs4Bullet2: "Echte Mitarbeiternamen, Abteilungsdaten und Kennzahlen wiederhergestellt",

    probHeading: "Unternehmensdaten sind standardmäßig nie KI-bereit",
    probHeadingHighlight: "nie KI-bereit",
    probSubheading: "Jedes Unternehmensdokument enthält sensible Informationen, die nicht an externe KI-Modelle gesendet werden können. Aber ohne echte Daten sind KI-Ausgaben generisch und unbrauchbar. Dies ist die zentrale Barriere für die KI-Einführung im Unternehmen.",
    probBody1: "Organisationen können KI-Fähigkeiten nicht nutzen, ohne ihre Daten zuerst KI-bereit zu machen.",
    probBody2: "Traditionelle Ansätze — Maskierung, Löschung, Tokenisierung und Prompt-Security-Gateways — wurden nicht für KI-Workflows entwickelt. Maskierung und Löschung entfernen dauerhaft den Datenkontext, den KI-Modelle benötigen. Prompt-Gateways filtern auf API-Ebene, können aber Unternehmensdokumente nicht End-to-End verarbeiten. Das Ergebnis sind entweder blockierte KI-Projekte oder degradierte Ausgaben, die umfangreiche manuelle Rekonstruktion erfordern.",
    probBody3: "Diese Tools schaffen eine fundamentale Adoptionsbarriere: Ohne eine Datenschicht, die sensible Daten KI-bereit macht und gleichzeitig schützt, stagnieren Unternehmens-KI-Projekte, bevor sie ihren Wert demonstrieren können.",
    probTableApproach: "Ansatz",
    probTableMethod: "Methode",
    probTableLimitation: "Einschränkung",
    probTableImpact: "Auswirkung auf KI-Workflows",
    probRow1Approach: "Maskierung & Löschung",
    probRow1Method: "Daten werden dauerhaft entfernt",
    probRow1Limitation: "Zerstört den Kontext, den KI benötigt",
    probRow1Impact: "Unbrauchbare [REDACTED]-Ausgaben, die manuelle Rekonstruktion erfordern",
    probRow2Approach: "Prompt-Security-Gateways",
    probRow2Method: "API-Level-Prompt-Filterung",
    probRow2Limitation: "Kein Schutz auf Dokumentebene",
    probRow2Impact: "Keine Ausgabewiederherstellungsfähigkeit",
    probRow3Approach: "Synthetische Datenplattformen",
    probRow3Method: "Künstliche Datengenerierung",
    probRow3Limitation: "Nur für Training/Tests",
    probRow3Impact: "Können echte Dokumente in Live-KI-Workflows nicht ersetzen",
    probRow4Approach: "Sicherheitsteam blockiert KI",
    probRow4Method: "Manuelles Genehmigungsgate",
    probRow4Limitation: "Blockiert alle KI-Projekte",
    probRow4Impact: "Projekte können keinen Wert demonstrieren, bevor sie eingestellt werden",
    probBannerText: "LLM Capsule befindet sich zwischen Ihren Dokumenten und jedem KI-Modell. Es ersetzt sensible Daten innerhalb Ihrer Umgebung durch sichere Platzhalter, lässt die KI die geschützte Version verarbeiten und stellt dann echte Daten in KI-Ausgaben wieder her — nicht auf der Modellebene, nicht auf der Prompt-Ebene, sondern auf der Datenschicht, wo es darauf ankommt.",
    probBannerBtn: "So funktioniert es",

    baHeading: "Von blockierten KI-Projekten zur aktivierten Unternehmens-KI mit nutzbaren Ausgaben",
    baHeadingHighlight: "aktivierten Unternehmens-KI",
    baWithoutBadge: "OHNE LLM CAPSULE",
    baWithoutTitle: "Unternehmens-KI ist blockiert oder defekt",
    baWithout1: "KI vollständig blockiert — Sicherheitsteams lehnen Vorschläge aufgrund von Datenexpositionsrisiken ab",
    baWithout2: "Maskierung und Löschung entfernen Kontext — KI-Ausgaben sind abstrahiert und für Unternehmensworkflows unbrauchbar",
    baWithout3: "Manuelle Überprüfungsworkflows bestehen fort — Dokumente erfordern menschliche Verarbeitung, da KI nicht mit echten Daten vertraut werden kann",
    baWithout4: "Dokumentstruktur zerstört — flache Maskierung bricht Tabellen, Entitätsbeziehungen und Querverweise",
    baWithout5: "Niedrigqualitative KI-Ausgabe — selbst wenn KI erlaubt ist, erfordern Ausgaben umfangreiche manuelle Rekonstruktion",
    baWithout6: "Unternehmens-KI-Projekte stagnieren im Pilotbetrieb — kein Weg vom Proof of Concept zur Produktionsbereitstellung",
    baWithBadge: "MIT LLM CAPSULE",
    baWithTitle: "KI-Einführung auf echten Unternehmensdaten ermöglicht",
    baWith1: "KI auf sensiblen Dokumenten ermöglicht — die Datenschicht übernimmt den Schutz, damit sich Teams auf KI-Ergebnisse konzentrieren können",
    baWith2: "Echte Dokumente mit erstklassigen LLMs verarbeitet — ChatGPT, Claude, Gemini, Perplexity oder jede LLM-API",
    baWith3: "Compliance erfüllt — Zero-Exposure-Architektur erfüllt automatisch die Anforderungen der KI-Governance im Unternehmen",
    baWith4: "Wiederhergestellte Ausgaben behalten den originalen Geschäftskontext — echte Namen, echte Zahlen, echte Referenzen lokal wiederhergestellt",
    baWith5: "Tabellen, Layouts, Querverweise und Dokumenthierarchie durch strukturerhaltende Verarbeitung vollständig bewahrt",
    baWith6: "98% Ausgabe-Similarität bei null Datenexposition — gemessen an echten Dokumentenverarbeitungs-Workloads im Unternehmen",

    diagHeading: "Eine Datenschicht zwischen Ihrem Unternehmen und jedem LLM",
    diagHeadingHighlight: "Datenschicht",
    diagSubheading: "LLM Capsule befindet sich zwischen Ihren internen Systemen und externen KI-Modellen. Rohdaten bleiben in Ihrer Umgebung — die Vertrauensgrenze wird von Originaldaten nie überschritten. Die KI verarbeitet nur die geschützte Version.",
    diagWindowTitle: "LLM Capsule Architektur",
    diagColInternal: "INTERNE UMGEBUNG",
    diagCustomerDocs: "Kundendokumente",
    diagInternalDBs: "Interne Datenbanken",
    diagRAGPipelines: "RAG-Pipelines",
    diagAdminConsole: "Admin-Konsole",
    diagPolicyEngine: "Policy Engine",
    diagCapsuleLabel: "Encapsulation & Restoration",
    diagColFlow: "DATENFLUSS DURCH LLM CAPSULE",
    diagStep1Label: "SCHRITT 1 — LOKAL",
    diagStep1Text: "Erkennung",
    diagStep2Label: "SCHRITT 2 — LOKAL",
    diagStep2Text: "Encapsulation",
    diagStep3Label: "SCHRITT 3 — EXTERN",
    diagStep3Text: "LLM-Verarbeitung",
    diagStep4Label: "SCHRITT 4 — LOKAL",
    diagStep4Text: "Restoration",
    diagExternalArrow: "Extern",
    diagLocalArrow: "Lokal",
    diagOutputLabel: "Geschäftsfertige Ausgabe",
    diagTrustBoundary: "VERTRAUENSGRENZE",
    diagColExternal: "EXTERNE KI-DIENSTE",
    diagMarketplaceBtn: "Auf AWS Marketplace ansehen",

    perfHeading: "Gemessene Leistung bei echten Dokumentenverarbeitungs-Workloads im Unternehmen",
    perfHeadingHighlight: "Gemessene Leistung",
    perfSubheading: "Diese Kennzahlen wurden an Unternehmensdokumenten mit durchschnittlich 2.200+ Zeichen Länge in regulierten Branchenworkflows gemessen, einschließlich Finanzwesen, Gesundheitswesen, Recht und öffentlichem Sektor.",
    perf1Label: "Erkennungsgenauigkeit",
    perf2Label: "Workflow-Genauigkeit",
    perf3Label: "Strukturierte PII",
    perf4Label: "Antwort-Similarität",
    perfBannerText: "KI aktivieren. Daten schützen. Ergebnisse wiederherstellen. Alles nachverfolgen.",
    perfBannerCaption: "0,12s Verarbeitung pro 2.200-Zeichen-Dokument. Getestet in Finanz-, Gesundheits-, Rechts- und öffentlichen Sektor-Workflows",

    ctaTitle: "Erfahren Sie, wie LLM Capsule KI auf Ihren Unternehmensdokumenten ermöglicht",
    ctaDescription: "Bringen Sie Ihre Dokumente, Deployment-Einschränkungen und Bewertungskriterien mit. Wir demonstrieren, wie die AI-Enablement-Datenschicht mit Ihren tatsächlichen Daten, in Ihrer Umgebung, gemäß Ihren Compliance-Anforderungen funktioniert.",
    ctaBtn1Label: "Request a Demo",
    ctaBtn2Label: "Talk to an Architect",
    ctaBtn3Label: "Architektur-Brief herunterladen",
    ctaBtn4Label: "Available on AWS Marketplace",

    faqHeading: "Häufig gestellte Fragen",
    faqHeadingHighlight: "Fragen",
    faq1Q: "Wie schützt LLM Capsule Unternehmensdaten während der KI-Verarbeitung?",
    faq1A: "LLM Capsule fungiert als AI-Enablement-Datenschicht, die sensible Daten lokal verkapselt, bevor sie die Unternehmensumgebung verlassen. Nur geschützte Darstellungen werden an KI-Modelle gesendet. Nach der Verarbeitung werden Ausgaben lokal wiederhergestellt, sodass sie für echte Unternehmensworkflows nutzbar bleiben. Die Originaldaten erreichen nie externe KI-Dienste — deshalb ist es ein AI-Enablement-Plugin und kein Überwachungs- oder Filtertool.",
    faq2Q: "Wie unterscheidet sich LLM Capsule von Datenmaskierungs- und Löschungstools?",
    faq2A: "Maskierung und Löschung entfernen Daten dauerhaft und zerstören den Kontext, den KI-Modelle für nützliche Ausgaben benötigen. KI-Ergebnisse aus maskierten Dokumenten enthalten [REDACTED]-Platzhalter, die manuelle Rekonstruktion erfordern. LLM Capsule verkapselt Daten mit strukturerhaltender Verarbeitung und stellt Ausgaben nach der KI-Verarbeitung wieder her, wobei unternehmensfertige Ergebnisse automatisch erzeugt werden. Dies ist der fundamentale Unterschied zwischen statischen Datenanonymisierungstools und einem für KI konzipierten wiederherstellbaren Workflow.",
    faq3Q: "Was ist der Unterschied zwischen LLM Capsule und Prompt-Security-Gateways?",
    faq3A: "Prompt-Security-Gateways filtern auf API-Ebene — sie scannen Prompts nach sensiblen Mustern und blockieren oder entfernen markierte Inhalte. Sie können keine Unternehmensdokumente schützen, die über RAG-Pipelines oder Batch-Workflows verarbeitet werden, und bieten keine Ausgabewiederherstellung. LLM Capsule arbeitet als Datenschicht-Plugin, das sensible Elemente vor jeder KI-Verarbeitung verkapselt und Ausgaben danach wiederherstellt. Die beiden Ansätze können komplementär sein, aber nur ein Datenschicht-Ansatz bietet End-to-End-AI-Enablement auf Unternehmensdaten.",
    faq4Q: "Wo kann LLM Capsule bereitgestellt werden?",
    faq4A: "LLM Capsule unterstützt On-Premise-, Air-Gap-, Cloud- (einschließlich AWS Marketplace), Hybrid- und eingebettete Bereitstellungsmodelle. Die Encapsulation-Engine läuft unabhängig vom Bereitstellungstyp vollständig in Ihrer Umgebung. Diese Flexibilität ist entscheidend für die KI-Governance im Unternehmen — unterschiedliche Datentypen und regulatorische Anforderungen können unterschiedliche Bereitstellungsarchitekturen innerhalb einer einzelnen Organisation erfordern.",
    faq5Q: "Was ist Unternehmens-KI-Datenschutz?",
    faq5A: "KI-Einführung im Unternehmen ist die Praxis, sensible Unternehmensdaten KI-bereit zu machen, damit Organisationen LLMs einführen können, ohne Originalinformationen preiszugeben. LLM Capsule erreicht dies auf der Datenschicht durch lokale Encapsulation, strukturerhaltende Verarbeitung und lokale Restoration — bei null Exposition der Originaldaten und gleichzeitiger Ermöglichung der vollständigen KI-Workflow-Einführung. Im Gegensatz zu modellbasierten Ansätzen, die blockieren oder filtern, transformiert das Datenschicht-Plugin die Daten selbst, um Unternehmens-KI zu ermöglichen.",
    faq6Q: "Welche Zertifizierungen hat LLM Capsule?",
    faq6A: "ISO 27001, ISO 42001, GS Certification. LLM Capsule ist auf AWS Marketplace verfügbar und unterstützt die Bereitstellung innerhalb von Unternehmens-Compliance-Frameworks, einschließlich DSGVO, HIPAA und branchenspezifischer regulatorischer Anforderungen.",
  },
}

// ─── Cert card data ────────────────────────────────────────────────────────────
const CERTS = [
  { group: "KISA",        text: "Information Security Fast Track", org: "KISA",                    logo: `${GFX}/cert-kisa.png` },
  { group: "GS",          text: "GS Certification",               org: "TTA",                     logo: `${GFX}/cert-gs.png` },
  { group: "ISO",         text: "ISO/IEC 27001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "ISO",         text: "ISO/IEC 42001",                   org: "ISO",                     logo: `${GFX}/cert-iso.png` },
  { group: "Award",       text: "Security Innovation Award",       org: "Ministry of Science & ICT", logo: `${GFX}/awards-ministry-of-science-and-ict.jpg` },
  { group: "Award",       text: "Startup World Cup",               org: "Startup World Cup",       logo: `${GFX}/cert-startupworldcup.png` },
  { group: "Award",       text: "Next Rise Global Innovator",      org: "Next Rise",               logo: `${GFX}/awards-NextRise.png` },
  { group: "Award",       text: "T Challenge 2026",                org: "Deutsche Telekom",        logo: `${IMG}/partner-deutsche-telekom.avif` },
  { group: "Award",       text: "AI Medical Innovation",           org: "AI EXPO KOREA",           logo: `${GFX}/awards-koreaia.png` },
  { group: "Recognition", text: "Emerging AI+X Top 100",           org: "Emerging AI+X",           logo: "" },
  { group: "Recognition", text: "Gartner Vendor",                  org: "Gartner",                 logo: `${GFX}/cert-gartner.svg.png` },
]

const PARTNERS = [
  { src: `${IMG}/partner-deutsche-telekom.avif`, alt: "Deutsche Telekom" },
  { src: `${IMG}/partner-kyobo.avif`,            alt: "Kyobo" },
  { src: `${IMG}/partner-claroty.png`,           alt: "Claroty" },
  { src: `${IMG}/partner-eumc.avif`,             alt: "EUMC" },
  { src: `${IMG}/partner-navercloud.avif`,       alt: "Naver Cloud" },
]

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  lang?: Lang

  // URL props (not translated)
  heroBtn1Href?: string
  heroBtn2Href?: string
  heroBtn3Href?: string
  heroBtn4Href?: string
  ctaBtn1Href?: string
  ctaBtn2Href?: string
  ctaBtn3Href?: string
  ctaBtn4Href?: string

  // Numeric KPI values (not translated)
  kpi1Number?: string
  kpi2Number?: string
  kpi3Number?: string
  perf1Number?: string
  perf2Number?: string
  perf3Number?: string
  perf4Number?: string
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Index({
  lang = "en",

  heroBtn1Href = "request-pov.html",
  heroBtn2Href = "downloads.html",
  heroBtn3Href = "architecture.html",
  heroBtn4Href = "https://aws.amazon.com/marketplace",

  kpi1Number = "0.12s",
  kpi2Number = "100%",
  kpi3Number = "98%",

  perf1Number = "98.1%",
  perf2Number = "99.14%",
  perf3Number = "100%",
  perf4Number = "98%",

  ctaBtn1Href = "request-pov.html",
  ctaBtn2Href = "architecture.html",
  ctaBtn3Href = "downloads.html",
  ctaBtn4Href = "https://aws.amazon.com/marketplace",
}: Props) {
  const t = COPY[lang] || COPY.en
  const [activeTab, setActiveTab] = useState("core1")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const tabs = [
    { id: "core1", label: t.tabCore1Label },
    { id: "core2", label: t.tabCore2Label },
    { id: "core3", label: t.tabCore3Label },
    { id: "plus1", label: t.tabPlus1Label },
    { id: "plus2", label: t.tabPlus2Label },
  ]

  const tabPanels: Record<string, { title: string; p1: string; p2: string }> = {
    core1: {
      title: t.tabCore1Title,
      p1: t.tabCore1P1,
      p2: t.tabCore1P2,
    },
    core2: {
      title: t.tabCore2Title,
      p1: t.tabCore2P1,
      p2: t.tabCore2P2,
    },
    core3: {
      title: t.tabCore3Title,
      p1: t.tabCore3P1,
      p2: t.tabCore3P2,
    },
    plus1: {
      title: t.tabPlus1Title,
      p1: t.tabPlus1P1,
      p2: t.tabPlus1P2,
    },
    plus2: {
      title: t.tabPlus2Title,
      p1: t.tabPlus2P1,
      p2: t.tabPlus2P2,
    },
  }

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ]

  const panel = tabPanels[activeTab]

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_ORG }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_PRODUCT }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .idx-root {
          font-family: "DM Sans", sans-serif;
          color: ${P.textPrimary};
          background-color: ${P.surfaceWhite};
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .idx-root a { text-decoration: none; color: inherit; }
        .idx-root img { max-width: 100%; display: block; }
        .idx-root p, .idx-root li { word-break: keep-all; overflow-wrap: break-word; text-wrap: pretty; }
        .idx-root h1, .idx-root h2, .idx-root h3 { text-wrap: balance; }

        /* Container Query wrapper */
        .idx-inner { width: 100%; container-type: inline-size; }

        /* Container */
        .idx-container {
          width: 100%; margin: 0 auto; padding: 0 16px;
        }
        @container (min-width: 768px)  { .idx-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .idx-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .idx-container { padding: 0 120px; max-width: 1440px; } }

        /* Section base */
        .idx-section { width: 100%; padding: 60px 0; background-color: ${P.surfaceWhite}; }

        /* Buttons */
        .idx-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 9999px; font-family: "DM Sans", sans-serif;
          font-weight: 500; cursor: pointer; border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap; text-decoration: none;
        }
        .idx-btn--sm  { padding: 8px 16px;  font-size: 14px; }
        .idx-btn--md  { padding: 12px 32px; font-size: 16px; }
        .idx-btn--lg  { padding: 16px 48px; font-size: 18px; }
        .idx-btn--primary { background: ${P.gradientBrand}; color: ${P.white}; }
        .idx-btn--primary:hover { opacity: 0.88; }
        .idx-btn--secondary {
          background-color: transparent; color: ${P.textPrimary};
          border: 1px solid ${P.borderDefault};
        }
        .idx-btn--secondary:hover { background-color: ${P.surfaceLight}; }

        /* Text brand / product */
        .idx-brand { color: ${P.brandSecondary}; }
        .idx-product { font-family: "Oxanium", sans-serif; font-weight: 700; }

        /* Section Header */
        .idx-section-header { margin-bottom: 48px; text-align: center; }
        .idx-section-header--underline {
          padding-bottom: 24px;
          border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px;
        }
        .idx-section-header__title {
          font-size: 20px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 16px;
        }
        @container (min-width: 768px)  { .idx-section-header__title { font-size: 22px; } }
        @container (min-width: 1024px) { .idx-section-header__title { font-size: 24px; } }
        @container (min-width: 1440px) { .idx-section-header__title { font-size: 28px; } }
        .idx-section-header__desc {
          font-size: 18px; color: ${P.textSecondary};
          line-height: 1.7; max-width: 100%; margin: 0 auto;
        }
        @container (min-width: 1024px) { .idx-section-header__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-header__desc { max-width: 1080px; } }

        /* ── Section 1: Hero ──────────────────────────────────────── */
        .idx-hero-section { padding: 100px 0 0; background-color: ${P.surfaceWhite}; width: 100%; }
        .idx-hero { text-align: center; margin: 0 auto; }
        .idx-hero__title {
          font-family: "DM Sans", sans-serif; font-size: 32px; font-weight: 700;
          color: ${P.textPrimary}; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 12px;
        }
        @container (min-width: 768px)  { .idx-hero__title { font-size: 40px; } }
        @container (min-width: 1024px) { .idx-hero__title { font-size: 48px; } }
        @container (min-width: 1440px) { .idx-hero__title { font-size: 64px; } }
        .idx-hero__desc {
          font-size: 18px; color: ${P.textSecondary}; line-height: 1.7;
          max-width: 100%; margin: 0 auto 16px;
        }
        @container (min-width: 1024px) { .idx-hero__desc { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-hero__desc { max-width: 1080px; } }
        .idx-hero__frame {
          margin-top: 32px;
          border-radius: 40px 40px 0 0;
          padding: 48px 48px 0;
          background-color: ${P.neutral100};
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png');
          background-size: cover; background-position: center;
          overflow: hidden;
        }
        @container (max-width: 767px) {
          .idx-hero__frame { border-radius: 24px 24px 0 0; background-image: none; }
        }
        .idx-hero__screenshot { overflow: hidden; background: ${P.surfaceWhite}; }
        .idx-hero__screenshot img { width: 100%; display: block; }
        .idx-hero__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
          margin-top: 20px; padding-bottom: 64px;
        }
        @container (max-width: 767px) {
          .idx-hero__actions { flex-direction: column; align-items: center; }
          .idx-hero__actions .idx-btn { width: 100%; max-width: 320px; }
        }

        /* ── Section 2: Partner Marquee ───────────────────────────── */
        .idx-partner-grid { overflow: hidden; width: 100%; position: relative; }
        .idx-partner-grid:hover .idx-partner-track { animation-play-state: paused; }
        .idx-partner-track {
          display: flex; align-items: center; gap: 64px;
          animation: idx-marquee 40s linear infinite;
          width: max-content;
        }
        .idx-partner-item { flex-shrink: 0; height: 100px; display: flex; align-items: center; justify-content: center; }
        .idx-partner-item img {
          height: 100%; width: auto; max-width: 160px; object-fit: contain;
          filter: grayscale(1); opacity: 0.65; transition: filter 0.2s, opacity 0.2s;
        }
        .idx-partner-item img:hover { filter: grayscale(0); opacity: 1; }
        @keyframes idx-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @container (max-width: 767px) {
          .idx-partner-item { height: 75px; }
          .idx-partner-item img { max-width: 120px; }
          .idx-partner-track { gap: 48px; animation-duration: 25s; }
        }

        /* KPI Band */
        .idx-kpi-band {
          border-radius: 40px; padding: 48px 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
          justify-items: center; margin: 32px 0;
          background: ${P.gradientBrand};
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-deep-teal.png');
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-kpi-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.35); z-index: 0;
        }
        .idx-kpi-band > * { position: relative; z-index: 1; }
        .idx-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
        .idx-kpi-band__number {
          font-family: "DM Sans", sans-serif; font-size: 50px;
          font-weight: 700; line-height: 1; color: ${P.white};
        }
        .idx-kpi-band__label { font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.5; }
        @container (max-width: 767px) {
          .idx-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; background-image: none; }
        }

        /* KPI 4col */
        .idx-kpi-band--4col { grid-template-columns: repeat(4, 1fr); }
        @container (max-width: 1023px) { .idx-kpi-band--4col { grid-template-columns: repeat(2, 1fr); } }
        @container (max-width: 767px)  { .idx-kpi-band--4col { grid-template-columns: 1fr; } }

        /* Cert Grid Marquee */
        .idx-cert-grid { width: 100%; overflow: hidden; padding: 32px 0; }
        .idx-cert-track {
          display: flex; gap: 24px; align-items: stretch;
          width: max-content; animation: idx-marquee 40s linear infinite;
        }
        .idx-cert-track:hover { animation-play-state: paused; }
        .idx-cert-card {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 24px; padding: 24px 32px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 8px; flex-shrink: 0; width: 200px;
        }
        .idx-cert-card__group {
          font-family: "Fragment Mono", monospace; font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.08em; color: ${P.brandSecondary};
          margin-bottom: 4px;
        }
        .idx-cert-card__wreath {
          position: relative; width: 160px; height: 120px;
          display: flex; align-items: center; justify-content: center;
        }
        .idx-cert-card__wl, .idx-cert-card__wr {
          position: absolute; top: 0; height: 100%; width: 34%; object-fit: contain;
        }
        .idx-cert-card__wl { left: -6px; object-position: right; }
        .idx-cert-card__wr { right: -6px; object-position: left; }
        .idx-cert-card__text {
          position: relative; z-index: 1; font-size: 14px; font-weight: 700;
          color: ${P.textPrimary}; text-align: center; line-height: 1.2; max-width: 90px;
        }
        .idx-cert-card__org { font-size: 12px; color: ${P.textSecondary}; }
        .idx-cert-card__logo { width: 60px; height: 60px; object-fit: contain; margin-top: auto; margin-bottom: -10px; }
        @container (max-width: 767px) {
          .idx-cert-card { width: 170px; padding: 16px; }
          .idx-cert-card__wreath { width: 130px; height: 96px; }
          .idx-cert-card__text { font-size: 12px; max-width: 72px; }
          .idx-cert-card__logo { width: 48px; height: 48px; }
          .idx-cert-track { gap: 16px; animation-duration: 25s; }
        }

        /* ── Card Grid ────────────────────────────────────────────── */
        .idx-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @container (min-width: 768px)  { .idx-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 768px)  { .idx-card-grid--3col { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .idx-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }
        .idx-spaced-top { margin-top: 24px; }

        /* Card */
        .idx-card {
          background-color: ${P.surfaceWhite}; border-radius: 18px;
          border: 1px solid ${P.borderDefault};
          padding: 24px; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        @container (min-width: 1440px) { .idx-card { padding: 32px; } }
        .idx-card__icon { margin-bottom: 12px; color: ${P.brandSecondary}; }
        .idx-card__badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-radius: 9999px;
          font-size: 12px; font-weight: 600; line-height: 1;
          margin-bottom: 12px; width: fit-content;
        }
        .idx-card__badge--brand { color: ${P.brandSecondary}; border: 1px solid ${P.brandSecondary}; }
        .idx-card__badge--gray  { color: ${P.textSecondary}; border: 1px solid ${P.neutral200}; background-color: ${P.neutral025}; }
        .idx-card__badge--red   { color: ${P.error}; border: 1px solid ${P.error}; }
        .idx-card__title {
          font-size: 24px; font-weight: 700; color: ${P.textPrimary};
          line-height: 1.2; margin-bottom: 12px;
        }
        .idx-card__title--sm { font-size: 18px; }
        .idx-card__desc { font-size: 14px; color: ${P.textSecondary}; line-height: 1.7; flex: 1; }

        /* Bullet */
        .idx-bullet { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 12px; }
        .idx-bullet__item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 16px; line-height: 1.5; color: ${P.textPrimary};
        }
        .idx-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .idx-bullet--dot  .idx-bullet__icon::before { content: "•"; color: ${P.brandSecondary}; font-weight: 700; font-size: 18px; line-height: 1; }
        .idx-bullet--check .idx-bullet__icon::before { content: "✓"; color: ${P.success}; font-weight: 700; font-size: 16px; line-height: 1; }

        /* Feature Grid */
        .idx-feature-grid {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.borderDefault};
          border-radius: 40px; padding: 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 48px;
        }
        .idx-feature-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          text-align: center; cursor: pointer; transition: opacity 0.2s; text-decoration: none;
        }
        .idx-feature-item:hover { opacity: 0.7; }
        .idx-feature-item__icon { margin-bottom: 4px; color: ${P.brandSecondary}; }
        .idx-feature-item__title { font-size: 18px; font-weight: 600; color: ${P.textPrimary}; }
        @container (max-width: 767px) { .idx-feature-grid { grid-template-columns: repeat(2, 1fr); padding: 24px; gap: 24px; } }

        /* Center CTA */
        .idx-center-cta { text-align: center; margin-top: 32px; }

        /* Banner Full */
        .idx-banner-full {
          padding: 48px 24px; text-align: center; border-radius: 40px;
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-banner-full::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-banner-full > * { position: relative; z-index: 1; }
        .idx-banner-full p {
          font-size: 16px; color: ${P.textPrimary}; line-height: 1.7;
          max-width: 1080px; margin: 0 auto;
        }
        .idx-banner-full__actions {
          display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px;
        }
        @container (max-width: 767px) { .idx-banner-full { background-image: none !important; } }

        /* Step Tabs */
        .idx-step-tabs__nav {
          display: flex; gap: 0; border-bottom: 1px solid ${P.borderDefault};
          margin-bottom: 32px; overflow-x: auto;
        }
        .idx-step-tabs__tab {
          padding: 12px 24px; font-size: 14px; font-weight: 500;
          color: ${P.textSecondary}; cursor: pointer;
          border-bottom: 2px solid transparent; white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .idx-step-tabs__tab--active {
          color: ${P.brandPrimary}; border-bottom-color: ${P.brandPrimary};
          font-weight: 600;
        }
        .idx-step-tabs__panel {
          display: grid; grid-template-columns: 1fr; gap: 32px;
        }
        @container (min-width: 1024px) { .idx-step-tabs__panel { grid-template-columns: 5fr 7fr; } }
        .idx-step-tabs__panel h3 { margin-bottom: 12px; font-size: 20px; font-weight: 600; }
        .idx-step-tabs__panel p { font-size: 16px; color: ${P.textSecondary}; line-height: 1.7; margin-bottom: 16px; }
        .idx-step-tabs__screenshot {
          background-color: ${P.surfaceLight}; border-radius: 24px;
          border: 1px solid ${P.borderDefault};
          display: flex; align-items: center; justify-content: center; min-height: 280px;
          font-size: 14px; color: ${P.textTertiary};
        }

        /* Section body text */
        .idx-section-body {
          color: ${P.textSecondary}; font-size: 16px; font-weight: 500;
          line-height: 1.7; max-width: 100%; margin-bottom: 24px;
        }
        @container (min-width: 1024px) { .idx-section-body { max-width: 720px; } }
        @container (min-width: 1440px) { .idx-section-body { max-width: 1080px; } }
        .idx-section-body--center { margin-left: auto; margin-right: auto; text-align: center; }

        /* Table */
        .idx-table-wrap { overflow-x: auto; border-radius: 24px; border: 1px solid ${P.borderDefault}; }
        .idx-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .idx-table thead th {
          font-family: "Fragment Mono", monospace; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${P.textPrimary}; font-weight: 600;
          padding: 12px 16px; border-bottom: 2px solid ${P.borderDefault};
          text-align: left; background-color: ${P.surfaceLight};
        }
        .idx-table tbody td {
          padding: 14px 16px; border-bottom: 1px solid ${P.borderDefault};
          color: ${P.textPrimary}; vertical-align: top; line-height: 1.5;
        }
        .idx-table tbody tr:last-child td { border-bottom: none; }
        .idx-table tbody td:first-child { font-weight: 600; }

        /* Section 8 — bg-img overlay */
        .idx-section--bg-img {
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-smoke-pink.png');
          background-size: cover; background-position: center;
          position: relative;
        }
        .idx-section--bg-img::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-section--bg-img > * { position: relative; z-index: 1; }
        @container (max-width: 767px) { .idx-section--bg-img { background-image: none; } }

        /* Diagram */
        .idx-diagram__window {
          border: 1px solid ${P.borderDefault}; border-radius: 24px;
          overflow: hidden; box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
        }
        .idx-diagram__header {
          background: ${P.gradientArchHeader}; padding: 12px 24px;
          display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__dot { width: 8px; height: 8px; border-radius: 50%; background-color: rgba(255,255,255,0.55); }
        .idx-diagram__header-title { font-size: 14px; font-weight: 600; color: ${P.white}; margin-left: 8px; }
        .idx-diagram__body { padding: 32px; background-color: ${P.surfaceWhite}; overflow-x: auto; }
        .idx-diagram__cols { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 24px; min-width: 700px; }
        .idx-diagram__col-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .idx-diagram__col-dot { width: 8px; height: 8px; border-radius: 2px; }
        .idx-diagram__item {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 5px; font-size: 14px; margin-bottom: 8px;
        }
        .idx-diagram__item--internal { background-color: rgba(85,180,93,0.06); color: ${P.textPrimary}; border: 1px solid rgba(85,180,93,0.15); }
        .idx-diagram__item--capsule {
          background-color: ${P.brandPrimary}; color: ${P.white}; font-weight: 600;
          padding: 12px; border-radius: 8px; margin-top: 16px;
        }
        .idx-diagram__item--external { background-color: ${P.neutral025}; color: ${P.textPrimary}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__item--dashed { border-style: dashed; }
        .idx-diagram__flow-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${P.textTertiary}; margin-bottom: 4px; }
        .idx-diagram__flow-step { padding: 12px; border-radius: 8px; margin-bottom: 8px; font-size: 14px; }
        .idx-diagram__flow-step--local { background-color: ${P.surfaceLight}; border: 1px solid ${P.borderDefault}; }
        .idx-diagram__flow-step--external { background-color: rgba(86,144,212,0.06); border: 1px solid rgba(86,144,212,0.15); }
        .idx-diagram__flow-step--output { background-color: rgba(14,130,76,0.08); border: 1px solid rgba(14,130,76,0.2); color: ${P.success}; font-weight: 600; }
        .idx-diagram__arrow { text-align: center; color: ${P.textTertiary}; font-size: 14px; padding: 4px 0; }
        .idx-diagram__hl--red   { color: ${P.error}; font-weight: 600; }
        .idx-diagram__hl--brand { color: ${P.brandSecondary}; font-weight: 600; }
        .idx-diagram__hl--green { color: ${P.success}; font-weight: 600; }
        .idx-diagram__boundary-col { display: flex; gap: 16px; }
        .idx-diagram__trust-boundary {
          position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .idx-diagram__trust-boundary::before {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%;
          border-left: 2px dashed ${P.error}; opacity: 0.4;
        }
        .idx-diagram__trust-label {
          background-color: ${P.surfaceWhite}; border: 1px solid ${P.error};
          border-radius: 5px; padding: 8px 12px;
          font-size: 9px; font-weight: 700; color: ${P.error};
          text-transform: uppercase; letter-spacing: 0.08em;
          writing-mode: vertical-lr; white-space: nowrap; position: relative; z-index: 1;
        }
        .idx-diagram__ext-inner {
          background-color: ${P.neutral800}; border-radius: 8px; padding: 16px; flex: 1;
        }
        .idx-diagram__ext-inner .idx-diagram__col-title { color: ${P.neutral400}; }
        .idx-diagram__ext-inner .idx-diagram__item--external {
          background-color: ${P.neutral700}; color: ${P.textInverse}; border-color: ${P.neutral500};
        }

        /* Banner perf */
        .idx-perf-banner {
          margin-top: 32px; padding: 32px 24px; text-align: center;
          border-radius: 40px;
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-wave-teal.png');
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .idx-perf-banner::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(255,255,255,0.45); z-index: 0;
        }
        .idx-perf-banner > * { position: relative; z-index: 1; }
        .idx-perf-banner p { font-size: 16px; color: ${P.textPrimary}; line-height: 1.7; max-width: 1080px; margin: 0 auto; }
        .idx-perf-banner .idx-caption { font-size: 12px; color: ${P.textSecondary}; margin-top: 8px; display: block; }
        @container (max-width: 767px) { .idx-perf-banner { background-image: none; } }

        /* ── CTA Band ─────────────────────────────────────────────── */
        .idx-cta-band {
          width: 100%; position: relative; overflow: hidden;
          padding: 80px 16px; text-align: center;
          background-image: url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-blue-iridescent.png');
          background-color: ${P.neutral800};
          background-size: cover; background-position: center;
        }
        .idx-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background-color: rgba(0,0,0,0.15); z-index: 0;
        }
        .idx-cta-band > * { position: relative; z-index: 1; }
        .idx-cta-band__inner {
          max-width: 100%; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
        }
        .idx-cta-band__title {
          font-family: "DM Sans", sans-serif; font-size: 40px; font-weight: 700;
          color: ${P.white}; line-height: 1.2; letter-spacing: -0.5px; margin: 0;
        }
        @container (max-width: 767px) { .idx-cta-band__title { font-size: 36px; } .idx-cta-band { background-image: none; } }
        @container (min-width: 768px) { .idx-cta-band { padding: 100px 32px; } }
        @container (min-width: 1440px) { .idx-cta-band__title { font-size: 50px; } }
        .idx-cta-band__desc { font-size: 18px; color: rgba(255,255,255,0.85); line-height: 1.7; margin: 0; }
        .idx-cta-band__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .idx-cta-band__actions .idx-btn {
          background-color: rgba(255,255,255,0.92); color: ${P.textPrimary};
          border: 1px solid rgba(255,255,255,0.6); backdrop-filter: blur(8px);
        }
        .idx-cta-band__actions .idx-btn:hover { background-color: ${P.white}; }
        @container (max-width: 767px) {
          .idx-cta-band__actions { flex-direction: column; align-items: center; }
          .idx-cta-band__actions .idx-btn { width: 100%; max-width: 320px; }
        }

        /* FAQ Accordion */
        .idx-faq-wrap { margin: 0 auto; }
        .idx-ac-list { display: flex; flex-direction: column; gap: 2px; }
        .idx-ac-card {
          border: 1px solid ${P.borderDefault}; border-radius: 8px;
          background-color: ${P.surfaceWhite}; overflow: hidden; transition: background-color 0.2s;
        }
        .idx-ac-card:hover { background-color: ${P.neutral025}; }
        .idx-ac-card__header {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 24px; cursor: pointer; user-select: none;
        }
        .idx-ac-card__title { font-size: 18px; font-weight: 500; line-height: 1.2; color: ${P.textPrimary}; }
        .idx-ac-card__toggle {
          width: 28px; height: 28px; border-radius: 6px; flex-shrink: 0;
          border: 0.5px solid ${P.borderDefault}; background-color: ${P.surfaceLight};
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .idx-ac-card__body {
          padding: 24px; border-top: 1px solid ${P.borderDefault};
          background-color: ${P.surfaceLight};
          font-size: 14px; color: ${P.textSecondary}; line-height: 1.7;
        }
      `}</style>

      <div className="idx-root">
        <div className="idx-inner">

          {/* ── Section 1: Hero ─────────────────────────────────────── */}
          <section id="section-1" className="idx-hero-section">
            <div className="idx-container">
              <div className="idx-hero">
                <h1 className="idx-hero__title">{t.heroTitle}</h1>
                <p className="idx-hero__desc">{t.heroDescription}</p>
              </div>
              <div className="idx-hero__frame">
                <div className="idx-hero__screenshot">
                  <img
                    src={`${IMG}/screenshot-llmcapsule.webp`}
                    alt={t.heroScreenshotAlt}
                    loading="eager"
                  />
                </div>
              </div>
              <div className="idx-hero__actions">
                <a href={heroBtn1Href} className="idx-btn idx-btn--primary idx-btn--md">{t.heroBtn1Label}</a>
                <a href={heroBtn2Href} className="idx-btn idx-btn--secondary idx-btn--md">{t.heroBtn2Label}</a>
                <a href={heroBtn3Href} className="idx-btn idx-btn--secondary idx-btn--md">{t.heroBtn3Label}</a>
                <a href={heroBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">{t.heroBtn4Label}</a>
              </div>
            </div>
          </section>

          {/* ── Section 2: Trust ────────────────────────────────────── */}
          <section id="section-2" className="idx-section">
            <div className="idx-container">

              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.trustHeading}</h2>
                <p className="idx-section-header__desc">{t.trustSubheading}</p>
              </div>

              {/* Partner Marquee */}
              <div className="idx-partner-grid" aria-label="Partners and customers">
                <div className="idx-partner-track">
                  {[...PARTNERS, ...PARTNERS].map((p, i) => (
                    <div key={i} className="idx-partner-item">
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Band 3col */}
              <div className="idx-kpi-band" aria-label="Trust metrics">
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi1Number}</span>
                  <span className="idx-kpi-band__label">{t.kpi1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi2Number}</span>
                  <span className="idx-kpi-band__label">{t.kpi2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{kpi3Number}</span>
                  <span className="idx-kpi-band__label">{t.kpi3Label}</span>
                </div>
              </div>

              {/* Cert Grid Marquee */}
              <div className="idx-cert-grid" aria-label="Certifications and awards">
                <div className="idx-cert-track">
                  {[...CERTS, ...CERTS].map((c, i) => (
                    <div key={i} className="idx-cert-card">
                      <span className="idx-cert-card__group">{c.group}</span>
                      <div className="idx-cert-card__wreath">
                        <img className="idx-cert-card__wl" src={`${GFX}/cert-left.png`} alt="" />
                        <span className="idx-cert-card__text">{c.text}</span>
                        <img className="idx-cert-card__wr" src={`${GFX}/cert-right.png`} alt="" />
                      </div>
                      <span className="idx-cert-card__org">{c.org}</span>
                      {c.logo && <img className="idx-cert-card__logo" src={c.logo} alt={c.org} loading="lazy" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── Section 3: Five Capabilities ────────────────────────── */}
          <section id="section-3" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.capHeading}</h2>
                <p className="idx-section-header__desc">{t.capSubheading}</p>
              </div>

              <div className="idx-card-grid idx-card-grid--3col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="idx-card__title">{t.cap1Title}</h3>
                  <p className="idx-card__desc">{t.cap1Desc}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                  </div>
                  <h3 className="idx-card__title">{t.cap2Title}</h3>
                  <p className="idx-card__desc">{t.cap2Desc}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">CORE</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  </div>
                  <h3 className="idx-card__title">{t.cap3Title}</h3>
                  <p className="idx-card__desc">{t.cap3Desc}</p>
                </div>
              </div>

              <div className="idx-card-grid idx-card-grid--2col idx-spaced-top">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">+1</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h3 className="idx-card__title">{t.capPlus1Title}</h3>
                  <p className="idx-card__desc">{t.capPlus1Desc}</p>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--gray">+2</span>
                  <div className="idx-card__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                  </div>
                  <h3 className="idx-card__title">{t.capPlus2Title}</h3>
                  <p className="idx-card__desc">{t.capPlus2Desc}</p>
                </div>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-sky-lavender.png')" }}>
                <p>{t.capBannerText}</p>
                <div className="idx-banner-full__actions">
                  <a href="product.html" className="idx-btn idx-btn--secondary idx-btn--md">{t.capBannerBtn1}</a>
                  <a href="architecture.html" className="idx-btn idx-btn--secondary idx-btn--md">{t.capBannerBtn2}</a>
                  <a href="what-is-ai-data-capsule.html" className="idx-btn idx-btn--secondary idx-btn--sm">{t.capBannerBtn3}</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: Industry Proof ────────────────────────────── */}
          <section id="section-4" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.industryHeading}</h2>
                <p className="idx-section-header__desc">{t.industrySubheading}</p>
              </div>

              <div className="idx-feature-grid">
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg></div>
                  <span className="idx-feature-item__title">{t.industryPublicSector}</span>
                </a>
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
                  <span className="idx-feature-item__title">{t.industryFinance}</span>
                </a>
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 0 1 12 6.006a5 5 0 0 1 7.5 6.572"/><path d="M12 6V2"/><path d="M8 2h8"/></svg></div>
                  <span className="idx-feature-item__title">{t.industryHealthcare}</span>
                </a>
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <span className="idx-feature-item__title">{t.industryLegal}</span>
                </a>
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg></div>
                  <span className="idx-feature-item__title">{t.industryTelecom}</span>
                </a>
                <a href="solutions.html" className="idx-feature-item">
                  <div className="idx-feature-item__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="idx-feature-item__title">{t.industrySecurity}</span>
                </a>
              </div>

              <div className="idx-center-cta">
                <a href="solutions.html" className="idx-btn idx-btn--secondary idx-btn--md">{t.industryBtn}</a>
              </div>
            </div>
          </section>

          {/* ── Section 5: Step Tabs ─────────────────────────────────── */}
          <section id="section-5" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.tabsHeading}</h2>
                <p className="idx-section-header__desc">{t.tabsSubheading}</p>
              </div>

              <div className="idx-step-tabs__nav">
                {tabs.map(tab => (
                  <div
                    key={tab.id}
                    className={`idx-step-tabs__tab${activeTab === tab.id ? " idx-step-tabs__tab--active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>

              <div className="idx-step-tabs__panel">
                <div>
                  <h3>{panel.title}</h3>
                  <p>{panel.p1}</p>
                  <p>{panel.p2.replace("LLM Capsule", "").includes("LLM Capsule") ? panel.p2 : panel.p2}</p>
                </div>
                <div className="idx-step-tabs__screenshot">{panel.title}</div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Case Study Cards ──────────────────────────── */}
          <section id="section-6" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.csHeading}</h2>
                <p className="idx-section-header__desc">{t.csSubheading}</p>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                  <h3 className="idx-card__title">{t.cs1Title}</h3>
                  <p className="idx-card__desc">{t.cs1Desc}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs1Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs1Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg></div>
                  <h3 className="idx-card__title">{t.cs2Title}</h3>
                  <p className="idx-card__desc">{t.cs2Desc}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs2Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs2Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                  <h3 className="idx-card__title">{t.cs3Title}</h3>
                  <p className="idx-card__desc">{t.cs3Desc}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs3Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs3Bullet2}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <div className="idx-card__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg></div>
                  <h3 className="idx-card__title">{t.cs4Title}</h3>
                  <p className="idx-card__desc">{t.cs4Desc}</p>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs4Bullet1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.cs4Bullet2}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7: Problem ───────────────────────────────────── */}
          <section id="section-7" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.probHeading}</h2>
                <p className="idx-section-header__desc">{t.probSubheading}</p>
              </div>

              <div className="idx-section-body idx-section-body--center">
                <p>{t.probBody1}</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>{t.probBody2}</p>
              </div>
              <div className="idx-section-body idx-section-body--center">
                <p>{t.probBody3}</p>
              </div>

              <div className="idx-table-wrap">
                <table className="idx-table">
                  <thead>
                    <tr>
                      <th>{t.probTableApproach}</th>
                      <th>{t.probTableMethod}</th>
                      <th>{t.probTableLimitation}</th>
                      <th>{t.probTableImpact}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t.probRow1Approach}</td>
                      <td>{t.probRow1Method}</td>
                      <td>{t.probRow1Limitation}</td>
                      <td>{t.probRow1Impact}</td>
                    </tr>
                    <tr>
                      <td>{t.probRow2Approach}</td>
                      <td>{t.probRow2Method}</td>
                      <td>{t.probRow2Limitation}</td>
                      <td>{t.probRow2Impact}</td>
                    </tr>
                    <tr>
                      <td>{t.probRow3Approach}</td>
                      <td>{t.probRow3Method}</td>
                      <td>{t.probRow3Limitation}</td>
                      <td>{t.probRow3Impact}</td>
                    </tr>
                    <tr>
                      <td>{t.probRow4Approach}</td>
                      <td>{t.probRow4Method}</td>
                      <td>{t.probRow4Limitation}</td>
                      <td>{t.probRow4Impact}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="idx-banner-full idx-spaced-top" style={{ backgroundImage: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-paint-lavender.png')" }}>
                <p>{t.probBannerText}</p>
                <div className="idx-banner-full__actions">
                  <a href="architecture.html" className="idx-btn idx-btn--secondary idx-btn--sm">{t.probBannerBtn}</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: Before / After ────────────────────────────── */}
          <section id="section-8" className="idx-section idx-section--bg-img">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.baHeading}</h2>
              </div>

              <div className="idx-card-grid idx-card-grid--2col">
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--red">{t.baWithoutBadge}</span>
                  <h3 className="idx-card__title idx-card__title--sm">{t.baWithoutTitle}</h3>
                  <ul className="idx-bullet idx-bullet--dot">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout2}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout3}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout4}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout5}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWithout6}</span></li>
                  </ul>
                </div>
                <div className="idx-card">
                  <span className="idx-card__badge idx-card__badge--brand">{t.baWithBadge}</span>
                  <h3 className="idx-card__title idx-card__title--sm">{t.baWithTitle}</h3>
                  <ul className="idx-bullet idx-bullet--check">
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith1}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith2}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith3}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith4}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith5}</span></li>
                    <li className="idx-bullet__item"><span className="idx-bullet__icon"></span><span>{t.baWith6}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 9: Architecture Diagram ─────────────────────── */}
          <section id="section-9" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.diagHeading}</h2>
                <p className="idx-section-header__desc">{t.diagSubheading}</p>
              </div>

              <div className="idx-diagram__window">
                <div className="idx-diagram__header">
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__dot"></span>
                  <span className="idx-diagram__header-title">{t.diagWindowTitle}</span>
                </div>
                <div className="idx-diagram__body">
                  <div className="idx-diagram__cols">
                    {/* Col 1: Internal */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandAccent }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandAccent }}></span>
                        {t.diagColInternal}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        {t.diagCustomerDocs}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        {t.diagInternalDBs}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                        {t.diagRAGPipelines}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        {t.diagAdminConsole}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--internal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        {t.diagPolicyEngine}
                      </div>
                      <div className="idx-diagram__item idx-diagram__item--capsule" style={{ marginTop: 16 }}>
                        <span className="idx-product">LLM Capsule</span> — {t.diagCapsuleLabel}
                      </div>
                    </div>

                    {/* Col 2: Data Flow */}
                    <div>
                      <div className="idx-diagram__col-title" style={{ color: P.brandSecondary }}>
                        <span className="idx-diagram__col-dot" style={{ backgroundColor: P.brandSecondary }}></span>
                        {t.diagColFlow}
                      </div>
                      <div className="idx-diagram__flow-label">{t.diagStep1Label}</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        {t.diagStep1Text} — <span className="idx-diagram__hl--red">"Contract with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-label">{t.diagStep2Label}</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        {t.diagStep2Text} — <span className="idx-diagram__hl--brand">"Contract with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">{`- - - → ${t.diagExternalArrow} - - - →`}</div>
                      <div className="idx-diagram__flow-label">{t.diagStep3Label}</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--external">
                        {t.diagStep3Text} — <span className="idx-diagram__hl--brand">"The deal with [ORG_A]..."</span>
                      </div>
                      <div className="idx-diagram__arrow">{`← - - - ${t.diagLocalArrow} - - - ←`}</div>
                      <div className="idx-diagram__flow-label">{t.diagStep4Label}</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--local">
                        {t.diagStep4Text} — <span className="idx-diagram__hl--green">"The deal with Samsung..."</span>
                      </div>
                      <div className="idx-diagram__arrow">↓</div>
                      <div className="idx-diagram__flow-step idx-diagram__flow-step--output">{t.diagOutputLabel}</div>
                    </div>

                    {/* Col 3: Trust Boundary + External */}
                    <div className="idx-diagram__boundary-col">
                      <div className="idx-diagram__trust-boundary">
                        <span className="idx-diagram__trust-label">{t.diagTrustBoundary}</span>
                      </div>
                      <div className="idx-diagram__ext-inner">
                        <div className="idx-diagram__col-title" style={{ color: P.neutral400 }}>
                          <span className="idx-diagram__col-dot" style={{ backgroundColor: P.neutral400 }}></span>
                          {t.diagColExternal}
                        </div>
                        <div className="idx-diagram__item idx-diagram__item--external">ChatGPT / OpenAI</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Claude / Anthropic</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Gemini / Google</div>
                        <div className="idx-diagram__item idx-diagram__item--external">Perplexity</div>
                        <div className="idx-diagram__item idx-diagram__item--external idx-diagram__item--dashed">Any LLM API</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="idx-center-cta">
                <a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener" className="idx-btn idx-btn--secondary idx-btn--sm">{t.diagMarketplaceBtn}</a>
              </div>
            </div>
          </section>

          {/* ── Section 10: Performance Metrics ─────────────────────── */}
          <section id="section-10" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.perfHeading}</h2>
                <p className="idx-section-header__desc">{t.perfSubheading}</p>
              </div>

              <div
                className="idx-kpi-band idx-kpi-band--4col"
                style={{
                  backgroundImage: "url('https://bgyoo-gif.github.io/homepage-factory/cubig/reference/images/bg-gradient-navy-teal.png')",
                }}
                aria-label="Performance metrics"
              >
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf1Number}</span>
                  <span className="idx-kpi-band__label">{t.perf1Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf2Number}</span>
                  <span className="idx-kpi-band__label">{t.perf2Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf3Number}</span>
                  <span className="idx-kpi-band__label">{t.perf3Label}</span>
                </div>
                <div className="idx-kpi-band__item">
                  <span className="idx-kpi-band__number">{perf4Number}</span>
                  <span className="idx-kpi-band__label">{t.perf4Label}</span>
                </div>
              </div>

              <div className="idx-perf-banner">
                <p>{t.perfBannerText}</p>
                <span className="idx-caption">{t.perfBannerCaption}</span>
              </div>
            </div>
          </section>

          {/* ── Section 11: CTA Band ─────────────────────────────────── */}
          <div id="section-11" className="idx-cta-band">
            <div className="idx-cta-band__inner">
              <h2 className="idx-cta-band__title">{t.ctaTitle}</h2>
              <p className="idx-cta-band__desc">{t.ctaDescription}</p>
              <div className="idx-cta-band__actions">
                <a href={ctaBtn1Href} className="idx-btn idx-btn--md">{t.ctaBtn1Label}</a>
                <a href={ctaBtn2Href} className="idx-btn idx-btn--md">{t.ctaBtn2Label}</a>
                <a href={ctaBtn3Href} className="idx-btn idx-btn--md">{t.ctaBtn3Label}</a>
                <a href={ctaBtn4Href} target="_blank" rel="noopener" className="idx-btn idx-btn--md">{t.ctaBtn4Label}</a>
              </div>
            </div>
          </div>

          {/* ── Section 12: FAQ ──────────────────────────────────────── */}
          <section id="section-12" className="idx-section">
            <div className="idx-container">
              <div className="idx-section-header idx-section-header--underline">
                <h2 className="idx-section-header__title">{t.faqHeading}</h2>
              </div>

              <div className="idx-faq-wrap">
                <div className="idx-ac-list">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="idx-ac-card"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <div className="idx-ac-card__header">
                        <span className="idx-ac-card__title">{faq.q}</span>
                        <span className="idx-ac-card__toggle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <line x1="1" y1="6" x2="11" y2="6" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>
                            {openFaq !== i && <line x1="6" y1="1" x2="6" y2="11" stroke={P.textTertiary} strokeWidth="1.5" strokeLinecap="round"/>}
                          </svg>
                        </span>
                      </div>
                      {openFaq === i && (
                        <div className="idx-ac-card__body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

// ─── Property Controls ─────────────────────────────────────────────────────────
addPropertyControls(Index, {
  // Language
  lang: {
    type: ControlType.Enum,
    title: "Language",
    options: ["en", "ko", "ja", "de"],
    optionTitles: ["English", "한국어", "日本語", "Deutsch"],
    defaultValue: "en",
  },

  // URLs (not translated)
  heroBtn1Href:  { type: ControlType.String, title: "Hero Btn 1 URL",  defaultValue: "request-pov.html" },
  heroBtn2Href:  { type: ControlType.String, title: "Hero Btn 2 URL",  defaultValue: "downloads.html" },
  heroBtn3Href:  { type: ControlType.String, title: "Hero Btn 3 URL",  defaultValue: "architecture.html" },
  heroBtn4Href:  { type: ControlType.String, title: "Hero Btn 4 URL",  defaultValue: "https://aws.amazon.com/marketplace" },

  // KPI Numbers (not translated)
  kpi1Number:    { type: ControlType.String, title: "KPI 1 Number",    defaultValue: "0.12s" },
  kpi2Number:    { type: ControlType.String, title: "KPI 2 Number",    defaultValue: "100%" },
  kpi3Number:    { type: ControlType.String, title: "KPI 3 Number",    defaultValue: "98%" },

  // Performance Numbers (not translated)
  perf1Number:   { type: ControlType.String, title: "Perf 1 Number",   defaultValue: "98.1%" },
  perf2Number:   { type: ControlType.String, title: "Perf 2 Number",   defaultValue: "99.14%" },
  perf3Number:   { type: ControlType.String, title: "Perf 3 Number",   defaultValue: "100%" },
  perf4Number:   { type: ControlType.String, title: "Perf 4 Number",   defaultValue: "98%" },

  // CTA URLs (not translated)
  ctaBtn1Href:   { type: ControlType.String, title: "CTA Btn 1 URL",   defaultValue: "request-pov.html" },
  ctaBtn2Href:   { type: ControlType.String, title: "CTA Btn 2 URL",   defaultValue: "architecture.html" },
  ctaBtn3Href:   { type: ControlType.String, title: "CTA Btn 3 URL",   defaultValue: "downloads.html" },
  ctaBtn4Href:   { type: ControlType.String, title: "CTA Btn 4 URL",   defaultValue: "https://aws.amazon.com/marketplace" },
})
