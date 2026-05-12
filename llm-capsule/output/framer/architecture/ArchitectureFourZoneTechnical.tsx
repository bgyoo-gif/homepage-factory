// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-architecture-4zone-tsx.py
// To regenerate: python3 scripts/build-architecture-4zone-tsx.py
//
// Self-contained Framer Code Component for the 4-zone technical architecture page.
// Section header + 4 annotation cards exposed as Props (for translation).
// Main diagram preserved as inline HTML in BODY_HTML.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  eyebrow?: string
  sectionTitle?: string
  sectionDescription?: string
  card1Num?: string
  card1Title?: string
  card1Description?: string
  card2Num?: string
  card2Title?: string
  card2Description?: string
  card3Num?: string
  card3Title?: string
  card3Description?: string
  card4Num?: string
  card4Title?: string
  card4Description?: string
}

const BODY_HTML = `<div class="section-soft">
  <div class="section-container">

    <!-- Section header -->
    <!-- SECTION_HEAD_PLACEHOLDER -->

    <!-- Diagram (with corner caption ::before overlay) -->
    <div class="tech-diagram-wrap">
      <div class="canvas">

  <!-- 4 COLUMNS -->
  <div class="columns">

    <!-- ZONE 1 -->
    <div class="col zone-1">
      <div class="col-head">
        <div class="step-row">
          <span class="step-num">01</span>
          <span class="step-title">Source Data</span>
        </div>
        <div class="zone-label">Corporate Internal Network</div>
        <div class="zone-sub">On-prem DB · Enterprise Systems</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">Unstructured</span>
        <div class="db-card-grid">
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB1</div>
            <div class="db-card-sub">Customer Data<br/>Personally Identifiable Info</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB2</div>
            <div class="db-card-sub">Ticket Data<br/>CS Tickets / Status</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB3</div>
            <div class="db-card-sub">Detail Data<br/>Unstructured Claims</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label input">Raw Input Fields</div>
        <div class="block-body">
          <div class="field-list">
            <div class="field-row">
              <span class="field-name">Customer</span>
              <span class="field-input raw">David Lawson</span>
              <span class="field-tag raw">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">Ticket</span>
              <span class="field-input raw">CS-4203</span>
              <span class="field-tag raw">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">Free Text</span>
              <span class="field-input raw">Shipping delayed...</span>
              <span class="field-tag raw">BD</span>
            </div>
          </div>
        </div>
      </div>

      <div class="guardrail">
        <div class="guardrail-x">×</div>
        <div class="guardrail-body">
          <strong>PII guardrails protect fields. Enterprises run on structures.</strong>
          We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.
        </div>
      </div>

      <div class="sub-section">
        <span class="sub-section-tag">Plug-in for AI Teams</span>
      <div class="block">
        <div class="sys-grid">
          <div class="sys-cell"><div class="sys-name">ERP</div><div class="sys-sub">SAP·Oracle</div></div>
          <div class="sys-cell"><div class="sys-name">CRM</div><div class="sys-sub">Salesforce</div></div>
          <div class="sys-cell"><div class="sys-name">RAG</div><div class="sys-sub">Vector DB</div></div>
          <div class="sys-cell"><div class="sys-name">Legacy</div><div class="sys-sub">Oracle</div></div>
          <div class="sys-cell"><div class="sys-name">Ticket</div><div class="sys-sub">Jira·SN</div></div>
          <div class="sys-cell"><div class="sys-name">DMS</div><div class="sys-sub">SharePoint</div></div>
        </div>
        <div class="sys-api">REST · gRPC · JDBC · Graph API</div>
        <div class="zero-mod">
          <span class="zero-mod-icon">✓</span>
          <div class="zero-mod-body">
            <strong>Zero System Modification</strong>
            Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems
          </div>
        </div>
      </div>
      </div><!-- /sub-section -->

      <div class="core-badges">
        <span class="core-badge c2"><span class="core-badge-num">02</span> Enterprise Environment Execution</span>
      </div>
    </div>

    <!-- CONNECTOR 1→2 -->
    <div class="connector flow-1">
      <span class="conn-label">Unstructured Data In</span>
      <span class="conn-arrow">
        <svg viewBox="0 0 12 14" fill="currentColor" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
          <polygon points="3,3 3,11 10,7"/>
        </svg>
      </span>
    </div>

    <!-- ZONE 2 -->
    <div class="col zone-2">
      <div class="col-head">
        <div class="step-row">
          <span class="step-num">02</span>
          <span class="step-title">DP Encapsulation</span>
        </div>
        <div class="zone-label">DMZ — Differential Privacy</div>
        <div class="zone-sub">Same Org · EU Region · GDPR Ready</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">Encapsulation Flow</span>
        <div class="db-card-grid">
          <div class="db-card">
            <svg class="db-card-svg" viewBox="3 2 24 32" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M5 4 H19 L25 10 V32 H5 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M19 4 V10 H25" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <line x1="9" y1="16" x2="21" y2="16" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="9" y1="21" x2="21" y2="21" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="9" y1="26" x2="17" y2="26" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
            </svg>
            <div class="db-card-title">IN</div>
            <div class="db-card-sub">Raw Input<br/>Unstructured Data</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="3 4 24 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M15 6 L25 18 L15 30 L5 18 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M15 12 L21 18 L15 24 L9 18 Z" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">PROCESS</div>
            <div class="db-card-sub">DP Engine<br/>Differential Privacy</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="5 2 20 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <rect x="7" y="4" width="16" height="24" rx="8" stroke="currentColor" stroke-width="1.4"/>
              <rect x="11" y="10" width="8" height="12" rx="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="16" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">OUT</div>
            <div class="db-card-sub">Encapsulated<br/>Token Capsule</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label transform" style="display:flex;flex-wrap:nowrap;align-items:center;gap:6px;min-width:0;">
          <span style="white-space:nowrap;">Encapsulation</span>
          <span style="margin-left:auto;display:inline-flex;align-items:center;gap:3px;font-family:var(--font-mono);font-size:8.5px;font-weight:700;padding:2px 7px;border:1px solid var(--border-strong);border-radius:999px;color:var(--text);letter-spacing:0;background:var(--surface);white-space:nowrap;flex-shrink:0;">✓ Protected</span>
        </div>
        <div class="block-body">
          <div class="field-list" style="margin-bottom:10px;">
            <div class="field-row">
              <span class="field-name">Name</span>
              <span class="field-input token">* * * * * * *</span>
              <span class="field-tag token">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">Champ Id</span>
              <span class="field-input token">CS-* * * *</span>
              <span class="field-tag token">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">Free Text</span>
              <span class="field-input token">[tokenized...]</span>
              <span class="field-tag token">BD</span>
            </div>
          </div>
          <div class="dp-engine" style="background:#FFFFFF;">
            <div class="dp-engine-head">
              <span class="dp-engine-name">DP Engine</span>
              <span class="dp-engine-badge">epsilon-DP Active</span>
            </div>
            <div class="dp-techs">
              <div class="dp-tech-row"><span class="dp-tech-name">Noise Injection (Laplace)</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">k-Anonymity Enforcement</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">Semantic Tokenization</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">Free-Text NER Masking</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="dmz-guarantee">
        <span class="dmz-guarantee-icon">★</span>
        <div class="dmz-guarantee-body">
          <strong>DMZ Guarantee</strong>
          Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>
        </div>
      </div>

      <div class="core-badges">
        <span class="core-badge c1"><span class="core-badge-num">01</span> Structure-Preserving</span>
        <span class="core-badge c5"><span class="core-badge-num">05</span> Zero Exposure &amp; Audit</span>
      </div>
    </div>

    <!-- CONNECTOR 2→3 -->
    <div class="connector flow-2">
      <span class="conn-label">Protected Data Out</span>
      <span class="conn-arrow">
        <svg viewBox="0 0 12 14" fill="currentColor" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
          <polygon points="3,3 3,11 10,7"/>
        </svg>
      </span>
    </div>

    <!-- ZONE 3 -->
    <div class="col zone-3">
      <div class="col-head">
        <div class="step-row">
          <span class="step-num">03</span>
          <span class="step-title">AI Processing</span>
        </div>
        <div class="zone-label">In-House Team</div>
        <div class="zone-sub">Same Org · Anonymized LLM Proxy</div>
      </div>

      <div class="block">
        <div class="block-label transform">LLM Pipeline</div>
        <div class="block-body">
          <div class="proxy-badge">LLM-a-Proxy <span class="proxy-sub">Anonymized Routing</span></div>
          <div class="deploy-grid">
            <div class="path-label path-a">Path A · External</div>
            <span class="deploy-pill">Public cloud</span>
            <span class="deploy-pill">Region-hosted</span>
            <div class="path-label path-b">Path B · On-prem</div>
            <span class="deploy-pill">Private</span>
            <span class="deploy-pill">On-prem</span>
          </div>
          <div class="swap-note">swap any model — capsule contract stays the same</div>
        </div>
      </div>

      <div class="guardrail success">
        <div class="guardrail-x">✓</div>
        <div class="guardrail-body">
          <strong>No Direct Access to Source DB</strong>
          AI teams never touch the source database. They only receive structure-preserved, differentially-private data
        </div>
      </div>

      <div class="block">
        <div class="block-label transform">Privacy Isolation Module</div>
        <div class="pdesc-module">
          <div class="pdesc-module-head">PDESC / ISOLA</div>
          <div class="pdesc-items">
            <div class="pdesc-item">Privacy Descriptor</div>
            <div class="pdesc-item">Isolated Computation Zone</div>
            <div class="pdesc-item">Output De-identification</div>
          </div>
          <div class="pdesc-foot">Re-identification attempts contained · Output validated</div>
        </div>
      </div>

      <div class="block">
        <div class="block-label muted compliance">Compliance</div>
        <div class="compliance-row">
          <span class="compliance-badge" style="background:var(--green-bg);border-color:var(--green);color:var(--green);">EU GDPR</span>
          <span class="compliance-badge" style="background:var(--green-bg);border-color:var(--green);color:var(--green);">EU Region</span>
        </div>
      </div>

      <div class="core-badges">
        <span class="core-badge c1"><span class="core-badge-num">01</span> Structure-Preserving</span>
        <span class="core-badge c5"><span class="core-badge-num">05</span> Zero Exposure &amp; Audit</span>
      </div>
    </div>

    <!-- CONNECTOR 3→4 -->
    <div class="connector flow-3">
      <span class="conn-label">AI Response (tokenized)</span>
      <span class="conn-arrow">
        <svg viewBox="0 0 12 14" fill="currentColor" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
          <polygon points="3,3 3,11 10,7"/>
        </svg>
      </span>
    </div>

    <!-- ZONE 4 -->
    <div class="col zone-4">
      <div class="col-head">
        <div class="step-row">
          <span class="step-num">04</span>
          <span class="step-title">Local Auto Reconstruction</span>
        </div>
        <div class="zone-label">Local — Auto Reconstruction</div>
        <div class="zone-sub">Internal Only · No External Egress</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">Reconstruction Flow</span>
        <div class="db-card-grid">
          <div class="db-card">
            <svg class="db-card-svg" viewBox="1 4 28 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <rect x="3" y="6" width="24" height="24" rx="12" stroke="currentColor" stroke-width="1.4"/>
              <rect x="8" y="12" width="14" height="12" rx="6" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">IN</div>
            <div class="db-card-sub">AI Token<br/>Tokenized Response</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="2 2 28 32" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M15 4 L26 18 L15 32 L4 18 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M15 11 L21 18 L15 25 L9 18 Z" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">PROCESS</div>
            <div class="db-card-sub">Reconstruction<br/>Local Restoration</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="3 4 24 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M5 6 H19 L25 12 V30 H5 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M19 6 V12 H25" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M9 19 L13 23 L21 15" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="db-card-title">OUT</div>
            <div class="db-card-sub">Original Value<br/>Business-Ready</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label transform" style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">
          <span>Token → Original</span>
        </div>
        <div class="block-body">
          <div class="field-list" style="margin-bottom:10px;">
            <div class="field-row">
              <span class="field-name">Customer</span>
              <span class="field-input restore">David Lawson</span>
              <span class="field-tag restore">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">Ticket</span>
              <span class="field-input restore">CS-4203</span>
              <span class="field-tag restore">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">Details</span>
              <span class="field-input restore">Shipping delayed...</span>
              <span class="field-tag restore">BD</span>
            </div>
          </div>
          <div class="recon-engine">
            <div class="recon-engine-head">
              <span class="recon-engine-name">Reconstruction</span>
              <span class="recon-engine-badge">Local Only</span>
            </div>
            <div class="recon-techs">
              <div class="recon-tech-row"><span class="recon-tech-name">Token Map Lookup</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">Original Value Restore</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">Context Re-binding</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">Output Validation</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="local-guarantee">
        <span class="local-guarantee-icon">✓</span>
        <div class="local-guarantee-body">
          <strong>Local Reconstruction Guarantee</strong>
          Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>
        </div>
      </div>

      <div class="block">
        <div class="block-label muted output">Output Properties</div>
        <div class="output-checks">
          <div class="output-check-row">Original Values Restored</div>
          <div class="output-check-row">Zero External Exposure</div>
          <div class="output-check-row">Context Fully Preserved</div>
          <div class="output-check-row">Business-Ready Output</div>
        </div>
      </div>

      <div class="chip-row">
        <span class="chip green">Auto Restore</span>
        <span class="chip green">Local Only</span>
        <span class="chip green">Data Residency</span>
      </div>

      <div class="core-badges">
        <span class="core-badge c3"><span class="core-badge-num">03</span> Business-Ready Reconstruction</span>
        <span class="core-badge c4"><span class="core-badge-num">04</span> Enterprise Context Control</span>
        <span class="core-badge c6"><span class="core-badge-num">06</span> Time-Shifting Policy</span>
      </div>
    </div>

  </div>

  <!-- 6 CORE BAR — 4+2 grouped blocks (responsive across all breakpoints) -->
  <div class="core-bar">
    <div class="section-title">
      <span>6 Core Capabilities</span>
    </div>

    <div class="core-bar-content">

      <!-- Workflow block (01~04) -->
      <div class="core-block core-block--workflow">
        <div class="core-group core-group--workflow">What Makes The Workflow Run</div>
        <div class="core-cells core-cells--4">
          <div class="core-cell c1">
            <span class="core-num">01</span>
            <div class="core-cell-name">Structure-Preserving</div>
            <div class="core-cell-desc">Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.</div>
          </div>
          <div class="core-cell c2">
            <span class="core-num">02</span>
            <div class="core-cell-name">Enterprise Environment Execution</div>
            <div class="core-cell-desc">Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.</div>
          </div>
          <div class="core-cell c3">
            <span class="core-num">03</span>
            <div class="core-cell-name">Business-Ready Reconstruction</div>
            <div class="core-cell-desc">AI output is restored with real values. The result goes straight back to the originating ticket or workflow.</div>
          </div>
          <div class="core-cell c4">
            <span class="core-num">04</span>
            <div class="core-cell-name">Enterprise Context Control</div>
            <div class="core-cell-desc">Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.</div>
          </div>
        </div>
      </div>

      <!-- Approval block (05~06) -->
      <div class="core-block core-block--approval">
        <div class="core-group core-group--approval">What Gets The Approval</div>
        <div class="core-cells core-cells--2">
          <div class="core-cell c5">
            <span class="core-num">05</span>
            <div class="core-cell-name">Zero Exposure &amp; Audit</div>
            <div class="core-cell-desc">Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.</div>
          </div>
          <div class="core-cell c6">
            <span class="core-num">06</span>
            <div class="core-cell-name">Time-Shifting Policy</div>
            <div class="core-cell-desc">Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom strip -->
    <div class="core-bar-strip">01 and 02 lead the conversation. 05 and 06 anchor the approval.</div>
  </div>

      </div><!-- /.canvas -->
    </div><!-- /.tech-diagram-wrap -->

    <!-- Zone annotation cards (homepage exact copy) -->
    <div class="tech-diagram-annotation">
      <article class="annotation-card">
        <div class="annotation-card__num">Zone 1 · Corporate Internal Network</div>
        <h3 class="annotation-card__h">Where the operational systems already live</h3>
        <p class="annotation-card__d">Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">Zone 2 · DMZ — Demilitarized Zone</div>
        <h3 class="annotation-card__h">Where encapsulation happens</h3>
        <p class="annotation-card__d">The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">Zone 3 · In-House Team</div>
        <h3 class="annotation-card__h">Where governance and routing happen</h3>
        <p class="annotation-card__d">Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">Zone 4 · Local — Auto Reconstruction</div>
        <h3 class="annotation-card__h">Where the AI response becomes Business-Ready output</h3>
        <p class="annotation-card__d">The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.</p>
      </article>
    </div>

  </div><!-- /.section-container -->
</div><!-- /.section-soft -->`

