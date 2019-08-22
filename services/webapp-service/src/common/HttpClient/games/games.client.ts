import { TGameType } from '@/game/game-types/game-type.types';
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

	public async createGame(type: TGameType) {
		console.log('game client: create game ' + type);

		return this.client.post(`${AbstractHttpClient.apiUrl}/game/create`, {
			type
		});
	}
}
