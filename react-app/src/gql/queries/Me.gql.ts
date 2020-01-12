import gql from 'graphql-tag';

const ME = gql`
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
`;

export default ME;
