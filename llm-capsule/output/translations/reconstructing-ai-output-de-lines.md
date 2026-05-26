# Reconstructing AI Output — Deutsch Übersetzung (localize)
# STATUS: Zur Prüfung durch Native Reviewer — nicht vor Freigabe in Framer eintragen

## Section 01: Hero

← Learn
← Zum Lernbereich

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
KI-Output wiederherstellen: Die letzte Meile zwischen Modellantwort und Geschäftspraxis

The tokenised response from an external LLM is not yet usable. Reconstruction is what turns it into business-ready output — and where most teams underinvest until the workflow stalls in production.
Die tokenisierte Antwort eines externen LLM ist noch nicht einsatzbereit. Erst die Rekonstruktion macht daraus verwertbaren Output — und genau hier investieren die meisten Teams zu wenig, bis der Prozess im Produktivbetrieb ins Stocken gerät.

KI-Architektur
KI-Architektur

~9 min read
~9 Min. Lesezeit

Updated May 2026
Aktualisiert Mai 2026

## Section 02: TL;DR

TL;DR
Zusammenfassung

Reconstruction — the step that maps tokenised LLM output back to original values — is technically straightforward and architecturally critical. Most enterprise AI pilots underinvest in it and stall at production for the same reason: the model works, the integration works, but the output requires manual cleanup and the productivity gain evaporates. Real reconstruction is more than a swap-back: the LLM generates new text that references tokens in novel contexts, sometimes with formatting drift, sometimes hallucinated, sometimes streamed token-by-token. It has to run inside the enterprise environment, colocated with the mapping — running it on convenient external middleware collapses the protection the tokenisation provided. Three integration patterns (inline, streaming, event-driven) cover most workflows. Hallucinated tokens need an explicit policy (flag, drop, or re-prompt). Every operation has to be audited, in logs held separately under the mapping's own access controls. Five operational mistakes recur — manual cleanup, wrong location, static substitution, no logging, provider lock-in. When reconstruction is right, it becomes invisible infrastructure. When it's wrong, the entire architecture's promise quietly fails on the last mile.
Rekonstruktion — der Schritt, der tokenisierten LLM-Output wieder auf Originalwerte abbildet — ist technisch überschaubar, aber architektonisch entscheidend. Die meisten Enterprise-KI-Piloten investieren zu wenig darin und scheitern im Produktivbetrieb am selben Punkt: Das Modell funktioniert, die Integration funktioniert — doch der Output verlangt manuelle Nacharbeit, und der erhoffte Produktivitätsgewinn verpufft. Echte Rekonstruktion ist mehr als ein einfaches Zurücksetzen: Ein LLM erzeugt neuen Text, der Token in unbekannten Kontexten referenziert, manchmal mit Formatierungsabweichungen, manchmal halluziniert, manchmal token-weise gestreamt. Die Rekonstruktion muss innerhalb der Unternehmensinfrastruktur ausgeführt werden, gemeinsam mit dem Mapping — sobald sie auf externer Middleware läuft, bricht der durch die Tokenisierung erzielte Schutz zusammen. Drei Integrationsmuster (Inline, Streaming, Event-Driven) decken die meisten Workflows ab. Halluzinierte Token erfordern eine explizite, konfigurierbare Strategie: markieren, verwerfen oder neu anfordern. Jede Operation muss auditiert und in separaten Logs unter denselben Zugriffskontrollen wie das Mapping gespeichert werden. Fünf Betriebsfehler wiederholen sich: manuelle Bereinigung, falscher Ausführungsort, statische Ersetzung, fehlende Protokollierung, Anbieterabhängigkeit. Wenn die Rekonstruktion stimmt, wird sie zur unsichtbaren Infrastruktur. Wenn nicht, scheitert das gesamte Architekturversprechen still auf der letzten Meile.

## Section 03: Article Body

### 1. Why Reconstruction Is More Than a Swap-Back

1. Warum Rekonstruktion mehr ist als ein simples Zurücksetzen

When enterprise AI teams design a workflow that sends tokenised documents to an external LLM, most of the attention goes to the preparation step: detection, transformation, what crosses the boundary. The response side gets less thought. The assumption is that once the model returns its output, the workflow just needs to swap the tokens back and the result is ready.
Wenn Enterprise-KI-Teams einen Workflow entwerfen, der tokenisierte Dokumente an ein externes LLM übergibt, liegt der Fokus fast immer auf der Vorbereitungsphase: Erkennung, Transformation, was die Grenze überquert. Die Antwortseite erhält deutlich weniger Aufmerksamkeit. Die implizite Annahme: Sobald das Modell seinen Output liefert, genügt es, die Token zurückzutauschen — und das Ergebnis ist fertig.

That assumption is approximately right and operationally wrong. The reconstruction step is technically straightforward — look up tokens in a mapping, substitute back — and architecturally critical. It is where the difference between a pilot that demos well and a workflow that runs in production gets decided. Teams that treat reconstruction as an afterthought consistently find their AI projects stalling at the same point: the model works, the integration works, but the output is not in a form anyone can actually use without manual cleanup, and the productivity gain that justified the project evaporates.
Diese Annahme ist grob korrekt — und operativ falsch. Die Rekonstruktion ist technisch einfach: Token im Mapping nachschlagen, zurücksetzen. Architektonisch ist sie jedoch entscheidend. Hier entscheidet sich, ob ein Pilot in der Demo überzeugt oder ob ein Workflow produktiv betrieben werden kann. Teams, die die Rekonstruktion als Nebensache behandeln, stoßen regelmäßig am selben Punkt an eine Wand: Das Modell läuft, die Integration läuft — aber der Output ist ohne manuelle Nacharbeit nicht nutzbar, und der Produktivitätsgewinn, der das Vorhaben rechtfertigte, löst sich in Luft auf.

