import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  const port = process.env.PORT || 4000
  await app.listen(port as number)
  console.log(`API up on :${port}`)
}
bootstrap()
