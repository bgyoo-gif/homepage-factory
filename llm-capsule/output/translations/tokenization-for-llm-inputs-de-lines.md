# Tokenization for LLM Inputs — Deutsch Übersetzung (localize)
# STATUS: Zur Prüfung durch Native Reviewer — nicht vor Freigabe in Framer eintragen

## Section 01: Hero

← Learn
← Zum Lernbereich

Tokenization for LLM Inputs: How AI Reads What It Doesn't See
Tokenisierung für LLM-Eingaben: Wie KI liest, was sie nicht sehen darf

The architectural choices that make pre-LLM tokenisation work in production — deterministic vs randomised, format preservation, mapping storage, and the questions teams have to settle before deployment.
Welche Architekturentscheidungen KI-Tokenisierung im Produktivbetrieb tragen — und was Teams klären müssen, bevor sie deployen.

AI Architecture
KI-Architektur

~9 min read
~9 Min. Lesezeit

Updated May 2026
Aktualisiert Mai 2026

## Section 02: TL;DR

TL;DR
Zusammenfassung

Pre-LLM tokenisation is the substitution step that lets an enterprise document cross the boundary to an external model without exposing sensitive content. It works by giving the LLM referential integrity without semantic disclosure — placeholders that the model can reason about consistently across a document, without recovering the underlying identity. Production-grade implementations have to settle a set of architectural questions explicitly: deterministic vs randomised (cross-document linkage vs re-identification surface), format-preserving vs marker-style (output quality vs simplicity), where the mapping lives (exclusive enterprise control is non-negotiable), entity resolution across mentions, and what not to tokenise. Tokenisation alone is sufficient for most workflows. For high-cardinality data, long time series, or defence-in-depth postures, statistical protections (differential privacy, k-anonymity) layer on top. The definition of what counts as sensitive is the layer where most teams under-invest at the start — and where most of the long-term operational cost lives.
Vorgelagerte Tokenisierung ist der Substitutionsschritt, der es ermöglicht, Unternehmensdokumente an ein externes LLM zu übergeben, ohne sensible Inhalte preiszugeben. Das Prinzip: Das LLM erhält referentielle Integrität ohne semantische Offenlegung — Platzhalter, über die das Modell dokumentenweit konsistent schlussfolgern kann, ohne die zugrundeliegenden Identitäten rekonstruieren zu können. Produktionsreife Implementierungen müssen eine Reihe von Architekturentscheidungen explizit treffen: deterministisch vs. randomisiert (dokumentenübergreifende Verknüpfung vs. Re-Identifikationsrisiko), formaterhaltendes vs. markierungsbasiertes Vorgehen (Ausgabequalität vs. Einfachheit), wo das Mapping gespeichert wird (ausschließliche Unternehmenskontrolle ist nicht verhandelbar), Entitätsauflösung über verschiedene Erwähnungen hinweg sowie die Frage, was nicht tokenisiert werden sollte. Für die meisten Workflows ist Tokenisierung allein ausreichend. Bei hochkardinalen Daten, langen Zeitreihen oder einer Defense-in-Depth-Strategie lassen sich statistische Schutzmaßnahmen (Differential Privacy, k-Anonymität) ergänzend einsetzen. Die Definition dessen, was als sensibel gilt, ist die Ebene, in die die meisten Teams zu Beginn zu wenig investieren — und in der der größte Teil der langfristigen Betriebskosten liegt.

## Section 03: Article Body

### 1. What Tokenisation Actually Does in This Context

1. Was Tokenisierung in diesem Kontext tatsächlich leistet

The transformation step that sits between an enterprise document and an external LLM is, conceptually, simple: identify the elements that can't cross the boundary, replace them with placeholders that preserve their structural role, send the result to the model. In practice, the simplicity hides a set of architectural decisions that determine whether the approach works at production scale or breaks under load.
Der Transformationsschritt zwischen einem Unternehmensdokument und einem externen LLM ist konzeptionell einfach: Elemente identifizieren, die die Systemgrenze nicht passieren dürfen, durch Platzhalter ersetzen, die ihre strukturelle Rolle erhalten, und das Ergebnis an das Modell übermitteln. In der Praxis verbirgt diese Einfachheit eine Reihe von Architekturentscheidungen, die bestimmen, ob der Ansatz im Produktivbetrieb skaliert oder unter Last versagt.

This article walks through those decisions. It is not a tutorial on a specific library or product. It is the set of choices any team adopting pre-LLM tokenisation has to make explicit, with the trade-offs each choice carries.
Dieser Artikel behandelt diese Entscheidungen. Es handelt sich nicht um ein Tutorial zu einer bestimmten Bibliothek oder einem Produkt, sondern um die Entscheidungen, die jedes Team beim Einsatz vorgelagerter Tokenisierung explizit treffen muss — einschließlich der jeweiligen Abwägungen.

