# sllm-self-hosted-reality-check — Deutsche Übersetzung (localize)

## Section 01: Hero

← Learn
← Learn

sLLM 자체구축, 정말 답일까 — 비용·성능·보안의 진짜 트레이드오프
Eigenbetrieb eines sLLM — Lohnt sich das wirklich? Kosten, Leistung und die echten Trade-offs

공공기관 sLLM 자체구축의 진짜 비용(5년 28~38억), 상용 LLM 대비 성능 격차 추세, 잘못된 선택 패턴을 분석합니다.
Eine nüchterne Analyse der tatsächlichen TCO-Kosten (5 Jahre, 1–2 Mio. EUR), der wachsenden Leistungslücke gegenüber kommerziellen LLMs sowie typischer Entscheidungsfehler in regulierten DACH-Unternehmen.

정책 분석
Technologie-Analyse

18분 읽기
~18 Min. Lesezeit

2026년 5월 업데이트
Mai 2026

## Section 02: TL;DR

TL;DR
TL;DR

sLLM 자체구축은 데이터 통제와 도메인 특화 측면에서 매력적이지만, 진짜 비용은 GPU 인프라뿐 아니라 운영 인력·전력·교체 부담을 합치면 5년 누적 28~38억 원에 달합니다. 더 본질적인 문제는 상용 LLM과의 성능 격차가 시간이 갈수록 벌어진다는 점입니다. sLLM 자체구축이 정답인 경우는 명확히 존재하지만, 일반 행정 효율화가 목적이라면 게이트웨이 방식이 더 합리적입니다.
Der Eigenbetrieb eines sLLM erscheint attraktiv — vollständige Datenkontrolle, keine Abhängigkeit von externen Anbietern. Die tatsächlichen Gesamtkosten über fünf Jahre liegen jedoch typischerweise zwischen 1,4 und 1,9 Mio. EUR, wenn man neben der GPU-Infrastruktur auch Betriebspersonal, Energie und den regelmäßigen Modellwechsel einrechnet. Gravierender ist ein strukturelles Problem: Der Leistungsabstand zu kommerziellen Spitzenmodellen vergrößert sich über die Zeit, anstatt sich zu schließen. Für Organisationen mit konkreten regulatorischen Anforderungen (DSGVO, BSI C5, EU AI Act) kann Eigenbetrieb die richtige Wahl sein. Für die Mehrheit der Unternehmen, die primär operative Effizienz anstreben, ist ein Gateway-Ansatz wirtschaftlich überlegen.

## Section 03: Article Body

<h2>1. Warum der Eigenbetrieb eines sLLM verlockend erscheint</h2>
<p>Zunächst zur Frage, warum sich so viele Organisationen für den Eigenbetrieb eines sLLM entscheiden. Die Gründe sind nicht von der Hand zu weisen — und in Teilen auch berechtigt.</p>

<h3>1.1 Vollständige Kontrolle über sensible Daten</h3>
<p>Das stärkste Argument ist die <strong>vollständige Datenkontrolle</strong>. Alle Prompts und Antworten bleiben innerhalb der eigenen Infrastruktur. Eine Datenweitergabe an externe Anbieter ist strukturell ausgeschlossen. Für Datenschutzbeauftragte und CISOs ist das ein eindeutiges Argument: „Unsere Daten verlassen das Haus nicht." In DSGVO-regulierten Umgebungen, insbesondere in Banken und Versicherungen, lässt sich damit jede Compliance-Prüfung einfacher bestehen.</p>
<p>Auch unter dem EU AI Act und den BSI C5-Anforderungen bietet der Eigenbetrieb einen klaren Vorteil: Verarbeitungsort, Verantwortlichkeit und Kontrollmechanismen liegen vollständig in der Hand der Organisation. Die meisten Sicherheitsbedenken gegenüber externen KI-Diensten entfallen strukturell.</p>

