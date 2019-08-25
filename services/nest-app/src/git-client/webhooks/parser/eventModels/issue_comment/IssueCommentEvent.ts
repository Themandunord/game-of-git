import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryIssue } from "../../common/IRepositoryIssue.interface";
import { IRepositoryIssueComment } from "../../common/IRepositoryIssueComment.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { IssueCommentActionType } from "./constants";

export class IssueCommentEvent extends AGitHubEvent {
  public action: IssueCommentActionType;
  public issue: IRepositoryIssue;
  public comment: IRepositoryIssueComment;
  public repository: IRepository;
  public sender: IRepositoryUser;
  public changes?: any; // TODO only if `edited`
}
