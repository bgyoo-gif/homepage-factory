# hidden-cost-of-building-your-own-llm — Deutsche Übersetzung (localize)

## Section 01: Hero

← Learn
← Zurück

The Hidden Cost of Building Your Own Enterprise LLM
Die versteckten Kosten des eigenständigen LLM-Betriebs im Unternehmen

Running your own LLM in production is a defensible choice — but the cost structure is asymmetric. The model is the cheap part. A realistic look at what self-hosted AI actually costs, where teams under-budget, and when it's the right answer.
Einen LLM auf eigener Infrastruktur zu betreiben ist eine vertretbare Entscheidung — aber die Kostenstruktur ist asymmetrisch. Das Modell ist der günstige Teil. Eine sachliche Betrachtung der tatsächlichen Kosten von Self-Hosted-KI: wo Teams zu knapp kalkulieren und wann diese Entscheidung die richtige ist.

AI Architecture
KI-Architektur

~10 min read
~10 Min. Lesezeit

May 2026
Mai 2026

## Section 02: TL;DR

TL;DR
Kurzfassung

Self-hosting an LLM is a defensible choice — but the cost structure is asymmetric and most projections miss it. The model itself is free. Infrastructure is real and usually budgeted. People are the layer that most consistently breaks the projection — six to ten engineers minimum, fifteen to twenty for larger deployments, in a market where ML talent earns well above general engineering rates. Over a three-year horizon the people cost typically exceeds infrastructure by two or three times. Time compounds as opportunity cost: nine to eighteen months from decision to running production AI, during which the workflows the project was meant to serve either go without AI or use the external endpoints the project was meant to replace. Maintenance doesn't end — model updates, quality monitoring, infrastructure patches, workflow evolution accumulate as sustained team burn. Self-hosting is right when constraints are absolute, volume justifies the fixed cost, or the strategic case is explicit and funded. It's wrong when transformation could address the constraint, when workflows need frontier capability, or when the projection didn't include the full team. The pattern most enterprises end up with is hybrid: self-hosted for workflows that need it, external endpoints with transformation for the rest, under one routing layer and one governance framework.
Self-Hosting eines LLM ist eine vertretbare Entscheidung — die Kostenstruktur ist jedoch asymmetrisch, und die meisten Kalkulationen erfassen sie nicht vollständig. Das Modell selbst ist kostenfrei. Infrastrukturkosten sind real und werden gewöhnlich budgetiert. Das Personal ist die Kostenkomponente, die Projektionen am häufigsten sprengt: mindestens sechs bis zehn Engineers für kleinere Deployments, fünfzehn bis zwanzig für größere — in einem Markt, in dem ML-Fachkräfte deutlich oberhalb des allgemeinen Ingenieurniveaus vergütet werden. Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. Zeit kumuliert sich als Opportunitätskosten: Neun bis achtzehn Monate vergehen vom Beschluss bis zum produktiven KI-Betrieb — in dieser Zeitspanne warten die betroffenen Workflows entweder auf KI oder nutzen weiterhin die externen Endpunkte, die das Projekt eigentlich ablösen sollte. Wartungsaufwand endet nicht: Modell-Updates, Qualitätsüberwachung, Infrastruktur-Patches und Workflow-Evolution akkumulieren sich als dauerhafter Teamaufwand. Self-Hosting ist sinnvoll, wenn Restriktionen absolut sind, das Anfragevolumen die Fixkosten rechtfertigt oder die strategische Begründung explizit formuliert und finanziert ist. Es ist falsch, wenn Transformation die Restriktion lösen könnte, wenn Workflows Frontier-Leistungsfähigkeit erfordern oder wenn die ursprüngliche Kalkulation das vollständige Team nicht einschloss. Das Betriebsmodell, bei dem die meisten Unternehmen landen, ist hybrid: Self-Hosted für Workflows, die es erfordern, externe Endpunkte mit Transformationsschicht für die übrigen — unter einer gemeinsamen Routing-Schicht und einem einheitlichen Governance-Framework.

## Section 03: Article Body

