# GlossaryPage_StateVaultForRestoration — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

State Vault for Restoration
State Vault for Restoration

The local-only store that turns AI output back into business-ready output.
Der lokal betriebene Datenspeicher, der KI-Ausgaben in direkt nutzbare Arbeitsergebnisse überführt.

GLOSSARY
GLOSSAR

---

## Section 02: Definition

Definition
Definition

The state vault is the local-only store that holds the token map between original operational identifiers and capsule tokens. It enables AI outputs to be restored back into the originating workflow with original identifiers — inside the enterprise — without the external LLM ever seeing the originals.
Der State Vault ist ein ausschließlich lokal betriebener Datenspeicher, der das Token-Mapping zwischen den ursprünglichen operativen Kennzeichnern und den Capsule-Tokens verwaltet. Er ermöglicht die Wiederherstellung von KI-Ausgaben in den ursprünglichen Workflow mit den Originalkennzeichnern — innerhalb der Unternehmensinfrastruktur — ohne dass das externe LLM die Originaldaten jemals einsehen kann.

---

## Section 03: Body HTML


<h2>Gespeicherte Inhalte</h2>

<ul>
<li>Token-Mapping: Capsule-Tokens ↔ ursprüngliche operative Kennzeichner</li>
<li>Workflow-Kontext: Zuordnung jeder Kapsel zu einem Vorfall, Ticket oder Runbook</li>
<li>Policy-Referenz: welche Markierungsrichtlinie auf diese Kapsel angewendet wurde</li>
<li>Privacy-Budget-Referenz: welchen Anteil des DP-Budgets dieses Workflows die Kapsel verbraucht hat</li>
</ul>

<h2>Betriebsort</h2>

<p>Der State Vault verbleibt ausnahmslos in der lokalen Unternehmensinfrastruktur. Das Token-Mapping überschreitet zu keinem Zeitpunkt die externe Grenze. In Pfad A (externes, zugelassenes LLM) erhält das Modell ausschließlich Capsule-Tokens; die Wiederherstellung erfolgt durch den State Vault erst nach Rückgabe der Antwort. In Pfad B (lokales On-Premise-Leichtgewichtsmodell) verbleibt die gesamte Verarbeitung Ende-zu-Ende innerhalb der eigenen Infrastruktur.</p>

<h2>Relevanz im Betrieb</h2>

<p>Ohne Wiederherstellung liefert das KI-System lediglich unverwertbare Token-Ausgaben. Das Operations-Team benötigt das Ergebnis als verwertbares Artefakt im ursprünglichen Workflow: eine Ticket-Aktualisierung mit echten Geräte-IDs, einen Runbook-Schritt mit dem tatsächlichen Standortverweis, eine RCA mit dem konkreten Vorfallsbezug. Der State Vault ist die Komponente, die dies ermöglicht — ohne dass die Originaldaten das Modell jemals erreichen.</p>

<h2>Ausgaben des State Vault</h2>

<ul>
<li>Wiederhergestellte RCA, eingefügt in das Ticket-System</li>
<li>Wiederhergestellter Runbook-Schritt, eingefügt in das Runbook</li>
<li>Wiederhergestellte Zusammenfassung, eingefügt in das KIS oder Krankenhausportal</li>
<li>Wiederhergestellte Einsatzzusammenfassung, eingefügt in das Einsatzsystem (nur Pfad B)</li>
<li>Wiederhergestellter Compliance-Prüfentwurf, eingefügt in den Prüfworkflow</li>
</ul>

<h2>Nachvollziehbarkeit</h2>

<p>Jede Wiederherstellung wird protokolliert. Das Revisionsprotokoll erfasst die Kapsel, die angewendete Richtlinie, den genutzten Ausführungspfad, die Token-Mapping-Operationen sowie das Ziel der wiederhergestellten Ausgabe. Compliance-Verantwortliche können jedes wiederhergestellte Feld lückenlos auf seine Kapsel und die zugehörige Richtlinie zurückverfolgen.</p>

<h2>Leitsatz</h2>

<p>Die Kapsel ist das, was das KI-Modell verarbeitet. Der State Vault ist das, was der Fachbereich erhält. Die Grenze zwischen beiden ist die operative Gewährleistung.</p>

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

Capsule token
Capsule-Token

/glossary/capsule-token
/glossary/capsule-token

Two execution paths
Zwei Ausführungspfade

/glossary/two-execution-paths
/glossary/two-execution-paths

Differential privacy
Differential Privacy

/glossary/differential-privacy
/glossary/differential-privacy
