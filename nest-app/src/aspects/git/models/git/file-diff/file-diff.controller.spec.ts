import { Test, TestingModule } from '@nestjs/testing';
import { FileDiffController } from './file-diff.controller';

describe('FileDiff Controller', () => {
    let controller: FileDiffController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FileDiffController]
        }).compile();

        controller = module.get<FileDiffController>(FileDiffController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
