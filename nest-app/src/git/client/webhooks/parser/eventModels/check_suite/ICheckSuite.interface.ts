import { CheckSuiteStatusType, CheckSuiteConclusionType } from './constants';
import { IPullRequestReference } from './IPullRequestReference.interface';
import { ICheckApp } from './ICheckApp.interface';

export interface ICheckSuite {
    id: number;
    nodeId: string;
    headBranch: string;
    headSha: string;
    status: CheckSuiteStatusType;
    conclusion: CheckSuiteConclusionType;
    url: string;
    before: string;
    after: string;
    pullRequests: IPullRequestReference[];
    app: ICheckApp;
    createdAt: string;
    updatedAt: string;
    latestCheckRunsCount: number;
    checkRunsUrl: string;
    headCommit: {
        id: string;
        treeId: string;
        message: string;
        timestamp: string;
        author: { name: string; email: string };
        committer: { name: string; email: string };
    };
}