<h2>1. Warum Teams sich zunächst für Self-Hosting entscheiden</h2>
<p>Die Entscheidung, einen LLM auf der eigenen Unternehmensinfrastruktur zu betreiben, ist grundsätzlich nachvollziehbar. Es gibt Workflows, bei denen dies die richtige Antwort ist, Umgebungen, bei denen es die einzige Antwort ist, und strategische Gründe, in interne KI-Kompetenz zu investieren — selbst wenn externe Optionen verfügbar sind. <strong>Das steht nicht zur Debatte.</strong></p>
<p>Die entscheidende Frage lautet: Versteht das Team, das diese Entscheidung trifft, worauf es sich tatsächlich einlässt? In einer bemerkenswert hohen Zahl von Unternehmens-KI-Programmen wurde die Entscheidung für einen internen Betrieb auf Basis eines Kostenmodells getroffen, das sich in vorhersehbarer Weise als unzutreffend erweist. Das Modell selbst — die eigentlichen Gewichte, das Open-Source-Release, das das Team deployen will — <strong>ist der günstigste Teil des Deployments</strong>. Die übrige Kostenstruktur birgt die Überraschungen, und die meisten davon zeigen sich erst Monate nachdem die Entscheidung kaum noch umkehrbar ist.</p>
<p>Dieser Artikel beleuchtet die Kostenschichten des ernsthaften internen LLM-Betriebs, was jede davon tatsächlich bedeutet und wo Teams systematisch zu knapp kalkulieren. <em>Es ist kein Argument gegen Self-Hosting. Es ist der Versuch, die Entscheidung auf informierter Grundlage zu treffen.</em></p>
<p>Bevor es um die Kosten geht, lohnt sich ein präziser Blick auf die Gründe, die Unternehmen zum Self-Hosting führen. Die Gründe sind real — und die Architektur sollte ihnen entsprechen.</p>
<ul>
  <li><strong>Datenlokalisierungsanforderungen sind absolut.</strong> Manche Workflows dürfen Daten unter keinen Umständen an externe Endpunkte senden — unabhängig von Transformation oder Schutzmaßnahmen. Verteidigungsoperationen, bestimmte regulierte Kategorien im Gesundheitswesen, Abhördaten, klassifizierte Finanzworkflows. Für diese ist Self-Hosting keine Wahl, sondern die einzige funktionsfähige Architektur. Die Kostenanalyse betrifft dann <em>welches</em> interne Deployment — nicht <em>ob</em> intern deployt werden soll.</li>
  <li><strong>Sektorspezifische Verpflichtungen schränken die Deployment-Topologie ein.</strong> Ein Telekommunikationsunternehmen unter sektorspezifischen Datenlokalisierungsanforderungen muss Teile seiner operativen KI möglicherweise innerhalb des eigenen Netzes betreiben — selbst wenn transformationsbasierte Ansätze die Restriktion theoretisch adressieren könnten. Der Vertrag oder die Datenpositionierung ist verbindlich, unabhängig von der Architektur.</li>
  <li><strong>Strategischer Kompetenzaufbau.</strong> Manche Unternehmen betrachten KI als langfristige Kernkompetenz, die sie aufbauen wollen — nicht mieten. Die Überlegung: KI wird zentral für das Geschäft, die Anbieterlandschaft ist unsicher, und das Unternehmen zieht es vor, interne Expertise aufzubauen. Das ist eine vertretbare Position, die nicht von Datenlokalisierungsrestriktionen abhängt.</li>
  <li><strong>Kostenprognose bei hohem Volumen.</strong> Bei Workflows mit sehr hohem Anfragevolumen übersteigen die Per-Token-Kosten externer API-Aufrufe irgendwann die Fixkosten des eigenen Infrastrukturbetriebs. Für die meisten Unternehmen liegt dieser Punkt weiter in der Zukunft, als sie annehmen — aber die Prognose ist gelegentlich der explizite Grund für Self-Hosting.</li>
  <li><strong>Betriebliche Planbarkeit.</strong> Externe LLM-Anbieter ändern Modelle, Preise, Vertragsbedingungen und Verfügbarkeit ohne Zustimmung des Unternehmens. Für Workflows, bei denen diese Volatilität nicht akzeptabel ist, hat die interne Kontrolle über den Modell-Lebenszyklus einen realen Wert.</li>
</ul>
<p>Jeder dieser Punkte ist eine legitime Grundlage für Self-Hosting. <strong>Der Fehler liegt nicht in der Begründung — er liegt im Budget, das nach der Entscheidung angesetzt wird.</strong></p>

<h2>2. Das Modell — der günstige Teil</h2>
<p>Die erste Überraschung für Teams, die diesen Weg zum ersten Mal gehen: <strong>Das Modell selbst kostet nahezu nichts.</strong></p>
<p>Die führenden Open-Source-Modelle — Llama, Mistral, Qwen und ihre Nachfolger — werden unter Lizenzen veröffentlicht, die Unternehmensnutzung ohne Per-Token-Gebühren erlauben. Das Herunterladen der Gewichte ist kostenlos. Die Quantisierung für verfügbare Hardware ist kostenlos. Es gibt keine Lizenzverhandlungen, keine nutzungsbasierte Abrechnung, keine Sitzlizenzen für das Modell als solches.</p>
<p>Das ist der sichtbare Teil der Kostenanalyse — und der Ausgangspunkt für optimistische Projektionen: <em>„Das Modell ist kostenlos; der Eigenbetrieb muss günstiger sein als die API."</em> Die Kalkulation wirkt überzeugend, solange nur die Modellkosten einbezogen sind.</p>
<p><strong>Was die Kalkulation auslässt, ist alles andere.</strong></p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-labelledby="cost-layers-title cost-layers-desc">
      <title id="cost-layers-title">The asymmetric cost layers of self-hosted LLMs</title>
      <desc id="cost-layers-desc">A diagram showing five cost layers of self-hosted LLM deployment, stacked from smallest (model) to largest (people), with time and maintenance shown as bands that compound over the multi-year horizon.</desc>

      <defs>
        <marker id="arrow-time" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309"/>
        </marker>
      </defs>

      <text x="40" y="34" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">SELF-HOSTED LLM · COST LAYERS</text>
      <text x="920" y="34" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">3-YEAR HORIZON</text>

      <text x="160" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Layer</text>
      <text x="540" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Relative cost weight</text>
      <text x="860" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#3a3d5e">Budgeted?</text>

      <g>
        <rect x="40" y="86" width="240" height="44" rx="6" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="60" y="106" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#0b7f7e">Model</text>
        <text x="60" y="122" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">weights · licence · quantisation</text>
        <rect x="300" y="92" width="60" height="32" rx="4" fill="#0ea5a4"/>
        <text x="370" y="113" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Free</text>
        <text x="860" y="113" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#0b7f7e">Yes ✓</text>
      </g>

      <g>
        <rect x="40" y="140" width="240" height="60" rx="6" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="60" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#5b4fe9">Infrastructure</text>
        <text x="60" y="176" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">GPU · serving stack · monitoring</text>
        <text x="60" y="190" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">storage · network · scaling</text>
        <rect x="300" y="152" width="200" height="36" rx="4" fill="#5b4fe9"/>
        <text x="510" y="175" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Medium</text>
        <text x="860" y="175" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Usually ✓</text>
      </g>

      <g>
        <rect x="40" y="210" width="240" height="100" rx="6" fill="#fce9e8" stroke="#ef5350" stroke-width="2"/>
        <text x="60" y="232" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#c73e3a">People</text>
        <text x="60" y="248" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML platform engineers (2–4)</text>
        <text x="60" y="262" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">ML ops engineers (2–3)</text>
        <text x="60" y="276" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Evaluation engineers (1–2)</text>
        <text x="60" y="290" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Workflow integration (2–3 per domain)</text>
        <text x="60" y="304" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Technical leadership</text>
        <rect x="300" y="232" width="520" height="56" rx="4" fill="#ef5350"/>
        <text x="560" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#ffffff">2–3× infrastructure cost over 3 years</text>
        <text x="860" y="266" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c73e3a">Under-budgeted ✗</text>
      </g>

      <line x1="40" y1="332" x2="920" y2="332" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="40" y="354" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">COMPOUNDS OVER TIME</text>

      <g>
        <rect x="40" y="368" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="388" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Time</text>
        <text x="60" y="406" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">9–18 months from decision to production AI</text>
        <text x="60" y="418" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">opportunity cost on workflows that wait · external models advance during the build</text>
        <line x1="680" y1="396" x2="900" y2="396" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="388" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">opportunity cost</text>
      </g>

      <g>
        <rect x="40" y="432" width="880" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="60" y="452" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#b45309">Maintenance</text>
        <text x="60" y="470" font-family="Inter, sans-serif" font-size="10" fill="#6b7280">Model updates · quality monitoring · infrastructure patches · workflow evolution</text>
        <text x="60" y="482" font-family="Inter, sans-serif" font-size="10" font-style="italic" fill="#6b7280">sustained team burn against a growing portfolio of workflows — doesn't appear in initial budget</text>
        <line x1="680" y1="460" x2="900" y2="460" stroke="#b45309" stroke-width="1.5" marker-end="url(#arrow-time)"/>
        <text x="790" y="452" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#b45309">never ends</text>
      </g>

      <text x="480" y="510" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-style="italic" fill="#3a3d5e">The model is the visible part. The cost lives in the layers below.</text>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 · <strong>Das Modell ist die günstigste Schicht. Personalkosten dominieren die Mehrjahreskalkulation konsequent. Zeit und Wartung kumulieren sich — und erscheinen nicht im ursprünglichen Budget.</strong></figcaption>
