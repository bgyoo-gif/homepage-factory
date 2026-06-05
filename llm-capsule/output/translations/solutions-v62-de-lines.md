# solutions-v62 — Deutsche Übersetzung (v6.2, localize)

---

## Section 01: Hero

Solutions
Lösungen

Make regulated workflows 
KI-gestützte Workflows in regulierten Branchen —

usable with AI
ohne Offenlegung vertraulicher Daten

Six industries. Real production workflows. Real customers. One context-preserving data layer for AI that removes the data exposure barrier blocking enterprise AI adoption — so AI runs on real data, inside your environment, under your governance.
Sechs regulierte Branchen. Reale Produktivworkflows. Nachgewiesene Kundeneinsätze. Eine Datenschicht, die verhindert, dass vertrauliche Daten bei der KI-Verarbeitung nach außen gelangen — KI läuft auf echten Daten, in Ihrer Umgebung, unter Ihrer Kontrolle.

6
6

Regulated industries
Regulierte Branchen

10+
10+

Production customers
Produktivkunden

30 min
30 Min.

Time to first evaluation
Zeit bis zur ersten Evaluierung

0
0

Raw data to external LLM
Rohdaten an externe LLMs

---

## Section 02: ProofBand

Real production deployments — across telecom, healthcare, finance, defense, OT, and legal
Produktiveinsätze in Telekommunikation, Gesundheitswesen, Finanzwesen, Verteidigung, OT und Rechtsbranche

SK Telecom
SK Telecom

Deutsche Telekom
Deutsche Telekom

Claroty
Claroty

EUMC
EUMC

Kyobo
Kyobo

DB Insurance
DB Insurance

IBK
IBK

Shin&Kim
Shin&Kim

Ministry of National Defense (KR)
Verteidigungsministerium (KR)

NAVER Cloud
NAVER Cloud

---

## Section 03: Telecom

Telecom
Telekommunikation

AI in the NOC, OSS/BSS, and customer ops — without exposing subscribers
KI im NOC, OSS/BSS und Kundenbetrieb — ohne Offenlegung von Teilnehmerdaten

Network operations carry subscriber identities, device IDs, circuit IDs, IP ranges, and configurations. PII guardrails miss this; sovereign data rules block raw transmission. LLM Capsule encapsulates locally and routes capsules to approved external LLMs (Path A) or on-prem models (Path B for stricter workflows).
Netzwerkbetrieb umfasst Teilnehmeridentitäten, Geräte-IDs, Circuit-IDs, IP-Bereiche und Konfigurationsdaten. Klassische PII-Schutzmaßnahmen greifen hier nicht; datenschutzrechtliche Anforderungen blockieren die ungeschützte Übertragung. LLM Capsule kapsuliert die Daten lokal und leitet Kapsel-Darstellungen an zugelassene externe LLMs (Pfad A) oder On-Premise-Modelle (Pfad B für strengere Workflows) weiter.

Without Capsule
Ohne Capsule

NOC AI pilot stalls
KI-Pilot im NOC stagniert

Subscriber IDs, device configs, alarm sequences cannot reach external LLM. Pilot demos on synthetic data, then dies in security review.
Teilnehmer-IDs, Gerätekonfigurationen und Alarmsequenzen dürfen das externe LLM nicht erreichen. Der Pilot läuft auf synthetischen Daten und scheitert anschließend an der Sicherheitsprüfung.

With Capsule
Mit Capsule

RCA + recommendation auto-inserted
RCA und Handlungsempfehlung automatisch eingefügt

Capsule travels; AI generates RCA on protected data; output restored into the original ticket with real subscriber/device/circuit IDs.
Die Kapsel wird übertragen. Die KI erstellt eine Ursachenanalyse auf Basis der geschützten Daten. Das Ergebnis wird mit den tatsächlichen Teilnehmer-, Geräte- und Circuit-IDs im Originalticket wiederhergestellt.

Production Workflows
Produktivworkflows

Incident RCA generation
Automatische Ursachenanalyse bei Incidents

