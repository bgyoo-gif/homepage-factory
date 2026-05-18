// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-architecture-4zone-tsx.py
// To regenerate: python3 scripts/build-architecture-4zone-tsx.py
//
// Self-contained Framer Code Component for the 4-zone technical architecture page.
// Single file with locale dropdown (en/ko/de). Internal TRANSLATIONS dictionary
// drives default text per locale; individual Props remain for per-instance overrides.
// Demo data (David Lawson, CS-4203, tokenized samples), SVG icons, short ID labels
// (DB1/DB2/DB3, IN/PROCESS/OUT, ID/CD/BD), and step numbers remain hardcoded.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  locale?: "en" | "ko" | "de"
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

const TRANSLATIONS: Record<"en" | "ko" | "de", Record<string, string>> = {
  en: {
    eyebrow: "Technical view · zone-based architecture",
    sectionTitle: "The same architecture, in technical view",
    sectionDescription: "For architects and security reviewers — the full zone-based view of how operational data, encapsulation, and how any LLM interacts.",
    card1Num: "Zone 1 · Corporate Internal Network",
    card1Title: "Where the operational systems already live",
    card1Description: "Existing enterprise systems — ERP, CRM, Ticketing, DMS / ECM, Legacy DB, RAG Pipeline — stay in place. Nothing migrates. Capsule reads from them via REST, gRPC, JDBC, or Graph API depending on the source.",
    card2Num: "Zone 2 · DMZ — Demilitarized Zone",
    card2Title: "Where encapsulation happens",
    card2Description: "The Enhanced Encapsulation Layer detects sensitive elements, replaces them with safe tokens using structure-preserving, differential-privacy-based protection, and hands the capsule to the routing decision. Original values stay behind, retained in the local token map.",
    card3Num: "Zone 3 · In-House Team",
    card3Title: "Where governance and routing happen",
    card3Description: "Organizational policy, permissions, and domain context decide where the capsule is processed — an approved external LLM (Path A) or an on-prem local model (Path B). The decision is policy-driven per workflow, with full audit retained inside the organization.",
    card4Num: "Zone 4 · Local — Auto Reconstruction",
    card4Title: "Where the AI response becomes Business-Ready output",
    card4Description: "The AI response is automatically reconstructed from token to original value inside the organization only. Data that left the trust boundary cannot be reconstructed externally. The restored output is delivered back into the originating workflow.",
    step1Title: "Source Data",
    step2Title: "DP Encapsulation",
    step3Title: "AI Processing",
    step4Title: "Local Auto Reconstruction",
    z1Label: "Corporate Internal Network",
    z1Sub: "On-prem DB · Enterprise Systems",
    z2Label: "DMZ — Differential Privacy",
    z2Sub: "Same Org · EU Region · GDPR Ready",
    z3Label: "In-House Team",
    z3Sub: "Same Org · Anonymized LLM Proxy",
    z4Label: "Local — Auto Reconstruction",
    z4Sub: "Internal Only · No External Egress",
    conn1Label: "Unstructured Data In",
    conn2Label: "Protected Data Out",
    conn3Label: "AI Response (tokenized)",
    z1GroupTag: "Unstructured",
    z1Db1Sub: "Customer Data<br/>Personally Identifiable Info",
    z1Db2Sub: "Ticket Data<br/>CS Tickets / Status",
    z1Db3Sub: "Detail Data<br/>Unstructured Claims",
    z1FieldsLabel: "Raw Input Fields",
    z1F1Name: "Customer",
    z1F2Name: "Free Text",
    z1F2NameMid: "Ticket",
    z1GuardStrong: "PII guardrails protect fields. Enterprises run on structures.",
    z1GuardBody: "We are not criticizing PII filters. We handle a <b>different category of data</b> — table schemas, cross-references, alarm sequences, and ticket threads that simple field-level masking cannot preserve.",
    z1PluginTag: "Plug-in for AI Teams",
    z1Sys1Sub: "SAP·Oracle",
    z1Sys2Sub: "Salesforce",
    z1Sys3Sub: "Vector DB",
    z1Sys4Sub: "Oracle",
    z1Sys5Sub: "Jira·SN",
    z1Sys6Sub: "SharePoint",
    z1Sys1Name: "ERP",
    z1Sys2Name: "CRM",
    z1Sys3Name: "RAG",
    z1Sys4Name: "Legacy",
    z1Sys5Name: "Ticket",
    z1Sys6Name: "DMS",
    z1SysApi: "REST · gRPC · JDBC · Graph API",
    z1ZeroModStrong: "Zero System Modification",
    z1ZeroModBody: "Integrates via a single API call with zero modifications to existing ERP, CRM, or legacy systems",
    z2GroupTag: "Encapsulation Flow",
    z2InSub: "Raw Input<br/>Unstructured Data",
    z2ProcessSub: "DP Engine<br/>Differential Privacy",
    z2OutSub: "Encapsulated<br/>Token Capsule",
    z2BlockLabel: "Encapsulation",
    z2ProtectedBadge: "✓ Protected",
    z2F1Name: "Name",
    z2F2Name: "Champ Id",
    z2F3Name: "Free Text",
    z2DpEngineName: "DP Engine",
    z2DpEngineBadge: "epsilon-DP Active",
    z2DpTech1: "Noise Injection (Laplace)",
    z2DpTech2: "k-Anonymity Enforcement",
    z2DpTech3: "Semantic Tokenization",
    z2DpTech4: "Free-Text NER Masking",
    z2DmzStrong: "DMZ Guarantee",
    z2DmzBody: "Goes beyond simple encapsulation. Differential privacy techniques make original sensitive data <b>mathematically irreversible</b>",
    z3PipelineLabel: "LLM Pipeline",
    z3ProxyBadge: "LLM-a-Proxy",
    z3ProxySub: "Anonymized Routing",
    z3PathA: "Path A · External",
    z3PathB: "Path B · On-prem",
    z3DeployA1: "Public cloud",
    z3DeployA2: "Region-hosted",
    z3DeployB1: "Private",
    z3DeployB2: "On-prem",
    z3SwapNote: "swap any model — capsule contract stays the same",
    z3GuardStrong: "No Direct Access to Source DB",
    z3GuardBody: "AI teams never touch the source database. They only receive structure-preserved, differentially-private data",
    z3IsoLabel: "Privacy Isolation Module",
    z3PdescHead: "PDESC / ISOLA",
    z3PdescItem1: "Privacy Descriptor",
    z3PdescItem2: "Isolated Computation Zone",
    z3PdescItem3: "Output De-identification",
    z3PdescFoot: "Re-identification attempts contained · Output validated",
    z3ComplianceLabel: "Compliance",
    z3Compliance1: "EU GDPR",
    z3Compliance2: "EU Region",
    z4GroupTag: "Reconstruction Flow",
    z4InSub: "AI Token<br/>Tokenized Response",
    z4ProcessSub: "Reconstruction<br/>Local Restoration",
    z4OutSub: "Original Value<br/>Business-Ready",
    z4BlockLabel: "Token → Original",
    z4F1Name: "Customer",
    z4F2Name: "Ticket",
    z4F3Name: "Details",
    z4ReconName: "Reconstruction",
    z4ReconBadge: "Local Only",
    z4ReconTech1: "Token Map Lookup",
    z4ReconTech2: "Original Value Restore",
    z4ReconTech3: "Context Re-binding",
    z4ReconTech4: "Output Validation",
    z4LocalStrong: "Local Reconstruction Guarantee",
    z4LocalBody: "Token map exists only in local storage · <b>Delivers Business-Ready Output instantly</b>",
    z4OutputLabel: "Output Properties",
    z4OutCheck1: "Original Values Restored",
    z4OutCheck2: "Zero External Exposure",
    z4OutCheck3: "Context Fully Preserved",
    z4OutCheck4: "Business-Ready Output",
    z4Chip1: "Auto Restore",
    z4Chip2: "Local Only",
    z4Chip3: "Data Residency",
    coreTitle: "6 Core Capabilities",
    coreWorkflowGroup: "What Makes The Workflow Run",
    coreApprovalGroup: "What Gets The Approval",
    core1Name: "Structure-Preserving",
    core1Desc: "Tables, logs, cross-references, and alarm sequences stay intact. AI reads structure, not just text.",
    core2Name: "Enterprise Environment Execution",
    core2Desc: "Deploys inside your environment. Connects via API, SDK, connectors, or reverse proxy. No traffic re-routing.",
    core3Name: "Business-Ready Reconstruction",
    core3Desc: "AI output is restored with real values. The result goes straight back to the originating ticket or workflow.",
    core4Name: "Enterprise Context Control",
    core4Desc: "Your IT admin defines what counts as sensitive. Custom markers, regex rules, and tier policies. Set in 5 minutes.",
    core5Name: "Zero Exposure &amp; Audit",
    core5Desc: "Raw operational data stays inside. Every action logged, timestamped, SIEM-exportable.",
    core6Name: "Time-Shifting Policy",
    core6Desc: "Sensitivity changes over time. Capsule versions every marker and policy for continuous compliance.",
    coreStrip: "01 and 02 lead the conversation. 05 and 06 anchor the approval.",
  },
  ko: {
    eyebrow: "기술적 관점 · 존 기반 아키텍처",
    sectionTitle: "같은 아키텍처, 기술적 관점에서",
    sectionDescription: "아키텍트와 보안 검토자를 위한 자료 — 운영 데이터, 캡슐화, 그리고 어떤 LLM이든 어떻게 상호작용하는지에 대한 존 기반 전체 뷰.",
    card1Num: "Zone 1 · 기업 내부 네트워크",
    card1Title: "운영 시스템이 이미 있는 곳",
    card1Description: "기존 엔터프라이즈 시스템 — ERP, CRM, 티켓팅, DMS / ECM, 레거시 DB, RAG 파이프라인 — 그대로 유지됩니다. 마이그레이션은 없습니다. Capsule은 소스에 따라 REST, gRPC, JDBC, 또는 Graph API를 통해 이들로부터 읽어옵니다.",
    card2Num: "Zone 2 · DMZ — 비무장지대",
    card2Title: "캡슐화가 일어나는 곳",
    card2Description: "Enhanced Encapsulation Layer가 민감한 요소를 탐지하고, 문서 구조 보존·차등 프라이버시 기반 보호로 안전한 토큰으로 대체한 뒤, 캡슐을 라우팅 결정에 전달합니다. 원본 값은 로컬 토큰 맵에 보관된 채 남습니다.",
    card3Num: "Zone 3 · 사내 팀",
    card3Title: "거버넌스와 라우팅이 일어나는 곳",
    card3Description: "조직 정책, 권한, 도메인 컨텍스트가 캡슐을 어디에서 처리할지 결정합니다 — 승인된 외부 LLM(Path A) 또는 온프레미스 로컬 모델(Path B). 결정은 워크플로우별 정책 기반이며, 완전한 감사 이력은 조직 내부에 보관됩니다.",
    card4Num: "Zone 4 · 로컬 — 자동 복원",
    card4Title: "AI 응답이 비즈니스에 바로 쓰일 수 있는 출력이 되는 곳",
    card4Description: "AI 응답은 조직 내부에서만 토큰에서 원본 값으로 자동 복원됩니다. 신뢰 경계를 벗어난 데이터는 외부에서 복원될 수 없습니다. 복원된 출력은 원래의 워크플로우로 다시 전달됩니다.",
    step1Title: "소스 데이터",
    step2Title: "DP 캡슐화",
    step3Title: "AI 처리",
    step4Title: "로컬 자동 복원",
    z1Label: "기업 내부 네트워크",
    z1Sub: "온프레미스 DB · 엔터프라이즈 시스템",
    z2Label: "DMZ — 차등 프라이버시",
    z2Sub: "동일 조직 · EU 리전 · GDPR 대응",
    z3Label: "사내 팀",
    z3Sub: "동일 조직 · 익명화 LLM 프록시",
    z4Label: "로컬 — 자동 복원",
    z4Sub: "내부 전용 · 외부 반출 없음",
    conn1Label: "비정형 데이터 입력",
    conn2Label: "보호된 데이터 출력",
    conn3Label: "AI 응답 (토큰화)",
    z1GroupTag: "비정형",
    z1Db1Sub: "고객 데이터<br/>개인 식별 정보(PII)",
    z1Db2Sub: "티켓 데이터<br/>CS 티켓 / 상태",
    z1Db3Sub: "상세 데이터<br/>비정형 클레임",
    z1FieldsLabel: "원본 입력 필드",
    z1F1Name: "고객",
    z1F2Name: "자유 입력",
    z1F2NameMid: "티켓",
    z1GuardStrong: "PII 가드레일은 필드를 보호합니다. 기업은 구조 위에서 운영됩니다.",
    z1GuardBody: "PII 필터를 비판하는 것이 아닙니다. 우리는 <b>다른 범주의 데이터</b>를 다룹니다 — 단순 필드 수준 마스킹으로는 보존할 수 없는 테이블 스키마, 상호 참조, 알람 시퀀스, 티켓 스레드입니다.",
    z1PluginTag: "AI 팀을 위한 플러그인",
    z1Sys1Sub: "SAP·Oracle",
    z1Sys2Sub: "Salesforce",
    z1Sys3Sub: "Vector DB",
    z1Sys4Sub: "Oracle",
    z1Sys5Sub: "Jira·SN",
    z1Sys6Sub: "SharePoint",
    z1Sys1Name: "ERP",
    z1Sys2Name: "CRM",
    z1Sys3Name: "RAG",
    z1Sys4Name: "레거시",
    z1Sys5Name: "티켓",
    z1Sys6Name: "DMS",
    z1SysApi: "REST · gRPC · JDBC · Graph API",
    z1ZeroModStrong: "시스템 수정 없음",
    z1ZeroModBody: "기존 ERP, CRM, 레거시 시스템에 어떠한 수정도 없이 단일 API 호출로 연동됩니다.",
    z2GroupTag: "캡슐화 플로우",
    z2InSub: "원본 입력<br/>비정형 데이터",
    z2ProcessSub: "DP 엔진<br/>차등 프라이버시",
    z2OutSub: "캡슐화됨<br/>토큰 캡슐",
    z2BlockLabel: "캡슐화",
    z2ProtectedBadge: "✓ 보호됨",
    z2F1Name: "이름",
    z2F2Name: "Champ Id",
    z2F3Name: "자유 입력",
    z2DpEngineName: "DP 엔진",
    z2DpEngineBadge: "epsilon-DP 활성",
    z2DpTech1: "노이즈 주입 (Laplace)",
    z2DpTech2: "k-Anonymity 적용",
    z2DpTech3: "의미 기반 토큰화",
    z2DpTech4: "자유 텍스트 NER 마스킹",
    z2DmzStrong: "DMZ 보장",
    z2DmzBody: "단순 캡슐화를 넘어섭니다. 차등 프라이버시 기법으로 원본 민감 데이터를 <b>수학적으로 복원 불가능하게</b> 만듭니다.",
    z3PipelineLabel: "LLM 파이프라인",
    z3ProxyBadge: "LLM-a-Proxy",
    z3ProxySub: "익명화 라우팅",
    z3PathA: "Path A · 외부",
    z3PathB: "Path B · 온프레미스",
    z3DeployA1: "퍼블릭 클라우드",
    z3DeployA2: "리전 호스팅",
    z3DeployB1: "프라이빗",
    z3DeployB2: "온프레미스",
    z3SwapNote: "어떤 모델로 교체해도 — 캡슐 계약은 그대로입니다.",
    z3GuardStrong: "소스 DB 직접 접근 없음",
    z3GuardBody: "AI 팀은 소스 데이터베이스에 절대 접근하지 않습니다. 구조 보존·차등 프라이버시 적용 데이터만 전달받습니다.",
    z3IsoLabel: "프라이버시 격리 모듈",
    z3PdescHead: "PDESC / ISOLA",
    z3PdescItem1: "프라이버시 디스크립터",
    z3PdescItem2: "격리 연산 존",
    z3PdescItem3: "출력 비식별화",
    z3PdescFoot: "재식별 시도 차단 · 출력 검증 완료",
    z3ComplianceLabel: "컴플라이언스",
    z3Compliance1: "EU GDPR",
    z3Compliance2: "EU 리전",
    z4GroupTag: "복원 플로우",
    z4InSub: "AI 토큰<br/>토큰화된 응답",
    z4ProcessSub: "복원<br/>로컬 복구",
    z4OutSub: "원본 값<br/>비즈니스 즉시 활용",
    z4BlockLabel: "토큰 → 원본",
    z4F1Name: "고객",
    z4F2Name: "티켓",
    z4F3Name: "상세",
    z4ReconName: "복원",
    z4ReconBadge: "로컬 전용",
    z4ReconTech1: "토큰 맵 조회",
    z4ReconTech2: "원본 값 복원",
    z4ReconTech3: "컨텍스트 재결합",
    z4ReconTech4: "출력 검증",
    z4LocalStrong: "로컬 복원 보장",
    z4LocalBody: "토큰 맵은 로컬 스토리지에만 존재합니다 · <b>즉시 비즈니스 활용 가능한 출력을 제공합니다</b>",
    z4OutputLabel: "출력 속성",
    z4OutCheck1: "원본 값 복원 완료",
    z4OutCheck2: "외부 노출 없음",
    z4OutCheck3: "컨텍스트 완전 보존",
    z4OutCheck4: "비즈니스 즉시 활용 출력",
    z4Chip1: "자동 복원",
    z4Chip2: "로컬 전용",
    z4Chip3: "데이터 레지던시",
    coreTitle: "6가지 핵심 기능",
    coreWorkflowGroup: "워크플로우를 작동시키는 것",
    coreApprovalGroup: "승인을 이끌어내는 것",
    core1Name: "구조 보존",
    core1Desc: "테이블, 로그, 상호 참조, 알람 시퀀스가 그대로 유지됩니다. AI는 텍스트뿐만 아니라 구조를 읽습니다.",
    core2Name: "엔터프라이즈 환경 내 실행",
    core2Desc: "고객사 환경 내부에 배포됩니다. API, SDK, 커넥터, 또는 리버스 프록시로 연결합니다. 트래픽 재라우팅이 없습니다.",
    core3Name: "비즈니스 즉시 활용 복원",
    core3Desc: "AI 출력이 실제 값으로 복원됩니다. 결과물은 원래의 티켓이나 워크플로우로 바로 반환됩니다.",
    core4Name: "조직 정의 민감정보",
    core4Desc: "IT 관리자가 직접 민감 기준을 정의합니다. 커스텀 마커, 정규식 규칙, 등급 정책을 5분 안에 설정합니다.",
    core5Name: "Zero Exposure &amp; 감사",
    core5Desc: "원본 운영 데이터는 내부에 머뭅니다. 모든 행위가 기록·타임스탬프 처리되며 SIEM으로 내보낼 수 있습니다.",
    core6Name: "시간 변동 정책",
    core6Desc: "민감도 기준은 시간이 지남에 따라 변합니다. Capsule은 지속적인 규제 대응을 위해 모든 마커와 정책을 버전 관리합니다.",
    coreStrip: "01·02가 대화를 이끌고, 05·06이 승인을 뒷받침합니다.",
  },
  de: {
    eyebrow: "Technische Ansicht · Zonenbasierte Architektur",
    sectionTitle: "Dieselbe Architektur — aus technischer Sicht",
    sectionDescription: "Für Architekten und Sicherheitsprüfer: die vollständige zonenbasierte Sicht auf operative Daten, Kapselung und LLM-Integration.",
    card1Num: "Zone 1 · Unternehmensinternes Netzwerk",
    card1Title: "Wo die operativen Systeme bereits laufen",
    card1Description: "Bestehende Unternehmenssysteme — ERP, CRM, Ticketing, DMS / ECM, Legacy-DB, RAG-Pipeline — bleiben unverändert. Keine Migration. Capsule liest sie je nach Quelle über REST, gRPC, JDBC oder Graph API aus.",
    card2Num: "Zone 2 · DMZ — Demilitarisierte Zone",
    card2Title: "Wo die Kapselung stattfindet",
    card2Description: "Die Enhanced Encapsulation Layer erkennt sensible Elemente, ersetzt sie durch sichere Token mittels strukturerhaltender, Differential-Privacy-basierter Schutzverfahren und übergibt die Kapsel an die Routing-Entscheidung. Originalwerte verbleiben lokal im Token-Map.",
    card3Num: "Zone 3 · Internes Team",
    card3Title: "Wo Governance und Routing stattfinden",
    card3Description: "Organisationsrichtlinien, Berechtigungen und Domänenkontext entscheiden, wo die Kapsel verarbeitet wird — ein zugelassener externer LLM (Path A) oder ein lokales On-Prem-Modell (Path B). Die Entscheidung erfolgt richtlinienbasiert pro Workflow, mit vollständigem Audit-Trail innerhalb der Organisation.",
    card4Num: "Zone 4 · Lokal — Automatische Rekonstruktion",
    card4Title: "Wo die KI-Antwort zu geschäftsfertiger Ausgabe wird",
    card4Description: "Die KI-Antwort wird ausschließlich innerhalb der Organisation automatisch vom Token in den Originalwert rückgeführt. Daten, die die Vertrauensgrenze verlassen haben, können extern nicht rekonstruiert werden. Die wiederhergestellte Ausgabe wird in den ursprünglichen Workflow zurückgespielt.",
    step1Title: "Quelldaten",
    step2Title: "DP-Kapselung",
    step3Title: "KI-Verarbeitung",
    step4Title: "Lokale automatische Rekonstruktion",
    z1Label: "Unternehmensinternes Netzwerk",
    z1Sub: "On-Premise-DB · Unternehmenssysteme",
    z2Label: "DMZ — Differential Privacy",
    z2Sub: "Gleiche Organisation · EU-Region · DSGVO-konform",
    z3Label: "Internes Team",
    z3Sub: "Gleiche Organisation · Anonymisierter LLM-Proxy",
    z4Label: "Lokal — Automatische Rekonstruktion",
    z4Sub: "Nur intern · Kein externer Datenabfluss",
    conn1Label: "Unstrukturierte Daten — Eingang",
    conn2Label: "Geschützte Daten — Ausgang",
    conn3Label: "KI-Antwort (tokenisiert)",
    z1GroupTag: "Unstrukturiert",
    z1Db1Sub: "Kundendaten<br/>Personenbezogene Informationen",
    z1Db2Sub: "Ticketdaten<br/>Support-Tickets / Status",
    z1Db3Sub: "Detaildaten<br/>Unstrukturierte Schadenmeldungen",
    z1FieldsLabel: "Rohdatenfelder",
    z1F1Name: "Kunde",
    z1F2Name: "Freitext",
    z1F2NameMid: "Ticket",
    z1GuardStrong: "PII-Filter schützen einzelne Felder. Unternehmen arbeiten auf Basis von Strukturen.",
    z1GuardBody: "PII-Filter sind nicht das Problem. LLM Capsule adressiert eine <b>andere Datenkategorie</b> — Tabellenschemata, Querverweise, Alarmsequenzen und Ticket-Threads, die einfaches Feldmaskieren nicht erhalten kann.",
    z1PluginTag: "Plug-in für KI-Teams",
    z1Sys1Sub: "SAP·Oracle",
    z1Sys2Sub: "Salesforce",
    z1Sys3Sub: "Vector DB",
    z1Sys4Sub: "Oracle",
    z1Sys5Sub: "Jira·SN",
    z1Sys6Sub: "SharePoint",
    z1Sys1Name: "ERP",
    z1Sys2Name: "CRM",
    z1Sys3Name: "RAG",
    z1Sys4Name: "Legacy",
    z1Sys5Name: "Ticket",
    z1Sys6Name: "DMS",
    z1SysApi: "REST · gRPC · JDBC · Graph API",
    z1ZeroModStrong: "Keine Systemänderungen erforderlich",
    z1ZeroModBody: "Die Integration erfolgt über einen einzelnen API-Aufruf — ohne Änderungen an bestehenden ERP-, CRM- oder Legacy-Systemen.",
    z2GroupTag: "Kapselungsfluss",
    z2InSub: "Roheingabe<br/>Unstrukturierte Daten",
    z2ProcessSub: "DP Engine<br/>Differential Privacy",
    z2OutSub: "Gekapselt<br/>Token-Kapsel",
    z2BlockLabel: "Kapselung",
    z2ProtectedBadge: "✓ Geschützt",
    z2F1Name: "Name",
    z2F2Name: "Champ Id",
    z2F3Name: "Freitext",
    z2DpEngineName: "DP Engine",
    z2DpEngineBadge: "epsilon-DP aktiv",
    z2DpTech1: "Rausch-Injektion (Laplace)",
    z2DpTech2: "k-Anonymität-Durchsetzung",
    z2DpTech3: "Semantische Tokenisierung",
    z2DpTech4: "Freitext-NER-Maskierung",
    z2DmzStrong: "DMZ-Garantie",
    z2DmzBody: "Über einfache Kapselung hinaus: Differential-Privacy-Verfahren machen ursprüngliche sensible Daten <b>mathematisch irreversibel</b>.",
    z3PipelineLabel: "LLM-Pipeline",
    z3ProxyBadge: "LLM-a-Proxy",
    z3ProxySub: "Anonymisiertes Routing",
    z3PathA: "Path A · Extern",
    z3PathB: "Path B · On-Premise",
    z3DeployA1: "Public Cloud",
    z3DeployA2: "Region-gehostet",
    z3DeployB1: "Privat",
    z3DeployB2: "On-Premise",
    z3SwapNote: "Modell austauschbar — der Capsule-Vertrag bleibt unverändert.",
    z3GuardStrong: "Kein direkter Zugriff auf die Quelldatenbank",
    z3GuardBody: "KI-Teams erhalten keinen Zugriff auf die Quelldatenbank. Sie empfangen ausschließlich Differential-Privacy-geschützte Daten mit erhaltener Datenstruktur.",
    z3IsoLabel: "Datenschutz-Isolationsmodul",
    z3PdescHead: "PDESC / ISOLA",
    z3PdescItem1: "Datenschutz-Deskriptor",
    z3PdescItem2: "Isolierte Rechenzone",
    z3PdescItem3: "Ausgabe-Anonymisierung",
    z3PdescFoot: "Re-Identifizierungsversuche abgewehrt · Ausgabe validiert",
    z3ComplianceLabel: "Compliance",
    z3Compliance1: "DSGVO (GDPR)",
    z3Compliance2: "EU-Region",
    z4GroupTag: "Rekonstruktionsfluss",
    z4InSub: "KI-Token<br/>Tokenisierte Antwort",
    z4ProcessSub: "Rekonstruktion<br/>Lokale Wiederherstellung",
    z4OutSub: "Originalwert<br/>Direkt einsatzbereit",
    z4BlockLabel: "Token → Original",
    z4F1Name: "Kunde",
    z4F2Name: "Ticket",
    z4F3Name: "Details",
    z4ReconName: "Rekonstruktion",
    z4ReconBadge: "Nur lokal",
    z4ReconTech1: "Token-Map-Abfrage",
    z4ReconTech2: "Originalwert-Wiederherstellung",
    z4ReconTech3: "Kontext-Neuzuordnung",
    z4ReconTech4: "Ausgabevalidierung",
    z4LocalStrong: "Lokale Rekonstruktionsgarantie",
    z4LocalBody: "Die Token-Map verbleibt ausschließlich im lokalen Speicher · <b>Die Ausgabe ist sofort geschäftlich einsetzbar</b>",
    z4OutputLabel: "Ausgabeeigenschaften",
    z4OutCheck1: "Originalwerte wiederhergestellt",
    z4OutCheck2: "Kein externer Datenaustritt",
    z4OutCheck3: "Kontext vollständig erhalten",
    z4OutCheck4: "Direkt einsetzbare Ausgabe",
    z4Chip1: "Automatische Wiederherstellung",
    z4Chip2: "Nur lokal",
    z4Chip3: "Datenspeicherort (Data Residency)",
    coreTitle: "6 Kernfunktionen",
    coreWorkflowGroup: "Was den Workflow antreibt",
    coreApprovalGroup: "Was die Freigabe sichert",
    core1Name: "Strukturerhaltend",
    core1Desc: "Tabellen, Protokolle, Querverweise und Alarmsequenzen bleiben unverändert. Die KI verarbeitet die vollständige Datenstruktur — nicht nur Text.",
    core2Name: "Ausführung in der Unternehmensumgebung",
    core2Desc: "LLM Capsule wird innerhalb Ihrer bestehenden Infrastruktur betrieben. Die Anbindung erfolgt über API, SDK, Konnektoren oder Reverse Proxy — ohne Datenverkehrs-Umleitung.",
    core3Name: "Geschäftsfertige Rekonstruktion",
    core3Desc: "Die KI-Ausgabe wird mit den Originalwerten wiederhergestellt. Das Ergebnis fließt direkt in das auslösende Ticket oder den Workflow zurück.",
    core4Name: "Unternehmenseigene Sensitivitätsdefinition",
    core4Desc: "Ihr IT-Administrator legt fest, welche Daten als sensibel gelten. Benutzerdefinierte Marker, Regex-Regeln und Stufenrichtlinien — konfigurierbar in unter 5 Minuten.",
    core5Name: "Zero Exposure &amp; Audit-Trail",
    core5Desc: "Operative Rohdaten verbleiben innerhalb der Organisation. Jede Aktion wird protokolliert, mit Zeitstempel versehen und ist SIEM-exportierbar.",
    core6Name: "Zeitabhängige Richtlinien",
    core6Desc: "Sensitivitätskriterien ändern sich im Zeitverlauf. Capsule versioniert jeden Marker und jede Richtlinie für eine kontinuierliche DSGVO- und regulatorische Konformität.",
    coreStrip: "01 und 02 sind Grundlage des fachlichen Austauschs. 05 und 06 sichern die regulatorische Freigabe.",
  },
}