<h3>1.2 Digitale Souveränität und langfristige Vermögensbildung</h3>
<p>Das zweite Argument ist <strong>digitale Souveränität</strong>. Wer ein Modell auf eigenen Daten trainiert, schafft ein organisationales Asset, das unabhängig von Anbieterstrategien und Preisänderungen bleibt. Ein fein abgestimmtes Modell, das auf internen Dokumenten, Prozessen und Fachsprache basiert, kann zu einem strategischen Wettbewerbsvorteil werden — insbesondere in Branchen wie dem Gesundheitswesen oder der Finanzdienstleistung, wo proprietäres Fachwissen einen hohen Wert hat.</p>
<p>Für Organisationen, deren eigentlicher Auftrag der Aufbau domänenspezifischer KI-Fähigkeiten ist — etwa eine Forschungsbehörde oder ein Fachinformationsdienst — ist der Eigenbetrieb mehr als ein Mittel zum Zweck: Er ist das Ziel.</p>

<h3>1.3 Domänenspezifische Anpassung</h3>
<p>Das dritte Argument ist die <strong>Freiheit beim Fine-Tuning</strong>. Wer ein Modell auf eigenen Daten trainiert, kann es gezielt auf spezifische Aufgaben ausrichten — Vertragsanalyse, medizinische Dokumentation, regulatorische Berichterstattung. Die Erwartung: bessere Ergebnisse als mit einem generischen Modell, das nicht mit branchenspezifischen Quellen vertraut ist.</p>
<p>Alle drei Argumente haben ihre Berechtigung. Die eigentliche Frage ist, zu welchem Preis diese Vorteile erkauft werden — und ob sie sich in der Praxis wirklich realisieren lassen.</p>

<h2>2. Die tatsächlichen Kosten — was Angebote verschweigen</h2>
<p>Kostendiskussionen über sLLM-Eigenbetrieb beginnen häufig mit dem GPU-Server-Preis und enden dort. Die tatsächlichen Gesamtbetriebskosten (TCO, Total Cost of Ownership) liegen jedoch um ein Vielfaches höher. Auf fünf Jahre gerechnet ergibt sich folgendes Bild.</p>

<h3>2.1 Die versteckten Initialkosten</h3>
<p>Die häufige Annahme, dass „GPU-Server für 250.000–300.000 EUR" die gesamten Aufbaukosten abdecken, ist ein typischer Planungsfehler. Tatsächlich sind darüber hinaus erforderlich:</p>
<ul>
  <li><strong>Netzwerk- und Storage-Infrastruktur</strong>: Hochbandbreiten-Netzwerk-Switches, NVMe-Storage, Backup-Systeme</li>
  <li><strong>Strom- und Kühlungskapazitäten</strong>: Acht H100-GPUs verbrauchen über 5 kW. Viele Rechenzentrumsumgebungen erfordern eine Nachrüstung der Kühlung und Stromversorgung.</li>
  <li><strong>Sicherheitsinfrastruktur</strong>: Modellschutz, Zugriffssteuerung, Audit-Logging — gerade unter BSI C5 und DSGVO keine Optionen, sondern Pflicht.</li>
  <li><strong>Personalkosten für den Initialaufbau</strong>: Die ersten drei bis sechs Monate erfordern dedizierte Ingenieurkapazitäten für Modellauswahl, Fine-Tuning und Infrastrukturaufbau.</li>
</ul>

<h3>2.2 Die eigentliche Kostentreiberin: Personal</h3>
<p>Der größte Kostenfaktor beim sLLM-Eigenbetrieb sind nicht die GPUs, sondern <strong>qualifiziertes Personal</strong>. Für einen stabilen Betrieb werden mindestens folgende Rollen benötigt:</p>
<ul>
  <li>MLOps-Engineer: Modell-Deployment, Betrieb, Monitoring</li>
  <li>KI-Engineer: Fine-Tuning, Leistungsoptimierung, Evaluation neuer Modelle</li>
  <li>Infrastruktur-Engineer: GPU-Server-Management, Incident Response</li>
</ul>
<p>Das entspricht mindestens zwei, typischerweise drei bis vier Vollzeitstellen. In regulierten Branchen — Finanzwesen, Gesundheitswesen, öffentliche Verwaltung — ist die Gewinnung und Bindung solcher Profile mit marktüblichen Gehältern eine eigene organisatorische Herausforderung. Wird der Betrieb ausgelagert, steigen die Kosten weiter und es entstehen neue externe Abhängigkeiten.</p>

