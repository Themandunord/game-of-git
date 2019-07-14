import { GitHubWebhookEventTypes } from './EventType.types';
export const CHECK_RUN = 'check_run';
export const CHECK_SUITE = 'check_suite';
export const COMMIT_COMMENT = 'commit_comment';
export const CONTENT_REFERENCE = 'content_reference';
export const CREATE = 'create';
export const DELETE = 'delete';
export const FORK = 'fork';
export const GOLLUM = 'gollum';
export const ISSUE_COMMENT = 'issue_comment';
export const ISSUES = 'issues';
export const LABEL = 'label';
export const MEMBER = 'member';
export const META = 'meta';
export const MILESTONE = 'milestone';
export const PAGE_BUILD = 'page_build';
export const PING = 'ping';
export const PROJECT = 'project';
export const PUBLIC = 'public';
export const PULL_REQUEST = 'pull_request';
export const PULL_REQUEST_REVIEW = 'pull_request_review';
export const PULL_REQUEST_REVIEW_COMMENT = 'pull_request_review_comment';
export const PUSH = 'push';
export const RELEASE = 'release';
export const REPOSITORY = 'repository';
export const REPOSITORY_VULNERABILITY_ALERT = 'repository_vulnerability_alert';
export const SECURITY_ADVISORY = 'security_advisory';
export const STAR = 'star';
export const WATCH = 'watch';

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
const GitHubWebhookEvent: { [key: string]: GitHubWebhookEventTypes } = {
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

export default GitHubWebhookEvent;
