import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesResolver } from './repositories.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';

// Set all module functions to jest.fn
const prismaServiceMock = jest.mock('./../prisma/prisma.service');

describe('RepositoriesResolver', () => {
  let resolver: RepositoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [RepositoriesResolver],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaServiceMock)
      .compile();

    resolver = module.get<RepositoriesResolver>(RepositoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
