import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryCommitRef } from "../../common/IRepositoryCommitRef.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";

export class PushEvent extends AGitHubEvent {
  ref: string;
  before: string;
  after: string;
  created: false;
  deleted: false;
  forced: false;
  baseRef?: string; // base_ref
  compare: string;
  commits: IRepositoryCommitRef[];
  repository: IRepository;
  pusher: {
    name: string;
    email: string;
  };
  sender: IRepositoryUser;
}
