import { GitHubWebhookEventType } from '../parser/eventModels/EventType.types';
import { AGitHubEvent } from '../parser/eventModels/AGitHubEvent.abstract';

export class HandleWebhookCommand {
	constructor(
		public readonly repository: string,
		public readonly eventType: GitHubWebhookEventType,
		public readonly rawEventData: any,
		public readonly model: AGitHubEvent
	) {}
}
