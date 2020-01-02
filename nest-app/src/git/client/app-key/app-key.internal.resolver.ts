import { AppKeyIdOrKeyArgs, UserIdOrEmailArgs } from '@game-of-git/common';
import { AppKeyCreateInput } from '../../../generated/prisma-client';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppKeyInternalResolver {
    constructor(private readonly prisma: PrismaService) {}

    async getByIdOrKey(idOrKeyArgs: AppKeyIdOrKeyArgs) {
        const appKey = await this.prisma.client.appKey(idOrKeyArgs);
        return appKey;
    }

    async getByUserIdOrEmail(userIdOrEmailArgs: UserIdOrEmailArgs) {
        const keys = await this.prisma.client
            .user(userIdOrEmailArgs)
            .keys({ first: 1 });

        return keys && keys.length > 0 ? keys[0] : null;
    }

    async getAllByUserIdOrEmail(userIdOrEmailArgs: UserIdOrEmailArgs) {
        return await this.prisma.client
            .user(userIdOrEmailArgs)
            .keys({ first: 30 });
    }

    async create(createAppKeyInput: AppKeyCreateInput) {
        return await this.prisma.client.createAppKey(createAppKeyInput);
    }

    async deleteByIdOrKey(appKeyIdOrKeyArgs: AppKeyIdOrKeyArgs) {
        return await this.prisma.client.deleteAppKey(appKeyIdOrKeyArgs);
    }
}
