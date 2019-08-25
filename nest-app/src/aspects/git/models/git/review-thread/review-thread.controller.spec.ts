import { Test, TestingModule } from '@nestjs/testing';
import { ReviewThreadController } from './review-thread.controller';

describe('ReviewThread Controller', () => {
    let controller: ReviewThreadController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ReviewThreadController]
        }).compile();

        controller = module.get<ReviewThreadController>(ReviewThreadController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
