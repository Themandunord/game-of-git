import { Auth } from '@game-of-git/common';
import {
    Args,
    Mutation,
    Parent,
    ResolveProperty,
    Resolver
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';

@Resolver(of => Auth)
export class AuthResolver {
    constructor(private readonly auth: AuthService) {}

    @Mutation(returns => Auth)
    async signup(@Args('data') data: SignupInput) {
        data.email = data.email.toLowerCase();
        const token = await this.auth.createUser(data);
        return {
            token
        };
    }

    @Mutation(returns => Auth)
    async login(@Args('data') { email, password }: LoginInput) {
        const token = await this.auth.login(email.toLowerCase(), password);
        return {
            token
        };
    }

    @ResolveProperty('user')
    async user(@Parent() auth: Auth) {
        return await this.auth.getUserFromToken(auth.token);
    }
}
