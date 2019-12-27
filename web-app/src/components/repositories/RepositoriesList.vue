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
					th.text-left(v-for="tableColumn in tableColumns") {{tableColumn.header}}
			tbody
				tr(v-for="repo in repos" :key="repo.name")
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
						v-btn(
							fab
							small
							:color="repo.isTracked ? 'cyan' : 'grey'"
							center
							right
							relative
							@click.stop="toggleRepoTracking(repo.name, userOfInterest)"
							:title="repo.isTracked ? 'Turn Tracking off' : 'Turn Tracking on'"
						)
							v-icon {{repo.isTracked ? "star" : "star_border"}}
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
	{ header: 'Tracked', body: null }
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
			userOfInterestObservable: this.$fromDOMEvent('input', 'keyup').pipe(
				debounceTime(300),
				pluck<Event, string>('target', 'value')
			)
		};
	}
})
export default class RepositoriesControlList extends Vue {
	private repos = new Array();
	private userOfInterest: string = AppStateModule.user.gitLogin || '';
	private userOfInterestObservable: string = '';
	private tableColumns = tableColumns;
	private repositoryListObserver!: any;

	get selectableRepos() {
		return this.repos;
	}

	set selectableRepos(newVal: any[]) {
		this.repos = newVal;
	}

	private updateRepository(repoData: any) {
		const updatedRepos = this.selectableRepos.map(repo => {
			return {
				...repo,
				isTracked: repo.id === repoData.idExternal ? repoData.isTracked : repo.isTracked
			};
		});
		this.selectableRepos = updatedRepos;
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
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	@Watch('hasAppKey')
	@Watch('userOfInterestObservable')
	reloadRepos() {
		this.loadSelectableRepositories();
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
		this.selectableRepos = await repositoryList(this.userOfInterest);
	}

	private async toggleRepoTracking(repo: string, owner: string) {
		await trackRepository(repo, owner);
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