In the simplest case, reconstruction is symmetric with tokenisation. The input had Marlene Schmidt replaced with CUST-7F2A; the output references CUST-7F2A; the reconstruction step swaps CUST-7F2A back to Marlene Schmidt and the workflow continues.
Im einfachsten Fall ist die Rekonstruktion symmetrisch zur Tokenisierung: Im Input wurde Marlene Schmidt durch CUST-7F2A ersetzt; der Output referenziert CUST-7F2A; die Rekonstruktion tauscht CUST-7F2A zurück in Marlene Schmidt, der Workflow läuft weiter.

If every workflow looked like this, reconstruction would be a trivial concern. Workflows don't look like this for a few reasons.
Wären alle Workflows so gestaltet, wäre Rekonstruktion eine Nebensache. In der Praxis ist das aus mehreren Gründen nicht der Fall.

The model's response is generative, not just substitutive. The LLM doesn't just copy tokens from input to output; it produces new text that reasons over the tokens. The output references tokens in new sentences, in new combinations, sometimes paraphrased, sometimes summarised, sometimes synthesised across multiple input tokens. A reconstruction layer has to handle tokens appearing in contexts the input never had.
Die Modellantwort ist generativ, nicht nur substitutiv. Ein LLM kopiert keine Token vom Input in den Output — es erzeugt neuen Text, der über die Token schlussfolgert. Der Output referenziert Token in neuen Sätzen, neuen Kombinationen, manchmal paraphrasiert, manchmal zusammengefasst, manchmal über mehrere Eingabe-Token hinweg synthetisiert. Die Rekonstruktionsschicht muss Token in Kontexten verarbeiten, die der Input nie enthielt.

The response can contain tokens the input didn't. A summarisation task that reasons over five tickets might produce a sentence like "Three of the affected customers (CUST-7F2A, CUST-3B91, CUST-9D2C) share the same firmware version." That construction is new. The reconstruction layer has to find each token, look it up, and substitute back into a sentence the model wrote.
Der Output kann Token enthalten, die im Input nicht vorkamen. Eine Zusammenfassung über fünf Tickets kann einen Satz erzeugen wie: „Drei der betroffenen Kunden (CUST-7F2A, CUST-3B91, CUST-9D2C) verwenden dieselbe Firmware-Version." Diese Konstruktion ist neu. Die Rekonstruktionsschicht muss jeden Token finden, nachschlagen und in einen vom Modell formulierten Satz einsetzen.

The response sometimes contains malformed references to tokens. Models occasionally lose track of token formatting, especially across long outputs. A token that went in as CUST-7F2A might come back as CUST 7F2A, CUST7F2A, or simply "the customer designated 7F2A." A reconstruction layer that only does exact string matching fails in these cases, and the output to the user contains visible token fragments that should have been resolved.
Der Output enthält manchmal fehlerhafte Token-Referenzen. Modelle verlieren insbesondere bei langen Ausgaben gelegentlich das Formatierungsmuster. Ein Token, der als CUST-7F2A eingegeben wurde, kann als CUST 7F2A, CUST7F2A oder schlicht als „der Kunde mit der Kennung 7F2A" zurückkommen. Eine Rekonstruktionsschicht, die nur exaktes String-Matching betreibt, versagt in diesen Fällen — der Nutzer erhält Output mit sichtbaren Token-Fragmenten, die hätten aufgelöst werden sollen.

The response may include the model's commentary or hedging. "Based on the information about customer CUST-7F2A, the most likely root cause is..." The reconstruction has to handle the token appearing in a clause the model added on its own, with the same correctness as a token that appears in a direct extraction.
Der Output kann Kommentare oder Einschränkungen des Modells enthalten. „Basierend auf den Informationen zu Kunde CUST-7F2A ist die wahrscheinlichste Ursache ..." Die Rekonstruktion muss Token auch in Nebensätzen, die das Modell eigenständig formuliert hat, mit derselben Genauigkeit verarbeiten wie Token aus direkten Extraktionen.

What looks like swap-back, then, is actually a small but real text-processing problem: robust token recognition across diverse output forms, with the substitution happening in a way that preserves the grammatical coherence of the model's response.
Was wie ein simples Zurücksetzen wirkt, ist in Wirklichkeit ein kleines, aber reales Textverarbeitungsproblem: robuste Token-Erkennung über diverse Ausgabeformen hinweg — mit einer Ersetzung, die die grammatikalische Kohärenz der Modellantwort wahrt.

### 2. Where Reconstruction Has to Happen

2. Wo die Rekonstruktion ausgeführt werden muss

The location of reconstruction is non-negotiable: it has to happen inside the enterprise environment, before the output reaches the user or any downstream system.
Der Ausführungsort der Rekonstruktion ist nicht verhandelbar: Sie muss innerhalb der Unternehmensinfrastruktur stattfinden — bevor der Output den Nutzer oder ein nachgelagertes System erreicht.

The reason is the same reason the mapping has to stay in the enterprise environment. Reconstruction requires reading the mapping. If reconstruction happens outside the enterprise — on a vendor's infrastructure, in a third-country region, on any system the enterprise doesn't fully control — then the mapping has to be made available to that location, which collapses the protection the tokenisation provided in the first place.
Der Grund ist derselbe, aus dem das Mapping in der Unternehmensinfrastruktur verbleiben muss: Rekonstruktion erfordert das Lesen des Mappings. Findet die Rekonstruktion außerhalb des Unternehmens statt — auf der Infrastruktur eines Anbieters, in einer Drittlandregion, auf einem System, das das Unternehmen nicht vollständig kontrolliert — muss das Mapping an diesem Ort verfügbar gemacht werden. Damit bricht der Schutz zusammen, den die Tokenisierung ursprünglich gewährleistet hat.

