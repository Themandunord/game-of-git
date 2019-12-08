import { IRepositoryUser } from './IRepositoryUser.interface';

export interface IRepository {
    id: number;
    nodeId: string; // node_id
    name: string;
    fullName: string; // full_name
    private: boolean;
    owner: IRepositoryUser;
    htmlUrl: string; // html_url
    description?: string;
    fork: boolean;
    url: string;
    forksUrl: string; // forks_url
    keysUrl: string; // keys_url
    collaboratorsUrl: string; // collaborators_url
    teamsUrl: string; // teams_url
    hooksUrl: string; // hooks_url
    issueEventsUrl: string; // issue_events_url
    eventsUrl: string; // events_url
    assigneesUrl: string; // assignees_url
    branchesUrl: string; // branches_url
    tagsUrl: string; // tags_url
    blobsUrl: string; // blobs_url
    gitTagsUrl: string; // git_tags_url
    gitRefsUrl: string; // git_refs_url
    treesUrl: string; // trees_url
    statusesUrl: string; // statuses_url
    languagesUrl: string; // languages_url
    stargazersUrl: string; // stargazers_url
    contributorsUrl: string; // contributors_url
    subscribersUrl: string; // subscribers_url
    subscriptionUrl: string; // subscription_url
    commitsUrl: string; // commits_url
    gitCommitsUrl: string; // git_commits_url
    commentsUrl: string; // comments_url
    issueCommentUrl: string; // issue_comment_url
    contentsUrl: string; // contents_url
    compareUrl: string; // compare_url
    mergesUrl: string; // merges_url
    archiveUrl: string; // archive_url
    downloadsUrl: string; // downloads_url
    issuesUrl: string; // issues_url
    pullsUrl: string; // pulls_url
    milestonesUrl: string; // milestones_url
    notificationsUrl: string; // notifications_url
    labelsUrl: string; // labels_url
    releasesUrl: string; // releases_url
    deploymentsUrl: string; // deployments_url
    createdAt: string; // created_at
    updatedAt: string; // updated_at
    pushedAt: string; // pushed_at
    gitUrl: string; // git_url
    sshUrl: string; // ssh_url
    cloneUrl: string; // clone_url;
    svnUrl: string; // svn_url
    homepage?: string;
    size: number;
    stargazersCount: number; // stargazers_count
    watchersCount: number; // watchers_count
    language: string | 'Ruby';
    hasIssues: boolean; // has_issues
    hasProjects: boolean; // has_projects
    hasDownloads: boolean; // has_downloads
    hasWiki: boolean; // has_boolean
    hasPages: boolean; // has_pages
    forksCounts: number; // forks_count
    mirror_url?: string; // mirror_url
    archived: boolean;
    disabled: boolean;
    openIssuesCount: number; // open_issues_count
    license?: string;
    forks: number;
    openIssues: number; // open_issues
    watchers: number;
    defaultBranch: string; // default_branch
}
