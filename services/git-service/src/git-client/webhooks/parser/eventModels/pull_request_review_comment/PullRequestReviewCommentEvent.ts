import { IRepositoryPullRequest, IRepositoryEventLinks } from './../pull_request/PullRequestEvent';
import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';
import { IRepository } from '../common/IRepository.interface';

interface IRepositoryPullRequestReviewComment {
  comment: string;
  pullRequestReviewId: number; // pull_request_review_id
  id: number;
  nodeId: string; // node_id
  diffHunk;
  string; // diff_hunk
  path: string;
  position: number;
  originalPosition: number; // original_positiob
  commitId: string; // commit_id
  originalCommitId: string; // original_commit_id
  user: IRepositoryUser;
  body: string;
  createdAt: string; // created_at
  updatedAt: string; // updated_at
  htmlUrl: string; // html_url
  pullRequestUrl: string; // pull_request_url
  authorAssociation: string; // author_association
  _links: IRepositoryEventLinks;
}

export class PullRequestReviewCommentEvent extends AGitHubEvent {
  public action: string;
  public comment: IRepositoryPullRequestReviewComment;
  public pullRequest: IRepositoryPullRequest; // pull_request
  public repository: IRepository;
  public sender: IRepositoryUser;
}
