import { SendAppEvent } from '../../../../../../app-event/events/send-app-event/send-app-event.event';
import { IRepository } from '../../common/IRepository.interface';
import { AGitHubEvent } from '../AGitHubEvent.abstract';

interface IRepositoryHook {
    type: string;
    id: number;
    name: string | 'web';
    active: boolean;
    events: string[];
    config: {
        contentType: string; // content_type
        insecureSSl: string; // insecure_ssl
        url: string;
    };
    createdAt: string; // created_at
    updatedAt: string; // updated_at
    url: string;
    testUrl: string; // test_url
    pingUrl: string; // ping_url
    lastResponse: {
        code: null | any;
        status: string;
        message: null | any;
    }; // last_response
}

export class PingEvent extends AGitHubEvent {
    zen: string;
    hookId: number; // hook_id
    hook: IRepositoryHook;
    repository: IRepository;

    public events = [
        () =>
            new SendAppEvent('congratulations', {
                type: 'tracking-successful'
            })
    ];
}
