import gql from 'graphql-tag';

const CreateGitHubKeyMutation = gql`
    mutation($name: String!, $key: String!) {
        createAppKey(data: { key: $key, name: $name }) {
            id
            user {
                id
                gitLogin
            }
            key
            name
        }
    }
`;

export default CreateGitHubKeyMutation;
