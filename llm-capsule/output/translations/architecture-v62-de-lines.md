# architecture-v62 — Deutsche Übersetzung (v6.2, localize)

---

## Section 01: Hero

Architecture
Architektur

How LLM Capsule plugs AI into the systems you already run
Wie LLM Capsule KI in Ihre bestehenden Systeme integriert

Three zones. Four steps. Five components. Two execution paths. One governance framework. The AI enablement data layer for regulated operations — at the architectural level.
Drei Zonen. Vier Schritte. Fünf Komponenten. Zwei Ausführungspfade. Ein Governance-Rahmen. LLM Capsule bildet die Datenschicht für den KI-Einsatz in regulierten Umgebungen — dargestellt auf Architekturebene.

---

## Section 02: Zone Overview

Zone overview
Zonenübersicht

One layer between your existing systems and AI
Eine Schicht zwischen Ihren bestehenden Systemen und der KI

LLM Capsule sits inside your environment, reads from existing systems, preserves operational structure, and restores AI output back into the originating workflow. The architecture maps to four zones — Corporate Internal Network, DMZ, In-House Team, and Local Auto Reconstruction — and the trust boundary holds: raw operational data stays inside the corporate environment; only the protected capsule traverses zones; restored output is reconstructed locally inside the in-house team's environment.
LLM Capsule wird innerhalb Ihrer Umgebung betrieben. Es liest aus bestehenden Systemen, erhält die operative Datenstruktur und führt die KI-Ausgabe automatisch in den ursprünglichen Workflow zurück. Die Architektur gliedert sich in vier Zonen: Corporate Internal Network, DMZ, In-House Team und Local Auto Reconstruction. Die Vertrauensgrenze bleibt dabei durchgehend gewahrt: Rohe Betriebsdaten verbleiben im Unternehmensnetzwerk. Nur die geschützte Kapsel durchquert die Zonengrenzen. Die Wiederherstellung erfolgt ausschließlich lokal in der Unternehmensumgebung.

Zone 1
Zone 1

Corporate Internal Network
Corporate Internal Network

Where the operational systems and the data they hold already live. LLM Capsule reads from these systems where they already are — without modification, with a single API-call addition.
Hier befinden sich die operativen Systeme und die darin gespeicherten Daten. LLM Capsule liest direkt aus diesen Systemen — ohne Systemänderung, über einen einzigen zusätzlichen API-Aufruf.

ERP System (SAP / Oracle) — REST API
ERP-System (SAP / Oracle) — REST API

CRM (Salesforce) — REST API
CRM (Salesforce) — REST API

Ticketing (Jira / ServiceNow) — REST API
Ticketing (Jira / ServiceNow) — REST API

DMS / ECM (SharePoint) — Graph API
DMS / ECM (SharePoint) — Graph API

Legacy DB (Oracle / MSSQL) — JDBC → API
Legacy-DB (Oracle / MSSQL) — JDBC → API

RAG Pipeline (Vector DB) — gRPC / REST
RAG-Pipeline (Vector DB) — gRPC / REST

Zone 2
Zone 2

DMZ — Demilitarized Zone
DMZ — Demilitarisierte Zone

Where the Enhanced Encapsulation Layer operates. Detection identifies sensitive elements, encapsulation replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and only the capsule leaves this zone toward an external AI.
In dieser Zone wird die Enhanced Encapsulation Layer ausgeführt. Sensible Inhalte werden erkannt und durch sichere Token ersetzt — strukturerhaltend, auf Basis von Differential Privacy. Nur die Kapsel verlässt diese Zone in Richtung externer KI.

Detection — PII + customer-defined markers
Erkennung — personenbezogene Daten und kundendefinierte Marker

Enhanced Encapsulation Layer — DP-based, structure-preserving
Enhanced Encapsulation Layer — Differential-Privacy-basiert, strukturerhaltend

Capsule transmission — capsule only, never raw data
Kapselübertragung — ausschließlich die Kapsel, niemals Rohdaten

