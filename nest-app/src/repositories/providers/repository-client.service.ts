import { Injectable } from '@nestjs/common';
import { RepositoryClient } from '../client/abstract/RepositoryClient.abstract';

@Injectable()
export class RepositoryClientService {
    private repositoryClient: RepositoryClient;
    public initClient(client: RepositoryClient) {
        this.repositoryClient = client;
    }
    get serviceName() {
        return `${this.repositoryClient.constructor.name}Service`;
    }

    get client() {
        return this.repositoryClient;
    }
}
