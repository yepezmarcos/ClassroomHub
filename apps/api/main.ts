import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js'; // 👈 Add `.js` if using "type": "module", otherwise remove it

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3001);
  console.log(`API running on http://localhost:${process.env.PORT || 3001}`);
}
bootstrap();
