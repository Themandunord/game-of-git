import { Test, TestingModule } from "@nestjs/testing";
import { ReviewRequestController } from "./review-request.controller";

describe("ReviewRequest Controller", () => {
  let controller: ReviewRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewRequestController]
    }).compile();

    controller = module.get<ReviewRequestController>(ReviewRequestController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
