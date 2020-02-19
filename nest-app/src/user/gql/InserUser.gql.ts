import gql from 'graphql-tag';

const InsertUser = ({ email, gitLogin, name, role, password }) => gql`
    mutation InsertUser(
        $email: String!
        $gitLogin: String!
        $name: String!
        $role: String!
        $password: String!
    ) {
        insert_users(
            objects: {
                email: $email
                git_login: $gitLogin
                name: $name
                role: $rol
                password: $password
            }
        ) {
            affected_rows
            returning {
                id
                email
                created_at
            }
        }
    }
`;

export default InsertUser;
