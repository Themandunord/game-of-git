import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyResolver } from './app-key.resolver';

describe('AppKeyResolver', () => {
  let resolver: AppKeyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppKeyResolver],
    }).compile();

    resolver = module.get<AppKeyResolver>(AppKeyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
