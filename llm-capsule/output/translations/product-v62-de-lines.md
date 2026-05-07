# product-v62 — Deutsche Übersetzung (v6.2, localize)

---

## Section 01: Hero

**eyebrow**
Product
Produkt

**title** (before brand)
Watch 
Sehen Sie 

**titleBrand**
LLM Capsule
LLM Capsule

**titleSuffix** (after brand)
 run on a real enterprise workflow
 im Einsatz — an einem realen Unternehmens-Workflow.

**description**
Two minutes — see a real document encapsulated, sent to an external LLM, and restored back into the originating workflow. No marketing words. The actual product.
Zwei Minuten: Ein reales Dokument wird lokal gekapselt, an ein externes LLM übermittelt und anschließend im Ausgangssystem wiederhergestellt. Keine Marketingversprechen — das Produkt selbst.

**ctaPrimaryLabel**
Request a Live Demo
Live-Demo anfordern

**ctaSecondaryLabel**
View Architecture
Architektur ansehen

---

## Section 02: Demo Video

**videoDuration**
2:14 · LLM CAPSULE LIVE WALKTHROUGH
2:14 · LLM CAPSULE LIVE WALKTHROUGH

**videoLabel**
Watch the 2-minute product demo
2-Minuten-Produktdemonstration ansehen

**watchLabel**
Play demo
Demo abspielen

**captionStrong**
What you'll see:
Was Sie sehen:

**captionText**
A telecom NOC ticket flows through LLM Capsule — device IDs, circuit IDs, site references, alarm sequences, and SLA-impact references are encapsulated locally — subscriber identifiers included; the protected capsule reaches an external LLM; the AI's RCA recommendation is auto-restored back into the original ticket. End-to-end, in production.
Ein NOC-Ticket eines Telekommunikationsunternehmens durchläuft LLM Capsule: Geräte-IDs, Leitungs-IDs, Standortreferenzen, Alarmsequenzen, SLA-relevante Angaben und Teilnehmerkennungen werden lokal kapsuliert. Die geschützte Kapsel erreicht ein externes LLM. Die KI-Empfehlung zur Ursachenanalyse wird automatisch in das ursprüngliche Ticket zurückgeführt. Ende-zu-Ende, im Produktionsbetrieb.

**ctaLabel**
Take the Interactive Tour
Interaktive Tour starten

---

## Section 03: Interactive Tour

**eyebrow**
Interactive product tour
Interaktive Produktführung

**sectionTitle**
Five steps. One real document. Real output.
Fünf Schritte. Ein reales Dokument. Verwertbare Ergebnisse.

**sectionDesc**
The same capsule mechanism runs across telecom, healthcare, finance, defense, legal, and OT. Below: a contract review workflow. The raw document never leaves your environment.
Derselbe Kapsulierungsmechanismus wird in Telekommunikation, Gesundheitswesen, Finanzwesen, Verteidigung, Recht und OT eingesetzt. Im folgenden Beispiel: ein Vertragsüberprüfungs-Workflow. Das Originaldokument verlässt zu keinem Zeitpunkt Ihre Umgebung.

**step1Number**
Step 01 — Point at the source
Schritt 01 — Quelle verbinden

**step1Title**
Reads the document where it already lives
Zugriff auf vorhandene Systeme — ohne Datenmigration

**step1Desc**
LLM Capsule runs inside your environment and reads documents from the systems already there — SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, internal NOC console, or your own portal. No data migration. No external pipe. No architectural change.
LLM Capsule wird innerhalb Ihrer Umgebung betrieben und liest Dokumente direkt aus bestehenden Systemen: SharePoint, Jira / ServiceNow, Salesforce, Oracle ERP, interne NOC-Konsolen oder eigene Portale. Es ist keine Datenmigration, keine externe Verbindung und keine Anpassung der Systemarchitektur erforderlich.

**step1Sub**
Existing systems invoke Capsule from inside the environment via REST / gRPC / JDBC / Graph API / on-prem API / embedded SDK / Slack App.
Bestehende Systeme rufen LLM Capsule innerhalb der Umgebung auf: REST / gRPC / JDBC / Graph API / On-Premise-API / eingebettetes SDK / Slack App.

