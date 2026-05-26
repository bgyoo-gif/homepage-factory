# external-llm-on-sensitive-enterprise-data — Deutsche Übersetzung (localize)

## Section 01: Hero

← Learn
← Zurück

Running External LLMs on Data Your Company Can't Send Externally
Externe LLMs auf Daten einsetzen, die das Unternehmen nicht weitergeben darf

Most enterprise AI workflows stall when external LLMs require data the company can't expose. A look at the architectural patterns that move past the stall — and what trade-offs each one carries.
Viele KI-Projekte in Unternehmen scheitern nicht an fehlender Technologie, sondern an Datenschutzvorgaben. Dieser Artikel beschreibt die gängigen Architekturansätze — und zeigt, wo jeder einzelne an seine Grenzen stößt.

AI Architecture
KI-Architektur

~10 min read
~10 Min. Lesezeit

May 2026
Mai 2026

## Section 02: TL;DR

TL;DR
Kurzfassung

External LLMs produce measurably better output than what most enterprises can run internally — but regulated companies can't send their actual operational data to them. The three standard responses — send and accept the risk, mask and redact, or run an on-premise model — each break at a predictable point. A different approach changes what crosses the boundary rather than whether to cross it: sensitive elements are replaced with structure-preserving tokens inside the enterprise environment, the external LLM works on the tokenised version, and the response is reconstructed internally. The original data never leaves; the frontier-model capability is preserved. This isn't universal — it fits analytical workflows where sensitive elements are identifiable in advance, not personalisation or verification tasks that require the literal identifier. Four design properties define a sound implementation: transformation inside the enterprise environment, exclusive enterprise control of the mapping, a sensitivity definition that evolves with the business, and reconstruction that runs as infrastructure rather than as a manual step.
Externe LLMs liefern messbar bessere Ergebnisse als intern betriebene Modelle — doch regulierte Unternehmen können ihre operativen Daten nicht an externe Dienste weitergeben. Die drei gängigen Reaktionen — Daten senden und Risiko akzeptieren, Maskierung und Schwärzung, oder vollständige On-Premise-Bereitstellung — scheitern jeweils an vorhersehbaren Punkten. Ein anderer Ansatz verändert nicht, ob die Grenze überschritten wird, sondern was sie überschreitet: Sensible Inhalte werden innerhalb der Unternehmensumgebung durch strukturerhaltende Token ersetzt. Das externe LLM verarbeitet die tokenisierte Variante; die Antwort wird intern wiederhergestellt. Die Originaldaten verlassen das Unternehmen nicht. Die Leistungsfähigkeit der führenden Modelle bleibt erhalten. Dieser Ansatz ist nicht universell einsetzbar — er eignet sich für analytische Workflows, bei denen sensible Elemente vorab identifizierbar sind, nicht jedoch für Personalisierungs- oder Verifikationsaufgaben, die den tatsächlichen Identifikator erfordern. Vier Designeigenschaften kennzeichnen eine solide Implementierung: Transformation innerhalb der Unternehmensumgebung, ausschließliche Kontrolle des Mappings durch das Unternehmen, eine mit dem Geschäft weiterentwickelte Sensitivitätsdefinition und Wiederherstellung als Infrastrukturkomponente — nicht als manueller Schritt.

## Section 03: Article Body

<h2>1. Der stille Widerspruch im Kern der Unternehmens-KI</h2>
<p>Im Jahr 2026 stehen viele Unternehmen vor einem strukturellen Problem, das selten offen benannt wird.</p>
<p>Externe Large Language Models — ChatGPT, Claude, Gemini und andere — erzielen messbar bessere Ergebnisse als intern betriebene Modelle. Sie bewältigen Kontextfenster, an denen interne Systeme scheitern. Sie verbessern sich alle paar Monate, ohne dass das Unternehmen Kosten für Nachtraining trägt. Nach den meisten Kriterien, die für Unternehmen relevant sind, sind sie die naheliegende Wahl.</p>
<p>Und dennoch: In einer Vielzahl regulierter Unternehmen dürfen diese Modelle rechtlich oder vertraglich keinen Zugriff auf die Daten erhalten, auf denen der Betrieb tatsächlich basiert. Kundendaten können nicht an US-gehostete Endpunkte übermittelt werden. Betriebsprotokolle unterliegen sektorspezifischen Datenhaltungsanforderungen. Dokumente enthalten Bezeichner, bei denen vertragliche Vereinbarungen eine Weitergabe außerhalb definierter Grenzen ausschließen. <strong>Die Daten, bei denen KI den größten Nutzen entfalten würde, sind genau die, die sie nicht einsehen darf.</strong></p>
<p>Das Ergebnis ist ein Muster, das CIOs in europäischen Banken, Versicherungen, Telekommunikationsunternehmen und Krankenhäusern kennen. Pilotprojekte laufen auf synthetischen oder anonymisierten Stichproben. Die Benchmarks sehen vielversprechend aus. Der Vorstand wird informiert, dass KI kommt. Dann trifft der Produktivbetrieb auf Daten, die im Piloten nicht berücksichtigt wurden — und der Workflow kommt zum Stillstand. Einige Teams geben auf. Andere entwickeln interne LLMs, die die Erwartungen nicht erfüllen. Wieder andere leiten Daten still über Kanäle um, die dafür nicht vorgesehen sind — ein Phänomen, das heute als <em>Shadow-KI</em> bezeichnet wird.</p>
<p>Dieser Artikel beschreibt die drei gängigen Ansätze, die KI-Teams als erstes ausprobieren, zeigt auf, wo jeder einzelne versagt, und stellt einen anderen Ansatz vor — einen, der in produktiven Deployments in Telekommunikation, Gesundheitswesen, Finanzwesen und Verteidigung eingesetzt wird und die eigentliche Frage neu formuliert.</p>

