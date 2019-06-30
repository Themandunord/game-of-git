import { RepositoriesService } from './repositories.service';
import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { RepositoriesResolver } from './repositories.resolver';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Get(':/user/git/:owner')
  public async fromGitRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.getRepositoriesFromGit(user, owner);
  }

  @Get('/:user/refresh/:owner')
  public async refreshRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.refreshRepositories(user, owner);
  }

  @Get('/:user/load/:owner')
  public async getRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.getRepositories(user, owner);
  }

  @Get('/:user/select-set/:owner')
  public async selectionSet(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.selectionSet(user, owner);
  }

  @Post('/:user/toggle-tracking/:id')
  public async toggleTracking(
    @Param('user') user: string,
    @Param('id') idExternal: string,
    @Body('repository') repository: any,
  ) {
    return await this.repositoriesService.toggleTracking(user, idExternal, repository);
  }
}
