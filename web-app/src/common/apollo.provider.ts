import { createProvider } from '../vue-apollo';

const apolloProvider = createProvider({
    tokenName: 'jwt'
});

export const apolloClient = apolloProvider.defaultClient;
export const apolloWsClient = apolloProvider.wsClient;

export default apolloProvider;