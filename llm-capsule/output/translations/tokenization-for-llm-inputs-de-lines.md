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

<h2>1. Was Tokenisierung in diesem Kontext tatsächlich leistet</h2>
<p>Der Transformationsschritt zwischen einem Unternehmensdokument und einem externen LLM ist konzeptionell einfach: Elemente identifizieren, die die Systemgrenze nicht passieren dürfen, durch Platzhalter ersetzen, die ihre strukturelle Rolle erhalten, und das Ergebnis an das Modell übermitteln. In der Praxis verbirgt diese Einfachheit eine Reihe von Architekturentscheidungen, die bestimmen, ob der Ansatz im Produktivbetrieb skaliert oder unter Last versagt.</p>
<p>Dieser Artikel behandelt diese Entscheidungen. Es handelt sich nicht um ein Tutorial zu einer bestimmten Bibliothek oder einem Produkt, sondern um die Entscheidungen, die jedes Team beim Einsatz vorgelagerter Tokenisierung explizit treffen muss — einschließlich der jeweiligen Abwägungen.</p>
<p>Der Begriff <em>Tokenisierung</em> wird hier im datenschutzrechtlichen Sinne verwendet: sensible Werte durch nicht-sensible Platzhalter ersetzen, die sich zurückmappen lassen. Nicht im NLP-Sinne, wo er das Aufteilen von Text in Teilwörter für die Modelleingabe bezeichnet. <strong>Beide Begriffe teilen ein Wort — und nahezu nichts sonst.</strong></p>
<p>Ein Hinweis zur Terminologie: In der CUBIG-Architektur ist Tokenisierung der zentrale Substitutionsmechanismus innerhalb einer umfassenderen <strong>Verkapselungsschicht</strong>, die auch Erkennung, Formaterhalt und optionale statistische Schutzmaßnahmen umfasst. Dieser Artikel konzentriert sich auf den Tokenisierungsmechanismus. Die Entwurfsentscheidungen sind weitgehend dieselben, unabhängig davon, ob eine Implementierung sich selbst als Tokenisierung, Verkapselung oder unter einem anderen in der Branche gebräuchlichen Namen bezeichnet.</p>
<p>Wenn ein Unternehmensdokument für ein externes LLM vorbereitet wird, ist das Ziel, dass das Modell eine Dokumentversion erhält, die alles für die Aufgabe Notwendige behält und alles entfernt, was innerhalb der Unternehmensgrenze bleiben soll. Tokenisierung ist der Mechanismus, der die zweite Hälfte bewirkt: sensible Elemente identifizieren und durch Platzhalter ersetzen.</p>
<p>Ein hilfreicher Rahmen: Das LLM muss nicht wissen, dass der Kunde <em>Marlene Schmidt</em> heißt. Es muss wissen, dass es einen Kunden gibt, dass dieser an drei verschiedenen Stellen im Dokument erwähnt wird und dass alle Verweise auf dieselbe Entität zeigen. Ein Token wie <code>CUST-7F2A</code> trägt dieselbe Information — eine referenzierbare Entität, die konsistent an mehreren Stellen erscheint — ohne die Identität preiszugeben.</p>
<p>Das ist die Kerneigenschaft der Tokenisierung: <strong>referentielle Integrität ohne semantische Offenlegung</strong>. Das Modell kann über <em>„den Kunden"</em> im gesamten Dokument schlussfolgern, weil der Token konsistent durch das Dokument führt. Die Identität lässt sich nicht rekonstruieren, weil der Token sie nicht kodiert.</p>
<p>Alles Weitere in diesem Artikel sind Variationen der Frage, wie diese Eigenschaft implementiert wird und welche zusätzlichen Eigenschaften sich darüber schichten lassen.</p>

