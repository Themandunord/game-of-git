import { Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { PATH } from '../../../router/routes';
import { ButtonColor } from './Button';

interface GameButtonProps {
    repositoryName: string;
    action: 'play' | 'create';
}

const GameButton: React.FC<GameButtonProps> = ({
    children,
    repositoryName,
    action,
}) => {
    const { push } = useHistory();

    const go = useCallback(() => {
        const path = (action === 'create'
            ? PATH.CREATE_GAME
            : PATH.GAME
        ).path.replace(':name', repositoryName);
        push(path);
    }, [action, repositoryName, push]);

    return (
        <Button variant="text" color={ButtonColor.Secondary} onClick={go}>
            {children}
        </Button>
    );
};

export default GameButton;