const CSS = `* { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    /* ── BASE ─ 3-layer hierarchy ── */
    --bg: #FAFBFC;
    --surface: #FFFFFF;
    --surface-muted: #F9FAFB;
    --border: #E5E7EB;
    --border-strong: #D1D5DB;
    --border-trust: #EF4444;
    --text: #111827;
    --text-muted: #6B7280;
    --text-dim: #9CA3AF;
    --shadow-card: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.06);

    /* ── ZONE/STEP COLORS — monotone (unified gray) ── */
    --step1: #374151;
    --step1-bg: #FFFFFF;
    --step2: #374151;
    --step2-bg: #FFFFFF;
    --step3: #374151;
    --step3-bg: #FFFFFF;
    --step4: #374151;
    --step4-bg: #FFFFFF;

    /* ── CORE CAPABILITY COLORS — unchanged (brand semantic) ── */
    --red: #E5484D;
    --red-bg: #FFF1F2;
    --yellow: #C28A0E;
    --yellow-bg: #FFFBEB;
    --green: #2B8A3E;
    --green-bg: #F0FDF4;
    --blue: #1E6FD9;
    --blue-bg: #EFF6FF;
    --orange: #D9480F;
    --orange-bg: #FFF7ED;

    --mint: #0B3D2E;
    --mint-accent: #4FD1A5;

    /* ── 6 CORE — 2-group palette (Bible v5.0 alignment) ──
       Workflow Run group (01-04) = indigo / Approval group (05-06) = slate.
       Single-cell hue assignment removed to reduce color noise.
       Legacy tokens (c-teal/coral/amber) deprecated — kept for backward compat only. */
    --c-indigo: #5B4FE9;     /* Workflow Run group color */
    --c-indigo-bg: #EEF2FF;
    --c-slate: #64748B;      /* Approval group color */
    --c-slate-bg: #F1F5F9;
    /* DEPRECATED — do not reuse */
    --c-teal: #0EA5A4;
    --c-teal-bg: #E6F7F6;
    --c-coral: #EF5350;
    --c-coral-bg: #FCE9E8;
    --c-amber: #F59E0B;
    --c-amber-bg: #FEF3C7;

    /* CODE block (mono dark) */
    --code-bg: #1F2937;

    --font-sans: 'Inter', 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    /* ── RADIUS ─ Simple: 4/8 ── */
    --r-xs: 4px;
    --r-sm: 6px;
    --r-md: 8px;
    --r-lg: 12px;
  }
  /* SIMPLE: 4/8/12/16/24/32 scale, borders-only */
  body {
    background: #f7f8fb;
    color: var(--text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.005em;
  }

  /* ── HOMEPAGE SECTION PREVIEW WRAP (mirrors Framer s3-section) ─── */
  .section-soft {
    background: #f7f8fb;
    padding: clamp(64px, 8vw, 128px) 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
  }
  .section-soft p { letter-spacing: normal; }
  .section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 80px);
  }
  .section-head {
    text-align: center;
    margin: 0 auto 48px;
  }
  .section-head .eyebrow {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #5b4fe9;
    margin-bottom: 20px;
  }
  .section-head h2 {
    font-size: clamp(24px, 2.8vw, 38px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: #0f1130;
    margin: 0 0 16px;
  }
  .section-head p {
    font-size: clamp(16px, 1.4vw, 18px);
    line-height: 1.6;
    color: #3a3d5e;
    font-weight: 400;
    max-width: 720px;
    margin: 0 auto;
  }

  /* Diagram wrap (light adaptation of homepage tech-diagram-wrap) */
  .tech-diagram-wrap {
    background: #FAFBFC;
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 24px 80px rgba(15,17,48,0.10);
    position: relative;
    padding: 48px 24px 24px;
    display: flex;
    justify-content: center;
  }
  .tech-diagram-wrap::before {
    content: 'TECHNICAL VIEW · ZONE-BASED ARCHITECTURE';
    position: absolute;
    top: 16px;
    left: 24px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: #94A3B8;
    letter-spacing: 0.15em;
    font-weight: 700;
    z-index: 2;
    pointer-events: none;
  }
  .canvas { width: 1200px; }

  /* Zone annotation cards (homepage exact) */
  .tech-diagram-annotation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 32px;
  }
  @media (max-width: 800px) {
    .tech-diagram-annotation { grid-template-columns: 1fr; }
  }
  .annotation-card {
    background: #fff;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    padding: 22px;
  }
  .annotation-card__num {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    color: #3b2fbf;
    letter-spacing: 0.1em;
    margin-bottom: 14px;
  }
  .annotation-card__h {
    font-size: 15px;
    font-weight: 700;
    color: #0f1130;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  .annotation-card__d {
    font-size: 13px;
    color: #3a3d5e;
    line-height: 1.55;
    margin: 0;
  }

  /* 4 COLUMNS — with vertical compact connectors */
  .columns {
    display: grid;
    grid-template-columns: 1fr 32px 1fr 32px 1fr 32px 1fr;
    gap: 0;
    align-items: stretch;
    margin-bottom: 16px;
  }
  .connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 40px 0;
  }
  .connector .conn-label {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    text-align: center;
    line-height: 1.2;
    color: var(--text-muted);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    white-space: nowrap;
  }
  .connector .conn-arrow {
    width: 12px;
    height: 14px;
    color: var(--text-muted);
  }
  .connector .conn-arrow svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  /* Connector — color carried by arrow only; label stays neutral */
  .connector.flow-1 .conn-arrow { color: var(--red); }
  .connector.flow-2 .conn-arrow { color: var(--yellow); }
  .connector.flow-3 .conn-arrow { color: var(--green); }

  /* SUB-SECTION BOX (Story B inside Step 1) — fully wrapped */
  .sub-section {
    margin-top: 4px;
    padding: 18px 12px 12px;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    background: var(--surface-muted);
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }
  .sub-section-tag {
    position: absolute;
    top: -9px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background: var(--surface);
    padding: 1px 8px;
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text);
    border: 1px solid var(--border-strong);
    border-radius: var(--r-xs);
  }
  .col {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-card);
  }
  .col.zone-1,
  .col.zone-2,
  .col.zone-3,
  .col.zone-4 {
    border-color: var(--border);
    background: var(--surface);
  }

  /* HEAD */
  .col-head {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .step-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .step-num {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    width: 22px;
    height: 22px;
    border-radius: var(--r-sm);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }
  .zone-1 .step-num { background: var(--step1); }
  .zone-2 .step-num { background: var(--step2); }
  .zone-3 .step-num { background: var(--step3); }
  .zone-4 .step-num { background: var(--step4); }
  .step-title {
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }
  .zone-label {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  }
  .zone-sub {
    font-size: 11.5px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-weight: 500;
  }

  /* DB CARDS — context strip (no border, just inline tag) */
  .db-group {
    padding: 0;
    margin-top: -6px;
    position: relative;
  }
  .db-group-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
    padding: 0;
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 700;
    color: var(--text-dim);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .db-group-tag::before {
    content: '!';
    width: 9px;
    height: 9px;
    border: 1px solid var(--text-dim);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 800;
    line-height: 1;
  }
  .db-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
  }
  .db-card {
    background: transparent;
    border: none;
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    text-align: center;
    min-width: 0;
  }
  .db-card-svg {
    width: 22px;
    height: 22px;
    opacity: 0.5;
    display: block;
    overflow: visible;
    margin-bottom: 6px;
  }
  .db-card-svg path,
  .db-card-svg rect,
  .db-card-svg ellipse,
  .db-card-svg line,
  .db-card-svg circle {
    vector-effect: non-scaling-stroke;
  }
  .db-card-title {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: 0.04em;
  }
  .db-card-sub {
    font-size: 8.5px;
    color: var(--text-muted);
    line-height: 1.3;
  }
  .db-card-badge {
    display: inline-block;
    margin-top: 1px;
    padding: 1px 5px;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 7.5px;
    font-weight: 600;
    color: var(--text-muted);
    white-space: nowrap;
  }

  /* HERO TEXT — top summary box (text only, no icons) */
  .hero-text {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 14px 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 72px;
  }
  .hero-text .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-muted);
  }
  .hero-text .hero-main {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.2px;
  }
  .hero-text .hero-sub {
    font-size: 10px;
    color: var(--text-muted);
    line-height: 1.4;
  }
  .hero-text .hero-flow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
  }
  .hero-text .hero-flow .arrow { color: var(--text-dim); }
  .hero-text .hero-flow .raw { color: var(--red); }
  .hero-text .hero-flow .token { color: var(--yellow); }
  .hero-text .hero-flow .restored { color: var(--green); }

  /* SECTION BLOCKS — internal hierarchy */
  .block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  /* Wrapped body for primary content */
  .block-body {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 10px 10px 11px;
  }
  /* Stronger primary label */
  .block-label {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text);
  }
  /* Secondary (less prominent) label */
  .block-label.muted {
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.08em;
  }
  .block-label.input::before,
  .block-label.transform::before,
  .block-label.output::before,
  .block-label.processing::before,
  .block-label.systems::before,
  .block-label.compliance::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--text-muted);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* INPUT FIELDS — bordered colored input style (per reference) */
  .field-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .field-row {
    display: grid;
    grid-template-columns: 56px 1fr 22px;
    align-items: center;
    gap: 8px;
  }
  .field-name {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
  }
  .field-input {
    border: 1px solid;
    border-radius: var(--r-xs);
    padding: 5px 9px;
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .field-input.raw     { background: var(--red-bg);    border-color: var(--red);    color: var(--red); }
  .field-input.token   { background: var(--yellow-bg); border-color: var(--yellow); color: var(--yellow); }
  .field-input.restore { background: var(--green-bg);  border-color: var(--green);  color: var(--green); }
  .field-tag {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-align: center;
  }
  .field-tag.raw     { color: var(--red); }
  .field-tag.token   { color: var(--yellow); }
  .field-tag.restore { color: var(--green); }

  /* API ENDPOINT CODE LIST */
  .api-list {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
  }
  .api-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 7px;
    background: #111827;
    border-radius: var(--r-xs);
    font-family: var(--font-mono);
    font-size: 9px;
    color: #E5E7EB;
  }
  .api-method {
    padding: 1px 5px;
    border-radius: 3px;
    font-weight: 800;
    font-size: 8px;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }
  .api-method.post { background: rgba(79, 209, 165, 0.2); color: #4FD1A5; }
  .api-method.get  { background: rgba(96, 165, 250, 0.2); color: #60A5FA; }
  .api-path {
    color: #F3F4F6;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ZERO MOD MESSAGE — aligned with other cards */
  .zero-mod {
    margin-top: 0;
    padding: 10px 12px;
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .zero-mod-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--c-indigo);
    border: none;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 900;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .zero-mod-body {
    font-size: 10.5px;
    line-height: 1.55;
    color: var(--text);
  }
  .zero-mod-body strong {
    display: block;
    color: var(--text);
    font-size: 11.5px;
    font-weight: 800;
    margin-bottom: 3px;
    letter-spacing: -0.15px;
  }

  /* LLM BRANDS — Step 3 pipeline */
  .llm-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .llm-row {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 9px;
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    color: var(--text);
  }
  .llm-row.muted {
    border-style: dashed;
    color: var(--text-muted);
    background: var(--surface-muted);
  }
  .llm-row svg {
    flex-shrink: 0;
    width: 14px;
    height: 14px;
  }

  /* DEPLOYMENT-TYPE PILL GRID (replaces brand-name list) */
  .deploy-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .deploy-pill {
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 5px 10px;
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 700;
    color: var(--text);
    text-align: center;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }
  /* Path A / Path B group labels above deploy pills */
  .path-label {
    grid-column: 1 / -1;
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 2px 0 1px;
    text-align: center;
  }
  .path-label.path-a { color: var(--c-indigo); }
  .path-label.path-b { color: var(--text); margin-top: 6px; }
  .swap-note {
    margin-top: 8px;
    font-size: 9.5px;
    font-style: italic;
    color: var(--text-muted);
    text-align: center;
    line-height: 1.5;
  }

  /* PROXY BADGE — full width to match LLM rows */
  .proxy-badge {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px 11px;
    background: var(--text);
    border: 1px solid var(--text);
    border-radius: var(--r-sm);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 6px;
  }
  .proxy-badge .proxy-sub {
    color: rgba(255,255,255,0.7);
    font-weight: 500;
    font-size: 9px;
    margin-left: auto;
  }

  /* PDESC / ISOLA MODULE */
  .pdesc-module {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 11px 11px 10px;
  }
  .pdesc-module-head {
    font-family: var(--font-mono);
    font-size: 10.5px;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
    letter-spacing: -0.1px;
  }
  .pdesc-items {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .pdesc-item {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    color: var(--text);
    font-weight: 500;
  }
  .pdesc-item::before {
    content: '✓';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--text);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .pdesc-foot {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--border);
    font-size: 9px;
    color: var(--text-muted);
    font-style: italic;
  }

  /* DP ENGINE — Step 2 technique list */
  .dp-engine {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 11px 11px 10px;
  }
  .dp-engine-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 6px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }
  .dp-engine-name {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.2px;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 0;
  }
  .dp-engine-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 7px;
    background: var(--yellow-bg);
    border: 1px solid var(--yellow);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 700;
    color: var(--yellow);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .dp-engine-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--yellow);
    border-radius: 50%;
  }
  .dp-techs {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .dp-tech-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 9.5px;
    color: var(--text);
    font-weight: 500;
  }
  .dp-tech-row::before {
    content: '';
    width: 4px;
    height: 4px;
    background: var(--yellow);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dp-tech-name {
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 600;
  }
  .dp-tech-sub {
    color: var(--text-muted);
    font-size: 9px;
  }

  /* RECONSTRUCTION ENGINE — Step 4, mirror of DP Engine */
  .recon-engine {
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 11px 11px 10px;
  }
  .recon-engine-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 6px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }
  .recon-engine-name {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.2px;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 0;
  }
  .recon-engine-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 7px;
    background: var(--green-bg);
    border: 1px solid var(--green);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 700;
    color: var(--green);
  }
  .recon-engine-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--green);
    border-radius: 50%;
  }
  .recon-techs {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .recon-tech-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 9.5px;
    color: var(--text);
    font-weight: 500;
  }
  .recon-tech-row::before {
    content: '';
    width: 4px;
    height: 4px;
    background: var(--green);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .recon-tech-name {
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 600;
  }

  /* LOCAL GUARANTEE — green accent */
  .local-guarantee {
    margin-top: 6px;
    padding: 9px 11px;
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    display: flex;
    align-items: flex-start;
    gap: 7px;
  }
  .local-guarantee-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--green);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .local-guarantee-body {
    font-size: 10.5px;
    line-height: 1.55;
    color: var(--text);
  }
  .local-guarantee-body strong {
    display: block;
    color: var(--text);
    font-size: 10.5px;
    font-weight: 800;
    margin-bottom: 2px;
    letter-spacing: -0.1px;
  }
  .local-guarantee-body b {
    color: var(--text);
    font-weight: 800;
  }

  /* OUTPUT PROPERTIES — full-row checks (Step 4) */
  .output-checks {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .output-check-row {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 9px;
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    color: var(--text);
  }
  .output-check-row::before {
    content: '✓';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--green);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 900;
    flex-shrink: 0;
  }

  /* DMZ GUARANTEE — like zero-mod but yellow accent */
  .dmz-guarantee {
    margin-top: 6px;
    padding: 9px 11px;
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    display: flex;
    align-items: flex-start;
    gap: 7px;
  }
  .dmz-guarantee-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--yellow);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .dmz-guarantee-body {
    font-size: 10.5px;
    line-height: 1.55;
    color: var(--text);
  }
  .dmz-guarantee-body strong {
    display: block;
    color: var(--text);
    font-size: 10.5px;
    font-weight: 800;
    margin-bottom: 2px;
    letter-spacing: -0.1px;
  }
  .dmz-guarantee-body b {
    color: var(--text);
    font-weight: 800;
  }

  /* TRANSFORM ROWS — before → after */
  .transform-row {
    display: grid;
    grid-template-columns: 1fr 12px 1fr;
    gap: 4px;
    align-items: center;
    margin-bottom: 4px;
  }
  .transform-before, .transform-after {
    padding: 5px 7px;
    border-radius: var(--r-sm);
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 600;
    text-align: center;
    border: 1px solid;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .transform-before {
    background: var(--red-bg);
    border-color: var(--red);
    color: var(--red);
  }
  .transform-after {
    background: var(--yellow-bg);
    border-color: var(--yellow);
    color: var(--yellow);
    border-style: dashed;
  }
  .transform-after.restored {
    background: var(--green-bg);
    border-color: var(--green);
    color: var(--green);
    border-style: solid;
  }
  .transform-arrow {
    color: var(--text-dim);
    font-size: 12px;
    text-align: center;
    font-weight: 700;
  }

  /* TOKEN-ONLY ROW (Zone 3) */
  .token-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 9px;
    background: var(--yellow-bg);
    border: 1px dashed var(--yellow);
    border-radius: var(--r-sm);
    font-size: 10px;
    margin-bottom: 4px;
  }
  .token-row .field-name { color: var(--yellow); }
  .token-row .field-val { color: var(--yellow); }

  /* GUARDRAIL — unified zone hero box (fully neutral surface, signal in icon only) */
  .guardrail {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    padding: 9px 11px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .guardrail-x {
    width: 20px;
    height: 20px;
    background: var(--red);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--r-sm);
    font-weight: 900;
    font-size: 11px;
    flex-shrink: 0;
  }
  .guardrail-body {
    font-size: 10.5px;
    line-height: 1.55;
    font-weight: 500;
    color: var(--text);
  }
  .guardrail-body strong {
    display: block;
    color: var(--text);
    font-size: 10.5px;
    font-weight: 800;
    margin-bottom: 4px;
  }
  .guardrail-body b {
    font-weight: 800;
    color: var(--text);
  }
  .guardrail.success .guardrail-x { background: var(--green); }
  .guardrail.success strong { color: var(--text); }

  /* SYSTEMS GRID */
  .sys-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 4px;
  }
  .sys-cell {
    background: transparent;
    border: none;
    padding: 2px 0;
    text-align: center;
  }
  .sys-name { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: -0.1px; }
  .sys-sub { font-size: 7.5px; color: var(--text-dim); font-family: var(--font-mono); font-weight: 500; margin-top: 1px; }
  .sys-api {
    margin: 0;
    background: transparent;
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: 8.5px;
    text-align: center;
    text-indent: 0.08em;
    border-radius: 0;
    border-top: 1px dashed var(--border);
    padding: 8px 0 8px;
    font-weight: 500;
    letter-spacing: 0.08em;
    border: 1px solid var(--border);
  }

  /* CHECK LIST */
  .check-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .check-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    padding: 5px 8px;
    background: var(--green-bg);
    border: 1px solid var(--green);
    border-radius: var(--r-sm);
    color: var(--green);
    font-weight: 700;
  }
  .check-item::before {
    content: '✓';
    font-weight: 900;
    font-size: 10px;
  }

  /* PDESC mini */
  .pdesc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .pdesc-mini {
    background: var(--surface-muted);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    padding: 7px 8px;
  }
  .pdesc-mini-name {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 800;
    color: var(--mint);
    margin-bottom: 2px;
    letter-spacing: 0.04em;
  }
  .pdesc-mini-desc {
    font-size: 8.5px;
    color: var(--text-muted);
    line-height: 1.4;
    font-weight: 500;
  }

  /* CHIPS */
  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .chip {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    padding: 3px 7px;
    border-radius: var(--r-sm);
    border: 1px solid;
  }
  .chip.green { background: var(--green-bg); color: var(--green); border-color: var(--green); }
  .chip.blue { background: var(--blue-bg); color: var(--blue); border-color: var(--blue); }
  .chip.yellow { background: var(--yellow-bg); color: var(--yellow); border-color: var(--yellow); }

  .compliance-row {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .compliance-badge {
    background: var(--blue-bg);
    border: 1px solid var(--blue);
    color: var(--blue);
    padding: 4px 9px;
    border-radius: var(--r-sm);
    font-size: 9.5px;
    font-weight: 700;
    font-family: var(--font-mono);
  }

  /* ── CORE BADGE GROUP (REQUESTED — badge style) ── */
  .core-badges {
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .core-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 7px 3px 4px;
    border: 1px solid;
    border-radius: 999px;
    font-size: 9.5px;
    font-weight: 700;
  }
  .core-badge .core-badge-num {
    font-family: var(--font-mono);
    font-size: 8.5px;
    font-weight: 800;
    padding: 2px 5px;
    border-radius: 999px;
    color: #fff;
    line-height: 1;
  }
  /* Zone cap badges — neutral outline + group color only on numeric prefix */
  .core-badge.c1,
  .core-badge.c2,
  .core-badge.c3,
  .core-badge.c4 {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
  }
  .core-badge.c1 .core-badge-num,
  .core-badge.c2 .core-badge-num,
  .core-badge.c3 .core-badge-num,
  .core-badge.c4 .core-badge-num { background: var(--c-indigo); }
  .core-badge.c5,
  .core-badge.c6 {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
  }
  .core-badge.c5 .core-badge-num,
  .core-badge.c6 .core-badge-num { background: var(--c-slate); }

  /* 6 CORE BAR — 6 flat cells with 4+2 section grouping bar on top */
  .core-bar {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 20px 22px;
    box-shadow: var(--shadow-card);
  }
  .section-title {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 700;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Core bar content (4+2 block structure) */
  .core-bar-content {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 14px;
  }
  .core-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .core-group {
    padding: 8px 14px;
    border-radius: 8px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.1px;
  }
  .core-group--workflow {
    background: linear-gradient(135deg, #6E5BCB 0%, #5347DE 100%);
  }
  .core-group--approval {
    background: linear-gradient(135deg, #2A2A4A 0%, #1A1F4A 100%);
  }
  .core-cells {
    display: grid;
    gap: 10px;
    flex: 1;
    align-items: stretch;
  }
  .core-cells--4 { grid-template-columns: repeat(4, 1fr); }
  .core-cells--2 { grid-template-columns: repeat(2, 1fr); }
  .core-cells .core-cell {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .core-cells .core-cell .core-cell-name,
  .core-cells .core-cell .core-cell-desc {
    align-self: stretch;
  }
  .core-cell {
    padding: 14px;
    border-radius: var(--r-md);
    border: 1px solid;
    background: var(--surface);
  }
  .core-cell .core-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    height: 18px;
    border-radius: 3px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: #fff;
    font-weight: 800;
    padding: 0 6px;
    margin-bottom: 8px;
  }
  .core-cell-name {
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 4px;
    letter-spacing: -0.2px;
  }
  .core-cell-desc {
    font-size: 10.5px;
    color: var(--text-muted);
    line-height: 1.5;
    font-weight: 500;
  }
  /* 6 Core cells — fully neutral card; group signal carried by num badge only */
  .core-cell.c1,
  .core-cell.c2,
  .core-cell.c3,
  .core-cell.c4,
  .core-cell.c5,
  .core-cell.c6 {
    border: 1px solid var(--border);
    background: var(--surface);
  }
  .core-cell.c1 .core-cell-name,
  .core-cell.c2 .core-cell-name,
  .core-cell.c3 .core-cell-name,
  .core-cell.c4 .core-cell-name,
  .core-cell.c5 .core-cell-name,
  .core-cell.c6 .core-cell-name { color: var(--text); }
  .core-cell.c1 .core-num,
  .core-cell.c2 .core-num,
  .core-cell.c3 .core-num,
  .core-cell.c4 .core-num { background: var(--c-indigo); }
  .core-cell.c5 .core-num,
  .core-cell.c6 .core-num { background: var(--c-slate); }
  /* Bottom strip — "01 and 02 lead..." (subtle caption) */
  .core-bar-strip {
    margin-top: 12px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 20px;
    text-align: center;
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  /* ====================================================
     RESPONSIVE BREAKPOINTS — 1920 / 1440 / 1024 / 768 / 375
     ==================================================== */

  /* 1920+ (default) and 1440: 4-column zones in 1200px canvas */
  /* No override needed — base styles handle this */

  /* ─── 1024px (tablet landscape / small laptop) ─── */
  /* 4 zones → 2×2 grid, connectors repositioned, core 4+2 stacked */
  @media (max-width: 1024px) {
    .canvas { width: 100%; max-width: 960px; }
    .tech-diagram-wrap { padding: 36px 20px 20px; }
    .section-head { margin-bottom: 24px; }
    /* 2x2 zones + connector slots between them */
    .columns {
      grid-template-columns: 1fr 22px 1fr;
      grid-template-rows: auto auto auto;
      column-gap: 8px;
      row-gap: 4px;
    }
    .zone-1 { grid-row: 1; grid-column: 1; }
    .connector.flow-1 { grid-row: 1; grid-column: 2; padding: 0; gap: 6px; }
    .zone-2 { grid-row: 1; grid-column: 3; }
    .connector.flow-2 {
      grid-row: 2;
      grid-column: 1 / -1;
      flex-direction: row;
      gap: 8px;
      padding: 4px 0;
    }
    .connector.flow-2 .conn-label {
      writing-mode: horizontal-tb;
      transform: none;
    }
    .connector.flow-2 .conn-arrow svg {
      transform: rotate(90deg);
    }
    .zone-3 { grid-row: 3; grid-column: 1; }
    .connector.flow-3 { grid-row: 3; grid-column: 2; padding: 0; gap: 6px; }
    .zone-4 { grid-row: 3; grid-column: 3; }
    .col { min-height: auto; padding: 16px; }
    /* Zone footer badges → horizontal row (cards have width to spare) */
    .core-badges {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 6px;
    }
    /* Core: stack workflow above approval, cells--4 = 2x2, cells--2 = 1x2 */
    .core-bar-content { grid-template-columns: 1fr; gap: 16px; }
    .core-cells--4 { grid-template-columns: repeat(2, 1fr); }
    .core-cells--2 { grid-template-columns: repeat(2, 1fr); }
    .tech-diagram-annotation { grid-template-columns: 1fr 1fr; }
    .section-head h2 { font-size: clamp(26px, 3.5vw, 36px); }
    .section-head p { font-size: 15px; }
  }

  /* ─── 768px (tablet portrait / small screen) ─── */
  /* All sections → single column stack */
  @media (max-width: 768px) {
    body { padding: 0; }
    .section-container { padding: 32px 16px; }
    .tech-diagram-wrap { padding: 40px 16px 20px; border-radius: 12px; }
    .section-head { margin-bottom: 36px; }
    .canvas { width: 100%; max-width: 100%; }
    /* Reset 1024 explicit grid placement — stack everything */
    .columns {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 0;
    }
    .zone-1, .zone-2, .zone-3, .zone-4 {
      grid-row: auto;
      grid-column: 1;
    }
    .connector,
    .connector.flow-1,
    .connector.flow-2,
    .connector.flow-3 {
      grid-row: auto;
      grid-column: 1;
      flex-direction: row;
      gap: 10px;
      padding: 14px 0;
    }
    .connector .conn-label,
    .connector.flow-1 .conn-label,
    .connector.flow-3 .conn-label {
      writing-mode: horizontal-tb;
      transform: none;
    }
    .connector .conn-arrow svg,
    .connector.flow-1 .conn-arrow svg,
    .connector.flow-3 .conn-arrow svg {
      transform: rotate(90deg);
    }
    .col { padding: 16px; }
    .core-bar { padding: 16px 14px; }
    .core-bar-content { grid-template-columns: 1fr; gap: 14px; }
    .core-cells--4 { grid-template-columns: repeat(2, 1fr); }
    .core-cells--2 { grid-template-columns: repeat(2, 1fr); }
    .core-group { font-size: 11px; padding: 7px 12px; }
    .tech-diagram-annotation { grid-template-columns: 1fr; gap: 12px; }
    .section-head h2 { font-size: clamp(22px, 5vw, 30px); }
    .section-head p { font-size: 14px; }
    .zone-label { font-size: 15px; }
    .zone-sub { font-size: 11px; }
    .core-bar-strip { font-size: 11px; padding: 10px 14px; }
  }

  /* ─── 480px (mobile) ─── */
  /* Tight padding, compact text, core cells 1 col */
  @media (max-width: 480px) {
    .section-container { padding: 24px 12px; }
    .tech-diagram-wrap { padding: 32px 10px 14px; border-radius: 10px; }
    .section-head { margin-bottom: 28px; }
    .section-head h2 { font-size: 22px; line-height: 1.25; }
    .section-head p { font-size: 13px; }
    .col-head { gap: 4px; }
    .col { padding: 14px; }
    .step-row { gap: 6px; }
    .step-num { font-size: 9px; padding: 2px 5px; }
    .step-title { font-size: 11px; }
    .zone-label { font-size: 14px; line-height: 1.3; }
    .zone-sub { font-size: 10.5px; }
    .core-cells--4 { grid-template-columns: 1fr; gap: 6px; }
    .core-cells--2 { grid-template-columns: 1fr; gap: 6px; }
    .core-cell { padding: 12px; }
    .core-cell-name { font-size: 13px; }
    .core-cell-desc { font-size: 11px; }
    .tech-diagram-annotation { padding: 0; }
    .annotation-card { padding: 14px; }
    .annotation-card__h { font-size: 14px; }
    .annotation-card__d { font-size: 12px; }
    .core-bar-strip { font-size: 10.5px; padding: 10px 12px; line-height: 1.5; }
    /* DB cards may get cramped — keep 3-col but shrink */
    .db-card-grid { gap: 3px; }
    .db-card { padding: 6px 4px; }
    .db-card-title { font-size: 9.5px; }
    .db-card-sub { font-size: 8px; }
  }`

