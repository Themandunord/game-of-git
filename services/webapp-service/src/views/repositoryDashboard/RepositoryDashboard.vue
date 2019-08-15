<template lang="pug">
v-container(fluid)
	h2.display-3 Game Dashboard - 
		code {{repository.name}}
	v-subheader
		v-chip
			span.caption.font-weight-light 
				v-icon(small color="black") calendar_today 
				|  Repo Incepted At: {{createdAt}} 
		v-chip
			span.caption.font-weight-light 
				v-icon(small color="black") calendar_today 
				|  Last Updated At: {{updatedAt}} 
		v-chip
			span.caption.font-weight-light
				a(:href="repository.url" target="_blank") GitHub
		v-chip
			span.repo-tab.caption.font-weight-light
				v-icon(small color="black") fa-list
				| {{eventCount}} Events Logged since added
				//- v-icon(small color="black" :href="repository.url" target="_blank") mdi-github-circle
	p {{repository.description}}
	EventsSummaryList

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import AddAppKeyForm from '@/components/forms/AddAppKeyForm.vue';
import RepositoriesList from '@/components/repositories/RepositoriesList.vue';
import HttpClient from '@/common/HttpClient';
import EventsSummaryList from '@/components/webhook-events/EventsSummaryList.vue';

@Component({
	components: {
		AddAppKeyForm,
		RepositoriesList,
		EventsSummaryList
	}
})
export default class RepositoryDashboard extends Vue {
	@Prop({
		required: true
	})
	id!: string;

	private shouldRefresh = true; // to only refresh the repo once, this should get extracted

	@Watch('repository', {
		immediate: true
	})
	private async keepRepositoryDataFresh() {
		if (!this.shouldRefresh) {
			return;
		}

		const repoData = await HttpClient.repositories.retrieveRepositoryWithGitData(
			this.repository.owner,
			this.repository.name
		);

		if (!repoData.data) {
			console.error(
				`Did not return any repo data for ${this.repository.owner}'s ${this.repository.name}`
			);

			return;
		}

		console.log('retrieved repodata: ', repoData.data);
		RepositoriesStateModule.setRepository(repoData.data);
		this.shouldRefresh = false;
	}

	get repository() {
		return RepositoriesStateModule.repositories.find(val => val.id === this.id);
	}

	get createdAt() {
		return new Date(this.repository.createdAtExternal).toLocaleString();
	}
	get updatedAt() {
		return new Date(this.repository.updatedAtExternal).toLocaleString();
	}
	get lastUpdatedAt() {
		return new Date(this.repository.updatedAt).toLocaleString();
	}
	get eventCount() {
		return this.repository.eventCount;
	}
	get events() {
		return [];
	}
}
</script>
