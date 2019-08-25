import { Test, TestingModule } from "@nestjs/testing";
import { PullRequestResolver } from "./pull-request.resolver";
import { PrismaService } from "../../../prisma/prisma.service";
import { PrismaModule } from "../../../prisma/prisma.module";
const mockPrismaService = jest.genMockFromModule<PrismaService>(
  "../../../prisma/prisma.service"
);

describe("PullRequestResolver", () => {
  let resolver: PullRequestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PullRequestResolver]
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    resolver = module.get<PullRequestResolver>(PullRequestResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
