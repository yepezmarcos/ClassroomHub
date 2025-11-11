import * as React from "react"
import Link from "next/link"
const NavItem: React.FC<{href: string; children: React.ReactNode;}> = ({href, children}) => (
  <Link href={href} className="rounded-[14px] border border-[var(--border)] bg-[var(--panel)] px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]">
    {children}
  </Link>
)
export const Sidebar: React.FC = () => (
  <aside className="flex min-h-screen w-[260px] flex-col gap-3 border-r border-[var(--border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--panel)_92%,transparent),var(--bg-elev))] p-6">
    <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--panel)_92%,transparent)] p-3 shadow-[var(--shadow)]">
      <div aria-hidden className="text-xl translate-y-[-1px]">📘</div>
      <div><h1 className="text-[20px] leading-tight">Classroom Hub</h1><p className="text-[13px] text-[var(--muted)]">Grades • Comments • Profiles • Notes</p></div>
    </div>
    <nav className="grid gap-2">
      <NavItem href="/dashboard">📊 Dashboard</NavItem>
      <NavItem href="/students">🧑‍🎓 Students</NavItem>
      <NavItem href="/gradebook">📚 Gradebook</NavItem>
      <NavItem href="/generator">💬 LS Comment Generator</NavItem>
      <NavItem href="/comment-bank">🗂️ LS Comment Bank</NavItem>
      <NavItem href="/planner">📅 Planner</NavItem>
      <NavItem href="/contacts">📧 Contacts</NavItem>
      <NavItem href="/email-templates">📨 Email Templates</NavItem>
      <NavItem href="/behavior">🎯 Behavior</NavItem>
      <NavItem href="/resources">📂 Resources</NavItem>
      <NavItem href="/messaging">📬 Messaging</NavItem>
      <NavItem href="/reports">📄 Reports</NavItem>
      <NavItem href="/settings">⚙️ Settings</NavItem>
    </nav>
  </aside>
)
