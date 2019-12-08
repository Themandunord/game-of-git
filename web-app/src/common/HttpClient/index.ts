import AbstractHttpClient from './HttpClient.abstract';
import { HttpClient } from './HttpClient';

export * from './repositories/repositories.client';
export * from './users/users.client';

export { AbstractHttpClient };

export default new HttpClient();
