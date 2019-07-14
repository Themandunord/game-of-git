import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryPullRequest } from '../../common/IRepositoryPullRequest.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { PullRequestReview } from '../EventType.types';
import { PullRequestReviewActionType } from './constants';
import { IPullRequestReview } from './IPullRequestReview.interface';

export class PullRequestReviewEvent extends AGitHubEvent {
	public event: PullRequestReview;
	public action: PullRequestReviewActionType;
	public review: IPullRequestReview;
	public pullRequest: IRepositoryPullRequest; // pull_request
	public repository: IRepository;
	public sender: IRepositoryUser;
}
