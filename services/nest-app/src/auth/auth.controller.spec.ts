import { UsersModule } from "./../users/users.module";
import { AuthService } from "./auth.service";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { UsersService } from "../users/users.service";
import { User } from "../prisma/prisma.binding";
import { RepositoryWebhookSchema } from "../git-client/webhooks/RepositoryWebhook.schema";

const mockAuthService = jest.mock("./auth.service");
const mockUsersService = jest.mock("../users/users.service");

describe("Auth Controller", () => {
  let controller: AuthController;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
      ],
      providers: [AuthService],
      controllers: [AuthController]
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  xdescribe("The Login route", () => {});
  // Invalid Login
  // Valid Login
  xdescribe("The JWT refresh route", () => {});
});
