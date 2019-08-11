import { Injectable } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { GET_USERS } from './gql/GET_USERS.gql';

export interface IUserEmailWhere {
	email: string;
}

export interface IUserIdWhere {
	id: string;
}

export type TUserWhere = IUserEmailWhere | IUserIdWhere | never;

@Injectable()
export class UsersService {
	constructor(private readonly usersResolver: UsersResolver) {}

	private async get(where: TUserWhere) {
		const user = await this.usersResolver.getUser(
			{
				where
			},
			GET_USERS
		);

		const result =
			user != null
				? {
						email: user.email,
						id: user.id,
						hash: user.hash,
						hasAppKey: user.keys && user.keys.length > 0 ? true : false,
						name: user.name,
						gitLogin: user.gitLogin,
						createdAt: user.createdAt,
						updatedAt: user.updatedAt
				  }
				: null;

		return result;
	}

	public async getById(id: string) {
		return await this.get({ id });
	}

	public async getByEmail(email: string) {
		return await this.get({ email });
	}

	public async getAll() {
		return await this.usersResolver.getUsers({}, GET_USERS);
	}
}
