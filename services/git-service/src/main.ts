import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Logger from './utilities/Logger';

async function bootstrap() {
	Logger.info(`Bootstrapping the GitService on port ${process.env.GIT_SERVICE_PORT}`);

	const app = await NestFactory.create(AppModule, { cors: true });
	await app.listen(process.env.GIT_SERVICE_PORT);
}
bootstrap();