This is the most common architectural mistake in deployments of this pattern: teams set up tokenisation inside the environment, send to the external LLM, and then run reconstruction in a cloud service or middleware that happens to be convenient. The convenience is real. The protection is gone. The mapping that was supposed to stay under the enterprise's exclusive control has been replicated to a location where the original promises no longer hold.
Dies ist der häufigste Architekturfehler beim Einsatz dieses Musters: Teams konfigurieren die Tokenisierung innerhalb der Unternehmensgrenze, senden die Daten an das externe LLM — und führen die Rekonstruktion dann in einem Cloud-Dienst oder einer Middleware aus, die zufällig zur Hand ist. Der Komfort ist real. Der Schutz ist dahin. Das Mapping, das ausschließlich unter Unternehmenskontrolle bleiben sollte, wurde an einen Ort repliziert, an dem die ursprünglichen Zusagen nicht mehr gelten.

The correct architecture is that reconstruction is colocated with the source systems and the mapping — on-premise, in the enterprise's own VPC, in whatever EU-region infrastructure the workflow runs in. The output of the LLM comes back tokenised, traverses to the reconstruction layer inside the boundary, and emerges from that layer as business-ready content. The external journey of the data ends at the reconstruction step.
Die korrekte Architektur sieht vor, dass die Rekonstruktion gemeinsam mit den Quellsystemen und dem Mapping platziert ist — On-Premise, in der eigenen VPC des Unternehmens oder in der EU-regionalen Infrastruktur, in der der Workflow läuft. Der tokenisierte LLM-Output kehrt zurück, durchläuft die Rekonstruktionsschicht innerhalb der Unternehmensgrenze und verlässt diese als verwertbarer Geschäftsinhalt. Die externe Datenreise endet mit der Rekonstruktion.

For workflows where the rest of the architecture is meticulous about boundaries — encapsulation inside, mapping inside, audit logs inside — and reconstruction is the one piece that wandered outside, the rest of the architecture's promises are weakened to whatever the reconstruction location can guarantee.
Bei Workflows, deren restliche Architektur die Grenzen penibel einhält — Kapselung intern, Mapping intern, Audit-Logs intern — und die Rekonstruktion das einzige Element ist, das nach außen gewandert ist, werden alle übrigen Architekturversprechen auf das Schutzniveau reduziert, das der externe Rekonstruktionsort bieten kann.

[SVG Figure 1 Textübersetzung]

Title: Where reconstruction has to happen
Titel: Wo die Rekonstruktion ausgeführt werden muss

Description: Two architectures side by side. On the left, reconstruction runs on external middleware, forcing the mapping to be replicated outside the enterprise — the protection collapses. On the right, reconstruction runs inside the enterprise environment colocated with the mapping, and the protection holds.
Beschreibung: Zwei Architekturen im Vergleich. Links läuft die Rekonstruktion auf externer Middleware, was eine Replikation des Mappings außerhalb des Unternehmens erzwingt — der Schutz bricht zusammen. Rechts läuft die Rekonstruktion innerhalb der Unternehmensinfrastruktur, zusammen mit dem Mapping — der Schutz bleibt erhalten.

✗ Reconstruction outside the enterprise
✗ Rekonstruktion außerhalb des Unternehmens

ENTERPRISE
UNTERNEHMEN

Tokenisation / runs inside ✓
Tokenisierung / intern ✓

Mapping / held inside ✓
Mapping / intern gespeichert ✓

mapping replicated
Mapping repliziert

VENDOR / MIDDLEWARE
ANBIETER / MIDDLEWARE

Reconstruction / runs OUTSIDE ✗
Rekonstruktion / extern ✗

Protection collapses to whatever the external location can guarantee — usually less than the original promise.
Der Schutz sinkt auf das Niveau, das der externe Standort garantieren kann — in der Regel weniger als das ursprüngliche Versprechen.

✓ Reconstruction inside the enterprise
✓ Rekonstruktion innerhalb des Unternehmens

ENTERPRISE ENVIRONMENT
UNTERNEHMENSINFRASTRUKTUR

Tokenisation / runs inside ✓
Tokenisierung / intern ✓

Mapping / held inside ✓
Mapping / intern gespeichert ✓

Reconstruction / colocated with mapping ✓
Rekonstruktion / gemeinsam mit Mapping ✓

Audit log / separate access controls ✓
Audit-Log / separate Zugriffskontrollen ✓

EXTERNAL LLM / sees only tokens
EXTERNES LLM / sieht nur Token

Mapping never leaves the boundary. The external journey of the data ends at the reconstruction step.
Das Mapping verlässt nie die Unternehmensgrenze. Die externe Datenreise endet mit der Rekonstruktion.

Figure 1 · The most common architectural mistake — running reconstruction on external middleware because it's convenient — replicates the mapping outside the enterprise and collapses the protection the tokenisation provided.
Abbildung 1 · Der häufigste Architekturfehler: Die Rekonstruktion aus Bequemlichkeit auf externer Middleware auszuführen repliziert das Mapping außerhalb des Unternehmens und hebt den Schutz der Tokenisierung auf.

### 3. How Reconstruction Integrates With the Workflow

3. Integration der Rekonstruktion in den Workflow

Reconstruction is not a standalone step the user invokes. It is infrastructure that has to integrate into wherever the AI's output is delivered. Three integration patterns cover most enterprise deployments.
Rekonstruktion ist kein eigenständiger Schritt, den Nutzer manuell auslösen. Sie ist Infrastruktur, die an jedem Punkt integriert sein muss, an dem KI-Output ausgeliefert wird. Drei Integrationsmuster decken die meisten Enterprise-Deployments ab.

3.1 Inline Reconstruction in the Response Path
3.1 Inline-Rekonstruktion im Antwortpfad

The AI integration layer — whatever middleware sits between the workflow and the LLM endpoint — performs reconstruction before returning the response to the calling system. The calling system never sees tokens; it receives the business-ready output. This is the cleanest pattern and works for synchronous request-response workflows: contract review, summarisation, classification.
Die KI-Integrationsschicht — die Middleware zwischen Workflow und LLM-Endpunkt — führt die Rekonstruktion durch, bevor sie die Antwort an das aufrufende System zurückgibt. Das aufrufende System sieht niemals Token; es erhält den fertigen, verwertbaren Output. Dies ist das sauberste Muster und eignet sich für synchrone Anfrage-Antwort-Workflows wie Vertragsüberprüfungen, Zusammenfassungen und Klassifizierungen.

