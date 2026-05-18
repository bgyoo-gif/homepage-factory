# architecture_4zone_technical-develop — Deutsch translation (literal)

Each entry = one Prop in the Framer Properties panel.
Apply in order; values map 1:1 to Props.

---

## Section

### Section · Eyebrow
eyebrow
Technical view · zone-based architecture
Technische Ansicht · Zonenbasierte Architektur

### Section · Title
sectionTitle
The same architecture, in technical view
Dieselbe Architektur — aus technischer Sicht

### Section · Description
sectionDescription
For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.
Für Architekten und Sicherheitsprüfer: die vollständige zonenbasierte Sicht auf operative Daten, Kapselung und LLM-Integration.

---

## Card 1

### Card 1 · Num
card1Num
Zone 1 · Corporate Internal Network
Zone 1 · Unternehmensinternes Netzwerk

### Card 1 · Title
card1Title
Where the operational systems already live
Wo die operativen Systeme bereits laufen

### Card 1 · Description
card1Description
Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
Bestehende Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — bleiben unverändert. Keine Migration. Capsule liest sie je nach Quelle über REST, gRPC, JDBC oder Graph API aus.

---

## Card 2

### Card 2 · Num
card2Num
Zone 2 · DMZ — Demilitarized Zone
Zone 2 · DMZ — Demilitarisierte Zone

### Card 2 · Title
card2Title
Where encapsulation happens
Wo die Kapselung stattfindet

### Card 2 · Description
card2Description
The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
Die Enhanced Encapsulation Layer erkennt sensible Elemente, ersetzt sie durch sichere Token mittels strukturerhaltender, Differential-Privacy-basierter Schutzverfahren und übergibt die Kapsel an die Routing-Entscheidung. Originalwerte verbleiben lokal im Token-Map.

---

## Card 3

### Card 3 · Num
card3Num
Zone 3 · In-House Team
Zone 3 · Internes Team

### Card 3 · Title
card3Title
Where governance and routing happen
Wo Governance und Routing stattfinden

### Card 3 · Description
card3Description
Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
Organisationsrichtlinien, Berechtigungen und Domänenkontext entscheiden, wo die Kapsel verarbeitet wird — ein zugelassener externer LLM (Path A) oder ein lokales On-Prem-Modell (Path B). Die Entscheidung erfolgt richtlinienbasiert pro Workflow, mit vollständigem Audit-Trail innerhalb der Organisation.

---

## Card 4

### Card 4 · Num
card4Num
Zone 4 · Local — Auto Reconstruction
Zone 4 · Lokal — Automatische Rekonstruktion

### Card 4 · Title
card4Title
Where the AI response becomes Business-Ready output
Wo die KI-Antwort zu geschäftsfertiger Ausgabe wird

### Card 4 · Description
card4Description
The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch vom Token in den Originalwert rückgeführt. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden. Die wiederhergestellte Ausgabe wird in den ursprünglichen Workflow zurückgespielt.

---

## Connector

### Connector · 1→2 Label
conn1Label
Unstructured Data In
Unstrukturierte Daten — Eingang

### Connector · 2→3 Label
conn2Label
Protected Data Out
Geschützte Daten — Ausgang

### Connector · 3→4 Label
conn3Label
AI Response (tokenized)
KI-Antwort (tokenisiert)

---

## Z1

### Z1 · Step Title
step1Title
Source Data
Quelldaten

### Z1 · Zone Label
z1Label
Corporate Internal Network
Unternehmensinternes Netzwerk

### Z1 · Zone Sub
z1Sub
On-prem DB · Enterprise Systems
On-Premise-DB · Unternehmenssysteme

### Z1 · DB Group Tag
z1GroupTag
Unstructured
Unstrukturiert

### Z1 · DB1 Sub (use <br/>)
z1Db1Sub
Customer Data<br/>Personally Identifiable Info
Kundendaten<br/>Personenbezogene Informationen

### Z1 · DB2 Sub (use <br/>)
z1Db2Sub
Ticket Data<br/>CS Tickets / Status
Ticketdaten<br/>Support-Tickets / Status

### Z1 · DB3 Sub (use <br/>)
z1Db3Sub
Detail Data<br/>Unstructured Claims
Detaildaten<br/>Unstrukturierte Schadenmeldungen

### Z1 · Raw Input Block Label
z1FieldsLabel
Raw Input Fields
Rohdatenfelder

### Z1 · Field 1 Name
z1F1Name
Customer
Kunde

### Z1 · Field 3 Name
z1F2Name
Free Text
Freitext

