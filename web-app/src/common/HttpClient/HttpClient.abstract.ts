import {
	DISCONNECTED,
	CONNECTED,
	CONNECTING,
	ConnectionState
} from './../../store/aspects/app/IAppState.interface';
import router from '@/router';
import AppStateModule from '@/store/aspects/app';
import RepositoriesStateModule from '@/store/aspects/repositories';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as jwtClient from 'jsonwebtoken';
import config from '../../config';
import { LOGIN } from '@/router/routes';
import { interval, BehaviorSubject } from 'rxjs';

const connectionStateObservable = new BehaviorSubject<ConnectionState>(DISCONNECTED);

const PING_INTERVAL_MS = 600_000;

/**
 * Abstract Http Client implementation safely wrapping auth, user context and the underlying implementation.
 */
export default class AbstractHttpClient {
	/**
	 * Static reference to the API URL
	 */
	public static apiUrl = config.API_URL;
	private jwt: string = '';
	private expiresIn: number = 0;
	private expiresAt: number = 0;
	private axiosOptions: AxiosRequestConfig = {};
	private axiosClient!: AxiosInstance;

	/**
	 * Publically get/settable reference to the user object
	 */
	get user() {
		return AppStateModule.user;
	}

	constructor(client?: AxiosInstance) {
		connectionStateObservable.subscribe(x => AppStateModule.setConnectionState({ state: x }));

		const pingInterval = interval(PING_INTERVAL_MS);
		pingInterval.subscribe(() => this.ping());

		if (client) {
			this.axiosClient = client;

			return;
		}
		this.initClient();
	}

	get connectionState() {
		return connectionStateObservable.getValue();
	}

	public async ping() {
		try {
			// AppStateModule.setConnectionState({ state: CONNECTING });
			await this.axiosClient.get(`${AbstractHttpClient.apiUrl}/ping`);
			if (AppStateModule.connection.state !== CONNECTED) {
				AppStateModule.setConnectionState({ state: CONNECTED });
			}
		} catch (e) {
			AppStateModule.setConnectionState({ state: DISCONNECTED });
		}
	}

	/**
	 * Log the user in,
	 * store the jwt for reference and the encoded user object to the HttpClient and the App State Module,
	 * before redirecting the user to their intiially intended destination via the VueRouter's `push` function
	 * @param email Email for rthe user's login
	 * @param password Password for the user's login
	 * @param destination Desired route, likely before middleware redirection to the login page as an unauthenticated user
	 */
	// public async login(email: string, password: string, destination: string) {
	// 	const route = `${AbstractHttpClient.apiUrl}/auth/login`;

	// 	const result = await this.axiosClient.post(route, {
	// 		email,
	// 		password
	// 	});

	// 	this.setJwt(result.data.accessToken);

	// 	const user = jwtClient.decode(result.data.accessToken);
	// 	const userData =
	// 		user instanceof Object
	// 			? { ...user, isAuthenticated: true }
	// 			: { isAuthenticated: false };
	// 	// this.user = userData;
	// 	AppStateModule.setUser(userData);
	// 	AppStateModule.setUser({ ...AppStateModule.user, ...userData });

	// 	router.push(destination);
	// }

	// public async logout() {
	// 	// this.user = null;
	// 	AppStateModule.resetUser();
	// 	RepositoriesStateModule.resetRepositories();
	// 	localStorage.setItem('jwt', '');
	// 	router.push({
	// 		name: LOGIN.name
	// 	});
	// }

	/**
	 * Checks if the jwt is set for local storage, indicating that the user "was" logged in
	 */
	public jwtIsSet() {
		return AppStateModule.jwt;
	}

	/**
	 * Initialize the axiosClient, set the auto token refresh middleware (WIP), try to load pre-saved jwt
	 */
	public initClient() {
		// const tryJwt = localStorage.getItem('jwt');
		if (this.axiosClient == null) {
			this.axiosClient = axios.create(this.axiosOptions);
			// this.setAutoTokenRefreshMiddleware();
		}
		this.ping();
	}

	// private async refreshToken(jwt: string) {
	// 	try {
	// 		const route = `${AbstractHttpClient.apiUrl}/auth/refresh`;
	// 		const result = await this.axiosClient.post(route, {
	// 			jwt
	// 		});

	// 		if (!result.data.accessToken) {
	// 			// this.user = null;
	// 			AppStateModule.resetUser();
	// 			RepositoriesStateModule.resetRepositories();
	// 			this.setJwt('');

	// 			return;
	// 		}

	// 		this.setJwt(result.data.accessToken);

	// 		const user = jwtClient.decode(result.data.accessToken);

	// 		const userData =
	// 			user instanceof Object
	// 				? { ...user, isAuthenticated: true }
	// 				: { isAuthenticated: false };

	// 		// this.user = userData;
	// 		AppStateModule.setUser({ ...AppStateModule.user, ...userData });
	// 	} catch (e) {
	// 		console.error('There was an error refreshing the jwt: ', e);
	// 		AppStateModule.setConnectionState({ state: DISCONNECTED });

	// 		if (e.response.status === 401) {
	// 			// unauthorized. Ensure there is no stored jwt and send to login.
	// 			this.setJwt('');
	// 			window.location.reload();
	// 		}

	// 		throw e;
	// 	}
	// }

	// private setAutoTokenRefreshMiddleware() {
	// 	// tslint:disable:no-console
	// 	console.log('setting auto token refresh middleware');
	// 	this.axiosClient.interceptors.response.use(
	// 		response => {
	// 			console.log('middleware intercepting response: ', response);

	// 			return response;
	// 		},
	// 		error => {
	// 			console.log('middleware detected error');
	// 			console.log(error);
	// 			const errorResponse = error.response;
	// 			if (isTokenExpiredError(errorResponse)) {
	// 				// return this.resetTokenAndReattemptRequest(error);
	// 			}
	// 			console.log('Error in axiosclient interceptor: ', error);

	// 			return Promise.reject(error);
	// 		}
	// 	);
	// }

	// private resetTokenAndReattemptRequest(error: any) {}

	/**
	 * Stores a jwt to the HttpClient,
	 * local storage
	 * and configures the HttpClient's underlying Rest Client to use that jwt as the `Authorization: Bearer` token
	 * @param jwt
	 */
	// public async setJwt(jwt: string) {
	// 	this.jwt = jwt;
	// 	localStorage.setItem('jwt', jwt);
	// 	this.axiosOptions = {
	// 		...this.axiosOptions,
	// 		headers: {
	// 			...(this.axiosOptions.headers ? this.axiosOptions.headers : {}),
	// 			Authentication: `Bearer ${this.jwt}`
	// 		}
	// 	};
	// }

	/**
	 * Performs an HTTP GET request to the given url
	 * @param url
	 */
	public async get(url: string) {
		return axios.get(url);
	}

	/**
	 * Performs an HTTP Post request to the given url with some data
	 * @param url
	 * @param data
	 */
	public async post(url: string, data: any) {
		return axios.post(url, data);
	}

	/**
	 * Performs an HTTP Put request to the given url with some data
	 * @param url
	 * @param data
	 */
	public async put(url: string, data: any) {
		return axios.put(url, data);
	}
}

/**
 * WIP checks if a Token is expired
 * @param errorResponse
 * @todo
 */
function isTokenExpiredError(errorResponse: any) {
	console.log(`isTokenExpiredError check: ${errorResponse}`);

	return false;
}
