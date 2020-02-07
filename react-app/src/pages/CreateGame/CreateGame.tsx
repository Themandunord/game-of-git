import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import CreateGameForm from '../../components/forms/CreateGameForm/CreateGameForm';
import PATH from '../../router/routes';
import { RepositoriesContext } from '../../store/repositories';
import { UserContext } from '../../store/user';

const title = PATH.CREATE_GAME.name;

const CreateGame: React.FC = () => {
    const { name } = useParams();

    const { state, loadRepos, loadingRepositories } = useContext(
        RepositoriesContext,
    );

    const globalUserState = useContext(UserContext);

    useEffect(() => {
        loadRepos({
            variables: {
                username: globalUserState.state.user?.gitLogin,
            },
        });
    }, [loadRepos, globalUserState.state.user]);

    const repository = useMemo(
        () => state.repositories.find(repo => repo.name === name),
        [state.repositories, name],
    );

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Create Game" />
            </Helmet>

            <Grid container alignItems="center">
                <Grid item xs={10}>
                    <p>Create Game for {`${name}`}</p>
                </Grid>
                <Grid item xs={10}>
                    {!repository && loadingRepositories && <p>Loading...</p>}
                    {repository && globalUserState.state.user && (
                        <CreateGameForm
                            repository={repository}
                            user={globalUserState.state.user}
                        />
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default CreateGame;
