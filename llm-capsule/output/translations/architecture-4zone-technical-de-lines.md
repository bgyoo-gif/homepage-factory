# architecture_4zone_technical-develop — Deutsche Übersetzung (localize mode)

Jeder Eintrag = ein Prop im Framer-Properties-Panel.
In dieser Reihenfolge übernehmen — die Default Values direkt ersetzen.

## Section header

eyebrow
Technical view · zone-based architecture
Technische Ansicht · Zonenbasierte Architektur

sectionTitle
The same architecture, in technical view
Dieselbe Architektur — aus technischer Sicht

sectionDescription
For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.
Für Architekten und Sicherheitsprüfer: die vollständige zonenbasierte Sicht auf operative Daten, Kapselung und LLM-Integration.

---

## Card 1 — Zone 1

card1Num
Zone 1 · Corporate Internal Network
Zone 1 · Unternehmensinternes Netzwerk

card1Title
Where the operational systems already live
Wo die operativen Systeme bereits laufen

card1Description
Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.
Bestehende Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — bleiben unverändert. Keine Migration. Capsule liest sie je nach Quelle über REST, gRPC, JDBC oder Graph API aus.

---

## Card 2 — Zone 2

card2Num
Zone 2 · DMZ — Demilitarized Zone
Zone 2 · DMZ — Demilitarisierte Zone

card2Title
Where encapsulation happens
Wo die Kapselung stattfindet

card2Description
The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.
Die Enhanced Encapsulation Layer erkennt sensible Elemente, ersetzt sie durch sichere Token mittels strukturerhaltender, Differential-Privacy-basierter Schutzverfahren und übergibt die Kapsel an die Routing-Entscheidung. Originalwerte verbleiben lokal im Token-Map.

---

## Card 3 — Zone 3

card3Num
Zone 3 · In-House Team
Zone 3 · Internes Team

card3Title
Where governance and routing happen
Wo Governance und Routing stattfinden

card3Description
Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.
Organisationsrichtlinien, Berechtigungen und Domänenkontext entscheiden, wo die Kapsel verarbeitet wird — ein zugelassener externer LLM (Path A) oder ein lokales On-Prem-Modell (Path B). Die Entscheidung erfolgt richtlinienbasiert pro Workflow, mit vollständigem Audit-Trail innerhalb der Organisation.

---

## Card 4 — Zone 4

card4Num
Zone 4 · Local — Auto Reconstruction
Zone 4 · Lokal — Automatische Rekonstruktion

card4Title
Where the AI response becomes Business-Ready output
Wo die KI-Antwort zu geschäftsfertiger Ausgabe wird

card4Description
The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.
Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch vom Token in den Originalwert rückgeführt. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden. Die wiederhergestellte Ausgabe wird in den ursprünglichen Workflow zurückgespielt.
