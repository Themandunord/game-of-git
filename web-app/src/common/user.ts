import { apolloClient } from './apollo.provider';
import GQL_QUERIES from './gql.constants';
import AppStateModule from '@/store/aspects/app';
import routeManager from '@/router/RouteManager';

export const refreshUserData = async () => {
	const userData = await apolloClient.query({
		query: GQL_QUERIES.AUTH.me,
		fetchPolicy: 'no-cache'
	});

	const user = {
		...userData.data.me
	};
	AppStateModule.setUser(user);
	AppStateModule.setAuthenticated(true);
	routeManager.updateAuthStatusInContext();
};
