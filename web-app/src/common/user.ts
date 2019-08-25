import { apolloClient } from './apollo.provider';
import GQL_QUERIES from './gql.constants';
import AppStateModule from '@/store/aspects/app';

export const refreshUserData = async () => {
    console.log('refreshing user data');
    const userData = await apolloClient.query({
        query: GQL_QUERIES.AUTH.me
    })

    const user = {
        ...userData.data.me
    };

    AppStateModule.setUser(user);
    AppStateModule.setAuthenticated(true);
}