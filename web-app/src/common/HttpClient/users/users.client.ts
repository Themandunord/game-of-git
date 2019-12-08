import AbstractHttpClient from '../HttpClient.abstract';

/**
 * Users-specific domain of the HttpClient
 */
export class UsersClient {
	constructor(private readonly client: AbstractHttpClient) {}

	/**
	 * Load User Data for a given user
	 */
	async loadUserData() {
		if (this.client == null) {
			console.error('Unable to load user data, client is null.');
			throw new Error(`Unable to load user data, client is null`);
		}
		if (this.client.user == null) {
			// tslint:disable-next-line:no-console
			console.error('Unable to load user data, client.user is null.');
			throw new Error(`Unable to load user data, client.user is null`);
		}
		if (this.client.user.id == null) {
			console.error('Unable to load user data, id is null.');
			throw new Error(`Unable to load user data, id is null`);
		}
		const result = await this.client.get(
			`${AbstractHttpClient.apiUrl}/users/${this.client.user.id}/data`
		);

		return result.data;
	}

	/**
	 * Add an AppKey and attach it to the given user
	 */
	async addAppKey(username: string, repoName: string, key: string, user: string) {
		await this.client.put(`${AbstractHttpClient.apiUrl}/app-key/add-key`, {
			username,
			name: repoName,
			key,
			user
		});
	}

	/**
	 * Validate an App Key
	 * @param username
	 * @param key
	 */
	async validateAppKey(username: string, key: string) {
		try {
			const isValid = await this.client.post(
				`${AbstractHttpClient.apiUrl}/app-key/validate-key`,
				{
					username,
					key
				}
			);

			if (isValid.data == null) {
				// tslint:disable:no-console
				console.error('Missing data property on app key validation response.');

				return false;
			}

			const result = isValid.data;
			let boolResult = result;
			console.log('isValid.data is set: ' + isValid.data);

			if (!(result === true || result === false)) {
				if (result === 'true' || result === 'false') {
					boolResult = result === 'true';
				}

				boolResult = false;
			}

			return boolResult;
		} catch (e) {
			console.error(`There was an error validating the app key ${e}`);

			return false;
		}
	}
}
