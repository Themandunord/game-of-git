import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesResolver } from './repositories.resolver';

import ps from '../pubsub';
import { RepositoriesService } from './repositories.service';

// Set all module functions to jest.fn
// const prismaServiceMock = jest.mock('./../prisma/prisma.service');

describe('RepositoriesResolver', () => {
    let resolver: RepositoriesResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                RepositoriesResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                },
                RepositoriesService
            ]
        }).compile();

        resolver = module.get<RepositoriesResolver>(RepositoriesResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
