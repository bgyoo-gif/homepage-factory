# where-to-run-enterprise-ai — Deutsche Übersetzung (localize)

## Section 01: Hero

← Learn
← Zurück

Where to Run Enterprise AI: External, On-Premise, or Both
KI im Unternehmen: extern, On-Premise oder beides

The deployment question for enterprise AI isn't binary. External LLMs, on-premise models, and hybrid topologies each fit a specific class of workflows — and most enterprises end up needing more than one. A decision framework.
Welches Betriebsmodell für KI passt zu welchem Workflow? Externe LLMs, On-Premise-Modelle und hybride Topologien erfüllen jeweils unterschiedliche Anforderungen. Die meisten Unternehmen brauchen am Ende mehr als eine Option. Ein Entscheidungsrahmen.

AI Architecture
KI-Architektur

~12 min read
~12 Min. Lesezeit

May 2026
Mai 2026

## Section 02: TL;DR

TL;DR
Kurzfassung

The deployment question isn't "external or on-premise" — it's which workflows belong where. A typical enterprise has dozens of workflows with different sensitivity, capability requirements, and constraints; forcing them into a single bucket produces architecture that's wrong for some of them. External LLMs offer frontier capability with contractual (not architectural) protection; on-premise solves data location by definition but lags the frontier by 12–18 months and is dominated by ongoing team cost. Hybrid isn't a compromise — it's the architecturally honest answer. Four questions (sensitivity, capability requirement, constraint structure, capability tolerance) sort workflows into four categories with different deployment fits. Hybrid works when four components are in place: a unified integration layer, policy-driven routing, a transformation layer for the external path, and shared governance. The failure modes of all-external (shadow AI) and all-on-premise (capability gap) share the same structure — a single-path policy that doesn't account for workflow heterogeneity gets bypassed in the workflows that don't fit. The realistic deployment for most regulated enterprises has both Path A (external + transformation) and Path B (on-premise) under one policy and audit framework.
Die eigentliche Frage lautet nicht „extern oder On-Premise", sondern: Welcher Workflow gehört wohin? Ein typisches Unternehmen hat Dutzende von Workflows mit unterschiedlicher Datensensibilität, unterschiedlichen Leistungsanforderungen und unterschiedlichen Restriktionen. Eine einheitliche Architektur für alle Workflows passt zwangsläufig für einen Teil davon nicht. Externe LLMs liefern Frontier-Leistung mit vertraglichem — nicht architektonischem — Schutz. On-Premise-Modelle lösen die Datenlokalisierung von vornherein, liegen aber typischerweise 12 bis 18 Monate hinter den führenden externen Modellen zurück, und die laufenden Teamkosten dominieren die Gesamtkosten. Hybrid ist kein Kompromiss, sondern die architektonisch ehrliche Antwort: Sie folgt dem tatsächlichen Aufbau unternehmerischer Workloads. Vier Fragen — Sensibilität, Leistungsanforderung, Restriktionsstruktur und Toleranz für Leistungseinbußen — sortieren Workflows in vier Kategorien mit unterschiedlichen Betriebsmodellen. Hybridbetrieb funktioniert, wenn vier Komponenten vorhanden sind: eine einheitliche Integrationsschicht, richtliniengesteuertes Routing, eine Transformationsschicht für den externen Pfad und ein gemeinsames Governance-Framework. Rein externe Architekturen erzeugen Shadow-KI; rein On-Premise-Architekturen erzeugen Leistungslücken — beide Fehlerbilder teilen dieselbe Struktur: Eine einheitliche Richtlinie, die Workflow-Heterogenität ignoriert, wird in den nicht passenden Workflows umgangen. Das realistische Betriebsmodell regulierter Unternehmen kombiniert Path A (extern mit Transformationsschicht) und Path B (On-Premise) unter einem gemeinsamen Richtlinien- und Audit-Framework.

## Section 03: Article Body

