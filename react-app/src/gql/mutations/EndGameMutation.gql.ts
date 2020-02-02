import gql from 'graphql-tag';

const EndGameMutation = gql`
    mutation($gameId: String!) {
        endGame(data: $gameId) {
            id
            createdAt
            updatedAt
            title
            type
        }
    }
`;

export default EndGameMutation;
