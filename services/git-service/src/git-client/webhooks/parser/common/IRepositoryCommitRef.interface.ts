import { IRepositoryUser } from './IRepositoryUser.interface';
import { IRepository } from './IRepository.interface';

export interface IRepositoryCommitRef {
	label: string;
	ref: string;
	sha: string;
	user: IRepositoryUser;
	repo: IRepository;
}