export default function ArchitectureFourZoneTechnical({
  eyebrow = "Technical view · zone-based architecture",
  sectionTitle = "The same architecture, in technical view",
  sectionDescription = "For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.",
  card1Num = "Zone 1 · Corporate Internal Network",
  card1Title = "Where the operational systems already live",
  card1Description = "Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.",
  card2Num = "Zone 2 · DMZ — Demilitarized Zone",
  card2Title = "Where encapsulation happens",
  card2Description = "The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.",
  card3Num = "Zone 3 · In-House Team",
  card3Title = "Where governance and routing happen",
  card3Description = "Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.",
  card4Num = "Zone 4 · Local — Auto Reconstruction",
  card4Title = "Where the AI response becomes Business-Ready output",
  card4Description = "The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.",
}: Props) {
  // Render: replace placeholders in BODY_HTML with current Props values
  let html = BODY_HTML

  const sectionHead = `
    <div class="section-head">
      <div class="eyebrow">${eyebrow}</div>
      <h2>${sectionTitle}</h2>
      <p>${sectionDescription}</p>
    </div>
  `
  html = html.replace("<!-- SECTION_HEAD_PLACEHOLDER -->", sectionHead)

  const annotationCards = `
    <div class="tech-diagram-annotation">
      <article class="annotation-card">
        <div class="annotation-card__num">${card1Num}</div>
        <h3 class="annotation-card__h">${card1Title}</h3>
        <p class="annotation-card__d">${card1Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${card2Num}</div>
        <h3 class="annotation-card__h">${card2Title}</h3>
        <p class="annotation-card__d">${card2Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${card3Num}</div>
        <h3 class="annotation-card__h">${card3Title}</h3>
        <p class="annotation-card__d">${card3Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${card4Num}</div>
        <h3 class="annotation-card__h">${card4Title}</h3>
        <p class="annotation-card__d">${card4Description}</p>
      </article>
    </div>
  `
  html = html.replace("<!-- ANNOTATION_CARDS_PLACEHOLDER -->", annotationCards)

  return (
    <>
      <style dangerouslySetInnerHTML={ { __html: CSS } } />
      <div dangerouslySetInnerHTML={ { __html: html } } />
    </>
  )
}

