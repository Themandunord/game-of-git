import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRequestResolver } from './review-request.resolver';

describe('ReviewRequestResolver', () => {
	let resolver: ReviewRequestResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ReviewRequestResolver]
		}).compile();

		resolver = module.get<ReviewRequestResolver>(ReviewRequestResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
