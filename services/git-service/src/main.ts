import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	console.log(`Bootstrapping the GitService on port ${process.env.GIT_SERVICE_PORT}`);

	const app = await NestFactory.create(AppModule, { cors: true });
	await app.listen(process.env.GIT_SERVICE_PORT);
}
bootstrap();
