const GET_USER_DATA = (user: string) => `
query {
  user(
    login: "${user}"
  ){
    avatarUrl
    createdAt
    watching(first: 100){
      nodes{
        createdAt
        description
        homepageUrl
        id
      }
    }
    name
    repositories(
      first: 10
    ) {
      nodes{
        id
        name
        createdAt
        description
        homepageUrl
        updatedAt
        createdAt
        watchers{
          totalCount
        }
        url
        stargazers{
          totalCount
        }
        pullRequests(first:100){
          totalCount
          nodes{
            author{
              login
            }
            id
            title
            url
            updatedAt
          }
        }
        url
        stargazers{
          totalCount
        }
      }
    }
  }
}
`;

export default GET_USER_DATA;