3.2 Streaming Reconstruction
3.2 Streaming-Rekonstruktion

For LLM responses that stream token-by-token (in the NLP sense, not the data-protection sense — note the unfortunate vocabulary collision), reconstruction has to work on the stream, recognising data-protection tokens as they appear and substituting in real time. This is harder than batch reconstruction because the data-protection token may be partially streamed at any given moment, and the reconstruction layer has to buffer enough to recognise it. Workflows that use streaming UIs (chat-style interfaces, live summarisation feeds) need this pattern; workflows that wait for the full response don't.
Für LLM-Antworten, die token-weise gestreamt werden (im NLP-Sinne, nicht im datenschutzrechtlichen Sinne — die Begriffsüberschneidung ist unglücklich), muss die Rekonstruktion auf dem Stream arbeiten: Datenschutz-Token werden erkannt, sobald sie erscheinen, und in Echtzeit ersetzt. Dies ist anspruchsvoller als Batch-Rekonstruktion, da ein Datenschutz-Token zu jedem Zeitpunkt nur teilweise gestreamt sein kann und die Rekonstruktionsschicht ausreichend puffern muss, um ihn zu erkennen. Workflows mit Streaming-UIs — Chat-Interfaces, Live-Zusammenfassungen — benötigen dieses Muster; Workflows, die auf die vollständige Antwort warten, nicht.

3.3 Event-Driven Reconstruction
3.3 Event-Driven-Rekonstruktion

For workflows where the AI's output triggers downstream actions — creating a ticket in the operations platform, writing a report into the document management system, updating a record in the CRM — reconstruction has to happen at the boundary between the AI integration and the downstream system. The tokenised response can be processed for routing, classification, or triage in the integration layer; reconstruction happens just before the data is written into the system the user will see.
Bei Workflows, in denen der KI-Output nachgelagerte Aktionen auslöst — ein Ticket im Betriebssystem anlegen, einen Bericht ins DMS schreiben, einen Datensatz im CRM aktualisieren — muss die Rekonstruktion an der Grenze zwischen KI-Integration und dem nachgelagerten System stattfinden. Der tokenisierte Output kann in der Integrationsschicht für Routing, Klassifizierung oder Triage verarbeitet werden; die Rekonstruktion erfolgt unmittelbar bevor die Daten in das System geschrieben werden, das der Nutzer sieht.

The architecture has to make explicit which of these patterns applies to which workflow. A misalignment — running streaming reconstruction on a workflow that should be event-driven, or inline reconstruction on a workflow that should stream — produces user-visible defects that look like AI quality problems but are actually integration problems.
Die Architektur muss klar definieren, welches Muster auf welchen Workflow anzuwenden ist. Eine Fehlzuordnung — etwa Streaming-Rekonstruktion für einen Event-Driven-Workflow oder Inline-Rekonstruktion für einen Streaming-Workflow — erzeugt nutzerseitige Defekte, die wie KI-Qualitätsprobleme wirken, in Wirklichkeit aber Integrationsfehler sind.

### 4. When the Model Produces Tokens That Don't Exist

4. Wenn das Modell nicht existierende Token erzeugt

A specific failure mode worth treating carefully: the model occasionally hallucinates tokens. It produces a string that looks like a token in the system's format but doesn't correspond to anything in the mapping.
Ein Fehlerfall, dem besondere Aufmerksamkeit gebührt: Das Modell halluziniert gelegentlich Token. Es erzeugt eine Zeichenkette, die dem Token-Format des Systems ähnelt, aber zu keinem Eintrag im Mapping passt.

This happens for predictable reasons. The model has seen CUST-7F2A and CUST-3B91 in the input and produces CUST-5D44 in the output, drawing on the pattern. Or the model summarises and invents a token-shaped placeholder for an entity it inferred. Or, more rarely, the model echoes a token format from its training data that happens to collide with the enterprise's token format.
Dies geschieht aus vorhersehbaren Gründen. Das Modell hat im Input CUST-7F2A und CUST-3B91 gesehen und erzeugt im Output CUST-5D44, indem es das Muster extrapoliert. Oder das Modell fasst zusammen und erfindet einen token-förmigen Platzhalter für eine erschlossene Entität. Seltener übernimmt das Modell ein Token-Format aus seinen Trainingsdaten, das zufällig mit dem Unternehmensformat kollidiert.

The reconstruction layer cannot silently substitute a hallucinated token, because there is nothing to substitute it with. It also cannot leave the hallucinated token in the output, because the user will see a fragment that looks like a system identifier. There are three reasonable responses.
Die Rekonstruktionsschicht kann einen halluzinierten Token nicht stillschweigend ersetzen — es gibt nichts, womit er ersetzt werden könnte. Sie kann ihn auch nicht im Output belassen, da der Nutzer ein Fragment sieht, das wie ein Systembezeichner wirkt. Es gibt drei sinnvolle Reaktionen.

Flag the hallucinated token in the output and surface it to the user as an explicit gap — for example, "[Reference to an entity the model produced but the system cannot resolve.]" This preserves transparency at the cost of some output cleanliness.
Den halluzinierten Token im Output markieren und dem Nutzer als explizite Lücke anzeigen — etwa: „[Verweis auf eine Entität, die das Modell erzeugt hat, die das System jedoch nicht auflösen kann.]" Dies bewahrt die Transparenz auf Kosten der Output-Sauberkeit.

Drop the hallucinated reference and rewrite the surrounding sentence. This produces cleaner output but requires the reconstruction layer to do non-trivial text manipulation, and may obscure that the model produced something not grounded in the input.
Den halluzinierten Verweis verwerfen und den umgebenden Satz neu formulieren. Dies erzeugt saubereren Output, erfordert jedoch nicht-triviale Textmanipulation durch die Rekonstruktionsschicht und kann verschleiern, dass das Modell etwas produziert hat, das nicht im Input verankert ist.

