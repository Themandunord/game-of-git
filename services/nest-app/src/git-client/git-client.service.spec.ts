import { Test, TestingModule } from "@nestjs/testing";
import { AppKeyService } from "./app-key/app-key.service";
import { AppKeyModule } from "./app-key/app-key.module";
import { GitClientModule } from "./git-client.module";
import { GitClientService } from "./git-client.service";
import { WebhooksModule } from "./webhooks/webhooks.module";
import { WebhooksService } from "./webhooks/webhooks.service";
import { AppKey } from "../prisma/prisma.binding";

// const appKeyServiceMock = jest.mock('./../app-key/app-key.service');
const appKeyServiceMock = jest.genMockFromModule<AppKeyService>(
  "./app-key/app-key.service"
);
const webhooksServiceMock = jest.mock("./webhooks/webhooks.service");

describe("GitClientService", () => {
  let service: GitClientService;
  const VALID_GIT_APP_KEY = process.env.GIT_TESTING_TOKEN;
  const GIT_USER = process.env.GIT_TESTING_USER;
  const GIT_REPO = process.env.GIT_TESTING_REPOSITORY;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppKeyModule,
        WebhooksModule,
        GitClientModule,
      ],
      providers: [WebhooksService, GitClientService]
    })
      .overrideProvider(AppKeyService)
      .useValue(appKeyServiceMock)
      .overrideProvider(WebhooksService)
      .useValue(webhooksServiceMock)
      .compile();

    service = module.get<GitClientService>(GitClientService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("Webhooks Service Resolves", () => {
    expect(service.webhooks).toBeDefined();
  });

  describe("Testing an App Key", () => {
    // TODO: HttpClient Module + Service to wrap axios and mock the results from GitHub's API
    it("Should return true if the axios post call returns true", async () => {
      await expect(
        service.testAppKey(VALID_GIT_APP_KEY, GIT_USER)
      ).resolves.toEqual(true);
    });

    it("Should return false if the axios post call returns false", async () => {
      await expect(
        service.testAppKey("asdfasdfadsf", GIT_USER)
      ).resolves.toEqual(false);
    });
  });

  describe("Retrieving a user's repositories", () => {
    it("Should return an array of repositories from the API cal", async () => {
      appKeyServiceMock.getAllByUser = jest.fn(async () => [
        {
          key: VALID_GIT_APP_KEY
        } as AppKey
      ]);

      const result = await service.getAll("123123123", GIT_USER, 1);

      // should be an array
      expect(result).toBeInstanceOf(Array);

      expect(result).toHaveLength(1);
    });
  });

  describe("Retrieving the details of a repository", () => {
    it("Should retrieve the details for a repository", async () => {
      const repositoryName = GIT_REPO;
      const repositoryOwner = GIT_USER;
      appKeyServiceMock.getAllByUser = jest.fn(async () => [
        {
          key: VALID_GIT_APP_KEY
        } as AppKey
      ]);

      const result = await service.get(
        "123123",
        repositoryName,
        repositoryOwner
      );

      expect(result).toBeDefined();
      expect(result.name).toEqual(repositoryName);
    });
  });
});
