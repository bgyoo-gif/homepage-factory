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
[TODO:DE]

### Connector · 2→3 Label
conn2Label
Protected Data Out
[TODO:DE]

### Connector · 3→4 Label
conn3Label
AI Response (tokenized)
[TODO:DE]

---

## Z1

### Z1 · Step Title
step1Title
Source Data
[TODO:DE]

### Z1 · Zone Label
z1Label
Corporate Internal Network
[TODO:DE]

### Z1 · Zone Sub
z1Sub
On-prem DB · Enterprise Systems
[TODO:DE]

### Z1 · DB Group Tag
z1GroupTag
Unstructured
[TODO:DE]

### Z1 · DB1 Sub (use <br/>)
z1Db1Sub
Customer Data<br/>Personally Identifiable Info
[TODO:DE]

### Z1 · DB2 Sub (use <br/>)
z1Db2Sub
Ticket Data<br/>CS Tickets / Status
[TODO:DE]

### Z1 · DB3 Sub (use <br/>)
z1Db3Sub
Detail Data<br/>Unstructured Claims
[TODO:DE]

### Z1 · Raw Input Block Label
z1FieldsLabel
Raw Input Fields
[TODO:DE]

### Z1 · Field 1 Name
z1F1Name
Customer
[TODO:DE]

### Z1 · Field 3 Name
z1F2Name
Free Text
[TODO:DE]

### Z1 · Field 2 Name
z1F2NameMid
Ticket
[TODO:DE]

### Z1 · Guardrail Title
z1GuardStrong
PII guardrails protect fields. Enterprises run on structures.
[TODO:DE]

### Z1 · Guardrail Body (HTML)
z1GuardBody
We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.
[TODO:DE]

### Z1 · Plug-in Tag
z1PluginTag
Plug-in for AI Teams
[TODO:DE]

### Z1 · Sys 1 Sub
z1Sys1Sub
SAP·Oracle
[TODO:DE]

### Z1 · Sys 2 Sub
z1Sys2Sub
Salesforce
[TODO:DE]

### Z1 · Sys 3 Sub
z1Sys3Sub
Vector DB
[TODO:DE]

### Z1 · Sys 4 Sub
z1Sys4Sub
Oracle
[TODO:DE]

### Z1 · Sys 5 Sub
z1Sys5Sub
Jira·SN
[TODO:DE]

### Z1 · Sys 6 Sub
z1Sys6Sub
SharePoint
[TODO:DE]

### Z1 · Sys 1 Name (ERP)
z1Sys1Name
ERP
[TODO:DE]

### Z1 · Sys 2 Name (CRM)
z1Sys2Name
CRM
[TODO:DE]

### Z1 · Sys 3 Name (RAG)
z1Sys3Name
RAG
[TODO:DE]

### Z1 · Sys 4 Name (Legacy)
z1Sys4Name
Legacy
[TODO:DE]

### Z1 · Sys 5 Name (Ticket)
z1Sys5Name
Ticket
[TODO:DE]

### Z1 · Sys 6 Name (DMS)
z1Sys6Name
DMS
[TODO:DE]

### Z1 · API List
z1SysApi
REST · gRPC · JDBC · Graph API
[TODO:DE]

### Z1 · Zero-Mod Title
z1ZeroModStrong
Zero System Modification
[TODO:DE]

### Z1 · Zero-Mod Body
z1ZeroModBody
Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems
[TODO:DE]

---

## Z2

### Z2 · Step Title
step2Title
DP Encapsulation
[TODO:DE]

### Z2 · Zone Label
z2Label
DMZ — Differential Privacy
[TODO:DE]

### Z2 · Zone Sub
z2Sub
Same Org · EU Region · GDPR Ready
[TODO:DE]

### Z2 · DB Group Tag
z2GroupTag
Encapsulation Flow
[TODO:DE]

### Z2 · IN Sub
z2InSub
Raw Input<br/>Unstructured Data
[TODO:DE]

### Z2 · PROCESS Sub
z2ProcessSub
DP Engine<br/>Differential Privacy
[TODO:DE]

