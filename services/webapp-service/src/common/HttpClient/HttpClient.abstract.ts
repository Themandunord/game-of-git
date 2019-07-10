import router from '@/router';
import AppStateModule from '@/store/aspects/app';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as jwtClient from 'jsonwebtoken';
import config from '../../config';

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
  public user: any | null = {};

  constructor(client?: AxiosInstance) {
    if (client) {
      this.axiosClient = client;

      return;
    }
    this.initClient();
  }

  /**
   * Log the user in,
   * store the jwt for reference and the encoded user object to the HttpClient and the App State Module,
   * before redirecting the user to their intiially intended destination via the VueRouter's `push` function
   * @param email Email for rthe user's login
   * @param password Password for the user's login
   * @param destination Desired route, likely before middleware redirection to the login page as an unauthenticated user
   */
  public async login(email: string, password: string, destination: string) {
    const route = `${AbstractHttpClient.apiUrl}/auth/login`;

    const result = await this.axiosClient.post(route, {
      email,
      password
    });

    this.setJwt(result.data.accessToken);

    const user = jwtClient.decode(result.data.accessToken);
    const userData = user instanceof Object ? {...user, isAuthenticated: true} : {isAuthenticated: false};
    this.user = userData;
    AppStateModule.setUser({...AppStateModule.user, ...userData});

    router.push(destination);
  }

  /**
   * Checks if the jwt is set for local storage, indicating that the user "was" logged in
   */
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
        if (!(this.user.isAuthenticated)) {
          this.refreshToken(tryJwt);
        }
      }
    }
  }

  private async refreshToken(jwt: string) {
    console.log('trying to get refresh token');
    const route = `${AbstractHttpClient.apiUrl}/auth/refresh`;

    const result = await this.axiosClient.post(route, {
      jwt
    });

    console.log('result from refresh route: ', result.data);

    this.setJwt(result.data.accessToken);

    const user = jwtClient.decode(result.data.accessToken);
    const userData = user instanceof Object ? { ...user, isAuthenticated: true } : { isAuthenticated: false };
    this.user = userData;
    AppStateModule.setUser({ ...AppStateModule.user, ...userData });
  }

  private setAutoTokenRefreshMiddleware() {
    // tslint:disable:no-console
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

  /**
   * Stores a jwt to the HttpClient,
   * local storage
   * and configures the HttpClient's underlying Rest Client to use that jwt as the `Authorization: Bearer` token
   * @param jwt
   */
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