<h2>2. Warum dieses Problem schwieriger ist als es aussieht</h2>
<p>Die erste Reaktion beim Auftreten dieses Problems ist meist der Griff zu einem verfügbaren Werkzeug: einer Datenmaskierungsbibliothek, einer PII-Erkennungs-API oder einer privaten Bereitstellung eines Open-Source-Modells. Jedes dieser Werkzeuge löst einen Teil des Problems — und scheitert an einem anderen Punkt im Workflow.</p>
<p>Der Grund liegt darin, dass Unternehmensdaten nicht so strukturiert sind, wie die Werkzeuge es voraussetzen. Ein Datenschutz-Tool für Verbraucher geht davon aus, dass der sensible Teil eines Datensatzes ein Name, eine E-Mail-Adresse oder eine Telefonnummer ist — Felder, die erkannt und ersetzt werden können. Ein Unternehmensdokument hingegen ist ein Service-Ticket mit zwölf Querverweisfeldern, einer Freitextbeschreibung mit Kundenformulierungen, einem angehängten Protokollauszug und Verweisen auf interne Asset-IDs. <strong>Sensible Informationen liegen ebenso in der Struktur wie in den Einzelfeldern.</strong> Wird die Struktur entfernt, verliert die KI die Grundlage ihrer Arbeit.</p>
<p>Hinzu kommt: Datenhaltungsanforderungen in Unternehmen betreffen oft weniger die Art der Daten als ihren Übertragungsweg. Ein Dokument kann intern legal verarbeitbar, aber nicht in ein Drittland übermittelbar sein — aufgrund von Kundenverpflichtungen, sektorspezifischen Datenhaltungsregeln oder der eigenen Datenschutzstrategie. Die Einschränkung ist geografischer und vertraglicher Natur, nicht nur kategorialer.</p>
<p>Das ist die tatsächliche Situation, vor der KI-Teams in Unternehmen stehen: strukturierte operative Daten, die für KI <em>gerade wegen ihrer Detailtiefe</em> wertvoll sind, gebunden durch Anforderungen, die ihre Weitergabe verhindern — während die leistungsfähigsten Modelle jenseits dieser Grenze verfügbar sind.</p>

<h2>3. Die drei gängigen Ansätze — und wo jeder versagt</h2>
<p>Die meisten Diskussionen über Unternehmens-KI münden in einen von drei Ansätzen. Jeder ist für sich genommen nachvollziehbar. Keiner davon führt allein zu produktionsreifen Workflows, wenn es auf sie ankommt.</p>

<h3>3.1 Ansatz 1 — Daten übermitteln und Risiko akzeptieren</h3>
<p>Der einfachste Ansatz ist die Übermittlung der Daten an das externe LLM unter Berufung auf die vertraglichen Zusicherungen des Anbieters — Datenverarbeitungsverträge, Standardvertragsklauseln, regionale Endpunkte. So funktioniert der Großteil der öffentlichen LLM-Nutzung in der Praxis.</p>
<p>Dieser Ansatz funktioniert für Workflows, bei denen die Daten von vornherein nicht sensibel sind — Marketingtexte, öffentliche Dokumente, allgemeine interne Anfragen. Er versagt in dem Moment, in dem der Workflow Kundendaten, operative Systeme oder vertraglich gebundene Informationen berührt. <strong>Die Zusicherung des Anbieters ist vertraglicher, nicht architektonischer Natur.</strong> Für die Workflows, bei denen es wirklich darauf ankommt, ist die vertragliche Ebene häufig die Grenze, an der eine rechtliche Prüfung im Unternehmen ansetzt.</p>

<h3>3.2 Ansatz 2 — Maskierung und Schwärzung vor der Übermittlung</h3>
<p>Der nächste Reflex ist, sensible Inhalte intern zu halten. Namen, IDs und identifizierende Felder werden vor der Übermittlung an das LLM maskiert oder geschwärzt. Das Modell sieht eine bereinigt Version.</p>
<p>Für Dokumente, bei denen der sensible Teil klar abgrenzbar ist — etwa ein Vertrag, bei dem die Parteien geschwärzt werden, oder ein Lebenslauf, bei dem der Name entfernt wird — funktioniert dieser Ansatz. Bei operativen Daten scheitert er aus zwei Gründen. Erstens zerstört die Maskierung die Struktur, die die KI benötigt: Eine Tabelle, in der Kundennamen durch <code>[REDACTED]</code> ersetzt wurden, ist keine Tabelle mehr, über die die KI sinnvoll schlussfolgern kann. Zweitens enthält operative Daten zahlreiche Bezeichner, die einfache Maskierungslösungen nicht erkennen — Ticket-Nummern, Asset-IDs, interne Codes, Netzwerkkennungen, Freitextverweise — und jeder dieser Bezeichner kann je nach Kontext sensibel sein.</p>
<p>Das grundlegende Problem: Maskierung optimiert für das <em>Entfernte</em>, nicht für das <em>Nutzbare</em>. Für Workflows, bei denen die KI Zusammenhänge in den Daten verstehen muss, zerstören entfernungsbasierte Ansätze den Workflow, auch wenn sie die sensiblen Inhalte erfolgreich verbergen.</p>