**step1Chips**
In-environment | No data egress | Existing sources
In-environment | Kein Datenaustritt | Bestehende Quellen

**step2Number**
Step 02 — Define policy
Schritt 02 — Richtlinie festlegen

**step2Title**
Pick the markers your business cares about
Vertraulichkeitsmerkmale nach Ihren Anforderungen definieren

**step2Desc**
Pick from the starter pack — project codes, contract refs, network IDs, mission refs, financial terms, vulnerability labels — or write your own. Markers can be added, removed, and time-shifted tomorrow without redeploying. Every policy version is logged.
Wählen Sie aus dem Starter-Paket: Projektnummern, Vertragsreferenzen, Netzwerk-IDs, Missionsreferenzen, Finanzbegriffe, Schwachstellenkennzeichnungen. Oder definieren Sie eigene Merkmale. Merkmale lassen sich jederzeit hinzufügen, entfernen oder zeitlich befristet aktivieren — ohne erneuten Deployment-Vorgang. Jede Richtlinienversion wird protokolliert.

**step2Chips**
11 starter markers | Custom regex | Policy versions | RBAC scope
11 Starter-Merkmale | Eigene Regex | Richtlinienversionen | RBAC-Gültigkeitsbereich

**step3Number**
Step 03 — Encapsulate
Schritt 03 — Kapsulieren

**step3Title**
Sensitive elements replaced. Structure preserved.
Vertrauliche Inhalte ersetzt. Dokumentstruktur erhalten.

**step3Desc**
Inside the DMZ — Demilitarized Zone (Zone 2 of the four-zone architecture), sensitive elements are replaced with structure-preserving placeholders by the Enhanced Encapsulation Layer. Differential-privacy-based protection (epsilon-DP, Laplace noise, k-anonymity, NER masking) reduces re-identification risk. Tables, cross-references, and document hierarchy survive intact. See the four-zone architecture →
In der DMZ (Demilitarisierte Zone, Zone 2 der Vier-Zonen-Architektur) ersetzt das Enhanced Encapsulation Layer vertrauliche Inhalte durch strukturerhaltende Platzhalter. Der Schutz basiert auf Differential Privacy (epsilon-DP, Laplace-Rauschen, k-Anonymität, NER-Maskierung) und reduziert das Risiko einer Re-Identifizierung. Tabellen, Querverweise und die Dokumenthierarchie bleiben unverändert erhalten. Zur Vier-Zonen-Architektur →

**step3Chips**
epsilon-DP | Laplace noise | NER masking | Structure preserved
epsilon-DP | Laplace-Rauschen | NER-Maskierung | Struktur erhalten

**step4Number**
Step 04 — Process
Schritt 04 — Verarbeiten

**step4Title**
Any LLM. Path A or Path B.
Beliebiges LLM. Pfad A oder Pfad B.

**step4Desc**
The capsule (only the capsule — never the original) is routed through your approved external LLM (ChatGPT, Claude, Gemini, Perplexity) or to an on-prem local lightweight model for air-gapped workflows. Path is policy-driven per workflow.
Ausschließlich die Kapsel — niemals das Originaldokument — wird an das freigegebene externe LLM (ChatGPT, Claude, Gemini, Perplexity) oder an ein On-Premise-Modell für Air-Gapped-Workflows übermittelt. Die Pfadauswahl erfolgt richtliniengesteuert pro Workflow.

**step4Chips**
Path A · External | Path B · On-prem | Policy-routed
Pfad A · Extern | Pfad B · On-Premise | Richtliniengesteuert

**step5Number**
Step 05 — Restore
Schritt 05 — Wiederherstellen

**step5Title**
AI output comes back business-ready
KI-Ausgabe: direkt einsatzbereit im Ausgangssystem

**step5Desc**
The AI's response is auto-restored locally — token map lookup, original value substitution, context re-binding, output validation. Real names, real figures, real references appear in the original ticket. Token map never leaves the enterprise. End user sees a finished, production-ready output.
Die KI-Antwort wird lokal automatisch wiederhergestellt: Token-Map-Abgleich, Ersetzung durch Originalwerte, Kontextbindung, Ausgabevalidierung. Reale Bezeichnungen, Zahlen und Referenzen erscheinen im Originalticket. Die Token-Map verlässt die Unternehmensumgebung zu keinem Zeitpunkt. Das Ergebnis ist produktionsreif und ohne Nachbearbeitung verwendbar.

