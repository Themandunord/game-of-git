import { plainToClass } from 'class-transformer';
import { ALogger } from '../../../../../common/utilities/ALogger';
import models from './eventModels';
import { AGitHubEvent } from './eventModels/AGitHubEvent.abstract';
import { CheckRunEvent } from './eventModels/check_run/CheckRunEvent';
import { CheckSuiteEvent } from './eventModels/check_suite/CheckSuiteEvent';
import { CommitCommentEvent } from './eventModels/commit_comment/CommitCommentEvent';
import { ContentReferenceEvent } from './eventModels/content_reference/ContentReferenceEvent';
import { CreateEvent } from './eventModels/create/CreateEvent';
import { DeleteEvent } from './eventModels/delete/DeleteEvent';
import { GitHubWebhookEvents } from './eventModels/EventType.constants';
import { GitHubWebhookEventType } from './eventModels/EventType.types';
import { ForkEvent } from './eventModels/fork/ForkEvent';
import { GollumEvent } from './eventModels/gollum/GollumEvent';
import { IssuesEvent } from './eventModels/issues/IssuesEvent';
import { IssueCommentEvent } from './eventModels/issue_comment/IssueCommentEvent';
import { LabelEvent } from './eventModels/label/LabelEvent';
import { MemberEvent } from './eventModels/member/MemberEvent';
import { MetaEvent } from './eventModels/meta/MetaEvent';
import { MilestoneEvent } from './eventModels/milestone/MilestoneEvent';
import { PageBuildEvent } from './eventModels/page_build/PageBuildEvent';
import { PingEvent } from './eventModels/ping/PingEvent';
import { ProjectEvent } from './eventModels/project/ProjectEvent';
import { PublicEvent } from './eventModels/public/PublicEvent';
import { PullRequestEvent } from './eventModels/pull_request/PullRequestEvent';
import { PullRequestReviewEvent } from './eventModels/pull_request_review/PullRequestReviewEvent';
import { PullRequestReviewCommentEvent } from './eventModels/pull_request_review_comment/PullRequestReviewCommentEvent';
import { PushEvent } from './eventModels/push/PushEvent';
import { ReleaseEvent } from './eventModels/release/ReleaseEvent';
import { RepositoryEvent } from './eventModels/repository/RepositoryEvent';
import { RepositoryVulnerabilityAlertEvent } from './eventModels/repository_vulnerability_alert/RepositoryVulnerabilityAlertEvent';
import { SecurityAdvisoryEvent } from './eventModels/security_advisory/SecurityAdvisoryEvent';
import { StarEvent } from './eventModels/star/StarEvent';
import { WatchEvent } from './eventModels/watch/WatchEvent';

/**
 * The Event Model Factory is used to generate GitHub Webhook Event Models from the predefined classes
 */
export class EventModelFactory extends ALogger {
	public static readonly MAKE_MODEL_ERROR = (eventType: string) =>
		`There was an error trying to make the model ${eventType}`

	private readonly models = models;

	constructor() {
		super();
		this.disableLogger();
	}
	/**
	 * Make a GitHub Webhook Event model based off the passed in eventType, with optional data
	 * throws if the model is not found
	 *
	 *
	 * @param repository
	 * @param eventType
	 * @param data
	 */
	public makeModel(repository: string, eventType: GitHubWebhookEventType, data?: any) {
		this.l(`Event Model Factory: Make Model for ${eventType} in repository ${repository}`);

		try {
			const ctor = this.getModelConstructor(eventType);

			this.l(`Got the constructor: `, ctor);

			const paramObj: any = {
				event: eventType,
				repositoryId: repository,
				data,
			};

			const newModel = plainToClass(ctor, paramObj);
			this.l(newModel);

			return newModel;
		} catch (e) {
			this.e(e);
			throw new Error(EventModelFactory.MAKE_MODEL_ERROR(eventType));
		}
	}

	/**
	 * Return the constructor for the GitHub Webhook Event Model based on the eventType argument
	 *
	 * @todo use a decorator/discovery approach instead of a God switch statement
	 *
	 * @param eventType
	 */
	public getModelConstructor(eventType: GitHubWebhookEventType): new () => AGitHubEvent {
		switch (eventType) {
			case GitHubWebhookEvents.CheckRun:
				return CheckRunEvent;
			case GitHubWebhookEvents.CheckSuite:
				return CheckSuiteEvent;
			case GitHubWebhookEvents.CommitComment:
				return CommitCommentEvent;
			case GitHubWebhookEvents.ContentReference:
				return ContentReferenceEvent;
			case GitHubWebhookEvents.Create:
				return CreateEvent;
			case GitHubWebhookEvents.Delete:
				return DeleteEvent;
			case GitHubWebhookEvents.Fork:
				return ForkEvent;
			case GitHubWebhookEvents.Gollum:
				return GollumEvent;
			case GitHubWebhookEvents.IssueComment:
				return IssueCommentEvent;
			case GitHubWebhookEvents.Issues:
				return IssuesEvent;
			case GitHubWebhookEvents.Label:
				return LabelEvent;
			case GitHubWebhookEvents.Member:
				return MemberEvent;
			case GitHubWebhookEvents.Meta:
				return MetaEvent;
			case GitHubWebhookEvents.Milestone:
				return MilestoneEvent;
			case GitHubWebhookEvents.PageBuild:
				return PageBuildEvent;
			case GitHubWebhookEvents.Ping:
				return PingEvent;
			case GitHubWebhookEvents.Project:
				return ProjectEvent;
			case GitHubWebhookEvents.Public:
				return PublicEvent;
			case GitHubWebhookEvents.PullRequest:
				return PullRequestEvent;
			case GitHubWebhookEvents.PullRequestReview:
				return PullRequestReviewEvent;
			case GitHubWebhookEvents.PullRequestReviewComment:
				return PullRequestReviewCommentEvent;
			case GitHubWebhookEvents.Push:
				return PushEvent;
			case GitHubWebhookEvents.Release:
				return ReleaseEvent;
			case GitHubWebhookEvents.Repository:
				return RepositoryEvent;
			case GitHubWebhookEvents.RepositoryVulnerabilityAlert:
				return RepositoryVulnerabilityAlertEvent;
			case GitHubWebhookEvents.SecurityAdvisory:
				return SecurityAdvisoryEvent;
			case GitHubWebhookEvents.Star:
				return StarEvent;
			case GitHubWebhookEvents.Watch:
				return WatchEvent;
			default:
				throw new Error(`GitHub Webhook Event Type Not Found ${eventType}`);
		}
	}
}

export default new EventModelFactory();
