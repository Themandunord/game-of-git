import React, { useContext, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import PATH from '../../router/routes';
import { RepositoriesContext } from '../../store/repositories';
import { UserContext } from '../../store/user';
import { useParams } from 'react-router';
import { Link, Typography } from '@material-ui/core';
import WebhookStream from '../../components/dashboard/WebhookStream/WebhookStream';

const title = PATH.GAME.name;

const Game = () => {
    const globalUserState = useContext(UserContext);
    const { name } = useParams();

    const { state, loadRepos, loadingRepositories } = useContext(
        RepositoriesContext,
    );

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
                <meta name="description" content="Game" />
            </Helmet>
            {!repository && loadingRepositories && <p>Loading...</p>}
            {repository && (
                <>
                    <Typography variant="h3" component="h1" gutterBottom>
                        <Link href={repository.url} target="_blank">
                            {repository.name}
                        </Link>{' '}
                        The Game
                    </Typography>
                    <p>{repository.description}</p>
                    <WebhookStream repository={repository} />
                </>
            )}
        </>
    );
};

export default Game;