**step5Chips**
Local restore | Context re-binding | Output validation | Audit logged
Lokale Wiederherstellung | Kontextbindung | Ausgabevalidierung | Audit-Protokoll

---

## Section 04: Metrics Narrative

**eyebrow**
Performance — measured on real enterprise documents
Leistungswerte — gemessen an realen Unternehmensdokumenten

**sectionTitle**
The numbers behind the demo
Die Kennzahlen hinter der Demonstration

**sectionDesc**
2,200-character document benchmark. Tested across finance, healthcare, legal, and public sector workflows.
Benchmark auf Basis eines 2.200-Zeichen-Dokuments. Getestet in Workflows aus Finanzwesen, Gesundheitswesen, Recht und öffentlichem Sektor.

**bigValue**
0.12s
0,12 s

**bigLabel**
Per-page processing latency
Verarbeitungslatenz pro Seite

**bigNarrativePrefix**
That's 
Das sind 

**bigNarrativeBold**
120 milliseconds
120 Millisekunden

**bigNarrativeSuffix**
 from raw document to encapsulated capsule — fast enough to plug into real-time NOC alerting, claims intake, and clinical workflows without breaking SLA. Most enterprise AI pilots stall on latency. We don't.
 vom Rohdokument zur fertig kapsulierten Ausgabe. Damit ist LLM Capsule schnell genug für Echtzeit-NOC-Alarmierung, Schadenmeldungseingang und klinische Workflows — ohne SLA-Verletzung. Viele KI-Pilotprojekte im Unternehmen scheitern an der Latenz. LLM Capsule nicht.

**metric1Value**
100%
100 %

**metric1Label**
Restoration rate
Wiederherstellungsrate

**metric1Desc**
Every encapsulation has a reversible local mapping. No ambiguity, no manual reconstruction.
Jede Kapsulierung verfügt über eine lokal gespeicherte, umkehrbare Zuordnung. Keine Mehrdeutigkeit, keine manuelle Rekonstruktion.

**metric2Value**
98%
98 %

**metric2Label**
Output similarity
Ausgabeähnlichkeit

**metric2Desc**
Compared to AI processing the original document. Restoration preserves business meaning.
Im Vergleich zur KI-Verarbeitung des Originaldokuments. Die Wiederherstellung erhält die fachliche Bedeutung vollständig.

**metric3Value**
98.1%
98,1 %

**metric3Label**
Detection accuracy
Erkennungsgenauigkeit

**metric3Desc**
Sensitive entity detection across structured and free-text fields, including custom markers.
Erkennung vertraulicher Entitäten in strukturierten und Freitextfeldern, einschließlich benutzerdefinierter Merkmale.

**metric4Value**
99.14%
99,14 %

**metric4Label**
Workflow accuracy
Workflow-Genauigkeit

**metric4Desc**
End-to-end correctness — from raw input to restored output in production workflows.
Ende-zu-Ende-Korrektheit vom Rohdokument bis zur wiederhergestellten Ausgabe in Produktions-Workflows.

---

## Section 05: Workflow Gallery

**eyebrow**
Workflow gallery
Workflow-Referenzen

**heading**
Same product. Six industries. Real customers.
Dasselbe Produkt. Sechs Branchen. Reale Kunden.

**subheading**
Each card below is a real workflow LLM Capsule runs in production. Click for the full case story.
Jede Karte zeigt einen realen Workflow, den LLM Capsule im Produktionsbetrieb ausführt.

**card1IndustryTag**
Telecom
Telekommunikation

**card1Title**
NOC incident analysis on production traffic
NOC-Störungsanalyse auf produktivem Datenverkehr

**card1Description**
RCA generation on live ticket data with device IDs, circuit IDs, site references, alarm sequences, SLA-impact references, and subscriber identifiers encapsulated locally. No raw operational data exposure to external LLMs.
Ursachenanalyse auf Live-Ticketdaten: Geräte-IDs, Leitungs-IDs, Standortreferenzen, Alarmsequenzen, SLA-relevante Angaben und Teilnehmerkennungen werden lokal kapsuliert. Operative Rohdaten gelangen nicht zu externen LLMs.

