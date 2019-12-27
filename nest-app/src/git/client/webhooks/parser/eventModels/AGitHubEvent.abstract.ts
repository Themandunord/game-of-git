import { GitHubWebhookEventType } from './EventType.types';
import { AggregateRoot } from '@nestjs/cqrs';

export abstract class AGitHubEvent extends AggregateRoot {
    public event: GitHubWebhookEventType;
    public action?: string | GitHubWebhookEventType | null;
    public repositoryId: string;
    public data: any;
}
