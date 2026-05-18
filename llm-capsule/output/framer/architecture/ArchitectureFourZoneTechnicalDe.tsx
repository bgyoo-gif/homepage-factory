// Locale variant: German defaults pre-filled from architecture-4zone-technical-de-lines.md.
// Generator: scripts/generate-locale-variant-tsx.py
//

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
  step1Title?: string
  step2Title?: string
  step3Title?: string
  step4Title?: string
  z1Label?: string
  z1Sub?: string
  z2Label?: string
  z2Sub?: string
  z3Label?: string
  z3Sub?: string
  z4Label?: string
  z4Sub?: string
  conn1Label?: string
  conn2Label?: string
  conn3Label?: string
  z1GroupTag?: string
  z1Db1Sub?: string
  z1Db2Sub?: string
  z1Db3Sub?: string
  z1FieldsLabel?: string
  z1F1Name?: string
  z1F2Name?: string
  z1F2NameMid?: string
  z1GuardStrong?: string
  z1GuardBody?: string
  z1PluginTag?: string
  z1Sys1Sub?: string
  z1Sys2Sub?: string
  z1Sys3Sub?: string
  z1Sys4Sub?: string
  z1Sys5Sub?: string
  z1Sys6Sub?: string
  z1Sys1Name?: string
  z1Sys2Name?: string
  z1Sys3Name?: string
  z1Sys4Name?: string
  z1Sys5Name?: string
  z1Sys6Name?: string
  z1SysApi?: string
  z1ZeroModStrong?: string
  z1ZeroModBody?: string
  z2GroupTag?: string
  z2InSub?: string
  z2ProcessSub?: string
  z2OutSub?: string
  z2BlockLabel?: string
  z2ProtectedBadge?: string
  z2F1Name?: string
  z2F2Name?: string
  z2F3Name?: string
  z2DpEngineName?: string
  z2DpEngineBadge?: string
  z2DpTech1?: string
  z2DpTech2?: string
  z2DpTech3?: string
  z2DpTech4?: string
  z2DmzStrong?: string
  z2DmzBody?: string
  z3PipelineLabel?: string
  z3ProxyBadge?: string
  z3ProxySub?: string
  z3PathA?: string
  z3PathB?: string
  z3DeployA1?: string
  z3DeployA2?: string
  z3DeployB1?: string
  z3DeployB2?: string
  z3SwapNote?: string
  z3GuardStrong?: string
  z3GuardBody?: string
  z3IsoLabel?: string
  z3PdescHead?: string
  z3PdescItem1?: string
  z3PdescItem2?: string
  z3PdescItem3?: string
  z3PdescFoot?: string
  z3ComplianceLabel?: string
  z3Compliance1?: string
  z3Compliance2?: string
  z4GroupTag?: string
  z4InSub?: string
  z4ProcessSub?: string
  z4OutSub?: string
  z4BlockLabel?: string
  z4F1Name?: string
  z4F2Name?: string
  z4F3Name?: string
  z4ReconName?: string
  z4ReconBadge?: string
  z4ReconTech1?: string
  z4ReconTech2?: string
  z4ReconTech3?: string
  z4ReconTech4?: string
  z4LocalStrong?: string
  z4LocalBody?: string
  z4OutputLabel?: string
  z4OutCheck1?: string
  z4OutCheck2?: string
  z4OutCheck3?: string
  z4OutCheck4?: string
  z4Chip1?: string
  z4Chip2?: string
  z4Chip3?: string
  coreTitle?: string
  coreWorkflowGroup?: string
  coreApprovalGroup?: string
  core1Name?: string
  core1Desc?: string
  core2Name?: string
  core2Desc?: string
  core3Name?: string
  core3Desc?: string
  core4Name?: string
  core4Desc?: string
  core5Name?: string
  core5Desc?: string
  core6Name?: string
  core6Desc?: string
  coreStrip?: string
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
          <span class="step-title">{{__P_step1Title__}}</span>
        </div>
        <div class="zone-label">{{__P_z1Label__}}</div>
        <div class="zone-sub">{{__P_z1Sub__}}</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">{{__P_z1GroupTag__}}</span>
        <div class="db-card-grid">
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB1</div>
            <div class="db-card-sub">{{__P_z1Db1Sub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB2</div>
            <div class="db-card-sub">{{__P_z1Db2Sub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="0 0 30 36" fill="none">
              <ellipse cx="15" cy="6" rx="13" ry="4" stroke="currentColor" stroke-width="1.2"/>
              <path d="M2 6 V26 C2 28.2 7.8 30 15 30 C22.2 30 28 28.2 28 26 V6" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <ellipse cx="15" cy="14" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <ellipse cx="15" cy="22" rx="13" ry="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
            </svg>
            <div class="db-card-title">DB3</div>
            <div class="db-card-sub">{{__P_z1Db3Sub__}}</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label input">{{__P_z1FieldsLabel__}}</div>
        <div class="block-body">
          <div class="field-list">
            <div class="field-row">
              <span class="field-name">{{__P_z1F1Name__}}</span>
              <span class="field-input raw">David Lawson</span>
              <span class="field-tag raw">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z1F2NameMid__}}</span>
              <span class="field-input raw">CS-4203</span>
              <span class="field-tag raw">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z1F2Name__}}</span>
              <span class="field-input raw">Shipping delayed...</span>
              <span class="field-tag raw">BD</span>
            </div>
          </div>
        </div>
      </div>

      <div class="guardrail">
        <div class="guardrail-x">×</div>
        <div class="guardrail-body">
          <strong>{{__P_z1GuardStrong__}}</strong>
          {{__P_z1GuardBody__}}
        </div>
      </div>

      <div class="sub-section">
        <span class="sub-section-tag">{{__P_z1PluginTag__}}</span>
      <div class="block">
        <div class="sys-grid">
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys1Name__}}</div><div class="sys-sub">{{__P_z1Sys1Sub__}}</div></div>
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys2Name__}}</div><div class="sys-sub">{{__P_z1Sys2Sub__}}</div></div>
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys3Name__}}</div><div class="sys-sub">{{__P_z1Sys3Sub__}}</div></div>
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys4Name__}}</div><div class="sys-sub">{{__P_z1Sys4Sub__}}</div></div>
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys5Name__}}</div><div class="sys-sub">{{__P_z1Sys5Sub__}}</div></div>
          <div class="sys-cell"><div class="sys-name">{{__P_z1Sys6Name__}}</div><div class="sys-sub">{{__P_z1Sys6Sub__}}</div></div>
        </div>
        <div class="sys-api">{{__P_z1SysApi__}}</div>
        <div class="zero-mod">
          <span class="zero-mod-icon">✓</span>
          <div class="zero-mod-body">
            <strong>{{__P_z1ZeroModStrong__}}</strong>
            {{__P_z1ZeroModBody__}}
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
      <span class="conn-label">{{__P_conn1Label__}}</span>
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
          <span class="step-title">{{__P_step2Title__}}</span>
        </div>
        <div class="zone-label">{{__P_z2Label__}}</div>
        <div class="zone-sub">{{__P_z2Sub__}}</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">{{__P_z2GroupTag__}}</span>
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
            <div class="db-card-sub">{{__P_z2InSub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="3 4 24 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M15 6 L25 18 L15 30 L5 18 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M15 12 L21 18 L15 24 L9 18 Z" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">PROCESS</div>
            <div class="db-card-sub">{{__P_z2ProcessSub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="5 2 20 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <rect x="7" y="4" width="16" height="24" rx="8" stroke="currentColor" stroke-width="1.4"/>
              <rect x="11" y="10" width="8" height="12" rx="4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="16" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">OUT</div>
            <div class="db-card-sub">{{__P_z2OutSub__}}</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label transform" style="display:flex;flex-wrap:nowrap;align-items:center;gap:6px;min-width:0;">
          <span style="white-space:nowrap;">{{__P_z2BlockLabel__}}</span>
          <span style="margin-left:auto;display:inline-flex;align-items:center;gap:3px;font-family:var(--font-mono);font-size:8.5px;font-weight:700;padding:2px 7px;border:1px solid var(--border-strong);border-radius:999px;color:var(--text);letter-spacing:0;background:var(--surface);white-space:nowrap;flex-shrink:0;">{{__P_z2ProtectedBadge__}}</span>
        </div>
        <div class="block-body">
          <div class="field-list" style="margin-bottom:10px;">
            <div class="field-row">
              <span class="field-name">{{__P_z2F1Name__}}</span>
              <span class="field-input token">* * * * * * *</span>
              <span class="field-tag token">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z2F2Name__}}</span>
              <span class="field-input token">CS-* * * *</span>
              <span class="field-tag token">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z2F3Name__}}</span>
              <span class="field-input token">[tokenized...]</span>
              <span class="field-tag token">BD</span>
            </div>
          </div>
          <div class="dp-engine" style="background:#FFFFFF;">
            <div class="dp-engine-head">
              <span class="dp-engine-name">{{__P_z2DpEngineName__}}</span>
              <span class="dp-engine-badge">{{__P_z2DpEngineBadge__}}</span>
            </div>
            <div class="dp-techs">
              <div class="dp-tech-row"><span class="dp-tech-name">{{__P_z2DpTech1__}}</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">{{__P_z2DpTech2__}}</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">{{__P_z2DpTech3__}}</span></div>
              <div class="dp-tech-row"><span class="dp-tech-name">{{__P_z2DpTech4__}}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="dmz-guarantee">
        <span class="dmz-guarantee-icon">★</span>
        <div class="dmz-guarantee-body">
          <strong>{{__P_z2DmzStrong__}}</strong>
          {{__P_z2DmzBody__}}
        </div>
      </div>

      <div class="core-badges">
        <span class="core-badge c1"><span class="core-badge-num">01</span> Structure-Preserving</span>
        <span class="core-badge c5"><span class="core-badge-num">05</span> Zero Exposure &amp; Audit</span>
      </div>
    </div>

    <!-- CONNECTOR 2→3 -->
    <div class="connector flow-2">
      <span class="conn-label">{{__P_conn2Label__}}</span>
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
          <span class="step-title">{{__P_step3Title__}}</span>
        </div>
        <div class="zone-label">{{__P_z3Label__}}</div>
        <div class="zone-sub">{{__P_z3Sub__}}</div>
      </div>

      <div class="block">
        <div class="block-label transform">{{__P_z3PipelineLabel__}}</div>
        <div class="block-body">
          <div class="proxy-badge">{{__P_z3ProxyBadge__}} <span class="proxy-sub">{{__P_z3ProxySub__}}</span></div>
          <div class="deploy-grid">
            <div class="path-label path-a">{{__P_z3PathA__}}</div>
            <span class="deploy-pill">{{__P_z3DeployA1__}}</span>
            <span class="deploy-pill">{{__P_z3DeployA2__}}</span>
            <div class="path-label path-b">{{__P_z3PathB__}}</div>
            <span class="deploy-pill">{{__P_z3DeployB1__}}</span>
            <span class="deploy-pill">{{__P_z3DeployB2__}}</span>
          </div>
          <div class="swap-note">{{__P_z3SwapNote__}}</div>
        </div>
      </div>

      <div class="guardrail success">
        <div class="guardrail-x">✓</div>
        <div class="guardrail-body">
          <strong>{{__P_z3GuardStrong__}}</strong>
          {{__P_z3GuardBody__}}
        </div>
      </div>

      <div class="block">
        <div class="block-label transform">{{__P_z3IsoLabel__}}</div>
        <div class="pdesc-module">
          <div class="pdesc-module-head">{{__P_z3PdescHead__}}</div>
          <div class="pdesc-items">
            <div class="pdesc-item">{{__P_z3PdescItem1__}}</div>
            <div class="pdesc-item">{{__P_z3PdescItem2__}}</div>
            <div class="pdesc-item">{{__P_z3PdescItem3__}}</div>
          </div>
          <div class="pdesc-foot">{{__P_z3PdescFoot__}}</div>
        </div>
      </div>

      <div class="block">
        <div class="block-label muted compliance">{{__P_z3ComplianceLabel__}}</div>
        <div class="compliance-row">
          <span class="compliance-badge" style="background:var(--green-bg);border-color:var(--green);color:var(--green);">{{__P_z3Compliance1__}}</span>
          <span class="compliance-badge" style="background:var(--green-bg);border-color:var(--green);color:var(--green);">{{__P_z3Compliance2__}}</span>
        </div>
      </div>

      <div class="core-badges">
        <span class="core-badge c1"><span class="core-badge-num">01</span> Structure-Preserving</span>
        <span class="core-badge c5"><span class="core-badge-num">05</span> Zero Exposure &amp; Audit</span>
      </div>
    </div>

    <!-- CONNECTOR 3→4 -->
    <div class="connector flow-3">
      <span class="conn-label">{{__P_conn3Label__}}</span>
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
          <span class="step-title">{{__P_step4Title__}}</span>
        </div>
        <div class="zone-label">{{__P_z4Label__}}</div>
        <div class="zone-sub">{{__P_z4Sub__}}</div>
      </div>

      <div class="db-group">
        <span class="db-group-tag">{{__P_z4GroupTag__}}</span>
        <div class="db-card-grid">
          <div class="db-card">
            <svg class="db-card-svg" viewBox="1 4 28 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <rect x="3" y="6" width="24" height="24" rx="12" stroke="currentColor" stroke-width="1.4"/>
              <rect x="8" y="12" width="14" height="12" rx="6" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">IN</div>
            <div class="db-card-sub">{{__P_z4InSub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="2 2 28 32" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M15 4 L26 18 L15 32 L4 18 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M15 11 L21 18 L15 25 L9 18 Z" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
              <circle cx="15" cy="18" r="1.5" fill="currentColor"/>
            </svg>
            <div class="db-card-title">PROCESS</div>
            <div class="db-card-sub">{{__P_z4ProcessSub__}}</div>
          </div>
          <div class="db-card">
            <svg class="db-card-svg" viewBox="3 4 24 28" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M5 6 H19 L25 12 V30 H5 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M19 6 V12 H25" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M9 19 L13 23 L21 15" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="db-card-title">OUT</div>
            <div class="db-card-sub">{{__P_z4OutSub__}}</div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-label transform" style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">
          <span>{{__P_z4BlockLabel__}}</span>
        </div>
        <div class="block-body">
          <div class="field-list" style="margin-bottom:10px;">
            <div class="field-row">
              <span class="field-name">{{__P_z4F1Name__}}</span>
              <span class="field-input restore">David Lawson</span>
              <span class="field-tag restore">ID</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z4F2Name__}}</span>
              <span class="field-input restore">CS-4203</span>
              <span class="field-tag restore">CD</span>
            </div>
            <div class="field-row">
              <span class="field-name">{{__P_z4F3Name__}}</span>
              <span class="field-input restore">Shipping delayed...</span>
              <span class="field-tag restore">BD</span>
            </div>
          </div>
          <div class="recon-engine">
            <div class="recon-engine-head">
              <span class="recon-engine-name">{{__P_z4ReconName__}}</span>
              <span class="recon-engine-badge">{{__P_z4ReconBadge__}}</span>
            </div>
            <div class="recon-techs">
              <div class="recon-tech-row"><span class="recon-tech-name">{{__P_z4ReconTech1__}}</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">{{__P_z4ReconTech2__}}</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">{{__P_z4ReconTech3__}}</span></div>
              <div class="recon-tech-row"><span class="recon-tech-name">{{__P_z4ReconTech4__}}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="local-guarantee">
        <span class="local-guarantee-icon">✓</span>
        <div class="local-guarantee-body">
          <strong>{{__P_z4LocalStrong__}}</strong>
          {{__P_z4LocalBody__}}
        </div>
      </div>

      <div class="block">
        <div class="block-label muted output">{{__P_z4OutputLabel__}}</div>
        <div class="output-checks">
          <div class="output-check-row">{{__P_z4OutCheck1__}}</div>
          <div class="output-check-row">{{__P_z4OutCheck2__}}</div>
          <div class="output-check-row">{{__P_z4OutCheck3__}}</div>
          <div class="output-check-row">{{__P_z4OutCheck4__}}</div>
        </div>
      </div>

      <div class="chip-row">
        <span class="chip green">{{__P_z4Chip1__}}</span>
        <span class="chip green">{{__P_z4Chip2__}}</span>
        <span class="chip green">{{__P_z4Chip3__}}</span>
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
      <span>{{__P_coreTitle__}}</span>
    </div>

    <div class="core-bar-content">

      <!-- Workflow block (01~04) -->
      <div class="core-block core-block--workflow">
        <div class="core-group core-group--workflow">{{__P_coreWorkflowGroup__}}</div>
        <div class="core-cells core-cells--4">
          <div class="core-cell c1">
            <span class="core-num">01</span>
            <div class="core-cell-name">{{__P_core1Name__}}</div>
            <div class="core-cell-desc">{{__P_core1Desc__}}</div>
          </div>
          <div class="core-cell c2">
            <span class="core-num">02</span>
            <div class="core-cell-name">{{__P_core2Name__}}</div>
            <div class="core-cell-desc">{{__P_core2Desc__}}</div>
          </div>
          <div class="core-cell c3">
            <span class="core-num">03</span>
            <div class="core-cell-name">{{__P_core3Name__}}</div>
            <div class="core-cell-desc">{{__P_core3Desc__}}</div>
          </div>
          <div class="core-cell c4">
            <span class="core-num">04</span>
            <div class="core-cell-name">{{__P_core4Name__}}</div>
            <div class="core-cell-desc">{{__P_core4Desc__}}</div>
          </div>
        </div>
      </div>

      <!-- Approval block (05~06) -->
      <div class="core-block core-block--approval">
        <div class="core-group core-group--approval">{{__P_coreApprovalGroup__}}</div>
        <div class="core-cells core-cells--2">
          <div class="core-cell c5">
            <span class="core-num">05</span>
            <div class="core-cell-name">{{__P_core5Name__}}</div>
            <div class="core-cell-desc">{{__P_core5Desc__}}</div>
          </div>
          <div class="core-cell c6">
            <span class="core-num">06</span>
            <div class="core-cell-name">{{__P_core6Name__}}</div>
            <div class="core-cell-desc">{{__P_core6Desc__}}</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom strip -->
    <div class="core-bar-strip">{{__P_coreStrip__}}</div>
  </div>

      </div><!-- /.canvas -->
    </div><!-- /.tech-diagram-wrap -->

    <!-- Zone annotation cards (homepage exact copy) -->
    <!-- ANNOTATION_CARDS_PLACEHOLDER -->
  </div><!-- /.section-container -->
