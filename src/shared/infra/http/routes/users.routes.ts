import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@modules/users/useCases/listUsers/ListUsersController';
import { UpdateUserAvatarController } from '@modules/users/useCases/updateUserAvatar/UpdateUserAvatarController';

import uploadConfig from '../../../../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.get('/', ensureAuthenticated, listUsersController.handle);

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  ensureAuthenticated,
  updateUserAvatarController.handle
);

export { usersRoutes };
