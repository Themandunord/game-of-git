import { gql } from 'apollo-server-core';

export const GET_USERS = gql`
  query {
    id
    createdAt
    updatedAt
    email
    hash
    appKey
  }
`;
