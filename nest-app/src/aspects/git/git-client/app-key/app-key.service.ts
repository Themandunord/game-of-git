import { User } from './../../../../models/user';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GitClientService } from '../git-client.service';
import { AppKeyIdOrKeyArgs } from './../../../../models/args/appkeyidorkey-args';
import { UserIdOrEmailArgs } from './../../../../models/args/useridoremail-args';
import { PrismaService } from './../../../prisma/prisma.service';
import { CreateAppKeyInput } from './dto/create-app-key.input';

@Injectable()
export class AppKeyService {
    constructor(
        @Inject(forwardRef(() => GitClientService))
        private readonly gitClient: GitClientService,
        private readonly prisma: PrismaService
    ) {}

    async getByIdOrKey(idOrKey: AppKeyIdOrKeyArgs) {
        return this.prisma.client.appKey(idOrKey);
    }

    async getAllByUserIdOrEmail(args: UserIdOrEmailArgs) {
        return await this.prisma.client.user(args).keys({ first: 30 });
    }

    // user(appKeyId: string) {
    //     return this.prisma.client.appKey({ id: appKeyId }).user();
    // }

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

        const validUser = await this.prisma.client.user({ email: user.email });

        if (!validUser) {
            throw new Error('User did not exist???');
        }

        const isValid = await this.validate(key, user.gitLogin);
        if (!isValid) {
            throw new Error('App Key failed validation');
            return;
        }
        const existing = await this.getByIdOrKey({ key });
        if (existing != null) {
            throw new Error('App Key Already Registered');
            return;
        }
        const payload = {
            key,
            name,
            user: {
                connect: {
                    email: user.email
                }
            }
        };
        const result = await this.prisma.client.createAppKey(payload);
        return result;
    }

    async deleteByIdOrKey(input: AppKeyIdOrKeyArgs) {
        return await this.prisma.client.deleteAppKey(input);
    }
}
