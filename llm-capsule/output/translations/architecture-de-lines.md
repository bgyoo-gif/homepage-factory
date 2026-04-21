# Architecture — Deutsche Ubersetzung

## Section 01: Hero

AI Enablement
KI-Aktivierung

Architecture
Architektur

for Enterprise AI
fur Unternehmens-KI

LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.
LLM Capsule ist eine KI-Aktivierungs-Datenschicht und ein Plugin, das Unternehmen die sichere Einfuhrung jedes KI-Modells ermoglicht. Es sitzt zwischen Unternehmensdatensystemen und externen KI-Diensten — schutzt Daten wahrend der Ubertragung und erschliesst gleichzeitig die volle Leistung der KI in jedem Workflow.

## Section 02: Architecture Overview

Architecture
Architektur

Overview
Uberblick

LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.
LLM Capsule operiert als KI-Aktivierungs-Datenschicht, die sensible Unternehmensdaten lokal kapselt, nur geschutzte Darstellungen an jeden externen KI-Dienst ubertragt und KI-Ergebnisse innerhalb der Unternehmensumgebung wiederherstellt — und ermoglicht so eine sichere KI-Einfuhrung im grossen Massstab.

Internal Environment
Interne Umgebung

Customer Documents
Kundendokumente

Internal Databases
Interne Datenbanken

RAG Pipelines
RAG-Pipelines

Admin Console
Admin-Konsole

Policy Engine
Richtlinien-Engine

How Data Flows Through LLM Capsule
Wie Daten durch LLM Capsule fliessen

Step 1 — Local
Schritt 1 — Lokal

Detection
Erkennung

Auto-detects PII and org-defined entities
Erkennt automatisch PII und organisationsdefinierte Entitaten

Step 2 — Local
Schritt 2 — Lokal

Encapsulation
Kapselung

Replaces sensitive data with safe tokens locally
Ersetzt sensible Daten lokal durch sichere Token

Step 3 — External
Schritt 3 — Extern

LLM Processing
LLM-Verarbeitung

AI processes capsule. No real data exposed.
KI verarbeitet die Kapsel. Keine echten Daten offengelegt.

Step 4 — Local
Schritt 4 — Lokal

Restoration
Wiederherstellung

Auto-restores original values locally
Stellt Originalwerte lokal automatisch wieder her

Business-Ready Output
Geschaftsfertige Ergebnisse

External AI Services
Externe KI-Dienste

ChatGPT / OpenAI
ChatGPT / OpenAI

Claude / Anthropic
Claude / Anthropic

Gemini / Google
Gemini / Google

Perplexity
Perplexity

Any LLM API
Jede LLM-API

Encapsulated data
Gekapselte Daten

Restored response
Wiederhergestellte Antwort

Trust boundary
Vertrauensgrenze

## Section 03: Architecture Components

Architecture
Architektur

Components
Komponenten

Encapsulation Engine
Kapselungs-Engine

Local Encapsulation Engine
Lokale Kapselungs-Engine

The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.
Die Kapselungs-Engine operiert vollstandig innerhalb der Unternehmensumgebung. Sie erkennt sensible Elemente mithilfe kontextbezogener Datenkontrolle, ersetzt sie durch strukturerhaltende Darstellungen und speichert die Zuordnung lokal. Die Zuordnung verlasst niemals die Unternehmensgrenze.

Policy Control
Richtlinienkontrolle

Policy Control Layer
Richtlinienkontrollschicht

Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.
Unternehmenskontextkontrolle ermoglicht Organisationen, Sensitivitatsrichtlinien uber Standard-PII-Erkennung hinaus zu definieren. Sensitivitatsklassifizierung passt sich an Dokumenttyp, Abteilung, Workflow-Kontext und regulatorische Anforderungen an. Administratoren konfigurieren Richtlinien uber die Admin-Konsole.

Capsule Transmission
Kapselubertragung

Outbound Capsule Transmission
Ausgehende Kapselubertragung

Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.
Nur gekapselte Dokumente uberschreiten die Vertrauensgrenze. Der KI-Anbieter erhalt strukturell vollstandige Dokumente mit geschutzten Werten — nutzlich fur die KI-Verarbeitung, aber intransparent fur den empfangenden Dienst. Zero Exposure der originalen sensiblen Daten.

Restoration Engine
Wiederherstellungs-Engine

Local Restoration Engine
Lokale Wiederherstellungs-Engine

After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.
Nach Abschluss der KI-Verarbeitung wendet die Wiederherstellungs-Engine die lokal gespeicherte Zuordnung auf KI-Ergebnisse an. Originale Namen, Zahlen, Daten und Referenzen werden automatisch wiederhergestellt. Wiederhergestellte Ergebnisse sind direkt in Unternehmens-Workflows verwendbar.

Audit & Compliance
Prufung und Compliance

Audit & Compliance Layer
Prufungs- und Compliance-Schicht

Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.
Jedes Kapselungs- und Wiederherstellungsereignis wird mit vollstandigen Prufprotokollen erfasst. Organisationen konnen nachverfolgen, welche Daten geschutzt wurden, wann, von wem und welche KI-Dienste sie verarbeitet haben. Prufdaten unterstutzen KI-Governance im Unternehmen und regulatorische Compliance-Anforderungen.

## Section 04: Deployment Options

Deployment
Bereitstellung

Options
Optionen

LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.
LLM Capsule ermoglicht KI uberall dort, wo Ihre Infrastruktur lauft. Die Kapselungs- und Wiederherstellungslogik ist unabhangig vom Bereitstellungsmodell identisch — sodass Sie KI in jeder Umgebung einfuhren konnen.

On-Premise
On-Premise

Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.
Vollstandige Bereitstellung im Rechenzentrum des Unternehmens. Sensible Daten uberschreiten keine Netzwerkgrenzen. Operiert innerhalb bestehender Sicherheitsperimeter.

Air-Gapped
Air-Gapped

For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.
Fur die sensibelsten Umgebungen. Kapselung im isolierten Netzwerk, kontrollierter Transfer in die KI-verbundene Umgebung, Ergebnisse werden zur lokalen Wiederherstellung zuruckubertragen.

Cloud (AWS Marketplace)
Cloud (AWS Marketplace)

Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.
Lauft innerhalb des AWS-Kontos oder VPC des Unternehmens. Daten verbleiben innerhalb der Cloud-Grenze des Unternehmens. Auf dem AWS Marketplace fur vereinfachte Beschaffung verfugbar.

View on AWS Marketplace
Auf AWS Marketplace ansehen

Hybrid
Hybrid

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.
Verschiedene Dokumenttypen oder Sensitivitatsstufen werden uber verschiedene Bereitstellungsmodi innerhalb einer einzigen LLM Capsule-Instanz geleitet. Maximale Flexibilitat.

Embedded Integration
Eingebettete Integration

LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.
LLM Capsule eingebettet in bestehende Unternehmensanwendungen und -plattformen, als KI-Aktivierungs-Datenschicht innerhalb Ihres Software-Stacks.

Slack App
Slack-App

Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.
Nutzen Sie LLM Capsule direkt in Slack. Kapseln Sie sensible Nachrichten und Dokumente, bevor Sie sie an KI-Assistenten senden, mit Ergebniswiederherstellung im Kanal.

## Section 05: CTA

See how
Erfahren Sie, wie

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
Bringen Sie Ihre Dokumente, Bereitstellungsanforderungen und Evaluierungskriterien mit. Wir demonstrieren anhand Ihrer tatsachlichen Workflows.

Request a Demo
Demo anfordern

Available on AWS Marketplace
Auf AWS Marketplace verfugbar
