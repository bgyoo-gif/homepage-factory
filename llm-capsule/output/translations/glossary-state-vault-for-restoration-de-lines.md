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

### h2: What it stores
### h2: Gespeicherte Inhalte

Token map: capsule tokens ↔ original operational identifiers
Token-Mapping: Capsule-Tokens ↔ ursprüngliche operative Kennzeichner

Workflow context: which capsule belongs to which incident, ticket, or runbook
Workflow-Kontext: Zuordnung jeder Kapsel zu einem Vorfall, Ticket oder Runbook

Policy reference: which marker policy applied to this capsule
Policy-Referenz: welche Markierungsrichtlinie auf diese Kapsel angewendet wurde

Privacy budget reference: how much of the workflow's DP budget this capsule consumed
Privacy-Budget-Referenz: welchen Anteil des DP-Budgets dieses Workflows die Kapsel verbraucht hat

---

### h2: Where it lives
### h2: Betriebsort

Always local. The token map never traverses the external boundary. In Path A (external approved LLM), the LLM sees only capsule tokens; the state vault rehydrates after the response returns. In Path B (on-prem local lightweight model), everything is local end to end.
Der State Vault verbleibt ausnahmslos in der lokalen Unternehmensinfrastruktur. Das Token-Mapping überschreitet zu keinem Zeitpunkt die externe Grenze. In Pfad A (externes, zugelassenes LLM) erhält das Modell ausschließlich Capsule-Tokens; die Wiederherstellung erfolgt durch den State Vault erst nach Rückgabe der Antwort. In Pfad B (lokales On-Premise-Leichtgewichtsmodell) verbleibt die gesamte Verarbeitung Ende-zu-Ende innerhalb der eigenen Infrastruktur.

---

### h2: Why it matters
### h2: Relevanz im Betrieb

Without restoration, AI outputs are stuck as token salad. The operations team needs the result as a usable artifact in the originating workflow — a ticket update with real device IDs, a runbook step referencing the actual site, an RCA pointing to the actual incident reference. The state vault is what makes that possible while keeping the originals out of the model.
Ohne Wiederherstellung liefert das KI-System lediglich unverwertbare Token-Ausgaben. Das Operations-Team benötigt das Ergebnis als verwertbares Artefakt im ursprünglichen Workflow: eine Ticket-Aktualisierung mit echten Geräte-IDs, einen Runbook-Schritt mit dem tatsächlichen Standortverweis, eine RCA mit dem konkreten Vorfallsbezug. Der State Vault ist die Komponente, die dies ermöglicht — ohne dass die Originaldaten das Modell jemals erreichen.

---

### h2: Outputs the state vault produces
### h2: Ausgaben des State Vault

Restored RCA inserted into the ticket system
Wiederhergestellte RCA, eingefügt in das Ticket-System

Restored runbook step inserted into the runbook
Wiederhergestellter Runbook-Schritt, eingefügt in das Runbook

Restored summary inserted into the EHR or hospital portal
Wiederhergestellte Zusammenfassung, eingefügt in das KIS oder Krankenhausportal

Restored mission summary inserted into the command system (Path B only)
Wiederhergestellte Einsatzzusammenfassung, eingefügt in das Einsatzsystem (nur Pfad B)

Restored compliance review draft inserted into the review workflow
Wiederhergestellter Compliance-Prüfentwurf, eingefügt in den Prüfworkflow

---

### h2: Auditability
### h2: Nachvollziehbarkeit

Every restoration is logged. The audit trail records the capsule, the policy applied, the path used, the token map operations, and the destination of the restored output. Compliance teams can trace any restored field back to its capsule and policy.
Jede Wiederherstellung wird protokolliert. Das Revisionsprotokoll erfasst die Kapsel, die angewendete Richtlinie, den genutzten Ausführungspfad, die Token-Mapping-Operationen sowie das Ziel der wiederhergestellten Ausgabe. Compliance-Verantwortliche können jedes wiederhergestellte Feld lückenlos auf seine Kapsel und die zugehörige Richtlinie zurückverfolgen.

---

### h2: Reference statement
### h2: Leitsatz

The capsule is what the AI sees. The state vault is what the business sees. The boundary between them is the operational guarantee.
Die Kapsel ist das, was das KI-Modell verarbeitet. Der State Vault ist das, was der Fachbereich erhält. Die Grenze zwischen beiden ist die operative Gewährleistung.

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
