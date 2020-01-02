import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../prisma/prisma.module';
import { PrismaService } from '../../../prisma/prisma.service';
import { UserInternalModule } from '../../../user/user.internal.module';
import { GitClientModule } from '../git-client.module';
import { AppKeyInternalResolver } from './app-key.internal.resolver';
import { AppKeyResolver } from './app-key.resolver';
import { AppKeyService } from './app-key.service';

// Set all module functions to jest.fn
const prismaServiceMock = jest.mock('../../../prisma/prisma.service');

describe('AppKeyResolver', () => {
    let resolver: AppKeyResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule, GitClientModule, UserInternalModule],
            providers: [AppKeyResolver, AppKeyInternalResolver, AppKeyService]
        })
            .overrideProvider(PrismaService)
            .useValue(prismaServiceMock)
            .compile();

        resolver = module.get<AppKeyResolver>(AppKeyResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    // May want to actually test this one as an E2E
});
