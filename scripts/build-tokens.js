#!/usr/bin/env node
/**
 * build-tokens.js — Generate all token outputs from tokens.json
 *
 * Usage: node scripts/build-tokens.js
 *
 * Reads:  llm-capsule/reference/tokens.json
 * Writes:
 *   - llm-capsule/reference/tokens.css          (HTML B-type :root variables)
 *   - llm-capsule/reference/TokenProvider.tsx    (Framer — :root injector component)
 *   - llm-capsule/reference/viewer-tokens.css   (Viewer linked CSS)
 *   - .claude/skills/design-system-capsule.md    (Agent reference — auto-generated section)
 */

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")
const TOKENS_PATH = path.join(ROOT, "llm-capsule/reference/tokens.json")

const tokens = JSON.parse(fs.readFileSync(TOKENS_PATH, "utf8"))

// ─── 1. tokens.css ───────────────────────────────────────────────────────────

function buildCSS() {
  const lines = [
    "/* Auto-generated from tokens.json — DO NOT EDIT */",
    `/* Brand: ${tokens.brand} v${tokens.version} */`,
    "",
    ":root {",
  ]

  // Colors
  lines.push("  /* Colors */")
  for (const [key, val] of Object.entries(tokens.color)) {
    lines.push(`  ${val.css}: ${val.value};`)
  }
  lines.push("")

  // Fonts
  lines.push("  /* Fonts */")
  for (const [key, val] of Object.entries(tokens.font)) {
    lines.push(`  ${val.css}: ${val.value};`)
  }
  lines.push("")

  // Spacing
  lines.push("  /* Spacing */")
  for (const [key, val] of Object.entries(tokens.spacing)) {
    lines.push(`  ${val.css}: ${val.value};`)
  }
  lines.push("")

  // Radius
  lines.push("  /* Radius */")
  for (const [key, val] of Object.entries(tokens.radius)) {
    lines.push(`  ${val.css}: ${val.value};`)
  }
  lines.push("")

  // Container
  lines.push("  /* Container */")
  for (const [key, val] of Object.entries(tokens.container)) {
    lines.push(`  ${val.css}: ${val.value};`)
  }

  lines.push("}")
  lines.push("")

  return lines.join("\n")
}

// ─── 2. TokenProvider.tsx ────────────────────────────────────────────────────

function buildTokenProvider() {
  const cssVars = []

  for (const [key, val] of Object.entries(tokens.color)) {
    cssVars.push(`        ${val.css}: ${val.value};`)
  }
  for (const [key, val] of Object.entries(tokens.font)) {
    cssVars.push(`        ${val.css}: ${val.value};`)
  }
  for (const [key, val] of Object.entries(tokens.spacing)) {
    cssVars.push(`        ${val.css}: ${val.value};`)
  }
  for (const [key, val] of Object.entries(tokens.radius)) {
    cssVars.push(`        ${val.css}: ${val.value};`)
  }
  for (const [key, val] of Object.entries(tokens.container)) {
    cssVars.push(`        ${val.css}: ${val.value};`)
  }

  return `// Auto-generated from tokens.json — DO NOT EDIT
// Brand: ${tokens.brand} v${tokens.version}

export default function TokenProvider() {
  return (
    <style>{\`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

      :root {
${cssVars.join("\n")}
      }
    \`}</style>
  )
}

TokenProvider.displayName = "Design Tokens"
`
}

// ─── 3. TSX palette block (for injection into section TSX files) ─────────────

function buildTSXPalette() {
  const lines = [
    "// ── Auto-generated from tokens.json — DO NOT EDIT ──",
    "const C = {",
  ]

  for (const [key, val] of Object.entries(tokens.color)) {
    const camelKey = key.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
    lines.push(`  ${camelKey}: "${val.value}",`)
  }
  lines.push("} as const")
  lines.push("")
  lines.push("const Font = {")
  for (const [key, val] of Object.entries(tokens.font)) {
    lines.push(`  ${key}: "${val.value}",`)
  }
  lines.push("} as const")
  lines.push("")
  lines.push("const Radius = {")
  for (const [key, val] of Object.entries(tokens.radius)) {
    lines.push(`  ${key}: "${val.value}",`)
  }
  lines.push("} as const")
  lines.push("// ── End auto-generated ──")

  return lines.join("\n")
}

// ─── 4. CSS variable mapping (old DS var → new var) for migration reference ──

