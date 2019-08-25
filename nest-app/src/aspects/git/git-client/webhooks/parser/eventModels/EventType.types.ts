export type CheckRun = 'check_run';
export type CheckSuite = 'check_suite';
export type CommitComment = 'commit_comment';
export type ContentReference = 'content_reference';
export type Create = 'create';
export type Delete = 'delete';
export type Fork = 'fork';
export type Gollum = 'gollum';
export type IssueComment = 'issue_comment';
export type Issues = 'issues';
export type Label = 'label';
export type Member = 'member';
export type Meta = 'meta';
export type Milestone = 'milestone';
export type PageBuild = 'page_build';
export type Ping = 'ping';
export type Project = 'project';
export type Public = 'public';
export type PullRequest = 'pull_request';
export type PullRequestReview = 'pull_request_review';
export type PullRequestReviewComment = 'pull_request_review_comment';
export type Push = 'push';
export type Release = 'release';
export type Repository = 'repository';
export type RepositoryVulnerabilityAlert = 'repository_vulnerability_alert';
export type SecurityAdvisory = 'security_advisory';
export type Star = 'star';
export type Watch = 'watch';

/**
 * String identifier used to categorize a GitHub Webhook Event. The value can be used as a discriminator,
 * ultimately, to distinguish the corresponding event model from the raw object.
 */
export type GitHubWebhookEventType =
    | CheckRun
    | CheckSuite
    | CommitComment
    | ContentReference
    | Create
    | Delete
    | Fork
    | Gollum
    | IssueComment
    | Issues
    | Label
    | Member
    | Meta
    | Milestone
    | PageBuild
    | Ping
    | Project
    | Public
    | PullRequest
    | PullRequestReview
    | PullRequestReviewComment
    | Push
    | Release
    | Repository
    | RepositoryVulnerabilityAlert
    | SecurityAdvisory
    | Star
    | Watch;
