import { RepositoriesService } from './repositories.service';
import { Controller, Param, Get, Post, Body } from '@nestjs/common';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Get('/:user/git/:owner')
  public async fromGitRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.getRepositoriesFromGit(user, owner);
  }

  @Get('/:user/git/:owner/:repo')
  public async getRepository(
    @Param('user') user: string,
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    const resp = await this.repositoriesService.getRepositoryFromGit(user, owner, repo);

    return resp;
  }

  @Get('/:user/refresh/:owner')
  public async refreshRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.refreshRepositories(user, owner);
  }

  @Get('/:user/sync-store')
  public async syncStore(@Param('user') user: string) {
    return await this.repositoriesService.syncStore(user);
  }

  @Get('/:user/load/:owner')
  public async getRepositories(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.getRepositories(user, owner);
  }

  @Get('/:user/select-set/:owner')
  public async selectionSet(@Param('user') user: string, @Param('owner') owner: string) {
    return await this.repositoriesService.selectionSet(user, owner);
  }

  @Post('/:user/toggle-tracking/:owner/:id/:name')
  public async toggleTracking(
    @Param('user') user: string,
    @Param('owner') owner: string,
    @Param('id') idExternal: string,
    @Param('name') name: string
  ) {
    return await this.repositoriesService.toggleTracking(user, owner, idExternal, name);
  }
}
