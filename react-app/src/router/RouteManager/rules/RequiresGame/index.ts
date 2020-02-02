import { IRouteRule } from '../types';
import { RepositoriesState } from '../../../../store/repositories';

const RequiresGame: IRouteRule<{ repoState: RepositoriesState }> = ({
    repoState,
}) => {
    const canAccessRoute = repoState.repositories.reduce(
        (acc, repo) => acc || !!repo.isTracked,
        false,
    );
    return canAccessRoute;
};

export default RequiresGame;
