import { PrismaModule } from "./../../../prisma/prisma.module";
import { Test, TestingModule } from "@nestjs/testing";
import { ReviewThreadResolver } from "./review-thread.resolver";
import { PrismaService } from "../../../prisma/prisma.service";

const mockPrismaService = jest.genMockFromModule<PrismaService>(
  "../../../prisma/prisma.service"
);

describe("ReviewThreadResolver", () => {
  let resolver: ReviewThreadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ReviewThreadResolver]
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    resolver = module.get<ReviewThreadResolver>(ReviewThreadResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
