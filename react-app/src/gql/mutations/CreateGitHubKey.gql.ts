import gql from 'graphql-tag';

const CREATE_GITHUB_KEY = gql`
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

export default CREATE_GITHUB_KEY;
