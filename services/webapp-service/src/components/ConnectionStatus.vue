<template lang="pug">
	v-snackbar(v-model="showMessage" :color="statusColor" :timeout="timeout") {{ message }}
		//- v-btn(color="pink" text @click="showMessage = false") Close
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import {
	ConnectionState,
	DISCONNECTED,
	CONNECTING,
	CONNECTED,
	RECONNECTING
} from '../store/aspects/app/IAppState.interface';

import AppStateModule from '../store/aspects/app';

@Component
export default class ConnectionStatus extends Vue {
	private isConnected = false;
	private showMessage = false;
	private readonly timeout = 0;

	get connection() {
		return AppStateModule.connection;
	}

	get state() {
		return this.connection.state;
	}

	get message() {
		switch (this.state) {
			case CONNECTING:
			case RECONNECTING:
				return 'Connecting';
			case CONNECTED:
				return 'Connected!';
			case DISCONNECTED:
				return 'Disconnected!';
			default:
				return 'Error!';
		}
	}

	@Watch('state')
	async handleStateUpdate() {
		if (this.state === CONNECTED) {
			setTimeout(() => {
				if (this.state === CONNECTED) {
					this.showMessage = false;
				}
			}, 1000);
		} else {
			this.showMessage = true;
		}
	}

	get statusColor() {
		switch (this.connection.state) {
			case DISCONNECTED:
				return 'error';
			case CONNECTING:
			case RECONNECTING:
				return 'warning';
			case CONNECTED:
				return 'success';
			default:
				return 'info';
		}
	}
}
</script>