The term tokenisation is used here in the data-protection sense — replacing sensitive values with non-sensitive placeholders that can be mapped back — not in the NLP sense, where it means splitting text into subword units for model input. The two share a word and almost nothing else.
Der Begriff Tokenisierung wird hier im datenschutzrechtlichen Sinne verwendet: sensible Werte durch nicht-sensible Platzhalter ersetzen, die sich zurückmappen lassen. Nicht im NLP-Sinne, wo er das Aufteilen von Text in Teilwörter für die Modelleingabe bezeichnet. Beide Begriffe teilen ein Wort — und nahezu nichts sonst.

A related note on terminology: in CUBIG's architecture, tokenisation is the core substitution mechanism inside a broader encapsulation layer that also includes detection, format preservation, and optional statistical protections. This article focuses on the tokenisation mechanism specifically — the design decisions are largely the same whether the implementation calls itself tokenisation, encapsulation, or any of the other names used in the field.
Ein Hinweis zur Terminologie: In der CUBIG-Architektur ist Tokenisierung der zentrale Substitutionsmechanismus innerhalb einer umfassenderen Verkapselungsschicht, die auch Erkennung, Formaterhalt und optionale statistische Schutzmaßnahmen umfasst. Dieser Artikel konzentriert sich auf den Tokenisierungsmechanismus. Die Entwurfsentscheidungen sind weitgehend dieselben, unabhängig davon, ob eine Implementierung sich selbst als Tokenisierung, Verkapselung oder unter einem anderen in der Branche gebräuchlichen Namen bezeichnet.

When an enterprise document is prepared for an external LLM, the goal is that the model sees a version of the document that retains everything it needs for the task and removes everything the boundary was set up to keep in. Tokenisation is the mechanism that achieves the second half: identifying sensitive elements and substituting placeholders.
Wenn ein Unternehmensdokument für ein externes LLM vorbereitet wird, ist das Ziel, dass das Modell eine Dokumentversion erhält, die alles für die Aufgabe Notwendige behält und alles entfernt, was innerhalb der Unternehmensgrenze bleiben soll. Tokenisierung ist der Mechanismus, der die zweite Hälfte bewirkt: sensible Elemente identifizieren und durch Platzhalter ersetzen.

A useful frame: the LLM doesn't need to know that the customer is named Marlene Schmidt. It needs to know that there is a customer, that the customer is referenced in three different places in the document, and that the references all point to the same entity. A token like CUST-7F2A carries the same information — a referenceable entity that appears in multiple places consistently — without carrying the identity.
Ein hilfreicher Rahmen: Das LLM muss nicht wissen, dass der Kunde Marlene Schmidt heißt. Es muss wissen, dass es einen Kunden gibt, dass dieser an drei verschiedenen Stellen im Dokument erwähnt wird und dass alle Verweise auf dieselbe Entität zeigen. Ein Token wie CUST-7F2A trägt dieselbe Information — eine referenzierbare Entität, die konsistent an mehreren Stellen erscheint — ohne die Identität preiszugeben.

That is the core property tokenisation provides: referential integrity without semantic disclosure. The model can reason about "the customer" across a document because the token threads through the document consistently. The model cannot recover the identity because the token doesn't encode it.
Das ist die Kerneigenschaft der Tokenisierung: referentielle Integrität ohne semantische Offenlegung. Das Modell kann über „den Kunden" im gesamten Dokument schlussfolgern, weil der Token konsistent durch das Dokument führt. Die Identität lässt sich nicht rekonstruieren, weil der Token sie nicht kodiert.

Everything else in this article is variations on how that property is implemented, and what additional properties layer on top of it.
Alles Weitere in diesem Artikel sind Variationen der Frage, wie diese Eigenschaft implementiert wird und welche zusätzlichen Eigenschaften sich darüber schichten lassen.

[SVG Figure 1 Textübersetzung]

Title: Referential integrity without semantic disclosure
Titel: Referentielle Integrität ohne semantische Offenlegung

Description: A diagram showing a source document where the same customer is referenced three different ways, all resolved to a single consistent token in the version the LLM sees, with the mapping table held inside the enterprise.
Beschreibung: Ein Diagramm, das ein Quelldokument zeigt, in dem derselbe Kunde auf drei verschiedene Arten referenziert wird. In der Version, die das LLM sieht, werden alle Varianten zu einem einzigen konsistenten Token aufgelöst. Die Mapping-Tabelle verbleibt im Unternehmen.

SOURCE DOCUMENT
QUELLDOKUMENT

Header: Customer Marlene Schmidt called regarding account dropouts.
Kopfzeile: Kunde Marlene Schmidt rief wegen Kontoausfällen an.