</figure>

<h2>3. Infrastruktur — die Schicht, für die die meisten Teams budgetieren</h2>
<p>Die nächste Kostenschicht ist die Infrastruktur — und <strong>dies ist die Schicht, für die die meisten Teams tatsächlich budgetieren, häufig auch realistisch</strong>.</p>
<p>Den ernsthaften Betrieb eines Open-Source-Modells in Produktion erfordert GPUs. Die genaue Spezifikation hängt von Modellgröße, Quantisierungsstufe, erforderlichem Durchsatz und Latenzzielen ab. Ein kleines Deployment mit einem quantisierten Modell mittlerer Größe für interne Workflows mit geringem Durchsatz lässt sich auf wenigen Enterprise-GPUs zu überschaubaren Kosten betreiben. Ein ernsthaftes Deployment mit einem größeren Modell für Produktionsworkflows mit hohem Durchsatz benötigt einen dedizierten GPU-Cluster — inklusive Kühlung, Stromversorgung und Netzwerkinfrastruktur.</p>
<p>Die GPU-Kosten lassen sich kalkulieren. Ein Team, das die Vorarbeit geleistet hat, weiß, was benötigt wird und was es kostet — ob als Hardware-Investition, als reservierte Cloud-Instanzen oder als Kombination. <strong>Der Investitionsanteil erhält in der Regel angemessene Budgetaufmerksamkeit.</strong></p>
<p>Weniger präzise budgetiert wird auf dieser Ebene häufig die unterstützende Infrastruktur, die die GPUs erst nutzbar macht: der Model-Serving-Stack (<code>vLLM</code>, <code>TGI</code> oder vergleichbare Lösungen), Request-Routing und Load-Balancing vor der Serving-Schicht, Storage für Modellgewichte und Caches, Netzwerkkapazität für das Anfragevolumen sowie die Monitoring-Infrastruktur, die das Gesamtsystem überwacht. Einzeln sind diese Komponenten nicht teuer, in der Summe schlagen sie zu Buche — und erfordern sorgfältige Planung. Der Serving-Stack hat sich in den letzten Jahren erheblich weiterentwickelt; <em>er ist kein Forschungsartefakt mehr, aber noch immer Infrastruktur, die das Team deployen und betreiben muss</em>.</p>
<p>Über das initiale Deployment hinaus muss die Infrastruktur mit der Nutzung skalieren. Ein Workflow, der von hundert auf zehntausend Anfragen pro Tag wächst, benötigt proportional mehr Kapazität. Das ist der routinemäßige Aufwand produktiver Systeme — er sollte in die Mehrjahresplanung einfließen statt durch die Annahme abgetan zu werden, das Budget vom ersten Tag reiche langfristig aus.</p>