Reject the response and re-prompt the model, with a system instruction that constrains it to use only the tokens that appeared in the input. This produces the highest-quality output but adds latency and cost.
Die Antwort ablehnen und das Modell mit einer Systemanweisung neu anfragen, die es auf die im Input enthaltenen Token beschränkt. Dies liefert die höchste Ausgabequalität, erhöht jedoch Latenz und Kosten.

Different workflows want different responses. A summarisation for internal review may prefer the first option (flag and surface). A document going to a customer may prefer the third (re-prompt). The choice should be configurable at the workflow level, not hard-coded into the reconstruction layer.
Verschiedene Workflows erfordern verschiedene Reaktionen. Eine interne Zusammenfassung kann die erste Option bevorzugen (markieren und anzeigen). Ein Dokument für einen Kunden bevorzugt möglicherweise die dritte (neu anfragen). Diese Entscheidung sollte auf Workflow-Ebene konfigurierbar sein — nicht fest in die Rekonstruktionsschicht einprogrammiert.

### 5. Audit and Traceability

5. Auditierbarkeit und Rückverfolgbarkeit

Reconstruction is the moment where the original sensitive values re-enter the workflow. From an audit perspective, it is one of the most important moments in the architecture, because it is where the access controls on the original data are exercised.
Die Rekonstruktion ist der Moment, in dem die ursprünglichen sensiblen Werte wieder in den Workflow eintreten. Aus Audit-Perspektive ist dies einer der kritischsten Punkte der Architektur — hier werden die Zugriffskontrollen auf die Originaldaten wirksam.

A well-designed reconstruction layer logs every operation: which token was looked up, when, in service of which workflow, by which integration. The log doesn't need to contain the original values — that would defeat the point of access controls — but it has to contain enough metadata to answer the question "who triggered the reconstruction of which token, and where did the result go."
Eine sorgfältig konzipierte Rekonstruktionsschicht protokolliert jeden Vorgang: Welcher Token wurde nachgeschlagen, wann, für welchen Workflow, durch welche Integration. Das Log muss die Originalwerte nicht enthalten — das würde den Zweck der Zugriffskontrollen untergraben — aber es muss ausreichend Metadaten liefern, um die Frage zu beantworten: „Wer hat die Rekonstruktion welches Tokens ausgelöst, und wohin ist das Ergebnis geflossen?"

This matters operationally for two reasons. First, it makes the architecture auditable: an internal review of the workflow can verify that reconstruction is happening only for legitimate workflows and that the integration is behaving as designed. Second, it makes incident response possible: if a reconstruction integration is misbehaving, the log shows what happened and what was exposed.
Dies ist aus zwei operativen Gründen relevant. Erstens macht es die Architektur auditierbar: Eine interne Überprüfung des Workflows kann sicherstellen, dass die Rekonstruktion nur für berechtigte Workflows erfolgt und die Integration wie vorgesehen funktioniert. Zweitens ermöglicht es Incident Response: Verhält sich eine Rekonstruktionsintegration fehlerhaft, zeigt das Log, was geschehen ist und was offengelegt wurde.

The audit also matters for the failure case where reconstruction emits to a downstream system that shouldn't have received the original values. If a reconstruction integration accidentally writes business-ready output to a logging system that wasn't supposed to see customer names, the audit trail is what tells the team what was exposed and to whom. Without the log, the team is guessing.
Das Audit ist auch im Fehlerfall wichtig, wenn die Rekonstruktion Output an ein nachgelagertes System liefert, das keine Originalwerte erhalten sollte. Schreibt eine Rekonstruktionsintegration versehentlich verwertbaren Output in ein Logging-System, das keine Kundennamen sehen darf, zeigt der Audit-Trail dem Team, was offengelegt wurde und wem. Ohne das Log tappt das Team im Dunkeln.

Reconstruction logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture.
Rekonstruktions-Logs sollten getrennt von Workflow-Logs aufbewahrt werden, mit eigenen Zugriffskontrollen und unter denselben Grenzbedingungen wie das Mapping selbst. Sie sind faktisch der Audit-Trail des sensibelsten Vorgangs in der Architektur.

### 6. The Operational Mistakes Most Teams Make

6. Die häufigsten Betriebsfehler

Across deployments of this pattern, a small set of mistakes show up repeatedly. They are worth naming explicitly.
In der Praxis zeigt sich bei Deployments dieses Musters ein überschaubares Fehlermuster, das sich wiederholt. Es lohnt sich, diese Fehler beim Namen zu nennen.

Building reconstruction as a manual cleanup step. The most common mistake. The team gets tokenisation working, sees the AI output coming back tokenised, and adds a manual "now find and replace the tokens" step to the user's workflow. Users skip the step. Or they do it inconsistently. Or they paste tokenised output into a system that wasn't supposed to see it, and the cleanup never happens. Reconstruction has to be infrastructure, automatic and invisible. If it requires a human action, it will fail intermittently in ways that are hard to detect.
Rekonstruktion als manuellen Bereinigungsschritt einbauen. Der häufigste Fehler. Das Team bringt die Tokenisierung zum Laufen, sieht den tokenisierten KI-Output — und fügt dem Nutzer-Workflow einen manuellen Schritt hinzu: „Jetzt Token suchen und ersetzen." Nutzer überspringen diesen Schritt. Oder führen ihn inkonsistent aus. Oder kopieren tokenisierten Output in ein System, das ihn nicht sehen sollte, und die Bereinigung findet nie statt. Rekonstruktion muss Infrastruktur sein: automatisch und unsichtbar. Ist ein menschlicher Eingriff erforderlich, wird sie auf schwer erkennbare Weise sporadisch versagen.

