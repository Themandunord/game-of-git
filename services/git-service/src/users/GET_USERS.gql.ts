import { gql } from 'apollo-server-core';

export const GET_USERS = gql`
  query {
    id
    gitLogin
    createdAt
    updatedAt
    email
    hash
    keys(first: 10) {
      id
      name
    }
  }
`;