<h3>3.3 Ansatz 3 — Vollständige On-Premise-Bereitstellung</h3>
<p>Der dritte Ansatz ist der Verzicht auf externe LLMs zugunsten eines Open-Source-Modells auf eigener Infrastruktur. Die Daten verlassen das Unternehmen nicht. Vertragliche Fragen und Datenhaltungsanforderungen lösen sich damit auf.</p>
<p>Dieser Ansatz funktioniert — aber er hat Kosten, die zu Beginn nicht immer sichtbar sind. Interne Modelle, auch gute, liegen bei den Dimensionen, die Unternehmen tatsächlich interessieren — Schlussfolgerungen über komplexe Dokumente, Umgang mit unbekannten Formaten, Verarbeitung langer Kontexte — typischerweise zwölf bis achtzehn Monate hinter den führenden externen Modellen zurück. Der Betriebsaufwand ist erheblich: GPU-Infrastruktur, Modell-Serving-Stack, Evaluierungspipeline, ein Team mit dem nötigen Know-how. Und es gibt die Schere: Alle sechs Monate springen externe Modelle vor, und die Lücke zwischen dem, was das interne Modell kann, und dem, was das Unternehmen inzwischen erwartet, wird größer.</p>
<p>Für bestimmte Workflows — insbesondere dort, wo Datenhaltungsanforderungen absolut sind und der Workflow so überschaubar ist, dass ein kleineres Modell ausreicht — ist dieser Ansatz die richtige Wahl. Für die meisten anderen Anwendungsfälle löst er das Datenproblem auf Kosten der KI-Vorteile.</p>

<h3>3.4 Was diese drei Ansätze gemeinsam haben</h3>
<p>Allen drei Ansätzen liegt dieselbe Annahme zugrunde: Die Frage lautet, <em>ob</em> die Daten an das externe LLM gesendet werden sollen — und wenn nicht, <em>was stattdessen gesendet werden soll</em>. Sie behandeln die Grenze als gegeben und fragen, was sie passieren kann.</p>
<p>Ein anderer Ansatz stellt eine andere Frage.</p>

<table>
  <thead>
    <tr>
      <th>Ansatz</th>
      <th>Funktioniert bei</th>
      <th>Versagt bei</th>
      <th>Kernkompromiss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Daten senden, Risiko akzeptieren</td>
      <td>Nicht sensible Daten — Marketingtexte, öffentliche Dokumente, allgemeine Anfragen</td>
      <td>Workflows mit Kundendaten, operativen Systemen oder vertraglichen Datenbindungen</td>
      <td>Vertraglicher, kein architektonischer Schutz</td>
    </tr>
    <tr>
      <td>Maskierung und Schwärzung</td>
      <td>Klar abgrenzbare sensible Inhalte — Vertragsparteien, Lebenslaufname</td>
      <td>Operative Daten, bei denen Struktur Bedeutung trägt; nicht offensichtliche Identifikatoren</td>
      <td>Optimiert für das Entfernte, nicht für das Nutzbare</td>
    </tr>
    <tr>
      <td>Vollständige On-Premise-Bereitstellung</td>
      <td>Überschaubare Workflows; absolute Datenhaltungsanforderungen</td>
      <td>Workflows, die fortgeschrittenes Schlussfolgern, langen Kontext oder unbekannte Formate erfordern</td>
      <td>Datenproblem gelöst auf Kosten der KI-Leistungsfähigkeit</td>
    </tr>
  </tbody>
</table>