<figure class="ds-figure">
  <div class="ds-figure__svg-wrap">
    <svg class="ds-figure__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" role="img" aria-labelledby="referential-integrity-title referential-integrity-desc">
      <title id="referential-integrity-title">Referentielle Integrität ohne semantische Offenlegung</title>
      <desc id="referential-integrity-desc">Ein Diagramm, das ein Quelldokument zeigt, in dem derselbe Kunde auf drei verschiedene Arten referenziert wird. In der Version, die das LLM sieht, werden alle Varianten zu einem einzigen konsistenten Token aufgelöst. Die Mapping-Tabelle verbleibt im Unternehmen.</desc>

      <defs>
        <marker id="arrow-primary-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b4fe9"/>
        </marker>
        <marker id="arrow-teal-tk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b7f7e"/>
        </marker>
      </defs>


      <g>
        <rect x="20" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#0f1130" stroke-width="1.5"/>
        <text x="40" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#6b7280" letter-spacing="1.2">QUELLDOKUMENT</text>
        <line x1="40" y1="74" x2="340" y2="74" stroke="#e5e7eb" stroke-width="1"/>

        <text x="40" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Kopfzeile: Kunde <tspan font-weight="700" fill="#c73e3a">Marlene Schmidt</tspan></text>
        <text x="40" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">rief wegen Kontoausfällen an.</text>

        <text x="40" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agentnotiz: &ldquo;<tspan font-weight="700" fill="#c73e3a">Herr Schmidt</tspan> berichtet,</text>
        <text x="40" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">das Problem habe letzten Dienstag begonnen.&rdquo;</text>

        <text x="40" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Lösung: &ldquo;<tspan font-weight="700" fill="#c73e3a">Marlene</tspan> bestätigte die</text>
        <text x="40" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Wiederherstellung nach dem Firmware-Rollback.&rdquo;</text>
      </g>


      <g>
        <line x1="370" y1="140" x2="490" y2="140" stroke="#5b4fe9" stroke-width="2" marker-end="url(#arrow-primary-tk)"/>
        <rect x="380" y="98" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="118" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Entitätsauflösung</text>
        <rect x="380" y="150" width="100" height="32" rx="4" fill="#eeebfe" stroke="#5b4fe9" stroke-width="1"/>
        <text x="430" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#5b4fe9">Tokenisierung</text>
      </g>


      <g>
        <rect x="500" y="40" width="340" height="200" rx="8" fill="#ffffff" stroke="#5b4fe9" stroke-width="1.5"/>
        <text x="520" y="64" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#5b4fe9" letter-spacing="1.2">WAS DAS LLM SIEHT</text>
        <line x1="520" y1="74" x2="820" y2="74" stroke="#eeebfe" stroke-width="1"/>

        <text x="520" y="100" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Kopfzeile: Kunde <tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan></text>
        <text x="520" y="118" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">rief wegen Kontoausfällen an.</text>

        <text x="520" y="148" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Agentnotiz: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> berichtet,</text>
        <text x="520" y="166" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">das Problem habe letzten Dienstag begonnen.&rdquo;</text>

        <text x="520" y="196" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Lösung: &ldquo;<tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> bestätigte die</text>
        <text x="520" y="214" font-family="Inter, sans-serif" font-size="12" fill="#3a3d5e">Wiederherstellung nach dem Firmware-Rollback.&rdquo;</text>
      </g>


      <g>
        <rect x="280" y="280" width="400" height="80" rx="8" fill="#e6f7f6" stroke="#0ea5a4" stroke-width="1.5"/>
        <text x="300" y="304" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#0b7f7e" letter-spacing="1.2">TOKEN ↔ WERT-MAPPING · nur intern</text>
        <line x1="300" y1="314" x2="660" y2="314" stroke="#a7e0df" stroke-width="1"/>
        <text x="300" y="334" font-family="Inter, sans-serif" font-size="12" fill="#0f1130"><tspan font-family="'JetBrains Mono', monospace" font-weight="700" fill="#5b4fe9">CUST-7F2A</tspan> &nbsp;&rarr;&nbsp; Marlene Schmidt &nbsp;<tspan font-style="italic" fill="#6b7280">(auch &ldquo;Herr Schmidt&rdquo;, &ldquo;Marlene&rdquo;)</tspan></text>
        <text x="300" y="352" font-family="Inter, sans-serif" font-size="11" fill="#6b7280" font-style="italic">Das Mapping verlässt nie die Unternehmensgrenze.</text>
      </g>


      <line x1="190" y1="240" x2="380" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="670" y1="240" x2="580" y2="285" stroke="#0b7f7e" stroke-width="1.2" stroke-dasharray="3 3"/>
    </svg>
  </div>
  <figcaption class="ds-figure__caption">Abbildung 1 &middot; <strong>Drei verschiedene Erwähnungen desselben Kunden werden zu einem einzigen konsistenten Token aufgelöst. Das LLM kann dokumentenweit über &ldquo;den Kunden&rdquo; schlussfolgern — die Rückabbildung auf die reale Identität verbleibt im Unternehmen.</strong></figcaption>
