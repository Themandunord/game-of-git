import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';

export class WatchEvent extends AGitHubEvent {
  public action: string;
  public repository: IRepository;
  public sender: IRepositoryUser;
}