Token map stays local
Token-Map verbleibt lokal

Audit trail of every encapsulation event
Vollständiger Audit-Trail jedes Kapsulierungsvorgangs

↑ Trust boundary — original operational data never crosses
↑ Vertrauensgrenze — ursprüngliche Betriebsdaten überschreiten diese Grenze nicht

Zone 3
Zone 3

In-House Team
In-House Team

Where governance, policy, and the AI workflow itself are operated. Organizational policy, permissions, and domain context drive how the encapsulated request is routed — to an approved external LLM or to an on-prem local model — with full audit retained inside the organization.
Governance, Richtlinien und der KI-Workflow selbst werden in dieser Zone gesteuert. Organisationsrichtlinien, Zugriffsberechtigungen und fachlicher Kontext bestimmen, wie die Kapselanfrage weitergeleitet wird — an einen zugelassenen externen LLM (Pfad A) oder an ein On-Premise-Modell (Pfad B). Der vollständige Audit-Trail verbleibt in der Organisation.

Organizational policy & permissions
Organisationsrichtlinien und Zugriffsberechtigungen

Domain context applied to AI processing
Fachlicher Kontext für die KI-Verarbeitung

Routing — external approved LLM (Path A) or on-prem local (Path B)
Routing — zugelassener externer LLM (Pfad A) oder lokales On-Premise-Modell (Pfad B)

Approved external LLMs: ChatGPT · Claude · Gemini · Perplexity · any LLM API
Zugelassene externe LLMs: ChatGPT · Claude · Gemini · Perplexity · beliebige LLM-API

Governance fully retained
Governance verbleibt vollständig in der Organisation

Zone 4
Zone 4

Local — Auto Reconstruction
Lokal — Automatische Rekonstruktion

Where the AI response is automatically reconstructed back into Business-Ready output. Tokens are restored to original values inside the organization only — data that left the boundary cannot be reconstructed externally.
In dieser Zone wird die KI-Antwort automatisch in ein fachlich nutzbares Ergebnis überführt. Die Token werden ausschließlich innerhalb der Organisation mit den Originalwerten angereichert. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden.

Token-by-token restoration from local token vault
Token-für-Token-Wiederherstellung aus dem lokalen Token-Tresor

Restoration happens only inside the organization
Wiederherstellung erfolgt ausschließlich innerhalb der Organisation

Externally-leaked data is not restorable outside
Extern abgeflossene Daten sind außerhalb nicht wiederherstellbar

Business-Ready output delivered to the originating workflow
Fachlich nutzbare Ergebnisse werden in den ursprünglichen Workflow zurückgeführt

Restoration audit alongside encapsulation audit
Wiederherstellungs-Audit parallel zum Kapsulierungs-Audit

---

## Section 03: Technical Diagram

Technical view · zone-based architecture
Technische Ansicht · Zonenbasierte Architektur

The same architecture, in technical detail
Dieselbe Architektur — in technischer Detailtiefe

For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and external AI interact.
Für Systemarchitekten und Sicherheitsverantwortliche: die vollständige zonenbasierte Darstellung des Zusammenspiels von Betriebsdaten, Kapsulierung und externer KI.

TECHNICAL VIEW · ZONE-BASED ARCHITECTURE
TECHNISCHE ANSICHT · ZONENBASIERTE ARCHITEKTUR

Zone 1 · Corporate Internal Network
Zone 1 · Corporate Internal Network

Where the operational systems already live
Wo die operativen Systeme bereits betrieben werden

Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
Die bestehenden Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — verbleiben unverändert am vorhandenen Ort. Es findet keine Migration statt. LLM Capsule liest über REST, gRPC, JDBC oder Graph API aus diesen Systemen — je nach Quellsystem.

Zone 2 · DMZ — Demilitarized Zone
Zone 2 · DMZ — Demilitarisierte Zone

Where encapsulation happens
Wo die Kapsulierung stattfindet

