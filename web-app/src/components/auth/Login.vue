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
                            v-model="email",
                            :errorMessages="errorMessages.email"
                            @keypress.enter="login"
                            )
                        v-text-field(
                            id="password"
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            type="password"
                            :errorMessages="errorMessages.password"
                            v-model="password"
                            @keypress.enter="login"
                            )
                v-card-actions
                    v-spacer
                    v-btn(color="primary" @click="login") Login
    v-snackbar(v-model="errorMessages.critical" color="red" :timeout="0")
        div( v-text="errorMessages.critical")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';
import AppStateModule from '@/store/aspects/app';
import router from '@/router';
import { HOME } from '@/router/routes/home';

import { GraphQLClient, ErrorHandlerVueComponent } from '../../common/GraphQLClient/GraphQLClient';

const mutation = gql`
	mutation($email: String!, $password: String!) {
		login(data: { email: $email, password: $password }) {
			token
			user {
				id
				email
				gitLogin
				name
				createdAt
				updatedAt
			}
		}
	}
`;

const optimisticResponse = {
	login: {
		token: 'scooby doo',
		user: {
			id: 'asdf123123123',
			email: 'someemail@host.com',
			gitLogin: 'someGitLogin',
			name: 'someName',
			createdAt: new Date(),
			updatedAt: new Date(),
			__typename: 'User'
		},
		__typename: 'Auth'
	}
};

interface LoginResponse {
	login: {
		token: string;
		user: {
			id: string;
			email: string;
			gitLogin: string;
			name: string;
			createdAt: Date;
			updatedAt: Date;
			__typename: string;
		};
		__typename: string;
	};
}
type LoginResponsePossibilities = LoginResponse | undefined;

@Component
export default class Login extends ErrorHandlerVueComponent {
	public email: string = '';
	public password: string = '';
	protected apolloValidationKeys = ['email', 'password'];

	created() {
		console.log('login.vue created');
	}

	// new GQL Way
	async login() {
		try {
			await this.$apollo.mutate({
				mutation,
				variables: {
					email: this.email,
					password: this.password
				},
				update: async (store, { data }) => {
					this.handleLogin(data);
				},
				optimisticResponse
			});
			this.setApolloErrors([]);
		} catch (e) {
			GraphQLClient.errorHandler(this, e.graphQLErrors);
		}
	}

	private async handleLogin(loginResp: LoginResponsePossibilities) {
		console.log('handling login: ', loginResp);
		if (!loginResp) throw new Error('loginResp is undefined');

		const token = loginResp.login.token;
		if (token === optimisticResponse.login.token) {
			return;
		}
		const user = loginResp.login.user;

		const destination = this.$route.params.nextUrl
			? this.$route.params.nextUrl
			: {
					name: HOME.name as string
			  };

		const userData =
			user instanceof Object
				? {
						...user,
						isAuthenticated: true
				  }
				: { isAuthenticated: false };

		AppStateModule.setUser({ ...AppStateModule.user, ...userData, isAuthenticated: true });
		AppStateModule.setJwt(token);

		await router.push(destination);
	}
}
</script>
