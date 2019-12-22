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
		}
	});

	console.log('returned from apollo client query: ', repos);
	return repos.data.repositoryList;
};

export const trackRepository = async (repository: string): Promise<any[]> => {
	console.log(`Adding Repository: `);

	const addedRepo = await apolloClient.mutate({
		mutation: GQL_QUERIES.REPOSITORIES.trackRepository,
		variables: {
			repository
		}
	});

	console.log(addedRepo);

	return ['hi'];
};
