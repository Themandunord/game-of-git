// https://developer.github.com/v3/activity/events/types/#checksuiteevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { IRepository } from '../../common/IRepository.interface';
import { CheckSuite } from '../EventType.types';
import { CheckSuiteActionType } from './constants';
import { ICheckSuite } from './ICheckSuite.interface';

export class CheckSuiteEvent extends AGitHubEvent {
    public event: CheckSuite;

    public action: CheckSuiteActionType;
    public checkSuite: ICheckSuite;
    public repository: IRepository;
    public sender: IRepositoryUser;
}
