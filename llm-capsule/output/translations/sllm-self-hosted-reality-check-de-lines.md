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

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 680 540" xmlns="http://www.w3.org/2000/svg">
    <title>5-Jahres-TCO für sLLM-Eigenbetrieb (32B-Modell, DACH-Marktpreise)</title>
    <desc>Initiale Aufbaukosten, jährliche Betriebskosten und kumulierter 5-Jahres-TCO für einen 32B-sLLM im Eigenbetrieb</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">5-Jahres-TCO: sLLM-Eigenbetrieb (32B-Modell, Richtwerte DACH)</text>

    <text x="40" y="68" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#c73e3a">Initiale Aufbaukosten — ca. 400.000 EUR</text>

    <rect x="40" y="80" width="600" height="40" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <rect x="40" y="80" width="450" height="40" rx="8" fill="#ef5350" stroke="#ef5350" stroke-width="0"/>
    <text x="60" y="100" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">GPU-Server (H100 ×8)</text>
    <text x="60" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">ca. 250.000–300.000 EUR</text>

    <rect x="490" y="80" width="80" height="40" rx="0" fill="#c73e3a" stroke="#c73e3a" stroke-width="0"/>
    <text x="500" y="100" font-family="Inter, sans-serif" font-size="11" fill="#fff">Infrastruktur</text>
    <text x="500" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">~50.000 EUR</text>

    <rect x="570" y="80" width="70" height="40" rx="0" fill="#c73e3a" stroke="#c73e3a" stroke-width="0" opacity="0.85"/>
    <text x="580" y="100" font-family="Inter, sans-serif" font-size="11" fill="#fff">Setup-Personal</text>
    <text x="580" y="114" font-family="Inter, sans-serif" font-size="11" fill="#fff">~50.000 EUR</text>

    <text x="40" y="158" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#b97606">Jährliche Betriebskosten — ca. 200.000 EUR / Jahr</text>

    <rect x="40" y="170" width="600" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.5"/>
    <rect x="40" y="170" width="320" height="40" rx="8" fill="#f59e0b" stroke="#f59e0b" stroke-width="0"/>
    <text x="60" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">Fachpersonal (MLOps, 2+ Personen)</text>
    <text x="60" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">120.000–150.000 EUR</text>

    <rect x="360" y="170" width="160" height="40" rx="0" fill="#b97606" stroke="#b97606" stroke-width="0"/>
    <text x="370" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">Energie &amp; Wartung</text>
    <text x="370" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">25.000–50.000 EUR</text>

    <rect x="520" y="170" width="120" height="40" rx="0" fill="#b97606" stroke="#b97606" stroke-width="0" opacity="0.85"/>
    <text x="530" y="190" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#fff">SW-Lizenzen</text>
    <text x="530" y="204" font-family="Inter, sans-serif" font-size="11" fill="#fff">einige Tausend EUR</text>

    <text x="40" y="248" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#3b2fbf">Zusatzkosten — unregelmäßig anfallend</text>

    <rect x="40" y="260" width="290" height="60" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="56" y="282" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf">Basismodell-Wechsel</text>
    <text x="56" y="300" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">Fine-Tuning und Infrastruktur-Reoptimierung</text>
    <text x="56" y="314" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">ca. 100.000–150.000 EUR alle 1–2 Jahre</text>

    <rect x="350" y="260" width="290" height="60" rx="8" fill="#eeebfe" stroke="#5b4fe9" stroke-width="0.5"/>
    <text x="366" y="282" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#3b2fbf">GPU-Erneuerung</text>
    <text x="366" y="300" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">Hardware-Erneuerung alle 3–5 Jahre</text>
    <text x="366" y="314" font-family="Inter, sans-serif" font-size="11" fill="#5b4fe9">Abschreibung + Neubeschaffung</text>

    <line x1="40" y1="346" x2="640" y2="346" stroke="#e5e7eb" stroke-width="0.5"/>

    <text x="40" y="376" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">5-Jahres-TCO (Gesamtschätzung)</text>

    <rect x="40" y="394" width="600" height="68" rx="8" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="60" y="420" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#c73e3a">ca. 1,4 Mio. EUR (konservativ) bis ca. 1,9 Mio. EUR</text>
    <text x="60" y="440" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">Aufbau 400k + (Betrieb 200k × 5 Jahre) + Modellwechsel 100–300k</text>
    <text x="60" y="456" font-family="Inter, sans-serif" font-size="12" fill="#ef5350">+ variable GPU-Erneuerungskosten</text>

    <text x="40" y="494" font-family="Inter, sans-serif" font-size="13" fill="#3a3d5e">Vergleich: 5-Jahres-TCO beim Gateway-Ansatz typischerweise 400.000–600.000 EUR</text>
    <text x="40" y="516" font-family="Inter, sans-serif" font-size="12" fill="#6b7280">※ Richtwerte auf Basis allgemeiner Marktpreise (DACH). Tatsächliche Kosten abhängig von Unternehmensgröße und Vertragskonditionen.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">Abbildung 1. 5-Jahres-TCO-Struktur für sLLM-Eigenbetrieb (32B-Modell)</figcaption>