### Z2 · OUT Sub
z2OutSub
Encapsulated<br/>Token Capsule
[TODO:DE]

### Z2 · Block Label
z2BlockLabel
Encapsulation
[TODO:DE]

### Z2 · Protected Badge
z2ProtectedBadge
✓ Protected
[TODO:DE]

### Z2 · Field 1 Name
z2F1Name
Name
[TODO:DE]

### Z2 · Field 2 Name
z2F2Name
Champ Id
[TODO:DE]

### Z2 · Field 3 Name
z2F3Name
Free Text
[TODO:DE]

### Z2 · DP Engine Name
z2DpEngineName
DP Engine
[TODO:DE]

### Z2 · DP Engine Badge
z2DpEngineBadge
epsilon-DP Active
[TODO:DE]

### Z2 · DP Tech 1
z2DpTech1
Noise Injection (Laplace)
[TODO:DE]

### Z2 · DP Tech 2
z2DpTech2
k-Anonymity Enforcement
[TODO:DE]

### Z2 · DP Tech 3
z2DpTech3
Semantic Tokenization
[TODO:DE]

### Z2 · DP Tech 4
z2DpTech4
Free-Text NER Masking
[TODO:DE]

### Z2 · DMZ Title
z2DmzStrong
DMZ Guarantee
[TODO:DE]

### Z2 · DMZ Body
z2DmzBody
Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>
[TODO:DE]

---

## Z3

### Z3 · Step Title
step3Title
AI Processing
[TODO:DE]

### Z3 · Zone Label
z3Label
In-House Team
[TODO:DE]

### Z3 · Zone Sub
z3Sub
Same Org · Anonymized LLM Proxy
[TODO:DE]

### Z3 · Pipeline Block Label
z3PipelineLabel
LLM Pipeline
[TODO:DE]

### Z3 · Proxy Badge
z3ProxyBadge
LLM-a-Proxy
[TODO:DE]

### Z3 · Proxy Sub
z3ProxySub
Anonymized Routing
[TODO:DE]

### Z3 · Path A Label
z3PathA
Path A · External
[TODO:DE]

### Z3 · Path B Label
z3PathB
Path B · On-prem
[TODO:DE]

### Z3 · Deploy A1 (External 1)
z3DeployA1
Public cloud
[TODO:DE]

### Z3 · Deploy A2 (External 2)
z3DeployA2
Region-hosted
[TODO:DE]

### Z3 · Deploy B1 (On-prem 1)
z3DeployB1
Private
[TODO:DE]

### Z3 · Deploy B2 (On-prem 2)
z3DeployB2
On-prem
[TODO:DE]

### Z3 · Swap Note
z3SwapNote
swap any model — capsule contract stays the same
[TODO:DE]

### Z3 · Guardrail Title
z3GuardStrong
No Direct Access to Source DB
[TODO:DE]

### Z3 · Guardrail Body
z3GuardBody
AI teams never touch the source database. They only receive structure-preserved, differentially-private data
[TODO:DE]

### Z3 · Isolation Block Label
z3IsoLabel
Privacy Isolation Module
[TODO:DE]

### Z3 · PDESC Head
z3PdescHead
PDESC / ISOLA
[TODO:DE]

### Z3 · PDESC Item 1
z3PdescItem1
Privacy Descriptor
[TODO:DE]

### Z3 · PDESC Item 2
z3PdescItem2
Isolated Computation Zone
[TODO:DE]

### Z3 · PDESC Item 3
z3PdescItem3
Output De-identification
[TODO:DE]

### Z3 · PDESC Foot
z3PdescFoot
Re-identification attempts contained · Output validated
[TODO:DE]

### Z3 · Compliance Label
z3ComplianceLabel
Compliance
[TODO:DE]

### Z3 · Compliance Badge 1
z3Compliance1
EU GDPR
[TODO:DE]

### Z3 · Compliance Badge 2
z3Compliance2
EU Region
[TODO:DE]

---

## Z4

### Z4 · Step Title
step4Title
Local Auto Reconstruction
[TODO:DE]

### Z4 · Zone Label
z4Label
Local — Auto Reconstruction
[TODO:DE]