</figure>

<h2>2. Deterministische vs. randomisierte Tokenisierung</h2>
<p>Die erste Architekturentscheidung betrifft die Frage, ob ein bestimmter sensibler Wert stets denselben Token erzeugt oder bei jedem Auftreten einen anderen.</p>

<h3>2.1 Deterministische Tokenisierung</h3>
<p><strong>Deterministische Tokenisierung</strong> bedeutet: <em>Marlene Schmidt</em> wird in jedem Dokument und jedem Workflow zu <code>CUST-7F2A</code>. Der Token ist eine Funktion des Werts — in der Regel unter Einbeziehung eines geheimen Schlüssels.</p>
<p>Der Vorteil liegt in der dokumentenübergreifenden Konsistenz. Referenzieren zwei Tickets denselben Kunden, sieht das LLM in beiden denselben Token — Analysen, die auf dokumentenübergreifenden Verknüpfungen beruhen, bleiben funktionsfähig. Für Workflows, die Dokumente aggregieren oder vergleichen — Betrugserkennung, Kundenhistorie, Kohortenanalyse — ist die deterministische Variante in der Regel die einzige praktikable Wahl.</p>
<p>Der Nachteil: Determinismus schafft eine <strong>Re-Identifikationsfläche</strong>. Ein Angreifer, der ausreichend tokenisierte Dokumente beobachtet und über Hintergrundwissen verfügt, wo welche Kunden auftreten, kann Token mit Identitäten korrelieren. Dieses Risiko ist bei hochvolumigen Workflows oder bei Entitäten, die über längere Zeit in vielen tokenisierten Ausgaben erscheinen, real.</p>

<h3>2.2 Randomisierte Tokenisierung</h3>
<p><strong>Randomisierte Tokenisierung</strong> erzeugt bei jedem Auftreten einen anderen Token — auch für denselben Wert. <em>Marlene Schmidt</em> kann in einem Dokument <code>CUST-7F2A</code> werden, in einem anderen <code>CUST-3B91</code>.</p>
<p>Der Vorteil: Es wird keine dokumentenübergreifende Verknüpfung offengelegt. Jedes tokenisierte Dokument ist ein geschlossenes System.</p>
<p>Der Nachteil: Dokumentenübergreifende Analysen sind nicht möglich. Das LLM kann nicht erkennen, dass zwei Token denselben Kunden referenzieren — strukturell tun sie es nicht. Für Workflows ohne dokumentenübergreifende Verknüpfungsanforderungen — etwa die Zusammenfassung eines einzelnen Dokuments oder die Extraktion von Klauseln aus einem Vertrag — ist Randomisierung geeignet. Wo diese Verknüpfung benötigt wird, muss sie nach der LLM-Antwort rekonstruiert werden, was die Komplexität erhöht.</p>

