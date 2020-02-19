import { User } from '@game-of-git/common';
import { CreateUserMutationVariables } from '@game-of-git/graphql-hasura';
import * as faker from 'faker';
import { GraphqlService } from '../src/graphql/graphql.service';
import { plainToClass } from 'class-transformer';
import { PasswordService } from '../src/auth/password.service';

export const createUserMutationVariableFactory = (
    userData: Partial<CreateUserMutationVariables> = {}
) => ({
    email: userData.email || faker.internet.email(),
    gitLogin: userData.gitLogin || faker.internet.userName(),
    name: userData.name || faker.name.firstName(),
    password: userData.password || faker.random.word(),
    role: userData.role || 'ADMIN'
});

/**
 * Seeds a User in the `users` table and returns the result
 *
 * @param service
 * @param userData
 */
export const seedUser = async (
    service: GraphqlService,
    users: { id?: string; email?: string }[],
    userData: CreateUserMutationVariables = createUserMutationVariableFactory()
) => {
    const pwService = new PasswordService();
    const hashedPassword = await pwService.hashPassword(userData.password);
    const userDataToStore = {
        ...userData,
        password: hashedPassword
    };
    const user = (await service.sdk.CreateUser(userDataToStore)).insert_users
        .returning[0];
    users.push(user);
    return plainToClass(User, {
        id: user.id,
        createdAt: user.created_at,
        email: user.email,
        password: userData.password
    });
};

/**
 * Removes a User from the `users` table by id or email
 *
 * @param service
 * @param userIdOrEmail
 */
export const clearUser = async (
    service: GraphqlService,
    userIdOrEmail: { id?: string; email?: string }
) => {
    if (userIdOrEmail.id) {
        return await service.sdk.DeleteUserById({
            id: userIdOrEmail.id
        });
    } else if (userIdOrEmail.email) {
        return await service.sdk.DeleteUserByEmail({
            email: userIdOrEmail.email
        });
    }
    throw new Error(`Missing id and emal keys, unable to delete user`);
};

/**
 * Purge all users from an array of users
 * @param service
 * @param users
 */
export const purgeUsers = async (
    service: GraphqlService,
    users: { id?: string; email?: string }[]
) => {
    while (users.length > 0) {
        await clearUser(service, users.pop());
    }
};

export const signupMutationFactory = ({
    email,
    password,
    name,
    gitLogin
}: {
    email?: string;
    password?: string;
    name?: string;
    gitLogin?: string;
}) => `mutation {
        signup(
          data: {
            ${email ? `email: "${email}"` : ''}
            ${password ? `password: "${password}"` : ''}
            ${name ? `name: "${name}"` : ''}
            ${gitLogin ? `gitLogin: "${gitLogin}"` : ''} 
          }
        ) 
        { token }
      }`;
