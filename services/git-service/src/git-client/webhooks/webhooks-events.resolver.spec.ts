import { Test, TestingModule } from '@nestjs/testing';
import { WebhookEventsResolver } from './webhooks-events.resolver';

describe('WebhookEventsResolver', () => {
	let resolver: WebhookEventsResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [WebhookEventsResolver]
		}).compile();

		resolver = module.get<WebhookEventsResolver>(WebhookEventsResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