<h3>2.3 Das Hybridmuster der meisten Produktivdeployments</h3>
<p>Die meisten Produktivdeployments münden in ein Hybridmodell: <strong>deterministisch <em>innerhalb eines Workflow-Bereichs</em></strong> (damit mehrstufige Konversationen über einen Kunden kohärent bleiben), <strong>randomisiert <em>über Workflow-Bereiche hinweg</em></strong> (damit Analysen aus einem Workflow nicht mit einem anderen verknüpft werden können). Die Abgrenzung des Bereichs — nach Session, Nutzer, Dokument oder Mandant — ist selbst eine Entwurfsentscheidung, die ein Team vor dem Go-Live festlegen muss.</p>

<table>
  <thead>
    <tr>
      <th>Variante</th>
      <th>Vorteil</th>
      <th>Nachteil</th>
      <th>Geeignet für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Deterministisch</td>
      <td>Dokumentenübergreifende Verknüpfung erhalten; workflowübergreifende Analysen möglich</td>
      <td>Re-Identifikationsrisiko bei hochvolumigen Workflows</td>
      <td>Betrugserkennung, Kundenhistorie, Kohortenanalyse</td>
    </tr>
    <tr>
      <td>Randomisiert</td>
      <td>Jedes tokenisierte Dokument ist ein geschlossenes System; keine dokumentenübergreifende Verknüpfung</td>
      <td>Dokumentenübergreifende Analysen nicht möglich; Verknüpfung muss nach LLM-Antwort rekonstruiert werden</td>
      <td>Einzeldokument-Zusammenfassung, Einzelvertrags-Extraktion</td>
    </tr>
    <tr>
      <td>Hybrid (deterministisch im Bereich, randomisiert bereichsübergreifend)</td>
      <td>Kohärenz innerhalb von Session/Nutzer/Mandant-Grenzen; Isolation nach außen</td>
      <td>Die Bereichsabgrenzung selbst wird zur Entwurfsentscheidung</td>
      <td>Die meisten Produktivdeployments</td>
    </tr>
  </tbody>
</table>

<h2>3. Formaterhaltende Tokenisierung — warum generische Platzhalter nicht ausreichen</h2>
<p>Eine naive Implementierung ersetzt sensible Werte durch generische Platzhalter: <code>[CUSTOMER]</code>, <code>[ACCOUNT_NUMBER]</code>, <code>[DATE]</code>. Das LLM sieht ein mit solchen Markierungen durchsetztes Dokument und versucht, darüber zu schlussfolgern.</p>
<p>In der Praxis funktioniert das schlecht — aus einem spezifischen Grund: Die Schlussfolgerungen eines LLM werden durch die Oberflächenform des Inputs geprägt. Ein Dokument mit dem Text <em>„Kunde Marlene Schmidt rief am 2026-03-15 wegen Konto 4471-9028 an"</em> ist für das Modell ein kohärenter Betriebsvorgang. Dasselbe Dokument mit Platzhaltern — <em>„Kunde [CUSTOMER] rief am [DATE] wegen Konto [ACCOUNT_NUMBER] an"</em> — liest sich wie eine Vorlage oder eine Schwärzungsnotiz. <strong>Modelle reagieren empfindlich auf dieses Signal. Die Ausgabequalität sinkt entsprechend</strong>: Zusammenfassungen werden abstrakter, Extraktionen ungenauer, und das Modell kommentiert gelegentlich die Schwärzung selbst.</p>
<p><strong>Formaterhaltende Tokenisierung</strong> erzeugt Token, die den ersetzten Werten ähneln. Ein Name wird zu einem plausibel wirkenden Namens-Token: <code>Lyra Vesper</code>. Ein Datum wird zu einem echten Datum in einem plausiblen Bereich. Eine Kontonummer wird zu einer Zahl gleicher Länge im gleichen Format, die keine echte Kontonummer ist.</p>
<p>Das Dokument, das das LLM sieht, liest sich als kohärentes Betriebsdokument mit anonymen, aber realistisch wirkenden Stellvertretern. Die Modellausgaben erreichen die Qualität, zu der das Modell tatsächlich in der Lage ist — ohne Qualitätsverlust durch die Wahrnehmung, eine Vorlage verarbeiten zu sollen.</p>
<p>Formaterhalt bringt eigene Entwurfsentscheidungen mit sich: Wie plausibel sollen die Token sein? Werden sie aus einem festen Pool fiktiver Namen gezogen oder dynamisch generiert? Wie werden Datumsangaben und Zahlenwerte behandelt, deren <em>Wert</em> selbst analytische Bedeutung trägt — ein Datum aus 2019 gegenüber 2024 kann für eine Analyse relevant sein, auch wenn das genaue Datum sensibel ist. <strong>Die allgemeine Regel: Der Token muss genau die analytische Eigenschaft des Originalwerts erhalten — nicht mehr und nicht weniger.</strong></p>

