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

## Section 03: Body HTML

<h2>Warum zwei Ausführungspfade notwendig sind</h2>

<p>Unternehmen verfügen selten über ein einheitliches regulatorisches Profil. Ein Telekommunikationsanbieter kann NOC-Analysen über Pfad A und sicherheitskritische Incident-Workflows über Pfad B abwickeln. Ein Krankenhaus kann Pfad A für Routinedokumentation und Pfad B für die klinische Entscheidungsunterstützung nutzen. Ein Rüstungsunternehmen kann ausschließlich Pfad B einsetzen. Ein einziger Ausführungspfad erzwingt einen einzigen regulatorischen Mindeststandard. Zwei Pfade ermöglichen es der Governance, den Pfad dem Workflow anzupassen.</p>

<h2>Pfad A — externes zugelassenes LLM, ausschließlich mit Kapseldaten</h2>

<p>Die Kapsel (strukturerhaltend, Differential-Privacy-geschützt) wird an einen zugelassenen externen LLM-Endpunkt übertragen — ChatGPT, Claude, Gemini, Perplexity oder eine beliebige LLM API. <strong>Operative Rohdaten verlassen die Unternehmensumgebung nicht.</strong> Nur die Kapsel wird übertragen. Das LLM verarbeitet die Kapsel und liefert eine tokenisierte Antwort zurück. Der State Vault stellt die Antwort innerhalb der Unternehmensumgebung wieder her.</p>

<ul>
<li><strong>Stärke:</strong> Zugang zu leistungsfähigen Frontier-Modellen</li>
<li><strong>Einschränkung:</strong> Erfordert einen zugelassenen externen LLM-Endpunkt und richtlinienkonforme Freigabe</li>
</ul>

<h2>Pfad B — lokales On-Premise-Leichtgewichtmodell</h2>

<p>Ein kleines, privates Leichtgewichtmodell läuft vollständig innerhalb der Unternehmensumgebung. Die Kapsel wird lokal verarbeitet. <strong>Keine externe Datenübertragung.</strong> Einsatz bei Air-Gapped-Netzwerken, klassifizierten Betriebsumgebungen, OT-Umgebungen und streng regulierten Bereichen, in denen jeder externe Endpunkt ausgeschlossen ist.</p>

<ul>
<li><strong>Stärke:</strong> Keine externe Datenübertragung, vollständige Datenresidenz</li>
<li><strong>Einschränkung:</strong> Modellleistung ist durch den lokalen Modell-Footprint begrenzt</li>
</ul>

<div class="callout"><strong>Interne Bezeichnung.</strong> Das interne Team verwendet gelegentlich den Begriff „10G" — in der öffentlichen Dokumentation werden die Begriffe <em>lokales On-Premise-Modell</em>, <em>kleines privates Modell</em>, <em>lokaler Inferenzpfad</em> oder <em>On-Premise-/lokaler Ausführungspfad</em> verwendet. Die genaue Modellgröße ist eine Deployment-Entscheidung, die von Hardware und Workflow abhängt.</div>

<h2>Pfadauswahl: ein Entscheidungsrahmen</h2>

<table>
<thead><tr><th>Faktor</th><th>Pfad A</th><th>Pfad B</th></tr></thead>
<tbody>
<tr><td>Externe Übertragung zulässig</td><td>Ja (nur Kapsel)</td><td>Nein</td></tr>
<tr><td>Air-Gapped-Netzwerk</td><td>Nicht anwendbar</td><td>Erforderlich</td></tr>
<tr><td>Frontier-Modell-Leistung</td><td>Ja</td><td>Durch lokales Modell begrenzt</td></tr>
<tr><td>Latenzprofil</td><td>Variabel (netzwerkabhängig)</td><td>Lokal, vorhersehbar</td></tr>
<tr><td>Compliance-Posture</td><td>„Keine Offenlegung von Rohdaten"</td><td>„Keine externe Datenübertragung"</td></tr>
</tbody>
</table>

<h2>Deployment-Topologien</h2>

<h3>On-Premise</h3>
<p>Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden innerhalb des unternehmenseigenen Rechenzentrums bereitgestellt. Pfad B ist der Standard. Pfad A ist nur verfügbar, wenn ein zugelassener externer Endpunkt durch Richtlinie freigegeben wurde.</p>

<h3>Air-Gapped</h3>
<p>Capsule Runtime und lokales On-Premise-Leichtgewichtmodell werden in einem vollständig isolierten Netzwerk betrieben. Pfad A ist konstruktionsbedingt nicht verfügbar. Pfad B übernimmt alle Workflows. Typisch für klassifizierte Operationen, Verteidigung und streng regulierte OT-Umgebungen.</p>

<h3>Hybrid</h3>
<p>Capsule Runtime On-Premise; beide Pfade aktiv. Richtlinien steuern die Zuordnung einzelner Workflows. Typisch für Telekommunikation und Finanzwesen, wo einige Workflows externe Endpunkte tolerieren und andere lokale Ausführung erfordern.</p>