</figure>

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

<div class="callout">
  <div class="callout__icon">💡</div>
  <div class="callout__body"><strong>TCO im Vergleich:</strong> Der 5-Jahres-TCO für sLLM-Eigenbetrieb liegt konservativ bei rund 1,4 Mio. EUR. Beim Gateway-Ansatz mit externen kommerziellen LLMs liegt der vergleichbare TCO typischerweise bei 400.000–600.000 EUR. <strong>Der Kostenfaktor beträgt damit rund das Dreifache.</strong></div>
</div>

<h2>3. Die Leistungslücke — warum sie sich nicht schließt</h2>
<p>Angenommen, die Kosten sind tragbar. Die nächste Frage lautet: Welche Leistung wird dafür erbracht? Hier zeigt sich das zweite strukturelle Problem des sLLM-Eigenbetriebs.</p>

<figure style="margin: 32px 0;">
  <svg width="100%" viewBox="0 0 720 600" xmlns="http://www.w3.org/2000/svg">
    <title>Kommerzielle Top-LLMs vs. selbst betriebene sLLMs (7–8B) — wachsende Leistungslücke</title>
    <desc>MMLU-Pro-Benchmark: Leistungslücke zwischen kommerziellen Top-LLMs und 7–8B-sLLMs wächst von 36 Punkten (2024 H1) auf prognostizierte 46+ Punkte (2028)</desc>

    <text x="40" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#0f1130">Kommerzielle Top-LLMs vs. sLLM-Eigenbetrieb (7–8B) — wachsende Leistungslücke</text>

    <text x="55" y="80" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">MMLU-Pro</text>
    <text x="55" y="120" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">100</text>
    <text x="55" y="160" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">90</text>
    <text x="55" y="200" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">80</text>
    <text x="55" y="240" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">70</text>
    <text x="55" y="280" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">60</text>
    <text x="55" y="320" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">50</text>
    <text x="55" y="360" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">40</text>
    <text x="55" y="400" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="end">30</text>

    <line x1="60" y1="120" x2="700" y2="120" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="160" x2="700" y2="160" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="200" x2="700" y2="200" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="240" x2="700" y2="240" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="280" x2="700" y2="280" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="320" x2="700" y2="320" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="360" x2="700" y2="360" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="400" x2="700" y2="400" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="3 3"/>

    <line x1="60" y1="420" x2="700" y2="420" stroke="#3a3d5e" stroke-width="1"/>
    <line x1="60" y1="80" x2="60" y2="420" stroke="#3a3d5e" stroke-width="1"/>

    <rect x="450" y="80" width="250" height="340" fill="#f7f8fb" fill-opacity="0.6"/>
    <text x="575" y="100" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#6b7280" text-anchor="middle">Trendbasierte Prognose</text>

    <text x="100" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2024 H1</text>
    <text x="200" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2024 H2</text>
    <text x="300" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2025 H1</text>
    <text x="400" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2025 H2</text>
    <text x="500" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2026</text>
    <text x="600" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2027</text>
    <text x="680" y="440" font-family="Inter, sans-serif" font-size="11" fill="#3a3d5e" text-anchor="middle">2028</text>

    <path d="M 100 248 L 200 200 L 300 140 L 400 128" fill="none" stroke="#5b4fe9" stroke-width="2.5"/>
    <circle cx="100" cy="248" r="5" fill="#5b4fe9"/>
    <circle cx="200" cy="200" r="5" fill="#5b4fe9"/>
    <circle cx="300" cy="140" r="5" fill="#5b4fe9"/>
    <circle cx="400" cy="128" r="5" fill="#5b4fe9"/>

    <path d="M 400 128 L 500 112 L 600 104 L 680 100" fill="none" stroke="#5b4fe9" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="500" cy="112" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>
    <circle cx="600" cy="104" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>
    <circle cx="680" cy="100" r="5" fill="#5b4fe9" fill-opacity="0.4" stroke="#5b4fe9" stroke-width="1.5"/>

    <text x="100" y="236" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">68</text>
    <text x="200" y="188" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">76</text>
    <text x="300" y="128" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~85</text>
    <text x="400" y="116" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~88</text>
    <text x="500" y="100" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~92</text>
    <text x="600" y="92" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~94</text>
    <text x="680" y="88" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#3b2fbf" text-anchor="middle">~95</text>

    <path d="M 100 392 L 200 364 L 300 340 L 400 332" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <circle cx="100" cy="392" r="5" fill="#f59e0b"/>
    <circle cx="200" cy="364" r="5" fill="#f59e0b"/>
    <circle cx="300" cy="340" r="5" fill="#f59e0b"/>
    <circle cx="400" cy="332" r="5" fill="#f59e0b"/>

    <path d="M 400 332 L 500 328 L 600 328 L 680 324" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="500" cy="328" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="600" cy="328" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="680" cy="324" r="5" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>

    <text x="100" y="384" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">32</text>
    <text x="200" y="356" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">39</text>
    <text x="300" y="332" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~45</text>
    <text x="400" y="324" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~47</text>
    <text x="500" y="320" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~48</text>
    <text x="600" y="320" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~48</text>
    <text x="680" y="316" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#b97606" text-anchor="middle">~49</text>

    <line x1="100" y1="248" x2="100" y2="392" stroke="#ef5350" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="65" y="309" width="50" height="22" rx="11" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="90" y="324" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#c73e3a" text-anchor="middle">36 Pkt.</text>

    <line x1="400" y1="128" x2="400" y2="332" stroke="#ef5350" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="408" y="219" width="50" height="22" rx="11" fill="#fce9e8" stroke="#ef5350" stroke-width="0.5"/>
    <text x="433" y="234" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#c73e3a" text-anchor="middle">41 Pkt.</text>

    <line x1="680" y1="100" x2="680" y2="324" stroke="#c73e3a" stroke-width="2" stroke-dasharray="2 2"/>
    <rect x="645" y="205" width="60" height="22" rx="11" fill="#c73e3a" stroke="#c73e3a" stroke-width="0.5"/>
    <text x="675" y="220" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#fff" text-anchor="middle">46+ Pkt.</text>

    <rect x="100" y="468" width="14" height="14" rx="2" fill="#5b4fe9"/>
    <text x="122" y="480" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">Kommerzielle Top-LLMs (GPT-4o → GPT-5, Claude 3.5/4 Sonnet u. a.)</text>

    <rect x="100" y="492" width="14" height="14" rx="2" fill="#f59e0b"/>
    <text x="122" y="504" font-family="Inter, sans-serif" font-size="12" fill="#0f1130">sLLM-Eigenbetrieb, unteres Segment 7–8B (Llama 3/3.1/3.3 8B, Qwen 2.5 7B)</text>

    <line x1="100" y1="522" x2="120" y2="522" stroke="#5b4fe9" stroke-width="2.5" stroke-dasharray="5 4"/>
    <text x="125" y="526" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">Gestrichelte Linie = trendbasierte Prognose für die nächsten 3 Jahre</text>

    <text x="60" y="554" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">※ Lücke wächst klar: 36 Pkt. → 41 Pkt. → 46+ Pkt. 7–8B-Modelle nähern sich durch Größenbeschränkung einer Sättigungsgrenze.</text>
    <text x="60" y="572" font-family="Inter, sans-serif" font-size="11" fill="#6b7280">※ Inference-Time-Scaling (o1/extended thinking) beschleunigt den Anstieg kommerzieller Modelle. Werte ab 2026 sind Schätzungen.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 8px;">Abbildung 2. MMLU-Pro-Benchmark: Die Leistungslücke wächst kontinuierlich</figcaption>