The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
Die Enhanced Encapsulation Layer erkennt sensible Inhalte und ersetzt sie durch sichere Token — strukturerhaltend, auf Basis von Differential Privacy. Die Originalwerte verbleiben lokal in der Token-Map. Die Kapsel wird anschließend an die Routing-Entscheidung übergeben.

Zone 3 · In-House Team
Zone 3 · In-House Team

Where governance and routing happen
Wo Governance und Routing gesteuert werden

Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
Organisationsrichtlinien, Zugriffsberechtigungen und fachlicher Kontext bestimmen, wo die Kapsel verarbeitet wird — über einen zugelassenen externen LLM (Pfad A) oder ein lokales On-Premise-Modell (Pfad B). Die Entscheidung erfolgt richtliniengesteuert, je Workflow. Der vollständige Audit-Trail verbleibt in der Organisation.

Zone 4 · Local — Auto Reconstruction
Zone 4 · Lokal — Automatische Rekonstruktion

Where the AI response becomes Business-Ready output
Wo die KI-Antwort in ein fachlich nutzbares Ergebnis überführt wird

The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch von Token auf Originalwerte zurückgeführt. Daten, die die Vertrauensgrenze verlassen haben, sind extern nicht rekonstruierbar. Das wiederhergestellte Ergebnis wird in den ursprünglichen Workflow zurückgegeben.

---

## Section 04: Pillars

Six architectural pillars
Sechs architektonische Grundprinzipien

What this architecture protects against — and how
Wovor diese Architektur schützt — und wie

The pillars below are the technical commitments encoded into the four-zone architecture above. Each maps to a specific failure mode of conventional approaches.
Die folgenden Grundprinzipien beschreiben die technischen Eigenschaften der Vier-Zonen-Architektur. Jedes Prinzip adressiert einen spezifischen Schwachpunkt konventioneller Ansätze.

Pillar 01
Grundprinzip 01

Beyond simple PII guardrails
Über einfache PII-Schutzmaßnahmen hinaus

Even inside the same enterprise, free-text fields like a CS ticket Details column mix customer names, contact information, and claim narrative in unstructured form. Simple PII guardrails cannot safely process this. Detection in Capsule operates on free-text and structured fields together — semantic and context-aware, not pattern-matching alone.
In Freitextfeldern — etwa der Detailspalte eines Support-Tickets — vermischen sich Kundennamen, Kontaktdaten und Schadenberichte in unstrukturierter Form. Einfache PII-Schutzmaßnahmen sind dafür nicht ausreichend. Die Erkennung in LLM Capsule arbeitet auf Freitext- und strukturierten Feldern gemeinsam: semantisch und kontextbewusst, nicht allein auf Basis von Mustern.

Pillar 02
Grundprinzip 02

No modification of existing systems
Keine Änderung bestehender Systeme

Existing enterprise systems are not refactored. Connection is a single API-call addition (REST / gRPC) — the operations team continues using their existing tools, the Capsule layer handles encapsulation and restoration alongside.
Bestehende Unternehmenssysteme werden nicht umgebaut. Die Anbindung erfolgt über einen einzigen zusätzlichen API-Aufruf (REST / gRPC). Das Betriebsteam arbeitet weiterhin mit seinen vorhandenen Werkzeugen. LLM Capsule übernimmt Kapsulierung und Wiederherstellung parallel dazu.

Pillar 03
Grundprinzip 03

Beyond simple encapsulation — differential privacy
Über einfache Kapsulierung hinaus — Differential Privacy

The Enhanced Encapsulation Layer goes beyond simple tokenization. Differential privacy (epsilon-DP, Laplace noise, k-anonymity, NER masking) is applied to minimize re-identification risk on the capsule itself, providing stronger protection than tokenization alone.
Die Enhanced Encapsulation Layer geht über einfache Tokenisierung hinaus. Differential Privacy (epsilon-DP, Laplace-Rauschen, k-Anonymität, NER-Maskierung) wird angewendet, um das Wiedererkennungsrisiko der Kapsel selbst zu minimieren. Der Schutz ist damit stärker als bei reiner Tokenisierung.

