import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyService } from './app-key.service';

describe('AppKeyService', () => {
  let service: AppKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppKeyService],
    }).compile();

    service = module.get<AppKeyService>(AppKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
