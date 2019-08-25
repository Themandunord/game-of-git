// https://developer.github.com/v3/activity/events/types/#checkrunevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { CheckRun } from '../EventType.types';
import { CheckRunActionTypes } from './constants';
import { ICheckRun } from './ICheckRun.interface';

export class CheckRunEvent extends AGitHubEvent {
    public event: CheckRun;
    public action: CheckRunActionTypes;
    public checkRun: ICheckRun;
    public requestedAction: any; // TODO: requested_action
}
