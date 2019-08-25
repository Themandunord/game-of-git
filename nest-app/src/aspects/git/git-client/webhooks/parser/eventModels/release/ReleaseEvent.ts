import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Release } from './../EventType.types';
import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { ReleaseActionType } from './constants';
import { IRelease } from './IRelease.interface';

export class ReleaseEvent extends AGitHubEvent {
    public event: Release;

    public action: ReleaseActionType;
    public release: IRelease;
    public repository: IRepository;
    public sender: IRepositoryUser;
    public changes?: any; // TODO: if edited`
}
