import gql from 'graphql-tag';

const GET_RATE_LIMIT = gql`
    query {
        rateLimit {
            cost
            limit
            nodeCount
            remaining
            resetAt
        }
    }
`;

export default GET_RATE_LIMIT;