<h2>4. Ein anderer Ansatz — das Grenzüberschreitende verändern</h2>
<p>Dieser Ansatz beginnt mit einer anderen Prämisse. Statt zu fragen <em>was kann an das externe LLM gesendet werden</em>, lautet die Frage: <em>Was benötigt das externe LLM, um nützlich zu sein — und kann das anstelle der Originaldaten übermittelt werden?</em></p>
<p>Für eine große Klasse von Unternehmens-Workflows lautet die Antwort: Das LLM benötigt die Struktur, die Zusammenhänge, die gestellte Frage und die Form der erwarteten Antwort. Es benötigt nicht den tatsächlichen Kundennamen, die eigentliche Kontonummer, den realen Asset-Identifikator. <strong>Es benötigt einen Platzhalter, der sich im Kontext der Aufgabe genauso verhält wie der echte Wert.</strong></p>
<p>Wenn sensible Elemente durch strukturierte Token ersetzt werden — Platzhalter, die Format, Typ und Beziehungen erhalten, außerhalb der Ursprungsumgebung aber keine Bedeutung haben — überquert nicht mehr das Original die Grenze. Es ist eine Transformation der Daten, die alles behält, was die KI benötigt, und alles entfernt, was innerhalb der Grenze verbleiben soll.</p>
<p>Das Mapping zwischen Token und Originalwerten verbleibt innerhalb der Unternehmensumgebung. Die KI verarbeitet die tokenisierte Version und gibt eine tokenisierte Antwort zurück. Intern werden die Token auf die Originalwerte zurückgemappt; das Ergebnis ist eine betriebsfertige Ausgabe mit echten Kundennamen, echten Zahlen und echten Referenzen.</p>
<p>Dies ist keine Maskierung — die Token erhalten Struktur und Format. Es sind keine synthetischen Daten — der Workflow operiert auf echten Produktivdaten. Es ist keine On-Premise-Bereitstellung — die eigentliche Verarbeitungsleistung erbringen weiterhin die führenden externen Modelle. <strong>Es ist eine Transformationsschicht zwischen der Unternehmensumgebung und der externen KI, die verändert, was die externe KI sieht — ohne zu verändern, was die Unternehmensumgebung weiß.</strong></p>
<p>Verschiedene Communities verwenden unterschiedliche Begriffe für Teile dieses Ansatzes. In der Datenschutzpraxis wird der Ersetzungsschritt üblicherweise als <strong>Tokenisierung</strong> bezeichnet — sensible Werte werden durch rückmappbare Platzhalter ersetzt. Wenn Tokenisierung mit Strukturerhalt, formatkongruenten Platzhaltern und optionalen statistischen Schutzmaßnahmen kombiniert wird, spricht man von einer <strong>Kapselungsschicht (Encapsulation Layer)</strong> — einer übergeordneten Architektur, bei der die Tokenisierung den Kernmechanismus bildet. Die Terminologie variiert; der architektonische Gedanke ist konsistent: Die Grenze bleibt unverändert, die KI-Leistungsfähigkeit bleibt erhalten. Was sich verändert, ist die Form der Daten, die die Grenze überquert.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="boundary-diagram-title boundary-diagram-desc">
      <title id="boundary-diagram-title">Was die Unternehmensgrenze überquert</title>
      <desc id="boundary-diagram-desc">Ein Diagramm, das zeigt, wie Originaldaten und das Token-Wert-Mapping innerhalb der Unternehmensumgebung verbleiben, während nur tokenisierte Daten und tokenisierte Antworten die Grenze zum externen LLM überqueren.</desc>

      <defs>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5a4"/>
        </marker>
      </defs>

      
      <rect x="20" y="40" width="540" height="340" rx="12" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
      <text x="40" y="68" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#6b7280" letter-spacing="1.2">ENTERPRISE ENVIRONMENT</text>

      
      <rect x="50" y="100" width="180" height="76" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f1130">Original Data</text>
      <text x="140" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">customer records,</text>
      <text x="140" y="166" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">tickets, logs, documents</text>

      
      <rect x="280" y="80" width="240" height="116" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="2"/>
      <text x="400" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#5b4fe9">Transformation Layer</text>
      <line x1="304" y1="124" x2="496" y2="124" stroke="#e5e7eb" stroke-width="1"/>
      <text x="400" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">1. Detect sensitive elements</text>
      <text x="400" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">2. Replace with structured tokens</text>
      <text x="400" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">3. Reconstruct from tokenised response</text>

      
      <rect x="280" y="230" width="240" height="76" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
      <text x="400" y="258" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0b7f7e">Token ↔ Value Mapping</text>
      <text x="400" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">held exclusively by the enterprise</text>
      <text x="400" y="294" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">never leaves the boundary</text>

      
      <rect x="50" y="320" width="180" height="48" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
      <text x="140" y="342" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f1130">Business-Ready Output</text>
      <text x="140" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">real names, real figures</text>

      
      
      <line x1="230" y1="125" x2="278" y2="125" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>
      
      <line x1="400" y1="198" x2="400" y2="228" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="395" y1="208" x2="395" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      <line x1="405" y1="208" x2="405" y2="218" stroke="#0ea5a4" stroke-width="1.5"/>
      
      <path d="M 280 175 Q 240 250 230 343" fill="none" stroke="#5b4fe9" stroke-width="1.5" marker-end="url(#arrow-primary)"/>

      
      <line x1="580" y1="40" x2="580" y2="380" stroke="#ef5350" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="580" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#c73e3a" letter-spacing="1.2">BOUNDARY</text>

      
      <rect x="640" y="140" width="280" height="140" rx="12" fill="#0f1130" stroke="#0f1130" stroke-width="1.5"/>
      <text x="660" y="168" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#9ca3af" letter-spacing="1.2">EXTERNAL LLM</text>
      <text x="780" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="#ffffff">ChatGPT · Claude · Gemini</text>
      <text x="780" y="234" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">sees only tokenised data</text>
      <text x="780" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#9ca3af">returns tokenised response</text>

      
      
      <line x1="520" y1="160" x2="638" y2="180" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="155" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised data</text>

      
      <line x1="638" y1="244" x2="520" y2="190" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary)"/>
      <text x="585" y="275" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">tokenised response</text>

      
      <g transform="translate(640, 320)">
        <rect x="0" y="0" width="280" height="56" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="12" y1="18" x2="32" y2="18" stroke="#ef5350" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="40" y="22" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">boundary the data cannot cross</text>
        <line x1="12" y1="38" x2="32" y2="38" stroke="#0ea5a4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="40" y="42" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e">mapping stays inside the enterprise</text>
      </g>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Originaldaten und Mapping verlassen das Unternehmen nicht. Nur tokenisierte Daten und tokenisierte Antworten überqueren die Grenze zum externen LLM.</strong></figcaption>
</figure>