addPropertyControls(ArchitectureFourZoneTechnical, {
  eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: "Technical view · zone-based architecture" },
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "The same architecture, in technical view" },
  sectionDescription: { type: ControlType.String, title: "Section Description", defaultValue: "For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.", displayTextArea: true },
  card1Num: { type: ControlType.String, title: "Card 1 Num", defaultValue: "Zone 1 · Corporate Internal Network" },
  card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "Where the operational systems already live" },
  card1Description: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.", displayTextArea: true },
  card2Num: { type: ControlType.String, title: "Card 2 Num", defaultValue: "Zone 2 · DMZ — Demilitarized Zone" },
  card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Where encapsulation happens" },
  card2Description: { type: ControlType.String, title: "Card 2 Description", defaultValue: "The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.", displayTextArea: true },
  card3Num: { type: ControlType.String, title: "Card 3 Num", defaultValue: "Zone 3 · In-House Team" },
  card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Where governance and routing happen" },
  card3Description: { type: ControlType.String, title: "Card 3 Description", defaultValue: "Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.", displayTextArea: true },
  card4Num: { type: ControlType.String, title: "Card 4 Num", defaultValue: "Zone 4 · Local — Auto Reconstruction" },
  card4Title: { type: ControlType.String, title: "Card 4 Title", defaultValue: "Where the AI response becomes Business-Ready output" },
  card4Description: { type: ControlType.String, title: "Card 4 Description", defaultValue: "The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.", displayTextArea: true },
})
