# LLM Capsule vs Prompt Security Gateways — Deutsche Übersetzung

> Source: `LlmCapsuleVsPromptSecurityGateways.tsx`
> Pairs: 56 (all ControlType.String Props, excluding Image and URL-only Props)
> Glossary: master-glossary.md + localization-brief-de.md
> Tone: Sachlich, Sie-Anrede, KI statt AI, DSGVO statt GDPR

---

## Section 1: Hero

heroTitle
LLM Capsule vs Prompt Security Gateways
LLM Capsule vs. Prompt Security Gateways

heroDescription
Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule enables AI adoption at the data layer with structure-preserving encapsulation.
Vergleich von LLM Capsule mit Prompt Security Gateways. Gateways filtern auf der API-Ebene. LLM Capsule schützt Daten bereits auf der Datenebene durch strukturerhaltende Kapsulierung und ermöglicht so den produktiven KI-Einsatz.

---

## Section 3: Overview

overviewText
Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. LLM Capsule operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.
Prompt Security Gateways sind zwischen Anwender und KI-Modell geschaltet. Sie prüfen Eingaben auf sensible Inhalte und filtern oder blockieren Anfragen mit auffälligen Mustern. Ihr Wirkungsbereich ist die API-Interaktionsebene. LLM Capsule hingegen arbeitet als KI-Enablement-Datenschicht: Vertrauliche Daten werden bereits vor dem Eintritt in einen KI-Workflow lokal identifiziert und ersetzt. Das ermöglicht den KI-Einsatz, statt ihn zu blockieren.

---

## Section 4: How Gateways Work

gatewaysWorkTitle
How Prompt Security Gateways Work
Funktionsweise von Prompt Security Gateways

gatewaysWorkText
Prompt gateways intercept API calls to LLM providers. They scan the prompt text for PII patterns, blocked topics, or compliance violations. If sensitive content is detected, the gateway either blocks the request, strips the flagged content, or alerts an administrator. Some gateways also scan AI responses for data leakage.
Prompt Gateways fangen API-Aufrufe an LLM-Anbieter ab und prüfen den Prompt-Text auf PII-Muster, gesperrte Themen oder Compliance-Verstöße. Bei erkannten sensiblen Inhalten blockiert das Gateway die Anfrage, entfernt die betroffenen Passagen oder benachrichtigt einen Administrator. Einige Gateways prüfen zusätzlich KI-Antworten auf Datenabflüsse.

---

## Section 5: Limitations

limitationsTitle
Limitations
Einschränkungen

limitationBullet1
Prompt-only scope. Gateways only see the final prompt, not the underlying data pipeline. Documents processed through RAG systems or batch pipelines may bypass the gateway entirely.
Begrenzter Wirkungsbereich. Gateways sehen ausschließlich den finalen Prompt, nicht die zugrunde liegende Datenpipeline. Dokumente, die über RAG-Systeme oder Batch-Pipelines verarbeitet werden, können das Gateway vollständig umgehen.

limitationBullet2
Block or pass binary. Most gateways make a binary decision — block the request or pass it through. There is no mechanism to transform data while preserving usability.
Binäre Entscheidung. Die meisten Gateways entscheiden binär: blockieren oder durchlassen. Ein Mechanismus zur Datentransformation unter Erhalt der Nutzbarkeit fehlt.

limitationBullet3
No output restoration. If a gateway strips sensitive content from a prompt, the AI output will lack that context. There is no restoration mechanism.
Keine Wiederherstellung der Ausgabe. Entfernt ein Gateway sensible Inhalte aus einem Prompt, fehlt dieser Kontext in der KI-Antwort. Ein Mechanismus zur nachträglichen Anreicherung existiert nicht.

limitationBullet4
Pattern-based detection. Gateways rely on pattern matching which misses context-dependent sensitivity and generates false positives on non-sensitive content that matches PII patterns.
Musterbasierte Erkennung. Gateways arbeiten mit Musterabgleich, der kontextabhängige Sensibilität nicht erfasst. Nicht-sensible Inhalte, die PII-Mustern ähneln, erzeugen Fehlalarme.

---

## Section 6: How LLM Capsule Differs

differsTitle
How LLM Capsule Differs
Abgrenzung zu LLM Capsule

differsText
LLM Capsule operates upstream of the prompt. It encapsulates sensitive data at the document level before any AI processing occurs. The encapsulation is structure-preserving — AI receives complete, processable documents. After AI generates outputs, local restoration (restoration) restores enterprise context automatically.
LLM Capsule setzt vor der Prompt-Erstellung an. Sensible Daten werden auf Dokumentebene kapsuliert, bevor eine KI-Verarbeitung stattfindet. Die Kapsulierung ist strukturerhaltend — die KI erhält vollständige, verarbeitungsfähige Dokumente. Nach der KI-Verarbeitung werden die Originaldaten durch lokale Wiederherstellung automatisch in die Ergebnisse zurückgeführt.

differsBannerText
AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
KI-Ergebnisse werden lokal mit Originaldaten angereichert. LLM Capsule ermöglicht den produktiven KI-Einsatz im Unternehmen bei gleichzeitigem Schutz vertraulicher Informationen.

