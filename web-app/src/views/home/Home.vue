<template lang="pug">
v-container(fluid)
    v-content
        router-view

    //- Game
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Game from '../../game/components/Game.vue';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';

@Component({
	components: {
		Game
	}
})
export default class Home extends Vue {
	beforeMount() {
		RepositoriesStateModule.syncStoredRepositories();
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	@Watch('hasAppKey', {
		immediate: true
	})
	private redirect() {
		if (!this.hasAppKey && !(this.$router.currentRoute.name === 'no-app-key')) {
			this.$router.push('no-app-key');
		}
	}
}
</script>
