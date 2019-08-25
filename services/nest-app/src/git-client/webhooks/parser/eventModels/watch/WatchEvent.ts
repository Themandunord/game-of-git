import { Watch } from "./../EventType.types";
import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";

export class WatchEvent extends AGitHubEvent {
  event: Watch;
  action: "started"; // documentation says it can only be this value at present
  repository: IRepository;
  sender: IRepositoryUser;
}