Agent note: "Mr Schmidt reports the issue started last Tuesday."
Agentnotiz: „Herr Schmidt berichtet, das Problem habe letzten Dienstag begonnen."

Resolution: "Marlene confirmed service restored after firmware roll-back."
Lösung: „Marlene bestätigte die Wiederherstellung des Dienstes nach dem Firmware-Rollback."

Entity resolution
Entitätsauflösung

Tokenisation
Tokenisierung

WHAT THE LLM SEES
WAS DAS LLM SIEHT

Header: Customer CUST-7F2A called regarding account dropouts.
Kopfzeile: Kunde CUST-7F2A rief wegen Kontoausfällen an.

Agent note: "CUST-7F2A reports the issue started last Tuesday."
Agentnotiz: „CUST-7F2A berichtet, das Problem habe letzten Dienstag begonnen."

Resolution: "CUST-7F2A confirmed service restored after firmware roll-back."
Lösung: „CUST-7F2A bestätigte die Wiederherstellung des Dienstes nach dem Firmware-Rollback."

TOKEN ↔ VALUE MAPPING · enterprise only
TOKEN ↔ WERT-MAPPING · nur intern

CUST-7F2A → Marlene Schmidt (also "Mr Schmidt", "Marlene")
CUST-7F2A → Marlene Schmidt (auch „Herr Schmidt", „Marlene")

mapping never leaves the enterprise boundary
Das Mapping verlässt nie die Unternehmensgrenze.

Figure 1 · Three different mentions of the same customer all resolve to one consistent token. The LLM can reason about "the customer" throughout the document; the mapping back to the real identity stays inside the enterprise.
Abbildung 1 · Drei verschiedene Erwähnungen desselben Kunden werden zu einem einzigen konsistenten Token aufgelöst. Das LLM kann dokumentenweit über „den Kunden" schlussfolgern — die Rückabbildung auf die reale Identität verbleibt im Unternehmen.

### 2. Deterministic vs Randomised Tokenisation

2. Deterministische vs. randomisierte Tokenisierung

The first architectural decision is whether a given sensitive value always produces the same token, or whether it produces a different token each time.
Die erste Architekturentscheidung betrifft die Frage, ob ein bestimmter sensibler Wert stets denselben Token erzeugt oder bei jedem Auftreten einen anderen.

2.1 Deterministic Tokenisation
2.1 Deterministische Tokenisierung

Deterministic tokenisation means Marlene Schmidt always becomes CUST-7F2A, in every document, in every workflow. The token is a function of the value (and usually a secret key).
Deterministische Tokenisierung bedeutet: Marlene Schmidt wird in jedem Dokument und jedem Workflow zu CUST-7F2A. Der Token ist eine Funktion des Werts — in der Regel unter Einbeziehung eines geheimen Schlüssels.

The benefit is consistency across documents. If two tickets reference the same customer, the LLM sees the same token in both, and analytics that depend on cross-document linkage continue to work. For workflows that aggregate or compare across documents — fraud detection patterns, customer history summaries, cohort analysis — deterministic is usually the only viable choice.
Der Vorteil liegt in der dokumentenübergreifenden Konsistenz. Referenzieren zwei Tickets denselben Kunden, sieht das LLM in beiden denselben Token — Analysen, die auf dokumentenübergreifenden Verknüpfungen beruhen, bleiben funktionsfähig. Für Workflows, die Dokumente aggregieren oder vergleichen — Betrugserkennung, Kundenhistorie, Kohortenanalyse — ist die deterministische Variante in der Regel die einzige praktikable Wahl.

The cost is that determinism creates a re-identification surface. An attacker who observes enough tokenised documents and has side information about which customers appear where can correlate tokens to identities. The risk is real for high-volume workflows or for cases where the same entity appears in many tokenised outputs over time.
Der Nachteil: Determinismus schafft eine Re-Identifikationsfläche. Ein Angreifer, der ausreichend tokenisierte Dokumente beobachtet und über Hintergrundwissen verfügt, wo welche Kunden auftreten, kann Token mit Identitäten korrelieren. Dieses Risiko ist bei hochvolumigen Workflows oder bei Entitäten, die über längere Zeit in vielen tokenisierten Ausgaben erscheinen, real.

2.2 Randomised Tokenisation
2.2 Randomisierte Tokenisierung

Randomised tokenisation generates a different token for each occurrence, even of the same value. Marlene Schmidt might become CUST-7F2A in one document and CUST-3B91 in another.
Randomisierte Tokenisierung erzeugt bei jedem Auftreten einen anderen Token — auch für denselben Wert. Marlene Schmidt kann in einem Dokument CUST-7F2A werden, in einem anderen CUST-3B91.