export default function ArchitectureFourZoneTechnical({
  locale = "en",
  eyebrow = "",
  sectionTitle = "",
  sectionDescription = "",
  card1Num = "",
  card1Title = "",
  card1Description = "",
  card2Num = "",
  card2Title = "",
  card2Description = "",
  card3Num = "",
  card3Title = "",
  card3Description = "",
  card4Num = "",
  card4Title = "",
  card4Description = "",
  step1Title = "",
  step2Title = "",
  step3Title = "",
  step4Title = "",
  z1Label = "",
  z1Sub = "",
  z2Label = "",
  z2Sub = "",
  z3Label = "",
  z3Sub = "",
  z4Label = "",
  z4Sub = "",
  conn1Label = "",
  conn2Label = "",
  conn3Label = "",
  z1GroupTag = "",
  z1Db1Sub = "",
  z1Db2Sub = "",
  z1Db3Sub = "",
  z1FieldsLabel = "",
  z1F1Name = "",
  z1F2Name = "",
  z1F2NameMid = "",
  z1GuardStrong = "",
  z1GuardBody = "",
  z1PluginTag = "",
  z1Sys1Sub = "",
  z1Sys2Sub = "",
  z1Sys3Sub = "",
  z1Sys4Sub = "",
  z1Sys5Sub = "",
  z1Sys6Sub = "",
  z1Sys1Name = "",
  z1Sys2Name = "",
  z1Sys3Name = "",
  z1Sys4Name = "",
  z1Sys5Name = "",
  z1Sys6Name = "",
  z1SysApi = "",
  z1ZeroModStrong = "",
  z1ZeroModBody = "",
  z2GroupTag = "",
  z2InSub = "",
  z2ProcessSub = "",
  z2OutSub = "",
  z2BlockLabel = "",
  z2ProtectedBadge = "",
  z2F1Name = "",
  z2F2Name = "",
  z2F3Name = "",
  z2DpEngineName = "",
  z2DpEngineBadge = "",
  z2DpTech1 = "",
  z2DpTech2 = "",
  z2DpTech3 = "",
  z2DpTech4 = "",
  z2DmzStrong = "",
  z2DmzBody = "",
  z3PipelineLabel = "",
  z3ProxyBadge = "",
  z3ProxySub = "",
  z3PathA = "",
  z3PathB = "",
  z3DeployA1 = "",
  z3DeployA2 = "",
  z3DeployB1 = "",
  z3DeployB2 = "",
  z3SwapNote = "",
  z3GuardStrong = "",
  z3GuardBody = "",
  z3IsoLabel = "",
  z3PdescHead = "",
  z3PdescItem1 = "",
  z3PdescItem2 = "",
  z3PdescItem3 = "",
  z3PdescFoot = "",
  z3ComplianceLabel = "",
  z3Compliance1 = "",
  z3Compliance2 = "",
  z4GroupTag = "",
  z4InSub = "",
  z4ProcessSub = "",
  z4OutSub = "",
  z4BlockLabel = "",
  z4F1Name = "",
  z4F2Name = "",
  z4F3Name = "",
  z4ReconName = "",
  z4ReconBadge = "",
  z4ReconTech1 = "",
  z4ReconTech2 = "",
  z4ReconTech3 = "",
  z4ReconTech4 = "",
  z4LocalStrong = "",
  z4LocalBody = "",
  z4OutputLabel = "",
  z4OutCheck1 = "",
  z4OutCheck2 = "",
  z4OutCheck3 = "",
  z4OutCheck4 = "",
  z4Chip1 = "",
  z4Chip2 = "",
  z4Chip3 = "",
  coreTitle = "",
  coreWorkflowGroup = "",
  coreApprovalGroup = "",
  core1Name = "",
  core1Desc = "",
  core2Name = "",
  core2Desc = "",
  core3Name = "",
  core3Desc = "",
  core4Name = "",
  core4Desc = "",
  core5Name = "",
  core5Desc = "",
  core6Name = "",
  core6Desc = "",
  coreStrip = "",
}: Props) {
  const T = TRANSLATIONS[locale] || TRANSLATIONS.en

  const _eyebrow = eyebrow || T["eyebrow"] || TRANSLATIONS.en["eyebrow"]
  const _sectionTitle = sectionTitle || T["sectionTitle"] || TRANSLATIONS.en["sectionTitle"]
  const _sectionDescription = sectionDescription || T["sectionDescription"] || TRANSLATIONS.en["sectionDescription"]
  const _card1Num = card1Num || T["card1Num"] || TRANSLATIONS.en["card1Num"]
  const _card1Title = card1Title || T["card1Title"] || TRANSLATIONS.en["card1Title"]
  const _card1Description = card1Description || T["card1Description"] || TRANSLATIONS.en["card1Description"]
  const _card2Num = card2Num || T["card2Num"] || TRANSLATIONS.en["card2Num"]
  const _card2Title = card2Title || T["card2Title"] || TRANSLATIONS.en["card2Title"]
  const _card2Description = card2Description || T["card2Description"] || TRANSLATIONS.en["card2Description"]
  const _card3Num = card3Num || T["card3Num"] || TRANSLATIONS.en["card3Num"]
  const _card3Title = card3Title || T["card3Title"] || TRANSLATIONS.en["card3Title"]
  const _card3Description = card3Description || T["card3Description"] || TRANSLATIONS.en["card3Description"]
  const _card4Num = card4Num || T["card4Num"] || TRANSLATIONS.en["card4Num"]
  const _card4Title = card4Title || T["card4Title"] || TRANSLATIONS.en["card4Title"]
  const _card4Description = card4Description || T["card4Description"] || TRANSLATIONS.en["card4Description"]
  const _step1Title = step1Title || T["step1Title"] || TRANSLATIONS.en["step1Title"]
  const _step2Title = step2Title || T["step2Title"] || TRANSLATIONS.en["step2Title"]
  const _step3Title = step3Title || T["step3Title"] || TRANSLATIONS.en["step3Title"]
  const _step4Title = step4Title || T["step4Title"] || TRANSLATIONS.en["step4Title"]
  const _z1Label = z1Label || T["z1Label"] || TRANSLATIONS.en["z1Label"]
  const _z1Sub = z1Sub || T["z1Sub"] || TRANSLATIONS.en["z1Sub"]
  const _z2Label = z2Label || T["z2Label"] || TRANSLATIONS.en["z2Label"]
  const _z2Sub = z2Sub || T["z2Sub"] || TRANSLATIONS.en["z2Sub"]
  const _z3Label = z3Label || T["z3Label"] || TRANSLATIONS.en["z3Label"]
  const _z3Sub = z3Sub || T["z3Sub"] || TRANSLATIONS.en["z3Sub"]
  const _z4Label = z4Label || T["z4Label"] || TRANSLATIONS.en["z4Label"]
  const _z4Sub = z4Sub || T["z4Sub"] || TRANSLATIONS.en["z4Sub"]
  const _conn1Label = conn1Label || T["conn1Label"] || TRANSLATIONS.en["conn1Label"]
  const _conn2Label = conn2Label || T["conn2Label"] || TRANSLATIONS.en["conn2Label"]
  const _conn3Label = conn3Label || T["conn3Label"] || TRANSLATIONS.en["conn3Label"]
  const _z1GroupTag = z1GroupTag || T["z1GroupTag"] || TRANSLATIONS.en["z1GroupTag"]
  const _z1Db1Sub = z1Db1Sub || T["z1Db1Sub"] || TRANSLATIONS.en["z1Db1Sub"]
  const _z1Db2Sub = z1Db2Sub || T["z1Db2Sub"] || TRANSLATIONS.en["z1Db2Sub"]
  const _z1Db3Sub = z1Db3Sub || T["z1Db3Sub"] || TRANSLATIONS.en["z1Db3Sub"]
  const _z1FieldsLabel = z1FieldsLabel || T["z1FieldsLabel"] || TRANSLATIONS.en["z1FieldsLabel"]
  const _z1F1Name = z1F1Name || T["z1F1Name"] || TRANSLATIONS.en["z1F1Name"]
  const _z1F2Name = z1F2Name || T["z1F2Name"] || TRANSLATIONS.en["z1F2Name"]
  const _z1F2NameMid = z1F2NameMid || T["z1F2NameMid"] || TRANSLATIONS.en["z1F2NameMid"]
  const _z1GuardStrong = z1GuardStrong || T["z1GuardStrong"] || TRANSLATIONS.en["z1GuardStrong"]
  const _z1GuardBody = z1GuardBody || T["z1GuardBody"] || TRANSLATIONS.en["z1GuardBody"]
  const _z1PluginTag = z1PluginTag || T["z1PluginTag"] || TRANSLATIONS.en["z1PluginTag"]
  const _z1Sys1Sub = z1Sys1Sub || T["z1Sys1Sub"] || TRANSLATIONS.en["z1Sys1Sub"]
  const _z1Sys2Sub = z1Sys2Sub || T["z1Sys2Sub"] || TRANSLATIONS.en["z1Sys2Sub"]
  const _z1Sys3Sub = z1Sys3Sub || T["z1Sys3Sub"] || TRANSLATIONS.en["z1Sys3Sub"]
  const _z1Sys4Sub = z1Sys4Sub || T["z1Sys4Sub"] || TRANSLATIONS.en["z1Sys4Sub"]
  const _z1Sys5Sub = z1Sys5Sub || T["z1Sys5Sub"] || TRANSLATIONS.en["z1Sys5Sub"]
  const _z1Sys6Sub = z1Sys6Sub || T["z1Sys6Sub"] || TRANSLATIONS.en["z1Sys6Sub"]
  const _z1Sys1Name = z1Sys1Name || T["z1Sys1Name"] || TRANSLATIONS.en["z1Sys1Name"]
  const _z1Sys2Name = z1Sys2Name || T["z1Sys2Name"] || TRANSLATIONS.en["z1Sys2Name"]
  const _z1Sys3Name = z1Sys3Name || T["z1Sys3Name"] || TRANSLATIONS.en["z1Sys3Name"]
  const _z1Sys4Name = z1Sys4Name || T["z1Sys4Name"] || TRANSLATIONS.en["z1Sys4Name"]
  const _z1Sys5Name = z1Sys5Name || T["z1Sys5Name"] || TRANSLATIONS.en["z1Sys5Name"]
  const _z1Sys6Name = z1Sys6Name || T["z1Sys6Name"] || TRANSLATIONS.en["z1Sys6Name"]
  const _z1SysApi = z1SysApi || T["z1SysApi"] || TRANSLATIONS.en["z1SysApi"]
  const _z1ZeroModStrong = z1ZeroModStrong || T["z1ZeroModStrong"] || TRANSLATIONS.en["z1ZeroModStrong"]
  const _z1ZeroModBody = z1ZeroModBody || T["z1ZeroModBody"] || TRANSLATIONS.en["z1ZeroModBody"]
  const _z2GroupTag = z2GroupTag || T["z2GroupTag"] || TRANSLATIONS.en["z2GroupTag"]
  const _z2InSub = z2InSub || T["z2InSub"] || TRANSLATIONS.en["z2InSub"]
  const _z2ProcessSub = z2ProcessSub || T["z2ProcessSub"] || TRANSLATIONS.en["z2ProcessSub"]
  const _z2OutSub = z2OutSub || T["z2OutSub"] || TRANSLATIONS.en["z2OutSub"]
  const _z2BlockLabel = z2BlockLabel || T["z2BlockLabel"] || TRANSLATIONS.en["z2BlockLabel"]
  const _z2ProtectedBadge = z2ProtectedBadge || T["z2ProtectedBadge"] || TRANSLATIONS.en["z2ProtectedBadge"]
  const _z2F1Name = z2F1Name || T["z2F1Name"] || TRANSLATIONS.en["z2F1Name"]
  const _z2F2Name = z2F2Name || T["z2F2Name"] || TRANSLATIONS.en["z2F2Name"]
  const _z2F3Name = z2F3Name || T["z2F3Name"] || TRANSLATIONS.en["z2F3Name"]
  const _z2DpEngineName = z2DpEngineName || T["z2DpEngineName"] || TRANSLATIONS.en["z2DpEngineName"]
  const _z2DpEngineBadge = z2DpEngineBadge || T["z2DpEngineBadge"] || TRANSLATIONS.en["z2DpEngineBadge"]
  const _z2DpTech1 = z2DpTech1 || T["z2DpTech1"] || TRANSLATIONS.en["z2DpTech1"]
  const _z2DpTech2 = z2DpTech2 || T["z2DpTech2"] || TRANSLATIONS.en["z2DpTech2"]
  const _z2DpTech3 = z2DpTech3 || T["z2DpTech3"] || TRANSLATIONS.en["z2DpTech3"]
  const _z2DpTech4 = z2DpTech4 || T["z2DpTech4"] || TRANSLATIONS.en["z2DpTech4"]
  const _z2DmzStrong = z2DmzStrong || T["z2DmzStrong"] || TRANSLATIONS.en["z2DmzStrong"]
  const _z2DmzBody = z2DmzBody || T["z2DmzBody"] || TRANSLATIONS.en["z2DmzBody"]
  const _z3PipelineLabel = z3PipelineLabel || T["z3PipelineLabel"] || TRANSLATIONS.en["z3PipelineLabel"]
  const _z3ProxyBadge = z3ProxyBadge || T["z3ProxyBadge"] || TRANSLATIONS.en["z3ProxyBadge"]
  const _z3ProxySub = z3ProxySub || T["z3ProxySub"] || TRANSLATIONS.en["z3ProxySub"]
  const _z3PathA = z3PathA || T["z3PathA"] || TRANSLATIONS.en["z3PathA"]
  const _z3PathB = z3PathB || T["z3PathB"] || TRANSLATIONS.en["z3PathB"]
  const _z3DeployA1 = z3DeployA1 || T["z3DeployA1"] || TRANSLATIONS.en["z3DeployA1"]
  const _z3DeployA2 = z3DeployA2 || T["z3DeployA2"] || TRANSLATIONS.en["z3DeployA2"]
  const _z3DeployB1 = z3DeployB1 || T["z3DeployB1"] || TRANSLATIONS.en["z3DeployB1"]
  const _z3DeployB2 = z3DeployB2 || T["z3DeployB2"] || TRANSLATIONS.en["z3DeployB2"]
  const _z3SwapNote = z3SwapNote || T["z3SwapNote"] || TRANSLATIONS.en["z3SwapNote"]
  const _z3GuardStrong = z3GuardStrong || T["z3GuardStrong"] || TRANSLATIONS.en["z3GuardStrong"]
  const _z3GuardBody = z3GuardBody || T["z3GuardBody"] || TRANSLATIONS.en["z3GuardBody"]
  const _z3IsoLabel = z3IsoLabel || T["z3IsoLabel"] || TRANSLATIONS.en["z3IsoLabel"]
  const _z3PdescHead = z3PdescHead || T["z3PdescHead"] || TRANSLATIONS.en["z3PdescHead"]
  const _z3PdescItem1 = z3PdescItem1 || T["z3PdescItem1"] || TRANSLATIONS.en["z3PdescItem1"]
  const _z3PdescItem2 = z3PdescItem2 || T["z3PdescItem2"] || TRANSLATIONS.en["z3PdescItem2"]
  const _z3PdescItem3 = z3PdescItem3 || T["z3PdescItem3"] || TRANSLATIONS.en["z3PdescItem3"]
  const _z3PdescFoot = z3PdescFoot || T["z3PdescFoot"] || TRANSLATIONS.en["z3PdescFoot"]
  const _z3ComplianceLabel = z3ComplianceLabel || T["z3ComplianceLabel"] || TRANSLATIONS.en["z3ComplianceLabel"]
  const _z3Compliance1 = z3Compliance1 || T["z3Compliance1"] || TRANSLATIONS.en["z3Compliance1"]
  const _z3Compliance2 = z3Compliance2 || T["z3Compliance2"] || TRANSLATIONS.en["z3Compliance2"]
  const _z4GroupTag = z4GroupTag || T["z4GroupTag"] || TRANSLATIONS.en["z4GroupTag"]
  const _z4InSub = z4InSub || T["z4InSub"] || TRANSLATIONS.en["z4InSub"]
  const _z4ProcessSub = z4ProcessSub || T["z4ProcessSub"] || TRANSLATIONS.en["z4ProcessSub"]
  const _z4OutSub = z4OutSub || T["z4OutSub"] || TRANSLATIONS.en["z4OutSub"]
  const _z4BlockLabel = z4BlockLabel || T["z4BlockLabel"] || TRANSLATIONS.en["z4BlockLabel"]
  const _z4F1Name = z4F1Name || T["z4F1Name"] || TRANSLATIONS.en["z4F1Name"]
  const _z4F2Name = z4F2Name || T["z4F2Name"] || TRANSLATIONS.en["z4F2Name"]
  const _z4F3Name = z4F3Name || T["z4F3Name"] || TRANSLATIONS.en["z4F3Name"]
  const _z4ReconName = z4ReconName || T["z4ReconName"] || TRANSLATIONS.en["z4ReconName"]
  const _z4ReconBadge = z4ReconBadge || T["z4ReconBadge"] || TRANSLATIONS.en["z4ReconBadge"]
  const _z4ReconTech1 = z4ReconTech1 || T["z4ReconTech1"] || TRANSLATIONS.en["z4ReconTech1"]
  const _z4ReconTech2 = z4ReconTech2 || T["z4ReconTech2"] || TRANSLATIONS.en["z4ReconTech2"]
  const _z4ReconTech3 = z4ReconTech3 || T["z4ReconTech3"] || TRANSLATIONS.en["z4ReconTech3"]
  const _z4ReconTech4 = z4ReconTech4 || T["z4ReconTech4"] || TRANSLATIONS.en["z4ReconTech4"]
  const _z4LocalStrong = z4LocalStrong || T["z4LocalStrong"] || TRANSLATIONS.en["z4LocalStrong"]
  const _z4LocalBody = z4LocalBody || T["z4LocalBody"] || TRANSLATIONS.en["z4LocalBody"]
  const _z4OutputLabel = z4OutputLabel || T["z4OutputLabel"] || TRANSLATIONS.en["z4OutputLabel"]
  const _z4OutCheck1 = z4OutCheck1 || T["z4OutCheck1"] || TRANSLATIONS.en["z4OutCheck1"]
  const _z4OutCheck2 = z4OutCheck2 || T["z4OutCheck2"] || TRANSLATIONS.en["z4OutCheck2"]
  const _z4OutCheck3 = z4OutCheck3 || T["z4OutCheck3"] || TRANSLATIONS.en["z4OutCheck3"]
  const _z4OutCheck4 = z4OutCheck4 || T["z4OutCheck4"] || TRANSLATIONS.en["z4OutCheck4"]
  const _z4Chip1 = z4Chip1 || T["z4Chip1"] || TRANSLATIONS.en["z4Chip1"]
  const _z4Chip2 = z4Chip2 || T["z4Chip2"] || TRANSLATIONS.en["z4Chip2"]
  const _z4Chip3 = z4Chip3 || T["z4Chip3"] || TRANSLATIONS.en["z4Chip3"]
  const _coreTitle = coreTitle || T["coreTitle"] || TRANSLATIONS.en["coreTitle"]
  const _coreWorkflowGroup = coreWorkflowGroup || T["coreWorkflowGroup"] || TRANSLATIONS.en["coreWorkflowGroup"]
  const _coreApprovalGroup = coreApprovalGroup || T["coreApprovalGroup"] || TRANSLATIONS.en["coreApprovalGroup"]
  const _core1Name = core1Name || T["core1Name"] || TRANSLATIONS.en["core1Name"]
  const _core1Desc = core1Desc || T["core1Desc"] || TRANSLATIONS.en["core1Desc"]
  const _core2Name = core2Name || T["core2Name"] || TRANSLATIONS.en["core2Name"]
  const _core2Desc = core2Desc || T["core2Desc"] || TRANSLATIONS.en["core2Desc"]
  const _core3Name = core3Name || T["core3Name"] || TRANSLATIONS.en["core3Name"]
  const _core3Desc = core3Desc || T["core3Desc"] || TRANSLATIONS.en["core3Desc"]
  const _core4Name = core4Name || T["core4Name"] || TRANSLATIONS.en["core4Name"]
  const _core4Desc = core4Desc || T["core4Desc"] || TRANSLATIONS.en["core4Desc"]
  const _core5Name = core5Name || T["core5Name"] || TRANSLATIONS.en["core5Name"]
  const _core5Desc = core5Desc || T["core5Desc"] || TRANSLATIONS.en["core5Desc"]
  const _core6Name = core6Name || T["core6Name"] || TRANSLATIONS.en["core6Name"]
  const _core6Desc = core6Desc || T["core6Desc"] || TRANSLATIONS.en["core6Desc"]
  const _coreStrip = coreStrip || T["coreStrip"] || TRANSLATIONS.en["coreStrip"]

  let html = BODY_HTML

  const sectionHead = `
    <div class="section-head">
      <div class="eyebrow">${_eyebrow}</div>
      <h2>${_sectionTitle}</h2>
      <p>${_sectionDescription}</p>
    </div>
  `
  html = html.replace("<!-- SECTION_HEAD_PLACEHOLDER -->", sectionHead)

  const annotationCards = `
    <div class="tech-diagram-annotation">
      <article class="annotation-card">
        <div class="annotation-card__num">${_card1Num}</div>
        <h3 class="annotation-card__h">${_card1Title}</h3>
        <p class="annotation-card__d">${_card1Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${_card2Num}</div>
        <h3 class="annotation-card__h">${_card2Title}</h3>
        <p class="annotation-card__d">${_card2Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${_card3Num}</div>
        <h3 class="annotation-card__h">${_card3Title}</h3>
        <p class="annotation-card__d">${_card3Description}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${_card4Num}</div>
        <h3 class="annotation-card__h">${_card4Title}</h3>
        <p class="annotation-card__d">${_card4Description}</p>
      </article>
    </div>
  `
  html = html.replace("<!-- ANNOTATION_CARDS_PLACEHOLDER -->", annotationCards)

  // Body placeholder substitutions
  html = html.split("{{__P_step1Title__}}").join(_step1Title)
  html = html.split("{{__P_step2Title__}}").join(_step2Title)
  html = html.split("{{__P_step3Title__}}").join(_step3Title)
  html = html.split("{{__P_step4Title__}}").join(_step4Title)
  html = html.split("{{__P_z1Label__}}").join(_z1Label)
  html = html.split("{{__P_z1Sub__}}").join(_z1Sub)
  html = html.split("{{__P_z2Label__}}").join(_z2Label)
  html = html.split("{{__P_z2Sub__}}").join(_z2Sub)
  html = html.split("{{__P_z3Label__}}").join(_z3Label)
  html = html.split("{{__P_z3Sub__}}").join(_z3Sub)
  html = html.split("{{__P_z4Label__}}").join(_z4Label)
  html = html.split("{{__P_z4Sub__}}").join(_z4Sub)
  html = html.split("{{__P_conn1Label__}}").join(_conn1Label)
  html = html.split("{{__P_conn2Label__}}").join(_conn2Label)
  html = html.split("{{__P_conn3Label__}}").join(_conn3Label)
  html = html.split("{{__P_z1GroupTag__}}").join(_z1GroupTag)
  html = html.split("{{__P_z1Db1Sub__}}").join(_z1Db1Sub)
  html = html.split("{{__P_z1Db2Sub__}}").join(_z1Db2Sub)
  html = html.split("{{__P_z1Db3Sub__}}").join(_z1Db3Sub)
  html = html.split("{{__P_z1FieldsLabel__}}").join(_z1FieldsLabel)
  html = html.split("{{__P_z1F1Name__}}").join(_z1F1Name)
  html = html.split("{{__P_z1F2Name__}}").join(_z1F2Name)
  html = html.split("{{__P_z1F2NameMid__}}").join(_z1F2NameMid)
  html = html.split("{{__P_z1GuardStrong__}}").join(_z1GuardStrong)
  html = html.split("{{__P_z1GuardBody__}}").join(_z1GuardBody)
  html = html.split("{{__P_z1PluginTag__}}").join(_z1PluginTag)
  html = html.split("{{__P_z1Sys1Sub__}}").join(_z1Sys1Sub)
  html = html.split("{{__P_z1Sys2Sub__}}").join(_z1Sys2Sub)
  html = html.split("{{__P_z1Sys3Sub__}}").join(_z1Sys3Sub)
  html = html.split("{{__P_z1Sys4Sub__}}").join(_z1Sys4Sub)
  html = html.split("{{__P_z1Sys5Sub__}}").join(_z1Sys5Sub)
  html = html.split("{{__P_z1Sys6Sub__}}").join(_z1Sys6Sub)
  html = html.split("{{__P_z1Sys1Name__}}").join(_z1Sys1Name)
  html = html.split("{{__P_z1Sys2Name__}}").join(_z1Sys2Name)
  html = html.split("{{__P_z1Sys3Name__}}").join(_z1Sys3Name)
  html = html.split("{{__P_z1Sys4Name__}}").join(_z1Sys4Name)
  html = html.split("{{__P_z1Sys5Name__}}").join(_z1Sys5Name)
  html = html.split("{{__P_z1Sys6Name__}}").join(_z1Sys6Name)
  html = html.split("{{__P_z1SysApi__}}").join(_z1SysApi)
  html = html.split("{{__P_z1ZeroModStrong__}}").join(_z1ZeroModStrong)
  html = html.split("{{__P_z1ZeroModBody__}}").join(_z1ZeroModBody)
  html = html.split("{{__P_z2GroupTag__}}").join(_z2GroupTag)
  html = html.split("{{__P_z2InSub__}}").join(_z2InSub)
  html = html.split("{{__P_z2ProcessSub__}}").join(_z2ProcessSub)
  html = html.split("{{__P_z2OutSub__}}").join(_z2OutSub)
  html = html.split("{{__P_z2BlockLabel__}}").join(_z2BlockLabel)
  html = html.split("{{__P_z2ProtectedBadge__}}").join(_z2ProtectedBadge)
  html = html.split("{{__P_z2F1Name__}}").join(_z2F1Name)
  html = html.split("{{__P_z2F2Name__}}").join(_z2F2Name)
  html = html.split("{{__P_z2F3Name__}}").join(_z2F3Name)
  html = html.split("{{__P_z2DpEngineName__}}").join(_z2DpEngineName)
  html = html.split("{{__P_z2DpEngineBadge__}}").join(_z2DpEngineBadge)
  html = html.split("{{__P_z2DpTech1__}}").join(_z2DpTech1)
  html = html.split("{{__P_z2DpTech2__}}").join(_z2DpTech2)
  html = html.split("{{__P_z2DpTech3__}}").join(_z2DpTech3)
  html = html.split("{{__P_z2DpTech4__}}").join(_z2DpTech4)
  html = html.split("{{__P_z2DmzStrong__}}").join(_z2DmzStrong)
  html = html.split("{{__P_z2DmzBody__}}").join(_z2DmzBody)
  html = html.split("{{__P_z3PipelineLabel__}}").join(_z3PipelineLabel)
  html = html.split("{{__P_z3ProxyBadge__}}").join(_z3ProxyBadge)
  html = html.split("{{__P_z3ProxySub__}}").join(_z3ProxySub)
  html = html.split("{{__P_z3PathA__}}").join(_z3PathA)
  html = html.split("{{__P_z3PathB__}}").join(_z3PathB)
  html = html.split("{{__P_z3DeployA1__}}").join(_z3DeployA1)
  html = html.split("{{__P_z3DeployA2__}}").join(_z3DeployA2)
  html = html.split("{{__P_z3DeployB1__}}").join(_z3DeployB1)
  html = html.split("{{__P_z3DeployB2__}}").join(_z3DeployB2)
  html = html.split("{{__P_z3SwapNote__}}").join(_z3SwapNote)
  html = html.split("{{__P_z3GuardStrong__}}").join(_z3GuardStrong)
  html = html.split("{{__P_z3GuardBody__}}").join(_z3GuardBody)
  html = html.split("{{__P_z3IsoLabel__}}").join(_z3IsoLabel)
  html = html.split("{{__P_z3PdescHead__}}").join(_z3PdescHead)
  html = html.split("{{__P_z3PdescItem1__}}").join(_z3PdescItem1)
  html = html.split("{{__P_z3PdescItem2__}}").join(_z3PdescItem2)
  html = html.split("{{__P_z3PdescItem3__}}").join(_z3PdescItem3)
  html = html.split("{{__P_z3PdescFoot__}}").join(_z3PdescFoot)
  html = html.split("{{__P_z3ComplianceLabel__}}").join(_z3ComplianceLabel)
  html = html.split("{{__P_z3Compliance1__}}").join(_z3Compliance1)
  html = html.split("{{__P_z3Compliance2__}}").join(_z3Compliance2)
  html = html.split("{{__P_z4GroupTag__}}").join(_z4GroupTag)
  html = html.split("{{__P_z4InSub__}}").join(_z4InSub)
  html = html.split("{{__P_z4ProcessSub__}}").join(_z4ProcessSub)
  html = html.split("{{__P_z4OutSub__}}").join(_z4OutSub)
  html = html.split("{{__P_z4BlockLabel__}}").join(_z4BlockLabel)
  html = html.split("{{__P_z4F1Name__}}").join(_z4F1Name)
  html = html.split("{{__P_z4F2Name__}}").join(_z4F2Name)
  html = html.split("{{__P_z4F3Name__}}").join(_z4F3Name)
  html = html.split("{{__P_z4ReconName__}}").join(_z4ReconName)
  html = html.split("{{__P_z4ReconBadge__}}").join(_z4ReconBadge)
  html = html.split("{{__P_z4ReconTech1__}}").join(_z4ReconTech1)
  html = html.split("{{__P_z4ReconTech2__}}").join(_z4ReconTech2)
  html = html.split("{{__P_z4ReconTech3__}}").join(_z4ReconTech3)
  html = html.split("{{__P_z4ReconTech4__}}").join(_z4ReconTech4)
  html = html.split("{{__P_z4LocalStrong__}}").join(_z4LocalStrong)
  html = html.split("{{__P_z4LocalBody__}}").join(_z4LocalBody)
  html = html.split("{{__P_z4OutputLabel__}}").join(_z4OutputLabel)
  html = html.split("{{__P_z4OutCheck1__}}").join(_z4OutCheck1)
  html = html.split("{{__P_z4OutCheck2__}}").join(_z4OutCheck2)
  html = html.split("{{__P_z4OutCheck3__}}").join(_z4OutCheck3)
  html = html.split("{{__P_z4OutCheck4__}}").join(_z4OutCheck4)
  html = html.split("{{__P_z4Chip1__}}").join(_z4Chip1)
  html = html.split("{{__P_z4Chip2__}}").join(_z4Chip2)
  html = html.split("{{__P_z4Chip3__}}").join(_z4Chip3)
  html = html.split("{{__P_coreTitle__}}").join(_coreTitle)
  html = html.split("{{__P_coreWorkflowGroup__}}").join(_coreWorkflowGroup)
  html = html.split("{{__P_coreApprovalGroup__}}").join(_coreApprovalGroup)
  html = html.split("{{__P_core1Name__}}").join(_core1Name)
  html = html.split("{{__P_core1Desc__}}").join(_core1Desc)
  html = html.split("{{__P_core2Name__}}").join(_core2Name)
  html = html.split("{{__P_core2Desc__}}").join(_core2Desc)
  html = html.split("{{__P_core3Name__}}").join(_core3Name)
  html = html.split("{{__P_core3Desc__}}").join(_core3Desc)
  html = html.split("{{__P_core4Name__}}").join(_core4Name)
  html = html.split("{{__P_core4Desc__}}").join(_core4Desc)
  html = html.split("{{__P_core5Name__}}").join(_core5Name)
  html = html.split("{{__P_core5Desc__}}").join(_core5Desc)
  html = html.split("{{__P_core6Name__}}").join(_core6Name)
  html = html.split("{{__P_core6Desc__}}").join(_core6Desc)
  html = html.split("{{__P_coreStrip__}}").join(_coreStrip)

  return (
    <>
      <style dangerouslySetInnerHTML={ { __html: CSS } } />
      <div dangerouslySetInnerHTML={ { __html: html } } />
    </>
  )
}

