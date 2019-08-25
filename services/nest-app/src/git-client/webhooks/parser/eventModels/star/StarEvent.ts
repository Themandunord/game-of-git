import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { StarActionType } from "./constants";
import { Star } from "../EventType.types";

export class StarEvent extends AGitHubEvent {
  event: Star;
  action: StarActionType;
  starredAt: string; // starred_at
  repository: IRepository;
  sender: IRepositoryUser;
}
