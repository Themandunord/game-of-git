import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';
import { IRepositoryPullRequest } from '../pull_request/PullRequestEvent';
import { PullRequestReview } from '../EventType.types';
export class PullRequestReviewEvent extends AGitHubEvent {
	public event: PullRequestReview;
	public action: string;
	//   public review: IRepositoryPullRequestReview;
	public review: any;
	public pullRequest: IRepositoryPullRequest; // pull_request
	public repository: IRepository;
	public sender: IRepositoryUser;
}
