import { IRouteRule } from '../types';
import { UserState } from '../../../../store/user';

const RequiresAuth: IRouteRule<{ userState: UserState }> = ({ userState }) => {
    return (
        !!userState &&
        !!(userState.user && userState.loggedIn && userState.token)
    );
};

export default RequiresAuth;
