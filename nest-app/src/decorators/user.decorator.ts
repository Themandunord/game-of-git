import { createParamDecorator } from '@nestjs/common';
import { User } from '@game-of-git/common';

export const CurrentUser = createParamDecorator(
    (data, [root, args, ctx, info]) => {
        return ctx.req.user;
    }
);