<div class="callout">
  <span class="callout__icon">●</span>
  <p class="callout__body"><strong>Die Architektur in einem Satz.</strong> Originaldaten und Token-Wert-Mapping verbleiben in der Unternehmensumgebung. Nur tokenisierte Daten und tokenisierte Antworten überqueren die Grenze zum externen LLM.</p>
</div>

<h2>5. Wie dieser Ansatz in der Praxis funktioniert</h2>
<p>Die Architektur gliedert sich in vier Phasen mit jeweils eigenständigen Designentscheidungen.</p>

<h3>5.1 Erkennung</h3>
<p>Bevor Daten transformiert werden, muss das System identifizieren, was in diesem Kontext als sensibel gilt. Erkennung ist in der Praxis schwieriger als zunächst erwartet: Sensible Elemente in operativen Daten sind nicht nur Namen und IDs, sondern die spezifischen Merkmale, die <em>dieses</em> Unternehmen als schutzwürdig definiert hat — Projektkennzeichen, Vertragsbedingungen, interne Asset-Verweise, sektorspezifische Identifikatoren. <strong>Generische PII-Erkennung erfasst etwa vierzig Prozent dessen, was tatsächlich relevant ist.</strong> Die restlichen sechzig Prozent muss das Unternehmen selbst definieren — in einer Form, die sich mit dem Geschäft weiterentwickeln kann. Produktionsreife Erkennung muss strukturierte Felder und unstrukturierten Freitext bewältigen — mit semantischem Verständnis statt reinem Musterabgleich.</p>

<h3>5.2 Transformation</h3>
<p>Sind sensible Elemente identifiziert, müssen sie durch Platzhalter ersetzt werden, die die strukturelle Rolle des Originals erhalten. Ein Kundenname in einem Freitextfeld wird zu einem Token, das die KI als Namen erkennt und konsistent referenziert. Eine Kontonummer bleibt eine Kontonummer — lediglich ohne semantische Bedeutung außerhalb des Systems. Die Transformation muss Tabellen, Querverweise, Hierarchien und Dokumentstrukturen intakt lassen. <strong>Gut umgesetzt liest sich das Ergebnis wie ein kohärentes Dokument mit anonymen, aber realistischen Platzhaltern. Schlecht umgesetzt ist es mit <code>[REDACTED]</code>-Markierungen durchsetzt, die den Zusammenhang zerstören.</strong></p>
<p>Einige Implementierungen ergänzen die Tokenisierung um zusätzliche Schutzmaßnahmen — statistische Rauschüberlagerung, Durchsetzung von k-Anonymität über Batches oder Anwendung von Differential-Privacy-Techniken auf bestimmte Attribute. Dies reduziert das Restrisiko, dass ein versierter Angreifer Entitäten anhand der tokenisierten Daten re-identifizieren könnte. Ob diese Schicht erforderlich ist, hängt vom jeweiligen Bedrohungsmodell ab. Für die meisten Unternehmens-Workflows ist strukturerhaltende Tokenisierung allein ausreichend, sofern das Mapping gut kontrolliert wird. Für Workflows, bei denen Daten auch auf Architekturebene innerhalb der EU oder anderer definierter Grenzen verbleiben müssen — etwa unter DSGVO (GDPR) oder BSI C5 — ist der zusätzliche Schutz den Mehraufwand wert.</p>

<h3>5.3 Externe Verarbeitung</h3>
<p>Das tokenisierte Dokument wird über die vom Unternehmen genutzten APIs oder Integrationen an das externe LLM übermittelt. Aus Sicht des LLM ist dies eine normale Anfrage — es kann nicht wissen, dass das Dokument transformiert wurde, und muss es auch nicht wissen. Das LLM führt seine Aufgaben aus — Zusammenfassung, Extraktion, Klassifikation, Schlussfolgerung — und gibt eine tokenisierte Antwort zurück, die dieselben Token enthält wie die Eingabe.</p>

<h3>5.4 Wiederherstellung</h3>
<p>Innerhalb der Unternehmensumgebung wird die tokenisierte Antwort auf die Originalwerte zurückgemappt. Platzhalter für Kundennamen erhalten die echten Namen zurück. Platzhalter-Kontonummern werden zu echten Kontonummern. Die Struktur und die Schlussfolgerungen der KI bleiben erhalten; lediglich die Platzhalter werden ersetzt. Das Ergebnis ist eine betriebsfertige Ausgabe, die direkt in den ursprünglichen Workflow eingespeist werden kann.</p>
<p>Die Wiederherstellungsphase wird von den meisten Teams unterschätzt. Sie bestimmt, ob die KI-Ausgabe im Produktivbetrieb tatsächlich nutzbar ist oder ob jemand sie manuell nacharbeiten muss. <strong>Eine gute Wiederherstellungsschicht ist unsichtbar: Der Nutzer übergibt ein Dokument, die KI liefert eine Analyse, und die Analyse kommt mit echten Werten zurück.</strong> Transformation und Wiederherstellung laufen als Infrastruktur, nicht als nutzerseitige Schritte.</p>