<h2>4. Wo das Mapping gespeichert werden muss</h2>
<p>Tokenisierung schützt die Daten nur dann, wenn das Mapping — die Tabelle, die Token mit Originalwerten verknüpft — innerhalb der Unternehmensinfrastruktur verbleibt. <strong>Dieser Teil der Architektur entscheidet am zuverlässigsten darüber, ob der Ansatz seinen Schutz tatsächlich liefert.</strong></p>
<p>Drei Eigenschaften des Mappings müssen gewährleistet sein:</p>
<ol>
  <li><strong>Es verbleibt unter ausschließlicher Unternehmenskontrolle.</strong> Das Mapping ist faktisch der Schlüssel zur Re-Identifikation der Daten. Verlässt es die Unternehmensinfrastruktur, sinkt der Schutz auf das Niveau des neuen Speicherorts. Für Workflows, bei denen Daten innerhalb der EU oder anderer definierter Grenzen verbleiben müssen — eine Anforderung, die sich aus der DSGVO ergibt —, muss das Mapping innerhalb derselben Grenze gespeichert sein: gemeinsam mit den Quellsystemen, nicht beim KI-Endpunkt.</li>
  <li><strong>Es ist integritätsgeschützt.</strong> Eine Manipulation des Mappings verändert, was bei der Rekonstruktion der LLM-Antwort zurückgegeben wird. Ein Angreifer, der das Mapping modifizieren kann, kann Identitäten im Output austauschen. Standardpraxis ist die Anwendung von Integritätsprüfungen auf das Mapping selbst — signierte Einträge, Zugriffs-Audit-Logs — sodass Manipulationen erkennbar sind.</li>
  <li><strong>Es ist separat vom LLM-Workflow zugangskontrolliert.</strong> Das Team, das die LLM-Integration betreibt, benötigt keinen Lesezugriff auf das Mapping. Der Rekonstruktionsschritt greift programmatisch auf das Mapping zu — Menschen müssen die Originalwerte nicht einsehen. Die Trennung der Zugriffspfade ermöglicht es, das Mapping unter strengeren Kontrollen zu verwalten als den LLM-Workflow selbst.</li>
</ol>
<p>Die Speichertechnologie ist gegenüber diesen Eigenschaften nachrangig. Das Mapping kann in einer dedizierten Datenbank, einem Key-Value-Store, einer verschlüsselten Datei oder einem Hardware-gesicherten Tresor liegen — die Wahl hängt von Volumen, Latenzanforderungen und bestehender Infrastruktur ab. <strong>Entscheidend ist: Die drei genannten Eigenschaften sind nicht verhandelbare Entwurfseinschränkungen, keine konfigurierbaren Optionen.</strong></p>

