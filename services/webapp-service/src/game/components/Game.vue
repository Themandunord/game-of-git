<template lang="pug">
  div(id="game-container" v-if="downloaded")
  div.placeholder(v-else) Downloading ...
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';

import { IGameConfig } from '../IGame.interface';
import { GameType } from '../game-types/game-type.types';

import BootScene from '../scenes/BootScene';
import PlayScene from '../scenes/PlayScene';

import RpgBootScene from '../game-types/rpg/scenes/BootScene';
import RpgPlayScene from '../game-types/rpg/scenes/PlayScene';

import GameFactory from './../factory/game.factory';
import BASE_CONFIG from '../BaseConfig';

/**
 * Demo Game, not a real game type just demonstrates setup for Phaser
 */
const demoGameConfig: IGameConfig = {
	phaser: {
		...BASE_CONFIG.phaser,
		scene: [BootScene, PlayScene]
	},
	base: {
		type: GameType.RPG,
		state: {}
	}
};

const rpgGameConfig: IGameConfig = {
	phaser: {
		...BASE_CONFIG.phaser,
		scene: [RpgBootScene, RpgPlayScene]
	},
	base: {
		type: GameType.RPG,
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