<h2>4. Personal — die unterschätzte Kostenschicht</h2>
<p>Die Schicht, bei der Projektionen am häufigsten scheitern, ist das Personal. <strong>Den Produktionsbetrieb eines LLM übernimmt nicht nebenbei das bestehende Infrastrukturteam.</strong> Er erfordert ein dediziertes Team mit spezifischen Qualifikationen — die auf dem aktuellen Markt kostspielig sind.</p>
<p>Ein Mindestteam für den ernsthaften internen LLM-Betrieb umfasst:</p>
<ul>
  <li><strong>ML-Platform-Engineers</strong>, die Model-Serving, Quantisierung, Durchsatzoptimierung und die Betriebseigenschaften des Inference-Stacks verstehen. <em>Zwei bis vier Engineers</em>, abhängig vom Umfang.</li>
  <li><strong>ML-Operations-Engineers</strong>, die Monitoring, Alerting, Kapazitätsplanung und die On-Call-Rotation für die Inferenz-Infrastruktur verantworten. <em>Zwei bis drei Engineers</em> — in kleineren Teams häufig mit Überlappung zu den Platform-Engineers.</li>
  <li><strong>Evaluierungs-Engineers</strong>, die die Golden-Datasets, die Evaluierungspipelines, das Qualitätsmonitoring und das Regressionstest-Verfahren für Modell-Updates pflegen. <em>Ein bis zwei Engineers</em>, mit erheblichem Input von den Workflow-Teams, die das Modell nutzen.</li>
  <li><strong>Workflow-Integration-Engineers</strong>, die die Schicht zwischen der Modell-API und den tatsächlichen Geschäftsprozessen aufbauen und warten. Die Zahl skaliert mit der Anzahl der Workflows; <em>typischerweise zwei bis drei Engineers pro großem Workflow-Bereich</em>.</li>
  <li><strong>Technische Führungskräfte</strong> mit ausreichend ML- und Infrastrukturerfahrung für architektonische Entscheidungen und die Überprüfung der Arbeit. <em>Mindestens ein Senior-Engineer</em>, bei größeren Deployments häufig eine kleine Führungsgruppe.</li>
</ul>
<p>Für ein Unternehmen, das interne LLMs für einige Geschäftsbereiche betreibt, sind das <strong>sechs bis zehn Personen</strong>. Für ein größeres Deployment, das mehrere Geschäftsbereiche in einem komplexen Unternehmen bedient, sind es <strong>fünfzehn bis zwanzig</strong>.</p>
<p>Die Kosten dieser Teams sind in jedem größeren Markt erheblich. ML-Engineers mit den erforderlichen Qualifikationen werden deutlich oberhalb des allgemeinen Engineering-Marktes vergütet. <strong>Das Team ist klein in der Kopfzahl, aber aufwendig im laufenden Aufwand.</strong> Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um einen deutlichen Faktor — bei vielen Deployments <em>um das Zwei- bis Dreifache</em>.</p>
<p>Das ist die Kalkulation, die sich am häufigsten verschiebt, wenn das Team, das das Projekt vorgeschlagen hat, die Personalkosten anfänglich nicht verantwortet. Das Infrastrukturbudget wird freigegeben; das Team muss eingestellt werden; und sobald das Team eingestellt ist, muss das restliche Programm es finanzieren.</p>

<h2>5. Zeit — die kumulierende Kostenkomponente</h2>
<p>Eine Kategorie, der sich schwer eine konkrete Zahl zuordnen lässt, die aber leicht unterschätzt wird: Zeit. Konkret <strong>die Lücke zwischen der Entscheidung für Self-Hosting und dem produktiven Betrieb eines nützlichen Workflows</strong>.</p>
<p>Die Entscheidung fällt schnell. Die Beschaffung von Hardware oder die Bindung an Cloud-Kapazitäten dauert Wochen. Das initiale Deployment des Serving-Stacks und eines ersten Modells dauert weitere Wochen. Einen ersten Workflow zu integrieren und produktiv zu machen dauert Monate. Die betriebliche Reife für den zuverlässigen Betrieb mehrerer Workflows zu erreichen dauert noch länger.</p>
<p>Für die meisten Unternehmen liegt der realistische Zeitrahmen von <em>„Wir bauen das selbst"</em> bis <em>„Wir betreiben produktive KI darauf"</em> zwischen <strong>neun und achtzehn Monaten</strong>. Manche Teams sind schneller; viele sind langsamer. In diesem Zeitfenster hat das Unternehmen entweder keine KI in den Workflows, die das Projekt bedienen soll — oder es nutzt KI über externe Endpunkte, die das Projekt eigentlich ablösen sollte.</p>
<p>Das hat zwei Konsequenzen. Die erste sind die <strong>Opportunitätskosten</strong>: Die Workflows, die durch KI hätte verbessert werden sollen, werden während der Aufbauphase nicht verbessert — der geschäftliche Wert dieser Verzögerung ist real. Die zweite ist das <strong>strategische Risiko</strong>: Im selben Zeitfenster entwickelt sich die externe LLM-Landschaft weiter — das interne Modell, das schließlich produktiv geht, kann bereits zwei Iterationen hinter dem externen Angebot zurückliegen.</p>
<p>Ein häufiges Muster: <em>Das interne Modell erreicht Produktionsqualität genau dann, wenn das Team feststellt, dass der Workflow, den es eigentlich unterstützen sollte, in der Zwischenzeit auf externe Endpunkte umgestellt wurde.</em> <strong>Das Projekt gelingt technisch — und scheitert strategisch.</strong></p>