### Z1 · Field 2 Name
z1F2NameMid
Ticket
Ticket

### Z1 · Guardrail Title
z1GuardStrong
PII guardrails protect fields. Enterprises run on structures.
PII-Filter schützen einzelne Felder. Unternehmen arbeiten auf Basis von Strukturen.

### Z1 · Guardrail Body (HTML)
z1GuardBody
We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.
PII-Filter sind nicht das Problem. LLM Capsule adressiert eine <b>andere Datenkategorie</b> — Tabellenschemata, Querverweise, Alarmsequenzen und Ticket-Threads, die einfaches Feldmaskieren nicht erhalten kann.

### Z1 · Plug-in Tag
z1PluginTag
Plug-in for AI Teams
Plug-in für KI-Teams

### Z1 · Sys 1 Sub
z1Sys1Sub
SAP·Oracle
SAP·Oracle

### Z1 · Sys 2 Sub
z1Sys2Sub
Salesforce
Salesforce

### Z1 · Sys 3 Sub
z1Sys3Sub
Vector DB
Vector DB

### Z1 · Sys 4 Sub
z1Sys4Sub
Oracle
Oracle

### Z1 · Sys 5 Sub
z1Sys5Sub
Jira·SN
Jira·SN

### Z1 · Sys 6 Sub
z1Sys6Sub
SharePoint
SharePoint

### Z1 · Sys 1 Name (ERP)
z1Sys1Name
ERP
ERP

### Z1 · Sys 2 Name (CRM)
z1Sys2Name
CRM
CRM

### Z1 · Sys 3 Name (RAG)
z1Sys3Name
RAG
RAG

### Z1 · Sys 4 Name (Legacy)
z1Sys4Name
Legacy
Legacy

### Z1 · Sys 5 Name (Ticket)
z1Sys5Name
Ticket
Ticket

### Z1 · Sys 6 Name (DMS)
z1Sys6Name
DMS
DMS

### Z1 · API List
z1SysApi
REST · gRPC · JDBC · Graph API
REST · gRPC · JDBC · Graph API

### Z1 · Zero-Mod Title
z1ZeroModStrong
Zero System Modification
Keine Systemänderungen erforderlich

### Z1 · Zero-Mod Body
z1ZeroModBody
Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems
Die Integration erfolgt über einen einzelnen API-Aufruf — ohne Änderungen an bestehenden ERP-, CRM- oder Legacy-Systemen.

---

## Z2

### Z2 · Step Title
step2Title
DP Encapsulation
DP-Kapselung

### Z2 · Zone Label
z2Label
DMZ — Differential Privacy
DMZ — Differential Privacy

### Z2 · Zone Sub
z2Sub
Same Org · EU Region · GDPR Ready
Gleiche Organisation · EU-Region · DSGVO-konform

### Z2 · DB Group Tag
z2GroupTag
Encapsulation Flow
Kapselungsfluss

### Z2 · IN Sub
z2InSub
Raw Input<br/>Unstructured Data
Roheingabe<br/>Unstrukturierte Daten

### Z2 · PROCESS Sub
z2ProcessSub
DP Engine<br/>Differential Privacy
DP Engine<br/>Differential Privacy

### Z2 · OUT Sub
z2OutSub
Encapsulated<br/>Token Capsule
Gekapselt<br/>Token-Kapsel

### Z2 · Block Label
z2BlockLabel
Encapsulation
Kapselung

### Z2 · Protected Badge
z2ProtectedBadge
✓ Protected
✓ Geschützt

### Z2 · Field 1 Name
z2F1Name
Name
Name

### Z2 · Field 2 Name
z2F2Name
Champ Id
Champ Id

### Z2 · Field 3 Name
z2F3Name
Free Text
Freitext

### Z2 · DP Engine Name
z2DpEngineName
DP Engine
DP Engine

### Z2 · DP Engine Badge
z2DpEngineBadge
epsilon-DP Active
epsilon-DP aktiv

### Z2 · DP Tech 1
z2DpTech1
Noise Injection (Laplace)
Rausch-Injektion (Laplace)

### Z2 · DP Tech 2
z2DpTech2
k-Anonymity Enforcement
k-Anonymität-Durchsetzung

### Z2 · DP Tech 3
z2DpTech3
Semantic Tokenization
Semantische Tokenisierung

### Z2 · DP Tech 4
z2DpTech4
Free-Text NER Masking
Freitext-NER-Maskierung

### Z2 · DMZ Title
z2DmzStrong
DMZ Guarantee
DMZ-Garantie

