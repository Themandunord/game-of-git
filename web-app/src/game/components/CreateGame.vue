<template lang="pug">
v-card.mx-auto.pa-5
	.display-2.mt-6 New Game of Git!
	v-form.mt-4.mb-4.pb-6(v-model="canCreateGame")
		v-select(
			value="gameTypeSelect.value"
			:items="gameTypes"
			label="Select Game Type"
			required
			:disabled="creatingGame"
			@input="handleBehaviourSubscriptionUpdate"
		)
		v-btn(:loading="creatingGame" color="success" tile :bottom="true" :right="true" :absolute="true" @click="createGame" :disabled="!canCreateGame || creatingGame") Create Game
			template(v-slot:loader)
				span.animated-loader
					v-icon(light) cached

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import AppStateModule from '@/store/aspects/app';
import RepositoriesStateModule from '@/store/aspects/repositories';
import HttpClient, { AbstractHttpClient } from '@/common/HttpClient';

import BASE_PHASER_GAME_CONFIG from '../../../../../game/config/BasePhaserGameConfig';
import { GameType, GAME_TYPES } from '../../../../../game/game-types/game-type.types';
import { IPhaserGameConfig } from '../../../../../game/config/IPhaserGameConfig.interface';
import { IGameConfigBase } from '../../../../../game/config/IGameConfig.base';

import {
	Observable,
	Subject,
	AsyncSubject,
	BehaviorSubject,
	combineLatest,
	Subscription
} from 'rxjs';
import { map } from 'rxjs/operators';
import RpgBootScene from '../../../../../game/game-types/rpg/scenes/BootScene';
import RpgPlayScene from '../../../../../game/game-types/rpg/scenes/PlayScene';

/**
 * Demo Game, not a real game type just demonstrates setup for Phaser
 */

const RPG_GAME_CONFIG: IPhaserGameConfig = {
	phaser: {
		...BASE_PHASER_GAME_CONFIG.phaser,
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.Rpg,
		state: {}
	}
};

const SIM_GAME_CONFIG: IPhaserGameConfig = {
	phaser: {
		...BASE_PHASER_GAME_CONFIG.phaser,
		// scene: [BootScene, PlayScene]
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.Sim,
		state: {}
	}
};

@Component
export default class CreateGame extends Vue {
	private newGameForm!: IGameConfigBase;
	// private gameTypeSelect?: GameType;
	private gameTypeSelect = new BehaviorSubject<GameType | null>(null);
	private creatingGame: boolean = false;

	@Prop({
		required: true
	})
	private readonly repositoryId!: string;

	get repository() {
		return RepositoriesStateModule.repositories.find(val => val.id === this.repositoryId);
	}

	// For now this is only accessible from the Repository menu when there is no game data,
	// TODO: Validate the current app key to ensure it can control webhooks and any other necessary permissions
	private userHasPermissionsToCreateGameSubject = new BehaviorSubject<boolean>(false);
	private userCanCreateGame = new BehaviorSubject<boolean>(false);

	private handleBehaviourSubscriptionUpdate(value: any) {
		this.gameTypeSelect.next(value);
	}

	private created() {
		combineLatest(this.gameTypeSelect, this.userHasPermissionsToCreateGameSubject)
			.pipe(map(val => val[0] != null && val[1] === true))
			.subscribe(val => this.userCanCreateGame.next(val));
		this.testUserKeyPermissions();
	}

	get gameTypes() {
		return GAME_TYPES;
	}

	get canCreateGame() {
		return this.userCanCreateGame.getValue();
	}

	private createGame() {
		const value = this.gameTypeSelect.getValue();
		if (value == null) {
			throw new Error(`Game Type is null!`);
		}
		// tslint:disable:no-console
		console.log('Create Game!');
		this.creatingGame = true;
		HttpClient.games
			.createGame(this.repositoryId, value)
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

	@Watch('repository')
	private handleRepositoryUpdate() {
		this.testUserKeyPermissions();
	}

	private async testUserKeyPermissions() {
		if (!AppStateModule.user.gitLogin) {
			return;
		}
		let result = false;
		try {
			const repositoryData = await HttpClient.repositories.retrieveRepositoryWithGitData(
				AppStateModule.user.gitLogin,
				this.repository.name
			);
			result = repositoryData != null;
		} catch (e) {}

		this.userHasPermissionsToCreateGameSubject.next(result);
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
