/*
SAMPLE https://developer.github.com/v3/activity/events/types/#issuesevent
*/

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryIssue } from '../common/IRepositoryIssue.interface';

export class IssuesEvent extends AGitHubEvent {
    public action: string;
    public issue: IRepositoryIssue;
    public changes: any;
    public repository: IRepository;
    public sender: IRepositoryUser;
}