Real-time root cause analysis on production NOC tickets
Echtzeit-Ursachenanalyse auf produktiven NOC-Tickets

Customer impact analysis
Analyse der Kundenauswirkung

SLA risk and enterprise customer impact summarization
Zusammenfassung von SLA-Risiken und Auswirkungen auf Geschäftskunden

Configuration change drafting
Entwurf von Konfigurationsänderungen

Network config diff explanation and approval drafts
Erläuterung von Konfigurationsunterschieden und Entwurf von Freigabedokumenten

Runbook generation
Runbook-Erstellung

Auto-drafting incident-specific runbooks from history
Automatische Erstellung einsatzspezifischer Runbooks auf Basis historischer Daten

Customer Proof
Kundenreferenz

SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12
SK Telecom · Deutsche Telekom T Challenge 2026 — Top 12

Recognized in Data Security & Governance category. NOC RCA generation and customer-impact analysis on real subscriber, network, and configuration data — all encapsulated locally before any LLM call.
Ausgezeichnet in der Kategorie Data Security & Governance. NOC-Ursachenanalyse und Auswirkungsanalyse auf Geschäftskunden auf Basis realer Teilnehmer-, Netzwerk- und Konfigurationsdaten — vollständig lokal kapsuliert, bevor ein LLM-Aufruf erfolgt.

Telecom Industry Visual
Telekommunikation — Branchenvisualisierung

Read: How to deploy AI in a telecom NOC →
Lesen: KI-Einsatz im Telekommunikations-NOC →

---

## Section 04: Healthcare

Healthcare
Gesundheitswesen

AI for clinical workflows — PHI never leaves the hospital network
KI für klinische Workflows — Patientendaten verlassen das Krankenhausnetz nicht

Clinical AI promises 30-50% reduction in documentation burden. But PHI cannot leave the hospital under HIPAA, GDPR, or K-PIPA. PII guardrails miss workflow context, lab sequences, and free-text clinical notes. LLM Capsule encapsulates patient identifiers, MRN, diagnoses, and clinical context locally; restoration happens inside the EHR.
KI verspricht eine Reduktion des Dokumentationsaufwands um 30 bis 50 Prozent. Patientendaten dürfen das Krankenhaus jedoch gemäß DSGVO (GDPR), HIPAA und vergleichbaren Regelungen nicht verlassen. Herkömmliche PII-Schutzmechanismen erfassen keinen Workflow-Kontext, keine Laborsequenzen und keine Freitextnotizen. LLM Capsule kapsuliert Patientenkennungen, MRN, Diagnosen und klinischen Kontext lokal; die Wiederherstellung erfolgt innerhalb des Krankenhausinformationssystems.

Without Capsule
Ohne Capsule

Documentation pilot blocked
Dokumentationspilot blockiert

Privacy officer blocks deployment. Physicians use shadow AI on personal devices; productivity tasted in pilot disappears.
Der Datenschutzbeauftragte blockiert die Einführung. Kliniker weichen auf private Geräte und nicht freigegebene KI-Tools aus; die im Pilot gewonnene Produktivität ist verloren.

With Capsule
Mit Capsule

AI drafts inside Epic / Cerner / HIS
KI erstellt Entwürfe direkt in Epic / Cerner / HIS

PHI encapsulated; AI drafts radiology summaries and discharge notes; outputs auto-restore in the EHR. Audit feeds the privacy office.
Patientendaten werden kapsuliert. Die KI erstellt Radiologiezusammenfassungen und Entlassungsbriefe. Die Ergebnisse werden automatisch im Krankenhausinformationssystem wiederhergestellt. Prüfprotokolle werden dem Datenschutzbeauftragten bereitgestellt.

Production Workflows
Produktivworkflows

Radiology report drafting
Erstellung von Radiologieberichten

AI-drafted impressions from imaging studies + clinical history
KI-gestützte Befundformulierung auf Basis von Bildgebung und klinischer Vorgeschichte

