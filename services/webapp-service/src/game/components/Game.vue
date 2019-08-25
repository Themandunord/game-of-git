<template lang="pug">
  div(id="game-container" v-if="downloaded")
  div.placeholder(v-else) Downloading ...
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';

import { IPhaserGameConfig } from '../../../game/config/IPhaserGameConfig.interface';
import { GameType } from '../../../game/game-types/game-type.types';

import RpgBootScene from '../../../game/game-types/rpg/scenes/BootScene';
import RpgPlayScene from '../../../game/game-types/rpg/scenes/PlayScene';

import GameFactory from './../../../game/factory/game.factory';
import BASE_PHASER_GAME_CONFIG from './../../../game/config/BasePhaserGameConfig';

/**
 * Demo Game, not a real game type just demonstrates setup for Phaser
 */
const demoGameConfig: IPhaserGameConfig = {
	phaser: {
		...BASE_PHASER_GAME_CONFIG.phaser,
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.Rpg,
		state: {}
	}
};

const rpgGameConfig: IPhaserGameConfig = {
	phaser: {
		...BASE_PHASER_GAME_CONFIG.phaser,
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.Rpg,
		state: {}
	}
};

@Component
export default class Game extends Vue {
	private downloaded: boolean = false;
	public game: any = {};

	async mounted() {
		// const game = await import(/* webpackChunkName: "game" */ '@/game');
		// TODO: See if we can return this efficient loading or if it is necessary with the factory.
		this.downloaded = true;
		this.$nextTick(() => (this.game = GameFactory.build(rpgGameConfig)));
	}
}
</script>
