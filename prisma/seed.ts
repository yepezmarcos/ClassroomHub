import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main(){
  const tenant = await prisma.tenant.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: { id: "00000000-0000-0000-0000-000000000001", name: "Demo School" }
  })
  const user = await prisma.user.upsert({
    where: { email: "teacher@example.com" },
    update: {},
    create: { email: "teacher@example.com", name: "Demo Teacher" }
  })
  await prisma.membership.create({ data: { role: "TEACHER", tenantId: tenant.id, userId: user.id } })

  const classes = ["Grade 3", "Grade 4", "Grade 5"]
  const subjects = ["Math", "Reading", "Science"]
  const classrooms = await Promise.all(classes.map(name => prisma.classroom.create({ data: { name, tenantId: tenant.id } })))

  const names: [string,string,string][] = [
    ["Marcos","Yepez","Male"],["Ava","Chen","Female"],["Liam","Khan","Male"],["Noah","Singh","Male"],
    ["Emma","Patel","Female"],["Olivia","Nguyen","Female"],["Isabella","Rossi","Female"],["Mia","Wong","Female"],
    ["Ethan","Kim","Male"],["Sophia","Garcia","Female"],["Lucas","Brown","Male"],["Amelia","Davis","Female"]
  ]

  for (let i=0;i<names.length;i++){
    const [first,last,gender] = names[i]
    const className = classes[i % classes.length]
    const student = await prisma.student.create({ data: { first, last, className, gender, tenantId: tenant.id, flagsEal: i%5===0, flagsMed: i%7===0 } })
    const guardian = await prisma.guardian.create({ data: { name: (gender==="Male" ? "Mr. ":"Ms. ") + last, email: `${first[0].toLowerCase()}${last.toLowerCase()}@example.com`, phone: `555-${String(1200+i).padStart(4,"0")}`, tenantId: tenant.id } })
    await prisma.studentGuardian.create({ data: { studentId: student.id, guardianId: guardian.id } })
    const classroom = classrooms[i % classrooms.length]
    await prisma.enrollment.create({ data: { studentId: student.id, classroomId: classroom.id } })
  }

  for (const classroom of classrooms){
    for (const subject of subjects){
      const a1 = await prisma.assignment.create({ data: { name: "HW 1", term: "T1", subject, max: 10, category: "Homework", classroomId: classroom.id } })
      const a2 = await prisma.assignment.create({ data: { name: "Quiz 1", term: "T1", subject, max: 20, category: "Quizzes", classroomId: classroom.id } })
      const students = await prisma.enrollment.findMany({ where: { classroomId: classroom.id }, include: { student: true } })
      for (const { student } of students){
        const roll = Math.random()
        if(roll < .08) await prisma.grade.create({ data: { studentId: student.id, assignmentId: a1.id, points: 0, missing: true } })
        else if (roll < .12) await prisma.grade.create({ data: { studentId: student.id, assignmentId: a1.id, points: 0, ungraded: true } })
        else { const pts = Math.max(0, Math.round(10*(0.6 + Math.random()*0.35))); await prisma.grade.create({ data: { studentId: student.id, assignmentId: a1.id, points: pts } }) }
        const pts2 = Math.max(0, Math.round(20*(0.6 + Math.random()*0.35)))
        await prisma.grade.create({ data: { studentId: student.id, assignmentId: a2.id, points: pts2 } })
      }
    }
  }
  console.log("Seed complete")
}
main().catch(e => { console.error(e); process.exit(1) }).finally(async () => { await prisma.$disconnect() })
