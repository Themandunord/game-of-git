import { RepositoriesService } from "./repositories.service";
import { Test, TestingModule } from "@nestjs/testing";
import { RepositoriesController } from "./repositories.controller";

const repositoriesServiceMock = jest.mock("./repositories.service");

describe("Repositories Controller", () => {
  let controller: RepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoriesService],
      controllers: [RepositoriesController]
    })
      .overrideProvider(RepositoriesService)
      .useValue(repositoriesServiceMock)
      .compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
