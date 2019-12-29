export class WebhookProcessedEvent {
    constructor(
        public readonly repositoryId: string,
        public readonly eventType: string
    ) {}
}
