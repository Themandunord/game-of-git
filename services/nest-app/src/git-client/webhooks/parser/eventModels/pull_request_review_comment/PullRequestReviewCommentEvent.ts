// https://developer.github.com/v3/activity/events/types/#pullrequestreviewcommentevent

import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryPullRequest } from "../../common/IRepositoryPullRequest.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { PullRequestReviewCommentActionType } from "./constants";
import { IRepositoryPullRequestReviewComment } from "./IRepositoryPullRequestReviewComment.interface";

export class PullRequestReviewCommentEvent extends AGitHubEvent {
  public action: PullRequestReviewCommentActionType;
  public comment: IRepositoryPullRequestReviewComment;
  public pullRequest: IRepositoryPullRequest; // pull_request
  public repository: IRepository;
  public sender: IRepositoryUser;
}