<h2>1. Die Entscheidung ist nicht binär — und die Rahmung, die sie binär macht, ist das Problem</h2>
<p>Die erste ernsthafte Frage, auf die ein Unternehmens-KI-Programm nach der anfänglichen Begeisterung stößt, lautet: Wo sollen die Modelle eigentlich laufen? Die Diskussion polarisiert sich schnell. Das Sicherheitsteam plädiert für On-Premise: Daten intern halten, die Frage grenzüberschreitender Übertragung eliminieren. Das Produktteam plädiert für externe Modelle: Die Frontier-Modelle leisten, was interne nicht können, und der technologische Rückstand ist gefährlicher als das kontrollierte Risiko. Das Plattformteam plädiert für das, was am schnellsten betriebsbereit ist. In den meisten Unternehmen dreht sich die Diskussion monatelang um dieses Dreieck, bis jemand bemerkt, dass <strong>die drei Positionen verschiedene Workflows beschreiben</strong> — und die richtige Antwort wahrscheinlich eine Kombination aus allen dreien ist.</p>
<p>Die meisten Gespräche über KI-Deployment beginnen mit einer einzigen Frage: <em>Sollen wir externe LLMs nutzen oder eigene betreiben?</em> Die Rahmung setzt voraus, dass die Antwort einheitlich für das gesamte Unternehmen gilt. <strong>Das tut sie nicht.</strong></p>
<p>Ein typisches Unternehmen hat Dutzende von Workflows, bei denen KI nützlich wäre. Einige davon — Marketingtexte verfassen, öffentliche Dokumente zusammenfassen, interne Schulungsinhalte erstellen — unterliegen keiner nennenswerten Datensensibilitätsbeschränkung. Die Daten dürfen überallhin gesendet werden. Die leistungsfähigsten Modelle, unabhängig vom Hosting-Ort, sind die richtige Wahl. Es gibt keinen betrieblichen Grund, interne Infrastruktur dafür zu betreiben.</p>
<p>Andere Workflows desselben Unternehmens — Verarbeitung von Kundenservice-Tickets, Analyse von Betriebsprotokollen, Erstellung klinischer Notizen, Prüfung von Kreditanträgen — unterliegen Restriktionen, die von vertraglichen Datenlokalisierungsverpflichtungen über sektorspezifische Datenhaltungsanforderungen bis hin zu internen Governance-Regeln reichen. Dasselbe Modell, das für Marketingtexte geeignet ist, ist für diese Workflows nicht geeignet. <strong>Die Wahl für diese Workflows ist real.</strong></p>
<p>Eine dritte Kategorie — klassifizierte Verteidigungsoperationen, rechtmäßige Abhördaten, bestimmte Szenarien im Gesundheitswesen — unterliegt Restriktionen, die schlicht keinen externen Endpunkt zulassen, unabhängig von Sicherheitsvorkehrungen. Die Wahl für diese Workflows ist ebenfalls real, aber eine andere.</p>
<p>Alle drei Kategorien als eine einzige Entscheidung zu behandeln führt zu schlechter Architektur. Entweder werden einfache Workflows übermäßig geschützt (betrieben auf interner Infrastruktur, die Betriebsaufwand kostet, ohne proportionalen Wert zu liefern), oder die schwierigen werden unzureichend geschützt (an externe Endpunkte gesendet, weil das die „KI-Strategie" des Unternehmens ist). <strong>Die realistische Antwort ist, für unterschiedliche Workflow-Kategorien unterschiedliche Entscheidungen zu treffen — und die Infrastruktur zu betreiben, die diese Entscheidungen nebeneinander ermöglicht.</strong></p>

<h2>2. Externe LLMs — Stärken und Grenzen</h2>
<p>Das Argument für externe LLMs ist einfach und sollte präzise formuliert werden. Die Frontier-Modelle — GPT-5-Klasse, Claude Opus-Klasse, Gemini Ultra-Klasse — operieren auf einem Leistungsniveau, das kein Unternehmen mit eigener Infrastruktur erreichen wird. Sie verfügen über Kontextfenster, die vollständige Dokumentenportfolios verarbeiten. Sie schlussfolgern über komplexe Strukturen mit einer Qualität, die kleinere Modelle nicht annähernd erreichen. Sie verbessern sich alle paar Monate, ohne dass das Unternehmen Kosten für Nachtraining trägt. <strong>Für Workflows, bei denen Leistungsfähigkeit zählt, ist das kein marginaler Vorteil. Es ist eine andere Kategorie von System.</strong></p>
<p>Die Kostenstruktur verdient ebenfalls Ehrlichkeit. Externe LLMs werden über APIs der Anbieter zugänglich gemacht, wobei das Modell auf der Infrastruktur des Anbieters, in dessen Rechenzentren, unter dessen Betriebskontrolle läuft. Das Unternehmen sendet Daten an diese Endpunkte und empfängt Antworten. Die vertraglichen Zusicherungen des Anbieters — Datenverarbeitungsverträge, regionale Endpunkte, Löschrichtlinien — beschreiben, was der Anbieter mit den Daten tun und nicht tun wird. <strong>Sie beschreiben nicht, was das Recht des Gastgeberlandes anderen Parteien gegebenenfalls erlaubt.</strong></p>
<p>Für Workflows, bei denen die Daten nicht sensibel sind, ist das kein Problem. Für Workflows, bei denen die Daten sensibel sind, der Datenlokalisierungskontext aber durch architektonische Maßnahmen erfüllbar ist (regionale Endpunkte, Transformation vor der Übertragung, unternehmenskontrolliertes Mapping), ist das lösbar.</p>
<p>Für Workflows, bei denen die Daten sensibel sind <em>und</em> die Restriktion darin besteht, dass keine Version der Daten — wie auch immer transformiert — an einen externen Endpunkt gesendet werden darf, sind externe LLMs keine Option. Einige Workflows fallen tatsächlich in diese Kategorie. <strong>Der Fehler liegt darin anzunehmen, dass alle sensiblen Workflows das tun.</strong></p>

<h2>3. On-Premise-LLMs — Stärken und Schwachstellen</h2>
<p>Das Argument für den Betrieb von Modellen auf interner Infrastruktur ist auf den ersten Blick ebenfalls einfach. Die Daten verlassen das Unternehmen nicht. Die vertraglichen Fragen zur grenzüberschreitenden Übertragung stellen sich schlicht nicht. Für Workflows unter absoluten Datenlokalisierungsrestriktionen — Verteidigung, bestimmte regulierte Bereiche im Gesundheitswesen, bestimmte Finanztransaktionssegmente — ist dies die einzige Option, und sie verdient ernsthafte Betrachtung.</p>
<p>Die Stärken sind real:</p>
<ul>
  <li><strong>Datenlokalisierung ist per Definition gelöst.</strong> Das Modell läuft dort, wo die Daten sind; die Frage der Übertragung stellt sich nicht. Für Workflows unter sektorspezifischen Verpflichtungen, die das Unternehmen an definierte Grenzen binden, passt dies sauber auf die Restriktion.</li>
  <li><strong>Betriebskontrolle ist vollständig.</strong> Das Modell kann unter den eigenen Change-Management-Prozessen des Unternehmens feinabgestimmt, evaluiert, überwacht und zurückgerollt werden. Es gibt keinen Anbieter auf der anderen Seite, der Modell-Updates durchführt, die das Unternehmen nicht genehmigt hat.</li>
  <li><strong>Latenz kann vorhersagbar gestaltet werden.</strong> Ein Modell, das im unternehmenseigenen Netzwerk läuft, vermeidet den Roundtrip zu einem externen Endpunkt — relevant für bestimmte Echtzeit-Workflows.</li>
</ul>
<p>Die Kosten sind ebenfalls real und werden von Teams, die noch keine KI-Infrastruktur in Produktion betrieben haben, häufig unterschätzt:</p>
<ul>
  <li><strong>Modellleistung bleibt zurück.</strong> Die Open-Source-Modelle, die ein Unternehmen praktikabel hosten kann — Llama, Mistral, Qwen und deren Nachfolger — sind gute Modelle. Sie sind zu keinem Zeitpunkt so leistungsfähig wie die externen Frontier-Modelle in den Dimensionen, die Unternehmen tatsächlich interessieren: Schlussfolgern über komplexe Dokumente, Umgang mit unbekannten Formaten, Langkontext-Analyse. Der Rückstand beträgt typischerweise zwölf bis achtzehn Monate und mag sich im Laufe der Zeit verringern, schließt sich aber nicht.</li>
  <li><strong>Die Betriebskosten sind hoch und kontinuierlich.</strong> Ein ernsthaftes Modell in Produktion zu betreiben bedeutet GPU-Infrastruktur, Model-Serving-Infrastruktur (vLLM, TGI oder Ähnliches), Evaluierungspipelines, Monitoring und das Team, das das alles am Laufen hält. <strong>Die Kosten werden nicht durch die GPUs dominiert, sondern durch das Team.</strong> Ein kleines KI-Infrastrukturteam für Enterprise-Serving umfasst fünf bis zehn Engineers; ein ernsthaftes Team ist doppelt so groß. Das Modell selbst ist der günstige Teil.</li>
  <li><strong>Die Schwachstelle zeigt sich bei Updates.</strong> Alle paar Monate machen die externen Frontier-Modelle Sprünge, die verändern, was Geschäftsbereiche erwarten. Das interne Modell, wie gut auch immer abgestimmt, macht diese Sprünge nicht. Die Lücke zwischen dem, was KI im öffentlichen Diskurs leisten kann, und dem, was die interne KI des Unternehmens leisten kann, wächst — und der Druck, etwas daran zu ändern, wächst mit ihr.</li>
</ul>
<p>Für Workflows, bei denen die Restriktion absolut ist — und bei denen der Workflow überschaubar genug ist, dass ein leistungsfähiges kleineres Modell ausreicht — <strong>ist On-Premise die richtige Antwort</strong>. Für Workflows, bei denen die Restriktion real, aber nicht absolut ist und die KI-Leistungsfähigkeit zählt, <strong>erzeugt allein On-Premise ein System, das funktioniert, aber zu wenig leistet</strong>.</p>

<h2>4. Hybrid — Kein Kompromiss, sondern die architektonisch ehrliche Antwort</h2>
<p>Die dritte Option — eine hybride Topologie zu betreiben, bei der einige Workflows zu externen Endpunkten gehen und andere auf interner Infrastruktur laufen — wird in Unternehmensgesprächen zu schnell abgetan. Die Ablehnung nimmt meist eine von zwei Formen an.</p>
<p>Die erste ist operativ: <em>„Beides zu betreiben ist komplexer als eines zu wählen, also sollten wir eines wählen."</em> Das stimmt, verfehlt aber den Punkt. Beides zu betreiben ist nicht komplexer, wenn die Workflows, die jeweils eines benötigen, verschiedene Workflows sind. Die Komplexität einer hybriden Topologie liegt in der Routing-Schicht, die entscheidet, welches Modell welchen Workflow erhält. <strong>Diese Routing-Schicht ist nicht optional</strong> — selbst ein rein externes oder rein On-Premise-Unternehmen hat eine, sie ist nur trivial — und sobald die Routing-Schicht existiert, ist die Unterstützung zweier Backends inkrementelle Komplexität, keine kategorische.</p>
<p>Die zweite ist Governance: <em>„Wir sollten eine einheitliche KI-Richtlinie haben."</em> Das stimmt ebenfalls und verfehlt ebenfalls den Punkt. Die einheitliche Richtlinie lautet nicht <em>„Alle KI läuft extern"</em> oder <em>„Alle KI läuft On-Premise."</em> Die einheitliche Richtlinie lautet: <em>„Workflows der Klasse X laufen extern mit diesen Sicherheitsvorkehrungen; Workflows der Klasse Y laufen On-Premise; das Routing wird erzwungen und auditiert."</em> Das ist eine kohärente Governance-Haltung — und die, zu der die meisten großen Unternehmen gelangen, ob sie dafür geplant haben oder nicht.</p>
<p>Was Hybrid zur architektonisch ehrlichen Antwort macht, ist, dass <strong>es der tatsächlichen Struktur unternehmerischer KI-Workloads entspricht</strong>. Einige Workflows profitieren massiv von Frontier-Leistungsfähigkeit und vertragen transformationsbasierte Sicherheitsvorkehrungen. Einige Workflows haben Restriktionen, die externe Endpunkte ausschließen — unabhängig von etwaigen Sicherheitsvorkehrungen. Alle Workflows in einen der Eimer zu zwingen erzeugt ein System, das für einige davon falsch ist. Hybrid gibt jedem Workflow das Deployment, das er benötigt.</p>
<p>Das Schwierige an Hybrid ist nicht, zwei Backends zu betreiben. <strong>Es ist, die Routing-Entscheidung präzise genug zu gestalten, dass Workflows dorthin gelangen, wo sie hingehören — mit durchgesetzter Richtlinie und einem klaren Audit-Trail, der es dem Team ermöglicht, die Entscheidungen später zu verteidigen.</strong> Das ist ein Designproblem, kein Infrastrukturproblem.</p>

<h2>5. Ein Entscheidungsrahmen für Workflows</h2>
<p>Ein hilfreicher Weg, die Entscheidung konkret zu machen, ist die Bewertung jedes Workflows anhand von vier Fragen:</p>
<ol>
  <li><strong>Wie sensibel sind die Daten, mit denen der Workflow operiert?</strong> Nicht die maximale Sensibilität irgendeiner Daten irgendwo im Unternehmen — die Sensibilität der spezifischen Daten, die dieser Workflow benötigt. Marketingtexte und Kundendatensätze sind verschiedene Workflows, auch wenn dieselbe Geschäftseinheit beide verantwortet.</li>
  <li><strong>Wie hoch ist der Leistungsanspruch der KI-Aufgabe?</strong> Einige Aufgaben — Klassifikation eingehender Tickets in zehn Kategorien, einfache Entitätsextraktion, Formatkonvertierung — funktionieren gut auf kleineren Modellen. Andere Aufgaben — Schlussfolgern über einen hundert Seiten langen Vertrag, Synthese von Ursachen aus heterogenen Protokollen, Erstellung klinischer Narrative — erfordern Frontier-Leistungsfähigkeit.</li>
  <li><strong>Wie ist die Restriktionsstruktur?</strong> Ist die Restriktion absolut (keine Version der Daten darf das Unternehmen verlassen) oder konditional (die Daten dürfen das Unternehmen verlassen, wenn sie entsprechend transformiert wurden)? Wird sie durch externe Verpflichtungen (Kundenvereinbarungen, DSGVO-konforme Sektorverpflichtungen) oder interne Governance (die eigene Datenhaltungsstrategie des Unternehmens) angetrieben?</li>
  <li><strong>Wie tolerant ist der Workflow gegenüber Leistungseinbußen?</strong> Einige Workflows liefern Wert mit einem Modell, das zwölf Monate hinter dem Frontier zurückliegt. Andere Workflows sind selbst die differenzierende Leistungsfähigkeit, die das Unternehmen aufzubauen versucht — und die Modelllücke ist die Lücke.</li>
</ol>
<p>Die Antworten gruppieren sich in grobe Kategorien:</p>
<table>
  <thead>
    <tr>
      <th>Workflow-Kategorie</th>
      <th>Beispiele</th>
      <th>Geeignetes Betriebsmodell</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Geringe Sensibilität, hoher Leistungsanspruch, keine Restriktion</td>
      <td>Marketingtexte, Zusammenfassungen öffentlicher Dokumente, interne Schulungsinhalte</td>
      <td>Externes LLM, ohne Transformation</td>
    </tr>
    <tr>
      <td>Sensibel, aber transformierbar; hoher Leistungsanspruch; konditionale Restriktion</td>
      <td>Kundenservice-Tickets, Betriebsprotokolle, Vertragsüberprüfung, klinische Notizen</td>
      <td>Externes LLM + Transformationsschicht (Path A)</td>
    </tr>
    <tr>
      <td>Sensibel, leistungstoleranter Workflow, absolute Restriktion</td>
      <td>Verteidigungsworkflows, bestimmte klassifizierte Kategorien, rechtmäßige Abhördaten</td>
      <td>On-Premise-Modell (Path B)</td>
    </tr>
    <tr>
      <td>Sensibel, hoher Leistungsanspruch, absolute Restriktion</td>
      <td>Die schwierigste Kategorie — die Lücke zwischen dem, was benötigt wird, und dem, was erlaubt ist</td>
      <td>Aufgabe eingrenzen, On-Premise-Leistungsfähigkeit abwarten oder die Lücke akzeptieren</td>
    </tr>
  </tbody>
</table>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" aria-labelledby="decision-framework-title decision-framework-desc">
      <title id="decision-framework-title">Workflow-Entscheidungsrahmen</title>
      <desc id="decision-framework-desc">Eine 2x2-Matrix, die Workflow-Restriktionsstruktur (konditional vs. absolut) gegen Leistungsanforderung (niedrig vs. Frontier) aufträgt, mit vier Quadranten, die das geeignete Betriebsmodell für jede Kombination zeigen.</desc>

      <defs>
        <marker id="arrow-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"/>
        </marker>
      </defs>

      <line x1="120" y1="420" x2="120" y2="50" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="60" y="240" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2" transform="rotate(-90, 60, 240)">LEISTUNGSANFORDERUNG</text>
      <text x="100" y="70" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Frontier</text>
      <text x="100" y="415" text-anchor="end" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Niedrig</text>

      <line x1="120" y1="420" x2="900" y2="420" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow-axis)"/>
      <text x="510" y="465" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">RESTRIKTIONSSTRUKTUR</text>
      <text x="320" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Gering oder konditional</text>
      <text x="700" y="440" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Absolut</text>

      <line x1="510" y1="50" x2="510" y2="420" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <line x1="120" y1="235" x2="900" y2="235" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>

      <rect x="140" y="60" width="350" height="160" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="160" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Extern + Transformationsschicht (Path A)</text>
      <text x="160" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Kundenservice-Tickets · Betriebsprotokolle</text>
      <text x="160" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Vertragsüberprüfung · klinische Notizen</text>
      <text x="160" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Sensibel, aber transformierbar; Restriktion</text>
      <text x="160" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">durch architektonische Maßnahmen erfüllbar.</text>

      <rect x="530" y="60" width="350" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="550" y="84" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Schwierigste Kategorie — keine saubere Lösung</text>
      <text x="550" y="108" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Hochkritische Verteidigungsanalyse · sensibles</text>
      <text x="550" y="124" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Gesundheitswesen mit Frontier-Anforderungen</text>
      <text x="550" y="156" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Aufgabe auf kleinere Modelle zuschneiden</text>
      <text x="550" y="170" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">oder Leistungslücke akzeptieren.</text>

      <rect x="140" y="245" width="350" height="160" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="160" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Externes LLM, ohne Transformation</text>
      <text x="160" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Marketingtexte · öffentliche Dokumente</text>
      <text x="160" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Zusammenfassungen · Schulungsinhalte</text>
      <text x="160" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Keine nennenswerte Datensensibilität;</text>
      <text x="160" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Daten können überallhin gesendet werden.</text>

      <rect x="530" y="245" width="350" height="160" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="1.5"/>
      <text x="550" y="269" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">On-Premise-Modell (Path B)</text>
      <text x="550" y="293" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Verteidigungsworkflows · klassifizierte</text>
      <text x="550" y="309" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">Kategorien · rechtmäßige Abhördaten</text>
      <text x="550" y="341" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">Workflow überschaubar genug, dass ein</text>
      <text x="550" y="355" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">leistungsfähiges kleineres Modell ausreicht.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Workflows auf zwei Achsen aufzutragen — Leistungsanforderung und Restriktionsstruktur — ergibt vier Betriebsmodelle. Die meisten Unternehmen haben Workflows in allen vier Quadranten.</strong></figcaption>
