import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@hub/ui"
import { ThemeProvider } from "next-themes"
import React from "react"
export const metadata: Metadata = { title: "Classroom Hub", description: "Teacher platform" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <div className="grid min-h-screen grid-cols-[260px_1fr]">
            <Sidebar />
            <main className="p-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
