export class WebhookProcessingEvent {
    constructor(
        public readonly repositoryId: string,
        public readonly eventType: string
    ) {}
}
