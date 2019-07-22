import { GitHubWebhookEventType } from './EventType.types';
import { AggregateRoot } from '@nestjs/cqrs';

export abstract class AGitHubEvent extends AggregateRoot {
	public event: GitHubWebhookEventType;
	public action?: string | GitHubWebhookEventType | null;
	public repositoryId: string;
	public data: any;

	/**
	 * Uses the CQRS Command Bus to broadcast a SaveWebhook Event to be piucked up and handled by the SaveWebhookEvent handler
	 */
	// saveWebhook() {
	// tslint:disable-next-line:no-console
	// console.log('AGitHubEvent calling apply for SaveWebhookEvent');
	// this.apply(new SaveWebhookEvent(this.repositoryId, this.event, this.data, this));
	// }
}

/**
 * event type string
 * action string
 * repository reference
 * sender (github user, ultimately?)
 * timestamp
 */

// export class Hero extends AggregateRoot {
//   constructor(private readonly id: string) {
//     super();
//   }

//   killEnemy(enemyId: string) {
//     // logic
//     this.apply(new HeroKilledDragonEvent(this.id, enemyId));
//   }
// }
