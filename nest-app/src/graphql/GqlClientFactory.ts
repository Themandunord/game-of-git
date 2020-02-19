import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@game-of-git/graphql-hasura';

interface GqlClientArgs {
    endpoint: string;
}

export class GqlClient {
    private client: GraphQLClient;
    constructor({ endpoint }: GqlClientArgs) {
        this.client = new GraphQLClient(endpoint);
    }

    get sdk() {
        return getSdk(this.client);
    }
}

interface GqlClientFactoryArgs {
    endpoint: string;
}

const gqlClientFactory = (
    { endpoint }: GqlClientFactoryArgs = {
        endpoint: 'http://localhost:8081/v1/graphql'
    }
) => {
    return new GqlClient({ endpoint });
};

export default gqlClientFactory;
