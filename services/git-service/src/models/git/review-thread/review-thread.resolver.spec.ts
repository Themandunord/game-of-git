import { Test, TestingModule } from '@nestjs/testing';
import { ReviewThreadResolver } from './review-thread.resolver';

describe('ReviewThreadResolver', () => {
	let resolver: ReviewThreadResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ReviewThreadResolver]
		}).compile();

		resolver = module.get<ReviewThreadResolver>(ReviewThreadResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