Running reconstruction in the wrong location. Discussed above. The convenience of running reconstruction in a vendor cloud or middleware service is real; the protection cost is also real. The architecture promises the original values stay in the enterprise environment, and reconstruction has to honour that promise.
Rekonstruktion am falschen Ort ausführen. Wie beschrieben ist der Komfort externer Ausführung real — ebenso der Schutzverlust. Die Architektur verspricht, dass Originalwerte in der Unternehmensinfrastruktur verbleiben; die Rekonstruktion muss dieses Versprechen einlösen.

Treating reconstruction as a static substitution. Real reconstruction has to handle malformed tokens, hallucinated tokens, tokens in unexpected contexts, and streaming responses. A naive implementation that does exact string match-and-replace will work in the demo and fail in production where the model's actual output is messier than the demo cases.
Rekonstruktion als statische Ersetzung behandeln. Echte Rekonstruktion muss fehlerhafte Token, halluzinierte Token, Token in unerwarteten Kontexten und Streaming-Antworten verarbeiten. Eine naive Implementierung mit exaktem String-Matching funktioniert in der Demo — und versagt im Produktivbetrieb, wo der tatsächliche Modell-Output unordentlicher ist als Demo-Fälle.

Not logging reconstruction. Reconstruction without an audit trail is reconstruction the team cannot defend. The first time someone asks "did the AI ever see this customer's name, and if so, where did the result go," the team without reconstruction logs cannot answer.
Rekonstruktion nicht protokollieren. Rekonstruktion ohne Audit-Trail ist nicht verteidigbar. Beim ersten Mal, dass jemand fragt „Hat die KI jemals diesen Kundennamen gesehen, und wohin ist das Ergebnis geflossen?", kann das Team ohne Rekonstruktions-Logs nicht antworten.

Coupling reconstruction tightly to a specific LLM provider. Reconstruction logic that assumes ChatGPT's response format will break when the workflow switches to Claude or Gemini, even though the underlying tokenisation didn't change. The reconstruction layer should be provider-agnostic, treating the model's response as text-to-process rather than a known structure.
Rekonstruktion eng an einen bestimmten LLM-Anbieter koppeln. Rekonstruktionslogik, die das Antwortformat von ChatGPT voraussetzt, bricht, wenn der Workflow auf Claude oder Gemini wechselt — obwohl die zugrundeliegende Tokenisierung unverändert bleibt. Die Rekonstruktionsschicht sollte anbieterunabhängig sein und die Modellantwort als zu verarbeitenden Text behandeln, nicht als bekannte Struktur.

### 7. What Good Reconstruction Looks Like

7. Merkmale einer guten Rekonstruktion

A reconstruction layer that works in production has a small set of properties.
Eine Rekonstruktionsschicht, die im Produktivbetrieb funktioniert, weist ein überschaubares Set an Eigenschaften auf.

Runs inside the enterprise environment, colocated with the mapping
Läuft innerhalb der Unternehmensinfrastruktur, gemeinsam mit dem Mapping.

Invoked automatically at the integration boundary, never as a manual step
Wird automatisch an der Integrationsgrenze aufgerufen — nie als manueller Schritt.

Handles streaming, batch, and event-driven workflows through different invocation patterns but a shared core
Verarbeitet Streaming-, Batch- und Event-Driven-Workflows über unterschiedliche Aufrufmuster, aber einen gemeinsamen Kern.

Recognises tokens robustly across the variations real model output produces — formatting drift, partial references, paraphrases
Erkennt Token robust über die Variationen, die echter Modell-Output erzeugt — Formatierungsabweichungen, Teilreferenzen, Paraphrasen.

Distinguishes between legitimate tokens and hallucinated token-shaped strings, and handles each according to a configurable policy
Unterscheidet zwischen legitimen Token und halluzinierten token-förmigen Zeichenketten und behandelt beide nach einer konfigurierbaren Strategie.

Logs every operation in a separate audit trail under the enterprise's exclusive control
Protokolliert jeden Vorgang in einem separaten Audit-Trail unter ausschließlicher Unternehmenskontrolle.

Provider-agnostic, so the workflow can swap LLM endpoints without rewriting the reconstruction layer
Anbieterunabhängig — der Workflow kann LLM-Endpunkte wechseln, ohne die Rekonstruktionsschicht neu schreiben zu müssen.

When these properties hold, reconstruction becomes invisible infrastructure. The user submits a document, the workflow runs, the result comes back with real values in real structure, and the user never sees a token. The architecture's promise — that sensitive data stayed inside the boundary while the AI did useful work — holds across both halves of the workflow.
Sind diese Eigenschaften erfüllt, wird die Rekonstruktion zur unsichtbaren Infrastruktur. Der Nutzer reicht ein Dokument ein, der Workflow läuft, das Ergebnis kommt mit echten Werten in echter Struktur zurück — und der Nutzer sieht nie einen Token. Das Architekturversprechen — dass sensible Daten innerhalb der Unternehmensgrenze verblieben, während die KI nützliche Arbeit leistete — gilt für beide Hälften des Workflows.

When these properties don't hold, reconstruction is the place the workflow breaks. The tokenisation can be perfect, the model can be excellent, the boundaries can be meticulous — and the user still ends up with output they can't use, or with sensitive data accidentally appearing in a downstream system that wasn't supposed to receive it. The last mile is where the architecture either delivers on its promise or quietly fails to.
Sind diese Eigenschaften nicht erfüllt, ist die Rekonstruktion der Punkt, an dem der Workflow bricht. Die Tokenisierung kann perfekt sein, das Modell hervorragend, die Grenzen penibel eingehalten — und der Nutzer erhält trotzdem Output, den er nicht verwenden kann, oder sensible Daten erscheinen versehentlich in einem nachgelagerten System, das sie nicht erhalten sollte. Die letzte Meile ist der Punkt, an dem die Architektur ihr Versprechen einlöst — oder still versagt.

### 8. Where This Fits in the Broader Pattern

8. Einordnung in das Gesamtmuster