Discharge summary drafting
Erstellung von Entlassungsbriefen

Multi-source summarization across admission, treatment, and follow-up
Mehrstufige Zusammenfassung aus Aufnahme, Behandlung und Nachsorge

Clinical coding assist
Unterstützung bei der klinischen Kodierung

ICD-10 / CPT code suggestion with audit trail
Vorschläge für ICD-10- und CPT-Codes mit nachvollziehbarem Prüfpfad

Care coordination notes
Koordinationsnotizen im Behandlungsteam

Multi-disciplinary handoff drafts with PHI protected
Interdisziplinäre Übergabeentwürfe mit geschützten Patientendaten

Customer Proof
Kundenreferenz

Ewha Womans University Medical Center (EUMC)
Ewha Womans University Medical Center (EUMC)

Clinical workflow summarization with PHI never traversing the EUMC boundary in raw form. Local restoration ensures only authorized hospital systems see original patient identifiers. HIPAA-aligned compliance reporting.
Klinische Workflow-Zusammenfassung, ohne dass Patientendaten die EUMC-Infrastruktur in Rohform verlassen. Die lokale Wiederherstellung stellt sicher, dass nur autorisierte Systeme die ursprünglichen Patientenkennungen einsehen. Compliance-Reporting ist auf HIPAA-Anforderungen ausgerichtet.

Healthcare Industry Visual
Gesundheitswesen — Branchenvisualisierung

Read: How to deploy AI in a hospital →
Lesen: KI-Einsatz im Krankenhaus →

---

## Section 05: Finance

Finance / Insurance
Finanzwesen / Versicherung

AI on real claim, policy, and customer data — under bank-grade governance
KI auf echten Schadenakten, Policendaten und Kundendaten — unter bankenkonformer Governance

Insurance and banking workflows are document-heavy and customer-data-heavy: claim narratives, policy details, KYC records, transaction patterns. Sector regulators (FSC, FSS, BaFin, ACPR) increasingly require demonstrable data governance for AI workflows. LLM Capsule keeps customer data inside while AI processes safe capsules.
Versicherungs- und Bankworkflows sind dokumenten- und kundendatenintensiv: Schadenmeldungen, Policendetails, KYC-Unterlagen, Transaktionsmuster. Aufsichtsbehörden wie BaFin, FSC, FSS und ACPR fordern zunehmend nachweisbare Datenschutzmaßnahmen beim KI-Einsatz. LLM Capsule hält Kundendaten innerhalb der eigenen Infrastruktur, während die KI geschützte Kapseln verarbeitet.

Without Capsule
Ohne Capsule

Claims AI never reaches production
Schadenbearbeitungs-KI gelangt nicht in den Produktivbetrieb

Customer name, policy ID, claim narrative cannot reach external LLM. AI drafts on synthetic data; production deployment fails risk review.
Kundenname, Policen-ID und Schadenbeschreibung dürfen das externe LLM nicht erreichen. KI-Entwürfe auf synthetischen Daten scheitern anschließend an der Risikoprüfung.

With Capsule
Mit Capsule

AI processes claims at production volume
KI verarbeitet Schadenakten im Produktivbetrieb

Capsule + restoration enables real-volume claim classification, fraud signal generation, and underwriting drafts inside the insurer's existing systems.
Kapsulierung und Wiederherstellung ermöglichen Schadenklassifizierung, Betrugssignalermittlung und Zeichnungsentwürfe in den bestehenden Systemen des Versicherers — im tatsächlichen Produktionsvolumen.

Production Workflows
Produktivworkflows

Claim classification & triage
Schadenklassifizierung und Triage

AI-powered intake, severity scoring, fraud signaling
KI-gestützte Erfassung, Schweregradbewertung und Betrugserkennung

Damage assessment
Schadenbewertung

Multi-document assessment with vehicle/property data restored
Mehrdokumentenbewertung mit wiederhergestellten Fahrzeug- und Objektdaten

Underwriting draft
Zeichnungsentwurf

