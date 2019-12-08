// https://developer.github.com/v3/activity/events/types/#publicevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { Public } from '../EventType.types';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export class PublicEvent extends AGitHubEvent {
    public event: Public;

    public repository: IRepository;

    public sender: IRepositoryUser;
}
