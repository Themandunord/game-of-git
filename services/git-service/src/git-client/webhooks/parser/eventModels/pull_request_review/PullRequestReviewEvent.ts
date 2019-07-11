
export class PullRequestReviewEvent extends AGitHubEvent {
    public action: string;
    public review: IRepositoryPullRequestReview;
    public pullRequest: IRepositoryPullRequest; // pull_request
    public repository: IRepository;
    public sender: IRepositoryUser;
}