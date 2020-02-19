import {
    GitHubRepository,
    Repository,
    RepositoryIdArgs,
    User,
    UsernameArgs
} from '@game-of-git/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Subscription,
    Context
} from '@nestjs/graphql';

import { GqlAuthGuard } from '../guards/gql-auth.guard';

import { TrackRepositoryInput } from './dto/track-repository.input';
import { PubSubEngine } from 'type-graphql';
import { Inject, ExecutionContext, Logger } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';

const REPOSITORY_MUTATED_EVENT_NAME = 'repositoryMutated';

@Resolver(of => Repository)
export class RepositoriesResolver {
    private readonly logger = new Logger('RepositoriesResolver');

    constructor(
        private readonly repositoriesService: RepositoriesService,
        // private readonly gitClientService: GitClientService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
    ) {}

    // @Query(returns => Repository)
    // repository(@Args() id: RepositoryIdArgs) {
    //     return this.prisma.client.repository({ id: id.repositoryId });
    // }

    // // repositoryList query for selectable/deselectable repositories by a username
    // @Query(returns => [GitHubRepository])
    // @UseGuards(GqlAuthGuard)
    // async repositoryList(
    //     @CurrentUser() user: User,
    //     @Args() usernameArgs: UsernameArgs
    // ): Promise<GitHubRepository[]> {
    //     this.logger.log(`repositoryList call for ${usernameArgs}`);

    //     return this.repositoriesService.repositoryList(user, usernameArgs);
    // }

    // @Mutation(returns => Repository)
    // @UseGuards(GqlAuthGuard)
    // async trackRepository(
    //     @CurrentUser() user: User,
    //     @Args('data') trackRepositoryData: TrackRepositoryInput
    // ) {
    //     this.logger.log(
    //         `Track Repository ${trackRepositoryData.owner} ${trackRepositoryData.repository}`
    //     );

    //     return this.repositoriesService.trackRepository(
    //         user,
    //         trackRepositoryData
    //     );
    // }

    // @Subscription(() => Repository, {
    //     name: REPOSITORY_MUTATED_EVENT_NAME
    // })
    // async repositoryMutated(@Context() context: ExecutionContext) {
    //     console.log(
    //         `${REPOSITORY_MUTATED_EVENT_NAME} subscription call!`,
    //         context
    //     );
    //     return this.pubSub.asyncIterator(REPOSITORY_MUTATED_EVENT_NAME);
    // }
}
