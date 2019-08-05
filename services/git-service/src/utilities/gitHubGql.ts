import axios from 'axios';
import config from '../config';

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
