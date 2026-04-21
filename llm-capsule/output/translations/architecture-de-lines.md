# Architecture — Deutsche Übersetzung


## Section01_Hero


AI Enablement
AI Enablement

Architecture
Architektur

for Enterprise AI
für Unternehmens-KI

LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.
LLM Capsule ist ein AI Enablement Data Layer und Plugin, das es Unternehmen ermöglicht, jedes KI-Modell sicher einzuführen. Es sitzt zwischen Unternehmensdatensystemen und externen KI-Diensten — schützt Daten bei der Übertragung und erschließt gleichzeitig das volle Potenzial von KI in jedem Workflow.

LLM Capsule
LLM Capsule

## Section02_ArchitectureOverview


Architecture
Architektur

Overview
Übersicht

LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.
LLM Capsule fungiert als KI-Datenschicht, die sensible Unternehmensdaten lokal kapselt, nur geschützte Darstellungen an externe KI-Dienste überträgt und KI-Ergebnisse innerhalb der Unternehmensumgebung wiederherstellt - und so eine sichere KI-Einführung im großen Maßstab ermöglicht.

LLM Capsule
LLM Capsule

## Section03_ArchitectureComponents


Architecture
Architektur

Components
Komponenten

Encapsulation Engine
Kapselungs-Engine

Local Encapsulation Engine
Lokale Kapselungs-Engine

The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.
Das Kapselungsmodul arbeitet vollständig innerhalb der Unternehmensumgebung. Es erkennt sensible Elemente durch kontextbewusste Datenkontrolle, ersetzt sie durch strukturerhaltende Darstellungen und speichert die Zuordnung lokal. Die Zuordnung verlässt nie die Unternehmensgrenzen.

Policy Control
Richtlinienkontrolle

Policy Control Layer
Richtlinienkontrollschicht

Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.
Die Kontextsteuerung im Unternehmen ermöglicht es Unternehmen, Richtlinien für die Sensibilität zu definieren, die über die standardmäßige PII-Erkennung hinausgehen. Die Sensibilitätsklassifizierung passt sich an den Dokumententyp, die Abteilung, den Workflow-Kontext und die gesetzlichen Anforderungen an. Administratoren konfigurieren Richtlinien über die Verwaltungskonsole.

Capsule Transmission
Kapselübertragung

Outbound Capsule Transmission
Ausgehende Kapselübertragung

Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.
Nur gekapselte Dokumente überschreiten die Vertrauensgrenze. Der KI-Anbieter erhält strukturell vollständige Dokumente mit geschützten Werten - nützlich für die KI-Verarbeitung, aber undurchsichtig für den empfangenden Dienst. Keine Offenlegung von sensiblen Originaldaten.

Restoration Engine
Wiederherstellungs-Engine

Local Restoration Engine
Lokale Wiederherstellungs-Engine

After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.
Nach Abschluss der KI-Verarbeitung wendet die Wiederherstellungs-Engine die lokal gespeicherte Zuordnung auf die KI-Ausgaben an. Ursprüngliche Namen, Zahlen, Daten und Referenzen werden automatisch wiederhergestellt. Die wiederhergestellten Ausgaben sind direkt in Unternehmens-Workflows einsetzbar.

Audit & Compliance
Audit & Compliance

Audit & Compliance Layer
Audit-&-Compliance-Schicht

Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.
Jedes Kapselungs- und Wiederherstellungsereignis wird mit vollständigen Prüfpfaden protokolliert. Unternehmen können nachvollziehen, welche Daten wann und von wem geschützt wurden und welche KI-Dienste sie verarbeitet haben. Audit-Daten unterstützen die KI-Governance im Unternehmen und die Einhaltung gesetzlicher Vorschriften.

## Section04_DeploymentOptions


Deployment
Einsatz

Options
Optionen

LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.
LLM Capsule ermöglicht KI überall dort, wo Ihre Infrastruktur läuft. Die Kapselungs- und Wiederherstellungslogik ist unabhängig vom Bereitstellungsmodell identisch, sodass Sie KI in jeder Umgebung einsetzen können.

LLM Capsule
LLM Capsule

On-Premise
Vor-Ort

Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.
Vollständiger Einsatz innerhalb des Unternehmensrechenzentrums. Sensible Daten überqueren niemals eine Netzwerkgrenze. Funktioniert innerhalb der bestehenden Sicherheitsgrenzen.

Air-Gapped
Air-Gapped

For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.
Für hochsensible Umgebungen. Kapselung im isolierten Netz, kontrollierte Übertragung in eine KI-verbundene Umgebung, Rückübertragung der Ergebnisse zur lokalen Wiederherstellung.

Cloud (AWS Marketplace)
Cloud (AWS Marketplace)

Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.
Wird innerhalb des AWS-Kontos oder der VPC des Unternehmens ausgeführt. Die Daten bleiben innerhalb der Cloud-Grenze des Unternehmens. Verfügbar im AWS Marketplace für eine optimierte Beschaffung.

View on AWS Marketplace
Ansicht auf AWS Marketplace

Hybrid
Hybrid

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.
Unterschiedliche Dokumenttypen oder Sensibilitätsstufen durchlaufen unterschiedliche Bereitstellungsmodi innerhalb einer einzigen LLM Capsule-Instanz. Maximale Flexibilität.

Embedded Integration
Eingebettete Integration

LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.
LLM Capsule ist in bestehende Unternehmensanwendungen und -plattformen eingebettet und dient als KI-fähige Datenschicht innerhalb Ihres Software-Stacks.

Slack App
Slack-App

Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.
Verwenden Sie LLM Capsule direkt in Slack. Verkapseln Sie sensible Nachrichten und Dokumente, bevor Sie sie an KI-Assistenten senden, und stellen Sie die Ergebnisse im Kanal wieder her.

## Section05_CTA


See how
Erfahren Sie, wie

LLM Capsule
LLM Capsule

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
Bringen Sie Ihre Dokumente, Einsatzbeschränkungen und Bewertungskriterien mit. Wir demonstrieren anhand Ihrer tatsächlichen Arbeitsabläufe.

Request a Demo
Demo anfordern

Available on AWS Marketplace
Verfügbar auf AWS Marketplace