Pillar 04
Grundprinzip 04

No raw exposure to external AI
Keine Offenlegung von Rohdaten gegenüber externer KI

External AI services see only the capsule. Original operational data does not cross the trust boundary. Tokenization combined with DP processing means a leak from the external AI side does not yield reconstructable original values.
Externe KI-Dienste erhalten ausschließlich die Kapsel. Die ursprünglichen Betriebsdaten überschreiten die Vertrauensgrenze nicht. Die Kombination aus Tokenisierung und Differential-Privacy-Verarbeitung stellt sicher, dass ein Datenaustritt auf der externen KI-Seite keine rekonstruierbaren Originalwerte liefert.

Pillar 05
Grundprinzip 05

In-environment auto-restoration
Automatische Wiederherstellung in der Unternehmensumgebung

AI response tokens are automatically restored to their original values inside the organization only. Data that left the trust boundary cannot be reconstructed externally — only the in-house token vault can perform restoration.
KI-Antwort-Token werden ausschließlich innerhalb der Organisation automatisch auf ihre Originalwerte zurückgeführt. Daten, die die Vertrauensgrenze verlassen haben, sind extern nicht rekonstruierbar. Nur der interne Token-Tresor kann die Wiederherstellung durchführen.

Pillar 06
Grundprinzip 06

Governance, policy & domain context retained
Governance, Richtlinien und fachlicher Kontext bleiben erhalten

Organizational policy, permissions, and domain context drive the entire AI processing path — what gets encapsulated, where it is routed (Path A external or Path B on-prem), and how restoration is audited. Governance stays inside the organization end-to-end.
Organisationsrichtlinien, Zugriffsberechtigungen und fachlicher Kontext steuern den gesamten KI-Verarbeitungspfad: was kapsuliert wird, wohin geroutet wird (Pfad A extern oder Pfad B On-Premise) und wie die Wiederherstellung auditiert wird. Governance verbleibt durchgängig innerhalb der Organisation.

These pillars are derived from the diagram_v8 architecture reference. Each pillar maps to a specific failure mode of conventional approaches — masking and redaction, prompt security gateways, and synthetic data platforms — that the four-zone architecture is designed to address.
Diese Grundprinzipien basieren auf der Architektur-Referenz diagram_v8. Jedes Prinzip adressiert einen spezifischen Schwachpunkt konventioneller Ansätze — Maskierung und Schwärzung, Prompt-Sicherheitsgateways sowie Plattformen für synthetische Daten — den die Vier-Zonen-Architektur gezielt behebt.

---

## Section 05: Components

Five components
Fünf Komponenten

What's inside the LLM Capsule
Was LLM Capsule im Inneren ausmacht

The five architectural components that implement the data layer. Each is independently configurable and audit-loggable.
Die fünf Architekturkomponenten, die die Datenschicht umsetzen. Jede Komponente ist unabhängig konfigurierbar und vollständig auditierbar.

Component 01
Komponente 01

Detection Engine
Detection Engine

Detects PII + customer-defined markers across structured fields and free text. Beyond regex — semantic + context-aware. 98.1% detection accuracy.
Erkennt personenbezogene Daten und kundendefinierte Marker in strukturierten Feldern und Freitext. Über reine Regex-Erkennung hinaus — semantisch und kontextbewusst. Erkennungsgenauigkeit: 98,1 %.

Component 02
Komponente 02

Encapsulation Engine
Encapsulation Engine

Differential-privacy-based replacement (epsilon-DP, Laplace noise, k-anonymity, NER masking). Structure-preserving — tables, hierarchies, references survive.
Differential-Privacy-basierter Ersatz (epsilon-DP, Laplace-Rauschen, k-Anonymität, NER-Maskierung). Strukturerhaltend — Tabellen, Hierarchien und Referenzen bleiben erhalten.