<h3>2.3 Die unterschätzte Kostenposition: Modellwechsel</h3>
<p>Am häufigsten werden die <strong>Kosten für den periodischen Basismodell-Wechsel</strong> unterschätzt. Das Open-Source-LLM-Ökosystem entwickelt sich sehr schnell. Bei jeder neuen Modellgeneration — Llama 3 zu Llama 4, oder einem Wechsel zu einer anderen Modellarchitektur — wiederholen sich folgende Arbeitsschritte:</p>
<ul>
  <li>Fine-Tuning auf dem neuen Basismodell (Wochen bis Monate)</li>
  <li>Erneute Infrastrukturoptimierung</li>
  <li>Leistungsvergleich und Validierung</li>
  <li>Migrationszeitraum mit parallelem Betrieb beider Systeme</li>
</ul>
<p>Dieser Zyklus wiederholt sich alle ein bis zwei Jahre und verursacht jeweils Kosten von 100.000–150.000 EUR. Über fünf Jahre sind mindestens zwei Wechselzyklen zu kalkulieren.</p>

<h2>3. Die Leistungslücke — warum sie sich nicht schließt</h2>
<p>Angenommen, die Kosten sind tragbar. Die nächste Frage lautet: Welche Leistung wird dafür erbracht? Hier zeigt sich das zweite strukturelle Problem des sLLM-Eigenbetriebs.</p>

<h3>3.1 Warum sich die Lücke vergrößert statt zu schließen</h3>
<p>Viele Evaluierungsberichte für sLLM-Eigenbetrieb heben hervor, dass sich Open-Source-Modelle schnell verbessern. In absoluten Punktzahlen stimmt das. Der MMLU-Pro-Score von Llama 3 8B stieg von etwa 32 Punkten auf rund 47 Punkte mit Llama 3.3 8B und Qwen 2.5 7B — ein Zuwachs von 15 Punkten in eineinhalb Jahren.</p>
<p>Im gleichen Zeitraum entwickelten sich kommerzielle Modelle jedoch deutlich schneller. Claude 3 Opus lag im ersten Halbjahr 2024 bei rund 68 MMLU-Pro-Punkten. Claude 3.5 Sonnet erreichte im zweiten Halbjahr 2024 etwa 76 Punkte; 2025 kommen Claude 4 Sonnet und GPT-5 auf rund 85–88 Punkte. <strong>Die Lücke wuchs von 36 Punkten (H1 2024) auf 41 Punkte (H2 2025) — trotz absoluter Verbesserung der Open-Source-Modelle.</strong></p>
<p>Das eigentliche Problem liegt in der Trendentwicklung der nächsten drei Jahre. 7–8B-Modelle nähern sich einer Sättigungsgrenze um die 50 MMLU-Pro-Punkte, bedingt durch ihre Modellgröße. Kommerzielle Modelle sind dagegen in ein neues Paradigma eingetreten: <strong>Inference-Time-Scaling</strong>. OpenAIs o1/o3-Serie und Claudes Extended Thinking sind Beispiele dafür. Dieser Ansatz steigert die Leistung durch erhöhten Rechenaufwand zum Inferenzzeitpunkt — nicht durch größere Modelle. Für kleine Modelle ist er aus Kostengründen praktisch nicht anwendbar. Damit öffnet sich eine strukturelle Schere, die durch Fine-Tuning nicht zu schließen ist.</p>
<p>Bis 2028 ist mit einer Lücke von über 46 Punkten zu rechnen. Die Hoffnung, durch Eigenbetrieb irgendwann aufzuholen, ist durch zwei Jahre empirische Daten widerlegt. Die technologische Entwicklung zeigt in dieselbe Richtung.</p>
<p>Die Ursachen für die anhaltende Lücke sind strukturell:</p>
<ul>
  <li><strong>Investitionsgefälle</strong>: OpenAI, Anthropic und Google investieren jeweils mehrere Milliarden US-Dollar jährlich in die Modellentwicklung. Die Gesamtinvestition des gesamten Open-Source-Ökosystems erreicht diesen Wert nicht.</li>
  <li><strong>Skalierungsgesetze (Scaling Laws)</strong>: Die aktuelle KI-Leistung skaliert mit Modellgröße, Datenmenge und Rechenkapazität. Kommerzielle Modelle operieren im Bereich von Hunderten Milliarden bis Billionen Parametern. Realistisch einsetzbare sLLMs liegen bei 7–32B. Das entspricht einem Größenunterschied von Faktor 10–100, der sich direkt in Leistungsunterschieden niederschlägt.</li>
  <li><strong>Infrastrukturvorsprung</strong>: Kommerzielle Modelle werden auf Clustern mit Zehntausenden GPUs trainiert. Eine interne Infrastruktur mit acht H100-Karten hat einen grundlegend anderen Ausgangspunkt.</li>
  <li><strong>Strukturelle Barriere beim Inference-Time-Scaling</strong>: Das seit Ende 2024 dominante Paradigma ist für kleine Modelle wirtschaftlich nicht skalierbar. Kommerzielle Anbieter erschließen damit eine neue Leistungsdimension, die für den Eigenbetrieb strukturell unzugänglich bleibt.</li>
