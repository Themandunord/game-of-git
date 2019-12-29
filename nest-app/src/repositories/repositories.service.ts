import { RepositoryIdArgs, User, Repository } from '@game-of-git/common';
import { Injectable, Logger } from '@nestjs/common';
import GET_REPOSITORIES from './GET_REPOSITORIES.gql';
import { RepositoriesResolver } from './repositories.resolver';
import { WebhooksService } from '../git/client/webhooks/webhooks.service';
import { GitClientService } from '../git/client/git-client.service';
import { plainToClass } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';
import { TrackRepositoryInput } from './dto/track-repository.input';

@Injectable()
export class RepositoriesService {
    private readonly logger = new Logger('RepositoriesService');
    constructor(private readonly prisma: PrismaService) {}

    async createRepository(
        user: User,
        githubRepositoryData: any,
        trackRepoInput: TrackRepositoryInput
    ): Promise<Repository> {
        this.logger.log('Create Repository');

        const appKeyId = (
            await this.prisma.client.user({ id: user.id }).keys()
        )[0].id;
        const createData = {
            addedBy: {
                connect: {
                    id: user.id
                }
            },
            appKey: {
                connect: {
                    id: appKeyId
                }
            },
            createdAtExternal: githubRepositoryData.createdAt,
            updatedAtExternal: githubRepositoryData.updatedAt,
            idExternal: githubRepositoryData.id,
            isArchived: githubRepositoryData.isArchived,
            isDisabled: githubRepositoryData.isDisabled,
            isFork: githubRepositoryData.isFork,
            isLocked: githubRepositoryData.isLocked,
            isPrivate: githubRepositoryData.isPrivate,
            isTracked: true,
            name: githubRepositoryData.name,
            owner: trackRepoInput.owner,
            url: githubRepositoryData.url,
            description: githubRepositoryData.description,
            homepageUrl: githubRepositoryData.homepageUrl || null,
            sshUrl: githubRepositoryData.sshUrl || null
        };

        const createdRecord = await this.prisma.client.createRepository(
            createData
        );

        return createdRecord as any;
    }
}
