import { User } from '@game-of-git/common';
import { RepositoryProviderTypes } from '@game-of-git/common';
import { CreateApiKeyMutationVariables } from '@game-of-git/graphql-hasura';
import { GraphqlService } from '../src/graphql/graphql.service';
import { Sample } from '@game-of-git/common/dist/repository/providers/sample';

type CreateApiKeyUserPartial = Partial<
    Pick<CreateApiKeyMutationVariables, 'key' | 'name' | 'provider'>
>;

export const createApiKeyMutationVariableFactory = (
    apiKeyData?: CreateApiKeyUserPartial
) => ({
    key: apiKeyData?.key || 'someKey' + new Date().toISOString(),
    name: apiKeyData?.name || 'someKey',
    provider: (apiKeyData?.provider || Sample) as RepositoryProviderTypes
});

/**
 * Seeds a Api Key in the `repository_api_keys` table and returns the result
 *
 * @param service
 * @param apiKeyData
 */
export const seedApiKey = async (
    service: GraphqlService,
    user: Partial<User>,
    apiKeys: { id?: string; key?: string }[],
    apiKeyData = createApiKeyMutationVariableFactory()
) => {
    if (!apiKeyData.key || !apiKeyData.name || !apiKeyData.provider) {
        throw new Error(`Missing required parameter`);
    }
    const apiKey = (
        await service.sdk.CreateApiKey({
            ...apiKeyData,
            userId: user.id
        })
    ).insert_repository_api_keys.returning[0];
    apiKeys.push(apiKey);
    return apiKey;
};

/**
 * Removes an ApiKey from the `repository_api_keys` table by id or key
 *
 * @param service
 * @param userIdOrEmail
 */
export const clearApiKey = async (
    service: GraphqlService,
    apiKeyIdOrKey: { id?: string; key?: string }
) => {
    if (apiKeyIdOrKey.id) {
        return await service.sdk.DeleteApiKeyById({
            id: apiKeyIdOrKey.id
        });
    } else if (apiKeyIdOrKey.key) {
        return await service.sdk.DeleteApiKeyByKey({
            key: apiKeyIdOrKey.key
        });
    }
    throw new Error(`Missing id and key keys, unable to delete api key`);
};

/**
 * Purge all Api Keys from an array of Api Keys
 * @param service
 * @param apiKeys
 */
export const purgeApiKeys = async (
    service: GraphqlService,
    apiKeys: { id?: string; key?: string }[]
) => {
    while (apiKeys.length > 0) {
        await clearApiKey(service, apiKeys.pop());
    }
};

export const createApiKeyMutationFactory = ({
    key,
    name,
    provider
}: {
    key?: string;
    name?: string;
    provider?: RepositoryProviderTypes;
}) => `mutation {
        createApiKey(
          data: {
            ${key ? `key: "${key}"` : ''}
            ${name ? `name: "${name}"` : ''}
            ${provider ? `provider: "${provider}"` : ''}
          }
        )
        { 
            id
            name
            provider
        }
      }`;
