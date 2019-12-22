// https://developer.github.com/v3/activity/events/types/#metaevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Meta } from '../EventType.types';
import { IHook } from './IHook.interface';

export class MetaEvent extends AGitHubEvent {
    public event: Meta;

    public action: 'deleted' | string;

    public hookId: number;

    public hook: IHook;

    public repository: IRepository;
    public sender: IRepositoryUser;
}
