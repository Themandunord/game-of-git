import { PrismaModule } from './../../../../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { TopicResolver } from './topic.resolver';
import { PrismaService } from '../../../../prisma/prisma.service';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('TopicResolver', () => {
    let resolver: TopicResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [TopicResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<TopicResolver>(TopicResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
