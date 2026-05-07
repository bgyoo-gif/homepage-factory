# GlossaryPage_ConnectorLane — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

Connector Lane
Connector Lane

How LLM Capsule reads the document, ticket, and operational sources that already live inside the customer environment — without moving raw data outside that environment.
LLM Capsule liest Dokumente, Tickets und operative Datenquellen direkt in der Kundenumgebung — On-Premise, Air-Gapped oder in der VPC. Rohdaten verlassen die Umgebung zu keinem Zeitpunkt.

GLOSSARY
GLOSSAR

---

## Section 02: Definition

Definition
Definition

The connector lane describes how LLM Capsule, running inside the customer's environment (on-prem, air-gapped, or VPC), reads from the document, ticket, and operational systems that already live in that environment. It is not a SaaS integration platform that calls into customer systems from the outside, and it is not an API marketplace.
Der Connector Lane beschreibt, wie LLM Capsule — betrieben innerhalb der Kundenumgebung (On-Premise, Air-Gapped oder VPC) — auf die dort bereits vorhandenen Dokument-, Ticket- und operativen Systeme zugreift. LLM Capsule ist keine externe SaaS-Integrationsplattform und kein API-Marktplatz, der von außen auf Kundensysteme zugreift.

---

## Section 03: Body HTML

### h2: What it is — and what it isn't
### h2: Was der Connector Lane ist — und was er nicht ist

The connector lane is the in-environment reading surface. Capsule sits next to existing systems on the customer's network, reads the document or record where it already is, encapsulates it locally, and returns the restored output to the originating workflow. Raw operational data does not traverse a public network or an external SaaS endpoint to reach Capsule.
Der Connector Lane ist die lesende Schicht innerhalb der Kundenumgebung. LLM Capsule wird neben den bestehenden Systemen im Kundennetzwerk betrieben, liest Dokumente und Datensätze an ihrem vorhandenen Speicherort, kapsuliert sie lokal und gibt die wiederhergestellte Ausgabe an den ursprünglichen Workflow zurück. Operative Rohdaten durchqueren zu keinem Zeitpunkt ein öffentliches Netzwerk oder einen externen SaaS-Endpunkt.

This is the opposite of how a typical "integration platform" works. Capsule is not an external service that pulls data out of customer systems — it is a layer running inside the environment those systems already trust.
Das ist das Gegenteil einer typischen Integrationsplattform. LLM Capsule ist kein externer Dienst, der Daten aus Kundensystemen herauszieht — sondern eine Schicht, die innerhalb der Umgebung läuft, der diese Systeme bereits vertrauen.

---

### h2: What it reads
### h2: Welche Systeme der Connector Lane liest

Document and record systems — SharePoint, internal DMS, S3 / blob storage in the customer's VPC, file repositories
Dokument- und Datensatzsysteme — SharePoint, internes DMS, S3 / Blob-Speicher in der VPC des Kunden, Dateiablagen

Ticket and ITSM systems — ServiceNow, Jira, Remedy, in-house ticketing
Ticket- und ITSM-Systeme — ServiceNow, Jira, Remedy, interne Ticketlösungen

CRM / ERP — Salesforce, Dynamics, Oracle, SAP, in-house systems
CRM / ERP — Salesforce, Dynamics, Oracle, SAP, interne Systeme

Healthcare records — hospital information systems, clinical record stores, imaging metadata, all read inside the hospital network
Patientendaten im Gesundheitswesen — Krankenhausinformationssysteme, klinische Datenspeicher, Bildgebungsmetadaten — alles innerhalb des Krankenhausnetzwerks verarbeitet

Operational systems — NOC consoles, OSS / BSS, OT historians, log platforms read in DMZ and processed in environment
Operative Systeme — NOC-Konsolen, OSS / BSS, OT-Prozessdatenarchive, Protokollplattformen in der DMZ, Verarbeitung in der Umgebung

Custom and legacy systems — internal databases, file drops, queues, in-house tooling — Capsule adapts to what the customer already runs
Individual- und Altsysteme — interne Datenbanken, Dateiablagen, Warteschlangen, eigenentwickelte Werkzeuge — LLM Capsule passt sich der bestehenden Systemlandschaft des Kunden an

---

### h2: Why this distinction matters
### h2: Warum diese Unterscheidung entscheidend ist

