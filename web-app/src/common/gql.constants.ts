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
	REPOSITORIES: {
		repositoryList: gql`
			query($username: String!) {
				repositoryList(username: $username) {
					createdAt
					description
					id
					isFork
					isPrivate
					name
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
			query($repository: String!) {
				trackRepository(repository: $repository) {
					id
					isTracked
					url
				}
			}
		`
	}
};

export default GQL_QUERIES;