<h3>In-Region (Datensouveränität)</h3>
<p>Capsule Runtime und Leichtgewichtmodell werden in einer bestimmten Region bereitgestellt (z. B. EU für DSGVO (GDPR)-pflichtige Workloads). Pfad A kann ebenfalls auf in-regionsspezifische externe Endpunkte beschränkt werden. Typisch für multinationale Unternehmen mit regionalen Datenhaltungspflichten.</p>

<h3>Cloud (AWS Marketplace)</h3>
<p>Capsule Runtime wird über den AWS Marketplace bereitgestellt. Das Cloud-Konto des Kunden hostet sowohl die Runtime als auch das lokale Leichtgewichtmodell. Pfad A optional, abhängig von der Richtlinie.</p>

<h3>Embedded Integration</h3>
<p>Capsule SDK wird in eine bestehende Anwendung eingebettet (NOC-Konsole, Ticket-System, Krankenhausportal, Missionssystem). Beide Pfade werden unterstützt; die eingebettete Anwendung wählt den Pfad je Workflow.</p>

<h3>Slack App</h3>
<p>Capsule-Plug-in für Slack-Workflows. Pfad A typisch für allgemeine Teams; Pfad B für regulierte Teams, die Slack als UI-Schicht über einer On-Premise-Runtime nutzen.</p>

<h2>Technischer Ablauf innerhalb von Pfad B</h2>

<ol>
<li>Der Connector Lane leitet operative Daten an die Capsule Runtime weiter (REST, Webhook, Log Tap, SDK).</li>
<li>Strukturerhaltende Kapsulierung — Operative Kennungen werden tokenisiert, Sequenz und Struktur bleiben erhalten.</li>
<li>Differential-Privacy-basierter Schutz begrenzt das Inferenzrisiko auf der Kapsel.</li>
<li>Die Kapsel wird an das lokale Leichtgewichtmodell im selben Netzwerk übermittelt.</li>
<li>Das Modell erzeugt eine tokenisierte Ausgabe.</li>
<li>Der State Vault stellt die originalen operativen Kennungen in der Ausgabe wieder her.</li>
<li>Das Ergebnis wird in den ursprünglichen Workflow zurückgeführt (Ticket, Runbook, EHR, Missionszusammenfassung).</li>
<li>Governance-Protokollierung — Pfad, angewandte Richtlinie und Prüfpfad werden aufgezeichnet.</li>
</ol>

<p><strong>Kein Schritt in Pfad B verlässt die Unternehmensgrenze.</strong></p>

<h2>Die Zero Exposure-Aussage — korrekt abgegrenzt</h2>

<p>"Zero Exposure" ist eine Aussage, die eines definierten Geltungsbereichs bedarf, um belastbar zu sein. Die von LLM Capsule verwendeten abgegrenzten Formulierungen:</p>

<ul>
<li><strong>Pfad A:</strong> „Keine Offenlegung operativer Rohdaten gegenüber externen LLMs."</li>
<li><strong>Pfad B:</strong> „Keine externe Datenübertragung beim On-Premise-/lokalen Ausführungspfad."</li>
</ul>

<p>Die Verwendung von „Zero Exposure" als übergeordnetem Slogan ohne Geltungsbereich ist zu vermeiden. Die technische Garantie ist pfadspezifisch und richtlinienabhängig.</p>

<h2>Bewertungskriterien für Einkäufer</h2>

<ol>
<li><strong>Pfadabdeckung.</strong> Werden beide Pfade unterstützt oder nur einer?</li>
<li><strong>Granularität der Pfadzuweisung.</strong> Können verschiedene Workflows unter derselben Governance unterschiedliche Pfade nutzen?</li>
<li><strong>Lokaler Modell-Footprint.</strong> Welche Hardware wird für das On-Premise-Leichtgewichtmodell benötigt?</li>
<li><strong>Air-Gapped-Unterstützung.</strong> Ist die Runtime ohne externe Konnektivität vollständig betriebsfähig?</li>
<li><strong>State Vault lokal.</strong> Bleibt der State Vault auch bei Pfad A lokal?</li>
<li><strong>Pfad-Audit.</strong> Wird der angewandte Pfad je Anfrage, je Workflow und je Richtlinie protokolliert?</li>
</ol>

<div class="takeaways">
<div class="takeaways__h">Kernaussagen</div>
<ul>
<li>Zwei Ausführungspfade in einer KI-Datenschicht: externes zugelassenes LLM mit Kapsel (Pfad A) oder lokales On-Premise-Leichtgewichtmodell (Pfad B).</li>
<li>Pfad B bewältigt Air-Gapped-, klassifizierte, OT- und streng regulierte Betriebsumgebungen ohne externe Datenübertragung.</li>
<li>Die Pfadauswahl erfolgt richtliniengesteuert je Workflow; die Governance protokolliert den angewandten Pfad.</li>
<li>Sechs Deployment-Topologien: On-Premise, Air-Gapped, Hybrid, In-Region, Cloud, Embedded Integration, Slack App.</li>
<li>Die Zero Exposure-Aussage ist pfadgebunden: „Keine Offenlegung von Rohdaten gegenüber externen LLMs" (Pfad A) oder „Keine externe Datenübertragung" (Pfad B).</li>
</ul>
</div>

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