**card1CustomerName**
SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12
SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12

**card2IndustryTag**
Healthcare
Gesundheitswesen

**card2Title**
Radiology report drafting with PHI never leaving
Radiologiebefund-Erstellung ohne Weitergabe von Patientendaten

**card2Description**
AI drafts radiology summaries from real clinical workflows. PHI encapsulated locally; restoration happens inside the hospital network. HIPAA-aligned.
Die KI erstellt Radiologiezusammenfassungen auf Basis realer klinischer Daten. Patientenbezogene Daten werden lokal kapsuliert; die Wiederherstellung erfolgt innerhalb des Krankenhausnetzwerks. HIPAA-konform.

**card2CustomerName**
Ewha Womans University Medical Center (EUMC)
Ewha Womans University Medical Center (EUMC)

**card3IndustryTag**
Finance / Insurance
Finanzwesen / Versicherung

**card3Title**
AI claims processing with real customer data
KI-gestützte Schadenbearbeitung mit realen Kundendaten

**card3Description**
AI-powered claim classification, damage assessment, and fraud detection on real policyholder data. No customer data leaves the insurer's environment.
KI-basierte Schadenklassifizierung, Schadenbewertung und Betrugserkennung auf realen Versicherungsnehmerdaten. Kundendaten verlassen die Systemumgebung des Versicherers nicht.

**card3CustomerName**
Kyobo · DB Insurance · IBK
Kyobo · DB Insurance · IBK

**card4IndustryTag**
Public Sector / Defense
Öffentlicher Sektor / Verteidigung

**card4Title**
Mission brief drafting on classified workflows
Erstellung von Einsatzdokumenten in klassifizierten Workflows

**card4Description**
AI drafts intelligence briefs and operational summaries on classified data. On-prem local execution path — zero external transmission. Full audit trail under command control.
Die KI erstellt Lageberichte und operative Zusammenfassungen auf Basis klassifizierter Daten. Ausführung ausschließlich auf On-Premise-Systemen — keine externe Datenübertragung. Vollständiges Audit-Protokoll unter Führungskontrolle.

**card4CustomerName**
Ministry of National Defense (South Korea)
Verteidigungsministerium (Südkorea)

---

## Section 06: Admin Console

**eyebrow**
Operational governance
Betriebliche Governance

**heading**
Admin console — every event, every policy, every model
Admin-Konsole — jedes Ereignis, jede Richtlinie, jedes Modell

**subheading**
Enterprise AI governance is not a marketing claim. It's a console your audit team logs into.
KI-Governance im Unternehmen ist kein Marketingversprechen. Es ist eine Konsole, auf die Ihr Audit-Team direkt zugreift.

**tab1**
Audit
Audit

**tab2**
Policies
Richtlinien

**tab3**
Tokens
Tokens

**tab4**
Detection
Erkennung

**tab5**
Models
Modelle

**row1Badge**
restored
wiederhergestellt

**row2Badge**
restored
wiederhergestellt

**row3Badge**
restored
wiederhergestellt

**row4Badge**
policy
Richtlinie

**row5Badge**
policy
Richtlinie

**textHeading**
One pane. Five tabs. Full chain of custody.
Eine Oberfläche. Fünf Tabs. Lückenlose Nachvollziehbarkeit.

**textPara1**
Every encapsulation, processing, and restoration event lands here. Audit teams can replay any event end-to-end — what was protected, which policy version was active, which model processed it, what was restored.
Jedes Kapsulierungs-, Verarbeitungs- und Wiederherstellungsereignis wird hier erfasst. Audit-Teams können jeden Vorgang lückenlos nachvollziehen: was geschützt wurde, welche Richtlinienversion aktiv war, welches Modell die Verarbeitung übernahm und was wiederhergestellt wurde.

**feature1Label**
Audit
Audit

**feature1Desc**
every event with timestamps and policy version
jedes Ereignis mit Zeitstempel und Richtlinienversion