<h2>6. Für welche Workflows dieser Ansatz tatsächlich geeignet ist</h2>
<p>Dieser Ansatz ist nicht universell. Er funktioniert für eine bestimmte Klasse von Workflows — und Klarheit darüber, welche das sind, ist entscheidend für die Entscheidung, ihn einzusetzen.</p>
<p>Geeignet sind Workflows, bei denen die KI-Aufgabe struktureller oder analytischer Natur ist und sensible Elemente vorab identifizierbar sind. Beispiele:</p>
<ul>
  <li>Vertragszusammenfassungen</li>
  <li>Erstellung von Störungsberichten aus Betriebsprotokollen</li>
  <li>Extraktion von Risikoklauseln aus Due-Diligence-Dokumenten</li>
  <li>Erstellung klinischer Notizen aus strukturierten Patientendaten</li>
  <li>Ursachenanalyse aus Netzwerk-Alarmsequenzen</li>
  <li>Klassifikation von Schadenmeldungen aus Versicherungsunterlagen</li>
</ul>
<p>In jedem dieser Fälle analysiert die KI Struktur und Inhalt. Die personenidentifizierenden Teile sind Mittel zum Zweck, nicht der Zweck selbst.</p>
<p>Nicht geeignet sind Workflows, bei denen die KI den tatsächlichen sensiblen Inhalt als Teil ihrer Aufgabe verarbeiten muss. Personalisierte Inhalte, die sich direkt an einen Kunden richten. Prüfworkflows, die gegen den tatsächlichen Identifikator abgleichen müssen. Recherchen, die die Originalzeichenketten erfordern.</p>
<p>Als Faustregel gilt: Lässt sich die KI-Ausgabe als <em>"Führe diese analytische Aufgabe durch und berichte das Ergebnis"</em> beschreiben, ist der Ansatz geeignet. Erfordert die Ausgabe <em>"Handele bezüglich dieses konkreten Kunden, Falls oder Identifikators"</em>, ist er es nicht.</p>

<h2>7. Was vor der Bereitstellung zu entscheiden ist</h2>
<p>Die Einführung dieses Ansatzes ist keine Standardentscheidung. Sie bringt Architekturentscheidungen mit sich, die zu Beginn einfacher zu treffen sind als im Nachhinein.</p>

<h3>7.1 Wo die Transformation ausgeführt wird</h3>
<p>Die Transformationsschicht muss innerhalb der Unternehmensumgebung betrieben werden — On-Premise, in der unternehmenseigenen Cloud-VPC oder auf dedizierter Infrastruktur. Die Anforderung besteht darin, dass die Transformation erfolgt, <em>bevor</em> die Daten das externe Netzwerk erreichen. Die Schicht ist damit kolokal mit den Quellsystemen, nicht mit dem KI-Endpunkt.</p>

<h3>7.2 Wer das Mapping kontrolliert</h3>
<p>Das Mapping zwischen Token und Originalwerten ist die sensibelste Komponente der Architektur. Es ist der Schlüssel zur Re-Identifikation der Daten. <strong>Bewährte Praxis ist, dass das Mapping ausschließlich vom Unternehmen gehalten wird — in einem Speicher, auf den der externe LLM-Anbieter keinen Zugriff hat.</strong> Dies ist eine nicht verhandelbare Designeigenschaft, keine Konfigurationsoption. Erlaubt die Architektur eines Anbieters, dass das Mapping die Unternehmensumgebung verlässt, kollabiert der Schutz des Ansatzes.</p>

<h3>7.3 Wie Sensitivität definiert wird</h3>
<p>Generische personenbezogene Datenkategorien nach DSGVO (GDPR) — Namen, E-Mail-Adressen, Telefonnummern — sind der Ausgangspunkt, nicht das Ziel. Das Unternehmen muss definieren, was in seinem Kontext als sensibel gilt: interne Projektkennzeichen, Kundensegmentierungsmerkmale, sektorspezifische Referenzen. Die Definition muss versioniert werden, denn Sensitivität ist nicht statisch — heute sind es Finanzdaten, morgen ein M&amp;A-Codename, übermorgen Asset-Referenzen einer regulierten Einheit. Eine statische Definition veraltet schnell.</p>

<h3>7.4 Wie der Workflow mit der Ausgabe umgeht</h3>
<p>Die Wiederherstellung muss innerhalb der Unternehmensumgebung erfolgen und in den jeweiligen Auslieferungskanal des Workflows integriert sein — das Ticketing-System, die Dokumentenverwaltungsplattform, die Prüfoberfläche des Analysten. <strong>Ist die Wiederherstellung ein separater manueller Schritt, wird sie von den Nutzern übergangen — und der Wert der Architektur löst sich auf.</strong></p>

<h3>7.5 Was geschieht, wenn sich der externe Endpunkt ändert</h3>
<p>Externe LLMs sind keine stabile Infrastruktur. Modelle werden abgekündigt, Anbieter ändern ihre Preisgestaltung, neue Optionen entstehen. Der Ansatz funktioniert am besten, wenn die Transformationsschicht anbieterneutral ausgelegt ist — wenn der Wechsel von ChatGPT zu Claude oder zu einem neuen Anbieter eine Konfigurationsänderung ist, keine Architekturüberarbeitung.</p>