</ul>

<h3>3.2 Kann domänenspezifisches Fine-Tuning die Lücke ausgleichen?</h3>
<p>Ein häufiges Gegenargument lautet: „Für unsere spezifischen Anwendungsfälle brauchen wir kein Universalmodell. Fine-Tuning auf Eigendaten macht unseren sLLM überlegen." Dieser Einwand enthält eine partielle Wahrheit — aber er ist als Entscheidungsgrundlage unzureichend.</p>
<p>Folgende Einschränkungen sind zu beachten:</p>
<ul>
  <li><strong>Allgemeine Sprachkompetenz als Fundament</strong>: Auch domänenspezifische Aufgaben — Vertragsanalyse, regulatorische Berichterstattung, medizinische Dokumentation — bauen auf allgemeinem Sprachverständnis und Schlussfolgerungsvermögen auf. Schwache Grundkompetenz begrenzt die domänenspezifische Leistung.</li>
  <li><strong>Kontextuelles Lernen kommerzieller LLMs</strong>: Aktuelle kommerzielle Modelle adaptieren sich über RAG an domänenspezifische Daten, ohne vorheriges Training. Das reduziert den Differenzierungsvorteil von Fine-Tuning erheblich.</li>
  <li><strong>Begrenzte Fine-Tuning-Wirkung</strong>: Fine-Tuning verbessert nachweislich die Domänenleistung, aber der Zugewinn übersteigt in der Praxis selten die bestehende Grundleistungslücke.</li>
</ul>
<p>Die Frage ist nicht, ob Fine-Tuning einen Wert hat — das tut es. Die Frage ist, ob ein Proof of Concept (PoC) für die eigene Domäne durchgeführt wurde, der belegt, dass der sLLM nach Fine-Tuning tatsächlich ausreicht. Entscheidungen ohne diesen empirischen Nachweis tragen ein messbares Risiko.</p>

<h2>4. Betriebslast — Personal und Verantwortung</h2>
<p>Neben Kosten und Leistung wird ein dritter Aspekt regelmäßig unterschätzt: die <strong>operative Dauerlast</strong>. Ein sLLM ist kein Einmalprojekt. Er muss als lebendiges System über Jahre hinweg betrieben werden.</p>

<h3>4.1 Personalgewinnung in einem Verkäufermarkt</h3>
<p>KI-Ingenieure und MLOps-Spezialisten gehören zu den gefragtesten Profilen auf dem DACH-Arbeitsmarkt. Technologieunternehmen und KI-Start-ups bieten Jahresgehälter, mit denen öffentliche Körperschaften oder stark tarifgebundene Unternehmen kaum konkurrieren können. Neben dem finanziellen Aspekt entstehen bei Fremdvergabe des Betriebs neue Wissensabhängigkeiten, die die angestrebte Souveränität wieder untergraben.</p>

