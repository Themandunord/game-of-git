// https://developer.github.com/v3/activity/events/types/#commitcommentevent

import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { CommitComment } from "../EventType.types";
import { ICommitComment } from "./ICommitComment.interface";

export class CommitCommentEvent extends AGitHubEvent {
  public event: CommitComment;

  public action: "created" | string;

  public comment: ICommitComment;
  public repository: IRepository;
  public sender: IRepositoryUser;
}
