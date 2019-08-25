import { Test, TestingModule } from "@nestjs/testing";
import { AppKeyModule } from "../git-client/app-key/app-key.module";
import { GitClientService } from "./../git-client/git-client.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

const usersServiceMock = jest.mock("./users.service");
const gitClientServiceMock = jest.mock("./../git-client/git-client.service");

describe("Users Controller", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppKeyModule,
      ],
      providers: [
        UsersService
      ],
      controllers: [UsersController]
    })
      .overrideProvider(UsersService)
      .useValue(usersServiceMock)
      .overrideProvider(GitClientService)
      .useValue(gitClientServiceMock)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  xdescribe("Who am I / Retrieve User Data", () => {});
});
