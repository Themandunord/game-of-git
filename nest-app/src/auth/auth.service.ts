import {
    Injectable,
    NotFoundException,
    BadRequestException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../generated/prisma-client';
import { PasswordService } from './password.service';
import { SignupInput } from './dto/signup.input';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly passwordService: PasswordService
    ) {}

    async createUser(payload: SignupInput): Promise<string> {
        const hashedPassword = await this.passwordService.hashPassword(
            payload.password
        );

        const user = await this.prisma.client.createUser({
            ...payload,
            password: hashedPassword,
            gitLogin: payload.gitLogin || ''
        });

        return this.jwtService.sign({ userId: user.id });
    }

    async login(email: string, password: string): Promise<string> {
        const user = await this.prisma.client.user({ email });

        if (!user) {
            throw new NotFoundException(`No user found for email: ${email}`);
        }

        const passwordValid = await this.passwordService.validatePassword(
            password,
            user.password
        );

        if (!passwordValid) {
            throw new BadRequestException('Invalid password');
        }

        const userKeys = await this.prisma.client.user({ email }).keys();

        return this.jwtService.sign({ userId: user.id, appKeys: userKeys });
    }

    validateUser(userId: string): Promise<User> {
        return this.prisma.client.user({ id: userId });
    }

    async getUserFromToken(token: string): Promise<User> {
        const id = this.jwtService.decode(token)['userId'];
        const userData = await this.prisma.client.user({ id });
        console.log('getUserFromToken returning: ', userData);
        return userData;
    }
}
