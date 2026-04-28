# Architecture — Deutsche Übersetzung


## Section01_Hero


AI Enablement
AI Enablement

Architecture
Architektur

for Enterprise AI
für KI im Unternehmen

LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.
LLM Capsule ist ein AI Enablement Data Layer und Plugin für den sicheren KI-Einsatz im Unternehmen. Die Lösung sitzt zwischen unternehmensinternen Datensystemen und externen KI-Diensten. Daten werden bei der Übertragung geschützt, während die volle Leistungsfähigkeit der KI in jedem Workflow nutzbar bleibt.

LLM Capsule
LLM Capsule

## Section02_ArchitectureOverview


Architecture
Architektur

Overview
Übersicht

LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.
LLM Capsule arbeitet als KI-Enablement-Datenschicht. Sensible Unternehmensdaten werden lokal kapsuliert. Nur geschützte Repräsentationen werden an externe KI-Dienste übermittelt. KI-Ergebnisse werden innerhalb der Unternehmensumgebung automatisch mit Originaldaten angereichert. So lässt sich KI sicher und skalierbar einführen.

LLM Capsule
LLM Capsule

## Section03_ArchitectureComponents


Architecture
Architektur

Components
Komponenten

Encapsulation Engine
Kapsulierungsmodul

Local Encapsulation Engine
Lokales Kapsulierungsmodul

The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.
Das Kapsulierungsmodul arbeitet vollständig innerhalb der Unternehmensumgebung. Es erkennt sensible Elemente durch kontextbezogene Datenkontrolle, ersetzt sie durch strukturerhaltende Repräsentationen und speichert die Zuordnung lokal. Die Zuordnungstabelle verlässt zu keinem Zeitpunkt die Unternehmensgrenzen.

Policy Control
Richtlinienkontrolle

Policy Control Layer
Richtlinienkontrollschicht

Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.
Die Unternehmenskontextkontrolle ermöglicht Sensibilitätsrichtlinien über die Standard-PII-Erkennung hinaus. Die Klassifizierung passt sich an Dokumenttyp, Abteilung, Workflow-Kontext und regulatorische Anforderungen an. Administratoren konfigurieren die Richtlinien über die Verwaltungskonsole.

Capsule Transmission
Kapselübertragung

Outbound Capsule Transmission
Ausgehende Kapselübertragung

Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.
Nur kapsulierte Dokumente passieren die Vertrauensgrenze. Der KI-Anbieter erhält strukturell vollständige Dokumente mit geschützten Werten — nutzbar für die KI-Verarbeitung, aber für den empfangenden Dienst nicht entschlüsselbar. Es findet keine Offenlegung sensibler Originaldaten statt.

Restoration Engine
Wiederherstellungsmodul

Local Restoration Engine
Lokales Wiederherstellungsmodul

After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.
Nach Abschluss der KI-Verarbeitung wendet das Wiederherstellungsmodul die lokal gespeicherte Zuordnung auf die KI-Ergebnisse an. Originalnamen, Zahlen, Datumsangaben und Referenzen werden automatisch wiederhergestellt. Die angereicherten Ergebnisse sind direkt in Unternehmens-Workflows einsetzbar.

Audit & Compliance
Audit und Compliance

Audit & Compliance Layer
Audit-und-Compliance-Schicht

Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.
Jedes Kapsulierungs- und Wiederherstellungsereignis wird mit vollständigen Prüfpfaden protokolliert. Unternehmen können nachvollziehen, welche Daten wann, von wem und durch welchen KI-Dienst verarbeitet wurden. Die Audit-Daten unterstützen die KI-Governance und die Erfüllung regulatorischer Anforderungen gemäss DSGVO (GDPR), BSI C5 und EU AI Act.

## Section04_DeploymentOptions


Deployment
Bereitstellungs-

Options
optionen

LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.
LLM Capsule ermöglicht KI überall dort, wo Ihre Infrastruktur betrieben wird. Die Kapsulierungs- und Wiederherstellungslogik ist unabhängig vom Bereitstellungsmodell identisch. So lässt sich KI in jeder Umgebung einsetzen.

LLM Capsule
LLM Capsule

On-Premise
On-Premise

Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.
Vollständiger Betrieb innerhalb des Unternehmensrechenzentrums. Sensible Daten passieren keine Netzwerkgrenze. Der Betrieb erfolgt innerhalb der bestehenden Sicherheitsperimeter.

Air-Gapped
Air-Gapped

For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.
Für hochsensible Umgebungen. Kapsulierung im isolierten Netzwerk, kontrollierte Übertragung in die KI-verbundene Umgebung, Rückführung der Ergebnisse zur lokalen Wiederherstellung.

Cloud (AWS Marketplace)
Cloud (AWS Marketplace)

Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.
Betrieb innerhalb des AWS-Kontos oder der VPC des Unternehmens. Die Daten verbleiben innerhalb der Cloud-Grenze des Unternehmens. Verfügbar auf dem AWS Marketplace für eine vereinfachte Beschaffung.

View on AWS Marketplace
Auf dem AWS Marketplace ansehen

Hybrid
Hybrid

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.
Unterschiedliche Dokumenttypen oder Sensibilitätsstufen werden innerhalb einer einzigen LLM Capsule-Instanz über verschiedene Bereitstellungsmodelle geroutet. Maximale Flexibilität.

Embedded Integration
Eingebettete Integration

LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.
LLM Capsule wird in bestehende Unternehmensanwendungen und -plattformen eingebettet und arbeitet als KI-Enablement-Datenschicht innerhalb des Software-Stacks.

Slack App
Slack-App

Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.
LLM Capsule direkt in Slack nutzen. Sensible Nachrichten und Dokumente werden vor dem Versand an KI-Assistenten kapsuliert. Die Ergebnisse werden im Kanal wiederhergestellt.

## Section05_CTA


See how
Wir analysieren Ihre Anforderungen und demonstrieren

LLM Capsule
LLM Capsule

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
anhand Ihrer eigenen Dokumente, Bereitstellungsanforderungen und Bewertungskriterien.

Request a Demo
Demo anfordern

Available on AWS Marketplace
Verfügbar auf dem AWS Marketplace
