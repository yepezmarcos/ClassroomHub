import { Controller, Get, Param } from "@nestjs/common"
import { StudentsService } from "./students.service"
@Controller("students")
export class StudentsController {
  constructor(private readonly svc: StudentsService) {}
  @Get() async list(){ return this.svc.list() }
  @Get(":id") async one(@Param("id") id: string){ return this.svc.one(id) }
}
