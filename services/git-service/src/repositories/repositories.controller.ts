import { RepositoriesService } from './repositories.service';
import { Controller, Param, Get, Post, Body, Logger } from '@nestjs/common';

@Controller('repositories')
export class RepositoriesController {
	private readonly logger = new Logger('RepositoriesController');
	constructor(private readonly repositoriesService: RepositoriesService) {}

	// Interacting only with Internally-Stored Repositories/State

	/**
	 * @todo rejig and rename this to be more accurate to it's purpose: retrieving all of a user's stored repositories and their data
	 * @param user
	 */
	@Get('/:user/get-tracked-repositories')
	public async getTrackedRepositories(@Param('user') user: string) {
		return await this.repositoriesService.getAll(user);
	}

	/**
	 * Toggle whether a repository is to be tracked by GameOfGit
	 *
	 * @param user
	 * @param owner
	 * @param idExternal
	 * @param name
	 */
	@Post('/:user/toggle-tracking/:owner/:id/:name')
	public async toggleTracking(
		@Param('user') user: string,
		@Param('owner') owner: string,
		@Param('id') idExternal: string,
		@Param('name') name: string
	) {
		return await this.repositoriesService.toggleTracking(user, owner, idExternal, name);
	}

	// Interacting with both GitHub and internally stored repos

	/**
	 * Retrieve a particular Repositiry of a GitHub User
	 *
	 * @param user
	 * @param owner
	 * @param repo
	 */
	@Get('/:user/git/:owner/:repo')
	public async getRepository(
		@Param('user') user: string,
		@Param('owner') owner: string,
		@Param('repo') repo: string
	) {
		const resp = await this.repositoriesService.getRepositoryWithFreshGitData(
			user,
			owner,
			repo
		);

		return resp;
	}

	/**
	 * Retrieve the Repository Selection Set for a given GitHub User
	 *
	 * This loads all of a User's the selectable repositories and their current tracked status
	 *
	 * @param user
	 * @param owner
	 */
	@Get('/:user/select-set/:owner')
	public async selectionSet(@Param('user') user: string, @Param('owner') owner: string) {
		return await this.repositoriesService.selectionSet(user, owner);
	}
}