### Z2 · DMZ Body
z2DmzBody
Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>
Über einfache Kapselung hinaus: Differential-Privacy-Verfahren machen ursprüngliche sensible Daten <b>mathematisch irreversibel</b>.

---

## Z3

### Z3 · Step Title
step3Title
AI Processing
KI-Verarbeitung

### Z3 · Zone Label
z3Label
In-House Team
Internes Team

### Z3 · Zone Sub
z3Sub
Same Org · Anonymized LLM Proxy
Gleiche Organisation · Anonymisierter LLM-Proxy

### Z3 · Pipeline Block Label
z3PipelineLabel
LLM Pipeline
LLM-Pipeline

### Z3 · Proxy Badge
z3ProxyBadge
LLM-a-Proxy
LLM-a-Proxy

### Z3 · Proxy Sub
z3ProxySub
Anonymized Routing
Anonymisiertes Routing

### Z3 · Path A Label
z3PathA
Path A · External
Path A · Extern

### Z3 · Path B Label
z3PathB
Path B · On-prem
Path B · On-Premise

### Z3 · Deploy A1 (External 1)
z3DeployA1
Public cloud
Public Cloud

### Z3 · Deploy A2 (External 2)
z3DeployA2
Region-hosted
Region-gehostet

### Z3 · Deploy B1 (On-prem 1)
z3DeployB1
Private
Privat

### Z3 · Deploy B2 (On-prem 2)
z3DeployB2
On-prem
On-Premise

### Z3 · Swap Note
z3SwapNote
swap any model — capsule contract stays the same
Modell austauschbar — der Capsule-Vertrag bleibt unverändert.

### Z3 · Guardrail Title
z3GuardStrong
No Direct Access to Source DB
Kein direkter Zugriff auf die Quelldatenbank

### Z3 · Guardrail Body
z3GuardBody
AI teams never touch the source database. They only receive structure-preserved, differentially-private data
KI-Teams erhalten keinen Zugriff auf die Quelldatenbank. Sie empfangen ausschließlich Differential-Privacy-geschützte Daten mit erhaltener Datenstruktur.

### Z3 · Isolation Block Label
z3IsoLabel
Privacy Isolation Module
Datenschutz-Isolationsmodul

### Z3 · PDESC Head
z3PdescHead
PDESC / ISOLA
PDESC / ISOLA

### Z3 · PDESC Item 1
z3PdescItem1
Privacy Descriptor
Datenschutz-Deskriptor

### Z3 · PDESC Item 2
z3PdescItem2
Isolated Computation Zone
Isolierte Rechenzone

### Z3 · PDESC Item 3
z3PdescItem3
Output De-identification
Ausgabe-Anonymisierung

### Z3 · PDESC Foot
z3PdescFoot
Re-identification attempts contained · Output validated
Re-Identifizierungsversuche abgewehrt · Ausgabe validiert

### Z3 · Compliance Label
z3ComplianceLabel
Compliance
Compliance

### Z3 · Compliance Badge 1
z3Compliance1
EU GDPR
DSGVO (GDPR)

### Z3 · Compliance Badge 2
z3Compliance2
EU Region
EU-Region

---

## Z4

### Z4 · Step Title
step4Title
Local Auto Reconstruction
Lokale automatische Rekonstruktion

### Z4 · Zone Label
z4Label
Local — Auto Reconstruction
Lokal — Automatische Rekonstruktion

### Z4 · Zone Sub
z4Sub
Internal Only · No External Egress
Nur intern · Kein externer Datenabfluss

### Z4 · DB Group Tag
z4GroupTag
Reconstruction Flow
Rekonstruktionsfluss

### Z4 · IN Sub
z4InSub
AI Token<br/>Tokenized Response
KI-Token<br/>Tokenisierte Antwort

### Z4 · PROCESS Sub
z4ProcessSub
Reconstruction<br/>Local Restoration
Rekonstruktion<br/>Lokale Wiederherstellung

### Z4 · OUT Sub
z4OutSub
Original Value<br/>Business-Ready
Originalwert<br/>Direkt einsatzbereit

### Z4 · Token Block Label
z4BlockLabel
Token → Original
Token → Original

### Z4 · Field 1 Name
z4F1Name
Customer
Kunde

### Z4 · Field 2 Name
z4F2Name
Ticket
Ticket

### Z4 · Field 3 Name
z4F3Name
Details
Details

### Z4 · Recon Engine Name
z4ReconName
Reconstruction
Rekonstruktion

### Z4 · Recon Engine Badge
z4ReconBadge
Local Only
Nur lokal