<h2>5. Token-Konsistenz — gleiche Entität, gleicher Token</h2>
<p>Ein subtileres Entwurfsproblem: sicherzustellen, dass dieselbe Entität konsistent denselben Token erhält — auch wenn sie an verschiedenen Stellen eines Dokuments unterschiedlich bezeichnet wird.</p>
<p>Ein Service-Ticket könnte <em>„den Kunden"</em>, dann <em>„Herrn Schmidt"</em>, dann <em>„Marlene"</em>, dann <em>„den Teilnehmer"</em> erwähnen — alle verweisen auf dieselbe Person. Ein naiver Tokenisierer sieht vier verschiedene Erwähnungen und erzeugt vier verschiedene Token. Das LLM kann dann nicht mehr erkennen, dass alle auf dieselbe Entität verweisen. <strong>Die zurückgegebene Zusammenfassung behandelt sie möglicherweise als vier verschiedene Personen.</strong></p>
<p>Dies erfordert <strong>Entitätsauflösung</strong> vor der Tokenisierung: Identifizierung, welche Erwähnungen in einem Dokument auf dieselbe zugrundeliegende Entität verweisen, und Sicherstellung, dass alle auf denselben Token abgebildet werden. Im Allgemeinen ist dies kein triviales Problem — Entitätsauflösung ist ein eigenes Forschungsgebiet. In der Praxis ist es jedoch handhabbar, da Unternehmensdokumente strukturelle Hinweise bieten: eine Kundennummer im Kopfbereich, die Freitexterwähnungen zusammenführt, formale Namenskonventionen in Betriebsprotokollen, schemadefinierte Beziehungen in strukturierten Datensätzen.</p>
<p>Die zweite Hälfte der Konsistenz betrifft Dokumente innerhalb eines Workflow-Bereichs. Referenzieren zwei Tickets denselben Kunden und muss der Workflow sie als zusammengehörig behandeln, muss die Tokenisierung in beiden denselben Token für den Kunden erzeugen. Hier wirkt die frühere Entscheidung zwischen deterministisch und randomisiert: <strong>Determinismus innerhalb des Bereichs ermöglicht es dem LLM zu erkennen, dass <em>„derselbe Kunde in drei Tickets erscheint"</em> — ohne zu erfahren, wer dieser Kunde ist.</strong></p>
<p>Eine sorgfältig konzipierte Tokenisierungsschicht behandelt beide Konsistenzformen — innerhalb eines Dokuments und innerhalb eines Bereichs — als Teil der Transformation, nicht als nachträgliche Ergänzung. Teams, die Konsistenz nachträglich auf einen mentionsbasierten Tokenisierer aufsetzen, stellen in der Regel fest, dass der Workflow auf eine Weise degradiert, die wie ein Modellqualitätsproblem aussieht, aber tatsächlich ein Datenvorbereitungsproblem ist.</p>

<h2>6. Ergänzende Schutzschichten — wenn Tokenisierung allein nicht ausreicht</h2>
<p>Tokenisierung löst das Substitutionsproblem. Für die meisten Workflows ist eine sorgfältig implementierte Tokenisierung mit Mapping unter ausschließlicher Unternehmenskontrolle ausreichend. Für bestimmte Workflows lohnt es sich, eine zusätzliche Schutzschicht zu ergänzen.</p>
<p>Zusätzlicher Schutz ist angezeigt, wenn das Restrisiko nicht in den Token selbst liegt, sondern in <strong>den Mustern, die sie bilden</strong>. Ein tokenisiertes Dokument kann ausreichend strukturelle Informationen enthalten — Häufigkeiten, Co-Vorkommen, Sequenzen, Verhältnisse —, damit eine ausgefeilte Korrelationsanalyse Entitäten auch ohne Rohwerte re-identifizieren könnte. Dieses Risiko ist besonders relevant bei hochkardinalen Daten, langen Zeitreihen und Workflows, bei denen sich über die Zeit viele tokenisierte Ausgaben ansammeln.</p>
<p>Die Standardantworten sind Differential Privacy, k-Anonymität und ähnliche statistische Schutzmaßnahmen, die auf tokenisierte Daten angewendet werden. Jede Methode fügt auf kontrollierte Weise Rauschen oder Aggregation hinzu, die begrenzt, wie viel ein Angreifer aus dem tokenisierten Output lernen kann — auf Kosten etwas analytischer Präzision. Ob dieser Kompromiss gerechtfertigt ist, hängt vom Bedrohungsmodell und der Rauschtoleranz des Workflows ab.</p>
<p>Für die meisten Unternehmens-KI-Workflows ist diese Schicht optional. Bei Workflows mit hochsensiblen Daten, hohem Volumen oder einer Defense-in-Depth-Anforderung — etwa im Kontext von BSI C5 oder branchenspezifischen Compliance-Vorgaben — ist die zusätzliche Komplexität gerechtfertigt. <strong>Die Entscheidung sollte workflow-spezifisch getroffen werden, nicht als globale Einstellung.</strong></p>

