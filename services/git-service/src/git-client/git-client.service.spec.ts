import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyService } from '../app-key/app-key.service';
import { AppKeyModule } from './../app-key/app-key.module';
import { GitClientService } from './git-client.service';

const appKeyServiceMock = jest.mock('./../app-key/app-key.service');

describe('GitClientService', () => {
  let service: GitClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppKeyModule],
      providers: [GitClientService],
    })
      .overrideProvider(AppKeyService)
      .useValue(appKeyServiceMock)
      .compile();

    service = module.get<GitClientService>(GitClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  xdescribe('Testing an App Key', () => {
    // TODO: HttpClient Module + Service to wrap axios and mock the results from GitHub's API
    it('Should return true if the axios post call returns true', async () => {
      // await expect(service.testAppKey(key, user)).resolves.toEqual(true);
    });
  });

  xdescribe('Retrieving a user\'s repositories', () => {});
});
