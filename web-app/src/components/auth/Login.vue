<template lang="pug">
v-container(fluid fill-height)
    v-layout(align-center justify-center)
        v-flex(xs12 sm8 md4)
            v-card.elevation-12
                v-card-text
                    v-form
                        v-text-field(
                            prepend-icon="person"
                            name="login"
                            label="Login"
                            type="text"
                            v-model="email"
                            )
                        v-text-field(
                            id="password"
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            type="password"
                            v-model="password"
                            )
                v-card-actions
                    v-spacer
                    v-btn(color="primary" @click="login") Login
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HttpClient from '@/common/HttpClient';

@Component
export default class Login extends Vue {
	public email: string = '';
	public password: string = '';

	get httpClient() {
		return HttpClient;
	}

	login() {
		this.httpClient.login(
			this.email,
			this.password,
			this.$route.params.nextUrl ? this.$route.params.nextUrl : '/'
		);
	}
}
</script>
