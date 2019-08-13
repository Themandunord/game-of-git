import { Test, TestingModule } from '@nestjs/testing';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';

const mockPrismaService = jest.genMockFromModule<PrismaService>('../../prisma/prisma.service');

describe('WebhookEventsResolver', () => {
	let resolver: WebhookEventsResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [WebhookEventsResolver]
		})
			.overrideProvider(PrismaService)
			.useValue(mockPrismaService)
			.compile();

		resolver = module.get<WebhookEventsResolver>(WebhookEventsResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
