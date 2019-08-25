import { Test, TestingModule } from '@nestjs/testing';
import { FileDiffResolver } from './file-diff.resolver';

describe('FileDiffResolver', () => {
	let resolver: FileDiffResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [FileDiffResolver]
		}).compile();

		resolver = module.get<FileDiffResolver>(FileDiffResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