Component 03
Komponente 03

Policy Control
Policy Control

Versioned, scoped, RBAC'd policies. Time-shifting markers — yesterday's policy archived, today's enforced. Per-team, per-workflow scope.
Versionierte, bereichsbezogene, RBAC-gestützte Richtlinien. Zeitgesteuerte Marker — gestrige Richtlinien werden archiviert, heutige werden durchgesetzt. Geltungsbereich je Team und je Workflow konfigurierbar.

Component 04
Komponente 04

Restoration Engine
Restoration Engine

Local token vault lookup + context re-binding + output validation. 100% restoration rate. AI output comes back business-ready, in the originating tool.
Lokale Token-Tresor-Abfrage, Kontextwiederherstellung und Ausgabevalidierung. Wiederherstellungsrate: 100 %. Die KI-Ausgabe wird fachlich nutzbar in das ursprüngliche Werkzeug zurückgeführt.

Component 05
Komponente 05

Audit & Compliance
Audit & Compliance

Every detection, encapsulation, processing, and restoration logged with policy version, model, latency, and outcome. GDPR / HIPAA / SOX-aligned.
Jeder Erkennungs-, Kapsulierungs-, Verarbeitungs- und Wiederherstellungsvorgang wird mit Richtlinienversion, Modell, Latenz und Ergebnis protokolliert. DSGVO (GDPR)-, HIPAA- und SOX-konform.

---

## Section 06: Execution Paths

Two execution paths
Zwei Ausführungspfade

One architecture. Two paths. Policy-driven per workflow.
Eine Architektur. Zwei Pfade. Richtliniengesteuert je Workflow.

The same LLM Capsule instance can route different workflows through different paths — under one governance framework.
Eine einzige LLM Capsule-Instanz kann verschiedene Workflows über unterschiedliche Pfade leiten — unter einem einheitlichen Governance-Rahmen.

PATH A · External
PFAD A · Extern

Approved external LLM, capsule data only
Zugelassener externer LLM — ausschließlich Kapseldaten

For workflows where the regulatory profile permits transmission of differentially-private capsules with appropriate contractual safeguards (DPA, SCCs).
Für Workflows, bei denen das regulatorische Profil die Übertragung von Differential-Privacy-Kapseln mit angemessenen vertraglichen Schutzmaßnahmen (AVV, SCCs) erlaubt.

Routes to ChatGPT, Claude, Gemini, Perplexity, or any LLM API
Weiterleitung an ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM-API

Capsule travels — original data never does
Die Kapsel wird übertragen — Rohdaten niemals

In-region endpoints supported (EU-hosted for sovereign AI)
In-Region-Endpunkte werden unterstützt (EU-gehostet für Sovereign AI)

Best for: NOC RCA, claims classification, summarization
Geeignet für: NOC-Ursachenanalyse, Schadeneinstufung, Zusammenfassung

PATH B · On-prem
PFAD B · On-Premise

On-prem local lightweight model
Lokales On-Premise-Modell

For workflows where any external endpoint is unacceptable — classified data, lawful intercept segments, OT operations, regulated mental health / pediatric data.
Für Workflows, bei denen jede externe Übertragung ausgeschlossen ist — klassifizierte Daten, Bereiche mit gesetzlicher Überwachungspflicht, OT-Betrieb, regulierte Gesundheitsdaten.

Quantized model on internal GPU (vLLM-served)
Quantisiertes Modell auf internem GPU-Server (vLLM-betrieben)

Zero external transmission — fully air-gapped option
Keine externe Übertragung — vollständig Air-Gapped-Option verfügbar

Same Capsule instance, same audit, same policy framework
Gleiche LLM Capsule-Instanz, gleicher Audit, gleicher Richtlinienrahmen

Best for: defense, classified workflows, strict sovereign AI
Geeignet für: Verteidigung, klassifizierte Workflows, strikte Sovereign-AI-Anforderungen