</figure>

<p><strong>Die meisten Unternehmen stellen fest, dass ihr Workflow-Bestand alle vier Kategorien umfasst. Die Deployment-Architektur muss alle vier abdecken — was standardmäßig Hybrid bedeutet.</strong></p>

<h2>6. Wie Hybrid in der Praxis aussieht</h2>
<p>Ein Hybrid-Deployment ist nicht <em>„Wir haben ein Modell hier und ein Modell dort."</em> Es ist eine Integrationsarchitektur, bei der <strong>die Routing-Entscheidung — welches Backend welche Anfrage bearbeitet — richtliniengesteuert, auditierbar und konsistent ist.</strong></p>
<p>Die Komponenten, die das ermöglichen:</p>
<p><strong>6.1 Eine einheitliche Integrationsschicht</strong></p>
<p>Workflows rufen nicht direkt den externen Endpunkt oder das On-Premise-Modell auf. Sie rufen eine Integrationsschicht auf, die das Routing übernimmt. Das bedeutet, dass <strong>Workflows gegenüber Änderungen in der Backend-Auswahl abgeschirmt sind</strong>. Wenn ein Workflow von extern auf On-Premise wechseln muss (aufgrund einer neuen Restriktion, eines Anbieterwechsels oder einer Richtlinienaktualisierung), ändert sich der Workflow nicht — die Routing-Regel tut es.</p>
<p><strong>6.2 Richtliniengesteuertes Routing</strong></p>
<p>Die Entscheidung, wo ein Workflow läuft, ist in einer Richtlinie kodiert, nicht im Code des Workflows selbst. <em>„Workflows, die als Kundenservice in der EU-Region gekennzeichnet sind, gehen zum externen Endpunkt mit der Transformationsschicht. Workflows, die als klassifiziert gekennzeichnet sind, gehen zum On-Premise-Modell. Workflows, die als Marketinginhalt gekennzeichnet sind, gehen ohne Transformation zum externen Endpunkt."</em> <strong>Die Richtlinie ist versioniert und auditierbar.</strong></p>
<p><strong>6.3 Eine Transformationsschicht für den externen Pfad</strong></p>
<p>Wenn Workflows zum externen Endpunkt geroutet werden, werden sensible Elemente vor der Übertragung transformiert und bei der Antwort wiederhergestellt. <strong>Dieselbe Transformationsinfrastruktur funktioniert unabhängig davon, welcher externe Endpunkt das Routing-Ziel ist</strong> — die Abstraktion liegt über dem Backend, nicht über einem spezifischen Anbieter.</p>
<p><strong>6.4 Gemeinsame Governance</strong></p>
<p>Die Audit-Protokolle, das Richtlinienmanagement, die Zugriffskontrollen decken beide Pfade einheitlich ab. <strong>Das Team hat nicht zwei Governance-Frameworks — eines für extern und eines für On-Premise. Es hat eines</strong>, mit dem Pfad jeder Anfrage aufgezeichnet.</p>
<p>Wenn diese vier Komponenten vorhanden sind, wird die Frage <em>„Wo soll dieser Workflow laufen?"</em> zu einer Richtlinienentscheidung statt zu einer Architekturverpflichtung. Der Workflow kann zwischen Pfaden wechseln, wenn sich Anforderungen ändern, ohne Integrationen neu schreiben zu müssen.</p>