<h3>4.2 Betriebsverantwortung und Haftung</h3>
<p>Beim Eigenbetrieb verbleibt die volle Verantwortung für Ausfälle und Sicherheitsvorfälle intern. Bei Nutzung externer kommerzieller Dienste übernimmt der Anbieter die Erstreaktion bei Infrastrukturproblemen. Beim selbst betriebenen sLLM trägt die eigene Organisation allein die Verantwortung — für Hardware-Ausfälle, Qualitätsdegradation des Modells und Sicherheitsvorfälle. In regulierten Branchen, wo DSGVO-Meldepflichten und BSI-Berichtspflichten greifen, ist das ein erheblicher organisatorischer Aufwand.</p>

<h3>4.3 Modell-Evolution als Dauerprojekt</h3>
<p>Der oben beschriebene Basismodell-Wechsel ist nicht nur eine Kostenfrage, sondern auch eine operative Dauerbelastung. Bei jedem Wechselzyklus ist ein separates Projekt für Evaluation, Migrationsplanung und Umstellung zu stemmen — zusätzlich zum laufenden Betrieb. Die kognitive und zeitliche Belastung des Betriebsteams akkumuliert sich über die Jahre.</p>

<h2>5. Wann sLLM-Eigenbetrieb die richtige Wahl ist</h2>
<p>Eine ausgewogene Betrachtung erfordert die klare Benennung der Fälle, in denen Eigenbetrieb tatsächlich sinnvoll ist. Wenn folgende Bedingungen zutreffen, ist sLLM-Eigenbetrieb eine rational begründbare Entscheidung.</p>
<ul>
  <li><strong>Großunternehmen mit entsprechendem IT-Budget</strong>: TCO von 1,4–1,9 Mio. EUR über fünf Jahre ist tragbar, und ein dediziertes KI-Betriebsteam kann aufgebaut werden.</li>
  <li><strong>Regulatorisch oder vertraglich erzwungene Datenisolation</strong>: In bestimmten Bereichen — sicherheitskritische Infrastruktur, Verteidigung, bestimmte Geheimhaltungsstufen — ist die Nutzung externer KI-Dienste rechtlich oder vertraglich ausgeschlossen. Hier ist Eigenbetrieb keine Wahl, sondern Pflicht.</li>
  <li><strong>Domänenspezifisches KI-Modell als Kernkompetenz</strong>: Wenn das primäre Organisationsziel der Aufbau eines proprietären KI-Modells ist — etwa für ein Forschungsinstitut oder einen Fachinformationsdienst —, ist Eigenbetrieb strategisch begründet.</li>
  <li><strong>Sehr hohes Anfragevolumen</strong>: Bei mehreren hunderttausend KI-Anfragen täglich kann der Eigenbetrieb gegenüber nutzungsbasierter API-Abrechnung günstiger werden.</li>
  <li><strong>Klare Langfriststrategie zur Vermögensbildung</strong>: Die Organisation versteht das KI-Modell explizit als langfristiges strategisches Asset und plant entsprechend.</li>
</ul>
<p>Wenn mehrere dieser Bedingungen erfüllt sind, lohnt sich eine eingehende Prüfung des Eigenbetriebs. Sind keine dieser Bedingungen erfüllt, sollten die Entscheidungsgrundlagen kritisch überprüft werden.</p>

<h2>6. Typische Fehlentscheidungsmuster</h2>
<p>In der Praxis lassen sich wiederkehrende Muster bei nicht tragfähigen sLLM-Entscheidungen beobachten. Wenn eines dieser Muster auf Ihre Situation zutrifft, empfiehlt sich eine erneute Überprüfung der Entscheidungsgrundlage.</p>

<h3>Muster 1 — „Externe KI ist per se unsicher"</h3>
<p>Das häufigste Muster: Aus einer abstrakten Risikowahrnehmung gegenüber externen KI-Diensten wird ohne tiefere Analyse der Schluss „also Eigenbetrieb" gezogen. Dabei existieren für externe LLM-Nutzung konkrete Sicherheitsarchitekturen — Prompt-Gateway, Datenkapsulierung, Auditierung. „Extern gleich unsicher, intern gleich sicher" ist ein Bauchgefühl, keine Risikoanalyse. Unter DSGVO und BSI C5 lässt sich externe KI-Nutzung mit geeigneten Kontrollmaßnahmen valide absichern.</p>

