export type TRpg = 'rpg';
export const RPG = 'rpg' as TRpg;
export type TSim = 'sim';
export const SIM = 'sim' as TSim;

export type TGameType = TRpg | TSim;
export const GameType = {
	RPG,
	SIM
};

export const GAME_TYPES = [RPG, SIM];
