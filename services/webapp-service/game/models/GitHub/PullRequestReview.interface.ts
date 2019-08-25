import { PullRequest } from "./PullRequest.interface";
import { Commit } from "./Commit.interface";
import { User } from "./User.interface";

export interface PullRequestReview {
  author: User;
  bodyText: string;
  comments: Comment;
  commit: Commit;
  createdAt: any; // todo better datetime
  id: string;
  lastEditedAt: any; // todo better datetime
  publishedAt: any; // todo better datetime
  pullRequest: PullRequest;
  state: string;
  submittedAt: any; // todo better datetime
  updatedAt: any; // todo better datetime
  url: string;
}