<h2>7. Was schiefläuft, wenn ein Pfad als die gesamte Antwort behandelt wird</h2>
<p>Zwei Fehlermodi treten konsistent in Unternehmen auf, die sich auf einen einzigen Deployment-Pfad festlegen.</p>
<ul>
  <li><strong>Das rein externe Unternehmen.</strong> Ein Unternehmen, das entscheidet, externe LLMs seien die gesamte KI-Strategie, wird auf Workflows stoßen, die die Richtlinie nicht erlaubt — und eines von zwei Dingen passiert. Entweder erhalten diese Workflows keine KI (und das Unternehmen fällt bei den Aufgaben zurück, bei denen KI am meisten zählt), oder die Workflows erhalten KI über inoffizielle Kanäle — Mitarbeiter kopieren sensible Daten in Consumer-Chatbots, Geschäftsbereiche beschaffen KI-Tools außerhalb des zentralen Prozesses, Anbieter werden ohne das zentrale Sicherheitsreview integriert. <strong>Shadow-KI ist die vorhersehbare Konsequenz einer KI-Strategie, die Workflows nicht berücksichtigt, für die sie nicht passt.</strong></li>
  <li><strong>Das rein On-Premise-Unternehmen.</strong> Ein Unternehmen, das entscheidet, externe LLMs seien generell inakzeptabel, wird auf die Leistungslücke stoßen. Interne Modelle sind für einige Workflows gut genug und für andere nicht. Die Workflows, für die sie nicht gut genug sind, werden entweder zu wenig leisten (und die Wettbewerber des Unternehmens werden bei diesen Aufgaben vorausziehen), oder Geschäftsbereiche werden die Richtlinie über dieselben Shadow-Kanäle umgehen. <strong>Die Disziplin einer reinen On-Premise-Haltung ist schwerer aufrechtzuerhalten als sie aussieht — insbesondere wenn die externen Frontier-Modelle weiter voranschreiten.</strong></li>
