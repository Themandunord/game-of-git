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
                            v-text-field(label="GitHub Username" required v-model="username")
                        v-flex(xs12)
                            v-text-field(label="App Key Name" required v-model="name")
                        v-flex(xs12)
                            v-text-field(label="GitHub App Key" required v-model="key")
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" flat @click="dialog = false") Close
          v-btn(color="blue darken-1" flat @click="save" :disabled="!appKeyIsValid") Save
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';

@Component
export default class AddAppKeyForm extends Vue {
	private dialog = false;
	private username: string | null = null;
	private name: string | null = null;
	private key: string | null = null;
	private appKeyIsValid: boolean = false;

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
		if (
			this.username != null &&
			this.username.length > 0 &&
			this.name != null &&
			this.name.length > 0 &&
			this.key != null &&
			this.key.length > 0
		) {
			const isValid = await HttpClient.users.validateAppKey(this.username, this.key);
			console.log(`server returned: ${isValid} which is a ${typeof isValid}`);

			return isValid;
		}
		console.log('Missing param, definitely not valid.');

		return false;
	}

	private async save() {
		if (!this.appKeyIsValid) {
			console.log('App key is not valid, cannot save');

			return;
		}
		if (!this.appKeyIsValid) {
			console.log(
				`Missing data, cannot save ${this.username} ${this.name} ${this.key} ${this.appKeyIsValid}`
			);

			return;
		}

		await HttpClient.users.addAppKey(
			this.username!!,
			this.name!!,
			this.key!!,
			AppStateModule.user.id!!
		);

		HttpClient.refreshUserData();
	}
}
</script>
