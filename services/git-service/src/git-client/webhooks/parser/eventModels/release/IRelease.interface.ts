import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export interface IRelease {
	url: string;
	assetsUrl: string;
	uploadUrl: string;
	htmlUrl: string;
	id: number;
	nodeId: string;
	tagName: string;
	targetCommitish: string;
	name: number | string;
	draft: boolean;
	author: IRepositoryUser;
	prerelease: boolean;
	createdAt: string;
	publishedAt: string;
	assets: any[]; // TODO
	tarballUrl: string;
	zupballUrl: string;
	body: null | string;
}