Reconstruction is one of the four stages of the broader pattern — detection, transformation (tokenisation), external processing, reconstruction — that lets external LLMs operate on data that cannot leave the enterprise environment in raw form. The four stages compose. The strength of the architecture is the weakest of the four.
Rekonstruktion ist eine der vier Phasen des übergeordneten Musters — Erkennung, Transformation (Tokenisierung), externe Verarbeitung, Rekonstruktion —, das es externen LLMs ermöglicht, mit Daten zu arbeiten, die das Unternehmen nicht im Rohformat verlassen dürfen. Die vier Phasen bilden ein Ganzes: Die Stärke der Architektur entspricht der schwächsten der vier Phasen.

For the architecture as a whole, and the design decisions that the other three stages carry, see the pillar overview on running external LLMs on sensitive enterprise data. For why removal-based approaches (masking, redaction, PII guardrails) break on operational data — and why this pattern was needed in the first place — see the article on why AI workflows stall at tables, tickets, and operational documents. For the tokenisation patterns on the input side that this article's reconstruction reverses, see the article on tokenisation for LLM inputs.
Eine Übersicht über die Gesamtarchitektur und die Designentscheidungen der anderen drei Phasen bietet der Pillar-Beitrag zum Betrieb externer LLMs mit sensiblen Unternehmensdaten. Warum entfernungsbasierte Ansätze — Maskierung, Schwärzung, PII-Guardrails — bei operativen Daten versagen und warum dieses Muster überhaupt benötigt wird, erläutert der Artikel zu KI-Workflows, die an Tabellen, Tickets und operativen Dokumenten scheitern. Die Tokenisierungsmuster auf der Eingabeseite, die die in diesem Artikel beschriebene Rekonstruktion umkehrt, behandelt der Artikel zur Tokenisierung für LLM-Eingaben.

### Key Takeaways

Wesentliche Erkenntnisse

Reconstruction is technically straightforward and architecturally critical — it's where pilots that demo well diverge from workflows that run in production
Rekonstruktion ist technisch überschaubar, aber architektonisch entscheidend — hier trennen sich Piloten, die in der Demo überzeugen, von Workflows, die produktiv betrieben werden.

It's not a simple swap-back: LLM output is generative, contains new token combinations, suffers formatting drift, and sometimes hallucinates token-shaped strings
Kein simples Zurücksetzen: LLM-Output ist generativ, enthält neue Token-Kombinationen, leidet unter Formatierungsabweichungen und halluziniert gelegentlich token-förmige Zeichenketten.

Location is non-negotiable — reconstruction has to run inside the enterprise environment, colocated with the mapping; external reconstruction collapses the protection
Der Ausführungsort ist nicht verhandelbar: Rekonstruktion muss innerhalb der Unternehmensinfrastruktur, gemeinsam mit dem Mapping, stattfinden. Externe Rekonstruktion hebt den Schutz auf.

Three integration patterns cover most workflows: inline, streaming, and event-driven — and misaligning the pattern produces defects that look like model problems
Drei Integrationsmuster decken die meisten Workflows ab: Inline, Streaming und Event-Driven. Falsche Zuordnung erzeugt Defekte, die wie Modellprobleme wirken.

Hallucinated tokens need an explicit, configurable policy: flag and surface, drop and rewrite, or reject and re-prompt
Halluzinierte Token erfordern eine explizite, konfigurierbare Strategie: markieren und anzeigen, verwerfen und neu formulieren oder ablehnen und neu anfragen.

Audit is essential — reconstruction is the moment original values re-enter the workflow, and logs are how the team defends or investigates that moment
Auditierung ist unverzichtbar: Die Rekonstruktion ist der Moment, in dem Originalwerte wieder in den Workflow eintreten — Logs sind das Mittel, mit dem das Team diesen Moment dokumentiert und im Ernstfall untersucht.

Five recurring mistakes: manual cleanup, wrong location, static substitution, no logging, provider lock-in
Fünf wiederkehrende Fehler: manuelle Bereinigung, falscher Ausführungsort, statische Ersetzung, fehlende Protokollierung, Anbieterabhängigkeit.

Good reconstruction is invisible infrastructure; bad reconstruction is where the architecture quietly fails on the last mile
Gute Rekonstruktion ist unsichtbare Infrastruktur. Schlechte Rekonstruktion ist der Punkt, an dem die Architektur auf der letzten Meile still versagt.

### FAQ

Why isn't reconstruction just a simple swap-back?
Warum ist Rekonstruktion mehr als ein simples Zurücksetzen?

