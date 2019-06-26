import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import VueRouter, { Route } from 'vue-router';
import router from '@/router';

const API_URL = process.env.VUE_APP_GIT_SERVICE_HOST;

class HttpClient {
  private jwt: string = '';
  private expiresIn: number = 0;
  private expiresAt: number = 0;
  private axiosOptions: AxiosRequestConfig = {};

  private axiosClient!: AxiosInstance;

  constructor() {
    this.initClient();
  }

  public async login(email: string, password: string, destination: string) {
    const route = `${API_URL}/auth/login`;

    const result = await this.axiosClient.post(route, {
      email,
      password
    });

    this.setJwt(result.data.accessToken);
    router.push(destination);
  }

  public jwtIsSet() {
    return localStorage.getItem('jwt') != null;
  }

  /**
   * Initialize the axiosClient, set the auto token refresh middleware (WIP), try to load pre-saved jwt
   */
  public initClient() {
    this.axiosClient = axios.create(this.axiosOptions);
    this.setAutoTokenRefreshMiddleware();

    const tryJwt = localStorage.getItem('jwt');

    if (tryJwt != null) {
      this.setJwt(tryJwt);
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
}

function isTokenExpiredError(errorResponse: any) {
  console.log(`isTokenExpiredError check: ${errorResponse}`);

  return false;
}

export default new HttpClient();
