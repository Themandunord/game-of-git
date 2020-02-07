import { Button, ButtonGroup } from '@material-ui/core';
import React, { useCallback, useContext, useMemo } from 'react';
import { useHistory } from 'react-router';
import PATH from '../../../router/routes';
import { ButtonColor } from './Button';
import { RepositoriesContext } from '../../../store/repositories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXRay } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/react-hooks';
import EndGameMutation from '../../../gql/mutations/EndGameMutation.gql';
import { setIsLoading, setNotLoading } from '../../../store/system/loading';
import { SystemContext } from '../../../store/system';

interface GameButtonProps {
    repositoryName: string;
    action: 'play' | 'create';
}

export interface EndGameFormData {
    gameId: string;
}

const GameButton: React.FC<GameButtonProps> = ({ repositoryName, action }) => {
    const { push } = useHistory();

    const { state } = useContext(RepositoriesContext);
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;

    const repository = useMemo(
        () => state.repositories.find(repo => repo.name === repositoryName),
        [state.repositories, repositoryName],
    );

    const [endGame] = useMutation<any, EndGameFormData>(EndGameMutation);

    const go = useCallback(() => {
        const path = (action === 'create'
            ? PATH.CREATE_GAME
            : PATH.GAME
        ).path.replace(':name', repositoryName);
        push(path);
    }, [action, repositoryName, push]);

    const end = useCallback(async () => {
        console.log('end game ', repository);

        if (!repository) {
            return;
        }

        try {
            dispatchSystem(setIsLoading());
            console.log(repository);
            const endGameResponse = await endGame({
                variables: {
                    gameId: repository.id,
                },
            });

            console.log(endGameResponse);
        } catch (e) {
            console.error(e);
        }
        dispatchSystem(setNotLoading());
    }, [endGame, repository, dispatchSystem]);

    const PlayButton: React.FC = () => (
        <Button variant="text" color={ButtonColor.Secondary} onClick={go}>
            {action === 'create' ? 'Create' : 'Play'}
        </Button>
    );

    return (
        <>
            {action === 'play' && (
                <ButtonGroup>
                    <PlayButton />
                    <Button
                        variant="contained"
                        color={ButtonColor.Primary}
                        onClick={end}
                    >
                        <FontAwesomeIcon size="xs" icon={faXRay} />
                    </Button>
                </ButtonGroup>
            )}
            {action !== 'play' && <PlayButton />}
        </>
    );
};

export default GameButton;