function buildMigrationMap() {
  const map = {
    // Old capsule brand colors → new
    "#1821E8": { new: "var(--c-primary, #5b4fe9)",      note: "brand-primary" },
    "#5690D4": { new: "var(--c-teal, #0ea5a4)",          note: "brand-secondary → teal" },
    "#55B45D": { new: "var(--c-teal, #0ea5a4)",           note: "brand-accent green → teal" },
    "#B8D4EE": { new: "var(--c-primary-soft, #eeebfe)",   note: "brand-light" },
    // Old neutrals
    "#0f0f0f": { new: "var(--c-ink, #0f1130)",            note: "text-primary" },
    "#171719": { new: "var(--c-bg-dark, #0f1130)",        note: "surface-dark" },
    "#141414": { new: "var(--c-bg-dark, #0f1130)",        note: "neutral-850" },
    "#303135": { new: "var(--c-bg-dark-2, #1b1d4a)",      note: "neutral-700" },
    "#636363": { new: "var(--c-ink-soft, #3a3d5e)",       note: "text-secondary" },
    "#9c9c9c": { new: "var(--c-muted, #6b7280)",          note: "text-tertiary" },
    "#e6e7e9": { new: "var(--c-rule, #e5e7eb)",           note: "border-default" },
    "#f7f7f7": { new: "var(--c-bg-soft, #f7f8fb)",        note: "surface-light" },
    "#f2f2f2": { new: "var(--c-bg-soft, #f7f8fb)",        note: "surface-mid" },
    "#ececec": { new: "var(--c-bg-soft, #f7f8fb)",        note: "neutral-100" },
    "#ffffff": { new: "var(--c-bg, #ffffff)",              note: "white" },
    // Functional
    "#0e824c": { new: "var(--c-teal, #0ea5a4)",           note: "success → teal" },
    "#ff3030": { new: "var(--c-coral, #ef5350)",          note: "error → coral" },
  }

  const lines = ["# Color Migration Map (old hex → new CSS var)", ""]
  lines.push("| Old Hex | New CSS Variable | Note |")
  lines.push("|---------|-----------------|------|")
  for (const [hex, info] of Object.entries(map)) {
    lines.push(`| ${hex} | ${info.new} | ${info.note} |`)
  }

  return { map, markdown: lines.join("\n") }
}

// ─── 5. design-system-capsule.md snippet ─────────────────────────────────────

function buildCapsuleMDSnippet() {
  const lines = [
    "## Brand Color System (v" + tokens.version + ")",
    "",
    "| CSS Variable | Value | Description |",
    "|-------------|-------|-------------|",
  ]

  for (const [key, val] of Object.entries(tokens.color)) {
    lines.push(`| \`${val.css}\` | \`${val.value}\` | ${val.desc} |`)
  }
  lines.push("")
  lines.push("## Typography")
  lines.push("")
  lines.push("| CSS Variable | Value |")
  lines.push("|-------------|-------|")
  for (const [key, val] of Object.entries(tokens.font)) {
    lines.push(`| \`${val.css}\` | \`${val.value}\` |`)
  }
  lines.push("")
  lines.push("## Spacing & Layout")
  lines.push("")
  lines.push("| CSS Variable | Value |")
  lines.push("|-------------|-------|")
  for (const [key, val] of Object.entries(tokens.spacing)) {
    lines.push(`| \`${val.css}\` | \`${val.value}\` |`)
  }
  for (const [key, val] of Object.entries(tokens.radius)) {
    lines.push(`| \`${val.css}\` | \`${val.value}\` |`)
  }
  for (const [key, val] of Object.entries(tokens.container)) {
    lines.push(`| \`${val.css}\` | \`${val.value}\` |`)
  }

  return lines.join("\n")
}

// ─── Execute ─────────────────────────────────────────────────────────────────

const css = buildCSS()
const tokenProvider = buildTokenProvider()
const tsxPalette = buildTSXPalette()
const { map: migrationMap, markdown: migrationMD } = buildMigrationMap()
const capsuleSnippet = buildCapsuleMDSnippet()

// Write files
const outDir = path.join(ROOT, "llm-capsule/reference")
fs.writeFileSync(path.join(outDir, "tokens.css"), css)
fs.writeFileSync(path.join(outDir, "viewer-tokens.css"), css) // same content for viewer
fs.writeFileSync(path.join(outDir, "TokenProvider.tsx"), tokenProvider)
fs.writeFileSync(path.join(outDir, "tsx-palette-block.txt"), tsxPalette)
fs.writeFileSync(path.join(outDir, "migration-map.md"), migrationMD)

console.log("✓ tokens.css")
console.log("✓ viewer-tokens.css")
console.log("✓ TokenProvider.tsx")
console.log("✓ tsx-palette-block.txt")
console.log("✓ migration-map.md")
console.log("")
console.log("Token count:", Object.keys(tokens.color).length, "colors,",
  Object.keys(tokens.font).length, "fonts,",
  Object.keys(tokens.radius).length, "radius,",
  Object.keys(tokens.spacing).length, "spacing")
