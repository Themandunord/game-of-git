import { CHECK_RUN } from './eventModels/check_run/constants';
import { plainToClass } from 'class-transformer';
import models from './eventModels';
import { AGitHubEvent } from './eventModels/AGitHubEvent.abstract';
import { CheckRunEvent } from './eventModels/check_run/CheckRunEvent';
import { CheckSuiteEvent } from './eventModels/check_suite/CheckSuiteEvent';
import { CommitCommentEvent } from './eventModels/commit_comment/CommitCommentEvent';
import { ContentReferenceEvent } from './eventModels/content_reference/ContentReferenceEvent';
import { CreateEvent } from './eventModels/create/CreateEvent';
import { DeleteEvent } from './eventModels/delete/DeleteEvent';
import { GitHubWebhookEvents } from './eventModels/EventType.constants';
import {
	GitHubWebhookEventType,
	CheckRun,
	CommitComment,
	ContentReference,
	Create,
	Delete,
	Fork,
	Gollum,
	IssueComment,
	Issues,
	Label,
	Member,
	Meta,
	Milestone,
	PageBuild,
	Ping,
	Project,
	Public,
	PullRequest,
	PullRequestReview,
	PullRequestReviewComment,
	Push,
	Release,
	Repository,
	RepositoryVulnerabilityAlert,
	SecurityAdvisory,
	Star,
	Watch,
	CheckSuite
} from './eventModels/EventType.types';
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
export class EventModelFactory {
	public static readonly MAKE_MODEL_ERROR = (eventType: string) =>
		`There was an error trying to make the model ${eventType}`

	private static readonly models = models;

