import React from 'react';

import { Button, ButtonColor, ButtonVariant, ButtonSize } from './Button';

export default {
    default: <Button size={ButtonSize.Small}>Totally Default Button</Button>,
    primary: (
        <Button
            color={ButtonColor.Primary}
            disabled={false}
            loading={false}
            variant={ButtonVariant.Contained}
        >
            Primary
        </Button>
    ),
    secondary: (
        <Button
            color={ButtonColor.Secondary}
            disabled={false}
            loading={false}
            variant={ButtonVariant.Contained}
        >
            Secondary
        </Button>
    ),
};