<h2>8. Die Grenzen dieses Ansatzes — offen benannt</h2>
<p>Der Ansatz löst ein reales Problem — aber nicht jedes Problem. Die Grenzen sind es wert, klar benannt zu werden.</p>
<ul>
  <li><strong>Ungeeignet ist der Ansatz, wenn die eigentliche KI-Aufgabe die Originaldaten erfordert</strong> — Prüfaufgaben, Recherchen, Personalisierungsaufgaben, bei denen der tatsächliche Identifikator den Gegenstand bildet.</li>
  <li><strong>Er erhöht die Latenz.</strong> Erkennung, Transformation und Wiederherstellung erfordern jeweils Zeit. Für die meisten Unternehmens-Workflows ist dies nicht spürbar — der Mehraufwand sind Sekundenbruchteile in einem Workflow, der ohnehin mehrere Sekunden dauert. Für latenzkritische Anwendungen kann der Mehraufwand relevant sein.</li>
  <li><strong>Er erfordert kontinuierliche Investitionen in die Erkennungs- und Definitionsschicht.</strong> Sensitivität ist nicht statisch; Merkmale entwickeln sich mit dem Geschäft; die Definition muss mitentwickelt werden. Ein Team muss diese Verantwortung übernehmen und in enger Abstimmung mit der Geschäftsentwicklung stehen. Technologie einzukaufen, ohne die Definition zu pflegen, führt zur schleichenden Entwertung der Architektur.</li>
  <li><strong>Er ersetzt keine organisatorischen Entscheidungen darüber, welche Daten überhaupt verarbeitet werden sollten.</strong> Einige Workflows sollten unabhängig von jeder Transformation nicht an externe Modelle gesendet werden — die Daten sind zu sensibel, der Workflow zu kritisch, das Fehlerszenario zu kostspielig. Dieser Ansatz ist für Workflows gedacht, bei denen die Antwort <em>"mit der richtigen Architektur sinnvoll einsetzbar"</em> lautet — nicht für Workflows, bei denen die Antwort <em>"grundsätzlich nicht"</em> ist.</li>
  <li><strong>Er setzt voraus, dass das Unternehmen die Schicht in der eigenen Umgebung betreibt.</strong> Anbieter, die diesen Ansatz als externes SaaS anbieten — bei dem die Transformation auf der Anbieterinfrastruktur erfolgt — haben die Architektur in ein anderes Problem überführt. Der Kern des Ansatzes ist, dass die Transformation dort ausgeführt wird, wo die Daten bereits liegen.</li>
</ul>

<h2>9. Konsequenzen für die KI-Strategie</h2>
<p>Für die meisten regulierten Unternehmen in der EU führt der Weg zu produktionsreifen KI-Lösungen im Jahr 2026 über eine Variante dieses Ansatzes. Die wirtschaftlichen Vorteile externer LLMs sind zu erheblich, um sie zu ignorieren. Die Anforderungen an Datenhaltung sind zu real, um sie zu umgehen. Die bestehenden Werkzeuge — Maskierung, On-Premise-Bereitstellung — lösen Teile des Problems, nicht das Ganze.</p>
<p>Dieser Ansatz ist keine abgeschlossene Kategorie. Es gibt Implementierungen von verschiedenen Anbietern mit unterschiedlichen Designentscheidungen zu Erkennung, Transformationsstärke, Wiederherstellungslogik und Bereitstellungstopologie. Die Auswahl hängt von unternehmenssspezifischen Fragen ab: Welche bestehenden Systeme muss die Schicht integrieren? Wie ist die Sensitivitätsdefinition beschaffen? Auf welche Bereitstellungsstrategie hat sich das Sicherheitsteam festgelegt? Wie wird der Workflow-Mix zwischen externen und On-Premise-Modellen aussehen?</p>
<p>Was alle Implementierungen verbindet, sind vier architektonische Kerneigenschaften:</p>
<ol>
  <li>Originaldaten verbleiben innerhalb der Unternehmensgrenze</li>
  <li>Die KI-Leistungsfähigkeit bleibt erhalten</li>
  <li>Die Transformation läuft auf einer Schicht unter Unternehmenskontrolle</li>
  <li>Das Mapping, das die Wiederherstellung ermöglicht, verbleibt unter ausschließlicher Kontrolle des Unternehmens</li>
</ol>
<p>Wenn diese vier Eigenschaften gegeben sind, beginnen Workflows, die im Pilotbetrieb feststeckten, in den Produktivbetrieb überzugehen.</p>
<p>Der eingangs beschriebene Widerspruch löst sich nicht vollständig auf — es wird immer Workflows geben, bei denen Anforderung und Leistungsfähigkeit nicht in Einklang zu bringen sind. Für den breiten Bereich der Unternehmens-KI-Aufgaben ist dieser Ansatz jedoch die architektonische Antwort, die es erlaubt, KI-Strategie und Datenstrategie aus dem Konflikt zu führen.</p>

<div class="takeaways">
  <div class="takeaways__label">Wesentliche Erkenntnisse</div>
  <ul>
    <li>Regulierte Unternehmen stehen vor einem strukturellen Widerspruch: Die leistungsfähigsten KI-Modelle sind extern; die nützlichsten Daten dürfen die Grenze nicht verlassen</li>
    <li>Die drei gängigen Reaktionen — Risiko akzeptieren, Maskierung und Schwärzung, On-Premise-Betrieb — scheitern jeweils an vorhersehbaren Punkten</li>
    <li>Ein anderer Ansatz verändert nicht ob, sondern <em>was</em> die Grenze überquert — durch strukturerhaltende Tokenisierung</li>
    <li>Vier Phasen: Erkennung → Transformation → Externe Verarbeitung → Wiederherstellung</li>
    <li>Geeignet für analytische Workflows mit vorab identifizierbaren sensiblen Elementen; ungeeignet für Personalisierungs- oder Verifikationsaufgaben</li>
    <li>Vier nicht verhandelbare Designeigenschaften: Transformation im Unternehmen, ausschließliche Kontrolle des Mappings, fortlaufend gepflegte Sensitivitätsdefinition, Wiederherstellung als Infrastrukturkomponente</li>
    <li>Grenzen: erhöhte Latenz, laufende Investitionen in die Erkennungsschicht, kein Ersatz für organisatorische Grundsatzentscheidungen</li>
    <li>Anbieterneutral ausgelegt — ein Wechsel zwischen ChatGPT, Claude oder Gemini ist eine Konfigurationsänderung, keine Architekturüberarbeitung</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Wie unterscheidet sich dieser Ansatz von Datenmaskierung?</h3>