	/**
	 * Make a GitHub Webhook Event model based off the passed in eventType, with optional data
	 * throws if the model is not found
	 *
	 * @param repository
	 * @param eventType
	 * @param data
	 */
	public static makeModel(repository: string, eventType: CheckRun, data?: any): CheckRunEvent;
	public static makeModel(repository: string, eventType: CheckSuite, data?: any): CheckSuiteEvent;
	public static makeModel(
		repository: string,
		eventType: CommitComment,
		data?: any
	): CommitCommentEvent;
	public static makeModel(
		repository: string,
		eventType: ContentReference,
		data?: any
	): ContentReferenceEvent;
	public static makeModel(repository: string, eventType: Create, data?: any): CreateEvent;
	public static makeModel(repository: string, eventType: Delete, data?: any): DeleteEvent;
	public static makeModel(repository: string, eventType: Fork, data?: any): ForkEvent;
	public static makeModel(repository: string, eventType: Gollum, data?: any): GollumEvent;
	public static makeModel(
		repository: string,
		eventType: IssueComment,
		data?: any
	): IssueCommentEvent;
	public static makeModel(repository: string, eventType: Issues, data?: any): IssuesEvent;
	public static makeModel(repository: string, eventType: Label, data?: any): LabelEvent;
	public static makeModel(repository: string, eventType: Issues, data?: any): IssuesEvent;
	public static makeModel(repository: string, eventType: Member, data?: any): MemberEvent;
	public static makeModel(repository: string, eventType: Meta, data?: any): MetaEvent;
	public static makeModel(repository: string, eventType: Milestone, data?: any): MilestoneEvent;
	public static makeModel(repository: string, eventType: PageBuild, data?: any): PageBuildEvent;
	public static makeModel(repository: string, eventType: Ping, data?: any): PingEvent;
	public static makeModel(repository: string, eventType: Project, data?: any): ProjectEvent;
	public static makeModel(repository: string, eventType: Public, data?: any): PublicEvent;
	public static makeModel(
		repository: string,
		eventType: PullRequest,
		data?: any
	): PullRequestEvent;
	public static makeModel(
		repository: string,
		eventType: PullRequestReview,
		data?: any
	): PullRequestReviewEvent;
	public static makeModel(
		repository: string,
		eventType: PullRequestReviewComment,
		data?: any
	): PullRequestReviewCommentEvent;
	public static makeModel(repository: string, eventType: Push, data?: any): PushEvent;
	public static makeModel(repository: string, eventType: Release, data?: any): ReleaseEvent;
	public static makeModel(repository: string, eventType: Repository, data?: any): RepositoryEvent;
	public static makeModel(
		repository: string,
		eventType: RepositoryVulnerabilityAlert,
		data?: any
	): RepositoryVulnerabilityAlertEvent;
	public static makeModel(
		repository: string,
		eventType: SecurityAdvisory,
		data?: any
	): SecurityAdvisoryEvent;
	public static makeModel(repository: string, eventType: Star, data?: any): StarEvent;
	public static makeModel(repository: string, eventType: Watch, data?: any): WatchEvent;
	public static makeModel(repository: string, eventType: GitHubWebhookEventType, data?: any) {
		const params = {
			eventType,
			repositoryId: repository,
			...(data || {})
		};

		switch (eventType) {
			case GitHubWebhookEvents.CheckRun:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.CheckSuite:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.CommitComment:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.ContentReference:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Create:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Delete:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Fork:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Gollum:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.IssueComment:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Issues:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Label:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Member:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Meta:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Milestone:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.PageBuild:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Ping:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Project:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Public:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.PullRequest:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.PullRequestReview:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.PullRequestReviewComment:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Push:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Release:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Repository:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.RepositoryVulnerabilityAlert:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.SecurityAdvisory:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Star:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			case GitHubWebhookEvents.Watch:
				return plainToClass(EventModelFactory.getModelConstructor(eventType), params);
			default:
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
	public static getModelConstructor(eventType: CheckRun): new () => CheckRunEvent;
	public static getModelConstructor(eventType: CheckSuite): new () => CheckSuiteEvent;
	public static getModelConstructor(eventType: CommitComment): new () => CommitCommentEvent;
	public static getModelConstructor(eventType: ContentReference): new () => ContentReferenceEvent;
	public static getModelConstructor(eventType: Create): new () => CreateEvent;
	public static getModelConstructor(eventType: Delete): new () => DeleteEvent;
	public static getModelConstructor(eventType: Fork): new () => ForkEvent;
	public static getModelConstructor(eventType: Gollum): new () => GollumEvent;
	public static getModelConstructor(eventType: IssueComment): new () => IssueCommentEvent;
	public static getModelConstructor(eventType: Issues): new () => IssuesEvent;
	public static getModelConstructor(eventType: Label): new () => LabelEvent;
	public static getModelConstructor(eventType: Member): new () => MemberEvent;
	public static getModelConstructor(eventType: Meta): new () => MetaEvent;
	public static getModelConstructor(eventType: Milestone): new () => MilestoneEvent;
	public static getModelConstructor(eventType: PageBuild): new () => PageBuildEvent;
	public static getModelConstructor(eventType: Ping): new () => PingEvent;
	public static getModelConstructor(eventType: Project): new () => ProjectEvent;
	public static getModelConstructor(eventType: Public): new () => PublicEvent;
	public static getModelConstructor(eventType: PullRequest): new () => PullRequestEvent;
	public static getModelConstructor(
		eventType: PullRequestReview
	): new () => PullRequestReviewEvent;
	public static getModelConstructor(
		eventType: PullRequestReviewComment
	): new () => PullRequestReviewCommentEvent;
	public static getModelConstructor(eventType: Push): new () => PushEvent;
	public static getModelConstructor(eventType: Release): new () => ReleaseEvent;
	public static getModelConstructor(eventType: Repository): new () => RepositoryEvent;
	public static getModelConstructor(
		eventType: RepositoryVulnerabilityAlert
	): new () => RepositoryVulnerabilityAlertEvent;
	public static getModelConstructor(eventType: SecurityAdvisory): new () => SecurityAdvisoryEvent;
	public static getModelConstructor(eventType: Star): new () => StarEvent;
	public static getModelConstructor(eventType: Watch): new () => WatchEvent;
	public static getModelConstructor(eventType: GitHubWebhookEventType): new () => AGitHubEvent {
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

// const test1 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.CheckRun);
// const test2 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.CheckSuite);
// const test3 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.CommitComment);
// const test4 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.ContentReference);
// const test5 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Create);
// const test6 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Delete);
// const test7 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Fork);
// const test8 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Gollum);
// const test9 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.IssueComment);
// const test10 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Issues);
// const test11 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Label);
// const test12 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Member);
// const test13 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Meta);
// const test14 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Milestone);
// const test15 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.PageBuild);
// const test16 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Ping);
// const test17 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Project);
// const test18 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Public);
// const test19 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.PullRequest);
// const test20 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.PullRequestReview);
// const test21 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.PullRequestReviewComment);
// const test22 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Push);
// const test23 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Release);
// const test24 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Repository);
// const test25 = EventModelFactory.makeModel(
// 	'asdf',
// 	GitHubWebhookEvents.RepositoryVulnerabilityAlert
// );
// const test26 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.SecurityAdvisory);
// const test27 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Star);
// const test28 = EventModelFactory.makeModel('asdf', GitHubWebhookEvents.Watch);
