import * as React from "react"
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"ghost"|"danger"|"primary"|"link"|"small" }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant="default", className="", ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-[999px] border px-4 py-2 text-sm transition"
  const styles: Record<string,string> = {
    default: "bg-[var(--panel)] border-[var(--border)] hover:shadow-[var(--shadow)]",
    ghost: "bg-transparent border-[var(--border)] hover:shadow-[var(--shadow)]",
    primary: "bg-[var(--brand)] text-white border-[var(--brand)]",
    danger: "text-[var(--danger)] border-[color-mix(in srgb,var(--danger) 55%,var(--border))]",
    link: "border-none bg-transparent text-[var(--brand)] px-0",
    small: "text-xs px-3 py-1.5"
  }
  const cls = [base, styles[variant] || styles.default, className].join(" ")
  return <button ref={ref} className={cls} {...props} />
})
Button.displayName = "Button"
