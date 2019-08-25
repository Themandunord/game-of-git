export enum GameType {
	Rpg = 'rpg',
	Sim = 'sim'
}

export const GAME_TYPES = Object.keys(GameType).map<string>(k => GameType[k as any]);
