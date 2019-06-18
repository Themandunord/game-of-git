import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  console.log('Port to use: ' + process.env.GIT_SERVICE_PORT);
  await app.listen(process.env.GIT_SERVICE_PORT);
}
bootstrap();
