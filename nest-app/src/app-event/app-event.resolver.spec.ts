import { Test, TestingModule } from '@nestjs/testing';
import { AppEventResolver } from './app-event.resolver';

describe('AppEventResolver', () => {
  let resolver: AppEventResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppEventResolver],
    }).compile();

    resolver = module.get<AppEventResolver>(AppEventResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
