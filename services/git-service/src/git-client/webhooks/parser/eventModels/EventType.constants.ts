import {
	CheckRun,
	CheckSuite,
	CommitComment,
	ContentReference,
	Create,
	Delete,
	Fork,
	GitHubWebhookEventType,
	Gollum,
	IssueComment,
	Issues,
	Label,
	Member,
	Meta,
	Milestone,
	PageBuild,
	Ping,
	Project,
	Public,
	PullRequest,
	PullRequestReview,
	PullRequestReviewComment,
	Push,
	Release,
	Repository,
	RepositoryVulnerabilityAlert,
	SecurityAdvisory,
	Star,
	Watch,
} from './EventType.types';

export const CHECK_RUN: CheckRun = 'check_run';
export const CHECK_SUITE: CheckSuite = 'check_suite';
export const COMMIT_COMMENT: CommitComment = 'commit_comment';
export const CONTENT_REFERENCE: ContentReference = 'content_reference';
export const CREATE: Create = 'create';
export const DELETE: Delete = 'delete';
export const FORK: Fork = 'fork';
export const GOLLUM: Gollum = 'gollum';
export const ISSUE_COMMENT: IssueComment = 'issue_comment';
export const ISSUES: Issues = 'issues';
export const LABEL: Label = 'label';
export const MEMBER: Member = 'member';
export const META: Meta = 'meta';
export const MILESTONE: Milestone = 'milestone';
export const PAGE_BUILD: PageBuild = 'page_build';
export const PING: Ping = 'ping';
export const PROJECT: Project = 'project';
export const PUBLIC: Public = 'public';
export const PULL_REQUEST: PullRequest = 'pull_request';
export const PULL_REQUEST_REVIEW: PullRequestReview = 'pull_request_review';
export const PULL_REQUEST_REVIEW_COMMENT: PullRequestReviewComment = 'pull_request_review_comment';
export const PUSH: Push = 'push';
export const RELEASE: Release = 'release';
export const REPOSITORY: Repository = 'repository';
export const REPOSITORY_VULNERABILITY_ALERT: RepositoryVulnerabilityAlert =
	'repository_vulnerability_alert';
export const SECURITY_ADVISORY: SecurityAdvisory = 'security_advisory';
export const STAR: Star = 'star';
export const WATCH: Watch = 'watch';

/**
 * GitHub Webhook Event String Identifier Constants which correspond directly with GitHub's strings
 *
 * ex:
 *
 * - `GitHubWebhookEvent.PullRequestReviewComment` is `'pull_request_review_comment'`
 * - `GitHubWebhookEvent.Push` is `'push'`
 * - `GitHubWebhookEvent.Ping` is `'ping'`
 * - `GitHubWebhookEvent.RepositoryVulnerabilityAlert` is `'repository_vulnerability_alert'`
 */
// const GitHubWebhookEvent: { [key: string]: GitHubWebhookEventType } = {
export const GitHubWebhookEvents = {
	CheckRun: CHECK_RUN,
	CheckSuite: CHECK_SUITE,
	CommitComment: COMMIT_COMMENT,
	ContentReference: CONTENT_REFERENCE,
	Create: CREATE,
	Delete: DELETE,
	Fork: FORK,
	Gollum: GOLLUM,
	IssueComment: ISSUE_COMMENT,
	Issues: ISSUES,
	Label: LABEL,
	Member: MEMBER,
	Meta: META,
	Milestone: MILESTONE,
	PageBuild: PAGE_BUILD,
	Ping: PING,
	Project: PROJECT,
	Public: PUBLIC,
	PullRequest: PULL_REQUEST,
	PullRequestReview: PULL_REQUEST_REVIEW,
	PullRequestReviewComment: PULL_REQUEST_REVIEW_COMMENT,
	Push: PUSH,
	Release: RELEASE,
	Repository: REPOSITORY,
	RepositoryVulnerabilityAlert: REPOSITORY_VULNERABILITY_ALERT,
	SecurityAdvisory: SECURITY_ADVISORY,
	Star: STAR,
	Watch: WATCH,
};
