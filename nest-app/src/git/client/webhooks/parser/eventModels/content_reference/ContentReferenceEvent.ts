// https://developer.github.com/v3/activity/events/types/#contentreferenceevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { IRepository } from '../../common/IRepository.interface';
import { ContentReference } from '../EventType.types';

export class ContentReferenceEvent extends AGitHubEvent {
    public event: ContentReference;

    public action: 'created' | string;

    public contentReference: {
        id: number;
        nodeId: string;
        reference: string;
    };

    public repository: IRepository;
    public sender: IRepositoryUser;
    public installation: {
        id: number;
        nodeId: string;
    };
}
