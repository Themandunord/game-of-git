import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { StarActionType } from './constants';

export class StarEvent extends AGitHubEvent {
	action: StarActionType;
	starredAt: string; // starred_at
	repository: IRepository;
	sender: IRepositoryUser;
}
