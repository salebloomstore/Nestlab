import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { RequestWithUser } from '../interfaces/request-with-user.interface';
import { Types } from 'mongoose';

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();

    request.user._id = new Types.ObjectId(request.user._id);

    return request.user;
  },
);
