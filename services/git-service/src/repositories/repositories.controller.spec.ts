import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesController } from './repositories.controller';

describe('Repositories Controller', () => {
  let controller: RepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoriesController],
    }).compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