**feature2Label**
Policies
Richtlinien

**feature2Desc**
version history, scope, and RBAC
Versionshistorie, Gültigkeitsbereich und RBAC

**feature3Label**
Tokens
Tokens

**feature3Desc**
model usage, cost, and per-team breakdown
Modellnutzung, Kosten und teamweise Aufschlüsselung

**feature4Label**
Detection
Erkennung

**feature4Desc**
what was classified as sensitive, and how
was als vertraulich klassifiziert wurde und nach welchem Kriterium

**feature5Label**
Models
Modelle

**feature5Desc**
health, throughput, comparative output quality
Betriebsstatus, Durchsatz und vergleichende Ausgabequalität

---

## Section 07: Capability 06

**badge**
Capability 06 · Deep dive
Capability 06 · Vertiefung

**heading**
You define what's sensitive —
Sie definieren, was vertraulich ist —

**headingEmphasis**
and you can change it tomorrow.
und können es jederzeit anpassen.

**lead**
Yesterday it was network logs. Today it's M&A code names. Next quarter it's a new regulator's spec. Standard PII categories don't move; your business does. LLM Capsule lets your team define, add, remove, and version confidentiality markers as your operations and regulatory landscape evolve — with full audit trail of which marker was protected when.
Was gestern Netzwerkprotokolle waren, sind heute M&A-Codenamen — und im nächsten Quartal neue regulatorische Vorgaben. Standardmäßige Datenschutzkategorien sind starr; Ihr Geschäftsbetrieb nicht. Ihr Team kann Vertraulichkeitsmerkmale jederzeit definieren, hinzufügen, entfernen und versionieren — im Einklang mit operativen und regulatorischen Anforderungen. Jede Änderung wird vollständig protokolliert.

**cap1Num**
DEFINE
DEFINIEREN

**cap1Title**
Beyond generic PII
Über generische Datenschutzkategorien hinaus

**cap1Description**
Project codes, deal terms, internal IDs, contract references, network identifiers, OT asset IDs, mission refs. Your team defines the markers — not a vendor's fixed list.
Projektnummern, Vertragsbegriffe, interne Kennungen, Netzwerkidentifikatoren, OT-Asset-IDs, Missionsreferenzen. Ihr Team legt die Merkmale fest — nicht eine herstellerseitig fixierte Liste.

**cap2Num**
VERSION
VERSIONIEREN

**cap2Title**
Time-shift the policy
Richtlinien zeitlich steuern

**cap2Description**
Add a new marker today, retire one next quarter. Policy versioning + immediate enforcement. Audit log records exactly which marker was active for every encapsulation event.
Heute ein neues Merkmal hinzufügen, im nächsten Quartal ein bestehendes deaktivieren. Richtlinienversionen werden unmittelbar wirksam. Das Audit-Protokoll erfasst für jedes Kapsulierungsereignis, welches Merkmal zum jeweiligen Zeitpunkt aktiv war.

**cap3Num**
SCOPE
GÜLTIGKEITSBEREICH

**cap3Title**
Per workflow, team, data type
Pro Workflow, Team und Datentyp

**cap3Description**
NOC team, oncology unit, OT operations, M&A — different policies, same governance. RBAC + scoped enforcement + per-policy audit. One LLM Capsule, many policies.
NOC-Team, Onkologieeinheit, OT-Betrieb, M&A — unterschiedliche Richtlinien, einheitliche Governance. RBAC, gültigkeitsbereichsbezogene Durchsetzung und richtlinienbezogenes Audit. Ein LLM Capsule, viele Richtlinien.

---

## Section 08: CTA Strip

**heading**
See it on your own documents.
LLM Capsule auf Ihren eigenen Dokumenten.

**description**
Bring your real workflow. We'll set up Capsule on a sample document in your environment within 30 minutes.
Wir analysieren Ihre Anforderungen und demonstrieren LLM Capsule anhand eines Beispieldokuments aus Ihrer Umgebung — in 30 Minuten einsatzbereit.

**btn1Label**
Request a Live Demo
Live-Demo anfordern

**btn2Label**
View Architecture
Architektur ansehen

**btn3Label**
View Pricing
Preise ansehen
