<template lang="pug">
v-data-table(:headers="headers" :items="gitHubWebhookEvents" :items-per-age="5" class="elevation-1" dark)
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import gql from 'graphql-tag';
// import AppStateModule from '@/store/aspects/app';
// import AddAppKeyForm from '@/components/AddAppKeyForm.vue';
// import RepositoriesList from '@/components/RepositoriesList.vue';
// import HttpClient from '@/common/HttpClient';

@Component({
	apollo: {
		gitHubWebhookEvents: gql`
			query {
				gitHubWebhookEvents {
					id
					createdAt
					eventType
					action
					sender
				}
			}
		`
	}
})
export default class EventsSummaryList extends Vue {
	private gitHubWebhookEvents = [];

	private headers = [
		{
			text: 'ID',
			align: 'left',
			sortable: true,
			value: 'id'
		},
		{ text: 'Created At', value: 'createdAt' },
		{ text: 'Event Type', value: 'eventType' },
		{ text: 'Action', value: 'action' },
		{ text: 'Sender', value: 'sender' }
	];
}
</script>
