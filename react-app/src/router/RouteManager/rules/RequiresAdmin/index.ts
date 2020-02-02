import { IRouteRule } from '../types';
import { UserState } from '../../../../store/user';

const RequiresAdmin: IRouteRule = ({ userState }) => {
    return !!userState && !!(userState.user && userState.user.role === 'ADMIN');
};

export default RequiresAdmin;