Risk evaluation and premium recommendation drafts
Risikobeurteilung und Entwurf von Prämienempfehlungen

Regulatory submission
Aufsichtsrechtliche Einreichung

Filing draft and compliance review assist
Entwurf von Meldungen und Unterstützung bei der Compliance-Prüfung

Customer Proof
Kundenreferenz

Kyobo · DB Insurance · IBK
Kyobo · DB Insurance · IBK

AI-powered claim and policy workflows on real customer data. No customer data leaves the institution's environment in raw form. Aligned with sector regulator expectations and SOX where applicable.
KI-gestützte Schaden- und Policenworkflows auf realen Kundendaten. Kundendaten verlassen die Unternehmensumgebung nicht in Rohform. Anforderungen der Finanzaufsicht sowie SOX werden berücksichtigt.

Finance Industry Visual
Finanzwesen — Branchenvisualisierung

Read: Pilot to production for regulated AI →
Lesen: Vom Pilot zum Produktivbetrieb bei regulierter KI →

---

## Section 06: Defense

Public Sector / Defense
Öffentlicher Sektor / Verteidigung

AI on classified mission workflows — fully on-prem, zero external transmission
KI für klassifizierte Einsatzworkflows — vollständig On-Premise, keine externe Datenübertragung

Defense, intelligence, and public-sector workflows demand zero external transmission. No external LLM endpoint is acceptable. LLM Capsule's Path B (on-prem local lightweight model) runs entirely inside the command's network — same Capsule instance, same audit framework, no external reach.
Verteidigungs-, Nachrichten- und Behördenworkflows erfordern den vollständigen Verzicht auf externe Datenübertragung. Der Einsatz externer LLM-Endpunkte ist nicht zulässig. Pfad B von LLM Capsule (lokales On-Premise-Modell) läuft vollständig im internen Netz — dieselbe Capsule-Instanz, dasselbe Audit-Framework, keine externe Verbindung.

Without Capsule
Ohne Capsule

AI categorically excluded
KI grundsätzlich ausgeschlossen

External LLM use is not permitted. Mission workflows continue without AI support; productivity gap persists.
Externe LLM-Dienste sind nicht erlaubt. Einsatzworkflows werden ohne KI-Unterstützung durchgeführt; Produktivitätsnachteile bleiben bestehen.

With Capsule
Mit Capsule

AI inside command boundary
KI innerhalb des Kommandonetzes

Quantized on-prem model + Capsule encapsulation + local audit. AI drafts mission briefs, intelligence summaries, and operational reports — entirely within the command.
Quantisiertes On-Premise-Modell, Capsule-Kapsulierung und lokale Auditierung. Die KI erstellt Lageberichte, Erkenntniszusammenfassungen und Einsatzberichte — vollständig innerhalb des Kommandos.

Production Workflows
Produktivworkflows

Mission brief drafting
Erstellung von Lageberichten

AI-drafted operational briefs from multi-source intelligence
KI-gestützte Lageberichte aus mehreren Quellen

Operational report summarization
Zusammenfassung von Einsatzberichten

Multi-format report consolidation and impact synthesis
Konsolidierung mehrstufiger Berichte und Auswirkungsanalyse

Doctrine reference assist
Unterstützung bei Doktrinreferenzen

Doctrine and procedure lookup with classification protection
Abfrage von Doktrin- und Verfahrensdokumenten mit Klassifizierungsschutz

After-action review draft
Entwurf der Nachbetrachtung

Post-operation review with mission identifiers protected
Einsatznachbereitung mit geschützten Einsatzkennungen

Customer Proof
Kundenreferenz

Ministry of National Defense (Korea)
Verteidigungsministerium (Korea)

Mission-grade workflows on Path B (on-prem local) with full audit feed to command-level governance. Mission references, geographic identifiers, and unit data encapsulated; restoration tightly scoped under RBAC.
Einsatzworkflows der höchsten Schutzklasse auf Pfad B (lokal, On-Premise) mit vollständigem Audit-Feed für die Governance auf Kommandobene. Einsatzbezüge, geografische Kennungen und Einheitsdaten werden kapsuliert; die Wiederherstellung ist strikt per RBAC eingeschränkt.

