export interface IRepositoryUser {
  login: string;
  id: number;
  nodeId: string; // node_id
  avatarUrl: string; // avatar_url
  gravatarUrl: string; // gravatar_url
  url: string;
  htmlUrl: string; // html_url
  followersUrl: string; // followers_url
  followingUrl: string; // following_url
  gistsUrl: string; // gists_url
  starredUrl: string; // starred_url
  subscriptionsUrl: string; // subscriptions_url
  organizationsUrls: string; // organizations_url
  reposUrl: string; // repos_url
  eventsUrl: string; // events_url;
  receivedEventsUrl: string; // received_events_url
  type: string | "User";
  siteAdmin: boolean; // site_admin
}
