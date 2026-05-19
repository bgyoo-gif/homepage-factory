// MINIMUM TEST: Framer ControlType.Enum prop update verification.
// Paste this into Framer as a new Code Component.
// In Properties panel, change "Locale" dropdown.
// If the text on canvas changes → Framer Enum works fine.
// If the text stays "Hello" forever → Framer Enum is broken in your environment.

import { addPropertyControls, ControlType } from "framer"

interface Props {
  langMode?: "en" | "ko" | "de"
}

export default function LocaleTest({ langMode = "en" }: Props) {
  const greetings: Record<string, string> = {
    en: "Hello (영어)",
    ko: "안녕 (한국어)",
    de: "Hallo (독일어)",
  }
  const text = greetings[langMode] || greetings.en

  return (
    <div
      style={{
        padding: 40,
        fontSize: 32,
        fontFamily: "monospace",
        background: "#fff59d",
        border: "4px solid #f57f17",
        textAlign: "center",
        minWidth: 400,
      }}
    >
      <div style={{ fontSize: 14, marginBottom: 12, color: "#666" }}>
        langMode prop = <strong>"{langMode}"</strong>
      </div>
      <div style={{ fontSize: 48, fontWeight: "bold", color: "#000" }}>
        {text}
      </div>
      <div style={{ fontSize: 12, marginTop: 12, color: "#666" }}>
        ↑ Locale 드롭다운 변경 시 이 텍스트가 바뀌어야 함
      </div>
    </div>
  )
}

addPropertyControls(LocaleTest, {
  langMode: {
    type: ControlType.Enum,
    title: "Locale",
    options: ["en", "ko", "de"],
    optionTitles: ["English", "한국어", "Deutsch"],
    defaultValue: "en",
  },
})
