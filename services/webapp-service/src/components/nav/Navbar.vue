<template lang="pug">
div
	v-app-bar(app clipped-left)
		
		v-app-bar-nav-icon(@click.stop="drawer = !drawer")
		v-toolbar-title A Game of Git

	v-navigation-drawer(v-model="drawer" app clipped)
		v-list(dense)
			v-list-item(
				v-for="route in routes" :key="route.path" @click="routeTo(route.name, route.props)"
			)
				v-list-item-icon
					v-icon dashboard
				v-list-item-content
					v-list-item-title(v-text="route.displayName")
		
		v-list.logout(dense v-if="shouldShowLogout")
			v-list-item(@click="logout")
				v-list-item-icon
					v-icon dashboard
				v-list-item-content
					v-list-item-title Logout
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';

@Component
export default class NavBar extends Vue {
	@Prop({
		required: true
	})
	private routes!: RouteConfig[];

	public routeTo(path: string, params?: any) {
		const routeTo = {
			name: path,
			params: params ? { ...params } : {}
		};
		this.$router.push(routeTo);
	}

	get shouldShowLogout() {
		return AppStateModule.user.isAuthenticated;
	}

	logout() {
		HttpClient.logout();
	}

	get drawer() {
		return AppStateModule.navExpanded;
	}

	set drawer(val: boolean) {
		AppStateModule.setNavExpanded(val);
	}

	// use prop values for initial data
	//   helloMsg = 'Hello, ' + this.propMessage
}
</script>

<style lang="scss" scoped>
.logout {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
