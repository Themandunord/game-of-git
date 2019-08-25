import { gql } from "apollo-server-core";

const GET_APP_KEY = gql`
  query {
    id
    user {
      id
      email
      name
      role
    }
    key
    name
  }
`;

export default GET_APP_KEY;
