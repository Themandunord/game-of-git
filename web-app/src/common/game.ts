import { apolloClient } from './apollo.provider';
import GQL_QUERIES from './gql.constants';
import { NewGameInterface } from '@game-of-git/common';
// import AppStateModule from '@/store/aspects/app';
// import routeManager from '@/router/RouteManager';

// export const repositoryList = async (username: string): Promise<any[]> => {
// 	console.log(`Loading repositoryList data for user: ${username}`);

// 	const repos = await apolloClient.query({
// 		query: GQL_QUERIES.REPOSITORIES.repositoryList,
// 		variables: {
// 			username
// 		},
// 		fetchPolicy: 'no-cache'
// 	});

// 	console.log('returned from apollo client query: ', repos);
// 	return repos.data.repositoryList;
// };

export const createGame = async (gameForm: NewGameInterface): Promise<any> => {
	console.log(`Creating Game: `, gameForm);

	const { repository, owner, gameType } = gameForm;

	const createdGame = await apolloClient.mutate({
		mutation: GQL_QUERIES.GAME.createGame,
		variables: {
			repository,
			owner,
			gameType
		},
		fetchPolicy: 'no-cache'
	});

	console.log(createdGame);

	return createdGame;
};

export const endGame = async (gameId: string): Promise<any> => {
	console.log('Ending Game: ', gameId);
	const endedGame = await apolloClient.mutate({
		mutation: GQL_QUERIES.GAME.endGame,
		variables: {
			gameId
		},
		fetchPolicy: 'no-cache'
	});

	console.log(endedGame);
	return endedGame;
};
