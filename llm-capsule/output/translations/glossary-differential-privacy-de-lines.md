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


<h2>Funktionsweise</h2>

<p>Die Methode fügt kalibriertes Rauschen (typischerweise nach Laplace- oder Gaußverteilung) zu Ausgaben, Abfragen oder Transformationen hinzu. Die Rauschstärke ergibt sich aus der Sensitivität der Funktion und dem festgelegten Privacy-Budget. Das Ergebnis ist eine quantitative Schranke dafür, was ein Angreifer aus der Ausgabe über einzelne Datensätze ableiten kann.</p>

<h2>Einsatz im AI enablement data layer</h2>

<p>In LLM Capsule wird Differential-Privacy-basierter Schutz während des strukturerhaltenden Kapsulierungsschritts angewendet. Die Kapsel (KI-geeigneter Kontext) trägt die Differential-Privacy-Garantie zusätzlich zur feldbasierten Tokenisierung. Damit werden Inferenzrisiken adressiert, die durch feldbasiertes Masking allein nicht gebunden werden können — insbesondere bei operativen Daten, deren Struktur, Sequenz und Aggregatmuster selbst sensible Informationen enthalten.</p>

<h2>Was es nicht ist</h2>

<ul>
<li>Keine rechtliche oder regulatorische Garantie. Es handelt sich um ein technisches Rahmenwerk mit einem einstellbaren Parameter.</li>
<li>Keine Ja/Nein-Aussage. Datenschutz und Datennutzbarkeit sind über das Privacy-Budget gegeneinander abzuwägen.</li>
<li>Kein Ersatz für Governance, Auditierung oder Richtlinien.</li>
</ul>

<h2>Relevanz im Unternehmenseinsatz</h2>

<p>Operative Daten — Netzwerkprotokolle, Konfigurationen, OT-Manifeste, klinische Workflows — lassen sich über Muster rekonstruieren, nicht nur über direkte Identifikatoren. Differential Privacy bietet den Rahmen, mit dem Unternehmens-Governance das Datenabfluss-Risiko quantitativ bewerten und ein Budget pro Workflow durchsetzen kann.</p>

<h2>Zulässige Aussagen</h2>

<ul>
<li>„Datenschutzerhaltend mit definiertem Risikominderungsumfang"</li>
<li>„Begrenztes Inferenzrisiko innerhalb des Policy-Privacy-Budgets"</li>
<li>„Differential-Privacy-basierte Kapsulierung"</li>
</ul>

<h2>Zu vermeidende Aussagen</h2>

<ul>
<li>„Mathematisch unmöglich zu rekonstruieren"</li>
<li>„100 % sicher"</li>
<li>„DSGVO-konformität garantiert"</li>
<li>„Null-Risiko"</li>
</ul>

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
