<template lang="pug">
v-container(fluid)
    v-row
        v-col(cols="10" offset="1")
            h1.display-2 New Game
            h2.subtitle-1 Start a game in {{owner}}'s {{repository}}
    v-row
        v-col(cols="10" offset="1")
            v-card
                v-card-title
                    span.headline New Game Settings
                v-card-text
                    v-container(fluid)
                        v-row
                            v-col(cols="12" md="4")
                                v-select(
                                    :items="gameTypes"
                                    label="Game Type"
                                    solo
                                    v-model="selectedGameType"
                                    disabled
                                )
                            v-col(cols="12" offset-md="1" md="7")
                                h3.display-3 DESCRIPTION
                                p.body-2 blah blahblah blahblah blahblah blahblah blahblah blahDef
                v-card-actions
                    v-container
                        v-row(justify="end" align="center")
                            v-btn.primary.mr-6.mb-2(large @click="submitForm") Start Game!
</template>

<script lang="tsx">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import { GAME_TYPES, GameType } from '@game-of-git/common/game/game.types';
import { NewGameInterface } from '@game-of-git/common';
import { createGame } from '../../../common/game';

const NEW_GAME_FORM: NewGameInterface = {
	gameType: null,
	owner: null,
	repository: null
};

const DEFAULT_GAME = GameType.Rpg;

@Component
export default class SetupGame extends Vue {
	private selectedGameType: GameType | null = GameType.Rpg;
	private newGameForm: NewGameInterface = NEW_GAME_FORM;

	created() {
		this.resetForm();
	}

	private resetForm() {
		this.newGameForm.owner = AppStateModule.user.gitLogin || null;
		this.newGameForm.repository = this.$route.params.repository;
		this.newGameForm.gameType = DEFAULT_GAME;
	}

	private async submitForm() {
		console.log('submitting form', this.newGameForm);

		// GQL form submit here
		const createdGame = await createGame(this.newGameForm);

		console.log('created game: ', createdGame);
	}

	get repository() {
		return this.$route.params.repository;
	}

	get owner() {
		return AppStateModule.user.gitLogin;
	}

	get gameTypes() {
		return GAME_TYPES;
	}
}
</script>

<style lang="scss" scoped>
.clickable {
	cursor: pointer;
}
.ellipsis {
	text-overflow: ellipsis;
}
</style>
