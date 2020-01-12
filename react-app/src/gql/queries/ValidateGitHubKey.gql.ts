import gql from 'graphql-tag';

const VALIDATE_GITHUB_KEY = gql`
    query($key: String!) {
        validateAppKey(appKey: $key) {
            valid
        }
    }
`;

export default VALIDATE_GITHUB_KEY;
