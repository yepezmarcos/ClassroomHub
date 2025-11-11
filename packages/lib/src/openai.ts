type Mode = "text" | "json"
export async function openai(mode: Mode, prompt: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    if (mode === "json") return JSON.stringify({ summary: "Mock output (no OPENAI_API_KEY set)", prompt })
    return `Mock: ${prompt.slice(0, 160)}…`
  }
  return `TODO: OpenAI call with mode=${mode}`
}
