import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositorySecurityAdvisory } from '../../common/IRepositorySecurityAdvisory.interface';
import { SecurityAdvisory } from './../EventType.types';
import { SecurityAdvisoryActionType } from './constants';

export class SecurityAdvisoryEvent extends AGitHubEvent {
	public event: SecurityAdvisory;

	public action: SecurityAdvisoryActionType;

	public securityAdvisory: IRepositorySecurityAdvisory;
}