Defense Industry Visual
Verteidigung — Branchenvisualisierung

Read: Sovereign AI architecture →
Lesen: Souveräne KI-Architektur →

---

## Section 07: OT

OT / Industrial Cyber
OT / Industrielle Cybersicherheit

AI in OT environments — without exposing asset identifiers or process data
KI in OT-Umgebungen — ohne Offenlegung von Asset-Kennungen oder Prozessdaten

OT (operational technology) workflows protect mission-critical industrial assets — power, manufacturing, oil & gas, water. PLCs, SCADA tags, asset IDs, and process variables can't leak. LLM Capsule encapsulates OT identifiers locally; AI assists with anomaly explanation, runbook drafting, and incident response.
OT-Workflows schützen betriebskritische Industrieanlagen in den Bereichen Energie, Fertigung, Öl und Gas sowie Wasserversorgung. SPS-Kennungen, SCADA-Tags, Asset-IDs und Prozessvariablen dürfen nicht nach außen gelangen. LLM Capsule kapsuliert OT-Kennungen lokal; die KI unterstützt bei Anomalieerklärungen, Runbook-Entwürfen und der Incident-Response.

Without Capsule
Ohne Capsule

OT teams blocked from AI
OT-Teams ohne KI-Unterstützung

Asset IDs, process variables, vendor configurations cannot reach external LLM. OT operators have no AI support for incident analysis.
Asset-IDs, Prozessvariablen und Herstellerkonfigurationen dürfen das externe LLM nicht erreichen. OT-Betreiber haben keine KI-Unterstützung bei der Störungsanalyse.

With Capsule
Mit Capsule

AI assist for OT incident response
KI-Unterstützung bei OT-Störungsbearbeitung

OT identifiers encapsulated. AI drafts incident analysis, anomaly explanation, and recommended runbook on protected capsule; restored locally for OT operators.
OT-Kennungen werden kapsuliert. Die KI erstellt Störungsanalysen, Anomalieerklärungen und Runbook-Empfehlungen auf Basis der geschützten Kapsel; die Wiederherstellung erfolgt lokal für die OT-Betreiber.

Production Workflows
Produktivworkflows

Anomaly explanation
Anomalieerklärung

AI-generated explanation of detected OT anomalies
KI-generierte Erläuterung erkannter OT-Anomalien

Asset documentation
Asset-Dokumentation

Auto-drafting asset and process documentation
Automatische Erstellung von Asset- und Prozessdokumentation

Vulnerability triage
Schwachstellentriage

Vulnerability impact analysis on protected asset data
Auswirkungsanalyse von Schwachstellen auf Basis geschützter Asset-Daten

Vendor advisory parsing
Auswertung von Herstelleradvisories

Vendor security advisory parsing and impact mapping
Analyse sicherheitsbezogener Herstelleradvisories und Auswirkungszuordnung

Customer Proof
Kundenreferenz

Claroty
Claroty

Industrial cybersecurity workflows with OT asset identifiers and process variables encapsulated locally. AI assists analysts without exposing customer infrastructure data.
Industrielle Cybersicherheitsworkflows mit lokal kapsulierten OT-Asset-Kennungen und Prozessvariablen. Die KI unterstützt Analysten, ohne Infrastrukturdaten der Kunden offenzulegen.

OT Industry Visual
OT — Branchenvisualisierung

Read: AI on network & operations data →
Lesen: KI auf Netzwerk- und Betriebsdaten →

---

## Section 08: Legal

Legal
Rechtsbranche

AI for matter management — privilege preserved, deal terms protected
KI für das Matter Management — Mandatsgeheimnis gewahrt, Vertragsdaten geschützt

