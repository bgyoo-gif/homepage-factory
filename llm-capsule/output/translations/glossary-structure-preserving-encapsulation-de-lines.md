# GlossaryPage_StructurePreservingEncapsulation — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

Structure-Preserving Encapsulation
Strukturerhaltende Kapsulierung

Tokenize the identifiers. Preserve the structure. So the AI can still reason — and the result can still be restored.
Operative Kennzeichner werden tokenisiert, die relationale Struktur bleibt vollständig erhalten. Das KI-Modell kann weiterhin schlussfolgern — und die Ausgabe lässt sich im Unternehmen vollständig wiederherstellen.

GLOSSARY
GLOSSAR

---

## Section 02: Definition

Definition
Definition

Structure-preserving encapsulation is the transformation step in an AI enablement data layer that converts operational data into AI-ready context. It tokenizes operational identifiers (device IDs, site IDs, asset references, customer segments) while preserving the relational structure the LLM needs to reason — table layout, log sequence, document hierarchy, configuration tree, topology graph.
Die strukturerhaltende Kapsulierung ist der Transformationsschritt innerhalb eines AI enablement data layer, der operative Daten in KI-gerechten Kontext überführt. Operative Kennzeichner — Geräte-IDs, Standort-IDs, Asset-Referenzen, Kundensegmente — werden tokenisiert. Die relationale Struktur, die das LLM zur Inferenz benötigt, bleibt dabei unverändert erhalten: Tabellenlayout, Log-Sequenz, Dokumenthierarchie, Konfigurationsbaum und Topologiegraph.

---

## Section 03: Body HTML

### h2: Why structure preservation matters
### h2: Warum die Strukturerhaltung entscheidend ist

An LLM asked to draft an RCA from an alarm sequence cannot reason if the sequence is destroyed. An LLM asked to compare two configuration trees cannot compare if the tree relationships are flattened. Structure preservation is what makes the capsule useful to the model, not just safe.
Ein LLM, das eine RCA aus einer Alarmmeldungssequenz erstellen soll, kann keine Schlussfolgerungen ziehen, wenn die Sequenz zerstört wurde. Ein LLM, das zwei Konfigurationsbäume vergleichen soll, kann keinen Vergleich durchführen, wenn die Baumbeziehungen eingeebnet wurden. Die Strukturerhaltung macht die Kapsel für das Modell nutzbar — nicht nur sicher.

---

### h2: What gets tokenized
### h2: Was tokenisiert wird

Operational identifiers: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF
Operative Kennzeichner: DEVICE_ID, SITE_ID, CIRCUIT_ID, ASSET_ID, MISSION_REF

Customer references and segments
Kundenreferenzen und -segmente

Free-text fields with mixed identifiers (NER masking)
Freitextfelder mit gemischten Kennzeichnern (NER-Maskierung)

Sensitive attribute values (under DP budget)
Sensible Attributwerte (im Rahmen des DP-Budgets)

---

### h2: What gets preserved
### h2: Was erhalten bleibt

Time order of events
Zeitliche Reihenfolge von Ereignissen

Cause-effect relationships in incident sequences
Ursache-Wirkungs-Beziehungen in Vorfallssequenzen

Document structure (sections, lists, tables)
Dokumentstruktur (Abschnitte, Listen, Tabellen)

Configuration tree (parent-child, dependencies)
Konfigurationsbaum (Eltern-Kind-Beziehungen, Abhängigkeiten)

Topology graph (nodes, edges, paths)
Topologiegraph (Knoten, Kanten, Pfade)

---

### h2: Used together with
### h2: Zusammenwirken mit weiteren Komponenten

Differential privacy — bounds inference risk on the capsule
Differential Privacy — begrenzt das Inferenzrisiko der Kapsel

State vault for restoration — restores tokens to original values inside the enterprise
State Vault for Restoration — führt die Token unternehmensintern auf ihre Originalwerte zurück

Two execution paths — Path A or Path B per workflow policy
Two execution paths — Pfad A oder Pfad B gemäß Workflow-Richtlinie

---

### h2: Reference statement
### h2: Leitsatz

Structure-preserving encapsulation makes the capsule useful. Differential-privacy-based protection makes it defensible. State vault makes it restorable. Together, they constitute the AI enablement data layer.
Die strukturerhaltende Kapsulierung macht die Kapsel nutzbar. Der auf Differential Privacy basierende Schutz macht sie verteidigbar. Der State Vault macht sie wiederherstellbar. Zusammen bilden sie den AI enablement data layer.

---

## Section 04: Related Terms

Related terms
Verwandte Begriffe

Differential privacy
Differential Privacy

/glossary/differential-privacy
/glossary/differential-privacy

State vault for restoration
State Vault for Restoration

/glossary/state-vault-for-restoration
/glossary/state-vault-for-restoration

Two execution paths
Zwei Ausführungspfade

/glossary/two-execution-paths
/glossary/two-execution-paths

AI enablement data layer
AI enablement data layer

/glossary/ai-enablement-data-layer
/glossary/ai-enablement-data-layer
