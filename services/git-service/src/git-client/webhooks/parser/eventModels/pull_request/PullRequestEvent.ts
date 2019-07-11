import { IRepositoryUser } from '../common/IRepositoryUser.interface';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryLabel } from '../common/IRepositoryLabel.interface';
import { IRepositoryMilestone } from '../common/IRepositoryMilestone.interface';
import { AGitHubEvent } from '../AGitHubEvent.abstract';

interface IRepositoryLink {
  href: string;
}

export interface IRepositoryEventLinks {
  self: IRepositoryLink;
  html: IRepositoryLink;
  issue: IRepositoryLink;
  comments: IRepositoryLink;
  reviewComments: IRepositoryLink; // review_comments
  reviewComment: IRepositoryLink; // review_comment
  commits: IRepositoryLink;
  statuses: IRepositoryLink;
}

export interface IRepositoryCommitRef {
  label: string;
  ref: string;
  sha: string;
  user: IRepositoryUser;
  repo: IRepository;
}

export interface IRepositoryPullRequest {
  url: string;
  id: number;
  nodeId: string; // node_id
  htmlUrl: string; // html_url
  diffUrl: string; // diff_url
  patchUrl: string; // patch_url
  issueUrl: string; // issue_url
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: IRepositoryUser;
  body: string;
  createdAt: string; // created_at
  updatedAt: string; // updated_at
  closedAt?: string; // closed_at
  mergedAt?: string; // mergedAt
  mergeCommitSha?: string; // merge_commit_sha
  assignee?: IRepositoryUser;
  assignees?: IRepositoryUser[];
  requestedReviewers?: IRepositoryUser[]; // requested_reviewers
  requestedTeams?: any[]; // requested_teams
  labels: IRepositoryLabel[];
  milestone: IRepositoryMilestone;
  commitsUrl: string; // commits_url
  reviewCommentsUrl: string; // review_comments_url
  reviewCommentUrl: string; // review_comment_url
  commentsUrl: string; // comments_url
  statusesUrl: string; // statuses_url
  head: IRepositoryCommitRef;
  base: IRepositoryCommitRef;
  _links: IRepositoryEventLinks;
  authorAssociation: string; // author_association
  draft: boolean;
  merged: boolean;
  mergeable?: boolean;
  rebasable?: boolean;
  mergeableState: string; // mergeable_state
  mergedBy?: string; // merged_by
  comments: number;
  reviewComments: number; // review_comments
  maintainerCanModify: boolean; // maintainer_can_modify
  commits: number;
  additions: number;
  deletions: number;
  changedFiles: number; // changed_files
}

export class PullRequestEvent extends AGitHubEvent {
  public action: string;
  public number: number;
  public pullRequest: IRepositoryPullRequest; // pull_request
  public repository: IRepository;
  public sender: IRepositoryUser;
}