Legal workflows process privileged material — contracts, deal terms, M&A code names, litigation strategy, regulatory filings. Privilege preservation is non-negotiable. LLM Capsule encapsulates parties, deal terms, and privileged content locally; AI summarizes and analyzes the protected capsule; restoration happens inside the firm's matter management system.
Rechtliche Workflows verarbeiten vertrauliches Material: Verträge, Transaktionsbedingungen, M&A-Projektnamen, Prozessstrategie und behördliche Einreichungen. Die Wahrung des Mandatsgeheimnisses ist nicht verhandelbar. LLM Capsule kapsuliert Parteien, Vertragsbedingungen und privilegierte Inhalte lokal; die KI analysiert und fasst die geschützte Kapsel zusammen; die Wiederherstellung erfolgt im Matter-Management-System der Kanzlei.

Without Capsule
Ohne Capsule

Outside-counsel AI blocked
KI-Einsatz in der Kanzlei blockiert

Deal terms, party names, code names cannot reach external LLM. Associates fall back to manual review; AI value never materializes.
Transaktionsbedingungen, Parteinamen und Projektkennungen dürfen das externe LLM nicht erreichen. Associates kehren zur manuellen Prüfung zurück; der Mehrwert von KI bleibt unrealisiert.

With Capsule
Mit Capsule

AI assist inside privileged workflow
KI-Unterstützung im mandatsgeschützten Workflow

Parties + terms encapsulated; AI drafts summaries, risk analyses, and clause comparisons; outputs restored in matter management with privilege preserved.
Parteien und Bedingungen werden kapsuliert. Die KI erstellt Zusammenfassungen, Risikoanalysen und Klauselvergleiche. Die Ergebnisse werden im Matter Management unter Wahrung des Mandatsgeheimnisses wiederhergestellt.

Production Workflows
Produktivworkflows

Confidential contract review
Vertrauliche Vertragsprüfung

AI-drafted risk summary across long-form contracts
KI-gestützte Risikozusammenfassung langer Vertragswerke

Due diligence summarization
Due-Diligence-Zusammenfassung

Multi-document M&A diligence with deal data protected
Mehrdokumentenbezogene M&A-Due-Diligence mit geschützten Transaktionsdaten

Regulatory filing draft
Entwurf behördlicher Einreichungen

Filing draft and compliance check with sensitive content masked
Einreichungsentwurf und Compliance-Prüfung mit kapsulierten sensiblen Inhalten

Matter triage
Matter-Triage

Initial matter intake and routing with privileged data inside
Ersterfassung und Weiterleitung von Mandaten mit geschützten Informationen

Customer Proof
Kundenreferenz

Shin&Kim
Shin&Kim

One of Korea's largest law firms. AI assist on privileged matter workflows with parties, deal terms, and code names encapsulated. Privilege preservation under firm governance.
Eine der größten Anwaltskanzleien Koreas. KI-Unterstützung bei privilegierten Matter-Workflows mit kapsulierten Parteien, Transaktionsbedingungen und Projektkennungen. Wahrung des Mandatsgeheimnisses unter der Governance der Kanzlei.

Legal Industry Visual
Rechtsbranche — Branchenvisualisierung

Read: context-preserving data layer for AI (definition) →
Lesen: Kontexterhaltende Datenschicht für KI (Definition) →

---

## Section 09: CTA

Bring your industry, your workflow, your data.
Bringen Sie Ihre Branche, Ihre Workflows und Ihre Daten mit.

We deploy LLM Capsule on a sample workflow in your environment within 30 minutes — and produce an evaluation report on detection accuracy, restoration rate, and policy fit for your industry's regulatory profile.
Wir setzen LLM Capsule innerhalb von 30 Minuten auf einem Beispielworkflow in Ihrer Umgebung auf und erstellen einen Evaluierungsbericht zu Erkennungsgenauigkeit, Wiederherstellungsrate und regulatorischer Eignung für Ihre Branche.

Request an Industry Demo
Demo für Ihre Branche anfordern

View Architecture
Architektur ansehen

View Trust & Compliance
Trust & Compliance ansehen
