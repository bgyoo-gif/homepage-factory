# GlossaryPage_DifferentialPrivacy — Deutsche Übersetzung (localize)

## Section 01: Hero

← Glossary
← Glossar

Differential Privacy
Differential Privacy

A mathematical framework that bounds the contribution of any single record to a derived output.
Ein mathematisches Rahmenwerk, das den Einfluss einzelner Datensätze auf abgeleitete Ausgaben quantitativ begrenzt.

GLOSSARY
GLOSSAR

---

## Section 02: Definition

Definition
Definition

Differential privacy (DP) is a mathematical framework for protecting individual records when computing on a dataset. Introduced by Cynthia Dwork and colleagues in 2006, it formalizes the intuition that an analysis is private if its outcome would be almost the same whether or not any single record were included. The "almost" is parameterized by epsilon — smaller epsilon, stronger privacy, lower utility.
Differential Privacy (DP) ist ein mathematisches Rahmenwerk zum Schutz einzelner Datensätze bei der Auswertung von Datensätzen. Das Konzept wurde 2006 von Cynthia Dwork und Kollegen eingeführt und formalisiert die Anforderung, dass eine Analyse als privat gilt, wenn ihr Ergebnis nahezu unabhängig davon ist, ob ein bestimmter Datensatz enthalten ist oder nicht. Das "nahezu" wird durch den Parameter Epsilon gesteuert — ein kleinerer Epsilon-Wert bedeutet stärkeren Datenschutz bei geringerer Datennutzbarkeit.

---

## Section 03: Body HTML

### h2: Mechanism
### h2: Funktionsweise

Implemented by adding calibrated noise (commonly Laplace or Gaussian) to outputs, queries, or transformations. Noise scale is determined by the sensitivity of the function and the privacy budget. The result is a quantitative bound on what an attacker could learn about any individual record from the output.
Die Methode fügt kalibriertes Rauschen (typischerweise nach Laplace- oder Gaußverteilung) zu Ausgaben, Abfragen oder Transformationen hinzu. Die Rauschstärke ergibt sich aus der Sensitivität der Funktion und dem festgelegten Privacy-Budget. Das Ergebnis ist eine quantitative Schranke dafür, was ein Angreifer aus der Ausgabe über einzelne Datensätze ableiten kann.

---

### h2: Application in the AI enablement data layer
### h2: Einsatz im AI enablement data layer

In LLM Capsule, differential-privacy-based protection is applied during the structure-preserving encapsulation step. The capsule (AI-ready context) carries the differential-privacy guarantee on top of field-level tokenization. This addresses inference risks that field-level masking alone cannot bound — particularly for operational data where structure, sequence, and aggregate patterns themselves carry sensitive information.
In LLM Capsule wird Differential-Privacy-basierter Schutz während des strukturerhaltenden Kapsulierungsschritts angewendet. Die Kapsel (KI-geeigneter Kontext) trägt die Differential-Privacy-Garantie zusätzlich zur feldbasierten Tokenisierung. Damit werden Inferenzrisiken adressiert, die durch feldbasiertes Masking allein nicht gebunden werden können — insbesondere bei operativen Daten, deren Struktur, Sequenz und Aggregatmuster selbst sensible Informationen enthalten.

---

### h2: What it is not
### h2: Was es nicht ist

Not a legal or compliance guarantee. It is a technical framework with a tunable parameter.
Keine rechtliche oder regulatorische Garantie. Es handelt sich um ein technisches Rahmenwerk mit einem einstellbaren Parameter.

Not a yes/no guarantee. Privacy and utility trade off via the privacy budget.
Keine Ja/Nein-Aussage. Datenschutz und Datennutzbarkeit sind über das Privacy-Budget gegeneinander abzuwägen.

Not a substitute for governance, audit, or policy.
Kein Ersatz für Governance, Auditierung oder Richtlinien.

---

### h2: Why it matters here
### h2: Relevanz im Unternehmenseinsatz

Operational data — network logs, configurations, OT manifests, clinical workflows — leaks through patterns, not just identifiers. Differential privacy is the framework that lets enterprise governance reason quantitatively about that leakage risk and enforce a budget per workflow.
Operative Daten — Netzwerkprotokolle, Konfigurationen, OT-Manifeste, klinische Workflows — lassen sich über Muster rekonstruieren, nicht nur über direkte Identifikatoren. Differential Privacy bietet den Rahmen, mit dem Unternehmens-Governance das Datenabfluss-Risiko quantitativ bewerten und ein Budget pro Workflow durchsetzen kann.

---

### h2: Acceptable claims
### h2: Zulässige Aussagen

"Privacy-preserving with a defined risk-reduction scope"
„Datenschutzerhaltend mit definiertem Risikominderungsumfang"

"Bounded inference risk under the policy's privacy budget"
„Begrenztes Inferenzrisiko innerhalb des Policy-Privacy-Budgets"

"Differential-privacy-based encapsulation"
„Differential-Privacy-basierte Kapsulierung"

---

### h2: Claims to avoid
### h2: Zu vermeidende Aussagen

"Mathematically impossible to reconstruct"
„Mathematisch unmöglich zu rekonstruieren"

"100% safe"
„100 % sicher"

"GDPR guaranteed"
„DSGVO-konformität garantiert"

"Zero risk"
„Null-Risiko"

---

## Section 04: Related Terms

Related terms
Verwandte Begriffe

Pillar guide: Differential privacy for enterprise AI
Leitfaden: Differential Privacy für den KI-Einsatz im Unternehmen

/resources/learn/differential-privacy-for-enterprise-llm
/resources/learn/differential-privacy-for-enterprise-llm

Structure-preserving encapsulation
Strukturerhaltende Kapsulierung

/glossary/structure-preserving-encapsulation
/glossary/structure-preserving-encapsulation

AI enablement data layer
AI enablement data layer

/glossary/ai-ready-operational-layer
/glossary/ai-ready-operational-layer
