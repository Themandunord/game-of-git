import gql from 'graphql-tag';

export const GQL_QUERIES = {
	AUTH: {
		me: gql`
			query {
				me {
					id
					email
					role
					gitLogin
					createdAt
					updatedAt
					appKeys {
						id
						name
					}
				}
			}
		`
	},
	GAME: {
		createGame: gql`
			mutation($gameType: String!, $owner: String!, $repository: String!) {
				createGame(data: { gameType: $gameType, owner: $owner, repository: $repository }) {
					id
					createdAt
					updatedAt
					title
					owner {
						id
						email
						name
					}
					type
				}
			}
		`,
		endGame: gql`
			mutation($gameId: String!) {
				endGame(data: $gameId) {
					id
					createdAt
					updatedAt
					title
					type
				}
			}
		`
	},
	REPOSITORIES: {
		repositoryList: gql`
			query($username: String!) {
				repositoryList(username: $username) {
					createdAt
					description
					id
					isFork
					isPrivate
					isTracked
					name
					game {
						id
					}
					owner {
						avatarUrl
						id
						login
						url
					}
					url
					updatedAt
				}
			}
		`,
		trackRepository: gql`
			mutation($repository: String!, $owner: String!) {
				trackRepository(data: { repository: $repository, owner: $owner }) {
					id
					isTracked
					url
				}
			}
		`
	}
};

export default GQL_QUERIES;
