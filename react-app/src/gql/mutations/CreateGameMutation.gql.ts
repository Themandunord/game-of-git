import gql from 'graphql-tag';

const CreateGameMutation = gql`
    mutation($gameType: String!, $owner: String!, $repository: String!) {
        createGame(
            data: {
                gameType: $gameType
                owner: $owner
                repository: $repository
            }
        ) {
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
`;

export default CreateGameMutation;
