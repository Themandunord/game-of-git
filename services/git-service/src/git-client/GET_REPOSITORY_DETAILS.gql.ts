const GET_REPOSITORY_DETAILS = (repo: string, user: string) => `
query {
  repository(
    name: "${repo}"
    owner: "${user}"
  ){
    id
    description
    url
    updatedAt
    isFork
    isLocked
    isPrivate
    isArchived
    isDisabled
    name
    sshUrl

    owner{
      id
      avatarUrl
    }

    watchers(
      first: 10
    ){
			totalCount
      nodes{
        name
        avatarUrl
      }
    }

    stargazers(
      first: 10
    ){
      totalCount
      nodes{
        avatarUrl
        name
      }
    }

    collaborators(
      first: 10
    ){
      totalCount
      nodes{
        avatarUrl
        name
      }
    }

    issues(
      first: 10
    ){
      totalCount
      nodes{
        id
        url
        updatedAt
        title
        bodyText
        closed
        closedAt
        createdAt
        state

        author{
          avatarUrl
        }

        assignees(first: 10) {
          totalCount
        }

      }
    }

    pullRequests(first:10){
      totalCount
      nodes{

        assignees(first:10) {
          totalCount
          nodes{
            avatarUrl
            name
          }
        }

        author{
          avatarUrl
          login
          url
        }

        bodyText
        changedFiles
        closed
        closedAt

        comments(first:10){
          totalCount
          nodes{
            author{
              login
              avatarUrl
            }

            bodyText
           	createdAt
            url

          }
        }

        reviews(first:10){
          totalCount
          nodes{
            author{
              avatarUrl
              login
            }
            state
          }
        }

        state
        title
        url


      }
    }

    labels(first:50){
      totalCount
      nodes{
        color
        createdAt
        description
        id
        name
      }
    }



  }
}
`;

export default GET_REPOSITORY_DETAILS;
