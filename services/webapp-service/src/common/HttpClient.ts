import { UsersClient } from './users.client';
import { RepositoriesClient } from './repositories.client';
import AbstractHttpClient from './HttpClient.abstract';
import AppStateModule from '@/store/app.store';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import VueRouter, { Route } from 'vue-router';
import router from '@/router';
import * as jwtClient from 'jsonwebtoken';

class HttpClient extends AbstractHttpClient {
  public repositories!: RepositoriesClient;
  public users!: UsersClient;

  constructor(client?: AxiosInstance) {
    super(client);
    this.repositories = new RepositoriesClient(this);
    this.users = new UsersClient(this);

    if (this.user) {
      this.refreshUserData();
    }
  }

  public async refreshUserData() {
    const userData = await this.users.loadUserData();
    this.user = {
      ...this.user,
      ...userData
    };
    AppStateModule.setUser({
      ...AppStateModule.user,
      ...userData
    });
  }
}

export default new HttpClient();
