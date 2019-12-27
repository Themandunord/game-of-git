export enum GameType {
	Rpg = 'rpg',
	Sim = 'sim'
}

// export const GAME_TYPES = Object.keys(GameType).map<string>(k => GameType[k]);
export const enumKeys = <T>(enumObj: T): string[] => {
	return Object.keys(enumObj).filter(k => !Number.isInteger(k as any));
};
  
export const enumValues = <T>(enumObj: T): T[keyof T][] => {
	return enumKeys(enumObj).map(k => enumObj[k as keyof T]);
};

export const GAME_TYPES = enumValues(GameType); /* ? */