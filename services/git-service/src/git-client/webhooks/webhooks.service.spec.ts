import { AppKeyModule } from './../../app-key/app-key.module';
import { GitClientService } from './../git-client.service';
import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksService } from './webhooks.service';

describe('WebhooksService', () => {
  let service: WebhooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppKeyModule],
      providers: [WebhooksService, GitClientService],
    }).compile();

    service = module.get<WebhooksService>(WebhooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
