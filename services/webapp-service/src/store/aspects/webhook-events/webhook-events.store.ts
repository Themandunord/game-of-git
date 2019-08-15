import { IWebhookEventsState } from './IWebhookEventsState.interface';
import HttpClient from '@/common/HttpClient';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

@Module({
	dynamic: true,
	store,
	name: 'webhookEventsModule'
})
class WebhookEventsState extends VuexModule implements IWebhookEventsState {
	public webhookEvents: any[] = []; // TODO: better typing

	// todo: better typing and validation
	@Mutation
	public insertEvent(webhookEvent: any) {
		if (!webhookEvent) {
			return;
		}
		if (
			this.webhookEvents.find(existingEvent => existingEvent.id === webhookEvent.id) == null
		) {
			this.webhookEvents = [...this.webhookEvents, webhookEvent];
		} else {
			console.log('Webhook event already existed, could not insert into webhook events');
		}
	}
}

export default getModule(WebhookEventsState);
