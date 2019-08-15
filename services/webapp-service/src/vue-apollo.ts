import Vue from 'vue';
import VueApollo from 'vue-apollo';
// add module import and define apolloClient type
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client';

export type VueApolloClient = ApolloClient<InMemoryCache> & {
	wsClient: SubscriptionClient;
};

export interface VueApolloClients {
	[key: string]: VueApolloClient;
}

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

// Http endpoint
// const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:3000/graphql';
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:3000/graphql';
// const httpLink = new HttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:3020/graphql',
// })

// Files URL root
export const filesRoot =
	process.env.VUE_APP_FILES_ROOT || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'));

Vue.prototype.$filesRoot = filesRoot;

// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:3000/subscriptions',
//   options: {
//     reconnect: true,
//   },
// })

// Config
const defaultOptions = {
	// You can use `https` for secure connection (recommended in production)
	httpEndpoint,
	// You can use `wss` for secure connection (recommended in production)
	// Use `null` to disable subscriptions
	wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:3000/graphql',
	// LocalStorage token
	tokenName: AUTH_TOKEN,
	// Enable Automatic Query persisting with Apollo Engine
	persisting: false,
	// Use websockets for everything (no HTTP)
	// You need to pass a `wsEndpoint` for this to work
	websocketsOnly: false,
	// Is being rendered on the server?
	ssr: false

	// Override default apollo link
	// note: don't override httpLink here, specify httpLink options in the
	// httpLinkOptions property of defaultOptions.
	// link: myLink

	// Override default cache
	// cache: myCache

	// Override the way the Authorization header is set
	// getAuth: (tokenName) => ...

	// Additional ApolloClient options
	// apollo: { ... }

	// Client local data (see apollo-link-state)
	// clientState: { resolvers: { ... }, defaults: { ... } }
};

// Call this in the Vue app file
export function createProvider(options = {}) {
	// Create apollo client
	const { apolloClient, wsClient } = createApolloClient({
		...defaultOptions,
		...options
	});
	apolloClient.wsClient = wsClient;

	// Create vue apollo provider
	const apolloProvider = new VueApollo({
		defaultClient: apolloClient,
		defaultOptions: {
			$query: {
				// fetchPolicy: 'cache-and-network',
			}
		},
		errorHandler(error) {
			// eslint-disable-next-line no-console
			console.log(
				'%cError',
				'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
				error.message
			);
		}
	});

	return apolloProvider;
}

// Manually call this when user log in
export const onLogin = async (
	apolloClient: { wsClient: any; resetStore: () => void },
	token: string
) => {
	if (typeof localStorage !== 'undefined' && token) {
		localStorage.setItem(AUTH_TOKEN, token);
	}
	if (apolloClient.wsClient) {
		restartWebsockets(apolloClient.wsClient);
	}
	try {
		await apolloClient.resetStore();
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('%cError on cache reset (login)', 'color: orange;', e.message);
	}
};

// Manually call this when user log out
export const onLogout = async (apolloClient: { wsClient: any; resetStore: () => void }) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.removeItem(AUTH_TOKEN);
	}
	if (apolloClient.wsClient) {
		restartWebsockets(apolloClient.wsClient);
	}
	try {
		await apolloClient.resetStore();
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
	}
};