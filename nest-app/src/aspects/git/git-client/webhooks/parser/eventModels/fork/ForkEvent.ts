import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Fork } from './../EventType.types';

export class ForkEvent extends AGitHubEvent {
    public event: Fork;

    public forkee: IRepository;

    public repository: IRepository;

    public sender: IRepositoryUser;
}
