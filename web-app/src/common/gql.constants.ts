import gql from 'graphql-tag';

export const GQL_QUERIES = {
    AUTH: {
        me: gql`
        query{
            me{
                id
                email
                role
                gitLogin
                createdAt
                updatedAt
                appKeys{
                    id
                    name
                }
            }
        }`
    }
}

export default GQL_QUERIES;