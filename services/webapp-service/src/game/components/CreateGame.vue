<template lang="pug">
v-card.mx-auto.pa-5
	.display-2.mt-6 New Game of Git!
	v-form.mt-4.mb-4.pb-6(v-model="canCreateGame")
		v-select(
			v-model="gameTypeSelect"
			:items="gameTypes"
			label="Select Game Type"
			required
			:disabled="creatingGame"
		)
		v-btn(:loading="creatingGame" color="success" tile :bottom="true" :right="true" :absolute="true" @click="createGame" :disabled="!canCreateGame || creatingGame") Create Game
			template(v-slot:loader)
				span.animated-loader
					v-icon(light) cached

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppStateModule from '@/store/aspects/app';
import HttpClient, { AbstractHttpClient } from '@/common/HttpClient';

import { IGameConfig } from '../IGame.interface';
import { GameType, GAME_TYPES } from '../game-types/game-type.types';

import BootScene from '../scenes/BootScene';
import PlayScene from '../scenes/PlayScene';

import RpgBootScene from '../game-types/rpg/scenes/BootScene';
import RpgPlayScene from '../game-types/rpg/scenes/PlayScene';

import GameFactory from './../factory/game.factory';
import { TGameType } from '@/game/game-types/game-type.types';
import { IGameConfigBase } from '@/store/aspects/game/IGameConfig.base';
import { BehaviorSubject } from 'rxjs';
import BASE_CONFIG from '../BaseConfig';

/**
 * Demo Game, not a real game type just demonstrates setup for Phaser
 */
const DEMO_GAME_CONFIG: IGameConfig = {
	phaser: {
		...BASE_CONFIG.phaser,
		scene: [BootScene, PlayScene]
	},
	base: {
		type: GameType.RPG,
		state: {}
	}
};

const RPG_GAME_CONFIG: IGameConfig = {
	phaser: {
		...BASE_CONFIG.phaser,
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.RPG,
		state: {}
	}
};

const SIM_GAME_CONFIG: IGameConfig = {
	phaser: {
		...BASE_CONFIG.phaser,
		scene: [BootScene, PlayScene]
	},
	base: {
		type: GameType.SIM,
		state: {}
	}
};

@Component
export default class CreateGame extends Vue {
	private newGameForm!: IGameConfigBase;
	private gameTypeSelect: TGameType | null = null;
	private creatingGame: boolean = false;

	// For now this is only accessible from the Repository menu when there is no game data,
	// TODO: Validate the current app key to ensure it can control webhooks and any other necessary permissions
	//
	private userCanCreateGameSubject = new BehaviorSubject<boolean>(true);

	get gameTypes() {
		return GAME_TYPES;
	}

	get canCreateGame() {
		return this.userCanCreateGameSubject.value && this.gameTypeSelect != null;
	}

	private createGame() {
		if (this.gameTypeSelect == null) {
			throw new Error(`Game Type is null!`);
		}
		// tslint:disable:no-console
		console.log('Create Game!');
		this.creatingGame = true;
		const game = HttpClient.games
			.createGame(this.gameTypeSelect)
			.then(response => {
				console.log(`Server Response (${response.status}): `, response.data);
			})
			.catch(error => {
				console.log('create game error: ', error);
			})
			.finally(() => {
				this.creatingGame = false;
			});
	}
}
</script>

<style lang="scss" scoped>
.animated-loader {
	animation: loader 1s infinite;
	display: flex;
}
@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(-360deg);
	}
}
</style>
