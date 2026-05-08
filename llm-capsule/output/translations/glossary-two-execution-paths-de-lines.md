# GlossaryPage_TwoExecutionPaths — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

Two Execution Paths
Zwei Ausführungspfade

External approved LLM — or on-prem local lightweight model. Policy decides per workflow.
Externes zugelassenes LLM oder lokales On-Premise-Leichtgewichtsmodell. Welcher Pfad zum Einsatz kommt, legt die Richtlinie je Workflow fest.

GLOSSARY
GLOSSAR

---

## Section 02: Definition

Definition
Definition

Two execution paths in the AI enablement data layer. Path A sends capsule data to an external approved LLM with no raw operational data exposure. Path B runs a small private lightweight model entirely inside the enterprise environment with zero external transmission. Selection is policy-driven per workflow.
Die AI enablement data layer unterstützt zwei Ausführungspfade. Pfad A übermittelt ausschließlich Capsule-Daten an ein externes, zugelassenes LLM — operative Rohdaten verlassen das Unternehmen nicht. Pfad B führt ein kompaktes privates Modell vollständig innerhalb der eigenen Unternehmensumgebung aus, ohne jegliche externe Datenübertragung. Die Pfadauswahl erfolgt richtliniengesteuert je Workflow.

---

## Section 03: Body HTML

### h2: Definition

Die AI enablement data layer unterstützt **zwei Ausführungspfade** für den Modellschritt im Workflow:

**Pfad A — externes zugelassenes LLM, ausschließlich mit Capsule-Daten.** Die Kapsel wird an einen zugelassenen externen Endpunkt übermittelt (ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM API). Operative Rohdaten verlassen das Unternehmen nicht.

**Pfad B — lokales On-Premise-Leichtgewichtsmodell.** Ein kompaktes privates Modell wird vollständig innerhalb der Unternehmensumgebung ausgeführt. Keine externe Datenübertragung.

---

### h2: Einsatzkriterien

Factor / Path A / Path B
Kriterium / Pfad A / Pfad B

Externe Übertragung zulässig / Ja (nur Kapsel) / Nein

Air-Gapped-Netzwerk / — / Erforderlich

Frontier-Modell-Kapazität / Ja / Durch lokales Modell begrenzt

Compliance-Profil / „Keine Rohdaten-Offenlegung" / „Zero Exposure"

---

### h2: Pfadauswahl

Die Auswahl erfolgt richtliniengesteuert je Workflow. Verschiedene Workflows desselben Unternehmens können unterschiedliche Pfade verwenden. Das Governance-System protokolliert den angewendeten Pfad je Anfrage, je Workflow und je Richtlinie.

---

### h2: Warum zwei Pfade notwendig sind

Ein einzelner Pfad erzwingt eine einheitliche regulatorische Mindestanforderung. Versicherungsträger, Krankenhäuser, OT-Betreiber und Rüstungsunternehmen verwalten innerhalb derselben Organisation typischerweise mehrere regulatorische Profile. Zwei Pfade ermöglichen es dem Governance-System, den jeweils passenden Pfad dem entsprechenden Workflow zuzuweisen.

---

### h2: Leitsatz

Das Modell ist keine einheitliche Entscheidung — es sind zwei Pfade unter einer gemeinsamen Governance. Das ist es, was die AI enablement data layer für regulierte Organisationen geeignet macht, ohne sie auf eine einzige regulatorische Ebene festzulegen.

---

## Section 04: Related Terms

Related terms
Verwandte Begriffe

Pillar guide: On-prem LLM execution path
Pillar Guide: On-Premise-LLM-Ausführungspfad

/resources/learn/on-prem-llm-execution-path
/resources/learn/on-prem-llm-execution-path

State vault for restoration
State Vault for Restoration

/resources/glossary/state-vault-for-restoration
/resources/glossary/state-vault-for-restoration

AI enablement data layer
AI enablement data layer

/resources/glossary/ai-ready-operational-layer
/resources/glossary/ai-ready-operational-layer
