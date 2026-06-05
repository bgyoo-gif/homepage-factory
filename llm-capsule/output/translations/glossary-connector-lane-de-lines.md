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


<h2>Was der Connector Lane ist — und was er nicht ist</h2>

<p>Der Connector Lane ist die lesende Schicht innerhalb der Kundenumgebung. LLM Capsule wird neben den bestehenden Systemen im Kundennetzwerk betrieben, liest Dokumente und Datensätze an ihrem vorhandenen Speicherort, kapsuliert sie lokal und gibt die wiederhergestellte Ausgabe an den ursprünglichen Workflow zurück. Operative Rohdaten durchqueren zu keinem Zeitpunkt ein öffentliches Netzwerk oder einen externen SaaS-Endpunkt.</p>

<p>Das ist das Gegenteil einer typischen Integrationsplattform. LLM Capsule ist kein externer Dienst, der Daten aus Kundensystemen herauszieht — sondern eine Schicht, die innerhalb der Umgebung läuft, der diese Systeme bereits vertrauen.</p>

<h2>Welche Systeme der Connector Lane liest</h2>

<ul>
<li><strong>Dokument- und Datensatzsysteme</strong> — SharePoint, internes DMS, S3 / Blob-Speicher in der VPC des Kunden, Dateiablagen</li>
<li><strong>Ticket- und ITSM-Systeme</strong> — ServiceNow, Jira, Remedy, interne Ticketlösungen</li>
<li><strong>CRM / ERP</strong> — Salesforce, Dynamics, Oracle, SAP, interne Systeme</li>
<li><strong>Patientendaten im Gesundheitswesen</strong> — Krankenhausinformationssysteme, klinische Datenspeicher, Bildgebungsmetadaten — alles innerhalb des Krankenhausnetzwerks verarbeitet</li>
<li><strong>Operative Systeme</strong> — NOC-Konsolen, OSS / BSS, OT-Prozessdatenarchive, Protokollplattformen in der DMZ, Verarbeitung in der Umgebung</li>
<li><strong>Individual- und Altsysteme</strong> — interne Datenbanken, Dateiablagen, Warteschlangen, eigenentwickelte Werkzeuge — LLM Capsule passt sich der bestehenden Systemlandschaft des Kunden an</li>
</ul>

<h2>Warum diese Unterscheidung entscheidend ist</h2>

<p>Für regulierte Abnehmer — Verteidigung, Gesundheitswesen, Finanzwesen, Telekommunikation — bedeutet „Integration" häufig: Daten verlassen die eigene Umgebung, um einen Anbieter zu erreichen. Genau das blockiert den KI-Einsatz auf operativen Daten. Der Connector Lane kehrt dieses Verhältnis um: LLM Capsule kommt zu den Daten — die Daten gehen nicht zu LLM Capsule.</p>

<h2>Integrationsschnittstellen — wie bestehende Systeme LLM Capsule aufrufen</h2>

<p>Nach der Bereitstellung in der Umgebung rufen bestehende Systeme LLM Capsule über die jeweils passende Schnittstelle auf:</p>

<ul>
<li><strong>REST / gRPC</strong> — für moderne Betriebswerkzeuge, RAG-Pipelines und individuelle Orchestratoren innerhalb der Umgebung</li>
<li><strong>JDBC / ODBC</strong> — für Legacy-Datenbanksysteme (Oracle, MSSQL, DB2), die LLM Capsule als Stored Procedure oder Job-Schritt einbinden</li>
<li><strong>Graph API</strong> — für DMS- / ECM-Systeme (SharePoint u. a.), bei denen Dokumentereignisse die Verarbeitung durch LLM Capsule auslösen</li>
<li><strong>Webhook / Log Tap</strong> — für ereignisgesteuerte Workflows aus NOC-, Ticket-, OT- und SIEM-nahen Systemen</li>
<li><strong>On-Prem API</strong> — die eigene aufrufbare Oberfläche von LLM Capsule; einheitliches Vertragsmodell für Air-Gapped-, Hybrid- und VPC-Umgebungen</li>
<li><strong>Embedded SDK</strong> — Bibliotheksintegration für ISVs und Plattformanbieter, die LLM Capsule in ihr eigenes Produkt einbetten</li>
<li><strong>Slack App</strong> — für Teams, die Slack als Betriebsoberfläche nutzen; die Laufzeit verbleibt in der Kundenumgebung, die Slack App dient als Aufrufoberfläche</li>
</ul>

<p>Alle diese Schnittstellen verbleiben im Kundennetzwerk. Keine von ihnen leitet operative Rohdaten über einen externen SaaS-Endpunkt weiter.</p>

<h2>Kernaussage</h2>

<p>Der Connector Lane macht den regulierten KI-Einsatz zu einer Integrationsentscheidung — nicht zu einer Frage des Datenabflusses. LLM Capsule liest bestehende Systeme dort, wo sie sich befinden. Operative Rohdaten verlassen die Umgebung nicht.</p>

## Section 04: Related Terms

Related terms
Verwandte Begriffe

context-preserving data layer for AI
context-preserving data layer for AI

/glossary/context-preserving-data-layer
/glossary/context-preserving-data-layer

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
