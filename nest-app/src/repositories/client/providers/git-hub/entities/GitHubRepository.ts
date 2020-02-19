import { Repository } from '../../../abstract/entities/Repository/abstract';
import { Logger } from '@nestjs/common';

export class GitHubRepository extends Repository {
    private readonly logger = new Logger('GitHubRepositoryClient');
    constructor() {
        super();
    }

    public async search<GitHubRepositorySearchParams>(
        searchParams
    ): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    public async getBy<GetByParams>(getByParams: GetByParams): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
}