</div><!-- /.section-soft -->`

const CSS = `.section-soft *, .tech-diagram-wrap *, .tech-diagram-annotation * { margin: 0; padding: 0; box-sizing: border-box; }
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
  .section-soft {
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
    container-type: inline-size; font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
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
  @container (max-width: 800px) {
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
  .block-.section-soft {
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
  .zero-mod-.section-soft {
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
  .local-guarantee-.section-soft {
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
  .dmz-guarantee-.section-soft {
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
  .guardrail-.section-soft {
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
  @container (max-width: 1024px) {
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
  @container (max-width: 768px) {
    .section-soft { padding: 0; }
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
  @container (max-width: 480px) {
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

export default function ArchitectureFourZoneTechnicalDe({
  eyebrow = "Technische Ansicht · Zonenbasierte Architektur",
  sectionTitle = "Dieselbe Architektur — aus technischer Sicht",
  sectionDescription = "Für Architekten und Sicherheitsprüfer: die vollständige zonenbasierte Sicht auf operative Daten, Kapselung und LLM-Integration.",
  card1Num = "Zone 1 · Unternehmensinternes Netzwerk",
  card1Title = "Wo die operativen Systeme bereits laufen",
  card1Description = "Bestehende Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — bleiben unverändert. Keine Migration. Capsule liest sie je nach Quelle über REST, gRPC, JDBC oder Graph API aus.",
  card2Num = "Zone 2 · DMZ — Demilitarisierte Zone",
  card2Title = "Wo die Kapselung stattfindet",
  card2Description = "Die Enhanced Encapsulation Layer erkennt sensible Elemente, ersetzt sie durch sichere Token mittels strukturerhaltender, Differential-Privacy-basierter Schutzverfahren und übergibt die Kapsel an die Routing-Entscheidung. Originalwerte verbleiben lokal im Token-Map.",
  card3Num = "Zone 3 · Internes Team",
  card3Title = "Wo Governance und Routing stattfinden",
  card3Description = "Organisationsrichtlinien, Berechtigungen und Domänenkontext entscheiden, wo die Kapsel verarbeitet wird — ein zugelassener externer LLM (Path A) oder ein lokales On-Prem-Modell (Path B). Die Entscheidung erfolgt richtlinienbasiert pro Workflow, mit vollständigem Audit-Trail innerhalb der Organisation.",
  card4Num = "Zone 4 · Lokal — Automatische Rekonstruktion",
  card4Title = "Wo die KI-Antwort zu geschäftsfertiger Ausgabe wird",
  card4Description = "Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch vom Token in den Originalwert rückgeführt. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden. Die wiederhergestellte Ausgabe wird in den ursprünglichen Workflow zurückgespielt.",
  step1Title = "Quelldaten",
  step2Title = "DP-Kapselung",
  step3Title = "KI-Verarbeitung",
  step4Title = "Lokale automatische Rekonstruktion",
  z1Label = "Unternehmensinternes Netzwerk",
  z1Sub = "On-Premise-DB · Unternehmenssysteme",
  z2Label = "DMZ — Differential Privacy",
  z2Sub = "Gleiche Organisation · EU-Region · DSGVO-konform",
  z3Label = "Internes Team",
  z3Sub = "Gleiche Organisation · Anonymisierter LLM-Proxy",
  z4Label = "Lokal — Automatische Rekonstruktion",
  z4Sub = "Nur intern · Kein externer Datenabfluss",
  conn1Label = "Unstrukturierte Daten — Eingang",
  conn2Label = "Geschützte Daten — Ausgang",
  conn3Label = "KI-Antwort (tokenisiert)",
  z1GroupTag = "Unstrukturiert",
  z1Db1Sub = "Kundendaten<br/>Personenbezogene Informationen",
  z1Db2Sub = "Ticketdaten<br/>Support-Tickets / Status",
  z1Db3Sub = "Detaildaten<br/>Unstrukturierte Schadenmeldungen",
  z1FieldsLabel = "Rohdatenfelder",
  z1F1Name = "Kunde",
  z1F2Name = "Freitext",
  z1F2NameMid = "Ticket",
  z1GuardStrong = "PII-Filter schützen einzelne Felder. Unternehmen arbeiten auf Basis von Strukturen.",
  z1GuardBody = "PII-Filter sind nicht das Problem. LLM Capsule adressiert eine <b>andere Datenkategorie</b> — Tabellenschemata, Querverweise, Alarmsequenzen und Ticket-Threads, die einfaches Feldmaskieren nicht erhalten kann.",
  z1PluginTag = "Plug-in für KI-Teams",
  z1Sys1Sub = "SAP·Oracle",
  z1Sys2Sub = "Salesforce",
  z1Sys3Sub = "Vector DB",
  z1Sys4Sub = "Oracle",
  z1Sys5Sub = "Jira·SN",
  z1Sys6Sub = "SharePoint",
  z1Sys1Name = "ERP",
  z1Sys2Name = "CRM",
  z1Sys3Name = "RAG",
  z1Sys4Name = "Legacy",
  z1Sys5Name = "Ticket",
  z1Sys6Name = "DMS",
  z1SysApi = "REST · gRPC · JDBC · Graph API",
  z1ZeroModStrong = "Keine Systemänderungen erforderlich",
  z1ZeroModBody = "Die Integration erfolgt über einen einzelnen API-Aufruf — ohne Änderungen an bestehenden ERP-, CRM- oder Legacy-Systemen.",
  z2GroupTag = "Kapselungsfluss",
  z2InSub = "Roheingabe<br/>Unstrukturierte Daten",
  z2ProcessSub = "DP Engine<br/>Differential Privacy",
  z2OutSub = "Gekapselt<br/>Token-Kapsel",
  z2BlockLabel = "Kapselung",
  z2ProtectedBadge = "✓ Geschützt",
  z2F1Name = "Name",
  z2F2Name = "Champ Id",
  z2F3Name = "Freitext",
  z2DpEngineName = "DP Engine",
  z2DpEngineBadge = "epsilon-DP aktiv",
  z2DpTech1 = "Rausch-Injektion (Laplace)",
  z2DpTech2 = "k-Anonymität-Durchsetzung",
  z2DpTech3 = "Semantische Tokenisierung",
  z2DpTech4 = "Freitext-NER-Maskierung",
  z2DmzStrong = "DMZ-Garantie",
  z2DmzBody = "Über einfache Kapselung hinaus: Differential-Privacy-Verfahren machen ursprüngliche sensible Daten <b>mathematisch irreversibel</b>.",
  z3PipelineLabel = "LLM-Pipeline",
  z3ProxyBadge = "LLM-a-Proxy",
  z3ProxySub = "Anonymisiertes Routing",
  z3PathA = "Path A · Extern",
  z3PathB = "Path B · On-Premise",
  z3DeployA1 = "Public Cloud",
  z3DeployA2 = "Region-gehostet",
  z3DeployB1 = "Privat",
  z3DeployB2 = "On-Premise",
  z3SwapNote = "Modell austauschbar — der Capsule-Vertrag bleibt unverändert.",
  z3GuardStrong = "Kein direkter Zugriff auf die Quelldatenbank",
  z3GuardBody = "KI-Teams erhalten keinen Zugriff auf die Quelldatenbank. Sie empfangen ausschließlich Differential-Privacy-geschützte Daten mit erhaltener Datenstruktur.",
  z3IsoLabel = "Datenschutz-Isolationsmodul",
  z3PdescHead = "PDESC / ISOLA",
  z3PdescItem1 = "Datenschutz-Deskriptor",
  z3PdescItem2 = "Isolierte Rechenzone",
  z3PdescItem3 = "Ausgabe-Anonymisierung",
  z3PdescFoot = "Re-Identifizierungsversuche abgewehrt · Ausgabe validiert",
  z3ComplianceLabel = "Compliance",
  z3Compliance1 = "DSGVO (GDPR)",
  z3Compliance2 = "EU-Region",
  z4GroupTag = "Rekonstruktionsfluss",
  z4InSub = "KI-Token<br/>Tokenisierte Antwort",
  z4ProcessSub = "Rekonstruktion<br/>Lokale Wiederherstellung",
  z4OutSub = "Originalwert<br/>Direkt einsatzbereit",
  z4BlockLabel = "Token → Original",
  z4F1Name = "Kunde",
  z4F2Name = "Ticket",
  z4F3Name = "Details",
  z4ReconName = "Rekonstruktion",
  z4ReconBadge = "Nur lokal",
  z4ReconTech1 = "Token-Map-Abfrage",
  z4ReconTech2 = "Originalwert-Wiederherstellung",
  z4ReconTech3 = "Kontext-Neuzuordnung",
  z4ReconTech4 = "Ausgabevalidierung",
  z4LocalStrong = "Lokale Rekonstruktionsgarantie",
  z4LocalBody = "Die Token-Map verbleibt ausschließlich im lokalen Speicher · <b>Die Ausgabe ist sofort geschäftlich einsetzbar</b>",
  z4OutputLabel = "Ausgabeeigenschaften",
  z4OutCheck1 = "Originalwerte wiederhergestellt",
  z4OutCheck2 = "Kein externer Datenaustritt",
  z4OutCheck3 = "Kontext vollständig erhalten",
  z4OutCheck4 = "Direkt einsetzbare Ausgabe",
  z4Chip1 = "Automatische Wiederherstellung",
  z4Chip2 = "Nur lokal",
  z4Chip3 = "Datenspeicherort (Data Residency)",
  coreTitle = "6 Kernfunktionen",
  coreWorkflowGroup = "Was den Workflow antreibt",
  coreApprovalGroup = "Was die Freigabe sichert",
  core1Name = "Strukturerhaltend",
  core1Desc = "Tabellen, Protokolle, Querverweise und Alarmsequenzen bleiben unverändert. Die KI verarbeitet die vollständige Datenstruktur — nicht nur Text.",
  core2Name = "Ausführung in der Unternehmensumgebung",
  core2Desc = "LLM Capsule wird innerhalb Ihrer bestehenden Infrastruktur betrieben. Die Anbindung erfolgt über API, SDK, Konnektoren oder Reverse Proxy — ohne Datenverkehrs-Umleitung.",
  core3Name = "Geschäftsfertige Rekonstruktion",
  core3Desc = "Die KI-Ausgabe wird mit den Originalwerten wiederhergestellt. Das Ergebnis fließt direkt in das auslösende Ticket oder den Workflow zurück.",
  core4Name = "Unternehmenseigene Sensitivitätsdefinition",
  core4Desc = "Ihr IT-Administrator legt fest, welche Daten als sensibel gelten. Benutzerdefinierte Marker, Regex-Regeln und Stufenrichtlinien — konfigurierbar in unter 5 Minuten.",
  core5Name = "Zero Exposure &amp; Audit-Trail",
  core5Desc = "Operative Rohdaten verbleiben innerhalb der Organisation. Jede Aktion wird protokolliert, mit Zeitstempel versehen und ist SIEM-exportierbar.",
  core6Name = "Zeitabhängige Richtlinien",
  core6Desc = "Sensitivitätskriterien ändern sich im Zeitverlauf. Capsule versioniert jeden Marker und jede Richtlinie für eine kontinuierliche DSGVO- und regulatorische Konformität.",
  coreStrip = "01 und 02 sind Grundlage des fachlichen Austauschs. 05 und 06 sichern die regulatorische Freigabe.",
}: Props) {
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

  // Body placeholder substitutions
  html = html.split("{{__P_step1Title__}}").join(step1Title)
  html = html.split("{{__P_step2Title__}}").join(step2Title)
  html = html.split("{{__P_step3Title__}}").join(step3Title)
  html = html.split("{{__P_step4Title__}}").join(step4Title)
  html = html.split("{{__P_z1Label__}}").join(z1Label)
  html = html.split("{{__P_z1Sub__}}").join(z1Sub)
  html = html.split("{{__P_z2Label__}}").join(z2Label)
  html = html.split("{{__P_z2Sub__}}").join(z2Sub)
  html = html.split("{{__P_z3Label__}}").join(z3Label)
  html = html.split("{{__P_z3Sub__}}").join(z3Sub)
  html = html.split("{{__P_z4Label__}}").join(z4Label)
  html = html.split("{{__P_z4Sub__}}").join(z4Sub)
  html = html.split("{{__P_conn1Label__}}").join(conn1Label)
  html = html.split("{{__P_conn2Label__}}").join(conn2Label)
  html = html.split("{{__P_conn3Label__}}").join(conn3Label)
  html = html.split("{{__P_z1GroupTag__}}").join(z1GroupTag)
  html = html.split("{{__P_z1Db1Sub__}}").join(z1Db1Sub)
  html = html.split("{{__P_z1Db2Sub__}}").join(z1Db2Sub)
  html = html.split("{{__P_z1Db3Sub__}}").join(z1Db3Sub)
  html = html.split("{{__P_z1FieldsLabel__}}").join(z1FieldsLabel)
  html = html.split("{{__P_z1F1Name__}}").join(z1F1Name)
  html = html.split("{{__P_z1F2Name__}}").join(z1F2Name)
  html = html.split("{{__P_z1F2NameMid__}}").join(z1F2NameMid)
  html = html.split("{{__P_z1GuardStrong__}}").join(z1GuardStrong)
  html = html.split("{{__P_z1GuardBody__}}").join(z1GuardBody)
  html = html.split("{{__P_z1PluginTag__}}").join(z1PluginTag)
  html = html.split("{{__P_z1Sys1Sub__}}").join(z1Sys1Sub)
  html = html.split("{{__P_z1Sys2Sub__}}").join(z1Sys2Sub)
  html = html.split("{{__P_z1Sys3Sub__}}").join(z1Sys3Sub)
  html = html.split("{{__P_z1Sys4Sub__}}").join(z1Sys4Sub)
  html = html.split("{{__P_z1Sys5Sub__}}").join(z1Sys5Sub)
  html = html.split("{{__P_z1Sys6Sub__}}").join(z1Sys6Sub)
  html = html.split("{{__P_z1Sys1Name__}}").join(z1Sys1Name)
  html = html.split("{{__P_z1Sys2Name__}}").join(z1Sys2Name)
  html = html.split("{{__P_z1Sys3Name__}}").join(z1Sys3Name)
  html = html.split("{{__P_z1Sys4Name__}}").join(z1Sys4Name)
  html = html.split("{{__P_z1Sys5Name__}}").join(z1Sys5Name)
  html = html.split("{{__P_z1Sys6Name__}}").join(z1Sys6Name)
  html = html.split("{{__P_z1SysApi__}}").join(z1SysApi)
  html = html.split("{{__P_z1ZeroModStrong__}}").join(z1ZeroModStrong)
  html = html.split("{{__P_z1ZeroModBody__}}").join(z1ZeroModBody)
  html = html.split("{{__P_z2GroupTag__}}").join(z2GroupTag)
  html = html.split("{{__P_z2InSub__}}").join(z2InSub)
  html = html.split("{{__P_z2ProcessSub__}}").join(z2ProcessSub)
  html = html.split("{{__P_z2OutSub__}}").join(z2OutSub)
  html = html.split("{{__P_z2BlockLabel__}}").join(z2BlockLabel)
  html = html.split("{{__P_z2ProtectedBadge__}}").join(z2ProtectedBadge)
  html = html.split("{{__P_z2F1Name__}}").join(z2F1Name)
  html = html.split("{{__P_z2F2Name__}}").join(z2F2Name)
  html = html.split("{{__P_z2F3Name__}}").join(z2F3Name)
  html = html.split("{{__P_z2DpEngineName__}}").join(z2DpEngineName)
  html = html.split("{{__P_z2DpEngineBadge__}}").join(z2DpEngineBadge)
  html = html.split("{{__P_z2DpTech1__}}").join(z2DpTech1)
  html = html.split("{{__P_z2DpTech2__}}").join(z2DpTech2)
  html = html.split("{{__P_z2DpTech3__}}").join(z2DpTech3)
  html = html.split("{{__P_z2DpTech4__}}").join(z2DpTech4)
  html = html.split("{{__P_z2DmzStrong__}}").join(z2DmzStrong)
  html = html.split("{{__P_z2DmzBody__}}").join(z2DmzBody)
  html = html.split("{{__P_z3PipelineLabel__}}").join(z3PipelineLabel)
  html = html.split("{{__P_z3ProxyBadge__}}").join(z3ProxyBadge)
  html = html.split("{{__P_z3ProxySub__}}").join(z3ProxySub)
  html = html.split("{{__P_z3PathA__}}").join(z3PathA)
  html = html.split("{{__P_z3PathB__}}").join(z3PathB)
  html = html.split("{{__P_z3DeployA1__}}").join(z3DeployA1)
  html = html.split("{{__P_z3DeployA2__}}").join(z3DeployA2)
  html = html.split("{{__P_z3DeployB1__}}").join(z3DeployB1)
  html = html.split("{{__P_z3DeployB2__}}").join(z3DeployB2)
  html = html.split("{{__P_z3SwapNote__}}").join(z3SwapNote)
  html = html.split("{{__P_z3GuardStrong__}}").join(z3GuardStrong)
  html = html.split("{{__P_z3GuardBody__}}").join(z3GuardBody)
  html = html.split("{{__P_z3IsoLabel__}}").join(z3IsoLabel)
  html = html.split("{{__P_z3PdescHead__}}").join(z3PdescHead)
  html = html.split("{{__P_z3PdescItem1__}}").join(z3PdescItem1)
  html = html.split("{{__P_z3PdescItem2__}}").join(z3PdescItem2)
  html = html.split("{{__P_z3PdescItem3__}}").join(z3PdescItem3)
  html = html.split("{{__P_z3PdescFoot__}}").join(z3PdescFoot)
  html = html.split("{{__P_z3ComplianceLabel__}}").join(z3ComplianceLabel)
  html = html.split("{{__P_z3Compliance1__}}").join(z3Compliance1)
  html = html.split("{{__P_z3Compliance2__}}").join(z3Compliance2)
  html = html.split("{{__P_z4GroupTag__}}").join(z4GroupTag)
  html = html.split("{{__P_z4InSub__}}").join(z4InSub)
  html = html.split("{{__P_z4ProcessSub__}}").join(z4ProcessSub)
  html = html.split("{{__P_z4OutSub__}}").join(z4OutSub)
  html = html.split("{{__P_z4BlockLabel__}}").join(z4BlockLabel)
  html = html.split("{{__P_z4F1Name__}}").join(z4F1Name)
  html = html.split("{{__P_z4F2Name__}}").join(z4F2Name)
  html = html.split("{{__P_z4F3Name__}}").join(z4F3Name)
  html = html.split("{{__P_z4ReconName__}}").join(z4ReconName)
  html = html.split("{{__P_z4ReconBadge__}}").join(z4ReconBadge)
  html = html.split("{{__P_z4ReconTech1__}}").join(z4ReconTech1)
  html = html.split("{{__P_z4ReconTech2__}}").join(z4ReconTech2)
  html = html.split("{{__P_z4ReconTech3__}}").join(z4ReconTech3)
  html = html.split("{{__P_z4ReconTech4__}}").join(z4ReconTech4)
  html = html.split("{{__P_z4LocalStrong__}}").join(z4LocalStrong)
  html = html.split("{{__P_z4LocalBody__}}").join(z4LocalBody)
  html = html.split("{{__P_z4OutputLabel__}}").join(z4OutputLabel)
  html = html.split("{{__P_z4OutCheck1__}}").join(z4OutCheck1)
  html = html.split("{{__P_z4OutCheck2__}}").join(z4OutCheck2)
  html = html.split("{{__P_z4OutCheck3__}}").join(z4OutCheck3)
  html = html.split("{{__P_z4OutCheck4__}}").join(z4OutCheck4)
  html = html.split("{{__P_z4Chip1__}}").join(z4Chip1)
  html = html.split("{{__P_z4Chip2__}}").join(z4Chip2)
  html = html.split("{{__P_z4Chip3__}}").join(z4Chip3)
  html = html.split("{{__P_coreTitle__}}").join(coreTitle)
  html = html.split("{{__P_coreWorkflowGroup__}}").join(coreWorkflowGroup)
  html = html.split("{{__P_coreApprovalGroup__}}").join(coreApprovalGroup)
  html = html.split("{{__P_core1Name__}}").join(core1Name)
  html = html.split("{{__P_core1Desc__}}").join(core1Desc)
  html = html.split("{{__P_core2Name__}}").join(core2Name)
  html = html.split("{{__P_core2Desc__}}").join(core2Desc)
  html = html.split("{{__P_core3Name__}}").join(core3Name)
  html = html.split("{{__P_core3Desc__}}").join(core3Desc)
  html = html.split("{{__P_core4Name__}}").join(core4Name)
  html = html.split("{{__P_core4Desc__}}").join(core4Desc)
  html = html.split("{{__P_core5Name__}}").join(core5Name)
  html = html.split("{{__P_core5Desc__}}").join(core5Desc)
  html = html.split("{{__P_core6Name__}}").join(core6Name)
  html = html.split("{{__P_core6Desc__}}").join(core6Desc)
  html = html.split("{{__P_coreStrip__}}").join(coreStrip)

  return (
    <>
      <style dangerouslySetInnerHTML={ { __html: CSS } } />
      <div dangerouslySetInnerHTML={ { __html: html } } />
    </>
  )
}

addPropertyControls(ArchitectureFourZoneTechnicalDe, {
  eyebrow: { type: ControlType.String, title: "Section · Eyebrow", defaultValue: "Technische Ansicht · Zonenbasierte Architektur" },
  sectionTitle: { type: ControlType.String, title: "Section · Title", defaultValue: "Dieselbe Architektur — aus technischer Sicht" },
  sectionDescription: { type: ControlType.String, title: "Section · Description", defaultValue: "Für Architekten und Sicherheitsprüfer: die vollständige zonenbasierte Sicht auf operative Daten, Kapselung und LLM-Integration.", displayTextArea: true },
  card1Num: { type: ControlType.String, title: "Card 1 · Num", defaultValue: "Zone 1 · Unternehmensinternes Netzwerk" },
  card1Title: { type: ControlType.String, title: "Card 1 · Title", defaultValue: "Wo die operativen Systeme bereits laufen" },
  card1Description: { type: ControlType.String, title: "Card 1 · Description", defaultValue: "Bestehende Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — bleiben unverändert. Keine Migration. Capsule liest sie je nach Quelle über REST, gRPC, JDBC oder Graph API aus.", displayTextArea: true },
  card2Num: { type: ControlType.String, title: "Card 2 · Num", defaultValue: "Zone 2 · DMZ — Demilitarisierte Zone" },
  card2Title: { type: ControlType.String, title: "Card 2 · Title", defaultValue: "Wo die Kapselung stattfindet" },
  card2Description: { type: ControlType.String, title: "Card 2 · Description", defaultValue: "Die Enhanced Encapsulation Layer erkennt sensible Elemente, ersetzt sie durch sichere Token mittels strukturerhaltender, Differential-Privacy-basierter Schutzverfahren und übergibt die Kapsel an die Routing-Entscheidung. Originalwerte verbleiben lokal im Token-Map.", displayTextArea: true },
  card3Num: { type: ControlType.String, title: "Card 3 · Num", defaultValue: "Zone 3 · Internes Team" },
  card3Title: { type: ControlType.String, title: "Card 3 · Title", defaultValue: "Wo Governance und Routing stattfinden" },
  card3Description: { type: ControlType.String, title: "Card 3 · Description", defaultValue: "Organisationsrichtlinien, Berechtigungen und Domänenkontext entscheiden, wo die Kapsel verarbeitet wird — ein zugelassener externer LLM (Path A) oder ein lokales On-Prem-Modell (Path B). Die Entscheidung erfolgt richtlinienbasiert pro Workflow, mit vollständigem Audit-Trail innerhalb der Organisation.", displayTextArea: true },
  card4Num: { type: ControlType.String, title: "Card 4 · Num", defaultValue: "Zone 4 · Lokal — Automatische Rekonstruktion" },
  card4Title: { type: ControlType.String, title: "Card 4 · Title", defaultValue: "Wo die KI-Antwort zu geschäftsfertiger Ausgabe wird" },
  card4Description: { type: ControlType.String, title: "Card 4 · Description", defaultValue: "Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch vom Token in den Originalwert rückgeführt. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden. Die wiederhergestellte Ausgabe wird in den ursprünglichen Workflow zurückgespielt.", displayTextArea: true },
  step1Title: { type: ControlType.String, title: "Z1 · Step Title", defaultValue: "Quelldaten" },
  step2Title: { type: ControlType.String, title: "Z2 · Step Title", defaultValue: "DP-Kapselung" },
  step3Title: { type: ControlType.String, title: "Z3 · Step Title", defaultValue: "KI-Verarbeitung" },
  step4Title: { type: ControlType.String, title: "Z4 · Step Title", defaultValue: "Lokale automatische Rekonstruktion" },
  z1Label: { type: ControlType.String, title: "Z1 · Zone Label", defaultValue: "Unternehmensinternes Netzwerk" },
  z1Sub: { type: ControlType.String, title: "Z1 · Zone Sub", defaultValue: "On-Premise-DB · Unternehmenssysteme" },
  z2Label: { type: ControlType.String, title: "Z2 · Zone Label", defaultValue: "DMZ — Differential Privacy" },
  z2Sub: { type: ControlType.String, title: "Z2 · Zone Sub", defaultValue: "Gleiche Organisation · EU-Region · DSGVO-konform" },
  z3Label: { type: ControlType.String, title: "Z3 · Zone Label", defaultValue: "Internes Team" },
  z3Sub: { type: ControlType.String, title: "Z3 · Zone Sub", defaultValue: "Gleiche Organisation · Anonymisierter LLM-Proxy" },
  z4Label: { type: ControlType.String, title: "Z4 · Zone Label", defaultValue: "Lokal — Automatische Rekonstruktion" },
  z4Sub: { type: ControlType.String, title: "Z4 · Zone Sub", defaultValue: "Nur intern · Kein externer Datenabfluss" },
  conn1Label: { type: ControlType.String, title: "Connector · 1→2 Label", defaultValue: "Unstrukturierte Daten — Eingang" },
  conn2Label: { type: ControlType.String, title: "Connector · 2→3 Label", defaultValue: "Geschützte Daten — Ausgang" },
  conn3Label: { type: ControlType.String, title: "Connector · 3→4 Label", defaultValue: "KI-Antwort (tokenisiert)" },
  z1GroupTag: { type: ControlType.String, title: "Z1 · DB Group Tag", defaultValue: "Unstrukturiert" },
  z1Db1Sub: { type: ControlType.String, title: "Z1 · DB1 Sub (use <br/>)", defaultValue: "Kundendaten<br/>Personenbezogene Informationen" },
  z1Db2Sub: { type: ControlType.String, title: "Z1 · DB2 Sub (use <br/>)", defaultValue: "Ticketdaten<br/>Support-Tickets / Status" },
  z1Db3Sub: { type: ControlType.String, title: "Z1 · DB3 Sub (use <br/>)", defaultValue: "Detaildaten<br/>Unstrukturierte Schadenmeldungen" },
  z1FieldsLabel: { type: ControlType.String, title: "Z1 · Raw Input Block Label", defaultValue: "Rohdatenfelder" },
  z1F1Name: { type: ControlType.String, title: "Z1 · Field 1 Name", defaultValue: "Kunde" },
  z1F2Name: { type: ControlType.String, title: "Z1 · Field 3 Name", defaultValue: "Freitext" },
  z1F2NameMid: { type: ControlType.String, title: "Z1 · Field 2 Name", defaultValue: "Ticket" },
  z1GuardStrong: { type: ControlType.String, title: "Z1 · Guardrail Title", defaultValue: "PII-Filter schützen einzelne Felder. Unternehmen arbeiten auf Basis von Strukturen." },
  z1GuardBody: { type: ControlType.String, title: "Z1 · Guardrail Body (HTML)", defaultValue: "PII-Filter sind nicht das Problem. LLM Capsule adressiert eine <b>andere Datenkategorie</b> — Tabellenschemata, Querverweise, Alarmsequenzen und Ticket-Threads, die einfaches Feldmaskieren nicht erhalten kann.", displayTextArea: true },
  z1PluginTag: { type: ControlType.String, title: "Z1 · Plug-in Tag", defaultValue: "Plug-in für KI-Teams" },
  z1Sys1Sub: { type: ControlType.String, title: "Z1 · Sys 1 Sub", defaultValue: "SAP·Oracle" },
  z1Sys2Sub: { type: ControlType.String, title: "Z1 · Sys 2 Sub", defaultValue: "Salesforce" },
  z1Sys3Sub: { type: ControlType.String, title: "Z1 · Sys 3 Sub", defaultValue: "Vector DB" },
  z1Sys4Sub: { type: ControlType.String, title: "Z1 · Sys 4 Sub", defaultValue: "Oracle" },
  z1Sys5Sub: { type: ControlType.String, title: "Z1 · Sys 5 Sub", defaultValue: "Jira·SN" },
  z1Sys6Sub: { type: ControlType.String, title: "Z1 · Sys 6 Sub", defaultValue: "SharePoint" },
  z1Sys1Name: { type: ControlType.String, title: "Z1 · Sys 1 Name (ERP)", defaultValue: "ERP" },
  z1Sys2Name: { type: ControlType.String, title: "Z1 · Sys 2 Name (CRM)", defaultValue: "CRM" },
  z1Sys3Name: { type: ControlType.String, title: "Z1 · Sys 3 Name (RAG)", defaultValue: "RAG" },
  z1Sys4Name: { type: ControlType.String, title: "Z1 · Sys 4 Name (Legacy)", defaultValue: "Legacy" },
  z1Sys5Name: { type: ControlType.String, title: "Z1 · Sys 5 Name (Ticket)", defaultValue: "Ticket" },
  z1Sys6Name: { type: ControlType.String, title: "Z1 · Sys 6 Name (DMS)", defaultValue: "DMS" },
  z1SysApi: { type: ControlType.String, title: "Z1 · API List", defaultValue: "REST · gRPC · JDBC · Graph API" },
  z1ZeroModStrong: { type: ControlType.String, title: "Z1 · Zero-Mod Title", defaultValue: "Keine Systemänderungen erforderlich" },
  z1ZeroModBody: { type: ControlType.String, title: "Z1 · Zero-Mod Body", defaultValue: "Die Integration erfolgt über einen einzelnen API-Aufruf — ohne Änderungen an bestehenden ERP-, CRM- oder Legacy-Systemen.", displayTextArea: true },
  z2GroupTag: { type: ControlType.String, title: "Z2 · DB Group Tag", defaultValue: "Kapselungsfluss" },
  z2InSub: { type: ControlType.String, title: "Z2 · IN Sub", defaultValue: "Roheingabe<br/>Unstrukturierte Daten" },
  z2ProcessSub: { type: ControlType.String, title: "Z2 · PROCESS Sub", defaultValue: "DP Engine<br/>Differential Privacy" },
  z2OutSub: { type: ControlType.String, title: "Z2 · OUT Sub", defaultValue: "Gekapselt<br/>Token-Kapsel" },
  z2BlockLabel: { type: ControlType.String, title: "Z2 · Block Label", defaultValue: "Kapselung" },
  z2ProtectedBadge: { type: ControlType.String, title: "Z2 · Protected Badge", defaultValue: "✓ Geschützt" },
  z2F1Name: { type: ControlType.String, title: "Z2 · Field 1 Name", defaultValue: "Name" },
  z2F2Name: { type: ControlType.String, title: "Z2 · Field 2 Name", defaultValue: "Champ Id" },
  z2F3Name: { type: ControlType.String, title: "Z2 · Field 3 Name", defaultValue: "Freitext" },
  z2DpEngineName: { type: ControlType.String, title: "Z2 · DP Engine Name", defaultValue: "DP Engine" },
  z2DpEngineBadge: { type: ControlType.String, title: "Z2 · DP Engine Badge", defaultValue: "epsilon-DP aktiv" },
  z2DpTech1: { type: ControlType.String, title: "Z2 · DP Tech 1", defaultValue: "Rausch-Injektion (Laplace)" },
  z2DpTech2: { type: ControlType.String, title: "Z2 · DP Tech 2", defaultValue: "k-Anonymität-Durchsetzung" },
  z2DpTech3: { type: ControlType.String, title: "Z2 · DP Tech 3", defaultValue: "Semantische Tokenisierung" },
  z2DpTech4: { type: ControlType.String, title: "Z2 · DP Tech 4", defaultValue: "Freitext-NER-Maskierung" },
  z2DmzStrong: { type: ControlType.String, title: "Z2 · DMZ Title", defaultValue: "DMZ-Garantie" },
  z2DmzBody: { type: ControlType.String, title: "Z2 · DMZ Body", defaultValue: "Über einfache Kapselung hinaus: Differential-Privacy-Verfahren machen ursprüngliche sensible Daten <b>mathematisch irreversibel</b>.", displayTextArea: true },
  z3PipelineLabel: { type: ControlType.String, title: "Z3 · Pipeline Block Label", defaultValue: "LLM-Pipeline" },
  z3ProxyBadge: { type: ControlType.String, title: "Z3 · Proxy Badge", defaultValue: "LLM-a-Proxy" },
  z3ProxySub: { type: ControlType.String, title: "Z3 · Proxy Sub", defaultValue: "Anonymisiertes Routing" },
  z3PathA: { type: ControlType.String, title: "Z3 · Path A Label", defaultValue: "Path A · Extern" },
  z3PathB: { type: ControlType.String, title: "Z3 · Path B Label", defaultValue: "Path B · On-Premise" },
  z3DeployA1: { type: ControlType.String, title: "Z3 · Deploy A1 (External 1)", defaultValue: "Public Cloud" },
  z3DeployA2: { type: ControlType.String, title: "Z3 · Deploy A2 (External 2)", defaultValue: "Region-gehostet" },
  z3DeployB1: { type: ControlType.String, title: "Z3 · Deploy B1 (On-prem 1)", defaultValue: "Privat" },
  z3DeployB2: { type: ControlType.String, title: "Z3 · Deploy B2 (On-prem 2)", defaultValue: "On-Premise" },
  z3SwapNote: { type: ControlType.String, title: "Z3 · Swap Note", defaultValue: "Modell austauschbar — der Capsule-Vertrag bleibt unverändert." },
  z3GuardStrong: { type: ControlType.String, title: "Z3 · Guardrail Title", defaultValue: "Kein direkter Zugriff auf die Quelldatenbank" },
  z3GuardBody: { type: ControlType.String, title: "Z3 · Guardrail Body", defaultValue: "KI-Teams erhalten keinen Zugriff auf die Quelldatenbank. Sie empfangen ausschließlich Differential-Privacy-geschützte Daten mit erhaltener Datenstruktur.", displayTextArea: true },
  z3IsoLabel: { type: ControlType.String, title: "Z3 · Isolation Block Label", defaultValue: "Datenschutz-Isolationsmodul" },
  z3PdescHead: { type: ControlType.String, title: "Z3 · PDESC Head", defaultValue: "PDESC / ISOLA" },
  z3PdescItem1: { type: ControlType.String, title: "Z3 · PDESC Item 1", defaultValue: "Datenschutz-Deskriptor" },
  z3PdescItem2: { type: ControlType.String, title: "Z3 · PDESC Item 2", defaultValue: "Isolierte Rechenzone" },
  z3PdescItem3: { type: ControlType.String, title: "Z3 · PDESC Item 3", defaultValue: "Ausgabe-Anonymisierung" },
  z3PdescFoot: { type: ControlType.String, title: "Z3 · PDESC Foot", defaultValue: "Re-Identifizierungsversuche abgewehrt · Ausgabe validiert" },
  z3ComplianceLabel: { type: ControlType.String, title: "Z3 · Compliance Label", defaultValue: "Compliance" },
  z3Compliance1: { type: ControlType.String, title: "Z3 · Compliance Badge 1", defaultValue: "DSGVO (GDPR)" },
  z3Compliance2: { type: ControlType.String, title: "Z3 · Compliance Badge 2", defaultValue: "EU-Region" },
  z4GroupTag: { type: ControlType.String, title: "Z4 · DB Group Tag", defaultValue: "Rekonstruktionsfluss" },
  z4InSub: { type: ControlType.String, title: "Z4 · IN Sub", defaultValue: "KI-Token<br/>Tokenisierte Antwort" },
  z4ProcessSub: { type: ControlType.String, title: "Z4 · PROCESS Sub", defaultValue: "Rekonstruktion<br/>Lokale Wiederherstellung" },
  z4OutSub: { type: ControlType.String, title: "Z4 · OUT Sub", defaultValue: "Originalwert<br/>Direkt einsatzbereit" },
  z4BlockLabel: { type: ControlType.String, title: "Z4 · Token Block Label", defaultValue: "Token → Original" },
  z4F1Name: { type: ControlType.String, title: "Z4 · Field 1 Name", defaultValue: "Kunde" },
  z4F2Name: { type: ControlType.String, title: "Z4 · Field 2 Name", defaultValue: "Ticket" },
  z4F3Name: { type: ControlType.String, title: "Z4 · Field 3 Name", defaultValue: "Details" },
  z4ReconName: { type: ControlType.String, title: "Z4 · Recon Engine Name", defaultValue: "Rekonstruktion" },
  z4ReconBadge: { type: ControlType.String, title: "Z4 · Recon Engine Badge", defaultValue: "Nur lokal" },
  z4ReconTech1: { type: ControlType.String, title: "Z4 · Recon Tech 1", defaultValue: "Token-Map-Abfrage" },
  z4ReconTech2: { type: ControlType.String, title: "Z4 · Recon Tech 2", defaultValue: "Originalwert-Wiederherstellung" },
  z4ReconTech3: { type: ControlType.String, title: "Z4 · Recon Tech 3", defaultValue: "Kontext-Neuzuordnung" },
  z4ReconTech4: { type: ControlType.String, title: "Z4 · Recon Tech 4", defaultValue: "Ausgabevalidierung" },
  z4LocalStrong: { type: ControlType.String, title: "Z4 · Local Guarantee Title", defaultValue: "Lokale Rekonstruktionsgarantie" },
  z4LocalBody: { type: ControlType.String, title: "Z4 · Local Guarantee Body", defaultValue: "Die Token-Map verbleibt ausschließlich im lokalen Speicher · <b>Die Ausgabe ist sofort geschäftlich einsetzbar</b>", displayTextArea: true },
  z4OutputLabel: { type: ControlType.String, title: "Z4 · Output Properties Label", defaultValue: "Ausgabeeigenschaften" },
  z4OutCheck1: { type: ControlType.String, title: "Z4 · Output Check 1", defaultValue: "Originalwerte wiederhergestellt" },
  z4OutCheck2: { type: ControlType.String, title: "Z4 · Output Check 2", defaultValue: "Kein externer Datenaustritt" },
  z4OutCheck3: { type: ControlType.String, title: "Z4 · Output Check 3", defaultValue: "Kontext vollständig erhalten" },
  z4OutCheck4: { type: ControlType.String, title: "Z4 · Output Check 4", defaultValue: "Direkt einsetzbare Ausgabe" },
  z4Chip1: { type: ControlType.String, title: "Z4 · Chip 1", defaultValue: "Automatische Wiederherstellung" },
  z4Chip2: { type: ControlType.String, title: "Z4 · Chip 2", defaultValue: "Nur lokal" },
  z4Chip3: { type: ControlType.String, title: "Z4 · Chip 3", defaultValue: "Datenspeicherort (Data Residency)" },
  coreTitle: { type: ControlType.String, title: "Core · Section Title", defaultValue: "6 Kernfunktionen" },
  coreWorkflowGroup: { type: ControlType.String, title: "Core · Workflow Group Label", defaultValue: "Was den Workflow antreibt" },
  coreApprovalGroup: { type: ControlType.String, title: "Core · Approval Group Label", defaultValue: "Was die Freigabe sichert" },
  core1Name: { type: ControlType.String, title: "Core 01 · Name", defaultValue: "Strukturerhaltend" },
  core1Desc: { type: ControlType.String, title: "Core 01 · Description", defaultValue: "Tabellen, Protokolle, Querverweise und Alarmsequenzen bleiben unverändert. Die KI verarbeitet die vollständige Datenstruktur — nicht nur Text.", displayTextArea: true },
  core2Name: { type: ControlType.String, title: "Core 02 · Name", defaultValue: "Ausführung in der Unternehmensumgebung" },
  core2Desc: { type: ControlType.String, title: "Core 02 · Description", defaultValue: "LLM Capsule wird innerhalb Ihrer bestehenden Infrastruktur betrieben. Die Anbindung erfolgt über API, SDK, Konnektoren oder Reverse Proxy — ohne Datenverkehrs-Umleitung.", displayTextArea: true },
  core3Name: { type: ControlType.String, title: "Core 03 · Name", defaultValue: "Geschäftsfertige Rekonstruktion" },
  core3Desc: { type: ControlType.String, title: "Core 03 · Description", defaultValue: "Die KI-Ausgabe wird mit den Originalwerten wiederhergestellt. Das Ergebnis fließt direkt in das auslösende Ticket oder den Workflow zurück.", displayTextArea: true },
  core4Name: { type: ControlType.String, title: "Core 04 · Name", defaultValue: "Unternehmenseigene Sensitivitätsdefinition" },
  core4Desc: { type: ControlType.String, title: "Core 04 · Description", defaultValue: "Ihr IT-Administrator legt fest, welche Daten als sensibel gelten. Benutzerdefinierte Marker, Regex-Regeln und Stufenrichtlinien — konfigurierbar in unter 5 Minuten.", displayTextArea: true },
  core5Name: { type: ControlType.String, title: "Core 05 · Name", defaultValue: "Zero Exposure &amp; Audit-Trail" },
  core5Desc: { type: ControlType.String, title: "Core 05 · Description", defaultValue: "Operative Rohdaten verbleiben innerhalb der Organisation. Jede Aktion wird protokolliert, mit Zeitstempel versehen und ist SIEM-exportierbar.", displayTextArea: true },
  core6Name: { type: ControlType.String, title: "Core 06 · Name", defaultValue: "Zeitabhängige Richtlinien" },
  core6Desc: { type: ControlType.String, title: "Core 06 · Description", defaultValue: "Sensitivitätskriterien ändern sich im Zeitverlauf. Capsule versioniert jeden Marker und jede Richtlinie für eine kontinuierliche DSGVO- und regulatorische Konformität.", displayTextArea: true },
  coreStrip: { type: ControlType.String, title: "Core · Bottom Strip", defaultValue: "01 und 02 sind Grundlage des fachlichen Austauschs. 05 und 06 sichern die regulatorische Freigabe." },
})
