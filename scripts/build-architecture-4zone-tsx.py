#!/usr/bin/env python3
"""
Build self-contained Framer Code Component for architecture_4zone_technical-develop.html.

Exposes ALL translatable text inside the 4-zone diagram as Props so the
Framer Properties panel can drive the translation. Demo placeholder data
(David Lawson, CS-4203, tokenized samples), SVG icons, short ID labels
(DB1/DB2/DB3, IN/PROCESS/OUT, ID/CD/BD), and step numbers stay hardcoded.

Output: llm-capsule/output/framer/architecture/ArchitectureFourZoneTechnical.tsx
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INPUT_FILE = ROOT / "llm-capsule" / "input" / "llmcapsule_260506" / "architecture_4zone_technical-develop.html"
OUT_DIR = ROOT / "llm-capsule" / "output" / "framer" / "architecture"
COMPONENT_NAME = "ArchitectureFourZoneTechnical"


def js_template_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace("`", "\\`")
    s = s.replace("${", "\\${")
    return s


def js_string_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    return re.sub(r"\s+", " ", s).strip()


def strip_html_tags(s: str) -> str:
    s = re.sub(r"<[^>]+>", "", s)
    s = (
        s.replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&#39;", "'")
    )
    return re.sub(r"\s+", " ", s).strip()


# ---------------------------------------------------------------------------
# Prop specification
# Each entry: (prop_name, regex_with_group1, displayTextArea, title)
#
# Group 1 captures the text to be replaced by `{{__P_<propName>__}}`.
# Anchor each pattern with enough surrounding HTML to be UNIQUE in the body.
# Whitespace inside patterns uses \s* for flexibility.
# ---------------------------------------------------------------------------

PROP_SPECS: list[tuple[str, str, bool, str]] = [
    # --- Step titles (4) ---
    (
        "step1Title",
        r'<span class="step-num">01</span>\s*<span class="step-title">([^<]+)</span>',
        False,
        "Z1 · Step Title",
    ),
    (
        "step2Title",
        r'<span class="step-num">02</span>\s*<span class="step-title">([^<]+)</span>',
        False,
        "Z2 · Step Title",
    ),
    (
        "step3Title",
        r'<span class="step-num">03</span>\s*<span class="step-title">([^<]+)</span>',
        False,
        "Z3 · Step Title",
    ),
    (
        "step4Title",
        r'<span class="step-num">04</span>\s*<span class="step-title">([^<]+)</span>',
        False,
        "Z4 · Step Title",
    ),

    # --- Zone heads (8) ---
    (
        "z1Label",
        r'<div class="col zone-1">.*?<div class="zone-label">([^<]+)</div>',
        False,
        "Z1 · Zone Label",
    ),
    (
        "z1Sub",
        r'<div class="col zone-1">.*?<div class="zone-sub">([^<]+)</div>',
        False,
        "Z1 · Zone Sub",
    ),
    (
        "z2Label",
        r'<div class="col zone-2">.*?<div class="zone-label">([^<]+)</div>',
        False,
        "Z2 · Zone Label",
    ),
    (
        "z2Sub",
        r'<div class="col zone-2">.*?<div class="zone-sub">([^<]+)</div>',
        False,
        "Z2 · Zone Sub",
    ),
    (
        "z3Label",
        r'<div class="col zone-3">.*?<div class="zone-label">([^<]+)</div>',
        False,
        "Z3 · Zone Label",
    ),
    (
        "z3Sub",
        r'<div class="col zone-3">.*?<div class="zone-sub">([^<]+)</div>',
        False,
        "Z3 · Zone Sub",
    ),
    (
        "z4Label",
        r'<div class="col zone-4">.*?<div class="zone-label">([^<]+)</div>',
        False,
        "Z4 · Zone Label",
    ),
    (
        "z4Sub",
        r'<div class="col zone-4">.*?<div class="zone-sub">([^<]+)</div>',
        False,
        "Z4 · Zone Sub",
    ),

    # --- Connectors (3) ---
    (
        "conn1Label",
        r'<div class="connector flow-1">\s*<span class="conn-label">([^<]+)</span>',
        False,
        "Connector · 1→2 Label",
    ),
    (
        "conn2Label",
        r'<div class="connector flow-2">\s*<span class="conn-label">([^<]+)</span>',
        False,
        "Connector · 2→3 Label",
    ),
    (
        "conn3Label",
        r'<div class="connector flow-3">\s*<span class="conn-label">([^<]+)</span>',
        False,
        "Connector · 3→4 Label",
    ),

    # ============================================================
    # ZONE 1
    # ============================================================
    (
        "z1GroupTag",
        r'<div class="col zone-1">.*?<span class="db-group-tag">([^<]+)</span>',
        False,
        "Z1 · DB Group Tag",
    ),
    (
        "z1Db1Sub",
        r'<div class="db-card-title">DB1</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z1 · DB1 Sub (use <br/>)",
    ),
    (
        "z1Db2Sub",
        r'<div class="db-card-title">DB2</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z1 · DB2 Sub (use <br/>)",
    ),
    (
        "z1Db3Sub",
        r'<div class="db-card-title">DB3</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z1 · DB3 Sub (use <br/>)",
    ),
    (
        "z1FieldsLabel",
        r'<div class="block-label input">([^<]+)</div>',
        False,
        "Z1 · Raw Input Block Label",
    ),
    (
        "z1F1Name",
        r'<div class="col zone-1">.*?<div class="field-row">\s*<span class="field-name">([^<]+)</span>\s*<span class="field-input raw">David Lawson',
        False,
        "Z1 · Field 1 Name",
    ),
    (
        "z1F2Name",
        r'<div class="col zone-1">.*?<span class="field-input raw">CS-4203</span>\s*<span class="field-tag raw">CD</span>\s*</div>\s*<div class="field-row">\s*<span class="field-name">([^<]+)</span>\s*<span class="field-input raw">Shipping delayed',
        False,
        "Z1 · Field 3 Name",
    ),
    (
        "z1F2NameMid",
        r'<div class="col zone-1">.*?<span class="field-input raw">David Lawson</span>\s*<span class="field-tag raw">ID</span>\s*</div>\s*<div class="field-row">\s*<span class="field-name">([^<]+)</span>\s*<span class="field-input raw">CS-4203',
        False,
        "Z1 · Field 2 Name",
    ),
    (
        "z1GuardStrong",
        r'<div class="col zone-1">.*?<div class="guardrail-body">\s*<strong>([^<]+)</strong>',
        False,
        "Z1 · Guardrail Title",
    ),
    (
        "z1GuardBody",
        r'<div class="col zone-1">.*?<div class="guardrail-body">\s*<strong>[^<]+</strong>\s*((?:(?!</div>).)+?)\s*</div>',
        True,
        "Z1 · Guardrail Body (HTML)",
    ),
    (
        "z1PluginTag",
        r'<span class="sub-section-tag">([^<]+)</span>',
        False,
        "Z1 · Plug-in Tag",
    ),
    # Run Subs BEFORE Names — Name regex uses Sub text as anchor.
    (
        "z1Sys1Sub",
        r'<div class="sys-name">ERP</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 1 Sub",
    ),
    (
        "z1Sys2Sub",
        r'<div class="sys-name">CRM</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 2 Sub",
    ),
    (
        "z1Sys3Sub",
        r'<div class="sys-name">RAG</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 3 Sub",
    ),
    (
        "z1Sys4Sub",
        r'<div class="sys-name">Legacy</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 4 Sub",
    ),
    (
        "z1Sys5Sub",
        r'<div class="sys-name">Ticket</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 5 Sub",
    ),
    (
        "z1Sys6Sub",
        r'<div class="sys-name">DMS</div><div class="sys-sub">([^<]+)</div>',
        False,
        "Z1 · Sys 6 Sub",
    ),
    (
        "z1Sys1Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys1Sub__\}\}',
        False,
        "Z1 · Sys 1 Name (ERP)",
    ),
    (
        "z1Sys2Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys2Sub__\}\}',
        False,
        "Z1 · Sys 2 Name (CRM)",
    ),
    (
        "z1Sys3Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys3Sub__\}\}',
        False,
        "Z1 · Sys 3 Name (RAG)",
    ),
    (
        "z1Sys4Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys4Sub__\}\}',
        False,
        "Z1 · Sys 4 Name (Legacy)",
    ),
    (
        "z1Sys5Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys5Sub__\}\}',
        False,
        "Z1 · Sys 5 Name (Ticket)",
    ),
    (
        "z1Sys6Name",
        r'<div class="sys-cell"><div class="sys-name">([^<]+)</div><div class="sys-sub">\{\{__P_z1Sys6Sub__\}\}',
        False,
        "Z1 · Sys 6 Name (DMS)",
    ),
    (
        "z1SysApi",
        r'<div class="sys-api">([^<]+)</div>',
        False,
        "Z1 · API List",
    ),
    (
        "z1ZeroModStrong",
        r'<div class="zero-mod-body">\s*<strong>([^<]+)</strong>',
        False,
        "Z1 · Zero-Mod Title",
    ),
    (
        "z1ZeroModBody",
        r'<div class="zero-mod-body">\s*<strong>[^<]+</strong>\s*((?:(?!</div>).)+?)\s*</div>',
        True,
        "Z1 · Zero-Mod Body",
    ),

    # ============================================================
    # ZONE 2
    # ============================================================
    (
        "z2GroupTag",
        r'<div class="col zone-2">.*?<span class="db-group-tag">([^<]+)</span>',
        False,
        "Z2 · DB Group Tag",
    ),
    (
        "z2InSub",
        r'<div class="col zone-2">.*?<div class="db-card-title">IN</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z2 · IN Sub",
    ),
    (
        "z2ProcessSub",
        r'<div class="col zone-2">.*?<div class="db-card-title">PROCESS</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z2 · PROCESS Sub",
    ),
    (
        "z2OutSub",
        r'<div class="col zone-2">.*?<div class="db-card-title">OUT</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z2 · OUT Sub",
    ),
    (
        "z2BlockLabel",
        r'<div class="col zone-2">.*?<span style="white-space:nowrap;">([^<]+)</span>',
        False,
        "Z2 · Block Label",
    ),
    (
        "z2ProtectedBadge",
        r'background:var\(--surface\);white-space:nowrap;flex-shrink:0;">([^<]+)</span>',
        False,
        "Z2 · Protected Badge",
    ),
    (
        "z2F1Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input token">\* \* \* \* \* \* \*',
        False,
        "Z2 · Field 1 Name",
    ),
    (
        "z2F2Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input token">CS-\* \* \* \*',
        False,
        "Z2 · Field 2 Name",
    ),
    (
        "z2F3Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input token">\[tokenized\.\.\.\]',
        False,
        "Z2 · Field 3 Name",
    ),
    (
        "z2DpEngineName",
        r'<span class="dp-engine-name">([^<]+)</span>',
        False,
        "Z2 · DP Engine Name",
    ),
    (
        "z2DpEngineBadge",
        r'<span class="dp-engine-badge">([^<]+)</span>',
        False,
        "Z2 · DP Engine Badge",
    ),
    (
        "z2DpTech1",
        r'<div class="dp-tech-row"><span class="dp-tech-name">([^<]+)</span></div>\s*<div class="dp-tech-row"><span class="dp-tech-name">k-Anonymity',
        False,
        "Z2 · DP Tech 1",
    ),
    (
        "z2DpTech2",
        r'<div class="dp-tech-row"><span class="dp-tech-name">([^<]+)</span></div>\s*<div class="dp-tech-row"><span class="dp-tech-name">Semantic',
        False,
        "Z2 · DP Tech 2",
    ),
    (
        "z2DpTech3",
        r'<div class="dp-tech-row"><span class="dp-tech-name">([^<]+)</span></div>\s*<div class="dp-tech-row"><span class="dp-tech-name">Free-Text',
        False,
        "Z2 · DP Tech 3",
    ),
    (
        "z2DpTech4",
        r'<div class="dp-tech-row"><span class="dp-tech-name">([^<]+)</span></div>\s*</div>\s*</div>\s*</div>\s*</div>\s*<div class="dmz-guarantee">',
        False,
        "Z2 · DP Tech 4",
    ),
    (
        "z2DmzStrong",
        r'<div class="dmz-guarantee-body">\s*<strong>([^<]+)</strong>',
        False,
        "Z2 · DMZ Title",
    ),
    (
        "z2DmzBody",
        r'<div class="dmz-guarantee-body">\s*<strong>[^<]+</strong>\s*((?:(?!</div>).)+?)\s*</div>',
        True,
        "Z2 · DMZ Body",
    ),

    # ============================================================
    # ZONE 3
    # ============================================================
    (
        "z3PipelineLabel",
        r'<div class="col zone-3">.*?<div class="block-label transform">([^<]+)</div>',
        False,
        "Z3 · Pipeline Block Label",
    ),
    (
        "z3ProxyBadge",
        r'<div class="proxy-badge">([^<]+?)\s*<span class="proxy-sub">',
        False,
        "Z3 · Proxy Badge",
    ),
    (
        "z3ProxySub",
        r'<span class="proxy-sub">([^<]+)</span>',
        False,
        "Z3 · Proxy Sub",
    ),
    (
        "z3PathA",
        r'<div class="path-label path-a">([^<]+)</div>',
        False,
        "Z3 · Path A Label",
    ),
    (
        "z3PathB",
        r'<div class="path-label path-b">([^<]+)</div>',
        False,
        "Z3 · Path B Label",
    ),
    (
        "z3DeployA1",
        r'<div class="path-label path-a">[^<]+</div>\s*<span class="deploy-pill">([^<]+)</span>',
        False,
        "Z3 · Deploy A1 (External 1)",
    ),
    (
        "z3DeployA2",
        r'<div class="path-label path-a">[^<]+</div>\s*<span class="deploy-pill">[^<]+</span>\s*<span class="deploy-pill">([^<]+)</span>',
        False,
        "Z3 · Deploy A2 (External 2)",
    ),
    (
        "z3DeployB1",
        r'<div class="path-label path-b">[^<]+</div>\s*<span class="deploy-pill">([^<]+)</span>',
        False,
        "Z3 · Deploy B1 (On-prem 1)",
    ),
    (
        "z3DeployB2",
        r'<div class="path-label path-b">[^<]+</div>\s*<span class="deploy-pill">[^<]+</span>\s*<span class="deploy-pill">([^<]+)</span>',
        False,
        "Z3 · Deploy B2 (On-prem 2)",
    ),
    (
        "z3SwapNote",
        r'<div class="swap-note">([^<]+)</div>',
        False,
        "Z3 · Swap Note",
    ),
    (
        "z3GuardStrong",
        r'<div class="guardrail success">.*?<div class="guardrail-body">\s*<strong>([^<]+)</strong>',
        False,
        "Z3 · Guardrail Title",
    ),
    (
        "z3GuardBody",
        r'<div class="guardrail success">.*?<div class="guardrail-body">\s*<strong>[^<]+</strong>\s*((?:(?!</div>).)+?)\s*</div>',
        True,
        "Z3 · Guardrail Body",
    ),
    (
        "z3IsoLabel",
        r'<div class="block-label transform">([^<]+)</div>\s*<div class="pdesc-module">',
        False,
        "Z3 · Isolation Block Label",
    ),
    (
        "z3PdescHead",
        r'<div class="pdesc-module-head">([^<]+)</div>',
        False,
        "Z3 · PDESC Head",
    ),
    (
        "z3PdescItem1",
        r'<div class="pdesc-item">([^<]+)</div>\s*<div class="pdesc-item">Isolated',
        False,
        "Z3 · PDESC Item 1",
    ),
    (
        "z3PdescItem2",
        r'<div class="pdesc-item">([^<]+)</div>\s*<div class="pdesc-item">Output',
        False,
        "Z3 · PDESC Item 2",
    ),
    (
        "z3PdescItem3",
        r'<div class="pdesc-item">([^<]+)</div>\s*</div>\s*<div class="pdesc-foot">',
        False,
        "Z3 · PDESC Item 3",
    ),
    (
        "z3PdescFoot",
        r'<div class="pdesc-foot">([^<]+)</div>',
        False,
        "Z3 · PDESC Foot",
    ),
    (
        "z3ComplianceLabel",
        r'<div class="block-label muted compliance">([^<]+)</div>',
        False,
        "Z3 · Compliance Label",
    ),
    (
        "z3Compliance1",
        r'<div class="compliance-row">\s*<span class="compliance-badge"[^>]*>([^<]+)</span>',
        False,
        "Z3 · Compliance Badge 1",
    ),
    (
        "z3Compliance2",
        r'<div class="compliance-row">\s*<span class="compliance-badge"[^>]*>[^<]+</span>\s*<span class="compliance-badge"[^>]*>([^<]+)</span>',
        False,
        "Z3 · Compliance Badge 2",
    ),

    # ============================================================
    # ZONE 4
    # ============================================================
    (
        "z4GroupTag",
        r'<div class="col zone-4">.*?<span class="db-group-tag">([^<]+)</span>',
        False,
        "Z4 · DB Group Tag",
    ),
    (
        "z4InSub",
        r'<div class="col zone-4">.*?<div class="db-card-title">IN</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z4 · IN Sub",
    ),
    (
        "z4ProcessSub",
        r'<div class="col zone-4">.*?<div class="db-card-title">PROCESS</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z4 · PROCESS Sub",
    ),
    (
        "z4OutSub",
        r'<div class="col zone-4">.*?<div class="db-card-title">OUT</div>\s*<div class="db-card-sub">((?:(?!</div>).)*)</div>',
        False,
        "Z4 · OUT Sub",
    ),
    (
        "z4BlockLabel",
        r'<div class="block-label transform" style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">\s*<span>([^<]+)</span>',
        False,
        "Z4 · Token Block Label",
    ),
    (
        "z4F1Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input restore">David Lawson',
        False,
        "Z4 · Field 1 Name",
    ),
    (
        "z4F2Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input restore">CS-4203',
        False,
        "Z4 · Field 2 Name",
    ),
    (
        "z4F3Name",
        r'<span class="field-name">([^<]+)</span>\s*<span class="field-input restore">Shipping delayed',
        False,
        "Z4 · Field 3 Name",
    ),
    (
        "z4ReconName",
        r'<span class="recon-engine-name">([^<]+)</span>',
        False,
        "Z4 · Recon Engine Name",
    ),
    (
        "z4ReconBadge",
        r'<span class="recon-engine-badge">([^<]+)</span>',
        False,
        "Z4 · Recon Engine Badge",
    ),
    (
        "z4ReconTech1",
        r'<div class="recon-tech-row"><span class="recon-tech-name">([^<]+)</span></div>\s*<div class="recon-tech-row"><span class="recon-tech-name">Original',
        False,
        "Z4 · Recon Tech 1",
    ),
    (
        "z4ReconTech2",
        r'<div class="recon-tech-row"><span class="recon-tech-name">([^<]+)</span></div>\s*<div class="recon-tech-row"><span class="recon-tech-name">Context',
        False,
        "Z4 · Recon Tech 2",
    ),
    (
        "z4ReconTech3",
        r'<div class="recon-tech-row"><span class="recon-tech-name">([^<]+)</span></div>\s*<div class="recon-tech-row"><span class="recon-tech-name">Output',
        False,
        "Z4 · Recon Tech 3",
    ),
    (
        "z4ReconTech4",
        r'<div class="recon-tech-row"><span class="recon-tech-name">([^<]+)</span></div>\s*</div>\s*</div>\s*</div>\s*</div>\s*<div class="local-guarantee">',
        False,
        "Z4 · Recon Tech 4",
    ),
    (
        "z4LocalStrong",
        r'<div class="local-guarantee-body">\s*<strong>([^<]+)</strong>',
        False,
        "Z4 · Local Guarantee Title",
    ),
    (
        "z4LocalBody",
        r'<div class="local-guarantee-body">\s*<strong>[^<]+</strong>\s*((?:(?!</div>).)+?)\s*</div>',
        True,
        "Z4 · Local Guarantee Body",
    ),
    (
        "z4OutputLabel",
        r'<div class="block-label muted output">([^<]+)</div>',
        False,
        "Z4 · Output Properties Label",
    ),
    (
        "z4OutCheck1",
        r'<div class="output-checks">\s*<div class="output-check-row">([^<]+)</div>',
        False,
        "Z4 · Output Check 1",
    ),
    (
        "z4OutCheck2",
        r'<div class="output-checks">\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">([^<]+)</div>',
        False,
        "Z4 · Output Check 2",
    ),
    (
        "z4OutCheck3",
        r'<div class="output-checks">\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">([^<]+)</div>',
        False,
        "Z4 · Output Check 3",
    ),
    (
        "z4OutCheck4",
        r'<div class="output-checks">\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">[^<]+</div>\s*<div class="output-check-row">([^<]+)</div>',
        False,
        "Z4 · Output Check 4",
    ),
    (
        "z4Chip1",
        r'<div class="chip-row">\s*<span class="chip green">([^<]+)</span>',
        False,
        "Z4 · Chip 1",
    ),
    (
        "z4Chip2",
        r'<div class="chip-row">\s*<span class="chip green">[^<]+</span>\s*<span class="chip green">([^<]+)</span>',
        False,
        "Z4 · Chip 2",
    ),
    (
        "z4Chip3",
        r'<div class="chip-row">\s*<span class="chip green">[^<]+</span>\s*<span class="chip green">[^<]+</span>\s*<span class="chip green">([^<]+)</span>',
        False,
        "Z4 · Chip 3",
    ),

    # ============================================================
    # 6 CORE CAPABILITIES (also used as zone core-badge labels)
    # ============================================================
    (
        "coreTitle",
        r'<div class="section-title">\s*<span>([^<]+)</span>\s*</div>',
        False,
        "Core · Section Title",
    ),
    (
        "coreWorkflowGroup",
        r'<div class="core-group core-group--workflow">([^<]+)</div>',
        False,
        "Core · Workflow Group Label",
    ),
    (
        "coreApprovalGroup",
        r'<div class="core-group core-group--approval">([^<]+)</div>',
        False,
        "Core · Approval Group Label",
    ),
    (
        "core1Name",
        r'<div class="core-cell c1">\s*<span class="core-num">01</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 01 · Name",
    ),
    (
        "core1Desc",
        r'<div class="core-cell c1">\s*<span class="core-num">01</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 01 · Description",
    ),
    (
        "core2Name",
        r'<div class="core-cell c2">\s*<span class="core-num">02</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 02 · Name",
    ),
    (
        "core2Desc",
        r'<div class="core-cell c2">\s*<span class="core-num">02</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 02 · Description",
    ),
    (
        "core3Name",
        r'<div class="core-cell c3">\s*<span class="core-num">03</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 03 · Name",
    ),
    (
        "core3Desc",
        r'<div class="core-cell c3">\s*<span class="core-num">03</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 03 · Description",
    ),
    (
        "core4Name",
        r'<div class="core-cell c4">\s*<span class="core-num">04</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 04 · Name",
    ),
    (
        "core4Desc",
        r'<div class="core-cell c4">\s*<span class="core-num">04</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 04 · Description",
    ),
    (
        "core5Name",
        r'<div class="core-cell c5">\s*<span class="core-num">05</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 05 · Name",
    ),
    (
        "core5Desc",
        r'<div class="core-cell c5">\s*<span class="core-num">05</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 05 · Description",
    ),
    (
        "core6Name",
        r'<div class="core-cell c6">\s*<span class="core-num">06</span>\s*<div class="core-cell-name">([^<]+)</div>',
        False,
        "Core 06 · Name",
    ),
    (
        "core6Desc",
        r'<div class="core-cell c6">\s*<span class="core-num">06</span>\s*<div class="core-cell-name">[^<]+</div>\s*<div class="core-cell-desc">([^<]+)</div>',
        True,
        "Core 06 · Description",
    ),
    (
        "coreStrip",
        r'<div class="core-bar-strip">([^<]+)</div>',
        False,
        "Core · Bottom Strip",
    ),
]


def main():
    html = INPUT_FILE.read_text(encoding="utf-8")

    # 1. Extract CSS
    css_match = re.search(r"<style>(.*?)</style>", html, re.DOTALL)
    if not css_match:
        print("No <style> block found", file=sys.stderr)
        sys.exit(1)
    css = css_match.group(1).strip()

    # 1-a. Adapt CSS for Framer Code Component
    css = re.sub(r"@media\s*\(", "@container (", css)
    css = re.sub(
        r"(\.section-soft\s*\{[^}]*?)(font-family:[^;]*;)",
        r"\1container-type: inline-size; \2",
        css,
        count=1,
    )
    css = re.sub(r"\bbody\s*\{", ".section-soft {", css)
    css = re.sub(
        r"^\*\s*\{",
        ".section-soft *, .tech-diagram-wrap *, .tech-diagram-annotation * {",
        css,
        count=1,
        flags=re.MULTILINE,
    )

    # 2. Extract body content
    body_match = re.search(r"<body>(.*?)</body>", html, re.DOTALL)
    if not body_match:
        print("No <body> found", file=sys.stderr)
        sys.exit(1)
    body = body_match.group(1).strip()
    body = re.sub(r"^<!--.*?-->\s*", "", body, flags=re.DOTALL)

    prop_values: dict[str, str] = {}
    prop_meta: list[tuple[str, bool, str]] = []  # (name, textarea, title)

    # 3. Section header (3 fields)
    section_head_match = re.search(
        r'<div class="section-head">\s*<div class="eyebrow">(.*?)</div>\s*<h2>(.*?)</h2>\s*<p>(.*?)</p>\s*</div>',
        body,
        re.DOTALL,
    )
    if section_head_match:
        prop_values["eyebrow"] = strip_html_tags(section_head_match.group(1))
        prop_values["sectionTitle"] = strip_html_tags(section_head_match.group(2))
        prop_values["sectionDescription"] = strip_html_tags(section_head_match.group(3))
        body = body.replace(section_head_match.group(0), "<!-- SECTION_HEAD_PLACEHOLDER -->")
    else:
        prop_values["eyebrow"] = "Technical view · zone-based architecture"
        prop_values["sectionTitle"] = "The same architecture, in technical view"
        prop_values["sectionDescription"] = "For architects and security reviewers..."

    prop_meta.append(("eyebrow", False, "Section · Eyebrow"))
    prop_meta.append(("sectionTitle", False, "Section · Title"))
    prop_meta.append(("sectionDescription", True, "Section · Description"))

    # 4. Annotation cards (4 × 3 = 12 fields)
    cards: list[dict[str, str]] = []
    annotation_section = re.search(
        r'<div class="tech-diagram-annotation">(.*?)</div>\s*</div>',
        body,
        re.DOTALL,
    )
    if annotation_section:
        cards_html = annotation_section.group(1)
        for m in re.finditer(
            r'<article class="annotation-card">\s*<div class="annotation-card__num">(.*?)</div>\s*<h3 class="annotation-card__h">(.*?)</h3>\s*<p class="annotation-card__d">(.*?)</p>\s*</article>',
            cards_html,
            re.DOTALL,
        ):
            cards.append(
                {
                    "num": strip_html_tags(m.group(1)),
                    "h": strip_html_tags(m.group(2)),
                    "d": strip_html_tags(m.group(3)),
                }
            )
        # Match annotation block + its closing </div> only (NOT the trailing
        # section-container/section-soft closers, since HTML comments between
        # them break \s* matching). Replace with placeholder; trailing structure
        # divs stay intact.
        # Greedy `.*` so we match through the LAST </article> of the 4 cards,
        # then the annotation div's own </div>. Annotation cards are the only
        # <article> elements in the body, so greedy is safe.
        # Regex consumes: annotation block + annotation's </div> + section-container's </div>.
        # Replacement re-adds section-container's </div> so structure stays balanced.
        new_body, n_sub = re.subn(
            r'<div class="tech-diagram-annotation">.*</article>\s*</div>\s*</div>',
            "<!-- ANNOTATION_CARDS_PLACEHOLDER -->\n  </div>",
            body,
            count=1,
            flags=re.DOTALL,
        )
        if n_sub == 0:
            print("⚠️  Failed to insert ANNOTATION_CARDS_PLACEHOLDER", file=sys.stderr)
        body = new_body

    while len(cards) < 4:
        cards.append({"num": "", "h": "", "d": ""})

    for i, c in enumerate(cards, start=1):
        prop_values[f"card{i}Num"] = c["num"]
        prop_values[f"card{i}Title"] = c["h"]
        prop_values[f"card{i}Description"] = c["d"]
        prop_meta.append((f"card{i}Num", False, f"Card {i} · Num"))
        prop_meta.append((f"card{i}Title", False, f"Card {i} · Title"))
        prop_meta.append((f"card{i}Description", True, f"Card {i} · Description"))

    # 5. Apply all PROP_SPECS regex replacements
    missing: list[str] = []
    for prop_name, pattern, textarea, title in PROP_SPECS:
        m = re.search(pattern, body, re.DOTALL)
        if not m:
            missing.append(prop_name)
            prop_values[prop_name] = ""
            prop_meta.append((prop_name, textarea, title))
            continue
        captured = m.group(1)
        # Always preserve inline HTML (e.g., <br/>, <b>) in default value;
        # only normalize whitespace. Translators should keep the markup.
        default = re.sub(r"\s+", " ", captured).strip()
        prop_values[prop_name] = default
        # Replace group(1) span in body with placeholder
        placeholder = f"{{{{__P_{prop_name}__}}}}"
        body = body[: m.start(1)] + placeholder + body[m.end(1):]
        prop_meta.append((prop_name, textarea, title))

    if missing:
        print(f"⚠️  {len(missing)} prop patterns did not match: {missing}", file=sys.stderr)

    # 6. Build TSX
    iface_block = "\n".join(f"  {name}?: string" for name, _, _ in prop_meta)
    defaults_block = "\n".join(
        f'  {name} = "{js_string_escape(prop_values[name])}",' for name, _, _ in prop_meta
    )
    controls_block = "\n".join(
        f'  {name}: {{ type: ControlType.String, title: "{title}", '
        f'defaultValue: "{js_string_escape(prop_values[name])}"'
        f'{", displayTextArea: true" if textarea else ""} }},'
        for name, textarea, title in prop_meta
    )

    # Build replaceAll block for placeholder substitution
    replace_lines = []
    for name, _, _ in prop_meta:
        if name in ("eyebrow", "sectionTitle", "sectionDescription"):
            continue
        if name.startswith("card") and name.endswith(("Num", "Title", "Description")):
            continue
        # placeholder format with double curly braces
        replace_lines.append(
            f'  html = html.split("{{{{__P_{name}__}}}}").join({name})'
        )
    replace_block = "\n".join(replace_lines)

    tsx = f"""// AUTO-GENERATED. Do not edit by hand.
