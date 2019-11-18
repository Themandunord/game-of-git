import { PullRequest } from './PullRequest.interface';
import { User } from './User.interface';

export interface ReviewRequest {
	pullRequest: PullRequest;
	id: string;
	requestedReviewer: User;
}
