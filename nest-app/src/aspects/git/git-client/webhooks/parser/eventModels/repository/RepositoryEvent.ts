import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Repository } from '../EventType.types';
import { RepositoryActionType } from './constants';

export class RepositoryEvent extends AGitHubEvent {
    public event: Repository;

    public action: RepositoryActionType;

    public repository: IRepository;

    public sender: IRepositoryUser;
}
