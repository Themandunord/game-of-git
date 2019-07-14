import { LabelEvent } from './eventModels/label/LabelEvent';
import { IssueCommentEvent } from './eventModels/issue_comment/IssueCommentEvent';
import { DeleteEvent } from './eventModels/delete/DeleteEvent';
import { CreateEvent } from './eventModels/create/CreateEvent';
import { PullRequestReviewEvent } from './eventModels/pull_request_review/PullRequestReviewEvent';
import GitHubWebhookEvent from './eventModels/EventType.constants';
import { PushEvent } from './eventModels/push/PushEvent';
import { PullRequestEvent } from './eventModels/pull_request/PullRequestEvent';
import { IssuesEvent } from './eventModels/issues/IssuesEvent';
import { PingEvent } from './eventModels/ping/PingEvent';
import { StarEvent } from './eventModels/star/StarEvent';
import { WatchEvent } from './eventModels/watch/WatchEvent';
import { ALogger } from '../../../../../common/utilities/ALogger';
import { GitHubWebhookEventTypes } from './eventModels/EventType.types';
import { plainToClass } from 'class-transformer';
import { AGitHubEvent } from './eventModels/AGitHubEvent.abstract';
import models from './eventModels';

/**
 * The Event Model Factory is used to generate GitHub Webhook Event Models from the predefined classes
 */
class EventModelFactory extends ALogger {
	private readonly models = models;

	constructor() {
		super();
	}
	/**
	 * Make a GitHub Webhook Event model based off the passed in eventType, with optional data
	 * @param eventType
	 * @param repository
	 * @param data
	 */
	public makeModel(eventType: GitHubWebhookEventTypes, repository: string, data?: any) {
		this.l(`Event Model Factory: Make Model for ${eventType} in repository ${repository}`);

		try {
			const Con = this.getModelConstructor(eventType);

			this.l(`Got the constructor: `, Con);

			const paramObj: any = {
				event: eventType,
				repositoryId: repository,
				data,
			};

			const newModel = plainToClass(Con, paramObj);
			this.l(newModel);

			return newModel;
		} catch (e) {
			this.e(`There was an error trying to make the model`);

			return;
		}
	}

	/**
	 * Return the constructor for the GitHub Webhook Event Model based on the eventType argument
	 *
	 * @todo populate the rest of the model constructors
	 *
	 * @param eventType
	 */
	public getModelConstructor(eventType: GitHubWebhookEventTypes): new () => AGitHubEvent {
		switch (eventType) {
			case GitHubWebhookEvent.Create:
				return CreateEvent;
			case GitHubWebhookEvent.Delete:
				return DeleteEvent;
			case GitHubWebhookEvent.IssueComment:
				return IssueCommentEvent;
			case GitHubWebhookEvent.Issues:
				return IssuesEvent;
			case GitHubWebhookEvent.Label:
				return LabelEvent;
			case GitHubWebhookEvent.Ping:
				return PingEvent;
			case GitHubWebhookEvent.PullRequest:
				return PullRequestEvent;
			case GitHubWebhookEvent.PullRequestReview:
				return PullRequestReviewEvent;
			case GitHubWebhookEvent.Push:
				return PushEvent;
			case GitHubWebhookEvent.Star:
				return StarEvent;
			case GitHubWebhookEvent.Watch:
				return WatchEvent;
			default:
				throw new Error(`GitHub Webhook Event Type Not Found ${eventType}`);
		}
	}
}

export default new EventModelFactory();