The benefit is that no cross-document linkage is exposed. Each tokenised document is a closed system.
Der Vorteil: Es wird keine dokumentenübergreifende Verknüpfung offengelegt. Jedes tokenisierte Dokument ist ein geschlossenes System.

The cost is that cross-document analytics break. The LLM can't tell that two tokens refer to the same customer, because at the structural level they don't. For workflows that don't need cross-document linkage — summarising a single document, extracting clauses from a single contract — randomisation is fine. For workflows that do, randomisation forces the linkage to be reconstructed after the LLM responds, which adds complexity.
Der Nachteil: Dokumentenübergreifende Analysen sind nicht möglich. Das LLM kann nicht erkennen, dass zwei Token denselben Kunden referenzieren — strukturell tun sie es nicht. Für Workflows ohne dokumentenübergreifende Verknüpfungsanforderungen — etwa die Zusammenfassung eines einzelnen Dokuments oder die Extraktion von Klauseln aus einem Vertrag — ist Randomisierung geeignet. Wo diese Verknüpfung benötigt wird, muss sie nach der LLM-Antwort rekonstruiert werden, was die Komplexität erhöht.

2.3 The Hybrid Pattern Most Production Deployments Use
2.3 Das Hybridmuster der meisten Produktivdeployments

Most production deployments end up with a hybrid: deterministic within a workflow scope (so a multi-turn conversation about a customer stays coherent), randomised across workflow scopes (so analytics from one workflow can't be cross-referenced with another). The boundary of the scope is itself a design decision — by session, by user, by document, by tenant — and is one of the things a team has to settle before the architecture goes live.
Die meisten Produktivdeployments münden in ein Hybridmodell: deterministisch innerhalb eines Workflow-Bereichs (damit mehrstufige Konversationen über einen Kunden kohärent bleiben), randomisiert über Workflow-Bereiche hinweg (damit Analysen aus einem Workflow nicht mit einem anderen verknüpft werden können). Die Abgrenzung des Bereichs — nach Session, Nutzer, Dokument oder Mandant — ist selbst eine Entwurfsentscheidung, die ein Team vor dem Go-Live festlegen muss.

Choice / Benefit / Cost / Best fit
Variante / Vorteil / Nachteil / Geeignet für

Deterministic / Cross-document linkage preserved; analytics work across workflows / Creates re-identification surface over high-volume workflows / Fraud detection, customer history, cohort analysis
Deterministisch / Dokumentenübergreifende Verknüpfung erhalten; workflowübergreifende Analysen möglich / Re-Identifikationsrisiko bei hochvolumigen Workflows / Betrugserkennung, Kundenhistorie, Kohortenanalyse

Randomised / Each tokenised document is a closed system; no cross-document linkage exposed / Cross-document analytics break; linkage must be reconstructed post-LLM / Single-document summarisation, single-contract extraction
Randomisiert / Jedes tokenisierte Dokument ist ein geschlossenes System; keine dokumentenübergreifende Verknüpfung / Dokumentenübergreifende Analysen nicht möglich; Verknüpfung muss nach LLM-Antwort rekonstruiert werden / Einzeldokument-Zusammenfassung, Einzelvertrags-Extraktion

Hybrid (deterministic within scope, randomised across) / Coherent within a session/user/tenant boundary; isolated across / The scope boundary itself becomes a design decision / Most production deployments
Hybrid (deterministisch im Bereich, randomisiert bereichsübergreifend) / Kohärenz innerhalb von Session/Nutzer/Mandant-Grenzen; Isolation nach außen / Die Bereichsabgrenzung selbst wird zur Entwurfsentscheidung / Die meisten Produktivdeployments

### 3. Format-Preserving Tokenisation — Why Placeholder Strings Aren't Enough

3. Formaterhal­tende Tokenisierung — warum generische Platzhalter nicht ausreichen

A naive implementation replaces sensitive values with generic placeholders: [CUSTOMER], [ACCOUNT_NUMBER], [DATE]. The LLM sees a document littered with these markers and tries to reason about it.
Eine naive Implementierung ersetzt sensible Werte durch generische Platzhalter: [CUSTOMER], [ACCOUNT_NUMBER], [DATE]. Das LLM sieht ein mit solchen Markierungen durchsetztes Dokument und versucht, darüber zu schlussfolgern.

This works poorly in practice for a specific reason: the LLM's reasoning is shaped by the surface form of the input. A document that reads "Customer Marlene Schmidt called on 2026-03-15 about account 4471-9028" is, to the model, a coherent operational record. The same document with placeholders — "Customer [CUSTOMER] called on [DATE] about account [ACCOUNT_NUMBER]" — reads as a template or a redaction notice. Models are sensitive to that signal, and their outputs degrade accordingly: summaries become more abstract, extraction becomes less precise, and the model occasionally lapses into commentary about the redaction itself.
In der Praxis funktioniert das schlecht — aus einem spezifischen Grund: Die Schlussfolgerungen eines LLM werden durch die Oberflächenform des Inputs geprägt. Ein Dokument mit dem Text „Kunde Marlene Schmidt rief am 2026-03-15 wegen Konto 4471-9028 an" ist für das Modell ein kohärenter Betriebsvorgang. Dasselbe Dokument mit Platzhaltern — „Kunde [CUSTOMER] rief am [DATE] wegen Konto [ACCOUNT_NUMBER] an" — liest sich wie eine Vorlage oder eine Schwärzungsnotiz. Modelle reagieren empfindlich auf dieses Signal. Die Ausgabequalität sinkt entsprechend: Zusammenfassungen werden abstrakter, Extraktionen ungenauer, und das Modell kommentiert gelegentlich die Schwärzung selbst.

Format-preserving tokenisation generates tokens that look like the values they replace. A name becomes a plausible-looking name token: Lyra Vesper. A date becomes a real date in a plausible range. An account number becomes a number of the same length, in the same format, that isn't a real account number.
Formaterhaltende Tokenisierung erzeugt Token, die den ersetzten Werten ähneln. Ein Name wird zu einem plausibel wirkenden Namens-Token: Lyra Vesper. Ein Datum wird zu einem echten Datum in einem plausiblen Bereich. Eine Kontonummer wird zu einer Zahl gleicher Länge im gleichen Format, die keine echte Kontonummer ist.

The document the LLM sees reads as a coherent operational document with anonymous-but-realistic stand-ins. The model's outputs come back at the quality the model can actually produce, rather than degraded by the perception that it's being asked to reason about a template.
Das Dokument, das das LLM sieht, liest sich als kohärentes Betriebsdokument mit anonymen, aber realistisch wirkenden Stellvertretern. Die Modellausgaben erreichen die Qualität, zu der das Modell tatsächlich in der Lage ist — ohne Qualitätsverlust durch die Wahrnehmung, eine Vorlage verarbeiten zu sollen.

Format preservation has its own design choices: how plausible to make the tokens, whether to draw from a fixed pool of fake names or generate them on the fly, how to handle dates and numerics where the value itself has analytical meaning (a date in 2019 vs a date in 2024 may matter to the analysis even if the exact date is sensitive). The general rule is that the token has to preserve whatever analytical property the original value carried, no more and no less.
Formaterhalt bringt eigene Entwurfsentscheidungen mit sich: Wie plausibel sollen die Token sein? Werden sie aus einem festen Pool fiktiver Namen gezogen oder dynamisch generiert? Wie werden Datumsangaben und Zahlenwerte behandelt, deren Wert selbst analytische Bedeutung trägt — ein Datum aus 2019 gegenüber 2024 kann für eine Analyse relevant sein, auch wenn das genaue Datum sensibel ist. Die allgemeine Regel: Der Token muss genau die analytische Eigenschaft des Originalwerts erhalten — nicht mehr und nicht weniger.

### 4. Where the Mapping Lives

4. Wo das Mapping gespeichert werden muss

Tokenisation only protects the data if the mapping — the table that connects tokens to original values — stays inside the enterprise environment. This is the part of the architecture that most consistently determines whether the approach actually delivers its protection.
Tokenisierung schützt die Daten nur dann, wenn das Mapping — die Tabelle, die Token mit Originalwerten verknüpft — innerhalb der Unternehmensinfrastruktur verbleibt. Dieser Teil der Architektur entscheidet am zuverlässigsten darüber, ob der Ansatz seinen Schutz tatsächlich liefert.

Three properties of the mapping have to hold:
Drei Eigenschaften des Mappings müssen gewährleistet sein:

It stays in the enterprise's exclusive control. The mapping is, in effect, the key that re-identifies the data. If it leaves the environment, the protection collapses to whatever protection the new location provides. For workflows where data must stay in the EU region or other defined boundaries, the mapping has to live within that same boundary — colocated with the source systems, not with the AI endpoint.
Es verbleibt unter ausschließlicher Unternehmenskontrolle. Das Mapping ist faktisch der Schlüssel zur Re-Identifikation der Daten. Verlässt es die Unternehmensinfrastruktur, sinkt der Schutz auf das Niveau des neuen Speicherorts. Für Workflows, bei denen Daten innerhalb der EU oder anderer definierter Grenzen verbleiben müssen — eine Anforderung, die sich aus der DSGVO ergibt —, muss das Mapping innerhalb derselben Grenze gespeichert sein: gemeinsam mit den Quellsystemen, nicht beim KI-Endpunkt.

It is integrity-protected. Tampering with the mapping changes what gets reconstructed when the LLM's response comes back. An attacker who can modify the mapping can substitute identities in the output. Standard practice is to apply integrity checks to the mapping itself — signed entries, audit logs of access — so that any tampering is detectable.
Es ist integritätsgeschützt. Eine Manipulation des Mappings verändert, was bei der Rekonstruktion der LLM-Antwort zurückgegeben wird. Ein Angreifer, der das Mapping modifizieren kann, kann Identitäten im Output austauschen. Standardpraxis ist die Anwendung von Integritätsprüfungen auf das Mapping selbst — signierte Einträge, Zugriffs-Audit-Logs — sodass Manipulationen erkennbar sind.

It is access-controlled separately from the LLM workflow. The team that operates the LLM integration doesn't need read access to the mapping. The reconstruction step pulls from the mapping programmatically; it doesn't require humans to see the original values. Separating those two access paths means the mapping can be governed under stricter controls than the LLM workflow itself.
Es ist separat vom LLM-Workflow zugangskontrolliert. Das Team, das die LLM-Integration betreibt, benötigt keinen Lesezugriff auf das Mapping. Der Rekonstruktionsschritt greift programmatisch auf das Mapping zu — Menschen müssen die Originalwerte nicht einsehen. Die Trennung der Zugriffspfade ermöglicht es, das Mapping unter strengeren Kontrollen zu verwalten als den LLM-Workflow selbst.

Storage technology is secondary to these properties. The mapping can live in a dedicated database, a key-value store, an encrypted file, or a hardware-backed vault — the architectural choice depends on volume, latency requirements, and existing infrastructure. What matters is that the three properties above are non-negotiable design constraints, not configurable options.
Die Speichertechnologie ist gegenüber diesen Eigenschaften nachrangig. Das Mapping kann in einer dedizierten Datenbank, einem Key-Value-Store, einer verschlüsselten Datei oder einem Hardware-gesicherten Tresor liegen — die Wahl hängt von Volumen, Latenzanforderungen und bestehender Infrastruktur ab. Entscheidend ist: Die drei genannten Eigenschaften sind nicht verhandelbare Entwurfseinschränkungen, keine konfigurierbaren Optionen.

### 5. Token Consistency — Same Entity, Same Token

5. Token-Konsistenz — gleiche Entität, gleicher Token

A subtler design problem: ensuring that the same entity gets the same token, consistently, even when the entity is referenced in different ways across a document.
Ein subtileres Entwurfsproblem: sicherzustellen, dass dieselbe Entität konsistent denselben Token erhält — auch wenn sie an verschiedenen Stellen eines Dokuments unterschiedlich bezeichnet wird.

A service ticket might mention "the customer," then "Mr Schmidt," then "Marlene," then "the subscriber" — all referring to the same person. A naive tokeniser sees four different mentions and produces four different tokens, breaking the LLM's ability to track that these all refer to one entity. The summary that comes back may treat them as four people.
Ein Service-Ticket könnte „den Kunden", dann „Herrn Schmidt", dann „Marlene", dann „den Teilnehmer" erwähnen — alle verweisen auf dieselbe Person. Ein naiver Tokenisierer sieht vier verschiedene Erwähnungen und erzeugt vier verschiedene Token. Das LLM kann dann nicht mehr erkennen, dass alle auf dieselbe Entität verweisen. Die zurückgegebene Zusammenfassung behandelt sie möglicherweise als vier verschiedene Personen.

Resolving this requires entity resolution before tokenisation: identifying which mentions in a document refer to the same underlying entity, and ensuring they all map to the same token. This is a non-trivial problem in general — entity resolution is a research field of its own — but in practice it's tractable because enterprise documents have structural cues (a customer ID in the header tying together free-text mentions, formal naming conventions in operational logs, schema-defined relationships in structured records).
Dies erfordert Entitätsauflösung vor der Tokenisierung: Identifizierung, welche Erwähnungen in einem Dokument auf dieselbe zugrundeliegende Entität verweisen, und Sicherstellung, dass alle auf denselben Token abgebildet werden. Im Allgemeinen ist dies kein triviales Problem — Entitätsauflösung ist ein eigenes Forschungsgebiet. In der Praxis ist es jedoch handhabbar, da Unternehmensdokumente strukturelle Hinweise bieten: eine Kundennummer im Kopfbereich, die Freitexterwähnungen zusammenführt, formale Namenskonventionen in Betriebsprotokollen, schemadefinierte Beziehungen in strukturierten Datensätzen.

The other half of consistency is across documents within a workflow scope. If two tickets reference the same customer, and the workflow needs to treat them as related, the tokenisation has to produce the same token for the customer in both. This is where the deterministic-vs-randomised choice from earlier interacts: deterministic-within-scope is what enables the LLM to see "the same customer appears in three tickets" without learning who the customer is.
Die zweite Hälfte der Konsistenz betrifft Dokumente innerhalb eines Workflow-Bereichs. Referenzieren zwei Tickets denselben Kunden und muss der Workflow sie als zusammengehörig behandeln, muss die Tokenisierung in beiden denselben Token für den Kunden erzeugen. Hier wirkt die frühere Entscheidung zwischen deterministisch und randomisiert: Determinismus innerhalb des Bereichs ermöglicht es dem LLM zu erkennen, dass „derselbe Kunde in drei Tickets erscheint" — ohne zu erfahren, wer dieser Kunde ist.

A well-designed tokenisation layer handles both kinds of consistency — within-document and within-scope — as part of the transformation, not as an afterthought. Teams that retrofit consistency onto a per-mention tokeniser usually find the workflow degrades in ways that look like model quality problems but are actually data preparation problems.
Eine sorgfältig konzipierte Tokenisierungsschicht behandelt beide Konsistenzformen — innerhalb eines Dokuments und innerhalb eines Bereichs — als Teil der Transformation, nicht als nachträgliche Ergänzung. Teams, die Konsistenz nachträglich auf einen mentionsbasierten Tokenisierer aufsetzen, stellen in der Regel fest, dass der Workflow auf eine Weise degradiert, die wie ein Modellqualitätsproblem aussieht, aber tatsächlich ein Datenvorbereitungsproblem ist.

### 6. Additional Protection Layers — When Tokenisation Alone Isn't Enough

6. Ergänzende Schutzschichten — wenn Tokenisierung allein nicht ausreicht

Tokenisation handles the substitution problem. For most workflows, well-implemented tokenisation with the mapping under the enterprise's exclusive control is sufficient. For some workflows, an additional layer of protection is worth adding on top.
Tokenisierung löst das Substitutionsproblem. Für die meisten Workflows ist eine sorgfältig implementierte Tokenisierung mit Mapping unter ausschließlicher Unternehmenskontrolle ausreichend. Für bestimmte Workflows lohnt es sich, eine zusätzliche Schutzschicht zu ergänzen.

The case for additional protection arises when the residual risk is not in the tokens themselves but in the patterns the tokens form. A tokenised document may contain enough structural information — frequencies, co-occurrences, sequences, ratios — that a sophisticated correlator could re-identify entities even without the raw values. The risk is particularly relevant for high-cardinality data, long time series, and workflows where many tokenised outputs accumulate over time.
Zusätzlicher Schutz ist angezeigt, wenn das Restrisiko nicht in den Token selbst liegt, sondern in den Mustern, die sie bilden. Ein tokenisiertes Dokument kann ausreichend strukturelle Informationen enthalten — Häufigkeiten, Co-Vorkommen, Sequenzen, Verhältnisse —, damit eine ausgefeilte Korrelationsanalyse Entitäten auch ohne Rohwerte re-identifizieren könnte. Dieses Risiko ist besonders relevant bei hochkardinalen Daten, langen Zeitreihen und Workflows, bei denen sich über die Zeit viele tokenisierte Ausgaben ansammeln.

The standard responses are differential privacy, k-anonymity, and similar statistical protections applied to the tokenised data. Each adds noise or aggregation in a controlled way that limits how much an attacker can learn from the tokenised output, at the cost of some analytical precision. Whether the trade-off is worth it depends on the threat model and the workflow's tolerance for noise.
Die Standardantworten sind Differential Privacy, k-Anonymität und ähnliche statistische Schutzmaßnahmen, die auf tokenisierte Daten angewendet werden. Jede Methode fügt auf kontrollierte Weise Rauschen oder Aggregation hinzu, die begrenzt, wie viel ein Angreifer aus dem tokenisierten Output lernen kann — auf Kosten etwas analytischer Präzision. Ob dieser Kompromiss gerechtfertigt ist, hängt vom Bedrohungsmodell und der Rauschtoleranz des Workflows ab.

For most enterprise AI workflows this layer is optional. For workflows where the data is highly sensitive, the volume is high, or the data posture demands defence in depth, it is worth the complexity. The decision is best made workflow by workflow, not as a global setting.
Für die meisten Unternehmens-KI-Workflows ist diese Schicht optional. Bei Workflows mit hochsensiblen Daten, hohem Volumen oder einer Defense-in-Depth-Anforderung — etwa im Kontext von BSI C5 oder branchenspezifischen Compliance-Vorgaben — ist die zusätzliche Komplexität gerechtfertigt. Die Entscheidung sollte workflow-spezifisch getroffen werden, nicht als globale Einstellung.

### 7. What Not to Tokenise

7. Was nicht tokenisiert werden sollte

A final design question that often gets answered by accident: what not to tokenise.
Eine abschließende Entwurfsfrage, die häufig unbeabsichtigt beantwortet wird: Was sollte nicht tokenisiert werden?

Tokenising the wrong things degrades the AI's output without improving protection. A tokeniser that replaces every proper noun produces unreadable documents. A tokeniser that replaces every numeric field destroys analytical signal. The temptation is to be aggressive — "tokenise everything that could conceivably be sensitive" — but the cost shows up immediately in output quality.
Das Tokenisieren falscher Elemente verschlechtert die KI-Ausgabe, ohne den Schutz zu verbessern. Ein Tokenisierer, der jeden Eigennamen ersetzt, erzeugt unleserliche Dokumente. Ein Tokenisierer, der jedes numerische Feld ersetzt, vernichtet analytische Signale. Die Versuchung besteht darin, aggressiv vorzugehen — „alles tokenisieren, was möglicherweise sensibel sein könnte" —, doch die Konsequenzen zeigen sich unmittelbar in der Ausgabequalität.

The disciplined approach is to define sensitivity explicitly, in the enterprise's own terms, and tokenise only those elements. Generic PII categories are a starting point, not a complete list. Internal project codes, customer-segment identifiers, sector-specific references — whatever the enterprise's data posture treats as protected — go on the list. Everything else stays.
Der disziplinierte Ansatz: Sensibilität explizit in den eigenen Unternehmensbegriffen definieren und nur diese Elemente tokenisieren. Allgemeine personenbezogene Datenkategorien im Sinne der DSGVO sind ein Ausgangspunkt, keine vollständige Liste. Interne Projektkennzeichen, Kundensegment-IDs, branchenspezifische Referenzen — was immer die unternehmenseigene Datenstrategie als schützenswert einstuft — gehört auf die Liste. Alles andere bleibt unverändert.

The list has to be versioned, because what counts as sensitive changes over time. It also has to be auditable, because an audit review of the workflow will want to know what was tokenised, when, under which definition. The definition layer is where most of the long-term operational cost of this architecture lives, and where most teams under-invest at the start.
Die Liste muss versioniert sein, weil sich die Definition von Sensibilität verändert. Sie muss auch auditierbar sein — eine Prüfung des Workflows wird wissen wollen, was wann unter welcher Definition tokenisiert wurde. Die Definitionsebene ist der Bereich, in dem der größte Teil der langfristigen Betriebskosten dieser Architektur liegt und in den die meisten Teams zu Beginn zu wenig investieren.

### 8. The Next Step in the Workflow

8. Der nächste Schritt im Workflow

Tokenisation prepares the document for the external model. The model processes the tokenised document and returns a tokenised response. The response, on its own, is not yet useful to the workflow — the tokens have to be mapped back to original values inside the enterprise environment before the output reaches the user.
Tokenisierung bereitet das Dokument für das externe Modell vor. Das Modell verarbeitet das tokenisierte Dokument und gibt eine tokenisierte Antwort zurück. Diese Antwort ist für sich genommen noch nicht nutzbar — die Token müssen innerhalb der Unternehmensinfrastruktur auf Originalwerte zurückgemappt werden, bevor der Output den Nutzer erreicht.

That reconstruction step is the subject of the next article in this series. For the broader pattern this article is part of, see the pillar overview on running external LLMs on sensitive enterprise data. For why masking and redaction don't substitute for tokenisation in operational workflows, see the article on why AI workflows stall on operational data.
Dieser Rekonstruktionsschritt ist Gegenstand des nächsten Artikels in dieser Reihe. Eine Übersicht über das übergeordnete Muster, zu dem dieser Artikel gehört, bietet der Pillar-Beitrag zum Betrieb externer LLMs mit sensiblen Unternehmensdaten. Warum Maskierung und Schwärzung keine gleichwertigen Alternativen zur Tokenisierung in operativen Workflows sind, erläutert der Artikel zu KI-Workflows, die an operativen Daten scheitern.

## Section 04: Related Articles

Related articles
Verwandte Artikel

Reconstructing AI Output: The Last Mile Between Model Response and Business Reality
KI-Output rekonstruieren: Die letzte Meile zwischen Modellantwort und Geschäftspraxis

Running External LLMs on Data Your Company Can't Send Externally
Externe LLMs mit Daten betreiben, die das Unternehmen nicht extern übermitteln darf

Why AI Workflows Stall at Tables, Tickets, and Operational Documents
Warum KI-Workflows an Tabellen, Tickets und operativen Dokumenten scheitern

Breadcrumb: Tokenization for LLM Inputs
Breadcrumb: Tokenisierung für LLM-Eingaben