### Z4 · Recon Tech 1
z4ReconTech1
Token Map Lookup
Token-Map-Abfrage

### Z4 · Recon Tech 2
z4ReconTech2
Original Value Restore
Originalwert-Wiederherstellung

### Z4 · Recon Tech 3
z4ReconTech3
Context Re-binding
Kontext-Neuzuordnung

### Z4 · Recon Tech 4
z4ReconTech4
Output Validation
Ausgabevalidierung

### Z4 · Local Guarantee Title
z4LocalStrong
Local Reconstruction Guarantee
Lokale Rekonstruktionsgarantie

### Z4 · Local Guarantee Body
z4LocalBody
Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>
Die Token-Map verbleibt ausschließlich im lokalen Speicher · <b>Die Ausgabe ist sofort geschäftlich einsetzbar</b>

### Z4 · Output Properties Label
z4OutputLabel
Output Properties
Ausgabeeigenschaften

### Z4 · Output Check 1
z4OutCheck1
Original Values Restored
Originalwerte wiederhergestellt

### Z4 · Output Check 2
z4OutCheck2
Zero External Exposure
Kein externer Datenaustritt

### Z4 · Output Check 3
z4OutCheck3
Context Fully Preserved
Kontext vollständig erhalten

### Z4 · Output Check 4
z4OutCheck4
Business-Ready Output
Direkt einsetzbare Ausgabe

### Z4 · Chip 1
z4Chip1
Auto Restore
Automatische Wiederherstellung

### Z4 · Chip 2
z4Chip2
Local Only
Nur lokal

### Z4 · Chip 3
z4Chip3
Data Residency
Datenspeicherort (Data Residency)

---

## Core

### Core · Section Title
coreTitle
6 Core Capabilities
6 Kernfunktionen

### Core · Workflow Group Label
coreWorkflowGroup
What Makes The Workflow Run
Was den Workflow antreibt

### Core · Approval Group Label
coreApprovalGroup
What Gets The Approval
Was die Freigabe sichert

### Core · Bottom Strip
coreStrip
01 and 02 lead the conversation. 05 and 06 anchor the approval.
01 und 02 sind Grundlage des fachlichen Austauschs. 05 und 06 sichern die regulatorische Freigabe.

---

## Core 01

### Core 01 · Name
core1Name
Structure-Preserving
Strukturerhaltend

### Core 01 · Description
core1Desc
Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.
Tabellen, Protokolle, Querverweise und Alarmsequenzen bleiben unverändert. Die KI verarbeitet die vollständige Datenstruktur — nicht nur Text.

---

## Core 02

### Core 02 · Name
core2Name
Enterprise Environment Execution
Ausführung in der Unternehmensumgebung

### Core 02 · Description
core2Desc
Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.
LLM Capsule wird innerhalb Ihrer bestehenden Infrastruktur betrieben. Die Anbindung erfolgt über API, SDK, Konnektoren oder Reverse Proxy — ohne Datenverkehrs-Umleitung.

---

## Core 03

### Core 03 · Name
core3Name
Business-Ready Reconstruction
Geschäftsfertige Rekonstruktion

### Core 03 · Description
core3Desc
AI output is restored with real values. The result goes straight back to the originating ticket or workflow.
Die KI-Ausgabe wird mit den Originalwerten wiederhergestellt. Das Ergebnis fließt direkt in das auslösende Ticket oder den Workflow zurück.

---

## Core 04

### Core 04 · Name
core4Name
Enterprise Context Control
Unternehmenseigene Sensitivitätsdefinition

### Core 04 · Description
core4Desc
Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.
Ihr IT-Administrator legt fest, welche Daten als sensibel gelten. Benutzerdefinierte Marker, Regex-Regeln und Stufenrichtlinien — konfigurierbar in unter 5 Minuten.

---

## Core 05

### Core 05 · Name
core5Name
Zero Exposure &amp; Audit
Zero Exposure &amp; Audit-Trail

### Core 05 · Description
core5Desc
Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.
Operative Rohdaten verbleiben innerhalb der Organisation. Jede Aktion wird protokolliert, mit Zeitstempel versehen und ist SIEM-exportierbar.

---

## Core 06

### Core 06 · Name
core6Name
Time-Shifting Policy
Zeitabhängige Richtlinien

### Core 06 · Description
core6Desc
Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.
Sensitivitätskriterien ändern sich im Zeitverlauf. Capsule versioniert jeden Marker und jede Richtlinie für eine kontinuierliche DSGVO- und regulatorische Konformität.
