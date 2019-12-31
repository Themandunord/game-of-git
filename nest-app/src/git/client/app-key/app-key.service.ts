import {
    User,
    AppKeyIdOrKeyArgs,
    UserIdOrEmailArgs
} from '@game-of-git/common';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GitClientService } from '../git-client.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAppKeyInput } from './dto/create-app-key.input';
import { AppKeyInternalResolver } from './app-key.internal.resolver';
import { UserInternalResolver } from '../../../user/user.internal.resolver';
import { AppKeyCreateInput } from 'src/generated/prisma-client';

@Injectable()
export class AppKeyService {
    constructor(
        @Inject(forwardRef(() => GitClientService))
        private readonly gitClient: GitClientService,
        private readonly appKeyInternalResolver: AppKeyInternalResolver,
        private readonly userInternalResolver: UserInternalResolver
    ) {}

    async getByIdOrKey(idOrKey: AppKeyIdOrKeyArgs) {
        // TODO: validate args
        return this.appKeyInternalResolver.getByIdOrKey(idOrKey);
    }

    async getAllByUserIdOrEmail(args: UserIdOrEmailArgs) {
        // TODO: validate args
        return this.appKeyInternalResolver.getAllByUserIdOrEmail(args);
    }

    async getByUserIdOrEmail(args: UserIdOrEmailArgs) {
        // TODO: validate args
        return this.appKeyInternalResolver.getByUserIdOrEmail(args);
    }

    /**
     * Validate a given key by checking a username
     * @param key
     * @param user
     */
    async validate(key: string, user: string) {
        const valid = await this.gitClient.testAppKey(key, user);

        return valid;
    }

    /**
     * Store a GitHub App Key for a user
     * @param key
     * @param user
     * @param name
     * @param email
     */
    async store(input: CreateAppKeyInput, user: User) {
        const { key, name } = input;

        // get email form authed jwt
        const validUser = await this.userInternalResolver.getByIdOrEmail({
            email: user.email
        });

        if (!validUser) {
            throw new Error('User did not exist???');
        }

        const isValid = await this.validate(key, user.gitLogin);
        if (!isValid) {
            throw new Error('App Key failed validation');
        }
        const existing = await this.getByIdOrKey({ key });
        if (existing != null) {
            throw new Error('App Key Already Registered');
        }
        const payload: AppKeyCreateInput = {
            key,
            name,
            user: {
                connect: {
                    email: user.email
                }
            }
        };
        const result = await this.appKeyInternalResolver.create(payload);
        return result;
    }

    async deleteByIdOrKey(idOrKeyArgs: AppKeyIdOrKeyArgs) {
        return await this.appKeyInternalResolver.deleteByIdOrKey(idOrKeyArgs);
    }
}
