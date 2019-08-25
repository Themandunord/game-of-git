import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryPullRequest } from "../../common/IRepositoryPullRequest.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { PullRequest } from "../EventType.types";
import { PullRequestActionType } from "./constants";

export class PullRequestEvent extends AGitHubEvent {
  public event: PullRequest;
  public action: PullRequestActionType;
  public number: number;
  public pullRequest: IRepositoryPullRequest; // pull_request
  public repository: IRepository;
  public sender: IRepositoryUser;
  public changes?: any; // if action was edited
}