<h2>6. Wartung — die Kostenkomponente, die nicht endet</h2>
<p>Sobald das System läuft, hören die Kosten nicht auf. <strong>Sie verlagern sich in eine andere Kategorie.</strong></p>
<ul>
  <li><strong>Modell-Updates.</strong> Alle paar Monate werden neue Open-Source-Modelle mit deutlich verbesserten Fähigkeiten veröffentlicht. Das Team muss jedes Release evaluieren, über ein Upgrade entscheiden, die Migration planen, die parallele Evaluierung durchführen und die Umstellung vollziehen. Für ein einzelnes Modell ist das ein wiederkehrendes Engineering-Projekt — nicht riesig, aber <em>kontinuierlich</em>. Bei mehreren Modellen für verschiedene Workflows nimmt das einen erheblichen Teil der Teamkapazität in Anspruch.</li>
  <li><strong>Evaluierung und Qualitätsmonitoring.</strong> Das Modell, das im letzten Quartal gut funktioniert hat, muss nicht dieselbe Qualität auf der aktuellen Eingabeverteilung liefern. Workflows entwickeln sich weiter, Dokumente ändern sich, Geschäftskontexte verschieben sich. Die Evaluierungsinfrastruktur muss Qualitätsdrift erkennen, <em>bevor</em> Nutzer es bemerken. Das ist kontinuierliche Engineering-Arbeit — keine einmalige Einrichtung.</li>
  <li><strong>Infrastruktur-Updates.</strong> Der Serving-Stack erhält Aktualisierungen; GPU-Treiber ändern sich; Sicherheits-Patches erscheinen; Cloud-Plattformen deprecaten Dienste. Nichts davon ist dramatisch, aber das Team muss aktuell bleiben und Änderungen einpflegen, ohne die Produktionsworkflows zu beeinträchtigen.</li>
  <li><strong>Workflow-Evolution.</strong> Mit dem Unternehmen verändern sich die Workflows, die das Modell unterstützt. Neue Prompts müssen entwickelt, evaluiert und ausgerollt werden. Alte Prompts müssen zurückgezogen werden. Workflow-Integrationen müssen aktualisiert werden. <em>Das Team, das das System aufgebaut hat, ist das Team, das die Workflows wartet, die es bedient</em> — das ist mehr Arbeit, als der initiale Aufbau vermuten ließ.</li>
</ul>
<p>Die Wartungskosten sind die am schwersten prognostizierbaren, weil <strong>sie im ursprünglichen Budget nicht erscheinen</strong>. Sie zeigen sich über den Mehrjahreszeitraum als dauerhafter Teamaufwand gegen ein wachsendes Portfolio an Workflows. <em>Unternehmen, die mit Self-Hosted-KI erfolgreich sind, haben die Wartungsinvestition von Anfang an eingeplant; Unternehmen, die Schwierigkeiten haben, haben das initiale Deployment für den Gesamtaufwand gehalten.</em></p>

<h2>7. Wann Self-Hosting die richtige Antwort ist</h2>
<p>Angesichts all dessen sind die Fälle, in denen Self-Hosting klar die richtige Antwort ist, spezifisch.</p>
<ul>
  <li><strong>Wenn Datenlokalisierungsanforderungen absolut sind.</strong> Workflows, die Daten unter keinen Umständen an externe Endpunkte senden dürfen, müssen intern betrieben werden. Die Kosten sind die Kosten der Erfüllung dieser Anforderung — die Alternative ist, in diesem Workflow überhaupt keine KI einzusetzen.</li>
  <li><strong>Wenn das Workflow-Volumen die Fixkosten rechtfertigt.</strong> Sehr hohe Anfragevolumina — <em>Millionen von Anfragen pro Tag bei dauerhafter Auslastung</em> — amortisieren Infrastruktur- und Personalkosten über genug Arbeit, um gegenüber Per-Token-Abrechnung vorzuliegen. Der Break-even-Punkt liegt weiter in der Zukunft, als die meisten Unternehmen annehmen — aber für manche Workflows liegt er klar innerhalb des Planungshorizonts.</li>
  <li><strong>Wenn der strategische Fall explizit formuliert und finanziert ist.</strong> Den Aufbau interner KI-Kompetenz als langfristige Investition zu betreiben ist vertretbar. <em>Diese Entscheidung sollte mit vollständiger Transparenz über die Mehrjahreskosten getroffen werden</em> — nicht als Nebeneffekt von <em>„Wir sparen bei den API-Gebühren."</em></li>
</ul>

<h2>8. Wann Self-Hosting die falsche Antwort ist</h2>
<p>Die Fälle, in denen Self-Hosting die falsche Antwort ist, sind ebenfalls spezifisch.</p>
<ul>
  <li><strong>Wenn die Datenlokalisierungsanforderung durch Transformation adressierbar ist.</strong> Für Workflows, bei denen die Daten durch architektonische Maßnahmen in der EU-Region bleiben können — Kapsulierung, Tokenisierung, kundenkontrolliertes Mapping — <em>ist der externe Endpunkt mit geeigneten Schutzmaßnahmen die schnellere, günstigere und leistungsfähigere Lösung</em>. Die Kostenanalyse spricht für diese Workflows in der Regel nicht für Self-Hosting.</li>
  <li><strong>Wenn der Workflow Frontier-Leistungsfähigkeit benötigt.</strong> Das interne Modell liegt beim komplexen Schlussfolgern, langen Kontextfenstern und unbekannten Dokumenttypen hinter dem externen Frontier-Modell zurück. Manche Workflows können mit diesem Rückstand leben; manche nicht. <em>Self-Hosting für Workflows, die das nicht können, erzeugt ein System, das funktioniert, aber zu wenig leistet.</em></li>
  <li><strong>Wenn die Kalkulation das vollständige Team nicht einschloss.</strong> Ein Self-Hosting-Programm, das nur für Infrastruktur finanziert ist, läuft entweder mit Unterbesetzung weiter oder absorbiert stillschweigend das Budget, das für andere Zwecke vorgesehen war. <em>In beiden Fällen holen die tatsächlichen Kosten die optimistische Prognose ein.</em></li>
</ul>

