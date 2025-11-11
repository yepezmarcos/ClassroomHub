import * as React from "react"
export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({className="", children, ...props}) => (
  <select className={["rounded-[999px] border border-[var(--border)] bg-[var(--panel)] px-3 py-2 outline-none focus:[box-shadow:var(--focus)]", className].join(" ")} {...props}>
    {children}
  </select>
)
