import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export interface IPullRequestReview {
    id: number;
    nodeId: string;
    user: IRepositoryUser;
    body: null | string;
    commitId: string;
    submittedAt: string;
    state: 'commented' | string;
    htmlUrl: string;
    pullRequestUrl: string;
    authorAssociation: string;
    links: {
        html: {
            href: string;
        };
        pullRequest: {
            href: string;
        };
    };
}
