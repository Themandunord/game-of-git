import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';

export class StarEvent extends AGitHubEvent {
  action: string;
  starredAt: string; // starred_at
  repository: IRepository;
  sender: IRepositoryUser;
}
