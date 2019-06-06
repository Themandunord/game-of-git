import { ARepository } from './ARepository.absgtract';

export const GITHUB_REPOSITORY_TYPE = 'GitHub';

export class GitRepository extends ARepository {
    type = GITHUB_REPOSITORY_TYPE;
}