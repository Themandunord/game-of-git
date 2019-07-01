const GET_REPOSITORIES = (owner: string, count: number) => `
  query {
      user(
    login: "${owner}"
  ){
    repositories(first: ${count}) {
      edges {
        node {
          createdAt
          databaseId
          description
          homepageUrl
          id
          isFork
          isPrivate
          issues {
            totalCount
          }
          name
          owner {
            avatarUrl
            id
            login
            repositories {
              totalCount
            }
            url
          }
          watchers {
            totalCount
          }
          url
          updatedAt
          stargazers {
            totalCount
          }
          pullRequests {
            totalCount
          }
        }
      }
    }
  }
}
`;
export default GET_REPOSITORIES;
