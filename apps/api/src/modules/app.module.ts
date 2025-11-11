import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { HealthModule } from "./health/health.module"
import { StudentsModule } from "./students/students.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    StudentsModule
  ]
})
export class AppModule {}
