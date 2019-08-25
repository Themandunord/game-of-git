<template lang="pug">
v-layout(row)
	v-flex(xs12 sm66)
		v-form
			v-container
				v-layout
					v-flex(xs-12 md4)
						v-text-field(v-model="userOfInterest" label="GitHub User" :placeholder="myUsername")
		v-simple-table
			thead
				tr
					th.text-left Owner
					th.text-left Name
					th.text-left Description
					th.text-left Created At
					th.text-left Updated At
					th.text-left Fork
					th.text-left Private
					th.text-left Tracked
			tbody
				tr(v-for="repo in selectableRepositories" :key="repo.name")
					td
						v-avatar.clickable(
							:tile="false"
							:title="repo.owner.login"
							:size="35"
							@click="open(repo.owner.url)"
							color="grey lighten-4"
							)
							img(:src="repo.owner.avatarUrl")
					td {{repo.name}}
					td {{repo.description}}
					td {{new Date(repo.createdAtExternal).toLocaleString()}}
					td {{new Date(repo.updatedAtExternal).toLocaleString()}}
					td 
						v-btn(
							fab
							small
							:color="repo.isFork ? 'cyan' : 'grey'"
							center
							right
							relative
							disabled
							@click.stop=""
							:title="repo.isFork ? 'Repository is a Fork' : 'Repository is not a Fork.'"
						)
							v-icon call_split
					td
						v-btn(
							fab
							small
							:color="repo.isPrivate ? 'red' : 'cyan'"
							center
							right
							relative
							disabled
							@click.stop=""
							:title="repo.isPrivate ? 'Repository is Private' : 'Repository is Public'"
						)
							v-icon {{repo.isPrivate ? 'lock' : 'lock_open'}}
					td 
						v-btn(
							fab
							small
							:color="repo.isTracked ? 'cyan' : 'grey'"
							center
							right
							relative
							@click.stop="toggleRepoTracking(repo)"
							:title="repo.isTracked ? 'Turn Tracking off' : 'Turn Tracking on'"
						)
							v-icon {{repo.isTracked ? "star" : "star_border"}}
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import HttpClient from '../../common/HttpClient';
import { pluck, switchMap, debounceTime } from 'rxjs/operators';

@Component({
	subscriptions() {
		return {
			userOfInterestObservable: this.$fromDOMEvent('input', 'keyup').pipe(
				debounceTime(300),
				pluck<Event, string>('target', 'value')
			)
		};
	}
})
export default class RepositoriesControlList extends Vue {
	private selectableRepositories = [];
	private userOfInterest: string = '';
	private userOfInterestObservable: string = '';

	mounted() {
		// this.loadSelectableRepositories();
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	@Watch('hasAppKey')
	@Watch('userOfInterestObservable')
	reloadRepos() {
		// this.loadSelectableRepositories();
	}

	private getRepoTrackingColor(isTracking: boolean) {
		return isTracking ? 'blue' : 'white';
	}

	get myUsername() {
		return AppStateModule.user.gitLogin;
	}

	private async loadSelectableRepositories() {
		if (!this.hasAppKey) {
			throw new Error(
				`User ${AppStateModule.user.email} has no AppKey, unable to query GitHub API`
			);
		}
		// const selectable = await HttpClient.repositories.loadSelectableRepositories(
		// 	this.userOfInterest
		// );
		// this.selectableRepositories = selectable;
	}

	private async toggleRepoTracking(repo: any) {
		console.log('toggleRepoTracking: ', repo);
		await HttpClient.repositories.toggleRepositoryTracking(repo);
		// this.loadSelectableRepositories();
		RepositoriesStateModule.syncStoredRepositories();
	}

	private open(url: string) {
		window.open(url, '_blank');
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