### Z4 · Zone Sub
z4Sub
Internal Only · No External Egress
[TODO:DE]

### Z4 · DB Group Tag
z4GroupTag
Reconstruction Flow
[TODO:DE]

### Z4 · IN Sub
z4InSub
AI Token<br/>Tokenized Response
[TODO:DE]

### Z4 · PROCESS Sub
z4ProcessSub
Reconstruction<br/>Local Restoration
[TODO:DE]

### Z4 · OUT Sub
z4OutSub
Original Value<br/>Business-Ready
[TODO:DE]

### Z4 · Token Block Label
z4BlockLabel
Token → Original
[TODO:DE]

### Z4 · Field 1 Name
z4F1Name
Customer
[TODO:DE]

### Z4 · Field 2 Name
z4F2Name
Ticket
[TODO:DE]

### Z4 · Field 3 Name
z4F3Name
Details
[TODO:DE]

### Z4 · Recon Engine Name
z4ReconName
Reconstruction
[TODO:DE]

### Z4 · Recon Engine Badge
z4ReconBadge
Local Only
[TODO:DE]

### Z4 · Recon Tech 1
z4ReconTech1
Token Map Lookup
[TODO:DE]

### Z4 · Recon Tech 2
z4ReconTech2
Original Value Restore
[TODO:DE]

### Z4 · Recon Tech 3
z4ReconTech3
Context Re-binding
[TODO:DE]

### Z4 · Recon Tech 4
z4ReconTech4
Output Validation
[TODO:DE]

### Z4 · Local Guarantee Title
z4LocalStrong
Local Reconstruction Guarantee
[TODO:DE]

### Z4 · Local Guarantee Body
z4LocalBody
Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>
[TODO:DE]

### Z4 · Output Properties Label
z4OutputLabel
Output Properties
[TODO:DE]

### Z4 · Output Check 1
z4OutCheck1
Original Values Restored
[TODO:DE]

### Z4 · Output Check 2
z4OutCheck2
Zero External Exposure
[TODO:DE]

### Z4 · Output Check 3
z4OutCheck3
Context Fully Preserved
[TODO:DE]

### Z4 · Output Check 4
z4OutCheck4
Business-Ready Output
[TODO:DE]

### Z4 · Chip 1
z4Chip1
Auto Restore
[TODO:DE]

### Z4 · Chip 2
z4Chip2
Local Only
[TODO:DE]

### Z4 · Chip 3
z4Chip3
Data Residency
[TODO:DE]

---

## Core

### Core · Section Title
coreTitle
6 Core Capabilities
[TODO:DE]

### Core · Workflow Group Label
coreWorkflowGroup
What Makes The Workflow Run
[TODO:DE]

### Core · Approval Group Label
coreApprovalGroup
What Gets The Approval
[TODO:DE]

### Core · Bottom Strip
coreStrip
01 and 02 lead the conversation. 05 and 06 anchor the approval.
[TODO:DE]

---

## Core 01

### Core 01 · Name
core1Name
Structure-Preserving
[TODO:DE]

### Core 01 · Description
core1Desc
Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.
[TODO:DE]

---

## Core 02

### Core 02 · Name
core2Name
Enterprise Environment Execution
[TODO:DE]

### Core 02 · Description
core2Desc
Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.
[TODO:DE]

---

## Core 03

### Core 03 · Name
core3Name
Business-Ready Reconstruction
[TODO:DE]

### Core 03 · Description
core3Desc
AI output is restored with real values. The result goes straight back to the originating ticket or workflow.
[TODO:DE]

---

## Core 04

### Core 04 · Name
core4Name
Enterprise Context Control
[TODO:DE]

### Core 04 · Description
core4Desc
Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.
[TODO:DE]

---

## Core 05

### Core 05 · Name
core5Name
Zero Exposure &amp; Audit
[TODO:DE]

### Core 05 · Description
core5Desc
Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.
[TODO:DE]

---

## Core 06

### Core 06 · Name
core6Name
Time-Shifting Policy
[TODO:DE]

### Core 06 · Description
core6Desc
Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.
[TODO:DE]
