import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestResolver } from './pull-request.resolver';

describe('PullRequestResolver', () => {
	let resolver: PullRequestResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PullRequestResolver]
		}).compile();

		resolver = module.get<PullRequestResolver>(PullRequestResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
