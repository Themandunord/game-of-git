import { gql } from 'apollo-server-core';

const GET_REPOSITORIES = gql`
  query {
    id
    idExternal
    name
    owner
    isTracked
  }
`;

export default GET_REPOSITORIES;
