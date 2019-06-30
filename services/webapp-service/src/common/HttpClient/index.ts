import AbstractHttpClient from './HttpClient.abstract';
import { HttpClient } from './HttpClient';

export * from './repositories.client';
export * from './users.client';

export { AbstractHttpClient };

export default new HttpClient();
