import { RepositoryProviderTypes } from '@game-of-git/common';
import { RepositoryClient } from '../src/repositories/client/abstract/RepositoryClient.abstract';

export interface RepositoryTestConfig {
    name: RepositoryProviderTypes;
    client: typeof RepositoryClient;
    entities: {
        ApiKey: {
            invalidScenarios: {
                it: string;
                val: any;
            }[];
            validScenarios: {
                it: string;
                val: any;
            }[];
        };
    };
}
