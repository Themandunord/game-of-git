<template lang="pug">
v-data-table(:headers="headers" :items="gitHubWebhookEvents" :items-per-age="5" class="elevation-1" dark)
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import gql from 'graphql-tag';

@Component({
	apollo: {
		// gitHubWebhookEvents: gql`
		// 	query {
		// 		gitHubWebhookEvents {
		// 			id
		// 			createdAt
		// 			eventType
		// 			action
		// 			sender
		// 		}
		// 	}
		// `,
		gitHubWebhookEvents: {
			query: gql`
				query RepositoryWebhookEvents($id: ID!) {
					gitHubWebhookEvents(where: { repository: { id: $id } }) {
						id
						createdAt
						eventType
						action
						sender
					}
				}
			`,
			variables() {
				return {
					id: (this as any).routeRepoId
				};
			},
			subscribeToMore: {
				// document: gql`
				// 	subscription name($param: String!) {
				// 		itemAdded(param: $param) {
				// 			id
				// 			label
				// 		}
				// 	}
				// `,
				document: gql`
					subscription($id: ID!) {
						gitHubWebhookEvent(where: { node: { repository: { id: $id } } }) {
							mutation
							node {
								id
								createdAt
								eventType
								action
								sender
							}
						}
					}
				`,
				variables() {
					return {
						id: (this as any).routeRepoId
					};
				},
				updateQuery: (previousResult: any, { subscriptionData }: any) => {
					console.log('updateQuery: ');
					console.log(previousResult.gitHubWebhookEvents);
					console.log(subscriptionData);
					if ((subscriptionData as any).data.gitHubWebhookEvent.mutation === 'CREATED') {
						const node = (subscriptionData as any).data.gitHubWebhookEvent.node;
						previousResult.gitHubWebhookEvents.push({
							action: node.action,
							createdAt: node.createdAt,
							eventType: node.eventType,
							id: node.id,
							sender: node.sender
						});
					}
					console.log('There was an update to the query');
				}
			},
			prefetch: true
		}
	} as any // :'(
})
export default class EventsSummaryList extends Vue {
	private gitHubWebhookEvents = [];

	get routeRepoId() {
		return this.$route.params.id;
	}

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
