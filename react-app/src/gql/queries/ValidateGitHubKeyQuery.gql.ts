import gql from 'graphql-tag';

const ValidateGitHubKeyQuery = gql`
    query($key: String!) {
        validateAppKey(appKey: $key) {
            valid
        }
    }
`;

export default ValidateGitHubKeyQuery;
