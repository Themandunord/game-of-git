import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Gollum } from '../EventType.types';

const GITHUB_PAGE_ACTION_CREATED = 'created';
const GITHUB_PAGE_ACTION_EDITED = 'edited';

export const GITHUB_PAGE = {
    ACTION: {
        CREATED: GITHUB_PAGE_ACTION_CREATED,
        EDITED: GITHUB_PAGE_ACTION_EDITED
    }
};

export type GitHubPageActionType = 'created' | 'edited';

export interface IGitHubPage {
    pageName: string;
    title: string;
    summary: null | string;
    action: GitHubPageActionType;
    sha: string;
    htmlUrl: string;
}

export class GollumEvent extends AGitHubEvent {
    public event: Gollum;

    public pages: IGitHubPage[];

    public repository: IRepository;

    public sender: IRepositoryUser;
}