</ul>
<p>Beide Fehlermodi teilen eine Struktur: <strong>Eine Richtlinie, die die Heterogenität unternehmerischer Workflows nicht berücksichtigt, wird in den Workflows umgangen, für die sie nicht passt — und der Umweg ist schwerer zu steuern, als der explizite Pfad gewesen wäre.</strong></p>

<h2>8. Die Architektur, zu der das führt</h2>
<p>Für die meisten regulierten Unternehmen hat das Deployment, das sich aus der Durcharbeitung dieser Fragen ergibt, einige konsistente Eigenschaften.</p>
<p>Es gibt ein Backend für externe LLMs, zugänglich über eine Transformationsschicht, die die Fälle behandelt, bei denen Datensensibilität es erfordert. Es gibt ein On-Premise-Modell — üblicherweise ein kleineres, gut gewähltes Open-Source-Modell — das Workflows behandelt, bei denen externe Endpunkte nicht infrage kommen. Es gibt eine Routing-Schicht, die richtlinienbasiert entscheidet, welcher Workflow wohin geht. Es gibt ein einheitliches Governance- und Audit-Framework, das beide Pfade abdeckt. <strong>Und es gibt die Erkenntnis, dass dies kein abgeschlossener Zustand ist</strong> — Workflows wechseln zwischen Pfaden, wenn sich Restriktionen ändern, neue externe Modelle verfügbar werden, neue On-Premise-Leistungsfähigkeiten reifen und sich die eigene Datenstrategie des Unternehmens weiterentwickelt.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="hybrid-architecture-title hybrid-architecture-desc">
      <title id="hybrid-architecture-title">Hybride Deployment-Architektur — Path A und Path B</title>
      <desc id="hybrid-architecture-desc">Ein Diagramm, das zeigt, wie Unternehmens-Workflows in eine einheitliche Integrationsschicht mit richtliniengesteuertem Routing fließen und sich dann in Path A (externes LLM über Transformationsschicht) und Path B (On-Premise-Modell) aufteilen, beide unter gemeinsamer Governance.</desc>

      <defs>
        <marker id="arrow-primary-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
        <marker id="arrow-ink-pb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f1130"/>
        </marker>
      </defs>

      <g>
        <rect x="40" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="140" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Marketing &amp; öffentliche Dokumente</text>
        <text x="140" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">geringe Sensibilität</text>

        <rect x="260" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="360" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Kundenbetrieb &amp; Klinik</text>
        <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">sensibel, aber transformierbar</text>

        <rect x="480" y="30" width="200" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="580" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Verteidigung &amp; klassifiziert</text>
        <text x="580" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">absolute Restriktion</text>

        <rect x="700" y="30" width="220" height="48" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="810" y="51" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#0f1130">Weitere Workflows</text>
        <text x="810" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">unterschiedliche Sensibilität</text>
      </g>

      <line x1="140" y1="82" x2="220" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="360" y1="82" x2="370" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="580" y1="82" x2="540" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>
      <line x1="810" y1="82" x2="700" y2="125" stroke="#0f1130" stroke-width="1.2" marker-end="url(#arrow-ink-pb)"/>

      <g>
        <rect x="180" y="130" width="560" height="68" rx="10" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
        <text x="200" y="154" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EINHEITLICHE INTEGRATIONSSCHICHT</text>
        <text x="460" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Richtliniengesteuertes Routing</text>
        <text x="460" y="194" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#9ca3af" font-style="italic">versioniert · erzwungen · auditierbar</text>
      </g>

      <line x1="320" y1="200" x2="220" y2="240" stroke="#5b4fe9" stroke-width="1.8" marker-end="url(#arrow-primary-pb)"/>
      <text x="240" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#5b4fe9">Path A</text>

      <line x1="600" y1="200" x2="700" y2="240" stroke="#0ea5a4" stroke-width="1.8" marker-end="url(#arrow-teal-pb)"/>
      <text x="660" y="225" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#0b7f7e">Path B</text>

      <g>
        <rect x="40" y="248" width="420" height="120" rx="10" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">PATH A · EXTERN + TRANSFORMATIONSSCHICHT</text>

        <rect x="60" y="288" width="180" height="64" rx="6" fill="#ffffff" stroke="#5b4fe9" stroke-width="1"/>
        <text x="150" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Transformationsschicht</text>
        <text x="150" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Tokenisierung · Strukturerhalt</text>
        <text x="150" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Wiederherstellung</text>

        <rect x="260" y="288" width="180" height="64" rx="6" fill="#0f1130" stroke="#0f1130" stroke-width="1"/>
        <text x="350" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#ffffff">Externes Frontier-LLM</text>
        <text x="350" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">ChatGPT · Claude</text>
        <text x="350" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#9ca3af">Gemini · weitere</text>

        <line x1="244" y1="312" x2="256" y2="312" stroke="#5b4fe9" stroke-width="1.5"/>
        <line x1="244" y1="328" x2="256" y2="328" stroke="#5b4fe9" stroke-width="1.5"/>
      </g>

      <g>
        <rect x="500" y="248" width="420" height="120" rx="10" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="520" y="272" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">PATH B · ON-PREMISE LOKALES MODELL</text>

        <rect x="520" y="288" width="380" height="64" rx="6" fill="#ffffff" stroke="#0ea5a4" stroke-width="1"/>
        <text x="710" y="310" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0f1130">Lokales Modell auf Unternehmensinfrastruktur</text>
        <text x="710" y="324" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Llama · Mistral · Qwen — feinabgestimmt</text>
        <text x="710" y="336" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#6b7280">Daten verlassen die Grenze nicht</text>
      </g>

      <g>
        <rect x="40" y="394" width="880" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="416" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#b45309" letter-spacing="1.2">GEMEINSAME GOVERNANCE</text>
        <text x="480" y="423" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#0f1130">Eine Richtlinie · ein Audit-Protokoll · ein Zugriffskontroll-Framework — für beide Pfade</text>
      </g>

      <line x1="250" y1="368" x2="250" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="368" x2="710" y2="392" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 2 · <strong>Workflows fließen durch eine einheitliche Integrationsschicht, die richtlinienbasiert routet — Path A (externes LLM über Transformationsschicht) oder Path B (lokales On-Premise-Modell) — beide unter gemeinsamer Governance.</strong></figcaption>
