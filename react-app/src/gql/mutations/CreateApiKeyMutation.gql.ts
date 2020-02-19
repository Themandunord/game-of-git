import gql from 'graphql-tag';

const CreateApiKeyMutation = gql`
    mutation($provider: String!, $name: String!, $key: String!) {
        createApiKey(data: { provider: $provider, key: $key, name: $name }) {
            id
            key
            name
        }
    }
`;

export default CreateApiKeyMutation;
