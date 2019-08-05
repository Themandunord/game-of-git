import { Test } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';
import { UsersResolver } from './users.resolver';

// Set all module functions to jest.fn
const prismaServiceMock = jest.mock('./../prisma/prisma.service');

describe('UsersResolver', () => {
	let resolver: UsersResolver;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [UsersResolver],
		})
			.overrideProvider(PrismaService)
			.useValue(prismaServiceMock)
			.compile();

		// if testing E2E endpoints
		// app = module.createNestApplication();
		// await app.init();
		// await app.listenAsync(3000);

		resolver = module.get<UsersResolver>(UsersResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