</figure>

<p><span class="wtre-product">LLM Capsule</span> unterstützt beide Pfade als Teil einer einzigen Architektur: <strong>Path A</strong> routet Workflows über die Transformationsschicht zu einem zugelassenen externen LLM, die Tokenisierung, Strukturerhalt und Wiederherstellung innerhalb der Unternehmensumgebung übernimmt; <strong>Path B</strong> routet Workflows zu einem lokalen On-Premise-Modell, wenn externe Endpunkte nicht infrage kommen. Dieselbe Transformationsschicht, dasselbe Richtlinien-Framework und dieselbe Governance decken beide Pfade ab. <strong>Die Deployment-Entscheidung wird zur Richtlinienwahl pro Workflow — nicht zur Architekturverpflichtung für das gesamte Unternehmen.</strong></p>

<div class="takeaways">
  <div class="takeaways__label">Wichtigste Erkenntnisse</div>
  <ul>
    <li>Die Deployment-Frage ist nicht binär — verschiedene Workflows haben unterschiedliche Datensensibilität, Leistungsanforderungen und Restriktionen; eine einheitliche Richtlinie ist für einen Teil davon falsch</li>
    <li>Externe LLMs liefern Frontier-Leistungsfähigkeit mit vertraglichem — nicht architektonischem — Schutz: geeignet für wenig sensible Workflows, lösbar mit einer Transformationsschicht bei konditionalen Restriktionen, ausgeschlossen bei absoluten Restriktionen</li>
    <li>On-Premise löst die Datenlokalisierung per Definition, liegt aber 12–18 Monate hinter dem Frontier zurück; die dominierenden Kosten sind das Team (mindestens 5–10 Engineers), nicht die GPUs</li>
    <li>Hybrid ist die architektonisch ehrliche Antwort — sie entspricht der tatsächlichen Struktur unternehmerischer Workloads, statt sie in einen Eimer zu zwingen</li>
    <li>Vier Fragen sortieren Workflows in vier Kategorien: Sensibilität, Leistungsanforderung, Restriktionsstruktur (absolut vs. konditional), Toleranz für Leistungseinbußen</li>
    <li>Funktionierende Hybridarchitektur erfordert vier Komponenten: einheitliche Integrationsschicht, richtliniengesteuertes Routing, Transformationsschicht für den externen Pfad, gemeinsame Governance</li>
    <li>Rein externe Unternehmen erzeugen Shadow-KI; rein On-Premise-Unternehmen erzeugen Leistungslücken — beide Fehlermodi sind umgangene Richtlinien</li>
    <li>Path A (extern + Transformationsschicht) und Path B (On-Premise) unter einem gemeinsamen Richtlinien- und Audit-Framework ist das Deployment, bei dem die meisten regulierten Unternehmen landen — geplant oder nicht</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Warum ist die Deployment-Entscheidung nicht einfach extern oder On-Premise?</h3>
