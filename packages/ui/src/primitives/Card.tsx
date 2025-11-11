import * as React from "react"
export const Card: React.FC<React.PropsWithChildren<{className?: string; title?: string;}>> = ({className="", title, children}) => (
  <div className={["rounded-[14px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:shadow-card", className].join(" ")}>
    {title ? <h3 className="mb-3 text-[15px] font-semibold text-[var(--muted)]">{title}</h3> : null}
    {children}
  </div>
)
