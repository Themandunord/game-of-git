const GET_COMMITS = (
	owner: string,
	name: string,
	first: number,
	branch: string = 'master',
	afterCursor?: string
) => `
  query {
  repository(
    name: "${name}"
    owner: "${owner}"
  ){

    ref(qualifiedName: "${branch}") {
      target {
        ... on Commit {
          id
          history(
            first: ${first}
            ${afterCursor ? `after: "${afterCursor}"` : ''}
          ) {
            pageInfo {
              hasNextPage
            }
            edges {
              cursor
              node {
                authoredDate
                messageHeadline
                oid
                abbreviatedOid
                message
                 author {
                   name
                   email
                   date
                 }
                additions
                deletions
                changedFiles
                 url
                 commitUrl
              }
            }
          }
        }
      }
    }



  }
}
`;
export default GET_COMMITS;