</figure>

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

<div class="takeaways">
  <div class="takeaways__label">Eignungs-Checkliste: sLLM-Eigenbetrieb</div>
  <ul>
    <li>Ist ein Budget von mindestens 1,4 Mio. EUR TCO über fünf Jahre genehmigt und tragbar?</li>
    <li>Können mindestens zwei dedizierte KI/MLOps-Stellen dauerhaft besetzt werden?</li>
    <li>Wurde in einem PoC nachgewiesen, dass der sLLM in der eigenen Domäne ausreichend performt?</li>
    <li>Ist der Aufwand für Modellwechsel alle ein bis zwei Jahre organisatorisch und finanziell plan- und tragbar?</li>
    <li>Ist die Nutzung externer KI-Dienste durch Regulierung, Gesetz oder bindende interne Richtlinie ausgeschlossen?</li>
    <li>Ist das KI-Modell selbst ein langfristiges strategisches Asset der Organisation?</li>
    <li>Wurden Alternativen (Gateway-Ansatz, LLM Capsule, DLP-Ebene) objektiv verglichen?</li>
  </ul>
</div>

<p>sLLM-Eigenbetrieb ist keine leichte Entscheidung. Sie binden damit erhebliche Ressourcen für fünf und mehr Jahre. Eine sorgfältige Prüfung, die alle Kostendimensionen, die Leistungsrealität und die Betriebslast berücksichtigt, ist die Mindestanforderung, bevor eine solche Verpflichtung eingegangen wird.</p>

