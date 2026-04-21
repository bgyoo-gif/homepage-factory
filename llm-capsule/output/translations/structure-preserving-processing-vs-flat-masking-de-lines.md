# Structure-Preserving Processing vs Flat Masking — Deutsche Übersetzung

## Section 01: Hero

Structure-Preserving Processing vs Flat Masking
Strukturerhaltende Verarbeitung vs Flache Maskierung

Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.
Vergleichen Sie strukturerhaltende Verarbeitung mit flacher Maskierung für Unternehmens-KI. Flache Maskierung zerstört die Dokumentenstruktur; Strukturerhaltung bewahrt die Integrität für genaue KI-Ausgaben.

## Section 02: Overview

Flat masking and structure-preserving processing both aim to protect sensitive data before AI processing. They differ fundamentally in how they handle document structure, entity relationships, and semantic context — and this difference determines whether AI outputs are usable.
Flache Maskierung und strukturerhaltende Verarbeitung zielen beide darauf ab, sensible Daten vor der KI-Verarbeitung zu schützen. Sie unterscheiden sich grundlegend darin, wie sie Dokumentenstruktur, Entitätsbeziehungen und semantischen Kontext behandeln — und dieser Unterschied bestimmt, ob KI-Ausgaben nutzbar sind.

## Section 03: How Flat Masking Works

Flat masking scans documents for sensitive patterns and replaces each match with a generic token. The replacement is uniform — every name becomes [NAME], every number becomes [NUMBER], every date becomes [DATE]. The masking engine treats each sensitive value independently, without considering its role in the document's structure.
Flache Maskierung durchsucht Dokumente nach sensiblen Mustern und ersetzt jeden Treffer durch ein generisches Token. Die Ersetzung ist einheitlich — jeder Name wird zu [NAME], jede Zahl zu [NUMBER], jedes Datum zu [DATE]. Die Maskierungs-Engine behandelt jeden sensiblen Wert unabhängig, ohne seine Rolle in der Dokumentenstruktur zu berücksichtigen.

## Section 04: Limitations

Entity collapse. In a multi-party contract, all party names become [NAME]. AI cannot distinguish acquirer from target, lender from borrower, plaintiff from defendant.
Entitätskollaps. In einem Mehrparteienvertrag werden alle Parteinamen zu [NAME]. Die KI kann Erwerber nicht vom Ziel, Kreditgeber nicht vom Kreditnehmer, Kläger nicht vom Beklagten unterscheiden.

Table destruction. Column headers masked as [FIELD] and cell values masked as [VALUE] eliminate the schema information AI needs for accurate extraction.
Tabellenzerstörung. Als [FIELD] maskierte Spaltenüberschriften und als [VALUE] maskierte Zellenwerte eliminieren die Schema-Informationen, die die KI für eine genaue Extraktion benötigt.

Cross-reference breakage. When a document references "see Section 3.2 regarding [NAME]'s obligations," flat masking removes the entity link that gives the reference meaning.
Querverweisbruch. Wenn ein Dokument auf „siehe Abschnitt 3.2 bezüglich der Verpflichtungen von [NAME]" verweist, entfernt die flache Maskierung die Entitätsverknüpfung, die dem Verweis Bedeutung verleiht.

Inconsistent replacement. The same entity may receive different tokens in different document locations, breaking AI's ability to track entities across sections.
Inkonsistente Ersetzung. Dieselbe Entität kann an verschiedenen Stellen im Dokument verschiedene Token erhalten, wodurch die Fähigkeit der KI, Entitäten über Abschnitte hinweg zu verfolgen, zerstört wird.

## Section 05: How LLM Capsule Differs

Structure-preserving processing maintains document integrity during data protection. Entity consistency is enforced across the entire document. Table structures, cross-references, and semantic relationships are preserved. AI receives a structurally complete document that supports accurate processing.
Strukturerhaltende Verarbeitung bewahrt die Dokumentenintegrität während des Datenschutzes. Entitätskonsistenz wird über das gesamte Dokument hinweg durchgesetzt. Tabellenstrukturen, Querverweise und semantische Beziehungen werden erhalten. Die KI erhält ein strukturell vollständiges Dokument, das eine genaue Verarbeitung unterstützt.

AI results are automatically restored locally with original enterprise data. LLM Capsule's AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.
KI-Ergebnisse werden automatisch lokal mit originalen Unternehmensdaten wiederhergestellt. Die KI-Enablement-Datenschicht von LLM Capsule schützt sensible Daten und bewahrt gleichzeitig die Dokumentenstruktur, die die KI für genaue Ausgaben benötigt.

## Section 06: Comparison Table

Entity handling
Entitätsbehandlung

All entities → same token
Alle Entitäten → gleiches Token

Consistent per-entity mapping
Konsistente Pro-Entitäts-Zuordnung

Table structures
Tabellenstrukturen

Destroyed
Zerstört

Preserved
Erhalten

Cross-references
Querverweise

Broken
Gebrochen

Maintained
Beibehalten

Multi-document consistency
Dokumentenübergreifende Konsistenz

AI output accuracy
KI-Ausgabegenauigkeit

Degraded
Verschlechtert

High fidelity
Hohe Wiedergabetreue

Restoration support
Wiederherstellungsunterstützung

## Section 07: Enterprise Workflow Example

Multi-Party Financial Analysis
Mehrparteien-Finanzanalyse

An investment bank analyzes term sheets involving three parties — lead investor, co-investor, and target company. Each term sheet contains overlapping entity names in different roles.
Eine Investmentbank analysiert Term Sheets mit drei Parteien — Hauptinvestor, Co-Investor und Zielunternehmen. Jedes Term Sheet enthält überlappende Entitätsnamen in verschiedenen Rollen.

Flat masking turns all three parties into [NAME], making it impossible for AI to attribute terms to the correct party. Structure-preserving processing assigns consistent, distinct representations to each party, enabling accurate extraction of party-specific terms. Restoration restores real party names in the analysis output.
Flache Maskierung verwandelt alle drei Parteien in [NAME], was es der KI unmöglich macht, Bedingungen der richtigen Partei zuzuordnen. Strukturerhaltende Verarbeitung weist jeder Partei konsistente, unterscheidbare Repräsentationen zu und ermöglicht die genaue Extraktion parteispezifischer Bedingungen. Die Wiederherstellung stellt echte Parteinamen in der Analyseausgabe wieder her.

## Section 08: FAQ

What is the main difference between flat masking and structure-preserving processing?
Was ist der Hauptunterschied zwischen flacher Maskierung und strukturerhaltender Verarbeitung?

Flat masking treats every sensitive value independently, collapsing entity relationships and document structure. Structure-preserving processing maintains entity consistency, table schemas, and semantic relationships throughout the document.
Flache Maskierung behandelt jeden sensiblen Wert unabhängig und zerstört dabei Entitätsbeziehungen und Dokumentenstruktur. Strukturerhaltende Verarbeitung bewahrt Entitätskonsistenz, Tabellenschemata und semantische Beziehungen im gesamten Dokument.

## Section 09: CTA Band

See how LLM Capsule works with your data
Erleben Sie, wie LLM Capsule mit Ihren Daten arbeitet

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
Bringen Sie Ihre Dokumente, Bereitstellungsanforderungen und Bewertungskriterien mit. Wir demonstrieren anhand Ihrer tatsächlichen Workflows.

Request a Demo
Demo anfordern

AWS Marketplace
AWS Marketplace