---

## Section 07: Integration

In-environment integration
Integration in der Unternehmensumgebung

Reads the systems you already run — without modifying them
Liest aus Ihren bestehenden Systemen — ohne diese zu verändern

LLM Capsule is not a SaaS API you call from outside. It runs inside your environment and reads from the operational systems already in place. Existing systems are not modified — a single API-call addition is what connects them to the encapsulation layer.
LLM Capsule ist keine externe SaaS-API. Die Lösung wird innerhalb Ihrer Umgebung betrieben und liest direkt aus den vorhandenen operativen Systemen. Bestehende Systeme werden nicht verändert — ein einziger zusätzlicher API-Aufruf verbindet sie mit der Kapsulierungsschicht.

ERP System
ERP-System

SAP / Oracle — REST API
SAP / Oracle — REST API

CRM
CRM

Salesforce — REST API
Salesforce — REST API

Ticketing
Ticketing

Jira / ServiceNow — REST API
Jira / ServiceNow — REST API

DMS / ECM
DMS / ECM

SharePoint — Graph API
SharePoint — Graph API

Legacy DB
Legacy-DB

Oracle / MSSQL — JDBC → API
Oracle / MSSQL — JDBC → API

RAG Pipeline
RAG-Pipeline

Vector DB — gRPC / REST
Vector DB — gRPC / REST

These six are the source-system identities mapped in the diagram_v8 reference. Existing enterprise systems are not modified — connection is a single API-call addition. Raw operational data does not leave the environment to reach Capsule; the Capsule sits next to these systems, on-prem or in your VPC.
Diese sechs Systeme entsprechen den im Architektur-Referenzdokument diagram_v8 abgebildeten Quellsystemen. Bestehende Unternehmenssysteme werden nicht verändert — die Anbindung erfolgt über einen einzigen zusätzlichen API-Aufruf. Rohe Betriebsdaten verlassen die Umgebung nicht, um LLM Capsule zu erreichen. Capsule wird direkt neben diesen Systemen betrieben — On-Premise oder in Ihrer VPC.

Integration interfaces
Integrations-Schnittstellen

How existing systems invoke Capsule from inside the environment
Wie bestehende Systeme Capsule innerhalb der Umgebung aufrufen

Once Capsule is deployed inside the environment, existing enterprise systems invoke it through whichever interface fits their stack. All interfaces stay inside the customer network — none of them route raw operational data through an external SaaS endpoint.
Nach der Bereitstellung von LLM Capsule in der Unternehmensumgebung rufen bestehende Systeme es über die jeweils passende Schnittstelle auf. Alle Schnittstellen verbleiben innerhalb des Kundennetzwerks — keine von ihnen leitet Rohdaten über einen externen SaaS-Endpunkt.

REST / gRPC
REST / gRPC

For modern operations tools, RAG pipelines, and custom orchestrators inside the environment.
Für moderne Betriebswerkzeuge, RAG-Pipelines und benutzerdefinierte Orchestratoren innerhalb der Umgebung.

JDBC / ODBC
JDBC / ODBC

For legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step.
Für Legacy-Datenbanksysteme (Oracle, MSSQL, DB2), die Capsule als Stored Procedure oder Job-Schritt einbinden müssen.

Graph API
Graph API

For DMS / ECM systems (e.g. SharePoint) where document events trigger Capsule processing.
Für DMS-/ECM-Systeme (z. B. SharePoint), bei denen Dokumentereignisse die Capsule-Verarbeitung auslösen.

On-prem API
On-Premise-API

Capsule's own on-prem callable surface. Same contract whether you're air-gapped, hybrid, or VPC.
Die eigene On-Premise-Aufrufschnittstelle von Capsule. Einheitlicher Vertrag — unabhängig davon, ob Air-Gapped, Hybrid oder VPC.

Embedded SDK
Embedded SDK