<h2>9. Das Betriebsmodell, bei dem die meisten Unternehmen landen</h2>
<p>Unter Unternehmen, die diesen Weg durchlaufen haben, ist das entstehende Deployment in der Regel kein reines Self-Hosting. <strong>Es ist ein hybrides Modell</strong>, bei dem die selbst betriebene Infrastruktur die Workflows übernimmt, die sie tatsächlich erfordern — die Fälle mit absoluten Restriktionen, die strategischen Investitionsfälle, die Volumenfälle, bei denen die Rechnung aufgeht — und externe Endpunkte mit Transformation den Rest übernehmen.</p>
<p>Das hybride Muster ist kein Kompromiss. <strong>Es ist die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet.</strong> Workflows, die Self-Hosting benötigen, erhalten Self-Hosting. Workflows, die das nicht tun, erhalten externe Endpunkte mit Schutzmaßnahmen. Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends — <em>zu deutlich geringeren Gesamtkosten als ein einziges Backend, das alles abdecken muss</em>.</p>
<p>Für das grundsätzliche Argument, warum Hybrid die architektonisch ehrliche Antwort ist und kein politischer Kompromiss, siehe den Pillar-Artikel zum Thema, wo Enterprise-KI betrieben werden sollte. Für die Routing-Schicht, die Hybrid tatsächlich funktionsfähig macht, siehe den Artikel zum Routing von KI-Workflows zwischen Cloud- und lokalen Modellen. Für Workflows am strikten Ende des Self-Hosting-Spektrums — wo kein externer Endpunkt akzeptabel ist — siehe den Artikel über KI ohne Netzwerkzugang.</p>

<div class="takeaways">
  <div class="takeaways__label">Wichtigste Erkenntnisse</div>
  <ul>
    <li>Das Modell selbst ist kostenfrei — die Überraschungen liegen in jeder anderen Schicht der Kostenstruktur</li>
    <li>Infrastruktur (GPU + Serving-Stack + Monitoring) ist real, wird aber typischerweise angemessen budgetiert</li>
    <li>Personal ist die Schicht, die Projektionen am häufigsten sprengt — mindestens 6–10 Engineers, 15–20 für größere Deployments, mit Personalkosten, die die Infrastrukturkosten über drei Jahre um das 2- bis 3-Fache übersteigen</li>
    <li>Zeit kumuliert sich als Opportunitätskosten — 9–18 Monate vom Beschluss bis zum produktiven KI-Betrieb, in denen Workflows warten und die externe Frontier sich weiterentwickelt</li>
    <li>Wartung endet nicht — Modell-Updates, Qualitätsdrift, Infrastruktur-Patches, Workflow-Evolution akkumulieren sich als dauerhafter Teamaufwand</li>
    <li>Richtig, wenn: Restriktionen absolut sind · Volumen die Fixkosten rechtfertigt · der strategische Fall explizit formuliert und finanziert ist</li>
    <li>Falsch, wenn: Transformation die Restriktion adressieren könnte · der Workflow Frontier-Leistungsfähigkeit benötigt · die Kalkulation das vollständige Team nicht einschloss</li>
    <li>Das Betriebsmodell, bei dem die meisten Unternehmen landen, ist hybrid — Self-Hosted für Workflows, die es erfordern, externe Endpunkte mit Transformation für die übrigen, unter einer Routing-Schicht und einem Governance-Framework</li>
  </ul>
</div>

<h2>Häufig gestellte Fragen</h2>

<h3>Ist selbst betriebene KI nicht günstiger als die Per-Token-Abrechnung externer APIs?</h3>
<p>Nur dann, wenn die Kalkulation alles einschließt — nicht nur das Modell. Das Modell selbst ist kostenfrei: Llama, Mistral, Qwen und ihre Nachfolger werden unter unternehmensfreundlichen Lizenzen ohne Per-Token-Gebühren veröffentlicht. Wo die Kalkulation typischerweise bricht, ist alles andere: GPU-Infrastruktur (angemessen budgetiert), das Team für den Betrieb (zu knapp budgetiert), die Zeit zwischen Entscheidung und Produktionsbetrieb (kumuliert als Opportunitätskosten) und laufende Wartung (endet nicht). Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. <strong>Der Break-even-Punkt gegenüber API-Abrechnung liegt weiter in der Zukunft, als die meisten Unternehmen annehmen.</strong></p>

<h3>Wie groß muss das Team für einen ernsthaften internen LLM-Betrieb sein?</h3>
<p>Für einige Geschäftsbereiche sind es <strong>sechs bis zehn Personen</strong>. Für ein größeres Deployment, das mehrere Geschäftsbereiche in einem komplexen Unternehmen bedient, sind es <strong>fünfzehn bis zwanzig</strong>. Die Zusammensetzung: ML-Platform-Engineers (2–4), ML-Operations-Engineers (2–3), Evaluierungs-Engineers (1–2), Workflow-Integration-Engineers (2–3 pro großem Workflow-Bereich) und technische Führungskräfte (mindestens ein Senior-Engineer). Geringe Kopfzahl, aber hoher laufender Aufwand — ML-Engineers mit den erforderlichen Qualifikationen werden deutlich oberhalb des allgemeinen Engineering-Marktes vergütet. <em>Die Teamkosten sind das, was die meisten Projektionen zu knapp ansetzen.</em></p>

<h3>Wann ist Self-Hosting tatsächlich die richtige Antwort?</h3>
<p>Drei spezifische Fälle. Erstens, wenn <strong>Datenlokalisierungsanforderungen absolut sind</strong> — Workflows, die Daten unter keinen Umständen an externe Endpunkte senden dürfen, müssen intern betrieben werden; die Kosten sind die Kosten der Erfüllung dieser Anforderung. Zweitens, wenn <strong>das Workflow-Volumen die Fixkosten rechtfertigt</strong> — dauerhaft Millionen von Anfragen pro Tag amortisieren Infrastruktur- und Teamkosten über genug Arbeit, um gegenüber Per-Token-Abrechnung vorzuliegen. Drittens, wenn <strong>der strategische Fall explizit formuliert und finanziert ist</strong> — Aufbau interner KI-Kompetenz als langfristige Investition, mit vollständiger Transparenz über die Mehrjahreskosten statt als Nebeneffekt von <em>„Wir sparen bei den API-Gebühren."</em></p>

