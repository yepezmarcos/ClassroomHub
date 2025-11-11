import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [HealthModule, StudentsModule],
})
export class AppModule {}
