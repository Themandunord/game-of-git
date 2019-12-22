import axios from 'axios';
import config from '../config';

/**
 * Wrapper to easily execute a GitHub GraphQL GQL call.
 *
 * @param key
 * @param data
 */
export const gitHubGql = async (key: string, data: any) => {
    return axios.post(
        config.GITHUB_GRAPHQL_URL,
        { query: data.query },
        {
            headers: {
                Authorization: `Bearer ${key}`
            }
        }
    );
};
