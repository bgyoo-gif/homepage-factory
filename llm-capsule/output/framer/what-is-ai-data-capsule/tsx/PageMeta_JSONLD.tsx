import { addPropertyControls, ControlType } from "framer"

/**
 * PageMeta_JSONLD
 * Injects JSON-LD structured data and Open Graph meta for the
 * "What Is an AI Data Capsule?" article page.
 *
 * Place this component once per page (e.g., in a hidden layer or page head slot).
 * It renders no visible UI — only a <script> tag and a zero-size container.
 */

interface Props {
  canonicalUrl?: string
  pageTitle?: string
  pageDescription?: string
}

const DEFAULT_JSON_LD_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://llmcapsule.ai/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://llmcapsule.ai/resources" },
    { "@type": "ListItem", position: 3, name: "Learn", item: "https://llmcapsule.ai/resources/learn" },
    { "@type": "ListItem", position: 4, name: "What Is an AI Data Capsule?", item: "https://llmcapsule.ai/resources/learn/what-is-ai-data-capsule" },
  ],
}

const DEFAULT_JSON_LD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI data capsule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI data capsule differ from data masking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.",
      },
    },
  ],
}

export default function PageMeta_JSONLD({
  canonicalUrl = "https://llmcapsule.ai/resources/learn/what-is-ai-data-capsule",
  pageTitle = "What Is an AI Data Capsule? — Enterprise Data Encapsulation for Secure LLM Usage | LLM Capsule",
  pageDescription = "An AI data capsule encapsulates sensitive data before AI processing and restores it after. Learn how encapsulation differs from masking.",
}: Props) {
  return (
    <div style={{ display: "none" }} aria-hidden="true">
      {/* JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DEFAULT_JSON_LD_BREADCRUMB) }}
      />
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DEFAULT_JSON_LD_FAQ) }}
      />
      {/* Canonical + meta hints for Framer page settings */}
      {/* NOTE: Set canonical, og:title, og:description, twitter:* in Framer Page Settings UI */}
      {/* canonicalUrl: {canonicalUrl} */}
      {/* pageTitle: {pageTitle} */}
      {/* pageDescription: {pageDescription} */}
    </div>
  )
}

addPropertyControls(PageMeta_JSONLD, {
  canonicalUrl: {
    type: ControlType.String,
    title: "Canonical URL",
    defaultValue: "https://llmcapsule.ai/resources/learn/what-is-ai-data-capsule",
  },
  pageTitle: {
    type: ControlType.String,
    title: "Page Title",
    defaultValue: "What Is an AI Data Capsule? — Enterprise Data Encapsulation for Secure LLM Usage | LLM Capsule",
    displayTextArea: true,
  },
  pageDescription: {
    type: ControlType.String,
    title: "Page Description",
    defaultValue: "An AI data capsule encapsulates sensitive data before AI processing and restores it after. Learn how encapsulation differs from masking.",
    displayTextArea: true,
  },
})
