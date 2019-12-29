import { apolloClient } from './apollo.provider';
import GQL_QUERIES from './gql.constants';
// import AppStateModule from '@/store/aspects/app';
// import routeManager from '@/router/RouteManager';

export const repositoryList = async (username: string): Promise<any[]> => {
	console.log(`Loading repositoryList data for user: ${username}`);

	const repos = await apolloClient.query({
		query: GQL_QUERIES.REPOSITORIES.repositoryList,
		variables: {
			username
		},
		fetchPolicy: 'no-cache'
	});

	console.log('returned from apollo client query: ', repos);
	return repos.data.repositoryList;
};

export const trackRepository = async (repository: string, owner: string): Promise<any> => {
	console.log(`Toggleing Repository Tracking: `);

	const addedRepo = await apolloClient.mutate({
		mutation: GQL_QUERIES.REPOSITORIES.trackRepository,
		variables: {
			repository,
			owner
		}
	});

	console.log(addedRepo);

	return addedRepo;
};
