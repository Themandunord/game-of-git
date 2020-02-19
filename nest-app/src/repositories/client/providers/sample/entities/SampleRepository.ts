import { Repository } from '../../../abstract/entities/Repository/abstract';
import { Logger } from '@nestjs/common';

type SampleRepositorySearchParams = {};

type GetByParams = {};

export class SampleRepository extends Repository {
    private readonly logger = new Logger('SampleRepositoryClient');
    constructor() {
        super();
    }

    public async search<SampleRepositorySearchParams>(
        searchParams
    ): Promise<any[]> {
        throw new Error('Method not implemented.');
    }

    public getBy<GetByParams>(getByParams: GetByParams): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
}
