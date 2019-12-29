<template lang="pug">

v-layout(row justify-center)
    v-dialog(v-model="dialog" persistent max-width="600px")
        template(v-slot:activator="{ on }")
            v-btn(color="success" dark v-on="on") Add App Key
        v-card
            v-card-title
                span(class="headline") New GitHub App Key
            v-card-text
                v-container(grid-list-md)
                    v-layout(wrap)
                        v-flex(xs12)
                            v-text-field(
								label="App Key Name"
								required
								v-model="name"
								:errorMessages="errorMessages.name"
                           	 	@keypress.enter="save"
								)
                        v-flex(xs12)
                            v-text-field(
								label="GitHub App Key"
								required
								v-model="key"
								:errorMessages="errorMessages.key"
                            	@keypress.enter="save"
							)
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" @click="dialog = false") Close
          v-btn(color="blue darken-1" @click="save" :disabled="!appKeyIsValid") Save
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import gql from 'graphql-tag';
import { GraphQLClient, ErrorHandlerVueComponent } from '../../common/GraphQLClient/GraphQLClient';
import { refreshUserData } from '../../common/user';

const query = gql`
	query($key: String!) {
		validateAppKey(appKey: $key) {
			valid
		}
	}
`;

const mutation = gql`
	mutation($name: String!, $key: String!) {
		createAppKey(data: { key: $key, name: $name }) {
			id
			user {
				id
				gitLogin
			}
			key
			name
		}
	}
`;

const optimisticResponse = {
	data: {
		createAppKey: {
			id: 'abc123123123abc',
			user: {
				id: 'abc123123123abcasd',
				gitLogin: 'miking-the-viking'
			},
			key: 'asdfasdfasdfasdf123123123123',
			name: 'my first app key'
		}
	}
};

interface AddAppKeyResponse {
	createAppKey: {
		id: string;
		user: {
			id: string;
			gitLogin: string;
		};
		key: string;
		name: string;
	};
}
type AddAppKeyResponsePossibilities = AddAppKeyResponse | undefined;

@Component
export default class AddAppKeyForm extends ErrorHandlerVueComponent {
	private dialog = false;
	private name: string | null = null;
	private key: string | null = null;
	private appKeyIsValid: boolean = false;

	apolloValidationKeys = ['name', 'key'];

	@Watch('key')
	private async validateKey() {
		this.appKeyIsValid = await this.validateAppKey();
	}

	get repositories() {
		return RepositoriesStateModule.repositories;
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	get hasRepositories() {
		return this.repositories.length === 0;
	}

	private async validateAppKey() {
		if (this.name != null && this.name.length > 0 && this.key != null && this.key.length > 0) {
			const isValidResponse = await this.$apollo.query({
				query,
				variables: {
					key: this.key
				}
			});
			const isValid = isValidResponse.data.validateAppKey.valid;
			return isValid;
		}
		console.error('Missing param, definitely not valid.');
		return false;
	}

	private async save() {
		if (!this.appKeyIsValid) {
			console.error(
				`Missing data, cannot save ${this.name} ${this.key} ${this.appKeyIsValid}`
			);
			return;
		}
		try {
			await this.$apollo.mutate({
				mutation,
				variables: {
					name: this.name,
					key: this.key
				},
				update: async (store, { data }) => {
					refreshUserData();
				},
				optimisticResponse
			});
			this.setApolloErrors([]);
		} catch (e) {
			GraphQLClient.errorHandler(this, e.graphQLErrors);
		}
	}
}
</script>
