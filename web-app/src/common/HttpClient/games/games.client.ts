import { GameType } from '@/../../game/game-types/game-type.types';
import { AbstractHttpClient } from '@/common/HttpClient';

/**
 * Game-specific domain of HttpClient
 */
export class GamesClient {
	constructor(private readonly client: AbstractHttpClient) {}

	public async loadGame(id: string) {
		// tslint:disable:no-console
		console.log('Game client: load game ' + id);

		return this.client.get(`${AbstractHttpClient.apiUrl}/game/${id}/load`);
	}

	public async createGame(repositoryId: string, type: GameType) {
		console.log(`Game Client create game for ${repositoryId} of type ${type}`);

		if (!this.client || !this.client.user || !this.client.user.gitLogin) {
			throw new Error(`Unable to create game. Missing user's GitLogin.`);
		}

		return this.client.post(`${AbstractHttpClient.apiUrl}/game/create`, {
			type,
			owner: this.client.user.gitLogin,
			repositoryId
		});
	}
}
