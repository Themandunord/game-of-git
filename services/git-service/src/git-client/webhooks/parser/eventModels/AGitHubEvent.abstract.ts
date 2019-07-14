import { GitHubWebhookEventTypes } from './EventType.types';

export abstract class AGitHubEvent {
	public event: GitHubWebhookEventTypes;
	public action?: string | GitHubWebhookEventTypes | null;
	public repositoryId: string;
	public data: any;
}

/**
 * event type string
 * action string
 * repository reference
 * sender (github user, ultimately?)
 * timestamp
 */
