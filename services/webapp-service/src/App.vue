<template lang="pug">
	v-app(dark)
		NavBar(:routes="routes")
		v-content
			router-view
		ConnectionStatus
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

import NavBar from '@/components/Navbar.vue';
import { ROUTES } from '@/router/routes';
import router from '@/router';
import routeManager, { RouteManager } from '@/router/RouteManager';
import RepositoriesStateModule from '@/store/aspects/repositories';
import { REPOSITORY_DASHBOARD } from '@/router/routes';
import { IRoute } from '@/router/routes';
import ConnectionStatus from './components/ConnectionStatus.vue';

@Component({
	components: {
		NavBar,
		ConnectionStatus
	}
})
export default class App extends Vue {
	public routeManager = routeManager;

	get routes() {
		return this.routeManager.myRoutes;
	}

	beforeMount() {
		// tslint:disable-next-line:no-console
		console.log(this.routeManager.myRoutes);
		RepositoriesStateModule.syncStoredRepositories();
	}

	get trackedRepositories() {
		return RepositoriesStateModule.repositories.filter(repo => repo.isTracked === true);
	}

	@Watch('trackedRepositories', {
		deep: true,
		immediate: true
	})
	private async updateCustomRouteRepositories() {
		const newCustomRoutes = this.trackedRepositories.map(repo => {
			return {
				name: REPOSITORY_DASHBOARD.name,
				props: {
					id: repo.id
				},
				displayName: `${repo.name} Dashboard`
			};
		});
		routeManager.customRoutes = newCustomRoutes;
	}
}
</script>