<h3>Wann ist Self-Hosting die falsche Antwort?</h3>
<p>Drei spezifische Fälle. Wenn <strong>die Datenlokalisierungsanforderung durch Transformation adressierbar ist</strong> — für Workflows, bei denen Daten durch Kapsulierung, Tokenisierung und kundenkontrolliertes Mapping in der EU-Region bleiben können, ist der externe Endpunkt mit geeigneten Schutzmaßnahmen schneller, günstiger und leistungsfähiger. Wenn <strong>der Workflow Frontier-Leistungsfähigkeit benötigt</strong> — interne Modelle liegen beim komplexen Schlussfolgern, langen Kontexten und unbekannten Dokumenttypen hinter dem Frontier zurück; Self-Hosting für Workflows, die diesen Rückstand nicht tolerieren können, erzeugt Systeme, die funktionieren, aber zu wenig leisten. Wenn <strong>die Kalkulation das vollständige Team nicht einschloss</strong> — nur für Infrastruktur finanzierte Programme laufen entweder mit Unterbesetzung weiter oder absorbieren Budgets, die für andere Zwecke bestimmt waren.</p>

<h3>Wie lang ist der realistische Zeitrahmen vom Beschluss bis zum produktiven KI-Betrieb?</h3>
<p><strong>Neun bis achtzehn Monate</strong> für die meisten Unternehmen. Beschaffung dauert Wochen, das initiale Serving-Stack-Deployment dauert weitere Wochen, einen ersten Workflow zu integrieren und nutzbar zu machen dauert Monate — und die betriebliche Reife für den zuverlässigen Betrieb mehrerer Workflows zu erreichen dauert noch länger. In diesem Zeitfenster hat das Unternehmen entweder keine KI in den betroffenen Workflows oder nutzt die externen Endpunkte weiter, die das Projekt ablösen sollte. <em>Die Opportunitätskosten sind real</em> — und im selben Zeitfenster entwickelt sich die externe LLM-Landschaft weiter; das interne Modell, das schließlich produktiv geht, kann bereits hinter dem aktuellen Stand zurückliegen.</p>

<h3>Enden die Kosten, sobald das System läuft?</h3>
<p>Nein — sie verlagern sich. <strong>Modell-Updates</strong> (neue Open-Source-Releases alle paar Monate erfordern Evaluierung, Migration, parallele Evaluierung, Umstellung). <strong>Qualitätsmonitoring</strong> (Workflows entwickeln sich, Eingabeverteilungen verschieben sich, die Evaluierungsinfrastruktur muss Drift erkennen). <strong>Infrastruktur-Updates</strong> (Serving-Stack-Aktualisierungen, GPU-Treiber-Änderungen, Sicherheits-Patches, Cloud-Deprecations). <strong>Workflow-Evolution</strong> (neue Prompts entwickeln, alte zurückziehen, Integrationen aktualisieren). Das ist die Kostenkomponente, die am schwersten zu prognostizieren ist, weil sie im ursprünglichen Budget nicht erscheint — <em>sie zeigt sich über mehrere Jahre als dauerhafter Teamaufwand gegen ein wachsendes Workflow-Portfolio</em>.</p>

<h3>Welches Betriebsmodell wählen die meisten Unternehmen am Ende?</h3>
<p>Hybrid — nicht als politischer Kompromiss, sondern als die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet. Die selbst betriebene Infrastruktur übernimmt Workflows, die sie tatsächlich erfordern (Fälle mit absoluten Restriktionen, strategische Investitionsfälle, Volumenfälle, bei denen die Rechnung aufgeht). Externe Endpunkte mit Transformation übernehmen den Rest. <strong>Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends</strong> — zu deutlich geringeren Gesamtkosten als ein einziges Backend, das alles abdecken muss.</p>

## Section 04: Related Articles

Where to Read Next
Weiterführende Artikel

Where to Run Enterprise AI: External, On-Premise, or Both
KI im Unternehmen: extern, On-Premise oder beides

Routing AI Workflows Between Cloud and Local Models
KI-Workflows zwischen Cloud- und lokalen Modellen routen

When AI Must Run Without Network Access
Wenn KI ohne Netzwerkzugang betrieben werden muss

## Section 05: FAQ JSON-LD

