import { Provider } from '@nestjs/common';
import { RepositoryClient } from '../client/RepositoryClient.abstract';
import { RepositoryClientService } from './repository-client.service';
import REPOSITORY_CLIENT_PROVIDERS from './REPOSITORY_CLIENT_PROVIDERS.const';

const createRepositoryClientService = (
    key: string,
    client: RepositoryClient
): Provider<RepositoryClientService> => {
    return {
        provide: `${key}Service`,
        useFactory: () => {
            const newService = new RepositoryClientService();
            newService.initClient(client);
            return newService;
        },
        inject: []
    };
};

export const createRepositoryClientServiceProviders = (): Array<
    Provider<RepositoryClientService>
> => {
    const providers = REPOSITORY_CLIENT_PROVIDERS.map(({ key, client }) =>
        createRepositoryClientService(key, new client())
    );
    return providers;
};
