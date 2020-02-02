<template lang="pug">
v-container(fluid)
    AddAppKeyForm
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppStateModule from '@/store/aspects/app';
import AddAppKeyForm from '@/components/forms/AddAppKeyForm.vue';
import routeManager from '@/router/RouteManager';
import router from '@/router';
import { REPOSITORIES } from '@/router/routes';

@Component({
	components: {
		AddAppKeyForm
	}
})
export default class AddAppKey extends Vue {
	get hasAppKey() {
		return routeManager.context.hasGitHubAuthToken;
	}

	@Watch('hasAppKey')
	private handleAppKeyChange() {
		if (this.hasAppKey) {
			router.replace({
				name: REPOSITORIES.name
			});
		}
	}
}
</script>
