const GET_USER_DATA = (user: string) => `
query {
  user(
    login: "${user}"
  ){
    avatarUrl
    createdAt
    name
	login
  }
}
`;

export default GET_USER_DATA;
