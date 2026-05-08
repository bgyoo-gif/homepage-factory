# On-Prem LLM Execution Path — Deutsche Übersetzung

## Section 01: Hero

← Learn
← Zurück

On-Prem LLM Execution Path: Air-Gapped, Hybrid, and In-Region AI for Regulated Operations
On-Premise-Ausführungspfad für LLMs: Air-Gapped-, Hybrid- und regionsspezifische KI für regulierte Betriebsumgebungen

Two execution paths inside a single AI enablement data layer. When external transmission is not an option, the on-prem local lightweight model handles the workflow inside your boundary — zero external exposure, full restoration.
LLM Capsule bietet zwei Ausführungspfade innerhalb einer einzigen KI-Datenschicht. Wenn externe Übertragung regulatorisch ausgeschlossen ist, übernimmt das lokale On-Premise-Modell den gesamten Workflow innerhalb Ihrer Infrastruktur — ohne externe Datenübertragung, mit vollständiger Wiederherstellung.

ARCHITECTURE · Execution Path
ARCHITEKTUR · Ausführungspfad

11 min read
11 Min. Lesezeit

Updated May 2025
Aktualisiert Mai 2025

## Section 02: TL;DR

Definition · TL;DR
Definition · Kurzfassung

LLM Capsule supports two execution paths. Path A sends capsule data to an external approved LLM — no raw operational data exposure. Path B runs a small private lightweight model entirely inside your enterprise environment — zero external transmission. Selection is policy-driven per workflow.
LLM Capsule unterstützt zwei Ausführungspfade. Pfad A überträgt Kapseldaten an ein zugelassenes externes LLM — operative Rohdaten verlassen die Unternehmensumgebung nicht. Pfad B führt ein kleines lokales Modell vollständig innerhalb Ihrer Infrastruktur aus — ohne jede externe Datenübertragung. Die Pfadauswahl erfolgt richtliniengesteuert, je nach Workflow.

## Section 03: Body (bodyHtml)

---

**h2: Warum zwei Ausführungspfade notwendig sind**

Unternehmen verfügen selten über ein einheitliches regulatorisches Profil. Ein Telekommunikationsanbieter kann NOC-Analysen über Pfad A und sicherheitskritische Incident-Workflows über Pfad B abwickeln. Ein Krankenhaus kann Pfad A für Routinedokumentation und Pfad B für die klinische Entscheidungsunterstützung nutzen. Ein Rüstungsunternehmen kann ausschließlich Pfad B einsetzen. Ein einziger Ausführungspfad erzwingt einen einzigen regulatorischen Mindeststandard. Zwei Pfade ermöglichen es der Governance, den Pfad dem Workflow anzupassen.

---

**h2: Pfad A — externes zugelassenes LLM, ausschließlich mit Kapseldaten**

Die Kapsel (strukturerhaltend, Differential-Privacy-geschützt) wird an einen zugelassenen externen LLM-Endpunkt übertragen — ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM API. **Operative Rohdaten verlassen die Unternehmensumgebung nicht.** Nur die Kapsel wird übertragen. Das LLM verarbeitet die Kapsel und liefert eine tokenisierte Antwort zurück. Der State Vault stellt die Antwort innerhalb der Unternehmensumgebung wieder her.

- **Stärke:** Zugang zu leistungsfähigen Frontier-Modellen
- **Einschränkung:** Erfordert einen zugelassenen externen LLM-Endpunkt und richtlinienkonforme Freigabe

---

**h2: Pfad B — lokales On-Premise-Leichtgewichtmodell**

Ein kleines, privates Leichtgewichtmodell läuft vollständig innerhalb der Unternehmensumgebung. Die Kapsel wird lokal verarbeitet. **Keine externe Datenübertragung.** Einsatz bei Air-Gapped-Netzwerken, klassifizierten Betriebsumgebungen, OT-Umgebungen und streng regulierten Bereichen, in denen jeder externe Endpunkt ausgeschlossen ist.

- **Stärke:** Keine externe Datenübertragung, vollständige Datenresidenz
- **Einschränkung:** Modellleistung ist durch den lokalen Modell-Footprint begrenzt

[callout] **Interne Bezeichnung.** Das interne Team verwendet gelegentlich den Begriff „10G" — in der öffentlichen Dokumentation werden die Begriffe *lokales On-Premise-Modell*, *kleines privates Modell*, *lokaler Inferenzpfad* oder *On-Premise-/lokaler Ausführungspfad* verwendet. Die genaue Modellgröße ist eine Deployment-Entscheidung, die von Hardware und Workflow abhängt.

---

**h2: Pfadauswahl: ein Entscheidungsrahmen**

|--------|--------|--------|
| Air-Gapped-Netzwerk | Nicht anwendbar | Erforderlich |
| Latenzprofil | Variabel (netzwerkabhängig) | Lokal, vorhersehbar |
| Compliance-Posture | „Keine Offenlegung von Rohdaten" | „Keine externe Datenübertragung" |

---

