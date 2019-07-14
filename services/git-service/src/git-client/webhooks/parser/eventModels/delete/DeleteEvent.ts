import { BaseBranchOrTagEvent } from '../common/BaseBranchOrTagEvent';
import { Delete } from '../EventType.types';
import { AGitHubEvent } from '../AGitHubEvent.abstract';

export class DeleteEvent extends AGitHubEvent {
	public event: Delete;
}
