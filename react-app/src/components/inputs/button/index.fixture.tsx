import React from 'react';

import { Button, ButtonColor, ButtonVariant, ButtonSize } from './Button';
import GameButton from './GameButton';

const SetupGameButton: React.FC<{
    repositoryName: string;
    isTracked: boolean;
}> = ({ repositoryName, isTracked }) => (
    <GameButton
        repositoryName={repositoryName}
        action={isTracked ? 'play' : 'create'}
    />
);

export default {
    Default: <Button size={ButtonSize.Small}>Totally Default Button</Button>,
    Primary: (
        <Button
            color={ButtonColor.Primary}
            disabled={false}
            loading={false}
            variant={ButtonVariant.Contained}
        >
            Primary
        </Button>
    ),
    Secondary: (
        <Button
            color={ButtonColor.Secondary}
            disabled={false}
            loading={false}
            variant={ButtonVariant.Contained}
        >
            Secondary
        </Button>
    ),
    'Game Button': (
        <SetupGameButton repositoryName={'Some Repository'} isTracked={false} />
    ),
};
