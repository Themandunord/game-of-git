import { Test, TestingModule } from "@nestjs/testing";
import { PullRequestReviewResolver } from "./pull-request-review.resolver";
import { PrismaService } from "../../../prisma/prisma.service";
import { PrismaModule } from "../../../prisma/prisma.module";
const mockPrismaService = jest.genMockFromModule<PrismaService>(
  "../../../prisma/prisma.service"
);
describe("PullRequestReviewResolver", () => {
  let resolver: PullRequestReviewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PullRequestReviewResolver]
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    resolver = module.get<PullRequestReviewResolver>(PullRequestReviewResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
