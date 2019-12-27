import { Test, TestingModule } from '@nestjs/testing';
import { FileDiffService } from './file-diff.service';

describe('FileDiffService', () => {
    let service: FileDiffService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FileDiffService]
        }).compile();

        service = module.get<FileDiffService>(FileDiffService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
