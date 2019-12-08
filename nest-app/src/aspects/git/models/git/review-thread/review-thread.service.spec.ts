import { Test, TestingModule } from '@nestjs/testing';
import { ReviewThreadService } from './review-thread.service';

describe('ReviewThreadService', () => {
    let service: ReviewThreadService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ReviewThreadService]
        }).compile();

        service = module.get<ReviewThreadService>(ReviewThreadService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