<h3>Muster 2 — „Datensouveränität als Selbstzweck"</h3>
<p>Die Entscheidung wird mit Datensouveränität begründet, ohne dass die tatsächlich zu verarbeitenden Daten klassifiziert wurden. In der Praxis zeigt sich häufig, dass ein Großteil der Anwendungsfälle öffentlich zugängliche oder pseudonymisierbare Informationen betrifft, die über geeignete Schutzmaßnahmen extern verarbeitet werden könnten. Der abstrakte Wert „Datensouveränität" darf die konkrete Szenarioanalyse nicht ersetzen.</p>

<h3>Muster 3 — „Wettbewerber macht es auch"</h3>
<p>Ein Wettbewerber oder eine Branchenorganisation hat sLLM-Eigenbetrieb angekündigt — und nun entsteht Handlungsdruck. Aber die Rahmenbedingungen, Anwendungsfälle und strategischen Ziele unterscheiden sich. Was für ein anderes Unternehmen richtig ist, muss für die eigene Organisation nicht gelten. Eine unabhängige Prüfung ist erforderlich.</p>

<h3>Muster 4 — „Das Budget ist vorhanden"</h3>
<p>Ein KI-Infrastrukturbudget wurde bewilligt und muss eingesetzt werden. Das führt dazu, dass die teuerste Option gewählt wird, weil sie am sichtbarsten ist. Vorhandene Mittel verpflichten nicht zur teuersten Lösung. Effizientere Alternativen zu wählen und Restmittel für andere Digitalisierungsmaßnahmen zu nutzen, ist rational — und gegenüber Aufsichtsgremien leichter zu begründen.</p>

<h3>Muster 5 — „Der Anbieter empfiehlt es"</h3>
<p>GPU-, Infrastruktur- und Systemintegrations-Anbieter haben ein natürliches Interesse an Eigenbetriebslösungen — ihr Umsatz korreliert direkt damit. Anbieterempfehlungen sind nützliche Informationsquellen, aber keine neutrale Entscheidungsgrundlage. Eine unabhängige TCO-Analyse und ein Vergleich mit Alternativen sind unabdingbar.</p>

<h2>7. Entscheidungs-Checkliste für sLLM-Eigenbetrieb</h2>
<p>Wenn Sie den sLLM-Eigenbetrieb ernsthaft erwägen, beantworten Sie bitte die folgenden Fragen. Überwiegen die Ja-Antworten, ist Eigenbetrieb eine rational begründete Option. Sind viele Fragen offen oder mit Nein zu beantworten, sollten Alternativen systematisch geprüft werden.</p>

<h2>Häufig gestellte Fragen</h2>

<h3>Reduzieren kleinere Modelle (7B) die Kosten wesentlich?</h3>
<p>Bei der GPU-Infrastruktur ja: Für 7B-Modelle reichen ein bis zwei H100-Karten aus, was die Anfangsinvestition deutlich senkt. Die Personalkosten, Energiekosten und der Aufwand für Modellwechsel bleiben jedoch nahezu identisch. Zudem ist die Leistungslücke bei 7B-Modellen gegenüber kommerziellen Spitzenmodellen noch größer als bei 32B-Modellen — was den Nutzwert entsprechend einschränkt.</p>

<h3>Ist ein Hybrid-Modell aus sLLM und Gateway-Ansatz sinnvoll?</h3>
<p>Grundsätzlich möglich: Bestimmte Abteilungen oder Anwendungsfälle nutzen den sLLM, andere den Gateway-Ansatz. Allerdings bedeutet das, zwei unterschiedliche Betriebsmodelle, Governance-Strukturen und Sicherheitsarchitekturen parallel zu managen — ein erheblicher Mehraufwand. In den meisten Fällen ist es sinnvoller, mit einem Ansatz zu beginnen und bei Bedarf zu erweitern.</p>