<p>Weil ein typisches Unternehmen Dutzende von Workflows mit unterschiedlicher Datensensibilität, unterschiedlichen Leistungsanforderungen und unterschiedlichen Restriktionen hat. Marketingtexte und Kundenservice-Tickets sind verschiedene Workflows, auch wenn dieselbe Geschäftseinheit beide verantwortet. Alle als eine Entscheidung zu behandeln führt entweder zur Überabsicherung einfacher Workflows (Betrieb auf interner Infrastruktur, die Aufwand kostet, ohne proportionalen Wert zu liefern) oder zur Unterabsicherung schwieriger Workflows (Senden an externe Endpunkte, weil das die „KI-Strategie" des Unternehmens ist). Die realistische Antwort sind unterschiedliche Entscheidungen für unterschiedliche Workflow-Kategorien.</p>

<h3>Worin liegen Stärken und Grenzen externer LLMs?</h3>
<p>Externe Frontier-Modelle (GPT-5-Klasse, Claude Opus-Klasse, Gemini Ultra-Klasse) operieren auf einem Leistungsniveau, das kein Unternehmen intern erreichen wird — lange Kontextfenster, komplexes Dokumenten-Schlussfolgern, kontinuierliche Verbesserung ohne Nachtraining. Für Workflows, bei denen Leistungsfähigkeit zählt, ist das eine andere Systemkategorie. Die Grenze liegt darin, dass das Modell auf der Infrastruktur des Anbieters unter dessen vertraglichen Zusicherungen — nicht architektonischen Garantien — läuft. Für Workflows, bei denen Datensensibilität jeden externen Endpunkt unabhängig von Sicherheitsvorkehrungen ausschließt, sind externe LLMs keine Option.</p>

<h3>Wann ist On-Premise die richtige Antwort?</h3>
<p>Wenn die Restriktion absolut ist — Verteidigung, bestimmte klassifizierte Kategorien, Workflows, bei denen keine Version der Daten das Unternehmen verlassen darf — und der Workflow überschaubar genug ist, dass ein leistungsfähiges kleineres Modell ausreicht. Die Stärken sind real: Datenlokalisierung per Definition gelöst, vollständige Betriebskontrolle, vorhersagbare Latenz. Die Kosten sind ebenfalls real und werden häufig unterschätzt: Leistungsrückstand von zwölf bis achtzehn Monaten gegenüber Frontier-Modellen, kontinuierliche Betriebskosten dominiert durch das Team (mindestens fünf bis zehn Engineers) und Anfälligkeit, wenn externe Frontier-Modelle vorausspringen.</p>

<h3>Ist eine hybride Topologie nicht komplexer als die Wahl eines einzigen Pfades?</h3>
<p>Nur oberflächlich. Beides zu betreiben ist nicht komplexer, wenn die Workflows, die jeweils eines benötigen, verschiedene Workflows sind — und das sind sie. Die Komplexität des Hybrid-Betriebs liegt in der Routing-Schicht, die entscheidet, welches Modell welchen Workflow erhält. Diese Routing-Schicht ist nicht optional; selbst rein externe oder rein On-Premise-Unternehmen haben eine, sie ist nur trivial. Sobald die Routing-Schicht existiert, ist die Unterstützung zweier Backends inkrementelle Komplexität, keine kategorische. Das Schwierige ist, die Routing-Entscheidung präzise genug zu gestalten, dass Workflows dorthin gelangen, wo sie hingehören — mit durchgesetzter Richtlinie und klarem Audit-Trail.</p>

<h3>Wie entscheidet man, welcher Workflow wohin geht?</h3>
<p>Jeden Workflow gegen vier Fragen evaluieren. <strong>Datensensibilität</strong> (der spezifischen Daten, die dieser Workflow benötigt — nicht des Maximums irgendwo im Unternehmen). <strong>Leistungsanforderung</strong> (erfordert die Aufgabe Frontier-Schlussfolgern, oder reicht ein kleineres Modell aus). <strong>Restriktionsstruktur</strong> (absolut oder konditional; durch externe Verpflichtungen oder interne Governance getrieben). <strong>Toleranz für Leistungseinbußen</strong>. Die Antworten gruppieren sich: geringe Sensibilität geht extern, transformierbar mit hohem Leistungsanspruch geht extern mit Transformation, absolute Restriktion mit überschaubarem Workflow geht On-Premise, absolute Restriktion mit hohem Leistungsanspruch ist die schwierigste — heute manchmal nicht vollständig lösbar.</p>

<h3>Was läuft bei einem rein externen oder rein On-Premise-Ansatz schief?</h3>
<p>Rein externe Unternehmen stoßen auf Workflows, die die Richtlinie nicht erlaubt — entweder erhalten diese Workflows keine KI (und das Unternehmen fällt bei den Aufgaben zurück, bei denen KI am meisten zählt) oder sie erhalten KI über inoffizielle Kanäle. Shadow-KI ist die vorhersehbare Konsequenz. Rein On-Premise-Unternehmen stoßen auf die Leistungslücke; interne Modelle sind für einige Workflows gut genug und für andere nicht — und Geschäftsbereiche umgehen die Richtlinie über dieselben Shadow-Kanäle. Beide Fehlermodi teilen eine Struktur: Eine Richtlinie, die Workflow-Heterogenität nicht berücksichtigt, wird in den nicht passenden Workflows umgangen.</p>

<h3>Wie sieht eine funktionierende Hybridarchitektur tatsächlich aus?</h3>
<p>Vier Komponenten. <strong>Eine einheitliche Integrationsschicht</strong> (Workflows rufen diese Schicht auf, nicht die Backends direkt, sodass sie gegenüber Routing-Änderungen abgeschirmt sind). <strong>Richtliniengesteuertes Routing</strong> (die Entscheidung, wo ein Workflow läuft, ist in einer Richtlinie kodiert — versioniert und auditierbar, nicht im Workflow hart kodiert). <strong>Eine Transformationsschicht für den externen Pfad</strong> (sensible Elemente werden vor der Übertragung transformiert und bei der Antwort wiederhergestellt, abstrahiert über dem jeweiligen externen Anbieter). <strong>Gemeinsame Governance</strong> (ein Audit-Protokoll, ein Richtlinien-Framework, ein Zugriffskontrollmodell für beide Pfade einheitlich). Wenn alle vier vorhanden sind, wird der Betriebsort eines Workflows zur Richtlinienentscheidung statt zur Architekturverpflichtung.</p>

## Section 04: Related Articles

Related articles
Verwandte Artikel

Running External LLMs on Data Your Company Can't Send Externally
Externe LLMs auf Daten einsetzen, die das Unternehmen nicht weitergeben darf

When AI Must Run Without Network Access
Wenn KI ohne Netzwerkzugang betrieben werden muss

Routing AI Workflows Between Cloud and Local Models
KI-Workflows zwischen Cloud- und lokalen Modellen routen
