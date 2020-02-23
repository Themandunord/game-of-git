import { Repository } from '../../../abstract/entities/Repository/abstract';
import { Logger } from '@nestjs/common';

type SampleRepositorySearchParams = {};

type GetByParams = {};

const repositories = [];

export class SampleRepository extends Repository {
    private repositories = repositories;
    private readonly logger = new Logger('SampleRepositoryClient');
    constructor() {
        super();
    }

    public async search<SampleRepositorySearchParams>(
        searchParams
    ): Promise<any[]> {
        return this.repositories;
    }

    public async getBy<GetByParams>(getByParams: GetByParams): Promise<any[]> {
        return this.repositories;
    }
}