<p>Maskierung optimiert für das Entfernte — Namen, IDs und Identifikatoren werden durch Schwärzungsmarkierungen ersetzt. Das funktioniert bei Dokumenten, bei denen der sensible Teil klar abgrenzbar ist, scheitert aber bei operativen Daten, weil die für die KI notwendige Struktur dabei zerstört wird. Der hier beschriebene Ansatz nutzt strukturerhaltende Tokenisierung: Sensible Elemente werden durch Platzhalter ersetzt, die Format, Typ und Beziehungen erhalten — sodass die KI ein kohärentes Dokument verarbeitet. Das Mapping auf die Originalwerte verbleibt im Unternehmen.</p>

<h3>Funktioniert dieser Ansatz mit jedem externen LLM?</h3>
<p>Der Ansatz ist anbieterneutral ausgelegt. Aus Sicht des externen LLM empfängt es eine normale Anfrage — es kann nicht erkennen, dass das Dokument transformiert wurde, und muss es nicht. Ein Wechsel von ChatGPT zu Claude, Gemini oder einem neuen Anbieter ist eine Konfigurationsänderung, keine Architekturüberarbeitung. Die Transformationsschicht ist die Konstante; das externe Modell ist die Variable.</p>

<h3>Was geschieht mit dem Mapping zwischen Token und Originalwerten?</h3>
<p>Das Mapping ist die sensibelste Komponente der Architektur — es ist der Schlüssel zur Re-Identifikation der Daten. Bewährte und gebotene Praxis ist, dass das Mapping ausschließlich vom Unternehmen in einem Speicher gehalten wird, auf den der externe LLM-Anbieter keinen Zugriff hat. Dies ist eine nicht verhandelbare Designeigenschaft. Erlaubt die Architektur eines Anbieters, dass das Mapping das Unternehmen verlässt, kollabiert der Schutz des Ansatzes.</p>

<h3>Wo muss die Transformationsschicht betrieben werden?</h3>
<p>Innerhalb der Unternehmensumgebung — On-Premise, in der unternehmenseigenen Cloud-VPC oder auf dedizierter Infrastruktur unter Unternehmenskontrolle. Die Anforderung ist, dass die Transformation erfolgt, <em>bevor</em> die Daten das externe Netzwerk erreichen. Anbieter, die diesen Ansatz als externes SaaS anbieten, haben die Architektur in ein anderes Problem überführt. Der Kerngedanke ist, dass die Transformation dort ausgeführt wird, wo die Daten bereits liegen.</p>

<h3>Für welche Workflows ist dieser Ansatz nicht geeignet?</h3>
<p>Ungeeignet ist der Ansatz für Workflows, bei denen die KI den tatsächlichen sensiblen Inhalt als Teil ihrer Aufgabe verarbeiten muss: personalisierte Inhalte, die sich direkt an Kunden richten; Prüfworkflows, die gegen den tatsächlichen Identifikator abgleichen müssen; Recherchen, die die Originalzeichenketten erfordern. Als Faustregel gilt: Lässt sich die KI-Ausgabe als <em>"Führe diese analytische Aufgabe durch und berichte das Ergebnis"</em> beschreiben, funktioniert der Ansatz. Erfordert die Ausgabe <em>"Handele bezüglich dieses konkreten Kunden, Falls oder Identifikators"</em>, ist er ungeeignet.</p>

<h3>Wie unterscheidet sich das von einem On-Premise-Open-Source-Modell?</h3>
<p>On-Premise-Bereitstellung löst das Datenproblem, indem die KI-Leistungsfähigkeit durch etwas Internes ersetzt wird — die Daten verlassen das Unternehmen nicht, aber das Modell ist auf die Möglichkeiten des intern betriebenen Systems begrenzt. Das funktioniert, wenn der Workflow so überschaubar ist, dass ein kleineres Modell ausreicht. Der Transformationsschicht-Ansatz behält die führenden externen Modelle und verändert stattdessen, <em>was</em> die Grenze überquert. Die eigentliche Verarbeitungsleistung erbringen weiterhin die leistungsfähigsten Modelle; nur die Form der Daten ist anders.</p>

## Section 04: Related Articles

Related articles
Verwandte Artikel

Differential privacy for enterprise LLM
Differential Privacy für unternehmensweite LLM-Nutzung

Sovereign AI for European enterprises
Datensouveräne KI für europäische Unternehmen

On-prem LLM execution path
LLM-Ausführung im On-Premise-Betrieb

AI on network operations data
KI auf Netzwerkbetriebsdaten

Running External LLMs on Sensitive Enterprise Data
Externe LLMs auf sensiblen Unternehmensdaten betreiben
