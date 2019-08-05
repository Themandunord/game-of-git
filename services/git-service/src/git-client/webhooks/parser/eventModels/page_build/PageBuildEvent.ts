// https://developer.github.com/v3/activity/events/types/#pagebuildevent

import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { PageBuild } from './../EventType.types';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export class PageBuildEvent extends AGitHubEvent {
	public event: PageBuild;

	public id: number;

	public build: {
		url: string;
		status: 'built' | string;
		error: {
			message: null | string;
		};
		pusher: IRepositoryUser;
		commit: string;
		duration: number;
		createdAt: string;
		updatedAt: string;
	};

	public repository: IRepository;

	public sender: IRepositoryUser;
}
