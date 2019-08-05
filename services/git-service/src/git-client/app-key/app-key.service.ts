import { forwardRef, Inject, Injectable } from '@nestjs/common';
// import { UsersService } from './../users/users.service';
import { GitClientService } from '../git-client.service';
import { AppKeyResolver } from './app-key.resolver';
// import { gql } from 'apollo-server-core';
import GET_APP_KEY from './gql/GET_APP_GEY.gql';

@Injectable()
export class AppKeyService {
	constructor(
		@Inject(forwardRef(() => GitClientService))
		private readonly gitClient: GitClientService,
		// private readonly usersService: UsersService,
		private readonly appKeyResolver: AppKeyResolver
	) {}

	/**
	 * Retrieve an AppKey record by its `key`
	 *
	 * @param key
	 */
	async getbyKey(key: string) {
		return await this.appKeyResolver.getAppKey(
			{
				where: {
					key
				}
			},
			GET_APP_KEY
		);
	}

	/**
	 * Get all AppKey by the user's id
	 * @param id User's Id
	 */
	async getAllByUser(id: string) {
		const keys = await this.appKeyResolver.getAppKeys(
			{
				where: {
					user: {
						id
					}
				}
			},
			GET_APP_KEY
		);

		return keys;
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
	 * @param username
	 */
	async store(key: string, user: string, name: string, username: string) {
		const isValid = await this.validate(key, username);
		if (!isValid) {
			return;
		}

		const existing = await this.getbyKey(key);

		if (existing != null) {
			return;
		}

		const createPayload = {
			data: {
				user: {
					connect: {
						id: user
					}
				},
				name,
				key
			}
		};
		const result = await this.appKeyResolver.createAppKey(createPayload, GET_APP_KEY);

		return result;
	}
}
