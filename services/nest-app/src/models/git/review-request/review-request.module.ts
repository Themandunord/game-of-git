import { Module } from "@nestjs/common";
import { ReviewRequestService } from "./review-request.service";
import { ReviewRequestController } from "./review-request.controller";
import { ReviewRequestResolver } from "./review-request.resolver";
import { PrismaModule } from "../../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [ReviewRequestService, ReviewRequestResolver],
  controllers: [ReviewRequestController]
})
export class ReviewRequestModule {}
