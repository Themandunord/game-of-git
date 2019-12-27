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
					isTracked
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
