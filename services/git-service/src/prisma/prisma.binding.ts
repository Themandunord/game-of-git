import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import { Options } from 'graphql-binding';
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding';

export interface Query {
	users: <T = Array<User | null>>(
		args: {
			where?: UserWhereInput | null;
			orderBy?: UserOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	appKeys: <T = Array<AppKey | null>>(
		args: {
			where?: AppKeyWhereInput | null;
			orderBy?: AppKeyOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	repositories: <T = Array<Repository | null>>(
		args: {
			where?: RepositoryWhereInput | null;
			orderBy?: RepositoryOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubWebhookEvents: <T = Array<GitHubWebhookEvent | null>>(
		args: {
			where?: GitHubWebhookEventWhereInput | null;
			orderBy?: GitHubWebhookEventOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	games: <T = Array<Game | null>>(
		args: {
			where?: GameWhereInput | null;
			orderBy?: GameOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubBranches: <T = Array<GitHubBranch | null>>(
		args: {
			where?: GitHubBranchWhereInput | null;
			orderBy?: GitHubBranchOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubReviewThreads: <T = Array<GitHubReviewThread | null>>(
		args: {
			where?: GitHubReviewThreadWhereInput | null;
			orderBy?: GitHubReviewThreadOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubPullRequestReviews: <T = Array<GitHubPullRequestReview | null>>(
		args: {
			where?: GitHubPullRequestReviewWhereInput | null;
			orderBy?: GitHubPullRequestReviewOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubComments: <T = Array<GitHubComment | null>>(
		args: {
			where?: GitHubCommentWhereInput | null;
			orderBy?: GitHubCommentOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubReviewRequests: <T = Array<GitHubReviewRequest | null>>(
		args: {
			where?: GitHubReviewRequestWhereInput | null;
			orderBy?: GitHubReviewRequestOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubTopics: <T = Array<GitHubTopic | null>>(
		args: {
			where?: GitHubTopicWhereInput | null;
			orderBy?: GitHubTopicOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubIssues: <T = Array<GitHubIssue | null>>(
		args: {
			where?: GitHubIssueWhereInput | null;
			orderBy?: GitHubIssueOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubRepositories: <T = Array<GitHubRepository | null>>(
		args: {
			where?: GitHubRepositoryWhereInput | null;
			orderBy?: GitHubRepositoryOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubPullRequests: <T = Array<GitHubPullRequest | null>>(
		args: {
			where?: GitHubPullRequestWhereInput | null;
			orderBy?: GitHubPullRequestOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubCommits: <T = Array<GitHubCommit | null>>(
		args: {
			where?: GitHubCommitWhereInput | null;
			orderBy?: GitHubCommitOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubUsers: <T = Array<GitHubUser | null>>(
		args: {
			where?: GitHubUserWhereInput | null;
			orderBy?: GitHubUserOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubFileDiffs: <T = Array<GitHubFileDiff | null>>(
		args: {
			where?: GitHubFileDiffWhereInput | null;
			orderBy?: GitHubFileDiffOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubLabels: <T = Array<GitHubLabel | null>>(
		args: {
			where?: GitHubLabelWhereInput | null;
			orderBy?: GitHubLabelOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	user: <T = User | null>(
		args: { where: UserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	appKey: <T = AppKey | null>(
		args: { where: AppKeyWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	repository: <T = Repository | null>(
		args: { where: RepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubWebhookEvent: <T = GitHubWebhookEvent | null>(
		args: { where: GitHubWebhookEventWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	game: <T = Game | null>(
		args: { where: GameWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubBranch: <T = GitHubBranch | null>(
		args: { where: GitHubBranchWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubReviewThread: <T = GitHubReviewThread | null>(
		args: { where: GitHubReviewThreadWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubPullRequestReview: <T = GitHubPullRequestReview | null>(
		args: { where: GitHubPullRequestReviewWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubComment: <T = GitHubComment | null>(
		args: { where: GitHubCommentWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubReviewRequest: <T = GitHubReviewRequest | null>(
		args: { where: GitHubReviewRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubTopic: <T = GitHubTopic | null>(
		args: { where: GitHubTopicWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubIssue: <T = GitHubIssue | null>(
		args: { where: GitHubIssueWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubRepository: <T = GitHubRepository | null>(
		args: { where: GitHubRepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubPullRequest: <T = GitHubPullRequest | null>(
		args: { where: GitHubPullRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubCommit: <T = GitHubCommit | null>(
		args: { where: GitHubCommitWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubUser: <T = GitHubUser | null>(
		args: { where: GitHubUserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubFileDiff: <T = GitHubFileDiff | null>(
		args: { where: GitHubFileDiffWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	gitHubLabel: <T = GitHubLabel | null>(
		args: { where: GitHubLabelWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	usersConnection: <T = UserConnection>(
		args: {
			where?: UserWhereInput | null;
			orderBy?: UserOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	appKeysConnection: <T = AppKeyConnection>(
		args: {
			where?: AppKeyWhereInput | null;
			orderBy?: AppKeyOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	repositoriesConnection: <T = RepositoryConnection>(
		args: {
			where?: RepositoryWhereInput | null;
			orderBy?: RepositoryOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubWebhookEventsConnection: <T = GitHubWebhookEventConnection>(
		args: {
			where?: GitHubWebhookEventWhereInput | null;
			orderBy?: GitHubWebhookEventOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gamesConnection: <T = GameConnection>(
		args: {
			where?: GameWhereInput | null;
			orderBy?: GameOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubBranchesConnection: <T = GitHubBranchConnection>(
		args: {
			where?: GitHubBranchWhereInput | null;
			orderBy?: GitHubBranchOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubReviewThreadsConnection: <T = GitHubReviewThreadConnection>(
		args: {
			where?: GitHubReviewThreadWhereInput | null;
			orderBy?: GitHubReviewThreadOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubPullRequestReviewsConnection: <T = GitHubPullRequestReviewConnection>(
		args: {
			where?: GitHubPullRequestReviewWhereInput | null;
			orderBy?: GitHubPullRequestReviewOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubCommentsConnection: <T = GitHubCommentConnection>(
		args: {
			where?: GitHubCommentWhereInput | null;
			orderBy?: GitHubCommentOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubReviewRequestsConnection: <T = GitHubReviewRequestConnection>(
		args: {
			where?: GitHubReviewRequestWhereInput | null;
			orderBy?: GitHubReviewRequestOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubTopicsConnection: <T = GitHubTopicConnection>(
		args: {
			where?: GitHubTopicWhereInput | null;
			orderBy?: GitHubTopicOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubIssuesConnection: <T = GitHubIssueConnection>(
		args: {
			where?: GitHubIssueWhereInput | null;
			orderBy?: GitHubIssueOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubRepositoriesConnection: <T = GitHubRepositoryConnection>(
		args: {
			where?: GitHubRepositoryWhereInput | null;
			orderBy?: GitHubRepositoryOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubPullRequestsConnection: <T = GitHubPullRequestConnection>(
		args: {
			where?: GitHubPullRequestWhereInput | null;
			orderBy?: GitHubPullRequestOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubCommitsConnection: <T = GitHubCommitConnection>(
		args: {
			where?: GitHubCommitWhereInput | null;
			orderBy?: GitHubCommitOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubUsersConnection: <T = GitHubUserConnection>(
		args: {
			where?: GitHubUserWhereInput | null;
			orderBy?: GitHubUserOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubFileDiffsConnection: <T = GitHubFileDiffConnection>(
		args: {
			where?: GitHubFileDiffWhereInput | null;
			orderBy?: GitHubFileDiffOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	gitHubLabelsConnection: <T = GitHubLabelConnection>(
		args: {
			where?: GitHubLabelWhereInput | null;
			orderBy?: GitHubLabelOrderByInput | null;
			skip?: Int | null;
			after?: String | null;
			before?: String | null;
			first?: Int | null;
			last?: Int | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	node: <T = Node | null>(
		args: { id: ID_Output },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
}

export interface Mutation {
	createUser: <T = User>(
		args: { data: UserCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createAppKey: <T = AppKey>(
		args: { data: AppKeyCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createRepository: <T = Repository>(
		args: { data: RepositoryCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubWebhookEvent: <T = GitHubWebhookEvent>(
		args: { data: GitHubWebhookEventCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGame: <T = Game>(
		args: { data: GameCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubBranch: <T = GitHubBranch>(
		args: { data: GitHubBranchCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubReviewThread: <T = GitHubReviewThread>(
		args: { data: GitHubReviewThreadCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubPullRequestReview: <T = GitHubPullRequestReview>(
		args: { data: GitHubPullRequestReviewCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubComment: <T = GitHubComment>(
		args: { data: GitHubCommentCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubReviewRequest: <T = GitHubReviewRequest>(
		args: { data: GitHubReviewRequestCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubTopic: <T = GitHubTopic>(
		args: { data: GitHubTopicCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubIssue: <T = GitHubIssue>(
		args: { data: GitHubIssueCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubRepository: <T = GitHubRepository>(
		args: { data: GitHubRepositoryCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubPullRequest: <T = GitHubPullRequest>(
		args: { data: GitHubPullRequestCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubCommit: <T = GitHubCommit>(
		args: { data: GitHubCommitCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubUser: <T = GitHubUser>(
		args: { data: GitHubUserCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubFileDiff: <T = GitHubFileDiff>(
		args: { data: GitHubFileDiffCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	createGitHubLabel: <T = GitHubLabel>(
		args: { data: GitHubLabelCreateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateUser: <T = User | null>(
		args: { data: UserUpdateInput; where: UserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateAppKey: <T = AppKey | null>(
		args: { data: AppKeyUpdateInput; where: AppKeyWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateRepository: <T = Repository | null>(
		args: { data: RepositoryUpdateInput; where: RepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubWebhookEvent: <T = GitHubWebhookEvent | null>(
		args: { data: GitHubWebhookEventUpdateInput; where: GitHubWebhookEventWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGame: <T = Game | null>(
		args: { data: GameUpdateInput; where: GameWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubBranch: <T = GitHubBranch | null>(
		args: { data: GitHubBranchUpdateInput; where: GitHubBranchWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubReviewThread: <T = GitHubReviewThread | null>(
		args: { data: GitHubReviewThreadUpdateInput; where: GitHubReviewThreadWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubPullRequestReview: <T = GitHubPullRequestReview | null>(
		args: {
			data: GitHubPullRequestReviewUpdateInput;
			where: GitHubPullRequestReviewWhereUniqueInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubComment: <T = GitHubComment | null>(
		args: { data: GitHubCommentUpdateInput; where: GitHubCommentWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubReviewRequest: <T = GitHubReviewRequest | null>(
		args: { data: GitHubReviewRequestUpdateInput; where: GitHubReviewRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubTopic: <T = GitHubTopic | null>(
		args: { data: GitHubTopicUpdateInput; where: GitHubTopicWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubIssue: <T = GitHubIssue | null>(
		args: { data: GitHubIssueUpdateInput; where: GitHubIssueWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubRepository: <T = GitHubRepository | null>(
		args: { data: GitHubRepositoryUpdateInput; where: GitHubRepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubPullRequest: <T = GitHubPullRequest | null>(
		args: { data: GitHubPullRequestUpdateInput; where: GitHubPullRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubCommit: <T = GitHubCommit | null>(
		args: { data: GitHubCommitUpdateInput; where: GitHubCommitWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubUser: <T = GitHubUser | null>(
		args: { data: GitHubUserUpdateInput; where: GitHubUserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubFileDiff: <T = GitHubFileDiff | null>(
		args: { data: GitHubFileDiffUpdateInput; where: GitHubFileDiffWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	updateGitHubLabel: <T = GitHubLabel | null>(
		args: { data: GitHubLabelUpdateInput; where: GitHubLabelWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteUser: <T = User | null>(
		args: { where: UserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteAppKey: <T = AppKey | null>(
		args: { where: AppKeyWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteRepository: <T = Repository | null>(
		args: { where: RepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubWebhookEvent: <T = GitHubWebhookEvent | null>(
		args: { where: GitHubWebhookEventWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGame: <T = Game | null>(
		args: { where: GameWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubBranch: <T = GitHubBranch | null>(
		args: { where: GitHubBranchWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubReviewThread: <T = GitHubReviewThread | null>(
		args: { where: GitHubReviewThreadWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubPullRequestReview: <T = GitHubPullRequestReview | null>(
		args: { where: GitHubPullRequestReviewWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubComment: <T = GitHubComment | null>(
		args: { where: GitHubCommentWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubReviewRequest: <T = GitHubReviewRequest | null>(
		args: { where: GitHubReviewRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubTopic: <T = GitHubTopic | null>(
		args: { where: GitHubTopicWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubIssue: <T = GitHubIssue | null>(
		args: { where: GitHubIssueWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubRepository: <T = GitHubRepository | null>(
		args: { where: GitHubRepositoryWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubPullRequest: <T = GitHubPullRequest | null>(
		args: { where: GitHubPullRequestWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubCommit: <T = GitHubCommit | null>(
		args: { where: GitHubCommitWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubUser: <T = GitHubUser | null>(
		args: { where: GitHubUserWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubFileDiff: <T = GitHubFileDiff | null>(
		args: { where: GitHubFileDiffWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	deleteGitHubLabel: <T = GitHubLabel | null>(
		args: { where: GitHubLabelWhereUniqueInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T | null>;
	upsertUser: <T = User>(
		args: { where: UserWhereUniqueInput; create: UserCreateInput; update: UserUpdateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertAppKey: <T = AppKey>(
		args: {
			where: AppKeyWhereUniqueInput;
			create: AppKeyCreateInput;
			update: AppKeyUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertRepository: <T = Repository>(
		args: {
			where: RepositoryWhereUniqueInput;
			create: RepositoryCreateInput;
			update: RepositoryUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubWebhookEvent: <T = GitHubWebhookEvent>(
		args: {
			where: GitHubWebhookEventWhereUniqueInput;
			create: GitHubWebhookEventCreateInput;
			update: GitHubWebhookEventUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGame: <T = Game>(
		args: { where: GameWhereUniqueInput; create: GameCreateInput; update: GameUpdateInput },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubBranch: <T = GitHubBranch>(
		args: {
			where: GitHubBranchWhereUniqueInput;
			create: GitHubBranchCreateInput;
			update: GitHubBranchUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubReviewThread: <T = GitHubReviewThread>(
		args: {
			where: GitHubReviewThreadWhereUniqueInput;
			create: GitHubReviewThreadCreateInput;
			update: GitHubReviewThreadUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubPullRequestReview: <T = GitHubPullRequestReview>(
		args: {
			where: GitHubPullRequestReviewWhereUniqueInput;
			create: GitHubPullRequestReviewCreateInput;
			update: GitHubPullRequestReviewUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubComment: <T = GitHubComment>(
		args: {
			where: GitHubCommentWhereUniqueInput;
			create: GitHubCommentCreateInput;
			update: GitHubCommentUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubReviewRequest: <T = GitHubReviewRequest>(
		args: {
			where: GitHubReviewRequestWhereUniqueInput;
			create: GitHubReviewRequestCreateInput;
			update: GitHubReviewRequestUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubTopic: <T = GitHubTopic>(
		args: {
			where: GitHubTopicWhereUniqueInput;
			create: GitHubTopicCreateInput;
			update: GitHubTopicUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubIssue: <T = GitHubIssue>(
		args: {
			where: GitHubIssueWhereUniqueInput;
			create: GitHubIssueCreateInput;
			update: GitHubIssueUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubRepository: <T = GitHubRepository>(
		args: {
			where: GitHubRepositoryWhereUniqueInput;
			create: GitHubRepositoryCreateInput;
			update: GitHubRepositoryUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubPullRequest: <T = GitHubPullRequest>(
		args: {
			where: GitHubPullRequestWhereUniqueInput;
			create: GitHubPullRequestCreateInput;
			update: GitHubPullRequestUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubCommit: <T = GitHubCommit>(
		args: {
			where: GitHubCommitWhereUniqueInput;
			create: GitHubCommitCreateInput;
			update: GitHubCommitUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubUser: <T = GitHubUser>(
		args: {
			where: GitHubUserWhereUniqueInput;
			create: GitHubUserCreateInput;
			update: GitHubUserUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubFileDiff: <T = GitHubFileDiff>(
		args: {
			where: GitHubFileDiffWhereUniqueInput;
			create: GitHubFileDiffCreateInput;
			update: GitHubFileDiffUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	upsertGitHubLabel: <T = GitHubLabel>(
		args: {
			where: GitHubLabelWhereUniqueInput;
			create: GitHubLabelCreateInput;
			update: GitHubLabelUpdateInput;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyUsers: <T = BatchPayload>(
		args: { data: UserUpdateManyMutationInput; where?: UserWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyAppKeys: <T = BatchPayload>(
		args: { data: AppKeyUpdateManyMutationInput; where?: AppKeyWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyRepositories: <T = BatchPayload>(
		args: { data: RepositoryUpdateManyMutationInput; where?: RepositoryWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubWebhookEvents: <T = BatchPayload>(
		args: {
			data: GitHubWebhookEventUpdateManyMutationInput;
			where?: GitHubWebhookEventWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGames: <T = BatchPayload>(
		args: { data: GameUpdateManyMutationInput; where?: GameWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubBranches: <T = BatchPayload>(
		args: { data: GitHubBranchUpdateManyMutationInput; where?: GitHubBranchWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubReviewThreads: <T = BatchPayload>(
		args: {
			data: GitHubReviewThreadUpdateManyMutationInput;
			where?: GitHubReviewThreadWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubPullRequestReviews: <T = BatchPayload>(
		args: {
			data: GitHubPullRequestReviewUpdateManyMutationInput;
			where?: GitHubPullRequestReviewWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubComments: <T = BatchPayload>(
		args: {
			data: GitHubCommentUpdateManyMutationInput;
			where?: GitHubCommentWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubTopics: <T = BatchPayload>(
		args: { data: GitHubTopicUpdateManyMutationInput; where?: GitHubTopicWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubIssues: <T = BatchPayload>(
		args: { data: GitHubIssueUpdateManyMutationInput; where?: GitHubIssueWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubRepositories: <T = BatchPayload>(
		args: {
			data: GitHubRepositoryUpdateManyMutationInput;
			where?: GitHubRepositoryWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubPullRequests: <T = BatchPayload>(
		args: {
			data: GitHubPullRequestUpdateManyMutationInput;
			where?: GitHubPullRequestWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubCommits: <T = BatchPayload>(
		args: { data: GitHubCommitUpdateManyMutationInput; where?: GitHubCommitWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubUsers: <T = BatchPayload>(
		args: { data: GitHubUserUpdateManyMutationInput; where?: GitHubUserWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubFileDiffs: <T = BatchPayload>(
		args: {
			data: GitHubFileDiffUpdateManyMutationInput;
			where?: GitHubFileDiffWhereInput | null;
		},
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	updateManyGitHubLabels: <T = BatchPayload>(
		args: { data: GitHubLabelUpdateManyMutationInput; where?: GitHubLabelWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyUsers: <T = BatchPayload>(
		args: { where?: UserWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyAppKeys: <T = BatchPayload>(
		args: { where?: AppKeyWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyRepositories: <T = BatchPayload>(
		args: { where?: RepositoryWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubWebhookEvents: <T = BatchPayload>(
		args: { where?: GitHubWebhookEventWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGames: <T = BatchPayload>(
		args: { where?: GameWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubBranches: <T = BatchPayload>(
		args: { where?: GitHubBranchWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubReviewThreads: <T = BatchPayload>(
		args: { where?: GitHubReviewThreadWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubPullRequestReviews: <T = BatchPayload>(
		args: { where?: GitHubPullRequestReviewWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubComments: <T = BatchPayload>(
		args: { where?: GitHubCommentWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubReviewRequests: <T = BatchPayload>(
		args: { where?: GitHubReviewRequestWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubTopics: <T = BatchPayload>(
		args: { where?: GitHubTopicWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubIssues: <T = BatchPayload>(
		args: { where?: GitHubIssueWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubRepositories: <T = BatchPayload>(
		args: { where?: GitHubRepositoryWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubPullRequests: <T = BatchPayload>(
		args: { where?: GitHubPullRequestWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubCommits: <T = BatchPayload>(
		args: { where?: GitHubCommitWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubUsers: <T = BatchPayload>(
		args: { where?: GitHubUserWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubFileDiffs: <T = BatchPayload>(
		args: { where?: GitHubFileDiffWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	deleteManyGitHubLabels: <T = BatchPayload>(
		args: { where?: GitHubLabelWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
	executeRaw: <T = Json>(
		args: { database?: PrismaDatabase | null; query: String },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<T>;
}

export interface Subscription {
	user: <T = UserSubscriptionPayload | null>(
		args: { where?: UserSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	appKey: <T = AppKeySubscriptionPayload | null>(
		args: { where?: AppKeySubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	repository: <T = RepositorySubscriptionPayload | null>(
		args: { where?: RepositorySubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubWebhookEvent: <T = GitHubWebhookEventSubscriptionPayload | null>(
		args: { where?: GitHubWebhookEventSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	game: <T = GameSubscriptionPayload | null>(
		args: { where?: GameSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubBranch: <T = GitHubBranchSubscriptionPayload | null>(
		args: { where?: GitHubBranchSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubReviewThread: <T = GitHubReviewThreadSubscriptionPayload | null>(
		args: { where?: GitHubReviewThreadSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubPullRequestReview: <T = GitHubPullRequestReviewSubscriptionPayload | null>(
		args: { where?: GitHubPullRequestReviewSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubComment: <T = GitHubCommentSubscriptionPayload | null>(
		args: { where?: GitHubCommentSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubReviewRequest: <T = GitHubReviewRequestSubscriptionPayload | null>(
		args: { where?: GitHubReviewRequestSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubTopic: <T = GitHubTopicSubscriptionPayload | null>(
		args: { where?: GitHubTopicSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubIssue: <T = GitHubIssueSubscriptionPayload | null>(
		args: { where?: GitHubIssueSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubRepository: <T = GitHubRepositorySubscriptionPayload | null>(
		args: { where?: GitHubRepositorySubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubPullRequest: <T = GitHubPullRequestSubscriptionPayload | null>(
		args: { where?: GitHubPullRequestSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubCommit: <T = GitHubCommitSubscriptionPayload | null>(
		args: { where?: GitHubCommitSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubUser: <T = GitHubUserSubscriptionPayload | null>(
		args: { where?: GitHubUserSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubFileDiff: <T = GitHubFileDiffSubscriptionPayload | null>(
		args: { where?: GitHubFileDiffSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
	gitHubLabel: <T = GitHubLabelSubscriptionPayload | null>(
		args: { where?: GitHubLabelSubscriptionWhereInput | null },
		info?: GraphQLResolveInfo | string,
		options?: Options
	) => Promise<AsyncIterator<T | null>>;
}

export interface Exists {
	User: (where?: UserWhereInput) => Promise<boolean>;
	AppKey: (where?: AppKeyWhereInput) => Promise<boolean>;
	Repository: (where?: RepositoryWhereInput) => Promise<boolean>;
	GitHubWebhookEvent: (where?: GitHubWebhookEventWhereInput) => Promise<boolean>;
	Game: (where?: GameWhereInput) => Promise<boolean>;
	GitHubBranch: (where?: GitHubBranchWhereInput) => Promise<boolean>;
	GitHubReviewThread: (where?: GitHubReviewThreadWhereInput) => Promise<boolean>;
	GitHubPullRequestReview: (where?: GitHubPullRequestReviewWhereInput) => Promise<boolean>;
	GitHubComment: (where?: GitHubCommentWhereInput) => Promise<boolean>;
	GitHubReviewRequest: (where?: GitHubReviewRequestWhereInput) => Promise<boolean>;
	GitHubTopic: (where?: GitHubTopicWhereInput) => Promise<boolean>;
	GitHubIssue: (where?: GitHubIssueWhereInput) => Promise<boolean>;
	GitHubRepository: (where?: GitHubRepositoryWhereInput) => Promise<boolean>;
	GitHubPullRequest: (where?: GitHubPullRequestWhereInput) => Promise<boolean>;
	GitHubCommit: (where?: GitHubCommitWhereInput) => Promise<boolean>;
	GitHubUser: (where?: GitHubUserWhereInput) => Promise<boolean>;
	GitHubFileDiff: (where?: GitHubFileDiffWhereInput) => Promise<boolean>;
	GitHubLabel: (where?: GitHubLabelWhereInput) => Promise<boolean>;
}

export interface Prisma {
	query: Query;
	mutation: Mutation;
	subscription: Subscription;
	exists: Exists;
	request: <T = any>(query: string, variables?: { [key: string]: any }) => Promise<T>;
	delegate(
		operation: 'query' | 'mutation',
		fieldName: string,
		args: {
			[key: string]: any;
		},
		infoOrQuery?: GraphQLResolveInfo | string,
		options?: Options
	): Promise<any>;
	delegateSubscription(
		fieldName: string,
		args?: {
			[key: string]: any;
		},
		infoOrQuery?: GraphQLResolveInfo | string,
		options?: Options
	): Promise<AsyncIterator<any>>;
	getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
	new (options: BasePrismaOptions): T;
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateAppKey {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateGitHubBranch {
  count: Int!
}

type AggregateGitHubComment {
  count: Int!
}

type AggregateGitHubCommit {
  count: Int!
}

type AggregateGitHubFileDiff {
  count: Int!
}

type AggregateGitHubIssue {
  count: Int!
}

type AggregateGitHubLabel {
  count: Int!
}

type AggregateGitHubPullRequest {
  count: Int!
}

type AggregateGitHubPullRequestReview {
  count: Int!
}

type AggregateGitHubRepository {
  count: Int!
}

type AggregateGitHubReviewRequest {
  count: Int!
}

type AggregateGitHubReviewThread {
  count: Int!
}

type AggregateGitHubTopic {
  count: Int!
}

type AggregateGitHubUser {
  count: Int!
}

type AggregateGitHubWebhookEvent {
  count: Int!
}

type AggregateRepository {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AppKey implements Node {
  id: ID!
  user: User!
  key: String!
  name: String
  repositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository!]
}

"""A connection to a list of items."""
type AppKeyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AppKeyEdge]!
  aggregate: AggregateAppKey!
}

input AppKeyCreateInput {
  id: ID
  key: String!
  name: String
  user: UserCreateOneWithoutKeysInput!
  repositories: RepositoryCreateManyWithoutAppKeyInput
}

input AppKeyCreateManyWithoutUserInput {
  create: [AppKeyCreateWithoutUserInput!]
  connect: [AppKeyWhereUniqueInput!]
}

input AppKeyCreateOneWithoutRepositoriesInput {
  create: AppKeyCreateWithoutRepositoriesInput
  connect: AppKeyWhereUniqueInput
}

input AppKeyCreateWithoutRepositoriesInput {
  id: ID
  key: String!
  name: String
  user: UserCreateOneWithoutKeysInput!
}

input AppKeyCreateWithoutUserInput {
  id: ID
  key: String!
  name: String
  repositories: RepositoryCreateManyWithoutAppKeyInput
}

"""An edge in a connection."""
type AppKeyEdge {
  """The item at the end of the edge."""
  node: AppKey!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AppKeyOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  name_ASC
  name_DESC
}

type AppKeyPreviousValues {
  id: ID!
  key: String!
  name: String
}

input AppKeyScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeyScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeyScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeyScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type AppKeySubscriptionPayload {
  mutation: MutationType!
  node: AppKey
  updatedFields: [String!]
  previousValues: AppKeyPreviousValues
}

input AppKeySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AppKeyWhereInput
}

input AppKeyUpdateInput {
  key: String
  name: String
  user: UserUpdateOneRequiredWithoutKeysInput
  repositories: RepositoryUpdateManyWithoutAppKeyInput
}

input AppKeyUpdateManyDataInput {
  key: String
  name: String
}

input AppKeyUpdateManyMutationInput {
  key: String
  name: String
}

input AppKeyUpdateManyWithoutUserInput {
  create: [AppKeyCreateWithoutUserInput!]
  connect: [AppKeyWhereUniqueInput!]
  set: [AppKeyWhereUniqueInput!]
  disconnect: [AppKeyWhereUniqueInput!]
  delete: [AppKeyWhereUniqueInput!]
  update: [AppKeyUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [AppKeyUpdateManyWithWhereNestedInput!]
  deleteMany: [AppKeyScalarWhereInput!]
  upsert: [AppKeyUpsertWithWhereUniqueWithoutUserInput!]
}

input AppKeyUpdateManyWithWhereNestedInput {
  where: AppKeyScalarWhereInput!
  data: AppKeyUpdateManyDataInput!
}

input AppKeyUpdateOneRequiredWithoutRepositoriesInput {
  create: AppKeyCreateWithoutRepositoriesInput
  connect: AppKeyWhereUniqueInput
  update: AppKeyUpdateWithoutRepositoriesDataInput
  upsert: AppKeyUpsertWithoutRepositoriesInput
}

input AppKeyUpdateWithoutRepositoriesDataInput {
  key: String
  name: String
  user: UserUpdateOneRequiredWithoutKeysInput
}

input AppKeyUpdateWithoutUserDataInput {
  key: String
  name: String
  repositories: RepositoryUpdateManyWithoutAppKeyInput
}

input AppKeyUpdateWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput!
  data: AppKeyUpdateWithoutUserDataInput!
}

input AppKeyUpsertWithoutRepositoriesInput {
  update: AppKeyUpdateWithoutRepositoriesDataInput!
  create: AppKeyCreateWithoutRepositoriesInput!
}

input AppKeyUpsertWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput!
  update: AppKeyUpdateWithoutUserDataInput!
  create: AppKeyCreateWithoutUserInput!
}

input AppKeyWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeyWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  user: UserWhereInput
  repositories_every: RepositoryWhereInput
  repositories_some: RepositoryWhereInput
  repositories_none: RepositoryWhereInput
}

input AppKeyWhereUniqueInput {
  id: ID
  key: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Game implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  repository: Repository!
  title: String!
  owner: User!
  type: String!
}

"""A connection to a list of items."""
type GameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  id: ID
  title: String!
  type: String!
  repository: RepositoryCreateOneWithoutGameInput!
  owner: UserCreateOneWithoutGamesOwnedInput!
}

input GameCreateManyWithoutOwnerInput {
  create: [GameCreateWithoutOwnerInput!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateOneWithoutRepositoryInput {
  create: GameCreateWithoutRepositoryInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutOwnerInput {
  id: ID
  title: String!
  type: String!
  repository: RepositoryCreateOneWithoutGameInput!
}

input GameCreateWithoutRepositoryInput {
  id: ID
  title: String!
  type: String!
  owner: UserCreateOneWithoutGamesOwnedInput!
}

"""An edge in a connection."""
type GameEdge {
  """The item at the end of the edge."""
  node: Game!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  type_ASC
  type_DESC
}

type GamePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  type: String!
}

input GameScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GameScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GameWhereInput
}

input GameUpdateInput {
  title: String
  type: String
  repository: RepositoryUpdateOneRequiredWithoutGameInput
  owner: UserUpdateOneRequiredWithoutGamesOwnedInput
}

input GameUpdateManyDataInput {
  title: String
  type: String
}

input GameUpdateManyMutationInput {
  title: String
  type: String
}

input GameUpdateManyWithoutOwnerInput {
  create: [GameCreateWithoutOwnerInput!]
  connect: [GameWhereUniqueInput!]
  set: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  delete: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutOwnerInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
  deleteMany: [GameScalarWhereInput!]
  upsert: [GameUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateOneWithoutRepositoryInput {
  create: GameCreateWithoutRepositoryInput
  connect: GameWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GameUpdateWithoutRepositoryDataInput
  upsert: GameUpsertWithoutRepositoryInput
}

input GameUpdateWithoutOwnerDataInput {
  title: String
  type: String
  repository: RepositoryUpdateOneRequiredWithoutGameInput
}

input GameUpdateWithoutRepositoryDataInput {
  title: String
  type: String
  owner: UserUpdateOneRequiredWithoutGamesOwnedInput
}

input GameUpdateWithWhereUniqueWithoutOwnerInput {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutOwnerDataInput!
}

input GameUpsertWithoutRepositoryInput {
  update: GameUpdateWithoutRepositoryDataInput!
  create: GameCreateWithoutRepositoryInput!
}

input GameUpsertWithWhereUniqueWithoutOwnerInput {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutOwnerDataInput!
  create: GameCreateWithoutOwnerInput!
}

input GameWhereInput {
  """Logical AND on all given filters."""
  AND: [GameWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  repository: RepositoryWhereInput
  owner: UserWhereInput
}

input GameWhereUniqueInput {
  id: ID
}

type GitHubBranch implements Node {
  id: ID!
  name: String!
  commits(where: GitHubCommitWhereInput, orderBy: GitHubCommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubCommit!]
  pullRequest: GitHubPullRequest
  merged: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubBranchConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubBranchEdge]!
  aggregate: AggregateGitHubBranch!
}

input GitHubBranchCreateInput {
  id: ID
  name: String!
  merged: Boolean
  commits: GitHubCommitCreateManyInput
  pullRequest: GitHubPullRequestCreateOneInput
}

"""An edge in a connection."""
type GitHubBranchEdge {
  """The item at the end of the edge."""
  node: GitHubBranch!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubBranchOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  merged_ASC
  merged_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubBranchPreviousValues {
  id: ID!
  name: String!
  merged: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubBranchSubscriptionPayload {
  mutation: MutationType!
  node: GitHubBranch
  updatedFields: [String!]
  previousValues: GitHubBranchPreviousValues
}

input GitHubBranchSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubBranchSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubBranchSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubBranchSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubBranchWhereInput
}

input GitHubBranchUpdateInput {
  name: String
  merged: Boolean
  commits: GitHubCommitUpdateManyInput
  pullRequest: GitHubPullRequestUpdateOneInput
}

input GitHubBranchUpdateManyMutationInput {
  name: String
  merged: Boolean
}

input GitHubBranchWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubBranchWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubBranchWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubBranchWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  merged: Boolean

  """All values that are not equal to given value."""
  merged_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  commits_every: GitHubCommitWhereInput
  commits_some: GitHubCommitWhereInput
  commits_none: GitHubCommitWhereInput
  pullRequest: GitHubPullRequestWhereInput
}

input GitHubBranchWhereUniqueInput {
  id: ID
}

type GitHubComment implements Node {
  author: GitHubUser!
  bodyText: String!
  createdAtExternal: DateTime!
  id: ID!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubCommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubCommentEdge]!
  aggregate: AggregateGitHubComment!
}

input GitHubCommentCreateInput {
  bodyText: String!
  createdAtExternal: DateTime!
  id: ID
  url: String!
  author: GitHubUserCreateOneInput!
}

input GitHubCommentCreateManyInput {
  create: [GitHubCommentCreateInput!]
  connect: [GitHubCommentWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubCommentEdge {
  """The item at the end of the edge."""
  node: GitHubComment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubCommentOrderByInput {
  bodyText_ASC
  bodyText_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubCommentPreviousValues {
  bodyText: String!
  createdAtExternal: DateTime!
  id: ID!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubCommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommentScalarWhereInput!]
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubCommentSubscriptionPayload {
  mutation: MutationType!
  node: GitHubComment
  updatedFields: [String!]
  previousValues: GitHubCommentPreviousValues
}

input GitHubCommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubCommentWhereInput
}

input GitHubCommentUpdateDataInput {
  bodyText: String
  createdAtExternal: DateTime
  url: String
  author: GitHubUserUpdateOneRequiredInput
}

input GitHubCommentUpdateInput {
  bodyText: String
  createdAtExternal: DateTime
  url: String
  author: GitHubUserUpdateOneRequiredInput
}

input GitHubCommentUpdateManyDataInput {
  bodyText: String
  createdAtExternal: DateTime
  url: String
}

input GitHubCommentUpdateManyInput {
  create: [GitHubCommentCreateInput!]
  connect: [GitHubCommentWhereUniqueInput!]
  set: [GitHubCommentWhereUniqueInput!]
  disconnect: [GitHubCommentWhereUniqueInput!]
  delete: [GitHubCommentWhereUniqueInput!]
  update: [GitHubCommentUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubCommentScalarWhereInput!]
  upsert: [GitHubCommentUpsertWithWhereUniqueNestedInput!]
}

input GitHubCommentUpdateManyMutationInput {
  bodyText: String
  createdAtExternal: DateTime
  url: String
}

input GitHubCommentUpdateManyWithWhereNestedInput {
  where: GitHubCommentScalarWhereInput!
  data: GitHubCommentUpdateManyDataInput!
}

input GitHubCommentUpdateWithWhereUniqueNestedInput {
  where: GitHubCommentWhereUniqueInput!
  data: GitHubCommentUpdateDataInput!
}

input GitHubCommentUpsertWithWhereUniqueNestedInput {
  where: GitHubCommentWhereUniqueInput!
  update: GitHubCommentUpdateDataInput!
  create: GitHubCommentCreateInput!
}

input GitHubCommentWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommentWhereInput!]
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: GitHubUserWhereInput
}

input GitHubCommentWhereUniqueInput {
  id: ID
}

type GitHubCommit implements Node {
  additions: Int!
  associatedPullRequests(where: GitHubPullRequestWhereInput, orderBy: GitHubPullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequest!]
  author: GitHubUser!
  authedDate: DateTime!
  changedFiles: Int!
  commitUrl: String!
  committer: GitHubUser!
  deletions: Int!
  id: ID!
  message: String!
  messageHeadline: String!
  pushedDate: DateTime!
  treeUrl: String!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubCommitConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubCommitEdge]!
  aggregate: AggregateGitHubCommit!
}

input GitHubCommitCreateInput {
  additions: Int!
  authedDate: DateTime!
  changedFiles: Int!
  commitUrl: String!
  deletions: Int!
  id: ID
  message: String!
  messageHeadline: String!
  pushedDate: DateTime!
  treeUrl: String!
  url: String!
  associatedPullRequests: GitHubPullRequestCreateManyInput
  author: GitHubUserCreateOneInput!
  committer: GitHubUserCreateOneInput!
}

input GitHubCommitCreateManyInput {
  create: [GitHubCommitCreateInput!]
  connect: [GitHubCommitWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubCommitEdge {
  """The item at the end of the edge."""
  node: GitHubCommit!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubCommitOrderByInput {
  additions_ASC
  additions_DESC
  authedDate_ASC
  authedDate_DESC
  changedFiles_ASC
  changedFiles_DESC
  commitUrl_ASC
  commitUrl_DESC
  deletions_ASC
  deletions_DESC
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  messageHeadline_ASC
  messageHeadline_DESC
  pushedDate_ASC
  pushedDate_DESC
  treeUrl_ASC
  treeUrl_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubCommitPreviousValues {
  additions: Int!
  authedDate: DateTime!
  changedFiles: Int!
  commitUrl: String!
  deletions: Int!
  id: ID!
  message: String!
  messageHeadline: String!
  pushedDate: DateTime!
  treeUrl: String!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubCommitScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommitScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommitScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommitScalarWhereInput!]
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  authedDate: DateTime

  """All values that are not equal to given value."""
  authedDate_not: DateTime

  """All values that are contained in given list."""
  authedDate_in: [DateTime!]

  """All values that are not contained in given list."""
  authedDate_not_in: [DateTime!]

  """All values less than the given value."""
  authedDate_lt: DateTime

  """All values less than or equal the given value."""
  authedDate_lte: DateTime

  """All values greater than the given value."""
  authedDate_gt: DateTime

  """All values greater than or equal the given value."""
  authedDate_gte: DateTime
  changedFiles: Int

  """All values that are not equal to given value."""
  changedFiles_not: Int

  """All values that are contained in given list."""
  changedFiles_in: [Int!]

  """All values that are not contained in given list."""
  changedFiles_not_in: [Int!]

  """All values less than the given value."""
  changedFiles_lt: Int

  """All values less than or equal the given value."""
  changedFiles_lte: Int

  """All values greater than the given value."""
  changedFiles_gt: Int

  """All values greater than or equal the given value."""
  changedFiles_gte: Int
  commitUrl: String

  """All values that are not equal to given value."""
  commitUrl_not: String

  """All values that are contained in given list."""
  commitUrl_in: [String!]

  """All values that are not contained in given list."""
  commitUrl_not_in: [String!]

  """All values less than the given value."""
  commitUrl_lt: String

  """All values less than or equal the given value."""
  commitUrl_lte: String

  """All values greater than the given value."""
  commitUrl_gt: String

  """All values greater than or equal the given value."""
  commitUrl_gte: String

  """All values containing the given string."""
  commitUrl_contains: String

  """All values not containing the given string."""
  commitUrl_not_contains: String

  """All values starting with the given string."""
  commitUrl_starts_with: String

  """All values not starting with the given string."""
  commitUrl_not_starts_with: String

  """All values ending with the given string."""
  commitUrl_ends_with: String

  """All values not ending with the given string."""
  commitUrl_not_ends_with: String
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  messageHeadline: String

  """All values that are not equal to given value."""
  messageHeadline_not: String

  """All values that are contained in given list."""
  messageHeadline_in: [String!]

  """All values that are not contained in given list."""
  messageHeadline_not_in: [String!]

  """All values less than the given value."""
  messageHeadline_lt: String

  """All values less than or equal the given value."""
  messageHeadline_lte: String

  """All values greater than the given value."""
  messageHeadline_gt: String

  """All values greater than or equal the given value."""
  messageHeadline_gte: String

  """All values containing the given string."""
  messageHeadline_contains: String

  """All values not containing the given string."""
  messageHeadline_not_contains: String

  """All values starting with the given string."""
  messageHeadline_starts_with: String

  """All values not starting with the given string."""
  messageHeadline_not_starts_with: String

  """All values ending with the given string."""
  messageHeadline_ends_with: String

  """All values not ending with the given string."""
  messageHeadline_not_ends_with: String
  pushedDate: DateTime

  """All values that are not equal to given value."""
  pushedDate_not: DateTime

  """All values that are contained in given list."""
  pushedDate_in: [DateTime!]

  """All values that are not contained in given list."""
  pushedDate_not_in: [DateTime!]

  """All values less than the given value."""
  pushedDate_lt: DateTime

  """All values less than or equal the given value."""
  pushedDate_lte: DateTime

  """All values greater than the given value."""
  pushedDate_gt: DateTime

  """All values greater than or equal the given value."""
  pushedDate_gte: DateTime
  treeUrl: String

  """All values that are not equal to given value."""
  treeUrl_not: String

  """All values that are contained in given list."""
  treeUrl_in: [String!]

  """All values that are not contained in given list."""
  treeUrl_not_in: [String!]

  """All values less than the given value."""
  treeUrl_lt: String

  """All values less than or equal the given value."""
  treeUrl_lte: String

  """All values greater than the given value."""
  treeUrl_gt: String

  """All values greater than or equal the given value."""
  treeUrl_gte: String

  """All values containing the given string."""
  treeUrl_contains: String

  """All values not containing the given string."""
  treeUrl_not_contains: String

  """All values starting with the given string."""
  treeUrl_starts_with: String

  """All values not starting with the given string."""
  treeUrl_not_starts_with: String

  """All values ending with the given string."""
  treeUrl_ends_with: String

  """All values not ending with the given string."""
  treeUrl_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubCommitSubscriptionPayload {
  mutation: MutationType!
  node: GitHubCommit
  updatedFields: [String!]
  previousValues: GitHubCommitPreviousValues
}

input GitHubCommitSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommitSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommitSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommitSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubCommitWhereInput
}

input GitHubCommitUpdateDataInput {
  additions: Int
  authedDate: DateTime
  changedFiles: Int
  commitUrl: String
  deletions: Int
  message: String
  messageHeadline: String
  pushedDate: DateTime
  treeUrl: String
  url: String
  associatedPullRequests: GitHubPullRequestUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  committer: GitHubUserUpdateOneRequiredInput
}

input GitHubCommitUpdateInput {
  additions: Int
  authedDate: DateTime
  changedFiles: Int
  commitUrl: String
  deletions: Int
  message: String
  messageHeadline: String
  pushedDate: DateTime
  treeUrl: String
  url: String
  associatedPullRequests: GitHubPullRequestUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  committer: GitHubUserUpdateOneRequiredInput
}

input GitHubCommitUpdateManyDataInput {
  additions: Int
  authedDate: DateTime
  changedFiles: Int
  commitUrl: String
  deletions: Int
  message: String
  messageHeadline: String
  pushedDate: DateTime
  treeUrl: String
  url: String
}

input GitHubCommitUpdateManyInput {
  create: [GitHubCommitCreateInput!]
  connect: [GitHubCommitWhereUniqueInput!]
  set: [GitHubCommitWhereUniqueInput!]
  disconnect: [GitHubCommitWhereUniqueInput!]
  delete: [GitHubCommitWhereUniqueInput!]
  update: [GitHubCommitUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubCommitUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubCommitScalarWhereInput!]
  upsert: [GitHubCommitUpsertWithWhereUniqueNestedInput!]
}

input GitHubCommitUpdateManyMutationInput {
  additions: Int
  authedDate: DateTime
  changedFiles: Int
  commitUrl: String
  deletions: Int
  message: String
  messageHeadline: String
  pushedDate: DateTime
  treeUrl: String
  url: String
}

input GitHubCommitUpdateManyWithWhereNestedInput {
  where: GitHubCommitScalarWhereInput!
  data: GitHubCommitUpdateManyDataInput!
}

input GitHubCommitUpdateWithWhereUniqueNestedInput {
  where: GitHubCommitWhereUniqueInput!
  data: GitHubCommitUpdateDataInput!
}

input GitHubCommitUpsertWithWhereUniqueNestedInput {
  where: GitHubCommitWhereUniqueInput!
  update: GitHubCommitUpdateDataInput!
  create: GitHubCommitCreateInput!
}

input GitHubCommitWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubCommitWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubCommitWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubCommitWhereInput!]
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  authedDate: DateTime

  """All values that are not equal to given value."""
  authedDate_not: DateTime

  """All values that are contained in given list."""
  authedDate_in: [DateTime!]

  """All values that are not contained in given list."""
  authedDate_not_in: [DateTime!]

  """All values less than the given value."""
  authedDate_lt: DateTime

  """All values less than or equal the given value."""
  authedDate_lte: DateTime

  """All values greater than the given value."""
  authedDate_gt: DateTime

  """All values greater than or equal the given value."""
  authedDate_gte: DateTime
  changedFiles: Int

  """All values that are not equal to given value."""
  changedFiles_not: Int

  """All values that are contained in given list."""
  changedFiles_in: [Int!]

  """All values that are not contained in given list."""
  changedFiles_not_in: [Int!]

  """All values less than the given value."""
  changedFiles_lt: Int

  """All values less than or equal the given value."""
  changedFiles_lte: Int

  """All values greater than the given value."""
  changedFiles_gt: Int

  """All values greater than or equal the given value."""
  changedFiles_gte: Int
  commitUrl: String

  """All values that are not equal to given value."""
  commitUrl_not: String

  """All values that are contained in given list."""
  commitUrl_in: [String!]

  """All values that are not contained in given list."""
  commitUrl_not_in: [String!]

  """All values less than the given value."""
  commitUrl_lt: String

  """All values less than or equal the given value."""
  commitUrl_lte: String

  """All values greater than the given value."""
  commitUrl_gt: String

  """All values greater than or equal the given value."""
  commitUrl_gte: String

  """All values containing the given string."""
  commitUrl_contains: String

  """All values not containing the given string."""
  commitUrl_not_contains: String

  """All values starting with the given string."""
  commitUrl_starts_with: String

  """All values not starting with the given string."""
  commitUrl_not_starts_with: String

  """All values ending with the given string."""
  commitUrl_ends_with: String

  """All values not ending with the given string."""
  commitUrl_not_ends_with: String
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  messageHeadline: String

  """All values that are not equal to given value."""
  messageHeadline_not: String

  """All values that are contained in given list."""
  messageHeadline_in: [String!]

  """All values that are not contained in given list."""
  messageHeadline_not_in: [String!]

  """All values less than the given value."""
  messageHeadline_lt: String

  """All values less than or equal the given value."""
  messageHeadline_lte: String

  """All values greater than the given value."""
  messageHeadline_gt: String

  """All values greater than or equal the given value."""
  messageHeadline_gte: String

  """All values containing the given string."""
  messageHeadline_contains: String

  """All values not containing the given string."""
  messageHeadline_not_contains: String

  """All values starting with the given string."""
  messageHeadline_starts_with: String

  """All values not starting with the given string."""
  messageHeadline_not_starts_with: String

  """All values ending with the given string."""
  messageHeadline_ends_with: String

  """All values not ending with the given string."""
  messageHeadline_not_ends_with: String
  pushedDate: DateTime

  """All values that are not equal to given value."""
  pushedDate_not: DateTime

  """All values that are contained in given list."""
  pushedDate_in: [DateTime!]

  """All values that are not contained in given list."""
  pushedDate_not_in: [DateTime!]

  """All values less than the given value."""
  pushedDate_lt: DateTime

  """All values less than or equal the given value."""
  pushedDate_lte: DateTime

  """All values greater than the given value."""
  pushedDate_gt: DateTime

  """All values greater than or equal the given value."""
  pushedDate_gte: DateTime
  treeUrl: String

  """All values that are not equal to given value."""
  treeUrl_not: String

  """All values that are contained in given list."""
  treeUrl_in: [String!]

  """All values that are not contained in given list."""
  treeUrl_not_in: [String!]

  """All values less than the given value."""
  treeUrl_lt: String

  """All values less than or equal the given value."""
  treeUrl_lte: String

  """All values greater than the given value."""
  treeUrl_gt: String

  """All values greater than or equal the given value."""
  treeUrl_gte: String

  """All values containing the given string."""
  treeUrl_contains: String

  """All values not containing the given string."""
  treeUrl_not_contains: String

  """All values starting with the given string."""
  treeUrl_starts_with: String

  """All values not starting with the given string."""
  treeUrl_not_starts_with: String

  """All values ending with the given string."""
  treeUrl_ends_with: String

  """All values not ending with the given string."""
  treeUrl_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  associatedPullRequests_every: GitHubPullRequestWhereInput
  associatedPullRequests_some: GitHubPullRequestWhereInput
  associatedPullRequests_none: GitHubPullRequestWhereInput
  author: GitHubUserWhereInput
  committer: GitHubUserWhereInput
}

input GitHubCommitWhereUniqueInput {
  id: ID
}

type GitHubFileDiff implements Node {
  id: ID!
  additions: Int!
  deletions: Int!
  filepath: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubFileDiffConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubFileDiffEdge]!
  aggregate: AggregateGitHubFileDiff!
}

input GitHubFileDiffCreateInput {
  id: ID
  additions: Int!
  deletions: Int!
  filepath: String!
}

input GitHubFileDiffCreateManyInput {
  create: [GitHubFileDiffCreateInput!]
  connect: [GitHubFileDiffWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubFileDiffEdge {
  """The item at the end of the edge."""
  node: GitHubFileDiff!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubFileDiffOrderByInput {
  id_ASC
  id_DESC
  additions_ASC
  additions_DESC
  deletions_ASC
  deletions_DESC
  filepath_ASC
  filepath_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubFileDiffPreviousValues {
  id: ID!
  additions: Int!
  deletions: Int!
  filepath: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubFileDiffScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubFileDiffScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubFileDiffScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubFileDiffScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  filepath: String

  """All values that are not equal to given value."""
  filepath_not: String

  """All values that are contained in given list."""
  filepath_in: [String!]

  """All values that are not contained in given list."""
  filepath_not_in: [String!]

  """All values less than the given value."""
  filepath_lt: String

  """All values less than or equal the given value."""
  filepath_lte: String

  """All values greater than the given value."""
  filepath_gt: String

  """All values greater than or equal the given value."""
  filepath_gte: String

  """All values containing the given string."""
  filepath_contains: String

  """All values not containing the given string."""
  filepath_not_contains: String

  """All values starting with the given string."""
  filepath_starts_with: String

  """All values not starting with the given string."""
  filepath_not_starts_with: String

  """All values ending with the given string."""
  filepath_ends_with: String

  """All values not ending with the given string."""
  filepath_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubFileDiffSubscriptionPayload {
  mutation: MutationType!
  node: GitHubFileDiff
  updatedFields: [String!]
  previousValues: GitHubFileDiffPreviousValues
}

input GitHubFileDiffSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubFileDiffSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubFileDiffSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubFileDiffSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubFileDiffWhereInput
}

input GitHubFileDiffUpdateDataInput {
  additions: Int
  deletions: Int
  filepath: String
}

input GitHubFileDiffUpdateInput {
  additions: Int
  deletions: Int
  filepath: String
}

input GitHubFileDiffUpdateManyDataInput {
  additions: Int
  deletions: Int
  filepath: String
}

input GitHubFileDiffUpdateManyInput {
  create: [GitHubFileDiffCreateInput!]
  connect: [GitHubFileDiffWhereUniqueInput!]
  set: [GitHubFileDiffWhereUniqueInput!]
  disconnect: [GitHubFileDiffWhereUniqueInput!]
  delete: [GitHubFileDiffWhereUniqueInput!]
  update: [GitHubFileDiffUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubFileDiffUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubFileDiffScalarWhereInput!]
  upsert: [GitHubFileDiffUpsertWithWhereUniqueNestedInput!]
}

input GitHubFileDiffUpdateManyMutationInput {
  additions: Int
  deletions: Int
  filepath: String
}

input GitHubFileDiffUpdateManyWithWhereNestedInput {
  where: GitHubFileDiffScalarWhereInput!
  data: GitHubFileDiffUpdateManyDataInput!
}

input GitHubFileDiffUpdateWithWhereUniqueNestedInput {
  where: GitHubFileDiffWhereUniqueInput!
  data: GitHubFileDiffUpdateDataInput!
}

input GitHubFileDiffUpsertWithWhereUniqueNestedInput {
  where: GitHubFileDiffWhereUniqueInput!
  update: GitHubFileDiffUpdateDataInput!
  create: GitHubFileDiffCreateInput!
}

input GitHubFileDiffWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubFileDiffWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubFileDiffWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubFileDiffWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  filepath: String

  """All values that are not equal to given value."""
  filepath_not: String

  """All values that are contained in given list."""
  filepath_in: [String!]

  """All values that are not contained in given list."""
  filepath_not_in: [String!]

  """All values less than the given value."""
  filepath_lt: String

  """All values less than or equal the given value."""
  filepath_lte: String

  """All values greater than the given value."""
  filepath_gt: String

  """All values greater than or equal the given value."""
  filepath_gte: String

  """All values containing the given string."""
  filepath_contains: String

  """All values not containing the given string."""
  filepath_not_contains: String

  """All values starting with the given string."""
  filepath_starts_with: String

  """All values not starting with the given string."""
  filepath_not_starts_with: String

  """All values ending with the given string."""
  filepath_ends_with: String

  """All values not ending with the given string."""
  filepath_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input GitHubFileDiffWhereUniqueInput {
  id: ID
}

type GitHubIssue implements Node {
  id: ID!
  assignees(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  author: GitHubUser!
  bodyText: String!
  closed: DateTime
  comments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment!]
  createdAtExternal: DateTime!
  labels(where: GitHubLabelWhereInput, orderBy: GitHubLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubLabel!]
  lastEditedAt: DateTime!
  locked: Boolean!
  number: Int!
  participants(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  state: String!
  title: String!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubIssueConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubIssueEdge]!
  aggregate: AggregateGitHubIssue!
}

input GitHubIssueCreateInput {
  id: ID
  bodyText: String!
  closed: DateTime
  createdAtExternal: DateTime!
  lastEditedAt: DateTime!
  locked: Boolean!
  number: Int!
  state: String!
  title: String!
  updatedAtExternal: DateTime!
  url: String!
  assignees: GitHubUserCreateManyInput
  author: GitHubUserCreateOneInput!
  comments: GitHubCommentCreateManyInput
  labels: GitHubLabelCreateManyInput
  participants: GitHubUserCreateManyInput
}

input GitHubIssueCreateManyInput {
  create: [GitHubIssueCreateInput!]
  connect: [GitHubIssueWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubIssueEdge {
  """The item at the end of the edge."""
  node: GitHubIssue!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubIssueOrderByInput {
  id_ASC
  id_DESC
  bodyText_ASC
  bodyText_DESC
  closed_ASC
  closed_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  lastEditedAt_ASC
  lastEditedAt_DESC
  locked_ASC
  locked_DESC
  number_ASC
  number_DESC
  state_ASC
  state_DESC
  title_ASC
  title_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubIssuePreviousValues {
  id: ID!
  bodyText: String!
  closed: DateTime
  createdAtExternal: DateTime!
  lastEditedAt: DateTime!
  locked: Boolean!
  number: Int!
  state: String!
  title: String!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubIssueScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubIssueScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubIssueScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubIssueScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  closed: DateTime

  """All values that are not equal to given value."""
  closed_not: DateTime

  """All values that are contained in given list."""
  closed_in: [DateTime!]

  """All values that are not contained in given list."""
  closed_not_in: [DateTime!]

  """All values less than the given value."""
  closed_lt: DateTime

  """All values less than or equal the given value."""
  closed_lte: DateTime

  """All values greater than the given value."""
  closed_gt: DateTime

  """All values greater than or equal the given value."""
  closed_gte: DateTime
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  lastEditedAt: DateTime

  """All values that are not equal to given value."""
  lastEditedAt_not: DateTime

  """All values that are contained in given list."""
  lastEditedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  lastEditedAt_not_in: [DateTime!]

  """All values less than the given value."""
  lastEditedAt_lt: DateTime

  """All values less than or equal the given value."""
  lastEditedAt_lte: DateTime

  """All values greater than the given value."""
  lastEditedAt_gt: DateTime

  """All values greater than or equal the given value."""
  lastEditedAt_gte: DateTime
  locked: Boolean

  """All values that are not equal to given value."""
  locked_not: Boolean
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubIssueSubscriptionPayload {
  mutation: MutationType!
  node: GitHubIssue
  updatedFields: [String!]
  previousValues: GitHubIssuePreviousValues
}

input GitHubIssueSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubIssueSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubIssueSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubIssueSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubIssueWhereInput
}

input GitHubIssueUpdateDataInput {
  bodyText: String
  closed: DateTime
  createdAtExternal: DateTime
  lastEditedAt: DateTime
  locked: Boolean
  number: Int
  state: String
  title: String
  updatedAtExternal: DateTime
  url: String
  assignees: GitHubUserUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  labels: GitHubLabelUpdateManyInput
  participants: GitHubUserUpdateManyInput
}

input GitHubIssueUpdateInput {
  bodyText: String
  closed: DateTime
  createdAtExternal: DateTime
  lastEditedAt: DateTime
  locked: Boolean
  number: Int
  state: String
  title: String
  updatedAtExternal: DateTime
  url: String
  assignees: GitHubUserUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  labels: GitHubLabelUpdateManyInput
  participants: GitHubUserUpdateManyInput
}

input GitHubIssueUpdateManyDataInput {
  bodyText: String
  closed: DateTime
  createdAtExternal: DateTime
  lastEditedAt: DateTime
  locked: Boolean
  number: Int
  state: String
  title: String
  updatedAtExternal: DateTime
  url: String
}

input GitHubIssueUpdateManyInput {
  create: [GitHubIssueCreateInput!]
  connect: [GitHubIssueWhereUniqueInput!]
  set: [GitHubIssueWhereUniqueInput!]
  disconnect: [GitHubIssueWhereUniqueInput!]
  delete: [GitHubIssueWhereUniqueInput!]
  update: [GitHubIssueUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubIssueUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubIssueScalarWhereInput!]
  upsert: [GitHubIssueUpsertWithWhereUniqueNestedInput!]
}

input GitHubIssueUpdateManyMutationInput {
  bodyText: String
  closed: DateTime
  createdAtExternal: DateTime
  lastEditedAt: DateTime
  locked: Boolean
  number: Int
  state: String
  title: String
  updatedAtExternal: DateTime
  url: String
}

input GitHubIssueUpdateManyWithWhereNestedInput {
  where: GitHubIssueScalarWhereInput!
  data: GitHubIssueUpdateManyDataInput!
}

input GitHubIssueUpdateWithWhereUniqueNestedInput {
  where: GitHubIssueWhereUniqueInput!
  data: GitHubIssueUpdateDataInput!
}

input GitHubIssueUpsertWithWhereUniqueNestedInput {
  where: GitHubIssueWhereUniqueInput!
  update: GitHubIssueUpdateDataInput!
  create: GitHubIssueCreateInput!
}

input GitHubIssueWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubIssueWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubIssueWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubIssueWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  closed: DateTime

  """All values that are not equal to given value."""
  closed_not: DateTime

  """All values that are contained in given list."""
  closed_in: [DateTime!]

  """All values that are not contained in given list."""
  closed_not_in: [DateTime!]

  """All values less than the given value."""
  closed_lt: DateTime

  """All values less than or equal the given value."""
  closed_lte: DateTime

  """All values greater than the given value."""
  closed_gt: DateTime

  """All values greater than or equal the given value."""
  closed_gte: DateTime
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  lastEditedAt: DateTime

  """All values that are not equal to given value."""
  lastEditedAt_not: DateTime

  """All values that are contained in given list."""
  lastEditedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  lastEditedAt_not_in: [DateTime!]

  """All values less than the given value."""
  lastEditedAt_lt: DateTime

  """All values less than or equal the given value."""
  lastEditedAt_lte: DateTime

  """All values greater than the given value."""
  lastEditedAt_gt: DateTime

  """All values greater than or equal the given value."""
  lastEditedAt_gte: DateTime
  locked: Boolean

  """All values that are not equal to given value."""
  locked_not: Boolean
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  assignees_every: GitHubUserWhereInput
  assignees_some: GitHubUserWhereInput
  assignees_none: GitHubUserWhereInput
  author: GitHubUserWhereInput
  comments_every: GitHubCommentWhereInput
  comments_some: GitHubCommentWhereInput
  comments_none: GitHubCommentWhereInput
  labels_every: GitHubLabelWhereInput
  labels_some: GitHubLabelWhereInput
  labels_none: GitHubLabelWhereInput
  participants_every: GitHubUserWhereInput
  participants_some: GitHubUserWhereInput
  participants_none: GitHubUserWhereInput
}

input GitHubIssueWhereUniqueInput {
  id: ID
}

type GitHubLabel implements Node {
  id: ID!
  color: String!
  createdAtExternal: DateTime!
  description: String!
  issues(where: GitHubIssueWhereInput, orderBy: GitHubIssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubIssue!]
  name: String!
  pullRequests(where: GitHubPullRequestWhereInput, orderBy: GitHubPullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequest!]
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubLabelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubLabelEdge]!
  aggregate: AggregateGitHubLabel!
}

input GitHubLabelCreateInput {
  id: ID
  color: String!
  createdAtExternal: DateTime!
  description: String!
  name: String!
  updatedAtExternal: DateTime!
  url: String!
  issues: GitHubIssueCreateManyInput
  pullRequests: GitHubPullRequestCreateManyInput
}

input GitHubLabelCreateManyInput {
  create: [GitHubLabelCreateInput!]
  connect: [GitHubLabelWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubLabelEdge {
  """The item at the end of the edge."""
  node: GitHubLabel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubLabelOrderByInput {
  id_ASC
  id_DESC
  color_ASC
  color_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  description_ASC
  description_DESC
  name_ASC
  name_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubLabelPreviousValues {
  id: ID!
  color: String!
  createdAtExternal: DateTime!
  description: String!
  name: String!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubLabelScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubLabelScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubLabelScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubLabelScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubLabelSubscriptionPayload {
  mutation: MutationType!
  node: GitHubLabel
  updatedFields: [String!]
  previousValues: GitHubLabelPreviousValues
}

input GitHubLabelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubLabelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubLabelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubLabelSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubLabelWhereInput
}

input GitHubLabelUpdateDataInput {
  color: String
  createdAtExternal: DateTime
  description: String
  name: String
  updatedAtExternal: DateTime
  url: String
  issues: GitHubIssueUpdateManyInput
  pullRequests: GitHubPullRequestUpdateManyInput
}

input GitHubLabelUpdateInput {
  color: String
  createdAtExternal: DateTime
  description: String
  name: String
  updatedAtExternal: DateTime
  url: String
  issues: GitHubIssueUpdateManyInput
  pullRequests: GitHubPullRequestUpdateManyInput
}

input GitHubLabelUpdateManyDataInput {
  color: String
  createdAtExternal: DateTime
  description: String
  name: String
  updatedAtExternal: DateTime
  url: String
}

input GitHubLabelUpdateManyInput {
  create: [GitHubLabelCreateInput!]
  connect: [GitHubLabelWhereUniqueInput!]
  set: [GitHubLabelWhereUniqueInput!]
  disconnect: [GitHubLabelWhereUniqueInput!]
  delete: [GitHubLabelWhereUniqueInput!]
  update: [GitHubLabelUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubLabelUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubLabelScalarWhereInput!]
  upsert: [GitHubLabelUpsertWithWhereUniqueNestedInput!]
}

input GitHubLabelUpdateManyMutationInput {
  color: String
  createdAtExternal: DateTime
  description: String
  name: String
  updatedAtExternal: DateTime
  url: String
}

input GitHubLabelUpdateManyWithWhereNestedInput {
  where: GitHubLabelScalarWhereInput!
  data: GitHubLabelUpdateManyDataInput!
}

input GitHubLabelUpdateWithWhereUniqueNestedInput {
  where: GitHubLabelWhereUniqueInput!
  data: GitHubLabelUpdateDataInput!
}

input GitHubLabelUpsertWithWhereUniqueNestedInput {
  where: GitHubLabelWhereUniqueInput!
  update: GitHubLabelUpdateDataInput!
  create: GitHubLabelCreateInput!
}

input GitHubLabelWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubLabelWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubLabelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubLabelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  issues_every: GitHubIssueWhereInput
  issues_some: GitHubIssueWhereInput
  issues_none: GitHubIssueWhereInput
  pullRequests_every: GitHubPullRequestWhereInput
  pullRequests_some: GitHubPullRequestWhereInput
  pullRequests_none: GitHubPullRequestWhereInput
}

input GitHubLabelWhereUniqueInput {
  id: ID
}

type GitHubPullRequest implements Node {
  additions: Int!
  assignees(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  author: GitHubUser!
  bodyText: String!
  changedFiles: Int!
  closed: Boolean!
  closedAt: DateTime
  comments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment!]
  commits(where: GitHubCommitWhereInput, orderBy: GitHubCommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubCommit!]
  createdAtExternal: DateTime!
  deletions: Int!
  files(where: GitHubFileDiffWhereInput, orderBy: GitHubFileDiffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubFileDiff!]
  id: ID!
  isCrossRepository: Boolean!
  labels(where: GitHubLabelWhereInput, orderBy: GitHubLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubLabel!]
  locked: Boolean!
  merged: Boolean!
  mergedAt: DateTime
  mergedBy: GitHubUser
  number: Int!
  participants(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  publishedAt: DateTime
  reviewRequests(where: GitHubReviewRequestWhereInput, orderBy: GitHubReviewRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubReviewRequest!]
  reviews(where: GitHubPullRequestReviewWhereInput, orderBy: GitHubPullRequestReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequestReview!]
  reviewThreads(where: GitHubReviewThreadWhereInput, orderBy: GitHubReviewThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubReviewThread!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubPullRequestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubPullRequestEdge]!
  aggregate: AggregateGitHubPullRequest!
}

input GitHubPullRequestCreateInput {
  additions: Int!
  bodyText: String!
  changedFiles: Int!
  closed: Boolean!
  closedAt: DateTime
  createdAtExternal: DateTime!
  deletions: Int!
  id: ID
  isCrossRepository: Boolean!
  locked: Boolean!
  merged: Boolean!
  mergedAt: DateTime
  number: Int!
  publishedAt: DateTime
  assignees: GitHubUserCreateManyInput
  author: GitHubUserCreateOneInput!
  comments: GitHubCommentCreateManyInput
  commits: GitHubCommitCreateManyInput
  files: GitHubFileDiffCreateManyInput
  labels: GitHubLabelCreateManyInput
  mergedBy: GitHubUserCreateOneInput
  participants: GitHubUserCreateManyInput
  reviewRequests: GitHubReviewRequestCreateManyInput
  reviews: GitHubPullRequestReviewCreateManyInput
  reviewThreads: GitHubReviewThreadCreateManyInput
}

input GitHubPullRequestCreateManyInput {
  create: [GitHubPullRequestCreateInput!]
  connect: [GitHubPullRequestWhereUniqueInput!]
}

input GitHubPullRequestCreateOneInput {
  create: GitHubPullRequestCreateInput
  connect: GitHubPullRequestWhereUniqueInput
}

"""An edge in a connection."""
type GitHubPullRequestEdge {
  """The item at the end of the edge."""
  node: GitHubPullRequest!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubPullRequestOrderByInput {
  additions_ASC
  additions_DESC
  bodyText_ASC
  bodyText_DESC
  changedFiles_ASC
  changedFiles_DESC
  closed_ASC
  closed_DESC
  closedAt_ASC
  closedAt_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  deletions_ASC
  deletions_DESC
  id_ASC
  id_DESC
  isCrossRepository_ASC
  isCrossRepository_DESC
  locked_ASC
  locked_DESC
  merged_ASC
  merged_DESC
  mergedAt_ASC
  mergedAt_DESC
  number_ASC
  number_DESC
  publishedAt_ASC
  publishedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubPullRequestPreviousValues {
  additions: Int!
  bodyText: String!
  changedFiles: Int!
  closed: Boolean!
  closedAt: DateTime
  createdAtExternal: DateTime!
  deletions: Int!
  id: ID!
  isCrossRepository: Boolean!
  locked: Boolean!
  merged: Boolean!
  mergedAt: DateTime
  number: Int!
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubPullRequestReview implements Node {
  author: GitHubUser!
  bodyText: String!
  comments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment!]
  commit(where: GitHubCommitWhereInput, orderBy: GitHubCommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubCommit!]
  createdAtExternal: DateTime!
  id: ID!
  lastEditeddAt: DateTime!
  publishedAt: DateTime!
  pullRequest: GitHubPullRequest!
  state: String!
  submittedAt: DateTime!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubPullRequestReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubPullRequestReviewEdge]!
  aggregate: AggregateGitHubPullRequestReview!
}

input GitHubPullRequestReviewCreateInput {
  bodyText: String!
  createdAtExternal: DateTime!
  id: ID
  lastEditeddAt: DateTime!
  publishedAt: DateTime!
  state: String!
  submittedAt: DateTime!
  updatedAtExternal: DateTime!
  url: String!
  author: GitHubUserCreateOneInput!
  comments: GitHubCommentCreateManyInput
  commit: GitHubCommitCreateManyInput
  pullRequest: GitHubPullRequestCreateOneInput!
}

input GitHubPullRequestReviewCreateManyInput {
  create: [GitHubPullRequestReviewCreateInput!]
  connect: [GitHubPullRequestReviewWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubPullRequestReviewEdge {
  """The item at the end of the edge."""
  node: GitHubPullRequestReview!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubPullRequestReviewOrderByInput {
  bodyText_ASC
  bodyText_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  id_ASC
  id_DESC
  lastEditeddAt_ASC
  lastEditeddAt_DESC
  publishedAt_ASC
  publishedAt_DESC
  state_ASC
  state_DESC
  submittedAt_ASC
  submittedAt_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubPullRequestReviewPreviousValues {
  bodyText: String!
  createdAtExternal: DateTime!
  id: ID!
  lastEditeddAt: DateTime!
  publishedAt: DateTime!
  state: String!
  submittedAt: DateTime!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubPullRequestReviewScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestReviewScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestReviewScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestReviewScalarWhereInput!]
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lastEditeddAt: DateTime

  """All values that are not equal to given value."""
  lastEditeddAt_not: DateTime

  """All values that are contained in given list."""
  lastEditeddAt_in: [DateTime!]

  """All values that are not contained in given list."""
  lastEditeddAt_not_in: [DateTime!]

  """All values less than the given value."""
  lastEditeddAt_lt: DateTime

  """All values less than or equal the given value."""
  lastEditeddAt_lte: DateTime

  """All values greater than the given value."""
  lastEditeddAt_gt: DateTime

  """All values greater than or equal the given value."""
  lastEditeddAt_gte: DateTime
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  submittedAt: DateTime

  """All values that are not equal to given value."""
  submittedAt_not: DateTime

  """All values that are contained in given list."""
  submittedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  submittedAt_not_in: [DateTime!]

  """All values less than the given value."""
  submittedAt_lt: DateTime

  """All values less than or equal the given value."""
  submittedAt_lte: DateTime

  """All values greater than the given value."""
  submittedAt_gt: DateTime

  """All values greater than or equal the given value."""
  submittedAt_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubPullRequestReviewSubscriptionPayload {
  mutation: MutationType!
  node: GitHubPullRequestReview
  updatedFields: [String!]
  previousValues: GitHubPullRequestReviewPreviousValues
}

input GitHubPullRequestReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestReviewSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubPullRequestReviewWhereInput
}

input GitHubPullRequestReviewUpdateDataInput {
  bodyText: String
  createdAtExternal: DateTime
  lastEditeddAt: DateTime
  publishedAt: DateTime
  state: String
  submittedAt: DateTime
  updatedAtExternal: DateTime
  url: String
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  commit: GitHubCommitUpdateManyInput
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
}

input GitHubPullRequestReviewUpdateInput {
  bodyText: String
  createdAtExternal: DateTime
  lastEditeddAt: DateTime
  publishedAt: DateTime
  state: String
  submittedAt: DateTime
  updatedAtExternal: DateTime
  url: String
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  commit: GitHubCommitUpdateManyInput
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
}

input GitHubPullRequestReviewUpdateManyDataInput {
  bodyText: String
  createdAtExternal: DateTime
  lastEditeddAt: DateTime
  publishedAt: DateTime
  state: String
  submittedAt: DateTime
  updatedAtExternal: DateTime
  url: String
}

input GitHubPullRequestReviewUpdateManyInput {
  create: [GitHubPullRequestReviewCreateInput!]
  connect: [GitHubPullRequestReviewWhereUniqueInput!]
  set: [GitHubPullRequestReviewWhereUniqueInput!]
  disconnect: [GitHubPullRequestReviewWhereUniqueInput!]
  delete: [GitHubPullRequestReviewWhereUniqueInput!]
  update: [GitHubPullRequestReviewUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubPullRequestReviewUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubPullRequestReviewScalarWhereInput!]
  upsert: [GitHubPullRequestReviewUpsertWithWhereUniqueNestedInput!]
}

input GitHubPullRequestReviewUpdateManyMutationInput {
  bodyText: String
  createdAtExternal: DateTime
  lastEditeddAt: DateTime
  publishedAt: DateTime
  state: String
  submittedAt: DateTime
  updatedAtExternal: DateTime
  url: String
}

input GitHubPullRequestReviewUpdateManyWithWhereNestedInput {
  where: GitHubPullRequestReviewScalarWhereInput!
  data: GitHubPullRequestReviewUpdateManyDataInput!
}

input GitHubPullRequestReviewUpdateWithWhereUniqueNestedInput {
  where: GitHubPullRequestReviewWhereUniqueInput!
  data: GitHubPullRequestReviewUpdateDataInput!
}

input GitHubPullRequestReviewUpsertWithWhereUniqueNestedInput {
  where: GitHubPullRequestReviewWhereUniqueInput!
  update: GitHubPullRequestReviewUpdateDataInput!
  create: GitHubPullRequestReviewCreateInput!
}

input GitHubPullRequestReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestReviewWhereInput!]
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lastEditeddAt: DateTime

  """All values that are not equal to given value."""
  lastEditeddAt_not: DateTime

  """All values that are contained in given list."""
  lastEditeddAt_in: [DateTime!]

  """All values that are not contained in given list."""
  lastEditeddAt_not_in: [DateTime!]

  """All values less than the given value."""
  lastEditeddAt_lt: DateTime

  """All values less than or equal the given value."""
  lastEditeddAt_lte: DateTime

  """All values greater than the given value."""
  lastEditeddAt_gt: DateTime

  """All values greater than or equal the given value."""
  lastEditeddAt_gte: DateTime
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  submittedAt: DateTime

  """All values that are not equal to given value."""
  submittedAt_not: DateTime

  """All values that are contained in given list."""
  submittedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  submittedAt_not_in: [DateTime!]

  """All values less than the given value."""
  submittedAt_lt: DateTime

  """All values less than or equal the given value."""
  submittedAt_lte: DateTime

  """All values greater than the given value."""
  submittedAt_gt: DateTime

  """All values greater than or equal the given value."""
  submittedAt_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: GitHubUserWhereInput
  comments_every: GitHubCommentWhereInput
  comments_some: GitHubCommentWhereInput
  comments_none: GitHubCommentWhereInput
  commit_every: GitHubCommitWhereInput
  commit_some: GitHubCommitWhereInput
  commit_none: GitHubCommitWhereInput
  pullRequest: GitHubPullRequestWhereInput
}

input GitHubPullRequestReviewWhereUniqueInput {
  id: ID
}

input GitHubPullRequestScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestScalarWhereInput!]
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  changedFiles: Int

  """All values that are not equal to given value."""
  changedFiles_not: Int

  """All values that are contained in given list."""
  changedFiles_in: [Int!]

  """All values that are not contained in given list."""
  changedFiles_not_in: [Int!]

  """All values less than the given value."""
  changedFiles_lt: Int

  """All values less than or equal the given value."""
  changedFiles_lte: Int

  """All values greater than the given value."""
  changedFiles_gt: Int

  """All values greater than or equal the given value."""
  changedFiles_gte: Int
  closed: Boolean

  """All values that are not equal to given value."""
  closed_not: Boolean
  closedAt: DateTime

  """All values that are not equal to given value."""
  closedAt_not: DateTime

  """All values that are contained in given list."""
  closedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  closedAt_not_in: [DateTime!]

  """All values less than the given value."""
  closedAt_lt: DateTime

  """All values less than or equal the given value."""
  closedAt_lte: DateTime

  """All values greater than the given value."""
  closedAt_gt: DateTime

  """All values greater than or equal the given value."""
  closedAt_gte: DateTime
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isCrossRepository: Boolean

  """All values that are not equal to given value."""
  isCrossRepository_not: Boolean
  locked: Boolean

  """All values that are not equal to given value."""
  locked_not: Boolean
  merged: Boolean

  """All values that are not equal to given value."""
  merged_not: Boolean
  mergedAt: DateTime

  """All values that are not equal to given value."""
  mergedAt_not: DateTime

  """All values that are contained in given list."""
  mergedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  mergedAt_not_in: [DateTime!]

  """All values less than the given value."""
  mergedAt_lt: DateTime

  """All values less than or equal the given value."""
  mergedAt_lte: DateTime

  """All values greater than the given value."""
  mergedAt_gt: DateTime

  """All values greater than or equal the given value."""
  mergedAt_gte: DateTime
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubPullRequestSubscriptionPayload {
  mutation: MutationType!
  node: GitHubPullRequest
  updatedFields: [String!]
  previousValues: GitHubPullRequestPreviousValues
}

input GitHubPullRequestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubPullRequestWhereInput
}

input GitHubPullRequestUpdateDataInput {
  additions: Int
  bodyText: String
  changedFiles: Int
  closed: Boolean
  closedAt: DateTime
  createdAtExternal: DateTime
  deletions: Int
  isCrossRepository: Boolean
  locked: Boolean
  merged: Boolean
  mergedAt: DateTime
  number: Int
  publishedAt: DateTime
  assignees: GitHubUserUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  commits: GitHubCommitUpdateManyInput
  files: GitHubFileDiffUpdateManyInput
  labels: GitHubLabelUpdateManyInput
  mergedBy: GitHubUserUpdateOneInput
  participants: GitHubUserUpdateManyInput
  reviewRequests: GitHubReviewRequestUpdateManyInput
  reviews: GitHubPullRequestReviewUpdateManyInput
  reviewThreads: GitHubReviewThreadUpdateManyInput
}

input GitHubPullRequestUpdateInput {
  additions: Int
  bodyText: String
  changedFiles: Int
  closed: Boolean
  closedAt: DateTime
  createdAtExternal: DateTime
  deletions: Int
  isCrossRepository: Boolean
  locked: Boolean
  merged: Boolean
  mergedAt: DateTime
  number: Int
  publishedAt: DateTime
  assignees: GitHubUserUpdateManyInput
  author: GitHubUserUpdateOneRequiredInput
  comments: GitHubCommentUpdateManyInput
  commits: GitHubCommitUpdateManyInput
  files: GitHubFileDiffUpdateManyInput
  labels: GitHubLabelUpdateManyInput
  mergedBy: GitHubUserUpdateOneInput
  participants: GitHubUserUpdateManyInput
  reviewRequests: GitHubReviewRequestUpdateManyInput
  reviews: GitHubPullRequestReviewUpdateManyInput
  reviewThreads: GitHubReviewThreadUpdateManyInput
}

input GitHubPullRequestUpdateManyDataInput {
  additions: Int
  bodyText: String
  changedFiles: Int
  closed: Boolean
  closedAt: DateTime
  createdAtExternal: DateTime
  deletions: Int
  isCrossRepository: Boolean
  locked: Boolean
  merged: Boolean
  mergedAt: DateTime
  number: Int
  publishedAt: DateTime
}

input GitHubPullRequestUpdateManyInput {
  create: [GitHubPullRequestCreateInput!]
  connect: [GitHubPullRequestWhereUniqueInput!]
  set: [GitHubPullRequestWhereUniqueInput!]
  disconnect: [GitHubPullRequestWhereUniqueInput!]
  delete: [GitHubPullRequestWhereUniqueInput!]
  update: [GitHubPullRequestUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubPullRequestUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubPullRequestScalarWhereInput!]
  upsert: [GitHubPullRequestUpsertWithWhereUniqueNestedInput!]
}

input GitHubPullRequestUpdateManyMutationInput {
  additions: Int
  bodyText: String
  changedFiles: Int
  closed: Boolean
  closedAt: DateTime
  createdAtExternal: DateTime
  deletions: Int
  isCrossRepository: Boolean
  locked: Boolean
  merged: Boolean
  mergedAt: DateTime
  number: Int
  publishedAt: DateTime
}

input GitHubPullRequestUpdateManyWithWhereNestedInput {
  where: GitHubPullRequestScalarWhereInput!
  data: GitHubPullRequestUpdateManyDataInput!
}

input GitHubPullRequestUpdateOneInput {
  create: GitHubPullRequestCreateInput
  connect: GitHubPullRequestWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GitHubPullRequestUpdateDataInput
  upsert: GitHubPullRequestUpsertNestedInput
}

input GitHubPullRequestUpdateOneRequiredInput {
  create: GitHubPullRequestCreateInput
  connect: GitHubPullRequestWhereUniqueInput
  update: GitHubPullRequestUpdateDataInput
  upsert: GitHubPullRequestUpsertNestedInput
}

input GitHubPullRequestUpdateWithWhereUniqueNestedInput {
  where: GitHubPullRequestWhereUniqueInput!
  data: GitHubPullRequestUpdateDataInput!
}

input GitHubPullRequestUpsertNestedInput {
  update: GitHubPullRequestUpdateDataInput!
  create: GitHubPullRequestCreateInput!
}

input GitHubPullRequestUpsertWithWhereUniqueNestedInput {
  where: GitHubPullRequestWhereUniqueInput!
  update: GitHubPullRequestUpdateDataInput!
  create: GitHubPullRequestCreateInput!
}

input GitHubPullRequestWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubPullRequestWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubPullRequestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubPullRequestWhereInput!]
  additions: Int

  """All values that are not equal to given value."""
  additions_not: Int

  """All values that are contained in given list."""
  additions_in: [Int!]

  """All values that are not contained in given list."""
  additions_not_in: [Int!]

  """All values less than the given value."""
  additions_lt: Int

  """All values less than or equal the given value."""
  additions_lte: Int

  """All values greater than the given value."""
  additions_gt: Int

  """All values greater than or equal the given value."""
  additions_gte: Int
  bodyText: String

  """All values that are not equal to given value."""
  bodyText_not: String

  """All values that are contained in given list."""
  bodyText_in: [String!]

  """All values that are not contained in given list."""
  bodyText_not_in: [String!]

  """All values less than the given value."""
  bodyText_lt: String

  """All values less than or equal the given value."""
  bodyText_lte: String

  """All values greater than the given value."""
  bodyText_gt: String

  """All values greater than or equal the given value."""
  bodyText_gte: String

  """All values containing the given string."""
  bodyText_contains: String

  """All values not containing the given string."""
  bodyText_not_contains: String

  """All values starting with the given string."""
  bodyText_starts_with: String

  """All values not starting with the given string."""
  bodyText_not_starts_with: String

  """All values ending with the given string."""
  bodyText_ends_with: String

  """All values not ending with the given string."""
  bodyText_not_ends_with: String
  changedFiles: Int

  """All values that are not equal to given value."""
  changedFiles_not: Int

  """All values that are contained in given list."""
  changedFiles_in: [Int!]

  """All values that are not contained in given list."""
  changedFiles_not_in: [Int!]

  """All values less than the given value."""
  changedFiles_lt: Int

  """All values less than or equal the given value."""
  changedFiles_lte: Int

  """All values greater than the given value."""
  changedFiles_gt: Int

  """All values greater than or equal the given value."""
  changedFiles_gte: Int
  closed: Boolean

  """All values that are not equal to given value."""
  closed_not: Boolean
  closedAt: DateTime

  """All values that are not equal to given value."""
  closedAt_not: DateTime

  """All values that are contained in given list."""
  closedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  closedAt_not_in: [DateTime!]

  """All values less than the given value."""
  closedAt_lt: DateTime

  """All values less than or equal the given value."""
  closedAt_lte: DateTime

  """All values greater than the given value."""
  closedAt_gt: DateTime

  """All values greater than or equal the given value."""
  closedAt_gte: DateTime
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  deletions: Int

  """All values that are not equal to given value."""
  deletions_not: Int

  """All values that are contained in given list."""
  deletions_in: [Int!]

  """All values that are not contained in given list."""
  deletions_not_in: [Int!]

  """All values less than the given value."""
  deletions_lt: Int

  """All values less than or equal the given value."""
  deletions_lte: Int

  """All values greater than the given value."""
  deletions_gt: Int

  """All values greater than or equal the given value."""
  deletions_gte: Int
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isCrossRepository: Boolean

  """All values that are not equal to given value."""
  isCrossRepository_not: Boolean
  locked: Boolean

  """All values that are not equal to given value."""
  locked_not: Boolean
  merged: Boolean

  """All values that are not equal to given value."""
  merged_not: Boolean
  mergedAt: DateTime

  """All values that are not equal to given value."""
  mergedAt_not: DateTime

  """All values that are contained in given list."""
  mergedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  mergedAt_not_in: [DateTime!]

  """All values less than the given value."""
  mergedAt_lt: DateTime

  """All values less than or equal the given value."""
  mergedAt_lte: DateTime

  """All values greater than the given value."""
  mergedAt_gt: DateTime

  """All values greater than or equal the given value."""
  mergedAt_gte: DateTime
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  assignees_every: GitHubUserWhereInput
  assignees_some: GitHubUserWhereInput
  assignees_none: GitHubUserWhereInput
  author: GitHubUserWhereInput
  comments_every: GitHubCommentWhereInput
  comments_some: GitHubCommentWhereInput
  comments_none: GitHubCommentWhereInput
  commits_every: GitHubCommitWhereInput
  commits_some: GitHubCommitWhereInput
  commits_none: GitHubCommitWhereInput
  files_every: GitHubFileDiffWhereInput
  files_some: GitHubFileDiffWhereInput
  files_none: GitHubFileDiffWhereInput
  labels_every: GitHubLabelWhereInput
  labels_some: GitHubLabelWhereInput
  labels_none: GitHubLabelWhereInput
  mergedBy: GitHubUserWhereInput
  participants_every: GitHubUserWhereInput
  participants_some: GitHubUserWhereInput
  participants_none: GitHubUserWhereInput
  reviewRequests_every: GitHubReviewRequestWhereInput
  reviewRequests_some: GitHubReviewRequestWhereInput
  reviewRequests_none: GitHubReviewRequestWhereInput
  reviews_every: GitHubPullRequestReviewWhereInput
  reviews_some: GitHubPullRequestReviewWhereInput
  reviews_none: GitHubPullRequestReviewWhereInput
  reviewThreads_every: GitHubReviewThreadWhereInput
  reviewThreads_some: GitHubReviewThreadWhereInput
  reviewThreads_none: GitHubReviewThreadWhereInput
}

input GitHubPullRequestWhereUniqueInput {
  id: ID
}

type GitHubRepository implements Node {
  collaborators(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  description: String!
  hasBranchRules: Boolean!
  hasContributingGuidelines: Boolean!
  hasPullRequestTemplate: Boolean!
  hasReadMe: Boolean!
  hasWiki: Boolean!
  id: ID!
  isArchived: Boolean!
  isDisabled: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  license: String
  name: String!
  owner: GitHubUser!
  primaryLanguage: String
  repositoryTopics(where: GitHubTopicWhereInput, orderBy: GitHubTopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubTopic!]
  sshUrl: String!
  stargazers(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  updatedAtExternal: DateTime!
  url: String!
  watchers(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubRepositoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubRepositoryEdge]!
  aggregate: AggregateGitHubRepository!
}

input GitHubRepositoryCreateInput {
  description: String!
  hasBranchRules: Boolean!
  hasContributingGuidelines: Boolean!
  hasPullRequestTemplate: Boolean!
  hasReadMe: Boolean!
  hasWiki: Boolean!
  id: ID
  isArchived: Boolean!
  isDisabled: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  license: String
  name: String!
  primaryLanguage: String
  sshUrl: String!
  updatedAtExternal: DateTime!
  url: String!
  collaborators: GitHubUserCreateManyInput
  owner: GitHubUserCreateOneInput!
  repositoryTopics: GitHubTopicCreateManyInput
  stargazers: GitHubUserCreateManyInput
  watchers: GitHubUserCreateManyInput
}

input GitHubRepositoryCreateOneInput {
  create: GitHubRepositoryCreateInput
  connect: GitHubRepositoryWhereUniqueInput
}

"""An edge in a connection."""
type GitHubRepositoryEdge {
  """The item at the end of the edge."""
  node: GitHubRepository!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubRepositoryOrderByInput {
  description_ASC
  description_DESC
  hasBranchRules_ASC
  hasBranchRules_DESC
  hasContributingGuidelines_ASC
  hasContributingGuidelines_DESC
  hasPullRequestTemplate_ASC
  hasPullRequestTemplate_DESC
  hasReadMe_ASC
  hasReadMe_DESC
  hasWiki_ASC
  hasWiki_DESC
  id_ASC
  id_DESC
  isArchived_ASC
  isArchived_DESC
  isDisabled_ASC
  isDisabled_DESC
  isFork_ASC
  isFork_DESC
  isLocked_ASC
  isLocked_DESC
  isPrivate_ASC
  isPrivate_DESC
  license_ASC
  license_DESC
  name_ASC
  name_DESC
  primaryLanguage_ASC
  primaryLanguage_DESC
  sshUrl_ASC
  sshUrl_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubRepositoryPreviousValues {
  description: String!
  hasBranchRules: Boolean!
  hasContributingGuidelines: Boolean!
  hasPullRequestTemplate: Boolean!
  hasReadMe: Boolean!
  hasWiki: Boolean!
  id: ID!
  isArchived: Boolean!
  isDisabled: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  license: String
  name: String!
  primaryLanguage: String
  sshUrl: String!
  updatedAtExternal: DateTime!
  url: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GitHubRepositorySubscriptionPayload {
  mutation: MutationType!
  node: GitHubRepository
  updatedFields: [String!]
  previousValues: GitHubRepositoryPreviousValues
}

input GitHubRepositorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubRepositorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubRepositorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubRepositorySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubRepositoryWhereInput
}

input GitHubRepositoryUpdateDataInput {
  description: String
  hasBranchRules: Boolean
  hasContributingGuidelines: Boolean
  hasPullRequestTemplate: Boolean
  hasReadMe: Boolean
  hasWiki: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  license: String
  name: String
  primaryLanguage: String
  sshUrl: String
  updatedAtExternal: DateTime
  url: String
  collaborators: GitHubUserUpdateManyInput
  owner: GitHubUserUpdateOneRequiredInput
  repositoryTopics: GitHubTopicUpdateManyInput
  stargazers: GitHubUserUpdateManyInput
  watchers: GitHubUserUpdateManyInput
}

input GitHubRepositoryUpdateInput {
  description: String
  hasBranchRules: Boolean
  hasContributingGuidelines: Boolean
  hasPullRequestTemplate: Boolean
  hasReadMe: Boolean
  hasWiki: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  license: String
  name: String
  primaryLanguage: String
  sshUrl: String
  updatedAtExternal: DateTime
  url: String
  collaborators: GitHubUserUpdateManyInput
  owner: GitHubUserUpdateOneRequiredInput
  repositoryTopics: GitHubTopicUpdateManyInput
  stargazers: GitHubUserUpdateManyInput
  watchers: GitHubUserUpdateManyInput
}

input GitHubRepositoryUpdateManyMutationInput {
  description: String
  hasBranchRules: Boolean
  hasContributingGuidelines: Boolean
  hasPullRequestTemplate: Boolean
  hasReadMe: Boolean
  hasWiki: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  license: String
  name: String
  primaryLanguage: String
  sshUrl: String
  updatedAtExternal: DateTime
  url: String
}

input GitHubRepositoryUpdateOneRequiredInput {
  create: GitHubRepositoryCreateInput
  connect: GitHubRepositoryWhereUniqueInput
  update: GitHubRepositoryUpdateDataInput
  upsert: GitHubRepositoryUpsertNestedInput
}

input GitHubRepositoryUpsertNestedInput {
  update: GitHubRepositoryUpdateDataInput!
  create: GitHubRepositoryCreateInput!
}

input GitHubRepositoryWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubRepositoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubRepositoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubRepositoryWhereInput!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  hasBranchRules: Boolean

  """All values that are not equal to given value."""
  hasBranchRules_not: Boolean
  hasContributingGuidelines: Boolean

  """All values that are not equal to given value."""
  hasContributingGuidelines_not: Boolean
  hasPullRequestTemplate: Boolean

  """All values that are not equal to given value."""
  hasPullRequestTemplate_not: Boolean
  hasReadMe: Boolean

  """All values that are not equal to given value."""
  hasReadMe_not: Boolean
  hasWiki: Boolean

  """All values that are not equal to given value."""
  hasWiki_not: Boolean
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isArchived: Boolean

  """All values that are not equal to given value."""
  isArchived_not: Boolean
  isDisabled: Boolean

  """All values that are not equal to given value."""
  isDisabled_not: Boolean
  isFork: Boolean

  """All values that are not equal to given value."""
  isFork_not: Boolean
  isLocked: Boolean

  """All values that are not equal to given value."""
  isLocked_not: Boolean
  isPrivate: Boolean

  """All values that are not equal to given value."""
  isPrivate_not: Boolean
  license: String

  """All values that are not equal to given value."""
  license_not: String

  """All values that are contained in given list."""
  license_in: [String!]

  """All values that are not contained in given list."""
  license_not_in: [String!]

  """All values less than the given value."""
  license_lt: String

  """All values less than or equal the given value."""
  license_lte: String

  """All values greater than the given value."""
  license_gt: String

  """All values greater than or equal the given value."""
  license_gte: String

  """All values containing the given string."""
  license_contains: String

  """All values not containing the given string."""
  license_not_contains: String

  """All values starting with the given string."""
  license_starts_with: String

  """All values not starting with the given string."""
  license_not_starts_with: String

  """All values ending with the given string."""
  license_ends_with: String

  """All values not ending with the given string."""
  license_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  primaryLanguage: String

  """All values that are not equal to given value."""
  primaryLanguage_not: String

  """All values that are contained in given list."""
  primaryLanguage_in: [String!]

  """All values that are not contained in given list."""
  primaryLanguage_not_in: [String!]

  """All values less than the given value."""
  primaryLanguage_lt: String

  """All values less than or equal the given value."""
  primaryLanguage_lte: String

  """All values greater than the given value."""
  primaryLanguage_gt: String

  """All values greater than or equal the given value."""
  primaryLanguage_gte: String

  """All values containing the given string."""
  primaryLanguage_contains: String

  """All values not containing the given string."""
  primaryLanguage_not_contains: String

  """All values starting with the given string."""
  primaryLanguage_starts_with: String

  """All values not starting with the given string."""
  primaryLanguage_not_starts_with: String

  """All values ending with the given string."""
  primaryLanguage_ends_with: String

  """All values not ending with the given string."""
  primaryLanguage_not_ends_with: String
  sshUrl: String

  """All values that are not equal to given value."""
  sshUrl_not: String

  """All values that are contained in given list."""
  sshUrl_in: [String!]

  """All values that are not contained in given list."""
  sshUrl_not_in: [String!]

  """All values less than the given value."""
  sshUrl_lt: String

  """All values less than or equal the given value."""
  sshUrl_lte: String

  """All values greater than the given value."""
  sshUrl_gt: String

  """All values greater than or equal the given value."""
  sshUrl_gte: String

  """All values containing the given string."""
  sshUrl_contains: String

  """All values not containing the given string."""
  sshUrl_not_contains: String

  """All values starting with the given string."""
  sshUrl_starts_with: String

  """All values not starting with the given string."""
  sshUrl_not_starts_with: String

  """All values ending with the given string."""
  sshUrl_ends_with: String

  """All values not ending with the given string."""
  sshUrl_not_ends_with: String
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  collaborators_every: GitHubUserWhereInput
  collaborators_some: GitHubUserWhereInput
  collaborators_none: GitHubUserWhereInput
  owner: GitHubUserWhereInput
  repositoryTopics_every: GitHubTopicWhereInput
  repositoryTopics_some: GitHubTopicWhereInput
  repositoryTopics_none: GitHubTopicWhereInput
  stargazers_every: GitHubUserWhereInput
  stargazers_some: GitHubUserWhereInput
  stargazers_none: GitHubUserWhereInput
  watchers_every: GitHubUserWhereInput
  watchers_some: GitHubUserWhereInput
  watchers_none: GitHubUserWhereInput
}

input GitHubRepositoryWhereUniqueInput {
  id: ID
}

type GitHubReviewRequest implements Node {
  id: ID!
  pullRequest: GitHubPullRequest!
  requestedReviewer: GitHubUser!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubReviewRequestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubReviewRequestEdge]!
  aggregate: AggregateGitHubReviewRequest!
}

input GitHubReviewRequestCreateInput {
  id: ID
  pullRequest: GitHubPullRequestCreateOneInput!
  requestedReviewer: GitHubUserCreateOneInput!
}

input GitHubReviewRequestCreateManyInput {
  create: [GitHubReviewRequestCreateInput!]
  connect: [GitHubReviewRequestWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubReviewRequestEdge {
  """The item at the end of the edge."""
  node: GitHubReviewRequest!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubReviewRequestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubReviewRequestPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubReviewRequestScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewRequestScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewRequestScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewRequestScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubReviewRequestSubscriptionPayload {
  mutation: MutationType!
  node: GitHubReviewRequest
  updatedFields: [String!]
  previousValues: GitHubReviewRequestPreviousValues
}

input GitHubReviewRequestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewRequestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewRequestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewRequestSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubReviewRequestWhereInput
}

input GitHubReviewRequestUpdateDataInput {
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
  requestedReviewer: GitHubUserUpdateOneRequiredInput
}

input GitHubReviewRequestUpdateInput {
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
  requestedReviewer: GitHubUserUpdateOneRequiredInput
}

input GitHubReviewRequestUpdateManyInput {
  create: [GitHubReviewRequestCreateInput!]
  connect: [GitHubReviewRequestWhereUniqueInput!]
  set: [GitHubReviewRequestWhereUniqueInput!]
  disconnect: [GitHubReviewRequestWhereUniqueInput!]
  delete: [GitHubReviewRequestWhereUniqueInput!]
  update: [GitHubReviewRequestUpdateWithWhereUniqueNestedInput!]
  deleteMany: [GitHubReviewRequestScalarWhereInput!]
  upsert: [GitHubReviewRequestUpsertWithWhereUniqueNestedInput!]
}

input GitHubReviewRequestUpdateWithWhereUniqueNestedInput {
  where: GitHubReviewRequestWhereUniqueInput!
  data: GitHubReviewRequestUpdateDataInput!
}

input GitHubReviewRequestUpsertWithWhereUniqueNestedInput {
  where: GitHubReviewRequestWhereUniqueInput!
  update: GitHubReviewRequestUpdateDataInput!
  create: GitHubReviewRequestCreateInput!
}

input GitHubReviewRequestWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewRequestWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewRequestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewRequestWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  pullRequest: GitHubPullRequestWhereInput
  requestedReviewer: GitHubUserWhereInput
}

input GitHubReviewRequestWhereUniqueInput {
  id: ID
}

type GitHubReviewThread implements Node {
  comments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment!]
  id: ID!
  isResolved: Boolean!
  pullRequest: GitHubPullRequest!
  repository: GitHubRepository!
  resolvedBy: GitHubUser!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubReviewThreadConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubReviewThreadEdge]!
  aggregate: AggregateGitHubReviewThread!
}

input GitHubReviewThreadCreateInput {
  id: ID
  isResolved: Boolean!
  comments: GitHubCommentCreateManyInput
  pullRequest: GitHubPullRequestCreateOneInput!
  repository: GitHubRepositoryCreateOneInput!
  resolvedBy: GitHubUserCreateOneInput!
}

input GitHubReviewThreadCreateManyInput {
  create: [GitHubReviewThreadCreateInput!]
  connect: [GitHubReviewThreadWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubReviewThreadEdge {
  """The item at the end of the edge."""
  node: GitHubReviewThread!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubReviewThreadOrderByInput {
  id_ASC
  id_DESC
  isResolved_ASC
  isResolved_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubReviewThreadPreviousValues {
  id: ID!
  isResolved: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubReviewThreadScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewThreadScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewThreadScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewThreadScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isResolved: Boolean

  """All values that are not equal to given value."""
  isResolved_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubReviewThreadSubscriptionPayload {
  mutation: MutationType!
  node: GitHubReviewThread
  updatedFields: [String!]
  previousValues: GitHubReviewThreadPreviousValues
}

input GitHubReviewThreadSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewThreadSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewThreadSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewThreadSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubReviewThreadWhereInput
}

input GitHubReviewThreadUpdateDataInput {
  isResolved: Boolean
  comments: GitHubCommentUpdateManyInput
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
  repository: GitHubRepositoryUpdateOneRequiredInput
  resolvedBy: GitHubUserUpdateOneRequiredInput
}

input GitHubReviewThreadUpdateInput {
  isResolved: Boolean
  comments: GitHubCommentUpdateManyInput
  pullRequest: GitHubPullRequestUpdateOneRequiredInput
  repository: GitHubRepositoryUpdateOneRequiredInput
  resolvedBy: GitHubUserUpdateOneRequiredInput
}

input GitHubReviewThreadUpdateManyDataInput {
  isResolved: Boolean
}

input GitHubReviewThreadUpdateManyInput {
  create: [GitHubReviewThreadCreateInput!]
  connect: [GitHubReviewThreadWhereUniqueInput!]
  set: [GitHubReviewThreadWhereUniqueInput!]
  disconnect: [GitHubReviewThreadWhereUniqueInput!]
  delete: [GitHubReviewThreadWhereUniqueInput!]
  update: [GitHubReviewThreadUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubReviewThreadUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubReviewThreadScalarWhereInput!]
  upsert: [GitHubReviewThreadUpsertWithWhereUniqueNestedInput!]
}

input GitHubReviewThreadUpdateManyMutationInput {
  isResolved: Boolean
}

input GitHubReviewThreadUpdateManyWithWhereNestedInput {
  where: GitHubReviewThreadScalarWhereInput!
  data: GitHubReviewThreadUpdateManyDataInput!
}

input GitHubReviewThreadUpdateWithWhereUniqueNestedInput {
  where: GitHubReviewThreadWhereUniqueInput!
  data: GitHubReviewThreadUpdateDataInput!
}

input GitHubReviewThreadUpsertWithWhereUniqueNestedInput {
  where: GitHubReviewThreadWhereUniqueInput!
  update: GitHubReviewThreadUpdateDataInput!
  create: GitHubReviewThreadCreateInput!
}

input GitHubReviewThreadWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubReviewThreadWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubReviewThreadWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubReviewThreadWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isResolved: Boolean

  """All values that are not equal to given value."""
  isResolved_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  comments_every: GitHubCommentWhereInput
  comments_some: GitHubCommentWhereInput
  comments_none: GitHubCommentWhereInput
  pullRequest: GitHubPullRequestWhereInput
  repository: GitHubRepositoryWhereInput
  resolvedBy: GitHubUserWhereInput
}

input GitHubReviewThreadWhereUniqueInput {
  id: ID
}

type GitHubTopic implements Node {
  id: ID!
  name: String!
  relatedTopics(where: GitHubTopicWhereInput, orderBy: GitHubTopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubTopic!]
  stargazers(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubTopicConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubTopicEdge]!
  aggregate: AggregateGitHubTopic!
}

input GitHubTopicCreateInput {
  id: ID
  name: String!
  relatedTopics: GitHubTopicCreateManyInput
  stargazers: GitHubUserCreateManyInput
}

input GitHubTopicCreateManyInput {
  create: [GitHubTopicCreateInput!]
  connect: [GitHubTopicWhereUniqueInput!]
}

"""An edge in a connection."""
type GitHubTopicEdge {
  """The item at the end of the edge."""
  node: GitHubTopic!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubTopicOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubTopicPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubTopicScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubTopicScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubTopicScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubTopicScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubTopicSubscriptionPayload {
  mutation: MutationType!
  node: GitHubTopic
  updatedFields: [String!]
  previousValues: GitHubTopicPreviousValues
}

input GitHubTopicSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubTopicSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubTopicSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubTopicSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubTopicWhereInput
}

input GitHubTopicUpdateDataInput {
  name: String
  relatedTopics: GitHubTopicUpdateManyInput
  stargazers: GitHubUserUpdateManyInput
}

input GitHubTopicUpdateInput {
  name: String
  relatedTopics: GitHubTopicUpdateManyInput
  stargazers: GitHubUserUpdateManyInput
}

input GitHubTopicUpdateManyDataInput {
  name: String
}

input GitHubTopicUpdateManyInput {
  create: [GitHubTopicCreateInput!]
  connect: [GitHubTopicWhereUniqueInput!]
  set: [GitHubTopicWhereUniqueInput!]
  disconnect: [GitHubTopicWhereUniqueInput!]
  delete: [GitHubTopicWhereUniqueInput!]
  update: [GitHubTopicUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubTopicUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubTopicScalarWhereInput!]
  upsert: [GitHubTopicUpsertWithWhereUniqueNestedInput!]
}

input GitHubTopicUpdateManyMutationInput {
  name: String
}

input GitHubTopicUpdateManyWithWhereNestedInput {
  where: GitHubTopicScalarWhereInput!
  data: GitHubTopicUpdateManyDataInput!
}

input GitHubTopicUpdateWithWhereUniqueNestedInput {
  where: GitHubTopicWhereUniqueInput!
  data: GitHubTopicUpdateDataInput!
}

input GitHubTopicUpsertWithWhereUniqueNestedInput {
  where: GitHubTopicWhereUniqueInput!
  update: GitHubTopicUpdateDataInput!
  create: GitHubTopicCreateInput!
}

input GitHubTopicWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubTopicWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubTopicWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubTopicWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  relatedTopics_every: GitHubTopicWhereInput
  relatedTopics_some: GitHubTopicWhereInput
  relatedTopics_none: GitHubTopicWhereInput
  stargazers_every: GitHubUserWhereInput
  stargazers_some: GitHubUserWhereInput
  stargazers_none: GitHubUserWhereInput
}

input GitHubTopicWhereUniqueInput {
  id: ID
}

type GitHubUser implements Node {
  id: ID!
  url: String!
  name: String!
  login: String!
  avatarUrl: String!
  bio: String
  company: String
  createdAtExternal: DateTime!
  email: String
  followers(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  following(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser!]
  isBountyHunter: Boolean!
  isCampusExpert: Boolean!
  isDeveloperProgramMember: Boolean!
  isEmployee: Boolean!
  isHireable: Boolean!
  isSiteAdmin: Boolean!
  isViewer: Boolean!
  issueComments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment!]
  issues(where: GitHubIssueWhereInput, orderBy: GitHubIssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubIssue!]
  pullRequests(where: GitHubPullRequestWhereInput, orderBy: GitHubPullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequest!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GitHubUserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubUserEdge]!
  aggregate: AggregateGitHubUser!
}

input GitHubUserCreateInput {
  id: ID
  url: String!
  name: String!
  login: String!
  avatarUrl: String!
  bio: String
  company: String
  createdAtExternal: DateTime!
  email: String
  isBountyHunter: Boolean!
  isCampusExpert: Boolean!
  isDeveloperProgramMember: Boolean!
  isEmployee: Boolean!
  isHireable: Boolean!
  isSiteAdmin: Boolean!
  isViewer: Boolean!
  followers: GitHubUserCreateManyInput
  following: GitHubUserCreateManyInput
  issueComments: GitHubCommentCreateManyInput
  issues: GitHubIssueCreateManyInput
  pullRequests: GitHubPullRequestCreateManyInput
}

input GitHubUserCreateManyInput {
  create: [GitHubUserCreateInput!]
  connect: [GitHubUserWhereUniqueInput!]
}

input GitHubUserCreateOneInput {
  create: GitHubUserCreateInput
  connect: GitHubUserWhereUniqueInput
}

"""An edge in a connection."""
type GitHubUserEdge {
  """The item at the end of the edge."""
  node: GitHubUser!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubUserOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  name_ASC
  name_DESC
  login_ASC
  login_DESC
  avatarUrl_ASC
  avatarUrl_DESC
  bio_ASC
  bio_DESC
  company_ASC
  company_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  email_ASC
  email_DESC
  isBountyHunter_ASC
  isBountyHunter_DESC
  isCampusExpert_ASC
  isCampusExpert_DESC
  isDeveloperProgramMember_ASC
  isDeveloperProgramMember_DESC
  isEmployee_ASC
  isEmployee_DESC
  isHireable_ASC
  isHireable_DESC
  isSiteAdmin_ASC
  isSiteAdmin_DESC
  isViewer_ASC
  isViewer_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GitHubUserPreviousValues {
  id: ID!
  url: String!
  name: String!
  login: String!
  avatarUrl: String!
  bio: String
  company: String
  createdAtExternal: DateTime!
  email: String
  isBountyHunter: Boolean!
  isCampusExpert: Boolean!
  isDeveloperProgramMember: Boolean!
  isEmployee: Boolean!
  isHireable: Boolean!
  isSiteAdmin: Boolean!
  isViewer: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GitHubUserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubUserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubUserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubUserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  login: String

  """All values that are not equal to given value."""
  login_not: String

  """All values that are contained in given list."""
  login_in: [String!]

  """All values that are not contained in given list."""
  login_not_in: [String!]

  """All values less than the given value."""
  login_lt: String

  """All values less than or equal the given value."""
  login_lte: String

  """All values greater than the given value."""
  login_gt: String

  """All values greater than or equal the given value."""
  login_gte: String

  """All values containing the given string."""
  login_contains: String

  """All values not containing the given string."""
  login_not_contains: String

  """All values starting with the given string."""
  login_starts_with: String

  """All values not starting with the given string."""
  login_not_starts_with: String

  """All values ending with the given string."""
  login_ends_with: String

  """All values not ending with the given string."""
  login_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  company: String

  """All values that are not equal to given value."""
  company_not: String

  """All values that are contained in given list."""
  company_in: [String!]

  """All values that are not contained in given list."""
  company_not_in: [String!]

  """All values less than the given value."""
  company_lt: String

  """All values less than or equal the given value."""
  company_lte: String

  """All values greater than the given value."""
  company_gt: String

  """All values greater than or equal the given value."""
  company_gte: String

  """All values containing the given string."""
  company_contains: String

  """All values not containing the given string."""
  company_not_contains: String

  """All values starting with the given string."""
  company_starts_with: String

  """All values not starting with the given string."""
  company_not_starts_with: String

  """All values ending with the given string."""
  company_ends_with: String

  """All values not ending with the given string."""
  company_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  isBountyHunter: Boolean

  """All values that are not equal to given value."""
  isBountyHunter_not: Boolean
  isCampusExpert: Boolean

  """All values that are not equal to given value."""
  isCampusExpert_not: Boolean
  isDeveloperProgramMember: Boolean

  """All values that are not equal to given value."""
  isDeveloperProgramMember_not: Boolean
  isEmployee: Boolean

  """All values that are not equal to given value."""
  isEmployee_not: Boolean
  isHireable: Boolean

  """All values that are not equal to given value."""
  isHireable_not: Boolean
  isSiteAdmin: Boolean

  """All values that are not equal to given value."""
  isSiteAdmin_not: Boolean
  isViewer: Boolean

  """All values that are not equal to given value."""
  isViewer_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GitHubUserSubscriptionPayload {
  mutation: MutationType!
  node: GitHubUser
  updatedFields: [String!]
  previousValues: GitHubUserPreviousValues
}

input GitHubUserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubUserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubUserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubUserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubUserWhereInput
}

input GitHubUserUpdateDataInput {
  url: String
  name: String
  login: String
  avatarUrl: String
  bio: String
  company: String
  createdAtExternal: DateTime
  email: String
  isBountyHunter: Boolean
  isCampusExpert: Boolean
  isDeveloperProgramMember: Boolean
  isEmployee: Boolean
  isHireable: Boolean
  isSiteAdmin: Boolean
  isViewer: Boolean
  followers: GitHubUserUpdateManyInput
  following: GitHubUserUpdateManyInput
  issueComments: GitHubCommentUpdateManyInput
  issues: GitHubIssueUpdateManyInput
  pullRequests: GitHubPullRequestUpdateManyInput
}

input GitHubUserUpdateInput {
  url: String
  name: String
  login: String
  avatarUrl: String
  bio: String
  company: String
  createdAtExternal: DateTime
  email: String
  isBountyHunter: Boolean
  isCampusExpert: Boolean
  isDeveloperProgramMember: Boolean
  isEmployee: Boolean
  isHireable: Boolean
  isSiteAdmin: Boolean
  isViewer: Boolean
  followers: GitHubUserUpdateManyInput
  following: GitHubUserUpdateManyInput
  issueComments: GitHubCommentUpdateManyInput
  issues: GitHubIssueUpdateManyInput
  pullRequests: GitHubPullRequestUpdateManyInput
}

input GitHubUserUpdateManyDataInput {
  url: String
  name: String
  login: String
  avatarUrl: String
  bio: String
  company: String
  createdAtExternal: DateTime
  email: String
  isBountyHunter: Boolean
  isCampusExpert: Boolean
  isDeveloperProgramMember: Boolean
  isEmployee: Boolean
  isHireable: Boolean
  isSiteAdmin: Boolean
  isViewer: Boolean
}

input GitHubUserUpdateManyInput {
  create: [GitHubUserCreateInput!]
  connect: [GitHubUserWhereUniqueInput!]
  set: [GitHubUserWhereUniqueInput!]
  disconnect: [GitHubUserWhereUniqueInput!]
  delete: [GitHubUserWhereUniqueInput!]
  update: [GitHubUserUpdateWithWhereUniqueNestedInput!]
  updateMany: [GitHubUserUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubUserScalarWhereInput!]
  upsert: [GitHubUserUpsertWithWhereUniqueNestedInput!]
}

input GitHubUserUpdateManyMutationInput {
  url: String
  name: String
  login: String
  avatarUrl: String
  bio: String
  company: String
  createdAtExternal: DateTime
  email: String
  isBountyHunter: Boolean
  isCampusExpert: Boolean
  isDeveloperProgramMember: Boolean
  isEmployee: Boolean
  isHireable: Boolean
  isSiteAdmin: Boolean
  isViewer: Boolean
}

input GitHubUserUpdateManyWithWhereNestedInput {
  where: GitHubUserScalarWhereInput!
  data: GitHubUserUpdateManyDataInput!
}

input GitHubUserUpdateOneInput {
  create: GitHubUserCreateInput
  connect: GitHubUserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GitHubUserUpdateDataInput
  upsert: GitHubUserUpsertNestedInput
}

input GitHubUserUpdateOneRequiredInput {
  create: GitHubUserCreateInput
  connect: GitHubUserWhereUniqueInput
  update: GitHubUserUpdateDataInput
  upsert: GitHubUserUpsertNestedInput
}

input GitHubUserUpdateWithWhereUniqueNestedInput {
  where: GitHubUserWhereUniqueInput!
  data: GitHubUserUpdateDataInput!
}

input GitHubUserUpsertNestedInput {
  update: GitHubUserUpdateDataInput!
  create: GitHubUserCreateInput!
}

input GitHubUserUpsertWithWhereUniqueNestedInput {
  where: GitHubUserWhereUniqueInput!
  update: GitHubUserUpdateDataInput!
  create: GitHubUserCreateInput!
}

input GitHubUserWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubUserWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubUserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubUserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  login: String

  """All values that are not equal to given value."""
  login_not: String

  """All values that are contained in given list."""
  login_in: [String!]

  """All values that are not contained in given list."""
  login_not_in: [String!]

  """All values less than the given value."""
  login_lt: String

  """All values less than or equal the given value."""
  login_lte: String

  """All values greater than the given value."""
  login_gt: String

  """All values greater than or equal the given value."""
  login_gte: String

  """All values containing the given string."""
  login_contains: String

  """All values not containing the given string."""
  login_not_contains: String

  """All values starting with the given string."""
  login_starts_with: String

  """All values not starting with the given string."""
  login_not_starts_with: String

  """All values ending with the given string."""
  login_ends_with: String

  """All values not ending with the given string."""
  login_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  company: String

  """All values that are not equal to given value."""
  company_not: String

  """All values that are contained in given list."""
  company_in: [String!]

  """All values that are not contained in given list."""
  company_not_in: [String!]

  """All values less than the given value."""
  company_lt: String

  """All values less than or equal the given value."""
  company_lte: String

  """All values greater than the given value."""
  company_gt: String

  """All values greater than or equal the given value."""
  company_gte: String

  """All values containing the given string."""
  company_contains: String

  """All values not containing the given string."""
  company_not_contains: String

  """All values starting with the given string."""
  company_starts_with: String

  """All values not starting with the given string."""
  company_not_starts_with: String

  """All values ending with the given string."""
  company_ends_with: String

  """All values not ending with the given string."""
  company_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  isBountyHunter: Boolean

  """All values that are not equal to given value."""
  isBountyHunter_not: Boolean
  isCampusExpert: Boolean

  """All values that are not equal to given value."""
  isCampusExpert_not: Boolean
  isDeveloperProgramMember: Boolean

  """All values that are not equal to given value."""
  isDeveloperProgramMember_not: Boolean
  isEmployee: Boolean

  """All values that are not equal to given value."""
  isEmployee_not: Boolean
  isHireable: Boolean

  """All values that are not equal to given value."""
  isHireable_not: Boolean
  isSiteAdmin: Boolean

  """All values that are not equal to given value."""
  isSiteAdmin_not: Boolean
  isViewer: Boolean

  """All values that are not equal to given value."""
  isViewer_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  followers_every: GitHubUserWhereInput
  followers_some: GitHubUserWhereInput
  followers_none: GitHubUserWhereInput
  following_every: GitHubUserWhereInput
  following_some: GitHubUserWhereInput
  following_none: GitHubUserWhereInput
  issueComments_every: GitHubCommentWhereInput
  issueComments_some: GitHubCommentWhereInput
  issueComments_none: GitHubCommentWhereInput
  issues_every: GitHubIssueWhereInput
  issues_some: GitHubIssueWhereInput
  issues_none: GitHubIssueWhereInput
  pullRequests_every: GitHubPullRequestWhereInput
  pullRequests_some: GitHubPullRequestWhereInput
  pullRequests_none: GitHubPullRequestWhereInput
}

input GitHubUserWhereUniqueInput {
  id: ID
}

type GitHubWebhookEvent implements Node {
  id: ID!
  createdAt: DateTime!
  repository: Repository!
  eventType: String!
  action: String
  sender: String!
}

"""A connection to a list of items."""
type GitHubWebhookEventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GitHubWebhookEventEdge]!
  aggregate: AggregateGitHubWebhookEvent!
}

input GitHubWebhookEventCreateInput {
  id: ID
  eventType: String!
  action: String
  sender: String!
  repository: RepositoryCreateOneWithoutWebhookEventsInput!
}

input GitHubWebhookEventCreateManyWithoutRepositoryInput {
  create: [GitHubWebhookEventCreateWithoutRepositoryInput!]
  connect: [GitHubWebhookEventWhereUniqueInput!]
}

input GitHubWebhookEventCreateWithoutRepositoryInput {
  id: ID
  eventType: String!
  action: String
  sender: String!
}

"""An edge in a connection."""
type GitHubWebhookEventEdge {
  """The item at the end of the edge."""
  node: GitHubWebhookEvent!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GitHubWebhookEventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  eventType_ASC
  eventType_DESC
  action_ASC
  action_DESC
  sender_ASC
  sender_DESC
}

type GitHubWebhookEventPreviousValues {
  id: ID!
  createdAt: DateTime!
  eventType: String!
  action: String
  sender: String!
}

input GitHubWebhookEventScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubWebhookEventScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubWebhookEventScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubWebhookEventScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  eventType: String

  """All values that are not equal to given value."""
  eventType_not: String

  """All values that are contained in given list."""
  eventType_in: [String!]

  """All values that are not contained in given list."""
  eventType_not_in: [String!]

  """All values less than the given value."""
  eventType_lt: String

  """All values less than or equal the given value."""
  eventType_lte: String

  """All values greater than the given value."""
  eventType_gt: String

  """All values greater than or equal the given value."""
  eventType_gte: String

  """All values containing the given string."""
  eventType_contains: String

  """All values not containing the given string."""
  eventType_not_contains: String

  """All values starting with the given string."""
  eventType_starts_with: String

  """All values not starting with the given string."""
  eventType_not_starts_with: String

  """All values ending with the given string."""
  eventType_ends_with: String

  """All values not ending with the given string."""
  eventType_not_ends_with: String
  action: String

  """All values that are not equal to given value."""
  action_not: String

  """All values that are contained in given list."""
  action_in: [String!]

  """All values that are not contained in given list."""
  action_not_in: [String!]

  """All values less than the given value."""
  action_lt: String

  """All values less than or equal the given value."""
  action_lte: String

  """All values greater than the given value."""
  action_gt: String

  """All values greater than or equal the given value."""
  action_gte: String

  """All values containing the given string."""
  action_contains: String

  """All values not containing the given string."""
  action_not_contains: String

  """All values starting with the given string."""
  action_starts_with: String

  """All values not starting with the given string."""
  action_not_starts_with: String

  """All values ending with the given string."""
  action_ends_with: String

  """All values not ending with the given string."""
  action_not_ends_with: String
  sender: String

  """All values that are not equal to given value."""
  sender_not: String

  """All values that are contained in given list."""
  sender_in: [String!]

  """All values that are not contained in given list."""
  sender_not_in: [String!]

  """All values less than the given value."""
  sender_lt: String

  """All values less than or equal the given value."""
  sender_lte: String

  """All values greater than the given value."""
  sender_gt: String

  """All values greater than or equal the given value."""
  sender_gte: String

  """All values containing the given string."""
  sender_contains: String

  """All values not containing the given string."""
  sender_not_contains: String

  """All values starting with the given string."""
  sender_starts_with: String

  """All values not starting with the given string."""
  sender_not_starts_with: String

  """All values ending with the given string."""
  sender_ends_with: String

  """All values not ending with the given string."""
  sender_not_ends_with: String
}

type GitHubWebhookEventSubscriptionPayload {
  mutation: MutationType!
  node: GitHubWebhookEvent
  updatedFields: [String!]
  previousValues: GitHubWebhookEventPreviousValues
}

input GitHubWebhookEventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubWebhookEventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubWebhookEventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubWebhookEventSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GitHubWebhookEventWhereInput
}

input GitHubWebhookEventUpdateInput {
  eventType: String
  action: String
  sender: String
  repository: RepositoryUpdateOneRequiredWithoutWebhookEventsInput
}

input GitHubWebhookEventUpdateManyDataInput {
  eventType: String
  action: String
  sender: String
}

input GitHubWebhookEventUpdateManyMutationInput {
  eventType: String
  action: String
  sender: String
}

input GitHubWebhookEventUpdateManyWithoutRepositoryInput {
  create: [GitHubWebhookEventCreateWithoutRepositoryInput!]
  connect: [GitHubWebhookEventWhereUniqueInput!]
  set: [GitHubWebhookEventWhereUniqueInput!]
  disconnect: [GitHubWebhookEventWhereUniqueInput!]
  delete: [GitHubWebhookEventWhereUniqueInput!]
  update: [GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput!]
  updateMany: [GitHubWebhookEventUpdateManyWithWhereNestedInput!]
  deleteMany: [GitHubWebhookEventScalarWhereInput!]
  upsert: [GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput!]
}

input GitHubWebhookEventUpdateManyWithWhereNestedInput {
  where: GitHubWebhookEventScalarWhereInput!
  data: GitHubWebhookEventUpdateManyDataInput!
}

input GitHubWebhookEventUpdateWithoutRepositoryDataInput {
  eventType: String
  action: String
  sender: String
}

input GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput {
  where: GitHubWebhookEventWhereUniqueInput!
  data: GitHubWebhookEventUpdateWithoutRepositoryDataInput!
}

input GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput {
  where: GitHubWebhookEventWhereUniqueInput!
  update: GitHubWebhookEventUpdateWithoutRepositoryDataInput!
  create: GitHubWebhookEventCreateWithoutRepositoryInput!
}

input GitHubWebhookEventWhereInput {
  """Logical AND on all given filters."""
  AND: [GitHubWebhookEventWhereInput!]

  """Logical OR on all given filters."""
  OR: [GitHubWebhookEventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GitHubWebhookEventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  eventType: String

  """All values that are not equal to given value."""
  eventType_not: String

  """All values that are contained in given list."""
  eventType_in: [String!]

  """All values that are not contained in given list."""
  eventType_not_in: [String!]

  """All values less than the given value."""
  eventType_lt: String

  """All values less than or equal the given value."""
  eventType_lte: String

  """All values greater than the given value."""
  eventType_gt: String

  """All values greater than or equal the given value."""
  eventType_gte: String

  """All values containing the given string."""
  eventType_contains: String

  """All values not containing the given string."""
  eventType_not_contains: String

  """All values starting with the given string."""
  eventType_starts_with: String

  """All values not starting with the given string."""
  eventType_not_starts_with: String

  """All values ending with the given string."""
  eventType_ends_with: String

  """All values not ending with the given string."""
  eventType_not_ends_with: String
  action: String

  """All values that are not equal to given value."""
  action_not: String

  """All values that are contained in given list."""
  action_in: [String!]

  """All values that are not contained in given list."""
  action_not_in: [String!]

  """All values less than the given value."""
  action_lt: String

  """All values less than or equal the given value."""
  action_lte: String

  """All values greater than the given value."""
  action_gt: String

  """All values greater than or equal the given value."""
  action_gte: String

  """All values containing the given string."""
  action_contains: String

  """All values not containing the given string."""
  action_not_contains: String

  """All values starting with the given string."""
  action_starts_with: String

  """All values not starting with the given string."""
  action_not_starts_with: String

  """All values ending with the given string."""
  action_ends_with: String

  """All values not ending with the given string."""
  action_not_ends_with: String
  sender: String

  """All values that are not equal to given value."""
  sender_not: String

  """All values that are contained in given list."""
  sender_in: [String!]

  """All values that are not contained in given list."""
  sender_not_in: [String!]

  """All values less than the given value."""
  sender_lt: String

  """All values less than or equal the given value."""
  sender_lte: String

  """All values greater than the given value."""
  sender_gt: String

  """All values greater than or equal the given value."""
  sender_gte: String

  """All values containing the given string."""
  sender_contains: String

  """All values not containing the given string."""
  sender_not_contains: String

  """All values starting with the given string."""
  sender_starts_with: String

  """All values not starting with the given string."""
  sender_not_starts_with: String

  """All values ending with the given string."""
  sender_ends_with: String

  """All values not ending with the given string."""
  sender_not_ends_with: String
  repository: RepositoryWhereInput
}

input GitHubWebhookEventWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createAppKey(data: AppKeyCreateInput!): AppKey!
  createRepository(data: RepositoryCreateInput!): Repository!
  createGitHubWebhookEvent(data: GitHubWebhookEventCreateInput!): GitHubWebhookEvent!
  createGame(data: GameCreateInput!): Game!
  createGitHubBranch(data: GitHubBranchCreateInput!): GitHubBranch!
  createGitHubReviewThread(data: GitHubReviewThreadCreateInput!): GitHubReviewThread!
  createGitHubPullRequestReview(data: GitHubPullRequestReviewCreateInput!): GitHubPullRequestReview!
  createGitHubComment(data: GitHubCommentCreateInput!): GitHubComment!
  createGitHubReviewRequest(data: GitHubReviewRequestCreateInput!): GitHubReviewRequest!
  createGitHubTopic(data: GitHubTopicCreateInput!): GitHubTopic!
  createGitHubIssue(data: GitHubIssueCreateInput!): GitHubIssue!
  createGitHubRepository(data: GitHubRepositoryCreateInput!): GitHubRepository!
  createGitHubPullRequest(data: GitHubPullRequestCreateInput!): GitHubPullRequest!
  createGitHubCommit(data: GitHubCommitCreateInput!): GitHubCommit!
  createGitHubUser(data: GitHubUserCreateInput!): GitHubUser!
  createGitHubFileDiff(data: GitHubFileDiffCreateInput!): GitHubFileDiff!
  createGitHubLabel(data: GitHubLabelCreateInput!): GitHubLabel!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateAppKey(data: AppKeyUpdateInput!, where: AppKeyWhereUniqueInput!): AppKey
  updateRepository(data: RepositoryUpdateInput!, where: RepositoryWhereUniqueInput!): Repository
  updateGitHubWebhookEvent(data: GitHubWebhookEventUpdateInput!, where: GitHubWebhookEventWhereUniqueInput!): GitHubWebhookEvent
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateGitHubBranch(data: GitHubBranchUpdateInput!, where: GitHubBranchWhereUniqueInput!): GitHubBranch
  updateGitHubReviewThread(data: GitHubReviewThreadUpdateInput!, where: GitHubReviewThreadWhereUniqueInput!): GitHubReviewThread
  updateGitHubPullRequestReview(data: GitHubPullRequestReviewUpdateInput!, where: GitHubPullRequestReviewWhereUniqueInput!): GitHubPullRequestReview
  updateGitHubComment(data: GitHubCommentUpdateInput!, where: GitHubCommentWhereUniqueInput!): GitHubComment
  updateGitHubReviewRequest(data: GitHubReviewRequestUpdateInput!, where: GitHubReviewRequestWhereUniqueInput!): GitHubReviewRequest
  updateGitHubTopic(data: GitHubTopicUpdateInput!, where: GitHubTopicWhereUniqueInput!): GitHubTopic
  updateGitHubIssue(data: GitHubIssueUpdateInput!, where: GitHubIssueWhereUniqueInput!): GitHubIssue
  updateGitHubRepository(data: GitHubRepositoryUpdateInput!, where: GitHubRepositoryWhereUniqueInput!): GitHubRepository
  updateGitHubPullRequest(data: GitHubPullRequestUpdateInput!, where: GitHubPullRequestWhereUniqueInput!): GitHubPullRequest
  updateGitHubCommit(data: GitHubCommitUpdateInput!, where: GitHubCommitWhereUniqueInput!): GitHubCommit
  updateGitHubUser(data: GitHubUserUpdateInput!, where: GitHubUserWhereUniqueInput!): GitHubUser
  updateGitHubFileDiff(data: GitHubFileDiffUpdateInput!, where: GitHubFileDiffWhereUniqueInput!): GitHubFileDiff
  updateGitHubLabel(data: GitHubLabelUpdateInput!, where: GitHubLabelWhereUniqueInput!): GitHubLabel
  deleteUser(where: UserWhereUniqueInput!): User
  deleteAppKey(where: AppKeyWhereUniqueInput!): AppKey
  deleteRepository(where: RepositoryWhereUniqueInput!): Repository
  deleteGitHubWebhookEvent(where: GitHubWebhookEventWhereUniqueInput!): GitHubWebhookEvent
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteGitHubBranch(where: GitHubBranchWhereUniqueInput!): GitHubBranch
  deleteGitHubReviewThread(where: GitHubReviewThreadWhereUniqueInput!): GitHubReviewThread
  deleteGitHubPullRequestReview(where: GitHubPullRequestReviewWhereUniqueInput!): GitHubPullRequestReview
  deleteGitHubComment(where: GitHubCommentWhereUniqueInput!): GitHubComment
  deleteGitHubReviewRequest(where: GitHubReviewRequestWhereUniqueInput!): GitHubReviewRequest
  deleteGitHubTopic(where: GitHubTopicWhereUniqueInput!): GitHubTopic
  deleteGitHubIssue(where: GitHubIssueWhereUniqueInput!): GitHubIssue
  deleteGitHubRepository(where: GitHubRepositoryWhereUniqueInput!): GitHubRepository
  deleteGitHubPullRequest(where: GitHubPullRequestWhereUniqueInput!): GitHubPullRequest
  deleteGitHubCommit(where: GitHubCommitWhereUniqueInput!): GitHubCommit
  deleteGitHubUser(where: GitHubUserWhereUniqueInput!): GitHubUser
  deleteGitHubFileDiff(where: GitHubFileDiffWhereUniqueInput!): GitHubFileDiff
  deleteGitHubLabel(where: GitHubLabelWhereUniqueInput!): GitHubLabel
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertAppKey(where: AppKeyWhereUniqueInput!, create: AppKeyCreateInput!, update: AppKeyUpdateInput!): AppKey!
  upsertRepository(where: RepositoryWhereUniqueInput!, create: RepositoryCreateInput!, update: RepositoryUpdateInput!): Repository!
  upsertGitHubWebhookEvent(where: GitHubWebhookEventWhereUniqueInput!, create: GitHubWebhookEventCreateInput!, update: GitHubWebhookEventUpdateInput!): GitHubWebhookEvent!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  upsertGitHubBranch(where: GitHubBranchWhereUniqueInput!, create: GitHubBranchCreateInput!, update: GitHubBranchUpdateInput!): GitHubBranch!
  upsertGitHubReviewThread(where: GitHubReviewThreadWhereUniqueInput!, create: GitHubReviewThreadCreateInput!, update: GitHubReviewThreadUpdateInput!): GitHubReviewThread!
  upsertGitHubPullRequestReview(where: GitHubPullRequestReviewWhereUniqueInput!, create: GitHubPullRequestReviewCreateInput!, update: GitHubPullRequestReviewUpdateInput!): GitHubPullRequestReview!
  upsertGitHubComment(where: GitHubCommentWhereUniqueInput!, create: GitHubCommentCreateInput!, update: GitHubCommentUpdateInput!): GitHubComment!
  upsertGitHubReviewRequest(where: GitHubReviewRequestWhereUniqueInput!, create: GitHubReviewRequestCreateInput!, update: GitHubReviewRequestUpdateInput!): GitHubReviewRequest!
  upsertGitHubTopic(where: GitHubTopicWhereUniqueInput!, create: GitHubTopicCreateInput!, update: GitHubTopicUpdateInput!): GitHubTopic!
  upsertGitHubIssue(where: GitHubIssueWhereUniqueInput!, create: GitHubIssueCreateInput!, update: GitHubIssueUpdateInput!): GitHubIssue!
  upsertGitHubRepository(where: GitHubRepositoryWhereUniqueInput!, create: GitHubRepositoryCreateInput!, update: GitHubRepositoryUpdateInput!): GitHubRepository!
  upsertGitHubPullRequest(where: GitHubPullRequestWhereUniqueInput!, create: GitHubPullRequestCreateInput!, update: GitHubPullRequestUpdateInput!): GitHubPullRequest!
  upsertGitHubCommit(where: GitHubCommitWhereUniqueInput!, create: GitHubCommitCreateInput!, update: GitHubCommitUpdateInput!): GitHubCommit!
  upsertGitHubUser(where: GitHubUserWhereUniqueInput!, create: GitHubUserCreateInput!, update: GitHubUserUpdateInput!): GitHubUser!
  upsertGitHubFileDiff(where: GitHubFileDiffWhereUniqueInput!, create: GitHubFileDiffCreateInput!, update: GitHubFileDiffUpdateInput!): GitHubFileDiff!
  upsertGitHubLabel(where: GitHubLabelWhereUniqueInput!, create: GitHubLabelCreateInput!, update: GitHubLabelUpdateInput!): GitHubLabel!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyAppKeys(data: AppKeyUpdateManyMutationInput!, where: AppKeyWhereInput): BatchPayload!
  updateManyRepositories(data: RepositoryUpdateManyMutationInput!, where: RepositoryWhereInput): BatchPayload!
  updateManyGitHubWebhookEvents(data: GitHubWebhookEventUpdateManyMutationInput!, where: GitHubWebhookEventWhereInput): BatchPayload!
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  updateManyGitHubBranches(data: GitHubBranchUpdateManyMutationInput!, where: GitHubBranchWhereInput): BatchPayload!
  updateManyGitHubReviewThreads(data: GitHubReviewThreadUpdateManyMutationInput!, where: GitHubReviewThreadWhereInput): BatchPayload!
  updateManyGitHubPullRequestReviews(data: GitHubPullRequestReviewUpdateManyMutationInput!, where: GitHubPullRequestReviewWhereInput): BatchPayload!
  updateManyGitHubComments(data: GitHubCommentUpdateManyMutationInput!, where: GitHubCommentWhereInput): BatchPayload!
  updateManyGitHubTopics(data: GitHubTopicUpdateManyMutationInput!, where: GitHubTopicWhereInput): BatchPayload!
  updateManyGitHubIssues(data: GitHubIssueUpdateManyMutationInput!, where: GitHubIssueWhereInput): BatchPayload!
  updateManyGitHubRepositories(data: GitHubRepositoryUpdateManyMutationInput!, where: GitHubRepositoryWhereInput): BatchPayload!
  updateManyGitHubPullRequests(data: GitHubPullRequestUpdateManyMutationInput!, where: GitHubPullRequestWhereInput): BatchPayload!
  updateManyGitHubCommits(data: GitHubCommitUpdateManyMutationInput!, where: GitHubCommitWhereInput): BatchPayload!
  updateManyGitHubUsers(data: GitHubUserUpdateManyMutationInput!, where: GitHubUserWhereInput): BatchPayload!
  updateManyGitHubFileDiffs(data: GitHubFileDiffUpdateManyMutationInput!, where: GitHubFileDiffWhereInput): BatchPayload!
  updateManyGitHubLabels(data: GitHubLabelUpdateManyMutationInput!, where: GitHubLabelWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyAppKeys(where: AppKeyWhereInput): BatchPayload!
  deleteManyRepositories(where: RepositoryWhereInput): BatchPayload!
  deleteManyGitHubWebhookEvents(where: GitHubWebhookEventWhereInput): BatchPayload!
  deleteManyGames(where: GameWhereInput): BatchPayload!
  deleteManyGitHubBranches(where: GitHubBranchWhereInput): BatchPayload!
  deleteManyGitHubReviewThreads(where: GitHubReviewThreadWhereInput): BatchPayload!
  deleteManyGitHubPullRequestReviews(where: GitHubPullRequestReviewWhereInput): BatchPayload!
  deleteManyGitHubComments(where: GitHubCommentWhereInput): BatchPayload!
  deleteManyGitHubReviewRequests(where: GitHubReviewRequestWhereInput): BatchPayload!
  deleteManyGitHubTopics(where: GitHubTopicWhereInput): BatchPayload!
  deleteManyGitHubIssues(where: GitHubIssueWhereInput): BatchPayload!
  deleteManyGitHubRepositories(where: GitHubRepositoryWhereInput): BatchPayload!
  deleteManyGitHubPullRequests(where: GitHubPullRequestWhereInput): BatchPayload!
  deleteManyGitHubCommits(where: GitHubCommitWhereInput): BatchPayload!
  deleteManyGitHubUsers(where: GitHubUserWhereInput): BatchPayload!
  deleteManyGitHubFileDiffs(where: GitHubFileDiffWhereInput): BatchPayload!
  deleteManyGitHubLabels(where: GitHubLabelWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  appKeys(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppKey]!
  repositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository]!
  gitHubWebhookEvents(where: GitHubWebhookEventWhereInput, orderBy: GitHubWebhookEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubWebhookEvent]!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gitHubBranches(where: GitHubBranchWhereInput, orderBy: GitHubBranchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubBranch]!
  gitHubReviewThreads(where: GitHubReviewThreadWhereInput, orderBy: GitHubReviewThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubReviewThread]!
  gitHubPullRequestReviews(where: GitHubPullRequestReviewWhereInput, orderBy: GitHubPullRequestReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequestReview]!
  gitHubComments(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubComment]!
  gitHubReviewRequests(where: GitHubReviewRequestWhereInput, orderBy: GitHubReviewRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubReviewRequest]!
  gitHubTopics(where: GitHubTopicWhereInput, orderBy: GitHubTopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubTopic]!
  gitHubIssues(where: GitHubIssueWhereInput, orderBy: GitHubIssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubIssue]!
  gitHubRepositories(where: GitHubRepositoryWhereInput, orderBy: GitHubRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubRepository]!
  gitHubPullRequests(where: GitHubPullRequestWhereInput, orderBy: GitHubPullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubPullRequest]!
  gitHubCommits(where: GitHubCommitWhereInput, orderBy: GitHubCommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubCommit]!
  gitHubUsers(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubUser]!
  gitHubFileDiffs(where: GitHubFileDiffWhereInput, orderBy: GitHubFileDiffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubFileDiff]!
  gitHubLabels(where: GitHubLabelWhereInput, orderBy: GitHubLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubLabel]!
  user(where: UserWhereUniqueInput!): User
  appKey(where: AppKeyWhereUniqueInput!): AppKey
  repository(where: RepositoryWhereUniqueInput!): Repository
  gitHubWebhookEvent(where: GitHubWebhookEventWhereUniqueInput!): GitHubWebhookEvent
  game(where: GameWhereUniqueInput!): Game
  gitHubBranch(where: GitHubBranchWhereUniqueInput!): GitHubBranch
  gitHubReviewThread(where: GitHubReviewThreadWhereUniqueInput!): GitHubReviewThread
  gitHubPullRequestReview(where: GitHubPullRequestReviewWhereUniqueInput!): GitHubPullRequestReview
  gitHubComment(where: GitHubCommentWhereUniqueInput!): GitHubComment
  gitHubReviewRequest(where: GitHubReviewRequestWhereUniqueInput!): GitHubReviewRequest
  gitHubTopic(where: GitHubTopicWhereUniqueInput!): GitHubTopic
  gitHubIssue(where: GitHubIssueWhereUniqueInput!): GitHubIssue
  gitHubRepository(where: GitHubRepositoryWhereUniqueInput!): GitHubRepository
  gitHubPullRequest(where: GitHubPullRequestWhereUniqueInput!): GitHubPullRequest
  gitHubCommit(where: GitHubCommitWhereUniqueInput!): GitHubCommit
  gitHubUser(where: GitHubUserWhereUniqueInput!): GitHubUser
  gitHubFileDiff(where: GitHubFileDiffWhereUniqueInput!): GitHubFileDiff
  gitHubLabel(where: GitHubLabelWhereUniqueInput!): GitHubLabel
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  appKeysConnection(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppKeyConnection!
  repositoriesConnection(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RepositoryConnection!
  gitHubWebhookEventsConnection(where: GitHubWebhookEventWhereInput, orderBy: GitHubWebhookEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubWebhookEventConnection!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  gitHubBranchesConnection(where: GitHubBranchWhereInput, orderBy: GitHubBranchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubBranchConnection!
  gitHubReviewThreadsConnection(where: GitHubReviewThreadWhereInput, orderBy: GitHubReviewThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubReviewThreadConnection!
  gitHubPullRequestReviewsConnection(where: GitHubPullRequestReviewWhereInput, orderBy: GitHubPullRequestReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubPullRequestReviewConnection!
  gitHubCommentsConnection(where: GitHubCommentWhereInput, orderBy: GitHubCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubCommentConnection!
  gitHubReviewRequestsConnection(where: GitHubReviewRequestWhereInput, orderBy: GitHubReviewRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubReviewRequestConnection!
  gitHubTopicsConnection(where: GitHubTopicWhereInput, orderBy: GitHubTopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubTopicConnection!
  gitHubIssuesConnection(where: GitHubIssueWhereInput, orderBy: GitHubIssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubIssueConnection!
  gitHubRepositoriesConnection(where: GitHubRepositoryWhereInput, orderBy: GitHubRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubRepositoryConnection!
  gitHubPullRequestsConnection(where: GitHubPullRequestWhereInput, orderBy: GitHubPullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubPullRequestConnection!
  gitHubCommitsConnection(where: GitHubCommitWhereInput, orderBy: GitHubCommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubCommitConnection!
  gitHubUsersConnection(where: GitHubUserWhereInput, orderBy: GitHubUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubUserConnection!
  gitHubFileDiffsConnection(where: GitHubFileDiffWhereInput, orderBy: GitHubFileDiffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubFileDiffConnection!
  gitHubLabelsConnection(where: GitHubLabelWhereInput, orderBy: GitHubLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GitHubLabelConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Repository implements Node {
  id: ID!
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  addedBy: User!
  name: String!
  description: String!
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  appKey: AppKey!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  webhookEvents(where: GitHubWebhookEventWhereInput, orderBy: GitHubWebhookEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GitHubWebhookEvent!]
  game: Game
}

"""A connection to a list of items."""
type RepositoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RepositoryEdge]!
  aggregate: AggregateRepository!
}

input RepositoryCreateInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserCreateOneWithoutAddedRepositoriesInput!
  appKey: AppKeyCreateOneWithoutRepositoriesInput!
  webhookEvents: GitHubWebhookEventCreateManyWithoutRepositoryInput
  game: GameCreateOneWithoutRepositoryInput
}

input RepositoryCreateManyWithoutAddedByInput {
  create: [RepositoryCreateWithoutAddedByInput!]
  connect: [RepositoryWhereUniqueInput!]
}

input RepositoryCreateManyWithoutAppKeyInput {
  create: [RepositoryCreateWithoutAppKeyInput!]
  connect: [RepositoryWhereUniqueInput!]
}

input RepositoryCreateOneWithoutGameInput {
  create: RepositoryCreateWithoutGameInput
  connect: RepositoryWhereUniqueInput
}

input RepositoryCreateOneWithoutWebhookEventsInput {
  create: RepositoryCreateWithoutWebhookEventsInput
  connect: RepositoryWhereUniqueInput
}

input RepositoryCreateWithoutAddedByInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  appKey: AppKeyCreateOneWithoutRepositoriesInput!
  webhookEvents: GitHubWebhookEventCreateManyWithoutRepositoryInput
  game: GameCreateOneWithoutRepositoryInput
}

input RepositoryCreateWithoutAppKeyInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserCreateOneWithoutAddedRepositoriesInput!
  webhookEvents: GitHubWebhookEventCreateManyWithoutRepositoryInput
  game: GameCreateOneWithoutRepositoryInput
}

input RepositoryCreateWithoutGameInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserCreateOneWithoutAddedRepositoriesInput!
  appKey: AppKeyCreateOneWithoutRepositoriesInput!
  webhookEvents: GitHubWebhookEventCreateManyWithoutRepositoryInput
}

input RepositoryCreateWithoutWebhookEventsInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserCreateOneWithoutAddedRepositoriesInput!
  appKey: AppKeyCreateOneWithoutRepositoriesInput!
  game: GameCreateOneWithoutRepositoryInput
}

"""An edge in a connection."""
type RepositoryEdge {
  """The item at the end of the edge."""
  node: Repository!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RepositoryOrderByInput {
  id_ASC
  id_DESC
  idExternal_ASC
  idExternal_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  homepageUrl_ASC
  homepageUrl_DESC
  url_ASC
  url_DESC
  owner_ASC
  owner_DESC
  isTracked_ASC
  isTracked_DESC
  isFork_ASC
  isFork_DESC
  isLocked_ASC
  isLocked_DESC
  isPrivate_ASC
  isPrivate_DESC
  isArchived_ASC
  isArchived_DESC
  isDisabled_ASC
  isDisabled_DESC
  sshUrl_ASC
  sshUrl_DESC
  stargazers_ASC
  stargazers_DESC
  collaborators_ASC
  collaborators_DESC
  watchers_ASC
  watchers_DESC
  issues_ASC
  issues_DESC
  pullRequests_ASC
  pullRequests_DESC
}

type RepositoryPreviousValues {
  id: ID!
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  description: String!
  homepageUrl: String
  url: String!
  owner: String!
  isTracked: Boolean!
  isFork: Boolean!
  isLocked: Boolean!
  isPrivate: Boolean!
  isArchived: Boolean!
  isDisabled: Boolean!
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
}

input RepositoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  idExternal: String

  """All values that are not equal to given value."""
  idExternal_not: String

  """All values that are contained in given list."""
  idExternal_in: [String!]

  """All values that are not contained in given list."""
  idExternal_not_in: [String!]

  """All values less than the given value."""
  idExternal_lt: String

  """All values less than or equal the given value."""
  idExternal_lte: String

  """All values greater than the given value."""
  idExternal_gt: String

  """All values greater than or equal the given value."""
  idExternal_gte: String

  """All values containing the given string."""
  idExternal_contains: String

  """All values not containing the given string."""
  idExternal_not_contains: String

  """All values starting with the given string."""
  idExternal_starts_with: String

  """All values not starting with the given string."""
  idExternal_not_starts_with: String

  """All values ending with the given string."""
  idExternal_ends_with: String

  """All values not ending with the given string."""
  idExternal_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  homepageUrl: String

  """All values that are not equal to given value."""
  homepageUrl_not: String

  """All values that are contained in given list."""
  homepageUrl_in: [String!]

  """All values that are not contained in given list."""
  homepageUrl_not_in: [String!]

  """All values less than the given value."""
  homepageUrl_lt: String

  """All values less than or equal the given value."""
  homepageUrl_lte: String

  """All values greater than the given value."""
  homepageUrl_gt: String

  """All values greater than or equal the given value."""
  homepageUrl_gte: String

  """All values containing the given string."""
  homepageUrl_contains: String

  """All values not containing the given string."""
  homepageUrl_not_contains: String

  """All values starting with the given string."""
  homepageUrl_starts_with: String

  """All values not starting with the given string."""
  homepageUrl_not_starts_with: String

  """All values ending with the given string."""
  homepageUrl_ends_with: String

  """All values not ending with the given string."""
  homepageUrl_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  owner: String

  """All values that are not equal to given value."""
  owner_not: String

  """All values that are contained in given list."""
  owner_in: [String!]

  """All values that are not contained in given list."""
  owner_not_in: [String!]

  """All values less than the given value."""
  owner_lt: String

  """All values less than or equal the given value."""
  owner_lte: String

  """All values greater than the given value."""
  owner_gt: String

  """All values greater than or equal the given value."""
  owner_gte: String

  """All values containing the given string."""
  owner_contains: String

  """All values not containing the given string."""
  owner_not_contains: String

  """All values starting with the given string."""
  owner_starts_with: String

  """All values not starting with the given string."""
  owner_not_starts_with: String

  """All values ending with the given string."""
  owner_ends_with: String

  """All values not ending with the given string."""
  owner_not_ends_with: String
  isTracked: Boolean

  """All values that are not equal to given value."""
  isTracked_not: Boolean
  isFork: Boolean

  """All values that are not equal to given value."""
  isFork_not: Boolean
  isLocked: Boolean

  """All values that are not equal to given value."""
  isLocked_not: Boolean
  isPrivate: Boolean

  """All values that are not equal to given value."""
  isPrivate_not: Boolean
  isArchived: Boolean

  """All values that are not equal to given value."""
  isArchived_not: Boolean
  isDisabled: Boolean

  """All values that are not equal to given value."""
  isDisabled_not: Boolean
  sshUrl: String

  """All values that are not equal to given value."""
  sshUrl_not: String

  """All values that are contained in given list."""
  sshUrl_in: [String!]

  """All values that are not contained in given list."""
  sshUrl_not_in: [String!]

  """All values less than the given value."""
  sshUrl_lt: String

  """All values less than or equal the given value."""
  sshUrl_lte: String

  """All values greater than the given value."""
  sshUrl_gt: String

  """All values greater than or equal the given value."""
  sshUrl_gte: String

  """All values containing the given string."""
  sshUrl_contains: String

  """All values not containing the given string."""
  sshUrl_not_contains: String

  """All values starting with the given string."""
  sshUrl_starts_with: String

  """All values not starting with the given string."""
  sshUrl_not_starts_with: String

  """All values ending with the given string."""
  sshUrl_ends_with: String

  """All values not ending with the given string."""
  sshUrl_not_ends_with: String
  stargazers: Int

  """All values that are not equal to given value."""
  stargazers_not: Int

  """All values that are contained in given list."""
  stargazers_in: [Int!]

  """All values that are not contained in given list."""
  stargazers_not_in: [Int!]

  """All values less than the given value."""
  stargazers_lt: Int

  """All values less than or equal the given value."""
  stargazers_lte: Int

  """All values greater than the given value."""
  stargazers_gt: Int

  """All values greater than or equal the given value."""
  stargazers_gte: Int
  collaborators: Int

  """All values that are not equal to given value."""
  collaborators_not: Int

  """All values that are contained in given list."""
  collaborators_in: [Int!]

  """All values that are not contained in given list."""
  collaborators_not_in: [Int!]

  """All values less than the given value."""
  collaborators_lt: Int

  """All values less than or equal the given value."""
  collaborators_lte: Int

  """All values greater than the given value."""
  collaborators_gt: Int

  """All values greater than or equal the given value."""
  collaborators_gte: Int
  watchers: Int

  """All values that are not equal to given value."""
  watchers_not: Int

  """All values that are contained in given list."""
  watchers_in: [Int!]

  """All values that are not contained in given list."""
  watchers_not_in: [Int!]

  """All values less than the given value."""
  watchers_lt: Int

  """All values less than or equal the given value."""
  watchers_lte: Int

  """All values greater than the given value."""
  watchers_gt: Int

  """All values greater than or equal the given value."""
  watchers_gte: Int
  issues: Int

  """All values that are not equal to given value."""
  issues_not: Int

  """All values that are contained in given list."""
  issues_in: [Int!]

  """All values that are not contained in given list."""
  issues_not_in: [Int!]

  """All values less than the given value."""
  issues_lt: Int

  """All values less than or equal the given value."""
  issues_lte: Int

  """All values greater than the given value."""
  issues_gt: Int

  """All values greater than or equal the given value."""
  issues_gte: Int
  pullRequests: Int

  """All values that are not equal to given value."""
  pullRequests_not: Int

  """All values that are contained in given list."""
  pullRequests_in: [Int!]

  """All values that are not contained in given list."""
  pullRequests_not_in: [Int!]

  """All values less than the given value."""
  pullRequests_lt: Int

  """All values less than or equal the given value."""
  pullRequests_lte: Int

  """All values greater than the given value."""
  pullRequests_gt: Int

  """All values greater than or equal the given value."""
  pullRequests_gte: Int
}

type RepositorySubscriptionPayload {
  mutation: MutationType!
  node: Repository
  updatedFields: [String!]
  previousValues: RepositoryPreviousValues
}

input RepositorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositorySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RepositoryWhereInput
}

input RepositoryUpdateInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserUpdateOneRequiredWithoutAddedRepositoriesInput
  appKey: AppKeyUpdateOneRequiredWithoutRepositoriesInput
  webhookEvents: GitHubWebhookEventUpdateManyWithoutRepositoryInput
  game: GameUpdateOneWithoutRepositoryInput
}

input RepositoryUpdateManyDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
}

input RepositoryUpdateManyMutationInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
}

input RepositoryUpdateManyWithoutAddedByInput {
  create: [RepositoryCreateWithoutAddedByInput!]
  connect: [RepositoryWhereUniqueInput!]
  set: [RepositoryWhereUniqueInput!]
  disconnect: [RepositoryWhereUniqueInput!]
  delete: [RepositoryWhereUniqueInput!]
  update: [RepositoryUpdateWithWhereUniqueWithoutAddedByInput!]
  updateMany: [RepositoryUpdateManyWithWhereNestedInput!]
  deleteMany: [RepositoryScalarWhereInput!]
  upsert: [RepositoryUpsertWithWhereUniqueWithoutAddedByInput!]
}

input RepositoryUpdateManyWithoutAppKeyInput {
  create: [RepositoryCreateWithoutAppKeyInput!]
  connect: [RepositoryWhereUniqueInput!]
  set: [RepositoryWhereUniqueInput!]
  disconnect: [RepositoryWhereUniqueInput!]
  delete: [RepositoryWhereUniqueInput!]
  update: [RepositoryUpdateWithWhereUniqueWithoutAppKeyInput!]
  updateMany: [RepositoryUpdateManyWithWhereNestedInput!]
  deleteMany: [RepositoryScalarWhereInput!]
  upsert: [RepositoryUpsertWithWhereUniqueWithoutAppKeyInput!]
}

input RepositoryUpdateManyWithWhereNestedInput {
  where: RepositoryScalarWhereInput!
  data: RepositoryUpdateManyDataInput!
}

input RepositoryUpdateOneRequiredWithoutGameInput {
  create: RepositoryCreateWithoutGameInput
  connect: RepositoryWhereUniqueInput
  update: RepositoryUpdateWithoutGameDataInput
  upsert: RepositoryUpsertWithoutGameInput
}

input RepositoryUpdateOneRequiredWithoutWebhookEventsInput {
  create: RepositoryCreateWithoutWebhookEventsInput
  connect: RepositoryWhereUniqueInput
  update: RepositoryUpdateWithoutWebhookEventsDataInput
  upsert: RepositoryUpsertWithoutWebhookEventsInput
}

input RepositoryUpdateWithoutAddedByDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  appKey: AppKeyUpdateOneRequiredWithoutRepositoriesInput
  webhookEvents: GitHubWebhookEventUpdateManyWithoutRepositoryInput
  game: GameUpdateOneWithoutRepositoryInput
}

input RepositoryUpdateWithoutAppKeyDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserUpdateOneRequiredWithoutAddedRepositoriesInput
  webhookEvents: GitHubWebhookEventUpdateManyWithoutRepositoryInput
  game: GameUpdateOneWithoutRepositoryInput
}

input RepositoryUpdateWithoutGameDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserUpdateOneRequiredWithoutAddedRepositoriesInput
  appKey: AppKeyUpdateOneRequiredWithoutRepositoriesInput
  webhookEvents: GitHubWebhookEventUpdateManyWithoutRepositoryInput
}

input RepositoryUpdateWithoutWebhookEventsDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  description: String
  homepageUrl: String
  url: String
  owner: String
  isTracked: Boolean
  isFork: Boolean
  isLocked: Boolean
  isPrivate: Boolean
  isArchived: Boolean
  isDisabled: Boolean
  sshUrl: String
  stargazers: Int
  collaborators: Int
  watchers: Int
  issues: Int
  pullRequests: Int
  addedBy: UserUpdateOneRequiredWithoutAddedRepositoriesInput
  appKey: AppKeyUpdateOneRequiredWithoutRepositoriesInput
  game: GameUpdateOneWithoutRepositoryInput
}

input RepositoryUpdateWithWhereUniqueWithoutAddedByInput {
  where: RepositoryWhereUniqueInput!
  data: RepositoryUpdateWithoutAddedByDataInput!
}

input RepositoryUpdateWithWhereUniqueWithoutAppKeyInput {
  where: RepositoryWhereUniqueInput!
  data: RepositoryUpdateWithoutAppKeyDataInput!
}

input RepositoryUpsertWithoutGameInput {
  update: RepositoryUpdateWithoutGameDataInput!
  create: RepositoryCreateWithoutGameInput!
}

input RepositoryUpsertWithoutWebhookEventsInput {
  update: RepositoryUpdateWithoutWebhookEventsDataInput!
  create: RepositoryCreateWithoutWebhookEventsInput!
}

input RepositoryUpsertWithWhereUniqueWithoutAddedByInput {
  where: RepositoryWhereUniqueInput!
  update: RepositoryUpdateWithoutAddedByDataInput!
  create: RepositoryCreateWithoutAddedByInput!
}

input RepositoryUpsertWithWhereUniqueWithoutAppKeyInput {
  where: RepositoryWhereUniqueInput!
  update: RepositoryUpdateWithoutAppKeyDataInput!
  create: RepositoryCreateWithoutAppKeyInput!
}

input RepositoryWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  idExternal: String

  """All values that are not equal to given value."""
  idExternal_not: String

  """All values that are contained in given list."""
  idExternal_in: [String!]

  """All values that are not contained in given list."""
  idExternal_not_in: [String!]

  """All values less than the given value."""
  idExternal_lt: String

  """All values less than or equal the given value."""
  idExternal_lte: String

  """All values greater than the given value."""
  idExternal_gt: String

  """All values greater than or equal the given value."""
  idExternal_gte: String

  """All values containing the given string."""
  idExternal_contains: String

  """All values not containing the given string."""
  idExternal_not_contains: String

  """All values starting with the given string."""
  idExternal_starts_with: String

  """All values not starting with the given string."""
  idExternal_not_starts_with: String

  """All values ending with the given string."""
  idExternal_ends_with: String

  """All values not ending with the given string."""
  idExternal_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  homepageUrl: String

  """All values that are not equal to given value."""
  homepageUrl_not: String

  """All values that are contained in given list."""
  homepageUrl_in: [String!]

  """All values that are not contained in given list."""
  homepageUrl_not_in: [String!]

  """All values less than the given value."""
  homepageUrl_lt: String

  """All values less than or equal the given value."""
  homepageUrl_lte: String

  """All values greater than the given value."""
  homepageUrl_gt: String

  """All values greater than or equal the given value."""
  homepageUrl_gte: String

  """All values containing the given string."""
  homepageUrl_contains: String

  """All values not containing the given string."""
  homepageUrl_not_contains: String

  """All values starting with the given string."""
  homepageUrl_starts_with: String

  """All values not starting with the given string."""
  homepageUrl_not_starts_with: String

  """All values ending with the given string."""
  homepageUrl_ends_with: String

  """All values not ending with the given string."""
  homepageUrl_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  owner: String

  """All values that are not equal to given value."""
  owner_not: String

  """All values that are contained in given list."""
  owner_in: [String!]

  """All values that are not contained in given list."""
  owner_not_in: [String!]

  """All values less than the given value."""
  owner_lt: String

  """All values less than or equal the given value."""
  owner_lte: String

  """All values greater than the given value."""
  owner_gt: String

  """All values greater than or equal the given value."""
  owner_gte: String

  """All values containing the given string."""
  owner_contains: String

  """All values not containing the given string."""
  owner_not_contains: String

  """All values starting with the given string."""
  owner_starts_with: String

  """All values not starting with the given string."""
  owner_not_starts_with: String

  """All values ending with the given string."""
  owner_ends_with: String

  """All values not ending with the given string."""
  owner_not_ends_with: String
  isTracked: Boolean

  """All values that are not equal to given value."""
  isTracked_not: Boolean
  isFork: Boolean

  """All values that are not equal to given value."""
  isFork_not: Boolean
  isLocked: Boolean

  """All values that are not equal to given value."""
  isLocked_not: Boolean
  isPrivate: Boolean

  """All values that are not equal to given value."""
  isPrivate_not: Boolean
  isArchived: Boolean

  """All values that are not equal to given value."""
  isArchived_not: Boolean
  isDisabled: Boolean

  """All values that are not equal to given value."""
  isDisabled_not: Boolean
  sshUrl: String

  """All values that are not equal to given value."""
  sshUrl_not: String

  """All values that are contained in given list."""
  sshUrl_in: [String!]

  """All values that are not contained in given list."""
  sshUrl_not_in: [String!]

  """All values less than the given value."""
  sshUrl_lt: String

  """All values less than or equal the given value."""
  sshUrl_lte: String

  """All values greater than the given value."""
  sshUrl_gt: String

  """All values greater than or equal the given value."""
  sshUrl_gte: String

  """All values containing the given string."""
  sshUrl_contains: String

  """All values not containing the given string."""
  sshUrl_not_contains: String

  """All values starting with the given string."""
  sshUrl_starts_with: String

  """All values not starting with the given string."""
  sshUrl_not_starts_with: String

  """All values ending with the given string."""
  sshUrl_ends_with: String

  """All values not ending with the given string."""
  sshUrl_not_ends_with: String
  stargazers: Int

  """All values that are not equal to given value."""
  stargazers_not: Int

  """All values that are contained in given list."""
  stargazers_in: [Int!]

  """All values that are not contained in given list."""
  stargazers_not_in: [Int!]

  """All values less than the given value."""
  stargazers_lt: Int

  """All values less than or equal the given value."""
  stargazers_lte: Int

  """All values greater than the given value."""
  stargazers_gt: Int

  """All values greater than or equal the given value."""
  stargazers_gte: Int
  collaborators: Int

  """All values that are not equal to given value."""
  collaborators_not: Int

  """All values that are contained in given list."""
  collaborators_in: [Int!]

  """All values that are not contained in given list."""
  collaborators_not_in: [Int!]

  """All values less than the given value."""
  collaborators_lt: Int

  """All values less than or equal the given value."""
  collaborators_lte: Int

  """All values greater than the given value."""
  collaborators_gt: Int

  """All values greater than or equal the given value."""
  collaborators_gte: Int
  watchers: Int

  """All values that are not equal to given value."""
  watchers_not: Int

  """All values that are contained in given list."""
  watchers_in: [Int!]

  """All values that are not contained in given list."""
  watchers_not_in: [Int!]

  """All values less than the given value."""
  watchers_lt: Int

  """All values less than or equal the given value."""
  watchers_lte: Int

  """All values greater than the given value."""
  watchers_gt: Int

  """All values greater than or equal the given value."""
  watchers_gte: Int
  issues: Int

  """All values that are not equal to given value."""
  issues_not: Int

  """All values that are contained in given list."""
  issues_in: [Int!]

  """All values that are not contained in given list."""
  issues_not_in: [Int!]

  """All values less than the given value."""
  issues_lt: Int

  """All values less than or equal the given value."""
  issues_lte: Int

  """All values greater than the given value."""
  issues_gt: Int

  """All values greater than or equal the given value."""
  issues_gte: Int
  pullRequests: Int

  """All values that are not equal to given value."""
  pullRequests_not: Int

  """All values that are contained in given list."""
  pullRequests_in: [Int!]

  """All values that are not contained in given list."""
  pullRequests_not_in: [Int!]

  """All values less than the given value."""
  pullRequests_lt: Int

  """All values less than or equal the given value."""
  pullRequests_lte: Int

  """All values greater than the given value."""
  pullRequests_gt: Int

  """All values greater than or equal the given value."""
  pullRequests_gte: Int
  addedBy: UserWhereInput
  appKey: AppKeyWhereInput
  webhookEvents_every: GitHubWebhookEventWhereInput
  webhookEvents_some: GitHubWebhookEventWhereInput
  webhookEvents_none: GitHubWebhookEventWhereInput
  game: GameWhereInput
}

input RepositoryWhereUniqueInput {
  id: ID
  idExternal: String
  name: String
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  appKey(where: AppKeySubscriptionWhereInput): AppKeySubscriptionPayload
  repository(where: RepositorySubscriptionWhereInput): RepositorySubscriptionPayload
  gitHubWebhookEvent(where: GitHubWebhookEventSubscriptionWhereInput): GitHubWebhookEventSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  gitHubBranch(where: GitHubBranchSubscriptionWhereInput): GitHubBranchSubscriptionPayload
  gitHubReviewThread(where: GitHubReviewThreadSubscriptionWhereInput): GitHubReviewThreadSubscriptionPayload
  gitHubPullRequestReview(where: GitHubPullRequestReviewSubscriptionWhereInput): GitHubPullRequestReviewSubscriptionPayload
  gitHubComment(where: GitHubCommentSubscriptionWhereInput): GitHubCommentSubscriptionPayload
  gitHubReviewRequest(where: GitHubReviewRequestSubscriptionWhereInput): GitHubReviewRequestSubscriptionPayload
  gitHubTopic(where: GitHubTopicSubscriptionWhereInput): GitHubTopicSubscriptionPayload
  gitHubIssue(where: GitHubIssueSubscriptionWhereInput): GitHubIssueSubscriptionPayload
  gitHubRepository(where: GitHubRepositorySubscriptionWhereInput): GitHubRepositorySubscriptionPayload
  gitHubPullRequest(where: GitHubPullRequestSubscriptionWhereInput): GitHubPullRequestSubscriptionPayload
  gitHubCommit(where: GitHubCommitSubscriptionWhereInput): GitHubCommitSubscriptionPayload
  gitHubUser(where: GitHubUserSubscriptionWhereInput): GitHubUserSubscriptionPayload
  gitHubFileDiff(where: GitHubFileDiffSubscriptionWhereInput): GitHubFileDiffSubscriptionPayload
  gitHubLabel(where: GitHubLabelSubscriptionWhereInput): GitHubLabelSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  hash: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  role: Role
  keys(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppKey!]
  addedRepositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository!]
  gitLogin: String!
  gamesOwned(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  keys: AppKeyCreateManyWithoutUserInput
  addedRepositories: RepositoryCreateManyWithoutAddedByInput
  gamesOwned: GameCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutAddedRepositoriesInput {
  create: UserCreateWithoutAddedRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGamesOwnedInput {
  create: UserCreateWithoutGamesOwnedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutKeysInput {
  create: UserCreateWithoutKeysInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAddedRepositoriesInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  keys: AppKeyCreateManyWithoutUserInput
  gamesOwned: GameCreateManyWithoutOwnerInput
}

input UserCreateWithoutGamesOwnedInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  keys: AppKeyCreateManyWithoutUserInput
  addedRepositories: RepositoryCreateManyWithoutAddedByInput
}

input UserCreateWithoutKeysInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  addedRepositories: RepositoryCreateManyWithoutAddedByInput
  gamesOwned: GameCreateManyWithoutOwnerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  hash_ASC
  hash_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  gitLogin_ASC
  gitLogin_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  hash: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  role: Role
  gitLogin: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  keys: AppKeyUpdateManyWithoutUserInput
  addedRepositories: RepositoryUpdateManyWithoutAddedByInput
  gamesOwned: GameUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
}

input UserUpdateOneRequiredWithoutAddedRepositoriesInput {
  create: UserCreateWithoutAddedRepositoriesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutAddedRepositoriesDataInput
  upsert: UserUpsertWithoutAddedRepositoriesInput
}

input UserUpdateOneRequiredWithoutGamesOwnedInput {
  create: UserCreateWithoutGamesOwnedInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutGamesOwnedDataInput
  upsert: UserUpsertWithoutGamesOwnedInput
}

input UserUpdateOneRequiredWithoutKeysInput {
  create: UserCreateWithoutKeysInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutKeysDataInput
  upsert: UserUpsertWithoutKeysInput
}

input UserUpdateWithoutAddedRepositoriesDataInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  keys: AppKeyUpdateManyWithoutUserInput
  gamesOwned: GameUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutGamesOwnedDataInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  keys: AppKeyUpdateManyWithoutUserInput
  addedRepositories: RepositoryUpdateManyWithoutAddedByInput
}

input UserUpdateWithoutKeysDataInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  addedRepositories: RepositoryUpdateManyWithoutAddedByInput
  gamesOwned: GameUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutAddedRepositoriesInput {
  update: UserUpdateWithoutAddedRepositoriesDataInput!
  create: UserCreateWithoutAddedRepositoriesInput!
}

input UserUpsertWithoutGamesOwnedInput {
  update: UserUpdateWithoutGamesOwnedDataInput!
  create: UserCreateWithoutGamesOwnedInput!
}

input UserUpsertWithoutKeysInput {
  update: UserUpdateWithoutKeysDataInput!
  create: UserCreateWithoutKeysInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  hash: String

  """All values that are not equal to given value."""
  hash_not: String

  """All values that are contained in given list."""
  hash_in: [String!]

  """All values that are not contained in given list."""
  hash_not_in: [String!]

  """All values less than the given value."""
  hash_lt: String

  """All values less than or equal the given value."""
  hash_lte: String

  """All values greater than the given value."""
  hash_gt: String

  """All values greater than or equal the given value."""
  hash_gte: String

  """All values containing the given string."""
  hash_contains: String

  """All values not containing the given string."""
  hash_not_contains: String

  """All values starting with the given string."""
  hash_starts_with: String

  """All values not starting with the given string."""
  hash_not_starts_with: String

  """All values ending with the given string."""
  hash_ends_with: String

  """All values not ending with the given string."""
  hash_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  gitLogin: String

  """All values that are not equal to given value."""
  gitLogin_not: String

  """All values that are contained in given list."""
  gitLogin_in: [String!]

  """All values that are not contained in given list."""
  gitLogin_not_in: [String!]

  """All values less than the given value."""
  gitLogin_lt: String

  """All values less than or equal the given value."""
  gitLogin_lte: String

  """All values greater than the given value."""
  gitLogin_gt: String

  """All values greater than or equal the given value."""
  gitLogin_gte: String

  """All values containing the given string."""
  gitLogin_contains: String

  """All values not containing the given string."""
  gitLogin_not_contains: String

  """All values starting with the given string."""
  gitLogin_starts_with: String

  """All values not starting with the given string."""
  gitLogin_not_starts_with: String

  """All values ending with the given string."""
  gitLogin_ends_with: String

  """All values not ending with the given string."""
  gitLogin_not_ends_with: String
  keys_every: AppKeyWhereInput
  keys_some: AppKeyWhereInput
  keys_none: AppKeyWhereInput
  addedRepositories_every: RepositoryWhereInput
  addedRepositories_some: RepositoryWhereInput
  addedRepositories_none: RepositoryWhereInput
  gamesOwned_every: GameWhereInput
  gamesOwned_some: GameWhereInput
  gamesOwned_none: GameWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`;

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({ typeDefs });

/**
 * Types
 */

export type AppKeyOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'key_ASC'
	| 'key_DESC'
	| 'name_ASC'
	| 'name_DESC';

export type GameOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC'
	| 'title_ASC'
	| 'title_DESC'
	| 'type_ASC'
	| 'type_DESC';

export type GitHubBranchOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'merged_ASC'
	| 'merged_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubCommentOrderByInput =
	| 'bodyText_ASC'
	| 'bodyText_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubCommitOrderByInput =
	| 'additions_ASC'
	| 'additions_DESC'
	| 'authedDate_ASC'
	| 'authedDate_DESC'
	| 'changedFiles_ASC'
	| 'changedFiles_DESC'
	| 'commitUrl_ASC'
	| 'commitUrl_DESC'
	| 'deletions_ASC'
	| 'deletions_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'message_ASC'
	| 'message_DESC'
	| 'messageHeadline_ASC'
	| 'messageHeadline_DESC'
	| 'pushedDate_ASC'
	| 'pushedDate_DESC'
	| 'treeUrl_ASC'
	| 'treeUrl_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubFileDiffOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'additions_ASC'
	| 'additions_DESC'
	| 'deletions_ASC'
	| 'deletions_DESC'
	| 'filepath_ASC'
	| 'filepath_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubIssueOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'bodyText_ASC'
	| 'bodyText_DESC'
	| 'closed_ASC'
	| 'closed_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'lastEditedAt_ASC'
	| 'lastEditedAt_DESC'
	| 'locked_ASC'
	| 'locked_DESC'
	| 'number_ASC'
	| 'number_DESC'
	| 'state_ASC'
	| 'state_DESC'
	| 'title_ASC'
	| 'title_DESC'
	| 'updatedAtExternal_ASC'
	| 'updatedAtExternal_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubLabelOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'color_ASC'
	| 'color_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'description_ASC'
	| 'description_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'updatedAtExternal_ASC'
	| 'updatedAtExternal_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubPullRequestOrderByInput =
	| 'additions_ASC'
	| 'additions_DESC'
	| 'bodyText_ASC'
	| 'bodyText_DESC'
	| 'changedFiles_ASC'
	| 'changedFiles_DESC'
	| 'closed_ASC'
	| 'closed_DESC'
	| 'closedAt_ASC'
	| 'closedAt_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'deletions_ASC'
	| 'deletions_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'isCrossRepository_ASC'
	| 'isCrossRepository_DESC'
	| 'locked_ASC'
	| 'locked_DESC'
	| 'merged_ASC'
	| 'merged_DESC'
	| 'mergedAt_ASC'
	| 'mergedAt_DESC'
	| 'number_ASC'
	| 'number_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubPullRequestReviewOrderByInput =
	| 'bodyText_ASC'
	| 'bodyText_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'lastEditeddAt_ASC'
	| 'lastEditeddAt_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'state_ASC'
	| 'state_DESC'
	| 'submittedAt_ASC'
	| 'submittedAt_DESC'
	| 'updatedAtExternal_ASC'
	| 'updatedAtExternal_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubRepositoryOrderByInput =
	| 'description_ASC'
	| 'description_DESC'
	| 'hasBranchRules_ASC'
	| 'hasBranchRules_DESC'
	| 'hasContributingGuidelines_ASC'
	| 'hasContributingGuidelines_DESC'
	| 'hasPullRequestTemplate_ASC'
	| 'hasPullRequestTemplate_DESC'
	| 'hasReadMe_ASC'
	| 'hasReadMe_DESC'
	| 'hasWiki_ASC'
	| 'hasWiki_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'isArchived_ASC'
	| 'isArchived_DESC'
	| 'isDisabled_ASC'
	| 'isDisabled_DESC'
	| 'isFork_ASC'
	| 'isFork_DESC'
	| 'isLocked_ASC'
	| 'isLocked_DESC'
	| 'isPrivate_ASC'
	| 'isPrivate_DESC'
	| 'license_ASC'
	| 'license_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'primaryLanguage_ASC'
	| 'primaryLanguage_DESC'
	| 'sshUrl_ASC'
	| 'sshUrl_DESC'
	| 'updatedAtExternal_ASC'
	| 'updatedAtExternal_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubReviewRequestOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubReviewThreadOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'isResolved_ASC'
	| 'isResolved_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubTopicOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubUserOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'login_ASC'
	| 'login_DESC'
	| 'avatarUrl_ASC'
	| 'avatarUrl_DESC'
	| 'bio_ASC'
	| 'bio_DESC'
	| 'company_ASC'
	| 'company_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'email_ASC'
	| 'email_DESC'
	| 'isBountyHunter_ASC'
	| 'isBountyHunter_DESC'
	| 'isCampusExpert_ASC'
	| 'isCampusExpert_DESC'
	| 'isDeveloperProgramMember_ASC'
	| 'isDeveloperProgramMember_DESC'
	| 'isEmployee_ASC'
	| 'isEmployee_DESC'
	| 'isHireable_ASC'
	| 'isHireable_DESC'
	| 'isSiteAdmin_ASC'
	| 'isSiteAdmin_DESC'
	| 'isViewer_ASC'
	| 'isViewer_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type GitHubWebhookEventOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'eventType_ASC'
	| 'eventType_DESC'
	| 'action_ASC'
	| 'action_DESC'
	| 'sender_ASC'
	| 'sender_DESC';

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export type PrismaDatabase = 'default';

export type RepositoryOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'idExternal_ASC'
	| 'idExternal_DESC'
	| 'createdAtExternal_ASC'
	| 'createdAtExternal_DESC'
	| 'updatedAtExternal_ASC'
	| 'updatedAtExternal_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'description_ASC'
	| 'description_DESC'
	| 'homepageUrl_ASC'
	| 'homepageUrl_DESC'
	| 'url_ASC'
	| 'url_DESC'
	| 'owner_ASC'
	| 'owner_DESC'
	| 'isTracked_ASC'
	| 'isTracked_DESC'
	| 'isFork_ASC'
	| 'isFork_DESC'
	| 'isLocked_ASC'
	| 'isLocked_DESC'
	| 'isPrivate_ASC'
	| 'isPrivate_DESC'
	| 'isArchived_ASC'
	| 'isArchived_DESC'
	| 'isDisabled_ASC'
	| 'isDisabled_DESC'
	| 'sshUrl_ASC'
	| 'sshUrl_DESC'
	| 'stargazers_ASC'
	| 'stargazers_DESC'
	| 'collaborators_ASC'
	| 'collaborators_DESC'
	| 'watchers_ASC'
	| 'watchers_DESC'
	| 'issues_ASC'
	| 'issues_DESC'
	| 'pullRequests_ASC'
	| 'pullRequests_DESC';

export type Role = 'USER' | 'ADMIN';

export type UserOrderByInput =
	| 'id_ASC'
	| 'id_DESC'
	| 'email_ASC'
	| 'email_DESC'
	| 'hash_ASC'
	| 'hash_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'role_ASC'
	| 'role_DESC'
	| 'gitLogin_ASC'
	| 'gitLogin_DESC';

export interface AppKeyCreateInput {
	id?: ID_Input | null;
	key: String;
	name?: String | null;
	user: UserCreateOneWithoutKeysInput;
	repositories?: RepositoryCreateManyWithoutAppKeyInput | null;
}

export interface AppKeyCreateManyWithoutUserInput {
	create?: AppKeyCreateWithoutUserInput[] | AppKeyCreateWithoutUserInput | null;
	connect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null;
}

export interface AppKeyCreateOneWithoutRepositoriesInput {
	create?: AppKeyCreateWithoutRepositoriesInput | null;
	connect?: AppKeyWhereUniqueInput | null;
}

export interface AppKeyCreateWithoutRepositoriesInput {
	id?: ID_Input | null;
	key: String;
	name?: String | null;
	user: UserCreateOneWithoutKeysInput;
}

export interface AppKeyCreateWithoutUserInput {
	id?: ID_Input | null;
	key: String;
	name?: String | null;
	repositories?: RepositoryCreateManyWithoutAppKeyInput | null;
}

export interface AppKeyScalarWhereInput {
	AND?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null;
	OR?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null;
	NOT?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	key?: String | null;
	key_not?: String | null;
	key_in?: String[] | String | null;
	key_not_in?: String[] | String | null;
	key_lt?: String | null;
	key_lte?: String | null;
	key_gt?: String | null;
	key_gte?: String | null;
	key_contains?: String | null;
	key_not_contains?: String | null;
	key_starts_with?: String | null;
	key_not_starts_with?: String | null;
	key_ends_with?: String | null;
	key_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
}

export interface AppKeySubscriptionWhereInput {
	AND?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null;
	OR?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null;
	NOT?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: AppKeyWhereInput | null;
}

export interface AppKeyUpdateInput {
	key?: String | null;
	name?: String | null;
	user?: UserUpdateOneRequiredWithoutKeysInput | null;
	repositories?: RepositoryUpdateManyWithoutAppKeyInput | null;
}

export interface AppKeyUpdateManyDataInput {
	key?: String | null;
	name?: String | null;
}

export interface AppKeyUpdateManyMutationInput {
	key?: String | null;
	name?: String | null;
}

export interface AppKeyUpdateManyWithoutUserInput {
	create?: AppKeyCreateWithoutUserInput[] | AppKeyCreateWithoutUserInput | null;
	connect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null;
	set?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null;
	disconnect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null;
	delete?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null;
	update?:
		| AppKeyUpdateWithWhereUniqueWithoutUserInput[]
		| AppKeyUpdateWithWhereUniqueWithoutUserInput
		| null;
	updateMany?:
		| AppKeyUpdateManyWithWhereNestedInput[]
		| AppKeyUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null;
	upsert?:
		| AppKeyUpsertWithWhereUniqueWithoutUserInput[]
		| AppKeyUpsertWithWhereUniqueWithoutUserInput
		| null;
}

export interface AppKeyUpdateManyWithWhereNestedInput {
	where: AppKeyScalarWhereInput;
	data: AppKeyUpdateManyDataInput;
}

export interface AppKeyUpdateOneRequiredWithoutRepositoriesInput {
	create?: AppKeyCreateWithoutRepositoriesInput | null;
	connect?: AppKeyWhereUniqueInput | null;
	update?: AppKeyUpdateWithoutRepositoriesDataInput | null;
	upsert?: AppKeyUpsertWithoutRepositoriesInput | null;
}

export interface AppKeyUpdateWithoutRepositoriesDataInput {
	key?: String | null;
	name?: String | null;
	user?: UserUpdateOneRequiredWithoutKeysInput | null;
}

export interface AppKeyUpdateWithoutUserDataInput {
	key?: String | null;
	name?: String | null;
	repositories?: RepositoryUpdateManyWithoutAppKeyInput | null;
}

export interface AppKeyUpdateWithWhereUniqueWithoutUserInput {
	where: AppKeyWhereUniqueInput;
	data: AppKeyUpdateWithoutUserDataInput;
}

export interface AppKeyUpsertWithoutRepositoriesInput {
	update: AppKeyUpdateWithoutRepositoriesDataInput;
	create: AppKeyCreateWithoutRepositoriesInput;
}

export interface AppKeyUpsertWithWhereUniqueWithoutUserInput {
	where: AppKeyWhereUniqueInput;
	update: AppKeyUpdateWithoutUserDataInput;
	create: AppKeyCreateWithoutUserInput;
}

export interface AppKeyWhereInput {
	AND?: AppKeyWhereInput[] | AppKeyWhereInput | null;
	OR?: AppKeyWhereInput[] | AppKeyWhereInput | null;
	NOT?: AppKeyWhereInput[] | AppKeyWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	key?: String | null;
	key_not?: String | null;
	key_in?: String[] | String | null;
	key_not_in?: String[] | String | null;
	key_lt?: String | null;
	key_lte?: String | null;
	key_gt?: String | null;
	key_gte?: String | null;
	key_contains?: String | null;
	key_not_contains?: String | null;
	key_starts_with?: String | null;
	key_not_starts_with?: String | null;
	key_ends_with?: String | null;
	key_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	user?: UserWhereInput | null;
	repositories_every?: RepositoryWhereInput | null;
	repositories_some?: RepositoryWhereInput | null;
	repositories_none?: RepositoryWhereInput | null;
}

export interface AppKeyWhereUniqueInput {
	id?: ID_Input | null;
	key?: String | null;
}

export interface GameCreateInput {
	id?: ID_Input | null;
	title: String;
	type: String;
	repository: RepositoryCreateOneWithoutGameInput;
	owner: UserCreateOneWithoutGamesOwnedInput;
}

export interface GameCreateManyWithoutOwnerInput {
	create?: GameCreateWithoutOwnerInput[] | GameCreateWithoutOwnerInput | null;
	connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
}

export interface GameCreateOneWithoutRepositoryInput {
	create?: GameCreateWithoutRepositoryInput | null;
	connect?: GameWhereUniqueInput | null;
}

export interface GameCreateWithoutOwnerInput {
	id?: ID_Input | null;
	title: String;
	type: String;
	repository: RepositoryCreateOneWithoutGameInput;
}

export interface GameCreateWithoutRepositoryInput {
	id?: ID_Input | null;
	title: String;
	type: String;
	owner: UserCreateOneWithoutGamesOwnedInput;
}

export interface GameScalarWhereInput {
	AND?: GameScalarWhereInput[] | GameScalarWhereInput | null;
	OR?: GameScalarWhereInput[] | GameScalarWhereInput | null;
	NOT?: GameScalarWhereInput[] | GameScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	title?: String | null;
	title_not?: String | null;
	title_in?: String[] | String | null;
	title_not_in?: String[] | String | null;
	title_lt?: String | null;
	title_lte?: String | null;
	title_gt?: String | null;
	title_gte?: String | null;
	title_contains?: String | null;
	title_not_contains?: String | null;
	title_starts_with?: String | null;
	title_not_starts_with?: String | null;
	title_ends_with?: String | null;
	title_not_ends_with?: String | null;
	type?: String | null;
	type_not?: String | null;
	type_in?: String[] | String | null;
	type_not_in?: String[] | String | null;
	type_lt?: String | null;
	type_lte?: String | null;
	type_gt?: String | null;
	type_gte?: String | null;
	type_contains?: String | null;
	type_not_contains?: String | null;
	type_starts_with?: String | null;
	type_not_starts_with?: String | null;
	type_ends_with?: String | null;
	type_not_ends_with?: String | null;
}

export interface GameSubscriptionWhereInput {
	AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
	OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
	NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GameWhereInput | null;
}

export interface GameUpdateInput {
	title?: String | null;
	type?: String | null;
	repository?: RepositoryUpdateOneRequiredWithoutGameInput | null;
	owner?: UserUpdateOneRequiredWithoutGamesOwnedInput | null;
}

export interface GameUpdateManyDataInput {
	title?: String | null;
	type?: String | null;
}

export interface GameUpdateManyMutationInput {
	title?: String | null;
	type?: String | null;
}

export interface GameUpdateManyWithoutOwnerInput {
	create?: GameCreateWithoutOwnerInput[] | GameCreateWithoutOwnerInput | null;
	connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
	set?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
	disconnect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
	delete?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
	update?:
		| GameUpdateWithWhereUniqueWithoutOwnerInput[]
		| GameUpdateWithWhereUniqueWithoutOwnerInput
		| null;
	updateMany?: GameUpdateManyWithWhereNestedInput[] | GameUpdateManyWithWhereNestedInput | null;
	deleteMany?: GameScalarWhereInput[] | GameScalarWhereInput | null;
	upsert?:
		| GameUpsertWithWhereUniqueWithoutOwnerInput[]
		| GameUpsertWithWhereUniqueWithoutOwnerInput
		| null;
}

export interface GameUpdateManyWithWhereNestedInput {
	where: GameScalarWhereInput;
	data: GameUpdateManyDataInput;
}

export interface GameUpdateOneWithoutRepositoryInput {
	create?: GameCreateWithoutRepositoryInput | null;
	connect?: GameWhereUniqueInput | null;
	disconnect?: Boolean | null;
	delete?: Boolean | null;
	update?: GameUpdateWithoutRepositoryDataInput | null;
	upsert?: GameUpsertWithoutRepositoryInput | null;
}

export interface GameUpdateWithoutOwnerDataInput {
	title?: String | null;
	type?: String | null;
	repository?: RepositoryUpdateOneRequiredWithoutGameInput | null;
}

export interface GameUpdateWithoutRepositoryDataInput {
	title?: String | null;
	type?: String | null;
	owner?: UserUpdateOneRequiredWithoutGamesOwnedInput | null;
}

export interface GameUpdateWithWhereUniqueWithoutOwnerInput {
	where: GameWhereUniqueInput;
	data: GameUpdateWithoutOwnerDataInput;
}

export interface GameUpsertWithoutRepositoryInput {
	update: GameUpdateWithoutRepositoryDataInput;
	create: GameCreateWithoutRepositoryInput;
}

export interface GameUpsertWithWhereUniqueWithoutOwnerInput {
	where: GameWhereUniqueInput;
	update: GameUpdateWithoutOwnerDataInput;
	create: GameCreateWithoutOwnerInput;
}

export interface GameWhereInput {
	AND?: GameWhereInput[] | GameWhereInput | null;
	OR?: GameWhereInput[] | GameWhereInput | null;
	NOT?: GameWhereInput[] | GameWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	title?: String | null;
	title_not?: String | null;
	title_in?: String[] | String | null;
	title_not_in?: String[] | String | null;
	title_lt?: String | null;
	title_lte?: String | null;
	title_gt?: String | null;
	title_gte?: String | null;
	title_contains?: String | null;
	title_not_contains?: String | null;
	title_starts_with?: String | null;
	title_not_starts_with?: String | null;
	title_ends_with?: String | null;
	title_not_ends_with?: String | null;
	type?: String | null;
	type_not?: String | null;
	type_in?: String[] | String | null;
	type_not_in?: String[] | String | null;
	type_lt?: String | null;
	type_lte?: String | null;
	type_gt?: String | null;
	type_gte?: String | null;
	type_contains?: String | null;
	type_not_contains?: String | null;
	type_starts_with?: String | null;
	type_not_starts_with?: String | null;
	type_ends_with?: String | null;
	type_not_ends_with?: String | null;
	repository?: RepositoryWhereInput | null;
	owner?: UserWhereInput | null;
}

export interface GameWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubBranchCreateInput {
	id?: ID_Input | null;
	name: String;
	merged?: Boolean | null;
	commits?: GitHubCommitCreateManyInput | null;
	pullRequest?: GitHubPullRequestCreateOneInput | null;
}

export interface GitHubBranchSubscriptionWhereInput {
	AND?: GitHubBranchSubscriptionWhereInput[] | GitHubBranchSubscriptionWhereInput | null;
	OR?: GitHubBranchSubscriptionWhereInput[] | GitHubBranchSubscriptionWhereInput | null;
	NOT?: GitHubBranchSubscriptionWhereInput[] | GitHubBranchSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubBranchWhereInput | null;
}

export interface GitHubBranchUpdateInput {
	name?: String | null;
	merged?: Boolean | null;
	commits?: GitHubCommitUpdateManyInput | null;
	pullRequest?: GitHubPullRequestUpdateOneInput | null;
}

export interface GitHubBranchUpdateManyMutationInput {
	name?: String | null;
	merged?: Boolean | null;
}

export interface GitHubBranchWhereInput {
	AND?: GitHubBranchWhereInput[] | GitHubBranchWhereInput | null;
	OR?: GitHubBranchWhereInput[] | GitHubBranchWhereInput | null;
	NOT?: GitHubBranchWhereInput[] | GitHubBranchWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	merged?: Boolean | null;
	merged_not?: Boolean | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	commits_every?: GitHubCommitWhereInput | null;
	commits_some?: GitHubCommitWhereInput | null;
	commits_none?: GitHubCommitWhereInput | null;
	pullRequest?: GitHubPullRequestWhereInput | null;
}

export interface GitHubBranchWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubCommentCreateInput {
	bodyText: String;
	createdAtExternal: DateTime;
	id?: ID_Input | null;
	url: String;
	author: GitHubUserCreateOneInput;
}

export interface GitHubCommentCreateManyInput {
	create?: GitHubCommentCreateInput[] | GitHubCommentCreateInput | null;
	connect?: GitHubCommentWhereUniqueInput[] | GitHubCommentWhereUniqueInput | null;
}

export interface GitHubCommentScalarWhereInput {
	AND?: GitHubCommentScalarWhereInput[] | GitHubCommentScalarWhereInput | null;
	OR?: GitHubCommentScalarWhereInput[] | GitHubCommentScalarWhereInput | null;
	NOT?: GitHubCommentScalarWhereInput[] | GitHubCommentScalarWhereInput | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubCommentSubscriptionWhereInput {
	AND?: GitHubCommentSubscriptionWhereInput[] | GitHubCommentSubscriptionWhereInput | null;
	OR?: GitHubCommentSubscriptionWhereInput[] | GitHubCommentSubscriptionWhereInput | null;
	NOT?: GitHubCommentSubscriptionWhereInput[] | GitHubCommentSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubCommentWhereInput | null;
}

export interface GitHubCommentUpdateDataInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	url?: String | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubCommentUpdateInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	url?: String | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubCommentUpdateManyDataInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubCommentUpdateManyInput {
	create?: GitHubCommentCreateInput[] | GitHubCommentCreateInput | null;
	connect?: GitHubCommentWhereUniqueInput[] | GitHubCommentWhereUniqueInput | null;
	set?: GitHubCommentWhereUniqueInput[] | GitHubCommentWhereUniqueInput | null;
	disconnect?: GitHubCommentWhereUniqueInput[] | GitHubCommentWhereUniqueInput | null;
	delete?: GitHubCommentWhereUniqueInput[] | GitHubCommentWhereUniqueInput | null;
	update?:
		| GitHubCommentUpdateWithWhereUniqueNestedInput[]
		| GitHubCommentUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubCommentUpdateManyWithWhereNestedInput[]
		| GitHubCommentUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubCommentScalarWhereInput[] | GitHubCommentScalarWhereInput | null;
	upsert?:
		| GitHubCommentUpsertWithWhereUniqueNestedInput[]
		| GitHubCommentUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubCommentUpdateManyMutationInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubCommentUpdateManyWithWhereNestedInput {
	where: GitHubCommentScalarWhereInput;
	data: GitHubCommentUpdateManyDataInput;
}

export interface GitHubCommentUpdateWithWhereUniqueNestedInput {
	where: GitHubCommentWhereUniqueInput;
	data: GitHubCommentUpdateDataInput;
}

export interface GitHubCommentUpsertWithWhereUniqueNestedInput {
	where: GitHubCommentWhereUniqueInput;
	update: GitHubCommentUpdateDataInput;
	create: GitHubCommentCreateInput;
}

export interface GitHubCommentWhereInput {
	AND?: GitHubCommentWhereInput[] | GitHubCommentWhereInput | null;
	OR?: GitHubCommentWhereInput[] | GitHubCommentWhereInput | null;
	NOT?: GitHubCommentWhereInput[] | GitHubCommentWhereInput | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	author?: GitHubUserWhereInput | null;
}

export interface GitHubCommentWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubCommitCreateInput {
	additions: Int;
	authedDate: DateTime;
	changedFiles: Int;
	commitUrl: String;
	deletions: Int;
	id?: ID_Input | null;
	message: String;
	messageHeadline: String;
	pushedDate: DateTime;
	treeUrl: String;
	url: String;
	associatedPullRequests?: GitHubPullRequestCreateManyInput | null;
	author: GitHubUserCreateOneInput;
	committer: GitHubUserCreateOneInput;
}

export interface GitHubCommitCreateManyInput {
	create?: GitHubCommitCreateInput[] | GitHubCommitCreateInput | null;
	connect?: GitHubCommitWhereUniqueInput[] | GitHubCommitWhereUniqueInput | null;
}

export interface GitHubCommitScalarWhereInput {
	AND?: GitHubCommitScalarWhereInput[] | GitHubCommitScalarWhereInput | null;
	OR?: GitHubCommitScalarWhereInput[] | GitHubCommitScalarWhereInput | null;
	NOT?: GitHubCommitScalarWhereInput[] | GitHubCommitScalarWhereInput | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	authedDate?: DateTime | null;
	authedDate_not?: DateTime | null;
	authedDate_in?: DateTime[] | DateTime | null;
	authedDate_not_in?: DateTime[] | DateTime | null;
	authedDate_lt?: DateTime | null;
	authedDate_lte?: DateTime | null;
	authedDate_gt?: DateTime | null;
	authedDate_gte?: DateTime | null;
	changedFiles?: Int | null;
	changedFiles_not?: Int | null;
	changedFiles_in?: Int[] | Int | null;
	changedFiles_not_in?: Int[] | Int | null;
	changedFiles_lt?: Int | null;
	changedFiles_lte?: Int | null;
	changedFiles_gt?: Int | null;
	changedFiles_gte?: Int | null;
	commitUrl?: String | null;
	commitUrl_not?: String | null;
	commitUrl_in?: String[] | String | null;
	commitUrl_not_in?: String[] | String | null;
	commitUrl_lt?: String | null;
	commitUrl_lte?: String | null;
	commitUrl_gt?: String | null;
	commitUrl_gte?: String | null;
	commitUrl_contains?: String | null;
	commitUrl_not_contains?: String | null;
	commitUrl_starts_with?: String | null;
	commitUrl_not_starts_with?: String | null;
	commitUrl_ends_with?: String | null;
	commitUrl_not_ends_with?: String | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	message?: String | null;
	message_not?: String | null;
	message_in?: String[] | String | null;
	message_not_in?: String[] | String | null;
	message_lt?: String | null;
	message_lte?: String | null;
	message_gt?: String | null;
	message_gte?: String | null;
	message_contains?: String | null;
	message_not_contains?: String | null;
	message_starts_with?: String | null;
	message_not_starts_with?: String | null;
	message_ends_with?: String | null;
	message_not_ends_with?: String | null;
	messageHeadline?: String | null;
	messageHeadline_not?: String | null;
	messageHeadline_in?: String[] | String | null;
	messageHeadline_not_in?: String[] | String | null;
	messageHeadline_lt?: String | null;
	messageHeadline_lte?: String | null;
	messageHeadline_gt?: String | null;
	messageHeadline_gte?: String | null;
	messageHeadline_contains?: String | null;
	messageHeadline_not_contains?: String | null;
	messageHeadline_starts_with?: String | null;
	messageHeadline_not_starts_with?: String | null;
	messageHeadline_ends_with?: String | null;
	messageHeadline_not_ends_with?: String | null;
	pushedDate?: DateTime | null;
	pushedDate_not?: DateTime | null;
	pushedDate_in?: DateTime[] | DateTime | null;
	pushedDate_not_in?: DateTime[] | DateTime | null;
	pushedDate_lt?: DateTime | null;
	pushedDate_lte?: DateTime | null;
	pushedDate_gt?: DateTime | null;
	pushedDate_gte?: DateTime | null;
	treeUrl?: String | null;
	treeUrl_not?: String | null;
	treeUrl_in?: String[] | String | null;
	treeUrl_not_in?: String[] | String | null;
	treeUrl_lt?: String | null;
	treeUrl_lte?: String | null;
	treeUrl_gt?: String | null;
	treeUrl_gte?: String | null;
	treeUrl_contains?: String | null;
	treeUrl_not_contains?: String | null;
	treeUrl_starts_with?: String | null;
	treeUrl_not_starts_with?: String | null;
	treeUrl_ends_with?: String | null;
	treeUrl_not_ends_with?: String | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubCommitSubscriptionWhereInput {
	AND?: GitHubCommitSubscriptionWhereInput[] | GitHubCommitSubscriptionWhereInput | null;
	OR?: GitHubCommitSubscriptionWhereInput[] | GitHubCommitSubscriptionWhereInput | null;
	NOT?: GitHubCommitSubscriptionWhereInput[] | GitHubCommitSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubCommitWhereInput | null;
}

export interface GitHubCommitUpdateDataInput {
	additions?: Int | null;
	authedDate?: DateTime | null;
	changedFiles?: Int | null;
	commitUrl?: String | null;
	deletions?: Int | null;
	message?: String | null;
	messageHeadline?: String | null;
	pushedDate?: DateTime | null;
	treeUrl?: String | null;
	url?: String | null;
	associatedPullRequests?: GitHubPullRequestUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	committer?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubCommitUpdateInput {
	additions?: Int | null;
	authedDate?: DateTime | null;
	changedFiles?: Int | null;
	commitUrl?: String | null;
	deletions?: Int | null;
	message?: String | null;
	messageHeadline?: String | null;
	pushedDate?: DateTime | null;
	treeUrl?: String | null;
	url?: String | null;
	associatedPullRequests?: GitHubPullRequestUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	committer?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubCommitUpdateManyDataInput {
	additions?: Int | null;
	authedDate?: DateTime | null;
	changedFiles?: Int | null;
	commitUrl?: String | null;
	deletions?: Int | null;
	message?: String | null;
	messageHeadline?: String | null;
	pushedDate?: DateTime | null;
	treeUrl?: String | null;
	url?: String | null;
}

export interface GitHubCommitUpdateManyInput {
	create?: GitHubCommitCreateInput[] | GitHubCommitCreateInput | null;
	connect?: GitHubCommitWhereUniqueInput[] | GitHubCommitWhereUniqueInput | null;
	set?: GitHubCommitWhereUniqueInput[] | GitHubCommitWhereUniqueInput | null;
	disconnect?: GitHubCommitWhereUniqueInput[] | GitHubCommitWhereUniqueInput | null;
	delete?: GitHubCommitWhereUniqueInput[] | GitHubCommitWhereUniqueInput | null;
	update?:
		| GitHubCommitUpdateWithWhereUniqueNestedInput[]
		| GitHubCommitUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubCommitUpdateManyWithWhereNestedInput[]
		| GitHubCommitUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubCommitScalarWhereInput[] | GitHubCommitScalarWhereInput | null;
	upsert?:
		| GitHubCommitUpsertWithWhereUniqueNestedInput[]
		| GitHubCommitUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubCommitUpdateManyMutationInput {
	additions?: Int | null;
	authedDate?: DateTime | null;
	changedFiles?: Int | null;
	commitUrl?: String | null;
	deletions?: Int | null;
	message?: String | null;
	messageHeadline?: String | null;
	pushedDate?: DateTime | null;
	treeUrl?: String | null;
	url?: String | null;
}

export interface GitHubCommitUpdateManyWithWhereNestedInput {
	where: GitHubCommitScalarWhereInput;
	data: GitHubCommitUpdateManyDataInput;
}

export interface GitHubCommitUpdateWithWhereUniqueNestedInput {
	where: GitHubCommitWhereUniqueInput;
	data: GitHubCommitUpdateDataInput;
}

export interface GitHubCommitUpsertWithWhereUniqueNestedInput {
	where: GitHubCommitWhereUniqueInput;
	update: GitHubCommitUpdateDataInput;
	create: GitHubCommitCreateInput;
}

export interface GitHubCommitWhereInput {
	AND?: GitHubCommitWhereInput[] | GitHubCommitWhereInput | null;
	OR?: GitHubCommitWhereInput[] | GitHubCommitWhereInput | null;
	NOT?: GitHubCommitWhereInput[] | GitHubCommitWhereInput | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	authedDate?: DateTime | null;
	authedDate_not?: DateTime | null;
	authedDate_in?: DateTime[] | DateTime | null;
	authedDate_not_in?: DateTime[] | DateTime | null;
	authedDate_lt?: DateTime | null;
	authedDate_lte?: DateTime | null;
	authedDate_gt?: DateTime | null;
	authedDate_gte?: DateTime | null;
	changedFiles?: Int | null;
	changedFiles_not?: Int | null;
	changedFiles_in?: Int[] | Int | null;
	changedFiles_not_in?: Int[] | Int | null;
	changedFiles_lt?: Int | null;
	changedFiles_lte?: Int | null;
	changedFiles_gt?: Int | null;
	changedFiles_gte?: Int | null;
	commitUrl?: String | null;
	commitUrl_not?: String | null;
	commitUrl_in?: String[] | String | null;
	commitUrl_not_in?: String[] | String | null;
	commitUrl_lt?: String | null;
	commitUrl_lte?: String | null;
	commitUrl_gt?: String | null;
	commitUrl_gte?: String | null;
	commitUrl_contains?: String | null;
	commitUrl_not_contains?: String | null;
	commitUrl_starts_with?: String | null;
	commitUrl_not_starts_with?: String | null;
	commitUrl_ends_with?: String | null;
	commitUrl_not_ends_with?: String | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	message?: String | null;
	message_not?: String | null;
	message_in?: String[] | String | null;
	message_not_in?: String[] | String | null;
	message_lt?: String | null;
	message_lte?: String | null;
	message_gt?: String | null;
	message_gte?: String | null;
	message_contains?: String | null;
	message_not_contains?: String | null;
	message_starts_with?: String | null;
	message_not_starts_with?: String | null;
	message_ends_with?: String | null;
	message_not_ends_with?: String | null;
	messageHeadline?: String | null;
	messageHeadline_not?: String | null;
	messageHeadline_in?: String[] | String | null;
	messageHeadline_not_in?: String[] | String | null;
	messageHeadline_lt?: String | null;
	messageHeadline_lte?: String | null;
	messageHeadline_gt?: String | null;
	messageHeadline_gte?: String | null;
	messageHeadline_contains?: String | null;
	messageHeadline_not_contains?: String | null;
	messageHeadline_starts_with?: String | null;
	messageHeadline_not_starts_with?: String | null;
	messageHeadline_ends_with?: String | null;
	messageHeadline_not_ends_with?: String | null;
	pushedDate?: DateTime | null;
	pushedDate_not?: DateTime | null;
	pushedDate_in?: DateTime[] | DateTime | null;
	pushedDate_not_in?: DateTime[] | DateTime | null;
	pushedDate_lt?: DateTime | null;
	pushedDate_lte?: DateTime | null;
	pushedDate_gt?: DateTime | null;
	pushedDate_gte?: DateTime | null;
	treeUrl?: String | null;
	treeUrl_not?: String | null;
	treeUrl_in?: String[] | String | null;
	treeUrl_not_in?: String[] | String | null;
	treeUrl_lt?: String | null;
	treeUrl_lte?: String | null;
	treeUrl_gt?: String | null;
	treeUrl_gte?: String | null;
	treeUrl_contains?: String | null;
	treeUrl_not_contains?: String | null;
	treeUrl_starts_with?: String | null;
	treeUrl_not_starts_with?: String | null;
	treeUrl_ends_with?: String | null;
	treeUrl_not_ends_with?: String | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	associatedPullRequests_every?: GitHubPullRequestWhereInput | null;
	associatedPullRequests_some?: GitHubPullRequestWhereInput | null;
	associatedPullRequests_none?: GitHubPullRequestWhereInput | null;
	author?: GitHubUserWhereInput | null;
	committer?: GitHubUserWhereInput | null;
}

export interface GitHubCommitWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubFileDiffCreateInput {
	id?: ID_Input | null;
	additions: Int;
	deletions: Int;
	filepath: String;
}

export interface GitHubFileDiffCreateManyInput {
	create?: GitHubFileDiffCreateInput[] | GitHubFileDiffCreateInput | null;
	connect?: GitHubFileDiffWhereUniqueInput[] | GitHubFileDiffWhereUniqueInput | null;
}

export interface GitHubFileDiffScalarWhereInput {
	AND?: GitHubFileDiffScalarWhereInput[] | GitHubFileDiffScalarWhereInput | null;
	OR?: GitHubFileDiffScalarWhereInput[] | GitHubFileDiffScalarWhereInput | null;
	NOT?: GitHubFileDiffScalarWhereInput[] | GitHubFileDiffScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	filepath?: String | null;
	filepath_not?: String | null;
	filepath_in?: String[] | String | null;
	filepath_not_in?: String[] | String | null;
	filepath_lt?: String | null;
	filepath_lte?: String | null;
	filepath_gt?: String | null;
	filepath_gte?: String | null;
	filepath_contains?: String | null;
	filepath_not_contains?: String | null;
	filepath_starts_with?: String | null;
	filepath_not_starts_with?: String | null;
	filepath_ends_with?: String | null;
	filepath_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubFileDiffSubscriptionWhereInput {
	AND?: GitHubFileDiffSubscriptionWhereInput[] | GitHubFileDiffSubscriptionWhereInput | null;
	OR?: GitHubFileDiffSubscriptionWhereInput[] | GitHubFileDiffSubscriptionWhereInput | null;
	NOT?: GitHubFileDiffSubscriptionWhereInput[] | GitHubFileDiffSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubFileDiffWhereInput | null;
}

export interface GitHubFileDiffUpdateDataInput {
	additions?: Int | null;
	deletions?: Int | null;
	filepath?: String | null;
}

export interface GitHubFileDiffUpdateInput {
	additions?: Int | null;
	deletions?: Int | null;
	filepath?: String | null;
}

export interface GitHubFileDiffUpdateManyDataInput {
	additions?: Int | null;
	deletions?: Int | null;
	filepath?: String | null;
}

export interface GitHubFileDiffUpdateManyInput {
	create?: GitHubFileDiffCreateInput[] | GitHubFileDiffCreateInput | null;
	connect?: GitHubFileDiffWhereUniqueInput[] | GitHubFileDiffWhereUniqueInput | null;
	set?: GitHubFileDiffWhereUniqueInput[] | GitHubFileDiffWhereUniqueInput | null;
	disconnect?: GitHubFileDiffWhereUniqueInput[] | GitHubFileDiffWhereUniqueInput | null;
	delete?: GitHubFileDiffWhereUniqueInput[] | GitHubFileDiffWhereUniqueInput | null;
	update?:
		| GitHubFileDiffUpdateWithWhereUniqueNestedInput[]
		| GitHubFileDiffUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubFileDiffUpdateManyWithWhereNestedInput[]
		| GitHubFileDiffUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubFileDiffScalarWhereInput[] | GitHubFileDiffScalarWhereInput | null;
	upsert?:
		| GitHubFileDiffUpsertWithWhereUniqueNestedInput[]
		| GitHubFileDiffUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubFileDiffUpdateManyMutationInput {
	additions?: Int | null;
	deletions?: Int | null;
	filepath?: String | null;
}

export interface GitHubFileDiffUpdateManyWithWhereNestedInput {
	where: GitHubFileDiffScalarWhereInput;
	data: GitHubFileDiffUpdateManyDataInput;
}

export interface GitHubFileDiffUpdateWithWhereUniqueNestedInput {
	where: GitHubFileDiffWhereUniqueInput;
	data: GitHubFileDiffUpdateDataInput;
}

export interface GitHubFileDiffUpsertWithWhereUniqueNestedInput {
	where: GitHubFileDiffWhereUniqueInput;
	update: GitHubFileDiffUpdateDataInput;
	create: GitHubFileDiffCreateInput;
}

export interface GitHubFileDiffWhereInput {
	AND?: GitHubFileDiffWhereInput[] | GitHubFileDiffWhereInput | null;
	OR?: GitHubFileDiffWhereInput[] | GitHubFileDiffWhereInput | null;
	NOT?: GitHubFileDiffWhereInput[] | GitHubFileDiffWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	filepath?: String | null;
	filepath_not?: String | null;
	filepath_in?: String[] | String | null;
	filepath_not_in?: String[] | String | null;
	filepath_lt?: String | null;
	filepath_lte?: String | null;
	filepath_gt?: String | null;
	filepath_gte?: String | null;
	filepath_contains?: String | null;
	filepath_not_contains?: String | null;
	filepath_starts_with?: String | null;
	filepath_not_starts_with?: String | null;
	filepath_ends_with?: String | null;
	filepath_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubFileDiffWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubIssueCreateInput {
	id?: ID_Input | null;
	bodyText: String;
	closed?: DateTime | null;
	createdAtExternal: DateTime;
	lastEditedAt: DateTime;
	locked: Boolean;
	number: Int;
	state: String;
	title: String;
	updatedAtExternal: DateTime;
	url: String;
	assignees?: GitHubUserCreateManyInput | null;
	author: GitHubUserCreateOneInput;
	comments?: GitHubCommentCreateManyInput | null;
	labels?: GitHubLabelCreateManyInput | null;
	participants?: GitHubUserCreateManyInput | null;
}

export interface GitHubIssueCreateManyInput {
	create?: GitHubIssueCreateInput[] | GitHubIssueCreateInput | null;
	connect?: GitHubIssueWhereUniqueInput[] | GitHubIssueWhereUniqueInput | null;
}

export interface GitHubIssueScalarWhereInput {
	AND?: GitHubIssueScalarWhereInput[] | GitHubIssueScalarWhereInput | null;
	OR?: GitHubIssueScalarWhereInput[] | GitHubIssueScalarWhereInput | null;
	NOT?: GitHubIssueScalarWhereInput[] | GitHubIssueScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	closed?: DateTime | null;
	closed_not?: DateTime | null;
	closed_in?: DateTime[] | DateTime | null;
	closed_not_in?: DateTime[] | DateTime | null;
	closed_lt?: DateTime | null;
	closed_lte?: DateTime | null;
	closed_gt?: DateTime | null;
	closed_gte?: DateTime | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	lastEditedAt?: DateTime | null;
	lastEditedAt_not?: DateTime | null;
	lastEditedAt_in?: DateTime[] | DateTime | null;
	lastEditedAt_not_in?: DateTime[] | DateTime | null;
	lastEditedAt_lt?: DateTime | null;
	lastEditedAt_lte?: DateTime | null;
	lastEditedAt_gt?: DateTime | null;
	lastEditedAt_gte?: DateTime | null;
	locked?: Boolean | null;
	locked_not?: Boolean | null;
	number?: Int | null;
	number_not?: Int | null;
	number_in?: Int[] | Int | null;
	number_not_in?: Int[] | Int | null;
	number_lt?: Int | null;
	number_lte?: Int | null;
	number_gt?: Int | null;
	number_gte?: Int | null;
	state?: String | null;
	state_not?: String | null;
	state_in?: String[] | String | null;
	state_not_in?: String[] | String | null;
	state_lt?: String | null;
	state_lte?: String | null;
	state_gt?: String | null;
	state_gte?: String | null;
	state_contains?: String | null;
	state_not_contains?: String | null;
	state_starts_with?: String | null;
	state_not_starts_with?: String | null;
	state_ends_with?: String | null;
	state_not_ends_with?: String | null;
	title?: String | null;
	title_not?: String | null;
	title_in?: String[] | String | null;
	title_not_in?: String[] | String | null;
	title_lt?: String | null;
	title_lte?: String | null;
	title_gt?: String | null;
	title_gte?: String | null;
	title_contains?: String | null;
	title_not_contains?: String | null;
	title_starts_with?: String | null;
	title_not_starts_with?: String | null;
	title_ends_with?: String | null;
	title_not_ends_with?: String | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubIssueSubscriptionWhereInput {
	AND?: GitHubIssueSubscriptionWhereInput[] | GitHubIssueSubscriptionWhereInput | null;
	OR?: GitHubIssueSubscriptionWhereInput[] | GitHubIssueSubscriptionWhereInput | null;
	NOT?: GitHubIssueSubscriptionWhereInput[] | GitHubIssueSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubIssueWhereInput | null;
}

export interface GitHubIssueUpdateDataInput {
	bodyText?: String | null;
	closed?: DateTime | null;
	createdAtExternal?: DateTime | null;
	lastEditedAt?: DateTime | null;
	locked?: Boolean | null;
	number?: Int | null;
	state?: String | null;
	title?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	assignees?: GitHubUserUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	labels?: GitHubLabelUpdateManyInput | null;
	participants?: GitHubUserUpdateManyInput | null;
}

export interface GitHubIssueUpdateInput {
	bodyText?: String | null;
	closed?: DateTime | null;
	createdAtExternal?: DateTime | null;
	lastEditedAt?: DateTime | null;
	locked?: Boolean | null;
	number?: Int | null;
	state?: String | null;
	title?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	assignees?: GitHubUserUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	labels?: GitHubLabelUpdateManyInput | null;
	participants?: GitHubUserUpdateManyInput | null;
}

export interface GitHubIssueUpdateManyDataInput {
	bodyText?: String | null;
	closed?: DateTime | null;
	createdAtExternal?: DateTime | null;
	lastEditedAt?: DateTime | null;
	locked?: Boolean | null;
	number?: Int | null;
	state?: String | null;
	title?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubIssueUpdateManyInput {
	create?: GitHubIssueCreateInput[] | GitHubIssueCreateInput | null;
	connect?: GitHubIssueWhereUniqueInput[] | GitHubIssueWhereUniqueInput | null;
	set?: GitHubIssueWhereUniqueInput[] | GitHubIssueWhereUniqueInput | null;
	disconnect?: GitHubIssueWhereUniqueInput[] | GitHubIssueWhereUniqueInput | null;
	delete?: GitHubIssueWhereUniqueInput[] | GitHubIssueWhereUniqueInput | null;
	update?:
		| GitHubIssueUpdateWithWhereUniqueNestedInput[]
		| GitHubIssueUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubIssueUpdateManyWithWhereNestedInput[]
		| GitHubIssueUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubIssueScalarWhereInput[] | GitHubIssueScalarWhereInput | null;
	upsert?:
		| GitHubIssueUpsertWithWhereUniqueNestedInput[]
		| GitHubIssueUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubIssueUpdateManyMutationInput {
	bodyText?: String | null;
	closed?: DateTime | null;
	createdAtExternal?: DateTime | null;
	lastEditedAt?: DateTime | null;
	locked?: Boolean | null;
	number?: Int | null;
	state?: String | null;
	title?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubIssueUpdateManyWithWhereNestedInput {
	where: GitHubIssueScalarWhereInput;
	data: GitHubIssueUpdateManyDataInput;
}

export interface GitHubIssueUpdateWithWhereUniqueNestedInput {
	where: GitHubIssueWhereUniqueInput;
	data: GitHubIssueUpdateDataInput;
}

export interface GitHubIssueUpsertWithWhereUniqueNestedInput {
	where: GitHubIssueWhereUniqueInput;
	update: GitHubIssueUpdateDataInput;
	create: GitHubIssueCreateInput;
}

export interface GitHubIssueWhereInput {
	AND?: GitHubIssueWhereInput[] | GitHubIssueWhereInput | null;
	OR?: GitHubIssueWhereInput[] | GitHubIssueWhereInput | null;
	NOT?: GitHubIssueWhereInput[] | GitHubIssueWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	closed?: DateTime | null;
	closed_not?: DateTime | null;
	closed_in?: DateTime[] | DateTime | null;
	closed_not_in?: DateTime[] | DateTime | null;
	closed_lt?: DateTime | null;
	closed_lte?: DateTime | null;
	closed_gt?: DateTime | null;
	closed_gte?: DateTime | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	lastEditedAt?: DateTime | null;
	lastEditedAt_not?: DateTime | null;
	lastEditedAt_in?: DateTime[] | DateTime | null;
	lastEditedAt_not_in?: DateTime[] | DateTime | null;
	lastEditedAt_lt?: DateTime | null;
	lastEditedAt_lte?: DateTime | null;
	lastEditedAt_gt?: DateTime | null;
	lastEditedAt_gte?: DateTime | null;
	locked?: Boolean | null;
	locked_not?: Boolean | null;
	number?: Int | null;
	number_not?: Int | null;
	number_in?: Int[] | Int | null;
	number_not_in?: Int[] | Int | null;
	number_lt?: Int | null;
	number_lte?: Int | null;
	number_gt?: Int | null;
	number_gte?: Int | null;
	state?: String | null;
	state_not?: String | null;
	state_in?: String[] | String | null;
	state_not_in?: String[] | String | null;
	state_lt?: String | null;
	state_lte?: String | null;
	state_gt?: String | null;
	state_gte?: String | null;
	state_contains?: String | null;
	state_not_contains?: String | null;
	state_starts_with?: String | null;
	state_not_starts_with?: String | null;
	state_ends_with?: String | null;
	state_not_ends_with?: String | null;
	title?: String | null;
	title_not?: String | null;
	title_in?: String[] | String | null;
	title_not_in?: String[] | String | null;
	title_lt?: String | null;
	title_lte?: String | null;
	title_gt?: String | null;
	title_gte?: String | null;
	title_contains?: String | null;
	title_not_contains?: String | null;
	title_starts_with?: String | null;
	title_not_starts_with?: String | null;
	title_ends_with?: String | null;
	title_not_ends_with?: String | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	assignees_every?: GitHubUserWhereInput | null;
	assignees_some?: GitHubUserWhereInput | null;
	assignees_none?: GitHubUserWhereInput | null;
	author?: GitHubUserWhereInput | null;
	comments_every?: GitHubCommentWhereInput | null;
	comments_some?: GitHubCommentWhereInput | null;
	comments_none?: GitHubCommentWhereInput | null;
	labels_every?: GitHubLabelWhereInput | null;
	labels_some?: GitHubLabelWhereInput | null;
	labels_none?: GitHubLabelWhereInput | null;
	participants_every?: GitHubUserWhereInput | null;
	participants_some?: GitHubUserWhereInput | null;
	participants_none?: GitHubUserWhereInput | null;
}

export interface GitHubIssueWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubLabelCreateInput {
	id?: ID_Input | null;
	color: String;
	createdAtExternal: DateTime;
	description: String;
	name: String;
	updatedAtExternal: DateTime;
	url: String;
	issues?: GitHubIssueCreateManyInput | null;
	pullRequests?: GitHubPullRequestCreateManyInput | null;
}

export interface GitHubLabelCreateManyInput {
	create?: GitHubLabelCreateInput[] | GitHubLabelCreateInput | null;
	connect?: GitHubLabelWhereUniqueInput[] | GitHubLabelWhereUniqueInput | null;
}

export interface GitHubLabelScalarWhereInput {
	AND?: GitHubLabelScalarWhereInput[] | GitHubLabelScalarWhereInput | null;
	OR?: GitHubLabelScalarWhereInput[] | GitHubLabelScalarWhereInput | null;
	NOT?: GitHubLabelScalarWhereInput[] | GitHubLabelScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	color?: String | null;
	color_not?: String | null;
	color_in?: String[] | String | null;
	color_not_in?: String[] | String | null;
	color_lt?: String | null;
	color_lte?: String | null;
	color_gt?: String | null;
	color_gte?: String | null;
	color_contains?: String | null;
	color_not_contains?: String | null;
	color_starts_with?: String | null;
	color_not_starts_with?: String | null;
	color_ends_with?: String | null;
	color_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	description?: String | null;
	description_not?: String | null;
	description_in?: String[] | String | null;
	description_not_in?: String[] | String | null;
	description_lt?: String | null;
	description_lte?: String | null;
	description_gt?: String | null;
	description_gte?: String | null;
	description_contains?: String | null;
	description_not_contains?: String | null;
	description_starts_with?: String | null;
	description_not_starts_with?: String | null;
	description_ends_with?: String | null;
	description_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubLabelSubscriptionWhereInput {
	AND?: GitHubLabelSubscriptionWhereInput[] | GitHubLabelSubscriptionWhereInput | null;
	OR?: GitHubLabelSubscriptionWhereInput[] | GitHubLabelSubscriptionWhereInput | null;
	NOT?: GitHubLabelSubscriptionWhereInput[] | GitHubLabelSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubLabelWhereInput | null;
}

export interface GitHubLabelUpdateDataInput {
	color?: String | null;
	createdAtExternal?: DateTime | null;
	description?: String | null;
	name?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	issues?: GitHubIssueUpdateManyInput | null;
	pullRequests?: GitHubPullRequestUpdateManyInput | null;
}

export interface GitHubLabelUpdateInput {
	color?: String | null;
	createdAtExternal?: DateTime | null;
	description?: String | null;
	name?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	issues?: GitHubIssueUpdateManyInput | null;
	pullRequests?: GitHubPullRequestUpdateManyInput | null;
}

export interface GitHubLabelUpdateManyDataInput {
	color?: String | null;
	createdAtExternal?: DateTime | null;
	description?: String | null;
	name?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubLabelUpdateManyInput {
	create?: GitHubLabelCreateInput[] | GitHubLabelCreateInput | null;
	connect?: GitHubLabelWhereUniqueInput[] | GitHubLabelWhereUniqueInput | null;
	set?: GitHubLabelWhereUniqueInput[] | GitHubLabelWhereUniqueInput | null;
	disconnect?: GitHubLabelWhereUniqueInput[] | GitHubLabelWhereUniqueInput | null;
	delete?: GitHubLabelWhereUniqueInput[] | GitHubLabelWhereUniqueInput | null;
	update?:
		| GitHubLabelUpdateWithWhereUniqueNestedInput[]
		| GitHubLabelUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubLabelUpdateManyWithWhereNestedInput[]
		| GitHubLabelUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubLabelScalarWhereInput[] | GitHubLabelScalarWhereInput | null;
	upsert?:
		| GitHubLabelUpsertWithWhereUniqueNestedInput[]
		| GitHubLabelUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubLabelUpdateManyMutationInput {
	color?: String | null;
	createdAtExternal?: DateTime | null;
	description?: String | null;
	name?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubLabelUpdateManyWithWhereNestedInput {
	where: GitHubLabelScalarWhereInput;
	data: GitHubLabelUpdateManyDataInput;
}

export interface GitHubLabelUpdateWithWhereUniqueNestedInput {
	where: GitHubLabelWhereUniqueInput;
	data: GitHubLabelUpdateDataInput;
}

export interface GitHubLabelUpsertWithWhereUniqueNestedInput {
	where: GitHubLabelWhereUniqueInput;
	update: GitHubLabelUpdateDataInput;
	create: GitHubLabelCreateInput;
}

export interface GitHubLabelWhereInput {
	AND?: GitHubLabelWhereInput[] | GitHubLabelWhereInput | null;
	OR?: GitHubLabelWhereInput[] | GitHubLabelWhereInput | null;
	NOT?: GitHubLabelWhereInput[] | GitHubLabelWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	color?: String | null;
	color_not?: String | null;
	color_in?: String[] | String | null;
	color_not_in?: String[] | String | null;
	color_lt?: String | null;
	color_lte?: String | null;
	color_gt?: String | null;
	color_gte?: String | null;
	color_contains?: String | null;
	color_not_contains?: String | null;
	color_starts_with?: String | null;
	color_not_starts_with?: String | null;
	color_ends_with?: String | null;
	color_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	description?: String | null;
	description_not?: String | null;
	description_in?: String[] | String | null;
	description_not_in?: String[] | String | null;
	description_lt?: String | null;
	description_lte?: String | null;
	description_gt?: String | null;
	description_gte?: String | null;
	description_contains?: String | null;
	description_not_contains?: String | null;
	description_starts_with?: String | null;
	description_not_starts_with?: String | null;
	description_ends_with?: String | null;
	description_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	issues_every?: GitHubIssueWhereInput | null;
	issues_some?: GitHubIssueWhereInput | null;
	issues_none?: GitHubIssueWhereInput | null;
	pullRequests_every?: GitHubPullRequestWhereInput | null;
	pullRequests_some?: GitHubPullRequestWhereInput | null;
	pullRequests_none?: GitHubPullRequestWhereInput | null;
}

export interface GitHubLabelWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubPullRequestCreateInput {
	additions: Int;
	bodyText: String;
	changedFiles: Int;
	closed: Boolean;
	closedAt?: DateTime | null;
	createdAtExternal: DateTime;
	deletions: Int;
	id?: ID_Input | null;
	isCrossRepository: Boolean;
	locked: Boolean;
	merged: Boolean;
	mergedAt?: DateTime | null;
	number: Int;
	publishedAt?: DateTime | null;
	assignees?: GitHubUserCreateManyInput | null;
	author: GitHubUserCreateOneInput;
	comments?: GitHubCommentCreateManyInput | null;
	commits?: GitHubCommitCreateManyInput | null;
	files?: GitHubFileDiffCreateManyInput | null;
	labels?: GitHubLabelCreateManyInput | null;
	mergedBy?: GitHubUserCreateOneInput | null;
	participants?: GitHubUserCreateManyInput | null;
	reviewRequests?: GitHubReviewRequestCreateManyInput | null;
	reviews?: GitHubPullRequestReviewCreateManyInput | null;
	reviewThreads?: GitHubReviewThreadCreateManyInput | null;
}

export interface GitHubPullRequestCreateManyInput {
	create?: GitHubPullRequestCreateInput[] | GitHubPullRequestCreateInput | null;
	connect?: GitHubPullRequestWhereUniqueInput[] | GitHubPullRequestWhereUniqueInput | null;
}

export interface GitHubPullRequestCreateOneInput {
	create?: GitHubPullRequestCreateInput | null;
	connect?: GitHubPullRequestWhereUniqueInput | null;
}

export interface GitHubPullRequestReviewCreateInput {
	bodyText: String;
	createdAtExternal: DateTime;
	id?: ID_Input | null;
	lastEditeddAt: DateTime;
	publishedAt: DateTime;
	state: String;
	submittedAt: DateTime;
	updatedAtExternal: DateTime;
	url: String;
	author: GitHubUserCreateOneInput;
	comments?: GitHubCommentCreateManyInput | null;
	commit?: GitHubCommitCreateManyInput | null;
	pullRequest: GitHubPullRequestCreateOneInput;
}

export interface GitHubPullRequestReviewCreateManyInput {
	create?: GitHubPullRequestReviewCreateInput[] | GitHubPullRequestReviewCreateInput | null;
	connect?:
		| GitHubPullRequestReviewWhereUniqueInput[]
		| GitHubPullRequestReviewWhereUniqueInput
		| null;
}

export interface GitHubPullRequestReviewScalarWhereInput {
	AND?:
		| GitHubPullRequestReviewScalarWhereInput[]
		| GitHubPullRequestReviewScalarWhereInput
		| null;
	OR?: GitHubPullRequestReviewScalarWhereInput[] | GitHubPullRequestReviewScalarWhereInput | null;
	NOT?:
		| GitHubPullRequestReviewScalarWhereInput[]
		| GitHubPullRequestReviewScalarWhereInput
		| null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	lastEditeddAt?: DateTime | null;
	lastEditeddAt_not?: DateTime | null;
	lastEditeddAt_in?: DateTime[] | DateTime | null;
	lastEditeddAt_not_in?: DateTime[] | DateTime | null;
	lastEditeddAt_lt?: DateTime | null;
	lastEditeddAt_lte?: DateTime | null;
	lastEditeddAt_gt?: DateTime | null;
	lastEditeddAt_gte?: DateTime | null;
	publishedAt?: DateTime | null;
	publishedAt_not?: DateTime | null;
	publishedAt_in?: DateTime[] | DateTime | null;
	publishedAt_not_in?: DateTime[] | DateTime | null;
	publishedAt_lt?: DateTime | null;
	publishedAt_lte?: DateTime | null;
	publishedAt_gt?: DateTime | null;
	publishedAt_gte?: DateTime | null;
	state?: String | null;
	state_not?: String | null;
	state_in?: String[] | String | null;
	state_not_in?: String[] | String | null;
	state_lt?: String | null;
	state_lte?: String | null;
	state_gt?: String | null;
	state_gte?: String | null;
	state_contains?: String | null;
	state_not_contains?: String | null;
	state_starts_with?: String | null;
	state_not_starts_with?: String | null;
	state_ends_with?: String | null;
	state_not_ends_with?: String | null;
	submittedAt?: DateTime | null;
	submittedAt_not?: DateTime | null;
	submittedAt_in?: DateTime[] | DateTime | null;
	submittedAt_not_in?: DateTime[] | DateTime | null;
	submittedAt_lt?: DateTime | null;
	submittedAt_lte?: DateTime | null;
	submittedAt_gt?: DateTime | null;
	submittedAt_gte?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubPullRequestReviewSubscriptionWhereInput {
	AND?:
		| GitHubPullRequestReviewSubscriptionWhereInput[]
		| GitHubPullRequestReviewSubscriptionWhereInput
		| null;
	OR?:
		| GitHubPullRequestReviewSubscriptionWhereInput[]
		| GitHubPullRequestReviewSubscriptionWhereInput
		| null;
	NOT?:
		| GitHubPullRequestReviewSubscriptionWhereInput[]
		| GitHubPullRequestReviewSubscriptionWhereInput
		| null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubPullRequestReviewWhereInput | null;
}

export interface GitHubPullRequestReviewUpdateDataInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	lastEditeddAt?: DateTime | null;
	publishedAt?: DateTime | null;
	state?: String | null;
	submittedAt?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	commit?: GitHubCommitUpdateManyInput | null;
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
}

export interface GitHubPullRequestReviewUpdateInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	lastEditeddAt?: DateTime | null;
	publishedAt?: DateTime | null;
	state?: String | null;
	submittedAt?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	commit?: GitHubCommitUpdateManyInput | null;
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
}

export interface GitHubPullRequestReviewUpdateManyDataInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	lastEditeddAt?: DateTime | null;
	publishedAt?: DateTime | null;
	state?: String | null;
	submittedAt?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubPullRequestReviewUpdateManyInput {
	create?: GitHubPullRequestReviewCreateInput[] | GitHubPullRequestReviewCreateInput | null;
	connect?:
		| GitHubPullRequestReviewWhereUniqueInput[]
		| GitHubPullRequestReviewWhereUniqueInput
		| null;
	set?:
		| GitHubPullRequestReviewWhereUniqueInput[]
		| GitHubPullRequestReviewWhereUniqueInput
		| null;
	disconnect?:
		| GitHubPullRequestReviewWhereUniqueInput[]
		| GitHubPullRequestReviewWhereUniqueInput
		| null;
	delete?:
		| GitHubPullRequestReviewWhereUniqueInput[]
		| GitHubPullRequestReviewWhereUniqueInput
		| null;
	update?:
		| GitHubPullRequestReviewUpdateWithWhereUniqueNestedInput[]
		| GitHubPullRequestReviewUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubPullRequestReviewUpdateManyWithWhereNestedInput[]
		| GitHubPullRequestReviewUpdateManyWithWhereNestedInput
		| null;
	deleteMany?:
		| GitHubPullRequestReviewScalarWhereInput[]
		| GitHubPullRequestReviewScalarWhereInput
		| null;
	upsert?:
		| GitHubPullRequestReviewUpsertWithWhereUniqueNestedInput[]
		| GitHubPullRequestReviewUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubPullRequestReviewUpdateManyMutationInput {
	bodyText?: String | null;
	createdAtExternal?: DateTime | null;
	lastEditeddAt?: DateTime | null;
	publishedAt?: DateTime | null;
	state?: String | null;
	submittedAt?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubPullRequestReviewUpdateManyWithWhereNestedInput {
	where: GitHubPullRequestReviewScalarWhereInput;
	data: GitHubPullRequestReviewUpdateManyDataInput;
}

export interface GitHubPullRequestReviewUpdateWithWhereUniqueNestedInput {
	where: GitHubPullRequestReviewWhereUniqueInput;
	data: GitHubPullRequestReviewUpdateDataInput;
}

export interface GitHubPullRequestReviewUpsertWithWhereUniqueNestedInput {
	where: GitHubPullRequestReviewWhereUniqueInput;
	update: GitHubPullRequestReviewUpdateDataInput;
	create: GitHubPullRequestReviewCreateInput;
}

export interface GitHubPullRequestReviewWhereInput {
	AND?: GitHubPullRequestReviewWhereInput[] | GitHubPullRequestReviewWhereInput | null;
	OR?: GitHubPullRequestReviewWhereInput[] | GitHubPullRequestReviewWhereInput | null;
	NOT?: GitHubPullRequestReviewWhereInput[] | GitHubPullRequestReviewWhereInput | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	lastEditeddAt?: DateTime | null;
	lastEditeddAt_not?: DateTime | null;
	lastEditeddAt_in?: DateTime[] | DateTime | null;
	lastEditeddAt_not_in?: DateTime[] | DateTime | null;
	lastEditeddAt_lt?: DateTime | null;
	lastEditeddAt_lte?: DateTime | null;
	lastEditeddAt_gt?: DateTime | null;
	lastEditeddAt_gte?: DateTime | null;
	publishedAt?: DateTime | null;
	publishedAt_not?: DateTime | null;
	publishedAt_in?: DateTime[] | DateTime | null;
	publishedAt_not_in?: DateTime[] | DateTime | null;
	publishedAt_lt?: DateTime | null;
	publishedAt_lte?: DateTime | null;
	publishedAt_gt?: DateTime | null;
	publishedAt_gte?: DateTime | null;
	state?: String | null;
	state_not?: String | null;
	state_in?: String[] | String | null;
	state_not_in?: String[] | String | null;
	state_lt?: String | null;
	state_lte?: String | null;
	state_gt?: String | null;
	state_gte?: String | null;
	state_contains?: String | null;
	state_not_contains?: String | null;
	state_starts_with?: String | null;
	state_not_starts_with?: String | null;
	state_ends_with?: String | null;
	state_not_ends_with?: String | null;
	submittedAt?: DateTime | null;
	submittedAt_not?: DateTime | null;
	submittedAt_in?: DateTime[] | DateTime | null;
	submittedAt_not_in?: DateTime[] | DateTime | null;
	submittedAt_lt?: DateTime | null;
	submittedAt_lte?: DateTime | null;
	submittedAt_gt?: DateTime | null;
	submittedAt_gte?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	author?: GitHubUserWhereInput | null;
	comments_every?: GitHubCommentWhereInput | null;
	comments_some?: GitHubCommentWhereInput | null;
	comments_none?: GitHubCommentWhereInput | null;
	commit_every?: GitHubCommitWhereInput | null;
	commit_some?: GitHubCommitWhereInput | null;
	commit_none?: GitHubCommitWhereInput | null;
	pullRequest?: GitHubPullRequestWhereInput | null;
}

export interface GitHubPullRequestReviewWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubPullRequestScalarWhereInput {
	AND?: GitHubPullRequestScalarWhereInput[] | GitHubPullRequestScalarWhereInput | null;
	OR?: GitHubPullRequestScalarWhereInput[] | GitHubPullRequestScalarWhereInput | null;
	NOT?: GitHubPullRequestScalarWhereInput[] | GitHubPullRequestScalarWhereInput | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	changedFiles?: Int | null;
	changedFiles_not?: Int | null;
	changedFiles_in?: Int[] | Int | null;
	changedFiles_not_in?: Int[] | Int | null;
	changedFiles_lt?: Int | null;
	changedFiles_lte?: Int | null;
	changedFiles_gt?: Int | null;
	changedFiles_gte?: Int | null;
	closed?: Boolean | null;
	closed_not?: Boolean | null;
	closedAt?: DateTime | null;
	closedAt_not?: DateTime | null;
	closedAt_in?: DateTime[] | DateTime | null;
	closedAt_not_in?: DateTime[] | DateTime | null;
	closedAt_lt?: DateTime | null;
	closedAt_lte?: DateTime | null;
	closedAt_gt?: DateTime | null;
	closedAt_gte?: DateTime | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	isCrossRepository?: Boolean | null;
	isCrossRepository_not?: Boolean | null;
	locked?: Boolean | null;
	locked_not?: Boolean | null;
	merged?: Boolean | null;
	merged_not?: Boolean | null;
	mergedAt?: DateTime | null;
	mergedAt_not?: DateTime | null;
	mergedAt_in?: DateTime[] | DateTime | null;
	mergedAt_not_in?: DateTime[] | DateTime | null;
	mergedAt_lt?: DateTime | null;
	mergedAt_lte?: DateTime | null;
	mergedAt_gt?: DateTime | null;
	mergedAt_gte?: DateTime | null;
	number?: Int | null;
	number_not?: Int | null;
	number_in?: Int[] | Int | null;
	number_not_in?: Int[] | Int | null;
	number_lt?: Int | null;
	number_lte?: Int | null;
	number_gt?: Int | null;
	number_gte?: Int | null;
	publishedAt?: DateTime | null;
	publishedAt_not?: DateTime | null;
	publishedAt_in?: DateTime[] | DateTime | null;
	publishedAt_not_in?: DateTime[] | DateTime | null;
	publishedAt_lt?: DateTime | null;
	publishedAt_lte?: DateTime | null;
	publishedAt_gt?: DateTime | null;
	publishedAt_gte?: DateTime | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubPullRequestSubscriptionWhereInput {
	AND?:
		| GitHubPullRequestSubscriptionWhereInput[]
		| GitHubPullRequestSubscriptionWhereInput
		| null;
	OR?: GitHubPullRequestSubscriptionWhereInput[] | GitHubPullRequestSubscriptionWhereInput | null;
	NOT?:
		| GitHubPullRequestSubscriptionWhereInput[]
		| GitHubPullRequestSubscriptionWhereInput
		| null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubPullRequestWhereInput | null;
}

export interface GitHubPullRequestUpdateDataInput {
	additions?: Int | null;
	bodyText?: String | null;
	changedFiles?: Int | null;
	closed?: Boolean | null;
	closedAt?: DateTime | null;
	createdAtExternal?: DateTime | null;
	deletions?: Int | null;
	isCrossRepository?: Boolean | null;
	locked?: Boolean | null;
	merged?: Boolean | null;
	mergedAt?: DateTime | null;
	number?: Int | null;
	publishedAt?: DateTime | null;
	assignees?: GitHubUserUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	commits?: GitHubCommitUpdateManyInput | null;
	files?: GitHubFileDiffUpdateManyInput | null;
	labels?: GitHubLabelUpdateManyInput | null;
	mergedBy?: GitHubUserUpdateOneInput | null;
	participants?: GitHubUserUpdateManyInput | null;
	reviewRequests?: GitHubReviewRequestUpdateManyInput | null;
	reviews?: GitHubPullRequestReviewUpdateManyInput | null;
	reviewThreads?: GitHubReviewThreadUpdateManyInput | null;
}

export interface GitHubPullRequestUpdateInput {
	additions?: Int | null;
	bodyText?: String | null;
	changedFiles?: Int | null;
	closed?: Boolean | null;
	closedAt?: DateTime | null;
	createdAtExternal?: DateTime | null;
	deletions?: Int | null;
	isCrossRepository?: Boolean | null;
	locked?: Boolean | null;
	merged?: Boolean | null;
	mergedAt?: DateTime | null;
	number?: Int | null;
	publishedAt?: DateTime | null;
	assignees?: GitHubUserUpdateManyInput | null;
	author?: GitHubUserUpdateOneRequiredInput | null;
	comments?: GitHubCommentUpdateManyInput | null;
	commits?: GitHubCommitUpdateManyInput | null;
	files?: GitHubFileDiffUpdateManyInput | null;
	labels?: GitHubLabelUpdateManyInput | null;
	mergedBy?: GitHubUserUpdateOneInput | null;
	participants?: GitHubUserUpdateManyInput | null;
	reviewRequests?: GitHubReviewRequestUpdateManyInput | null;
	reviews?: GitHubPullRequestReviewUpdateManyInput | null;
	reviewThreads?: GitHubReviewThreadUpdateManyInput | null;
}

export interface GitHubPullRequestUpdateManyDataInput {
	additions?: Int | null;
	bodyText?: String | null;
	changedFiles?: Int | null;
	closed?: Boolean | null;
	closedAt?: DateTime | null;
	createdAtExternal?: DateTime | null;
	deletions?: Int | null;
	isCrossRepository?: Boolean | null;
	locked?: Boolean | null;
	merged?: Boolean | null;
	mergedAt?: DateTime | null;
	number?: Int | null;
	publishedAt?: DateTime | null;
}

export interface GitHubPullRequestUpdateManyInput {
	create?: GitHubPullRequestCreateInput[] | GitHubPullRequestCreateInput | null;
	connect?: GitHubPullRequestWhereUniqueInput[] | GitHubPullRequestWhereUniqueInput | null;
	set?: GitHubPullRequestWhereUniqueInput[] | GitHubPullRequestWhereUniqueInput | null;
	disconnect?: GitHubPullRequestWhereUniqueInput[] | GitHubPullRequestWhereUniqueInput | null;
	delete?: GitHubPullRequestWhereUniqueInput[] | GitHubPullRequestWhereUniqueInput | null;
	update?:
		| GitHubPullRequestUpdateWithWhereUniqueNestedInput[]
		| GitHubPullRequestUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubPullRequestUpdateManyWithWhereNestedInput[]
		| GitHubPullRequestUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubPullRequestScalarWhereInput[] | GitHubPullRequestScalarWhereInput | null;
	upsert?:
		| GitHubPullRequestUpsertWithWhereUniqueNestedInput[]
		| GitHubPullRequestUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubPullRequestUpdateManyMutationInput {
	additions?: Int | null;
	bodyText?: String | null;
	changedFiles?: Int | null;
	closed?: Boolean | null;
	closedAt?: DateTime | null;
	createdAtExternal?: DateTime | null;
	deletions?: Int | null;
	isCrossRepository?: Boolean | null;
	locked?: Boolean | null;
	merged?: Boolean | null;
	mergedAt?: DateTime | null;
	number?: Int | null;
	publishedAt?: DateTime | null;
}

export interface GitHubPullRequestUpdateManyWithWhereNestedInput {
	where: GitHubPullRequestScalarWhereInput;
	data: GitHubPullRequestUpdateManyDataInput;
}

export interface GitHubPullRequestUpdateOneInput {
	create?: GitHubPullRequestCreateInput | null;
	connect?: GitHubPullRequestWhereUniqueInput | null;
	disconnect?: Boolean | null;
	delete?: Boolean | null;
	update?: GitHubPullRequestUpdateDataInput | null;
	upsert?: GitHubPullRequestUpsertNestedInput | null;
}

export interface GitHubPullRequestUpdateOneRequiredInput {
	create?: GitHubPullRequestCreateInput | null;
	connect?: GitHubPullRequestWhereUniqueInput | null;
	update?: GitHubPullRequestUpdateDataInput | null;
	upsert?: GitHubPullRequestUpsertNestedInput | null;
}

export interface GitHubPullRequestUpdateWithWhereUniqueNestedInput {
	where: GitHubPullRequestWhereUniqueInput;
	data: GitHubPullRequestUpdateDataInput;
}

export interface GitHubPullRequestUpsertNestedInput {
	update: GitHubPullRequestUpdateDataInput;
	create: GitHubPullRequestCreateInput;
}

export interface GitHubPullRequestUpsertWithWhereUniqueNestedInput {
	where: GitHubPullRequestWhereUniqueInput;
	update: GitHubPullRequestUpdateDataInput;
	create: GitHubPullRequestCreateInput;
}

export interface GitHubPullRequestWhereInput {
	AND?: GitHubPullRequestWhereInput[] | GitHubPullRequestWhereInput | null;
	OR?: GitHubPullRequestWhereInput[] | GitHubPullRequestWhereInput | null;
	NOT?: GitHubPullRequestWhereInput[] | GitHubPullRequestWhereInput | null;
	additions?: Int | null;
	additions_not?: Int | null;
	additions_in?: Int[] | Int | null;
	additions_not_in?: Int[] | Int | null;
	additions_lt?: Int | null;
	additions_lte?: Int | null;
	additions_gt?: Int | null;
	additions_gte?: Int | null;
	bodyText?: String | null;
	bodyText_not?: String | null;
	bodyText_in?: String[] | String | null;
	bodyText_not_in?: String[] | String | null;
	bodyText_lt?: String | null;
	bodyText_lte?: String | null;
	bodyText_gt?: String | null;
	bodyText_gte?: String | null;
	bodyText_contains?: String | null;
	bodyText_not_contains?: String | null;
	bodyText_starts_with?: String | null;
	bodyText_not_starts_with?: String | null;
	bodyText_ends_with?: String | null;
	bodyText_not_ends_with?: String | null;
	changedFiles?: Int | null;
	changedFiles_not?: Int | null;
	changedFiles_in?: Int[] | Int | null;
	changedFiles_not_in?: Int[] | Int | null;
	changedFiles_lt?: Int | null;
	changedFiles_lte?: Int | null;
	changedFiles_gt?: Int | null;
	changedFiles_gte?: Int | null;
	closed?: Boolean | null;
	closed_not?: Boolean | null;
	closedAt?: DateTime | null;
	closedAt_not?: DateTime | null;
	closedAt_in?: DateTime[] | DateTime | null;
	closedAt_not_in?: DateTime[] | DateTime | null;
	closedAt_lt?: DateTime | null;
	closedAt_lte?: DateTime | null;
	closedAt_gt?: DateTime | null;
	closedAt_gte?: DateTime | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	deletions?: Int | null;
	deletions_not?: Int | null;
	deletions_in?: Int[] | Int | null;
	deletions_not_in?: Int[] | Int | null;
	deletions_lt?: Int | null;
	deletions_lte?: Int | null;
	deletions_gt?: Int | null;
	deletions_gte?: Int | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	isCrossRepository?: Boolean | null;
	isCrossRepository_not?: Boolean | null;
	locked?: Boolean | null;
	locked_not?: Boolean | null;
	merged?: Boolean | null;
	merged_not?: Boolean | null;
	mergedAt?: DateTime | null;
	mergedAt_not?: DateTime | null;
	mergedAt_in?: DateTime[] | DateTime | null;
	mergedAt_not_in?: DateTime[] | DateTime | null;
	mergedAt_lt?: DateTime | null;
	mergedAt_lte?: DateTime | null;
	mergedAt_gt?: DateTime | null;
	mergedAt_gte?: DateTime | null;
	number?: Int | null;
	number_not?: Int | null;
	number_in?: Int[] | Int | null;
	number_not_in?: Int[] | Int | null;
	number_lt?: Int | null;
	number_lte?: Int | null;
	number_gt?: Int | null;
	number_gte?: Int | null;
	publishedAt?: DateTime | null;
	publishedAt_not?: DateTime | null;
	publishedAt_in?: DateTime[] | DateTime | null;
	publishedAt_not_in?: DateTime[] | DateTime | null;
	publishedAt_lt?: DateTime | null;
	publishedAt_lte?: DateTime | null;
	publishedAt_gt?: DateTime | null;
	publishedAt_gte?: DateTime | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	assignees_every?: GitHubUserWhereInput | null;
	assignees_some?: GitHubUserWhereInput | null;
	assignees_none?: GitHubUserWhereInput | null;
	author?: GitHubUserWhereInput | null;
	comments_every?: GitHubCommentWhereInput | null;
	comments_some?: GitHubCommentWhereInput | null;
	comments_none?: GitHubCommentWhereInput | null;
	commits_every?: GitHubCommitWhereInput | null;
	commits_some?: GitHubCommitWhereInput | null;
	commits_none?: GitHubCommitWhereInput | null;
	files_every?: GitHubFileDiffWhereInput | null;
	files_some?: GitHubFileDiffWhereInput | null;
	files_none?: GitHubFileDiffWhereInput | null;
	labels_every?: GitHubLabelWhereInput | null;
	labels_some?: GitHubLabelWhereInput | null;
	labels_none?: GitHubLabelWhereInput | null;
	mergedBy?: GitHubUserWhereInput | null;
	participants_every?: GitHubUserWhereInput | null;
	participants_some?: GitHubUserWhereInput | null;
	participants_none?: GitHubUserWhereInput | null;
	reviewRequests_every?: GitHubReviewRequestWhereInput | null;
	reviewRequests_some?: GitHubReviewRequestWhereInput | null;
	reviewRequests_none?: GitHubReviewRequestWhereInput | null;
	reviews_every?: GitHubPullRequestReviewWhereInput | null;
	reviews_some?: GitHubPullRequestReviewWhereInput | null;
	reviews_none?: GitHubPullRequestReviewWhereInput | null;
	reviewThreads_every?: GitHubReviewThreadWhereInput | null;
	reviewThreads_some?: GitHubReviewThreadWhereInput | null;
	reviewThreads_none?: GitHubReviewThreadWhereInput | null;
}

export interface GitHubPullRequestWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubRepositoryCreateInput {
	description: String;
	hasBranchRules: Boolean;
	hasContributingGuidelines: Boolean;
	hasPullRequestTemplate: Boolean;
	hasReadMe: Boolean;
	hasWiki: Boolean;
	id?: ID_Input | null;
	isArchived: Boolean;
	isDisabled: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	license?: String | null;
	name: String;
	primaryLanguage?: String | null;
	sshUrl: String;
	updatedAtExternal: DateTime;
	url: String;
	collaborators?: GitHubUserCreateManyInput | null;
	owner: GitHubUserCreateOneInput;
	repositoryTopics?: GitHubTopicCreateManyInput | null;
	stargazers?: GitHubUserCreateManyInput | null;
	watchers?: GitHubUserCreateManyInput | null;
}

export interface GitHubRepositoryCreateOneInput {
	create?: GitHubRepositoryCreateInput | null;
	connect?: GitHubRepositoryWhereUniqueInput | null;
}

export interface GitHubRepositorySubscriptionWhereInput {
	AND?: GitHubRepositorySubscriptionWhereInput[] | GitHubRepositorySubscriptionWhereInput | null;
	OR?: GitHubRepositorySubscriptionWhereInput[] | GitHubRepositorySubscriptionWhereInput | null;
	NOT?: GitHubRepositorySubscriptionWhereInput[] | GitHubRepositorySubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubRepositoryWhereInput | null;
}

export interface GitHubRepositoryUpdateDataInput {
	description?: String | null;
	hasBranchRules?: Boolean | null;
	hasContributingGuidelines?: Boolean | null;
	hasPullRequestTemplate?: Boolean | null;
	hasReadMe?: Boolean | null;
	hasWiki?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	license?: String | null;
	name?: String | null;
	primaryLanguage?: String | null;
	sshUrl?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	collaborators?: GitHubUserUpdateManyInput | null;
	owner?: GitHubUserUpdateOneRequiredInput | null;
	repositoryTopics?: GitHubTopicUpdateManyInput | null;
	stargazers?: GitHubUserUpdateManyInput | null;
	watchers?: GitHubUserUpdateManyInput | null;
}

export interface GitHubRepositoryUpdateInput {
	description?: String | null;
	hasBranchRules?: Boolean | null;
	hasContributingGuidelines?: Boolean | null;
	hasPullRequestTemplate?: Boolean | null;
	hasReadMe?: Boolean | null;
	hasWiki?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	license?: String | null;
	name?: String | null;
	primaryLanguage?: String | null;
	sshUrl?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
	collaborators?: GitHubUserUpdateManyInput | null;
	owner?: GitHubUserUpdateOneRequiredInput | null;
	repositoryTopics?: GitHubTopicUpdateManyInput | null;
	stargazers?: GitHubUserUpdateManyInput | null;
	watchers?: GitHubUserUpdateManyInput | null;
}

export interface GitHubRepositoryUpdateManyMutationInput {
	description?: String | null;
	hasBranchRules?: Boolean | null;
	hasContributingGuidelines?: Boolean | null;
	hasPullRequestTemplate?: Boolean | null;
	hasReadMe?: Boolean | null;
	hasWiki?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	license?: String | null;
	name?: String | null;
	primaryLanguage?: String | null;
	sshUrl?: String | null;
	updatedAtExternal?: DateTime | null;
	url?: String | null;
}

export interface GitHubRepositoryUpdateOneRequiredInput {
	create?: GitHubRepositoryCreateInput | null;
	connect?: GitHubRepositoryWhereUniqueInput | null;
	update?: GitHubRepositoryUpdateDataInput | null;
	upsert?: GitHubRepositoryUpsertNestedInput | null;
}

export interface GitHubRepositoryUpsertNestedInput {
	update: GitHubRepositoryUpdateDataInput;
	create: GitHubRepositoryCreateInput;
}

export interface GitHubRepositoryWhereInput {
	AND?: GitHubRepositoryWhereInput[] | GitHubRepositoryWhereInput | null;
	OR?: GitHubRepositoryWhereInput[] | GitHubRepositoryWhereInput | null;
	NOT?: GitHubRepositoryWhereInput[] | GitHubRepositoryWhereInput | null;
	description?: String | null;
	description_not?: String | null;
	description_in?: String[] | String | null;
	description_not_in?: String[] | String | null;
	description_lt?: String | null;
	description_lte?: String | null;
	description_gt?: String | null;
	description_gte?: String | null;
	description_contains?: String | null;
	description_not_contains?: String | null;
	description_starts_with?: String | null;
	description_not_starts_with?: String | null;
	description_ends_with?: String | null;
	description_not_ends_with?: String | null;
	hasBranchRules?: Boolean | null;
	hasBranchRules_not?: Boolean | null;
	hasContributingGuidelines?: Boolean | null;
	hasContributingGuidelines_not?: Boolean | null;
	hasPullRequestTemplate?: Boolean | null;
	hasPullRequestTemplate_not?: Boolean | null;
	hasReadMe?: Boolean | null;
	hasReadMe_not?: Boolean | null;
	hasWiki?: Boolean | null;
	hasWiki_not?: Boolean | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	isArchived?: Boolean | null;
	isArchived_not?: Boolean | null;
	isDisabled?: Boolean | null;
	isDisabled_not?: Boolean | null;
	isFork?: Boolean | null;
	isFork_not?: Boolean | null;
	isLocked?: Boolean | null;
	isLocked_not?: Boolean | null;
	isPrivate?: Boolean | null;
	isPrivate_not?: Boolean | null;
	license?: String | null;
	license_not?: String | null;
	license_in?: String[] | String | null;
	license_not_in?: String[] | String | null;
	license_lt?: String | null;
	license_lte?: String | null;
	license_gt?: String | null;
	license_gte?: String | null;
	license_contains?: String | null;
	license_not_contains?: String | null;
	license_starts_with?: String | null;
	license_not_starts_with?: String | null;
	license_ends_with?: String | null;
	license_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	primaryLanguage?: String | null;
	primaryLanguage_not?: String | null;
	primaryLanguage_in?: String[] | String | null;
	primaryLanguage_not_in?: String[] | String | null;
	primaryLanguage_lt?: String | null;
	primaryLanguage_lte?: String | null;
	primaryLanguage_gt?: String | null;
	primaryLanguage_gte?: String | null;
	primaryLanguage_contains?: String | null;
	primaryLanguage_not_contains?: String | null;
	primaryLanguage_starts_with?: String | null;
	primaryLanguage_not_starts_with?: String | null;
	primaryLanguage_ends_with?: String | null;
	primaryLanguage_not_ends_with?: String | null;
	sshUrl?: String | null;
	sshUrl_not?: String | null;
	sshUrl_in?: String[] | String | null;
	sshUrl_not_in?: String[] | String | null;
	sshUrl_lt?: String | null;
	sshUrl_lte?: String | null;
	sshUrl_gt?: String | null;
	sshUrl_gte?: String | null;
	sshUrl_contains?: String | null;
	sshUrl_not_contains?: String | null;
	sshUrl_starts_with?: String | null;
	sshUrl_not_starts_with?: String | null;
	sshUrl_ends_with?: String | null;
	sshUrl_not_ends_with?: String | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	collaborators_every?: GitHubUserWhereInput | null;
	collaborators_some?: GitHubUserWhereInput | null;
	collaborators_none?: GitHubUserWhereInput | null;
	owner?: GitHubUserWhereInput | null;
	repositoryTopics_every?: GitHubTopicWhereInput | null;
	repositoryTopics_some?: GitHubTopicWhereInput | null;
	repositoryTopics_none?: GitHubTopicWhereInput | null;
	stargazers_every?: GitHubUserWhereInput | null;
	stargazers_some?: GitHubUserWhereInput | null;
	stargazers_none?: GitHubUserWhereInput | null;
	watchers_every?: GitHubUserWhereInput | null;
	watchers_some?: GitHubUserWhereInput | null;
	watchers_none?: GitHubUserWhereInput | null;
}

export interface GitHubRepositoryWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubReviewRequestCreateInput {
	id?: ID_Input | null;
	pullRequest: GitHubPullRequestCreateOneInput;
	requestedReviewer: GitHubUserCreateOneInput;
}

export interface GitHubReviewRequestCreateManyInput {
	create?: GitHubReviewRequestCreateInput[] | GitHubReviewRequestCreateInput | null;
	connect?: GitHubReviewRequestWhereUniqueInput[] | GitHubReviewRequestWhereUniqueInput | null;
}

export interface GitHubReviewRequestScalarWhereInput {
	AND?: GitHubReviewRequestScalarWhereInput[] | GitHubReviewRequestScalarWhereInput | null;
	OR?: GitHubReviewRequestScalarWhereInput[] | GitHubReviewRequestScalarWhereInput | null;
	NOT?: GitHubReviewRequestScalarWhereInput[] | GitHubReviewRequestScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubReviewRequestSubscriptionWhereInput {
	AND?:
		| GitHubReviewRequestSubscriptionWhereInput[]
		| GitHubReviewRequestSubscriptionWhereInput
		| null;
	OR?:
		| GitHubReviewRequestSubscriptionWhereInput[]
		| GitHubReviewRequestSubscriptionWhereInput
		| null;
	NOT?:
		| GitHubReviewRequestSubscriptionWhereInput[]
		| GitHubReviewRequestSubscriptionWhereInput
		| null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubReviewRequestWhereInput | null;
}

export interface GitHubReviewRequestUpdateDataInput {
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
	requestedReviewer?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubReviewRequestUpdateInput {
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
	requestedReviewer?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubReviewRequestUpdateManyInput {
	create?: GitHubReviewRequestCreateInput[] | GitHubReviewRequestCreateInput | null;
	connect?: GitHubReviewRequestWhereUniqueInput[] | GitHubReviewRequestWhereUniqueInput | null;
	set?: GitHubReviewRequestWhereUniqueInput[] | GitHubReviewRequestWhereUniqueInput | null;
	disconnect?: GitHubReviewRequestWhereUniqueInput[] | GitHubReviewRequestWhereUniqueInput | null;
	delete?: GitHubReviewRequestWhereUniqueInput[] | GitHubReviewRequestWhereUniqueInput | null;
	update?:
		| GitHubReviewRequestUpdateWithWhereUniqueNestedInput[]
		| GitHubReviewRequestUpdateWithWhereUniqueNestedInput
		| null;
	deleteMany?: GitHubReviewRequestScalarWhereInput[] | GitHubReviewRequestScalarWhereInput | null;
	upsert?:
		| GitHubReviewRequestUpsertWithWhereUniqueNestedInput[]
		| GitHubReviewRequestUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubReviewRequestUpdateWithWhereUniqueNestedInput {
	where: GitHubReviewRequestWhereUniqueInput;
	data: GitHubReviewRequestUpdateDataInput;
}

export interface GitHubReviewRequestUpsertWithWhereUniqueNestedInput {
	where: GitHubReviewRequestWhereUniqueInput;
	update: GitHubReviewRequestUpdateDataInput;
	create: GitHubReviewRequestCreateInput;
}

export interface GitHubReviewRequestWhereInput {
	AND?: GitHubReviewRequestWhereInput[] | GitHubReviewRequestWhereInput | null;
	OR?: GitHubReviewRequestWhereInput[] | GitHubReviewRequestWhereInput | null;
	NOT?: GitHubReviewRequestWhereInput[] | GitHubReviewRequestWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	pullRequest?: GitHubPullRequestWhereInput | null;
	requestedReviewer?: GitHubUserWhereInput | null;
}

export interface GitHubReviewRequestWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubReviewThreadCreateInput {
	id?: ID_Input | null;
	isResolved: Boolean;
	comments?: GitHubCommentCreateManyInput | null;
	pullRequest: GitHubPullRequestCreateOneInput;
	repository: GitHubRepositoryCreateOneInput;
	resolvedBy: GitHubUserCreateOneInput;
}

export interface GitHubReviewThreadCreateManyInput {
	create?: GitHubReviewThreadCreateInput[] | GitHubReviewThreadCreateInput | null;
	connect?: GitHubReviewThreadWhereUniqueInput[] | GitHubReviewThreadWhereUniqueInput | null;
}

export interface GitHubReviewThreadScalarWhereInput {
	AND?: GitHubReviewThreadScalarWhereInput[] | GitHubReviewThreadScalarWhereInput | null;
	OR?: GitHubReviewThreadScalarWhereInput[] | GitHubReviewThreadScalarWhereInput | null;
	NOT?: GitHubReviewThreadScalarWhereInput[] | GitHubReviewThreadScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	isResolved?: Boolean | null;
	isResolved_not?: Boolean | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubReviewThreadSubscriptionWhereInput {
	AND?:
		| GitHubReviewThreadSubscriptionWhereInput[]
		| GitHubReviewThreadSubscriptionWhereInput
		| null;
	OR?:
		| GitHubReviewThreadSubscriptionWhereInput[]
		| GitHubReviewThreadSubscriptionWhereInput
		| null;
	NOT?:
		| GitHubReviewThreadSubscriptionWhereInput[]
		| GitHubReviewThreadSubscriptionWhereInput
		| null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubReviewThreadWhereInput | null;
}

export interface GitHubReviewThreadUpdateDataInput {
	isResolved?: Boolean | null;
	comments?: GitHubCommentUpdateManyInput | null;
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
	repository?: GitHubRepositoryUpdateOneRequiredInput | null;
	resolvedBy?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubReviewThreadUpdateInput {
	isResolved?: Boolean | null;
	comments?: GitHubCommentUpdateManyInput | null;
	pullRequest?: GitHubPullRequestUpdateOneRequiredInput | null;
	repository?: GitHubRepositoryUpdateOneRequiredInput | null;
	resolvedBy?: GitHubUserUpdateOneRequiredInput | null;
}

export interface GitHubReviewThreadUpdateManyDataInput {
	isResolved?: Boolean | null;
}

export interface GitHubReviewThreadUpdateManyInput {
	create?: GitHubReviewThreadCreateInput[] | GitHubReviewThreadCreateInput | null;
	connect?: GitHubReviewThreadWhereUniqueInput[] | GitHubReviewThreadWhereUniqueInput | null;
	set?: GitHubReviewThreadWhereUniqueInput[] | GitHubReviewThreadWhereUniqueInput | null;
	disconnect?: GitHubReviewThreadWhereUniqueInput[] | GitHubReviewThreadWhereUniqueInput | null;
	delete?: GitHubReviewThreadWhereUniqueInput[] | GitHubReviewThreadWhereUniqueInput | null;
	update?:
		| GitHubReviewThreadUpdateWithWhereUniqueNestedInput[]
		| GitHubReviewThreadUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubReviewThreadUpdateManyWithWhereNestedInput[]
		| GitHubReviewThreadUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubReviewThreadScalarWhereInput[] | GitHubReviewThreadScalarWhereInput | null;
	upsert?:
		| GitHubReviewThreadUpsertWithWhereUniqueNestedInput[]
		| GitHubReviewThreadUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubReviewThreadUpdateManyMutationInput {
	isResolved?: Boolean | null;
}

export interface GitHubReviewThreadUpdateManyWithWhereNestedInput {
	where: GitHubReviewThreadScalarWhereInput;
	data: GitHubReviewThreadUpdateManyDataInput;
}

export interface GitHubReviewThreadUpdateWithWhereUniqueNestedInput {
	where: GitHubReviewThreadWhereUniqueInput;
	data: GitHubReviewThreadUpdateDataInput;
}

export interface GitHubReviewThreadUpsertWithWhereUniqueNestedInput {
	where: GitHubReviewThreadWhereUniqueInput;
	update: GitHubReviewThreadUpdateDataInput;
	create: GitHubReviewThreadCreateInput;
}

export interface GitHubReviewThreadWhereInput {
	AND?: GitHubReviewThreadWhereInput[] | GitHubReviewThreadWhereInput | null;
	OR?: GitHubReviewThreadWhereInput[] | GitHubReviewThreadWhereInput | null;
	NOT?: GitHubReviewThreadWhereInput[] | GitHubReviewThreadWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	isResolved?: Boolean | null;
	isResolved_not?: Boolean | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	comments_every?: GitHubCommentWhereInput | null;
	comments_some?: GitHubCommentWhereInput | null;
	comments_none?: GitHubCommentWhereInput | null;
	pullRequest?: GitHubPullRequestWhereInput | null;
	repository?: GitHubRepositoryWhereInput | null;
	resolvedBy?: GitHubUserWhereInput | null;
}

export interface GitHubReviewThreadWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubTopicCreateInput {
	id?: ID_Input | null;
	name: String;
	relatedTopics?: GitHubTopicCreateManyInput | null;
	stargazers?: GitHubUserCreateManyInput | null;
}

export interface GitHubTopicCreateManyInput {
	create?: GitHubTopicCreateInput[] | GitHubTopicCreateInput | null;
	connect?: GitHubTopicWhereUniqueInput[] | GitHubTopicWhereUniqueInput | null;
}

export interface GitHubTopicScalarWhereInput {
	AND?: GitHubTopicScalarWhereInput[] | GitHubTopicScalarWhereInput | null;
	OR?: GitHubTopicScalarWhereInput[] | GitHubTopicScalarWhereInput | null;
	NOT?: GitHubTopicScalarWhereInput[] | GitHubTopicScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubTopicSubscriptionWhereInput {
	AND?: GitHubTopicSubscriptionWhereInput[] | GitHubTopicSubscriptionWhereInput | null;
	OR?: GitHubTopicSubscriptionWhereInput[] | GitHubTopicSubscriptionWhereInput | null;
	NOT?: GitHubTopicSubscriptionWhereInput[] | GitHubTopicSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubTopicWhereInput | null;
}

export interface GitHubTopicUpdateDataInput {
	name?: String | null;
	relatedTopics?: GitHubTopicUpdateManyInput | null;
	stargazers?: GitHubUserUpdateManyInput | null;
}

export interface GitHubTopicUpdateInput {
	name?: String | null;
	relatedTopics?: GitHubTopicUpdateManyInput | null;
	stargazers?: GitHubUserUpdateManyInput | null;
}

export interface GitHubTopicUpdateManyDataInput {
	name?: String | null;
}

export interface GitHubTopicUpdateManyInput {
	create?: GitHubTopicCreateInput[] | GitHubTopicCreateInput | null;
	connect?: GitHubTopicWhereUniqueInput[] | GitHubTopicWhereUniqueInput | null;
	set?: GitHubTopicWhereUniqueInput[] | GitHubTopicWhereUniqueInput | null;
	disconnect?: GitHubTopicWhereUniqueInput[] | GitHubTopicWhereUniqueInput | null;
	delete?: GitHubTopicWhereUniqueInput[] | GitHubTopicWhereUniqueInput | null;
	update?:
		| GitHubTopicUpdateWithWhereUniqueNestedInput[]
		| GitHubTopicUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubTopicUpdateManyWithWhereNestedInput[]
		| GitHubTopicUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubTopicScalarWhereInput[] | GitHubTopicScalarWhereInput | null;
	upsert?:
		| GitHubTopicUpsertWithWhereUniqueNestedInput[]
		| GitHubTopicUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubTopicUpdateManyMutationInput {
	name?: String | null;
}

export interface GitHubTopicUpdateManyWithWhereNestedInput {
	where: GitHubTopicScalarWhereInput;
	data: GitHubTopicUpdateManyDataInput;
}

export interface GitHubTopicUpdateWithWhereUniqueNestedInput {
	where: GitHubTopicWhereUniqueInput;
	data: GitHubTopicUpdateDataInput;
}

export interface GitHubTopicUpsertWithWhereUniqueNestedInput {
	where: GitHubTopicWhereUniqueInput;
	update: GitHubTopicUpdateDataInput;
	create: GitHubTopicCreateInput;
}

export interface GitHubTopicWhereInput {
	AND?: GitHubTopicWhereInput[] | GitHubTopicWhereInput | null;
	OR?: GitHubTopicWhereInput[] | GitHubTopicWhereInput | null;
	NOT?: GitHubTopicWhereInput[] | GitHubTopicWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	relatedTopics_every?: GitHubTopicWhereInput | null;
	relatedTopics_some?: GitHubTopicWhereInput | null;
	relatedTopics_none?: GitHubTopicWhereInput | null;
	stargazers_every?: GitHubUserWhereInput | null;
	stargazers_some?: GitHubUserWhereInput | null;
	stargazers_none?: GitHubUserWhereInput | null;
}

export interface GitHubTopicWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubUserCreateInput {
	id?: ID_Input | null;
	url: String;
	name: String;
	login: String;
	avatarUrl: String;
	bio?: String | null;
	company?: String | null;
	createdAtExternal: DateTime;
	email?: String | null;
	isBountyHunter: Boolean;
	isCampusExpert: Boolean;
	isDeveloperProgramMember: Boolean;
	isEmployee: Boolean;
	isHireable: Boolean;
	isSiteAdmin: Boolean;
	isViewer: Boolean;
	followers?: GitHubUserCreateManyInput | null;
	following?: GitHubUserCreateManyInput | null;
	issueComments?: GitHubCommentCreateManyInput | null;
	issues?: GitHubIssueCreateManyInput | null;
	pullRequests?: GitHubPullRequestCreateManyInput | null;
}

export interface GitHubUserCreateManyInput {
	create?: GitHubUserCreateInput[] | GitHubUserCreateInput | null;
	connect?: GitHubUserWhereUniqueInput[] | GitHubUserWhereUniqueInput | null;
}

export interface GitHubUserCreateOneInput {
	create?: GitHubUserCreateInput | null;
	connect?: GitHubUserWhereUniqueInput | null;
}

export interface GitHubUserScalarWhereInput {
	AND?: GitHubUserScalarWhereInput[] | GitHubUserScalarWhereInput | null;
	OR?: GitHubUserScalarWhereInput[] | GitHubUserScalarWhereInput | null;
	NOT?: GitHubUserScalarWhereInput[] | GitHubUserScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	login?: String | null;
	login_not?: String | null;
	login_in?: String[] | String | null;
	login_not_in?: String[] | String | null;
	login_lt?: String | null;
	login_lte?: String | null;
	login_gt?: String | null;
	login_gte?: String | null;
	login_contains?: String | null;
	login_not_contains?: String | null;
	login_starts_with?: String | null;
	login_not_starts_with?: String | null;
	login_ends_with?: String | null;
	login_not_ends_with?: String | null;
	avatarUrl?: String | null;
	avatarUrl_not?: String | null;
	avatarUrl_in?: String[] | String | null;
	avatarUrl_not_in?: String[] | String | null;
	avatarUrl_lt?: String | null;
	avatarUrl_lte?: String | null;
	avatarUrl_gt?: String | null;
	avatarUrl_gte?: String | null;
	avatarUrl_contains?: String | null;
	avatarUrl_not_contains?: String | null;
	avatarUrl_starts_with?: String | null;
	avatarUrl_not_starts_with?: String | null;
	avatarUrl_ends_with?: String | null;
	avatarUrl_not_ends_with?: String | null;
	bio?: String | null;
	bio_not?: String | null;
	bio_in?: String[] | String | null;
	bio_not_in?: String[] | String | null;
	bio_lt?: String | null;
	bio_lte?: String | null;
	bio_gt?: String | null;
	bio_gte?: String | null;
	bio_contains?: String | null;
	bio_not_contains?: String | null;
	bio_starts_with?: String | null;
	bio_not_starts_with?: String | null;
	bio_ends_with?: String | null;
	bio_not_ends_with?: String | null;
	company?: String | null;
	company_not?: String | null;
	company_in?: String[] | String | null;
	company_not_in?: String[] | String | null;
	company_lt?: String | null;
	company_lte?: String | null;
	company_gt?: String | null;
	company_gte?: String | null;
	company_contains?: String | null;
	company_not_contains?: String | null;
	company_starts_with?: String | null;
	company_not_starts_with?: String | null;
	company_ends_with?: String | null;
	company_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	email?: String | null;
	email_not?: String | null;
	email_in?: String[] | String | null;
	email_not_in?: String[] | String | null;
	email_lt?: String | null;
	email_lte?: String | null;
	email_gt?: String | null;
	email_gte?: String | null;
	email_contains?: String | null;
	email_not_contains?: String | null;
	email_starts_with?: String | null;
	email_not_starts_with?: String | null;
	email_ends_with?: String | null;
	email_not_ends_with?: String | null;
	isBountyHunter?: Boolean | null;
	isBountyHunter_not?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isCampusExpert_not?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isDeveloperProgramMember_not?: Boolean | null;
	isEmployee?: Boolean | null;
	isEmployee_not?: Boolean | null;
	isHireable?: Boolean | null;
	isHireable_not?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isSiteAdmin_not?: Boolean | null;
	isViewer?: Boolean | null;
	isViewer_not?: Boolean | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
}

export interface GitHubUserSubscriptionWhereInput {
	AND?: GitHubUserSubscriptionWhereInput[] | GitHubUserSubscriptionWhereInput | null;
	OR?: GitHubUserSubscriptionWhereInput[] | GitHubUserSubscriptionWhereInput | null;
	NOT?: GitHubUserSubscriptionWhereInput[] | GitHubUserSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubUserWhereInput | null;
}

export interface GitHubUserUpdateDataInput {
	url?: String | null;
	name?: String | null;
	login?: String | null;
	avatarUrl?: String | null;
	bio?: String | null;
	company?: String | null;
	createdAtExternal?: DateTime | null;
	email?: String | null;
	isBountyHunter?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isEmployee?: Boolean | null;
	isHireable?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isViewer?: Boolean | null;
	followers?: GitHubUserUpdateManyInput | null;
	following?: GitHubUserUpdateManyInput | null;
	issueComments?: GitHubCommentUpdateManyInput | null;
	issues?: GitHubIssueUpdateManyInput | null;
	pullRequests?: GitHubPullRequestUpdateManyInput | null;
}

export interface GitHubUserUpdateInput {
	url?: String | null;
	name?: String | null;
	login?: String | null;
	avatarUrl?: String | null;
	bio?: String | null;
	company?: String | null;
	createdAtExternal?: DateTime | null;
	email?: String | null;
	isBountyHunter?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isEmployee?: Boolean | null;
	isHireable?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isViewer?: Boolean | null;
	followers?: GitHubUserUpdateManyInput | null;
	following?: GitHubUserUpdateManyInput | null;
	issueComments?: GitHubCommentUpdateManyInput | null;
	issues?: GitHubIssueUpdateManyInput | null;
	pullRequests?: GitHubPullRequestUpdateManyInput | null;
}

export interface GitHubUserUpdateManyDataInput {
	url?: String | null;
	name?: String | null;
	login?: String | null;
	avatarUrl?: String | null;
	bio?: String | null;
	company?: String | null;
	createdAtExternal?: DateTime | null;
	email?: String | null;
	isBountyHunter?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isEmployee?: Boolean | null;
	isHireable?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isViewer?: Boolean | null;
}

export interface GitHubUserUpdateManyInput {
	create?: GitHubUserCreateInput[] | GitHubUserCreateInput | null;
	connect?: GitHubUserWhereUniqueInput[] | GitHubUserWhereUniqueInput | null;
	set?: GitHubUserWhereUniqueInput[] | GitHubUserWhereUniqueInput | null;
	disconnect?: GitHubUserWhereUniqueInput[] | GitHubUserWhereUniqueInput | null;
	delete?: GitHubUserWhereUniqueInput[] | GitHubUserWhereUniqueInput | null;
	update?:
		| GitHubUserUpdateWithWhereUniqueNestedInput[]
		| GitHubUserUpdateWithWhereUniqueNestedInput
		| null;
	updateMany?:
		| GitHubUserUpdateManyWithWhereNestedInput[]
		| GitHubUserUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubUserScalarWhereInput[] | GitHubUserScalarWhereInput | null;
	upsert?:
		| GitHubUserUpsertWithWhereUniqueNestedInput[]
		| GitHubUserUpsertWithWhereUniqueNestedInput
		| null;
}

export interface GitHubUserUpdateManyMutationInput {
	url?: String | null;
	name?: String | null;
	login?: String | null;
	avatarUrl?: String | null;
	bio?: String | null;
	company?: String | null;
	createdAtExternal?: DateTime | null;
	email?: String | null;
	isBountyHunter?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isEmployee?: Boolean | null;
	isHireable?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isViewer?: Boolean | null;
}

export interface GitHubUserUpdateManyWithWhereNestedInput {
	where: GitHubUserScalarWhereInput;
	data: GitHubUserUpdateManyDataInput;
}

export interface GitHubUserUpdateOneInput {
	create?: GitHubUserCreateInput | null;
	connect?: GitHubUserWhereUniqueInput | null;
	disconnect?: Boolean | null;
	delete?: Boolean | null;
	update?: GitHubUserUpdateDataInput | null;
	upsert?: GitHubUserUpsertNestedInput | null;
}

export interface GitHubUserUpdateOneRequiredInput {
	create?: GitHubUserCreateInput | null;
	connect?: GitHubUserWhereUniqueInput | null;
	update?: GitHubUserUpdateDataInput | null;
	upsert?: GitHubUserUpsertNestedInput | null;
}

export interface GitHubUserUpdateWithWhereUniqueNestedInput {
	where: GitHubUserWhereUniqueInput;
	data: GitHubUserUpdateDataInput;
}

export interface GitHubUserUpsertNestedInput {
	update: GitHubUserUpdateDataInput;
	create: GitHubUserCreateInput;
}

export interface GitHubUserUpsertWithWhereUniqueNestedInput {
	where: GitHubUserWhereUniqueInput;
	update: GitHubUserUpdateDataInput;
	create: GitHubUserCreateInput;
}

export interface GitHubUserWhereInput {
	AND?: GitHubUserWhereInput[] | GitHubUserWhereInput | null;
	OR?: GitHubUserWhereInput[] | GitHubUserWhereInput | null;
	NOT?: GitHubUserWhereInput[] | GitHubUserWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	login?: String | null;
	login_not?: String | null;
	login_in?: String[] | String | null;
	login_not_in?: String[] | String | null;
	login_lt?: String | null;
	login_lte?: String | null;
	login_gt?: String | null;
	login_gte?: String | null;
	login_contains?: String | null;
	login_not_contains?: String | null;
	login_starts_with?: String | null;
	login_not_starts_with?: String | null;
	login_ends_with?: String | null;
	login_not_ends_with?: String | null;
	avatarUrl?: String | null;
	avatarUrl_not?: String | null;
	avatarUrl_in?: String[] | String | null;
	avatarUrl_not_in?: String[] | String | null;
	avatarUrl_lt?: String | null;
	avatarUrl_lte?: String | null;
	avatarUrl_gt?: String | null;
	avatarUrl_gte?: String | null;
	avatarUrl_contains?: String | null;
	avatarUrl_not_contains?: String | null;
	avatarUrl_starts_with?: String | null;
	avatarUrl_not_starts_with?: String | null;
	avatarUrl_ends_with?: String | null;
	avatarUrl_not_ends_with?: String | null;
	bio?: String | null;
	bio_not?: String | null;
	bio_in?: String[] | String | null;
	bio_not_in?: String[] | String | null;
	bio_lt?: String | null;
	bio_lte?: String | null;
	bio_gt?: String | null;
	bio_gte?: String | null;
	bio_contains?: String | null;
	bio_not_contains?: String | null;
	bio_starts_with?: String | null;
	bio_not_starts_with?: String | null;
	bio_ends_with?: String | null;
	bio_not_ends_with?: String | null;
	company?: String | null;
	company_not?: String | null;
	company_in?: String[] | String | null;
	company_not_in?: String[] | String | null;
	company_lt?: String | null;
	company_lte?: String | null;
	company_gt?: String | null;
	company_gte?: String | null;
	company_contains?: String | null;
	company_not_contains?: String | null;
	company_starts_with?: String | null;
	company_not_starts_with?: String | null;
	company_ends_with?: String | null;
	company_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	email?: String | null;
	email_not?: String | null;
	email_in?: String[] | String | null;
	email_not_in?: String[] | String | null;
	email_lt?: String | null;
	email_lte?: String | null;
	email_gt?: String | null;
	email_gte?: String | null;
	email_contains?: String | null;
	email_not_contains?: String | null;
	email_starts_with?: String | null;
	email_not_starts_with?: String | null;
	email_ends_with?: String | null;
	email_not_ends_with?: String | null;
	isBountyHunter?: Boolean | null;
	isBountyHunter_not?: Boolean | null;
	isCampusExpert?: Boolean | null;
	isCampusExpert_not?: Boolean | null;
	isDeveloperProgramMember?: Boolean | null;
	isDeveloperProgramMember_not?: Boolean | null;
	isEmployee?: Boolean | null;
	isEmployee_not?: Boolean | null;
	isHireable?: Boolean | null;
	isHireable_not?: Boolean | null;
	isSiteAdmin?: Boolean | null;
	isSiteAdmin_not?: Boolean | null;
	isViewer?: Boolean | null;
	isViewer_not?: Boolean | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	followers_every?: GitHubUserWhereInput | null;
	followers_some?: GitHubUserWhereInput | null;
	followers_none?: GitHubUserWhereInput | null;
	following_every?: GitHubUserWhereInput | null;
	following_some?: GitHubUserWhereInput | null;
	following_none?: GitHubUserWhereInput | null;
	issueComments_every?: GitHubCommentWhereInput | null;
	issueComments_some?: GitHubCommentWhereInput | null;
	issueComments_none?: GitHubCommentWhereInput | null;
	issues_every?: GitHubIssueWhereInput | null;
	issues_some?: GitHubIssueWhereInput | null;
	issues_none?: GitHubIssueWhereInput | null;
	pullRequests_every?: GitHubPullRequestWhereInput | null;
	pullRequests_some?: GitHubPullRequestWhereInput | null;
	pullRequests_none?: GitHubPullRequestWhereInput | null;
}

export interface GitHubUserWhereUniqueInput {
	id?: ID_Input | null;
}

export interface GitHubWebhookEventCreateInput {
	id?: ID_Input | null;
	eventType: String;
	action?: String | null;
	sender: String;
	repository: RepositoryCreateOneWithoutWebhookEventsInput;
}

export interface GitHubWebhookEventCreateManyWithoutRepositoryInput {
	create?:
		| GitHubWebhookEventCreateWithoutRepositoryInput[]
		| GitHubWebhookEventCreateWithoutRepositoryInput
		| null;
	connect?: GitHubWebhookEventWhereUniqueInput[] | GitHubWebhookEventWhereUniqueInput | null;
}

export interface GitHubWebhookEventCreateWithoutRepositoryInput {
	id?: ID_Input | null;
	eventType: String;
	action?: String | null;
	sender: String;
}

export interface GitHubWebhookEventScalarWhereInput {
	AND?: GitHubWebhookEventScalarWhereInput[] | GitHubWebhookEventScalarWhereInput | null;
	OR?: GitHubWebhookEventScalarWhereInput[] | GitHubWebhookEventScalarWhereInput | null;
	NOT?: GitHubWebhookEventScalarWhereInput[] | GitHubWebhookEventScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	eventType?: String | null;
	eventType_not?: String | null;
	eventType_in?: String[] | String | null;
	eventType_not_in?: String[] | String | null;
	eventType_lt?: String | null;
	eventType_lte?: String | null;
	eventType_gt?: String | null;
	eventType_gte?: String | null;
	eventType_contains?: String | null;
	eventType_not_contains?: String | null;
	eventType_starts_with?: String | null;
	eventType_not_starts_with?: String | null;
	eventType_ends_with?: String | null;
	eventType_not_ends_with?: String | null;
	action?: String | null;
	action_not?: String | null;
	action_in?: String[] | String | null;
	action_not_in?: String[] | String | null;
	action_lt?: String | null;
	action_lte?: String | null;
	action_gt?: String | null;
	action_gte?: String | null;
	action_contains?: String | null;
	action_not_contains?: String | null;
	action_starts_with?: String | null;
	action_not_starts_with?: String | null;
	action_ends_with?: String | null;
	action_not_ends_with?: String | null;
	sender?: String | null;
	sender_not?: String | null;
	sender_in?: String[] | String | null;
	sender_not_in?: String[] | String | null;
	sender_lt?: String | null;
	sender_lte?: String | null;
	sender_gt?: String | null;
	sender_gte?: String | null;
	sender_contains?: String | null;
	sender_not_contains?: String | null;
	sender_starts_with?: String | null;
	sender_not_starts_with?: String | null;
	sender_ends_with?: String | null;
	sender_not_ends_with?: String | null;
}

export interface GitHubWebhookEventSubscriptionWhereInput {
	AND?:
		| GitHubWebhookEventSubscriptionWhereInput[]
		| GitHubWebhookEventSubscriptionWhereInput
		| null;
	OR?:
		| GitHubWebhookEventSubscriptionWhereInput[]
		| GitHubWebhookEventSubscriptionWhereInput
		| null;
	NOT?:
		| GitHubWebhookEventSubscriptionWhereInput[]
		| GitHubWebhookEventSubscriptionWhereInput
		| null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: GitHubWebhookEventWhereInput | null;
}

export interface GitHubWebhookEventUpdateInput {
	eventType?: String | null;
	action?: String | null;
	sender?: String | null;
	repository?: RepositoryUpdateOneRequiredWithoutWebhookEventsInput | null;
}

export interface GitHubWebhookEventUpdateManyDataInput {
	eventType?: String | null;
	action?: String | null;
	sender?: String | null;
}

export interface GitHubWebhookEventUpdateManyMutationInput {
	eventType?: String | null;
	action?: String | null;
	sender?: String | null;
}

export interface GitHubWebhookEventUpdateManyWithoutRepositoryInput {
	create?:
		| GitHubWebhookEventCreateWithoutRepositoryInput[]
		| GitHubWebhookEventCreateWithoutRepositoryInput
		| null;
	connect?: GitHubWebhookEventWhereUniqueInput[] | GitHubWebhookEventWhereUniqueInput | null;
	set?: GitHubWebhookEventWhereUniqueInput[] | GitHubWebhookEventWhereUniqueInput | null;
	disconnect?: GitHubWebhookEventWhereUniqueInput[] | GitHubWebhookEventWhereUniqueInput | null;
	delete?: GitHubWebhookEventWhereUniqueInput[] | GitHubWebhookEventWhereUniqueInput | null;
	update?:
		| GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput[]
		| GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput
		| null;
	updateMany?:
		| GitHubWebhookEventUpdateManyWithWhereNestedInput[]
		| GitHubWebhookEventUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: GitHubWebhookEventScalarWhereInput[] | GitHubWebhookEventScalarWhereInput | null;
	upsert?:
		| GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput[]
		| GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput
		| null;
}

export interface GitHubWebhookEventUpdateManyWithWhereNestedInput {
	where: GitHubWebhookEventScalarWhereInput;
	data: GitHubWebhookEventUpdateManyDataInput;
}

export interface GitHubWebhookEventUpdateWithoutRepositoryDataInput {
	eventType?: String | null;
	action?: String | null;
	sender?: String | null;
}

export interface GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput {
	where: GitHubWebhookEventWhereUniqueInput;
	data: GitHubWebhookEventUpdateWithoutRepositoryDataInput;
}

export interface GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput {
	where: GitHubWebhookEventWhereUniqueInput;
	update: GitHubWebhookEventUpdateWithoutRepositoryDataInput;
	create: GitHubWebhookEventCreateWithoutRepositoryInput;
}

export interface GitHubWebhookEventWhereInput {
	AND?: GitHubWebhookEventWhereInput[] | GitHubWebhookEventWhereInput | null;
	OR?: GitHubWebhookEventWhereInput[] | GitHubWebhookEventWhereInput | null;
	NOT?: GitHubWebhookEventWhereInput[] | GitHubWebhookEventWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	eventType?: String | null;
	eventType_not?: String | null;
	eventType_in?: String[] | String | null;
	eventType_not_in?: String[] | String | null;
	eventType_lt?: String | null;
	eventType_lte?: String | null;
	eventType_gt?: String | null;
	eventType_gte?: String | null;
	eventType_contains?: String | null;
	eventType_not_contains?: String | null;
	eventType_starts_with?: String | null;
	eventType_not_starts_with?: String | null;
	eventType_ends_with?: String | null;
	eventType_not_ends_with?: String | null;
	action?: String | null;
	action_not?: String | null;
	action_in?: String[] | String | null;
	action_not_in?: String[] | String | null;
	action_lt?: String | null;
	action_lte?: String | null;
	action_gt?: String | null;
	action_gte?: String | null;
	action_contains?: String | null;
	action_not_contains?: String | null;
	action_starts_with?: String | null;
	action_not_starts_with?: String | null;
	action_ends_with?: String | null;
	action_not_ends_with?: String | null;
	sender?: String | null;
	sender_not?: String | null;
	sender_in?: String[] | String | null;
	sender_not_in?: String[] | String | null;
	sender_lt?: String | null;
	sender_lte?: String | null;
	sender_gt?: String | null;
	sender_gte?: String | null;
	sender_contains?: String | null;
	sender_not_contains?: String | null;
	sender_starts_with?: String | null;
	sender_not_starts_with?: String | null;
	sender_ends_with?: String | null;
	sender_not_ends_with?: String | null;
	repository?: RepositoryWhereInput | null;
}

export interface GitHubWebhookEventWhereUniqueInput {
	id?: ID_Input | null;
}

export interface RepositoryCreateInput {
	id?: ID_Input | null;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description?: String | null;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput | null;
	game?: GameCreateOneWithoutRepositoryInput | null;
}

export interface RepositoryCreateManyWithoutAddedByInput {
	create?: RepositoryCreateWithoutAddedByInput[] | RepositoryCreateWithoutAddedByInput | null;
	connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
}

export interface RepositoryCreateManyWithoutAppKeyInput {
	create?: RepositoryCreateWithoutAppKeyInput[] | RepositoryCreateWithoutAppKeyInput | null;
	connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
}

export interface RepositoryCreateOneWithoutGameInput {
	create?: RepositoryCreateWithoutGameInput | null;
	connect?: RepositoryWhereUniqueInput | null;
}

export interface RepositoryCreateOneWithoutWebhookEventsInput {
	create?: RepositoryCreateWithoutWebhookEventsInput | null;
	connect?: RepositoryWhereUniqueInput | null;
}

export interface RepositoryCreateWithoutAddedByInput {
	id?: ID_Input | null;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description?: String | null;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput | null;
	game?: GameCreateOneWithoutRepositoryInput | null;
}

export interface RepositoryCreateWithoutAppKeyInput {
	id?: ID_Input | null;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description?: String | null;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput | null;
	game?: GameCreateOneWithoutRepositoryInput | null;
}

export interface RepositoryCreateWithoutGameInput {
	id?: ID_Input | null;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description?: String | null;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput | null;
}

export interface RepositoryCreateWithoutWebhookEventsInput {
	id?: ID_Input | null;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description?: String | null;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	game?: GameCreateOneWithoutRepositoryInput | null;
}

export interface RepositoryScalarWhereInput {
	AND?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null;
	OR?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null;
	NOT?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	idExternal?: String | null;
	idExternal_not?: String | null;
	idExternal_in?: String[] | String | null;
	idExternal_not_in?: String[] | String | null;
	idExternal_lt?: String | null;
	idExternal_lte?: String | null;
	idExternal_gt?: String | null;
	idExternal_gte?: String | null;
	idExternal_contains?: String | null;
	idExternal_not_contains?: String | null;
	idExternal_starts_with?: String | null;
	idExternal_not_starts_with?: String | null;
	idExternal_ends_with?: String | null;
	idExternal_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	description?: String | null;
	description_not?: String | null;
	description_in?: String[] | String | null;
	description_not_in?: String[] | String | null;
	description_lt?: String | null;
	description_lte?: String | null;
	description_gt?: String | null;
	description_gte?: String | null;
	description_contains?: String | null;
	description_not_contains?: String | null;
	description_starts_with?: String | null;
	description_not_starts_with?: String | null;
	description_ends_with?: String | null;
	description_not_ends_with?: String | null;
	homepageUrl?: String | null;
	homepageUrl_not?: String | null;
	homepageUrl_in?: String[] | String | null;
	homepageUrl_not_in?: String[] | String | null;
	homepageUrl_lt?: String | null;
	homepageUrl_lte?: String | null;
	homepageUrl_gt?: String | null;
	homepageUrl_gte?: String | null;
	homepageUrl_contains?: String | null;
	homepageUrl_not_contains?: String | null;
	homepageUrl_starts_with?: String | null;
	homepageUrl_not_starts_with?: String | null;
	homepageUrl_ends_with?: String | null;
	homepageUrl_not_ends_with?: String | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	owner?: String | null;
	owner_not?: String | null;
	owner_in?: String[] | String | null;
	owner_not_in?: String[] | String | null;
	owner_lt?: String | null;
	owner_lte?: String | null;
	owner_gt?: String | null;
	owner_gte?: String | null;
	owner_contains?: String | null;
	owner_not_contains?: String | null;
	owner_starts_with?: String | null;
	owner_not_starts_with?: String | null;
	owner_ends_with?: String | null;
	owner_not_ends_with?: String | null;
	isTracked?: Boolean | null;
	isTracked_not?: Boolean | null;
	isFork?: Boolean | null;
	isFork_not?: Boolean | null;
	isLocked?: Boolean | null;
	isLocked_not?: Boolean | null;
	isPrivate?: Boolean | null;
	isPrivate_not?: Boolean | null;
	isArchived?: Boolean | null;
	isArchived_not?: Boolean | null;
	isDisabled?: Boolean | null;
	isDisabled_not?: Boolean | null;
	sshUrl?: String | null;
	sshUrl_not?: String | null;
	sshUrl_in?: String[] | String | null;
	sshUrl_not_in?: String[] | String | null;
	sshUrl_lt?: String | null;
	sshUrl_lte?: String | null;
	sshUrl_gt?: String | null;
	sshUrl_gte?: String | null;
	sshUrl_contains?: String | null;
	sshUrl_not_contains?: String | null;
	sshUrl_starts_with?: String | null;
	sshUrl_not_starts_with?: String | null;
	sshUrl_ends_with?: String | null;
	sshUrl_not_ends_with?: String | null;
	stargazers?: Int | null;
	stargazers_not?: Int | null;
	stargazers_in?: Int[] | Int | null;
	stargazers_not_in?: Int[] | Int | null;
	stargazers_lt?: Int | null;
	stargazers_lte?: Int | null;
	stargazers_gt?: Int | null;
	stargazers_gte?: Int | null;
	collaborators?: Int | null;
	collaborators_not?: Int | null;
	collaborators_in?: Int[] | Int | null;
	collaborators_not_in?: Int[] | Int | null;
	collaborators_lt?: Int | null;
	collaborators_lte?: Int | null;
	collaborators_gt?: Int | null;
	collaborators_gte?: Int | null;
	watchers?: Int | null;
	watchers_not?: Int | null;
	watchers_in?: Int[] | Int | null;
	watchers_not_in?: Int[] | Int | null;
	watchers_lt?: Int | null;
	watchers_lte?: Int | null;
	watchers_gt?: Int | null;
	watchers_gte?: Int | null;
	issues?: Int | null;
	issues_not?: Int | null;
	issues_in?: Int[] | Int | null;
	issues_not_in?: Int[] | Int | null;
	issues_lt?: Int | null;
	issues_lte?: Int | null;
	issues_gt?: Int | null;
	issues_gte?: Int | null;
	pullRequests?: Int | null;
	pullRequests_not?: Int | null;
	pullRequests_in?: Int[] | Int | null;
	pullRequests_not_in?: Int[] | Int | null;
	pullRequests_lt?: Int | null;
	pullRequests_lte?: Int | null;
	pullRequests_gt?: Int | null;
	pullRequests_gte?: Int | null;
}

export interface RepositorySubscriptionWhereInput {
	AND?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null;
	OR?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null;
	NOT?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: RepositoryWhereInput | null;
}

export interface RepositoryUpdateInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput | null;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput | null;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput | null;
	game?: GameUpdateOneWithoutRepositoryInput | null;
}

export interface RepositoryUpdateManyDataInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
}

export interface RepositoryUpdateManyMutationInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
}

export interface RepositoryUpdateManyWithoutAddedByInput {
	create?: RepositoryCreateWithoutAddedByInput[] | RepositoryCreateWithoutAddedByInput | null;
	connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	set?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	disconnect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	delete?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	update?:
		| RepositoryUpdateWithWhereUniqueWithoutAddedByInput[]
		| RepositoryUpdateWithWhereUniqueWithoutAddedByInput
		| null;
	updateMany?:
		| RepositoryUpdateManyWithWhereNestedInput[]
		| RepositoryUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null;
	upsert?:
		| RepositoryUpsertWithWhereUniqueWithoutAddedByInput[]
		| RepositoryUpsertWithWhereUniqueWithoutAddedByInput
		| null;
}

export interface RepositoryUpdateManyWithoutAppKeyInput {
	create?: RepositoryCreateWithoutAppKeyInput[] | RepositoryCreateWithoutAppKeyInput | null;
	connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	set?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	disconnect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	delete?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null;
	update?:
		| RepositoryUpdateWithWhereUniqueWithoutAppKeyInput[]
		| RepositoryUpdateWithWhereUniqueWithoutAppKeyInput
		| null;
	updateMany?:
		| RepositoryUpdateManyWithWhereNestedInput[]
		| RepositoryUpdateManyWithWhereNestedInput
		| null;
	deleteMany?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null;
	upsert?:
		| RepositoryUpsertWithWhereUniqueWithoutAppKeyInput[]
		| RepositoryUpsertWithWhereUniqueWithoutAppKeyInput
		| null;
}

export interface RepositoryUpdateManyWithWhereNestedInput {
	where: RepositoryScalarWhereInput;
	data: RepositoryUpdateManyDataInput;
}

export interface RepositoryUpdateOneRequiredWithoutGameInput {
	create?: RepositoryCreateWithoutGameInput | null;
	connect?: RepositoryWhereUniqueInput | null;
	update?: RepositoryUpdateWithoutGameDataInput | null;
	upsert?: RepositoryUpsertWithoutGameInput | null;
}

export interface RepositoryUpdateOneRequiredWithoutWebhookEventsInput {
	create?: RepositoryCreateWithoutWebhookEventsInput | null;
	connect?: RepositoryWhereUniqueInput | null;
	update?: RepositoryUpdateWithoutWebhookEventsDataInput | null;
	upsert?: RepositoryUpsertWithoutWebhookEventsInput | null;
}

export interface RepositoryUpdateWithoutAddedByDataInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput | null;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput | null;
	game?: GameUpdateOneWithoutRepositoryInput | null;
}

export interface RepositoryUpdateWithoutAppKeyDataInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput | null;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput | null;
	game?: GameUpdateOneWithoutRepositoryInput | null;
}

export interface RepositoryUpdateWithoutGameDataInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput | null;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput | null;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput | null;
}

export interface RepositoryUpdateWithoutWebhookEventsDataInput {
	idExternal?: String | null;
	createdAtExternal?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	name?: String | null;
	description?: String | null;
	homepageUrl?: String | null;
	url?: String | null;
	owner?: String | null;
	isTracked?: Boolean | null;
	isFork?: Boolean | null;
	isLocked?: Boolean | null;
	isPrivate?: Boolean | null;
	isArchived?: Boolean | null;
	isDisabled?: Boolean | null;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput | null;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput | null;
	game?: GameUpdateOneWithoutRepositoryInput | null;
}

export interface RepositoryUpdateWithWhereUniqueWithoutAddedByInput {
	where: RepositoryWhereUniqueInput;
	data: RepositoryUpdateWithoutAddedByDataInput;
}

export interface RepositoryUpdateWithWhereUniqueWithoutAppKeyInput {
	where: RepositoryWhereUniqueInput;
	data: RepositoryUpdateWithoutAppKeyDataInput;
}

export interface RepositoryUpsertWithoutGameInput {
	update: RepositoryUpdateWithoutGameDataInput;
	create: RepositoryCreateWithoutGameInput;
}

export interface RepositoryUpsertWithoutWebhookEventsInput {
	update: RepositoryUpdateWithoutWebhookEventsDataInput;
	create: RepositoryCreateWithoutWebhookEventsInput;
}

export interface RepositoryUpsertWithWhereUniqueWithoutAddedByInput {
	where: RepositoryWhereUniqueInput;
	update: RepositoryUpdateWithoutAddedByDataInput;
	create: RepositoryCreateWithoutAddedByInput;
}

export interface RepositoryUpsertWithWhereUniqueWithoutAppKeyInput {
	where: RepositoryWhereUniqueInput;
	update: RepositoryUpdateWithoutAppKeyDataInput;
	create: RepositoryCreateWithoutAppKeyInput;
}

export interface RepositoryWhereInput {
	AND?: RepositoryWhereInput[] | RepositoryWhereInput | null;
	OR?: RepositoryWhereInput[] | RepositoryWhereInput | null;
	NOT?: RepositoryWhereInput[] | RepositoryWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	idExternal?: String | null;
	idExternal_not?: String | null;
	idExternal_in?: String[] | String | null;
	idExternal_not_in?: String[] | String | null;
	idExternal_lt?: String | null;
	idExternal_lte?: String | null;
	idExternal_gt?: String | null;
	idExternal_gte?: String | null;
	idExternal_contains?: String | null;
	idExternal_not_contains?: String | null;
	idExternal_starts_with?: String | null;
	idExternal_not_starts_with?: String | null;
	idExternal_ends_with?: String | null;
	idExternal_not_ends_with?: String | null;
	createdAtExternal?: DateTime | null;
	createdAtExternal_not?: DateTime | null;
	createdAtExternal_in?: DateTime[] | DateTime | null;
	createdAtExternal_not_in?: DateTime[] | DateTime | null;
	createdAtExternal_lt?: DateTime | null;
	createdAtExternal_lte?: DateTime | null;
	createdAtExternal_gt?: DateTime | null;
	createdAtExternal_gte?: DateTime | null;
	updatedAtExternal?: DateTime | null;
	updatedAtExternal_not?: DateTime | null;
	updatedAtExternal_in?: DateTime[] | DateTime | null;
	updatedAtExternal_not_in?: DateTime[] | DateTime | null;
	updatedAtExternal_lt?: DateTime | null;
	updatedAtExternal_lte?: DateTime | null;
	updatedAtExternal_gt?: DateTime | null;
	updatedAtExternal_gte?: DateTime | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	description?: String | null;
	description_not?: String | null;
	description_in?: String[] | String | null;
	description_not_in?: String[] | String | null;
	description_lt?: String | null;
	description_lte?: String | null;
	description_gt?: String | null;
	description_gte?: String | null;
	description_contains?: String | null;
	description_not_contains?: String | null;
	description_starts_with?: String | null;
	description_not_starts_with?: String | null;
	description_ends_with?: String | null;
	description_not_ends_with?: String | null;
	homepageUrl?: String | null;
	homepageUrl_not?: String | null;
	homepageUrl_in?: String[] | String | null;
	homepageUrl_not_in?: String[] | String | null;
	homepageUrl_lt?: String | null;
	homepageUrl_lte?: String | null;
	homepageUrl_gt?: String | null;
	homepageUrl_gte?: String | null;
	homepageUrl_contains?: String | null;
	homepageUrl_not_contains?: String | null;
	homepageUrl_starts_with?: String | null;
	homepageUrl_not_starts_with?: String | null;
	homepageUrl_ends_with?: String | null;
	homepageUrl_not_ends_with?: String | null;
	url?: String | null;
	url_not?: String | null;
	url_in?: String[] | String | null;
	url_not_in?: String[] | String | null;
	url_lt?: String | null;
	url_lte?: String | null;
	url_gt?: String | null;
	url_gte?: String | null;
	url_contains?: String | null;
	url_not_contains?: String | null;
	url_starts_with?: String | null;
	url_not_starts_with?: String | null;
	url_ends_with?: String | null;
	url_not_ends_with?: String | null;
	owner?: String | null;
	owner_not?: String | null;
	owner_in?: String[] | String | null;
	owner_not_in?: String[] | String | null;
	owner_lt?: String | null;
	owner_lte?: String | null;
	owner_gt?: String | null;
	owner_gte?: String | null;
	owner_contains?: String | null;
	owner_not_contains?: String | null;
	owner_starts_with?: String | null;
	owner_not_starts_with?: String | null;
	owner_ends_with?: String | null;
	owner_not_ends_with?: String | null;
	isTracked?: Boolean | null;
	isTracked_not?: Boolean | null;
	isFork?: Boolean | null;
	isFork_not?: Boolean | null;
	isLocked?: Boolean | null;
	isLocked_not?: Boolean | null;
	isPrivate?: Boolean | null;
	isPrivate_not?: Boolean | null;
	isArchived?: Boolean | null;
	isArchived_not?: Boolean | null;
	isDisabled?: Boolean | null;
	isDisabled_not?: Boolean | null;
	sshUrl?: String | null;
	sshUrl_not?: String | null;
	sshUrl_in?: String[] | String | null;
	sshUrl_not_in?: String[] | String | null;
	sshUrl_lt?: String | null;
	sshUrl_lte?: String | null;
	sshUrl_gt?: String | null;
	sshUrl_gte?: String | null;
	sshUrl_contains?: String | null;
	sshUrl_not_contains?: String | null;
	sshUrl_starts_with?: String | null;
	sshUrl_not_starts_with?: String | null;
	sshUrl_ends_with?: String | null;
	sshUrl_not_ends_with?: String | null;
	stargazers?: Int | null;
	stargazers_not?: Int | null;
	stargazers_in?: Int[] | Int | null;
	stargazers_not_in?: Int[] | Int | null;
	stargazers_lt?: Int | null;
	stargazers_lte?: Int | null;
	stargazers_gt?: Int | null;
	stargazers_gte?: Int | null;
	collaborators?: Int | null;
	collaborators_not?: Int | null;
	collaborators_in?: Int[] | Int | null;
	collaborators_not_in?: Int[] | Int | null;
	collaborators_lt?: Int | null;
	collaborators_lte?: Int | null;
	collaborators_gt?: Int | null;
	collaborators_gte?: Int | null;
	watchers?: Int | null;
	watchers_not?: Int | null;
	watchers_in?: Int[] | Int | null;
	watchers_not_in?: Int[] | Int | null;
	watchers_lt?: Int | null;
	watchers_lte?: Int | null;
	watchers_gt?: Int | null;
	watchers_gte?: Int | null;
	issues?: Int | null;
	issues_not?: Int | null;
	issues_in?: Int[] | Int | null;
	issues_not_in?: Int[] | Int | null;
	issues_lt?: Int | null;
	issues_lte?: Int | null;
	issues_gt?: Int | null;
	issues_gte?: Int | null;
	pullRequests?: Int | null;
	pullRequests_not?: Int | null;
	pullRequests_in?: Int[] | Int | null;
	pullRequests_not_in?: Int[] | Int | null;
	pullRequests_lt?: Int | null;
	pullRequests_lte?: Int | null;
	pullRequests_gt?: Int | null;
	pullRequests_gte?: Int | null;
	addedBy?: UserWhereInput | null;
	appKey?: AppKeyWhereInput | null;
	webhookEvents_every?: GitHubWebhookEventWhereInput | null;
	webhookEvents_some?: GitHubWebhookEventWhereInput | null;
	webhookEvents_none?: GitHubWebhookEventWhereInput | null;
	game?: GameWhereInput | null;
}

export interface RepositoryWhereUniqueInput {
	id?: ID_Input | null;
	idExternal?: String | null;
	name?: String | null;
}

export interface UserCreateInput {
	id?: ID_Input | null;
	email: String;
	hash: String;
	name?: String | null;
	role?: Role | null;
	gitLogin: String;
	keys?: AppKeyCreateManyWithoutUserInput | null;
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput | null;
	gamesOwned?: GameCreateManyWithoutOwnerInput | null;
}

export interface UserCreateOneWithoutAddedRepositoriesInput {
	create?: UserCreateWithoutAddedRepositoriesInput | null;
	connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutGamesOwnedInput {
	create?: UserCreateWithoutGamesOwnedInput | null;
	connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutKeysInput {
	create?: UserCreateWithoutKeysInput | null;
	connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutAddedRepositoriesInput {
	id?: ID_Input | null;
	email: String;
	hash: String;
	name?: String | null;
	role?: Role | null;
	gitLogin: String;
	keys?: AppKeyCreateManyWithoutUserInput | null;
	gamesOwned?: GameCreateManyWithoutOwnerInput | null;
}

export interface UserCreateWithoutGamesOwnedInput {
	id?: ID_Input | null;
	email: String;
	hash: String;
	name?: String | null;
	role?: Role | null;
	gitLogin: String;
	keys?: AppKeyCreateManyWithoutUserInput | null;
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput | null;
}

export interface UserCreateWithoutKeysInput {
	id?: ID_Input | null;
	email: String;
	hash: String;
	name?: String | null;
	role?: Role | null;
	gitLogin: String;
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput | null;
	gamesOwned?: GameCreateManyWithoutOwnerInput | null;
}

export interface UserSubscriptionWhereInput {
	AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
	OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
	NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
	mutation_in?: MutationType[] | MutationType | null;
	updatedFields_contains?: String | null;
	updatedFields_contains_every?: String[] | String | null;
	updatedFields_contains_some?: String[] | String | null;
	node?: UserWhereInput | null;
}

export interface UserUpdateInput {
	email?: String | null;
	hash?: String | null;
	name?: String | null;
	role?: Role | null;
	gitLogin?: String | null;
	keys?: AppKeyUpdateManyWithoutUserInput | null;
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput | null;
	gamesOwned?: GameUpdateManyWithoutOwnerInput | null;
}

export interface UserUpdateManyMutationInput {
	email?: String | null;
	hash?: String | null;
	name?: String | null;
	role?: Role | null;
	gitLogin?: String | null;
}

export interface UserUpdateOneRequiredWithoutAddedRepositoriesInput {
	create?: UserCreateWithoutAddedRepositoriesInput | null;
	connect?: UserWhereUniqueInput | null;
	update?: UserUpdateWithoutAddedRepositoriesDataInput | null;
	upsert?: UserUpsertWithoutAddedRepositoriesInput | null;
}

export interface UserUpdateOneRequiredWithoutGamesOwnedInput {
	create?: UserCreateWithoutGamesOwnedInput | null;
	connect?: UserWhereUniqueInput | null;
	update?: UserUpdateWithoutGamesOwnedDataInput | null;
	upsert?: UserUpsertWithoutGamesOwnedInput | null;
}

export interface UserUpdateOneRequiredWithoutKeysInput {
	create?: UserCreateWithoutKeysInput | null;
	connect?: UserWhereUniqueInput | null;
	update?: UserUpdateWithoutKeysDataInput | null;
	upsert?: UserUpsertWithoutKeysInput | null;
}

export interface UserUpdateWithoutAddedRepositoriesDataInput {
	email?: String | null;
	hash?: String | null;
	name?: String | null;
	role?: Role | null;
	gitLogin?: String | null;
	keys?: AppKeyUpdateManyWithoutUserInput | null;
	gamesOwned?: GameUpdateManyWithoutOwnerInput | null;
}

export interface UserUpdateWithoutGamesOwnedDataInput {
	email?: String | null;
	hash?: String | null;
	name?: String | null;
	role?: Role | null;
	gitLogin?: String | null;
	keys?: AppKeyUpdateManyWithoutUserInput | null;
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput | null;
}

export interface UserUpdateWithoutKeysDataInput {
	email?: String | null;
	hash?: String | null;
	name?: String | null;
	role?: Role | null;
	gitLogin?: String | null;
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput | null;
	gamesOwned?: GameUpdateManyWithoutOwnerInput | null;
}

export interface UserUpsertWithoutAddedRepositoriesInput {
	update: UserUpdateWithoutAddedRepositoriesDataInput;
	create: UserCreateWithoutAddedRepositoriesInput;
}

export interface UserUpsertWithoutGamesOwnedInput {
	update: UserUpdateWithoutGamesOwnedDataInput;
	create: UserCreateWithoutGamesOwnedInput;
}

export interface UserUpsertWithoutKeysInput {
	update: UserUpdateWithoutKeysDataInput;
	create: UserCreateWithoutKeysInput;
}

export interface UserWhereInput {
	AND?: UserWhereInput[] | UserWhereInput | null;
	OR?: UserWhereInput[] | UserWhereInput | null;
	NOT?: UserWhereInput[] | UserWhereInput | null;
	id?: ID_Input | null;
	id_not?: ID_Input | null;
	id_in?: ID_Output[] | ID_Output | null;
	id_not_in?: ID_Output[] | ID_Output | null;
	id_lt?: ID_Input | null;
	id_lte?: ID_Input | null;
	id_gt?: ID_Input | null;
	id_gte?: ID_Input | null;
	id_contains?: ID_Input | null;
	id_not_contains?: ID_Input | null;
	id_starts_with?: ID_Input | null;
	id_not_starts_with?: ID_Input | null;
	id_ends_with?: ID_Input | null;
	id_not_ends_with?: ID_Input | null;
	email?: String | null;
	email_not?: String | null;
	email_in?: String[] | String | null;
	email_not_in?: String[] | String | null;
	email_lt?: String | null;
	email_lte?: String | null;
	email_gt?: String | null;
	email_gte?: String | null;
	email_contains?: String | null;
	email_not_contains?: String | null;
	email_starts_with?: String | null;
	email_not_starts_with?: String | null;
	email_ends_with?: String | null;
	email_not_ends_with?: String | null;
	hash?: String | null;
	hash_not?: String | null;
	hash_in?: String[] | String | null;
	hash_not_in?: String[] | String | null;
	hash_lt?: String | null;
	hash_lte?: String | null;
	hash_gt?: String | null;
	hash_gte?: String | null;
	hash_contains?: String | null;
	hash_not_contains?: String | null;
	hash_starts_with?: String | null;
	hash_not_starts_with?: String | null;
	hash_ends_with?: String | null;
	hash_not_ends_with?: String | null;
	createdAt?: DateTime | null;
	createdAt_not?: DateTime | null;
	createdAt_in?: DateTime[] | DateTime | null;
	createdAt_not_in?: DateTime[] | DateTime | null;
	createdAt_lt?: DateTime | null;
	createdAt_lte?: DateTime | null;
	createdAt_gt?: DateTime | null;
	createdAt_gte?: DateTime | null;
	updatedAt?: DateTime | null;
	updatedAt_not?: DateTime | null;
	updatedAt_in?: DateTime[] | DateTime | null;
	updatedAt_not_in?: DateTime[] | DateTime | null;
	updatedAt_lt?: DateTime | null;
	updatedAt_lte?: DateTime | null;
	updatedAt_gt?: DateTime | null;
	updatedAt_gte?: DateTime | null;
	name?: String | null;
	name_not?: String | null;
	name_in?: String[] | String | null;
	name_not_in?: String[] | String | null;
	name_lt?: String | null;
	name_lte?: String | null;
	name_gt?: String | null;
	name_gte?: String | null;
	name_contains?: String | null;
	name_not_contains?: String | null;
	name_starts_with?: String | null;
	name_not_starts_with?: String | null;
	name_ends_with?: String | null;
	name_not_ends_with?: String | null;
	role?: Role | null;
	role_not?: Role | null;
	role_in?: Role[] | Role | null;
	role_not_in?: Role[] | Role | null;
	gitLogin?: String | null;
	gitLogin_not?: String | null;
	gitLogin_in?: String[] | String | null;
	gitLogin_not_in?: String[] | String | null;
	gitLogin_lt?: String | null;
	gitLogin_lte?: String | null;
	gitLogin_gt?: String | null;
	gitLogin_gte?: String | null;
	gitLogin_contains?: String | null;
	gitLogin_not_contains?: String | null;
	gitLogin_starts_with?: String | null;
	gitLogin_not_starts_with?: String | null;
	gitLogin_ends_with?: String | null;
	gitLogin_not_ends_with?: String | null;
	keys_every?: AppKeyWhereInput | null;
	keys_some?: AppKeyWhereInput | null;
	keys_none?: AppKeyWhereInput | null;
	addedRepositories_every?: RepositoryWhereInput | null;
	addedRepositories_some?: RepositoryWhereInput | null;
	addedRepositories_none?: RepositoryWhereInput | null;
	gamesOwned_every?: GameWhereInput | null;
	gamesOwned_some?: GameWhereInput | null;
	gamesOwned_none?: GameWhereInput | null;
}

export interface UserWhereUniqueInput {
	id?: ID_Input | null;
	email?: String | null;
}

/*
 * An object with an ID

 */
export interface Node {
	id: ID_Output;
}

export interface AggregateAppKey {
	count: Int;
}

export interface AggregateGame {
	count: Int;
}

export interface AggregateGitHubBranch {
	count: Int;
}

export interface AggregateGitHubComment {
	count: Int;
}

export interface AggregateGitHubCommit {
	count: Int;
}

export interface AggregateGitHubFileDiff {
	count: Int;
}

export interface AggregateGitHubIssue {
	count: Int;
}

export interface AggregateGitHubLabel {
	count: Int;
}

export interface AggregateGitHubPullRequest {
	count: Int;
}

export interface AggregateGitHubPullRequestReview {
	count: Int;
}

export interface AggregateGitHubRepository {
	count: Int;
}

export interface AggregateGitHubReviewRequest {
	count: Int;
}

export interface AggregateGitHubReviewThread {
	count: Int;
}

export interface AggregateGitHubTopic {
	count: Int;
}

export interface AggregateGitHubUser {
	count: Int;
}

export interface AggregateGitHubWebhookEvent {
	count: Int;
}

export interface AggregateRepository {
	count: Int;
}

export interface AggregateUser {
	count: Int;
}

export interface AppKey extends Node {
	id: ID_Output;
	user: User;
	key: String;
	name?: String | null;
	repositories?: Array<Repository> | null;
}

/*
 * A connection to a list of items.

 */
export interface AppKeyConnection {
	pageInfo: PageInfo;
	edges: Array<AppKeyEdge | null>;
	aggregate: AggregateAppKey;
}

/*
 * An edge in a connection.

 */
export interface AppKeyEdge {
	node: AppKey;
	cursor: String;
}

export interface AppKeyPreviousValues {
	id: ID_Output;
	key: String;
	name?: String | null;
}

export interface AppKeySubscriptionPayload {
	mutation: MutationType;
	node?: AppKey | null;
	updatedFields?: Array<String> | null;
	previousValues?: AppKeyPreviousValues | null;
}

export interface BatchPayload {
	count: Long;
}

export interface Game extends Node {
	id: ID_Output;
	createdAt: DateTime;
	updatedAt: DateTime;
	repository: Repository;
	title: String;
	owner: User;
	type: String;
}

/*
 * A connection to a list of items.

 */
export interface GameConnection {
	pageInfo: PageInfo;
	edges: Array<GameEdge | null>;
	aggregate: AggregateGame;
}

/*
 * An edge in a connection.

 */
export interface GameEdge {
	node: Game;
	cursor: String;
}

export interface GamePreviousValues {
	id: ID_Output;
	createdAt: DateTime;
	updatedAt: DateTime;
	title: String;
	type: String;
}

export interface GameSubscriptionPayload {
	mutation: MutationType;
	node?: Game | null;
	updatedFields?: Array<String> | null;
	previousValues?: GamePreviousValues | null;
}

export interface GitHubBranch extends Node {
	id: ID_Output;
	name: String;
	commits?: Array<GitHubCommit> | null;
	pullRequest?: GitHubPullRequest | null;
	merged?: Boolean | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubBranchConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubBranchEdge | null>;
	aggregate: AggregateGitHubBranch;
}

/*
 * An edge in a connection.

 */
export interface GitHubBranchEdge {
	node: GitHubBranch;
	cursor: String;
}

export interface GitHubBranchPreviousValues {
	id: ID_Output;
	name: String;
	merged?: Boolean | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubBranchSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubBranch | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubBranchPreviousValues | null;
}

export interface GitHubComment extends Node {
	author: GitHubUser;
	bodyText: String;
	createdAtExternal: DateTime;
	id: ID_Output;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubCommentConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubCommentEdge | null>;
	aggregate: AggregateGitHubComment;
}

/*
 * An edge in a connection.

 */
export interface GitHubCommentEdge {
	node: GitHubComment;
	cursor: String;
}

export interface GitHubCommentPreviousValues {
	bodyText: String;
	createdAtExternal: DateTime;
	id: ID_Output;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubCommentSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubComment | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubCommentPreviousValues | null;
}

export interface GitHubCommit extends Node {
	additions: Int;
	associatedPullRequests?: Array<GitHubPullRequest> | null;
	author: GitHubUser;
	authedDate: DateTime;
	changedFiles: Int;
	commitUrl: String;
	committer: GitHubUser;
	deletions: Int;
	id: ID_Output;
	message: String;
	messageHeadline: String;
	pushedDate: DateTime;
	treeUrl: String;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubCommitConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubCommitEdge | null>;
	aggregate: AggregateGitHubCommit;
}

/*
 * An edge in a connection.

 */
export interface GitHubCommitEdge {
	node: GitHubCommit;
	cursor: String;
}

export interface GitHubCommitPreviousValues {
	additions: Int;
	authedDate: DateTime;
	changedFiles: Int;
	commitUrl: String;
	deletions: Int;
	id: ID_Output;
	message: String;
	messageHeadline: String;
	pushedDate: DateTime;
	treeUrl: String;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubCommitSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubCommit | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubCommitPreviousValues | null;
}

export interface GitHubFileDiff extends Node {
	id: ID_Output;
	additions: Int;
	deletions: Int;
	filepath: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubFileDiffConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubFileDiffEdge | null>;
	aggregate: AggregateGitHubFileDiff;
}

/*
 * An edge in a connection.

 */
export interface GitHubFileDiffEdge {
	node: GitHubFileDiff;
	cursor: String;
}

export interface GitHubFileDiffPreviousValues {
	id: ID_Output;
	additions: Int;
	deletions: Int;
	filepath: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubFileDiffSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubFileDiff | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubFileDiffPreviousValues | null;
}

export interface GitHubIssue extends Node {
	id: ID_Output;
	assignees?: Array<GitHubUser> | null;
	author: GitHubUser;
	bodyText: String;
	closed?: DateTime | null;
	comments?: Array<GitHubComment> | null;
	createdAtExternal: DateTime;
	labels?: Array<GitHubLabel> | null;
	lastEditedAt: DateTime;
	locked: Boolean;
	number: Int;
	participants?: Array<GitHubUser> | null;
	state: String;
	title: String;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubIssueConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubIssueEdge | null>;
	aggregate: AggregateGitHubIssue;
}

/*
 * An edge in a connection.

 */
export interface GitHubIssueEdge {
	node: GitHubIssue;
	cursor: String;
}

export interface GitHubIssuePreviousValues {
	id: ID_Output;
	bodyText: String;
	closed?: DateTime | null;
	createdAtExternal: DateTime;
	lastEditedAt: DateTime;
	locked: Boolean;
	number: Int;
	state: String;
	title: String;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubIssueSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubIssue | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubIssuePreviousValues | null;
}

export interface GitHubLabel extends Node {
	id: ID_Output;
	color: String;
	createdAtExternal: DateTime;
	description: String;
	issues?: Array<GitHubIssue> | null;
	name: String;
	pullRequests?: Array<GitHubPullRequest> | null;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubLabelConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubLabelEdge | null>;
	aggregate: AggregateGitHubLabel;
}

/*
 * An edge in a connection.

 */
export interface GitHubLabelEdge {
	node: GitHubLabel;
	cursor: String;
}

export interface GitHubLabelPreviousValues {
	id: ID_Output;
	color: String;
	createdAtExternal: DateTime;
	description: String;
	name: String;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubLabelSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubLabel | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubLabelPreviousValues | null;
}

export interface GitHubPullRequest extends Node {
	additions: Int;
	assignees?: Array<GitHubUser> | null;
	author: GitHubUser;
	bodyText: String;
	changedFiles: Int;
	closed: Boolean;
	closedAt?: DateTime | null;
	comments?: Array<GitHubComment> | null;
	commits?: Array<GitHubCommit> | null;
	createdAtExternal: DateTime;
	deletions: Int;
	files?: Array<GitHubFileDiff> | null;
	id: ID_Output;
	isCrossRepository: Boolean;
	labels?: Array<GitHubLabel> | null;
	locked: Boolean;
	merged: Boolean;
	mergedAt?: DateTime | null;
	mergedBy?: GitHubUser | null;
	number: Int;
	participants?: Array<GitHubUser> | null;
	publishedAt?: DateTime | null;
	reviewRequests?: Array<GitHubReviewRequest> | null;
	reviews?: Array<GitHubPullRequestReview> | null;
	reviewThreads?: Array<GitHubReviewThread> | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubPullRequestConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubPullRequestEdge | null>;
	aggregate: AggregateGitHubPullRequest;
}

/*
 * An edge in a connection.

 */
export interface GitHubPullRequestEdge {
	node: GitHubPullRequest;
	cursor: String;
}

export interface GitHubPullRequestPreviousValues {
	additions: Int;
	bodyText: String;
	changedFiles: Int;
	closed: Boolean;
	closedAt?: DateTime | null;
	createdAtExternal: DateTime;
	deletions: Int;
	id: ID_Output;
	isCrossRepository: Boolean;
	locked: Boolean;
	merged: Boolean;
	mergedAt?: DateTime | null;
	number: Int;
	publishedAt?: DateTime | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubPullRequestReview extends Node {
	author: GitHubUser;
	bodyText: String;
	comments?: Array<GitHubComment> | null;
	commit?: Array<GitHubCommit> | null;
	createdAtExternal: DateTime;
	id: ID_Output;
	lastEditeddAt: DateTime;
	publishedAt: DateTime;
	pullRequest: GitHubPullRequest;
	state: String;
	submittedAt: DateTime;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubPullRequestReviewConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubPullRequestReviewEdge | null>;
	aggregate: AggregateGitHubPullRequestReview;
}

/*
 * An edge in a connection.

 */
export interface GitHubPullRequestReviewEdge {
	node: GitHubPullRequestReview;
	cursor: String;
}

export interface GitHubPullRequestReviewPreviousValues {
	bodyText: String;
	createdAtExternal: DateTime;
	id: ID_Output;
	lastEditeddAt: DateTime;
	publishedAt: DateTime;
	state: String;
	submittedAt: DateTime;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubPullRequestReviewSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubPullRequestReview | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubPullRequestReviewPreviousValues | null;
}

export interface GitHubPullRequestSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubPullRequest | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubPullRequestPreviousValues | null;
}

export interface GitHubRepository extends Node {
	collaborators?: Array<GitHubUser> | null;
	description: String;
	hasBranchRules: Boolean;
	hasContributingGuidelines: Boolean;
	hasPullRequestTemplate: Boolean;
	hasReadMe: Boolean;
	hasWiki: Boolean;
	id: ID_Output;
	isArchived: Boolean;
	isDisabled: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	license?: String | null;
	name: String;
	owner: GitHubUser;
	primaryLanguage?: String | null;
	repositoryTopics?: Array<GitHubTopic> | null;
	sshUrl: String;
	stargazers?: Array<GitHubUser> | null;
	updatedAtExternal: DateTime;
	url: String;
	watchers?: Array<GitHubUser> | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubRepositoryConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubRepositoryEdge | null>;
	aggregate: AggregateGitHubRepository;
}

/*
 * An edge in a connection.

 */
export interface GitHubRepositoryEdge {
	node: GitHubRepository;
	cursor: String;
}

export interface GitHubRepositoryPreviousValues {
	description: String;
	hasBranchRules: Boolean;
	hasContributingGuidelines: Boolean;
	hasPullRequestTemplate: Boolean;
	hasReadMe: Boolean;
	hasWiki: Boolean;
	id: ID_Output;
	isArchived: Boolean;
	isDisabled: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	license?: String | null;
	name: String;
	primaryLanguage?: String | null;
	sshUrl: String;
	updatedAtExternal: DateTime;
	url: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubRepositorySubscriptionPayload {
	mutation: MutationType;
	node?: GitHubRepository | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubRepositoryPreviousValues | null;
}

export interface GitHubReviewRequest extends Node {
	id: ID_Output;
	pullRequest: GitHubPullRequest;
	requestedReviewer: GitHubUser;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubReviewRequestConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubReviewRequestEdge | null>;
	aggregate: AggregateGitHubReviewRequest;
}

/*
 * An edge in a connection.

 */
export interface GitHubReviewRequestEdge {
	node: GitHubReviewRequest;
	cursor: String;
}

export interface GitHubReviewRequestPreviousValues {
	id: ID_Output;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubReviewRequestSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubReviewRequest | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubReviewRequestPreviousValues | null;
}

export interface GitHubReviewThread extends Node {
	comments?: Array<GitHubComment> | null;
	id: ID_Output;
	isResolved: Boolean;
	pullRequest: GitHubPullRequest;
	repository: GitHubRepository;
	resolvedBy: GitHubUser;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubReviewThreadConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubReviewThreadEdge | null>;
	aggregate: AggregateGitHubReviewThread;
}

/*
 * An edge in a connection.

 */
export interface GitHubReviewThreadEdge {
	node: GitHubReviewThread;
	cursor: String;
}

export interface GitHubReviewThreadPreviousValues {
	id: ID_Output;
	isResolved: Boolean;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubReviewThreadSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubReviewThread | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubReviewThreadPreviousValues | null;
}

export interface GitHubTopic extends Node {
	id: ID_Output;
	name: String;
	relatedTopics?: Array<GitHubTopic> | null;
	stargazers?: Array<GitHubUser> | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubTopicConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubTopicEdge | null>;
	aggregate: AggregateGitHubTopic;
}

/*
 * An edge in a connection.

 */
export interface GitHubTopicEdge {
	node: GitHubTopic;
	cursor: String;
}

export interface GitHubTopicPreviousValues {
	id: ID_Output;
	name: String;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubTopicSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubTopic | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubTopicPreviousValues | null;
}

export interface GitHubUser extends Node {
	id: ID_Output;
	url: String;
	name: String;
	login: String;
	avatarUrl: String;
	bio?: String | null;
	company?: String | null;
	createdAtExternal: DateTime;
	email?: String | null;
	followers?: Array<GitHubUser> | null;
	following?: Array<GitHubUser> | null;
	isBountyHunter: Boolean;
	isCampusExpert: Boolean;
	isDeveloperProgramMember: Boolean;
	isEmployee: Boolean;
	isHireable: Boolean;
	isSiteAdmin: Boolean;
	isViewer: Boolean;
	issueComments?: Array<GitHubComment> | null;
	issues?: Array<GitHubIssue> | null;
	pullRequests?: Array<GitHubPullRequest> | null;
	createdAt: DateTime;
	updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GitHubUserConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubUserEdge | null>;
	aggregate: AggregateGitHubUser;
}

/*
 * An edge in a connection.

 */
export interface GitHubUserEdge {
	node: GitHubUser;
	cursor: String;
}

export interface GitHubUserPreviousValues {
	id: ID_Output;
	url: String;
	name: String;
	login: String;
	avatarUrl: String;
	bio?: String | null;
	company?: String | null;
	createdAtExternal: DateTime;
	email?: String | null;
	isBountyHunter: Boolean;
	isCampusExpert: Boolean;
	isDeveloperProgramMember: Boolean;
	isEmployee: Boolean;
	isHireable: Boolean;
	isSiteAdmin: Boolean;
	isViewer: Boolean;
	createdAt: DateTime;
	updatedAt: DateTime;
}

export interface GitHubUserSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubUser | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubUserPreviousValues | null;
}

export interface GitHubWebhookEvent extends Node {
	id: ID_Output;
	createdAt: DateTime;
	repository: Repository;
	eventType: String;
	action?: String | null;
	sender: String;
}

/*
 * A connection to a list of items.

 */
export interface GitHubWebhookEventConnection {
	pageInfo: PageInfo;
	edges: Array<GitHubWebhookEventEdge | null>;
	aggregate: AggregateGitHubWebhookEvent;
}

/*
 * An edge in a connection.

 */
export interface GitHubWebhookEventEdge {
	node: GitHubWebhookEvent;
	cursor: String;
}

export interface GitHubWebhookEventPreviousValues {
	id: ID_Output;
	createdAt: DateTime;
	eventType: String;
	action?: String | null;
	sender: String;
}

export interface GitHubWebhookEventSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubWebhookEvent | null;
	updatedFields?: Array<String> | null;
	previousValues?: GitHubWebhookEventPreviousValues | null;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
	hasNextPage: Boolean;
	hasPreviousPage: Boolean;
	startCursor?: String | null;
	endCursor?: String | null;
}

export interface Repository extends Node {
	id: ID_Output;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	addedBy: User;
	name: String;
	description: String;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	appKey: AppKey;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
	webhookEvents?: Array<GitHubWebhookEvent> | null;
	game?: Game | null;
}

/*
 * A connection to a list of items.

 */
export interface RepositoryConnection {
	pageInfo: PageInfo;
	edges: Array<RepositoryEdge | null>;
	aggregate: AggregateRepository;
}

/*
 * An edge in a connection.

 */
export interface RepositoryEdge {
	node: Repository;
	cursor: String;
}

export interface RepositoryPreviousValues {
	id: ID_Output;
	idExternal: String;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: String;
	description: String;
	homepageUrl?: String | null;
	url: String;
	owner: String;
	isTracked: Boolean;
	isFork: Boolean;
	isLocked: Boolean;
	isPrivate: Boolean;
	isArchived: Boolean;
	isDisabled: Boolean;
	sshUrl?: String | null;
	stargazers?: Int | null;
	collaborators?: Int | null;
	watchers?: Int | null;
	issues?: Int | null;
	pullRequests?: Int | null;
}

export interface RepositorySubscriptionPayload {
	mutation: MutationType;
	node?: Repository | null;
	updatedFields?: Array<String> | null;
	previousValues?: RepositoryPreviousValues | null;
}

export interface User extends Node {
	id: ID_Output;
	email: String;
	hash: String;
	createdAt: DateTime;
	updatedAt: DateTime;
	name?: String | null;
	role?: Role | null;
	keys?: Array<AppKey> | null;
	addedRepositories?: Array<Repository> | null;
	gitLogin: String;
	gamesOwned?: Array<Game> | null;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
	pageInfo: PageInfo;
	edges: Array<UserEdge | null>;
	aggregate: AggregateUser;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
	node: User;
	cursor: String;
}

export interface UserPreviousValues {
	id: ID_Output;
	email: String;
	hash: String;
	createdAt: DateTime;
	updatedAt: DateTime;
	name?: String | null;
	role?: Role | null;
	gitLogin: String;
}

export interface UserSubscriptionPayload {
	mutation: MutationType;
	node?: User | null;
	updatedFields?: Array<String> | null;
	previousValues?: UserPreviousValues | null;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type DateTime = Date | string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
Raw JSON value
*/
export type Json = any;

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;
