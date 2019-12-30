import { GitHubWebhookEventType } from './EventType.types';
import { AggregateRoot, IEvent } from '@nestjs/cqrs';
import { WebhookProcessingEvent } from '../../events/processing/webhook-processing.event';
import { WebhookProcessedEvent } from '../../events/processed/webhook-processed.event';

export abstract class AGitHubEvent extends AggregateRoot {
    public event: GitHubWebhookEventType;
    public action?: string | GitHubWebhookEventType | null;
    public repositoryId: string;
    public data: any;

    /**
     * Commandbus Commands
     */
    public events: ((args: any) => IEvent)[] = [];

    public beginProcessing() {
        console.log(
            `Beginning processing for ${this.constructor.name}`,
            this.events
        );
        const event = new WebhookProcessingEvent(
            this.repositoryId,
            this.constructor.name
        );
        this.apply(event);
        this.commit();
    }

    public completeProcessing() {
        console.log(
            `Completing processing for ${this.constructor.name}`,
            this.events
        );
        this.apply(
            new WebhookProcessedEvent(this.repositoryId, this.constructor.name)
        );
        this.commit();
    }
}
