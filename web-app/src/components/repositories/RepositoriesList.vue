<template lang="pug">
v-layout(row)
	v-flex(xs12 sm66)
		v-form
			v-container
				v-layout
					v-flex(xs-12 md4)
						//- v-text-field(v-model="repoOfInterest" label="GitHub User" :placeholder="myUsername")
						v-text-field(v-model="repoOfInterest" label="Repository Filter")
		v-simple-table
			thead
				tr
					th.text-left(v-for="tableColumn in tableColumns") {{tableColumn.header}}
			tbody
				tr(v-for="repo in selectableRepos" :key="repo.name")
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
					td {{new Date(repo.createdAt).toLocaleString()}}
					td {{new Date(repo.updatedAt).toLocaleString()}}
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
						v-btn-toggle
							v-btn(
								:color="repo.isTracked ? 'cyan' : 'lightgrey'"
								center
								right
								relative
								@click.stop="repo.isTracked ? goToGame(repo) : createGame(repo)"
								:title="repo.isTracked ? 'Enter Game' : 'Turn Tracking on'"
							)
								v-icon {{repo.isTracked ? "star" : "star_border"}}
								| {{repo.isTracked ? "Game On!" : "Start Game!"}}
							v-btn(v-if="repo.isTracked" color="red" @click.stop="endGame(repo)" :title="'Stop Tracking and end the Game'")
								v-icon close
</template>

<script lang="tsx">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import HttpClient from '../../common/HttpClient';
import { pluck, switchMap, debounceTime } from 'rxjs/operators';
import { repositoryList, trackRepository } from '@/common/repositories';
import gql from 'graphql-tag';

interface RepositoryTableColumn {
	header: string;
	body: any;
}

const tableColumns: RepositoryTableColumn[] = [
	{
		header: 'Owner',
		body: null
	},
	{ header: 'Name', body: null },
	{ header: 'Description', body: null },
	{ header: 'Created At', body: null },
	{ header: 'Updated At', body: null },
	{ header: 'Fork', body: null },
	{ header: 'Private', body: null },
	{ header: 'Game State', body: null }
];

const REPOSITORY_EDITED = gql`
	subscription {
		repositoryMutated {
			id
			idExternal
			name
			isTracked
		}
	}
`;

@Component({
	subscriptions() {
		return {
			repoOfInterestObservable: this.$fromDOMEvent('input', 'keyup').pipe(
				debounceTime(300),
				pluck<Event, string>('target', 'value')
			)
		};
	}
})
export default class RepositoriesControlList extends Vue {
	private userRepos = new Array();

	private repoOfInterest: string = '';
	private repoOfInterestObservable: string = '';
	private tableColumns = tableColumns;
	private repositoryListObserver!: any;

	get selectableRepos() {
		return this.userRepos.filter(val => val.name.indexOf(this.repoOfInterest) >= 0);
	}

	private updateRepository(repoData: any) {
		this.userRepos = this.userRepos.map(repo => {
			return {
				...repo,
				isTracked: repo.id === repoData.idExternal ? repoData.isTracked : repo.isTracked
			};
		});
	}

	private configureRepositoryMutatedSubscription() {
		this.repositoryListObserver = this.$apollo.subscribe({
			query: REPOSITORY_EDITED,
			variables: {
				$token: AppStateModule.jwt
			}
		});
		this.repositoryListObserver.subscribe({
			next: (data: any) => {
				const repositoryData = data.data.repositoryMutated;
				this.updateRepository(repositoryData);
			},
			error(err: any) {
				// TODO: handle better
				console.error('repositoryListObserver error: ', err);
			}
		});
	}

	async mounted() {
		this.configureRepositoryMutatedSubscription();
		this.loadSelectableRepositories();
	}

	private getRepoTrackingColor(isTracking: boolean) {
		return isTracking ? 'blue' : 'white';
	}

	get myUsername() {
		return AppStateModule.user.gitLogin;
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	get userGitLogin() {
		return AppStateModule.user ? AppStateModule.user.gitLogin : null;
	}

	@Watch('hasAppKey', {
		immediate: true
	})
	private async loadSelectableRepositories() {
		if (!this.hasAppKey) {
			throw new Error(
				`User ${AppStateModule.user.email} has no AppKey, unable to query GitHub API`
			);
		}
		this.userRepos = await repositoryList(this.userGitLogin || '');

		RepositoriesStateModule.setRepositories(this.userRepos);
	}

	private goToGame(repo: any) {
		this.$router.push({
			name: 'repository-dashboard',
			params: {
				id: repo.id
			}
		});
	}

	private createGame(repo: any) {
		this.$router.push({
			name: 'setup-game',
			params: {
				repository: repo.name
			}
		});
	}

	private async endGame(repo: any) {
		// endGame()
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
