import * as React from "react"
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({className="", ...props}, ref) => (
  <input ref={ref} className={["rounded-[999px] border border-[var(--border)] bg-[var(--panel)] px-3 py-2 outline-none focus:[box-shadow:var(--focus)]", className].join(" ")} {...props} />
))
Input.displayName = "Input"
