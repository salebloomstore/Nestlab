import type { Request } from 'express';
import type { UserDocument } from '../../auths/schemas/user.schema';

export interface RequestWithUser extends Request {
  user: UserDocument;
}
