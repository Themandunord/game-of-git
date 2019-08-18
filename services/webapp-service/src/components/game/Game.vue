<template lang="pug">
  div(id="game-container" v-if="downloaded")
  div.placeholder(v-else) Downloading ...
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';

@Component
export default class Game extends Vue {
	private downloaded: boolean = false;

	async mounted() {
		const game = await import(/* webpackChunkName: "game" */ '@/game');
		console.log(game);
		this.downloaded = true;
		this.$nextTick(() => game.launch());
	}
}
</script>