<h3>Werden Open-Source-Modelle kommerzielle LLMs nicht bald einholen?</h3>
<p>In bestimmten Benchmarks gibt es temporäre Annäherungen. In der Praxis — insbesondere bei komplexen Schlussfolgerungsaufgaben und der Verarbeitung langer Kontexte — bleibt die Lücke erheblich. Und kommerzielle Modelle stagnieren nicht: Das Inference-Time-Scaling-Paradigma öffnet eine neue Leistungsdimension, die strukturell schwer zugänglich für kleine Modelle ist. Das Muster der vorübergehenden Annäherung gefolgt von erneuter Divergenz wiederholt sich bislang mit jeder Modellgeneration.</p>

<h3>Welches Basismodell sollte für den Eigenbetrieb gewählt werden?</h3>
<p>Aktuell sind Llama-Modelle (Meta), Qwen-Modelle (Alibaba) und für deutschsprachige Anwendungen optimierte Varianten die gängigen Optionen. Die Wahl hängt von Lizenzbedingungen, Leistung auf der eigenen Domäne, Community-Support und konkreten Anwendungsszenarien ab. Unabhängig von der Wahl gilt: In ein bis zwei Jahren wird es bessere Modelle geben. Der Aufwand für den Wechsel muss von Anfang an eingeplant werden.</p>

## Section 04: Related Articles

함께 읽으면 좋은 글
Weiterführende Artikel

공공기관 생성형 AI 도입의 세 가지 길
Drei Wege zur generativen KI im öffentlichen Sektor

N2SF 모델 2 완벽 해설 — 공공기관에서 ChatGPT를 쓸 수 있을까
N2SF Modell 2 — dürfen Behörden ChatGPT nutzen?

N2SF란 무엇인가 — 공공기관 보안의 새 패러다임 완벽 정리
Was ist N2SF — das neue Sicherheitsparadigma für Behörden

sLLM 자체구축, 정말 답일까
Eigenbetrieb eines sLLM — Lohnt sich das?

## Section 05: JSON-LD (FAQ)

{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ {"@type":"Question","name":"Reduzieren kleinere Modelle (7B) die Kosten wesentlich?","acceptedAnswer":{"@type":"Answer","text":"Bei der GPU-Infrastruktur ja: Für 7B-Modelle reichen ein bis zwei H100-Karten aus, was die Anfangsinvestition deutlich senkt. Personalkosten, Energiekosten und der Aufwand für Modellwechsel bleiben jedoch nahezu identisch. Die Leistungslücke bei 7B-Modellen gegenüber kommerziellen Spitzenmodellen ist zudem noch größer als bei 32B-Modellen."}}, {"@type":"Question","name":"Ist ein Hybrid-Modell aus sLLM und Gateway-Ansatz sinnvoll?","acceptedAnswer":{"@type":"Answer","text":"Grundsätzlich möglich. Allerdings bedeutet das, zwei unterschiedliche Betriebsmodelle und Governance-Strukturen parallel zu managen. In den meisten Fällen ist es sinnvoller, mit einem Ansatz zu beginnen und bei Bedarf zu erweitern."}}, {"@type":"Question","name":"Werden Open-Source-Modelle kommerzielle LLMs nicht bald einholen?","acceptedAnswer":{"@type":"Answer","text":"In bestimmten Benchmarks gibt es temporäre Annäherungen. In der Praxis — insbesondere bei komplexer Schlussfolgerung und langen Kontexten — bleibt die Lücke erheblich. Das Inference-Time-Scaling-Paradigma öffnet für kommerzielle Modelle eine neue Leistungsdimension, die strukturell für kleine Modelle unzugänglich bleibt. Das Muster der Annäherung gefolgt von erneuter Divergenz wiederholt sich mit jeder Modellgeneration."}}, {"@type":"Question","name":"Welches Basismodell sollte für den Eigenbetrieb gewählt werden?","acceptedAnswer":{"@type":"Answer","text":"Llama-Modelle (Meta) und Qwen-Modelle (Alibaba) sind gängige Optionen; für deutschsprachige Anwendungen gibt es optimierte Varianten. Die Wahl hängt von Lizenzbedingungen, Domänenleistung und Anwendungsszenarien ab. Unabhängig von der Wahl: In ein bis zwei Jahren wird es bessere Modelle geben. Der Modellwechselaufwand muss von Anfang an eingeplant werden."}} ] }