The LLM doesn't just copy tokens from input to output — it generates new text that reasons over them. Tokens appear in contexts the input never had, in combinations the model invented, sometimes with formatting drift (CUST-7F2A coming back as CUST 7F2A or "the customer designated 7F2A"). A naive exact-match swap fails on these cases, leaving token fragments visible in the output. Real reconstruction is robust token recognition across diverse generative output forms, with substitution that preserves grammatical coherence.
Ein LLM kopiert keine Token vom Input in den Output — es erzeugt neuen Text, der über sie schlussfolgert. Token erscheinen in Kontexten, die der Input nie enthielt, in Kombinationen, die das Modell erfunden hat, manchmal mit Formatierungsabweichungen (CUST-7F2A kehrt als CUST 7F2A oder „der Kunde mit der Kennung 7F2A" zurück). Ein naives Matching versagt in diesen Fällen und hinterlässt sichtbare Token-Fragmente im Output. Echte Rekonstruktion ist robuste Token-Erkennung über diverse generative Ausgabeformen — mit einer Ersetzung, die die grammatikalische Kohärenz wahrt.

Where does reconstruction have to run?
Wo muss die Rekonstruktion ausgeführt werden?

Inside the enterprise environment, colocated with the mapping and the source systems. Reconstruction requires reading the mapping; if reconstruction runs outside the enterprise — on a vendor's infrastructure, in a third-country region, or on middleware the enterprise doesn't fully control — the mapping has to be replicated to that location, which collapses the protection the tokenisation provided. This is the most common architectural mistake in deployments of this pattern.
Innerhalb der Unternehmensinfrastruktur, gemeinsam mit Mapping und Quellsystemen. Rekonstruktion erfordert das Lesen des Mappings; findet sie außerhalb des Unternehmens statt — auf Anbieterinfrastruktur, in einer Drittlandregion oder auf Middleware, die das Unternehmen nicht vollständig kontrolliert — muss das Mapping dort repliziert werden, was den durch die Tokenisierung erzielten Schutz aufhebt. Dies ist der häufigste Architekturfehler bei Deployments dieses Musters.

What are the three integration patterns for reconstruction?
Welche drei Integrationsmuster gibt es für die Rekonstruktion?

Inline reconstruction — the AI integration layer performs reconstruction before returning the response. Works for synchronous request-response workflows like contract review. Streaming reconstruction — works on token-by-token streams, buffering enough to recognise data-protection tokens as they appear. Needed for chat-style UIs and live summarisation. Event-driven reconstruction — happens at the boundary between AI integration and a downstream system like a CRM, ticketing platform, or document store; reconstruction occurs just before the data is written into the system the user will see.
Inline-Rekonstruktion: Die KI-Integrationsschicht führt die Rekonstruktion durch, bevor sie die Antwort zurückgibt. Geeignet für synchrone Anfrage-Antwort-Workflows wie Vertragsüberprüfungen. Streaming-Rekonstruktion: Arbeitet auf token-weisen Streams, puffert ausreichend, um Datenschutz-Token beim Erscheinen zu erkennen. Erforderlich für Chat-Interfaces und Live-Zusammenfassungen. Event-Driven-Rekonstruktion: Findet an der Grenze zwischen KI-Integration und einem nachgelagerten System — CRM, Ticketing-Plattform, Dokumentenablage — statt; die Rekonstruktion erfolgt unmittelbar vor dem Schreiben in das System, das der Nutzer sieht.

What should happen when the model hallucinates a token?
Was sollte geschehen, wenn das Modell einen Token halluziniert?

Three reasonable responses, and the choice should be configurable per workflow. Flag the hallucinated token and surface it as an explicit gap — preserves transparency at the cost of cleanliness. Drop the hallucinated reference and rewrite the surrounding sentence — cleaner output but obscures that the model produced something not grounded in the input. Reject the response and re-prompt the model with a constraint to use only input tokens — highest quality, adds latency and cost. A summarisation for internal review may prefer flagging; a document going to a customer may prefer re-prompting.
Drei sinnvolle Reaktionen — die Wahl sollte pro Workflow konfigurierbar sein. Den halluzinierten Token markieren und als explizite Lücke anzeigen: Transparenz auf Kosten der Sauberkeit. Den halluzinierten Verweis verwerfen und den Satz neu formulieren: saubererer Output, verschleiert jedoch, dass das Modell etwas Unverankertes produziert hat. Die Antwort ablehnen und das Modell mit Token-Beschränkung neu anfragen: höchste Qualität, erhöht Latenz und Kosten. Eine interne Zusammenfassung bevorzugt möglicherweise die Markierung; ein Kundendokument die Neuanfrage.

What does a reconstruction audit log need to contain?
Was muss ein Rekonstruktions-Audit-Log enthalten?

Enough metadata to answer "who triggered the reconstruction of which token, when, in service of which workflow, and where did the result go." It does not need to contain the original values themselves — that would defeat the access controls — but it has to make the operation traceable. Logs should be retained separately from the workflow logs, with different access controls, and under the same boundary constraints as the mapping itself. They are, in effect, an audit trail of the most sensitive operation in the architecture.
Ausreichend Metadaten, um die Frage zu beantworten: „Wer hat die Rekonstruktion welches Tokens ausgelöst, wann, für welchen Workflow, und wohin ist das Ergebnis geflossen?" Die Originalwerte selbst müssen nicht enthalten sein — das würde die Zugriffskontrollen untergraben — aber der Vorgang muss rückverfolgbar sein. Logs sollten getrennt von Workflow-Logs aufbewahrt werden, mit eigenen Zugriffskontrollen und denselben Grenzbedingungen wie das Mapping selbst. Sie sind faktisch der Audit-Trail des sensibelsten Vorgangs in der Architektur.

What are the most common reconstruction mistakes?
Was sind die häufigsten Fehler bei der Rekonstruktion?

Five recur. Manual cleanup — building reconstruction as a step users have to perform; they will skip it. Wrong location — running reconstruction in a vendor cloud because it's convenient; it collapses the protection. Static substitution — treating reconstruction as exact string match-and-replace; it fails on the messy real output from production models. No logging — the team cannot defend the architecture or do incident response. Provider lock-in — coupling reconstruction logic to a specific LLM's response format; it breaks when the workflow switches vendor.
Fünf wiederholen sich. Manuelle Bereinigung: Rekonstruktion als Schritt, den Nutzer ausführen müssen — sie werden ihn überspringen. Falscher Ort: Rekonstruktion in einer Vendor-Cloud, weil es bequem ist — der Schutz bricht zusammen. Statische Ersetzung: Rekonstruktion als exaktes String-Matching — versagt bei unordentlichem Produktiv-Output. Fehlende Protokollierung: Das Team kann die Architektur nicht verteidigen und keinen Incident Response durchführen. Anbieterabhängigkeit: Rekonstruktionslogik an ein bestimmtes LLM-Format koppeln — bricht beim Anbieterwechsel, auch wenn die Tokenisierung unverändert bleibt.

## Section 04: Related Articles

Related articles
Verwandte Artikel

Running External LLMs on Data Your Company Can't Send Externally
Externe LLMs mit Daten betreiben, die das Unternehmen nicht extern übermitteln darf

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
Tokenisierung für LLM-Eingaben: Wie KI liest, was sie nicht sieht

Why AI Workflows Stall at Tables, Tickets, and Operational Documents
Warum KI-Workflows an Tabellen, Tickets und operativen Dokumenten scheitern

Breadcrumb: Reconstructing AI Output
Breadcrumb: KI-Output rekonstruieren