For regulated buyers — defense, healthcare, finance, telecom — "integration" usually means "data leaves my environment to reach a vendor." That is exactly the failure mode that blocks AI adoption on operational data. The connector lane is the opposite contract: Capsule comes to the data, the data does not go to Capsule.
Für regulierte Abnehmer — Verteidigung, Gesundheitswesen, Finanzwesen, Telekommunikation — bedeutet „Integration" häufig: Daten verlassen die eigene Umgebung, um einen Anbieter zu erreichen. Genau das blockiert den KI-Einsatz auf operativen Daten. Der Connector Lane kehrt dieses Verhältnis um: LLM Capsule kommt zu den Daten — die Daten gehen nicht zu LLM Capsule.

---

### h2: Integration interfaces — how existing systems invoke Capsule
### h2: Integrationsschnittstellen — wie bestehende Systeme LLM Capsule aufrufen

Once Capsule is deployed inside the environment, existing systems invoke it through whichever interface fits their stack:
Nach der Bereitstellung in der Umgebung rufen bestehende Systeme LLM Capsule über die jeweils passende Schnittstelle auf:

REST / gRPC — for modern operations tools, RAG pipelines, and custom orchestrators inside the environment
REST / gRPC — für moderne Betriebswerkzeuge, RAG-Pipelines und individuelle Orchestratoren innerhalb der Umgebung

JDBC / ODBC — for legacy database systems (Oracle, MSSQL, DB2) that need Capsule invocation as a stored procedure or job step
JDBC / ODBC — für Legacy-Datenbanksysteme (Oracle, MSSQL, DB2), die LLM Capsule als Stored Procedure oder Job-Schritt einbinden

Graph API — for DMS / ECM systems (SharePoint, etc.) where document events trigger Capsule processing
Graph API — für DMS- / ECM-Systeme (SharePoint u. a.), bei denen Dokumentereignisse die Verarbeitung durch LLM Capsule auslösen

Webhook / log tap — for incident- and event-driven workflows from NOC, ticket, OT, and SIEM-adjacent systems
Webhook / Log Tap — für ereignisgesteuerte Workflows aus NOC-, Ticket-, OT- und SIEM-nahen Systemen

On-prem API — Capsule's own on-prem callable surface; same contract whether you're air-gapped, hybrid, or VPC
On-Prem API — die eigene aufrufbare Oberfläche von LLM Capsule; einheitliches Vertragsmodell für Air-Gapped-, Hybrid- und VPC-Umgebungen

Embedded SDK — library-level integration for ISVs and platform vendors who ship Capsule inside their own product
Embedded SDK — Bibliotheksintegration für ISVs und Plattformanbieter, die LLM Capsule in ihr eigenes Produkt einbetten

Slack App — for teams using Slack as the operations UI; the runtime stays in the customer environment, the Slack App is the invocation surface
Slack App — für Teams, die Slack als Betriebsoberfläche nutzen; die Laufzeit verbleibt in der Kundenumgebung, die Slack App dient als Aufrufoberfläche

All of these interfaces stay inside the customer network. None of them route raw operational data through an external SaaS endpoint to reach Capsule.
Alle diese Schnittstellen verbleiben im Kundennetzwerk. Keine von ihnen leitet operative Rohdaten über einen externen SaaS-Endpunkt weiter.

---

### h2: Reference statement
### h2: Kernaussage

The connector lane is what makes regulated AI deployment an integration instead of a data egress decision. Capsule reads existing systems where they already are. Raw operational data does not leave the environment.
Der Connector Lane macht den regulierten KI-Einsatz zu einer Integrationsentscheidung — nicht zu einer Frage des Datenabflusses. LLM Capsule liest bestehende Systeme dort, wo sie sich befinden. Operative Rohdaten verlassen die Umgebung nicht.

---

## Section 04: Related Terms

Related terms
Verwandte Begriffe

AI enablement data layer
AI enablement data layer

/glossary/ai-enablement-data-layer
/glossary/ai-enablement-data-layer

Structure-preserving encapsulation
Strukturerhaltende Kapsulierung

/glossary/structure-preserving-encapsulation
/glossary/structure-preserving-encapsulation

Two execution paths
Zwei Ausführungspfade

/glossary/two-execution-paths
/glossary/two-execution-paths

Operational data
Operative Daten

/glossary/operational-data
/glossary/operational-data

In-environment deployment
Bereitstellung in der Umgebung

/glossary/in-environment-deployment
/glossary/in-environment-deployment
