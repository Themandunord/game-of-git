import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PATH } from '../../router/routes';

const title = PATH.GAME.name;

const Game = () => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Game" />
            </Helmet>
            Game
        </div>
    );
};

export default Game;