<h2>7. Was nicht tokenisiert werden sollte</h2>
<p>Eine abschließende Entwurfsfrage, die häufig unbeabsichtigt beantwortet wird: Was sollte <em>nicht</em> tokenisiert werden?</p>
<p>Das Tokenisieren falscher Elemente verschlechtert die KI-Ausgabe, ohne den Schutz zu verbessern. Ein Tokenisierer, der jeden Eigennamen ersetzt, erzeugt unleserliche Dokumente. Ein Tokenisierer, der jedes numerische Feld ersetzt, vernichtet analytische Signale. Die Versuchung besteht darin, aggressiv vorzugehen — <em>„alles tokenisieren, was möglicherweise sensibel sein könnte"</em> —, doch die Konsequenzen zeigen sich unmittelbar in der Ausgabequalität.</p>
<p>Der disziplinierte Ansatz: Sensibilität explizit in den eigenen Unternehmensbegriffen definieren und nur diese Elemente tokenisieren. <strong>Allgemeine personenbezogene Datenkategorien im Sinne der DSGVO sind ein Ausgangspunkt, keine vollständige Liste.</strong> Interne Projektkennzeichen, Kundensegment-IDs, branchenspezifische Referenzen — was immer die unternehmenseigene Datenstrategie als schützenswert einstuft — gehört auf die Liste. Alles andere bleibt unverändert.</p>
<p>Die Liste muss versioniert sein, weil sich die Definition von Sensibilität verändert. Sie muss auch auditierbar sein — eine Prüfung des Workflows wird wissen wollen, was wann unter welcher Definition tokenisiert wurde. <strong>Die Definitionsebene ist der Bereich, in dem der größte Teil der langfristigen Betriebskosten dieser Architektur liegt und in den die meisten Teams zu Beginn zu wenig investieren.</strong></p>

<h2>8. Der nächste Schritt im Workflow</h2>
<p>Tokenisierung bereitet das Dokument für das externe Modell vor. Das Modell verarbeitet das tokenisierte Dokument und gibt eine tokenisierte Antwort zurück. <strong>Diese Antwort ist für sich genommen noch nicht nutzbar</strong> — die Token müssen innerhalb der Unternehmensinfrastruktur auf Originalwerte zurückgemappt werden, bevor der Output den Nutzer erreicht.</p>
<p>Dieser Rekonstruktionsschritt ist Gegenstand des nächsten Artikels in dieser Reihe. Eine Übersicht über das übergeordnete Muster, zu dem dieser Artikel gehört, bietet der Pillar-Beitrag zum <a href="/resources/learn/external-llm-on-sensitive-enterprise-data">Betrieb externer LLMs mit sensiblen Unternehmensdaten</a>. Warum Maskierung und Schwärzung keine gleichwertigen Alternativen zur Tokenisierung in operativen Workflows sind, erläutert der Artikel zu <a href="/resources/learn/why-ai-stalls-on-operational-data">KI-Workflows, die an operativen Daten scheitern</a>.</p>

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
