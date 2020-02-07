import { IRouteRule } from '../types';

const RequiresGitHubAppKey: IRouteRule = ({ userState }) => {
    return (
        !!userState && !!(userState.user && userState.user.appKeys.length > 0)
    );
};

export default RequiresGitHubAppKey;
