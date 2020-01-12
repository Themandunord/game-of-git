import gql from 'graphql-tag';

const RepositoriesListQuery = gql`
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
`;

export default RepositoriesListQuery;