addPropertyControls(ArchitectureFourZoneTechnical, {
  locale: { type: ControlType.Enum, title: "Locale", options: ["en", "ko", "de"], optionTitles: ["English", "한국어", "Deutsch"], defaultValue: "en" },
  eyebrow: { type: ControlType.String, title: "Section · Eyebrow", defaultValue: "" },
  sectionTitle: { type: ControlType.String, title: "Section · Title", defaultValue: "" },
  sectionDescription: { type: ControlType.String, title: "Section · Description", defaultValue: "", displayTextArea: true },
  card1Num: { type: ControlType.String, title: "Card 1 · Num", defaultValue: "" },
  card1Title: { type: ControlType.String, title: "Card 1 · Title", defaultValue: "" },
  card1Description: { type: ControlType.String, title: "Card 1 · Description", defaultValue: "", displayTextArea: true },
  card2Num: { type: ControlType.String, title: "Card 2 · Num", defaultValue: "" },
  card2Title: { type: ControlType.String, title: "Card 2 · Title", defaultValue: "" },
  card2Description: { type: ControlType.String, title: "Card 2 · Description", defaultValue: "", displayTextArea: true },
  card3Num: { type: ControlType.String, title: "Card 3 · Num", defaultValue: "" },
  card3Title: { type: ControlType.String, title: "Card 3 · Title", defaultValue: "" },
  card3Description: { type: ControlType.String, title: "Card 3 · Description", defaultValue: "", displayTextArea: true },
  card4Num: { type: ControlType.String, title: "Card 4 · Num", defaultValue: "" },
  card4Title: { type: ControlType.String, title: "Card 4 · Title", defaultValue: "" },
  card4Description: { type: ControlType.String, title: "Card 4 · Description", defaultValue: "", displayTextArea: true },
  step1Title: { type: ControlType.String, title: "Z1 · Step Title", defaultValue: "" },
  step2Title: { type: ControlType.String, title: "Z2 · Step Title", defaultValue: "" },
  step3Title: { type: ControlType.String, title: "Z3 · Step Title", defaultValue: "" },
  step4Title: { type: ControlType.String, title: "Z4 · Step Title", defaultValue: "" },
  z1Label: { type: ControlType.String, title: "Z1 · Zone Label", defaultValue: "" },
  z1Sub: { type: ControlType.String, title: "Z1 · Zone Sub", defaultValue: "" },
  z2Label: { type: ControlType.String, title: "Z2 · Zone Label", defaultValue: "" },
  z2Sub: { type: ControlType.String, title: "Z2 · Zone Sub", defaultValue: "" },
  z3Label: { type: ControlType.String, title: "Z3 · Zone Label", defaultValue: "" },
  z3Sub: { type: ControlType.String, title: "Z3 · Zone Sub", defaultValue: "" },
  z4Label: { type: ControlType.String, title: "Z4 · Zone Label", defaultValue: "" },
  z4Sub: { type: ControlType.String, title: "Z4 · Zone Sub", defaultValue: "" },
  conn1Label: { type: ControlType.String, title: "Connector · 1→2 Label", defaultValue: "" },
  conn2Label: { type: ControlType.String, title: "Connector · 2→3 Label", defaultValue: "" },
  conn3Label: { type: ControlType.String, title: "Connector · 3→4 Label", defaultValue: "" },
  z1GroupTag: { type: ControlType.String, title: "Z1 · DB Group Tag", defaultValue: "" },
  z1Db1Sub: { type: ControlType.String, title: "Z1 · DB1 Sub (use <br/>)", defaultValue: "" },
  z1Db2Sub: { type: ControlType.String, title: "Z1 · DB2 Sub (use <br/>)", defaultValue: "" },
  z1Db3Sub: { type: ControlType.String, title: "Z1 · DB3 Sub (use <br/>)", defaultValue: "" },
  z1FieldsLabel: { type: ControlType.String, title: "Z1 · Raw Input Block Label", defaultValue: "" },
  z1F1Name: { type: ControlType.String, title: "Z1 · Field 1 Name", defaultValue: "" },
  z1F2Name: { type: ControlType.String, title: "Z1 · Field 3 Name", defaultValue: "" },
  z1F2NameMid: { type: ControlType.String, title: "Z1 · Field 2 Name", defaultValue: "" },
  z1GuardStrong: { type: ControlType.String, title: "Z1 · Guardrail Title", defaultValue: "" },
  z1GuardBody: { type: ControlType.String, title: "Z1 · Guardrail Body (HTML)", defaultValue: "", displayTextArea: true },
  z1PluginTag: { type: ControlType.String, title: "Z1 · Plug-in Tag", defaultValue: "" },
  z1Sys1Sub: { type: ControlType.String, title: "Z1 · Sys 1 Sub", defaultValue: "" },
  z1Sys2Sub: { type: ControlType.String, title: "Z1 · Sys 2 Sub", defaultValue: "" },
  z1Sys3Sub: { type: ControlType.String, title: "Z1 · Sys 3 Sub", defaultValue: "" },
  z1Sys4Sub: { type: ControlType.String, title: "Z1 · Sys 4 Sub", defaultValue: "" },
  z1Sys5Sub: { type: ControlType.String, title: "Z1 · Sys 5 Sub", defaultValue: "" },
  z1Sys6Sub: { type: ControlType.String, title: "Z1 · Sys 6 Sub", defaultValue: "" },
  z1Sys1Name: { type: ControlType.String, title: "Z1 · Sys 1 Name (ERP)", defaultValue: "" },
  z1Sys2Name: { type: ControlType.String, title: "Z1 · Sys 2 Name (CRM)", defaultValue: "" },
  z1Sys3Name: { type: ControlType.String, title: "Z1 · Sys 3 Name (RAG)", defaultValue: "" },
  z1Sys4Name: { type: ControlType.String, title: "Z1 · Sys 4 Name (Legacy)", defaultValue: "" },
  z1Sys5Name: { type: ControlType.String, title: "Z1 · Sys 5 Name (Ticket)", defaultValue: "" },
  z1Sys6Name: { type: ControlType.String, title: "Z1 · Sys 6 Name (DMS)", defaultValue: "" },
  z1SysApi: { type: ControlType.String, title: "Z1 · API List", defaultValue: "" },
  z1ZeroModStrong: { type: ControlType.String, title: "Z1 · Zero-Mod Title", defaultValue: "" },
  z1ZeroModBody: { type: ControlType.String, title: "Z1 · Zero-Mod Body", defaultValue: "", displayTextArea: true },
  z2GroupTag: { type: ControlType.String, title: "Z2 · DB Group Tag", defaultValue: "" },
  z2InSub: { type: ControlType.String, title: "Z2 · IN Sub", defaultValue: "" },
  z2ProcessSub: { type: ControlType.String, title: "Z2 · PROCESS Sub", defaultValue: "" },
  z2OutSub: { type: ControlType.String, title: "Z2 · OUT Sub", defaultValue: "" },
  z2BlockLabel: { type: ControlType.String, title: "Z2 · Block Label", defaultValue: "" },
  z2ProtectedBadge: { type: ControlType.String, title: "Z2 · Protected Badge", defaultValue: "" },
  z2F1Name: { type: ControlType.String, title: "Z2 · Field 1 Name", defaultValue: "" },
  z2F2Name: { type: ControlType.String, title: "Z2 · Field 2 Name", defaultValue: "" },
  z2F3Name: { type: ControlType.String, title: "Z2 · Field 3 Name", defaultValue: "" },
  z2DpEngineName: { type: ControlType.String, title: "Z2 · DP Engine Name", defaultValue: "" },
  z2DpEngineBadge: { type: ControlType.String, title: "Z2 · DP Engine Badge", defaultValue: "" },
  z2DpTech1: { type: ControlType.String, title: "Z2 · DP Tech 1", defaultValue: "" },
  z2DpTech2: { type: ControlType.String, title: "Z2 · DP Tech 2", defaultValue: "" },
  z2DpTech3: { type: ControlType.String, title: "Z2 · DP Tech 3", defaultValue: "" },
  z2DpTech4: { type: ControlType.String, title: "Z2 · DP Tech 4", defaultValue: "" },
  z2DmzStrong: { type: ControlType.String, title: "Z2 · DMZ Title", defaultValue: "" },
  z2DmzBody: { type: ControlType.String, title: "Z2 · DMZ Body", defaultValue: "", displayTextArea: true },
  z3PipelineLabel: { type: ControlType.String, title: "Z3 · Pipeline Block Label", defaultValue: "" },
  z3ProxyBadge: { type: ControlType.String, title: "Z3 · Proxy Badge", defaultValue: "" },
  z3ProxySub: { type: ControlType.String, title: "Z3 · Proxy Sub", defaultValue: "" },
  z3PathA: { type: ControlType.String, title: "Z3 · Path A Label", defaultValue: "" },
  z3PathB: { type: ControlType.String, title: "Z3 · Path B Label", defaultValue: "" },
  z3DeployA1: { type: ControlType.String, title: "Z3 · Deploy A1 (External 1)", defaultValue: "" },
  z3DeployA2: { type: ControlType.String, title: "Z3 · Deploy A2 (External 2)", defaultValue: "" },
  z3DeployB1: { type: ControlType.String, title: "Z3 · Deploy B1 (On-prem 1)", defaultValue: "" },
  z3DeployB2: { type: ControlType.String, title: "Z3 · Deploy B2 (On-prem 2)", defaultValue: "" },
  z3SwapNote: { type: ControlType.String, title: "Z3 · Swap Note", defaultValue: "" },
  z3GuardStrong: { type: ControlType.String, title: "Z3 · Guardrail Title", defaultValue: "" },
  z3GuardBody: { type: ControlType.String, title: "Z3 · Guardrail Body", defaultValue: "", displayTextArea: true },
  z3IsoLabel: { type: ControlType.String, title: "Z3 · Isolation Block Label", defaultValue: "" },
  z3PdescHead: { type: ControlType.String, title: "Z3 · PDESC Head", defaultValue: "" },
  z3PdescItem1: { type: ControlType.String, title: "Z3 · PDESC Item 1", defaultValue: "" },
  z3PdescItem2: { type: ControlType.String, title: "Z3 · PDESC Item 2", defaultValue: "" },
  z3PdescItem3: { type: ControlType.String, title: "Z3 · PDESC Item 3", defaultValue: "" },
  z3PdescFoot: { type: ControlType.String, title: "Z3 · PDESC Foot", defaultValue: "" },
  z3ComplianceLabel: { type: ControlType.String, title: "Z3 · Compliance Label", defaultValue: "" },
  z3Compliance1: { type: ControlType.String, title: "Z3 · Compliance Badge 1", defaultValue: "" },
  z3Compliance2: { type: ControlType.String, title: "Z3 · Compliance Badge 2", defaultValue: "" },
  z4GroupTag: { type: ControlType.String, title: "Z4 · DB Group Tag", defaultValue: "" },
  z4InSub: { type: ControlType.String, title: "Z4 · IN Sub", defaultValue: "" },
  z4ProcessSub: { type: ControlType.String, title: "Z4 · PROCESS Sub", defaultValue: "" },
  z4OutSub: { type: ControlType.String, title: "Z4 · OUT Sub", defaultValue: "" },
  z4BlockLabel: { type: ControlType.String, title: "Z4 · Token Block Label", defaultValue: "" },
  z4F1Name: { type: ControlType.String, title: "Z4 · Field 1 Name", defaultValue: "" },
  z4F2Name: { type: ControlType.String, title: "Z4 · Field 2 Name", defaultValue: "" },
  z4F3Name: { type: ControlType.String, title: "Z4 · Field 3 Name", defaultValue: "" },
  z4ReconName: { type: ControlType.String, title: "Z4 · Recon Engine Name", defaultValue: "" },
  z4ReconBadge: { type: ControlType.String, title: "Z4 · Recon Engine Badge", defaultValue: "" },
  z4ReconTech1: { type: ControlType.String, title: "Z4 · Recon Tech 1", defaultValue: "" },
  z4ReconTech2: { type: ControlType.String, title: "Z4 · Recon Tech 2", defaultValue: "" },
  z4ReconTech3: { type: ControlType.String, title: "Z4 · Recon Tech 3", defaultValue: "" },
  z4ReconTech4: { type: ControlType.String, title: "Z4 · Recon Tech 4", defaultValue: "" },
  z4LocalStrong: { type: ControlType.String, title: "Z4 · Local Guarantee Title", defaultValue: "" },
  z4LocalBody: { type: ControlType.String, title: "Z4 · Local Guarantee Body", defaultValue: "", displayTextArea: true },
  z4OutputLabel: { type: ControlType.String, title: "Z4 · Output Properties Label", defaultValue: "" },
  z4OutCheck1: { type: ControlType.String, title: "Z4 · Output Check 1", defaultValue: "" },
  z4OutCheck2: { type: ControlType.String, title: "Z4 · Output Check 2", defaultValue: "" },
  z4OutCheck3: { type: ControlType.String, title: "Z4 · Output Check 3", defaultValue: "" },
  z4OutCheck4: { type: ControlType.String, title: "Z4 · Output Check 4", defaultValue: "" },
  z4Chip1: { type: ControlType.String, title: "Z4 · Chip 1", defaultValue: "" },
  z4Chip2: { type: ControlType.String, title: "Z4 · Chip 2", defaultValue: "" },
  z4Chip3: { type: ControlType.String, title: "Z4 · Chip 3", defaultValue: "" },
  coreTitle: { type: ControlType.String, title: "Core · Section Title", defaultValue: "" },
  coreWorkflowGroup: { type: ControlType.String, title: "Core · Workflow Group Label", defaultValue: "" },
  coreApprovalGroup: { type: ControlType.String, title: "Core · Approval Group Label", defaultValue: "" },
  core1Name: { type: ControlType.String, title: "Core 01 · Name", defaultValue: "" },
  core1Desc: { type: ControlType.String, title: "Core 01 · Description", defaultValue: "", displayTextArea: true },
  core2Name: { type: ControlType.String, title: "Core 02 · Name", defaultValue: "" },
  core2Desc: { type: ControlType.String, title: "Core 02 · Description", defaultValue: "", displayTextArea: true },
  core3Name: { type: ControlType.String, title: "Core 03 · Name", defaultValue: "" },
  core3Desc: { type: ControlType.String, title: "Core 03 · Description", defaultValue: "", displayTextArea: true },
  core4Name: { type: ControlType.String, title: "Core 04 · Name", defaultValue: "" },
  core4Desc: { type: ControlType.String, title: "Core 04 · Description", defaultValue: "", displayTextArea: true },
  core5Name: { type: ControlType.String, title: "Core 05 · Name", defaultValue: "" },
  core5Desc: { type: ControlType.String, title: "Core 05 · Description", defaultValue: "", displayTextArea: true },
  core6Name: { type: ControlType.String, title: "Core 06 · Name", defaultValue: "" },
  core6Desc: { type: ControlType.String, title: "Core 06 · Description", defaultValue: "", displayTextArea: true },
  coreStrip: { type: ControlType.String, title: "Core · Bottom Strip", defaultValue: "" },
})
