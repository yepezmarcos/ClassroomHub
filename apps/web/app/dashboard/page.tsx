import { Card } from "@hub/ui"
export default function Page(){
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      <Card title="Class Average"><div className="text-3xl font-bold">—</div><div className="text-sm text-[var(--muted)]">Avg across visible students</div></Card>
      <Card title="⚠️ Needs Attention"><ul className="text-sm"><li>Ungraded items: <strong>0</strong></li><li>Missing submissions: <strong>0</strong></li><li>Parent follow-ups due: <strong>0</strong></li></ul></Card>
      <Card title="🧑‍🎓 At-Risk"><ul className="text-sm"><li>—</li></ul></Card>
      <Card title="🗓️ Upcoming (7 days)"><ul className="text-sm"><li>—</li></ul></Card>
    </div>
  )
}
