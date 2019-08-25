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

import NavBar from '@/components/nav/Navbar.vue';
import { ROUTES } from '@/router/routes';
import router from '@/router';
import routeManager, { RouteManager } from '@/router/RouteManager';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import { REPOSITORY_DASHBOARD } from '@/router/routes';
import { IRoute } from '@/router/routes';
import ConnectionStatus from './components/notifications/ConnectionStatus.vue';
import HttpClient from '@/common/HttpClient';

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

	get user() {
		return AppStateModule.user;
	}

	@Watch('user', {
		deep: true,
		immediate: true
	})
	private async handleUserUpdate() {
		console.log('user update!', this.user);
		console.log('App.vue calling on RepositoriesStateModule to sync stored repositories');
		const res = await RepositoriesStateModule.syncStoredRepositories();
		console.log('Done syncStoredRepositories', res);
	}

	async mounted() {
		// tslint:disable-next-line:no-console
		// console.log(this.routeManager.myRoutes);
		console.log('App.vue calling on RepositoriesStateModule to sync stored repositories');
		const res = await RepositoriesStateModule.syncStoredRepositories();
		console.log('Done syncStoredRepositories', res);
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
