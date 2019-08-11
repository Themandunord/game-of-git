import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyResolver } from './app-key.resolver';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';

// Set all module functions to jest.fn
const prismaServiceMock = jest.mock('../../prisma/prisma.service');

describe('AppKeyResolver', () => {
	let resolver: AppKeyResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [AppKeyResolver]
		})
			.overrideProvider(PrismaService)
			.useValue(prismaServiceMock)
			.compile();

		resolver = module.get<AppKeyResolver>(AppKeyResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
