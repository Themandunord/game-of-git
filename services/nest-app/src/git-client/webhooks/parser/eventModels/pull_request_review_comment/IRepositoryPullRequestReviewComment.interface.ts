import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { IRepositoryEventLinks } from "../../common/IRepositoryEventLinks.interface";

export interface IRepositoryPullRequestReviewComment {
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