**h2: Deployment-Topologien**

Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden innerhalb des unternehmenseigenen Rechenzentrums bereitgestellt. Pfad B ist der Standard. Pfad A ist nur verfügbar, wenn ein zugelassener externer Endpunkt durch Richtlinie freigegeben wurde.

Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden in einem vollständig isolierten Netzwerk betrieben. Pfad A ist konstruktionsbedingt nicht verfügbar. Pfad B übernimmt alle Workflows. Typisch für klassifizierte Operationen, Verteidigung und streng regulierte OT-Umgebungen.

Capsule Runtime On-Premise; beide Pfade aktiv. Richtlinien steuern die Zuordnung einzelner Workflows. Typisch für Telekommunikation und Finanzwesen, wo einige Workflows externe Endpunkte tolerieren und andere lokale Ausführung erfordern.

Capsule Runtime und Leichtgewichtmodell werden in einer bestimmten Region bereitgestellt (z. B. EU für DSGVO (GDPR)-pflichtige Workloads). Pfad A kann ebenfalls auf in-regionsspezifische externe Endpunkte beschränkt werden. Typisch für multinationale Unternehmen mit regionalen Datenhaltungspflichten.

Capsule Runtime wird über den AWS Marketplace bereitgestellt. Das Cloud-Konto des Kunden hostet sowohl die Runtime als auch das lokale Leichtgewichtmodell. Pfad A optional, abhängig von der Richtlinie.

Capsule SDK wird in eine bestehende Anwendung eingebettet (NOC-Konsole, Ticket-System, Krankenhausportal, Missionssystem). Beide Pfade werden unterstützt; die eingebettete Anwendung wählt den Pfad je Workflow.

Capsule-Plug-in für Slack-Workflows. Pfad A typisch für allgemeine Teams; Pfad B für regulierte Teams, die Slack als UI-Schicht über einer On-Premise-Runtime nutzen.

---

**h2: Technischer Ablauf innerhalb von Pfad B**

2. Strukturerhaltende Kapsulierung — Operative Kennungen werden tokenisiert, Sequenz und Struktur bleiben erhalten.
4. Lokale Weiterleitung — Die Kapsel wird an das lokale Leichtgewichtmodell im selben Netzwerk übermittelt.
6. State Vault — Originale operative Kennungen werden in der Ausgabe wiederhergestellt.
8. Governance-Protokollierung — Pfad, angewandte Richtlinie und Prüfpfad werden aufgezeichnet.

**Kein Schritt in Pfad B verlässt die Unternehmensgrenze.**

---

**h2: Die Zero Exposure-Aussage — korrekt abgegrenzt**

"Zero Exposure" ist eine Aussage, die eines definierten Geltungsbereichs bedarf, um belastbar zu sein. Die von LLM Capsule verwendeten abgegrenzten Formulierungen:

- **Pfad B:** „Keine externe Datenübertragung beim On-Premise-/lokalen Ausführungspfad."

Die Verwendung von „Zero Exposure" als übergeordnetem Slogan ohne Geltungsbereich ist zu vermeiden. Die technische Garantie ist pfadspezifisch und richtlinienabhängig.

---

**h2: Bewertungskriterien für Einkäufer**

2. **Granularität der Pfadzuweisung.** Können verschiedene Workflows unter derselben Governance unterschiedliche Pfade nutzen?
4. **Air-Gapped-Unterstützung.** Ist die Runtime ohne externe Konnektivität vollständig betriebsfähig?
6. **Pfad-Audit.** Wird der angewandte Pfad je Anfrage, je Workflow und je Richtlinie protokolliert?

---

**[takeaways] Kernaussagen**

Zwei Ausführungspfade in einer KI-Datenschicht: externes zugelassenes LLM mit Kapsel (Pfad A) oder lokales On-Premise-Leichtgewichtmodell (Pfad B).

Pfad B bewältigt Air-Gapped-, klassifizierte, OT- und streng regulierte Betriebsumgebungen ohne externe Datenübertragung.

Die Pfadauswahl erfolgt richtliniengesteuert je Workflow; die Governance protokolliert den angewandten Pfad.

Sechs Deployment-Topologien: On-Premise, Air-Gapped, Hybrid, In-Region, Cloud, Embedded Integration, Slack App.

Die Zero Exposure-Aussage ist pfadgebunden: „Keine Offenlegung von Rohdaten gegenüber externen LLMs" (Pfad A) oder „Keine externe Datenübertragung" (Pfad B).

## Section 04: Related Links

Continue reading
Weitere Artikel

Pillar
Grundlage

Differential privacy for enterprise AI
Differential Privacy für den KI-Einsatz im Unternehmen

Use case
Anwendungsfall

AI on network operations data
KI für Netzwerkbetriebsdaten

Comparison
Vergleich

PII guardrails vs operational data protection
PII-Schutzmaßnahmen vs. Schutz operativer Daten

## Section 05: CTA Strip

Air-gapped, hybrid, or external — your policy decides.
Air-Gapped, Hybrid oder extern — Ihre Richtlinie entscheidet.

30-minute review of your regulatory profile and a path-by-path recommendation per workflow.
Wir analysieren Ihr regulatorisches Profil und erarbeiten eine pfadspezifische Empfehlung für jeden Workflow — in 30 Minuten.

Request a Demo
Demo anfordern
