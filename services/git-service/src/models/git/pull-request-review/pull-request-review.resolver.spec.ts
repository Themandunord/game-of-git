import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestReviewResolver } from './pull-request-review.resolver';

describe('PullRequestReviewResolver', () => {
	let resolver: PullRequestReviewResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PullRequestReviewResolver]
		}).compile();

		resolver = module.get<PullRequestReviewResolver>(PullRequestReviewResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