{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Ist selbst betriebene KI nicht günstiger als die Per-Token-Abrechnung externer APIs?","acceptedAnswer":{"@type":"Answer","text":"Nur dann, wenn die Kalkulation alles einschließt — nicht nur das Modell. Das Modell selbst ist kostenfrei: Llama, Mistral, Qwen und ihre Nachfolger werden unter unternehmensfreundlichen Lizenzen ohne Per-Token-Gebühren veröffentlicht. Wo die Kalkulation typischerweise bricht, ist alles andere: GPU-Infrastruktur (angemessen budgetiert), das Team für den Betrieb (zu knapp budgetiert), die Zeit zwischen Entscheidung und Produktionsbetrieb (kumuliert als Opportunitätskosten) und laufende Wartung (endet nicht). Über einen Dreijahreszeitraum übersteigen die Personalkosten die Infrastrukturkosten typischerweise um das Zwei- bis Dreifache. Der Break-even-Punkt gegenüber API-Abrechnung liegt weiter in der Zukunft, als die meisten Unternehmen annehmen."}}, {"@type":"Question","name":"Wie groß muss das Team für einen ernsthaften internen LLM-Betrieb sein?","acceptedAnswer":{"@type":"Answer","text":"Für einige Geschäftsbereiche sind es sechs bis zehn Personen. Für ein größeres Deployment, das mehrere Geschäftsbereiche in einem komplexen Unternehmen bedient, sind es fünfzehn bis zwanzig. Die Zusammensetzung: ML-Platform-Engineers (2–4), ML-Operations-Engineers (2–3), Evaluierungs-Engineers (1–2), Workflow-Integration-Engineers (2–3 pro großem Workflow-Bereich) und technische Führungskräfte (mindestens ein Senior-Engineer). Geringe Kopfzahl, aber hoher laufender Aufwand — ML-Engineers mit den erforderlichen Qualifikationen werden deutlich oberhalb des allgemeinen Engineering-Marktes vergütet. Die Teamkosten sind das, was die meisten Projektionen zu knapp ansetzen."}}, {"@type":"Question","name":"Wann ist Self-Hosting tatsächlich die richtige Antwort?","acceptedAnswer":{"@type":"Answer","text":"Drei spezifische Fälle. Erstens, wenn Datenlokalisierungsanforderungen absolut sind — Workflows, die Daten unter keinen Umständen an externe Endpunkte senden dürfen, müssen intern betrieben werden; die Kosten sind die Kosten der Erfüllung dieser Anforderung. Zweitens, wenn das Workflow-Volumen die Fixkosten rechtfertigt — dauerhaft Millionen von Anfragen pro Tag amortisieren Infrastruktur- und Teamkosten über genug Arbeit, um gegenüber Per-Token-Abrechnung vorzuliegen. Drittens, wenn der strategische Fall explizit formuliert und finanziert ist — Aufbau interner KI-Kompetenz als langfristige Investition, mit vollständiger Transparenz über die Mehrjahreskosten statt als Nebeneffekt von 'Wir sparen bei den API-Gebühren.'"}}, {"@type":"Question","name":"Wann ist Self-Hosting die falsche Antwort?","acceptedAnswer":{"@type":"Answer","text":"Drei spezifische Fälle. Wenn die Datenlokalisierungsanforderung durch Transformation adressierbar ist — für Workflows, bei denen Daten durch Kapsulierung, Tokenisierung und kundenkontrolliertes Mapping in der EU-Region bleiben können, ist der externe Endpunkt mit geeigneten Schutzmaßnahmen schneller, günstiger und leistungsfähiger. Wenn der Workflow Frontier-Leistungsfähigkeit benötigt — interne Modelle liegen beim komplexen Schlussfolgern, langen Kontexten und unbekannten Dokumenttypen hinter dem Frontier zurück; Self-Hosting für Workflows, die diesen Rückstand nicht tolerieren können, erzeugt Systeme, die funktionieren, aber zu wenig leisten. Wenn die Kalkulation das vollständige Team nicht einschloss — nur für Infrastruktur finanzierte Programme laufen entweder mit Unterbesetzung weiter oder absorbieren Budgets, die für andere Zwecke bestimmt waren."}}, {"@type":"Question","name":"Wie lang ist der realistische Zeitrahmen vom Beschluss bis zum produktiven KI-Betrieb?","acceptedAnswer":{"@type":"Answer","text":"Neun bis achtzehn Monate für die meisten Unternehmen. Beschaffung dauert Wochen, das initiale Serving-Stack-Deployment dauert weitere Wochen, einen ersten Workflow zu integrieren und nutzbar zu machen dauert Monate — und die betriebliche Reife für den zuverlässigen Betrieb mehrerer Workflows zu erreichen dauert noch länger. In diesem Zeitfenster hat das Unternehmen entweder keine KI in den betroffenen Workflows oder nutzt die externen Endpunkte weiter, die das Projekt ablösen sollte. Die Opportunitätskosten sind real — und im selben Zeitfenster entwickelt sich die externe LLM-Landschaft weiter; das interne Modell, das schließlich produktiv geht, kann bereits hinter dem aktuellen Stand zurückliegen."}}, {"@type":"Question","name":"Enden die Kosten, sobald das System läuft?","acceptedAnswer":{"@type":"Answer","text":"Nein — sie verlagern sich. Modell-Updates (neue Open-Source-Releases alle paar Monate erfordern Evaluierung, Migration, parallele Evaluierung, Umstellung). Qualitätsmonitoring (Workflows entwickeln sich, Eingabeverteilungen verschieben sich, die Evaluierungsinfrastruktur muss Drift erkennen). Infrastruktur-Updates (Serving-Stack-Aktualisierungen, GPU-Treiber-Änderungen, Sicherheits-Patches, Cloud-Deprecations). Workflow-Evolution (neue Prompts entwickeln, alte zurückziehen, Integrationen aktualisieren). Das ist die Kostenkomponente, die am schwersten zu prognostizieren ist, weil sie im ursprünglichen Budget nicht erscheint — sie zeigt sich über mehrere Jahre als dauerhafter Teamaufwand gegen ein wachsendes Workflow-Portfolio."}}, {"@type":"Question","name":"Welches Betriebsmodell wählen die meisten Unternehmen am Ende?","acceptedAnswer":{"@type":"Answer","text":"Hybrid — nicht als politischer Kompromiss, sondern als die Architektur, die das Kostenprofil jeder Workflow-Kategorie ihrer tatsächlichen Restriktion zuordnet. Die selbst betriebene Infrastruktur übernimmt Workflows, die sie tatsächlich erfordern (Fälle mit absoluten Restriktionen, strategische Investitionsfälle, Volumenfälle, bei denen die Rechnung aufgeht). Externe Endpunkte mit Transformation übernehmen den Rest. Das Team betreibt eine Routing-Schicht, ein Governance-Framework und zwei Backends — zu deutlich geringeren Gesamtkosten als ein einziges Backend, das alles abdecken muss."}} ] }
