import { IRouteRule } from '../types';

const RequiresApiKey: IRouteRule = ({ userState }) => {
    return (
        !!userState && !!(userState.user && userState.user.apiKeys.length > 0)
    );
};

export default RequiresApiKey;
