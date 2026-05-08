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

### h2: Was der Connector Lane ist — und was er nicht ist

Der Connector Lane ist die lesende Schicht innerhalb der Kundenumgebung. LLM Capsule wird neben den bestehenden Systemen im Kundennetzwerk betrieben, liest Dokumente und Datensätze an ihrem vorhandenen Speicherort, kapsuliert sie lokal und gibt die wiederhergestellte Ausgabe an den ursprünglichen Workflow zurück. Operative Rohdaten durchqueren zu keinem Zeitpunkt ein öffentliches Netzwerk oder einen externen SaaS-Endpunkt.

Das ist das Gegenteil einer typischen Integrationsplattform. LLM Capsule ist kein externer Dienst, der Daten aus Kundensystemen herauszieht — sondern eine Schicht, die innerhalb der Umgebung läuft, der diese Systeme bereits vertrauen.

---

### h2: Welche Systeme der Connector Lane liest

Dokument- und Datensatzsysteme — SharePoint, internes DMS, S3 / Blob-Speicher in der VPC des Kunden, Dateiablagen

Ticket- und ITSM-Systeme — ServiceNow, Jira, Remedy, interne Ticketlösungen

CRM / ERP — Salesforce, Dynamics, Oracle, SAP, interne Systeme

Patientendaten im Gesundheitswesen — Krankenhausinformationssysteme, klinische Datenspeicher, Bildgebungsmetadaten — alles innerhalb des Krankenhausnetzwerks verarbeitet

Operative Systeme — NOC-Konsolen, OSS / BSS, OT-Prozessdatenarchive, Protokollplattformen in der DMZ, Verarbeitung in der Umgebung

Individual- und Altsysteme — interne Datenbanken, Dateiablagen, Warteschlangen, eigenentwickelte Werkzeuge — LLM Capsule passt sich der bestehenden Systemlandschaft des Kunden an

---

### h2: Warum diese Unterscheidung entscheidend ist

Für regulierte Abnehmer — Verteidigung, Gesundheitswesen, Finanzwesen, Telekommunikation — bedeutet „Integration" häufig: Daten verlassen die eigene Umgebung, um einen Anbieter zu erreichen. Genau das blockiert den KI-Einsatz auf operativen Daten. Der Connector Lane kehrt dieses Verhältnis um: LLM Capsule kommt zu den Daten — die Daten gehen nicht zu LLM Capsule.

---

### h2: Integrationsschnittstellen — wie bestehende Systeme LLM Capsule aufrufen

Nach der Bereitstellung in der Umgebung rufen bestehende Systeme LLM Capsule über die jeweils passende Schnittstelle auf:

REST / gRPC — für moderne Betriebswerkzeuge, RAG-Pipelines und individuelle Orchestratoren innerhalb der Umgebung

JDBC / ODBC — für Legacy-Datenbanksysteme (Oracle, MSSQL, DB2), die LLM Capsule als Stored Procedure oder Job-Schritt einbinden

Graph API — für DMS- / ECM-Systeme (SharePoint u. a.), bei denen Dokumentereignisse die Verarbeitung durch LLM Capsule auslösen

Webhook / Log Tap — für ereignisgesteuerte Workflows aus NOC-, Ticket-, OT- und SIEM-nahen Systemen

On-Prem API — die eigene aufrufbare Oberfläche von LLM Capsule; einheitliches Vertragsmodell für Air-Gapped-, Hybrid- und VPC-Umgebungen

Embedded SDK — Bibliotheksintegration für ISVs und Plattformanbieter, die LLM Capsule in ihr eigenes Produkt einbetten

Slack App — für Teams, die Slack als Betriebsoberfläche nutzen; die Laufzeit verbleibt in der Kundenumgebung, die Slack App dient als Aufrufoberfläche

Alle diese Schnittstellen verbleiben im Kundennetzwerk. Keine von ihnen leitet operative Rohdaten über einen externen SaaS-Endpunkt weiter.

---

### h2: Kernaussage

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
