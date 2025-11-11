import { z } from "zod"
export const TenantSchema = z.object({ id: z.string().uuid(), name: z.string() })
export const StudentSchema = z.object({
  id: z.string().uuid(), first: z.string(), last: z.string(), className: z.string(), gender: z.string().optional(),
  flags: z.object({ iep: z.boolean().optional(), eal: z.boolean().optional(), atRisk: z.boolean().optional(), med: z.boolean().optional(), accom: z.string().optional() }).optional()
})
export type Student = z.infer<typeof StudentSchema>