Library-level integration for ISVs and platform vendors who ship Capsule inside their own product.
Integration auf Bibliotheksebene für ISVs und Plattformanbieter, die Capsule in ihr eigenes Produkt einbetten.

Slack App
Slack App

For teams using Slack as the operations UI. The runtime still lives in the customer environment; the Slack App is the invocation surface.
Für Teams, die Slack als operative Benutzeroberfläche nutzen. Die Laufzeitumgebung verbleibt in der Unternehmensumgebung. Die Slack App ist lediglich die Aufrufoberfläche.

---

## Section 08: Deployment Modes

Deployment modes
Betriebsmodi

Six deployment modes — match your environment exactly
Sechs Betriebsmodi — passend für jede Infrastruktur

Capsule runs inside the customer environment in every mode. Path A and Path B execution choices apply across all six.
LLM Capsule wird in jedem Modus innerhalb der Kundenumgebung betrieben. Die Ausführungspfade A und B stehen in allen sechs Modi zur Verfügung.

Air-gapped on-prem
Air-Gapped On-Premise

Fully internal. No external network. Path B only. Defense, classified, OT.
Vollständig intern. Keine externe Netzwerkverbindung. Ausschließlich Pfad B. Geeignet für Verteidigung, klassifizierte Umgebungen und OT.

On-prem hybrid
On-Premise Hybrid

Internal Capsule + approved external LLM. Path A for most workflows, Path B for sensitive subset.
Internes Capsule kombiniert mit zugelassenem externem LLM. Pfad A für den Großteil der Workflows, Pfad B für besonders sensible Teilbereiche.

VPC / private cloud
VPC / Private Cloud

Customer's cloud VPC. Capsule + token vault stay in tenant; LLM call to in-region endpoint.
Kundeneigene Cloud-VPC. Capsule und Token-Tresor verbleiben im Tenant. LLM-Aufrufe erfolgen über regionale Endpunkte.

AWS Marketplace
AWS Marketplace

Listed and procurable through AWS Marketplace. VPC deployment, AWS billing integration.
Verfügbar und beziehbar über AWS Marketplace. VPC-Bereitstellung mit AWS-Abrechnungsintegration.

Embedded SDK
Embedded SDK

For ISVs and platform vendors building Capsule into their own product. Library-level integration that ships inside the host application.
Für ISVs und Plattformanbieter, die Capsule in ihr eigenes Produkt integrieren. Integration auf Bibliotheksebene, die innerhalb der Hostanwendung ausgeliefert wird.

Slack App
Slack App

For teams using Slack as the operations UI. Capsule runtime stays in the customer environment; the Slack App is the surface that invokes it.
Für Teams, die Slack als operative Benutzeroberfläche nutzen. Die Capsule-Laufzeitumgebung verbleibt in der Kundenumgebung. Die Slack App dient als Aufrufoberfläche.

Note: a separate "Telecom-grade" topology (NFV / container / multi-region) is offered as a deployment variant for operator infrastructure — validated at SK Telecom, recognized at Deutsche Telekom T Challenge 2026. It composes with the modes above rather than replacing them.
Hinweis: Eine gesonderte Topologie auf Telekommunikationsniveau (NFV / Container / Multi-Region) wird als Deployment-Variante für Betreiber-Infrastrukturen angeboten — validiert bei SK Telecom, ausgezeichnet beim Deutsche Telekom T Challenge 2026. Sie ergänzt die oben genannten Modi, ohne sie zu ersetzen.

---

## Section 09: CTA Strip

See the architecture run on your environment.
Die Architektur in Ihrer Umgebung — live demonstriert.

Bring your deployment constraints, regulatory profile, and one real workflow. We demonstrate the data layer in your environment within 30 minutes.
Wir analysieren Ihre Anforderungen und demonstrieren LLM Capsule anhand eines realen Workflows aus Ihrer Umgebung — in 30 Minuten.

Request a Live Demo
Demo anfordern

View Product
Produkt ansehen

View Trust & Compliance
Vertrauen & Compliance ansehen
