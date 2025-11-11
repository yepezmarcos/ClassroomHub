export type Role = "OWNER"|"ADMIN"|"TEACHER"|"FAMILY"
export function can(role: Role, action: string): boolean {
  if (role === "OWNER" || role === "ADMIN") return true
  if (role === "TEACHER") return !action.startsWith("admin.")
  return action.startsWith("family.read")
}
