import { GitHubWebhookEventType } from "../parser/eventModels/EventType.types";
import { AGitHubEvent } from "../parser/eventModels/AGitHubEvent.abstract";

export class HandleWebhookCommand {
  constructor(public readonly webhookId: string) {}
}
