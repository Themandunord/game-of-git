import { ApiKey } from './entities/ApiKey/abstract';
import { Logger } from '@nestjs/common';

export abstract class RepositoryClient {
    protected logger: Logger;
    constructor(public readonly apiKey: ApiKey) {}
}
