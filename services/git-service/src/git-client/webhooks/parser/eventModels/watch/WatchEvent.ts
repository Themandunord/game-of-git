import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export class WatchEvent extends AGitHubEvent {
	public action: 'started'; // documentation says it can only be this value at present
	public repository: IRepository;
	public sender: IRepositoryUser;
}
