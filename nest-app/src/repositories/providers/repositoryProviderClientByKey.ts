import { RepositoryProviderTypes } from '@game-of-git/common';
import { ModuleRef } from '@nestjs/core';
import { RepositoryClient } from '../client/abstract/RepositoryClient.abstract';
import REPOSITORY_CLIENT_PROVIDERS from './REPOSITORY_CLIENT_PROVIDERS.const';

/**
 * Retrieve the Repository Provider Client class constructor by it's key
 *
 * @param desiredProviderKey
 */
const repositoryProviderByKey = async (
    moduleRef: ModuleRef,
    desiredProviderKey: RepositoryProviderTypes
) => {
    const provider = REPOSITORY_CLIENT_PROVIDERS.find(
        ({ key }) => key === desiredProviderKey
    );
    if (!provider) {
        throw new Error(`Unsupported provider: ${desiredProviderKey}`);
    }
    return moduleRef.create<RepositoryClient>(provider.client as any);
};

export default repositoryProviderByKey;