// Generator: scripts/build-architecture-4zone-tsx.py
// To regenerate: python3 scripts/build-architecture-4zone-tsx.py
//
// Self-contained Framer Code Component for the 4-zone technical architecture page.
// ALL translatable text inside the diagram is exposed as Props. Demo data
// (David Lawson, CS-4203, tokenized samples), SVG icons, short ID labels
// (DB1/DB2/DB3, IN/PROCESS/OUT, ID/CD/BD), and step numbers remain hardcoded.

import {{ addPropertyControls, ControlType }} from "framer"

interface Props {{
{iface_block}
}}

const BODY_HTML = `{js_template_escape(body)}`

const CSS = `{js_template_escape(css)}`

export default function {COMPONENT_NAME}({{
{defaults_block}
}}: Props) {{
  let html = BODY_HTML

  const sectionHead = `
    <div class="section-head">
      <div class="eyebrow">${{eyebrow}}</div>
      <h2>${{sectionTitle}}</h2>
      <p>${{sectionDescription}}</p>
    </div>
  `
  html = html.replace("<!-- SECTION_HEAD_PLACEHOLDER -->", sectionHead)

  const annotationCards = `
    <div class="tech-diagram-annotation">
      <article class="annotation-card">
        <div class="annotation-card__num">${{card1Num}}</div>
        <h3 class="annotation-card__h">${{card1Title}}</h3>
        <p class="annotation-card__d">${{card1Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card2Num}}</div>
        <h3 class="annotation-card__h">${{card2Title}}</h3>
        <p class="annotation-card__d">${{card2Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card3Num}}</div>
        <h3 class="annotation-card__h">${{card3Title}}</h3>
        <p class="annotation-card__d">${{card3Description}}</p>
      </article>
      <article class="annotation-card">
        <div class="annotation-card__num">${{card4Num}}</div>
        <h3 class="annotation-card__h">${{card4Title}}</h3>
        <p class="annotation-card__d">${{card4Description}}</p>
      </article>
    </div>
  `
  html = html.replace("<!-- ANNOTATION_CARDS_PLACEHOLDER -->", annotationCards)

  // Body placeholder substitutions
{replace_block}

  return (
    <>
      <style dangerouslySetInnerHTML={{ {{ __html: CSS }} }} />
      <div dangerouslySetInnerHTML={{ {{ __html: html }} }} />
    </>
  )
}}

addPropertyControls({COMPONENT_NAME}, {{
{controls_block}
}})
"""

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{COMPONENT_NAME}.tsx"
    out_path.write_text(tsx, encoding="utf-8")
    size_kb = out_path.stat().st_size / 1024
    print(f"✓ {out_path.name}  ({size_kb:.1f} KB)")
    print(f"  Props: {len(prop_meta)} total")
    if missing:
        print(f"  ⚠️  Unmatched patterns: {len(missing)} — {missing}")


if __name__ == "__main__":
    main()