---

## Section 7: Comparison Table

comparisonTitle
Comparison
Vergleich

thCapability
Capability
Kategorie

thGateways
Prompt Security Gateways
Prompt Security Gateways

thCapsule
LLM Capsule
LLM Capsule

row1Cap
Operating layer
Wirkungsebene

row1Col2
API / prompt level
API- / Prompt-Ebene

row1Col3
AI enablement data layer
KI-Enablement-Datenschicht

row2Cap
Scope
Wirkungsbereich

row2Col2
Prompt text only
Nur Prompt-Text

row2Col3
Full data pipeline
Gesamte Datenpipeline

row3Cap
Protection method
Schutzmechanismus

row3Col2
Block or strip
Blockieren oder Entfernen

row3Col3
Structure-preserving encapsulation
Strukturerhaltende Kapsulierung

row4Cap
Output restoration
Wiederherstellung der Ausgabe

row4Col2
✗
✗

row4Col3
✓ Local restoration
✓ Lokale Wiederherstellung

row5Cap
Context-aware data control
Kontextbezogene Datenkontrolle

row5Col2
Limited pattern matching
Eingeschränkter Musterabgleich

row5Col3
Policy-based classification
Richtlinienbasierte Klassifikation

row6Cap
RAG pipeline support
RAG-Pipeline-Unterstützung

row6Col2
Partial
Teilweise

row6Col3
Full integration
Vollständige Integration

row7Cap
Model independence
Modellunabhängigkeit

row7Col2
Provider-specific
Anbieterabhängig

row7Col3
Works with any LLM
Funktioniert mit jedem LLM

---

## Section 8: Enterprise Workflow Example

exampleTitle
Enterprise Workflow Example
Praxisbeispiel aus dem Unternehmenseinsatz

exampleCardTitle
RAG-Based Knowledge System
RAG-basiertes Wissenssystem

exampleCardText1
An enterprise deploys a RAG system that retrieves internal documents to augment AI responses. A prompt gateway can only scan the final composed prompt — it cannot protect the 50 retrieved document chunks that feed into it.
Ein Unternehmen setzt ein RAG-System ein, das interne Dokumente zur Anreicherung von KI-Antworten abruft. Ein Prompt Gateway kann nur den final zusammengesetzten Prompt prüfen — die 50 abgerufenen Dokumentfragmente, die einfließen, bleiben ungeschützt.

exampleCardText2
LLM Capsule encapsulates all documents at the data layer before they enter the RAG index. Every retrieval, every prompt composition, and every AI output operates on protected data. Restoration restores enterprise context in the final response.
LLM Capsule kapsuliert alle Dokumente auf der Datenebene, bevor sie in den RAG-Index gelangen. Jeder Abruf, jede Prompt-Komposition und jede KI-Ausgabe arbeitet mit geschützten Daten. Die Wiederherstellung führt den Unternehmenskontext in der finalen Antwort automatisch zusammen.

---

## Section 9: FAQ

faqTitle
FAQ
FAQ

faq1Question
How does LLM Capsule differ from prompt gateways?
Wie unterscheidet sich LLM Capsule von Prompt Gateways?

faq1Answer
Prompt gateways filter at the API level and can only block or pass requests. LLM Capsule transforms data at the source, preserving structure for AI processing and enabling output restoration.
Prompt Gateways filtern auf der API-Ebene und können Anfragen nur blockieren oder weiterleiten. LLM Capsule transformiert Daten bereits an der Quelle, erhält die Dokumentstruktur für die KI-Verarbeitung und ermöglicht die nachträgliche Wiederherstellung der Ergebnisse.

faq2Question
Can I use both a gateway and LLM Capsule?
Lassen sich ein Gateway und LLM Capsule parallel einsetzen?

faq2Answer
Yes. LLM Capsule provides data-layer protection while gateways provide an additional API-level monitoring layer. The two approaches are complementary.
Ja. LLM Capsule bietet Schutz auf der Datenebene, während Gateways eine ergänzende Überwachungsschicht auf API-Ebene bereitstellen. Beide Ansätze sind komplementär.

---

## Section 10: Related Links

relatedLink1Label
Product Overview
Produktübersicht

relatedLink2Label
Architecture
Architektur

relatedLink3Label
Trust & Compliance
Vertrauen und Compliance

relatedLink4Label
Request a Demo
Demo anfordern

relatedLink5Label
Learn Hub
Learn Hub

---

## Section 11: CTA Band

ctaTitle
See how LLM Capsule works with your data
Wir analysieren Ihre Anforderungen und demonstrieren LLM Capsule anhand Ihrer eigenen Daten.

ctaDescription
Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
Senden Sie uns Ihre Dokumente, Infrastrukturanforderungen und Bewertungskriterien. Wir demonstrieren LLM Capsule in Ihren tatsächlichen Workflows.

ctaBtn1Label
Request a Demo
Demo anfordern

ctaFootnote2Label
AWS Marketplace
AWS Marketplace
