import AppStateModule from '@/store/app.store';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import VueRouter, { Route } from 'vue-router';
import router from '@/router';
import * as jwtClient from 'jsonwebtoken';

export const API_URL = process.env.VUE_APP_GIT_SERVICE_HOST;

export default class AbstractHttpClient {
  public static apiUrl = API_URL;
  private jwt: string = '';
  private expiresIn: number = 0;
  private expiresAt: number = 0;
  private axiosOptions: AxiosRequestConfig = {};
  private axiosClient!: AxiosInstance;
  public user: any | null = {};

  constructor(client?: AxiosInstance) {
    if (client) {
      this.axiosClient = client;

      return;
    }
    this.initClient();
  }

  public async login(email: string, password: string, destination: string) {
    const route = `${AbstractHttpClient.apiUrl}/auth/login`;

    const result = await this.axiosClient.post(route, {
      email,
      password
    });

    this.setJwt(result.data.accessToken);

    const user = jwtClient.decode(result.data.accessToken);
    this.user = user;
    AppStateModule.setUser(user);

    router.push(destination);
  }

  public jwtIsSet() {
    return localStorage.getItem('jwt') != null;
  }

  /**
   * Initialize the axiosClient, set the auto token refresh middleware (WIP), try to load pre-saved jwt
   */
  public initClient() {
    const tryJwt = localStorage.getItem('jwt');
    if (this.axiosClient == null) {
      this.axiosClient = axios.create(this.axiosOptions);
      this.setAutoTokenRefreshMiddleware();

      if (tryJwt != null) {
        this.setJwt(tryJwt);
        const user = jwtClient.decode(tryJwt);
        this.user = user;

        AppStateModule.setUser(user);
      }
    }
  }

  private setAutoTokenRefreshMiddleware() {
    console.log('setting auto token refresh middleware');
    this.axiosClient.interceptors.response.use(
      response => {
        console.log('middleware intercepting response: ', response);

        return response;
      },
      error => {
        console.log('middleware detected error');
        console.log(error);
        const errorResponse = error.response;
        if (isTokenExpiredError(errorResponse)) {
          // return this.resetTokenAndReattemptRequest(error);
        }
        console.log('Error in axiosclient interceptor: ', error);

        return Promise.reject(error);
      }
    );
  }

  private resetTokenAndReattemptRequest(error: any) {}

  public async setJwt(jwt: string) {
    this.jwt = jwt;
    localStorage.setItem('jwt', jwt);
    this.axiosOptions = {
      ...this.axiosOptions,
      headers: {
        ...(this.axiosOptions.headers ? this.axiosOptions.headers : {}),
        Authentication: `Bearer ${this.jwt}`
      }
    };
  }

  public async get(url: string) {
    return axios.get(url);
  }

  public async post(url: string, data: any) {
    return axios.post(url, data);
  }

  public async put(url: string, data: any) {
    return axios.put(url, data);
  }
}

function isTokenExpiredError(errorResponse: any) {
  console.log(`isTokenExpiredError check: ${errorResponse}`);

  return false;
}
