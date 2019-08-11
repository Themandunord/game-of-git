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
				query {
					gitHubWebhookEvents {
						id
						createdAt
						eventType
						action
						sender
					}
				}
			`,
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
					subscription {
						gitHubWebhookEvent {
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
				// // Variables passed to the subscription. Since we're using a function,
				// // they are reactive
				// variables() {
				// 	return {
				// 		param: this.param
				// 	};
				// },
				// // Mutate the previous result
				// updateQuery: (previousResult, { subscriptionData }) => {
				// 	// Here, return the new result from the previous with the new data
				// 	console.log('update from subscription');
				// 	// return previousResult;
				// }
			}
		}
	} as any // :'(
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