<h2>Häufig gestellte Fragen</h2>

<h3>Reduzieren kleinere Modelle (7B) die Kosten wesentlich?</h3>
<p>Bei der GPU-Infrastruktur ja: Für 7B-Modelle reichen ein bis zwei H100-Karten aus, was die Anfangsinvestition deutlich senkt. Die Personalkosten, Energiekosten und der Aufwand für Modellwechsel bleiben jedoch nahezu identisch. Zudem ist die Leistungslücke bei 7B-Modellen gegenüber kommerziellen Spitzenmodellen noch größer als bei 32B-Modellen — was den Nutzwert entsprechend einschränkt.</p>

<h3>Ist ein Hybrid-Modell aus sLLM und Gateway-Ansatz sinnvoll?</h3>
<p>Grundsätzlich möglich: Bestimmte Abteilungen oder Anwendungsfälle nutzen den sLLM, andere den Gateway-Ansatz. Allerdings bedeutet das, zwei unterschiedliche Betriebsmodelle, Governance-Strukturen und Sicherheitsarchitekturen parallel zu managen — ein erheblicher Mehraufwand. In den meisten Fällen ist es sinnvoller, mit einem Ansatz zu beginnen und bei Bedarf zu erweitern.</p>

<h3>Werden Open-Source-Modelle kommerzielle LLMs nicht bald einholen?</h3>
<p>In bestimmten Benchmarks gibt es temporäre Annäherungen. In der Praxis — insbesondere bei komplexen Schlussfolgerungsaufgaben und der Verarbeitung langer Kontexte — bleibt die Lücke erheblich. Und kommerzielle Modelle stagnieren nicht: Das Inference-Time-Scaling-Paradigma öffnet eine neue Leistungsdimension, die strukturell schwer zugänglich für kleine Modelle ist. Das Muster der vorübergehenden Annäherung gefolgt von erneuter Divergenz wiederholt sich bislang mit jeder Modellgeneration.</p>

<h3>Welches Basismodell sollte für den Eigenbetrieb gewählt werden?</h3>
<p>Aktuell sind Llama-Modelle (Meta), Qwen-Modelle (Alibaba) und für deutschsprachige Anwendungen optimierte Varianten die gängigen Optionen. Die Wahl hängt von Lizenzbedingungen, Leistung auf der eigenen Domäne, Community-Support und konkreten Anwendungsszenarien ab. Unabhängig von der Wahl gilt: In ein bis zwei Jahren wird es bessere Modelle geben. Der Aufwand für den Wechsel muss von Anfang an eingeplant werden.</p>

<h2>Quellen und weiterführende Literatur</h2>
<ul>
  <li>Wang et al., "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark", 2024</li>
  <li>Hugging Face Open LLM Leaderboard, MMLU-Pro-Benchmark (huggingface.co/spaces/open-llm-leaderboard)</li>
  <li>Kaplan et al., "Scaling Laws for Neural Language Models", 2020</li>
  <li>Hoffmann et al., "Training Compute-Optimal Large Language Models" (Chinchilla), 2022</li>
  <li>Bundesamt für Sicherheit in der Informationstechnik (BSI), C5-Anforderungskatalog (Cloud Computing Compliance Criteria Catalogue), aktuelle Fassung</li>
  <li>Europäische Kommission, Verordnung (EU) 2024/1689 — EU AI Act, 2024</li>
</ul>

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
