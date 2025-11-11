import { Controller, Get } from '@nestjs/common';

const started = Date.now();

@Controller('health')
export class HealthController {
  @Get()
  get() {
    return {
      ok: true,
      version: '0.1.0',
      uptime: Date.now() - started,
    };
  }
}
