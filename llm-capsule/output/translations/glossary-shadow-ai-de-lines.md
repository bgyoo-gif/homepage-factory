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

Shadow AI is the unsanctioned use of external LLMs by enterprise employees outside approved channels — typically because the official AI tooling cannot handle the regulated data the work actually depends on. The root cause is not employee misbehavior; it is a missing context-preserving data layer for AI. Employees taste productivity in pilots and early demos, then route around the controls when production tooling fails to deliver.
Shadow AI bezeichnet die nicht autorisierte Nutzung externer LLMs durch Unternehmensmitarbeitende außerhalb genehmigter Kanäle. Die eigentliche Ursache liegt nicht im Fehlverhalten der Mitarbeitenden, sondern im Fehlen eines context-preserving data layer for AI: Offizielle KI-Werkzeuge können die regulierten Daten, auf die Arbeitsprozesse tatsächlich angewiesen sind, nicht verarbeiten. Mitarbeitende, die in Pilotprojekten Produktivitätsgewinne erlebt haben, suchen nach Wegen, die Einschränkungen zu umgehen, sobald die Produktivsysteme diese Gewinne nicht einlösen.

---

## Section 03: Body HTML


<h2>Entstehungsursachen</h2>

<p>Shadow AI ist ein Symptom, keine Ursache. Das typische Muster:</p>

<ol>
<li>Ein Unternehmen pilotiert KI mit synthetischen Daten. Mitarbeitende erleben messbare Produktivitätssteigerungen.</li>
<li>Der Pilotbetrieb gerät in der Sicherheitsprüfung ins Stocken, weil echte Produktionsdaten nicht an externe LLMs übermittelt werden dürfen.</li>
<li>Der Pilotbetrieb wird auf eine kaum verwendbare Datenteilmenge beschränkt. Die Produktivitätsgewinne entfallen.</li>
<li>Mitarbeitende, die die Produktivitätssteigerung bereits erlebt haben, suchen nach Alternativen: Sie verarbeiten anonymisierte Ausschnitte via ChatGPT auf Privatgeräten, fotografieren geschwärzte Dokumente ab oder setzen nicht genehmigte KI-Plugins ein.</li>
<li>Das Unternehmen vereint das Schlechteste beider Welten: KI-Produktivität außerhalb der Governance und kein produktiver KI-Einsatz innerhalb der Governance.</li>
</ol>

<h2>Die strukturelle Lösung</h2>

<p>Shadow AI lässt sich nicht allein durch Richtliniendurchsetzung beheben — das behandelt nur das Symptom. Die strukturelle Lösung ist ein <strong>context-preserving data layer for AI</strong>, der offizielle Werkzeuge befähigt, mit echten Produktionsdaten zu arbeiten: lokale Kapsulierung, Verarbeitung über ein zugelassenes externes LLM (Pfad A) oder ein lokales On-Premise-Modell (Pfad B), anschließend Wiederherstellung am ursprünglichen Ort. Sobald offizielle Werkzeuge das liefern, was Mitarbeitende in Pilotprojekten erlebt haben, sinkt die Shadow-Nutzung.</p>

<h2>Typische Auftrittsbereiche</h2>

<ul>
<li><strong>Telekommunikations-NOC-Analysten</strong> fügen anonymisierte Ticket-Ausschnitte zur RCA-Unterstützung in ChatGPT ein.</li>
<li><strong>Klinisches Personal in Krankenhäusern</strong> nutzt KI-Werkzeuge auf Privatgeräten zur Dokumentationserstellung.</li>
<li><strong>Underwriter</strong> testen KI-Ausgaben auf de-identifizierten Schadenmeldungen.</li>
<li><strong>Angestellte Rechtsanwälte</strong> fassen geschwärzte Verträge mit öffentlich zugänglichen KI-Diensten zusammen.</li>
<li><strong>Ingenieure</strong> verwenden frei verfügbare KI-Werkzeuge auf internen Dokumenten mit sensiblen Kennzeichnern.</li>
</ul>

<h2>Verwandte Begriffe</h2>

<ul>
<li>Blockierter KI-Workflow</li>
<li>context-preserving data layer for AI</li>
<li>Learn: Warum KI-Pilotprojekte in Unternehmen ins Stocken geraten</li>
</ul>

## Section 04: Related Terms

Related terms
Verwandte Begriffe

Blocked AI workflow
Blockierter KI-Workflow

/glossary/blocked-ai-workflow
/glossary/blocked-ai-workflow

context-preserving data layer for AI
context-preserving data layer for AI

/glossary/context-preserving-data-layer
/glossary/context-preserving-data-layer

Learn: Why enterprise AI pilots stall
Learn: Warum KI-Pilotprojekte in Unternehmen ins Stocken geraten

/learn/pilot-to-production-enterprise-ai
/learn/pilot-to-production-enterprise-ai
