import { UserIdOrEmailArgs } from '@game-of-git/common';
import {
    Injectable,
    UnprocessableEntityException,
    NotFoundException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export const USER_MUTATED_EVENT_NAME = 'userMutated';

// @Resolver(of => User)
// @UseGuards(GqlAuthGuard)
@Injectable()
export class UserInternalResolver {
    constructor(private prisma: PrismaService) {}

    async getByIdOrEmail(userIdOrEmailArgs: UserIdOrEmailArgs) {
        if (!userIdOrEmailArgs.id && !userIdOrEmailArgs.email) {
            throw new UnprocessableEntityException('Missing id and email');
        }

        const userData = await this.prisma.client.user(userIdOrEmailArgs);
        const appKeys = await this.prisma.client.user(userIdOrEmailArgs).keys();

        if (!userData) {
            throw new NotFoundException('User Not Found');
        }
        return {
            ...userData,
            appKeys
        };
    }
}
