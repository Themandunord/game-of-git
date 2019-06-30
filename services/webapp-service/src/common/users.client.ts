import AbstractHttpClient from './HttpClient.abstract';

export class UsersClient {
  constructor(private readonly client: AbstractHttpClient) {}

  async loadUserData() {
    const result = await this.client.get(
      `${AbstractHttpClient.apiUrl}/users/${this.client.user.id}/data`
    );

    return result.data;
  }

  async addAppKey(username: string, repoName: string, key: string, user: string) {
    await this.client.put(`${AbstractHttpClient.apiUrl}/users/add-key`, {
      username,
      name: repoName,
      key,
      user
    });
  }

  async validateAppKey(username: string, key: string) {
    try {
      const isValid = await this.client.post(`${AbstractHttpClient.apiUrl}/users/validate-key`, {
        username,
        key
      });

      if (isValid.data == null) {
        console.error('Missing data property on app key validation response.');

        return false;
      }

      const result = isValid.data;

      if (!(result === true || result === false)) {
        if (result === 'true' || result === 'false') {
          return result === 'true';
        }

        return false;
      }

      return result as boolean;
    } catch (e) {
      console.error(`There was an error validating the app key ${e}`);

      return false;
    }
  }
}
