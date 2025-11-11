import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}
  async list(){ return this.prisma.student.findMany({ take: 100 }) }
  async one(id: string){ return this.prisma.student.findUnique({ where: { id } }) }
}
