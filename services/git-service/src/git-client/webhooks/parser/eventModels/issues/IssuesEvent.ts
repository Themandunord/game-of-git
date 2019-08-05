import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryIssue } from '../../common/IRepositoryIssue.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { IssuesActionType } from './constants';

export class IssuesEvent extends AGitHubEvent {
	public action: IssuesActionType;
	public issue: IRepositoryIssue;
	public changes?: any; // TODO only if `edited`
	public repository: IRepository;
	public sender: IRepositoryUser;
}
