import { gql } from 'apollo-server-core';

const GET_REPOSITORIES = gql`
  query {
    id
    idExternal
    createdAtExternal
    updatedAtExternal
    name
    description
    owner
    url
    homepageUrl
    sshUrl

    isTracked
    isFork
    isLocked
    isArchived
    isPrivate
    isDisabled
  }
`;

export default GET_REPOSITORIES;
