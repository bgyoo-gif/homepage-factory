# GlossaryPage_ShadowAi — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

Shadow AI
Shadow AI

Employees using ChatGPT (or any external LLM) on personal devices or unapproved channels — because the official tooling can't handle the data the work depends on.
Mitarbeitende nutzen ChatGPT oder andere externe LLMs auf Privatgeräten und nicht genehmigten Kanälen. Der Grund: Die offiziellen KI-Werkzeuge können die für die Arbeit notwendigen Daten nicht verarbeiten.

Risk concept
Risikokonzept

---

## Section 02: Definition

Definition
Definition

Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing AI enablement data layer. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.
Shadow AI bezeichnet die nicht autorisierte Nutzung externer LLMs durch Unternehmensmitarbeitende außerhalb genehmigter Kanäle. Die eigentliche Ursache liegt nicht im Fehlverhalten der Mitarbeitenden, sondern im Fehlen eines AI enablement data layer: Offizielle KI-Werkzeuge können die regulierten Daten, auf die Arbeitsprozesse tatsächlich angewiesen sind, nicht verarbeiten. Mitarbeitende, die in Pilotprojekten Produktivitätsgewinne erlebt haben, suchen nach Wegen, die Einschränkungen zu umgehen, sobald die Produktivsysteme diese Gewinne nicht einlösen.

---

## Section 03: Body HTML

### h2: Why it emerges
### h2: Entstehungsursachen

Shadow AI is a symptom, not a cause. The underlying pattern:
Shadow AI ist ein Symptom, keine Ursache. Das typische Muster:

1. An enterprise pilots AI on synthetic data. Employees see significant productivity gains.
1. Ein Unternehmen pilotiert KI mit synthetischen Daten. Mitarbeitende erleben messbare Produktivitätssteigerungen.

2. The pilot stalls in security review because real production data cannot be sent to external LLMs.
2. Der Pilotbetrieb gerät in der Sicherheitsprüfung ins Stocken, weil echte Produktionsdaten nicht an externe LLMs übermittelt werden dürfen.

3. The pilot is rescoped to an unusable subset. Productivity gains evaporate.
3. Der Pilotbetrieb wird auf eine kaum verwendbare Datenteilmenge beschränkt. Die Produktivitätsgewinne entfallen.

4. Employees who tasted the productivity find workarounds — copy/paste anonymized snippets into ChatGPT on personal devices, screenshot redacted documents, use unapproved AI plugins.
4. Mitarbeitende, die die Produktivitätssteigerung bereits erlebt haben, suchen nach Alternativen: Sie verarbeiten anonymisierte Ausschnitte via ChatGPT auf Privatgeräten, fotografieren geschwärzte Dokumente ab oder setzen nicht genehmigte KI-Plugins ein.

5. The enterprise now has the worst of both worlds: AI productivity outside governance, and no production AI inside governance.
5. Das Unternehmen vereint das Schlechteste beider Welten: KI-Produktivität außerhalb der Governance und kein produktiver KI-Einsatz innerhalb der Governance.

---

### h2: The structural fix
### h2: Die strukturelle Lösung

Shadow AI does not get solved by policy enforcement alone — that is treating the symptom. The structural fix is an **AI enablement data layer** that lets official tooling handle real production data: encapsulate locally, process via approved external LLM (Path A) or on-prem local model (Path B), restore in-place. Once official tooling gives employees what they were tasting in pilots, shadow usage falls.
Shadow AI lässt sich nicht allein durch Richtliniendurchsetzung beheben — das behandelt nur das Symptom. Die strukturelle Lösung ist ein **AI enablement data layer**, der offizielle Werkzeuge befähigt, mit echten Produktionsdaten zu arbeiten: lokale Kapsulierung, Verarbeitung über ein zugelassenes externes LLM (Pfad A) oder ein lokales On-Premise-Modell (Pfad B), anschließend Wiederherstellung am ursprünglichen Ort. Sobald offizielle Werkzeuge das liefern, was Mitarbeitende in Pilotprojekten erlebt haben, sinkt die Shadow-Nutzung.

---

### h2: Where it shows up
### h2: Typische Auftrittsbereiche

**Telecom NOC analysts** pasting anonymized ticket excerpts into ChatGPT for RCA help.
**Telekommunikations-NOC-Analysten** fügen anonymisierte Ticket-Ausschnitte zur RCA-Unterstützung in ChatGPT ein.

**Hospital clinicians** using AI tools on personal devices for documentation drafts.
**Klinisches Personal in Krankenhäusern** nutzt KI-Werkzeuge auf Privatgeräten zur Dokumentationserstellung.

**Insurance underwriters** testing AI outputs on de-identified claim summaries.
**Underwriter** testen KI-Ausgaben auf de-identifizierten Schadenmeldungen.

**Legal associates** summarizing redacted contracts with consumer AI tools.
**Angestellte Rechtsanwälte** fassen geschwärzte Verträge mit öffentlich zugänglichen KI-Diensten zusammen.

**Engineers** using consumer AI tools on internal docs that contain sensitive identifiers.
**Ingenieure** verwenden frei verfügbare KI-Werkzeuge auf internen Dokumenten mit sensiblen Kennzeichnern.

---

### h2: Related terms (bodyHtml 내부)
### h2: Verwandte Begriffe

Blocked AI workflow
Blockierter KI-Workflow

AI enablement data layer
AI enablement data layer

Learn: Why enterprise AI pilots stall
Learn: Warum KI-Pilotprojekte in Unternehmen ins Stocken geraten

---

## Section 04: Related Terms

Related terms
Verwandte Begriffe

Blocked AI workflow
Blockierter KI-Workflow

/glossary/blocked-ai-workflow
/glossary/blocked-ai-workflow

AI enablement data layer
AI enablement data layer

/glossary/ai-enablement-data-layer
/glossary/ai-enablement-data-layer

Learn: Why enterprise AI pilots stall
Learn: Warum KI-Pilotprojekte in Unternehmen ins Stocken geraten

/learn/pilot-to-production-enterprise-ai
/learn/pilot-to-production-enterprise-ai
